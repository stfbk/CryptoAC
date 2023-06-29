package eu.fbk.st.cryptoac.view.content.tradeoffboard

import csstype.Color
import csstype.Display
import csstype.px
import emotion.react.css
import eu.fbk.st.cryptoac.view.components.custom.CryptoACRadioGroup
import eu.fbk.st.cryptoac.view.components.custom.CryptoACRadioOption
import org.w3c.dom.HTMLInputElement
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.td

external interface TrustAssumptionsLikelihoodProps : Props {
    /** The default value of the likelihood */
    var defaultLikelihoodProp: Likelihood

    /** The domain related to the attacker */
    var domainProp: PointsOfAttack

    /** The attacker */
    var attackerProp: Attackers

    /** Change likelihood for the attacker in the given domain */
    var handleChangeLikelihoodProp: (PointsOfAttack, Attackers, Likelihood) -> Unit

    /** Is this the last element */
    var lastProp: Boolean
}

data class TrustAssumptionsLikelihoodState(
    /** The current likelihood for the attacker */
    var currentLikelihoodState: Likelihood = Likelihood.High,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true,

    /** Whether to render the value on change by user */
    var changedByUserState: Boolean = false,
) : State

// TODO doc
fun getStateFromProps(
    props: TrustAssumptionsLikelihoodProps,
    oldState: TrustAssumptionsLikelihoodState = TrustAssumptionsLikelihoodState(props.defaultLikelihoodProp),
): TrustAssumptionsLikelihoodState {
    var copy = false
    if (oldState.justMountedState || !oldState.changedByUserState) {
        oldState.currentLikelihoodState = props.defaultLikelihoodProp
        copy = true
    }
    oldState.changedByUserState = false
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}

/** A trust assumptions likelihood component with a radio group */
val TrustAssumptionsLikelihood = FC<TrustAssumptionsLikelihoodProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [TrustAssumptionsLikelihoodState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    td {
        +props.attackerProp.toString()
    }
    td {
        css {
            color = Color(
                when (state.currentLikelihoodState) {
                    Likelihood.High -> "#c0392b"
                    Likelihood.Medium -> "#f39c12"
                    Likelihood.Low -> "#27ae60"
                    Likelihood.None -> "#bdc3c7"
                }
            )
            width = 100.px
        }
        +state.currentLikelihoodState.toString()
    }
    td {
        css {
            if (props.lastProp) {
                borderBottomRightRadius = 15.px
            }
        }
        div {

            key = props.domainProp.toString()

            css {
                display = Display.block
            }
            CryptoACRadioGroup {
                rowProp = true
                defaultValueProp = props.defaultLikelihoodProp.toString()
                optionsProp = Likelihood.values().map {
                    CryptoACRadioOption("", it.toString(), "primary")
                }
                onChangeProp = { event ->
                    state.changedByUserState = true
                    val newLikelihood = Likelihood.valueOf((event.target as HTMLInputElement).value)
                    state = state.copy(
                        currentLikelihoodState = newLikelihood
                    )
                    props.handleChangeLikelihoodProp(props.domainProp, props.attackerProp, newLikelihood)
                    true
                }
            }
        }
    }
}
