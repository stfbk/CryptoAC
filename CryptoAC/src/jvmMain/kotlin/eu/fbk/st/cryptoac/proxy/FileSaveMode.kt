package eu.fbk.st.cryptoac.proxy

/**
 * While saving a file in the file system, if another file with the same name is present, you can:
 * - OVERWRITE: overwrite the previous file. if the previous file does not exist, throw a FileNotFoundException
 * - APPEND_NUMBER: modify the name of the new file by appending a number at the end
 * - DO_NOTHING: do not save the new file, keep the previous one
 * - THROW_EXCEPTION: throw an exception
 */
enum class FileSaveMode {
    OVERWRITE, APPEND_NUMBER, DO_NOTHING, THROW_EXCEPTION
}

