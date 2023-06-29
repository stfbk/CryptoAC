(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-benchmark-kotlinx-benchmark-runtime-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-benchmark-kotlinx-benchmark-runtime-js-ir'.");
    }
    root['kotlinx-benchmark-kotlinx-benchmark-runtime-js-ir'] = factory(typeof this['kotlinx-benchmark-kotlinx-benchmark-runtime-js-ir'] === 'undefined' ? {} : this['kotlinx-benchmark-kotlinx-benchmark-runtime-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var protoOf = kotlin_kotlin.$_$.sb;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var charArrayOf = kotlin_kotlin.$_$.fa;
  var split = kotlin_kotlin.$_$.he;
  var copyToArray = kotlin_kotlin.$_$.r6;
  var objectMeta = kotlin_kotlin.$_$.rb;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var classMeta = kotlin_kotlin.$_$.ka;
  var KProperty0 = kotlin_kotlin.$_$.qc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sa;
  var lazy = kotlin_kotlin.$_$.ch;
  //endregion
  //region block: pre-declaration
  setMetadataFor(JsEngineSupport, 'JsEngineSupport', classMeta);
  setMetadataFor(D8EngineSupport, 'D8EngineSupport', objectMeta, JsEngineSupport);
  setMetadataFor(NodeJsEngineSupport, 'NodeJsEngineSupport', objectMeta, JsEngineSupport);
  //endregion
  function get_BASE64_ALPHABET() {
    return BASE64_ALPHABET;
  }
  var BASE64_ALPHABET;
  function get_BASE64_MASK() {
    return BASE64_MASK;
  }
  var BASE64_MASK;
  function get_BASE64_PAD() {
    return BASE64_PAD;
  }
  var BASE64_PAD;
  function get_zeroThreshold() {
    _init_properties_ReportBenchmarksStatistics_kt__z0nrsj();
    return zeroThreshold;
  }
  var zeroThreshold;
  var properties_initialized_ReportBenchmarksStatistics_kt_1rh7ld;
  function _init_properties_ReportBenchmarksStatistics_kt__z0nrsj() {
    if (properties_initialized_ReportBenchmarksStatistics_kt_1rh7ld) {
    } else {
      properties_initialized_ReportBenchmarksStatistics_kt_1rh7ld = true;
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      tmp$ret$0 = Math.pow(10.0, 3.0);
      zeroThreshold = 1.0 / tmp$ret$0 / 2;
    }
  }
  function D8EngineSupport() {
    D8EngineSupport_instance = this;
    JsEngineSupport.call(this);
  }
  protoOf(D8EngineSupport).writeFile_97n0d4_k$ = function (path, text) {
    write('<FILE:' + path + '>' + text + '<ENDFILE>');
  };
  protoOf(D8EngineSupport).readFile_ngq9v5_k$ = function (path) {
    return read(path);
  };
  protoOf(D8EngineSupport).arguments_xnw71m_k$ = function () {
    var tmp = globalThis.arguments.join(' ');
    var arguments_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = split(arguments_0, charArrayOf([_Char___init__impl__6a9atx(32)]));
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    return tmp$ret$0;
  };
  var D8EngineSupport_instance;
  function D8EngineSupport_getInstance() {
    if (D8EngineSupport_instance == null)
      new D8EngineSupport();
    return D8EngineSupport_instance;
  }
  function NodeJsEngineSupport() {
    NodeJsEngineSupport_instance = this;
    JsEngineSupport.call(this);
  }
  protoOf(NodeJsEngineSupport).writeFile_vhhvlz_k$ = function (path, text) {
    return require('fs').writeFileSync(path, text);
  };
  protoOf(NodeJsEngineSupport).writeFile_97n0d4_k$ = function (path, text) {
    return this.writeFile_vhhvlz_k$(path, text);
  };
  protoOf(NodeJsEngineSupport).readFile_ngq9v5_k$ = function (path) {
    var tmp = require('fs').readFileSync(path, 'utf8');
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  };
  protoOf(NodeJsEngineSupport).arguments_xnw71m_k$ = function () {
    var tmp = process.argv.slice(2).join(' ');
    var arguments_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = split(arguments_0, charArrayOf([_Char___init__impl__6a9atx(32)]));
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    return tmp$ret$0;
  };
  var NodeJsEngineSupport_instance;
  function NodeJsEngineSupport_getInstance() {
    if (NodeJsEngineSupport_instance == null)
      new NodeJsEngineSupport();
    return NodeJsEngineSupport_instance;
  }
  function get_isD8() {
    _init_properties_Utils_kt__jo07cx();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = isD8$factory();
    tmp$ret$0 = isD8$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  var isD8$delegate;
  function get_jsEngineSupport() {
    _init_properties_Utils_kt__jo07cx();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = jsEngineSupport$factory();
    tmp$ret$0 = jsEngineSupport$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  var jsEngineSupport$delegate;
  function JsEngineSupport() {
  }
  function isD8$delegate$lambda() {
    _init_properties_Utils_kt__jo07cx();
    var tmp = typeof d8 !== 'undefined';
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  }
  function jsEngineSupport$delegate$lambda() {
    _init_properties_Utils_kt__jo07cx();
    return get_isD8() ? D8EngineSupport_getInstance() : NodeJsEngineSupport_getInstance();
  }
  function isD8$factory() {
    return getPropertyCallableRef('isD8', 0, KProperty0, function () {
      return get_isD8();
    }, null);
  }
  function jsEngineSupport$factory() {
    return getPropertyCallableRef('jsEngineSupport', 0, KProperty0, function () {
      return get_jsEngineSupport();
    }, null);
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (properties_initialized_Utils_kt_xvi83j) {
    } else {
      properties_initialized_Utils_kt_xvi83j = true;
      isD8$delegate = lazy(isD8$delegate$lambda);
      jsEngineSupport$delegate = lazy(jsEngineSupport$delegate$lambda);
    }
  }
  //region block: init
  BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  BASE64_MASK = 63;
  BASE64_PAD = _Char___init__impl__6a9atx(61);
  //endregion
  return _;
}));
