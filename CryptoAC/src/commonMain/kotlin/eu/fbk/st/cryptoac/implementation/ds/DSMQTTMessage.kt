package eu.fbk.st.cryptoac.implementation.ds

import kotlinx.serialization.Serializable

/** A class representing an MQTT message, consisting of a string [message]. */
@Serializable
data class DSMQTTMessage(val message: String) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as DSMQTTMessage

        if (message != other.message) return false

        return true
    }

    override fun hashCode(): Int {
        return message.hashCode()
    }
}