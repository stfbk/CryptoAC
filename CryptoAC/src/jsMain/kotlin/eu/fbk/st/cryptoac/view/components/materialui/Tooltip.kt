@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import react.*

@JsName("Tooltip")
external val tooltip: ComponentClass<TooltipProps>

external interface TooltipProps : Props {
    var title: String
    var children: ReactElement<*>
}
