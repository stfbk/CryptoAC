@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("Snackbar")
external val snackbar: RClass<SnackbarProps>

external interface SnackbarProps : RProps {
    /** In ms. */
    var autoHideDuration: Number?
    var open: Boolean
    var onClose: (Event, String) -> Unit
}