package TestUtilities;

import java.io.File;
import java.util.HashSet;
import java.util.Objects;

import static eu.fbk.st.cryptoac.util.FileUtil.getFileNameAndExtension;

public class TestUtilities {

    /**
     * Utility method to recursively get files inside a given directory
     * @param directoryWhereToSearch the folder where to search for the files
     * @param fileSet the set in which all files will be inserted. it is needed as parameter because of recursion
     * @param extension the extension the file has to end with (e.g. "apk", "class", ...)
     */
    public static void getAllFilesWithGivenExtension(final File directoryWhereToSearch, HashSet<File> fileSet, String extension) {


        // if the set is not initialized yet
        if (fileSet == null) {

            // initialize it
            fileSet = new HashSet<>();
        }

        // if the directory exists
        if (directoryWhereToSearch.exists()) {

            // for each file
            for (final File possibleAPKFile : Objects.requireNonNull(directoryWhereToSearch.listFiles())) {

                // if it is a directory
                if (possibleAPKFile.isDirectory()) {

                    // recursively call this function
                    getAllFilesWithGivenExtension(possibleAPKFile, fileSet, extension);
                }
                // else
                else {

                    // if the file has the extension we are interested in
                    if (getFileNameAndExtension(possibleAPKFile)[1].endsWith(extension)) {

                        // add it into the set
                        fileSet.add(possibleAPKFile);
                    }
                }
            }
        }
        // otherwise, if it is null
        else {

        }
    }
}
