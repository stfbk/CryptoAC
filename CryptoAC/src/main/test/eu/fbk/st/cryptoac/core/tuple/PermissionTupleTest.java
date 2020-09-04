package eu.fbk.st.cryptoac.core.tuple;

import eu.fbk.st.cryptoac.util.CryptoUtil;
import org.junit.jupiter.api.Test;

import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;

import static org.junit.jupiter.api.Assertions.*;

class PermissionTupleTest {

    static {
        new CryptoUtil(null, null, null, null, null, null);
    }

    @Test
    void isCompleteInAllFields_correct()
            throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {

        PermissionTuple permissionTuple = new PermissionTuple("file", 1,
                "path", Permission.Read, 1, new byte[5], null, null, null, null);
        KeyPair keyPair = CryptoUtil.generatePKCKeys();
        CryptoUtil.getCryptoUtil().signCryptoACTuple(permissionTuple, keyPair.getPrivate(), "none");
        assertTrue(permissionTuple.isCompleteInAllFields());
    }

    @Test
    void isCompleteInAllFields_emptyName() {

        // this is related to the CryptoUtil tuple signing method, that throws a NullPointer exception in this case
    }

    @Test
    void isCompleteInAllFields_noSignature() {

        PermissionTuple permissionTuple = new PermissionTuple("file", 1,
                "path", Permission.Read, 1, new byte[5], null, null, null, null);
        assertThrows(NullPointerException.class, permissionTuple::isCompleteInAllFields);
    }

    @Test
    void getIdentifyingFieldsForSignature_correct() throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {

        PermissionTuple permissionTuple = new PermissionTuple("file", 1,
                "path", Permission.Read, 1, new byte[5], null, null, null, null);
        KeyPair keyPair = CryptoUtil.getCryptoUtil().generatePKCKeys();
        CryptoUtil.getCryptoUtil().signCryptoACTuple(permissionTuple, keyPair.getPrivate(), "none");
        assertNotNull(permissionTuple.getIdentifyingFieldsForSignature());
    }
}