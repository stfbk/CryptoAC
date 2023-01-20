package eu.fbk.st.cryptoac

/** A collection of regular expressions to validate users' inputs */
class SafeRegex {

    companion object {

        /**
         * the safe (not-empty) text regex:
         * ^                     # start of the line
         *   [-a-zA-Z0-9 ._/+=*]  # one or more repetitions of these chars (no space)
         * $                     # end of the line
         */
        val TEXT = """^[-a-zA-Z0-9._/+=*]+$""".toRegex()

        /**
         * the safe (not-empty) URL regex:
         * ^                                # start of the line
         *   (                              # start of group #1
         *     https?                       # can be either 'http' or 'https'
         *   )                              # end of group  #1
         *   ://                            # literal "://"
         *   [-a-zA-Z0-9+&@#/%?=~_|!:,.;]*  # zero or one of these chars
         *   [-a-zA-Z0-9+&@#/%=~_|]         # exactly one of these chars
         * $                                # end of the line
         */
        val URL = """^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$""".toRegex()

        /**
         * the safe (not-empty) URI regex:
         * ^                                # start of the line
         *   [-a-zA-Z0-9+&@#/%?=~_|!:,.;]*  # zero or one of these chars
         *   [-a-zA-Z0-9+&@#/%=~_|]         # exactly one of these chars
         * $                                # end of the line
         */
        val URI = """^[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$""".toRegex()

        /**
         * the safe (not-empty) ipv4 regex:
         * ^                                # start of the line
         *   (               # start of group #1
         *     [0-9]         # 0-9
         *     |             # or
         *     [1-9][0-9]    # 10-99
         *     |             # or
         *     1[0-9][0-9]   # 100-199
         *     |             # or
         *     2[0-4][0-9]   # 200-249
         *     |             # or
         *     25[0-5]       # 250-255
         *   )               # end of group #1
         *   (\.(?!$)|$))    # ensure IPv4 doesn't end with a dot
         *   {4}             # 4 times
         * $                 # end of the line
         */
        val IPV4 = """^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.(?!$)|$)){4}$""".toRegex()

        /**
         * the safe (not-empty) regex matching either the URL or the IPv4 regexes
         */
        val URL_OR_IPV4 = """^[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]${'$'}|^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.(?!${'$'})|${'$'})){4}${'$'}""".toRegex()

        /**
         * the safe (also empty) regex matching base64 encoded data.
         * ^                        # start of the line
         *   (?:                    # start of non-capturing group #1
         *     [A-Za-z0-9+/]{4}+    # one or more repetitions of 4 of these chars
         *   )                      # end of group #1
         *   (?:                    # start of non-capturing group #2
         *     [A-Za-z0-9+/]{2}==   # two of these chars followed by "=="
         *     |                    # or
         *     [A-Za-z0-9+/]{3}=    # three of these chars followed by "="
         *   )                      # end of group #2
         * $               # end of the line
         */
        val BASE64 = """^(?:[A-Za-z0-9+/]{4})+(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$""".toRegex()

        /**
         * the AWS access key regex consists of 20 chars among:
         * ^               # start of the line
         *   [A-Z0-9]{20}  # 20 repetitions of these chars
         * $               # end of the line
         */
        val AWS_ACCESS_KEY = """^[A-Z0-9]{20}$""".toRegex()

        /**
         * the AWS secret key regex consists of 40 chars among:
         * ^                     # start of the line
         *   [A-Za-z0-9/+=]{40}  # 40 repetitions of these chars
         * $                     # end of the line
         */
        val AWS_SECRET_KEY = """^[A-Za-z0-9/+=]{40}$""".toRegex()
    }
}
