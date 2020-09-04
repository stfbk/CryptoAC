package eu.fbk.st.cryptoac.core.util;

import eu.fbk.st.cryptoac.core.tuple.RoleTuple;
import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.util.EncryptedPKCKeyPair;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.InputStream;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.Objects;
import java.util.Random;
import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import static org.junit.jupiter.api.Assertions.*;

/**
 * unit tests for the CryptoUtil class.
 */
class CryptoUtilTest {

    /**
     * This function initialize the CryptoUtil object
     */
    @BeforeEach
    void setUp() {

        // default cryptographic parameters
        new CryptoUtil(null, null, null, null, null, null);
    }

    @Test
    void generatePublicAndPrivateKeys_correct() {

        assertEquals(KeyPair.class, CryptoUtil.generatePKCKeys().getClass());
    }

    @Test
    void generateSymmetricKey_correct() {

        assertEquals(SecretKeySpec.class, CryptoUtil.generateSymKey().getClass());
    }

    @Test
    void verifyCryptoACTupleTupleSignature_correct()
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException,
            SignatureException, NoSuchAlgorithmException, NoSuchPaddingException {

        KeyPair keyEncryptingPair = CryptoUtil.generatePKCKeys();
        KeyPair keySigningPair = CryptoUtil.generatePKCKeys();
        EncryptedPKCKeyPair encryptedEncryptingKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (keyEncryptingPair.getPublic(), keyEncryptingPair.getPrivate(), keyEncryptingPair.getPublic());
        EncryptedPKCKeyPair encryptedSigningKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (keySigningPair.getPublic(), keySigningPair.getPrivate(), keyEncryptingPair.getPublic());
        RoleTuple roleTuple = new RoleTuple("user", "role",
                encryptedEncryptingKeys, encryptedSigningKeys, 1, null, null);
        CryptoUtil.getCryptoUtil().signCryptoACTuple(roleTuple, keySigningPair.getPrivate(), "user");
        CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(roleTuple, keySigningPair.getPublic());
        
    }

    @Test
    void verifyCryptoACTupleTupleSignature_differentKey()
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException,
            SignatureException, NoSuchAlgorithmException, NoSuchPaddingException {

        KeyPair encryptingKeyPair = CryptoUtil.generatePKCKeys();
        KeyPair signingKeyPair = CryptoUtil.generatePKCKeys();
        EncryptedPKCKeyPair encryptedEncryptingKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (encryptingKeyPair.getPublic(), encryptingKeyPair.getPrivate(), encryptingKeyPair.getPublic());
        EncryptedPKCKeyPair encryptedSigningKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (signingKeyPair.getPublic(), signingKeyPair.getPrivate(), encryptingKeyPair.getPublic());
        KeyPair anotherSigningKeyPair = CryptoUtil.generatePKCKeys();
        RoleTuple roleTuple = new RoleTuple("user", "role",
                encryptedEncryptingKeys, encryptedSigningKeys, 1, null, null);
        CryptoUtil.getCryptoUtil().signCryptoACTuple(roleTuple, signingKeyPair.getPrivate(), "user");
        assertThrows(SignatureException.class, () ->
                CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(roleTuple, anotherSigningKeyPair.getPublic()));
    }

    @Test
    void verifyCryptoACTupleTupleSignature_tupleNotSigned()
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException, NoSuchPaddingException, NoSuchAlgorithmException {

        KeyPair encryptingKeyPair = CryptoUtil.generatePKCKeys();
        KeyPair signingKeyPair = CryptoUtil.generatePKCKeys();
        EncryptedPKCKeyPair encryptedEncryptingKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (encryptingKeyPair.getPublic(), encryptingKeyPair.getPrivate(), encryptingKeyPair.getPublic());
        EncryptedPKCKeyPair encryptedSigningKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (signingKeyPair.getPublic(), signingKeyPair.getPrivate(), encryptingKeyPair.getPublic());
        RoleTuple roleTuple = new RoleTuple("user", "role",
                encryptedEncryptingKeys, encryptedSigningKeys, 1, null, null);
        assertThrows(NullPointerException.class, () ->
                CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(roleTuple, signingKeyPair.getPublic()));
    }

    @Test
    void verifyCryptoACTupleTupleSignature_tupleSignedWithEmptyArray()
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException, NoSuchPaddingException, NoSuchAlgorithmException {

        KeyPair encryptingKeyPair = CryptoUtil.generatePKCKeys();
        KeyPair signingKeyPair = CryptoUtil.generatePKCKeys();
        EncryptedPKCKeyPair encryptedEncryptingKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (encryptingKeyPair.getPublic(), encryptingKeyPair.getPrivate(), encryptingKeyPair.getPublic());
        EncryptedPKCKeyPair encryptedSigningKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (signingKeyPair.getPublic(), signingKeyPair.getPrivate(), encryptingKeyPair.getPublic());
        RoleTuple roleTuple = new RoleTuple("user", "role",
                encryptedEncryptingKeys, encryptedSigningKeys, 1, null, null);
        byte[] wrongSignature = new byte[0];
        roleTuple.signWithANewSignature(wrongSignature, "user");
        assertThrows(SignatureException.class, () ->
                CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(roleTuple, signingKeyPair.getPublic()));
    }

    @Test
    void signCryptoACTuple_correct()
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException,
            SignatureException, NoSuchAlgorithmException, NoSuchPaddingException {

        KeyPair encryptingKeyPair = CryptoUtil.generatePKCKeys();
        KeyPair signingKeyPair = CryptoUtil.generatePKCKeys();
        EncryptedPKCKeyPair encryptedEncryptingKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (encryptingKeyPair.getPublic(), encryptingKeyPair.getPrivate(), encryptingKeyPair.getPublic());
        EncryptedPKCKeyPair encryptedSigningKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (signingKeyPair.getPublic(), signingKeyPair.getPrivate(), encryptingKeyPair.getPublic());
        RoleTuple roleTuple = new RoleTuple("user", "role",
                encryptedEncryptingKeys, encryptedSigningKeys, 1, null, null);
        CryptoUtil.getCryptoUtil().signCryptoACTuple(roleTuple, signingKeyPair.getPrivate(), "user");
        assertNotNull(roleTuple.getSignature());
        assertEquals("user", roleTuple.getSignerOfThisTuple());
    }

    @Test
    void signCryptoACTuple_nullTupleAndKey() {

        assertThrows(IllegalArgumentException.class, () ->
                CryptoUtil.getCryptoUtil().signCryptoACTuple(null, null, "user"));
    }


    @Test
    void encryptPKIKeys_correct()
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException, NoSuchPaddingException, NoSuchAlgorithmException {

        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        EncryptedPKCKeyPair encryptPKIKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (keyPair.getPublic(), keyPair.getPrivate(), keyPair.getPublic());
        assertNotNull(encryptPKIKeys.getEncryptedPublicKey());
        assertNotNull(encryptPKIKeys.getEncryptedPrivateKey());
    }

    @Test
    void encryptPKIKeys_publicKeyToEncryptNull() {

        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        assertThrows(IllegalArgumentException.class, () -> CryptoUtil.getCryptoUtil().encryptPKCKeys
                (null, keyPair.getPrivate(), keyPair.getPublic()));
    }

    @Test
    void encryptPKIKeys_publicKeyToEncryptWithNull() {

        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        assertThrows(IllegalArgumentException.class, () -> CryptoUtil.getCryptoUtil().encryptPKCKeys
                (keyPair.getPublic(), keyPair.getPrivate(), null));
    }

    @Test
    void decryptPKIKeys_correct()
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException,
            InvalidKeySpecException, NoSuchAlgorithmException, NoSuchPaddingException {

        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        EncryptedPKCKeyPair encryptPKIKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (keyPair.getPublic(), keyPair.getPrivate(), keyPair.getPublic());
        KeyPair decryptedKeys = CryptoUtil.getCryptoUtil().decryptPKCKeys(encryptPKIKeys, keyPair.getPrivate());
        assertEquals(Arrays.toString(keyPair.getPublic().getEncoded()), Arrays.toString(decryptedKeys.getPublic().getEncoded()));
        assertEquals(Arrays.toString(keyPair.getPrivate().getEncoded()), Arrays.toString(decryptedKeys.getPrivate().getEncoded()));
    }

    @Test
    void decryptPKIKeys_keysToEncryptBelongingToDifferentPairs()
            throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException, NoSuchPaddingException, NoSuchAlgorithmException {

        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        KeyPair keyPair1 = CryptoUtil.generatePKCKeys();
        KeyPair keyPair2 = CryptoUtil.generatePKCKeys();

        EncryptedPKCKeyPair encryptPKIKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys
                (keyPair1.getPublic(), keyPair2.getPrivate(), keyPair.getPublic());
        assertThrows(InvalidKeyException.class, () -> CryptoUtil.getCryptoUtil().decryptPKCKeys(encryptPKIKeys, keyPair.getPrivate()));
    }

    @Test
    void encryptSymmetricKey_correct() throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException, NoSuchPaddingException, NoSuchAlgorithmException {

        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        SecretKey secretKey = CryptoUtil.generateSymKey();
        assertNotNull(CryptoUtil.getCryptoUtil().encryptSymmetricKey(secretKey, keyPair.getPublic()));
    }

    @Test
    void encryptSymmetricKey_nullKeyToEncrypt() {

        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        assertThrows(IllegalArgumentException.class, () ->
                CryptoUtil.getCryptoUtil().encryptSymmetricKey(null, keyPair.getPublic()));
    }

    @Test
    void decryptSymmetricKey_correct() throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException, NoSuchPaddingException, NoSuchAlgorithmException {

        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        SecretKey secretKey = CryptoUtil.generateSymKey();
        byte[] encryptedKey = CryptoUtil.getCryptoUtil().encryptSymmetricKey(secretKey, keyPair.getPublic());
        SecretKey secretKeyDecrypted = CryptoUtil.getCryptoUtil().decryptSymmetricKey(encryptedKey, keyPair.getPrivate());
        assertEquals(Arrays.toString(secretKey.getEncoded()), Arrays.toString(secretKeyDecrypted.getEncoded()));
    }

    @Test
    void decryptSymmetricKey_decryptRandomBytes() throws BadPaddingException, InvalidKeyException, IllegalBlockSizeException, NoSuchPaddingException, NoSuchAlgorithmException {

        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        SecretKey secretKey = CryptoUtil.generateSymKey();
        byte[] encryptedKey = CryptoUtil.getCryptoUtil().encryptSymmetricKey(secretKey, keyPair.getPublic());
        byte[] randomKey = new byte[encryptedKey.length];
        new Random().nextBytes(randomKey);
        if (!Arrays.toString(encryptedKey).equals(Arrays.toString(randomKey))) {
            try {
                SecretKey decryptedKey = CryptoUtil.getCryptoUtil().decryptSymmetricKey(randomKey, keyPair.getPrivate());
                assertNotEquals(Arrays.toString(secretKey.getEncoded()), Arrays.toString(decryptedKey.getEncoded()));

            } catch (Exception e) {
                // we are good with the exception
            }
        }
    }

    @Test
    void encryptFile() {
        // already covered when decrypting
    }

    @Test
    void decryptFile_correct() throws InvalidKeyException, IOException, NoSuchPaddingException, NoSuchAlgorithmException {

        SecretKey secretKey = CryptoUtil.generateSymKey();
        InputStream file1Stream = Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file1.txt");
        InputStream encryptedFile = CryptoUtil.getCryptoUtil().encryptInputStream(secretKey, Objects.requireNonNull(file1Stream));
        InputStream decryptedFile = CryptoUtil.getCryptoUtil().decryptFile(secretKey, encryptedFile);
        byte[] originalContent = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file1.txt")).readAllBytes();
        assertEquals(Arrays.toString(originalContent), Arrays.toString(decryptedFile.readAllBytes()));
    }

    @Test
    void decryptFile_nullStream() {

        SecretKey secretKey = CryptoUtil.generateSymKey();
        InputStream file1Stream = null;
        assertThrows(IllegalArgumentException.class, () ->
                CryptoUtil.getCryptoUtil().encryptInputStream(secretKey, file1Stream));
    }

    @Test
    void decryptFile_emptyFile() throws InvalidKeyException, IOException, NoSuchPaddingException, NoSuchAlgorithmException {

        SecretKey secretKey = CryptoUtil.generateSymKey();
        InputStream file1Stream = Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/empty.txt");
        InputStream encryptedFile = CryptoUtil.getCryptoUtil().encryptInputStream(secretKey, Objects.requireNonNull(file1Stream));
        InputStream decryptedFile = CryptoUtil.getCryptoUtil().decryptFile(secretKey, encryptedFile);
        byte[] originalContent = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/empty.txt")).readAllBytes();
        assertEquals(Arrays.toString(originalContent), Arrays.toString(decryptedFile.readAllBytes()));
    }

    @Test
    void decryptFile_differentKey() throws InvalidKeyException, NoSuchPaddingException, NoSuchAlgorithmException {

        SecretKey secretKey1 = CryptoUtil.generateSymKey();
        SecretKey secretKey2 = CryptoUtil.generateSymKey();
        InputStream file1Stream = Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file1.txt");
        InputStream encryptedFile = CryptoUtil.getCryptoUtil().encryptInputStream(secretKey1, Objects.requireNonNull(file1Stream));

        if (!Arrays.toString(secretKey1.getEncoded()).equals(Arrays.toString(secretKey2.getEncoded()))) {
            try {

                InputStream decryptedFile = CryptoUtil.getCryptoUtil().decryptFile(secretKey2, encryptedFile);
                byte[] originalContent = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                        getResourceAsStream("files/file1.txt")).readAllBytes();
                assertNotEquals(Arrays.toString(originalContent), Arrays.toString(decryptedFile.readAllBytes()));

            } catch (Exception e) {
                // we are good with the exception
            }
        }
    }
}


















