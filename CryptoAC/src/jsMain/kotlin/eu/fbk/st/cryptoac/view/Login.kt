package eu.fbk.st.cryptoac.view

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.API.LOGIN
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.view.Themes.largePlainPaperTitleStyle
import eu.fbk.st.cryptoac.view.components.custom.*
import io.ktor.client.*
import io.ktor.http.*
import kotlinx.css.*
import kotlinx.css.properties.Transforms
import kotlinx.css.properties.translate
import react.*
import react.dom.attrs
import styled.css
import styled.styledDiv

external interface LoginProps : Props {
    var handleSubmitLogin: (HttpMethod, String, HashMap<String, String>) -> Unit
    var handleDisplayAlert: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var httpClient: HttpClient
}

/** The login/logout React component */
class Login : RComponent<LoginProps, State>() {

    override fun RBuilder.render() {
        /** Full background image */
        styledDiv {
            css {
                height = 100.pct
                width = 100.pct
                backgroundImage = Image("url(fbk_background.jpg)")
                backgroundPosition = "center"
                backgroundRepeat = BackgroundRepeat.noRepeat
                backgroundSize = "cover"
            }

            /** The div for the login form */
            styledDiv {
                css {
                    position = Position.fixed
                    top = 50.pct
                    left = 50.pct
                    transform = Transforms().apply { translate((-50).pct, (-50).pct) }
                    textAlign = TextAlign.center
                    width = 35.pct
                    height = 30.pct
                }

                child(
                    cryptoACPaper {
                        titleStyle = largePlainPaperTitleStyle
                        titleText = "Login to CryptoAC"
                        titleVariant = "h5"
                        setDivider = true
                        dividerWidth = 80.pct
                        child = createElement<Props> {
                            styledDiv {
                                css {
                                    marginLeft = 15.pct
                                    marginRight = 15.pct
                                }

                                // TODO do not allow weak passwords, use a library or something similar

                                /** The login form */
                                child(
                                    cryptoACForm {
                                        attrs {
                                            handleDisplayAlert = props.handleDisplayAlert
                                            submitButtonText = "Login"
                                            method = HttpMethod.Post
                                            endpoint = LOGIN
                                            handleSubmitEvent = { method, endpoint, values, _ ->
                                                props.handleSubmitLogin(method, endpoint, values)
                                            }
                                            cryptoACFormFields = listOf(
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
                                )
                            }
                        }!!
                    }
                )
            }
        }
    }
}

fun login(handler: LoginProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(Login::class) {
            attrs(handler)
        }
    }!!
}
