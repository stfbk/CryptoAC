package eu.fbk.st.cryptoac.core.tuples

import kotlinx.serialization.Serializable

/**
 * A Permission has one type among the following:
 * - READ: the Permissions allows to read a resource;
 * - WRITE: the Permissions allows to write a resource;
 * - READWRITE: the Permissions allows reading and write a resource
 */
@Serializable
enum class PermissionType {
    READ, WRITE, READWRITE,
}