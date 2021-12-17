@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("Button")
external val button: ComponentClass<ButtonProps>

external interface ButtonProps : Props {
    var variant: String
    var component: String
}