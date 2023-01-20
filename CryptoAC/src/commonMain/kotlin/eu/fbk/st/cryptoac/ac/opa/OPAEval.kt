package eu.fbk.st.cryptoac.ac.opa

import kotlinx.serialization.Serializable

/**
 * Describe the document received when evaluating a policy in OPA:
 * - if decision logging was enabled in OPA, [decision_id]
 *   contains a string that uniquely identifies the decision
 *   or the query;
 * - [result] is the result of the policy evaluation;
 * - if query metrics were enabled in OPA, [metrics] contains
 *   query performance metrics collected during the parse,
 *   compile, and evaluation steps
 */
@Serializable
data class OPAEval(
    val decision_id: String? = null,
    val result: Boolean,
    val metrics: HashMap<String, Int>? = null
)
