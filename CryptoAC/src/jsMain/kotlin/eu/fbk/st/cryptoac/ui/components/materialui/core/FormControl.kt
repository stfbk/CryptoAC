@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("FormControl")
external val formControl: ComponentClass<FormControlProps>
// TODO doc
external interface FormControlProps : Props {
    var className: String
    var variant: String
}
