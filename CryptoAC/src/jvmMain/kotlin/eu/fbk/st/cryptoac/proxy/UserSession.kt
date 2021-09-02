package eu.fbk.st.cryptoac.proxy

/** Wrapper for users' session data in the server consisting of the [username]. */
data class UserSession(val username: String) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as UserSession

        if (username != other.username) return false

        return true
    }

    override fun hashCode(): Int {
        return username.hashCode()
    }
}