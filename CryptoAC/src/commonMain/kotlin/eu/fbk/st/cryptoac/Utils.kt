package eu.fbk.st.cryptoac

import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.http.*
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

/**
 * Ktor (2.0.0-beta-1) lacks a submit form method
 * with HTTP patch, thus, we create this extension
 */
suspend fun HttpClient.submitFormPatch(
    formParameters: Parameters,
    block: HttpRequestBuilder.() -> Unit
) = request {
    method = HttpMethod.Patch
    setBody(FormDataContent(formParameters))
    block()
}