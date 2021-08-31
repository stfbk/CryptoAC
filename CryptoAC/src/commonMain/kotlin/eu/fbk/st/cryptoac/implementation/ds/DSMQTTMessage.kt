package eu.fbk.st.cryptoac.implementation.ds

import kotlinx.serialization.Serializable

/** A class representing an MQTT message, consisting of a string [message]. */
@Serializable
data class DSMQTTMessage(val message: String)