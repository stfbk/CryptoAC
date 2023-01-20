package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.box
import kotlinx.css.marginBottom
import kotlinx.css.padding
import kotlinx.css.px
import react.*
import styled.css
import styled.styledDiv
import styled.styledP

// TODO doc all
external interface CryptoACScoreProps : Props {
    /** Label to add above the score */
    var label: String

    /** minimum value of the score */
    var min: Int

    /** maximum value of the score */
    var max: Int

    /** the value of the score */
    var value: Int
}

/** A custom component for a radio group */
class CryptoACScore : RComponent<CryptoACScoreProps, State>() {
    override fun RBuilder.render() {

        styledDiv {
            css {
                padding = "0px 20px 10px 20px"
            }
            styledP {
                css {
                    marginBottom = 5.px
                }
                +props.label
            }
            box {
                attrs {
                    sx = JSON.parse(
                        """{
                        "padding":"0 0 0 0",
                        "height":"5px",
                        "width":"${getWidth(bar = true)}",
                        "float":"left",
                        "span":2,
                        "background-color":"${getColor()}",
                        "border-radius":"25px 0 0 25px"
                    }""".trimMargin()
                    )
                }
            }
            box {
                attrs {
                    sx = JSON.parse(
                        """{
                        "padding":"0 0 0 0",
                        "height":"5px",
                        "width":"${getWidth(bar = false)}",
                        "float":"left",
                        "span":2,
                        "background-color":"black",
                        "border-radius":"0px 25px 25px 0px"
                    }""".trimMargin()
                    )
                }
            }
        }
    }

    private fun getWidth(bar: Boolean): String {
        val percentage = (getValueOfBar() * 100).toInt()
        return if (bar) {
            "$percentage%"
        } else {
            "${100 - percentage}%"
        }
    }

    private fun getColor() = "hsl(${getValueOfBar() * 100},100%,50%)"

    private fun getValueOfBar(): Double {
        var valueOfBar = (props.value.toDouble()) / (props.max.toDouble() - props.min.toDouble())
        if (valueOfBar == 0.0) {
            valueOfBar = 0.01
        }
        if (valueOfBar == 1.0) {
            valueOfBar = 0.99
        }
        return valueOfBar
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACScore(handler: CryptoACScoreProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(CryptoACScore::class) {
            attrs(handler)
        }
    }!!
}
