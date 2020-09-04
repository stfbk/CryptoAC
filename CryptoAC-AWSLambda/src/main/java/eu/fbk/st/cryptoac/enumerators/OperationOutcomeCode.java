package eu.fbk.st.cryptoac.enumerators;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;


/**
 * This enumerator collects all the numeric codes used in CryptoAC, along with a specific message.
 * Apart from 0, all the others are error codes; some of them refers to the logic of the algorithm,
 * some to generic errors, some to specific DAOs (e.g. AWS) and some to server errors.
 * Please search among the already present codes for the one to indicate the output of your operation.
 * If none of these fits your semantic, then feel free to add it to the list
 */
public enum OperationOutcomeCode implements Serializable {

    code_0( "The operation concluded successfully"),
    code_1( "The specified ID for the new user already exists"),
    code_2( "The specified ID for the new role already exists"),
    code_3( "The specified ID for the new file already exists"),
    code_4( "The user related to the operation does not exist"),
    code_5( "The role related to the operation does not exist"),
    code_6( "The file related to the operation does not exist"),
    code_7( "The digital signature of the tuple is not valid"),
    code_8( "The role tuple giving the Administrator membership over a role was not found"),
    code_9( "The permission tuple giving the Administrator permission over a file was not found"),
    code_10("The entity (User or Role) that signed the tuple does not exist"),
    code_11("The tuple was not found"),
    code_12("There was an error during the signing process of a tuple"),
    code_13("There was an error during the verification process of the signature of a tuple"),
    code_14("The user does not have READ access to the requested resource"),
    code_15("The user does not have WRITE access to the requested resource"),
    code_16("The given permission (to assign or revoke) is semantically incorrect"),
    code_17("The given version number does not correspond"),
    code_18("There was an error while creating back a PKI key from bytes"),
    code_19("There was an error while uploading a file to the Cloud"),
    code_20("There was an error while deleting a file from the Cloud"),
    code_21("There was an error while updating a file in the Cloud"),
    code_22("There was an error while downloading a file from the Cloud"),
    code_23("Role Tuple with such user and role IDs is already present in the database"),
    code_24("Permission Tuple with such role and file IDs and file version number is already present in the database"),
    code_25("File Tuple with such file ID is already present in the database "),
    code_26("No RoleTuple matched the given parameters in delete operation"),
    code_27("No PermissionTuple matched the given parameters in delete operation"),
    code_28("No FileTuple matched the given parameters in delete operation"),
    code_29("There was an error while encrypting a PKI keys"),
    code_30("There was an error while decrypting a PKI keys"),
    code_31("There was an error while encrypting a symmetric key"),
    code_32("There was an error while decrypting a symmetric key"),
    code_33("There was an error while encrypting a file"),
    code_34("There was an error while decrypting a file"),
    code_35("There was an error while creating the cryptographic utility object"),
    code_36("There was an error while loading the file from the file system"),
    code_37("There was an error while saving the file to the file system"),
    code_38("There was an error while deleting the file from the file system"),
    code_39("The specified cloud service provider is not supported or it is bad configured"),
    code_40("AWS Exception: S3 could not be contacted, or response could not be handled"),
    code_41("AWS Exception: SQL exception while executing command on RDS"),
    code_42("AWS Error: the specified bucket does not exist in S3"),
    code_43("AWS Error: SQL error while executing command on RDS"),
    code_44("AWS Error: lock/unlock/rollback functions called in an inconsistent status"),
    code_45("AWS Exception: the request was transmitted but AWS could not process it"),
    code_50("Server Exception: exception while mapping object to JSON"),
    code_51("Server Exception: given input is too big in size"),
    code_52("Server Exception: the specified cloud service provider is not supported"),
    code_53("Server Exception: the configuration file was not found"),
    code_54("Server Exception: there was an error while loading the configuration file"),
    code_55("The user related to the operation was deleted"),
    code_56("The role related to the operation was deleted"),
    code_57("The user related to the operation was created but not initialized"),
    code_58("SQL exception while executing command on database"),
    code_59("Tuple is not well formatted"),
    code_60("The Administrator was not found (as a User) in the Cloud"),
    code_61("The Administrator was not found (as a Role) in the Cloud"),

    code_400("Bad Request - you sent a bad request"),
    code_401("Unauthorized - you must be authenticated to access this resource"),
    code_403("Forbidden - you do not have the necessary permissions or need to configure an account"),
    code_404("Not found - the requested resource does not exist"),
    code_409("Conflict - conflict with the current state of the resource"),
    code_406("Not acceptable - probably missing Accept header for JSON"),
    code_422("Unprocessable entity"),
    code_500("Internal server error"),
    code_boh("An unexpected error occurred");


    private String param;

    OperationOutcomeCode(String envUrl) {
        this.param = envUrl;
    }

    @Override
    public String toString() {
        return param;
    }

    //****** Reverse Lookup Implementation************//
    //Lookup table
    private static final Map<String, OperationOutcomeCode> lookup = new HashMap<>();

    //Populate the lookup table on loading time
    static
    {
        for(OperationOutcomeCode env : OperationOutcomeCode.values())
        {
            lookup.put(env.toString(), env);
        }
    }

    //This method can be used for reverse lookup purpose
    public static OperationOutcomeCode get(String param)
    {
        return lookup.get(param);
    }
}