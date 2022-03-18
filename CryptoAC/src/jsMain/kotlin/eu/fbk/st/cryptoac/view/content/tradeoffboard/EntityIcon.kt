package eu.fbk.st.cryptoac.view.content.tradeoffboard

import kotlinx.css.*
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.attrs
import styled.css
import styled.styledImg

external interface EntityIconProps : Props {
    /** The src of the image of this entity icon */
    var src: String

    /** The entity this icon is representing */
    var entity: Entities

    /** The domain assigned to this entity */
    var domain: Domains

    /** The function to invoke when the icon is clicked */
    var onClick: (Entities, Domains, Boolean) -> Unit
}

external interface EntityIconState : State {
    /** The current opacity for this icon */
    var opacity: Double
}

/** A entity icon for the pre-filters component */
class EntityIcon: RComponent<EntityIconProps, EntityIconState>() {
    override fun RBuilder.render() {
        styledImg {
            css {
                verticalAlign = VerticalAlign.middle
                opacity = state.opacity
                padding = "3px"
            }
            attrs {
                width = "30em"
                height = "30em"
                src = props.src
                onClickFunction = { _ ->
                    if (props.onClick != undefined) {
                        setState {
                            opacity = if (opacity == 1.0) {
                                props.onClick(props.entity, props.domain, false)
                                0.5
                            } else {
                                props.onClick(props.entity, props.domain, true)
                                1.0
                            }
                        }
                    }
                }
            }
        }
    }

    override fun EntityIconState.init() {
        opacity = 1.0
    }
}

/** Extend RBuilder for easier use of this React component */
fun entityIcon(handler: EntityIconProps.() -> Unit): ReactElement {
    return createElement {
        child(EntityIcon::class) {
            this.attrs(handler)
        }
    }!!
}