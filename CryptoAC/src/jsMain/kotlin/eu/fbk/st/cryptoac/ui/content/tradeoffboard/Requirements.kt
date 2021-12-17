package eu.fbk.st.cryptoac.ui.content.tradeoffboard

import eu.fbk.st.cryptoac.ui.components.materialui.core.*
import kotlinx.css.*
import react.*
import react.dom.*
import styled.*

external interface RequirementsProps : Props {
    /** The title of the paper */
    var title: String

    /** The list of requirements */
    var requirements: List<Requirement>

    /** Handle the change of the weight of a requirement */
    var handleChangeWeightValue : (String, Int) -> Unit

    /** Handle the change of the threshold type of a requirement */
    var handleChangeThresholdType : (String, Threshold) -> Unit

    /** Handle the change of the threshold value of a requirement */
    var handleChangeThresholdValue : (String, Int) -> Unit

    /** Handle the change of the penalty of a requirement */
    var handleChangePenaltyValue : (String, Int) -> Unit
}

/** The requirements */
class Requirements: RComponent<RequirementsProps, State>() {
    override fun RBuilder.render() {

        paper {
            /** The title bar */
            styledDiv {
                css {
                    borderTopLeftRadius = 15.px
                    borderTopRightRadius = 15.px
                    padding = "5px"
                    backgroundColor = Color("#343a40")
                    borderColor = Color("#343a40")
                    color = Color("white")
                }
                +props.title
            }
            /**
             * The content is a table with five columns:
             * - the name of the requirement
             * - the weight value
             * - the threshold type
             * - the threshold value
             * - the penalty value
             */

            styledTable {
                css {
                    borderCollapse = BorderCollapse.collapse
                    width = 100.pct
                }

                /** The first row contains the headers */
                styledThead {
                    css {
                        borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
                    }
                    tr {
                        styledTd {
                            css {
                                padding = "4px"
                            }
                        }
                        styledTd {
                            css {
                                padding = "4px"
                            }
                            +"Weight"
                        }
                        styledTd {
                            css {
                                padding = "4px"
                            }
                            +"Type"
                        }
                        styledTd {
                            css {
                                padding = "4px"
                            }
                            +"Threshold"
                        }
                        styledTd {
                            css {
                                padding = "4px"
                            }
                            +"Penalty"
                        }
                    }
                }

                /** Each row contains the attackers and likelihoods */
                tbody {
                    props.requirements.forEachIndexed { index, req ->
                        key = req.name
                        tr {
                            child(requirementItem {
                                defaultValue = Requirement(req.name)
                                last = index == props.requirements.size-1
                                requirement = req
                                handleChangeWeightValue = { weight ->
                                    props.handleChangeWeightValue(req.name, weight)
                                }
                                handleChangeThresholdType = { type ->
                                    props.handleChangeThresholdType(req.name, type)
                                }
                                handleChangeThresholdValue = { threshold ->
                                    props.handleChangeThresholdValue(req.name, threshold)
                                }
                                handleChangePenaltyValue = { penalty ->
                                    props.handleChangePenaltyValue(req.name, penalty)
                                }
                            })
                        }
                    }
                }
            }
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun requirements(handler: RequirementsProps.() -> Unit): ReactElement {
    return createElement {
        child(Requirements::class) {
            this.attrs(handler)
        }
    }!!
}