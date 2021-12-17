(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-extensions', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-extensions'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react'.");
    }root['kotlin-react'] = factory(typeof this['kotlin-react'] === 'undefined' ? {} : this['kotlin-react'], kotlin, this['kotlin-extensions'], react);
  }
}(this, function (_, Kotlin, $module$kotlin_extensions, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var clone = $module$kotlin_extensions.kotlinext.js.clone_issdgt$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var wrapFunction = Kotlin.wrapFunction;
  var createElement = $module$react.createElement;
  var Children = $module$react.Children;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Component = $module$react.Component;
  var PureComponent = $module$react.PureComponent;
  var Annotation = Kotlin.kotlin.Annotation;
  var isValidElement = $module$react.isValidElement;
  var asJsObject = $module$kotlin_extensions.kotlinext.js.asJsObject_s8jyvk$;
  var rawForwardRef = $module$react.forwardRef;
  var rawUseEffect = $module$react.useEffect;
  var rawUseInsertionEffect = $module$react.useInsertionEffect;
  var rawUseLayoutEffect = $module$react.useLayoutEffect;
  RBuilderMultiple.prototype = Object.create(RBuilderImpl.prototype);
  RBuilderMultiple.prototype.constructor = RBuilderMultiple;
  RBuilderSingle.prototype = Object.create(RBuilderImpl.prototype);
  RBuilderSingle.prototype.constructor = RBuilderSingle;
  RElementBuilderImpl.prototype = Object.create(RBuilderImpl.prototype);
  RElementBuilderImpl.prototype.constructor = RElementBuilderImpl;
  RComponent.prototype = Object.create(Component.prototype);
  RComponent.prototype.constructor = RComponent;
  RPureComponent.prototype = Object.create(PureComponent.prototype);
  RPureComponent.prototype.constructor = RPureComponent;
  function setState$lambda(closure$buildState) {
    return function (it) {
      var builder = closure$buildState;
      var $receiver = clone(it);
      builder($receiver);
      return $receiver;
    };
  }
  function setState($receiver, buildState) {
    $receiver.setState(setState$lambda(buildState));
  }
  function get_react($receiver) {
    return get_js($receiver);
  }
  function RStatics(klazz) {
    this.$delegate_j4nvxa$_0 = get_js(klazz);
  }
  Object.defineProperty(RStatics.prototype, 'contextType', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.contextType;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.contextType = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'defaultProps', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.defaultProps;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.defaultProps = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'displayName', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.displayName;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.displayName = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'getDerivedStateFromError', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.getDerivedStateFromError;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.getDerivedStateFromError = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'getDerivedStateFromProps', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.getDerivedStateFromProps;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.getDerivedStateFromProps = tmp$;
    }
  });
  RStatics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RStatics',
    interfaces: []
  };
  function EffectBuilder() {
  }
  EffectBuilder.prototype.cleanup_o14v8n$ = defineInlineFunction('kotlin-react.react.EffectBuilder.cleanup_o14v8n$', function (block) {
    this.push(block);
  });
  EffectBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EffectBuilder',
    interfaces: []
  };
  function createEffectCallback$lambda(closure$effect) {
    return function () {
      var cleanups = [];
      closure$effect(cleanups);
      return buildCleanup(cleanups);
    };
  }
  function createEffectCallback(effect) {
    return createEffectCallback$lambda(effect);
  }
  function buildCleanup$lambda(closure$cleanups) {
    return function () {
      var tmp$, tmp$_0;
      tmp$ = closure$cleanups;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var cleanup = tmp$[tmp$_0];
        cleanup();
      }
      return Unit;
    };
  }
  function buildCleanup(cleanups) {
    if (cleanups.length === 0)
      return undefined;
    return buildCleanup$lambda(cleanups);
  }
  function fc$lambda$lambda(closure$func, closure$props) {
    return function ($receiver) {
      closure$func($receiver, closure$props);
      return Unit;
    };
  }
  function fc$lambda(closure$func) {
    return function (props) {
      return createElement_0(fc$lambda$lambda(closure$func, props));
    };
  }
  function fc(func) {
    var component = fc$lambda(func);
    return component;
  }
  function fc_0(displayName, func) {
    var $receiver = fc(func);
    $receiver.displayName = displayName;
    return $receiver;
  }
  var functionComponent = defineInlineFunction('kotlin-react.react.functionComponent_4mavxa$', wrapFunction(function () {
    var fc = _.react.fc_4mavxa$;
    return function (func) {
      return fc(func);
    };
  }));
  var functionComponent_0 = defineInlineFunction('kotlin-react.react.functionComponent_gcrbg4$', wrapFunction(function () {
    var fc = _.react.fc_gcrbg4$;
    return function (displayName, func) {
      return fc(displayName, func);
    };
  }));
  function FunctionStateInstance() {
  }
  FunctionStateInstance.prototype.getValue_d6mtq7$ = defineInlineFunction('kotlin-react.react.FunctionStateInstance.getValue_d6mtq7$', function (thisRef, property) {
    return this[0];
  });
  FunctionStateInstance.prototype.setValue_havc3g$ = defineInlineFunction('kotlin-react.react.FunctionStateInstance.setValue_havc3g$', wrapFunction(function () {
    function FunctionStateInstance$setValue$lambda(closure$value) {
      return function () {
        return closure$value;
      };
    }
    return function (thisRef, property, value) {
      this[1](FunctionStateInstance$setValue$lambda(value));
    };
  }));
  FunctionStateInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionStateInstance',
    interfaces: []
  };
  function invoke($receiver, component) {
    return $receiver.call(null, component);
  }
  function invoke$lambda$lambda(closure$component, closure$props) {
    return function ($receiver) {
      closure$component($receiver, closure$props);
      return Unit;
    };
  }
  function invoke$lambda(closure$component) {
    return function (props) {
      return createElement_0(invoke$lambda$lambda(closure$component, props));
    };
  }
  function invoke_0($receiver, component) {
    return $receiver.call(null, invoke$lambda(component));
  }
  function invoke$lambda$lambda_0(closure$component, closure$props) {
    return function ($receiver) {
      closure$component($receiver, closure$props);
      return Unit;
    };
  }
  function invoke$lambda_0(closure$component) {
    return function (props) {
      return createElement_0(invoke$lambda$lambda_0(closure$component, props));
    };
  }
  function invoke_1($receiver, config, component) {
    return $receiver.call(null, invoke$lambda_0(component), config);
  }
  function allOf$lambda(closure$hocs) {
    return function (it) {
      var $receiver = closure$hocs;
      var tmp$;
      var accumulator = it;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        accumulator = invoke(element, accumulator);
      }
      return accumulator;
    };
  }
  function allOf(hocs) {
    return allOf$lambda(hocs);
  }
  var IntrinsicType = defineInlineFunction('kotlin-react.react.IntrinsicType_xbt60r$', function (tagName) {
    return tagName;
  });
  var get_key = defineInlineFunction('kotlin-react.react.get_key_efnnzi$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function ($receiver) {
      throw IllegalStateException_init(''.toString());
    };
  }));
  var set_key = defineInlineFunction('kotlin-react.react.set_key_nvjkkv$', function ($receiver, value) {
    $receiver.key = value;
  });
  var get_ref = defineInlineFunction('kotlin-react.react.get_ref_efnnzi$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function ($receiver) {
      throw IllegalStateException_init(''.toString());
    };
  }));
  var set_ref = defineInlineFunction('kotlin-react.react.set_ref_mtffaz$', function ($receiver, value) {
    $receiver.ref = value;
  });
  function RBuilder() {
  }
  RBuilder.prototype.child_30b5ua$ = function (element) {
    this.childList.add_11rb$(element);
  };
  RBuilder.prototype.unaryPlus_m8hz4t$ = function ($receiver) {
    this.child_30b5ua$($receiver);
  };
  RBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.child_30b5ua$($receiver);
  };
  RBuilder.prototype.child_1mw94g$$default = function (type, props, handler) {
    if (handler == null) {
      this.child_30b5ua$(createElement(type, props));
      return;
    }var $receiver = RElementBuilder_0(props);
    handler($receiver);
    var children = copyToArray($receiver.childList);
    this.child_30b5ua$(createElement.apply(null, [type, props].concat(children)));
  };
  RBuilder.prototype.child_1mw94g$ = function (type, props, handler, callback$default) {
    if (props === void 0) {
      props = {};
    }if (handler === void 0)
      handler = null;
    callback$default ? callback$default(type, props, handler) : this.child_1mw94g$$default(type, props, handler);
  };
  RBuilder.prototype.invoke_r7bapy$ = function ($receiver) {
    this.child_30b5ua$(createElement($receiver));
  };
  RBuilder.prototype.invoke_qk0v40$ = function ($receiver, handler) {
    this.child_1mw94g$($receiver, void 0, handler);
  };
  function RBuilder$invoke$lambda(closure$value, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.value = closure$value;
      closure$handler($receiver);
      return Unit;
    };
  }
  RBuilder.prototype.invoke_snhqu5$ = function ($receiver, value, handler) {
    this.child_1mw94g$($receiver, void 0, RBuilder$invoke$lambda(value, handler));
  };
  function RBuilder$invoke$lambda$lambda$lambda(closure$handler, closure$value) {
    return function ($receiver) {
      closure$handler($receiver, closure$value);
      return Unit;
    };
  }
  function RBuilder$invoke$lambda$lambda(closure$handler) {
    return function (value) {
      return createElement_0(RBuilder$invoke$lambda$lambda$lambda(closure$handler, value));
    };
  }
  function RBuilder$invoke$lambda_0(closure$handler) {
    return function ($receiver) {
      $receiver.attrs.children = RBuilder$invoke$lambda$lambda(closure$handler);
      return Unit;
    };
  }
  RBuilder.prototype.invoke_c0v1gl$ = function ($receiver, handler) {
    this.child_1mw94g$($receiver, void 0, RBuilder$invoke$lambda_0(handler));
  };
  RBuilder.prototype.child_up9nw1$ = function (klazz, handler) {
    this.invoke_qk0v40$(get_react(klazz), handler);
  };
  RBuilder.prototype.children_w8hwhj$ = function ($receiver) {
    addAll(this.childList, Children.toArray($receiver.children));
  };
  RBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RBuilder',
    interfaces: []
  };
  function RBuilder_0() {
    return new RBuilderImpl();
  }
  var child = defineInlineFunction('kotlin-react.react.child_eipcs9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, $receiver, handler) {
      $receiver.child_up9nw1$(getKClass(C_0), handler);
    };
  }));
  function RBuilderImpl() {
    this.childList_z394dm$_0 = ArrayList_init();
  }
  Object.defineProperty(RBuilderImpl.prototype, 'childList', {
    configurable: true,
    get: function () {
      return this.childList_z394dm$_0;
    }
  });
  RBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RBuilderImpl',
    interfaces: [RBuilder]
  };
  function RBuilderMultiple() {
    RBuilderImpl.call(this);
  }
  RBuilderMultiple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RBuilderMultiple',
    interfaces: [RBuilderImpl]
  };
  function buildElements(builder, handler) {
    var tmp$;
    handler(builder);
    var nodes = builder.childList;
    switch (nodes.size) {
      case 0:
        tmp$ = null;
        break;
      case 1:
        tmp$ = first(nodes);
        break;
      default:var tmp$_0 = $module$react.Fragment;
        var $receiver = {};
        tmp$ = createElement.apply(null, [tmp$_0, $receiver].concat(copyToArray(nodes)));
        break;
    }
    return tmp$;
  }
  function RBuilderSingle() {
    RBuilderImpl.call(this);
  }
  RBuilderSingle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RBuilderSingle',
    interfaces: [RBuilderImpl]
  };
  var buildElement = defineInlineFunction('kotlin-react.react.buildElement_wi9ndb$', wrapFunction(function () {
    var first = Kotlin.kotlin.collections.first_2p1efm$;
    return function (rBuilder, handler) {
      handler(rBuilder);
      return first(rBuilder.childList);
    };
  }));
  var buildElement_0 = defineInlineFunction('kotlin-react.react.buildElement_zepujl$', wrapFunction(function () {
    var RBuilder = _.react.createBuilder;
    var first = Kotlin.kotlin.collections.first_2p1efm$;
    return function (handler) {
      var rBuilder = RBuilder();
      handler(rBuilder);
      return first(rBuilder.childList);
    };
  }));
  function RElementBuilder() {
  }
  RElementBuilder.prototype.attrs_37755u$ = function (handler) {
    handler(this.attrs);
  };
  Object.defineProperty(RElementBuilder.prototype, 'key', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      this.attrs.key = value;
    }
  });
  Object.defineProperty(RElementBuilder.prototype, 'ref', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      this.attrs.ref = value;
    }
  });
  RElementBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RElementBuilder',
    interfaces: [RBuilder]
  };
  function RElementBuilder_0(attrs) {
    return new RElementBuilderImpl(attrs);
  }
  function RElementBuilderImpl(attrs) {
    RBuilderImpl.call(this);
    this.attrs_rox8qs$_0 = attrs;
  }
  Object.defineProperty(RElementBuilderImpl.prototype, 'attrs', {
    get: function () {
      return this.attrs_rox8qs$_0;
    }
  });
  RElementBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RElementBuilderImpl',
    interfaces: [RBuilderImpl, RElementBuilder]
  };
  function RComponent() {
  }
  RComponent.prototype.init_b4e81d$ = function ($receiver) {
  };
  RComponent.prototype.init_xibzyo$ = function ($receiver, props) {
  };
  function RComponent$render$lambda(this$RComponent) {
    return function ($receiver) {
      this$RComponent.render_ss14n$($receiver);
      return Unit;
    };
  }
  RComponent.prototype.render = function () {
    return createElement_0(RComponent$render$lambda(this));
  };
  RComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RComponent',
    interfaces: []
  };
  function RComponent_init($this) {
    $this = $this || Object.create(RComponent.prototype);
    Component.call($this);
    RComponent.call($this);
    var $receiver = {};
    $this.init_b4e81d$($receiver);
    $this.state = $receiver;
    return $this;
  }
  function RComponent_init_0(props, $this) {
    $this = $this || Object.create(RComponent.prototype);
    Component.call($this, props);
    RComponent.call($this);
    var $receiver = {};
    $this.init_xibzyo$($receiver, props);
    $this.state = $receiver;
    return $this;
  }
  function RPureComponent() {
  }
  RPureComponent.prototype.init_b4e81d$ = function ($receiver) {
  };
  RPureComponent.prototype.init_xibzyo$ = function ($receiver, props) {
  };
  function RPureComponent$render$lambda(this$RPureComponent) {
    return function ($receiver) {
      this$RPureComponent.render_ss14n$($receiver);
      return Unit;
    };
  }
  RPureComponent.prototype.render = function () {
    return createElement_0(RPureComponent$render$lambda(this));
  };
  RPureComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RPureComponent',
    interfaces: []
  };
  function RPureComponent_init($this) {
    $this = $this || Object.create(RPureComponent.prototype);
    PureComponent.call($this);
    RPureComponent.call($this);
    var $receiver = {};
    $this.init_b4e81d$($receiver);
    $this.state = $receiver;
    return $this;
  }
  function RPureComponent_init_0(props, $this) {
    $this = $this || Object.create(RPureComponent.prototype);
    PureComponent.call($this, props);
    RPureComponent.call($this);
    var $receiver = {};
    $this.init_xibzyo$($receiver, props);
    $this.state = $receiver;
    return $this;
  }
  function forEachElement$lambda(closure$handler) {
    return function (it) {
      var element = asElementOrNull(it);
      if (element != null) {
        closure$handler(element);
      }return Unit;
    };
  }
  function forEachElement($receiver, children, handler) {
    $receiver.forEach(children, forEachElement$lambda(handler));
  }
  function fallback($receiver, handler) {
    $receiver.fallback = createElement_0(handler);
  }
  function ReactDsl() {
  }
  ReactDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactDsl',
    interfaces: [Annotation]
  };
  function createElement_0(block) {
    var tmp$;
    var $receiver = RBuilder_0();
    block($receiver);
    var nodes = $receiver.childList;
    if (nodes.size === 0)
      tmp$ = null;
    else if (nodes.size === 1 && isValidElement(first(nodes))) {
      tmp$ = first(nodes);
    } else {
      tmp$ = createElement.apply(null, [$module$react.Fragment, void 0].concat(copyToArray(nodes)));
    }
    return tmp$;
  }
  var cloneElement = defineInlineFunction('kotlin-react.react.cloneElement_1slffo$', wrapFunction(function () {
    var cloneElement = _.$$importsForInline$$.react.cloneElement;
    return function (element, children, props) {
      var $receiver = {};
      props($receiver);
      return cloneElement.apply(null, [element, $receiver].concat(children));
    };
  }));
  var ReactNode = defineInlineFunction('kotlin-react.react.ReactNode_61zpoe$', function (string) {
    return string;
  });
  function asStringOrNull($receiver) {
    var tmp$;
    return typeof (tmp$ = $receiver) === 'string' ? tmp$ : null;
  }
  function asElementOrNull($receiver) {
    if (asJsObject($receiver).hasOwnProperty('$$typeof')) {
      return $receiver;
    } else
      return null;
  }
  var RefCallback = defineInlineFunction('kotlin-react.react.RefCallback_dajwzo$', function (callback) {
    return callback;
  });
  var useRefCallback = defineInlineFunction('kotlin-react.react.useRefCallback_ar7qiy$', wrapFunction(function () {
    var rawUseCallback = _.$$importsForInline$$.react.useCallback;
    return function (dependencies, callback) {
      return rawUseCallback(callback, dependencies);
    };
  }));
  function BoxedState(state) {
    this.state = state;
  }
  BoxedState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxedState',
    interfaces: []
  };
  function StateSetter() {
  }
  StateSetter.prototype.invoke_11rb$ = defineInlineFunction('kotlin-react.react.StateSetter.invoke_11rb$', function (value) {
    this(value);
  });
  StateSetter.prototype.invoke_ru8m0w$ = defineInlineFunction('kotlin-react.react.StateSetter.invoke_ru8m0w$', function (transform) {
    this(transform);
  });
  StateSetter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateSetter',
    interfaces: []
  };
  function StateInstance() {
  }
  StateInstance.prototype.component1 = defineInlineFunction('kotlin-react.react.StateInstance.component1', function () {
    return this[0];
  });
  StateInstance.prototype.component2 = defineInlineFunction('kotlin-react.react.StateInstance.component2', function () {
    return this[1];
  });
  StateInstance.prototype.getValue_d6mtq7$ = defineInlineFunction('kotlin-react.react.StateInstance.getValue_d6mtq7$', function (thisRef, property) {
    return this[0];
  });
  StateInstance.prototype.setValue_havc3g$ = defineInlineFunction('kotlin-react.react.StateInstance.setValue_havc3g$', function (thisRef, property, value) {
    this[1](value);
  });
  StateInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateInstance',
    interfaces: []
  };
  function SuspenseConfig(timeoutMs) {
    var $receiver = {};
    $receiver.timeoutMs = timeoutMs;
    return $receiver;
  }
  function forwardRef$lambda$lambda(closure$handler, closure$props, closure$ref) {
    return function ($receiver) {
      closure$handler($receiver, closure$props, closure$ref);
      return Unit;
    };
  }
  function forwardRef$lambda(closure$handler) {
    return function (props, ref) {
      return createElement_0(forwardRef$lambda$lambda(closure$handler, props, ref));
    };
  }
  function forwardRef(handler) {
    return rawForwardRef(forwardRef$lambda(handler));
  }
  var useCallback = defineInlineFunction('kotlin-react.react.useCallback_3tr83r$', wrapFunction(function () {
    var rawUseCallback = _.$$importsForInline$$.react.useCallback;
    return function (dependencies, callback) {
      return rawUseCallback(callback, dependencies);
    };
  }));
  function useEffect(effect) {
    var callback = createEffectCallback(effect);
    rawUseEffect(callback);
  }
  function useEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    rawUseEffect(callback, dependencies);
  }
  function useEffectOnce(effect) {
    var callback = createEffectCallback(effect);
    rawUseEffect(callback, []);
  }
  function useInsertionEffect(effect) {
    var callback = createEffectCallback(effect);
    rawUseInsertionEffect(callback);
  }
  function useInsertionEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    rawUseInsertionEffect(callback, dependencies);
  }
  function useLayoutEffect(effect) {
    var callback = createEffectCallback(effect);
    rawUseLayoutEffect(callback);
  }
  function useLayoutEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    rawUseLayoutEffect(callback, dependencies);
  }
  function useLayoutEffectOnce(effect) {
    var callback = createEffectCallback(effect);
    rawUseLayoutEffect(callback, []);
  }
  var useMemo = defineInlineFunction('kotlin-react.react.useMemo_58jryq$', wrapFunction(function () {
    var rawUseMemo = _.$$importsForInline$$.react.useMemo;
    return function (dependencies, callback) {
      return rawUseMemo(callback, dependencies);
    };
  }));
  var useRefValue = defineInlineFunction('kotlin-react.react.useRefValue_30y1fr$', wrapFunction(function () {
    var useRef = _.$$importsForInline$$.react.useRef;
    return function () {
      return useRef();
    };
  }));
  var useRefValue_0 = defineInlineFunction('kotlin-react.react.useRefValue_issdgt$', wrapFunction(function () {
    var useRef = _.$$importsForInline$$.react.useRef;
    return function (initialValue) {
      return useRef(initialValue);
    };
  }));
  function RefValueInstance() {
  }
  RefValueInstance.prototype.getValue_d6mtq7$ = defineInlineFunction('kotlin-react.react.RefValueInstance.getValue_d6mtq7$', function (thisRef, property) {
    return this.current;
  });
  RefValueInstance.prototype.setValue_havc3g$ = defineInlineFunction('kotlin-react.react.RefValueInstance.setValue_havc3g$', function (thisRef, property, value) {
    this.current = value;
  });
  RefValueInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefValueInstance',
    interfaces: []
  };
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  var package$react = _.react || (_.react = {});
  package$react.setState_nm1tvw$ = setState;
  package$react.get_react_2wnr96$ = get_react;
  package$react.RStatics = RStatics;
  package$react.EffectBuilder = EffectBuilder;
  package$react.createEffectCallback_1ce2r7$ = createEffectCallback;
  package$react.fc_4mavxa$ = fc;
  package$react.fc_gcrbg4$ = fc_0;
  package$react.functionComponent_4mavxa$ = functionComponent;
  package$react.functionComponent_gcrbg4$ = functionComponent_0;
  package$react.FunctionStateInstance = FunctionStateInstance;
  package$react.invoke_5nywq9$ = invoke;
  package$react.invoke_62zrbx$ = invoke_0;
  package$react.invoke_z2wxje$ = invoke_1;
  package$react.allOf_s4sbr1$ = allOf;
  package$react.IntrinsicType_xbt60r$ = IntrinsicType;
  package$react.get_key_efnnzi$ = get_key;
  package$react.set_key_nvjkkv$ = set_key;
  package$react.get_ref_efnnzi$ = get_ref;
  package$react.set_ref_mtffaz$ = set_ref;
  $$importsForInline$$['kotlin-react'] = _;
  package$react.RBuilder = RBuilder;
  package$react.createBuilder = RBuilder_0;
  package$react.RBuilderImpl = RBuilderImpl;
  package$react.RBuilderMultiple = RBuilderMultiple;
  package$react.buildElements_wi9ndb$ = buildElements;
  package$react.RBuilderSingle = RBuilderSingle;
  package$react.buildElement_wi9ndb$ = buildElement;
  package$react.buildElement_zepujl$ = buildElement_0;
  package$react.RElementBuilder = RElementBuilder;
  package$react.RElementBuilder_4vdyb1$ = RElementBuilder_0;
  package$react.RElementBuilderImpl = RElementBuilderImpl;
  package$react.RComponent_init_ftywkw$ = RComponent_init;
  package$react.RComponent_init_5xgh2u$ = RComponent_init_0;
  package$react.RComponent = RComponent;
  package$react.RPureComponent_init_ftywkw$ = RPureComponent_init;
  package$react.RPureComponent_init_5xgh2u$ = RPureComponent_init_0;
  package$react.RPureComponent = RPureComponent;
  package$react.forEachElement_t3nwxq$ = forEachElement;
  package$react.fallback_i4zzdj$ = fallback;
  package$react.ReactDsl = ReactDsl;
  package$react.createElement_zepujl$ = createElement_0;
  $$importsForInline$$.react = $module$react;
  package$react.cloneElement_1slffo$ = cloneElement;
  package$react.ReactNode_61zpoe$ = ReactNode;
  package$react.asStringOrNull_m8hz4t$ = asStringOrNull;
  package$react.asElementOrNull_m8hz4t$ = asElementOrNull;
  package$react.RefCallback_dajwzo$ = RefCallback;
  package$react.useRefCallback_ar7qiy$ = useRefCallback;
  package$react.BoxedState = BoxedState;
  package$react.StateSetter = StateSetter;
  package$react.StateInstance = StateInstance;
  package$react.SuspenseConfig_za3lpa$ = SuspenseConfig;
  package$react.forwardRef_qsbpji$ = forwardRef;
  package$react.useCallback_3tr83r$ = useCallback;
  package$react.useEffect_yy86ve$ = useEffect;
  package$react.useEffect_c147l4$ = useEffect_0;
  package$react.useEffectOnce_yy86ve$ = useEffectOnce;
  package$react.useInsertionEffect_yy86ve$ = useInsertionEffect;
  package$react.useInsertionEffect_c147l4$ = useInsertionEffect_0;
  package$react.useLayoutEffect_yy86ve$ = useLayoutEffect;
  package$react.useLayoutEffect_c147l4$ = useLayoutEffect_0;
  package$react.useLayoutEffectOnce_yy86ve$ = useLayoutEffectOnce;
  package$react.useMemo_58jryq$ = useMemo;
  package$react.useRefValue_30y1fr$ = useRefValue;
  package$react.useRefValue_issdgt$ = useRefValue_0;
  package$react.RefValueInstance = RefValueInstance;
  RBuilderImpl.prototype.child_30b5ua$ = RBuilder.prototype.child_30b5ua$;
  RBuilderImpl.prototype.child_1mw94g$$default = RBuilder.prototype.child_1mw94g$$default;
  RBuilderImpl.prototype.child_up9nw1$ = RBuilder.prototype.child_up9nw1$;
  RBuilderImpl.prototype.unaryPlus_m8hz4t$ = RBuilder.prototype.unaryPlus_m8hz4t$;
  RBuilderImpl.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RBuilderImpl.prototype.invoke_r7bapy$ = RBuilder.prototype.invoke_r7bapy$;
  RBuilderImpl.prototype.invoke_qk0v40$ = RBuilder.prototype.invoke_qk0v40$;
  RBuilderImpl.prototype.invoke_snhqu5$ = RBuilder.prototype.invoke_snhqu5$;
  RBuilderImpl.prototype.invoke_c0v1gl$ = RBuilder.prototype.invoke_c0v1gl$;
  RBuilderImpl.prototype.children_w8hwhj$ = RBuilder.prototype.children_w8hwhj$;
  RBuilderImpl.prototype.child_1mw94g$ = RBuilder.prototype.child_1mw94g$;
  RElementBuilder.prototype.child_30b5ua$ = RBuilder.prototype.child_30b5ua$;
  RElementBuilder.prototype.child_1mw94g$$default = RBuilder.prototype.child_1mw94g$$default;
  RElementBuilder.prototype.child_up9nw1$ = RBuilder.prototype.child_up9nw1$;
  RElementBuilder.prototype.unaryPlus_m8hz4t$ = RBuilder.prototype.unaryPlus_m8hz4t$;
  RElementBuilder.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RElementBuilder.prototype.invoke_r7bapy$ = RBuilder.prototype.invoke_r7bapy$;
  RElementBuilder.prototype.invoke_qk0v40$ = RBuilder.prototype.invoke_qk0v40$;
  RElementBuilder.prototype.invoke_snhqu5$ = RBuilder.prototype.invoke_snhqu5$;
  RElementBuilder.prototype.invoke_c0v1gl$ = RBuilder.prototype.invoke_c0v1gl$;
  RElementBuilder.prototype.children_w8hwhj$ = RBuilder.prototype.children_w8hwhj$;
  RElementBuilder.prototype.child_1mw94g$ = RBuilder.prototype.child_1mw94g$;
  RElementBuilderImpl.prototype.attrs_37755u$ = RElementBuilder.prototype.attrs_37755u$;
  Object.defineProperty(RElementBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'key'));
  Object.defineProperty(RElementBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'ref'));
  RElementBuilderImpl.prototype.child_30b5ua$ = RElementBuilder.prototype.child_30b5ua$;
  RElementBuilderImpl.prototype.child_1mw94g$$default = RElementBuilder.prototype.child_1mw94g$$default;
  RElementBuilderImpl.prototype.child_up9nw1$ = RElementBuilder.prototype.child_up9nw1$;
  RElementBuilderImpl.prototype.unaryPlus_m8hz4t$ = RElementBuilder.prototype.unaryPlus_m8hz4t$;
  RElementBuilderImpl.prototype.unaryPlus_pdl1vz$ = RElementBuilder.prototype.unaryPlus_pdl1vz$;
  RElementBuilderImpl.prototype.invoke_r7bapy$ = RElementBuilder.prototype.invoke_r7bapy$;
  RElementBuilderImpl.prototype.invoke_qk0v40$ = RElementBuilder.prototype.invoke_qk0v40$;
  RElementBuilderImpl.prototype.invoke_snhqu5$ = RElementBuilder.prototype.invoke_snhqu5$;
  RElementBuilderImpl.prototype.invoke_c0v1gl$ = RElementBuilder.prototype.invoke_c0v1gl$;
  RElementBuilderImpl.prototype.children_w8hwhj$ = RElementBuilder.prototype.children_w8hwhj$;
  RElementBuilderImpl.prototype.child_1mw94g$ = RElementBuilder.prototype.child_1mw94g$;
  Kotlin.defineModule('kotlin-react', _);
  return _;
}));
