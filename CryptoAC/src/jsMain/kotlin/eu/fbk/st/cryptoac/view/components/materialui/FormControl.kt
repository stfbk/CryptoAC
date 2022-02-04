@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import react.*

@JsName("FormControl")
external val formControl: ComponentClass<FormControlProps>
// TODO doc
external interface FormControlProps : Props {
    var className: String
    var variant: String
}
