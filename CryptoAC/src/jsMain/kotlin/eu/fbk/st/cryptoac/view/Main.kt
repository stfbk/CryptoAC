
package eu.fbk.st.cryptoac.view

import kotlinx.browser.window
import mu.KotlinLoggingConfiguration
import mu.KotlinLoggingLevel
import react.create
import react.dom.client.createRoot
import web.dom.document


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
    // COMMENTED, AS Prosidebar V1.0.0-alpha.1 "Removed scss in favor of css-in-js(styled component)"
    // SEE https://github.com/azouaoui-med/react-pro-sidebar/releases/tag/v1.0.0-alpha.1
    //kotlinext.js.require("./prosidebar.scss")

    kotlinext.js.require("./prosidebar.css")

    /** Render the app */
    val container = document.getElementById("root")!!
    createRoot(
        container = container
    ).render(
        children = App.create()
    )
}
