package eu.fbk.st.cryptoac.util;

import org.apache.commons.cli.CommandLine;

/**
 * Simple class to hold the string keys of the options in the CMD
 */
public class CMDUtil {

    /**
     * The key for the port parameter.
     */
    public static final String kCMDPortKey = "port";

    /**
     * The key for the proxy operation mode parameter.
     */
    public static final String kCMDOperationModeProxy = "operationModeProxy";

    /**
     * The key for the RM operation mode parameter.
     */
    public static final String kCMDOperationModeRM = "operationModeRM";

    /**
     * The key for the DS operation mode parameter.
     */
    public static final String kCMDOperationModeDS = "operationModeDS";

    /**
     * The key for the admin Id parameter.
     */
    public static final String kCMDAdminID = "adminID";

    /**
     * The key for the max thread number parameter.
     */
    public static final String kCMDMaxThreads = "maxThreadsNumber";

    /**
     * The key for the min thread number parameter.
     */
    public static final String kCMDMinThreads = "minThreadsNumber";

    /**
     * The key for the session expiration time.
     */
    public static final String kCMDSessionExpTime = "sessionExpirationTimeSeconds";

    /**
     * The key for the static files expiration time.
     */
    public static final String kCMDStaticFilesExpTime = "staticFilesExpirationTimeSeconds";

    /**
     * The key for the default timeout for idling threads (in milliseconds).
     */
    public static final String kCMDThreadsTimeOutMillis = "threadsTimeoutMilliseconds";

    /**
     * The key for the name of the log file.
     */
    public static final String kCMDLogFileName = "logFileName";


    /**
     * The key for the length of PKC keys.
     */
    public static final String kCMDPKCKeyLength = "PKCKeysLength";

    /**
     * The key for the algorithm used to generate PKC keys.
     */
    public static final String kCMDPKCAlgorithm = "PKCAlgorithm";

    /**
     * The key for the algorithm used for hashing.
     */
    public static final String kCMDHashAlgorithm = "HashAlgorithm";

    /**
     * The key for the algorithm used for signing with PKC private keys/verifying with PKC public keys.
     */
    public static final String kCMDPKCSigningAlgorithm = "PKCSigningAlgorithm";

    /**
     * The key for the algorithm used for symmetric encryption.
     */
    public static final String kCMDSymAlgorithm = "symmetricAlgorithm";

    /**
     * The key for the length of symmetric keys.
     */
    public static final String kCMDSymKeyLength = "symmetricKeysLength";




    /**
     * Acquires the given integer option and check that it is within the given boundaries
     * @param cmd the command line object containing the program arguments
     * @param integerOptionToAcquire the key of the option to acquire
     * @param defaultValue the default value in case the option was not given. If both default value and
     *                     the given option are null, throw IllegalArgumentException
     * @param minValue the minimum value the integer can have. If the given value is below, throw IllegalArgumentException
     * @param maxValue the maximum value the integer can have. If the given value is below, throw IllegalArgumentException
     * @return the option as integer
     * @throws IllegalArgumentException if the default value is null and the given option is null or blank or empty
     */
    public static int acquireIntegerOption(CommandLine cmd, String integerOptionToAcquire, int defaultValue,
                                           int minValue, int maxValue) throws IllegalArgumentException {

        int valueToReturn = defaultValue;

        String givenIntegerOptionAsString = cmd.getOptionValue(integerOptionToAcquire);
        if (givenIntegerOptionAsString != null)
            valueToReturn = Integer.parseInt(givenIntegerOptionAsString);

        if (valueToReturn < minValue || valueToReturn > maxValue)
            throw new IllegalArgumentException("given number: " + valueToReturn + " is not between the given interval: " +
                    minValue + "-" + maxValue);

        return valueToReturn;
    }

    /**
     * Acquires the given string and checks that is it neither null nor blank nor empty
     * @param cmd the command line object containing the program arguments
     * @param stringOptionToAcquire the key of the option to acquire
     * @param defaultValue the default value in case the option was not given. If both default value and
     *                     the given option are null, throw IllegalArgumentException
     * @return the option
     * @throws IllegalArgumentException if the default value is null and the given option is null or blank or empty
     */
    public static String acquireStringOption(CommandLine cmd, String stringOptionToAcquire, String defaultValue)
            throws IllegalArgumentException {

        String givenStringOption = cmd.getOptionValue(stringOptionToAcquire);
        givenStringOption = givenStringOption == null ? defaultValue : givenStringOption;

        if (givenStringOption == null || givenStringOption.isBlank() || givenStringOption.isEmpty())
            throw new IllegalArgumentException("given string " + stringOptionToAcquire + " is null");

        return givenStringOption;
    }
}
