@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("Tooltip")
external val tooltip: RClass<TooltipProps>

external interface TooltipProps : RProps {
    var title: String
}