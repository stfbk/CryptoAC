package eu.fbk.st.cryptoac.core.element;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.services.identitymanagement.AmazonIdentityManagement;
import com.amazonaws.services.identitymanagement.AmazonIdentityManagementClientBuilder;
import com.amazonaws.services.identitymanagement.model.*;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.dao.DAOInterface;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQL;
import eu.fbk.st.cryptoac.dao.DAOInterfaceParameters;
import eu.fbk.st.cryptoac.dao.aws.DAOInterfaceAWS;
import eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocal;
import eu.fbk.st.cryptoac.dao.mock.DAOInterfaceMock;
import eu.fbk.st.cryptoac.core.tuple.*;
import eu.fbk.st.cryptoac.util.Const;
import eu.fbk.st.cryptoac.util.FileUtil;
import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.dao.DAO;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Paths;
import java.security.KeyPair;
import java.security.PublicKey;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceAWSParameters.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceLocalParameters.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceMySQLParameters.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceParameters.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.*;
import static eu.fbk.st.cryptoac.App.*;
import static java.lang.Thread.sleep;
import static org.junit.jupiter.api.Assertions.*;


class UserTest {

    static {
        new CryptoUtil(null, null, null, null, null, null);
    }

    // =====  Unit testing here is done interacting with the mock implementation of the cloud  =====
    // ===== Anyway, you change this line to test other DAOs and make some integration testing =====
    private static final DAO DAO_PROVIDER_BEING_USED = DAO.Local;
    //private static final DAO DAO_PROVIDER_BEING_USED = DAO.Mock;
    //private static final DAO CSP_PROVIDER_BEING_USED = CSP.AWS;

    private static final String testDatabaseName = "databaseCryptoAC";

    // data for mock tests
    private static final String testMockDatabase = "172.17.0.2";
    private static final String testMockDatabasePort = "3306";
    private static final String testMockDatabasePassword = "password";

    // data for local tests
    private static final String testLocalDatabase = "172.17.0.2";
    private static final String testLocalDatabasePort = "3306";
    private static final String testLocalDatabasePassword = "password";
    private static final String testLocalRM = "172.17.0.1";
    private static final String testLocalRMPort = "7778";
    private static final String testLocalDS = "172.17.0.1";
    private static final String testLocalDSPort = "7779";

    // data for AWS tests
    private static final String testAWSRegion               = "eu-central-1";
    private static final String testAWSDatabase             = "stefano-cryptoac-rds.cqfjkffmwvek.eu-central-1.rds.amazonaws.com";
    private static final String testAWSDatabasePort         = "3306";
    private static final String testAWSUploadBucket         = "stefano-cryptoac-files-upload";
    private static final String testAWSDownloadBucket       = "stefano-cryptoac-files-download";
    private static final String testAWSDatabasePassword     = "";
    private static final String testAWSAccessKey            = "";
    private static final String testAWSSecretKey            = "";

    // general data for tests
    private static final String alice       = "cryptoac_alice";
    private static final String bob         = "cryptoac_bob";
    private static final String carl        = "cryptoac_carl";
    private static final String employee    = "employee";
    private static final String researcher  = "researcher";
    private static final String fileName1   = "file1";
    private static final String fileName2   = "file2";
    private static final String filePath1   = "files/file1.txt";
    private static final String filePath2   = "files/file2.txt";
    private static final KeyPair aliceEncryptingKeys     = CryptoUtil.generatePKCKeys();
    private static final KeyPair bobEncryptingKeys       = CryptoUtil.generatePKCKeys();
    private static final KeyPair carlEncryptingKeys      = CryptoUtil.generatePKCKeys();
    private static final KeyPair aliceSigningKeys        = CryptoUtil.generatePKCKeys();
    private static final KeyPair bobSigningKeys          = CryptoUtil.generatePKCKeys();
    private static final KeyPair carlSigningKeys         = CryptoUtil.generatePKCKeys();

    private static HashMap<String, byte[]> adminConfigDAO   = null;
    private static HashMap<String, byte[]> aliceConfigDAO   = null;
    private static HashMap<String, byte[]> bobConfigDAO     = null;
    private static HashMap<String, byte[]> carlConfigDAO    = null;

    // admin's related objects
    private static final KeyPair adminsEncryptingKeys   = CryptoUtil.generatePKCKeys();
    private static final KeyPair adminSigningKeys       = CryptoUtil.generatePKCKeys();
    private static User adminUser                       = null;
    private static final String adminID                 = App.admin;



    /**
     * This function initialize the admin in the CSP, creating also needed services
     * @throws Exception if something went wrong
     */
    @BeforeEach
    void setUp() throws Exception {

        // set up config for DAOs
        setupDAOConfig();
        // add admin in database (to be done for every CloudProvider)
        adminUser.daoInterface.lockDAOInterfaceStatus();
        adminUser.daoInterface.initializeAdmin(adminsEncryptingKeys, adminSigningKeys);
        adminUser.daoInterface.unlockDAOInterfaceStatus();

        // end of setup

        App.logger.warn("[{}{}{} ", "", " (" + "" + ")]: ", "========== END OF SETUP ==========");

        App.logger.warn("[{}{}{} ", "", " (" + "" + ")]: ", "\n\n\n\n");
    }


    /**
     * This function should clean everything from the CSP, files, users, ...
     * @throws Exception if something went wrong
     */
    @AfterEach
    void tearDown() throws Exception {

        // start of tear down

        App.logger.warn("[{}{}{} ", "", " (" + "" + ")]: ", "\n\n\n\n");

        App.logger.warn("[{}{}{} ", "", " (" + "" + ")]: ", "========== START OF TEARDOWN ==========");

        // to contain the list of users and files in the database that we will have to delete
        HashSet<String> usersInTheDatabase = new HashSet<>();
        HashSet<String> filesInTheDatabase = new HashSet<>();

        // if this is the mock, local or AWS cloud interface, delete all from the database
        if (    adminUser.daoInterface instanceof DAOInterfaceLocal ||
                adminUser.daoInterface instanceof DAOInterfaceMock ||
                adminUser.daoInterface instanceof DAOInterfaceAWS) {

            // get the connection to the database
            adminUser.daoInterface.lockDAOInterfaceStatus();
            Field connection = DAOInterfaceMySQL.class.getDeclaredField("connection");
            connection.setAccessible(true);
            Connection dbConnection = (Connection) connection.get(adminUser.daoInterface);

            // table names
            String usersTable            = testDatabaseName + ".users";
            String rolesTable            = testDatabaseName + ".roles";
            String filesTable            = testDatabaseName + ".files";
            String roleTuplesTable       = testDatabaseName + ".roleTuples";
            String permissionTuplesTable = testDatabaseName + ".permissionTuples";
            String fileTuplesTable       = testDatabaseName + ".fileTuples";

            // try to delete everything
            try (
                    // we need to now which users and files are in the database
                    PreparedStatement getAllUserNames = dbConnection.prepareStatement("SELECT username FROM " + usersTable);
                    PreparedStatement getAllFileNames = dbConnection.prepareStatement("SELECT fileName FROM " + filesTable);

                    // wipe out tables and users from the database
                    PreparedStatement deletePermissionTuplesStatement = dbConnection.prepareStatement("DELETE FROM " + permissionTuplesTable);
                    PreparedStatement deleteRoleTupleStatement = dbConnection.prepareStatement("DELETE FROM " + roleTuplesTable);
                    PreparedStatement deleteFileTupleStatement = dbConnection.prepareStatement("DELETE FROM " + fileTuplesTable);
                    PreparedStatement deleteUsersStatement = dbConnection.prepareStatement("DELETE FROM " + usersTable);
                    PreparedStatement deleteRolesStatement = dbConnection.prepareStatement("DELETE FROM " + rolesTable);
                    PreparedStatement deleteFilesStatement = dbConnection.prepareStatement("DELETE FROM " + filesTable)
            ) {

                // get all user names except the admin
                ResultSet allUserNames = getAllUserNames.executeQuery();
                while (allUserNames.next())
                    usersInTheDatabase.add(allUserNames.getString(1));
                usersInTheDatabase.remove(adminID);

                // get all files names
                ResultSet allFileNames = getAllFileNames.executeQuery();
                while (allFileNames.next())
                    filesInTheDatabase.add(allFileNames.getString(1));

                // now delete everything
                deleteRoleTupleStatement.executeUpdate();
                deletePermissionTuplesStatement.executeUpdate();
                deleteFileTupleStatement.executeUpdate();
                deleteUsersStatement.executeUpdate();
                deleteRolesStatement.executeUpdate();
                deleteFilesStatement.executeUpdate();

                // now delete users
                if (!usersInTheDatabase.isEmpty()) {

                    // create the string for the prepared statement
                    StringBuilder deleteUsersString = new StringBuilder("DROP USER IF EXISTS ");

                    // for each user to delete
                    for (String userToDelete : usersInTheDatabase)
                        deleteUsersString.append(userToDelete).append(", ");

                    // delete the last comma and space
                    deleteUsersString.delete(deleteUsersString.length() - 2, deleteUsersString.length());

                    try (
                            PreparedStatement deleteDatabaseUsersStatement = dbConnection.prepareStatement(deleteUsersString.toString())
                    ) {
                        deleteDatabaseUsersStatement.executeUpdate();
                    }
                }
            }
            // thrown by sql query
            catch (SQLException e) {

                // log error

                App.logger.error("[{}{}{} ", "", " (" + "" + ")]: ", "exception while executing DELETE All from the database (" + e.getMessage() + ")");
            }
            adminUser.daoInterface.unlockDAOInterfaceStatus();
        }



        // if this is the mock interface, delete all files
        if (adminUser.daoInterface instanceof DAOInterfaceMock) {

            FileUtil.deleteAllFilesInDirectory(new File(uploadDirectoryDS.getAbsolutePath() + "/"));
            FileUtil.deleteAllFilesInDirectory(new File(temporaryDirectoryProxy.getAbsolutePath() + "/"));
        }
        // else if this is AWS, we should delete all IAM users, the IAM policy and files in S3
        else if (adminUser.daoInterface instanceof DAOInterfaceAWS) {

            // first, get the credentials manager
            Field awsCPField = DAOInterfaceAWS.class.getDeclaredField("awsCP");
            awsCPField.setAccessible(true);
            AWSCredentialsProvider awsCP = (AWSCredentialsProvider) awsCPField.get(adminUser.daoInterface);

            // get the IAM object
            final AmazonIdentityManagement iam = AmazonIdentityManagementClientBuilder.standard()
                    .withRegion(testAWSRegion).withCredentials(awsCP).build();

            // get the policy name
            Field policyNameField = DAOInterfaceAWS.class.getDeclaredField("policyName");
            policyNameField.setAccessible(true);
            String policyName = (String) policyNameField.get(adminUser.daoInterface);

            // get the policy ARN
            String policyARN = null;
            ListPoliciesResult listPoliciesResult = iam.listPolicies();
            for (Policy policy : listPoliciesResult.getPolicies()) {
                if (policy.getPolicyName().equals(policyName))
                    policyARN = policy.getArn();
            }

            // delete listed users
            ListUsersResult listUsersResult = iam.listUsers();
            for(com.amazonaws.services.identitymanagement.model.User user : listUsersResult.getUsers()) {
                String username = user.getUserName();
                String userAccessKeyID = null;

                // if the user is present also in the database
                if (usersInTheDatabase.contains(username)) {

                    // get the user access key
                    ListAccessKeysRequest listAccessKeysRequest = new ListAccessKeysRequest().withUserName(username);
                    ListAccessKeysResult listAccessKeysResult = iam.listAccessKeys(listAccessKeysRequest);
                    for (AccessKeyMetadata metadata : listAccessKeysResult.getAccessKeyMetadata())
                        userAccessKeyID = metadata.getAccessKeyId();

                    // now delete the access key
                    DeleteAccessKeyRequest deleteAccessKeyRequest = new DeleteAccessKeyRequest()
                            .withUserName(username).withAccessKeyId(userAccessKeyID);
                    iam.deleteAccessKey(deleteAccessKeyRequest);

                    // detach the policy
                    DetachUserPolicyRequest detachUserPolicyRequest = new DetachUserPolicyRequest()
                            .withUserName(username).withPolicyArn(policyARN);
                    iam.detachUserPolicy(detachUserPolicyRequest);

                    // delete the user
                    DeleteUserRequest deleteUserRequest = new DeleteUserRequest().withUserName(username);
                    iam.deleteUser(deleteUserRequest);
                }
            }

            // finally, delete IAM policy
            if (policyARN != null) {
                DeletePolicyRequest deletePolicyRequest = new DeletePolicyRequest().withPolicyArn(policyARN);
                iam.deletePolicy(deletePolicyRequest);
            }

            // now we delete the files from S3
            // get the object to interact with S3
            Field s3Field = DAOInterfaceAWS.class.getDeclaredField("s3");
            s3Field.setAccessible(true);
            AmazonS3 s3 = (AmazonS3) s3Field.get(adminUser.daoInterface);

            // get all files in the two S3 buckets
            List<S3ObjectSummary> fileInS3ToDeleteUpload = s3.listObjectsV2(testAWSUploadBucket).getObjectSummaries();
            List<S3ObjectSummary> fileInS3ToDeleteDownload = s3.listObjectsV2(testAWSDownloadBucket).getObjectSummaries();


            // for each file, delete if contained in the database
            // for each file, delete if contained in the database
            for (S3ObjectSummary os : fileInS3ToDeleteUpload) {
                String fileKey = os.getKey();
                if (filesInTheDatabase.contains(fileKey))
                    s3.deleteObject(testAWSUploadBucket, fileKey);
            }
            for (S3ObjectSummary os : fileInS3ToDeleteDownload) {
                String fileKey = os.getKey();
                if (filesInTheDatabase.contains(fileKey))
                    s3.deleteObject(testAWSDownloadBucket, fileKey);
            }
        }
        // else if this is the local interface, delete all files from the DS
        else if (adminUser.daoInterface instanceof DAOInterfaceLocal) {
            FileUtil.deleteAllFilesInDirectory(new File(uploadDirectoryDS.getAbsolutePath() + "/" + DAO.Local.toString() + "/"));
            FileUtil.deleteAllFilesInDirectory(new File(downloadDirectoryDS.getAbsolutePath() + "/" + DAO.Local.toString() + "/"));
            FileUtil.deleteAllFilesInDirectory(new File(temporaryDirectoryProxy.getAbsolutePath() + "/"));
        }
    }

    @Test
    void isUserAdmin_admin() throws Exception {

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertTrue(adminUser.daoInterface.isUserAdmin(adminUser.getName()));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void isUserAdmin_user() throws Exception {

        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertFalse(adminUser.daoInterface.isUserAdmin(aliceUser.getName()));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void addNewUser_correctAdmin() throws Exception {

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(Arrays.toString(adminUser.daoInterface.getPublicSigningKeyOfUserByName(adminUser.getName()).getEncoded()),
                Arrays.toString(adminUser.getSigningPublicKey().getEncoded()));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void addNewUser_correctUser() throws Exception {

        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(Arrays.toString(adminUser.daoInterface.getPublicSigningKeyOfUserByToken(aliceUser.getToken()).getEncoded()),
                Arrays.toString(aliceUser.getSigningPublicKey().getEncoded()));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void addNewUser_addTwice() {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addUser(alice).getReturningCode());
        assertEquals(OperationOutcomeCode.code_1, adminUser.addUser(alice).getReturningCode());
    }

    @Test
    void deleteUser_correct() throws Exception {

        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteUser(alice).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertThrows(DAOException.class, () -> adminUser.daoInterface.getPublicSigningKeyOfUserByToken(aliceUser.getToken()));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void deleteUser_notPresentUser() {

        assertEquals(OperationOutcomeCode.code_4, adminUser.deleteUser(alice).getReturningCode());
    }

    @Test
    void deleteUser_deleteTwice() {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addUser(alice).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteUser(alice).getReturningCode());
        assertEquals(OperationOutcomeCode.code_4, adminUser.deleteUser(alice).getReturningCode());
    }



    @Test
    void addNewRole_correct() throws Exception {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(1, adminUser.daoInterface.getRoleVersionNumberByName(employee));
        assertFalse(adminUser.daoInterface.getRoleTuples(adminID, employee, 0, -1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();

    }

    @Test
    void addNewRole_addTwice() {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_2, adminUser.addRole(employee).getReturningCode());
    }

    @Test
    void deleteRole_correct() throws Exception {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteRole(employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertThrows(DAOException.class, () -> adminUser.daoInterface.getPublicSigningKeyOfRoleByName(employee));
        assertThrows(DAOException.class, () -> adminUser.daoInterface.getRoleVersionNumberByName(employee));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void deleteRole_notPresentRole() {

        assertEquals(OperationOutcomeCode.code_5, adminUser.deleteRole(employee).getReturningCode());
    }

    @Test
    void deleteRole_deleteTwice() {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_5, adminUser.deleteRole(employee).getReturningCode());
    }



    @Test
    void addFile_correct() throws Exception {

        UserOutput addFileResult = adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1)));

        assertEquals(OperationOutcomeCode.code_0, addFileResult.getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(1, adminUser.daoInterface.getFileEncryptingVersionNumberByName(fileName1));
        HashSet<PermissionTuple> adminPermissionTuple = adminUser.daoInterface.getPermissionTuples(null, fileName1, null, null, 0, 1);
        assertFalse(adminPermissionTuple.isEmpty());
        for (PermissionTuple tuple : adminPermissionTuple) {
            assertEquals(tuple.getAssociatedElement(), adminID);
            assertEquals(tuple.getAssociatedFile(), fileName1);
            assertEquals(tuple.getSignerOfThisTuple(), adminID);
            assertEquals(1, (int) tuple.getEncryptingKeyVersionNumber());
        }
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void addFile_addTwice()  {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_3, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
    }



    @Test
    void deleteFile_correct() throws Exception {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteFile(fileName1).getReturningCode());
        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertThrows(DAOException.class, () -> adminUser.daoInterface.getFileEncryptingVersionNumberByName(fileName1));
        assertTrue(adminUser.daoInterface.getPermissionTuples(null, fileName1, null, null, 0, 1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void deleteFile_deleteNotPresentFile() {
        assertEquals(OperationOutcomeCode.code_6, adminUser.deleteFile(fileName1).getReturningCode());
    }

    @Test
    void deleteFile_deleteTwice()  {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteFile(fileName1).getReturningCode());
        assertEquals(OperationOutcomeCode.code_6, adminUser.deleteFile(fileName1).getReturningCode());
    }


    @Test
    void assignUserToRole_correct() throws Exception {

        addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertFalse(adminUser.daoInterface.getRoleTuples(alice, employee, 0, -1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void assignUserToRole_assignTwice() {

        addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_23, adminUser.assignUserToRole(alice, employee).getReturningCode());
    }

    @Test
    void assignUserToRole_userWithNoRoles() throws DAOException {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addUser(alice).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertTrue(adminUser.daoInterface.getRoleTuples(alice, null, 0, 1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void assignUserToRole_assignDeletedUserToRole() throws Exception {

        addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteUser(alice).getReturningCode());
        assertEquals(OperationOutcomeCode.code_55, adminUser.assignUserToRole(alice, employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertTrue(adminUser.daoInterface.getRoleTuples(alice, employee, 0, 1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void assignUserToRole_assignUserToDeletedRole() throws DAOException {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addUser(alice).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_5, adminUser.assignUserToRole(alice, employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertTrue(adminUser.daoInterface.getRoleTuples(alice, employee, 0, 1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }


    @Test
    void revokeUserFromRole_correct() throws Exception {

        addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        PublicKey roleOldPublicKey = adminUser.daoInterface.getPublicSigningKeyOfRoleByName(employee);
        adminUser.daoInterface.unlockDAOInterfaceStatus();

        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.revokeUserFromRole(alice, employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertTrue(adminUser.daoInterface.getRoleTuples(alice, employee, 0, 1).isEmpty());
        assertEquals(2, adminUser.daoInterface.getRoleVersionNumberByName(employee));
        assertNotEquals(Arrays.toString(roleOldPublicKey.getEncoded()),
                Arrays.toString(adminUser.daoInterface.getPublicSigningKeyOfRoleByName(employee).getEncoded()));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void revokeUserFromRole_revokeTwice() throws Exception {

        addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.revokeUserFromRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_26, adminUser.revokeUserFromRole(alice, employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(2, adminUser.daoInterface.getRoleVersionNumberByName(employee));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void revokeUserFromRole_revokeNotAssignedUser() throws Exception {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addUser(alice).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_26, adminUser.revokeUserFromRole(alice, employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(1, adminUser.daoInterface.getRoleVersionNumberByName(employee));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void revokeUserFromRole_revokeFromDeletedRole() throws Exception {

        addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_26, adminUser.revokeUserFromRole(alice, employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertThrows(DAOException.class, () -> adminUser.daoInterface.getRoleVersionNumberByName(employee));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void revokeUserFromRole_revokeDeletedUser() throws Exception {

        addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteUser(alice).getReturningCode());
        assertEquals(OperationOutcomeCode.code_26, adminUser.revokeUserFromRole(alice, employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(2, adminUser.daoInterface.getRoleVersionNumberByName(employee));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }


    @Test
    void assignPermissionToRoleOverFile_correct() throws DAOException {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        HashSet<PermissionTuple> permissionTuples = adminUser.daoInterface.getPermissionTuples(employee, fileName1, null, null, 0, 1);
        assertFalse(permissionTuples.isEmpty());
        for (PermissionTuple permissionTuple : permissionTuples) {
            assertEquals(employee, permissionTuple.getAssociatedElement());
            assertEquals(fileName1, permissionTuple.getAssociatedFile());
            assertEquals(adminUser.getName(), permissionTuple.getSignerOfThisTuple());
            assertEquals(1, (int) permissionTuple.getEncryptingKeyVersionNumber());
            assertEquals(1, (int) permissionTuple.getRoleVersionNumber());
            assertEquals(Permission.Read, permissionTuple.getAssociatedPermission());
            assertEquals(TupleType.FK, permissionTuple.getTupleType());
        }
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void assignPermissionToRoleOverFile_roleWithNoPermission() throws DAOException {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertTrue(adminUser.daoInterface.getPermissionTuples(employee, fileName1, null, null, 0, 1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }


    @Test
    void assignPermissionToRoleOverFile_assignTwice()  {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(Objects.requireNonNull(loadFile(filePath1)))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());

        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read).getReturningCode());
        assertEquals(OperationOutcomeCode.code_24, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read).getReturningCode());
    }

    @Test
    void assignPermissionToRoleOverFile_assignLower()  {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());

        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_16, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read).getReturningCode());
    }

    @Test
    void assignPermissionToRoleOverFile_revokeAndReAssignLower() throws DAOException {


        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());

        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.revokePermissionFromRole(employee, fileName1, Permission.Write).getReturningCode());
        adminUser.daoInterface.lockDAOInterfaceStatus();
        HashSet<PermissionTuple> permissionTuples = adminUser.daoInterface.getPermissionTuples(employee, fileName1, null, null, 0, 1);
        for (PermissionTuple permissionTuple : permissionTuples) {
            assertEquals(employee, permissionTuple.getAssociatedElement());
            assertEquals(fileName1, permissionTuple.getAssociatedFile());
            assertEquals(Permission.Read, permissionTuple.getAssociatedPermission());
        }
        adminUser.daoInterface.unlockDAOInterfaceStatus();

        assertEquals(OperationOutcomeCode.code_0, adminUser.revokePermissionFromRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertTrue(adminUser.daoInterface.getPermissionTuples(employee, fileName1, null, null, 0, 1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();

        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertFalse(adminUser.daoInterface.getPermissionTuples(employee, fileName1, null, null, 0, 1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void assignPermissionToRoleOverFile_assignDeletedRole()  {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_5, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
    }

    @Test
    void assignPermissionToRoleOverFile_assignDeletedFile()  {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteFile(fileName1).getReturningCode());
        assertEquals(OperationOutcomeCode.code_6, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
    }


    @Test
    void revokePermissionFromRole_correct() throws Exception {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.revokePermissionFromRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());

        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertTrue(adminUser.daoInterface.getPermissionTuples(employee, fileName1, null, null, 0, 1).isEmpty());
        assertEquals(2, adminUser.daoInterface.getFileEncryptingVersionNumberByName(fileName1));
        HashSet<PermissionTuple> adminTuples = adminUser.daoInterface.getPermissionTuples(null, fileName1, null, null, 0, 1);
        assertFalse(adminTuples.isEmpty());
        for (PermissionTuple tuple : adminTuples) {
            assertEquals(adminID, tuple.getAssociatedElement());
            assertEquals(fileName1, tuple.getAssociatedFile());
            assertEquals(1, (int) tuple.getRoleVersionNumber());
            assertEquals(Permission.Read_and_Write, tuple.getAssociatedPermission());
        }
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void revokePermissionFromRole_noPermissionGiven() throws Exception {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.revokePermissionFromRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        adminUser.daoInterface.lockDAOInterfaceStatus();
        HashSet<PermissionTuple> tuples = adminUser.daoInterface.getPermissionTuples(employee, fileName1, null, null, 0, 1);
        assertTrue(tuples.isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }

    @Test
    void revokePermissionFromRole_revokeTwice()  {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.revokePermissionFromRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_27, adminUser.revokePermissionFromRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
    }

    @Test
    void revokePermissionFromRole_revokeDeletedRole()  {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_27, adminUser.revokePermissionFromRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
    }


    @Test
    void revokePermissionFromRole_revokeDeletedFile()  {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.deleteFile(fileName1).getReturningCode());
        assertEquals(OperationOutcomeCode.code_27, adminUser.revokePermissionFromRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
    }


    @Test
    void readFile_correctAdminDefaultPermission() throws Exception {

        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        InputStream decryptedFile = (InputStream) adminUser.readFile(fileName1).getRetuningValue();
        assertNotNull(decryptedFile);

        InputStream originalFile = Thread.currentThread().getContextClassLoader().
                getResourceAsStream(filePath1);
        assertNotNull(originalFile);
        assertEquals(Arrays.toString(originalFile.readAllBytes()), Arrays.toString(decryptedFile.readAllBytes()));
    }

    @Test
    void readFile_correctRoleGivenPermission() throws Exception {

        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read).getReturningCode());
        InputStream decryptedFile = (InputStream) aliceUser.readFile(fileName1).getRetuningValue();
        assertNotNull(decryptedFile);

        InputStream originalFile = Thread.currentThread().getContextClassLoader().
                getResourceAsStream(filePath1);
        assertNotNull(originalFile);

        assertEquals(Arrays.toString(originalFile.readAllBytes()), Arrays.toString(decryptedFile.readAllBytes()));
    }

    @Test
    void readFile_roleNotGivenPermission() {

        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());

        InputStream decryptedFile = (InputStream) aliceUser.readFile(fileName1).getRetuningValue();
        assertNull(decryptedFile);
    }

    @Test
    void readFile_roleWithRevokedPermission() {

        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.revokePermissionFromRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());

        InputStream decryptedFile = (InputStream) aliceUser.readFile(fileName1).getRetuningValue();
        assertNull(decryptedFile);
    }


    @Test
    void writeFile_correct() throws Exception {

        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, aliceUser.writeFile(fileName1, Objects.requireNonNull(loadFile(filePath2))).getReturningCode());

        InputStream decryptedFileByUser = (InputStream) aliceUser.readFile(fileName1).getRetuningValue();
        assertNotNull(decryptedFileByUser);
        InputStream originalStream = Thread.currentThread().getContextClassLoader().
                getResourceAsStream(filePath2);
        assertNotNull(originalStream);
        assertEquals(Arrays.toString(originalStream.readAllBytes()), Arrays.toString(decryptedFileByUser.readAllBytes()));
    }

    @Test
    void writeFile_writeANotExistingFile() {

        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0,  adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0,  adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0,  adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0,  adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_6, aliceUser.writeFile(fileName2, Objects.requireNonNull(loadFile(filePath2))).getReturningCode());
    }

    @Test
    void writeFile_writeWithoutPermission() {

        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        assertEquals(OperationOutcomeCode.code_0, adminUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read).getReturningCode());
        assertEquals(OperationOutcomeCode.code_15, aliceUser.writeFile(fileName1, Objects.requireNonNull(loadFile(filePath2))).getReturningCode());
    }


    /**
     * SCENARIO 1:
     * 1.  add users 1 and 2
     * 2.  add roles 1 and 2
     * 3.  user 1 upload file 1
     * 4.  assert that user 1 and 2 cannot access file while admin can
     * 5.  assign user1 to role1 and user2 to role2
     * 6.  give permission Read_and_Write to role 1 over file 1
     * 7.  assert that user 2 cannot access file while user 1 can
     * 8.  revoke permission Read_and_Write from role 1 over file 1
     * 9.  assert that user 1 and 2 cannot access file while admin can
     * 10. assert that tuples are correctly formed
     * @throws Exception general exception
     */
    @Test
    void scenario1 () throws Exception {

        // ===== STEP 1 ===== add users 1 and 2
        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        User bobUser = addUserAndInitializeKey(bob, bobConfigDAO, bobEncryptingKeys, bobSigningKeys);


        // ===== STEP 2 ===== add roles 1 and 2
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(researcher).getReturningCode());


        // ===== STEP 3 ===== user 1 upload file 1
        assertEquals(OperationOutcomeCode.code_0, aliceUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());


        // ===== STEP 4 ===== assert that user 1 and 2 cannot access file while admin can
        InputStream originalFileStream = Thread.currentThread().getContextClassLoader().
                getResourceAsStream(filePath1);
        assertNotNull(originalFileStream);

        assertEquals(OperationOutcomeCode.code_6,(aliceUser.readFile(fileName1)).getReturningCode());
        assertEquals(OperationOutcomeCode.code_6,(bobUser.readFile(fileName1)).getReturningCode());
        InputStream decryptedFileFromAdmin = (InputStream) adminUser.readFile(fileName1).getRetuningValue();
        assertNotNull(decryptedFileFromAdmin);
        assertEquals(Arrays.toString(originalFileStream.readAllBytes()), Arrays.toString(decryptedFileFromAdmin.readAllBytes()));


        // ===== STEP 5 ===== assign user1 to role1 and user2 to role2
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(bob, researcher).getReturningCode());


        // ===== STEP 6 ===== give permission Read_and_Write to role 1 over file 1
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());


        // ===== STEP 7 ===== assert that user 2 cannot access file while user 1 can
        originalFileStream = Thread.currentThread().getContextClassLoader().
                getResourceAsStream(filePath1);
        assertNotNull(originalFileStream);

        assertEquals(OperationOutcomeCode.code_6,(bobUser.readFile(fileName1)).getReturningCode());
        InputStream decryptedFileFromUser = (InputStream) aliceUser.readFile(fileName1).getRetuningValue();
        assertNotNull(decryptedFileFromUser);
        assertEquals(Arrays.toString(originalFileStream.readAllBytes()), Arrays.toString(decryptedFileFromUser.readAllBytes()));


        // ===== STEP 8 ===== revoke permission Read_and_Write from role 1 over file 1
        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(1, adminUser.daoInterface.getFileEncryptingVersionNumberByName(fileName1));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
        adminUser.revokePermissionFromRole(employee, fileName1, Permission.Read_and_Write);
        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(2, adminUser.daoInterface.getFileEncryptingVersionNumberByName(fileName1));
        adminUser.daoInterface.unlockDAOInterfaceStatus();


        // ===== STEP 9 ===== assert that user 1 and 2 cannot access file while admin can
        originalFileStream = Thread.currentThread().getContextClassLoader().
                getResourceAsStream(filePath1);
        assertNotNull(originalFileStream);

        assertEquals(OperationOutcomeCode.code_6,(aliceUser.readFile(fileName1)).getReturningCode());
        assertEquals(OperationOutcomeCode.code_6,(bobUser.readFile(fileName1)).getReturningCode());
        decryptedFileFromAdmin = (InputStream) adminUser.readFile(fileName1).getRetuningValue();
        assertNotNull(decryptedFileFromAdmin);
        assertEquals(Arrays.toString(originalFileStream.readAllBytes()), Arrays.toString(decryptedFileFromAdmin.readAllBytes()));


        // ===== STEP 10 ===== assert that tuples are correctly formed
        // that means that:
        // - admin should have 3 role tuples (to himself, role 1 and role 2) and 2 permissionTuple (role admin to file1 with version number 1 and 2)
        // - user1 should have 1 role tuples (to role 1) and 0 permission tuples
        // - user2 should have 1 role tuples (to role 2) and 0 permission tuples
        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals(3, adminUser.daoInterface.getRoleTuples(adminID, null,0, 10).size());
        HashSet<PermissionTuple> adminPermissionTuples = adminUser.daoInterface.getPermissionTuples(adminID, null, null, null, 0, 10);
        assertEquals(2, adminPermissionTuples.size());
        for (PermissionTuple tuple : adminPermissionTuples) {
            assertEquals(fileName1, tuple.getAssociatedFile());
            assertEquals(adminUser.daoInterface.getRoleVersionNumberByName(adminID), (int) tuple.getRoleVersionNumber());
            assertTrue(
                    adminUser.daoInterface.getFileEncryptingVersionNumberByName(fileName1) == 1 ||
                            adminUser.daoInterface.getFileEncryptingVersionNumberByName(fileName1) == 2);

        }

        HashSet<RoleTuple> user1RolesTuples = adminUser.daoInterface.getRoleTuples(alice, null, 0, 1);
        assertEquals(1, user1RolesTuples.size());
        assertTrue(adminUser.daoInterface.getPermissionTuples(alice, null, null, null, 0, 1).isEmpty());


        HashSet<RoleTuple> user2RolesTuples = adminUser.daoInterface.getRoleTuples(bob, null, 0, 1);
        assertEquals(1, user2RolesTuples.size());
        assertTrue(adminUser.daoInterface.getPermissionTuples(bob, null, null, null, 0, 1).isEmpty());
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }


    /**
     * SCENARIO 2:
     * 1.  add users 1 and 2 and 3
     * 2.  add roles 1 and 3
     * 3.  user 1 upload file 1
     * 4.  assign user 1 and user 2 to role1 and user 3 to role 3
     * 5.  give permission Read_and_Write to role 1 and 3 over file 1
     * 6.  user3 read file 1 and SAVE content
     * 7.  revoke user 2 from role 1
     * 8.  assert that
     *          the file version number in the FILE table is 2 and in FILETUPLE is 1
     *          the role 1 version number is 2 and the role 3 version number is 1
     * 9. user 3 write file 1 WITHOUT changes and assert that the version number in the file tuple is updated too
     * 10. user 1 read file 1 and SAVE content
     * 11. assert that
     *          the file version number in the FILE table is 2 and in FILETUPLE is 2
     *          the two files (step 6 and 11) decrypted are equal but encrypted are different (thus keyed with different keys)
     * @throws Exception general exception
     */
    @Test
    void scenario2 () throws Exception {

        // ===== STEP 1 ===== add users 1 and 2 and 3
        User aliceUser = addUserAndInitializeKey(alice, aliceConfigDAO, aliceEncryptingKeys, aliceSigningKeys);
        User bobUser = addUserAndInitializeKey(bob, bobConfigDAO, bobEncryptingKeys, bobSigningKeys);
        addUserAndInitializeKey(carl, carlConfigDAO, carlEncryptingKeys, carlSigningKeys);


        // ===== STEP 2 ===== add roles 1 and 3
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.addRole(researcher).getReturningCode());


        // ===== STEP 3 ===== user 1 upload file 1
        assertEquals(OperationOutcomeCode.code_0, aliceUser.addFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());


        // ===== STEP 4 ===== assign user 1 and user 2 to role1 and user 3 to role 3
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(alice, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(carl, employee).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignUserToRole(bob, researcher).getReturningCode());


        // ===== STEP 5 ===== give permission Read_and_Write to role 1 and 3 over file 1
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(employee, fileName1, Permission.Read_and_Write).getReturningCode());
        assertEquals(OperationOutcomeCode.code_0, adminUser.assignPermissionToRole(researcher, fileName1, Permission.Read_and_Write).getReturningCode());


        // ===== STEP 6 ===== user3 read file 1 and SAVE content
        InputStream decryptedFileFromUser = (InputStream) bobUser.readFile(fileName1).getRetuningValue();
        assertNotNull(decryptedFileFromUser);


        // ===== STEP 7 ===== revoke user 2 from role 1
        assertEquals(OperationOutcomeCode.code_0, adminUser.revokeUserFromRole(carl, employee).getReturningCode());


        // ===== STEP 8 ===== assert that
        //                          the file version number in the FILE table is 2 and in FILETUPLE is 1
        //                          the role 1 version number is 2 and the role 3 version number is 1
        adminUser.daoInterface.lockDAOInterfaceStatus();
        HashSet<FileTuple> fileTuples = adminUser.daoInterface.getFileTuples(fileName1);
        FileTuple fileTuple = null;
        for (FileTuple tfileTuple : fileTuples) fileTuple = tfileTuple;
        assert fileTuple != null;
        assertEquals( 2, adminUser.daoInterface.getFileEncryptingVersionNumberByName(fileName1));
        assertEquals( 1, (int)  fileTuple.getDecryptingKeyVersionNumber());
        assertEquals( 2, adminUser.daoInterface.getRoleVersionNumberByName(employee));
        assertEquals( 1, adminUser.daoInterface.getRoleVersionNumberByName(researcher));
        adminUser.daoInterface.unlockDAOInterfaceStatus();

        // ===== STEP 9 ===== user 3 write file 1 WITHOUT changes and assert that
        // the version number in the file tuple is updated too
        InputStream file1Stream = Thread.currentThread().getContextClassLoader().
                getResourceAsStream(filePath1);
        assertNotNull(file1Stream);

        assertEquals(OperationOutcomeCode.code_0, bobUser.writeFile(fileName1, Objects.requireNonNull(loadFile(filePath1))).getReturningCode());
        adminUser.daoInterface.lockDAOInterfaceStatus();
        fileTuples = adminUser.daoInterface.getFileTuples(fileName1);
        for (FileTuple tfileTuple : fileTuples) fileTuple = tfileTuple;
        assertNotNull(fileTuple);
        assertEquals( 2, (int) fileTuple.getDecryptingKeyVersionNumber());
        adminUser.daoInterface.unlockDAOInterfaceStatus();

        // ===== STEP 10 ===== user 1 read file 1 and SAVE content
        InputStream decryptedFileFromUserSecondTime = (InputStream) aliceUser.readFile(fileName1).getRetuningValue();
        assertNotNull(decryptedFileFromUserSecondTime);


        // ===== STEP 11 ===== assert that
        //                      the file version number in the FILE table is 2 and in FILETUPLE is 2
        //                      the two files (step 6 and 11) are different (thus keyed with different keys)
        adminUser.daoInterface.lockDAOInterfaceStatus();
        assertEquals( 2, adminUser.daoInterface.getFileEncryptingVersionNumberByName(fileName1));
        assertEquals( 2, (int)  fileTuple.getDecryptingKeyVersionNumber());
        assertEquals(Arrays.toString(decryptedFileFromUser.readAllBytes()), Arrays.toString(decryptedFileFromUserSecondTime.readAllBytes()));
        adminUser.daoInterface.unlockDAOInterfaceStatus();
    }



    private static InputStream loadFile (String filePath) {

        URL res1 = Thread.currentThread().getContextClassLoader().
                getResource(filePath);
        assertNotNull(res1);
        try {

            java.io.File file = Paths.get(res1.toURI()).toFile();

            return new FileInputStream(file);
        } catch (URISyntaxException | FileNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }


    private static void setupDAOConfig() {

        // this is the common part
        if (adminConfigDAO == null) {
            adminConfigDAO = new HashMap<>();
            adminConfigDAO.put(Const.DAOInterfaceParameters.kUsernameInCryptoAC, adminID.getBytes());
            adminConfigDAO.put(kEncryptingPublicKey, adminsEncryptingKeys.getPublic().getEncoded());
            adminConfigDAO.put(kEncryptingPrivateKey, adminsEncryptingKeys.getPrivate().getEncoded());
            adminConfigDAO.put(kSigningPublicKey, adminSigningKeys.getPublic().getEncoded());
            adminConfigDAO.put(kSigningPrivateKey, adminSigningKeys.getPrivate().getEncoded());
            adminConfigDAO.put(kDAO, DAO_PROVIDER_BEING_USED.toString().getBytes());
        }
        if (aliceConfigDAO == null) {
            aliceConfigDAO = new HashMap<>();
            aliceConfigDAO.put(Const.DAOInterfaceParameters.kUsernameInCryptoAC, alice.getBytes());
            aliceConfigDAO.put(kEncryptingPublicKey, aliceEncryptingKeys.getPublic().getEncoded());
            aliceConfigDAO.put(kEncryptingPrivateKey, aliceEncryptingKeys.getPrivate().getEncoded());
            aliceConfigDAO.put(kSigningPublicKey, aliceSigningKeys.getPublic().getEncoded());
            aliceConfigDAO.put(kSigningPrivateKey, aliceSigningKeys.getPrivate().getEncoded());
            aliceConfigDAO.put(kDAO, DAO_PROVIDER_BEING_USED.toString().getBytes());
        }
        if (bobConfigDAO == null) {
            bobConfigDAO = new HashMap<>();
            bobConfigDAO.put(Const.DAOInterfaceParameters.kUsernameInCryptoAC, bob.getBytes());
            bobConfigDAO.put(kEncryptingPublicKey, bobEncryptingKeys.getPublic().getEncoded());
            bobConfigDAO.put(kEncryptingPrivateKey, bobEncryptingKeys.getPrivate().getEncoded());
            bobConfigDAO.put(kSigningPublicKey, bobSigningKeys.getPublic().getEncoded());
            bobConfigDAO.put(kSigningPrivateKey, bobSigningKeys.getPrivate().getEncoded());
        }
        if (carlConfigDAO == null) {
            carlConfigDAO = new HashMap<>();
            carlConfigDAO.put(Const.DAOInterfaceParameters.kUsernameInCryptoAC, carl.getBytes());
            carlConfigDAO.put(kEncryptingPublicKey, carlEncryptingKeys.getPublic().getEncoded());
            carlConfigDAO.put(kEncryptingPrivateKey, carlEncryptingKeys.getPrivate().getEncoded());
            carlConfigDAO.put(kSigningPublicKey, carlSigningKeys.getPublic().getEncoded());
            carlConfigDAO.put(kSigningPrivateKey, carlSigningKeys.getPrivate().getEncoded());
        }


        if (DAO_PROVIDER_BEING_USED == DAO.AWS) {

            adminConfigDAO.put(kMySQLDatabasePassword, testAWSDatabasePassword.getBytes());
            adminConfigDAO.put(kMySQLDatabaseURL, testAWSDatabase.getBytes());
            adminConfigDAO.put(kMySQLDatabasePort, testAWSDatabasePort.getBytes());

            adminConfigDAO.put(kAWSS3BucketDownload, testAWSDownloadBucket.getBytes());
            adminConfigDAO.put(kAWSS3BucketUpload, testAWSUploadBucket.getBytes());
            adminConfigDAO.put(kAWSAccessKey, testAWSAccessKey.getBytes());
            adminConfigDAO.put(kAWSSecretKey, testAWSSecretKey.getBytes());
            adminConfigDAO.put(kAWSS3Region, testAWSRegion.getBytes());



            aliceConfigDAO.put(kMySQLDatabasePassword, alice.getBytes());
            aliceConfigDAO.put(kMySQLDatabaseURL, testAWSDatabase.getBytes());
            aliceConfigDAO.put(kMySQLDatabasePort, testAWSDatabasePort.getBytes());

            aliceConfigDAO.put(kAWSS3BucketDownload, testAWSDownloadBucket.getBytes());
            aliceConfigDAO.put(kAWSS3BucketUpload, testAWSUploadBucket.getBytes());
            aliceConfigDAO.put(kAWSS3Region, testAWSRegion.getBytes());



            bobConfigDAO.put(kMySQLDatabasePassword, bob.getBytes());
            bobConfigDAO.put(kMySQLDatabaseURL, testAWSDatabase.getBytes());
            bobConfigDAO.put(kMySQLDatabasePort, testAWSDatabasePort.getBytes());

            bobConfigDAO.put(kAWSS3BucketDownload, testAWSDownloadBucket.getBytes());
            bobConfigDAO.put(kAWSS3BucketUpload, testAWSUploadBucket.getBytes());
            bobConfigDAO.put(kAWSS3Region, testAWSRegion.getBytes());



            carlConfigDAO.put(kMySQLDatabasePassword, carl.getBytes());
            carlConfigDAO.put(kMySQLDatabaseURL, testAWSDatabase.getBytes());
            carlConfigDAO.put(kMySQLDatabasePort, testAWSDatabasePort.getBytes());

            carlConfigDAO.put(kAWSS3BucketDownload, testAWSDownloadBucket.getBytes());
            carlConfigDAO.put(kAWSS3BucketUpload, testAWSUploadBucket.getBytes());
            carlConfigDAO.put(kAWSS3Region, testAWSRegion.getBytes());

        }
        else if (DAO_PROVIDER_BEING_USED == DAO.Mock) {

            adminConfigDAO.put(kMySQLDatabasePassword, testMockDatabasePassword.getBytes());
            adminConfigDAO.put(kMySQLDatabaseURL, testMockDatabase.getBytes());
            adminConfigDAO.put(kMySQLDatabasePort, testMockDatabasePort.getBytes());

            aliceConfigDAO.put(kMySQLDatabasePassword, alice.getBytes());
            aliceConfigDAO.put(kMySQLDatabaseURL, testMockDatabase.getBytes());
            aliceConfigDAO.put(kMySQLDatabasePort, testMockDatabasePort.getBytes());

            bobConfigDAO.put(kMySQLDatabasePassword, bob.getBytes());
            bobConfigDAO.put(kMySQLDatabaseURL, testMockDatabase.getBytes());
            bobConfigDAO.put(kMySQLDatabasePort, testMockDatabasePort.getBytes());

            carlConfigDAO.put(kMySQLDatabasePassword, carl.getBytes());
            carlConfigDAO.put(kMySQLDatabaseURL, testMockDatabase.getBytes());
            carlConfigDAO.put(kMySQLDatabasePort, testMockDatabasePort.getBytes());
        }
        else if (DAO_PROVIDER_BEING_USED == DAO.Local) {

            adminConfigDAO.put(kMySQLDatabasePassword, testLocalDatabasePassword.getBytes());
            adminConfigDAO.put(kMySQLDatabaseURL, testLocalDatabase.getBytes());
            adminConfigDAO.put(kMySQLDatabasePort, testLocalDatabasePort.getBytes());
            adminConfigDAO.put(kLocalRMURL, testLocalRM.getBytes());
            adminConfigDAO.put(kLocalRMPort, testLocalRMPort.getBytes());
            adminConfigDAO.put(kLocalDSURL, testLocalDS.getBytes());
            adminConfigDAO.put(kLocalDSPort, testLocalDSPort.getBytes());

            aliceConfigDAO.put(kMySQLDatabasePassword, alice.getBytes());
            aliceConfigDAO.put(kMySQLDatabaseURL, testLocalDatabase.getBytes());
            aliceConfigDAO.put(kMySQLDatabasePort, testLocalDatabasePort.getBytes());
            aliceConfigDAO.put(kLocalRMURL, testLocalRM.getBytes());
            aliceConfigDAO.put(kLocalRMPort, testLocalRMPort.getBytes());
            aliceConfigDAO.put(kLocalDSURL, testLocalDS.getBytes());
            aliceConfigDAO.put(kLocalDSPort, testLocalDSPort.getBytes());

            bobConfigDAO.put(kMySQLDatabasePassword, bob.getBytes());
            bobConfigDAO.put(kMySQLDatabaseURL, testLocalDatabase.getBytes());
            bobConfigDAO.put(kMySQLDatabasePort, testLocalDatabasePort.getBytes());
            bobConfigDAO.put(kLocalRMURL, testLocalRM.getBytes());
            bobConfigDAO.put(kLocalRMPort, testLocalRMPort.getBytes());
            bobConfigDAO.put(kLocalDSURL, testLocalDS.getBytes());
            bobConfigDAO.put(kLocalDSPort, testLocalDSPort.getBytes());

            carlConfigDAO.put(kMySQLDatabasePassword, carl.getBytes());
            carlConfigDAO.put(kMySQLDatabaseURL, testLocalDatabase.getBytes());
            carlConfigDAO.put(kMySQLDatabasePort, testLocalDatabasePort.getBytes());
            carlConfigDAO.put(kLocalRMURL, testLocalRM.getBytes());
            carlConfigDAO.put(kLocalRMPort, testLocalRMPort.getBytes());
            carlConfigDAO.put(kLocalDSURL, testLocalDS.getBytes());
            carlConfigDAO.put(kLocalDSPort, testLocalDSPort.getBytes());
        }

        adminUser = new User(App.admin, true, adminsEncryptingKeys, adminSigningKeys);
        adminUser.daoInterface = DAOInterface.getInstance(DAO_PROVIDER_BEING_USED,
                DAOInterfaceParameters.getInstance(DAO_PROVIDER_BEING_USED, adminConfigDAO));
    }




    private User addUserAndInitializeKey(String name, HashMap<String, byte[]> configDAO, KeyPair encryptingKeyPair, KeyPair signingKeyPair) {

        User user = new User(name, false, encryptingKeyPair, signingKeyPair);
        UserOutput addUserResult = adminUser.addUser(name);
        assertEquals(OperationOutcomeCode.code_0, addUserResult.getReturningCode());

        HashMap<String, Object> userCredentials = (HashMap<String, Object>) addUserResult.getRetuningValue();

        if (DAO_PROVIDER_BEING_USED == DAO.AWS) {

            configDAO.put(kAWSAccessKey, ((String) userCredentials.get(kAWSAccessKey)).getBytes());
            configDAO.put(kAWSSecretKey, ((String) userCredentials.get(kAWSSecretKey)).getBytes());
            configDAO.put(kMySQLDatabasePassword, ((String) userCredentials.get(kMySQLDatabasePassword)).getBytes());


            // wait some seconds, sometime AWS is slow at processing new users
            try {
                sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        else if (DAO_PROVIDER_BEING_USED == DAO.Mock) {
            configDAO.put(kMySQLDatabasePassword, ((String) userCredentials.get(kMySQLDatabasePassword)).getBytes());
        }
        else if (DAO_PROVIDER_BEING_USED == DAO.Local) {
            configDAO.put(kMySQLDatabasePassword, ((String) userCredentials.get(kMySQLDatabasePassword)).getBytes());
        }

        user.daoInterface = DAOInterface.getInstance(DAO_PROVIDER_BEING_USED, DAOInterfaceParameters.getInstance(DAO_PROVIDER_BEING_USED, configDAO));
        assertEquals(OperationOutcomeCode.code_0, user.initializeUser().getReturningCode());
        return user;
    }
}


