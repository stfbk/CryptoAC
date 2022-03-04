(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-benchmark-kotlinx-benchmark-runtime-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-benchmark-kotlinx-benchmark-runtime-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'CryptoAC-benchmark'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'CryptoAC-benchmark'.");
    }if (typeof this['kotlinx-benchmark-kotlinx-benchmark-runtime-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC-benchmark'. Its dependency 'kotlinx-benchmark-kotlinx-benchmark-runtime-js-legacy' was not found. Please, check whether 'kotlinx-benchmark-kotlinx-benchmark-runtime-js-legacy' is loaded prior to 'CryptoAC-benchmark'.");
    }root['CryptoAC-benchmark'] = factory(typeof this['CryptoAC-benchmark'] === 'undefined' ? {} : this['CryptoAC-benchmark'], kotlin, this['kotlinx-benchmark-kotlinx-benchmark-runtime-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_benchmark_kotlinx_benchmark_runtime_js_legacy) {
  'use strict';
  var JsExecutor = $module$kotlinx_benchmark_kotlinx_benchmark_runtime_js_legacy.kotlinx.benchmark.js.JsExecutor;
  function main(args) {
    var executor = new JsExecutor('js', args);
    executor.run();
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$benchmark = package$kotlinx.benchmark || (package$kotlinx.benchmark = {});
  var package$generated = package$benchmark.generated || (package$benchmark.generated = {});
  package$generated.main_nib1c5$ = main;
  main([]);
  Kotlin.defineModule('CryptoAC-benchmark', _);
  return _;
}));

//# sourceMappingURL=CryptoAC-benchmark.js.map
