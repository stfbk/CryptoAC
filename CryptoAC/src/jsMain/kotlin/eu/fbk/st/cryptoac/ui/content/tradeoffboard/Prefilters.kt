package eu.fbk.st.cryptoac.ui.content.tradeoffboard

import eu.fbk.st.cryptoac.ui.components.custom.cryptoACSwitch
import eu.fbk.st.cryptoac.ui.components.materialui.core.*
import kotlinx.css.*
import react.*
import react.dom.*
import styled.*

external interface PreFiltersProps : Props {
    /** The list of assignments between entities and domains */
    var assignments: HashMap<String, List<String>>

    /** The list of entities */
    var entities: List<String>

    /** The list of domains */
    var domains: List<String>

    /** Toggle an assignments between accepted and not accepted */
    var handleToggleAssignment : (String, String, Boolean) -> Unit

    /** Toggle the hybrid value */
    var handleToggleHybrid : (Boolean) -> Unit
}

/** The pre-filters of the TradeOffBoard */
class PreFilters: RComponent<PreFiltersProps, State>() {
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
                styledSpan {
                    css {
                        marginLeft = 10.pct
                    }
                    +"Pre-Filters"
                }
                styledDiv {
                    css {
                        float = Float.right
                    }
                    +"Hybrid"
                    child(cryptoACSwitch {
                        size = "small"
                        defaultValue = false
                        color = "primary"
                        onChange = { newValue ->
                            props.handleToggleHybrid(newValue)
                        }
                    })
                }
            }
            /**
             * The content is a table with as many columns as
             * domains and one row for each entity.
             */

            styledTable {
                css {
                    borderCollapse = BorderCollapse.collapse
                    width = 100.pct
                }
                /** The first row contains the entities */
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
                        props.entities.forEach {
                            styledTd {
                                css {
                                    padding = "4px"
                                }
                                +it
                            }
                        }
                    }
                }

                /** The rows are for the domains */
                tbody {
                    props.domains.forEachIndexed { index, domain ->
                        tr {
                            styledTd {
                                css {
                                    paddingLeft = 10.px
                                    width = 160.px
                                    textAlign = TextAlign.left
                                    if (index == props.domains.size-1) {
                                        borderBottomLeftRadius = 15.px
                                    }
                                }
                                +domain
                            }
                            props.entities.forEachIndexed { entityIndex, entity ->
                                styledTd {
                                    css {
                                        if (index == 0) {
                                            paddingTop = 3.px
                                        } else if (index == props.domains.size-1) {
                                            paddingBottom = 3.px
                                        }
                                        if (index == props.domains.size-1 && entityIndex == props.entities.size-1) {
                                            borderBottomRightRadius = 15.px
                                        }
                                    }
                                    if (props.assignments[domain]!!.contains(entity)) {
                                        child(entityIcon {
                                            key = props.domains.toString()+props.entities.toString()
                                            src = getImageFromEntity(entity)
                                            onClick = { entity, domain, assignment ->
                                                props.handleToggleAssignment(entity, domain, assignment)
                                            }
                                            this.entity = entity
                                            this.domain = domain
                                        })
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
fun preFilters(handler: PreFiltersProps.() -> Unit): ReactElement {
    return createElement {
        child(PreFilters::class) {
            this.attrs(handler)
        }
    }!!
}