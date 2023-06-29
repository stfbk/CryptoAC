(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-serialization-kotlinx-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-serialization-kotlinx-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'ktor-ktor-serialization-kotlinx-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    root['ktor-ktor-serialization-kotlinx-json-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-json-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-json-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-serialization-kotlinx-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization_kotlinx, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.lh;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var serialization = kotlin_io_ktor_ktor_serialization_kotlinx.$_$.a;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_DefaultJson() {
    _init_properties_JsonSupport_kt__yf438r();
    return DefaultJson;
  }
  var DefaultJson;
  function json(_this__u8e3s4, json, contentType) {
    json = json === VOID ? get_DefaultJson() : json;
    contentType = contentType === VOID ? Application_getInstance().get_Json_wo4ci9_k$() : contentType;
    _init_properties_JsonSupport_kt__yf438r();
    serialization(_this__u8e3s4, contentType, json);
  }
  function DefaultJson$lambda($this$Json) {
    _init_properties_JsonSupport_kt__yf438r();
    $this$Json.set_encodeDefaults_awi118_k$(true);
    $this$Json.set_isLenient_9pe3jb_k$(true);
    $this$Json.set_allowSpecialFloatingPointValues_9kglh2_k$(true);
    $this$Json.set_allowStructuredMapKeys_bu0kfq_k$(true);
    $this$Json.set_prettyPrint_l338v_k$(false);
    $this$Json.set_useArrayPolymorphism_a7xwxf_k$(false);
    return Unit_getInstance();
  }
  var properties_initialized_JsonSupport_kt_9cgd93;
  function _init_properties_JsonSupport_kt__yf438r() {
    if (properties_initialized_JsonSupport_kt_9cgd93) {
    } else {
      properties_initialized_JsonSupport_kt_9cgd93 = true;
      DefaultJson = Json(VOID, DefaultJson$lambda);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = json;
  //endregion
  return _;
}));
