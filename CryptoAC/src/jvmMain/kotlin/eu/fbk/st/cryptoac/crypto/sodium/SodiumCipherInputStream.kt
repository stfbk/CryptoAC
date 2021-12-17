package eu.fbk.st.cryptoac.crypto.sodium

import com.ionspin.kotlin.crypto.SecretStreamXChaCha20Poly1305State
import com.ionspin.kotlin.crypto.secretstream.*
import java.io.FilterInputStream
import java.io.IOException
import java.io.InputStream
import java.lang.Thread.sleep
import javax.crypto.BadPaddingException
import javax.crypto.IllegalBlockSizeException
import kotlin.experimental.and

/**
 * A filter input stream applying the symmetric Sodium stream cipher
 * with the given [stateAndHeader] and [mode] to the [inputStream]
 */
class SodiumCipherInputStream(
    inputStream: InputStream,
    stateAndHeader: SecretStreamStateAndHeader,
    mode: Int
) : FilterInputStream(inputStream) {

    /** The state of the cipher, embedding the secret key and the nonce */
    private var state: SecretStreamXChaCha20Poly1305State = stateAndHeader.state

    /** The header of the cipher. The same header must be used for encryption and decryption  */
    private var header: ByteArray = stateAndHeader.header.toByteArray()

    /** The stream containing the input to en/decrypt  */
    private var input: InputStream = inputStream

    /** The buffer in which to store the bytes read from the [input] */
    private var ibuffer: ByteArray

    /** Whether the [input] stream finished */
    private var done = false

    /** The buffer in which to write the output, i.e., the en/decrypted bytes */
    private var obuffer: ByteArray? = null

    /** Starting offset from which to read the [obuffer] (in case the caller reads byte per byte) */
    private var ostart = 0

    /** Ending offset until which read the [obuffer] */
    private var ofinish = 0

    /** Whether the called called the close method */
    private var closed = false

    /** Either [ENCRYPT_MODE] for encrypting or [DECRYPT_MODE] for decrypting */
    private var cipherMode = mode

    /**
     * Whether the header has already been included at the beginning of the output stream.
     * The header always is [crypto_secretstream_xchacha20poly1305_HEADERBYTES] bytes long
     */
    private var sentHeader = false


    /**
     * Check that a valid mode has been provided and accordingly set the
     * length of the input buffer. We encrypt blocks of 512 bytes. However,
     * for decryption, the ibuffer should be [crypto_secretstream_xchacha20poly1305_ABYTES]
     * bytes longer, i.e., the length of the authentication tag for the
     * integrity of the block
     */
    init {
        require(mode == ENCRYPT_MODE || mode == DECRYPT_MODE) { "Illegal cipher mode given" }
        ibuffer = ByteArray(512 + if (mode == DECRYPT_MODE) {
            crypto_secretstream_xchacha20poly1305_ABYTES
        } else {
            0
        })
    }

    companion object {
        const val ENCRYPT_MODE = 1
        const val DECRYPT_MODE = 2
    }

    /**
     * Read data from the [ibuffer], process it (either encrypt or decrypt)
     * and put the resulting bytes in the [obuffer]. Return the number of
     * bytes in the [obuffer]
     */
    @get:Throws(IOException::class)
    private val moreData: Int
        get() = if (done) {
            -1
        } else {
            /**
             * If we are encrypting, first send the
             * header, which is required for decryption
             */
            if (cipherMode == ENCRYPT_MODE && !sentHeader) {
                sentHeader = true
                obuffer = header
                ostart = 0
                ofinish = crypto_secretstream_xchacha20poly1305_HEADERBYTES
                crypto_secretstream_xchacha20poly1305_HEADERBYTES
            } else {
                var readIn = input.read(ibuffer)
                if (readIn == -1) {
                    done = true
                    /**
                     * If we already read everything, and we
                     * are encrypting, do the final block
                     */
                    if (cipherMode == ENCRYPT_MODE) {
                        obuffer = SecretStream.xChaCha20Poly1305Push(
                            state = state,
                            message = UByteArray(0),
                            associatedData = UByteArray(0),
                            tag = crypto_secretstream_xchacha20poly1305_TAG_FINAL.toUByte(),
                        ).toByteArray()
                        if (obuffer == null) {
                            -1
                        } else {
                            ostart = 0
                            ofinish = obuffer!!.size
                            ofinish
                        }
                    }
                    /**
                     * If we already read everything, and we
                     * are decrypting, do nothing (pull final
                     * is not required)
                     */
                    else {
                        -1
                    }
                } else {

                    /**
                     * If we are here, it means that we read [readIn] bytes
                     * from the [ibuffer]. To ensure that the [ibuffer] was
                     * completely filled, keep reading from the [input]
                     * until we complete the block or the [input] is exhausted
                     */
                    var exhausted = false
                    while (ibuffer.size != readIn && !exhausted) {
                        val readIn2 = input.read(ibuffer, readIn, ibuffer.size-readIn)
                        if (readIn2 == -1) {
                            done = true
                            exhausted = true
                        } else {
                            readIn += readIn2
                        }
                    }
                    ibuffer = ibuffer.sliceArray(0 until readIn)


                    /** Either encrypt or decrypt the [ibuffer] */
                    obuffer = if (cipherMode == ENCRYPT_MODE) {
                        SecretStream.xChaCha20Poly1305Push(
                            state = state,
                            message = ibuffer.toUByteArray(),
                            associatedData = UByteArray(0),
                            tag = if (exhausted) {
                                crypto_secretstream_xchacha20poly1305_TAG_FINAL.toUByte()
                            } else {
                                crypto_secretstream_xchacha20poly1305_TAG_MESSAGE.toUByte()
                            }
                        ).toByteArray().apply {
                        }
                    } else {
                        val decryptedDataAndTag = SecretStream.xChaCha20Poly1305Pull(
                            state = state,
                            ciphertext = ibuffer.toUByteArray(),
                            associatedData = UByteArray(0),
                        )
                        if (decryptedDataAndTag.tag == crypto_secretstream_xchacha20poly1305_TAG_FINAL.toUByte()) {
                            done = true
                        }
                        decryptedDataAndTag.decryptedData.toByteArray()
                    }

                    ostart = 0
                    ofinish = if (obuffer == null) {
                        0
                    } else {
                        obuffer!!.size
                    }
                    ofinish
                }
            }
        }

    @Throws(IOException::class)
    override fun read(): Int {
        if (ostart >= ofinish) {
            var i: Int
            i = 0
            while (i == 0) {
                i = moreData
            }
            if (i == -1) {
                return -1
            }
        }
        val two55 = 255
        return (obuffer!![ostart++] and two55.toByte()).toInt()
    }

    @Throws(IOException::class)
    override fun read(b: ByteArray): Int {
        return this.read(b, 0, b.size)
    }

    @Throws(IOException::class)
    override fun read(b: ByteArray, off: Int, len: Int): Int {
        var available: Int
        if (ostart >= ofinish) {
            available = 0
            while (available == 0) {
                available = moreData
            }
            if (available == -1) {
                return -1
            }
        }
        return if (len <= 0) {
            0
        } else {
            available = ofinish - ostart
            if (len < available) {
                available = len
            }
            System.arraycopy(obuffer!!, ostart, b, off, available)
            ostart += available
            available
        }
    }

    @Throws(IOException::class)
    override fun skip(n: Long): Long {
        var n = n
        val available = ofinish - ostart
        if (n > available.toLong()) {
            n = available.toLong()
        }
        return if (n < 0L) {
            0L
        } else {
            ostart = (ostart.toLong() + n).toInt()
            n
        }
    }

    @Throws(IOException::class)
    override fun available(): Int {
        return ofinish - ostart
    }

    @Throws(IOException::class)
    override fun close() {
        if (!closed) {
            closed = true
            input.close()
            if (!done) {
                if (cipherMode == ENCRYPT_MODE) {
                    SecretStream.xChaCha20Poly1305Push(
                        state = state,
                        message = UByteArray(0),
                        associatedData = UByteArray(0),
                        tag = crypto_secretstream_xchacha20poly1305_TAG_FINAL.toUByte(),
                    ).toByteArray()
                }
            }
            ostart = 0
            ofinish = 0
        }
    }

    override fun markSupported(): Boolean {
        return false
    }
}
