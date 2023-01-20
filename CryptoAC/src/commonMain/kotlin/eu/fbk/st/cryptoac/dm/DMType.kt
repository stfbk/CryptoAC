package eu.fbk.st.cryptoac.dm

/**
 * A DM service can be implemented by:
 * - CRYPTOAC: CryptoAC;
 * - MQTT: an MQTT broker.
 */
enum class DMType {
    CRYPTOAC,
    MQTT,
}