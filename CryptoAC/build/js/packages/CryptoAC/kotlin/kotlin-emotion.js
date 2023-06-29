(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@emotion/css', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@emotion/css'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'kotlin-emotion'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-emotion'.");
    }
    root['kotlin-emotion'] = factory(typeof this['kotlin-emotion'] === 'undefined' ? {} : this['kotlin-emotion'], this['@emotion/css'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, $module$_emotion_css_2enn37, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var css = $module$_emotion_css_2enn37.css;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  //endregion
  //region block: pre-declaration
  //endregion
  function ClassName(block) {
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
    return css(tmp$ret$2);
  }
  function get_FROM_PERCENTAGE() {
    _init_properties_keyframes_ext_kt__bgn2y();
    return FROM_PERCENTAGE;
  }
  var FROM_PERCENTAGE;
  function get_TO_PERCENTAGE() {
    _init_properties_keyframes_ext_kt__bgn2y();
    return TO_PERCENTAGE;
  }
  var TO_PERCENTAGE;
  var properties_initialized_keyframes_ext_kt_pgb1s8;
  function _init_properties_keyframes_ext_kt__bgn2y() {
    if (properties_initialized_keyframes_ext_kt_pgb1s8) {
    } else {
      properties_initialized_keyframes_ext_kt_pgb1s8 = true;
      var tmp$ret$2;
      // Inline function 'csstype.pct' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '0%';
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      FROM_PERCENTAGE = tmp$ret$2;
      var tmp$ret$2_0;
      // Inline function 'csstype.pct' call
      var tmp$ret$1_0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_0 = '100%';
      var tmp$ret$0_0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_0 = tmp0_unsafeCast_0;
      tmp$ret$1_0 = tmp$ret$0_0;
      tmp$ret$2_0 = tmp$ret$1_0;
      TO_PERCENTAGE = tmp$ret$2_0;
    }
  }
  function css_0(_this__u8e3s4, block) {
    var tmp$ret$3;
    // Inline function 'emotion.css.ClassName' call
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
    tmp$ret$3 = css(tmp$ret$2);
    _this__u8e3s4.className = tmp$ret$3;
  }
  function set_index(_set____db54di) {
    index = _set____db54di;
  }
  function get_index() {
    return index;
  }
  var index;
  //region block: init
  index = 0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-emotion.js.map
