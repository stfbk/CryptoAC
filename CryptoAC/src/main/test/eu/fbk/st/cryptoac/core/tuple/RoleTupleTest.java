package eu.fbk.st.cryptoac.core.tuple;

import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.util.EncryptedPKCKeyPair;
import org.junit.jupiter.api.Test;

import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;

import static org.junit.jupiter.api.Assertions.*;

class RoleTupleTest {

    static {
        new CryptoUtil(null, null, null, null, null, null);
    }

    @Test
    void isCompleteInAllFields_correct()
            throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {

        RoleTuple roleTuple = new RoleTuple("file", "path",
                new EncryptedPKCKeyPair().setEncryptedPrivateKey(new byte[5]).setEncryptedPublicKey(new byte[5]),
                new EncryptedPKCKeyPair().setEncryptedPrivateKey(new byte[5]).setEncryptedPublicKey(new byte[5]),1, null, null);
        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        CryptoUtil.getCryptoUtil().signCryptoACTuple(roleTuple, keyPair.getPrivate(), "none");
        assertTrue(roleTuple.isCompleteInAllFields());
    }

    @Test
    void isCompleteInAllFields_emptyName() {

        // this is related to the CryptoUtil tuple signing method, that throws a NullPointer exception in this case
    }

    @Test
    void isCompleteInAllFields_noSignature() {

        RoleTuple roleTuple = new RoleTuple("file", "path",
                new EncryptedPKCKeyPair().setEncryptedPrivateKey(new byte[5]).setEncryptedPublicKey(new byte[5]), new EncryptedPKCKeyPair().setEncryptedPrivateKey(new byte[5]).setEncryptedPublicKey(new byte[5]),1, null, null);
        assertThrows(NullPointerException.class, roleTuple::isCompleteInAllFields);
    }

    @Test
    void getIdentifyingFieldsForSignature_correct() throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {

        RoleTuple roleTuple = new RoleTuple("file", "path",
                new EncryptedPKCKeyPair().setEncryptedPrivateKey(new byte[5]).setEncryptedPublicKey(new byte[5]), new EncryptedPKCKeyPair().setEncryptedPrivateKey(new byte[5]).setEncryptedPublicKey(new byte[5]),1, null, null);
        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        CryptoUtil.getCryptoUtil().signCryptoACTuple(roleTuple, keyPair.getPrivate(), "none");
        assertNotNull(roleTuple.getIdentifyingFieldsForSignature());
    }
}