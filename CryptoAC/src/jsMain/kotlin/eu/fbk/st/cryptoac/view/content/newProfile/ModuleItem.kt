package eu.fbk.st.cryptoac.view.content.newProfile

import eu.fbk.st.cryptoac.view.Themes.plainPaperTitleStyle
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.materialui.grid
import kotlinx.css.*
import react.*
import react.dom.attrs
import styled.css
import styled.styledImg
import styled.styledP
import kotlin.random.Random

external interface ModuleItemProps : Props {
    /** The title to display of this module item */
    var title: String

    /** The name of this module item */
    var name: String

    /** The default value for this module item */
    var defaultValue: String?

    /** The list of options for this module item */
    var options: List<String>

    /** Change selected value for this item */
    var handleChangeChoice: (String) -> Unit
}

external interface ModuleItemState : State {
    /** Whether to render the value on change by user */
    var changedByUser: Boolean

    /** Whether the component was just mounted */
    var justMounted: Boolean

    /** The current choice for this item */
    var currentChoice: String
}

/** A module item component with a single radio group */
class ModuleItem: RComponent<ModuleItemProps, ModuleItemState>() {
    override fun RBuilder.render() {

        child(cryptoACPaper{
            titleStyle = plainPaperTitleStyle
            titleText = props.title
            titleVariant = "subtitle1"
            setDivider = true
            dividerWidth = 95.pct
            child = createElement {
                if (props.options.isEmpty()) {
                    styledP {
                        css {
                            marginTop = 35.pct
                        }
                        +"No option available"
                    }
                } else {
                    grid {
                        attrs {
                            container = true
                            spacing = 1
                        }
                        grid {
                            attrs {
                                item = true
                                xs = 4
                            }
                            grid {
                                attrs {
                                    container = true
                                    spacing = 1
                                }
                                grid {
                                    attrs {
                                        item = true
                                        xs = 12
                                    }
                                    styledImg {
                                        css {
                                            verticalAlign = VerticalAlign.middle
                                            padding = "3px"
                                            marginTop = 25.pct
                                            maxWidth = 50.pct
                                            maxHeight = 50.pct
                                            width = LinearDimension.auto
                                            height = LinearDimension.auto
                                        }
                                        attrs {
                                            src = getImageFromModuleImplementation(state.currentChoice)
                                        }
                                    }
                                }
                                grid {
                                    attrs {
                                        child(cryptoACSelect {
                                            name = props.name
                                            label = "Label"
                                            defaultValue = state.currentChoice
                                            onChange = { newChoice ->
                                                setState {
                                                    changedByUser = true
                                                    currentChoice = newChoice
                                                }
                                                props.handleChangeChoice(newChoice)
                                            }
                                            options = props.options
                                        })
                                        item = true
                                        xs = 12
                                    }
                                }
                            }
                        }
                        grid {
                            attrs {
                                item = true
                                xs = 8
                            }
                            child(cryptoACScore {
                                label = "Throughput"
                                min = 0
                                max = 100
                                value = Random.nextInt(0, 100)
                            })

                            child(cryptoACScore {
                                label = "Scalability"
                                min = 0
                                max = 100
                                value = Random.nextInt(0, 100)
                            })

                            child(cryptoACScore {
                                label = "Reliability"
                                min = 0
                                max = 100
                                value = Random.nextInt(0, 100)
                            })

                            child(cryptoACScore {
                                label = "Redundancy"
                                min = 0
                                max = 100
                                value = Random.nextInt(0, 100)
                            })

                            child(cryptoACScore {
                                label = "Latency"
                                min = 0
                                max = 100
                                value = Random.nextInt(0, 100)
                            })

                            child(cryptoACScore {
                                label = "CSP Lock-in"
                                min = 0
                                max = 100
                                value = Random.nextInt(0, 100)
                            })
                        }
                    }
                }
            }!!
        })
    }

    override fun ModuleItemState.init() {
        justMounted = true
        changedByUser = false

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        ModuleItem::class.js.asDynamic().getDerivedStateFromProps = {
                props: ModuleItemProps, state: ModuleItemState ->
            if (state.justMounted || !state.changedByUser) {
                if (props.defaultValue != null) {
                    state.currentChoice = props.defaultValue!!
                }
            }
            state.changedByUser = false
            state.justMounted = false
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun moduleItem(handler: ModuleItemProps.() -> Unit): ReactElement {
    return createElement {
        child(ModuleItem::class) {
            this.attrs(handler)
        }
    }!!
}