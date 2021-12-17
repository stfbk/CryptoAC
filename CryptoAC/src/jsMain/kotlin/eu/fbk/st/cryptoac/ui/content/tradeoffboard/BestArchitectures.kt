package eu.fbk.st.cryptoac.ui.content.tradeoffboard

import eu.fbk.st.cryptoac.ui.components.icons.faUndoAlt
import eu.fbk.st.cryptoac.ui.components.materialui.core.*
import kotlinx.css.*
import mu.KotlinLogging
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import styled.*

private val logger = KotlinLogging.logger {}

external interface BestArchitecturesProps : Props {
    /** The list of domains */
    var domains: List<String>

    /** Whether to display hybrid architectures or not */
    var hybrid: Boolean

    /** The list of architectures */
    var architectures: List<Architecture>

    /** The function to refresh the best architectures */
    var refreshBestArchitectures: (Event) -> Unit

    /** The algorithm selected by the user */
    var algorithm: Algorithm

    /** The scenario selected by the user */
    var scenario: Scenario
}

/** The best architectures computed by TradeOffBoard */
class BestArchitectures: RComponent<BestArchitecturesProps, State>() {
    override fun RBuilder.render() {

            paper {
            /** The title bar */
            styledDiv {
                css {
                    borderTopLeftRadius = 15.px
                    borderTopRightRadius = 15.px
                    padding = "5px"
                    backgroundColor = Color("#2980b9")
                    borderColor = Color("#2980b9")
                    color = Color("white")
                }
                styledSpan {
                    css {
                        marginLeft = 10.pct
                    }
                    +"Best Architectures"
                }

                styledDiv {
                    css {
                        float = Float.right
                    }
                    iconButton {
                        attrs {
                            size = "small"
                            label = "refresh"
                            color = "secondary"
                            onClick = { event ->  props.refreshBestArchitectures(event) }
                        }
                        child(createElement { faUndoAlt { } }!!)
                    }
                }
            }

            /**
             * The content is a table with as many columns as
             * domains (plus a column for the score) and one
             * row for each architecture to display.
             */
            styledTable {
                css {
                    borderCollapse = BorderCollapse.collapse
                    width = 100.pct
                }
                /** The first row contains the domains */
                styledThead {
                    css {
                        borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
                    }
                    tr {
                        props.domains.forEach {
                            styledTd {
                                css {
                                    padding = "4px"
                                }
                                +it
                            }
                        }
                        styledTd {
                            css {
                                padding = "4px"
                            }
                            +"Score"
                        }
                    }
                }

                tbody {
                    val architecturesToShow = props.architectures.filter { props.hybrid || !(it.hybrid) }
                    logger.info { "Showing ${architecturesToShow.size} architectures" }
                    architecturesToShow.forEachIndexed { architectureIndex, architecture ->
                        tr {
                            props.domains.forEachIndexed { domainIndex, domain ->
                                val entitiesInDomain = architecture.arcs[domain] ?: listOf()
                                styledTd {
                                    css {
                                        if (architectureIndex == 0) {
                                            paddingTop = 3.px
                                        } else if (architectureIndex == architecturesToShow.size - 1) {
                                            paddingBottom = 3.px
                                            if (domainIndex == 0) {
                                                borderBottomLeftRadius = 15.px
                                            }
                                        }
                                    }
                                    entitiesInDomain.forEach { entity ->
                                        child(entityIcon {
                                            src = getImageFromEntity(entity)
                                        })
                                    }
                                }
                            }


                            styledTd {
                                css {
                                    if (architectureIndex == 0) {
                                        paddingTop = 3.px
                                    } else if (architectureIndex == architecturesToShow.size - 1) {
                                        paddingBottom = 3.px
                                        borderBottomRightRadius = 15.px
                                    }
                                }
                                if (props.algorithm == Algorithm.AdHoc) {
                                    +architecture.requirementsScore.toString()
                                } else if (props.algorithm == Algorithm.Best) {
                                    architecture.arrayRequirementsScore.forEach {

                                        val score = it.value

                                        tooltip {
                                            attrs {
                                                title = it.key.replace("_", "-")
                                            }
                                            child(createElement {
                                                styledSpan {
                                                    css {
                                                        marginRight = 0.5.em
                                                        fontFamily = "Courier"
                                                        color = Color(
                                                            if (score < 0) {
                                                                "#c0392b"
                                                            } else if (score == 0) {
                                                                "black"
                                                            } else {
                                                                "#27ae60"
                                                            })
                                                    }
                                                    +"${(if (score >= 0) { "+" } else { "" })}$score"
                                                }
                                            }!!)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun bestArchitectures(handler: BestArchitecturesProps.() -> Unit): ReactElement {
    return createElement {
        child(BestArchitectures::class) {
            this.attrs(handler)
        }
    }!!
}

