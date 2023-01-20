package eu.fbk.st.cryptoac.crypto.java

import eu.fbk.st.cryptoac.crypto.*

internal class CryptoJavaSKETest : CryptoSKETest() {

    override val cryptoSKEObject: CryptoJava =
        CryptoPKEFactory.getCrypto(CryptoType.JAVA) as CryptoJava
}
