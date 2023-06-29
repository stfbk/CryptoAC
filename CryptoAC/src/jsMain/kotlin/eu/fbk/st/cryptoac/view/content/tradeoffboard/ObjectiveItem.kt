package eu.fbk.st.cryptoac.view.content.tradeoffboard

import csstype.Color
import csstype.Padding
import csstype.TextAlign
import csstype.px
import emotion.react.css
import eu.fbk.st.cryptoac.view.components.custom.CryptoACSelect
import eu.fbk.st.cryptoac.view.components.custom.CryptoACTextField
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.td

external interface ObjectiveItemProps : Props {
    /** The default value of the objective */
    var defaultValueProp: Criteria

    /** Is this the last objective */
    var lastProp: Boolean

    /** The objective object */
    var criteriaProp: Criteria

    /** Handle the change of the weight value */
    var handleChangeWeightValueProp: (Int) -> Unit

    /** Handle the change of the threshold type */
    var handleChangeThresholdTypeProp: (Threshold) -> Unit

    /** Handle the change of the threshold value */
    var handleChangeThresholdValueProp: (Int) -> Unit

    /** Handle the change of the penalty value */
    var handleChangePenaltyValueProp: (Int) -> Unit
}

/** An objective item component */
val ObjectiveItem = FC<ObjectiveItemProps> { props ->

    /** The objective name */
    td {
        css {
            padding = Padding(10.px, 10.px)
            width = 160.px
            textAlign = TextAlign.left
            if (props.lastProp) {
                borderBottomLeftRadius = 15.px
            }
        }
        +props.criteriaProp.name.replace("_", "-")
    }

    /** The objective weight value */
    td {
        css {
            padding = Padding(10.px, 10.px)
        }
        div {
            css {
                color = Color("#000000")
            }
            CryptoACTextField {
                classNameProp = "darkTextField"
                defaultValueProp = props.defaultValueProp.weight.toString()
                typeProp = "Number"
                colorProp = "primary"
                onChangeProp = { it ->
                    val newWeight = it.toInt()
                    props.handleChangeWeightValueProp(newWeight)
                }
            }
        }
    }

    /** The objective threshold type */
    td {
        css {
            padding = Padding(10.px, 10.px)
        }
        CryptoACSelect {
            nameProp = "threshold"
            idProp = "threshold"
            optionsProp = Threshold.values().map { it.toString() }
            defaultValueProp = props.defaultValueProp.thresholdType.toString()
            onChangeProp = { e ->
                val newThresholdType = Threshold.valueOf(e)
                props.handleChangeThresholdTypeProp(newThresholdType)
            }
        }
    }

    /** The objective threshold value */
    td {
        css {
            padding = Padding(10.px, 10.px)
        }
        div {
            css {
                color = Color("#000000")
            }
            CryptoACTextField {
                defaultValueProp = props.defaultValueProp.thresholdValue.toString()
                typeProp = "Number"
                colorProp = "primary"
                disabledProp = props.criteriaProp.thresholdType == Threshold.None
                classNameProp = if (props.criteriaProp.thresholdType == Threshold.None) {
                    "greyTextField"
                } else {
                    "darkTextField"
                }
                classNameProp = if (props.criteriaProp.thresholdType == Threshold.None) {
                    "greyTextField"
                } else {
                    "darkTextField"
                }
                onChangeProp = { it ->
                    val newThreshold = it.toInt()
                    props.handleChangeThresholdValueProp(newThreshold)
                }
            }
        }
    }

    /** The objective penalty value */
    td {
        css {
            padding = Padding(10.px, 10.px)
            if (props.lastProp) {
                borderBottomRightRadius = 15.px
            }
        }
        div {
            css {
                color = Color("#000000")
            }
            CryptoACTextField {
                defaultValueProp = props.defaultValueProp.penalty.toString()
                typeProp = "Number"
                colorProp = "primary"
                disabledProp = props.criteriaProp.thresholdType == Threshold.None
                classNameProp = if (props.criteriaProp.thresholdType == Threshold.None) {
                    "greyTextField"
                } else {
                    "darkTextField"
                }
                onChangeProp = { it ->
                    val newPenalty = it.toInt()
                    props.handleChangePenaltyValueProp(newPenalty)
                }
            }
        }
    }
}
