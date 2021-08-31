(function (_, Kotlin, $module$react, $module$kotlin_extensions) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var Annotation = Kotlin.kotlin.Annotation;
  var createElement = $module$react.createElement;
  var clone = $module$kotlin_extensions.kotlinext.js.clone_issdgt$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Children = $module$react.Children;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var throwCCE = Kotlin.throwCCE;
  var cloneElement = $module$react.cloneElement;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var wrapFunction = Kotlin.wrapFunction;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var rawForwardRef = $module$react.forwardRef;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var asJsObject = $module$kotlin_extensions.kotlinext.js.asJsObject_s8jyvk$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Component = $module$react.Component;
  var PureComponent = $module$react.PureComponent;
  var rawUseEffect = $module$react.useEffect;
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
      return buildElements_0(invoke$lambda$lambda(closure$component, props));
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
      return buildElements_0(invoke$lambda$lambda_0(closure$component, props));
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
  function ReactDsl() {
  }
  ReactDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactDsl',
    interfaces: [Annotation]
  };
  function RBuilder() {
  }
  RBuilder.prototype.child_52psg1$ = function (element) {
    this.childList.add_11rb$(element);
    return element;
  };
  RBuilder.prototype.unaryPlus_84gpoi$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilder.prototype.child_k3oess$ = function (type, props, children) {
    return this.child_52psg1$(createElement.apply(null, [type, props].concat(copyToArray(children))));
  };
  RBuilder.prototype.child_4dvv5y$ = function (type, props, handler) {
    var $receiver = RElementBuilder_0(props);
    handler($receiver);
    var children = $receiver.childList;
    return this.child_k3oess$(type, props, children);
  };
  RBuilder.prototype.invoke_eb8iu4$ = function ($receiver, handler) {
    return this.child_4dvv5y$($receiver, {}, handler);
  };
  RBuilder.prototype.invoke_csqs6z$ = function ($receiver, value, handler) {
    var $receiver_0 = {};
    $receiver_0.value = value;
    return this.child_4dvv5y$($receiver, $receiver_0, handler);
  };
  function RBuilder$invoke$lambda$lambda$lambda(closure$handler, closure$value) {
    return function ($receiver) {
      closure$handler($receiver, closure$value);
      return Unit;
    };
  }
  function RBuilder$invoke$lambda$lambda(closure$handler) {
    return function (value) {
      return buildElements_0(RBuilder$invoke$lambda$lambda$lambda(closure$handler, value));
    };
  }
  function RBuilder$invoke$lambda($receiver) {
    return Unit;
  }
  RBuilder.prototype.invoke_ory6b3$ = function ($receiver, handler) {
    var $receiver_0 = {};
    $receiver_0.children = RBuilder$invoke$lambda$lambda(handler);
    return this.child_4dvv5y$($receiver, $receiver_0, RBuilder$invoke$lambda);
  };
  RBuilder.prototype.node_rwypko$$default = function ($receiver, props, children) {
    return this.child_k3oess$($receiver, clone(props), children);
  };
  RBuilder.prototype.node_rwypko$ = function ($receiver, props, children, callback$default) {
    if (children === void 0)
      children = emptyList();
    return callback$default ? callback$default($receiver, props, children) : this.node_rwypko$$default($receiver, props, children);
  };
  RBuilder.prototype.child_ssazr1$ = function (klazz, handler) {
    return this.invoke_eb8iu4$(get_rClass(klazz), handler);
  };
  function RBuilder$childFunction$lambda(closure$children) {
    return function (value) {
      var rBuilder = RBuilder_0();
      closure$children(rBuilder, value);
      return first(rBuilder.childList);
    };
  }
  RBuilder.prototype.childFunction_2656uf$ = function (klazz, handler, children) {
    var tmp$ = get_rClass(klazz);
    var $receiver = RElementBuilder_0({});
    handler($receiver);
    return this.child_k3oess$(tmp$, $receiver.attrs, listOf(RBuilder$childFunction$lambda(children)));
  };
  RBuilder.prototype.node_3ecl1l$$default = function (klazz, props, children) {
    return this.node_rwypko$(get_rClass(klazz), props, children);
  };
  RBuilder.prototype.node_3ecl1l$ = function (klazz, props, children, callback$default) {
    if (children === void 0)
      children = emptyList();
    return callback$default ? callback$default(klazz, props, children) : this.node_3ecl1l$$default(klazz, props, children);
  };
  RBuilder.prototype.children_yllgzm$ = function ($receiver) {
    addAll(this.childList, Children.toArray(get_children($receiver)));
  };
  RBuilder.prototype.children_48djri$ = function ($receiver, value) {
    var tmp$;
    this.childList.add_11rb$((typeof (tmp$ = get_children($receiver)) === 'function' ? tmp$ : throwCCE())(value));
  };
  RBuilder.prototype.renderEach_ezdo97$ = function ($receiver, fn) {
    var tmp$ = this.childList;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var rBuilder = RBuilder_0();
      fn(rBuilder, item);
      tmp$_1.call(destination, first(rBuilder.childList));
    }
    tmp$.add_11rb$(copyToArray(destination));
  };
  RBuilder.prototype.renderEachIndexed_cfwqen$ = function ($receiver, fn) {
    var tmp$ = this.childList;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0, tmp$_0_0;
    var index = 0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
      var rBuilder = RBuilder_0();
      fn(rBuilder, index_0, item);
      tmp$_1.call(destination, first(rBuilder.childList));
    }
    tmp$.add_11rb$(copyToArray(destination));
  };
  RBuilder.prototype.withKey_s5hl0b$ = function ($receiver, newKey) {
    var index = this.childList.indexOf_11rb$($receiver);
    if (index >= 0) {
      this.childList.removeAt_za3lpa$(index);
      var $receiver_0 = {};
      set_key($receiver_0, newKey);
      var elementWithKey = cloneElement($receiver, $receiver_0);
      this.childList.add_wxm5ur$(index, elementWithKey);
    }};
  RBuilder.prototype.withKey_pspxar$ = function ($receiver, newKey) {
    this.withKey_s5hl0b$($receiver, newKey.toString());
  };
  RBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RBuilder',
    interfaces: []
  };
  function RBuilder_0() {
    return new RBuilderImpl();
  }
  var child = defineInlineFunction('kotlin-react.react.child_v3pydz$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, $receiver, handler) {
      return $receiver.child_ssazr1$(getKClass(C_0), handler);
    };
  }));
  var childFunction = defineInlineFunction('kotlin-react.react.childFunction_8mldls$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, $receiver, handler, children) {
      return $receiver.childFunction_2656uf$(getKClass(C_0), handler, children);
    };
  }));
  var node = defineInlineFunction('kotlin-react.react.node_wngyyn$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, $receiver, props, children) {
      if (children === void 0)
        children = emptyList();
      return $receiver.node_3ecl1l$(getKClass(C_0), props, children);
    };
  }));
  function RBuilderImpl() {
    this.childList_z394dm$_0 = ArrayList_init_0();
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
  function buildElements_0(handler) {
    return buildElements(RBuilder_0(), handler);
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
  RElementBuilder.prototype.attrs_slhiwc$ = function (handler) {
    handler(this.attrs);
  };
  Object.defineProperty(RElementBuilder.prototype, 'key', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      set_key(this.attrs, value);
    }
  });
  Object.defineProperty(RElementBuilder.prototype, 'ref', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      set_ref(this.attrs, value);
    }
  });
  RElementBuilder.prototype.ref_5ij4lk$ = function (handler) {
    ref(this.attrs, handler);
  };
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
  function forwardRef$lambda$lambda(closure$handler, closure$props, closure$ref) {
    return function ($receiver) {
      closure$handler($receiver, closure$props, closure$ref);
      return Unit;
    };
  }
  function forwardRef$lambda(closure$handler) {
    return function (props, ref) {
      return buildElements_0(forwardRef$lambda$lambda(closure$handler, props, ref));
    };
  }
  function forwardRef(handler) {
    return rawForwardRef(forwardRef$lambda(handler));
  }
  function functionalComponent$lambda$lambda(closure$func, closure$props) {
    return function ($receiver) {
      closure$func($receiver, closure$props);
      return Unit;
    };
  }
  function functionalComponent$lambda(closure$func) {
    return function (props) {
      return buildElements_0(functionalComponent$lambda$lambda(closure$func, props));
    };
  }
  function functionalComponent(displayName, func) {
    if (displayName === void 0)
      displayName = null;
    var fc = functionalComponent$lambda(func);
    if (displayName != null) {
      fc.displayName = displayName;
    }return fc;
  }
  function child$lambda($receiver) {
    return Unit;
  }
  function child_0($receiver, component, props, handler) {
    if (props === void 0) {
      props = {};
    }if (handler === void 0)
      handler = child$lambda;
    return $receiver.child_4dvv5y$(component, props, handler);
  }
  function childFunction$lambda($receiver) {
    return Unit;
  }
  function childFunction_0($receiver, component, handler, children) {
    if (handler === void 0)
      handler = childFunction$lambda;
    return childFunction_1($receiver, component, {}, handler, children);
  }
  function childFunction$lambda_0($receiver) {
    return Unit;
  }
  function childFunction$lambda_1(closure$children) {
    return function (value) {
      var rBuilder = RBuilder_0();
      closure$children(rBuilder, value);
      return first(rBuilder.childList);
    };
  }
  function childFunction_1($receiver, component, props, handler, children) {
    if (handler === void 0)
      handler = childFunction$lambda_0;
    var $receiver_0 = RElementBuilder_0(props);
    handler($receiver_0);
    return $receiver.child_k3oess$(component, $receiver_0.attrs, listOf(childFunction$lambda_1(children)));
  }
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
  var cloneElement_0 = defineInlineFunction('kotlin-react.react.cloneElement_yivzvl$', wrapFunction(function () {
    var cloneElement = _.$$importsForInline$$.react.cloneElement;
    return function (element, child, props) {
      var $receiver = {};
      props($receiver);
      return cloneElement.apply(null, [element, $receiver].concat(child));
    };
  }));
  function clone_0(element, props, child) {
    if (child === void 0)
      child = null;
    return cloneElement.apply(null, [element, props].concat(Children.toArray(child)));
  }
  function get_rClass($receiver) {
    return get_js($receiver);
  }
  function fallback($receiver, handler) {
    $receiver.fallback = buildElements_0(handler);
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
  function get_children($receiver) {
    return $receiver.children;
  }
  function get_key($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_key($receiver, value) {
    $receiver.key = value;
  }
  function get_ref($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_ref($receiver, value) {
    $receiver.ref = value;
  }
  function ref($receiver, ref) {
    $receiver.ref = ref;
  }
  function BoxedState(state) {
    this.state = state;
  }
  BoxedState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxedState',
    interfaces: []
  };
  function get_componentStack($receiver) {
    return $receiver.componentStack;
  }
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
  function RComponent() {
  }
  RComponent.prototype.init_bc6fkx$ = function ($receiver) {
  };
  RComponent.prototype.init_65a95q$ = function ($receiver, props) {
  };
  RComponent.prototype.children_ss14n$ = function ($receiver) {
    $receiver.children_yllgzm$(this.props);
  };
  RComponent.prototype.children_tgvp6h$ = function ($receiver, value) {
    $receiver.children_48djri$(this.props, value);
  };
  function RComponent$render$lambda(this$RComponent) {
    return function ($receiver) {
      this$RComponent.render_ss14n$($receiver);
      return Unit;
    };
  }
  RComponent.prototype.render = function () {
    return buildElements_0(RComponent$render$lambda(this));
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
    $this.init_bc6fkx$($receiver);
    $this.state = $receiver;
    return $this;
  }
  function RComponent_init_0(props, $this) {
    $this = $this || Object.create(RComponent.prototype);
    Component.call($this, props);
    RComponent.call($this);
    var $receiver = {};
    $this.init_65a95q$($receiver, props);
    $this.state = $receiver;
    return $this;
  }
  function RPureComponent() {
  }
  RPureComponent.prototype.init_bc6fkx$ = function ($receiver) {
  };
  RPureComponent.prototype.init_65a95q$ = function ($receiver, props) {
  };
  RPureComponent.prototype.children_ss14n$ = function ($receiver) {
    $receiver.children_yllgzm$(this.props);
  };
  RPureComponent.prototype.children_tgvp6h$ = function ($receiver, value) {
    $receiver.children_48djri$(this.props, value);
  };
  function RPureComponent$render$lambda(this$RPureComponent) {
    return function ($receiver) {
      this$RPureComponent.render_ss14n$($receiver);
      return Unit;
    };
  }
  RPureComponent.prototype.render = function () {
    return buildElements_0(RPureComponent$render$lambda(this));
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
    $this.init_bc6fkx$($receiver);
    $this.state = $receiver;
    return $this;
  }
  function RPureComponent_init_0(props, $this) {
    $this = $this || Object.create(RPureComponent.prototype);
    PureComponent.call($this, props);
    RPureComponent.call($this);
    var $receiver = {};
    $this.init_65a95q$($receiver, props);
    $this.state = $receiver;
    return $this;
  }
  function ReducerInstance() {
  }
  ReducerInstance.prototype.component1 = defineInlineFunction('kotlin-react.react.ReducerInstance.component1', function () {
    return this[0];
  });
  ReducerInstance.prototype.component2 = defineInlineFunction('kotlin-react.react.ReducerInstance.component2', function () {
    return this[1];
  });
  ReducerInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReducerInstance',
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
  var useCallback = defineInlineFunction('kotlin-react.react.useCallback_3tr83r$', wrapFunction(function () {
    var useCallback = _.$$importsForInline$$.react.useCallback;
    return function (dependencies, callback) {
      return useCallback(callback, dependencies);
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
  function useEffectWithCleanup(dependencies, effect) {
    if (dependencies === void 0)
      dependencies = null;
    if (dependencies != null) {
      rawUseEffect(effect, copyToArray(dependencies));
    } else {
      rawUseEffect(effect);
    }
  }
  function useEffect_1(dependencies, effect) {
    if (dependencies === void 0)
      dependencies = null;
    var callback = createEffectCallback(effect);
    if (dependencies != null) {
      rawUseEffect(callback, copyToArray(dependencies));
    } else {
      rawUseEffect(callback);
    }
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
  function useLayoutEffectWithCleanup(dependencies, effect) {
    if (dependencies === void 0)
      dependencies = null;
    if (dependencies != null) {
      rawUseLayoutEffect(effect, copyToArray(dependencies));
    } else {
      rawUseLayoutEffect(effect);
    }
  }
  function useLayoutEffect_1(dependencies, effect) {
    if (dependencies === void 0)
      dependencies = null;
    var callback = createEffectCallback(effect);
    if (dependencies != null) {
      rawUseLayoutEffect(callback, copyToArray(dependencies));
    } else {
      rawUseLayoutEffect(callback);
    }
  }
  var useMemo = defineInlineFunction('kotlin-react.react.useMemo_58jryq$', wrapFunction(function () {
    var useMemo = _.$$importsForInline$$.react.useMemo;
    return function (dependencies, callback) {
      return useMemo(callback, dependencies);
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
  function RefDelegate() {
  }
  RefDelegate.prototype.getValue_d6mtq7$ = defineInlineFunction('kotlin-react.react.RefDelegate.getValue_d6mtq7$', function (thisRef, property) {
    return this.current;
  });
  RefDelegate.prototype.setValue_havc3g$ = defineInlineFunction('kotlin-react.react.RefDelegate.setValue_havc3g$', function (thisRef, property, value) {
    this.current = value;
  });
  RefDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefDelegate',
    interfaces: []
  };
  var package$react = _.react || (_.react = {});
  package$react.EffectBuilder = EffectBuilder;
  package$react.createEffectCallback_1ce2r7$ = createEffectCallback;
  package$react.invoke_adv8my$ = invoke;
  package$react.invoke_c9lj87$ = invoke_0;
  package$react.invoke_airnx2$ = invoke_1;
  package$react.allOf_jblbpx$ = allOf;
  package$react.ReactDsl = ReactDsl;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  $$importsForInline$$['kotlin-react'] = _;
  package$react.RBuilder = RBuilder;
  package$react.createBuilder = RBuilder_0;
  package$react.RBuilderImpl = RBuilderImpl;
  package$react.RBuilderMultiple = RBuilderMultiple;
  package$react.buildElements_wi9ndb$ = buildElements;
  package$react.buildElements_zepujl$ = buildElements_0;
  package$react.RBuilderSingle = RBuilderSingle;
  package$react.buildElement_wi9ndb$ = buildElement;
  package$react.buildElement_zepujl$ = buildElement_0;
  package$react.RElementBuilder = RElementBuilder;
  package$react.RElementBuilder_8jcap1$ = RElementBuilder_0;
  package$react.RElementBuilderImpl = RElementBuilderImpl;
  package$react.forwardRef_qtknwg$ = forwardRef;
  package$react.functionalComponent_7g4vsr$ = functionalComponent;
  package$react.child_9r8yuv$ = child_0;
  package$react.childFunction_s7qziv$ = childFunction_0;
  package$react.childFunction_vp99ke$ = childFunction_1;
  package$react.asStringOrNull_84gpoi$ = asStringOrNull;
  package$react.asElementOrNull_84gpoi$ = asElementOrNull;
  package$react.forEachElement_t3nwxq$ = forEachElement;
  $$importsForInline$$.react = $module$react;
  package$react.cloneElement_yivzvl$ = cloneElement_0;
  package$react.clone_139a74$ = clone_0;
  package$react.get_rClass_inwa2g$ = get_rClass;
  package$react.fallback_i4zzdj$ = fallback;
  package$react.RStatics = RStatics;
  package$react.get_children_yllgzm$ = get_children;
  package$react.get_key_yllgzm$ = get_key;
  package$react.set_key_38rnt0$ = set_key;
  package$react.get_ref_yllgzm$ = get_ref;
  package$react.set_ref_jjyqia$ = set_ref;
  package$react.ref_dpkau5$ = ref;
  package$react.BoxedState = BoxedState;
  package$react.get_componentStack_latnvg$ = get_componentStack;
  package$react.setState_kpl3tw$ = setState;
  package$react.RComponent_init_lqgejo$ = RComponent_init;
  package$react.RComponent_init_8bz2yq$ = RComponent_init_0;
  package$react.RComponent = RComponent;
  package$react.RPureComponent_init_lqgejo$ = RPureComponent_init;
  package$react.RPureComponent_init_8bz2yq$ = RPureComponent_init_0;
  package$react.RPureComponent = RPureComponent;
  package$react.ReducerInstance = ReducerInstance;
  package$react.StateSetter = StateSetter;
  package$react.StateInstance = StateInstance;
  package$react.useCallback_3tr83r$ = useCallback;
  package$react.useEffect_yy86ve$ = useEffect;
  package$react.useEffect_c147l4$ = useEffect_0;
  package$react.useEffectOnce_yy86ve$ = useEffectOnce;
  package$react.useEffectWithCleanup_y10uuc$ = useEffectWithCleanup;
  package$react.useEffect_r2tjyn$ = useEffect_1;
  package$react.useLayoutEffect_yy86ve$ = useLayoutEffect;
  package$react.useLayoutEffect_c147l4$ = useLayoutEffect_0;
  package$react.useLayoutEffectOnce_yy86ve$ = useLayoutEffectOnce;
  package$react.useLayoutEffectWithCleanup_y10uuc$ = useLayoutEffectWithCleanup;
  package$react.useLayoutEffect_r2tjyn$ = useLayoutEffect_1;
  package$react.useMemo_58jryq$ = useMemo;
  package$react.useRefValue_30y1fr$ = useRefValue;
  package$react.useRefValue_issdgt$ = useRefValue_0;
  package$react.RefDelegate = RefDelegate;
  RBuilderImpl.prototype.child_52psg1$ = RBuilder.prototype.child_52psg1$;
  RBuilderImpl.prototype.child_k3oess$ = RBuilder.prototype.child_k3oess$;
  RBuilderImpl.prototype.child_4dvv5y$ = RBuilder.prototype.child_4dvv5y$;
  RBuilderImpl.prototype.child_ssazr1$ = RBuilder.prototype.child_ssazr1$;
  RBuilderImpl.prototype.unaryPlus_84gpoi$ = RBuilder.prototype.unaryPlus_84gpoi$;
  RBuilderImpl.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RBuilderImpl.prototype.invoke_eb8iu4$ = RBuilder.prototype.invoke_eb8iu4$;
  RBuilderImpl.prototype.invoke_csqs6z$ = RBuilder.prototype.invoke_csqs6z$;
  RBuilderImpl.prototype.invoke_ory6b3$ = RBuilder.prototype.invoke_ory6b3$;
  RBuilderImpl.prototype.node_rwypko$$default = RBuilder.prototype.node_rwypko$$default;
  RBuilderImpl.prototype.node_3ecl1l$$default = RBuilder.prototype.node_3ecl1l$$default;
  RBuilderImpl.prototype.childFunction_2656uf$ = RBuilder.prototype.childFunction_2656uf$;
  RBuilderImpl.prototype.children_yllgzm$ = RBuilder.prototype.children_yllgzm$;
  RBuilderImpl.prototype.children_48djri$ = RBuilder.prototype.children_48djri$;
  RBuilderImpl.prototype.renderEach_ezdo97$ = RBuilder.prototype.renderEach_ezdo97$;
  RBuilderImpl.prototype.renderEachIndexed_cfwqen$ = RBuilder.prototype.renderEachIndexed_cfwqen$;
  RBuilderImpl.prototype.withKey_s5hl0b$ = RBuilder.prototype.withKey_s5hl0b$;
  RBuilderImpl.prototype.withKey_pspxar$ = RBuilder.prototype.withKey_pspxar$;
  RBuilderImpl.prototype.node_rwypko$ = RBuilder.prototype.node_rwypko$;
  RBuilderImpl.prototype.node_3ecl1l$ = RBuilder.prototype.node_3ecl1l$;
  RElementBuilder.prototype.child_52psg1$ = RBuilder.prototype.child_52psg1$;
  RElementBuilder.prototype.child_k3oess$ = RBuilder.prototype.child_k3oess$;
  RElementBuilder.prototype.child_4dvv5y$ = RBuilder.prototype.child_4dvv5y$;
  RElementBuilder.prototype.child_ssazr1$ = RBuilder.prototype.child_ssazr1$;
  RElementBuilder.prototype.unaryPlus_84gpoi$ = RBuilder.prototype.unaryPlus_84gpoi$;
  RElementBuilder.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RElementBuilder.prototype.invoke_eb8iu4$ = RBuilder.prototype.invoke_eb8iu4$;
  RElementBuilder.prototype.invoke_csqs6z$ = RBuilder.prototype.invoke_csqs6z$;
  RElementBuilder.prototype.invoke_ory6b3$ = RBuilder.prototype.invoke_ory6b3$;
  RElementBuilder.prototype.node_rwypko$$default = RBuilder.prototype.node_rwypko$$default;
  RElementBuilder.prototype.node_3ecl1l$$default = RBuilder.prototype.node_3ecl1l$$default;
  RElementBuilder.prototype.childFunction_2656uf$ = RBuilder.prototype.childFunction_2656uf$;
  RElementBuilder.prototype.children_yllgzm$ = RBuilder.prototype.children_yllgzm$;
  RElementBuilder.prototype.children_48djri$ = RBuilder.prototype.children_48djri$;
  RElementBuilder.prototype.renderEach_ezdo97$ = RBuilder.prototype.renderEach_ezdo97$;
  RElementBuilder.prototype.renderEachIndexed_cfwqen$ = RBuilder.prototype.renderEachIndexed_cfwqen$;
  RElementBuilder.prototype.withKey_s5hl0b$ = RBuilder.prototype.withKey_s5hl0b$;
  RElementBuilder.prototype.withKey_pspxar$ = RBuilder.prototype.withKey_pspxar$;
  RElementBuilder.prototype.node_rwypko$ = RBuilder.prototype.node_rwypko$;
  RElementBuilder.prototype.node_3ecl1l$ = RBuilder.prototype.node_3ecl1l$;
  RElementBuilderImpl.prototype.attrs_slhiwc$ = RElementBuilder.prototype.attrs_slhiwc$;
  Object.defineProperty(RElementBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'key'));
  Object.defineProperty(RElementBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'ref'));
  RElementBuilderImpl.prototype.ref_5ij4lk$ = RElementBuilder.prototype.ref_5ij4lk$;
  RElementBuilderImpl.prototype.child_52psg1$ = RElementBuilder.prototype.child_52psg1$;
  RElementBuilderImpl.prototype.child_k3oess$ = RElementBuilder.prototype.child_k3oess$;
  RElementBuilderImpl.prototype.child_4dvv5y$ = RElementBuilder.prototype.child_4dvv5y$;
  RElementBuilderImpl.prototype.child_ssazr1$ = RElementBuilder.prototype.child_ssazr1$;
  RElementBuilderImpl.prototype.unaryPlus_84gpoi$ = RElementBuilder.prototype.unaryPlus_84gpoi$;
  RElementBuilderImpl.prototype.unaryPlus_pdl1vz$ = RElementBuilder.prototype.unaryPlus_pdl1vz$;
  RElementBuilderImpl.prototype.invoke_eb8iu4$ = RElementBuilder.prototype.invoke_eb8iu4$;
  RElementBuilderImpl.prototype.invoke_csqs6z$ = RElementBuilder.prototype.invoke_csqs6z$;
  RElementBuilderImpl.prototype.invoke_ory6b3$ = RElementBuilder.prototype.invoke_ory6b3$;
  RElementBuilderImpl.prototype.node_rwypko$$default = RElementBuilder.prototype.node_rwypko$$default;
  RElementBuilderImpl.prototype.node_3ecl1l$$default = RElementBuilder.prototype.node_3ecl1l$$default;
  RElementBuilderImpl.prototype.childFunction_2656uf$ = RElementBuilder.prototype.childFunction_2656uf$;
  RElementBuilderImpl.prototype.children_yllgzm$ = RElementBuilder.prototype.children_yllgzm$;
  RElementBuilderImpl.prototype.children_48djri$ = RElementBuilder.prototype.children_48djri$;
  RElementBuilderImpl.prototype.renderEach_ezdo97$ = RElementBuilder.prototype.renderEach_ezdo97$;
  RElementBuilderImpl.prototype.renderEachIndexed_cfwqen$ = RElementBuilder.prototype.renderEachIndexed_cfwqen$;
  RElementBuilderImpl.prototype.withKey_s5hl0b$ = RElementBuilder.prototype.withKey_s5hl0b$;
  RElementBuilderImpl.prototype.withKey_pspxar$ = RElementBuilder.prototype.withKey_pspxar$;
  RElementBuilderImpl.prototype.node_rwypko$ = RElementBuilder.prototype.node_rwypko$;
  RElementBuilderImpl.prototype.node_3ecl1l$ = RElementBuilder.prototype.node_3ecl1l$;
  Kotlin.defineModule('kotlin-react', _);
  return _;
}(module.exports, require('kotlin'), require('react'), require('kotlin-extensions')));
