@file:JsModule("react-icons/fa")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.icons

import js.core.Object
import react.*

@JsName("FaShoppingCart")
external val faShoppingCart: ComponentClass<FaShoppingCartProps>

external interface FaShoppingCartProps : Props {
    var style: Object
}
