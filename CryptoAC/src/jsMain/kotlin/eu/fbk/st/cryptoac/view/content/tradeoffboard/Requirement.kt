package eu.fbk.st.cryptoac.view.content.tradeoffboard

data class Requirement(
    var name: String,
    var weight: Int = 1,
    var thresholdType: Threshold = Threshold.None,
    var thresholdValue: Int = 0,
    var penalty: Int = 0,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class.js != other::class.js) return false

        other as Requirement

        if (name != other.name) return false
        if (weight != other.weight) return false
        if (thresholdType != other.thresholdType) return false
        if (thresholdValue != other.thresholdValue) return false
        if (penalty != other.penalty) return false

        return true
    }

    override fun hashCode(): Int {
        var result = name.hashCode()
        result = 31 * result + weight
        result = 31 * result + thresholdType.hashCode()
        result = 31 * result + thresholdValue
        result = 31 * result + penalty
        return result
    }
}
