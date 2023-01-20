package eu.fbk.st.cryptoac.ac.dynsec

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.mqtt.DynSecAclType

/** Wrap a list of [DynSecAclType] with an outcome code */
data class CodeDynSecAclType(
    val acls: List<DynSecAclType>? = null,
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
)