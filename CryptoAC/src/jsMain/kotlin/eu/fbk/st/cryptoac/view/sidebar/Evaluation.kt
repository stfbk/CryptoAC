package eu.fbk.st.cryptoac.view.sidebar

import csstype.number
import emotion.react.css
import react.*
import react.dom.html.ReactHTML

/**
 * The React component containing the
 * forms for invoking CryptoAC APIs;
 */
val Evaluation = FC<Props> {
    ReactHTML.div {
        css {
            flex = number(1.0)
            flexGrow = number(1.0)
        }

        // TODO first implement this evaluation
//            child(cryptoACScore {
//                label = "Throughput"
//                min = 0
//                max = 100
//                value = 0
//            })
//
//            child(cryptoACScore {
//                label = "Scalability"
//                min = 0
//                max = 100
//                value = 20
//            })
//
//            child(cryptoACScore {
//                label = "Reliability"
//                min = 0
//                max = 100
//                value = 40
//            })
//
//            child(cryptoACScore {
//                label = "Redundancy"
//                min = 0
//                max = 100
//                value = 60
//            })
//
//            child(cryptoACScore {
//                label = "Latency"
//                min = 0
//                max = 100
//                value = 80
//            })
//
//            child(cryptoACScore {
//                label = "CSP Lock-in"
//                min = 0
//                max = 100
//                value = 100
//            })
    }
}
