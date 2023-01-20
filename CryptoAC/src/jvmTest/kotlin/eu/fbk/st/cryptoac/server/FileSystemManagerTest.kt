package eu.fbk.st.cryptoac.server

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import java.io.ByteArrayInputStream
import java.io.File

internal class FileSystemManagerTest {

    private val fileContent1 = "Go ahead, make my day".toByteArray()
    private val fileContent2 = "What we've got here is failure to communicate".toByteArray()
    private val filePath = "./test.txt"

    @Test
    fun `save file works`() {
        val newFile = File(filePath)
        val path = newFile.absolutePath
        assert(
            path == FileSystemManager.saveFile(
                path = path,
                content = ByteArrayInputStream(fileContent1),
                saveMode = FileSaveMode.THROW_EXCEPTION,
            )
        )
        assert(assertSameContent(newFile, fileContent1))
        assert(newFile.delete())
    }

    @Test
    fun `save file twice with OVERWRITE flag works`() {
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
        assert(assertSameContent(newFile, fileContent2))
        assert(newFile.delete())
    }

    @Test
    fun `save file twice with DO_NOTHING flag works`() {
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
        assert(assertSameContent(newFile, fileContent1))
        assert(newFile.delete())
    }

    @Test
    fun `save file twice with APPEND_NUMBER flag works`() {
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
        assert(assertSameContent(newFile, fileContent1))
        assert(assertSameContent(secondFile, fileContent2))
        assert(newFile.delete())
        assert(secondFile.delete())
    }

    @Test
    fun `save file twice with THROW_EXCEPTION flag fails`() {
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
        assert(assertSameContent(newFile, fileContent1))
        assert(newFile.delete())
    }

    @Test
    fun `append number on new file works`() {
        val newFile = File(filePath)
        assert(newFile.absolutePath == FileSystemManager.appendNumber(newFile).absolutePath)
    }

    @Test
    fun `append number on existing file works`() {
        val newFile = File(filePath)
        FileSystemManager.saveFile(
            path = filePath,
            content = ByteArrayInputStream(fileContent1),
            saveMode = FileSaveMode.THROW_EXCEPTION,
        )
        assert(newFile.absolutePath != FileSystemManager.appendNumber(newFile).absolutePath)
        assert(newFile.delete())
    }

    private fun assertSameContent(file: File, content: ByteArray): Boolean {
        return file.inputStream().readAllBytes().contentEquals(content)
    }
}
