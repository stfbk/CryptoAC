package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.switch
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemProps
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemState
import react.*

external interface CryptoACSwitchProps : Props {
    /** The size of the switch */
    var sizeProp: String

    /** Default value for the input */
    var defaultValueProp: Boolean

    /** "primary" or "secondary" color */
    var colorProp: String

    /** Invoked when the field changes value */
    var onChangeProp: (Boolean) -> Unit
}

data class CryptoACSwitchState(
    /** The value of the switch */
    var valueState: Boolean = false,

    /** Whether to render the value on change by user */
    var changedByUserState: Boolean = false,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true
) : State

// TODO doc
fun getStateFromProps(
    props: CryptoACSwitchProps,
    oldState: CryptoACSwitchState = CryptoACSwitchState(),
): CryptoACSwitchState {
    var copy = false
    if (oldState.justMountedState || !oldState.changedByUserState) {
        oldState.valueState = props.defaultValueProp
        copy = true
    }
    oldState.changedByUserState = false
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}

/** A custom component for a radio group */
val CryptoACSwitch = FC<CryptoACSwitchProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACSwitchState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    switch {
        checked = state.valueState
        color = props.colorProp
        size = props.sizeProp
        onChange = {
            props.onChangeProp(!state.valueState)
            state = state.copy(
                changedByUserState = true,
                valueState = !state.valueState
            )
        }
    }
}
