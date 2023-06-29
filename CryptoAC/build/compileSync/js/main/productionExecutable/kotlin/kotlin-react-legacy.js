(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-legacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-legacy'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-legacy'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-react-legacy'.");
    }
    root['kotlin-react-legacy'] = factory(typeof this['kotlin-react-legacy'] === 'undefined' ? {} : this['kotlin-react-legacy'], react, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, $module$react, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var createElement = $module$react.createElement;
  var Fragment = $module$react.Fragment;
  var isValidElement = $module$react.isValidElement;
  var protoOf = kotlin_kotlin.$_$.sa;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var copyToArray = kotlin_kotlin.$_$.c6;
  var VOID = kotlin_kotlin.$_$.lf;
  var interfaceMeta = kotlin_kotlin.$_$.v9;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var classMeta = kotlin_kotlin.$_$.k9;
  var first = kotlin_kotlin.$_$.m6;
  //endregion
  //region block: pre-declaration
  function child(element) {
    this.k4r().a(element);
  }
  function child_0(type, props, handler) {
    if (handler == null) {
      this.l4r(createElement(type, props));
      return Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RElementBuilder_0(props);
    // Inline function 'kotlin.contracts.contract' call
    handler(tmp0_apply);
    tmp$ret$1 = tmp0_apply;
    var tmp1_toTypedArray = tmp$ret$1.k4r();
    tmp$ret$2 = copyToArray(tmp1_toTypedArray);
    var children = tmp$ret$2;
    this.l4r(createElement.apply(null, [type, props].concat([].slice.call(children.slice()))));
  }
  function child$default(type, props, handler, $super) {
    var tmp;
    if (props === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'js.core.jso' call
      tmp$ret$0 = {};
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = props;
    }
    props = tmp;
    handler = handler === VOID ? null : handler;
    var tmp_0;
    if ($super === VOID) {
      this.m4r(type, props, handler);
      tmp_0 = Unit_getInstance();
    } else {
      child_0(type, props, handler);
      tmp_0 = Unit_getInstance();
    }
    return tmp_0;
  }
  function invoke(_this__u8e3s4, handler) {
    this.n4r(_this__u8e3s4, VOID, handler);
  }
  setMetadataFor(RBuilder, 'RBuilder', interfaceMeta);
  function attrs(handler) {
    handler(this.p4r());
  }
  setMetadataFor(RElementBuilder, 'RElementBuilder', interfaceMeta, VOID, [RBuilder]);
  setMetadataFor(RBuilderImpl, 'RBuilderImpl', classMeta, VOID, [RBuilder]);
  setMetadataFor(RElementBuilderImpl, 'RElementBuilderImpl', classMeta, RBuilderImpl, [RElementBuilder, RBuilderImpl]);
  //endregion
  function RBuilder() {
  }
  function RElementBuilder() {
  }
  function createBuilder() {
    return new RBuilderImpl();
  }
  function RElementBuilder_0(attrs) {
    return new RElementBuilderImpl(attrs);
  }
  function RBuilderImpl() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.r4r_1 = tmp$ret$0;
  }
  protoOf(RBuilderImpl).k4r = function () {
    return this.r4r_1;
  };
  function RElementBuilderImpl(attrs) {
    RBuilderImpl.call(this);
    this.t4r_1 = attrs;
  }
  protoOf(RElementBuilderImpl).p4r = function () {
    return this.t4r_1;
  };
  function createElement_0(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = createBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var nodes = tmp$ret$0.k4r();
    var tmp;
    if (nodes.i() === 0) {
      tmp = null;
    } else if (nodes.i() === 1 ? isValidElement(first(nodes)) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = first(nodes);
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_0 = Fragment;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(nodes);
      var tmp2_unsafeCast = createElement.apply(null, [tmp_0, VOID].concat([].slice.call(tmp$ret$3.slice())));
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = tmp2_unsafeCast;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    return tmp;
  }
  //region block: post-declaration
  protoOf(RBuilderImpl).l4r = child;
  protoOf(RBuilderImpl).m4r = child_0;
  protoOf(RBuilderImpl).n4r = child$default;
  protoOf(RBuilderImpl).o4r = invoke;
  protoOf(RElementBuilderImpl).q4r = attrs;
  protoOf(RElementBuilderImpl).l4r = child;
  protoOf(RElementBuilderImpl).m4r = child_0;
  protoOf(RElementBuilderImpl).n4r = child$default;
  protoOf(RElementBuilderImpl).o4r = invoke;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = createElement_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-react-legacy.js.map
