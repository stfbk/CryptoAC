package eu.fbk.st.cryptoac.view.content.tradeoffboard

class Architecture(val assignments: List<Assignment>) {

    var arrayObjectivesScore: LinkedHashMap<String, Int> = linkedMapOf()
    var objectivesWeightedScore: Int = 0

    override fun toString(): String {
        return "Architecture(${assignments.joinToString { ", " }})"
    }
}
