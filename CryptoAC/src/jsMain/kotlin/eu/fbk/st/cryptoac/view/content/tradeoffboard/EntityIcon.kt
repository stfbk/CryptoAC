package eu.fbk.st.cryptoac.view.content.tradeoffboard

import csstype.*
import emotion.react.css
import react.*
import react.dom.html.ReactHTML.img

external interface EntityIconProps : Props {
    /** The src of the image of this entity icon */
    var srcProp: String

    /** The entity this icon is representing */
    var entityProp: Entities

    /** Is the icon selected by default */
    var defaultSelectedProp: Boolean

    /** The domain assigned to this entity */
    var domainProp: Domains

    /** The function to invoke when the icon is clicked */
    var onClickProp: (Entities, Domains, Boolean) -> Unit
}

data class EntityIconState(
    /** The current opacity for this icon */
    var opacityState: Double = 1.0,

    /** Is the icon currently selected */
    var selectedState: Boolean = true,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true,

    /** Whether to render the value on change by user */
    var changedByUserState: Boolean = false,
) : State

// TODO DOC
private fun getOpacity(selected: Boolean): Double {
    return if (selected) {
        1.0
    } else {
        0.5
    }
}

// TODO doc
fun getStateFromProps(
    props: EntityIconProps,
    oldState: EntityIconState = EntityIconState(),
): EntityIconState {
    var copy = false
    if (oldState.justMountedState || !oldState.changedByUserState) {
        oldState.opacityState = getOpacity(props.defaultSelectedProp)
        oldState.selectedState = props.defaultSelectedProp
        copy = true
    }
    oldState.changedByUserState = false
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}

/** An entity icon for the pre-filters component */
val EntityIcon = FC<EntityIconProps> {props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [EntityIconState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    img {
        css {
            verticalAlign = VerticalAlign.middle
            opacity = number(state.opacityState)
            padding = 3.px
        }
        width = 30.0
        height = 30.0
        src = props.srcProp
        onClick = { _ ->
            if (props.onClickProp != undefined) {
                state.changedByUserState = true
                state.selectedState = !state.selectedState
                state = state.copy( opacityState = getOpacity(state.selectedState) )
                props.onClickProp(props.entityProp, props.domainProp, state.selectedState)
            }
        }
    }
}
