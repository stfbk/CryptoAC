package eu.fbk.st.cryptoac.model.unit

/**
 * A UnitElement has one status among the following:
 * - INCOMPLETE: the unit is present but not fully configured;
 * - OPERATIONAL: the unit is present and ready for use;
 * - DELETED: the unit is deleted
 */
enum class UnitElementStatus {
    INCOMPLETE, OPERATIONAL, DELETED,
}
