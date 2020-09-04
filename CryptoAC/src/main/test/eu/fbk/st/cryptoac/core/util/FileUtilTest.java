package eu.fbk.st.cryptoac.core.util;

import eu.fbk.st.cryptoac.util.FileUtil;
import org.junit.jupiter.api.Test;

import java.io.*;
import java.util.Arrays;
import java.util.Objects;

import static eu.fbk.st.cryptoac.util.FileUtil.SaveMode.*;
import static org.junit.jupiter.api.Assertions.*;

class FileUtilTest {

    @Test
    void getFileNameAndExtension_correct() {

        File file1 = new File("/home/file/not/existing.txt");
        String[] file1Split = FileUtil.getFileNameAndExtension(file1);
        assertEquals("/home/file/not/existing", file1Split[0]);
        assertEquals("txt", file1Split[1]);
    }

    @Test
    void getFileNameAndExtension_nullFile() {

        String[] file1Split = FileUtil.getFileNameAndExtension(null);
        assertNull(file1Split[0]);
        assertNull(file1Split[1]);
    }

    @Test
    void getFileNameAndExtension_fileNullPath() {

        File file1 = new File("");
        String[] file1Split = FileUtil.getFileNameAndExtension(file1);
        assertNull(file1Split[0]);
        assertNull(file1Split[1]);
    }


    @Test
    void saveFileOnFileSystem_correct() throws IOException {

        String fileToSavePath = "./files/file_to_delete.txt";
        File fileToSave = new File(fileToSavePath);
        InputStream contentToSave = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file1.txt"));
        FileUtil.saveFileOnFileSystem(fileToSave.getAbsolutePath(), contentToSave, DO_NOTHING);

        InputStream justSavedFileContent = new FileInputStream(new File(fileToSavePath));
        byte[] file1Content = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file1.txt")).readAllBytes();
        assertEquals(Arrays.toString(file1Content), Arrays.toString(justSavedFileContent.readAllBytes()));
        assertTrue(new File(fileToSavePath).delete());
    }

    @Test
    void saveFileOnFileSystem_twiceDoNothing() throws IOException {

        String fileToSavePath = "./files/file_to_delete.txt";
        File fileToSave = new File(fileToSavePath);
        InputStream contentToSave = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file1.txt"));
        FileUtil.saveFileOnFileSystem(fileToSave.getAbsolutePath(), contentToSave, DO_NOTHING);
        FileUtil.saveFileOnFileSystem(fileToSave.getAbsolutePath(), contentToSave, DO_NOTHING);
        assertTrue(new File(fileToSavePath).delete());
    }

    @Test
    void saveFileOnFileSystem_twiceOverwrite() throws IOException {

        String fileToSavePath = "./files/file_to_delete.txt";
        File fileToSave = new File(fileToSavePath);
        InputStream contentToSave = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file1.txt"));
        FileUtil.saveFileOnFileSystem(fileToSave.getAbsolutePath(), contentToSave, DO_NOTHING);

        InputStream contentToOverWrite = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file2.txt"));
        FileUtil.saveFileOnFileSystem(fileToSave.getAbsolutePath(), contentToOverWrite, OVERWRITE);


        InputStream justSavedFileContent = new FileInputStream(new File(fileToSavePath));
        byte[] file1Content = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file2.txt")).readAllBytes();
        assertEquals(Arrays.toString(file1Content), Arrays.toString(justSavedFileContent.readAllBytes()));
        assertTrue(new File(fileToSavePath).delete());
    }

    @Test
    void saveFileOnFileSystem_twiceAppend() throws IOException {

        String fileToSavePath = "./files/file_to_delete.txt";
        File fileToSave = new File(fileToSavePath);
        InputStream contentToSave = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file1.txt"));
        File fileSavedFirstTime = FileUtil.saveFileOnFileSystem(fileToSave.getAbsolutePath(), contentToSave, DO_NOTHING);

        InputStream contentToOverWrite = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file2.txt"));
        File fileSavedSecondTime = FileUtil.saveFileOnFileSystem(fileToSave.getAbsolutePath(), contentToOverWrite, APPEND_NUMBER);

        byte[] file1Content = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file1.txt")).readAllBytes();
        byte[] file2Content = Objects.requireNonNull(Thread.currentThread().getContextClassLoader().
                getResourceAsStream("files/file2.txt")).readAllBytes();

        assertEquals(Arrays.toString(file1Content), Arrays.toString(new FileInputStream(fileSavedFirstTime).readAllBytes()));
        assertEquals(Arrays.toString(file2Content), Arrays.toString(new FileInputStream(fileSavedSecondTime).readAllBytes()));

        assertTrue(fileSavedFirstTime.delete());
        assertTrue(fileSavedSecondTime.delete());
    }
}