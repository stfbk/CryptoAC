@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("FormControlLabel")
external val formControlLabel: RClass<FormControlLabelProps>

external interface FormControlLabelProps : RProps {
    var value: String
    var control: ReactElement
    var label: String
    var labelPlacement: String
}
