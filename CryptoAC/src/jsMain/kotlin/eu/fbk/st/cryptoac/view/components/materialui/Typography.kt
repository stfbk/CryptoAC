@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import kotlinx.js.Object
import react.*

@JsName("Typography")
external val typography: ComponentClass<TypographyProps>

external interface TypographyProps : Props {
    var style: Object
    var variant: String
    var id: String
    var component: String
    // TODO
}
