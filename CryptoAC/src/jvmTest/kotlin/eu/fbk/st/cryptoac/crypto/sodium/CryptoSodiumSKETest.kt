package eu.fbk.st.cryptoac.crypto.sodium

import com.ionspin.kotlin.crypto.secretstream.SecretStreamCorruptedOrTamperedDataException
import eu.fbk.st.cryptoac.crypto.*
import org.junit.jupiter.api.*
import java.io.ByteArrayInputStream
import kotlin.random.Random

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class CryptoSodiumSKETest : CryptoSKETest() {

    override val cryptoSKEObject: CryptoSodium =
        CryptoSKEFactory.getCrypto(CryptoType.SODIUM) as CryptoSodium

    // TODO make that  cryptoSKEObject.decryptStream for sodium throws
    //  generic crypto exception instead of SecretStreamCorruptedOrTamperedDataException
    @Test
    override fun `decrypt stream with wrong key`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val otherKey = cryptoSKEObject.generateSymKey()
        val encBytes = cryptoSKEObject.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
        assertThrows<SecretStreamCorruptedOrTamperedDataException> {
            cryptoSKEObject.decryptStream(otherKey, ByteArrayInputStream(encBytes)).readAllBytes()
        }
    }
}
