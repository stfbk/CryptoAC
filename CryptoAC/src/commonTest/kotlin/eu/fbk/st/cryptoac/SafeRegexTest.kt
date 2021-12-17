package eu.fbk.st.cryptoac

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

internal class SafeRegexTest {

    private val exampleSafeTextNoSpacesRegex = "text"
    private val exampleUrlRegex = "https://google.com/"
    private val exampleUriRegex = "/#G1kiGui2qDYcdjriD0kdsspLycD75of"
    private val exampleIpv4Regex = "192.168.111.4"
    private val exampleBase64Regex = "At539hww"
    private val exampleAwsAccessKeyRegex = "A94KF94IR9FIEKDMCJ84"
    private val exampleAwsSecretKeyRegex ="3F9IKGJRIT58TYRHhe93hg88skf95uf74hdy3=/d"

    @Test
    fun `valid texts validate against regex`() {
        assertTrue(SafeRegex.TEXT.matches(exampleSafeTextNoSpacesRegex))
        assertTrue(SafeRegex.URL.matches(exampleUrlRegex))
        assertTrue(SafeRegex.URI.matches(exampleUriRegex))
        assertTrue(SafeRegex.IPV4.matches(exampleIpv4Regex))
        assertTrue(SafeRegex.URL_OR_IPV4.matches(exampleUrlRegex))
        assertTrue(SafeRegex.URL_OR_IPV4.matches(exampleIpv4Regex))
        assertTrue(SafeRegex.BASE64.matches(exampleBase64Regex))
        assertTrue(SafeRegex.AWS_ACCESS_KEY.matches(exampleAwsAccessKeyRegex))
        assertTrue(SafeRegex.AWS_SECRET_KEY.matches(exampleAwsSecretKeyRegex))
    }

    @Test
    fun `empty text do not validate against regex`() {
        assertFalse(SafeRegex.TEXT.matches(""))
        assertFalse(SafeRegex.URL.matches(""))
        assertFalse(SafeRegex.URI.matches(""))
        assertFalse(SafeRegex.IPV4.matches(""))
        assertFalse(SafeRegex.URL_OR_IPV4.matches(""))
        assertFalse(SafeRegex.BASE64.matches(""))
        assertFalse(SafeRegex.AWS_ACCESS_KEY.matches(""))
        assertFalse(SafeRegex.AWS_SECRET_KEY.matches(""))
    }

    @Test
    fun `blank text do not validate against regex`() {
        assertFalse(SafeRegex.TEXT.matches(" "))
        assertFalse(SafeRegex.URL.matches(" "))
        assertFalse(SafeRegex.URI.matches(" "))
        assertFalse(SafeRegex.IPV4.matches(" "))
        assertFalse(SafeRegex.URL_OR_IPV4.matches(" "))
        assertFalse(SafeRegex.BASE64.matches(" "))
        assertFalse(SafeRegex.AWS_ACCESS_KEY.matches(" "))
        assertFalse(SafeRegex.AWS_SECRET_KEY.matches(" "))
    }

    @Test
    fun `not anchored text at the beginning do not validate against regex`() {
        assertFalse(SafeRegex.TEXT.matches(" $exampleSafeTextNoSpacesRegex"))
        assertFalse(SafeRegex.URL.matches(" $exampleUrlRegex"))
        assertFalse(SafeRegex.URI.matches(" $exampleUriRegex"))
        assertFalse(SafeRegex.IPV4.matches(" $exampleIpv4Regex"))
        assertFalse(SafeRegex.URL_OR_IPV4.matches(" $exampleUrlRegex"))
        assertFalse(SafeRegex.URL_OR_IPV4.matches(" $exampleUriRegex"))
        assertFalse(SafeRegex.BASE64.matches(" $exampleBase64Regex"))
        assertFalse(SafeRegex.AWS_ACCESS_KEY.matches(" $exampleAwsAccessKeyRegex"))
        assertFalse(SafeRegex.AWS_SECRET_KEY.matches(" $exampleAwsSecretKeyRegex"))
    }

    @Test
    fun `not anchored text at the end do not validate against regex`() {
        assertFalse(SafeRegex.TEXT.matches("$exampleSafeTextNoSpacesRegex "))
        assertFalse(SafeRegex.URL.matches("$exampleUrlRegex "))
        assertFalse(SafeRegex.URI.matches("$exampleUriRegex "))
        assertFalse(SafeRegex.IPV4.matches("$exampleIpv4Regex "))
        assertFalse(SafeRegex.URL_OR_IPV4.matches("$exampleUrlRegex "))
        assertFalse(SafeRegex.URL_OR_IPV4.matches("$exampleUriRegex "))
        assertFalse(SafeRegex.BASE64.matches("$exampleBase64Regex "))
        assertFalse(SafeRegex.AWS_ACCESS_KEY.matches("$exampleAwsAccessKeyRegex "))
        assertFalse(SafeRegex.AWS_SECRET_KEY.matches("$exampleAwsSecretKeyRegex "))
    }
}