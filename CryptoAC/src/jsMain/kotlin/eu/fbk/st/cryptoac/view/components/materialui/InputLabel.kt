@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import react.*

@JsName("InputLabel")
external val inputLabel: ComponentClass<InputLabelProps>

external interface InputLabelProps : Props {
    var id: String
}
