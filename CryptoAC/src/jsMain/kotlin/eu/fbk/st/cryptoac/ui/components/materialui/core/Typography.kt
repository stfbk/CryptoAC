@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("Typography")
external val typography: RClass<TypographyProps>

external interface TypographyProps : RProps {
    var variant: String
    var id: String
    var component: String
    // TODO
}