package eu.fbk.st.cryptoac.model

import kotlinx.serialization.Serializable

/**
 * An Element is any element involved in an AC
 * policy. An Element does not have any property
 */
@Serializable
abstract class Element {

    // TODO tuples are digitally signed, but single users, roles, attributes and resources are not => fix this
    //  move signer and signature from the Tuple class to here
    companion object {
        /**
         * Ensure that the [number] is strictly positive,
         * otherwise throw an IllegalArgumentException
         */
        fun requirePositiveNumber(number: Int) {
            if (number <= 0) {
                throw IllegalArgumentException("Given zero or negative version number $number")
            }
        }
    }

    /**
     * Return a String array of the significant
     * fields of this CryptoAC object
     */
    abstract fun toArray(): Array<String>

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        return true
    }

    override fun hashCode(): Int {
        return this::class.hashCode()
    }
}
