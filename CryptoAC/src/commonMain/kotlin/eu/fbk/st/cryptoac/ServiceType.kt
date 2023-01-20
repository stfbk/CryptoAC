package eu.fbk.st.cryptoac

/**
 * List of services a core can connect:
 * - MM: Metadata Manager;
 * - RM: Reference Monitor;
 * - DM: Data Manager;
 * - AC: Access Controller.
 */
enum class ServiceType {
    MM,
    RM,
    DM,
    AC,
}
