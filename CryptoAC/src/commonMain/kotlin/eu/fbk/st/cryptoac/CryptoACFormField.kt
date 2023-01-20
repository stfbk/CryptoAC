package eu.fbk.st.cryptoac

/** A field of a CryptoAC form */
data class CryptoACFormField(
    /** The name of the field */
    val name: String,

    /** The label of the field */
    val label: String,

    /** The input type of the field */
    val type: InputType,

    /** The list of options in case the input type is "radio" or "select" */
    val options: List<String>? = null,

    /** The default value, if any */
    val defaultValue: String? = null,

    /** An additional class name to apply to the form field, if any */
    val className: String? = null,

    /** Whether the parameter is disabled */
    val disabled: Boolean = false,
)
