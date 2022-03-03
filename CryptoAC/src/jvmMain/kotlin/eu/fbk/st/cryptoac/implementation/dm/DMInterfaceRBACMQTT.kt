package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.core.CryptoACMqttClient

/** Interface defining the methods to interact with the DM for a RBAC MQTT scenario */
interface DMInterfaceRBACMQTT : DMInterface {

    // TODO doc
    /** The client to interact with the MQTT broker */
    val client: CryptoACMqttClient
}
