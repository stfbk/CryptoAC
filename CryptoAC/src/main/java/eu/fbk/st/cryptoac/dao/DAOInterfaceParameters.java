package eu.fbk.st.cryptoac.dao;


import com.google.gson.GsonBuilder;
import com.google.gson.annotations.Expose;
import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.dao.aws.DAOInterfaceAWSParameters;
import eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocalParameters;
import eu.fbk.st.cryptoac.dao.mock.DAOInterfaceMockParameters;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;

import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Base64;
import java.util.HashMap;

import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceParameters.*;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;
import static eu.fbk.st.cryptoac.util.SafeRegex.matchRegex;
import static eu.fbk.st.cryptoac.util.SafeRegex.*;

/**
 * This class contains the parameters needed to instantiate the DAO interface. But wait, that's an interface,
 * you cannot instantiate it, right? Yes of course you cannot, but the idea is that you inherit from this
 * class and define the parameters (e.g., AWS region, URLs, ...) that you need for your own implementation of the
 * DAO interface. Here we present the parameters that are needed in CryptoAC, such as the username or whether the
 * user is an administrator or not or cryptographic keys.
 */
public class DAOInterfaceParameters {

    /**
     * boolean flag expressing whether the user is an administrator or not.
     */
    @Expose
    private boolean isAdminInCryptoAC;

    /**
     * The FQN of this class, i.e., equivalent to this.getClass().getName();.
     * This is needed for serialization.
     */
    @Expose
    private final String type;

    /**
     * the username that the user has in the CryptoAC policy.
     */
    @Expose
    private String usernameInCryptoAC;

    /**
     * The encrypting public key of the user encoded in base64.
     */
    @Expose
    private String encryptingPublicKey;

    /**
     * The encrypting private key of the user encoded in base64.
     * Don't apply the expose annotation so it can be excluded from serialization.
     */
    private String encryptingPrivateKey;

    /**
     * The signing public key of the user encoded in base64.
     */
    @Expose
    private String signingPublicKey;

    /**
     * The signing private key of the user encoded in base64.
     * Don't apply the expose annotation so it can be excluded from serialization.
     */
    private String signingPrivateKey;

    /**
     * Constructor with parameters. The accepted parameters are the username (kUsernameInCryptoAC)
     * and the encoded keys (kEncryptingPrivateKey, kEncryptingPublicKey,
     * kSigningPrivateKey, kSigningPublicKey)
     * @param configurationParameters the parameters to initialize this instance variables with
     */
    public DAOInterfaceParameters(HashMap<String, byte[]> configurationParameters) {

        this.type = this.getClass().getName();

        this.usernameInCryptoAC =
                new String(configurationParameters.get(kUsernameInCryptoAC));
        this.encryptingPublicKey =
                Base64.getEncoder().encodeToString(configurationParameters.get(kEncryptingPublicKey));
        this.encryptingPrivateKey =
                Base64.getEncoder().encodeToString(configurationParameters.get(kEncryptingPrivateKey));
        this.signingPublicKey =
                Base64.getEncoder().encodeToString(configurationParameters.get(kSigningPublicKey));
        this.signingPrivateKey =
                Base64.getEncoder().encodeToString(configurationParameters.get(kSigningPrivateKey));

        checkParametersAreValid();
    }

    /**
     * This method checks that the values of the parameters are valid through regular expressions.
     * @throws IllegalArgumentException if at least one of the parameters does not satisfy the regular expression
     */
    protected void checkParametersAreValid() {
        if (!matchRegex(safeTextRegex, usernameInCryptoAC))
            throw new IllegalArgumentException("the username parameter is null or it does not match a safe regular expression");
    }

    /**
     * This method should update the values of the parameters with the new data and then check
     * that the parameters are valid; only given parameters should be updated.
     * Note: the username cannot be updated, as it is the only identifier for the user. Also
     * the administrator status cannot change.
     * @param updatedData the parameters to update with the new values
     * @return an operation outcome code for the result of the operation
     */
    public OperationOutcomeCode update(HashMap<String, byte[]> updatedData) {

        OperationOutcomeCode returningCode = code_0;

        // the username cannot be updated
        if (updatedData.containsKey(kUsernameInCryptoAC)) {
            if (! (new String(updatedData.get(kUsernameInCryptoAC)).equals(usernameInCryptoAC)))
                returningCode = code_74;
        }

        if (updatedData.containsKey(kEncryptingPublicKey))
            this.encryptingPublicKey = Base64.getEncoder().encodeToString(updatedData.get(kEncryptingPublicKey));
        if (updatedData.containsKey(kEncryptingPrivateKey))
            this.encryptingPrivateKey = Base64.getEncoder().encodeToString(updatedData.get(kEncryptingPrivateKey));
        if (updatedData.containsKey(kSigningPublicKey))
            this.signingPublicKey = Base64.getEncoder().encodeToString(updatedData.get(kSigningPublicKey));
        if (updatedData.containsKey(kSigningPrivateKey))
            this.signingPrivateKey = Base64.getEncoder().encodeToString(updatedData.get(kSigningPrivateKey));

        return returningCode;
    }

    /**
     * getter for the isUserAdmin flag.
     * @return the isUserAdmin flag
     */
    public boolean isUserAdmin() {
        return isAdminInCryptoAC;
    }

    /**
     * setter for the isUserAdmin flag.
     * @param isUserAdmin the isUserAdmin flag
     */
    public void setIsUserAdmin(boolean isUserAdmin) {
        this.isAdminInCryptoAC = isUserAdmin;
    }

    /**
     * getter for the type.
     * @return the type
     */
    public String getType() {
        return type;
    }

    /**
     * getter for the username.
     * @return the username
     */
    public String getUsernameInCryptoAC() {
        return usernameInCryptoAC;
    }

    /**
     * setter for the username.
     * @param usernameInCryptoAC the username
     */
    public void setUsernameInCryptoAC(String usernameInCryptoAC) {
        this.usernameInCryptoAC = usernameInCryptoAC;
    }

    /**
     * getter for the encrypting public key of the user encoded in base64.
     * @return the encrypting public key of the user encoded in base64
     */
    public String getEncryptingPublicKey() {
        return encryptingPublicKey;
    }

    /**
     * setter for the encrypting public key of the user encoded in base64.
     * @param encryptingPublicKey the encrypting public key of the user encoded in base64
     */
    public void setEncryptingPublicKey(PublicKey encryptingPublicKey) {
        this.encryptingPublicKey = Base64.getEncoder().encodeToString(encryptingPublicKey.getEncoded());
    }

    /**
     * getter for the encrypting private key of the user encoded in base64.
     * @return the encrypting private key of the user encoded in base64
     */
    public String getEncryptingPrivateKey() {
        return encryptingPrivateKey;
    }

    /**
     * setter for the encrypting private key of the user encoded in base64.
     * @param encryptingPrivateKey the encrypting private key of the user encoded in base64
     */
    public void setEncryptingPrivateKey(PrivateKey encryptingPrivateKey) {
        this.encryptingPrivateKey = Base64.getEncoder().encodeToString(encryptingPrivateKey.getEncoded());
    }

    /**
     * getter for the signing public key of the user encoded in base64.
     * @return the signing public key of the user encoded in base64
     */
    public String getSigningPublicKey() {
        return signingPublicKey;
    }

    /**
     * setter for the signing public key of the user encoded in base64.
     * @param signingPublicKey the signing public key of the user encoded in base64
     */
    public void setSigningPublicKey(PublicKey signingPublicKey) {
        this.signingPublicKey = Base64.getEncoder().encodeToString(signingPublicKey.getEncoded());
    }

    /**
     * getter for the signing private key of the user encoded in base64.
     * @return the signing private key of the user encoded in base64
     */
    public String getSigningPrivateKey() {
        return signingPrivateKey;
    }

    /**
     * setter for the signing private key of the user encoded in base64.
     * @param signingPrivateKey the signing private key of the user encoded in base64
     */
    public void setSigningPrivateKey(PrivateKey signingPrivateKey) {
        this.signingPrivateKey = Base64.getEncoder().encodeToString(signingPrivateKey.getEncoded());
    }

    /**
     * This method returns a JSON string representing this object while excluding sensitive parameters.
     * @return a JSON string representing this object while excluding sensitive parameters
     */
    @Override
    public String toString() {
        return new GsonBuilder()
                .excludeFieldsWithoutExposeAnnotation()
                .disableHtmlEscaping()
                .create()
                .toJson(this);
    }

    /**
     * This method creates an instance of the parameters needed by the 
     * DAO interface to interact with the selected storage system.
     * @param selectedDAO the storage system selected by the user
     * @param configurationData initialization parameters that must be given to the chosen storage system
     * @return the instance of the DAO interface parameters needed by the DAO 
     * interface to interact with the chosen storage system
     */
    public static DAOInterfaceParameters getInstance(DAO selectedDAO, HashMap<String, byte[]> configurationData) {

        App.logger.info("[{}{}{}{} ", "DAOInterfaceParameters", " (" + "getInstance" + ")]: ",
                "creating an instance of the DAO interface parameters to configure storage system ",
                selectedDAO.toString());

        DAOInterfaceParameters parametersToReturn = null;

        switch (selectedDAO) {

            case AWS:
                parametersToReturn = new DAOInterfaceAWSParameters(configurationData);
                break;

            case Local:
                parametersToReturn = new DAOInterfaceLocalParameters(configurationData);
                break;

            case Mock:
                parametersToReturn = new DAOInterfaceMockParameters(configurationData);
                break;

            default:
                App.logger.error("[{}{}{} ", "DAOInterfaceParameters", " (" + "getInstance" + ")]: ",
                        code_39.toString());
        }

        return parametersToReturn;
    }
}
