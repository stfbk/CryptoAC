package eu.fbk.st.cryptoac.util;

import org.jetbrains.annotations.NotNull;

import java.util.regex.Pattern;

/**
 * This class contains methods to validate users' input through regular expressions.
 */
public class SafeRegex {

    /**
     * the safe (not-empty) text regex:
     * - chars from 'a' to 'z'
     * - chars from 'A' to 'Z'
     * - digits from '0' to '9'
     * - '-' and '_'
     */
    public static final String safeTextRegex = "^[-a-zA-Z0-9 ._/+=]+$";

    /**
     * the AWS access key regex consists of 20 chars among:
     * - chars from 'A' to 'Z'
     * - digits from '0' to '9'
     */
    public static final String awsAccessKeyRegex = "^[A-Z0-9]{20}$";

    /**
     * the AWS secret key regex consists of 40 chars among:
     * - chars from 'a' to 'z'
     * - chars from 'A' to 'Z'
     * - digits from '0' to '9'
     * - '/' and '+' and '='
     */
    public static final String awsSecretKeyRegex = "^[A-Za-z0-9/+=]{40}$";

    // TODO url regex?

    /**
     * This method returns true if the text is safe according to the given regular expression.
     * @param regex the regular expression
     * @param text the string to validate
     * @return true if the pattern matches, false otherwise
     */
    public static boolean checkIfMatchesRegex (String regex, @NotNull String text) {
        Pattern pattern = Pattern.compile(regex);
        return pattern.matcher(text).matches();
    }
}
