package eu.fbk.st.cryptoac.view

import csstype.*
import emotion.react.css
import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.API.LOGIN
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.view.Themes.largePlainPaperTitleStyle
import eu.fbk.st.cryptoac.view.components.custom.*
import io.ktor.client.*
import io.ktor.http.*
import react.*
import react.dom.html.ReactHTML.div

external interface LoginProps : Props {
    // TODO docs
    var handleSubmitLoginProp: (HttpMethod, String, HashMap<String, String>) -> Unit
    var handleDisplayAlertProp: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var httpClientProp: HttpClient
}

/** The login/logout React component */
val Login = FC<LoginProps> {props ->

    /** Full background image */
    div {
        css {
            height = 100.pct
            width = 100.pct
            backgroundImage = url("fbk_background.jpg")
            backgroundPositionX = BackgroundPositionX.center
            backgroundPositionY = BackgroundPositionY.center
            backgroundRepeat = BackgroundRepeat.noRepeat
            backgroundSize = BackgroundSize.cover
        }

        /** The div for the login form */
        div {
            css {
                position = Position.fixed
                top = 50.pct
                left = 50.pct
                transform = translate((-50).pct, (-50).pct)
                textAlign = TextAlign.center
                width = 35.pct
                height = 30.pct
            }

            CryptoACPaper {
                titleStyleProp = largePlainPaperTitleStyle
                titleTextProp = "Login to CryptoAC"
                titleVariantProp = "h5"
                setDividerProp = true
                dividerWidthProp = 80.pct
                childProp = FC<Props> {
                    div {
                        css {
                            marginLeft = 15.pct
                            marginRight = 15.pct
                        }

                        // TODO do not allow weak passwords, use a library or something similar

                        /** The login form */
                        CryptoACForm {
                            handleDisplayAlertProp = props.handleDisplayAlertProp
                            submitButtonTextProp = "Login"
                            methodProp = HttpMethod.Post
                            endpointProp = LOGIN
                            handleSubmitEventProp = { method, endpoint, values, _ ->
                                props.handleSubmitLoginProp(method, endpoint, values)
                            }
                            cryptoACFormFieldsProp = listOf(
                                listOf(
                                    CryptoACFormField(
                                        name = USERNAME,
                                        label = USERNAME,
                                        className = "darkTextField",
                                        type = InputType.text
                                    )
                                )
                            )
                        }
                    }
                }.create()
            }
        }
    }
}
