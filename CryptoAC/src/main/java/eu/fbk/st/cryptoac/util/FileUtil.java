package eu.fbk.st.cryptoac.util;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import org.eclipse.jetty.http.HttpStatus;

import java.io.*;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.FileSystemException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.UUID;

import static eu.fbk.st.cryptoac.App.downloadDirectoryDS;
import static eu.fbk.st.cryptoac.App.uploadDirectoryDS;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.code_6;

/**
 * This is a general purpose utility class for interacting with CryptoAC file system (not the DAO).
 */
public class FileUtil {

    // variables for logging
    private static final String className = "FileUtil";
    private static final String saveFileOnFileSystem = "saveFileOnFileSystem";

    /**
     * When saving a new file but another file already exists with the same name:
     * * OVERWRITE: overwrite the previous file. If no previous file is found, throw exception
     * * APPEND_NUMBER: modify the name of the new file by appending a number at the end
     * * DO_NOTHING: do not save the new file, keep the previous one
     * * THROW_EXCEPTION: throw exception
     */
    public enum SaveMode {
        OVERWRITE, APPEND_NUMBER, DO_NOTHING, THROW_EXCEPTION
    }


    /**
     * This method saves the content in the given stream as a byte array in a file.
     * @param pathOfFile path of where to save the content of the input stream
     * @param contentToSave the content to save
     * @param behaviourFlag flag for behaviour if file already exists
     * @return the file object pointing to the saved content
     * @throws FileAlreadyExistsException if the file already exists and the save mode flag was "THROW_EXCEPTION"
     * @throws FileSystemException if there were exceptions while writing the content of the file in the file system
     */
    public static File saveFileOnFileSystem(String pathOfFile, InputStream contentToSave, SaveMode behaviourFlag)
            throws IOException {

        App.logger.info("[{}{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ", "saving file ", pathOfFile);
        OperationOutcomeCode operationOutcomeCode;

        // the returning value (default value is the given path)
        String newFilePath = pathOfFile;
        String temporaryFilePath = null;

        File newFile = new File(newFilePath);

        boolean doNotWrite = false;

        // if there exists another file with the same name
        if (newFile.exists()) {

            // switch depending on the behaviour flag
            switch (behaviourFlag) {

                case OVERWRITE:


                    temporaryFilePath = getFileNameAppendNumber(newFile);

                    // first we move the old file. Then, we write the new file. If
                    // everything is ok, delete the old file. Otherwise, rename it back.
                    if (!newFile.renameTo(new File(temporaryFilePath))) {
                            App.logger.error("[{}{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ",
                                    "error while renaming old version of file ", newFilePath);
                        throw new IOException("error while renaming old version of file" + newFilePath);
                    }

                case APPEND_NUMBER:

                    newFilePath = getFileNameAppendNumber(newFile);

                    App.logger.info("[{}{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ",
                            "file already existed. Behaviour is to append number, so the file name was modified to ",
                            newFilePath);
                    break;


                case DO_NOTHING:

                    doNotWrite = true;
                    break;

                case THROW_EXCEPTION:

                    throw new FileAlreadyExistsException("file already exists" + newFile.getAbsolutePath());

                default:

                    doNotWrite = true;
                    App.logger.error("[{}{}{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ",
                            "given wrong flag ", behaviourFlag,  ". The file was not saved");
            }
        }
        else if (behaviourFlag == SaveMode.OVERWRITE)
            throw new FileNotFoundException ("mode was overwrite but file " + newFile.getAbsolutePath() + "does not exist");

        if (!doNotWrite) {

            boolean successfullyCreatedDirectories;

            // create the parent directories, if they do not exist
            if (!newFile.getParentFile().exists())
                successfullyCreatedDirectories = newFile.getParentFile().mkdirs();
            else
                successfullyCreatedDirectories = true;


            if (successfullyCreatedDirectories) {

                if (newFile.createNewFile()) {

                    FileOutputStream outputStreamForFile = new FileOutputStream(newFile);
                    byte[] buffer = new byte[8 * 1024];
                    int bytesRead;

                    // while there are bytes to write
                    while ((bytesRead = contentToSave.read(buffer)) != -1) {
                        outputStreamForFile.write(buffer, 0, bytesRead);
                    }

                    outputStreamForFile.flush();
                    outputStreamForFile.close();
                    contentToSave.close();

                    // if so, we have to delete the file we moved
                    if (behaviourFlag == SaveMode.OVERWRITE) {
                        if (!new File(temporaryFilePath).delete()) {
                            operationOutcomeCode = OperationOutcomeCode.code_37;
                            IOException e = new IOException("was not able to delete the already existing file: "
                                    + newFile.getAbsolutePath() + ", now renamed to as " + temporaryFilePath);
                            App.logger.error("[{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ",
                                    operationOutcomeCode.toString() + " (" + e.getMessage() + ")");
                            throw e;
                            // TODO what to do? we have a random file to delete sooner or later
                        }
                        else
                            App.logger.info("[{}{}{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ", "file ",
                                    newFilePath, " already existed. Behaviour is to overwrite, so the old file was deleted");
                    }
                }
                // if there was an error creating the file
                else {

                    operationOutcomeCode = OperationOutcomeCode.code_37;

                    // if so, we have to rename back the file we moved
                    if (behaviourFlag == SaveMode.OVERWRITE) {

                        App.logger.error("[{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ",
                                "was not able to create the new file; trying to rollback to the old version");

                        if (!new File(temporaryFilePath).renameTo(new File(newFilePath))) {
                            IOException e = new IOException("error while renaming old version of file" + newFilePath +
                                    ", contact the system administrator");
                            App.logger.error("[{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ",
                                    operationOutcomeCode.toString() + " (" +  e.getMessage() + ")");
                            // TODO what to do? now at least we preserved the old file, still it has the wrong name
                        }
                        else {
                            App.logger.info("[{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ",
                                    "successfully made rollback to the old version");
                        }
                    }
                    else {
                        FileSystemException e = new FileSystemException("was not able to create the new file to save: "
                                + newFilePath);
                        App.logger.error("[{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ",
                                operationOutcomeCode.toString() + " (" +  e.getMessage() + ")");
                        throw e;
                    }


                }
            }
            // if there was an error while creating the parent directories of the file
            else {

                operationOutcomeCode = OperationOutcomeCode.code_73;
                FileSystemException e = new FileSystemException("was not able to create the parent " +
                        "directories of the file to save: " + newFilePath);
                App.logger.error("[{}{}{} ", className, " (" + saveFileOnFileSystem + ")]: ",
                        operationOutcomeCode.toString() + " (" +  e.getMessage() + ")");
                throw e;
            }
        }

        return new File(newFilePath);
    }

    /**
     * delete the given file from the file system
     * @param fileToDelete the file to delete
     * @throws IOException if the delete method of the File class returned false
     */
    public static void deleteFileFromFileSystem(File fileToDelete) throws IOException {

        if (!fileToDelete.delete())
            throw new IOException("error while deleting the file: " + fileToDelete.getAbsolutePath());
    }

    /**
     * delete all files from the given directory
     * @param directoryContainingFilesToDelete the directory containing the files to delete
     * @throws IOException if the delete method of the File class returned false
     */
    public static void deleteAllFilesInDirectory(File directoryContainingFilesToDelete) throws IOException {

        HashSet<File> filesToDelete = new HashSet<>();

        if (directoryContainingFilesToDelete.isDirectory()) {
            Files.list(Paths.get(directoryContainingFilesToDelete.getAbsolutePath())).forEach(
                    file -> filesToDelete.add(new File(file.toAbsolutePath().toString())));
        }

        for (File fileToDelete : filesToDelete)
            deleteFileFromFileSystem(fileToDelete);
    }

    /**
     * Utility method to split a file absolute path into name (i.e. path) and extension.
     * For instance, "/usr/lib/file.so" => ["/usr/lib/file", "so"]
     * If the file is null or has an empty path (?), return a String array of null
     * @param file the file object
     * @return a String array: 0 is name/path, 1 is extension
     */
    public static String[] getFileNameAndExtension(File file) {

        String [] nameAndExtension = {null, null};

        String absolutePath = (file == null ? "" : file.getAbsolutePath());
        int lastIndexOfDot = absolutePath.lastIndexOf(".");

        // if the last occurrence of the file separator (.) is found and it is not the first char
        if ( lastIndexOfDot != -1 && lastIndexOfDot != 0) {

            nameAndExtension[0] = absolutePath.substring(0, lastIndexOfDot );
            nameAndExtension[1] = absolutePath.substring(lastIndexOfDot + 1);
        }
        return nameAndExtension;
    }


    /**
     * This method appends a number to the path of the given file until there
     * does not exists a file with the computed path.
     * E.g., "file.txt" becomes "file_1.txt". If file "file_1.txt" already
     * exists, then return "file_2.txt" (and so on).
     * @param oldFile the file over which to append the number
     * @return the new path
     */
    public static String getFileNameAppendNumber(File oldFile) {

        String newFilePath = oldFile.getAbsolutePath();
        String[] nameAndExtension = FileUtil.getFileNameAndExtension(oldFile);
        String fullPathOfFileWithoutExtension = nameAndExtension[0];
        String fileExtension = nameAndExtension[1];

        // this is for appending a number at the end of the file name if it already exists
        for (int i = 0; oldFile.exists(); i++) {

            newFilePath = fullPathOfFileWithoutExtension + "_" + i + "." + fileExtension;
            oldFile = new File(newFilePath);
        }

        return newFilePath;
    }
}