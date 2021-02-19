package eu.fbk.st.cryptoac.util;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;


/**
 * This class contains methods to test RegExs for validating users' input through.
 * As we took RegEx from OWASP, we assume they were thoroughly tested. Therefore,
 * here we just check some basic properties.
 */
class SafeRegexTest {

    // These are the regular expressions to test
    // - safeTextRegex = "^[-a-zA-Z0-9._/+=]+$";
    // - urlRegex = "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$";
    // - uriRegex = "^[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$";
    // - ipv4Regex = "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\\.(?!$)|$)){4}$";
    // - urlOrIPRegex = urlRegex + "|" + ipv4Regex;
    // - base64Regex = "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
    // - awsAccessKeyRegex = "^[A-Z0-9]{20}$";
    // - awsSecretKeyRegex = "^[A-Za-z0-9/+=]{40}$";

    String exampleSafeTextNoSpacesRegex = "text";
    String exampleUrlRegex = "https://google.com/";
    String exampleUriRegex = "/#G1kiGui2qDYcdjriD0kdsspLycD75of";
    String exampleIpv4Regex = "192.168.111.4";
    String exampleBase64Regex = "At539hww";
    String exampleAwsAccessKeyRegex = "A94KF94IR9FIEKDMCJ84";
    String exampleAwsSecretKeyRegex ="3F9IKGJRIT58TYRHhe93hg88skf95uf74hdy3=/d";

    @Test
    void matchRegex_empty() {
        assertFalse(SafeRegex.matchRegex(SafeRegex.safeTextNoSpacesRegex, ""));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlRegex, ""));
        assertFalse(SafeRegex.matchRegex(SafeRegex.uriRegex, ""));
        assertFalse(SafeRegex.matchRegex(SafeRegex.ipv4Regex, ""));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlOrIPV4Regex, ""));
        assertFalse(SafeRegex.matchRegex(SafeRegex.base64Regex, ""));
        assertFalse(SafeRegex.matchRegex(SafeRegex.awsAccessKeyRegex, ""));
        assertFalse(SafeRegex.matchRegex(SafeRegex.awsSecretKeyRegex, ""));
    }

    @Test
    void matchRegex_space() {
        assertFalse(SafeRegex.matchRegex(SafeRegex.safeTextNoSpacesRegex, " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlRegex, " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.uriRegex, " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.ipv4Regex, " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlOrIPV4Regex, " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.base64Regex, " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.awsAccessKeyRegex, " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.awsSecretKeyRegex, " "));
    }

    @Test
    void matchRegex_notAnchored() {

        assertTrue(SafeRegex.matchRegex(SafeRegex.safeTextNoSpacesRegex, exampleSafeTextNoSpacesRegex));
        assertTrue(SafeRegex.matchRegex(SafeRegex.urlRegex, exampleUrlRegex));
        assertTrue(SafeRegex.matchRegex(SafeRegex.uriRegex, exampleUriRegex));
        assertTrue(SafeRegex.matchRegex(SafeRegex.ipv4Regex, exampleIpv4Regex));
        assertTrue(SafeRegex.matchRegex(SafeRegex.urlOrIPV4Regex, exampleUrlRegex));
        assertTrue(SafeRegex.matchRegex(SafeRegex.urlOrIPV4Regex, exampleIpv4Regex));
        assertTrue(SafeRegex.matchRegex(SafeRegex.base64Regex, exampleBase64Regex));
        assertTrue(SafeRegex.matchRegex(SafeRegex.awsAccessKeyRegex, exampleAwsAccessKeyRegex));
        assertTrue(SafeRegex.matchRegex(SafeRegex.awsSecretKeyRegex, exampleAwsSecretKeyRegex));

        assertFalse(SafeRegex.matchRegex(SafeRegex.safeTextNoSpacesRegex, " " + exampleSafeTextNoSpacesRegex));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlRegex, " " + exampleUrlRegex));
        assertFalse(SafeRegex.matchRegex(SafeRegex.uriRegex, " " + exampleUriRegex));
        assertFalse(SafeRegex.matchRegex(SafeRegex.ipv4Regex, " " + exampleIpv4Regex));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlOrIPV4Regex, " " + exampleUrlRegex));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlOrIPV4Regex, " " + exampleUriRegex));
        assertFalse(SafeRegex.matchRegex(SafeRegex.base64Regex, " " + exampleBase64Regex));
        assertFalse(SafeRegex.matchRegex(SafeRegex.awsAccessKeyRegex, " " + exampleAwsAccessKeyRegex));
        assertFalse(SafeRegex.matchRegex(SafeRegex.awsSecretKeyRegex, " " + exampleAwsSecretKeyRegex));

        assertFalse(SafeRegex.matchRegex(SafeRegex.safeTextNoSpacesRegex, exampleSafeTextNoSpacesRegex + " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlRegex, exampleUrlRegex + " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.uriRegex, exampleUriRegex + " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.ipv4Regex, exampleIpv4Regex + " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlOrIPV4Regex, exampleUrlRegex + " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.urlOrIPV4Regex, exampleUriRegex + " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.base64Regex, exampleBase64Regex + " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.awsAccessKeyRegex, exampleAwsAccessKeyRegex + " "));
        assertFalse(SafeRegex.matchRegex(SafeRegex.awsSecretKeyRegex, exampleAwsSecretKeyRegex + " "));
    }
}