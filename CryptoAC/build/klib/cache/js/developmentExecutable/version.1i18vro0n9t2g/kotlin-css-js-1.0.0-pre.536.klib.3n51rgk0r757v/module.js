(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-css'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-css'.");
    }
    root['kotlin-css'] = factory(typeof this['kotlin-css'] === 'undefined' ? {} : this['kotlin-css'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var repeat = kotlin_kotlin.$_$.de;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var protoOf = kotlin_kotlin.$_$.sb;
  var objectMeta = kotlin_kotlin.$_$.rb;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var startsWith = kotlin_kotlin.$_$.je;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var startsWith_0 = kotlin_kotlin.$_$.ke;
  var toString = kotlin_kotlin.$_$.xb;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var getStringHashCode = kotlin_kotlin.$_$.ta;
  var classMeta = kotlin_kotlin.$_$.ka;
  var THROW_ISE = kotlin_kotlin.$_$.gg;
  var Enum = kotlin_kotlin.$_$.tf;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.f;
  var Regex_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var objectCreate = kotlin_kotlin.$_$.qb;
  var lazy = kotlin_kotlin.$_$.ch;
  var coerceIn = kotlin_kotlin.$_$.fc;
  var coerceIn_0 = kotlin_kotlin.$_$.gc;
  var roundToInt = kotlin_kotlin.$_$.zb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var getNumberHashCode = kotlin_kotlin.$_$.ra;
  var equals = kotlin_kotlin.$_$.na;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var toInt = kotlin_kotlin.$_$.ve;
  var substringBefore = kotlin_kotlin.$_$.me;
  var toDouble = kotlin_kotlin.$_$.te;
  var numberToInt = kotlin_kotlin.$_$.ob;
  var endsWith = kotlin_kotlin.$_$.id;
  var substringBefore_0 = kotlin_kotlin.$_$.le;
  var endsWith_0 = kotlin_kotlin.$_$.jd;
  var get_PI = kotlin_kotlin.$_$.yb;
  var numberRangeToNumber = kotlin_kotlin.$_$.mb;
  var substring = kotlin_kotlin.$_$.ne;
  var toInt_0 = kotlin_kotlin.$_$.we;
  var charSequenceGet = kotlin_kotlin.$_$.ha;
  var toString_0 = kotlin_kotlin.$_$.r2;
  var joinToString = kotlin_kotlin.$_$.m7;
  var contains = kotlin_kotlin.$_$.ed;
  var KProperty1 = kotlin_kotlin.$_$.rc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sa;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var joinToString_0 = kotlin_kotlin.$_$.l7;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var isObject = kotlin_kotlin.$_$.hb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var hashCode = kotlin_kotlin.$_$.ua;
  var ensureNotNull = kotlin_kotlin.$_$.wg;
  var MutableMap = kotlin_kotlin.$_$.q5;
  var KMutableProperty1 = kotlin_kotlin.$_$.pc;
  var KProperty0 = kotlin_kotlin.$_$.qc;
  var emptySet = kotlin_kotlin.$_$.w6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CssValue, 'CssValue', classMeta);
  setMetadataFor(LinearDimension, 'LinearDimension', classMeta, CssValue);
  setMetadataFor(Align, 'Align', classMeta, Enum);
  setMetadataFor(Appearance, 'Appearance', classMeta, Enum);
  setMetadataFor(Visibility, 'Visibility', classMeta, Enum);
  setMetadataFor(BackgroundAttachment, 'BackgroundAttachment', classMeta, Enum);
  setMetadataFor(BackgroundClip, 'BackgroundClip', classMeta, Enum);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(RGBA, 'RGBA', classMeta);
  setMetadataFor(HSLA, 'HSLA', classMeta);
  setMetadataFor(Color, 'Color', classMeta, CssValue);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Image, 'Image', classMeta, CssValue);
  setMetadataFor(BackgroundOrigin, 'BackgroundOrigin', classMeta, Enum);
  setMetadataFor(BackgroundRepeat, 'BackgroundRepeat', classMeta, Enum);
  setMetadataFor(BorderCollapse, 'BorderCollapse', classMeta, Enum);
  setMetadataFor(BorderStyle, 'BorderStyle', classMeta, Enum);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta, Enum);
  setMetadataFor(Clear, 'Clear', classMeta, Enum);
  setMetadataFor(Contain, 'Contain', classMeta, Enum);
  setMetadataFor(QuotedString, 'QuotedString', classMeta, CssValue);
  setMetadataFor(Cursor, 'Cursor', classMeta, Enum);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(Display, 'Display', classMeta, Enum);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(FlexBasis, 'FlexBasis', classMeta, CssValue);
  setMetadataFor(FlexDirection, 'FlexDirection', classMeta, Enum);
  setMetadataFor(FlexWrap, 'FlexWrap', classMeta, Enum);
  setMetadataFor(Float, 'Float', classMeta, Enum);
  setMetadataFor(FontStyle, 'FontStyle', classMeta, Enum);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta, CssValue);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(GridAutoColumns, 'GridAutoColumns', classMeta, CssValue);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(GridAutoFlow, 'GridAutoFlow', classMeta, CssValue);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(GridAutoRows, 'GridAutoRows', classMeta, CssValue);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(GridColumn, 'GridColumn', classMeta, CssValue);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(GridColumnEnd, 'GridColumnEnd', classMeta, CssValue);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(GridColumnStart, 'GridColumnStart', classMeta, CssValue);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(GridRow, 'GridRow', classMeta, CssValue);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(GridRowEnd, 'GridRowEnd', classMeta, CssValue);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(GridRowStart, 'GridRowStart', classMeta, CssValue);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(GridTemplate, 'GridTemplate', classMeta, CssValue);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(GridTemplateAreas, 'GridTemplateAreas', classMeta, CssValue);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(GridTemplateColumns, 'GridTemplateColumns', classMeta, CssValue);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(GridTemplateRows, 'GridTemplateRows', classMeta, CssValue);
  setMetadataFor(Hyphens, 'Hyphens', classMeta, Enum);
  setMetadataFor(Isolation, 'Isolation', classMeta, Enum);
  setMetadataFor(JustifyContent, 'JustifyContent', classMeta, Enum);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta, Enum);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta, Enum);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta, Enum);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(Order, 'Order', classMeta, CssValue);
  setMetadataFor(Outline, 'Outline', classMeta, Enum);
  setMetadataFor(OutlineStyle, 'OutlineStyle', classMeta, Enum);
  setMetadataFor(Overflow, 'Overflow', classMeta, Enum);
  setMetadataFor(OverflowWrap, 'OverflowWrap', classMeta, Enum);
  setMetadataFor(OverscrollBehavior, 'OverscrollBehavior', classMeta, Enum);
  setMetadataFor(PointerEvents, 'PointerEvents', classMeta, Enum);
  setMetadataFor(Position, 'Position', classMeta, Enum);
  setMetadataFor(Resize, 'Resize', classMeta, Enum);
  setMetadataFor(ScrollBehavior, 'ScrollBehavior', classMeta, Enum);
  setMetadataFor(TableLayout, 'TableLayout', classMeta, Enum);
  setMetadataFor(TextAlign, 'TextAlign', classMeta, Enum);
  setMetadataFor(TextOverflow, 'TextOverflow', classMeta, Enum);
  setMetadataFor(TextTransform, 'TextTransform', classMeta, Enum);
  setMetadataFor(UserSelect, 'UserSelect', classMeta, Enum);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta, CssValue);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta, Enum);
  setMetadataFor(WordBreak, 'WordBreak', classMeta, Enum);
  setMetadataFor(WordWrap, 'WordWrap', classMeta, Enum);
  setMetadataFor(StyleList, 'StyleList', classMeta);
  function put(key, value) {
    this.get_declarations_u0xo5e_k$().set_uzm4k4_k$(key, value);
  }
  setMetadataFor(StyledElement, 'StyledElement', interfaceMeta);
  setMetadataFor(CssProperty, 'CssProperty', classMeta);
  setMetadataFor(CssDeclarations, 'CssDeclarations', classMeta, VOID, [MutableMap]);
  setMetadataFor(TagSelector, 'TagSelector', classMeta);
  setMetadataFor(TagSelectorFactory, 'TagSelectorFactory', objectMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Animations, 'Animations', classMeta, StyleList);
  setMetadataFor(AnimationDirection, 'AnimationDirection', classMeta, Enum);
  setMetadataFor(FillMode, 'FillMode', classMeta, Enum);
  setMetadataFor(PlayState, 'PlayState', classMeta, Enum);
  setMetadataFor(Animation, 'Animation', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(IterationCount, 'IterationCount', classMeta, CssValue);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(AspectRatio, 'AspectRatio', classMeta, CssValue);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(BoxShadows, 'BoxShadows', classMeta, StyleList);
  setMetadataFor(BoxShadow, 'BoxShadow', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(LineHeight, 'LineHeight', classMeta, CssValue);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(TextDecoration, 'TextDecoration', classMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta, Enum);
  setMetadataFor(TextDecorationStyle, 'TextDecorationStyle', classMeta, Enum);
  setMetadataFor(Time, 'Time', classMeta, CssValue);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(Timing, 'Timing', classMeta, CssValue);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(Transforms, 'Transforms', classMeta, StyleList);
  setMetadataFor(Transform, 'Transform', classMeta);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(Transitions, 'Transitions', classMeta, StyleList);
  setMetadataFor(Transition, 'Transition', classMeta);
  //endregion
  function get_CAPITAL_LETTER() {
    _init_properties_Extensions_kt__653eno();
    return CAPITAL_LETTER;
  }
  var CAPITAL_LETTER;
  function hyphenize(_this__u8e3s4) {
    _init_properties_Extensions_kt__653eno();
    var tmp$ret$0;
    // Inline function 'kotlin.text.replace' call
    var tmp0_replace = get_CAPITAL_LETTER();
    var tmp1_replace = hyphenize$lambda;
    tmp$ret$0 = tmp0_replace.replace_8a09nm_k$(_this__u8e3s4, tmp1_replace);
    return tmp$ret$0;
  }
  function times(_this__u8e3s4, n) {
    _init_properties_Extensions_kt__653eno();
    return repeat(_this__u8e3s4, n);
  }
  function hyphenize$lambda(it) {
    _init_properties_Extensions_kt__653eno();
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = it.get_value_j01efc_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    return '-' + tmp$ret$1;
  }
  var properties_initialized_Extensions_kt_3mm1re;
  function _init_properties_Extensions_kt__653eno() {
    if (properties_initialized_Extensions_kt_3mm1re) {
    } else {
      properties_initialized_Extensions_kt_3mm1re = true;
      CAPITAL_LETTER = Regex_init_$Create$('[A-Z]');
    }
  }
  function Companion() {
    Companion_instance = this;
    this.none_1 = new LinearDimension('none');
    this.auto_1 = new LinearDimension('auto');
    this.initial_1 = new LinearDimension('initial');
    this.inherit_1 = new LinearDimension('inherit');
    this.available_1 = new LinearDimension('available');
    this.fillAvailable_1 = new LinearDimension('fill-available');
    this.borderBox_1 = new LinearDimension('border-box');
    this.contentBox_1 = new LinearDimension('content-box');
    this.maxContent_1 = new LinearDimension('max-content');
    this.minContent_1 = new LinearDimension('min-content');
    this.fitContent_1 = new LinearDimension('fit-content');
  }
  protoOf(Companion).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  protoOf(Companion).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  protoOf(Companion).get_initial_xhjoez_k$ = function () {
    return this.initial_1;
  };
  protoOf(Companion).get_inherit_xgqhw2_k$ = function () {
    return this.inherit_1;
  };
  protoOf(Companion).get_available_3mf9b4_k$ = function () {
    return this.available_1;
  };
  protoOf(Companion).get_fillAvailable_o3krj1_k$ = function () {
    return this.fillAvailable_1;
  };
  protoOf(Companion).get_borderBox_bs1r9y_k$ = function () {
    return this.borderBox_1;
  };
  protoOf(Companion).get_contentBox_fsre91_k$ = function () {
    return this.contentBox_1;
  };
  protoOf(Companion).get_maxContent_ez72f2_k$ = function () {
    return this.maxContent_1;
  };
  protoOf(Companion).get_minContent_f65gog_k$ = function () {
    return this.minContent_1;
  };
  protoOf(Companion).get_fitContent_wkr0pb_k$ = function () {
    return this.fitContent_1;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _get_valueCalcSafe__v9ghsu($this) {
    return $this.get_value_j01efc_k$() === '0' ? '0px' : $this.get_value_j01efc_k$();
  }
  function LinearDimension(value) {
    Companion_getInstance();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(LinearDimension).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  protoOf(LinearDimension).unaryMinus_6uz0qp_k$ = function () {
    var tmp;
    if (startsWith_0(this.get_value_j01efc_k$(), _Char___init__impl__6a9atx(45))) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = this.get_value_j01efc_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_substring;
      tmp$ret$1 = tmp$ret$0.substring(1);
      tmp = tmp$ret$1;
    } else if (startsWith(this.get_value_j01efc_k$(), 'calc')) {
      tmp = 'calc(0px - ' + this.get_value_j01efc_k$() + ')';
    } else if (this.get_value_j01efc_k$() === '0') {
      tmp = this.get_value_j01efc_k$();
    } else {
      tmp = '-' + this.get_value_j01efc_k$();
    }
    return new LinearDimension(tmp);
  };
  protoOf(LinearDimension).plus_fsdrcq_k$ = function (other) {
    return new LinearDimension('calc(' + _get_valueCalcSafe__v9ghsu(this) + ' + ' + _get_valueCalcSafe__v9ghsu(other) + ')');
  };
  protoOf(LinearDimension).minus_h9vd74_k$ = function (other) {
    return new LinearDimension('calc(' + _get_valueCalcSafe__v9ghsu(this) + ' - ' + _get_valueCalcSafe__v9ghsu(other) + ')');
  };
  protoOf(LinearDimension).times_rs2zel_k$ = function (times) {
    return new LinearDimension('calc(' + _get_valueCalcSafe__v9ghsu(this) + ' * ' + toString(times) + ')');
  };
  protoOf(LinearDimension).div_mgox54_k$ = function (times) {
    return new LinearDimension('calc(' + _get_valueCalcSafe__v9ghsu(this) + ' / ' + toString(times) + ')');
  };
  protoOf(LinearDimension).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof LinearDimension)
      other;
    else
      THROW_CCE();
    return this.get_value_j01efc_k$() === other.get_value_j01efc_k$();
  };
  protoOf(LinearDimension).hashCode = function () {
    return getStringHashCode(this.get_value_j01efc_k$());
  };
  function get_ZERO() {
    return ZERO;
  }
  var ZERO;
  var Align_initial_instance;
  var Align_inherit_instance;
  var Align_unset_instance;
  var Align_auto_instance;
  var Align_stretch_instance;
  var Align_center_instance;
  var Align_start_instance;
  var Align_end_instance;
  var Align_selfStart_instance;
  var Align_selfEnd_instance;
  var Align_flexStart_instance;
  var Align_flexEnd_instance;
  var Align_baseline_instance;
  function values() {
    return [Align_initial_getInstance(), Align_inherit_getInstance(), Align_unset_getInstance(), Align_auto_getInstance(), Align_stretch_getInstance(), Align_center_getInstance(), Align_start_getInstance(), Align_end_getInstance(), Align_selfStart_getInstance(), Align_selfEnd_getInstance(), Align_flexStart_getInstance(), Align_flexEnd_getInstance(), Align_baseline_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'initial':
        return Align_initial_getInstance();
      case 'inherit':
        return Align_inherit_getInstance();
      case 'unset':
        return Align_unset_getInstance();
      case 'auto':
        return Align_auto_getInstance();
      case 'stretch':
        return Align_stretch_getInstance();
      case 'center':
        return Align_center_getInstance();
      case 'start':
        return Align_start_getInstance();
      case 'end':
        return Align_end_getInstance();
      case 'selfStart':
        return Align_selfStart_getInstance();
      case 'selfEnd':
        return Align_selfEnd_getInstance();
      case 'flexStart':
        return Align_flexStart_getInstance();
      case 'flexEnd':
        return Align_flexEnd_getInstance();
      case 'baseline':
        return Align_baseline_getInstance();
      default:
        Align_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Align_entriesInitialized;
  function Align_initEntries() {
    if (Align_entriesInitialized)
      return Unit_getInstance();
    Align_entriesInitialized = true;
    Align_initial_instance = new Align('initial', 0);
    Align_inherit_instance = new Align('inherit', 1);
    Align_unset_instance = new Align('unset', 2);
    Align_auto_instance = new Align('auto', 3);
    Align_stretch_instance = new Align('stretch', 4);
    Align_center_instance = new Align('center', 5);
    Align_start_instance = new Align('start', 6);
    Align_end_instance = new Align('end', 7);
    Align_selfStart_instance = new Align('selfStart', 8);
    Align_selfEnd_instance = new Align('selfEnd', 9);
    Align_flexStart_instance = new Align('flexStart', 10);
    Align_flexEnd_instance = new Align('flexEnd', 11);
    Align_baseline_instance = new Align('baseline', 12);
  }
  function Align(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Align).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var Appearance_none_instance;
  var Appearance_auto_instance;
  var Appearance_menulistButton_instance;
  var Appearance_textfield_instance;
  var Appearance_button_instance;
  var Appearance_searchfield_instance;
  var Appearance_textarea_instance;
  var Appearance_pushButton_instance;
  var Appearance_sliderHorizontal_instance;
  var Appearance_checkbox_instance;
  var Appearance_radio_instance;
  var Appearance_squareButton_instance;
  var Appearance_menulist_instance;
  var Appearance_listbox_instance;
  var Appearance_meter_instance;
  var Appearance_progressBar_instance;
  function values_0() {
    return [Appearance_none_getInstance(), Appearance_auto_getInstance(), Appearance_menulistButton_getInstance(), Appearance_textfield_getInstance(), Appearance_button_getInstance(), Appearance_searchfield_getInstance(), Appearance_textarea_getInstance(), Appearance_pushButton_getInstance(), Appearance_sliderHorizontal_getInstance(), Appearance_checkbox_getInstance(), Appearance_radio_getInstance(), Appearance_squareButton_getInstance(), Appearance_menulist_getInstance(), Appearance_listbox_getInstance(), Appearance_meter_getInstance(), Appearance_progressBar_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'none':
        return Appearance_none_getInstance();
      case 'auto':
        return Appearance_auto_getInstance();
      case 'menulistButton':
        return Appearance_menulistButton_getInstance();
      case 'textfield':
        return Appearance_textfield_getInstance();
      case 'button':
        return Appearance_button_getInstance();
      case 'searchfield':
        return Appearance_searchfield_getInstance();
      case 'textarea':
        return Appearance_textarea_getInstance();
      case 'pushButton':
        return Appearance_pushButton_getInstance();
      case 'sliderHorizontal':
        return Appearance_sliderHorizontal_getInstance();
      case 'checkbox':
        return Appearance_checkbox_getInstance();
      case 'radio':
        return Appearance_radio_getInstance();
      case 'squareButton':
        return Appearance_squareButton_getInstance();
      case 'menulist':
        return Appearance_menulist_getInstance();
      case 'listbox':
        return Appearance_listbox_getInstance();
      case 'meter':
        return Appearance_meter_getInstance();
      case 'progressBar':
        return Appearance_progressBar_getInstance();
      default:
        Appearance_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Appearance_entriesInitialized;
  function Appearance_initEntries() {
    if (Appearance_entriesInitialized)
      return Unit_getInstance();
    Appearance_entriesInitialized = true;
    Appearance_none_instance = new Appearance('none', 0);
    Appearance_auto_instance = new Appearance('auto', 1);
    Appearance_menulistButton_instance = new Appearance('menulistButton', 2);
    Appearance_textfield_instance = new Appearance('textfield', 3);
    Appearance_button_instance = new Appearance('button', 4);
    Appearance_searchfield_instance = new Appearance('searchfield', 5);
    Appearance_textarea_instance = new Appearance('textarea', 6);
    Appearance_pushButton_instance = new Appearance('pushButton', 7);
    Appearance_sliderHorizontal_instance = new Appearance('sliderHorizontal', 8);
    Appearance_checkbox_instance = new Appearance('checkbox', 9);
    Appearance_radio_instance = new Appearance('radio', 10);
    Appearance_squareButton_instance = new Appearance('squareButton', 11);
    Appearance_menulist_instance = new Appearance('menulist', 12);
    Appearance_listbox_instance = new Appearance('listbox', 13);
    Appearance_meter_instance = new Appearance('meter', 14);
    Appearance_progressBar_instance = new Appearance('progressBar', 15);
  }
  function Appearance(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Appearance).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var Visibility_initial_instance;
  var Visibility_inherit_instance;
  var Visibility_unset_instance;
  var Visibility_visible_instance;
  var Visibility_hidden_instance;
  var Visibility_collapse_instance;
  function values_1() {
    return [Visibility_initial_getInstance(), Visibility_inherit_getInstance(), Visibility_unset_getInstance(), Visibility_visible_getInstance(), Visibility_hidden_getInstance(), Visibility_collapse_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'initial':
        return Visibility_initial_getInstance();
      case 'inherit':
        return Visibility_inherit_getInstance();
      case 'unset':
        return Visibility_unset_getInstance();
      case 'visible':
        return Visibility_visible_getInstance();
      case 'hidden':
        return Visibility_hidden_getInstance();
      case 'collapse':
        return Visibility_collapse_getInstance();
      default:
        Visibility_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Visibility_entriesInitialized;
  function Visibility_initEntries() {
    if (Visibility_entriesInitialized)
      return Unit_getInstance();
    Visibility_entriesInitialized = true;
    Visibility_initial_instance = new Visibility('initial', 0);
    Visibility_inherit_instance = new Visibility('inherit', 1);
    Visibility_unset_instance = new Visibility('unset', 2);
    Visibility_visible_instance = new Visibility('visible', 3);
    Visibility_hidden_instance = new Visibility('hidden', 4);
    Visibility_collapse_instance = new Visibility('collapse', 5);
  }
  function Visibility(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var BackgroundAttachment_initial_instance;
  var BackgroundAttachment_inherit_instance;
  var BackgroundAttachment_unset_instance;
  var BackgroundAttachment_scroll_instance;
  var BackgroundAttachment_fixed_instance;
  var BackgroundAttachment_local_instance;
  function values_2() {
    return [BackgroundAttachment_initial_getInstance(), BackgroundAttachment_inherit_getInstance(), BackgroundAttachment_unset_getInstance(), BackgroundAttachment_scroll_getInstance(), BackgroundAttachment_fixed_getInstance(), BackgroundAttachment_local_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'initial':
        return BackgroundAttachment_initial_getInstance();
      case 'inherit':
        return BackgroundAttachment_inherit_getInstance();
      case 'unset':
        return BackgroundAttachment_unset_getInstance();
      case 'scroll':
        return BackgroundAttachment_scroll_getInstance();
      case 'fixed':
        return BackgroundAttachment_fixed_getInstance();
      case 'local':
        return BackgroundAttachment_local_getInstance();
      default:
        BackgroundAttachment_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BackgroundAttachment_entriesInitialized;
  function BackgroundAttachment_initEntries() {
    if (BackgroundAttachment_entriesInitialized)
      return Unit_getInstance();
    BackgroundAttachment_entriesInitialized = true;
    BackgroundAttachment_initial_instance = new BackgroundAttachment('initial', 0);
    BackgroundAttachment_inherit_instance = new BackgroundAttachment('inherit', 1);
    BackgroundAttachment_unset_instance = new BackgroundAttachment('unset', 2);
    BackgroundAttachment_scroll_instance = new BackgroundAttachment('scroll', 3);
    BackgroundAttachment_fixed_instance = new BackgroundAttachment('fixed', 4);
    BackgroundAttachment_local_instance = new BackgroundAttachment('local', 5);
  }
  function BackgroundAttachment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var BackgroundClip_initial_instance;
  var BackgroundClip_inherit_instance;
  var BackgroundClip_unset_instance;
  var BackgroundClip_borderBox_instance;
  var BackgroundClip_paddingBox_instance;
  var BackgroundClip_contentBox_instance;
  var BackgroundClip_text_instance;
  function values_3() {
    return [BackgroundClip_initial_getInstance(), BackgroundClip_inherit_getInstance(), BackgroundClip_unset_getInstance(), BackgroundClip_borderBox_getInstance(), BackgroundClip_paddingBox_getInstance(), BackgroundClip_contentBox_getInstance(), BackgroundClip_text_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'initial':
        return BackgroundClip_initial_getInstance();
      case 'inherit':
        return BackgroundClip_inherit_getInstance();
      case 'unset':
        return BackgroundClip_unset_getInstance();
      case 'borderBox':
        return BackgroundClip_borderBox_getInstance();
      case 'paddingBox':
        return BackgroundClip_paddingBox_getInstance();
      case 'contentBox':
        return BackgroundClip_contentBox_getInstance();
      case 'text':
        return BackgroundClip_text_getInstance();
      default:
        BackgroundClip_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BackgroundClip_entriesInitialized;
  function BackgroundClip_initEntries() {
    if (BackgroundClip_entriesInitialized)
      return Unit_getInstance();
    BackgroundClip_entriesInitialized = true;
    BackgroundClip_initial_instance = new BackgroundClip('initial', 0);
    BackgroundClip_inherit_instance = new BackgroundClip('inherit', 1);
    BackgroundClip_unset_instance = new BackgroundClip('unset', 2);
    BackgroundClip_borderBox_instance = new BackgroundClip('borderBox', 3);
    BackgroundClip_paddingBox_instance = new BackgroundClip('paddingBox', 4);
    BackgroundClip_contentBox_instance = new BackgroundClip('contentBox', 5);
    BackgroundClip_text_instance = new BackgroundClip('text', 6);
  }
  function BackgroundClip(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(BackgroundClip).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  function _get_HSLA_REGEX__fy6jkz($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = HSLA_REGEX$factory();
    tmp$ret$0 = $this.HSLA_REGEX$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_RGBA_REGEX__eceqfl($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = RGBA_REGEX$factory();
    tmp$ret$0 = $this.RGBA_REGEX$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function Color$Companion$HSLA_REGEX$delegate$lambda() {
    return Regex_init_$Create$_0('^hsla?\\((-?[0-9]+\\.?[0-9]*(?:deg|grad|rad|turn)?)\\s*[, ]?\\s*(\\d{1,3})%\\s*[, ]\\s*(\\d{1,3})%\\s*[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$', RegexOption_IGNORE_CASE_getInstance());
  }
  function Color$Companion$RGBA_REGEX$delegate$lambda() {
    return Regex_init_$Create$_0('^rgba?\\((\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$', RegexOption_IGNORE_CASE_getInstance());
  }
  function asRGBA$hueToRGB(m1, m2, h) {
    var hu = h < 0.0 ? h + 1 : h > 1.0 ? h - 1 : h;
    return hu < 0.16666666666666666 ? m1 + (m2 - m1) * 6 * hu : hu < 0.5 ? m2 : hu < 0.6666666666666666 ? m1 + (m2 - m1) * 6 * (0.6666666666666666 - hu) : m1;
  }
  function _set_rgb__4wddy0($this, _set____db54di) {
    $this.rgb_1 = _set____db54di;
  }
  function _get_rgb__e6fz38($this) {
    return $this.rgb_1;
  }
  function Color_init_$Init$(value, rgb, $this) {
    Color.call($this, value);
    $this.rgb_1 = rgb;
    return $this;
  }
  function Color_init_$Create$(value, rgb) {
    return Color_init_$Init$(value, rgb, objectCreate(protoOf(Color)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.initial_1 = new Color('initial');
    this.inherit_1 = new Color('inherit');
    this.unset_1 = new Color('unset');
    this.transparent_1 = new Color('transparent');
    this.currentColor_1 = new Color('currentColor');
    this.aliceBlue_1 = Color_init_$Create$('aliceblue', '#f0f8ff');
    this.antiqueWhite_1 = Color_init_$Create$('antiquewhite', '#faebd7');
    this.aqua_1 = Color_init_$Create$('aqua', '#00ffff');
    this.aquamarine_1 = Color_init_$Create$('aquamarine', '#7fffd4');
    this.azure_1 = Color_init_$Create$('azure', '#f0ffff');
    this.beige_1 = Color_init_$Create$('beige', '#f5f5dc');
    this.bisque_1 = Color_init_$Create$('bisque', '#ffe4c4');
    this.black_1 = Color_init_$Create$('black', '#000000');
    this.blanchedAlmond_1 = Color_init_$Create$('blanchedalmond', '#ffebcd');
    this.blue_1 = Color_init_$Create$('blue', '#0000ff');
    this.blueViolet_1 = Color_init_$Create$('blueviolet', '#8a2be2');
    this.brown_1 = Color_init_$Create$('brown', '#a52a2a');
    this.burlyWood_1 = Color_init_$Create$('burlywood', '#deb887');
    this.cadetBlue_1 = Color_init_$Create$('cadetblue', '#5f9ea0');
    this.chartreuse_1 = Color_init_$Create$('chartreuse', '#7fff00');
    this.chocolate_1 = Color_init_$Create$('chocolate', '#d2691e');
    this.coral_1 = Color_init_$Create$('coral', '#ff7f50');
    this.cornflowerBlue_1 = Color_init_$Create$('cornflowerblue', '#6495ed');
    this.cornsilk_1 = Color_init_$Create$('cornsilk', '#fff8dc');
    this.crimson_1 = Color_init_$Create$('crimson', '#dc143c');
    this.cyan_1 = Color_init_$Create$('cyan', '#00ffff');
    this.darkBlue_1 = Color_init_$Create$('darkblue', '#00008b');
    this.darkCyan_1 = Color_init_$Create$('darkcyan', '#008b8b');
    this.darkGoldenrod_1 = Color_init_$Create$('darkgoldenrod', '#b8860b');
    this.darkGray_1 = Color_init_$Create$('darkgray', '#a9a9a9');
    this.darkGreen_1 = Color_init_$Create$('darkgreen', '#006400');
    this.darkGrey_1 = Color_init_$Create$('darkgrey', '#a9a9a9');
    this.darkKhaki_1 = Color_init_$Create$('darkkhaki', '#bdb76b');
    this.darkMagenta_1 = Color_init_$Create$('darkmagenta', '#8b008b');
    this.darkOliveGreen_1 = Color_init_$Create$('darkolivegreen', '#556b2f');
    this.darkOrange_1 = Color_init_$Create$('darkorange', '#ff8c00');
    this.darkOrchid_1 = Color_init_$Create$('darkorchid', '#9932cc');
    this.darkRed_1 = Color_init_$Create$('darkred', '#8b0000');
    this.darkSalmon_1 = Color_init_$Create$('darksalmon', '#e9967a');
    this.darkSeaGreen_1 = Color_init_$Create$('darkseagreen', '#8fbc8f');
    this.darkSlateBlue_1 = Color_init_$Create$('darkslateblue', '#483d8b');
    this.darkSlateGray_1 = Color_init_$Create$('darkslategray', '#2f4f4f');
    this.darkSlateGrey_1 = Color_init_$Create$('darkslategrey', '#2f4f4f');
    this.darkTurquoise_1 = Color_init_$Create$('darkturquoise', '#00ced1');
    this.darkViolet_1 = Color_init_$Create$('darkviolet', '#9400d3');
    this.deepPink_1 = Color_init_$Create$('deeppink', '#ff1493');
    this.deepSkyBlue_1 = Color_init_$Create$('deepskyblue', '#00bfff');
    this.dimGray_1 = Color_init_$Create$('dimgray', '#696969');
    this.dimGrey_1 = Color_init_$Create$('dimgrey', '#696969');
    this.dodgerBlue_1 = Color_init_$Create$('dodgerblue', '#1e90ff');
    this.firebrick_1 = Color_init_$Create$('firebrick', '#b22222');
    this.floralWhite_1 = Color_init_$Create$('floralwhite', '#fffaf0');
    this.forestGreen_1 = Color_init_$Create$('forestgreen', '#228b22');
    this.fuchsia_1 = Color_init_$Create$('fuchsia', '#ff00ff');
    this.gainsboro_1 = Color_init_$Create$('gainsboro', '#dcdcdc');
    this.ghostWhite_1 = Color_init_$Create$('ghostwhite', '#f8f8ff');
    this.gold_1 = Color_init_$Create$('gold', '#ffd700');
    this.goldenrod_1 = Color_init_$Create$('goldenrod', '#daa520');
    this.gray_1 = Color_init_$Create$('gray', '#808080');
    this.green_1 = Color_init_$Create$('green', '#008000');
    this.greenYellow_1 = Color_init_$Create$('greenyellow', '#adff2f');
    this.grey_1 = Color_init_$Create$('grey', '#808080');
    this.honeydew_1 = Color_init_$Create$('honeydew', '#f0fff0');
    this.hotPink_1 = Color_init_$Create$('hotpink', '#ff69b4');
    this.indianRed_1 = Color_init_$Create$('indianred', '#cd5c5c');
    this.indigo_1 = Color_init_$Create$('indigo', '#4b0082');
    this.ivory_1 = Color_init_$Create$('ivory', '#fffff0');
    this.khaki_1 = Color_init_$Create$('khaki', '#f0e68c');
    this.lavender_1 = Color_init_$Create$('lavender', '#e6e6fa');
    this.lavenderBlush_1 = Color_init_$Create$('lavenderblush', '#fff0f5');
    this.lawnGreen_1 = Color_init_$Create$('lawngreen', '#7cfc00');
    this.lemonChiffon_1 = Color_init_$Create$('lemonchiffon', '#fffacd');
    this.lightBlue_1 = Color_init_$Create$('lightblue', '#add8e6');
    this.lightCoral_1 = Color_init_$Create$('lightcoral', '#f08080');
    this.lightCyan_1 = Color_init_$Create$('lightcyan', '#e0ffff');
    this.lightGoldenrodYellow_1 = Color_init_$Create$('lightgoldenrodyellow', '#fafad2');
    this.lightGray_1 = Color_init_$Create$('lightgray', '#d3d3d3');
    this.lightGreen_1 = Color_init_$Create$('lightgreen', '#90ee90');
    this.lightGrey_1 = Color_init_$Create$('lightgrey', '#d3d3d3');
    this.lightPink_1 = Color_init_$Create$('lightpink', '#ffb6c1');
    this.lightSalmon_1 = Color_init_$Create$('lightsalmon', '#ffa07a');
    this.lightSeaGreen_1 = Color_init_$Create$('lightseagreen', '#20b2aa');
    this.lightSkyBlue_1 = Color_init_$Create$('lightskyblue', '#87cefa');
    this.lightSlateGray_1 = Color_init_$Create$('lightslategray', '#778899');
    this.lightSlateGrey_1 = Color_init_$Create$('lightslategrey', '#778899');
    this.lightSteelBlue_1 = Color_init_$Create$('lightsteelblue', '#b0c4de');
    this.lightYellow_1 = Color_init_$Create$('lightyellow', '#ffffe0');
    this.lime_1 = Color_init_$Create$('lime', '#00ff00');
    this.limeGreen_1 = Color_init_$Create$('limegreen', '#32cd32');
    this.linen_1 = Color_init_$Create$('linen', '#faf0e6');
    this.magenta_1 = Color_init_$Create$('magenta', '#ff00ff');
    this.maroon_1 = Color_init_$Create$('maroon', '#800000');
    this.mediumAquamarine_1 = Color_init_$Create$('mediumaquamarine', '#66cdaa');
    this.mediumBlue_1 = Color_init_$Create$('mediumblue', '#0000cd');
    this.mediumOrchid_1 = Color_init_$Create$('mediumorchid', '#ba55d3');
    this.mediumPurple_1 = Color_init_$Create$('mediumpurple', '#9370d8');
    this.mediumSeaGreen_1 = Color_init_$Create$('mediumseagreen', '#3cb371');
    this.mediumSlateBlue_1 = Color_init_$Create$('mediumslateblue', '#7b68ee');
    this.mediumSpringGreen_1 = Color_init_$Create$('mediumspringgreen', '#00fa9a');
    this.mediumTurquoise_1 = Color_init_$Create$('mediumturquoise', '#48d1cc');
    this.mediumVioletRed_1 = Color_init_$Create$('mediumvioletred', '#c71585');
    this.midnightBlue_1 = Color_init_$Create$('midnightblue', '#191970');
    this.mintCream_1 = Color_init_$Create$('mintcream', '#f5fffa');
    this.mistyRose_1 = Color_init_$Create$('mistyrose', '#ffe4e1');
    this.moccasin_1 = Color_init_$Create$('moccasin', '#ffe4b5');
    this.navajoWhite_1 = Color_init_$Create$('navajowhite', '#ffdead');
    this.navy_1 = Color_init_$Create$('navy', '#000080');
    this.oldLace_1 = Color_init_$Create$('oldlace', '#fdf5e6');
    this.olive_1 = Color_init_$Create$('olive', '#808000');
    this.oliveDrab_1 = Color_init_$Create$('olivedrab', '#6b8e23');
    this.orange_1 = Color_init_$Create$('orange', '#ffa500');
    this.orangeRed_1 = Color_init_$Create$('orangered', '#ff4500');
    this.orchid_1 = Color_init_$Create$('orchid', '#da70d6');
    this.paleGoldenrod_1 = Color_init_$Create$('palegoldenrod', '#eee8aa');
    this.paleGreen_1 = Color_init_$Create$('palegreen', '#98fb98');
    this.paleTurquoise_1 = Color_init_$Create$('paleturquoise', '#afeeee');
    this.paleVioletRed_1 = Color_init_$Create$('palevioletred', '#db7093');
    this.papayaWhip_1 = Color_init_$Create$('papayawhip', '#ffefd5');
    this.peachPuff_1 = Color_init_$Create$('peachpuff', '#ffdab9');
    this.peru_1 = Color_init_$Create$('peru', '#cd853f');
    this.pink_1 = Color_init_$Create$('pink', '#ffc0cb');
    this.plum_1 = Color_init_$Create$('plum', '#dda0dd');
    this.powderBlue_1 = Color_init_$Create$('powderblue', '#b0e0e6');
    this.purple_1 = Color_init_$Create$('purple', '#800080');
    this.red_1 = Color_init_$Create$('red', '#ff0000');
    this.rosyBrown_1 = Color_init_$Create$('rosybrown', '#bc8f8f');
    this.royalBlue_1 = Color_init_$Create$('royalblue', '#4169e1');
    this.saddleBrown_1 = Color_init_$Create$('saddlebrown', '#8b4513');
    this.salmon_1 = Color_init_$Create$('salmon', '#fa8072');
    this.sandyBrown_1 = Color_init_$Create$('sandybrown', '#f4a460');
    this.seaGreen_1 = Color_init_$Create$('seagreen', '#2e8b57');
    this.seaShell_1 = Color_init_$Create$('seashell', '#fff5ee');
    this.sienna_1 = Color_init_$Create$('sienna', '#a0522d');
    this.silver_1 = Color_init_$Create$('silver', '#c0c0c0');
    this.skyBlue_1 = Color_init_$Create$('skyblue', '#87ceeb');
    this.slateBlue_1 = Color_init_$Create$('slateblue', '#6a5acd');
    this.slateGray_1 = Color_init_$Create$('slategray', '#708090');
    this.slateGrey_1 = Color_init_$Create$('slategrey', '#708090');
    this.snow_1 = Color_init_$Create$('snow', '#fffafa');
    this.springGreen_1 = Color_init_$Create$('springgreen', '#00ff7f');
    this.steelBlue_1 = Color_init_$Create$('steelblue', '#4682b4');
    this.tan_1 = Color_init_$Create$('tan', '#d2b48c');
    this.teal_1 = Color_init_$Create$('teal', '#008080');
    this.thistle_1 = Color_init_$Create$('thistle', '#d8bfd8');
    this.tomato_1 = Color_init_$Create$('tomato', '#ff6347');
    this.turquoise_1 = Color_init_$Create$('turquoise', '#40e0d0');
    this.violet_1 = Color_init_$Create$('violet', '#ee82ee');
    this.wheat_1 = Color_init_$Create$('wheat', '#f5deb3');
    this.white_1 = Color_init_$Create$('white', '#ffffff');
    this.whiteSmoke_1 = Color_init_$Create$('whitesmoke', '#f5f5f5');
    this.yellow_1 = Color_init_$Create$('yellow', '#ffff00');
    this.yellowGreen_1 = Color_init_$Create$('yellowgreen', '#9acd32');
    var tmp = this;
    tmp.HSLA_REGEX$delegate_1 = lazy(Color$Companion$HSLA_REGEX$delegate$lambda);
    var tmp_0 = this;
    tmp_0.RGBA_REGEX$delegate_1 = lazy(Color$Companion$RGBA_REGEX$delegate$lambda);
  }
  protoOf(Companion_0).get_initial_xhjoez_k$ = function () {
    return this.initial_1;
  };
  protoOf(Companion_0).get_inherit_xgqhw2_k$ = function () {
    return this.inherit_1;
  };
  protoOf(Companion_0).get_unset_izq1hc_k$ = function () {
    return this.unset_1;
  };
  protoOf(Companion_0).get_transparent_enj387_k$ = function () {
    return this.transparent_1;
  };
  protoOf(Companion_0).get_currentColor_semt9v_k$ = function () {
    return this.currentColor_1;
  };
  protoOf(Companion_0).get_aliceBlue_zbxhnz_k$ = function () {
    return this.aliceBlue_1;
  };
  protoOf(Companion_0).get_antiqueWhite_d3y0er_k$ = function () {
    return this.antiqueWhite_1;
  };
  protoOf(Companion_0).get_aqua_woizut_k$ = function () {
    return this.aqua_1;
  };
  protoOf(Companion_0).get_aquamarine_jqard_k$ = function () {
    return this.aquamarine_1;
  };
  protoOf(Companion_0).get_azure_ioxv8m_k$ = function () {
    return this.azure_1;
  };
  protoOf(Companion_0).get_beige_ip3zy3_k$ = function () {
    return this.beige_1;
  };
  protoOf(Companion_0).get_bisque_bfxany_k$ = function () {
    return this.bisque_1;
  };
  protoOf(Companion_0).get_black_ip8aty_k$ = function () {
    return this.black_1;
  };
  protoOf(Companion_0).get_blanchedAlmond_ibk3vr_k$ = function () {
    return this.blanchedAlmond_1;
  };
  protoOf(Companion_0).get_blue_wojj4z_k$ = function () {
    return this.blue_1;
  };
  protoOf(Companion_0).get_blueViolet_jhlzwe_k$ = function () {
    return this.blueViolet_1;
  };
  protoOf(Companion_0).get_brown_ipcfm5_k$ = function () {
    return this.brown_1;
  };
  protoOf(Companion_0).get_burlyWood_oan0k0_k$ = function () {
    return this.burlyWood_1;
  };
  protoOf(Companion_0).get_cadetBlue_cu4dhi_k$ = function () {
    return this.cadetBlue_1;
  };
  protoOf(Companion_0).get_chartreuse_9n36cf_k$ = function () {
    return this.chartreuse_1;
  };
  protoOf(Companion_0).get_chocolate_jw6x03_k$ = function () {
    return this.chocolate_1;
  };
  protoOf(Companion_0).get_coral_ipucy0_k$ = function () {
    return this.coral_1;
  };
  protoOf(Companion_0).get_cornflowerBlue_amajui_k$ = function () {
    return this.cornflowerBlue_1;
  };
  protoOf(Companion_0).get_cornsilk_vnj6x2_k$ = function () {
    return this.cornsilk_1;
  };
  protoOf(Companion_0).get_crimson_icc9h2_k$ = function () {
    return this.crimson_1;
  };
  protoOf(Companion_0).get_cyan_wokfak_k$ = function () {
    return this.cyan_1;
  };
  protoOf(Companion_0).get_darkBlue_30osw7_k$ = function () {
    return this.darkBlue_1;
  };
  protoOf(Companion_0).get_darkCyan_30nwqm_k$ = function () {
    return this.darkCyan_1;
  };
  protoOf(Companion_0).get_darkGoldenrod_paz0m9_k$ = function () {
    return this.darkGoldenrod_1;
  };
  protoOf(Companion_0).get_darkGray_30lhz2_k$ = function () {
    return this.darkGray_1;
  };
  protoOf(Companion_0).get_darkGreen_mhecn0_k$ = function () {
    return this.darkGreen_1;
  };
  protoOf(Companion_0).get_darkGrey_30lhvm_k$ = function () {
    return this.darkGrey_1;
  };
  protoOf(Companion_0).get_darkKhaki_mfdmyl_k$ = function () {
    return this.darkKhaki_1;
  };
  protoOf(Companion_0).get_darkMagenta_418ys6_k$ = function () {
    return this.darkMagenta_1;
  };
  protoOf(Companion_0).get_darkOliveGreen_olwr2f_k$ = function () {
    return this.darkOliveGreen_1;
  };
  protoOf(Companion_0).get_darkOrange_h429ql_k$ = function () {
    return this.darkOrange_1;
  };
  protoOf(Companion_0).get_darkOrchid_h43fb6_k$ = function () {
    return this.darkOrchid_1;
  };
  protoOf(Companion_0).get_darkRed_p3v5n6_k$ = function () {
    return this.darkRed_1;
  };
  protoOf(Companion_0).get_darkSalmon_ir39jh_k$ = function () {
    return this.darkSalmon_1;
  };
  protoOf(Companion_0).get_darkSeaGreen_w8snv7_k$ = function () {
    return this.darkSeaGreen_1;
  };
  protoOf(Companion_0).get_darkSlateBlue_eweems_k$ = function () {
    return this.darkSlateBlue_1;
  };
  protoOf(Companion_0).get_darkSlateGray_ewhpjx_k$ = function () {
    return this.darkSlateGray_1;
  };
  protoOf(Companion_0).get_darkSlateGrey_ewhpnd_k$ = function () {
    return this.darkSlateGrey_1;
  };
  protoOf(Companion_0).get_darkTurquoise_4foe72_k$ = function () {
    return this.darkTurquoise_1;
  };
  protoOf(Companion_0).get_darkViolet_kaodge_k$ = function () {
    return this.darkViolet_1;
  };
  protoOf(Companion_0).get_deepPink_lesyph_k$ = function () {
    return this.deepPink_1;
  };
  protoOf(Companion_0).get_deepSkyBlue_ujku6y_k$ = function () {
    return this.deepSkyBlue_1;
  };
  protoOf(Companion_0).get_dimGray_ssutya_k$ = function () {
    return this.dimGray_1;
  };
  protoOf(Companion_0).get_dimGrey_ssuu1q_k$ = function () {
    return this.dimGrey_1;
  };
  protoOf(Companion_0).get_dodgerBlue_u1af6_k$ = function () {
    return this.dodgerBlue_1;
  };
  protoOf(Companion_0).get_firebrick_3tq2w2_k$ = function () {
    return this.firebrick_1;
  };
  protoOf(Companion_0).get_floralWhite_6hcs1g_k$ = function () {
    return this.floralWhite_1;
  };
  protoOf(Companion_0).get_forestGreen_8exkt_k$ = function () {
    return this.forestGreen_1;
  };
  protoOf(Companion_0).get_fuchsia_7bu1aq_k$ = function () {
    return this.fuchsia_1;
  };
  protoOf(Companion_0).get_gainsboro_t2wzuz_k$ = function () {
    return this.gainsboro_1;
  };
  protoOf(Companion_0).get_ghostWhite_br8vj1_k$ = function () {
    return this.ghostWhite_1;
  };
  protoOf(Companion_0).get_gold_woms2x_k$ = function () {
    return this.gold_1;
  };
  protoOf(Companion_0).get_goldenrod_cnlggb_k$ = function () {
    return this.goldenrod_1;
  };
  protoOf(Companion_0).get_gray_womu24_k$ = function () {
    return this.gray_1;
  };
  protoOf(Companion_0).get_green_is36qi_k$ = function () {
    return this.green_1;
  };
  protoOf(Companion_0).get_greenYellow_kh8vf6_k$ = function () {
    return this.greenYellow_1;
  };
  protoOf(Companion_0).get_grey_womu5k_k$ = function () {
    return this.grey_1;
  };
  protoOf(Companion_0).get_honeydew_voejes_k$ = function () {
    return this.honeydew_1;
  };
  protoOf(Companion_0).get_hotPink_jflrwa_k$ = function () {
    return this.hotPink_1;
  };
  protoOf(Companion_0).get_indianRed_3a9tbj_k$ = function () {
    return this.indianRed_1;
  };
  protoOf(Companion_0).get_indigo_etpvbv_k$ = function () {
    return this.indigo_1;
  };
  protoOf(Companion_0).get_ivory_it9jls_k$ = function () {
    return this.ivory_1;
  };
  protoOf(Companion_0).get_khaki_iu3wex_k$ = function () {
    return this.khaki_1;
  };
  protoOf(Companion_0).get_lavender_gamgsw_k$ = function () {
    return this.lavender_1;
  };
  protoOf(Companion_0).get_lavenderBlush_wsa0r4_k$ = function () {
    return this.lavenderBlush_1;
  };
  protoOf(Companion_0).get_lawnGreen_qa5x9q_k$ = function () {
    return this.lawnGreen_1;
  };
  protoOf(Companion_0).get_lemonChiffon_vxbxev_k$ = function () {
    return this.lemonChiffon_1;
  };
  protoOf(Companion_0).get_lightBlue_jufopz_k$ = function () {
    return this.lightBlue_1;
  };
  protoOf(Companion_0).get_lightCoral_o1wk3g_k$ = function () {
    return this.lightCoral_1;
  };
  protoOf(Companion_0).get_lightCyan_jugkvk_k$ = function () {
    return this.lightCyan_1;
  };
  protoOf(Companion_0).get_lightGoldenrodYellow_1hcsjf_k$ = function () {
    return this.lightGoldenrodYellow_1;
  };
  protoOf(Companion_0).get_lightGray_juizn4_k$ = function () {
    return this.lightGray_1;
  };
  protoOf(Companion_0).get_lightGreen_nznqay_k$ = function () {
    return this.lightGreen_1;
  };
  protoOf(Companion_0).get_lightGrey_juizqk_k$ = function () {
    return this.lightGrey_1;
  };
  protoOf(Companion_0).get_lightPink_juok5f_k$ = function () {
    return this.lightPink_1;
  };
  protoOf(Companion_0).get_lightSalmon_ryzi2t_k$ = function () {
    return this.lightSalmon_1;
  };
  protoOf(Companion_0).get_lightSeaGreen_lo42kh_k$ = function () {
    return this.lightSeaGreen_1;
  };
  protoOf(Companion_0).get_lightSkyBlue_9udvgy_k$ = function () {
    return this.lightSkyBlue_1;
  };
  protoOf(Companion_0).get_lightSlateGray_ss8es1_k$ = function () {
    return this.lightSlateGray_1;
  };
  protoOf(Companion_0).get_lightSlateGrey_ss8eol_k$ = function () {
    return this.lightSlateGrey_1;
  };
  protoOf(Companion_0).get_lightSteelBlue_um0rzc_k$ = function () {
    return this.lightSteelBlue_1;
  };
  protoOf(Companion_0).get_lightYellow_p2im2n_k$ = function () {
    return this.lightYellow_1;
  };
  protoOf(Companion_0).get_lime_wopula_k$ = function () {
    return this.lime_1;
  };
  protoOf(Companion_0).get_limeGreen_yso805_k$ = function () {
    return this.limeGreen_1;
  };
  protoOf(Companion_0).get_linen_iuolht_k$ = function () {
    return this.linen_1;
  };
  protoOf(Companion_0).get_magenta_ez2mdc_k$ = function () {
    return this.magenta_1;
  };
  protoOf(Companion_0).get_maroon_gj03nd_k$ = function () {
    return this.maroon_1;
  };
  protoOf(Companion_0).get_mediumAquamarine_wa9kdg_k$ = function () {
    return this.mediumAquamarine_1;
  };
  protoOf(Companion_0).get_mediumBlue_lkek8o_k$ = function () {
    return this.mediumBlue_1;
  };
  protoOf(Companion_0).get_mediumOrchid_93l7pb_k$ = function () {
    return this.mediumOrchid_1;
  };
  protoOf(Companion_0).get_mediumPurple_8kmgpy_k$ = function () {
    return this.mediumPurple_1;
  };
  protoOf(Companion_0).get_mediumSeaGreen_dy28ha_k$ = function () {
    return this.mediumSeaGreen_1;
  };
  protoOf(Companion_0).get_mediumSlateBlue_3m1ned_k$ = function () {
    return this.mediumSlateBlue_1;
  };
  protoOf(Companion_0).get_mediumSpringGreen_c4qd94_k$ = function () {
    return this.mediumSpringGreen_1;
  };
  protoOf(Companion_0).get_mediumTurquoise_fq15fh_k$ = function () {
    return this.mediumTurquoise_1;
  };
  protoOf(Companion_0).get_mediumVioletRed_t6wjhw_k$ = function () {
    return this.mediumVioletRed_1;
  };
  protoOf(Companion_0).get_midnightBlue_asbdlf_k$ = function () {
    return this.midnightBlue_1;
  };
  protoOf(Companion_0).get_mintCream_qmfmvr_k$ = function () {
    return this.mintCream_1;
  };
  protoOf(Companion_0).get_mistyRose_tsfobm_k$ = function () {
    return this.mistyRose_1;
  };
  protoOf(Companion_0).get_moccasin_shacrm_k$ = function () {
    return this.moccasin_1;
  };
  protoOf(Companion_0).get_navajoWhite_75bfod_k$ = function () {
    return this.navajoWhite_1;
  };
  protoOf(Companion_0).get_navy_woqyv3_k$ = function () {
    return this.navy_1;
  };
  protoOf(Companion_0).get_oldLace_ljunbf_k$ = function () {
    return this.oldLace_1;
  };
  protoOf(Companion_0).get_olive_iwdsxe_k$ = function () {
    return this.olive_1;
  };
  protoOf(Companion_0).get_oliveDrab_imx9fj_k$ = function () {
    return this.oliveDrab_1;
  };
  protoOf(Companion_0).get_orange_hq4yt3_k$ = function () {
    return this.orange_1;
  };
  protoOf(Companion_0).get_orangeRed_x4yc4a_k$ = function () {
    return this.orangeRed_1;
  };
  protoOf(Companion_0).get_orchid_hq64do_k$ = function () {
    return this.orchid_1;
  };
  protoOf(Companion_0).get_paleGoldenrod_rs9n2t_k$ = function () {
    return this.paleGoldenrod_1;
  };
  protoOf(Companion_0).get_paleGreen_p4ec0g_k$ = function () {
    return this.paleGreen_1;
  };
  protoOf(Companion_0).get_paleTurquoise_6wz0nm_k$ = function () {
    return this.paleTurquoise_1;
  };
  protoOf(Companion_0).get_paleVioletRed_x15dpd_k$ = function () {
    return this.paleVioletRed_1;
  };
  protoOf(Companion_0).get_papayaWhip_6ek617_k$ = function () {
    return this.papayaWhip_1;
  };
  protoOf(Companion_0).get_peachPuff_li0b2r_k$ = function () {
    return this.peachPuff_1;
  };
  protoOf(Companion_0).get_peru_wosbpd_k$ = function () {
    return this.peru_1;
  };
  protoOf(Companion_0).get_pink_wosekf_k$ = function () {
    return this.pink_1;
  };
  protoOf(Companion_0).get_plum_wosgyl_k$ = function () {
    return this.plum_1;
  };
  protoOf(Companion_0).get_powderBlue_xg5490_k$ = function () {
    return this.powderBlue_1;
  };
  protoOf(Companion_0).get_purple_i94vd1_k$ = function () {
    return this.purple_1;
  };
  protoOf(Companion_0).get_red_18ix20_k$ = function () {
    return this.red_1;
  };
  protoOf(Companion_0).get_rosyBrown_g7xs7q_k$ = function () {
    return this.rosyBrown_1;
  };
  protoOf(Companion_0).get_royalBlue_9xif1k_k$ = function () {
    return this.royalBlue_1;
  };
  protoOf(Companion_0).get_saddleBrown_a63iyu_k$ = function () {
    return this.saddleBrown_1;
  };
  protoOf(Companion_0).get_salmon_jd5ylz_k$ = function () {
    return this.salmon_1;
  };
  protoOf(Companion_0).get_sandyBrown_hf220m_k$ = function () {
    return this.sandyBrown_1;
  };
  protoOf(Companion_0).get_seaGreen_hr8m6b_k$ = function () {
    return this.seaGreen_1;
  };
  protoOf(Companion_0).get_seaShell_hktgra_k$ = function () {
    return this.seaShell_1;
  };
  protoOf(Companion_0).get_sienna_jhfv5n_k$ = function () {
    return this.sienna_1;
  };
  protoOf(Companion_0).get_silver_jhkhsm_k$ = function () {
    return this.silver_1;
  };
  protoOf(Companion_0).get_skyBlue_y11nm6_k$ = function () {
    return this.skyBlue_1;
  };
  protoOf(Companion_0).get_slateBlue_rjrysq_k$ = function () {
    return this.slateBlue_1;
  };
  protoOf(Companion_0).get_slateGray_rjv9pv_k$ = function () {
    return this.slateGray_1;
  };
  protoOf(Companion_0).get_slateGrey_rjv9tb_k$ = function () {
    return this.slateGrey_1;
  };
  protoOf(Companion_0).get_snow_wouf9o_k$ = function () {
    return this.snow_1;
  };
  protoOf(Companion_0).get_springGreen_1jqvm5_k$ = function () {
    return this.springGreen_1;
  };
  protoOf(Companion_0).get_steelBlue_pq2wik_k$ = function () {
    return this.steelBlue_1;
  };
  protoOf(Companion_0).get_tan_18ivns_k$ = function () {
    return this.tan_1;
  };
  protoOf(Companion_0).get_teal_wouv8l_k$ = function () {
    return this.teal_1;
  };
  protoOf(Companion_0).get_thistle_kzphzu_k$ = function () {
    return this.thistle_1;
  };
  protoOf(Companion_0).get_tomato_k1x3ir_k$ = function () {
    return this.tomato_1;
  };
  protoOf(Companion_0).get_turquoise_87p5yw_k$ = function () {
    return this.turquoise_1;
  };
  protoOf(Companion_0).get_violet_kwr2iw_k$ = function () {
    return this.violet_1;
  };
  protoOf(Companion_0).get_wheat_j0pi9q_k$ = function () {
    return this.wheat_1;
  };
  protoOf(Companion_0).get_white_j0plog_k$ = function () {
    return this.white_1;
  };
  protoOf(Companion_0).get_whiteSmoke_g30xip_k$ = function () {
    return this.whiteSmoke_1;
  };
  protoOf(Companion_0).get_yellow_m9mum5_k$ = function () {
    return this.yellow_1;
  };
  protoOf(Companion_0).get_yellowGreen_500rk6_k$ = function () {
    return this.yellowGreen_1;
  };
  protoOf(Companion_0).normalizeFractionalPercent_m2hpiu_k$ = function (value) {
    return coerceIn(value, 0.0, 1.0);
  };
  protoOf(Companion_0).normalizePercent_vmacg9_k$ = function (value) {
    return coerceIn_0(value, 0, 100);
  };
  protoOf(Companion_0).normalizeRGB_ui2mbj_k$ = function (value) {
    return coerceIn_0(value, 0, 255);
  };
  protoOf(Companion_0).normalizeHue_de37yu_k$ = function (value) {
    return roundToInt((value % 360 + 360) % 360);
  };
  protoOf(Companion_0).normalizeAlpha_kh6qcw_k$ = function (value) {
    return this.normalizeFractionalPercent_m2hpiu_k$(value);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function RGBA(red, green, blue, alpha) {
    alpha = alpha === VOID ? 1.0 : alpha;
    this.red_1 = red;
    this.green_1 = green;
    this.blue_1 = blue;
    this.alpha_1 = alpha;
  }
  protoOf(RGBA).get_red_18ix20_k$ = function () {
    return this.red_1;
  };
  protoOf(RGBA).get_green_is36qi_k$ = function () {
    return this.green_1;
  };
  protoOf(RGBA).get_blue_wojj4z_k$ = function () {
    return this.blue_1;
  };
  protoOf(RGBA).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(RGBA).asHSLA_nb6n0u_k$ = function () {
    var r = this.red_1 / 255.0;
    var g = this.green_1 / 255.0;
    var b = this.blue_1 / 255.0;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    tmp$ret$0 = Math.max(r, g, b);
    var cMax = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$1 = Math.min(r, g, b);
    var cMin = tmp$ret$1;
    var chroma = cMax - cMin;
    var lg = Companion_getInstance_0().normalizeFractionalPercent_m2hpiu_k$((cMax + cMin) / 2);
    var tmp;
    if (!(chroma === 0.0)) {
      var tmp_0 = Companion_getInstance_0();
      var tmp$ret$2;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = 2.0 * lg - 1.0;
      tmp$ret$2 = Math.abs(tmp0_abs);
      tmp = tmp_0.normalizeFractionalPercent_m2hpiu_k$(chroma / (1.0 - tmp$ret$2));
    } else {
      tmp = 0.0;
    }
    var s = tmp;
    var tmp0_subject = cMax;
    var tmp_1;
    if (tmp0_subject === cMin) {
      tmp_1 = 0.0;
    } else if (tmp0_subject === r) {
      tmp_1 = 60 * ((g - b) / chroma % 6.0);
    } else if (tmp0_subject === g) {
      tmp_1 = 60 * ((b - r) / chroma + 2);
    } else if (tmp0_subject === b) {
      tmp_1 = 60 * ((r - g) / chroma + 4);
    } else {
      throw IllegalStateException_init_$Create$('Unexpected value for max');
    }
    var h = tmp_1;
    return new HSLA(Companion_getInstance_0().normalizeHue_de37yu_k$(h), roundToInt(s * 100), roundToInt(lg * 100), this.alpha_1);
  };
  protoOf(RGBA).component1_7eebsc_k$ = function () {
    return this.red_1;
  };
  protoOf(RGBA).component2_7eebsb_k$ = function () {
    return this.green_1;
  };
  protoOf(RGBA).component3_7eebsa_k$ = function () {
    return this.blue_1;
  };
  protoOf(RGBA).component4_7eebs9_k$ = function () {
    return this.alpha_1;
  };
  protoOf(RGBA).copy_92s2b9_k$ = function (red, green, blue, alpha) {
    return new RGBA(red, green, blue, alpha);
  };
  protoOf(RGBA).copy$default_nqgdvm_k$ = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.red_1 : red;
    green = green === VOID ? this.green_1 : green;
    blue = blue === VOID ? this.blue_1 : blue;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    return $super === VOID ? this.copy_92s2b9_k$(red, green, blue, alpha) : $super.copy_92s2b9_k$.call(this, red, green, blue, alpha);
  };
  protoOf(RGBA).toString = function () {
    return 'RGBA(red=' + this.red_1 + ', green=' + this.green_1 + ', blue=' + this.blue_1 + ', alpha=' + this.alpha_1 + ')';
  };
  protoOf(RGBA).hashCode = function () {
    var result = this.red_1;
    result = imul(result, 31) + this.green_1 | 0;
    result = imul(result, 31) + this.blue_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.alpha_1) | 0;
    return result;
  };
  protoOf(RGBA).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RGBA))
      return false;
    var tmp0_other_with_cast = other instanceof RGBA ? other : THROW_CCE();
    if (!(this.red_1 === tmp0_other_with_cast.red_1))
      return false;
    if (!(this.green_1 === tmp0_other_with_cast.green_1))
      return false;
    if (!(this.blue_1 === tmp0_other_with_cast.blue_1))
      return false;
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    return true;
  };
  function HSLA(hue, saturation, lightness, alpha) {
    alpha = alpha === VOID ? 1.0 : alpha;
    this.hue_1 = hue;
    this.saturation_1 = saturation;
    this.lightness_1 = lightness;
    this.alpha_1 = alpha;
  }
  protoOf(HSLA).get_hue_18j435_k$ = function () {
    return this.hue_1;
  };
  protoOf(HSLA).get_saturation_nzhaqt_k$ = function () {
    return this.saturation_1;
  };
  protoOf(HSLA).get_lightness_jv7mx0_k$ = function () {
    return this.lightness_1;
  };
  protoOf(HSLA).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(HSLA).asRGBA_nb0iai_k$ = function () {
    if (this.saturation_1 === 0)
      return new RGBA(this.lightness_1, this.lightness_1, this.lightness_1);
    var h = this.hue_1 % 360.0 / 360.0;
    var s = this.saturation_1 / 100.0;
    var lg = this.lightness_1 / 100.0;
    var m2 = lg < 0.5 ? lg * (1 + s) : lg + s - lg * s;
    var m1 = 2 * lg - m2;
    var r = Companion_getInstance_0().normalizeFractionalPercent_m2hpiu_k$(asRGBA$hueToRGB(m1, m2, h + 0.3333333333333333));
    var g = Companion_getInstance_0().normalizeFractionalPercent_m2hpiu_k$(asRGBA$hueToRGB(m1, m2, h));
    var b = Companion_getInstance_0().normalizeFractionalPercent_m2hpiu_k$(asRGBA$hueToRGB(m1, m2, h - 0.3333333333333333));
    return new RGBA(roundToInt(r * 255), roundToInt(g * 255), roundToInt(b * 255), this.alpha_1);
  };
  protoOf(HSLA).component1_7eebsc_k$ = function () {
    return this.hue_1;
  };
  protoOf(HSLA).component2_7eebsb_k$ = function () {
    return this.saturation_1;
  };
  protoOf(HSLA).component3_7eebsa_k$ = function () {
    return this.lightness_1;
  };
  protoOf(HSLA).component4_7eebs9_k$ = function () {
    return this.alpha_1;
  };
  protoOf(HSLA).copy_92s2b9_k$ = function (hue, saturation, lightness, alpha) {
    return new HSLA(hue, saturation, lightness, alpha);
  };
  protoOf(HSLA).copy$default_nvqgjy_k$ = function (hue, saturation, lightness, alpha, $super) {
    hue = hue === VOID ? this.hue_1 : hue;
    saturation = saturation === VOID ? this.saturation_1 : saturation;
    lightness = lightness === VOID ? this.lightness_1 : lightness;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    return $super === VOID ? this.copy_92s2b9_k$(hue, saturation, lightness, alpha) : $super.copy_92s2b9_k$.call(this, hue, saturation, lightness, alpha);
  };
  protoOf(HSLA).toString = function () {
    return 'HSLA(hue=' + this.hue_1 + ', saturation=' + this.saturation_1 + ', lightness=' + this.lightness_1 + ', alpha=' + this.alpha_1 + ')';
  };
  protoOf(HSLA).hashCode = function () {
    var result = this.hue_1;
    result = imul(result, 31) + this.saturation_1 | 0;
    result = imul(result, 31) + this.lightness_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.alpha_1) | 0;
    return result;
  };
  protoOf(HSLA).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HSLA))
      return false;
    var tmp0_other_with_cast = other instanceof HSLA ? other : THROW_CCE();
    if (!(this.hue_1 === tmp0_other_with_cast.hue_1))
      return false;
    if (!(this.saturation_1 === tmp0_other_with_cast.saturation_1))
      return false;
    if (!(this.lightness_1 === tmp0_other_with_cast.lightness_1))
      return false;
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    return true;
  };
  function fromHSLANotation$getHSLParameter(match, this$0, index) {
    var tmp0_safe_receiver = match;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_groups_dy12vx_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_fkrdnv_k$(index);
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
    var tmp;
    if (tmp3_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Expected hsl or hsla notation, got ' + this$0.value_2);
    } else {
      tmp = tmp3_elvis_lhs;
    }
    return tmp;
  }
  function fromRGBANotation$getRGBParameter(match, this$0, index) {
    var tmp0_safe_receiver = match;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_groups_dy12vx_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_fkrdnv_k$(index);
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
    var tmp;
    if (tmp3_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Expected rgb or rgba notation, got ' + this$0.value_2);
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var group = tmp;
    return endsWith(group, _Char___init__impl__6a9atx(37)) ? numberToInt(Companion_getInstance_0().normalizeFractionalPercent_m2hpiu_k$(toDouble(substringBefore(group, _Char___init__impl__6a9atx(37))) / 100.0) * 255.0) : Companion_getInstance_0().normalizeRGB_ui2mbj_k$(toInt(group));
  }
  function Color(value) {
    Companion_getInstance_0();
    CssValue.call(this, value);
    this.value_2 = value;
    this.rgb_1 = null;
  }
  protoOf(Color).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  protoOf(Color).withAlpha_s89fav_k$ = function (alpha) {
    var tmp;
    if (startsWith(this.value_2, 'hsl', true)) {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = this.fromHSLANotation_q2z34c_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.css.Color.withAlpha.<anonymous>' call
      tmp$ret$0 = hsla(tmp0_with.hue_1, tmp0_with.saturation_1, tmp0_with.lightness_1, Companion_getInstance_0().normalizeAlpha_kh6qcw_k$(alpha) * tmp0_with.alpha_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.with' call
      var tmp1_with = this.toRGBA_edcv69_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'kotlinx.css.Color.withAlpha.<anonymous>' call
      tmp$ret$2 = rgba(tmp1_with.red_1, tmp1_with.green_1, tmp1_with.blue_1, Companion_getInstance_0().normalizeAlpha_kh6qcw_k$(alpha) * tmp1_with.alpha_1);
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(Color).changeAlpha_es0lmb_k$ = function (alpha) {
    var tmp;
    if (startsWith(this.value_2, 'hsl', true)) {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = this.fromHSLANotation_q2z34c_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.css.Color.changeAlpha.<anonymous>' call
      tmp$ret$0 = hsla(tmp0_with.hue_1, tmp0_with.saturation_1, tmp0_with.lightness_1, Companion_getInstance_0().normalizeAlpha_kh6qcw_k$(alpha));
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.with' call
      var tmp1_with = this.toRGBA_edcv69_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'kotlinx.css.Color.changeAlpha.<anonymous>' call
      tmp$ret$2 = rgba(tmp1_with.red_1, tmp1_with.green_1, tmp1_with.blue_1, Companion_getInstance_0().normalizeAlpha_kh6qcw_k$(alpha));
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(Color).blend_qe43o3_k$ = function (backgroundColor) {
    var source = this.toRGBA_edcv69_k$();
    var background = backgroundColor.toRGBA_edcv69_k$();
    var targetR = (1 - source.alpha_1) * background.red_1 + source.alpha_1 * source.red_1;
    var targetG = (1 - source.alpha_1) * background.green_1 + source.alpha_1 * source.green_1;
    var targetB = (1 - source.alpha_1) * background.blue_1 + source.alpha_1 * source.blue_1;
    return rgb(roundToInt(targetR), roundToInt(targetG), roundToInt(targetB));
  };
  protoOf(Color).lighten_fgk87y_k$ = function (percent) {
    var isHSLA = startsWith(this.value_2, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_q2z34c_k$() : this.toRGBA_edcv69_k$().asHSLA_nb6n0u_k$();
    var lightness = hsla_0.lightness_1 + roundToInt(hsla_0.lightness_1 * (Companion_getInstance_0().normalizePercent_vmacg9_k$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy$default_nvqgjy_k$(VOID, VOID, Companion_getInstance_0().normalizePercent_vmacg9_k$(lightness));
    var tmp;
    if (isHSLA) {
      tmp = hsla(newHSLa.hue_1, newHSLa.saturation_1, newHSLa.lightness_1, newHSLa.alpha_1);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = newHSLa.asRGBA_nb0iai_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.css.Color.lighten.<anonymous>' call
      tmp$ret$0 = rgba(tmp0_with.red_1, tmp0_with.green_1, tmp0_with.blue_1, tmp0_with.alpha_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(Color).darken_v4zwu6_k$ = function (percent) {
    var isHSLA = startsWith(this.value_2, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_q2z34c_k$() : this.toRGBA_edcv69_k$().asHSLA_nb6n0u_k$();
    var darkness = hsla_0.lightness_1 - roundToInt(hsla_0.lightness_1 * (Companion_getInstance_0().normalizePercent_vmacg9_k$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy$default_nvqgjy_k$(VOID, VOID, Companion_getInstance_0().normalizePercent_vmacg9_k$(darkness));
    var tmp;
    if (isHSLA) {
      tmp = hsla(newHSLa.hue_1, newHSLa.saturation_1, newHSLa.lightness_1, newHSLa.alpha_1);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = newHSLa.asRGBA_nb0iai_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.css.Color.darken.<anonymous>' call
      tmp$ret$0 = rgba(tmp0_with.red_1, tmp0_with.green_1, tmp0_with.blue_1, tmp0_with.alpha_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(Color).saturate_1k8r2m_k$ = function (percent) {
    var isHSLA = startsWith(this.value_2, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_q2z34c_k$() : this.toRGBA_edcv69_k$().asHSLA_nb6n0u_k$();
    var saturation = hsla_0.saturation_1 + roundToInt(hsla_0.saturation_1 * (Companion_getInstance_0().normalizePercent_vmacg9_k$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy$default_nvqgjy_k$(VOID, Companion_getInstance_0().normalizePercent_vmacg9_k$(saturation));
    var tmp;
    if (isHSLA) {
      tmp = hsla(newHSLa.hue_1, newHSLa.saturation_1, newHSLa.lightness_1, newHSLa.alpha_1);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = newHSLa.asRGBA_nb0iai_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.css.Color.saturate.<anonymous>' call
      tmp$ret$0 = rgba(tmp0_with.red_1, tmp0_with.green_1, tmp0_with.blue_1, tmp0_with.alpha_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(Color).desaturate_k8v5qp_k$ = function (percent) {
    var isHSLA = startsWith(this.value_2, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_q2z34c_k$() : this.toRGBA_edcv69_k$().asHSLA_nb6n0u_k$();
    var desaturation = hsla_0.saturation_1 - roundToInt(hsla_0.saturation_1 * (Companion_getInstance_0().normalizePercent_vmacg9_k$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy$default_nvqgjy_k$(VOID, Companion_getInstance_0().normalizePercent_vmacg9_k$(desaturation));
    var tmp;
    if (isHSLA) {
      tmp = hsla(newHSLa.hue_1, newHSLa.saturation_1, newHSLa.lightness_1, newHSLa.alpha_1);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = newHSLa.asRGBA_nb0iai_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.css.Color.desaturate.<anonymous>' call
      tmp$ret$0 = rgba(tmp0_with.red_1, tmp0_with.green_1, tmp0_with.blue_1, tmp0_with.alpha_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(Color).fromHSLANotation_q2z34c_k$ = function () {
    var match = _get_HSLA_REGEX__fy6jkz(Companion_getInstance_0()).find$default_bc99zm_k$(this.value_2);
    var hueShape = fromHSLANotation$getHSLParameter(match, this, 1);
    var hue = Companion_getInstance_0().normalizeHue_de37yu_k$(endsWith_0(hueShape, 'grad', true) ? toDouble(substringBefore_0(hueShape, 'grad')) * 0.9 : endsWith_0(hueShape, 'rad', true) ? toDouble(substringBefore_0(hueShape, 'rad')) * 180 / get_PI() : endsWith_0(hueShape, 'turn', true) ? toDouble(substringBefore_0(hueShape, 'turn')) * 360.0 : endsWith_0(hueShape, 'deg', true) ? toDouble(substringBefore_0(hueShape, 'deg')) : toDouble(hueShape));
    var saturation = Companion_getInstance_0().normalizePercent_vmacg9_k$(toInt(fromHSLANotation$getHSLParameter(match, this, 2)));
    var lightness = Companion_getInstance_0().normalizePercent_vmacg9_k$(toInt(fromHSLANotation$getHSLParameter(match, this, 3)));
    var tmp = Companion_getInstance_0();
    var tmp0_safe_receiver = match;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_groups_dy12vx_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_fkrdnv_k$(4);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : toDouble(tmp3_safe_receiver);
    var alpha = tmp.normalizeAlpha_kh6qcw_k$(tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs);
    return new HSLA(hue, saturation, lightness, alpha);
  };
  protoOf(Color).fromRGBANotation_ad46bk_k$ = function () {
    var match = _get_RGBA_REGEX__eceqfl(Companion_getInstance_0()).find$default_bc99zm_k$(this.value_2);
    var red = fromRGBANotation$getRGBParameter(match, this, 1);
    var green = fromRGBANotation$getRGBParameter(match, this, 2);
    var blue = fromRGBANotation$getRGBParameter(match, this, 3);
    var tmp = Companion_getInstance_0();
    var tmp0_safe_receiver = match;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_groups_dy12vx_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_fkrdnv_k$(4);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : toDouble(tmp3_safe_receiver);
    var alpha = tmp.normalizeAlpha_kh6qcw_k$(tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs);
    return new RGBA(red, green, blue, alpha);
  };
  protoOf(Color).toRGBA_edcv69_k$ = function () {
    var tmp0_elvis_lhs = this.rgb_1;
    var v = tmp0_elvis_lhs == null ? this.value_2 : tmp0_elvis_lhs;
    var tmp;
    if (startsWith(v, 'rgb')) {
      tmp = this.fromRGBANotation_ad46bk_k$();
    } else if (startsWith(v, '#') ? v.length === 4 : false) {
      tmp = new RGBA(toInt_0(times(toString_0(charSequenceGet(v, 1)), 2), 16), toInt_0(times(toString_0(charSequenceGet(v, 2)), 2), 16), toInt_0(times(toString_0(charSequenceGet(v, 3)), 2), 16));
    } else if (startsWith(v, '#') ? v.length === 7 ? true : v.length === 9 : false) {
      tmp = new RGBA(toInt_0(substring(v, numberRangeToNumber(1, 2)), 16), toInt_0(substring(v, numberRangeToNumber(3, 4)), 16), toInt_0(substring(v, numberRangeToNumber(5, 6)), 16));
    } else {
      throw IllegalArgumentException_init_$Create$('Only hexadecimal, rgb, and rgba notations are accepted, got ' + v);
    }
    return tmp;
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.none_1 = new Image('none');
  }
  protoOf(Companion_1).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Image(value) {
    Companion_getInstance_1();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(Image).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  var BackgroundOrigin_initial_instance;
  var BackgroundOrigin_inherit_instance;
  var BackgroundOrigin_unset_instance;
  var BackgroundOrigin_borderBox_instance;
  var BackgroundOrigin_paddingBox_instance;
  var BackgroundOrigin_contentBox_instance;
  function values_4() {
    return [BackgroundOrigin_initial_getInstance(), BackgroundOrigin_inherit_getInstance(), BackgroundOrigin_unset_getInstance(), BackgroundOrigin_borderBox_getInstance(), BackgroundOrigin_paddingBox_getInstance(), BackgroundOrigin_contentBox_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'initial':
        return BackgroundOrigin_initial_getInstance();
      case 'inherit':
        return BackgroundOrigin_inherit_getInstance();
      case 'unset':
        return BackgroundOrigin_unset_getInstance();
      case 'borderBox':
        return BackgroundOrigin_borderBox_getInstance();
      case 'paddingBox':
        return BackgroundOrigin_paddingBox_getInstance();
      case 'contentBox':
        return BackgroundOrigin_contentBox_getInstance();
      default:
        BackgroundOrigin_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BackgroundOrigin_entriesInitialized;
  function BackgroundOrigin_initEntries() {
    if (BackgroundOrigin_entriesInitialized)
      return Unit_getInstance();
    BackgroundOrigin_entriesInitialized = true;
    BackgroundOrigin_initial_instance = new BackgroundOrigin('initial', 0);
    BackgroundOrigin_inherit_instance = new BackgroundOrigin('inherit', 1);
    BackgroundOrigin_unset_instance = new BackgroundOrigin('unset', 2);
    BackgroundOrigin_borderBox_instance = new BackgroundOrigin('borderBox', 3);
    BackgroundOrigin_paddingBox_instance = new BackgroundOrigin('paddingBox', 4);
    BackgroundOrigin_contentBox_instance = new BackgroundOrigin('contentBox', 5);
  }
  function BackgroundOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(BackgroundOrigin).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var BackgroundRepeat_initial_instance;
  var BackgroundRepeat_inherit_instance;
  var BackgroundRepeat_unset_instance;
  var BackgroundRepeat_repeatX_instance;
  var BackgroundRepeat_repeatY_instance;
  var BackgroundRepeat_repeat_instance;
  var BackgroundRepeat_noRepeat_instance;
  function values_5() {
    return [BackgroundRepeat_initial_getInstance(), BackgroundRepeat_inherit_getInstance(), BackgroundRepeat_unset_getInstance(), BackgroundRepeat_repeatX_getInstance(), BackgroundRepeat_repeatY_getInstance(), BackgroundRepeat_repeat_getInstance(), BackgroundRepeat_noRepeat_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'initial':
        return BackgroundRepeat_initial_getInstance();
      case 'inherit':
        return BackgroundRepeat_inherit_getInstance();
      case 'unset':
        return BackgroundRepeat_unset_getInstance();
      case 'repeatX':
        return BackgroundRepeat_repeatX_getInstance();
      case 'repeatY':
        return BackgroundRepeat_repeatY_getInstance();
      case 'repeat':
        return BackgroundRepeat_repeat_getInstance();
      case 'noRepeat':
        return BackgroundRepeat_noRepeat_getInstance();
      default:
        BackgroundRepeat_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BackgroundRepeat_entriesInitialized;
  function BackgroundRepeat_initEntries() {
    if (BackgroundRepeat_entriesInitialized)
      return Unit_getInstance();
    BackgroundRepeat_entriesInitialized = true;
    BackgroundRepeat_initial_instance = new BackgroundRepeat('initial', 0);
    BackgroundRepeat_inherit_instance = new BackgroundRepeat('inherit', 1);
    BackgroundRepeat_unset_instance = new BackgroundRepeat('unset', 2);
    BackgroundRepeat_repeatX_instance = new BackgroundRepeat('repeatX', 3);
    BackgroundRepeat_repeatY_instance = new BackgroundRepeat('repeatY', 4);
    BackgroundRepeat_repeat_instance = new BackgroundRepeat('repeat', 5);
    BackgroundRepeat_noRepeat_instance = new BackgroundRepeat('noRepeat', 6);
  }
  function BackgroundRepeat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(BackgroundRepeat).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var BorderCollapse_initial_instance;
  var BorderCollapse_inherit_instance;
  var BorderCollapse_unset_instance;
  var BorderCollapse_separate_instance;
  var BorderCollapse_collapse_instance;
  function values_6() {
    return [BorderCollapse_initial_getInstance(), BorderCollapse_inherit_getInstance(), BorderCollapse_unset_getInstance(), BorderCollapse_separate_getInstance(), BorderCollapse_collapse_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'initial':
        return BorderCollapse_initial_getInstance();
      case 'inherit':
        return BorderCollapse_inherit_getInstance();
      case 'unset':
        return BorderCollapse_unset_getInstance();
      case 'separate':
        return BorderCollapse_separate_getInstance();
      case 'collapse':
        return BorderCollapse_collapse_getInstance();
      default:
        BorderCollapse_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BorderCollapse_entriesInitialized;
  function BorderCollapse_initEntries() {
    if (BorderCollapse_entriesInitialized)
      return Unit_getInstance();
    BorderCollapse_entriesInitialized = true;
    BorderCollapse_initial_instance = new BorderCollapse('initial', 0);
    BorderCollapse_inherit_instance = new BorderCollapse('inherit', 1);
    BorderCollapse_unset_instance = new BorderCollapse('unset', 2);
    BorderCollapse_separate_instance = new BorderCollapse('separate', 3);
    BorderCollapse_collapse_instance = new BorderCollapse('collapse', 4);
  }
  function BorderCollapse(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var BorderStyle_initial_instance;
  var BorderStyle_inherit_instance;
  var BorderStyle_unset_instance;
  var BorderStyle_none_instance;
  var BorderStyle_dotted_instance;
  var BorderStyle_dashed_instance;
  var BorderStyle_solid_instance;
  function values_7() {
    return [BorderStyle_initial_getInstance(), BorderStyle_inherit_getInstance(), BorderStyle_unset_getInstance(), BorderStyle_none_getInstance(), BorderStyle_dotted_getInstance(), BorderStyle_dashed_getInstance(), BorderStyle_solid_getInstance()];
  }
  function valueOf_7(value) {
    switch (value) {
      case 'initial':
        return BorderStyle_initial_getInstance();
      case 'inherit':
        return BorderStyle_inherit_getInstance();
      case 'unset':
        return BorderStyle_unset_getInstance();
      case 'none':
        return BorderStyle_none_getInstance();
      case 'dotted':
        return BorderStyle_dotted_getInstance();
      case 'dashed':
        return BorderStyle_dashed_getInstance();
      case 'solid':
        return BorderStyle_solid_getInstance();
      default:
        BorderStyle_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BorderStyle_entriesInitialized;
  function BorderStyle_initEntries() {
    if (BorderStyle_entriesInitialized)
      return Unit_getInstance();
    BorderStyle_entriesInitialized = true;
    BorderStyle_initial_instance = new BorderStyle('initial', 0);
    BorderStyle_inherit_instance = new BorderStyle('inherit', 1);
    BorderStyle_unset_instance = new BorderStyle('unset', 2);
    BorderStyle_none_instance = new BorderStyle('none', 3);
    BorderStyle_dotted_instance = new BorderStyle('dotted', 4);
    BorderStyle_dashed_instance = new BorderStyle('dashed', 5);
    BorderStyle_solid_instance = new BorderStyle('solid', 6);
  }
  function BorderStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var BoxSizing_initial_instance;
  var BoxSizing_inherit_instance;
  var BoxSizing_unset_instance;
  var BoxSizing_contentBox_instance;
  var BoxSizing_borderBox_instance;
  function values_8() {
    return [BoxSizing_initial_getInstance(), BoxSizing_inherit_getInstance(), BoxSizing_unset_getInstance(), BoxSizing_contentBox_getInstance(), BoxSizing_borderBox_getInstance()];
  }
  function valueOf_8(value) {
    switch (value) {
      case 'initial':
        return BoxSizing_initial_getInstance();
      case 'inherit':
        return BoxSizing_inherit_getInstance();
      case 'unset':
        return BoxSizing_unset_getInstance();
      case 'contentBox':
        return BoxSizing_contentBox_getInstance();
      case 'borderBox':
        return BoxSizing_borderBox_getInstance();
      default:
        BoxSizing_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BoxSizing_entriesInitialized;
  function BoxSizing_initEntries() {
    if (BoxSizing_entriesInitialized)
      return Unit_getInstance();
    BoxSizing_entriesInitialized = true;
    BoxSizing_initial_instance = new BoxSizing('initial', 0);
    BoxSizing_inherit_instance = new BoxSizing('inherit', 1);
    BoxSizing_unset_instance = new BoxSizing('unset', 2);
    BoxSizing_contentBox_instance = new BoxSizing('contentBox', 3);
    BoxSizing_borderBox_instance = new BoxSizing('borderBox', 4);
  }
  function BoxSizing(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(BoxSizing).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var Clear_initial_instance;
  var Clear_inherit_instance;
  var Clear_unset_instance;
  var Clear_none_instance;
  var Clear_left_instance;
  var Clear_right_instance;
  var Clear_both_instance;
  function values_9() {
    return [Clear_initial_getInstance(), Clear_inherit_getInstance(), Clear_unset_getInstance(), Clear_none_getInstance(), Clear_left_getInstance(), Clear_right_getInstance(), Clear_both_getInstance()];
  }
  function valueOf_9(value) {
    switch (value) {
      case 'initial':
        return Clear_initial_getInstance();
      case 'inherit':
        return Clear_inherit_getInstance();
      case 'unset':
        return Clear_unset_getInstance();
      case 'none':
        return Clear_none_getInstance();
      case 'left':
        return Clear_left_getInstance();
      case 'right':
        return Clear_right_getInstance();
      case 'both':
        return Clear_both_getInstance();
      default:
        Clear_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Clear_entriesInitialized;
  function Clear_initEntries() {
    if (Clear_entriesInitialized)
      return Unit_getInstance();
    Clear_entriesInitialized = true;
    Clear_initial_instance = new Clear('initial', 0);
    Clear_inherit_instance = new Clear('inherit', 1);
    Clear_unset_instance = new Clear('unset', 2);
    Clear_none_instance = new Clear('none', 3);
    Clear_left_instance = new Clear('left', 4);
    Clear_right_instance = new Clear('right', 5);
    Clear_both_instance = new Clear('both', 6);
  }
  function Clear(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var Contain_initial_instance;
  var Contain_inherit_instance;
  var Contain_unset_instance;
  var Contain_none_instance;
  var Contain_strict_instance;
  var Contain_content_instance;
  var Contain_size_instance;
  var Contain_layout_instance;
  var Contain_style_instance;
  var Contain_paint_instance;
  function values_10() {
    return [Contain_initial_getInstance(), Contain_inherit_getInstance(), Contain_unset_getInstance(), Contain_none_getInstance(), Contain_strict_getInstance(), Contain_content_getInstance(), Contain_size_getInstance(), Contain_layout_getInstance(), Contain_style_getInstance(), Contain_paint_getInstance()];
  }
  function valueOf_10(value) {
    switch (value) {
      case 'initial':
        return Contain_initial_getInstance();
      case 'inherit':
        return Contain_inherit_getInstance();
      case 'unset':
        return Contain_unset_getInstance();
      case 'none':
        return Contain_none_getInstance();
      case 'strict':
        return Contain_strict_getInstance();
      case 'content':
        return Contain_content_getInstance();
      case 'size':
        return Contain_size_getInstance();
      case 'layout':
        return Contain_layout_getInstance();
      case 'style':
        return Contain_style_getInstance();
      case 'paint':
        return Contain_paint_getInstance();
      default:
        Contain_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Contain_entriesInitialized;
  function Contain_initEntries() {
    if (Contain_entriesInitialized)
      return Unit_getInstance();
    Contain_entriesInitialized = true;
    Contain_initial_instance = new Contain('initial', 0);
    Contain_inherit_instance = new Contain('inherit', 1);
    Contain_unset_instance = new Contain('unset', 2);
    Contain_none_instance = new Contain('none', 3);
    Contain_strict_instance = new Contain('strict', 4);
    Contain_content_instance = new Contain('content', 5);
    Contain_size_instance = new Contain('size', 6);
    Contain_layout_instance = new Contain('layout', 7);
    Contain_style_instance = new Contain('style', 8);
    Contain_paint_instance = new Contain('paint', 9);
  }
  function Contain(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function QuotedString(value) {
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(QuotedString).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  protoOf(QuotedString).toString = function () {
    return "'" + this.value_2 + "'";
  };
  var Cursor_initial_instance;
  var Cursor_inherit_instance;
  var Cursor_unset_instance;
  var Cursor_auto_instance;
  var Cursor_default_instance;
  var Cursor_none_instance;
  var Cursor_contextMenu_instance;
  var Cursor_help_instance;
  var Cursor_pointer_instance;
  var Cursor_progress_instance;
  var Cursor_wait_instance;
  var Cursor_cell_instance;
  var Cursor_crosshair_instance;
  var Cursor_text_instance;
  var Cursor_verticalText_instance;
  var Cursor_alias_instance;
  var Cursor_copy_instance;
  var Cursor_move_instance;
  var Cursor_noDrop_instance;
  var Cursor_notAllowed_instance;
  var Cursor_grab_instance;
  var Cursor_grabbing_instance;
  var Cursor_colResize_instance;
  var Cursor_rowResize_instance;
  var Cursor_allScroll_instance;
  var Cursor_eResize_instance;
  var Cursor_nResize_instance;
  var Cursor_neResize_instance;
  var Cursor_nwResize_instance;
  var Cursor_sResize_instance;
  var Cursor_seResize_instance;
  var Cursor_swResize_instance;
  var Cursor_wResize_instance;
  var Cursor_ewResize_instance;
  var Cursor_nsResize_instance;
  var Cursor_neswResize_instance;
  var Cursor_nwseResize_instance;
  var Cursor_zoomIn_instance;
  var Cursor_zoomOut_instance;
  function values_11() {
    return [Cursor_initial_getInstance(), Cursor_inherit_getInstance(), Cursor_unset_getInstance(), Cursor_auto_getInstance(), Cursor_default_getInstance(), Cursor_none_getInstance(), Cursor_contextMenu_getInstance(), Cursor_help_getInstance(), Cursor_pointer_getInstance(), Cursor_progress_getInstance(), Cursor_wait_getInstance(), Cursor_cell_getInstance(), Cursor_crosshair_getInstance(), Cursor_text_getInstance(), Cursor_verticalText_getInstance(), Cursor_alias_getInstance(), Cursor_copy_getInstance(), Cursor_move_getInstance(), Cursor_noDrop_getInstance(), Cursor_notAllowed_getInstance(), Cursor_grab_getInstance(), Cursor_grabbing_getInstance(), Cursor_colResize_getInstance(), Cursor_rowResize_getInstance(), Cursor_allScroll_getInstance(), Cursor_eResize_getInstance(), Cursor_nResize_getInstance(), Cursor_neResize_getInstance(), Cursor_nwResize_getInstance(), Cursor_sResize_getInstance(), Cursor_seResize_getInstance(), Cursor_swResize_getInstance(), Cursor_wResize_getInstance(), Cursor_ewResize_getInstance(), Cursor_nsResize_getInstance(), Cursor_neswResize_getInstance(), Cursor_nwseResize_getInstance(), Cursor_zoomIn_getInstance(), Cursor_zoomOut_getInstance()];
  }
  function valueOf_11(value) {
    switch (value) {
      case 'initial':
        return Cursor_initial_getInstance();
      case 'inherit':
        return Cursor_inherit_getInstance();
      case 'unset':
        return Cursor_unset_getInstance();
      case 'auto':
        return Cursor_auto_getInstance();
      case 'default':
        return Cursor_default_getInstance();
      case 'none':
        return Cursor_none_getInstance();
      case 'contextMenu':
        return Cursor_contextMenu_getInstance();
      case 'help':
        return Cursor_help_getInstance();
      case 'pointer':
        return Cursor_pointer_getInstance();
      case 'progress':
        return Cursor_progress_getInstance();
      case 'wait':
        return Cursor_wait_getInstance();
      case 'cell':
        return Cursor_cell_getInstance();
      case 'crosshair':
        return Cursor_crosshair_getInstance();
      case 'text':
        return Cursor_text_getInstance();
      case 'verticalText':
        return Cursor_verticalText_getInstance();
      case 'alias':
        return Cursor_alias_getInstance();
      case 'copy':
        return Cursor_copy_getInstance();
      case 'move':
        return Cursor_move_getInstance();
      case 'noDrop':
        return Cursor_noDrop_getInstance();
      case 'notAllowed':
        return Cursor_notAllowed_getInstance();
      case 'grab':
        return Cursor_grab_getInstance();
      case 'grabbing':
        return Cursor_grabbing_getInstance();
      case 'colResize':
        return Cursor_colResize_getInstance();
      case 'rowResize':
        return Cursor_rowResize_getInstance();
      case 'allScroll':
        return Cursor_allScroll_getInstance();
      case 'eResize':
        return Cursor_eResize_getInstance();
      case 'nResize':
        return Cursor_nResize_getInstance();
      case 'neResize':
        return Cursor_neResize_getInstance();
      case 'nwResize':
        return Cursor_nwResize_getInstance();
      case 'sResize':
        return Cursor_sResize_getInstance();
      case 'seResize':
        return Cursor_seResize_getInstance();
      case 'swResize':
        return Cursor_swResize_getInstance();
      case 'wResize':
        return Cursor_wResize_getInstance();
      case 'ewResize':
        return Cursor_ewResize_getInstance();
      case 'nsResize':
        return Cursor_nsResize_getInstance();
      case 'neswResize':
        return Cursor_neswResize_getInstance();
      case 'nwseResize':
        return Cursor_nwseResize_getInstance();
      case 'zoomIn':
        return Cursor_zoomIn_getInstance();
      case 'zoomOut':
        return Cursor_zoomOut_getInstance();
      default:
        Cursor_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Cursor_entriesInitialized;
  function Cursor_initEntries() {
    if (Cursor_entriesInitialized)
      return Unit_getInstance();
    Cursor_entriesInitialized = true;
    Cursor_initial_instance = new Cursor('initial', 0);
    Cursor_inherit_instance = new Cursor('inherit', 1);
    Cursor_unset_instance = new Cursor('unset', 2);
    Cursor_auto_instance = new Cursor('auto', 3);
    Cursor_default_instance = new Cursor('default', 4);
    Cursor_none_instance = new Cursor('none', 5);
    Cursor_contextMenu_instance = new Cursor('contextMenu', 6);
    Cursor_help_instance = new Cursor('help', 7);
    Cursor_pointer_instance = new Cursor('pointer', 8);
    Cursor_progress_instance = new Cursor('progress', 9);
    Cursor_wait_instance = new Cursor('wait', 10);
    Cursor_cell_instance = new Cursor('cell', 11);
    Cursor_crosshair_instance = new Cursor('crosshair', 12);
    Cursor_text_instance = new Cursor('text', 13);
    Cursor_verticalText_instance = new Cursor('verticalText', 14);
    Cursor_alias_instance = new Cursor('alias', 15);
    Cursor_copy_instance = new Cursor('copy', 16);
    Cursor_move_instance = new Cursor('move', 17);
    Cursor_noDrop_instance = new Cursor('noDrop', 18);
    Cursor_notAllowed_instance = new Cursor('notAllowed', 19);
    Cursor_grab_instance = new Cursor('grab', 20);
    Cursor_grabbing_instance = new Cursor('grabbing', 21);
    Cursor_colResize_instance = new Cursor('colResize', 22);
    Cursor_rowResize_instance = new Cursor('rowResize', 23);
    Cursor_allScroll_instance = new Cursor('allScroll', 24);
    Cursor_eResize_instance = new Cursor('eResize', 25);
    Cursor_nResize_instance = new Cursor('nResize', 26);
    Cursor_neResize_instance = new Cursor('neResize', 27);
    Cursor_nwResize_instance = new Cursor('nwResize', 28);
    Cursor_sResize_instance = new Cursor('sResize', 29);
    Cursor_seResize_instance = new Cursor('seResize', 30);
    Cursor_swResize_instance = new Cursor('swResize', 31);
    Cursor_wResize_instance = new Cursor('wResize', 32);
    Cursor_ewResize_instance = new Cursor('ewResize', 33);
    Cursor_nsResize_instance = new Cursor('nsResize', 34);
    Cursor_neswResize_instance = new Cursor('neswResize', 35);
    Cursor_nwseResize_instance = new Cursor('nwseResize', 36);
    Cursor_zoomIn_instance = new Cursor('zoomIn', 37);
    Cursor_zoomOut_instance = new Cursor('zoomOut', 38);
  }
  function Cursor(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Cursor).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var Direction_initial_instance;
  var Direction_inherit_instance;
  var Direction_unset_instance;
  var Direction_ltr_instance;
  var Direction_rtl_instance;
  function values_12() {
    return [Direction_initial_getInstance(), Direction_inherit_getInstance(), Direction_unset_getInstance(), Direction_ltr_getInstance(), Direction_rtl_getInstance()];
  }
  function valueOf_12(value) {
    switch (value) {
      case 'initial':
        return Direction_initial_getInstance();
      case 'inherit':
        return Direction_inherit_getInstance();
      case 'unset':
        return Direction_unset_getInstance();
      case 'ltr':
        return Direction_ltr_getInstance();
      case 'rtl':
        return Direction_rtl_getInstance();
      default:
        Direction_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_initial_instance = new Direction('initial', 0);
    Direction_inherit_instance = new Direction('inherit', 1);
    Direction_unset_instance = new Direction('unset', 2);
    Direction_ltr_instance = new Direction('ltr', 3);
    Direction_rtl_instance = new Direction('rtl', 4);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var Display_initial_instance;
  var Display_inherit_instance;
  var Display_unset_instance;
  var Display_block_instance;
  var Display_inline_instance;
  var Display_runIn_instance;
  var Display_flow_instance;
  var Display_flowRoot_instance;
  var Display_table_instance;
  var Display_flex_instance;
  var Display_grid_instance;
  var Display_subgrid_instance;
  var Display_listItem_instance;
  var Display_tableRowGroup_instance;
  var Display_tableHeaderGroup_instance;
  var Display_tableFooterGroup_instance;
  var Display_tableRow_instance;
  var Display_tableCell_instance;
  var Display_tableColumnGroup_instance;
  var Display_tableColumn_instance;
  var Display_tableCaption_instance;
  var Display_contents_instance;
  var Display_none_instance;
  var Display_inlineBlock_instance;
  var Display_inlineListItem_instance;
  var Display_inlineTable_instance;
  var Display_inlineFlex_instance;
  var Display_inlineGrid_instance;
  function values_13() {
    return [Display_initial_getInstance(), Display_inherit_getInstance(), Display_unset_getInstance(), Display_block_getInstance(), Display_inline_getInstance(), Display_runIn_getInstance(), Display_flow_getInstance(), Display_flowRoot_getInstance(), Display_table_getInstance(), Display_flex_getInstance(), Display_grid_getInstance(), Display_subgrid_getInstance(), Display_listItem_getInstance(), Display_tableRowGroup_getInstance(), Display_tableHeaderGroup_getInstance(), Display_tableFooterGroup_getInstance(), Display_tableRow_getInstance(), Display_tableCell_getInstance(), Display_tableColumnGroup_getInstance(), Display_tableColumn_getInstance(), Display_tableCaption_getInstance(), Display_contents_getInstance(), Display_none_getInstance(), Display_inlineBlock_getInstance(), Display_inlineListItem_getInstance(), Display_inlineTable_getInstance(), Display_inlineFlex_getInstance(), Display_inlineGrid_getInstance()];
  }
  function valueOf_13(value) {
    switch (value) {
      case 'initial':
        return Display_initial_getInstance();
      case 'inherit':
        return Display_inherit_getInstance();
      case 'unset':
        return Display_unset_getInstance();
      case 'block':
        return Display_block_getInstance();
      case 'inline':
        return Display_inline_getInstance();
      case 'runIn':
        return Display_runIn_getInstance();
      case 'flow':
        return Display_flow_getInstance();
      case 'flowRoot':
        return Display_flowRoot_getInstance();
      case 'table':
        return Display_table_getInstance();
      case 'flex':
        return Display_flex_getInstance();
      case 'grid':
        return Display_grid_getInstance();
      case 'subgrid':
        return Display_subgrid_getInstance();
      case 'listItem':
        return Display_listItem_getInstance();
      case 'tableRowGroup':
        return Display_tableRowGroup_getInstance();
      case 'tableHeaderGroup':
        return Display_tableHeaderGroup_getInstance();
      case 'tableFooterGroup':
        return Display_tableFooterGroup_getInstance();
      case 'tableRow':
        return Display_tableRow_getInstance();
      case 'tableCell':
        return Display_tableCell_getInstance();
      case 'tableColumnGroup':
        return Display_tableColumnGroup_getInstance();
      case 'tableColumn':
        return Display_tableColumn_getInstance();
      case 'tableCaption':
        return Display_tableCaption_getInstance();
      case 'contents':
        return Display_contents_getInstance();
      case 'none':
        return Display_none_getInstance();
      case 'inlineBlock':
        return Display_inlineBlock_getInstance();
      case 'inlineListItem':
        return Display_inlineListItem_getInstance();
      case 'inlineTable':
        return Display_inlineTable_getInstance();
      case 'inlineFlex':
        return Display_inlineFlex_getInstance();
      case 'inlineGrid':
        return Display_inlineGrid_getInstance();
      default:
        Display_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Display_entriesInitialized;
  function Display_initEntries() {
    if (Display_entriesInitialized)
      return Unit_getInstance();
    Display_entriesInitialized = true;
    Display_initial_instance = new Display('initial', 0);
    Display_inherit_instance = new Display('inherit', 1);
    Display_unset_instance = new Display('unset', 2);
    Display_block_instance = new Display('block', 3);
    Display_inline_instance = new Display('inline', 4);
    Display_runIn_instance = new Display('runIn', 5);
    Display_flow_instance = new Display('flow', 6);
    Display_flowRoot_instance = new Display('flowRoot', 7);
    Display_table_instance = new Display('table', 8);
    Display_flex_instance = new Display('flex', 9);
    Display_grid_instance = new Display('grid', 10);
    Display_subgrid_instance = new Display('subgrid', 11);
    Display_listItem_instance = new Display('listItem', 12);
    Display_tableRowGroup_instance = new Display('tableRowGroup', 13);
    Display_tableHeaderGroup_instance = new Display('tableHeaderGroup', 14);
    Display_tableFooterGroup_instance = new Display('tableFooterGroup', 15);
    Display_tableRow_instance = new Display('tableRow', 16);
    Display_tableCell_instance = new Display('tableCell', 17);
    Display_tableColumnGroup_instance = new Display('tableColumnGroup', 18);
    Display_tableColumn_instance = new Display('tableColumn', 19);
    Display_tableCaption_instance = new Display('tableCaption', 20);
    Display_contents_instance = new Display('contents', 21);
    Display_none_instance = new Display('none', 22);
    Display_inlineBlock_instance = new Display('inlineBlock', 23);
    Display_inlineListItem_instance = new Display('inlineListItem', 24);
    Display_inlineTable_instance = new Display('inlineTable', 25);
    Display_inlineFlex_instance = new Display('inlineFlex', 26);
    Display_inlineGrid_instance = new Display('inlineGrid', 27);
  }
  function Display(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Display).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.initial_1 = new FlexBasis('initial');
    this.inherit_1 = new FlexBasis('inherit');
    this.unset_1 = new FlexBasis('unset');
    this.auto_1 = new FlexBasis('auto');
    this.content_1 = new FlexBasis('content');
    this.minContent_1 = new FlexBasis('min-content');
    this.maxContent_1 = new FlexBasis('max-content');
    this.fitContent_1 = new FlexBasis('fit-content');
    this.fill_1 = new FlexBasis('fill');
    this.zero_1 = new FlexBasis('0');
  }
  protoOf(Companion_2).get_initial_xhjoez_k$ = function () {
    return this.initial_1;
  };
  protoOf(Companion_2).get_inherit_xgqhw2_k$ = function () {
    return this.inherit_1;
  };
  protoOf(Companion_2).get_unset_izq1hc_k$ = function () {
    return this.unset_1;
  };
  protoOf(Companion_2).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  protoOf(Companion_2).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(Companion_2).get_minContent_f65gog_k$ = function () {
    return this.minContent_1;
  };
  protoOf(Companion_2).get_maxContent_ez72f2_k$ = function () {
    return this.maxContent_1;
  };
  protoOf(Companion_2).get_fitContent_wkr0pb_k$ = function () {
    return this.fitContent_1;
  };
  protoOf(Companion_2).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(Companion_2).get_zero_woypkh_k$ = function () {
    return this.zero_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function FlexBasis(value) {
    Companion_getInstance_2();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(FlexBasis).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  var FlexDirection_initial_instance;
  var FlexDirection_inherit_instance;
  var FlexDirection_unset_instance;
  var FlexDirection_column_instance;
  var FlexDirection_columnReverse_instance;
  var FlexDirection_row_instance;
  var FlexDirection_rowReverse_instance;
  function values_14() {
    return [FlexDirection_initial_getInstance(), FlexDirection_inherit_getInstance(), FlexDirection_unset_getInstance(), FlexDirection_column_getInstance(), FlexDirection_columnReverse_getInstance(), FlexDirection_row_getInstance(), FlexDirection_rowReverse_getInstance()];
  }
  function valueOf_14(value) {
    switch (value) {
      case 'initial':
        return FlexDirection_initial_getInstance();
      case 'inherit':
        return FlexDirection_inherit_getInstance();
      case 'unset':
        return FlexDirection_unset_getInstance();
      case 'column':
        return FlexDirection_column_getInstance();
      case 'columnReverse':
        return FlexDirection_columnReverse_getInstance();
      case 'row':
        return FlexDirection_row_getInstance();
      case 'rowReverse':
        return FlexDirection_rowReverse_getInstance();
      default:
        FlexDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  var FlexDirection_entriesInitialized;
  function FlexDirection_initEntries() {
    if (FlexDirection_entriesInitialized)
      return Unit_getInstance();
    FlexDirection_entriesInitialized = true;
    FlexDirection_initial_instance = new FlexDirection('initial', 0);
    FlexDirection_inherit_instance = new FlexDirection('inherit', 1);
    FlexDirection_unset_instance = new FlexDirection('unset', 2);
    FlexDirection_column_instance = new FlexDirection('column', 3);
    FlexDirection_columnReverse_instance = new FlexDirection('columnReverse', 4);
    FlexDirection_row_instance = new FlexDirection('row', 5);
    FlexDirection_rowReverse_instance = new FlexDirection('rowReverse', 6);
  }
  function FlexDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(FlexDirection).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var FlexWrap_initial_instance;
  var FlexWrap_inherit_instance;
  var FlexWrap_unset_instance;
  var FlexWrap_nowrap_instance;
  var FlexWrap_wrap_instance;
  var FlexWrap_wrapReverse_instance;
  function values_15() {
    return [FlexWrap_initial_getInstance(), FlexWrap_inherit_getInstance(), FlexWrap_unset_getInstance(), FlexWrap_nowrap_getInstance(), FlexWrap_wrap_getInstance(), FlexWrap_wrapReverse_getInstance()];
  }
  function valueOf_15(value) {
    switch (value) {
      case 'initial':
        return FlexWrap_initial_getInstance();
      case 'inherit':
        return FlexWrap_inherit_getInstance();
      case 'unset':
        return FlexWrap_unset_getInstance();
      case 'nowrap':
        return FlexWrap_nowrap_getInstance();
      case 'wrap':
        return FlexWrap_wrap_getInstance();
      case 'wrapReverse':
        return FlexWrap_wrapReverse_getInstance();
      default:
        FlexWrap_initEntries();
        THROW_ISE();
        break;
    }
  }
  var FlexWrap_entriesInitialized;
  function FlexWrap_initEntries() {
    if (FlexWrap_entriesInitialized)
      return Unit_getInstance();
    FlexWrap_entriesInitialized = true;
    FlexWrap_initial_instance = new FlexWrap('initial', 0);
    FlexWrap_inherit_instance = new FlexWrap('inherit', 1);
    FlexWrap_unset_instance = new FlexWrap('unset', 2);
    FlexWrap_nowrap_instance = new FlexWrap('nowrap', 3);
    FlexWrap_wrap_instance = new FlexWrap('wrap', 4);
    FlexWrap_wrapReverse_instance = new FlexWrap('wrapReverse', 5);
  }
  function FlexWrap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(FlexWrap).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var Float_initial_instance;
  var Float_inherit_instance;
  var Float_unset_instance;
  var Float_left_instance;
  var Float_right_instance;
  var Float_none_instance;
  function values_16() {
    return [Float_initial_getInstance(), Float_inherit_getInstance(), Float_unset_getInstance(), Float_left_getInstance(), Float_right_getInstance(), Float_none_getInstance()];
  }
  function valueOf_16(value) {
    switch (value) {
      case 'initial':
        return Float_initial_getInstance();
      case 'inherit':
        return Float_inherit_getInstance();
      case 'unset':
        return Float_unset_getInstance();
      case 'left':
        return Float_left_getInstance();
      case 'right':
        return Float_right_getInstance();
      case 'none':
        return Float_none_getInstance();
      default:
        Float_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Float_entriesInitialized;
  function Float_initEntries() {
    if (Float_entriesInitialized)
      return Unit_getInstance();
    Float_entriesInitialized = true;
    Float_initial_instance = new Float('initial', 0);
    Float_inherit_instance = new Float('inherit', 1);
    Float_unset_instance = new Float('unset', 2);
    Float_left_instance = new Float('left', 3);
    Float_right_instance = new Float('right', 4);
    Float_none_instance = new Float('none', 5);
  }
  function Float(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Float).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var FontStyle_initial_instance;
  var FontStyle_inherit_instance;
  var FontStyle_unset_instance;
  var FontStyle_normal_instance;
  var FontStyle_italic_instance;
  function values_17() {
    return [FontStyle_initial_getInstance(), FontStyle_inherit_getInstance(), FontStyle_unset_getInstance(), FontStyle_normal_getInstance(), FontStyle_italic_getInstance()];
  }
  function valueOf_17(value) {
    switch (value) {
      case 'initial':
        return FontStyle_initial_getInstance();
      case 'inherit':
        return FontStyle_inherit_getInstance();
      case 'unset':
        return FontStyle_unset_getInstance();
      case 'normal':
        return FontStyle_normal_getInstance();
      case 'italic':
        return FontStyle_italic_getInstance();
      default:
        FontStyle_initEntries();
        THROW_ISE();
        break;
    }
  }
  var FontStyle_entriesInitialized;
  function FontStyle_initEntries() {
    if (FontStyle_entriesInitialized)
      return Unit_getInstance();
    FontStyle_entriesInitialized = true;
    FontStyle_initial_instance = new FontStyle('initial', 0);
    FontStyle_inherit_instance = new FontStyle('inherit', 1);
    FontStyle_unset_instance = new FontStyle('unset', 2);
    FontStyle_normal_instance = new FontStyle('normal', 3);
    FontStyle_italic_instance = new FontStyle('italic', 4);
  }
  function FontStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.initial_1 = new FontWeight('initial');
    this.inherit_1 = new FontWeight('inherit');
    this.unset_1 = new FontWeight('unset');
    this.normal_1 = new FontWeight('normal');
    this.bold_1 = new FontWeight('bold');
    this.bolder_1 = new FontWeight('bolder');
    this.lighter_1 = new FontWeight('lighter');
    this.w900__1 = new FontWeight('900');
    this.w800__1 = new FontWeight('800');
    this.w700__1 = new FontWeight('700');
    this.w600__1 = new FontWeight('600');
    this.w500__1 = new FontWeight('500');
    this.w400__1 = new FontWeight('400');
    this.w300__1 = new FontWeight('300');
    this.w200__1 = new FontWeight('200');
    this.w100__1 = new FontWeight('100');
  }
  protoOf(Companion_3).get_initial_xhjoez_k$ = function () {
    return this.initial_1;
  };
  protoOf(Companion_3).get_inherit_xgqhw2_k$ = function () {
    return this.inherit_1;
  };
  protoOf(Companion_3).get_unset_izq1hc_k$ = function () {
    return this.unset_1;
  };
  protoOf(Companion_3).get_normal_h7qsj4_k$ = function () {
    return this.normal_1;
  };
  protoOf(Companion_3).get_bold_wojl5a_k$ = function () {
    return this.bold_1;
  };
  protoOf(Companion_3).get_bolder_bj3baz_k$ = function () {
    return this.bolder_1;
  };
  protoOf(Companion_3).get_lighter_433cd6_k$ = function () {
    return this.lighter_1;
  };
  protoOf(Companion_3).get_w900_wovucr_k$ = function () {
    return this.w900__1;
  };
  protoOf(Companion_3).get_w800_wovtm2_k$ = function () {
    return this.w800__1;
  };
  protoOf(Companion_3).get_w700_wovsvd_k$ = function () {
    return this.w700__1;
  };
  protoOf(Companion_3).get_w600_wovs4o_k$ = function () {
    return this.w600__1;
  };
  protoOf(Companion_3).get_w500_wovrdz_k$ = function () {
    return this.w500__1;
  };
  protoOf(Companion_3).get_w400_wovqna_k$ = function () {
    return this.w400__1;
  };
  protoOf(Companion_3).get_w300_wovpwl_k$ = function () {
    return this.w300__1;
  };
  protoOf(Companion_3).get_w200_wovp5w_k$ = function () {
    return this.w200__1;
  };
  protoOf(Companion_3).get_w100_wovof7_k$ = function () {
    return this.w100__1;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function FontWeight(value) {
    Companion_getInstance_3();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(FontWeight).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function GridAutoColumns_init_$Init$(dims, $this) {
    GridAutoColumns.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridAutoColumns_init_$Create$(dims) {
    return GridAutoColumns_init_$Init$(dims, objectCreate(protoOf(GridAutoColumns)));
  }
  function GridAutoColumns_init_$Init$_0(values, $this) {
    GridAutoColumns.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridAutoColumns_init_$Create$_0(values) {
    return GridAutoColumns_init_$Init$_0(values, objectCreate(protoOf(GridAutoColumns)));
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.auto_1 = new GridAutoColumns('auto');
    this.maxContent_1 = new GridAutoColumns('max-content');
    this.minContent_1 = new GridAutoColumns('min-content');
  }
  protoOf(Companion_4).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  protoOf(Companion_4).get_maxContent_ez72f2_k$ = function () {
    return this.maxContent_1;
  };
  protoOf(Companion_4).get_minContent_f65gog_k$ = function () {
    return this.minContent_1;
  };
  protoOf(Companion_4).fitContent_l66rv3_k$ = function (argument) {
    return new GridAutoColumns('minmax(auto, max(auto, ' + argument + '))');
  };
  protoOf(Companion_4).minMax_v23ifi_k$ = function (min, max) {
    return new GridAutoColumns('minmax(' + min + ', ' + max + ')');
  };
  protoOf(Companion_4).minMax_fn6y9s_k$ = function (min, max) {
    return new GridAutoColumns('minmax(' + min + ', ' + max + ')');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function GridAutoColumns(value) {
    Companion_getInstance_4();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridAutoColumns).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.initial_1 = new GridAutoFlow('initial');
    this.inherit_1 = new GridAutoFlow('inherit');
    this.unset_1 = new GridAutoFlow('unset');
    this.column_1 = new GridAutoFlow('column');
    this.columnDense_1 = new GridAutoFlow('column dense');
    this.dense_1 = new GridAutoFlow('dense');
    this.row_1 = new GridAutoFlow('row');
    this.rowDense_1 = new GridAutoFlow('row dense');
  }
  protoOf(Companion_5).get_initial_xhjoez_k$ = function () {
    return this.initial_1;
  };
  protoOf(Companion_5).get_inherit_xgqhw2_k$ = function () {
    return this.inherit_1;
  };
  protoOf(Companion_5).get_unset_izq1hc_k$ = function () {
    return this.unset_1;
  };
  protoOf(Companion_5).get_column_c05ahr_k$ = function () {
    return this.column_1;
  };
  protoOf(Companion_5).get_columnDense_bw268_k$ = function () {
    return this.columnDense_1;
  };
  protoOf(Companion_5).get_dense_iq7p4m_k$ = function () {
    return this.dense_1;
  };
  protoOf(Companion_5).get_row_18iwsv_k$ = function () {
    return this.row_1;
  };
  protoOf(Companion_5).get_rowDense_vi05w2_k$ = function () {
    return this.rowDense_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function GridAutoFlow(value) {
    Companion_getInstance_5();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridAutoFlow).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function GridAutoRows_init_$Init$(dims, $this) {
    GridAutoRows.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridAutoRows_init_$Create$(dims) {
    return GridAutoRows_init_$Init$(dims, objectCreate(protoOf(GridAutoRows)));
  }
  function GridAutoRows_init_$Init$_0(values, $this) {
    GridAutoRows.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridAutoRows_init_$Create$_0(values) {
    return GridAutoRows_init_$Init$_0(values, objectCreate(protoOf(GridAutoRows)));
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.auto_1 = new GridAutoRows('auto');
    this.maxContent_1 = new GridAutoRows('max-content');
    this.minContent_1 = new GridAutoRows('min-content');
  }
  protoOf(Companion_6).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  protoOf(Companion_6).get_maxContent_ez72f2_k$ = function () {
    return this.maxContent_1;
  };
  protoOf(Companion_6).get_minContent_f65gog_k$ = function () {
    return this.minContent_1;
  };
  protoOf(Companion_6).fitContent_5gs9zt_k$ = function (argument) {
    return new GridAutoRows('minmax(auto, max(auto, ' + argument + '))');
  };
  protoOf(Companion_6).minMax_v23ifi_k$ = function (min, max) {
    return new GridAutoRows('minmax(' + min + ', ' + max + ')');
  };
  protoOf(Companion_6).minMax_z0vtny_k$ = function (min, max) {
    return new GridAutoRows('minmax(' + min + ', ' + max + ')');
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function GridAutoRows(value) {
    Companion_getInstance_6();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridAutoRows).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_7() {
    Companion_instance_7 = this;
    this.auto_1 = new GridColumn('auto');
  }
  protoOf(Companion_7).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function GridColumn(value) {
    Companion_getInstance_7();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridColumn).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_8() {
    Companion_instance_8 = this;
    this.auto_1 = new GridColumnEnd('auto');
  }
  protoOf(Companion_8).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function GridColumnEnd(value) {
    Companion_getInstance_8();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridColumnEnd).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_9() {
    Companion_instance_9 = this;
    this.auto_1 = new GridColumnStart('auto');
  }
  protoOf(Companion_9).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function GridColumnStart(value) {
    Companion_getInstance_9();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridColumnStart).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.auto_1 = new GridRow('auto');
  }
  protoOf(Companion_10).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function GridRow(value) {
    Companion_getInstance_10();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridRow).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_11() {
    Companion_instance_11 = this;
    this.auto_1 = new GridRowEnd('auto');
  }
  protoOf(Companion_11).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function GridRowEnd(value) {
    Companion_getInstance_11();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridRowEnd).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_12() {
    Companion_instance_12 = this;
    this.auto_1 = new GridRowStart('auto');
  }
  protoOf(Companion_12).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function GridRowStart(value) {
    Companion_getInstance_12();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridRowStart).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_13() {
    Companion_instance_13 = this;
    this.none_1 = new GridTemplate('none');
  }
  protoOf(Companion_13).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function GridTemplate(value) {
    Companion_getInstance_13();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridTemplate).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_14() {
    Companion_instance_14 = this;
    this.none_1 = new GridTemplateAreas('none');
  }
  protoOf(Companion_14).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function GridTemplateAreas(value) {
    Companion_getInstance_14();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridTemplateAreas).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function GridTemplateColumns_init_$Init$(dims, $this) {
    GridTemplateColumns.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridTemplateColumns_init_$Create$(dims) {
    return GridTemplateColumns_init_$Init$(dims, objectCreate(protoOf(GridTemplateColumns)));
  }
  function GridTemplateColumns_init_$Init$_0(values, $this) {
    GridTemplateColumns.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridTemplateColumns_init_$Create$_0(values) {
    return GridTemplateColumns_init_$Init$_0(values, objectCreate(protoOf(GridTemplateColumns)));
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.auto_1 = new GridTemplateColumns('auto');
    this.maxContent_1 = new GridTemplateColumns('max-content');
    this.minContent_1 = new GridTemplateColumns('min-content');
    this.none_1 = new GridTemplateColumns('none');
  }
  protoOf(Companion_15).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  protoOf(Companion_15).get_maxContent_ez72f2_k$ = function () {
    return this.maxContent_1;
  };
  protoOf(Companion_15).get_minContent_f65gog_k$ = function () {
    return this.minContent_1;
  };
  protoOf(Companion_15).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  protoOf(Companion_15).fitContent_550at4_k$ = function (dim) {
    return new GridTemplateColumns('min(max-content, max(auto, ' + dim + '))');
  };
  protoOf(Companion_15).minMax_v23ifi_k$ = function (min, max) {
    return new GridTemplateColumns('minmax(' + min + ', ' + max + ')');
  };
  protoOf(Companion_15).minMax_6l1elm_k$ = function (min, max) {
    return new GridTemplateColumns('minmax(' + min + ', ' + max + ')');
  };
  protoOf(Companion_15).repeat_eexamy_k$ = function (argument) {
    return new GridTemplateColumns('repeat(' + argument + ')');
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function GridTemplateColumns(value) {
    Companion_getInstance_15();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridTemplateColumns).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function GridTemplateRows_init_$Init$(dims, $this) {
    GridTemplateRows.call($this, joinToString(dims, ' '));
    return $this;
  }
  function GridTemplateRows_init_$Create$(dims) {
    return GridTemplateRows_init_$Init$(dims, objectCreate(protoOf(GridTemplateRows)));
  }
  function GridTemplateRows_init_$Init$_0(values, $this) {
    GridTemplateRows.call($this, joinToString(values, ' '));
    return $this;
  }
  function GridTemplateRows_init_$Create$_0(values) {
    return GridTemplateRows_init_$Init$_0(values, objectCreate(protoOf(GridTemplateRows)));
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.auto_1 = new GridTemplateRows('auto');
    this.maxContent_1 = new GridTemplateRows('max-content');
    this.minContent_1 = new GridTemplateRows('min-content');
    this.none_1 = new GridTemplateRows('none');
  }
  protoOf(Companion_16).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  protoOf(Companion_16).get_maxContent_ez72f2_k$ = function () {
    return this.maxContent_1;
  };
  protoOf(Companion_16).get_minContent_f65gog_k$ = function () {
    return this.minContent_1;
  };
  protoOf(Companion_16).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  protoOf(Companion_16).fitContent_550at4_k$ = function (dim) {
    return new GridTemplateRows('min(max-content, max(auto, ' + dim + '))');
  };
  protoOf(Companion_16).minMax_v23ifi_k$ = function (min, max) {
    return new GridTemplateRows('minmax(' + min + ', ' + max + ')');
  };
  protoOf(Companion_16).minMax_adkm0i_k$ = function (min, max) {
    return new GridTemplateRows('minmax(' + min + ', ' + max + ')');
  };
  protoOf(Companion_16).repeat_eexamy_k$ = function (argument) {
    return new GridTemplateRows('repeat(' + argument + ')');
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function GridTemplateRows(value) {
    Companion_getInstance_16();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(GridTemplateRows).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  var Hyphens_initial_instance;
  var Hyphens_inherit_instance;
  var Hyphens_unset_instance;
  var Hyphens_none_instance;
  var Hyphens_manual_instance;
  var Hyphens_auto_instance;
  function values_18() {
    return [Hyphens_initial_getInstance(), Hyphens_inherit_getInstance(), Hyphens_unset_getInstance(), Hyphens_none_getInstance(), Hyphens_manual_getInstance(), Hyphens_auto_getInstance()];
  }
  function valueOf_18(value) {
    switch (value) {
      case 'initial':
        return Hyphens_initial_getInstance();
      case 'inherit':
        return Hyphens_inherit_getInstance();
      case 'unset':
        return Hyphens_unset_getInstance();
      case 'none':
        return Hyphens_none_getInstance();
      case 'manual':
        return Hyphens_manual_getInstance();
      case 'auto':
        return Hyphens_auto_getInstance();
      default:
        Hyphens_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Hyphens_entriesInitialized;
  function Hyphens_initEntries() {
    if (Hyphens_entriesInitialized)
      return Unit_getInstance();
    Hyphens_entriesInitialized = true;
    Hyphens_initial_instance = new Hyphens('initial', 0);
    Hyphens_inherit_instance = new Hyphens('inherit', 1);
    Hyphens_unset_instance = new Hyphens('unset', 2);
    Hyphens_none_instance = new Hyphens('none', 3);
    Hyphens_manual_instance = new Hyphens('manual', 4);
    Hyphens_auto_instance = new Hyphens('auto', 5);
  }
  function Hyphens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var Isolation_initial_instance;
  var Isolation_inherit_instance;
  var Isolation_revert_instance;
  var Isolation_unset_instance;
  var Isolation_auto_instance;
  var Isolation_isolate_instance;
  function values_19() {
    return [Isolation_initial_getInstance(), Isolation_inherit_getInstance(), Isolation_revert_getInstance(), Isolation_unset_getInstance(), Isolation_auto_getInstance(), Isolation_isolate_getInstance()];
  }
  function valueOf_19(value) {
    switch (value) {
      case 'initial':
        return Isolation_initial_getInstance();
      case 'inherit':
        return Isolation_inherit_getInstance();
      case 'revert':
        return Isolation_revert_getInstance();
      case 'unset':
        return Isolation_unset_getInstance();
      case 'auto':
        return Isolation_auto_getInstance();
      case 'isolate':
        return Isolation_isolate_getInstance();
      default:
        Isolation_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Isolation_entriesInitialized;
  function Isolation_initEntries() {
    if (Isolation_entriesInitialized)
      return Unit_getInstance();
    Isolation_entriesInitialized = true;
    Isolation_initial_instance = new Isolation('initial', 0);
    Isolation_inherit_instance = new Isolation('inherit', 1);
    Isolation_revert_instance = new Isolation('revert', 2);
    Isolation_unset_instance = new Isolation('unset', 3);
    Isolation_auto_instance = new Isolation('auto', 4);
    Isolation_isolate_instance = new Isolation('isolate', 5);
  }
  function Isolation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var JustifyContent_initial_instance;
  var JustifyContent_inherit_instance;
  var JustifyContent_unset_instance;
  var JustifyContent_center_instance;
  var JustifyContent_start_instance;
  var JustifyContent_end_instance;
  var JustifyContent_flexStart_instance;
  var JustifyContent_flexEnd_instance;
  var JustifyContent_left_instance;
  var JustifyContent_right_instance;
  var JustifyContent_baseline_instance;
  var JustifyContent_firstBaseline_instance;
  var JustifyContent_lastBaseline_instance;
  var JustifyContent_spaceBetween_instance;
  var JustifyContent_spaceAround_instance;
  var JustifyContent_spaceEvenly_instance;
  var JustifyContent_stretch_instance;
  var JustifyContent_safeCenter_instance;
  var JustifyContent_unsafeCenter_instance;
  function values_20() {
    return [JustifyContent_initial_getInstance(), JustifyContent_inherit_getInstance(), JustifyContent_unset_getInstance(), JustifyContent_center_getInstance(), JustifyContent_start_getInstance(), JustifyContent_end_getInstance(), JustifyContent_flexStart_getInstance(), JustifyContent_flexEnd_getInstance(), JustifyContent_left_getInstance(), JustifyContent_right_getInstance(), JustifyContent_baseline_getInstance(), JustifyContent_firstBaseline_getInstance(), JustifyContent_lastBaseline_getInstance(), JustifyContent_spaceBetween_getInstance(), JustifyContent_spaceAround_getInstance(), JustifyContent_spaceEvenly_getInstance(), JustifyContent_stretch_getInstance(), JustifyContent_safeCenter_getInstance(), JustifyContent_unsafeCenter_getInstance()];
  }
  function valueOf_20(value) {
    switch (value) {
      case 'initial':
        return JustifyContent_initial_getInstance();
      case 'inherit':
        return JustifyContent_inherit_getInstance();
      case 'unset':
        return JustifyContent_unset_getInstance();
      case 'center':
        return JustifyContent_center_getInstance();
      case 'start':
        return JustifyContent_start_getInstance();
      case 'end':
        return JustifyContent_end_getInstance();
      case 'flexStart':
        return JustifyContent_flexStart_getInstance();
      case 'flexEnd':
        return JustifyContent_flexEnd_getInstance();
      case 'left':
        return JustifyContent_left_getInstance();
      case 'right':
        return JustifyContent_right_getInstance();
      case 'baseline':
        return JustifyContent_baseline_getInstance();
      case 'firstBaseline':
        return JustifyContent_firstBaseline_getInstance();
      case 'lastBaseline':
        return JustifyContent_lastBaseline_getInstance();
      case 'spaceBetween':
        return JustifyContent_spaceBetween_getInstance();
      case 'spaceAround':
        return JustifyContent_spaceAround_getInstance();
      case 'spaceEvenly':
        return JustifyContent_spaceEvenly_getInstance();
      case 'stretch':
        return JustifyContent_stretch_getInstance();
      case 'safeCenter':
        return JustifyContent_safeCenter_getInstance();
      case 'unsafeCenter':
        return JustifyContent_unsafeCenter_getInstance();
      default:
        JustifyContent_initEntries();
        THROW_ISE();
        break;
    }
  }
  var JustifyContent_entriesInitialized;
  function JustifyContent_initEntries() {
    if (JustifyContent_entriesInitialized)
      return Unit_getInstance();
    JustifyContent_entriesInitialized = true;
    JustifyContent_initial_instance = new JustifyContent('initial', 0);
    JustifyContent_inherit_instance = new JustifyContent('inherit', 1);
    JustifyContent_unset_instance = new JustifyContent('unset', 2);
    JustifyContent_center_instance = new JustifyContent('center', 3);
    JustifyContent_start_instance = new JustifyContent('start', 4);
    JustifyContent_end_instance = new JustifyContent('end', 5);
    JustifyContent_flexStart_instance = new JustifyContent('flexStart', 6);
    JustifyContent_flexEnd_instance = new JustifyContent('flexEnd', 7);
    JustifyContent_left_instance = new JustifyContent('left', 8);
    JustifyContent_right_instance = new JustifyContent('right', 9);
    JustifyContent_baseline_instance = new JustifyContent('baseline', 10);
    JustifyContent_firstBaseline_instance = new JustifyContent('firstBaseline', 11);
    JustifyContent_lastBaseline_instance = new JustifyContent('lastBaseline', 12);
    JustifyContent_spaceBetween_instance = new JustifyContent('spaceBetween', 13);
    JustifyContent_spaceAround_instance = new JustifyContent('spaceAround', 14);
    JustifyContent_spaceEvenly_instance = new JustifyContent('spaceEvenly', 15);
    JustifyContent_stretch_instance = new JustifyContent('stretch', 16);
    JustifyContent_safeCenter_instance = new JustifyContent('safeCenter', 17);
    JustifyContent_unsafeCenter_instance = new JustifyContent('unsafeCenter', 18);
  }
  function JustifyContent(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(JustifyContent).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var JustifyItems_initial_instance;
  var JustifyItems_inherit_instance;
  var JustifyItems_unset_instance;
  var JustifyItems_auto_instance;
  var JustifyItems_normal_instance;
  var JustifyItems_stretch_instance;
  var JustifyItems_center_instance;
  var JustifyItems_start_instance;
  var JustifyItems_end_instance;
  var JustifyItems_flexStart_instance;
  var JustifyItems_flexEnd_instance;
  var JustifyItems_selfStart_instance;
  var JustifyItems_selfEnd_instance;
  var JustifyItems_left_instance;
  var JustifyItems_right_instance;
  var JustifyItems_baseline_instance;
  function values_21() {
    return [JustifyItems_initial_getInstance(), JustifyItems_inherit_getInstance(), JustifyItems_unset_getInstance(), JustifyItems_auto_getInstance(), JustifyItems_normal_getInstance(), JustifyItems_stretch_getInstance(), JustifyItems_center_getInstance(), JustifyItems_start_getInstance(), JustifyItems_end_getInstance(), JustifyItems_flexStart_getInstance(), JustifyItems_flexEnd_getInstance(), JustifyItems_selfStart_getInstance(), JustifyItems_selfEnd_getInstance(), JustifyItems_left_getInstance(), JustifyItems_right_getInstance(), JustifyItems_baseline_getInstance()];
  }
  function valueOf_21(value) {
    switch (value) {
      case 'initial':
        return JustifyItems_initial_getInstance();
      case 'inherit':
        return JustifyItems_inherit_getInstance();
      case 'unset':
        return JustifyItems_unset_getInstance();
      case 'auto':
        return JustifyItems_auto_getInstance();
      case 'normal':
        return JustifyItems_normal_getInstance();
      case 'stretch':
        return JustifyItems_stretch_getInstance();
      case 'center':
        return JustifyItems_center_getInstance();
      case 'start':
        return JustifyItems_start_getInstance();
      case 'end':
        return JustifyItems_end_getInstance();
      case 'flexStart':
        return JustifyItems_flexStart_getInstance();
      case 'flexEnd':
        return JustifyItems_flexEnd_getInstance();
      case 'selfStart':
        return JustifyItems_selfStart_getInstance();
      case 'selfEnd':
        return JustifyItems_selfEnd_getInstance();
      case 'left':
        return JustifyItems_left_getInstance();
      case 'right':
        return JustifyItems_right_getInstance();
      case 'baseline':
        return JustifyItems_baseline_getInstance();
      default:
        JustifyItems_initEntries();
        THROW_ISE();
        break;
    }
  }
  var JustifyItems_entriesInitialized;
  function JustifyItems_initEntries() {
    if (JustifyItems_entriesInitialized)
      return Unit_getInstance();
    JustifyItems_entriesInitialized = true;
    JustifyItems_initial_instance = new JustifyItems('initial', 0);
    JustifyItems_inherit_instance = new JustifyItems('inherit', 1);
    JustifyItems_unset_instance = new JustifyItems('unset', 2);
    JustifyItems_auto_instance = new JustifyItems('auto', 3);
    JustifyItems_normal_instance = new JustifyItems('normal', 4);
    JustifyItems_stretch_instance = new JustifyItems('stretch', 5);
    JustifyItems_center_instance = new JustifyItems('center', 6);
    JustifyItems_start_instance = new JustifyItems('start', 7);
    JustifyItems_end_instance = new JustifyItems('end', 8);
    JustifyItems_flexStart_instance = new JustifyItems('flexStart', 9);
    JustifyItems_flexEnd_instance = new JustifyItems('flexEnd', 10);
    JustifyItems_selfStart_instance = new JustifyItems('selfStart', 11);
    JustifyItems_selfEnd_instance = new JustifyItems('selfEnd', 12);
    JustifyItems_left_instance = new JustifyItems('left', 13);
    JustifyItems_right_instance = new JustifyItems('right', 14);
    JustifyItems_baseline_instance = new JustifyItems('baseline', 15);
  }
  function JustifyItems(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(JustifyItems).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var ListStyleType_initial_instance;
  var ListStyleType_inherit_instance;
  var ListStyleType_unset_instance;
  var ListStyleType_none_instance;
  var ListStyleType_disc_instance;
  var ListStyleType_circle_instance;
  var ListStyleType_square_instance;
  var ListStyleType_decimal_instance;
  function values_22() {
    return [ListStyleType_initial_getInstance(), ListStyleType_inherit_getInstance(), ListStyleType_unset_getInstance(), ListStyleType_none_getInstance(), ListStyleType_disc_getInstance(), ListStyleType_circle_getInstance(), ListStyleType_square_getInstance(), ListStyleType_decimal_getInstance()];
  }
  function valueOf_22(value) {
    switch (value) {
      case 'initial':
        return ListStyleType_initial_getInstance();
      case 'inherit':
        return ListStyleType_inherit_getInstance();
      case 'unset':
        return ListStyleType_unset_getInstance();
      case 'none':
        return ListStyleType_none_getInstance();
      case 'disc':
        return ListStyleType_disc_getInstance();
      case 'circle':
        return ListStyleType_circle_getInstance();
      case 'square':
        return ListStyleType_square_getInstance();
      case 'decimal':
        return ListStyleType_decimal_getInstance();
      default:
        ListStyleType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ListStyleType_entriesInitialized;
  function ListStyleType_initEntries() {
    if (ListStyleType_entriesInitialized)
      return Unit_getInstance();
    ListStyleType_entriesInitialized = true;
    ListStyleType_initial_instance = new ListStyleType('initial', 0);
    ListStyleType_inherit_instance = new ListStyleType('inherit', 1);
    ListStyleType_unset_instance = new ListStyleType('unset', 2);
    ListStyleType_none_instance = new ListStyleType('none', 3);
    ListStyleType_disc_instance = new ListStyleType('disc', 4);
    ListStyleType_circle_instance = new ListStyleType('circle', 5);
    ListStyleType_square_instance = new ListStyleType('square', 6);
    ListStyleType_decimal_instance = new ListStyleType('decimal', 7);
  }
  function ListStyleType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ListStyleType).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var ObjectFit_initial_instance;
  var ObjectFit_inherit_instance;
  var ObjectFit_unset_instance;
  var ObjectFit_contain_instance;
  var ObjectFit_cover_instance;
  var ObjectFit_fill_instance;
  var ObjectFit_none_instance;
  var ObjectFit_scaleDown_instance;
  function values_23() {
    return [ObjectFit_initial_getInstance(), ObjectFit_inherit_getInstance(), ObjectFit_unset_getInstance(), ObjectFit_contain_getInstance(), ObjectFit_cover_getInstance(), ObjectFit_fill_getInstance(), ObjectFit_none_getInstance(), ObjectFit_scaleDown_getInstance()];
  }
  function valueOf_23(value) {
    switch (value) {
      case 'initial':
        return ObjectFit_initial_getInstance();
      case 'inherit':
        return ObjectFit_inherit_getInstance();
      case 'unset':
        return ObjectFit_unset_getInstance();
      case 'contain':
        return ObjectFit_contain_getInstance();
      case 'cover':
        return ObjectFit_cover_getInstance();
      case 'fill':
        return ObjectFit_fill_getInstance();
      case 'none':
        return ObjectFit_none_getInstance();
      case 'scaleDown':
        return ObjectFit_scaleDown_getInstance();
      default:
        ObjectFit_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ObjectFit_entriesInitialized;
  function ObjectFit_initEntries() {
    if (ObjectFit_entriesInitialized)
      return Unit_getInstance();
    ObjectFit_entriesInitialized = true;
    ObjectFit_initial_instance = new ObjectFit('initial', 0);
    ObjectFit_inherit_instance = new ObjectFit('inherit', 1);
    ObjectFit_unset_instance = new ObjectFit('unset', 2);
    ObjectFit_contain_instance = new ObjectFit('contain', 3);
    ObjectFit_cover_instance = new ObjectFit('cover', 4);
    ObjectFit_fill_instance = new ObjectFit('fill', 5);
    ObjectFit_none_instance = new ObjectFit('none', 6);
    ObjectFit_scaleDown_instance = new ObjectFit('scaleDown', 7);
  }
  function ObjectFit(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ObjectFit).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  function Order_init_$Init$(value, $this) {
    Order.call($this, value.toString());
    return $this;
  }
  function Order_init_$Create$(value) {
    return Order_init_$Init$(value, objectCreate(protoOf(Order)));
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.inherit_1 = new Order('inherit');
    this.initial_1 = new Order('initial');
    this.revert_1 = new Order('revert');
    this.revertLayer_1 = new Order('revert-layer');
    this.unset_1 = new Order('unset');
  }
  protoOf(Companion_17).get_inherit_xgqhw2_k$ = function () {
    return this.inherit_1;
  };
  protoOf(Companion_17).get_initial_xhjoez_k$ = function () {
    return this.initial_1;
  };
  protoOf(Companion_17).get_revert_iyhqlp_k$ = function () {
    return this.revert_1;
  };
  protoOf(Companion_17).get_revertLayer_vvlrj0_k$ = function () {
    return this.revertLayer_1;
  };
  protoOf(Companion_17).get_unset_izq1hc_k$ = function () {
    return this.unset_1;
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Order(value) {
    Companion_getInstance_17();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(Order).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  var Outline_initial_instance;
  var Outline_inherit_instance;
  var Outline_unset_instance;
  var Outline_none_instance;
  function values_24() {
    return [Outline_initial_getInstance(), Outline_inherit_getInstance(), Outline_unset_getInstance(), Outline_none_getInstance()];
  }
  function valueOf_24(value) {
    switch (value) {
      case 'initial':
        return Outline_initial_getInstance();
      case 'inherit':
        return Outline_inherit_getInstance();
      case 'unset':
        return Outline_unset_getInstance();
      case 'none':
        return Outline_none_getInstance();
      default:
        Outline_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Outline_entriesInitialized;
  function Outline_initEntries() {
    if (Outline_entriesInitialized)
      return Unit_getInstance();
    Outline_entriesInitialized = true;
    Outline_initial_instance = new Outline('initial', 0);
    Outline_inherit_instance = new Outline('inherit', 1);
    Outline_unset_instance = new Outline('unset', 2);
    Outline_none_instance = new Outline('none', 3);
  }
  function Outline(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var OutlineStyle_inherit_instance;
  var OutlineStyle_initial_instance;
  var OutlineStyle_revert_instance;
  var OutlineStyle_revertLayer_instance;
  var OutlineStyle_unset_instance;
  var OutlineStyle_auto_instance;
  var OutlineStyle_none_instance;
  var OutlineStyle_dotted_instance;
  var OutlineStyle_dashed_instance;
  var OutlineStyle_solid_instance;
  var OutlineStyle_double_instance;
  var OutlineStyle_groove_instance;
  var OutlineStyle_ridge_instance;
  var OutlineStyle_inset_instance;
  var OutlineStyle_outset_instance;
  function values_25() {
    return [OutlineStyle_inherit_getInstance(), OutlineStyle_initial_getInstance(), OutlineStyle_revert_getInstance(), OutlineStyle_revertLayer_getInstance(), OutlineStyle_unset_getInstance(), OutlineStyle_auto_getInstance(), OutlineStyle_none_getInstance(), OutlineStyle_dotted_getInstance(), OutlineStyle_dashed_getInstance(), OutlineStyle_solid_getInstance(), OutlineStyle_double_getInstance(), OutlineStyle_groove_getInstance(), OutlineStyle_ridge_getInstance(), OutlineStyle_inset_getInstance(), OutlineStyle_outset_getInstance()];
  }
  function valueOf_25(value) {
    switch (value) {
      case 'inherit':
        return OutlineStyle_inherit_getInstance();
      case 'initial':
        return OutlineStyle_initial_getInstance();
      case 'revert':
        return OutlineStyle_revert_getInstance();
      case 'revertLayer':
        return OutlineStyle_revertLayer_getInstance();
      case 'unset':
        return OutlineStyle_unset_getInstance();
      case 'auto':
        return OutlineStyle_auto_getInstance();
      case 'none':
        return OutlineStyle_none_getInstance();
      case 'dotted':
        return OutlineStyle_dotted_getInstance();
      case 'dashed':
        return OutlineStyle_dashed_getInstance();
      case 'solid':
        return OutlineStyle_solid_getInstance();
      case 'double':
        return OutlineStyle_double_getInstance();
      case 'groove':
        return OutlineStyle_groove_getInstance();
      case 'ridge':
        return OutlineStyle_ridge_getInstance();
      case 'inset':
        return OutlineStyle_inset_getInstance();
      case 'outset':
        return OutlineStyle_outset_getInstance();
      default:
        OutlineStyle_initEntries();
        THROW_ISE();
        break;
    }
  }
  var OutlineStyle_entriesInitialized;
  function OutlineStyle_initEntries() {
    if (OutlineStyle_entriesInitialized)
      return Unit_getInstance();
    OutlineStyle_entriesInitialized = true;
    OutlineStyle_inherit_instance = new OutlineStyle('inherit', 0);
    OutlineStyle_initial_instance = new OutlineStyle('initial', 1);
    OutlineStyle_revert_instance = new OutlineStyle('revert', 2);
    OutlineStyle_revertLayer_instance = new OutlineStyle('revertLayer', 3);
    OutlineStyle_unset_instance = new OutlineStyle('unset', 4);
    OutlineStyle_auto_instance = new OutlineStyle('auto', 5);
    OutlineStyle_none_instance = new OutlineStyle('none', 6);
    OutlineStyle_dotted_instance = new OutlineStyle('dotted', 7);
    OutlineStyle_dashed_instance = new OutlineStyle('dashed', 8);
    OutlineStyle_solid_instance = new OutlineStyle('solid', 9);
    OutlineStyle_double_instance = new OutlineStyle('double', 10);
    OutlineStyle_groove_instance = new OutlineStyle('groove', 11);
    OutlineStyle_ridge_instance = new OutlineStyle('ridge', 12);
    OutlineStyle_inset_instance = new OutlineStyle('inset', 13);
    OutlineStyle_outset_instance = new OutlineStyle('outset', 14);
  }
  function OutlineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(OutlineStyle).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var Overflow_initial_instance;
  var Overflow_inherit_instance;
  var Overflow_unset_instance;
  var Overflow_visible_instance;
  var Overflow_hidden_instance;
  var Overflow_scroll_instance;
  var Overflow_auto_instance;
  function values_26() {
    return [Overflow_initial_getInstance(), Overflow_inherit_getInstance(), Overflow_unset_getInstance(), Overflow_visible_getInstance(), Overflow_hidden_getInstance(), Overflow_scroll_getInstance(), Overflow_auto_getInstance()];
  }
  function valueOf_26(value) {
    switch (value) {
      case 'initial':
        return Overflow_initial_getInstance();
      case 'inherit':
        return Overflow_inherit_getInstance();
      case 'unset':
        return Overflow_unset_getInstance();
      case 'visible':
        return Overflow_visible_getInstance();
      case 'hidden':
        return Overflow_hidden_getInstance();
      case 'scroll':
        return Overflow_scroll_getInstance();
      case 'auto':
        return Overflow_auto_getInstance();
      default:
        Overflow_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Overflow_entriesInitialized;
  function Overflow_initEntries() {
    if (Overflow_entriesInitialized)
      return Unit_getInstance();
    Overflow_entriesInitialized = true;
    Overflow_initial_instance = new Overflow('initial', 0);
    Overflow_inherit_instance = new Overflow('inherit', 1);
    Overflow_unset_instance = new Overflow('unset', 2);
    Overflow_visible_instance = new Overflow('visible', 3);
    Overflow_hidden_instance = new Overflow('hidden', 4);
    Overflow_scroll_instance = new Overflow('scroll', 5);
    Overflow_auto_instance = new Overflow('auto', 6);
  }
  function Overflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var OverflowWrap_initial_instance;
  var OverflowWrap_inherit_instance;
  var OverflowWrap_unset_instance;
  var OverflowWrap_normal_instance;
  var OverflowWrap_anywhere_instance;
  var OverflowWrap_breakWord_instance;
  function values_27() {
    return [OverflowWrap_initial_getInstance(), OverflowWrap_inherit_getInstance(), OverflowWrap_unset_getInstance(), OverflowWrap_normal_getInstance(), OverflowWrap_anywhere_getInstance(), OverflowWrap_breakWord_getInstance()];
  }
  function valueOf_27(value) {
    switch (value) {
      case 'initial':
        return OverflowWrap_initial_getInstance();
      case 'inherit':
        return OverflowWrap_inherit_getInstance();
      case 'unset':
        return OverflowWrap_unset_getInstance();
      case 'normal':
        return OverflowWrap_normal_getInstance();
      case 'anywhere':
        return OverflowWrap_anywhere_getInstance();
      case 'breakWord':
        return OverflowWrap_breakWord_getInstance();
      default:
        OverflowWrap_initEntries();
        THROW_ISE();
        break;
    }
  }
  var OverflowWrap_entriesInitialized;
  function OverflowWrap_initEntries() {
    if (OverflowWrap_entriesInitialized)
      return Unit_getInstance();
    OverflowWrap_entriesInitialized = true;
    OverflowWrap_initial_instance = new OverflowWrap('initial', 0);
    OverflowWrap_inherit_instance = new OverflowWrap('inherit', 1);
    OverflowWrap_unset_instance = new OverflowWrap('unset', 2);
    OverflowWrap_normal_instance = new OverflowWrap('normal', 3);
    OverflowWrap_anywhere_instance = new OverflowWrap('anywhere', 4);
    OverflowWrap_breakWord_instance = new OverflowWrap('breakWord', 5);
  }
  function OverflowWrap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(OverflowWrap).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var OverscrollBehavior_initial_instance;
  var OverscrollBehavior_inherit_instance;
  var OverscrollBehavior_unset_instance;
  var OverscrollBehavior_auto_instance;
  var OverscrollBehavior_contain_instance;
  var OverscrollBehavior_none_instance;
  function values_28() {
    return [OverscrollBehavior_initial_getInstance(), OverscrollBehavior_inherit_getInstance(), OverscrollBehavior_unset_getInstance(), OverscrollBehavior_auto_getInstance(), OverscrollBehavior_contain_getInstance(), OverscrollBehavior_none_getInstance()];
  }
  function valueOf_28(value) {
    switch (value) {
      case 'initial':
        return OverscrollBehavior_initial_getInstance();
      case 'inherit':
        return OverscrollBehavior_inherit_getInstance();
      case 'unset':
        return OverscrollBehavior_unset_getInstance();
      case 'auto':
        return OverscrollBehavior_auto_getInstance();
      case 'contain':
        return OverscrollBehavior_contain_getInstance();
      case 'none':
        return OverscrollBehavior_none_getInstance();
      default:
        OverscrollBehavior_initEntries();
        THROW_ISE();
        break;
    }
  }
  var OverscrollBehavior_entriesInitialized;
  function OverscrollBehavior_initEntries() {
    if (OverscrollBehavior_entriesInitialized)
      return Unit_getInstance();
    OverscrollBehavior_entriesInitialized = true;
    OverscrollBehavior_initial_instance = new OverscrollBehavior('initial', 0);
    OverscrollBehavior_inherit_instance = new OverscrollBehavior('inherit', 1);
    OverscrollBehavior_unset_instance = new OverscrollBehavior('unset', 2);
    OverscrollBehavior_auto_instance = new OverscrollBehavior('auto', 3);
    OverscrollBehavior_contain_instance = new OverscrollBehavior('contain', 4);
    OverscrollBehavior_none_instance = new OverscrollBehavior('none', 5);
  }
  function OverscrollBehavior(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var PointerEvents_initial_instance;
  var PointerEvents_inherit_instance;
  var PointerEvents_unset_instance;
  var PointerEvents_auto_instance;
  var PointerEvents_none_instance;
  function values_29() {
    return [PointerEvents_initial_getInstance(), PointerEvents_inherit_getInstance(), PointerEvents_unset_getInstance(), PointerEvents_auto_getInstance(), PointerEvents_none_getInstance()];
  }
  function valueOf_29(value) {
    switch (value) {
      case 'initial':
        return PointerEvents_initial_getInstance();
      case 'inherit':
        return PointerEvents_inherit_getInstance();
      case 'unset':
        return PointerEvents_unset_getInstance();
      case 'auto':
        return PointerEvents_auto_getInstance();
      case 'none':
        return PointerEvents_none_getInstance();
      default:
        PointerEvents_initEntries();
        THROW_ISE();
        break;
    }
  }
  var PointerEvents_entriesInitialized;
  function PointerEvents_initEntries() {
    if (PointerEvents_entriesInitialized)
      return Unit_getInstance();
    PointerEvents_entriesInitialized = true;
    PointerEvents_initial_instance = new PointerEvents('initial', 0);
    PointerEvents_inherit_instance = new PointerEvents('inherit', 1);
    PointerEvents_unset_instance = new PointerEvents('unset', 2);
    PointerEvents_auto_instance = new PointerEvents('auto', 3);
    PointerEvents_none_instance = new PointerEvents('none', 4);
  }
  function PointerEvents(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var Position_initial_instance;
  var Position_inherit_instance;
  var Position_unset_instance;
  var Position_static_instance;
  var Position_relative_instance;
  var Position_absolute_instance;
  var Position_fixed_instance;
  var Position_sticky_instance;
  function values_30() {
    return [Position_initial_getInstance(), Position_inherit_getInstance(), Position_unset_getInstance(), Position_static_getInstance(), Position_relative_getInstance(), Position_absolute_getInstance(), Position_fixed_getInstance(), Position_sticky_getInstance()];
  }
  function valueOf_30(value) {
    switch (value) {
      case 'initial':
        return Position_initial_getInstance();
      case 'inherit':
        return Position_inherit_getInstance();
      case 'unset':
        return Position_unset_getInstance();
      case 'static':
        return Position_static_getInstance();
      case 'relative':
        return Position_relative_getInstance();
      case 'absolute':
        return Position_absolute_getInstance();
      case 'fixed':
        return Position_fixed_getInstance();
      case 'sticky':
        return Position_sticky_getInstance();
      default:
        Position_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Position_entriesInitialized;
  function Position_initEntries() {
    if (Position_entriesInitialized)
      return Unit_getInstance();
    Position_entriesInitialized = true;
    Position_initial_instance = new Position('initial', 0);
    Position_inherit_instance = new Position('inherit', 1);
    Position_unset_instance = new Position('unset', 2);
    Position_static_instance = new Position('static', 3);
    Position_relative_instance = new Position('relative', 4);
    Position_absolute_instance = new Position('absolute', 5);
    Position_fixed_instance = new Position('fixed', 6);
    Position_sticky_instance = new Position('sticky', 7);
  }
  function Position(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var Resize_none_instance;
  var Resize_both_instance;
  var Resize_horizontal_instance;
  var Resize_vertical_instance;
  var Resize_block_instance;
  var Resize_inline_instance;
  var Resize_inherit_instance;
  var Resize_initial_instance;
  var Resize_unset_instance;
  function values_31() {
    return [Resize_none_getInstance(), Resize_both_getInstance(), Resize_horizontal_getInstance(), Resize_vertical_getInstance(), Resize_block_getInstance(), Resize_inline_getInstance(), Resize_inherit_getInstance(), Resize_initial_getInstance(), Resize_unset_getInstance()];
  }
  function valueOf_31(value) {
    switch (value) {
      case 'none':
        return Resize_none_getInstance();
      case 'both':
        return Resize_both_getInstance();
      case 'horizontal':
        return Resize_horizontal_getInstance();
      case 'vertical':
        return Resize_vertical_getInstance();
      case 'block':
        return Resize_block_getInstance();
      case 'inline':
        return Resize_inline_getInstance();
      case 'inherit':
        return Resize_inherit_getInstance();
      case 'initial':
        return Resize_initial_getInstance();
      case 'unset':
        return Resize_unset_getInstance();
      default:
        Resize_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Resize_entriesInitialized;
  function Resize_initEntries() {
    if (Resize_entriesInitialized)
      return Unit_getInstance();
    Resize_entriesInitialized = true;
    Resize_none_instance = new Resize('none', 0);
    Resize_both_instance = new Resize('both', 1);
    Resize_horizontal_instance = new Resize('horizontal', 2);
    Resize_vertical_instance = new Resize('vertical', 3);
    Resize_block_instance = new Resize('block', 4);
    Resize_inline_instance = new Resize('inline', 5);
    Resize_inherit_instance = new Resize('inherit', 6);
    Resize_initial_instance = new Resize('initial', 7);
    Resize_unset_instance = new Resize('unset', 8);
  }
  function Resize(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var ScrollBehavior_initial_instance;
  var ScrollBehavior_inherit_instance;
  var ScrollBehavior_unset_instance;
  var ScrollBehavior_auto_instance;
  var ScrollBehavior_smooth_instance;
  function values_32() {
    return [ScrollBehavior_initial_getInstance(), ScrollBehavior_inherit_getInstance(), ScrollBehavior_unset_getInstance(), ScrollBehavior_auto_getInstance(), ScrollBehavior_smooth_getInstance()];
  }
  function valueOf_32(value) {
    switch (value) {
      case 'initial':
        return ScrollBehavior_initial_getInstance();
      case 'inherit':
        return ScrollBehavior_inherit_getInstance();
      case 'unset':
        return ScrollBehavior_unset_getInstance();
      case 'auto':
        return ScrollBehavior_auto_getInstance();
      case 'smooth':
        return ScrollBehavior_smooth_getInstance();
      default:
        ScrollBehavior_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ScrollBehavior_entriesInitialized;
  function ScrollBehavior_initEntries() {
    if (ScrollBehavior_entriesInitialized)
      return Unit_getInstance();
    ScrollBehavior_entriesInitialized = true;
    ScrollBehavior_initial_instance = new ScrollBehavior('initial', 0);
    ScrollBehavior_inherit_instance = new ScrollBehavior('inherit', 1);
    ScrollBehavior_unset_instance = new ScrollBehavior('unset', 2);
    ScrollBehavior_auto_instance = new ScrollBehavior('auto', 3);
    ScrollBehavior_smooth_instance = new ScrollBehavior('smooth', 4);
  }
  function ScrollBehavior(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var TableLayout_initial_instance;
  var TableLayout_inherit_instance;
  var TableLayout_unset_instance;
  var TableLayout_auto_instance;
  var TableLayout_fixed_instance;
  function values_33() {
    return [TableLayout_initial_getInstance(), TableLayout_inherit_getInstance(), TableLayout_unset_getInstance(), TableLayout_auto_getInstance(), TableLayout_fixed_getInstance()];
  }
  function valueOf_33(value) {
    switch (value) {
      case 'initial':
        return TableLayout_initial_getInstance();
      case 'inherit':
        return TableLayout_inherit_getInstance();
      case 'unset':
        return TableLayout_unset_getInstance();
      case 'auto':
        return TableLayout_auto_getInstance();
      case 'fixed':
        return TableLayout_fixed_getInstance();
      default:
        TableLayout_initEntries();
        THROW_ISE();
        break;
    }
  }
  var TableLayout_entriesInitialized;
  function TableLayout_initEntries() {
    if (TableLayout_entriesInitialized)
      return Unit_getInstance();
    TableLayout_entriesInitialized = true;
    TableLayout_initial_instance = new TableLayout('initial', 0);
    TableLayout_inherit_instance = new TableLayout('inherit', 1);
    TableLayout_unset_instance = new TableLayout('unset', 2);
    TableLayout_auto_instance = new TableLayout('auto', 3);
    TableLayout_fixed_instance = new TableLayout('fixed', 4);
  }
  function TableLayout(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var TextAlign_initial_instance;
  var TextAlign_inherit_instance;
  var TextAlign_unset_instance;
  var TextAlign_left_instance;
  var TextAlign_right_instance;
  var TextAlign_center_instance;
  var TextAlign_justify_instance;
  var TextAlign_justifyAll_instance;
  var TextAlign_start_instance;
  var TextAlign_end_instance;
  var TextAlign_matchParent_instance;
  function values_34() {
    return [TextAlign_initial_getInstance(), TextAlign_inherit_getInstance(), TextAlign_unset_getInstance(), TextAlign_left_getInstance(), TextAlign_right_getInstance(), TextAlign_center_getInstance(), TextAlign_justify_getInstance(), TextAlign_justifyAll_getInstance(), TextAlign_start_getInstance(), TextAlign_end_getInstance(), TextAlign_matchParent_getInstance()];
  }
  function valueOf_34(value) {
    switch (value) {
      case 'initial':
        return TextAlign_initial_getInstance();
      case 'inherit':
        return TextAlign_inherit_getInstance();
      case 'unset':
        return TextAlign_unset_getInstance();
      case 'left':
        return TextAlign_left_getInstance();
      case 'right':
        return TextAlign_right_getInstance();
      case 'center':
        return TextAlign_center_getInstance();
      case 'justify':
        return TextAlign_justify_getInstance();
      case 'justifyAll':
        return TextAlign_justifyAll_getInstance();
      case 'start':
        return TextAlign_start_getInstance();
      case 'end':
        return TextAlign_end_getInstance();
      case 'matchParent':
        return TextAlign_matchParent_getInstance();
      default:
        TextAlign_initEntries();
        THROW_ISE();
        break;
    }
  }
  var TextAlign_entriesInitialized;
  function TextAlign_initEntries() {
    if (TextAlign_entriesInitialized)
      return Unit_getInstance();
    TextAlign_entriesInitialized = true;
    TextAlign_initial_instance = new TextAlign('initial', 0);
    TextAlign_inherit_instance = new TextAlign('inherit', 1);
    TextAlign_unset_instance = new TextAlign('unset', 2);
    TextAlign_left_instance = new TextAlign('left', 3);
    TextAlign_right_instance = new TextAlign('right', 4);
    TextAlign_center_instance = new TextAlign('center', 5);
    TextAlign_justify_instance = new TextAlign('justify', 6);
    TextAlign_justifyAll_instance = new TextAlign('justifyAll', 7);
    TextAlign_start_instance = new TextAlign('start', 8);
    TextAlign_end_instance = new TextAlign('end', 9);
    TextAlign_matchParent_instance = new TextAlign('matchParent', 10);
  }
  function TextAlign(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(TextAlign).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var TextOverflow_initial_instance;
  var TextOverflow_inherit_instance;
  var TextOverflow_unset_instance;
  var TextOverflow_clip_instance;
  var TextOverflow_ellipsis_instance;
  function values_35() {
    return [TextOverflow_initial_getInstance(), TextOverflow_inherit_getInstance(), TextOverflow_unset_getInstance(), TextOverflow_clip_getInstance(), TextOverflow_ellipsis_getInstance()];
  }
  function valueOf_35(value) {
    switch (value) {
      case 'initial':
        return TextOverflow_initial_getInstance();
      case 'inherit':
        return TextOverflow_inherit_getInstance();
      case 'unset':
        return TextOverflow_unset_getInstance();
      case 'clip':
        return TextOverflow_clip_getInstance();
      case 'ellipsis':
        return TextOverflow_ellipsis_getInstance();
      default:
        TextOverflow_initEntries();
        THROW_ISE();
        break;
    }
  }
  var TextOverflow_entriesInitialized;
  function TextOverflow_initEntries() {
    if (TextOverflow_entriesInitialized)
      return Unit_getInstance();
    TextOverflow_entriesInitialized = true;
    TextOverflow_initial_instance = new TextOverflow('initial', 0);
    TextOverflow_inherit_instance = new TextOverflow('inherit', 1);
    TextOverflow_unset_instance = new TextOverflow('unset', 2);
    TextOverflow_clip_instance = new TextOverflow('clip', 3);
    TextOverflow_ellipsis_instance = new TextOverflow('ellipsis', 4);
  }
  function TextOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var TextTransform_initial_instance;
  var TextTransform_inherit_instance;
  var TextTransform_unset_instance;
  var TextTransform_capitalize_instance;
  var TextTransform_uppercase_instance;
  var TextTransform_lowercase_instance;
  var TextTransform_none_instance;
  var TextTransform_fullWidth_instance;
  function values_36() {
    return [TextTransform_initial_getInstance(), TextTransform_inherit_getInstance(), TextTransform_unset_getInstance(), TextTransform_capitalize_getInstance(), TextTransform_uppercase_getInstance(), TextTransform_lowercase_getInstance(), TextTransform_none_getInstance(), TextTransform_fullWidth_getInstance()];
  }
  function valueOf_36(value) {
    switch (value) {
      case 'initial':
        return TextTransform_initial_getInstance();
      case 'inherit':
        return TextTransform_inherit_getInstance();
      case 'unset':
        return TextTransform_unset_getInstance();
      case 'capitalize':
        return TextTransform_capitalize_getInstance();
      case 'uppercase':
        return TextTransform_uppercase_getInstance();
      case 'lowercase':
        return TextTransform_lowercase_getInstance();
      case 'none':
        return TextTransform_none_getInstance();
      case 'fullWidth':
        return TextTransform_fullWidth_getInstance();
      default:
        TextTransform_initEntries();
        THROW_ISE();
        break;
    }
  }
  var TextTransform_entriesInitialized;
  function TextTransform_initEntries() {
    if (TextTransform_entriesInitialized)
      return Unit_getInstance();
    TextTransform_entriesInitialized = true;
    TextTransform_initial_instance = new TextTransform('initial', 0);
    TextTransform_inherit_instance = new TextTransform('inherit', 1);
    TextTransform_unset_instance = new TextTransform('unset', 2);
    TextTransform_capitalize_instance = new TextTransform('capitalize', 3);
    TextTransform_uppercase_instance = new TextTransform('uppercase', 4);
    TextTransform_lowercase_instance = new TextTransform('lowercase', 5);
    TextTransform_none_instance = new TextTransform('none', 6);
    TextTransform_fullWidth_instance = new TextTransform('fullWidth', 7);
  }
  function TextTransform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(TextTransform).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var UserSelect_initial_instance;
  var UserSelect_inherit_instance;
  var UserSelect_unset_instance;
  var UserSelect_none_instance;
  var UserSelect_auto_instance;
  var UserSelect_text_instance;
  var UserSelect_contain_instance;
  var UserSelect_all_instance;
  function values_37() {
    return [UserSelect_initial_getInstance(), UserSelect_inherit_getInstance(), UserSelect_unset_getInstance(), UserSelect_none_getInstance(), UserSelect_auto_getInstance(), UserSelect_text_getInstance(), UserSelect_contain_getInstance(), UserSelect_all_getInstance()];
  }
  function valueOf_37(value) {
    switch (value) {
      case 'initial':
        return UserSelect_initial_getInstance();
      case 'inherit':
        return UserSelect_inherit_getInstance();
      case 'unset':
        return UserSelect_unset_getInstance();
      case 'none':
        return UserSelect_none_getInstance();
      case 'auto':
        return UserSelect_auto_getInstance();
      case 'text':
        return UserSelect_text_getInstance();
      case 'contain':
        return UserSelect_contain_getInstance();
      case 'all':
        return UserSelect_all_getInstance();
      default:
        UserSelect_initEntries();
        THROW_ISE();
        break;
    }
  }
  var UserSelect_entriesInitialized;
  function UserSelect_initEntries() {
    if (UserSelect_entriesInitialized)
      return Unit_getInstance();
    UserSelect_entriesInitialized = true;
    UserSelect_initial_instance = new UserSelect('initial', 0);
    UserSelect_inherit_instance = new UserSelect('inherit', 1);
    UserSelect_unset_instance = new UserSelect('unset', 2);
    UserSelect_none_instance = new UserSelect('none', 3);
    UserSelect_auto_instance = new UserSelect('auto', 4);
    UserSelect_text_instance = new UserSelect('text', 5);
    UserSelect_contain_instance = new UserSelect('contain', 6);
    UserSelect_all_instance = new UserSelect('all', 7);
  }
  function UserSelect(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.initial_1 = new VerticalAlign('initial');
    this.inherit_1 = new VerticalAlign('inherit');
    this.unset_1 = new VerticalAlign('unset');
    this.baseline_1 = new VerticalAlign('baseline');
    this.sub_1 = new VerticalAlign('sub');
    this.super_1 = new VerticalAlign('super');
    this.textTop_1 = new VerticalAlign('text-top');
    this.textBottom_1 = new VerticalAlign('text-bottom');
    this.middle_1 = new VerticalAlign('middle');
    this.top_1 = new VerticalAlign('top');
    this.bottom_1 = new VerticalAlign('bottom');
  }
  protoOf(Companion_18).get_initial_xhjoez_k$ = function () {
    return this.initial_1;
  };
  protoOf(Companion_18).get_inherit_xgqhw2_k$ = function () {
    return this.inherit_1;
  };
  protoOf(Companion_18).get_unset_izq1hc_k$ = function () {
    return this.unset_1;
  };
  protoOf(Companion_18).get_baseline_arnwum_k$ = function () {
    return this.baseline_1;
  };
  protoOf(Companion_18).get_sub_18ivxl_k$ = function () {
    return this.sub_1;
  };
  protoOf(Companion_18).get_super_iyquz6_k$ = function () {
    return this.super_1;
  };
  protoOf(Companion_18).get_textTop_m6lgxt_k$ = function () {
    return this.textTop_1;
  };
  protoOf(Companion_18).get_textBottom_2btsu9_k$ = function () {
    return this.textBottom_1;
  };
  protoOf(Companion_18).get_middle_gn5ace_k$ = function () {
    return this.middle_1;
  };
  protoOf(Companion_18).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(Companion_18).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function VerticalAlign(value) {
    Companion_getInstance_18();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(VerticalAlign).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  var WhiteSpace_initial_instance;
  var WhiteSpace_inherit_instance;
  var WhiteSpace_unset_instance;
  var WhiteSpace_normal_instance;
  var WhiteSpace_nowrap_instance;
  var WhiteSpace_pre_instance;
  var WhiteSpace_preWrap_instance;
  var WhiteSpace_preLine_instance;
  function values_38() {
    return [WhiteSpace_initial_getInstance(), WhiteSpace_inherit_getInstance(), WhiteSpace_unset_getInstance(), WhiteSpace_normal_getInstance(), WhiteSpace_nowrap_getInstance(), WhiteSpace_pre_getInstance(), WhiteSpace_preWrap_getInstance(), WhiteSpace_preLine_getInstance()];
  }
  function valueOf_38(value) {
    switch (value) {
      case 'initial':
        return WhiteSpace_initial_getInstance();
      case 'inherit':
        return WhiteSpace_inherit_getInstance();
      case 'unset':
        return WhiteSpace_unset_getInstance();
      case 'normal':
        return WhiteSpace_normal_getInstance();
      case 'nowrap':
        return WhiteSpace_nowrap_getInstance();
      case 'pre':
        return WhiteSpace_pre_getInstance();
      case 'preWrap':
        return WhiteSpace_preWrap_getInstance();
      case 'preLine':
        return WhiteSpace_preLine_getInstance();
      default:
        WhiteSpace_initEntries();
        THROW_ISE();
        break;
    }
  }
  var WhiteSpace_entriesInitialized;
  function WhiteSpace_initEntries() {
    if (WhiteSpace_entriesInitialized)
      return Unit_getInstance();
    WhiteSpace_entriesInitialized = true;
    WhiteSpace_initial_instance = new WhiteSpace('initial', 0);
    WhiteSpace_inherit_instance = new WhiteSpace('inherit', 1);
    WhiteSpace_unset_instance = new WhiteSpace('unset', 2);
    WhiteSpace_normal_instance = new WhiteSpace('normal', 3);
    WhiteSpace_nowrap_instance = new WhiteSpace('nowrap', 4);
    WhiteSpace_pre_instance = new WhiteSpace('pre', 5);
    WhiteSpace_preWrap_instance = new WhiteSpace('preWrap', 6);
    WhiteSpace_preLine_instance = new WhiteSpace('preLine', 7);
  }
  function WhiteSpace(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(WhiteSpace).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var WordBreak_initial_instance;
  var WordBreak_inherit_instance;
  var WordBreak_unset_instance;
  var WordBreak_normal_instance;
  var WordBreak_breakAll_instance;
  var WordBreak_breakWord_instance;
  var WordBreak_keepAll_instance;
  function values_39() {
    return [WordBreak_initial_getInstance(), WordBreak_inherit_getInstance(), WordBreak_unset_getInstance(), WordBreak_normal_getInstance(), WordBreak_breakAll_getInstance(), WordBreak_breakWord_getInstance(), WordBreak_keepAll_getInstance()];
  }
  function valueOf_39(value) {
    switch (value) {
      case 'initial':
        return WordBreak_initial_getInstance();
      case 'inherit':
        return WordBreak_inherit_getInstance();
      case 'unset':
        return WordBreak_unset_getInstance();
      case 'normal':
        return WordBreak_normal_getInstance();
      case 'breakAll':
        return WordBreak_breakAll_getInstance();
      case 'breakWord':
        return WordBreak_breakWord_getInstance();
      case 'keepAll':
        return WordBreak_keepAll_getInstance();
      default:
        WordBreak_initEntries();
        THROW_ISE();
        break;
    }
  }
  var WordBreak_entriesInitialized;
  function WordBreak_initEntries() {
    if (WordBreak_entriesInitialized)
      return Unit_getInstance();
    WordBreak_entriesInitialized = true;
    WordBreak_initial_instance = new WordBreak('initial', 0);
    WordBreak_inherit_instance = new WordBreak('inherit', 1);
    WordBreak_unset_instance = new WordBreak('unset', 2);
    WordBreak_normal_instance = new WordBreak('normal', 3);
    WordBreak_breakAll_instance = new WordBreak('breakAll', 4);
    WordBreak_breakWord_instance = new WordBreak('breakWord', 5);
    WordBreak_keepAll_instance = new WordBreak('keepAll', 6);
  }
  function WordBreak(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(WordBreak).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var WordWrap_initial_instance;
  var WordWrap_inherit_instance;
  var WordWrap_unset_instance;
  var WordWrap_normal_instance;
  var WordWrap_breakWord_instance;
  function values_40() {
    return [WordWrap_initial_getInstance(), WordWrap_inherit_getInstance(), WordWrap_unset_getInstance(), WordWrap_normal_getInstance(), WordWrap_breakWord_getInstance()];
  }
  function valueOf_40(value) {
    switch (value) {
      case 'initial':
        return WordWrap_initial_getInstance();
      case 'inherit':
        return WordWrap_inherit_getInstance();
      case 'unset':
        return WordWrap_unset_getInstance();
      case 'normal':
        return WordWrap_normal_getInstance();
      case 'breakWord':
        return WordWrap_breakWord_getInstance();
      default:
        WordWrap_initEntries();
        THROW_ISE();
        break;
    }
  }
  var WordWrap_entriesInitialized;
  function WordWrap_initEntries() {
    if (WordWrap_entriesInitialized)
      return Unit_getInstance();
    WordWrap_entriesInitialized = true;
    WordWrap_initial_instance = new WordWrap('initial', 0);
    WordWrap_inherit_instance = new WordWrap('inherit', 1);
    WordWrap_unset_instance = new WordWrap('unset', 2);
    WordWrap_normal_instance = new WordWrap('normal', 3);
    WordWrap_breakWord_instance = new WordWrap('breakWord', 4);
  }
  function WordWrap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(WordWrap).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  function CssValue(value) {
    this.value_1 = value;
  }
  protoOf(CssValue).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(CssValue).toString = function () {
    return this.get_value_j01efc_k$();
  };
  function hsla(hue, saturation, lightness, alpha) {
    return new Color('hsla(' + hue + ', ' + saturation + '%, ' + lightness + '%, ' + formatAlpha(alpha) + ')');
  }
  function rgba(red, green, blue, alpha) {
    return new Color('rgba(' + red + ', ' + green + ', ' + blue + ', ' + formatAlpha(alpha) + ')');
  }
  function rgb(red, green, blue) {
    return new Color('rgb(' + red + ', ' + green + ', ' + blue + ')');
  }
  function formatAlpha(alpha) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = alpha.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.css.formatAlpha.<anonymous>' call
    tmp$ret$0 = contains(tmp0_let, '.') ? tmp0_let : tmp0_let + '.0';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Align_initial_getInstance() {
    Align_initEntries();
    return Align_initial_instance;
  }
  function Align_inherit_getInstance() {
    Align_initEntries();
    return Align_inherit_instance;
  }
  function Align_unset_getInstance() {
    Align_initEntries();
    return Align_unset_instance;
  }
  function Align_auto_getInstance() {
    Align_initEntries();
    return Align_auto_instance;
  }
  function Align_stretch_getInstance() {
    Align_initEntries();
    return Align_stretch_instance;
  }
  function Align_center_getInstance() {
    Align_initEntries();
    return Align_center_instance;
  }
  function Align_start_getInstance() {
    Align_initEntries();
    return Align_start_instance;
  }
  function Align_end_getInstance() {
    Align_initEntries();
    return Align_end_instance;
  }
  function Align_selfStart_getInstance() {
    Align_initEntries();
    return Align_selfStart_instance;
  }
  function Align_selfEnd_getInstance() {
    Align_initEntries();
    return Align_selfEnd_instance;
  }
  function Align_flexStart_getInstance() {
    Align_initEntries();
    return Align_flexStart_instance;
  }
  function Align_flexEnd_getInstance() {
    Align_initEntries();
    return Align_flexEnd_instance;
  }
  function Align_baseline_getInstance() {
    Align_initEntries();
    return Align_baseline_instance;
  }
  function Appearance_none_getInstance() {
    Appearance_initEntries();
    return Appearance_none_instance;
  }
  function Appearance_auto_getInstance() {
    Appearance_initEntries();
    return Appearance_auto_instance;
  }
  function Appearance_menulistButton_getInstance() {
    Appearance_initEntries();
    return Appearance_menulistButton_instance;
  }
  function Appearance_textfield_getInstance() {
    Appearance_initEntries();
    return Appearance_textfield_instance;
  }
  function Appearance_button_getInstance() {
    Appearance_initEntries();
    return Appearance_button_instance;
  }
  function Appearance_searchfield_getInstance() {
    Appearance_initEntries();
    return Appearance_searchfield_instance;
  }
  function Appearance_textarea_getInstance() {
    Appearance_initEntries();
    return Appearance_textarea_instance;
  }
  function Appearance_pushButton_getInstance() {
    Appearance_initEntries();
    return Appearance_pushButton_instance;
  }
  function Appearance_sliderHorizontal_getInstance() {
    Appearance_initEntries();
    return Appearance_sliderHorizontal_instance;
  }
  function Appearance_checkbox_getInstance() {
    Appearance_initEntries();
    return Appearance_checkbox_instance;
  }
  function Appearance_radio_getInstance() {
    Appearance_initEntries();
    return Appearance_radio_instance;
  }
  function Appearance_squareButton_getInstance() {
    Appearance_initEntries();
    return Appearance_squareButton_instance;
  }
  function Appearance_menulist_getInstance() {
    Appearance_initEntries();
    return Appearance_menulist_instance;
  }
  function Appearance_listbox_getInstance() {
    Appearance_initEntries();
    return Appearance_listbox_instance;
  }
  function Appearance_meter_getInstance() {
    Appearance_initEntries();
    return Appearance_meter_instance;
  }
  function Appearance_progressBar_getInstance() {
    Appearance_initEntries();
    return Appearance_progressBar_instance;
  }
  function Visibility_initial_getInstance() {
    Visibility_initEntries();
    return Visibility_initial_instance;
  }
  function Visibility_inherit_getInstance() {
    Visibility_initEntries();
    return Visibility_inherit_instance;
  }
  function Visibility_unset_getInstance() {
    Visibility_initEntries();
    return Visibility_unset_instance;
  }
  function Visibility_visible_getInstance() {
    Visibility_initEntries();
    return Visibility_visible_instance;
  }
  function Visibility_hidden_getInstance() {
    Visibility_initEntries();
    return Visibility_hidden_instance;
  }
  function Visibility_collapse_getInstance() {
    Visibility_initEntries();
    return Visibility_collapse_instance;
  }
  function BackgroundAttachment_initial_getInstance() {
    BackgroundAttachment_initEntries();
    return BackgroundAttachment_initial_instance;
  }
  function BackgroundAttachment_inherit_getInstance() {
    BackgroundAttachment_initEntries();
    return BackgroundAttachment_inherit_instance;
  }
  function BackgroundAttachment_unset_getInstance() {
    BackgroundAttachment_initEntries();
    return BackgroundAttachment_unset_instance;
  }
  function BackgroundAttachment_scroll_getInstance() {
    BackgroundAttachment_initEntries();
    return BackgroundAttachment_scroll_instance;
  }
  function BackgroundAttachment_fixed_getInstance() {
    BackgroundAttachment_initEntries();
    return BackgroundAttachment_fixed_instance;
  }
  function BackgroundAttachment_local_getInstance() {
    BackgroundAttachment_initEntries();
    return BackgroundAttachment_local_instance;
  }
  function BackgroundClip_initial_getInstance() {
    BackgroundClip_initEntries();
    return BackgroundClip_initial_instance;
  }
  function BackgroundClip_inherit_getInstance() {
    BackgroundClip_initEntries();
    return BackgroundClip_inherit_instance;
  }
  function BackgroundClip_unset_getInstance() {
    BackgroundClip_initEntries();
    return BackgroundClip_unset_instance;
  }
  function BackgroundClip_borderBox_getInstance() {
    BackgroundClip_initEntries();
    return BackgroundClip_borderBox_instance;
  }
  function BackgroundClip_paddingBox_getInstance() {
    BackgroundClip_initEntries();
    return BackgroundClip_paddingBox_instance;
  }
  function BackgroundClip_contentBox_getInstance() {
    BackgroundClip_initEntries();
    return BackgroundClip_contentBox_instance;
  }
  function BackgroundClip_text_getInstance() {
    BackgroundClip_initEntries();
    return BackgroundClip_text_instance;
  }
  function BackgroundOrigin_initial_getInstance() {
    BackgroundOrigin_initEntries();
    return BackgroundOrigin_initial_instance;
  }
  function BackgroundOrigin_inherit_getInstance() {
    BackgroundOrigin_initEntries();
    return BackgroundOrigin_inherit_instance;
  }
  function BackgroundOrigin_unset_getInstance() {
    BackgroundOrigin_initEntries();
    return BackgroundOrigin_unset_instance;
  }
  function BackgroundOrigin_borderBox_getInstance() {
    BackgroundOrigin_initEntries();
    return BackgroundOrigin_borderBox_instance;
  }
  function BackgroundOrigin_paddingBox_getInstance() {
    BackgroundOrigin_initEntries();
    return BackgroundOrigin_paddingBox_instance;
  }
  function BackgroundOrigin_contentBox_getInstance() {
    BackgroundOrigin_initEntries();
    return BackgroundOrigin_contentBox_instance;
  }
  function BackgroundRepeat_initial_getInstance() {
    BackgroundRepeat_initEntries();
    return BackgroundRepeat_initial_instance;
  }
  function BackgroundRepeat_inherit_getInstance() {
    BackgroundRepeat_initEntries();
    return BackgroundRepeat_inherit_instance;
  }
  function BackgroundRepeat_unset_getInstance() {
    BackgroundRepeat_initEntries();
    return BackgroundRepeat_unset_instance;
  }
  function BackgroundRepeat_repeatX_getInstance() {
    BackgroundRepeat_initEntries();
    return BackgroundRepeat_repeatX_instance;
  }
  function BackgroundRepeat_repeatY_getInstance() {
    BackgroundRepeat_initEntries();
    return BackgroundRepeat_repeatY_instance;
  }
  function BackgroundRepeat_repeat_getInstance() {
    BackgroundRepeat_initEntries();
    return BackgroundRepeat_repeat_instance;
  }
  function BackgroundRepeat_noRepeat_getInstance() {
    BackgroundRepeat_initEntries();
    return BackgroundRepeat_noRepeat_instance;
  }
  function BorderCollapse_initial_getInstance() {
    BorderCollapse_initEntries();
    return BorderCollapse_initial_instance;
  }
  function BorderCollapse_inherit_getInstance() {
    BorderCollapse_initEntries();
    return BorderCollapse_inherit_instance;
  }
  function BorderCollapse_unset_getInstance() {
    BorderCollapse_initEntries();
    return BorderCollapse_unset_instance;
  }
  function BorderCollapse_separate_getInstance() {
    BorderCollapse_initEntries();
    return BorderCollapse_separate_instance;
  }
  function BorderCollapse_collapse_getInstance() {
    BorderCollapse_initEntries();
    return BorderCollapse_collapse_instance;
  }
  function BorderStyle_initial_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_initial_instance;
  }
  function BorderStyle_inherit_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_inherit_instance;
  }
  function BorderStyle_unset_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_unset_instance;
  }
  function BorderStyle_none_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_none_instance;
  }
  function BorderStyle_dotted_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_dotted_instance;
  }
  function BorderStyle_dashed_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_dashed_instance;
  }
  function BorderStyle_solid_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_solid_instance;
  }
  function BoxSizing_initial_getInstance() {
    BoxSizing_initEntries();
    return BoxSizing_initial_instance;
  }
  function BoxSizing_inherit_getInstance() {
    BoxSizing_initEntries();
    return BoxSizing_inherit_instance;
  }
  function BoxSizing_unset_getInstance() {
    BoxSizing_initEntries();
    return BoxSizing_unset_instance;
  }
  function BoxSizing_contentBox_getInstance() {
    BoxSizing_initEntries();
    return BoxSizing_contentBox_instance;
  }
  function BoxSizing_borderBox_getInstance() {
    BoxSizing_initEntries();
    return BoxSizing_borderBox_instance;
  }
  function Clear_initial_getInstance() {
    Clear_initEntries();
    return Clear_initial_instance;
  }
  function Clear_inherit_getInstance() {
    Clear_initEntries();
    return Clear_inherit_instance;
  }
  function Clear_unset_getInstance() {
    Clear_initEntries();
    return Clear_unset_instance;
  }
  function Clear_none_getInstance() {
    Clear_initEntries();
    return Clear_none_instance;
  }
  function Clear_left_getInstance() {
    Clear_initEntries();
    return Clear_left_instance;
  }
  function Clear_right_getInstance() {
    Clear_initEntries();
    return Clear_right_instance;
  }
  function Clear_both_getInstance() {
    Clear_initEntries();
    return Clear_both_instance;
  }
  function Contain_initial_getInstance() {
    Contain_initEntries();
    return Contain_initial_instance;
  }
  function Contain_inherit_getInstance() {
    Contain_initEntries();
    return Contain_inherit_instance;
  }
  function Contain_unset_getInstance() {
    Contain_initEntries();
    return Contain_unset_instance;
  }
  function Contain_none_getInstance() {
    Contain_initEntries();
    return Contain_none_instance;
  }
  function Contain_strict_getInstance() {
    Contain_initEntries();
    return Contain_strict_instance;
  }
  function Contain_content_getInstance() {
    Contain_initEntries();
    return Contain_content_instance;
  }
  function Contain_size_getInstance() {
    Contain_initEntries();
    return Contain_size_instance;
  }
  function Contain_layout_getInstance() {
    Contain_initEntries();
    return Contain_layout_instance;
  }
  function Contain_style_getInstance() {
    Contain_initEntries();
    return Contain_style_instance;
  }
  function Contain_paint_getInstance() {
    Contain_initEntries();
    return Contain_paint_instance;
  }
  function Cursor_initial_getInstance() {
    Cursor_initEntries();
    return Cursor_initial_instance;
  }
  function Cursor_inherit_getInstance() {
    Cursor_initEntries();
    return Cursor_inherit_instance;
  }
  function Cursor_unset_getInstance() {
    Cursor_initEntries();
    return Cursor_unset_instance;
  }
  function Cursor_auto_getInstance() {
    Cursor_initEntries();
    return Cursor_auto_instance;
  }
  function Cursor_default_getInstance() {
    Cursor_initEntries();
    return Cursor_default_instance;
  }
  function Cursor_none_getInstance() {
    Cursor_initEntries();
    return Cursor_none_instance;
  }
  function Cursor_contextMenu_getInstance() {
    Cursor_initEntries();
    return Cursor_contextMenu_instance;
  }
  function Cursor_help_getInstance() {
    Cursor_initEntries();
    return Cursor_help_instance;
  }
  function Cursor_pointer_getInstance() {
    Cursor_initEntries();
    return Cursor_pointer_instance;
  }
  function Cursor_progress_getInstance() {
    Cursor_initEntries();
    return Cursor_progress_instance;
  }
  function Cursor_wait_getInstance() {
    Cursor_initEntries();
    return Cursor_wait_instance;
  }
  function Cursor_cell_getInstance() {
    Cursor_initEntries();
    return Cursor_cell_instance;
  }
  function Cursor_crosshair_getInstance() {
    Cursor_initEntries();
    return Cursor_crosshair_instance;
  }
  function Cursor_text_getInstance() {
    Cursor_initEntries();
    return Cursor_text_instance;
  }
  function Cursor_verticalText_getInstance() {
    Cursor_initEntries();
    return Cursor_verticalText_instance;
  }
  function Cursor_alias_getInstance() {
    Cursor_initEntries();
    return Cursor_alias_instance;
  }
  function Cursor_copy_getInstance() {
    Cursor_initEntries();
    return Cursor_copy_instance;
  }
  function Cursor_move_getInstance() {
    Cursor_initEntries();
    return Cursor_move_instance;
  }
  function Cursor_noDrop_getInstance() {
    Cursor_initEntries();
    return Cursor_noDrop_instance;
  }
  function Cursor_notAllowed_getInstance() {
    Cursor_initEntries();
    return Cursor_notAllowed_instance;
  }
  function Cursor_grab_getInstance() {
    Cursor_initEntries();
    return Cursor_grab_instance;
  }
  function Cursor_grabbing_getInstance() {
    Cursor_initEntries();
    return Cursor_grabbing_instance;
  }
  function Cursor_colResize_getInstance() {
    Cursor_initEntries();
    return Cursor_colResize_instance;
  }
  function Cursor_rowResize_getInstance() {
    Cursor_initEntries();
    return Cursor_rowResize_instance;
  }
  function Cursor_allScroll_getInstance() {
    Cursor_initEntries();
    return Cursor_allScroll_instance;
  }
  function Cursor_eResize_getInstance() {
    Cursor_initEntries();
    return Cursor_eResize_instance;
  }
  function Cursor_nResize_getInstance() {
    Cursor_initEntries();
    return Cursor_nResize_instance;
  }
  function Cursor_neResize_getInstance() {
    Cursor_initEntries();
    return Cursor_neResize_instance;
  }
  function Cursor_nwResize_getInstance() {
    Cursor_initEntries();
    return Cursor_nwResize_instance;
  }
  function Cursor_sResize_getInstance() {
    Cursor_initEntries();
    return Cursor_sResize_instance;
  }
  function Cursor_seResize_getInstance() {
    Cursor_initEntries();
    return Cursor_seResize_instance;
  }
  function Cursor_swResize_getInstance() {
    Cursor_initEntries();
    return Cursor_swResize_instance;
  }
  function Cursor_wResize_getInstance() {
    Cursor_initEntries();
    return Cursor_wResize_instance;
  }
  function Cursor_ewResize_getInstance() {
    Cursor_initEntries();
    return Cursor_ewResize_instance;
  }
  function Cursor_nsResize_getInstance() {
    Cursor_initEntries();
    return Cursor_nsResize_instance;
  }
  function Cursor_neswResize_getInstance() {
    Cursor_initEntries();
    return Cursor_neswResize_instance;
  }
  function Cursor_nwseResize_getInstance() {
    Cursor_initEntries();
    return Cursor_nwseResize_instance;
  }
  function Cursor_zoomIn_getInstance() {
    Cursor_initEntries();
    return Cursor_zoomIn_instance;
  }
  function Cursor_zoomOut_getInstance() {
    Cursor_initEntries();
    return Cursor_zoomOut_instance;
  }
  function Direction_initial_getInstance() {
    Direction_initEntries();
    return Direction_initial_instance;
  }
  function Direction_inherit_getInstance() {
    Direction_initEntries();
    return Direction_inherit_instance;
  }
  function Direction_unset_getInstance() {
    Direction_initEntries();
    return Direction_unset_instance;
  }
  function Direction_ltr_getInstance() {
    Direction_initEntries();
    return Direction_ltr_instance;
  }
  function Direction_rtl_getInstance() {
    Direction_initEntries();
    return Direction_rtl_instance;
  }
  function Display_initial_getInstance() {
    Display_initEntries();
    return Display_initial_instance;
  }
  function Display_inherit_getInstance() {
    Display_initEntries();
    return Display_inherit_instance;
  }
  function Display_unset_getInstance() {
    Display_initEntries();
    return Display_unset_instance;
  }
  function Display_block_getInstance() {
    Display_initEntries();
    return Display_block_instance;
  }
  function Display_inline_getInstance() {
    Display_initEntries();
    return Display_inline_instance;
  }
  function Display_runIn_getInstance() {
    Display_initEntries();
    return Display_runIn_instance;
  }
  function Display_flow_getInstance() {
    Display_initEntries();
    return Display_flow_instance;
  }
  function Display_flowRoot_getInstance() {
    Display_initEntries();
    return Display_flowRoot_instance;
  }
  function Display_table_getInstance() {
    Display_initEntries();
    return Display_table_instance;
  }
  function Display_flex_getInstance() {
    Display_initEntries();
    return Display_flex_instance;
  }
  function Display_grid_getInstance() {
    Display_initEntries();
    return Display_grid_instance;
  }
  function Display_subgrid_getInstance() {
    Display_initEntries();
    return Display_subgrid_instance;
  }
  function Display_listItem_getInstance() {
    Display_initEntries();
    return Display_listItem_instance;
  }
  function Display_tableRowGroup_getInstance() {
    Display_initEntries();
    return Display_tableRowGroup_instance;
  }
  function Display_tableHeaderGroup_getInstance() {
    Display_initEntries();
    return Display_tableHeaderGroup_instance;
  }
  function Display_tableFooterGroup_getInstance() {
    Display_initEntries();
    return Display_tableFooterGroup_instance;
  }
  function Display_tableRow_getInstance() {
    Display_initEntries();
    return Display_tableRow_instance;
  }
  function Display_tableCell_getInstance() {
    Display_initEntries();
    return Display_tableCell_instance;
  }
  function Display_tableColumnGroup_getInstance() {
    Display_initEntries();
    return Display_tableColumnGroup_instance;
  }
  function Display_tableColumn_getInstance() {
    Display_initEntries();
    return Display_tableColumn_instance;
  }
  function Display_tableCaption_getInstance() {
    Display_initEntries();
    return Display_tableCaption_instance;
  }
  function Display_contents_getInstance() {
    Display_initEntries();
    return Display_contents_instance;
  }
  function Display_none_getInstance() {
    Display_initEntries();
    return Display_none_instance;
  }
  function Display_inlineBlock_getInstance() {
    Display_initEntries();
    return Display_inlineBlock_instance;
  }
  function Display_inlineListItem_getInstance() {
    Display_initEntries();
    return Display_inlineListItem_instance;
  }
  function Display_inlineTable_getInstance() {
    Display_initEntries();
    return Display_inlineTable_instance;
  }
  function Display_inlineFlex_getInstance() {
    Display_initEntries();
    return Display_inlineFlex_instance;
  }
  function Display_inlineGrid_getInstance() {
    Display_initEntries();
    return Display_inlineGrid_instance;
  }
  function FlexDirection_initial_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_initial_instance;
  }
  function FlexDirection_inherit_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_inherit_instance;
  }
  function FlexDirection_unset_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_unset_instance;
  }
  function FlexDirection_column_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_column_instance;
  }
  function FlexDirection_columnReverse_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_columnReverse_instance;
  }
  function FlexDirection_row_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_row_instance;
  }
  function FlexDirection_rowReverse_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_rowReverse_instance;
  }
  function FlexWrap_initial_getInstance() {
    FlexWrap_initEntries();
    return FlexWrap_initial_instance;
  }
  function FlexWrap_inherit_getInstance() {
    FlexWrap_initEntries();
    return FlexWrap_inherit_instance;
  }
  function FlexWrap_unset_getInstance() {
    FlexWrap_initEntries();
    return FlexWrap_unset_instance;
  }
  function FlexWrap_nowrap_getInstance() {
    FlexWrap_initEntries();
    return FlexWrap_nowrap_instance;
  }
  function FlexWrap_wrap_getInstance() {
    FlexWrap_initEntries();
    return FlexWrap_wrap_instance;
  }
  function FlexWrap_wrapReverse_getInstance() {
    FlexWrap_initEntries();
    return FlexWrap_wrapReverse_instance;
  }
  function Float_initial_getInstance() {
    Float_initEntries();
    return Float_initial_instance;
  }
  function Float_inherit_getInstance() {
    Float_initEntries();
    return Float_inherit_instance;
  }
  function Float_unset_getInstance() {
    Float_initEntries();
    return Float_unset_instance;
  }
  function Float_left_getInstance() {
    Float_initEntries();
    return Float_left_instance;
  }
  function Float_right_getInstance() {
    Float_initEntries();
    return Float_right_instance;
  }
  function Float_none_getInstance() {
    Float_initEntries();
    return Float_none_instance;
  }
  function FontStyle_initial_getInstance() {
    FontStyle_initEntries();
    return FontStyle_initial_instance;
  }
  function FontStyle_inherit_getInstance() {
    FontStyle_initEntries();
    return FontStyle_inherit_instance;
  }
  function FontStyle_unset_getInstance() {
    FontStyle_initEntries();
    return FontStyle_unset_instance;
  }
  function FontStyle_normal_getInstance() {
    FontStyle_initEntries();
    return FontStyle_normal_instance;
  }
  function FontStyle_italic_getInstance() {
    FontStyle_initEntries();
    return FontStyle_italic_instance;
  }
  function Hyphens_initial_getInstance() {
    Hyphens_initEntries();
    return Hyphens_initial_instance;
  }
  function Hyphens_inherit_getInstance() {
    Hyphens_initEntries();
    return Hyphens_inherit_instance;
  }
  function Hyphens_unset_getInstance() {
    Hyphens_initEntries();
    return Hyphens_unset_instance;
  }
  function Hyphens_none_getInstance() {
    Hyphens_initEntries();
    return Hyphens_none_instance;
  }
  function Hyphens_manual_getInstance() {
    Hyphens_initEntries();
    return Hyphens_manual_instance;
  }
  function Hyphens_auto_getInstance() {
    Hyphens_initEntries();
    return Hyphens_auto_instance;
  }
  function Isolation_initial_getInstance() {
    Isolation_initEntries();
    return Isolation_initial_instance;
  }
  function Isolation_inherit_getInstance() {
    Isolation_initEntries();
    return Isolation_inherit_instance;
  }
  function Isolation_revert_getInstance() {
    Isolation_initEntries();
    return Isolation_revert_instance;
  }
  function Isolation_unset_getInstance() {
    Isolation_initEntries();
    return Isolation_unset_instance;
  }
  function Isolation_auto_getInstance() {
    Isolation_initEntries();
    return Isolation_auto_instance;
  }
  function Isolation_isolate_getInstance() {
    Isolation_initEntries();
    return Isolation_isolate_instance;
  }
  function JustifyContent_initial_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_initial_instance;
  }
  function JustifyContent_inherit_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_inherit_instance;
  }
  function JustifyContent_unset_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_unset_instance;
  }
  function JustifyContent_center_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_center_instance;
  }
  function JustifyContent_start_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_start_instance;
  }
  function JustifyContent_end_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_end_instance;
  }
  function JustifyContent_flexStart_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_flexStart_instance;
  }
  function JustifyContent_flexEnd_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_flexEnd_instance;
  }
  function JustifyContent_left_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_left_instance;
  }
  function JustifyContent_right_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_right_instance;
  }
  function JustifyContent_baseline_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_baseline_instance;
  }
  function JustifyContent_firstBaseline_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_firstBaseline_instance;
  }
  function JustifyContent_lastBaseline_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_lastBaseline_instance;
  }
  function JustifyContent_spaceBetween_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_spaceBetween_instance;
  }
  function JustifyContent_spaceAround_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_spaceAround_instance;
  }
  function JustifyContent_spaceEvenly_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_spaceEvenly_instance;
  }
  function JustifyContent_stretch_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_stretch_instance;
  }
  function JustifyContent_safeCenter_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_safeCenter_instance;
  }
  function JustifyContent_unsafeCenter_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_unsafeCenter_instance;
  }
  function JustifyItems_initial_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_initial_instance;
  }
  function JustifyItems_inherit_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_inherit_instance;
  }
  function JustifyItems_unset_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_unset_instance;
  }
  function JustifyItems_auto_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_auto_instance;
  }
  function JustifyItems_normal_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_normal_instance;
  }
  function JustifyItems_stretch_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_stretch_instance;
  }
  function JustifyItems_center_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_center_instance;
  }
  function JustifyItems_start_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_start_instance;
  }
  function JustifyItems_end_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_end_instance;
  }
  function JustifyItems_flexStart_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_flexStart_instance;
  }
  function JustifyItems_flexEnd_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_flexEnd_instance;
  }
  function JustifyItems_selfStart_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_selfStart_instance;
  }
  function JustifyItems_selfEnd_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_selfEnd_instance;
  }
  function JustifyItems_left_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_left_instance;
  }
  function JustifyItems_right_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_right_instance;
  }
  function JustifyItems_baseline_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_baseline_instance;
  }
  function ListStyleType_initial_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_initial_instance;
  }
  function ListStyleType_inherit_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_inherit_instance;
  }
  function ListStyleType_unset_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_unset_instance;
  }
  function ListStyleType_none_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_none_instance;
  }
  function ListStyleType_disc_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_disc_instance;
  }
  function ListStyleType_circle_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_circle_instance;
  }
  function ListStyleType_square_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_square_instance;
  }
  function ListStyleType_decimal_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_decimal_instance;
  }
  function ObjectFit_initial_getInstance() {
    ObjectFit_initEntries();
    return ObjectFit_initial_instance;
  }
  function ObjectFit_inherit_getInstance() {
    ObjectFit_initEntries();
    return ObjectFit_inherit_instance;
  }
  function ObjectFit_unset_getInstance() {
    ObjectFit_initEntries();
    return ObjectFit_unset_instance;
  }
  function ObjectFit_contain_getInstance() {
    ObjectFit_initEntries();
    return ObjectFit_contain_instance;
  }
  function ObjectFit_cover_getInstance() {
    ObjectFit_initEntries();
    return ObjectFit_cover_instance;
  }
  function ObjectFit_fill_getInstance() {
    ObjectFit_initEntries();
    return ObjectFit_fill_instance;
  }
  function ObjectFit_none_getInstance() {
    ObjectFit_initEntries();
    return ObjectFit_none_instance;
  }
  function ObjectFit_scaleDown_getInstance() {
    ObjectFit_initEntries();
    return ObjectFit_scaleDown_instance;
  }
  function Outline_initial_getInstance() {
    Outline_initEntries();
    return Outline_initial_instance;
  }
  function Outline_inherit_getInstance() {
    Outline_initEntries();
    return Outline_inherit_instance;
  }
  function Outline_unset_getInstance() {
    Outline_initEntries();
    return Outline_unset_instance;
  }
  function Outline_none_getInstance() {
    Outline_initEntries();
    return Outline_none_instance;
  }
  function OutlineStyle_inherit_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_inherit_instance;
  }
  function OutlineStyle_initial_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_initial_instance;
  }
  function OutlineStyle_revert_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_revert_instance;
  }
  function OutlineStyle_revertLayer_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_revertLayer_instance;
  }
  function OutlineStyle_unset_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_unset_instance;
  }
  function OutlineStyle_auto_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_auto_instance;
  }
  function OutlineStyle_none_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_none_instance;
  }
  function OutlineStyle_dotted_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_dotted_instance;
  }
  function OutlineStyle_dashed_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_dashed_instance;
  }
  function OutlineStyle_solid_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_solid_instance;
  }
  function OutlineStyle_double_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_double_instance;
  }
  function OutlineStyle_groove_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_groove_instance;
  }
  function OutlineStyle_ridge_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_ridge_instance;
  }
  function OutlineStyle_inset_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_inset_instance;
  }
  function OutlineStyle_outset_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_outset_instance;
  }
  function Overflow_initial_getInstance() {
    Overflow_initEntries();
    return Overflow_initial_instance;
  }
  function Overflow_inherit_getInstance() {
    Overflow_initEntries();
    return Overflow_inherit_instance;
  }
  function Overflow_unset_getInstance() {
    Overflow_initEntries();
    return Overflow_unset_instance;
  }
  function Overflow_visible_getInstance() {
    Overflow_initEntries();
    return Overflow_visible_instance;
  }
  function Overflow_hidden_getInstance() {
    Overflow_initEntries();
    return Overflow_hidden_instance;
  }
  function Overflow_scroll_getInstance() {
    Overflow_initEntries();
    return Overflow_scroll_instance;
  }
  function Overflow_auto_getInstance() {
    Overflow_initEntries();
    return Overflow_auto_instance;
  }
  function OverflowWrap_initial_getInstance() {
    OverflowWrap_initEntries();
    return OverflowWrap_initial_instance;
  }
  function OverflowWrap_inherit_getInstance() {
    OverflowWrap_initEntries();
    return OverflowWrap_inherit_instance;
  }
  function OverflowWrap_unset_getInstance() {
    OverflowWrap_initEntries();
    return OverflowWrap_unset_instance;
  }
  function OverflowWrap_normal_getInstance() {
    OverflowWrap_initEntries();
    return OverflowWrap_normal_instance;
  }
  function OverflowWrap_anywhere_getInstance() {
    OverflowWrap_initEntries();
    return OverflowWrap_anywhere_instance;
  }
  function OverflowWrap_breakWord_getInstance() {
    OverflowWrap_initEntries();
    return OverflowWrap_breakWord_instance;
  }
  function OverscrollBehavior_initial_getInstance() {
    OverscrollBehavior_initEntries();
    return OverscrollBehavior_initial_instance;
  }
  function OverscrollBehavior_inherit_getInstance() {
    OverscrollBehavior_initEntries();
    return OverscrollBehavior_inherit_instance;
  }
  function OverscrollBehavior_unset_getInstance() {
    OverscrollBehavior_initEntries();
    return OverscrollBehavior_unset_instance;
  }
  function OverscrollBehavior_auto_getInstance() {
    OverscrollBehavior_initEntries();
    return OverscrollBehavior_auto_instance;
  }
  function OverscrollBehavior_contain_getInstance() {
    OverscrollBehavior_initEntries();
    return OverscrollBehavior_contain_instance;
  }
  function OverscrollBehavior_none_getInstance() {
    OverscrollBehavior_initEntries();
    return OverscrollBehavior_none_instance;
  }
  function PointerEvents_initial_getInstance() {
    PointerEvents_initEntries();
    return PointerEvents_initial_instance;
  }
  function PointerEvents_inherit_getInstance() {
    PointerEvents_initEntries();
    return PointerEvents_inherit_instance;
  }
  function PointerEvents_unset_getInstance() {
    PointerEvents_initEntries();
    return PointerEvents_unset_instance;
  }
  function PointerEvents_auto_getInstance() {
    PointerEvents_initEntries();
    return PointerEvents_auto_instance;
  }
  function PointerEvents_none_getInstance() {
    PointerEvents_initEntries();
    return PointerEvents_none_instance;
  }
  function Position_initial_getInstance() {
    Position_initEntries();
    return Position_initial_instance;
  }
  function Position_inherit_getInstance() {
    Position_initEntries();
    return Position_inherit_instance;
  }
  function Position_unset_getInstance() {
    Position_initEntries();
    return Position_unset_instance;
  }
  function Position_static_getInstance() {
    Position_initEntries();
    return Position_static_instance;
  }
  function Position_relative_getInstance() {
    Position_initEntries();
    return Position_relative_instance;
  }
  function Position_absolute_getInstance() {
    Position_initEntries();
    return Position_absolute_instance;
  }
  function Position_fixed_getInstance() {
    Position_initEntries();
    return Position_fixed_instance;
  }
  function Position_sticky_getInstance() {
    Position_initEntries();
    return Position_sticky_instance;
  }
  function Resize_none_getInstance() {
    Resize_initEntries();
    return Resize_none_instance;
  }
  function Resize_both_getInstance() {
    Resize_initEntries();
    return Resize_both_instance;
  }
  function Resize_horizontal_getInstance() {
    Resize_initEntries();
    return Resize_horizontal_instance;
  }
  function Resize_vertical_getInstance() {
    Resize_initEntries();
    return Resize_vertical_instance;
  }
  function Resize_block_getInstance() {
    Resize_initEntries();
    return Resize_block_instance;
  }
  function Resize_inline_getInstance() {
    Resize_initEntries();
    return Resize_inline_instance;
  }
  function Resize_inherit_getInstance() {
    Resize_initEntries();
    return Resize_inherit_instance;
  }
  function Resize_initial_getInstance() {
    Resize_initEntries();
    return Resize_initial_instance;
  }
  function Resize_unset_getInstance() {
    Resize_initEntries();
    return Resize_unset_instance;
  }
  function ScrollBehavior_initial_getInstance() {
    ScrollBehavior_initEntries();
    return ScrollBehavior_initial_instance;
  }
  function ScrollBehavior_inherit_getInstance() {
    ScrollBehavior_initEntries();
    return ScrollBehavior_inherit_instance;
  }
  function ScrollBehavior_unset_getInstance() {
    ScrollBehavior_initEntries();
    return ScrollBehavior_unset_instance;
  }
  function ScrollBehavior_auto_getInstance() {
    ScrollBehavior_initEntries();
    return ScrollBehavior_auto_instance;
  }
  function ScrollBehavior_smooth_getInstance() {
    ScrollBehavior_initEntries();
    return ScrollBehavior_smooth_instance;
  }
  function TableLayout_initial_getInstance() {
    TableLayout_initEntries();
    return TableLayout_initial_instance;
  }
  function TableLayout_inherit_getInstance() {
    TableLayout_initEntries();
    return TableLayout_inherit_instance;
  }
  function TableLayout_unset_getInstance() {
    TableLayout_initEntries();
    return TableLayout_unset_instance;
  }
  function TableLayout_auto_getInstance() {
    TableLayout_initEntries();
    return TableLayout_auto_instance;
  }
  function TableLayout_fixed_getInstance() {
    TableLayout_initEntries();
    return TableLayout_fixed_instance;
  }
  function TextAlign_initial_getInstance() {
    TextAlign_initEntries();
    return TextAlign_initial_instance;
  }
  function TextAlign_inherit_getInstance() {
    TextAlign_initEntries();
    return TextAlign_inherit_instance;
  }
  function TextAlign_unset_getInstance() {
    TextAlign_initEntries();
    return TextAlign_unset_instance;
  }
  function TextAlign_left_getInstance() {
    TextAlign_initEntries();
    return TextAlign_left_instance;
  }
  function TextAlign_right_getInstance() {
    TextAlign_initEntries();
    return TextAlign_right_instance;
  }
  function TextAlign_center_getInstance() {
    TextAlign_initEntries();
    return TextAlign_center_instance;
  }
  function TextAlign_justify_getInstance() {
    TextAlign_initEntries();
    return TextAlign_justify_instance;
  }
  function TextAlign_justifyAll_getInstance() {
    TextAlign_initEntries();
    return TextAlign_justifyAll_instance;
  }
  function TextAlign_start_getInstance() {
    TextAlign_initEntries();
    return TextAlign_start_instance;
  }
  function TextAlign_end_getInstance() {
    TextAlign_initEntries();
    return TextAlign_end_instance;
  }
  function TextAlign_matchParent_getInstance() {
    TextAlign_initEntries();
    return TextAlign_matchParent_instance;
  }
  function TextOverflow_initial_getInstance() {
    TextOverflow_initEntries();
    return TextOverflow_initial_instance;
  }
  function TextOverflow_inherit_getInstance() {
    TextOverflow_initEntries();
    return TextOverflow_inherit_instance;
  }
  function TextOverflow_unset_getInstance() {
    TextOverflow_initEntries();
    return TextOverflow_unset_instance;
  }
  function TextOverflow_clip_getInstance() {
    TextOverflow_initEntries();
    return TextOverflow_clip_instance;
  }
  function TextOverflow_ellipsis_getInstance() {
    TextOverflow_initEntries();
    return TextOverflow_ellipsis_instance;
  }
  function TextTransform_initial_getInstance() {
    TextTransform_initEntries();
    return TextTransform_initial_instance;
  }
  function TextTransform_inherit_getInstance() {
    TextTransform_initEntries();
    return TextTransform_inherit_instance;
  }
  function TextTransform_unset_getInstance() {
    TextTransform_initEntries();
    return TextTransform_unset_instance;
  }
  function TextTransform_capitalize_getInstance() {
    TextTransform_initEntries();
    return TextTransform_capitalize_instance;
  }
  function TextTransform_uppercase_getInstance() {
    TextTransform_initEntries();
    return TextTransform_uppercase_instance;
  }
  function TextTransform_lowercase_getInstance() {
    TextTransform_initEntries();
    return TextTransform_lowercase_instance;
  }
  function TextTransform_none_getInstance() {
    TextTransform_initEntries();
    return TextTransform_none_instance;
  }
  function TextTransform_fullWidth_getInstance() {
    TextTransform_initEntries();
    return TextTransform_fullWidth_instance;
  }
  function UserSelect_initial_getInstance() {
    UserSelect_initEntries();
    return UserSelect_initial_instance;
  }
  function UserSelect_inherit_getInstance() {
    UserSelect_initEntries();
    return UserSelect_inherit_instance;
  }
  function UserSelect_unset_getInstance() {
    UserSelect_initEntries();
    return UserSelect_unset_instance;
  }
  function UserSelect_none_getInstance() {
    UserSelect_initEntries();
    return UserSelect_none_instance;
  }
  function UserSelect_auto_getInstance() {
    UserSelect_initEntries();
    return UserSelect_auto_instance;
  }
  function UserSelect_text_getInstance() {
    UserSelect_initEntries();
    return UserSelect_text_instance;
  }
  function UserSelect_contain_getInstance() {
    UserSelect_initEntries();
    return UserSelect_contain_instance;
  }
  function UserSelect_all_getInstance() {
    UserSelect_initEntries();
    return UserSelect_all_instance;
  }
  function WhiteSpace_initial_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_initial_instance;
  }
  function WhiteSpace_inherit_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_inherit_instance;
  }
  function WhiteSpace_unset_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_unset_instance;
  }
  function WhiteSpace_normal_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_normal_instance;
  }
  function WhiteSpace_nowrap_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_nowrap_instance;
  }
  function WhiteSpace_pre_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_pre_instance;
  }
  function WhiteSpace_preWrap_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_preWrap_instance;
  }
  function WhiteSpace_preLine_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_preLine_instance;
  }
  function WordBreak_initial_getInstance() {
    WordBreak_initEntries();
    return WordBreak_initial_instance;
  }
  function WordBreak_inherit_getInstance() {
    WordBreak_initEntries();
    return WordBreak_inherit_instance;
  }
  function WordBreak_unset_getInstance() {
    WordBreak_initEntries();
    return WordBreak_unset_instance;
  }
  function WordBreak_normal_getInstance() {
    WordBreak_initEntries();
    return WordBreak_normal_instance;
  }
  function WordBreak_breakAll_getInstance() {
    WordBreak_initEntries();
    return WordBreak_breakAll_instance;
  }
  function WordBreak_breakWord_getInstance() {
    WordBreak_initEntries();
    return WordBreak_breakWord_instance;
  }
  function WordBreak_keepAll_getInstance() {
    WordBreak_initEntries();
    return WordBreak_keepAll_instance;
  }
  function WordWrap_initial_getInstance() {
    WordWrap_initEntries();
    return WordWrap_initial_instance;
  }
  function WordWrap_inherit_getInstance() {
    WordWrap_initEntries();
    return WordWrap_inherit_instance;
  }
  function WordWrap_unset_getInstance() {
    WordWrap_initEntries();
    return WordWrap_unset_instance;
  }
  function WordWrap_normal_getInstance() {
    WordWrap_initEntries();
    return WordWrap_normal_instance;
  }
  function WordWrap_breakWord_getInstance() {
    WordWrap_initEntries();
    return WordWrap_breakWord_instance;
  }
  function HSLA_REGEX$factory() {
    return getPropertyCallableRef('HSLA_REGEX', 1, KProperty1, function (receiver) {
      return _get_HSLA_REGEX__fy6jkz(receiver);
    }, null);
  }
  function RGBA_REGEX$factory() {
    return getPropertyCallableRef('RGBA_REGEX', 1, KProperty1, function (receiver) {
      return _get_RGBA_REGEX__eceqfl(receiver);
    }, null);
  }
  function _get_delimiter__803m52($this) {
    return $this.delimiter_1;
  }
  function StyleList(delimiter) {
    this.delimiter_1 = delimiter;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.list_1 = tmp$ret$0;
  }
  protoOf(StyleList).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(StyleList).toString = function () {
    return this.list_1.isEmpty_y1axqb_k$() ? 'none' : joinToString_0(this.list_1, this.delimiter_1);
  };
  protoOf(StyleList).clear_j9y8zo_k$ = function () {
    return this.list_1.clear_j9y8zo_k$();
  };
  protoOf(StyleList).plusAssign_hufk31_k$ = function (item) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.list_1;
    tmp0_plusAssign.add_1j60pz_k$(item);
  };
  function set_alignContent(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return alignContent$delegate.setValue_5hnbrq_k$(_this__u8e3s4, alignContent$factory(), _set____db54di);
  }
  function get_alignContent(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return alignContent$delegate.getValue_sau4lq_k$(_this__u8e3s4, alignContent$factory_0());
  }
  var alignContent$delegate;
  function set_alignItems(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return alignItems$delegate.setValue_5hnbrq_k$(_this__u8e3s4, alignItems$factory(), _set____db54di);
  }
  function get_alignItems(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return alignItems$delegate.getValue_sau4lq_k$(_this__u8e3s4, alignItems$factory_0());
  }
  var alignItems$delegate;
  function set_alignSelf(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return alignSelf$delegate.setValue_5hnbrq_k$(_this__u8e3s4, alignSelf$factory(), _set____db54di);
  }
  function get_alignSelf(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return alignSelf$delegate.getValue_sau4lq_k$(_this__u8e3s4, alignSelf$factory_0());
  }
  var alignSelf$delegate;
  function set_animation(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animation$delegate.setValue_5hnbrq_k$(_this__u8e3s4, animation$factory(), _set____db54di);
  }
  function get_animation(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animation$delegate.getValue_sau4lq_k$(_this__u8e3s4, animation$factory_0());
  }
  var animation$delegate;
  function set_animationDelay(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationDelay$delegate.setValue_5hnbrq_k$(_this__u8e3s4, animationDelay$factory(), _set____db54di);
  }
  function get_animationDelay(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationDelay$delegate.getValue_sau4lq_k$(_this__u8e3s4, animationDelay$factory_0());
  }
  var animationDelay$delegate;
  function set_animationDirection(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationDirection$delegate.setValue_5hnbrq_k$(_this__u8e3s4, animationDirection$factory(), _set____db54di);
  }
  function get_animationDirection(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationDirection$delegate.getValue_sau4lq_k$(_this__u8e3s4, animationDirection$factory_0());
  }
  var animationDirection$delegate;
  function set_animationDuration(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationDuration$delegate.setValue_5hnbrq_k$(_this__u8e3s4, animationDuration$factory(), _set____db54di);
  }
  function get_animationDuration(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationDuration$delegate.getValue_sau4lq_k$(_this__u8e3s4, animationDuration$factory_0());
  }
  var animationDuration$delegate;
  function set_animationFillMode(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationFillMode$delegate.setValue_5hnbrq_k$(_this__u8e3s4, animationFillMode$factory(), _set____db54di);
  }
  function get_animationFillMode(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationFillMode$delegate.getValue_sau4lq_k$(_this__u8e3s4, animationFillMode$factory_0());
  }
  var animationFillMode$delegate;
  function set_animationIterationCount(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationIterationCount$delegate.setValue_5hnbrq_k$(_this__u8e3s4, animationIterationCount$factory(), _set____db54di);
  }
  function get_animationIterationCount(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationIterationCount$delegate.getValue_sau4lq_k$(_this__u8e3s4, animationIterationCount$factory_0());
  }
  var animationIterationCount$delegate;
  function set_animationName(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationName$delegate.setValue_5hnbrq_k$(_this__u8e3s4, animationName$factory(), _set____db54di);
  }
  function get_animationName(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationName$delegate.getValue_sau4lq_k$(_this__u8e3s4, animationName$factory_0());
  }
  var animationName$delegate;
  function set_animationPlayState(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationPlayState$delegate.setValue_5hnbrq_k$(_this__u8e3s4, animationPlayState$factory(), _set____db54di);
  }
  function get_animationPlayState(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationPlayState$delegate.getValue_sau4lq_k$(_this__u8e3s4, animationPlayState$factory_0());
  }
  var animationPlayState$delegate;
  function set_animationTimingFunction(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationTimingFunction$delegate.setValue_5hnbrq_k$(_this__u8e3s4, animationTimingFunction$factory(), _set____db54di);
  }
  function get_animationTimingFunction(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return animationTimingFunction$delegate.getValue_sau4lq_k$(_this__u8e3s4, animationTimingFunction$factory_0());
  }
  var animationTimingFunction$delegate;
  function set_appearance(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return appearance$delegate.setValue_5hnbrq_k$(_this__u8e3s4, appearance$factory(), _set____db54di);
  }
  function get_appearance(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return appearance$delegate.getValue_sau4lq_k$(_this__u8e3s4, appearance$factory_0());
  }
  var appearance$delegate;
  function set_aspectRatio(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return aspectRatio$delegate.setValue_5hnbrq_k$(_this__u8e3s4, aspectRatio$factory(), _set____db54di);
  }
  function get_aspectRatio(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return aspectRatio$delegate.getValue_sau4lq_k$(_this__u8e3s4, aspectRatio$factory_0());
  }
  var aspectRatio$delegate;
  function set_backfaceVisibility(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backfaceVisibility$delegate.setValue_5hnbrq_k$(_this__u8e3s4, backfaceVisibility$factory(), _set____db54di);
  }
  function get_backfaceVisibility(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backfaceVisibility$delegate.getValue_sau4lq_k$(_this__u8e3s4, backfaceVisibility$factory_0());
  }
  var backfaceVisibility$delegate;
  function set_background(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return background$delegate.setValue_5hnbrq_k$(_this__u8e3s4, background$factory(), _set____db54di);
  }
  function get_background(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return background$delegate.getValue_sau4lq_k$(_this__u8e3s4, background$factory_0());
  }
  var background$delegate;
  function set_backgroundAttachment(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundAttachment$delegate.setValue_5hnbrq_k$(_this__u8e3s4, backgroundAttachment$factory(), _set____db54di);
  }
  function get_backgroundAttachment(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundAttachment$delegate.getValue_sau4lq_k$(_this__u8e3s4, backgroundAttachment$factory_0());
  }
  var backgroundAttachment$delegate;
  function set_backgroundClip(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundClip$delegate.setValue_5hnbrq_k$(_this__u8e3s4, backgroundClip$factory(), _set____db54di);
  }
  function get_backgroundClip(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundClip$delegate.getValue_sau4lq_k$(_this__u8e3s4, backgroundClip$factory_0());
  }
  var backgroundClip$delegate;
  function set_backgroundColor(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundColor$delegate.setValue_5hnbrq_k$(_this__u8e3s4, backgroundColor$factory(), _set____db54di);
  }
  function get_backgroundColor(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundColor$delegate.getValue_sau4lq_k$(_this__u8e3s4, backgroundColor$factory_0());
  }
  var backgroundColor$delegate;
  function set_backgroundImage(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundImage$delegate.setValue_5hnbrq_k$(_this__u8e3s4, backgroundImage$factory(), _set____db54di);
  }
  function get_backgroundImage(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundImage$delegate.getValue_sau4lq_k$(_this__u8e3s4, backgroundImage$factory_0());
  }
  var backgroundImage$delegate;
  function set_backgroundOrigin(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundOrigin$delegate.setValue_5hnbrq_k$(_this__u8e3s4, backgroundOrigin$factory(), _set____db54di);
  }
  function get_backgroundOrigin(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundOrigin$delegate.getValue_sau4lq_k$(_this__u8e3s4, backgroundOrigin$factory_0());
  }
  var backgroundOrigin$delegate;
  function set_backgroundPosition(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundPosition$delegate.setValue_5hnbrq_k$(_this__u8e3s4, backgroundPosition$factory(), _set____db54di);
  }
  function get_backgroundPosition(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundPosition$delegate.getValue_sau4lq_k$(_this__u8e3s4, backgroundPosition$factory_0());
  }
  var backgroundPosition$delegate;
  function set_backgroundRepeat(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundRepeat$delegate.setValue_5hnbrq_k$(_this__u8e3s4, backgroundRepeat$factory(), _set____db54di);
  }
  function get_backgroundRepeat(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundRepeat$delegate.getValue_sau4lq_k$(_this__u8e3s4, backgroundRepeat$factory_0());
  }
  var backgroundRepeat$delegate;
  function set_backgroundSize(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundSize$delegate.setValue_5hnbrq_k$(_this__u8e3s4, backgroundSize$factory(), _set____db54di);
  }
  function get_backgroundSize(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return backgroundSize$delegate.getValue_sau4lq_k$(_this__u8e3s4, backgroundSize$factory_0());
  }
  var backgroundSize$delegate;
  function set_border(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return border$delegate.setValue_5hnbrq_k$(_this__u8e3s4, border$factory(), _set____db54di);
  }
  function get_border(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return border$delegate.getValue_sau4lq_k$(_this__u8e3s4, border$factory_0());
  }
  var border$delegate;
  function set_borderTop(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTop$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderTop$factory(), _set____db54di);
  }
  function get_borderTop(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTop$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderTop$factory_0());
  }
  var borderTop$delegate;
  function set_borderRight(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRight$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderRight$factory(), _set____db54di);
  }
  function get_borderRight(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRight$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderRight$factory_0());
  }
  var borderRight$delegate;
  function set_borderBottom(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottom$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderBottom$factory(), _set____db54di);
  }
  function get_borderBottom(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottom$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderBottom$factory_0());
  }
  var borderBottom$delegate;
  function set_borderLeft(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderLeft$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderLeft$factory(), _set____db54di);
  }
  function get_borderLeft(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderLeft$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderLeft$factory_0());
  }
  var borderLeft$delegate;
  function set_borderCollapse(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderCollapse$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderCollapse$factory(), _set____db54di);
  }
  function get_borderCollapse(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderCollapse$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderCollapse$factory_0());
  }
  var borderCollapse$delegate;
  function set_borderSpacing(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderSpacing$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderSpacing$factory(), _set____db54di);
  }
  function get_borderSpacing(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderSpacing$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderSpacing$factory_0());
  }
  var borderSpacing$delegate;
  function set_borderRadius(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRadius$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderRadius$factory(), _set____db54di);
  }
  function get_borderRadius(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRadius$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderRadius$factory_0());
  }
  var borderRadius$delegate;
  function set_borderTopLeftRadius(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopLeftRadius$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderTopLeftRadius$factory(), _set____db54di);
  }
  function get_borderTopLeftRadius(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopLeftRadius$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderTopLeftRadius$factory_0());
  }
  var borderTopLeftRadius$delegate;
  function set_borderTopRightRadius(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopRightRadius$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderTopRightRadius$factory(), _set____db54di);
  }
  function get_borderTopRightRadius(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopRightRadius$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderTopRightRadius$factory_0());
  }
  var borderTopRightRadius$delegate;
  function set_borderBottomLeftRadius(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomLeftRadius$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderBottomLeftRadius$factory(), _set____db54di);
  }
  function get_borderBottomLeftRadius(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomLeftRadius$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderBottomLeftRadius$factory_0());
  }
  var borderBottomLeftRadius$delegate;
  function set_borderBottomRightRadius(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomRightRadius$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderBottomRightRadius$factory(), _set____db54di);
  }
  function get_borderBottomRightRadius(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomRightRadius$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderBottomRightRadius$factory_0());
  }
  var borderBottomRightRadius$delegate;
  function set_borderStyle(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderStyle$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderStyle$factory(), _set____db54di);
  }
  function get_borderStyle(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderStyle$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderStyle$factory_0());
  }
  var borderStyle$delegate;
  function set_borderTopStyle(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopStyle$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderTopStyle$factory(), _set____db54di);
  }
  function get_borderTopStyle(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopStyle$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderTopStyle$factory_0());
  }
  var borderTopStyle$delegate;
  function set_borderRightStyle(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRightStyle$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderRightStyle$factory(), _set____db54di);
  }
  function get_borderRightStyle(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRightStyle$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderRightStyle$factory_0());
  }
  var borderRightStyle$delegate;
  function set_borderBottomStyle(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomStyle$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderBottomStyle$factory(), _set____db54di);
  }
  function get_borderBottomStyle(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomStyle$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderBottomStyle$factory_0());
  }
  var borderBottomStyle$delegate;
  function set_borderLeftStyle(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderLeftStyle$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderLeftStyle$factory(), _set____db54di);
  }
  function get_borderLeftStyle(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderLeftStyle$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderLeftStyle$factory_0());
  }
  var borderLeftStyle$delegate;
  function set_borderWidth(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderWidth$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderWidth$factory(), _set____db54di);
  }
  function get_borderWidth(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderWidth$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderWidth$factory_0());
  }
  var borderWidth$delegate;
  function set_borderTopWidth(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopWidth$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderTopWidth$factory(), _set____db54di);
  }
  function get_borderTopWidth(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopWidth$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderTopWidth$factory_0());
  }
  var borderTopWidth$delegate;
  function set_borderRightWidth(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRightWidth$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderRightWidth$factory(), _set____db54di);
  }
  function get_borderRightWidth(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRightWidth$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderRightWidth$factory_0());
  }
  var borderRightWidth$delegate;
  function set_borderBottomWidth(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomWidth$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderBottomWidth$factory(), _set____db54di);
  }
  function get_borderBottomWidth(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomWidth$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderBottomWidth$factory_0());
  }
  var borderBottomWidth$delegate;
  function set_borderLeftWidth(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderLeftWidth$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderLeftWidth$factory(), _set____db54di);
  }
  function get_borderLeftWidth(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderLeftWidth$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderLeftWidth$factory_0());
  }
  var borderLeftWidth$delegate;
  function set_borderColor(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderColor$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderColor$factory(), _set____db54di);
  }
  function get_borderColor(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderColor$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderColor$factory_0());
  }
  var borderColor$delegate;
  function set_borderTopColor(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopColor$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderTopColor$factory(), _set____db54di);
  }
  function get_borderTopColor(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderTopColor$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderTopColor$factory_0());
  }
  var borderTopColor$delegate;
  function set_borderRightColor(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRightColor$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderRightColor$factory(), _set____db54di);
  }
  function get_borderRightColor(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderRightColor$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderRightColor$factory_0());
  }
  var borderRightColor$delegate;
  function set_borderBottomColor(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomColor$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderBottomColor$factory(), _set____db54di);
  }
  function get_borderBottomColor(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderBottomColor$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderBottomColor$factory_0());
  }
  var borderBottomColor$delegate;
  function set_borderLeftColor(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderLeftColor$delegate.setValue_5hnbrq_k$(_this__u8e3s4, borderLeftColor$factory(), _set____db54di);
  }
  function get_borderLeftColor(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return borderLeftColor$delegate.getValue_sau4lq_k$(_this__u8e3s4, borderLeftColor$factory_0());
  }
  var borderLeftColor$delegate;
  function set_bottom(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return bottom$delegate.setValue_5hnbrq_k$(_this__u8e3s4, bottom$factory(), _set____db54di);
  }
  function get_bottom(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return bottom$delegate.getValue_sau4lq_k$(_this__u8e3s4, bottom$factory_0());
  }
  var bottom$delegate;
  function set_boxShadow(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return boxShadow$delegate.setValue_5hnbrq_k$(_this__u8e3s4, boxShadow$factory(), _set____db54di);
  }
  function get_boxShadow(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return boxShadow$delegate.getValue_sau4lq_k$(_this__u8e3s4, boxShadow$factory_0());
  }
  var boxShadow$delegate;
  function set_boxSizing(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return boxSizing$delegate.setValue_5hnbrq_k$(_this__u8e3s4, boxSizing$factory(), _set____db54di);
  }
  function get_boxSizing(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return boxSizing$delegate.getValue_sau4lq_k$(_this__u8e3s4, boxSizing$factory_0());
  }
  var boxSizing$delegate;
  function set_clear(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return clear$delegate.setValue_5hnbrq_k$(_this__u8e3s4, clear$factory(), _set____db54di);
  }
  function get_clear(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return clear$delegate.getValue_sau4lq_k$(_this__u8e3s4, clear$factory_0());
  }
  var clear$delegate;
  function set_color(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return color$delegate.setValue_5hnbrq_k$(_this__u8e3s4, color$factory(), _set____db54di);
  }
  function get_color(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return color$delegate.getValue_sau4lq_k$(_this__u8e3s4, color$factory_0());
  }
  var color$delegate;
  function set_columnGap(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return columnGap$delegate.setValue_5hnbrq_k$(_this__u8e3s4, columnGap$factory(), _set____db54di);
  }
  function get_columnGap(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return columnGap$delegate.getValue_sau4lq_k$(_this__u8e3s4, columnGap$factory_0());
  }
  var columnGap$delegate;
  function set_contain(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return contain$delegate.setValue_5hnbrq_k$(_this__u8e3s4, contain$factory(), _set____db54di);
  }
  function get_contain(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return contain$delegate.getValue_sau4lq_k$(_this__u8e3s4, contain$factory_0());
  }
  var contain$delegate;
  function set_content(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return content$delegate.setValue_5hnbrq_k$(_this__u8e3s4, content$factory(), _set____db54di);
  }
  function get_content(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return content$delegate.getValue_sau4lq_k$(_this__u8e3s4, content$factory_0());
  }
  var content$delegate;
  function set_cursor(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return cursor$delegate.setValue_5hnbrq_k$(_this__u8e3s4, cursor$factory(), _set____db54di);
  }
  function get_cursor(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return cursor$delegate.getValue_sau4lq_k$(_this__u8e3s4, cursor$factory_0());
  }
  var cursor$delegate;
  function set_direction(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return direction$delegate.setValue_5hnbrq_k$(_this__u8e3s4, direction$factory(), _set____db54di);
  }
  function get_direction(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return direction$delegate.getValue_sau4lq_k$(_this__u8e3s4, direction$factory_0());
  }
  var direction$delegate;
  function set_display(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return display$delegate.setValue_5hnbrq_k$(_this__u8e3s4, display$factory(), _set____db54di);
  }
  function get_display(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return display$delegate.getValue_sau4lq_k$(_this__u8e3s4, display$factory_0());
  }
  var display$delegate;
  function set_filter(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return filter$delegate.setValue_5hnbrq_k$(_this__u8e3s4, filter$factory(), _set____db54di);
  }
  function get_filter(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return filter$delegate.getValue_sau4lq_k$(_this__u8e3s4, filter$factory_0());
  }
  var filter$delegate;
  function set_flexBasis(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexBasis$delegate.setValue_5hnbrq_k$(_this__u8e3s4, flexBasis$factory(), _set____db54di);
  }
  function get_flexBasis(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexBasis$delegate.getValue_sau4lq_k$(_this__u8e3s4, flexBasis$factory_0());
  }
  var flexBasis$delegate;
  function set_flexDirection(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexDirection$delegate.setValue_5hnbrq_k$(_this__u8e3s4, flexDirection$factory(), _set____db54di);
  }
  function get_flexDirection(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexDirection$delegate.getValue_sau4lq_k$(_this__u8e3s4, flexDirection$factory_0());
  }
  var flexDirection$delegate;
  function set_flexGrow(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexGrow$delegate.setValue_5hnbrq_k$(_this__u8e3s4, flexGrow$factory(), _set____db54di);
  }
  function get_flexGrow(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexGrow$delegate.getValue_sau4lq_k$(_this__u8e3s4, flexGrow$factory_0());
  }
  var flexGrow$delegate;
  function set_flexShrink(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexShrink$delegate.setValue_5hnbrq_k$(_this__u8e3s4, flexShrink$factory(), _set____db54di);
  }
  function get_flexShrink(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexShrink$delegate.getValue_sau4lq_k$(_this__u8e3s4, flexShrink$factory_0());
  }
  var flexShrink$delegate;
  function set_flexWrap(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexWrap$delegate.setValue_5hnbrq_k$(_this__u8e3s4, flexWrap$factory(), _set____db54di);
  }
  function get_flexWrap(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return flexWrap$delegate.getValue_sau4lq_k$(_this__u8e3s4, flexWrap$factory_0());
  }
  var flexWrap$delegate;
  function set_float(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return float$delegate.setValue_5hnbrq_k$(_this__u8e3s4, float$factory(), _set____db54di);
  }
  function get_float(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return float$delegate.getValue_sau4lq_k$(_this__u8e3s4, float$factory_0());
  }
  var float$delegate;
  function set_fontFamily(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontFamily$delegate.setValue_5hnbrq_k$(_this__u8e3s4, fontFamily$factory(), _set____db54di);
  }
  function get_fontFamily(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontFamily$delegate.getValue_sau4lq_k$(_this__u8e3s4, fontFamily$factory_0());
  }
  var fontFamily$delegate;
  function set_fontSize(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontSize$delegate.setValue_5hnbrq_k$(_this__u8e3s4, fontSize$factory(), _set____db54di);
  }
  function get_fontSize(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontSize$delegate.getValue_sau4lq_k$(_this__u8e3s4, fontSize$factory_0());
  }
  var fontSize$delegate;
  function set_fontSizeAdjust(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontSizeAdjust$delegate.setValue_5hnbrq_k$(_this__u8e3s4, fontSizeAdjust$factory(), _set____db54di);
  }
  function get_fontSizeAdjust(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontSizeAdjust$delegate.getValue_sau4lq_k$(_this__u8e3s4, fontSizeAdjust$factory_0());
  }
  var fontSizeAdjust$delegate;
  function set_fontStyle(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontStyle$delegate.setValue_5hnbrq_k$(_this__u8e3s4, fontStyle$factory(), _set____db54di);
  }
  function get_fontStyle(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontStyle$delegate.getValue_sau4lq_k$(_this__u8e3s4, fontStyle$factory_0());
  }
  var fontStyle$delegate;
  function set_fontWeight(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontWeight$delegate.setValue_5hnbrq_k$(_this__u8e3s4, fontWeight$factory(), _set____db54di);
  }
  function get_fontWeight(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return fontWeight$delegate.getValue_sau4lq_k$(_this__u8e3s4, fontWeight$factory_0());
  }
  var fontWeight$delegate;
  function set_gap(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gap$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gap$factory(), _set____db54di);
  }
  function get_gap(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gap$delegate.getValue_sau4lq_k$(_this__u8e3s4, gap$factory_0());
  }
  var gap$delegate;
  function set_gridAutoColumns(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridAutoColumns$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridAutoColumns$factory(), _set____db54di);
  }
  function get_gridAutoColumns(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridAutoColumns$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridAutoColumns$factory_0());
  }
  var gridAutoColumns$delegate;
  function set_gridAutoFlow(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridAutoFlow$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridAutoFlow$factory(), _set____db54di);
  }
  function get_gridAutoFlow(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridAutoFlow$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridAutoFlow$factory_0());
  }
  var gridAutoFlow$delegate;
  function set_gridAutoRows(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridAutoRows$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridAutoRows$factory(), _set____db54di);
  }
  function get_gridAutoRows(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridAutoRows$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridAutoRows$factory_0());
  }
  var gridAutoRows$delegate;
  function set_gridColumn(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridColumn$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridColumn$factory(), _set____db54di);
  }
  function get_gridColumn(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridColumn$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridColumn$factory_0());
  }
  var gridColumn$delegate;
  function set_gridColumnEnd(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridColumnEnd$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridColumnEnd$factory(), _set____db54di);
  }
  function get_gridColumnEnd(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridColumnEnd$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridColumnEnd$factory_0());
  }
  var gridColumnEnd$delegate;
  function set_gridColumnStart(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridColumnStart$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridColumnStart$factory(), _set____db54di);
  }
  function get_gridColumnStart(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridColumnStart$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridColumnStart$factory_0());
  }
  var gridColumnStart$delegate;
  function set_gridRow(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridRow$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridRow$factory(), _set____db54di);
  }
  function get_gridRow(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridRow$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridRow$factory_0());
  }
  var gridRow$delegate;
  function set_gridRowEnd(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridRowEnd$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridRowEnd$factory(), _set____db54di);
  }
  function get_gridRowEnd(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridRowEnd$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridRowEnd$factory_0());
  }
  var gridRowEnd$delegate;
  function set_gridRowStart(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridRowStart$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridRowStart$factory(), _set____db54di);
  }
  function get_gridRowStart(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridRowStart$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridRowStart$factory_0());
  }
  var gridRowStart$delegate;
  function set_gridTemplate(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridTemplate$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridTemplate$factory(), _set____db54di);
  }
  function get_gridTemplate(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridTemplate$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridTemplate$factory_0());
  }
  var gridTemplate$delegate;
  function set_gridTemplateAreas(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridTemplateAreas$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridTemplateAreas$factory(), _set____db54di);
  }
  function get_gridTemplateAreas(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridTemplateAreas$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridTemplateAreas$factory_0());
  }
  var gridTemplateAreas$delegate;
  function set_gridTemplateColumns(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridTemplateColumns$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridTemplateColumns$factory(), _set____db54di);
  }
  function get_gridTemplateColumns(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridTemplateColumns$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridTemplateColumns$factory_0());
  }
  var gridTemplateColumns$delegate;
  function set_gridTemplateRows(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridTemplateRows$delegate.setValue_5hnbrq_k$(_this__u8e3s4, gridTemplateRows$factory(), _set____db54di);
  }
  function get_gridTemplateRows(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return gridTemplateRows$delegate.getValue_sau4lq_k$(_this__u8e3s4, gridTemplateRows$factory_0());
  }
  var gridTemplateRows$delegate;
  function set_height(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return height$delegate.setValue_5hnbrq_k$(_this__u8e3s4, height$factory(), _set____db54di);
  }
  function get_height(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return height$delegate.getValue_sau4lq_k$(_this__u8e3s4, height$factory_0());
  }
  var height$delegate;
  function set_hyphens(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return hyphens$delegate.setValue_5hnbrq_k$(_this__u8e3s4, hyphens$factory(), _set____db54di);
  }
  function get_hyphens(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return hyphens$delegate.getValue_sau4lq_k$(_this__u8e3s4, hyphens$factory_0());
  }
  var hyphens$delegate;
  function set_inset(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return inset$delegate.setValue_5hnbrq_k$(_this__u8e3s4, inset$factory(), _set____db54di);
  }
  function get_inset(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return inset$delegate.getValue_sau4lq_k$(_this__u8e3s4, inset$factory_0());
  }
  var inset$delegate;
  function set_isolation(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return isolation$delegate.setValue_5hnbrq_k$(_this__u8e3s4, isolation$factory(), _set____db54di);
  }
  function get_isolation(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return isolation$delegate.getValue_sau4lq_k$(_this__u8e3s4, isolation$factory_0());
  }
  var isolation$delegate;
  function set_justifyContent(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return justifyContent$delegate.setValue_5hnbrq_k$(_this__u8e3s4, justifyContent$factory(), _set____db54di);
  }
  function get_justifyContent(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return justifyContent$delegate.getValue_sau4lq_k$(_this__u8e3s4, justifyContent$factory_0());
  }
  var justifyContent$delegate;
  function set_justifyItems(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return justifyItems$delegate.setValue_5hnbrq_k$(_this__u8e3s4, justifyItems$factory(), _set____db54di);
  }
  function get_justifyItems(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return justifyItems$delegate.getValue_sau4lq_k$(_this__u8e3s4, justifyItems$factory_0());
  }
  var justifyItems$delegate;
  function set_left(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return left$delegate.setValue_5hnbrq_k$(_this__u8e3s4, left$factory(), _set____db54di);
  }
  function get_left(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return left$delegate.getValue_sau4lq_k$(_this__u8e3s4, left$factory_0());
  }
  var left$delegate;
  function set_letterSpacing(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return letterSpacing$delegate.setValue_5hnbrq_k$(_this__u8e3s4, letterSpacing$factory(), _set____db54di);
  }
  function get_letterSpacing(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return letterSpacing$delegate.getValue_sau4lq_k$(_this__u8e3s4, letterSpacing$factory_0());
  }
  var letterSpacing$delegate;
  function set_lineHeight(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return lineHeight$delegate.setValue_5hnbrq_k$(_this__u8e3s4, lineHeight$factory(), _set____db54di);
  }
  function get_lineHeight(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return lineHeight$delegate.getValue_sau4lq_k$(_this__u8e3s4, lineHeight$factory_0());
  }
  var lineHeight$delegate;
  function set_listStyleType(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return listStyleType$delegate.setValue_5hnbrq_k$(_this__u8e3s4, listStyleType$factory(), _set____db54di);
  }
  function get_listStyleType(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return listStyleType$delegate.getValue_sau4lq_k$(_this__u8e3s4, listStyleType$factory_0());
  }
  var listStyleType$delegate;
  function set_margin(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return margin$delegate.setValue_5hnbrq_k$(_this__u8e3s4, margin$factory(), _set____db54di);
  }
  function get_margin(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return margin$delegate.getValue_sau4lq_k$(_this__u8e3s4, margin$factory_0());
  }
  var margin$delegate;
  function set_marginTop(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return marginTop$delegate.setValue_5hnbrq_k$(_this__u8e3s4, marginTop$factory(), _set____db54di);
  }
  function get_marginTop(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return marginTop$delegate.getValue_sau4lq_k$(_this__u8e3s4, marginTop$factory_0());
  }
  var marginTop$delegate;
  function set_marginRight(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return marginRight$delegate.setValue_5hnbrq_k$(_this__u8e3s4, marginRight$factory(), _set____db54di);
  }
  function get_marginRight(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return marginRight$delegate.getValue_sau4lq_k$(_this__u8e3s4, marginRight$factory_0());
  }
  var marginRight$delegate;
  function set_marginBottom(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return marginBottom$delegate.setValue_5hnbrq_k$(_this__u8e3s4, marginBottom$factory(), _set____db54di);
  }
  function get_marginBottom(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return marginBottom$delegate.getValue_sau4lq_k$(_this__u8e3s4, marginBottom$factory_0());
  }
  var marginBottom$delegate;
  function set_marginLeft(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return marginLeft$delegate.setValue_5hnbrq_k$(_this__u8e3s4, marginLeft$factory(), _set____db54di);
  }
  function get_marginLeft(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return marginLeft$delegate.getValue_sau4lq_k$(_this__u8e3s4, marginLeft$factory_0());
  }
  var marginLeft$delegate;
  function set_minWidth(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return minWidth$delegate.setValue_5hnbrq_k$(_this__u8e3s4, minWidth$factory(), _set____db54di);
  }
  function get_minWidth(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return minWidth$delegate.getValue_sau4lq_k$(_this__u8e3s4, minWidth$factory_0());
  }
  var minWidth$delegate;
  function set_maxWidth(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return maxWidth$delegate.setValue_5hnbrq_k$(_this__u8e3s4, maxWidth$factory(), _set____db54di);
  }
  function get_maxWidth(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return maxWidth$delegate.getValue_sau4lq_k$(_this__u8e3s4, maxWidth$factory_0());
  }
  var maxWidth$delegate;
  function set_minHeight(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return minHeight$delegate.setValue_5hnbrq_k$(_this__u8e3s4, minHeight$factory(), _set____db54di);
  }
  function get_minHeight(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return minHeight$delegate.getValue_sau4lq_k$(_this__u8e3s4, minHeight$factory_0());
  }
  var minHeight$delegate;
  function set_maxHeight(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return maxHeight$delegate.setValue_5hnbrq_k$(_this__u8e3s4, maxHeight$factory(), _set____db54di);
  }
  function get_maxHeight(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return maxHeight$delegate.getValue_sau4lq_k$(_this__u8e3s4, maxHeight$factory_0());
  }
  var maxHeight$delegate;
  function set_objectFit(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return objectFit$delegate.setValue_5hnbrq_k$(_this__u8e3s4, objectFit$factory(), _set____db54di);
  }
  function get_objectFit(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return objectFit$delegate.getValue_sau4lq_k$(_this__u8e3s4, objectFit$factory_0());
  }
  var objectFit$delegate;
  function set_objectPosition(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return objectPosition$delegate.setValue_5hnbrq_k$(_this__u8e3s4, objectPosition$factory(), _set____db54di);
  }
  function get_objectPosition(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return objectPosition$delegate.getValue_sau4lq_k$(_this__u8e3s4, objectPosition$factory_0());
  }
  var objectPosition$delegate;
  function set_opacity(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return opacity$delegate.setValue_5hnbrq_k$(_this__u8e3s4, opacity$factory(), _set____db54di);
  }
  function get_opacity(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return opacity$delegate.getValue_sau4lq_k$(_this__u8e3s4, opacity$factory_0());
  }
  var opacity$delegate;
  function set_order(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return order$delegate.setValue_5hnbrq_k$(_this__u8e3s4, order$factory(), _set____db54di);
  }
  function get_order(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return order$delegate.getValue_sau4lq_k$(_this__u8e3s4, order$factory_0());
  }
  var order$delegate;
  function set_outline(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outline$delegate.setValue_5hnbrq_k$(_this__u8e3s4, outline$factory(), _set____db54di);
  }
  function get_outline(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outline$delegate.getValue_sau4lq_k$(_this__u8e3s4, outline$factory_0());
  }
  var outline$delegate;
  function set_outlineColor(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outlineColor$delegate.setValue_5hnbrq_k$(_this__u8e3s4, outlineColor$factory(), _set____db54di);
  }
  function get_outlineColor(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outlineColor$delegate.getValue_sau4lq_k$(_this__u8e3s4, outlineColor$factory_0());
  }
  var outlineColor$delegate;
  function set_outlineOffset(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outlineOffset$delegate.setValue_5hnbrq_k$(_this__u8e3s4, outlineOffset$factory(), _set____db54di);
  }
  function get_outlineOffset(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outlineOffset$delegate.getValue_sau4lq_k$(_this__u8e3s4, outlineOffset$factory_0());
  }
  var outlineOffset$delegate;
  function set_outlineStyle(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outlineStyle$delegate.setValue_5hnbrq_k$(_this__u8e3s4, outlineStyle$factory(), _set____db54di);
  }
  function get_outlineStyle(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outlineStyle$delegate.getValue_sau4lq_k$(_this__u8e3s4, outlineStyle$factory_0());
  }
  var outlineStyle$delegate;
  function set_outlineWidth(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outlineWidth$delegate.setValue_5hnbrq_k$(_this__u8e3s4, outlineWidth$factory(), _set____db54di);
  }
  function get_outlineWidth(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return outlineWidth$delegate.getValue_sau4lq_k$(_this__u8e3s4, outlineWidth$factory_0());
  }
  var outlineWidth$delegate;
  function set_overflow(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overflow$delegate.setValue_5hnbrq_k$(_this__u8e3s4, overflow$factory(), _set____db54di);
  }
  function get_overflow(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overflow$delegate.getValue_sau4lq_k$(_this__u8e3s4, overflow$factory_0());
  }
  var overflow$delegate;
  function set_overflowX(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overflowX$delegate.setValue_5hnbrq_k$(_this__u8e3s4, overflowX$factory(), _set____db54di);
  }
  function get_overflowX(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overflowX$delegate.getValue_sau4lq_k$(_this__u8e3s4, overflowX$factory_0());
  }
  var overflowX$delegate;
  function set_overflowY(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overflowY$delegate.setValue_5hnbrq_k$(_this__u8e3s4, overflowY$factory(), _set____db54di);
  }
  function get_overflowY(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overflowY$delegate.getValue_sau4lq_k$(_this__u8e3s4, overflowY$factory_0());
  }
  var overflowY$delegate;
  function set_overflowWrap(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overflowWrap$delegate.setValue_5hnbrq_k$(_this__u8e3s4, overflowWrap$factory(), _set____db54di);
  }
  function get_overflowWrap(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overflowWrap$delegate.getValue_sau4lq_k$(_this__u8e3s4, overflowWrap$factory_0());
  }
  var overflowWrap$delegate;
  function set_overscrollBehavior(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overscrollBehavior$delegate.setValue_5hnbrq_k$(_this__u8e3s4, overscrollBehavior$factory(), _set____db54di);
  }
  function get_overscrollBehavior(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return overscrollBehavior$delegate.getValue_sau4lq_k$(_this__u8e3s4, overscrollBehavior$factory_0());
  }
  var overscrollBehavior$delegate;
  function set_padding(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return padding$delegate.setValue_5hnbrq_k$(_this__u8e3s4, padding$factory(), _set____db54di);
  }
  function get_padding(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return padding$delegate.getValue_sau4lq_k$(_this__u8e3s4, padding$factory_0());
  }
  var padding$delegate;
  function set_paddingTop(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return paddingTop$delegate.setValue_5hnbrq_k$(_this__u8e3s4, paddingTop$factory(), _set____db54di);
  }
  function get_paddingTop(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return paddingTop$delegate.getValue_sau4lq_k$(_this__u8e3s4, paddingTop$factory_0());
  }
  var paddingTop$delegate;
  function set_paddingRight(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return paddingRight$delegate.setValue_5hnbrq_k$(_this__u8e3s4, paddingRight$factory(), _set____db54di);
  }
  function get_paddingRight(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return paddingRight$delegate.getValue_sau4lq_k$(_this__u8e3s4, paddingRight$factory_0());
  }
  var paddingRight$delegate;
  function set_paddingBottom(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return paddingBottom$delegate.setValue_5hnbrq_k$(_this__u8e3s4, paddingBottom$factory(), _set____db54di);
  }
  function get_paddingBottom(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return paddingBottom$delegate.getValue_sau4lq_k$(_this__u8e3s4, paddingBottom$factory_0());
  }
  var paddingBottom$delegate;
  function set_paddingLeft(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return paddingLeft$delegate.setValue_5hnbrq_k$(_this__u8e3s4, paddingLeft$factory(), _set____db54di);
  }
  function get_paddingLeft(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return paddingLeft$delegate.getValue_sau4lq_k$(_this__u8e3s4, paddingLeft$factory_0());
  }
  var paddingLeft$delegate;
  function set_pointerEvents(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return pointerEvents$delegate.setValue_5hnbrq_k$(_this__u8e3s4, pointerEvents$factory(), _set____db54di);
  }
  function get_pointerEvents(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return pointerEvents$delegate.getValue_sau4lq_k$(_this__u8e3s4, pointerEvents$factory_0());
  }
  var pointerEvents$delegate;
  function set_position(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return position$delegate.setValue_5hnbrq_k$(_this__u8e3s4, position$factory(), _set____db54di);
  }
  function get_position(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return position$delegate.getValue_sau4lq_k$(_this__u8e3s4, position$factory_0());
  }
  var position$delegate;
  function set_resize(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return resize$delegate.setValue_5hnbrq_k$(_this__u8e3s4, resize$factory(), _set____db54di);
  }
  function get_resize(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return resize$delegate.getValue_sau4lq_k$(_this__u8e3s4, resize$factory_0());
  }
  var resize$delegate;
  function set_right(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return right$delegate.setValue_5hnbrq_k$(_this__u8e3s4, right$factory(), _set____db54di);
  }
  function get_right(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return right$delegate.getValue_sau4lq_k$(_this__u8e3s4, right$factory_0());
  }
  var right$delegate;
  function set_rowGap(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return rowGap$delegate.setValue_5hnbrq_k$(_this__u8e3s4, rowGap$factory(), _set____db54di);
  }
  function get_rowGap(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return rowGap$delegate.getValue_sau4lq_k$(_this__u8e3s4, rowGap$factory_0());
  }
  var rowGap$delegate;
  function set_scrollBehavior(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return scrollBehavior$delegate.setValue_5hnbrq_k$(_this__u8e3s4, scrollBehavior$factory(), _set____db54di);
  }
  function get_scrollBehavior(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return scrollBehavior$delegate.getValue_sau4lq_k$(_this__u8e3s4, scrollBehavior$factory_0());
  }
  var scrollBehavior$delegate;
  function set_src(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return src$delegate.setValue_5hnbrq_k$(_this__u8e3s4, src$factory(), _set____db54di);
  }
  function get_src(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return src$delegate.getValue_sau4lq_k$(_this__u8e3s4, src$factory_0());
  }
  var src$delegate;
  function set_tableLayout(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return tableLayout$delegate.setValue_5hnbrq_k$(_this__u8e3s4, tableLayout$factory(), _set____db54di);
  }
  function get_tableLayout(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return tableLayout$delegate.getValue_sau4lq_k$(_this__u8e3s4, tableLayout$factory_0());
  }
  var tableLayout$delegate;
  function set_textAlign(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return textAlign$delegate.setValue_5hnbrq_k$(_this__u8e3s4, textAlign$factory(), _set____db54di);
  }
  function get_textAlign(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return textAlign$delegate.getValue_sau4lq_k$(_this__u8e3s4, textAlign$factory_0());
  }
  var textAlign$delegate;
  function set_textDecoration(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return textDecoration$delegate.setValue_5hnbrq_k$(_this__u8e3s4, textDecoration$factory(), _set____db54di);
  }
  function get_textDecoration(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return textDecoration$delegate.getValue_sau4lq_k$(_this__u8e3s4, textDecoration$factory_0());
  }
  var textDecoration$delegate;
  function set_textOverflow(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return textOverflow$delegate.setValue_5hnbrq_k$(_this__u8e3s4, textOverflow$factory(), _set____db54di);
  }
  function get_textOverflow(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return textOverflow$delegate.getValue_sau4lq_k$(_this__u8e3s4, textOverflow$factory_0());
  }
  var textOverflow$delegate;
  function set_textTransform(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return textTransform$delegate.setValue_5hnbrq_k$(_this__u8e3s4, textTransform$factory(), _set____db54di);
  }
  function get_textTransform(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return textTransform$delegate.getValue_sau4lq_k$(_this__u8e3s4, textTransform$factory_0());
  }
  var textTransform$delegate;
  function set_top(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return top$delegate.setValue_5hnbrq_k$(_this__u8e3s4, top$factory(), _set____db54di);
  }
  function get_top(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return top$delegate.getValue_sau4lq_k$(_this__u8e3s4, top$factory_0());
  }
  var top$delegate;
  function set_transform(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transform$delegate.setValue_5hnbrq_k$(_this__u8e3s4, transform$factory(), _set____db54di);
  }
  function get_transform(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transform$delegate.getValue_sau4lq_k$(_this__u8e3s4, transform$factory_0());
  }
  var transform$delegate;
  function set_transition(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transition$delegate.setValue_5hnbrq_k$(_this__u8e3s4, transition$factory(), _set____db54di);
  }
  function get_transition(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transition$delegate.getValue_sau4lq_k$(_this__u8e3s4, transition$factory_0());
  }
  var transition$delegate;
  function set_transitionDelay(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transitionDelay$delegate.setValue_5hnbrq_k$(_this__u8e3s4, transitionDelay$factory(), _set____db54di);
  }
  function get_transitionDelay(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transitionDelay$delegate.getValue_sau4lq_k$(_this__u8e3s4, transitionDelay$factory_0());
  }
  var transitionDelay$delegate;
  function set_transitionDuration(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transitionDuration$delegate.setValue_5hnbrq_k$(_this__u8e3s4, transitionDuration$factory(), _set____db54di);
  }
  function get_transitionDuration(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transitionDuration$delegate.getValue_sau4lq_k$(_this__u8e3s4, transitionDuration$factory_0());
  }
  var transitionDuration$delegate;
  function set_transitionProperty(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transitionProperty$delegate.setValue_5hnbrq_k$(_this__u8e3s4, transitionProperty$factory(), _set____db54di);
  }
  function get_transitionProperty(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transitionProperty$delegate.getValue_sau4lq_k$(_this__u8e3s4, transitionProperty$factory_0());
  }
  var transitionProperty$delegate;
  function set_transitionTimingFunction(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transitionTimingFunction$delegate.setValue_5hnbrq_k$(_this__u8e3s4, transitionTimingFunction$factory(), _set____db54di);
  }
  function get_transitionTimingFunction(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return transitionTimingFunction$delegate.getValue_sau4lq_k$(_this__u8e3s4, transitionTimingFunction$factory_0());
  }
  var transitionTimingFunction$delegate;
  function set_userSelect(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return userSelect$delegate.setValue_5hnbrq_k$(_this__u8e3s4, userSelect$factory(), _set____db54di);
  }
  function get_userSelect(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return userSelect$delegate.getValue_sau4lq_k$(_this__u8e3s4, userSelect$factory_0());
  }
  var userSelect$delegate;
  function set_verticalAlign(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return verticalAlign$delegate.setValue_5hnbrq_k$(_this__u8e3s4, verticalAlign$factory(), _set____db54di);
  }
  function get_verticalAlign(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return verticalAlign$delegate.getValue_sau4lq_k$(_this__u8e3s4, verticalAlign$factory_0());
  }
  var verticalAlign$delegate;
  function set_visibility(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return visibility$delegate.setValue_5hnbrq_k$(_this__u8e3s4, visibility$factory(), _set____db54di);
  }
  function get_visibility(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return visibility$delegate.getValue_sau4lq_k$(_this__u8e3s4, visibility$factory_0());
  }
  var visibility$delegate;
  function set_whiteSpace(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return whiteSpace$delegate.setValue_5hnbrq_k$(_this__u8e3s4, whiteSpace$factory(), _set____db54di);
  }
  function get_whiteSpace(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return whiteSpace$delegate.getValue_sau4lq_k$(_this__u8e3s4, whiteSpace$factory_0());
  }
  var whiteSpace$delegate;
  function set_width(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return width$delegate.setValue_5hnbrq_k$(_this__u8e3s4, width$factory(), _set____db54di);
  }
  function get_width(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return width$delegate.getValue_sau4lq_k$(_this__u8e3s4, width$factory_0());
  }
  var width$delegate;
  function set_wordBreak(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return wordBreak$delegate.setValue_5hnbrq_k$(_this__u8e3s4, wordBreak$factory(), _set____db54di);
  }
  function get_wordBreak(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return wordBreak$delegate.getValue_sau4lq_k$(_this__u8e3s4, wordBreak$factory_0());
  }
  var wordBreak$delegate;
  function set_wordSpacing(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return wordSpacing$delegate.setValue_5hnbrq_k$(_this__u8e3s4, wordSpacing$factory(), _set____db54di);
  }
  function get_wordSpacing(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return wordSpacing$delegate.getValue_sau4lq_k$(_this__u8e3s4, wordSpacing$factory_0());
  }
  var wordSpacing$delegate;
  function set_wordWrap(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return wordWrap$delegate.setValue_5hnbrq_k$(_this__u8e3s4, wordWrap$factory(), _set____db54di);
  }
  function get_wordWrap(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return wordWrap$delegate.getValue_sau4lq_k$(_this__u8e3s4, wordWrap$factory_0());
  }
  var wordWrap$delegate;
  function set_zIndex(_this__u8e3s4, _set____db54di) {
    _init_properties_StyledElement_kt__jfdzyh();
    return zIndex$delegate.setValue_5hnbrq_k$(_this__u8e3s4, zIndex$factory(), _set____db54di);
  }
  function get_zIndex(_this__u8e3s4) {
    _init_properties_StyledElement_kt__jfdzyh();
    return zIndex$delegate.getValue_sau4lq_k$(_this__u8e3s4, zIndex$factory_0());
  }
  var zIndex$delegate;
  function StyledElement() {
  }
  function _get_default__p7r30w($this) {
    return $this.default_1;
  }
  function CssProperty(default_0) {
    default_0 = default_0 === VOID ? null : default_0;
    this.default_1 = default_0;
  }
  protoOf(CssProperty).getValue_sau4lq_k$ = function (thisRef, property) {
    var tmp0_safe_receiver = this.default_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!thisRef.get_declarations_u0xo5e_k$().containsKey_mw51tt_k$(property.callableName)) {
        var tmp_0 = thisRef.get_declarations_u0xo5e_k$();
        var tmp_1 = property.callableName;
        var tmp_2 = tmp0_safe_receiver();
        tmp_0.set_uzm4k4_k$(tmp_1, isObject(tmp_2) ? tmp_2 : THROW_CCE());
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
    }
    var tmp_3 = thisRef.get_declarations_u0xo5e_k$().get_4u8u51_k$(property.callableName);
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  protoOf(CssProperty).setValue_5hnbrq_k$ = function (thisRef, property, value) {
    var tmp = thisRef.get_declarations_u0xo5e_k$();
    var tmp_0 = property.callableName;
    tmp.set_uzm4k4_k$(tmp_0, isObject(value) ? value : THROW_CCE());
  };
  function _set_stringDecl__thyopo($this, _set____db54di) {
    $this.stringDecl_1 = _set____db54di;
  }
  function _get_stringDecl__efq3kg($this) {
    var tmp0_elvis_lhs = $this.stringDecl_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$5;
      // Inline function 'kotlin.also' call
      var tmp$ret$4;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.css.CssDeclarations.<get-stringDecl>.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = $this.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlinx.css.CssDeclarations.<get-stringDecl>.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$1 = element.get_key_18j28a_k$();
        var k = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$2 = element.get_value_j01efc_k$();
        var v = tmp$ret$2;
        tmp0_apply.append_ssq29y_k$(hyphenize(k) + ': ' + toString(v) + ';\n');
      }
      tmp$ret$3 = tmp0_apply;
      tmp$ret$4 = tmp$ret$3.toString();
      var tmp1_also = tmp$ret$4;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.css.CssDeclarations.<get-stringDecl>.<anonymous>' call
      $this.stringDecl_1 = tmp1_also;
      tmp$ret$5 = tmp1_also;
      tmp = tmp$ret$5;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function CssDeclarations() {
    this.$$delegate_0__1 = LinkedHashMap_init_$Create$();
    this.stringDecl_1 = null;
  }
  protoOf(CssDeclarations).get_entries_p20ztl_k$ = function () {
    return this.$$delegate_0__1.get_entries_p20ztl_k$();
  };
  protoOf(CssDeclarations).get_keys_wop4xp_k$ = function () {
    return this.$$delegate_0__1.get_keys_wop4xp_k$();
  };
  protoOf(CssDeclarations).get_size_woubt6_k$ = function () {
    return this.$$delegate_0__1.get_size_woubt6_k$();
  };
  protoOf(CssDeclarations).get_values_ksazhn_k$ = function () {
    return this.$$delegate_0__1.get_values_ksazhn_k$();
  };
  protoOf(CssDeclarations).clear_j9y8zo_k$ = function () {
    this.$$delegate_0__1.clear_j9y8zo_k$();
  };
  protoOf(CssDeclarations).containsKey_mw51tt_k$ = function (key) {
    return this.$$delegate_0__1.containsKey_wgk31w_k$(key);
  };
  protoOf(CssDeclarations).containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CssDeclarations).containsValue_9ayjf8_k$ = function (value) {
    return this.$$delegate_0__1.containsValue_5viga1_k$(value);
  };
  protoOf(CssDeclarations).containsValue_5viga1_k$ = function (value) {
    if (!isObject(value))
      return false;
    return this.containsValue_9ayjf8_k$(isObject(value) ? value : THROW_CCE());
  };
  protoOf(CssDeclarations).get_4u8u51_k$ = function (key) {
    return this.$$delegate_0__1.get_1mhr4y_k$(key);
  };
  protoOf(CssDeclarations).get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CssDeclarations).isEmpty_y1axqb_k$ = function () {
    return this.$$delegate_0__1.isEmpty_y1axqb_k$();
  };
  protoOf(CssDeclarations).put_j8euuo_k$ = function (key, value) {
    return this.$$delegate_0__1.put_3mhbri_k$(key, value);
  };
  protoOf(CssDeclarations).put_3mhbri_k$ = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_j8euuo_k$(tmp, isObject(value) ? value : THROW_CCE());
  };
  protoOf(CssDeclarations).putAll_ynpdor_k$ = function (from) {
    this.$$delegate_0__1.putAll_mee1c3_k$(from);
  };
  protoOf(CssDeclarations).putAll_mee1c3_k$ = function (from) {
    return this.putAll_ynpdor_k$(from);
  };
  protoOf(CssDeclarations).remove_kj1003_k$ = function (key) {
    return this.$$delegate_0__1.remove_8hbkc0_k$(key);
  };
  protoOf(CssDeclarations).remove_8hbkc0_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.remove_kj1003_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CssDeclarations).equals = function (other) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.css.calculateEquals' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      if (other instanceof CssDeclarations)
        other;
      else
        THROW_CCE();
      var tmp;
      if (hashCode(this) === hashCode(other)) {
        var tmp$ret$1;
        // Inline function 'kotlinx.css.CssDeclarations.equals.<anonymous>' call
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = _get_stringDecl__efq3kg(this) == _get_stringDecl__efq3kg(tmp0__anonymous__q1qw7t);
        tmp = tmp$ret$1;
      } else {
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  };
  protoOf(CssDeclarations).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = _get_stringDecl__efq3kg(this);
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  protoOf(CssDeclarations).toString = function () {
    return ensureNotNull(_get_stringDecl__efq3kg(this));
  };
  protoOf(CssDeclarations).set_uzm4k4_k$ = function (name, value) {
    this.put_j8euuo_k$(name, value);
    this.stringDecl_1 = null;
  };
  function animation$delegate$lambda() {
    _init_properties_StyledElement_kt__jfdzyh();
    return new Animations();
  }
  function boxShadow$delegate$lambda() {
    _init_properties_StyledElement_kt__jfdzyh();
    return new BoxShadows();
  }
  function transform$delegate$lambda() {
    _init_properties_StyledElement_kt__jfdzyh();
    return new Transforms();
  }
  function transition$delegate$lambda() {
    _init_properties_StyledElement_kt__jfdzyh();
    return new Transitions();
  }
  function alignContent$factory() {
    return getPropertyCallableRef('alignContent', 1, KMutableProperty1, function (receiver) {
      return get_alignContent(receiver);
    }, function (receiver, value) {
      return set_alignContent(receiver, value);
    });
  }
  function alignContent$factory_0() {
    return getPropertyCallableRef('alignContent', 1, KMutableProperty1, function (receiver) {
      return get_alignContent(receiver);
    }, function (receiver, value) {
      return set_alignContent(receiver, value);
    });
  }
  function alignItems$factory() {
    return getPropertyCallableRef('alignItems', 1, KMutableProperty1, function (receiver) {
      return get_alignItems(receiver);
    }, function (receiver, value) {
      return set_alignItems(receiver, value);
    });
  }
  function alignItems$factory_0() {
    return getPropertyCallableRef('alignItems', 1, KMutableProperty1, function (receiver) {
      return get_alignItems(receiver);
    }, function (receiver, value) {
      return set_alignItems(receiver, value);
    });
  }
  function alignSelf$factory() {
    return getPropertyCallableRef('alignSelf', 1, KMutableProperty1, function (receiver) {
      return get_alignSelf(receiver);
    }, function (receiver, value) {
      return set_alignSelf(receiver, value);
    });
  }
  function alignSelf$factory_0() {
    return getPropertyCallableRef('alignSelf', 1, KMutableProperty1, function (receiver) {
      return get_alignSelf(receiver);
    }, function (receiver, value) {
      return set_alignSelf(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return get_animation(receiver);
    }, function (receiver, value) {
      return set_animation(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return get_animation(receiver);
    }, function (receiver, value) {
      return set_animation(receiver, value);
    });
  }
  function animationDelay$factory() {
    return getPropertyCallableRef('animationDelay', 1, KMutableProperty1, function (receiver) {
      return get_animationDelay(receiver);
    }, function (receiver, value) {
      return set_animationDelay(receiver, value);
    });
  }
  function animationDelay$factory_0() {
    return getPropertyCallableRef('animationDelay', 1, KMutableProperty1, function (receiver) {
      return get_animationDelay(receiver);
    }, function (receiver, value) {
      return set_animationDelay(receiver, value);
    });
  }
  function animationDirection$factory() {
    return getPropertyCallableRef('animationDirection', 1, KMutableProperty1, function (receiver) {
      return get_animationDirection(receiver);
    }, function (receiver, value) {
      return set_animationDirection(receiver, value);
    });
  }
  function animationDirection$factory_0() {
    return getPropertyCallableRef('animationDirection', 1, KMutableProperty1, function (receiver) {
      return get_animationDirection(receiver);
    }, function (receiver, value) {
      return set_animationDirection(receiver, value);
    });
  }
  function animationDuration$factory() {
    return getPropertyCallableRef('animationDuration', 1, KMutableProperty1, function (receiver) {
      return get_animationDuration(receiver);
    }, function (receiver, value) {
      return set_animationDuration(receiver, value);
    });
  }
  function animationDuration$factory_0() {
    return getPropertyCallableRef('animationDuration', 1, KMutableProperty1, function (receiver) {
      return get_animationDuration(receiver);
    }, function (receiver, value) {
      return set_animationDuration(receiver, value);
    });
  }
  function animationFillMode$factory() {
    return getPropertyCallableRef('animationFillMode', 1, KMutableProperty1, function (receiver) {
      return get_animationFillMode(receiver);
    }, function (receiver, value) {
      return set_animationFillMode(receiver, value);
    });
  }
  function animationFillMode$factory_0() {
    return getPropertyCallableRef('animationFillMode', 1, KMutableProperty1, function (receiver) {
      return get_animationFillMode(receiver);
    }, function (receiver, value) {
      return set_animationFillMode(receiver, value);
    });
  }
  function animationIterationCount$factory() {
    return getPropertyCallableRef('animationIterationCount', 1, KMutableProperty1, function (receiver) {
      return get_animationIterationCount(receiver);
    }, function (receiver, value) {
      return set_animationIterationCount(receiver, value);
    });
  }
  function animationIterationCount$factory_0() {
    return getPropertyCallableRef('animationIterationCount', 1, KMutableProperty1, function (receiver) {
      return get_animationIterationCount(receiver);
    }, function (receiver, value) {
      return set_animationIterationCount(receiver, value);
    });
  }
  function animationName$factory() {
    return getPropertyCallableRef('animationName', 1, KMutableProperty1, function (receiver) {
      return get_animationName(receiver);
    }, function (receiver, value) {
      return set_animationName(receiver, value);
    });
  }
  function animationName$factory_0() {
    return getPropertyCallableRef('animationName', 1, KMutableProperty1, function (receiver) {
      return get_animationName(receiver);
    }, function (receiver, value) {
      return set_animationName(receiver, value);
    });
  }
  function animationPlayState$factory() {
    return getPropertyCallableRef('animationPlayState', 1, KMutableProperty1, function (receiver) {
      return get_animationPlayState(receiver);
    }, function (receiver, value) {
      return set_animationPlayState(receiver, value);
    });
  }
  function animationPlayState$factory_0() {
    return getPropertyCallableRef('animationPlayState', 1, KMutableProperty1, function (receiver) {
      return get_animationPlayState(receiver);
    }, function (receiver, value) {
      return set_animationPlayState(receiver, value);
    });
  }
  function animationTimingFunction$factory() {
    return getPropertyCallableRef('animationTimingFunction', 1, KMutableProperty1, function (receiver) {
      return get_animationTimingFunction(receiver);
    }, function (receiver, value) {
      return set_animationTimingFunction(receiver, value);
    });
  }
  function animationTimingFunction$factory_0() {
    return getPropertyCallableRef('animationTimingFunction', 1, KMutableProperty1, function (receiver) {
      return get_animationTimingFunction(receiver);
    }, function (receiver, value) {
      return set_animationTimingFunction(receiver, value);
    });
  }
  function appearance$factory() {
    return getPropertyCallableRef('appearance', 1, KMutableProperty1, function (receiver) {
      return get_appearance(receiver);
    }, function (receiver, value) {
      return set_appearance(receiver, value);
    });
  }
  function appearance$factory_0() {
    return getPropertyCallableRef('appearance', 1, KMutableProperty1, function (receiver) {
      return get_appearance(receiver);
    }, function (receiver, value) {
      return set_appearance(receiver, value);
    });
  }
  function aspectRatio$factory() {
    return getPropertyCallableRef('aspectRatio', 1, KMutableProperty1, function (receiver) {
      return get_aspectRatio(receiver);
    }, function (receiver, value) {
      return set_aspectRatio(receiver, value);
    });
  }
  function aspectRatio$factory_0() {
    return getPropertyCallableRef('aspectRatio', 1, KMutableProperty1, function (receiver) {
      return get_aspectRatio(receiver);
    }, function (receiver, value) {
      return set_aspectRatio(receiver, value);
    });
  }
  function backfaceVisibility$factory() {
    return getPropertyCallableRef('backfaceVisibility', 1, KMutableProperty1, function (receiver) {
      return get_backfaceVisibility(receiver);
    }, function (receiver, value) {
      return set_backfaceVisibility(receiver, value);
    });
  }
  function backfaceVisibility$factory_0() {
    return getPropertyCallableRef('backfaceVisibility', 1, KMutableProperty1, function (receiver) {
      return get_backfaceVisibility(receiver);
    }, function (receiver, value) {
      return set_backfaceVisibility(receiver, value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return get_background(receiver);
    }, function (receiver, value) {
      return set_background(receiver, value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return get_background(receiver);
    }, function (receiver, value) {
      return set_background(receiver, value);
    });
  }
  function backgroundAttachment$factory() {
    return getPropertyCallableRef('backgroundAttachment', 1, KMutableProperty1, function (receiver) {
      return get_backgroundAttachment(receiver);
    }, function (receiver, value) {
      return set_backgroundAttachment(receiver, value);
    });
  }
  function backgroundAttachment$factory_0() {
    return getPropertyCallableRef('backgroundAttachment', 1, KMutableProperty1, function (receiver) {
      return get_backgroundAttachment(receiver);
    }, function (receiver, value) {
      return set_backgroundAttachment(receiver, value);
    });
  }
  function backgroundClip$factory() {
    return getPropertyCallableRef('backgroundClip', 1, KMutableProperty1, function (receiver) {
      return get_backgroundClip(receiver);
    }, function (receiver, value) {
      return set_backgroundClip(receiver, value);
    });
  }
  function backgroundClip$factory_0() {
    return getPropertyCallableRef('backgroundClip', 1, KMutableProperty1, function (receiver) {
      return get_backgroundClip(receiver);
    }, function (receiver, value) {
      return set_backgroundClip(receiver, value);
    });
  }
  function backgroundColor$factory() {
    return getPropertyCallableRef('backgroundColor', 1, KMutableProperty1, function (receiver) {
      return get_backgroundColor(receiver);
    }, function (receiver, value) {
      return set_backgroundColor(receiver, value);
    });
  }
  function backgroundColor$factory_0() {
    return getPropertyCallableRef('backgroundColor', 1, KMutableProperty1, function (receiver) {
      return get_backgroundColor(receiver);
    }, function (receiver, value) {
      return set_backgroundColor(receiver, value);
    });
  }
  function backgroundImage$factory() {
    return getPropertyCallableRef('backgroundImage', 1, KMutableProperty1, function (receiver) {
      return get_backgroundImage(receiver);
    }, function (receiver, value) {
      return set_backgroundImage(receiver, value);
    });
  }
  function backgroundImage$factory_0() {
    return getPropertyCallableRef('backgroundImage', 1, KMutableProperty1, function (receiver) {
      return get_backgroundImage(receiver);
    }, function (receiver, value) {
      return set_backgroundImage(receiver, value);
    });
  }
  function backgroundOrigin$factory() {
    return getPropertyCallableRef('backgroundOrigin', 1, KMutableProperty1, function (receiver) {
      return get_backgroundOrigin(receiver);
    }, function (receiver, value) {
      return set_backgroundOrigin(receiver, value);
    });
  }
  function backgroundOrigin$factory_0() {
    return getPropertyCallableRef('backgroundOrigin', 1, KMutableProperty1, function (receiver) {
      return get_backgroundOrigin(receiver);
    }, function (receiver, value) {
      return set_backgroundOrigin(receiver, value);
    });
  }
  function backgroundPosition$factory() {
    return getPropertyCallableRef('backgroundPosition', 1, KMutableProperty1, function (receiver) {
      return get_backgroundPosition(receiver);
    }, function (receiver, value) {
      return set_backgroundPosition(receiver, value);
    });
  }
  function backgroundPosition$factory_0() {
    return getPropertyCallableRef('backgroundPosition', 1, KMutableProperty1, function (receiver) {
      return get_backgroundPosition(receiver);
    }, function (receiver, value) {
      return set_backgroundPosition(receiver, value);
    });
  }
  function backgroundRepeat$factory() {
    return getPropertyCallableRef('backgroundRepeat', 1, KMutableProperty1, function (receiver) {
      return get_backgroundRepeat(receiver);
    }, function (receiver, value) {
      return set_backgroundRepeat(receiver, value);
    });
  }
  function backgroundRepeat$factory_0() {
    return getPropertyCallableRef('backgroundRepeat', 1, KMutableProperty1, function (receiver) {
      return get_backgroundRepeat(receiver);
    }, function (receiver, value) {
      return set_backgroundRepeat(receiver, value);
    });
  }
  function backgroundSize$factory() {
    return getPropertyCallableRef('backgroundSize', 1, KMutableProperty1, function (receiver) {
      return get_backgroundSize(receiver);
    }, function (receiver, value) {
      return set_backgroundSize(receiver, value);
    });
  }
  function backgroundSize$factory_0() {
    return getPropertyCallableRef('backgroundSize', 1, KMutableProperty1, function (receiver) {
      return get_backgroundSize(receiver);
    }, function (receiver, value) {
      return set_backgroundSize(receiver, value);
    });
  }
  function border$factory() {
    return getPropertyCallableRef('border', 1, KMutableProperty1, function (receiver) {
      return get_border(receiver);
    }, function (receiver, value) {
      return set_border(receiver, value);
    });
  }
  function border$factory_0() {
    return getPropertyCallableRef('border', 1, KMutableProperty1, function (receiver) {
      return get_border(receiver);
    }, function (receiver, value) {
      return set_border(receiver, value);
    });
  }
  function borderTop$factory() {
    return getPropertyCallableRef('borderTop', 1, KMutableProperty1, function (receiver) {
      return get_borderTop(receiver);
    }, function (receiver, value) {
      return set_borderTop(receiver, value);
    });
  }
  function borderTop$factory_0() {
    return getPropertyCallableRef('borderTop', 1, KMutableProperty1, function (receiver) {
      return get_borderTop(receiver);
    }, function (receiver, value) {
      return set_borderTop(receiver, value);
    });
  }
  function borderRight$factory() {
    return getPropertyCallableRef('borderRight', 1, KMutableProperty1, function (receiver) {
      return get_borderRight(receiver);
    }, function (receiver, value) {
      return set_borderRight(receiver, value);
    });
  }
  function borderRight$factory_0() {
    return getPropertyCallableRef('borderRight', 1, KMutableProperty1, function (receiver) {
      return get_borderRight(receiver);
    }, function (receiver, value) {
      return set_borderRight(receiver, value);
    });
  }
  function borderBottom$factory() {
    return getPropertyCallableRef('borderBottom', 1, KMutableProperty1, function (receiver) {
      return get_borderBottom(receiver);
    }, function (receiver, value) {
      return set_borderBottom(receiver, value);
    });
  }
  function borderBottom$factory_0() {
    return getPropertyCallableRef('borderBottom', 1, KMutableProperty1, function (receiver) {
      return get_borderBottom(receiver);
    }, function (receiver, value) {
      return set_borderBottom(receiver, value);
    });
  }
  function borderLeft$factory() {
    return getPropertyCallableRef('borderLeft', 1, KMutableProperty1, function (receiver) {
      return get_borderLeft(receiver);
    }, function (receiver, value) {
      return set_borderLeft(receiver, value);
    });
  }
  function borderLeft$factory_0() {
    return getPropertyCallableRef('borderLeft', 1, KMutableProperty1, function (receiver) {
      return get_borderLeft(receiver);
    }, function (receiver, value) {
      return set_borderLeft(receiver, value);
    });
  }
  function borderCollapse$factory() {
    return getPropertyCallableRef('borderCollapse', 1, KMutableProperty1, function (receiver) {
      return get_borderCollapse(receiver);
    }, function (receiver, value) {
      return set_borderCollapse(receiver, value);
    });
  }
  function borderCollapse$factory_0() {
    return getPropertyCallableRef('borderCollapse', 1, KMutableProperty1, function (receiver) {
      return get_borderCollapse(receiver);
    }, function (receiver, value) {
      return set_borderCollapse(receiver, value);
    });
  }
  function borderSpacing$factory() {
    return getPropertyCallableRef('borderSpacing', 1, KMutableProperty1, function (receiver) {
      return get_borderSpacing(receiver);
    }, function (receiver, value) {
      return set_borderSpacing(receiver, value);
    });
  }
  function borderSpacing$factory_0() {
    return getPropertyCallableRef('borderSpacing', 1, KMutableProperty1, function (receiver) {
      return get_borderSpacing(receiver);
    }, function (receiver, value) {
      return set_borderSpacing(receiver, value);
    });
  }
  function borderRadius$factory() {
    return getPropertyCallableRef('borderRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderRadius(receiver);
    }, function (receiver, value) {
      return set_borderRadius(receiver, value);
    });
  }
  function borderRadius$factory_0() {
    return getPropertyCallableRef('borderRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderRadius(receiver);
    }, function (receiver, value) {
      return set_borderRadius(receiver, value);
    });
  }
  function borderTopLeftRadius$factory() {
    return getPropertyCallableRef('borderTopLeftRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderTopLeftRadius(receiver);
    }, function (receiver, value) {
      return set_borderTopLeftRadius(receiver, value);
    });
  }
  function borderTopLeftRadius$factory_0() {
    return getPropertyCallableRef('borderTopLeftRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderTopLeftRadius(receiver);
    }, function (receiver, value) {
      return set_borderTopLeftRadius(receiver, value);
    });
  }
  function borderTopRightRadius$factory() {
    return getPropertyCallableRef('borderTopRightRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderTopRightRadius(receiver);
    }, function (receiver, value) {
      return set_borderTopRightRadius(receiver, value);
    });
  }
  function borderTopRightRadius$factory_0() {
    return getPropertyCallableRef('borderTopRightRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderTopRightRadius(receiver);
    }, function (receiver, value) {
      return set_borderTopRightRadius(receiver, value);
    });
  }
  function borderBottomLeftRadius$factory() {
    return getPropertyCallableRef('borderBottomLeftRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomLeftRadius(receiver);
    }, function (receiver, value) {
      return set_borderBottomLeftRadius(receiver, value);
    });
  }
  function borderBottomLeftRadius$factory_0() {
    return getPropertyCallableRef('borderBottomLeftRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomLeftRadius(receiver);
    }, function (receiver, value) {
      return set_borderBottomLeftRadius(receiver, value);
    });
  }
  function borderBottomRightRadius$factory() {
    return getPropertyCallableRef('borderBottomRightRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomRightRadius(receiver);
    }, function (receiver, value) {
      return set_borderBottomRightRadius(receiver, value);
    });
  }
  function borderBottomRightRadius$factory_0() {
    return getPropertyCallableRef('borderBottomRightRadius', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomRightRadius(receiver);
    }, function (receiver, value) {
      return set_borderBottomRightRadius(receiver, value);
    });
  }
  function borderStyle$factory() {
    return getPropertyCallableRef('borderStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderStyle(receiver);
    }, function (receiver, value) {
      return set_borderStyle(receiver, value);
    });
  }
  function borderStyle$factory_0() {
    return getPropertyCallableRef('borderStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderStyle(receiver);
    }, function (receiver, value) {
      return set_borderStyle(receiver, value);
    });
  }
  function borderTopStyle$factory() {
    return getPropertyCallableRef('borderTopStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderTopStyle(receiver);
    }, function (receiver, value) {
      return set_borderTopStyle(receiver, value);
    });
  }
  function borderTopStyle$factory_0() {
    return getPropertyCallableRef('borderTopStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderTopStyle(receiver);
    }, function (receiver, value) {
      return set_borderTopStyle(receiver, value);
    });
  }
  function borderRightStyle$factory() {
    return getPropertyCallableRef('borderRightStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderRightStyle(receiver);
    }, function (receiver, value) {
      return set_borderRightStyle(receiver, value);
    });
  }
  function borderRightStyle$factory_0() {
    return getPropertyCallableRef('borderRightStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderRightStyle(receiver);
    }, function (receiver, value) {
      return set_borderRightStyle(receiver, value);
    });
  }
  function borderBottomStyle$factory() {
    return getPropertyCallableRef('borderBottomStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomStyle(receiver);
    }, function (receiver, value) {
      return set_borderBottomStyle(receiver, value);
    });
  }
  function borderBottomStyle$factory_0() {
    return getPropertyCallableRef('borderBottomStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomStyle(receiver);
    }, function (receiver, value) {
      return set_borderBottomStyle(receiver, value);
    });
  }
  function borderLeftStyle$factory() {
    return getPropertyCallableRef('borderLeftStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderLeftStyle(receiver);
    }, function (receiver, value) {
      return set_borderLeftStyle(receiver, value);
    });
  }
  function borderLeftStyle$factory_0() {
    return getPropertyCallableRef('borderLeftStyle', 1, KMutableProperty1, function (receiver) {
      return get_borderLeftStyle(receiver);
    }, function (receiver, value) {
      return set_borderLeftStyle(receiver, value);
    });
  }
  function borderWidth$factory() {
    return getPropertyCallableRef('borderWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderWidth(receiver);
    }, function (receiver, value) {
      return set_borderWidth(receiver, value);
    });
  }
  function borderWidth$factory_0() {
    return getPropertyCallableRef('borderWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderWidth(receiver);
    }, function (receiver, value) {
      return set_borderWidth(receiver, value);
    });
  }
  function borderTopWidth$factory() {
    return getPropertyCallableRef('borderTopWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderTopWidth(receiver);
    }, function (receiver, value) {
      return set_borderTopWidth(receiver, value);
    });
  }
  function borderTopWidth$factory_0() {
    return getPropertyCallableRef('borderTopWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderTopWidth(receiver);
    }, function (receiver, value) {
      return set_borderTopWidth(receiver, value);
    });
  }
  function borderRightWidth$factory() {
    return getPropertyCallableRef('borderRightWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderRightWidth(receiver);
    }, function (receiver, value) {
      return set_borderRightWidth(receiver, value);
    });
  }
  function borderRightWidth$factory_0() {
    return getPropertyCallableRef('borderRightWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderRightWidth(receiver);
    }, function (receiver, value) {
      return set_borderRightWidth(receiver, value);
    });
  }
  function borderBottomWidth$factory() {
    return getPropertyCallableRef('borderBottomWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomWidth(receiver);
    }, function (receiver, value) {
      return set_borderBottomWidth(receiver, value);
    });
  }
  function borderBottomWidth$factory_0() {
    return getPropertyCallableRef('borderBottomWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomWidth(receiver);
    }, function (receiver, value) {
      return set_borderBottomWidth(receiver, value);
    });
  }
  function borderLeftWidth$factory() {
    return getPropertyCallableRef('borderLeftWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderLeftWidth(receiver);
    }, function (receiver, value) {
      return set_borderLeftWidth(receiver, value);
    });
  }
  function borderLeftWidth$factory_0() {
    return getPropertyCallableRef('borderLeftWidth', 1, KMutableProperty1, function (receiver) {
      return get_borderLeftWidth(receiver);
    }, function (receiver, value) {
      return set_borderLeftWidth(receiver, value);
    });
  }
  function borderColor$factory() {
    return getPropertyCallableRef('borderColor', 1, KMutableProperty1, function (receiver) {
      return get_borderColor(receiver);
    }, function (receiver, value) {
      return set_borderColor(receiver, value);
    });
  }
  function borderColor$factory_0() {
    return getPropertyCallableRef('borderColor', 1, KMutableProperty1, function (receiver) {
      return get_borderColor(receiver);
    }, function (receiver, value) {
      return set_borderColor(receiver, value);
    });
  }
  function borderTopColor$factory() {
    return getPropertyCallableRef('borderTopColor', 1, KMutableProperty1, function (receiver) {
      return get_borderTopColor(receiver);
    }, function (receiver, value) {
      return set_borderTopColor(receiver, value);
    });
  }
  function borderTopColor$factory_0() {
    return getPropertyCallableRef('borderTopColor', 1, KMutableProperty1, function (receiver) {
      return get_borderTopColor(receiver);
    }, function (receiver, value) {
      return set_borderTopColor(receiver, value);
    });
  }
  function borderRightColor$factory() {
    return getPropertyCallableRef('borderRightColor', 1, KMutableProperty1, function (receiver) {
      return get_borderRightColor(receiver);
    }, function (receiver, value) {
      return set_borderRightColor(receiver, value);
    });
  }
  function borderRightColor$factory_0() {
    return getPropertyCallableRef('borderRightColor', 1, KMutableProperty1, function (receiver) {
      return get_borderRightColor(receiver);
    }, function (receiver, value) {
      return set_borderRightColor(receiver, value);
    });
  }
  function borderBottomColor$factory() {
    return getPropertyCallableRef('borderBottomColor', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomColor(receiver);
    }, function (receiver, value) {
      return set_borderBottomColor(receiver, value);
    });
  }
  function borderBottomColor$factory_0() {
    return getPropertyCallableRef('borderBottomColor', 1, KMutableProperty1, function (receiver) {
      return get_borderBottomColor(receiver);
    }, function (receiver, value) {
      return set_borderBottomColor(receiver, value);
    });
  }
  function borderLeftColor$factory() {
    return getPropertyCallableRef('borderLeftColor', 1, KMutableProperty1, function (receiver) {
      return get_borderLeftColor(receiver);
    }, function (receiver, value) {
      return set_borderLeftColor(receiver, value);
    });
  }
  function borderLeftColor$factory_0() {
    return getPropertyCallableRef('borderLeftColor', 1, KMutableProperty1, function (receiver) {
      return get_borderLeftColor(receiver);
    }, function (receiver, value) {
      return set_borderLeftColor(receiver, value);
    });
  }
  function bottom$factory() {
    return getPropertyCallableRef('bottom', 1, KMutableProperty1, function (receiver) {
      return get_bottom(receiver);
    }, function (receiver, value) {
      return set_bottom(receiver, value);
    });
  }
  function bottom$factory_0() {
    return getPropertyCallableRef('bottom', 1, KMutableProperty1, function (receiver) {
      return get_bottom(receiver);
    }, function (receiver, value) {
      return set_bottom(receiver, value);
    });
  }
  function boxShadow$factory() {
    return getPropertyCallableRef('boxShadow', 1, KMutableProperty1, function (receiver) {
      return get_boxShadow(receiver);
    }, function (receiver, value) {
      return set_boxShadow(receiver, value);
    });
  }
  function boxShadow$factory_0() {
    return getPropertyCallableRef('boxShadow', 1, KMutableProperty1, function (receiver) {
      return get_boxShadow(receiver);
    }, function (receiver, value) {
      return set_boxShadow(receiver, value);
    });
  }
  function boxSizing$factory() {
    return getPropertyCallableRef('boxSizing', 1, KMutableProperty1, function (receiver) {
      return get_boxSizing(receiver);
    }, function (receiver, value) {
      return set_boxSizing(receiver, value);
    });
  }
  function boxSizing$factory_0() {
    return getPropertyCallableRef('boxSizing', 1, KMutableProperty1, function (receiver) {
      return get_boxSizing(receiver);
    }, function (receiver, value) {
      return set_boxSizing(receiver, value);
    });
  }
  function clear$factory() {
    return getPropertyCallableRef('clear', 1, KMutableProperty1, function (receiver) {
      return get_clear(receiver);
    }, function (receiver, value) {
      return set_clear(receiver, value);
    });
  }
  function clear$factory_0() {
    return getPropertyCallableRef('clear', 1, KMutableProperty1, function (receiver) {
      return get_clear(receiver);
    }, function (receiver, value) {
      return set_clear(receiver, value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return get_color(receiver);
    }, function (receiver, value) {
      return set_color(receiver, value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return get_color(receiver);
    }, function (receiver, value) {
      return set_color(receiver, value);
    });
  }
  function columnGap$factory() {
    return getPropertyCallableRef('columnGap', 1, KMutableProperty1, function (receiver) {
      return get_columnGap(receiver);
    }, function (receiver, value) {
      return set_columnGap(receiver, value);
    });
  }
  function columnGap$factory_0() {
    return getPropertyCallableRef('columnGap', 1, KMutableProperty1, function (receiver) {
      return get_columnGap(receiver);
    }, function (receiver, value) {
      return set_columnGap(receiver, value);
    });
  }
  function contain$factory() {
    return getPropertyCallableRef('contain', 1, KMutableProperty1, function (receiver) {
      return get_contain(receiver);
    }, function (receiver, value) {
      return set_contain(receiver, value);
    });
  }
  function contain$factory_0() {
    return getPropertyCallableRef('contain', 1, KMutableProperty1, function (receiver) {
      return get_contain(receiver);
    }, function (receiver, value) {
      return set_contain(receiver, value);
    });
  }
  function content$factory() {
    return getPropertyCallableRef('content', 1, KMutableProperty1, function (receiver) {
      return get_content(receiver);
    }, function (receiver, value) {
      return set_content(receiver, value);
    });
  }
  function content$factory_0() {
    return getPropertyCallableRef('content', 1, KMutableProperty1, function (receiver) {
      return get_content(receiver);
    }, function (receiver, value) {
      return set_content(receiver, value);
    });
  }
  function cursor$factory() {
    return getPropertyCallableRef('cursor', 1, KMutableProperty1, function (receiver) {
      return get_cursor(receiver);
    }, function (receiver, value) {
      return set_cursor(receiver, value);
    });
  }
  function cursor$factory_0() {
    return getPropertyCallableRef('cursor', 1, KMutableProperty1, function (receiver) {
      return get_cursor(receiver);
    }, function (receiver, value) {
      return set_cursor(receiver, value);
    });
  }
  function direction$factory() {
    return getPropertyCallableRef('direction', 1, KMutableProperty1, function (receiver) {
      return get_direction(receiver);
    }, function (receiver, value) {
      return set_direction(receiver, value);
    });
  }
  function direction$factory_0() {
    return getPropertyCallableRef('direction', 1, KMutableProperty1, function (receiver) {
      return get_direction(receiver);
    }, function (receiver, value) {
      return set_direction(receiver, value);
    });
  }
  function display$factory() {
    return getPropertyCallableRef('display', 1, KMutableProperty1, function (receiver) {
      return get_display(receiver);
    }, function (receiver, value) {
      return set_display(receiver, value);
    });
  }
  function display$factory_0() {
    return getPropertyCallableRef('display', 1, KMutableProperty1, function (receiver) {
      return get_display(receiver);
    }, function (receiver, value) {
      return set_display(receiver, value);
    });
  }
  function filter$factory() {
    return getPropertyCallableRef('filter', 1, KMutableProperty1, function (receiver) {
      return get_filter(receiver);
    }, function (receiver, value) {
      return set_filter(receiver, value);
    });
  }
  function filter$factory_0() {
    return getPropertyCallableRef('filter', 1, KMutableProperty1, function (receiver) {
      return get_filter(receiver);
    }, function (receiver, value) {
      return set_filter(receiver, value);
    });
  }
  function flexBasis$factory() {
    return getPropertyCallableRef('flexBasis', 1, KMutableProperty1, function (receiver) {
      return get_flexBasis(receiver);
    }, function (receiver, value) {
      return set_flexBasis(receiver, value);
    });
  }
  function flexBasis$factory_0() {
    return getPropertyCallableRef('flexBasis', 1, KMutableProperty1, function (receiver) {
      return get_flexBasis(receiver);
    }, function (receiver, value) {
      return set_flexBasis(receiver, value);
    });
  }
  function flexDirection$factory() {
    return getPropertyCallableRef('flexDirection', 1, KMutableProperty1, function (receiver) {
      return get_flexDirection(receiver);
    }, function (receiver, value) {
      return set_flexDirection(receiver, value);
    });
  }
  function flexDirection$factory_0() {
    return getPropertyCallableRef('flexDirection', 1, KMutableProperty1, function (receiver) {
      return get_flexDirection(receiver);
    }, function (receiver, value) {
      return set_flexDirection(receiver, value);
    });
  }
  function flexGrow$factory() {
    return getPropertyCallableRef('flexGrow', 1, KMutableProperty1, function (receiver) {
      return get_flexGrow(receiver);
    }, function (receiver, value) {
      return set_flexGrow(receiver, value);
    });
  }
  function flexGrow$factory_0() {
    return getPropertyCallableRef('flexGrow', 1, KMutableProperty1, function (receiver) {
      return get_flexGrow(receiver);
    }, function (receiver, value) {
      return set_flexGrow(receiver, value);
    });
  }
  function flexShrink$factory() {
    return getPropertyCallableRef('flexShrink', 1, KMutableProperty1, function (receiver) {
      return get_flexShrink(receiver);
    }, function (receiver, value) {
      return set_flexShrink(receiver, value);
    });
  }
  function flexShrink$factory_0() {
    return getPropertyCallableRef('flexShrink', 1, KMutableProperty1, function (receiver) {
      return get_flexShrink(receiver);
    }, function (receiver, value) {
      return set_flexShrink(receiver, value);
    });
  }
  function flexWrap$factory() {
    return getPropertyCallableRef('flexWrap', 1, KMutableProperty1, function (receiver) {
      return get_flexWrap(receiver);
    }, function (receiver, value) {
      return set_flexWrap(receiver, value);
    });
  }
  function flexWrap$factory_0() {
    return getPropertyCallableRef('flexWrap', 1, KMutableProperty1, function (receiver) {
      return get_flexWrap(receiver);
    }, function (receiver, value) {
      return set_flexWrap(receiver, value);
    });
  }
  function float$factory() {
    return getPropertyCallableRef('float', 1, KMutableProperty1, function (receiver) {
      return get_float(receiver);
    }, function (receiver, value) {
      return set_float(receiver, value);
    });
  }
  function float$factory_0() {
    return getPropertyCallableRef('float', 1, KMutableProperty1, function (receiver) {
      return get_float(receiver);
    }, function (receiver, value) {
      return set_float(receiver, value);
    });
  }
  function fontFamily$factory() {
    return getPropertyCallableRef('fontFamily', 1, KMutableProperty1, function (receiver) {
      return get_fontFamily(receiver);
    }, function (receiver, value) {
      return set_fontFamily(receiver, value);
    });
  }
  function fontFamily$factory_0() {
    return getPropertyCallableRef('fontFamily', 1, KMutableProperty1, function (receiver) {
      return get_fontFamily(receiver);
    }, function (receiver, value) {
      return set_fontFamily(receiver, value);
    });
  }
  function fontSize$factory() {
    return getPropertyCallableRef('fontSize', 1, KMutableProperty1, function (receiver) {
      return get_fontSize(receiver);
    }, function (receiver, value) {
      return set_fontSize(receiver, value);
    });
  }
  function fontSize$factory_0() {
    return getPropertyCallableRef('fontSize', 1, KMutableProperty1, function (receiver) {
      return get_fontSize(receiver);
    }, function (receiver, value) {
      return set_fontSize(receiver, value);
    });
  }
  function fontSizeAdjust$factory() {
    return getPropertyCallableRef('fontSizeAdjust', 1, KMutableProperty1, function (receiver) {
      return get_fontSizeAdjust(receiver);
    }, function (receiver, value) {
      return set_fontSizeAdjust(receiver, value);
    });
  }
  function fontSizeAdjust$factory_0() {
    return getPropertyCallableRef('fontSizeAdjust', 1, KMutableProperty1, function (receiver) {
      return get_fontSizeAdjust(receiver);
    }, function (receiver, value) {
      return set_fontSizeAdjust(receiver, value);
    });
  }
  function fontStyle$factory() {
    return getPropertyCallableRef('fontStyle', 1, KMutableProperty1, function (receiver) {
      return get_fontStyle(receiver);
    }, function (receiver, value) {
      return set_fontStyle(receiver, value);
    });
  }
  function fontStyle$factory_0() {
    return getPropertyCallableRef('fontStyle', 1, KMutableProperty1, function (receiver) {
      return get_fontStyle(receiver);
    }, function (receiver, value) {
      return set_fontStyle(receiver, value);
    });
  }
  function fontWeight$factory() {
    return getPropertyCallableRef('fontWeight', 1, KMutableProperty1, function (receiver) {
      return get_fontWeight(receiver);
    }, function (receiver, value) {
      return set_fontWeight(receiver, value);
    });
  }
  function fontWeight$factory_0() {
    return getPropertyCallableRef('fontWeight', 1, KMutableProperty1, function (receiver) {
      return get_fontWeight(receiver);
    }, function (receiver, value) {
      return set_fontWeight(receiver, value);
    });
  }
  function gap$factory() {
    return getPropertyCallableRef('gap', 1, KMutableProperty1, function (receiver) {
      return get_gap(receiver);
    }, function (receiver, value) {
      return set_gap(receiver, value);
    });
  }
  function gap$factory_0() {
    return getPropertyCallableRef('gap', 1, KMutableProperty1, function (receiver) {
      return get_gap(receiver);
    }, function (receiver, value) {
      return set_gap(receiver, value);
    });
  }
  function gridAutoColumns$factory() {
    return getPropertyCallableRef('gridAutoColumns', 1, KMutableProperty1, function (receiver) {
      return get_gridAutoColumns(receiver);
    }, function (receiver, value) {
      return set_gridAutoColumns(receiver, value);
    });
  }
  function gridAutoColumns$factory_0() {
    return getPropertyCallableRef('gridAutoColumns', 1, KMutableProperty1, function (receiver) {
      return get_gridAutoColumns(receiver);
    }, function (receiver, value) {
      return set_gridAutoColumns(receiver, value);
    });
  }
  function gridAutoFlow$factory() {
    return getPropertyCallableRef('gridAutoFlow', 1, KMutableProperty1, function (receiver) {
      return get_gridAutoFlow(receiver);
    }, function (receiver, value) {
      return set_gridAutoFlow(receiver, value);
    });
  }
  function gridAutoFlow$factory_0() {
    return getPropertyCallableRef('gridAutoFlow', 1, KMutableProperty1, function (receiver) {
      return get_gridAutoFlow(receiver);
    }, function (receiver, value) {
      return set_gridAutoFlow(receiver, value);
    });
  }
  function gridAutoRows$factory() {
    return getPropertyCallableRef('gridAutoRows', 1, KMutableProperty1, function (receiver) {
      return get_gridAutoRows(receiver);
    }, function (receiver, value) {
      return set_gridAutoRows(receiver, value);
    });
  }
  function gridAutoRows$factory_0() {
    return getPropertyCallableRef('gridAutoRows', 1, KMutableProperty1, function (receiver) {
      return get_gridAutoRows(receiver);
    }, function (receiver, value) {
      return set_gridAutoRows(receiver, value);
    });
  }
  function gridColumn$factory() {
    return getPropertyCallableRef('gridColumn', 1, KMutableProperty1, function (receiver) {
      return get_gridColumn(receiver);
    }, function (receiver, value) {
      return set_gridColumn(receiver, value);
    });
  }
  function gridColumn$factory_0() {
    return getPropertyCallableRef('gridColumn', 1, KMutableProperty1, function (receiver) {
      return get_gridColumn(receiver);
    }, function (receiver, value) {
      return set_gridColumn(receiver, value);
    });
  }
  function gridColumnEnd$factory() {
    return getPropertyCallableRef('gridColumnEnd', 1, KMutableProperty1, function (receiver) {
      return get_gridColumnEnd(receiver);
    }, function (receiver, value) {
      return set_gridColumnEnd(receiver, value);
    });
  }
  function gridColumnEnd$factory_0() {
    return getPropertyCallableRef('gridColumnEnd', 1, KMutableProperty1, function (receiver) {
      return get_gridColumnEnd(receiver);
    }, function (receiver, value) {
      return set_gridColumnEnd(receiver, value);
    });
  }
  function gridColumnStart$factory() {
    return getPropertyCallableRef('gridColumnStart', 1, KMutableProperty1, function (receiver) {
      return get_gridColumnStart(receiver);
    }, function (receiver, value) {
      return set_gridColumnStart(receiver, value);
    });
  }
  function gridColumnStart$factory_0() {
    return getPropertyCallableRef('gridColumnStart', 1, KMutableProperty1, function (receiver) {
      return get_gridColumnStart(receiver);
    }, function (receiver, value) {
      return set_gridColumnStart(receiver, value);
    });
  }
  function gridRow$factory() {
    return getPropertyCallableRef('gridRow', 1, KMutableProperty1, function (receiver) {
      return get_gridRow(receiver);
    }, function (receiver, value) {
      return set_gridRow(receiver, value);
    });
  }
  function gridRow$factory_0() {
    return getPropertyCallableRef('gridRow', 1, KMutableProperty1, function (receiver) {
      return get_gridRow(receiver);
    }, function (receiver, value) {
      return set_gridRow(receiver, value);
    });
  }
  function gridRowEnd$factory() {
    return getPropertyCallableRef('gridRowEnd', 1, KMutableProperty1, function (receiver) {
      return get_gridRowEnd(receiver);
    }, function (receiver, value) {
      return set_gridRowEnd(receiver, value);
    });
  }
  function gridRowEnd$factory_0() {
    return getPropertyCallableRef('gridRowEnd', 1, KMutableProperty1, function (receiver) {
      return get_gridRowEnd(receiver);
    }, function (receiver, value) {
      return set_gridRowEnd(receiver, value);
    });
  }
  function gridRowStart$factory() {
    return getPropertyCallableRef('gridRowStart', 1, KMutableProperty1, function (receiver) {
      return get_gridRowStart(receiver);
    }, function (receiver, value) {
      return set_gridRowStart(receiver, value);
    });
  }
  function gridRowStart$factory_0() {
    return getPropertyCallableRef('gridRowStart', 1, KMutableProperty1, function (receiver) {
      return get_gridRowStart(receiver);
    }, function (receiver, value) {
      return set_gridRowStart(receiver, value);
    });
  }
  function gridTemplate$factory() {
    return getPropertyCallableRef('gridTemplate', 1, KMutableProperty1, function (receiver) {
      return get_gridTemplate(receiver);
    }, function (receiver, value) {
      return set_gridTemplate(receiver, value);
    });
  }
  function gridTemplate$factory_0() {
    return getPropertyCallableRef('gridTemplate', 1, KMutableProperty1, function (receiver) {
      return get_gridTemplate(receiver);
    }, function (receiver, value) {
      return set_gridTemplate(receiver, value);
    });
  }
  function gridTemplateAreas$factory() {
    return getPropertyCallableRef('gridTemplateAreas', 1, KMutableProperty1, function (receiver) {
      return get_gridTemplateAreas(receiver);
    }, function (receiver, value) {
      return set_gridTemplateAreas(receiver, value);
    });
  }
  function gridTemplateAreas$factory_0() {
    return getPropertyCallableRef('gridTemplateAreas', 1, KMutableProperty1, function (receiver) {
      return get_gridTemplateAreas(receiver);
    }, function (receiver, value) {
      return set_gridTemplateAreas(receiver, value);
    });
  }
  function gridTemplateColumns$factory() {
    return getPropertyCallableRef('gridTemplateColumns', 1, KMutableProperty1, function (receiver) {
      return get_gridTemplateColumns(receiver);
    }, function (receiver, value) {
      return set_gridTemplateColumns(receiver, value);
    });
  }
  function gridTemplateColumns$factory_0() {
    return getPropertyCallableRef('gridTemplateColumns', 1, KMutableProperty1, function (receiver) {
      return get_gridTemplateColumns(receiver);
    }, function (receiver, value) {
      return set_gridTemplateColumns(receiver, value);
    });
  }
  function gridTemplateRows$factory() {
    return getPropertyCallableRef('gridTemplateRows', 1, KMutableProperty1, function (receiver) {
      return get_gridTemplateRows(receiver);
    }, function (receiver, value) {
      return set_gridTemplateRows(receiver, value);
    });
  }
  function gridTemplateRows$factory_0() {
    return getPropertyCallableRef('gridTemplateRows', 1, KMutableProperty1, function (receiver) {
      return get_gridTemplateRows(receiver);
    }, function (receiver, value) {
      return set_gridTemplateRows(receiver, value);
    });
  }
  function height$factory() {
    return getPropertyCallableRef('height', 1, KMutableProperty1, function (receiver) {
      return get_height(receiver);
    }, function (receiver, value) {
      return set_height(receiver, value);
    });
  }
  function height$factory_0() {
    return getPropertyCallableRef('height', 1, KMutableProperty1, function (receiver) {
      return get_height(receiver);
    }, function (receiver, value) {
      return set_height(receiver, value);
    });
  }
  function hyphens$factory() {
    return getPropertyCallableRef('hyphens', 1, KMutableProperty1, function (receiver) {
      return get_hyphens(receiver);
    }, function (receiver, value) {
      return set_hyphens(receiver, value);
    });
  }
  function hyphens$factory_0() {
    return getPropertyCallableRef('hyphens', 1, KMutableProperty1, function (receiver) {
      return get_hyphens(receiver);
    }, function (receiver, value) {
      return set_hyphens(receiver, value);
    });
  }
  function inset$factory() {
    return getPropertyCallableRef('inset', 1, KMutableProperty1, function (receiver) {
      return get_inset(receiver);
    }, function (receiver, value) {
      return set_inset(receiver, value);
    });
  }
  function inset$factory_0() {
    return getPropertyCallableRef('inset', 1, KMutableProperty1, function (receiver) {
      return get_inset(receiver);
    }, function (receiver, value) {
      return set_inset(receiver, value);
    });
  }
  function isolation$factory() {
    return getPropertyCallableRef('isolation', 1, KMutableProperty1, function (receiver) {
      return get_isolation(receiver);
    }, function (receiver, value) {
      return set_isolation(receiver, value);
    });
  }
  function isolation$factory_0() {
    return getPropertyCallableRef('isolation', 1, KMutableProperty1, function (receiver) {
      return get_isolation(receiver);
    }, function (receiver, value) {
      return set_isolation(receiver, value);
    });
  }
  function justifyContent$factory() {
    return getPropertyCallableRef('justifyContent', 1, KMutableProperty1, function (receiver) {
      return get_justifyContent(receiver);
    }, function (receiver, value) {
      return set_justifyContent(receiver, value);
    });
  }
  function justifyContent$factory_0() {
    return getPropertyCallableRef('justifyContent', 1, KMutableProperty1, function (receiver) {
      return get_justifyContent(receiver);
    }, function (receiver, value) {
      return set_justifyContent(receiver, value);
    });
  }
  function justifyItems$factory() {
    return getPropertyCallableRef('justifyItems', 1, KMutableProperty1, function (receiver) {
      return get_justifyItems(receiver);
    }, function (receiver, value) {
      return set_justifyItems(receiver, value);
    });
  }
  function justifyItems$factory_0() {
    return getPropertyCallableRef('justifyItems', 1, KMutableProperty1, function (receiver) {
      return get_justifyItems(receiver);
    }, function (receiver, value) {
      return set_justifyItems(receiver, value);
    });
  }
  function left$factory() {
    return getPropertyCallableRef('left', 1, KMutableProperty1, function (receiver) {
      return get_left(receiver);
    }, function (receiver, value) {
      return set_left(receiver, value);
    });
  }
  function left$factory_0() {
    return getPropertyCallableRef('left', 1, KMutableProperty1, function (receiver) {
      return get_left(receiver);
    }, function (receiver, value) {
      return set_left(receiver, value);
    });
  }
  function letterSpacing$factory() {
    return getPropertyCallableRef('letterSpacing', 1, KMutableProperty1, function (receiver) {
      return get_letterSpacing(receiver);
    }, function (receiver, value) {
      return set_letterSpacing(receiver, value);
    });
  }
  function letterSpacing$factory_0() {
    return getPropertyCallableRef('letterSpacing', 1, KMutableProperty1, function (receiver) {
      return get_letterSpacing(receiver);
    }, function (receiver, value) {
      return set_letterSpacing(receiver, value);
    });
  }
  function lineHeight$factory() {
    return getPropertyCallableRef('lineHeight', 1, KMutableProperty1, function (receiver) {
      return get_lineHeight(receiver);
    }, function (receiver, value) {
      return set_lineHeight(receiver, value);
    });
  }
  function lineHeight$factory_0() {
    return getPropertyCallableRef('lineHeight', 1, KMutableProperty1, function (receiver) {
      return get_lineHeight(receiver);
    }, function (receiver, value) {
      return set_lineHeight(receiver, value);
    });
  }
  function listStyleType$factory() {
    return getPropertyCallableRef('listStyleType', 1, KMutableProperty1, function (receiver) {
      return get_listStyleType(receiver);
    }, function (receiver, value) {
      return set_listStyleType(receiver, value);
    });
  }
  function listStyleType$factory_0() {
    return getPropertyCallableRef('listStyleType', 1, KMutableProperty1, function (receiver) {
      return get_listStyleType(receiver);
    }, function (receiver, value) {
      return set_listStyleType(receiver, value);
    });
  }
  function margin$factory() {
    return getPropertyCallableRef('margin', 1, KMutableProperty1, function (receiver) {
      return get_margin(receiver);
    }, function (receiver, value) {
      return set_margin(receiver, value);
    });
  }
  function margin$factory_0() {
    return getPropertyCallableRef('margin', 1, KMutableProperty1, function (receiver) {
      return get_margin(receiver);
    }, function (receiver, value) {
      return set_margin(receiver, value);
    });
  }
  function marginTop$factory() {
    return getPropertyCallableRef('marginTop', 1, KMutableProperty1, function (receiver) {
      return get_marginTop(receiver);
    }, function (receiver, value) {
      return set_marginTop(receiver, value);
    });
  }
  function marginTop$factory_0() {
    return getPropertyCallableRef('marginTop', 1, KMutableProperty1, function (receiver) {
      return get_marginTop(receiver);
    }, function (receiver, value) {
      return set_marginTop(receiver, value);
    });
  }
  function marginRight$factory() {
    return getPropertyCallableRef('marginRight', 1, KMutableProperty1, function (receiver) {
      return get_marginRight(receiver);
    }, function (receiver, value) {
      return set_marginRight(receiver, value);
    });
  }
  function marginRight$factory_0() {
    return getPropertyCallableRef('marginRight', 1, KMutableProperty1, function (receiver) {
      return get_marginRight(receiver);
    }, function (receiver, value) {
      return set_marginRight(receiver, value);
    });
  }
  function marginBottom$factory() {
    return getPropertyCallableRef('marginBottom', 1, KMutableProperty1, function (receiver) {
      return get_marginBottom(receiver);
    }, function (receiver, value) {
      return set_marginBottom(receiver, value);
    });
  }
  function marginBottom$factory_0() {
    return getPropertyCallableRef('marginBottom', 1, KMutableProperty1, function (receiver) {
      return get_marginBottom(receiver);
    }, function (receiver, value) {
      return set_marginBottom(receiver, value);
    });
  }
  function marginLeft$factory() {
    return getPropertyCallableRef('marginLeft', 1, KMutableProperty1, function (receiver) {
      return get_marginLeft(receiver);
    }, function (receiver, value) {
      return set_marginLeft(receiver, value);
    });
  }
  function marginLeft$factory_0() {
    return getPropertyCallableRef('marginLeft', 1, KMutableProperty1, function (receiver) {
      return get_marginLeft(receiver);
    }, function (receiver, value) {
      return set_marginLeft(receiver, value);
    });
  }
  function minWidth$factory() {
    return getPropertyCallableRef('minWidth', 1, KMutableProperty1, function (receiver) {
      return get_minWidth(receiver);
    }, function (receiver, value) {
      return set_minWidth(receiver, value);
    });
  }
  function minWidth$factory_0() {
    return getPropertyCallableRef('minWidth', 1, KMutableProperty1, function (receiver) {
      return get_minWidth(receiver);
    }, function (receiver, value) {
      return set_minWidth(receiver, value);
    });
  }
  function maxWidth$factory() {
    return getPropertyCallableRef('maxWidth', 1, KMutableProperty1, function (receiver) {
      return get_maxWidth(receiver);
    }, function (receiver, value) {
      return set_maxWidth(receiver, value);
    });
  }
  function maxWidth$factory_0() {
    return getPropertyCallableRef('maxWidth', 1, KMutableProperty1, function (receiver) {
      return get_maxWidth(receiver);
    }, function (receiver, value) {
      return set_maxWidth(receiver, value);
    });
  }
  function minHeight$factory() {
    return getPropertyCallableRef('minHeight', 1, KMutableProperty1, function (receiver) {
      return get_minHeight(receiver);
    }, function (receiver, value) {
      return set_minHeight(receiver, value);
    });
  }
  function minHeight$factory_0() {
    return getPropertyCallableRef('minHeight', 1, KMutableProperty1, function (receiver) {
      return get_minHeight(receiver);
    }, function (receiver, value) {
      return set_minHeight(receiver, value);
    });
  }
  function maxHeight$factory() {
    return getPropertyCallableRef('maxHeight', 1, KMutableProperty1, function (receiver) {
      return get_maxHeight(receiver);
    }, function (receiver, value) {
      return set_maxHeight(receiver, value);
    });
  }
  function maxHeight$factory_0() {
    return getPropertyCallableRef('maxHeight', 1, KMutableProperty1, function (receiver) {
      return get_maxHeight(receiver);
    }, function (receiver, value) {
      return set_maxHeight(receiver, value);
    });
  }
  function objectFit$factory() {
    return getPropertyCallableRef('objectFit', 1, KMutableProperty1, function (receiver) {
      return get_objectFit(receiver);
    }, function (receiver, value) {
      return set_objectFit(receiver, value);
    });
  }
  function objectFit$factory_0() {
    return getPropertyCallableRef('objectFit', 1, KMutableProperty1, function (receiver) {
      return get_objectFit(receiver);
    }, function (receiver, value) {
      return set_objectFit(receiver, value);
    });
  }
  function objectPosition$factory() {
    return getPropertyCallableRef('objectPosition', 1, KMutableProperty1, function (receiver) {
      return get_objectPosition(receiver);
    }, function (receiver, value) {
      return set_objectPosition(receiver, value);
    });
  }
  function objectPosition$factory_0() {
    return getPropertyCallableRef('objectPosition', 1, KMutableProperty1, function (receiver) {
      return get_objectPosition(receiver);
    }, function (receiver, value) {
      return set_objectPosition(receiver, value);
    });
  }
  function opacity$factory() {
    return getPropertyCallableRef('opacity', 1, KMutableProperty1, function (receiver) {
      return get_opacity(receiver);
    }, function (receiver, value) {
      return set_opacity(receiver, value);
    });
  }
  function opacity$factory_0() {
    return getPropertyCallableRef('opacity', 1, KMutableProperty1, function (receiver) {
      return get_opacity(receiver);
    }, function (receiver, value) {
      return set_opacity(receiver, value);
    });
  }
  function order$factory() {
    return getPropertyCallableRef('order', 1, KMutableProperty1, function (receiver) {
      return get_order(receiver);
    }, function (receiver, value) {
      return set_order(receiver, value);
    });
  }
  function order$factory_0() {
    return getPropertyCallableRef('order', 1, KMutableProperty1, function (receiver) {
      return get_order(receiver);
    }, function (receiver, value) {
      return set_order(receiver, value);
    });
  }
  function outline$factory() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return get_outline(receiver);
    }, function (receiver, value) {
      return set_outline(receiver, value);
    });
  }
  function outline$factory_0() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return get_outline(receiver);
    }, function (receiver, value) {
      return set_outline(receiver, value);
    });
  }
  function outlineColor$factory() {
    return getPropertyCallableRef('outlineColor', 1, KMutableProperty1, function (receiver) {
      return get_outlineColor(receiver);
    }, function (receiver, value) {
      return set_outlineColor(receiver, value);
    });
  }
  function outlineColor$factory_0() {
    return getPropertyCallableRef('outlineColor', 1, KMutableProperty1, function (receiver) {
      return get_outlineColor(receiver);
    }, function (receiver, value) {
      return set_outlineColor(receiver, value);
    });
  }
  function outlineOffset$factory() {
    return getPropertyCallableRef('outlineOffset', 1, KMutableProperty1, function (receiver) {
      return get_outlineOffset(receiver);
    }, function (receiver, value) {
      return set_outlineOffset(receiver, value);
    });
  }
  function outlineOffset$factory_0() {
    return getPropertyCallableRef('outlineOffset', 1, KMutableProperty1, function (receiver) {
      return get_outlineOffset(receiver);
    }, function (receiver, value) {
      return set_outlineOffset(receiver, value);
    });
  }
  function outlineStyle$factory() {
    return getPropertyCallableRef('outlineStyle', 1, KMutableProperty1, function (receiver) {
      return get_outlineStyle(receiver);
    }, function (receiver, value) {
      return set_outlineStyle(receiver, value);
    });
  }
  function outlineStyle$factory_0() {
    return getPropertyCallableRef('outlineStyle', 1, KMutableProperty1, function (receiver) {
      return get_outlineStyle(receiver);
    }, function (receiver, value) {
      return set_outlineStyle(receiver, value);
    });
  }
  function outlineWidth$factory() {
    return getPropertyCallableRef('outlineWidth', 1, KMutableProperty1, function (receiver) {
      return get_outlineWidth(receiver);
    }, function (receiver, value) {
      return set_outlineWidth(receiver, value);
    });
  }
  function outlineWidth$factory_0() {
    return getPropertyCallableRef('outlineWidth', 1, KMutableProperty1, function (receiver) {
      return get_outlineWidth(receiver);
    }, function (receiver, value) {
      return set_outlineWidth(receiver, value);
    });
  }
  function overflow$factory() {
    return getPropertyCallableRef('overflow', 1, KMutableProperty1, function (receiver) {
      return get_overflow(receiver);
    }, function (receiver, value) {
      return set_overflow(receiver, value);
    });
  }
  function overflow$factory_0() {
    return getPropertyCallableRef('overflow', 1, KMutableProperty1, function (receiver) {
      return get_overflow(receiver);
    }, function (receiver, value) {
      return set_overflow(receiver, value);
    });
  }
  function overflowX$factory() {
    return getPropertyCallableRef('overflowX', 1, KMutableProperty1, function (receiver) {
      return get_overflowX(receiver);
    }, function (receiver, value) {
      return set_overflowX(receiver, value);
    });
  }
  function overflowX$factory_0() {
    return getPropertyCallableRef('overflowX', 1, KMutableProperty1, function (receiver) {
      return get_overflowX(receiver);
    }, function (receiver, value) {
      return set_overflowX(receiver, value);
    });
  }
  function overflowY$factory() {
    return getPropertyCallableRef('overflowY', 1, KMutableProperty1, function (receiver) {
      return get_overflowY(receiver);
    }, function (receiver, value) {
      return set_overflowY(receiver, value);
    });
  }
  function overflowY$factory_0() {
    return getPropertyCallableRef('overflowY', 1, KMutableProperty1, function (receiver) {
      return get_overflowY(receiver);
    }, function (receiver, value) {
      return set_overflowY(receiver, value);
    });
  }
  function overflowWrap$factory() {
    return getPropertyCallableRef('overflowWrap', 1, KMutableProperty1, function (receiver) {
      return get_overflowWrap(receiver);
    }, function (receiver, value) {
      return set_overflowWrap(receiver, value);
    });
  }
  function overflowWrap$factory_0() {
    return getPropertyCallableRef('overflowWrap', 1, KMutableProperty1, function (receiver) {
      return get_overflowWrap(receiver);
    }, function (receiver, value) {
      return set_overflowWrap(receiver, value);
    });
  }
  function overscrollBehavior$factory() {
    return getPropertyCallableRef('overscrollBehavior', 1, KMutableProperty1, function (receiver) {
      return get_overscrollBehavior(receiver);
    }, function (receiver, value) {
      return set_overscrollBehavior(receiver, value);
    });
  }
  function overscrollBehavior$factory_0() {
    return getPropertyCallableRef('overscrollBehavior', 1, KMutableProperty1, function (receiver) {
      return get_overscrollBehavior(receiver);
    }, function (receiver, value) {
      return set_overscrollBehavior(receiver, value);
    });
  }
  function padding$factory() {
    return getPropertyCallableRef('padding', 1, KMutableProperty1, function (receiver) {
      return get_padding(receiver);
    }, function (receiver, value) {
      return set_padding(receiver, value);
    });
  }
  function padding$factory_0() {
    return getPropertyCallableRef('padding', 1, KMutableProperty1, function (receiver) {
      return get_padding(receiver);
    }, function (receiver, value) {
      return set_padding(receiver, value);
    });
  }
  function paddingTop$factory() {
    return getPropertyCallableRef('paddingTop', 1, KMutableProperty1, function (receiver) {
      return get_paddingTop(receiver);
    }, function (receiver, value) {
      return set_paddingTop(receiver, value);
    });
  }
  function paddingTop$factory_0() {
    return getPropertyCallableRef('paddingTop', 1, KMutableProperty1, function (receiver) {
      return get_paddingTop(receiver);
    }, function (receiver, value) {
      return set_paddingTop(receiver, value);
    });
  }
  function paddingRight$factory() {
    return getPropertyCallableRef('paddingRight', 1, KMutableProperty1, function (receiver) {
      return get_paddingRight(receiver);
    }, function (receiver, value) {
      return set_paddingRight(receiver, value);
    });
  }
  function paddingRight$factory_0() {
    return getPropertyCallableRef('paddingRight', 1, KMutableProperty1, function (receiver) {
      return get_paddingRight(receiver);
    }, function (receiver, value) {
      return set_paddingRight(receiver, value);
    });
  }
  function paddingBottom$factory() {
    return getPropertyCallableRef('paddingBottom', 1, KMutableProperty1, function (receiver) {
      return get_paddingBottom(receiver);
    }, function (receiver, value) {
      return set_paddingBottom(receiver, value);
    });
  }
  function paddingBottom$factory_0() {
    return getPropertyCallableRef('paddingBottom', 1, KMutableProperty1, function (receiver) {
      return get_paddingBottom(receiver);
    }, function (receiver, value) {
      return set_paddingBottom(receiver, value);
    });
  }
  function paddingLeft$factory() {
    return getPropertyCallableRef('paddingLeft', 1, KMutableProperty1, function (receiver) {
      return get_paddingLeft(receiver);
    }, function (receiver, value) {
      return set_paddingLeft(receiver, value);
    });
  }
  function paddingLeft$factory_0() {
    return getPropertyCallableRef('paddingLeft', 1, KMutableProperty1, function (receiver) {
      return get_paddingLeft(receiver);
    }, function (receiver, value) {
      return set_paddingLeft(receiver, value);
    });
  }
  function pointerEvents$factory() {
    return getPropertyCallableRef('pointerEvents', 1, KMutableProperty1, function (receiver) {
      return get_pointerEvents(receiver);
    }, function (receiver, value) {
      return set_pointerEvents(receiver, value);
    });
  }
  function pointerEvents$factory_0() {
    return getPropertyCallableRef('pointerEvents', 1, KMutableProperty1, function (receiver) {
      return get_pointerEvents(receiver);
    }, function (receiver, value) {
      return set_pointerEvents(receiver, value);
    });
  }
  function position$factory() {
    return getPropertyCallableRef('position', 1, KMutableProperty1, function (receiver) {
      return get_position(receiver);
    }, function (receiver, value) {
      return set_position(receiver, value);
    });
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KMutableProperty1, function (receiver) {
      return get_position(receiver);
    }, function (receiver, value) {
      return set_position(receiver, value);
    });
  }
  function resize$factory() {
    return getPropertyCallableRef('resize', 1, KMutableProperty1, function (receiver) {
      return get_resize(receiver);
    }, function (receiver, value) {
      return set_resize(receiver, value);
    });
  }
  function resize$factory_0() {
    return getPropertyCallableRef('resize', 1, KMutableProperty1, function (receiver) {
      return get_resize(receiver);
    }, function (receiver, value) {
      return set_resize(receiver, value);
    });
  }
  function right$factory() {
    return getPropertyCallableRef('right', 1, KMutableProperty1, function (receiver) {
      return get_right(receiver);
    }, function (receiver, value) {
      return set_right(receiver, value);
    });
  }
  function right$factory_0() {
    return getPropertyCallableRef('right', 1, KMutableProperty1, function (receiver) {
      return get_right(receiver);
    }, function (receiver, value) {
      return set_right(receiver, value);
    });
  }
  function rowGap$factory() {
    return getPropertyCallableRef('rowGap', 1, KMutableProperty1, function (receiver) {
      return get_rowGap(receiver);
    }, function (receiver, value) {
      return set_rowGap(receiver, value);
    });
  }
  function rowGap$factory_0() {
    return getPropertyCallableRef('rowGap', 1, KMutableProperty1, function (receiver) {
      return get_rowGap(receiver);
    }, function (receiver, value) {
      return set_rowGap(receiver, value);
    });
  }
  function scrollBehavior$factory() {
    return getPropertyCallableRef('scrollBehavior', 1, KMutableProperty1, function (receiver) {
      return get_scrollBehavior(receiver);
    }, function (receiver, value) {
      return set_scrollBehavior(receiver, value);
    });
  }
  function scrollBehavior$factory_0() {
    return getPropertyCallableRef('scrollBehavior', 1, KMutableProperty1, function (receiver) {
      return get_scrollBehavior(receiver);
    }, function (receiver, value) {
      return set_scrollBehavior(receiver, value);
    });
  }
  function src$factory() {
    return getPropertyCallableRef('src', 1, KMutableProperty1, function (receiver) {
      return get_src(receiver);
    }, function (receiver, value) {
      return set_src(receiver, value);
    });
  }
  function src$factory_0() {
    return getPropertyCallableRef('src', 1, KMutableProperty1, function (receiver) {
      return get_src(receiver);
    }, function (receiver, value) {
      return set_src(receiver, value);
    });
  }
  function tableLayout$factory() {
    return getPropertyCallableRef('tableLayout', 1, KMutableProperty1, function (receiver) {
      return get_tableLayout(receiver);
    }, function (receiver, value) {
      return set_tableLayout(receiver, value);
    });
  }
  function tableLayout$factory_0() {
    return getPropertyCallableRef('tableLayout', 1, KMutableProperty1, function (receiver) {
      return get_tableLayout(receiver);
    }, function (receiver, value) {
      return set_tableLayout(receiver, value);
    });
  }
  function textAlign$factory() {
    return getPropertyCallableRef('textAlign', 1, KMutableProperty1, function (receiver) {
      return get_textAlign(receiver);
    }, function (receiver, value) {
      return set_textAlign(receiver, value);
    });
  }
  function textAlign$factory_0() {
    return getPropertyCallableRef('textAlign', 1, KMutableProperty1, function (receiver) {
      return get_textAlign(receiver);
    }, function (receiver, value) {
      return set_textAlign(receiver, value);
    });
  }
  function textDecoration$factory() {
    return getPropertyCallableRef('textDecoration', 1, KMutableProperty1, function (receiver) {
      return get_textDecoration(receiver);
    }, function (receiver, value) {
      return set_textDecoration(receiver, value);
    });
  }
  function textDecoration$factory_0() {
    return getPropertyCallableRef('textDecoration', 1, KMutableProperty1, function (receiver) {
      return get_textDecoration(receiver);
    }, function (receiver, value) {
      return set_textDecoration(receiver, value);
    });
  }
  function textOverflow$factory() {
    return getPropertyCallableRef('textOverflow', 1, KMutableProperty1, function (receiver) {
      return get_textOverflow(receiver);
    }, function (receiver, value) {
      return set_textOverflow(receiver, value);
    });
  }
  function textOverflow$factory_0() {
    return getPropertyCallableRef('textOverflow', 1, KMutableProperty1, function (receiver) {
      return get_textOverflow(receiver);
    }, function (receiver, value) {
      return set_textOverflow(receiver, value);
    });
  }
  function textTransform$factory() {
    return getPropertyCallableRef('textTransform', 1, KMutableProperty1, function (receiver) {
      return get_textTransform(receiver);
    }, function (receiver, value) {
      return set_textTransform(receiver, value);
    });
  }
  function textTransform$factory_0() {
    return getPropertyCallableRef('textTransform', 1, KMutableProperty1, function (receiver) {
      return get_textTransform(receiver);
    }, function (receiver, value) {
      return set_textTransform(receiver, value);
    });
  }
  function top$factory() {
    return getPropertyCallableRef('top', 1, KMutableProperty1, function (receiver) {
      return get_top(receiver);
    }, function (receiver, value) {
      return set_top(receiver, value);
    });
  }
  function top$factory_0() {
    return getPropertyCallableRef('top', 1, KMutableProperty1, function (receiver) {
      return get_top(receiver);
    }, function (receiver, value) {
      return set_top(receiver, value);
    });
  }
  function transform$factory() {
    return getPropertyCallableRef('transform', 1, KMutableProperty1, function (receiver) {
      return get_transform(receiver);
    }, function (receiver, value) {
      return set_transform(receiver, value);
    });
  }
  function transform$factory_0() {
    return getPropertyCallableRef('transform', 1, KMutableProperty1, function (receiver) {
      return get_transform(receiver);
    }, function (receiver, value) {
      return set_transform(receiver, value);
    });
  }
  function transition$factory() {
    return getPropertyCallableRef('transition', 1, KMutableProperty1, function (receiver) {
      return get_transition(receiver);
    }, function (receiver, value) {
      return set_transition(receiver, value);
    });
  }
  function transition$factory_0() {
    return getPropertyCallableRef('transition', 1, KMutableProperty1, function (receiver) {
      return get_transition(receiver);
    }, function (receiver, value) {
      return set_transition(receiver, value);
    });
  }
  function transitionDelay$factory() {
    return getPropertyCallableRef('transitionDelay', 1, KMutableProperty1, function (receiver) {
      return get_transitionDelay(receiver);
    }, function (receiver, value) {
      return set_transitionDelay(receiver, value);
    });
  }
  function transitionDelay$factory_0() {
    return getPropertyCallableRef('transitionDelay', 1, KMutableProperty1, function (receiver) {
      return get_transitionDelay(receiver);
    }, function (receiver, value) {
      return set_transitionDelay(receiver, value);
    });
  }
  function transitionDuration$factory() {
    return getPropertyCallableRef('transitionDuration', 1, KMutableProperty1, function (receiver) {
      return get_transitionDuration(receiver);
    }, function (receiver, value) {
      return set_transitionDuration(receiver, value);
    });
  }
  function transitionDuration$factory_0() {
    return getPropertyCallableRef('transitionDuration', 1, KMutableProperty1, function (receiver) {
      return get_transitionDuration(receiver);
    }, function (receiver, value) {
      return set_transitionDuration(receiver, value);
    });
  }
  function transitionProperty$factory() {
    return getPropertyCallableRef('transitionProperty', 1, KMutableProperty1, function (receiver) {
      return get_transitionProperty(receiver);
    }, function (receiver, value) {
      return set_transitionProperty(receiver, value);
    });
  }
  function transitionProperty$factory_0() {
    return getPropertyCallableRef('transitionProperty', 1, KMutableProperty1, function (receiver) {
      return get_transitionProperty(receiver);
    }, function (receiver, value) {
      return set_transitionProperty(receiver, value);
    });
  }
  function transitionTimingFunction$factory() {
    return getPropertyCallableRef('transitionTimingFunction', 1, KMutableProperty1, function (receiver) {
      return get_transitionTimingFunction(receiver);
    }, function (receiver, value) {
      return set_transitionTimingFunction(receiver, value);
    });
  }
  function transitionTimingFunction$factory_0() {
    return getPropertyCallableRef('transitionTimingFunction', 1, KMutableProperty1, function (receiver) {
      return get_transitionTimingFunction(receiver);
    }, function (receiver, value) {
      return set_transitionTimingFunction(receiver, value);
    });
  }
  function userSelect$factory() {
    return getPropertyCallableRef('userSelect', 1, KMutableProperty1, function (receiver) {
      return get_userSelect(receiver);
    }, function (receiver, value) {
      return set_userSelect(receiver, value);
    });
  }
  function userSelect$factory_0() {
    return getPropertyCallableRef('userSelect', 1, KMutableProperty1, function (receiver) {
      return get_userSelect(receiver);
    }, function (receiver, value) {
      return set_userSelect(receiver, value);
    });
  }
  function verticalAlign$factory() {
    return getPropertyCallableRef('verticalAlign', 1, KMutableProperty1, function (receiver) {
      return get_verticalAlign(receiver);
    }, function (receiver, value) {
      return set_verticalAlign(receiver, value);
    });
  }
  function verticalAlign$factory_0() {
    return getPropertyCallableRef('verticalAlign', 1, KMutableProperty1, function (receiver) {
      return get_verticalAlign(receiver);
    }, function (receiver, value) {
      return set_verticalAlign(receiver, value);
    });
  }
  function visibility$factory() {
    return getPropertyCallableRef('visibility', 1, KMutableProperty1, function (receiver) {
      return get_visibility(receiver);
    }, function (receiver, value) {
      return set_visibility(receiver, value);
    });
  }
  function visibility$factory_0() {
    return getPropertyCallableRef('visibility', 1, KMutableProperty1, function (receiver) {
      return get_visibility(receiver);
    }, function (receiver, value) {
      return set_visibility(receiver, value);
    });
  }
  function whiteSpace$factory() {
    return getPropertyCallableRef('whiteSpace', 1, KMutableProperty1, function (receiver) {
      return get_whiteSpace(receiver);
    }, function (receiver, value) {
      return set_whiteSpace(receiver, value);
    });
  }
  function whiteSpace$factory_0() {
    return getPropertyCallableRef('whiteSpace', 1, KMutableProperty1, function (receiver) {
      return get_whiteSpace(receiver);
    }, function (receiver, value) {
      return set_whiteSpace(receiver, value);
    });
  }
  function width$factory() {
    return getPropertyCallableRef('width', 1, KMutableProperty1, function (receiver) {
      return get_width(receiver);
    }, function (receiver, value) {
      return set_width(receiver, value);
    });
  }
  function width$factory_0() {
    return getPropertyCallableRef('width', 1, KMutableProperty1, function (receiver) {
      return get_width(receiver);
    }, function (receiver, value) {
      return set_width(receiver, value);
    });
  }
  function wordBreak$factory() {
    return getPropertyCallableRef('wordBreak', 1, KMutableProperty1, function (receiver) {
      return get_wordBreak(receiver);
    }, function (receiver, value) {
      return set_wordBreak(receiver, value);
    });
  }
  function wordBreak$factory_0() {
    return getPropertyCallableRef('wordBreak', 1, KMutableProperty1, function (receiver) {
      return get_wordBreak(receiver);
    }, function (receiver, value) {
      return set_wordBreak(receiver, value);
    });
  }
  function wordSpacing$factory() {
    return getPropertyCallableRef('wordSpacing', 1, KMutableProperty1, function (receiver) {
      return get_wordSpacing(receiver);
    }, function (receiver, value) {
      return set_wordSpacing(receiver, value);
    });
  }
  function wordSpacing$factory_0() {
    return getPropertyCallableRef('wordSpacing', 1, KMutableProperty1, function (receiver) {
      return get_wordSpacing(receiver);
    }, function (receiver, value) {
      return set_wordSpacing(receiver, value);
    });
  }
  function wordWrap$factory() {
    return getPropertyCallableRef('wordWrap', 1, KMutableProperty1, function (receiver) {
      return get_wordWrap(receiver);
    }, function (receiver, value) {
      return set_wordWrap(receiver, value);
    });
  }
  function wordWrap$factory_0() {
    return getPropertyCallableRef('wordWrap', 1, KMutableProperty1, function (receiver) {
      return get_wordWrap(receiver);
    }, function (receiver, value) {
      return set_wordWrap(receiver, value);
    });
  }
  function zIndex$factory() {
    return getPropertyCallableRef('zIndex', 1, KMutableProperty1, function (receiver) {
      return get_zIndex(receiver);
    }, function (receiver, value) {
      return set_zIndex(receiver, value);
    });
  }
  function zIndex$factory_0() {
    return getPropertyCallableRef('zIndex', 1, KMutableProperty1, function (receiver) {
      return get_zIndex(receiver);
    }, function (receiver, value) {
      return set_zIndex(receiver, value);
    });
  }
  var properties_initialized_StyledElement_kt_5g3zax;
  function _init_properties_StyledElement_kt__jfdzyh() {
    if (properties_initialized_StyledElement_kt_5g3zax) {
    } else {
      properties_initialized_StyledElement_kt_5g3zax = true;
      alignContent$delegate = new CssProperty();
      alignItems$delegate = new CssProperty();
      alignSelf$delegate = new CssProperty();
      animation$delegate = new CssProperty(animation$delegate$lambda);
      animationDelay$delegate = new CssProperty();
      animationDirection$delegate = new CssProperty();
      animationDuration$delegate = new CssProperty();
      animationFillMode$delegate = new CssProperty();
      animationIterationCount$delegate = new CssProperty();
      animationName$delegate = new CssProperty();
      animationPlayState$delegate = new CssProperty();
      animationTimingFunction$delegate = new CssProperty();
      appearance$delegate = new CssProperty();
      aspectRatio$delegate = new CssProperty();
      backfaceVisibility$delegate = new CssProperty();
      background$delegate = new CssProperty();
      backgroundAttachment$delegate = new CssProperty();
      backgroundClip$delegate = new CssProperty();
      backgroundColor$delegate = new CssProperty();
      backgroundImage$delegate = new CssProperty();
      backgroundOrigin$delegate = new CssProperty();
      backgroundPosition$delegate = new CssProperty();
      backgroundRepeat$delegate = new CssProperty();
      backgroundSize$delegate = new CssProperty();
      border$delegate = new CssProperty();
      borderTop$delegate = new CssProperty();
      borderRight$delegate = new CssProperty();
      borderBottom$delegate = new CssProperty();
      borderLeft$delegate = new CssProperty();
      borderCollapse$delegate = new CssProperty();
      borderSpacing$delegate = new CssProperty();
      borderRadius$delegate = new CssProperty();
      borderTopLeftRadius$delegate = new CssProperty();
      borderTopRightRadius$delegate = new CssProperty();
      borderBottomLeftRadius$delegate = new CssProperty();
      borderBottomRightRadius$delegate = new CssProperty();
      borderStyle$delegate = new CssProperty();
      borderTopStyle$delegate = new CssProperty();
      borderRightStyle$delegate = new CssProperty();
      borderBottomStyle$delegate = new CssProperty();
      borderLeftStyle$delegate = new CssProperty();
      borderWidth$delegate = new CssProperty();
      borderTopWidth$delegate = new CssProperty();
      borderRightWidth$delegate = new CssProperty();
      borderBottomWidth$delegate = new CssProperty();
      borderLeftWidth$delegate = new CssProperty();
      borderColor$delegate = new CssProperty();
      borderTopColor$delegate = new CssProperty();
      borderRightColor$delegate = new CssProperty();
      borderBottomColor$delegate = new CssProperty();
      borderLeftColor$delegate = new CssProperty();
      bottom$delegate = new CssProperty();
      boxShadow$delegate = new CssProperty(boxShadow$delegate$lambda);
      boxSizing$delegate = new CssProperty();
      clear$delegate = new CssProperty();
      color$delegate = new CssProperty();
      columnGap$delegate = new CssProperty();
      contain$delegate = new CssProperty();
      content$delegate = new CssProperty();
      cursor$delegate = new CssProperty();
      direction$delegate = new CssProperty();
      display$delegate = new CssProperty();
      filter$delegate = new CssProperty();
      flexBasis$delegate = new CssProperty();
      flexDirection$delegate = new CssProperty();
      flexGrow$delegate = new CssProperty();
      flexShrink$delegate = new CssProperty();
      flexWrap$delegate = new CssProperty();
      float$delegate = new CssProperty();
      fontFamily$delegate = new CssProperty();
      fontSize$delegate = new CssProperty();
      fontSizeAdjust$delegate = new CssProperty();
      fontStyle$delegate = new CssProperty();
      fontWeight$delegate = new CssProperty();
      gap$delegate = new CssProperty();
      gridAutoColumns$delegate = new CssProperty();
      gridAutoFlow$delegate = new CssProperty();
      gridAutoRows$delegate = new CssProperty();
      gridColumn$delegate = new CssProperty();
      gridColumnEnd$delegate = new CssProperty();
      gridColumnStart$delegate = new CssProperty();
      gridRow$delegate = new CssProperty();
      gridRowEnd$delegate = new CssProperty();
      gridRowStart$delegate = new CssProperty();
      gridTemplate$delegate = new CssProperty();
      gridTemplateAreas$delegate = new CssProperty();
      gridTemplateColumns$delegate = new CssProperty();
      gridTemplateRows$delegate = new CssProperty();
      height$delegate = new CssProperty();
      hyphens$delegate = new CssProperty();
      inset$delegate = new CssProperty();
      isolation$delegate = new CssProperty();
      justifyContent$delegate = new CssProperty();
      justifyItems$delegate = new CssProperty();
      left$delegate = new CssProperty();
      letterSpacing$delegate = new CssProperty();
      lineHeight$delegate = new CssProperty();
      listStyleType$delegate = new CssProperty();
      margin$delegate = new CssProperty();
      marginTop$delegate = new CssProperty();
      marginRight$delegate = new CssProperty();
      marginBottom$delegate = new CssProperty();
      marginLeft$delegate = new CssProperty();
      minWidth$delegate = new CssProperty();
      maxWidth$delegate = new CssProperty();
      minHeight$delegate = new CssProperty();
      maxHeight$delegate = new CssProperty();
      objectFit$delegate = new CssProperty();
      objectPosition$delegate = new CssProperty();
      opacity$delegate = new CssProperty();
      order$delegate = new CssProperty();
      outline$delegate = new CssProperty();
      outlineColor$delegate = new CssProperty();
      outlineOffset$delegate = new CssProperty();
      outlineStyle$delegate = new CssProperty();
      outlineWidth$delegate = new CssProperty();
      overflow$delegate = new CssProperty();
      overflowX$delegate = new CssProperty();
      overflowY$delegate = new CssProperty();
      overflowWrap$delegate = new CssProperty();
      overscrollBehavior$delegate = new CssProperty();
      padding$delegate = new CssProperty();
      paddingTop$delegate = new CssProperty();
      paddingRight$delegate = new CssProperty();
      paddingBottom$delegate = new CssProperty();
      paddingLeft$delegate = new CssProperty();
      pointerEvents$delegate = new CssProperty();
      position$delegate = new CssProperty();
      resize$delegate = new CssProperty();
      right$delegate = new CssProperty();
      rowGap$delegate = new CssProperty();
      scrollBehavior$delegate = new CssProperty();
      src$delegate = new CssProperty();
      tableLayout$delegate = new CssProperty();
      textAlign$delegate = new CssProperty();
      textDecoration$delegate = new CssProperty();
      textOverflow$delegate = new CssProperty();
      textTransform$delegate = new CssProperty();
      top$delegate = new CssProperty();
      transform$delegate = new CssProperty(transform$delegate$lambda);
      transition$delegate = new CssProperty(transition$delegate$lambda);
      transitionDelay$delegate = new CssProperty();
      transitionDuration$delegate = new CssProperty();
      transitionProperty$delegate = new CssProperty();
      transitionTimingFunction$delegate = new CssProperty();
      userSelect$delegate = new CssProperty();
      verticalAlign$delegate = new CssProperty();
      visibility$delegate = new CssProperty();
      whiteSpace$delegate = new CssProperty();
      width$delegate = new CssProperty();
      wordBreak$delegate = new CssProperty();
      wordSpacing$delegate = new CssProperty();
      wordWrap$delegate = new CssProperty();
      zIndex$delegate = new CssProperty();
    }
  }
  function get_html() {
    _init_properties_TagSelectors_kt__3okvom();
    return html$delegate.getValue_elrtsm_k$(null, html$factory());
  }
  var html$delegate;
  function get_base() {
    _init_properties_TagSelectors_kt__3okvom();
    return base$delegate.getValue_elrtsm_k$(null, base$factory());
  }
  var base$delegate;
  function get_head() {
    _init_properties_TagSelectors_kt__3okvom();
    return head$delegate.getValue_elrtsm_k$(null, head$factory());
  }
  var head$delegate;
  function get_link() {
    _init_properties_TagSelectors_kt__3okvom();
    return link$delegate.getValue_elrtsm_k$(null, link$factory());
  }
  var link$delegate;
  function get_meta() {
    _init_properties_TagSelectors_kt__3okvom();
    return meta$delegate.getValue_elrtsm_k$(null, meta$factory());
  }
  var meta$delegate;
  function get_style() {
    _init_properties_TagSelectors_kt__3okvom();
    return style$delegate.getValue_elrtsm_k$(null, style$factory());
  }
  var style$delegate;
  function get_title() {
    _init_properties_TagSelectors_kt__3okvom();
    return title$delegate.getValue_elrtsm_k$(null, title$factory());
  }
  var title$delegate;
  function get_body() {
    _init_properties_TagSelectors_kt__3okvom();
    return body$delegate.getValue_elrtsm_k$(null, body$factory());
  }
  var body$delegate;
  function get_address() {
    _init_properties_TagSelectors_kt__3okvom();
    return address$delegate.getValue_elrtsm_k$(null, address$factory());
  }
  var address$delegate;
  function get_article() {
    _init_properties_TagSelectors_kt__3okvom();
    return article$delegate.getValue_elrtsm_k$(null, article$factory());
  }
  var article$delegate;
  function get_aside() {
    _init_properties_TagSelectors_kt__3okvom();
    return aside$delegate.getValue_elrtsm_k$(null, aside$factory());
  }
  var aside$delegate;
  function get_footer() {
    _init_properties_TagSelectors_kt__3okvom();
    return footer$delegate.getValue_elrtsm_k$(null, footer$factory());
  }
  var footer$delegate;
  function get_header() {
    _init_properties_TagSelectors_kt__3okvom();
    return header$delegate.getValue_elrtsm_k$(null, header$factory());
  }
  var header$delegate;
  function get_h1() {
    _init_properties_TagSelectors_kt__3okvom();
    return h1$delegate.getValue_elrtsm_k$(null, h1$factory());
  }
  var h1$delegate;
  function get_h2() {
    _init_properties_TagSelectors_kt__3okvom();
    return h2$delegate.getValue_elrtsm_k$(null, h2$factory());
  }
  var h2$delegate;
  function get_h3() {
    _init_properties_TagSelectors_kt__3okvom();
    return h3$delegate.getValue_elrtsm_k$(null, h3$factory());
  }
  var h3$delegate;
  function get_h4() {
    _init_properties_TagSelectors_kt__3okvom();
    return h4$delegate.getValue_elrtsm_k$(null, h4$factory());
  }
  var h4$delegate;
  function get_h5() {
    _init_properties_TagSelectors_kt__3okvom();
    return h5$delegate.getValue_elrtsm_k$(null, h5$factory());
  }
  var h5$delegate;
  function get_h6() {
    _init_properties_TagSelectors_kt__3okvom();
    return h6$delegate.getValue_elrtsm_k$(null, h6$factory());
  }
  var h6$delegate;
  function get_main() {
    _init_properties_TagSelectors_kt__3okvom();
    return main$delegate.getValue_elrtsm_k$(null, main$factory());
  }
  var main$delegate;
  function get_nav() {
    _init_properties_TagSelectors_kt__3okvom();
    return nav$delegate.getValue_elrtsm_k$(null, nav$factory());
  }
  var nav$delegate;
  function get_section() {
    _init_properties_TagSelectors_kt__3okvom();
    return section$delegate.getValue_elrtsm_k$(null, section$factory());
  }
  var section$delegate;
  function get_blockquote() {
    _init_properties_TagSelectors_kt__3okvom();
    return blockquote$delegate.getValue_elrtsm_k$(null, blockquote$factory());
  }
  var blockquote$delegate;
  function get_dd() {
    _init_properties_TagSelectors_kt__3okvom();
    return dd$delegate.getValue_elrtsm_k$(null, dd$factory());
  }
  var dd$delegate;
  function get_div() {
    _init_properties_TagSelectors_kt__3okvom();
    return div$delegate.getValue_elrtsm_k$(null, div$factory());
  }
  var div$delegate;
  function get_dl() {
    _init_properties_TagSelectors_kt__3okvom();
    return dl$delegate.getValue_elrtsm_k$(null, dl$factory());
  }
  var dl$delegate;
  function get_dt() {
    _init_properties_TagSelectors_kt__3okvom();
    return dt$delegate.getValue_elrtsm_k$(null, dt$factory());
  }
  var dt$delegate;
  function get_figcaption() {
    _init_properties_TagSelectors_kt__3okvom();
    return figcaption$delegate.getValue_elrtsm_k$(null, figcaption$factory());
  }
  var figcaption$delegate;
  function get_figure() {
    _init_properties_TagSelectors_kt__3okvom();
    return figure$delegate.getValue_elrtsm_k$(null, figure$factory());
  }
  var figure$delegate;
  function get_hr() {
    _init_properties_TagSelectors_kt__3okvom();
    return hr$delegate.getValue_elrtsm_k$(null, hr$factory());
  }
  var hr$delegate;
  function get_li() {
    _init_properties_TagSelectors_kt__3okvom();
    return li$delegate.getValue_elrtsm_k$(null, li$factory());
  }
  var li$delegate;
  function get_ol() {
    _init_properties_TagSelectors_kt__3okvom();
    return ol$delegate.getValue_elrtsm_k$(null, ol$factory());
  }
  var ol$delegate;
  function get_p() {
    _init_properties_TagSelectors_kt__3okvom();
    return p$delegate.getValue_elrtsm_k$(null, p$factory());
  }
  var p$delegate;
  function get_pre() {
    _init_properties_TagSelectors_kt__3okvom();
    return pre$delegate.getValue_elrtsm_k$(null, pre$factory());
  }
  var pre$delegate;
  function get_ul() {
    _init_properties_TagSelectors_kt__3okvom();
    return ul$delegate.getValue_elrtsm_k$(null, ul$factory());
  }
  var ul$delegate;
  function get_a() {
    _init_properties_TagSelectors_kt__3okvom();
    return a$delegate.getValue_elrtsm_k$(null, a$factory());
  }
  var a$delegate;
  function get_abbr() {
    _init_properties_TagSelectors_kt__3okvom();
    return abbr$delegate.getValue_elrtsm_k$(null, abbr$factory());
  }
  var abbr$delegate;
  function get_b() {
    _init_properties_TagSelectors_kt__3okvom();
    return b$delegate.getValue_elrtsm_k$(null, b$factory());
  }
  var b$delegate;
  function get_bdi() {
    _init_properties_TagSelectors_kt__3okvom();
    return bdi$delegate.getValue_elrtsm_k$(null, bdi$factory());
  }
  var bdi$delegate;
  function get_bdo() {
    _init_properties_TagSelectors_kt__3okvom();
    return bdo$delegate.getValue_elrtsm_k$(null, bdo$factory());
  }
  var bdo$delegate;
  function get_br() {
    _init_properties_TagSelectors_kt__3okvom();
    return br$delegate.getValue_elrtsm_k$(null, br$factory());
  }
  var br$delegate;
  function get_cite() {
    _init_properties_TagSelectors_kt__3okvom();
    return cite$delegate.getValue_elrtsm_k$(null, cite$factory());
  }
  var cite$delegate;
  function get_code() {
    _init_properties_TagSelectors_kt__3okvom();
    return code$delegate.getValue_elrtsm_k$(null, code$factory());
  }
  var code$delegate;
  function get_data() {
    _init_properties_TagSelectors_kt__3okvom();
    return data$delegate.getValue_elrtsm_k$(null, data$factory());
  }
  var data$delegate;
  function get_dfn() {
    _init_properties_TagSelectors_kt__3okvom();
    return dfn$delegate.getValue_elrtsm_k$(null, dfn$factory());
  }
  var dfn$delegate;
  function get_em() {
    _init_properties_TagSelectors_kt__3okvom();
    return em$delegate.getValue_elrtsm_k$(null, em$factory());
  }
  var em$delegate;
  function get_i() {
    _init_properties_TagSelectors_kt__3okvom();
    return i$delegate.getValue_elrtsm_k$(null, i$factory());
  }
  var i$delegate;
  function get_kbd() {
    _init_properties_TagSelectors_kt__3okvom();
    return kbd$delegate.getValue_elrtsm_k$(null, kbd$factory());
  }
  var kbd$delegate;
  function get_mark() {
    _init_properties_TagSelectors_kt__3okvom();
    return mark$delegate.getValue_elrtsm_k$(null, mark$factory());
  }
  var mark$delegate;
  function get_q() {
    _init_properties_TagSelectors_kt__3okvom();
    return q$delegate.getValue_elrtsm_k$(null, q$factory());
  }
  var q$delegate;
  function get_rb() {
    _init_properties_TagSelectors_kt__3okvom();
    return rb$delegate.getValue_elrtsm_k$(null, rb$factory());
  }
  var rb$delegate;
  function get_rp() {
    _init_properties_TagSelectors_kt__3okvom();
    return rp$delegate.getValue_elrtsm_k$(null, rp$factory());
  }
  var rp$delegate;
  function get_rt() {
    _init_properties_TagSelectors_kt__3okvom();
    return rt$delegate.getValue_elrtsm_k$(null, rt$factory());
  }
  var rt$delegate;
  function get_rtc() {
    _init_properties_TagSelectors_kt__3okvom();
    return rtc$delegate.getValue_elrtsm_k$(null, rtc$factory());
  }
  var rtc$delegate;
  function get_ruby() {
    _init_properties_TagSelectors_kt__3okvom();
    return ruby$delegate.getValue_elrtsm_k$(null, ruby$factory());
  }
  var ruby$delegate;
  function get_s() {
    _init_properties_TagSelectors_kt__3okvom();
    return s$delegate.getValue_elrtsm_k$(null, s$factory());
  }
  var s$delegate;
  function get_samp() {
    _init_properties_TagSelectors_kt__3okvom();
    return samp$delegate.getValue_elrtsm_k$(null, samp$factory());
  }
  var samp$delegate;
  function get_small() {
    _init_properties_TagSelectors_kt__3okvom();
    return small$delegate.getValue_elrtsm_k$(null, small$factory());
  }
  var small$delegate;
  function get_span() {
    _init_properties_TagSelectors_kt__3okvom();
    return span$delegate.getValue_elrtsm_k$(null, span$factory());
  }
  var span$delegate;
  function get_strong() {
    _init_properties_TagSelectors_kt__3okvom();
    return strong$delegate.getValue_elrtsm_k$(null, strong$factory());
  }
  var strong$delegate;
  function get_sub() {
    _init_properties_TagSelectors_kt__3okvom();
    return sub$delegate.getValue_elrtsm_k$(null, sub$factory());
  }
  var sub$delegate;
  function get_sup() {
    _init_properties_TagSelectors_kt__3okvom();
    return sup$delegate.getValue_elrtsm_k$(null, sup$factory());
  }
  var sup$delegate;
  function get_time() {
    _init_properties_TagSelectors_kt__3okvom();
    return time$delegate.getValue_elrtsm_k$(null, time$factory());
  }
  var time$delegate;
  function get_u() {
    _init_properties_TagSelectors_kt__3okvom();
    return u$delegate.getValue_elrtsm_k$(null, u$factory());
  }
  var u$delegate;
  function get_wbr() {
    _init_properties_TagSelectors_kt__3okvom();
    return wbr$delegate.getValue_elrtsm_k$(null, wbr$factory());
  }
  var wbr$delegate;
  function get_area() {
    _init_properties_TagSelectors_kt__3okvom();
    return area$delegate.getValue_elrtsm_k$(null, area$factory());
  }
  var area$delegate;
  function get_audio() {
    _init_properties_TagSelectors_kt__3okvom();
    return audio$delegate.getValue_elrtsm_k$(null, audio$factory());
  }
  var audio$delegate;
  function get_img() {
    _init_properties_TagSelectors_kt__3okvom();
    return img$delegate.getValue_elrtsm_k$(null, img$factory());
  }
  var img$delegate;
  function get_map() {
    _init_properties_TagSelectors_kt__3okvom();
    return map$delegate.getValue_elrtsm_k$(null, map$factory());
  }
  var map$delegate;
  function get_track() {
    _init_properties_TagSelectors_kt__3okvom();
    return track$delegate.getValue_elrtsm_k$(null, track$factory());
  }
  var track$delegate;
  function get_video() {
    _init_properties_TagSelectors_kt__3okvom();
    return video$delegate.getValue_elrtsm_k$(null, video$factory());
  }
  var video$delegate;
  function get_embed() {
    _init_properties_TagSelectors_kt__3okvom();
    return embed$delegate.getValue_elrtsm_k$(null, embed$factory());
  }
  var embed$delegate;
  function get_iframe() {
    _init_properties_TagSelectors_kt__3okvom();
    return iframe$delegate.getValue_elrtsm_k$(null, iframe$factory());
  }
  var iframe$delegate;
  function get_param() {
    _init_properties_TagSelectors_kt__3okvom();
    return param$delegate.getValue_elrtsm_k$(null, param$factory());
  }
  var param$delegate;
  function get_picture() {
    _init_properties_TagSelectors_kt__3okvom();
    return picture$delegate.getValue_elrtsm_k$(null, picture$factory());
  }
  var picture$delegate;
  function get_portal() {
    _init_properties_TagSelectors_kt__3okvom();
    return portal$delegate.getValue_elrtsm_k$(null, portal$factory());
  }
  var portal$delegate;
  function get_source() {
    _init_properties_TagSelectors_kt__3okvom();
    return source$delegate.getValue_elrtsm_k$(null, source$factory());
  }
  var source$delegate;
  function get_svg() {
    _init_properties_TagSelectors_kt__3okvom();
    return svg$delegate.getValue_elrtsm_k$(null, svg$factory());
  }
  var svg$delegate;
  function get_math() {
    _init_properties_TagSelectors_kt__3okvom();
    return math$delegate.getValue_elrtsm_k$(null, math$factory());
  }
  var math$delegate;
  function get_canvas() {
    _init_properties_TagSelectors_kt__3okvom();
    return canvas$delegate.getValue_elrtsm_k$(null, canvas$factory());
  }
  var canvas$delegate;
  function get_noscript() {
    _init_properties_TagSelectors_kt__3okvom();
    return noscript$delegate.getValue_elrtsm_k$(null, noscript$factory());
  }
  var noscript$delegate;
  function get_script() {
    _init_properties_TagSelectors_kt__3okvom();
    return script$delegate.getValue_elrtsm_k$(null, script$factory());
  }
  var script$delegate;
  function get_del() {
    _init_properties_TagSelectors_kt__3okvom();
    return del$delegate.getValue_elrtsm_k$(null, del$factory());
  }
  var del$delegate;
  function get_ins() {
    _init_properties_TagSelectors_kt__3okvom();
    return ins$delegate.getValue_elrtsm_k$(null, ins$factory());
  }
  var ins$delegate;
  function get_caption() {
    _init_properties_TagSelectors_kt__3okvom();
    return caption$delegate.getValue_elrtsm_k$(null, caption$factory());
  }
  var caption$delegate;
  function get_col() {
    _init_properties_TagSelectors_kt__3okvom();
    return col$delegate.getValue_elrtsm_k$(null, col$factory());
  }
  var col$delegate;
  function get_colgroup() {
    _init_properties_TagSelectors_kt__3okvom();
    return colgroup$delegate.getValue_elrtsm_k$(null, colgroup$factory());
  }
  var colgroup$delegate;
  function get_table() {
    _init_properties_TagSelectors_kt__3okvom();
    return table$delegate.getValue_elrtsm_k$(null, table$factory());
  }
  var table$delegate;
  function get_tbody() {
    _init_properties_TagSelectors_kt__3okvom();
    return tbody$delegate.getValue_elrtsm_k$(null, tbody$factory());
  }
  var tbody$delegate;
  function get_td() {
    _init_properties_TagSelectors_kt__3okvom();
    return td$delegate.getValue_elrtsm_k$(null, td$factory());
  }
  var td$delegate;
  function get_tfoot() {
    _init_properties_TagSelectors_kt__3okvom();
    return tfoot$delegate.getValue_elrtsm_k$(null, tfoot$factory());
  }
  var tfoot$delegate;
  function get_th() {
    _init_properties_TagSelectors_kt__3okvom();
    return th$delegate.getValue_elrtsm_k$(null, th$factory());
  }
  var th$delegate;
  function get_thead() {
    _init_properties_TagSelectors_kt__3okvom();
    return thead$delegate.getValue_elrtsm_k$(null, thead$factory());
  }
  var thead$delegate;
  function get_tr() {
    _init_properties_TagSelectors_kt__3okvom();
    return tr$delegate.getValue_elrtsm_k$(null, tr$factory());
  }
  var tr$delegate;
  function get_button() {
    _init_properties_TagSelectors_kt__3okvom();
    return button$delegate.getValue_elrtsm_k$(null, button$factory());
  }
  var button$delegate;
  function get_datalist() {
    _init_properties_TagSelectors_kt__3okvom();
    return datalist$delegate.getValue_elrtsm_k$(null, datalist$factory());
  }
  var datalist$delegate;
  function get_fieldset() {
    _init_properties_TagSelectors_kt__3okvom();
    return fieldset$delegate.getValue_elrtsm_k$(null, fieldset$factory());
  }
  var fieldset$delegate;
  function get_form() {
    _init_properties_TagSelectors_kt__3okvom();
    return form$delegate.getValue_elrtsm_k$(null, form$factory());
  }
  var form$delegate;
  function get_input() {
    _init_properties_TagSelectors_kt__3okvom();
    return input$delegate.getValue_elrtsm_k$(null, input$factory());
  }
  var input$delegate;
  function get_label() {
    _init_properties_TagSelectors_kt__3okvom();
    return label$delegate.getValue_elrtsm_k$(null, label$factory());
  }
  var label$delegate;
  function get_legend() {
    _init_properties_TagSelectors_kt__3okvom();
    return legend$delegate.getValue_elrtsm_k$(null, legend$factory());
  }
  var legend$delegate;
  function get_meter() {
    _init_properties_TagSelectors_kt__3okvom();
    return meter$delegate.getValue_elrtsm_k$(null, meter$factory());
  }
  var meter$delegate;
  function get_optgroup() {
    _init_properties_TagSelectors_kt__3okvom();
    return optgroup$delegate.getValue_elrtsm_k$(null, optgroup$factory());
  }
  var optgroup$delegate;
  function get_option() {
    _init_properties_TagSelectors_kt__3okvom();
    return option$delegate.getValue_elrtsm_k$(null, option$factory());
  }
  var option$delegate;
  function get_output() {
    _init_properties_TagSelectors_kt__3okvom();
    return output$delegate.getValue_elrtsm_k$(null, output$factory());
  }
  var output$delegate;
  function get_progress() {
    _init_properties_TagSelectors_kt__3okvom();
    return progress$delegate.getValue_elrtsm_k$(null, progress$factory());
  }
  var progress$delegate;
  function get_select() {
    _init_properties_TagSelectors_kt__3okvom();
    return select$delegate.getValue_elrtsm_k$(null, select$factory());
  }
  var select$delegate;
  function get_textarea() {
    _init_properties_TagSelectors_kt__3okvom();
    return textarea$delegate.getValue_elrtsm_k$(null, textarea$factory());
  }
  var textarea$delegate;
  function get_details() {
    _init_properties_TagSelectors_kt__3okvom();
    return details$delegate.getValue_elrtsm_k$(null, details$factory());
  }
  var details$delegate;
  function get_dialog() {
    _init_properties_TagSelectors_kt__3okvom();
    return dialog$delegate.getValue_elrtsm_k$(null, dialog$factory());
  }
  var dialog$delegate;
  function get_menu() {
    _init_properties_TagSelectors_kt__3okvom();
    return menu$delegate.getValue_elrtsm_k$(null, menu$factory());
  }
  var menu$delegate;
  function get_summary() {
    _init_properties_TagSelectors_kt__3okvom();
    return summary$delegate.getValue_elrtsm_k$(null, summary$factory());
  }
  var summary$delegate;
  function get_slot() {
    _init_properties_TagSelectors_kt__3okvom();
    return slot$delegate.getValue_elrtsm_k$(null, slot$factory());
  }
  var slot$delegate;
  function get_template() {
    _init_properties_TagSelectors_kt__3okvom();
    return template$delegate.getValue_elrtsm_k$(null, template$factory());
  }
  var template$delegate;
  function TagSelector(tagName) {
    this.tagName_1 = tagName;
  }
  protoOf(TagSelector).get_tagName_ocsgis_k$ = function () {
    return this.tagName_1;
  };
  function TagSelectorFactory() {
    TagSelectorFactory_instance = this;
  }
  protoOf(TagSelectorFactory).getValue_elrtsm_k$ = function (thisRef, property) {
    return new TagSelector(property.callableName);
  };
  var TagSelectorFactory_instance;
  function TagSelectorFactory_getInstance() {
    if (TagSelectorFactory_instance == null)
      new TagSelectorFactory();
    return TagSelectorFactory_instance;
  }
  function html$factory() {
    return getPropertyCallableRef('html', 0, KProperty0, function () {
      return get_html();
    }, null);
  }
  function base$factory() {
    return getPropertyCallableRef('base', 0, KProperty0, function () {
      return get_base();
    }, null);
  }
  function head$factory() {
    return getPropertyCallableRef('head', 0, KProperty0, function () {
      return get_head();
    }, null);
  }
  function link$factory() {
    return getPropertyCallableRef('link', 0, KProperty0, function () {
      return get_link();
    }, null);
  }
  function meta$factory() {
    return getPropertyCallableRef('meta', 0, KProperty0, function () {
      return get_meta();
    }, null);
  }
  function style$factory() {
    return getPropertyCallableRef('style', 0, KProperty0, function () {
      return get_style();
    }, null);
  }
  function title$factory() {
    return getPropertyCallableRef('title', 0, KProperty0, function () {
      return get_title();
    }, null);
  }
  function body$factory() {
    return getPropertyCallableRef('body', 0, KProperty0, function () {
      return get_body();
    }, null);
  }
  function address$factory() {
    return getPropertyCallableRef('address', 0, KProperty0, function () {
      return get_address();
    }, null);
  }
  function article$factory() {
    return getPropertyCallableRef('article', 0, KProperty0, function () {
      return get_article();
    }, null);
  }
  function aside$factory() {
    return getPropertyCallableRef('aside', 0, KProperty0, function () {
      return get_aside();
    }, null);
  }
  function footer$factory() {
    return getPropertyCallableRef('footer', 0, KProperty0, function () {
      return get_footer();
    }, null);
  }
  function header$factory() {
    return getPropertyCallableRef('header', 0, KProperty0, function () {
      return get_header();
    }, null);
  }
  function h1$factory() {
    return getPropertyCallableRef('h1', 0, KProperty0, function () {
      return get_h1();
    }, null);
  }
  function h2$factory() {
    return getPropertyCallableRef('h2', 0, KProperty0, function () {
      return get_h2();
    }, null);
  }
  function h3$factory() {
    return getPropertyCallableRef('h3', 0, KProperty0, function () {
      return get_h3();
    }, null);
  }
  function h4$factory() {
    return getPropertyCallableRef('h4', 0, KProperty0, function () {
      return get_h4();
    }, null);
  }
  function h5$factory() {
    return getPropertyCallableRef('h5', 0, KProperty0, function () {
      return get_h5();
    }, null);
  }
  function h6$factory() {
    return getPropertyCallableRef('h6', 0, KProperty0, function () {
      return get_h6();
    }, null);
  }
  function main$factory() {
    return getPropertyCallableRef('main', 0, KProperty0, function () {
      return get_main();
    }, null);
  }
  function nav$factory() {
    return getPropertyCallableRef('nav', 0, KProperty0, function () {
      return get_nav();
    }, null);
  }
  function section$factory() {
    return getPropertyCallableRef('section', 0, KProperty0, function () {
      return get_section();
    }, null);
  }
  function blockquote$factory() {
    return getPropertyCallableRef('blockquote', 0, KProperty0, function () {
      return get_blockquote();
    }, null);
  }
  function dd$factory() {
    return getPropertyCallableRef('dd', 0, KProperty0, function () {
      return get_dd();
    }, null);
  }
  function div$factory() {
    return getPropertyCallableRef('div', 0, KProperty0, function () {
      return get_div();
    }, null);
  }
  function dl$factory() {
    return getPropertyCallableRef('dl', 0, KProperty0, function () {
      return get_dl();
    }, null);
  }
  function dt$factory() {
    return getPropertyCallableRef('dt', 0, KProperty0, function () {
      return get_dt();
    }, null);
  }
  function figcaption$factory() {
    return getPropertyCallableRef('figcaption', 0, KProperty0, function () {
      return get_figcaption();
    }, null);
  }
  function figure$factory() {
    return getPropertyCallableRef('figure', 0, KProperty0, function () {
      return get_figure();
    }, null);
  }
  function hr$factory() {
    return getPropertyCallableRef('hr', 0, KProperty0, function () {
      return get_hr();
    }, null);
  }
  function li$factory() {
    return getPropertyCallableRef('li', 0, KProperty0, function () {
      return get_li();
    }, null);
  }
  function ol$factory() {
    return getPropertyCallableRef('ol', 0, KProperty0, function () {
      return get_ol();
    }, null);
  }
  function p$factory() {
    return getPropertyCallableRef('p', 0, KProperty0, function () {
      return get_p();
    }, null);
  }
  function pre$factory() {
    return getPropertyCallableRef('pre', 0, KProperty0, function () {
      return get_pre();
    }, null);
  }
  function ul$factory() {
    return getPropertyCallableRef('ul', 0, KProperty0, function () {
      return get_ul();
    }, null);
  }
  function a$factory() {
    return getPropertyCallableRef('a', 0, KProperty0, function () {
      return get_a();
    }, null);
  }
  function abbr$factory() {
    return getPropertyCallableRef('abbr', 0, KProperty0, function () {
      return get_abbr();
    }, null);
  }
  function b$factory() {
    return getPropertyCallableRef('b', 0, KProperty0, function () {
      return get_b();
    }, null);
  }
  function bdi$factory() {
    return getPropertyCallableRef('bdi', 0, KProperty0, function () {
      return get_bdi();
    }, null);
  }
  function bdo$factory() {
    return getPropertyCallableRef('bdo', 0, KProperty0, function () {
      return get_bdo();
    }, null);
  }
  function br$factory() {
    return getPropertyCallableRef('br', 0, KProperty0, function () {
      return get_br();
    }, null);
  }
  function cite$factory() {
    return getPropertyCallableRef('cite', 0, KProperty0, function () {
      return get_cite();
    }, null);
  }
  function code$factory() {
    return getPropertyCallableRef('code', 0, KProperty0, function () {
      return get_code();
    }, null);
  }
  function data$factory() {
    return getPropertyCallableRef('data', 0, KProperty0, function () {
      return get_data();
    }, null);
  }
  function dfn$factory() {
    return getPropertyCallableRef('dfn', 0, KProperty0, function () {
      return get_dfn();
    }, null);
  }
  function em$factory() {
    return getPropertyCallableRef('em', 0, KProperty0, function () {
      return get_em();
    }, null);
  }
  function i$factory() {
    return getPropertyCallableRef('i', 0, KProperty0, function () {
      return get_i();
    }, null);
  }
  function kbd$factory() {
    return getPropertyCallableRef('kbd', 0, KProperty0, function () {
      return get_kbd();
    }, null);
  }
  function mark$factory() {
    return getPropertyCallableRef('mark', 0, KProperty0, function () {
      return get_mark();
    }, null);
  }
  function q$factory() {
    return getPropertyCallableRef('q', 0, KProperty0, function () {
      return get_q();
    }, null);
  }
  function rb$factory() {
    return getPropertyCallableRef('rb', 0, KProperty0, function () {
      return get_rb();
    }, null);
  }
  function rp$factory() {
    return getPropertyCallableRef('rp', 0, KProperty0, function () {
      return get_rp();
    }, null);
  }
  function rt$factory() {
    return getPropertyCallableRef('rt', 0, KProperty0, function () {
      return get_rt();
    }, null);
  }
  function rtc$factory() {
    return getPropertyCallableRef('rtc', 0, KProperty0, function () {
      return get_rtc();
    }, null);
  }
  function ruby$factory() {
    return getPropertyCallableRef('ruby', 0, KProperty0, function () {
      return get_ruby();
    }, null);
  }
  function s$factory() {
    return getPropertyCallableRef('s', 0, KProperty0, function () {
      return get_s();
    }, null);
  }
  function samp$factory() {
    return getPropertyCallableRef('samp', 0, KProperty0, function () {
      return get_samp();
    }, null);
  }
  function small$factory() {
    return getPropertyCallableRef('small', 0, KProperty0, function () {
      return get_small();
    }, null);
  }
  function span$factory() {
    return getPropertyCallableRef('span', 0, KProperty0, function () {
      return get_span();
    }, null);
  }
  function strong$factory() {
    return getPropertyCallableRef('strong', 0, KProperty0, function () {
      return get_strong();
    }, null);
  }
  function sub$factory() {
    return getPropertyCallableRef('sub', 0, KProperty0, function () {
      return get_sub();
    }, null);
  }
  function sup$factory() {
    return getPropertyCallableRef('sup', 0, KProperty0, function () {
      return get_sup();
    }, null);
  }
  function time$factory() {
    return getPropertyCallableRef('time', 0, KProperty0, function () {
      return get_time();
    }, null);
  }
  function u$factory() {
    return getPropertyCallableRef('u', 0, KProperty0, function () {
      return get_u();
    }, null);
  }
  function wbr$factory() {
    return getPropertyCallableRef('wbr', 0, KProperty0, function () {
      return get_wbr();
    }, null);
  }
  function area$factory() {
    return getPropertyCallableRef('area', 0, KProperty0, function () {
      return get_area();
    }, null);
  }
  function audio$factory() {
    return getPropertyCallableRef('audio', 0, KProperty0, function () {
      return get_audio();
    }, null);
  }
  function img$factory() {
    return getPropertyCallableRef('img', 0, KProperty0, function () {
      return get_img();
    }, null);
  }
  function map$factory() {
    return getPropertyCallableRef('map', 0, KProperty0, function () {
      return get_map();
    }, null);
  }
  function track$factory() {
    return getPropertyCallableRef('track', 0, KProperty0, function () {
      return get_track();
    }, null);
  }
  function video$factory() {
    return getPropertyCallableRef('video', 0, KProperty0, function () {
      return get_video();
    }, null);
  }
  function embed$factory() {
    return getPropertyCallableRef('embed', 0, KProperty0, function () {
      return get_embed();
    }, null);
  }
  function iframe$factory() {
    return getPropertyCallableRef('iframe', 0, KProperty0, function () {
      return get_iframe();
    }, null);
  }
  function param$factory() {
    return getPropertyCallableRef('param', 0, KProperty0, function () {
      return get_param();
    }, null);
  }
  function picture$factory() {
    return getPropertyCallableRef('picture', 0, KProperty0, function () {
      return get_picture();
    }, null);
  }
  function portal$factory() {
    return getPropertyCallableRef('portal', 0, KProperty0, function () {
      return get_portal();
    }, null);
  }
  function source$factory() {
    return getPropertyCallableRef('source', 0, KProperty0, function () {
      return get_source();
    }, null);
  }
  function svg$factory() {
    return getPropertyCallableRef('svg', 0, KProperty0, function () {
      return get_svg();
    }, null);
  }
  function math$factory() {
    return getPropertyCallableRef('math', 0, KProperty0, function () {
      return get_math();
    }, null);
  }
  function canvas$factory() {
    return getPropertyCallableRef('canvas', 0, KProperty0, function () {
      return get_canvas();
    }, null);
  }
  function noscript$factory() {
    return getPropertyCallableRef('noscript', 0, KProperty0, function () {
      return get_noscript();
    }, null);
  }
  function script$factory() {
    return getPropertyCallableRef('script', 0, KProperty0, function () {
      return get_script();
    }, null);
  }
  function del$factory() {
    return getPropertyCallableRef('del', 0, KProperty0, function () {
      return get_del();
    }, null);
  }
  function ins$factory() {
    return getPropertyCallableRef('ins', 0, KProperty0, function () {
      return get_ins();
    }, null);
  }
  function caption$factory() {
    return getPropertyCallableRef('caption', 0, KProperty0, function () {
      return get_caption();
    }, null);
  }
  function col$factory() {
    return getPropertyCallableRef('col', 0, KProperty0, function () {
      return get_col();
    }, null);
  }
  function colgroup$factory() {
    return getPropertyCallableRef('colgroup', 0, KProperty0, function () {
      return get_colgroup();
    }, null);
  }
  function table$factory() {
    return getPropertyCallableRef('table', 0, KProperty0, function () {
      return get_table();
    }, null);
  }
  function tbody$factory() {
    return getPropertyCallableRef('tbody', 0, KProperty0, function () {
      return get_tbody();
    }, null);
  }
  function td$factory() {
    return getPropertyCallableRef('td', 0, KProperty0, function () {
      return get_td();
    }, null);
  }
  function tfoot$factory() {
    return getPropertyCallableRef('tfoot', 0, KProperty0, function () {
      return get_tfoot();
    }, null);
  }
  function th$factory() {
    return getPropertyCallableRef('th', 0, KProperty0, function () {
      return get_th();
    }, null);
  }
  function thead$factory() {
    return getPropertyCallableRef('thead', 0, KProperty0, function () {
      return get_thead();
    }, null);
  }
  function tr$factory() {
    return getPropertyCallableRef('tr', 0, KProperty0, function () {
      return get_tr();
    }, null);
  }
  function button$factory() {
    return getPropertyCallableRef('button', 0, KProperty0, function () {
      return get_button();
    }, null);
  }
  function datalist$factory() {
    return getPropertyCallableRef('datalist', 0, KProperty0, function () {
      return get_datalist();
    }, null);
  }
  function fieldset$factory() {
    return getPropertyCallableRef('fieldset', 0, KProperty0, function () {
      return get_fieldset();
    }, null);
  }
  function form$factory() {
    return getPropertyCallableRef('form', 0, KProperty0, function () {
      return get_form();
    }, null);
  }
  function input$factory() {
    return getPropertyCallableRef('input', 0, KProperty0, function () {
      return get_input();
    }, null);
  }
  function label$factory() {
    return getPropertyCallableRef('label', 0, KProperty0, function () {
      return get_label();
    }, null);
  }
  function legend$factory() {
    return getPropertyCallableRef('legend', 0, KProperty0, function () {
      return get_legend();
    }, null);
  }
  function meter$factory() {
    return getPropertyCallableRef('meter', 0, KProperty0, function () {
      return get_meter();
    }, null);
  }
  function optgroup$factory() {
    return getPropertyCallableRef('optgroup', 0, KProperty0, function () {
      return get_optgroup();
    }, null);
  }
  function option$factory() {
    return getPropertyCallableRef('option', 0, KProperty0, function () {
      return get_option();
    }, null);
  }
  function output$factory() {
    return getPropertyCallableRef('output', 0, KProperty0, function () {
      return get_output();
    }, null);
  }
  function progress$factory() {
    return getPropertyCallableRef('progress', 0, KProperty0, function () {
      return get_progress();
    }, null);
  }
  function select$factory() {
    return getPropertyCallableRef('select', 0, KProperty0, function () {
      return get_select();
    }, null);
  }
  function textarea$factory() {
    return getPropertyCallableRef('textarea', 0, KProperty0, function () {
      return get_textarea();
    }, null);
  }
  function details$factory() {
    return getPropertyCallableRef('details', 0, KProperty0, function () {
      return get_details();
    }, null);
  }
  function dialog$factory() {
    return getPropertyCallableRef('dialog', 0, KProperty0, function () {
      return get_dialog();
    }, null);
  }
  function menu$factory() {
    return getPropertyCallableRef('menu', 0, KProperty0, function () {
      return get_menu();
    }, null);
  }
  function summary$factory() {
    return getPropertyCallableRef('summary', 0, KProperty0, function () {
      return get_summary();
    }, null);
  }
  function slot$factory() {
    return getPropertyCallableRef('slot', 0, KProperty0, function () {
      return get_slot();
    }, null);
  }
  function template$factory() {
    return getPropertyCallableRef('template', 0, KProperty0, function () {
      return get_template();
    }, null);
  }
  var properties_initialized_TagSelectors_kt_x5yx30;
  function _init_properties_TagSelectors_kt__3okvom() {
    if (properties_initialized_TagSelectors_kt_x5yx30) {
    } else {
      properties_initialized_TagSelectors_kt_x5yx30 = true;
      html$delegate = TagSelectorFactory_getInstance();
      base$delegate = TagSelectorFactory_getInstance();
      head$delegate = TagSelectorFactory_getInstance();
      link$delegate = TagSelectorFactory_getInstance();
      meta$delegate = TagSelectorFactory_getInstance();
      style$delegate = TagSelectorFactory_getInstance();
      title$delegate = TagSelectorFactory_getInstance();
      body$delegate = TagSelectorFactory_getInstance();
      address$delegate = TagSelectorFactory_getInstance();
      article$delegate = TagSelectorFactory_getInstance();
      aside$delegate = TagSelectorFactory_getInstance();
      footer$delegate = TagSelectorFactory_getInstance();
      header$delegate = TagSelectorFactory_getInstance();
      h1$delegate = TagSelectorFactory_getInstance();
      h2$delegate = TagSelectorFactory_getInstance();
      h3$delegate = TagSelectorFactory_getInstance();
      h4$delegate = TagSelectorFactory_getInstance();
      h5$delegate = TagSelectorFactory_getInstance();
      h6$delegate = TagSelectorFactory_getInstance();
      main$delegate = TagSelectorFactory_getInstance();
      nav$delegate = TagSelectorFactory_getInstance();
      section$delegate = TagSelectorFactory_getInstance();
      blockquote$delegate = TagSelectorFactory_getInstance();
      dd$delegate = TagSelectorFactory_getInstance();
      div$delegate = TagSelectorFactory_getInstance();
      dl$delegate = TagSelectorFactory_getInstance();
      dt$delegate = TagSelectorFactory_getInstance();
      figcaption$delegate = TagSelectorFactory_getInstance();
      figure$delegate = TagSelectorFactory_getInstance();
      hr$delegate = TagSelectorFactory_getInstance();
      li$delegate = TagSelectorFactory_getInstance();
      ol$delegate = TagSelectorFactory_getInstance();
      p$delegate = TagSelectorFactory_getInstance();
      pre$delegate = TagSelectorFactory_getInstance();
      ul$delegate = TagSelectorFactory_getInstance();
      a$delegate = TagSelectorFactory_getInstance();
      abbr$delegate = TagSelectorFactory_getInstance();
      b$delegate = TagSelectorFactory_getInstance();
      bdi$delegate = TagSelectorFactory_getInstance();
      bdo$delegate = TagSelectorFactory_getInstance();
      br$delegate = TagSelectorFactory_getInstance();
      cite$delegate = TagSelectorFactory_getInstance();
      code$delegate = TagSelectorFactory_getInstance();
      data$delegate = TagSelectorFactory_getInstance();
      dfn$delegate = TagSelectorFactory_getInstance();
      em$delegate = TagSelectorFactory_getInstance();
      i$delegate = TagSelectorFactory_getInstance();
      kbd$delegate = TagSelectorFactory_getInstance();
      mark$delegate = TagSelectorFactory_getInstance();
      q$delegate = TagSelectorFactory_getInstance();
      rb$delegate = TagSelectorFactory_getInstance();
      rp$delegate = TagSelectorFactory_getInstance();
      rt$delegate = TagSelectorFactory_getInstance();
      rtc$delegate = TagSelectorFactory_getInstance();
      ruby$delegate = TagSelectorFactory_getInstance();
      s$delegate = TagSelectorFactory_getInstance();
      samp$delegate = TagSelectorFactory_getInstance();
      small$delegate = TagSelectorFactory_getInstance();
      span$delegate = TagSelectorFactory_getInstance();
      strong$delegate = TagSelectorFactory_getInstance();
      sub$delegate = TagSelectorFactory_getInstance();
      sup$delegate = TagSelectorFactory_getInstance();
      time$delegate = TagSelectorFactory_getInstance();
      u$delegate = TagSelectorFactory_getInstance();
      wbr$delegate = TagSelectorFactory_getInstance();
      area$delegate = TagSelectorFactory_getInstance();
      audio$delegate = TagSelectorFactory_getInstance();
      img$delegate = TagSelectorFactory_getInstance();
      map$delegate = TagSelectorFactory_getInstance();
      track$delegate = TagSelectorFactory_getInstance();
      video$delegate = TagSelectorFactory_getInstance();
      embed$delegate = TagSelectorFactory_getInstance();
      iframe$delegate = TagSelectorFactory_getInstance();
      param$delegate = TagSelectorFactory_getInstance();
      picture$delegate = TagSelectorFactory_getInstance();
      portal$delegate = TagSelectorFactory_getInstance();
      source$delegate = TagSelectorFactory_getInstance();
      svg$delegate = TagSelectorFactory_getInstance();
      math$delegate = TagSelectorFactory_getInstance();
      canvas$delegate = TagSelectorFactory_getInstance();
      noscript$delegate = TagSelectorFactory_getInstance();
      script$delegate = TagSelectorFactory_getInstance();
      del$delegate = TagSelectorFactory_getInstance();
      ins$delegate = TagSelectorFactory_getInstance();
      caption$delegate = TagSelectorFactory_getInstance();
      col$delegate = TagSelectorFactory_getInstance();
      colgroup$delegate = TagSelectorFactory_getInstance();
      table$delegate = TagSelectorFactory_getInstance();
      tbody$delegate = TagSelectorFactory_getInstance();
      td$delegate = TagSelectorFactory_getInstance();
      tfoot$delegate = TagSelectorFactory_getInstance();
      th$delegate = TagSelectorFactory_getInstance();
      thead$delegate = TagSelectorFactory_getInstance();
      tr$delegate = TagSelectorFactory_getInstance();
      button$delegate = TagSelectorFactory_getInstance();
      datalist$delegate = TagSelectorFactory_getInstance();
      fieldset$delegate = TagSelectorFactory_getInstance();
      form$delegate = TagSelectorFactory_getInstance();
      input$delegate = TagSelectorFactory_getInstance();
      label$delegate = TagSelectorFactory_getInstance();
      legend$delegate = TagSelectorFactory_getInstance();
      meter$delegate = TagSelectorFactory_getInstance();
      optgroup$delegate = TagSelectorFactory_getInstance();
      option$delegate = TagSelectorFactory_getInstance();
      output$delegate = TagSelectorFactory_getInstance();
      progress$delegate = TagSelectorFactory_getInstance();
      select$delegate = TagSelectorFactory_getInstance();
      textarea$delegate = TagSelectorFactory_getInstance();
      details$delegate = TagSelectorFactory_getInstance();
      dialog$delegate = TagSelectorFactory_getInstance();
      menu$delegate = TagSelectorFactory_getInstance();
      summary$delegate = TagSelectorFactory_getInstance();
      slot$delegate = TagSelectorFactory_getInstance();
      template$delegate = TagSelectorFactory_getInstance();
    }
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.none_1 = new Animations();
  }
  protoOf(Companion_19).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Animations() {
    Companion_getInstance_19();
    StyleList.call(this, ', ');
  }
  var AnimationDirection_initial_instance;
  var AnimationDirection_inherit_instance;
  var AnimationDirection_unset_instance;
  var AnimationDirection_normal_instance;
  var AnimationDirection_reverse_instance;
  var AnimationDirection_alternate_instance;
  var AnimationDirection_alternateReverse_instance;
  function values_41() {
    return [AnimationDirection_initial_getInstance(), AnimationDirection_inherit_getInstance(), AnimationDirection_unset_getInstance(), AnimationDirection_normal_getInstance(), AnimationDirection_reverse_getInstance(), AnimationDirection_alternate_getInstance(), AnimationDirection_alternateReverse_getInstance()];
  }
  function valueOf_41(value) {
    switch (value) {
      case 'initial':
        return AnimationDirection_initial_getInstance();
      case 'inherit':
        return AnimationDirection_inherit_getInstance();
      case 'unset':
        return AnimationDirection_unset_getInstance();
      case 'normal':
        return AnimationDirection_normal_getInstance();
      case 'reverse':
        return AnimationDirection_reverse_getInstance();
      case 'alternate':
        return AnimationDirection_alternate_getInstance();
      case 'alternateReverse':
        return AnimationDirection_alternateReverse_getInstance();
      default:
        AnimationDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  var AnimationDirection_entriesInitialized;
  function AnimationDirection_initEntries() {
    if (AnimationDirection_entriesInitialized)
      return Unit_getInstance();
    AnimationDirection_entriesInitialized = true;
    AnimationDirection_initial_instance = new AnimationDirection('initial', 0);
    AnimationDirection_inherit_instance = new AnimationDirection('inherit', 1);
    AnimationDirection_unset_instance = new AnimationDirection('unset', 2);
    AnimationDirection_normal_instance = new AnimationDirection('normal', 3);
    AnimationDirection_reverse_instance = new AnimationDirection('reverse', 4);
    AnimationDirection_alternate_instance = new AnimationDirection('alternate', 5);
    AnimationDirection_alternateReverse_instance = new AnimationDirection('alternateReverse', 6);
  }
  function AnimationDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(AnimationDirection).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var FillMode_initial_instance;
  var FillMode_inherit_instance;
  var FillMode_unset_instance;
  var FillMode_none_instance;
  var FillMode_forwards_instance;
  var FillMode_backwards_instance;
  var FillMode_both_instance;
  function values_42() {
    return [FillMode_initial_getInstance(), FillMode_inherit_getInstance(), FillMode_unset_getInstance(), FillMode_none_getInstance(), FillMode_forwards_getInstance(), FillMode_backwards_getInstance(), FillMode_both_getInstance()];
  }
  function valueOf_42(value) {
    switch (value) {
      case 'initial':
        return FillMode_initial_getInstance();
      case 'inherit':
        return FillMode_inherit_getInstance();
      case 'unset':
        return FillMode_unset_getInstance();
      case 'none':
        return FillMode_none_getInstance();
      case 'forwards':
        return FillMode_forwards_getInstance();
      case 'backwards':
        return FillMode_backwards_getInstance();
      case 'both':
        return FillMode_both_getInstance();
      default:
        FillMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var FillMode_entriesInitialized;
  function FillMode_initEntries() {
    if (FillMode_entriesInitialized)
      return Unit_getInstance();
    FillMode_entriesInitialized = true;
    FillMode_initial_instance = new FillMode('initial', 0);
    FillMode_inherit_instance = new FillMode('inherit', 1);
    FillMode_unset_instance = new FillMode('unset', 2);
    FillMode_none_instance = new FillMode('none', 3);
    FillMode_forwards_instance = new FillMode('forwards', 4);
    FillMode_backwards_instance = new FillMode('backwards', 5);
    FillMode_both_instance = new FillMode('both', 6);
  }
  function FillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(FillMode).toString = function () {
    return this.get_name_woqyms_k$();
  };
  var PlayState_initial_instance;
  var PlayState_inherit_instance;
  var PlayState_unset_instance;
  var PlayState_running_instance;
  var PlayState_paused_instance;
  function values_43() {
    return [PlayState_initial_getInstance(), PlayState_inherit_getInstance(), PlayState_unset_getInstance(), PlayState_running_getInstance(), PlayState_paused_getInstance()];
  }
  function valueOf_43(value) {
    switch (value) {
      case 'initial':
        return PlayState_initial_getInstance();
      case 'inherit':
        return PlayState_inherit_getInstance();
      case 'unset':
        return PlayState_unset_getInstance();
      case 'running':
        return PlayState_running_getInstance();
      case 'paused':
        return PlayState_paused_getInstance();
      default:
        PlayState_initEntries();
        THROW_ISE();
        break;
    }
  }
  var PlayState_entriesInitialized;
  function PlayState_initEntries() {
    if (PlayState_entriesInitialized)
      return Unit_getInstance();
    PlayState_entriesInitialized = true;
    PlayState_initial_instance = new PlayState('initial', 0);
    PlayState_inherit_instance = new PlayState('inherit', 1);
    PlayState_unset_instance = new PlayState('unset', 2);
    PlayState_running_instance = new PlayState('running', 3);
    PlayState_paused_instance = new PlayState('paused', 4);
  }
  function PlayState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(PlayState).toString = function () {
    return this.get_name_woqyms_k$();
  };
  function _get_timing__g2fkld($this) {
    return $this.timing_1;
  }
  function _get_delay__ikpy6q($this) {
    return $this.delay_1;
  }
  function _get_iterationCount__mfgj53($this) {
    return $this.iterationCount_1;
  }
  function _get_direction__hwzary($this) {
    return $this.direction_1;
  }
  function _get_fillMode__5rw4p1($this) {
    return $this.fillMode_1;
  }
  function _get_playState__4jpyyc($this) {
    return $this.playState_1;
  }
  function Animation(duration, timing, delay, iterationCount, direction, fillMode, playState, name) {
    this.duration_1 = duration;
    this.timing_1 = timing;
    this.delay_1 = delay;
    this.iterationCount_1 = iterationCount;
    this.direction_1 = direction;
    this.fillMode_1 = fillMode;
    this.playState_1 = playState;
    this.name_1 = name;
  }
  protoOf(Animation).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(Animation).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Animation).toString = function () {
    return '' + this.duration_1 + ' ' + this.timing_1 + ' ' + this.delay_1 + ' ' + this.iterationCount_1 + ' ' + this.direction_1 + ' ' + this.fillMode_1 + ' ' + this.playState_1 + ' ' + this.name_1;
  };
  function Companion_20() {
    Companion_instance_20 = this;
    this.infinite_1 = new IterationCount('infinite');
  }
  protoOf(Companion_20).get_infinite_sxu1b7_k$ = function () {
    return this.infinite_1;
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function IterationCount(value) {
    Companion_getInstance_20();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(IterationCount).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function AnimationDirection_initial_getInstance() {
    AnimationDirection_initEntries();
    return AnimationDirection_initial_instance;
  }
  function AnimationDirection_inherit_getInstance() {
    AnimationDirection_initEntries();
    return AnimationDirection_inherit_instance;
  }
  function AnimationDirection_unset_getInstance() {
    AnimationDirection_initEntries();
    return AnimationDirection_unset_instance;
  }
  function AnimationDirection_normal_getInstance() {
    AnimationDirection_initEntries();
    return AnimationDirection_normal_instance;
  }
  function AnimationDirection_reverse_getInstance() {
    AnimationDirection_initEntries();
    return AnimationDirection_reverse_instance;
  }
  function AnimationDirection_alternate_getInstance() {
    AnimationDirection_initEntries();
    return AnimationDirection_alternate_instance;
  }
  function AnimationDirection_alternateReverse_getInstance() {
    AnimationDirection_initEntries();
    return AnimationDirection_alternateReverse_instance;
  }
  function FillMode_initial_getInstance() {
    FillMode_initEntries();
    return FillMode_initial_instance;
  }
  function FillMode_inherit_getInstance() {
    FillMode_initEntries();
    return FillMode_inherit_instance;
  }
  function FillMode_unset_getInstance() {
    FillMode_initEntries();
    return FillMode_unset_instance;
  }
  function FillMode_none_getInstance() {
    FillMode_initEntries();
    return FillMode_none_instance;
  }
  function FillMode_forwards_getInstance() {
    FillMode_initEntries();
    return FillMode_forwards_instance;
  }
  function FillMode_backwards_getInstance() {
    FillMode_initEntries();
    return FillMode_backwards_instance;
  }
  function FillMode_both_getInstance() {
    FillMode_initEntries();
    return FillMode_both_instance;
  }
  function PlayState_initial_getInstance() {
    PlayState_initEntries();
    return PlayState_initial_instance;
  }
  function PlayState_inherit_getInstance() {
    PlayState_initEntries();
    return PlayState_inherit_instance;
  }
  function PlayState_unset_getInstance() {
    PlayState_initEntries();
    return PlayState_unset_instance;
  }
  function PlayState_running_getInstance() {
    PlayState_initEntries();
    return PlayState_running_instance;
  }
  function PlayState_paused_getInstance() {
    PlayState_initEntries();
    return PlayState_paused_instance;
  }
  function AspectRatio_init_$Init$(ratio, $this) {
    AspectRatio.call($this, toString(ratio));
    return $this;
  }
  function AspectRatio_init_$Create$(ratio) {
    return AspectRatio_init_$Init$(ratio, objectCreate(protoOf(AspectRatio)));
  }
  function AspectRatio_init_$Init$_0(widthRatio, heightRatio, $this) {
    AspectRatio.call($this, toString(widthRatio) + ' / ' + toString(heightRatio));
    return $this;
  }
  function AspectRatio_init_$Create$_0(widthRatio, heightRatio) {
    return AspectRatio_init_$Init$_0(widthRatio, heightRatio, objectCreate(protoOf(AspectRatio)));
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.inherit_1 = new AspectRatio('inherit');
    this.initial_1 = new AspectRatio('initial');
    this.revert_1 = new AspectRatio('revert');
    this.revertLayer_1 = new AspectRatio('revert-layer');
    this.unset_1 = new AspectRatio('unset');
    this.auto_1 = new AspectRatio('auto');
  }
  protoOf(Companion_21).get_inherit_xgqhw2_k$ = function () {
    return this.inherit_1;
  };
  protoOf(Companion_21).get_initial_xhjoez_k$ = function () {
    return this.initial_1;
  };
  protoOf(Companion_21).get_revert_iyhqlp_k$ = function () {
    return this.revert_1;
  };
  protoOf(Companion_21).get_revertLayer_vvlrj0_k$ = function () {
    return this.revertLayer_1;
  };
  protoOf(Companion_21).get_unset_izq1hc_k$ = function () {
    return this.unset_1;
  };
  protoOf(Companion_21).get_auto_woj2t4_k$ = function () {
    return this.auto_1;
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function AspectRatio(value) {
    Companion_getInstance_21();
    CssValue.call(this, value);
  }
  function Companion_22() {
    Companion_instance_22 = this;
    this.none_1 = new BoxShadows();
  }
  protoOf(Companion_22).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function BoxShadows() {
    Companion_getInstance_22();
    StyleList.call(this, ', ');
  }
  function _set_inset__fypbd4($this, _set____db54di) {
    $this.inset_1 = _set____db54di;
  }
  function _get_inset__g2f54c($this) {
    return $this.inset_1;
  }
  function _set_offsetX__mr7chs($this, _set____db54di) {
    $this.offsetX_1 = _set____db54di;
  }
  function _get_offsetX__mnof4c($this) {
    return $this.offsetX_1;
  }
  function _set_offsetY__mr7cgx($this, _set____db54di) {
    $this.offsetY_1 = _set____db54di;
  }
  function _get_offsetY__mnof57($this) {
    return $this.offsetY_1;
  }
  function _set_blurRadius__wzofdq($this, _set____db54di) {
    $this.blurRadius_1 = _set____db54di;
  }
  function _get_blurRadius__hxfu8i($this) {
    return $this.blurRadius_1;
  }
  function _set_spreadRadius__k69yqa($this, _set____db54di) {
    $this.spreadRadius_1 = _set____db54di;
  }
  function _get_spreadRadius__zb3coq($this) {
    return $this.spreadRadius_1;
  }
  function BoxShadow(inset, offsetX, offsetY, blurRadius, spreadRadius, color) {
    this.inset_1 = inset;
    this.offsetX_1 = offsetX;
    this.offsetY_1 = offsetY;
    this.blurRadius_1 = blurRadius;
    this.spreadRadius_1 = spreadRadius;
    this.color_1 = color;
  }
  protoOf(BoxShadow).set_color_b7lvxz_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(BoxShadow).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(BoxShadow).toString = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.css.properties.BoxShadow.toString.<anonymous>' call
    if (this.inset_1) {
      tmp0_apply.append_ssq29y_k$('inset ');
    }
    tmp0_apply.append_ssq29y_k$('' + this.offsetX_1 + ' ' + this.offsetY_1 + ' ' + this.blurRadius_1 + ' ' + this.spreadRadius_1 + ' ' + this.color_1);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  function Companion_23() {
    Companion_instance_23 = this;
    this.normal_1 = new LineHeight('normal');
    this.initial_1 = new LineHeight('initial');
    this.inherit_1 = new LineHeight('inherit');
  }
  protoOf(Companion_23).get_normal_h7qsj4_k$ = function () {
    return this.normal_1;
  };
  protoOf(Companion_23).get_initial_xhjoez_k$ = function () {
    return this.initial_1;
  };
  protoOf(Companion_23).get_inherit_xgqhw2_k$ = function () {
    return this.inherit_1;
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function LineHeight(value) {
    Companion_getInstance_23();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(LineHeight).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function _get_lines__eq4fv2($this) {
    return $this.lines_1;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.setOf' call
    tmp$ret$0 = emptySet();
    tmp.none_1 = new TextDecoration(tmp$ret$0);
  }
  protoOf(Companion_24).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function TextDecoration(lines, style, color) {
    Companion_getInstance_24();
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    this.lines_1 = lines;
    this.style_1 = style;
    this.color_1 = color;
  }
  protoOf(TextDecoration).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(TextDecoration).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(TextDecoration).toString = function () {
    var tmp;
    if (this.lines_1.isEmpty_y1axqb_k$()) {
      tmp = 'none';
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.css.properties.TextDecoration.toString.<anonymous>' call
      tmp0_apply.append_ssq29y_k$(joinToString_0(this.lines_1, ' '));
      var tmp0_safe_receiver = this.style_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'kotlinx.css.properties.TextDecoration.toString.<anonymous>.<anonymous>' call
        tmp$ret$0 = tmp0_apply.append_ssq29y_k$(' ' + tmp0_safe_receiver);
        tmp$ret$1 = tmp$ret$0;
      }
      var tmp1_safe_receiver = this.color_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_apply.append_ssq29y_k$(' ' + tmp1_safe_receiver);
        tmp$ret$2 = Unit_getInstance();
      }
      tmp$ret$3 = tmp0_apply;
      tmp$ret$4 = tmp$ret$3.toString();
      tmp = tmp$ret$4;
    }
    return tmp;
  };
  var TextDecorationLine_initial_instance;
  var TextDecorationLine_inherit_instance;
  var TextDecorationLine_unset_instance;
  var TextDecorationLine_underline_instance;
  var TextDecorationLine_overline_instance;
  var TextDecorationLine_lineThrough_instance;
  function values_44() {
    return [TextDecorationLine_initial_getInstance(), TextDecorationLine_inherit_getInstance(), TextDecorationLine_unset_getInstance(), TextDecorationLine_underline_getInstance(), TextDecorationLine_overline_getInstance(), TextDecorationLine_lineThrough_getInstance()];
  }
  function valueOf_44(value) {
    switch (value) {
      case 'initial':
        return TextDecorationLine_initial_getInstance();
      case 'inherit':
        return TextDecorationLine_inherit_getInstance();
      case 'unset':
        return TextDecorationLine_unset_getInstance();
      case 'underline':
        return TextDecorationLine_underline_getInstance();
      case 'overline':
        return TextDecorationLine_overline_getInstance();
      case 'lineThrough':
        return TextDecorationLine_lineThrough_getInstance();
      default:
        TextDecorationLine_initEntries();
        THROW_ISE();
        break;
    }
  }
  var TextDecorationLine_entriesInitialized;
  function TextDecorationLine_initEntries() {
    if (TextDecorationLine_entriesInitialized)
      return Unit_getInstance();
    TextDecorationLine_entriesInitialized = true;
    TextDecorationLine_initial_instance = new TextDecorationLine('initial', 0);
    TextDecorationLine_inherit_instance = new TextDecorationLine('inherit', 1);
    TextDecorationLine_unset_instance = new TextDecorationLine('unset', 2);
    TextDecorationLine_underline_instance = new TextDecorationLine('underline', 3);
    TextDecorationLine_overline_instance = new TextDecorationLine('overline', 4);
    TextDecorationLine_lineThrough_instance = new TextDecorationLine('lineThrough', 5);
  }
  function TextDecorationLine(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(TextDecorationLine).toString = function () {
    return hyphenize(this.get_name_woqyms_k$());
  };
  var TextDecorationStyle_initial_instance;
  var TextDecorationStyle_inherit_instance;
  var TextDecorationStyle_unset_instance;
  var TextDecorationStyle_solid_instance;
  var TextDecorationStyle_double_instance;
  var TextDecorationStyle_dotted_instance;
  var TextDecorationStyle_dashed_instance;
  var TextDecorationStyle_wavy_instance;
  function values_45() {
    return [TextDecorationStyle_initial_getInstance(), TextDecorationStyle_inherit_getInstance(), TextDecorationStyle_unset_getInstance(), TextDecorationStyle_solid_getInstance(), TextDecorationStyle_double_getInstance(), TextDecorationStyle_dotted_getInstance(), TextDecorationStyle_dashed_getInstance(), TextDecorationStyle_wavy_getInstance()];
  }
  function valueOf_45(value) {
    switch (value) {
      case 'initial':
        return TextDecorationStyle_initial_getInstance();
      case 'inherit':
        return TextDecorationStyle_inherit_getInstance();
      case 'unset':
        return TextDecorationStyle_unset_getInstance();
      case 'solid':
        return TextDecorationStyle_solid_getInstance();
      case 'double':
        return TextDecorationStyle_double_getInstance();
      case 'dotted':
        return TextDecorationStyle_dotted_getInstance();
      case 'dashed':
        return TextDecorationStyle_dashed_getInstance();
      case 'wavy':
        return TextDecorationStyle_wavy_getInstance();
      default:
        TextDecorationStyle_initEntries();
        THROW_ISE();
        break;
    }
  }
  var TextDecorationStyle_entriesInitialized;
  function TextDecorationStyle_initEntries() {
    if (TextDecorationStyle_entriesInitialized)
      return Unit_getInstance();
    TextDecorationStyle_entriesInitialized = true;
    TextDecorationStyle_initial_instance = new TextDecorationStyle('initial', 0);
    TextDecorationStyle_inherit_instance = new TextDecorationStyle('inherit', 1);
    TextDecorationStyle_unset_instance = new TextDecorationStyle('unset', 2);
    TextDecorationStyle_solid_instance = new TextDecorationStyle('solid', 3);
    TextDecorationStyle_double_instance = new TextDecorationStyle('double', 4);
    TextDecorationStyle_dotted_instance = new TextDecorationStyle('dotted', 5);
    TextDecorationStyle_dashed_instance = new TextDecorationStyle('dashed', 6);
    TextDecorationStyle_wavy_instance = new TextDecorationStyle('wavy', 7);
  }
  function TextDecorationStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(TextDecorationStyle).toString = function () {
    return this.get_name_woqyms_k$();
  };
  function TextDecorationLine_initial_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_initial_instance;
  }
  function TextDecorationLine_inherit_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_inherit_instance;
  }
  function TextDecorationLine_unset_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_unset_instance;
  }
  function TextDecorationLine_underline_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_underline_instance;
  }
  function TextDecorationLine_overline_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_overline_instance;
  }
  function TextDecorationLine_lineThrough_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_lineThrough_instance;
  }
  function TextDecorationStyle_initial_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_initial_instance;
  }
  function TextDecorationStyle_inherit_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_inherit_instance;
  }
  function TextDecorationStyle_unset_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_unset_instance;
  }
  function TextDecorationStyle_solid_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_solid_instance;
  }
  function TextDecorationStyle_double_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_double_instance;
  }
  function TextDecorationStyle_dotted_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_dotted_instance;
  }
  function TextDecorationStyle_dashed_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_dashed_instance;
  }
  function TextDecorationStyle_wavy_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_wavy_instance;
  }
  function Time(value) {
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(Time).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function Companion_25() {
    Companion_instance_25 = this;
    this.ease_1 = new Timing('ease');
    this.linear_1 = new Timing('linear');
    this.easeIn_1 = new Timing('ease-in');
    this.easeOut_1 = new Timing('ease-out');
    this.easeInOut_1 = new Timing('ease-in-out');
    this.stepStart_1 = new Timing('step-start');
    this.stepEnd_1 = new Timing('step-end');
    this.materialStandard_1 = cubicBezier(0.4, 0.0, 0.2, 1.0);
    this.materialDeceleration_1 = cubicBezier(0.0, 0.0, 0.2, 1.0);
    this.materialAcceleration_1 = cubicBezier(0.4, 0.0, 1.0, 1.0);
    this.materialSharp_1 = cubicBezier(0.4, 0.0, 0.6, 1.0);
  }
  protoOf(Companion_25).get_ease_wol7w7_k$ = function () {
    return this.ease_1;
  };
  protoOf(Companion_25).get_linear_g6a2b2_k$ = function () {
    return this.linear_1;
  };
  protoOf(Companion_25).get_easeIn_cqnj5o_k$ = function () {
    return this.easeIn_1;
  };
  protoOf(Companion_25).get_easeOut_v8ep9l_k$ = function () {
    return this.easeOut_1;
  };
  protoOf(Companion_25).get_easeInOut_uiqtpu_k$ = function () {
    return this.easeInOut_1;
  };
  protoOf(Companion_25).get_stepStart_ukpl59_k$ = function () {
    return this.stepStart_1;
  };
  protoOf(Companion_25).get_stepEnd_u1udmi_k$ = function () {
    return this.stepEnd_1;
  };
  protoOf(Companion_25).get_materialStandard_dpbwab_k$ = function () {
    return this.materialStandard_1;
  };
  protoOf(Companion_25).get_materialDeceleration_y5yib3_k$ = function () {
    return this.materialDeceleration_1;
  };
  protoOf(Companion_25).get_materialAcceleration_g606ts_k$ = function () {
    return this.materialAcceleration_1;
  };
  protoOf(Companion_25).get_materialSharp_kepx5y_k$ = function () {
    return this.materialSharp_1;
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Timing(value) {
    Companion_getInstance_25();
    CssValue.call(this, value);
    this.value_2 = value;
  }
  protoOf(Timing).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  function cubicBezier(x1, y1, x2, y2) {
    return new Timing('cubic-bezier(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ')');
  }
  function Companion_26() {
    Companion_instance_26 = this;
    this.none_1 = new Transforms();
  }
  protoOf(Companion_26).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Transforms() {
    Companion_getInstance_26();
    StyleList.call(this, ' ');
  }
  function _get_args__d3xjpq($this) {
    return $this.args_1;
  }
  function Transform(name, args) {
    this.name_1 = name;
    this.args_1 = args;
  }
  protoOf(Transform).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Transform).toString = function () {
    return this.name_1 + '(' + joinToString(this.args_1, ', ') + ')';
  };
  function Companion_27() {
    Companion_instance_27 = this;
    this.none_1 = new Transitions();
  }
  protoOf(Companion_27).get_none_wor91d_k$ = function () {
    return this.none_1;
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function Transitions() {
    Companion_getInstance_27();
    StyleList.call(this, ', ');
  }
  function _get_timing__g2fkld_0($this) {
    return $this.timing_1;
  }
  function _get_delay__ikpy6q_0($this) {
    return $this.delay_1;
  }
  function Transition(property, duration, timing, delay) {
    this.property_1 = property;
    this.duration_1 = duration;
    this.timing_1 = timing;
    this.delay_1 = delay;
  }
  protoOf(Transition).get_property_msvula_k$ = function () {
    return this.property_1;
  };
  protoOf(Transition).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(Transition).toString = function () {
    return this.property_1 + ' ' + this.duration_1 + ' ' + this.timing_1 + ' ' + this.delay_1;
  };
  //region block: init
  ZERO = '0';
  //endregion
  return _;
}));
