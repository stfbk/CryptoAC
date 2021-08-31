package eu.fbk.st.cryptoac

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

class ResponseRoutes {

    companion object {
        /** Return 200. */
        suspend fun ok(call: ApplicationCall) {
            call.response.status(HttpStatusCode.OK)
            call.respond(OutcomeCode.CODE_000_SUCCESS)
        }

        /** Return 401. */
        suspend fun unauthorized(call: ApplicationCall, message: String, code: OutcomeCode) =
            returnError(call, message, HttpStatusCode.Unauthorized, code)

        /** Return 403. */
        suspend fun forbidden(call: ApplicationCall, message: String, code: OutcomeCode) =
            returnError(call, message, HttpStatusCode.Forbidden, code)

        /** Return 404. */
        suspend fun notFound(call: ApplicationCall, message: String, code: OutcomeCode) =
            returnError(call, message, HttpStatusCode.NotFound, code)

        /** Return 409. */
        suspend fun conflict(call: ApplicationCall, message: String, code: OutcomeCode) =
            returnError(call, message, HttpStatusCode.Conflict, code)

        /** Return 422. */
        suspend fun unprocessableEntity(call: ApplicationCall, message: String, code: OutcomeCode) =
            returnError(call, message, HttpStatusCode.UnprocessableEntity, code)

        /** Return 500. */
        suspend fun internalError(call: ApplicationCall, message: String, code: OutcomeCode) =
            returnError(call, message, HttpStatusCode.InternalServerError, code)

        /** Return 503. */
        suspend fun serviceUnavailable(call: ApplicationCall, message: String, code: OutcomeCode) =
            returnError(call, message, HttpStatusCode.ServiceUnavailable, code)

        /** Return to the client the error [message] and the [code] by setting the [status] of the HTML response [call]. */
        private suspend fun returnError(call: ApplicationCall, message: String, status: HttpStatusCode, code: OutcomeCode) {
            logger.warn { "Error: $message (code: $code)" }
            call.response.status(status)
            call.respond(code)
        }
    }
}