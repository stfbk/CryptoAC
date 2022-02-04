@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import react.*

@JsName("Radio")
external val radio: ComponentClass<RadioProps>

external interface RadioProps : Props {
    var color: String
    var disabled: Boolean
    var checked: Boolean
    var size: String  // either "small" or "medium"
}
