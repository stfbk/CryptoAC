(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_html'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_html'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_html = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_html === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_html, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.sb;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var toString = kotlin_kotlin.$_$.xb;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var Annotation = kotlin_kotlin.$_$.mf;
  var classMeta = kotlin_kotlin.$_$.ka;
  var emptyMap = kotlin_kotlin.$_$.v6;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var objectMeta = kotlin_kotlin.$_$.rb;
  var joinToString = kotlin_kotlin.$_$.l7;
  var Set = kotlin_kotlin.$_$.s5;
  var isInterface = kotlin_kotlin.$_$.eb;
  var ensureNotNull = kotlin_kotlin.$_$.wg;
  var emptySet = kotlin_kotlin.$_$.w6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var charSequenceLength = kotlin_kotlin.$_$.ia;
  var toSet = kotlin_kotlin.$_$.z8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var MutableMap = kotlin_kotlin.$_$.q5;
  var THROW_ISE = kotlin_kotlin.$_$.gg;
  var Enum = kotlin_kotlin.$_$.tf;
  var mapCapacity = kotlin_kotlin.$_$.w7;
  var coerceAtLeast = kotlin_kotlin.$_$.cc;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var Char = kotlin_kotlin.$_$.of;
  var to = kotlin_kotlin.$_$.kh;
  var mapOf = kotlin_kotlin.$_$.x7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.q2;
  var maxOrNull = kotlin_kotlin.$_$.y7;
  var fillArrayVal = kotlin_kotlin.$_$.pa;
  var numberToChar = kotlin_kotlin.$_$.nb;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.p2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AttributeEnum, 'AttributeEnum', interfaceMeta);
  function unaryPlus(_this__u8e3s4) {
    this.entity_uznif4_k$(_this__u8e3s4);
  }
  function unaryPlus_0(_this__u8e3s4) {
    this.text_yddl45_k$(_this__u8e3s4);
  }
  function text(s) {
    this.get_consumer_tu5133_k$().onTagContent_8k5bde_k$(s);
  }
  function text_0(n) {
    this.text_yddl45_k$(toString(n));
  }
  function entity(e) {
    this.get_consumer_tu5133_k$().onTagContentEntity_uzz4te_k$(e);
  }
  function comment(s) {
    this.get_consumer_tu5133_k$().onTagComment_dfi7y0_k$(s);
  }
  setMetadataFor(Tag, 'Tag', interfaceMeta);
  function onTagError(tag, exception) {
    throw exception;
  }
  setMetadataFor(TagConsumer, 'TagConsumer', interfaceMeta);
  setMetadataFor(HtmlTagMarker, 'HtmlTagMarker', classMeta, VOID, [Annotation]);
  function unaryPlus_1(_this__u8e3s4) {
    return this.unaryPlus_g7ydph_k$(_this__u8e3s4.get_text_wouvsm_k$());
  }
  function raw(s) {
    this.unaryPlus_g7ydph_k$(s);
  }
  function raw_0(entity) {
    this.unaryPlus_31ug2c_k$(entity);
  }
  function raw_1(n) {
    this.unaryPlus_g7ydph_k$(toString(n));
  }
  setMetadataFor(Unsafe, 'Unsafe', interfaceMeta);
  setMetadataFor(Attribute, 'Attribute', classMeta);
  setMetadataFor(StringAttribute, 'StringAttribute', classMeta, Attribute);
  setMetadataFor(StringSetAttribute, 'StringSetAttribute', classMeta, Attribute);
  setMetadataFor(BooleanAttribute, 'BooleanAttribute', classMeta, Attribute);
  setMetadataFor(TickerAttribute, 'TickerAttribute', classMeta, Attribute);
  setMetadataFor(EnumAttribute, 'EnumAttribute', classMeta, Attribute);
  function empty(attributeName, tag) {
    throw IllegalStateException_init_$Create$('Attribute ' + attributeName + ' is not yet defined for tag ' + tag.get_tagName_ocsgis_k$());
  }
  setMetadataFor(AttributeEncoder, 'AttributeEncoder', interfaceMeta);
  setMetadataFor(StringEncoder, 'StringEncoder', objectMeta, VOID, [AttributeEncoder]);
  setMetadataFor(StringSetEncoder, 'StringSetEncoder', objectMeta, VOID, [AttributeEncoder]);
  setMetadataFor(BooleanEncoder, 'BooleanEncoder', classMeta, VOID, [AttributeEncoder]);
  setMetadataFor(TickerEncoder, 'TickerEncoder', objectMeta, VOID, [AttributeEncoder]);
  setMetadataFor(EnumEncoder, 'EnumEncoder', classMeta, VOID, [AttributeEncoder]);
  setMetadataFor(DelegatingMap, 'DelegatingMap', classMeta, VOID, [MutableMap]);
  setMetadataFor(CommonAttributeGroupFacade, 'CommonAttributeGroupFacade', interfaceMeta, VOID, [Tag]);
  setMetadataFor(Entities, 'Entities', classMeta, Enum);
  setMetadataFor(ButtonFormEncType, 'ButtonFormEncType', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(ButtonFormMethod, 'ButtonFormMethod', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(ButtonType, 'ButtonType', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(CommandType, 'CommandType', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(Dir, 'Dir', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(Draggable, 'Draggable', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(FormEncType, 'FormEncType', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(FormMethod, 'FormMethod', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(IframeSandbox, 'IframeSandbox', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(InputFormEncType, 'InputFormEncType', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(InputFormMethod, 'InputFormMethod', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(InputType, 'InputType', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(KeyGenKeyType, 'KeyGenKeyType', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(RunAt, 'RunAt', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(TextAreaWrap, 'TextAreaWrap', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(ThScope, 'ThScope', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(AreaShape, 'AreaShape', classMeta, Enum, [Enum, AttributeEnum]);
  setMetadataFor(FlowOrMetaDataOrPhrasingContent, 'FlowOrMetaDataOrPhrasingContent', interfaceMeta, VOID, [Tag]);
  setMetadataFor(FlowOrHeadingContent, 'FlowOrHeadingContent', interfaceMeta, VOID, [Tag]);
  setMetadataFor(FlowOrMetaDataContent, 'FlowOrMetaDataContent', interfaceMeta, VOID, [FlowOrMetaDataOrPhrasingContent, Tag]);
  setMetadataFor(FlowOrInteractiveOrPhrasingContent, 'FlowOrInteractiveOrPhrasingContent', interfaceMeta, VOID, [Tag]);
  setMetadataFor(FlowOrInteractiveContent, 'FlowOrInteractiveContent', interfaceMeta, VOID, [FlowOrInteractiveOrPhrasingContent, Tag]);
  setMetadataFor(FlowOrPhrasingContent, 'FlowOrPhrasingContent', interfaceMeta, VOID, [FlowOrInteractiveOrPhrasingContent, FlowOrMetaDataOrPhrasingContent, Tag]);
  setMetadataFor(SectioningOrFlowContent, 'SectioningOrFlowContent', interfaceMeta, VOID, [Tag]);
  setMetadataFor(FlowContent, 'FlowContent', interfaceMeta, VOID, [FlowOrMetaDataOrPhrasingContent, FlowOrHeadingContent, FlowOrMetaDataContent, FlowOrInteractiveContent, FlowOrPhrasingContent, SectioningOrFlowContent, FlowOrInteractiveOrPhrasingContent, Tag]);
  setMetadataFor(InteractiveContent, 'InteractiveContent', interfaceMeta, VOID, [FlowOrInteractiveContent, FlowOrInteractiveOrPhrasingContent, Tag]);
  setMetadataFor(FlowInteractiveContent, 'FlowInteractiveContent', interfaceMeta, VOID, [FlowContent, InteractiveContent]);
  setMetadataFor(HtmlBlockTag, 'HtmlBlockTag', interfaceMeta, VOID, [CommonAttributeGroupFacade, FlowContent]);
  setMetadataFor(CommonAttributeGroupFacadeFlowInteractiveContent, 'CommonAttributeGroupFacadeFlowInteractiveContent', interfaceMeta, VOID, [CommonAttributeGroupFacade, FlowInteractiveContent, HtmlBlockTag]);
  setMetadataFor(PhrasingContent, 'PhrasingContent', interfaceMeta, VOID, [FlowOrMetaDataOrPhrasingContent, FlowOrPhrasingContent, FlowOrInteractiveOrPhrasingContent, Tag]);
  setMetadataFor(FlowPhrasingContent, 'FlowPhrasingContent', interfaceMeta, VOID, [FlowContent, PhrasingContent]);
  setMetadataFor(FlowInteractivePhrasingContent, 'FlowInteractivePhrasingContent', interfaceMeta, VOID, [FlowInteractiveContent, FlowPhrasingContent]);
  setMetadataFor(HtmlInlineTag, 'HtmlInlineTag', interfaceMeta, VOID, [CommonAttributeGroupFacade, PhrasingContent]);
  setMetadataFor(HtmlBlockInlineTag, 'HtmlBlockInlineTag', interfaceMeta, VOID, [CommonAttributeGroupFacade, FlowPhrasingContent, HtmlBlockTag, HtmlInlineTag]);
  setMetadataFor(CommonAttributeGroupFacadeFlowInteractivePhrasingContent, 'CommonAttributeGroupFacadeFlowInteractivePhrasingContent', interfaceMeta, VOID, [CommonAttributeGroupFacade, CommonAttributeGroupFacadeFlowInteractiveContent, FlowInteractiveContent, FlowInteractivePhrasingContent, FlowPhrasingContent, HtmlBlockInlineTag, HtmlBlockTag, HtmlInlineTag]);
  setMetadataFor(HTMLTag, 'HTMLTag', classMeta, VOID, [Tag]);
  setMetadataFor(INPUT, 'INPUT', classMeta, HTMLTag, [HTMLTag, CommonAttributeGroupFacadeFlowInteractivePhrasingContent]);
  setMetadataFor(TEXTAREA, 'TEXTAREA', classMeta, HTMLTag, [HTMLTag, CommonAttributeGroupFacadeFlowInteractivePhrasingContent]);
  //endregion
  function get_emptyMap() {
    _init_properties_api_kt__c2p01k();
    return emptyMap_0;
  }
  var emptyMap_0;
  function AttributeEnum() {
  }
  function Tag() {
  }
  function TagConsumer() {
  }
  function HtmlTagMarker() {
  }
  protoOf(HtmlTagMarker).equals = function (other) {
    if (!(other instanceof HtmlTagMarker))
      return false;
    var tmp0_other_with_cast = other instanceof HtmlTagMarker ? other : THROW_CCE();
    return true;
  };
  protoOf(HtmlTagMarker).hashCode = function () {
    return 0;
  };
  protoOf(HtmlTagMarker).toString = function () {
    return '@kotlinx.html.HtmlTagMarker()';
  };
  function Unsafe() {
  }
  var properties_initialized_api_kt_zfwuc6;
  function _init_properties_api_kt__c2p01k() {
    if (properties_initialized_api_kt_zfwuc6) {
    } else {
      properties_initialized_api_kt_zfwuc6 = true;
      emptyMap_0 = emptyMap();
    }
  }
  function Attribute(encoder) {
    this.encoder_1 = encoder;
  }
  protoOf(Attribute).get_encoder_pbfikt_k$ = function () {
    return this.encoder_1;
  };
  protoOf(Attribute).get_kdqgs6_k$ = function (thisRef, attributeName) {
    var tmp0_safe_receiver = thisRef.get_attributes_dgqof4_k$().get_1mhr4y_k$(attributeName);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.html.attributes.Attribute.get.<anonymous>' call
      tmp$ret$0 = this.encoder_1.decode_w6qcwk_k$(attributeName, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.encoder_1.empty_mnkn29_k$(attributeName, thisRef) : tmp1_elvis_lhs;
  };
  protoOf(Attribute).set_r65rse_k$ = function (thisRef, attributeName, value) {
    thisRef.get_attributes_dgqof4_k$().put_3mhbri_k$(attributeName, this.encoder_1.encode_y2bd9m_k$(attributeName, value));
  };
  function StringAttribute() {
    Attribute.call(this, StringEncoder_getInstance());
  }
  function StringSetAttribute() {
    Attribute.call(this, StringSetEncoder_getInstance());
  }
  function BooleanAttribute(trueValue, falseValue) {
    trueValue = trueValue === VOID ? 'true' : trueValue;
    falseValue = falseValue === VOID ? 'false' : falseValue;
    Attribute.call(this, new BooleanEncoder(trueValue, falseValue));
  }
  function TickerAttribute() {
    Attribute.call(this, TickerEncoder_getInstance());
  }
  protoOf(TickerAttribute).set_yc3875_k$ = function (thisRef, attributeName, value) {
    if (value) {
      thisRef.get_attributes_dgqof4_k$().put_3mhbri_k$(attributeName, attributeName);
    } else {
      thisRef.get_attributes_dgqof4_k$().remove_8hbkc0_k$(attributeName);
    }
  };
  protoOf(TickerAttribute).set_r65rse_k$ = function (thisRef, attributeName, value) {
    return this.set_yc3875_k$(thisRef, attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  function EnumAttribute(values) {
    Attribute.call(this, new EnumEncoder(values));
    this.values_1 = values;
  }
  protoOf(EnumAttribute).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  function AttributeEncoder() {
  }
  function StringEncoder() {
    StringEncoder_instance = this;
  }
  protoOf(StringEncoder).encode_ewfsk4_k$ = function (attributeName, value) {
    return value;
  };
  protoOf(StringEncoder).encode_y2bd9m_k$ = function (attributeName, value) {
    return this.encode_ewfsk4_k$(attributeName, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringEncoder).decode_w6qcwk_k$ = function (attributeName, value) {
    return value;
  };
  var StringEncoder_instance;
  function StringEncoder_getInstance() {
    if (StringEncoder_instance == null)
      new StringEncoder();
    return StringEncoder_instance;
  }
  function StringSetEncoder() {
    StringSetEncoder_instance = this;
  }
  protoOf(StringSetEncoder).encode_5c7nxm_k$ = function (attributeName, value) {
    return joinToString(value, ' ');
  };
  protoOf(StringSetEncoder).encode_y2bd9m_k$ = function (attributeName, value) {
    return this.encode_5c7nxm_k$(attributeName, (!(value == null) ? isInterface(value, Set) : false) ? value : THROW_CCE());
  };
  protoOf(StringSetEncoder).decode_w6qcwk_k$ = function (attributeName, value) {
    return ensureNotNull(stringSetDecode(value));
  };
  protoOf(StringSetEncoder).empty_mnkn29_k$ = function (attributeName, tag) {
    return emptySet();
  };
  var StringSetEncoder_instance;
  function StringSetEncoder_getInstance() {
    if (StringSetEncoder_instance == null)
      new StringSetEncoder();
    return StringSetEncoder_instance;
  }
  function BooleanEncoder(trueValue, falseValue) {
    trueValue = trueValue === VOID ? 'true' : trueValue;
    falseValue = falseValue === VOID ? 'false' : falseValue;
    this.trueValue_1 = trueValue;
    this.falseValue_1 = falseValue;
  }
  protoOf(BooleanEncoder).get_trueValue_unaore_k$ = function () {
    return this.trueValue_1;
  };
  protoOf(BooleanEncoder).get_falseValue_ywwtih_k$ = function () {
    return this.falseValue_1;
  };
  protoOf(BooleanEncoder).encode_33b5x7_k$ = function (attributeName, value) {
    return value ? this.trueValue_1 : this.falseValue_1;
  };
  protoOf(BooleanEncoder).encode_y2bd9m_k$ = function (attributeName, value) {
    return this.encode_33b5x7_k$(attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanEncoder).decode_w6qcwk_k$ = function (attributeName, value) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject === this.trueValue_1) {
      tmp = true;
    } else if (tmp0_subject === this.falseValue_1) {
      tmp = false;
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown value ' + value + ' for ' + attributeName);
    }
    return tmp;
  };
  function TickerEncoder() {
    TickerEncoder_instance = this;
  }
  protoOf(TickerEncoder).encode_33b5x7_k$ = function (attributeName, value) {
    return tickerEncode(value, attributeName);
  };
  protoOf(TickerEncoder).encode_y2bd9m_k$ = function (attributeName, value) {
    return this.encode_33b5x7_k$(attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(TickerEncoder).decode_w6qcwk_k$ = function (attributeName, value) {
    return value === attributeName;
  };
  var TickerEncoder_instance;
  function TickerEncoder_getInstance() {
    if (TickerEncoder_instance == null)
      new TickerEncoder();
    return TickerEncoder_instance;
  }
  function EnumEncoder(valuesMap) {
    this.valuesMap_1 = valuesMap;
  }
  protoOf(EnumEncoder).get_valuesMap_44trkf_k$ = function () {
    return this.valuesMap_1;
  };
  protoOf(EnumEncoder).encode_y2bd9m_k$ = function (attributeName, value) {
    return value.get_realValue_69bbcm_k$();
  };
  protoOf(EnumEncoder).decode_w6qcwk_k$ = function (attributeName, value) {
    var tmp0_elvis_lhs = this.valuesMap_1.get_1mhr4y_k$(value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Unknown value ' + value + ' for ' + attributeName);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function stringSetDecode(value) {
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.text.split' call
      var tmp$ret$0;
      // Inline function 'kotlin.text.toRegex' call
      tmp$ret$0 = Regex_init_$Create$('\\s+');
      var tmp0_split = tmp$ret$0;
      tmp$ret$1 = tmp0_split.split_8rwwda_k$(tmp0_safe_receiver, 0);
      tmp = tmp$ret$1;
    }
    var tmp1_safe_receiver = tmp;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.filterNot' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.filterNotTo' call
      var tmp1_filterNotTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$3;
        // Inline function 'kotlinx.html.attributes.stringSetDecode.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.isEmpty' call
        tmp$ret$2 = charSequenceLength(element) === 0;
        tmp$ret$3 = tmp$ret$2;
        if (!tmp$ret$3) {
          tmp1_filterNotTo.add_1j60pz_k$(element);
        }
      }
      tmp$ret$4 = tmp1_filterNotTo;
      tmp$ret$5 = tmp$ret$4;
      tmp_0 = tmp$ret$5;
    }
    var tmp2_safe_receiver = tmp_0;
    return tmp2_safe_receiver == null ? null : toSet(tmp2_safe_receiver);
  }
  function tickerEncode(_this__u8e3s4, attributeName) {
    return _this__u8e3s4 ? attributeName : '';
  }
  function _get_tag__e6h4qf($this) {
    return $this.tag_1;
  }
  function _get_consumer__hjl9jp($this) {
    return $this.consumer_1;
  }
  function _set_backing__ou0ocq($this, _set____db54di) {
    $this.backing_1 = _set____db54di;
  }
  function _get_backing__s7m0a($this) {
    return $this.backing_1;
  }
  function _set_backingMutable__g4cv4k($this, _set____db54di) {
    $this.backingMutable_1 = _set____db54di;
  }
  function _get_backingMutable__9eqkww($this) {
    return $this.backingMutable_1;
  }
  function switchToMutable($this) {
    var tmp;
    if ($this.backingMutable_1) {
      tmp = $this.backing_1;
    } else {
      $this.backingMutable_1 = true;
      $this.backing_1 = LinkedHashMap_init_$Create$($this.backing_1);
      tmp = $this.backing_1;
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, MutableMap) ? tmp_0 : THROW_CCE();
  }
  function DelegatingMap(initialValues, tag, consumer) {
    this.tag_1 = tag;
    this.consumer_1 = consumer;
    this.backing_1 = initialValues;
    this.backingMutable_1 = false;
  }
  protoOf(DelegatingMap).get_size_woubt6_k$ = function () {
    return this.backing_1.get_size_woubt6_k$();
  };
  protoOf(DelegatingMap).isEmpty_y1axqb_k$ = function () {
    return this.backing_1.isEmpty_y1axqb_k$();
  };
  protoOf(DelegatingMap).containsKey_mw51tt_k$ = function (key) {
    return this.backing_1.containsKey_wgk31w_k$(key);
  };
  protoOf(DelegatingMap).containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(DelegatingMap).containsValue_h0v3u7_k$ = function (value) {
    return this.backing_1.containsValue_5viga1_k$(value);
  };
  protoOf(DelegatingMap).containsValue_5viga1_k$ = function (value) {
    if (!(!(value == null) ? typeof value === 'string' : false))
      return false;
    return this.containsValue_h0v3u7_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(DelegatingMap).get_4u8u51_k$ = function (key) {
    return this.backing_1.get_1mhr4y_k$(key);
  };
  protoOf(DelegatingMap).get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(DelegatingMap).put_6z04z7_k$ = function (key, value) {
    var mutable = switchToMutable(this);
    var old = mutable.put_3mhbri_k$(key, value);
    if (!(old === value)) {
      this.consumer_1().onTagAttributeChange_agii2c_k$(this.tag_1, key, value);
    }
    return old;
  };
  protoOf(DelegatingMap).put_3mhbri_k$ = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_6z04z7_k$(tmp, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(DelegatingMap).remove_kj1003_k$ = function (key) {
    var mutable = switchToMutable(this);
    var tmp0_safe_receiver = mutable.remove_8hbkc0_k$(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.html.impl.DelegatingMap.remove.<anonymous>' call
      this.consumer_1().onTagAttributeChange_agii2c_k$(this.tag_1, key, null);
      tmp$ret$0 = tmp0_safe_receiver;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(DelegatingMap).remove_8hbkc0_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.remove_kj1003_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(DelegatingMap).putAll_6pzwxk_k$ = function (from) {
    if (from.isEmpty_y1axqb_k$())
      return Unit_getInstance();
    var consumer = this.consumer_1();
    var mutable = switchToMutable(this);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = from.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.html.impl.DelegatingMap.putAll.<anonymous>' call
      if (!(mutable.put_3mhbri_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$()) === element.get_value_j01efc_k$())) {
        consumer.onTagAttributeChange_agii2c_k$(this.tag_1, element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
      }
    }
  };
  protoOf(DelegatingMap).putAll_mee1c3_k$ = function (from) {
    return this.putAll_6pzwxk_k$(from);
  };
  protoOf(DelegatingMap).clear_j9y8zo_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.backing_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.html.impl.DelegatingMap.clear.<anonymous>' call
      this.consumer_1().onTagAttributeChange_agii2c_k$(this.tag_1, element.get_key_18j28a_k$(), null);
    }
    this.backing_1 = emptyMap();
    this.backingMutable_1 = false;
  };
  protoOf(DelegatingMap).get_immutableEntries_iyyb1z_k$ = function () {
    return this.backing_1.get_entries_p20ztl_k$();
  };
  protoOf(DelegatingMap).get_keys_wop4xp_k$ = function () {
    return switchToMutable(this).get_keys_wop4xp_k$();
  };
  protoOf(DelegatingMap).get_values_ksazhn_k$ = function () {
    return switchToMutable(this).get_values_ksazhn_k$();
  };
  protoOf(DelegatingMap).get_entries_p20ztl_k$ = function () {
    return switchToMutable(this).get_entries_p20ztl_k$();
  };
  function CommonAttributeGroupFacade() {
  }
  function get_attributeStringString() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeStringString;
  }
  var attributeStringString;
  function get_attributeSetStringStringSet() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeSetStringStringSet;
  }
  var attributeSetStringStringSet;
  function get_attributeBooleanBoolean() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeBooleanBoolean;
  }
  var attributeBooleanBoolean;
  function get_attributeBooleanBooleanOnOff() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeBooleanBooleanOnOff;
  }
  var attributeBooleanBooleanOnOff;
  function get_attributeBooleanTicker() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeBooleanTicker;
  }
  var attributeBooleanTicker;
  function get_attributeButtonFormEncTypeEnumButtonFormEncTypeValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
  }
  var attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
  function get_attributeButtonFormMethodEnumButtonFormMethodValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeButtonFormMethodEnumButtonFormMethodValues;
  }
  var attributeButtonFormMethodEnumButtonFormMethodValues;
  function get_attributeButtonTypeEnumButtonTypeValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeButtonTypeEnumButtonTypeValues;
  }
  var attributeButtonTypeEnumButtonTypeValues;
  function get_attributeCommandTypeEnumCommandTypeValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeCommandTypeEnumCommandTypeValues;
  }
  var attributeCommandTypeEnumCommandTypeValues;
  function get_attributeDirEnumDirValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeDirEnumDirValues;
  }
  var attributeDirEnumDirValues;
  function get_attributeDraggableEnumDraggableValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeDraggableEnumDraggableValues;
  }
  var attributeDraggableEnumDraggableValues;
  function get_attributeFormEncTypeEnumFormEncTypeValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeFormEncTypeEnumFormEncTypeValues;
  }
  var attributeFormEncTypeEnumFormEncTypeValues;
  function get_attributeFormMethodEnumFormMethodValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeFormMethodEnumFormMethodValues;
  }
  var attributeFormMethodEnumFormMethodValues;
  function get_attributeIframeSandboxEnumIframeSandboxValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeIframeSandboxEnumIframeSandboxValues;
  }
  var attributeIframeSandboxEnumIframeSandboxValues;
  function get_attributeInputFormEncTypeEnumInputFormEncTypeValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeInputFormEncTypeEnumInputFormEncTypeValues;
  }
  var attributeInputFormEncTypeEnumInputFormEncTypeValues;
  function get_attributeInputFormMethodEnumInputFormMethodValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeInputFormMethodEnumInputFormMethodValues;
  }
  var attributeInputFormMethodEnumInputFormMethodValues;
  function get_attributeInputTypeEnumInputTypeValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeInputTypeEnumInputTypeValues;
  }
  var attributeInputTypeEnumInputTypeValues;
  function get_attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
  }
  var attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
  function get_attributeRunAtEnumRunAtValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeRunAtEnumRunAtValues;
  }
  var attributeRunAtEnumRunAtValues;
  function get_attributeTextAreaWrapEnumTextAreaWrapValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeTextAreaWrapEnumTextAreaWrapValues;
  }
  var attributeTextAreaWrapEnumTextAreaWrapValues;
  function get_attributeThScopeEnumThScopeValues() {
    _init_properties_gen_attributes_kt__jy8yj0();
    return attributeThScopeEnumThScopeValues;
  }
  var attributeThScopeEnumThScopeValues;
  var properties_initialized_gen_attributes_kt_jgv7sa;
  function _init_properties_gen_attributes_kt__jy8yj0() {
    if (properties_initialized_gen_attributes_kt_jgv7sa) {
    } else {
      properties_initialized_gen_attributes_kt_jgv7sa = true;
      attributeStringString = new StringAttribute();
      attributeSetStringStringSet = new StringSetAttribute();
      attributeBooleanBoolean = new BooleanAttribute();
      attributeBooleanBooleanOnOff = new BooleanAttribute('on', 'off');
      attributeBooleanTicker = new TickerAttribute();
      attributeButtonFormEncTypeEnumButtonFormEncTypeValues = new EnumAttribute(get_buttonFormEncTypeValues());
      attributeButtonFormMethodEnumButtonFormMethodValues = new EnumAttribute(get_buttonFormMethodValues());
      attributeButtonTypeEnumButtonTypeValues = new EnumAttribute(get_buttonTypeValues());
      attributeCommandTypeEnumCommandTypeValues = new EnumAttribute(get_commandTypeValues());
      attributeDirEnumDirValues = new EnumAttribute(get_dirValues());
      attributeDraggableEnumDraggableValues = new EnumAttribute(get_draggableValues());
      attributeFormEncTypeEnumFormEncTypeValues = new EnumAttribute(get_formEncTypeValues());
      attributeFormMethodEnumFormMethodValues = new EnumAttribute(get_formMethodValues());
      attributeIframeSandboxEnumIframeSandboxValues = new EnumAttribute(get_iframeSandboxValues());
      attributeInputFormEncTypeEnumInputFormEncTypeValues = new EnumAttribute(get_inputFormEncTypeValues());
      attributeInputFormMethodEnumInputFormMethodValues = new EnumAttribute(get_inputFormMethodValues());
      attributeInputTypeEnumInputTypeValues = new EnumAttribute(get_inputTypeValues());
      attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues = new EnumAttribute(get_keyGenKeyTypeValues());
      attributeRunAtEnumRunAtValues = new EnumAttribute(get_runAtValues());
      attributeTextAreaWrapEnumTextAreaWrapValues = new EnumAttribute(get_textAreaWrapValues());
      attributeThScopeEnumThScopeValues = new EnumAttribute(get_thScopeValues());
    }
  }
  var Entities_nbsp_instance;
  var Entities_lt_instance;
  var Entities_gt_instance;
  var Entities_quot_instance;
  var Entities_amp_instance;
  var Entities_apos_instance;
  var Entities_iexcl_instance;
  var Entities_cent_instance;
  var Entities_pound_instance;
  var Entities_curren_instance;
  var Entities_yen_instance;
  var Entities_brvbar_instance;
  var Entities_sect_instance;
  var Entities_uml_instance;
  var Entities_copy_instance;
  var Entities_ordf_instance;
  var Entities_laquo_instance;
  var Entities_not_instance;
  var Entities_shy_instance;
  var Entities_reg_instance;
  var Entities_macr_instance;
  var Entities_deg_instance;
  var Entities_plusmn_instance;
  var Entities_sup2_instance;
  var Entities_sup3_instance;
  var Entities_acute_instance;
  var Entities_micro_instance;
  var Entities_para_instance;
  var Entities_middot_instance;
  var Entities_cedil_instance;
  var Entities_sup1_instance;
  var Entities_ordm_instance;
  var Entities_raquo_instance;
  var Entities_frac14_instance;
  var Entities_frac12_instance;
  var Entities_frac34_instance;
  var Entities_iquest_instance;
  var Entities_Agrave_instance;
  var Entities_Aacute_instance;
  var Entities_Acirc_instance;
  var Entities_Atilde_instance;
  var Entities_Auml_instance;
  var Entities_Aring_instance;
  var Entities_AElig_instance;
  var Entities_Ccedil_instance;
  var Entities_Egrave_instance;
  var Entities_Eacute_instance;
  var Entities_Ecirc_instance;
  var Entities_Euml_instance;
  var Entities_Igrave_instance;
  var Entities_Iacute_instance;
  var Entities_Icirc_instance;
  var Entities_Iuml_instance;
  var Entities_ETH_instance;
  var Entities_Ntilde_instance;
  var Entities_Ograve_instance;
  var Entities_Oacute_instance;
  var Entities_Ocirc_instance;
  var Entities_Otilde_instance;
  var Entities_Ouml_instance;
  var Entities_times_instance;
  var Entities_Oslash_instance;
  var Entities_Ugrave_instance;
  var Entities_Uacute_instance;
  var Entities_Ucirc_instance;
  var Entities_Uuml_instance;
  var Entities_Yacute_instance;
  var Entities_THORN_instance;
  var Entities_szlig_instance;
  var Entities_agrave_instance;
  var Entities_aacute_instance;
  var Entities_acirc_instance;
  var Entities_atilde_instance;
  var Entities_auml_instance;
  var Entities_aring_instance;
  var Entities_aelig_instance;
  var Entities_ccedil_instance;
  var Entities_egrave_instance;
  var Entities_eacute_instance;
  var Entities_ecirc_instance;
  var Entities_euml_instance;
  var Entities_igrave_instance;
  var Entities_iacute_instance;
  var Entities_icirc_instance;
  var Entities_iuml_instance;
  var Entities_eth_instance;
  var Entities_ntilde_instance;
  var Entities_ograve_instance;
  var Entities_oacute_instance;
  var Entities_ocirc_instance;
  var Entities_otilde_instance;
  var Entities_ouml_instance;
  var Entities_divide_instance;
  var Entities_oslash_instance;
  var Entities_ugrave_instance;
  var Entities_uacute_instance;
  var Entities_ucirc_instance;
  var Entities_uuml_instance;
  var Entities_yacute_instance;
  var Entities_thorn_instance;
  var Entities_yuml_instance;
  function values() {
    return [Entities_nbsp_getInstance(), Entities_lt_getInstance(), Entities_gt_getInstance(), Entities_quot_getInstance(), Entities_amp_getInstance(), Entities_apos_getInstance(), Entities_iexcl_getInstance(), Entities_cent_getInstance(), Entities_pound_getInstance(), Entities_curren_getInstance(), Entities_yen_getInstance(), Entities_brvbar_getInstance(), Entities_sect_getInstance(), Entities_uml_getInstance(), Entities_copy_getInstance(), Entities_ordf_getInstance(), Entities_laquo_getInstance(), Entities_not_getInstance(), Entities_shy_getInstance(), Entities_reg_getInstance(), Entities_macr_getInstance(), Entities_deg_getInstance(), Entities_plusmn_getInstance(), Entities_sup2_getInstance(), Entities_sup3_getInstance(), Entities_acute_getInstance(), Entities_micro_getInstance(), Entities_para_getInstance(), Entities_middot_getInstance(), Entities_cedil_getInstance(), Entities_sup1_getInstance(), Entities_ordm_getInstance(), Entities_raquo_getInstance(), Entities_frac14_getInstance(), Entities_frac12_getInstance(), Entities_frac34_getInstance(), Entities_iquest_getInstance(), Entities_Agrave_getInstance(), Entities_Aacute_getInstance(), Entities_Acirc_getInstance(), Entities_Atilde_getInstance(), Entities_Auml_getInstance(), Entities_Aring_getInstance(), Entities_AElig_getInstance(), Entities_Ccedil_getInstance(), Entities_Egrave_getInstance(), Entities_Eacute_getInstance(), Entities_Ecirc_getInstance(), Entities_Euml_getInstance(), Entities_Igrave_getInstance(), Entities_Iacute_getInstance(), Entities_Icirc_getInstance(), Entities_Iuml_getInstance(), Entities_ETH_getInstance(), Entities_Ntilde_getInstance(), Entities_Ograve_getInstance(), Entities_Oacute_getInstance(), Entities_Ocirc_getInstance(), Entities_Otilde_getInstance(), Entities_Ouml_getInstance(), Entities_times_getInstance(), Entities_Oslash_getInstance(), Entities_Ugrave_getInstance(), Entities_Uacute_getInstance(), Entities_Ucirc_getInstance(), Entities_Uuml_getInstance(), Entities_Yacute_getInstance(), Entities_THORN_getInstance(), Entities_szlig_getInstance(), Entities_agrave_getInstance(), Entities_aacute_getInstance(), Entities_acirc_getInstance(), Entities_atilde_getInstance(), Entities_auml_getInstance(), Entities_aring_getInstance(), Entities_aelig_getInstance(), Entities_ccedil_getInstance(), Entities_egrave_getInstance(), Entities_eacute_getInstance(), Entities_ecirc_getInstance(), Entities_euml_getInstance(), Entities_igrave_getInstance(), Entities_iacute_getInstance(), Entities_icirc_getInstance(), Entities_iuml_getInstance(), Entities_eth_getInstance(), Entities_ntilde_getInstance(), Entities_ograve_getInstance(), Entities_oacute_getInstance(), Entities_ocirc_getInstance(), Entities_otilde_getInstance(), Entities_ouml_getInstance(), Entities_divide_getInstance(), Entities_oslash_getInstance(), Entities_ugrave_getInstance(), Entities_uacute_getInstance(), Entities_ucirc_getInstance(), Entities_uuml_getInstance(), Entities_yacute_getInstance(), Entities_thorn_getInstance(), Entities_yuml_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'nbsp':
        return Entities_nbsp_getInstance();
      case 'lt':
        return Entities_lt_getInstance();
      case 'gt':
        return Entities_gt_getInstance();
      case 'quot':
        return Entities_quot_getInstance();
      case 'amp':
        return Entities_amp_getInstance();
      case 'apos':
        return Entities_apos_getInstance();
      case 'iexcl':
        return Entities_iexcl_getInstance();
      case 'cent':
        return Entities_cent_getInstance();
      case 'pound':
        return Entities_pound_getInstance();
      case 'curren':
        return Entities_curren_getInstance();
      case 'yen':
        return Entities_yen_getInstance();
      case 'brvbar':
        return Entities_brvbar_getInstance();
      case 'sect':
        return Entities_sect_getInstance();
      case 'uml':
        return Entities_uml_getInstance();
      case 'copy':
        return Entities_copy_getInstance();
      case 'ordf':
        return Entities_ordf_getInstance();
      case 'laquo':
        return Entities_laquo_getInstance();
      case 'not':
        return Entities_not_getInstance();
      case 'shy':
        return Entities_shy_getInstance();
      case 'reg':
        return Entities_reg_getInstance();
      case 'macr':
        return Entities_macr_getInstance();
      case 'deg':
        return Entities_deg_getInstance();
      case 'plusmn':
        return Entities_plusmn_getInstance();
      case 'sup2':
        return Entities_sup2_getInstance();
      case 'sup3':
        return Entities_sup3_getInstance();
      case 'acute':
        return Entities_acute_getInstance();
      case 'micro':
        return Entities_micro_getInstance();
      case 'para':
        return Entities_para_getInstance();
      case 'middot':
        return Entities_middot_getInstance();
      case 'cedil':
        return Entities_cedil_getInstance();
      case 'sup1':
        return Entities_sup1_getInstance();
      case 'ordm':
        return Entities_ordm_getInstance();
      case 'raquo':
        return Entities_raquo_getInstance();
      case 'frac14':
        return Entities_frac14_getInstance();
      case 'frac12':
        return Entities_frac12_getInstance();
      case 'frac34':
        return Entities_frac34_getInstance();
      case 'iquest':
        return Entities_iquest_getInstance();
      case 'Agrave':
        return Entities_Agrave_getInstance();
      case 'Aacute':
        return Entities_Aacute_getInstance();
      case 'Acirc':
        return Entities_Acirc_getInstance();
      case 'Atilde':
        return Entities_Atilde_getInstance();
      case 'Auml':
        return Entities_Auml_getInstance();
      case 'Aring':
        return Entities_Aring_getInstance();
      case 'AElig':
        return Entities_AElig_getInstance();
      case 'Ccedil':
        return Entities_Ccedil_getInstance();
      case 'Egrave':
        return Entities_Egrave_getInstance();
      case 'Eacute':
        return Entities_Eacute_getInstance();
      case 'Ecirc':
        return Entities_Ecirc_getInstance();
      case 'Euml':
        return Entities_Euml_getInstance();
      case 'Igrave':
        return Entities_Igrave_getInstance();
      case 'Iacute':
        return Entities_Iacute_getInstance();
      case 'Icirc':
        return Entities_Icirc_getInstance();
      case 'Iuml':
        return Entities_Iuml_getInstance();
      case 'ETH':
        return Entities_ETH_getInstance();
      case 'Ntilde':
        return Entities_Ntilde_getInstance();
      case 'Ograve':
        return Entities_Ograve_getInstance();
      case 'Oacute':
        return Entities_Oacute_getInstance();
      case 'Ocirc':
        return Entities_Ocirc_getInstance();
      case 'Otilde':
        return Entities_Otilde_getInstance();
      case 'Ouml':
        return Entities_Ouml_getInstance();
      case 'times':
        return Entities_times_getInstance();
      case 'Oslash':
        return Entities_Oslash_getInstance();
      case 'Ugrave':
        return Entities_Ugrave_getInstance();
      case 'Uacute':
        return Entities_Uacute_getInstance();
      case 'Ucirc':
        return Entities_Ucirc_getInstance();
      case 'Uuml':
        return Entities_Uuml_getInstance();
      case 'Yacute':
        return Entities_Yacute_getInstance();
      case 'THORN':
        return Entities_THORN_getInstance();
      case 'szlig':
        return Entities_szlig_getInstance();
      case 'agrave':
        return Entities_agrave_getInstance();
      case 'aacute':
        return Entities_aacute_getInstance();
      case 'acirc':
        return Entities_acirc_getInstance();
      case 'atilde':
        return Entities_atilde_getInstance();
      case 'auml':
        return Entities_auml_getInstance();
      case 'aring':
        return Entities_aring_getInstance();
      case 'aelig':
        return Entities_aelig_getInstance();
      case 'ccedil':
        return Entities_ccedil_getInstance();
      case 'egrave':
        return Entities_egrave_getInstance();
      case 'eacute':
        return Entities_eacute_getInstance();
      case 'ecirc':
        return Entities_ecirc_getInstance();
      case 'euml':
        return Entities_euml_getInstance();
      case 'igrave':
        return Entities_igrave_getInstance();
      case 'iacute':
        return Entities_iacute_getInstance();
      case 'icirc':
        return Entities_icirc_getInstance();
      case 'iuml':
        return Entities_iuml_getInstance();
      case 'eth':
        return Entities_eth_getInstance();
      case 'ntilde':
        return Entities_ntilde_getInstance();
      case 'ograve':
        return Entities_ograve_getInstance();
      case 'oacute':
        return Entities_oacute_getInstance();
      case 'ocirc':
        return Entities_ocirc_getInstance();
      case 'otilde':
        return Entities_otilde_getInstance();
      case 'ouml':
        return Entities_ouml_getInstance();
      case 'divide':
        return Entities_divide_getInstance();
      case 'oslash':
        return Entities_oslash_getInstance();
      case 'ugrave':
        return Entities_ugrave_getInstance();
      case 'uacute':
        return Entities_uacute_getInstance();
      case 'ucirc':
        return Entities_ucirc_getInstance();
      case 'uuml':
        return Entities_uuml_getInstance();
      case 'yacute':
        return Entities_yacute_getInstance();
      case 'thorn':
        return Entities_thorn_getInstance();
      case 'yuml':
        return Entities_yuml_getInstance();
      default:
        Entities_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Entities_entriesInitialized;
  function Entities_initEntries() {
    if (Entities_entriesInitialized)
      return Unit_getInstance();
    Entities_entriesInitialized = true;
    Entities_nbsp_instance = new Entities('nbsp', 0);
    Entities_lt_instance = new Entities('lt', 1);
    Entities_gt_instance = new Entities('gt', 2);
    Entities_quot_instance = new Entities('quot', 3);
    Entities_amp_instance = new Entities('amp', 4);
    Entities_apos_instance = new Entities('apos', 5);
    Entities_iexcl_instance = new Entities('iexcl', 6);
    Entities_cent_instance = new Entities('cent', 7);
    Entities_pound_instance = new Entities('pound', 8);
    Entities_curren_instance = new Entities('curren', 9);
    Entities_yen_instance = new Entities('yen', 10);
    Entities_brvbar_instance = new Entities('brvbar', 11);
    Entities_sect_instance = new Entities('sect', 12);
    Entities_uml_instance = new Entities('uml', 13);
    Entities_copy_instance = new Entities('copy', 14);
    Entities_ordf_instance = new Entities('ordf', 15);
    Entities_laquo_instance = new Entities('laquo', 16);
    Entities_not_instance = new Entities('not', 17);
    Entities_shy_instance = new Entities('shy', 18);
    Entities_reg_instance = new Entities('reg', 19);
    Entities_macr_instance = new Entities('macr', 20);
    Entities_deg_instance = new Entities('deg', 21);
    Entities_plusmn_instance = new Entities('plusmn', 22);
    Entities_sup2_instance = new Entities('sup2', 23);
    Entities_sup3_instance = new Entities('sup3', 24);
    Entities_acute_instance = new Entities('acute', 25);
    Entities_micro_instance = new Entities('micro', 26);
    Entities_para_instance = new Entities('para', 27);
    Entities_middot_instance = new Entities('middot', 28);
    Entities_cedil_instance = new Entities('cedil', 29);
    Entities_sup1_instance = new Entities('sup1', 30);
    Entities_ordm_instance = new Entities('ordm', 31);
    Entities_raquo_instance = new Entities('raquo', 32);
    Entities_frac14_instance = new Entities('frac14', 33);
    Entities_frac12_instance = new Entities('frac12', 34);
    Entities_frac34_instance = new Entities('frac34', 35);
    Entities_iquest_instance = new Entities('iquest', 36);
    Entities_Agrave_instance = new Entities('Agrave', 37);
    Entities_Aacute_instance = new Entities('Aacute', 38);
    Entities_Acirc_instance = new Entities('Acirc', 39);
    Entities_Atilde_instance = new Entities('Atilde', 40);
    Entities_Auml_instance = new Entities('Auml', 41);
    Entities_Aring_instance = new Entities('Aring', 42);
    Entities_AElig_instance = new Entities('AElig', 43);
    Entities_Ccedil_instance = new Entities('Ccedil', 44);
    Entities_Egrave_instance = new Entities('Egrave', 45);
    Entities_Eacute_instance = new Entities('Eacute', 46);
    Entities_Ecirc_instance = new Entities('Ecirc', 47);
    Entities_Euml_instance = new Entities('Euml', 48);
    Entities_Igrave_instance = new Entities('Igrave', 49);
    Entities_Iacute_instance = new Entities('Iacute', 50);
    Entities_Icirc_instance = new Entities('Icirc', 51);
    Entities_Iuml_instance = new Entities('Iuml', 52);
    Entities_ETH_instance = new Entities('ETH', 53);
    Entities_Ntilde_instance = new Entities('Ntilde', 54);
    Entities_Ograve_instance = new Entities('Ograve', 55);
    Entities_Oacute_instance = new Entities('Oacute', 56);
    Entities_Ocirc_instance = new Entities('Ocirc', 57);
    Entities_Otilde_instance = new Entities('Otilde', 58);
    Entities_Ouml_instance = new Entities('Ouml', 59);
    Entities_times_instance = new Entities('times', 60);
    Entities_Oslash_instance = new Entities('Oslash', 61);
    Entities_Ugrave_instance = new Entities('Ugrave', 62);
    Entities_Uacute_instance = new Entities('Uacute', 63);
    Entities_Ucirc_instance = new Entities('Ucirc', 64);
    Entities_Uuml_instance = new Entities('Uuml', 65);
    Entities_Yacute_instance = new Entities('Yacute', 66);
    Entities_THORN_instance = new Entities('THORN', 67);
    Entities_szlig_instance = new Entities('szlig', 68);
    Entities_agrave_instance = new Entities('agrave', 69);
    Entities_aacute_instance = new Entities('aacute', 70);
    Entities_acirc_instance = new Entities('acirc', 71);
    Entities_atilde_instance = new Entities('atilde', 72);
    Entities_auml_instance = new Entities('auml', 73);
    Entities_aring_instance = new Entities('aring', 74);
    Entities_aelig_instance = new Entities('aelig', 75);
    Entities_ccedil_instance = new Entities('ccedil', 76);
    Entities_egrave_instance = new Entities('egrave', 77);
    Entities_eacute_instance = new Entities('eacute', 78);
    Entities_ecirc_instance = new Entities('ecirc', 79);
    Entities_euml_instance = new Entities('euml', 80);
    Entities_igrave_instance = new Entities('igrave', 81);
    Entities_iacute_instance = new Entities('iacute', 82);
    Entities_icirc_instance = new Entities('icirc', 83);
    Entities_iuml_instance = new Entities('iuml', 84);
    Entities_eth_instance = new Entities('eth', 85);
    Entities_ntilde_instance = new Entities('ntilde', 86);
    Entities_ograve_instance = new Entities('ograve', 87);
    Entities_oacute_instance = new Entities('oacute', 88);
    Entities_ocirc_instance = new Entities('ocirc', 89);
    Entities_otilde_instance = new Entities('otilde', 90);
    Entities_ouml_instance = new Entities('ouml', 91);
    Entities_divide_instance = new Entities('divide', 92);
    Entities_oslash_instance = new Entities('oslash', 93);
    Entities_ugrave_instance = new Entities('ugrave', 94);
    Entities_uacute_instance = new Entities('uacute', 95);
    Entities_ucirc_instance = new Entities('ucirc', 96);
    Entities_uuml_instance = new Entities('uuml', 97);
    Entities_yacute_instance = new Entities('yacute', 98);
    Entities_thorn_instance = new Entities('thorn', 99);
    Entities_yuml_instance = new Entities('yuml', 100);
  }
  function Entities(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Entities).get_text_wouvsm_k$ = function () {
    return '&' + this.toString() + ';';
  };
  function Entities_nbsp_getInstance() {
    Entities_initEntries();
    return Entities_nbsp_instance;
  }
  function Entities_lt_getInstance() {
    Entities_initEntries();
    return Entities_lt_instance;
  }
  function Entities_gt_getInstance() {
    Entities_initEntries();
    return Entities_gt_instance;
  }
  function Entities_quot_getInstance() {
    Entities_initEntries();
    return Entities_quot_instance;
  }
  function Entities_amp_getInstance() {
    Entities_initEntries();
    return Entities_amp_instance;
  }
  function Entities_apos_getInstance() {
    Entities_initEntries();
    return Entities_apos_instance;
  }
  function Entities_iexcl_getInstance() {
    Entities_initEntries();
    return Entities_iexcl_instance;
  }
  function Entities_cent_getInstance() {
    Entities_initEntries();
    return Entities_cent_instance;
  }
  function Entities_pound_getInstance() {
    Entities_initEntries();
    return Entities_pound_instance;
  }
  function Entities_curren_getInstance() {
    Entities_initEntries();
    return Entities_curren_instance;
  }
  function Entities_yen_getInstance() {
    Entities_initEntries();
    return Entities_yen_instance;
  }
  function Entities_brvbar_getInstance() {
    Entities_initEntries();
    return Entities_brvbar_instance;
  }
  function Entities_sect_getInstance() {
    Entities_initEntries();
    return Entities_sect_instance;
  }
  function Entities_uml_getInstance() {
    Entities_initEntries();
    return Entities_uml_instance;
  }
  function Entities_copy_getInstance() {
    Entities_initEntries();
    return Entities_copy_instance;
  }
  function Entities_ordf_getInstance() {
    Entities_initEntries();
    return Entities_ordf_instance;
  }
  function Entities_laquo_getInstance() {
    Entities_initEntries();
    return Entities_laquo_instance;
  }
  function Entities_not_getInstance() {
    Entities_initEntries();
    return Entities_not_instance;
  }
  function Entities_shy_getInstance() {
    Entities_initEntries();
    return Entities_shy_instance;
  }
  function Entities_reg_getInstance() {
    Entities_initEntries();
    return Entities_reg_instance;
  }
  function Entities_macr_getInstance() {
    Entities_initEntries();
    return Entities_macr_instance;
  }
  function Entities_deg_getInstance() {
    Entities_initEntries();
    return Entities_deg_instance;
  }
  function Entities_plusmn_getInstance() {
    Entities_initEntries();
    return Entities_plusmn_instance;
  }
  function Entities_sup2_getInstance() {
    Entities_initEntries();
    return Entities_sup2_instance;
  }
  function Entities_sup3_getInstance() {
    Entities_initEntries();
    return Entities_sup3_instance;
  }
  function Entities_acute_getInstance() {
    Entities_initEntries();
    return Entities_acute_instance;
  }
  function Entities_micro_getInstance() {
    Entities_initEntries();
    return Entities_micro_instance;
  }
  function Entities_para_getInstance() {
    Entities_initEntries();
    return Entities_para_instance;
  }
  function Entities_middot_getInstance() {
    Entities_initEntries();
    return Entities_middot_instance;
  }
  function Entities_cedil_getInstance() {
    Entities_initEntries();
    return Entities_cedil_instance;
  }
  function Entities_sup1_getInstance() {
    Entities_initEntries();
    return Entities_sup1_instance;
  }
  function Entities_ordm_getInstance() {
    Entities_initEntries();
    return Entities_ordm_instance;
  }
  function Entities_raquo_getInstance() {
    Entities_initEntries();
    return Entities_raquo_instance;
  }
  function Entities_frac14_getInstance() {
    Entities_initEntries();
    return Entities_frac14_instance;
  }
  function Entities_frac12_getInstance() {
    Entities_initEntries();
    return Entities_frac12_instance;
  }
  function Entities_frac34_getInstance() {
    Entities_initEntries();
    return Entities_frac34_instance;
  }
  function Entities_iquest_getInstance() {
    Entities_initEntries();
    return Entities_iquest_instance;
  }
  function Entities_Agrave_getInstance() {
    Entities_initEntries();
    return Entities_Agrave_instance;
  }
  function Entities_Aacute_getInstance() {
    Entities_initEntries();
    return Entities_Aacute_instance;
  }
  function Entities_Acirc_getInstance() {
    Entities_initEntries();
    return Entities_Acirc_instance;
  }
  function Entities_Atilde_getInstance() {
    Entities_initEntries();
    return Entities_Atilde_instance;
  }
  function Entities_Auml_getInstance() {
    Entities_initEntries();
    return Entities_Auml_instance;
  }
  function Entities_Aring_getInstance() {
    Entities_initEntries();
    return Entities_Aring_instance;
  }
  function Entities_AElig_getInstance() {
    Entities_initEntries();
    return Entities_AElig_instance;
  }
  function Entities_Ccedil_getInstance() {
    Entities_initEntries();
    return Entities_Ccedil_instance;
  }
  function Entities_Egrave_getInstance() {
    Entities_initEntries();
    return Entities_Egrave_instance;
  }
  function Entities_Eacute_getInstance() {
    Entities_initEntries();
    return Entities_Eacute_instance;
  }
  function Entities_Ecirc_getInstance() {
    Entities_initEntries();
    return Entities_Ecirc_instance;
  }
  function Entities_Euml_getInstance() {
    Entities_initEntries();
    return Entities_Euml_instance;
  }
  function Entities_Igrave_getInstance() {
    Entities_initEntries();
    return Entities_Igrave_instance;
  }
  function Entities_Iacute_getInstance() {
    Entities_initEntries();
    return Entities_Iacute_instance;
  }
  function Entities_Icirc_getInstance() {
    Entities_initEntries();
    return Entities_Icirc_instance;
  }
  function Entities_Iuml_getInstance() {
    Entities_initEntries();
    return Entities_Iuml_instance;
  }
  function Entities_ETH_getInstance() {
    Entities_initEntries();
    return Entities_ETH_instance;
  }
  function Entities_Ntilde_getInstance() {
    Entities_initEntries();
    return Entities_Ntilde_instance;
  }
  function Entities_Ograve_getInstance() {
    Entities_initEntries();
    return Entities_Ograve_instance;
  }
  function Entities_Oacute_getInstance() {
    Entities_initEntries();
    return Entities_Oacute_instance;
  }
  function Entities_Ocirc_getInstance() {
    Entities_initEntries();
    return Entities_Ocirc_instance;
  }
  function Entities_Otilde_getInstance() {
    Entities_initEntries();
    return Entities_Otilde_instance;
  }
  function Entities_Ouml_getInstance() {
    Entities_initEntries();
    return Entities_Ouml_instance;
  }
  function Entities_times_getInstance() {
    Entities_initEntries();
    return Entities_times_instance;
  }
  function Entities_Oslash_getInstance() {
    Entities_initEntries();
    return Entities_Oslash_instance;
  }
  function Entities_Ugrave_getInstance() {
    Entities_initEntries();
    return Entities_Ugrave_instance;
  }
  function Entities_Uacute_getInstance() {
    Entities_initEntries();
    return Entities_Uacute_instance;
  }
  function Entities_Ucirc_getInstance() {
    Entities_initEntries();
    return Entities_Ucirc_instance;
  }
  function Entities_Uuml_getInstance() {
    Entities_initEntries();
    return Entities_Uuml_instance;
  }
  function Entities_Yacute_getInstance() {
    Entities_initEntries();
    return Entities_Yacute_instance;
  }
  function Entities_THORN_getInstance() {
    Entities_initEntries();
    return Entities_THORN_instance;
  }
  function Entities_szlig_getInstance() {
    Entities_initEntries();
    return Entities_szlig_instance;
  }
  function Entities_agrave_getInstance() {
    Entities_initEntries();
    return Entities_agrave_instance;
  }
  function Entities_aacute_getInstance() {
    Entities_initEntries();
    return Entities_aacute_instance;
  }
  function Entities_acirc_getInstance() {
    Entities_initEntries();
    return Entities_acirc_instance;
  }
  function Entities_atilde_getInstance() {
    Entities_initEntries();
    return Entities_atilde_instance;
  }
  function Entities_auml_getInstance() {
    Entities_initEntries();
    return Entities_auml_instance;
  }
  function Entities_aring_getInstance() {
    Entities_initEntries();
    return Entities_aring_instance;
  }
  function Entities_aelig_getInstance() {
    Entities_initEntries();
    return Entities_aelig_instance;
  }
  function Entities_ccedil_getInstance() {
    Entities_initEntries();
    return Entities_ccedil_instance;
  }
  function Entities_egrave_getInstance() {
    Entities_initEntries();
    return Entities_egrave_instance;
  }
  function Entities_eacute_getInstance() {
    Entities_initEntries();
    return Entities_eacute_instance;
  }
  function Entities_ecirc_getInstance() {
    Entities_initEntries();
    return Entities_ecirc_instance;
  }
  function Entities_euml_getInstance() {
    Entities_initEntries();
    return Entities_euml_instance;
  }
  function Entities_igrave_getInstance() {
    Entities_initEntries();
    return Entities_igrave_instance;
  }
  function Entities_iacute_getInstance() {
    Entities_initEntries();
    return Entities_iacute_instance;
  }
  function Entities_icirc_getInstance() {
    Entities_initEntries();
    return Entities_icirc_instance;
  }
  function Entities_iuml_getInstance() {
    Entities_initEntries();
    return Entities_iuml_instance;
  }
  function Entities_eth_getInstance() {
    Entities_initEntries();
    return Entities_eth_instance;
  }
  function Entities_ntilde_getInstance() {
    Entities_initEntries();
    return Entities_ntilde_instance;
  }
  function Entities_ograve_getInstance() {
    Entities_initEntries();
    return Entities_ograve_instance;
  }
  function Entities_oacute_getInstance() {
    Entities_initEntries();
    return Entities_oacute_instance;
  }
  function Entities_ocirc_getInstance() {
    Entities_initEntries();
    return Entities_ocirc_instance;
  }
  function Entities_otilde_getInstance() {
    Entities_initEntries();
    return Entities_otilde_instance;
  }
  function Entities_ouml_getInstance() {
    Entities_initEntries();
    return Entities_ouml_instance;
  }
  function Entities_divide_getInstance() {
    Entities_initEntries();
    return Entities_divide_instance;
  }
  function Entities_oslash_getInstance() {
    Entities_initEntries();
    return Entities_oslash_instance;
  }
  function Entities_ugrave_getInstance() {
    Entities_initEntries();
    return Entities_ugrave_instance;
  }
  function Entities_uacute_getInstance() {
    Entities_initEntries();
    return Entities_uacute_instance;
  }
  function Entities_ucirc_getInstance() {
    Entities_initEntries();
    return Entities_ucirc_instance;
  }
  function Entities_uuml_getInstance() {
    Entities_initEntries();
    return Entities_uuml_instance;
  }
  function Entities_yacute_getInstance() {
    Entities_initEntries();
    return Entities_yacute_instance;
  }
  function Entities_thorn_getInstance() {
    Entities_initEntries();
    return Entities_thorn_instance;
  }
  function Entities_yuml_getInstance() {
    Entities_initEntries();
    return Entities_yuml_instance;
  }
  function get_dirValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return dirValues;
  }
  var dirValues;
  function get_draggableValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return draggableValues;
  }
  var draggableValues;
  function get_runAtValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return runAtValues;
  }
  var runAtValues;
  function get_areaShapeValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return areaShapeValues;
  }
  var areaShapeValues;
  function get_buttonFormEncTypeValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return buttonFormEncTypeValues;
  }
  var buttonFormEncTypeValues;
  function get_buttonFormMethodValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return buttonFormMethodValues;
  }
  var buttonFormMethodValues;
  function get_buttonTypeValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return buttonTypeValues;
  }
  var buttonTypeValues;
  function get_commandTypeValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return commandTypeValues;
  }
  var commandTypeValues;
  function get_formEncTypeValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return formEncTypeValues;
  }
  var formEncTypeValues;
  function get_formMethodValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return formMethodValues;
  }
  var formMethodValues;
  function get_iframeSandboxValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return iframeSandboxValues;
  }
  var iframeSandboxValues;
  function get_inputTypeValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return inputTypeValues;
  }
  var inputTypeValues;
  function get_inputFormEncTypeValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return inputFormEncTypeValues;
  }
  var inputFormEncTypeValues;
  function get_inputFormMethodValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return inputFormMethodValues;
  }
  var inputFormMethodValues;
  function get_keyGenKeyTypeValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return keyGenKeyTypeValues;
  }
  var keyGenKeyTypeValues;
  function get_textAreaWrapValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return textAreaWrapValues;
  }
  var textAreaWrapValues;
  function get_thScopeValues() {
    _init_properties_gen_enums_kt__jr8w3n();
    return thScopeValues;
  }
  var thScopeValues;
  var ButtonFormEncType_multipartFormData_instance;
  var ButtonFormEncType_applicationXWwwFormUrlEncoded_instance;
  var ButtonFormEncType_textPlain_instance;
  function values_0() {
    return [ButtonFormEncType_multipartFormData_getInstance(), ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance(), ButtonFormEncType_textPlain_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'multipartFormData':
        return ButtonFormEncType_multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return ButtonFormEncType_textPlain_getInstance();
      default:
        ButtonFormEncType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ButtonFormEncType_entriesInitialized;
  function ButtonFormEncType_initEntries() {
    if (ButtonFormEncType_entriesInitialized)
      return Unit_getInstance();
    ButtonFormEncType_entriesInitialized = true;
    ButtonFormEncType_multipartFormData_instance = new ButtonFormEncType('multipartFormData', 0, 'multipart/form-data');
    ButtonFormEncType_applicationXWwwFormUrlEncoded_instance = new ButtonFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    ButtonFormEncType_textPlain_instance = new ButtonFormEncType('textPlain', 2, 'text/plain');
  }
  function ButtonFormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(ButtonFormEncType).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var ButtonFormMethod_get_instance;
  var ButtonFormMethod_post_instance;
  var ButtonFormMethod_put_instance;
  var ButtonFormMethod_delete_instance;
  var ButtonFormMethod_patch_instance;
  function values_1() {
    return [ButtonFormMethod_get_getInstance(), ButtonFormMethod_post_getInstance(), ButtonFormMethod_put_getInstance(), ButtonFormMethod_delete_getInstance(), ButtonFormMethod_patch_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'get':
        return ButtonFormMethod_get_getInstance();
      case 'post':
        return ButtonFormMethod_post_getInstance();
      case 'put':
        return ButtonFormMethod_put_getInstance();
      case 'delete':
        return ButtonFormMethod_delete_getInstance();
      case 'patch':
        return ButtonFormMethod_patch_getInstance();
      default:
        ButtonFormMethod_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ButtonFormMethod_entriesInitialized;
  function ButtonFormMethod_initEntries() {
    if (ButtonFormMethod_entriesInitialized)
      return Unit_getInstance();
    ButtonFormMethod_entriesInitialized = true;
    ButtonFormMethod_get_instance = new ButtonFormMethod('get', 0, 'get');
    ButtonFormMethod_post_instance = new ButtonFormMethod('post', 1, 'post');
    ButtonFormMethod_put_instance = new ButtonFormMethod('put', 2, 'put');
    ButtonFormMethod_delete_instance = new ButtonFormMethod('delete', 3, 'delete');
    ButtonFormMethod_patch_instance = new ButtonFormMethod('patch', 4, 'patch');
  }
  function ButtonFormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(ButtonFormMethod).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var ButtonType_button_instance;
  var ButtonType_reset_instance;
  var ButtonType_submit_instance;
  function values_2() {
    return [ButtonType_button_getInstance(), ButtonType_reset_getInstance(), ButtonType_submit_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'button':
        return ButtonType_button_getInstance();
      case 'reset':
        return ButtonType_reset_getInstance();
      case 'submit':
        return ButtonType_submit_getInstance();
      default:
        ButtonType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_getInstance();
    ButtonType_entriesInitialized = true;
    ButtonType_button_instance = new ButtonType('button', 0, 'button');
    ButtonType_reset_instance = new ButtonType('reset', 1, 'reset');
    ButtonType_submit_instance = new ButtonType('submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(ButtonType).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var CommandType_command_instance;
  var CommandType_checkBox_instance;
  var CommandType_radio_instance;
  function values_3() {
    return [CommandType_command_getInstance(), CommandType_checkBox_getInstance(), CommandType_radio_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'command':
        return CommandType_command_getInstance();
      case 'checkBox':
        return CommandType_checkBox_getInstance();
      case 'radio':
        return CommandType_radio_getInstance();
      default:
        CommandType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var CommandType_entriesInitialized;
  function CommandType_initEntries() {
    if (CommandType_entriesInitialized)
      return Unit_getInstance();
    CommandType_entriesInitialized = true;
    CommandType_command_instance = new CommandType('command', 0, 'command');
    CommandType_checkBox_instance = new CommandType('checkBox', 1, 'checkbox');
    CommandType_radio_instance = new CommandType('radio', 2, 'radio');
  }
  function CommandType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(CommandType).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var Dir_ltr_instance;
  var Dir_rtl_instance;
  function values_4() {
    return [Dir_ltr_getInstance(), Dir_rtl_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'ltr':
        return Dir_ltr_getInstance();
      case 'rtl':
        return Dir_rtl_getInstance();
      default:
        Dir_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Dir_entriesInitialized;
  function Dir_initEntries() {
    if (Dir_entriesInitialized)
      return Unit_getInstance();
    Dir_entriesInitialized = true;
    Dir_ltr_instance = new Dir('ltr', 0, 'ltr');
    Dir_rtl_instance = new Dir('rtl', 1, 'rtl');
  }
  function Dir(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(Dir).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var Draggable_htmlTrue_instance;
  var Draggable_htmlFalse_instance;
  var Draggable_auto_instance;
  function values_5() {
    return [Draggable_htmlTrue_getInstance(), Draggable_htmlFalse_getInstance(), Draggable_auto_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'htmlTrue':
        return Draggable_htmlTrue_getInstance();
      case 'htmlFalse':
        return Draggable_htmlFalse_getInstance();
      case 'auto':
        return Draggable_auto_getInstance();
      default:
        Draggable_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Draggable_entriesInitialized;
  function Draggable_initEntries() {
    if (Draggable_entriesInitialized)
      return Unit_getInstance();
    Draggable_entriesInitialized = true;
    Draggable_htmlTrue_instance = new Draggable('htmlTrue', 0, 'true');
    Draggable_htmlFalse_instance = new Draggable('htmlFalse', 1, 'false');
    Draggable_auto_instance = new Draggable('auto', 2, 'auto');
  }
  function Draggable(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(Draggable).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var FormEncType_multipartFormData_instance;
  var FormEncType_applicationXWwwFormUrlEncoded_instance;
  var FormEncType_textPlain_instance;
  function values_6() {
    return [FormEncType_multipartFormData_getInstance(), FormEncType_applicationXWwwFormUrlEncoded_getInstance(), FormEncType_textPlain_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'multipartFormData':
        return FormEncType_multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return FormEncType_applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return FormEncType_textPlain_getInstance();
      default:
        FormEncType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var FormEncType_entriesInitialized;
  function FormEncType_initEntries() {
    if (FormEncType_entriesInitialized)
      return Unit_getInstance();
    FormEncType_entriesInitialized = true;
    FormEncType_multipartFormData_instance = new FormEncType('multipartFormData', 0, 'multipart/form-data');
    FormEncType_applicationXWwwFormUrlEncoded_instance = new FormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    FormEncType_textPlain_instance = new FormEncType('textPlain', 2, 'text/plain');
  }
  function FormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(FormEncType).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var FormMethod_get_instance;
  var FormMethod_post_instance;
  var FormMethod_put_instance;
  var FormMethod_delete_instance;
  var FormMethod_patch_instance;
  function values_7() {
    return [FormMethod_get_getInstance(), FormMethod_post_getInstance(), FormMethod_put_getInstance(), FormMethod_delete_getInstance(), FormMethod_patch_getInstance()];
  }
  function valueOf_7(value) {
    switch (value) {
      case 'get':
        return FormMethod_get_getInstance();
      case 'post':
        return FormMethod_post_getInstance();
      case 'put':
        return FormMethod_put_getInstance();
      case 'delete':
        return FormMethod_delete_getInstance();
      case 'patch':
        return FormMethod_patch_getInstance();
      default:
        FormMethod_initEntries();
        THROW_ISE();
        break;
    }
  }
  var FormMethod_entriesInitialized;
  function FormMethod_initEntries() {
    if (FormMethod_entriesInitialized)
      return Unit_getInstance();
    FormMethod_entriesInitialized = true;
    FormMethod_get_instance = new FormMethod('get', 0, 'get');
    FormMethod_post_instance = new FormMethod('post', 1, 'post');
    FormMethod_put_instance = new FormMethod('put', 2, 'put');
    FormMethod_delete_instance = new FormMethod('delete', 3, 'delete');
    FormMethod_patch_instance = new FormMethod('patch', 4, 'patch');
  }
  function FormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(FormMethod).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var IframeSandbox_allowSameOrigin_instance;
  var IframeSandbox_allowFormS_instance;
  var IframeSandbox_allowScripts_instance;
  function values_8() {
    return [IframeSandbox_allowSameOrigin_getInstance(), IframeSandbox_allowFormS_getInstance(), IframeSandbox_allowScripts_getInstance()];
  }
  function valueOf_8(value) {
    switch (value) {
      case 'allowSameOrigin':
        return IframeSandbox_allowSameOrigin_getInstance();
      case 'allowFormS':
        return IframeSandbox_allowFormS_getInstance();
      case 'allowScripts':
        return IframeSandbox_allowScripts_getInstance();
      default:
        IframeSandbox_initEntries();
        THROW_ISE();
        break;
    }
  }
  var IframeSandbox_entriesInitialized;
  function IframeSandbox_initEntries() {
    if (IframeSandbox_entriesInitialized)
      return Unit_getInstance();
    IframeSandbox_entriesInitialized = true;
    IframeSandbox_allowSameOrigin_instance = new IframeSandbox('allowSameOrigin', 0, 'allow-same-origin');
    IframeSandbox_allowFormS_instance = new IframeSandbox('allowFormS', 1, 'allow-forms');
    IframeSandbox_allowScripts_instance = new IframeSandbox('allowScripts', 2, 'allow-scripts');
  }
  function IframeSandbox(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(IframeSandbox).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var InputFormEncType_multipartFormData_instance;
  var InputFormEncType_applicationXWwwFormUrlEncoded_instance;
  var InputFormEncType_textPlain_instance;
  function values_9() {
    return [InputFormEncType_multipartFormData_getInstance(), InputFormEncType_applicationXWwwFormUrlEncoded_getInstance(), InputFormEncType_textPlain_getInstance()];
  }
  function valueOf_9(value) {
    switch (value) {
      case 'multipartFormData':
        return InputFormEncType_multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return InputFormEncType_applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return InputFormEncType_textPlain_getInstance();
      default:
        InputFormEncType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var InputFormEncType_entriesInitialized;
  function InputFormEncType_initEntries() {
    if (InputFormEncType_entriesInitialized)
      return Unit_getInstance();
    InputFormEncType_entriesInitialized = true;
    InputFormEncType_multipartFormData_instance = new InputFormEncType('multipartFormData', 0, 'multipart/form-data');
    InputFormEncType_applicationXWwwFormUrlEncoded_instance = new InputFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    InputFormEncType_textPlain_instance = new InputFormEncType('textPlain', 2, 'text/plain');
  }
  function InputFormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(InputFormEncType).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var InputFormMethod_get_instance;
  var InputFormMethod_post_instance;
  var InputFormMethod_put_instance;
  var InputFormMethod_delete_instance;
  var InputFormMethod_patch_instance;
  function values_10() {
    return [InputFormMethod_get_getInstance(), InputFormMethod_post_getInstance(), InputFormMethod_put_getInstance(), InputFormMethod_delete_getInstance(), InputFormMethod_patch_getInstance()];
  }
  function valueOf_10(value) {
    switch (value) {
      case 'get':
        return InputFormMethod_get_getInstance();
      case 'post':
        return InputFormMethod_post_getInstance();
      case 'put':
        return InputFormMethod_put_getInstance();
      case 'delete':
        return InputFormMethod_delete_getInstance();
      case 'patch':
        return InputFormMethod_patch_getInstance();
      default:
        InputFormMethod_initEntries();
        THROW_ISE();
        break;
    }
  }
  var InputFormMethod_entriesInitialized;
  function InputFormMethod_initEntries() {
    if (InputFormMethod_entriesInitialized)
      return Unit_getInstance();
    InputFormMethod_entriesInitialized = true;
    InputFormMethod_get_instance = new InputFormMethod('get', 0, 'get');
    InputFormMethod_post_instance = new InputFormMethod('post', 1, 'post');
    InputFormMethod_put_instance = new InputFormMethod('put', 2, 'put');
    InputFormMethod_delete_instance = new InputFormMethod('delete', 3, 'delete');
    InputFormMethod_patch_instance = new InputFormMethod('patch', 4, 'patch');
  }
  function InputFormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(InputFormMethod).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var InputType_button_instance;
  var InputType_checkBox_instance;
  var InputType_color_instance;
  var InputType_date_instance;
  var InputType_dateTime_instance;
  var InputType_dateTimeLocal_instance;
  var InputType_email_instance;
  var InputType_file_instance;
  var InputType_hidden_instance;
  var InputType_image_instance;
  var InputType_month_instance;
  var InputType_number_instance;
  var InputType_password_instance;
  var InputType_radio_instance;
  var InputType_range_instance;
  var InputType_reset_instance;
  var InputType_search_instance;
  var InputType_submit_instance;
  var InputType_text_instance;
  var InputType_tel_instance;
  var InputType_time_instance;
  var InputType_url_instance;
  var InputType_week_instance;
  function values_11() {
    return [InputType_button_getInstance(), InputType_checkBox_getInstance(), InputType_color_getInstance(), InputType_date_getInstance(), InputType_dateTime_getInstance(), InputType_dateTimeLocal_getInstance(), InputType_email_getInstance(), InputType_file_getInstance(), InputType_hidden_getInstance(), InputType_image_getInstance(), InputType_month_getInstance(), InputType_number_getInstance(), InputType_password_getInstance(), InputType_radio_getInstance(), InputType_range_getInstance(), InputType_reset_getInstance(), InputType_search_getInstance(), InputType_submit_getInstance(), InputType_text_getInstance(), InputType_tel_getInstance(), InputType_time_getInstance(), InputType_url_getInstance(), InputType_week_getInstance()];
  }
  function valueOf_11(value) {
    switch (value) {
      case 'button':
        return InputType_button_getInstance();
      case 'checkBox':
        return InputType_checkBox_getInstance();
      case 'color':
        return InputType_color_getInstance();
      case 'date':
        return InputType_date_getInstance();
      case 'dateTime':
        return InputType_dateTime_getInstance();
      case 'dateTimeLocal':
        return InputType_dateTimeLocal_getInstance();
      case 'email':
        return InputType_email_getInstance();
      case 'file':
        return InputType_file_getInstance();
      case 'hidden':
        return InputType_hidden_getInstance();
      case 'image':
        return InputType_image_getInstance();
      case 'month':
        return InputType_month_getInstance();
      case 'number':
        return InputType_number_getInstance();
      case 'password':
        return InputType_password_getInstance();
      case 'radio':
        return InputType_radio_getInstance();
      case 'range':
        return InputType_range_getInstance();
      case 'reset':
        return InputType_reset_getInstance();
      case 'search':
        return InputType_search_getInstance();
      case 'submit':
        return InputType_submit_getInstance();
      case 'text':
        return InputType_text_getInstance();
      case 'tel':
        return InputType_tel_getInstance();
      case 'time':
        return InputType_time_getInstance();
      case 'url':
        return InputType_url_getInstance();
      case 'week':
        return InputType_week_getInstance();
      default:
        InputType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var InputType_entriesInitialized;
  function InputType_initEntries() {
    if (InputType_entriesInitialized)
      return Unit_getInstance();
    InputType_entriesInitialized = true;
    InputType_button_instance = new InputType('button', 0, 'button');
    InputType_checkBox_instance = new InputType('checkBox', 1, 'checkbox');
    InputType_color_instance = new InputType('color', 2, 'color');
    InputType_date_instance = new InputType('date', 3, 'date');
    InputType_dateTime_instance = new InputType('dateTime', 4, 'datetime');
    InputType_dateTimeLocal_instance = new InputType('dateTimeLocal', 5, 'datetime-local');
    InputType_email_instance = new InputType('email', 6, 'email');
    InputType_file_instance = new InputType('file', 7, 'file');
    InputType_hidden_instance = new InputType('hidden', 8, 'hidden');
    InputType_image_instance = new InputType('image', 9, 'image');
    InputType_month_instance = new InputType('month', 10, 'month');
    InputType_number_instance = new InputType('number', 11, 'number');
    InputType_password_instance = new InputType('password', 12, 'password');
    InputType_radio_instance = new InputType('radio', 13, 'radio');
    InputType_range_instance = new InputType('range', 14, 'range');
    InputType_reset_instance = new InputType('reset', 15, 'reset');
    InputType_search_instance = new InputType('search', 16, 'search');
    InputType_submit_instance = new InputType('submit', 17, 'submit');
    InputType_text_instance = new InputType('text', 18, 'text');
    InputType_tel_instance = new InputType('tel', 19, 'tel');
    InputType_time_instance = new InputType('time', 20, 'time');
    InputType_url_instance = new InputType('url', 21, 'url');
    InputType_week_instance = new InputType('week', 22, 'week');
  }
  function InputType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(InputType).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var KeyGenKeyType_rsa_instance;
  function values_12() {
    return [KeyGenKeyType_rsa_getInstance()];
  }
  function valueOf_12(value) {
    if (value === 'rsa')
      return KeyGenKeyType_rsa_getInstance();
    else {
      KeyGenKeyType_initEntries();
      THROW_ISE();
    }
  }
  var KeyGenKeyType_entriesInitialized;
  function KeyGenKeyType_initEntries() {
    if (KeyGenKeyType_entriesInitialized)
      return Unit_getInstance();
    KeyGenKeyType_entriesInitialized = true;
    KeyGenKeyType_rsa_instance = new KeyGenKeyType('rsa', 0, 'rsa');
  }
  function KeyGenKeyType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(KeyGenKeyType).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var RunAt_server_instance;
  function values_13() {
    return [RunAt_server_getInstance()];
  }
  function valueOf_13(value) {
    if (value === 'server')
      return RunAt_server_getInstance();
    else {
      RunAt_initEntries();
      THROW_ISE();
    }
  }
  var RunAt_entriesInitialized;
  function RunAt_initEntries() {
    if (RunAt_entriesInitialized)
      return Unit_getInstance();
    RunAt_entriesInitialized = true;
    RunAt_server_instance = new RunAt('server', 0, 'server');
  }
  function RunAt(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(RunAt).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var TextAreaWrap_hard_instance;
  var TextAreaWrap_soft_instance;
  function values_14() {
    return [TextAreaWrap_hard_getInstance(), TextAreaWrap_soft_getInstance()];
  }
  function valueOf_14(value) {
    switch (value) {
      case 'hard':
        return TextAreaWrap_hard_getInstance();
      case 'soft':
        return TextAreaWrap_soft_getInstance();
      default:
        TextAreaWrap_initEntries();
        THROW_ISE();
        break;
    }
  }
  var TextAreaWrap_entriesInitialized;
  function TextAreaWrap_initEntries() {
    if (TextAreaWrap_entriesInitialized)
      return Unit_getInstance();
    TextAreaWrap_entriesInitialized = true;
    TextAreaWrap_hard_instance = new TextAreaWrap('hard', 0, 'hard');
    TextAreaWrap_soft_instance = new TextAreaWrap('soft', 1, 'soft');
  }
  function TextAreaWrap(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(TextAreaWrap).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var ThScope_col_instance;
  var ThScope_colGroup_instance;
  var ThScope_row_instance;
  var ThScope_rowGroup_instance;
  function values_15() {
    return [ThScope_col_getInstance(), ThScope_colGroup_getInstance(), ThScope_row_getInstance(), ThScope_rowGroup_getInstance()];
  }
  function valueOf_15(value) {
    switch (value) {
      case 'col':
        return ThScope_col_getInstance();
      case 'colGroup':
        return ThScope_colGroup_getInstance();
      case 'row':
        return ThScope_row_getInstance();
      case 'rowGroup':
        return ThScope_rowGroup_getInstance();
      default:
        ThScope_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ThScope_entriesInitialized;
  function ThScope_initEntries() {
    if (ThScope_entriesInitialized)
      return Unit_getInstance();
    ThScope_entriesInitialized = true;
    ThScope_col_instance = new ThScope('col', 0, 'col');
    ThScope_colGroup_instance = new ThScope('colGroup', 1, 'colgroup');
    ThScope_row_instance = new ThScope('row', 2, 'row');
    ThScope_rowGroup_instance = new ThScope('rowGroup', 3, 'rowgroup');
  }
  function ThScope(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(ThScope).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  var AreaShape_rect_instance;
  var AreaShape_circle_instance;
  var AreaShape_poly_instance;
  var AreaShape_default_instance;
  function values_16() {
    return [AreaShape_rect_getInstance(), AreaShape_circle_getInstance(), AreaShape_poly_getInstance(), AreaShape_default_getInstance()];
  }
  function valueOf_16(value) {
    switch (value) {
      case 'rect':
        return AreaShape_rect_getInstance();
      case 'circle':
        return AreaShape_circle_getInstance();
      case 'poly':
        return AreaShape_poly_getInstance();
      case 'default':
        return AreaShape_default_getInstance();
      default:
        AreaShape_initEntries();
        THROW_ISE();
        break;
    }
  }
  var AreaShape_entriesInitialized;
  function AreaShape_initEntries() {
    if (AreaShape_entriesInitialized)
      return Unit_getInstance();
    AreaShape_entriesInitialized = true;
    AreaShape_rect_instance = new AreaShape('rect', 0, 'rect');
    AreaShape_circle_instance = new AreaShape('circle', 1, 'circle');
    AreaShape_poly_instance = new AreaShape('poly', 2, 'poly');
    AreaShape_default_instance = new AreaShape('default', 3, 'default');
  }
  function AreaShape(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  protoOf(AreaShape).get_realValue_69bbcm_k$ = function () {
    return this.realValue_1;
  };
  function ButtonFormEncType_multipartFormData_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_multipartFormData_instance;
  }
  function ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function ButtonFormEncType_textPlain_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_textPlain_instance;
  }
  function ButtonFormMethod_get_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_get_instance;
  }
  function ButtonFormMethod_post_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_post_instance;
  }
  function ButtonFormMethod_put_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_put_instance;
  }
  function ButtonFormMethod_delete_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_delete_instance;
  }
  function ButtonFormMethod_patch_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_patch_instance;
  }
  function ButtonType_button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_button_instance;
  }
  function ButtonType_reset_getInstance() {
    ButtonType_initEntries();
    return ButtonType_reset_instance;
  }
  function ButtonType_submit_getInstance() {
    ButtonType_initEntries();
    return ButtonType_submit_instance;
  }
  function CommandType_command_getInstance() {
    CommandType_initEntries();
    return CommandType_command_instance;
  }
  function CommandType_checkBox_getInstance() {
    CommandType_initEntries();
    return CommandType_checkBox_instance;
  }
  function CommandType_radio_getInstance() {
    CommandType_initEntries();
    return CommandType_radio_instance;
  }
  function Dir_ltr_getInstance() {
    Dir_initEntries();
    return Dir_ltr_instance;
  }
  function Dir_rtl_getInstance() {
    Dir_initEntries();
    return Dir_rtl_instance;
  }
  function Draggable_htmlTrue_getInstance() {
    Draggable_initEntries();
    return Draggable_htmlTrue_instance;
  }
  function Draggable_htmlFalse_getInstance() {
    Draggable_initEntries();
    return Draggable_htmlFalse_instance;
  }
  function Draggable_auto_getInstance() {
    Draggable_initEntries();
    return Draggable_auto_instance;
  }
  function FormEncType_multipartFormData_getInstance() {
    FormEncType_initEntries();
    return FormEncType_multipartFormData_instance;
  }
  function FormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    FormEncType_initEntries();
    return FormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function FormEncType_textPlain_getInstance() {
    FormEncType_initEntries();
    return FormEncType_textPlain_instance;
  }
  function FormMethod_get_getInstance() {
    FormMethod_initEntries();
    return FormMethod_get_instance;
  }
  function FormMethod_post_getInstance() {
    FormMethod_initEntries();
    return FormMethod_post_instance;
  }
  function FormMethod_put_getInstance() {
    FormMethod_initEntries();
    return FormMethod_put_instance;
  }
  function FormMethod_delete_getInstance() {
    FormMethod_initEntries();
    return FormMethod_delete_instance;
  }
  function FormMethod_patch_getInstance() {
    FormMethod_initEntries();
    return FormMethod_patch_instance;
  }
  function IframeSandbox_allowSameOrigin_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowSameOrigin_instance;
  }
  function IframeSandbox_allowFormS_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowFormS_instance;
  }
  function IframeSandbox_allowScripts_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowScripts_instance;
  }
  function InputFormEncType_multipartFormData_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_multipartFormData_instance;
  }
  function InputFormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function InputFormEncType_textPlain_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_textPlain_instance;
  }
  function InputFormMethod_get_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_get_instance;
  }
  function InputFormMethod_post_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_post_instance;
  }
  function InputFormMethod_put_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_put_instance;
  }
  function InputFormMethod_delete_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_delete_instance;
  }
  function InputFormMethod_patch_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_patch_instance;
  }
  function InputType_button_getInstance() {
    InputType_initEntries();
    return InputType_button_instance;
  }
  function InputType_checkBox_getInstance() {
    InputType_initEntries();
    return InputType_checkBox_instance;
  }
  function InputType_color_getInstance() {
    InputType_initEntries();
    return InputType_color_instance;
  }
  function InputType_date_getInstance() {
    InputType_initEntries();
    return InputType_date_instance;
  }
  function InputType_dateTime_getInstance() {
    InputType_initEntries();
    return InputType_dateTime_instance;
  }
  function InputType_dateTimeLocal_getInstance() {
    InputType_initEntries();
    return InputType_dateTimeLocal_instance;
  }
  function InputType_email_getInstance() {
    InputType_initEntries();
    return InputType_email_instance;
  }
  function InputType_file_getInstance() {
    InputType_initEntries();
    return InputType_file_instance;
  }
  function InputType_hidden_getInstance() {
    InputType_initEntries();
    return InputType_hidden_instance;
  }
  function InputType_image_getInstance() {
    InputType_initEntries();
    return InputType_image_instance;
  }
  function InputType_month_getInstance() {
    InputType_initEntries();
    return InputType_month_instance;
  }
  function InputType_number_getInstance() {
    InputType_initEntries();
    return InputType_number_instance;
  }
  function InputType_password_getInstance() {
    InputType_initEntries();
    return InputType_password_instance;
  }
  function InputType_radio_getInstance() {
    InputType_initEntries();
    return InputType_radio_instance;
  }
  function InputType_range_getInstance() {
    InputType_initEntries();
    return InputType_range_instance;
  }
  function InputType_reset_getInstance() {
    InputType_initEntries();
    return InputType_reset_instance;
  }
  function InputType_search_getInstance() {
    InputType_initEntries();
    return InputType_search_instance;
  }
  function InputType_submit_getInstance() {
    InputType_initEntries();
    return InputType_submit_instance;
  }
  function InputType_text_getInstance() {
    InputType_initEntries();
    return InputType_text_instance;
  }
  function InputType_tel_getInstance() {
    InputType_initEntries();
    return InputType_tel_instance;
  }
  function InputType_time_getInstance() {
    InputType_initEntries();
    return InputType_time_instance;
  }
  function InputType_url_getInstance() {
    InputType_initEntries();
    return InputType_url_instance;
  }
  function InputType_week_getInstance() {
    InputType_initEntries();
    return InputType_week_instance;
  }
  function KeyGenKeyType_rsa_getInstance() {
    KeyGenKeyType_initEntries();
    return KeyGenKeyType_rsa_instance;
  }
  function RunAt_server_getInstance() {
    RunAt_initEntries();
    return RunAt_server_instance;
  }
  function TextAreaWrap_hard_getInstance() {
    TextAreaWrap_initEntries();
    return TextAreaWrap_hard_instance;
  }
  function TextAreaWrap_soft_getInstance() {
    TextAreaWrap_initEntries();
    return TextAreaWrap_soft_instance;
  }
  function ThScope_col_getInstance() {
    ThScope_initEntries();
    return ThScope_col_instance;
  }
  function ThScope_colGroup_getInstance() {
    ThScope_initEntries();
    return ThScope_colGroup_instance;
  }
  function ThScope_row_getInstance() {
    ThScope_initEntries();
    return ThScope_row_instance;
  }
  function ThScope_rowGroup_getInstance() {
    ThScope_initEntries();
    return ThScope_rowGroup_instance;
  }
  function AreaShape_rect_getInstance() {
    AreaShape_initEntries();
    return AreaShape_rect_instance;
  }
  function AreaShape_circle_getInstance() {
    AreaShape_initEntries();
    return AreaShape_circle_instance;
  }
  function AreaShape_poly_getInstance() {
    AreaShape_initEntries();
    return AreaShape_poly_instance;
  }
  function AreaShape_default_getInstance() {
    AreaShape_initEntries();
    return AreaShape_default_instance;
  }
  var properties_initialized_gen_enums_kt_cpcrt1;
  function _init_properties_gen_enums_kt__jr8w3n() {
    if (properties_initialized_gen_enums_kt_cpcrt1) {
    } else {
      properties_initialized_gen_enums_kt_cpcrt1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy = values_4();
      var capacity = coerceAtLeast(mapCapacity(tmp1_associateBy.length), 16);
      var tmp$ret$1;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo = LinkedHashMap_init_$Create$_0(capacity);
      var indexedObject = tmp1_associateBy;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlinx.html.dirValues.<anonymous>' call
        tmp$ret$0 = element.realValue_1;
        tmp0_associateByTo.put_3mhbri_k$(tmp$ret$0, element);
      }
      tmp$ret$1 = tmp0_associateByTo;
      tmp$ret$2 = tmp$ret$1;
      dirValues = tmp$ret$2;
      var tmp$ret$2_0;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_0 = values_5();
      var capacity_0 = coerceAtLeast(mapCapacity(tmp1_associateBy_0.length), 16);
      var tmp$ret$1_0;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_0 = LinkedHashMap_init_$Create$_0(capacity_0);
      var indexedObject_0 = tmp1_associateBy_0;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$0_0;
        // Inline function 'kotlinx.html.draggableValues.<anonymous>' call
        tmp$ret$0_0 = element_0.realValue_1;
        tmp0_associateByTo_0.put_3mhbri_k$(tmp$ret$0_0, element_0);
      }
      tmp$ret$1_0 = tmp0_associateByTo_0;
      tmp$ret$2_0 = tmp$ret$1_0;
      draggableValues = tmp$ret$2_0;
      var tmp$ret$2_1;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_1 = values_13();
      var capacity_1 = coerceAtLeast(mapCapacity(tmp1_associateBy_1.length), 16);
      var tmp$ret$1_1;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_1 = LinkedHashMap_init_$Create$_0(capacity_1);
      var indexedObject_1 = tmp1_associateBy_1;
      var inductionVariable_1 = 0;
      var last_1 = indexedObject_1.length;
      while (inductionVariable_1 < last_1) {
        var element_1 = indexedObject_1[inductionVariable_1];
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp$ret$0_1;
        // Inline function 'kotlinx.html.runAtValues.<anonymous>' call
        tmp$ret$0_1 = element_1.realValue_1;
        tmp0_associateByTo_1.put_3mhbri_k$(tmp$ret$0_1, element_1);
      }
      tmp$ret$1_1 = tmp0_associateByTo_1;
      tmp$ret$2_1 = tmp$ret$1_1;
      runAtValues = tmp$ret$2_1;
      var tmp$ret$2_2;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_2 = values_16();
      var capacity_2 = coerceAtLeast(mapCapacity(tmp1_associateBy_2.length), 16);
      var tmp$ret$1_2;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_2 = LinkedHashMap_init_$Create$_0(capacity_2);
      var indexedObject_2 = tmp1_associateBy_2;
      var inductionVariable_2 = 0;
      var last_2 = indexedObject_2.length;
      while (inductionVariable_2 < last_2) {
        var element_2 = indexedObject_2[inductionVariable_2];
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var tmp$ret$0_2;
        // Inline function 'kotlinx.html.areaShapeValues.<anonymous>' call
        tmp$ret$0_2 = element_2.realValue_1;
        tmp0_associateByTo_2.put_3mhbri_k$(tmp$ret$0_2, element_2);
      }
      tmp$ret$1_2 = tmp0_associateByTo_2;
      tmp$ret$2_2 = tmp$ret$1_2;
      areaShapeValues = tmp$ret$2_2;
      var tmp$ret$2_3;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_3 = values_0();
      var capacity_3 = coerceAtLeast(mapCapacity(tmp1_associateBy_3.length), 16);
      var tmp$ret$1_3;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_3 = LinkedHashMap_init_$Create$_0(capacity_3);
      var indexedObject_3 = tmp1_associateBy_3;
      var inductionVariable_3 = 0;
      var last_3 = indexedObject_3.length;
      while (inductionVariable_3 < last_3) {
        var element_3 = indexedObject_3[inductionVariable_3];
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var tmp$ret$0_3;
        // Inline function 'kotlinx.html.buttonFormEncTypeValues.<anonymous>' call
        tmp$ret$0_3 = element_3.realValue_1;
        tmp0_associateByTo_3.put_3mhbri_k$(tmp$ret$0_3, element_3);
      }
      tmp$ret$1_3 = tmp0_associateByTo_3;
      tmp$ret$2_3 = tmp$ret$1_3;
      buttonFormEncTypeValues = tmp$ret$2_3;
      var tmp$ret$2_4;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_4 = values_1();
      var capacity_4 = coerceAtLeast(mapCapacity(tmp1_associateBy_4.length), 16);
      var tmp$ret$1_4;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_4 = LinkedHashMap_init_$Create$_0(capacity_4);
      var indexedObject_4 = tmp1_associateBy_4;
      var inductionVariable_4 = 0;
      var last_4 = indexedObject_4.length;
      while (inductionVariable_4 < last_4) {
        var element_4 = indexedObject_4[inductionVariable_4];
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        var tmp$ret$0_4;
        // Inline function 'kotlinx.html.buttonFormMethodValues.<anonymous>' call
        tmp$ret$0_4 = element_4.realValue_1;
        tmp0_associateByTo_4.put_3mhbri_k$(tmp$ret$0_4, element_4);
      }
      tmp$ret$1_4 = tmp0_associateByTo_4;
      tmp$ret$2_4 = tmp$ret$1_4;
      buttonFormMethodValues = tmp$ret$2_4;
      var tmp$ret$2_5;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_5 = values_2();
      var capacity_5 = coerceAtLeast(mapCapacity(tmp1_associateBy_5.length), 16);
      var tmp$ret$1_5;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_5 = LinkedHashMap_init_$Create$_0(capacity_5);
      var indexedObject_5 = tmp1_associateBy_5;
      var inductionVariable_5 = 0;
      var last_5 = indexedObject_5.length;
      while (inductionVariable_5 < last_5) {
        var element_5 = indexedObject_5[inductionVariable_5];
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        var tmp$ret$0_5;
        // Inline function 'kotlinx.html.buttonTypeValues.<anonymous>' call
        tmp$ret$0_5 = element_5.realValue_1;
        tmp0_associateByTo_5.put_3mhbri_k$(tmp$ret$0_5, element_5);
      }
      tmp$ret$1_5 = tmp0_associateByTo_5;
      tmp$ret$2_5 = tmp$ret$1_5;
      buttonTypeValues = tmp$ret$2_5;
      var tmp$ret$2_6;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_6 = values_3();
      var capacity_6 = coerceAtLeast(mapCapacity(tmp1_associateBy_6.length), 16);
      var tmp$ret$1_6;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_6 = LinkedHashMap_init_$Create$_0(capacity_6);
      var indexedObject_6 = tmp1_associateBy_6;
      var inductionVariable_6 = 0;
      var last_6 = indexedObject_6.length;
      while (inductionVariable_6 < last_6) {
        var element_6 = indexedObject_6[inductionVariable_6];
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        var tmp$ret$0_6;
        // Inline function 'kotlinx.html.commandTypeValues.<anonymous>' call
        tmp$ret$0_6 = element_6.realValue_1;
        tmp0_associateByTo_6.put_3mhbri_k$(tmp$ret$0_6, element_6);
      }
      tmp$ret$1_6 = tmp0_associateByTo_6;
      tmp$ret$2_6 = tmp$ret$1_6;
      commandTypeValues = tmp$ret$2_6;
      var tmp$ret$2_7;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_7 = values_6();
      var capacity_7 = coerceAtLeast(mapCapacity(tmp1_associateBy_7.length), 16);
      var tmp$ret$1_7;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_7 = LinkedHashMap_init_$Create$_0(capacity_7);
      var indexedObject_7 = tmp1_associateBy_7;
      var inductionVariable_7 = 0;
      var last_7 = indexedObject_7.length;
      while (inductionVariable_7 < last_7) {
        var element_7 = indexedObject_7[inductionVariable_7];
        inductionVariable_7 = inductionVariable_7 + 1 | 0;
        var tmp$ret$0_7;
        // Inline function 'kotlinx.html.formEncTypeValues.<anonymous>' call
        tmp$ret$0_7 = element_7.realValue_1;
        tmp0_associateByTo_7.put_3mhbri_k$(tmp$ret$0_7, element_7);
      }
      tmp$ret$1_7 = tmp0_associateByTo_7;
      tmp$ret$2_7 = tmp$ret$1_7;
      formEncTypeValues = tmp$ret$2_7;
      var tmp$ret$2_8;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_8 = values_7();
      var capacity_8 = coerceAtLeast(mapCapacity(tmp1_associateBy_8.length), 16);
      var tmp$ret$1_8;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_8 = LinkedHashMap_init_$Create$_0(capacity_8);
      var indexedObject_8 = tmp1_associateBy_8;
      var inductionVariable_8 = 0;
      var last_8 = indexedObject_8.length;
      while (inductionVariable_8 < last_8) {
        var element_8 = indexedObject_8[inductionVariable_8];
        inductionVariable_8 = inductionVariable_8 + 1 | 0;
        var tmp$ret$0_8;
        // Inline function 'kotlinx.html.formMethodValues.<anonymous>' call
        tmp$ret$0_8 = element_8.realValue_1;
        tmp0_associateByTo_8.put_3mhbri_k$(tmp$ret$0_8, element_8);
      }
      tmp$ret$1_8 = tmp0_associateByTo_8;
      tmp$ret$2_8 = tmp$ret$1_8;
      formMethodValues = tmp$ret$2_8;
      var tmp$ret$2_9;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_9 = values_8();
      var capacity_9 = coerceAtLeast(mapCapacity(tmp1_associateBy_9.length), 16);
      var tmp$ret$1_9;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_9 = LinkedHashMap_init_$Create$_0(capacity_9);
      var indexedObject_9 = tmp1_associateBy_9;
      var inductionVariable_9 = 0;
      var last_9 = indexedObject_9.length;
      while (inductionVariable_9 < last_9) {
        var element_9 = indexedObject_9[inductionVariable_9];
        inductionVariable_9 = inductionVariable_9 + 1 | 0;
        var tmp$ret$0_9;
        // Inline function 'kotlinx.html.iframeSandboxValues.<anonymous>' call
        tmp$ret$0_9 = element_9.realValue_1;
        tmp0_associateByTo_9.put_3mhbri_k$(tmp$ret$0_9, element_9);
      }
      tmp$ret$1_9 = tmp0_associateByTo_9;
      tmp$ret$2_9 = tmp$ret$1_9;
      iframeSandboxValues = tmp$ret$2_9;
      var tmp$ret$2_10;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_10 = values_11();
      var capacity_10 = coerceAtLeast(mapCapacity(tmp1_associateBy_10.length), 16);
      var tmp$ret$1_10;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_10 = LinkedHashMap_init_$Create$_0(capacity_10);
      var indexedObject_10 = tmp1_associateBy_10;
      var inductionVariable_10 = 0;
      var last_10 = indexedObject_10.length;
      while (inductionVariable_10 < last_10) {
        var element_10 = indexedObject_10[inductionVariable_10];
        inductionVariable_10 = inductionVariable_10 + 1 | 0;
        var tmp$ret$0_10;
        // Inline function 'kotlinx.html.inputTypeValues.<anonymous>' call
        tmp$ret$0_10 = element_10.realValue_1;
        tmp0_associateByTo_10.put_3mhbri_k$(tmp$ret$0_10, element_10);
      }
      tmp$ret$1_10 = tmp0_associateByTo_10;
      tmp$ret$2_10 = tmp$ret$1_10;
      inputTypeValues = tmp$ret$2_10;
      var tmp$ret$2_11;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_11 = values_9();
      var capacity_11 = coerceAtLeast(mapCapacity(tmp1_associateBy_11.length), 16);
      var tmp$ret$1_11;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_11 = LinkedHashMap_init_$Create$_0(capacity_11);
      var indexedObject_11 = tmp1_associateBy_11;
      var inductionVariable_11 = 0;
      var last_11 = indexedObject_11.length;
      while (inductionVariable_11 < last_11) {
        var element_11 = indexedObject_11[inductionVariable_11];
        inductionVariable_11 = inductionVariable_11 + 1 | 0;
        var tmp$ret$0_11;
        // Inline function 'kotlinx.html.inputFormEncTypeValues.<anonymous>' call
        tmp$ret$0_11 = element_11.realValue_1;
        tmp0_associateByTo_11.put_3mhbri_k$(tmp$ret$0_11, element_11);
      }
      tmp$ret$1_11 = tmp0_associateByTo_11;
      tmp$ret$2_11 = tmp$ret$1_11;
      inputFormEncTypeValues = tmp$ret$2_11;
      var tmp$ret$2_12;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_12 = values_10();
      var capacity_12 = coerceAtLeast(mapCapacity(tmp1_associateBy_12.length), 16);
      var tmp$ret$1_12;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_12 = LinkedHashMap_init_$Create$_0(capacity_12);
      var indexedObject_12 = tmp1_associateBy_12;
      var inductionVariable_12 = 0;
      var last_12 = indexedObject_12.length;
      while (inductionVariable_12 < last_12) {
        var element_12 = indexedObject_12[inductionVariable_12];
        inductionVariable_12 = inductionVariable_12 + 1 | 0;
        var tmp$ret$0_12;
        // Inline function 'kotlinx.html.inputFormMethodValues.<anonymous>' call
        tmp$ret$0_12 = element_12.realValue_1;
        tmp0_associateByTo_12.put_3mhbri_k$(tmp$ret$0_12, element_12);
      }
      tmp$ret$1_12 = tmp0_associateByTo_12;
      tmp$ret$2_12 = tmp$ret$1_12;
      inputFormMethodValues = tmp$ret$2_12;
      var tmp$ret$2_13;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_13 = values_12();
      var capacity_13 = coerceAtLeast(mapCapacity(tmp1_associateBy_13.length), 16);
      var tmp$ret$1_13;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_13 = LinkedHashMap_init_$Create$_0(capacity_13);
      var indexedObject_13 = tmp1_associateBy_13;
      var inductionVariable_13 = 0;
      var last_13 = indexedObject_13.length;
      while (inductionVariable_13 < last_13) {
        var element_13 = indexedObject_13[inductionVariable_13];
        inductionVariable_13 = inductionVariable_13 + 1 | 0;
        var tmp$ret$0_13;
        // Inline function 'kotlinx.html.keyGenKeyTypeValues.<anonymous>' call
        tmp$ret$0_13 = element_13.realValue_1;
        tmp0_associateByTo_13.put_3mhbri_k$(tmp$ret$0_13, element_13);
      }
      tmp$ret$1_13 = tmp0_associateByTo_13;
      tmp$ret$2_13 = tmp$ret$1_13;
      keyGenKeyTypeValues = tmp$ret$2_13;
      var tmp$ret$2_14;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_14 = values_14();
      var capacity_14 = coerceAtLeast(mapCapacity(tmp1_associateBy_14.length), 16);
      var tmp$ret$1_14;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_14 = LinkedHashMap_init_$Create$_0(capacity_14);
      var indexedObject_14 = tmp1_associateBy_14;
      var inductionVariable_14 = 0;
      var last_14 = indexedObject_14.length;
      while (inductionVariable_14 < last_14) {
        var element_14 = indexedObject_14[inductionVariable_14];
        inductionVariable_14 = inductionVariable_14 + 1 | 0;
        var tmp$ret$0_14;
        // Inline function 'kotlinx.html.textAreaWrapValues.<anonymous>' call
        tmp$ret$0_14 = element_14.realValue_1;
        tmp0_associateByTo_14.put_3mhbri_k$(tmp$ret$0_14, element_14);
      }
      tmp$ret$1_14 = tmp0_associateByTo_14;
      tmp$ret$2_14 = tmp$ret$1_14;
      textAreaWrapValues = tmp$ret$2_14;
      var tmp$ret$2_15;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy_15 = values_15();
      var capacity_15 = coerceAtLeast(mapCapacity(tmp1_associateBy_15.length), 16);
      var tmp$ret$1_15;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo_15 = LinkedHashMap_init_$Create$_0(capacity_15);
      var indexedObject_15 = tmp1_associateBy_15;
      var inductionVariable_15 = 0;
      var last_15 = indexedObject_15.length;
      while (inductionVariable_15 < last_15) {
        var element_15 = indexedObject_15[inductionVariable_15];
        inductionVariable_15 = inductionVariable_15 + 1 | 0;
        var tmp$ret$0_15;
        // Inline function 'kotlinx.html.thScopeValues.<anonymous>' call
        tmp$ret$0_15 = element_15.realValue_1;
        tmp0_associateByTo_15.put_3mhbri_k$(tmp$ret$0_15, element_15);
      }
      tmp$ret$1_15 = tmp0_associateByTo_15;
      tmp$ret$2_15 = tmp$ret$1_15;
      thScopeValues = tmp$ret$2_15;
    }
  }
  function CommonAttributeGroupFacadeFlowInteractivePhrasingContent() {
  }
  function CommonAttributeGroupFacadeFlowInteractiveContent() {
  }
  function FlowInteractiveContent() {
  }
  function FlowInteractivePhrasingContent() {
  }
  function FlowPhrasingContent() {
  }
  function HtmlBlockInlineTag() {
  }
  function HtmlBlockTag() {
  }
  function HtmlInlineTag() {
  }
  function FlowContent() {
  }
  function InteractiveContent() {
  }
  function PhrasingContent() {
  }
  function FlowOrMetaDataOrPhrasingContent() {
  }
  function FlowOrHeadingContent() {
  }
  function FlowOrMetaDataContent() {
  }
  function FlowOrInteractiveContent() {
  }
  function FlowOrPhrasingContent() {
  }
  function SectioningOrFlowContent() {
  }
  function FlowOrInteractiveOrPhrasingContent() {
  }
  function INPUT(initialAttributes, consumer) {
    HTMLTag.call(this, 'input', consumer, initialAttributes, null, true, true);
    this.consumer_2 = consumer;
  }
  protoOf(INPUT).get_consumer_tu5133_k$ = function () {
    return this.consumer_2;
  };
  protoOf(INPUT).set_type_ytiqmp_k$ = function (newValue) {
    get_attributeInputTypeEnumInputTypeValues().set_r65rse_k$(this, 'type', newValue);
  };
  protoOf(INPUT).get_type_wovaf7_k$ = function () {
    return get_attributeInputTypeEnumInputTypeValues().get_kdqgs6_k$(this, 'type');
  };
  protoOf(INPUT).set_accept_albob1_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'accept', newValue);
  };
  protoOf(INPUT).get_accept_avafwx_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'accept');
  };
  protoOf(INPUT).set_alt_vr0wxm_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'alt', newValue);
  };
  protoOf(INPUT).get_alt_18j9hc_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'alt');
  };
  protoOf(INPUT).set_autoFocus_pv5tp9_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'autofocus', newValue);
  };
  protoOf(INPUT).get_autoFocus_zfc1fk_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'autofocus');
  };
  protoOf(INPUT).set_autoComplete_119bb0_k$ = function (newValue) {
    get_attributeBooleanBooleanOnOff().set_r65rse_k$(this, 'autocomplete', newValue);
  };
  protoOf(INPUT).get_autoComplete_88u9wv_k$ = function () {
    return get_attributeBooleanBooleanOnOff().get_kdqgs6_k$(this, 'autocomplete');
  };
  protoOf(INPUT).set_checked_9dog67_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'checked', newValue);
  };
  protoOf(INPUT).get_checked_djib3y_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'checked');
  };
  protoOf(INPUT).set_disabled_8l5lo0_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'disabled', newValue);
  };
  protoOf(INPUT).get_disabled_rbmjej_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'disabled');
  };
  protoOf(INPUT).set_form_plr1sh_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'form', newValue);
  };
  protoOf(INPUT).get_form_wom58t_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'form');
  };
  protoOf(INPUT).set_formAction_rfofjv_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'formaction', newValue);
  };
  protoOf(INPUT).get_formAction_u7opr1_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'formaction');
  };
  protoOf(INPUT).set_formEncType_mfbbsl_k$ = function (newValue) {
    get_attributeInputFormEncTypeEnumInputFormEncTypeValues().set_r65rse_k$(this, 'formenctype', newValue);
  };
  protoOf(INPUT).get_formEncType_klk8m1_k$ = function () {
    return get_attributeInputFormEncTypeEnumInputFormEncTypeValues().get_kdqgs6_k$(this, 'formenctype');
  };
  protoOf(INPUT).set_formMethod_2hdtf5_k$ = function (newValue) {
    get_attributeInputFormMethodEnumInputFormMethodValues().set_r65rse_k$(this, 'formmethod', newValue);
  };
  protoOf(INPUT).get_formMethod_oi1oky_k$ = function () {
    return get_attributeInputFormMethodEnumInputFormMethodValues().get_kdqgs6_k$(this, 'formmethod');
  };
  protoOf(INPUT).set_formNovalidate_bwd3kf_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'formnovalidate', newValue);
  };
  protoOf(INPUT).get_formNovalidate_6g1pz8_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'formnovalidate');
  };
  protoOf(INPUT).set_formTarget_ah555s_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'formtarget', newValue);
  };
  protoOf(INPUT).get_formTarget_l8yt4y_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'formtarget');
  };
  protoOf(INPUT).set_height_iaj1q_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'height', newValue);
  };
  protoOf(INPUT).get_height_e7t92o_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'height');
  };
  protoOf(INPUT).set_list_g2z0jt_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'list', newValue);
  };
  protoOf(INPUT).get_list_wopuqv_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'list');
  };
  protoOf(INPUT).set_max_cqefgr_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'max', newValue);
  };
  protoOf(INPUT).get_max_18j0ud_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'max');
  };
  protoOf(INPUT).set_maxLength_nabs05_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'maxlength', newValue);
  };
  protoOf(INPUT).get_maxLength_4knn0f_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'maxlength');
  };
  protoOf(INPUT).set_minLength_3uuvtj_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'minlength', newValue);
  };
  protoOf(INPUT).get_minLength_87999r_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'minlength');
  };
  protoOf(INPUT).set_min_igh8df_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'min', newValue);
  };
  protoOf(INPUT).get_min_18j0nr_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'min');
  };
  protoOf(INPUT).set_multiple_o0pwcc_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'multiple', newValue);
  };
  protoOf(INPUT).get_multiple_kznwh3_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'multiple');
  };
  protoOf(INPUT).set_pattern_crma73_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'pattern', newValue);
  };
  protoOf(INPUT).get_pattern_btfv4p_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'pattern');
  };
  protoOf(INPUT).set_placeholder_y9dqmc_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'placeholder', newValue);
  };
  protoOf(INPUT).get_placeholder_nsdr0q_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'placeholder');
  };
  protoOf(INPUT).set_readonly_pabxx2_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'readonly', newValue);
  };
  protoOf(INPUT).get_readonly_ow59u3_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'readonly');
  };
  protoOf(INPUT).set_required_xtinar_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'required', newValue);
  };
  protoOf(INPUT).get_required_wq3z3c_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'required');
  };
  protoOf(INPUT).set_size_s5yqi4_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'size', newValue);
  };
  protoOf(INPUT).get_size_woubt6_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'size');
  };
  protoOf(INPUT).set_src_70g1px_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'src', newValue);
  };
  protoOf(INPUT).get_src_18iw05_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'src');
  };
  protoOf(INPUT).set_step_xce4ll_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'step', newValue);
  };
  protoOf(INPUT).get_step_woujh1_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'step');
  };
  protoOf(INPUT).set_width_bs5acp_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'width', newValue);
  };
  protoOf(INPUT).get_width_j0q4yl_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'width');
  };
  protoOf(INPUT).set_files_a8z35k_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'files', newValue);
  };
  protoOf(INPUT).get_files_irdsge_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'files');
  };
  protoOf(INPUT).set_value_ic91ry_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'value', newValue);
  };
  protoOf(INPUT).get_value_j01efc_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'value');
  };
  protoOf(INPUT).set_name_p5yp4m_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'name', newValue);
  };
  protoOf(INPUT).get_name_woqyms_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'name');
  };
  function TEXTAREA(initialAttributes, consumer) {
    HTMLTag.call(this, 'textarea', consumer, initialAttributes, null, true, false);
    this.consumer_2 = consumer;
  }
  protoOf(TEXTAREA).get_consumer_tu5133_k$ = function () {
    return this.consumer_2;
  };
  protoOf(TEXTAREA).set_autoFocus_pv5tp9_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'autofocus', newValue);
  };
  protoOf(TEXTAREA).get_autoFocus_zfc1fk_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'autofocus');
  };
  protoOf(TEXTAREA).set_disabled_8l5lo0_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'disabled', newValue);
  };
  protoOf(TEXTAREA).get_disabled_rbmjej_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'disabled');
  };
  protoOf(TEXTAREA).set_form_plr1sh_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'form', newValue);
  };
  protoOf(TEXTAREA).get_form_wom58t_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'form');
  };
  protoOf(TEXTAREA).set_maxLength_nabs05_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'maxlength', newValue);
  };
  protoOf(TEXTAREA).get_maxLength_4knn0f_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'maxlength');
  };
  protoOf(TEXTAREA).set_minLength_3uuvtj_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'minlength', newValue);
  };
  protoOf(TEXTAREA).get_minLength_87999r_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'minlength');
  };
  protoOf(TEXTAREA).set_name_p5yp4m_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'name', newValue);
  };
  protoOf(TEXTAREA).get_name_woqyms_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'name');
  };
  protoOf(TEXTAREA).set_placeholder_y9dqmc_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'placeholder', newValue);
  };
  protoOf(TEXTAREA).get_placeholder_nsdr0q_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'placeholder');
  };
  protoOf(TEXTAREA).set_readonly_pabxx2_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'readonly', newValue);
  };
  protoOf(TEXTAREA).get_readonly_ow59u3_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'readonly');
  };
  protoOf(TEXTAREA).set_required_xtinar_k$ = function (newValue) {
    get_attributeBooleanTicker().set_r65rse_k$(this, 'required', newValue);
  };
  protoOf(TEXTAREA).get_required_wq3z3c_k$ = function () {
    return get_attributeBooleanTicker().get_kdqgs6_k$(this, 'required');
  };
  protoOf(TEXTAREA).set_rows_oix7y4_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'rows', newValue);
  };
  protoOf(TEXTAREA).get_rows_wott7m_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'rows');
  };
  protoOf(TEXTAREA).set_cols_fq3g9q_k$ = function (newValue) {
    get_attributeStringString().set_r65rse_k$(this, 'cols', newValue);
  };
  protoOf(TEXTAREA).get_cols_wok858_k$ = function () {
    return get_attributeStringString().get_kdqgs6_k$(this, 'cols');
  };
  protoOf(TEXTAREA).set_wrap_sthkbr_k$ = function (newValue) {
    get_attributeTextAreaWrapEnumTextAreaWrapValues().set_r65rse_k$(this, 'wrap', newValue);
  };
  protoOf(TEXTAREA).get_wrap_wox1ub_k$ = function () {
    return get_attributeTextAreaWrapEnumTextAreaWrapValues().get_kdqgs6_k$(this, 'wrap');
  };
  function HTMLTag$attributes$lambda(this$0) {
    return function () {
      return this$0.get_consumer_tu5133_k$();
    };
  }
  function HTMLTag(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag) {
    namespace = namespace === VOID ? null : namespace;
    this.tagName_1 = tagName;
    this.consumer_1 = consumer;
    this.namespace_1 = namespace;
    this.inlineTag_1 = inlineTag;
    this.emptyTag_1 = emptyTag;
    var tmp = this;
    tmp.attributes_1 = new DelegatingMap(initialAttributes, this, HTMLTag$attributes$lambda(this));
  }
  protoOf(HTMLTag).get_tagName_ocsgis_k$ = function () {
    return this.tagName_1;
  };
  protoOf(HTMLTag).get_consumer_tu5133_k$ = function () {
    return this.consumer_1;
  };
  protoOf(HTMLTag).get_namespace_t826ya_k$ = function () {
    return this.namespace_1;
  };
  protoOf(HTMLTag).get_inlineTag_rqc19k_k$ = function () {
    return this.inlineTag_1;
  };
  protoOf(HTMLTag).get_emptyTag_bxtkiy_k$ = function () {
    return this.emptyTag_1;
  };
  protoOf(HTMLTag).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(HTMLTag).get_attributesEntries_pdb5ow_k$ = function () {
    return this.get_attributes_dgqof4_k$().get_immutableEntries_iyyb1z_k$();
  };
  function get_AVERAGE_PAGE_SIZE() {
    _init_properties_stream_kt__a5c4ow();
    return AVERAGE_PAGE_SIZE;
  }
  var AVERAGE_PAGE_SIZE;
  function get_escapeMap() {
    _init_properties_stream_kt__a5c4ow();
    return escapeMap;
  }
  var escapeMap;
  function get_letterRangeLowerCase() {
    _init_properties_stream_kt__a5c4ow();
    return letterRangeLowerCase;
  }
  var letterRangeLowerCase;
  function get_letterRangeUpperCase() {
    _init_properties_stream_kt__a5c4ow();
    return letterRangeUpperCase;
  }
  var letterRangeUpperCase;
  function get_digitRange() {
    _init_properties_stream_kt__a5c4ow();
    return digitRange;
  }
  var digitRange;
  var properties_initialized_stream_kt_27o15u;
  function _init_properties_stream_kt__a5c4ow() {
    if (properties_initialized_stream_kt_27o15u) {
    } else {
      properties_initialized_stream_kt_27o15u = true;
      AVERAGE_PAGE_SIZE = 32768;
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      var tmp0_let = mapOf([to(new Char(_Char___init__impl__6a9atx(60)), '&lt;'), to(new Char(_Char___init__impl__6a9atx(62)), '&gt;'), to(new Char(_Char___init__impl__6a9atx(38)), '&amp;'), to(new Char(_Char___init__impl__6a9atx(34)), '&quot;')]);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'kotlinx.html.stream.escapeMap.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = tmp0_let.get_keys_wop4xp_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$().value_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.html.stream.escapeMap.<anonymous>.<anonymous>' call
        tmp$ret$0 = Char__toInt_impl_vasixd(item);
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_elvis_lhs = maxOrNull(tmp$ret$2);
      var maxCode = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
      var tmp = 0;
      var tmp_0 = maxCode + 1 | 0;
      var tmp$ret$3;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$3 = fillArrayVal(Array(tmp_0), null);
      var tmp_1 = tmp$ret$3;
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$4;
        // Inline function 'kotlinx.html.stream.escapeMap.<anonymous>.<anonymous>' call
        tmp$ret$4 = tmp0_let.get_1mhr4y_k$(new Char(numberToChar(tmp_2)));
        tmp_1[tmp_2] = tmp$ret$4;
        tmp = tmp + 1 | 0;
      }
      tmp$ret$5 = tmp_1;
      tmp$ret$6 = tmp$ret$5;
      escapeMap = tmp$ret$6;
      letterRangeLowerCase = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122));
      letterRangeUpperCase = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90));
      digitRange = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57));
    }
  }
  //region block: post-declaration
  protoOf(StringEncoder).empty_mnkn29_k$ = empty;
  protoOf(BooleanEncoder).empty_mnkn29_k$ = empty;
  protoOf(TickerEncoder).empty_mnkn29_k$ = empty;
  protoOf(EnumEncoder).empty_mnkn29_k$ = empty;
  protoOf(HTMLTag).unaryPlus_31ug2c_k$ = unaryPlus;
  protoOf(HTMLTag).unaryPlus_g7ydph_k$ = unaryPlus_0;
  protoOf(HTMLTag).text_yddl45_k$ = text;
  protoOf(HTMLTag).text_ojl72r_k$ = text_0;
  protoOf(HTMLTag).entity_uznif4_k$ = entity;
  protoOf(HTMLTag).comment_mqs0p9_k$ = comment;
  protoOf(INPUT).unaryPlus_31ug2c_k$ = unaryPlus;
  protoOf(INPUT).unaryPlus_g7ydph_k$ = unaryPlus_0;
  protoOf(INPUT).text_yddl45_k$ = text;
  protoOf(INPUT).text_ojl72r_k$ = text_0;
  protoOf(INPUT).entity_uznif4_k$ = entity;
  protoOf(INPUT).comment_mqs0p9_k$ = comment;
  protoOf(TEXTAREA).unaryPlus_31ug2c_k$ = unaryPlus;
  protoOf(TEXTAREA).unaryPlus_g7ydph_k$ = unaryPlus_0;
  protoOf(TEXTAREA).text_yddl45_k$ = text;
  protoOf(TEXTAREA).text_ojl72r_k$ = text_0;
  protoOf(TEXTAREA).entity_uznif4_k$ = entity;
  protoOf(TEXTAREA).comment_mqs0p9_k$ = comment;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_html.js.map
