package eu.fbk.st.cryptoac.crypto.openabe

import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.encodeBase64
import it.stefanoberlato.oabe.crypto.OpenABESymKeyHandleImpl
import java.io.FilterInputStream
import java.io.IOException
import java.io.InputStream
import kotlin.experimental.and

/**
 * A filter input stream applying the symmetric OpenABE stream cipher
 * with the given [mode] and symmetric [key] to the [inputStream]
 */
class OpenABECipherInputStream(
    inputStream: InputStream,
    key: ByteArray,
    mode: Int
) : FilterInputStream(inputStream) {

    /** The symmetric context for en/decryption */
    val osym = OpenABESymKeyHandleImpl(key)

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

    /** Whether the caller called the close method */
    private var closed = false

    /** Either [ENCRYPT_MODE] for encrypting or [DECRYPT_MODE] for decrypting */
    private var cipherMode = mode

    /**
     * Check that a valid mode has been provided and set the
     * length of the input buffer. We encrypt blocks of 512
     * bytes
     */
    init {
        require(mode == ENCRYPT_MODE || mode == DECRYPT_MODE) { "Illegal cipher mode given" }
        // TODO now, sym encrypted blocks are standalone and not in GCM.
        //  For that, we need other OpenABE APIs, those in zcontextske.h
        //  To summarize: now, sym encryption in openabe is insecure: you
        //  need to create bindings for function in zcontextske.h
        // TODO: below, 512 and 736 are there only because sym encrypted
        //  blocks are standalone. When you create bindings for zcontextske.h,
        //  fix the ibuffer size as in the Sodium stream cipher
        ibuffer = if (mode == ENCRYPT_MODE) {
            ByteArray(512)
        } else {
            ByteArray(736)
        }
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
            run {
                var readIn = input.read(ibuffer)
                if (readIn == -1) {
                    done = true
                    -1
                } else {
                    /**
                     * If we are here, it means that we read [readIn] bytes
                     * from the [ibuffer]. To ensure that the [ibuffer] was
                     * completely filled, keep reading from the [input]
                     * until we complete the block or the [input] is exhausted
                     */
                    var exhausted = false
                    while (ibuffer.size != readIn && !exhausted) {
                        val readIn2 = input.read(ibuffer, readIn, ibuffer.size - readIn)
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
                        osym.encrypt(
                            plaintext = String(ibuffer)
                        ).toByteArray()
                    } else {
                        osym.decrypt(
                            ciphertext = String(ibuffer)
                        ).toByteArray()
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
            // TODO should clear sym key from library?
            osym.destroy()
            ostart = 0
            ofinish = 0
        }
    }

    override fun markSupported(): Boolean {
        return false
    }
}
