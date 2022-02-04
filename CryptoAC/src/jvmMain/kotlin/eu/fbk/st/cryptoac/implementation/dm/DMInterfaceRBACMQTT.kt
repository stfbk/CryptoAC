package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CryptoACMqttClient

/** Interface defining the methods to interact with the DM for a RBAC MQTT scenario */
interface DMInterfaceRBACMQTT : DMInterface {

    // TODO doc
    /** The client through which interact with the MQTT broker */
    val client: CryptoACMqttClient

    fun getCreateClientCommand(username: String, password: String): String

    fun getDeleteClientCommand(username: String): String

    fun getCreateRoleCommand(roleName: String): String

    fun getAddClientRoleCommand(username: String, roleName: String): String

    fun getDeleteRoleCommand(roleName: String): String

    fun getRemoveClientRoleCommand(username: String, roleName: String): String

    fun getAddRoleACLCommand(roleName: String, aclType: AclType, topic: String): String

    fun getRemoveRoleACLCommand(roleName: String, aclType: AclType, topic: String): String

    fun sendDynsecCommand(commands: HashSet<String>): OutcomeCode
}
