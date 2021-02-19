package eu.fbk.st.cryptoac.util;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * This class checks the enumerator collecting all the numeric codes used in CryptoAC, along with the related message.
 */
class OperationOutcomeCodeTest {

    @Test
    void testToString() {
        for(OperationOutcomeCode env : OperationOutcomeCode.values()) {
            assertEquals(OperationOutcomeCode.get(env.toString()), env);
        }
    }
}