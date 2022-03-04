package eu.fbk.st.cryptoac.view

import eu.fbk.st.cryptoac.API.LOGIN
import eu.fbk.st.cryptoac.CryptoACFormField
import eu.fbk.st.cryptoac.InputType
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.Themes.largePlainPaperTitleStyle
import eu.fbk.st.cryptoac.view.components.custom.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.css.properties.Transforms
import kotlinx.css.properties.translate
import mu.KotlinLogging
import react.*
import react.dom.attrs
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface LoginProps : Props {
    var httpClient: HttpClient
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var handleChangeUserIsLogged: (Boolean) -> Unit
    var handleChangeUsername: (String?) -> Unit
    var handleDisplayAlert : (OutcomeCode, CryptoACAlertSeverity) -> Unit
}

/** The login/logout React component */
class Login: RComponent<LoginProps, State>() {

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

                child(cryptoACPaper{
                    titleStyle = largePlainPaperTitleStyle
                    titleText = "Login to CryptoAC"
                    titleVariant = "h5"
                    setDivider = true
                    dividerWidth = 80.pct
                    child = createElement {
                        styledDiv {
                            css {
                                marginLeft = 15.pct
                                marginRight = 15.pct
                            }

                            // TODO do not allow weak passwords, use a library or something similar

                            /** The login form */
                            child(cryptoACForm {
                                attrs {
                                    handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                                    handleDisplayCryptoACAlert = props.handleDisplayAlert
                                    submitButtonText = "Login"
                                    method = HttpMethod.Post
                                    endpoint = LOGIN
                                    handleSubmitEvent = { method, endpoint, values, _ ->
                                        submitLogin(method, endpoint, values)
                                    }
                                    cryptoACFormFields = listOf(
                                        listOf(
                                            CryptoACFormField(
                                                name = USERNAME,
                                                label = USERNAME,
                                                className = "darkTextField",
                                                type = InputType.text)
                                        )
                                    )
                                }
                            })
                        }
                    }!!
                })
            }
        }


    }

    /**
     * Submit and handle the callback for the login form. It receives as input the
     * http [method], the [endpoint] (URL) and the [values] to add to the request
     */
    private fun submitLogin(method: HttpMethod, endpoint: String, values: HashMap<String, String>) {

        logger.info { "Submitting CryptoAC login form, method $method, endpoint $endpoint" }
        props.handleChangeBackdropIsOpen(true)

        MainScope().launch {
            try {
                val response: HttpResponse = props.httpClient.post(endpoint) {
                    contentType(ContentType.Application.FormUrlEncoded)
                    body = values.toList().formUrlEncode()
                }

                val code: OutcomeCode = response.receive()
                val status = response.status

                if (status == HttpStatusCode.OK) {
                    logger.info { "Response status is ${status}, code is $code" }
                    props.handleChangeBackdropIsOpen(false)
                    props.handleChangeUserIsLogged(true)
                    props.handleChangeUsername(values[USERNAME]!!)
                    props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                } else {
                    logger.warn { "Response status is ${status}, code is $code" }
                    props.handleChangeBackdropIsOpen(false)
                    props.handleChangeUserIsLogged(false)
                    props.handleChangeUsername(null)
                    props.handleDisplayAlert(code, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Error) {
                props.handleChangeBackdropIsOpen(false)
                props.handleChangeUserIsLogged(false)
                props.handleChangeUsername(null)
                logger.error { "Error during login (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }
}

fun login(handler: LoginProps.() -> Unit): ReactElement {
    return createElement {
        child(Login::class) {
            attrs(handler)
        }
    }!!
}