package eu.fbk.st.cryptoac.util;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.core.tuple.CryptoACTuple;
import org.apache.commons.codec.binary.Base64InputStream;
import org.jetbrains.annotations.NotNull;

import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import java.io.InputStream;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Arrays;

import static java.lang.System.exit;

/**
 * This class groups together all cryptographic related algorithms and parameters.
 */
public final class CryptoUtil {

    // TODO @Veronica check the default values of the cryptographic parameters
    // TODO @Veronica check the way PKC keys are used to en/decrypt a/symmetric keys (encryptPKCKeys, decryptPKCKeys, encryptSymmetricKey, decryptSymmetricKey)
    // TODO @Veronica check the encrypting and decrypting block lengths
    // TODO @Veronica check the generation of PKC and symmetric keys
    // TODO @Veronica check operation modes (CBC, ECB, GCM ...)

    /**
     * The singleton instance of this class.
     */
    private static CryptoUtil instance = null;

    /**
     * The value of the length of PKC keys.
     */
    private static Integer pkcKeyLength = 1024;

    /**
     * The algorithm used to generate PKC keys.
     */
    private static String pkcAlgorithm = "RSA";

    /**
     * The algorithm used for hashing.
     *
     * The SHA-512 algorithm produces 64 bites (512 bits) hashes. Converted in Base64,
     * it becomes ((64 (+ 2 for padding) / 3) * 4 = 88 bytes. Because of this, in the
     * MS, the length of the "token" field should be less or equal than 88. If you
     * change this algorithm, check whether you have to change also the length of the
     * "token" field in the MS.
     */
    private static String hashAlgorithm = "SHA-512";

    /**
     * The algorithm used for signing with PKC private keys/verifying with PKC public keys.
     *
     * The SHA512withRSA algorithm produces 128 bytes (1024 bits) signatures. Converted in Base64,
     * it becomes ((128 (+ 1 for padding) / 3) * 4 = 172 bytes. Because of this, in the DS, the
     * length of the "signature" field is 172. If you change this algorithm, check whether you
     * have to change also the length of the "signature" field in the MS.
     */
    private static String pkcSigningAlgorithm = "SHA512withRSA";

    /**
     * The algorithm used for symmetric encryption.
     */
    private static String symAlgorithm = "AES";

    /**
     * The length of symmetric keys.
     */
    private static Integer symKeyLength = 128;


    /**
     * The length of the encrypting block with PKC private keys (PKC key length/8 - 11 for padding).
     */
    private static int pkcEncryptingBlockSize;

    /**
     * The length of the decrypting block with PKC public keys (PKC key size/8).
     */
    private static int pkcDecryptingBlockSize;



    /**
     * The key generator object for PKC keys.
     */
    private static KeyPairGenerator keyPKCGen;

    /**
     * The key generator object for symmetric keys.
     */
    private static KeyGenerator keySymGen;



    // variables for logging
    private static final String kClassName                          = "CryptoUtil";
    private static final String kStaticInitializer                  = "staticInitializer";
    private static final String kVerifyCryptoACTupleTupleSignature  = "verifyCryptoACTupleTupleSignature";
    private static final String kSignCryptoACTuple                  = "signCryptoACTuple";
    private static final String kEncryptPKCKeys                     = "encryptPKcKeys";
    private static final String kDecryptPKCKeys                     = "decryptPKCKeys";
    private static final String kEncryptSymmetricKey                = "encryptSymmetricKey";
    private static final String kDecryptSymmetricKey                = "decryptSymmetricKey";
    private static final String kEncryptFile                        = "encryptFile";
    private static final String kDecryptFile                        = "decryptFile";
    private static final String kCheckPKCKeysPair                   = "checkPKCKeysPair";
    private static final String kApplyPKCCipherOnBytesName          = "applyPKCCipherOnBytes";
    private static final String kApplySymCipherOnBytesName          = "applySymCipherOnBytes";



    /**
     * A constructor for singletons, that forbids the creation of more than one instance of this class.
     * @param pkcAlgorithm PKC algorithm, null if you wish to keep the default value
     * @param hashAlgorithm hash algorithm, null if you wish to keep the default value
     * @param pkcKeyLength length of PKC keys, null if you wish to keep the default value
     * @param pkcSigningAlgorithm PKC signing algorithm, null if you wish to keep the default value
     * @param symAlgorithm symmetric algorithm, null if you wish to keep the default value
     * @param symKeyLength length of symmetric keys, null if you wish to keep the default value
     */
    public CryptoUtil(String pkcAlgorithm, String hashAlgorithm, Integer pkcKeyLength, String pkcSigningAlgorithm,
                      String symAlgorithm, Integer symKeyLength) {

        if (instance == null) {

            CryptoUtil.pkcAlgorithm         = pkcAlgorithm == null? CryptoUtil.pkcAlgorithm : pkcAlgorithm;
            CryptoUtil.hashAlgorithm        = hashAlgorithm == null? CryptoUtil.hashAlgorithm : hashAlgorithm;
            CryptoUtil.pkcKeyLength         = pkcKeyLength == null? CryptoUtil.pkcKeyLength : pkcKeyLength;
            CryptoUtil.pkcSigningAlgorithm  = pkcSigningAlgorithm == null? CryptoUtil.pkcSigningAlgorithm : pkcSigningAlgorithm;
            CryptoUtil.symAlgorithm         = symAlgorithm == null? CryptoUtil.symAlgorithm : symAlgorithm;
            CryptoUtil.symKeyLength         = symKeyLength == null? CryptoUtil.symKeyLength : symKeyLength;

            pkcEncryptingBlockSize = CryptoUtil.pkcKeyLength / 8 - 11;
            pkcDecryptingBlockSize = CryptoUtil.pkcKeyLength / 8;

            try {

                // initialize the PKC and symmetric generators
                keyPKCGen = KeyPairGenerator.getInstance(getPKCAlgorithm());
                keyPKCGen.initialize(getPKCKeyLength());

                keySymGen = KeyGenerator.getInstance(getSymAlgorithm());
                keySymGen.init(getSymKeyLength());

                instance = this;
            }
            catch (NoSuchAlgorithmException e) {

                App.logger.error("[{}{}{}{}{} ", kClassName, " (" + kStaticInitializer + ")]: ",
                        "error while instantiating the cryptographic utility class. Exiting... (", e.getMessage(), ")");
                exit(35);
            }
        }
    }

    /**
     * getter for the instance of CryptoUtil.
     * @return the instance of CryptoUtil
     */
    public static synchronized CryptoUtil getCryptoUtil() {
        return instance;
    }

    /**
     * getter for the signing algorithm.
     * @return the signing algorithm
     */
    public static String getPKCSigningAlgorithm() {
        return pkcSigningAlgorithm;
    }

    /**
     * getter for the hash algorithm.
     * @return the hash algorithm
     */
    public static String getHashAlgorithm() {
        return hashAlgorithm;
    }

    /**
     * getter for the PKC key length.
     * @return the PKC key length
     */
    public static int getPKCKeyLength() {
        return pkcKeyLength;
    }

    /**
     * getter for the sym key length.
     * @return the sym key length
     */
    public static int getSymKeyLength() {
        return symKeyLength;
    }

    /**
     * getter for the PKC algorithm.
     * @return the PKC algorithm
     */
    public static String getPKCAlgorithm() {
        return pkcAlgorithm;
    }

    /**
     * getter for the algorithm used for symmetric cryptography.
     * @return the algorithm used for symmetric cryptography
     */
    public static String getSymAlgorithm() {
        return symAlgorithm;
    }

    /**
     * getter for the encrypting block size.
     * @return the encrypting block size
     */
    public static int getPKCEncryptingBlockSize() {
        return pkcEncryptingBlockSize;
    }

    /**
     * getter for the decrypting block size.
     * @return the decrypting block size
     */
    public static int getPKCDecryptingBlockSize() {
        return pkcDecryptingBlockSize;
    }

    /**
     * This method generates a pair of PKC keys.
     * @return the pair of PKC keys
     */
    public static KeyPair generatePKCKeys() {
        return keyPKCGen.generateKeyPair();
    }

    /**
     * This method generates symmetric keys.
     * @return the symmetric key
     */
    public static SecretKey generateSymKey() {
        return keySymGen.generateKey();
    }



    /**
     * This method verifies a tuple's signature against the given public key.
     * @param tupleToVerify the tuple to verify
     * @param keyToVerify the public key to use to verify the signature
     * @throws NoSuchAlgorithmException throws NoSuchAlgorithmException
     * @throws InvalidKeyException throws InvalidKeyException
     * @throws SignatureException throws SignatureException
     */
    public void verifyCryptoACTupleSignature(@NotNull CryptoACTuple tupleToVerify, @NotNull PublicKey keyToVerify)
            throws InvalidKeyException, NoSuchAlgorithmException, SignatureException {

        App.logger.info("[{}{}{}{} ", kClassName, " (" + kVerifyCryptoACTupleTupleSignature + ")]: ",
                "verifying the signature of the tuple ", tupleToVerify.toString());

        Signature verifier = Signature.getInstance(getPKCSigningAlgorithm());
        verifier.initVerify(keyToVerify);

        // get the array of bytes representing the tuple
        byte[] data = tupleToVerify.getIdentifyingFieldsForSignature().getBytes();
        verifier.update(data);

        // if the signature is NOT valid
        if (!verifier.verify(tupleToVerify.getSignature())) {
            App.logger.error("[{}{}{}{}{} ", kClassName, " (" + kVerifyCryptoACTupleTupleSignature + ")]: ",
                    "signature of tuple ", tupleToVerify.toString(), " is invalid");
            throw new SignatureException("signature of tuple " + tupleToVerify.toString() + " is invalid");
        }
    }

    /**
     * This method signs a tuple using the given private key. Then the new signature is assigned
     * to the tuple, along with the given signer.
     * @param tupleToSign the tuple to be signed
     * @param signingKey alternative private key to use instead of "this" private key
     * @param ownerOfTheKey is another key is given, this is the field in which to indicate the
     *                              ID of the owner of the key
     * @throws NoSuchAlgorithmException throws NoSuchAlgorithmException
     * @throws InvalidKeyException throws InvalidKeyException
     * @throws SignatureException throws SignatureException
     */
    public void signCryptoACTuple(@NotNull CryptoACTuple tupleToSign, @NotNull PrivateKey signingKey, @NotNull String ownerOfTheKey)
            throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {

        App.logger.info("[{}{}{}{} ", kClassName, " (" + kSignCryptoACTuple + ")]: ",
                "signing the tuple ", tupleToSign.toString());

        Signature signer = Signature.getInstance(getPKCSigningAlgorithm());
        signer.initSign(signingKey);

        // get the array of bytes representing the tuple
        byte[] data = tupleToSign.getIdentifyingFieldsForSignature().getBytes();
        signer.update(data);

        // obtain a final signature of the tuple
        byte[] digitalSignature = signer.sign();
        tupleToSign.signWithANewSignature(digitalSignature, ownerOfTheKey);
    }




    /**
     * This method encrypts a pair of PKC keys.
     * @param publicKeyToEncrypt The public key to encrypt
     * @param privateKeyToEncrypt The private key to encrypt
     * @param encryptingKey public key to use to encrypt the keys
     * @return the encrypted PKC keys
     * @throws BadPaddingException throws BadPaddingException
     * @throws InvalidKeyException throws InvalidKeyException
     * @throws IllegalBlockSizeException throws IllegalBlockSizeException
     */
    public EncryptedPKCKeyPair encryptPKCKeys(@NotNull PublicKey publicKeyToEncrypt, @NotNull PrivateKey privateKeyToEncrypt,
                                              @NotNull PublicKey encryptingKey) throws BadPaddingException, InvalidKeyException,
                                    IllegalBlockSizeException, NoSuchAlgorithmException, NoSuchPaddingException {

        App.logger.info("[{}{}{} ", kClassName, " (" + kEncryptPKCKeys + ")]: ", "encrypting a PKC key pair");

        byte[] inputPublicKeyInBytes = publicKeyToEncrypt.getEncoded();
        byte[] inputPrivateKeyInBytes = privateKeyToEncrypt.getEncoded();

        return new EncryptedPKCKeyPair().
                setEncryptedPrivateKey(applyPKCCipherOnBytes(encryptingKey, inputPrivateKeyInBytes, Cipher.ENCRYPT_MODE)).
                setEncryptedPublicKey(applyPKCCipherOnBytes(encryptingKey, inputPublicKeyInBytes, Cipher.ENCRYPT_MODE));
    }

    /**
     * This method decrypts the given encrypted PKC key pair.
     * @param encryptedPKCKeys encrypted PKC key pair
     * @param decryptingKey private key to use to decrypt the PKC key pair
     * @return the decrypted PKC key pair
     * @throws BadPaddingException throws BadPaddingException
     * @throws InvalidKeyException throws InvalidKeyException
     * @throws IllegalBlockSizeException throws IllegalBlockSizeException
     * @throws InvalidKeySpecException throws InvalidKeySpecException
     * @throws NoSuchAlgorithmException throws NoSuchAlgorithmException
     */
    public KeyPair decryptPKCKeys(@NotNull EncryptedPKCKeyPair encryptedPKCKeys,
                                  @NotNull PrivateKey decryptingKey) throws BadPaddingException, InvalidKeyException,
                                    IllegalBlockSizeException, InvalidKeySpecException, NoSuchAlgorithmException,
                                    NoSuchPaddingException {

        App.logger.info("[{}{}{} ", kClassName, " (" + kDecryptPKCKeys + ")]: ", "decrypting a PKC key pair");

        byte[][] dec = new byte[2][];

        // decrypt the private and public key
        dec[0] = applyPKCCipherOnBytes(decryptingKey, encryptedPKCKeys.getEncryptedPublicKey(), Cipher.DECRYPT_MODE);
        dec[1] = applyPKCCipherOnBytes(decryptingKey, encryptedPKCKeys.getEncryptedPrivateKey(), Cipher.DECRYPT_MODE);

        // create the key pair back and check that the two keys actually belong to each other
        return createAndCheckKeysFromBytes (dec[0], dec[1]);
    }

    /**
     * This function encrypts the given symmetric key.
     * @param symmetricKeyToEncrypt the symmetric key to encrypt
     * @param encryptingKey alternative public key to use instead of "this" public key
     * @return the encrypted key bytes, or null if there was an error
     * @throws BadPaddingException throws BadPaddingException
     * @throws InvalidKeyException throws InvalidKeyException
     * @throws IllegalBlockSizeException throws IllegalBlockSizeException
     */
    public byte[] encryptSymmetricKey(@NotNull SecretKey symmetricKeyToEncrypt, @NotNull PublicKey encryptingKey)
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException, NoSuchAlgorithmException,
            NoSuchPaddingException {

        App.logger.info("[{}{}{} ", kClassName, " (" + kEncryptSymmetricKey + ")]: ", " encrypting a symmetric key");

        byte[] symmetricKeyToEncryptInByte = symmetricKeyToEncrypt.getEncoded();

        return applyPKCCipherOnBytes(encryptingKey, symmetricKeyToEncryptInByte, Cipher.ENCRYPT_MODE);
    }

    /**
     * This function decrypts a given encrypted symmetric key.
     * @param symmetricKeyToDecrypt the symmetric key to decrypt
     * @param decryptingKey alternative key to decrypt the key with. May be null
     * @return the decrypted secret key, or null if there was an error
     * @throws BadPaddingException throws BadPaddingException
     * @throws InvalidKeyException throws InvalidKeyException
     * @throws IllegalBlockSizeException throws IllegalBlockSizeException
     */
    public SecretKey decryptSymmetricKey(@NotNull byte[] symmetricKeyToDecrypt, @NotNull PrivateKey decryptingKey)
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException, NoSuchAlgorithmException,
            NoSuchPaddingException {

        App.logger.info("[{}{}{} ", kClassName, " (" + kDecryptSymmetricKey + ")]: ", " decrypting a symmetric key");

        byte[] intermediateResult = applyPKCCipherOnBytes(decryptingKey, symmetricKeyToDecrypt, Cipher.DECRYPT_MODE);

        // rebuild the key and cut the extra bytes (take only from 0 to key length/8)
        return new SecretKeySpec(intermediateResult, 0, getSymKeyLength() / 8, getSymAlgorithm());
    }




    /**
     * This method receives in input a stream and It applies, in this order, a Base64 and a cipher
     * stream with the given key.
     * @param keyToUse the symmetric key to be used
     * @param streamOfFileToEncrypt the stream containing the bytes to encrypt
     * @return the encrypted input stream
     * @throws InvalidKeyException throws InvalidKeyException
     */
    public InputStream encryptInputStream(@NotNull SecretKey keyToUse, @NotNull InputStream streamOfFileToEncrypt)
            throws InvalidKeyException, NoSuchAlgorithmException, NoSuchPaddingException {

        App.logger.info("[{}{}{} ", kClassName, " (" + kEncryptFile + ")]: ",
               "encrypting stream with the given symmetric key");

        return applySymCipherOnBytes(keyToUse, streamOfFileToEncrypt, Cipher.ENCRYPT_MODE);
    }

    /**
     * This method receives in input a stream. It applies, in this order, a cipher and a Base64
     * stream with the given key.
     * @param keyToUse the symmetric key to be used
     * @param streamOfFileToDecrypt the stream containing the bytes to decrypt
     * @return the decrypted input stream
     * @throws InvalidKeyException throws InvalidKeyException
     */
    public InputStream decryptFile(@NotNull SecretKey keyToUse, @NotNull InputStream streamOfFileToDecrypt)
            throws InvalidKeyException, NoSuchAlgorithmException, NoSuchPaddingException {

        App.logger.info("[{}{}{} ", kClassName, " (" + kDecryptFile + ")]: ", "decrypting file with stream:" +
                streamOfFileToDecrypt.toString() + " with the given symmetric key");

        return applySymCipherOnBytes(keyToUse, streamOfFileToDecrypt, Cipher.DECRYPT_MODE);
    }


    /**
     * This method takes two encoded keys, public and private, and then create the KeyPair object back.
     * Moreover, this method checks through the "checkPKCKeysPair" utility that the two keys actually
     * belong to each other
     * @param publicKeyInBytes the public key, in bytes
     * @param privateKeyInBytes the private key, in bytes
     * @return the keypair formed by the two keys
     * @throws NoSuchAlgorithmException NoSuchAlgorithmException
     * @throws InvalidKeySpecException InvalidKeySpecException
     * @throws InvalidKeyException InvalidKeyException
     */
    public KeyPair createAndCheckKeysFromBytes(byte[] publicKeyInBytes, byte[] privateKeyInBytes)
            throws NoSuchAlgorithmException, InvalidKeySpecException, InvalidKeyException {

        KeyFactory kf = KeyFactory.getInstance(getPKCAlgorithm());

        PublicKey publicKey = kf.generatePublic(new X509EncodedKeySpec(publicKeyInBytes));
        PrivateKey privateKey = kf.generatePrivate(new PKCS8EncodedKeySpec(privateKeyInBytes));

        // check whether the two keys belong to the same pair
        checkPKCKeysPair(publicKey, privateKey);

        return new KeyPair(publicKey, privateKey);

    }

    /**
     * This method checks whether two PKC keys, public and private, actually belong to each other.
     * The way this is done is by trying to encrypting and decrypting an array of random bytes and
     * then check whether the original array and the processed one are equal.
     * @param publicKey the public key
     * @param privateKey the private key
     */
    private void checkPKCKeysPair(PublicKey publicKey, PrivateKey privateKey) throws InvalidKeyException {

        // we want to know whether the two keys actually form a valid pair or not. The idea is this: encrypt
        // something with one key and decrypt it with the other. Check if the result is the same as the original data.
        String challenge = "thisisasmalleasteregginsidecryptoac";

        try {

            // perform encryption and decryption
            byte[] encryptedChallenge = applyPKCCipherOnBytes(privateKey, challenge.getBytes(), Cipher.ENCRYPT_MODE);
            byte[] decryptedChallenge = applyPKCCipherOnBytes(publicKey , encryptedChallenge, Cipher.DECRYPT_MODE);

            String result = (new String(decryptedChallenge).substring(0, challenge.length()));

            // if the two do not match, it means that the keys do NOT form a pair
            if (!challenge.equals(result)) {

                throw new InvalidKeyException("the two keys failed the challenge: they do not belong to each other. " +
                        "Challenge was " + challenge + ", result is " + result);
            }
        }
        // note: there may be some exception while decrypting with the wrong key (e.g. BadPaddingException)
        catch (Exception e) {

            InvalidKeyException differentKeysException =
                    new InvalidKeyException("The two keys (public and private) do not belong to each other");

            App.logger.error("[{}{}{} ", kClassName, " (" + kCheckPKCKeysPair + ")]: ",
                    OperationOutcomeCode.code_30.toString() + " (" +  e.getMessage() + ")");

            throw differentKeysException;
        }
    }



    /**
     * This method is an utility to apply a pkc cipher to en/decrypt bytes.
     * If the input is too big for the key, the method will use ECB mode
     * @param pkcKeyToUse the pkc key (public or private)
     * @param input the input to apply the pkcCipher on
     * @param opMode either Cipher.ENCRYPT_MODE or Cipher.DECRYPT_MODE
     * @return the array of bytes on which we applied the pkc cipher on (sequence of blocks put together)
     * @throws BadPaddingException BadPaddingException
     * @throws IllegalBlockSizeException IllegalBlockSizeException
     * @throws InvalidKeyException InvalidKeyException
     */
    private byte[] applyPKCCipherOnBytes(Key pkcKeyToUse, byte[] input, int opMode)
            throws BadPaddingException, IllegalBlockSizeException, InvalidKeyException, NoSuchPaddingException, NoSuchAlgorithmException {

        
        App.logger.info("[{}{}{} ", kClassName, " (" + kApplyPKCCipherOnBytesName + ")]: ", "applying pkc cipher on bytes");

        byte[] output;
        int blockSize1, blockSize2;
        int encryptingBlockSize = getPKCEncryptingBlockSize();
        int decryptingBlockSize = getPKCDecryptingBlockSize();

        // first, initialize the pkcCipher with the key
        Cipher pkcCipher = Cipher.getInstance(getPKCAlgorithm());
        pkcCipher.init(opMode, pkcKeyToUse);

        // if we are encrypting
        if (opMode == Cipher.ENCRYPT_MODE) {
            blockSize1 = encryptingBlockSize;
            blockSize2 = decryptingBlockSize;
        }
        // if we are decrypting
        else {
            blockSize1 = decryptingBlockSize;
            blockSize2 = encryptingBlockSize;
        }

        // how many blocks will it take to en/decrypt the input? Just divide by the size of the encrypting block
        int numberOfBlocksInput = input.length / blockSize1;

        // if the integer division was not perfect, add one block
        if (input.length % blockSize1 != 0)
            numberOfBlocksInput++;

        // allocate the byte array
        output = new byte[numberOfBlocksInput * blockSize2];

        // now en/decrypt each block
        for (int i = 0; i < numberOfBlocksInput; i++) {

            // calculate the block indexes (starting and ending)
            int from = i * blockSize1, to = (i + 1) * blockSize1;

            // if this is the last block to encrypt, the ending index is given by the length of the array of bytes of the input
            if (i == numberOfBlocksInput - 1)
                to = input.length;

            // actually encrypt the current block, taking a portion of the array of bytes of the private key
            byte[] temp = pkcCipher.doFinal(Arrays.copyOfRange(input, from, to));

            // copy the result into 'output'
            System.arraycopy(temp, 0, output, i * blockSize2, temp.length);
        }

        return output;
    }


    /**
     * This method is an utility to apply a symmetric Cipher to en/decrypt an input stream.
     * This method will take care of transforming the input stream in a base64
     * input stream for encrypting and vice versa for decrypting
     * @param keyToUse the key to use for encrypting
     * @param input the input stream to apply the symCipher on
     * @param opMode either Cipher.ENCRYPT_MODE or Cipher.DECRYPT_MODE
     * @return the cipher input stream
     * @throws InvalidKeyException InvalidKeyException
     */
    private InputStream applySymCipherOnBytes(Key keyToUse, InputStream input, int opMode)
            throws InvalidKeyException, NoSuchPaddingException, NoSuchAlgorithmException {

        App.logger.info("[{}{}{} ", kClassName, " (" + kApplySymCipherOnBytesName + ")]: ",
                "applying symmetric cipher on bytes");

        InputStream streamToReturn;
        Cipher tempCypher = Cipher.getInstance(getSymAlgorithm());

        tempCypher.init(opMode, keyToUse);

        // if we are encrypting
        if (opMode == Cipher.ENCRYPT_MODE)
            // set to base64 and then apply cipher
            streamToReturn = new CipherInputStream(new Base64InputStream(input, true), tempCypher);

        // if we are decrypting
        else
            // apply decrypting cipher and decode from base 64
            streamToReturn = new Base64InputStream(new CipherInputStream(input, tempCypher), false);

        return streamToReturn;
    }
}