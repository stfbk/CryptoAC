@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("Radio")
external val radio: RClass<RadioProps>

external interface RadioProps : RProps {
    var color: String
    var checked: Boolean
}
