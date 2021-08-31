package eu.fbk.st.cryptoac.proxy

import eu.fbk.st.cryptoac.core.CoreType
import mu.KotlinLogging
import java.io.File
import java.io.FileNotFoundException
import java.io.IOException
import java.io.InputStream

private val logger = KotlinLogging.logger {}

class FileSystemManager {

    companion object {

        /** Return the key identifying the path of the [fileName] for the given [core] */
        fun getFileKey(fileName: String, core: CoreType) = "${core}_$fileName"

        /**
         * Save the [content] in the given [path], eventually creating missing folders.
         * If another file with the same [path] is already present in the file system,
         * behave as specified by the [saveMode]. Finally, return the path of the file.
         */
        fun saveFile(path: String, content: InputStream, saveMode: FileSaveMode): String {
            logger.info { "Saving file $path with save mode $saveMode" }

            val oldFile = File(path)

            if (!oldFile.exists() && saveMode == FileSaveMode.OVERWRITE) {
                val message = "file $path does not exists and ${FileSaveMode.OVERWRITE} flag was specified"
                logger.error { message }
                throw FileNotFoundException(message)
            }

            val newFile = if (oldFile.exists()) {
                logger.debug { "File already exists" }
                when (saveMode) {
                    FileSaveMode.OVERWRITE -> {
                        logger.debug { "Overwrite previous file" }
                        oldFile
                    }
                    FileSaveMode.APPEND_NUMBER -> {
                        val tempFile = appendNumber(oldFile)
                        logger.debug { "New path is ${tempFile.absolutePath}" }
                        tempFile.createNewFile()
                        tempFile
                    }
                    FileSaveMode.DO_NOTHING -> {
                        logger.debug { "DO_NOTHING flag was set" }
                        return path
                    }
                    FileSaveMode.THROW_EXCEPTION -> {
                        val message = "file $path already exists and ${FileSaveMode.THROW_EXCEPTION} flag was specified"
                        logger.error { message }
                        throw FileAlreadyExistsException(file = oldFile, reason = message)
                    }
                }
            } else {
                oldFile
            }


            if (!newFile.parentFile.exists()) {
                if (!newFile.parentFile.mkdirs()) {
                    val message = "Error while creating directories"
                    logger.error { message }
                    throw IOException(message)
                }
            }
            if (!newFile.exists()) {
                if (!newFile.createNewFile()) {
                    val message = "Error while creating the new file"
                    logger.error { message }
                    throw IOException(message)
                }
            }

            newFile.copyInputStreamToFile(content)

            return newFile.absolutePath
        }

        /**
         * Appends a number to the path of the given [file] until it
         * is unique in the file system. Finally, return the new file.
         */
        fun appendNumber(file: File): File {
            var count = 0
            var newFile = file
            val pathWithoutExtension = file.pathWithoutExtension
            val extension = file.extension
            while (newFile.exists()) {
                count++
                newFile = File("${pathWithoutExtension}_${count}_${extension}")
            }
            return newFile
        }

        /** The path of the file without extension. */
        private val File.pathWithoutExtension: String
            get() {
                return path.substringBeforeLast(".")
            }

        /** Copy the input stream in the file. */
        private fun File.copyInputStreamToFile(inputStream: InputStream) {
            this.outputStream().use { fileOut ->
                inputStream.copyTo(fileOut)
            }
        }
    }
}