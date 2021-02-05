package eu.fbk.st.cryptoac.util;

import org.jetbrains.annotations.NotNull;

import java.util.regex.Pattern;

/**
 * This class contains methods to validate users' input through regular expressions.
 */
public class SafeRegex {

    /**
     * the safe (not-empty) text regex:
     * ^                     # start of the line
     *   [-a-zA-Z0-9 ._/+=]  # one or more repetitions of these chars
     * $                     # end of the line
     */
    public static final String safeTextRegex = "^[-a-zA-Z0-9 ._/+=]+$";

    /**
     * the safe (not-empty) URL regex:
     * ^                                # start of the line
     *   (                              # start of group #1
     *     https?                       # can be either 'http' or 'https'
     *   )                              # end of group  #1
     *   ://                            # literal "://"
     *   [-a-zA-Z0-9+&@#/%?=~_|!:,.;]*  # zero or one of these chars
     *   [-a-zA-Z0-9+&@#/%=~_|]         # exactly one of these chars
     * $                                # end of the line
     */
    public static final String urlRegex = "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$";

    /**
     * the safe (not-empty) URI regex:
     * ^                                # start of the line
     *   [-a-zA-Z0-9+&@#/%?=~_|!:,.;]*  # zero or one of these chars
     *   [-a-zA-Z0-9+&@#/%=~_|]         # exactly one of these chars
     * $                                # end of the line
     */
    public static final String uriRegex = "^[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$";

    /**
     * the safe (not-empty) ipv4 regex:
     * ^                                # start of the line
     *   (               # start of group #1
     *     [0-9]         # 0-9
     *     |             # or
     *     [1-9][0-9]    # 10-99
     *     |             # or
     *     1[0-9][0-9]   # 100-199
     *     |             # or
     *     2[0-4][0-9]   # 200-249
     *     |             # or
     *     25[0-5]       # 250-255
     *   )               # end of group #1
     *   (\.(?!$)|$))    # ensure IPv4 doesn't end with a dot
     *   {4}             # 4 times
     * $                                # end of the line
     */
    public static final String ipv4Regex = "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\\.(?!$)|$)){4}$";

    /**
     * the safe (not-empty) regex matching either the URL or the IPv4 regexes.
     */
    public static final String urlOrIPRegex = urlRegex + "|" + ipv4Regex;

    /**
     * the safe (also empty) regex matching base64 encoded data.
     * ^                        # start of the line
     *   (?:                    # start of non-capturing group #1
     *     [A-Za-z0-9+/]{4}*    # zero or more repetitions of 4 of these chars
     *   )                      # end of group #1
     *   (?:                    # start of non-capturing group #1
     *     [A-Za-z0-9+/]{2}==   # two of these chars followed by "=="
     *     |                    # or
     *     [A-Za-z0-9+/]{3}=    # three of these chars followed by "="
     *   )                      # end of group #2
     * $               # end of the line
     */
    public static final String base64Regex = "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";

    /**
     * the AWS access key regex consists of 20 chars among:
     * ^               # start of the line
     *   [A-Z0-9]{40}  # 20 repetitions of these chars
     * $               # end of the line
     */
    public static final String awsAccessKeyRegex = "^[A-Z0-9]{20}$";

    /**
     * the AWS secret key regex consists of 40 chars among:
     * ^                     # start of the line
     *   [A-Za-z0-9/+=]{40}  # 40 repetitions of these chars
     * $                     # end of the line
     */
    public static final String awsSecretKeyRegex = "^[A-Za-z0-9/+=]{40}$";


    /**
     * This method returns true if the text is safe according to the given regular expression.
     * @param regex the regular expression
     * @param text the string to validate
     * @return true if the pattern matches, false otherwise
     */
    public static boolean matchRegex(String regex, @NotNull String text) {
        Pattern pattern = Pattern.compile(regex);
        return pattern.matcher(text).matches();
    }
}
