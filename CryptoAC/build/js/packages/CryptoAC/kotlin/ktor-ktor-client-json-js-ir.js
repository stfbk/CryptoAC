(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-json-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-json-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-json-js-ir'.");
    }
    root['ktor-ktor-client-json-js-ir'] = factory(typeof this['ktor-ktor-client-json-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-json-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.q4;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.d1;
  var getKClass = kotlin_kotlin.$_$.e;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.q1;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var setOf = kotlin_kotlin.$_$.k8;
  var protoOf = kotlin_kotlin.$_$.sb;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  //endregion
  //region block: pre-declaration
  function write(data) {
    return this.write_tmo8x3_k$(data, Application_getInstance().get_Json_wo4ci9_k$());
  }
  setMetadataFor(JsonSerializer, 'JsonSerializer', interfaceMeta);
  //endregion
  function get_DefaultCommonIgnoredTypes() {
    _init_properties_JsonPlugin_kt__u4az6j();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  var properties_initialized_JsonPlugin_kt_vwb36r;
  function _init_properties_JsonPlugin_kt__u4az6j() {
    if (properties_initialized_JsonPlugin_kt_vwb36r) {
    } else {
      properties_initialized_JsonPlugin_kt_vwb36r = true;
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonSerializer() {
  }
  function get_serializersStore() {
    _init_properties_DefaultJs_kt__opfp8o();
    return serializersStore;
  }
  var serializersStore;
  var properties_initialized_DefaultJs_kt_mit67a;
  function _init_properties_DefaultJs_kt__opfp8o() {
    if (properties_initialized_DefaultJs_kt_mit67a) {
    } else {
      properties_initialized_DefaultJs_kt_mit67a = true;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      serializersStore = tmp$ret$0;
    }
  }
  function get_DefaultIgnoredTypes() {
    _init_properties_JsonPluginJs_kt__mch5rw();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_JsonPluginJs_kt_vh5mw6;
  function _init_properties_JsonPluginJs_kt__mch5rw() {
    if (properties_initialized_JsonPluginJs_kt_vh5mw6) {
    } else {
      properties_initialized_JsonPluginJs_kt_vh5mw6 = true;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      DefaultIgnoredTypes = tmp$ret$0;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = write;
  _.$_$.b = JsonSerializer;
  _.$_$.c = get_serializersStore;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-json-js-ir.js.map
