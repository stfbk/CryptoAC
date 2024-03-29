@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import org.w3c.dom.events.Event
import react.*

@JsName("Snackbar")
external val snackbar: ComponentClass<SnackbarProps>

external interface SnackbarProps : Props {
    /** In ms */
    var autoHideDuration: Number?
    var open: Boolean
    var onClose: (Event, String) -> Unit
}
