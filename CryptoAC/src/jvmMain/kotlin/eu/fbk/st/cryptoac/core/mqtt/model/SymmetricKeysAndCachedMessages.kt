package eu.fbk.st.cryptoac.core.mqtt.model

import eu.fbk.st.cryptoac.core.mqtt.MQTTMessage
import eu.fbk.st.cryptoac.crypto.SymmetricKeyCryptoAC
import eu.fbk.st.cryptoac.model.unit.EnforcementType


/**
 * The symmetric key of a topic obtained through the
 * [role] and a list of (decrypted) messages to
 * deliver to the MQTT client
 */
data class SymmetricKeysAndCachedMessages(
    var key: SymmetricKeyCryptoAC?,
    var role: String?,
    var versionNumber: Int,
    var enforcement: EnforcementType,
    var messages: MutableList<MQTTMessage> = mutableListOf()
)
