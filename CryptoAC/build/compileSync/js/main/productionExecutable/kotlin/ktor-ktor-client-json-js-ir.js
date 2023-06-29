(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-json-js-ir'.");
    }
    root['ktor-ktor-client-json-js-ir'] = factory(typeof this['ktor-ktor-client-json-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-json-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  //endregion
  //region block: pre-declaration
  //endregion
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_serializersStore;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-json-js-ir.js.map
