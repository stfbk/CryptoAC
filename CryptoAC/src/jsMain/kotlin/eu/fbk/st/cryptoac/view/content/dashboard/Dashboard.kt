package eu.fbk.st.cryptoac.view.content.dashboard

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.ac.ACType
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreParametersRBAC
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.rm.RMType
import eu.fbk.st.cryptoac.view.components.custom.*
import io.ktor.client.*
import react.*

external interface DashboardProps : Props {
    var handleDisplayAlert: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var handleProfileWasCreatedOrModified: (CoreType) -> Unit
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var coreParameters: CoreParameters
    var userIsLogged: Boolean
    var httpClient: HttpClient
    var coreType: CoreType
    var username: String?
    var tables: MutableList<String>
}

/**
 * The Dashboard React component, consisting of:
 * 1. The edit profile form;
 * 2. The specific dashboard for tables and
 *    data of the chosen core type
 */
class Dashboard : RComponent<DashboardProps, State>() {

    override fun RBuilder.render() {

        /** 1. The edit profile form */
        val parameters = props.coreParameters
        child(
            cryptoACEditProfileForm {
                handleProfileWasCreatedOrModified = {
                    coreType: CoreType ->
                    props.handleProfileWasCreatedOrModified(coreType)
                }
                handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                handleDisplayAlert = props.handleDisplayAlert
                coreParameters = parameters
                httpClient = props.httpClient
                isCreatingNewProfile = false
                handleChangeCoreType = null
                handleChangeRMType = null
                handleChangeMMType = null
                handleChangeDMType = null
                handleChangeACType = null
                username = props.username
                coreType = parameters.coreType
                when (parameters.coreType) {
                    CoreType.RBAC_AT_REST -> {
                        parameters as CoreParametersRBAC
                        rmType = parameters.rmServiceParameters?.rmType ?: RMType.NONE
                        mmType = parameters.mmServiceParameters.mmType
                        dmType = parameters.dmServiceParameters.dmType
                        acType = parameters.acServiceParameters?.acType ?: ACType.NONE
                    }
                    CoreType.RBAC_MQTT -> {
                        parameters as CoreParametersRBAC
                        rmType = RMType.NONE
                        mmType = parameters.mmServiceParameters.mmType
                        dmType = parameters.dmServiceParameters.dmType
                        acType = parameters.acServiceParameters?.acType ?: ACType.NONE
                    }
                    CoreType.ABAC_AT_REST -> TODO()
                    CoreType.ABAC_MQTT -> TODO()
                }
            }
        )

        // TODO automatically refresh users/roles/resources tables after update
        // TODO secure passwords (e.g., salt+hash)
        /**
         * 2. The specific dashboard for tables and data of the
         * selected core type (if the user has a profile)
         */
        when (props.coreType) {
            CoreType.RBAC_AT_REST -> child(
                rbacCryptoACDashboard {
                    handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                    handleDisplayAlert = props.handleDisplayAlert
                    userIsAdmin = props.coreParameters.user.isAdmin
                    httpClient = props.httpClient
                    coreType = props.coreType
                }
            )
            CoreType.RBAC_MQTT -> child(
                rbacMQTTDashboard {
                    handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                    handleDisplayAlert = props.handleDisplayAlert
                    userIsAdmin = props.coreParameters.user.isAdmin
                    httpClient = props.httpClient
                    coreType = props.coreType
                    topics = props.tables
                }
            )
            CoreType.ABAC_AT_REST -> TODO()
            CoreType.ABAC_MQTT -> TODO()
        }
    }
}

fun dashboard(handler: DashboardProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(Dashboard::class) {
            this.attrs(handler)
        }
    }!!
}
