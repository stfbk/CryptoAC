package eu.fbk.st.cryptoac.view.content.tradeoffboard

data class Assignment(
    val entity: Entities,
    val domain: Domains
) {

    override fun toString(): String {
        return "Assignment(domain='$domain', entity='$entity')"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Assignment) return false

        if (entity != other.entity) return false
        return domain == other.domain
    }

    override fun hashCode(): Int {
        var result = entity.hashCode()
        result = 31 * result + domain.hashCode()
        return result
    }

}
