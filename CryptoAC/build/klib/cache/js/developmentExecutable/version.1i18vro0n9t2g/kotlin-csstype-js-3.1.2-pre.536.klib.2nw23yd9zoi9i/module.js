(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-csstype'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-csstype'.");
    }
    root['kotlin-csstype'] = factory(typeof this['kotlin-csstype'] === 'undefined' ? {} : this['kotlin-csstype'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var protoOf = kotlin_kotlin.$_$.sb;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var toString = kotlin_kotlin.$_$.xb;
  var classMeta = kotlin_kotlin.$_$.ka;
  //endregion
  //region block: pre-declaration
  function fontFace(block) {
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '@font-face';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp] = tmp$ret$5;
  }
  function invoke(_this__u8e3s4, block) {
    var tmp$ret$2;
    // Inline function 'js.core.jso' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'js.core.jso' call
    tmp$ret$0 = {};
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$1 = tmp0_apply;
    tmp$ret$2 = tmp$ret$1;
    this[_this__u8e3s4] = tmp$ret$2;
  }
  function invoke_0(_this__u8e3s4, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp0_Selector = '.' + _this__u8e3s4;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_Selector;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp2_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp1_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp1_apply);
    tmp$ret$4 = tmp1_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp2_invoke] = tmp$ret$5;
  }
  function invoke_1(_this__u8e3s4, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function and(className, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp0_Selector = '&.' + className;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_Selector;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp2_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp1_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp1_apply);
    tmp$ret$4 = tmp1_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp2_invoke] = tmp$ret$5;
  }
  setMetadataFor(RuleBuilder, 'RuleBuilder', interfaceMeta);
  function cue(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::cue(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function cue_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::cue(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function cueRegion(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::cue-region(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function cueRegion_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::cue-region(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function part(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::part(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function part_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::part(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function slotted(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::slotted(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function slotted_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::slotted(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function viewTransitionGroup(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::view-transition-group(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function viewTransitionGroup_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::view-transition-group(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function viewTransitionImagePair(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::view-transition-image-pair(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function viewTransitionImagePair_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::view-transition-image-pair(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function viewTransitionNew(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::view-transition-new(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function viewTransitionNew_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::view-transition-new(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function viewTransitionOld(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::view-transition-old(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function viewTransitionOld_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = '::view-transition-old(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function dir(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':dir(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function dir_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':dir(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function has(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':has(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function has_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':has(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function host(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':host(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function host_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':host(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function hostContext(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':host-context(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function hostContext_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':host-context(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function is(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':is(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function is_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':is(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function lang(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':lang(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function lang_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':lang(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function not(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':not(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function not_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':not(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthChild(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':nth-child(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthChild_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':nth-child(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthLastChild(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':nth-last-child(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthLastChild_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':nth-last-child(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthLastOfType(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':nth-last-of-type(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthLastOfType_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':nth-last-of-type(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthOfType(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':nth-of-type(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthOfType_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':nth-of-type(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function where(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':where(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function where_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp2_invoke = ':where(' + selector + ')';
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp2_invoke;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  setMetadataFor(AdvancedPseudosRuleBuilder, 'AdvancedPseudosRuleBuilder', interfaceMeta, VOID, [RuleBuilder]);
  function after(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::after';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function backdrop(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::backdrop';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function before(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::before';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function cue_1(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::cue';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function cueRegion_1(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::cue-region';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function firstLetter(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::first-letter';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function firstLine(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::first-line';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function grammarError(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::grammar-error';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function marker(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::marker';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function placeholder(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::placeholder';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function selection(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::selection';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function spellingError(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::spelling-error';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function targetText(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::target-text';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function viewTransition(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '::view-transition';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function active(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':active';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function anyLink(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':any-link';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function blank(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':blank';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function checked(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':checked';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function current(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':current';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function default_0(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':default';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function defined(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':defined';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function disabled(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':disabled';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function empty(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':empty';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function enabled(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':enabled';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function first(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':first';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function firstChild(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':first-child';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function firstOfType(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':first-of-type';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function focus(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':focus';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function focusVisible(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':focus-visible';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function focusWithin(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':focus-within';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function fullscreen(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':fullscreen';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function future(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':future';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function hover(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':hover';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function inRange(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':in-range';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function indeterminate(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':indeterminate';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function invalid(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':invalid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function lastChild(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':last-child';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function lastOfType(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':last-of-type';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function left(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':left';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function link(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':link';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function localLink(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':local-link';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthCol(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':nth-col';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function nthLastCol(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':nth-last-col';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function onlyChild(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':only-child';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function onlyOfType(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':only-of-type';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function optional(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':optional';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function outOfRange(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':out-of-range';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function past(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':past';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function paused(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':paused';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function pictureInPicture(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':picture-in-picture';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function placeholderShown(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':placeholder-shown';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function playing(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':playing';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function readOnly(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':read-only';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function readWrite(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':read-write';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function required(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':required';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function right(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':right';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function root(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':root';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function scope(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':scope';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function target(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':target';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function targetWithin(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':target-within';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function userInvalid(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':user-invalid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function userValid(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':user-valid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function valid(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':valid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  function visited(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp$ret$2;
    // Inline function 'csstype.Selector' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ':visited';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_invoke = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'js.core.jso' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp$ret$3;
    // Inline function 'js.core.jso' call
    tmp$ret$3 = {};
    var tmp0_apply = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4;
    this[tmp1_invoke] = tmp$ret$5;
  }
  setMetadataFor(SimplePseudosRuleBuilder, 'SimplePseudosRuleBuilder', interfaceMeta, VOID, [RuleBuilder]);
  setMetadataFor(PseudosRuleBuilder, 'PseudosRuleBuilder', interfaceMeta, VOID, [AdvancedPseudosRuleBuilder, SimplePseudosRuleBuilder]);
  setMetadataFor(PropertiesBuilder, 'PropertiesBuilder', classMeta, VOID, [RuleBuilder, PseudosRuleBuilder]);
  //endregion
  function AdvancedPseudosRuleBuilder() {
  }
  function BoxShadow(offsetX, offsetY, blurRadius, color) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = '' + offsetX + ' ' + offsetY + ' ' + blurRadius + ' ' + color;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function ClassName(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Color(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function rgba(red, green, blue, alpha) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function integer(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function get_px(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toString(_this__u8e3s4) + 'px';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function get_em(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toString(_this__u8e3s4) + 'em';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function number(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Padding(vertical, horizontal) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = '' + vertical + ' ' + horizontal;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Padding_0(top, right, bottom, left) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = '' + top + ' ' + right + ' ' + bottom + ' ' + left;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function get_pct(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toString(_this__u8e3s4) + '%';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function PseudosRuleBuilder() {
  }
  function url(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'url(' + value + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function RuleBuilder() {
  }
  function Selector(syntax) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = syntax;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function SimplePseudosRuleBuilder() {
  }
  function translate(tx, ty) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'translate(' + tx + ',' + ty + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function translatey(ty) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'translatey(' + ty + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function PropertiesBuilder() {
  }
  protoOf(PropertiesBuilder).unaryPlus_sfp4ua_k$ = function (_this__u8e3s4) {
    Object.assign(this, _this__u8e3s4);
  };
  //region block: post-declaration
  protoOf(PropertiesBuilder).left_uihxws_k$ = left;
  protoOf(PropertiesBuilder).right_e59s75_k$ = right;
  protoOf(PropertiesBuilder).fontFace_63ca6m_k$ = fontFace;
  protoOf(PropertiesBuilder).invoke_53g6ia_k$ = invoke;
  protoOf(PropertiesBuilder).invoke_nni682_k$ = invoke_0;
  protoOf(PropertiesBuilder).invoke_dnsoq2_k$ = invoke_1;
  protoOf(PropertiesBuilder).and_d4nypd_k$ = and;
  protoOf(PropertiesBuilder).cue_i7dwn5_k$ = cue;
  protoOf(PropertiesBuilder).cue_w35pcn_k$ = cue_0;
  protoOf(PropertiesBuilder).cue_hxf0mg_k$ = cue_1;
  protoOf(PropertiesBuilder).cueRegion_snhyct_k$ = cueRegion;
  protoOf(PropertiesBuilder).cueRegion_wivn1n_k$ = cueRegion_0;
  protoOf(PropertiesBuilder).cueRegion_uj366s_k$ = cueRegion_1;
  protoOf(PropertiesBuilder).part_iasl35_k$ = part;
  protoOf(PropertiesBuilder).part_6fwztj_k$ = part_0;
  protoOf(PropertiesBuilder).slotted_96tz6p_k$ = slotted;
  protoOf(PropertiesBuilder).slotted_v0o69z_k$ = slotted_0;
  protoOf(PropertiesBuilder).viewTransitionGroup_yl4p4f_k$ = viewTransitionGroup;
  protoOf(PropertiesBuilder).viewTransitionGroup_papx2h_k$ = viewTransitionGroup_0;
  protoOf(PropertiesBuilder).viewTransitionImagePair_dj9ymx_k$ = viewTransitionImagePair;
  protoOf(PropertiesBuilder).viewTransitionImagePair_rxkn7l_k$ = viewTransitionImagePair_0;
  protoOf(PropertiesBuilder).viewTransitionNew_wp18pe_k$ = viewTransitionNew;
  protoOf(PropertiesBuilder).viewTransitionNew_c0f7ue_k$ = viewTransitionNew_0;
  protoOf(PropertiesBuilder).viewTransitionOld_jsr7yf_k$ = viewTransitionOld;
  protoOf(PropertiesBuilder).viewTransitionOld_yk0kdr_k$ = viewTransitionOld_0;
  protoOf(PropertiesBuilder).dir_2y0kgp_k$ = dir;
  protoOf(PropertiesBuilder).dir_e6romp_k$ = dir_0;
  protoOf(PropertiesBuilder).has_3jevie_k$ = has;
  protoOf(PropertiesBuilder).has_tlcjwe_k$ = has_0;
  protoOf(PropertiesBuilder).host_97drqk_k$ = host;
  protoOf(PropertiesBuilder).host_y8s88k_k$ = host_0;
  protoOf(PropertiesBuilder).hostContext_p9odv_k$ = hostContext;
  protoOf(PropertiesBuilder).hostContext_yfbi5x_k$ = hostContext_0;
  protoOf(PropertiesBuilder).is_j1bckq_k$ = is;
  protoOf(PropertiesBuilder).is_fkc90y_k$ = is_0;
  protoOf(PropertiesBuilder).lang_o2lgwq_k$ = lang;
  protoOf(PropertiesBuilder).lang_6agh76_k$ = lang_0;
  protoOf(PropertiesBuilder).not_3hqvvl_k$ = not;
  protoOf(PropertiesBuilder).not_77smd3_k$ = not_0;
  protoOf(PropertiesBuilder).nthChild_vexhs6_k$ = nthChild;
  protoOf(PropertiesBuilder).nthChild_9e03cy_k$ = nthChild_0;
  protoOf(PropertiesBuilder).nthLastChild_jannkg_k$ = nthLastChild;
  protoOf(PropertiesBuilder).nthLastChild_l1s688_k$ = nthLastChild_0;
  protoOf(PropertiesBuilder).nthLastOfType_97kc5n_k$ = nthLastOfType;
  protoOf(PropertiesBuilder).nthLastOfType_33qifh_k$ = nthLastOfType_0;
  protoOf(PropertiesBuilder).nthOfType_bbcem7_k$ = nthOfType;
  protoOf(PropertiesBuilder).nthOfType_h35149_k$ = nthOfType_0;
  protoOf(PropertiesBuilder).where_qtas0d_k$ = where;
  protoOf(PropertiesBuilder).where_9d2nqt_k$ = where_0;
  protoOf(PropertiesBuilder).after_865zcv_k$ = after;
  protoOf(PropertiesBuilder).backdrop_crgsaj_k$ = backdrop;
  protoOf(PropertiesBuilder).before_4euk4k_k$ = before;
  protoOf(PropertiesBuilder).firstLetter_d4j2g5_k$ = firstLetter;
  protoOf(PropertiesBuilder).firstLine_4z1aon_k$ = firstLine;
  protoOf(PropertiesBuilder).grammarError_v7pmka_k$ = grammarError;
  protoOf(PropertiesBuilder).marker_fy5pep_k$ = marker;
  protoOf(PropertiesBuilder).placeholder_b14f54_k$ = placeholder;
  protoOf(PropertiesBuilder).selection_9mq1dd_k$ = selection;
  protoOf(PropertiesBuilder).spellingError_vvnir1_k$ = spellingError;
  protoOf(PropertiesBuilder).targetText_mk8vy5_k$ = targetText;
  protoOf(PropertiesBuilder).viewTransition_fpu7r3_k$ = viewTransition;
  protoOf(PropertiesBuilder).active_vgztat_k$ = active;
  protoOf(PropertiesBuilder).anyLink_3begid_k$ = anyLink;
  protoOf(PropertiesBuilder).blank_hb2nt_k$ = blank;
  protoOf(PropertiesBuilder).checked_emg2us_k$ = checked;
  protoOf(PropertiesBuilder).current_9sx6ea_k$ = current;
  protoOf(PropertiesBuilder).default_4ayi3q_k$ = default_0;
  protoOf(PropertiesBuilder).defined_4s7566_k$ = defined;
  protoOf(PropertiesBuilder).disabled_gruzxd_k$ = disabled;
  protoOf(PropertiesBuilder).empty_v1xgz6_k$ = empty;
  protoOf(PropertiesBuilder).enabled_rx2key_k$ = enabled;
  protoOf(PropertiesBuilder).first_9klqwb_k$ = first;
  protoOf(PropertiesBuilder).firstChild_5hltjj_k$ = firstChild;
  protoOf(PropertiesBuilder).firstOfType_nj5k0q_k$ = firstOfType;
  protoOf(PropertiesBuilder).focus_93hpab_k$ = focus;
  protoOf(PropertiesBuilder).focusVisible_m9az6p_k$ = focusVisible;
  protoOf(PropertiesBuilder).focusWithin_klnyrc_k$ = focusWithin;
  protoOf(PropertiesBuilder).fullscreen_d9rc80_k$ = fullscreen;
  protoOf(PropertiesBuilder).future_rhy754_k$ = future;
  protoOf(PropertiesBuilder).hover_833p3z_k$ = hover;
  protoOf(PropertiesBuilder).inRange_f304cd_k$ = inRange;
  protoOf(PropertiesBuilder).indeterminate_8bi1sw_k$ = indeterminate;
  protoOf(PropertiesBuilder).invalid_uvwpuk_k$ = invalid;
  protoOf(PropertiesBuilder).lastChild_9eelfv_k$ = lastChild;
  protoOf(PropertiesBuilder).lastOfType_buj0lo_k$ = lastOfType;
  protoOf(PropertiesBuilder).link_3rymlb_k$ = link;
  protoOf(PropertiesBuilder).localLink_b6wb1m_k$ = localLink;
  protoOf(PropertiesBuilder).nthCol_x2iug3_k$ = nthCol;
  protoOf(PropertiesBuilder).nthLastCol_5rhvzh_k$ = nthLastCol;
  protoOf(PropertiesBuilder).onlyChild_zzool_k$ = onlyChild;
  protoOf(PropertiesBuilder).onlyOfType_zgz0ym_k$ = onlyOfType;
  protoOf(PropertiesBuilder).optional_2a56j_k$ = optional;
  protoOf(PropertiesBuilder).outOfRange_1y0w2l_k$ = outOfRange;
  protoOf(PropertiesBuilder).past_pqy67r_k$ = past;
  protoOf(PropertiesBuilder).paused_hf9qel_k$ = paused;
  protoOf(PropertiesBuilder).pictureInPicture_kh7dy8_k$ = pictureInPicture;
  protoOf(PropertiesBuilder).placeholderShown_37lcg3_k$ = placeholderShown;
  protoOf(PropertiesBuilder).playing_81ey5_k$ = playing;
  protoOf(PropertiesBuilder).readOnly_c5hyyv_k$ = readOnly;
  protoOf(PropertiesBuilder).readWrite_9b9xde_k$ = readWrite;
  protoOf(PropertiesBuilder).required_mxoi9w_k$ = required;
  protoOf(PropertiesBuilder).root_pogsop_k$ = root;
  protoOf(PropertiesBuilder).scope_q06gc9_k$ = scope;
  protoOf(PropertiesBuilder).target_ukhchi_k$ = target;
  protoOf(PropertiesBuilder).targetWithin_us6r7l_k$ = targetWithin;
  protoOf(PropertiesBuilder).userInvalid_tz53zj_k$ = userInvalid;
  protoOf(PropertiesBuilder).userValid_imrb2u_k$ = userValid;
  protoOf(PropertiesBuilder).valid_iucyxt_k$ = valid;
  protoOf(PropertiesBuilder).visited_9o045r_k$ = visited;
  //endregion
  return _;
}));
