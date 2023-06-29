(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-react-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-react-core.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-legacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-legacy'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-legacy'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-react-legacy'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-legacy'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'kotlin-react-legacy'.");
    }
    root['kotlin-react-legacy'] = factory(typeof this['kotlin-react-legacy'] === 'undefined' ? {} : this['kotlin-react-legacy'], react, this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-react-core']);
  }
}(this, function (_, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core) {
  'use strict';
  //region block: imports
  var createElement = $module$react.createElement;
  var Children = $module$react.Children;
  var Fragment = $module$react.Fragment;
  var isValidElement = $module$react.isValidElement;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var protoOf = kotlin_kotlin.$_$.sb;
  var copyToArray = kotlin_kotlin.$_$.r6;
  var VOID = kotlin_kotlin.$_$.lh;
  var get_react = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.a;
  var addAll = kotlin_kotlin.$_$.t5;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var classMeta = kotlin_kotlin.$_$.ka;
  var first = kotlin_kotlin.$_$.d7;
  //endregion
  //region block: pre-declaration
  function child(element) {
    this.get_childList_6xpv01_k$().add_1j60pz_k$(element);
  }
  function unaryPlus(_this__u8e3s4) {
    this.child_k19wyq_k$(_this__u8e3s4);
  }
  function unaryPlus_0(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'react.ReactNode' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    this.child_k19wyq_k$(tmp$ret$2);
  }
  function child_0(type, props, handler) {
    if (handler == null) {
      this.child_k19wyq_k$(createElement(type, props));
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
    var tmp1_toTypedArray = tmp$ret$1.get_childList_6xpv01_k$();
    tmp$ret$2 = copyToArray(tmp1_toTypedArray);
    var children = tmp$ret$2;
    this.child_k19wyq_k$(createElement.apply(null, [type, props].concat([].slice.call(children.slice()))));
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
      this.child_x2s1oq_k$(type, props, handler);
      tmp_0 = Unit_getInstance();
    } else {
      child_0(type, props, handler);
      tmp_0 = Unit_getInstance();
    }
    return tmp_0;
  }
  function invoke(_this__u8e3s4) {
    this.child_k19wyq_k$(createElement(_this__u8e3s4));
  }
  function invoke_0(_this__u8e3s4, handler) {
    this.child$default_hg4qxv_k$(_this__u8e3s4, VOID, handler);
  }
  function invoke_1(_this__u8e3s4, value, handler) {
    this.child$default_hg4qxv_k$(_this__u8e3s4, VOID, RBuilder$invoke$lambda(value, handler));
  }
  function invoke_2(_this__u8e3s4, handler) {
    this.child$default_hg4qxv_k$(_this__u8e3s4, VOID, RBuilder$invoke$lambda_0(handler));
  }
  function child_1(klazz, handler) {
    this.invoke_bt9m9s_k$(get_react(klazz), handler);
  }
  function children(_this__u8e3s4) {
    addAll(this.get_childList_6xpv01_k$(), Children.toArray(_this__u8e3s4.children));
  }
  setMetadataFor(RBuilder, 'RBuilder', interfaceMeta);
  function attrs(handler) {
    handler(this.get_attrs_iou0l5_k$());
  }
  function set_key(value) {
    this.get_attrs_iou0l5_k$().key = value;
  }
  function get_key() {
    throw IllegalStateException_init_$Create$('');
  }
  function set_ref(value) {
    // Inline function 'react.ref' call
    var tmp0__set_ref__6pr2es = this.get_attrs_iou0l5_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__set_ref__6pr2es;
    tmp$ret$0.ref = value;
  }
  function get_ref() {
    throw IllegalStateException_init_$Create$('');
  }
  setMetadataFor(RElementBuilder, 'RElementBuilder', interfaceMeta, VOID, [RBuilder]);
  setMetadataFor(RBuilderImpl, 'RBuilderImpl', classMeta, VOID, [RBuilder]);
  setMetadataFor(RElementBuilderImpl, 'RElementBuilderImpl', classMeta, RBuilderImpl, [RElementBuilder, RBuilderImpl]);
  //endregion
  function set_ref_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$0.ref = value;
  }
  function get_ref_0(_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('');
  }
  function RBuilder$invoke$lambda($value, $handler) {
    return function ($this$child) {
      $this$child.get_attrs_iou0l5_k$().value = $value;
      $handler($this$child);
      return Unit_getInstance();
    };
  }
  function RBuilder$invoke$lambda$lambda$lambda($handler, $value) {
    return function ($this$createElement) {
      $handler($this$createElement, $value);
      return Unit_getInstance();
    };
  }
  function RBuilder$invoke$lambda$lambda($handler) {
    return function (value) {
      return createElement_0(RBuilder$invoke$lambda$lambda$lambda($handler, value));
    };
  }
  function RBuilder$invoke$lambda_0($handler) {
    return function ($this$child) {
      var tmp = $this$child.get_attrs_iou0l5_k$();
      tmp.children = RBuilder$invoke$lambda$lambda($handler);
      return Unit_getInstance();
    };
  }
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
    tmp.childList_1 = tmp$ret$0;
  }
  protoOf(RBuilderImpl).get_childList_6xpv01_k$ = function () {
    return this.childList_1;
  };
  function RElementBuilderImpl(attrs) {
    RBuilderImpl.call(this);
    this.attrs_1 = attrs;
  }
  protoOf(RElementBuilderImpl).get_attrs_iou0l5_k$ = function () {
    return this.attrs_1;
  };
  function createElement_0(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = createBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var nodes = tmp$ret$0.get_childList_6xpv01_k$();
    var tmp;
    if (nodes.get_size_woubt6_k$() === 0) {
      tmp = null;
    } else if (nodes.get_size_woubt6_k$() === 1 ? isValidElement(first(nodes)) : false) {
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
  protoOf(RBuilderImpl).child_k19wyq_k$ = child;
  protoOf(RBuilderImpl).child_x2s1oq_k$ = child_0;
  protoOf(RBuilderImpl).child$default_hg4qxv_k$ = child$default;
  protoOf(RBuilderImpl).child_ag9ei8_k$ = child_1;
  protoOf(RBuilderImpl).unaryPlus_c8p9bt_k$ = unaryPlus;
  protoOf(RBuilderImpl).unaryPlus_g7ydph_k$ = unaryPlus_0;
  protoOf(RBuilderImpl).invoke_7r4cgu_k$ = invoke;
  protoOf(RBuilderImpl).invoke_bt9m9s_k$ = invoke_0;
  protoOf(RBuilderImpl).invoke_oeyqnx_k$ = invoke_1;
  protoOf(RBuilderImpl).invoke_l422io_k$ = invoke_2;
  protoOf(RBuilderImpl).children_v4df_k$ = children;
  protoOf(RElementBuilderImpl).attrs_oqhqt1_k$ = attrs;
  protoOf(RElementBuilderImpl).set_key_z1d2r7_k$ = set_key;
  protoOf(RElementBuilderImpl).get_key_18j28a_k$ = get_key;
  protoOf(RElementBuilderImpl).set_ref_et661x_k$ = set_ref;
  protoOf(RElementBuilderImpl).get_ref_18ix1y_k$ = get_ref;
  protoOf(RElementBuilderImpl).child_k19wyq_k$ = child;
  protoOf(RElementBuilderImpl).child_x2s1oq_k$ = child_0;
  protoOf(RElementBuilderImpl).child$default_hg4qxv_k$ = child$default;
  protoOf(RElementBuilderImpl).child_ag9ei8_k$ = child_1;
  protoOf(RElementBuilderImpl).unaryPlus_c8p9bt_k$ = unaryPlus;
  protoOf(RElementBuilderImpl).unaryPlus_g7ydph_k$ = unaryPlus_0;
  protoOf(RElementBuilderImpl).invoke_7r4cgu_k$ = invoke;
  protoOf(RElementBuilderImpl).invoke_bt9m9s_k$ = invoke_0;
  protoOf(RElementBuilderImpl).invoke_oeyqnx_k$ = invoke_1;
  protoOf(RElementBuilderImpl).invoke_l422io_k$ = invoke_2;
  protoOf(RElementBuilderImpl).children_v4df_k$ = children;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = createElement_0;
  //endregion
  return _;
}));
