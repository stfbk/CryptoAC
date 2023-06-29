package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.inputLabel
import eu.fbk.st.cryptoac.view.components.materialui.menuItem
import eu.fbk.st.cryptoac.view.components.materialui.select
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemProps
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemState
import js.core.Object
import org.w3c.dom.events.Event
import react.*
import react.dom.html.ReactHTML.div

external interface CryptoACSelectProps : Props {
    /** The label for the select object */
    var labelProp: String

    /** Whether the item should be disabled */
    var disabledProp: Boolean

    /** The default value of the select object */
    var defaultValueProp: String

    /** The list of possible values */
    var optionsProp: List<String>

    /** Invoked when the field changes value */
    var onChangeProp: (String) -> Unit

    /** Whether to add a first option "Select" */
    var selectOptionProp: Boolean

    /** The ID of the label */
    var labelIdProp: String

    /** The ID of the select object */
    var idProp: String

    /** The name of the select object */
    var nameProp: String

    /** The auto width property of the React component */
    var autoWidthProp: Boolean

    /** Further CSS properties to pass to the select object auto */
    var selectStyleProp: Object
}

data class CryptoACSelectState(
    /** Current value of select object */
    var valueState: String = "",

    /** Whether to render the value on change by user */
    var changedByUserState: Boolean = false,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true
) : State

// TODO doc
// TODO doc
fun getStateFromProps(
    props: CryptoACSelectProps,
    oldState: CryptoACSelectState = CryptoACSelectState(),
): CryptoACSelectState {
    var copy = false
    if (oldState.justMountedState || !oldState.changedByUserState) {
        oldState.valueState = props.defaultValueProp
        copy = true
    }
    oldState.changedByUserState = false
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}


/** A custom component for a paper */
val CryptoACSelect = FC<CryptoACSelectProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACSelectState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    div {
        if (props.labelIdProp != undefined && props.labelProp != undefined) {
            inputLabel {
                id = props.labelIdProp
                +props.labelProp
            }
        }
        select {
            disabled = props.disabledProp
            style = props.selectStyleProp
            autoWidth = props.autoWidthProp
            name = props.nameProp
            id = props.idProp
            inputProps = JSON.parse("""{ "name":"${props.nameProp}" }""".trimMargin())
            labelId = props.labelIdProp
            label = props.labelProp
            value = state.valueState
            onChange = { e: Event ->
                val newChoice = e.asDynamic().target.value as String
                props.onChangeProp(newChoice)
                state = state.copy(
                    changedByUserState = true,
                    valueState = newChoice
                )
            }
            if (props.selectOptionProp) {
                menuItem {
                    value = "Select"
                    +"Select"
                }
            }
            props.optionsProp.forEach {
                menuItem {
                    value = it
                    +it
                }
            }
        }
    }
}
