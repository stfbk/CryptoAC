@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import react.*

@JsName("Grid")
external val grid: ComponentClass<GridProps>

external interface GridProps : Props {
    var container: Boolean
    var item: Boolean

    /** (extra-small): 0px or larger */
    var xs: Int

    /** sm (small): 600px or larger */
    var sm: Int

    /** md (medium): 960px or larger */
    var md: Int

    /** lg (large): 1280px or larger */
    var lg: Int

    /** xl (extra-large): 1920px or larger */
    var xl: Int

    var spacing: Int
}
