@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("CardHeader")
external val cardHeader: RClass<CardHeaderProps>

external interface CardHeaderProps : RProps {
    var title: String
}