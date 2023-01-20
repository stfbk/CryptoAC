
package eu.fbk.st.cryptoac.view

import kotlinx.browser.document
import kotlinx.browser.window
import mu.KotlinLoggingConfiguration
import mu.KotlinLoggingLevel
import react.dom.render

/**
 * The base URL to which send APIs
 * (i.e., the address of the browser tab)
 * (e.g., "https://0.0.0.0:8443")
 */
val baseURL = "${window.location.protocol}//${window.location.host}"

fun main() {
    /** Define the log level TODO properly change this */
    KotlinLoggingConfiguration.LOG_LEVEL = KotlinLoggingLevel.DEBUG

    /**
     * Add here dependencies on SASS files added in the
     * "./build/js/packages/CryptoAC/kotlin-dce-dev" directory
     */
    kotlinext.js.require("prosidebar.scss")

    /** Render the app */
    render(document.getElementById("root")!!) {
        child(App::class) { }
    }
}

inline fun <reified T : Enum<T>> enumContains(name: String): Boolean {
    return enumValues<T>().any { it.name == name }
}
