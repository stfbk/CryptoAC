package eu.fbk.st.cryptoac.view.components.custom

import csstype.Padding
import csstype.px
import emotion.react.css
import eu.fbk.st.cryptoac.view.components.materialui.box
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p

external interface CryptoACScoreProps : Props {
    /** Label to add above the score */
    var labelProp: String

    /** minimum value of the score */
    var minProp: Int

    /** maximum value of the score */
    var maxProp: Int

    /** the value of the score */
    var valueProp: Int
}

private fun getWidth(props: CryptoACScoreProps, bar: Boolean): String {
    val percentage = (getValueOfBar(props) * 100).toInt()
    return if (bar) {
        "$percentage%"
    } else {
        "${100 - percentage}%"
    }
}

private fun getColor(props: CryptoACScoreProps) = "hsl(${getValueOfBar(props) * 100},100%,50%)"

private fun getValueOfBar(props: CryptoACScoreProps): Double {
    var valueOfBar = (props.valueProp.toDouble()) / (props.maxProp.toDouble() - props.minProp.toDouble())
    if (valueOfBar == 0.0) {
        valueOfBar = 0.01
    }
    if (valueOfBar == 1.0) {
        valueOfBar = 0.99
    }
    return valueOfBar
}

/** A custom component for a radio group */
val CryptoACScore = FC<CryptoACScoreProps> { props ->

    div {
        css {
            padding = Padding(0.px, 20.px, 10.px, 20.px)
        }
        p {
            css {
                marginBottom = 5.px
            }
            +props.labelProp
        }
        box {
            sx = JSON.parse(
                """{
                "padding":"0 0 0 0",
                "height":"5px",
                "width":"${getWidth(props = props, bar = true)}",
                "float":"left",
                "span":2,
                "background-color":"${getColor(props = props)}",
                "border-radius":"25px 0 0 25px"
            }""".trimMargin()
            )
        }
        box {
            sx = JSON.parse(
                """{
                "padding":"0 0 0 0",
                "height":"5px",
                "width":"${getWidth(props = props, bar = false)}",
                "float":"left",
                "span":2,
                "background-color":"black",
                "border-radius":"0px 25px 25px 0px"
            }""".trimMargin()
            )
        }
    }
}
