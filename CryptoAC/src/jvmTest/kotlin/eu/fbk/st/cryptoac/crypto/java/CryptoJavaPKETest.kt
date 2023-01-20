package eu.fbk.st.cryptoac.crypto.java

import eu.fbk.st.cryptoac.crypto.*

internal class CryptoJavaPKETest : CryptoPKETest() {

    override val cryptoPKEObject: CryptoJava =
        CryptoPKEFactory.getCrypto(CryptoType.JAVA) as CryptoJava
    override val cryptoSKEObject: CryptoJava = cryptoPKEObject

}
