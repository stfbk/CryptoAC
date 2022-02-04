package eu.fbk.st.cryptoac.view.sidebar

import eu.fbk.st.cryptoac.view.components.custom.cryptoACSelect
import eu.fbk.st.cryptoac.view.components.materialui.grid
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarContent
import eu.fbk.st.cryptoac.view.content.tradeoffboard.Algorithm
import eu.fbk.st.cryptoac.view.content.tradeoffboard.Metric
import eu.fbk.st.cryptoac.view.content.tradeoffboard.Scenario
import kotlinx.css.*
import react.*
import styled.css
import styled.styledDiv
import styled.styledP

external interface ConfigurationProps : Props {
    var handleChangeScenario: (Scenario) -> Unit
    var handleChangeAlgorithm: (Algorithm) -> Unit
    var handleChangeMetric: (Metric) -> Unit
    var currentScenario: Scenario
    var currentAlgorithm: Algorithm
    var currentMetric: Metric
}


/**
 * The React component containing the
 * options for selecting scenario,
 * algorithm and metric;
 */
class Configuration: RComponent<ConfigurationProps, State>() {

    override fun RBuilder.render() {

        proSidebarContent {

            styledP {
                css {
                    textAlign = TextAlign.center
                    marginBottom = 50.px
                }
                +"Configure TradeOffBoard"
            }

            styledDiv {
                css {
                    padding = "20px"
                }
                grid {
                    attrs {
                        container = true
                        spacing = 6
                    }
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            xl = 12
                        }
                        child(cryptoACSelect {
                            name = "scenario"
                            id = "scenario"
                            label = "Scenario"
                            labelId = "scenario-label"
                            autoWidth = true
                            selectStyle = JSON.parse("""{
                                "width": "100%"
                            }""".trimMargin())
                            options = Scenario.values().map { it.toString() }
                            defaultValue = props.currentScenario.toString()
                            onChange = { it -> props.handleChangeScenario(Scenario.valueOf(it)) }
                        })
                    }
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            xl = 12
                        }
                        child(cryptoACSelect {
                            name = "algorithm"
                            id = "algorithm"
                            label = "Algorithm"
                            labelId = "algorithm-label"
                            autoWidth = true
                            selectStyle = JSON.parse("""{
                                "width": "100%"
                            }""".trimMargin())
                            options = Algorithm.values().map { it.toString() }
                            defaultValue = props.currentAlgorithm.toString()
                            onChange = { it -> props.handleChangeAlgorithm(Algorithm.valueOf(it)) }
                        })
                    }
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            xl = 12
                        }
                        child(cryptoACSelect {
                            name = "metric"
                            id = "metric"
                            label = "Metric"
                            labelId = "metric-label"
                            autoWidth = true
                            selectStyle = JSON.parse("""{
                                "width": "100%"
                            }""".trimMargin())
                            options = Metric.values().map { it.toString() }
                            defaultValue = props.currentMetric.toString()
                            onChange = { it -> props.handleChangeMetric(Metric.valueOf(it)) }
                        })
                    }
                }
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