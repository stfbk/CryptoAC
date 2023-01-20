(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-css'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-css'.");
    }
    root['kotlin-css'] = factory(typeof this['kotlin-css'] === 'undefined' ? {} : this['kotlin-css'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var Unit = Kotlin.kotlin.Unit;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var getCallableRef = Kotlin.getCallableRef;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var throwCCE = Kotlin.throwCCE;
  var hashCode = Kotlin.hashCode;
  var Annotation = Kotlin.kotlin.Annotation;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nig4hr$;
  var coerceIn_0 = Kotlin.kotlin.ranges.coerceIn_e4yvb3$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var RegexOption = Kotlin.kotlin.text.RegexOption;
  var Regex_init_0 = Kotlin.kotlin.text.Regex_init_sb3q2$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var math = Kotlin.kotlin.math;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var substringBefore_0 = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var numberToInt = Kotlin.numberToInt;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_sgbm27$;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var toString = Kotlin.kotlin.text.toString_dqglrj$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var JsMath = Math;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var Any = Object;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var toString_0 = Kotlin.toString;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  LinearDimension.prototype = Object.create(CssValue.prototype);
  LinearDimension.prototype.constructor = LinearDimension;
  NumericLinearDimension.prototype = Object.create(LinearDimension.prototype);
  NumericLinearDimension.prototype.constructor = NumericLinearDimension;
  Align.prototype = Object.create(Enum.prototype);
  Align.prototype.constructor = Align;
  JustifyContent.prototype = Object.create(Enum.prototype);
  JustifyContent.prototype.constructor = JustifyContent;
  BackgroundRepeat.prototype = Object.create(Enum.prototype);
  BackgroundRepeat.prototype.constructor = BackgroundRepeat;
  BorderCollapse.prototype = Object.create(Enum.prototype);
  BorderCollapse.prototype.constructor = BorderCollapse;
  Color.prototype = Object.create(CssValue.prototype);
  Color.prototype.constructor = Color;
  QuotedString.prototype = Object.create(CssValue.prototype);
  QuotedString.prototype.constructor = QuotedString;
  Display.prototype = Object.create(Enum.prototype);
  Display.prototype.constructor = Display;
  Float.prototype = Object.create(Enum.prototype);
  Float.prototype.constructor = Float;
  FontWeight.prototype = Object.create(CssValue.prototype);
  FontWeight.prototype.constructor = FontWeight;
  Overflow.prototype = Object.create(Enum.prototype);
  Overflow.prototype.constructor = Overflow;
  Position.prototype = Object.create(Enum.prototype);
  Position.prototype.constructor = Position;
  TextAlign.prototype = Object.create(Enum.prototype);
  TextAlign.prototype.constructor = TextAlign;
  TextOverflow.prototype = Object.create(Enum.prototype);
  TextOverflow.prototype.constructor = TextOverflow;
  VerticalAlign.prototype = Object.create(CssValue.prototype);
  VerticalAlign.prototype.constructor = VerticalAlign;
  Image.prototype = Object.create(CssValue.prototype);
  Image.prototype.constructor = Image;
  Animations.prototype = Object.create(StyleList.prototype);
  Animations.prototype.constructor = Animations;
  BoxShadows.prototype = Object.create(StyleList.prototype);
  BoxShadows.prototype.constructor = BoxShadows;
  LineHeight.prototype = Object.create(CssValue.prototype);
  LineHeight.prototype.constructor = LineHeight;
  Transforms.prototype = Object.create(StyleList.prototype);
  Transforms.prototype.constructor = Transforms;
  Transitions.prototype = Object.create(StyleList.prototype);
  Transitions.prototype.constructor = Transitions;
  function CssBuilder(indent, allowClasses, parent, isHolder, isStyledComponent) {
    if (indent === void 0)
      indent = '';
    if (allowClasses === void 0)
      allowClasses = true;
    if (parent === void 0)
      parent = null;
    if (isHolder === void 0)
      isHolder = false;
    if (isStyledComponent === void 0)
      isStyledComponent = false;
    return new CssBuilderImpl(indent, allowClasses, parent, isHolder, isStyledComponent);
  }
  function CssBuilder_0() {
    CssBuilder$Companion_getInstance();
  }
  CssBuilder_0.prototype.invoke_3ad21g$ = function ($receiver, block) {
    return this.rule_1q2hwx$($receiver, false, void 0, block);
  };
  CssBuilder_0.prototype.invoke_x7exez$ = function ($receiver, css) {
    return this.rule_jindqg$($receiver, false, void 0, css);
  };
  CssBuilder_0.prototype.invoke_3c2457$ = function ($receiver, block) {
    return this.invoke_3ad21g$($receiver.tagName, block);
  };
  CssBuilder_0.prototype.active_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:active', block);
  };
  CssBuilder_0.prototype.checked_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:checked', block);
  };
  CssBuilder_0.prototype.default_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:default', block);
  };
  CssBuilder_0.prototype.defined_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:defined', block);
  };
  CssBuilder_0.prototype.disabled_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:disabled', block);
  };
  CssBuilder_0.prototype.empty_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:empty', block);
  };
  CssBuilder_0.prototype.enabled_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:enabled', block);
  };
  CssBuilder_0.prototype.firstChild_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:first-child', block);
  };
  CssBuilder_0.prototype.firstOfType_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:first-of-type', block);
  };
  CssBuilder_0.prototype.fullscreen_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:fullscreen', block);
  };
  CssBuilder_0.prototype.focus_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:focus', block);
  };
  CssBuilder_0.prototype.focusVisible_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:focus-visible', block);
  };
  CssBuilder_0.prototype.focusWithin_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:focus-within', block);
  };
  CssBuilder_0.prototype.hover_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:hover', block);
  };
  CssBuilder_0.prototype.indeterminate_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:indeterminate', block);
  };
  CssBuilder_0.prototype.inRange_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:in-range', block);
  };
  CssBuilder_0.prototype.invalid_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:invalid', block);
  };
  CssBuilder_0.prototype.lastChild_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:last-child', block);
  };
  CssBuilder_0.prototype.lastOfType_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:last-of-type', block);
  };
  CssBuilder_0.prototype.link_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:link', block);
  };
  function CssBuilder$not$lambda(it) {
    return '&:not(' + it + ')';
  }
  CssBuilder_0.prototype.not_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$not$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$nthChild$lambda(it) {
    return '&:nth-child(' + it + ')';
  }
  CssBuilder_0.prototype.nthChild_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$nthChild$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$nthLastChild$lambda(it) {
    return '&:nth-last-child(' + it + ')';
  }
  CssBuilder_0.prototype.nthLastChild_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$nthLastChild$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$nthLastOfType$lambda(it) {
    return '&:nth-last-of-type(' + it + ')';
  }
  CssBuilder_0.prototype.nthLastOfType_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$nthLastOfType$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$nthOfType$lambda(it) {
    return '&:nth-of-type(' + it + ')';
  }
  CssBuilder_0.prototype.nthOfType_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$nthOfType$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.onlyChild_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:only-child', block);
  };
  CssBuilder_0.prototype.onlyOfType_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:only-of-type', block);
  };
  CssBuilder_0.prototype.optional_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:optional', block);
  };
  CssBuilder_0.prototype.outOfRange_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:out-of-range', block);
  };
  CssBuilder_0.prototype.placeholderShown_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:placeholder-shown', block);
  };
  CssBuilder_0.prototype.readOnly_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:read-only', block);
  };
  CssBuilder_0.prototype.readWrite_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:read-write', block);
  };
  CssBuilder_0.prototype.required_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:required', block);
  };
  CssBuilder_0.prototype.valid_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:valid', block);
  };
  CssBuilder_0.prototype.visited_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&:visited', block);
  };
  function CssBuilder$children$lambda(it) {
    return '& > ' + it;
  }
  CssBuilder_0.prototype.children_xqeqkq$$default = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$children$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.children_xqeqkq$ = function (selector, block, callback$default) {
    if (selector === void 0)
      selector = ['*'];
    return callback$default ? callback$default(selector, block) : this.children_xqeqkq$$default(selector, block);
  };
  function CssBuilder$descendants$lambda(it) {
    return '& ' + it;
  }
  CssBuilder_0.prototype.descendants_xqeqkq$$default = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$descendants$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.descendants_xqeqkq$ = function (selector, block, callback$default) {
    if (selector === void 0)
      selector = ['*'];
    return callback$default ? callback$default(selector, block) : this.descendants_xqeqkq$$default(selector, block);
  };
  function CssBuilder$ancestorHover$lambda(closure$selectorRef) {
    return function (it) {
      return it + ':hover ' + closure$selectorRef;
    };
  }
  CssBuilder_0.prototype.ancestorHover_xqeqkq$ = function (selector, block) {
    var selectorRef = this.isStyledComponent ? '&&' : '&';
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$ancestorHover$lambda(selectorRef));
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$after$lambda(closure$block) {
    return function ($receiver) {
      set_content($receiver, get_quoted(''));
      closure$block($receiver);
      return Unit;
    };
  }
  CssBuilder_0.prototype.after_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::after', CssBuilder$after$lambda(block));
  };
  function CssBuilder$before$lambda(closure$block) {
    return function ($receiver) {
      set_content($receiver, get_quoted(''));
      closure$block($receiver);
      return Unit;
    };
  }
  CssBuilder_0.prototype.before_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::before', CssBuilder$before$lambda(block));
  };
  CssBuilder_0.prototype.firstLetter_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::first-letter', block);
  };
  CssBuilder_0.prototype.firstLine_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::first-line', block);
  };
  CssBuilder_0.prototype.placeholder_lx8bml$ = function (block) {
    this.invoke_3ad21g$('&::placeholder', block);
    this.invoke_3ad21g$('&::-webkit-input-placeholder', block);
    this.invoke_3ad21g$('&::-moz-placeholder', block);
    this.invoke_3ad21g$('&::-ms-input-placeholder', block);
    this.invoke_3ad21g$('&:-moz-placeholder', block);
  };
  CssBuilder_0.prototype.selection_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('&::selection', block);
  };
  function CssBuilder$child$lambda(it) {
    return '> ' + it;
  }
  CssBuilder_0.prototype.child_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$child$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$child$lambda_0(it) {
    return '> ' + it;
  }
  CssBuilder_0.prototype.child_v077kx$ = function (selector, css) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$child$lambda_0);
    return this.invoke_x7exez$(selectorString, css);
  };
  function CssBuilder$sibling$lambda(it) {
    return '~ ' + it;
  }
  CssBuilder_0.prototype.sibling_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$sibling$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  function CssBuilder$adjacentSibling$lambda(it) {
    return '+ ' + it;
  }
  CssBuilder_0.prototype.adjacentSibling_xqeqkq$ = function (selector, block) {
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$adjacentSibling$lambda);
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.universal_lx8bml$ = function (block) {
    return this.invoke_3ad21g$('*', block);
  };
  CssBuilder_0.prototype.compareTo_er05um$ = function (rule) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.child_v077kx$([rule.selector], rule.css);
    return 0;
  };
  CssBuilder_0.prototype.not_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    var $receiver_0 = $receiver.selector;
    var regex = CssBuilder$Companion_getInstance().NOT_REGEX_0;
    var replacement = '$1:not($2)';
    this.invoke_x7exez$(regex.replace_x2uqeu$($receiver_0, replacement), $receiver.css);
  };
  CssBuilder_0.prototype.unaryPlus_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.invoke_x7exez$('&.' + $receiver.selector, $receiver.css);
  };
  CssBuilder_0.prototype.specific_4clrgz$$default = function (specificity, block) {
    return this.rule_1q2hwx$(repeat('&', specificity), true, void 0, block);
  };
  CssBuilder_0.prototype.specific_4clrgz$ = function (specificity, block, callback$default) {
    if (specificity === void 0)
      specificity = 2;
    return callback$default ? callback$default(specificity, block) : this.specific_4clrgz$$default(specificity, block);
  };
  function CssBuilder$prefix$lambda(closure$selectorRef) {
    return function (it) {
      return it + ' ' + closure$selectorRef;
    };
  }
  CssBuilder_0.prototype.prefix_xqeqkq$ = function (selector, block) {
    var selectorRef = this.isStyledComponent ? '&&' : '&';
    var selectorString = joinToString(selector, void 0, void 0, void 0, void 0, void 0, CssBuilder$prefix$lambda(selectorRef));
    return this.invoke_3ad21g$(selectorString, block);
  };
  CssBuilder_0.prototype.media_v44dnz$ = function (query, block) {
    return this.invoke_3ad21g$('@media ' + query, block);
  };
  CssBuilder_0.prototype.supports_v44dnz$ = function (query, block) {
    return this.invoke_3ad21g$('@supports ' + query, block);
  };
  CssBuilder_0.prototype.container_v44dnz$ = function (query, block) {
    return this.invoke_3ad21g$('@container ' + query, block);
  };
  CssBuilder_0.prototype.fontFace_lx8bml$ = function (block) {
    return this.rule_1q2hwx$('@font-face', false, true, block);
  };
  function CssBuilder$retina$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  CssBuilder_0.prototype.retina_lx8bml$ = function (block) {
    this.media_v44dnz$('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)', CssBuilder$retina$lambda(block));
  };
  function CssBuilder$root$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  CssBuilder_0.prototype.root_lx8bml$ = function (block) {
    this.invoke_3ad21g$(':root', CssBuilder$root$lambda(block));
  };
  CssBuilder_0.prototype.setCustomProperty_lwowle$ = function (name, value) {
    this.put_puj7f4$('--' + name, value.value);
  };
  CssBuilder_0.prototype.min_5utlym$ = function (v1, v2) {
    return new LinearDimension('min(' + v1 + ', ' + v2 + ')');
  };
  CssBuilder_0.prototype.max_5utlym$ = function (v1, v2) {
    return new LinearDimension('max(' + v1 + ', ' + v2 + ')');
  };
  CssBuilder_0.prototype.clamp_me7l17$ = function (min, preferred, max) {
    return new LinearDimension('clamp(' + min + ', ' + preferred + ', ' + max + ')');
  };
  CssBuilder_0.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.addClass_v4ob8x$_0($receiver);
  };
  CssBuilder_0.prototype.unaryPlus_a3w2bl$ = function ($receiver) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.addClass_v4ob8x$_0(element);
    }
  };
  CssBuilder_0.prototype.unaryPlus_sdeqdk$ = function ($receiver) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.addClass_v4ob8x$_0(element);
    }
  };
  CssBuilder_0.prototype.addClass_v4ob8x$_0 = function (className) {
    var tmp$, tmp$_0;
    if (this.allowClasses) {
      this.classes.add_11rb$(className);
    } else {
      (tmp$_0 = Kotlin.isType(tmp$ = this.parent, CssBuilder_0) ? tmp$ : null) != null ? (tmp$_0.addClass_v4ob8x$_0(className), Unit) : null;
    }
  };
  CssBuilder_0.prototype.append_5cyqpy$ = function (other) {
    this.declarations.putAll_a2k3zr$(other.declarations);
    var $receiver = other.classes;
    var action = getCallableRef('addClass', function ($receiver, p1) {
      return $receiver.addClass_v4ob8x$_0(p1), Unit;
    }.bind(null, this));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    this.styleName.addAll_brywnq$(other.styleName);
    this.rules.addAll_brywnq$(other.rules);
    this.multiRules.addAll_brywnq$(other.multiRules);
  };
  function CssBuilder$Companion() {
    CssBuilder$Companion_instance = this;
    this.NOT_REGEX_v10gwb$_0 = lazy(CssBuilder$Companion$NOT_REGEX$lambda);
  }
  Object.defineProperty(CssBuilder$Companion.prototype, 'NOT_REGEX_0', {configurable: true, get: function () {
    return this.NOT_REGEX_v10gwb$_0.value;
  }});
  function CssBuilder$Companion$NOT_REGEX$lambda() {
    return Regex_init('^(&?)(.*)$');
  }
  CssBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var CssBuilder$Companion_instance = null;
  function CssBuilder$Companion_getInstance() {
    if (CssBuilder$Companion_instance === null) {
      new CssBuilder$Companion();
    }
    return CssBuilder$Companion_instance;
  }
  CssBuilder_0.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CssBuilder', interfaces: [RuleContainer, StyledElement]};
  function CssBuilderImpl(indent, allowClasses, parent, isHolder, isStyledComponent) {
    if (indent === void 0)
      indent = '';
    if (allowClasses === void 0)
      allowClasses = true;
    if (parent === void 0)
      parent = null;
    if (isHolder === void 0)
      isHolder = false;
    if (isStyledComponent === void 0)
      isStyledComponent = false;
    this.indent_5a7fkq$_0 = indent;
    this.allowClasses_b1jqk7$_0 = allowClasses;
    this.parent_v1zecc$_0 = parent;
    this.isHolder_et55gw$_0 = isHolder;
    this.isStyledComponent_ajdlma$_0 = isStyledComponent;
    this.classes_vbm8co$_0 = ArrayList_init();
    this.declarations_ykhz6b$_0 = new CssDeclarations();
    this.styleName_97z50u$_0 = ArrayList_init();
    this.memoizedHashCode_oma9nl$_0 = null;
    this.rules_g2usq1$_0 = ArrayList_init();
    this.multiRules_116og8$_0 = ArrayList_init();
  }
  Object.defineProperty(CssBuilderImpl.prototype, 'indent', {get: function () {
    return this.indent_5a7fkq$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'allowClasses', {get: function () {
    return this.allowClasses_b1jqk7$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'parent', {get: function () {
    return this.parent_v1zecc$_0;
  }, set: function (parent) {
    this.parent_v1zecc$_0 = parent;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'isHolder', {get: function () {
    return this.isHolder_et55gw$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'isStyledComponent', {get: function () {
    return this.isStyledComponent_ajdlma$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'classes', {configurable: true, get: function () {
    return this.classes_vbm8co$_0;
  }});
  CssBuilderImpl.prototype.unaryPlus_uoyjcc$ = function ($receiver) {
    $receiver(this);
  };
  Object.defineProperty(CssBuilderImpl.prototype, 'declarations', {configurable: true, get: function () {
    return this.declarations_ykhz6b$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'styleName', {configurable: true, get: function () {
    return this.styleName_97z50u$_0;
  }});
  CssBuilderImpl.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_s8jyv4$(this.declarations);
    this.buildRules_s47sd7$($receiver, this.indent);
    return $receiver.toString();
  };
  CssBuilderImpl.prototype.hashCode = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.memoizedHashCode_oma9nl$_0) != null)
      tmp$_0 = tmp$;
    else {
      var tmp$_1;
      var sum = 0;
      tmp$_1 = this.rules.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        sum = sum + element.hashCode() | 0;
      }
      var tmp$_2 = sum;
      var tmp$_3;
      var sum_0 = 0;
      tmp$_3 = this.multiRules.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        sum_0 = sum_0 + element_0.hashCode() | 0;
      }
      var $receiver = tmp$_2 + sum_0 + this.declarations.hashCode() | 0;
      this.memoizedHashCode_oma9nl$_0 = $receiver;
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  CssBuilderImpl.prototype.equals = function (other) {
    var calculateEquals$result;
    calculateEquals$break: do {
      var tmp$, tmp$_0;
      if (this === other) {
        calculateEquals$result = true;
        break calculateEquals$break;
      }
      if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null)) {
        calculateEquals$result = false;
        break calculateEquals$break;
      }
      Kotlin.isType(tmp$_0 = other, CssBuilderImpl) ? tmp$_0 : throwCCE();
      var tmp$_1 = hashCode(this) === hashCode(other);
      if (tmp$_1) {
        var tmp$_2;
        tmp$_1 = (equals(this.rules, other.rules) && equals(this.multiRules, other.multiRules) && ((tmp$_2 = this.declarations) != null ? tmp$_2.equals(other.declarations) : null));
      }
      calculateEquals$result = tmp$_1;
    }
     while (false);
    return calculateEquals$result;
  };
  Object.defineProperty(CssBuilderImpl.prototype, 'rules', {configurable: true, get: function () {
    return this.rules_g2usq1$_0;
  }});
  Object.defineProperty(CssBuilderImpl.prototype, 'multiRules', {configurable: true, get: function () {
    return this.multiRules_116og8$_0;
  }});
  CssBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssBuilderImpl', interfaces: [CssBuilder_0]};
  var CAPITAL_LETTER;
  function hyphenize$lambda(it) {
    return '-' + it.value.toLowerCase();
  }
  function hyphenize($receiver) {
    return CAPITAL_LETTER.replace_20wsma$($receiver, hyphenize$lambda);
  }
  function times($receiver, n) {
    return repeat($receiver, n);
  }
  function Rule(selector, css) {
    this.selector = selector;
    this.css = css;
    this.memoizedHashCode_0 = null;
  }
  Rule.prototype.hashCode = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.memoizedHashCode_0) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = hashCode(this.selector) + hashCode(this.css) | 0;
      this.memoizedHashCode_0 = $receiver;
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  Rule.prototype.equals = function (other) {
    var calculateEquals$result;
    calculateEquals$break: do {
      var tmp$, tmp$_0;
      if (this === other) {
        calculateEquals$result = true;
        break calculateEquals$break;
      }
      if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null)) {
        calculateEquals$result = false;
        break calculateEquals$break;
      }
      Kotlin.isType(tmp$_0 = other, Rule) ? tmp$_0 : throwCCE();
      var tmp$_1 = hashCode(this) === hashCode(other);
      if (tmp$_1) {
        tmp$_1 = (equals(this.selector, other.selector) && equals(this.css, other.css));
      }
      calculateEquals$result = tmp$_1;
    }
     while (false);
    return calculateEquals$result;
  };
  Rule.$metadata$ = {kind: Kind_CLASS, simpleName: 'Rule', interfaces: []};
  Rule.prototype.component1 = function () {
    return this.selector;
  };
  Rule.prototype.component2 = function () {
    return this.css;
  };
  Rule.prototype.copy_sjvxug$ = function (selector, css) {
    return new Rule(selector === void 0 ? this.selector : selector, css === void 0 ? this.css : css);
  };
  Rule.prototype.toString = function () {
    return 'Rule(selector=' + Kotlin.toString(this.selector) + (', css=' + Kotlin.toString(this.css)) + ')';
  };
  function RuleContainer() {
  }
  RuleContainer.prototype.buildRules_s47sd7$ = function ($receiver, indent) {
    var resolvedRules = this.resolveRules_ry1ed0$(this.rules, this.multiRules);
    var tmp$;
    tmp$ = resolvedRules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var value = element.selector + ' {';
      $receiver.append_pdl1vj$(value).append_s8itvh$(10);
      $receiver.append_s8jyv4$(element.css);
      $receiver.append_pdl1vj$('}').append_s8itvh$(10);
    }
  };
  RuleContainer.prototype.resolveRules_ry1ed0$ = function (rules, multiRules) {
    var resolvedRules = LinkedHashMap_init();
    var tmp$;
    tmp$ = rules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var foundRule = resolvedRules.get_11rb$(element.selector);
      if (foundRule == null) {
        var tmp$_0 = element.selector;
        var tmp$_1 = element.selector;
        var $receiver = CssBuilder();
        $receiver.append_5cyqpy$(element.css);
        var value = new Rule(tmp$_1, $receiver);
        resolvedRules.put_xwzc9p$(tmp$_0, value);
      } else {
        foundRule.css.append_5cyqpy$(element.css);
      }
    }
    return plus(multiRules, resolvedRules.values);
  };
  RuleContainer.prototype.rule_v44dnz$ = function (selector, block) {
    return this.rule_1q2hwx$(selector, false, void 0, block);
  };
  RuleContainer.prototype.rule_1q2hwx$$default = function (selector, passStaticClassesToParent, repeatable, block) {
    var $receiver = CssBuilder(this.indent + '  ', false, passStaticClassesToParent ? this : null);
    block($receiver);
    var css = $receiver;
    return this.rule_jindqg$(selector, passStaticClassesToParent, repeatable, css);
  };
  RuleContainer.prototype.rule_1q2hwx$ = function (selector, passStaticClassesToParent, repeatable, block, callback$default) {
    if (repeatable === void 0)
      repeatable = false;
    return callback$default ? callback$default(selector, passStaticClassesToParent, repeatable, block) : this.rule_1q2hwx$$default(selector, passStaticClassesToParent, repeatable, block);
  };
  RuleContainer.prototype.rule_jindqg$$default = function (selector, passStaticClassesToParent, repeatable, css) {
    var $receiver = new Rule(selector, css);
    css.parent = passStaticClassesToParent ? this : null;
    (repeatable ? this.multiRules : this.rules).add_11rb$($receiver);
    return $receiver;
  };
  RuleContainer.prototype.rule_jindqg$ = function (selector, passStaticClassesToParent, repeatable, css, callback$default) {
    if (repeatable === void 0)
      repeatable = false;
    return callback$default ? callback$default(selector, passStaticClassesToParent, repeatable, css) : this.rule_jindqg$$default(selector, passStaticClassesToParent, repeatable, css);
  };
  RuleContainer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RuleContainer', interfaces: []};
  var ZERO;
  function LinearDimension(value) {
    LinearDimension$Companion_getInstance();
    CssValue.call(this, value);
    this.value_nj4rtk$_0 = value;
  }
  Object.defineProperty(LinearDimension.prototype, 'value', {get: function () {
    return this.value_nj4rtk$_0;
  }});
  function LinearDimension$Companion() {
    LinearDimension$Companion_instance = this;
    this.none = new LinearDimension('none');
    this.auto = new LinearDimension('auto');
    this.initial = new LinearDimension('initial');
    this.inherit = new LinearDimension('inherit');
    this.available = new LinearDimension('available');
    this.fillAvailable = new LinearDimension('fill-available');
    this.borderBox = new LinearDimension('border-box');
    this.contentBox = new LinearDimension('content-box');
    this.maxContent = new LinearDimension('max-content');
    this.minContent = new LinearDimension('min-content');
    this.fitContent = new LinearDimension('fit-content');
  }
  LinearDimension$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var LinearDimension$Companion_instance = null;
  function LinearDimension$Companion_getInstance() {
    if (LinearDimension$Companion_instance === null) {
      new LinearDimension$Companion();
    }
    return LinearDimension$Companion_instance;
  }
  Object.defineProperty(LinearDimension.prototype, 'valueCalcSafe_75baly$_0', {configurable: true, get: function () {
    return equals(this.value, ZERO) ? '0px' : this.value;
  }});
  LinearDimension.prototype.unaryMinus = function () {
    var tmp$;
    if (startsWith(this.value, 45)) {
      tmp$ = this.value.substring(1);
    } else if (startsWith_0(this.value, 'calc'))
      tmp$ = 'calc(0px - ' + this.value + ')';
    else if (equals(this.value, ZERO))
      tmp$ = this.value;
    else
      tmp$ = '-' + this.value;
    return new LinearDimension(tmp$);
  };
  LinearDimension.prototype.plus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_75baly$_0 + ' + ' + other.valueCalcSafe_75baly$_0 + ')');
  };
  LinearDimension.prototype.minus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_75baly$_0 + ' - ' + other.valueCalcSafe_75baly$_0 + ')');
  };
  LinearDimension.prototype.times_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_75baly$_0 + ' * ' + times.toString() + ')');
  };
  LinearDimension.prototype.div_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_75baly$_0 + ' / ' + times.toString() + ')');
  };
  LinearDimension.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, LinearDimension) ? tmp$_0 : throwCCE();
    return equals(this.value, other.value);
  };
  LinearDimension.prototype.hashCode = function () {
    return hashCode(this.value);
  };
  LinearDimension.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinearDimension', interfaces: [CssValue]};
  function NumericLinearDimension(number, unit) {
    LinearDimension.call(this, equals(number, 0) ? ZERO : number.toString() + unit);
    this.number = number;
    this.unit = unit;
  }
  NumericLinearDimension.$metadata$ = {kind: Kind_CLASS, simpleName: 'NumericLinearDimension', interfaces: [LinearDimension]};
  function get_em($receiver) {
    return new NumericLinearDimension($receiver, 'em');
  }
  function get_pct($receiver) {
    return new NumericLinearDimension($receiver, '%');
  }
  function get_px($receiver) {
    return new NumericLinearDimension($receiver, 'px');
  }
  function CssValue(value) {
    this.value_tqttmh$_0 = value;
  }
  Object.defineProperty(CssValue.prototype, 'value', {get: function () {
    return this.value_tqttmh$_0;
  }});
  CssValue.prototype.toString = function () {
    return this.value;
  };
  CssValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssValue', interfaces: []};
  function Align(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Align_initFields() {
    Align_initFields = function () {
    };
    Align$initial_instance = new Align('initial', 0);
    Align$inherit_instance = new Align('inherit', 1);
    Align$unset_instance = new Align('unset', 2);
    Align$auto_instance = new Align('auto', 3);
    Align$stretch_instance = new Align('stretch', 4);
    Align$center_instance = new Align('center', 5);
    Align$start_instance = new Align('start', 6);
    Align$end_instance = new Align('end', 7);
    Align$selfStart_instance = new Align('selfStart', 8);
    Align$selfEnd_instance = new Align('selfEnd', 9);
    Align$flexStart_instance = new Align('flexStart', 10);
    Align$flexEnd_instance = new Align('flexEnd', 11);
    Align$baseline_instance = new Align('baseline', 12);
  }
  var Align$initial_instance;
  function Align$initial_getInstance() {
    Align_initFields();
    return Align$initial_instance;
  }
  var Align$inherit_instance;
  function Align$inherit_getInstance() {
    Align_initFields();
    return Align$inherit_instance;
  }
  var Align$unset_instance;
  function Align$unset_getInstance() {
    Align_initFields();
    return Align$unset_instance;
  }
  var Align$auto_instance;
  function Align$auto_getInstance() {
    Align_initFields();
    return Align$auto_instance;
  }
  var Align$stretch_instance;
  function Align$stretch_getInstance() {
    Align_initFields();
    return Align$stretch_instance;
  }
  var Align$center_instance;
  function Align$center_getInstance() {
    Align_initFields();
    return Align$center_instance;
  }
  var Align$start_instance;
  function Align$start_getInstance() {
    Align_initFields();
    return Align$start_instance;
  }
  var Align$end_instance;
  function Align$end_getInstance() {
    Align_initFields();
    return Align$end_instance;
  }
  var Align$selfStart_instance;
  function Align$selfStart_getInstance() {
    Align_initFields();
    return Align$selfStart_instance;
  }
  var Align$selfEnd_instance;
  function Align$selfEnd_getInstance() {
    Align_initFields();
    return Align$selfEnd_instance;
  }
  var Align$flexStart_instance;
  function Align$flexStart_getInstance() {
    Align_initFields();
    return Align$flexStart_instance;
  }
  var Align$flexEnd_instance;
  function Align$flexEnd_getInstance() {
    Align_initFields();
    return Align$flexEnd_instance;
  }
  var Align$baseline_instance;
  function Align$baseline_getInstance() {
    Align_initFields();
    return Align$baseline_instance;
  }
  Align.prototype.toString = function () {
    return hyphenize(this.name);
  };
  Align.$metadata$ = {kind: Kind_CLASS, simpleName: 'Align', interfaces: [Enum]};
  function Align$values() {
    return [Align$initial_getInstance(), Align$inherit_getInstance(), Align$unset_getInstance(), Align$auto_getInstance(), Align$stretch_getInstance(), Align$center_getInstance(), Align$start_getInstance(), Align$end_getInstance(), Align$selfStart_getInstance(), Align$selfEnd_getInstance(), Align$flexStart_getInstance(), Align$flexEnd_getInstance(), Align$baseline_getInstance()];
  }
  Align.values = Align$values;
  function Align$valueOf(name) {
    switch (name) {
      case 'initial':
        return Align$initial_getInstance();
      case 'inherit':
        return Align$inherit_getInstance();
      case 'unset':
        return Align$unset_getInstance();
      case 'auto':
        return Align$auto_getInstance();
      case 'stretch':
        return Align$stretch_getInstance();
      case 'center':
        return Align$center_getInstance();
      case 'start':
        return Align$start_getInstance();
      case 'end':
        return Align$end_getInstance();
      case 'selfStart':
        return Align$selfStart_getInstance();
      case 'selfEnd':
        return Align$selfEnd_getInstance();
      case 'flexStart':
        return Align$flexStart_getInstance();
      case 'flexEnd':
        return Align$flexEnd_getInstance();
      case 'baseline':
        return Align$baseline_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.Align.' + name);
    }
  }
  Align.valueOf_61zpoe$ = Align$valueOf;
  var Appearance$none_instance;
  var Appearance$auto_instance;
  var Appearance$menulistButton_instance;
  var Appearance$textfield_instance;
  var Appearance$button_instance;
  var Appearance$searchfield_instance;
  var Appearance$textarea_instance;
  var Appearance$pushButton_instance;
  var Appearance$sliderHorizontal_instance;
  var Appearance$checkbox_instance;
  var Appearance$radio_instance;
  var Appearance$squareButton_instance;
  var Appearance$menulist_instance;
  var Appearance$listbox_instance;
  var Appearance$meter_instance;
  var Appearance$progressBar_instance;
  var Isolation$initial_instance;
  var Isolation$inherit_instance;
  var Isolation$revert_instance;
  var Isolation$unset_instance;
  var Isolation$auto_instance;
  var Isolation$isolate_instance;
  function JustifyContent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function JustifyContent_initFields() {
    JustifyContent_initFields = function () {
    };
    JustifyContent$initial_instance = new JustifyContent('initial', 0);
    JustifyContent$inherit_instance = new JustifyContent('inherit', 1);
    JustifyContent$unset_instance = new JustifyContent('unset', 2);
    JustifyContent$center_instance = new JustifyContent('center', 3);
    JustifyContent$start_instance = new JustifyContent('start', 4);
    JustifyContent$end_instance = new JustifyContent('end', 5);
    JustifyContent$flexStart_instance = new JustifyContent('flexStart', 6);
    JustifyContent$flexEnd_instance = new JustifyContent('flexEnd', 7);
    JustifyContent$left_instance = new JustifyContent('left', 8);
    JustifyContent$right_instance = new JustifyContent('right', 9);
    JustifyContent$baseline_instance = new JustifyContent('baseline', 10);
    JustifyContent$firstBaseline_instance = new JustifyContent('firstBaseline', 11);
    JustifyContent$lastBaseline_instance = new JustifyContent('lastBaseline', 12);
    JustifyContent$spaceBetween_instance = new JustifyContent('spaceBetween', 13);
    JustifyContent$spaceAround_instance = new JustifyContent('spaceAround', 14);
    JustifyContent$spaceEvenly_instance = new JustifyContent('spaceEvenly', 15);
    JustifyContent$stretch_instance = new JustifyContent('stretch', 16);
    JustifyContent$safeCenter_instance = new JustifyContent('safeCenter', 17);
    JustifyContent$unsafeCenter_instance = new JustifyContent('unsafeCenter', 18);
  }
  var JustifyContent$initial_instance;
  function JustifyContent$initial_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$initial_instance;
  }
  var JustifyContent$inherit_instance;
  function JustifyContent$inherit_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$inherit_instance;
  }
  var JustifyContent$unset_instance;
  function JustifyContent$unset_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$unset_instance;
  }
  var JustifyContent$center_instance;
  function JustifyContent$center_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$center_instance;
  }
  var JustifyContent$start_instance;
  function JustifyContent$start_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$start_instance;
  }
  var JustifyContent$end_instance;
  function JustifyContent$end_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$end_instance;
  }
  var JustifyContent$flexStart_instance;
  function JustifyContent$flexStart_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$flexStart_instance;
  }
  var JustifyContent$flexEnd_instance;
  function JustifyContent$flexEnd_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$flexEnd_instance;
  }
  var JustifyContent$left_instance;
  function JustifyContent$left_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$left_instance;
  }
  var JustifyContent$right_instance;
  function JustifyContent$right_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$right_instance;
  }
  var JustifyContent$baseline_instance;
  function JustifyContent$baseline_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$baseline_instance;
  }
  var JustifyContent$firstBaseline_instance;
  function JustifyContent$firstBaseline_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$firstBaseline_instance;
  }
  var JustifyContent$lastBaseline_instance;
  function JustifyContent$lastBaseline_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$lastBaseline_instance;
  }
  var JustifyContent$spaceBetween_instance;
  function JustifyContent$spaceBetween_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceBetween_instance;
  }
  var JustifyContent$spaceAround_instance;
  function JustifyContent$spaceAround_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceAround_instance;
  }
  var JustifyContent$spaceEvenly_instance;
  function JustifyContent$spaceEvenly_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceEvenly_instance;
  }
  var JustifyContent$stretch_instance;
  function JustifyContent$stretch_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$stretch_instance;
  }
  var JustifyContent$safeCenter_instance;
  function JustifyContent$safeCenter_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$safeCenter_instance;
  }
  var JustifyContent$unsafeCenter_instance;
  function JustifyContent$unsafeCenter_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$unsafeCenter_instance;
  }
  JustifyContent.prototype.toString = function () {
    return hyphenize(this.name);
  };
  JustifyContent.$metadata$ = {kind: Kind_CLASS, simpleName: 'JustifyContent', interfaces: [Enum]};
  function JustifyContent$values() {
    return [JustifyContent$initial_getInstance(), JustifyContent$inherit_getInstance(), JustifyContent$unset_getInstance(), JustifyContent$center_getInstance(), JustifyContent$start_getInstance(), JustifyContent$end_getInstance(), JustifyContent$flexStart_getInstance(), JustifyContent$flexEnd_getInstance(), JustifyContent$left_getInstance(), JustifyContent$right_getInstance(), JustifyContent$baseline_getInstance(), JustifyContent$firstBaseline_getInstance(), JustifyContent$lastBaseline_getInstance(), JustifyContent$spaceBetween_getInstance(), JustifyContent$spaceAround_getInstance(), JustifyContent$spaceEvenly_getInstance(), JustifyContent$stretch_getInstance(), JustifyContent$safeCenter_getInstance(), JustifyContent$unsafeCenter_getInstance()];
  }
  JustifyContent.values = JustifyContent$values;
  function JustifyContent$valueOf(name) {
    switch (name) {
      case 'initial':
        return JustifyContent$initial_getInstance();
      case 'inherit':
        return JustifyContent$inherit_getInstance();
      case 'unset':
        return JustifyContent$unset_getInstance();
      case 'center':
        return JustifyContent$center_getInstance();
      case 'start':
        return JustifyContent$start_getInstance();
      case 'end':
        return JustifyContent$end_getInstance();
      case 'flexStart':
        return JustifyContent$flexStart_getInstance();
      case 'flexEnd':
        return JustifyContent$flexEnd_getInstance();
      case 'left':
        return JustifyContent$left_getInstance();
      case 'right':
        return JustifyContent$right_getInstance();
      case 'baseline':
        return JustifyContent$baseline_getInstance();
      case 'firstBaseline':
        return JustifyContent$firstBaseline_getInstance();
      case 'lastBaseline':
        return JustifyContent$lastBaseline_getInstance();
      case 'spaceBetween':
        return JustifyContent$spaceBetween_getInstance();
      case 'spaceAround':
        return JustifyContent$spaceAround_getInstance();
      case 'spaceEvenly':
        return JustifyContent$spaceEvenly_getInstance();
      case 'stretch':
        return JustifyContent$stretch_getInstance();
      case 'safeCenter':
        return JustifyContent$safeCenter_getInstance();
      case 'unsafeCenter':
        return JustifyContent$unsafeCenter_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.JustifyContent.' + name);
    }
  }
  JustifyContent.valueOf_61zpoe$ = JustifyContent$valueOf;
  var JustifyItems$initial_instance;
  var JustifyItems$inherit_instance;
  var JustifyItems$unset_instance;
  var JustifyItems$auto_instance;
  var JustifyItems$normal_instance;
  var JustifyItems$stretch_instance;
  var JustifyItems$center_instance;
  var JustifyItems$start_instance;
  var JustifyItems$end_instance;
  var JustifyItems$flexStart_instance;
  var JustifyItems$flexEnd_instance;
  var JustifyItems$selfStart_instance;
  var JustifyItems$selfEnd_instance;
  var JustifyItems$left_instance;
  var JustifyItems$right_instance;
  var JustifyItems$baseline_instance;
  function BackgroundRepeat(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BackgroundRepeat_initFields() {
    BackgroundRepeat_initFields = function () {
    };
    BackgroundRepeat$initial_instance = new BackgroundRepeat('initial', 0);
    BackgroundRepeat$inherit_instance = new BackgroundRepeat('inherit', 1);
    BackgroundRepeat$unset_instance = new BackgroundRepeat('unset', 2);
    BackgroundRepeat$repeatX_instance = new BackgroundRepeat('repeatX', 3);
    BackgroundRepeat$repeatY_instance = new BackgroundRepeat('repeatY', 4);
    BackgroundRepeat$repeat_instance = new BackgroundRepeat('repeat', 5);
    BackgroundRepeat$noRepeat_instance = new BackgroundRepeat('noRepeat', 6);
  }
  var BackgroundRepeat$initial_instance;
  function BackgroundRepeat$initial_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$initial_instance;
  }
  var BackgroundRepeat$inherit_instance;
  function BackgroundRepeat$inherit_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$inherit_instance;
  }
  var BackgroundRepeat$unset_instance;
  function BackgroundRepeat$unset_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$unset_instance;
  }
  var BackgroundRepeat$repeatX_instance;
  function BackgroundRepeat$repeatX_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$repeatX_instance;
  }
  var BackgroundRepeat$repeatY_instance;
  function BackgroundRepeat$repeatY_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$repeatY_instance;
  }
  var BackgroundRepeat$repeat_instance;
  function BackgroundRepeat$repeat_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$repeat_instance;
  }
  var BackgroundRepeat$noRepeat_instance;
  function BackgroundRepeat$noRepeat_getInstance() {
    BackgroundRepeat_initFields();
    return BackgroundRepeat$noRepeat_instance;
  }
  BackgroundRepeat.prototype.toString = function () {
    return hyphenize(this.name);
  };
  BackgroundRepeat.$metadata$ = {kind: Kind_CLASS, simpleName: 'BackgroundRepeat', interfaces: [Enum]};
  function BackgroundRepeat$values() {
    return [BackgroundRepeat$initial_getInstance(), BackgroundRepeat$inherit_getInstance(), BackgroundRepeat$unset_getInstance(), BackgroundRepeat$repeatX_getInstance(), BackgroundRepeat$repeatY_getInstance(), BackgroundRepeat$repeat_getInstance(), BackgroundRepeat$noRepeat_getInstance()];
  }
  BackgroundRepeat.values = BackgroundRepeat$values;
  function BackgroundRepeat$valueOf(name) {
    switch (name) {
      case 'initial':
        return BackgroundRepeat$initial_getInstance();
      case 'inherit':
        return BackgroundRepeat$inherit_getInstance();
      case 'unset':
        return BackgroundRepeat$unset_getInstance();
      case 'repeatX':
        return BackgroundRepeat$repeatX_getInstance();
      case 'repeatY':
        return BackgroundRepeat$repeatY_getInstance();
      case 'repeat':
        return BackgroundRepeat$repeat_getInstance();
      case 'noRepeat':
        return BackgroundRepeat$noRepeat_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.BackgroundRepeat.' + name);
    }
  }
  BackgroundRepeat.valueOf_61zpoe$ = BackgroundRepeat$valueOf;
  var BackgroundAttachment$initial_instance;
  var BackgroundAttachment$inherit_instance;
  var BackgroundAttachment$unset_instance;
  var BackgroundAttachment$scroll_instance;
  var BackgroundAttachment$fixed_instance;
  var BackgroundAttachment$local_instance;
  var BackgroundClip$initial_instance;
  var BackgroundClip$inherit_instance;
  var BackgroundClip$unset_instance;
  var BackgroundClip$borderBox_instance;
  var BackgroundClip$paddingBox_instance;
  var BackgroundClip$contentBox_instance;
  var BackgroundClip$text_instance;
  var BackgroundOrigin$initial_instance;
  var BackgroundOrigin$inherit_instance;
  var BackgroundOrigin$unset_instance;
  var BackgroundOrigin$borderBox_instance;
  var BackgroundOrigin$paddingBox_instance;
  var BackgroundOrigin$contentBox_instance;
  function BorderCollapse(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BorderCollapse_initFields() {
    BorderCollapse_initFields = function () {
    };
    BorderCollapse$initial_instance = new BorderCollapse('initial', 0);
    BorderCollapse$inherit_instance = new BorderCollapse('inherit', 1);
    BorderCollapse$unset_instance = new BorderCollapse('unset', 2);
    BorderCollapse$separate_instance = new BorderCollapse('separate', 3);
    BorderCollapse$collapse_instance = new BorderCollapse('collapse', 4);
  }
  var BorderCollapse$initial_instance;
  function BorderCollapse$initial_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$initial_instance;
  }
  var BorderCollapse$inherit_instance;
  function BorderCollapse$inherit_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$inherit_instance;
  }
  var BorderCollapse$unset_instance;
  function BorderCollapse$unset_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$unset_instance;
  }
  var BorderCollapse$separate_instance;
  function BorderCollapse$separate_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$separate_instance;
  }
  var BorderCollapse$collapse_instance;
  function BorderCollapse$collapse_getInstance() {
    BorderCollapse_initFields();
    return BorderCollapse$collapse_instance;
  }
  BorderCollapse.prototype.toString = function () {
    return this.name;
  };
  BorderCollapse.$metadata$ = {kind: Kind_CLASS, simpleName: 'BorderCollapse', interfaces: [Enum]};
  function BorderCollapse$values() {
    return [BorderCollapse$initial_getInstance(), BorderCollapse$inherit_getInstance(), BorderCollapse$unset_getInstance(), BorderCollapse$separate_getInstance(), BorderCollapse$collapse_getInstance()];
  }
  BorderCollapse.values = BorderCollapse$values;
  function BorderCollapse$valueOf(name) {
    switch (name) {
      case 'initial':
        return BorderCollapse$initial_getInstance();
      case 'inherit':
        return BorderCollapse$inherit_getInstance();
      case 'unset':
        return BorderCollapse$unset_getInstance();
      case 'separate':
        return BorderCollapse$separate_getInstance();
      case 'collapse':
        return BorderCollapse$collapse_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.BorderCollapse.' + name);
    }
  }
  BorderCollapse.valueOf_61zpoe$ = BorderCollapse$valueOf;
  var BorderStyle$initial_instance;
  var BorderStyle$inherit_instance;
  var BorderStyle$unset_instance;
  var BorderStyle$none_instance;
  var BorderStyle$dotted_instance;
  var BorderStyle$dashed_instance;
  var BorderStyle$solid_instance;
  var BoxSizing$initial_instance;
  var BoxSizing$inherit_instance;
  var BoxSizing$unset_instance;
  var BoxSizing$contentBox_instance;
  var BoxSizing$borderBox_instance;
  var Clear$initial_instance;
  var Clear$inherit_instance;
  var Clear$unset_instance;
  var Clear$none_instance;
  var Clear$left_instance;
  var Clear$right_instance;
  var Clear$both_instance;
  function Color(value) {
    Color$Companion_getInstance();
    CssValue.call(this, value);
    this.value_dt80hi$_0 = value;
    this.rgb_0 = null;
  }
  Object.defineProperty(Color.prototype, 'value', {get: function () {
    return this.value_dt80hi$_0;
  }});
  function Color$Companion() {
    Color$Companion_instance = this;
    this.initial = new Color('initial');
    this.inherit = new Color('inherit');
    this.unset = new Color('unset');
    this.transparent = new Color('transparent');
    this.currentColor = new Color('currentColor');
    this.aliceBlue = Color_init('aliceblue', '#f0f8ff');
    this.antiqueWhite = Color_init('antiquewhite', '#faebd7');
    this.aqua = Color_init('aqua', '#00ffff');
    this.aquamarine = Color_init('aquamarine', '#7fffd4');
    this.azure = Color_init('azure', '#f0ffff');
    this.beige = Color_init('beige', '#f5f5dc');
    this.bisque = Color_init('bisque', '#ffe4c4');
    this.black = Color_init('black', '#000000');
    this.blanchedAlmond = Color_init('blanchedalmond', '#ffebcd');
    this.blue = Color_init('blue', '#0000ff');
    this.blueViolet = Color_init('blueviolet', '#8a2be2');
    this.brown = Color_init('brown', '#a52a2a');
    this.burlyWood = Color_init('burlywood', '#deb887');
    this.cadetBlue = Color_init('cadetblue', '#5f9ea0');
    this.chartreuse = Color_init('chartreuse', '#7fff00');
    this.chocolate = Color_init('chocolate', '#d2691e');
    this.coral = Color_init('coral', '#ff7f50');
    this.cornflowerBlue = Color_init('cornflowerblue', '#6495ed');
    this.cornsilk = Color_init('cornsilk', '#fff8dc');
    this.crimson = Color_init('crimson', '#dc143c');
    this.cyan = Color_init('cyan', '#00ffff');
    this.darkBlue = Color_init('darkblue', '#00008b');
    this.darkCyan = Color_init('darkcyan', '#008b8b');
    this.darkGoldenrod = Color_init('darkgoldenrod', '#b8860b');
    this.darkGray = Color_init('darkgray', '#a9a9a9');
    this.darkGreen = Color_init('darkgreen', '#006400');
    this.darkGrey = Color_init('darkgrey', '#a9a9a9');
    this.darkKhaki = Color_init('darkkhaki', '#bdb76b');
    this.darkMagenta = Color_init('darkmagenta', '#8b008b');
    this.darkOliveGreen = Color_init('darkolivegreen', '#556b2f');
    this.darkOrange = Color_init('darkorange', '#ff8c00');
    this.darkOrchid = Color_init('darkorchid', '#9932cc');
    this.darkRed = Color_init('darkred', '#8b0000');
    this.darkSalmon = Color_init('darksalmon', '#e9967a');
    this.darkSeaGreen = Color_init('darkseagreen', '#8fbc8f');
    this.darkSlateBlue = Color_init('darkslateblue', '#483d8b');
    this.darkSlateGray = Color_init('darkslategray', '#2f4f4f');
    this.darkSlateGrey = Color_init('darkslategrey', '#2f4f4f');
    this.darkTurquoise = Color_init('darkturquoise', '#00ced1');
    this.darkViolet = Color_init('darkviolet', '#9400d3');
    this.deepPink = Color_init('deeppink', '#ff1493');
    this.deepSkyBlue = Color_init('deepskyblue', '#00bfff');
    this.dimGray = Color_init('dimgray', '#696969');
    this.dimGrey = Color_init('dimgrey', '#696969');
    this.dodgerBlue = Color_init('dodgerblue', '#1e90ff');
    this.firebrick = Color_init('firebrick', '#b22222');
    this.floralWhite = Color_init('floralwhite', '#fffaf0');
    this.forestGreen = Color_init('forestgreen', '#228b22');
    this.fuchsia = Color_init('fuchsia', '#ff00ff');
    this.gainsboro = Color_init('gainsboro', '#dcdcdc');
    this.ghostWhite = Color_init('ghostwhite', '#f8f8ff');
    this.gold = Color_init('gold', '#ffd700');
    this.goldenrod = Color_init('goldenrod', '#daa520');
    this.gray = Color_init('gray', '#808080');
    this.green = Color_init('green', '#008000');
    this.greenYellow = Color_init('greenyellow', '#adff2f');
    this.grey = Color_init('grey', '#808080');
    this.honeydew = Color_init('honeydew', '#f0fff0');
    this.hotPink = Color_init('hotpink', '#ff69b4');
    this.indianRed = Color_init('indianred', '#cd5c5c');
    this.indigo = Color_init('indigo', '#4b0082');
    this.ivory = Color_init('ivory', '#fffff0');
    this.khaki = Color_init('khaki', '#f0e68c');
    this.lavender = Color_init('lavender', '#e6e6fa');
    this.lavenderBlush = Color_init('lavenderblush', '#fff0f5');
    this.lawnGreen = Color_init('lawngreen', '#7cfc00');
    this.lemonChiffon = Color_init('lemonchiffon', '#fffacd');
    this.lightBlue = Color_init('lightblue', '#add8e6');
    this.lightCoral = Color_init('lightcoral', '#f08080');
    this.lightCyan = Color_init('lightcyan', '#e0ffff');
    this.lightGoldenrodYellow = Color_init('lightgoldenrodyellow', '#fafad2');
    this.lightGray = Color_init('lightgray', '#d3d3d3');
    this.lightGreen = Color_init('lightgreen', '#90ee90');
    this.lightGrey = Color_init('lightgrey', '#d3d3d3');
    this.lightPink = Color_init('lightpink', '#ffb6c1');
    this.lightSalmon = Color_init('lightsalmon', '#ffa07a');
    this.lightSeaGreen = Color_init('lightseagreen', '#20b2aa');
    this.lightSkyBlue = Color_init('lightskyblue', '#87cefa');
    this.lightSlateGray = Color_init('lightslategray', '#778899');
    this.lightSlateGrey = Color_init('lightslategrey', '#778899');
    this.lightSteelBlue = Color_init('lightsteelblue', '#b0c4de');
    this.lightYellow = Color_init('lightyellow', '#ffffe0');
    this.lime = Color_init('lime', '#00ff00');
    this.limeGreen = Color_init('limegreen', '#32cd32');
    this.linen = Color_init('linen', '#faf0e6');
    this.magenta = Color_init('magenta', '#ff00ff');
    this.maroon = Color_init('maroon', '#800000');
    this.mediumAquamarine = Color_init('mediumaquamarine', '#66cdaa');
    this.mediumBlue = Color_init('mediumblue', '#0000cd');
    this.mediumOrchid = Color_init('mediumorchid', '#ba55d3');
    this.mediumPurple = Color_init('mediumpurple', '#9370d8');
    this.mediumSeaGreen = Color_init('mediumseagreen', '#3cb371');
    this.mediumSlateBlue = Color_init('mediumslateblue', '#7b68ee');
    this.mediumSpringGreen = Color_init('mediumspringgreen', '#00fa9a');
    this.mediumTurquoise = Color_init('mediumturquoise', '#48d1cc');
    this.mediumVioletRed = Color_init('mediumvioletred', '#c71585');
    this.midnightBlue = Color_init('midnightblue', '#191970');
    this.mintCream = Color_init('mintcream', '#f5fffa');
    this.mistyRose = Color_init('mistyrose', '#ffe4e1');
    this.moccasin = Color_init('moccasin', '#ffe4b5');
    this.navajoWhite = Color_init('navajowhite', '#ffdead');
    this.navy = Color_init('navy', '#000080');
    this.oldLace = Color_init('oldlace', '#fdf5e6');
    this.olive = Color_init('olive', '#808000');
    this.oliveDrab = Color_init('olivedrab', '#6b8e23');
    this.orange = Color_init('orange', '#ffa500');
    this.orangeRed = Color_init('orangered', '#ff4500');
    this.orchid = Color_init('orchid', '#da70d6');
    this.paleGoldenrod = Color_init('palegoldenrod', '#eee8aa');
    this.paleGreen = Color_init('palegreen', '#98fb98');
    this.paleTurquoise = Color_init('paleturquoise', '#afeeee');
    this.paleVioletRed = Color_init('palevioletred', '#db7093');
    this.papayaWhip = Color_init('papayawhip', '#ffefd5');
    this.peachPuff = Color_init('peachpuff', '#ffdab9');
    this.peru = Color_init('peru', '#cd853f');
    this.pink = Color_init('pink', '#ffc0cb');
    this.plum = Color_init('plum', '#dda0dd');
    this.powderBlue = Color_init('powderblue', '#b0e0e6');
    this.purple = Color_init('purple', '#800080');
    this.red = Color_init('red', '#ff0000');
    this.rosyBrown = Color_init('rosybrown', '#bc8f8f');
    this.royalBlue = Color_init('royalblue', '#4169e1');
    this.saddleBrown = Color_init('saddlebrown', '#8b4513');
    this.salmon = Color_init('salmon', '#fa8072');
    this.sandyBrown = Color_init('sandybrown', '#f4a460');
    this.seaGreen = Color_init('seagreen', '#2e8b57');
    this.seaShell = Color_init('seashell', '#fff5ee');
    this.sienna = Color_init('sienna', '#a0522d');
    this.silver = Color_init('silver', '#c0c0c0');
    this.skyBlue = Color_init('skyblue', '#87ceeb');
    this.slateBlue = Color_init('slateblue', '#6a5acd');
    this.slateGray = Color_init('slategray', '#708090');
    this.slateGrey = Color_init('slategrey', '#708090');
    this.snow = Color_init('snow', '#fffafa');
    this.springGreen = Color_init('springgreen', '#00ff7f');
    this.steelBlue = Color_init('steelblue', '#4682b4');
    this.tan = Color_init('tan', '#d2b48c');
    this.teal = Color_init('teal', '#008080');
    this.thistle = Color_init('thistle', '#d8bfd8');
    this.tomato = Color_init('tomato', '#ff6347');
    this.turquoise = Color_init('turquoise', '#40e0d0');
    this.violet = Color_init('violet', '#ee82ee');
    this.wheat = Color_init('wheat', '#f5deb3');
    this.white = Color_init('white', '#ffffff');
    this.whiteSmoke = Color_init('whitesmoke', '#f5f5f5');
    this.yellow = Color_init('yellow', '#ffff00');
    this.yellowGreen = Color_init('yellowgreen', '#9acd32');
    this.HSLA_REGEX_vl7rxf$_0 = lazy(Color$Companion$HSLA_REGEX$lambda);
    this.RGBA_REGEX_1amhwv$_0 = lazy(Color$Companion$RGBA_REGEX$lambda);
  }
  Color$Companion.prototype.normalizeFractionalPercent_14dthe$ = function (value) {
    return coerceIn(value, 0.0, 1.0);
  };
  Color$Companion.prototype.normalizePercent_za3lpa$ = function (value) {
    return coerceIn_0(value, 0, 100);
  };
  Color$Companion.prototype.normalizeRGB_za3lpa$ = function (value) {
    return coerceIn_0(value, 0, 255);
  };
  Color$Companion.prototype.normalizeHue_14dthe$ = function (value) {
    return roundToInt((value % 360 + 360) % 360);
  };
  Color$Companion.prototype.normalizeAlpha_14dthe$ = function (value) {
    return this.normalizeFractionalPercent_14dthe$(value);
  };
  Object.defineProperty(Color$Companion.prototype, 'HSLA_REGEX_0', {configurable: true, get: function () {
    return this.HSLA_REGEX_vl7rxf$_0.value;
  }});
  Object.defineProperty(Color$Companion.prototype, 'RGBA_REGEX_0', {configurable: true, get: function () {
    return this.RGBA_REGEX_1amhwv$_0.value;
  }});
  function Color$Companion$HSLA_REGEX$lambda() {
    return Regex_init_0('^hsla?\\((-?[0-9]+\\.?[0-9]*(?:deg|grad|rad|turn)?)\\s*[, ]?\\s*(\\d{1,3})%\\s*[, ]\\s*(\\d{1,3})%\\s*[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$', RegexOption.IGNORE_CASE);
  }
  function Color$Companion$RGBA_REGEX$lambda() {
    return Regex_init_0('^rgba?\\((\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$', RegexOption.IGNORE_CASE);
  }
  Color$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color.prototype.withAlpha_14dthe$ = function (alpha) {
    if (startsWith_0(this.value, 'hsl', true)) {
      var $receiver = this.fromHSLANotation_8be2vx$();
      return hsla($receiver.hue, $receiver.saturation, $receiver.lightness, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha) * $receiver.alpha);
    } else {
      var $receiver_0 = this.toRGBA_8be2vx$();
      return rgba($receiver_0.red, $receiver_0.green, $receiver_0.blue, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha) * $receiver_0.alpha);
    }
  };
  Color.prototype.changeAlpha_14dthe$ = function (alpha) {
    if (startsWith_0(this.value, 'hsl', true)) {
      var $receiver = this.fromHSLANotation_8be2vx$();
      return hsla($receiver.hue, $receiver.saturation, $receiver.lightness, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha));
    } else {
      var $receiver_0 = this.toRGBA_8be2vx$();
      return rgba($receiver_0.red, $receiver_0.green, $receiver_0.blue, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha));
    }
  };
  Color.prototype.blend_uu3z0h$ = function (backgroundColor) {
    var source = this.toRGBA_8be2vx$();
    var background = backgroundColor.toRGBA_8be2vx$();
    var targetR = (1 - source.alpha) * background.red + source.alpha * source.red;
    var targetG = (1 - source.alpha) * background.green + source.alpha * source.green;
    var targetB = (1 - source.alpha) * background.blue + source.alpha * source.blue;
    return rgb(roundToInt(targetR), roundToInt(targetG), roundToInt(targetB));
  };
  Color.prototype.lighten_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var lightness = hsla_0.lightness + roundToInt(hsla_0.lightness * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(lightness));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.darken_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var darkness = hsla_0.lightness - roundToInt(hsla_0.lightness * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(darkness));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.saturate_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var saturation = hsla_0.saturation + roundToInt(hsla_0.saturation * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(saturation));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.desaturate_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var desaturation = hsla_0.saturation - roundToInt(hsla_0.saturation * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(desaturation));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  function Color$RGBA(red, green, blue, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  Color$RGBA.prototype.asHSLA = function () {
    var tmp$;
    var r = this.red / 255.0;
    var g = this.green / 255.0;
    var b = this.blue / 255.0;
    var cMax = JsMath.max(r, g, b);
    var cMin = JsMath.min(r, g, b);
    var chroma = cMax - cMin;
    var lg = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$((cMax + cMin) / 2);
    var tmp$_0;
    if (chroma !== 0.0) {
      var tmp$_1 = Color$Companion_getInstance();
      var x = 2.0 * lg - 1.0;
      tmp$_0 = tmp$_1.normalizeFractionalPercent_14dthe$(chroma / (1.0 - JsMath.abs(x)));
    } else
      tmp$_0 = 0.0;
    var s = tmp$_0;
    if (cMax === cMin)
      tmp$ = 0.0;
    else if (cMax === r)
      tmp$ = 60 * ((g - b) / chroma % 6.0);
    else if (cMax === g)
      tmp$ = 60 * ((b - r) / chroma + 2);
    else if (cMax === b)
      tmp$ = 60 * ((r - g) / chroma + 4);
    else {
      throw IllegalStateException_init('Unexpected value for max'.toString());
    }
    var h = tmp$;
    return new Color$HSLA(Color$Companion_getInstance().normalizeHue_14dthe$(h), roundToInt(s * 100), roundToInt(lg * 100), this.alpha);
  };
  Color$RGBA.$metadata$ = {kind: Kind_CLASS, simpleName: 'RGBA', interfaces: []};
  Color$RGBA.prototype.component1 = function () {
    return this.red;
  };
  Color$RGBA.prototype.component2 = function () {
    return this.green;
  };
  Color$RGBA.prototype.component3 = function () {
    return this.blue;
  };
  Color$RGBA.prototype.component4 = function () {
    return this.alpha;
  };
  Color$RGBA.prototype.copy_gb4hak$ = function (red, green, blue, alpha) {
    return new Color$RGBA(red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue, alpha === void 0 ? this.alpha : alpha);
  };
  Color$RGBA.prototype.toString = function () {
    return 'RGBA(red=' + Kotlin.toString(this.red) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  Color$RGBA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  Color$RGBA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function Color$HSLA(hue, saturation, lightness, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
  }
  function Color$HSLA$asRGBA$hueToRGB(m1, m2, h) {
    var tmp$;
    var hu = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    if (hu < 1.0 / 6)
      tmp$ = m1 + (m2 - m1) * 6 * hu;
    else if (hu < 1.0 / 2)
      tmp$ = m2;
    else if (hu < 2.0 / 3)
      tmp$ = m1 + (m2 - m1) * 6 * (2.0 / 3 - hu);
    else
      tmp$ = m1;
    return tmp$;
  }
  Color$HSLA.prototype.asRGBA = function () {
    var hueToRGB = Color$HSLA$asRGBA$hueToRGB;
    if (this.saturation === 0)
      return new Color$RGBA(this.lightness, this.lightness, this.lightness);
    var h = this.hue % 360.0 / 360.0;
    var s = this.saturation / 100.0;
    var lg = this.lightness / 100.0;
    var m2 = lg < 0.5 ? lg * (1 + s) : lg + s - lg * s;
    var m1 = 2 * lg - m2;
    var r = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(hueToRGB(m1, m2, h + 1.0 / 3));
    var g = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(hueToRGB(m1, m2, h));
    var b = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(hueToRGB(m1, m2, h - 1.0 / 3));
    return new Color$RGBA(roundToInt(r * 255), roundToInt(g * 255), roundToInt(b * 255), this.alpha);
  };
  Color$HSLA.$metadata$ = {kind: Kind_CLASS, simpleName: 'HSLA', interfaces: []};
  Color$HSLA.prototype.component1 = function () {
    return this.hue;
  };
  Color$HSLA.prototype.component2 = function () {
    return this.saturation;
  };
  Color$HSLA.prototype.component3 = function () {
    return this.lightness;
  };
  Color$HSLA.prototype.component4 = function () {
    return this.alpha;
  };
  Color$HSLA.prototype.copy_gb4hak$ = function (hue, saturation, lightness, alpha) {
    return new Color$HSLA(hue === void 0 ? this.hue : hue, saturation === void 0 ? this.saturation : saturation, lightness === void 0 ? this.lightness : lightness, alpha === void 0 ? this.alpha : alpha);
  };
  Color$HSLA.prototype.toString = function () {
    return 'HSLA(hue=' + Kotlin.toString(this.hue) + (', saturation=' + Kotlin.toString(this.saturation)) + (', lightness=' + Kotlin.toString(this.lightness)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  Color$HSLA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hue) | 0;
    result = result * 31 + Kotlin.hashCode(this.saturation) | 0;
    result = result * 31 + Kotlin.hashCode(this.lightness) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  Color$HSLA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hue, other.hue) && Kotlin.equals(this.saturation, other.saturation) && Kotlin.equals(this.lightness, other.lightness) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function Color$fromHSLANotation$getHSLParameter(closure$match, this$Color) {
    return function (index) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$match != null ? closure$match.groups : null) != null ? tmp$.get_za3lpa$(index) : null) != null ? tmp$_0.value : null;
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Expected hsl or hsla notation, got ' + this$Color.value);
      }
      return tmp$_1;
    };
  }
  Color.prototype.fromHSLANotation_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var match = Color$Companion_getInstance().HSLA_REGEX_0.find_905azu$(this.value);
    var getHSLParameter = Color$fromHSLANotation$getHSLParameter(match, this);
    var hueShape = getHSLParameter(1);
    if (endsWith(hueShape, 'grad', true))
      tmp$ = toDouble(substringBefore(hueShape, 'grad')) * (9.0 / 10);
    else if (endsWith(hueShape, 'rad', true))
      tmp$ = toDouble(substringBefore(hueShape, 'rad')) * 180 / math.PI;
    else if (endsWith(hueShape, 'turn', true))
      tmp$ = toDouble(substringBefore(hueShape, 'turn')) * 360.0;
    else if (endsWith(hueShape, 'deg', true))
      tmp$ = toDouble(substringBefore(hueShape, 'deg'));
    else
      tmp$ = toDouble(hueShape);
    var hue = Color$Companion_getInstance().normalizeHue_14dthe$(tmp$);
    var saturation = Color$Companion_getInstance().normalizePercent_za3lpa$(toInt(getHSLParameter(2)));
    var lightness = Color$Companion_getInstance().normalizePercent_za3lpa$(toInt(getHSLParameter(3)));
    tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = match != null ? match.groups : null) != null ? tmp$_0.get_za3lpa$(4) : null) != null ? tmp$_1.value : null) != null ? toDouble(tmp$_2) : null) != null ? tmp$_3 : 1.0;
    var alpha = Color$Companion_getInstance().normalizeAlpha_14dthe$(tmp$_4);
    return new Color$HSLA(hue, saturation, lightness, alpha);
  };
  function Color$fromRGBANotation$getRGBParameter(closure$match, this$Color) {
    return function (index) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$match != null ? closure$match.groups : null) != null ? tmp$.get_za3lpa$(index) : null) != null ? tmp$_0.value : null;
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Expected rgb or rgba notation, got ' + this$Color.value);
      }
      var group = tmp$_1;
      if (endsWith_0(group, 37))
        tmp$_2 = numberToInt(Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(toDouble(substringBefore_0(group, 37)) / 100.0) * 255.0);
      else
        tmp$_2 = Color$Companion_getInstance().normalizeRGB_za3lpa$(toInt(group));
      return tmp$_2;
    };
  }
  Color.prototype.fromRGBANotation_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var match = Color$Companion_getInstance().RGBA_REGEX_0.find_905azu$(this.value);
    var getRGBParameter = Color$fromRGBANotation$getRGBParameter(match, this);
    var red = getRGBParameter(1);
    var green = getRGBParameter(2);
    var blue = getRGBParameter(3);
    tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = match != null ? match.groups : null) != null ? tmp$.get_za3lpa$(4) : null) != null ? tmp$_0.value : null) != null ? toDouble(tmp$_1) : null) != null ? tmp$_2 : 1.0;
    var alpha = Color$Companion_getInstance().normalizeAlpha_14dthe$(tmp$_3);
    return new Color$RGBA(red, green, blue, alpha);
  };
  Color.prototype.toRGBA_8be2vx$ = function () {
    var tmp$, tmp$_0;
    var v = (tmp$ = this.rgb_0) != null ? tmp$ : this.value;
    if (startsWith_0(v, 'rgb'))
      tmp$_0 = this.fromRGBANotation_8be2vx$();
    else if (startsWith_0(v, '#') && v.length === 4)
      tmp$_0 = new Color$RGBA(toInt_0(times(String.fromCharCode(v.charCodeAt(1)), 2), 16), toInt_0(times(String.fromCharCode(v.charCodeAt(2)), 2), 16), toInt_0(times(String.fromCharCode(v.charCodeAt(3)), 2), 16));
    else if (startsWith_0(v, '#') && (v.length === 7 || v.length === 9))
      tmp$_0 = new Color$RGBA(toInt_0(substring(v, new IntRange(1, 2)), 16), toInt_0(substring(v, new IntRange(3, 4)), 16), toInt_0(substring(v, new IntRange(5, 6)), 16));
    else
      throw IllegalArgumentException_init('Only hexadecimal, rgb, and rgba notations are accepted, got ' + v);
    return tmp$_0;
  };
  Color.$metadata$ = {kind: Kind_CLASS, simpleName: 'Color', interfaces: [CssValue]};
  function Color_init(value, rgb, $this) {
    $this = $this || Object.create(Color.prototype);
    Color.call($this, value);
    $this.rgb_0 = rgb;
    return $this;
  }
  function rgb(red, green, blue) {
    return new Color('rgb(' + red + ', ' + green + ', ' + blue + ')');
  }
  function rgba(red, green, blue, alpha) {
    return new Color('rgba(' + red + ', ' + green + ', ' + blue + ', ' + formatAlpha(alpha) + ')');
  }
  function hsla(hue, saturation, lightness, alpha) {
    return new Color('hsla(' + hue + ', ' + saturation + '%, ' + lightness + '%, ' + formatAlpha(alpha) + ')');
  }
  function formatAlpha(alpha) {
    var it = alpha.toString();
    return contains(it, '.') ? it : it + '.0';
  }
  var Contain$initial_instance;
  var Contain$inherit_instance;
  var Contain$unset_instance;
  var Contain$none_instance;
  var Contain$strict_instance;
  var Contain$content_instance;
  var Contain$size_instance;
  var Contain$layout_instance;
  var Contain$style_instance;
  var Contain$paint_instance;
  var Cursor$initial_instance;
  var Cursor$inherit_instance;
  var Cursor$unset_instance;
  var Cursor$auto_instance;
  var Cursor$default_instance;
  var Cursor$none_instance;
  var Cursor$contextMenu_instance;
  var Cursor$help_instance;
  var Cursor$pointer_instance;
  var Cursor$progress_instance;
  var Cursor$wait_instance;
  var Cursor$cell_instance;
  var Cursor$crosshair_instance;
  var Cursor$text_instance;
  var Cursor$verticalText_instance;
  var Cursor$alias_instance;
  var Cursor$copy_instance;
  var Cursor$move_instance;
  var Cursor$noDrop_instance;
  var Cursor$notAllowed_instance;
  var Cursor$grab_instance;
  var Cursor$grabbing_instance;
  var Cursor$colResize_instance;
  var Cursor$rowResize_instance;
  var Cursor$allScroll_instance;
  var Cursor$eResize_instance;
  var Cursor$nResize_instance;
  var Cursor$neResize_instance;
  var Cursor$nwResize_instance;
  var Cursor$sResize_instance;
  var Cursor$seResize_instance;
  var Cursor$swResize_instance;
  var Cursor$wResize_instance;
  var Cursor$ewResize_instance;
  var Cursor$nsResize_instance;
  var Cursor$neswResize_instance;
  var Cursor$nwseResize_instance;
  var Cursor$zoomIn_instance;
  var Cursor$zoomOut_instance;
  function QuotedString(value) {
    CssValue.call(this, value);
    this.value_eybwfw$_0 = value;
  }
  Object.defineProperty(QuotedString.prototype, 'value', {get: function () {
    return this.value_eybwfw$_0;
  }});
  QuotedString.prototype.toString = function () {
    return "'" + this.value + "'";
  };
  QuotedString.$metadata$ = {kind: Kind_CLASS, simpleName: 'QuotedString', interfaces: [CssValue]};
  function get_quoted($receiver) {
    return new QuotedString($receiver);
  }
  var Direction$initial_instance;
  var Direction$inherit_instance;
  var Direction$unset_instance;
  var Direction$ltr_instance;
  var Direction$rtl_instance;
  function Display(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Display_initFields() {
    Display_initFields = function () {
    };
    Display$initial_instance = new Display('initial', 0);
    Display$inherit_instance = new Display('inherit', 1);
    Display$unset_instance = new Display('unset', 2);
    Display$block_instance = new Display('block', 3);
    Display$inline_instance = new Display('inline', 4);
    Display$runIn_instance = new Display('runIn', 5);
    Display$flow_instance = new Display('flow', 6);
    Display$flowRoot_instance = new Display('flowRoot', 7);
    Display$table_instance = new Display('table', 8);
    Display$flex_instance = new Display('flex', 9);
    Display$grid_instance = new Display('grid', 10);
    Display$subgrid_instance = new Display('subgrid', 11);
    Display$listItem_instance = new Display('listItem', 12);
    Display$tableRowGroup_instance = new Display('tableRowGroup', 13);
    Display$tableHeaderGroup_instance = new Display('tableHeaderGroup', 14);
    Display$tableFooterGroup_instance = new Display('tableFooterGroup', 15);
    Display$tableRow_instance = new Display('tableRow', 16);
    Display$tableCell_instance = new Display('tableCell', 17);
    Display$tableColumnGroup_instance = new Display('tableColumnGroup', 18);
    Display$tableColumn_instance = new Display('tableColumn', 19);
    Display$tableCaption_instance = new Display('tableCaption', 20);
    Display$contents_instance = new Display('contents', 21);
    Display$none_instance = new Display('none', 22);
    Display$inlineBlock_instance = new Display('inlineBlock', 23);
    Display$inlineListItem_instance = new Display('inlineListItem', 24);
    Display$inlineTable_instance = new Display('inlineTable', 25);
    Display$inlineFlex_instance = new Display('inlineFlex', 26);
    Display$inlineGrid_instance = new Display('inlineGrid', 27);
  }
  var Display$initial_instance;
  function Display$initial_getInstance() {
    Display_initFields();
    return Display$initial_instance;
  }
  var Display$inherit_instance;
  function Display$inherit_getInstance() {
    Display_initFields();
    return Display$inherit_instance;
  }
  var Display$unset_instance;
  function Display$unset_getInstance() {
    Display_initFields();
    return Display$unset_instance;
  }
  var Display$block_instance;
  function Display$block_getInstance() {
    Display_initFields();
    return Display$block_instance;
  }
  var Display$inline_instance;
  function Display$inline_getInstance() {
    Display_initFields();
    return Display$inline_instance;
  }
  var Display$runIn_instance;
  function Display$runIn_getInstance() {
    Display_initFields();
    return Display$runIn_instance;
  }
  var Display$flow_instance;
  function Display$flow_getInstance() {
    Display_initFields();
    return Display$flow_instance;
  }
  var Display$flowRoot_instance;
  function Display$flowRoot_getInstance() {
    Display_initFields();
    return Display$flowRoot_instance;
  }
  var Display$table_instance;
  function Display$table_getInstance() {
    Display_initFields();
    return Display$table_instance;
  }
  var Display$flex_instance;
  function Display$flex_getInstance() {
    Display_initFields();
    return Display$flex_instance;
  }
  var Display$grid_instance;
  function Display$grid_getInstance() {
    Display_initFields();
    return Display$grid_instance;
  }
  var Display$subgrid_instance;
  function Display$subgrid_getInstance() {
    Display_initFields();
    return Display$subgrid_instance;
  }
  var Display$listItem_instance;
  function Display$listItem_getInstance() {
    Display_initFields();
    return Display$listItem_instance;
  }
  var Display$tableRowGroup_instance;
  function Display$tableRowGroup_getInstance() {
    Display_initFields();
    return Display$tableRowGroup_instance;
  }
  var Display$tableHeaderGroup_instance;
  function Display$tableHeaderGroup_getInstance() {
    Display_initFields();
    return Display$tableHeaderGroup_instance;
  }
  var Display$tableFooterGroup_instance;
  function Display$tableFooterGroup_getInstance() {
    Display_initFields();
    return Display$tableFooterGroup_instance;
  }
  var Display$tableRow_instance;
  function Display$tableRow_getInstance() {
    Display_initFields();
    return Display$tableRow_instance;
  }
  var Display$tableCell_instance;
  function Display$tableCell_getInstance() {
    Display_initFields();
    return Display$tableCell_instance;
  }
  var Display$tableColumnGroup_instance;
  function Display$tableColumnGroup_getInstance() {
    Display_initFields();
    return Display$tableColumnGroup_instance;
  }
  var Display$tableColumn_instance;
  function Display$tableColumn_getInstance() {
    Display_initFields();
    return Display$tableColumn_instance;
  }
  var Display$tableCaption_instance;
  function Display$tableCaption_getInstance() {
    Display_initFields();
    return Display$tableCaption_instance;
  }
  var Display$contents_instance;
  function Display$contents_getInstance() {
    Display_initFields();
    return Display$contents_instance;
  }
  var Display$none_instance;
  function Display$none_getInstance() {
    Display_initFields();
    return Display$none_instance;
  }
  var Display$inlineBlock_instance;
  function Display$inlineBlock_getInstance() {
    Display_initFields();
    return Display$inlineBlock_instance;
  }
  var Display$inlineListItem_instance;
  function Display$inlineListItem_getInstance() {
    Display_initFields();
    return Display$inlineListItem_instance;
  }
  var Display$inlineTable_instance;
  function Display$inlineTable_getInstance() {
    Display_initFields();
    return Display$inlineTable_instance;
  }
  var Display$inlineFlex_instance;
  function Display$inlineFlex_getInstance() {
    Display_initFields();
    return Display$inlineFlex_instance;
  }
  var Display$inlineGrid_instance;
  function Display$inlineGrid_getInstance() {
    Display_initFields();
    return Display$inlineGrid_instance;
  }
  Display.prototype.toString = function () {
    return hyphenize(this.name);
  };
  Display.$metadata$ = {kind: Kind_CLASS, simpleName: 'Display', interfaces: [Enum]};
  function Display$values() {
    return [Display$initial_getInstance(), Display$inherit_getInstance(), Display$unset_getInstance(), Display$block_getInstance(), Display$inline_getInstance(), Display$runIn_getInstance(), Display$flow_getInstance(), Display$flowRoot_getInstance(), Display$table_getInstance(), Display$flex_getInstance(), Display$grid_getInstance(), Display$subgrid_getInstance(), Display$listItem_getInstance(), Display$tableRowGroup_getInstance(), Display$tableHeaderGroup_getInstance(), Display$tableFooterGroup_getInstance(), Display$tableRow_getInstance(), Display$tableCell_getInstance(), Display$tableColumnGroup_getInstance(), Display$tableColumn_getInstance(), Display$tableCaption_getInstance(), Display$contents_getInstance(), Display$none_getInstance(), Display$inlineBlock_getInstance(), Display$inlineListItem_getInstance(), Display$inlineTable_getInstance(), Display$inlineFlex_getInstance(), Display$inlineGrid_getInstance()];
  }
  Display.values = Display$values;
  function Display$valueOf(name) {
    switch (name) {
      case 'initial':
        return Display$initial_getInstance();
      case 'inherit':
        return Display$inherit_getInstance();
      case 'unset':
        return Display$unset_getInstance();
      case 'block':
        return Display$block_getInstance();
      case 'inline':
        return Display$inline_getInstance();
      case 'runIn':
        return Display$runIn_getInstance();
      case 'flow':
        return Display$flow_getInstance();
      case 'flowRoot':
        return Display$flowRoot_getInstance();
      case 'table':
        return Display$table_getInstance();
      case 'flex':
        return Display$flex_getInstance();
      case 'grid':
        return Display$grid_getInstance();
      case 'subgrid':
        return Display$subgrid_getInstance();
      case 'listItem':
        return Display$listItem_getInstance();
      case 'tableRowGroup':
        return Display$tableRowGroup_getInstance();
      case 'tableHeaderGroup':
        return Display$tableHeaderGroup_getInstance();
      case 'tableFooterGroup':
        return Display$tableFooterGroup_getInstance();
      case 'tableRow':
        return Display$tableRow_getInstance();
      case 'tableCell':
        return Display$tableCell_getInstance();
      case 'tableColumnGroup':
        return Display$tableColumnGroup_getInstance();
      case 'tableColumn':
        return Display$tableColumn_getInstance();
      case 'tableCaption':
        return Display$tableCaption_getInstance();
      case 'contents':
        return Display$contents_getInstance();
      case 'none':
        return Display$none_getInstance();
      case 'inlineBlock':
        return Display$inlineBlock_getInstance();
      case 'inlineListItem':
        return Display$inlineListItem_getInstance();
      case 'inlineTable':
        return Display$inlineTable_getInstance();
      case 'inlineFlex':
        return Display$inlineFlex_getInstance();
      case 'inlineGrid':
        return Display$inlineGrid_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.Display.' + name);
    }
  }
  Display.valueOf_61zpoe$ = Display$valueOf;
  var FlexBasis$Companion_instance = null;
  var FlexWrap$initial_instance;
  var FlexWrap$inherit_instance;
  var FlexWrap$unset_instance;
  var FlexWrap$nowrap_instance;
  var FlexWrap$wrap_instance;
  var FlexWrap$wrapReverse_instance;
  function Float(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Float_initFields() {
    Float_initFields = function () {
    };
    Float$initial_instance = new Float('initial', 0);
    Float$inherit_instance = new Float('inherit', 1);
    Float$unset_instance = new Float('unset', 2);
    Float$left_instance = new Float('left', 3);
    Float$right_instance = new Float('right', 4);
    Float$none_instance = new Float('none', 5);
  }
  var Float$initial_instance;
  function Float$initial_getInstance() {
    Float_initFields();
    return Float$initial_instance;
  }
  var Float$inherit_instance;
  function Float$inherit_getInstance() {
    Float_initFields();
    return Float$inherit_instance;
  }
  var Float$unset_instance;
  function Float$unset_getInstance() {
    Float_initFields();
    return Float$unset_instance;
  }
  var Float$left_instance;
  function Float$left_getInstance() {
    Float_initFields();
    return Float$left_instance;
  }
  var Float$right_instance;
  function Float$right_getInstance() {
    Float_initFields();
    return Float$right_instance;
  }
  var Float$none_instance;
  function Float$none_getInstance() {
    Float_initFields();
    return Float$none_instance;
  }
  Float.prototype.toString = function () {
    return hyphenize(this.name);
  };
  Float.$metadata$ = {kind: Kind_CLASS, simpleName: 'Float', interfaces: [Enum]};
  function Float$values() {
    return [Float$initial_getInstance(), Float$inherit_getInstance(), Float$unset_getInstance(), Float$left_getInstance(), Float$right_getInstance(), Float$none_getInstance()];
  }
  Float.values = Float$values;
  function Float$valueOf(name) {
    switch (name) {
      case 'initial':
        return Float$initial_getInstance();
      case 'inherit':
        return Float$inherit_getInstance();
      case 'unset':
        return Float$unset_getInstance();
      case 'left':
        return Float$left_getInstance();
      case 'right':
        return Float$right_getInstance();
      case 'none':
        return Float$none_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.Float.' + name);
    }
  }
  Float.valueOf_61zpoe$ = Float$valueOf;
  function FontWeight(value) {
    FontWeight$Companion_getInstance();
    CssValue.call(this, value);
    this.value_sy9x9q$_0 = value;
  }
  Object.defineProperty(FontWeight.prototype, 'value', {get: function () {
    return this.value_sy9x9q$_0;
  }});
  function FontWeight$Companion() {
    FontWeight$Companion_instance = this;
    this.initial = new FontWeight('initial');
    this.inherit = new FontWeight('inherit');
    this.unset = new FontWeight('unset');
    this.normal = new FontWeight('normal');
    this.bold = new FontWeight('bold');
    this.bolder = new FontWeight('bolder');
    this.lighter = new FontWeight('lighter');
    this.w900 = new FontWeight('900');
    this.w800 = new FontWeight('800');
    this.w700 = new FontWeight('700');
    this.w600 = new FontWeight('600');
    this.w500 = new FontWeight('500');
    this.w400 = new FontWeight('400');
    this.w300 = new FontWeight('300');
    this.w200 = new FontWeight('200');
    this.w100 = new FontWeight('100');
  }
  FontWeight$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var FontWeight$Companion_instance = null;
  function FontWeight$Companion_getInstance() {
    if (FontWeight$Companion_instance === null) {
      new FontWeight$Companion();
    }
    return FontWeight$Companion_instance;
  }
  FontWeight.$metadata$ = {kind: Kind_CLASS, simpleName: 'FontWeight', interfaces: [CssValue]};
  var FontStyle$Companion_instance = null;
  var FlexDirection$initial_instance;
  var FlexDirection$inherit_instance;
  var FlexDirection$unset_instance;
  var FlexDirection$column_instance;
  var FlexDirection$columnReverse_instance;
  var FlexDirection$row_instance;
  var FlexDirection$rowReverse_instance;
  var GridAutoColumns$Companion_instance = null;
  var GridAutoFlow$Companion_instance = null;
  var GridAutoRows$Companion_instance = null;
  var GridColumn$Companion_instance = null;
  var GridColumnEnd$Companion_instance = null;
  var GridColumnStart$Companion_instance = null;
  var GridRow$Companion_instance = null;
  var GridRowEnd$Companion_instance = null;
  var GridRowStart$Companion_instance = null;
  var GridTemplate$Companion_instance = null;
  var GridTemplateAreas$Companion_instance = null;
  var GridTemplateColumns$Companion_instance = null;
  var GridTemplateRows$Companion_instance = null;
  var Grow$NONE_instance;
  var Grow$GROW_instance;
  var Grow$SHRINK_instance;
  var Grow$GROW_SHRINK_instance;
  var Hyphens$initial_instance;
  var Hyphens$inherit_instance;
  var Hyphens$unset_instance;
  var Hyphens$none_instance;
  var Hyphens$manual_instance;
  var Hyphens$auto_instance;
  var ListStyleType$initial_instance;
  var ListStyleType$inherit_instance;
  var ListStyleType$unset_instance;
  var ListStyleType$none_instance;
  var ListStyleType$disc_instance;
  var ListStyleType$circle_instance;
  var ListStyleType$square_instance;
  var ListStyleType$decimal_instance;
  var ObjectFit$initial_instance;
  var ObjectFit$inherit_instance;
  var ObjectFit$unset_instance;
  var ObjectFit$contain_instance;
  var ObjectFit$cover_instance;
  var ObjectFit$fill_instance;
  var ObjectFit$none_instance;
  var ObjectFit$scaleDown_instance;
  var Outline$initial_instance;
  var Outline$inherit_instance;
  var Outline$unset_instance;
  var Outline$none_instance;
  function Overflow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Overflow_initFields() {
    Overflow_initFields = function () {
    };
    Overflow$initial_instance = new Overflow('initial', 0);
    Overflow$inherit_instance = new Overflow('inherit', 1);
    Overflow$unset_instance = new Overflow('unset', 2);
    Overflow$visible_instance = new Overflow('visible', 3);
    Overflow$hidden_instance = new Overflow('hidden', 4);
    Overflow$scroll_instance = new Overflow('scroll', 5);
    Overflow$auto_instance = new Overflow('auto', 6);
  }
  var Overflow$initial_instance;
  function Overflow$initial_getInstance() {
    Overflow_initFields();
    return Overflow$initial_instance;
  }
  var Overflow$inherit_instance;
  function Overflow$inherit_getInstance() {
    Overflow_initFields();
    return Overflow$inherit_instance;
  }
  var Overflow$unset_instance;
  function Overflow$unset_getInstance() {
    Overflow_initFields();
    return Overflow$unset_instance;
  }
  var Overflow$visible_instance;
  function Overflow$visible_getInstance() {
    Overflow_initFields();
    return Overflow$visible_instance;
  }
  var Overflow$hidden_instance;
  function Overflow$hidden_getInstance() {
    Overflow_initFields();
    return Overflow$hidden_instance;
  }
  var Overflow$scroll_instance;
  function Overflow$scroll_getInstance() {
    Overflow_initFields();
    return Overflow$scroll_instance;
  }
  var Overflow$auto_instance;
  function Overflow$auto_getInstance() {
    Overflow_initFields();
    return Overflow$auto_instance;
  }
  Overflow.prototype.toString = function () {
    return this.name;
  };
  Overflow.$metadata$ = {kind: Kind_CLASS, simpleName: 'Overflow', interfaces: [Enum]};
  function Overflow$values() {
    return [Overflow$initial_getInstance(), Overflow$inherit_getInstance(), Overflow$unset_getInstance(), Overflow$visible_getInstance(), Overflow$hidden_getInstance(), Overflow$scroll_getInstance(), Overflow$auto_getInstance()];
  }
  Overflow.values = Overflow$values;
  function Overflow$valueOf(name) {
    switch (name) {
      case 'initial':
        return Overflow$initial_getInstance();
      case 'inherit':
        return Overflow$inherit_getInstance();
      case 'unset':
        return Overflow$unset_getInstance();
      case 'visible':
        return Overflow$visible_getInstance();
      case 'hidden':
        return Overflow$hidden_getInstance();
      case 'scroll':
        return Overflow$scroll_getInstance();
      case 'auto':
        return Overflow$auto_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.Overflow.' + name);
    }
  }
  Overflow.valueOf_61zpoe$ = Overflow$valueOf;
  var OverflowWrap$initial_instance;
  var OverflowWrap$inherit_instance;
  var OverflowWrap$unset_instance;
  var OverflowWrap$normal_instance;
  var OverflowWrap$anywhere_instance;
  var OverflowWrap$breakWord_instance;
  var OverscrollBehavior$initial_instance;
  var OverscrollBehavior$inherit_instance;
  var OverscrollBehavior$unset_instance;
  var OverscrollBehavior$auto_instance;
  var OverscrollBehavior$contain_instance;
  var OverscrollBehavior$none_instance;
  var PointerEvents$initial_instance;
  var PointerEvents$inherit_instance;
  var PointerEvents$unset_instance;
  var PointerEvents$auto_instance;
  var PointerEvents$none_instance;
  function Position(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Position_initFields() {
    Position_initFields = function () {
    };
    Position$initial_instance = new Position('initial', 0);
    Position$inherit_instance = new Position('inherit', 1);
    Position$unset_instance = new Position('unset', 2);
    Position$static_instance = new Position('static', 3);
    Position$relative_instance = new Position('relative', 4);
    Position$absolute_instance = new Position('absolute', 5);
    Position$fixed_instance = new Position('fixed', 6);
    Position$sticky_instance = new Position('sticky', 7);
  }
  var Position$initial_instance;
  function Position$initial_getInstance() {
    Position_initFields();
    return Position$initial_instance;
  }
  var Position$inherit_instance;
  function Position$inherit_getInstance() {
    Position_initFields();
    return Position$inherit_instance;
  }
  var Position$unset_instance;
  function Position$unset_getInstance() {
    Position_initFields();
    return Position$unset_instance;
  }
  var Position$static_instance;
  function Position$static_getInstance() {
    Position_initFields();
    return Position$static_instance;
  }
  var Position$relative_instance;
  function Position$relative_getInstance() {
    Position_initFields();
    return Position$relative_instance;
  }
  var Position$absolute_instance;
  function Position$absolute_getInstance() {
    Position_initFields();
    return Position$absolute_instance;
  }
  var Position$fixed_instance;
  function Position$fixed_getInstance() {
    Position_initFields();
    return Position$fixed_instance;
  }
  var Position$sticky_instance;
  function Position$sticky_getInstance() {
    Position_initFields();
    return Position$sticky_instance;
  }
  Position.prototype.toString = function () {
    return this.name;
  };
  Position.$metadata$ = {kind: Kind_CLASS, simpleName: 'Position', interfaces: [Enum]};
  function Position$values() {
    return [Position$initial_getInstance(), Position$inherit_getInstance(), Position$unset_getInstance(), Position$static_getInstance(), Position$relative_getInstance(), Position$absolute_getInstance(), Position$fixed_getInstance(), Position$sticky_getInstance()];
  }
  Position.values = Position$values;
  function Position$valueOf(name) {
    switch (name) {
      case 'initial':
        return Position$initial_getInstance();
      case 'inherit':
        return Position$inherit_getInstance();
      case 'unset':
        return Position$unset_getInstance();
      case 'static':
        return Position$static_getInstance();
      case 'relative':
        return Position$relative_getInstance();
      case 'absolute':
        return Position$absolute_getInstance();
      case 'fixed':
        return Position$fixed_getInstance();
      case 'sticky':
        return Position$sticky_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.Position.' + name);
    }
  }
  Position.valueOf_61zpoe$ = Position$valueOf;
  var ScrollBehavior$initial_instance;
  var ScrollBehavior$inherit_instance;
  var ScrollBehavior$unset_instance;
  var ScrollBehavior$auto_instance;
  var ScrollBehavior$smooth_instance;
  function TextAlign(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextAlign_initFields() {
    TextAlign_initFields = function () {
    };
    TextAlign$initial_instance = new TextAlign('initial', 0);
    TextAlign$inherit_instance = new TextAlign('inherit', 1);
    TextAlign$unset_instance = new TextAlign('unset', 2);
    TextAlign$left_instance = new TextAlign('left', 3);
    TextAlign$right_instance = new TextAlign('right', 4);
    TextAlign$center_instance = new TextAlign('center', 5);
    TextAlign$justify_instance = new TextAlign('justify', 6);
    TextAlign$justifyAll_instance = new TextAlign('justifyAll', 7);
    TextAlign$start_instance = new TextAlign('start', 8);
    TextAlign$end_instance = new TextAlign('end', 9);
    TextAlign$matchParent_instance = new TextAlign('matchParent', 10);
  }
  var TextAlign$initial_instance;
  function TextAlign$initial_getInstance() {
    TextAlign_initFields();
    return TextAlign$initial_instance;
  }
  var TextAlign$inherit_instance;
  function TextAlign$inherit_getInstance() {
    TextAlign_initFields();
    return TextAlign$inherit_instance;
  }
  var TextAlign$unset_instance;
  function TextAlign$unset_getInstance() {
    TextAlign_initFields();
    return TextAlign$unset_instance;
  }
  var TextAlign$left_instance;
  function TextAlign$left_getInstance() {
    TextAlign_initFields();
    return TextAlign$left_instance;
  }
  var TextAlign$right_instance;
  function TextAlign$right_getInstance() {
    TextAlign_initFields();
    return TextAlign$right_instance;
  }
  var TextAlign$center_instance;
  function TextAlign$center_getInstance() {
    TextAlign_initFields();
    return TextAlign$center_instance;
  }
  var TextAlign$justify_instance;
  function TextAlign$justify_getInstance() {
    TextAlign_initFields();
    return TextAlign$justify_instance;
  }
  var TextAlign$justifyAll_instance;
  function TextAlign$justifyAll_getInstance() {
    TextAlign_initFields();
    return TextAlign$justifyAll_instance;
  }
  var TextAlign$start_instance;
  function TextAlign$start_getInstance() {
    TextAlign_initFields();
    return TextAlign$start_instance;
  }
  var TextAlign$end_instance;
  function TextAlign$end_getInstance() {
    TextAlign_initFields();
    return TextAlign$end_instance;
  }
  var TextAlign$matchParent_instance;
  function TextAlign$matchParent_getInstance() {
    TextAlign_initFields();
    return TextAlign$matchParent_instance;
  }
  TextAlign.prototype.toString = function () {
    return hyphenize(this.name);
  };
  TextAlign.$metadata$ = {kind: Kind_CLASS, simpleName: 'TextAlign', interfaces: [Enum]};
  function TextAlign$values() {
    return [TextAlign$initial_getInstance(), TextAlign$inherit_getInstance(), TextAlign$unset_getInstance(), TextAlign$left_getInstance(), TextAlign$right_getInstance(), TextAlign$center_getInstance(), TextAlign$justify_getInstance(), TextAlign$justifyAll_getInstance(), TextAlign$start_getInstance(), TextAlign$end_getInstance(), TextAlign$matchParent_getInstance()];
  }
  TextAlign.values = TextAlign$values;
  function TextAlign$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextAlign$initial_getInstance();
      case 'inherit':
        return TextAlign$inherit_getInstance();
      case 'unset':
        return TextAlign$unset_getInstance();
      case 'left':
        return TextAlign$left_getInstance();
      case 'right':
        return TextAlign$right_getInstance();
      case 'center':
        return TextAlign$center_getInstance();
      case 'justify':
        return TextAlign$justify_getInstance();
      case 'justifyAll':
        return TextAlign$justifyAll_getInstance();
      case 'start':
        return TextAlign$start_getInstance();
      case 'end':
        return TextAlign$end_getInstance();
      case 'matchParent':
        return TextAlign$matchParent_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.TextAlign.' + name);
    }
  }
  TextAlign.valueOf_61zpoe$ = TextAlign$valueOf;
  var TableLayout$initial_instance;
  var TableLayout$inherit_instance;
  var TableLayout$unset_instance;
  var TableLayout$auto_instance;
  var TableLayout$fixed_instance;
  function TextOverflow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextOverflow_initFields() {
    TextOverflow_initFields = function () {
    };
    TextOverflow$initial_instance = new TextOverflow('initial', 0);
    TextOverflow$inherit_instance = new TextOverflow('inherit', 1);
    TextOverflow$unset_instance = new TextOverflow('unset', 2);
    TextOverflow$clip_instance = new TextOverflow('clip', 3);
    TextOverflow$ellipsis_instance = new TextOverflow('ellipsis', 4);
  }
  var TextOverflow$initial_instance;
  function TextOverflow$initial_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$initial_instance;
  }
  var TextOverflow$inherit_instance;
  function TextOverflow$inherit_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$inherit_instance;
  }
  var TextOverflow$unset_instance;
  function TextOverflow$unset_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$unset_instance;
  }
  var TextOverflow$clip_instance;
  function TextOverflow$clip_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$clip_instance;
  }
  var TextOverflow$ellipsis_instance;
  function TextOverflow$ellipsis_getInstance() {
    TextOverflow_initFields();
    return TextOverflow$ellipsis_instance;
  }
  TextOverflow.prototype.toString = function () {
    return this.name;
  };
  TextOverflow.$metadata$ = {kind: Kind_CLASS, simpleName: 'TextOverflow', interfaces: [Enum]};
  function TextOverflow$values() {
    return [TextOverflow$initial_getInstance(), TextOverflow$inherit_getInstance(), TextOverflow$unset_getInstance(), TextOverflow$clip_getInstance(), TextOverflow$ellipsis_getInstance()];
  }
  TextOverflow.values = TextOverflow$values;
  function TextOverflow$valueOf(name) {
    switch (name) {
      case 'initial':
        return TextOverflow$initial_getInstance();
      case 'inherit':
        return TextOverflow$inherit_getInstance();
      case 'unset':
        return TextOverflow$unset_getInstance();
      case 'clip':
        return TextOverflow$clip_getInstance();
      case 'ellipsis':
        return TextOverflow$ellipsis_getInstance();
      default:
        throwISE('No enum constant kotlinx.css.TextOverflow.' + name);
    }
  }
  TextOverflow.valueOf_61zpoe$ = TextOverflow$valueOf;
  var TextTransform$initial_instance;
  var TextTransform$inherit_instance;
  var TextTransform$unset_instance;
  var TextTransform$capitalize_instance;
  var TextTransform$uppercase_instance;
  var TextTransform$lowercase_instance;
  var TextTransform$none_instance;
  var TextTransform$fullWidth_instance;
  var UserSelect$initial_instance;
  var UserSelect$inherit_instance;
  var UserSelect$unset_instance;
  var UserSelect$none_instance;
  var UserSelect$auto_instance;
  var UserSelect$text_instance;
  var UserSelect$contain_instance;
  var UserSelect$all_instance;
  function VerticalAlign(value) {
    VerticalAlign$Companion_getInstance();
    CssValue.call(this, value);
    this.value_lgzlm2$_0 = value;
  }
  Object.defineProperty(VerticalAlign.prototype, 'value', {get: function () {
    return this.value_lgzlm2$_0;
  }});
  function VerticalAlign$Companion() {
    VerticalAlign$Companion_instance = this;
    this.initial = new VerticalAlign('initial');
    this.inherit = new VerticalAlign('inherit');
    this.unset = new VerticalAlign('unset');
    this.baseline = new VerticalAlign('baseline');
    this.sub = new VerticalAlign('sub');
    this.super = new VerticalAlign('super');
    this.textTop = new VerticalAlign('text-top');
    this.textBottom = new VerticalAlign('text-bottom');
    this.middle = new VerticalAlign('middle');
    this.top = new VerticalAlign('top');
    this.bottom = new VerticalAlign('bottom');
  }
  VerticalAlign$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var VerticalAlign$Companion_instance = null;
  function VerticalAlign$Companion_getInstance() {
    if (VerticalAlign$Companion_instance === null) {
      new VerticalAlign$Companion();
    }
    return VerticalAlign$Companion_instance;
  }
  VerticalAlign.$metadata$ = {kind: Kind_CLASS, simpleName: 'VerticalAlign', interfaces: [CssValue]};
  var Visibility$initial_instance;
  var Visibility$inherit_instance;
  var Visibility$unset_instance;
  var Visibility$visible_instance;
  var Visibility$hidden_instance;
  var Visibility$collapse_instance;
  var WhiteSpace$initial_instance;
  var WhiteSpace$inherit_instance;
  var WhiteSpace$unset_instance;
  var WhiteSpace$normal_instance;
  var WhiteSpace$nowrap_instance;
  var WhiteSpace$pre_instance;
  var WhiteSpace$preWrap_instance;
  var WhiteSpace$preLine_instance;
  var WordBreak$initial_instance;
  var WordBreak$inherit_instance;
  var WordBreak$unset_instance;
  var WordBreak$normal_instance;
  var WordBreak$breakAll_instance;
  var WordBreak$breakWord_instance;
  var WordBreak$keepAll_instance;
  var WordWrap$initial_instance;
  var WordWrap$inherit_instance;
  var WordWrap$unset_instance;
  var WordWrap$normal_instance;
  var WordWrap$breakWord_instance;
  var Resize$none_instance;
  var Resize$both_instance;
  var Resize$horizontal_instance;
  var Resize$vertical_instance;
  var Resize$block_instance;
  var Resize$inline_instance;
  var Resize$inherit_instance;
  var Resize$initial_instance;
  var Resize$unset_instance;
  function Image(value) {
    Image$Companion_getInstance();
    CssValue.call(this, value);
    this.value_dr6e0y$_0 = value;
  }
  Object.defineProperty(Image.prototype, 'value', {get: function () {
    return this.value_dr6e0y$_0;
  }});
  function Image$Companion() {
    Image$Companion_instance = this;
    this.none = new Image('none');
  }
  Image$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Image$Companion_instance = null;
  function Image$Companion_getInstance() {
    if (Image$Companion_instance === null) {
      new Image$Companion();
    }
    return Image$Companion_instance;
  }
  Image.$metadata$ = {kind: Kind_CLASS, simpleName: 'Image', interfaces: [CssValue]};
  var RelativePosition$Companion_instance = null;
  function StyleList(delimiter) {
    this.delimiter_o62vis$_0 = delimiter;
    this.list_behuth$_0 = ArrayList_init();
  }
  StyleList.prototype.toString = function () {
    if (this.list_behuth$_0.isEmpty())
      return 'none';
    else
      return joinToString_0(this.list_behuth$_0, this.delimiter_o62vis$_0);
  };
  StyleList.prototype.clear = function () {
    this.list_behuth$_0.clear();
  };
  StyleList.prototype.plusAssign_11rb$ = function (item) {
    this.list_behuth$_0.add_11rb$(item);
  };
  StyleList.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyleList', interfaces: []};
  function CssDeclarations() {
    this.$delegate_a29c06$_0 = LinkedHashMap_init();
    this.stringDecl_9g0u2z$_0 = null;
  }
  Object.defineProperty(CssDeclarations.prototype, 'stringDecl_0', {configurable: true, get: function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.stringDecl_9g0u2z$_0) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = StringBuilder_init();
      var tmp$_1;
      tmp$_1 = this.entries.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var k = element.key;
        var v = element.value;
        $receiver.append_pdl1vj$(hyphenize(k) + ': ' + v.toString() + ';' + '\n');
      }
      var $receiver_0 = $receiver.toString();
      this.stringDecl_9g0u2z$_0 = $receiver_0;
      tmp$_0 = $receiver_0;
    }
    return tmp$_0;
  }, set: function (stringDecl) {
    this.stringDecl_9g0u2z$_0 = stringDecl;
  }});
  CssDeclarations.prototype.equals = function (other) {
    var calculateEquals$result;
    calculateEquals$break: do {
      var tmp$, tmp$_0;
      if (this === other) {
        calculateEquals$result = true;
        break calculateEquals$break;
      }
      if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null)) {
        calculateEquals$result = false;
        break calculateEquals$break;
      }
      Kotlin.isType(tmp$_0 = other, CssDeclarations) ? tmp$_0 : throwCCE();
      var tmp$_1 = hashCode(this) === hashCode(other);
      if (tmp$_1) {
        tmp$_1 = equals(this.stringDecl_0, other.stringDecl_0);
      }
      calculateEquals$result = tmp$_1;
    }
     while (false);
    return calculateEquals$result;
  };
  CssDeclarations.prototype.hashCode = function () {
    var $receiver = this.stringDecl_0;
    var tmp$;
    return (tmp$ = $receiver != null ? hashCode($receiver) : null) != null ? tmp$ : 0;
  };
  CssDeclarations.prototype.toString = function () {
    return ensureNotNull(this.stringDecl_0);
  };
  CssDeclarations.prototype.set_bm4g0d$ = function (name, value) {
    this.put_xwzc9p$(name, value);
    this.stringDecl_0 = null;
  };
  Object.defineProperty(CssDeclarations.prototype, 'entries', {configurable: true, get: function () {
    return this.$delegate_a29c06$_0.entries;
  }});
  Object.defineProperty(CssDeclarations.prototype, 'keys', {configurable: true, get: function () {
    return this.$delegate_a29c06$_0.keys;
  }});
  Object.defineProperty(CssDeclarations.prototype, 'size', {configurable: true, get: function () {
    return this.$delegate_a29c06$_0.size;
  }});
  Object.defineProperty(CssDeclarations.prototype, 'values', {configurable: true, get: function () {
    return this.$delegate_a29c06$_0.values;
  }});
  CssDeclarations.prototype.clear = function () {
    return this.$delegate_a29c06$_0.clear();
  };
  CssDeclarations.prototype.containsKey_11rb$ = function (key) {
    return this.$delegate_a29c06$_0.containsKey_11rb$(key);
  };
  CssDeclarations.prototype.containsValue_11rc$ = function (value) {
    return this.$delegate_a29c06$_0.containsValue_11rc$(value);
  };
  CssDeclarations.prototype.get_11rb$ = function (key) {
    return this.$delegate_a29c06$_0.get_11rb$(key);
  };
  CssDeclarations.prototype.isEmpty = function () {
    return this.$delegate_a29c06$_0.isEmpty();
  };
  CssDeclarations.prototype.put_xwzc9p$ = function (key, value) {
    return this.$delegate_a29c06$_0.put_xwzc9p$(key, value);
  };
  CssDeclarations.prototype.putAll_a2k3zr$ = function (from) {
    return this.$delegate_a29c06$_0.putAll_a2k3zr$(from);
  };
  CssDeclarations.prototype.remove_11rb$ = function (key) {
    return this.$delegate_a29c06$_0.remove_11rb$(key);
  };
  CssDeclarations.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssDeclarations', interfaces: [MutableMap]};
  function StyledElement() {
  }
  StyledElement.prototype.put_puj7f4$ = function (key, value) {
    this.declarations.set_bm4g0d$(key, value);
  };
  StyledElement.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledElement', interfaces: []};
  function StyledElementImpl() {
    this.declarations_xtyr2e$_0 = new CssDeclarations();
  }
  function CssProperty(default_0) {
    if (default_0 === void 0)
      default_0 = null;
    this.default_0 = default_0;
  }
  CssProperty.prototype.getValue_jto6o9$ = function (thisRef, property) {
    var tmp$, tmp$_0;
    if ((tmp$ = this.default_0) != null) {
      var tmp$_1;
      if (!thisRef.declarations.containsKey_11rb$(property.callableName)) {
        thisRef.declarations.set_bm4g0d$(property.callableName, Kotlin.isType(tmp$_1 = tmp$(), Any) ? tmp$_1 : throwCCE());
      }
    }
    return (tmp$_0 = thisRef.declarations.get_11rb$(property.callableName)) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  CssProperty.prototype.setValue_6qj5c4$ = function (thisRef, property, value) {
    var tmp$;
    thisRef.declarations.set_bm4g0d$(property.callableName, Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE());
  };
  CssProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssProperty', interfaces: []};
  var alignContent;
  var alignContent_metadata = new PropertyMetadata('alignContent');
  function set_alignContent($receiver, alignContent_0) {
    alignContent.setValue_6qj5c4$($receiver, alignContent_metadata, alignContent_0);
  }
  var alignItems;
  var alignItems_metadata = new PropertyMetadata('alignItems');
  function set_alignItems($receiver, alignItems_0) {
    alignItems.setValue_6qj5c4$($receiver, alignItems_metadata, alignItems_0);
  }
  var alignSelf;
  var alignSelf_metadata = new PropertyMetadata('alignSelf');
  function animation$lambda() {
    return new Animations();
  }
  var animation;
  var animation_metadata = new PropertyMetadata('animation');
  var animationDelay;
  var animationDelay_metadata = new PropertyMetadata('animationDelay');
  var animationDirection;
  var animationDirection_metadata = new PropertyMetadata('animationDirection');
  var animationDuration;
  var animationDuration_metadata = new PropertyMetadata('animationDuration');
  var animationFillMode;
  var animationFillMode_metadata = new PropertyMetadata('animationFillMode');
  var animationIterationCount;
  var animationIterationCount_metadata = new PropertyMetadata('animationIterationCount');
  var animationName;
  var animationName_metadata = new PropertyMetadata('animationName');
  var animationPlayState;
  var animationPlayState_metadata = new PropertyMetadata('animationPlayState');
  var animationTimingFunction;
  var animationTimingFunction_metadata = new PropertyMetadata('animationTimingFunction');
  var appearance;
  var appearance_metadata = new PropertyMetadata('appearance');
  var aspectRatio;
  var aspectRatio_metadata = new PropertyMetadata('aspectRatio');
  var backfaceVisibility;
  var backfaceVisibility_metadata = new PropertyMetadata('backfaceVisibility');
  var background;
  var background_metadata = new PropertyMetadata('background');
  function set_background($receiver, background_0) {
    background.setValue_6qj5c4$($receiver, background_metadata, background_0);
  }
  var backgroundAttachment;
  var backgroundAttachment_metadata = new PropertyMetadata('backgroundAttachment');
  var backgroundClip;
  var backgroundClip_metadata = new PropertyMetadata('backgroundClip');
  var backgroundColor;
  var backgroundColor_metadata = new PropertyMetadata('backgroundColor');
  function set_backgroundColor($receiver, backgroundColor_0) {
    backgroundColor.setValue_6qj5c4$($receiver, backgroundColor_metadata, backgroundColor_0);
  }
  var backgroundImage;
  var backgroundImage_metadata = new PropertyMetadata('backgroundImage');
  function set_backgroundImage($receiver, backgroundImage_0) {
    backgroundImage.setValue_6qj5c4$($receiver, backgroundImage_metadata, backgroundImage_0);
  }
  var backgroundOrigin;
  var backgroundOrigin_metadata = new PropertyMetadata('backgroundOrigin');
  var backgroundPosition;
  var backgroundPosition_metadata = new PropertyMetadata('backgroundPosition');
  function set_backgroundPosition($receiver, backgroundPosition_0) {
    backgroundPosition.setValue_6qj5c4$($receiver, backgroundPosition_metadata, backgroundPosition_0);
  }
  var backgroundRepeat;
  var backgroundRepeat_metadata = new PropertyMetadata('backgroundRepeat');
  function set_backgroundRepeat($receiver, backgroundRepeat_0) {
    backgroundRepeat.setValue_6qj5c4$($receiver, backgroundRepeat_metadata, backgroundRepeat_0);
  }
  var backgroundSize;
  var backgroundSize_metadata = new PropertyMetadata('backgroundSize');
  function set_backgroundSize($receiver, backgroundSize_0) {
    backgroundSize.setValue_6qj5c4$($receiver, backgroundSize_metadata, backgroundSize_0);
  }
  var border;
  var border_metadata = new PropertyMetadata('border');
  var borderTop;
  var borderTop_metadata = new PropertyMetadata('borderTop');
  var borderRight;
  var borderRight_metadata = new PropertyMetadata('borderRight');
  var borderBottom;
  var borderBottom_metadata = new PropertyMetadata('borderBottom');
  function set_borderBottom($receiver, borderBottom_0) {
    borderBottom.setValue_6qj5c4$($receiver, borderBottom_metadata, borderBottom_0);
  }
  var borderLeft;
  var borderLeft_metadata = new PropertyMetadata('borderLeft');
  var borderCollapse;
  var borderCollapse_metadata = new PropertyMetadata('borderCollapse');
  function set_borderCollapse($receiver, borderCollapse_0) {
    borderCollapse.setValue_6qj5c4$($receiver, borderCollapse_metadata, borderCollapse_0);
  }
  var borderSpacing;
  var borderSpacing_metadata = new PropertyMetadata('borderSpacing');
  var borderRadius;
  var borderRadius_metadata = new PropertyMetadata('borderRadius');
  var borderTopLeftRadius;
  var borderTopLeftRadius_metadata = new PropertyMetadata('borderTopLeftRadius');
  var borderTopRightRadius;
  var borderTopRightRadius_metadata = new PropertyMetadata('borderTopRightRadius');
  var borderBottomLeftRadius;
  var borderBottomLeftRadius_metadata = new PropertyMetadata('borderBottomLeftRadius');
  function set_borderBottomLeftRadius($receiver, borderBottomLeftRadius_0) {
    borderBottomLeftRadius.setValue_6qj5c4$($receiver, borderBottomLeftRadius_metadata, borderBottomLeftRadius_0);
  }
  var borderBottomRightRadius;
  var borderBottomRightRadius_metadata = new PropertyMetadata('borderBottomRightRadius');
  function set_borderBottomRightRadius($receiver, borderBottomRightRadius_0) {
    borderBottomRightRadius.setValue_6qj5c4$($receiver, borderBottomRightRadius_metadata, borderBottomRightRadius_0);
  }
  var borderStyle;
  var borderStyle_metadata = new PropertyMetadata('borderStyle');
  var borderTopStyle;
  var borderTopStyle_metadata = new PropertyMetadata('borderTopStyle');
  var borderRightStyle;
  var borderRightStyle_metadata = new PropertyMetadata('borderRightStyle');
  var borderBottomStyle;
  var borderBottomStyle_metadata = new PropertyMetadata('borderBottomStyle');
  var borderLeftStyle;
  var borderLeftStyle_metadata = new PropertyMetadata('borderLeftStyle');
  var borderWidth;
  var borderWidth_metadata = new PropertyMetadata('borderWidth');
  var borderTopWidth;
  var borderTopWidth_metadata = new PropertyMetadata('borderTopWidth');
  var borderRightWidth;
  var borderRightWidth_metadata = new PropertyMetadata('borderRightWidth');
  var borderBottomWidth;
  var borderBottomWidth_metadata = new PropertyMetadata('borderBottomWidth');
  var borderLeftWidth;
  var borderLeftWidth_metadata = new PropertyMetadata('borderLeftWidth');
  var borderColor;
  var borderColor_metadata = new PropertyMetadata('borderColor');
  var borderTopColor;
  var borderTopColor_metadata = new PropertyMetadata('borderTopColor');
  var borderRightColor;
  var borderRightColor_metadata = new PropertyMetadata('borderRightColor');
  var borderBottomColor;
  var borderBottomColor_metadata = new PropertyMetadata('borderBottomColor');
  var borderLeftColor;
  var borderLeftColor_metadata = new PropertyMetadata('borderLeftColor');
  var bottom;
  var bottom_metadata = new PropertyMetadata('bottom');
  function boxShadow$lambda() {
    return new BoxShadows();
  }
  var boxShadow;
  var boxShadow_metadata = new PropertyMetadata('boxShadow');
  var boxSizing;
  var boxSizing_metadata = new PropertyMetadata('boxSizing');
  var clear;
  var clear_metadata = new PropertyMetadata('clear');
  var color;
  var color_metadata = new PropertyMetadata('color');
  function set_color($receiver, color_0) {
    color.setValue_6qj5c4$($receiver, color_metadata, color_0);
  }
  var columnGap;
  var columnGap_metadata = new PropertyMetadata('columnGap');
  var contain;
  var contain_metadata = new PropertyMetadata('contain');
  var content;
  var content_metadata = new PropertyMetadata('content');
  function set_content($receiver, content_0) {
    content.setValue_6qj5c4$($receiver, content_metadata, content_0);
  }
  var cursor;
  var cursor_metadata = new PropertyMetadata('cursor');
  var direction;
  var direction_metadata = new PropertyMetadata('direction');
  var display;
  var display_metadata = new PropertyMetadata('display');
  function set_display($receiver, display_0) {
    display.setValue_6qj5c4$($receiver, display_metadata, display_0);
  }
  var filter;
  var filter_metadata = new PropertyMetadata('filter');
  var flexBasis;
  var flexBasis_metadata = new PropertyMetadata('flexBasis');
  var flexDirection;
  var flexDirection_metadata = new PropertyMetadata('flexDirection');
  var flexGrow;
  var flexGrow_metadata = new PropertyMetadata('flexGrow');
  var flexShrink;
  var flexShrink_metadata = new PropertyMetadata('flexShrink');
  var flexWrap;
  var flexWrap_metadata = new PropertyMetadata('flexWrap');
  var float;
  var float_metadata = new PropertyMetadata('float');
  function set_float($receiver, float_0) {
    float.setValue_6qj5c4$($receiver, float_metadata, float_0);
  }
  var fontFamily;
  var fontFamily_metadata = new PropertyMetadata('fontFamily');
  function set_fontFamily($receiver, fontFamily_0) {
    fontFamily.setValue_6qj5c4$($receiver, fontFamily_metadata, fontFamily_0);
  }
  var fontSize;
  var fontSize_metadata = new PropertyMetadata('fontSize');
  function set_fontSize($receiver, fontSize_0) {
    fontSize.setValue_6qj5c4$($receiver, fontSize_metadata, fontSize_0);
  }
  var fontSizeAdjust;
  var fontSizeAdjust_metadata = new PropertyMetadata('fontSizeAdjust');
  var fontStyle;
  var fontStyle_metadata = new PropertyMetadata('fontStyle');
  var fontWeight;
  var fontWeight_metadata = new PropertyMetadata('fontWeight');
  function set_fontWeight($receiver, fontWeight_0) {
    fontWeight.setValue_6qj5c4$($receiver, fontWeight_metadata, fontWeight_0);
  }
  var gap;
  var gap_metadata = new PropertyMetadata('gap');
  var gridAutoColumns;
  var gridAutoColumns_metadata = new PropertyMetadata('gridAutoColumns');
  var gridAutoFlow;
  var gridAutoFlow_metadata = new PropertyMetadata('gridAutoFlow');
  var gridAutoRows;
  var gridAutoRows_metadata = new PropertyMetadata('gridAutoRows');
  var gridColumn;
  var gridColumn_metadata = new PropertyMetadata('gridColumn');
  var gridColumnEnd;
  var gridColumnEnd_metadata = new PropertyMetadata('gridColumnEnd');
  var gridColumnStart;
  var gridColumnStart_metadata = new PropertyMetadata('gridColumnStart');
  var gridRow;
  var gridRow_metadata = new PropertyMetadata('gridRow');
  var gridRowEnd;
  var gridRowEnd_metadata = new PropertyMetadata('gridRowEnd');
  var gridRowStart;
  var gridRowStart_metadata = new PropertyMetadata('gridRowStart');
  var gridTemplate;
  var gridTemplate_metadata = new PropertyMetadata('gridTemplate');
  var gridTemplateAreas;
  var gridTemplateAreas_metadata = new PropertyMetadata('gridTemplateAreas');
  var gridTemplateColumns;
  var gridTemplateColumns_metadata = new PropertyMetadata('gridTemplateColumns');
  var gridTemplateRows;
  var gridTemplateRows_metadata = new PropertyMetadata('gridTemplateRows');
  var height;
  var height_metadata = new PropertyMetadata('height');
  function set_height($receiver, height_0) {
    height.setValue_6qj5c4$($receiver, height_metadata, height_0);
  }
  var hyphens;
  var hyphens_metadata = new PropertyMetadata('hyphens');
  var inset;
  var inset_metadata = new PropertyMetadata('inset');
  var isolation;
  var isolation_metadata = new PropertyMetadata('isolation');
  var justifyContent;
  var justifyContent_metadata = new PropertyMetadata('justifyContent');
  function set_justifyContent($receiver, justifyContent_0) {
    justifyContent.setValue_6qj5c4$($receiver, justifyContent_metadata, justifyContent_0);
  }
  var justifyItems;
  var justifyItems_metadata = new PropertyMetadata('justifyItems');
  var left;
  var left_metadata = new PropertyMetadata('left');
  function set_left($receiver, left_0) {
    left.setValue_6qj5c4$($receiver, left_metadata, left_0);
  }
  var letterSpacing;
  var letterSpacing_metadata = new PropertyMetadata('letterSpacing');
  function set_letterSpacing($receiver, letterSpacing_0) {
    letterSpacing.setValue_6qj5c4$($receiver, letterSpacing_metadata, letterSpacing_0);
  }
  var lineHeight;
  var lineHeight_metadata = new PropertyMetadata('lineHeight');
  function set_lineHeight($receiver, lineHeight_0) {
    lineHeight.setValue_6qj5c4$($receiver, lineHeight_metadata, lineHeight_0);
  }
  var listStyleType;
  var listStyleType_metadata = new PropertyMetadata('listStyleType');
  var margin;
  var margin_metadata = new PropertyMetadata('margin');
  var marginTop;
  var marginTop_metadata = new PropertyMetadata('marginTop');
  function set_marginTop($receiver, marginTop_0) {
    marginTop.setValue_6qj5c4$($receiver, marginTop_metadata, marginTop_0);
  }
  var marginRight;
  var marginRight_metadata = new PropertyMetadata('marginRight');
  function set_marginRight($receiver, marginRight_0) {
    marginRight.setValue_6qj5c4$($receiver, marginRight_metadata, marginRight_0);
  }
  var marginBottom;
  var marginBottom_metadata = new PropertyMetadata('marginBottom');
  function set_marginBottom($receiver, marginBottom_0) {
    marginBottom.setValue_6qj5c4$($receiver, marginBottom_metadata, marginBottom_0);
  }
  var marginLeft;
  var marginLeft_metadata = new PropertyMetadata('marginLeft');
  function set_marginLeft($receiver, marginLeft_0) {
    marginLeft.setValue_6qj5c4$($receiver, marginLeft_metadata, marginLeft_0);
  }
  var minWidth;
  var minWidth_metadata = new PropertyMetadata('minWidth');
  var maxWidth;
  var maxWidth_metadata = new PropertyMetadata('maxWidth');
  function set_maxWidth($receiver, maxWidth_0) {
    maxWidth.setValue_6qj5c4$($receiver, maxWidth_metadata, maxWidth_0);
  }
  var minHeight;
  var minHeight_metadata = new PropertyMetadata('minHeight');
  var maxHeight;
  var maxHeight_metadata = new PropertyMetadata('maxHeight');
  function set_maxHeight($receiver, maxHeight_0) {
    maxHeight.setValue_6qj5c4$($receiver, maxHeight_metadata, maxHeight_0);
  }
  var objectFit;
  var objectFit_metadata = new PropertyMetadata('objectFit');
  var objectPosition;
  var objectPosition_metadata = new PropertyMetadata('objectPosition');
  var opacity;
  var opacity_metadata = new PropertyMetadata('opacity');
  function set_opacity($receiver, opacity_0) {
    opacity.setValue_6qj5c4$($receiver, opacity_metadata, opacity_0);
  }
  var outline;
  var outline_metadata = new PropertyMetadata('outline');
  var outlineColor;
  var outlineColor_metadata = new PropertyMetadata('outlineColor');
  var outlineOffset;
  var outlineOffset_metadata = new PropertyMetadata('outlineOffset');
  var outlineWidth;
  var outlineWidth_metadata = new PropertyMetadata('outlineWidth');
  var overflow;
  var overflow_metadata = new PropertyMetadata('overflow');
  function set_overflow($receiver, overflow_0) {
    overflow.setValue_6qj5c4$($receiver, overflow_metadata, overflow_0);
  }
  var overflowX;
  var overflowX_metadata = new PropertyMetadata('overflowX');
  var overflowY;
  var overflowY_metadata = new PropertyMetadata('overflowY');
  var overflowWrap;
  var overflowWrap_metadata = new PropertyMetadata('overflowWrap');
  var overscrollBehavior;
  var overscrollBehavior_metadata = new PropertyMetadata('overscrollBehavior');
  var padding;
  var padding_metadata = new PropertyMetadata('padding');
  function set_padding($receiver, padding_0) {
    padding.setValue_6qj5c4$($receiver, padding_metadata, padding_0);
  }
  var paddingTop;
  var paddingTop_metadata = new PropertyMetadata('paddingTop');
  function set_paddingTop($receiver, paddingTop_0) {
    paddingTop.setValue_6qj5c4$($receiver, paddingTop_metadata, paddingTop_0);
  }
  var paddingRight;
  var paddingRight_metadata = new PropertyMetadata('paddingRight');
  function set_paddingRight($receiver, paddingRight_0) {
    paddingRight.setValue_6qj5c4$($receiver, paddingRight_metadata, paddingRight_0);
  }
  var paddingBottom;
  var paddingBottom_metadata = new PropertyMetadata('paddingBottom');
  function set_paddingBottom($receiver, paddingBottom_0) {
    paddingBottom.setValue_6qj5c4$($receiver, paddingBottom_metadata, paddingBottom_0);
  }
  var paddingLeft;
  var paddingLeft_metadata = new PropertyMetadata('paddingLeft');
  function set_paddingLeft($receiver, paddingLeft_0) {
    paddingLeft.setValue_6qj5c4$($receiver, paddingLeft_metadata, paddingLeft_0);
  }
  var pointerEvents;
  var pointerEvents_metadata = new PropertyMetadata('pointerEvents');
  var position;
  var position_metadata = new PropertyMetadata('position');
  function set_position($receiver, position_0) {
    position.setValue_6qj5c4$($receiver, position_metadata, position_0);
  }
  var resize;
  var resize_metadata = new PropertyMetadata('resize');
  var right;
  var right_metadata = new PropertyMetadata('right');
  var rowGap;
  var rowGap_metadata = new PropertyMetadata('rowGap');
  var scrollBehavior;
  var scrollBehavior_metadata = new PropertyMetadata('scrollBehavior');
  var src;
  var src_metadata = new PropertyMetadata('src');
  var tableLayout;
  var tableLayout_metadata = new PropertyMetadata('tableLayout');
  var textAlign;
  var textAlign_metadata = new PropertyMetadata('textAlign');
  function set_textAlign($receiver, textAlign_0) {
    textAlign.setValue_6qj5c4$($receiver, textAlign_metadata, textAlign_0);
  }
  var textDecoration;
  var textDecoration_metadata = new PropertyMetadata('textDecoration');
  function set_textDecoration($receiver, textDecoration_0) {
    textDecoration.setValue_6qj5c4$($receiver, textDecoration_metadata, textDecoration_0);
  }
  var textOverflow;
  var textOverflow_metadata = new PropertyMetadata('textOverflow');
  function set_textOverflow($receiver, textOverflow_0) {
    textOverflow.setValue_6qj5c4$($receiver, textOverflow_metadata, textOverflow_0);
  }
  var textTransform;
  var textTransform_metadata = new PropertyMetadata('textTransform');
  var top;
  var top_metadata = new PropertyMetadata('top');
  function set_top($receiver, top_0) {
    top.setValue_6qj5c4$($receiver, top_metadata, top_0);
  }
  function transform$lambda() {
    return new Transforms();
  }
  var transform;
  var transform_metadata = new PropertyMetadata('transform');
  function set_transform($receiver, transform_0) {
    transform.setValue_6qj5c4$($receiver, transform_metadata, transform_0);
  }
  function transition$lambda() {
    return new Transitions();
  }
  var transition;
  var transition_metadata = new PropertyMetadata('transition');
  var transitionDelay;
  var transitionDelay_metadata = new PropertyMetadata('transitionDelay');
  var transitionDuration;
  var transitionDuration_metadata = new PropertyMetadata('transitionDuration');
  var transitionProperty;
  var transitionProperty_metadata = new PropertyMetadata('transitionProperty');
  var transitionTimingFunction;
  var transitionTimingFunction_metadata = new PropertyMetadata('transitionTimingFunction');
  var userSelect;
  var userSelect_metadata = new PropertyMetadata('userSelect');
  var verticalAlign;
  var verticalAlign_metadata = new PropertyMetadata('verticalAlign');
  function set_verticalAlign($receiver, verticalAlign_0) {
    verticalAlign.setValue_6qj5c4$($receiver, verticalAlign_metadata, verticalAlign_0);
  }
  var visibility;
  var visibility_metadata = new PropertyMetadata('visibility');
  var whiteSpace;
  var whiteSpace_metadata = new PropertyMetadata('whiteSpace');
  var width;
  var width_metadata = new PropertyMetadata('width');
  function set_width($receiver, width_0) {
    width.setValue_6qj5c4$($receiver, width_metadata, width_0);
  }
  var wordBreak;
  var wordBreak_metadata = new PropertyMetadata('wordBreak');
  var wordSpacing;
  var wordSpacing_metadata = new PropertyMetadata('wordSpacing');
  var wordWrap;
  var wordWrap_metadata = new PropertyMetadata('wordWrap');
  var zIndex;
  var zIndex_metadata = new PropertyMetadata('zIndex');
  function set_zIndex($receiver, zIndex_0) {
    zIndex.setValue_6qj5c4$($receiver, zIndex_metadata, zIndex_0);
  }
  function getShorthandValue(top, right, bottom, left) {
    var tmp$;
    if (equals(top, bottom) && equals(right, left)) {
      if (equals(top, right)) {
        tmp$ = toString_0(top);
      } else {
        tmp$ = toString_0(top) + ' ' + toString_0(right);
      }
    } else {
      if (equals(right, left)) {
        tmp$ = toString_0(top) + ' ' + toString_0(right) + ' ' + toString_0(bottom);
      } else {
        tmp$ = toString_0(top) + ' ' + toString_0(right) + ' ' + toString_0(bottom) + ' ' + toString_0(left);
      }
    }
    return tmp$;
  }
  function padding_0($receiver, top, right, bottom, left) {
    if (top === void 0)
      top = null;
    if (right === void 0)
      right = null;
    if (bottom === void 0)
      bottom = null;
    if (left === void 0)
      left = null;
    if (top != null && right != null && bottom != null && left != null) {
      set_padding($receiver, getShorthandValue(top, right, bottom, left));
    } else {
      if (top != null) {
        set_paddingTop($receiver, top);
      }
      if (right != null) {
        set_paddingRight($receiver, right);
      }
      if (bottom != null) {
        set_paddingBottom($receiver, bottom);
      }
      if (left != null) {
        set_paddingLeft($receiver, left);
      }
    }
  }
  function padding_1($receiver, all) {
    padding_0($receiver, all, all, all, all);
  }
  function padding_2($receiver, vertical, horizontal) {
    if (vertical === void 0)
      vertical = null;
    if (horizontal === void 0)
      horizontal = null;
    padding_0($receiver, vertical, horizontal, vertical, horizontal);
  }
  function TagSelector(tagName) {
    this.tagName = tagName;
  }
  TagSelector.$metadata$ = {kind: Kind_CLASS, simpleName: 'TagSelector', interfaces: []};
  function TagSelectorFactory() {
    TagSelectorFactory_instance = this;
  }
  TagSelectorFactory.prototype.getValue_d6mtq7$ = function (thisRef, property) {
    return new TagSelector(property.callableName);
  };
  TagSelectorFactory.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TagSelectorFactory', interfaces: []};
  var TagSelectorFactory_instance = null;
  function TagSelectorFactory_getInstance() {
    if (TagSelectorFactory_instance === null) {
      new TagSelectorFactory();
    }
    return TagSelectorFactory_instance;
  }
  var html;
  var html_metadata = new PropertyMetadata('html');
  var base;
  var base_metadata = new PropertyMetadata('base');
  var head;
  var head_metadata = new PropertyMetadata('head');
  var link;
  var link_metadata = new PropertyMetadata('link');
  var meta;
  var meta_metadata = new PropertyMetadata('meta');
  var style;
  var style_metadata = new PropertyMetadata('style');
  var title;
  var title_metadata = new PropertyMetadata('title');
  var body;
  var body_metadata = new PropertyMetadata('body');
  var address;
  var address_metadata = new PropertyMetadata('address');
  var article;
  var article_metadata = new PropertyMetadata('article');
  var aside;
  var aside_metadata = new PropertyMetadata('aside');
  var footer;
  var footer_metadata = new PropertyMetadata('footer');
  var header;
  var header_metadata = new PropertyMetadata('header');
  var h1;
  var h1_metadata = new PropertyMetadata('h1');
  var h2;
  var h2_metadata = new PropertyMetadata('h2');
  var h3;
  var h3_metadata = new PropertyMetadata('h3');
  var h4;
  var h4_metadata = new PropertyMetadata('h4');
  var h5;
  var h5_metadata = new PropertyMetadata('h5');
  var h6;
  var h6_metadata = new PropertyMetadata('h6');
  var main;
  var main_metadata = new PropertyMetadata('main');
  var nav;
  var nav_metadata = new PropertyMetadata('nav');
  var section;
  var section_metadata = new PropertyMetadata('section');
  var blockquote;
  var blockquote_metadata = new PropertyMetadata('blockquote');
  var dd;
  var dd_metadata = new PropertyMetadata('dd');
  var div;
  var div_metadata = new PropertyMetadata('div');
  var dl;
  var dl_metadata = new PropertyMetadata('dl');
  var dt;
  var dt_metadata = new PropertyMetadata('dt');
  var figcaption;
  var figcaption_metadata = new PropertyMetadata('figcaption');
  var figure;
  var figure_metadata = new PropertyMetadata('figure');
  var hr;
  var hr_metadata = new PropertyMetadata('hr');
  var li;
  var li_metadata = new PropertyMetadata('li');
  var ol;
  var ol_metadata = new PropertyMetadata('ol');
  var p;
  var p_metadata = new PropertyMetadata('p');
  var pre;
  var pre_metadata = new PropertyMetadata('pre');
  var ul;
  var ul_metadata = new PropertyMetadata('ul');
  var a;
  var a_metadata = new PropertyMetadata('a');
  var abbr;
  var abbr_metadata = new PropertyMetadata('abbr');
  var b;
  var b_metadata = new PropertyMetadata('b');
  var bdi;
  var bdi_metadata = new PropertyMetadata('bdi');
  var bdo;
  var bdo_metadata = new PropertyMetadata('bdo');
  var br;
  var br_metadata = new PropertyMetadata('br');
  var cite;
  var cite_metadata = new PropertyMetadata('cite');
  var code;
  var code_metadata = new PropertyMetadata('code');
  var data;
  var data_metadata = new PropertyMetadata('data');
  var dfn;
  var dfn_metadata = new PropertyMetadata('dfn');
  var em;
  var em_metadata = new PropertyMetadata('em');
  var i;
  var i_metadata = new PropertyMetadata('i');
  var kbd;
  var kbd_metadata = new PropertyMetadata('kbd');
  var mark;
  var mark_metadata = new PropertyMetadata('mark');
  var q;
  var q_metadata = new PropertyMetadata('q');
  var rb;
  var rb_metadata = new PropertyMetadata('rb');
  var rp;
  var rp_metadata = new PropertyMetadata('rp');
  var rt;
  var rt_metadata = new PropertyMetadata('rt');
  var rtc;
  var rtc_metadata = new PropertyMetadata('rtc');
  var ruby;
  var ruby_metadata = new PropertyMetadata('ruby');
  var s;
  var s_metadata = new PropertyMetadata('s');
  function get_s() {
    return s.getValue_d6mtq7$(this, s_metadata);
  }
  var samp;
  var samp_metadata = new PropertyMetadata('samp');
  var small;
  var small_metadata = new PropertyMetadata('small');
  var span;
  var span_metadata = new PropertyMetadata('span');
  var strong;
  var strong_metadata = new PropertyMetadata('strong');
  var sub;
  var sub_metadata = new PropertyMetadata('sub');
  var sup;
  var sup_metadata = new PropertyMetadata('sup');
  var time;
  var time_metadata = new PropertyMetadata('time');
  var u;
  var u_metadata = new PropertyMetadata('u');
  var wbr;
  var wbr_metadata = new PropertyMetadata('wbr');
  var area;
  var area_metadata = new PropertyMetadata('area');
  var audio;
  var audio_metadata = new PropertyMetadata('audio');
  var img;
  var img_metadata = new PropertyMetadata('img');
  var map;
  var map_metadata = new PropertyMetadata('map');
  var track;
  var track_metadata = new PropertyMetadata('track');
  var video;
  var video_metadata = new PropertyMetadata('video');
  var embed;
  var embed_metadata = new PropertyMetadata('embed');
  var iframe;
  var iframe_metadata = new PropertyMetadata('iframe');
  var param;
  var param_metadata = new PropertyMetadata('param');
  var picture;
  var picture_metadata = new PropertyMetadata('picture');
  var portal;
  var portal_metadata = new PropertyMetadata('portal');
  var source;
  var source_metadata = new PropertyMetadata('source');
  var svg;
  var svg_metadata = new PropertyMetadata('svg');
  var math_0;
  var math_metadata = new PropertyMetadata('math');
  var canvas;
  var canvas_metadata = new PropertyMetadata('canvas');
  var noscript;
  var noscript_metadata = new PropertyMetadata('noscript');
  var script;
  var script_metadata = new PropertyMetadata('script');
  var del;
  var del_metadata = new PropertyMetadata('del');
  var ins;
  var ins_metadata = new PropertyMetadata('ins');
  var caption;
  var caption_metadata = new PropertyMetadata('caption');
  var col;
  var col_metadata = new PropertyMetadata('col');
  var colgroup;
  var colgroup_metadata = new PropertyMetadata('colgroup');
  var table;
  var table_metadata = new PropertyMetadata('table');
  var tbody;
  var tbody_metadata = new PropertyMetadata('tbody');
  var td;
  var td_metadata = new PropertyMetadata('td');
  var tfoot;
  var tfoot_metadata = new PropertyMetadata('tfoot');
  var th;
  var th_metadata = new PropertyMetadata('th');
  var thead;
  var thead_metadata = new PropertyMetadata('thead');
  var tr;
  var tr_metadata = new PropertyMetadata('tr');
  var button;
  var button_metadata = new PropertyMetadata('button');
  var datalist;
  var datalist_metadata = new PropertyMetadata('datalist');
  var fieldset;
  var fieldset_metadata = new PropertyMetadata('fieldset');
  var form;
  var form_metadata = new PropertyMetadata('form');
  var input;
  var input_metadata = new PropertyMetadata('input');
  var label;
  var label_metadata = new PropertyMetadata('label');
  var legend;
  var legend_metadata = new PropertyMetadata('legend');
  var meter;
  var meter_metadata = new PropertyMetadata('meter');
  var optgroup;
  var optgroup_metadata = new PropertyMetadata('optgroup');
  var option;
  var option_metadata = new PropertyMetadata('option');
  var output;
  var output_metadata = new PropertyMetadata('output');
  var progress;
  var progress_metadata = new PropertyMetadata('progress');
  var select;
  var select_metadata = new PropertyMetadata('select');
  var textarea;
  var textarea_metadata = new PropertyMetadata('textarea');
  var details;
  var details_metadata = new PropertyMetadata('details');
  var dialog;
  var dialog_metadata = new PropertyMetadata('dialog');
  var menu;
  var menu_metadata = new PropertyMetadata('menu');
  var summary;
  var summary_metadata = new PropertyMetadata('summary');
  var slot;
  var slot_metadata = new PropertyMetadata('slot');
  var template;
  var template_metadata = new PropertyMetadata('template');
  var IterationCount$Companion_instance = null;
  var AnimationDirection$initial_instance;
  var AnimationDirection$inherit_instance;
  var AnimationDirection$unset_instance;
  var AnimationDirection$normal_instance;
  var AnimationDirection$reverse_instance;
  var AnimationDirection$alternate_instance;
  var AnimationDirection$alternateReverse_instance;
  var FillMode$initial_instance;
  var FillMode$inherit_instance;
  var FillMode$unset_instance;
  var FillMode$none_instance;
  var FillMode$forwards_instance;
  var FillMode$backwards_instance;
  var FillMode$both_instance;
  var PlayState$initial_instance;
  var PlayState$inherit_instance;
  var PlayState$unset_instance;
  var PlayState$running_instance;
  var PlayState$paused_instance;
  function Animations() {
    Animations$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Animations$Companion() {
    Animations$Companion_instance = this;
    this.none = new Animations();
  }
  Animations$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Animations$Companion_instance = null;
  function Animations$Companion_getInstance() {
    if (Animations$Companion_instance === null) {
      new Animations$Companion();
    }
    return Animations$Companion_instance;
  }
  Animations.$metadata$ = {kind: Kind_CLASS, simpleName: 'Animations', interfaces: [StyleList]};
  var AspectRatio$Companion_instance = null;
  function BoxShadows() {
    BoxShadows$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function BoxShadows$Companion() {
    BoxShadows$Companion_instance = this;
    this.none = new BoxShadows();
  }
  BoxShadows$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var BoxShadows$Companion_instance = null;
  function BoxShadows$Companion_getInstance() {
    if (BoxShadows$Companion_instance === null) {
      new BoxShadows$Companion();
    }
    return BoxShadows$Companion_instance;
  }
  BoxShadows.$metadata$ = {kind: Kind_CLASS, simpleName: 'BoxShadows', interfaces: [StyleList]};
  var GradientSideOrCorner$ToLeft_instance;
  var GradientSideOrCorner$ToLeftTop_instance;
  var GradientSideOrCorner$ToLeftBottom_instance;
  var GradientSideOrCorner$ToRight_instance;
  var GradientSideOrCorner$ToRightTop_instance;
  var GradientSideOrCorner$ToRightBottom_instance;
  var GradientSideOrCorner$ToTop_instance;
  var GradientSideOrCorner$ToBottom_instance;
  var RadialGradientExtent$closestCorner_instance;
  var RadialGradientExtent$closestSide_instance;
  var RadialGradientExtent$farthestCorner_instance;
  var RadialGradientExtent$farthestSide_instance;
  function KeyframesBuilder() {
  }
  function KeyframesBuilderImpl(indent) {
    if (indent === void 0)
      indent = '';
    this.indent_lo30wh$_0 = indent;
    this.rules_5hpu3i$_0 = ArrayList_init();
    this.multiRules_76a4m5$_0 = ArrayList_init();
    this.memoizedHashCode_0 = null;
  }
  function LineHeight(value) {
    LineHeight$Companion_getInstance();
    CssValue.call(this, value);
    this.value_p94ztv$_0 = value;
  }
  Object.defineProperty(LineHeight.prototype, 'value', {get: function () {
    return this.value_p94ztv$_0;
  }});
  function LineHeight$Companion() {
    LineHeight$Companion_instance = this;
    this.normal = new LineHeight('normal');
    this.initial = new LineHeight('initial');
    this.inherit = new LineHeight('inherit');
  }
  LineHeight$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var LineHeight$Companion_instance = null;
  function LineHeight$Companion_getInstance() {
    if (LineHeight$Companion_instance === null) {
      new LineHeight$Companion();
    }
    return LineHeight$Companion_instance;
  }
  LineHeight.$metadata$ = {kind: Kind_CLASS, simpleName: 'LineHeight', interfaces: [CssValue]};
  var TextDecorationLine$initial_instance;
  var TextDecorationLine$inherit_instance;
  var TextDecorationLine$unset_instance;
  var TextDecorationLine$underline_instance;
  var TextDecorationLine$overline_instance;
  var TextDecorationLine$lineThrough_instance;
  function TextDecoration(lines, style, color) {
    TextDecoration$Companion_getInstance();
    if (style === void 0)
      style = null;
    if (color === void 0)
      color = null;
    this.lines_0 = lines;
    this.style = style;
    this.color = color;
  }
  function TextDecoration$Companion() {
    TextDecoration$Companion_instance = this;
    this.none = new TextDecoration(emptySet());
  }
  TextDecoration$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var TextDecoration$Companion_instance = null;
  function TextDecoration$Companion_getInstance() {
    if (TextDecoration$Companion_instance === null) {
      new TextDecoration$Companion();
    }
    return TextDecoration$Companion_instance;
  }
  TextDecoration.prototype.toString = function () {
    if (this.lines_0.isEmpty())
      return 'none';
    else {
      var $receiver = StringBuilder_init();
      var tmp$, tmp$_0;
      $receiver.append_pdl1vj$(joinToString_0(this.lines_0, ' '));
      if ((tmp$ = this.style) != null) {
        $receiver.append_pdl1vj$(' ' + tmp$);
      }
      if ((tmp$_0 = this.color) != null) {
        $receiver.append_pdl1vj$(' ' + tmp$_0);
      }
      return $receiver.toString();
    }
  };
  TextDecoration.$metadata$ = {kind: Kind_CLASS, simpleName: 'TextDecoration', interfaces: []};
  var TextDecorationStyle$initial_instance;
  var TextDecorationStyle$inherit_instance;
  var TextDecorationStyle$unset_instance;
  var TextDecorationStyle$solid_instance;
  var TextDecorationStyle$double_instance;
  var TextDecorationStyle$dotted_instance;
  var TextDecorationStyle$dashed_instance;
  var TextDecorationStyle$wavy_instance;
  var Timing$Companion_instance = null;
  var TransitionDirection$initial_instance;
  var TransitionDirection$inherit_instance;
  var TransitionDirection$unset_instance;
  var TransitionDirection$start_instance;
  var TransitionDirection$end_instance;
  function Transform(name, args) {
    this.name = name;
    this.args_0 = args;
  }
  Transform.prototype.toString = function () {
    return this.name + '(' + joinToString(this.args_0, ', ') + ')';
  };
  Transform.$metadata$ = {kind: Kind_CLASS, simpleName: 'Transform', interfaces: []};
  function Transforms() {
    Transforms$Companion_getInstance();
    StyleList.call(this, ' ');
  }
  function Transforms$Companion() {
    Transforms$Companion_instance = this;
    this.none = new Transforms();
  }
  Transforms$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Transforms$Companion_instance = null;
  function Transforms$Companion_getInstance() {
    if (Transforms$Companion_instance === null) {
      new Transforms$Companion();
    }
    return Transforms$Companion_instance;
  }
  Transforms.$metadata$ = {kind: Kind_CLASS, simpleName: 'Transforms', interfaces: [StyleList]};
  function add($receiver, name, args) {
    $receiver.plusAssign_11rb$(new Transform(name, args));
  }
  function translate($receiver, tx, ty) {
    if (ty === void 0)
      ty = get_px(0);
    add($receiver, 'translate', [tx, ty]);
  }
  function Transitions() {
    Transitions$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Transitions$Companion() {
    Transitions$Companion_instance = this;
    this.none = new Transitions();
  }
  Transitions$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Transitions$Companion_instance = null;
  function Transitions$Companion_getInstance() {
    if (Transitions$Companion_instance === null) {
      new Transitions$Companion();
    }
    return Transitions$Companion_instance;
  }
  Transitions.$metadata$ = {kind: Kind_CLASS, simpleName: 'Transitions', interfaces: [StyleList]};
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$css = package$kotlinx.css || (package$kotlinx.css = {});
  package$css.CssBuilder_ld8ri9$ = CssBuilder;
  Object.defineProperty(CssBuilder_0, 'Companion', {get: CssBuilder$Companion_getInstance});
  package$css.CssBuilder = CssBuilder_0;
  package$css.CssBuilderImpl = CssBuilderImpl;
  package$css.hyphenize_pdl1vz$ = hyphenize;
  package$css.times_6ic1pp$ = times;
  package$css.Rule = Rule;
  package$css.RuleContainer = RuleContainer;
  Object.defineProperty(LinearDimension, 'Companion', {get: LinearDimension$Companion_getInstance});
  package$css.LinearDimension = LinearDimension;
  package$css.NumericLinearDimension = NumericLinearDimension;
  package$css.get_em_rcaex3$ = get_em;
  package$css.get_pct_rcaex3$ = get_pct;
  package$css.get_px_rcaex3$ = get_px;
  package$css.CssValue = CssValue;
  Object.defineProperty(Align, 'initial', {get: Align$initial_getInstance});
  Object.defineProperty(Align, 'inherit', {get: Align$inherit_getInstance});
  Object.defineProperty(Align, 'unset', {get: Align$unset_getInstance});
  Object.defineProperty(Align, 'auto', {get: Align$auto_getInstance});
  Object.defineProperty(Align, 'stretch', {get: Align$stretch_getInstance});
  Object.defineProperty(Align, 'center', {get: Align$center_getInstance});
  Object.defineProperty(Align, 'start', {get: Align$start_getInstance});
  Object.defineProperty(Align, 'end', {get: Align$end_getInstance});
  Object.defineProperty(Align, 'selfStart', {get: Align$selfStart_getInstance});
  Object.defineProperty(Align, 'selfEnd', {get: Align$selfEnd_getInstance});
  Object.defineProperty(Align, 'flexStart', {get: Align$flexStart_getInstance});
  Object.defineProperty(Align, 'flexEnd', {get: Align$flexEnd_getInstance});
  Object.defineProperty(Align, 'baseline', {get: Align$baseline_getInstance});
  package$css.Align = Align;
  Object.defineProperty(JustifyContent, 'initial', {get: JustifyContent$initial_getInstance});
  Object.defineProperty(JustifyContent, 'inherit', {get: JustifyContent$inherit_getInstance});
  Object.defineProperty(JustifyContent, 'unset', {get: JustifyContent$unset_getInstance});
  Object.defineProperty(JustifyContent, 'center', {get: JustifyContent$center_getInstance});
  Object.defineProperty(JustifyContent, 'start', {get: JustifyContent$start_getInstance});
  Object.defineProperty(JustifyContent, 'end', {get: JustifyContent$end_getInstance});
  Object.defineProperty(JustifyContent, 'flexStart', {get: JustifyContent$flexStart_getInstance});
  Object.defineProperty(JustifyContent, 'flexEnd', {get: JustifyContent$flexEnd_getInstance});
  Object.defineProperty(JustifyContent, 'left', {get: JustifyContent$left_getInstance});
  Object.defineProperty(JustifyContent, 'right', {get: JustifyContent$right_getInstance});
  Object.defineProperty(JustifyContent, 'baseline', {get: JustifyContent$baseline_getInstance});
  Object.defineProperty(JustifyContent, 'firstBaseline', {get: JustifyContent$firstBaseline_getInstance});
  Object.defineProperty(JustifyContent, 'lastBaseline', {get: JustifyContent$lastBaseline_getInstance});
  Object.defineProperty(JustifyContent, 'spaceBetween', {get: JustifyContent$spaceBetween_getInstance});
  Object.defineProperty(JustifyContent, 'spaceAround', {get: JustifyContent$spaceAround_getInstance});
  Object.defineProperty(JustifyContent, 'spaceEvenly', {get: JustifyContent$spaceEvenly_getInstance});
  Object.defineProperty(JustifyContent, 'stretch', {get: JustifyContent$stretch_getInstance});
  Object.defineProperty(JustifyContent, 'safeCenter', {get: JustifyContent$safeCenter_getInstance});
  Object.defineProperty(JustifyContent, 'unsafeCenter', {get: JustifyContent$unsafeCenter_getInstance});
  package$css.JustifyContent = JustifyContent;
  Object.defineProperty(BackgroundRepeat, 'initial', {get: BackgroundRepeat$initial_getInstance});
  Object.defineProperty(BackgroundRepeat, 'inherit', {get: BackgroundRepeat$inherit_getInstance});
  Object.defineProperty(BackgroundRepeat, 'unset', {get: BackgroundRepeat$unset_getInstance});
  Object.defineProperty(BackgroundRepeat, 'repeatX', {get: BackgroundRepeat$repeatX_getInstance});
  Object.defineProperty(BackgroundRepeat, 'repeatY', {get: BackgroundRepeat$repeatY_getInstance});
  Object.defineProperty(BackgroundRepeat, 'repeat', {get: BackgroundRepeat$repeat_getInstance});
  Object.defineProperty(BackgroundRepeat, 'noRepeat', {get: BackgroundRepeat$noRepeat_getInstance});
  package$css.BackgroundRepeat = BackgroundRepeat;
  Object.defineProperty(BorderCollapse, 'initial', {get: BorderCollapse$initial_getInstance});
  Object.defineProperty(BorderCollapse, 'inherit', {get: BorderCollapse$inherit_getInstance});
  Object.defineProperty(BorderCollapse, 'unset', {get: BorderCollapse$unset_getInstance});
  Object.defineProperty(BorderCollapse, 'separate', {get: BorderCollapse$separate_getInstance});
  Object.defineProperty(BorderCollapse, 'collapse', {get: BorderCollapse$collapse_getInstance});
  package$css.BorderCollapse = BorderCollapse;
  Object.defineProperty(Color, 'Companion', {get: Color$Companion_getInstance});
  Color.RGBA = Color$RGBA;
  Color.HSLA = Color$HSLA;
  package$css.Color = Color;
  package$css.rgb_qt1dr2$ = rgb;
  package$css.rgba_gb4hak$ = rgba;
  package$css.hsla_gb4hak$ = hsla;
  package$css.QuotedString = QuotedString;
  package$css.get_quoted_pdl1vz$ = get_quoted;
  Object.defineProperty(Display, 'initial', {get: Display$initial_getInstance});
  Object.defineProperty(Display, 'inherit', {get: Display$inherit_getInstance});
  Object.defineProperty(Display, 'unset', {get: Display$unset_getInstance});
  Object.defineProperty(Display, 'block', {get: Display$block_getInstance});
  Object.defineProperty(Display, 'inline', {get: Display$inline_getInstance});
  Object.defineProperty(Display, 'runIn', {get: Display$runIn_getInstance});
  Object.defineProperty(Display, 'flow', {get: Display$flow_getInstance});
  Object.defineProperty(Display, 'flowRoot', {get: Display$flowRoot_getInstance});
  Object.defineProperty(Display, 'table', {get: Display$table_getInstance});
  Object.defineProperty(Display, 'flex', {get: Display$flex_getInstance});
  Object.defineProperty(Display, 'grid', {get: Display$grid_getInstance});
  Object.defineProperty(Display, 'subgrid', {get: Display$subgrid_getInstance});
  Object.defineProperty(Display, 'listItem', {get: Display$listItem_getInstance});
  Object.defineProperty(Display, 'tableRowGroup', {get: Display$tableRowGroup_getInstance});
  Object.defineProperty(Display, 'tableHeaderGroup', {get: Display$tableHeaderGroup_getInstance});
  Object.defineProperty(Display, 'tableFooterGroup', {get: Display$tableFooterGroup_getInstance});
  Object.defineProperty(Display, 'tableRow', {get: Display$tableRow_getInstance});
  Object.defineProperty(Display, 'tableCell', {get: Display$tableCell_getInstance});
  Object.defineProperty(Display, 'tableColumnGroup', {get: Display$tableColumnGroup_getInstance});
  Object.defineProperty(Display, 'tableColumn', {get: Display$tableColumn_getInstance});
  Object.defineProperty(Display, 'tableCaption', {get: Display$tableCaption_getInstance});
  Object.defineProperty(Display, 'contents', {get: Display$contents_getInstance});
  Object.defineProperty(Display, 'none', {get: Display$none_getInstance});
  Object.defineProperty(Display, 'inlineBlock', {get: Display$inlineBlock_getInstance});
  Object.defineProperty(Display, 'inlineListItem', {get: Display$inlineListItem_getInstance});
  Object.defineProperty(Display, 'inlineTable', {get: Display$inlineTable_getInstance});
  Object.defineProperty(Display, 'inlineFlex', {get: Display$inlineFlex_getInstance});
  Object.defineProperty(Display, 'inlineGrid', {get: Display$inlineGrid_getInstance});
  package$css.Display = Display;
  Object.defineProperty(Float, 'initial', {get: Float$initial_getInstance});
  Object.defineProperty(Float, 'inherit', {get: Float$inherit_getInstance});
  Object.defineProperty(Float, 'unset', {get: Float$unset_getInstance});
  Object.defineProperty(Float, 'left', {get: Float$left_getInstance});
  Object.defineProperty(Float, 'right', {get: Float$right_getInstance});
  Object.defineProperty(Float, 'none', {get: Float$none_getInstance});
  package$css.Float = Float;
  Object.defineProperty(FontWeight, 'Companion', {get: FontWeight$Companion_getInstance});
  package$css.FontWeight = FontWeight;
  Object.defineProperty(Overflow, 'initial', {get: Overflow$initial_getInstance});
  Object.defineProperty(Overflow, 'inherit', {get: Overflow$inherit_getInstance});
  Object.defineProperty(Overflow, 'unset', {get: Overflow$unset_getInstance});
  Object.defineProperty(Overflow, 'visible', {get: Overflow$visible_getInstance});
  Object.defineProperty(Overflow, 'hidden', {get: Overflow$hidden_getInstance});
  Object.defineProperty(Overflow, 'scroll', {get: Overflow$scroll_getInstance});
  Object.defineProperty(Overflow, 'auto', {get: Overflow$auto_getInstance});
  package$css.Overflow = Overflow;
  Object.defineProperty(Position, 'initial', {get: Position$initial_getInstance});
  Object.defineProperty(Position, 'inherit', {get: Position$inherit_getInstance});
  Object.defineProperty(Position, 'unset', {get: Position$unset_getInstance});
  Object.defineProperty(Position, 'static', {get: Position$static_getInstance});
  Object.defineProperty(Position, 'relative', {get: Position$relative_getInstance});
  Object.defineProperty(Position, 'absolute', {get: Position$absolute_getInstance});
  Object.defineProperty(Position, 'fixed', {get: Position$fixed_getInstance});
  Object.defineProperty(Position, 'sticky', {get: Position$sticky_getInstance});
  package$css.Position = Position;
  Object.defineProperty(TextAlign, 'initial', {get: TextAlign$initial_getInstance});
  Object.defineProperty(TextAlign, 'inherit', {get: TextAlign$inherit_getInstance});
  Object.defineProperty(TextAlign, 'unset', {get: TextAlign$unset_getInstance});
  Object.defineProperty(TextAlign, 'left', {get: TextAlign$left_getInstance});
  Object.defineProperty(TextAlign, 'right', {get: TextAlign$right_getInstance});
  Object.defineProperty(TextAlign, 'center', {get: TextAlign$center_getInstance});
  Object.defineProperty(TextAlign, 'justify', {get: TextAlign$justify_getInstance});
  Object.defineProperty(TextAlign, 'justifyAll', {get: TextAlign$justifyAll_getInstance});
  Object.defineProperty(TextAlign, 'start', {get: TextAlign$start_getInstance});
  Object.defineProperty(TextAlign, 'end', {get: TextAlign$end_getInstance});
  Object.defineProperty(TextAlign, 'matchParent', {get: TextAlign$matchParent_getInstance});
  package$css.TextAlign = TextAlign;
  Object.defineProperty(TextOverflow, 'initial', {get: TextOverflow$initial_getInstance});
  Object.defineProperty(TextOverflow, 'inherit', {get: TextOverflow$inherit_getInstance});
  Object.defineProperty(TextOverflow, 'unset', {get: TextOverflow$unset_getInstance});
  Object.defineProperty(TextOverflow, 'clip', {get: TextOverflow$clip_getInstance});
  Object.defineProperty(TextOverflow, 'ellipsis', {get: TextOverflow$ellipsis_getInstance});
  package$css.TextOverflow = TextOverflow;
  Object.defineProperty(VerticalAlign, 'Companion', {get: VerticalAlign$Companion_getInstance});
  package$css.VerticalAlign = VerticalAlign;
  Object.defineProperty(Image, 'Companion', {get: Image$Companion_getInstance});
  package$css.Image = Image;
  package$css.StyleList = StyleList;
  package$css.CssDeclarations = CssDeclarations;
  package$css.StyledElement = StyledElement;
  package$css.StyledElementImpl = StyledElementImpl;
  package$css.set_alignContent_olgsez$ = set_alignContent;
  package$css.set_alignItems_olgsez$ = set_alignItems;
  package$css.set_background_krvuuu$ = set_background;
  package$css.set_backgroundColor_ommczd$ = set_backgroundColor;
  package$css.set_backgroundImage_opvm7l$ = set_backgroundImage;
  package$css.set_backgroundPosition_krvuuu$ = set_backgroundPosition;
  package$css.set_backgroundRepeat_l8g6hf$ = set_backgroundRepeat;
  package$css.set_backgroundSize_krvuuu$ = set_backgroundSize;
  package$css.set_borderBottom_krvuuu$ = set_borderBottom;
  package$css.set_borderCollapse_4z7co3$ = set_borderCollapse;
  package$css.set_borderBottomLeftRadius_n8chyh$ = set_borderBottomLeftRadius;
  package$css.set_borderBottomRightRadius_n8chyh$ = set_borderBottomRightRadius;
  package$css.set_color_ommczd$ = set_color;
  package$css.set_content_qf37ct$ = set_content;
  package$css.set_display_qidz4o$ = set_display;
  package$css.set_float_oo7voy$ = set_float;
  package$css.set_fontFamily_krvuuu$ = set_fontFamily;
  package$css.set_fontSize_n8chyh$ = set_fontSize;
  package$css.set_fontWeight_6wqc8f$ = set_fontWeight;
  package$css.set_height_n8chyh$ = set_height;
  package$css.set_justifyContent_gwpzrh$ = set_justifyContent;
  package$css.set_left_n8chyh$ = set_left;
  package$css.set_letterSpacing_n8chyh$ = set_letterSpacing;
  package$css.set_lineHeight_ftzj10$ = set_lineHeight;
  package$css.set_marginTop_n8chyh$ = set_marginTop;
  package$css.set_marginRight_n8chyh$ = set_marginRight;
  package$css.set_marginBottom_n8chyh$ = set_marginBottom;
  package$css.set_marginLeft_n8chyh$ = set_marginLeft;
  package$css.set_maxWidth_n8chyh$ = set_maxWidth;
  package$css.set_maxHeight_n8chyh$ = set_maxHeight;
  package$css.set_opacity_if475a$ = set_opacity;
  package$css.set_overflow_qhpm6s$ = set_overflow;
  package$css.set_padding_krvuuu$ = set_padding;
  package$css.set_paddingTop_n8chyh$ = set_paddingTop;
  package$css.set_paddingRight_n8chyh$ = set_paddingRight;
  package$css.set_paddingBottom_n8chyh$ = set_paddingBottom;
  package$css.set_paddingLeft_n8chyh$ = set_paddingLeft;
  package$css.set_position_mvtmy5$ = set_position;
  package$css.set_textAlign_q2ys32$ = set_textAlign;
  package$css.set_textDecoration_pbf7yq$ = set_textDecoration;
  package$css.set_textOverflow_67zq6f$ = set_textOverflow;
  package$css.set_top_n8chyh$ = set_top;
  package$css.set_transform_z5yzaw$ = set_transform;
  package$css.set_verticalAlign_9eaq6d$ = set_verticalAlign;
  package$css.set_width_n8chyh$ = set_width;
  package$css.set_zIndex_a6g65m$ = set_zIndex;
  package$css.padding_fjjo64$ = padding_0;
  package$css.padding_9vmwvs$ = padding_1;
  package$css.padding_cx3uck$ = padding_2;
  package$css.TagSelector = TagSelector;
  Object.defineProperty(package$css, 's', {get: get_s});
  var package$properties = package$css.properties || (package$css.properties = {});
  Object.defineProperty(Animations, 'Companion', {get: Animations$Companion_getInstance});
  package$properties.Animations = Animations;
  Object.defineProperty(BoxShadows, 'Companion', {get: BoxShadows$Companion_getInstance});
  package$properties.BoxShadows = BoxShadows;
  package$properties.KeyframesBuilder = KeyframesBuilder;
  package$properties.KeyframesBuilderImpl = KeyframesBuilderImpl;
  Object.defineProperty(LineHeight, 'Companion', {get: LineHeight$Companion_getInstance});
  package$properties.LineHeight = LineHeight;
  Object.defineProperty(TextDecoration, 'Companion', {get: TextDecoration$Companion_getInstance});
  package$properties.TextDecoration = TextDecoration;
  package$properties.Transform = Transform;
  Object.defineProperty(Transforms, 'Companion', {get: Transforms$Companion_getInstance});
  package$properties.Transforms = Transforms;
  package$properties.add_3pxtuf$ = add;
  package$properties.translate_z52cu5$ = translate;
  Object.defineProperty(Transitions, 'Companion', {get: Transitions$Companion_getInstance});
  package$properties.Transitions = Transitions;
  CssBuilder_0.prototype.put_puj7f4$ = StyledElement.prototype.put_puj7f4$;
  CssBuilder_0.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  CssBuilder_0.prototype.resolveRules_ry1ed0$ = RuleContainer.prototype.resolveRules_ry1ed0$;
  CssBuilder_0.prototype.rule_v44dnz$ = RuleContainer.prototype.rule_v44dnz$;
  CssBuilder_0.prototype.rule_1q2hwx$$default = RuleContainer.prototype.rule_1q2hwx$$default;
  CssBuilder_0.prototype.rule_jindqg$$default = RuleContainer.prototype.rule_jindqg$$default;
  CssBuilder_0.prototype.rule_1q2hwx$ = RuleContainer.prototype.rule_1q2hwx$;
  CssBuilder_0.prototype.rule_jindqg$ = RuleContainer.prototype.rule_jindqg$;
  CssBuilderImpl.prototype.unaryPlus_v2gpjl$ = CssBuilder_0.prototype.unaryPlus_v2gpjl$;
  CssBuilderImpl.prototype.unaryPlus_pdl1vz$ = CssBuilder_0.prototype.unaryPlus_pdl1vz$;
  CssBuilderImpl.prototype.unaryPlus_a3w2bl$ = CssBuilder_0.prototype.unaryPlus_a3w2bl$;
  CssBuilderImpl.prototype.unaryPlus_sdeqdk$ = CssBuilder_0.prototype.unaryPlus_sdeqdk$;
  CssBuilderImpl.prototype.invoke_3ad21g$ = CssBuilder_0.prototype.invoke_3ad21g$;
  CssBuilderImpl.prototype.invoke_x7exez$ = CssBuilder_0.prototype.invoke_x7exez$;
  CssBuilderImpl.prototype.invoke_3c2457$ = CssBuilder_0.prototype.invoke_3c2457$;
  CssBuilderImpl.prototype.active_lx8bml$ = CssBuilder_0.prototype.active_lx8bml$;
  CssBuilderImpl.prototype.checked_lx8bml$ = CssBuilder_0.prototype.checked_lx8bml$;
  CssBuilderImpl.prototype.default_lx8bml$ = CssBuilder_0.prototype.default_lx8bml$;
  CssBuilderImpl.prototype.defined_lx8bml$ = CssBuilder_0.prototype.defined_lx8bml$;
  CssBuilderImpl.prototype.disabled_lx8bml$ = CssBuilder_0.prototype.disabled_lx8bml$;
  CssBuilderImpl.prototype.empty_lx8bml$ = CssBuilder_0.prototype.empty_lx8bml$;
  CssBuilderImpl.prototype.enabled_lx8bml$ = CssBuilder_0.prototype.enabled_lx8bml$;
  CssBuilderImpl.prototype.firstChild_lx8bml$ = CssBuilder_0.prototype.firstChild_lx8bml$;
  CssBuilderImpl.prototype.firstOfType_lx8bml$ = CssBuilder_0.prototype.firstOfType_lx8bml$;
  CssBuilderImpl.prototype.fullscreen_lx8bml$ = CssBuilder_0.prototype.fullscreen_lx8bml$;
  CssBuilderImpl.prototype.focus_lx8bml$ = CssBuilder_0.prototype.focus_lx8bml$;
  CssBuilderImpl.prototype.focusVisible_lx8bml$ = CssBuilder_0.prototype.focusVisible_lx8bml$;
  CssBuilderImpl.prototype.focusWithin_lx8bml$ = CssBuilder_0.prototype.focusWithin_lx8bml$;
  CssBuilderImpl.prototype.hover_lx8bml$ = CssBuilder_0.prototype.hover_lx8bml$;
  CssBuilderImpl.prototype.indeterminate_lx8bml$ = CssBuilder_0.prototype.indeterminate_lx8bml$;
  CssBuilderImpl.prototype.inRange_lx8bml$ = CssBuilder_0.prototype.inRange_lx8bml$;
  CssBuilderImpl.prototype.invalid_lx8bml$ = CssBuilder_0.prototype.invalid_lx8bml$;
  CssBuilderImpl.prototype.lastChild_lx8bml$ = CssBuilder_0.prototype.lastChild_lx8bml$;
  CssBuilderImpl.prototype.lastOfType_lx8bml$ = CssBuilder_0.prototype.lastOfType_lx8bml$;
  CssBuilderImpl.prototype.link_lx8bml$ = CssBuilder_0.prototype.link_lx8bml$;
  CssBuilderImpl.prototype.not_xqeqkq$ = CssBuilder_0.prototype.not_xqeqkq$;
  CssBuilderImpl.prototype.not_v2gpjl$ = CssBuilder_0.prototype.not_v2gpjl$;
  CssBuilderImpl.prototype.nthChild_xqeqkq$ = CssBuilder_0.prototype.nthChild_xqeqkq$;
  CssBuilderImpl.prototype.nthLastChild_xqeqkq$ = CssBuilder_0.prototype.nthLastChild_xqeqkq$;
  CssBuilderImpl.prototype.nthLastOfType_xqeqkq$ = CssBuilder_0.prototype.nthLastOfType_xqeqkq$;
  CssBuilderImpl.prototype.nthOfType_xqeqkq$ = CssBuilder_0.prototype.nthOfType_xqeqkq$;
  CssBuilderImpl.prototype.onlyChild_lx8bml$ = CssBuilder_0.prototype.onlyChild_lx8bml$;
  CssBuilderImpl.prototype.onlyOfType_lx8bml$ = CssBuilder_0.prototype.onlyOfType_lx8bml$;
  CssBuilderImpl.prototype.optional_lx8bml$ = CssBuilder_0.prototype.optional_lx8bml$;
  CssBuilderImpl.prototype.outOfRange_lx8bml$ = CssBuilder_0.prototype.outOfRange_lx8bml$;
  CssBuilderImpl.prototype.placeholderShown_lx8bml$ = CssBuilder_0.prototype.placeholderShown_lx8bml$;
  CssBuilderImpl.prototype.readOnly_lx8bml$ = CssBuilder_0.prototype.readOnly_lx8bml$;
  CssBuilderImpl.prototype.readWrite_lx8bml$ = CssBuilder_0.prototype.readWrite_lx8bml$;
  CssBuilderImpl.prototype.required_lx8bml$ = CssBuilder_0.prototype.required_lx8bml$;
  CssBuilderImpl.prototype.valid_lx8bml$ = CssBuilder_0.prototype.valid_lx8bml$;
  CssBuilderImpl.prototype.visited_lx8bml$ = CssBuilder_0.prototype.visited_lx8bml$;
  CssBuilderImpl.prototype.children_xqeqkq$$default = CssBuilder_0.prototype.children_xqeqkq$$default;
  CssBuilderImpl.prototype.descendants_xqeqkq$$default = CssBuilder_0.prototype.descendants_xqeqkq$$default;
  CssBuilderImpl.prototype.ancestorHover_xqeqkq$ = CssBuilder_0.prototype.ancestorHover_xqeqkq$;
  CssBuilderImpl.prototype.after_lx8bml$ = CssBuilder_0.prototype.after_lx8bml$;
  CssBuilderImpl.prototype.before_lx8bml$ = CssBuilder_0.prototype.before_lx8bml$;
  CssBuilderImpl.prototype.firstLetter_lx8bml$ = CssBuilder_0.prototype.firstLetter_lx8bml$;
  CssBuilderImpl.prototype.firstLine_lx8bml$ = CssBuilder_0.prototype.firstLine_lx8bml$;
  CssBuilderImpl.prototype.placeholder_lx8bml$ = CssBuilder_0.prototype.placeholder_lx8bml$;
  CssBuilderImpl.prototype.selection_lx8bml$ = CssBuilder_0.prototype.selection_lx8bml$;
  CssBuilderImpl.prototype.child_xqeqkq$ = CssBuilder_0.prototype.child_xqeqkq$;
  CssBuilderImpl.prototype.child_v077kx$ = CssBuilder_0.prototype.child_v077kx$;
  CssBuilderImpl.prototype.sibling_xqeqkq$ = CssBuilder_0.prototype.sibling_xqeqkq$;
  CssBuilderImpl.prototype.adjacentSibling_xqeqkq$ = CssBuilder_0.prototype.adjacentSibling_xqeqkq$;
  CssBuilderImpl.prototype.universal_lx8bml$ = CssBuilder_0.prototype.universal_lx8bml$;
  CssBuilderImpl.prototype.compareTo_er05um$ = CssBuilder_0.prototype.compareTo_er05um$;
  CssBuilderImpl.prototype.specific_4clrgz$$default = CssBuilder_0.prototype.specific_4clrgz$$default;
  CssBuilderImpl.prototype.prefix_xqeqkq$ = CssBuilder_0.prototype.prefix_xqeqkq$;
  CssBuilderImpl.prototype.media_v44dnz$ = CssBuilder_0.prototype.media_v44dnz$;
  CssBuilderImpl.prototype.supports_v44dnz$ = CssBuilder_0.prototype.supports_v44dnz$;
  CssBuilderImpl.prototype.container_v44dnz$ = CssBuilder_0.prototype.container_v44dnz$;
  CssBuilderImpl.prototype.fontFace_lx8bml$ = CssBuilder_0.prototype.fontFace_lx8bml$;
  CssBuilderImpl.prototype.retina_lx8bml$ = CssBuilder_0.prototype.retina_lx8bml$;
  CssBuilderImpl.prototype.root_lx8bml$ = CssBuilder_0.prototype.root_lx8bml$;
  CssBuilderImpl.prototype.setCustomProperty_lwowle$ = CssBuilder_0.prototype.setCustomProperty_lwowle$;
  CssBuilderImpl.prototype.min_5utlym$ = CssBuilder_0.prototype.min_5utlym$;
  CssBuilderImpl.prototype.max_5utlym$ = CssBuilder_0.prototype.max_5utlym$;
  CssBuilderImpl.prototype.clamp_me7l17$ = CssBuilder_0.prototype.clamp_me7l17$;
  CssBuilderImpl.prototype.addClass_v4ob8x$_0 = CssBuilder_0.prototype.addClass_v4ob8x$_0;
  CssBuilderImpl.prototype.append_5cyqpy$ = CssBuilder_0.prototype.append_5cyqpy$;
  CssBuilderImpl.prototype.put_puj7f4$ = CssBuilder_0.prototype.put_puj7f4$;
  CssBuilderImpl.prototype.buildRules_s47sd7$ = CssBuilder_0.prototype.buildRules_s47sd7$;
  CssBuilderImpl.prototype.resolveRules_ry1ed0$ = CssBuilder_0.prototype.resolveRules_ry1ed0$;
  CssBuilderImpl.prototype.rule_v44dnz$ = CssBuilder_0.prototype.rule_v44dnz$;
  CssBuilderImpl.prototype.rule_1q2hwx$$default = CssBuilder_0.prototype.rule_1q2hwx$$default;
  CssBuilderImpl.prototype.rule_jindqg$$default = CssBuilder_0.prototype.rule_jindqg$$default;
  CssBuilderImpl.prototype.children_xqeqkq$ = CssBuilder_0.prototype.children_xqeqkq$;
  CssBuilderImpl.prototype.descendants_xqeqkq$ = CssBuilder_0.prototype.descendants_xqeqkq$;
  CssBuilderImpl.prototype.specific_4clrgz$ = CssBuilder_0.prototype.specific_4clrgz$;
  CssBuilderImpl.prototype.rule_1q2hwx$ = CssBuilder_0.prototype.rule_1q2hwx$;
  CssBuilderImpl.prototype.rule_jindqg$ = CssBuilder_0.prototype.rule_jindqg$;
  StyledElementImpl.prototype.put_puj7f4$ = StyledElement.prototype.put_puj7f4$;
  KeyframesBuilder.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  KeyframesBuilder.prototype.resolveRules_ry1ed0$ = RuleContainer.prototype.resolveRules_ry1ed0$;
  KeyframesBuilder.prototype.rule_v44dnz$ = RuleContainer.prototype.rule_v44dnz$;
  KeyframesBuilder.prototype.rule_1q2hwx$$default = RuleContainer.prototype.rule_1q2hwx$$default;
  KeyframesBuilder.prototype.rule_jindqg$$default = RuleContainer.prototype.rule_jindqg$$default;
  KeyframesBuilder.prototype.rule_1q2hwx$ = RuleContainer.prototype.rule_1q2hwx$;
  KeyframesBuilder.prototype.rule_jindqg$ = RuleContainer.prototype.rule_jindqg$;
  KeyframesBuilderImpl.prototype.buildRules_s47sd7$ = KeyframesBuilder.prototype.buildRules_s47sd7$;
  KeyframesBuilderImpl.prototype.resolveRules_ry1ed0$ = KeyframesBuilder.prototype.resolveRules_ry1ed0$;
  KeyframesBuilderImpl.prototype.rule_v44dnz$ = KeyframesBuilder.prototype.rule_v44dnz$;
  KeyframesBuilderImpl.prototype.rule_1q2hwx$$default = KeyframesBuilder.prototype.rule_1q2hwx$$default;
  KeyframesBuilderImpl.prototype.rule_jindqg$$default = KeyframesBuilder.prototype.rule_jindqg$$default;
  KeyframesBuilderImpl.prototype.rule_1q2hwx$ = KeyframesBuilder.prototype.rule_1q2hwx$;
  KeyframesBuilderImpl.prototype.rule_jindqg$ = KeyframesBuilder.prototype.rule_jindqg$;
  CAPITAL_LETTER = Regex_init('[A-Z]');
  ZERO = '0';
  alignContent = new CssProperty();
  alignItems = new CssProperty();
  alignSelf = new CssProperty();
  animation = new CssProperty(animation$lambda);
  animationDelay = new CssProperty();
  animationDirection = new CssProperty();
  animationDuration = new CssProperty();
  animationFillMode = new CssProperty();
  animationIterationCount = new CssProperty();
  animationName = new CssProperty();
  animationPlayState = new CssProperty();
  animationTimingFunction = new CssProperty();
  appearance = new CssProperty();
  aspectRatio = new CssProperty();
  backfaceVisibility = new CssProperty();
  background = new CssProperty();
  backgroundAttachment = new CssProperty();
  backgroundClip = new CssProperty();
  backgroundColor = new CssProperty();
  backgroundImage = new CssProperty();
  backgroundOrigin = new CssProperty();
  backgroundPosition = new CssProperty();
  backgroundRepeat = new CssProperty();
  backgroundSize = new CssProperty();
  border = new CssProperty();
  borderTop = new CssProperty();
  borderRight = new CssProperty();
  borderBottom = new CssProperty();
  borderLeft = new CssProperty();
  borderCollapse = new CssProperty();
  borderSpacing = new CssProperty();
  borderRadius = new CssProperty();
  borderTopLeftRadius = new CssProperty();
  borderTopRightRadius = new CssProperty();
  borderBottomLeftRadius = new CssProperty();
  borderBottomRightRadius = new CssProperty();
  borderStyle = new CssProperty();
  borderTopStyle = new CssProperty();
  borderRightStyle = new CssProperty();
  borderBottomStyle = new CssProperty();
  borderLeftStyle = new CssProperty();
  borderWidth = new CssProperty();
  borderTopWidth = new CssProperty();
  borderRightWidth = new CssProperty();
  borderBottomWidth = new CssProperty();
  borderLeftWidth = new CssProperty();
  borderColor = new CssProperty();
  borderTopColor = new CssProperty();
  borderRightColor = new CssProperty();
  borderBottomColor = new CssProperty();
  borderLeftColor = new CssProperty();
  bottom = new CssProperty();
  boxShadow = new CssProperty(boxShadow$lambda);
  boxSizing = new CssProperty();
  clear = new CssProperty();
  color = new CssProperty();
  columnGap = new CssProperty();
  contain = new CssProperty();
  content = new CssProperty();
  cursor = new CssProperty();
  direction = new CssProperty();
  display = new CssProperty();
  filter = new CssProperty();
  flexBasis = new CssProperty();
  flexDirection = new CssProperty();
  flexGrow = new CssProperty();
  flexShrink = new CssProperty();
  flexWrap = new CssProperty();
  float = new CssProperty();
  fontFamily = new CssProperty();
  fontSize = new CssProperty();
  fontSizeAdjust = new CssProperty();
  fontStyle = new CssProperty();
  fontWeight = new CssProperty();
  gap = new CssProperty();
  gridAutoColumns = new CssProperty();
  gridAutoFlow = new CssProperty();
  gridAutoRows = new CssProperty();
  gridColumn = new CssProperty();
  gridColumnEnd = new CssProperty();
  gridColumnStart = new CssProperty();
  gridRow = new CssProperty();
  gridRowEnd = new CssProperty();
  gridRowStart = new CssProperty();
  gridTemplate = new CssProperty();
  gridTemplateAreas = new CssProperty();
  gridTemplateColumns = new CssProperty();
  gridTemplateRows = new CssProperty();
  height = new CssProperty();
  hyphens = new CssProperty();
  inset = new CssProperty();
  isolation = new CssProperty();
  justifyContent = new CssProperty();
  justifyItems = new CssProperty();
  left = new CssProperty();
  letterSpacing = new CssProperty();
  lineHeight = new CssProperty();
  listStyleType = new CssProperty();
  margin = new CssProperty();
  marginTop = new CssProperty();
  marginRight = new CssProperty();
  marginBottom = new CssProperty();
  marginLeft = new CssProperty();
  minWidth = new CssProperty();
  maxWidth = new CssProperty();
  minHeight = new CssProperty();
  maxHeight = new CssProperty();
  objectFit = new CssProperty();
  objectPosition = new CssProperty();
  opacity = new CssProperty();
  outline = new CssProperty();
  outlineColor = new CssProperty();
  outlineOffset = new CssProperty();
  outlineWidth = new CssProperty();
  overflow = new CssProperty();
  overflowX = new CssProperty();
  overflowY = new CssProperty();
  overflowWrap = new CssProperty();
  overscrollBehavior = new CssProperty();
  padding = new CssProperty();
  paddingTop = new CssProperty();
  paddingRight = new CssProperty();
  paddingBottom = new CssProperty();
  paddingLeft = new CssProperty();
  pointerEvents = new CssProperty();
  position = new CssProperty();
  resize = new CssProperty();
  right = new CssProperty();
  rowGap = new CssProperty();
  scrollBehavior = new CssProperty();
  src = new CssProperty();
  tableLayout = new CssProperty();
  textAlign = new CssProperty();
  textDecoration = new CssProperty();
  textOverflow = new CssProperty();
  textTransform = new CssProperty();
  top = new CssProperty();
  transform = new CssProperty(transform$lambda);
  transition = new CssProperty(transition$lambda);
  transitionDelay = new CssProperty();
  transitionDuration = new CssProperty();
  transitionProperty = new CssProperty();
  transitionTimingFunction = new CssProperty();
  userSelect = new CssProperty();
  verticalAlign = new CssProperty();
  visibility = new CssProperty();
  whiteSpace = new CssProperty();
  width = new CssProperty();
  wordBreak = new CssProperty();
  wordSpacing = new CssProperty();
  wordWrap = new CssProperty();
  zIndex = new CssProperty();
  html = TagSelectorFactory_getInstance();
  base = TagSelectorFactory_getInstance();
  head = TagSelectorFactory_getInstance();
  link = TagSelectorFactory_getInstance();
  meta = TagSelectorFactory_getInstance();
  style = TagSelectorFactory_getInstance();
  title = TagSelectorFactory_getInstance();
  body = TagSelectorFactory_getInstance();
  address = TagSelectorFactory_getInstance();
  article = TagSelectorFactory_getInstance();
  aside = TagSelectorFactory_getInstance();
  footer = TagSelectorFactory_getInstance();
  header = TagSelectorFactory_getInstance();
  h1 = TagSelectorFactory_getInstance();
  h2 = TagSelectorFactory_getInstance();
  h3 = TagSelectorFactory_getInstance();
  h4 = TagSelectorFactory_getInstance();
  h5 = TagSelectorFactory_getInstance();
  h6 = TagSelectorFactory_getInstance();
  main = TagSelectorFactory_getInstance();
  nav = TagSelectorFactory_getInstance();
  section = TagSelectorFactory_getInstance();
  blockquote = TagSelectorFactory_getInstance();
  dd = TagSelectorFactory_getInstance();
  div = TagSelectorFactory_getInstance();
  dl = TagSelectorFactory_getInstance();
  dt = TagSelectorFactory_getInstance();
  figcaption = TagSelectorFactory_getInstance();
  figure = TagSelectorFactory_getInstance();
  hr = TagSelectorFactory_getInstance();
  li = TagSelectorFactory_getInstance();
  ol = TagSelectorFactory_getInstance();
  p = TagSelectorFactory_getInstance();
  pre = TagSelectorFactory_getInstance();
  ul = TagSelectorFactory_getInstance();
  a = TagSelectorFactory_getInstance();
  abbr = TagSelectorFactory_getInstance();
  b = TagSelectorFactory_getInstance();
  bdi = TagSelectorFactory_getInstance();
  bdo = TagSelectorFactory_getInstance();
  br = TagSelectorFactory_getInstance();
  cite = TagSelectorFactory_getInstance();
  code = TagSelectorFactory_getInstance();
  data = TagSelectorFactory_getInstance();
  dfn = TagSelectorFactory_getInstance();
  em = TagSelectorFactory_getInstance();
  i = TagSelectorFactory_getInstance();
  kbd = TagSelectorFactory_getInstance();
  mark = TagSelectorFactory_getInstance();
  q = TagSelectorFactory_getInstance();
  rb = TagSelectorFactory_getInstance();
  rp = TagSelectorFactory_getInstance();
  rt = TagSelectorFactory_getInstance();
  rtc = TagSelectorFactory_getInstance();
  ruby = TagSelectorFactory_getInstance();
  s = TagSelectorFactory_getInstance();
  samp = TagSelectorFactory_getInstance();
  small = TagSelectorFactory_getInstance();
  span = TagSelectorFactory_getInstance();
  strong = TagSelectorFactory_getInstance();
  sub = TagSelectorFactory_getInstance();
  sup = TagSelectorFactory_getInstance();
  time = TagSelectorFactory_getInstance();
  u = TagSelectorFactory_getInstance();
  wbr = TagSelectorFactory_getInstance();
  area = TagSelectorFactory_getInstance();
  audio = TagSelectorFactory_getInstance();
  img = TagSelectorFactory_getInstance();
  map = TagSelectorFactory_getInstance();
  track = TagSelectorFactory_getInstance();
  video = TagSelectorFactory_getInstance();
  embed = TagSelectorFactory_getInstance();
  iframe = TagSelectorFactory_getInstance();
  param = TagSelectorFactory_getInstance();
  picture = TagSelectorFactory_getInstance();
  portal = TagSelectorFactory_getInstance();
  source = TagSelectorFactory_getInstance();
  svg = TagSelectorFactory_getInstance();
  math_0 = TagSelectorFactory_getInstance();
  canvas = TagSelectorFactory_getInstance();
  noscript = TagSelectorFactory_getInstance();
  script = TagSelectorFactory_getInstance();
  del = TagSelectorFactory_getInstance();
  ins = TagSelectorFactory_getInstance();
  caption = TagSelectorFactory_getInstance();
  col = TagSelectorFactory_getInstance();
  colgroup = TagSelectorFactory_getInstance();
  table = TagSelectorFactory_getInstance();
  tbody = TagSelectorFactory_getInstance();
  td = TagSelectorFactory_getInstance();
  tfoot = TagSelectorFactory_getInstance();
  th = TagSelectorFactory_getInstance();
  thead = TagSelectorFactory_getInstance();
  tr = TagSelectorFactory_getInstance();
  button = TagSelectorFactory_getInstance();
  datalist = TagSelectorFactory_getInstance();
  fieldset = TagSelectorFactory_getInstance();
  form = TagSelectorFactory_getInstance();
  input = TagSelectorFactory_getInstance();
  label = TagSelectorFactory_getInstance();
  legend = TagSelectorFactory_getInstance();
  meter = TagSelectorFactory_getInstance();
  optgroup = TagSelectorFactory_getInstance();
  option = TagSelectorFactory_getInstance();
  output = TagSelectorFactory_getInstance();
  progress = TagSelectorFactory_getInstance();
  select = TagSelectorFactory_getInstance();
  textarea = TagSelectorFactory_getInstance();
  details = TagSelectorFactory_getInstance();
  dialog = TagSelectorFactory_getInstance();
  menu = TagSelectorFactory_getInstance();
  summary = TagSelectorFactory_getInstance();
  slot = TagSelectorFactory_getInstance();
  template = TagSelectorFactory_getInstance();
  return _;
}));

//# sourceMappingURL=kotlin-css.js.map
