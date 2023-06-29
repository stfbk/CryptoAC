(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-core'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-react-core'.");
    }
    root['kotlin-react-core'] = factory(typeof this['kotlin-react-core'] === 'undefined' ? {} : this['kotlin-react-core'], react, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, $module$react, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var useEffect = $module$react.useEffect;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  //endregion
  //region block: pre-declaration
  //endregion
  function createEffectCallback(effect) {
    return createEffectCallback$lambda(effect);
  }
  function buildCleanup(cleanups) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = cleanups.length === 0;
    if (tmp$ret$0)
      return undefined;
    return buildCleanup$lambda(cleanups);
  }
  function createEffectCallback$lambda($effect) {
    return function () {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var cleanups = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = cleanups;
      tmp$ret$4 = tmp$ret$3;
      $effect(tmp$ret$4);
      return buildCleanup(cleanups);
    };
  }
  function buildCleanup$lambda($cleanups) {
    return function () {
      var indexedObject = $cleanups;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var cleanup = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        cleanup();
      }
      return Unit_getInstance();
    };
  }
  function useEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    useEffect(callback, dependencies);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = useEffect_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-react-core.js.map
