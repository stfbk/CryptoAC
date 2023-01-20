@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import react.*

@JsName("FormControlLabel")
external val formControlLabel: ComponentClass<FormControlLabelProps>

external interface FormControlLabelProps : Props {
    var value: String
    var control: ReactElement<Props>
    var label: String
    var labelPlacement: String
}
