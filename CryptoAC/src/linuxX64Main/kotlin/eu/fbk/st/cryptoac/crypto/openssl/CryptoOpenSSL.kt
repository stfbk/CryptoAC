package eu.fbk.st.cryptoac.crypto.openssl

import eu.fbk.st.cryptoac.crypto.*
import io.ktor.utils.io.core.*
import kotlinx.cinterop.*
import libssl.*
import platform.posix.fopen
import platform.posix.stdout


@CName("Java_eu_fbk_st_cryptoac_crypto_openssl_CryptoOpenSSL_callInt")
fun callInt(env: CPointer<JNIEnvVar>, clazz: jclass, it: jint): jint {
  initRuntimeIfNeeded()
  Platform.isMemoryLeakCheckerActive = false

  /** A 256 bit key */
  val key = ubyteArrayOf(
    '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(),
    '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(),
    '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(),
    '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(),
  ).toUByteArray().toCValues()

  /** A 128 IV */
  val iv = ubyteArrayOf(
    '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(),
    '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(), '1'.code.toUByte(),
  ).toUByteArray().toCValues()


  val plaintext = "The quick brown fox jumps over the lazy dog"
  val plaintext1 = plaintext.map { it.code.toUByte() }
  val plaintext2 = ubyteArrayOf(*plaintext1.toUByteArray()).toCValues()

  /**
   * Buffer for ciphertext. Ensure the buffer is long enough for the
   * ciphertext which may be longer than the plaintext, depending on the
   * algorithm and mode.
   */
  var ciphertextLength = 0
  var decryptedTextLength = 0
  memScoped {
    val ciphertext = allocArray<UByteVar>(128)
    val decryptedText = allocArray<UByteVar>(128)

    ciphertextLength = encrypt(plaintext2, plaintext2.size, key, iv, ciphertext)

    decryptedTextLength = decrypt(ciphertext, ciphertextLength, key, iv, decryptedText)

    /** THIS CONTAIN THE DECRYPTED TEXT!!!!!!!!!!!!!!!!!!!!!!! */
    val decrypted = String(decryptedText.readBytes(decryptedTextLength))

    // here link for how to store IV
  // https://proandroiddev.com/secure-data-in-android-initialization-vector-6ca1c659762c
  }
  return ciphertextLength

}


fun encrypt(
  plainText: CValuesRef<UByteVar>,
  plaintext_len: Int,
  key: CValuesRef<UByteVar>,
  iv: CValuesRef<UByteVar>,
  ciphertext: CValuesRef<UByteVar>,
): Int {

  /** This variable will contain the size of the ciphertext */
  val length: CPointer<IntVar> = cValuesOf(0).getPointer(MemScope())

  /** Point to the cipher context */
  val ctx: CPointer<EVP_CIPHER_CTX>? = EVP_CIPHER_CTX_new()

  /** Create and initialise the context */
  if (ctx == null) {
    // TODO handle error
  }

  /**
   * Initialise the encryption operation. IMPORTANT - ensure you use a key
   * and IV size appropriate for your cipher
   * In this example we are using 256 bit AES (i.e. a 256 bit key). The
   * IV size for *most* modes is the same as the block size. For AES this
   * is 128 bits
   */
  if (1 != EVP_EncryptInit_ex(ctx, EVP_aes_256_cbc(), null, key, iv)) {
    // TODO handle error
  }



  /**
   * Provide the message to be encrypted, and obtain the encrypted output.
   * EVP_EncryptUpdate can be called multiple times if necessary
   */
  if (1 != EVP_EncryptUpdate(ctx, ciphertext, length, plainText, plaintext_len)) {
    // TODO handle error
  }

  var ciphertextLength = length.getPointer(MemScope()).pointed.value


  /**
   * Finalise the encryption. Further ciphertext bytes may be written at
   * this stage.
   */
  if (1 != EVP_EncryptFinal_ex(
      ctx,
      ciphertext.getPointer(MemScope()).plus(length.getPointer(MemScope()).pointed.value),
      length
    )
  ) {
    // TODO handle error
  }

  ciphertextLength += length.getPointer(MemScope()).pointed.value

  /** Clean up */
  EVP_CIPHER_CTX_free(ctx)

  return ciphertextLength
}


fun decrypt(
  ciphertext: CValuesRef<UByteVar>,
  ciphertext_len: Int,
  key: CValuesRef<UByteVar>,
  iv: CValuesRef<UByteVar>,
  plainText: CValuesRef<UByteVar>,
): Int {

  /** This variable will contain the size of the ciphertext */
  val length: CPointer<IntVar> = cValuesOf(0).getPointer(MemScope())

  /** Point to the cipher context */
  val ctx: CPointer<EVP_CIPHER_CTX>? = EVP_CIPHER_CTX_new()

  /** Create and initialise the context */
  if (ctx == null) {
    // TODO handle error
  }

  /**
   * Initialise the decryption operation. IMPORTANT - ensure you use a key
   * and IV size appropriate for your cipher
   * In this example we are using 256 bit AES (i.e. a 256 bit key). The
   * IV size for *most* modes is the same as the block size. For AES this
   * is 128 bits
   */
  if (1 != EVP_DecryptInit_ex(ctx, EVP_aes_256_cbc(), null, key, iv)) {
    // TODO handle error
  }

  /**
   * Provide the message to be decrypted, and obtain the plaintext output.
   * EVP_DecryptUpdate can be called multiple times if necessary.
   */
  if (1 != EVP_DecryptUpdate(ctx, plainText, length, ciphertext, ciphertext_len)) {
    // TODO handle error
  }
  var plaintextLength = length.getPointer(MemScope()).pointed.value


  /**
   * Finalise the decryption. Further plaintext bytes may be written at
   * this stage.
   */
  if(1 != EVP_DecryptFinal_ex(
      ctx,
      plainText.getPointer(MemScope()).plus(length.getPointer(MemScope()).pointed.value),
      length)) {
    // TODO handle error
  }

  plaintextLength += length.getPointer(MemScope()).pointed.value

  /** Clean up */
  EVP_CIPHER_CTX_free(ctx)

  return plaintextLength;
}


@CName("Java_eu_fbk_st_cryptoac_crypto_openssl_CryptoOpenSSL_generateKey")
fun generateKey(env: CPointer<JNIEnvVar>, clazz: jclass, file: _IO_FILE): EVP_PKEY {
  initRuntimeIfNeeded()
  Platform.isMemoryLeakCheckerActive = false

  val key: EVP_PKEY? = null
  val pkey = key.rawPtr
  val ppkey = cValuesOf(interpretCPointer<EVP_PKEY>(pkey))
  val pctx = EVP_PKEY_CTX_new_id(EVP_PKEY_ED25519, null)


  if (pctx == null) {
    // TODO handle error
  }

  if (1 != EVP_PKEY_keygen_init(pctx)) {
    // TODO handle error
  }

  if (1 != EVP_PKEY_keygen(pctx, ppkey)) {
    // TODO handle error
  }
/*
  memScoped {
    val a = allocPointerTo<FILE>()
    val ciphertext = allocArray<UByteVar>(128)
    val decryptedText = allocArray<UByteVar>(128)

    ciphertextLength = encrypt(plaintext2, plaintext2.size, key, iv, ciphertext)

    decryptedTextLength = decrypt(ciphertext, ciphertextLength, key, iv, decryptedText)

    /** THIS CONTAIN THE DECRYPTED TEXT!!!!!!!!!!!!!!!!!!!!!!! */
    val decrypted = String(decryptedText.readBytes(decryptedTextLength))

    // here link for how to store IV
    // https://proandroiddev.com/secure-data-in-android-initialization-vector-6ca1c659762c
  }

  val a = CValuesRef<FILE>()
  val b = cValuesOf(a)

  val bp = BIO_new_fp(a, BIO_NOCLOSE);
  EVP_PKEY_print_private(stdout, ppkey.getPointer(MemScope()).pointed, 0, pctx)

  BIO_free(bp)








*/

  EVP_PKEY_CTX_free(pctx)

  return ppkey.getPointer(MemScope()).pointed.pointed!!
}