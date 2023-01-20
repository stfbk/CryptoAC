(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-react-dom-legacy', 'kotlin-extensions', 'inline-style-prefixer', 'kotlin-js', 'kotlin-react-legacy', 'styled-components', 'react', 'react-dom', 'react', 'kotlin-csstype', 'kotlin-react-core', 'kotlinx-html-js', 'styled-components'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-react-dom-legacy'), require('kotlin-extensions'), require('inline-style-prefixer'), require('kotlin-js'), require('kotlin-react-legacy'), require('styled-components'), require('react'), require('react-dom'), require('react'), require('kotlin-csstype'), require('kotlin-react-core'), require('kotlinx-html-js'), require('styled-components'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['kotlin-react-dom-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-react-dom-legacy' was not found. Please, check whether 'kotlin-react-dom-legacy' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['inline-style-prefixer'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'inline-style-prefixer' was not found. Please, check whether 'inline-style-prefixer' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['kotlin-react-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-react-legacy' was not found. Please, check whether 'kotlin-react-legacy' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['styled-components'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof ReactModule === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['kotlin-csstype'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-csstype' was not found. Please, check whether 'kotlin-csstype' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-styled'.");
    }
    if (typeof StyledComponents === 'undefined') {
      throw new Error("Error loading module 'kotlin-styled'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-styled'.");
    }
    root['kotlin-styled'] = factory(typeof this['kotlin-styled'] === 'undefined' ? {} : this['kotlin-styled'], kotlin, this['kotlin-css'], this['kotlin-react-dom-legacy'], this['kotlin-extensions'], this['inline-style-prefixer'], this['kotlin-js'], this['kotlin-react-legacy'], this['styled-components'], react, this['react-dom'], ReactModule, this['kotlin-csstype'], this['kotlin-react-core'], this['kotlinx-html-js'], StyledComponents);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_react_dom_legacy, $module$kotlin_extensions, $module$inline_style_prefixer, $module$kotlin_js, $module$kotlin_react_legacy, $module$styled_components, $module$react, $module$react_dom, $module$react_0, $module$kotlin_csstype, $module$kotlin_react_core, $module$kotlinx_html_js, $module$styled_components_0) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var setProp = $module$kotlin_react_dom_legacy.react.dom.setProp_v86kls$;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var CssBuilder = $module$kotlin_css.kotlinx.css.CssBuilder_ld8ri9$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RElementBuilder = $module$kotlin_react_legacy.react.RElementBuilder;
  var RElementBuilderImpl = $module$kotlin_react_legacy.react.RElementBuilderImpl;
  var RDOMBuilder = $module$kotlin_react_dom_legacy.react.dom.RDOMBuilder;
  var RDOMBuilderImpl = $module$kotlin_react_dom_legacy.react.dom.RDOMBuilderImpl;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var createElement = $module$react.createElement;
  var render = $module$react_dom.render;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  StyledElementBuilderImpl.prototype = Object.create(RElementBuilderImpl.prototype);
  StyledDOMBuilderImpl.prototype = Object.create(RDOMBuilderImpl.prototype);
  StyledDOMBuilderImpl.prototype.constructor = StyledDOMBuilderImpl;
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledBuilder', interfaces: []};
  function StyledElementBuilder() {
    StyledElementBuilder$Companion_getInstance();
  }
  var StyledElementBuilder$Companion_instance = null;
  function StyledElementBuilderImpl(type, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }
    RElementBuilderImpl.call(this, attrs);
    this.type_j70h7l$_0 = type;
    this.css_l8ze94$_0 = CssBuilder(void 0, void 0, void 0, void 0, true);
  }
  function StyledDOMBuilder() {
    StyledDOMBuilder$Companion_getInstance();
  }
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {configurable: true, get: function () {
    return this.attrs.tagName;
  }});
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_go7g43$(this.type, this.css, this.domProps, this.childList);
  };
  function StyledDOMBuilder$Companion() {
    StyledDOMBuilder$Companion_instance = this;
  }
  StyledDOMBuilder$Companion.prototype.invoke_f6ihu2$ = function (factory) {
    return new StyledDOMBuilderImpl(factory);
  };
  StyledDOMBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StyledDOMBuilder$Companion_instance = null;
  function StyledDOMBuilder$Companion_getInstance() {
    if (StyledDOMBuilder$Companion_instance === null) {
      new StyledDOMBuilder$Companion();
    }
    return StyledDOMBuilder$Companion_instance;
  }
  StyledDOMBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledDOMBuilder', interfaces: [StyledBuilder, RDOMBuilder]};
  function StyledDOMBuilderImpl(factory) {
    RDOMBuilderImpl.call(this, factory);
    this.css_sotjku$_0 = CssBuilder(void 0, void 0, void 0, void 0, true);
  }
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'css', {configurable: true, get: function () {
    return this.css_sotjku$_0;
  }});
  StyledDOMBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyledDOMBuilderImpl', interfaces: [RDOMBuilderImpl, StyledDOMBuilder]};
  var GlobalStyles_instance = null;
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
  function Styled() {
    Styled_instance = this;
    this.cache_0 = LinkedHashMap_init();
  }
  function Styled$wrap$lambda$lambda$lambda(it) {
    return it._css;
  }
  function Styled$wrap$lambda$lambda(closure$type) {
    return function () {
      return invoke_1(rawStyled(closure$type), [Styled$wrap$lambda$lambda$lambda]);
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
    }
    var tmp$_0 = tmp$;
    if (!tmp$_0) {
      tmp$_0 = !css.declarations.isEmpty();
    }
    if (tmp$_0) {
      styledProps._css = css.toString();
    }
    if (!css.classes.isEmpty()) {
      styledProps.className = joinToString(css.classes, ' ');
    }
    if (!css.styleName.isEmpty()) {
      styledProps['data-style'] = joinToString(css.styleName, ' ');
    }
    return styledProps;
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
  Styled.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Styled', interfaces: []};
  var Styled_instance = null;
  function Styled_getInstance() {
    if (Styled_instance === null) {
      new Styled();
    }
    return Styled_instance;
  }
  function invoke($receiver, strings, values) {
    var tmp$;
    return (tmp$ = $receiver).call.apply(tmp$, [null, strings].concat(values));
  }
  function invoke_1($receiver, values) {
    return invoke($receiver, [], values.slice());
  }
  function rawStyled(target) {
    return $module$styled_components_0.default(target);
  }
  var package$styled = _.styled || (_.styled = {});
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$styled.StyledBuilder = StyledBuilder;
  $$importsForInline$$['kotlin-js'] = $module$kotlin_js;
  package$styled.StyledElementBuilder = StyledElementBuilder;
  package$styled.StyledElementBuilderImpl = StyledElementBuilderImpl;
  Object.defineProperty(StyledDOMBuilder, 'Companion', {get: StyledDOMBuilder$Companion_getInstance});
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  package$styled.StyledDOMBuilderImpl = StyledDOMBuilderImpl;
  $$importsForInline$$['kotlin-csstype'] = $module$kotlin_csstype;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  Object.defineProperty(package$styled, 'Styled', {get: Styled_getInstance});
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$styled.invoke_e17kcd$ = invoke;
  package$styled.invoke_ohtdkp$ = invoke_1;
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
  return _;
}));

//# sourceMappingURL=kotlin-styled.js.map
