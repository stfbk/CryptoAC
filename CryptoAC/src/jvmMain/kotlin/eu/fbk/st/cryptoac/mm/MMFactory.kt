package eu.fbk.st.cryptoac.mm

import eu.fbk.st.cryptoac.mm.mysql.MMServiceABACMySQL
import eu.fbk.st.cryptoac.mm.mysql.MMServiceABACMySQLParameters
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQLParameters
import eu.fbk.st.cryptoac.mm.redis.MMServiceRBACRedis
import eu.fbk.st.cryptoac.mm.redis.MMServiceRedisParameters
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Factory for creating MM objects */
class MMFactory {

    companion object {
        /** Return an MM service configured with the given [mmParameters] */
        fun getMM(mmParameters: MMServiceParameters): MMService {
            logger.debug { "Creating MM object of type ${mmParameters.mmType}" }
            return when (mmParameters.mmType) {
                MMType.RBAC_MYSQL -> {
                    if (mmParameters is MMServiceRBACMySQLParameters) {
                        MMServiceRBACMySQL(mmParameters)
                    } else {
                        val message = "Received wrong parameters for MM type ${MMType.RBAC_MYSQL}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                MMType.ABAC_MYSQL -> {
                    if (mmParameters is MMServiceABACMySQLParameters) {
                        MMServiceABACMySQL(mmParameters)
                    } else {
                        val message = "Received wrong parameters for MM type ${MMType.ABAC_MYSQL}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                MMType.RBAC_REDIS -> {
                    if (mmParameters is MMServiceRedisParameters) {
                        MMServiceRBACRedis(mmParameters)
                    } else {
                        val message = "Received wrong parameters for MM type ${MMType.ABAC_MYSQL}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            }
        }
    }
}
