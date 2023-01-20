package eu.fbk.st.cryptoac.ac.opa

import kotlinx.serialization.Serializable

/**
 * Describe the document received when querying OPA APIs:
 * - if decision logging was enabled in OPA, [decision_id]
 *   contains a string that uniquely identifies the decision
 *   or the query;
 * - [result] is the base or virtual document referred to
 *   in the API request. If the path is undefined, this key
 *   will be omitted;
 * - if query metrics were enabled in OPA, [metrics] contains
 *   query performance metrics collected during the parse,
 *   compile, and evaluation steps
 */
@Serializable
data class OPADocument(
    val decision_id: String? = null,
    val result: OPADocumentRBAC? = null,
    val metrics: HashMap<String, Int>? = null
)
