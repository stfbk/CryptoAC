package kotlinx.benchmark.generated

import kotlin.Array
import kotlin.String
import kotlinx.benchmark.js.JsExecutor

fun main(args: Array<out String>) {
  val executor = JsExecutor("js", args)
  executor.run()
}
