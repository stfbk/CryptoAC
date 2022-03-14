package eu.fbk.st.cryptoac

import kotlin.random.Random

// TODO put this somewhere it makes sense
class Utils {

    companion object {

        /** Generate a random string */
        fun generateRandomString(length: Int = 20): String {
            val charPool: List<Char> = ('a'..'z') + ('A'..'Z') + ('0'..'9')
            return (1..length)
                .map { Random.nextInt(0, charPool.size) }
                .map(charPool::get)
                .joinToString("")
        }
    }
}