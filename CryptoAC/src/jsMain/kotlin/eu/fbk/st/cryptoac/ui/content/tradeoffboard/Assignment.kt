package eu.fbk.st.cryptoac.ui.content.tradeoffboard


data class Assignment(val domain: String, val entity: String) {

    companion object {
        val assignmentsCLOUD = hashMapOf(
            DomainsCLOUD.Client.toString() to listOf(
                EntitiesCLOUD.Proxy.toString()
            ),
            DomainsCLOUD.OnPremise.toString() to listOf(
                EntitiesCLOUD.Proxy.toString(),
                EntitiesCLOUD.RM.toString(),
                EntitiesCLOUD.MM.toString(),
                EntitiesCLOUD.DM.toString()
            ),
            DomainsCLOUD.CSP.toString() to listOf(
                EntitiesCLOUD.RM.toString(),
                EntitiesCLOUD.MM.toString(),
                EntitiesCLOUD.DM.toString()
            ),
        )
        val assignmentsMQTT = hashMapOf(
            DomainsMQTT.Client.toString() to listOf(
                EntitiesMQTT.Proxy.toString()
            ),
            DomainsMQTT.OnPremise.toString() to listOf(
                EntitiesMQTT.Proxy.toString(),
                EntitiesMQTT.MM.toString(),
                EntitiesMQTT.DM.toString()
            ),
            DomainsMQTT.Edge.toString() to listOf(
                EntitiesMQTT.Proxy.toString(),
                EntitiesMQTT.MM.toString(),
                EntitiesMQTT.DM.toString()
            ),
            DomainsMQTT.CSP.toString() to listOf(
                EntitiesMQTT.MM.toString(),
                EntitiesMQTT.DM.toString()
            ),
        )

    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class.js != other::class.js) return false

        other as Assignment

        if (domain != other.domain) return false
        if (entity != other.entity) return false

        return true
    }

    override fun hashCode(): Int {
        var result = domain.hashCode()
        result = 31 * result + entity.hashCode()
        return result
    }

    override fun toString(): String {
        return "Assignment(domain='$domain', entity='$entity')"
    }

}


fun <T> Collection<T>.powerSet(): Set<Set<T>> =
    powerSet(this, setOf(emptySet()))

private tailrec fun <T> powerSet(left: Collection<T>, acc: Set<Set<T>>): Set<Set<T>> =
    if (left.isEmpty()) acc
    else powerSet(left.drop(1), acc + acc.map { it + left.first() })