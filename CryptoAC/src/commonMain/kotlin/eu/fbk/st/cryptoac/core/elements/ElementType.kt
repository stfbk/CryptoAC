package eu.fbk.st.cryptoac.core.elements

/**
 * An Element has one type among the following:
 * - USER: the Element is a user;
 * - ROLE: the Element is a role;
 * - FILE: the Element is a file.
 * - ASSIGNMENT: the Element represents an assignment between a user and a role.
 * - PERMISSION: the Element represents an assignment between a role and a file
 */
enum class ElementType {
    USER, ROLE, FILE, ASSIGNMENT, PERMISSION
}
