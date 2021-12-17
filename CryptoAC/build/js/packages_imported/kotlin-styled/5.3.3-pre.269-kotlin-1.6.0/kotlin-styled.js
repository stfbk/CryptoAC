(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-react-dom', 'kotlin-extensions', 'inline-style-prefixer', 'kotlin-react', 'styled-components', 'react', 'react-dom', 'react', 'kotlinx-html-js', 'styled-components'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-react-dom'), require('kotlin-extensions'), require('inline-style-prefixer'), require('kotlin-react'), require('styled-components'), require('react'), require('react-dom'), require('react'), require('kotlinx-html-js'), require('styled-components'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-styled'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'kotlin-styled'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'kotlin-styled'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-styled'.");
    }if (typeof this['inline-style-prefixer'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'inline-style-prefixer' was not found. Please, check whether 'inline-style-prefixer' is loaded prior to 'kotlin-styled'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'kotlin-styled'.");
    }if (typeof this['styled-components'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-styled'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-styled'.");
    }if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-styled'.");
    }if (typeof ReactModule === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-styled'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-styled'.");
    }if (typeof StyledComponents === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-styled'.");
    }root['kotlin-styled'] = factory(typeof this['kotlin-styled'] === 'undefined' ? {} : this['kotlin-styled'], kotlin, this['kotlin-css'], this['kotlin-react-dom'], this['kotlin-extensions'], this['inline-style-prefixer'], this['kotlin-react'], this['styled-components'], react, this['react-dom'], ReactModule, this['kotlinx-html-js'], StyledComponents);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_react_dom, $module$kotlin_extensions, $module$inline_style_prefixer, $module$kotlin_react, $module$styled_components, $module$react, $module$react_dom, $module$react_0, $module$kotlinx_html_js, $module$styled_components_0) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_s = $module$kotlin_css.kotlinx.css.properties.get_s_rcaex3$;
  var Timing = $module$kotlin_css.kotlinx.css.properties.Timing;
  var get_times = $module$kotlin_css.kotlinx.css.properties.get_times_s8ev3n$;
  var AnimationDirection = $module$kotlin_css.kotlinx.css.properties.AnimationDirection;
  var FillMode = $module$kotlin_css.kotlinx.css.properties.FillMode;
  var PlayState = $module$kotlin_css.kotlinx.css.properties.PlayState;
  var animation = $module$kotlin_css.kotlinx.css.properties.animation_hb31zf$;
  var KeyframesBuilder = $module$kotlin_css.kotlinx.css.properties.KeyframesBuilder_61zpoe$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var StyledElement = $module$kotlin_css.kotlinx.css.StyledElement_create;
  var setProp = $module$kotlin_react_dom.react.dom.setProp_v86kls$;
  var prefix = $module$inline_style_prefixer.prefix;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var CssBuilder = $module$kotlin_css.kotlinx.css.CssBuilder_n8y748$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RElementBuilder = $module$kotlin_react.react.RElementBuilder;
  var RElementBuilderImpl = $module$kotlin_react.react.RElementBuilderImpl;
  var RDOMBuilder = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var RDOMBuilderImpl = $module$kotlin_react_dom.react.dom.RDOMBuilderImpl;
  var invoke = $module$kotlin_extensions.kotlinext.js.invoke_dgimx$;
  var invoke_0 = $module$kotlin_extensions.kotlinext.js.invoke_9p99ed$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var invoke_1 = $module$kotlin_extensions.kotlinext.js.invoke_z5wujd$;
  var createElement = $module$react.createElement;
  var render = $module$react_dom.render;
  var fc = $module$kotlin_react.react.fc_4mavxa$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  StyledElementBuilderImpl.prototype = Object.create(RElementBuilderImpl.prototype);
  StyledElementBuilderImpl.prototype.constructor = StyledElementBuilderImpl;
  StyledDOMBuilderImpl.prototype = Object.create(RDOMBuilderImpl.prototype);
  StyledDOMBuilderImpl.prototype.constructor = StyledDOMBuilderImpl;
  function animation_0($receiver, duration, timing, delay, iterationCount, direction, fillMode, playState, handler) {
    if (duration === void 0)
      duration = get_s(0);
    if (timing === void 0)
      timing = Timing.Companion.ease;
    if (delay === void 0)
      delay = get_s(0);
    if (iterationCount === void 0)
      iterationCount = get_times(1);
    if (direction === void 0)
      direction = AnimationDirection.normal;
    if (fillMode === void 0)
      fillMode = FillMode.none;
    if (playState === void 0)
      playState = PlayState.running;
    var builder = KeyframesBuilder($receiver.indent);
    handler(builder);
    animation($receiver, keyframesName(builder.toString()), duration, timing, delay, iterationCount, direction, fillMode, playState);
  }
  var keyframes = defineInlineFunction('kotlin-styled.styled.keyframes_sizrkg$', wrapFunction(function () {
    var KeyframesBuilder = _.$$importsForInline$$['kotlin-css'].kotlinx.css.properties.KeyframesBuilder_61zpoe$;
    var keyframesName = _.styled.keyframesName_61zpoe$;
    return function (indent, handler) {
      if (indent === void 0)
        indent = '';
      var builder = KeyframesBuilder(indent);
      handler(builder);
      return keyframesName(builder.toString());
    };
  }));
  function inlineStyles($receiver, prefix, builder) {
    if (prefix === void 0)
      prefix = true;
    var styles = StyledElement();
    builder(styles);
    setProp($receiver, 'style', toStyle(styles, prefix));
  }
  function toStyle($receiver, prefix_0) {
    if (prefix_0 === void 0)
      prefix_0 = true;
    var tmp$;
    var $receiver_0 = {};
    var res = $receiver_0;
    var tmp$_0;
    tmp$_0 = $receiver.declarations.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var key = element_0.key;
      var value = element_0.value;
      var tmp$_1;
      if (typeof value === 'string' || Kotlin.isNumber(value))
        tmp$_1 = value;
      else
        tmp$_1 = value.toString();
      res[key] = tmp$_1;
    }
    if (!prefix_0) {
      return res;
    }var prefixed = Kotlin.isType(tmp$ = prefix(res), Object) ? tmp$ : throwCCE();
    var $receiver_1 = Object.keys(prefixed);
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
      var element_1 = $receiver_1[tmp$_2];
      if (prefixed.hasOwnProperty(element_1)) {
        var value_0 = prefixed[element_1];
        if (Kotlin.isType(value_0, Array)) {
          var displayValue = value_0.find(function (element) {
            return !element.startsWith('-');
          });
          prefixed[element_1] = displayValue;
        }}}
    return prefixed;
  }
  function StyleSheet(name, isStatic) {
    if (isStatic === void 0)
      isStatic = false;
    this.name = name;
    this.isStatic = isStatic;
    this.isLoaded_1mk3xi$_0 = false;
    this.holders_q142jc$_0 = ArrayList_init();
  }
  StyleSheet.prototype.dependsOn_tsq8y7$ = function (handler) {
    handler().inject();
  };
  StyleSheet.prototype.css_uisso7$ = function (parents, builder) {
    var $receiver = new CssHolder(this, parents.concat([builder]));
    this.addCssHolder_jwasi7$($receiver);
    return $receiver;
  };
  StyleSheet.prototype.addCssHolder_jwasi7$ = function (holder) {
    this.holders_q142jc$_0.add_11rb$(holder);
  };
  function StyleSheet$inject$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$it.second.ruleSets_8be2vx$;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var r = tmp$[tmp$_0];
        r($receiver);
      }
      return Unit;
    };
  }
  StyleSheet.prototype.inject = function () {
    if (!this.isLoaded_1mk3xi$_0 && this.isStatic) {
      this.isLoaded_1mk3xi$_0 = true;
      var $receiver = this.holders_q142jc$_0;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0 = element.properties;
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination_0.add_11rb$(to(item, element));
        }
        var list = destination_0;
        addAll(destination, list);
      }
      var keys = destination;
      var $receiver_1 = CssBuilder(void 0, false);
      var tmp$_1;
      tmp$_1 = keys.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        $receiver_1.invoke_3ad21g$('.' + getClassName_0(this, element_0.first), StyleSheet$inject$lambda$lambda$lambda(element_0));
      }
      var builder = $receiver_1;
      injectGlobal_0(builder.toString());
      this.holders_q142jc$_0.clear();
    }};
  StyleSheet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyleSheet',
    interfaces: []
  };
  function StyleSheet_init(name, parent, isStatic, $this) {
    if (isStatic === void 0)
      isStatic = false;
    $this = $this || Object.create(StyleSheet.prototype);
    StyleSheet.call($this, parent.name + '-' + name, isStatic);
    return $this;
  }
  function CssHolder(sheet, ruleSets) {
    this.sheet_0 = sheet;
    this.ruleSets_8be2vx$ = ruleSets;
    this._properties_0 = ArrayList_init();
  }
  Object.defineProperty(CssHolder.prototype, 'properties', {
    configurable: true,
    get: function () {
      return this._properties_0;
    }
  });
  function CssHolder$provideDelegate$lambda$lambda(this$CssHolder, closure$property) {
    return function ($receiver) {
      if (this$CssHolder.sheet_0.isStatic) {
        $receiver.unaryPlus_pdl1vz$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        this$CssHolder.sheet_0.inject();
      }if (!this$CssHolder.sheet_0.isStatic || !$receiver.allowClasses) {
        $receiver.styleName.add_11rb$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        var $receiver_0 = this$CssHolder.ruleSets_8be2vx$;
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          element($receiver);
        }
      }return Unit;
    };
  }
  function CssHolder$provideDelegate$lambda(this$CssHolder) {
    return function (f, property) {
      return CssHolder$provideDelegate$lambda$lambda(this$CssHolder, property);
    };
  }
  CssHolder.prototype.provideDelegate_n5byny$ = function (thisRef, providingProperty) {
    this._properties_0.add_11rb$(providingProperty);
    return new ReadOnlyProperty(CssHolder$provideDelegate$lambda(this));
  };
  CssHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssHolder',
    interfaces: []
  };
  function getClassName($receiver, getClass) {
    return getClassName_0($receiver, getClass($receiver));
  }
  function getClassName_0($receiver, property) {
    return $receiver.name + '-' + property.callableName;
  }
  function getClassSelector($receiver, getClass) {
    return '.' + getClassName($receiver, getClass);
  }
  function cssMarker$lambda($receiver) {
    return Unit;
  }
  function cssMarker($receiver) {
    var $receiver_0 = new CssHolder($receiver, [cssMarker$lambda]);
    $receiver.addCssHolder_jwasi7$($receiver_0);
    return $receiver_0;
  }
  var forwardCss = defineInlineFunction('kotlin-styled.styled.forwardCss_ckjb8o$', function ($receiver, builder) {
    var tmp$;
    if ((tmp$ = $receiver.css) != null) {
      var tmp$_0;
      tmp$_0 = tmp$.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        element(builder);
      }
    }});
  var forwardCss_0 = defineInlineFunction('kotlin-styled.styled.forwardCss_hrqukv$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var ensureNotNull = Kotlin.ensureNotNull;
    return function ($receiver, props) {
      var tmp$;
      if ((tmp$ = $receiver.css) != null) {
        var tmp$_0;
        tmp$_0 = tmp$.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (props.css == null) {
            props.css = ArrayList_init();
          }ensureNotNull(props.css).add_11rb$(element);
        }
      }};
  }));
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledBuilder',
    interfaces: []
  };
  var css = defineInlineFunction('kotlin-styled.styled.css_vpie0h$', function ($receiver, handler) {
    handler($receiver.css);
  });
  function StyledElementBuilder() {
    StyledElementBuilder$Companion_getInstance();
  }
  function StyledElementBuilder$Companion() {
    StyledElementBuilder$Companion_instance = this;
  }
  StyledElementBuilder$Companion.prototype.invoke_k87xji$ = function (type, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }return new StyledElementBuilderImpl(type, attrs);
  };
  StyledElementBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StyledElementBuilder$Companion_instance = null;
  function StyledElementBuilder$Companion_getInstance() {
    if (StyledElementBuilder$Companion_instance === null) {
      new StyledElementBuilder$Companion();
    }return StyledElementBuilder$Companion_instance;
  }
  StyledElementBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledElementBuilder',
    interfaces: [StyledBuilder, RElementBuilder]
  };
  function StyledElementBuilderImpl(type, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }RElementBuilderImpl.call(this, attrs);
    this.type_j70h7l$_0 = type;
    this.css_l8ze94$_0 = CssBuilder();
  }
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'type', {
    get: function () {
      return this.type_j70h7l$_0;
    }
  });
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'css', {
    configurable: true,
    get: function () {
      return this.css_l8ze94$_0;
    }
  });
  StyledElementBuilderImpl.prototype.create = function () {
    return Styled_getInstance().createElement_48ndix$(this.type, this.css, this.attrs, this.childList);
  };
  StyledElementBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyledElementBuilderImpl',
    interfaces: [RElementBuilderImpl, StyledElementBuilder]
  };
  function StyledDOMBuilder() {
    StyledDOMBuilder$Companion_getInstance();
  }
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.attrs.tagName;
    }
  });
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_go7g43$(this.type, this.css, this.domProps, this.childList);
  };
  function StyledDOMBuilder$Companion() {
    StyledDOMBuilder$Companion_instance = this;
  }
  StyledDOMBuilder$Companion.prototype.invoke_f6ihu2$ = function (factory) {
    return new StyledDOMBuilderImpl(factory);
  };
  StyledDOMBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StyledDOMBuilder$Companion_instance = null;
  function StyledDOMBuilder$Companion_getInstance() {
    if (StyledDOMBuilder$Companion_instance === null) {
      new StyledDOMBuilder$Companion();
    }return StyledDOMBuilder$Companion_instance;
  }
  StyledDOMBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledDOMBuilder',
    interfaces: [StyledBuilder, RDOMBuilder]
  };
  function StyledDOMBuilderImpl(factory) {
    RDOMBuilderImpl.call(this, factory);
    this.css_sotjku$_0 = CssBuilder();
  }
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'css', {
    configurable: true,
    get: function () {
      return this.css_sotjku$_0;
    }
  });
  StyledDOMBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyledDOMBuilderImpl',
    interfaces: [RDOMBuilderImpl, StyledDOMBuilder]
  };
  function styled$lambda(closure$type) {
    return function ($receiver, handler) {
      var $receiver_0 = StyledElementBuilder$Companion_getInstance().invoke_k87xji$(closure$type);
      handler($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function styled(type) {
    return styled$lambda(type);
  }
  var css_0 = defineInlineFunction('kotlin-styled.styled.css_nqyh8f$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var ensureNotNull = Kotlin.ensureNotNull;
    return function ($receiver, handler) {
      if ($receiver.css == null) {
        $receiver.css = ArrayList_init();
      }ensureNotNull($receiver.css).add_11rb$(handler);
    };
  }));
  var css_1 = defineInlineFunction('kotlin-styled.styled.css_akzz26$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var ensureNotNull = Kotlin.ensureNotNull;
    return function ($receiver, handler) {
      var $receiver_0 = $receiver.attrs;
      if ($receiver_0.css == null) {
        $receiver_0.css = ArrayList_init();
      }ensureNotNull($receiver_0.css).add_11rb$(handler);
    };
  }));
  function keyframesName(string) {
    var keyframes = invoke($module$styled_components.keyframes, string, []);
    var keyframesInternal = invoke_0($module$styled_components.css, [keyframes.rules]);
    var name = keyframes.getName();
    if (typeof keyframesInternal === 'string')
      injectGlobalKeyframeStyle(name, keyframesInternal);
    else if (Kotlin.isArray(keyframesInternal))
      injectGlobalKeyframeStyle(name, keyframesInternal[0]);
    else
      injectGlobals(keyframesInternal);
    return keyframes.getName();
  }
  function injectGlobalKeyframeStyle(name, style) {
    if (startsWith(style, '@-webkit-keyframes') || startsWith(style, '@keyframes')) {
      injectGlobal_0(style);
    } else {
      injectGlobals(['@-webkit-keyframes ' + name + ' {' + style + '}', '@keyframes ' + name + ' {' + style + '}']);
    }
  }
  function injectGlobals$lambda(closure$strings) {
    return function () {
      return invoke_1($module$styled_components.createGlobalStyle, closure$strings, []);
    };
  }
  function injectGlobals$lambda_0(closure$globalStyle) {
    return function (it) {
      GlobalStyles_getInstance().add_5ux88o$(closure$globalStyle);
      return Unit;
    };
  }
  function injectGlobals(strings) {
    var globalStyle = devOverrideUseRef(injectGlobals$lambda(strings));
    Promise.resolve(Unit).then(injectGlobals$lambda_0(globalStyle));
  }
  function GlobalStyles() {
    GlobalStyles_instance = this;
    this.component_0 = fc(GlobalStyles$component$lambda);
    this.root_djryty$_0 = lazy(GlobalStyles$root$lambda);
    this.styles_0 = ArrayList_init();
  }
  Object.defineProperty(GlobalStyles.prototype, 'root_0', {
    configurable: true,
    get: function () {
      return this.root_djryty$_0.value;
    }
  });
  GlobalStyles.prototype.add_5ux88o$ = function (globalStyle) {
    this.styles_0.add_11rb$(globalStyle);
    var tmp$ = this.component_0;
    var $receiver = {};
    $receiver.globalStyles = this.styles_0;
    var reactElement = createElement(tmp$, $receiver);
    render(reactElement, this.root_0);
  };
  function GlobalStyles$component$lambda($receiver, props) {
    var tmp$;
    tmp$ = props.globalStyles.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.child_1mw94g$(element);
    }
    return Unit;
  }
  function GlobalStyles$root$lambda() {
    var tmp$;
    var element = Kotlin.isType(tmp$ = ensureNotNull(window.document.body).appendChild(window.document.createElement('div')), Element) ? tmp$ : throwCCE();
    element.setAttribute('id', 'sc-global-styles');
    return element;
  }
  GlobalStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GlobalStyles',
    interfaces: []
  };
  var GlobalStyles_instance = null;
  function GlobalStyles_getInstance() {
    if (GlobalStyles_instance === null) {
      new GlobalStyles();
    }return GlobalStyles_instance;
  }
  function injectGlobal(css) {
    injectGlobal_0(css.toString());
  }
  function injectGlobal$lambda(closure$string) {
    return function () {
      return invoke($module$styled_components.createGlobalStyle, closure$string, []);
    };
  }
  function injectGlobal$lambda_0(closure$globalStyle) {
    return function (it) {
      GlobalStyles_getInstance().add_5ux88o$(closure$globalStyle);
      return Unit;
    };
  }
  function injectGlobal_0(string) {
    var globalStyle = devOverrideUseRef(injectGlobal$lambda(string));
    Promise.resolve(Unit).then(injectGlobal$lambda_0(globalStyle));
  }
  function devOverrideUseRef$lambda() {
    throw Error_init('invalid hook call');
  }
  function devOverrideUseRef(action) {
    var tmp$;
    if (process.env.NODE_ENV !== 'production') {
      var useRef = $module$react_0.useRef;
      $module$react_0.useRef = devOverrideUseRef$lambda;
      var result = action();
      $module$react_0.useRef = useRef;
      tmp$ = result;
    } else
      tmp$ = action();
    return tmp$;
  }
  function injectGlobal_1(handler) {
    var $receiver = CssBuilder();
    handler($receiver);
    injectGlobal_0($receiver.toString());
  }
  function Styled() {
    Styled_instance = this;
    this.cache_0 = LinkedHashMap_init();
  }
  function Styled$wrap$lambda$lambda$lambda(it) {
    return it._css;
  }
  function Styled$wrap$lambda$lambda(closure$type) {
    return function () {
      return invoke_0(rawStyled(closure$type), [Styled$wrap$lambda$lambda$lambda]);
    };
  }
  Styled.prototype.wrap_0 = function (type) {
    var $receiver = this.cache_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = devOverrideUseRef(Styled$wrap$lambda$lambda(type));
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Styled.prototype.buildStyledProps_0 = function (css, props) {
    var styledProps = props;
    var tmp$ = !css.rules.isEmpty();
    if (!tmp$) {
      tmp$ = !css.multiRules.isEmpty();
    }var tmp$_0 = tmp$;
    if (!tmp$_0) {
      tmp$_0 = !css.declarations.isEmpty();
    }if (tmp$_0) {
      styledProps._css = css.toString();
    }if (!css.classes.isEmpty()) {
      styledProps.className = joinToString(css.classes, ' ');
    }if (!css.styleName.isEmpty()) {
      styledProps['data-style'] = joinToString(css.styleName, ' ');
    }return styledProps;
  };
  Styled.prototype.createElement_go7g43$ = function (type, css, props, children) {
    var wrappedType = this.wrap_0(type);
    var styledProps = this.buildStyledProps_0(css, props);
    return createElement.apply(null, [wrappedType, styledProps].concat(copyToArray(children)));
  };
  Styled.prototype.createElement_48ndix$ = function (type, css, props, children) {
    var wrappedType = this.wrap_0(type);
    var styledProps = this.buildStyledProps_0(css, props);
    return createElement.apply(null, [wrappedType, styledProps].concat(copyToArray(children)));
  };
  Styled.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Styled',
    interfaces: []
  };
  var Styled_instance = null;
  function Styled_getInstance() {
    if (Styled_instance === null) {
      new Styled();
    }return Styled_instance;
  }
  var styledTag = defineInlineFunction('kotlin-styled.styled.styledTag_8tb0c0$', wrapFunction(function () {
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    return function ($receiver, block, factory) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(factory);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledHtml = defineInlineFunction('kotlin-styled.styled.styledHtml_ke3yi3$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HTML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HTML;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledHtml$lambda(it) {
      return new HTML_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledHtml$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBase = defineInlineFunction('kotlin-styled.styled.styledBase_1upga7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BASE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BASE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBase$lambda(it) {
      return new BASE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBase$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledHead = defineInlineFunction('kotlin-styled.styled.styledHead_pxbiyo$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEAD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledHead$lambda(it) {
      return new HEAD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledHead$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledLink = defineInlineFunction('kotlin-styled.styled.styledLink_w1nb4n$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LINK;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledLink$lambda(closure$href, closure$rel, closure$type) {
      return function (it) {
        return new LINK_init(attributesMapOf(['href', closure$href, 'rel', closure$rel, 'type', closure$type]), it);
      };
    }
    return function ($receiver, href, rel, type, block) {
      if (href === void 0)
        href = null;
      if (rel === void 0)
        rel = null;
      if (type === void 0)
        type = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLink$lambda(href, rel, type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMeta = defineInlineFunction('kotlin-styled.styled.styledMeta_1zzqmz$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.META;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMeta$lambda(closure$name, closure$content) {
      return function (it) {
        return new META_init(attributesMapOf(['name', closure$name, 'content', closure$content]), it);
      };
    }
    return function ($receiver, name, content, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMeta$lambda(name, content));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledStyle = defineInlineFunction('kotlin-styled.styled.styledStyle_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledStyle$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, content) {
      if (type === void 0)
        type = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledStyle$lambda(type));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledStyle_0 = defineInlineFunction('kotlin-styled.styled.styledStyle_ligb9c$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledStyle$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledStyle$lambda(type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTitle = defineInlineFunction('kotlin-styled.styled.styledTitle_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTitle$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTitle$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTitle_0 = defineInlineFunction('kotlin-styled.styled.styledTitle_ysxh38$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTitle$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTitle$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBody = defineInlineFunction('kotlin-styled.styled.styledBody_na2bsy$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BODY;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBody$lambda(it) {
      return new BODY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBody$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledAddress = defineInlineFunction('kotlin-styled.styled.styledAddress_vixkf4$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ADDRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ADDRESS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledAddress$lambda(it) {
      return new ADDRESS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledAddress$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledArticle = defineInlineFunction('kotlin-styled.styled.styledArticle_lgmfz2$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ARTICLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ARTICLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledArticle$lambda(it) {
      return new ARTICLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledArticle$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledAside = defineInlineFunction('kotlin-styled.styled.styledAside_rd7t5o$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ASIDE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ASIDE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledAside$lambda(it) {
      return new ASIDE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledAside$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledFooter = defineInlineFunction('kotlin-styled.styled.styledFooter_abs6jp$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FOOTER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FOOTER;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledFooter$lambda(it) {
      return new FOOTER_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledFooter$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledHeader = defineInlineFunction('kotlin-styled.styled.styledHeader_nyg1zh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEADER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledHeader$lambda(it) {
      return new HEADER_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledHeader$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH1 = defineInlineFunction('kotlin-styled.styled.styledH1_k7892h$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H1_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH1$lambda(it) {
      return new H1_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH1$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH2 = defineInlineFunction('kotlin-styled.styled.styledH2_sn6rre$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H2_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH2$lambda(it) {
      return new H2_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH2$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH3 = defineInlineFunction('kotlin-styled.styled.styledH3_xxyrit$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H3_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH3$lambda(it) {
      return new H3_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH3$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH4 = defineInlineFunction('kotlin-styled.styled.styledH4_pi08tw$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H4_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH4$lambda(it) {
      return new H4_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH4$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH5 = defineInlineFunction('kotlin-styled.styled.styledH5_h21q4z$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H5_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H5;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH5$lambda(it) {
      return new H5_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH5$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledH6 = defineInlineFunction('kotlin-styled.styled.styledH6_8m37g2$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var H6_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H6;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledH6$lambda(it) {
      return new H6_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledH6$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMain = defineInlineFunction('kotlin-styled.styled.styledMain_pe1pvd$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MAIN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAIN;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMain$lambda(it) {
      return new MAIN_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMain$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledNav = defineInlineFunction('kotlin-styled.styled.styledNav_cdm54f$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var NAV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledNav$lambda(it) {
      return new NAV_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledNav$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSection = defineInlineFunction('kotlin-styled.styled.styledSection_46srkf$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SECTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SECTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSection$lambda(it) {
      return new SECTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSection$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBlockquote = defineInlineFunction('kotlin-styled.styled.styledBlockquote_ysxgdt$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BLOCKQUOTE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BLOCKQUOTE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBlockquote$lambda(it) {
      return new BLOCKQUOTE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBlockquote$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDd = defineInlineFunction('kotlin-styled.styled.styledDd_dz3lwg$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDd$lambda(it) {
      return new DD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDd$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDiv = defineInlineFunction('kotlin-styled.styled.styledDiv_nl27x9$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DIV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDiv$lambda(it) {
      return new DIV_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDl = defineInlineFunction('kotlin-styled.styled.styledDl_hgjic8$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDl$lambda(it) {
      return new DL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDl$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDt = defineInlineFunction('kotlin-styled.styled.styledDt_kxzes0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDt$lambda(it) {
      return new DT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDt$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledFigcaption = defineInlineFunction('kotlin-styled.styled.styledFigcaption_c04876$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FIGCAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGCAPTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledFigcaption$lambda(it) {
      return new FIGCAPTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledFigcaption$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledFigure = defineInlineFunction('kotlin-styled.styled.styledFigure_le7sck$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FIGURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGURE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledFigure$lambda(it) {
      return new FIGURE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledFigure$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledHr = defineInlineFunction('kotlin-styled.styled.styledHr_epf60a$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledHr$lambda(it) {
      return new HR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledHr$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledLi = defineInlineFunction('kotlin-styled.styled.styledLi_8qvw1v$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var LI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledLi$lambda(it) {
      return new LI_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLi$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOl = defineInlineFunction('kotlin-styled.styled.styledOl_kgxcnx$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOl$lambda(it) {
      return new OL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOl$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledP = defineInlineFunction('kotlin-styled.styled.styledP_iop6fw$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var P_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledP$lambda(it) {
      return new P_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledP$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledPre = defineInlineFunction('kotlin-styled.styled.styledPre_ik11in$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var PRE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PRE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledPre$lambda(it) {
      return new PRE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledPre$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledUl = defineInlineFunction('kotlin-styled.styled.styledUl_s8spxz$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var UL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledUl$lambda(it) {
      return new UL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledUl$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledA = defineInlineFunction('kotlin-styled.styled.styledA_8k1tal$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledA$lambda(closure$href, closure$target) {
      return function (it) {
        return new A_init(attributesMapOf(['href', closure$href, 'target', closure$target]), it);
      };
    }
    return function ($receiver, href, target, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledA$lambda(href, target));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledAbbr = defineInlineFunction('kotlin-styled.styled.styledAbbr_6au89b$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var ABBR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ABBR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledAbbr$lambda(it) {
      return new ABBR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledAbbr$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledB = defineInlineFunction('kotlin-styled.styled.styledB_shm19u$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var B_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.B;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledB$lambda(it) {
      return new B_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledB$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBdi = defineInlineFunction('kotlin-styled.styled.styledBdi_791cr1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BDI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDI;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBdi$lambda(it) {
      return new BDI_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBdi$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBdo = defineInlineFunction('kotlin-styled.styled.styledBdo_rmeakn$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BDO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDO;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBdo$lambda(it) {
      return new BDO_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBdo$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledBr = defineInlineFunction('kotlin-styled.styled.styledBr_6xjsq8$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var BR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledBr$lambda(it) {
      return new BR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledBr$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCite = defineInlineFunction('kotlin-styled.styled.styledCite_ketyeh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CITE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CITE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCite$lambda(it) {
      return new CITE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCite$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCode = defineInlineFunction('kotlin-styled.styled.styledCode_afw0kt$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CODE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CODE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCode$lambda(it) {
      return new CODE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCode$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDfn = defineInlineFunction('kotlin-styled.styled.styledDfn_n6kfq0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DFN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DFN;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDfn$lambda(it) {
      return new DFN_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDfn$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledEm = defineInlineFunction('kotlin-styled.styled.styledEm_veb43c$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var EM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EM;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledEm$lambda(it) {
      return new EM_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledEm$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledI = defineInlineFunction('kotlin-styled.styled.styledI_um3lkl$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var I_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledI$lambda(it) {
      return new I_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledI$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledKbd = defineInlineFunction('kotlin-styled.styled.styledKbd_1n2oah$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var KBD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KBD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledKbd$lambda(it) {
      return new KBD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledKbd$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMark = defineInlineFunction('kotlin-styled.styled.styledMark_bpz7pp$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MARK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MARK;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMark$lambda(it) {
      return new MARK_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMark$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledQ = defineInlineFunction('kotlin-styled.styled.styledQ_r4np4t$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var Q_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.Q;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledQ$lambda(it) {
      return new Q_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledQ$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledRp = defineInlineFunction('kotlin-styled.styled.styledRp_cwexwi$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var RP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledRp$lambda(it) {
      return new RP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledRp$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledRt = defineInlineFunction('kotlin-styled.styled.styledRt_kvf4v6$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var RT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledRt$lambda(it) {
      return new RT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledRt$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledRuby = defineInlineFunction('kotlin-styled.styled.styledRuby_za616i$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var RUBY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RUBY;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledRuby$lambda(it) {
      return new RUBY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledRuby$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSamp = defineInlineFunction('kotlin-styled.styled.styledSamp_yhe0i7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SAMP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SAMP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSamp$lambda(it) {
      return new SAMP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSamp$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSmall = defineInlineFunction('kotlin-styled.styled.styledSmall_s8f5bh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SMALL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SMALL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSmall$lambda(it) {
      return new SMALL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSmall$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSpan = defineInlineFunction('kotlin-styled.styled.styledSpan_wnx53q$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SPAN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSpan$lambda(it) {
      return new SPAN_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledStrong = defineInlineFunction('kotlin-styled.styled.styledStrong_1nxmeh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var STRONG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STRONG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledStrong$lambda(it) {
      return new STRONG_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledStrong$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSub = defineInlineFunction('kotlin-styled.styled.styledSub_og4q1g$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SUB_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUB;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSub$lambda(it) {
      return new SUB_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSub$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSup = defineInlineFunction('kotlin-styled.styled.styledSup_mq6hoa$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSup$lambda(it) {
      return new SUP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSup$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTime = defineInlineFunction('kotlin-styled.styled.styledTime_iiw05p$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TIME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TIME;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTime$lambda(it) {
      return new TIME_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTime$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledVar = defineInlineFunction('kotlin-styled.styled.styledVar_vje9zh$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var VAR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VAR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledVar$lambda(it) {
      return new VAR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledVar$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledArea = defineInlineFunction('kotlin-styled.styled.styledArea_oyrah7$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AREA;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledArea$lambda(closure$shape, closure$alt) {
      return function (it) {
        return new AREA_init(attributesMapOf(['Shape', closure$shape != null ? enumEncode(closure$shape) : null, 'alt', closure$alt]), it);
      };
    }
    return function ($receiver, shape, alt, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledArea$lambda(shape, alt));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledAudio = defineInlineFunction('kotlin-styled.styled.styledAudio_wpd72a$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var AUDIO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AUDIO;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledAudio$lambda(it) {
      return new AUDIO_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledAudio$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledImg = defineInlineFunction('kotlin-styled.styled.styledImg_7q4769$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledImg$lambda(closure$alt, closure$src) {
      return function (it) {
        return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src]), it);
      };
    }
    return function ($receiver, alt, src, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledImg$lambda(alt, src));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMap = defineInlineFunction('kotlin-styled.styled.styledMap_7ty1qj$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MAP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMap$lambda(closure$name) {
      return function (it) {
        return new MAP_init(attributesMapOf('name', closure$name), it);
      };
    }
    return function ($receiver, name, block) {
      if (name === void 0)
        name = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMap$lambda(name));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledVideo = defineInlineFunction('kotlin-styled.styled.styledVideo_plb1hj$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var VIDEO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VIDEO;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledVideo$lambda(it) {
      return new VIDEO_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledVideo$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledEmbed = defineInlineFunction('kotlin-styled.styled.styledEmbed_ha10uz$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var EMBED_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EMBED;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledEmbed$lambda(it) {
      return new EMBED_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledEmbed$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledIframe = defineInlineFunction('kotlin-styled.styled.styledIframe_kqjv7h$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledIframe$lambda(closure$sandbox) {
      return function (it) {
        return new IFRAME_init(attributesMapOf('sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null), it);
      };
    }
    return function ($receiver, sandbox, content) {
      if (sandbox === void 0)
        sandbox = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledIframe$lambda(sandbox));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledIframe_0 = defineInlineFunction('kotlin-styled.styled.styledIframe_mfopg8$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledIframe$lambda(closure$sandbox) {
      return function (it) {
        return new IFRAME_init(attributesMapOf('sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null), it);
      };
    }
    return function ($receiver, sandbox, block) {
      if (sandbox === void 0)
        sandbox = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledIframe$lambda(sandbox));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledObject = defineInlineFunction('kotlin-styled.styled.styledObject_u1xvy9$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OBJECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OBJECT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledObject$lambda(it) {
      return new OBJECT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledObject$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledParam = defineInlineFunction('kotlin-styled.styled.styledParam_70o309$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PARAM;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledParam$lambda(closure$name, closure$value) {
      return function (it) {
        return new PARAM_init(attributesMapOf(['name', closure$name, 'value', closure$value]), it);
      };
    }
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledParam$lambda(name, value));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledPicture = defineInlineFunction('kotlin-styled.styled.styledPicture_6hj3qi$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var PICTURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PICTURE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledPicture$lambda(it) {
      return new PICTURE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledPicture$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSource = defineInlineFunction('kotlin-styled.styled.styledSource_12vx3v$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SOURCE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SOURCE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSource$lambda(it) {
      return new SOURCE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSource$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSvg = defineInlineFunction('kotlin-styled.styled.styledSvg_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSvg$lambda(it) {
      return new SVG_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSvg$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSvg_0 = defineInlineFunction('kotlin-styled.styled.styledSvg_4m290w$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSvg$lambda(it) {
      return new SVG_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSvg$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMath = defineInlineFunction('kotlin-styled.styled.styledMath_cnrgq0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var MATH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATH;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMath$lambda(it) {
      return new MATH_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMath$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCanvas = defineInlineFunction('kotlin-styled.styled.styledCanvas_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCanvas$lambda(it) {
      return new CANVAS_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCanvas$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCanvas_0 = defineInlineFunction('kotlin-styled.styled.styledCanvas_mheybc$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCanvas$lambda(it) {
      return new CANVAS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCanvas$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledNoscript = defineInlineFunction('kotlin-styled.styled.styledNoscript_xt87u4$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var NOSCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NOSCRIPT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledNoscript$lambda(it) {
      return new NOSCRIPT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledNoscript$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledScript = defineInlineFunction('kotlin-styled.styled.styledScript_f5jx5h$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SCRIPT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledScript$lambda(closure$type, closure$src) {
      return function (it) {
        return new SCRIPT_init(attributesMapOf(['type', closure$type, 'src', closure$src]), it);
      };
    }
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledScript$lambda(type, src));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDel = defineInlineFunction('kotlin-styled.styled.styledDel_sodis7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DEL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDel$lambda(it) {
      return new DEL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDel$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledIns = defineInlineFunction('kotlin-styled.styled.styledIns_v7acme$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var INS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledIns$lambda(it) {
      return new INS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledIns$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCaption = defineInlineFunction('kotlin-styled.styled.styledCaption_ff1mjy$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var CAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CAPTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCaption$lambda(it) {
      return new CAPTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCaption$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledCol = defineInlineFunction('kotlin-styled.styled.styledCol_1gtqb0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var COL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledCol$lambda(it) {
      return new COL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledCol$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledColgroup = defineInlineFunction('kotlin-styled.styled.styledColgroup_j3cjpd$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var COLGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COLGROUP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledColgroup$lambda(it) {
      return new COLGROUP_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledColgroup$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTable = defineInlineFunction('kotlin-styled.styled.styledTable_il2xhi$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TABLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTable$lambda(it) {
      return new TABLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTbody = defineInlineFunction('kotlin-styled.styled.styledTbody_al0num$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TBODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTbody$lambda(it) {
      return new TBODY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTbody$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTd = defineInlineFunction('kotlin-styled.styled.styledTd_gx5b5c$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTd$lambda(it) {
      return new TD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTfoot = defineInlineFunction('kotlin-styled.styled.styledTfoot_u1clma$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TFOOT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TFOOT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTfoot$lambda(it) {
      return new TFOOT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTfoot$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTh = defineInlineFunction('kotlin-styled.styled.styledTh_953rpx$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTh$lambda(closure$scope) {
      return function (it) {
        return new TH_init(attributesMapOf('scope', closure$scope != null ? enumEncode(closure$scope) : null), it);
      };
    }
    return function ($receiver, scope, block) {
      if (scope === void 0)
        scope = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTh$lambda(scope));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledThead = defineInlineFunction('kotlin-styled.styled.styledThead_b8pjcw$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var THEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledThead$lambda(it) {
      return new THEAD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTr = defineInlineFunction('kotlin-styled.styled.styledTr_u95wke$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTr$lambda(it) {
      return new TR_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTr$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledButton = defineInlineFunction('kotlin-styled.styled.styledButton_v3mt7e$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
      return function (it) {
        return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
      };
    }
    return function ($receiver, formEncType, formMethod, type, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (type === void 0)
        type = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledButton$lambda(formEncType, formMethod, type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDatalist = defineInlineFunction('kotlin-styled.styled.styledDatalist_q0qxew$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DATALIST_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DATALIST;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDatalist$lambda(it) {
      return new DATALIST_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDatalist$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledFieldset = defineInlineFunction('kotlin-styled.styled.styledFieldset_xj98jc$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var FIELDSET_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIELDSET;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledFieldset$lambda(it) {
      return new FIELDSET_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledFieldset$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledForm = defineInlineFunction('kotlin-styled.styled.styledForm_k88gii$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledForm$lambda(closure$action, closure$encType, closure$method) {
      return function (it) {
        return new FORM_init(attributesMapOf(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null]), it);
      };
    }
    return function ($receiver, action, encType, method, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledForm$lambda(action, encType, method));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledInput = defineInlineFunction('kotlin-styled.styled.styledInput_gxkg23$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledInput$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name) {
      return function (it) {
        return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name]), it);
      };
    }
    return function ($receiver, type, formEncType, formMethod, name, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledInput$lambda(type, formEncType, formMethod, name));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledLabel = defineInlineFunction('kotlin-styled.styled.styledLabel_119a74$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var LABEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledLabel$lambda(it) {
      return new LABEL_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLabel$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledLegend = defineInlineFunction('kotlin-styled.styled.styledLegend_3psej1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var LEGEND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LEGEND;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledLegend$lambda(it) {
      return new LEGEND_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLegend$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledMeter = defineInlineFunction('kotlin-styled.styled.styledMeter_f1skx7$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var METER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.METER;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledMeter$lambda(it) {
      return new METER_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledMeter$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOptgroup = defineInlineFunction('kotlin-styled.styled.styledOptgroup_vqdpuf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTGROUP;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOptgroup$lambda(closure$label) {
      return function (it) {
        return new OPTGROUP_init(attributesMapOf('label', closure$label), it);
      };
    }
    return function ($receiver, label, block) {
      if (label === void 0)
        label = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOptgroup$lambda(label));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOption = defineInlineFunction('kotlin-styled.styled.styledOption_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOption$lambda(it) {
      return new OPTION_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOption$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOption_0 = defineInlineFunction('kotlin-styled.styled.styledOption_m0ne2d$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOption$lambda(it) {
      return new OPTION_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOption$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledOutput = defineInlineFunction('kotlin-styled.styled.styledOutput_gldd6p$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var OUTPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OUTPUT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledOutput$lambda(it) {
      return new OUTPUT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledOutput$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledProgress = defineInlineFunction('kotlin-styled.styled.styledProgress_6rgx5f$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var PROGRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PROGRESS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledProgress$lambda(it) {
      return new PROGRESS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledProgress$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSelect = defineInlineFunction('kotlin-styled.styled.styledSelect_46ho4c$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SELECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSelect$lambda(it) {
      return new SELECT_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSelect$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTextarea = defineInlineFunction('kotlin-styled.styled.styledTextarea_fmll6w$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTextarea$lambda(closure$rows, closure$cols, closure$wrap) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, content) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTextarea$lambda(rows, cols, wrap));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledTextarea_0 = defineInlineFunction('kotlin-styled.styled.styledTextarea_zcvaif$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledTextarea$lambda(closure$rows, closure$cols, closure$wrap) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTextarea$lambda(rows, cols, wrap));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDetails = defineInlineFunction('kotlin-styled.styled.styledDetails_hf2xda$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DETAILS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DETAILS;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDetails$lambda(it) {
      return new DETAILS_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDetails$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledDialog = defineInlineFunction('kotlin-styled.styled.styledDialog_m9v0a0$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var DIALOG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIALOG;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledDialog$lambda(it) {
      return new DIALOG_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDialog$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var styledSummary = defineInlineFunction('kotlin-styled.styled.styledSummary_gn4pqq$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var SUMMARY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUMMARY;
    var StyledDOMBuilder = _.styled.StyledDOMBuilder;
    function styledSummary$lambda(it) {
      return new SUMMARY_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSummary$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  function rawStyled(target) {
    return $module$styled_components_0.default(target);
  }
  $$importsForInline$$['kotlin-styled'] = _;
  var package$styled = _.styled || (_.styled = {});
  package$styled.animation_z6115y$ = animation_0;
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  package$styled.keyframesName_61zpoe$ = keyframesName;
  package$styled.keyframes_sizrkg$ = keyframes;
  package$styled.inlineStyles_b07t6c$ = inlineStyles;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$styled.toStyle_y3tcm5$ = toStyle;
  package$styled.StyleSheet_init_tl0644$ = StyleSheet_init;
  package$styled.StyleSheet = StyleSheet;
  package$styled.CssHolder = CssHolder;
  package$styled.getClassName_4rhl28$ = getClassName;
  package$styled.getClassSelector_4rhl28$ = getClassSelector;
  package$styled.cssMarker_pgm7eu$ = cssMarker;
  package$styled.forwardCss_ckjb8o$ = forwardCss;
  package$styled.forwardCss_hrqukv$ = forwardCss_0;
  package$styled.StyledBuilder = StyledBuilder;
  package$styled.css_vpie0h$ = css;
  Object.defineProperty(StyledElementBuilder, 'Companion', {
    get: StyledElementBuilder$Companion_getInstance
  });
  package$styled.StyledElementBuilder = StyledElementBuilder;
  package$styled.StyledElementBuilderImpl = StyledElementBuilderImpl;
  Object.defineProperty(StyledDOMBuilder, 'Companion', {
    get: StyledDOMBuilder$Companion_getInstance
  });
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  package$styled.StyledDOMBuilderImpl = StyledDOMBuilderImpl;
  package$styled.styled_s3r830$ = styled;
  package$styled.css_nqyh8f$ = css_0;
  package$styled.css_akzz26$ = css_1;
  package$styled.injectGlobal_5cyqpy$ = injectGlobal;
  package$styled.injectGlobal_61zpoe$ = injectGlobal_0;
  package$styled.injectGlobal_lx8bml$ = injectGlobal_1;
  Object.defineProperty(package$styled, 'Styled', {
    get: Styled_getInstance
  });
  package$styled.styledTag_8tb0c0$ = styledTag;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$styled.styledHtml_ke3yi3$ = styledHtml;
  package$styled.styledBase_1upga7$ = styledBase;
  package$styled.styledHead_pxbiyo$ = styledHead;
  package$styled.styledLink_w1nb4n$ = styledLink;
  package$styled.styledMeta_1zzqmz$ = styledMeta;
  package$styled.styledStyle_xoe246$ = styledStyle;
  package$styled.styledStyle_ligb9c$ = styledStyle_0;
  package$styled.styledTitle_hw0qe1$ = styledTitle;
  package$styled.styledTitle_ysxh38$ = styledTitle_0;
  package$styled.styledBody_na2bsy$ = styledBody;
  package$styled.styledAddress_vixkf4$ = styledAddress;
  package$styled.styledArticle_lgmfz2$ = styledArticle;
  package$styled.styledAside_rd7t5o$ = styledAside;
  package$styled.styledFooter_abs6jp$ = styledFooter;
  package$styled.styledHeader_nyg1zh$ = styledHeader;
  package$styled.styledH1_k7892h$ = styledH1;
  package$styled.styledH2_sn6rre$ = styledH2;
  package$styled.styledH3_xxyrit$ = styledH3;
  package$styled.styledH4_pi08tw$ = styledH4;
  package$styled.styledH5_h21q4z$ = styledH5;
  package$styled.styledH6_8m37g2$ = styledH6;
  package$styled.styledMain_pe1pvd$ = styledMain;
  package$styled.styledNav_cdm54f$ = styledNav;
  package$styled.styledSection_46srkf$ = styledSection;
  package$styled.styledBlockquote_ysxgdt$ = styledBlockquote;
  package$styled.styledDd_dz3lwg$ = styledDd;
  package$styled.styledDiv_nl27x9$ = styledDiv;
  package$styled.styledDl_hgjic8$ = styledDl;
  package$styled.styledDt_kxzes0$ = styledDt;
  package$styled.styledFigcaption_c04876$ = styledFigcaption;
  package$styled.styledFigure_le7sck$ = styledFigure;
  package$styled.styledHr_epf60a$ = styledHr;
  package$styled.styledLi_8qvw1v$ = styledLi;
  package$styled.styledOl_kgxcnx$ = styledOl;
  package$styled.styledP_iop6fw$ = styledP;
  package$styled.styledPre_ik11in$ = styledPre;
  package$styled.styledUl_s8spxz$ = styledUl;
  package$styled.styledA_8k1tal$ = styledA;
  package$styled.styledAbbr_6au89b$ = styledAbbr;
  package$styled.styledB_shm19u$ = styledB;
  package$styled.styledBdi_791cr1$ = styledBdi;
  package$styled.styledBdo_rmeakn$ = styledBdo;
  package$styled.styledBr_6xjsq8$ = styledBr;
  package$styled.styledCite_ketyeh$ = styledCite;
  package$styled.styledCode_afw0kt$ = styledCode;
  package$styled.styledDfn_n6kfq0$ = styledDfn;
  package$styled.styledEm_veb43c$ = styledEm;
  package$styled.styledI_um3lkl$ = styledI;
  package$styled.styledKbd_1n2oah$ = styledKbd;
  package$styled.styledMark_bpz7pp$ = styledMark;
  package$styled.styledQ_r4np4t$ = styledQ;
  package$styled.styledRp_cwexwi$ = styledRp;
  package$styled.styledRt_kvf4v6$ = styledRt;
  package$styled.styledRuby_za616i$ = styledRuby;
  package$styled.styledSamp_yhe0i7$ = styledSamp;
  package$styled.styledSmall_s8f5bh$ = styledSmall;
  package$styled.styledSpan_wnx53q$ = styledSpan;
  package$styled.styledStrong_1nxmeh$ = styledStrong;
  package$styled.styledSub_og4q1g$ = styledSub;
  package$styled.styledSup_mq6hoa$ = styledSup;
  package$styled.styledTime_iiw05p$ = styledTime;
  package$styled.styledVar_vje9zh$ = styledVar;
  package$styled.styledArea_oyrah7$ = styledArea;
  package$styled.styledAudio_wpd72a$ = styledAudio;
  package$styled.styledImg_7q4769$ = styledImg;
  package$styled.styledMap_7ty1qj$ = styledMap;
  package$styled.styledVideo_plb1hj$ = styledVideo;
  package$styled.styledEmbed_ha10uz$ = styledEmbed;
  package$styled.styledIframe_kqjv7h$ = styledIframe;
  package$styled.styledIframe_mfopg8$ = styledIframe_0;
  package$styled.styledObject_u1xvy9$ = styledObject;
  package$styled.styledParam_70o309$ = styledParam;
  package$styled.styledPicture_6hj3qi$ = styledPicture;
  package$styled.styledSource_12vx3v$ = styledSource;
  package$styled.styledSvg_hw0qe1$ = styledSvg;
  package$styled.styledSvg_4m290w$ = styledSvg_0;
  package$styled.styledMath_cnrgq0$ = styledMath;
  package$styled.styledCanvas_hw0qe1$ = styledCanvas;
  package$styled.styledCanvas_mheybc$ = styledCanvas_0;
  package$styled.styledNoscript_xt87u4$ = styledNoscript;
  package$styled.styledScript_f5jx5h$ = styledScript;
  package$styled.styledDel_sodis7$ = styledDel;
  package$styled.styledIns_v7acme$ = styledIns;
  package$styled.styledCaption_ff1mjy$ = styledCaption;
  package$styled.styledCol_1gtqb0$ = styledCol;
  package$styled.styledColgroup_j3cjpd$ = styledColgroup;
  package$styled.styledTable_il2xhi$ = styledTable;
  package$styled.styledTbody_al0num$ = styledTbody;
  package$styled.styledTd_gx5b5c$ = styledTd;
  package$styled.styledTfoot_u1clma$ = styledTfoot;
  package$styled.styledTh_953rpx$ = styledTh;
  package$styled.styledThead_b8pjcw$ = styledThead;
  package$styled.styledTr_u95wke$ = styledTr;
  package$styled.styledButton_v3mt7e$ = styledButton;
  package$styled.styledDatalist_q0qxew$ = styledDatalist;
  package$styled.styledFieldset_xj98jc$ = styledFieldset;
  package$styled.styledForm_k88gii$ = styledForm;
  package$styled.styledInput_gxkg23$ = styledInput;
  package$styled.styledLabel_119a74$ = styledLabel;
  package$styled.styledLegend_3psej1$ = styledLegend;
  package$styled.styledMeter_f1skx7$ = styledMeter;
  package$styled.styledOptgroup_vqdpuf$ = styledOptgroup;
  package$styled.styledOption_hw0qe1$ = styledOption;
  package$styled.styledOption_m0ne2d$ = styledOption_0;
  package$styled.styledOutput_gldd6p$ = styledOutput;
  package$styled.styledProgress_6rgx5f$ = styledProgress;
  package$styled.styledSelect_46ho4c$ = styledSelect;
  package$styled.styledTextarea_fmll6w$ = styledTextarea;
  package$styled.styledTextarea_zcvaif$ = styledTextarea_0;
  package$styled.styledDetails_hf2xda$ = styledDetails;
  package$styled.styledDialog_m9v0a0$ = styledDialog;
  package$styled.styledSummary_gn4pqq$ = styledSummary;
  package$styled.rawStyled_za3rmp$ = rawStyled;
  Object.defineProperty(StyledElementBuilder.prototype, 'key', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'key'));
  Object.defineProperty(StyledElementBuilder.prototype, 'ref', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'ref'));
  StyledElementBuilder.prototype.attrs_37755u$ = RElementBuilder.prototype.attrs_37755u$;
  StyledElementBuilder.prototype.child_up9nw1$ = RElementBuilder.prototype.child_up9nw1$;
  StyledElementBuilder.prototype.child_1mw94g$$default = RElementBuilder.prototype.child_1mw94g$$default;
  StyledElementBuilder.prototype.child_30b5ua$ = RElementBuilder.prototype.child_30b5ua$;
  StyledElementBuilder.prototype.children_w8hwhj$ = RElementBuilder.prototype.children_w8hwhj$;
  StyledElementBuilder.prototype.invoke_c0v1gl$ = RElementBuilder.prototype.invoke_c0v1gl$;
  StyledElementBuilder.prototype.invoke_r7bapy$ = RElementBuilder.prototype.invoke_r7bapy$;
  StyledElementBuilder.prototype.invoke_qk0v40$ = RElementBuilder.prototype.invoke_qk0v40$;
  StyledElementBuilder.prototype.invoke_snhqu5$ = RElementBuilder.prototype.invoke_snhqu5$;
  StyledElementBuilder.prototype.unaryPlus_pdl1vz$ = RElementBuilder.prototype.unaryPlus_pdl1vz$;
  StyledElementBuilder.prototype.unaryPlus_m8hz4t$ = RElementBuilder.prototype.unaryPlus_m8hz4t$;
  StyledElementBuilder.prototype.child_1mw94g$ = RElementBuilder.prototype.child_1mw94g$;
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(StyledElementBuilder.prototype, 'key'));
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(StyledElementBuilder.prototype, 'ref'));
  StyledElementBuilderImpl.prototype.attrs_37755u$ = StyledElementBuilder.prototype.attrs_37755u$;
  StyledElementBuilderImpl.prototype.child_up9nw1$ = StyledElementBuilder.prototype.child_up9nw1$;
  StyledElementBuilderImpl.prototype.child_1mw94g$$default = StyledElementBuilder.prototype.child_1mw94g$$default;
  StyledElementBuilderImpl.prototype.child_30b5ua$ = StyledElementBuilder.prototype.child_30b5ua$;
  StyledElementBuilderImpl.prototype.children_w8hwhj$ = StyledElementBuilder.prototype.children_w8hwhj$;
  StyledElementBuilderImpl.prototype.invoke_c0v1gl$ = StyledElementBuilder.prototype.invoke_c0v1gl$;
  StyledElementBuilderImpl.prototype.invoke_r7bapy$ = StyledElementBuilder.prototype.invoke_r7bapy$;
  StyledElementBuilderImpl.prototype.invoke_qk0v40$ = StyledElementBuilder.prototype.invoke_qk0v40$;
  StyledElementBuilderImpl.prototype.invoke_snhqu5$ = StyledElementBuilder.prototype.invoke_snhqu5$;
  StyledElementBuilderImpl.prototype.unaryPlus_pdl1vz$ = StyledElementBuilder.prototype.unaryPlus_pdl1vz$;
  StyledElementBuilderImpl.prototype.unaryPlus_m8hz4t$ = StyledElementBuilder.prototype.unaryPlus_m8hz4t$;
  StyledElementBuilderImpl.prototype.child_1mw94g$ = StyledElementBuilder.prototype.child_1mw94g$;
  Object.defineProperty(StyledDOMBuilder.prototype, 'key', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'key'));
  Object.defineProperty(StyledDOMBuilder.prototype, 'ref', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'ref'));
  StyledDOMBuilder.prototype.get_defaultChecked_a2ovwx$ = RDOMBuilder.prototype.get_defaultChecked_a2ovwx$;
  StyledDOMBuilder.prototype.set_defaultChecked_47da7g$ = RDOMBuilder.prototype.set_defaultChecked_47da7g$;
  StyledDOMBuilder.prototype.get_value_sktobr$ = RDOMBuilder.prototype.get_value_sktobr$;
  StyledDOMBuilder.prototype.set_value_g9clh3$ = RDOMBuilder.prototype.set_value_g9clh3$;
  StyledDOMBuilder.prototype.get_values_sktobr$ = RDOMBuilder.prototype.get_values_sktobr$;
  StyledDOMBuilder.prototype.set_values_d8zj82$ = RDOMBuilder.prototype.set_values_d8zj82$;
  StyledDOMBuilder.prototype.child_up9nw1$ = RDOMBuilder.prototype.child_up9nw1$;
  StyledDOMBuilder.prototype.child_1mw94g$$default = RDOMBuilder.prototype.child_1mw94g$$default;
  StyledDOMBuilder.prototype.child_30b5ua$ = RDOMBuilder.prototype.child_30b5ua$;
  StyledDOMBuilder.prototype.children_w8hwhj$ = RDOMBuilder.prototype.children_w8hwhj$;
  StyledDOMBuilder.prototype.get_g0n3bx$ = RDOMBuilder.prototype.get_g0n3bx$;
  StyledDOMBuilder.prototype.invoke_c0v1gl$ = RDOMBuilder.prototype.invoke_c0v1gl$;
  StyledDOMBuilder.prototype.invoke_r7bapy$ = RDOMBuilder.prototype.invoke_r7bapy$;
  StyledDOMBuilder.prototype.invoke_qk0v40$ = RDOMBuilder.prototype.invoke_qk0v40$;
  StyledDOMBuilder.prototype.invoke_snhqu5$ = RDOMBuilder.prototype.invoke_snhqu5$;
  StyledDOMBuilder.prototype.set_hpg2xa$ = RDOMBuilder.prototype.set_hpg2xa$;
  StyledDOMBuilder.prototype.unaryPlus_pdl1vz$ = RDOMBuilder.prototype.unaryPlus_pdl1vz$;
  StyledDOMBuilder.prototype.unaryPlus_m8hz4t$ = RDOMBuilder.prototype.unaryPlus_m8hz4t$;
  StyledDOMBuilder.prototype.child_1mw94g$ = RDOMBuilder.prototype.child_1mw94g$;
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'type', Object.getOwnPropertyDescriptor(StyledDOMBuilder.prototype, 'type'));
  StyledDOMBuilderImpl.prototype.create = StyledDOMBuilder.prototype.create;
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(StyledDOMBuilder.prototype, 'key'));
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(StyledDOMBuilder.prototype, 'ref'));
  StyledDOMBuilderImpl.prototype.get_defaultChecked_a2ovwx$ = StyledDOMBuilder.prototype.get_defaultChecked_a2ovwx$;
  StyledDOMBuilderImpl.prototype.set_defaultChecked_47da7g$ = StyledDOMBuilder.prototype.set_defaultChecked_47da7g$;
  StyledDOMBuilderImpl.prototype.get_value_sktobr$ = StyledDOMBuilder.prototype.get_value_sktobr$;
  StyledDOMBuilderImpl.prototype.set_value_g9clh3$ = StyledDOMBuilder.prototype.set_value_g9clh3$;
  StyledDOMBuilderImpl.prototype.get_values_sktobr$ = StyledDOMBuilder.prototype.get_values_sktobr$;
  StyledDOMBuilderImpl.prototype.set_values_d8zj82$ = StyledDOMBuilder.prototype.set_values_d8zj82$;
  StyledDOMBuilderImpl.prototype.child_up9nw1$ = StyledDOMBuilder.prototype.child_up9nw1$;
  StyledDOMBuilderImpl.prototype.child_1mw94g$$default = StyledDOMBuilder.prototype.child_1mw94g$$default;
  StyledDOMBuilderImpl.prototype.child_30b5ua$ = StyledDOMBuilder.prototype.child_30b5ua$;
  StyledDOMBuilderImpl.prototype.children_w8hwhj$ = StyledDOMBuilder.prototype.children_w8hwhj$;
  StyledDOMBuilderImpl.prototype.get_g0n3bx$ = StyledDOMBuilder.prototype.get_g0n3bx$;
  StyledDOMBuilderImpl.prototype.invoke_c0v1gl$ = StyledDOMBuilder.prototype.invoke_c0v1gl$;
  StyledDOMBuilderImpl.prototype.invoke_r7bapy$ = StyledDOMBuilder.prototype.invoke_r7bapy$;
  StyledDOMBuilderImpl.prototype.invoke_qk0v40$ = StyledDOMBuilder.prototype.invoke_qk0v40$;
  StyledDOMBuilderImpl.prototype.invoke_snhqu5$ = StyledDOMBuilder.prototype.invoke_snhqu5$;
  StyledDOMBuilderImpl.prototype.set_hpg2xa$ = StyledDOMBuilder.prototype.set_hpg2xa$;
  StyledDOMBuilderImpl.prototype.unaryPlus_pdl1vz$ = StyledDOMBuilder.prototype.unaryPlus_pdl1vz$;
  StyledDOMBuilderImpl.prototype.unaryPlus_m8hz4t$ = StyledDOMBuilder.prototype.unaryPlus_m8hz4t$;
  StyledDOMBuilderImpl.prototype.child_1mw94g$ = StyledDOMBuilder.prototype.child_1mw94g$;
  Kotlin.defineModule('kotlin-styled', _);
  return _;
}));
