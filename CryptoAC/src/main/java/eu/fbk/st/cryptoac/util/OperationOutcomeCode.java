package eu.fbk.st.cryptoac.util;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;


/**
 * This enumerator collects all the numeric codes used in CryptoAC, along with the related message.
 * Apart from 0, all codes are error codes; some codes refer to errors in the logic of the algorithm,
 * some to generic errors, some to specific DAOs (e.g. AWS) errors and some to server errors.
 *
 * Before creating a new code, check whether an already existing one can do.
 * If none of these fits your situation, then feel free to add a new code to the list.
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
    code_19("There was an error while uploading a file"),
    code_20("There was an error while deleting a file"),
    code_21("There was an error while updating a file"),
    code_22("There was an error while downloading a file"),
    code_23("Role Tuple with such user and role IDs is already present in the database"),
    code_24("Permission Tuple with such role and file IDs and file version number is already present in the database"),
    code_25("File Tuple with such file ID is already present in the database"),
    code_26("No RoleTuple matched the given parameters in delete operation"),
    code_27("No PermissionTuple matched the given parameters in delete operation"),
    code_28("No FileTuple matched the given parameters in delete operation"),
    code_29("There was an error while encrypting a PKI keys"),
    code_30("There was an error while decrypting a PKI keys"),
    code_31("There was an error while encrypting a symmetric key"),
    code_32("There was an error while decrypting a symmetric key"),
    code_33("There was an error while encrypting a file"),
    code_34("There was an error while decrypting a file"),
    code_35("Cryptographic algorithm not supported"),
    code_36("There was an error while loading the file from the file system"),
    code_37("There was an error while saving the file to the file system"),
    code_38("There was an error while deleting the file from the file system"),
    code_39("The specified storage system is not supported or it is bad configured"),
    code_40("AWS Exception: S3 could not be contacted, or response could not be handled"),
    code_42("AWS Error: the specified bucket does not exist in S3"),
    code_43("AWS Error: SQL error while executing command on RDS"),
    code_44("AWS Error: lock/unlock/rollback functions called in an inconsistent status"),
    code_45("AWS Exception: the request was transmitted but AWS could not process it"),
    code_50("Exception while mapping object to JSON"),
    code_51("Given input is too big in size"),
    code_52("The specified system storage is not supported"),
    code_53("The configuration file was not found"),
    code_54("There was an error while loading the configuration file"),
    code_55("The user related to the operation was deleted"),
    code_56("The role related to the operation was deleted"),
    code_57("The user related to the operation was created but not initialized"),
    code_58("SQL exception while executing command on database"),
    code_59("Tuple is not well formatted"),
    code_60("The Administrator was not found (as a User) in the metadata"),
    code_61("The Administrator was not found (as a Role) in the metadata"),
    code_62("Error in configuring the interface toward the chosen storage system"),
    code_63("Error in connecting to the database, check connection data (did the admin inserted your username?)"),
    code_64("Error in configuration parameters"),
    code_65("This operation requires admin privileges"),
    code_66("There was an error while reading user's input"),
    code_67("User's configuration already exists"),
    code_68("User's configuration does not exist"),
    code_69("The admin user cannot be manipulated"),
    code_70("The specified element does not exist in CryptoAC"),
    code_71("At least a parameter has to be specified to avoid to delete all"),
    code_72("An unexpected error occurred"),
    code_73("There was an error while creating a directory"),
    code_74("You cannot update the username"),
    code_75("The connection had a timeout"),
    code_76("Error while sending or receiving data"),
    code_77("Error when creating the URI"),
    code_78("There was an error while creating the reference monitor"),
    code_79("Incoherent status in the database, contact system administrator"),
    code_80("There was an error while renaming the file in the file system"),

    code_400("Bad Request - you sent a bad request"),
    code_401("Unauthorized - you must be authenticated to access this resource"),
    code_403("Forbidden - you do not have the necessary permissions or need to configure an account"),
    code_404("Not found - the requested resource does not exist"),
    code_406("Not acceptable - probably missing Accept header for JSON"),
    code_422("Unprocessable entity - missing or wrong parameters"),
    code_500("Internal server error");



    private final String param;

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