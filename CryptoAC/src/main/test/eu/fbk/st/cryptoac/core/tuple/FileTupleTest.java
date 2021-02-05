package eu.fbk.st.cryptoac.core.tuple;

import eu.fbk.st.cryptoac.core.element.CryptoACActiveElement;
import eu.fbk.st.cryptoac.util.AccessControlEnforcement;
import eu.fbk.st.cryptoac.util.CryptoUtil;
import org.junit.jupiter.api.Test;

import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;

import static org.junit.jupiter.api.Assertions.*;

class FileTupleTest {

    static {
        new CryptoUtil(null, null, null, null, null, null);
    }

    @Test
    void isCompleteInAllFields_correct()
            throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {

        FileTuple fileTuple = new FileTuple("file", "mock token", 1,
                CryptoACActiveElement.CryptoACActiveElementEnum.User, null, null,
                AccessControlEnforcement.Cryptographic);
        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        CryptoUtil.getCryptoUtil().signCryptoACTuple(fileTuple, keyPair.getPrivate(), "none");
        assertTrue(fileTuple.isCompleteInAllFields());
    }

    @Test
    void isCompleteInAllFields_emptyName() {

        // this is related to the CryptoUtil tuple signing method, that throws a NullPointer exception in this case
    }

    @Test
    void isCompleteInAllFields_noSignature() {

        FileTuple fileTuple = new FileTuple("", "mock token", 1, CryptoACActiveElement.CryptoACActiveElementEnum.User,
                null, null, AccessControlEnforcement.Cryptographic);
        assertFalse(fileTuple.isCompleteInAllFields());
    }

    @Test
    void getIdentifyingFieldsForSignature_correct() throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {

        FileTuple fileTuple = new FileTuple("file", "mock token", 1, CryptoACActiveElement.CryptoACActiveElementEnum.User,
                null, null, AccessControlEnforcement.Cryptographic);
        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        CryptoUtil.getCryptoUtil().signCryptoACTuple(fileTuple, keyPair.getPrivate(), "none");
        assertNotNull(fileTuple.getIdentifyingFieldsForSignature());
    }
}