package eu.fbk.st.cryptoac.ui.content.tradeoffboard

import eu.fbk.st.cryptoac.ui.components.custom.cryptoACTextField
import eu.fbk.st.cryptoac.ui.components.materialui.core.menuItem
import eu.fbk.st.cryptoac.ui.components.materialui.core.select
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import react.*
import styled.css
import styled.styledDiv
import styled.styledTd

external interface RequirementItemProps : Props {
    /** The default value of the requirement */
    var defaultValue: Requirement

    /** Is this the last requirement */
    var last: Boolean

    /** The requirement object */
    var requirement: Requirement

    /** Handle the change of the weight value */
    var handleChangeWeightValue: (Int) -> Unit

    /** Handle the change of the threshold type */
    var handleChangeThresholdType: (Threshold) -> Unit

    /** Handle the change of the threshold value */
    var handleChangeThresholdValue: (Int) -> Unit

    /** Handle the change of the penalty value */
    var handleChangePenaltyValue: (Int) -> Unit
}


external interface RequirementItemState : State {
    /** The current threshold type for this requirement */
    var thresholdType: Threshold
}

/** A requirement item component */
class RequirementItem: RComponent<RequirementItemProps, RequirementItemState>() {
    override fun RBuilder.render() {

        /** The requirement name */
        styledTd {
            css {
                padding = "10px"
                width = 160.px
                textAlign = TextAlign.left
                if (props.last) {
                    borderBottomLeftRadius = 15.px
                }
            }
            +props.requirement.name.replace("_", "-")
        }

        /** The requirement weight value */
        styledTd {
            css {
                padding = "10px"
            }
            styledDiv {
                css {
                    color = Color("#000000")
                }
                child(cryptoACTextField {
                    className = "darkTextField"
                    defaultValue = props.defaultValue.weight.toString()
                    type = "Number"
                    color = "primary"
                    onChange = { it ->
                        val newWeight = it.toInt()
                        props.handleChangeWeightValue(newWeight)
                    }
                })
            }
        }

        /** The requirement threshold type */
        styledTd {
            css {
                padding = "10px"
            }
            select {
                attrs {
                    label = "Threshold type"
                    defaultValue = props.defaultValue.thresholdType.toString()
                    onChange = { e ->
                        val newThresholdType = Threshold.valueOf(e.asDynamic().target.value as String)
                        props.handleChangeThresholdType(newThresholdType)
                        setState {
                            thresholdType = newThresholdType
                        }
                    }
                }
                Threshold.values().forEach {
                    menuItem {
                        attrs {
                            value = it.toString()
                        }
                        +it.toString()
                    }
                }

            }
        }

        /** The requirement threshold value */
        styledTd {
            css {
                padding = "10px"
            }
            styledDiv {
                css {
                    color = Color("#000000")
                }
                child(cryptoACTextField {
                    defaultValue = props.defaultValue.thresholdValue.toString()
                    type = "Number"
                    color = "primary"
                    disabled = state.thresholdType == Threshold.None
                    className = if (state.thresholdType == Threshold.None) {
                        "greyTextField"
                    } else {
                        "darkTextField"
                    }
                    className = if (state.thresholdType == Threshold.None) {
                        "greyTextField"
                    } else {
                        "darkTextField"
                    }
                    onChange = { it ->
                        val newThreshold = it.toInt()
                        props.handleChangeThresholdValue(newThreshold)
                    }
                })
            }
        }

        /** The requirement penalty value */
        styledTd {
            css {
                padding = "10px"
                if (props.last) {
                    borderBottomRightRadius = 15.px
                }
            }
            styledDiv {
                css {
                    color = Color("#000000")
                }
                child(cryptoACTextField {
                    defaultValue = props.defaultValue.penalty.toString()
                    type = "Number"
                    color = "primary"
                    disabled = state.thresholdType == Threshold.None
                    className = if (state.thresholdType == Threshold.None) {
                        "greyTextField"
                    } else {
                        "darkTextField"
                    }
                    onChange = { it ->
                        val newPenalty = it.toInt()
                        props.handleChangePenaltyValue(newPenalty)
                    }
                })
            }
        }
    }

    override fun RequirementItemState.init() {
        MainScope().launch {
            setState {
                thresholdType = props.defaultValue.thresholdType
            }
        }
    }

    /** Re-render only if the default value is different from the previous default value */
    override fun shouldComponentUpdate(nextProps: RequirementItemProps, nextState: RequirementItemState): Boolean {
        return (nextProps.defaultValue != props.defaultValue)
    }
}

/** Extend RBuilder for easier use of this React component */
fun requirementItem(handler: RequirementItemProps.() -> Unit): ReactElement {
    return createElement {
        child(RequirementItem::class) {
            this.attrs(handler)
        }
    }!!
}