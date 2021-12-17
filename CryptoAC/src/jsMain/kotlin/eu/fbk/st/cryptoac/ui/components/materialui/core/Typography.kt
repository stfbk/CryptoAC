@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("Typography")
external val typography: ComponentClass<TypographyProps>

external interface TypographyProps : Props {
    var variant: String
    var id: String
    var component: String
    // TODO
}