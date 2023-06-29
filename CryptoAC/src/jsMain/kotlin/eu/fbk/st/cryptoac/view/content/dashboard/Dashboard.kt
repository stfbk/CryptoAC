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
    //TODO docs
    var handleDisplayAlertProp: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var handleProfileWasCreatedOrModifiedProp: (CoreType) -> Unit
    var handleChangeBackdropIsOpenProp: (Boolean) -> Unit
    var coreParametersProp: CoreParameters
    var userIsLoggedProp: Boolean
    var httpClientProp: HttpClient
    var coreTypeProp: CoreType
    var usernameProp: String?
    var tablesProp: MutableList<String>
}

/**
 * The Dashboard React component, consisting of:
 * 1. The edit profile form;
 * 2. The specific dashboard for tables and
 *    data of the chosen core type
 */
val Dashboard = FC<DashboardProps> { props ->

    /** 1. The edit profile form */
    val parameters = props.coreParametersProp

    CryptoACEditProfileForm {
        handleProfileWasCreatedOrModifiedProp = {
            coreType: CoreType ->
            props.handleProfileWasCreatedOrModifiedProp(coreType)
        }
        handleChangeBackdropIsOpenProp = props.handleChangeBackdropIsOpenProp
        handleDisplayAlertProp = props.handleDisplayAlertProp
        coreParametersProp = parameters
        httpClientProp = props.httpClientProp
        isCreatingNewProfileProp = false
        handleChangeCoreTypeProp = null
        handleChangeRMTypeProp = null
        handleChangeMMTypeProp = null
        handleChangeDMTypeProp = null
        handleChangeACTypeProp = null
        usernameProp = props.usernameProp
        coreTypeProp = parameters.coreType
        when (parameters.coreType) {
            CoreType.RBAC_AT_REST -> {
                parameters as CoreParametersRBAC
                rmTypeProp = parameters.rmServiceParameters?.rmType ?: RMType.NONE
                mmTypeProp = parameters.mmServiceParameters.mmType
                dmTypeProp = parameters.dmServiceParameters.dmType
                acTypeProp = parameters.acServiceParameters?.acType ?: ACType.NONE
            }
            CoreType.RBAC_MQTT -> {
                parameters as CoreParametersRBAC
                rmTypeProp = RMType.NONE
                mmTypeProp = parameters.mmServiceParameters.mmType
                dmTypeProp = parameters.dmServiceParameters.dmType
                acTypeProp = parameters.acServiceParameters?.acType ?: ACType.NONE
            }
            CoreType.ABAC_AT_REST -> TODO()
            CoreType.ABAC_MQTT -> TODO()
        }
    }

    // TODO automatically refresh users/roles/resources tables after update
    // TODO secure passwords (e.g., salt+hash)
    /**
     * 2. The specific dashboard for tables and data of the
     * selected core type (if the user has a profile)
     */
    when (props.coreTypeProp) {
        CoreType.RBAC_AT_REST -> RBACCryptoACDashboard {
            handleChangeBackdropIsOpenProp = props.handleChangeBackdropIsOpenProp
            handleDisplayAlertProp = props.handleDisplayAlertProp
            userIsAdminProp = props.coreParametersProp.user.isAdmin
            httpClientProp = props.httpClientProp
            coreTypeProp = props.coreTypeProp
        }
        CoreType.RBAC_MQTT -> RBACMQTTDashboard {
            handleChangeBackdropIsOpenProp = props.handleChangeBackdropIsOpenProp
            handleDisplayAlertProp = props.handleDisplayAlertProp
            userIsAdminProp = props.coreParametersProp.user.isAdmin
            httpClientProp = props.httpClientProp
            coreTypeProp = props.coreTypeProp
            topicsProp = props.tablesProp
        }
        CoreType.ABAC_AT_REST -> TODO()
        CoreType.ABAC_MQTT -> TODO()
    }
}
