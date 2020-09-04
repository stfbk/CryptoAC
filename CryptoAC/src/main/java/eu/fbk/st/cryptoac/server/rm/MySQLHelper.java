package eu.fbk.st.cryptoac.server.rm;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.core.element.File;
import eu.fbk.st.cryptoac.core.tuple.FileTuple;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQL;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQLParameters;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import org.jetbrains.annotations.NotNull;

import java.io.InputStream;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

import static eu.fbk.st.cryptoac.core.element.CryptoACElementStatus.operational;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;

public class MySQLHelper extends DAOInterfaceMySQL {

    // variables for logging
    public static final String addFileToTable = "addFileToTable";

    /**
     * Constructor with parameters.
     * @param DAOInterfaceMySQLParameters the parameters needed to configure the connection toward the database.
     *                                    The parameters should contain the username and password for connecting
     *                                    to the database, the database url and the database port
     */
    protected MySQLHelper(DAOInterfaceMySQLParameters DAOInterfaceMySQLParameters) {
        super(DAOInterfaceMySQLParameters);
    }

    /**
     * This method creates a new instance of this class with the given parameters.
     * @param daoInterfaceMySQLParameters initialization parameters (see class constructor)
     */
    public static MySQLHelper getInstance(DAOInterfaceMySQLParameters daoInterfaceMySQLParameters) {
        return new MySQLHelper(daoInterfaceMySQLParameters);
    }

    /**
     * This method is not used and is therefore not implemented.
     * @param newFile            the new file
     * @param newFileTuple       the new file tuple
     * @param newPermissionTuple the new permission tuple giving the admin access to the file
     */
    @Override
    public void addFile(@NotNull File newFile, @NotNull FileTuple newFileTuple, @NotNull PermissionTuple newPermissionTuple) {
    }

    /**
     * This method is not used and is therefore not implemented.
     * @param fileName the name of the file
     */
    @Override
    public void deleteFileAndFileTuple(@NotNull String fileName) {

    }

    /**
     * This method is not used and is therefore not implemented.
     * @param updatedFile      the updated file
     * @param updatedFileTuple the updated file tuple
     */
    @Override
    public void updateFile(File updatedFile, FileTuple updatedFileTuple) {

    }

    /**
     * This method is not used and is therefore not implemented.
     * @param fileName the name of the file
     * @return null
     */
    @Override
    public InputStream downloadFile(String fileName) {
        return null;
    }

    /**
     * Utility method to add a file object to the table in the metadata storage
     * @param fileToAdd the file to add
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addFileToTable(File fileToAdd) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + addFileToTable + ")]: ",
                "adding a new file in the files table:  ", fileToAdd.toString());

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // this is an array of roles to insert in the database; we only have one role, though
        ArrayList<ArrayList<Object>> filesToInsert = new ArrayList<>();

        ArrayList<Object> fileToInsert = new ArrayList<>();
        fileToInsert.add(fileToAdd.getName());
        fileToInsert.add(fileToAdd.getToken());
        fileToInsert.add(fileToAdd.getEncryptingKeyVersionNumber());
        fileToInsert.add(operational.getValue());

        filesToInsert.add(fileToInsert);

        try (
                PreparedStatement insertFileStatement = createInsertStatement(filesTable, filesToInsert)
        ) {

            int affectedRowCountFile = insertFileStatement.executeUpdate();

            if (affectedRowCountFile != 1)
                    returningCode = code_3;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addFileToTable, exceptionThrown);
    }
}
