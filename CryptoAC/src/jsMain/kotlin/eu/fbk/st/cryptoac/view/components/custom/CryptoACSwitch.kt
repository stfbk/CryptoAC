package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.switch
import react.*

external interface CryptoACSwitchProps : Props {
    /** The size of the switch */
    var size: String

    /** Default value for the input */
    var defaultValue: Boolean

    /** "primary" or "secondary" color */
    var color: String

    /** Invoked when the field changes value */
    var onChange: (Boolean) -> Unit
}

external interface CryptoACSwitchState : State {
    /** The value of the switch */
    var value: Boolean

    /** Whether to render the value on change by user */
    var changedByUser: Boolean

    /** Whether the component was just mounted */
    var justMounted: Boolean
}

/** A custom component for a radio group */
class CryptoACSwitch: RComponent<CryptoACSwitchProps, CryptoACSwitchState>() {
    override fun RBuilder.render() {

        switch {
            attrs {
                checked = state.value
                color = props.color
                size = props.size
                onChange = {
                    props.onChange(!state.value)
                    setState {
                        changedByUser = true
                        value = !value
                    }
                }
            }
        }
    }

    override fun CryptoACSwitchState.init() {
        justMounted = true
        changedByUser = false

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACSwitch::class.js.asDynamic().getDerivedStateFromProps = {
                props: CryptoACSwitchProps, state: CryptoACSwitchState ->
            if (state.justMounted || !state.changedByUser) {
                state.value = if (props.defaultValue == undefined) false else props.defaultValue
            }
            state.changedByUser = false
            state.justMounted = false
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACSwitch(handler: CryptoACSwitchProps.() -> Unit): ReactElement {
    return createElement {
        child(CryptoACSwitch::class) {
            this.attrs(handler)
        }
    }!!
}