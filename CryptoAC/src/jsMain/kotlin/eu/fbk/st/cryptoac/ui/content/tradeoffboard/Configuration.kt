package eu.fbk.st.cryptoac.ui.content.tradeoffboard

import eu.fbk.st.cryptoac.ui.components.materialui.core.*
import kotlinx.css.*
import react.*
import styled.css
import styled.styledDiv

external interface ConfigurationProps : Props {
    /** Change scenario (choose among, e.g., CLOUD, MQTT) */
    var handleChangeScenario : (Scenario) -> Unit

    /** Change algorithm (choose among, e.g., ADHOC, BEST) */
    var handleChangeAlgorithm : (Algorithm) -> Unit

    /** Change algorithm (choose among, e.g., GOALS, PROTECTION) */
    var handleChangeMetric : (Metric) -> Unit
}


/** The configuration of the TradeOffBoard */
class Configuration: RComponent<ConfigurationProps, State>() {
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
                +"Configuration"
            }
            /**
             * The content is a grid with three columns to allow users to choose:
             * - scenario (first column)
             * - algorithm (second column)
             * - metric (third column)
             */

            /** The first row contains the three titles */
            grid {
                attrs {
                    container = true
                    spacing = 1
                }
                grid {
                    attrs {
                        item = true
                        xs = 12
                        sm = 4
                    }
                    +"Scenario"
                }
                grid {
                    attrs {
                        item = true
                        xs = 12
                        sm = 4
                    }
                    +"Algorithm"
                }
                grid {
                    attrs {
                        item = true
                        xs = 12
                        sm = 4
                    }
                    +"Metric"
                }
            }
            styledDiv {
                css {
                    borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
                }
            }

            /** The second row contains the three radio groups */
            grid {

                attrs {
                    container = true
                    spacing = 1
                }
                child(configurationItem {
                    attrs {
                        name = "Scenario"
                        values = Scenario.values().map { it.toString() }
                        defaultValue = Scenario.CLOUD.toString()
                        handleChangeChoice = { it -> props.handleChangeScenario(Scenario.valueOf(it)) }
                    }
                })
                child(configurationItem {
                    attrs {
                        name = "Algorithm"
                        values = Algorithm.values().map { it.toString() }
                        defaultValue = Algorithm.Best.toString()
                        handleChangeChoice = { it -> props.handleChangeAlgorithm(Algorithm.valueOf(it)) }
                    }
                })
                child(configurationItem {
                    attrs {
                        name = "Metric"
                        values = Metric.values().map { it.toString() }
                        defaultValue = Metric.Goals.toString()
                        //disabled = props.algorithm == Algorithm.Best
                        handleChangeChoice = { it -> props.handleChangeMetric(Metric.valueOf(it)) }
                    }
                })
            }
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun configuration(handler: ConfigurationProps.() -> Unit): ReactElement {
    return createElement {
        child(Configuration::class) {
            this.attrs(handler)
        }
    }!!
}