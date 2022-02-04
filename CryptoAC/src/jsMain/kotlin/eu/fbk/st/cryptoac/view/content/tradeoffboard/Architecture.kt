package eu.fbk.st.cryptoac.view.content.tradeoffboard

class Architecture(val arcs: HashMap<Domains, MutableList<Entities>>, val hybrid: Boolean) {

    var arrayRequirementsScore: HashMap<String, Int> = hashMapOf()
    var requirementsScore: Int = 0

    companion object {
        fun architectureFromAssignments(assignments: List<Assignment>): Architecture {
            val arcs: HashMap<Domains, MutableList<Entities>> = hashMapOf()
            var hybrid = false
            val entitiesAlreadyPresent: HashSet<Entities> = hashSetOf()
            assignments.forEach {
                arcs.getOrPut(it.domain) {
                    mutableListOf()
                }.add(it.entity)
                if (entitiesAlreadyPresent.contains(it.entity)) {
                    hybrid = true
                } else {
                    entitiesAlreadyPresent.add(it.entity)
                }
            }
            return Architecture(arcs, hybrid)
        }
    }

    override fun toString(): String {
        return "Architecture(arcs=$arcs, hybrid=$hybrid)"
    }
}