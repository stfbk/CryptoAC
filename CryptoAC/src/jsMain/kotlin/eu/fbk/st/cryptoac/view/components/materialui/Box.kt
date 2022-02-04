@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import kotlinext.js.Object
import react.*

@JsName("Box")
external val box: ComponentClass<BoxProps>

external interface BoxProps : Props {
    var sx: Object
}