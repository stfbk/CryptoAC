package eu.fbk.st.cryptoac.ui.content.login

import eu.fbk.st.cryptoac.API.LOGIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.ui.components.custom.*
import eu.fbk.st.cryptoac.ui.components.materialui.core.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.html.InputType
import mu.KotlinLogging
import react.*
import react.dom.attrs
import react.dom.div
import react.dom.img
import styled.css
import styled.styledDiv
import styled.styledImg

private val logger = KotlinLogging.logger {}

external interface LoginProps : RProps {
    var coreType: CoreType
    var httpClient: HttpClient
    var handleChangeBackdropOpen: (Boolean) -> Unit
    var handleChangeUserIsLogged: (Boolean) -> Unit
    var handleChangeUsername: (String?) -> Unit
    var handleDisplayAlert : (OutcomeCode, CryptoACAlertSeverity) -> Unit
}

/** The login React component. */
class Login: RComponent<LoginProps, RState>() {

    override fun RBuilder.render() {

        /** The div for the login form. */
        styledDiv {
            css {
                textAlign = TextAlign.center
                marginTop = 10.px
                paddingBottom = 10.px
            }
            paper {
                typography {
                    attrs {
                        variant = "h6"
                        id = "login"
                        component = "div"
                    }
                    +"Login to use CryptoAC"
                }
                styledDiv {
                    css {
                        marginLeft = 25.pct
                        marginRight = 25.pct
                    }

                    /** The login form. */
                    cryptoACForm {
                        attrs {
                            handleChangeBackdropOpen = props.handleChangeBackdropOpen
                            handleDisplayCryptoACAlert = props.handleDisplayAlert
                            submitButtonText = "Login"
                            method = HttpMethod.Post
                            endpoint = LOGIN
                            submit = { method, endpoint, values, _ ->
                                submitLogin(method, endpoint, values)
                            }
                            cryptoACFormFields = listOf(
                                listOf(CryptoACFormField(
                                    name = USERNAME,
                                    label = USERNAME,
                                    className = "darkTextField",
                                    type = InputType.text)
                                )
                            )
                        }
                    }
                }
            }
        }
        div {
            styledImg {
                css {
                    maxWidth = 100.pct
                }
                attrs {
                    src = when (props.coreType) {
                        CoreType.RBAC_CLOUD -> "background_cloud.jpg"
                        CoreType.RBAC_MQTT -> "background_mqtt.jpg"
                    }
                }
            }
        }
    }

    /**
     * Submit and handle the callback for the login form. It receives as input the
     * http [method], the [endpoint] (URL) and the [values] to add to the request.
     */
    private fun submitLogin(method: HttpMethod, endpoint: String, values: HashMap<String, String>) {

        logger.info { "Submitting CryptoAC login form, method $method, endpoint $endpoint" }
        props.handleChangeBackdropOpen(true)

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
                    props.handleChangeBackdropOpen(false)
                    props.handleChangeUserIsLogged(true)
                    props.handleChangeUsername(values[USERNAME]!!)
                    props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                } else {
                    logger.warn { "Response status is ${status}, code is $code" }
                    props.handleChangeBackdropOpen(false)
                    props.handleChangeUserIsLogged(false)
                    props.handleChangeUsername(null)
                    props.handleDisplayAlert(code, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Error) {
                props.handleChangeBackdropOpen(false)
                logger.error { "Error during login (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_047_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }
}

fun RBuilder.login(handler: LoginProps.() -> Unit): ReactElement {
    return child(Login::class) {
        this.attrs(handler)
    }
}