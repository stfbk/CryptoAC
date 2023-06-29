package eu.fbk.st.cryptoac.view

import js.core.Object

object Themes {
    /** Light grey color hex code */
    const val lightGreyColor = "#f7f7f7"

    /** Concrete color hex code */
    const val concreteColor = "#95a5a6"

    /** Grey color hex code */
    const val greyColor = "#676767"

    /** Wet Asphalt color hex code */
    const val wetAsphaltColor = "#34495e"

    /** Purple linear gradient color */
    const val purpleLinearGradient = "linear-gradient(to right, rgb(142, 68, 173), rgb(172, 98, 203))"

    /** Plain style for titles in CryptoAC papers */
    val plainPaperTitleStyle: Object = JSON.parse(
        """{
                                         "paddingTop": "5px",
                                         "paddingBottom": "5px",
                                         "color": "#3C4858"
                                     }""".trimMargin()
    )

    /** Large plain style for titles in CryptoAC papers */
    val largePlainPaperTitleStyle: Object = JSON.parse(
        """{
                                         "paddingTop": "20px",
                                         "paddingBottom": "20px",
                                         "color": "#3C4858"
                                     }""".trimMargin()
    )
}
