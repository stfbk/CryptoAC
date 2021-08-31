@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("IconButton")
external val iconButton: RClass<IconButtonProps>

external interface IconButtonProps : RProps {
    var children: ReactElement
    var color: String
    var label: String
    var component: String
    var size: String
    var onClick: (Event) -> Unit
}