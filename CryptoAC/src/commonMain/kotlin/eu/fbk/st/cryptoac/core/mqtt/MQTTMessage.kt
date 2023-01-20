package eu.fbk.st.cryptoac.core.mqtt

import kotlinx.serialization.Serializable

/**
 * A class representing an MQTT message
 * consisting of a [message] in a [topic]
 * and whether the message is an [error]
 */
@Serializable
data class MQTTMessage(
    val message: String,
    val topic: String,
    val error: Boolean
)
