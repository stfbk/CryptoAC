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
  var get_js = kotlin_kotlin.$_$.kb;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var protoOf = kotlin_kotlin.$_$.sb;
  var classMeta = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var toString = kotlin_kotlin.$_$.r2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(EffectBuilder, 'EffectBuilder', classMeta);
  setMetadataFor(StateInstance, 'StateInstance', classMeta);
  //endregion
  function get_react(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = get_js(_this__u8e3s4);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function EffectBuilder() {
  }
  protoOf(EffectBuilder).cleanup_hwidaq_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    tmp$ret$0.push(block);
  };
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
  function IntrinsicType(tagName) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tagName;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function ReactNode(source) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = source;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function ReactNode_0(source) {
    var tmp$ret$2;
    // Inline function 'react.ReactNode' call
    var tmp0_ReactNode = toString(source);
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_ReactNode;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function ReactNode_1(source) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = source;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function StateInstance() {
  }
  protoOf(StateInstance).component1_7eebsc_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    var tmp0_unsafeCast = tmp$ret$0[0];
    tmp$ret$1 = tmp0_unsafeCast;
    return tmp$ret$1;
  };
  protoOf(StateInstance).component2_7eebsb_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    var tmp0_unsafeCast = tmp$ret$0[1];
    tmp$ret$1 = tmp0_unsafeCast;
    return tmp$ret$1;
  };
  protoOf(StateInstance).getValue_elrtsm_k$ = function (thisRef, property) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    var tmp0_unsafeCast = tmp$ret$0[0];
    tmp$ret$1 = tmp0_unsafeCast;
    return tmp$ret$1;
  };
  protoOf(StateInstance).setValue_r8gule_k$ = function (thisRef, property, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    var tmp0_unsafeCast = tmp$ret$0[1];
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$1(value);
  };
  function useEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    useEffect(callback, dependencies);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_react;
  _.$_$.b = useEffect_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-react-core.js.map
