package eu.fbk.st.cryptoac.core.mqtt

/**
 * The possible ACL types that the
 * DynSec plugin of Mosquitto supports
 */
enum class DynSecAclType {
    publishClientSend,
    publishClientReceive,
    //subscribeLiteral,
    subscribePattern,
    //unsubscribeLiteral,
    unsubscribePattern
}