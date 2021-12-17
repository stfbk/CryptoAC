package eu.fbk.st.cryptoac.ui.content.tradeoffboard

import eu.fbk.st.cryptoac.ui.components.materialui.core.*
import kotlinx.css.*
import react.*
import react.dom.*
import styled.*

external interface TrustAssumptionsProps : Props {
    /** The list of attackers */
    var attackers: LinkedHashMap<String, MutableList<Attacker>>

    /** Change the likelihood of an attacker */
    var handleChangeLikelihood : (String, Attackers, Likelihood) -> Unit
}

/** The trust assumptions of the TradeOffBoard */
class TrustAssumptions: RComponent<TrustAssumptionsProps, State>() {
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
                +"Trust Assumptions"
            }
            /**
             * The content is a grid with two columns:
             * - the name of the attacker
             * - the likelihood radio group
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
                            +"Attacker"
                        }
                        styledTd {
                            css {
                                padding = "4px"
                            }
                            attrs {
                                colSpan = "2"
                            }
                            +"Likelihood"
                        }

                    }
                }

                /** Each row contains the attackers and likelihoods */
                tbody {
                    val iterator = props.attackers.iterator()
                    while (iterator.hasNext()) {
                        val entry = iterator.next()
                        val domain = entry.key
                        val attackers = entry.value
                        tr {
                            styledTd {
                                css {
                                    paddingLeft = 10.px
                                    width = 160.px
                                    textAlign = TextAlign.left
                                    if (!iterator.hasNext()) {
                                        borderBottomLeftRadius = 15.px
                                    }
                                }
                                attrs {
                                    rowSpan = attackers.size.toString()
                                }
                                +domain
                            }
                            child(trustAssumptionsLikelihood {
                                this.defaultValue = Likelihood.High
                                this.last = attackers.size == 1 && !iterator.hasNext()
                                this.domain = domain
                                this.attacker =  attackers.first().attacker
                                this.handleChangeLikelihood = { domain, attacker, newLikelihood ->
                                    props.handleChangeLikelihood(domain, attacker, newLikelihood)
                                }
                            })

                        }
                        attackers.forEachIndexed { index, attacker ->
                            if (index != 0) {
                                tr {
                                    child(trustAssumptionsLikelihood {
                                        this.defaultValue = Likelihood.High
                                        this.last = index == attackers.size-1 && !iterator.hasNext()
                                        this.domain = domain
                                        this.attacker =  attacker.attacker
                                        this.handleChangeLikelihood = { domain, attacker, newLikelihood ->
                                            props.handleChangeLikelihood(domain, attacker, newLikelihood)
                                        }
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

/** Extend RBuilder for easier use of this React component */
fun trustAssumptions(handler: TrustAssumptionsProps.() -> Unit): ReactElement {
    return createElement {
        child(TrustAssumptions::class) {
            this.attrs(handler)
        }
    }!!
}