@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("InputLabel")
external val inputLabel: ComponentClass<InputLabelProps>

external interface InputLabelProps : Props {
    var id: String
}
