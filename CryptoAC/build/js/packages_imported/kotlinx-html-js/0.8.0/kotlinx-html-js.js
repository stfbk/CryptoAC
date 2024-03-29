(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-html-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-html-js'.");
    }
    root['kotlinx-html-js'] = factory(typeof this['kotlinx-html-js'] === 'undefined' ? {} : this['kotlinx-html-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var equals = Kotlin.equals;
  var Map = Kotlin.kotlin.collections.Map;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var Throwable = Error;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var throwCCE = Kotlin.throwCCE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_1 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var unboxChar = Kotlin.unboxChar;
  var maxOrNull = Kotlin.kotlin.collections.maxOrNull_exjks8$;
  var toChar = Kotlin.toChar;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Array_0 = Array;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var toString = Kotlin.toString;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  StringAttribute.prototype = Object.create(Attribute.prototype);
  StringAttribute.prototype.constructor = StringAttribute;
  BooleanAttribute.prototype = Object.create(Attribute.prototype);
  BooleanAttribute.prototype.constructor = BooleanAttribute;
  TickerAttribute.prototype = Object.create(Attribute.prototype);
  TickerAttribute.prototype.constructor = TickerAttribute;
  EnumAttribute.prototype = Object.create(Attribute.prototype);
  EnumAttribute.prototype.constructor = EnumAttribute;
  StringSetAttribute.prototype = Object.create(Attribute.prototype);
  StringSetAttribute.prototype.constructor = StringSetAttribute;
  PredicateResult.prototype = Object.create(Enum.prototype);
  PredicateResult.prototype.constructor = PredicateResult;
  Entities.prototype = Object.create(Enum.prototype);
  Entities.prototype.constructor = Entities;
  Dir.prototype = Object.create(Enum.prototype);
  Dir.prototype.constructor = Dir;
  Draggable.prototype = Object.create(Enum.prototype);
  Draggable.prototype.constructor = Draggable;
  RunAt.prototype = Object.create(Enum.prototype);
  RunAt.prototype.constructor = RunAt;
  AreaShape.prototype = Object.create(Enum.prototype);
  AreaShape.prototype.constructor = AreaShape;
  ButtonFormEncType.prototype = Object.create(Enum.prototype);
  ButtonFormEncType.prototype.constructor = ButtonFormEncType;
  ButtonFormMethod.prototype = Object.create(Enum.prototype);
  ButtonFormMethod.prototype.constructor = ButtonFormMethod;
  ButtonType.prototype = Object.create(Enum.prototype);
  ButtonType.prototype.constructor = ButtonType;
  CommandType.prototype = Object.create(Enum.prototype);
  CommandType.prototype.constructor = CommandType;
  FormEncType.prototype = Object.create(Enum.prototype);
  FormEncType.prototype.constructor = FormEncType;
  FormMethod.prototype = Object.create(Enum.prototype);
  FormMethod.prototype.constructor = FormMethod;
  IframeSandbox.prototype = Object.create(Enum.prototype);
  IframeSandbox.prototype.constructor = IframeSandbox;
  InputType.prototype = Object.create(Enum.prototype);
  InputType.prototype.constructor = InputType;
  InputFormEncType.prototype = Object.create(Enum.prototype);
  InputFormEncType.prototype.constructor = InputFormEncType;
  InputFormMethod.prototype = Object.create(Enum.prototype);
  InputFormMethod.prototype.constructor = InputFormMethod;
  KeyGenKeyType.prototype = Object.create(Enum.prototype);
  KeyGenKeyType.prototype.constructor = KeyGenKeyType;
  TextAreaWrap.prototype = Object.create(Enum.prototype);
  TextAreaWrap.prototype.constructor = TextAreaWrap;
  ThScope.prototype = Object.create(Enum.prototype);
  ThScope.prototype.constructor = ThScope;
  A.prototype = Object.create(HTMLTag.prototype);
  A.prototype.constructor = A;
  ABBR.prototype = Object.create(HTMLTag.prototype);
  ABBR.prototype.constructor = ABBR;
  ADDRESS.prototype = Object.create(HTMLTag.prototype);
  ADDRESS.prototype.constructor = ADDRESS;
  AREA.prototype = Object.create(HTMLTag.prototype);
  AREA.prototype.constructor = AREA;
  ARTICLE.prototype = Object.create(HTMLTag.prototype);
  ARTICLE.prototype.constructor = ARTICLE;
  ASIDE.prototype = Object.create(HTMLTag.prototype);
  ASIDE.prototype.constructor = ASIDE;
  AUDIO.prototype = Object.create(HTMLTag.prototype);
  AUDIO.prototype.constructor = AUDIO;
  B.prototype = Object.create(HTMLTag.prototype);
  B.prototype.constructor = B;
  BASE.prototype = Object.create(HTMLTag.prototype);
  BASE.prototype.constructor = BASE;
  BDI.prototype = Object.create(HTMLTag.prototype);
  BDI.prototype.constructor = BDI;
  BDO.prototype = Object.create(HTMLTag.prototype);
  BDO.prototype.constructor = BDO;
  BLOCKQUOTE.prototype = Object.create(HTMLTag.prototype);
  BLOCKQUOTE.prototype.constructor = BLOCKQUOTE;
  BODY.prototype = Object.create(HTMLTag.prototype);
  BODY.prototype.constructor = BODY;
  BR.prototype = Object.create(HTMLTag.prototype);
  BR.prototype.constructor = BR;
  BUTTON.prototype = Object.create(HTMLTag.prototype);
  BUTTON.prototype.constructor = BUTTON;
  CANVAS.prototype = Object.create(HTMLTag.prototype);
  CANVAS.prototype.constructor = CANVAS;
  CAPTION.prototype = Object.create(HTMLTag.prototype);
  CAPTION.prototype.constructor = CAPTION;
  CITE.prototype = Object.create(HTMLTag.prototype);
  CITE.prototype.constructor = CITE;
  CODE.prototype = Object.create(HTMLTag.prototype);
  CODE.prototype.constructor = CODE;
  COL.prototype = Object.create(HTMLTag.prototype);
  COL.prototype.constructor = COL;
  COLGROUP.prototype = Object.create(HTMLTag.prototype);
  COLGROUP.prototype.constructor = COLGROUP;
  COMMAND.prototype = Object.create(HTMLTag.prototype);
  COMMAND.prototype.constructor = COMMAND;
  DATALIST.prototype = Object.create(HTMLTag.prototype);
  DATALIST.prototype.constructor = DATALIST;
  DD.prototype = Object.create(HTMLTag.prototype);
  DD.prototype.constructor = DD;
  DEL.prototype = Object.create(HTMLTag.prototype);
  DEL.prototype.constructor = DEL;
  DETAILS.prototype = Object.create(HTMLTag.prototype);
  DETAILS.prototype.constructor = DETAILS;
  DFN.prototype = Object.create(HTMLTag.prototype);
  DFN.prototype.constructor = DFN;
  DIALOG.prototype = Object.create(HTMLTag.prototype);
  DIALOG.prototype.constructor = DIALOG;
  DIV.prototype = Object.create(HTMLTag.prototype);
  DIV.prototype.constructor = DIV;
  DL.prototype = Object.create(HTMLTag.prototype);
  DL.prototype.constructor = DL;
  DT.prototype = Object.create(HTMLTag.prototype);
  DT.prototype.constructor = DT;
  EM.prototype = Object.create(HTMLTag.prototype);
  EM.prototype.constructor = EM;
  EMBED.prototype = Object.create(HTMLTag.prototype);
  EMBED.prototype.constructor = EMBED;
  FIELDSET.prototype = Object.create(HTMLTag.prototype);
  FIELDSET.prototype.constructor = FIELDSET;
  FIGCAPTION.prototype = Object.create(HTMLTag.prototype);
  FIGCAPTION.prototype.constructor = FIGCAPTION;
  FIGURE.prototype = Object.create(HTMLTag.prototype);
  FIGURE.prototype.constructor = FIGURE;
  FOOTER.prototype = Object.create(HTMLTag.prototype);
  FOOTER.prototype.constructor = FOOTER;
  FORM.prototype = Object.create(HTMLTag.prototype);
  FORM.prototype.constructor = FORM;
  H1.prototype = Object.create(HTMLTag.prototype);
  H1.prototype.constructor = H1;
  H2.prototype = Object.create(HTMLTag.prototype);
  H2.prototype.constructor = H2;
  H3.prototype = Object.create(HTMLTag.prototype);
  H3.prototype.constructor = H3;
  H4.prototype = Object.create(HTMLTag.prototype);
  H4.prototype.constructor = H4;
  H5.prototype = Object.create(HTMLTag.prototype);
  H5.prototype.constructor = H5;
  H6.prototype = Object.create(HTMLTag.prototype);
  H6.prototype.constructor = H6;
  HEAD.prototype = Object.create(HTMLTag.prototype);
  HEAD.prototype.constructor = HEAD;
  HEADER.prototype = Object.create(HTMLTag.prototype);
  HEADER.prototype.constructor = HEADER;
  HGROUP.prototype = Object.create(HTMLTag.prototype);
  HGROUP.prototype.constructor = HGROUP;
  HR.prototype = Object.create(HTMLTag.prototype);
  HR.prototype.constructor = HR;
  HTML.prototype = Object.create(HTMLTag.prototype);
  HTML.prototype.constructor = HTML;
  I.prototype = Object.create(HTMLTag.prototype);
  I.prototype.constructor = I;
  IFRAME.prototype = Object.create(HTMLTag.prototype);
  IFRAME.prototype.constructor = IFRAME;
  IMG.prototype = Object.create(HTMLTag.prototype);
  IMG.prototype.constructor = IMG;
  INPUT.prototype = Object.create(HTMLTag.prototype);
  INPUT.prototype.constructor = INPUT;
  INS.prototype = Object.create(HTMLTag.prototype);
  INS.prototype.constructor = INS;
  KBD.prototype = Object.create(HTMLTag.prototype);
  KBD.prototype.constructor = KBD;
  KEYGEN.prototype = Object.create(HTMLTag.prototype);
  KEYGEN.prototype.constructor = KEYGEN;
  LABEL.prototype = Object.create(HTMLTag.prototype);
  LABEL.prototype.constructor = LABEL;
  LEGEND.prototype = Object.create(HTMLTag.prototype);
  LEGEND.prototype.constructor = LEGEND;
  LI.prototype = Object.create(HTMLTag.prototype);
  LI.prototype.constructor = LI;
  LINK.prototype = Object.create(HTMLTag.prototype);
  LINK.prototype.constructor = LINK;
  MAIN.prototype = Object.create(HTMLTag.prototype);
  MAIN.prototype.constructor = MAIN;
  MAP.prototype = Object.create(HTMLTag.prototype);
  MAP.prototype.constructor = MAP;
  MARK.prototype = Object.create(HTMLTag.prototype);
  MARK.prototype.constructor = MARK;
  MATH.prototype = Object.create(HTMLTag.prototype);
  MATH.prototype.constructor = MATH;
  MATHML.prototype = Object.create(HTMLTag.prototype);
  MATHML.prototype.constructor = MATHML;
  META.prototype = Object.create(HTMLTag.prototype);
  META.prototype.constructor = META;
  METER.prototype = Object.create(HTMLTag.prototype);
  METER.prototype.constructor = METER;
  NAV.prototype = Object.create(HTMLTag.prototype);
  NAV.prototype.constructor = NAV;
  NOSCRIPT.prototype = Object.create(HTMLTag.prototype);
  NOSCRIPT.prototype.constructor = NOSCRIPT;
  OBJECT.prototype = Object.create(HTMLTag.prototype);
  OBJECT.prototype.constructor = OBJECT;
  OL.prototype = Object.create(HTMLTag.prototype);
  OL.prototype.constructor = OL;
  OPTGROUP.prototype = Object.create(HTMLTag.prototype);
  OPTGROUP.prototype.constructor = OPTGROUP;
  OPTION.prototype = Object.create(HTMLTag.prototype);
  OPTION.prototype.constructor = OPTION;
  OUTPUT.prototype = Object.create(HTMLTag.prototype);
  OUTPUT.prototype.constructor = OUTPUT;
  P.prototype = Object.create(HTMLTag.prototype);
  P.prototype.constructor = P;
  PARAM.prototype = Object.create(HTMLTag.prototype);
  PARAM.prototype.constructor = PARAM;
  PICTURE.prototype = Object.create(HTMLTag.prototype);
  PICTURE.prototype.constructor = PICTURE;
  PRE.prototype = Object.create(HTMLTag.prototype);
  PRE.prototype.constructor = PRE;
  PROGRESS.prototype = Object.create(HTMLTag.prototype);
  PROGRESS.prototype.constructor = PROGRESS;
  Q.prototype = Object.create(HTMLTag.prototype);
  Q.prototype.constructor = Q;
  RP.prototype = Object.create(HTMLTag.prototype);
  RP.prototype.constructor = RP;
  RT.prototype = Object.create(HTMLTag.prototype);
  RT.prototype.constructor = RT;
  RUBY.prototype = Object.create(HTMLTag.prototype);
  RUBY.prototype.constructor = RUBY;
  SAMP.prototype = Object.create(HTMLTag.prototype);
  SAMP.prototype.constructor = SAMP;
  SCRIPT.prototype = Object.create(HTMLTag.prototype);
  SCRIPT.prototype.constructor = SCRIPT;
  SECTION.prototype = Object.create(HTMLTag.prototype);
  SECTION.prototype.constructor = SECTION;
  SELECT.prototype = Object.create(HTMLTag.prototype);
  SELECT.prototype.constructor = SELECT;
  SMALL.prototype = Object.create(HTMLTag.prototype);
  SMALL.prototype.constructor = SMALL;
  SOURCE.prototype = Object.create(HTMLTag.prototype);
  SOURCE.prototype.constructor = SOURCE;
  SPAN.prototype = Object.create(HTMLTag.prototype);
  SPAN.prototype.constructor = SPAN;
  STRONG.prototype = Object.create(HTMLTag.prototype);
  STRONG.prototype.constructor = STRONG;
  STYLE.prototype = Object.create(HTMLTag.prototype);
  STYLE.prototype.constructor = STYLE;
  SUB.prototype = Object.create(HTMLTag.prototype);
  SUB.prototype.constructor = SUB;
  SUMMARY.prototype = Object.create(HTMLTag.prototype);
  SUMMARY.prototype.constructor = SUMMARY;
  SUP.prototype = Object.create(HTMLTag.prototype);
  SUP.prototype.constructor = SUP;
  SVG.prototype = Object.create(HTMLTag.prototype);
  SVG.prototype.constructor = SVG;
  TABLE.prototype = Object.create(HTMLTag.prototype);
  TABLE.prototype.constructor = TABLE;
  TBODY.prototype = Object.create(HTMLTag.prototype);
  TBODY.prototype.constructor = TBODY;
  TD.prototype = Object.create(HTMLTag.prototype);
  TD.prototype.constructor = TD;
  TEXTAREA.prototype = Object.create(HTMLTag.prototype);
  TEXTAREA.prototype.constructor = TEXTAREA;
  TFOOT.prototype = Object.create(HTMLTag.prototype);
  TFOOT.prototype.constructor = TFOOT;
  TH.prototype = Object.create(HTMLTag.prototype);
  TH.prototype.constructor = TH;
  THEAD.prototype = Object.create(HTMLTag.prototype);
  THEAD.prototype.constructor = THEAD;
  TIME.prototype = Object.create(HTMLTag.prototype);
  TIME.prototype.constructor = TIME;
  TITLE.prototype = Object.create(HTMLTag.prototype);
  TITLE.prototype.constructor = TITLE;
  TR.prototype = Object.create(HTMLTag.prototype);
  TR.prototype.constructor = TR;
  UL.prototype = Object.create(HTMLTag.prototype);
  UL.prototype.constructor = UL;
  VAR.prototype = Object.create(HTMLTag.prototype);
  VAR.prototype.constructor = VAR;
  VIDEO.prototype = Object.create(HTMLTag.prototype);
  VIDEO.prototype.constructor = VIDEO;
  function TagConsumer() {
  }
  TagConsumer.prototype.onTagError_cjwpn3$ = function (tag, exception) {
    throw exception;
  };
  TagConsumer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TagConsumer',
    interfaces: []
  };
  function Tag() {
  }
  Tag.prototype.unaryPlus_lvwjq6$ = function ($receiver) {
    this.entity_ws8or7$($receiver);
  };
  Tag.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.text_61zpoe$($receiver);
  };
  Tag.prototype.text_61zpoe$ = function (s) {
    this.consumer.onTagContent_6bul2c$(s);
  };
  Tag.prototype.text_3p81yu$ = function (n) {
    this.text_61zpoe$(n.toString());
  };
  Tag.prototype.entity_ws8or7$ = function (e) {
    this.consumer.onTagContentEntity_ws8or7$(e);
  };
  Tag.prototype.comment_61zpoe$ = function (s) {
    this.consumer.onTagComment_6bul2c$(s);
  };
  Tag.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Tag',
    interfaces: []
  };
  function Unsafe() {
  }
  Unsafe.prototype.unaryPlus_lvwjq6$ = function ($receiver) {
    this.unaryPlus_pdl1vz$($receiver.text);
  };
  Unsafe.prototype.raw_61zpoe$ = function (s) {
    this.unaryPlus_pdl1vz$(s);
  };
  Unsafe.prototype.raw_ws8or7$ = function (entity) {
    this.unaryPlus_lvwjq6$(entity);
  };
  Unsafe.prototype.raw_3p81yu$ = function (n) {
    this.unaryPlus_pdl1vz$(n.toString());
  };
  Unsafe.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Unsafe',
    interfaces: []
  };
  function AttributeEnum() {
  }
  AttributeEnum.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AttributeEnum',
    interfaces: []
  };
  var visit = defineInlineFunction('kotlinx-html-js.kotlinx.html.visit_xwv8ym$', wrapFunction(function () {
    var Throwable = Error;
    return function ($receiver, block) {
      $receiver.consumer.onTagStart_tkgjla$($receiver);
      try {
        block($receiver);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver.consumer.onTagError_cjwpn3$($receiver, err);
        } else
          throw err;
      }
      finally {
        $receiver.consumer.onTagEnd_tkgjla$($receiver);
      }
    };
  }));
  var visitAndFinalize = defineInlineFunction('kotlinx-html-js.kotlinx.html.visitAndFinalize_g9qte5$', wrapFunction(function () {
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function ($receiver, consumer, block) {
      if ($receiver.consumer !== consumer) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver.consumer.onTagStart_tkgjla$($receiver);
      try {
        block($receiver);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver.consumer.onTagError_cjwpn3$($receiver, err);
        } else
          throw err;
      }
      finally {
        $receiver.consumer.onTagEnd_tkgjla$($receiver);
      }
      return consumer.finalize();
    };
  }));
  function attributesMapOf() {
    return emptyMap_0;
  }
  function attributesMapOf_0(key, value) {
    if (value == null)
      return emptyMap_0;
    else
      return singletonMapOf(key, value);
  }
  function attributesMapOf_1(pairs) {
    var tmp$;
    var result = null;
    tmp$ = pairs.length - 1 | 0;
    for (var i = 0; i <= tmp$; i += 2) {
      var k = pairs[i];
      var v = pairs[i + 1 | 0];
      if (k != null && v != null) {
        if (result == null) {
          result = LinkedHashMap_init();
        }
        result.put_xwzc9p$(k, v);
      }
    }
    return result != null ? result : emptyMap_0;
  }
  function singletonMapOf(key, value) {
    return new SingletonStringMap(key, value);
  }
  function unsafe($receiver, block) {
    $receiver.consumer.onTagContentUnsafe_kntra7$(block);
  }
  var emptyMap_0;
  function DefaultUnsafe() {
    this.sb_0 = StringBuilder_init();
  }
  DefaultUnsafe.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.sb_0.append_pdl1vj$($receiver);
  };
  DefaultUnsafe.prototype.toString = function () {
    return this.sb_0.toString();
  };
  DefaultUnsafe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultUnsafe',
    interfaces: [Unsafe]
  };
  function HtmlTagMarker() {
  }
  HtmlTagMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlTagMarker',
    interfaces: [Annotation]
  };
  function SingletonStringMap(key, value) {
    this.key_fdtcub$_0 = key;
    this.value_484qs5$_0 = value;
  }
  Object.defineProperty(SingletonStringMap.prototype, 'key', {
    get: function () {
      return this.key_fdtcub$_0;
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'value', {
    get: function () {
      return this.value_484qs5$_0;
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return setOf(this);
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return setOf(this.key);
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return 1;
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return listOf(this.value);
    }
  });
  SingletonStringMap.prototype.containsKey_11rb$ = function (key) {
    return equals(key, this.key);
  };
  SingletonStringMap.prototype.containsValue_11rc$ = function (value) {
    return equals(value, this.value);
  };
  SingletonStringMap.prototype.get_11rb$ = function (key) {
    return equals(key, this.key) ? this.value : null;
  };
  SingletonStringMap.prototype.isEmpty = function () {
    return false;
  };
  SingletonStringMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingletonStringMap',
    interfaces: [Map$Entry, Map]
  };
  SingletonStringMap.prototype.component1 = function () {
    return this.key;
  };
  SingletonStringMap.prototype.component2 = function () {
    return this.value;
  };
  SingletonStringMap.prototype.copy_puj7f4$ = function (key, value) {
    return new SingletonStringMap(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  SingletonStringMap.prototype.toString = function () {
    return 'SingletonStringMap(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  SingletonStringMap.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  SingletonStringMap.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  function AttributeEncoder() {
  }
  AttributeEncoder.prototype.empty_l5rr1g$ = function (attributeName, tag) {
    throw IllegalStateException_init('Attribute ' + attributeName + ' is not yet defined for tag ' + tag.tagName);
  };
  AttributeEncoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AttributeEncoder',
    interfaces: []
  };
  function Attribute(encoder) {
    this.encoder = encoder;
  }
  Attribute.prototype.get_txhc1s$ = function (thisRef, attributeName) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = thisRef.attributes.get_11rb$(attributeName)) != null ? this.encoder.decode_puj7f4$(attributeName, tmp$) : null) != null ? tmp$_0 : this.encoder.empty_l5rr1g$(attributeName, thisRef);
  };
  Attribute.prototype.set_fid0sb$ = function (thisRef, attributeName, value) {
    thisRef.attributes.put_xwzc9p$(attributeName, this.encoder.encode_yuqcw7$(attributeName, value));
  };
  Attribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attribute',
    interfaces: []
  };
  function StringEncoder() {
    StringEncoder_instance = this;
  }
  StringEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return value;
  };
  StringEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    return value;
  };
  StringEncoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringEncoder',
    interfaces: [AttributeEncoder]
  };
  var StringEncoder_instance = null;
  function StringEncoder_getInstance() {
    if (StringEncoder_instance === null) {
      new StringEncoder();
    }
    return StringEncoder_instance;
  }
  function StringAttribute() {
    Attribute.call(this, StringEncoder_getInstance());
  }
  StringAttribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringAttribute',
    interfaces: [Attribute]
  };
  function booleanEncode($receiver) {
    return $receiver.toString();
  }
  function BooleanEncoder(trueValue, falseValue) {
    if (trueValue === void 0)
      trueValue = 'true';
    if (falseValue === void 0)
      falseValue = 'false';
    this.trueValue = trueValue;
    this.falseValue = falseValue;
  }
  BooleanEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return value ? this.trueValue : this.falseValue;
  };
  BooleanEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    if (equals(value, this.trueValue))
      return true;
    else if (equals(value, this.falseValue))
      return false;
    else
      throw IllegalArgumentException_init('Unknown value ' + value + ' for ' + attributeName);
  };
  BooleanEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BooleanEncoder',
    interfaces: [AttributeEncoder]
  };
  function BooleanAttribute(trueValue, falseValue) {
    if (trueValue === void 0)
      trueValue = 'true';
    if (falseValue === void 0)
      falseValue = 'false';
    Attribute.call(this, new BooleanEncoder(trueValue, falseValue));
  }
  BooleanAttribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BooleanAttribute',
    interfaces: [Attribute]
  };
  function tickerEncode($receiver, attributeName) {
    return $receiver ? attributeName : '';
  }
  function TickerEncoder() {
    TickerEncoder_instance = this;
  }
  TickerEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return tickerEncode(value, attributeName);
  };
  TickerEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    return equals(value, attributeName);
  };
  TickerEncoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TickerEncoder',
    interfaces: [AttributeEncoder]
  };
  var TickerEncoder_instance = null;
  function TickerEncoder_getInstance() {
    if (TickerEncoder_instance === null) {
      new TickerEncoder();
    }
    return TickerEncoder_instance;
  }
  function TickerAttribute() {
    Attribute.call(this, TickerEncoder_getInstance());
  }
  TickerAttribute.prototype.set_fid0sb$ = function (thisRef, attributeName, value) {
    if (value) {
      thisRef.attributes.put_xwzc9p$(attributeName, attributeName);
    } else {
      thisRef.attributes.remove_11rb$(attributeName);
    }
  };
  TickerAttribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TickerAttribute',
    interfaces: [Attribute]
  };
  function EnumEncoder(valuesMap) {
    this.valuesMap = valuesMap;
  }
  EnumEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return value.realValue;
  };
  EnumEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    var tmp$;
    tmp$ = this.valuesMap.get_11rb$(value);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Unknown value ' + value + ' for ' + attributeName);
    }
    return tmp$;
  };
  EnumEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumEncoder',
    interfaces: [AttributeEncoder]
  };
  function enumEncode($receiver) {
    return $receiver.realValue;
  }
  function EnumAttribute(values) {
    Attribute.call(this, new EnumEncoder(values));
    this.values = values;
  }
  EnumAttribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumAttribute',
    interfaces: [Attribute]
  };
  function stringSetDecode(value) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = value != null ? Regex_init('\\s+').split_905azu$(value, 0) : null) != null) {
      var destination = ArrayList_init();
      var tmp$_2;
      tmp$_2 = tmp$.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (!(element.length === 0))
          destination.add_11rb$(element);
      }
      tmp$_1 = destination;
    } else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? toSet(tmp$_0) : null;
  }
  function stringSetEncode($receiver) {
    return joinToString($receiver, ' ');
  }
  function StringSetEncoder() {
    StringSetEncoder_instance = this;
  }
  StringSetEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return joinToString(value, ' ');
  };
  StringSetEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    return ensureNotNull(stringSetDecode(value));
  };
  StringSetEncoder.prototype.empty_l5rr1g$ = function (attributeName, tag) {
    return emptySet();
  };
  StringSetEncoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringSetEncoder',
    interfaces: [AttributeEncoder]
  };
  var StringSetEncoder_instance = null;
  function StringSetEncoder_getInstance() {
    if (StringSetEncoder_instance === null) {
      new StringSetEncoder();
    }
    return StringSetEncoder_instance;
  }
  function StringSetAttribute() {
    Attribute.call(this, StringSetEncoder_getInstance());
  }
  StringSetAttribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringSetAttribute',
    interfaces: [Attribute]
  };
  function legEnd$lambda($receiver) {
    return Unit;
  }
  function legEnd($receiver, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = legEnd$lambda;
    var $receiver_0 = new LEGEND(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      block($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  function legEnd$lambda_0($receiver) {
    return Unit;
  }
  function legEnd_0($receiver, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = legEnd$lambda_0;
    var $receiver_0 = new LEGEND(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      block($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function legEnd$lambda_1($receiver) {
    return Unit;
  }
  function legEnd_1($receiver, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = legEnd$lambda_1;
    var $receiver_0 = new LEGEND(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      block($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function legEnd$lambda_2($receiver) {
    return Unit;
  }
  function legEnd_2($receiver, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = legEnd$lambda_2;
    var $receiver_0 = new LEGEND(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      block($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var get_true_ = defineInlineFunction('kotlinx-html-js.kotlinx.html.get_true__sh13o2$', wrapFunction(function () {
    var Draggable = _.kotlinx.html.Draggable;
    return function ($receiver) {
      return Draggable.htmlTrue;
    };
  }));
  var get_false_ = defineInlineFunction('kotlinx-html-js.kotlinx.html.get_false__sh13o2$', wrapFunction(function () {
    var Draggable = _.kotlinx.html.Draggable;
    return function ($receiver) {
      return Draggable.htmlFalse;
    };
  }));
  function object_$lambda($receiver) {
    return Unit;
  }
  function object_($receiver, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = object_$lambda;
    var $receiver_0 = new OBJECT(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      block($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  function var_$lambda($receiver) {
    return Unit;
  }
  function var_($receiver, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = var_$lambda;
    var $receiver_0 = new VAR(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      block($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  function var__0($receiver, classes, block) {
    if (classes === void 0)
      classes = null;
    var $receiver_0 = new VAR(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      block($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function object_$lambda_0($receiver) {
    return Unit;
  }
  function object__0($receiver, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = object_$lambda_0;
    var $receiver_0 = new OBJECT(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      block($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function get_for_($receiver) {
    return $receiver.htmlFor;
  }
  function set_for_($receiver, value) {
    $receiver.htmlFor = value;
  }
  function get_for__0($receiver) {
    return $receiver.htmlFor;
  }
  function set_for__0($receiver, value) {
    $receiver.htmlFor = value;
  }
  function get_onTouchcancel($receiver) {
    return get_onTouchCancel($receiver);
  }
  function set_onTouchcancel($receiver, newValue) {
    set_onTouchCancel($receiver, newValue);
  }
  function get_onTouchmove($receiver) {
    return get_onTouchMove($receiver);
  }
  function set_onTouchmove($receiver, newValue) {
    set_onTouchMove($receiver, newValue);
  }
  function DelayedConsumer(downstream) {
    this.downstream = downstream;
    this.delayed_0 = null;
  }
  DelayedConsumer.prototype.onTagStart_tkgjla$ = function (tag) {
    this.processDelayedTag_0();
    this.delayed_0 = tag;
  };
  DelayedConsumer.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    if (this.delayed_0 == null || !equals(this.delayed_0, tag)) {
      throw IllegalStateException_init("You can't change tag attribute because it was already passed to the downstream");
    }
  };
  DelayedConsumer.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    if (this.delayed_0 == null || !equals(this.delayed_0, tag)) {
      throw IllegalStateException_init("You can't change tag attribute because it was already passed to the downstream");
    }
  };
  DelayedConsumer.prototype.onTagEnd_tkgjla$ = function (tag) {
    this.processDelayedTag_0();
    this.downstream.onTagEnd_tkgjla$(tag);
  };
  DelayedConsumer.prototype.onTagContent_6bul2c$ = function (content) {
    this.processDelayedTag_0();
    this.downstream.onTagContent_6bul2c$(content);
  };
  DelayedConsumer.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.processDelayedTag_0();
    this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  DelayedConsumer.prototype.onTagError_cjwpn3$ = function (tag, exception) {
    this.processDelayedTag_0();
    this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  DelayedConsumer.prototype.onTagComment_6bul2c$ = function (content) {
    this.processDelayedTag_0();
    this.downstream.onTagComment_6bul2c$(content);
  };
  DelayedConsumer.prototype.finalize = function () {
    this.processDelayedTag_0();
    return this.downstream.finalize();
  };
  DelayedConsumer.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    this.processDelayedTag_0();
    return this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  DelayedConsumer.prototype.processDelayedTag_0 = function () {
    var tmp$;
    if ((tmp$ = this.delayed_0) != null) {
      this.delayed_0 = null;
      this.downstream.onTagStart_tkgjla$(tmp$);
    }
  };
  DelayedConsumer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelayedConsumer',
    interfaces: [TagConsumer]
  };
  function delayed($receiver) {
    return Kotlin.isType($receiver, DelayedConsumer) ? $receiver : new DelayedConsumer($receiver);
  }
  function DelegatingMap(initialValues, tag, consumer) {
    this.tag_0 = tag;
    this.consumer_0 = consumer;
    this.backing_0 = initialValues;
    this.backingMutable_0 = false;
  }
  Object.defineProperty(DelegatingMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.backing_0.size;
    }
  });
  DelegatingMap.prototype.isEmpty = function () {
    return this.backing_0.isEmpty();
  };
  DelegatingMap.prototype.containsKey_11rb$ = function (key) {
    return this.backing_0.containsKey_11rb$(key);
  };
  DelegatingMap.prototype.containsValue_11rc$ = function (value) {
    return this.backing_0.containsValue_11rc$(value);
  };
  DelegatingMap.prototype.get_11rb$ = function (key) {
    return this.backing_0.get_11rb$(key);
  };
  DelegatingMap.prototype.put_xwzc9p$ = function (key, value) {
    var mutable = this.switchToMutable_0();
    var old = mutable.put_xwzc9p$(key, value);
    if (!equals(old, value)) {
      this.consumer_0().onTagAttributeChange_5n2z71$(this.tag_0, key, value);
    }
    return old;
  };
  DelegatingMap.prototype.remove_11rb$ = function (key) {
    var tmp$;
    var mutable = this.switchToMutable_0();
    var tmp$_0;
    if ((tmp$ = mutable.remove_11rb$(key)) != null) {
      this.consumer_0().onTagAttributeChange_5n2z71$(this.tag_0, key, null);
      tmp$_0 = tmp$;
    } else
      tmp$_0 = null;
    return tmp$_0;
  };
  DelegatingMap.prototype.putAll_a2k3zr$ = function (from) {
    if (from.isEmpty())
      return;
    var consumer = this.consumer_0();
    var mutable = this.switchToMutable_0();
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(mutable.put_xwzc9p$(element.key, element.value), element.value)) {
        consumer.onTagAttributeChange_5n2z71$(this.tag_0, element.key, element.value);
      }
    }
  };
  DelegatingMap.prototype.clear = function () {
    var tmp$;
    tmp$ = this.backing_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.consumer_0().onTagAttributeChange_5n2z71$(this.tag_0, element.key, null);
    }
    this.backing_0 = emptyMap();
    this.backingMutable_0 = false;
  };
  Object.defineProperty(DelegatingMap.prototype, 'immutableEntries', {
    configurable: true,
    get: function () {
      return this.backing_0.entries;
    }
  });
  DelegatingMap.prototype.switchToMutable_0 = function () {
    var tmp$, tmp$_0;
    if (this.backingMutable_0) {
      tmp$ = this.backing_0;
    } else {
      this.backingMutable_0 = true;
      this.backing_0 = LinkedHashMap_init_0(this.backing_0);
      tmp$ = this.backing_0;
    }
    return Kotlin.isType(tmp$_0 = tmp$, MutableMap) ? tmp$_0 : throwCCE();
  };
  Object.defineProperty(DelegatingMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return this.switchToMutable_0().keys;
    }
  });
  Object.defineProperty(DelegatingMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return this.switchToMutable_0().values;
    }
  });
  Object.defineProperty(DelegatingMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return this.switchToMutable_0().entries;
    }
  });
  DelegatingMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatingMap',
    interfaces: [MutableMap]
  };
  function DelegatingExceptionConsumer(underlying, handler) {
    this.underlying = underlying;
    this.handler = handler;
  }
  DelegatingExceptionConsumer.prototype.onTagError_cjwpn3$ = function (tag, exception) {
    this.handler(this.underlying, exception);
  };
  DelegatingExceptionConsumer.prototype.finalize = function () {
    return this.underlying.finalize();
  };
  DelegatingExceptionConsumer.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    return this.underlying.onTagAttributeChange_5n2z71$(tag, attribute, value);
  };
  DelegatingExceptionConsumer.prototype.onTagComment_6bul2c$ = function (content) {
    return this.underlying.onTagComment_6bul2c$(content);
  };
  DelegatingExceptionConsumer.prototype.onTagContent_6bul2c$ = function (content) {
    return this.underlying.onTagContent_6bul2c$(content);
  };
  DelegatingExceptionConsumer.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    return this.underlying.onTagContentEntity_ws8or7$(entity);
  };
  DelegatingExceptionConsumer.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    return this.underlying.onTagContentUnsafe_kntra7$(block);
  };
  DelegatingExceptionConsumer.prototype.onTagEnd_tkgjla$ = function (tag) {
    return this.underlying.onTagEnd_tkgjla$(tag);
  };
  DelegatingExceptionConsumer.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    return this.underlying.onTagEvent_j30qsv$(tag, event, value);
  };
  DelegatingExceptionConsumer.prototype.onTagStart_tkgjla$ = function (tag) {
    return this.underlying.onTagStart_tkgjla$(tag);
  };
  DelegatingExceptionConsumer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatingExceptionConsumer',
    interfaces: [TagConsumer]
  };
  function catch_0($receiver, handler) {
    return new DelegatingExceptionConsumer($receiver, handler);
  }
  function PredicateResults() {
    PredicateResults_instance = this;
    this.PASS = PredicateResult$PASS_getInstance();
    this.SKIP = PredicateResult$SKIP_getInstance();
    this.DROP = PredicateResult$DROP_getInstance();
  }
  PredicateResults.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PredicateResults',
    interfaces: []
  };
  var PredicateResults_instance = null;
  function PredicateResults_getInstance() {
    if (PredicateResults_instance === null) {
      new PredicateResults();
    }
    return PredicateResults_instance;
  }
  function PredicateResult(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PredicateResult_initFields() {
    PredicateResult_initFields = function () {
    };
    PredicateResult$PASS_instance = new PredicateResult('PASS', 0);
    PredicateResult$SKIP_instance = new PredicateResult('SKIP', 1);
    PredicateResult$DROP_instance = new PredicateResult('DROP', 2);
  }
  var PredicateResult$PASS_instance;
  function PredicateResult$PASS_getInstance() {
    PredicateResult_initFields();
    return PredicateResult$PASS_instance;
  }
  var PredicateResult$SKIP_instance;
  function PredicateResult$SKIP_getInstance() {
    PredicateResult_initFields();
    return PredicateResult$SKIP_instance;
  }
  var PredicateResult$DROP_instance;
  function PredicateResult$DROP_getInstance() {
    PredicateResult_initFields();
    return PredicateResult$DROP_instance;
  }
  PredicateResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredicateResult',
    interfaces: [Enum]
  };
  function PredicateResult$values() {
    return [PredicateResult$PASS_getInstance(), PredicateResult$SKIP_getInstance(), PredicateResult$DROP_getInstance()];
  }
  PredicateResult.values = PredicateResult$values;
  function PredicateResult$valueOf(name) {
    switch (name) {
      case 'PASS':
        return PredicateResult$PASS_getInstance();
      case 'SKIP':
        return PredicateResult$SKIP_getInstance();
      case 'DROP':
        return PredicateResult$DROP_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.consumers.PredicateResult.' + name);
    }
  }
  PredicateResult.valueOf_61zpoe$ = PredicateResult$valueOf;
  function FilterTagConsumer(downstream, predicate) {
    this.downstream = downstream;
    this.predicate = predicate;
    this.currentLevel_0 = 0;
    this.skippedLevels_0 = HashSet_init();
    this.dropLevel_0 = null;
  }
  FilterTagConsumer.prototype.onTagStart_tkgjla$ = function (tag) {
    this.currentLevel_0 = this.currentLevel_0 + 1 | 0;
    if (this.dropLevel_0 == null) {
      switch (this.predicate(tag).name) {
        case 'PASS':
          this.downstream.onTagStart_tkgjla$(tag);
          break;
        case 'SKIP':
          this.skippedLevels_0.add_11rb$(this.currentLevel_0);
          break;
        case 'DROP':
          this.dropLevel_0 = this.currentLevel_0;
          break;
        default:
          Kotlin.noWhenBranchMatched();
          break;
      }
    }
  };
  FilterTagConsumer.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    throw UnsupportedOperationException_init("this filter doesn't support attribute change");
  };
  FilterTagConsumer.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    throw UnsupportedOperationException_init("this filter doesn't support attribute change");
  };
  FilterTagConsumer.prototype.onTagEnd_tkgjla$ = function (tag) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagEnd_tkgjla$(tag);
    }
    this.skippedLevels_0.remove_11rb$(this.currentLevel_0);
    if (this.dropLevel_0 === this.currentLevel_0) {
      this.dropLevel_0 = null;
    }
    this.currentLevel_0 = this.currentLevel_0 - 1 | 0;
  };
  FilterTagConsumer.prototype.onTagContent_6bul2c$ = function (content) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagContent_6bul2c$(content);
    }
  };
  FilterTagConsumer.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagContentEntity_ws8or7$(entity);
    }
  };
  FilterTagConsumer.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagContentUnsafe_kntra7$(block);
    }
  };
  FilterTagConsumer.prototype.canPassCurrentLevel_0 = function () {
    return this.dropLevel_0 == null && !this.skippedLevels_0.contains_11rb$(this.currentLevel_0);
  };
  FilterTagConsumer.prototype.onTagError_cjwpn3$ = function (tag, exception) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagError_cjwpn3$(tag, exception);
    }
  };
  FilterTagConsumer.prototype.onTagComment_6bul2c$ = function (content) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagComment_6bul2c$(content);
    }
  };
  FilterTagConsumer.prototype.finalize = function () {
    return this.downstream.finalize();
  };
  FilterTagConsumer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterTagConsumer',
    interfaces: [TagConsumer]
  };
  function filter$lambda(closure$predicate) {
    return function (it) {
      return closure$predicate(PredicateResults_getInstance(), it);
    };
  }
  function filter($receiver, predicate) {
    return delayed(new FilterTagConsumer($receiver, filter$lambda(predicate)));
  }
  function FinalizeConsumer(downstream, block) {
    this.downstream = downstream;
    this.block = block;
    this.level_0 = 0;
  }
  FinalizeConsumer.prototype.onTagStart_tkgjla$ = function (tag) {
    this.downstream.onTagStart_tkgjla$(tag);
    this.level_0 = this.level_0 + 1 | 0;
  };
  FinalizeConsumer.prototype.onTagEnd_tkgjla$ = function (tag) {
    this.downstream.onTagEnd_tkgjla$(tag);
    this.level_0 = this.level_0 - 1 | 0;
  };
  FinalizeConsumer.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    this.downstream.onTagAttributeChange_5n2z71$(tag, attribute, value);
  };
  FinalizeConsumer.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    this.downstream.onTagEvent_j30qsv$(tag, event, value);
  };
  FinalizeConsumer.prototype.onTagContent_6bul2c$ = function (content) {
    this.downstream.onTagContent_6bul2c$(content);
  };
  FinalizeConsumer.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  FinalizeConsumer.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  FinalizeConsumer.prototype.onTagError_cjwpn3$ = function (tag, exception) {
    this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  FinalizeConsumer.prototype.onTagComment_6bul2c$ = function (content) {
    this.downstream.onTagComment_6bul2c$(content);
  };
  FinalizeConsumer.prototype.finalize = function () {
    return this.block(this.downstream.finalize(), this.level_0 > 0);
  };
  FinalizeConsumer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FinalizeConsumer',
    interfaces: [TagConsumer]
  };
  function onFinalize$lambda(closure$block) {
    return function (to, partial) {
      closure$block(to, partial);
      return to;
    };
  }
  function onFinalize($receiver, block) {
    return new FinalizeConsumer($receiver, onFinalize$lambda(block));
  }
  function onFinalizeMap($receiver, block) {
    return new FinalizeConsumer($receiver, block);
  }
  function CommonAttributeGroupFacade() {
  }
  CommonAttributeGroupFacade.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonAttributeGroupFacade',
    interfaces: [Tag]
  };
  function get_enableTheming($receiver) {
    return attributeBooleanBoolean.get_txhc1s$($receiver, 'EnableTheming');
  }
  function set_enableTheming($receiver, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver, 'EnableTheming', newValue);
  }
  function get_enableViewState($receiver) {
    return attributeBooleanBoolean.get_txhc1s$($receiver, 'EnableViewState');
  }
  function set_enableViewState($receiver, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver, 'EnableViewState', newValue);
  }
  function get_skinID($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'SkinID');
  }
  function set_skinID($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'SkinID', newValue);
  }
  function get_visible($receiver) {
    return attributeBooleanBoolean.get_txhc1s$($receiver, 'Visible');
  }
  function set_visible($receiver, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver, 'Visible', newValue);
  }
  function get_accessKey($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'accesskey');
  }
  function set_accessKey($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'accesskey', newValue);
  }
  function get_classes($receiver) {
    return attributeSetStringStringSet.get_txhc1s$($receiver, 'class');
  }
  function set_classes($receiver, newValue) {
    attributeSetStringStringSet.set_fid0sb$($receiver, 'class', newValue);
  }
  function get_contentEditable($receiver) {
    return attributeBooleanBoolean.get_txhc1s$($receiver, 'contenteditable');
  }
  function set_contentEditable($receiver, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver, 'contenteditable', newValue);
  }
  function get_contextMenu($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'contextmenu');
  }
  function set_contextMenu($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'contextmenu', newValue);
  }
  function get_dataFolderName($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'data-FolderName');
  }
  function set_dataFolderName($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'data-FolderName', newValue);
  }
  function get_dataMsgId($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'data-MsgId');
  }
  function set_dataMsgId($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'data-MsgId', newValue);
  }
  function get_dir($receiver) {
    return attributeDirEnumDirValues.get_txhc1s$($receiver, 'dir');
  }
  function set_dir($receiver, newValue) {
    attributeDirEnumDirValues.set_fid0sb$($receiver, 'dir', newValue);
  }
  function get_draggable($receiver) {
    return attributeDraggableEnumDraggableValues.get_txhc1s$($receiver, 'draggable');
  }
  function set_draggable($receiver, newValue) {
    attributeDraggableEnumDraggableValues.set_fid0sb$($receiver, 'draggable', newValue);
  }
  function get_hidden($receiver) {
    return attributeBooleanTicker.get_txhc1s$($receiver, 'hidden');
  }
  function set_hidden($receiver, newValue) {
    attributeBooleanTicker.set_fid0sb$($receiver, 'hidden', newValue);
  }
  function get_id($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'id');
  }
  function set_id($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'id', newValue);
  }
  function get_itemProp($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'itemprop');
  }
  function set_itemProp($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'itemprop', newValue);
  }
  function get_lang($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'lang');
  }
  function set_lang($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'lang', newValue);
  }
  function get_onAbort($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onabort');
  }
  function set_onAbort($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onabort', newValue);
  }
  function get_onBlur($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onblur');
  }
  function set_onBlur($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onblur', newValue);
  }
  function get_onCanPlay($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'oncanplay');
  }
  function set_onCanPlay($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'oncanplay', newValue);
  }
  function get_onCanPlayThrough($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'oncanplaythrough');
  }
  function set_onCanPlayThrough($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'oncanplaythrough', newValue);
  }
  function get_onChange($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onchange');
  }
  function set_onChange($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onchange', newValue);
  }
  function get_onClick($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onclick');
  }
  function set_onClick($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onclick', newValue);
  }
  function get_onContextMenu($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'oncontextmenu');
  }
  function set_onContextMenu($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'oncontextmenu', newValue);
  }
  function get_onDoubleClick($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ondblclick');
  }
  function set_onDoubleClick($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ondblclick', newValue);
  }
  function get_onDrag($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ondrag');
  }
  function set_onDrag($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ondrag', newValue);
  }
  function get_onDragEnd($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ondragend');
  }
  function set_onDragEnd($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ondragend', newValue);
  }
  function get_onDragEnter($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ondragenter');
  }
  function set_onDragEnter($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ondragenter', newValue);
  }
  function get_onDragLeave($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ondragleave');
  }
  function set_onDragLeave($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ondragleave', newValue);
  }
  function get_onDragOver($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ondragover');
  }
  function set_onDragOver($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ondragover', newValue);
  }
  function get_onDragStart($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ondragstart');
  }
  function set_onDragStart($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ondragstart', newValue);
  }
  function get_onDrop($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ondrop');
  }
  function set_onDrop($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ondrop', newValue);
  }
  function get_onDurationChange($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ondurationchange');
  }
  function set_onDurationChange($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ondurationchange', newValue);
  }
  function get_onEmptied($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onemptied');
  }
  function set_onEmptied($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onemptied', newValue);
  }
  function get_onEnded($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onended');
  }
  function set_onEnded($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onended', newValue);
  }
  function get_onError($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onerror');
  }
  function set_onError($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onerror', newValue);
  }
  function get_onFocus($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onfocus');
  }
  function set_onFocus($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onfocus', newValue);
  }
  function get_onFocusIn($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onfocusin');
  }
  function set_onFocusIn($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onfocusin', newValue);
  }
  function get_onFocusOut($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onfocusout');
  }
  function set_onFocusOut($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onfocusout', newValue);
  }
  function get_onFormChange($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onformchange');
  }
  function set_onFormChange($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onformchange', newValue);
  }
  function get_onFormInput($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onforminput');
  }
  function set_onFormInput($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onforminput', newValue);
  }
  function get_onInput($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'oninput');
  }
  function set_onInput($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'oninput', newValue);
  }
  function get_onInvalid($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'oninvalid');
  }
  function set_onInvalid($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'oninvalid', newValue);
  }
  function get_onKeyDown($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onkeydown');
  }
  function set_onKeyDown($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onkeydown', newValue);
  }
  function get_onKeyPress($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onkeypress');
  }
  function set_onKeyPress($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onkeypress', newValue);
  }
  function get_onKeyUp($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onkeyup');
  }
  function set_onKeyUp($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onkeyup', newValue);
  }
  function get_onLoad($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onload');
  }
  function set_onLoad($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onload', newValue);
  }
  function get_onLoadedData($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onloadeddata');
  }
  function set_onLoadedData($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onloadeddata', newValue);
  }
  function get_onLoadedMetaData($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onloadedmetadata');
  }
  function set_onLoadedMetaData($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onloadedmetadata', newValue);
  }
  function get_onLoadStart($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onloadstart');
  }
  function set_onLoadStart($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onloadstart', newValue);
  }
  function get_onMouseDown($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onmousedown');
  }
  function set_onMouseDown($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onmousedown', newValue);
  }
  function get_onMouseMove($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onmousemove');
  }
  function set_onMouseMove($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onmousemove', newValue);
  }
  function get_onMouseOut($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onmouseout');
  }
  function set_onMouseOut($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onmouseout', newValue);
  }
  function get_onMouseOver($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onmouseover');
  }
  function set_onMouseOver($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onmouseover', newValue);
  }
  function get_onMouseUp($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onmouseup');
  }
  function set_onMouseUp($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onmouseup', newValue);
  }
  function get_onMouseWheel($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onmousewheel');
  }
  function set_onMouseWheel($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onmousewheel', newValue);
  }
  function get_onPause($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onpause');
  }
  function set_onPause($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onpause', newValue);
  }
  function get_onPlay($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onplay');
  }
  function set_onPlay($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onplay', newValue);
  }
  function get_onPlaying($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onplaying');
  }
  function set_onPlaying($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onplaying', newValue);
  }
  function get_onProgress($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onprogress');
  }
  function set_onProgress($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onprogress', newValue);
  }
  function get_onRateChange($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onratechange');
  }
  function set_onRateChange($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onratechange', newValue);
  }
  function get_onReadyStateChange($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onreadystatechange');
  }
  function set_onReadyStateChange($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onreadystatechange', newValue);
  }
  function get_onScroll($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onscroll');
  }
  function set_onScroll($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onscroll', newValue);
  }
  function get_onSearch($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onsearch');
  }
  function set_onSearch($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onsearch', newValue);
  }
  function get_onSeeked($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onseeked');
  }
  function set_onSeeked($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onseeked', newValue);
  }
  function get_onSeeking($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onseeking');
  }
  function set_onSeeking($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onseeking', newValue);
  }
  function get_onSelect($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onselect');
  }
  function set_onSelect($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onselect', newValue);
  }
  function get_onShow($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onshow');
  }
  function set_onShow($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onshow', newValue);
  }
  function get_onStalled($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onstalled');
  }
  function set_onStalled($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onstalled', newValue);
  }
  function get_onSubmit($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onsubmit');
  }
  function set_onSubmit($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onsubmit', newValue);
  }
  function get_onSuspend($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onsuspend');
  }
  function set_onSuspend($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onsuspend', newValue);
  }
  function get_onTimeUpdate($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ontimeupdate');
  }
  function set_onTimeUpdate($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ontimeupdate', newValue);
  }
  function get_onTouchCancel($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ontouchcancel');
  }
  function set_onTouchCancel($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ontouchcancel', newValue);
  }
  function get_onTouchEnd($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ontouchend');
  }
  function set_onTouchEnd($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ontouchend', newValue);
  }
  function get_onTouchMove($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ontouchmove');
  }
  function set_onTouchMove($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ontouchmove', newValue);
  }
  function get_onTouchStart($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ontouchstart');
  }
  function set_onTouchStart($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ontouchstart', newValue);
  }
  function get_onVolumeChange($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onvolumechange');
  }
  function set_onVolumeChange($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onvolumechange', newValue);
  }
  function get_onWaiting($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onwaiting');
  }
  function set_onWaiting($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onwaiting', newValue);
  }
  function get_onWheel($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'onwheel');
  }
  function set_onWheel($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'onwheel', newValue);
  }
  function get_role($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'role');
  }
  function set_role($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'role', newValue);
  }
  function get_runAt($receiver) {
    return attributeRunAtEnumRunAtValues.get_txhc1s$($receiver, 'runat');
  }
  function set_runAt($receiver, newValue) {
    attributeRunAtEnumRunAtValues.set_fid0sb$($receiver, 'runat', newValue);
  }
  function get_spellCheck($receiver) {
    return attributeBooleanBoolean.get_txhc1s$($receiver, 'spellcheck');
  }
  function set_spellCheck($receiver, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver, 'spellcheck', newValue);
  }
  function get_style($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'style');
  }
  function set_style($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'style', newValue);
  }
  function get_subject($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'subject');
  }
  function set_subject($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'subject', newValue);
  }
  function get_tabIndex($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'tabIndex');
  }
  function set_tabIndex($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'tabIndex', newValue);
  }
  function get_title($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'title');
  }
  function set_title($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'title', newValue);
  }
  function FormServerAttributeGroupFacade() {
  }
  FormServerAttributeGroupFacade.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FormServerAttributeGroupFacade',
    interfaces: [Tag]
  };
  function get_defaultButton($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'DefaultButton');
  }
  function set_defaultButton($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'DefaultButton', newValue);
  }
  function get_defaultFocus($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'DefaultFocus');
  }
  function set_defaultFocus($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'DefaultFocus', newValue);
  }
  function get_submitDisabledControls($receiver) {
    return attributeBooleanBoolean.get_txhc1s$($receiver, 'SubmitDisabledControls');
  }
  function set_submitDisabledControls($receiver, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver, 'SubmitDisabledControls', newValue);
  }
  function InputServerAttributeGroupFacade() {
  }
  InputServerAttributeGroupFacade.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InputServerAttributeGroupFacade',
    interfaces: [Tag]
  };
  function get_causesValidation($receiver) {
    return attributeBooleanBoolean.get_txhc1s$($receiver, 'CausesValidation');
  }
  function set_causesValidation($receiver, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver, 'CausesValidation', newValue);
  }
  function get_validationGroup($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'ValidationGroup');
  }
  function set_validationGroup($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'ValidationGroup', newValue);
  }
  function SelectServerAttributeGroupFacade() {
  }
  SelectServerAttributeGroupFacade.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SelectServerAttributeGroupFacade',
    interfaces: [Tag]
  };
  function get_dataSourceID($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'DataSourceID');
  }
  function set_dataSourceID($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'DataSourceID', newValue);
  }
  function get_dataTextField($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'DataTextField');
  }
  function set_dataTextField($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'DataTextField', newValue);
  }
  function get_dataValueField($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'DataValueField');
  }
  function set_dataValueField($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'DataValueField', newValue);
  }
  var attributeStringString;
  var attributeSetStringStringSet;
  var attributeBooleanBoolean;
  var attributeBooleanBooleanOnOff;
  var attributeBooleanTicker;
  var attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
  var attributeButtonFormMethodEnumButtonFormMethodValues;
  var attributeButtonTypeEnumButtonTypeValues;
  var attributeCommandTypeEnumCommandTypeValues;
  var attributeDirEnumDirValues;
  var attributeDraggableEnumDraggableValues;
  var attributeFormEncTypeEnumFormEncTypeValues;
  var attributeFormMethodEnumFormMethodValues;
  var attributeIframeSandboxEnumIframeSandboxValues;
  var attributeInputFormEncTypeEnumInputFormEncTypeValues;
  var attributeInputFormMethodEnumInputFormMethodValues;
  var attributeInputTypeEnumInputTypeValues;
  var attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
  var attributeRunAtEnumRunAtValues;
  var attributeTextAreaWrapEnumTextAreaWrapValues;
  var attributeThScopeEnumThScopeValues;
  var a = defineInlineFunction('kotlinx-html-js.kotlinx.html.a_5skjyn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.kotlinx.html.A;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function a$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, href, target, classes, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = a$lambda;
      var $receiver_0 = new A_init(attributesMapOf(['href', href, 'target', target, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var abbr = defineInlineFunction('kotlinx-html-js.kotlinx.html.abbr_6inr0p$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ABBR_init = _.kotlinx.html.ABBR;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function abbr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = abbr$lambda;
      var $receiver_0 = new ABBR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var address = defineInlineFunction('kotlinx-html-js.kotlinx.html.address_a2fi0u$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ADDRESS_init = _.kotlinx.html.ADDRESS;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function address$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = address$lambda;
      var $receiver_0 = new ADDRESS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var area = defineInlineFunction('kotlinx-html-js.kotlinx.html.area_itdnqx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.kotlinx.html.AREA;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function area$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, shape, alt, classes, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = area$lambda;
      var $receiver_0 = new AREA_init(attributesMapOf(['Shape', shape != null ? enumEncode(shape) : null, 'alt', alt, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var article = defineInlineFunction('kotlinx-html-js.kotlinx.html.article_m04wvw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ARTICLE_init = _.kotlinx.html.ARTICLE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function article$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = article$lambda;
      var $receiver_0 = new ARTICLE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var aside = defineInlineFunction('kotlinx-html-js.kotlinx.html.aside_p5o5s6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ASIDE_init = _.kotlinx.html.ASIDE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function aside$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = aside$lambda;
      var $receiver_0 = new ASIDE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var audio = defineInlineFunction('kotlinx-html-js.kotlinx.html.audio_pitgtg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var AUDIO_init = _.kotlinx.html.AUDIO;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function audio$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = audio$lambda;
      var $receiver_0 = new AUDIO_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var b = defineInlineFunction('kotlinx-html-js.kotlinx.html.b_pw134g$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var B_init = _.kotlinx.html.B;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function b$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = b$lambda;
      var $receiver_0 = new B_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var base = defineInlineFunction('kotlinx-html-js.kotlinx.html.base_kuydqv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BASE_init = _.kotlinx.html.BASE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function base$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = base$lambda;
      var $receiver_0 = new BASE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var bdi = defineInlineFunction('kotlinx-html-js.kotlinx.html.bdi_yt7dfv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BDI_init = _.kotlinx.html.BDI;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function bdi$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = bdi$lambda;
      var $receiver_0 = new BDI_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var bdo = defineInlineFunction('kotlinx-html-js.kotlinx.html.bdo_xzrhyz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BDO_init = _.kotlinx.html.BDO;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function bdo$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = bdo$lambda;
      var $receiver_0 = new BDO_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var blockQuote = defineInlineFunction('kotlinx-html-js.kotlinx.html.blockQuote_kqn8r$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BLOCKQUOTE_init = _.kotlinx.html.BLOCKQUOTE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function blockQuote$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = blockQuote$lambda;
      var $receiver_0 = new BLOCKQUOTE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var body = defineInlineFunction('kotlinx-html-js.kotlinx.html.body_z1rdug$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BODY_init = _.kotlinx.html.BODY;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function body$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = body$lambda;
      var $receiver_0 = new BODY_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var br = defineInlineFunction('kotlinx-html-js.kotlinx.html.br_msntey$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BR_init = _.kotlinx.html.BR;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function br$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = br$lambda;
      var $receiver_0 = new BR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var button = defineInlineFunction('kotlinx-html-js.kotlinx.html.button_yup7tf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.kotlinx.html.BUTTON;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function button$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = button$lambda;
      var $receiver_0 = new BUTTON_init(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function canvas$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function canvas($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new CANVAS(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      canvas$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var canvas_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.canvas_q2368u$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.kotlinx.html.CANVAS;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function canvas$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = canvas$lambda;
      var $receiver_0 = new CANVAS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var caption = defineInlineFunction('kotlinx-html-js.kotlinx.html.caption_7tv3ws$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CAPTION_init = _.kotlinx.html.CAPTION;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function caption$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = caption$lambda;
      var $receiver_0 = new CAPTION_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var cite = defineInlineFunction('kotlinx-html-js.kotlinx.html.cite_1ndov1$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CITE_init = _.kotlinx.html.CITE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function cite$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = cite$lambda;
      var $receiver_0 = new CITE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var code = defineInlineFunction('kotlinx-html-js.kotlinx.html.code_c7b9vx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CODE_init = _.kotlinx.html.CODE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function code$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = code$lambda;
      var $receiver_0 = new CODE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var col = defineInlineFunction('kotlinx-html-js.kotlinx.html.col_dptvv2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var COL_init = _.kotlinx.html.COL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function col$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = col$lambda;
      var $receiver_0 = new COL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var colGroup = defineInlineFunction('kotlinx-html-js.kotlinx.html.colGroup_y3yo5h$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var COLGROUP_init = _.kotlinx.html.COLGROUP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function colGroup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = colGroup$lambda;
      var $receiver_0 = new COLGROUP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var command = defineInlineFunction('kotlinx-html-js.kotlinx.html.command_n3gfsd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var COMMAND_init = _.kotlinx.html.COMMAND;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function command$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, classes, block) {
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = command$lambda;
      var $receiver_0 = new COMMAND_init(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var dataList = defineInlineFunction('kotlinx-html-js.kotlinx.html.dataList_7wdw0e$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DATALIST_init = _.kotlinx.html.DATALIST;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dataList$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dataList$lambda;
      var $receiver_0 = new DATALIST_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var dd = defineInlineFunction('kotlinx-html-js.kotlinx.html.dd_ufas1y$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DD_init = _.kotlinx.html.DD;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dd$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dd$lambda;
      var $receiver_0 = new DD_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var del = defineInlineFunction('kotlinx-html-js.kotlinx.html.del_ks3snt$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DEL_init = _.kotlinx.html.DEL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function del$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = del$lambda;
      var $receiver_0 = new DEL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var details = defineInlineFunction('kotlinx-html-js.kotlinx.html.details_lsny6o$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DETAILS_init = _.kotlinx.html.DETAILS;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function details$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = details$lambda;
      var $receiver_0 = new DETAILS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var dfn = defineInlineFunction('kotlinx-html-js.kotlinx.html.dfn_qz8qfa$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DFN_init = _.kotlinx.html.DFN;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dfn$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dfn$lambda;
      var $receiver_0 = new DFN_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var dialog = defineInlineFunction('kotlinx-html-js.kotlinx.html.dialog_tmuuku$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DIALOG_init = _.kotlinx.html.DIALOG;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dialog$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dialog$lambda;
      var $receiver_0 = new DIALOG_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var div = defineInlineFunction('kotlinx-html-js.kotlinx.html.div_59el9d$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DIV_init = _.kotlinx.html.DIV;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function div$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = div$lambda;
      var $receiver_0 = new DIV_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var dl = defineInlineFunction('kotlinx-html-js.kotlinx.html.dl_jwau0i$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DL_init = _.kotlinx.html.DL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dl$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dl$lambda;
      var $receiver_0 = new DL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var dt = defineInlineFunction('kotlinx-html-js.kotlinx.html.dt_t7lw6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DT_init = _.kotlinx.html.DT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dt$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dt$lambda;
      var $receiver_0 = new DT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var em = defineInlineFunction('kotlinx-html-js.kotlinx.html.em_83d4cy$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var EM_init = _.kotlinx.html.EM;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function em$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = em$lambda;
      var $receiver_0 = new EM_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var embed = defineInlineFunction('kotlinx-html-js.kotlinx.html.embed_93iexz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var EMBED_init = _.kotlinx.html.EMBED;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function embed$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = embed$lambda;
      var $receiver_0 = new EMBED_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var fieldSet = defineInlineFunction('kotlinx-html-js.kotlinx.html.fieldSet_wmxr1q$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIELDSET_init = _.kotlinx.html.FIELDSET;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function fieldSet$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = fieldSet$lambda;
      var $receiver_0 = new FIELDSET_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var figcaption = defineInlineFunction('kotlinx-html-js.kotlinx.html.figcaption_cm1syw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIGCAPTION_init = _.kotlinx.html.FIGCAPTION;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function figcaption$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = figcaption$lambda;
      var $receiver_0 = new FIGCAPTION_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var figure = defineInlineFunction('kotlinx-html-js.kotlinx.html.figure_fnm6ty$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIGURE_init = _.kotlinx.html.FIGURE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function figure$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = figure$lambda;
      var $receiver_0 = new FIGURE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var footer = defineInlineFunction('kotlinx-html-js.kotlinx.html.footer_x2k50h$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FOOTER_init = _.kotlinx.html.FOOTER;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function footer$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = footer$lambda;
      var $receiver_0 = new FOOTER_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var form = defineInlineFunction('kotlinx-html-js.kotlinx.html.form_3ereno$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.kotlinx.html.FORM;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function form$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, action, encType, method, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = form$lambda;
      var $receiver_0 = new FORM_init(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', method != null ? enumEncode(method) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var h1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h1_qzc46n$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H1_init = _.kotlinx.html.H1;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h1$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h1$lambda;
      var $receiver_0 = new H1_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var h2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h2_wky4k0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H2_init = _.kotlinx.html.H2;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h2$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h2$lambda;
      var $receiver_0 = new H2_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var h3 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h3_l44bbj$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H3_init = _.kotlinx.html.H3;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h3$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h3$lambda;
      var $receiver_0 = new H3_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var h4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h4_9nai32$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H4_init = _.kotlinx.html.H4;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h4$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h4$lambda;
      var $receiver_0 = new H4_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var h5 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h5_1tjb5f$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H5_init = _.kotlinx.html.H5;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h5$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h5$lambda;
      var $receiver_0 = new H5_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var h6 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h6_dad4dw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H6_init = _.kotlinx.html.H6;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h6$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h6$lambda;
      var $receiver_0 = new H6_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function head$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function head($receiver, content) {
    if (content === void 0)
      content = '';
    var $receiver_0 = new HEAD(emptyMap_0, $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      head$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var head_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.head_i7x5xd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var HEAD_init = _.kotlinx.html.HEAD;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function head$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, block) {
      if (block === void 0)
        block = head$lambda;
      var $receiver_0 = new HEAD_init(html.emptyMap, $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var header = defineInlineFunction('kotlinx-html-js.kotlinx.html.header_dwfinh$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var HEADER_init = _.kotlinx.html.HEADER;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function header$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = header$lambda;
      var $receiver_0 = new HEADER_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var hGroup = defineInlineFunction('kotlinx-html-js.kotlinx.html.hGroup_o3ebz7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var HGROUP_init = _.kotlinx.html.HGROUP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function hGroup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = hGroup$lambda;
      var $receiver_0 = new HGROUP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var hr = defineInlineFunction('kotlinx-html-js.kotlinx.html.hr_ks0ewg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var HR_init = _.kotlinx.html.HR;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function hr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = hr$lambda;
      var $receiver_0 = new HR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function html$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function html($receiver, content, namespace) {
    if (content === void 0)
      content = '';
    if (namespace === void 0)
      namespace = null;
    var $receiver_0 = new HTML(emptyMap_0, $receiver, namespace);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      html$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var html_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.html_ym5t9t$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var HTML_init = _.kotlinx.html.HTML;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function html$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, namespace, block) {
      if (namespace === void 0)
        namespace = null;
      if (block === void 0)
        block = html$lambda;
      var $receiver_0 = new HTML_init(html.emptyMap, $receiver, namespace);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var i = defineInlineFunction('kotlinx-html-js.kotlinx.html.i_gncgg9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var I_init = _.kotlinx.html.I;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function i$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = i$lambda;
      var $receiver_0 = new I_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function iframe$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function iframe($receiver, sandbox, classes, content) {
    if (sandbox === void 0)
      sandbox = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new IFRAME(attributesMapOf_1(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      iframe$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var iframe_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.iframe_k7pgs2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.kotlinx.html.IFRAME;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function iframe$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, sandbox, classes, block) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = iframe$lambda;
      var $receiver_0 = new IFRAME_init(attributesMapOf(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var img = defineInlineFunction('kotlinx-html-js.kotlinx.html.img_45d5o1$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.kotlinx.html.IMG;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function img$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, alt, src, classes, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = img$lambda;
      var $receiver_0 = new IMG_init(attributesMapOf(['alt', alt, 'src', src, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var input = defineInlineFunction('kotlinx-html-js.kotlinx.html.input_mm0abt$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function input$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, formEncType, formMethod, name, classes, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = input$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var ins = defineInlineFunction('kotlinx-html-js.kotlinx.html.ins_e5g22k$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var INS_init = _.kotlinx.html.INS;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function ins$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ins$lambda;
      var $receiver_0 = new INS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var kbd = defineInlineFunction('kotlinx-html-js.kotlinx.html.kbd_10o0fv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var KBD_init = _.kotlinx.html.KBD;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function kbd$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = kbd$lambda;
      var $receiver_0 = new KBD_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var keyGen = defineInlineFunction('kotlinx-html-js.kotlinx.html.keyGen_19nnnk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var KEYGEN_init = _.kotlinx.html.KEYGEN;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function keyGen$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, keyType, classes, block) {
      if (keyType === void 0)
        keyType = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = keyGen$lambda;
      var $receiver_0 = new KEYGEN_init(attributesMapOf(['keytype', keyType != null ? enumEncode(keyType) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var label = defineInlineFunction('kotlinx-html-js.kotlinx.html.label_j811c2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LABEL_init = _.kotlinx.html.LABEL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function label$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = label$lambda;
      var $receiver_0 = new LABEL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var legend = defineInlineFunction('kotlinx-html-js.kotlinx.html.legend_99jryr$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.kotlinx.html.LEGEND;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function legend$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = legend$lambda;
      var $receiver_0 = new LEGEND_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var li = defineInlineFunction('kotlinx-html-js.kotlinx.html.li_jf6zlv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LI_init = _.kotlinx.html.LI;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function li$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = li$lambda;
      var $receiver_0 = new LI_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var link = defineInlineFunction('kotlinx-html-js.kotlinx.html.link_hbbg0w$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.kotlinx.html.LINK;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function link$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, href, rel, type, block) {
      if (href === void 0)
        href = null;
      if (rel === void 0)
        rel = null;
      if (type === void 0)
        type = null;
      if (block === void 0)
        block = link$lambda;
      var $receiver_0 = new LINK_init(attributesMapOf(['href', href, 'rel', rel, 'type', type]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var main = defineInlineFunction('kotlinx-html-js.kotlinx.html.main_hf6ozl$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MAIN_init = _.kotlinx.html.MAIN;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function main$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = main$lambda;
      var $receiver_0 = new MAIN_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var map = defineInlineFunction('kotlinx-html-js.kotlinx.html.map_r08uhb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var MAP_init = _.kotlinx.html.MAP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function map$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, name, classes, block) {
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = map$lambda;
      var $receiver_0 = new MAP_init(attributesMapOf(['name', name, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var mark = defineInlineFunction('kotlinx-html-js.kotlinx.html.mark_m8f11v$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MARK_init = _.kotlinx.html.MARK;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function mark$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = mark$lambda;
      var $receiver_0 = new MARK_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var math = defineInlineFunction('kotlinx-html-js.kotlinx.html.math_bhulte$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MATH_init = _.kotlinx.html.MATH;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function math$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = math$lambda;
      var $receiver_0 = new MATH_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function mathml$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function mathml($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new MATHML(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      mathml$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var mathml_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.mathml_fvpj0z$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MATHML_init = _.kotlinx.html.MATHML;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function mathml$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = mathml$lambda;
      var $receiver_0 = new MATHML_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var meta = defineInlineFunction('kotlinx-html-js.kotlinx.html.meta_9higvf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.kotlinx.html.META;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function meta$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, name, content, charset, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      if (charset === void 0)
        charset = null;
      if (block === void 0)
        block = meta$lambda;
      var $receiver_0 = new META_init(attributesMapOf(['name', name, 'content', content, 'charset', charset]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var meter = defineInlineFunction('kotlinx-html-js.kotlinx.html.meter_akdp07$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var METER_init = _.kotlinx.html.METER;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function meter$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = meter$lambda;
      var $receiver_0 = new METER_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var nav = defineInlineFunction('kotlinx-html-js.kotlinx.html.nav_pa7bap$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var NAV_init = _.kotlinx.html.NAV;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function nav$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = nav$lambda;
      var $receiver_0 = new NAV_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var noScript = defineInlineFunction('kotlinx-html-js.kotlinx.html.noScript_z591w2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var NOSCRIPT_init = _.kotlinx.html.NOSCRIPT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function noScript$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = noScript$lambda;
      var $receiver_0 = new NOSCRIPT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var htmlObject = defineInlineFunction('kotlinx-html-js.kotlinx.html.htmlObject_dbo9vp$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OBJECT_init = _.kotlinx.html.OBJECT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function htmlObject$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = htmlObject$lambda;
      var $receiver_0 = new OBJECT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var ol = defineInlineFunction('kotlinx-html-js.kotlinx.html.ol_g73xel$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OL_init = _.kotlinx.html.OL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function ol$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ol$lambda;
      var $receiver_0 = new OL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var optGroup = defineInlineFunction('kotlinx-html-js.kotlinx.html.optGroup_3qzn6b$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var OPTGROUP_init = _.kotlinx.html.OPTGROUP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function optGroup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, label, classes, block) {
      if (label === void 0)
        label = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = optGroup$lambda;
      var $receiver_0 = new OPTGROUP_init(attributesMapOf(['label', label, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function option$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function option($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new OPTION(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      option$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var option_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.option_k09m0r$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.kotlinx.html.OPTION;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function option$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = option$lambda;
      var $receiver_0 = new OPTION_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var output = defineInlineFunction('kotlinx-html-js.kotlinx.html.output_q3di9l$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OUTPUT_init = _.kotlinx.html.OUTPUT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function output$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = output$lambda;
      var $receiver_0 = new OUTPUT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var p = defineInlineFunction('kotlinx-html-js.kotlinx.html.p_7ents2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var P_init = _.kotlinx.html.P;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function p$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = p$lambda;
      var $receiver_0 = new P_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var param = defineInlineFunction('kotlinx-html-js.kotlinx.html.param_k9rdkw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.kotlinx.html.PARAM;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function param$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      if (block === void 0)
        block = param$lambda;
      var $receiver_0 = new PARAM_init(attributesMapOf(['name', name, 'value', value]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var picture = defineInlineFunction('kotlinx-html-js.kotlinx.html.picture_841xe9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var PICTURE_init = _.kotlinx.html.PICTURE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function picture$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, block) {
      if (block === void 0)
        block = picture$lambda;
      var $receiver_0 = new PICTURE_init(html.emptyMap, $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var pre = defineInlineFunction('kotlinx-html-js.kotlinx.html.pre_1138nj$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var PRE_init = _.kotlinx.html.PRE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function pre$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = pre$lambda;
      var $receiver_0 = new PRE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var progress = defineInlineFunction('kotlinx-html-js.kotlinx.html.progress_j8bckz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var PROGRESS_init = _.kotlinx.html.PROGRESS;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function progress$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = progress$lambda;
      var $receiver_0 = new PROGRESS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var q = defineInlineFunction('kotlinx-html-js.kotlinx.html.q_425zgf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var Q_init = _.kotlinx.html.Q;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function q$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = q$lambda;
      var $receiver_0 = new Q_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var rp = defineInlineFunction('kotlinx-html-js.kotlinx.html.rp_uoj0sk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var RP_init = _.kotlinx.html.RP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function rp$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rp$lambda;
      var $receiver_0 = new RP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var rt = defineInlineFunction('kotlinx-html-js.kotlinx.html.rt_5iq7rc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var RT_init = _.kotlinx.html.RT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function rt$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rt$lambda;
      var $receiver_0 = new RT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var ruby = defineInlineFunction('kotlinx-html-js.kotlinx.html.ruby_d6wtb4$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var RUBY_init = _.kotlinx.html.RUBY;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function ruby$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ruby$lambda;
      var $receiver_0 = new RUBY_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var samp = defineInlineFunction('kotlinx-html-js.kotlinx.html.samp_sdlho7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SAMP_init = _.kotlinx.html.SAMP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function samp$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = samp$lambda;
      var $receiver_0 = new SAMP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function script$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function script($receiver, type, src, content) {
    if (type === void 0)
      type = null;
    if (src === void 0)
      src = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new SCRIPT(attributesMapOf_1(['type', type, 'src', src]), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      script$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var script_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.script_wupk6s$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.kotlinx.html.SCRIPT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function script$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      if (block === void 0)
        block = script$lambda;
      var $receiver_0 = new SCRIPT_init(attributesMapOf(['type', type, 'src', src]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var section = defineInlineFunction('kotlinx-html-js.kotlinx.html.section_ezs79p$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SECTION_init = _.kotlinx.html.SECTION;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function section$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = section$lambda;
      var $receiver_0 = new SECTION_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var select = defineInlineFunction('kotlinx-html-js.kotlinx.html.select_ty59tq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SELECT_init = _.kotlinx.html.SELECT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function select$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = select$lambda;
      var $receiver_0 = new SELECT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var small = defineInlineFunction('kotlinx-html-js.kotlinx.html.small_fm3dud$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SMALL_init = _.kotlinx.html.SMALL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function small$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = small$lambda;
      var $receiver_0 = new SMALL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var source = defineInlineFunction('kotlinx-html-js.kotlinx.html.source_naaf4v$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SOURCE_init = _.kotlinx.html.SOURCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function source$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = source$lambda;
      var $receiver_0 = new SOURCE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var span = defineInlineFunction('kotlinx-html-js.kotlinx.html.span_fqsp1s$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SPAN_init = _.kotlinx.html.SPAN;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function span$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = span$lambda;
      var $receiver_0 = new SPAN_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var strong = defineInlineFunction('kotlinx-html-js.kotlinx.html.strong_k099i5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var STRONG_init = _.kotlinx.html.STRONG;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function strong$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = strong$lambda;
      var $receiver_0 = new STRONG_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function style$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function style($receiver, type, content) {
    if (type === void 0)
      type = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new STYLE(attributesMapOf_0('type', type), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      style$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var style_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.style_x3xo8v$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.kotlinx.html.STYLE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function style$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      if (block === void 0)
        block = style$lambda;
      var $receiver_0 = new STYLE_init(attributesMapOf('type', type), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var sub = defineInlineFunction('kotlinx-html-js.kotlinx.html.sub_35684y$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SUB_init = _.kotlinx.html.SUB;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function sub$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = sub$lambda;
      var $receiver_0 = new SUB_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var summary = defineInlineFunction('kotlinx-html-js.kotlinx.html.summary_tua37w$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SUMMARY_init = _.kotlinx.html.SUMMARY;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function summary$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = summary$lambda;
      var $receiver_0 = new SUMMARY_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var sup = defineInlineFunction('kotlinx-html-js.kotlinx.html.sup_fc717g$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SUP_init = _.kotlinx.html.SUP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function sup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = sup$lambda;
      var $receiver_0 = new SUP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function svg$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function svg($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new SVG(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      svg$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var svg_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.svg_gi1bim$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.kotlinx.html.SVG;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function svg$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = svg$lambda;
      var $receiver_0 = new SVG_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var table = defineInlineFunction('kotlinx-html-js.kotlinx.html.table_llpdic$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TABLE_init = _.kotlinx.html.TABLE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function table$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = table$lambda;
      var $receiver_0 = new TABLE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var tbody = defineInlineFunction('kotlinx-html-js.kotlinx.html.tbody_ojrhk4$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TBODY_init = _.kotlinx.html.TBODY;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function tbody$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tbody$lambda;
      var $receiver_0 = new TBODY_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var td = defineInlineFunction('kotlinx-html-js.kotlinx.html.td_z82v7u$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TD_init = _.kotlinx.html.TD;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function td$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = td$lambda;
      var $receiver_0 = new TD_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function textArea$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function textArea($receiver, rows, cols, wrap, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (wrap === void 0)
      wrap = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new TEXTAREA(attributesMapOf_1(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      textArea$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var textArea_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.textArea_wfpz2l$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.kotlinx.html.TEXTAREA;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function textArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, rows, cols, wrap, classes, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = textArea$lambda;
      var $receiver_0 = new TEXTAREA_init(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var tfoot = defineInlineFunction('kotlinx-html-js.kotlinx.html.tfoot_eqq100$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TFOOT_init = _.kotlinx.html.TFOOT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function tfoot$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tfoot$lambda;
      var $receiver_0 = new TFOOT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var th = defineInlineFunction('kotlinx-html-js.kotlinx.html.th_cjoo5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.kotlinx.html.TH;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function th$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, scope, classes, block) {
      if (scope === void 0)
        scope = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = th$lambda;
      var $receiver_0 = new TH_init(attributesMapOf(['scope', scope != null ? enumEncode(scope) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var thead = defineInlineFunction('kotlinx-html-js.kotlinx.html.thead_fwe93y$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var THEAD_init = _.kotlinx.html.THEAD;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function thead$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = thead$lambda;
      var $receiver_0 = new THEAD_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var time = defineInlineFunction('kotlinx-html-js.kotlinx.html.time_or12qb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TIME_init = _.kotlinx.html.TIME;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function time$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = time$lambda;
      var $receiver_0 = new TIME_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function title$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function title($receiver, content) {
    if (content === void 0)
      content = '';
    var $receiver_0 = new TITLE(emptyMap_0, $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      title$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var title_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.title_pc70yd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var TITLE_init = _.kotlinx.html.TITLE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function title$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, block) {
      if (block === void 0)
        block = title$lambda;
      var $receiver_0 = new TITLE_init(html.emptyMap, $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var tr = defineInlineFunction('kotlinx-html-js.kotlinx.html.tr_gqplvg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.kotlinx.html.TR;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function tr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tr$lambda;
      var $receiver_0 = new TR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var ul = defineInlineFunction('kotlinx-html-js.kotlinx.html.ul_e6giw3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var UL_init = _.kotlinx.html.UL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function ul$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ul$lambda;
      var $receiver_0 = new UL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var htmlVar = defineInlineFunction('kotlinx-html-js.kotlinx.html.htmlVar_87cnpn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var VAR_init = _.kotlinx.html.VAR;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function htmlVar$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = htmlVar$lambda;
      var $receiver_0 = new VAR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var video = defineInlineFunction('kotlinx-html-js.kotlinx.html.video_7h26o9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var VIDEO_init = _.kotlinx.html.VIDEO;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function video$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = video$lambda;
      var $receiver_0 = new VIDEO_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function Entities(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Entities_initFields() {
    Entities_initFields = function () {
    };
    Entities$nbsp_instance = new Entities('nbsp', 0);
    Entities$lt_instance = new Entities('lt', 1);
    Entities$gt_instance = new Entities('gt', 2);
    Entities$quot_instance = new Entities('quot', 3);
    Entities$amp_instance = new Entities('amp', 4);
    Entities$apos_instance = new Entities('apos', 5);
    Entities$iexcl_instance = new Entities('iexcl', 6);
    Entities$cent_instance = new Entities('cent', 7);
    Entities$pound_instance = new Entities('pound', 8);
    Entities$curren_instance = new Entities('curren', 9);
    Entities$yen_instance = new Entities('yen', 10);
    Entities$brvbar_instance = new Entities('brvbar', 11);
    Entities$sect_instance = new Entities('sect', 12);
    Entities$uml_instance = new Entities('uml', 13);
    Entities$copy_instance = new Entities('copy', 14);
    Entities$ordf_instance = new Entities('ordf', 15);
    Entities$laquo_instance = new Entities('laquo', 16);
    Entities$not_instance = new Entities('not', 17);
    Entities$shy_instance = new Entities('shy', 18);
    Entities$reg_instance = new Entities('reg', 19);
    Entities$macr_instance = new Entities('macr', 20);
    Entities$deg_instance = new Entities('deg', 21);
    Entities$plusmn_instance = new Entities('plusmn', 22);
    Entities$sup2_instance = new Entities('sup2', 23);
    Entities$sup3_instance = new Entities('sup3', 24);
    Entities$acute_instance = new Entities('acute', 25);
    Entities$micro_instance = new Entities('micro', 26);
    Entities$para_instance = new Entities('para', 27);
    Entities$middot_instance = new Entities('middot', 28);
    Entities$cedil_instance = new Entities('cedil', 29);
    Entities$sup1_instance = new Entities('sup1', 30);
    Entities$ordm_instance = new Entities('ordm', 31);
    Entities$raquo_instance = new Entities('raquo', 32);
    Entities$frac14_instance = new Entities('frac14', 33);
    Entities$frac12_instance = new Entities('frac12', 34);
    Entities$frac34_instance = new Entities('frac34', 35);
    Entities$iquest_instance = new Entities('iquest', 36);
    Entities$Agrave_instance = new Entities('Agrave', 37);
    Entities$Aacute_instance = new Entities('Aacute', 38);
    Entities$Acirc_instance = new Entities('Acirc', 39);
    Entities$Atilde_instance = new Entities('Atilde', 40);
    Entities$Auml_instance = new Entities('Auml', 41);
    Entities$Aring_instance = new Entities('Aring', 42);
    Entities$AElig_instance = new Entities('AElig', 43);
    Entities$Ccedil_instance = new Entities('Ccedil', 44);
    Entities$Egrave_instance = new Entities('Egrave', 45);
    Entities$Eacute_instance = new Entities('Eacute', 46);
    Entities$Ecirc_instance = new Entities('Ecirc', 47);
    Entities$Euml_instance = new Entities('Euml', 48);
    Entities$Igrave_instance = new Entities('Igrave', 49);
    Entities$Iacute_instance = new Entities('Iacute', 50);
    Entities$Icirc_instance = new Entities('Icirc', 51);
    Entities$Iuml_instance = new Entities('Iuml', 52);
    Entities$ETH_instance = new Entities('ETH', 53);
    Entities$Ntilde_instance = new Entities('Ntilde', 54);
    Entities$Ograve_instance = new Entities('Ograve', 55);
    Entities$Oacute_instance = new Entities('Oacute', 56);
    Entities$Ocirc_instance = new Entities('Ocirc', 57);
    Entities$Otilde_instance = new Entities('Otilde', 58);
    Entities$Ouml_instance = new Entities('Ouml', 59);
    Entities$times_instance = new Entities('times', 60);
    Entities$Oslash_instance = new Entities('Oslash', 61);
    Entities$Ugrave_instance = new Entities('Ugrave', 62);
    Entities$Uacute_instance = new Entities('Uacute', 63);
    Entities$Ucirc_instance = new Entities('Ucirc', 64);
    Entities$Uuml_instance = new Entities('Uuml', 65);
    Entities$Yacute_instance = new Entities('Yacute', 66);
    Entities$THORN_instance = new Entities('THORN', 67);
    Entities$szlig_instance = new Entities('szlig', 68);
    Entities$agrave_instance = new Entities('agrave', 69);
    Entities$aacute_instance = new Entities('aacute', 70);
    Entities$acirc_instance = new Entities('acirc', 71);
    Entities$atilde_instance = new Entities('atilde', 72);
    Entities$auml_instance = new Entities('auml', 73);
    Entities$aring_instance = new Entities('aring', 74);
    Entities$aelig_instance = new Entities('aelig', 75);
    Entities$ccedil_instance = new Entities('ccedil', 76);
    Entities$egrave_instance = new Entities('egrave', 77);
    Entities$eacute_instance = new Entities('eacute', 78);
    Entities$ecirc_instance = new Entities('ecirc', 79);
    Entities$euml_instance = new Entities('euml', 80);
    Entities$igrave_instance = new Entities('igrave', 81);
    Entities$iacute_instance = new Entities('iacute', 82);
    Entities$icirc_instance = new Entities('icirc', 83);
    Entities$iuml_instance = new Entities('iuml', 84);
    Entities$eth_instance = new Entities('eth', 85);
    Entities$ntilde_instance = new Entities('ntilde', 86);
    Entities$ograve_instance = new Entities('ograve', 87);
    Entities$oacute_instance = new Entities('oacute', 88);
    Entities$ocirc_instance = new Entities('ocirc', 89);
    Entities$otilde_instance = new Entities('otilde', 90);
    Entities$ouml_instance = new Entities('ouml', 91);
    Entities$divide_instance = new Entities('divide', 92);
    Entities$oslash_instance = new Entities('oslash', 93);
    Entities$ugrave_instance = new Entities('ugrave', 94);
    Entities$uacute_instance = new Entities('uacute', 95);
    Entities$ucirc_instance = new Entities('ucirc', 96);
    Entities$uuml_instance = new Entities('uuml', 97);
    Entities$yacute_instance = new Entities('yacute', 98);
    Entities$thorn_instance = new Entities('thorn', 99);
    Entities$yuml_instance = new Entities('yuml', 100);
  }
  var Entities$nbsp_instance;
  function Entities$nbsp_getInstance() {
    Entities_initFields();
    return Entities$nbsp_instance;
  }
  var Entities$lt_instance;
  function Entities$lt_getInstance() {
    Entities_initFields();
    return Entities$lt_instance;
  }
  var Entities$gt_instance;
  function Entities$gt_getInstance() {
    Entities_initFields();
    return Entities$gt_instance;
  }
  var Entities$quot_instance;
  function Entities$quot_getInstance() {
    Entities_initFields();
    return Entities$quot_instance;
  }
  var Entities$amp_instance;
  function Entities$amp_getInstance() {
    Entities_initFields();
    return Entities$amp_instance;
  }
  var Entities$apos_instance;
  function Entities$apos_getInstance() {
    Entities_initFields();
    return Entities$apos_instance;
  }
  var Entities$iexcl_instance;
  function Entities$iexcl_getInstance() {
    Entities_initFields();
    return Entities$iexcl_instance;
  }
  var Entities$cent_instance;
  function Entities$cent_getInstance() {
    Entities_initFields();
    return Entities$cent_instance;
  }
  var Entities$pound_instance;
  function Entities$pound_getInstance() {
    Entities_initFields();
    return Entities$pound_instance;
  }
  var Entities$curren_instance;
  function Entities$curren_getInstance() {
    Entities_initFields();
    return Entities$curren_instance;
  }
  var Entities$yen_instance;
  function Entities$yen_getInstance() {
    Entities_initFields();
    return Entities$yen_instance;
  }
  var Entities$brvbar_instance;
  function Entities$brvbar_getInstance() {
    Entities_initFields();
    return Entities$brvbar_instance;
  }
  var Entities$sect_instance;
  function Entities$sect_getInstance() {
    Entities_initFields();
    return Entities$sect_instance;
  }
  var Entities$uml_instance;
  function Entities$uml_getInstance() {
    Entities_initFields();
    return Entities$uml_instance;
  }
  var Entities$copy_instance;
  function Entities$copy_getInstance() {
    Entities_initFields();
    return Entities$copy_instance;
  }
  var Entities$ordf_instance;
  function Entities$ordf_getInstance() {
    Entities_initFields();
    return Entities$ordf_instance;
  }
  var Entities$laquo_instance;
  function Entities$laquo_getInstance() {
    Entities_initFields();
    return Entities$laquo_instance;
  }
  var Entities$not_instance;
  function Entities$not_getInstance() {
    Entities_initFields();
    return Entities$not_instance;
  }
  var Entities$shy_instance;
  function Entities$shy_getInstance() {
    Entities_initFields();
    return Entities$shy_instance;
  }
  var Entities$reg_instance;
  function Entities$reg_getInstance() {
    Entities_initFields();
    return Entities$reg_instance;
  }
  var Entities$macr_instance;
  function Entities$macr_getInstance() {
    Entities_initFields();
    return Entities$macr_instance;
  }
  var Entities$deg_instance;
  function Entities$deg_getInstance() {
    Entities_initFields();
    return Entities$deg_instance;
  }
  var Entities$plusmn_instance;
  function Entities$plusmn_getInstance() {
    Entities_initFields();
    return Entities$plusmn_instance;
  }
  var Entities$sup2_instance;
  function Entities$sup2_getInstance() {
    Entities_initFields();
    return Entities$sup2_instance;
  }
  var Entities$sup3_instance;
  function Entities$sup3_getInstance() {
    Entities_initFields();
    return Entities$sup3_instance;
  }
  var Entities$acute_instance;
  function Entities$acute_getInstance() {
    Entities_initFields();
    return Entities$acute_instance;
  }
  var Entities$micro_instance;
  function Entities$micro_getInstance() {
    Entities_initFields();
    return Entities$micro_instance;
  }
  var Entities$para_instance;
  function Entities$para_getInstance() {
    Entities_initFields();
    return Entities$para_instance;
  }
  var Entities$middot_instance;
  function Entities$middot_getInstance() {
    Entities_initFields();
    return Entities$middot_instance;
  }
  var Entities$cedil_instance;
  function Entities$cedil_getInstance() {
    Entities_initFields();
    return Entities$cedil_instance;
  }
  var Entities$sup1_instance;
  function Entities$sup1_getInstance() {
    Entities_initFields();
    return Entities$sup1_instance;
  }
  var Entities$ordm_instance;
  function Entities$ordm_getInstance() {
    Entities_initFields();
    return Entities$ordm_instance;
  }
  var Entities$raquo_instance;
  function Entities$raquo_getInstance() {
    Entities_initFields();
    return Entities$raquo_instance;
  }
  var Entities$frac14_instance;
  function Entities$frac14_getInstance() {
    Entities_initFields();
    return Entities$frac14_instance;
  }
  var Entities$frac12_instance;
  function Entities$frac12_getInstance() {
    Entities_initFields();
    return Entities$frac12_instance;
  }
  var Entities$frac34_instance;
  function Entities$frac34_getInstance() {
    Entities_initFields();
    return Entities$frac34_instance;
  }
  var Entities$iquest_instance;
  function Entities$iquest_getInstance() {
    Entities_initFields();
    return Entities$iquest_instance;
  }
  var Entities$Agrave_instance;
  function Entities$Agrave_getInstance() {
    Entities_initFields();
    return Entities$Agrave_instance;
  }
  var Entities$Aacute_instance;
  function Entities$Aacute_getInstance() {
    Entities_initFields();
    return Entities$Aacute_instance;
  }
  var Entities$Acirc_instance;
  function Entities$Acirc_getInstance() {
    Entities_initFields();
    return Entities$Acirc_instance;
  }
  var Entities$Atilde_instance;
  function Entities$Atilde_getInstance() {
    Entities_initFields();
    return Entities$Atilde_instance;
  }
  var Entities$Auml_instance;
  function Entities$Auml_getInstance() {
    Entities_initFields();
    return Entities$Auml_instance;
  }
  var Entities$Aring_instance;
  function Entities$Aring_getInstance() {
    Entities_initFields();
    return Entities$Aring_instance;
  }
  var Entities$AElig_instance;
  function Entities$AElig_getInstance() {
    Entities_initFields();
    return Entities$AElig_instance;
  }
  var Entities$Ccedil_instance;
  function Entities$Ccedil_getInstance() {
    Entities_initFields();
    return Entities$Ccedil_instance;
  }
  var Entities$Egrave_instance;
  function Entities$Egrave_getInstance() {
    Entities_initFields();
    return Entities$Egrave_instance;
  }
  var Entities$Eacute_instance;
  function Entities$Eacute_getInstance() {
    Entities_initFields();
    return Entities$Eacute_instance;
  }
  var Entities$Ecirc_instance;
  function Entities$Ecirc_getInstance() {
    Entities_initFields();
    return Entities$Ecirc_instance;
  }
  var Entities$Euml_instance;
  function Entities$Euml_getInstance() {
    Entities_initFields();
    return Entities$Euml_instance;
  }
  var Entities$Igrave_instance;
  function Entities$Igrave_getInstance() {
    Entities_initFields();
    return Entities$Igrave_instance;
  }
  var Entities$Iacute_instance;
  function Entities$Iacute_getInstance() {
    Entities_initFields();
    return Entities$Iacute_instance;
  }
  var Entities$Icirc_instance;
  function Entities$Icirc_getInstance() {
    Entities_initFields();
    return Entities$Icirc_instance;
  }
  var Entities$Iuml_instance;
  function Entities$Iuml_getInstance() {
    Entities_initFields();
    return Entities$Iuml_instance;
  }
  var Entities$ETH_instance;
  function Entities$ETH_getInstance() {
    Entities_initFields();
    return Entities$ETH_instance;
  }
  var Entities$Ntilde_instance;
  function Entities$Ntilde_getInstance() {
    Entities_initFields();
    return Entities$Ntilde_instance;
  }
  var Entities$Ograve_instance;
  function Entities$Ograve_getInstance() {
    Entities_initFields();
    return Entities$Ograve_instance;
  }
  var Entities$Oacute_instance;
  function Entities$Oacute_getInstance() {
    Entities_initFields();
    return Entities$Oacute_instance;
  }
  var Entities$Ocirc_instance;
  function Entities$Ocirc_getInstance() {
    Entities_initFields();
    return Entities$Ocirc_instance;
  }
  var Entities$Otilde_instance;
  function Entities$Otilde_getInstance() {
    Entities_initFields();
    return Entities$Otilde_instance;
  }
  var Entities$Ouml_instance;
  function Entities$Ouml_getInstance() {
    Entities_initFields();
    return Entities$Ouml_instance;
  }
  var Entities$times_instance;
  function Entities$times_getInstance() {
    Entities_initFields();
    return Entities$times_instance;
  }
  var Entities$Oslash_instance;
  function Entities$Oslash_getInstance() {
    Entities_initFields();
    return Entities$Oslash_instance;
  }
  var Entities$Ugrave_instance;
  function Entities$Ugrave_getInstance() {
    Entities_initFields();
    return Entities$Ugrave_instance;
  }
  var Entities$Uacute_instance;
  function Entities$Uacute_getInstance() {
    Entities_initFields();
    return Entities$Uacute_instance;
  }
  var Entities$Ucirc_instance;
  function Entities$Ucirc_getInstance() {
    Entities_initFields();
    return Entities$Ucirc_instance;
  }
  var Entities$Uuml_instance;
  function Entities$Uuml_getInstance() {
    Entities_initFields();
    return Entities$Uuml_instance;
  }
  var Entities$Yacute_instance;
  function Entities$Yacute_getInstance() {
    Entities_initFields();
    return Entities$Yacute_instance;
  }
  var Entities$THORN_instance;
  function Entities$THORN_getInstance() {
    Entities_initFields();
    return Entities$THORN_instance;
  }
  var Entities$szlig_instance;
  function Entities$szlig_getInstance() {
    Entities_initFields();
    return Entities$szlig_instance;
  }
  var Entities$agrave_instance;
  function Entities$agrave_getInstance() {
    Entities_initFields();
    return Entities$agrave_instance;
  }
  var Entities$aacute_instance;
  function Entities$aacute_getInstance() {
    Entities_initFields();
    return Entities$aacute_instance;
  }
  var Entities$acirc_instance;
  function Entities$acirc_getInstance() {
    Entities_initFields();
    return Entities$acirc_instance;
  }
  var Entities$atilde_instance;
  function Entities$atilde_getInstance() {
    Entities_initFields();
    return Entities$atilde_instance;
  }
  var Entities$auml_instance;
  function Entities$auml_getInstance() {
    Entities_initFields();
    return Entities$auml_instance;
  }
  var Entities$aring_instance;
  function Entities$aring_getInstance() {
    Entities_initFields();
    return Entities$aring_instance;
  }
  var Entities$aelig_instance;
  function Entities$aelig_getInstance() {
    Entities_initFields();
    return Entities$aelig_instance;
  }
  var Entities$ccedil_instance;
  function Entities$ccedil_getInstance() {
    Entities_initFields();
    return Entities$ccedil_instance;
  }
  var Entities$egrave_instance;
  function Entities$egrave_getInstance() {
    Entities_initFields();
    return Entities$egrave_instance;
  }
  var Entities$eacute_instance;
  function Entities$eacute_getInstance() {
    Entities_initFields();
    return Entities$eacute_instance;
  }
  var Entities$ecirc_instance;
  function Entities$ecirc_getInstance() {
    Entities_initFields();
    return Entities$ecirc_instance;
  }
  var Entities$euml_instance;
  function Entities$euml_getInstance() {
    Entities_initFields();
    return Entities$euml_instance;
  }
  var Entities$igrave_instance;
  function Entities$igrave_getInstance() {
    Entities_initFields();
    return Entities$igrave_instance;
  }
  var Entities$iacute_instance;
  function Entities$iacute_getInstance() {
    Entities_initFields();
    return Entities$iacute_instance;
  }
  var Entities$icirc_instance;
  function Entities$icirc_getInstance() {
    Entities_initFields();
    return Entities$icirc_instance;
  }
  var Entities$iuml_instance;
  function Entities$iuml_getInstance() {
    Entities_initFields();
    return Entities$iuml_instance;
  }
  var Entities$eth_instance;
  function Entities$eth_getInstance() {
    Entities_initFields();
    return Entities$eth_instance;
  }
  var Entities$ntilde_instance;
  function Entities$ntilde_getInstance() {
    Entities_initFields();
    return Entities$ntilde_instance;
  }
  var Entities$ograve_instance;
  function Entities$ograve_getInstance() {
    Entities_initFields();
    return Entities$ograve_instance;
  }
  var Entities$oacute_instance;
  function Entities$oacute_getInstance() {
    Entities_initFields();
    return Entities$oacute_instance;
  }
  var Entities$ocirc_instance;
  function Entities$ocirc_getInstance() {
    Entities_initFields();
    return Entities$ocirc_instance;
  }
  var Entities$otilde_instance;
  function Entities$otilde_getInstance() {
    Entities_initFields();
    return Entities$otilde_instance;
  }
  var Entities$ouml_instance;
  function Entities$ouml_getInstance() {
    Entities_initFields();
    return Entities$ouml_instance;
  }
  var Entities$divide_instance;
  function Entities$divide_getInstance() {
    Entities_initFields();
    return Entities$divide_instance;
  }
  var Entities$oslash_instance;
  function Entities$oslash_getInstance() {
    Entities_initFields();
    return Entities$oslash_instance;
  }
  var Entities$ugrave_instance;
  function Entities$ugrave_getInstance() {
    Entities_initFields();
    return Entities$ugrave_instance;
  }
  var Entities$uacute_instance;
  function Entities$uacute_getInstance() {
    Entities_initFields();
    return Entities$uacute_instance;
  }
  var Entities$ucirc_instance;
  function Entities$ucirc_getInstance() {
    Entities_initFields();
    return Entities$ucirc_instance;
  }
  var Entities$uuml_instance;
  function Entities$uuml_getInstance() {
    Entities_initFields();
    return Entities$uuml_instance;
  }
  var Entities$yacute_instance;
  function Entities$yacute_getInstance() {
    Entities_initFields();
    return Entities$yacute_instance;
  }
  var Entities$thorn_instance;
  function Entities$thorn_getInstance() {
    Entities_initFields();
    return Entities$thorn_instance;
  }
  var Entities$yuml_instance;
  function Entities$yuml_getInstance() {
    Entities_initFields();
    return Entities$yuml_instance;
  }
  Object.defineProperty(Entities.prototype, 'text', {
    configurable: true,
    get: function () {
      return '&' + this.toString() + ';';
    }
  });
  Entities.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entities',
    interfaces: [Enum]
  };
  function Entities$values() {
    return [Entities$nbsp_getInstance(), Entities$lt_getInstance(), Entities$gt_getInstance(), Entities$quot_getInstance(), Entities$amp_getInstance(), Entities$apos_getInstance(), Entities$iexcl_getInstance(), Entities$cent_getInstance(), Entities$pound_getInstance(), Entities$curren_getInstance(), Entities$yen_getInstance(), Entities$brvbar_getInstance(), Entities$sect_getInstance(), Entities$uml_getInstance(), Entities$copy_getInstance(), Entities$ordf_getInstance(), Entities$laquo_getInstance(), Entities$not_getInstance(), Entities$shy_getInstance(), Entities$reg_getInstance(), Entities$macr_getInstance(), Entities$deg_getInstance(), Entities$plusmn_getInstance(), Entities$sup2_getInstance(), Entities$sup3_getInstance(), Entities$acute_getInstance(), Entities$micro_getInstance(), Entities$para_getInstance(), Entities$middot_getInstance(), Entities$cedil_getInstance(), Entities$sup1_getInstance(), Entities$ordm_getInstance(), Entities$raquo_getInstance(), Entities$frac14_getInstance(), Entities$frac12_getInstance(), Entities$frac34_getInstance(), Entities$iquest_getInstance(), Entities$Agrave_getInstance(), Entities$Aacute_getInstance(), Entities$Acirc_getInstance(), Entities$Atilde_getInstance(), Entities$Auml_getInstance(), Entities$Aring_getInstance(), Entities$AElig_getInstance(), Entities$Ccedil_getInstance(), Entities$Egrave_getInstance(), Entities$Eacute_getInstance(), Entities$Ecirc_getInstance(), Entities$Euml_getInstance(), Entities$Igrave_getInstance(), Entities$Iacute_getInstance(), Entities$Icirc_getInstance(), Entities$Iuml_getInstance(), Entities$ETH_getInstance(), Entities$Ntilde_getInstance(), Entities$Ograve_getInstance(), Entities$Oacute_getInstance(), Entities$Ocirc_getInstance(), Entities$Otilde_getInstance(), Entities$Ouml_getInstance(), Entities$times_getInstance(), Entities$Oslash_getInstance(), Entities$Ugrave_getInstance(), Entities$Uacute_getInstance(), Entities$Ucirc_getInstance(), Entities$Uuml_getInstance(), Entities$Yacute_getInstance(), Entities$THORN_getInstance(), Entities$szlig_getInstance(), Entities$agrave_getInstance(), Entities$aacute_getInstance(), Entities$acirc_getInstance(), Entities$atilde_getInstance(), Entities$auml_getInstance(), Entities$aring_getInstance(), Entities$aelig_getInstance(), Entities$ccedil_getInstance(), Entities$egrave_getInstance(), Entities$eacute_getInstance(), Entities$ecirc_getInstance(), Entities$euml_getInstance(), Entities$igrave_getInstance(), Entities$iacute_getInstance(), Entities$icirc_getInstance(), Entities$iuml_getInstance(), Entities$eth_getInstance(), Entities$ntilde_getInstance(), Entities$ograve_getInstance(), Entities$oacute_getInstance(), Entities$ocirc_getInstance(), Entities$otilde_getInstance(), Entities$ouml_getInstance(), Entities$divide_getInstance(), Entities$oslash_getInstance(), Entities$ugrave_getInstance(), Entities$uacute_getInstance(), Entities$ucirc_getInstance(), Entities$uuml_getInstance(), Entities$yacute_getInstance(), Entities$thorn_getInstance(), Entities$yuml_getInstance()];
  }
  Entities.values = Entities$values;
  function Entities$valueOf(name) {
    switch (name) {
      case 'nbsp':
        return Entities$nbsp_getInstance();
      case 'lt':
        return Entities$lt_getInstance();
      case 'gt':
        return Entities$gt_getInstance();
      case 'quot':
        return Entities$quot_getInstance();
      case 'amp':
        return Entities$amp_getInstance();
      case 'apos':
        return Entities$apos_getInstance();
      case 'iexcl':
        return Entities$iexcl_getInstance();
      case 'cent':
        return Entities$cent_getInstance();
      case 'pound':
        return Entities$pound_getInstance();
      case 'curren':
        return Entities$curren_getInstance();
      case 'yen':
        return Entities$yen_getInstance();
      case 'brvbar':
        return Entities$brvbar_getInstance();
      case 'sect':
        return Entities$sect_getInstance();
      case 'uml':
        return Entities$uml_getInstance();
      case 'copy':
        return Entities$copy_getInstance();
      case 'ordf':
        return Entities$ordf_getInstance();
      case 'laquo':
        return Entities$laquo_getInstance();
      case 'not':
        return Entities$not_getInstance();
      case 'shy':
        return Entities$shy_getInstance();
      case 'reg':
        return Entities$reg_getInstance();
      case 'macr':
        return Entities$macr_getInstance();
      case 'deg':
        return Entities$deg_getInstance();
      case 'plusmn':
        return Entities$plusmn_getInstance();
      case 'sup2':
        return Entities$sup2_getInstance();
      case 'sup3':
        return Entities$sup3_getInstance();
      case 'acute':
        return Entities$acute_getInstance();
      case 'micro':
        return Entities$micro_getInstance();
      case 'para':
        return Entities$para_getInstance();
      case 'middot':
        return Entities$middot_getInstance();
      case 'cedil':
        return Entities$cedil_getInstance();
      case 'sup1':
        return Entities$sup1_getInstance();
      case 'ordm':
        return Entities$ordm_getInstance();
      case 'raquo':
        return Entities$raquo_getInstance();
      case 'frac14':
        return Entities$frac14_getInstance();
      case 'frac12':
        return Entities$frac12_getInstance();
      case 'frac34':
        return Entities$frac34_getInstance();
      case 'iquest':
        return Entities$iquest_getInstance();
      case 'Agrave':
        return Entities$Agrave_getInstance();
      case 'Aacute':
        return Entities$Aacute_getInstance();
      case 'Acirc':
        return Entities$Acirc_getInstance();
      case 'Atilde':
        return Entities$Atilde_getInstance();
      case 'Auml':
        return Entities$Auml_getInstance();
      case 'Aring':
        return Entities$Aring_getInstance();
      case 'AElig':
        return Entities$AElig_getInstance();
      case 'Ccedil':
        return Entities$Ccedil_getInstance();
      case 'Egrave':
        return Entities$Egrave_getInstance();
      case 'Eacute':
        return Entities$Eacute_getInstance();
      case 'Ecirc':
        return Entities$Ecirc_getInstance();
      case 'Euml':
        return Entities$Euml_getInstance();
      case 'Igrave':
        return Entities$Igrave_getInstance();
      case 'Iacute':
        return Entities$Iacute_getInstance();
      case 'Icirc':
        return Entities$Icirc_getInstance();
      case 'Iuml':
        return Entities$Iuml_getInstance();
      case 'ETH':
        return Entities$ETH_getInstance();
      case 'Ntilde':
        return Entities$Ntilde_getInstance();
      case 'Ograve':
        return Entities$Ograve_getInstance();
      case 'Oacute':
        return Entities$Oacute_getInstance();
      case 'Ocirc':
        return Entities$Ocirc_getInstance();
      case 'Otilde':
        return Entities$Otilde_getInstance();
      case 'Ouml':
        return Entities$Ouml_getInstance();
      case 'times':
        return Entities$times_getInstance();
      case 'Oslash':
        return Entities$Oslash_getInstance();
      case 'Ugrave':
        return Entities$Ugrave_getInstance();
      case 'Uacute':
        return Entities$Uacute_getInstance();
      case 'Ucirc':
        return Entities$Ucirc_getInstance();
      case 'Uuml':
        return Entities$Uuml_getInstance();
      case 'Yacute':
        return Entities$Yacute_getInstance();
      case 'THORN':
        return Entities$THORN_getInstance();
      case 'szlig':
        return Entities$szlig_getInstance();
      case 'agrave':
        return Entities$agrave_getInstance();
      case 'aacute':
        return Entities$aacute_getInstance();
      case 'acirc':
        return Entities$acirc_getInstance();
      case 'atilde':
        return Entities$atilde_getInstance();
      case 'auml':
        return Entities$auml_getInstance();
      case 'aring':
        return Entities$aring_getInstance();
      case 'aelig':
        return Entities$aelig_getInstance();
      case 'ccedil':
        return Entities$ccedil_getInstance();
      case 'egrave':
        return Entities$egrave_getInstance();
      case 'eacute':
        return Entities$eacute_getInstance();
      case 'ecirc':
        return Entities$ecirc_getInstance();
      case 'euml':
        return Entities$euml_getInstance();
      case 'igrave':
        return Entities$igrave_getInstance();
      case 'iacute':
        return Entities$iacute_getInstance();
      case 'icirc':
        return Entities$icirc_getInstance();
      case 'iuml':
        return Entities$iuml_getInstance();
      case 'eth':
        return Entities$eth_getInstance();
      case 'ntilde':
        return Entities$ntilde_getInstance();
      case 'ograve':
        return Entities$ograve_getInstance();
      case 'oacute':
        return Entities$oacute_getInstance();
      case 'ocirc':
        return Entities$ocirc_getInstance();
      case 'otilde':
        return Entities$otilde_getInstance();
      case 'ouml':
        return Entities$ouml_getInstance();
      case 'divide':
        return Entities$divide_getInstance();
      case 'oslash':
        return Entities$oslash_getInstance();
      case 'ugrave':
        return Entities$ugrave_getInstance();
      case 'uacute':
        return Entities$uacute_getInstance();
      case 'ucirc':
        return Entities$ucirc_getInstance();
      case 'uuml':
        return Entities$uuml_getInstance();
      case 'yacute':
        return Entities$yacute_getInstance();
      case 'thorn':
        return Entities$thorn_getInstance();
      case 'yuml':
        return Entities$yuml_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.Entities.' + name);
    }
  }
  Entities.valueOf_61zpoe$ = Entities$valueOf;
  function Dir(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_v17tv0$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Dir_initFields() {
    Dir_initFields = function () {
    };
    Dir$ltr_instance = new Dir('ltr', 0, 'ltr');
    Dir$rtl_instance = new Dir('rtl', 1, 'rtl');
  }
  Object.defineProperty(Dir.prototype, 'realValue', {
    get: function () {
      return this.realValue_v17tv0$_0;
    }
  });
  var Dir$ltr_instance;
  function Dir$ltr_getInstance() {
    Dir_initFields();
    return Dir$ltr_instance;
  }
  var Dir$rtl_instance;
  function Dir$rtl_getInstance() {
    Dir_initFields();
    return Dir$rtl_instance;
  }
  Dir.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dir',
    interfaces: [AttributeEnum, Enum]
  };
  function Dir$values() {
    return [Dir$ltr_getInstance(), Dir$rtl_getInstance()];
  }
  Dir.values = Dir$values;
  function Dir$valueOf(name) {
    switch (name) {
      case 'ltr':
        return Dir$ltr_getInstance();
      case 'rtl':
        return Dir$rtl_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.Dir.' + name);
    }
  }
  Dir.valueOf_61zpoe$ = Dir$valueOf;
  var dirValues;
  function Draggable(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_dqbe24$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Draggable_initFields() {
    Draggable_initFields = function () {
    };
    Draggable$htmlTrue_instance = new Draggable('htmlTrue', 0, 'true');
    Draggable$htmlFalse_instance = new Draggable('htmlFalse', 1, 'false');
    Draggable$auto_instance = new Draggable('auto', 2, 'auto');
  }
  Object.defineProperty(Draggable.prototype, 'realValue', {
    get: function () {
      return this.realValue_dqbe24$_0;
    }
  });
  var Draggable$htmlTrue_instance;
  function Draggable$htmlTrue_getInstance() {
    Draggable_initFields();
    return Draggable$htmlTrue_instance;
  }
  var Draggable$htmlFalse_instance;
  function Draggable$htmlFalse_getInstance() {
    Draggable_initFields();
    return Draggable$htmlFalse_instance;
  }
  var Draggable$auto_instance;
  function Draggable$auto_getInstance() {
    Draggable_initFields();
    return Draggable$auto_instance;
  }
  Draggable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Draggable',
    interfaces: [AttributeEnum, Enum]
  };
  function Draggable$values() {
    return [Draggable$htmlTrue_getInstance(), Draggable$htmlFalse_getInstance(), Draggable$auto_getInstance()];
  }
  Draggable.values = Draggable$values;
  function Draggable$valueOf(name) {
    switch (name) {
      case 'htmlTrue':
        return Draggable$htmlTrue_getInstance();
      case 'htmlFalse':
        return Draggable$htmlFalse_getInstance();
      case 'auto':
        return Draggable$auto_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.Draggable.' + name);
    }
  }
  Draggable.valueOf_61zpoe$ = Draggable$valueOf;
  var draggableValues;
  function RunAt(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_ms5t7h$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RunAt_initFields() {
    RunAt_initFields = function () {
    };
    RunAt$server_instance = new RunAt('server', 0, 'server');
  }
  Object.defineProperty(RunAt.prototype, 'realValue', {
    get: function () {
      return this.realValue_ms5t7h$_0;
    }
  });
  var RunAt$server_instance;
  function RunAt$server_getInstance() {
    RunAt_initFields();
    return RunAt$server_instance;
  }
  RunAt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RunAt',
    interfaces: [AttributeEnum, Enum]
  };
  function RunAt$values() {
    return [RunAt$server_getInstance()];
  }
  RunAt.values = RunAt$values;
  function RunAt$valueOf(name) {
    switch (name) {
      case 'server':
        return RunAt$server_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.RunAt.' + name);
    }
  }
  RunAt.valueOf_61zpoe$ = RunAt$valueOf;
  var runAtValues;
  function ATarget() {
    ATarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf_0(['blank', 'parent', 'self', 'top']);
  }
  ATarget.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ATarget',
    interfaces: []
  };
  var ATarget_instance = null;
  function ATarget_getInstance() {
    if (ATarget_instance === null) {
      new ATarget();
    }
    return ATarget_instance;
  }
  function ARel() {
    ARel_instance = this;
    this.alternate = 'Alternate';
    this.appEndIx = 'Appendix';
    this.bookmark = 'Bookmark';
    this.chapter = 'Chapter';
    this.contentS = 'Contents';
    this.copyright = 'Copyright';
    this.glossary = 'Glossary';
    this.help = 'Help';
    this.index = 'Index';
    this.next = 'Next';
    this.prev = 'Prev';
    this.section = 'Section';
    this.start = 'Start';
    this.stylesheet = 'Stylesheet';
    this.subsection = 'Subsection';
    this.values = listOf_0(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
  }
  ARel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ARel',
    interfaces: []
  };
  var ARel_instance = null;
  function ARel_getInstance() {
    if (ARel_instance === null) {
      new ARel();
    }
    return ARel_instance;
  }
  function AType() {
    AType_instance = this;
    this.textAsp = 'text/asp';
    this.textAsa = 'text/asa';
    this.textCss = 'text/css';
    this.textHtml = 'text/html';
    this.textJavaScript = 'text/javascript';
    this.textPlain = 'text/plain';
    this.textScriptLet = 'text/scriptlet';
    this.textXComponent = 'text/x-component';
    this.textXHtmlInsertion = 'text/x-html-insertion';
    this.textXml = 'text/xml';
    this.values = listOf_0(['textAsp', 'textAsa', 'textCss', 'textHtml', 'textJavaScript', 'textPlain', 'textScriptLet', 'textXComponent', 'textXHtmlInsertion', 'textXml']);
  }
  AType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AType',
    interfaces: []
  };
  var AType_instance = null;
  function AType_getInstance() {
    if (AType_instance === null) {
      new AType();
    }
    return AType_instance;
  }
  function AreaShape(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_3evemr$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AreaShape_initFields() {
    AreaShape_initFields = function () {
    };
    AreaShape$rect_instance = new AreaShape('rect', 0, 'rect');
    AreaShape$circle_instance = new AreaShape('circle', 1, 'circle');
    AreaShape$poly_instance = new AreaShape('poly', 2, 'poly');
    AreaShape$default_instance = new AreaShape('default', 3, 'default');
  }
  Object.defineProperty(AreaShape.prototype, 'realValue', {
    get: function () {
      return this.realValue_3evemr$_0;
    }
  });
  var AreaShape$rect_instance;
  function AreaShape$rect_getInstance() {
    AreaShape_initFields();
    return AreaShape$rect_instance;
  }
  var AreaShape$circle_instance;
  function AreaShape$circle_getInstance() {
    AreaShape_initFields();
    return AreaShape$circle_instance;
  }
  var AreaShape$poly_instance;
  function AreaShape$poly_getInstance() {
    AreaShape_initFields();
    return AreaShape$poly_instance;
  }
  var AreaShape$default_instance;
  function AreaShape$default_getInstance() {
    AreaShape_initFields();
    return AreaShape$default_instance;
  }
  AreaShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AreaShape',
    interfaces: [AttributeEnum, Enum]
  };
  function AreaShape$values() {
    return [AreaShape$rect_getInstance(), AreaShape$circle_getInstance(), AreaShape$poly_getInstance(), AreaShape$default_getInstance()];
  }
  AreaShape.values = AreaShape$values;
  function AreaShape$valueOf(name) {
    switch (name) {
      case 'rect':
        return AreaShape$rect_getInstance();
      case 'circle':
        return AreaShape$circle_getInstance();
      case 'poly':
        return AreaShape$poly_getInstance();
      case 'default':
        return AreaShape$default_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.AreaShape.' + name);
    }
  }
  AreaShape.valueOf_61zpoe$ = AreaShape$valueOf;
  var areaShapeValues;
  function AreaTarget() {
    AreaTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf_0(['blank', 'parent', 'self', 'top']);
  }
  AreaTarget.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AreaTarget',
    interfaces: []
  };
  var AreaTarget_instance = null;
  function AreaTarget_getInstance() {
    if (AreaTarget_instance === null) {
      new AreaTarget();
    }
    return AreaTarget_instance;
  }
  function AreaRel() {
    AreaRel_instance = this;
    this.alternate = 'Alternate';
    this.appEndIx = 'Appendix';
    this.bookmark = 'Bookmark';
    this.chapter = 'Chapter';
    this.contentS = 'Contents';
    this.copyright = 'Copyright';
    this.glossary = 'Glossary';
    this.help = 'Help';
    this.index = 'Index';
    this.next = 'Next';
    this.prev = 'Prev';
    this.section = 'Section';
    this.start = 'Start';
    this.stylesheet = 'Stylesheet';
    this.subsection = 'Subsection';
    this.values = listOf_0(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
  }
  AreaRel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AreaRel',
    interfaces: []
  };
  var AreaRel_instance = null;
  function AreaRel_getInstance() {
    if (AreaRel_instance === null) {
      new AreaRel();
    }
    return AreaRel_instance;
  }
  function BaseTarget() {
    BaseTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf_0(['blank', 'parent', 'self', 'top']);
  }
  BaseTarget.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BaseTarget',
    interfaces: []
  };
  var BaseTarget_instance = null;
  function BaseTarget_getInstance() {
    if (BaseTarget_instance === null) {
      new BaseTarget();
    }
    return BaseTarget_instance;
  }
  function ButtonFormEncType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_jbimyr$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ButtonFormEncType_initFields() {
    ButtonFormEncType_initFields = function () {
    };
    ButtonFormEncType$multipartFormData_instance = new ButtonFormEncType('multipartFormData', 0, 'multipart/form-data');
    ButtonFormEncType$applicationXWwwFormUrlEncoded_instance = new ButtonFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    ButtonFormEncType$textPlain_instance = new ButtonFormEncType('textPlain', 2, 'text/plain');
  }
  Object.defineProperty(ButtonFormEncType.prototype, 'realValue', {
    get: function () {
      return this.realValue_jbimyr$_0;
    }
  });
  var ButtonFormEncType$multipartFormData_instance;
  function ButtonFormEncType$multipartFormData_getInstance() {
    ButtonFormEncType_initFields();
    return ButtonFormEncType$multipartFormData_instance;
  }
  var ButtonFormEncType$applicationXWwwFormUrlEncoded_instance;
  function ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance() {
    ButtonFormEncType_initFields();
    return ButtonFormEncType$applicationXWwwFormUrlEncoded_instance;
  }
  var ButtonFormEncType$textPlain_instance;
  function ButtonFormEncType$textPlain_getInstance() {
    ButtonFormEncType_initFields();
    return ButtonFormEncType$textPlain_instance;
  }
  ButtonFormEncType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ButtonFormEncType',
    interfaces: [AttributeEnum, Enum]
  };
  function ButtonFormEncType$values() {
    return [ButtonFormEncType$multipartFormData_getInstance(), ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance(), ButtonFormEncType$textPlain_getInstance()];
  }
  ButtonFormEncType.values = ButtonFormEncType$values;
  function ButtonFormEncType$valueOf(name) {
    switch (name) {
      case 'multipartFormData':
        return ButtonFormEncType$multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return ButtonFormEncType$textPlain_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.ButtonFormEncType.' + name);
    }
  }
  ButtonFormEncType.valueOf_61zpoe$ = ButtonFormEncType$valueOf;
  var buttonFormEncTypeValues;
  function ButtonFormMethod(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_d5r8tu$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ButtonFormMethod_initFields() {
    ButtonFormMethod_initFields = function () {
    };
    ButtonFormMethod$get_instance = new ButtonFormMethod('get', 0, 'get');
    ButtonFormMethod$post_instance = new ButtonFormMethod('post', 1, 'post');
    ButtonFormMethod$put_instance = new ButtonFormMethod('put', 2, 'put');
    ButtonFormMethod$delete_instance = new ButtonFormMethod('delete', 3, 'delete');
    ButtonFormMethod$patch_instance = new ButtonFormMethod('patch', 4, 'patch');
  }
  Object.defineProperty(ButtonFormMethod.prototype, 'realValue', {
    get: function () {
      return this.realValue_d5r8tu$_0;
    }
  });
  var ButtonFormMethod$get_instance;
  function ButtonFormMethod$get_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$get_instance;
  }
  var ButtonFormMethod$post_instance;
  function ButtonFormMethod$post_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$post_instance;
  }
  var ButtonFormMethod$put_instance;
  function ButtonFormMethod$put_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$put_instance;
  }
  var ButtonFormMethod$delete_instance;
  function ButtonFormMethod$delete_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$delete_instance;
  }
  var ButtonFormMethod$patch_instance;
  function ButtonFormMethod$patch_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$patch_instance;
  }
  ButtonFormMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ButtonFormMethod',
    interfaces: [AttributeEnum, Enum]
  };
  function ButtonFormMethod$values() {
    return [ButtonFormMethod$get_getInstance(), ButtonFormMethod$post_getInstance(), ButtonFormMethod$put_getInstance(), ButtonFormMethod$delete_getInstance(), ButtonFormMethod$patch_getInstance()];
  }
  ButtonFormMethod.values = ButtonFormMethod$values;
  function ButtonFormMethod$valueOf(name) {
    switch (name) {
      case 'get':
        return ButtonFormMethod$get_getInstance();
      case 'post':
        return ButtonFormMethod$post_getInstance();
      case 'put':
        return ButtonFormMethod$put_getInstance();
      case 'delete':
        return ButtonFormMethod$delete_getInstance();
      case 'patch':
        return ButtonFormMethod$patch_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.ButtonFormMethod.' + name);
    }
  }
  ButtonFormMethod.valueOf_61zpoe$ = ButtonFormMethod$valueOf;
  var buttonFormMethodValues;
  function ButtonFormTarget() {
    ButtonFormTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf_0(['blank', 'parent', 'self', 'top']);
  }
  ButtonFormTarget.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ButtonFormTarget',
    interfaces: []
  };
  var ButtonFormTarget_instance = null;
  function ButtonFormTarget_getInstance() {
    if (ButtonFormTarget_instance === null) {
      new ButtonFormTarget();
    }
    return ButtonFormTarget_instance;
  }
  function ButtonType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_y6hxzx$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ButtonType_initFields() {
    ButtonType_initFields = function () {
    };
    ButtonType$button_instance = new ButtonType('button', 0, 'button');
    ButtonType$reset_instance = new ButtonType('reset', 1, 'reset');
    ButtonType$submit_instance = new ButtonType('submit', 2, 'submit');
  }
  Object.defineProperty(ButtonType.prototype, 'realValue', {
    get: function () {
      return this.realValue_y6hxzx$_0;
    }
  });
  var ButtonType$button_instance;
  function ButtonType$button_getInstance() {
    ButtonType_initFields();
    return ButtonType$button_instance;
  }
  var ButtonType$reset_instance;
  function ButtonType$reset_getInstance() {
    ButtonType_initFields();
    return ButtonType$reset_instance;
  }
  var ButtonType$submit_instance;
  function ButtonType$submit_getInstance() {
    ButtonType_initFields();
    return ButtonType$submit_instance;
  }
  ButtonType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ButtonType',
    interfaces: [AttributeEnum, Enum]
  };
  function ButtonType$values() {
    return [ButtonType$button_getInstance(), ButtonType$reset_getInstance(), ButtonType$submit_getInstance()];
  }
  ButtonType.values = ButtonType$values;
  function ButtonType$valueOf(name) {
    switch (name) {
      case 'button':
        return ButtonType$button_getInstance();
      case 'reset':
        return ButtonType$reset_getInstance();
      case 'submit':
        return ButtonType$submit_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.ButtonType.' + name);
    }
  }
  ButtonType.valueOf_61zpoe$ = ButtonType$valueOf;
  var buttonTypeValues;
  function CommandType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_udtcw4$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CommandType_initFields() {
    CommandType_initFields = function () {
    };
    CommandType$command_instance = new CommandType('command', 0, 'command');
    CommandType$checkBox_instance = new CommandType('checkBox', 1, 'checkbox');
    CommandType$radio_instance = new CommandType('radio', 2, 'radio');
  }
  Object.defineProperty(CommandType.prototype, 'realValue', {
    get: function () {
      return this.realValue_udtcw4$_0;
    }
  });
  var CommandType$command_instance;
  function CommandType$command_getInstance() {
    CommandType_initFields();
    return CommandType$command_instance;
  }
  var CommandType$checkBox_instance;
  function CommandType$checkBox_getInstance() {
    CommandType_initFields();
    return CommandType$checkBox_instance;
  }
  var CommandType$radio_instance;
  function CommandType$radio_getInstance() {
    CommandType_initFields();
    return CommandType$radio_instance;
  }
  CommandType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandType',
    interfaces: [AttributeEnum, Enum]
  };
  function CommandType$values() {
    return [CommandType$command_getInstance(), CommandType$checkBox_getInstance(), CommandType$radio_getInstance()];
  }
  CommandType.values = CommandType$values;
  function CommandType$valueOf(name) {
    switch (name) {
      case 'command':
        return CommandType$command_getInstance();
      case 'checkBox':
        return CommandType$checkBox_getInstance();
      case 'radio':
        return CommandType$radio_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.CommandType.' + name);
    }
  }
  CommandType.valueOf_61zpoe$ = CommandType$valueOf;
  var commandTypeValues;
  function FormEncType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_kq4nox$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FormEncType_initFields() {
    FormEncType_initFields = function () {
    };
    FormEncType$multipartFormData_instance = new FormEncType('multipartFormData', 0, 'multipart/form-data');
    FormEncType$applicationXWwwFormUrlEncoded_instance = new FormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    FormEncType$textPlain_instance = new FormEncType('textPlain', 2, 'text/plain');
  }
  Object.defineProperty(FormEncType.prototype, 'realValue', {
    get: function () {
      return this.realValue_kq4nox$_0;
    }
  });
  var FormEncType$multipartFormData_instance;
  function FormEncType$multipartFormData_getInstance() {
    FormEncType_initFields();
    return FormEncType$multipartFormData_instance;
  }
  var FormEncType$applicationXWwwFormUrlEncoded_instance;
  function FormEncType$applicationXWwwFormUrlEncoded_getInstance() {
    FormEncType_initFields();
    return FormEncType$applicationXWwwFormUrlEncoded_instance;
  }
  var FormEncType$textPlain_instance;
  function FormEncType$textPlain_getInstance() {
    FormEncType_initFields();
    return FormEncType$textPlain_instance;
  }
  FormEncType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormEncType',
    interfaces: [AttributeEnum, Enum]
  };
  function FormEncType$values() {
    return [FormEncType$multipartFormData_getInstance(), FormEncType$applicationXWwwFormUrlEncoded_getInstance(), FormEncType$textPlain_getInstance()];
  }
  FormEncType.values = FormEncType$values;
  function FormEncType$valueOf(name) {
    switch (name) {
      case 'multipartFormData':
        return FormEncType$multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return FormEncType$applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return FormEncType$textPlain_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.FormEncType.' + name);
    }
  }
  FormEncType.valueOf_61zpoe$ = FormEncType$valueOf;
  var formEncTypeValues;
  function FormMethod(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_7ezxj0$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FormMethod_initFields() {
    FormMethod_initFields = function () {
    };
    FormMethod$get_instance = new FormMethod('get', 0, 'get');
    FormMethod$post_instance = new FormMethod('post', 1, 'post');
    FormMethod$put_instance = new FormMethod('put', 2, 'put');
    FormMethod$delete_instance = new FormMethod('delete', 3, 'delete');
    FormMethod$patch_instance = new FormMethod('patch', 4, 'patch');
  }
  Object.defineProperty(FormMethod.prototype, 'realValue', {
    get: function () {
      return this.realValue_7ezxj0$_0;
    }
  });
  var FormMethod$get_instance;
  function FormMethod$get_getInstance() {
    FormMethod_initFields();
    return FormMethod$get_instance;
  }
  var FormMethod$post_instance;
  function FormMethod$post_getInstance() {
    FormMethod_initFields();
    return FormMethod$post_instance;
  }
  var FormMethod$put_instance;
  function FormMethod$put_getInstance() {
    FormMethod_initFields();
    return FormMethod$put_instance;
  }
  var FormMethod$delete_instance;
  function FormMethod$delete_getInstance() {
    FormMethod_initFields();
    return FormMethod$delete_instance;
  }
  var FormMethod$patch_instance;
  function FormMethod$patch_getInstance() {
    FormMethod_initFields();
    return FormMethod$patch_instance;
  }
  FormMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormMethod',
    interfaces: [AttributeEnum, Enum]
  };
  function FormMethod$values() {
    return [FormMethod$get_getInstance(), FormMethod$post_getInstance(), FormMethod$put_getInstance(), FormMethod$delete_getInstance(), FormMethod$patch_getInstance()];
  }
  FormMethod.values = FormMethod$values;
  function FormMethod$valueOf(name) {
    switch (name) {
      case 'get':
        return FormMethod$get_getInstance();
      case 'post':
        return FormMethod$post_getInstance();
      case 'put':
        return FormMethod$put_getInstance();
      case 'delete':
        return FormMethod$delete_getInstance();
      case 'patch':
        return FormMethod$patch_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.FormMethod.' + name);
    }
  }
  FormMethod.valueOf_61zpoe$ = FormMethod$valueOf;
  var formMethodValues;
  function FormTarget() {
    FormTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf_0(['blank', 'parent', 'self', 'top']);
  }
  FormTarget.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FormTarget',
    interfaces: []
  };
  var FormTarget_instance = null;
  function FormTarget_getInstance() {
    if (FormTarget_instance === null) {
      new FormTarget();
    }
    return FormTarget_instance;
  }
  function IframeName() {
    IframeName_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf_0(['blank', 'parent', 'self', 'top']);
  }
  IframeName.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IframeName',
    interfaces: []
  };
  var IframeName_instance = null;
  function IframeName_getInstance() {
    if (IframeName_instance === null) {
      new IframeName();
    }
    return IframeName_instance;
  }
  function IframeSandbox(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_81nrfm$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IframeSandbox_initFields() {
    IframeSandbox_initFields = function () {
    };
    IframeSandbox$allowSameOrigin_instance = new IframeSandbox('allowSameOrigin', 0, 'allow-same-origin');
    IframeSandbox$allowFormS_instance = new IframeSandbox('allowFormS', 1, 'allow-forms');
    IframeSandbox$allowScripts_instance = new IframeSandbox('allowScripts', 2, 'allow-scripts');
  }
  Object.defineProperty(IframeSandbox.prototype, 'realValue', {
    get: function () {
      return this.realValue_81nrfm$_0;
    }
  });
  var IframeSandbox$allowSameOrigin_instance;
  function IframeSandbox$allowSameOrigin_getInstance() {
    IframeSandbox_initFields();
    return IframeSandbox$allowSameOrigin_instance;
  }
  var IframeSandbox$allowFormS_instance;
  function IframeSandbox$allowFormS_getInstance() {
    IframeSandbox_initFields();
    return IframeSandbox$allowFormS_instance;
  }
  var IframeSandbox$allowScripts_instance;
  function IframeSandbox$allowScripts_getInstance() {
    IframeSandbox_initFields();
    return IframeSandbox$allowScripts_instance;
  }
  IframeSandbox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IframeSandbox',
    interfaces: [AttributeEnum, Enum]
  };
  function IframeSandbox$values() {
    return [IframeSandbox$allowSameOrigin_getInstance(), IframeSandbox$allowFormS_getInstance(), IframeSandbox$allowScripts_getInstance()];
  }
  IframeSandbox.values = IframeSandbox$values;
  function IframeSandbox$valueOf(name) {
    switch (name) {
      case 'allowSameOrigin':
        return IframeSandbox$allowSameOrigin_getInstance();
      case 'allowFormS':
        return IframeSandbox$allowFormS_getInstance();
      case 'allowScripts':
        return IframeSandbox$allowScripts_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.IframeSandbox.' + name);
    }
  }
  IframeSandbox.valueOf_61zpoe$ = IframeSandbox$valueOf;
  var iframeSandboxValues;
  function InputType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_310543$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputType_initFields() {
    InputType_initFields = function () {
    };
    InputType$button_instance = new InputType('button', 0, 'button');
    InputType$checkBox_instance = new InputType('checkBox', 1, 'checkbox');
    InputType$color_instance = new InputType('color', 2, 'color');
    InputType$date_instance = new InputType('date', 3, 'date');
    InputType$dateTime_instance = new InputType('dateTime', 4, 'datetime');
    InputType$dateTimeLocal_instance = new InputType('dateTimeLocal', 5, 'datetime-local');
    InputType$email_instance = new InputType('email', 6, 'email');
    InputType$file_instance = new InputType('file', 7, 'file');
    InputType$hidden_instance = new InputType('hidden', 8, 'hidden');
    InputType$image_instance = new InputType('image', 9, 'image');
    InputType$month_instance = new InputType('month', 10, 'month');
    InputType$number_instance = new InputType('number', 11, 'number');
    InputType$password_instance = new InputType('password', 12, 'password');
    InputType$radio_instance = new InputType('radio', 13, 'radio');
    InputType$range_instance = new InputType('range', 14, 'range');
    InputType$reset_instance = new InputType('reset', 15, 'reset');
    InputType$search_instance = new InputType('search', 16, 'search');
    InputType$submit_instance = new InputType('submit', 17, 'submit');
    InputType$text_instance = new InputType('text', 18, 'text');
    InputType$tel_instance = new InputType('tel', 19, 'tel');
    InputType$time_instance = new InputType('time', 20, 'time');
    InputType$url_instance = new InputType('url', 21, 'url');
    InputType$week_instance = new InputType('week', 22, 'week');
  }
  Object.defineProperty(InputType.prototype, 'realValue', {
    get: function () {
      return this.realValue_310543$_0;
    }
  });
  var InputType$button_instance;
  function InputType$button_getInstance() {
    InputType_initFields();
    return InputType$button_instance;
  }
  var InputType$checkBox_instance;
  function InputType$checkBox_getInstance() {
    InputType_initFields();
    return InputType$checkBox_instance;
  }
  var InputType$color_instance;
  function InputType$color_getInstance() {
    InputType_initFields();
    return InputType$color_instance;
  }
  var InputType$date_instance;
  function InputType$date_getInstance() {
    InputType_initFields();
    return InputType$date_instance;
  }
  var InputType$dateTime_instance;
  function InputType$dateTime_getInstance() {
    InputType_initFields();
    return InputType$dateTime_instance;
  }
  var InputType$dateTimeLocal_instance;
  function InputType$dateTimeLocal_getInstance() {
    InputType_initFields();
    return InputType$dateTimeLocal_instance;
  }
  var InputType$email_instance;
  function InputType$email_getInstance() {
    InputType_initFields();
    return InputType$email_instance;
  }
  var InputType$file_instance;
  function InputType$file_getInstance() {
    InputType_initFields();
    return InputType$file_instance;
  }
  var InputType$hidden_instance;
  function InputType$hidden_getInstance() {
    InputType_initFields();
    return InputType$hidden_instance;
  }
  var InputType$image_instance;
  function InputType$image_getInstance() {
    InputType_initFields();
    return InputType$image_instance;
  }
  var InputType$month_instance;
  function InputType$month_getInstance() {
    InputType_initFields();
    return InputType$month_instance;
  }
  var InputType$number_instance;
  function InputType$number_getInstance() {
    InputType_initFields();
    return InputType$number_instance;
  }
  var InputType$password_instance;
  function InputType$password_getInstance() {
    InputType_initFields();
    return InputType$password_instance;
  }
  var InputType$radio_instance;
  function InputType$radio_getInstance() {
    InputType_initFields();
    return InputType$radio_instance;
  }
  var InputType$range_instance;
  function InputType$range_getInstance() {
    InputType_initFields();
    return InputType$range_instance;
  }
  var InputType$reset_instance;
  function InputType$reset_getInstance() {
    InputType_initFields();
    return InputType$reset_instance;
  }
  var InputType$search_instance;
  function InputType$search_getInstance() {
    InputType_initFields();
    return InputType$search_instance;
  }
  var InputType$submit_instance;
  function InputType$submit_getInstance() {
    InputType_initFields();
    return InputType$submit_instance;
  }
  var InputType$text_instance;
  function InputType$text_getInstance() {
    InputType_initFields();
    return InputType$text_instance;
  }
  var InputType$tel_instance;
  function InputType$tel_getInstance() {
    InputType_initFields();
    return InputType$tel_instance;
  }
  var InputType$time_instance;
  function InputType$time_getInstance() {
    InputType_initFields();
    return InputType$time_instance;
  }
  var InputType$url_instance;
  function InputType$url_getInstance() {
    InputType_initFields();
    return InputType$url_instance;
  }
  var InputType$week_instance;
  function InputType$week_getInstance() {
    InputType_initFields();
    return InputType$week_instance;
  }
  InputType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputType',
    interfaces: [AttributeEnum, Enum]
  };
  function InputType$values() {
    return [InputType$button_getInstance(), InputType$checkBox_getInstance(), InputType$color_getInstance(), InputType$date_getInstance(), InputType$dateTime_getInstance(), InputType$dateTimeLocal_getInstance(), InputType$email_getInstance(), InputType$file_getInstance(), InputType$hidden_getInstance(), InputType$image_getInstance(), InputType$month_getInstance(), InputType$number_getInstance(), InputType$password_getInstance(), InputType$radio_getInstance(), InputType$range_getInstance(), InputType$reset_getInstance(), InputType$search_getInstance(), InputType$submit_getInstance(), InputType$text_getInstance(), InputType$tel_getInstance(), InputType$time_getInstance(), InputType$url_getInstance(), InputType$week_getInstance()];
  }
  InputType.values = InputType$values;
  function InputType$valueOf(name) {
    switch (name) {
      case 'button':
        return InputType$button_getInstance();
      case 'checkBox':
        return InputType$checkBox_getInstance();
      case 'color':
        return InputType$color_getInstance();
      case 'date':
        return InputType$date_getInstance();
      case 'dateTime':
        return InputType$dateTime_getInstance();
      case 'dateTimeLocal':
        return InputType$dateTimeLocal_getInstance();
      case 'email':
        return InputType$email_getInstance();
      case 'file':
        return InputType$file_getInstance();
      case 'hidden':
        return InputType$hidden_getInstance();
      case 'image':
        return InputType$image_getInstance();
      case 'month':
        return InputType$month_getInstance();
      case 'number':
        return InputType$number_getInstance();
      case 'password':
        return InputType$password_getInstance();
      case 'radio':
        return InputType$radio_getInstance();
      case 'range':
        return InputType$range_getInstance();
      case 'reset':
        return InputType$reset_getInstance();
      case 'search':
        return InputType$search_getInstance();
      case 'submit':
        return InputType$submit_getInstance();
      case 'text':
        return InputType$text_getInstance();
      case 'tel':
        return InputType$tel_getInstance();
      case 'time':
        return InputType$time_getInstance();
      case 'url':
        return InputType$url_getInstance();
      case 'week':
        return InputType$week_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.InputType.' + name);
    }
  }
  InputType.valueOf_61zpoe$ = InputType$valueOf;
  var inputTypeValues;
  function InputFormEncType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_tkfxfn$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputFormEncType_initFields() {
    InputFormEncType_initFields = function () {
    };
    InputFormEncType$multipartFormData_instance = new InputFormEncType('multipartFormData', 0, 'multipart/form-data');
    InputFormEncType$applicationXWwwFormUrlEncoded_instance = new InputFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    InputFormEncType$textPlain_instance = new InputFormEncType('textPlain', 2, 'text/plain');
  }
  Object.defineProperty(InputFormEncType.prototype, 'realValue', {
    get: function () {
      return this.realValue_tkfxfn$_0;
    }
  });
  var InputFormEncType$multipartFormData_instance;
  function InputFormEncType$multipartFormData_getInstance() {
    InputFormEncType_initFields();
    return InputFormEncType$multipartFormData_instance;
  }
  var InputFormEncType$applicationXWwwFormUrlEncoded_instance;
  function InputFormEncType$applicationXWwwFormUrlEncoded_getInstance() {
    InputFormEncType_initFields();
    return InputFormEncType$applicationXWwwFormUrlEncoded_instance;
  }
  var InputFormEncType$textPlain_instance;
  function InputFormEncType$textPlain_getInstance() {
    InputFormEncType_initFields();
    return InputFormEncType$textPlain_instance;
  }
  InputFormEncType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputFormEncType',
    interfaces: [AttributeEnum, Enum]
  };
  function InputFormEncType$values() {
    return [InputFormEncType$multipartFormData_getInstance(), InputFormEncType$applicationXWwwFormUrlEncoded_getInstance(), InputFormEncType$textPlain_getInstance()];
  }
  InputFormEncType.values = InputFormEncType$values;
  function InputFormEncType$valueOf(name) {
    switch (name) {
      case 'multipartFormData':
        return InputFormEncType$multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return InputFormEncType$applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return InputFormEncType$textPlain_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.InputFormEncType.' + name);
    }
  }
  InputFormEncType.valueOf_61zpoe$ = InputFormEncType$valueOf;
  var inputFormEncTypeValues;
  function InputFormMethod(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_tj2iwi$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputFormMethod_initFields() {
    InputFormMethod_initFields = function () {
    };
    InputFormMethod$get_instance = new InputFormMethod('get', 0, 'get');
    InputFormMethod$post_instance = new InputFormMethod('post', 1, 'post');
    InputFormMethod$put_instance = new InputFormMethod('put', 2, 'put');
    InputFormMethod$delete_instance = new InputFormMethod('delete', 3, 'delete');
    InputFormMethod$patch_instance = new InputFormMethod('patch', 4, 'patch');
  }
  Object.defineProperty(InputFormMethod.prototype, 'realValue', {
    get: function () {
      return this.realValue_tj2iwi$_0;
    }
  });
  var InputFormMethod$get_instance;
  function InputFormMethod$get_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$get_instance;
  }
  var InputFormMethod$post_instance;
  function InputFormMethod$post_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$post_instance;
  }
  var InputFormMethod$put_instance;
  function InputFormMethod$put_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$put_instance;
  }
  var InputFormMethod$delete_instance;
  function InputFormMethod$delete_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$delete_instance;
  }
  var InputFormMethod$patch_instance;
  function InputFormMethod$patch_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$patch_instance;
  }
  InputFormMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputFormMethod',
    interfaces: [AttributeEnum, Enum]
  };
  function InputFormMethod$values() {
    return [InputFormMethod$get_getInstance(), InputFormMethod$post_getInstance(), InputFormMethod$put_getInstance(), InputFormMethod$delete_getInstance(), InputFormMethod$patch_getInstance()];
  }
  InputFormMethod.values = InputFormMethod$values;
  function InputFormMethod$valueOf(name) {
    switch (name) {
      case 'get':
        return InputFormMethod$get_getInstance();
      case 'post':
        return InputFormMethod$post_getInstance();
      case 'put':
        return InputFormMethod$put_getInstance();
      case 'delete':
        return InputFormMethod$delete_getInstance();
      case 'patch':
        return InputFormMethod$patch_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.InputFormMethod.' + name);
    }
  }
  InputFormMethod.valueOf_61zpoe$ = InputFormMethod$valueOf;
  var inputFormMethodValues;
  function InputFormTarget() {
    InputFormTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf_0(['blank', 'parent', 'self', 'top']);
  }
  InputFormTarget.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InputFormTarget',
    interfaces: []
  };
  var InputFormTarget_instance = null;
  function InputFormTarget_getInstance() {
    if (InputFormTarget_instance === null) {
      new InputFormTarget();
    }
    return InputFormTarget_instance;
  }
  function KeyGenKeyType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_dxnvt3$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KeyGenKeyType_initFields() {
    KeyGenKeyType_initFields = function () {
    };
    KeyGenKeyType$rsa_instance = new KeyGenKeyType('rsa', 0, 'rsa');
  }
  Object.defineProperty(KeyGenKeyType.prototype, 'realValue', {
    get: function () {
      return this.realValue_dxnvt3$_0;
    }
  });
  var KeyGenKeyType$rsa_instance;
  function KeyGenKeyType$rsa_getInstance() {
    KeyGenKeyType_initFields();
    return KeyGenKeyType$rsa_instance;
  }
  KeyGenKeyType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyGenKeyType',
    interfaces: [AttributeEnum, Enum]
  };
  function KeyGenKeyType$values() {
    return [KeyGenKeyType$rsa_getInstance()];
  }
  KeyGenKeyType.values = KeyGenKeyType$values;
  function KeyGenKeyType$valueOf(name) {
    switch (name) {
      case 'rsa':
        return KeyGenKeyType$rsa_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.KeyGenKeyType.' + name);
    }
  }
  KeyGenKeyType.valueOf_61zpoe$ = KeyGenKeyType$valueOf;
  var keyGenKeyTypeValues;
  function LinkRel() {
    LinkRel_instance = this;
    this.alternate = 'Alternate';
    this.appEndIx = 'Appendix';
    this.bookmark = 'Bookmark';
    this.chapter = 'Chapter';
    this.contentS = 'Contents';
    this.copyright = 'Copyright';
    this.glossary = 'Glossary';
    this.help = 'Help';
    this.index = 'Index';
    this.next = 'Next';
    this.prev = 'Prev';
    this.section = 'Section';
    this.start = 'Start';
    this.stylesheet = 'Stylesheet';
    this.subsection = 'Subsection';
    this.values = listOf_0(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
  }
  LinkRel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LinkRel',
    interfaces: []
  };
  var LinkRel_instance = null;
  function LinkRel_getInstance() {
    if (LinkRel_instance === null) {
      new LinkRel();
    }
    return LinkRel_instance;
  }
  function LinkMedia() {
    LinkMedia_instance = this;
    this.screen = 'screen';
    this.print = 'print';
    this.tty = 'tty';
    this.tv = 'tv';
    this.projection = 'projection';
    this.handheld = 'handheld';
    this.braille = 'braille';
    this.aural = 'aural';
    this.all = 'all';
    this.values = listOf_0(['screen', 'print', 'tty', 'tv', 'projection', 'handheld', 'braille', 'aural', 'all']);
  }
  LinkMedia.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LinkMedia',
    interfaces: []
  };
  var LinkMedia_instance = null;
  function LinkMedia_getInstance() {
    if (LinkMedia_instance === null) {
      new LinkMedia();
    }
    return LinkMedia_instance;
  }
  function LinkType() {
    LinkType_instance = this;
    this.textAsp = 'text/asp';
    this.textAsa = 'text/asa';
    this.textCss = 'text/css';
    this.textHtml = 'text/html';
    this.textJavaScript = 'text/javascript';
    this.textPlain = 'text/plain';
    this.textScriptLet = 'text/scriptlet';
    this.textXComponent = 'text/x-component';
    this.textXHtmlInsertion = 'text/x-html-insertion';
    this.textXml = 'text/xml';
    this.values = listOf_0(['textAsp', 'textAsa', 'textCss', 'textHtml', 'textJavaScript', 'textPlain', 'textScriptLet', 'textXComponent', 'textXHtmlInsertion', 'textXml']);
  }
  LinkType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LinkType',
    interfaces: []
  };
  var LinkType_instance = null;
  function LinkType_getInstance() {
    if (LinkType_instance === null) {
      new LinkType();
    }
    return LinkType_instance;
  }
  function MetaHttpEquiv() {
    MetaHttpEquiv_instance = this;
    this.contentLanguage = 'content-language';
    this.contentType = 'content-type';
    this.defaultStyle = 'default-style';
    this.refresh = 'refresh';
    this.values = listOf_0(['contentLanguage', 'contentType', 'defaultStyle', 'refresh']);
  }
  MetaHttpEquiv.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MetaHttpEquiv',
    interfaces: []
  };
  var MetaHttpEquiv_instance = null;
  function MetaHttpEquiv_getInstance() {
    if (MetaHttpEquiv_instance === null) {
      new MetaHttpEquiv();
    }
    return MetaHttpEquiv_instance;
  }
  function ObjectName() {
    ObjectName_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf_0(['blank', 'parent', 'self', 'top']);
  }
  ObjectName.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ObjectName',
    interfaces: []
  };
  var ObjectName_instance = null;
  function ObjectName_getInstance() {
    if (ObjectName_instance === null) {
      new ObjectName();
    }
    return ObjectName_instance;
  }
  function ScriptType() {
    ScriptType_instance = this;
    this.textEcmaScript = 'text/ecmascript';
    this.textJavaScript = 'text/javascript';
    this.textJavaScript10 = 'text/javascript1.0';
    this.textJavaScript11 = 'text/javascript1.1';
    this.textJavaScript12 = 'text/javascript1.2';
    this.textJavaScript13 = 'text/javascript1.3';
    this.textJavaScript14 = 'text/javascript1.4';
    this.textJavaScript15 = 'text/javascript1.5';
    this.textJScript = 'text/jscript';
    this.textXJavaScript = 'text/x-javascript';
    this.textXEcmaScript = 'text/x-ecmascript';
    this.textVbScript = 'text/vbscript';
    this.values = listOf_0(['textEcmaScript', 'textJavaScript', 'textJavaScript10', 'textJavaScript11', 'textJavaScript12', 'textJavaScript13', 'textJavaScript14', 'textJavaScript15', 'textJScript', 'textXJavaScript', 'textXEcmaScript', 'textVbScript']);
  }
  ScriptType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ScriptType',
    interfaces: []
  };
  var ScriptType_instance = null;
  function ScriptType_getInstance() {
    if (ScriptType_instance === null) {
      new ScriptType();
    }
    return ScriptType_instance;
  }
  function StyleType() {
    StyleType_instance = this;
    this.textCss = 'text/css';
    this.values = listOf('textCss');
  }
  StyleType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StyleType',
    interfaces: []
  };
  var StyleType_instance = null;
  function StyleType_getInstance() {
    if (StyleType_instance === null) {
      new StyleType();
    }
    return StyleType_instance;
  }
  function StyleMedia() {
    StyleMedia_instance = this;
    this.screen = 'screen';
    this.print = 'print';
    this.tty = 'tty';
    this.tv = 'tv';
    this.projection = 'projection';
    this.handheld = 'handheld';
    this.braille = 'braille';
    this.aural = 'aural';
    this.all = 'all';
    this.values = listOf_0(['screen', 'print', 'tty', 'tv', 'projection', 'handheld', 'braille', 'aural', 'all']);
  }
  StyleMedia.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StyleMedia',
    interfaces: []
  };
  var StyleMedia_instance = null;
  function StyleMedia_getInstance() {
    if (StyleMedia_instance === null) {
      new StyleMedia();
    }
    return StyleMedia_instance;
  }
  function TextAreaWrap(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_mbbrvf$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextAreaWrap_initFields() {
    TextAreaWrap_initFields = function () {
    };
    TextAreaWrap$hard_instance = new TextAreaWrap('hard', 0, 'hard');
    TextAreaWrap$soft_instance = new TextAreaWrap('soft', 1, 'soft');
  }
  Object.defineProperty(TextAreaWrap.prototype, 'realValue', {
    get: function () {
      return this.realValue_mbbrvf$_0;
    }
  });
  var TextAreaWrap$hard_instance;
  function TextAreaWrap$hard_getInstance() {
    TextAreaWrap_initFields();
    return TextAreaWrap$hard_instance;
  }
  var TextAreaWrap$soft_instance;
  function TextAreaWrap$soft_getInstance() {
    TextAreaWrap_initFields();
    return TextAreaWrap$soft_instance;
  }
  TextAreaWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextAreaWrap',
    interfaces: [AttributeEnum, Enum]
  };
  function TextAreaWrap$values() {
    return [TextAreaWrap$hard_getInstance(), TextAreaWrap$soft_getInstance()];
  }
  TextAreaWrap.values = TextAreaWrap$values;
  function TextAreaWrap$valueOf(name) {
    switch (name) {
      case 'hard':
        return TextAreaWrap$hard_getInstance();
      case 'soft':
        return TextAreaWrap$soft_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.TextAreaWrap.' + name);
    }
  }
  TextAreaWrap.valueOf_61zpoe$ = TextAreaWrap$valueOf;
  var textAreaWrapValues;
  function ThScope(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_dlfslb$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ThScope_initFields() {
    ThScope_initFields = function () {
    };
    ThScope$col_instance = new ThScope('col', 0, 'col');
    ThScope$colGroup_instance = new ThScope('colGroup', 1, 'colgroup');
    ThScope$row_instance = new ThScope('row', 2, 'row');
    ThScope$rowGroup_instance = new ThScope('rowGroup', 3, 'rowgroup');
  }
  Object.defineProperty(ThScope.prototype, 'realValue', {
    get: function () {
      return this.realValue_dlfslb$_0;
    }
  });
  var ThScope$col_instance;
  function ThScope$col_getInstance() {
    ThScope_initFields();
    return ThScope$col_instance;
  }
  var ThScope$colGroup_instance;
  function ThScope$colGroup_getInstance() {
    ThScope_initFields();
    return ThScope$colGroup_instance;
  }
  var ThScope$row_instance;
  function ThScope$row_getInstance() {
    ThScope_initFields();
    return ThScope$row_instance;
  }
  var ThScope$rowGroup_instance;
  function ThScope$rowGroup_getInstance() {
    ThScope_initFields();
    return ThScope$rowGroup_instance;
  }
  ThScope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThScope',
    interfaces: [AttributeEnum, Enum]
  };
  function ThScope$values() {
    return [ThScope$col_getInstance(), ThScope$colGroup_getInstance(), ThScope$row_getInstance(), ThScope$rowGroup_getInstance()];
  }
  ThScope.values = ThScope$values;
  function ThScope$valueOf(name) {
    switch (name) {
      case 'col':
        return ThScope$col_getInstance();
      case 'colGroup':
        return ThScope$colGroup_getInstance();
      case 'row':
        return ThScope$row_getInstance();
      case 'rowGroup':
        return ThScope$rowGroup_getInstance();
      default:
        throwISE('No enum constant kotlinx.html.ThScope.' + name);
    }
  }
  ThScope.valueOf_61zpoe$ = ThScope$valueOf;
  var thScopeValues;
  function CommonAttributeGroupFacadeFlowHeadingContent() {
  }
  CommonAttributeGroupFacadeFlowHeadingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowHeadingContent',
    interfaces: [HtmlBlockTag, HeadingContent, CommonAttributeGroupFacade]
  };
  function CommonAttributeGroupFacadeFlowHeadingPhrasingContent() {
  }
  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowHeadingPhrasingContent',
    interfaces: [HtmlBlockInlineTag, HtmlInlineTag, FlowPhrasingContent, CommonAttributeGroupFacadeFlowHeadingContent, HtmlBlockTag, CommonAttributeGroupFacade]
  };
  function CommonAttributeGroupFacadeFlowInteractiveContent() {
  }
  CommonAttributeGroupFacadeFlowInteractiveContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowInteractiveContent',
    interfaces: [HtmlBlockTag, FlowInteractiveContent, CommonAttributeGroupFacade]
  };
  function CommonAttributeGroupFacadeFlowInteractivePhrasingContent() {
  }
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowInteractivePhrasingContent',
    interfaces: [HtmlBlockInlineTag, HtmlInlineTag, FlowInteractivePhrasingContent, FlowPhrasingContent, CommonAttributeGroupFacadeFlowInteractiveContent, HtmlBlockTag, FlowInteractiveContent, CommonAttributeGroupFacade]
  };
  function CommonAttributeGroupFacadeFlowMetaDataContent() {
  }
  CommonAttributeGroupFacadeFlowMetaDataContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowMetaDataContent',
    interfaces: [HtmlHeadTag, HtmlBlockTag, FlowMetaDataContent, CommonAttributeGroupFacade]
  };
  function CommonAttributeGroupFacadeFlowMetaDataPhrasingContent() {
  }
  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowMetaDataPhrasingContent',
    interfaces: [HtmlBlockInlineTag, HtmlInlineTag, FlowMetaDataPhrasingContent, FlowPhrasingContent, CommonAttributeGroupFacadeFlowMetaDataContent, HtmlHeadTag, HtmlBlockTag, FlowMetaDataContent, CommonAttributeGroupFacade]
  };
  function HtmlBlockInlineTag() {
  }
  HtmlBlockInlineTag.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HtmlBlockInlineTag',
    interfaces: [HtmlInlineTag, HtmlBlockTag, FlowPhrasingContent, CommonAttributeGroupFacade]
  };
  function CommonAttributeGroupFacadeFlowPhrasingSectioningContent() {
  }
  CommonAttributeGroupFacadeFlowPhrasingSectioningContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowPhrasingSectioningContent',
    interfaces: [HtmlBlockInlineTag, HtmlInlineTag, FlowPhrasingContent, CommonAttributeGroupFacadeFlowSectioningContent, HtmlBlockTag, CommonAttributeGroupFacade]
  };
  function CommonAttributeGroupFacadeFlowSectioningContent() {
  }
  CommonAttributeGroupFacadeFlowSectioningContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowSectioningContent',
    interfaces: [SectioningContent, HtmlBlockTag, CommonAttributeGroupFacade]
  };
  function FlowInteractiveContent() {
  }
  FlowInteractiveContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowInteractiveContent',
    interfaces: [InteractiveContent, FlowContent]
  };
  function FlowInteractivePhrasingContent() {
  }
  FlowInteractivePhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowInteractivePhrasingContent',
    interfaces: [FlowPhrasingContent, FlowInteractiveContent]
  };
  function FlowMetaDataContent() {
  }
  FlowMetaDataContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowMetaDataContent',
    interfaces: [MetaDataContent, FlowContent]
  };
  function FlowMetaDataPhrasingContent() {
  }
  FlowMetaDataPhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowMetaDataPhrasingContent',
    interfaces: [FlowPhrasingContent, FlowMetaDataContent]
  };
  function FlowPhrasingContent() {
  }
  FlowPhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowPhrasingContent',
    interfaces: [PhrasingContent, FlowContent]
  };
  function HtmlBlockTag() {
  }
  HtmlBlockTag.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HtmlBlockTag',
    interfaces: [FlowContent, CommonAttributeGroupFacade]
  };
  function HtmlHeadTag() {
  }
  HtmlHeadTag.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HtmlHeadTag',
    interfaces: [MetaDataContent, CommonAttributeGroupFacade]
  };
  function HtmlInlineTag() {
  }
  HtmlInlineTag.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HtmlInlineTag',
    interfaces: [PhrasingContent, CommonAttributeGroupFacade]
  };
  function FlowContent() {
  }
  FlowContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowContent',
    interfaces: [SectioningOrFlowContent, FlowOrPhrasingContent, FlowOrInteractiveContent, FlowOrInteractiveOrPhrasingContent, FlowOrMetaDataContent, FlowOrHeadingContent, FlowOrMetaDataOrPhrasingContent, Tag]
  };
  function HeadingContent() {
  }
  HeadingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HeadingContent',
    interfaces: [FlowOrHeadingContent, Tag]
  };
  function InteractiveContent() {
  }
  InteractiveContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InteractiveContent',
    interfaces: [FlowOrInteractiveContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function MetaDataContent() {
  }
  MetaDataContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MetaDataContent',
    interfaces: [FlowOrMetaDataContent, FlowOrMetaDataOrPhrasingContent, Tag]
  };
  function PhrasingContent() {
  }
  PhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PhrasingContent',
    interfaces: [FlowOrPhrasingContent, FlowOrInteractiveOrPhrasingContent, FlowOrMetaDataOrPhrasingContent, Tag]
  };
  function SectioningContent() {
  }
  SectioningContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SectioningContent',
    interfaces: [SectioningOrFlowContent, Tag]
  };
  var address_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.address_qlk71o$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ADDRESS_init = _.kotlinx.html.ADDRESS;
    var Throwable = Error;
    function address$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = address$lambda;
      var $receiver_0 = new ADDRESS_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var blockQuote_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.blockQuote_1wgk0f$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BLOCKQUOTE_init = _.kotlinx.html.BLOCKQUOTE;
    var Throwable = Error;
    function blockQuote$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = blockQuote$lambda;
      var $receiver_0 = new BLOCKQUOTE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var dialog_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.dialog_3ow4zc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DIALOG_init = _.kotlinx.html.DIALOG;
    var Throwable = Error;
    function dialog$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dialog$lambda;
      var $receiver_0 = new DIALOG_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var div_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.div_ri36nr$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DIV_init = _.kotlinx.html.DIV;
    var Throwable = Error;
    function div$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = div$lambda;
      var $receiver_0 = new DIV_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var dl_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.dl_rgoo3s$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DL_init = _.kotlinx.html.DL;
    var Throwable = Error;
    function dl$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dl$lambda;
      var $receiver_0 = new DL_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var fieldSet_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.fieldSet_27mjzc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIELDSET_init = _.kotlinx.html.FIELDSET;
    var Throwable = Error;
    function fieldSet$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = fieldSet$lambda;
      var $receiver_0 = new FIELDSET_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var figure_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.figure_a31wtg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIGURE_init = _.kotlinx.html.FIGURE;
    var Throwable = Error;
    function figure$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = figure$lambda;
      var $receiver_0 = new FIGURE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var figcaption_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.figcaption_9k1xeq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIGCAPTION_init = _.kotlinx.html.FIGCAPTION;
    var Throwable = Error;
    function figcaption$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = figcaption$lambda;
      var $receiver_0 = new FIGCAPTION_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var footer_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.footer_780ap1$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FOOTER_init = _.kotlinx.html.FOOTER;
    var Throwable = Error;
    function footer$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = footer$lambda;
      var $receiver_0 = new FOOTER_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var form_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.form_3vb3wm$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.kotlinx.html.FORM;
    var Throwable = Error;
    function form$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, action, encType, method, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = form$lambda;
      var $receiver_0 = new FORM_init(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', method != null ? enumEncode(method) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var getForm = defineInlineFunction('kotlinx-html-js.kotlinx.html.getForm_mq1sio$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var FormMethod = _.kotlinx.html.FormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.kotlinx.html.FORM;
    var Throwable = Error;
    function getForm$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, action, encType, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = getForm$lambda;
      var $receiver_0 = new FORM_init(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', FormMethod.get.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var postForm = defineInlineFunction('kotlinx-html-js.kotlinx.html.postForm_mq1sio$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var FormMethod = _.kotlinx.html.FormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.kotlinx.html.FORM;
    var Throwable = Error;
    function postForm$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, action, encType, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = postForm$lambda;
      var $receiver_0 = new FORM_init(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', FormMethod.post.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var putForm = defineInlineFunction('kotlinx-html-js.kotlinx.html.putForm_mq1sio$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var FormMethod = _.kotlinx.html.FormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.kotlinx.html.FORM;
    var Throwable = Error;
    function putForm$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, action, encType, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = putForm$lambda;
      var $receiver_0 = new FORM_init(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', FormMethod.put.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var deleteForm = defineInlineFunction('kotlinx-html-js.kotlinx.html.deleteForm_mq1sio$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var FormMethod = _.kotlinx.html.FormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.kotlinx.html.FORM;
    var Throwable = Error;
    function deleteForm$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, action, encType, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = deleteForm$lambda;
      var $receiver_0 = new FORM_init(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', FormMethod.delete.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var patchForm = defineInlineFunction('kotlinx-html-js.kotlinx.html.patchForm_mq1sio$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var FormMethod = _.kotlinx.html.FormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.kotlinx.html.FORM;
    var Throwable = Error;
    function patchForm$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, action, encType, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = patchForm$lambda;
      var $receiver_0 = new FORM_init(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', FormMethod.patch.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var header_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.header_8btlf7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var HEADER_init = _.kotlinx.html.HEADER;
    var Throwable = Error;
    function header$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = header$lambda;
      var $receiver_0 = new HEADER_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var hr_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.hr_17yvwq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var HR_init = _.kotlinx.html.HR;
    var Throwable = Error;
    function hr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = hr$lambda;
      var $receiver_0 = new HR_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var ol_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.ol_5m90gt$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OL_init = _.kotlinx.html.OL;
    var Throwable = Error;
    function ol$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ol$lambda;
      var $receiver_0 = new OL_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var p_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.p_8pggrc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var P_init = _.kotlinx.html.P;
    var Throwable = Error;
    function p$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = p$lambda;
      var $receiver_0 = new P_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var pre_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.pre_pcyp7f$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var PRE_init = _.kotlinx.html.PRE;
    var Throwable = Error;
    function pre$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = pre$lambda;
      var $receiver_0 = new PRE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var summary_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.summary_5qluq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SUMMARY_init = _.kotlinx.html.SUMMARY;
    var Throwable = Error;
    function summary$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = summary$lambda;
      var $receiver_0 = new SUMMARY_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var table_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.table_dmqmme$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TABLE_init = _.kotlinx.html.TABLE;
    var Throwable = Error;
    function table$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = table$lambda;
      var $receiver_0 = new TABLE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var ul_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.ul_pzlyaf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var UL_init = _.kotlinx.html.UL;
    var Throwable = Error;
    function ul$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ul$lambda;
      var $receiver_0 = new UL_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var base_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.base_5vco8i$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BASE_init = _.kotlinx.html.BASE;
    var Throwable = Error;
    function base$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = base$lambda;
      var $receiver_0 = new BASE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var title_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.title_4dzm4m$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var TITLE_init = _.kotlinx.html.TITLE;
    var Throwable = Error;
    function title$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, block) {
      if (block === void 0)
        block = title$lambda;
      var $receiver_0 = new TITLE_init(html.emptyMap, $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function title$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function title_2($receiver, content) {
    if (content === void 0)
      content = '';
    var $receiver_0 = new TITLE(emptyMap_0, $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      title$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function FlowOrMetaDataOrPhrasingContent() {
  }
  FlowOrMetaDataOrPhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowOrMetaDataOrPhrasingContent',
    interfaces: [Tag]
  };
  function FlowOrHeadingContent() {
  }
  FlowOrHeadingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowOrHeadingContent',
    interfaces: [Tag]
  };
  function FlowOrMetaDataContent() {
  }
  FlowOrMetaDataContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowOrMetaDataContent',
    interfaces: [FlowOrMetaDataOrPhrasingContent, Tag]
  };
  function FlowOrInteractiveContent() {
  }
  FlowOrInteractiveContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowOrInteractiveContent',
    interfaces: [FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function FlowOrPhrasingContent() {
  }
  FlowOrPhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowOrPhrasingContent',
    interfaces: [FlowOrMetaDataOrPhrasingContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function SectioningOrFlowContent() {
  }
  SectioningOrFlowContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SectioningOrFlowContent',
    interfaces: [Tag]
  };
  function FlowOrInteractiveOrPhrasingContent() {
  }
  FlowOrInteractiveOrPhrasingContent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlowOrInteractiveOrPhrasingContent',
    interfaces: [Tag]
  };
  var command_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.command_187x66$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var COMMAND_init = _.kotlinx.html.COMMAND;
    var Throwable = Error;
    function command$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, classes, block) {
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = command$lambda;
      var $receiver_0 = new COMMAND_init(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var commandCommand = defineInlineFunction('kotlinx-html-js.kotlinx.html.commandCommand_95cwa0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var CommandType = _.kotlinx.html.CommandType;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var COMMAND_init = _.kotlinx.html.COMMAND;
    var Throwable = Error;
    function commandCommand$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = commandCommand$lambda;
      var $receiver_0 = new COMMAND_init(attributesMapOf(['type', CommandType.command.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var checkBoxCommand = defineInlineFunction('kotlinx-html-js.kotlinx.html.checkBoxCommand_95cwa0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var CommandType = _.kotlinx.html.CommandType;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var COMMAND_init = _.kotlinx.html.COMMAND;
    var Throwable = Error;
    function checkBoxCommand$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = checkBoxCommand$lambda;
      var $receiver_0 = new COMMAND_init(attributesMapOf(['type', CommandType.checkBox.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var radioCommand = defineInlineFunction('kotlinx-html-js.kotlinx.html.radioCommand_95cwa0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var CommandType = _.kotlinx.html.CommandType;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var COMMAND_init = _.kotlinx.html.COMMAND;
    var Throwable = Error;
    function radioCommand$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = radioCommand$lambda;
      var $receiver_0 = new COMMAND_init(attributesMapOf(['type', CommandType.radio.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var link_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.link_ycifyz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.kotlinx.html.LINK;
    var Throwable = Error;
    function link$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, href, rel, type, block) {
      if (href === void 0)
        href = null;
      if (rel === void 0)
        rel = null;
      if (type === void 0)
        type = null;
      if (block === void 0)
        block = link$lambda;
      var $receiver_0 = new LINK_init(attributesMapOf(['href', href, 'rel', rel, 'type', type]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var meta_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.meta_e5p47k$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.kotlinx.html.META;
    var Throwable = Error;
    function meta$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, name, content, charset, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      if (charset === void 0)
        charset = null;
      if (block === void 0)
        block = meta$lambda;
      var $receiver_0 = new META_init(attributesMapOf(['name', name, 'content', content, 'charset', charset]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var noScript_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.noScript_e19b6x$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var NOSCRIPT_init = _.kotlinx.html.NOSCRIPT;
    var Throwable = Error;
    function noScript$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = noScript$lambda;
      var $receiver_0 = new NOSCRIPT_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var script_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.script_1ahzd7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.kotlinx.html.SCRIPT;
    var Throwable = Error;
    function script$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      if (block === void 0)
        block = script$lambda;
      var $receiver_0 = new SCRIPT_init(attributesMapOf(['type', type, 'src', src]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function script$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function script_2($receiver, type, src, content) {
    if (type === void 0)
      type = null;
    if (src === void 0)
      src = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new SCRIPT(attributesMapOf_1(['type', type, 'src', src]), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      script$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var h1_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h1_vmej1w$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H1_init = _.kotlinx.html.H1;
    var Throwable = Error;
    function h1$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h1$lambda;
      var $receiver_0 = new H1_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h2_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h2_eh5gi3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H2_init = _.kotlinx.html.H2;
    var Throwable = Error;
    function h2$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h2$lambda;
      var $receiver_0 = new H2_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h3_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h3_agelx2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H3_init = _.kotlinx.html.H3;
    var Throwable = Error;
    function h3$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h3$lambda;
      var $receiver_0 = new H3_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h4_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h4_zdyoc7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H4_init = _.kotlinx.html.H4;
    var Throwable = Error;
    function h4$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h4$lambda;
      var $receiver_0 = new H4_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h5_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h5_aplb7s$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H5_init = _.kotlinx.html.H5;
    var Throwable = Error;
    function h5$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h5$lambda;
      var $receiver_0 = new H5_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h6_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h6_e7yr7d$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H6_init = _.kotlinx.html.H6;
    var Throwable = Error;
    function h6$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h6$lambda;
      var $receiver_0 = new H6_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var hGroup_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.hGroup_sxozs2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var HGROUP_init = _.kotlinx.html.HGROUP;
    var Throwable = Error;
    function hGroup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = hGroup$lambda;
      var $receiver_0 = new HGROUP_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var style_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.style_st6e4p$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.kotlinx.html.STYLE;
    var Throwable = Error;
    function style$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      if (block === void 0)
        block = style$lambda;
      var $receiver_0 = new STYLE_init(attributesMapOf('type', type), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function style$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function style_2($receiver, type, content) {
    if (type === void 0)
      type = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new STYLE(attributesMapOf_0('type', type), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      style$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var details_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.details_d9zf4h$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DETAILS_init = _.kotlinx.html.DETAILS;
    var Throwable = Error;
    function details$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = details$lambda;
      var $receiver_0 = new DETAILS_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var abbr_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.abbr_2n6hpy$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ABBR_init = _.kotlinx.html.ABBR;
    var Throwable = Error;
    function abbr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = abbr$lambda;
      var $receiver_0 = new ABBR_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var area_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.area_sgglka$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.kotlinx.html.AREA;
    var Throwable = Error;
    function area$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, shape, alt, classes, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = area$lambda;
      var $receiver_0 = new AREA_init(attributesMapOf(['Shape', shape != null ? enumEncode(shape) : null, 'alt', alt, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var rectArea = defineInlineFunction('kotlinx-html-js.kotlinx.html.rectArea_oj03en$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var AreaShape = _.kotlinx.html.AreaShape;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.kotlinx.html.AREA;
    var Throwable = Error;
    function rectArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, alt, classes, block) {
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rectArea$lambda;
      var $receiver_0 = new AREA_init(attributesMapOf(['Shape', AreaShape.rect.realValue, 'alt', alt, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var circleArea = defineInlineFunction('kotlinx-html-js.kotlinx.html.circleArea_oj03en$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var AreaShape = _.kotlinx.html.AreaShape;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.kotlinx.html.AREA;
    var Throwable = Error;
    function circleArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, alt, classes, block) {
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = circleArea$lambda;
      var $receiver_0 = new AREA_init(attributesMapOf(['Shape', AreaShape.circle.realValue, 'alt', alt, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var polyArea = defineInlineFunction('kotlinx-html-js.kotlinx.html.polyArea_oj03en$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var AreaShape = _.kotlinx.html.AreaShape;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.kotlinx.html.AREA;
    var Throwable = Error;
    function polyArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, alt, classes, block) {
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = polyArea$lambda;
      var $receiver_0 = new AREA_init(attributesMapOf(['Shape', AreaShape.poly.realValue, 'alt', alt, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var defaultArea = defineInlineFunction('kotlinx-html-js.kotlinx.html.defaultArea_oj03en$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var AreaShape = _.kotlinx.html.AreaShape;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.kotlinx.html.AREA;
    var Throwable = Error;
    function defaultArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, alt, classes, block) {
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = defaultArea$lambda;
      var $receiver_0 = new AREA_init(attributesMapOf(['Shape', AreaShape.default.realValue, 'alt', alt, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var b_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.b_r0mnq7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var B_init = _.kotlinx.html.B;
    var Throwable = Error;
    function b$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = b$lambda;
      var $receiver_0 = new B_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var bdi_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.bdi_le8e1m$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BDI_init = _.kotlinx.html.BDI;
    var Throwable = Error;
    function bdi$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = bdi$lambda;
      var $receiver_0 = new BDI_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var bdo_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.bdo_dv43h0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BDO_init = _.kotlinx.html.BDO;
    var Throwable = Error;
    function bdo$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = bdo$lambda;
      var $receiver_0 = new BDO_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var br_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.br_5bz84p$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BR_init = _.kotlinx.html.BR;
    var Throwable = Error;
    function br$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = br$lambda;
      var $receiver_0 = new BR_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var canvas_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.canvas_dwb9fz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.kotlinx.html.CANVAS;
    var Throwable = Error;
    function canvas$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = canvas$lambda;
      var $receiver_0 = new CANVAS_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function canvas$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function canvas_2($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new CANVAS(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      canvas$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var cite_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.cite_3ozg0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CITE_init = _.kotlinx.html.CITE;
    var Throwable = Error;
    function cite$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = cite$lambda;
      var $receiver_0 = new CITE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var code_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.code_en26pm$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CODE_init = _.kotlinx.html.CODE;
    var Throwable = Error;
    function code$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = code$lambda;
      var $receiver_0 = new CODE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var dataList_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.dataList_o7wjj3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DATALIST_init = _.kotlinx.html.DATALIST;
    var Throwable = Error;
    function dataList$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dataList$lambda;
      var $receiver_0 = new DATALIST_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var del_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.del_iothfu$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DEL_init = _.kotlinx.html.DEL;
    var Throwable = Error;
    function del$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = del$lambda;
      var $receiver_0 = new DEL_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var dfn_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.dfn_ax4ydx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DFN_init = _.kotlinx.html.DFN;
    var Throwable = Error;
    function dfn$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dfn$lambda;
      var $receiver_0 = new DFN_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var em_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.em_2lgk3j$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var EM_init = _.kotlinx.html.EM;
    var Throwable = Error;
    function em$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = em$lambda;
      var $receiver_0 = new EM_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var i_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.i_5g1p9k$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var I_init = _.kotlinx.html.I;
    var Throwable = Error;
    function i$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = i$lambda;
      var $receiver_0 = new I_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var ins_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.ins_g1dqgd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var INS_init = _.kotlinx.html.INS;
    var Throwable = Error;
    function ins$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ins$lambda;
      var $receiver_0 = new INS_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var kbd_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.kbd_18bd9o$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var KBD_init = _.kotlinx.html.KBD;
    var Throwable = Error;
    function kbd$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = kbd$lambda;
      var $receiver_0 = new KBD_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var map_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.map_km2leq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var MAP_init = _.kotlinx.html.MAP;
    var Throwable = Error;
    function map$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, name, classes, block) {
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = map$lambda;
      var $receiver_0 = new MAP_init(attributesMapOf(['name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var mark_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.mark_zaxnru$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MARK_init = _.kotlinx.html.MARK;
    var Throwable = Error;
    function mark$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = mark$lambda;
      var $receiver_0 = new MARK_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var math_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.math_f2p7j5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MATH_init = _.kotlinx.html.MATH;
    var Throwable = Error;
    function math$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = math$lambda;
      var $receiver_0 = new MATH_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var meter_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.meter_8zh648$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var METER_init = _.kotlinx.html.METER;
    var Throwable = Error;
    function meter$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = meter$lambda;
      var $receiver_0 = new METER_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var output_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.output_ttsfoa$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OUTPUT_init = _.kotlinx.html.OUTPUT;
    var Throwable = Error;
    function output$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = output$lambda;
      var $receiver_0 = new OUTPUT_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var progress_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.progress_6mi6o6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var PROGRESS_init = _.kotlinx.html.PROGRESS;
    var Throwable = Error;
    function progress$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = progress$lambda;
      var $receiver_0 = new PROGRESS_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var q_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.q_86txao$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var Q_init = _.kotlinx.html.Q;
    var Throwable = Error;
    function q$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = q$lambda;
      var $receiver_0 = new Q_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var ruby_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.ruby_wobulv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var RUBY_init = _.kotlinx.html.RUBY;
    var Throwable = Error;
    function ruby$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ruby$lambda;
      var $receiver_0 = new RUBY_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var samp_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.samp_wmuy2y$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SAMP_init = _.kotlinx.html.SAMP;
    var Throwable = Error;
    function samp$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = samp$lambda;
      var $receiver_0 = new SAMP_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var small_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.small_69ofui$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SMALL_init = _.kotlinx.html.SMALL;
    var Throwable = Error;
    function small$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = small$lambda;
      var $receiver_0 = new SMALL_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var span_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.span_6djfml$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SPAN_init = _.kotlinx.html.SPAN;
    var Throwable = Error;
    function span$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = span$lambda;
      var $receiver_0 = new SPAN_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var strong_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.strong_okpg28$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var STRONG_init = _.kotlinx.html.STRONG;
    var Throwable = Error;
    function strong$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = strong$lambda;
      var $receiver_0 = new STRONG_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var sub_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.sub_u07n5t$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SUB_init = _.kotlinx.html.SUB;
    var Throwable = Error;
    function sub$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = sub$lambda;
      var $receiver_0 = new SUB_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var sup_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.sup_yx52tp$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SUP_init = _.kotlinx.html.SUP;
    var Throwable = Error;
    function sup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = sup$lambda;
      var $receiver_0 = new SUP_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var svg_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.svg_f6i49v$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.kotlinx.html.SVG;
    var Throwable = Error;
    function svg$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = svg$lambda;
      var $receiver_0 = new SVG_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function svg$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function svg_2($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new SVG(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      svg$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var time_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.time_80zgyi$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TIME_init = _.kotlinx.html.TIME;
    var Throwable = Error;
    function time$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = time$lambda;
      var $receiver_0 = new TIME_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var htmlVar_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.htmlVar_ycyb16$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var VAR_init = _.kotlinx.html.VAR;
    var Throwable = Error;
    function htmlVar$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = htmlVar$lambda;
      var $receiver_0 = new VAR_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var article_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.article_hpv6ge$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ARTICLE_init = _.kotlinx.html.ARTICLE;
    var Throwable = Error;
    function article$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = article$lambda;
      var $receiver_0 = new ARTICLE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var aside_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.aside_3uzs4w$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ASIDE_init = _.kotlinx.html.ASIDE;
    var Throwable = Error;
    function aside$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = aside$lambda;
      var $receiver_0 = new ASIDE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var main_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.main_m1e3ev$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MAIN_init = _.kotlinx.html.MAIN;
    var Throwable = Error;
    function main$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = main$lambda;
      var $receiver_0 = new MAIN_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var nav_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.nav_19d8h1$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var NAV_init = _.kotlinx.html.NAV;
    var Throwable = Error;
    function nav$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = nav$lambda;
      var $receiver_0 = new NAV_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var section_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.section_ac1jhf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SECTION_init = _.kotlinx.html.SECTION;
    var Throwable = Error;
    function section$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = section$lambda;
      var $receiver_0 = new SECTION_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var a_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.a_gu26kr$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.kotlinx.html.A;
    var Throwable = Error;
    function a$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, href, target, classes, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = a$lambda;
      var $receiver_0 = new A_init(attributesMapOf(['href', href, 'target', target, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var audio_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.audio_hb8i2y$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var AUDIO_init = _.kotlinx.html.AUDIO;
    var Throwable = Error;
    function audio$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = audio$lambda;
      var $receiver_0 = new AUDIO_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var button_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.button_i4xb7r$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.kotlinx.html.BUTTON;
    var Throwable = Error;
    function button$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = button$lambda;
      var $receiver_0 = new BUTTON_init(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var getButton = defineInlineFunction('kotlinx-html-js.kotlinx.html.getButton_2rocz3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var ButtonFormMethod = _.kotlinx.html.ButtonFormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.kotlinx.html.BUTTON;
    var Throwable = Error;
    function getButton$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, name, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (name === void 0)
        name = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = getButton$lambda;
      var $receiver_0 = new BUTTON_init(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', ButtonFormMethod.get.realValue, 'name', name, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var postButton = defineInlineFunction('kotlinx-html-js.kotlinx.html.postButton_2rocz3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var ButtonFormMethod = _.kotlinx.html.ButtonFormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.kotlinx.html.BUTTON;
    var Throwable = Error;
    function postButton$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, name, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (name === void 0)
        name = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = postButton$lambda;
      var $receiver_0 = new BUTTON_init(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', ButtonFormMethod.post.realValue, 'name', name, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var putButton = defineInlineFunction('kotlinx-html-js.kotlinx.html.putButton_2rocz3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var ButtonFormMethod = _.kotlinx.html.ButtonFormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.kotlinx.html.BUTTON;
    var Throwable = Error;
    function putButton$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, name, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (name === void 0)
        name = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = putButton$lambda;
      var $receiver_0 = new BUTTON_init(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', ButtonFormMethod.put.realValue, 'name', name, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var deleteButton = defineInlineFunction('kotlinx-html-js.kotlinx.html.deleteButton_2rocz3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var ButtonFormMethod = _.kotlinx.html.ButtonFormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.kotlinx.html.BUTTON;
    var Throwable = Error;
    function deleteButton$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, name, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (name === void 0)
        name = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = deleteButton$lambda;
      var $receiver_0 = new BUTTON_init(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', ButtonFormMethod.delete.realValue, 'name', name, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var patchButton = defineInlineFunction('kotlinx-html-js.kotlinx.html.patchButton_2rocz3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var ButtonFormMethod = _.kotlinx.html.ButtonFormMethod;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.kotlinx.html.BUTTON;
    var Throwable = Error;
    function patchButton$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, name, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (name === void 0)
        name = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = patchButton$lambda;
      var $receiver_0 = new BUTTON_init(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', ButtonFormMethod.patch.realValue, 'name', name, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var embed_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.embed_l7ro7h$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var EMBED_init = _.kotlinx.html.EMBED;
    var Throwable = Error;
    function embed$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = embed$lambda;
      var $receiver_0 = new EMBED_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var iframe_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.iframe_rz24s4$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.kotlinx.html.IFRAME;
    var Throwable = Error;
    function iframe$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, sandbox, classes, block) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = iframe$lambda;
      var $receiver_0 = new IFRAME_init(attributesMapOf(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function iframe$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function iframe_2($receiver, sandbox, classes, content) {
    if (sandbox === void 0)
      sandbox = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new IFRAME(attributesMapOf_1(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      iframe$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var allowSameOriginIframe = defineInlineFunction('kotlinx-html-js.kotlinx.html.allowSameOriginIframe_yk32s8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var IframeSandbox = _.kotlinx.html.IframeSandbox;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.kotlinx.html.IFRAME;
    var Throwable = Error;
    function allowSameOriginIframe$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = allowSameOriginIframe$lambda;
      var $receiver_0 = new IFRAME_init(attributesMapOf(['sandbox', IframeSandbox.allowSameOrigin.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var allowFormSIframe = defineInlineFunction('kotlinx-html-js.kotlinx.html.allowFormSIframe_yk32s8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var IframeSandbox = _.kotlinx.html.IframeSandbox;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.kotlinx.html.IFRAME;
    var Throwable = Error;
    function allowFormSIframe$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = allowFormSIframe$lambda;
      var $receiver_0 = new IFRAME_init(attributesMapOf(['sandbox', IframeSandbox.allowFormS.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var allowScriptsIframe = defineInlineFunction('kotlinx-html-js.kotlinx.html.allowScriptsIframe_yk32s8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var IframeSandbox = _.kotlinx.html.IframeSandbox;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.kotlinx.html.IFRAME;
    var Throwable = Error;
    function allowScriptsIframe$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = allowScriptsIframe$lambda;
      var $receiver_0 = new IFRAME_init(attributesMapOf(['sandbox', IframeSandbox.allowScripts.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function allowSameOriginIframe$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function allowSameOriginIframe_0($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new IFRAME(attributesMapOf_1(['sandbox', IframeSandbox$allowSameOrigin_getInstance().realValue, 'class', classes]), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      allowSameOriginIframe$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function allowFormSIframe$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function allowFormSIframe_0($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new IFRAME(attributesMapOf_1(['sandbox', IframeSandbox$allowFormS_getInstance().realValue, 'class', classes]), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      allowFormSIframe$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function allowScriptsIframe$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function allowScriptsIframe_0($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new IFRAME(attributesMapOf_1(['sandbox', IframeSandbox$allowScripts_getInstance().realValue, 'class', classes]), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      allowScriptsIframe$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var img_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.img_evw26v$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.kotlinx.html.IMG;
    var Throwable = Error;
    function img$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, alt, src, classes, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = img$lambda;
      var $receiver_0 = new IMG_init(attributesMapOf(['alt', alt, 'src', src, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var picture_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.picture_gdyy1b$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var PICTURE_init = _.kotlinx.html.PICTURE;
    var Throwable = Error;
    function picture$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, block) {
      if (block === void 0)
        block = picture$lambda;
      var $receiver_0 = new PICTURE_init(html.emptyMap, $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var input_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.input_e1g74z$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function input$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, formEncType, formMethod, name, classes, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = input$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var buttonInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.buttonInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function buttonInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = buttonInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.button.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var checkBoxInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.checkBoxInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function checkBoxInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = checkBoxInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.checkBox.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var colorInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.colorInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function colorInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = colorInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.color.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var dateInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.dateInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function dateInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dateInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.date.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var dateTimeInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.dateTimeInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function dateTimeInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dateTimeInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.dateTime.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var dateTimeLocalInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.dateTimeLocalInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function dateTimeLocalInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dateTimeLocalInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.dateTimeLocal.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var emailInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.emailInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function emailInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = emailInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.email.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var fileInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.fileInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function fileInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = fileInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.file.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var hiddenInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.hiddenInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function hiddenInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = hiddenInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.hidden.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var imageInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.imageInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function imageInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = imageInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.image.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var monthInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.monthInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function monthInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = monthInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.month.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var numberInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.numberInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function numberInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = numberInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.number.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var passwordInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.passwordInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function passwordInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = passwordInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.password.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var radioInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.radioInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function radioInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = radioInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.radio.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var rangeInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.rangeInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function rangeInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rangeInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.range.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var resetInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.resetInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function resetInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = resetInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.reset.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var searchInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.searchInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function searchInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = searchInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.search.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var submitInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.submitInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function submitInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = submitInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.submit.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var textInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.textInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function textInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = textInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.text.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var telInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.telInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function telInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = telInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.tel.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var timeInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.timeInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function timeInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = timeInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.time.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var urlInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.urlInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function urlInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = urlInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.url.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var weekInput = defineInlineFunction('kotlinx-html-js.kotlinx.html.weekInput_ap9uf6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var InputType = _.kotlinx.html.InputType;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var Throwable = Error;
    function weekInput$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = weekInput$lambda;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', InputType.week.realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var keyGen_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.keyGen_h5okci$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var KEYGEN_init = _.kotlinx.html.KEYGEN;
    var Throwable = Error;
    function keyGen$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, keyType, classes, block) {
      if (keyType === void 0)
        keyType = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = keyGen$lambda;
      var $receiver_0 = new KEYGEN_init(attributesMapOf(['keytype', keyType != null ? enumEncode(keyType) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var rsaKeyGen = defineInlineFunction('kotlinx-html-js.kotlinx.html.rsaKeyGen_7fxx9n$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var KeyGenKeyType = _.kotlinx.html.KeyGenKeyType;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var KEYGEN_init = _.kotlinx.html.KEYGEN;
    var Throwable = Error;
    function rsaKeyGen$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rsaKeyGen$lambda;
      var $receiver_0 = new KEYGEN_init(attributesMapOf(['keytype', KeyGenKeyType.rsa.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var label_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.label_yd75js$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LABEL_init = _.kotlinx.html.LABEL;
    var Throwable = Error;
    function label$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = label$lambda;
      var $receiver_0 = new LABEL_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var htmlObject_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.htmlObject_lbhlz7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OBJECT_init = _.kotlinx.html.OBJECT;
    var Throwable = Error;
    function htmlObject$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = htmlObject$lambda;
      var $receiver_0 = new OBJECT_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var select_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.select_9klr40$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SELECT_init = _.kotlinx.html.SELECT;
    var Throwable = Error;
    function select$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = select$lambda;
      var $receiver_0 = new SELECT_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var textArea_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.textArea_b1tfd9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.kotlinx.html.TEXTAREA;
    var Throwable = Error;
    function textArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, rows, cols, wrap, classes, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = textArea$lambda;
      var $receiver_0 = new TEXTAREA_init(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function textArea$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function textArea_2($receiver, rows, cols, wrap, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (wrap === void 0)
      wrap = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new TEXTAREA(attributesMapOf_1(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      textArea$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var hardTextArea = defineInlineFunction('kotlinx-html-js.kotlinx.html.hardTextArea_skdnmm$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var TextAreaWrap = _.kotlinx.html.TextAreaWrap;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.kotlinx.html.TEXTAREA;
    var Throwable = Error;
    function hardTextArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, rows, cols, classes, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = hardTextArea$lambda;
      var $receiver_0 = new TEXTAREA_init(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', TextAreaWrap.hard.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var softTextArea = defineInlineFunction('kotlinx-html-js.kotlinx.html.softTextArea_skdnmm$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var TextAreaWrap = _.kotlinx.html.TextAreaWrap;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.kotlinx.html.TEXTAREA;
    var Throwable = Error;
    function softTextArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, rows, cols, classes, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = softTextArea$lambda;
      var $receiver_0 = new TEXTAREA_init(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', TextAreaWrap.soft.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function hardTextArea$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function hardTextArea_0($receiver, rows, cols, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new TEXTAREA(attributesMapOf_1(['rows', rows, 'cols', cols, 'wrap', TextAreaWrap$hard_getInstance().realValue, 'class', classes]), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      hardTextArea$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function softTextArea$lambda(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function softTextArea_0($receiver, rows, cols, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new TEXTAREA(attributesMapOf_1(['rows', rows, 'cols', cols, 'wrap', TextAreaWrap$soft_getInstance().realValue, 'class', classes]), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      softTextArea$lambda(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var video_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.video_qpg29b$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var VIDEO_init = _.kotlinx.html.VIDEO;
    var Throwable = Error;
    function video$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = video$lambda;
      var $receiver_0 = new VIDEO_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function A(initialAttributes, consumer) {
    HTMLTag.call(this, 'a', consumer, initialAttributes, null, true, false);
    this.consumer_615sxh$_0 = consumer;
  }
  Object.defineProperty(A.prototype, 'consumer', {
    get: function () {
      return this.consumer_615sxh$_0;
    }
  });
  Object.defineProperty(A.prototype, 'href', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'href');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'href', newValue);
    }
  });
  Object.defineProperty(A.prototype, 'target', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'target');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'target', newValue);
    }
  });
  Object.defineProperty(A.prototype, 'ping', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'ping');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'ping', newValue);
    }
  });
  Object.defineProperty(A.prototype, 'rel', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'rel');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'rel', newValue);
    }
  });
  Object.defineProperty(A.prototype, 'hrefLang', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'hreflang');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'hreflang', newValue);
    }
  });
  Object.defineProperty(A.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  A.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  function get_asFlowContent($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent($receiver) {
    return $receiver;
  }
  function ABBR(initialAttributes, consumer) {
    HTMLTag.call(this, 'abbr', consumer, initialAttributes, null, true, false);
    this.consumer_ms3o7n$_0 = consumer;
  }
  Object.defineProperty(ABBR.prototype, 'consumer', {
    get: function () {
      return this.consumer_ms3o7n$_0;
    }
  });
  ABBR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ABBR',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_0($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_0($receiver) {
    return $receiver;
  }
  function ADDRESS(initialAttributes, consumer) {
    HTMLTag.call(this, 'address', consumer, initialAttributes, null, false, false);
    this.consumer_3eh15q$_0 = consumer;
  }
  Object.defineProperty(ADDRESS.prototype, 'consumer', {
    get: function () {
      return this.consumer_3eh15q$_0;
    }
  });
  ADDRESS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ADDRESS',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function AREA(initialAttributes, consumer) {
    HTMLTag.call(this, 'area', consumer, initialAttributes, null, true, true);
    this.consumer_ukmgtr$_0 = consumer;
  }
  Object.defineProperty(AREA.prototype, 'consumer', {
    get: function () {
      return this.consumer_ukmgtr$_0;
    }
  });
  Object.defineProperty(AREA.prototype, 'coords', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'coords');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'coords', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'href', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'href');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'href', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'hrefLang', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'hreflang');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'hreflang', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'alt', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'alt');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'alt', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'target', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'target');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'target', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'media', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'media');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'media', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'rel', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'rel');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'rel', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'ping', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'ping');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'ping', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  AREA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AREA',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_1($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_1($receiver) {
    return $receiver;
  }
  function ARTICLE(initialAttributes, consumer) {
    HTMLTag.call(this, 'article', consumer, initialAttributes, null, false, false);
    this.consumer_b5vrs0$_0 = consumer;
  }
  Object.defineProperty(ARTICLE.prototype, 'consumer', {
    get: function () {
      return this.consumer_b5vrs0$_0;
    }
  });
  ARTICLE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ARTICLE',
    interfaces: [CommonAttributeGroupFacadeFlowSectioningContent, HTMLTag]
  };
  function get_asFlowContent_2($receiver) {
    return $receiver;
  }
  function get_asSectioningContent($receiver) {
    return $receiver;
  }
  function ASIDE(initialAttributes, consumer) {
    HTMLTag.call(this, 'aside', consumer, initialAttributes, null, false, false);
    this.consumer_i4oajm$_0 = consumer;
  }
  Object.defineProperty(ASIDE.prototype, 'consumer', {
    get: function () {
      return this.consumer_i4oajm$_0;
    }
  });
  ASIDE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ASIDE',
    interfaces: [CommonAttributeGroupFacadeFlowSectioningContent, HTMLTag]
  };
  function get_asFlowContent_3($receiver) {
    return $receiver;
  }
  function get_asSectioningContent_0($receiver) {
    return $receiver;
  }
  function AUDIO(initialAttributes, consumer) {
    HTMLTag.call(this, 'audio', consumer, initialAttributes, null, false, false);
    this.consumer_na8ebk$_0 = consumer;
  }
  Object.defineProperty(AUDIO.prototype, 'consumer', {
    get: function () {
      return this.consumer_na8ebk$_0;
    }
  });
  Object.defineProperty(AUDIO.prototype, 'src', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(AUDIO.prototype, 'autoBuffer', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'autobuffer');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autobuffer', newValue);
    }
  });
  Object.defineProperty(AUDIO.prototype, 'autoPlay', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'autoplay');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autoplay', newValue);
    }
  });
  Object.defineProperty(AUDIO.prototype, 'loop', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'loop');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'loop', newValue);
    }
  });
  Object.defineProperty(AUDIO.prototype, 'controls', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'controls');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'controls', newValue);
    }
  });
  AUDIO.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AUDIO',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  var source_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.source_73nwfk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SOURCE_init = _.kotlinx.html.SOURCE;
    var Throwable = Error;
    function source$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = source$lambda;
      var $receiver_0 = new SOURCE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function get_asFlowContent_4($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_0($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_2($receiver) {
    return $receiver;
  }
  function B(initialAttributes, consumer) {
    HTMLTag.call(this, 'b', consumer, initialAttributes, null, true, false);
    this.consumer_za3ci4$_0 = consumer;
  }
  Object.defineProperty(B.prototype, 'consumer', {
    get: function () {
      return this.consumer_za3ci4$_0;
    }
  });
  B.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'B',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_5($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_3($receiver) {
    return $receiver;
  }
  function BASE(initialAttributes, consumer) {
    HTMLTag.call(this, 'base', consumer, initialAttributes, null, true, true);
    this.consumer_fprlrn$_0 = consumer;
  }
  Object.defineProperty(BASE.prototype, 'consumer', {
    get: function () {
      return this.consumer_fprlrn$_0;
    }
  });
  Object.defineProperty(BASE.prototype, 'href', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'href');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'href', newValue);
    }
  });
  Object.defineProperty(BASE.prototype, 'target', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'target');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'target', newValue);
    }
  });
  BASE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BASE',
    interfaces: [HtmlHeadTag, HTMLTag]
  };
  function BDI(initialAttributes, consumer) {
    HTMLTag.call(this, 'bdi', consumer, initialAttributes, null, true, false);
    this.consumer_uxsslt$_0 = consumer;
  }
  Object.defineProperty(BDI.prototype, 'consumer', {
    get: function () {
      return this.consumer_uxsslt$_0;
    }
  });
  BDI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BDI',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_6($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_4($receiver) {
    return $receiver;
  }
  function BDO(initialAttributes, consumer) {
    HTMLTag.call(this, 'bdo', consumer, initialAttributes, null, true, false);
    this.consumer_5b4ip5$_0 = consumer;
  }
  Object.defineProperty(BDO.prototype, 'consumer', {
    get: function () {
      return this.consumer_5b4ip5$_0;
    }
  });
  BDO.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BDO',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_7($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_5($receiver) {
    return $receiver;
  }
  function BLOCKQUOTE(initialAttributes, consumer) {
    HTMLTag.call(this, 'blockquote', consumer, initialAttributes, null, false, false);
    this.consumer_poh45r$_0 = consumer;
  }
  Object.defineProperty(BLOCKQUOTE.prototype, 'consumer', {
    get: function () {
      return this.consumer_poh45r$_0;
    }
  });
  Object.defineProperty(BLOCKQUOTE.prototype, 'cite', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'cite');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'cite', newValue);
    }
  });
  BLOCKQUOTE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BLOCKQUOTE',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function BODY(initialAttributes, consumer) {
    HTMLTag.call(this, 'body', consumer, initialAttributes, null, false, false);
    this.consumer_vpcosk$_0 = consumer;
  }
  Object.defineProperty(BODY.prototype, 'consumer', {
    get: function () {
      return this.consumer_vpcosk$_0;
    }
  });
  Object.defineProperty(BODY.prototype, 'onAfterprint', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onafterprint');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onafterprint', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onBeforeprint', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onbeforeprint');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onbeforeprint', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onBeforeunLoad', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onbeforeunload');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onbeforeunload', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onHashChange', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onhashchange');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onhashchange', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onMessage', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onmessage');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onmessage', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onOffline', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onoffline');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onoffline', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onOnline', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'ononline');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'ononline', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onPopstate', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onpopstate');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onpopstate', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onRedo', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onredo');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onredo', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onResize', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onresize');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onresize', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onStorage', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onstorage');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onstorage', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onUndo', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onundo');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onundo', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onUnLoad', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'onunload');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'onunload', newValue);
    }
  });
  BODY.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BODY',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function BR(initialAttributes, consumer) {
    HTMLTag.call(this, 'br', consumer, initialAttributes, null, true, true);
    this.consumer_c6kd6a$_0 = consumer;
  }
  Object.defineProperty(BR.prototype, 'consumer', {
    get: function () {
      return this.consumer_c6kd6a$_0;
    }
  });
  BR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BR',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_8($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_6($receiver) {
    return $receiver;
  }
  function BUTTON(initialAttributes, consumer) {
    HTMLTag.call(this, 'button', consumer, initialAttributes, null, true, false);
    this.consumer_a8eqy4$_0 = consumer;
  }
  Object.defineProperty(BUTTON.prototype, 'consumer', {
    get: function () {
      return this.consumer_a8eqy4$_0;
    }
  });
  Object.defineProperty(BUTTON.prototype, 'autoFocus', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'disabled', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'form', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formAction', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'formaction');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'formaction', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formEncType', {
    configurable: true,
    get: function () {
      return attributeButtonFormEncTypeEnumButtonFormEncTypeValues.get_txhc1s$(this, 'formenctype');
    },
    set: function (newValue) {
      attributeButtonFormEncTypeEnumButtonFormEncTypeValues.set_fid0sb$(this, 'formenctype', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formMethod', {
    configurable: true,
    get: function () {
      return attributeButtonFormMethodEnumButtonFormMethodValues.get_txhc1s$(this, 'formmethod');
    },
    set: function (newValue) {
      attributeButtonFormMethodEnumButtonFormMethodValues.set_fid0sb$(this, 'formmethod', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formNovalidate', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'formnovalidate');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'formnovalidate', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formTarget', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'formtarget');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'formtarget', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'value', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeButtonTypeEnumButtonTypeValues.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeButtonTypeEnumButtonTypeValues.set_fid0sb$(this, 'type', newValue);
    }
  });
  BUTTON.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BUTTON',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  function get_asFlowContent_9($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_1($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_7($receiver) {
    return $receiver;
  }
  function CANVAS(initialAttributes, consumer) {
    HTMLTag.call(this, 'canvas', consumer, initialAttributes, null, false, false);
    this.consumer_g24cau$_0 = consumer;
  }
  Object.defineProperty(CANVAS.prototype, 'consumer', {
    get: function () {
      return this.consumer_g24cau$_0;
    }
  });
  Object.defineProperty(CANVAS.prototype, 'width', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(CANVAS.prototype, 'height', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  CANVAS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CANVAS',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_10($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_8($receiver) {
    return $receiver;
  }
  function CAPTION(initialAttributes, consumer) {
    HTMLTag.call(this, 'caption', consumer, initialAttributes, null, false, false);
    this.consumer_km5bao$_0 = consumer;
  }
  Object.defineProperty(CAPTION.prototype, 'consumer', {
    get: function () {
      return this.consumer_km5bao$_0;
    }
  });
  CAPTION.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CAPTION',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function CITE(initialAttributes, consumer) {
    HTMLTag.call(this, 'cite', consumer, initialAttributes, null, true, false);
    this.consumer_tbuqkn$_0 = consumer;
  }
  Object.defineProperty(CITE.prototype, 'consumer', {
    get: function () {
      return this.consumer_tbuqkn$_0;
    }
  });
  CITE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CITE',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_11($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_9($receiver) {
    return $receiver;
  }
  function CODE(initialAttributes, consumer) {
    HTMLTag.call(this, 'code', consumer, initialAttributes, null, true, false);
    this.consumer_lkhlo1$_0 = consumer;
  }
  Object.defineProperty(CODE.prototype, 'consumer', {
    get: function () {
      return this.consumer_lkhlo1$_0;
    }
  });
  CODE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CODE',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_12($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_10($receiver) {
    return $receiver;
  }
  function COL(initialAttributes, consumer) {
    HTMLTag.call(this, 'col', consumer, initialAttributes, null, false, true);
    this.consumer_vg138q$_0 = consumer;
  }
  Object.defineProperty(COL.prototype, 'consumer', {
    get: function () {
      return this.consumer_vg138q$_0;
    }
  });
  Object.defineProperty(COL.prototype, 'span', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'span');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'span', newValue);
    }
  });
  COL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'COL',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  function COLGROUP(initialAttributes, consumer) {
    HTMLTag.call(this, 'colgroup', consumer, initialAttributes, null, false, false);
    this.consumer_6a9voh$_0 = consumer;
  }
  Object.defineProperty(COLGROUP.prototype, 'consumer', {
    get: function () {
      return this.consumer_6a9voh$_0;
    }
  });
  Object.defineProperty(COLGROUP.prototype, 'span', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'span');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'span', newValue);
    }
  });
  COLGROUP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'COLGROUP',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  var col_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.col_bjbitg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var COL_init = _.kotlinx.html.COL;
    var Throwable = Error;
    function col$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = col$lambda;
      var $receiver_0 = new COL_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function COMMAND(initialAttributes, consumer) {
    HTMLTag.call(this, 'command', consumer, initialAttributes, null, true, true);
    this.consumer_ybeb7v$_0 = consumer;
  }
  Object.defineProperty(COMMAND.prototype, 'consumer', {
    get: function () {
      return this.consumer_ybeb7v$_0;
    }
  });
  Object.defineProperty(COMMAND.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeCommandTypeEnumCommandTypeValues.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeCommandTypeEnumCommandTypeValues.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'label', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'label');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'label', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'icon', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'icon');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'icon', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'disabled', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'checked', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'checked');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'checked', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'radioGroup', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'radiogroup');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'radiogroup', newValue);
    }
  });
  COMMAND.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'COMMAND',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataPhrasingContent, HTMLTag]
  };
  function get_asFlowContent_13($receiver) {
    return $receiver;
  }
  function get_asMetaDataContent($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_11($receiver) {
    return $receiver;
  }
  function DATALIST(initialAttributes, consumer) {
    HTMLTag.call(this, 'datalist', consumer, initialAttributes, null, true, false);
    this.consumer_gaok7q$_0 = consumer;
  }
  Object.defineProperty(DATALIST.prototype, 'consumer', {
    get: function () {
      return this.consumer_gaok7q$_0;
    }
  });
  DATALIST.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DATALIST',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  var option_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.option_uctrsw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.kotlinx.html.OPTION;
    var Throwable = Error;
    function option$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = option$lambda;
      var $receiver_0 = new OPTION_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function option$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function option_2($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new OPTION(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      option$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function get_asFlowContent_14($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_12($receiver) {
    return $receiver;
  }
  function DD(initialAttributes, consumer) {
    HTMLTag.call(this, 'dd', consumer, initialAttributes, null, false, false);
    this.consumer_6bm2n6$_0 = consumer;
  }
  Object.defineProperty(DD.prototype, 'consumer', {
    get: function () {
      return this.consumer_6bm2n6$_0;
    }
  });
  DD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DD',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function DEL(initialAttributes, consumer) {
    HTMLTag.call(this, 'del', consumer, initialAttributes, null, false, false);
    this.consumer_58tjed$_0 = consumer;
  }
  Object.defineProperty(DEL.prototype, 'consumer', {
    get: function () {
      return this.consumer_58tjed$_0;
    }
  });
  Object.defineProperty(DEL.prototype, 'cite', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'cite');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'cite', newValue);
    }
  });
  Object.defineProperty(DEL.prototype, 'dateTime', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'datetime');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'datetime', newValue);
    }
  });
  DEL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DEL',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_15($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_13($receiver) {
    return $receiver;
  }
  function DETAILS(initialAttributes, consumer) {
    HTMLTag.call(this, 'details', consumer, initialAttributes, null, false, false);
    this.consumer_jxzvw$_0 = consumer;
  }
  Object.defineProperty(DETAILS.prototype, 'consumer', {
    get: function () {
      return this.consumer_jxzvw$_0;
    }
  });
  Object.defineProperty(DETAILS.prototype, 'open', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'open');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'open', newValue);
    }
  });
  DETAILS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DETAILS',
    interfaces: [CommonAttributeGroupFacadeFlowInteractiveContent, HTMLTag]
  };
  var legend_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.legend_vwmtm2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.kotlinx.html.LEGEND;
    var Throwable = Error;
    function legend$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = legend$lambda;
      var $receiver_0 = new LEGEND_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function get_asFlowContent_16($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_2($receiver) {
    return $receiver;
  }
  function DFN(initialAttributes, consumer) {
    HTMLTag.call(this, 'dfn', consumer, initialAttributes, null, true, false);
    this.consumer_iz2h5i$_0 = consumer;
  }
  Object.defineProperty(DFN.prototype, 'consumer', {
    get: function () {
      return this.consumer_iz2h5i$_0;
    }
  });
  DFN.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFN',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_17($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_14($receiver) {
    return $receiver;
  }
  function DIALOG(initialAttributes, consumer) {
    HTMLTag.call(this, 'dialog', consumer, initialAttributes, null, false, false);
    this.consumer_8dah7u$_0 = consumer;
  }
  Object.defineProperty(DIALOG.prototype, 'consumer', {
    get: function () {
      return this.consumer_8dah7u$_0;
    }
  });
  DIALOG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DIALOG',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function DIV(initialAttributes, consumer) {
    HTMLTag.call(this, 'div', consumer, initialAttributes, null, false, false);
    this.consumer_q3hbv$_0 = consumer;
  }
  Object.defineProperty(DIV.prototype, 'consumer', {
    get: function () {
      return this.consumer_q3hbv$_0;
    }
  });
  DIV.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DIV',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function DL(initialAttributes, consumer) {
    HTMLTag.call(this, 'dl', consumer, initialAttributes, null, false, false);
    this.consumer_ibwzrq$_0 = consumer;
  }
  Object.defineProperty(DL.prototype, 'consumer', {
    get: function () {
      return this.consumer_ibwzrq$_0;
    }
  });
  DL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DL',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  var dd_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.dd_xoxdrp$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DD_init = _.kotlinx.html.DD;
    var Throwable = Error;
    function dd$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dd$lambda;
      var $receiver_0 = new DD_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var dt_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.dt_a2ff2z$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DT_init = _.kotlinx.html.DT;
    var Throwable = Error;
    function dt$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dt$lambda;
      var $receiver_0 = new DT_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function DT(initialAttributes, consumer) {
    HTMLTag.call(this, 'dt', consumer, initialAttributes, null, false, false);
    this.consumer_s1nzsi$_0 = consumer;
  }
  Object.defineProperty(DT.prototype, 'consumer', {
    get: function () {
      return this.consumer_s1nzsi$_0;
    }
  });
  DT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DT',
    interfaces: [HtmlInlineTag, HTMLTag]
  };
  function EM(initialAttributes, consumer) {
    HTMLTag.call(this, 'em', consumer, initialAttributes, null, true, false);
    this.consumer_p46uiy$_0 = consumer;
  }
  Object.defineProperty(EM.prototype, 'consumer', {
    get: function () {
      return this.consumer_p46uiy$_0;
    }
  });
  EM.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EM',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_18($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_15($receiver) {
    return $receiver;
  }
  function EMBED(initialAttributes, consumer) {
    HTMLTag.call(this, 'embed', consumer, initialAttributes, null, true, true);
    this.consumer_kr1rcz$_0 = consumer;
  }
  Object.defineProperty(EMBED.prototype, 'consumer', {
    get: function () {
      return this.consumer_kr1rcz$_0;
    }
  });
  Object.defineProperty(EMBED.prototype, 'src', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(EMBED.prototype, 'height', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(EMBED.prototype, 'width', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(EMBED.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  EMBED.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EMBED',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  function get_asFlowContent_19($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_3($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_16($receiver) {
    return $receiver;
  }
  function FIELDSET(initialAttributes, consumer) {
    HTMLTag.call(this, 'fieldset', consumer, initialAttributes, null, false, false);
    this.consumer_lxs0p6$_0 = consumer;
  }
  Object.defineProperty(FIELDSET.prototype, 'consumer', {
    get: function () {
      return this.consumer_lxs0p6$_0;
    }
  });
  Object.defineProperty(FIELDSET.prototype, 'disabled', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(FIELDSET.prototype, 'form', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(FIELDSET.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  FIELDSET.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FIELDSET',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  var legend_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.legend_xzrxko$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.kotlinx.html.LEGEND;
    var Throwable = Error;
    function legend$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = legend$lambda;
      var $receiver_0 = new LEGEND_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function FIGCAPTION(initialAttributes, consumer) {
    HTMLTag.call(this, 'figcaption', consumer, initialAttributes, null, false, false);
    this.consumer_ayjsck$_0 = consumer;
  }
  Object.defineProperty(FIGCAPTION.prototype, 'consumer', {
    get: function () {
      return this.consumer_ayjsck$_0;
    }
  });
  FIGCAPTION.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FIGCAPTION',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function FIGURE(initialAttributes, consumer) {
    HTMLTag.call(this, 'figure', consumer, initialAttributes, null, false, false);
    this.consumer_yimbeu$_0 = consumer;
  }
  Object.defineProperty(FIGURE.prototype, 'consumer', {
    get: function () {
      return this.consumer_yimbeu$_0;
    }
  });
  FIGURE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FIGURE',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  var legend_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.legend_pujkak$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.kotlinx.html.LEGEND;
    var Throwable = Error;
    function legend$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = legend$lambda;
      var $receiver_0 = new LEGEND_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var figcaption_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.figcaption_8j2zdd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIGCAPTION_init = _.kotlinx.html.FIGCAPTION;
    var Throwable = Error;
    function figcaption$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = figcaption$lambda;
      var $receiver_0 = new FIGCAPTION_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function FOOTER(initialAttributes, consumer) {
    HTMLTag.call(this, 'footer', consumer, initialAttributes, null, false, false);
    this.consumer_7w45hf$_0 = consumer;
  }
  Object.defineProperty(FOOTER.prototype, 'consumer', {
    get: function () {
      return this.consumer_7w45hf$_0;
    }
  });
  FOOTER.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FOOTER',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function FORM(initialAttributes, consumer) {
    HTMLTag.call(this, 'form', consumer, initialAttributes, null, false, false);
    this.consumer_tm1fdy$_0 = consumer;
  }
  Object.defineProperty(FORM.prototype, 'consumer', {
    get: function () {
      return this.consumer_tm1fdy$_0;
    }
  });
  Object.defineProperty(FORM.prototype, 'acceptCharset', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'accept-charset');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'accept-charset', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'action', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'action');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'action', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'autoComplete', {
    configurable: true,
    get: function () {
      return attributeBooleanBooleanOnOff.get_txhc1s$(this, 'autocomplete');
    },
    set: function (newValue) {
      attributeBooleanBooleanOnOff.set_fid0sb$(this, 'autocomplete', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'encType', {
    configurable: true,
    get: function () {
      return attributeFormEncTypeEnumFormEncTypeValues.get_txhc1s$(this, 'enctype');
    },
    set: function (newValue) {
      attributeFormEncTypeEnumFormEncTypeValues.set_fid0sb$(this, 'enctype', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'method', {
    configurable: true,
    get: function () {
      return attributeFormMethodEnumFormMethodValues.get_txhc1s$(this, 'method');
    },
    set: function (newValue) {
      attributeFormMethodEnumFormMethodValues.set_fid0sb$(this, 'method', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'novalidate', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'novalidate');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'novalidate', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'target', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'target');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'target', newValue);
    }
  });
  FORM.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FORM',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function H1(initialAttributes, consumer) {
    HTMLTag.call(this, 'h1', consumer, initialAttributes, null, false, false);
    this.consumer_b9fkln$_0 = consumer;
  }
  Object.defineProperty(H1.prototype, 'consumer', {
    get: function () {
      return this.consumer_b9fkln$_0;
    }
  });
  H1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H1',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };
  function H2(initialAttributes, consumer) {
    HTMLTag.call(this, 'h2', consumer, initialAttributes, null, false, false);
    this.consumer_igfbxw$_0 = consumer;
  }
  Object.defineProperty(H2.prototype, 'consumer', {
    get: function () {
      return this.consumer_igfbxw$_0;
    }
  });
  H2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H2',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };
  function H3(initialAttributes, consumer) {
    HTMLTag.call(this, 'h3', consumer, initialAttributes, null, false, false);
    this.consumer_mutthp$_0 = consumer;
  }
  Object.defineProperty(H3.prototype, 'consumer', {
    get: function () {
      return this.consumer_mutthp$_0;
    }
  });
  H3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H3',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };
  function H4(initialAttributes, consumer) {
    HTMLTag.call(this, 'h4', consumer, initialAttributes, null, false, false);
    this.consumer_6v131u$_0 = consumer;
  }
  Object.defineProperty(H4.prototype, 'consumer', {
    get: function () {
      return this.consumer_6v131u$_0;
    }
  });
  H4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H4',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };
  function H5(initialAttributes, consumer) {
    HTMLTag.call(this, 'h5', consumer, initialAttributes, null, false, false);
    this.consumer_yg82dr$_0 = consumer;
  }
  Object.defineProperty(H5.prototype, 'consumer', {
    get: function () {
      return this.consumer_yg82dr$_0;
    }
  });
  H5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H5',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };
  function H6(initialAttributes, consumer) {
    HTMLTag.call(this, 'h6', consumer, initialAttributes, null, false, false);
    this.consumer_4qd5u8$_0 = consumer;
  }
  Object.defineProperty(H6.prototype, 'consumer', {
    get: function () {
      return this.consumer_4qd5u8$_0;
    }
  });
  H6.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H6',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };
  function HEAD(initialAttributes, consumer) {
    HTMLTag.call(this, 'head', consumer, initialAttributes, null, false, false);
    this.consumer_8goapu$_0 = consumer;
  }
  Object.defineProperty(HEAD.prototype, 'consumer', {
    get: function () {
      return this.consumer_8goapu$_0;
    }
  });
  HEAD.prototype.unaryPlus_lvwjq6$ = function ($receiver) {
    this.entity_ws8or7$($receiver);
  };
  HEAD.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.text_61zpoe$($receiver);
  };
  HEAD.prototype.text_61zpoe$ = function (s) {
    HTMLTag.prototype.text_61zpoe$.call(this, s);
  };
  HEAD.prototype.text_3p81yu$ = function (n) {
    HTMLTag.prototype.text_3p81yu$.call(this, n);
  };
  HEAD.prototype.entity_ws8or7$ = function (e) {
    HTMLTag.prototype.entity_ws8or7$.call(this, e);
  };
  HEAD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HEAD',
    interfaces: [HtmlHeadTag, HTMLTag]
  };
  function HEADER(initialAttributes, consumer) {
    HTMLTag.call(this, 'header', consumer, initialAttributes, null, false, false);
    this.consumer_8dl8b5$_0 = consumer;
  }
  Object.defineProperty(HEADER.prototype, 'consumer', {
    get: function () {
      return this.consumer_8dl8b5$_0;
    }
  });
  HEADER.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HEADER',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function HGROUP(initialAttributes, consumer) {
    HTMLTag.call(this, 'hgroup', consumer, initialAttributes, null, false, false);
    this.consumer_aliu2h$_0 = consumer;
  }
  Object.defineProperty(HGROUP.prototype, 'consumer', {
    get: function () {
      return this.consumer_aliu2h$_0;
    }
  });
  HGROUP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HGROUP',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingContent, HTMLTag]
  };
  var h1_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h1_31khfp$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H1_init = _.kotlinx.html.H1;
    var Throwable = Error;
    function h1$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h1$lambda;
      var $receiver_0 = new H1_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h2_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h2_rz4juu$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H2_init = _.kotlinx.html.H2;
    var Throwable = Error;
    function h2$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h2$lambda;
      var $receiver_0 = new H2_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h3_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h3_i4ffp5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H3_init = _.kotlinx.html.H3;
    var Throwable = Error;
    function h3$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h3$lambda;
      var $receiver_0 = new H3_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h4_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h4_6t4mq0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H4_init = _.kotlinx.html.H4;
    var Throwable = Error;
    function h4$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h4$lambda;
      var $receiver_0 = new H4_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h5_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h5_vqop55$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H5_init = _.kotlinx.html.H5;
    var Throwable = Error;
    function h5$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h5$lambda;
      var $receiver_0 = new H5_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var h6_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.h6_ecvaeu$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H6_init = _.kotlinx.html.H6;
    var Throwable = Error;
    function h6$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h6$lambda;
      var $receiver_0 = new H6_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function get_asFlowContent_20($receiver) {
    return $receiver;
  }
  function get_asHeadingContent($receiver) {
    return $receiver;
  }
  function HR(initialAttributes, consumer) {
    HTMLTag.call(this, 'hr', consumer, initialAttributes, null, false, true);
    this.consumer_ozoics$_0 = consumer;
  }
  Object.defineProperty(HR.prototype, 'consumer', {
    get: function () {
      return this.consumer_ozoics$_0;
    }
  });
  HR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HR',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function HTML(initialAttributes, consumer, namespace) {
    if (namespace === void 0)
      namespace = null;
    HTMLTag.call(this, 'html', consumer, initialAttributes, namespace, false, false);
    this.consumer_7o7wi5$_0 = consumer;
  }
  Object.defineProperty(HTML.prototype, 'consumer', {
    get: function () {
      return this.consumer_7o7wi5$_0;
    }
  });
  Object.defineProperty(HTML.prototype, 'manifest', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'manifest');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'manifest', newValue);
    }
  });
  HTML.prototype.unaryPlus_lvwjq6$ = function ($receiver) {
    this.entity_ws8or7$($receiver);
  };
  HTML.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.text_61zpoe$($receiver);
  };
  HTML.prototype.text_61zpoe$ = function (s) {
    HTMLTag.prototype.text_61zpoe$.call(this, s);
  };
  HTML.prototype.text_3p81yu$ = function (n) {
    HTMLTag.prototype.text_3p81yu$.call(this, n);
  };
  HTML.prototype.entity_ws8or7$ = function (e) {
    HTMLTag.prototype.entity_ws8or7$.call(this, e);
  };
  HTML.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HTML',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  var body_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.body_qwuuhi$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BODY_init = _.kotlinx.html.BODY;
    var Throwable = Error;
    function body$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = body$lambda;
      var $receiver_0 = new BODY_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var head_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.head_cwj6vx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var HEAD_init = _.kotlinx.html.HEAD;
    var Throwable = Error;
    function head$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, block) {
      if (block === void 0)
        block = head$lambda;
      var $receiver_0 = new HEAD_init(html.emptyMap, $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function head$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function head_2($receiver, content) {
    if (content === void 0)
      content = '';
    var $receiver_0 = new HEAD(emptyMap_0, $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      head$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function I(initialAttributes, consumer) {
    HTMLTag.call(this, 'i', consumer, initialAttributes, null, true, false);
    this.consumer_uoovcd$_0 = consumer;
  }
  Object.defineProperty(I.prototype, 'consumer', {
    get: function () {
      return this.consumer_uoovcd$_0;
    }
  });
  I.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'I',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_21($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_17($receiver) {
    return $receiver;
  }
  function IFRAME(initialAttributes, consumer) {
    HTMLTag.call(this, 'iframe', consumer, initialAttributes, null, true, false);
    this.consumer_6ckxm$_0 = consumer;
  }
  Object.defineProperty(IFRAME.prototype, 'consumer', {
    get: function () {
      return this.consumer_6ckxm$_0;
    }
  });
  Object.defineProperty(IFRAME.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'src', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'height', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'width', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'sandbox', {
    configurable: true,
    get: function () {
      return attributeIframeSandboxEnumIframeSandboxValues.get_txhc1s$(this, 'sandbox');
    },
    set: function (newValue) {
      attributeIframeSandboxEnumIframeSandboxValues.set_fid0sb$(this, 'sandbox', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'seamless', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'seamless');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'seamless', newValue);
    }
  });
  IFRAME.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IFRAME',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  function get_asFlowContent_22($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_4($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_18($receiver) {
    return $receiver;
  }
  function IMG(initialAttributes, consumer) {
    HTMLTag.call(this, 'img', consumer, initialAttributes, null, true, true);
    this.consumer_4la90t$_0 = consumer;
  }
  Object.defineProperty(IMG.prototype, 'consumer', {
    get: function () {
      return this.consumer_4la90t$_0;
    }
  });
  Object.defineProperty(IMG.prototype, 'alt', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'alt');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'alt', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'src', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'height', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'width', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'usemap', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'usemap');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'usemap', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'ismap', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'ismap');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'ismap', newValue);
    }
  });
  IMG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IMG',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  function get_asFlowContent_23($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_5($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_19($receiver) {
    return $receiver;
  }
  function INPUT(initialAttributes, consumer) {
    HTMLTag.call(this, 'input', consumer, initialAttributes, null, true, true);
    this.consumer_t1a1kk$_0 = consumer;
  }
  Object.defineProperty(INPUT.prototype, 'consumer', {
    get: function () {
      return this.consumer_t1a1kk$_0;
    }
  });
  Object.defineProperty(INPUT.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeInputTypeEnumInputTypeValues.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeInputTypeEnumInputTypeValues.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'accept', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'accept');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'accept', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'alt', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'alt');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'alt', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'autoFocus', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'autoComplete', {
    configurable: true,
    get: function () {
      return attributeBooleanBooleanOnOff.get_txhc1s$(this, 'autocomplete');
    },
    set: function (newValue) {
      attributeBooleanBooleanOnOff.set_fid0sb$(this, 'autocomplete', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'checked', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'checked');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'checked', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'disabled', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'form', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formAction', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'formaction');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'formaction', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formEncType', {
    configurable: true,
    get: function () {
      return attributeInputFormEncTypeEnumInputFormEncTypeValues.get_txhc1s$(this, 'formenctype');
    },
    set: function (newValue) {
      attributeInputFormEncTypeEnumInputFormEncTypeValues.set_fid0sb$(this, 'formenctype', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formMethod', {
    configurable: true,
    get: function () {
      return attributeInputFormMethodEnumInputFormMethodValues.get_txhc1s$(this, 'formmethod');
    },
    set: function (newValue) {
      attributeInputFormMethodEnumInputFormMethodValues.set_fid0sb$(this, 'formmethod', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formNovalidate', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'formnovalidate');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'formnovalidate', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formTarget', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'formtarget');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'formtarget', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'height', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'list', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'list');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'list', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'max', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'max');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'max', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'maxLength', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'maxlength');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'maxlength', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'minLength', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'minlength');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'minlength', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'min', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'min');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'min', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'multiple', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'multiple');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'multiple', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'pattern', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'pattern');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'pattern', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'placeholder', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'placeholder');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'placeholder', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'readonly', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'readonly');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'readonly', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'required', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'required');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'required', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'size', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'size');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'size', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'src', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'step', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'step');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'step', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'width', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'files', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'files');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'files', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'value', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  INPUT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'INPUT',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  function get_asFlowContent_24($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_6($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_20($receiver) {
    return $receiver;
  }
  function INS(initialAttributes, consumer) {
    HTMLTag.call(this, 'ins', consumer, initialAttributes, null, false, false);
    this.consumer_59ed94$_0 = consumer;
  }
  Object.defineProperty(INS.prototype, 'consumer', {
    get: function () {
      return this.consumer_59ed94$_0;
    }
  });
  Object.defineProperty(INS.prototype, 'cite', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'cite');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'cite', newValue);
    }
  });
  Object.defineProperty(INS.prototype, 'dateTime', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'datetime');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'datetime', newValue);
    }
  });
  INS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'INS',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_25($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_21($receiver) {
    return $receiver;
  }
  function KBD(initialAttributes, consumer) {
    HTMLTag.call(this, 'kbd', consumer, initialAttributes, null, true, false);
    this.consumer_agzz8p$_0 = consumer;
  }
  Object.defineProperty(KBD.prototype, 'consumer', {
    get: function () {
      return this.consumer_agzz8p$_0;
    }
  });
  KBD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KBD',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_26($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_22($receiver) {
    return $receiver;
  }
  function KEYGEN(initialAttributes, consumer) {
    HTMLTag.call(this, 'keygen', consumer, initialAttributes, null, true, true);
    this.consumer_c07zcj$_0 = consumer;
  }
  Object.defineProperty(KEYGEN.prototype, 'consumer', {
    get: function () {
      return this.consumer_c07zcj$_0;
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'autoFocus', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'challenge', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'challenge');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'challenge', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'disabled', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'form', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'keyType', {
    configurable: true,
    get: function () {
      return attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues.get_txhc1s$(this, 'keytype');
    },
    set: function (newValue) {
      attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues.set_fid0sb$(this, 'keytype', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  KEYGEN.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KEYGEN',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  function get_asFlowContent_27($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_7($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_23($receiver) {
    return $receiver;
  }
  function LABEL(initialAttributes, consumer) {
    HTMLTag.call(this, 'label', consumer, initialAttributes, null, true, false);
    this.consumer_d62jmq$_0 = consumer;
  }
  Object.defineProperty(LABEL.prototype, 'consumer', {
    get: function () {
      return this.consumer_d62jmq$_0;
    }
  });
  Object.defineProperty(LABEL.prototype, 'form', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(LABEL.prototype, 'htmlFor', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'for');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'for', newValue);
    }
  });
  LABEL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LABEL',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  function get_asFlowContent_28($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_8($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_24($receiver) {
    return $receiver;
  }
  function LEGEND(initialAttributes, consumer) {
    HTMLTag.call(this, 'legend', consumer, initialAttributes, null, true, false);
    this.consumer_h1ylzl$_0 = consumer;
  }
  Object.defineProperty(LEGEND.prototype, 'consumer', {
    get: function () {
      return this.consumer_h1ylzl$_0;
    }
  });
  LEGEND.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LEGEND',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_29($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_25($receiver) {
    return $receiver;
  }
  function LI(initialAttributes, consumer) {
    HTMLTag.call(this, 'li', consumer, initialAttributes, null, false, false);
    this.consumer_gvd6sf$_0 = consumer;
  }
  Object.defineProperty(LI.prototype, 'consumer', {
    get: function () {
      return this.consumer_gvd6sf$_0;
    }
  });
  Object.defineProperty(LI.prototype, 'value', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  LI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LI',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function LINK(initialAttributes, consumer) {
    HTMLTag.call(this, 'link', consumer, initialAttributes, null, false, true);
    this.consumer_bkmyw4$_0 = consumer;
  }
  Object.defineProperty(LINK.prototype, 'consumer', {
    get: function () {
      return this.consumer_bkmyw4$_0;
    }
  });
  Object.defineProperty(LINK.prototype, 'href', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'href');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'href', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'hrefLang', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'hreflang');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'hreflang', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'rel', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'rel');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'rel', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'media', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'media');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'media', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'sizes', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'sizes');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'sizes', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'integrity', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'integrity');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'integrity', newValue);
    }
  });
  LINK.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LINK',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataPhrasingContent, HTMLTag]
  };
  function get_asFlowContent_30($receiver) {
    return $receiver;
  }
  function get_asMetaDataContent_0($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_26($receiver) {
    return $receiver;
  }
  function MAIN(initialAttributes, consumer) {
    HTMLTag.call(this, 'main', consumer, initialAttributes, null, false, false);
    this.consumer_9wvspx$_0 = consumer;
  }
  Object.defineProperty(MAIN.prototype, 'consumer', {
    get: function () {
      return this.consumer_9wvspx$_0;
    }
  });
  MAIN.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MAIN',
    interfaces: [CommonAttributeGroupFacadeFlowPhrasingSectioningContent, HTMLTag]
  };
  function MAP(initialAttributes, consumer) {
    HTMLTag.call(this, 'map', consumer, initialAttributes, null, true, false);
    this.consumer_nryj5m$_0 = consumer;
  }
  Object.defineProperty(MAP.prototype, 'consumer', {
    get: function () {
      return this.consumer_nryj5m$_0;
    }
  });
  Object.defineProperty(MAP.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  MAP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MAP',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_31($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_27($receiver) {
    return $receiver;
  }
  function MARK(initialAttributes, consumer) {
    HTMLTag.call(this, 'mark', consumer, initialAttributes, null, true, false);
    this.consumer_rf92pb$_0 = consumer;
  }
  Object.defineProperty(MARK.prototype, 'consumer', {
    get: function () {
      return this.consumer_rf92pb$_0;
    }
  });
  MARK.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MARK',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_32($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_28($receiver) {
    return $receiver;
  }
  function MATH(initialAttributes, consumer) {
    HTMLTag.call(this, 'math', consumer, initialAttributes, null, false, false);
    this.consumer_l7oxw6$_0 = consumer;
  }
  Object.defineProperty(MATH.prototype, 'consumer', {
    get: function () {
      return this.consumer_l7oxw6$_0;
    }
  });
  MATH.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MATH',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_33($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_29($receiver) {
    return $receiver;
  }
  function MATHML(initialAttributes, consumer) {
    HTMLTag.call(this, 'mathml', consumer, initialAttributes, null, false, false);
    this.consumer_8uwqq1$_0 = consumer;
  }
  Object.defineProperty(MATHML.prototype, 'consumer', {
    get: function () {
      return this.consumer_8uwqq1$_0;
    }
  });
  MATHML.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MATHML',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  function META(initialAttributes, consumer) {
    HTMLTag.call(this, 'meta', consumer, initialAttributes, null, false, true);
    this.consumer_pccp47$_0 = consumer;
  }
  Object.defineProperty(META.prototype, 'consumer', {
    get: function () {
      return this.consumer_pccp47$_0;
    }
  });
  Object.defineProperty(META.prototype, 'httpEquiv', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'http-equiv');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'http-equiv', newValue);
    }
  });
  Object.defineProperty(META.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(META.prototype, 'content', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'content');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'content', newValue);
    }
  });
  Object.defineProperty(META.prototype, 'charset', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'charset');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'charset', newValue);
    }
  });
  META.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'META',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataPhrasingContent, HTMLTag]
  };
  function get_asFlowContent_34($receiver) {
    return $receiver;
  }
  function get_asMetaDataContent_1($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_30($receiver) {
    return $receiver;
  }
  function METER(initialAttributes, consumer) {
    HTMLTag.call(this, 'meter', consumer, initialAttributes, null, true, false);
    this.consumer_37isgd$_0 = consumer;
  }
  Object.defineProperty(METER.prototype, 'consumer', {
    get: function () {
      return this.consumer_37isgd$_0;
    }
  });
  Object.defineProperty(METER.prototype, 'value', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'min', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'min');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'min', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'max', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'max');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'max', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'low', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'low');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'low', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'high', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'high');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'high', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'optimum', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'optimum');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'optimum', newValue);
    }
  });
  METER.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'METER',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_35($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_31($receiver) {
    return $receiver;
  }
  function NAV(initialAttributes, consumer) {
    HTMLTag.call(this, 'nav', consumer, initialAttributes, null, false, false);
    this.consumer_65jkb1$_0 = consumer;
  }
  Object.defineProperty(NAV.prototype, 'consumer', {
    get: function () {
      return this.consumer_65jkb1$_0;
    }
  });
  NAV.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NAV',
    interfaces: [CommonAttributeGroupFacadeFlowSectioningContent, HTMLTag]
  };
  function get_asFlowContent_36($receiver) {
    return $receiver;
  }
  function get_asSectioningContent_1($receiver) {
    return $receiver;
  }
  function NOSCRIPT(initialAttributes, consumer) {
    HTMLTag.call(this, 'noscript', consumer, initialAttributes, null, false, false);
    this.consumer_86itoy$_0 = consumer;
  }
  Object.defineProperty(NOSCRIPT.prototype, 'consumer', {
    get: function () {
      return this.consumer_86itoy$_0;
    }
  });
  NOSCRIPT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NOSCRIPT',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataPhrasingContent, HTMLTag]
  };
  function get_asFlowContent_37($receiver) {
    return $receiver;
  }
  function get_asMetaDataContent_2($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_32($receiver) {
    return $receiver;
  }
  function OBJECT(initialAttributes, consumer) {
    HTMLTag.call(this, 'object', consumer, initialAttributes, null, true, false);
    this.consumer_1ylkbj$_0 = consumer;
  }
  Object.defineProperty(OBJECT.prototype, 'consumer', {
    get: function () {
      return this.consumer_1ylkbj$_0;
    }
  });
  Object.defineProperty(OBJECT.prototype, 'data', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'data');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'data', newValue);
    }
  });
  Object.defineProperty(OBJECT.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(OBJECT.prototype, 'height', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(OBJECT.prototype, 'width', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(OBJECT.prototype, 'usemap', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'usemap');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'usemap', newValue);
    }
  });
  Object.defineProperty(OBJECT.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(OBJECT.prototype, 'form', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(OBJECT.prototype, 'classId', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'classid');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'classid', newValue);
    }
  });
  OBJECT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OBJECT',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  var param_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.param_8fkg42$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.kotlinx.html.PARAM;
    var Throwable = Error;
    function param$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      if (block === void 0)
        block = param$lambda;
      var $receiver_0 = new PARAM_init(attributesMapOf(['name', name, 'value', value]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function get_asFlowContent_38($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_9($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_33($receiver) {
    return $receiver;
  }
  function OL(initialAttributes, consumer) {
    HTMLTag.call(this, 'ol', consumer, initialAttributes, null, false, false);
    this.consumer_55glq7$_0 = consumer;
  }
  Object.defineProperty(OL.prototype, 'consumer', {
    get: function () {
      return this.consumer_55glq7$_0;
    }
  });
  Object.defineProperty(OL.prototype, 'start', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'start');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'start', newValue);
    }
  });
  Object.defineProperty(OL.prototype, 'reversed', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'reversed');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'reversed', newValue);
    }
  });
  OL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OL',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  var li_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.li_nemw19$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LI_init = _.kotlinx.html.LI;
    var Throwable = Error;
    function li$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = li$lambda;
      var $receiver_0 = new LI_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function OPTGROUP(initialAttributes, consumer) {
    HTMLTag.call(this, 'optgroup', consumer, initialAttributes, null, true, false);
    this.consumer_nnwmwi$_0 = consumer;
  }
  Object.defineProperty(OPTGROUP.prototype, 'consumer', {
    get: function () {
      return this.consumer_nnwmwi$_0;
    }
  });
  Object.defineProperty(OPTGROUP.prototype, 'disabled', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(OPTGROUP.prototype, 'label', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'label');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'label', newValue);
    }
  });
  OPTGROUP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OPTGROUP',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  var option_3 = defineInlineFunction('kotlinx-html-js.kotlinx.html.option_z52iho$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.kotlinx.html.OPTION;
    var Throwable = Error;
    function option$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = option$lambda;
      var $receiver_0 = new OPTION_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function option$lambda_1(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function option_4($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new OPTION(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      option$lambda_1(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function OPTION(initialAttributes, consumer) {
    HTMLTag.call(this, 'option', consumer, initialAttributes, null, true, false);
    this.consumer_lt7f6f$_0 = consumer;
  }
  Object.defineProperty(OPTION.prototype, 'consumer', {
    get: function () {
      return this.consumer_lt7f6f$_0;
    }
  });
  Object.defineProperty(OPTION.prototype, 'disabled', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(OPTION.prototype, 'selected', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'selected');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'selected', newValue);
    }
  });
  Object.defineProperty(OPTION.prototype, 'label', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'label');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'label', newValue);
    }
  });
  Object.defineProperty(OPTION.prototype, 'value', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  OPTION.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OPTION',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  function OUTPUT(initialAttributes, consumer) {
    HTMLTag.call(this, 'output', consumer, initialAttributes, null, true, false);
    this.consumer_i1a0pv$_0 = consumer;
  }
  Object.defineProperty(OUTPUT.prototype, 'consumer', {
    get: function () {
      return this.consumer_i1a0pv$_0;
    }
  });
  Object.defineProperty(OUTPUT.prototype, 'htmlFor', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'for');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'for', newValue);
    }
  });
  Object.defineProperty(OUTPUT.prototype, 'form', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(OUTPUT.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  OUTPUT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OUTPUT',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_39($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_34($receiver) {
    return $receiver;
  }
  function P(initialAttributes, consumer) {
    HTMLTag.call(this, 'p', consumer, initialAttributes, null, false, false);
    this.consumer_pmd17q$_0 = consumer;
  }
  Object.defineProperty(P.prototype, 'consumer', {
    get: function () {
      return this.consumer_pmd17q$_0;
    }
  });
  P.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'P',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_40($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_35($receiver) {
    return $receiver;
  }
  function PARAM(initialAttributes, consumer) {
    HTMLTag.call(this, 'param', consumer, initialAttributes, null, true, true);
    this.consumer_tc29ah$_0 = consumer;
  }
  Object.defineProperty(PARAM.prototype, 'consumer', {
    get: function () {
      return this.consumer_tc29ah$_0;
    }
  });
  Object.defineProperty(PARAM.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(PARAM.prototype, 'value', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  PARAM.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PARAM',
    interfaces: [HTMLTag]
  };
  function PICTURE(initialAttributes, consumer) {
    HTMLTag.call(this, 'picture', consumer, initialAttributes, null, false, false);
    this.consumer_naboh4$_0 = consumer;
  }
  Object.defineProperty(PICTURE.prototype, 'consumer', {
    get: function () {
      return this.consumer_naboh4$_0;
    }
  });
  PICTURE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PICTURE',
    interfaces: [FlowInteractivePhrasingContent, HTMLTag]
  };
  var source_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.source_hwod20$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SOURCE_init = _.kotlinx.html.SOURCE;
    var Throwable = Error;
    function source$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = source$lambda;
      var $receiver_0 = new SOURCE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var img_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.img_ue7a3y$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.kotlinx.html.IMG;
    var Throwable = Error;
    function img$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, alt, src, classes, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = img$lambda;
      var $receiver_0 = new IMG_init(attributesMapOf(['alt', alt, 'src', src, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function get_asFlowContent_41($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_10($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_36($receiver) {
    return $receiver;
  }
  function PRE(initialAttributes, consumer) {
    HTMLTag.call(this, 'pre', consumer, initialAttributes, null, false, false);
    this.consumer_uan20j$_0 = consumer;
  }
  Object.defineProperty(PRE.prototype, 'consumer', {
    get: function () {
      return this.consumer_uan20j$_0;
    }
  });
  PRE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PRE',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_42($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_37($receiver) {
    return $receiver;
  }
  function PROGRESS(initialAttributes, consumer) {
    HTMLTag.call(this, 'progress', consumer, initialAttributes, null, true, false);
    this.consumer_1x9u8f$_0 = consumer;
  }
  Object.defineProperty(PROGRESS.prototype, 'consumer', {
    get: function () {
      return this.consumer_1x9u8f$_0;
    }
  });
  Object.defineProperty(PROGRESS.prototype, 'value', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  Object.defineProperty(PROGRESS.prototype, 'max', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'max');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'max', newValue);
    }
  });
  PROGRESS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PROGRESS',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_43($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_38($receiver) {
    return $receiver;
  }
  function Q(initialAttributes, consumer) {
    HTMLTag.call(this, 'q', consumer, initialAttributes, null, true, false);
    this.consumer_fow47v$_0 = consumer;
  }
  Object.defineProperty(Q.prototype, 'consumer', {
    get: function () {
      return this.consumer_fow47v$_0;
    }
  });
  Object.defineProperty(Q.prototype, 'cite', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'cite');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'cite', newValue);
    }
  });
  Q.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Q',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_44($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_39($receiver) {
    return $receiver;
  }
  function RP(initialAttributes, consumer) {
    HTMLTag.call(this, 'rp', consumer, initialAttributes, null, true, false);
    this.consumer_yqt63k$_0 = consumer;
  }
  Object.defineProperty(RP.prototype, 'consumer', {
    get: function () {
      return this.consumer_yqt63k$_0;
    }
  });
  RP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RP',
    interfaces: [HtmlInlineTag, HTMLTag]
  };
  function RT(initialAttributes, consumer) {
    HTMLTag.call(this, 'rt', consumer, initialAttributes, null, true, false);
    this.consumer_d3ie3g$_0 = consumer;
  }
  Object.defineProperty(RT.prototype, 'consumer', {
    get: function () {
      return this.consumer_d3ie3g$_0;
    }
  });
  RT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RT',
    interfaces: [HtmlInlineTag, HTMLTag]
  };
  function RUBY(initialAttributes, consumer) {
    HTMLTag.call(this, 'ruby', consumer, initialAttributes, null, true, false);
    this.consumer_6ltj98$_0 = consumer;
  }
  Object.defineProperty(RUBY.prototype, 'consumer', {
    get: function () {
      return this.consumer_6ltj98$_0;
    }
  });
  RUBY.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RUBY',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  var rt_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.rt_kderwb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var RT_init = _.kotlinx.html.RT;
    var Throwable = Error;
    function rt$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rt$lambda;
      var $receiver_0 = new RT_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var rp_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.rp_8bpft5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var RP_init = _.kotlinx.html.RP;
    var Throwable = Error;
    function rp$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rp$lambda;
      var $receiver_0 = new RP_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function get_asFlowContent_45($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_40($receiver) {
    return $receiver;
  }
  function SAMP(initialAttributes, consumer) {
    HTMLTag.call(this, 'samp', consumer, initialAttributes, null, true, false);
    this.consumer_v320er$_0 = consumer;
  }
  Object.defineProperty(SAMP.prototype, 'consumer', {
    get: function () {
      return this.consumer_v320er$_0;
    }
  });
  SAMP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SAMP',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_46($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_41($receiver) {
    return $receiver;
  }
  function SCRIPT(initialAttributes, consumer) {
    HTMLTag.call(this, 'script', consumer, initialAttributes, null, false, false);
    this.consumer_1olvfx$_0 = consumer;
  }
  Object.defineProperty(SCRIPT.prototype, 'consumer', {
    get: function () {
      return this.consumer_1olvfx$_0;
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'charset', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'charset');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'charset', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'src', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'defer', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'defer');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'defer', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'async', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'async');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'async', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'nonce', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'nonce');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'nonce', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'integrity', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'integrity');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'integrity', newValue);
    }
  });
  SCRIPT.prototype.unaryPlus_lvwjq6$ = function ($receiver) {
    this.entity_ws8or7$($receiver);
  };
  SCRIPT.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.text_61zpoe$($receiver);
  };
  SCRIPT.prototype.text_61zpoe$ = function (s) {
    HTMLTag.prototype.text_61zpoe$.call(this, s);
  };
  SCRIPT.prototype.text_3p81yu$ = function (n) {
    HTMLTag.prototype.text_3p81yu$.call(this, n);
  };
  SCRIPT.prototype.entity_ws8or7$ = function (e) {
    HTMLTag.prototype.entity_ws8or7$.call(this, e);
  };
  SCRIPT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SCRIPT',
    interfaces: [FlowMetaDataPhrasingContent, HTMLTag]
  };
  function get_asFlowContent_47($receiver) {
    return $receiver;
  }
  function get_asMetaDataContent_3($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_42($receiver) {
    return $receiver;
  }
  function SECTION(initialAttributes, consumer) {
    HTMLTag.call(this, 'section', consumer, initialAttributes, null, false, false);
    this.consumer_kemaep$_0 = consumer;
  }
  Object.defineProperty(SECTION.prototype, 'consumer', {
    get: function () {
      return this.consumer_kemaep$_0;
    }
  });
  SECTION.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SECTION',
    interfaces: [CommonAttributeGroupFacadeFlowSectioningContent, HTMLTag]
  };
  function get_asFlowContent_48($receiver) {
    return $receiver;
  }
  function get_asSectioningContent_2($receiver) {
    return $receiver;
  }
  function SELECT(initialAttributes, consumer) {
    HTMLTag.call(this, 'select', consumer, initialAttributes, null, true, false);
    this.consumer_mc8t3y$_0 = consumer;
  }
  Object.defineProperty(SELECT.prototype, 'consumer', {
    get: function () {
      return this.consumer_mc8t3y$_0;
    }
  });
  Object.defineProperty(SELECT.prototype, 'autoFocus', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'disabled', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'form', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'multiple', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'multiple');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'multiple', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'size', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'size');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'size', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'required', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'required');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'required', newValue);
    }
  });
  SELECT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SELECT',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  var option_5 = defineInlineFunction('kotlinx-html-js.kotlinx.html.option_xfiiwk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.kotlinx.html.OPTION;
    var Throwable = Error;
    function option$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = option$lambda;
      var $receiver_0 = new OPTION_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function option$lambda_2(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function option_6($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new OPTION(attributesMapOf_0('class', classes), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      option$lambda_2(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  var optGroup_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.optGroup_okqskg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var OPTGROUP_init = _.kotlinx.html.OPTGROUP;
    var Throwable = Error;
    function optGroup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, label, classes, block) {
      if (label === void 0)
        label = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = optGroup$lambda;
      var $receiver_0 = new OPTGROUP_init(attributesMapOf(['label', label, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function get_asFlowContent_49($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_11($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_43($receiver) {
    return $receiver;
  }
  function SMALL(initialAttributes, consumer) {
    HTMLTag.call(this, 'small', consumer, initialAttributes, null, true, false);
    this.consumer_9seu7l$_0 = consumer;
  }
  Object.defineProperty(SMALL.prototype, 'consumer', {
    get: function () {
      return this.consumer_9seu7l$_0;
    }
  });
  SMALL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SMALL',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_50($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_44($receiver) {
    return $receiver;
  }
  function SOURCE(initialAttributes, consumer) {
    HTMLTag.call(this, 'source', consumer, initialAttributes, null, true, true);
    this.consumer_auxc59$_0 = consumer;
  }
  Object.defineProperty(SOURCE.prototype, 'consumer', {
    get: function () {
      return this.consumer_auxc59$_0;
    }
  });
  Object.defineProperty(SOURCE.prototype, 'src', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(SOURCE.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(SOURCE.prototype, 'media', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'media');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'media', newValue);
    }
  });
  SOURCE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SOURCE',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  function SPAN(initialAttributes, consumer) {
    HTMLTag.call(this, 'span', consumer, initialAttributes, null, true, false);
    this.consumer_7vq504$_0 = consumer;
  }
  Object.defineProperty(SPAN.prototype, 'consumer', {
    get: function () {
      return this.consumer_7vq504$_0;
    }
  });
  SPAN.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SPAN',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_51($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_45($receiver) {
    return $receiver;
  }
  function STRONG(initialAttributes, consumer) {
    HTMLTag.call(this, 'strong', consumer, initialAttributes, null, true, false);
    this.consumer_2ut32f$_0 = consumer;
  }
  Object.defineProperty(STRONG.prototype, 'consumer', {
    get: function () {
      return this.consumer_2ut32f$_0;
    }
  });
  STRONG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'STRONG',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_52($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_46($receiver) {
    return $receiver;
  }
  function STYLE(initialAttributes, consumer) {
    HTMLTag.call(this, 'style', consumer, initialAttributes, null, false, false);
    this.consumer_s73hph$_0 = consumer;
  }
  Object.defineProperty(STYLE.prototype, 'consumer', {
    get: function () {
      return this.consumer_s73hph$_0;
    }
  });
  Object.defineProperty(STYLE.prototype, 'type', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(STYLE.prototype, 'media', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'media');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'media', newValue);
    }
  });
  Object.defineProperty(STYLE.prototype, 'scoped', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'scoped');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'scoped', newValue);
    }
  });
  Object.defineProperty(STYLE.prototype, 'nonce', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'nonce');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'nonce', newValue);
    }
  });
  STYLE.prototype.unaryPlus_lvwjq6$ = function ($receiver) {
    this.entity_ws8or7$($receiver);
  };
  STYLE.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.text_61zpoe$($receiver);
  };
  STYLE.prototype.text_61zpoe$ = function (s) {
    HTMLTag.prototype.text_61zpoe$.call(this, s);
  };
  STYLE.prototype.text_3p81yu$ = function (n) {
    HTMLTag.prototype.text_3p81yu$.call(this, n);
  };
  STYLE.prototype.entity_ws8or7$ = function (e) {
    HTMLTag.prototype.entity_ws8or7$.call(this, e);
  };
  STYLE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'STYLE',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataContent, HTMLTag]
  };
  function get_asFlowContent_53($receiver) {
    return $receiver;
  }
  function get_asMetaDataContent_4($receiver) {
    return $receiver;
  }
  function SUB(initialAttributes, consumer) {
    HTMLTag.call(this, 'sub', consumer, initialAttributes, null, true, false);
    this.consumer_kbo9ee$_0 = consumer;
  }
  Object.defineProperty(SUB.prototype, 'consumer', {
    get: function () {
      return this.consumer_kbo9ee$_0;
    }
  });
  SUB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SUB',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_54($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_47($receiver) {
    return $receiver;
  }
  function SUMMARY(initialAttributes, consumer) {
    HTMLTag.call(this, 'summary', consumer, initialAttributes, null, true, false);
    this.consumer_cqelow$_0 = consumer;
  }
  Object.defineProperty(SUMMARY.prototype, 'consumer', {
    get: function () {
      return this.consumer_cqelow$_0;
    }
  });
  SUMMARY.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SUMMARY',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };
  function SUP(initialAttributes, consumer) {
    HTMLTag.call(this, 'sup', consumer, initialAttributes, null, true, false);
    this.consumer_a70l54$_0 = consumer;
  }
  Object.defineProperty(SUP.prototype, 'consumer', {
    get: function () {
      return this.consumer_a70l54$_0;
    }
  });
  SUP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SUP',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_55($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_48($receiver) {
    return $receiver;
  }
  function SVG(initialAttributes, consumer) {
    HTMLTag.call(this, 'svg', consumer, initialAttributes, 'http://www.w3.org/2000/svg', false, false);
    this.consumer_opvzaq$_0 = consumer;
  }
  Object.defineProperty(SVG.prototype, 'consumer', {
    get: function () {
      return this.consumer_opvzaq$_0;
    }
  });
  SVG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SVG',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_56($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_49($receiver) {
    return $receiver;
  }
  function TABLE(initialAttributes, consumer) {
    HTMLTag.call(this, 'table', consumer, initialAttributes, null, false, false);
    this.consumer_gxb6a0$_0 = consumer;
  }
  Object.defineProperty(TABLE.prototype, 'consumer', {
    get: function () {
      return this.consumer_gxb6a0$_0;
    }
  });
  Object.defineProperty(TABLE.prototype, 'summary', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'summary');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'summary', newValue);
    }
  });
  TABLE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TABLE',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  var caption_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.caption_dcoxz5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CAPTION_init = _.kotlinx.html.CAPTION;
    var Throwable = Error;
    function caption$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = caption$lambda;
      var $receiver_0 = new CAPTION_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var colGroup_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.colGroup_ll6ybo$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var COLGROUP_init = _.kotlinx.html.COLGROUP;
    var Throwable = Error;
    function colGroup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = colGroup$lambda;
      var $receiver_0 = new COLGROUP_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var thead_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.thead_j1nulr$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var THEAD_init = _.kotlinx.html.THEAD;
    var Throwable = Error;
    function thead$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = thead$lambda;
      var $receiver_0 = new THEAD_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var tfoot_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.tfoot_bp83sz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TFOOT_init = _.kotlinx.html.TFOOT;
    var Throwable = Error;
    function tfoot$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tfoot$lambda;
      var $receiver_0 = new TFOOT_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var tbody_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.tbody_cbte6n$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TBODY_init = _.kotlinx.html.TBODY;
    var Throwable = Error;
    function tbody$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tbody$lambda;
      var $receiver_0 = new TBODY_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var tr_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.tr_7wec05$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.kotlinx.html.TR;
    var Throwable = Error;
    function tr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tr$lambda;
      var $receiver_0 = new TR_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function TBODY(initialAttributes, consumer) {
    HTMLTag.call(this, 'tbody', consumer, initialAttributes, null, false, false);
    this.consumer_ahxigw$_0 = consumer;
  }
  Object.defineProperty(TBODY.prototype, 'consumer', {
    get: function () {
      return this.consumer_ahxigw$_0;
    }
  });
  TBODY.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TBODY',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  var tr_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.tr_tlv0jx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.kotlinx.html.TR;
    var Throwable = Error;
    function tr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tr$lambda;
      var $receiver_0 = new TR_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function TD(initialAttributes, consumer) {
    HTMLTag.call(this, 'td', consumer, initialAttributes, null, false, false);
    this.consumer_ujuxim$_0 = consumer;
  }
  Object.defineProperty(TD.prototype, 'consumer', {
    get: function () {
      return this.consumer_ujuxim$_0;
    }
  });
  Object.defineProperty(TD.prototype, 'headers', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'headers');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'headers', newValue);
    }
  });
  Object.defineProperty(TD.prototype, 'rowSpan', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'rowspan');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'rowspan', newValue);
    }
  });
  Object.defineProperty(TD.prototype, 'colSpan', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'colspan');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'colspan', newValue);
    }
  });
  TD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TD',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  function TEXTAREA(initialAttributes, consumer) {
    HTMLTag.call(this, 'textarea', consumer, initialAttributes, null, true, false);
    this.consumer_jzapyc$_0 = consumer;
  }
  Object.defineProperty(TEXTAREA.prototype, 'consumer', {
    get: function () {
      return this.consumer_jzapyc$_0;
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'autoFocus', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'disabled', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'form', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'maxLength', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'maxlength');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'maxlength', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'minLength', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'minlength');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'minlength', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'name', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'placeholder', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'placeholder');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'placeholder', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'readonly', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'readonly');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'readonly', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'required', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'required');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'required', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'rows', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'rows');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'rows', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'cols', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'cols');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'cols', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'wrap', {
    configurable: true,
    get: function () {
      return attributeTextAreaWrapEnumTextAreaWrapValues.get_txhc1s$(this, 'wrap');
    },
    set: function (newValue) {
      attributeTextAreaWrapEnumTextAreaWrapValues.set_fid0sb$(this, 'wrap', newValue);
    }
  });
  TEXTAREA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TEXTAREA',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  function get_asFlowContent_57($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_12($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_50($receiver) {
    return $receiver;
  }
  function TFOOT(initialAttributes, consumer) {
    HTMLTag.call(this, 'tfoot', consumer, initialAttributes, null, false, false);
    this.consumer_72e0lo$_0 = consumer;
  }
  Object.defineProperty(TFOOT.prototype, 'consumer', {
    get: function () {
      return this.consumer_72e0lo$_0;
    }
  });
  TFOOT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TFOOT',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  var tr_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.tr_7v6uah$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.kotlinx.html.TR;
    var Throwable = Error;
    function tr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tr$lambda;
      var $receiver_0 = new TR_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function TH(initialAttributes, consumer) {
    HTMLTag.call(this, 'th', consumer, initialAttributes, null, false, false);
    this.consumer_7d2fqi$_0 = consumer;
  }
  Object.defineProperty(TH.prototype, 'consumer', {
    get: function () {
      return this.consumer_7d2fqi$_0;
    }
  });
  Object.defineProperty(TH.prototype, 'headers', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'headers');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'headers', newValue);
    }
  });
  Object.defineProperty(TH.prototype, 'rowSpan', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'rowspan');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'rowspan', newValue);
    }
  });
  Object.defineProperty(TH.prototype, 'colSpan', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'colspan');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'colspan', newValue);
    }
  });
  Object.defineProperty(TH.prototype, 'scope', {
    configurable: true,
    get: function () {
      return attributeThScopeEnumThScopeValues.get_txhc1s$(this, 'scope');
    },
    set: function (newValue) {
      attributeThScopeEnumThScopeValues.set_fid0sb$(this, 'scope', newValue);
    }
  });
  TH.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TH',
    interfaces: [HtmlInlineTag, HTMLTag]
  };
  function THEAD(initialAttributes, consumer) {
    HTMLTag.call(this, 'thead', consumer, initialAttributes, null, false, false);
    this.consumer_cqqvlu$_0 = consumer;
  }
  Object.defineProperty(THEAD.prototype, 'consumer', {
    get: function () {
      return this.consumer_cqqvlu$_0;
    }
  });
  THEAD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'THEAD',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  var tr_3 = defineInlineFunction('kotlinx-html-js.kotlinx.html.tr_lut1f9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.kotlinx.html.TR;
    var Throwable = Error;
    function tr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tr$lambda;
      var $receiver_0 = new TR_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function TIME(initialAttributes, consumer) {
    HTMLTag.call(this, 'time', consumer, initialAttributes, null, true, false);
    this.consumer_qokp9r$_0 = consumer;
  }
  Object.defineProperty(TIME.prototype, 'consumer', {
    get: function () {
      return this.consumer_qokp9r$_0;
    }
  });
  Object.defineProperty(TIME.prototype, 'dateTime', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'datetime');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'datetime', newValue);
    }
  });
  TIME.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TIME',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_58($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_51($receiver) {
    return $receiver;
  }
  function TITLE(initialAttributes, consumer) {
    HTMLTag.call(this, 'title', consumer, initialAttributes, null, false, false);
    this.consumer_t3doce$_0 = consumer;
  }
  Object.defineProperty(TITLE.prototype, 'consumer', {
    get: function () {
      return this.consumer_t3doce$_0;
    }
  });
  TITLE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TITLE',
    interfaces: [HtmlHeadTag, HTMLTag]
  };
  function TR(initialAttributes, consumer) {
    HTMLTag.call(this, 'tr', consumer, initialAttributes, null, false, false);
    this.consumer_kf799c$_0 = consumer;
  }
  Object.defineProperty(TR.prototype, 'consumer', {
    get: function () {
      return this.consumer_kf799c$_0;
    }
  });
  TR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TR',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };
  var th_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.th_bncpyi$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.kotlinx.html.TH;
    var Throwable = Error;
    function th$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, scope, classes, block) {
      if (scope === void 0)
        scope = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = th$lambda;
      var $receiver_0 = new TH_init(attributesMapOf(['scope', scope != null ? enumEncode(scope) : null, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var colTh = defineInlineFunction('kotlinx-html-js.kotlinx.html.colTh_aq069j$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var ThScope = _.kotlinx.html.ThScope;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.kotlinx.html.TH;
    var Throwable = Error;
    function colTh$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = colTh$lambda;
      var $receiver_0 = new TH_init(attributesMapOf(['scope', ThScope.col.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var colGroupTh = defineInlineFunction('kotlinx-html-js.kotlinx.html.colGroupTh_aq069j$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var ThScope = _.kotlinx.html.ThScope;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.kotlinx.html.TH;
    var Throwable = Error;
    function colGroupTh$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = colGroupTh$lambda;
      var $receiver_0 = new TH_init(attributesMapOf(['scope', ThScope.colGroup.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var rowTh = defineInlineFunction('kotlinx-html-js.kotlinx.html.rowTh_aq069j$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var ThScope = _.kotlinx.html.ThScope;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.kotlinx.html.TH;
    var Throwable = Error;
    function rowTh$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rowTh$lambda;
      var $receiver_0 = new TH_init(attributesMapOf(['scope', ThScope.row.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var rowGroupTh = defineInlineFunction('kotlinx-html-js.kotlinx.html.rowGroupTh_aq069j$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var ThScope = _.kotlinx.html.ThScope;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.kotlinx.html.TH;
    var Throwable = Error;
    function rowGroupTh$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rowGroupTh$lambda;
      var $receiver_0 = new TH_init(attributesMapOf(['scope', ThScope.rowGroup.realValue, 'class', classes]), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  var td_0 = defineInlineFunction('kotlinx-html-js.kotlinx.html.td_vlzo05$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TD_init = _.kotlinx.html.TD;
    var Throwable = Error;
    function td$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = td$lambda;
      var $receiver_0 = new TD_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function UL(initialAttributes, consumer) {
    HTMLTag.call(this, 'ul', consumer, initialAttributes, null, false, false);
    this.consumer_hykqwp$_0 = consumer;
  }
  Object.defineProperty(UL.prototype, 'consumer', {
    get: function () {
      return this.consumer_hykqwp$_0;
    }
  });
  UL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UL',
    interfaces: [HtmlBlockTag, HTMLTag]
  };
  var li_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.li_yzv5uh$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LI_init = _.kotlinx.html.LI;
    var Throwable = Error;
    function li$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = li$lambda;
      var $receiver_0 = new LI_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function VAR(initialAttributes, consumer) {
    HTMLTag.call(this, 'var', consumer, initialAttributes, null, true, false);
    this.consumer_f6dytt$_0 = consumer;
  }
  Object.defineProperty(VAR.prototype, 'consumer', {
    get: function () {
      return this.consumer_f6dytt$_0;
    }
  });
  VAR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VAR',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };
  function get_asFlowContent_59($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_52($receiver) {
    return $receiver;
  }
  function VIDEO(initialAttributes, consumer) {
    HTMLTag.call(this, 'video', consumer, initialAttributes, null, false, false);
    this.consumer_mixp7$_0 = consumer;
  }
  Object.defineProperty(VIDEO.prototype, 'consumer', {
    get: function () {
      return this.consumer_mixp7$_0;
    }
  });
  Object.defineProperty(VIDEO.prototype, 'src', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'autoBuffer', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'autobuffer');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autobuffer', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'autoPlay', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'autoplay');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autoplay', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'loop', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'loop');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'loop', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'controls', {
    configurable: true,
    get: function () {
      return attributeBooleanTicker.get_txhc1s$(this, 'controls');
    },
    set: function (newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'controls', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'width', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'height', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'poster', {
    configurable: true,
    get: function () {
      return attributeStringString.get_txhc1s$(this, 'poster');
    },
    set: function (newValue) {
      attributeStringString.set_fid0sb$(this, 'poster', newValue);
    }
  });
  VIDEO.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VIDEO',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };
  var source_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.source_bzm4az$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SOURCE_init = _.kotlinx.html.SOURCE;
    var Throwable = Error;
    function source$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = source$lambda;
      var $receiver_0 = new SOURCE_init(attributesMapOf('class', classes), $receiver.consumer);
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
    };
  }));
  function get_asFlowContent_60($receiver) {
    return $receiver;
  }
  function get_asInteractiveContent_13($receiver) {
    return $receiver;
  }
  function get_asPhrasingContent_53($receiver) {
    return $receiver;
  }
  function HTMLTag(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag) {
    if (namespace === void 0)
      namespace = null;
    this.tagName_m96u80$_0 = tagName;
    this.consumer_hf9n5l$_0 = consumer;
    this.namespace_mmy2s6$_0 = namespace;
    this.inlineTag_chds58$_0 = inlineTag;
    this.emptyTag_wi0qq$_0 = emptyTag;
    this.attributes_9nkhs8$_0 = new DelegatingMap(initialAttributes, this, HTMLTag$attributes$lambda(this));
  }
  Object.defineProperty(HTMLTag.prototype, 'tagName', {
    get: function () {
      return this.tagName_m96u80$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'consumer', {
    get: function () {
      return this.consumer_hf9n5l$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'namespace', {
    get: function () {
      return this.namespace_mmy2s6$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'inlineTag', {
    get: function () {
      return this.inlineTag_chds58$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'emptyTag', {
    get: function () {
      return this.emptyTag_wi0qq$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'attributes', {
    configurable: true,
    get: function () {
      return this.attributes_9nkhs8$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'attributesEntries', {
    configurable: true,
    get: function () {
      return this.attributes.immutableEntries;
    }
  });
  function HTMLTag$attributes$lambda(this$HTMLTag) {
    return function () {
      return this$HTMLTag.consumer;
    };
  }
  HTMLTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HTMLTag',
    interfaces: [Tag]
  };
  function TimedResult(result, time) {
    this.result = result;
    this.time = time;
  }
  TimedResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimedResult',
    interfaces: []
  };
  TimedResult.prototype.component1 = function () {
    return this.result;
  };
  TimedResult.prototype.component2 = function () {
    return this.time;
  };
  TimedResult.prototype.copy_19wkf8$ = function (result, time) {
    return new TimedResult(result === void 0 ? this.result : result, time === void 0 ? this.time : time);
  };
  TimedResult.prototype.toString = function () {
    return 'TimedResult(result=' + Kotlin.toString(this.result) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  TimedResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  TimedResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.time, other.time)))));
  };
  function get_out($receiver) {
    return $receiver.result;
  }
  function TimeMeasureConsumer(downstream) {
    this.downstream = downstream;
    this.start_0 = currentTimeMillis();
  }
  TimeMeasureConsumer.prototype.onTagStart_tkgjla$ = function (tag) {
    this.downstream.onTagStart_tkgjla$(tag);
  };
  TimeMeasureConsumer.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    this.downstream.onTagAttributeChange_5n2z71$(tag, attribute, value);
  };
  TimeMeasureConsumer.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    this.downstream.onTagEvent_j30qsv$(tag, event, value);
  };
  TimeMeasureConsumer.prototype.onTagEnd_tkgjla$ = function (tag) {
    this.downstream.onTagEnd_tkgjla$(tag);
  };
  TimeMeasureConsumer.prototype.onTagContent_6bul2c$ = function (content) {
    this.downstream.onTagContent_6bul2c$(content);
  };
  TimeMeasureConsumer.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  TimeMeasureConsumer.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  TimeMeasureConsumer.prototype.onTagError_cjwpn3$ = function (tag, exception) {
    this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  TimeMeasureConsumer.prototype.onTagComment_6bul2c$ = function (content) {
    this.downstream.onTagComment_6bul2c$(content);
  };
  TimeMeasureConsumer.prototype.finalize = function () {
    return new TimedResult(this.downstream.finalize(), currentTimeMillis().subtract(this.start_0));
  };
  TimeMeasureConsumer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeMeasureConsumer',
    interfaces: [TagConsumer]
  };
  function measureTime($receiver) {
    return new TimeMeasureConsumer($receiver);
  }
  function HTMLStreamBuilder(out, prettyPrint, xhtmlCompatible) {
    this.out = out;
    this.prettyPrint = prettyPrint;
    this.xhtmlCompatible = xhtmlCompatible;
    this.level_0 = 0;
    this.ln_0 = true;
    this.UnsafeImpl = new HTMLStreamBuilder$UnsafeImpl$ObjectLiteral(this);
  }
  HTMLStreamBuilder.prototype.onTagStart_tkgjla$ = function (tag) {
    if (this.prettyPrint && !tag.inlineTag) {
      this.indent_0();
    }
    this.level_0 = this.level_0 + 1 | 0;
    this.out.append_gw00v9$('<');
    this.out.append_gw00v9$(tag.tagName);
    if (tag.namespace != null) {
      this.out.append_gw00v9$(' xmlns="');
      this.out.append_gw00v9$(tag.namespace);
      this.out.append_gw00v9$('"');
    }
    if (!tag.attributes.isEmpty()) {
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = tag.attributesEntries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        if (!isValidXmlAttributeName(item.key)) {
          throw IllegalArgumentException_init('Tag ' + tag.tagName + ' has invalid attribute name ' + item.key);
        }
        this.out.append_s8itvh$(32);
        this.out.append_gw00v9$(item.key);
        this.out.append_gw00v9$('="');
        escapeAppend(this.out, item.value);
        this.out.append_s8itvh$(34);
      }
    }
    if (this.xhtmlCompatible && tag.emptyTag) {
      this.out.append_gw00v9$('/');
    }
    this.out.append_gw00v9$('>');
    this.ln_0 = false;
  };
  HTMLStreamBuilder.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    throw UnsupportedOperationException_init("tag attribute can't be changed as it was already written to the stream. Use with DelayedConsumer to be able to modify attributes");
  };
  HTMLStreamBuilder.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    throw UnsupportedOperationException_init("you can't assign lambda event handler when building text");
  };
  HTMLStreamBuilder.prototype.onTagEnd_tkgjla$ = function (tag) {
    this.level_0 = this.level_0 - 1 | 0;
    if (this.ln_0) {
      this.indent_0();
    }
    if (!tag.emptyTag) {
      this.out.append_gw00v9$('<\/');
      this.out.append_gw00v9$(tag.tagName);
      this.out.append_gw00v9$('>');
    }
    if (this.prettyPrint && !tag.inlineTag) {
      this.appendln_0();
    }
  };
  HTMLStreamBuilder.prototype.onTagContent_6bul2c$ = function (content) {
    escapeAppend(this.out, content);
    this.ln_0 = false;
  };
  HTMLStreamBuilder.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.out.append_gw00v9$(entity.text);
    this.ln_0 = false;
  };
  HTMLStreamBuilder.prototype.finalize = function () {
    return this.out;
  };
  HTMLStreamBuilder.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    block(this.UnsafeImpl);
  };
  HTMLStreamBuilder.prototype.onTagComment_6bul2c$ = function (content) {
    if (this.prettyPrint) {
      this.indent_0();
    }
    this.out.append_gw00v9$('<!--');
    escapeComment(this.out, content);
    this.out.append_gw00v9$('-->');
    this.ln_0 = false;
  };
  HTMLStreamBuilder.prototype.appendln_0 = function () {
    if (this.prettyPrint && !this.ln_0) {
      this.out.append_gw00v9$('\n');
      this.ln_0 = true;
    }
  };
  HTMLStreamBuilder.prototype.indent_0 = function () {
    if (this.prettyPrint) {
      if (!this.ln_0) {
        this.out.append_gw00v9$('\n');
      }
      var remaining = this.level_0;
      while (remaining >= 4) {
        this.out.append_gw00v9$('        ');
        remaining = remaining - 4 | 0;
      }
      while (remaining >= 2) {
        this.out.append_gw00v9$('    ');
        remaining = remaining - 2 | 0;
      }
      if (remaining > 0) {
        this.out.append_gw00v9$('  ');
      }
      this.ln_0 = false;
    }
  };
  function HTMLStreamBuilder$UnsafeImpl$ObjectLiteral(this$HTMLStreamBuilder) {
    this.this$HTMLStreamBuilder = this$HTMLStreamBuilder;
  }
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.this$HTMLStreamBuilder.out.append_gw00v9$($receiver);
  };
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Unsafe]
  };
  HTMLStreamBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HTMLStreamBuilder',
    interfaces: [TagConsumer]
  };
  var AVERAGE_PAGE_SIZE;
  function createHTML$lambda(sb, f) {
    return sb.toString();
  }
  function createHTML(prettyPrint, xhtmlCompatible) {
    if (prettyPrint === void 0)
      prettyPrint = true;
    if (xhtmlCompatible === void 0)
      xhtmlCompatible = false;
    return delayed(onFinalizeMap(new HTMLStreamBuilder(StringBuilder_init_0(AVERAGE_PAGE_SIZE), prettyPrint, xhtmlCompatible), createHTML$lambda));
  }
  function appendHTML($receiver, prettyPrint, xhtmlCompatible) {
    if (prettyPrint === void 0)
      prettyPrint = true;
    if (xhtmlCompatible === void 0)
      xhtmlCompatible = false;
    return delayed(new HTMLStreamBuilder($receiver, prettyPrint, xhtmlCompatible));
  }
  function appendHTML_0($receiver, prettyPrint) {
    if (prettyPrint === void 0)
      prettyPrint = true;
    return appendHTML($receiver, prettyPrint, false);
  }
  var escapeMap;
  var letterRangeLowerCase;
  var letterRangeUpperCase;
  var digitRange;
  function _isLetter($receiver) {
    return letterRangeLowerCase.contains_mef7kx$($receiver) || letterRangeUpperCase.contains_mef7kx$($receiver);
  }
  function _isDigit($receiver) {
    return digitRange.contains_mef7kx$($receiver);
  }
  function isValidXmlAttributeName($receiver) {
    var tmp$ = !startsWithXml($receiver);
    if (tmp$) {
      tmp$ = $receiver.length > 0;
    }
    var tmp$_0 = tmp$ && (_isLetter($receiver.charCodeAt(0)) || $receiver.charCodeAt(0) === 95);
    if (tmp$_0) {
      var all$result;
      all$break: do {
        var tmp$_1;
        tmp$_1 = iterator($receiver);
        while (tmp$_1.hasNext()) {
          var element = unboxChar(tmp$_1.next());
          var it = toBoxedChar(element);
          if (!(_isLetter(unboxChar(it)) || _isDigit(unboxChar(it)) || contains('._:-', unboxChar(it)))) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      tmp$_0 = all$result;
    }
    return tmp$_0;
  }
  function startsWithXml($receiver) {
    var tmp$ = $receiver.length >= 3;
    if (tmp$) {
      var it = toBoxedChar($receiver.charCodeAt(0));
      tmp$ = unboxChar(it) === 120 || unboxChar(it) === 88;
    }
    var tmp$_0 = tmp$;
    if (tmp$_0) {
      var it_0 = toBoxedChar($receiver.charCodeAt(1));
      tmp$_0 = unboxChar(it_0) === 109 || unboxChar(it_0) === 77;
    }
    var tmp$_1 = tmp$_0;
    if (tmp$_1) {
      var it_1 = toBoxedChar($receiver.charCodeAt(2));
      tmp$_1 = unboxChar(it_1) === 108 || unboxChar(it_1) === 76;
    }
    return tmp$_1;
  }
  function escapeAppend($receiver, s) {
    var tmp$;
    var lastIndex = 0;
    var mappings = escapeMap;
    var size = mappings.length;
    tmp$ = s.length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      var ch = s.charCodeAt(idx) | 0;
      if (ch < 0 || ch >= size)
        continue;
      var escape = mappings[ch];
      if (escape != null) {
        var startIndex = lastIndex;
        $receiver.append_gw00v9$(Kotlin.subSequence(s, startIndex, idx).toString());
        $receiver.append_gw00v9$(escape);
        lastIndex = idx + 1 | 0;
      }
    }
    if (lastIndex < s.length) {
      var startIndex_0 = lastIndex;
      var endIndex = s.length;
      $receiver.append_gw00v9$(Kotlin.subSequence(s, startIndex_0, endIndex).toString());
    }
  }
  function escapeComment($receiver, s) {
    var start = 0;
    while (start < s.length) {
      var index = indexOf(s, '--');
      if (index === -1) {
        if (start === 0) {
          $receiver.append_gw00v9$(s);
        } else {
          $receiver.append_ezbsdh$(s, start, s.length);
        }
        break;
      }
      $receiver.append_ezbsdh$(s, start, index);
      start = start + 2 | 0;
    }
  }
  function TraceConsumer(downstream, println) {
    this.downstream = downstream;
    this.println = println;
    this.id_0 = 'ID-' + currentTimeMillis().modulo(Kotlin.Long.fromInt(16384)).toString();
    this.path_0 = ArrayList_init_0(1024);
  }
  TraceConsumer.prototype.onTagStart_tkgjla$ = function (tag) {
    this.downstream.onTagStart_tkgjla$(tag);
    this.path_0.add_11rb$(tag.tagName);
    this.println('[' + this.id_0 + ']  open ' + tag.tagName + ' path: ' + joinToString(this.path_0, ' > '));
  };
  TraceConsumer.prototype.onTagEnd_tkgjla$ = function (tag) {
    this.downstream.onTagEnd_tkgjla$(tag);
    this.path_0.removeAt_za3lpa$(get_lastIndex(this.path_0));
    this.println('[' + this.id_0 + '] close ' + tag.tagName + ' path: ' + joinToString(this.path_0, ' > '));
  };
  TraceConsumer.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    this.downstream.onTagAttributeChange_5n2z71$(tag, attribute, value);
    this.println('[' + this.id_0 + ']     ' + tag.tagName + '.' + attribute + ' changed to ' + toString(value));
  };
  TraceConsumer.prototype.onTagError_cjwpn3$ = function (tag, exception) {
    this.println('[' + this.id_0 + '] exception in ' + tag.tagName + ': ' + toString(exception.message));
    this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  TraceConsumer.prototype.finalize = function () {
    var v = this.downstream.finalize();
    this.println('[' + this.id_0 + '] finalized: ' + toString(v));
    return v;
  };
  TraceConsumer.prototype.onTagComment_6bul2c$ = function (content) {
    return this.downstream.onTagComment_6bul2c$(content);
  };
  TraceConsumer.prototype.onTagContent_6bul2c$ = function (content) {
    return this.downstream.onTagContent_6bul2c$(content);
  };
  TraceConsumer.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    return this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  TraceConsumer.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    return this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  TraceConsumer.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    return this.downstream.onTagEvent_j30qsv$(tag, event, value);
  };
  TraceConsumer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraceConsumer',
    interfaces: [TagConsumer]
  };
  function trace($receiver, println) {
    return new TraceConsumer($receiver, println);
  }
  function styleLink$lambda(closure$url) {
    return function ($receiver) {
      $receiver.rel = LinkRel_getInstance().stylesheet;
      $receiver.type = LinkType_getInstance().textCss;
      $receiver.href = closure$url;
      return Unit;
    };
  }
  function styleLink($receiver, url) {
    var $receiver_0 = new LINK(attributesMapOf_1(['href', null, 'rel', null, 'type', null]), $receiver.consumer);
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      styleLink$lambda(url)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
  }
  function get_br($receiver) {
    var tag = new BR(emptyMap(), $receiver.consumer);
    $receiver.consumer.onTagStart_tkgjla$(tag);
    $receiver.consumer.onTagEnd_tkgjla$(tag);
  }
  var visitTag = defineInlineFunction('kotlinx-html-js.kotlinx.html.visitTag_xwv8ym$', wrapFunction(function () {
    var Throwable = Error;
    return function ($receiver, block) {
      $receiver.consumer.onTagStart_tkgjla$($receiver);
      try {
        block($receiver);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver.consumer.onTagError_cjwpn3$($receiver, err);
        } else
          throw err;
      }
      finally {
        $receiver.consumer.onTagEnd_tkgjla$($receiver);
      }
    };
  }));
  var visitTagAndFinalize = defineInlineFunction('kotlinx-html-js.kotlinx.html.visitTagAndFinalize_g9qte5$', wrapFunction(function () {
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    return function ($receiver, consumer, block) {
      if ($receiver.consumer !== consumer) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver.consumer.onTagStart_tkgjla$($receiver);
      try {
        block($receiver);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver.consumer.onTagError_cjwpn3$($receiver, err);
        } else
          throw err;
      }
      finally {
        $receiver.consumer.onTagEnd_tkgjla$($receiver);
      }
      return consumer.finalize();
    };
  }));
  var legEnd_3 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.legEnd_ax8bv3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.kotlinx.html.LEGEND;
    var HTMLLegendElement_0 = HTMLLegendElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function legEnd$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = legEnd$lambda;
      var tmp$;
      var $receiver_0 = new LEGEND_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLLegendElement_0) ? tmp$ : throwCCE();
    };
  }));
  var object__1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.object__mcv3un$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OBJECT_init = _.kotlinx.html.OBJECT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function object_$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = object_$lambda;
      var $receiver_0 = new OBJECT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var var__1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.var__h1qstf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var VAR_init = _.kotlinx.html.VAR;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function var_$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = var_$lambda;
      var $receiver_0 = new VAR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function setEvent($receiver, name, callback) {
    $receiver[name] = callback;
  }
  function JSDOMBuilder(document) {
    this.document = document;
    this.path_0 = ArrayList_init();
    this.lastLeaved_0 = null;
  }
  JSDOMBuilder.prototype.onTagStart_tkgjla$ = function (tag) {
    var tmp$, tmp$_0;
    if (tag.namespace != null)
      tmp$_0 = this.document.createElementNS(ensureNotNull(tag.namespace), tag.tagName);
    else
      tmp$_0 = Kotlin.isType(tmp$ = this.document.createElement(tag.tagName), HTMLElement) ? tmp$ : throwCCE();
    var element = tmp$_0;
    var tmp$_1;
    tmp$_1 = tag.attributesEntries.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      element.setAttribute(element_0.key, element_0.value);
    }
    if (!this.path_0.isEmpty()) {
      last(this.path_0).appendChild(element);
    }
    this.path_0.add_11rb$(element);
  };
  JSDOMBuilder.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    if (this.path_0.isEmpty())
      throw IllegalStateException_init('No current tag');
    else {
      if (!equals(last(this.path_0).tagName.toLowerCase(), tag.tagName.toLowerCase()))
        throw IllegalStateException_init('Wrong current tag');
      else {
        var node = last(this.path_0);
        if (value == null) {
          node.removeAttribute(attribute);
        } else {
          node.setAttribute(attribute, value);
        }
      }
    }
  };
  JSDOMBuilder.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    if (this.path_0.isEmpty())
      throw IllegalStateException_init('No current tag');
    else {
      if (!equals(last(this.path_0).tagName.toLowerCase(), tag.tagName.toLowerCase()))
        throw IllegalStateException_init('Wrong current tag');
      else {
        last(this.path_0)[event] = value;
      }
    }
  };
  JSDOMBuilder.prototype.onTagEnd_tkgjla$ = function (tag) {
    var tmp$ = this.path_0.isEmpty();
    if (!tmp$) {
      tmp$ = !equals(last(this.path_0).tagName.toLowerCase(), tag.tagName.toLowerCase());
    }
    if (tmp$) {
      throw IllegalStateException_init("We haven't entered tag " + tag.tagName + ' but trying to leave');
    }
    this.lastLeaved_0 = this.path_0.removeAt_za3lpa$(get_lastIndex(this.path_0));
  };
  JSDOMBuilder.prototype.onTagContent_6bul2c$ = function (content) {
    if (this.path_0.isEmpty()) {
      throw IllegalStateException_init('No current DOM node');
    }
    last(this.path_0).appendChild(this.document.createTextNode(content.toString()));
  };
  JSDOMBuilder.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    var tmp$;
    if (this.path_0.isEmpty()) {
      throw IllegalStateException_init('No current DOM node');
    }
    var s = Kotlin.isType(tmp$ = this.document.createElement('span'), HTMLElement) ? tmp$ : throwCCE();
    s.innerHTML = entity.text;
    var tmp$_0 = last(this.path_0);
    var $receiver = asList(s.childNodes);
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (element.nodeType === Node.TEXT_NODE)
        destination.add_11rb$(element);
    }
    tmp$_0.appendChild(first(destination));
  };
  JSDOMBuilder.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var $receiver = new DefaultUnsafe();
    block($receiver);
    last(this.path_0).innerHTML = last(this.path_0).innerHTML + $receiver.toString();
  };
  JSDOMBuilder.prototype.onTagComment_6bul2c$ = function (content) {
    if (this.path_0.isEmpty()) {
      throw IllegalStateException_init('No current DOM node');
    }
    last(this.path_0).appendChild(this.document.createComment(content.toString()));
  };
  JSDOMBuilder.prototype.finalize = function () {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = this.lastLeaved_0) != null ? this.asR_0(tmp$) : null;
    if (tmp$_0 == null) {
      throw IllegalStateException_init("We can't finalize as there was no tags");
    }
    return tmp$_0;
  };
  JSDOMBuilder.prototype.asR_0 = function ($receiver) {
    return $receiver;
  };
  JSDOMBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JSDOMBuilder',
    interfaces: [TagConsumer]
  };
  function createTree($receiver) {
    return new JSDOMBuilder($receiver);
  }
  function get_create($receiver) {
    return new JSDOMBuilder($receiver);
  }
  function append$lambda$lambda(closure$result, this$append) {
    return function (it, partial) {
      if (!partial) {
        closure$result.add_11rb$(it);
        this$append.appendChild(it);
      }
      return Unit;
    };
  }
  function append($receiver, block) {
    var result = ArrayList_init();
    block(onFinalize(createTree(get_ownerDocumentExt($receiver)), append$lambda$lambda(result, $receiver)));
    return result;
  }
  function prepend$lambda$lambda(closure$result, this$prepend) {
    return function (it, partial) {
      if (!partial) {
        closure$result.add_11rb$(it);
        this$prepend.insertBefore(it, this$prepend.firstChild);
      }
      return Unit;
    };
  }
  function prepend($receiver, block) {
    var result = ArrayList_init();
    block(onFinalize(createTree(get_ownerDocumentExt($receiver)), prepend$lambda$lambda(result, $receiver)));
    return result;
  }
  function get_append$lambda(this$append) {
    return function (element, partial) {
      if (!partial) {
        this$append.appendChild(element);
      }
      return Unit;
    };
  }
  function get_append($receiver) {
    return onFinalize(createTree(get_ownerDocumentExt($receiver)), get_append$lambda($receiver));
  }
  function get_prepend$lambda(this$prepend) {
    return function (element, partial) {
      if (!partial) {
        this$prepend.insertBefore(element, this$prepend.firstChild);
      }
      return Unit;
    };
  }
  function get_prepend($receiver) {
    return onFinalize(createTree(get_ownerDocumentExt($receiver)), get_prepend$lambda($receiver));
  }
  function get_ownerDocumentExt($receiver) {
    var tmp$;
    if (Kotlin.isType($receiver, Document))
      return $receiver;
    else {
      tmp$ = $receiver.ownerDocument;
      if (tmp$ == null) {
        throw IllegalStateException_init('Node has no ownerDocument');
      }
      return tmp$;
    }
  }
  var a_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.a_5i6vd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.kotlinx.html.A;
    var HTMLAnchorElement_0 = HTMLAnchorElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function a$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, href, target, classes, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = a$lambda;
      var tmp$;
      var $receiver_0 = new A_init(attributesMapOf(['href', href, 'target', target, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLAnchorElement_0) ? tmp$ : throwCCE();
    };
  }));
  var abbr_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.abbr_y8m8ul$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ABBR_init = _.kotlinx.html.ABBR;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function abbr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = abbr$lambda;
      var $receiver_0 = new ABBR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var address_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.address_ywnrmy$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ADDRESS_init = _.kotlinx.html.ADDRESS;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function address$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = address$lambda;
      var $receiver_0 = new ADDRESS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var area_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.area_78z5jz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.kotlinx.html.AREA;
    var HTMLAreaElement_0 = HTMLAreaElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function area$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, shape, alt, classes, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = area$lambda;
      var tmp$;
      var $receiver_0 = new AREA_init(attributesMapOf(['Shape', shape != null ? enumEncode(shape) : null, 'alt', alt, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLAreaElement_0) ? tmp$ : throwCCE();
    };
  }));
  var article_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.article_rpidd8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ARTICLE_init = _.kotlinx.html.ARTICLE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function article$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = article$lambda;
      var $receiver_0 = new ARTICLE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var aside_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.aside_k4rhbi$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var ASIDE_init = _.kotlinx.html.ASIDE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function aside$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = aside$lambda;
      var $receiver_0 = new ASIDE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var audio_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.audio_bbjfyk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var AUDIO_init = _.kotlinx.html.AUDIO;
    var HTMLAudioElement_0 = HTMLAudioElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function audio$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = audio$lambda;
      var tmp$;
      var $receiver_0 = new AUDIO_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLAudioElement_0) ? tmp$ : throwCCE();
    };
  }));
  var b_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.b_x0nqqg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var B_init = _.kotlinx.html.B;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function b$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = b$lambda;
      var $receiver_0 = new B_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var base_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.base_rhdnbn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BASE_init = _.kotlinx.html.BASE;
    var HTMLBaseElement_0 = HTMLBaseElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function base$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = base$lambda;
      var tmp$;
      var $receiver_0 = new BASE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLBaseElement_0) ? tmp$ : throwCCE();
    };
  }));
  var bdi_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.bdi_430vtv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BDI_init = _.kotlinx.html.BDI;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function bdi$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = bdi$lambda;
      var $receiver_0 = new BDI_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var bdo_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.bdo_3g3eqr$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BDO_init = _.kotlinx.html.BDO;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function bdo$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = bdo$lambda;
      var $receiver_0 = new BDO_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var blockQuote_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.blockQuote_rw5zzj$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BLOCKQUOTE_init = _.kotlinx.html.BLOCKQUOTE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function blockQuote$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = blockQuote$lambda;
      var $receiver_0 = new BLOCKQUOTE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var body_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.body_sbi9b0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BODY_init = _.kotlinx.html.BODY;
    var HTMLBodyElement_0 = HTMLBodyElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function body$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = body$lambda;
      var tmp$;
      var $receiver_0 = new BODY_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLBodyElement_0) ? tmp$ : throwCCE();
    };
  }));
  var br_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.br_jn093m$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var BR_init = _.kotlinx.html.BR;
    var HTMLBRElement_0 = HTMLBRElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function br$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = br$lambda;
      var tmp$;
      var $receiver_0 = new BR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLBRElement_0) ? tmp$ : throwCCE();
    };
  }));
  var button_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.button_yqfwmz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.kotlinx.html.BUTTON;
    var HTMLButtonElement_0 = HTMLButtonElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function button$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, formEncType, formMethod, name, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = button$lambda;
      var tmp$;
      var $receiver_0 = new BUTTON_init(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLButtonElement_0) ? tmp$ : throwCCE();
    };
  }));
  function canvas$lambda_1(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function canvas_3($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var tmp$;
    var $receiver_0 = new CANVAS(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      canvas$lambda_1(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLCanvasElement) ? tmp$ : throwCCE();
  }
  var canvas_4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.canvas_o2d15m$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.kotlinx.html.CANVAS;
    var HTMLCanvasElement_0 = HTMLCanvasElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function canvas$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = canvas$lambda;
      var tmp$;
      var $receiver_0 = new CANVAS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLCanvasElement_0) ? tmp$ : throwCCE();
    };
  }));
  var caption_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.caption_2b4nbw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CAPTION_init = _.kotlinx.html.CAPTION;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function caption$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = caption$lambda;
      var $receiver_0 = new CAPTION_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var cite_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.cite_vhqron$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CITE_init = _.kotlinx.html.CITE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function cite$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = cite$lambda;
      var $receiver_0 = new CITE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var code_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.code_osm44v$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var CODE_init = _.kotlinx.html.CODE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function code$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = code$lambda;
      var $receiver_0 = new CODE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var col_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.col_7tq9i$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var COL_init = _.kotlinx.html.COL;
    var HTMLTableColElement_0 = HTMLTableColElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function col$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = col$lambda;
      var tmp$;
      var $receiver_0 = new COL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTableColElement_0) ? tmp$ : throwCCE();
    };
  }));
  var colGroup_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.colGroup_8s3ugv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var COLGROUP_init = _.kotlinx.html.COLGROUP;
    var HTMLTableColElement_0 = HTMLTableColElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function colGroup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = colGroup$lambda;
      var tmp$;
      var $receiver_0 = new COLGROUP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTableColElement_0) ? tmp$ : throwCCE();
    };
  }));
  var command_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.command_8fvebf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var COMMAND_init = _.kotlinx.html.COMMAND;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function command$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, classes, block) {
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = command$lambda;
      var $receiver_0 = new COMMAND_init(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var dataList_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.dataList_jju9ai$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DATALIST_init = _.kotlinx.html.DATALIST;
    var HTMLDataListElement_0 = HTMLDataListElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dataList$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dataList$lambda;
      var tmp$;
      var $receiver_0 = new DATALIST_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLDataListElement_0) ? tmp$ : throwCCE();
    };
  }));
  var dd_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.dd_8uujpe$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DD_init = _.kotlinx.html.DD;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dd$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dd$lambda;
      var $receiver_0 = new DD_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var del_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.del_z132bj$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DEL_init = _.kotlinx.html.DEL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function del$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = del$lambda;
      var $receiver_0 = new DEL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var details_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.details_v1c0ag$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DETAILS_init = _.kotlinx.html.DETAILS;
    var HTMLDetailsElement_0 = HTMLDetailsElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function details$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = details$lambda;
      var tmp$;
      var $receiver_0 = new DETAILS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLDetailsElement_0) ? tmp$ : throwCCE();
    };
  }));
  var dfn_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.dfn_6e2jtu$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DFN_init = _.kotlinx.html.DFN;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dfn$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dfn$lambda;
      var $receiver_0 = new DFN_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var dialog_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.dialog_o1mqye$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DIALOG_init = _.kotlinx.html.DIALOG;
    var HTMLDialogElement_0 = HTMLDialogElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dialog$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dialog$lambda;
      var tmp$;
      var $receiver_0 = new DIALOG_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLDialogElement_0) ? tmp$ : throwCCE();
    };
  }));
  var div_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.div_wkomt5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DIV_init = _.kotlinx.html.DIV;
    var HTMLDivElement_0 = HTMLDivElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function div$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = div$lambda;
      var tmp$;
      var $receiver_0 = new DIV_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLDivElement_0) ? tmp$ : throwCCE();
    };
  }));
  var dl_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.dl_4s12uu$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DL_init = _.kotlinx.html.DL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dl$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dl$lambda;
      var $receiver_0 = new DL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var dt_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.dt_iewpf2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var DT_init = _.kotlinx.html.DT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function dt$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = dt$lambda;
      var $receiver_0 = new DT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var em_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.em_bpkgve$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var EM_init = _.kotlinx.html.EM;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function em$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = em$lambda;
      var $receiver_0 = new EM_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var embed_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.embed_f82m33$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var EMBED_init = _.kotlinx.html.EMBED;
    var HTMLEmbedElement_0 = HTMLEmbedElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function embed$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = embed$lambda;
      var tmp$;
      var $receiver_0 = new EMBED_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLEmbedElement_0) ? tmp$ : throwCCE();
    };
  }));
  var fieldSet_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.fieldSet_ocqxli$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIELDSET_init = _.kotlinx.html.FIELDSET;
    var HTMLFieldSetElement_0 = HTMLFieldSetElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function fieldSet$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = fieldSet$lambda;
      var tmp$;
      var $receiver_0 = new FIELDSET_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLFieldSetElement_0) ? tmp$ : throwCCE();
    };
  }));
  var figcaption_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.figcaption_k8kml8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIGCAPTION_init = _.kotlinx.html.FIGCAPTION;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function figcaption$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = figcaption$lambda;
      var $receiver_0 = new FIGCAPTION_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var figure_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.figure_a9op5m$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FIGURE_init = _.kotlinx.html.FIGURE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function figure$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = figure$lambda;
      var $receiver_0 = new FIGURE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var footer_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.footer_rkqwo3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var FOOTER_init = _.kotlinx.html.FOOTER;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function footer$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = footer$lambda;
      var $receiver_0 = new FOOTER_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var form_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.form_cxki7s$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.kotlinx.html.FORM;
    var HTMLFormElement_0 = HTMLFormElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function form$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, action, encType, method, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = form$lambda;
      var tmp$;
      var $receiver_0 = new FORM_init(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', method != null ? enumEncode(method) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLFormElement_0) ? tmp$ : throwCCE();
    };
  }));
  var h1_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.h1_1esf85$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H1_init = _.kotlinx.html.H1;
    var HTMLHeadingElement_0 = HTMLHeadingElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h1$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h1$lambda;
      var tmp$;
      var $receiver_0 = new H1_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHeadingElement_0) ? tmp$ : throwCCE();
    };
  }));
  var h2_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.h2_nirn70$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H2_init = _.kotlinx.html.H2;
    var HTMLHeadingElement_0 = HTMLHeadingElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h2$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h2$lambda;
      var tmp$;
      var $receiver_0 = new H2_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHeadingElement_0) ? tmp$ : throwCCE();
    };
  }));
  var h3_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.h3_mksccz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H3_init = _.kotlinx.html.H3;
    var HTMLHeadingElement_0 = HTMLHeadingElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h3$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h3$lambda;
      var tmp$;
      var $receiver_0 = new H3_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHeadingElement_0) ? tmp$ : throwCCE();
    };
  }));
  var h4_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.h4_2crq26$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H4_init = _.kotlinx.html.H4;
    var HTMLHeadingElement_0 = HTMLHeadingElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h4$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h4$lambda;
      var tmp$;
      var $receiver_0 = new H4_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHeadingElement_0) ? tmp$ : throwCCE();
    };
  }));
  var h5_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.h5_rabshb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H5_init = _.kotlinx.html.H5;
    var HTMLHeadingElement_0 = HTMLHeadingElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h5$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h5$lambda;
      var tmp$;
      var $receiver_0 = new H5_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHeadingElement_0) ? tmp$ : throwCCE();
    };
  }));
  var h6_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.h6_it872o$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var H6_init = _.kotlinx.html.H6;
    var HTMLHeadingElement_0 = HTMLHeadingElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function h6$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = h6$lambda;
      var tmp$;
      var $receiver_0 = new H6_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHeadingElement_0) ? tmp$ : throwCCE();
    };
  }));
  function head$lambda_1(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function head_3($receiver, content) {
    if (content === void 0)
      content = '';
    var tmp$;
    var $receiver_0 = new HEAD(emptyMap_0, $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      head$lambda_1(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHeadElement) ? tmp$ : throwCCE();
  }
  var head_4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.head_z94brr$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var HEAD_init = _.kotlinx.html.HEAD;
    var HTMLHeadElement_0 = HTMLHeadElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function head$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, block) {
      if (block === void 0)
        block = head$lambda;
      var tmp$;
      var $receiver_0 = new HEAD_init(html.emptyMap, $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHeadElement_0) ? tmp$ : throwCCE();
    };
  }));
  var header_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.header_sok7e9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var HEADER_init = _.kotlinx.html.HEADER;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function header$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = header$lambda;
      var $receiver_0 = new HEADER_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var hGroup_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.hGroup_8f4qzd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var HGROUP_init = _.kotlinx.html.HGROUP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function hGroup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = hGroup$lambda;
      var $receiver_0 = new HGROUP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var hr_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.hr_v0qv1w$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var HR_init = _.kotlinx.html.HR;
    var HTMLHRElement_0 = HTMLHRElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function hr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = hr$lambda;
      var tmp$;
      var $receiver_0 = new HR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHRElement_0) ? tmp$ : throwCCE();
    };
  }));
  function html$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function html_1($receiver, content, namespace) {
    if (content === void 0)
      content = '';
    if (namespace === void 0)
      namespace = null;
    var tmp$;
    var $receiver_0 = new HTML(emptyMap_0, $receiver, namespace);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      html$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHtmlElement) ? tmp$ : throwCCE();
  }
  var html_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.html_aq4td9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var HTML_init = _.kotlinx.html.HTML;
    var HTMLHtmlElement_0 = HTMLHtmlElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function html$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, namespace, block) {
      if (namespace === void 0)
        namespace = null;
      if (block === void 0)
        block = html$lambda;
      var tmp$;
      var $receiver_0 = new HTML_init(html.emptyMap, $receiver, namespace);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLHtmlElement_0) ? tmp$ : throwCCE();
    };
  }));
  var i_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.i_5jry8x$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var I_init = _.kotlinx.html.I;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function i$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = i$lambda;
      var $receiver_0 = new I_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function iframe$lambda_1(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function iframe_3($receiver, sandbox, classes, content) {
    if (sandbox === void 0)
      sandbox = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new IFRAME(attributesMapOf_1(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      iframe$lambda_1(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var iframe_4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.iframe_g0q2yy$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.kotlinx.html.IFRAME;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function iframe$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, sandbox, classes, block) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = iframe$lambda;
      var $receiver_0 = new IFRAME_init(attributesMapOf(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var img_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.img_6lw7hj$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.kotlinx.html.IMG;
    var HTMLImageElement_0 = HTMLImageElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function img$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, alt, src, classes, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = img$lambda;
      var tmp$;
      var $receiver_0 = new IMG_init(attributesMapOf(['alt', alt, 'src', src, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLImageElement_0) ? tmp$ : throwCCE();
    };
  }));
  var input_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.input_x8a5sv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.kotlinx.html.INPUT;
    var HTMLInputElement_0 = HTMLInputElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function input$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, formEncType, formMethod, name, classes, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = input$lambda;
      var tmp$;
      var $receiver_0 = new INPUT_init(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLInputElement_0) ? tmp$ : throwCCE();
    };
  }));
  var ins_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.ins_xcl8o4$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var INS_init = _.kotlinx.html.INS;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function ins$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ins$lambda;
      var $receiver_0 = new INS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var kbd_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.kbd_ijivhf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var KBD_init = _.kotlinx.html.KBD;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function kbd$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = kbd$lambda;
      var $receiver_0 = new KBD_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var keyGen_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.keyGen_qu3nek$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var KEYGEN_init = _.kotlinx.html.KEYGEN;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function keyGen$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, keyType, classes, block) {
      if (keyType === void 0)
        keyType = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = keyGen$lambda;
      var $receiver_0 = new KEYGEN_init(attributesMapOf(['keytype', keyType != null ? enumEncode(keyType) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var label_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.label_uo7uay$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LABEL_init = _.kotlinx.html.LABEL;
    var HTMLLabelElement_0 = HTMLLabelElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function label$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = label$lambda;
      var tmp$;
      var $receiver_0 = new LABEL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLLabelElement_0) ? tmp$ : throwCCE();
    };
  }));
  var legend_3 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.legend_ax8bv3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.kotlinx.html.LEGEND;
    var HTMLLegendElement_0 = HTMLLegendElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function legend$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = legend$lambda;
      var tmp$;
      var $receiver_0 = new LEGEND_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLLegendElement_0) ? tmp$ : throwCCE();
    };
  }));
  var li_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.li_525bpd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var LI_init = _.kotlinx.html.LI;
    var HTMLLIElement_0 = HTMLLIElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function li$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = li$lambda;
      var tmp$;
      var $receiver_0 = new LI_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLLIElement_0) ? tmp$ : throwCCE();
    };
  }));
  var link_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.link_iq3rqc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.kotlinx.html.LINK;
    var HTMLLinkElement_0 = HTMLLinkElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function link$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, href, rel, type, block) {
      if (href === void 0)
        href = null;
      if (rel === void 0)
        rel = null;
      if (type === void 0)
        type = null;
      if (block === void 0)
        block = link$lambda;
      var tmp$;
      var $receiver_0 = new LINK_init(attributesMapOf(['href', href, 'rel', rel, 'type', type]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLLinkElement_0) ? tmp$ : throwCCE();
    };
  }));
  var main_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.main_cutem3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MAIN_init = _.kotlinx.html.MAIN;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function main$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = main$lambda;
      var $receiver_0 = new MAIN_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var map_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.map_ibzf9n$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var MAP_init = _.kotlinx.html.MAP;
    var HTMLMapElement_0 = HTMLMapElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function map$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, name, classes, block) {
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = map$lambda;
      var tmp$;
      var $receiver_0 = new MAP_init(attributesMapOf(['name', name, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLMapElement_0) ? tmp$ : throwCCE();
    };
  }));
  var mark_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.mark_44qn2n$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MARK_init = _.kotlinx.html.MARK;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function mark$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = mark$lambda;
      var $receiver_0 = new MARK_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var math_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.math_giqjli$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MATH_init = _.kotlinx.html.MATH;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function math$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = math$lambda;
      var $receiver_0 = new MATH_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function mathml$lambda_0(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function mathml_1($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new MATHML(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      mathml$lambda_0(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var mathml_2 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.mathml_lcwe6v$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var MATHML_init = _.kotlinx.html.MATHML;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function mathml$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = mathml$lambda;
      var $receiver_0 = new MATHML_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var meta_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.meta_1gpk13$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.kotlinx.html.META;
    var HTMLMetaElement_0 = HTMLMetaElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function meta$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, name, content, charset, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      if (charset === void 0)
        charset = null;
      if (block === void 0)
        block = meta$lambda;
      var tmp$;
      var $receiver_0 = new META_init(attributesMapOf(['name', name, 'content', content, 'charset', charset]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLMetaElement_0) ? tmp$ : throwCCE();
    };
  }));
  var meter_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.meter_5zj8jj$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var METER_init = _.kotlinx.html.METER;
    var HTMLMeterElement_0 = HTMLMeterElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function meter$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = meter$lambda;
      var tmp$;
      var $receiver_0 = new METER_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLMeterElement_0) ? tmp$ : throwCCE();
    };
  }));
  var nav_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.nav_pc7gpz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var NAV_init = _.kotlinx.html.NAV;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function nav$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = nav$lambda;
      var $receiver_0 = new NAV_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var noScript_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.noScript_87229e$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var NOSCRIPT_init = _.kotlinx.html.NOSCRIPT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function noScript$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = noScript$lambda;
      var $receiver_0 = new NOSCRIPT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var htmlObject_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.htmlObject_mcv3un$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OBJECT_init = _.kotlinx.html.OBJECT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function htmlObject$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = htmlObject$lambda;
      var $receiver_0 = new OBJECT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var ol_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.ol_qmgqht$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OL_init = _.kotlinx.html.OL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function ol$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ol$lambda;
      var $receiver_0 = new OL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var optGroup_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.optGroup_p3q3kl$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var OPTGROUP_init = _.kotlinx.html.OPTGROUP;
    var HTMLOptGroupElement_0 = HTMLOptGroupElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function optGroup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, label, classes, block) {
      if (label === void 0)
        label = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = optGroup$lambda;
      var tmp$;
      var $receiver_0 = new OPTGROUP_init(attributesMapOf(['label', label, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLOptGroupElement_0) ? tmp$ : throwCCE();
    };
  }));
  function option$lambda_3(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function option_7($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var tmp$;
    var $receiver_0 = new OPTION(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      option$lambda_3(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLOptionElement) ? tmp$ : throwCCE();
  }
  var option_8 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.option_o2wi2f$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.kotlinx.html.OPTION;
    var HTMLOptionElement_0 = HTMLOptionElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function option$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = option$lambda;
      var tmp$;
      var $receiver_0 = new OPTION_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLOptionElement_0) ? tmp$ : throwCCE();
    };
  }));
  var output_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.output_38nbp9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var OUTPUT_init = _.kotlinx.html.OUTPUT;
    var HTMLOutputElement_0 = HTMLOutputElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function output$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = output$lambda;
      var tmp$;
      var $receiver_0 = new OUTPUT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLOutputElement_0) ? tmp$ : throwCCE();
    };
  }));
  var p_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.p_qwwequ$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var P_init = _.kotlinx.html.P;
    var HTMLParagraphElement_0 = HTMLParagraphElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function p$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = p$lambda;
      var tmp$;
      var $receiver_0 = new P_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLParagraphElement_0) ? tmp$ : throwCCE();
    };
  }));
  var param_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.param_4880cc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.kotlinx.html.PARAM;
    var HTMLParamElement_0 = HTMLParamElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function param$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      if (block === void 0)
        block = param$lambda;
      var tmp$;
      var $receiver_0 = new PARAM_init(attributesMapOf(['name', name, 'value', value]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLParamElement_0) ? tmp$ : throwCCE();
    };
  }));
  var picture_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.picture_2e9cvn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var PICTURE_init = _.kotlinx.html.PICTURE;
    var HTMLPictureElement_0 = HTMLPictureElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function picture$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, block) {
      if (block === void 0)
        block = picture$lambda;
      var tmp$;
      var $receiver_0 = new PICTURE_init(html.emptyMap, $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLPictureElement_0) ? tmp$ : throwCCE();
    };
  }));
  var pre_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.pre_kad921$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var PRE_init = _.kotlinx.html.PRE;
    var HTMLPreElement_0 = HTMLPreElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function pre$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = pre$lambda;
      var tmp$;
      var $receiver_0 = new PRE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLPreElement_0) ? tmp$ : throwCCE();
    };
  }));
  var progress_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.progress_kmv2hd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var PROGRESS_init = _.kotlinx.html.PROGRESS;
    var HTMLProgressElement_0 = HTMLProgressElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function progress$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = progress$lambda;
      var tmp$;
      var $receiver_0 = new PROGRESS_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLProgressElement_0) ? tmp$ : throwCCE();
    };
  }));
  var q_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.q_j6nkt5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var Q_init = _.kotlinx.html.Q;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function q$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = q$lambda;
      var $receiver_0 = new Q_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var rp_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.rp_n982v4$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var RP_init = _.kotlinx.html.RP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function rp$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rp$lambda;
      var $receiver_0 = new RP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var rt_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.rt_5fw4uc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var RT_init = _.kotlinx.html.RT;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function rt$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = rt$lambda;
      var $receiver_0 = new RT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var ruby_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.ruby_12w3h8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var RUBY_init = _.kotlinx.html.RUBY;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function ruby$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ruby$lambda;
      var $receiver_0 = new RUBY_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var samp_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.samp_11f6yb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SAMP_init = _.kotlinx.html.SAMP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function samp$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = samp$lambda;
      var $receiver_0 = new SAMP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function script$lambda_1(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function script_3($receiver, type, src, content) {
    if (type === void 0)
      type = null;
    if (src === void 0)
      src = null;
    if (content === void 0)
      content = '';
    var tmp$;
    var $receiver_0 = new SCRIPT(attributesMapOf_1(['type', type, 'src', src]), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      script$lambda_1(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLScriptElement) ? tmp$ : throwCCE();
  }
  var script_4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.script_764uoc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.kotlinx.html.SCRIPT;
    var HTMLScriptElement_0 = HTMLScriptElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function script$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      if (block === void 0)
        block = script$lambda;
      var tmp$;
      var $receiver_0 = new SCRIPT_init(attributesMapOf(['type', type, 'src', src]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLScriptElement_0) ? tmp$ : throwCCE();
    };
  }));
  var section_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.section_ceckl$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SECTION_init = _.kotlinx.html.SECTION;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function section$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = section$lambda;
      var $receiver_0 = new SECTION_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var select_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.select_hs5l1a$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SELECT_init = _.kotlinx.html.SELECT;
    var HTMLSelectElement_0 = HTMLSelectElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function select$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = select$lambda;
      var tmp$;
      var $receiver_0 = new SELECT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLSelectElement_0) ? tmp$ : throwCCE();
    };
  }));
  var small_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.small_8pbyt9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SMALL_init = _.kotlinx.html.SMALL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function small$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = small$lambda;
      var $receiver_0 = new SMALL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var source_3 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.source_1ucc65$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SOURCE_init = _.kotlinx.html.SOURCE;
    var HTMLSourceElement_0 = HTMLSourceElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function source$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = source$lambda;
      var tmp$;
      var $receiver_0 = new SOURCE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLSourceElement_0) ? tmp$ : throwCCE();
    };
  }));
  var span_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.span_x24v7w$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SPAN_init = _.kotlinx.html.SPAN;
    var HTMLSpanElement_0 = HTMLSpanElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function span$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = span$lambda;
      var tmp$;
      var $receiver_0 = new SPAN_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLSpanElement_0) ? tmp$ : throwCCE();
    };
  }));
  var strong_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.strong_ddyujd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var STRONG_init = _.kotlinx.html.STRONG;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function strong$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = strong$lambda;
      var $receiver_0 = new STRONG_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function style$lambda_1(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function style_3($receiver, type, content) {
    if (type === void 0)
      type = null;
    if (content === void 0)
      content = '';
    var tmp$;
    var $receiver_0 = new STYLE(attributesMapOf_0('type', type), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      style$lambda_1(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLStyleElement) ? tmp$ : throwCCE();
  }
  var style_4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.style_s80t09$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.kotlinx.html.STYLE;
    var HTMLStyleElement_0 = HTMLStyleElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function style$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      if (block === void 0)
        block = style$lambda;
      var tmp$;
      var $receiver_0 = new STYLE_init(attributesMapOf('type', type), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLStyleElement_0) ? tmp$ : throwCCE();
    };
  }));
  var sub_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.sub_cp04y2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SUB_init = _.kotlinx.html.SUB;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function sub$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = sub$lambda;
      var $receiver_0 = new SUB_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var summary_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.summary_85cyqk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SUMMARY_init = _.kotlinx.html.SUMMARY;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function summary$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = summary$lambda;
      var $receiver_0 = new SUMMARY_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var sup_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.sup_isrgxo$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SUP_init = _.kotlinx.html.SUP;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function sup$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = sup$lambda;
      var $receiver_0 = new SUP_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  function svg$lambda_1(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function svg_3($receiver, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var $receiver_0 = new SVG(attributesMapOf_0('class', classes), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      svg$lambda_1(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return $receiver.finalize();
  }
  var svg_4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.svg_whpmhm$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.kotlinx.html.SVG;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function svg$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = svg$lambda;
      var $receiver_0 = new SVG_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var table_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.table_uk5qws$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TABLE_init = _.kotlinx.html.TABLE;
    var HTMLTableElement_0 = HTMLTableElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function table$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = table$lambda;
      var tmp$;
      var $receiver_0 = new TABLE_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTableElement_0) ? tmp$ : throwCCE();
    };
  }));
  var tbody_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.tbody_sr8158$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TBODY_init = _.kotlinx.html.TBODY;
    var HTMLTableSectionElement_0 = HTMLTableSectionElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function tbody$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tbody$lambda;
      var tmp$;
      var $receiver_0 = new TBODY_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTableSectionElement_0) ? tmp$ : throwCCE();
    };
  }));
  var td_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.td_ftqcky$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TD_init = _.kotlinx.html.TD;
    var HTMLTableCellElement_0 = HTMLTableCellElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function td$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = td$lambda;
      var tmp$;
      var $receiver_0 = new TD_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTableCellElement_0) ? tmp$ : throwCCE();
    };
  }));
  function textArea$lambda_1(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function textArea_3($receiver, rows, cols, wrap, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (wrap === void 0)
      wrap = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var tmp$;
    var $receiver_0 = new TEXTAREA(attributesMapOf_1(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      textArea$lambda_1(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTextAreaElement) ? tmp$ : throwCCE();
  }
  var textArea_4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.textArea_wr40b$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.kotlinx.html.TEXTAREA;
    var HTMLTextAreaElement_0 = HTMLTextAreaElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function textArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, rows, cols, wrap, classes, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = textArea$lambda;
      var tmp$;
      var $receiver_0 = new TEXTAREA_init(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTextAreaElement_0) ? tmp$ : throwCCE();
    };
  }));
  var tfoot_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.tfoot_tdtbiw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TFOOT_init = _.kotlinx.html.TFOOT;
    var HTMLTableSectionElement_0 = HTMLTableSectionElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function tfoot$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tfoot$lambda;
      var tmp$;
      var $receiver_0 = new TFOOT_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTableSectionElement_0) ? tmp$ : throwCCE();
    };
  }));
  var th_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.th_lypajb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var enumEncode = _.kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.kotlinx.html.TH;
    var HTMLTableCellElement_0 = HTMLTableCellElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function th$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, scope, classes, block) {
      if (scope === void 0)
        scope = null;
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = th$lambda;
      var tmp$;
      var $receiver_0 = new TH_init(attributesMapOf(['scope', scope != null ? enumEncode(scope) : null, 'class', classes]), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTableCellElement_0) ? tmp$ : throwCCE();
    };
  }));
  var thead_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.thead_awes1i$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var THEAD_init = _.kotlinx.html.THEAD;
    var HTMLTableSectionElement_0 = HTMLTableSectionElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function thead$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = thead$lambda;
      var tmp$;
      var $receiver_0 = new THEAD_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTableSectionElement_0) ? tmp$ : throwCCE();
    };
  }));
  var time_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.time_veotvz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TIME_init = _.kotlinx.html.TIME;
    var HTMLTimeElement_0 = HTMLTimeElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function time$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = time$lambda;
      var tmp$;
      var $receiver_0 = new TIME_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTimeElement_0) ? tmp$ : throwCCE();
    };
  }));
  function title$lambda_1(closure$content) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$content);
      return Unit;
    };
  }
  function title_3($receiver, content) {
    if (content === void 0)
      content = '';
    var tmp$;
    var $receiver_0 = new TITLE(emptyMap_0, $receiver);
    if ($receiver_0.consumer !== $receiver) {
      throw IllegalArgumentException_init('Wrong exception');
    }
    $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
    try {
      title$lambda_1(content)($receiver_0);
    } catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
      } else
        throw err;
    }
    finally {
      $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
    }
    return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTitleElement) ? tmp$ : throwCCE();
  }
  var title_4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.title_nrj9p5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var html = _.kotlinx.html;
    var TITLE_init = _.kotlinx.html.TITLE;
    var HTMLTitleElement_0 = HTMLTitleElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function title$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, block) {
      if (block === void 0)
        block = title$lambda;
      var tmp$;
      var $receiver_0 = new TITLE_init(html.emptyMap, $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTitleElement_0) ? tmp$ : throwCCE();
    };
  }));
  var tr_4 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.tr_9pz0lc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.kotlinx.html.TR;
    var HTMLTableRowElement_0 = HTMLTableRowElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function tr$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = tr$lambda;
      var tmp$;
      var $receiver_0 = new TR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLTableRowElement_0) ? tmp$ : throwCCE();
    };
  }));
  var ul_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.ul_693so7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var UL_init = _.kotlinx.html.UL;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function ul$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = ul$lambda;
      var $receiver_0 = new UL_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var htmlVar_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.htmlVar_h1qstf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var VAR_init = _.kotlinx.html.VAR;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function htmlVar$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = htmlVar$lambda;
      var $receiver_0 = new VAR_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return $receiver.finalize();
    };
  }));
  var video_1 = defineInlineFunction('kotlinx-html-js.kotlinx.html.js.video_kpr04x$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var attributesMapOf = _.kotlinx.html.attributesMapOf_jyasbz$;
    var VIDEO_init = _.kotlinx.html.VIDEO;
    var HTMLVideoElement_0 = HTMLVideoElement;
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Throwable = Error;
    function video$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      if (block === void 0)
        block = video$lambda;
      var tmp$;
      var $receiver_0 = new VIDEO_init(attributesMapOf('class', classes), $receiver);
      if ($receiver_0.consumer !== $receiver) {
        throw IllegalArgumentException_init('Wrong exception');
      }
      $receiver_0.consumer.onTagStart_tkgjla$($receiver_0);
      try {
        block($receiver_0);
      } catch (err) {
        if (Kotlin.isType(err, Throwable)) {
          $receiver_0.consumer.onTagError_cjwpn3$($receiver_0, err);
        } else
          throw err;
      }
      finally {
        $receiver_0.consumer.onTagEnd_tkgjla$($receiver_0);
      }
      return Kotlin.isType(tmp$ = $receiver.finalize(), HTMLVideoElement_0) ? tmp$ : throwCCE();
    };
  }));
  function get_onAbortFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onAbort");
  }
  function set_onAbortFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onabort', newValue);
  }
  function get_onBlurFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onBlur");
  }
  function set_onBlurFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onblur', newValue);
  }
  function get_onCanPlayFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onCanPlay");
  }
  function set_onCanPlayFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'oncanplay', newValue);
  }
  function get_onCanPlayThroughFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onCanPlayThrough");
  }
  function set_onCanPlayThroughFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'oncanplaythrough', newValue);
  }
  function get_onChangeFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onChange");
  }
  function set_onChangeFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onchange', newValue);
  }
  function get_onClickFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onClick");
  }
  function set_onClickFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onclick', newValue);
  }
  function get_onContextMenuFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onContextMenu");
  }
  function set_onContextMenuFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'oncontextmenu', newValue);
  }
  function get_onDoubleClickFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onDoubleClick");
  }
  function set_onDoubleClickFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ondblclick', newValue);
  }
  function get_onDragFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onDrag");
  }
  function set_onDragFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ondrag', newValue);
  }
  function get_onDragEndFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onDragEnd");
  }
  function set_onDragEndFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ondragend', newValue);
  }
  function get_onDragEnterFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onDragEnter");
  }
  function set_onDragEnterFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ondragenter', newValue);
  }
  function get_onDragLeaveFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onDragLeave");
  }
  function set_onDragLeaveFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ondragleave', newValue);
  }
  function get_onDragOverFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onDragOver");
  }
  function set_onDragOverFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ondragover', newValue);
  }
  function get_onDragStartFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onDragStart");
  }
  function set_onDragStartFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ondragstart', newValue);
  }
  function get_onDropFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onDrop");
  }
  function set_onDropFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ondrop', newValue);
  }
  function get_onDurationChangeFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onDurationChange");
  }
  function set_onDurationChangeFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ondurationchange', newValue);
  }
  function get_onEmptiedFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onEmptied");
  }
  function set_onEmptiedFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onemptied', newValue);
  }
  function get_onEndedFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onEnded");
  }
  function set_onEndedFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onended', newValue);
  }
  function get_onErrorFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onError");
  }
  function set_onErrorFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onerror', newValue);
  }
  function get_onFocusFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onFocus");
  }
  function set_onFocusFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onfocus', newValue);
  }
  function get_onFocusInFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onFocusIn");
  }
  function set_onFocusInFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onfocusin', newValue);
  }
  function get_onFocusOutFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onFocusOut");
  }
  function set_onFocusOutFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onfocusout', newValue);
  }
  function get_onFormChangeFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onFormChange");
  }
  function set_onFormChangeFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onformchange', newValue);
  }
  function get_onFormInputFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onFormInput");
  }
  function set_onFormInputFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onforminput', newValue);
  }
  function get_onInputFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onInput");
  }
  function set_onInputFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'oninput', newValue);
  }
  function get_onInvalidFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onInvalid");
  }
  function set_onInvalidFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'oninvalid', newValue);
  }
  function get_onKeyDownFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onKeyDown");
  }
  function set_onKeyDownFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onkeydown', newValue);
  }
  function get_onKeyPressFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onKeyPress");
  }
  function set_onKeyPressFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onkeypress', newValue);
  }
  function get_onKeyUpFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onKeyUp");
  }
  function set_onKeyUpFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onkeyup', newValue);
  }
  function get_onLoadFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onLoad");
  }
  function set_onLoadFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onload', newValue);
  }
  function get_onLoadedDataFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onLoadedData");
  }
  function set_onLoadedDataFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onloadeddata', newValue);
  }
  function get_onLoadedMetaDataFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onLoadedMetaData");
  }
  function set_onLoadedMetaDataFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onloadedmetadata', newValue);
  }
  function get_onLoadStartFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onLoadStart");
  }
  function set_onLoadStartFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onloadstart', newValue);
  }
  function get_onMouseDownFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onMouseDown");
  }
  function set_onMouseDownFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onmousedown', newValue);
  }
  function get_onMouseMoveFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onMouseMove");
  }
  function set_onMouseMoveFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onmousemove', newValue);
  }
  function get_onMouseOutFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onMouseOut");
  }
  function set_onMouseOutFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onmouseout', newValue);
  }
  function get_onMouseOverFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onMouseOver");
  }
  function set_onMouseOverFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onmouseover', newValue);
  }
  function get_onMouseUpFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onMouseUp");
  }
  function set_onMouseUpFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onmouseup', newValue);
  }
  function get_onMouseWheelFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onMouseWheel");
  }
  function set_onMouseWheelFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onmousewheel', newValue);
  }
  function get_onPauseFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onPause");
  }
  function set_onPauseFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onpause', newValue);
  }
  function get_onPlayFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onPlay");
  }
  function set_onPlayFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onplay', newValue);
  }
  function get_onPlayingFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onPlaying");
  }
  function set_onPlayingFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onplaying', newValue);
  }
  function get_onProgressFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onProgress");
  }
  function set_onProgressFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onprogress', newValue);
  }
  function get_onRateChangeFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onRateChange");
  }
  function set_onRateChangeFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onratechange', newValue);
  }
  function get_onReadyStateChangeFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onReadyStateChange");
  }
  function set_onReadyStateChangeFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onreadystatechange', newValue);
  }
  function get_onScrollFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onScroll");
  }
  function set_onScrollFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onscroll', newValue);
  }
  function get_onSearchFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onSearch");
  }
  function set_onSearchFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onsearch', newValue);
  }
  function get_onSeekedFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onSeeked");
  }
  function set_onSeekedFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onseeked', newValue);
  }
  function get_onSeekingFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onSeeking");
  }
  function set_onSeekingFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onseeking', newValue);
  }
  function get_onSelectFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onSelect");
  }
  function set_onSelectFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onselect', newValue);
  }
  function get_onShowFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onShow");
  }
  function set_onShowFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onshow', newValue);
  }
  function get_onStalledFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onStalled");
  }
  function set_onStalledFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onstalled', newValue);
  }
  function get_onSubmitFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onSubmit");
  }
  function set_onSubmitFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onsubmit', newValue);
  }
  function get_onSuspendFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onSuspend");
  }
  function set_onSuspendFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onsuspend', newValue);
  }
  function get_onTimeUpdateFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onTimeUpdate");
  }
  function set_onTimeUpdateFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ontimeupdate', newValue);
  }
  function get_onTouchCancelFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onTouchCancel");
  }
  function set_onTouchCancelFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ontouchcancel', newValue);
  }
  function get_onTouchEndFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onTouchEnd");
  }
  function set_onTouchEndFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ontouchend', newValue);
  }
  function get_onTouchMoveFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onTouchMove");
  }
  function set_onTouchMoveFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ontouchmove', newValue);
  }
  function get_onTouchStartFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onTouchStart");
  }
  function set_onTouchStartFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'ontouchstart', newValue);
  }
  function get_onVolumeChangeFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onVolumeChange");
  }
  function set_onVolumeChangeFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onvolumechange', newValue);
  }
  function get_onWaitingFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onWaiting");
  }
  function set_onWaitingFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onwaiting', newValue);
  }
  function get_onWheelFunction($receiver) {
    throw UnsupportedOperationException_init("You can't read variable onWheel");
  }
  function set_onWheelFunction($receiver, newValue) {
    $receiver.consumer.onTagEvent_j30qsv$($receiver, 'onwheel', newValue);
  }
  function injectTo($receiver, bean, field) {
    field.set(bean, $receiver);
  }
  function injectToUnsafe($receiver, bean, field) {
    injectTo($receiver, bean, field);
  }
  function InjectCapture() {
  }
  InjectCapture.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InjectCapture',
    interfaces: []
  };
  function InjectByClassName(className) {
    this.className = className;
  }
  InjectByClassName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InjectByClassName',
    interfaces: [InjectCapture]
  };
  function InjectByTagName(tagName) {
    this.tagName = tagName;
  }
  InjectByTagName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InjectByTagName',
    interfaces: [InjectCapture]
  };
  function InjectRoot() {
    InjectRoot_instance = this;
  }
  InjectRoot.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InjectRoot',
    interfaces: [InjectCapture]
  };
  var InjectRoot_instance = null;
  function InjectRoot_getInstance() {
    if (InjectRoot_instance === null) {
      new InjectRoot();
    }
    return InjectRoot_instance;
  }
  function CustomCapture() {
  }
  CustomCapture.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CustomCapture',
    interfaces: [InjectCapture]
  };
  function InjectorConsumer(downstream, bean, rules) {
    this.downstream = downstream;
    this.bean = bean;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = rules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element.first, InjectByClassName))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      destination_0.add_11rb$(to(Kotlin.isType(tmp$_1 = item.first, InjectByClassName) ? tmp$_1 : throwCCE(), item.second));
    }
    var destination_1 = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var key = element_0.first.className;
      var tmp$_0_0;
      var value = destination_1.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination_1.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      } else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element_0.second);
    }
    this.classesMap_0 = destination_1;
    var destination_2 = ArrayList_init();
    var tmp$_3;
    tmp$_3 = rules.iterator();
    while (tmp$_3.hasNext()) {
      var element_1 = tmp$_3.next();
      if (Kotlin.isType(element_1.first, InjectByTagName))
        destination_2.add_11rb$(element_1);
    }
    var destination_3 = ArrayList_init_0(collectionSizeOrDefault(destination_2, 10));
    var tmp$_4;
    tmp$_4 = destination_2.iterator();
    while (tmp$_4.hasNext()) {
      var item_0 = tmp$_4.next();
      var tmp$_5;
      destination_3.add_11rb$(to(Kotlin.isType(tmp$_5 = item_0.first, InjectByTagName) ? tmp$_5 : throwCCE(), item_0.second));
    }
    var destination_4 = LinkedHashMap_init();
    var tmp$_6;
    tmp$_6 = destination_3.iterator();
    while (tmp$_6.hasNext()) {
      var element_2 = tmp$_6.next();
      var key_0 = element_2.first.tagName.toLowerCase();
      var tmp$_0_1;
      var value_0 = destination_4.get_11rb$(key_0);
      if (value_0 == null) {
        var answer_0 = ArrayList_init();
        destination_4.put_xwzc9p$(key_0, answer_0);
        tmp$_0_1 = answer_0;
      } else {
        tmp$_0_1 = value_0;
      }
      var list_0 = tmp$_0_1;
      list_0.add_11rb$(element_2.second);
    }
    this.tagNamesMap_0 = destination_4;
    var destination_5 = ArrayList_init();
    var tmp$_7;
    tmp$_7 = rules.iterator();
    while (tmp$_7.hasNext()) {
      var element_3 = tmp$_7.next();
      if (equals(element_3.first, InjectRoot_getInstance()))
        destination_5.add_11rb$(element_3);
    }
    var destination_6 = ArrayList_init_0(collectionSizeOrDefault(destination_5, 10));
    var tmp$_8;
    tmp$_8 = destination_5.iterator();
    while (tmp$_8.hasNext()) {
      var item_1 = tmp$_8.next();
      destination_6.add_11rb$(item_1.second);
    }
    this.rootCaptures_0 = destination_6;
    var destination_7 = ArrayList_init();
    var tmp$_9;
    tmp$_9 = rules.iterator();
    while (tmp$_9.hasNext()) {
      var element_4 = tmp$_9.next();
      if (Kotlin.isType(element_4.first, CustomCapture))
        destination_7.add_11rb$(element_4);
    }
    var destination_8 = ArrayList_init_0(collectionSizeOrDefault(destination_7, 10));
    var tmp$_10;
    tmp$_10 = destination_7.iterator();
    while (tmp$_10.hasNext()) {
      var item_2 = tmp$_10.next();
      var tmp$_11;
      destination_8.add_11rb$(to(Kotlin.isType(tmp$_11 = item_2.first, CustomCapture) ? tmp$_11 : throwCCE(), item_2.second));
    }
    this.customCaptures_0 = destination_8;
  }
  InjectorConsumer.prototype.onTagEnd_tkgjla$ = function (tag) {
    var tmp$;
    this.downstream.onTagEnd_tkgjla$(tag);
    var node = this.downstream.finalize();
    if (!this.classesMap_0.isEmpty()) {
      var $receiver = asList(node.classList);
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1;
        var list = (tmp$_1 = this.classesMap_0.get_11rb$(element)) != null ? tmp$_1 : emptyList();
        addAll(destination, list);
      }
      var tmp$_2;
      tmp$_2 = destination.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        injectToUnsafe(node, this.bean, element_0);
      }
    }
    if (!this.tagNamesMap_0.isEmpty()) {
      if ((tmp$ = this.tagNamesMap_0.get_11rb$(node.tagName.toLowerCase())) != null) {
        var tmp$_3;
        tmp$_3 = tmp$.iterator();
        while (tmp$_3.hasNext()) {
          var element_1 = tmp$_3.next();
          injectToUnsafe(node, this.bean, element_1);
        }
      }
    }
    var $receiver_0 = this.customCaptures_0;
    var destination_0 = ArrayList_init();
    var tmp$_4;
    tmp$_4 = $receiver_0.iterator();
    while (tmp$_4.hasNext()) {
      var element_2 = tmp$_4.next();
      if (element_2.first.apply_lt8gi4$(node))
        destination_0.add_11rb$(element_2);
    }
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault(destination_0, 10));
    var tmp$_5;
    tmp$_5 = destination_0.iterator();
    while (tmp$_5.hasNext()) {
      var item = tmp$_5.next();
      destination_1.add_11rb$(item.second);
    }
    var tmp$_6;
    tmp$_6 = destination_1.iterator();
    while (tmp$_6.hasNext()) {
      var element_3 = tmp$_6.next();
      injectToUnsafe(node, this.bean, element_3);
    }
  };
  InjectorConsumer.prototype.finalize = function () {
    var node = this.downstream.finalize();
    var tmp$;
    tmp$ = this.rootCaptures_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      injectToUnsafe(node, this.bean, element);
    }
    return node;
  };
  InjectorConsumer.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    return this.downstream.onTagAttributeChange_5n2z71$(tag, attribute, value);
  };
  InjectorConsumer.prototype.onTagComment_6bul2c$ = function (content) {
    return this.downstream.onTagComment_6bul2c$(content);
  };
  InjectorConsumer.prototype.onTagContent_6bul2c$ = function (content) {
    return this.downstream.onTagContent_6bul2c$(content);
  };
  InjectorConsumer.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    return this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  InjectorConsumer.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    return this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  InjectorConsumer.prototype.onTagError_cjwpn3$ = function (tag, exception) {
    return this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  InjectorConsumer.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    return this.downstream.onTagEvent_j30qsv$(tag, event, value);
  };
  InjectorConsumer.prototype.onTagStart_tkgjla$ = function (tag) {
    return this.downstream.onTagStart_tkgjla$(tag);
  };
  InjectorConsumer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InjectorConsumer',
    interfaces: [TagConsumer]
  };
  function inject($receiver, bean, rules) {
    return new InjectorConsumer($receiver, bean, rules);
  }
  function appendAndInject$lambda(closure$bean, closure$rules, closure$block) {
    return function ($receiver) {
      closure$block(new InjectorConsumer($receiver, closure$bean, closure$rules));
      return Unit;
    };
  }
  function appendAndInject($receiver, bean, rules, block) {
    return append($receiver, appendAndInject$lambda(bean, rules, block));
  }
  function trace$lambda(it) {
    console.info(it);
    return Unit;
  }
  function trace_0($receiver) {
    return trace($receiver, trace$lambda);
  }
  function currentTimeMillis() {
    return Kotlin.Long.fromNumber((new Date()).getTime());
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$html = package$kotlinx.html || (package$kotlinx.html = {});
  package$html.TagConsumer = TagConsumer;
  package$html.Tag = Tag;
  package$html.Unsafe = Unsafe;
  package$html.AttributeEnum = AttributeEnum;
  package$html.visitTag_xwv8ym$ = visitTag;
  $$importsForInline$$['kotlinx-html-js'] = _;
  package$html.visit_xwv8ym$ = visit;
  package$html.visitTagAndFinalize_g9qte5$ = visitTagAndFinalize;
  package$html.visitAndFinalize_g9qte5$ = visitAndFinalize;
  package$html.attributesMapOf = attributesMapOf;
  package$html.attributesMapOf_jyasbz$ = attributesMapOf_0;
  package$html.attributesMapOf_alerag$ = attributesMapOf_1;
  package$html.singletonMapOf_puj7f4$ = singletonMapOf;
  package$html.unsafe_vdrn79$ = unsafe;
  Object.defineProperty(package$html, 'emptyMap', {
    get: function () {
      return emptyMap_0;
    }
  });
  package$html.DefaultUnsafe = DefaultUnsafe;
  package$html.HtmlTagMarker = HtmlTagMarker;
  var package$attributes = package$html.attributes || (package$html.attributes = {});
  package$attributes.AttributeEncoder = AttributeEncoder;
  package$attributes.Attribute = Attribute;
  Object.defineProperty(package$attributes, 'StringEncoder', {
    get: StringEncoder_getInstance
  });
  package$attributes.StringAttribute = StringAttribute;
  package$attributes.booleanEncode_1v8dcc$ = booleanEncode;
  package$attributes.BooleanEncoder = BooleanEncoder;
  package$attributes.BooleanAttribute = BooleanAttribute;
  package$attributes.tickerEncode_gigfna$ = tickerEncode;
  Object.defineProperty(package$attributes, 'TickerEncoder', {
    get: TickerEncoder_getInstance
  });
  package$attributes.TickerAttribute = TickerAttribute;
  package$attributes.EnumEncoder = EnumEncoder;
  package$attributes.enumEncode_m4whry$ = enumEncode;
  package$attributes.EnumAttribute = EnumAttribute;
  package$attributes.stringSetDecode_pdl1vj$ = stringSetDecode;
  package$attributes.stringSetEncode_gevexo$ = stringSetEncode;
  Object.defineProperty(package$attributes, 'StringSetEncoder', {
    get: StringSetEncoder_getInstance
  });
  package$attributes.StringSetAttribute = StringSetAttribute;
  package$html.legEnd_99jryr$ = legEnd;
  package$html.legEnd_vwmtm2$ = legEnd_0;
  package$html.legEnd_xzrxko$ = legEnd_1;
  package$html.legEnd_pujkak$ = legEnd_2;
  package$html.Draggable = Draggable;
  package$html.get_true__sh13o2$ = get_true_;
  package$html.get_false__sh13o2$ = get_false_;
  package$html.object__dbo9vp$ = object_;
  package$html.var__87cnpn$ = var_;
  package$html.var__ycyb16$ = var__0;
  package$html.object__lbhlz7$ = object__0;
  package$html.get_for__baf5if$ = get_for_;
  package$html.set_for__i8xdhl$ = set_for_;
  package$html.get_for__mffrb2$ = get_for__0;
  package$html.set_for__4rgb9g$ = set_for__0;
  package$html.get_onTouchcancel_fxodxh$ = get_onTouchcancel;
  package$html.set_onTouchcancel_ueiko3$ = set_onTouchcancel;
  package$html.get_onTouchmove_fxodxh$ = get_onTouchmove;
  package$html.set_onTouchmove_ueiko3$ = set_onTouchmove;
  var package$consumers = package$html.consumers || (package$html.consumers = {});
  package$consumers.DelayedConsumer = DelayedConsumer;
  package$consumers.delayed_3mrk8e$ = delayed;
  var package$impl = package$html.impl || (package$html.impl = {});
  package$impl.DelegatingMap = DelegatingMap;
  package$consumers.catch_5uvl3r$ = catch_0;
  Object.defineProperty(package$consumers, 'PredicateResults', {
    get: PredicateResults_getInstance
  });
  Object.defineProperty(PredicateResult, 'PASS', {
    get: PredicateResult$PASS_getInstance
  });
  Object.defineProperty(PredicateResult, 'SKIP', {
    get: PredicateResult$SKIP_getInstance
  });
  Object.defineProperty(PredicateResult, 'DROP', {
    get: PredicateResult$DROP_getInstance
  });
  package$consumers.PredicateResult = PredicateResult;
  package$consumers.filter_8vynzr$ = filter;
  package$consumers.FinalizeConsumer = FinalizeConsumer;
  package$consumers.onFinalize_fnbzu2$ = onFinalize;
  package$consumers.onFinalizeMap_dpqpuj$ = onFinalizeMap;
  package$html.CommonAttributeGroupFacade = CommonAttributeGroupFacade;
  package$html.get_enableTheming_fxodxh$ = get_enableTheming;
  package$html.set_enableTheming_jqpcbu$ = set_enableTheming;
  package$html.get_enableViewState_fxodxh$ = get_enableViewState;
  package$html.set_enableViewState_jqpcbu$ = set_enableViewState;
  package$html.get_skinID_fxodxh$ = get_skinID;
  package$html.set_skinID_ueiko3$ = set_skinID;
  package$html.get_visible_fxodxh$ = get_visible;
  package$html.set_visible_jqpcbu$ = set_visible;
  package$html.get_accessKey_fxodxh$ = get_accessKey;
  package$html.set_accessKey_ueiko3$ = set_accessKey;
  package$html.get_classes_fxodxh$ = get_classes;
  package$html.set_classes_njy09m$ = set_classes;
  package$html.get_contentEditable_fxodxh$ = get_contentEditable;
  package$html.set_contentEditable_jqpcbu$ = set_contentEditable;
  package$html.get_contextMenu_fxodxh$ = get_contextMenu;
  package$html.set_contextMenu_ueiko3$ = set_contextMenu;
  package$html.get_dataFolderName_fxodxh$ = get_dataFolderName;
  package$html.set_dataFolderName_ueiko3$ = set_dataFolderName;
  package$html.get_dataMsgId_fxodxh$ = get_dataMsgId;
  package$html.set_dataMsgId_ueiko3$ = set_dataMsgId;
  package$html.get_dir_fxodxh$ = get_dir;
  package$html.set_dir_9u487w$ = set_dir;
  package$html.get_draggable_fxodxh$ = get_draggable;
  package$html.set_draggable_5qpbvg$ = set_draggable;
  package$html.get_hidden_fxodxh$ = get_hidden;
  package$html.set_hidden_jqpcbu$ = set_hidden;
  package$html.get_id_fxodxh$ = get_id;
  package$html.set_id_ueiko3$ = set_id;
  package$html.get_itemProp_fxodxh$ = get_itemProp;
  package$html.set_itemProp_ueiko3$ = set_itemProp;
  package$html.get_lang_fxodxh$ = get_lang;
  package$html.set_lang_ueiko3$ = set_lang;
  package$html.get_onAbort_fxodxh$ = get_onAbort;
  package$html.set_onAbort_ueiko3$ = set_onAbort;
  package$html.get_onBlur_fxodxh$ = get_onBlur;
  package$html.set_onBlur_ueiko3$ = set_onBlur;
  package$html.get_onCanPlay_fxodxh$ = get_onCanPlay;
  package$html.set_onCanPlay_ueiko3$ = set_onCanPlay;
  package$html.get_onCanPlayThrough_fxodxh$ = get_onCanPlayThrough;
  package$html.set_onCanPlayThrough_ueiko3$ = set_onCanPlayThrough;
  package$html.get_onChange_fxodxh$ = get_onChange;
  package$html.set_onChange_ueiko3$ = set_onChange;
  package$html.get_onClick_fxodxh$ = get_onClick;
  package$html.set_onClick_ueiko3$ = set_onClick;
  package$html.get_onContextMenu_fxodxh$ = get_onContextMenu;
  package$html.set_onContextMenu_ueiko3$ = set_onContextMenu;
  package$html.get_onDoubleClick_fxodxh$ = get_onDoubleClick;
  package$html.set_onDoubleClick_ueiko3$ = set_onDoubleClick;
  package$html.get_onDrag_fxodxh$ = get_onDrag;
  package$html.set_onDrag_ueiko3$ = set_onDrag;
  package$html.get_onDragEnd_fxodxh$ = get_onDragEnd;
  package$html.set_onDragEnd_ueiko3$ = set_onDragEnd;
  package$html.get_onDragEnter_fxodxh$ = get_onDragEnter;
  package$html.set_onDragEnter_ueiko3$ = set_onDragEnter;
  package$html.get_onDragLeave_fxodxh$ = get_onDragLeave;
  package$html.set_onDragLeave_ueiko3$ = set_onDragLeave;
  package$html.get_onDragOver_fxodxh$ = get_onDragOver;
  package$html.set_onDragOver_ueiko3$ = set_onDragOver;
  package$html.get_onDragStart_fxodxh$ = get_onDragStart;
  package$html.set_onDragStart_ueiko3$ = set_onDragStart;
  package$html.get_onDrop_fxodxh$ = get_onDrop;
  package$html.set_onDrop_ueiko3$ = set_onDrop;
  package$html.get_onDurationChange_fxodxh$ = get_onDurationChange;
  package$html.set_onDurationChange_ueiko3$ = set_onDurationChange;
  package$html.get_onEmptied_fxodxh$ = get_onEmptied;
  package$html.set_onEmptied_ueiko3$ = set_onEmptied;
  package$html.get_onEnded_fxodxh$ = get_onEnded;
  package$html.set_onEnded_ueiko3$ = set_onEnded;
  package$html.get_onError_fxodxh$ = get_onError;
  package$html.set_onError_ueiko3$ = set_onError;
  package$html.get_onFocus_fxodxh$ = get_onFocus;
  package$html.set_onFocus_ueiko3$ = set_onFocus;
  package$html.get_onFocusIn_fxodxh$ = get_onFocusIn;
  package$html.set_onFocusIn_ueiko3$ = set_onFocusIn;
  package$html.get_onFocusOut_fxodxh$ = get_onFocusOut;
  package$html.set_onFocusOut_ueiko3$ = set_onFocusOut;
  package$html.get_onFormChange_fxodxh$ = get_onFormChange;
  package$html.set_onFormChange_ueiko3$ = set_onFormChange;
  package$html.get_onFormInput_fxodxh$ = get_onFormInput;
  package$html.set_onFormInput_ueiko3$ = set_onFormInput;
  package$html.get_onInput_fxodxh$ = get_onInput;
  package$html.set_onInput_ueiko3$ = set_onInput;
  package$html.get_onInvalid_fxodxh$ = get_onInvalid;
  package$html.set_onInvalid_ueiko3$ = set_onInvalid;
  package$html.get_onKeyDown_fxodxh$ = get_onKeyDown;
  package$html.set_onKeyDown_ueiko3$ = set_onKeyDown;
  package$html.get_onKeyPress_fxodxh$ = get_onKeyPress;
  package$html.set_onKeyPress_ueiko3$ = set_onKeyPress;
  package$html.get_onKeyUp_fxodxh$ = get_onKeyUp;
  package$html.set_onKeyUp_ueiko3$ = set_onKeyUp;
  package$html.get_onLoad_fxodxh$ = get_onLoad;
  package$html.set_onLoad_ueiko3$ = set_onLoad;
  package$html.get_onLoadedData_fxodxh$ = get_onLoadedData;
  package$html.set_onLoadedData_ueiko3$ = set_onLoadedData;
  package$html.get_onLoadedMetaData_fxodxh$ = get_onLoadedMetaData;
  package$html.set_onLoadedMetaData_ueiko3$ = set_onLoadedMetaData;
  package$html.get_onLoadStart_fxodxh$ = get_onLoadStart;
  package$html.set_onLoadStart_ueiko3$ = set_onLoadStart;
  package$html.get_onMouseDown_fxodxh$ = get_onMouseDown;
  package$html.set_onMouseDown_ueiko3$ = set_onMouseDown;
  package$html.get_onMouseMove_fxodxh$ = get_onMouseMove;
  package$html.set_onMouseMove_ueiko3$ = set_onMouseMove;
  package$html.get_onMouseOut_fxodxh$ = get_onMouseOut;
  package$html.set_onMouseOut_ueiko3$ = set_onMouseOut;
  package$html.get_onMouseOver_fxodxh$ = get_onMouseOver;
  package$html.set_onMouseOver_ueiko3$ = set_onMouseOver;
  package$html.get_onMouseUp_fxodxh$ = get_onMouseUp;
  package$html.set_onMouseUp_ueiko3$ = set_onMouseUp;
  package$html.get_onMouseWheel_fxodxh$ = get_onMouseWheel;
  package$html.set_onMouseWheel_ueiko3$ = set_onMouseWheel;
  package$html.get_onPause_fxodxh$ = get_onPause;
  package$html.set_onPause_ueiko3$ = set_onPause;
  package$html.get_onPlay_fxodxh$ = get_onPlay;
  package$html.set_onPlay_ueiko3$ = set_onPlay;
  package$html.get_onPlaying_fxodxh$ = get_onPlaying;
  package$html.set_onPlaying_ueiko3$ = set_onPlaying;
  package$html.get_onProgress_fxodxh$ = get_onProgress;
  package$html.set_onProgress_ueiko3$ = set_onProgress;
  package$html.get_onRateChange_fxodxh$ = get_onRateChange;
  package$html.set_onRateChange_ueiko3$ = set_onRateChange;
  package$html.get_onReadyStateChange_fxodxh$ = get_onReadyStateChange;
  package$html.set_onReadyStateChange_ueiko3$ = set_onReadyStateChange;
  package$html.get_onScroll_fxodxh$ = get_onScroll;
  package$html.set_onScroll_ueiko3$ = set_onScroll;
  package$html.get_onSearch_fxodxh$ = get_onSearch;
  package$html.set_onSearch_ueiko3$ = set_onSearch;
  package$html.get_onSeeked_fxodxh$ = get_onSeeked;
  package$html.set_onSeeked_ueiko3$ = set_onSeeked;
  package$html.get_onSeeking_fxodxh$ = get_onSeeking;
  package$html.set_onSeeking_ueiko3$ = set_onSeeking;
  package$html.get_onSelect_fxodxh$ = get_onSelect;
  package$html.set_onSelect_ueiko3$ = set_onSelect;
  package$html.get_onShow_fxodxh$ = get_onShow;
  package$html.set_onShow_ueiko3$ = set_onShow;
  package$html.get_onStalled_fxodxh$ = get_onStalled;
  package$html.set_onStalled_ueiko3$ = set_onStalled;
  package$html.get_onSubmit_fxodxh$ = get_onSubmit;
  package$html.set_onSubmit_ueiko3$ = set_onSubmit;
  package$html.get_onSuspend_fxodxh$ = get_onSuspend;
  package$html.set_onSuspend_ueiko3$ = set_onSuspend;
  package$html.get_onTimeUpdate_fxodxh$ = get_onTimeUpdate;
  package$html.set_onTimeUpdate_ueiko3$ = set_onTimeUpdate;
  package$html.get_onTouchCancel_fxodxh$ = get_onTouchCancel;
  package$html.set_onTouchCancel_ueiko3$ = set_onTouchCancel;
  package$html.get_onTouchEnd_fxodxh$ = get_onTouchEnd;
  package$html.set_onTouchEnd_ueiko3$ = set_onTouchEnd;
  package$html.get_onTouchMove_fxodxh$ = get_onTouchMove;
  package$html.set_onTouchMove_ueiko3$ = set_onTouchMove;
  package$html.get_onTouchStart_fxodxh$ = get_onTouchStart;
  package$html.set_onTouchStart_ueiko3$ = set_onTouchStart;
  package$html.get_onVolumeChange_fxodxh$ = get_onVolumeChange;
  package$html.set_onVolumeChange_ueiko3$ = set_onVolumeChange;
  package$html.get_onWaiting_fxodxh$ = get_onWaiting;
  package$html.set_onWaiting_ueiko3$ = set_onWaiting;
  package$html.get_onWheel_fxodxh$ = get_onWheel;
  package$html.set_onWheel_ueiko3$ = set_onWheel;
  package$html.get_role_fxodxh$ = get_role;
  package$html.set_role_ueiko3$ = set_role;
  package$html.get_runAt_fxodxh$ = get_runAt;
  package$html.set_runAt_62sup9$ = set_runAt;
  package$html.get_spellCheck_fxodxh$ = get_spellCheck;
  package$html.set_spellCheck_jqpcbu$ = set_spellCheck;
  package$html.get_style_fxodxh$ = get_style;
  package$html.set_style_ueiko3$ = set_style;
  package$html.get_subject_fxodxh$ = get_subject;
  package$html.set_subject_ueiko3$ = set_subject;
  package$html.get_tabIndex_fxodxh$ = get_tabIndex;
  package$html.set_tabIndex_ueiko3$ = set_tabIndex;
  package$html.get_title_fxodxh$ = get_title;
  package$html.set_title_ueiko3$ = set_title;
  package$html.FormServerAttributeGroupFacade = FormServerAttributeGroupFacade;
  package$html.get_defaultButton_eyr2db$ = get_defaultButton;
  package$html.set_defaultButton_pr6dup$ = set_defaultButton;
  package$html.get_defaultFocus_eyr2db$ = get_defaultFocus;
  package$html.set_defaultFocus_pr6dup$ = set_defaultFocus;
  package$html.get_submitDisabledControls_eyr2db$ = get_submitDisabledControls;
  package$html.set_submitDisabledControls_f4mavu$ = set_submitDisabledControls;
  package$html.InputServerAttributeGroupFacade = InputServerAttributeGroupFacade;
  package$html.get_causesValidation_1b5w33$ = get_causesValidation;
  package$html.set_causesValidation_jnmo2c$ = set_causesValidation;
  package$html.get_validationGroup_1b5w33$ = get_validationGroup;
  package$html.set_validationGroup_3yp3w3$ = set_validationGroup;
  package$html.SelectServerAttributeGroupFacade = SelectServerAttributeGroupFacade;
  package$html.get_dataSourceID_6ojqtj$ = get_dataSourceID;
  package$html.set_dataSourceID_6l8dwp$ = set_dataSourceID;
  package$html.get_dataTextField_6ojqtj$ = get_dataTextField;
  package$html.set_dataTextField_6l8dwp$ = set_dataTextField;
  package$html.get_dataValueField_6ojqtj$ = get_dataValueField;
  package$html.set_dataValueField_6l8dwp$ = set_dataValueField;
  Object.defineProperty(package$html, 'attributeStringString_8be2vx$', {
    get: function () {
      return attributeStringString;
    }
  });
  Object.defineProperty(package$html, 'attributeSetStringStringSet_8be2vx$', {
    get: function () {
      return attributeSetStringStringSet;
    }
  });
  Object.defineProperty(package$html, 'attributeBooleanBoolean_8be2vx$', {
    get: function () {
      return attributeBooleanBoolean;
    }
  });
  Object.defineProperty(package$html, 'attributeBooleanBooleanOnOff_8be2vx$', {
    get: function () {
      return attributeBooleanBooleanOnOff;
    }
  });
  Object.defineProperty(package$html, 'attributeBooleanTicker_8be2vx$', {
    get: function () {
      return attributeBooleanTicker;
    }
  });
  Object.defineProperty(package$html, 'attributeButtonFormEncTypeEnumButtonFormEncTypeValues_8be2vx$', {
    get: function () {
      return attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
    }
  });
  Object.defineProperty(package$html, 'attributeButtonFormMethodEnumButtonFormMethodValues_8be2vx$', {
    get: function () {
      return attributeButtonFormMethodEnumButtonFormMethodValues;
    }
  });
  Object.defineProperty(package$html, 'attributeButtonTypeEnumButtonTypeValues_8be2vx$', {
    get: function () {
      return attributeButtonTypeEnumButtonTypeValues;
    }
  });
  Object.defineProperty(package$html, 'attributeCommandTypeEnumCommandTypeValues_8be2vx$', {
    get: function () {
      return attributeCommandTypeEnumCommandTypeValues;
    }
  });
  Object.defineProperty(package$html, 'attributeDirEnumDirValues_8be2vx$', {
    get: function () {
      return attributeDirEnumDirValues;
    }
  });
  Object.defineProperty(package$html, 'attributeDraggableEnumDraggableValues_8be2vx$', {
    get: function () {
      return attributeDraggableEnumDraggableValues;
    }
  });
  Object.defineProperty(package$html, 'attributeFormEncTypeEnumFormEncTypeValues_8be2vx$', {
    get: function () {
      return attributeFormEncTypeEnumFormEncTypeValues;
    }
  });
  Object.defineProperty(package$html, 'attributeFormMethodEnumFormMethodValues_8be2vx$', {
    get: function () {
      return attributeFormMethodEnumFormMethodValues;
    }
  });
  Object.defineProperty(package$html, 'attributeIframeSandboxEnumIframeSandboxValues_8be2vx$', {
    get: function () {
      return attributeIframeSandboxEnumIframeSandboxValues;
    }
  });
  Object.defineProperty(package$html, 'attributeInputFormEncTypeEnumInputFormEncTypeValues_8be2vx$', {
    get: function () {
      return attributeInputFormEncTypeEnumInputFormEncTypeValues;
    }
  });
  Object.defineProperty(package$html, 'attributeInputFormMethodEnumInputFormMethodValues_8be2vx$', {
    get: function () {
      return attributeInputFormMethodEnumInputFormMethodValues;
    }
  });
  Object.defineProperty(package$html, 'attributeInputTypeEnumInputTypeValues_8be2vx$', {
    get: function () {
      return attributeInputTypeEnumInputTypeValues;
    }
  });
  Object.defineProperty(package$html, 'attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues_8be2vx$', {
    get: function () {
      return attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
    }
  });
  Object.defineProperty(package$html, 'attributeRunAtEnumRunAtValues_8be2vx$', {
    get: function () {
      return attributeRunAtEnumRunAtValues;
    }
  });
  Object.defineProperty(package$html, 'attributeTextAreaWrapEnumTextAreaWrapValues_8be2vx$', {
    get: function () {
      return attributeTextAreaWrapEnumTextAreaWrapValues;
    }
  });
  Object.defineProperty(package$html, 'attributeThScopeEnumThScopeValues_8be2vx$', {
    get: function () {
      return attributeThScopeEnumThScopeValues;
    }
  });
  package$html.a_5skjyn$ = a;
  package$html.abbr_6inr0p$ = abbr;
  package$html.address_a2fi0u$ = address;
  package$html.area_itdnqx$ = area;
  package$html.article_m04wvw$ = article;
  package$html.aside_p5o5s6$ = aside;
  package$html.audio_pitgtg$ = audio;
  package$html.b_pw134g$ = b;
  package$html.base_kuydqv$ = base;
  package$html.bdi_yt7dfv$ = bdi;
  package$html.bdo_xzrhyz$ = bdo;
  package$html.blockQuote_kqn8r$ = blockQuote;
  package$html.body_z1rdug$ = body;
  package$html.br_msntey$ = br;
  package$html.button_yup7tf$ = button;
  package$html.canvas_89i3hl$ = canvas;
  package$html.canvas_q2368u$ = canvas_0;
  package$html.caption_7tv3ws$ = caption;
  package$html.cite_1ndov1$ = cite;
  package$html.code_c7b9vx$ = code;
  package$html.col_dptvv2$ = col;
  package$html.colGroup_y3yo5h$ = colGroup;
  package$html.command_n3gfsd$ = command;
  package$html.dataList_7wdw0e$ = dataList;
  package$html.dd_ufas1y$ = dd;
  package$html.del_ks3snt$ = del;
  package$html.details_lsny6o$ = details;
  package$html.dfn_qz8qfa$ = dfn;
  package$html.dialog_tmuuku$ = dialog;
  package$html.div_59el9d$ = div;
  package$html.dl_jwau0i$ = dl;
  package$html.dt_t7lw6$ = dt;
  package$html.em_83d4cy$ = em;
  package$html.embed_93iexz$ = embed;
  package$html.fieldSet_wmxr1q$ = fieldSet;
  package$html.figcaption_cm1syw$ = figcaption;
  package$html.figure_fnm6ty$ = figure;
  package$html.footer_x2k50h$ = footer;
  package$html.form_3ereno$ = form;
  package$html.h1_qzc46n$ = h1;
  package$html.h2_wky4k0$ = h2;
  package$html.h3_l44bbj$ = h3;
  package$html.h4_9nai32$ = h4;
  package$html.h5_1tjb5f$ = h5;
  package$html.h6_dad4dw$ = h6;
  package$html.head_qjf5rw$ = head;
  package$html.head_i7x5xd$ = head_0;
  package$html.header_dwfinh$ = header;
  package$html.hGroup_o3ebz7$ = hGroup;
  package$html.hr_ks0ewg$ = hr;
  package$html.html_lo9rwl$ = html;
  package$html.html_ym5t9t$ = html_0;
  package$html.i_gncgg9$ = i;
  package$html.iframe_i3obeb$ = iframe;
  package$html.iframe_k7pgs2$ = iframe_0;
  package$html.img_45d5o1$ = img;
  package$html.input_mm0abt$ = input;
  package$html.ins_e5g22k$ = ins;
  package$html.kbd_10o0fv$ = kbd;
  package$html.keyGen_19nnnk$ = keyGen;
  package$html.label_j811c2$ = label;
  package$html.legend_99jryr$ = legend;
  package$html.li_jf6zlv$ = li;
  package$html.link_hbbg0w$ = link;
  package$html.main_hf6ozl$ = main;
  package$html.map_r08uhb$ = map;
  package$html.mark_m8f11v$ = mark;
  package$html.math_bhulte$ = math;
  package$html.mathml_89i3hl$ = mathml;
  package$html.mathml_fvpj0z$ = mathml_0;
  package$html.meta_9higvf$ = meta;
  package$html.meter_akdp07$ = meter;
  package$html.nav_pa7bap$ = nav;
  package$html.noScript_z591w2$ = noScript;
  package$html.htmlObject_dbo9vp$ = htmlObject;
  package$html.ol_g73xel$ = ol;
  package$html.optGroup_3qzn6b$ = optGroup;
  package$html.option_89i3hl$ = option;
  package$html.option_k09m0r$ = option_0;
  package$html.output_q3di9l$ = output;
  package$html.p_7ents2$ = p;
  package$html.param_k9rdkw$ = param;
  package$html.picture_841xe9$ = picture;
  package$html.pre_1138nj$ = pre;
  package$html.progress_j8bckz$ = progress;
  package$html.q_425zgf$ = q;
  package$html.rp_uoj0sk$ = rp;
  package$html.rt_5iq7rc$ = rt;
  package$html.ruby_d6wtb4$ = ruby;
  package$html.samp_sdlho7$ = samp;
  package$html.script_z1hjs4$ = script;
  package$html.script_wupk6s$ = script_0;
  package$html.section_ezs79p$ = section;
  package$html.select_ty59tq$ = select;
  package$html.small_fm3dud$ = small;
  package$html.source_naaf4v$ = source;
  package$html.span_fqsp1s$ = span;
  package$html.strong_k099i5$ = strong;
  package$html.style_89i3hl$ = style;
  package$html.style_x3xo8v$ = style_0;
  package$html.sub_35684y$ = sub;
  package$html.summary_tua37w$ = summary;
  package$html.sup_fc717g$ = sup;
  package$html.svg_89i3hl$ = svg;
  package$html.svg_gi1bim$ = svg_0;
  package$html.table_llpdic$ = table;
  package$html.tbody_ojrhk4$ = tbody;
  package$html.td_z82v7u$ = td;
  package$html.textArea_i2mn62$ = textArea;
  package$html.textArea_wfpz2l$ = textArea_0;
  package$html.tfoot_eqq100$ = tfoot;
  package$html.th_cjoo5$ = th;
  package$html.thead_fwe93y$ = thead;
  package$html.time_or12qb$ = time;
  package$html.title_qjf5rw$ = title;
  package$html.title_pc70yd$ = title_0;
  package$html.tr_gqplvg$ = tr;
  package$html.ul_e6giw3$ = ul;
  package$html.htmlVar_87cnpn$ = htmlVar;
  package$html.video_7h26o9$ = video;
  Object.defineProperty(Entities, 'nbsp', {
    get: Entities$nbsp_getInstance
  });
  Object.defineProperty(Entities, 'lt', {
    get: Entities$lt_getInstance
  });
  Object.defineProperty(Entities, 'gt', {
    get: Entities$gt_getInstance
  });
  Object.defineProperty(Entities, 'quot', {
    get: Entities$quot_getInstance
  });
  Object.defineProperty(Entities, 'amp', {
    get: Entities$amp_getInstance
  });
  Object.defineProperty(Entities, 'apos', {
    get: Entities$apos_getInstance
  });
  Object.defineProperty(Entities, 'iexcl', {
    get: Entities$iexcl_getInstance
  });
  Object.defineProperty(Entities, 'cent', {
    get: Entities$cent_getInstance
  });
  Object.defineProperty(Entities, 'pound', {
    get: Entities$pound_getInstance
  });
  Object.defineProperty(Entities, 'curren', {
    get: Entities$curren_getInstance
  });
  Object.defineProperty(Entities, 'yen', {
    get: Entities$yen_getInstance
  });
  Object.defineProperty(Entities, 'brvbar', {
    get: Entities$brvbar_getInstance
  });
  Object.defineProperty(Entities, 'sect', {
    get: Entities$sect_getInstance
  });
  Object.defineProperty(Entities, 'uml', {
    get: Entities$uml_getInstance
  });
  Object.defineProperty(Entities, 'copy', {
    get: Entities$copy_getInstance
  });
  Object.defineProperty(Entities, 'ordf', {
    get: Entities$ordf_getInstance
  });
  Object.defineProperty(Entities, 'laquo', {
    get: Entities$laquo_getInstance
  });
  Object.defineProperty(Entities, 'not', {
    get: Entities$not_getInstance
  });
  Object.defineProperty(Entities, 'shy', {
    get: Entities$shy_getInstance
  });
  Object.defineProperty(Entities, 'reg', {
    get: Entities$reg_getInstance
  });
  Object.defineProperty(Entities, 'macr', {
    get: Entities$macr_getInstance
  });
  Object.defineProperty(Entities, 'deg', {
    get: Entities$deg_getInstance
  });
  Object.defineProperty(Entities, 'plusmn', {
    get: Entities$plusmn_getInstance
  });
  Object.defineProperty(Entities, 'sup2', {
    get: Entities$sup2_getInstance
  });
  Object.defineProperty(Entities, 'sup3', {
    get: Entities$sup3_getInstance
  });
  Object.defineProperty(Entities, 'acute', {
    get: Entities$acute_getInstance
  });
  Object.defineProperty(Entities, 'micro', {
    get: Entities$micro_getInstance
  });
  Object.defineProperty(Entities, 'para', {
    get: Entities$para_getInstance
  });
  Object.defineProperty(Entities, 'middot', {
    get: Entities$middot_getInstance
  });
  Object.defineProperty(Entities, 'cedil', {
    get: Entities$cedil_getInstance
  });
  Object.defineProperty(Entities, 'sup1', {
    get: Entities$sup1_getInstance
  });
  Object.defineProperty(Entities, 'ordm', {
    get: Entities$ordm_getInstance
  });
  Object.defineProperty(Entities, 'raquo', {
    get: Entities$raquo_getInstance
  });
  Object.defineProperty(Entities, 'frac14', {
    get: Entities$frac14_getInstance
  });
  Object.defineProperty(Entities, 'frac12', {
    get: Entities$frac12_getInstance
  });
  Object.defineProperty(Entities, 'frac34', {
    get: Entities$frac34_getInstance
  });
  Object.defineProperty(Entities, 'iquest', {
    get: Entities$iquest_getInstance
  });
  Object.defineProperty(Entities, 'Agrave', {
    get: Entities$Agrave_getInstance
  });
  Object.defineProperty(Entities, 'Aacute', {
    get: Entities$Aacute_getInstance
  });
  Object.defineProperty(Entities, 'Acirc', {
    get: Entities$Acirc_getInstance
  });
  Object.defineProperty(Entities, 'Atilde', {
    get: Entities$Atilde_getInstance
  });
  Object.defineProperty(Entities, 'Auml', {
    get: Entities$Auml_getInstance
  });
  Object.defineProperty(Entities, 'Aring', {
    get: Entities$Aring_getInstance
  });
  Object.defineProperty(Entities, 'AElig', {
    get: Entities$AElig_getInstance
  });
  Object.defineProperty(Entities, 'Ccedil', {
    get: Entities$Ccedil_getInstance
  });
  Object.defineProperty(Entities, 'Egrave', {
    get: Entities$Egrave_getInstance
  });
  Object.defineProperty(Entities, 'Eacute', {
    get: Entities$Eacute_getInstance
  });
  Object.defineProperty(Entities, 'Ecirc', {
    get: Entities$Ecirc_getInstance
  });
  Object.defineProperty(Entities, 'Euml', {
    get: Entities$Euml_getInstance
  });
  Object.defineProperty(Entities, 'Igrave', {
    get: Entities$Igrave_getInstance
  });
  Object.defineProperty(Entities, 'Iacute', {
    get: Entities$Iacute_getInstance
  });
  Object.defineProperty(Entities, 'Icirc', {
    get: Entities$Icirc_getInstance
  });
  Object.defineProperty(Entities, 'Iuml', {
    get: Entities$Iuml_getInstance
  });
  Object.defineProperty(Entities, 'ETH', {
    get: Entities$ETH_getInstance
  });
  Object.defineProperty(Entities, 'Ntilde', {
    get: Entities$Ntilde_getInstance
  });
  Object.defineProperty(Entities, 'Ograve', {
    get: Entities$Ograve_getInstance
  });
  Object.defineProperty(Entities, 'Oacute', {
    get: Entities$Oacute_getInstance
  });
  Object.defineProperty(Entities, 'Ocirc', {
    get: Entities$Ocirc_getInstance
  });
  Object.defineProperty(Entities, 'Otilde', {
    get: Entities$Otilde_getInstance
  });
  Object.defineProperty(Entities, 'Ouml', {
    get: Entities$Ouml_getInstance
  });
  Object.defineProperty(Entities, 'times', {
    get: Entities$times_getInstance
  });
  Object.defineProperty(Entities, 'Oslash', {
    get: Entities$Oslash_getInstance
  });
  Object.defineProperty(Entities, 'Ugrave', {
    get: Entities$Ugrave_getInstance
  });
  Object.defineProperty(Entities, 'Uacute', {
    get: Entities$Uacute_getInstance
  });
  Object.defineProperty(Entities, 'Ucirc', {
    get: Entities$Ucirc_getInstance
  });
  Object.defineProperty(Entities, 'Uuml', {
    get: Entities$Uuml_getInstance
  });
  Object.defineProperty(Entities, 'Yacute', {
    get: Entities$Yacute_getInstance
  });
  Object.defineProperty(Entities, 'THORN', {
    get: Entities$THORN_getInstance
  });
  Object.defineProperty(Entities, 'szlig', {
    get: Entities$szlig_getInstance
  });
  Object.defineProperty(Entities, 'agrave', {
    get: Entities$agrave_getInstance
  });
  Object.defineProperty(Entities, 'aacute', {
    get: Entities$aacute_getInstance
  });
  Object.defineProperty(Entities, 'acirc', {
    get: Entities$acirc_getInstance
  });
  Object.defineProperty(Entities, 'atilde', {
    get: Entities$atilde_getInstance
  });
  Object.defineProperty(Entities, 'auml', {
    get: Entities$auml_getInstance
  });
  Object.defineProperty(Entities, 'aring', {
    get: Entities$aring_getInstance
  });
  Object.defineProperty(Entities, 'aelig', {
    get: Entities$aelig_getInstance
  });
  Object.defineProperty(Entities, 'ccedil', {
    get: Entities$ccedil_getInstance
  });
  Object.defineProperty(Entities, 'egrave', {
    get: Entities$egrave_getInstance
  });
  Object.defineProperty(Entities, 'eacute', {
    get: Entities$eacute_getInstance
  });
  Object.defineProperty(Entities, 'ecirc', {
    get: Entities$ecirc_getInstance
  });
  Object.defineProperty(Entities, 'euml', {
    get: Entities$euml_getInstance
  });
  Object.defineProperty(Entities, 'igrave', {
    get: Entities$igrave_getInstance
  });
  Object.defineProperty(Entities, 'iacute', {
    get: Entities$iacute_getInstance
  });
  Object.defineProperty(Entities, 'icirc', {
    get: Entities$icirc_getInstance
  });
  Object.defineProperty(Entities, 'iuml', {
    get: Entities$iuml_getInstance
  });
  Object.defineProperty(Entities, 'eth', {
    get: Entities$eth_getInstance
  });
  Object.defineProperty(Entities, 'ntilde', {
    get: Entities$ntilde_getInstance
  });
  Object.defineProperty(Entities, 'ograve', {
    get: Entities$ograve_getInstance
  });
  Object.defineProperty(Entities, 'oacute', {
    get: Entities$oacute_getInstance
  });
  Object.defineProperty(Entities, 'ocirc', {
    get: Entities$ocirc_getInstance
  });
  Object.defineProperty(Entities, 'otilde', {
    get: Entities$otilde_getInstance
  });
  Object.defineProperty(Entities, 'ouml', {
    get: Entities$ouml_getInstance
  });
  Object.defineProperty(Entities, 'divide', {
    get: Entities$divide_getInstance
  });
  Object.defineProperty(Entities, 'oslash', {
    get: Entities$oslash_getInstance
  });
  Object.defineProperty(Entities, 'ugrave', {
    get: Entities$ugrave_getInstance
  });
  Object.defineProperty(Entities, 'uacute', {
    get: Entities$uacute_getInstance
  });
  Object.defineProperty(Entities, 'ucirc', {
    get: Entities$ucirc_getInstance
  });
  Object.defineProperty(Entities, 'uuml', {
    get: Entities$uuml_getInstance
  });
  Object.defineProperty(Entities, 'yacute', {
    get: Entities$yacute_getInstance
  });
  Object.defineProperty(Entities, 'thorn', {
    get: Entities$thorn_getInstance
  });
  Object.defineProperty(Entities, 'yuml', {
    get: Entities$yuml_getInstance
  });
  package$html.Entities = Entities;
  Object.defineProperty(Dir, 'ltr', {
    get: Dir$ltr_getInstance
  });
  Object.defineProperty(Dir, 'rtl', {
    get: Dir$rtl_getInstance
  });
  package$html.Dir = Dir;
  Object.defineProperty(package$html, 'dirValues_8be2vx$', {
    get: function () {
      return dirValues;
    }
  });
  Object.defineProperty(Draggable, 'htmlTrue', {
    get: Draggable$htmlTrue_getInstance
  });
  Object.defineProperty(Draggable, 'htmlFalse', {
    get: Draggable$htmlFalse_getInstance
  });
  Object.defineProperty(Draggable, 'auto', {
    get: Draggable$auto_getInstance
  });
  Object.defineProperty(package$html, 'draggableValues_8be2vx$', {
    get: function () {
      return draggableValues;
    }
  });
  Object.defineProperty(RunAt, 'server', {
    get: RunAt$server_getInstance
  });
  package$html.RunAt = RunAt;
  Object.defineProperty(package$html, 'runAtValues_8be2vx$', {
    get: function () {
      return runAtValues;
    }
  });
  Object.defineProperty(package$html, 'ATarget', {
    get: ATarget_getInstance
  });
  Object.defineProperty(package$html, 'ARel', {
    get: ARel_getInstance
  });
  Object.defineProperty(package$html, 'AType', {
    get: AType_getInstance
  });
  Object.defineProperty(AreaShape, 'rect', {
    get: AreaShape$rect_getInstance
  });
  Object.defineProperty(AreaShape, 'circle', {
    get: AreaShape$circle_getInstance
  });
  Object.defineProperty(AreaShape, 'poly', {
    get: AreaShape$poly_getInstance
  });
  Object.defineProperty(AreaShape, 'default', {
    get: AreaShape$default_getInstance
  });
  package$html.AreaShape = AreaShape;
  Object.defineProperty(package$html, 'areaShapeValues_8be2vx$', {
    get: function () {
      return areaShapeValues;
    }
  });
  Object.defineProperty(package$html, 'AreaTarget', {
    get: AreaTarget_getInstance
  });
  Object.defineProperty(package$html, 'AreaRel', {
    get: AreaRel_getInstance
  });
  Object.defineProperty(package$html, 'BaseTarget', {
    get: BaseTarget_getInstance
  });
  Object.defineProperty(ButtonFormEncType, 'multipartFormData', {
    get: ButtonFormEncType$multipartFormData_getInstance
  });
  Object.defineProperty(ButtonFormEncType, 'applicationXWwwFormUrlEncoded', {
    get: ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance
  });
  Object.defineProperty(ButtonFormEncType, 'textPlain', {
    get: ButtonFormEncType$textPlain_getInstance
  });
  package$html.ButtonFormEncType = ButtonFormEncType;
  Object.defineProperty(package$html, 'buttonFormEncTypeValues_8be2vx$', {
    get: function () {
      return buttonFormEncTypeValues;
    }
  });
  Object.defineProperty(ButtonFormMethod, 'get', {
    get: ButtonFormMethod$get_getInstance
  });
  Object.defineProperty(ButtonFormMethod, 'post', {
    get: ButtonFormMethod$post_getInstance
  });
  Object.defineProperty(ButtonFormMethod, 'put', {
    get: ButtonFormMethod$put_getInstance
  });
  Object.defineProperty(ButtonFormMethod, 'delete', {
    get: ButtonFormMethod$delete_getInstance
  });
  Object.defineProperty(ButtonFormMethod, 'patch', {
    get: ButtonFormMethod$patch_getInstance
  });
  package$html.ButtonFormMethod = ButtonFormMethod;
  Object.defineProperty(package$html, 'buttonFormMethodValues_8be2vx$', {
    get: function () {
      return buttonFormMethodValues;
    }
  });
  Object.defineProperty(package$html, 'ButtonFormTarget', {
    get: ButtonFormTarget_getInstance
  });
  Object.defineProperty(ButtonType, 'button', {
    get: ButtonType$button_getInstance
  });
  Object.defineProperty(ButtonType, 'reset', {
    get: ButtonType$reset_getInstance
  });
  Object.defineProperty(ButtonType, 'submit', {
    get: ButtonType$submit_getInstance
  });
  package$html.ButtonType = ButtonType;
  Object.defineProperty(package$html, 'buttonTypeValues_8be2vx$', {
    get: function () {
      return buttonTypeValues;
    }
  });
  Object.defineProperty(CommandType, 'command', {
    get: CommandType$command_getInstance
  });
  Object.defineProperty(CommandType, 'checkBox', {
    get: CommandType$checkBox_getInstance
  });
  Object.defineProperty(CommandType, 'radio', {
    get: CommandType$radio_getInstance
  });
  package$html.CommandType = CommandType;
  Object.defineProperty(package$html, 'commandTypeValues_8be2vx$', {
    get: function () {
      return commandTypeValues;
    }
  });
  Object.defineProperty(FormEncType, 'multipartFormData', {
    get: FormEncType$multipartFormData_getInstance
  });
  Object.defineProperty(FormEncType, 'applicationXWwwFormUrlEncoded', {
    get: FormEncType$applicationXWwwFormUrlEncoded_getInstance
  });
  Object.defineProperty(FormEncType, 'textPlain', {
    get: FormEncType$textPlain_getInstance
  });
  package$html.FormEncType = FormEncType;
  Object.defineProperty(package$html, 'formEncTypeValues_8be2vx$', {
    get: function () {
      return formEncTypeValues;
    }
  });
  Object.defineProperty(FormMethod, 'get', {
    get: FormMethod$get_getInstance
  });
  Object.defineProperty(FormMethod, 'post', {
    get: FormMethod$post_getInstance
  });
  Object.defineProperty(FormMethod, 'put', {
    get: FormMethod$put_getInstance
  });
  Object.defineProperty(FormMethod, 'delete', {
    get: FormMethod$delete_getInstance
  });
  Object.defineProperty(FormMethod, 'patch', {
    get: FormMethod$patch_getInstance
  });
  package$html.FormMethod = FormMethod;
  Object.defineProperty(package$html, 'formMethodValues_8be2vx$', {
    get: function () {
      return formMethodValues;
    }
  });
  Object.defineProperty(package$html, 'FormTarget', {
    get: FormTarget_getInstance
  });
  Object.defineProperty(package$html, 'IframeName', {
    get: IframeName_getInstance
  });
  Object.defineProperty(IframeSandbox, 'allowSameOrigin', {
    get: IframeSandbox$allowSameOrigin_getInstance
  });
  Object.defineProperty(IframeSandbox, 'allowFormS', {
    get: IframeSandbox$allowFormS_getInstance
  });
  Object.defineProperty(IframeSandbox, 'allowScripts', {
    get: IframeSandbox$allowScripts_getInstance
  });
  package$html.IframeSandbox = IframeSandbox;
  Object.defineProperty(package$html, 'iframeSandboxValues_8be2vx$', {
    get: function () {
      return iframeSandboxValues;
    }
  });
  Object.defineProperty(InputType, 'button', {
    get: InputType$button_getInstance
  });
  Object.defineProperty(InputType, 'checkBox', {
    get: InputType$checkBox_getInstance
  });
  Object.defineProperty(InputType, 'color', {
    get: InputType$color_getInstance
  });
  Object.defineProperty(InputType, 'date', {
    get: InputType$date_getInstance
  });
  Object.defineProperty(InputType, 'dateTime', {
    get: InputType$dateTime_getInstance
  });
  Object.defineProperty(InputType, 'dateTimeLocal', {
    get: InputType$dateTimeLocal_getInstance
  });
  Object.defineProperty(InputType, 'email', {
    get: InputType$email_getInstance
  });
  Object.defineProperty(InputType, 'file', {
    get: InputType$file_getInstance
  });
  Object.defineProperty(InputType, 'hidden', {
    get: InputType$hidden_getInstance
  });
  Object.defineProperty(InputType, 'image', {
    get: InputType$image_getInstance
  });
  Object.defineProperty(InputType, 'month', {
    get: InputType$month_getInstance
  });
  Object.defineProperty(InputType, 'number', {
    get: InputType$number_getInstance
  });
  Object.defineProperty(InputType, 'password', {
    get: InputType$password_getInstance
  });
  Object.defineProperty(InputType, 'radio', {
    get: InputType$radio_getInstance
  });
  Object.defineProperty(InputType, 'range', {
    get: InputType$range_getInstance
  });
  Object.defineProperty(InputType, 'reset', {
    get: InputType$reset_getInstance
  });
  Object.defineProperty(InputType, 'search', {
    get: InputType$search_getInstance
  });
  Object.defineProperty(InputType, 'submit', {
    get: InputType$submit_getInstance
  });
  Object.defineProperty(InputType, 'text', {
    get: InputType$text_getInstance
  });
  Object.defineProperty(InputType, 'tel', {
    get: InputType$tel_getInstance
  });
  Object.defineProperty(InputType, 'time', {
    get: InputType$time_getInstance
  });
  Object.defineProperty(InputType, 'url', {
    get: InputType$url_getInstance
  });
  Object.defineProperty(InputType, 'week', {
    get: InputType$week_getInstance
  });
  package$html.InputType = InputType;
  Object.defineProperty(package$html, 'inputTypeValues_8be2vx$', {
    get: function () {
      return inputTypeValues;
    }
  });
  Object.defineProperty(InputFormEncType, 'multipartFormData', {
    get: InputFormEncType$multipartFormData_getInstance
  });
  Object.defineProperty(InputFormEncType, 'applicationXWwwFormUrlEncoded', {
    get: InputFormEncType$applicationXWwwFormUrlEncoded_getInstance
  });
  Object.defineProperty(InputFormEncType, 'textPlain', {
    get: InputFormEncType$textPlain_getInstance
  });
  package$html.InputFormEncType = InputFormEncType;
  Object.defineProperty(package$html, 'inputFormEncTypeValues_8be2vx$', {
    get: function () {
      return inputFormEncTypeValues;
    }
  });
  Object.defineProperty(InputFormMethod, 'get', {
    get: InputFormMethod$get_getInstance
  });
  Object.defineProperty(InputFormMethod, 'post', {
    get: InputFormMethod$post_getInstance
  });
  Object.defineProperty(InputFormMethod, 'put', {
    get: InputFormMethod$put_getInstance
  });
  Object.defineProperty(InputFormMethod, 'delete', {
    get: InputFormMethod$delete_getInstance
  });
  Object.defineProperty(InputFormMethod, 'patch', {
    get: InputFormMethod$patch_getInstance
  });
  package$html.InputFormMethod = InputFormMethod;
  Object.defineProperty(package$html, 'inputFormMethodValues_8be2vx$', {
    get: function () {
      return inputFormMethodValues;
    }
  });
  Object.defineProperty(package$html, 'InputFormTarget', {
    get: InputFormTarget_getInstance
  });
  Object.defineProperty(KeyGenKeyType, 'rsa', {
    get: KeyGenKeyType$rsa_getInstance
  });
  package$html.KeyGenKeyType = KeyGenKeyType;
  Object.defineProperty(package$html, 'keyGenKeyTypeValues_8be2vx$', {
    get: function () {
      return keyGenKeyTypeValues;
    }
  });
  Object.defineProperty(package$html, 'LinkRel', {
    get: LinkRel_getInstance
  });
  Object.defineProperty(package$html, 'LinkMedia', {
    get: LinkMedia_getInstance
  });
  Object.defineProperty(package$html, 'LinkType', {
    get: LinkType_getInstance
  });
  Object.defineProperty(package$html, 'MetaHttpEquiv', {
    get: MetaHttpEquiv_getInstance
  });
  Object.defineProperty(package$html, 'ObjectName', {
    get: ObjectName_getInstance
  });
  Object.defineProperty(package$html, 'ScriptType', {
    get: ScriptType_getInstance
  });
  Object.defineProperty(package$html, 'StyleType', {
    get: StyleType_getInstance
  });
  Object.defineProperty(package$html, 'StyleMedia', {
    get: StyleMedia_getInstance
  });
  Object.defineProperty(TextAreaWrap, 'hard', {
    get: TextAreaWrap$hard_getInstance
  });
  Object.defineProperty(TextAreaWrap, 'soft', {
    get: TextAreaWrap$soft_getInstance
  });
  package$html.TextAreaWrap = TextAreaWrap;
  Object.defineProperty(package$html, 'textAreaWrapValues_8be2vx$', {
    get: function () {
      return textAreaWrapValues;
    }
  });
  Object.defineProperty(ThScope, 'col', {
    get: ThScope$col_getInstance
  });
  Object.defineProperty(ThScope, 'colGroup', {
    get: ThScope$colGroup_getInstance
  });
  Object.defineProperty(ThScope, 'row', {
    get: ThScope$row_getInstance
  });
  Object.defineProperty(ThScope, 'rowGroup', {
    get: ThScope$rowGroup_getInstance
  });
  package$html.ThScope = ThScope;
  Object.defineProperty(package$html, 'thScopeValues_8be2vx$', {
    get: function () {
      return thScopeValues;
    }
  });
  package$html.CommonAttributeGroupFacadeFlowHeadingContent = CommonAttributeGroupFacadeFlowHeadingContent;
  package$html.CommonAttributeGroupFacadeFlowHeadingPhrasingContent = CommonAttributeGroupFacadeFlowHeadingPhrasingContent;
  package$html.CommonAttributeGroupFacadeFlowInteractiveContent = CommonAttributeGroupFacadeFlowInteractiveContent;
  package$html.CommonAttributeGroupFacadeFlowInteractivePhrasingContent = CommonAttributeGroupFacadeFlowInteractivePhrasingContent;
  package$html.CommonAttributeGroupFacadeFlowMetaDataContent = CommonAttributeGroupFacadeFlowMetaDataContent;
  package$html.CommonAttributeGroupFacadeFlowMetaDataPhrasingContent = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent;
  package$html.HtmlBlockInlineTag = HtmlBlockInlineTag;
  package$html.CommonAttributeGroupFacadeFlowPhrasingSectioningContent = CommonAttributeGroupFacadeFlowPhrasingSectioningContent;
  package$html.CommonAttributeGroupFacadeFlowSectioningContent = CommonAttributeGroupFacadeFlowSectioningContent;
  package$html.FlowInteractiveContent = FlowInteractiveContent;
  package$html.FlowInteractivePhrasingContent = FlowInteractivePhrasingContent;
  package$html.FlowMetaDataContent = FlowMetaDataContent;
  package$html.FlowMetaDataPhrasingContent = FlowMetaDataPhrasingContent;
  package$html.FlowPhrasingContent = FlowPhrasingContent;
  package$html.HtmlBlockTag = HtmlBlockTag;
  package$html.HtmlHeadTag = HtmlHeadTag;
  package$html.HtmlInlineTag = HtmlInlineTag;
  package$html.FlowContent = FlowContent;
  package$html.HeadingContent = HeadingContent;
  package$html.InteractiveContent = InteractiveContent;
  package$html.MetaDataContent = MetaDataContent;
  package$html.PhrasingContent = PhrasingContent;
  package$html.SectioningContent = SectioningContent;
  package$html.address_qlk71o$ = address_0;
  package$html.blockQuote_1wgk0f$ = blockQuote_0;
  package$html.dialog_3ow4zc$ = dialog_0;
  package$html.div_ri36nr$ = div_0;
  package$html.dl_rgoo3s$ = dl_0;
  package$html.fieldSet_27mjzc$ = fieldSet_0;
  package$html.figure_a31wtg$ = figure_0;
  package$html.figcaption_9k1xeq$ = figcaption_0;
  package$html.footer_780ap1$ = footer_0;
  package$html.form_3vb3wm$ = form_0;
  package$html.getForm_mq1sio$ = getForm;
  package$html.postForm_mq1sio$ = postForm;
  package$html.putForm_mq1sio$ = putForm;
  package$html.deleteForm_mq1sio$ = deleteForm;
  package$html.patchForm_mq1sio$ = patchForm;
  package$html.header_8btlf7$ = header_0;
  package$html.hr_17yvwq$ = hr_0;
  package$html.ol_5m90gt$ = ol_0;
  package$html.p_8pggrc$ = p_0;
  package$html.pre_pcyp7f$ = pre_0;
  package$html.summary_5qluq$ = summary_0;
  package$html.table_dmqmme$ = table_0;
  package$html.ul_pzlyaf$ = ul_0;
  package$html.base_5vco8i$ = base_0;
  package$html.title_4dzm4m$ = title_1;
  package$html.title_3v9ivn$ = title_2;
  package$html.FlowOrMetaDataOrPhrasingContent = FlowOrMetaDataOrPhrasingContent;
  package$html.FlowOrHeadingContent = FlowOrHeadingContent;
  package$html.FlowOrMetaDataContent = FlowOrMetaDataContent;
  package$html.FlowOrInteractiveContent = FlowOrInteractiveContent;
  package$html.FlowOrPhrasingContent = FlowOrPhrasingContent;
  package$html.SectioningOrFlowContent = SectioningOrFlowContent;
  package$html.FlowOrInteractiveOrPhrasingContent = FlowOrInteractiveOrPhrasingContent;
  package$html.command_187x66$ = command_0;
  package$html.commandCommand_95cwa0$ = commandCommand;
  package$html.checkBoxCommand_95cwa0$ = checkBoxCommand;
  package$html.radioCommand_95cwa0$ = radioCommand;
  package$html.link_ycifyz$ = link_0;
  package$html.meta_e5p47k$ = meta_0;
  package$html.noScript_e19b6x$ = noScript_0;
  package$html.script_1ahzd7$ = script_1;
  package$html.script_sv640z$ = script_2;
  package$html.h1_vmej1w$ = h1_0;
  package$html.h2_eh5gi3$ = h2_0;
  package$html.h3_agelx2$ = h3_0;
  package$html.h4_zdyoc7$ = h4_0;
  package$html.h5_aplb7s$ = h5_0;
  package$html.h6_e7yr7d$ = h6_0;
  package$html.hGroup_sxozs2$ = hGroup_0;
  package$html.style_st6e4p$ = style_1;
  package$html.style_6skwa3$ = style_2;
  package$html.details_d9zf4h$ = details_0;
  package$html.abbr_2n6hpy$ = abbr_0;
  package$html.area_sgglka$ = area_0;
  package$html.rectArea_oj03en$ = rectArea;
  package$html.circleArea_oj03en$ = circleArea;
  package$html.polyArea_oj03en$ = polyArea;
  package$html.defaultArea_oj03en$ = defaultArea;
  package$html.b_r0mnq7$ = b_0;
  package$html.bdi_le8e1m$ = bdi_0;
  package$html.bdo_dv43h0$ = bdo_0;
  package$html.br_5bz84p$ = br_0;
  package$html.canvas_dwb9fz$ = canvas_1;
  package$html.canvas_jd2cqk$ = canvas_2;
  package$html.cite_3ozg0$ = cite_0;
  package$html.code_en26pm$ = code_0;
  package$html.dataList_o7wjj3$ = dataList_0;
  package$html.del_iothfu$ = del_0;
  package$html.dfn_ax4ydx$ = dfn_0;
  package$html.em_2lgk3j$ = em_0;
  package$html.i_5g1p9k$ = i_0;
  package$html.ins_g1dqgd$ = ins_0;
  package$html.kbd_18bd9o$ = kbd_0;
  package$html.map_km2leq$ = map_0;
  package$html.mark_zaxnru$ = mark_0;
  package$html.math_f2p7j5$ = math_0;
  package$html.meter_8zh648$ = meter_0;
  package$html.output_ttsfoa$ = output_0;
  package$html.progress_6mi6o6$ = progress_0;
  package$html.q_86txao$ = q_0;
  package$html.ruby_wobulv$ = ruby_0;
  package$html.samp_wmuy2y$ = samp_0;
  package$html.small_69ofui$ = small_0;
  package$html.span_6djfml$ = span_0;
  package$html.strong_okpg28$ = strong_0;
  package$html.sub_u07n5t$ = sub_0;
  package$html.sup_yx52tp$ = sup_0;
  package$html.svg_f6i49v$ = svg_1;
  package$html.svg_jd2cqk$ = svg_2;
  package$html.time_80zgyi$ = time_0;
  package$html.htmlVar_ycyb16$ = htmlVar_0;
  package$html.article_hpv6ge$ = article_0;
  package$html.aside_3uzs4w$ = aside_0;
  package$html.main_m1e3ev$ = main_0;
  package$html.nav_19d8h1$ = nav_0;
  package$html.section_ac1jhf$ = section_0;
  package$html.a_gu26kr$ = a_0;
  package$html.audio_hb8i2y$ = audio_0;
  package$html.button_i4xb7r$ = button_0;
  package$html.getButton_2rocz3$ = getButton;
  package$html.postButton_2rocz3$ = postButton;
  package$html.putButton_2rocz3$ = putButton;
  package$html.deleteButton_2rocz3$ = deleteButton;
  package$html.patchButton_2rocz3$ = patchButton;
  package$html.embed_l7ro7h$ = embed_0;
  package$html.iframe_rz24s4$ = iframe_1;
  package$html.iframe_9ubjn9$ = iframe_2;
  package$html.allowSameOriginIframe_yk32s8$ = allowSameOriginIframe;
  package$html.allowFormSIframe_yk32s8$ = allowFormSIframe;
  package$html.allowScriptsIframe_yk32s8$ = allowScriptsIframe;
  package$html.allowSameOriginIframe_lm6cex$ = allowSameOriginIframe_0;
  package$html.allowFormSIframe_lm6cex$ = allowFormSIframe_0;
  package$html.allowScriptsIframe_lm6cex$ = allowScriptsIframe_0;
  package$html.img_evw26v$ = img_0;
  package$html.picture_gdyy1b$ = picture_0;
  package$html.input_e1g74z$ = input_0;
  package$html.buttonInput_ap9uf6$ = buttonInput;
  package$html.checkBoxInput_ap9uf6$ = checkBoxInput;
  package$html.colorInput_ap9uf6$ = colorInput;
  package$html.dateInput_ap9uf6$ = dateInput;
  package$html.dateTimeInput_ap9uf6$ = dateTimeInput;
  package$html.dateTimeLocalInput_ap9uf6$ = dateTimeLocalInput;
  package$html.emailInput_ap9uf6$ = emailInput;
  package$html.fileInput_ap9uf6$ = fileInput;
  package$html.hiddenInput_ap9uf6$ = hiddenInput;
  package$html.imageInput_ap9uf6$ = imageInput;
  package$html.monthInput_ap9uf6$ = monthInput;
  package$html.numberInput_ap9uf6$ = numberInput;
  package$html.passwordInput_ap9uf6$ = passwordInput;
  package$html.radioInput_ap9uf6$ = radioInput;
  package$html.rangeInput_ap9uf6$ = rangeInput;
  package$html.resetInput_ap9uf6$ = resetInput;
  package$html.searchInput_ap9uf6$ = searchInput;
  package$html.submitInput_ap9uf6$ = submitInput;
  package$html.textInput_ap9uf6$ = textInput;
  package$html.telInput_ap9uf6$ = telInput;
  package$html.timeInput_ap9uf6$ = timeInput;
  package$html.urlInput_ap9uf6$ = urlInput;
  package$html.weekInput_ap9uf6$ = weekInput;
  package$html.keyGen_h5okci$ = keyGen_0;
  package$html.rsaKeyGen_7fxx9n$ = rsaKeyGen;
  package$html.label_yd75js$ = label_0;
  package$html.htmlObject_lbhlz7$ = htmlObject_0;
  package$html.select_9klr40$ = select_0;
  package$html.textArea_b1tfd9$ = textArea_1;
  package$html.textArea_n0vc64$ = textArea_2;
  package$html.hardTextArea_skdnmm$ = hardTextArea;
  package$html.softTextArea_skdnmm$ = softTextArea;
  package$html.hardTextArea_p7xx2x$ = hardTextArea_0;
  package$html.softTextArea_p7xx2x$ = softTextArea_0;
  package$html.video_qpg29b$ = video_0;
  package$html.A = A;
  package$html.get_asFlowContent_lkq316$ = get_asFlowContent;
  package$html.get_asInteractiveContent_lkq316$ = get_asInteractiveContent;
  package$html.get_asPhrasingContent_lkq316$ = get_asPhrasingContent;
  package$html.ABBR = ABBR;
  package$html.get_asFlowContent_2hkfki$ = get_asFlowContent_0;
  package$html.get_asPhrasingContent_2hkfki$ = get_asPhrasingContent_0;
  package$html.ADDRESS = ADDRESS;
  package$html.AREA = AREA;
  package$html.get_asFlowContent_2hup6e$ = get_asFlowContent_1;
  package$html.get_asPhrasingContent_2hup6e$ = get_asPhrasingContent_1;
  package$html.ARTICLE = ARTICLE;
  package$html.get_asFlowContent_6gvbq3$ = get_asFlowContent_2;
  package$html.get_asSectioningContent_6gvbq3$ = get_asSectioningContent;
  package$html.ASIDE = ASIDE;
  package$html.get_asFlowContent_6cy1ur$ = get_asFlowContent_3;
  package$html.get_asSectioningContent_6cy1ur$ = get_asSectioningContent_0;
  package$html.AUDIO = AUDIO;
  package$html.source_73nwfk$ = source_0;
  package$html.get_asFlowContent_6dyk1x$ = get_asFlowContent_4;
  package$html.get_asInteractiveContent_6dyk1x$ = get_asInteractiveContent_0;
  package$html.get_asPhrasingContent_6dyk1x$ = get_asPhrasingContent_2;
  package$html.B = B;
  package$html.get_asFlowContent_lkq321$ = get_asFlowContent_5;
  package$html.get_asPhrasingContent_lkq321$ = get_asPhrasingContent_3;
  package$html.BASE = BASE;
  package$html.BDI = BDI;
  package$html.get_asFlowContent_6sjyb0$ = get_asFlowContent_6;
  package$html.get_asPhrasingContent_6sjyb0$ = get_asPhrasingContent_4;
  package$html.BDO = BDO;
  package$html.get_asFlowContent_6sjy5u$ = get_asFlowContent_7;
  package$html.get_asPhrasingContent_6sjy5u$ = get_asPhrasingContent_5;
  package$html.BLOCKQUOTE = BLOCKQUOTE;
  package$html.BODY = BODY;
  package$html.BR = BR;
  package$html.get_asFlowContent_tkg5ub$ = get_asFlowContent_8;
  package$html.get_asPhrasingContent_tkg5ub$ = get_asPhrasingContent_6;
  package$html.BUTTON = BUTTON;
  package$html.get_asFlowContent_56uxb$ = get_asFlowContent_9;
  package$html.get_asInteractiveContent_56uxb$ = get_asInteractiveContent_1;
  package$html.get_asPhrasingContent_56uxb$ = get_asPhrasingContent_7;
  package$html.CANVAS = CANVAS;
  package$html.get_asFlowContent_4z17kb$ = get_asFlowContent_10;
  package$html.get_asPhrasingContent_4z17kb$ = get_asPhrasingContent_8;
  package$html.CAPTION = CAPTION;
  package$html.CITE = CITE;
  package$html.get_asFlowContent_2isup8$ = get_asFlowContent_11;
  package$html.get_asPhrasingContent_2isup8$ = get_asPhrasingContent_9;
  package$html.CODE = CODE;
  package$html.get_asFlowContent_2iwcra$ = get_asFlowContent_12;
  package$html.get_asPhrasingContent_2iwcra$ = get_asPhrasingContent_10;
  package$html.COL = COL;
  package$html.COLGROUP = COLGROUP;
  package$html.col_bjbitg$ = col_0;
  package$html.COMMAND = COMMAND;
  package$html.get_asFlowContent_3w1cts$ = get_asFlowContent_13;
  package$html.get_asMetaDataContent_3w1cts$ = get_asMetaDataContent;
  package$html.get_asPhrasingContent_3w1cts$ = get_asPhrasingContent_11;
  package$html.DATALIST = DATALIST;
  package$html.option_uctrsw$ = option_1;
  package$html.option_j20sia$ = option_2;
  package$html.get_asFlowContent_2i51lx$ = get_asFlowContent_14;
  package$html.get_asPhrasingContent_2i51lx$ = get_asPhrasingContent_12;
  package$html.DD = DD;
  package$html.DEL = DEL;
  package$html.get_asFlowContent_6sinio$ = get_asFlowContent_15;
  package$html.get_asPhrasingContent_6sinio$ = get_asPhrasingContent_13;
  package$html.DETAILS = DETAILS;
  package$html.legend_vwmtm2$ = legend_0;
  package$html.get_asFlowContent_v4s00p$ = get_asFlowContent_16;
  package$html.get_asInteractiveContent_v4s00p$ = get_asInteractiveContent_2;
  package$html.DFN = DFN;
  package$html.get_asFlowContent_6simq9$ = get_asFlowContent_17;
  package$html.get_asPhrasingContent_6simq9$ = get_asPhrasingContent_14;
  package$html.DIALOG = DIALOG;
  package$html.DIV = DIV;
  package$html.DL = DL;
  package$html.dd_xoxdrp$ = dd_0;
  package$html.dt_a2ff2z$ = dt_0;
  package$html.DT = DT;
  package$html.EM = EM;
  package$html.get_asFlowContent_tkg7y3$ = get_asFlowContent_18;
  package$html.get_asPhrasingContent_tkg7y3$ = get_asPhrasingContent_15;
  package$html.EMBED = EMBED;
  package$html.get_asFlowContent_85pboi$ = get_asFlowContent_19;
  package$html.get_asInteractiveContent_85pboi$ = get_asInteractiveContent_3;
  package$html.get_asPhrasingContent_85pboi$ = get_asPhrasingContent_16;
  package$html.FIELDSET = FIELDSET;
  package$html.legend_xzrxko$ = legend_1;
  package$html.FIGCAPTION = FIGCAPTION;
  package$html.FIGURE = FIGURE;
  package$html.legend_pujkak$ = legend_2;
  package$html.figcaption_8j2zdd$ = figcaption_1;
  package$html.FOOTER = FOOTER;
  package$html.FORM = FORM;
  package$html.H1 = H1;
  package$html.H2 = H2;
  package$html.H3 = H3;
  package$html.H4 = H4;
  package$html.H5 = H5;
  package$html.H6 = H6;
  package$html.HEAD = HEAD;
  package$html.HEADER = HEADER;
  package$html.HGROUP = HGROUP;
  package$html.h1_31khfp$ = h1_1;
  package$html.h2_rz4juu$ = h2_1;
  package$html.h3_i4ffp5$ = h3_1;
  package$html.h4_6t4mq0$ = h4_1;
  package$html.h5_vqop55$ = h5_1;
  package$html.h6_ecvaeu$ = h6_1;
  package$html.get_asFlowContent_a89fak$ = get_asFlowContent_20;
  package$html.get_asHeadingContent_a89fak$ = get_asHeadingContent;
  package$html.HR = HR;
  package$html.HTML = HTML;
  package$html.body_qwuuhi$ = body_0;
  package$html.head_cwj6vx$ = head_1;
  package$html.head_9xpsyi$ = head_2;
  package$html.I = I;
  package$html.get_asFlowContent_lkq382$ = get_asFlowContent_21;
  package$html.get_asPhrasingContent_lkq382$ = get_asPhrasingContent_17;
  package$html.IFRAME = IFRAME;
  package$html.get_asFlowContent_ofcz3z$ = get_asFlowContent_22;
  package$html.get_asInteractiveContent_ofcz3z$ = get_asInteractiveContent_4;
  package$html.get_asPhrasingContent_ofcz3z$ = get_asPhrasingContent_18;
  package$html.IMG = IMG;
  package$html.get_asFlowContent_6sfars$ = get_asFlowContent_23;
  package$html.get_asInteractiveContent_6sfars$ = get_asInteractiveContent_5;
  package$html.get_asPhrasingContent_6sfars$ = get_asPhrasingContent_19;
  package$html.INPUT = INPUT;
  package$html.get_asFlowContent_a2ovwx$ = get_asFlowContent_24;
  package$html.get_asInteractiveContent_a2ovwx$ = get_asInteractiveContent_6;
  package$html.get_asPhrasingContent_a2ovwx$ = get_asPhrasingContent_20;
  package$html.INS = INS;
  package$html.get_asFlowContent_6sf9qr$ = get_asFlowContent_25;
  package$html.get_asPhrasingContent_6sf9qr$ = get_asPhrasingContent_21;
  package$html.KBD = KBD;
  package$html.get_asFlowContent_6se90y$ = get_asFlowContent_26;
  package$html.get_asPhrasingContent_6se90y$ = get_asPhrasingContent_22;
  package$html.KEYGEN = KEYGEN;
  package$html.get_asFlowContent_hm1wge$ = get_asFlowContent_27;
  package$html.get_asInteractiveContent_hm1wge$ = get_asInteractiveContent_7;
  package$html.get_asPhrasingContent_hm1wge$ = get_asPhrasingContent_23;
  package$html.LABEL = LABEL;
  package$html.get_asFlowContent_baf5if$ = get_asFlowContent_28;
  package$html.get_asInteractiveContent_baf5if$ = get_asInteractiveContent_8;
  package$html.get_asPhrasingContent_baf5if$ = get_asPhrasingContent_24;
  package$html.LEGEND = LEGEND;
  package$html.get_asFlowContent_37l0ga$ = get_asFlowContent_29;
  package$html.get_asPhrasingContent_37l0ga$ = get_asPhrasingContent_25;
  package$html.LI = LI;
  package$html.LINK = LINK;
  package$html.get_asFlowContent_2nqvqh$ = get_asFlowContent_30;
  package$html.get_asMetaDataContent_2nqvqh$ = get_asMetaDataContent_0;
  package$html.get_asPhrasingContent_2nqvqh$ = get_asPhrasingContent_26;
  package$html.MAIN = MAIN;
  package$html.MAP = MAP;
  package$html.get_asFlowContent_6sczi9$ = get_asFlowContent_31;
  package$html.get_asPhrasingContent_6sczi9$ = get_asPhrasingContent_27;
  package$html.MARK = MARK;
  package$html.get_asFlowContent_2o5nee$ = get_asFlowContent_32;
  package$html.get_asPhrasingContent_2o5nee$ = get_asPhrasingContent_28;
  package$html.MATH = MATH;
  package$html.get_asFlowContent_2o5ot7$ = get_asFlowContent_33;
  package$html.get_asPhrasingContent_2o5ot7$ = get_asPhrasingContent_29;
  package$html.MATHML = MATHML;
  package$html.META = META;
  package$html.get_asFlowContent_2o88la$ = get_asFlowContent_34;
  package$html.get_asMetaDataContent_2o88la$ = get_asMetaDataContent_1;
  package$html.get_asPhrasingContent_2o88la$ = get_asPhrasingContent_30;
  package$html.METER = METER;
  package$html.get_asFlowContent_btzg6q$ = get_asFlowContent_35;
  package$html.get_asPhrasingContent_btzg6q$ = get_asPhrasingContent_31;
  package$html.NAV = NAV;
  package$html.get_asFlowContent_6sccdk$ = get_asFlowContent_36;
  package$html.get_asSectioningContent_6sccdk$ = get_asSectioningContent_1;
  package$html.NOSCRIPT = NOSCRIPT;
  package$html.get_asFlowContent_hfcz9z$ = get_asFlowContent_37;
  package$html.get_asMetaDataContent_hfcz9z$ = get_asMetaDataContent_2;
  package$html.get_asPhrasingContent_hfcz9z$ = get_asPhrasingContent_32;
  package$html.OBJECT = OBJECT;
  package$html.param_8fkg42$ = param_0;
  package$html.get_asFlowContent_vkzwxo$ = get_asFlowContent_38;
  package$html.get_asInteractiveContent_vkzwxo$ = get_asInteractiveContent_9;
  package$html.get_asPhrasingContent_vkzwxo$ = get_asPhrasingContent_33;
  package$html.OL = OL;
  package$html.li_nemw19$ = li_0;
  package$html.OPTGROUP = OPTGROUP;
  package$html.option_z52iho$ = option_3;
  package$html.option_84jv0q$ = option_4;
  package$html.OPTION = OPTION;
  package$html.OUTPUT = OUTPUT;
  package$html.get_asFlowContent_mffrb2$ = get_asFlowContent_39;
  package$html.get_asPhrasingContent_mffrb2$ = get_asPhrasingContent_34;
  package$html.P = P;
  package$html.get_asFlowContent_lkq3e3$ = get_asFlowContent_40;
  package$html.get_asPhrasingContent_lkq3e3$ = get_asPhrasingContent_35;
  package$html.PARAM = PARAM;
  package$html.PICTURE = PICTURE;
  package$html.source_hwod20$ = source_1;
  package$html.img_ue7a3y$ = img_1;
  package$html.get_asFlowContent_1s2sbh$ = get_asFlowContent_41;
  package$html.get_asInteractiveContent_1s2sbh$ = get_asInteractiveContent_10;
  package$html.get_asPhrasingContent_1s2sbh$ = get_asPhrasingContent_36;
  package$html.PRE = PRE;
  package$html.get_asFlowContent_6saq7c$ = get_asFlowContent_42;
  package$html.get_asPhrasingContent_6saq7c$ = get_asPhrasingContent_37;
  package$html.PROGRESS = PROGRESS;
  package$html.get_asFlowContent_cpgs6i$ = get_asFlowContent_43;
  package$html.get_asPhrasingContent_cpgs6i$ = get_asPhrasingContent_38;
  package$html.Q = Q;
  package$html.get_asFlowContent_lkq3ey$ = get_asFlowContent_44;
  package$html.get_asPhrasingContent_lkq3ey$ = get_asPhrasingContent_39;
  package$html.RP = RP;
  package$html.RT = RT;
  package$html.RUBY = RUBY;
  package$html.rt_kderwb$ = rt_0;
  package$html.rp_8bpft5$ = rp_0;
  package$html.get_asFlowContent_2r92kp$ = get_asFlowContent_45;
  package$html.get_asPhrasingContent_2r92kp$ = get_asPhrasingContent_40;
  package$html.SAMP = SAMP;
  package$html.get_asFlowContent_2rgbde$ = get_asFlowContent_46;
  package$html.get_asPhrasingContent_2rgbde$ = get_asPhrasingContent_41;
  package$html.SCRIPT = SCRIPT;
  package$html.get_asFlowContent_rq40oo$ = get_asFlowContent_47;
  package$html.get_asMetaDataContent_rq40oo$ = get_asMetaDataContent_3;
  package$html.get_asPhrasingContent_rq40oo$ = get_asPhrasingContent_42;
  package$html.SECTION = SECTION;
  package$html.get_asFlowContent_tj5cra$ = get_asFlowContent_48;
  package$html.get_asSectioningContent_tj5cra$ = get_asSectioningContent_2;
  package$html.SELECT = SELECT;
  package$html.option_xfiiwk$ = option_5;
  package$html.option_1u6wsa$ = option_6;
  package$html.optGroup_okqskg$ = optGroup_0;
  package$html.get_asFlowContent_sktobr$ = get_asFlowContent_49;
  package$html.get_asInteractiveContent_sktobr$ = get_asInteractiveContent_11;
  package$html.get_asPhrasingContent_sktobr$ = get_asPhrasingContent_43;
  package$html.SMALL = SMALL;
  package$html.get_asFlowContent_esbjlg$ = get_asFlowContent_50;
  package$html.get_asPhrasingContent_esbjlg$ = get_asPhrasingContent_44;
  package$html.SOURCE = SOURCE;
  package$html.SPAN = SPAN;
  package$html.get_asFlowContent_2rpn89$ = get_asFlowContent_51;
  package$html.get_asPhrasingContent_2rpn89$ = get_asPhrasingContent_45;
  package$html.STRONG = STRONG;
  package$html.get_asFlowContent_z94ogk$ = get_asFlowContent_52;
  package$html.get_asPhrasingContent_z94ogk$ = get_asPhrasingContent_46;
  package$html.STYLE = STYLE;
  package$html.get_asFlowContent_ewlf9m$ = get_asFlowContent_53;
  package$html.get_asMetaDataContent_ewlf9m$ = get_asMetaDataContent_4;
  package$html.SUB = SUB;
  package$html.get_asFlowContent_6s8r39$ = get_asFlowContent_54;
  package$html.get_asPhrasingContent_6s8r39$ = get_asPhrasingContent_47;
  package$html.SUMMARY = SUMMARY;
  package$html.SUP = SUP;
  package$html.get_asFlowContent_6s8qr7$ = get_asFlowContent_55;
  package$html.get_asPhrasingContent_6s8qr7$ = get_asPhrasingContent_48;
  package$html.SVG = SVG;
  package$html.get_asFlowContent_6s8q89$ = get_asFlowContent_56;
  package$html.get_asPhrasingContent_6s8q89$ = get_asPhrasingContent_49;
  package$html.TABLE = TABLE;
  package$html.caption_dcoxz5$ = caption_0;
  package$html.colGroup_ll6ybo$ = colGroup_0;
  package$html.thead_j1nulr$ = thead_0;
  package$html.tfoot_bp83sz$ = tfoot_0;
  package$html.tbody_cbte6n$ = tbody_0;
  package$html.tr_7wec05$ = tr_0;
  package$html.TBODY = TBODY;
  package$html.tr_tlv0jx$ = tr_1;
  package$html.TD = TD;
  package$html.TEXTAREA = TEXTAREA;
  package$html.get_asFlowContent_dtfm6v$ = get_asFlowContent_57;
  package$html.get_asInteractiveContent_dtfm6v$ = get_asInteractiveContent_12;
  package$html.get_asPhrasingContent_dtfm6v$ = get_asPhrasingContent_50;
  package$html.TFOOT = TFOOT;
  package$html.tr_7v6uah$ = tr_2;
  package$html.TH = TH;
  package$html.THEAD = THEAD;
  package$html.tr_lut1f9$ = tr_3;
  package$html.TIME = TIME;
  package$html.get_asFlowContent_2s57li$ = get_asFlowContent_58;
  package$html.get_asPhrasingContent_2s57li$ = get_asPhrasingContent_51;
  package$html.TITLE = TITLE;
  package$html.TR = TR;
  package$html.th_bncpyi$ = th_0;
  package$html.colTh_aq069j$ = colTh;
  package$html.colGroupTh_aq069j$ = colGroupTh;
  package$html.rowTh_aq069j$ = rowTh;
  package$html.rowGroupTh_aq069j$ = rowGroupTh;
  package$html.td_vlzo05$ = td_0;
  package$html.UL = UL;
  package$html.li_yzv5uh$ = li_1;
  package$html.VAR = VAR;
  package$html.get_asFlowContent_6s78ks$ = get_asFlowContent_59;
  package$html.get_asPhrasingContent_6s78ks$ = get_asPhrasingContent_52;
  package$html.VIDEO = VIDEO;
  package$html.source_bzm4az$ = source_2;
  package$html.get_asFlowContent_g5b08w$ = get_asFlowContent_60;
  package$html.get_asInteractiveContent_g5b08w$ = get_asInteractiveContent_13;
  package$html.get_asPhrasingContent_g5b08w$ = get_asPhrasingContent_53;
  package$html.HTMLTag = HTMLTag;
  package$consumers.TimedResult = TimedResult;
  package$consumers.get_out_bh6yji$ = get_out;
  package$consumers.measureTime_3mrk8e$ = measureTime;
  var package$stream = package$html.stream || (package$html.stream = {});
  package$stream.HTMLStreamBuilder = HTMLStreamBuilder;
  package$stream.createHTML_dqye30$ = createHTML;
  package$stream.appendHTML_94plub$ = appendHTML;
  package$stream.appendHTML_9kwp7w$ = appendHTML_0;
  package$consumers.TraceConsumer = TraceConsumer;
  package$consumers.trace_y1nvlf$ = trace;
  package$html.styleLink_hlvmud$ = styleLink;
  package$html.get_br_6s7ubj$ = get_br;
  var package$js = package$html.js || (package$html.js = {});
  package$js.legend_ax8bv3$ = legend_3;
  package$js.legEnd_ax8bv3$ = legEnd_3;
  package$js.htmlObject_mcv3un$ = htmlObject_1;
  package$js.object__mcv3un$ = object__1;
  package$js.htmlVar_h1qstf$ = htmlVar_1;
  package$js.var__h1qstf$ = var__1;
  var package$dom = package$html.dom || (package$html.dom = {});
  package$dom.JSDOMBuilder = JSDOMBuilder;
  package$dom.createTree_4wc2mh$ = createTree;
  package$dom.get_create_4wc2mh$ = get_create;
  package$dom.append_k9bwru$ = append;
  package$dom.prepend_k9bwru$ = prepend;
  package$dom.get_append_y4uc6z$ = get_append;
  package$dom.get_prepend_y4uc6z$ = get_prepend;
  package$js.a_5i6vd$ = a_1;
  package$js.abbr_y8m8ul$ = abbr_1;
  package$js.address_ywnrmy$ = address_1;
  package$js.area_78z5jz$ = area_1;
  package$js.article_rpidd8$ = article_1;
  package$js.aside_k4rhbi$ = aside_1;
  package$js.audio_bbjfyk$ = audio_1;
  package$js.b_x0nqqg$ = b_1;
  package$js.base_rhdnbn$ = base_1;
  package$js.bdi_430vtv$ = bdi_1;
  package$js.bdo_3g3eqr$ = bdo_1;
  package$js.blockQuote_rw5zzj$ = blockQuote_1;
  package$js.body_sbi9b0$ = body_1;
  package$js.br_jn093m$ = br_1;
  package$js.button_yqfwmz$ = button_1;
  package$js.canvas_61vnh7$ = canvas_3;
  package$js.canvas_o2d15m$ = canvas_4;
  package$js.caption_2b4nbw$ = caption_1;
  package$js.cite_vhqron$ = cite_1;
  package$js.code_osm44v$ = code_1;
  package$js.col_7tq9i$ = col_1;
  package$js.colGroup_8s3ugv$ = colGroup_1;
  package$js.command_8fvebf$ = command_1;
  package$js.dataList_jju9ai$ = dataList_1;
  package$js.dd_8uujpe$ = dd_1;
  package$js.del_z132bj$ = del_1;
  package$js.details_v1c0ag$ = details_1;
  package$js.dfn_6e2jtu$ = dfn_1;
  package$js.dialog_o1mqye$ = dialog_1;
  package$js.div_wkomt5$ = div_1;
  package$js.dl_4s12uu$ = dl_1;
  package$js.dt_iewpf2$ = dt_1;
  package$js.em_bpkgve$ = em_1;
  package$js.embed_f82m33$ = embed_1;
  package$js.fieldSet_ocqxli$ = fieldSet_1;
  package$js.figcaption_k8kml8$ = figcaption_2;
  package$js.figure_a9op5m$ = figure_1;
  package$js.footer_rkqwo3$ = footer_1;
  package$js.form_cxki7s$ = form_1;
  package$js.h1_1esf85$ = h1_2;
  package$js.h2_nirn70$ = h2_2;
  package$js.h3_mksccz$ = h3_2;
  package$js.h4_2crq26$ = h4_2;
  package$js.h5_rabshb$ = h5_2;
  package$js.h6_it872o$ = h6_2;
  package$js.head_bq9830$ = head_3;
  package$js.head_z94brr$ = head_4;
  package$js.header_sok7e9$ = header_1;
  package$js.hGroup_8f4qzd$ = hGroup_1;
  package$js.hr_v0qv1w$ = hr_1;
  package$js.html_18z1of$ = html_1;
  package$js.html_aq4td9$ = html_2;
  package$js.i_5jry8x$ = i_1;
  package$js.iframe_4ksjnb$ = iframe_3;
  package$js.iframe_g0q2yy$ = iframe_4;
  package$js.img_6lw7hj$ = img_2;
  package$js.input_x8a5sv$ = input_1;
  package$js.ins_xcl8o4$ = ins_1;
  package$js.kbd_ijivhf$ = kbd_1;
  package$js.keyGen_qu3nek$ = keyGen_1;
  package$js.label_uo7uay$ = label_1;
  package$js.li_525bpd$ = li_2;
  package$js.link_iq3rqc$ = link_1;
  package$js.main_cutem3$ = main_1;
  package$js.map_ibzf9n$ = map_1;
  package$js.mark_44qn2n$ = mark_1;
  package$js.math_giqjli$ = math_1;
  package$js.mathml_61vnh7$ = mathml_1;
  package$js.mathml_lcwe6v$ = mathml_2;
  package$js.meta_1gpk13$ = meta_1;
  package$js.meter_5zj8jj$ = meter_1;
  package$js.nav_pc7gpz$ = nav_1;
  package$js.noScript_87229e$ = noScript_1;
  package$js.ol_qmgqht$ = ol_1;
  package$js.optGroup_p3q3kl$ = optGroup_1;
  package$js.option_61vnh7$ = option_7;
  package$js.option_o2wi2f$ = option_8;
  package$js.output_38nbp9$ = output_1;
  package$js.p_qwwequ$ = p_1;
  package$js.param_4880cc$ = param_1;
  package$js.picture_2e9cvn$ = picture_1;
  package$js.pre_kad921$ = pre_1;
  package$js.progress_kmv2hd$ = progress_1;
  package$js.q_j6nkt5$ = q_1;
  package$js.rp_n982v4$ = rp_1;
  package$js.rt_5fw4uc$ = rt_1;
  package$js.ruby_12w3h8$ = ruby_1;
  package$js.samp_11f6yb$ = samp_1;
  package$js.script_m2sah8$ = script_3;
  package$js.script_764uoc$ = script_4;
  package$js.section_ceckl$ = section_1;
  package$js.select_hs5l1a$ = select_1;
  package$js.small_8pbyt9$ = small_1;
  package$js.source_1ucc65$ = source_3;
  package$js.span_x24v7w$ = span_1;
  package$js.strong_ddyujd$ = strong_1;
  package$js.style_61vnh7$ = style_3;
  package$js.style_s80t09$ = style_4;
  package$js.sub_cp04y2$ = sub_1;
  package$js.summary_85cyqk$ = summary_1;
  package$js.sup_isrgxo$ = sup_1;
  package$js.svg_61vnh7$ = svg_3;
  package$js.svg_whpmhm$ = svg_4;
  package$js.table_uk5qws$ = table_1;
  package$js.tbody_sr8158$ = tbody_1;
  package$js.td_ftqcky$ = td_1;
  package$js.textArea_krlhnm$ = textArea_3;
  package$js.textArea_wr40b$ = textArea_4;
  package$js.tfoot_tdtbiw$ = tfoot_1;
  package$js.th_lypajb$ = th_1;
  package$js.thead_awes1i$ = thead_1;
  package$js.time_veotvz$ = time_1;
  package$js.title_bq9830$ = title_3;
  package$js.title_nrj9p5$ = title_4;
  package$js.tr_9pz0lc$ = tr_4;
  package$js.ul_693so7$ = ul_1;
  package$js.video_kpr04x$ = video_1;
  package$js.get_onAbortFunction_fxodxh$ = get_onAbortFunction;
  package$js.set_onAbortFunction_7odi1u$ = set_onAbortFunction;
  package$js.get_onBlurFunction_fxodxh$ = get_onBlurFunction;
  package$js.set_onBlurFunction_7odi1u$ = set_onBlurFunction;
  package$js.get_onCanPlayFunction_fxodxh$ = get_onCanPlayFunction;
  package$js.set_onCanPlayFunction_7odi1u$ = set_onCanPlayFunction;
  package$js.get_onCanPlayThroughFunction_fxodxh$ = get_onCanPlayThroughFunction;
  package$js.set_onCanPlayThroughFunction_7odi1u$ = set_onCanPlayThroughFunction;
  package$js.get_onChangeFunction_fxodxh$ = get_onChangeFunction;
  package$js.set_onChangeFunction_7odi1u$ = set_onChangeFunction;
  package$js.get_onClickFunction_fxodxh$ = get_onClickFunction;
  package$js.set_onClickFunction_7odi1u$ = set_onClickFunction;
  package$js.get_onContextMenuFunction_fxodxh$ = get_onContextMenuFunction;
  package$js.set_onContextMenuFunction_7odi1u$ = set_onContextMenuFunction;
  package$js.get_onDoubleClickFunction_fxodxh$ = get_onDoubleClickFunction;
  package$js.set_onDoubleClickFunction_7odi1u$ = set_onDoubleClickFunction;
  package$js.get_onDragFunction_fxodxh$ = get_onDragFunction;
  package$js.set_onDragFunction_7odi1u$ = set_onDragFunction;
  package$js.get_onDragEndFunction_fxodxh$ = get_onDragEndFunction;
  package$js.set_onDragEndFunction_7odi1u$ = set_onDragEndFunction;
  package$js.get_onDragEnterFunction_fxodxh$ = get_onDragEnterFunction;
  package$js.set_onDragEnterFunction_7odi1u$ = set_onDragEnterFunction;
  package$js.get_onDragLeaveFunction_fxodxh$ = get_onDragLeaveFunction;
  package$js.set_onDragLeaveFunction_7odi1u$ = set_onDragLeaveFunction;
  package$js.get_onDragOverFunction_fxodxh$ = get_onDragOverFunction;
  package$js.set_onDragOverFunction_7odi1u$ = set_onDragOverFunction;
  package$js.get_onDragStartFunction_fxodxh$ = get_onDragStartFunction;
  package$js.set_onDragStartFunction_7odi1u$ = set_onDragStartFunction;
  package$js.get_onDropFunction_fxodxh$ = get_onDropFunction;
  package$js.set_onDropFunction_7odi1u$ = set_onDropFunction;
  package$js.get_onDurationChangeFunction_fxodxh$ = get_onDurationChangeFunction;
  package$js.set_onDurationChangeFunction_7odi1u$ = set_onDurationChangeFunction;
  package$js.get_onEmptiedFunction_fxodxh$ = get_onEmptiedFunction;
  package$js.set_onEmptiedFunction_7odi1u$ = set_onEmptiedFunction;
  package$js.get_onEndedFunction_fxodxh$ = get_onEndedFunction;
  package$js.set_onEndedFunction_7odi1u$ = set_onEndedFunction;
  package$js.get_onErrorFunction_fxodxh$ = get_onErrorFunction;
  package$js.set_onErrorFunction_7odi1u$ = set_onErrorFunction;
  package$js.get_onFocusFunction_fxodxh$ = get_onFocusFunction;
  package$js.set_onFocusFunction_7odi1u$ = set_onFocusFunction;
  package$js.get_onFocusInFunction_fxodxh$ = get_onFocusInFunction;
  package$js.set_onFocusInFunction_7odi1u$ = set_onFocusInFunction;
  package$js.get_onFocusOutFunction_fxodxh$ = get_onFocusOutFunction;
  package$js.set_onFocusOutFunction_7odi1u$ = set_onFocusOutFunction;
  package$js.get_onFormChangeFunction_fxodxh$ = get_onFormChangeFunction;
  package$js.set_onFormChangeFunction_7odi1u$ = set_onFormChangeFunction;
  package$js.get_onFormInputFunction_fxodxh$ = get_onFormInputFunction;
  package$js.set_onFormInputFunction_7odi1u$ = set_onFormInputFunction;
  package$js.get_onInputFunction_fxodxh$ = get_onInputFunction;
  package$js.set_onInputFunction_7odi1u$ = set_onInputFunction;
  package$js.get_onInvalidFunction_fxodxh$ = get_onInvalidFunction;
  package$js.set_onInvalidFunction_7odi1u$ = set_onInvalidFunction;
  package$js.get_onKeyDownFunction_fxodxh$ = get_onKeyDownFunction;
  package$js.set_onKeyDownFunction_7odi1u$ = set_onKeyDownFunction;
  package$js.get_onKeyPressFunction_fxodxh$ = get_onKeyPressFunction;
  package$js.set_onKeyPressFunction_7odi1u$ = set_onKeyPressFunction;
  package$js.get_onKeyUpFunction_fxodxh$ = get_onKeyUpFunction;
  package$js.set_onKeyUpFunction_7odi1u$ = set_onKeyUpFunction;
  package$js.get_onLoadFunction_fxodxh$ = get_onLoadFunction;
  package$js.set_onLoadFunction_7odi1u$ = set_onLoadFunction;
  package$js.get_onLoadedDataFunction_fxodxh$ = get_onLoadedDataFunction;
  package$js.set_onLoadedDataFunction_7odi1u$ = set_onLoadedDataFunction;
  package$js.get_onLoadedMetaDataFunction_fxodxh$ = get_onLoadedMetaDataFunction;
  package$js.set_onLoadedMetaDataFunction_7odi1u$ = set_onLoadedMetaDataFunction;
  package$js.get_onLoadStartFunction_fxodxh$ = get_onLoadStartFunction;
  package$js.set_onLoadStartFunction_7odi1u$ = set_onLoadStartFunction;
  package$js.get_onMouseDownFunction_fxodxh$ = get_onMouseDownFunction;
  package$js.set_onMouseDownFunction_7odi1u$ = set_onMouseDownFunction;
  package$js.get_onMouseMoveFunction_fxodxh$ = get_onMouseMoveFunction;
  package$js.set_onMouseMoveFunction_7odi1u$ = set_onMouseMoveFunction;
  package$js.get_onMouseOutFunction_fxodxh$ = get_onMouseOutFunction;
  package$js.set_onMouseOutFunction_7odi1u$ = set_onMouseOutFunction;
  package$js.get_onMouseOverFunction_fxodxh$ = get_onMouseOverFunction;
  package$js.set_onMouseOverFunction_7odi1u$ = set_onMouseOverFunction;
  package$js.get_onMouseUpFunction_fxodxh$ = get_onMouseUpFunction;
  package$js.set_onMouseUpFunction_7odi1u$ = set_onMouseUpFunction;
  package$js.get_onMouseWheelFunction_fxodxh$ = get_onMouseWheelFunction;
  package$js.set_onMouseWheelFunction_7odi1u$ = set_onMouseWheelFunction;
  package$js.get_onPauseFunction_fxodxh$ = get_onPauseFunction;
  package$js.set_onPauseFunction_7odi1u$ = set_onPauseFunction;
  package$js.get_onPlayFunction_fxodxh$ = get_onPlayFunction;
  package$js.set_onPlayFunction_7odi1u$ = set_onPlayFunction;
  package$js.get_onPlayingFunction_fxodxh$ = get_onPlayingFunction;
  package$js.set_onPlayingFunction_7odi1u$ = set_onPlayingFunction;
  package$js.get_onProgressFunction_fxodxh$ = get_onProgressFunction;
  package$js.set_onProgressFunction_7odi1u$ = set_onProgressFunction;
  package$js.get_onRateChangeFunction_fxodxh$ = get_onRateChangeFunction;
  package$js.set_onRateChangeFunction_7odi1u$ = set_onRateChangeFunction;
  package$js.get_onReadyStateChangeFunction_fxodxh$ = get_onReadyStateChangeFunction;
  package$js.set_onReadyStateChangeFunction_7odi1u$ = set_onReadyStateChangeFunction;
  package$js.get_onScrollFunction_fxodxh$ = get_onScrollFunction;
  package$js.set_onScrollFunction_7odi1u$ = set_onScrollFunction;
  package$js.get_onSearchFunction_fxodxh$ = get_onSearchFunction;
  package$js.set_onSearchFunction_7odi1u$ = set_onSearchFunction;
  package$js.get_onSeekedFunction_fxodxh$ = get_onSeekedFunction;
  package$js.set_onSeekedFunction_7odi1u$ = set_onSeekedFunction;
  package$js.get_onSeekingFunction_fxodxh$ = get_onSeekingFunction;
  package$js.set_onSeekingFunction_7odi1u$ = set_onSeekingFunction;
  package$js.get_onSelectFunction_fxodxh$ = get_onSelectFunction;
  package$js.set_onSelectFunction_7odi1u$ = set_onSelectFunction;
  package$js.get_onShowFunction_fxodxh$ = get_onShowFunction;
  package$js.set_onShowFunction_7odi1u$ = set_onShowFunction;
  package$js.get_onStalledFunction_fxodxh$ = get_onStalledFunction;
  package$js.set_onStalledFunction_7odi1u$ = set_onStalledFunction;
  package$js.get_onSubmitFunction_fxodxh$ = get_onSubmitFunction;
  package$js.set_onSubmitFunction_7odi1u$ = set_onSubmitFunction;
  package$js.get_onSuspendFunction_fxodxh$ = get_onSuspendFunction;
  package$js.set_onSuspendFunction_7odi1u$ = set_onSuspendFunction;
  package$js.get_onTimeUpdateFunction_fxodxh$ = get_onTimeUpdateFunction;
  package$js.set_onTimeUpdateFunction_7odi1u$ = set_onTimeUpdateFunction;
  package$js.get_onTouchCancelFunction_fxodxh$ = get_onTouchCancelFunction;
  package$js.set_onTouchCancelFunction_7odi1u$ = set_onTouchCancelFunction;
  package$js.get_onTouchEndFunction_fxodxh$ = get_onTouchEndFunction;
  package$js.set_onTouchEndFunction_7odi1u$ = set_onTouchEndFunction;
  package$js.get_onTouchMoveFunction_fxodxh$ = get_onTouchMoveFunction;
  package$js.set_onTouchMoveFunction_7odi1u$ = set_onTouchMoveFunction;
  package$js.get_onTouchStartFunction_fxodxh$ = get_onTouchStartFunction;
  package$js.set_onTouchStartFunction_7odi1u$ = set_onTouchStartFunction;
  package$js.get_onVolumeChangeFunction_fxodxh$ = get_onVolumeChangeFunction;
  package$js.set_onVolumeChangeFunction_7odi1u$ = set_onVolumeChangeFunction;
  package$js.get_onWaitingFunction_fxodxh$ = get_onWaitingFunction;
  package$js.set_onWaitingFunction_7odi1u$ = set_onWaitingFunction;
  package$js.get_onWheelFunction_fxodxh$ = get_onWheelFunction;
  package$js.set_onWheelFunction_7odi1u$ = set_onWheelFunction;
  var package$injector = package$html.injector || (package$html.injector = {});
  package$injector.injectTo_n418us$ = injectTo;
  package$injector.InjectCapture = InjectCapture;
  package$injector.InjectByClassName = InjectByClassName;
  package$injector.InjectByTagName = InjectByTagName;
  Object.defineProperty(package$injector, 'InjectRoot', {
    get: InjectRoot_getInstance
  });
  package$injector.CustomCapture = CustomCapture;
  package$injector.InjectorConsumer = InjectorConsumer;
  package$injector.inject_d3dat4$ = inject;
  package$injector.appendAndInject_qj1uvz$ = appendAndInject;
  package$consumers.trace_3mrk8e$ = trace_0;
  package$html.currentTimeMillis = currentTimeMillis;
  DefaultUnsafe.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  DefaultUnsafe.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  DefaultUnsafe.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  DefaultUnsafe.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  StringEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  BooleanEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  TickerEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  EnumEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacade.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  CommonAttributeGroupFacade.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  CommonAttributeGroupFacade.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  CommonAttributeGroupFacade.prototype.comment_61zpoe$ = Tag.prototype.comment_61zpoe$;
  FormServerAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FormServerAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FormServerAttributeGroupFacade.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FormServerAttributeGroupFacade.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FormServerAttributeGroupFacade.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FormServerAttributeGroupFacade.prototype.comment_61zpoe$ = Tag.prototype.comment_61zpoe$;
  InputServerAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  InputServerAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  InputServerAttributeGroupFacade.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  InputServerAttributeGroupFacade.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  InputServerAttributeGroupFacade.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  InputServerAttributeGroupFacade.prototype.comment_61zpoe$ = Tag.prototype.comment_61zpoe$;
  SelectServerAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  SelectServerAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  SelectServerAttributeGroupFacade.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  SelectServerAttributeGroupFacade.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  SelectServerAttributeGroupFacade.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  SelectServerAttributeGroupFacade.prototype.comment_61zpoe$ = Tag.prototype.comment_61zpoe$;
  FlowOrHeadingContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrHeadingContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrHeadingContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FlowOrHeadingContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FlowOrHeadingContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FlowOrHeadingContent.prototype.comment_61zpoe$ = Tag.prototype.comment_61zpoe$;
  HeadingContent.prototype.unaryPlus_lvwjq6$ = FlowOrHeadingContent.prototype.unaryPlus_lvwjq6$;
  HeadingContent.prototype.unaryPlus_pdl1vz$ = FlowOrHeadingContent.prototype.unaryPlus_pdl1vz$;
  HeadingContent.prototype.text_61zpoe$ = FlowOrHeadingContent.prototype.text_61zpoe$;
  HeadingContent.prototype.text_3p81yu$ = FlowOrHeadingContent.prototype.text_3p81yu$;
  HeadingContent.prototype.entity_ws8or7$ = FlowOrHeadingContent.prototype.entity_ws8or7$;
  HeadingContent.prototype.comment_61zpoe$ = FlowOrHeadingContent.prototype.comment_61zpoe$;
  FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrMetaDataOrPhrasingContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FlowOrMetaDataOrPhrasingContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FlowOrMetaDataOrPhrasingContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FlowOrMetaDataOrPhrasingContent.prototype.comment_61zpoe$ = Tag.prototype.comment_61zpoe$;
  FlowOrMetaDataContent.prototype.unaryPlus_lvwjq6$ = FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_lvwjq6$;
  FlowOrMetaDataContent.prototype.unaryPlus_pdl1vz$ = FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_pdl1vz$;
  FlowOrMetaDataContent.prototype.text_61zpoe$ = FlowOrMetaDataOrPhrasingContent.prototype.text_61zpoe$;
  FlowOrMetaDataContent.prototype.text_3p81yu$ = FlowOrMetaDataOrPhrasingContent.prototype.text_3p81yu$;
  FlowOrMetaDataContent.prototype.entity_ws8or7$ = FlowOrMetaDataOrPhrasingContent.prototype.entity_ws8or7$;
  FlowOrMetaDataContent.prototype.comment_61zpoe$ = FlowOrMetaDataOrPhrasingContent.prototype.comment_61zpoe$;
  FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrInteractiveOrPhrasingContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FlowOrInteractiveOrPhrasingContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FlowOrInteractiveOrPhrasingContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FlowOrInteractiveOrPhrasingContent.prototype.comment_61zpoe$ = Tag.prototype.comment_61zpoe$;
  FlowOrInteractiveContent.prototype.unaryPlus_lvwjq6$ = FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_lvwjq6$;
  FlowOrInteractiveContent.prototype.unaryPlus_pdl1vz$ = FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_pdl1vz$;
  FlowOrInteractiveContent.prototype.text_61zpoe$ = FlowOrInteractiveOrPhrasingContent.prototype.text_61zpoe$;
  FlowOrInteractiveContent.prototype.text_3p81yu$ = FlowOrInteractiveOrPhrasingContent.prototype.text_3p81yu$;
  FlowOrInteractiveContent.prototype.entity_ws8or7$ = FlowOrInteractiveOrPhrasingContent.prototype.entity_ws8or7$;
  FlowOrInteractiveContent.prototype.comment_61zpoe$ = FlowOrInteractiveOrPhrasingContent.prototype.comment_61zpoe$;
  FlowOrPhrasingContent.prototype.unaryPlus_lvwjq6$ = FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_lvwjq6$;
  FlowOrPhrasingContent.prototype.unaryPlus_pdl1vz$ = FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_pdl1vz$;
  FlowOrPhrasingContent.prototype.text_61zpoe$ = FlowOrInteractiveOrPhrasingContent.prototype.text_61zpoe$;
  FlowOrPhrasingContent.prototype.text_3p81yu$ = FlowOrInteractiveOrPhrasingContent.prototype.text_3p81yu$;
  FlowOrPhrasingContent.prototype.entity_ws8or7$ = FlowOrInteractiveOrPhrasingContent.prototype.entity_ws8or7$;
  FlowOrPhrasingContent.prototype.comment_61zpoe$ = FlowOrInteractiveOrPhrasingContent.prototype.comment_61zpoe$;
  SectioningOrFlowContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  SectioningOrFlowContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  SectioningOrFlowContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  SectioningOrFlowContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  SectioningOrFlowContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  SectioningOrFlowContent.prototype.comment_61zpoe$ = Tag.prototype.comment_61zpoe$;
  FlowContent.prototype.unaryPlus_lvwjq6$ = FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_lvwjq6$;
  FlowContent.prototype.unaryPlus_pdl1vz$ = FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_pdl1vz$;
  FlowContent.prototype.text_61zpoe$ = FlowOrMetaDataOrPhrasingContent.prototype.text_61zpoe$;
  FlowContent.prototype.text_3p81yu$ = FlowOrMetaDataOrPhrasingContent.prototype.text_3p81yu$;
  FlowContent.prototype.entity_ws8or7$ = FlowOrMetaDataOrPhrasingContent.prototype.entity_ws8or7$;
  FlowContent.prototype.comment_61zpoe$ = FlowOrMetaDataOrPhrasingContent.prototype.comment_61zpoe$;
  HtmlBlockTag.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  HtmlBlockTag.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  HtmlBlockTag.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  HtmlBlockTag.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  HtmlBlockTag.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  HtmlBlockTag.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  CommonAttributeGroupFacadeFlowHeadingContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowHeadingContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowHeadingContent.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  CommonAttributeGroupFacadeFlowHeadingContent.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  CommonAttributeGroupFacadeFlowHeadingContent.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  CommonAttributeGroupFacadeFlowHeadingContent.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  PhrasingContent.prototype.unaryPlus_lvwjq6$ = FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_lvwjq6$;
  PhrasingContent.prototype.unaryPlus_pdl1vz$ = FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_pdl1vz$;
  PhrasingContent.prototype.text_61zpoe$ = FlowOrMetaDataOrPhrasingContent.prototype.text_61zpoe$;
  PhrasingContent.prototype.text_3p81yu$ = FlowOrMetaDataOrPhrasingContent.prototype.text_3p81yu$;
  PhrasingContent.prototype.entity_ws8or7$ = FlowOrMetaDataOrPhrasingContent.prototype.entity_ws8or7$;
  PhrasingContent.prototype.comment_61zpoe$ = FlowOrMetaDataOrPhrasingContent.prototype.comment_61zpoe$;
  FlowPhrasingContent.prototype.unaryPlus_lvwjq6$ = FlowContent.prototype.unaryPlus_lvwjq6$;
  FlowPhrasingContent.prototype.unaryPlus_pdl1vz$ = FlowContent.prototype.unaryPlus_pdl1vz$;
  FlowPhrasingContent.prototype.text_61zpoe$ = FlowContent.prototype.text_61zpoe$;
  FlowPhrasingContent.prototype.text_3p81yu$ = FlowContent.prototype.text_3p81yu$;
  FlowPhrasingContent.prototype.entity_ws8or7$ = FlowContent.prototype.entity_ws8or7$;
  FlowPhrasingContent.prototype.comment_61zpoe$ = FlowContent.prototype.comment_61zpoe$;
  HtmlInlineTag.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  HtmlInlineTag.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  HtmlInlineTag.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  HtmlInlineTag.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  HtmlInlineTag.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  HtmlInlineTag.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  HtmlBlockInlineTag.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  HtmlBlockInlineTag.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  HtmlBlockInlineTag.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  HtmlBlockInlineTag.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  InteractiveContent.prototype.unaryPlus_lvwjq6$ = FlowOrInteractiveContent.prototype.unaryPlus_lvwjq6$;
  InteractiveContent.prototype.unaryPlus_pdl1vz$ = FlowOrInteractiveContent.prototype.unaryPlus_pdl1vz$;
  InteractiveContent.prototype.text_61zpoe$ = FlowOrInteractiveContent.prototype.text_61zpoe$;
  InteractiveContent.prototype.text_3p81yu$ = FlowOrInteractiveContent.prototype.text_3p81yu$;
  InteractiveContent.prototype.entity_ws8or7$ = FlowOrInteractiveContent.prototype.entity_ws8or7$;
  InteractiveContent.prototype.comment_61zpoe$ = FlowOrInteractiveContent.prototype.comment_61zpoe$;
  FlowInteractiveContent.prototype.unaryPlus_lvwjq6$ = FlowContent.prototype.unaryPlus_lvwjq6$;
  FlowInteractiveContent.prototype.unaryPlus_pdl1vz$ = FlowContent.prototype.unaryPlus_pdl1vz$;
  FlowInteractiveContent.prototype.text_61zpoe$ = FlowContent.prototype.text_61zpoe$;
  FlowInteractiveContent.prototype.text_3p81yu$ = FlowContent.prototype.text_3p81yu$;
  FlowInteractiveContent.prototype.entity_ws8or7$ = FlowContent.prototype.entity_ws8or7$;
  FlowInteractiveContent.prototype.comment_61zpoe$ = FlowContent.prototype.comment_61zpoe$;
  CommonAttributeGroupFacadeFlowInteractiveContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowInteractiveContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowInteractiveContent.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  CommonAttributeGroupFacadeFlowInteractiveContent.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  CommonAttributeGroupFacadeFlowInteractiveContent.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  CommonAttributeGroupFacadeFlowInteractiveContent.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  FlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$ = FlowInteractiveContent.prototype.unaryPlus_lvwjq6$;
  FlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$ = FlowInteractiveContent.prototype.unaryPlus_pdl1vz$;
  FlowInteractivePhrasingContent.prototype.text_61zpoe$ = FlowInteractiveContent.prototype.text_61zpoe$;
  FlowInteractivePhrasingContent.prototype.text_3p81yu$ = FlowInteractiveContent.prototype.text_3p81yu$;
  FlowInteractivePhrasingContent.prototype.entity_ws8or7$ = FlowInteractiveContent.prototype.entity_ws8or7$;
  FlowInteractivePhrasingContent.prototype.comment_61zpoe$ = FlowInteractiveContent.prototype.comment_61zpoe$;
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  MetaDataContent.prototype.unaryPlus_lvwjq6$ = FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_lvwjq6$;
  MetaDataContent.prototype.unaryPlus_pdl1vz$ = FlowOrMetaDataOrPhrasingContent.prototype.unaryPlus_pdl1vz$;
  MetaDataContent.prototype.text_61zpoe$ = FlowOrMetaDataOrPhrasingContent.prototype.text_61zpoe$;
  MetaDataContent.prototype.text_3p81yu$ = FlowOrMetaDataOrPhrasingContent.prototype.text_3p81yu$;
  MetaDataContent.prototype.entity_ws8or7$ = FlowOrMetaDataOrPhrasingContent.prototype.entity_ws8or7$;
  MetaDataContent.prototype.comment_61zpoe$ = FlowOrMetaDataOrPhrasingContent.prototype.comment_61zpoe$;
  FlowMetaDataContent.prototype.unaryPlus_lvwjq6$ = FlowContent.prototype.unaryPlus_lvwjq6$;
  FlowMetaDataContent.prototype.unaryPlus_pdl1vz$ = FlowContent.prototype.unaryPlus_pdl1vz$;
  FlowMetaDataContent.prototype.text_61zpoe$ = FlowContent.prototype.text_61zpoe$;
  FlowMetaDataContent.prototype.text_3p81yu$ = FlowContent.prototype.text_3p81yu$;
  FlowMetaDataContent.prototype.entity_ws8or7$ = FlowContent.prototype.entity_ws8or7$;
  FlowMetaDataContent.prototype.comment_61zpoe$ = FlowContent.prototype.comment_61zpoe$;
  HtmlHeadTag.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  HtmlHeadTag.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  HtmlHeadTag.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  HtmlHeadTag.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  HtmlHeadTag.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  HtmlHeadTag.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  CommonAttributeGroupFacadeFlowMetaDataContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowMetaDataContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowMetaDataContent.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  CommonAttributeGroupFacadeFlowMetaDataContent.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  CommonAttributeGroupFacadeFlowMetaDataContent.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  CommonAttributeGroupFacadeFlowMetaDataContent.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  FlowMetaDataPhrasingContent.prototype.unaryPlus_lvwjq6$ = FlowMetaDataContent.prototype.unaryPlus_lvwjq6$;
  FlowMetaDataPhrasingContent.prototype.unaryPlus_pdl1vz$ = FlowMetaDataContent.prototype.unaryPlus_pdl1vz$;
  FlowMetaDataPhrasingContent.prototype.text_61zpoe$ = FlowMetaDataContent.prototype.text_61zpoe$;
  FlowMetaDataPhrasingContent.prototype.text_3p81yu$ = FlowMetaDataContent.prototype.text_3p81yu$;
  FlowMetaDataPhrasingContent.prototype.entity_ws8or7$ = FlowMetaDataContent.prototype.entity_ws8or7$;
  FlowMetaDataPhrasingContent.prototype.comment_61zpoe$ = FlowMetaDataContent.prototype.comment_61zpoe$;
  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  SectioningContent.prototype.unaryPlus_lvwjq6$ = SectioningOrFlowContent.prototype.unaryPlus_lvwjq6$;
  SectioningContent.prototype.unaryPlus_pdl1vz$ = SectioningOrFlowContent.prototype.unaryPlus_pdl1vz$;
  SectioningContent.prototype.text_61zpoe$ = SectioningOrFlowContent.prototype.text_61zpoe$;
  SectioningContent.prototype.text_3p81yu$ = SectioningOrFlowContent.prototype.text_3p81yu$;
  SectioningContent.prototype.entity_ws8or7$ = SectioningOrFlowContent.prototype.entity_ws8or7$;
  SectioningContent.prototype.comment_61zpoe$ = SectioningOrFlowContent.prototype.comment_61zpoe$;
  CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowSectioningContent.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  CommonAttributeGroupFacadeFlowSectioningContent.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  CommonAttributeGroupFacadeFlowSectioningContent.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  CommonAttributeGroupFacadeFlowSectioningContent.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  CommonAttributeGroupFacadeFlowPhrasingSectioningContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowPhrasingSectioningContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowPhrasingSectioningContent.prototype.text_61zpoe$ = CommonAttributeGroupFacade.prototype.text_61zpoe$;
  CommonAttributeGroupFacadeFlowPhrasingSectioningContent.prototype.text_3p81yu$ = CommonAttributeGroupFacade.prototype.text_3p81yu$;
  CommonAttributeGroupFacadeFlowPhrasingSectioningContent.prototype.entity_ws8or7$ = CommonAttributeGroupFacade.prototype.entity_ws8or7$;
  CommonAttributeGroupFacadeFlowPhrasingSectioningContent.prototype.comment_61zpoe$ = CommonAttributeGroupFacade.prototype.comment_61zpoe$;
  HTMLTag.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  HTMLTag.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  HTMLTag.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  HTMLTag.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  HTMLTag.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  HTMLTag.prototype.comment_61zpoe$ = Tag.prototype.comment_61zpoe$;
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  HTMLStreamBuilder.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  JSDOMBuilder.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  emptyMap_0 = emptyMap();
  attributeStringString = new StringAttribute();
  attributeSetStringStringSet = new StringSetAttribute();
  attributeBooleanBoolean = new BooleanAttribute();
  attributeBooleanBooleanOnOff = new BooleanAttribute('on', 'off');
  attributeBooleanTicker = new TickerAttribute();
  attributeButtonFormEncTypeEnumButtonFormEncTypeValues = new EnumAttribute(buttonFormEncTypeValues);
  attributeButtonFormMethodEnumButtonFormMethodValues = new EnumAttribute(buttonFormMethodValues);
  attributeButtonTypeEnumButtonTypeValues = new EnumAttribute(buttonTypeValues);
  attributeCommandTypeEnumCommandTypeValues = new EnumAttribute(commandTypeValues);
  attributeDirEnumDirValues = new EnumAttribute(dirValues);
  attributeDraggableEnumDraggableValues = new EnumAttribute(draggableValues);
  attributeFormEncTypeEnumFormEncTypeValues = new EnumAttribute(formEncTypeValues);
  attributeFormMethodEnumFormMethodValues = new EnumAttribute(formMethodValues);
  attributeIframeSandboxEnumIframeSandboxValues = new EnumAttribute(iframeSandboxValues);
  attributeInputFormEncTypeEnumInputFormEncTypeValues = new EnumAttribute(inputFormEncTypeValues);
  attributeInputFormMethodEnumInputFormMethodValues = new EnumAttribute(inputFormMethodValues);
  attributeInputTypeEnumInputTypeValues = new EnumAttribute(inputTypeValues);
  attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues = new EnumAttribute(keyGenKeyTypeValues);
  attributeRunAtEnumRunAtValues = new EnumAttribute(runAtValues);
  attributeTextAreaWrapEnumTextAreaWrapValues = new EnumAttribute(textAreaWrapValues);
  attributeThScopeEnumThScopeValues = new EnumAttribute(thScopeValues);
  var $receiver = Dir$values();
  var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
  var destination = LinkedHashMap_init_1(capacity);
  var tmp$;
  for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
    var element = $receiver[tmp$];
    destination.put_xwzc9p$(element.realValue, element);
  }
  dirValues = destination;
  var $receiver_0 = Draggable$values();
  var capacity_0 = coerceAtLeast(mapCapacity($receiver_0.length), 16);
  var destination_0 = LinkedHashMap_init_1(capacity_0);
  var tmp$_0;
  for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
    var element_0 = $receiver_0[tmp$_0];
    destination_0.put_xwzc9p$(element_0.realValue, element_0);
  }
  draggableValues = destination_0;
  var $receiver_1 = RunAt$values();
  var capacity_1 = coerceAtLeast(mapCapacity($receiver_1.length), 16);
  var destination_1 = LinkedHashMap_init_1(capacity_1);
  var tmp$_1;
  for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
    var element_1 = $receiver_1[tmp$_1];
    destination_1.put_xwzc9p$(element_1.realValue, element_1);
  }
  runAtValues = destination_1;
  var $receiver_2 = AreaShape$values();
  var capacity_2 = coerceAtLeast(mapCapacity($receiver_2.length), 16);
  var destination_2 = LinkedHashMap_init_1(capacity_2);
  var tmp$_2;
  for (tmp$_2 = 0; tmp$_2 !== $receiver_2.length; ++tmp$_2) {
    var element_2 = $receiver_2[tmp$_2];
    destination_2.put_xwzc9p$(element_2.realValue, element_2);
  }
  areaShapeValues = destination_2;
  var $receiver_3 = ButtonFormEncType$values();
  var capacity_3 = coerceAtLeast(mapCapacity($receiver_3.length), 16);
  var destination_3 = LinkedHashMap_init_1(capacity_3);
  var tmp$_3;
  for (tmp$_3 = 0; tmp$_3 !== $receiver_3.length; ++tmp$_3) {
    var element_3 = $receiver_3[tmp$_3];
    destination_3.put_xwzc9p$(element_3.realValue, element_3);
  }
  buttonFormEncTypeValues = destination_3;
  var $receiver_4 = ButtonFormMethod$values();
  var capacity_4 = coerceAtLeast(mapCapacity($receiver_4.length), 16);
  var destination_4 = LinkedHashMap_init_1(capacity_4);
  var tmp$_4;
  for (tmp$_4 = 0; tmp$_4 !== $receiver_4.length; ++tmp$_4) {
    var element_4 = $receiver_4[tmp$_4];
    destination_4.put_xwzc9p$(element_4.realValue, element_4);
  }
  buttonFormMethodValues = destination_4;
  var $receiver_5 = ButtonType$values();
  var capacity_5 = coerceAtLeast(mapCapacity($receiver_5.length), 16);
  var destination_5 = LinkedHashMap_init_1(capacity_5);
  var tmp$_5;
  for (tmp$_5 = 0; tmp$_5 !== $receiver_5.length; ++tmp$_5) {
    var element_5 = $receiver_5[tmp$_5];
    destination_5.put_xwzc9p$(element_5.realValue, element_5);
  }
  buttonTypeValues = destination_5;
  var $receiver_6 = CommandType$values();
  var capacity_6 = coerceAtLeast(mapCapacity($receiver_6.length), 16);
  var destination_6 = LinkedHashMap_init_1(capacity_6);
  var tmp$_6;
  for (tmp$_6 = 0; tmp$_6 !== $receiver_6.length; ++tmp$_6) {
    var element_6 = $receiver_6[tmp$_6];
    destination_6.put_xwzc9p$(element_6.realValue, element_6);
  }
  commandTypeValues = destination_6;
  var $receiver_7 = FormEncType$values();
  var capacity_7 = coerceAtLeast(mapCapacity($receiver_7.length), 16);
  var destination_7 = LinkedHashMap_init_1(capacity_7);
  var tmp$_7;
  for (tmp$_7 = 0; tmp$_7 !== $receiver_7.length; ++tmp$_7) {
    var element_7 = $receiver_7[tmp$_7];
    destination_7.put_xwzc9p$(element_7.realValue, element_7);
  }
  formEncTypeValues = destination_7;
  var $receiver_8 = FormMethod$values();
  var capacity_8 = coerceAtLeast(mapCapacity($receiver_8.length), 16);
  var destination_8 = LinkedHashMap_init_1(capacity_8);
  var tmp$_8;
  for (tmp$_8 = 0; tmp$_8 !== $receiver_8.length; ++tmp$_8) {
    var element_8 = $receiver_8[tmp$_8];
    destination_8.put_xwzc9p$(element_8.realValue, element_8);
  }
  formMethodValues = destination_8;
  var $receiver_9 = IframeSandbox$values();
  var capacity_9 = coerceAtLeast(mapCapacity($receiver_9.length), 16);
  var destination_9 = LinkedHashMap_init_1(capacity_9);
  var tmp$_9;
  for (tmp$_9 = 0; tmp$_9 !== $receiver_9.length; ++tmp$_9) {
    var element_9 = $receiver_9[tmp$_9];
    destination_9.put_xwzc9p$(element_9.realValue, element_9);
  }
  iframeSandboxValues = destination_9;
  var $receiver_10 = InputType$values();
  var capacity_10 = coerceAtLeast(mapCapacity($receiver_10.length), 16);
  var destination_10 = LinkedHashMap_init_1(capacity_10);
  var tmp$_10;
  for (tmp$_10 = 0; tmp$_10 !== $receiver_10.length; ++tmp$_10) {
    var element_10 = $receiver_10[tmp$_10];
    destination_10.put_xwzc9p$(element_10.realValue, element_10);
  }
  inputTypeValues = destination_10;
  var $receiver_11 = InputFormEncType$values();
  var capacity_11 = coerceAtLeast(mapCapacity($receiver_11.length), 16);
  var destination_11 = LinkedHashMap_init_1(capacity_11);
  var tmp$_11;
  for (tmp$_11 = 0; tmp$_11 !== $receiver_11.length; ++tmp$_11) {
    var element_11 = $receiver_11[tmp$_11];
    destination_11.put_xwzc9p$(element_11.realValue, element_11);
  }
  inputFormEncTypeValues = destination_11;
  var $receiver_12 = InputFormMethod$values();
  var capacity_12 = coerceAtLeast(mapCapacity($receiver_12.length), 16);
  var destination_12 = LinkedHashMap_init_1(capacity_12);
  var tmp$_12;
  for (tmp$_12 = 0; tmp$_12 !== $receiver_12.length; ++tmp$_12) {
    var element_12 = $receiver_12[tmp$_12];
    destination_12.put_xwzc9p$(element_12.realValue, element_12);
  }
  inputFormMethodValues = destination_12;
  var $receiver_13 = KeyGenKeyType$values();
  var capacity_13 = coerceAtLeast(mapCapacity($receiver_13.length), 16);
  var destination_13 = LinkedHashMap_init_1(capacity_13);
  var tmp$_13;
  for (tmp$_13 = 0; tmp$_13 !== $receiver_13.length; ++tmp$_13) {
    var element_13 = $receiver_13[tmp$_13];
    destination_13.put_xwzc9p$(element_13.realValue, element_13);
  }
  keyGenKeyTypeValues = destination_13;
  var $receiver_14 = TextAreaWrap$values();
  var capacity_14 = coerceAtLeast(mapCapacity($receiver_14.length), 16);
  var destination_14 = LinkedHashMap_init_1(capacity_14);
  var tmp$_14;
  for (tmp$_14 = 0; tmp$_14 !== $receiver_14.length; ++tmp$_14) {
    var element_14 = $receiver_14[tmp$_14];
    destination_14.put_xwzc9p$(element_14.realValue, element_14);
  }
  textAreaWrapValues = destination_14;
  var $receiver_15 = ThScope$values();
  var capacity_15 = coerceAtLeast(mapCapacity($receiver_15.length), 16);
  var destination_15 = LinkedHashMap_init_1(capacity_15);
  var tmp$_15;
  for (tmp$_15 = 0; tmp$_15 !== $receiver_15.length; ++tmp$_15) {
    var element_15 = $receiver_15[tmp$_15];
    destination_15.put_xwzc9p$(element_15.realValue, element_15);
  }
  thScopeValues = destination_15;
  AVERAGE_PAGE_SIZE = 32768;
  var mappings = mapOf([to(toBoxedChar(60), '&lt;'), to(toBoxedChar(62), '&gt;'), to(toBoxedChar(38), '&amp;'), to(toBoxedChar(34), '&quot;')]);
  var tmp$_16;
  var $receiver_16 = mappings.keys;
  var destination_16 = ArrayList_init_0(collectionSizeOrDefault($receiver_16, 10));
  var tmp$_17;
  tmp$_17 = $receiver_16.iterator();
  while (tmp$_17.hasNext()) {
    var item = tmp$_17.next();
    destination_16.add_11rb$(unboxChar(item) | 0);
  }
  var maxCode = (tmp$_16 = maxOrNull(destination_16)) != null ? tmp$_16 : -1;
  var array = Array_0(maxCode + 1 | 0);
  var tmp$_18;
  tmp$_18 = array.length - 1 | 0;
  for (var i_2 = 0; i_2 <= tmp$_18; i_2++) {
    array[i_2] = mappings.get_11rb$(toBoxedChar(toChar(i_2)));
  }
  escapeMap = array;
  letterRangeLowerCase = new CharRange(97, 122);
  letterRangeUpperCase = new CharRange(65, 90);
  digitRange = new CharRange(48, 57);
  Kotlin.defineModule('kotlinx-html-js', _);
  return _;
}));

//# sourceMappingURL=kotlinx-html-js.js.map
