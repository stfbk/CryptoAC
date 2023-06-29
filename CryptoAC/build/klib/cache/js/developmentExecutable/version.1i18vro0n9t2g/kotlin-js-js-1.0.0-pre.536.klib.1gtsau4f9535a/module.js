(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-js'.");
    }
    root['kotlin-js'] = factory(typeof this['kotlin-js'] === 'undefined' ? {} : this['kotlin-js'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var protoOf = kotlin_kotlin.$_$.sb;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var Annotation = kotlin_kotlin.$_$.mf;
  var classMeta = kotlin_kotlin.$_$.ka;
  //endregion
  //region block: pre-declaration
  function component1() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[0];
  }
  setMetadataFor(JsTuple1, 'JsTuple1', interfaceMeta);
  function component2() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[1];
  }
  setMetadataFor(JsTuple2, 'JsTuple2', interfaceMeta, VOID, [JsTuple1]);
  function component3() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[2];
  }
  setMetadataFor(JsTuple3, 'JsTuple3', interfaceMeta, VOID, [JsTuple2]);
  function component4() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[3];
  }
  setMetadataFor(JsTuple4, 'JsTuple4', interfaceMeta, VOID, [JsTuple3]);
  function component5() {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[4];
  }
  setMetadataFor(JsTuple5, 'JsTuple5', interfaceMeta, VOID, [JsTuple4]);
  setMetadataFor(JsoDsl, 'JsoDsl', classMeta, VOID, [Annotation]);
  //endregion
  function JsTuple2() {
  }
  function JsTuple1() {
  }
  function JsTuple3() {
  }
  function JsTuple4() {
  }
  function JsTuple5() {
  }
  function JsoDsl() {
  }
  protoOf(JsoDsl).equals = function (other) {
    if (!(other instanceof JsoDsl))
      return false;
    var tmp0_other_with_cast = other instanceof JsoDsl ? other : THROW_CCE();
    return true;
  };
  protoOf(JsoDsl).hashCode = function () {
    return 0;
  };
  protoOf(JsoDsl).toString = function () {
    return '@js.core.JsoDsl()';
  };
  function jso(block) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'js.core.jso' call
    tmp$ret$0 = {};
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$1 = tmp0_apply;
    return tmp$ret$1;
  }
  function jso_0() {
    return {};
  }
  return _;
}));
