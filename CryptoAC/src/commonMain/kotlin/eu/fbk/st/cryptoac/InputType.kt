package eu.fbk.st.cryptoac

/** List of HTML input types */
enum class InputType(val realValue : String) {
    button("button"),
    checkBox("checkbox"),
    color("color"),
    date("date"),
    dateTime("datetime"),
    dateTimeLocal("datetime-local"),
    email("email"),
    file("file"),
    hidden("hidden"),
    image("image"),
    month("month"),
    number("number"),
    password("password"),
    radio("radio"),
    range("range"),
    reset("reset"),
    search("search"),
    submit("submit"),
    text("text"),
    tel("tel"),
    time("time"),
    url("url"),
    week("week"),
    select("select")
}