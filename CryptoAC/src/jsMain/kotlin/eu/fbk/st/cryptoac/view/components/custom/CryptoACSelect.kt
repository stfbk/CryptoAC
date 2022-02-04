package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.inputLabel
import eu.fbk.st.cryptoac.view.components.materialui.menuItem
import eu.fbk.st.cryptoac.view.components.materialui.select
import kotlinext.js.Object
import react.*

external interface CryptoACSelectProps : Props {
    /** The label for the select object */
    var label: String

    /** The default value of the select object */
    var defaultValue: String

    /** The list of possible values */
    var options: List<String>

    /** Invoked when the field changes value */
    var onChange: (String) -> Unit

    /** Whether to add a first option "Select" */
    var selectOption: Boolean

    /** The ID of the label */
    var labelId: String

    /** The ID of the select object */
    var id: String

    /** The name of the select object */
    var name: String

    /** The auto width property of the React component */
    var autoWidth: Boolean

    /** Further CSS properties to pass to the select object auto */
    var selectStyle: Object
}

external interface CryptoACSelectState : State {
    /** Current value of select object */
    var value: String

    /** Whether to render the value on change by user */
    var changedByUser: Boolean

    /** Whether the component was just mounted */
    var justMounted: Boolean
}

/** A custom component for a paper */
class CryptoACSelect: RComponent<CryptoACSelectProps, CryptoACSelectState>() {
    override fun RBuilder.render() {

        if (props.labelId != undefined && props.label != undefined) {
            inputLabel {
                attrs {
                    id = props.labelId
                }
                +props.label
            }
        }
        select {
            attrs {
                style = props.selectStyle
                autoWidth = props.autoWidth
                name = props.name
                id = props.id
                inputProps = JSON.parse("""{ "name":"${props.name}" }""".trimMargin())
                labelId = props.labelId
                label = props.label
                value = state.value
                onChange = { e ->
                    val newChoice = e.asDynamic().target.value as String
                    setState {
                        value = newChoice
                        changedByUser = true
                    }
                    props.onChange(newChoice)
                }
            }
            if (props.selectOption) {
                menuItem {
                    attrs {
                        value = "Select"
                    }
                    +"Select"
                }
            }
            props.options.forEach {
                menuItem {
                    attrs {
                        value = it
                    }
                    +it
                }
            }
        }
    }

    override fun CryptoACSelectState.init() {
        justMounted = true
        changedByUser = false

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACSelect::class.js.asDynamic().getDerivedStateFromProps = {
                props: CryptoACSelectProps, state: CryptoACSelectState ->
            if (state.justMounted || !state.changedByUser) {
                state.value = if (props.defaultValue == undefined) props.options.first() else props.defaultValue
            }
            state.changedByUser = false
            state.justMounted = false
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACSelect(handler: CryptoACSelectProps.() -> Unit): ReactElement {
    return createElement {
        child(CryptoACSelect::class) {
            attrs(handler)
        }
    }!!
}

