package eu.fbk.st.cryptoac.ui.content.tradeoffboard

import eu.fbk.st.cryptoac.ui.components.custom.CryptoACRadioOption
import eu.fbk.st.cryptoac.ui.components.custom.cryptoACRadioGroup
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import org.w3c.dom.HTMLInputElement
import react.*
import react.dom.td
import styled.css
import styled.styledDiv
import styled.styledTd

external interface TrustAssumptionsLikelihoodProps : Props {
    /** The default value of the likelihood */
    var defaultValue: Likelihood

    /** The domain related to the attacker */
    var domain : String

    /** The attacker */
    var attacker : Attackers

    /** Change likelihood for the attacker in the given domain */
    var handleChangeLikelihood : (String, Attackers, Likelihood) -> Unit

    /** Is this the last element */
    var last : Boolean
}

external interface TrustAssumptionsLikelihoodState : State {
    /** The current likelihood for the attacker */
    var currentLikelihood: Likelihood
}

/** A trust assumptions likelihood component with a radio group */
class TrustAssumptionsLikelihood: RComponent<TrustAssumptionsLikelihoodProps, TrustAssumptionsLikelihoodState>() {
    override fun RBuilder.render() {
        td {
            +props.attacker.toString()
        }
        styledTd {
            css {
                color = Color(when (state.currentLikelihood) {
                    Likelihood.High -> "#c0392b"
                    Likelihood.Medium-> "#f39c12"
                    Likelihood.Low -> "#27ae60"
                    Likelihood.None -> "#bdc3c7"
                })
                width = 100.px
            }
            +state.currentLikelihood.toString()
        }
        styledTd {
            css {
                if (props.last) {
                    borderBottomRightRadius = 15.px
                }
            }
            styledDiv {

                key = props.domain

                css {
                    display = Display.block
                }
                child(cryptoACRadioGroup {
                    row = true
                    defaultValue = props.defaultValue.toString()
                    options = Likelihood.values().map {
                        CryptoACRadioOption("", it.toString(), "primary")
                    }
                    onChange = { event ->
                        val newLikelihood = Likelihood.valueOf((event.target as HTMLInputElement).value)
                        setState {
                            currentLikelihood = newLikelihood
                        }
                        props.handleChangeLikelihood(props.domain, props.attacker, newLikelihood)
                    }
                })
            }
        }
    }

    override fun TrustAssumptionsLikelihoodState.init() {
        currentLikelihood = Likelihood.High
        MainScope().launch {
            setState {
                currentLikelihood = props.defaultValue
            }
        }
    }

    /** Re-render only if the default value is different from the previous default value */
    override fun shouldComponentUpdate(nextProps: TrustAssumptionsLikelihoodProps, nextState: TrustAssumptionsLikelihoodState): Boolean {
        return (nextProps.defaultValue != props.defaultValue || nextState.currentLikelihood != state.currentLikelihood)
    }
}

/** Extend RBuilder for easier use of this React component */
fun trustAssumptionsLikelihood(handler: TrustAssumptionsLikelihoodProps.() -> Unit): ReactElement {
    return createElement {
        child(TrustAssumptionsLikelihood::class) {
            this.attrs(handler)
        }
    }!!
}