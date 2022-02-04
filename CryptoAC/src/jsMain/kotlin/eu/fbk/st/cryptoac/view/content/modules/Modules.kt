package eu.fbk.st.cryptoac.view.content.modules

import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.Themes.plainPaperTitleStyle
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.implementation.dm.DMType
import eu.fbk.st.cryptoac.implementation.mm.MMType
import eu.fbk.st.cryptoac.implementation.rm.RMType
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.materialui.grid
import kotlinx.css.*
import mu.KotlinLogging
import org.w3c.dom.HTMLInputElement
import react.*
import react.dom.br
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface ModulesProps : Props {
    var handleChangeCoreType : (CoreType) -> Unit
    var handleChangeRMType : (RMType) -> Unit
    var handleChangeMMType : (MMType) -> Unit
    var handleChangeDMType : (DMType) -> Unit
    var coreType: CoreType
    var rmType: RMType
    var mmType: MMType
    var dmType: DMType
    var availableRMImplementations: List<String>
    var availableMMImplementations: List<String>
    var availableDMImplementations: List<String>
}


/** The Modules React component allowing the user to configure CryptoAC */
class Modules: RComponent<ModulesProps, State>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                textAlign = TextAlign.center
                paddingTop = 10.px
                paddingBottom = 10.px
            }

            /** The paper collecting the available options for the core type */
            child(cryptoACPaper{
                titleStyle = plainPaperTitleStyle
                titleText = "Select the Core Type"
                titleVariant = "subtitle1"
                setDivider = true
                dividerWidth = 95.pct
                child = createElement {
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 12
                        }
                        styledDiv {
                            css {
                                display = Display.inlineFlex
                            }
                            /** Radio group for selecting the core type */
                            child(cryptoACRadioGroup {
                                name = "CoreType"
                                disabled = false
                                row = true
                                defaultValue = props.coreType.toString()
                                onChange = { event ->
                                    props.handleChangeCoreType(CoreType.valueOf((event.target as HTMLInputElement).value))
                                    true
                                }
                                options = listOf(
                                    CryptoACRadioOption(
                                        label = CoreType.RBAC_CLOUD.toPrettyString(),
                                        name = CoreType.RBAC_CLOUD.toString(),
                                        color = "primary"
                                    ),
                                    CryptoACRadioOption(
                                        label = CoreType.RBAC_MQTT.toPrettyString(),
                                        name = CoreType.RBAC_MQTT.toString(),
                                        color = "primary"
                                    )
                                )
                            })
                        }
                    }
                }!!
            })

            br {  }

            grid {
                attrs {
                    container = true
                    spacing = 1
                }
                grid {
                    attrs {
                        item = true
                        sm = 12
                        md = 6
                    }
                    child(moduleItem {
                        name = SERVER.RM
                        title = "Select the Reference Monitor"
                        defaultValue = props.rmType.toString()
                        options = props.availableRMImplementations
                        handleChangeChoice = { newChoice -> props.handleChangeRMType(RMType.valueOf(newChoice))}
                    })
                }
                grid {
                    attrs {
                        item = true
                        sm = 12
                        md = 6
                    }
                    child(moduleItem {
                        name = SERVER.MM
                        title = "Select the Metadata Manager"
                        defaultValue = props.mmType.toString()
                        options = props.availableMMImplementations
                        handleChangeChoice = { newChoice -> props.handleChangeMMType(MMType.valueOf(newChoice))}
                    })
                }
                grid {
                    attrs {
                        item = true
                        sm = 12
                        md = 6
                    }
                    child(moduleItem {
                        name = SERVER.DM
                        title = "Select the Data Manager"
                        defaultValue = props.dmType.toString()
                        options = props.availableDMImplementations
                        handleChangeChoice = { newChoice -> props.handleChangeDMType(DMType.valueOf(newChoice))}
                    })
                }
            }

            // todo here select the modules, should have a separate item for each entity
            //  and a "score" card. Add also option for OPA as additional modules or something
        }
    }
}


fun modules(handler: ModulesProps.() -> Unit): ReactElement {
    return createElement {
        child(Modules::class) {
            attrs(handler)
        }
    }!!
}

fun getImageFromModuleImplementation(choice: String) = when (choice) {
    "CRYPTOAC" -> { "proxy.png" }
    "MOSQUITTO" -> { "mosquitto.png" }
    "MYSQL" -> { "mysql.png" }
    "REDIS" -> { "redis.png" }
    "NONE" -> { "none.png" }
    else -> {
        val message = "Given choice \"$choice\" not corresponding to any module implementation"
        logger.error { message }
        throw IllegalStateException(message)
    }
}