@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("Button")
external val button: RClass<ButtonProps>

external interface ButtonProps : RProps {
    var variant: String
    var component: String
}