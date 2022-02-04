package eu.fbk.st.cryptoac

import kotlinext.js.Object

object Themes {
    /** Light grey color hex code */
    const val lightGreyColor = "#f7f7f7"

    /** Concrete color hex code */
    const val concreteColor = "#95a5a6"

    /** Grey color hex code */
    const val greyColor = "#676767"

    /** Purple color hex code */
    const val purpleColor = "#8e44ad"

    /** Wet Asphalt color hex code */
    const val wetAsphaltColor = "#34495e"

    /** Purple linear gradient color */
    const val purpleLinearGradient = "linear-gradient(to right, rgb(142, 68, 173), rgb(172, 98, 203))"

    /** Light blue linear gradient color */
    const val lightBlueLinearGradient = "linear-gradient(to right, rgb(3, 169, 244), rgb(33, 199, 255))"

    /** Amber linear gradient color */
    const val amberLinearGradient = "linear-gradient(to right, rgb(245, 183, 0), rgb(255, 193, 7))"

    /** Plain style for titles in CryptoAC papers */
    val plainPaperTitleStyle: Object = JSON.parse("""{
                                         "paddingTop": "5px",
                                         "paddingBottom": "5px",
                                         "color": "#3C4858"
                                     }""".trimMargin())

    /** Large plain style for titles in CryptoAC papers */
    val largePlainPaperTitleStyle: Object = JSON.parse("""{
                                         "paddingTop": "20px",
                                         "paddingBottom": "20px",
                                         "color": "#3C4858"
                                     }""".trimMargin())

    /** Decorated style for titles in CryptoAC papers */
    val decoratedPaperTitleStyle: Object = JSON.parse("""{
                                         "marginTop": "2%",
                                         "borderRadius": "2px",
                                         "width": "96%",
                                         "transform": "translate(2%, -20%)",
                                         "backgroundImage": "$purpleLinearGradient",
                                         "paddingTop": "5px",
                                         "paddingBottom": "5px",
                                         "color": "white"
                                     }""".trimMargin())
}