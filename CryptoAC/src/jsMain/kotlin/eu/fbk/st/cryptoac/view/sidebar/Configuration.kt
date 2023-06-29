package eu.fbk.st.cryptoac.view.sidebar

import csstype.Padding
import csstype.number
import csstype.px
import emotion.react.css
import eu.fbk.st.cryptoac.view.components.custom.CryptoACSelect
import eu.fbk.st.cryptoac.view.components.materialui.grid
import eu.fbk.st.cryptoac.view.content.tradeoffboard.Algorithm
import eu.fbk.st.cryptoac.view.content.tradeoffboard.Objective
import eu.fbk.st.cryptoac.view.content.tradeoffboard.Scenario
import react.*
import react.dom.html.ReactHTML.div

external interface ConfigurationProps : Props {
    // TODO doc
    var handleChangeScenarioProp: (Scenario) -> Unit
    var handleChangeAlgorithmProp: (Algorithm) -> Unit
    var handleChangeObjectiveProp: (Objective) -> Unit
    var currentScenarioProp: Scenario
    var currentAlgorithmProp: Algorithm
    var currentObjectiveProp: Objective
}

/**
 * The React component containing the
 * options for selecting scenario,
 * algorithm and objective;
 */
val Configuration = FC<ConfigurationProps> { props ->

    div {
        css {
            flex = number(1.0)
            flexGrow = number(1.0)
        }

        /** May not be useful after all */
//        p {
//            css {
//                textAlign = TextAlign.center
//                marginBottom = 50.px
//            }
//            +"Configure TradeOffBoard"
//        }

        div {
            css {
                padding = Padding(20.px, 20.px)
            }
            grid {
                container = true
                spacing = 6
                grid {
                    item = true
                    xs = 12
                    xl = 12
                    CryptoACSelect {
                        nameProp = "scenario"
                        idProp = "scenario"
                        labelProp = "Scenario"
                        labelIdProp = "scenario-label"
                        autoWidthProp = true
                        selectStyleProp = JSON.parse(
                            """{
                        "width": "100%"
                    }""".trimMargin()
                        )
                        optionsProp = Scenario.values().map { it.toString() }
                        defaultValueProp = props.currentScenarioProp.toString()
                        onChangeProp = { it -> props.handleChangeScenarioProp(Scenario.valueOf(it)) }
                    }
                }
                grid {
                    item = true
                    xs = 12
                    xl = 12
                    CryptoACSelect {
                        nameProp = "algorithm"
                        idProp = "algorithm"
                        labelProp = "Algorithm"
                        labelIdProp = "algorithm-label"
                        autoWidthProp = true
                        selectStyleProp = JSON.parse(
                            """{
                        "width": "100%"
                    }""".trimMargin()
                        )
                        optionsProp = Algorithm.values().map { it.toString() }
                        defaultValueProp = props.currentAlgorithmProp.toString()
                        onChangeProp = { it -> props.handleChangeAlgorithmProp(Algorithm.valueOf(it)) }
                    }
                }
                grid {
                    item = true
                    xs = 12
                    xl = 12
                    CryptoACSelect {
                        nameProp = "objective"
                        idProp = "objective"
                        labelProp = "Objective"
                        labelIdProp = "objective-label"
                        autoWidthProp = true
                        selectStyleProp = JSON.parse(
                            """{
                        "width": "100%"
                    }""".trimMargin()
                        )
                        optionsProp = Objective.values().map { it.toString() }
                        defaultValueProp = props.currentObjectiveProp.toString()
                        onChangeProp = { it -> props.handleChangeObjectiveProp(Objective.valueOf(it)) }
                    }
                }
            }
        }
    }
}