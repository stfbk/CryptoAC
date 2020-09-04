package eu.fbk.st.cryptoac.core.element;

import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class OperationOutcomeCodeTest {

    @Test
    void toString1_correct() {

        OperationOutcomeCode operationOutcomeCode0 = OperationOutcomeCode.code_0;
        assertEquals(OperationOutcomeCode.code_0.toString(), operationOutcomeCode0.toString());
    }

    @Test
    void toString1_anotherCode() {

        OperationOutcomeCode operationOutcomeCode0 = OperationOutcomeCode.code_0;
        assertNotEquals(OperationOutcomeCode.code_1.toString(), operationOutcomeCode0.toString());
    }

    @Test
    void get_correct() {

        String operationOutcomeCode0String = OperationOutcomeCode.code_0.toString();
        assertEquals(OperationOutcomeCode.code_0, OperationOutcomeCode.get(operationOutcomeCode0String));
    }

    @Test
    void get_anotherCode() {

        String operationOutcomeCode0String = OperationOutcomeCode.code_0.toString();
        assertNotEquals(OperationOutcomeCode.code_1, OperationOutcomeCode.get(operationOutcomeCode0String));
    }
}