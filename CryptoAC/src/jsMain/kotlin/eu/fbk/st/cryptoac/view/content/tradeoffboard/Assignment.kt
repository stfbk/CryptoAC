package eu.fbk.st.cryptoac.view.content.tradeoffboard


data class Assignment(val domain: Domains, val entity: Entities) {

    override fun toString(): String {
        return "Assignment(domain='$domain', entity='$entity')"
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

}


fun <T> Collection<T>.powerSet(): Set<Set<T>> =
    powerSet(this, setOf(emptySet()))

private tailrec fun <T> powerSet(left: Collection<T>, acc: Set<Set<T>>): Set<Set<T>> =
    if (left.isEmpty()) acc
    else powerSet(left.drop(1), acc + acc.map { it + left.first() })