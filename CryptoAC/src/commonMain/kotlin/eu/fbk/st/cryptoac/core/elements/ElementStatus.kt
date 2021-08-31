package eu.fbk.st.cryptoac.core.elements

/**
 * An Element has one status among the following:
 * - INCOMPLETE: the Element is present but not fully configured;
 * - OPERATIONAL: the Element is present and ready for use;
 * - DELETED: the Element is deleted.
 */
enum class ElementStatus {
    INCOMPLETE, OPERATIONAL, DELETED,
}