package eu.fbk.st.cryptoac.view.sidebar

import eu.fbk.st.cryptoac.view.components.custom.cryptoACScore
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarContent
import react.*

/**
 * The React component containing the
 * forms for invoking CryptoAC APIs;
 */
class Evaluation: RComponent<Props, State>() {
    override fun RBuilder.render() {
        proSidebarContent {

            child(cryptoACScore {
                label = "Throughput"
                min = 0
                max = 100
                value = 0
            })

            child(cryptoACScore {
                label = "Scalability"
                min = 0
                max = 100
                value = 20
            })

            child(cryptoACScore {
                label = "Reliability"
                min = 0
                max = 100
                value = 40
            })

            child(cryptoACScore {
                label = "Redundancy"
                min = 0
                max = 100
                value = 60
            })

            child(cryptoACScore {
                label = "Latency"
                min = 0
                max = 100
                value = 80
            })

            child(cryptoACScore {
                label = "CSP Lock-in"
                min = 0
                max = 100
                value = 100
            })

        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun evaluation(handler: Props.() -> Unit): ReactElement {
    return createElement {
        child(Evaluation::class) {
            this.attrs(handler)
        }
    }!!
}