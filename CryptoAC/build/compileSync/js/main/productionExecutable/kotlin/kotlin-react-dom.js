(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-react-dom'.");
    }
    root['kotlin-react-dom'] = factory(typeof this['kotlin-react-dom'] === 'undefined' ? {} : this['kotlin-react-dom'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.sa;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ReactHTML, 'ReactHTML', objectMeta);
  //endregion
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  var ReactHTML_instance;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance == null)
      new ReactHTML();
    return ReactHTML_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ReactHTML_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-react-dom.js.map
