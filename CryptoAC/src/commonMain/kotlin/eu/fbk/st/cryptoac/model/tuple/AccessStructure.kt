package eu.fbk.st.cryptoac.model.tuple

import eu.fbk.st.cryptoac.model.tuple.AccessStructureGateType.*
import eu.fbk.st.cryptoac.model.tuple.ClauseType.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Alias for Condition */
typealias AccessStructure = Condition

/** Access structure */
@Serializable
class Condition(
    var simpleCondition: Clause? = null,
    var firstCondition: Condition? = null,
    var secondCondition: Condition? = null,
    var gate: AccessStructureGateType? = null,
) {

    companion object {

        /** 
         * Parse the given [policyTree] string
         * in an access structure object
         */
        fun parseAccessStructure(policyTree: String): AccessStructure {
            val formula = "($policyTree)"
                .replace("(", " ( ")
                .replace(")", " ) ")
            return parseAccessStructureRecursively(policyTree = formula)
        }

        /** Recursive step of the 'parseAccessStructure' function */
        private fun parseAccessStructureRecursively(policyTree: String, depth: Int = 1): AccessStructure {
            logger.debug { "invoked parse AS rec (depth $depth), policyTree is $policyTree" }
            val condition = Condition()

            /** The clause int range expects parenthesis, so we match it with a RegEx */
            return if (
                !policyTree.contains("(") && !policyTree.contains(")")
                ||
                ClauseIntRange.clauseIntRangeRegEx.matches(policyTree)
            ) {
                condition.simpleCondition = getClauseFromString(policyTree)
                condition.gate = NONE
                logger.debug {
                    "Base case, returning simple condition: '$condition' " +
                    "(type ${condition.simpleCondition!!.clauseType}, " +
                    "attribute ${condition.simpleCondition!!.attribute})"
                }
                condition
            } else {
                logger.debug { "recursive step, working" }
                val stack = ArrayDeque<String>()
                val currentConditionString = StringBuilder("")

                /** Splitting the first condition */
                policyTree.split(" ").forEach { immutableWord ->
                    val word = immutableWord.replace(" ", "")
                    if (word.isNotBlank()) {

                        logger.debug { "reading word $word" }

                        when (word.lowercase()) {
                            "(" -> {
                                if (stack.isNotEmpty()) {
                                    currentConditionString.append(" $word ")
                                }
                                stack.addLast(word)
                                logger.debug { "adding '(' to stack, which size is now ${stack.size}" }
                            }
                            "and", "or" -> {
                                if (stack.size == 1) {
                                    val firstPolicyTree = currentConditionString.toString()
                                    logger.debug {
                                        "as stack size is 1, we set that first " +
                                        "condition is recursive call on policy tree '$firstPolicyTree'"
                                    }
                                    condition.firstCondition = parseAccessStructureRecursively(
                                        policyTree = firstPolicyTree.trimDouble(),
                                        depth = depth + 1
                                    )
                                    currentConditionString.clear()
                                    val gate = AccessStructureGateType.valueOf(word.uppercase())
                                    condition.gate = gate
                                    logger.debug { "setting gate: '$gate'" }
                                } else {
                                    currentConditionString.append(" $word ")
                                }
                            }
                            ")" -> {
                                stack.removeLast()
                                if (stack.isEmpty()) {
                                    logger.debug { "stack is now empty " }
                                    if (condition.firstCondition == null) {
                                        logger.debug { "First condition is empty, redirect parse to simple condition " }
                                        condition.simpleCondition = getClauseFromString(
                                            parseAccessStructureRecursively(
                                                policyTree = currentConditionString.toString().trimDouble(),
                                                depth = depth + 1
                                            ).toStringRecursively()
                                        )
                                        condition.gate = NONE
                                    } else {
                                        condition.secondCondition = parseAccessStructureRecursively(
                                            policyTree = currentConditionString.toString().trimDouble(),
                                            depth = depth + 1
                                        )
                                    }
                                } else {
                                    currentConditionString.append(" $word ")
                                }
                            }
                            else -> {
                                logger.debug { "adding $word to the current condition " }
                                currentConditionString.append(" $word ")
                            }
                        }
                    }
                }
                logger.debug { "recursive case, returning condition: '$condition'" }
                condition
            }
        }

        /** 
         * Trim the string and replace double 
         * whitespaces with a single whitespace 
         */
        private fun String.trimDouble(): String {
            return this.trim().replace("\\s+".toRegex(), " ")
        }

        /** Trim whitespaces near parentheses */
        private fun String.removeSpacesNearParenthesis(): String {
            return this
                .replace("\\(\\s+".toRegex(), "(")
                .replace("\\s+\\)".toRegex(), ")")
        }

        /** Parse the given [clauseString] into a clause object */
        private fun getClauseFromString(clauseString: String): Clause {
            return if (clauseString.contains(" in ")) {
                val splitClauseString = clauseString.split(" in ")
                ClauseIntRange(
                    attribute = splitClauseString[0].trim(),
                    value = splitClauseString[1].trim()
                )
            } else if (clauseString.contains("<=")) {
                val splitClauseString = clauseString.split("<=")
                ClauseLesserOrEqual(
                    attribute = splitClauseString[0].trim(),
                    value = splitClauseString[1].trim()
                )
            } else if (clauseString.contains("<")) {
                val splitClauseString = clauseString.split("<")
                ClauseLesser(
                    attribute = splitClauseString[0].trim(),
                    value = splitClauseString[1].trim()
                )
            } else if (clauseString.contains(">=")) {
                val splitClauseString = clauseString.split(">=")
                ClauseGreaterOrEqual(
                    attribute = splitClauseString[0].trim(),
                    value = splitClauseString[1].trim()
                )
            } else if (clauseString.contains(">")) {
                val splitClauseString = clauseString.split(">")
                ClauseGreater(
                    attribute = splitClauseString[0].trim(),
                    value = splitClauseString[1].trim()
                )
            } else if (clauseString.contains("=")) {
                val splitClauseString = clauseString.split("=")
                if (clauseString.contains("-")) {
                    ClauseDateRange(
                        attribute = splitClauseString[0].trim(),
                        value = splitClauseString[1].trim()
                    )
                } else {
                    ClauseDate(
                        attribute = splitClauseString[0].trim(),
                        value = splitClauseString[1].trim()
                    )
                }
            } else if (clauseString.contains(":")) {
                val splitClauseString = clauseString.split(":")
                ClauseAttributeValue(
                    attribute = splitClauseString[0].trim(),
                    value = splitClauseString[1].trim()
                )
            } else {
                ClauseAttribute(
                    attribute = clauseString.trim()
                )
            }
        }
    }

    /** Return true if this access structure is empty, false otherwise*/
    fun isEmpty(): Boolean = gate == null

    /**
     * Check whether the access structure contains
     * at least one of the given [attributes].
     */
    fun containsAtLeastOne(attributes: HashSet<String>): Boolean {
        return when (gate) {
            OR, AND -> {
                firstCondition!!.containsAtLeastOne(attributes)
                ||
                secondCondition!!.containsAtLeastOne(attributes)
            }
            NONE -> {
                var itContains = false
                attributes.forEach {
                    if (simpleCondition!!.attribute == it) {
                        itContains = true
                    }
                }
                itContains
            }
            null -> {
                false
            }
        }
    }

    /**
     * Return, as a set (ignoring duplicates), the
     * attributes present in the access structure
     */
    fun getAttributes(): HashSet<String> {
        return when (gate) {
            OR, AND -> {
                firstCondition!!.getAttributes().apply {
                    addAll(
                        secondCondition!!.getAttributes()
                    )
                }
            }
            NONE -> {
                hashSetOf(simpleCondition!!.attribute)
            }
            null -> {
                hashSetOf()
            }
        }
    }

    /**
     * Find and replace the [oldAttribute] with the
     * [newAttribute]. Return true if the replacement
     * was performed, false otherwise (e.g., for instance
     * because the [oldAttribute] is not present in the
     * access structure)
     */
    fun replaceAttribute(
        oldAttribute: String,
        newAttribute: String
    ): Boolean {
        return when (gate) {
            OR, AND -> {
                (firstCondition!!.replaceAttribute(
                    oldAttribute = oldAttribute,
                    newAttribute = newAttribute
                ) 
                        ||
                secondCondition!!.replaceAttribute(
                    oldAttribute = oldAttribute,
                    newAttribute = newAttribute
                ))
            }
            NONE -> {
                if (simpleCondition!!.attribute == oldAttribute) {
                    simpleCondition!!.attribute = newAttribute
                    true
                } else {
                    false
                }
            }
            null -> {
                false
            }
        }
    }

    /**
     * Remove the given [attributes] from the
     * access structure. This operation modifies
     * the current access structure
     */
    fun remove(attributes: HashSet<String>) {
        if (removeRecursively(attributes)) {
            this.firstCondition = null
            this.secondCondition = null
            this.simpleCondition = null
            this.gate = null
        }
    }

    /** Recursive step of the 'toString' function */
    private fun toStringRecursively(): String {
        return when (gate) {
            OR -> "(${firstCondition!!.toStringRecursively()} or ${secondCondition!!.toStringRecursively()})"
            AND -> "(${firstCondition!!.toStringRecursively()} and ${secondCondition!!.toStringRecursively()})"
            NONE -> "$simpleCondition"
            null -> ""
        }.trimDouble().removeSpacesNearParenthesis()
    }

    /** Recursive step of the 'remove' function */
    private fun removeRecursively(attributes: HashSet<String>): Boolean {
        return when (gate) {
            OR, AND -> {
                val removeFirst = firstCondition!!.removeRecursively(attributes)
                val removeSecond = secondCondition!!.removeRecursively(attributes)
                if (removeFirst && removeSecond) {
                    true
                } else if (removeFirst) {
                    firstCondition = null
                    when (secondCondition!!.gate) {
                        OR, AND -> {
                            gate = secondCondition!!.gate
                            firstCondition = secondCondition!!.firstCondition
                            secondCondition = secondCondition!!.secondCondition
                        }
                        NONE -> {
                            gate = NONE
                            simpleCondition = secondCondition!!.simpleCondition
                        }
                        null -> {
                            val message =
                                "Illegal, second condition is not " +
                                "null ($secondCondition) but gate is null"
                            logger.error { message }
                            throw IllegalStateException(message)
                        }
                    }
                    false
                }  else if (removeSecond) {
                    secondCondition = null
                    when (firstCondition!!.gate) {
                        OR, AND -> {
                            gate = firstCondition!!.gate
                            secondCondition = firstCondition!!.secondCondition
                            firstCondition = firstCondition!!.firstCondition
                        }
                        NONE -> {
                            gate = NONE
                            simpleCondition = firstCondition!!.simpleCondition
                        }
                        null -> {
                            val message =
                                "Illegal, first condition is not " +
                                "null ($firstCondition) but gate is null"
                            logger.error { message }
                            throw IllegalStateException(message)
                        }
                    }
                    false
                } else {
                    false
                }
            }
            NONE -> {
                var itContains = false
                attributes.forEach {
                    if (simpleCondition!!.attribute == it) {
                        itContains = true
                    }
                }
                itContains
            }
            null -> {
                true
            }
        }
    }

    
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Condition) return false

        if (simpleCondition != other.simpleCondition) return false
        if (firstCondition != other.firstCondition) return false
        if (secondCondition != other.secondCondition) return false
        if (gate != other.gate) return false

        return true
    }

    override fun hashCode(): Int {
        var result = simpleCondition?.hashCode() ?: 0
        result = 31 * result + (firstCondition?.hashCode() ?: 0)
        result = 31 * result + (secondCondition?.hashCode() ?: 0)
        result = 31 * result + (gate?.hashCode() ?: 0)
        return result
    }

    override fun toString(): String {
        return when (gate) {
            OR -> "${firstCondition!!.toStringRecursively()} or ${secondCondition!!.toStringRecursively()}"
            AND -> "${firstCondition!!.toStringRecursively()} and ${secondCondition!!.toStringRecursively()}"
            NONE -> "$simpleCondition"
            null -> ""
        }.trimDouble().removeSpacesNearParenthesis()
    }
}

/**
 * A clause can be:
 * - ATTRIBUTE (e.g., 'Manager')
 * - ATTRIBUTE_VALUE (e.g., 'From:Bob')
 * - GREATER (e.g., 'Prize > 10', 'Date > March 1, 2015')
 * - LESSER (e.g., 'Prize < 10', 'Date < March 1, 2015')
 * - GREATER_OR_EQUAL (e.g., 'Prize >= 10', 'Date >= March 1, 2015')
 * - LESSER_OR_EQUAL (e.g., 'Prize <= 10', 'Date <= March 1, 2015')
 * - DATE (the date type is specified as '$Prefix = $Month $Day, $Year', e.g., 'Date = March 1, 2015')
 * - DATE_RANGE (the date type is specified as '$Prefix = $Month $Day-$Day, $Year', e.g., 'Date = March 1-15, 2015')
 * - INT_RANGE (the range type is specified as 'Attribute in ($int, $int)',e.g., 'Floor in (2, 5)')
 */
@Serializable
enum class ClauseType {
    ATTRIBUTE,
    ATTRIBUTE_VALUE,
    GREATER,
    LESSER,
    GREATER_OR_EQUAL,
    LESSER_OR_EQUAL,
    DATE,
    DATE_RANGE,
    INT_RANGE,
}

/** A Clause of an Access Structure */
@Serializable
abstract class Clause {
    abstract val clauseType: ClauseType
    abstract var attribute: String
}

/** A Clause of type ATTRIBUTE */
@Serializable
class ClauseAttribute(
    override val clauseType: ClauseType = ATTRIBUTE,
    override var attribute: String,
) : Clause() {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClauseAttribute) return false

        if (clauseType != other.clauseType) return false
        if (attribute != other.attribute) return false

        return true
    }

    override fun hashCode(): Int {
        var result = clauseType.hashCode()
        result = 31 * result + attribute.hashCode()
        return result
    }

    override fun toString(): String {
        return attribute
    }
}

/** A Clause of type ATTRIBUTE_VALUE */
@Serializable
class ClauseAttributeValue(
    override val clauseType: ClauseType = ATTRIBUTE_VALUE,
    override var attribute: String,
    val value: String,
) : Clause() {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClauseAttributeValue) return false

        if (clauseType != other.clauseType) return false
        if (attribute != other.attribute) return false
        if (value != other.value) return false

        return true
    }

    override fun hashCode(): Int {
        var result = clauseType.hashCode()
        result = 31 * result + attribute.hashCode()
        result = 31 * result + value.hashCode()
        return result
    }

    override fun toString(): String {
        return "$attribute:$value"
    }
}

/** A Clause of type GREATER */
@Serializable
class ClauseGreater(
    override val clauseType: ClauseType = GREATER,
    override var attribute: String,
    val value: String,
) : Clause() {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClauseGreater) return false

        if (clauseType != other.clauseType) return false
        if (attribute != other.attribute) return false
        if (value != other.value) return false

        return true
    }

    override fun hashCode(): Int {
        var result = clauseType.hashCode()
        result = 31 * result + attribute.hashCode()
        result = 31 * result + value.hashCode()
        return result
    }

    override fun toString(): String {
        return "$attribute > $value"
    }
}

/** A Clause of type LESSER */
@Serializable
class ClauseLesser(
    override val clauseType: ClauseType = LESSER,
    override var attribute: String,
    val value: String,
) : Clause() {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClauseLesser) return false

        if (clauseType != other.clauseType) return false
        if (attribute != other.attribute) return false
        if (value != other.value) return false

        return true
    }

    override fun hashCode(): Int {
        var result = clauseType.hashCode()
        result = 31 * result + attribute.hashCode()
        result = 31 * result + value.hashCode()
        return result
    }

    override fun toString(): String {
        return "$attribute < $value"
    }
}

/** A Clause of type GREATER_OR_EQUAL */
@Serializable
class ClauseGreaterOrEqual(
    override val clauseType: ClauseType = GREATER_OR_EQUAL,
    override var attribute: String,
    val value: String,
) : Clause() {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClauseGreaterOrEqual) return false

        if (clauseType != other.clauseType) return false
        if (attribute != other.attribute) return false
        if (value != other.value) return false

        return true
    }

    override fun hashCode(): Int {
        var result = clauseType.hashCode()
        result = 31 * result + attribute.hashCode()
        result = 31 * result + value.hashCode()
        return result
    }

    override fun toString(): String {
        return "$attribute >= $value"
    }
}

/** A Clause of type LESSER_OR_EQUAL */
@Serializable
class ClauseLesserOrEqual(
    override val clauseType: ClauseType = LESSER_OR_EQUAL,
    override var attribute: String,
    val value: String,
) : Clause() {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClauseLesserOrEqual) return false

        if (clauseType != other.clauseType) return false
        if (attribute != other.attribute) return false
        if (value != other.value) return false

        return true
    }

    override fun hashCode(): Int {
        var result = clauseType.hashCode()
        result = 31 * result + attribute.hashCode()
        result = 31 * result + value.hashCode()
        return result
    }

    override fun toString(): String {
        return "$attribute <= $value"
    }
}

/** A Clause of type DATE */
@Serializable
class ClauseDate(
    override val clauseType: ClauseType = DATE,
    override var attribute: String,
    val value: String,
) : Clause() {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClauseDate) return false

        if (clauseType != other.clauseType) return false
        if (attribute != other.attribute) return false
        if (value != other.value) return false

        return true
    }

    override fun hashCode(): Int {
        var result = clauseType.hashCode()
        result = 31 * result + attribute.hashCode()
        result = 31 * result + value.hashCode()
        return result
    }

    override fun toString(): String {
        return "$attribute = $value"
    }
}

/** A Clause of type DATE_RANGE */
@Serializable
class ClauseDateRange(
    override val clauseType: ClauseType = DATE_RANGE,
    override var attribute: String,
    val value: String,
) : Clause() {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClauseDateRange) return false

        if (clauseType != other.clauseType) return false
        if (attribute != other.attribute) return false
        if (value != other.value) return false

        return true
    }

    override fun hashCode(): Int {
        var result = clauseType.hashCode()
        result = 31 * result + attribute.hashCode()
        result = 31 * result + value.hashCode()
        return result
    }

    override fun toString(): String {
        return "$attribute = $value"
    }
}

/** A Clause of type INT_RANGE */
@Serializable
class ClauseIntRange(
    override val clauseType: ClauseType = INT_RANGE,
    override var attribute: String,
    val value: String,
) : Clause() {

    companion object {
        @Transient
        val clauseIntRangeRegEx = """^\s*[-a-zA-Z\d_]+\s+in\s+\(\s*\d+\s*,\s*\d+\s*\)\s*${'$'}""".toRegex()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClauseIntRange) return false

        if (clauseType != other.clauseType) return false
        if (attribute != other.attribute) return false
        if (value != other.value) return false

        return true
    }

    override fun hashCode(): Int {
        var result = clauseType.hashCode()
        result = 31 * result + attribute.hashCode()
        result = 31 * result + value.hashCode()
        return result
    }

    override fun toString(): String {
        return "$attribute in $value"
    }
}


/**
 * An access structure gate can be:
 * - OR
 * - AND
 * - NONE (no gate)
 */
@Serializable
enum class AccessStructureGateType {
    OR,
    AND,
    NONE,
}