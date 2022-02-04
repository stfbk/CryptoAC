package eu.fbk.st.cryptoac.proxy

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows

import java.io.ByteArrayInputStream
import java.io.File

internal class FileSystemManagerTest {

    private val fileContent1 = "Go ahead, make my day".toByteArray()
    private val fileContent2 =  "What we've got here is failure to communicate".toByteArray()
    private val filePath = "./test.txt"


    @Test
    fun `save file with new file saves new file`() {
        val newFile = File(filePath)
        val path = newFile.absolutePath
        assert(path == FileSystemManager.saveFile(
                path = path,
                content = ByteArrayInputStream(fileContent1),
                saveMode = FileSaveMode.THROW_EXCEPTION,
            )
        )
        assert(sameContent(newFile, fileContent1))
        assert(newFile.delete())
    }

    @Test
    fun `save file with already existing file and OVERWRITE flag overwrites previous files`() {
        val newFile = File(filePath)
        FileSystemManager.saveFile(
            path = filePath,
            content = ByteArrayInputStream(fileContent1),
            saveMode = FileSaveMode.THROW_EXCEPTION,
        )
        FileSystemManager.saveFile(
            path = filePath,
            content = ByteArrayInputStream(fileContent2),
            saveMode = FileSaveMode.OVERWRITE,
        )
        assert(sameContent(newFile, fileContent2))
        assert(newFile.delete())
    }

    @Test
    fun `save file with already existing file and THROW_EXCEPTION flag throws exception`() {
        val newFile = File(filePath)
        FileSystemManager.saveFile(
            path = filePath,
            content = ByteArrayInputStream(fileContent1),
            saveMode = FileSaveMode.THROW_EXCEPTION,
        )
        assertThrows<FileAlreadyExistsException> {
            FileSystemManager.saveFile(
                path = filePath,
                content = ByteArrayInputStream(fileContent2),
                saveMode = FileSaveMode.THROW_EXCEPTION,
            )
        }
        assert(sameContent(newFile, fileContent1))
        assert(newFile.delete())
    }

    @Test
    fun `save file with already existing file and DO_NOTHING flag does nothing`() {
        val newFile = File(filePath)
        FileSystemManager.saveFile(
            path = filePath,
            content = ByteArrayInputStream(fileContent1),
            saveMode = FileSaveMode.THROW_EXCEPTION,
        )
        FileSystemManager.saveFile(
            path = filePath,
            content = ByteArrayInputStream(fileContent2),
            saveMode = FileSaveMode.DO_NOTHING,
        )
        assert(sameContent(newFile, fileContent1))
        assert(newFile.delete())
    }

    @Test
    fun `save file with already existing file and APPEND_NUMBER flag appends a number to the new file path`() {
        val newFile = File(filePath)
        FileSystemManager.saveFile(
            path = filePath,
            content = ByteArrayInputStream(fileContent1),
            saveMode = FileSaveMode.THROW_EXCEPTION,
        )
        val appendedNumberPath = FileSystemManager.saveFile(
            path = filePath,
            content = ByteArrayInputStream(fileContent2),
            saveMode = FileSaveMode.APPEND_NUMBER,
        )
        val secondFile = File(appendedNumberPath)
        assert(sameContent(newFile, fileContent1))
        assert(sameContent(secondFile, fileContent2))
        assert(newFile.delete())
        assert(secondFile.delete())
    }
    
    @Test
    fun `append number returns the same path if file is new`() {
        val newFile = File(filePath)
        assert(newFile.absolutePath == FileSystemManager.appendNumber(newFile).absolutePath)
    }

    @Test
    fun `append number returns a new path if file already exists`() {
        val newFile = File(filePath)
        FileSystemManager.saveFile(
            path = filePath,
            content = ByteArrayInputStream(fileContent1),
            saveMode = FileSaveMode.THROW_EXCEPTION,
        )
        assert(newFile.absolutePath != FileSystemManager.appendNumber(newFile).absolutePath)
        assert(newFile.delete())
    }

    private fun sameContent(file: File, content: ByteArray): Boolean {
        return file.inputStream().readAllBytes().contentEquals(content)
    }
}