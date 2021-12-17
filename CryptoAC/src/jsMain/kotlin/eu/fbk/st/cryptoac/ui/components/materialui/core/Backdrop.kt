@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("Backdrop")
external val backdrop: ComponentClass<BackdropProps>

external interface BackdropProps : Props {
    var open: Boolean
}