(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.sb;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var toString = kotlin_kotlin.$_$.xb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var charSequenceGet = kotlin_kotlin.$_$.ha;
  var Char = kotlin_kotlin.$_$.of;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var equals = kotlin_kotlin.$_$.na;
  var classMeta = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var objectMeta = kotlin_kotlin.$_$.rb;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var getStringHashCode = kotlin_kotlin.$_$.ta;
  var Annotation = kotlin_kotlin.$_$.mf;
  var contentEquals = kotlin_kotlin.$_$.c6;
  var hashCode = kotlin_kotlin.$_$.ua;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var joinToString = kotlin_kotlin.$_$.l7;
  var List = kotlin_kotlin.$_$.k5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Map = kotlin_kotlin.$_$.m5;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.bh;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var toInt = kotlin_kotlin.$_$.ve;
  var toLong = kotlin_kotlin.$_$.ye;
  var toDouble = kotlin_kotlin.$_$.te;
  var toLongOrNull = kotlin_kotlin.$_$.xe;
  var toDoubleOrNull = kotlin_kotlin.$_$.se;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.o4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var toULongOrNull = kotlin_kotlin.$_$.cf;
  var Companion_getInstance = kotlin_kotlin.$_$.y4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.p3;
  var ULong = kotlin_kotlin.$_$.ng;
  var isInterface = kotlin_kotlin.$_$.eb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var lazy_0 = kotlin_kotlin.$_$.ch;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var KProperty1 = kotlin_kotlin.$_$.rc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sa;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var isLetter = kotlin_kotlin.$_$.rd;
  var charSequenceLength = kotlin_kotlin.$_$.ia;
  var last = kotlin_kotlin.$_$.zd;
  var toString_0 = kotlin_kotlin.$_$.r2;
  var isUpperCase = kotlin_kotlin.$_$.vd;
  var toLong_0 = kotlin_kotlin.$_$.vb;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.f3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.h3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.o3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.q3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.w2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.y2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.x3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.z3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var captureStack = kotlin_kotlin.$_$.ea;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ja;
  var coerceAtLeast = kotlin_kotlin.$_$.cc;
  var coerceAtMost = kotlin_kotlin.$_$.ec;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var singleOrNull = kotlin_kotlin.$_$.l8;
  var arrayIterator = kotlin_kotlin.$_$.ca;
  var emptyMap = kotlin_kotlin.$_$.v6;
  var getValue = kotlin_kotlin.$_$.g7;
  var fillArrayVal = kotlin_kotlin.$_$.pa;
  var toString_1 = kotlin_kotlin.$_$.jh;
  var copyOf = kotlin_kotlin.$_$.p6;
  var copyOf_0 = kotlin_kotlin.$_$.q6;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.rf;
  var invoke = kotlin_kotlin.$_$.xg;
  var CoroutineImpl = kotlin_kotlin.$_$.w9;
  var DeepRecursiveScope = kotlin_kotlin.$_$.sf;
  var Unit = kotlin_kotlin.$_$.qg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g9;
  var SuspendFunction2 = kotlin_kotlin.$_$.y9;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var isObject = kotlin_kotlin.$_$.hb;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e3;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var polymorphicDefault = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var plus = kotlin_kotlin.$_$.eh;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a3;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.wf;
  var isFinite = kotlin_kotlin.$_$.zg;
  var isFinite_0 = kotlin_kotlin.$_$.yg;
  var decodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var decodeNullableSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var ChunkedDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var toUInt = kotlin_kotlin.$_$.bf;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.g3;
  var toULong = kotlin_kotlin.$_$.df;
  var toUByte = kotlin_kotlin.$_$.af;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.x2;
  var toUShort = kotlin_kotlin.$_$.ef;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.y3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.qb;
  var ensureNotNull = kotlin_kotlin.$_$.wg;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.x4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.w4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.z4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var setOf = kotlin_kotlin.$_$.k8;
  var numberToChar = kotlin_kotlin.$_$.nb;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.q2;
  var equals_0 = kotlin_kotlin.$_$.kd;
  var toByte = kotlin_kotlin.$_$.ub;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.dh;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.j4;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.n4;
  var toShort = kotlin_kotlin.$_$.wb;
  var single = kotlin_kotlin.$_$.ge;
  var emptySet = kotlin_kotlin.$_$.w6;
  var plus_0 = kotlin_kotlin.$_$.a8;
  var toList = kotlin_kotlin.$_$.r8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.gh;
  var encodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var shouldEncodeElementDefault = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var THROW_ISE = kotlin_kotlin.$_$.gg;
  var Enum = kotlin_kotlin.$_$.tf;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var indexOf = kotlin_kotlin.$_$.od;
  var last_0 = kotlin_kotlin.$_$.s7;
  var removeLast = kotlin_kotlin.$_$.h8;
  var lastIndexOf = kotlin_kotlin.$_$.yd;
  var Long = kotlin_kotlin.$_$.yf;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.m2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.u4;
  var charArray = kotlin_kotlin.$_$.ga;
  var chunked = kotlin_kotlin.$_$.bd;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  //endregion
  //region block: pre-declaration
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(Json, 'Json', classMeta, VOID, [StringFormat]);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta, VOID, [Annotation]);
  setMetadataFor(JsonNames, 'JsonNames', classMeta, VOID, [Annotation]);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, {0: JsonNull_getInstance});
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(JsonNamingStrategy, 'JsonNamingStrategy', interfaceMeta);
  setMetadataFor(JsonNamingStrategy$Builtins$SnakeCase$1, VOID, classMeta, VOID, [JsonNamingStrategy]);
  setMetadataFor(Builtins, 'Builtins', objectMeta);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta);
  setMetadataFor(JsonWriter, 'JsonWriter', interfaceMeta);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, ChunkedDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(SuppressAnimalSniffer, 'SuppressAnimalSniffer', classMeta, VOID, [Annotation]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', classMeta, NamedValueEncoder, [NamedValueEncoder, JsonEncoder]);
  setMetadataFor(JsonTreeEncoder, 'JsonTreeEncoder', classMeta, AbstractJsonTreeEncoder);
  setMetadataFor(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1, VOID, classMeta, AbstractEncoder);
  setMetadataFor(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1, VOID, classMeta, AbstractEncoder);
  setMetadataFor(JsonPrimitiveEncoder, 'JsonPrimitiveEncoder', classMeta, AbstractJsonTreeEncoder);
  setMetadataFor(JsonTreeListEncoder, 'JsonTreeListEncoder', classMeta, AbstractJsonTreeEncoder);
  setMetadataFor(JsonTreeMapEncoder, 'JsonTreeMapEncoder', classMeta, JsonTreeEncoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta, VOID, [JsonWriter]);
  //endregion
  function JsonBuilder(json) {
    this.encodeDefaults_1 = json.configuration_1.get_encodeDefaults_m8plkf_k$();
    this.explicitNulls_1 = json.configuration_1.get_explicitNulls_ppiuof_k$();
    this.ignoreUnknownKeys_1 = json.configuration_1.get_ignoreUnknownKeys_kvp19_k$();
    this.isLenient_1 = json.configuration_1.get_isLenient_1g1x8_k$();
    this.allowStructuredMapKeys_1 = json.configuration_1.get_allowStructuredMapKeys_fk21t_k$();
    this.prettyPrint_1 = json.configuration_1.get_prettyPrint_y7fmum_k$();
    this.prettyPrintIndent_1 = json.configuration_1.get_prettyPrintIndent_5z3eey_k$();
    this.coerceInputValues_1 = json.configuration_1.get_coerceInputValues_gdasvc_k$();
    this.useArrayPolymorphism_1 = json.configuration_1.get_useArrayPolymorphism_teidaa_k$();
    this.classDiscriminator_1 = json.configuration_1.get_classDiscriminator_x3y365_k$();
    this.allowSpecialFloatingPointValues_1 = json.configuration_1.get_allowSpecialFloatingPointValues_1eu5hp_k$();
    this.useAlternativeNames_1 = json.configuration_1.get_useAlternativeNames_c5maqh_k$();
    this.namingStrategy_1 = json.configuration_1.get_namingStrategy_kue0is_k$();
    this.serializersModule_1 = json.get_serializersModule_piitvg_k$();
  }
  protoOf(JsonBuilder).set_encodeDefaults_awi118_k$ = function (_set____db54di) {
    this.encodeDefaults_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_encodeDefaults_m8plkf_k$ = function () {
    return this.encodeDefaults_1;
  };
  protoOf(JsonBuilder).set_explicitNulls_2h82b2_k$ = function (_set____db54di) {
    this.explicitNulls_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_explicitNulls_ppiuof_k$ = function () {
    return this.explicitNulls_1;
  };
  protoOf(JsonBuilder).set_ignoreUnknownKeys_d94li_k$ = function (_set____db54di) {
    this.ignoreUnknownKeys_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_ignoreUnknownKeys_kvp19_k$ = function () {
    return this.ignoreUnknownKeys_1;
  };
  protoOf(JsonBuilder).set_isLenient_9pe3jb_k$ = function (_set____db54di) {
    this.isLenient_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_isLenient_1g1x8_k$ = function () {
    return this.isLenient_1;
  };
  protoOf(JsonBuilder).set_allowStructuredMapKeys_bu0kfq_k$ = function (_set____db54di) {
    this.allowStructuredMapKeys_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_allowStructuredMapKeys_fk21t_k$ = function () {
    return this.allowStructuredMapKeys_1;
  };
  protoOf(JsonBuilder).set_prettyPrint_l338v_k$ = function (_set____db54di) {
    this.prettyPrint_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_prettyPrint_y7fmum_k$ = function () {
    return this.prettyPrint_1;
  };
  protoOf(JsonBuilder).set_prettyPrintIndent_h1jvsk_k$ = function (_set____db54di) {
    this.prettyPrintIndent_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_prettyPrintIndent_5z3eey_k$ = function () {
    return this.prettyPrintIndent_1;
  };
  protoOf(JsonBuilder).set_coerceInputValues_i8heff_k$ = function (_set____db54di) {
    this.coerceInputValues_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_coerceInputValues_gdasvc_k$ = function () {
    return this.coerceInputValues_1;
  };
  protoOf(JsonBuilder).set_useArrayPolymorphism_a7xwxf_k$ = function (_set____db54di) {
    this.useArrayPolymorphism_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_useArrayPolymorphism_teidaa_k$ = function () {
    return this.useArrayPolymorphism_1;
  };
  protoOf(JsonBuilder).set_classDiscriminator_pa6a1d_k$ = function (_set____db54di) {
    this.classDiscriminator_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_classDiscriminator_x3y365_k$ = function () {
    return this.classDiscriminator_1;
  };
  protoOf(JsonBuilder).set_allowSpecialFloatingPointValues_9kglh2_k$ = function (_set____db54di) {
    this.allowSpecialFloatingPointValues_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_allowSpecialFloatingPointValues_1eu5hp_k$ = function () {
    return this.allowSpecialFloatingPointValues_1;
  };
  protoOf(JsonBuilder).set_useAlternativeNames_li821w_k$ = function (_set____db54di) {
    this.useAlternativeNames_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_useAlternativeNames_c5maqh_k$ = function () {
    return this.useAlternativeNames_1;
  };
  protoOf(JsonBuilder).set_namingStrategy_g18rup_k$ = function (_set____db54di) {
    this.namingStrategy_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_namingStrategy_kue0is_k$ = function () {
    return this.namingStrategy_1;
  };
  protoOf(JsonBuilder).set_serializersModule_ohq86n_k$ = function (_set____db54di) {
    this.serializersModule_1 = _set____db54di;
  };
  protoOf(JsonBuilder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(JsonBuilder).build_1k0s4u_k$ = function () {
    if (this.useArrayPolymorphism_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.classDiscriminator_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.prettyPrint_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.prettyPrintIndent_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.prettyPrintIndent_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.prettyPrintIndent_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          tmp$ret$2 = ((equals(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.prettyPrintIndent_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.encodeDefaults_1, this.ignoreUnknownKeys_1, this.isLenient_1, this.allowStructuredMapKeys_1, this.prettyPrint_1, this.explicitNulls_1, this.prettyPrintIndent_1, this.coerceInputValues_1, this.useArrayPolymorphism_1, this.classDiscriminator_1, this.allowSpecialFloatingPointValues_1, this.useAlternativeNames_1, this.namingStrategy_1);
  };
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.configuration_1 = configuration;
    this.serializersModule_1 = serializersModule;
    this._schemaCache_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).get_configuration_uqypjh_k$ = function () {
    return this.configuration_1;
  };
  protoOf(Json).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(Json).get__schemaCache_mw4zkl_k$ = function () {
    return this._schemaCache_1;
  };
  protoOf(Json).encodeToString_bhi5ce_k$ = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.release_wtm6d2_k$();
    }
  };
  protoOf(Json).decodeFromString_d9fce8_k$ = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.get_descriptor_wjt6a0_k$(), null);
    var result = input.decodeSerializableValue_6v83lo_k$(deserializer);
    lexer.expectEof_2xcy36_k$();
    return result;
  };
  protoOf(Json).encodeToJsonElement_lfuu27_k$ = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).decodeFromJsonElement_b9lc7m_k$ = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).parseToJsonElement_lw2h4r_k$ = function (string) {
    return this.decodeFromString_d9fce8_k$(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.build_1k0s4u_k$();
    return new JsonImpl(conf, builder.serializersModule_1);
  }
  function get_defaultDiscriminator() {
    return defaultDiscriminator;
  }
  var defaultDiscriminator;
  function get_defaultIndent() {
    return defaultIndent;
  }
  var defaultIndent;
  function validateConfiguration($this) {
    if (equals($this.get_serializersModule_piitvg_k$(), EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.configuration_1.get_useArrayPolymorphism_teidaa_k$(), $this.configuration_1.get_classDiscriminator_x3y365_k$());
    $this.get_serializersModule_piitvg_k$().dumpTo_q6va1n_k$(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator(discriminator) {
    this.discriminator_1 = discriminator;
  }
  protoOf(JsonClassDiscriminator).get_discriminator_wfz2j1_k$ = function () {
    return this.discriminator_1;
  };
  protoOf(JsonClassDiscriminator).equals = function (other) {
    if (!(other instanceof JsonClassDiscriminator))
      return false;
    var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
    if (!(this.discriminator_1 === tmp0_other_with_cast.discriminator_1))
      return false;
    return true;
  };
  protoOf(JsonClassDiscriminator).hashCode = function () {
    return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.discriminator_1);
  };
  protoOf(JsonClassDiscriminator).toString = function () {
    return '@kotlinx.serialization.json.JsonClassDiscriminator(discriminator=' + this.discriminator_1 + ')';
  };
  function JsonNames(names) {
    this.names_1 = names;
  }
  protoOf(JsonNames).get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  protoOf(JsonNames).equals = function (other) {
    if (!(other instanceof JsonNames))
      return false;
    var tmp0_other_with_cast = other instanceof JsonNames ? other : THROW_CCE();
    if (!contentEquals(this.names_1, tmp0_other_with_cast.names_1))
      return false;
    return true;
  };
  protoOf(JsonNames).hashCode = function () {
    return imul(getStringHashCode('names'), 127) ^ hashCode(this.names_1);
  };
  protoOf(JsonNames).toString = function () {
    return '@kotlinx.serialization.json.JsonNames(names=' + toString(this.names_1) + ')';
  };
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    this.encodeDefaults_1 = encodeDefaults;
    this.ignoreUnknownKeys_1 = ignoreUnknownKeys;
    this.isLenient_1 = isLenient;
    this.allowStructuredMapKeys_1 = allowStructuredMapKeys;
    this.prettyPrint_1 = prettyPrint;
    this.explicitNulls_1 = explicitNulls;
    this.prettyPrintIndent_1 = prettyPrintIndent;
    this.coerceInputValues_1 = coerceInputValues;
    this.useArrayPolymorphism_1 = useArrayPolymorphism;
    this.classDiscriminator_1 = classDiscriminator;
    this.allowSpecialFloatingPointValues_1 = allowSpecialFloatingPointValues;
    this.useAlternativeNames_1 = useAlternativeNames;
    this.namingStrategy_1 = namingStrategy;
  }
  protoOf(JsonConfiguration).get_encodeDefaults_m8plkf_k$ = function () {
    return this.encodeDefaults_1;
  };
  protoOf(JsonConfiguration).get_ignoreUnknownKeys_kvp19_k$ = function () {
    return this.ignoreUnknownKeys_1;
  };
  protoOf(JsonConfiguration).get_isLenient_1g1x8_k$ = function () {
    return this.isLenient_1;
  };
  protoOf(JsonConfiguration).get_allowStructuredMapKeys_fk21t_k$ = function () {
    return this.allowStructuredMapKeys_1;
  };
  protoOf(JsonConfiguration).get_prettyPrint_y7fmum_k$ = function () {
    return this.prettyPrint_1;
  };
  protoOf(JsonConfiguration).get_explicitNulls_ppiuof_k$ = function () {
    return this.explicitNulls_1;
  };
  protoOf(JsonConfiguration).get_prettyPrintIndent_5z3eey_k$ = function () {
    return this.prettyPrintIndent_1;
  };
  protoOf(JsonConfiguration).get_coerceInputValues_gdasvc_k$ = function () {
    return this.coerceInputValues_1;
  };
  protoOf(JsonConfiguration).get_useArrayPolymorphism_teidaa_k$ = function () {
    return this.useArrayPolymorphism_1;
  };
  protoOf(JsonConfiguration).get_classDiscriminator_x3y365_k$ = function () {
    return this.classDiscriminator_1;
  };
  protoOf(JsonConfiguration).get_allowSpecialFloatingPointValues_1eu5hp_k$ = function () {
    return this.allowSpecialFloatingPointValues_1;
  };
  protoOf(JsonConfiguration).get_useAlternativeNames_c5maqh_k$ = function () {
    return this.useAlternativeNames_1;
  };
  protoOf(JsonConfiguration).get_namingStrategy_kue0is_k$ = function () {
    return this.namingStrategy_1;
  };
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.encodeDefaults_1 + ', ignoreUnknownKeys=' + this.ignoreUnknownKeys_1 + ', isLenient=' + this.isLenient_1 + ', ' + ('allowStructuredMapKeys=' + this.allowStructuredMapKeys_1 + ', prettyPrint=' + this.prettyPrint_1 + ', explicitNulls=' + this.explicitNulls_1 + ', ') + ("prettyPrintIndent='" + this.prettyPrintIndent_1 + "', coerceInputValues=" + this.coerceInputValues_1 + ', useArrayPolymorphism=' + this.useArrayPolymorphism_1 + ', ') + ("classDiscriminator='" + this.classDiscriminator_1 + "', allowSpecialFloatingPointValues=" + this.allowSpecialFloatingPointValues_1 + ', useAlternativeNames=' + this.useAlternativeNames_1 + ', ') + ('namingStrategy=' + this.namingStrategy_1 + ')');
  };
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return JsonElementSerializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  function _get_content__ps04ag($this) {
    return $this.content_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return JsonArraySerializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonArray(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.content_1 = content;
  }
  protoOf(JsonArray).get_size_woubt6_k$ = function () {
    return this.content_1.get_size_woubt6_k$();
  };
  protoOf(JsonArray).contains_kpaesj_k$ = function (element) {
    return this.content_1.contains_2ehdt1_k$(element);
  };
  protoOf(JsonArray).contains_2ehdt1_k$ = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.contains_kpaesj_k$(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).containsAll_o6wx2e_k$ = function (elements) {
    return this.content_1.containsAll_jr3fla_k$(elements);
  };
  protoOf(JsonArray).containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_o6wx2e_k$(elements);
  };
  protoOf(JsonArray).get_fkrdnv_k$ = function (index) {
    return this.content_1.get_fkrdnv_k$(index);
  };
  protoOf(JsonArray).indexOf_7jcirr_k$ = function (element) {
    return this.content_1.indexOf_dcv8dt_k$(element);
  };
  protoOf(JsonArray).indexOf_dcv8dt_k$ = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.indexOf_7jcirr_k$(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  protoOf(JsonArray).iterator_jk1svi_k$ = function () {
    return this.content_1.iterator_jk1svi_k$();
  };
  protoOf(JsonArray).lastIndexOf_mrbxe9_k$ = function (element) {
    return this.content_1.lastIndexOf_rzx8t5_k$(element);
  };
  protoOf(JsonArray).lastIndexOf_rzx8t5_k$ = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.lastIndexOf_mrbxe9_k$(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).listIterator_xjshxw_k$ = function () {
    return this.content_1.listIterator_xjshxw_k$();
  };
  protoOf(JsonArray).listIterator_5hanv9_k$ = function (index) {
    return this.content_1.listIterator_5hanv9_k$(index);
  };
  protoOf(JsonArray).subList_d153ha_k$ = function (fromIndex, toIndex) {
    return this.content_1.subList_d153ha_k$(fromIndex, toIndex);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.content_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.content_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.content_1, ',', '[', ']');
  };
  function _get_content__ps04ag_0($this) {
    return $this.content_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return JsonObjectSerializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_key_18j28a_k$();
    var k = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_value_j01efc_k$();
    var v = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(58));
    tmp0_apply.append_t8pm91_k$(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.content_1 = content;
  }
  protoOf(JsonObject).get_entries_p20ztl_k$ = function () {
    return this.content_1.get_entries_p20ztl_k$();
  };
  protoOf(JsonObject).get_keys_wop4xp_k$ = function () {
    return this.content_1.get_keys_wop4xp_k$();
  };
  protoOf(JsonObject).get_size_woubt6_k$ = function () {
    return this.content_1.get_size_woubt6_k$();
  };
  protoOf(JsonObject).get_values_ksazhn_k$ = function () {
    return this.content_1.get_values_ksazhn_k$();
  };
  protoOf(JsonObject).containsKey_mw51tt_k$ = function (key) {
    return this.content_1.containsKey_wgk31w_k$(key);
  };
  protoOf(JsonObject).containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).containsValue_eu7wk0_k$ = function (value) {
    return this.content_1.containsValue_5viga1_k$(value);
  };
  protoOf(JsonObject).containsValue_5viga1_k$ = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.containsValue_eu7wk0_k$(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).get_4u8u51_k$ = function (key) {
    return this.content_1.get_1mhr4y_k$(key);
  };
  protoOf(JsonObject).get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.content_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.content_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.content_1.get_entries_p20ztl_k$();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return JsonPrimitiveSerializer_getInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    Companion_getInstance_8();
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.get_content_h02jrk_k$();
  };
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.isString_1 = isString;
    this.coerceToInlineType_1 = coerceToInlineType;
    this.content_1 = toString(body);
    if (!(this.coerceToInlineType_1 == null)) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.coerceToInlineType_1.get_isInline_usk17w_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlin.require.<anonymous>' call
        tmp$ret$0 = 'Failed requirement.';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).get_isString_zep7bw_k$ = function () {
    return this.isString_1;
  };
  protoOf(JsonLiteral).get_coerceToInlineType_vv6udq_k$ = function () {
    return this.coerceToInlineType_1;
  };
  protoOf(JsonLiteral).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.isString_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.content_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.content_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.isString_1 === other.isString_1))
      return false;
    if (!(this.content_1 === other.content_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = this.isString_1 | 0;
    result = imul(31, result) + getStringHashCode(this.content_1) | 0;
    return result;
  };
  function _get_$cachedSerializer$delegate__hyykxm($this) {
    return $this.$cachedSerializer$delegate_1;
  }
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.content_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  protoOf(JsonNull).get_isString_zep7bw_k$ = function () {
    return false;
  };
  protoOf(JsonNull).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(JsonNull).serializer_9w0wvi_k$ = function () {
    return this.$cachedSerializer$delegate_1.get_value_j01efc_k$();
  };
  protoOf(JsonNull).serializer_5xgt5t_k$ = function (typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toInt(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toLong(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp1_toFloat = _this__u8e3s4.get_content_h02jrk_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp1_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.get_content_h02jrk_k$();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toLongOrNull(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (properties_initialized_JsonElement_kt_abxy8s) {
    } else {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_getInstance()));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.element$default_r6n2dg_k$('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.element$default_r6n2dg_k$('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.element$default_r6n2dg_k$('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.element$default_r6n2dg_k$('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.element$default_r6n2dg_k$('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(JsonElementSerializer).serialize_j52v1g_k$ = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.encodeSerializableValue_g55msp_k$(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.encodeSerializableValue_g55msp_k$(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.encodeSerializableValue_g55msp_k$(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_j52v1g_k$(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).deserialize_2t41fm_k$ = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.decodeJsonElement_6lz9ye_k$();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.$$delegate_0__1 = ListSerializer(JsonElementSerializer_getInstance()).get_descriptor_wjt6a0_k$();
    this.serialName_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).get_annotations_20dirp_k$ = function () {
    return this.$$delegate_0__1.get_annotations_20dirp_k$();
  };
  protoOf(JsonArrayDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.$$delegate_0__1.get_elementsCount_288r0x_k$();
  };
  protoOf(JsonArrayDescriptor).get_isInline_usk17w_k$ = function () {
    return this.$$delegate_0__1.get_isInline_usk17w_k$();
  };
  protoOf(JsonArrayDescriptor).get_isNullable_67sy7o_k$ = function () {
    return this.$$delegate_0__1.get_isNullable_67sy7o_k$();
  };
  protoOf(JsonArrayDescriptor).get_kind_wop7ml_k$ = function () {
    return this.$$delegate_0__1.get_kind_wop7ml_k$();
  };
  protoOf(JsonArrayDescriptor).getElementAnnotations_a57oar_k$ = function (index) {
    return this.$$delegate_0__1.getElementAnnotations_a57oar_k$(index);
  };
  protoOf(JsonArrayDescriptor).getElementDescriptor_sqz94k_k$ = function (index) {
    return this.$$delegate_0__1.getElementDescriptor_sqz94k_k$(index);
  };
  protoOf(JsonArrayDescriptor).getElementIndex_2hwbkl_k$ = function (name) {
    return this.$$delegate_0__1.getElementIndex_2hwbkl_k$(name);
  };
  protoOf(JsonArrayDescriptor).getElementName_ykpypc_k$ = function (index) {
    return this.$$delegate_0__1.getElementName_ykpypc_k$(index);
  };
  protoOf(JsonArrayDescriptor).isElementOptional_c3hgb3_k$ = function (index) {
    return this.$$delegate_0__1.isElementOptional_c3hgb3_k$(index);
  };
  protoOf(JsonArrayDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.descriptor_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(JsonArraySerializer).serialize_vr3ymf_k$ = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).serialize_32qylj_k$(encoder, value);
  };
  protoOf(JsonArraySerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_vr3ymf_k$(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).deserialize_2t41fm_k$(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.$$delegate_0__1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).get_descriptor_wjt6a0_k$();
    this.serialName_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).get_annotations_20dirp_k$ = function () {
    return this.$$delegate_0__1.get_annotations_20dirp_k$();
  };
  protoOf(JsonObjectDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.$$delegate_0__1.get_elementsCount_288r0x_k$();
  };
  protoOf(JsonObjectDescriptor).get_isInline_usk17w_k$ = function () {
    return this.$$delegate_0__1.get_isInline_usk17w_k$();
  };
  protoOf(JsonObjectDescriptor).get_isNullable_67sy7o_k$ = function () {
    return this.$$delegate_0__1.get_isNullable_67sy7o_k$();
  };
  protoOf(JsonObjectDescriptor).get_kind_wop7ml_k$ = function () {
    return this.$$delegate_0__1.get_kind_wop7ml_k$();
  };
  protoOf(JsonObjectDescriptor).getElementAnnotations_a57oar_k$ = function (index) {
    return this.$$delegate_0__1.getElementAnnotations_a57oar_k$(index);
  };
  protoOf(JsonObjectDescriptor).getElementDescriptor_sqz94k_k$ = function (index) {
    return this.$$delegate_0__1.getElementDescriptor_sqz94k_k$(index);
  };
  protoOf(JsonObjectDescriptor).getElementIndex_2hwbkl_k$ = function (name) {
    return this.$$delegate_0__1.getElementIndex_2hwbkl_k$(name);
  };
  protoOf(JsonObjectDescriptor).getElementName_ykpypc_k$ = function (index) {
    return this.$$delegate_0__1.getElementName_ykpypc_k$(index);
  };
  protoOf(JsonObjectDescriptor).isElementOptional_c3hgb3_k$ = function (index) {
    return this.$$delegate_0__1.isElementOptional_c3hgb3_k$(index);
  };
  protoOf(JsonObjectDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.descriptor_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(JsonObjectSerializer).serialize_wwmfvn_k$ = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).serialize_32qylj_k$(encoder, value);
  };
  protoOf(JsonObjectSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wwmfvn_k$(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).deserialize_2t41fm_k$(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.descriptor_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(JsonPrimitiveSerializer).serialize_b1s4xz_k$ = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.encodeSerializableValue_g55msp_k$(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.encodeSerializableValue_g55msp_k$(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_b1s4xz_k$(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).deserialize_2t41fm_k$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_6lz9ye_k$();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.descriptor_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(JsonNullSerializer).serialize_e8ms6d_k$ = function (encoder, value) {
    verify(encoder);
    encoder.encodeNull_ek2hec_k$();
  };
  protoOf(JsonNullSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_e8ms6d_k$(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    if (decoder.decodeNotNullMark_us4ba1_k$()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.decodeNull_jzrmuj_k$();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(JsonLiteralSerializer).serialize_qqh0j5_k$ = function (encoder, value) {
    verify(encoder);
    if (value.get_isString_zep7bw_k$()) {
      return encoder.encodeString_90sumj_k$(value.get_content_h02jrk_k$());
    }
    if (!(value.get_coerceToInlineType_vv6udq_k$() == null)) {
      return encoder.encodeInline_8gn4q6_k$(value.get_coerceToInlineType_vv6udq_k$()).encodeString_90sumj_k$(value.get_content_h02jrk_k$());
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.encodeLong_rk3ab9_k$(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.get_content_h02jrk_k$());
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.encodeInline_8gn4q6_k$(serializer_0(Companion_getInstance()).get_descriptor_wjt6a0_k$());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.encodeLong_rk3ab9_k$(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.encodeDouble_79ztsb_k$(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.encodeBoolean_6cztl5_k$(tmp3_safe_receiver);
    }
    encoder.encodeString_90sumj_k$(value.get_content_h02jrk_k$());
  };
  protoOf(JsonLiteralSerializer).serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_qqh0j5_k$(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).deserialize_2t41fm_k$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_6lz9ye_k$();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = original$factory();
    tmp$ret$0 = $this.original$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.original$delegate_1 = lazy_0($deferred);
  }
  protoOf(defer$1).get_serialName_u2rqhk_k$ = function () {
    return _get_original__l7ku1m(this).get_serialName_u2rqhk_k$();
  };
  protoOf(defer$1).get_kind_wop7ml_k$ = function () {
    return _get_original__l7ku1m(this).get_kind_wop7ml_k$();
  };
  protoOf(defer$1).get_elementsCount_288r0x_k$ = function () {
    return _get_original__l7ku1m(this).get_elementsCount_288r0x_k$();
  };
  protoOf(defer$1).getElementName_ykpypc_k$ = function (index) {
    return _get_original__l7ku1m(this).getElementName_ykpypc_k$(index);
  };
  protoOf(defer$1).getElementIndex_2hwbkl_k$ = function (name) {
    return _get_original__l7ku1m(this).getElementIndex_2hwbkl_k$(name);
  };
  protoOf(defer$1).getElementAnnotations_a57oar_k$ = function (index) {
    return _get_original__l7ku1m(this).getElementAnnotations_a57oar_k$(index);
  };
  protoOf(defer$1).getElementDescriptor_sqz94k_k$ = function (index) {
    return _get_original__l7ku1m(this).getElementDescriptor_sqz94k_k$(index);
  };
  protoOf(defer$1).isElementOptional_c3hgb3_k$ = function (index) {
    return _get_original__l7ku1m(this).isElementOptional_c3hgb3_k$(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function JsonNamingStrategy$Builtins$SnakeCase$1() {
  }
  protoOf(JsonNamingStrategy$Builtins$SnakeCase$1).serialNameForJson_hcdeen_k$ = function (descriptor, elementIndex, serialName) {
    var tmp$ret$7;
    // Inline function 'kotlin.text.buildString' call
    var tmp1_buildString = imul(serialName.length, 2);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$_0(tmp1_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.<no name provided>.serialNameForJson.<anonymous>' call
    var bufferedChar = null;
    var previousUpperCharsCount = 0;
    // Inline function 'kotlin.text.forEach' call
    var indexedObject = serialName;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.json.<no name provided>.serialNameForJson.<anonymous>.<anonymous>' call
      if (isUpperCase(element)) {
        var tmp;
        var tmp_0;
        if (previousUpperCharsCount === 0) {
          var tmp$ret$0;
          // Inline function 'kotlin.text.isNotEmpty' call
          tmp$ret$0 = charSequenceLength(tmp0_apply) > 0;
          tmp_0 = tmp$ret$0;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = !equals(new Char(last(tmp0_apply)), new Char(_Char___init__impl__6a9atx(95)));
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(95));
        }
        var tmp0_safe_receiver = bufferedChar;
        var tmp_1 = tmp0_safe_receiver;
        if ((tmp_1 == null ? null : new Char(tmp_1)) == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          tmp$ret$1 = tmp0_apply.append_t8oh9e_k$(tmp0_safe_receiver);
        }
        var tmp1 = previousUpperCharsCount;
        previousUpperCharsCount = tmp1 + 1 | 0;
        var tmp$ret$5;
        // Inline function 'kotlin.text.lowercaseChar' call
        var tmp$ret$4;
        // Inline function 'kotlin.text.lowercase' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = toString_0(element);
        tmp$ret$2 = tmp0_asDynamic;
        var tmp1_unsafeCast = tmp$ret$2.toLowerCase();
        tmp$ret$3 = tmp1_unsafeCast;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = charSequenceGet(tmp$ret$4, 0);
        bufferedChar = tmp$ret$5;
      } else {
        var tmp_2 = bufferedChar;
        if (!((tmp_2 == null ? null : new Char(tmp_2)) == null)) {
          if (previousUpperCharsCount > 1 ? isLetter(element) : false) {
            tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(95));
          }
          var tmp_3 = bufferedChar;
          tmp0_apply.append_t8pm91_k$(tmp_3 == null ? null : new Char(tmp_3));
          previousUpperCharsCount = 0;
          bufferedChar = null;
        }
        tmp0_apply.append_t8oh9e_k$(element);
      }
    }
    var tmp_4 = bufferedChar;
    if (!((tmp_4 == null ? null : new Char(tmp_4)) == null)) {
      var tmp_5 = bufferedChar;
      tmp0_apply.append_t8pm91_k$(tmp_5 == null ? null : new Char(tmp_5));
    }
    tmp$ret$6 = tmp0_apply;
    tmp$ret$7 = tmp$ret$6.toString();
    return tmp$ret$7;
  };
  protoOf(JsonNamingStrategy$Builtins$SnakeCase$1).toString = function () {
    return 'kotlinx.serialization.json.JsonNamingStrategy.SnakeCase';
  };
  function Builtins() {
    Builtins_instance = this;
    var tmp = this;
    tmp.SnakeCase_1 = new JsonNamingStrategy$Builtins$SnakeCase$1();
  }
  protoOf(Builtins).get_SnakeCase_rzhe7t_k$ = function () {
    return this.SnakeCase_1;
  };
  var Builtins_instance;
  function Builtins_getInstance() {
    if (Builtins_instance == null)
      new Builtins();
    return Builtins_instance;
  }
  function JsonNamingStrategy() {
  }
  function Composer(writer) {
    this.writer_1 = writer;
    this.writingFirst_1 = true;
  }
  protoOf(Composer).get_writer_lin69o_k$ = function () {
    return this.writer_1;
  };
  protoOf(Composer).set_writingFirst_uixpuw_k$ = function (_set____db54di) {
    this.writingFirst_1 = _set____db54di;
  };
  protoOf(Composer).get_writingFirst_pt5bb1_k$ = function () {
    return this.writingFirst_1;
  };
  protoOf(Composer).indent_cv7m3p_k$ = function () {
    this.writingFirst_1 = true;
  };
  protoOf(Composer).unIndent_456c0k_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).nextItem_403h3p_k$ = function () {
    this.writingFirst_1 = false;
  };
  protoOf(Composer).space_pnmf91_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).print_kq9ffk_k$ = function (v) {
    return this.writer_1.writeChar_g0rcso_k$(v);
  };
  protoOf(Composer).print_mp71d1_k$ = function (v) {
    return this.writer_1.write_wmqgwd_k$(v);
  };
  protoOf(Composer).print_hp9wj4_k$ = function (v) {
    return this.writer_1.write_wmqgwd_k$(v.toString());
  };
  protoOf(Composer).print_xvzbiz_k$ = function (v) {
    return this.writer_1.write_wmqgwd_k$(v.toString());
  };
  protoOf(Composer).print_wuq48e_k$ = function (v) {
    return this.writer_1.writeLong_91l7mc_k$(toLong_0(v));
  };
  protoOf(Composer).print_cg84b4_k$ = function (v) {
    return this.writer_1.writeLong_91l7mc_k$(toLong_0(v));
  };
  protoOf(Composer).print_p8se77_k$ = function (v) {
    return this.writer_1.writeLong_91l7mc_k$(toLong_0(v));
  };
  protoOf(Composer).print_u73at6_k$ = function (v) {
    return this.writer_1.writeLong_91l7mc_k$(v);
  };
  protoOf(Composer).print_8kbg64_k$ = function (v) {
    return this.writer_1.write_wmqgwd_k$(v.toString());
  };
  protoOf(Composer).printQuoted_vsh1i5_k$ = function (value) {
    return this.writer_1.writeQuoted_xlksdn_k$(value);
  };
  function Composer_0(sb, json) {
    return json.get_configuration_uqypjh_k$().get_prettyPrint_y7fmum_k$() ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function _get_forceQuoting__rl6hq5($this) {
    return $this.forceQuoting_1;
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.forceQuoting_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).print_p8se77_k$ = function (v) {
    if (this.forceQuoting_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.printQuoted_vsh1i5_k$(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.print_mp71d1_k$(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).print_u73at6_k$ = function (v) {
    if (this.forceQuoting_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.printQuoted_vsh1i5_k$(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.print_mp71d1_k$(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).print_wuq48e_k$ = function (v) {
    if (this.forceQuoting_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.printQuoted_vsh1i5_k$(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.print_mp71d1_k$(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).print_cg84b4_k$ = function (v) {
    if (this.forceQuoting_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.printQuoted_vsh1i5_k$(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.print_mp71d1_k$(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function _get_forceQuoting__rl6hq5_0($this) {
    return $this.forceQuoting_1;
  }
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.forceQuoting_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).printQuoted_vsh1i5_k$ = function (value) {
    if (this.forceQuoting_1) {
      protoOf(Composer).printQuoted_vsh1i5_k$.call(this, value);
    } else {
      protoOf(Composer).print_mp71d1_k$.call(this, value);
    }
  };
  function _get_json__d8whur($this) {
    return $this.json_1;
  }
  function _set_level__h8xxz5($this, _set____db54di) {
    $this.level_1 = _set____db54di;
  }
  function _get_level__es6iib($this) {
    return $this.level_1;
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.json_1 = json;
    this.level_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).indent_cv7m3p_k$ = function () {
    this.writingFirst_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).unIndent_456c0k_k$ = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).nextItem_403h3p_k$ = function () {
    this.writingFirst_1 = false;
    this.print_mp71d1_k$('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.level_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.print_mp71d1_k$(this.json_1.get_configuration_uqypjh_k$().get_prettyPrintIndent_5z3eey_k$());
      }
       while (inductionVariable < tmp0_repeat);
  };
  protoOf(ComposerWithPrettyPrint).space_pnmf91_k$ = function () {
    this.print_kq9ffk_k$(_Char___init__impl__6a9atx(32));
  };
  function _get_origin__hwq945($this) {
    return $this.origin_1;
  }
  function _set_isUnmarkedNull__eo66w1($this, _set____db54di) {
    $this.isUnmarkedNull_1 = _set____db54di;
  }
  function readIfAbsent($this, descriptor, index) {
    $this.isUnmarkedNull_1 = !descriptor.isElementOptional_c3hgb3_k$(index) ? descriptor.getElementDescriptor_sqz94k_k$(index).get_isNullable_67sy7o_k$() : false;
    return $this.isUnmarkedNull_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.origin_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.isUnmarkedNull_1 = false;
  }
  protoOf(JsonElementMarker).get_isUnmarkedNull_320qrj_k$ = function () {
    return this.isUnmarkedNull_1;
  };
  protoOf(JsonElementMarker).mark_xwbrr1_k$ = function (index) {
    this.origin_1.mark_xwbrr1_k$(index);
  };
  protoOf(JsonElementMarker).nextUnmarkedIndex_u6mxd2_k$ = function () {
    return this.origin_1.nextUnmarkedIndex_u6mxd2_k$();
  };
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.fail$default_dmej3o_k$('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.get_serialName_u2rqhk_k$() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.get_kind_wop7ml_k$() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function InvalidFloatingPointEncoded(value, key, output) {
    return new JsonEncodingException(unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function InvalidFloatingPointEncoded_0(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    return prefix + tmp$ret$1 + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function tryCoerceValue(_this__u8e3s4, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    var tmp;
    if (onEnumCoercing === VOID) {
      tmp = tryCoerceValue$lambda;
    } else {
      tmp = onEnumCoercing;
    }
    onEnumCoercing = tmp;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (!elementDescriptor.get_isNullable_67sy7o_k$() ? peekNull(true) : false)
      return true;
    if (equals(elementDescriptor.get_kind_wop7ml_k$(), ENUM_getInstance())) {
      if (elementDescriptor.get_isNullable_67sy7o_k$() ? peekNull(false) : false) {
        return false;
      }
      var tmp0_elvis_lhs = peekString();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_0;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__u8e3s4, enumValue);
      if (enumIndex === Companion_getInstance_0().get_UNKNOWN_NAME_lj8hxl_k$()) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndex$getJsonNameIndexSlowPath(json, _this__u8e3s4, name);
    var index = _this__u8e3s4.getElementIndex_2hwbkl_k$(name);
    if (!(index === Companion_getInstance_0().get_UNKNOWN_NAME_lj8hxl_k$()))
      return index;
    if (!json.get_configuration_uqypjh_k$().get_useAlternativeNames_c5maqh_k$())
      return index;
    return getJsonNameIndex$getJsonNameIndexSlowPath(json, _this__u8e3s4, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === Companion_getInstance_0().get_UNKNOWN_NAME_lj8hxl_k$())
      throw SerializationException_init_$Create$(_this__u8e3s4.get_serialName_u2rqhk_k$() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.getElementName_ykpypc_k$(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.get_kind_wop7ml_k$(), CLASS_getInstance()) ? json.get_configuration_uqypjh_k$().get_namingStrategy_kue0is_k$() : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.getOrPut_nie706_k$(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.getOrPut_nie706_k$(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var builder = tmp$ret$0;
    var strategy = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp1_filterIsInstance = _this__u8e3s4.getElementAnnotations_a57oar_k$(i);
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp1_filterIsInstance.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
          }
        }
        tmp$ret$1 = tmp0_filterIsInstanceTo;
        tmp$ret$2 = tmp$ret$1;
        var tmp1_safe_receiver = singleOrNull(tmp$ret$2);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_names_ivn21r_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, element_0, i);
          }
        }
        var tmp3_safe_receiver = strategy;
        if (tmp3_safe_receiver == null)
          null;
        else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp3_safe_receiver.serialNameForJson_hcdeen_k$(_this__u8e3s4, i, _this__u8e3s4.getElementName_ykpypc_k$(i)), i);
          tmp$ret$3 = Unit_getInstance();
        }
      }
       while (inductionVariable < last);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (builder.isEmpty_y1axqb_k$()) {
      var tmp$ret$4;
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp$ret$4 = emptyMap();
      tmp = tmp$ret$4;
    } else {
      tmp = builder;
    }
    tmp$ret$5 = tmp;
    return tmp$ret$5;
  }
  function getJsonNameIndex$getJsonNameIndexSlowPath($json, $this_getJsonNameIndex, $name) {
    var tmp0_elvis_lhs = deserializationNamesMap($json, $this_getJsonNameIndex).get_1mhr4y_k$($name);
    return tmp0_elvis_lhs == null ? Companion_getInstance_0().get_UNKNOWN_NAME_lj8hxl_k$() : tmp0_elvis_lhs;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).containsKey_wgk31w_k$(name);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildDeserializationNamesMap.getElementName_ykpypc_k$(index) + ' is already one of the names for property ' + ($this_buildDeserializationNamesMap.getElementName_ykpypc_k$(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.put_3mhbri_k$(name, index);
  }
  function tryCoerceValue$lambda() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return Unit_getInstance();
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.get_elementsCount_288r0x_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
      var tmp_1 = tmp$ret$0;
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.serializationNamesIndices.<anonymous>.<anonymous>' call
        var baseName = $this_serializationNamesIndices.getElementName_ykpypc_k$(tmp_2);
        tmp$ret$1 = $strategy.serialNameForJson_hcdeen_k$($this_serializationNamesIndices, tmp_2, baseName);
        tmp_1[tmp_2] = tmp$ret$1;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function _set_currentObjectPath__tmh5hk($this, _set____db54di) {
    $this.currentObjectPath_1 = _set____db54di;
  }
  function _get_currentObjectPath__7wo978($this) {
    return $this.currentObjectPath_1;
  }
  function _set_indicies__pjdcbd($this, _set____db54di) {
    $this.indicies_1 = _set____db54di;
  }
  function _get_indicies__cqh0ul($this) {
    return $this.indicies_1;
  }
  function _set_currentDepth__9x14gd($this, _set____db54di) {
    $this.currentDepth_1 = _set____db54di;
  }
  function _get_currentDepth__pgrv0h($this) {
    return $this.currentDepth_1;
  }
  function prettyString($this, it) {
    var tmp0_safe_receiver = (!(it == null) ? isInterface(it, SerialDescriptor) : false) ? it : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_serialName_u2rqhk_k$();
    return tmp1_elvis_lhs == null ? toString_1(it) : tmp1_elvis_lhs;
  }
  function resize($this) {
    var newSize = imul($this.currentDepth_1, 2);
    $this.currentObjectPath_1 = copyOf($this.currentObjectPath_1, newSize);
    $this.indicies_1 = copyOf_0($this.indicies_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(8), null);
    tmp.currentObjectPath_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonPath.indicies.<anonymous>' call
      tmp$ret$1 = -1;
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.indicies_1 = tmp_3;
    this.currentDepth_1 = -1;
  }
  protoOf(JsonPath).pushDescriptor_yqld09_k$ = function (sd) {
    var tmp0_this = this;
    tmp0_this.currentDepth_1 = tmp0_this.currentDepth_1 + 1 | 0;
    var depth = tmp0_this.currentDepth_1;
    if (depth === this.currentObjectPath_1.length) {
      resize(this);
    }
    this.currentObjectPath_1[depth] = sd;
  };
  protoOf(JsonPath).updateDescriptorIndex_64kjsa_k$ = function (index) {
    this.indicies_1[this.currentDepth_1] = index;
  };
  protoOf(JsonPath).updateCurrentMapKey_rvnz6l_k$ = function (key) {
    var tmp;
    if (!(this.indicies_1[this.currentDepth_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.currentDepth_1 = tmp0_this.currentDepth_1 + 1 | 0;
      tmp = tmp0_this.currentDepth_1 === this.currentObjectPath_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.currentObjectPath_1[this.currentDepth_1] = key;
    this.indicies_1[this.currentDepth_1] = -2;
  };
  protoOf(JsonPath).resetCurrentMapKey_1lk2sk_k$ = function () {
    if (this.indicies_1[this.currentDepth_1] === -2) {
      this.currentObjectPath_1[this.currentDepth_1] = Tombstone_getInstance();
    }
  };
  protoOf(JsonPath).popDescriptor_wfdf7z_k$ = function () {
    var depth = this.currentDepth_1;
    if (this.indicies_1[depth] === -2) {
      this.indicies_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentDepth_1;
      tmp0_this.currentDepth_1 = tmp1 - 1 | 0;
    }
    if (!(this.currentDepth_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.currentDepth_1;
      tmp2_this.currentDepth_1 = tmp3 - 1 | 0;
    }
  };
  protoOf(JsonPath).getPath_18su3p_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.append_ssq29y_k$('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.currentDepth_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.currentObjectPath_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.get_kind_wop7ml_k$(), LIST_getInstance())) {
            if (!(this.indicies_1[index] === -1)) {
              tmp0_apply.append_ssq29y_k$('[');
              tmp0_apply.append_t8pm91_k$(this.indicies_1[index]);
              tmp0_apply.append_ssq29y_k$(']');
            }
          } else {
            var idx = this.indicies_1[index];
            if (idx >= 0) {
              tmp0_apply.append_ssq29y_k$('.');
              tmp0_apply.append_ssq29y_k$(element.getElementName_ykpypc_k$(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.append_ssq29y_k$('[');
            tmp0_apply.append_ssq29y_k$("'");
            tmp0_apply.append_t8pm91_k$(element);
            tmp0_apply.append_ssq29y_k$("'");
            tmp0_apply.append_ssq29y_k$(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  protoOf(JsonPath).toString = function () {
    return this.getPath_18su3p_k$();
  };
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.encodeSerializableValue_g55msp_k$(serializer, value);
  }
  function JsonWriter() {
  }
  function _get_lexer__es58e3($this) {
    return $this.lexer_1;
  }
  function _get_isLenient__2p6q64($this) {
    return $this.isLenient_1;
  }
  function _set_stackDepth__ki8ycc($this, _set____db54di) {
    $this.stackDepth_1 = _set____db54di;
  }
  function _get_stackDepth__5g0d74($this) {
    return $this.stackDepth_1;
  }
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_BEGIN_OBJ());
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
      $this.lexer_1.fail$default_dmej3o_k$('Unexpected leading comma');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      var key = $this.isLenient_1 ? $this.lexer_1.consumeStringLenient_9oypvu_k$() : $this.lexer_1.consumeString_j3j2z7_k$();
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.read_22xsm_k$();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.put_3mhbri_k$(key, element);
      lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.lexer_1.fail$default_dmej3o_k$('Expected end of the object or comma');
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.lexer_1.fail$default_dmej3o_k$('Unexpected trailing comma');
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function readObjectImpl($this, reader) {
    var lastToken = $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_BEGIN_OBJ());
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
      $this.lexer_1.fail$default_dmej3o_k$('Unexpected leading comma');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      var key = $this.isLenient_1 ? $this.lexer_1.consumeStringLenient_9oypvu_k$() : $this.lexer_1.consumeString_j3j2z7_k$();
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_COLON());
      var element = reader();
      // Inline function 'kotlin.collections.set' call
      result.put_3mhbri_k$(key, element);
      lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.lexer_1.fail$default_dmej3o_k$('Expected end of the object or comma');
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.lexer_1.fail$default_dmej3o_k$('Unexpected trailing comma');
    }
    return new JsonObject(result);
  }
  function readArray($this) {
    var lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
      $this.lexer_1.fail$default_dmej3o_k$('Unexpected leading comma');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      var element = $this.read_22xsm_k$();
      result.add_1j60pz_k$(element);
      lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.lexer_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.get_currentPosition_ic997d_k$();
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          tmp0_require.fail$default_dmej3o_k$(tmp$ret$1, tmp2_require);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.lexer_1.fail$default_dmej3o_k$('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.isLenient_1 ? true : !isString) {
      tmp = $this.lexer_1.consumeStringLenient_9oypvu_k$();
    } else {
      tmp = $this.lexer_1.consumeString_j3j2z7_k$();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).invoke_3bmcpd_k$ = function ($this$$receiver, it, $completion) {
    var tmp = this.create_mx6x0i_k$($this$$receiver, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.invoke_3bmcpd_k$(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.tmp0_subject0__1 = this.this$0__1.lexer_1.peekNextToken_1gqwr9_k$();
            if (this.tmp0_subject0__1 === get_TC_STRING()) {
              this.WHEN_RESULT1__1 = readValue(this.this$0__1, true);
              this.set_state_a96kl8_k$(2);
              continue $sm;
            } else {
              if (this.tmp0_subject0__1 === get_TC_OTHER()) {
                this.WHEN_RESULT1__1 = readValue(this.this$0__1, false);
                this.set_state_a96kl8_k$(2);
                continue $sm;
              } else {
                if (this.tmp0_subject0__1 === get_TC_BEGIN_OBJ()) {
                  this.set_state_a96kl8_k$(1);
                  suspendResult = readObject_0(this.$this$$receiver_1, this.this$0__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.tmp0_subject0__1 === get_TC_BEGIN_LIST()) {
                    this.WHEN_RESULT1__1 = readArray(this.this$0__1);
                    this.set_state_a96kl8_k$(2);
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.this$0__1.lexer_1.fail$default_dmej3o_k$("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            return this.WHEN_RESULT1__1;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).create_mx6x0i_k$ = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.this$0__1, completion);
    i.$this$$receiver_1 = $this$$receiver;
    i.it_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.invoke_3bmcpd_k$($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.lastToken0__1 = this._this__u8e3s4__1.lexer_1.consumeNextToken_trhodc_k$(get_TC_BEGIN_OBJ());
            if (this._this__u8e3s4__1.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
              this._this__u8e3s4__1.lexer_1.fail$default_dmej3o_k$('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.result1__1 = LinkedHashMap_init_$Create$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!this._this__u8e3s4__1.lexer_1.canConsumeValue_oljqd7_k$()) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.key2__1 = this._this__u8e3s4__1.isLenient_1 ? this._this__u8e3s4__1.lexer_1.consumeStringLenient_9oypvu_k$() : this._this__u8e3s4__1.lexer_1.consumeString_j3j2z7_k$();
            this._this__u8e3s4__1.lexer_1.consumeNextToken_trhodc_k$(get_TC_COLON());
            ;
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__2.callRecursive_6euk1h_k$(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.result1__1.put_3mhbri_k$(this.key2__1, element);
            ;
            this.lastToken0__1 = this._this__u8e3s4__1.lexer_1.consumeNextToken_uf1vsa_k$();
            var tmp0_subject = this.lastToken0__1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.set_state_a96kl8_k$(4);
                continue $sm;
              } else {
                this._this__u8e3s4__1.lexer_1.fail$default_dmej3o_k$('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            if (this.lastToken0__1 === get_TC_BEGIN_OBJ()) {
              this._this__u8e3s4__1.lexer_1.consumeNextToken_trhodc_k$(get_TC_END_OBJ());
            } else if (this.lastToken0__1 === get_TC_COMMA()) {
              this._this__u8e3s4__1.lexer_1.fail$default_dmej3o_k$('Unexpected trailing comma');
            }

            return new JsonObject(this.result1__1);
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.lexer_1 = lexer;
    this.isLenient_1 = configuration.get_isLenient_1g1x8_k$();
    this.stackDepth_1 = 0;
  }
  protoOf(JsonTreeReader).read_22xsm_k$ = function () {
    var token = this.lexer_1.peekNextToken_1gqwr9_k$();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.stackDepth_1 = tmp0_this.stackDepth_1 + 1 | 0;
      if (tmp0_this.stackDepth_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.stackDepth_1 = tmp1_this.stackDepth_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.lexer_1.fail$default_dmej3o_k$('Cannot begin reading element, unexpected token: ' + token);
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.get_annotations_20dirp_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var annotation = tmp0_iterator.next_20eer_k$();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.get_discriminator_wfz2j1_k$();
    }
    return json.get_configuration_uqypjh_k$().get_classDiscriminator_x3y365_k$();
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.get_json_woos35_k$().get_configuration_uqypjh_k$().get_useArrayPolymorphism_teidaa_k$();
    }
    if (tmp) {
      return deserializer.deserialize_2t41fm_k$(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.get_descriptor_wjt6a0_k$(), _this__u8e3s4.get_json_woos35_k$());
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.decodeJsonElement_6lz9ye_k$();
    var tmp1_cast = deserializer.get_descriptor_wjt6a0_k$();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.get_4u8u51_k$(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
    var tmp2_elvis_lhs = deserializer.findPolymorphicSerializerOrNull_e7t5h9_k$(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.get_json_woos35_k$();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.get_json_woos35_k$().get_configuration_uqypjh_k$().get_useArrayPolymorphism_teidaa_k$();
    }
    if (tmp) {
      serializer.serialize_32qylj_k$(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.get_descriptor_wjt6a0_k$(), _this__u8e3s4.get_json_woos35_k$());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.serialize_32qylj_k$(_this__u8e3s4, value);
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.get_descriptor_wjt6a0_k$()).contains_2ehdt1_k$(classDiscriminator)) {
      var baseName = serializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      var actualName = actualSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function _get_useArrayPolymorphism__kxw5q($this) {
    return $this.useArrayPolymorphism_1;
  }
  function _get_discriminator__z1a3lh($this) {
    return $this.discriminator_1;
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.get_kind_wop7ml_k$();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.get_simpleName_r6f8py_k$() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.useArrayPolymorphism_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.get_simpleName_r6f8py_k$() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.getElementName_ykpypc_k$(i);
        if (name === $this.discriminator_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.useArrayPolymorphism_1 = useArrayPolymorphism;
    this.discriminator_1 = discriminator;
  }
  protoOf(PolymorphismValidator).contextual_oi2m58_k$ = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).polymorphic_sbh4xj_k$ = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.get_descriptor_wjt6a0_k$();
    checkKind_0(this, descriptor, actualClass);
    if (!this.useArrayPolymorphism_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).polymorphicDefaultSerializer_g5ty2r_k$ = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).polymorphicDefaultDeserializer_vtblm7_k$ = function (baseClass, defaultDeserializerProvider) {
  };
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.map_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).set_rrqmqe_k$ = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.map_1;
    var value_0 = tmp0_getOrPut.get_1mhr4y_k$(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(2);
      var answer = tmp$ret$0;
      tmp0_getOrPut.put_3mhbri_k$(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.put_3mhbri_k$(tmp2_set, tmp3_set);
  };
  protoOf(DescriptorSchemaCache).getOrPut_nie706_k$ = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.get_kuyzdy_k$(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.set_rrqmqe_k$(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).get_kuyzdy_k$ = function (descriptor, key) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.get_1mhr4y_k$(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  function _get_mode__dah3bc($this) {
    return $this.mode_1;
  }
  function DiscriminatorHolder(discriminatorToSkip) {
    this.discriminatorToSkip_1 = discriminatorToSkip;
  }
  protoOf(DiscriminatorHolder).set_discriminatorToSkip_5dl0ju_k$ = function (_set____db54di) {
    this.discriminatorToSkip_1 = _set____db54di;
  };
  protoOf(DiscriminatorHolder).get_discriminatorToSkip_kn0fl9_k$ = function () {
    return this.discriminatorToSkip_1;
  };
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.discriminatorToSkip_1 === unknownKey) {
      _this__u8e3s4.discriminatorToSkip_1 = null;
      return true;
    }
    return false;
  }
  function _set_currentIndex__cezf6m($this, _set____db54di) {
    $this.currentIndex_1 = _set____db54di;
  }
  function _get_currentIndex__ryq5qq($this) {
    return $this.currentIndex_1;
  }
  function _set_discriminatorHolder__9fc1gj($this, _set____db54di) {
    $this.discriminatorHolder_1 = _set____db54di;
  }
  function _get_discriminatorHolder__3ve7ft($this) {
    return $this.discriminatorHolder_1;
  }
  function _get_configuration__557qfv($this) {
    return $this.configuration_1;
  }
  function _get_elementMarker__200cvv($this) {
    return $this.elementMarker_1;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.decodeElementIndex_nk5a2l_k$(descriptor) === Companion_getInstance_0().get_DECODE_DONE_1b8fna_k$())) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
      $this.lexer_1.fail$default_dmej3o_k$('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.currentIndex_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.currentIndex_1 === -1)) {
        hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
      }
    } else {
      $this.lexer_1.consumeNextToken_ev7fkz_k$(get_COLON());
    }
    var tmp;
    if ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      if (decodingKey) {
        if ($this.currentIndex_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.lexer_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.get_currentPosition_ic997d_k$();
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            tmp0_require.fail$default_dmej3o_k$(tmp$ret$0, tmp2_require);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.lexer_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.get_currentPosition_ic997d_k$();
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3_require.fail$default_dmej3o_k$(tmp$ret$1, tmp5_require);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    } else {
      if (hasComma) {
        $this.lexer_1.fail$default_dmej3o_k$("Expected '}', but had ',' instead");
      }
      tmp = Companion_getInstance_0().get_DECODE_DONE_1b8fna_k$();
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.json_1;
      var tmp1_tryCoerceValue = descriptor.getElementDescriptor_sqz94k_k$(index);
      var tmp;
      if (!tmp1_tryCoerceValue.get_isNullable_67sy7o_k$()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = $this.lexer_1.tryConsumeNull_c55xgu_k$(true);
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(tmp1_tryCoerceValue.get_kind_wop7ml_k$(), ENUM_getInstance())) {
        var tmp_0;
        if (tmp1_tryCoerceValue.get_isNullable_67sy7o_k$()) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp$ret$2 = $this.lexer_1.tryConsumeNull_c55xgu_k$(false);
          tmp_0 = tmp$ret$2;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$3 = $this.lexer_1.peekString_9klnyq_k$($this.configuration_1.get_isLenient_1g1x8_k$());
        var tmp0_elvis_lhs = tmp$ret$3;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        if (enumIndex === Companion_getInstance_0().get_UNKNOWN_NAME_lj8hxl_k$()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.lexer_1.consumeString_j3j2z7_k$();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
    while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.lexer_1.consumeNextToken_ev7fkz_k$(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.json_1, key);
      var tmp;
      if (!(index === Companion_getInstance_0().get_UNKNOWN_NAME_lj8hxl_k$())) {
        var tmp_0;
        if ($this.configuration_1.get_coerceInputValues_gdasvc_k$() ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.elementMarker_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.mark_xwbrr1_k$(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.lexer_1.fail$default_dmej3o_k$('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.elementMarker_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.nextUnmarkedIndex_u6mxd2_k$();
    return tmp2_elvis_lhs == null ? Companion_getInstance_0().get_DECODE_DONE_1b8fna_k$() : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.configuration_1.get_ignoreUnknownKeys_kvp19_k$() ? true : trySkip($this.discriminatorHolder_1, $this, key)) {
      $this.lexer_1.skipElement_wcp1ak_k$($this.configuration_1.get_isLenient_1g1x8_k$());
    } else {
      $this.lexer_1.failOnUnknownKey_6lfa5c_k$(key);
    }
    return $this.lexer_1.tryConsumeComma_9n2ve4_k$();
  }
  function decodeListIndex($this) {
    var hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
    var tmp;
    if ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      if (!($this.currentIndex_1 === -1) ? !hasComma : false) {
        $this.lexer_1.fail$default_dmej3o_k$('Expected end of the array or comma');
      }
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    } else {
      if (hasComma) {
        $this.lexer_1.fail$default_dmej3o_k$('Unexpected trailing comma');
      }
      tmp = Companion_getInstance_0().get_DECODE_DONE_1b8fna_k$();
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.configuration_1.get_isLenient_1g1x8_k$()) {
      tmp = $this.lexer_1.consumeStringLenientNotNull_m2rgts_k$();
    } else {
      tmp = $this.lexer_1.consumeKeyString_mfa3ws_k$();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.json_1 = json;
    this.mode_1 = mode;
    this.lexer_1 = lexer;
    this.serializersModule_1 = this.json_1.get_serializersModule_piitvg_k$();
    this.currentIndex_1 = -1;
    this.discriminatorHolder_1 = discriminatorHolder;
    this.configuration_1 = this.json_1.get_configuration_uqypjh_k$();
    this.elementMarker_1 = this.configuration_1.get_explicitNulls_ppiuof_k$() ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).get_json_woos35_k$ = function () {
    return this.json_1;
  };
  protoOf(StreamingJsonDecoder).get_lexer_ium8yr_k$ = function () {
    return this.lexer_1;
  };
  protoOf(StreamingJsonDecoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(StreamingJsonDecoder).decodeJsonElement_6lz9ye_k$ = function () {
    return (new JsonTreeReader(this.json_1.get_configuration_uqypjh_k$(), this.lexer_1)).read_22xsm_k$();
  };
  protoOf(StreamingJsonDecoder).decodeSerializableValue_6v83lo_k$ = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.json_1.get_configuration_uqypjh_k$().get_useArrayPolymorphism_teidaa_k$();
      }
      if (tmp) {
        return deserializer.deserialize_2t41fm_k$(this);
      }
      var discriminator = classDiscriminator(deserializer.get_descriptor_wjt6a0_k$(), this.json_1);
      var type = this.lexer_1.consumeLeadingMatchingValue_hqrr8x_k$(discriminator, this.configuration_1.get_isLenient_1g1x8_k$());
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.findPolymorphicSerializerOrNull_e7t5h9_k$(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.discriminatorHolder_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.deserialize_2t41fm_k$(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        throw new MissingFieldException(e.get_missingFields_wryzxm_k$(), plus(e.message, ' at path: ') + this.lexer_1.get_path_wos8ry_k$().getPath_18su3p_k$(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).beginStructure_dv3yt3_k$ = function (descriptor) {
    var newMode = switchMode(this.json_1, descriptor);
    this.lexer_1.get_path_wos8ry_k$().pushDescriptor_yqld09_k$(descriptor);
    this.lexer_1.consumeNextToken_ev7fkz_k$(newMode.get_begin_15e7lr_k$());
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.json_1, newMode, this.lexer_1, descriptor, this.discriminatorHolder_1);
        break;
      default:
        var tmp_0;
        if (this.mode_1.equals(newMode) ? this.json_1.get_configuration_uqypjh_k$().get_explicitNulls_ppiuof_k$() : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.json_1, newMode, this.lexer_1, descriptor, this.discriminatorHolder_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).endStructure_e64gd4_k$ = function (descriptor) {
    if (this.json_1.get_configuration_uqypjh_k$().get_ignoreUnknownKeys_kvp19_k$() ? descriptor.get_elementsCount_288r0x_k$() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.lexer_1.consumeNextToken_ev7fkz_k$(this.mode_1.get_end_l5tfxv_k$());
    this.lexer_1.get_path_wos8ry_k$().popDescriptor_wfdf7z_k$();
  };
  protoOf(StreamingJsonDecoder).decodeNotNullMark_us4ba1_k$ = function () {
    var tmp;
    var tmp0_safe_receiver = this.elementMarker_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isUnmarkedNull_320qrj_k$();
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.lexer_1.tryConsumeNull$default_wv86xa_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).decodeSerializableElement_nrfur_k$ = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.mode_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.lexer_1.get_path_wos8ry_k$().resetCurrentMapKey_1lk2sk_k$();
    }
    var value = protoOf(AbstractDecoder).decodeSerializableElement_nrfur_k$.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.lexer_1.get_path_wos8ry_k$().updateCurrentMapKey_rvnz6l_k$(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var tmp0_subject = this.mode_1;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.mode_1.equals(WriteMode_MAP_getInstance())) {
      this.lexer_1.get_path_wos8ry_k$().updateDescriptorIndex_64kjsa_k$(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).decodeBoolean_m0aca_k$ = function () {
    var tmp;
    if (this.configuration_1.get_isLenient_1g1x8_k$()) {
      tmp = this.lexer_1.consumeBooleanLenient_iqeqb9_k$();
    } else {
      tmp = this.lexer_1.consumeBoolean_8eci30_k$();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).decodeByte_jzz7je_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toByte_edm0nx_k$()))) {
      this.lexer_1.fail$default_dmej3o_k$("Failed to parse byte for input '" + toString(value) + "'");
    }
    return value.toByte_edm0nx_k$();
  };
  protoOf(StreamingJsonDecoder).decodeShort_jjqk32_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toShort_ja8oqn_k$()))) {
      this.lexer_1.fail$default_dmej3o_k$("Failed to parse short for input '" + toString(value) + "'");
    }
    return value.toShort_ja8oqn_k$();
  };
  protoOf(StreamingJsonDecoder).decodeInt_8iq8f5_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toInt_1tsl84_k$()))) {
      this.lexer_1.fail$default_dmej3o_k$("Failed to parse int for input '" + toString(value) + "'");
    }
    return value.toInt_1tsl84_k$();
  };
  protoOf(StreamingJsonDecoder).decodeLong_jzt186_k$ = function () {
    return this.lexer_1.consumeNumericLiteral_rdea66_k$();
  };
  protoOf(StreamingJsonDecoder).decodeFloat_jcnrwu_k$ = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(input);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.fail$default_dmej3o_k$("Failed to parse type 'float' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.json_1.get_configuration_uqypjh_k$().get_allowSpecialFloatingPointValues_1eu5hp_k$();
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.lexer_1, result);
  };
  protoOf(StreamingJsonDecoder).decodeDouble_ur8l0f_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.fail$default_dmej3o_k$("Failed to parse type 'double' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.json_1.get_configuration_uqypjh_k$().get_allowSpecialFloatingPointValues_1eu5hp_k$();
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.lexer_1, result);
  };
  protoOf(StreamingJsonDecoder).decodeChar_dc2jtx_k$ = function () {
    var string = this.lexer_1.consumeStringLenient_9oypvu_k$();
    if (!(string.length === 1)) {
      this.lexer_1.fail$default_dmej3o_k$("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).decodeString_x3hxsx_k$ = function () {
    var tmp;
    if (this.configuration_1.get_isLenient_1g1x8_k$()) {
      tmp = this.lexer_1.consumeStringLenientNotNull_m2rgts_k$();
    } else {
      tmp = this.lexer_1.consumeString_j3j2z7_k$();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).decodeStringChunked_1l4r2w_k$ = function (consumeChunk) {
    this.lexer_1.consumeStringChunked_s44ekq_k$(this.configuration_1.get_isLenient_1g1x8_k$(), consumeChunk);
  };
  protoOf(StreamingJsonDecoder).decodeInline_k1q7ba_k$ = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.lexer_1, this.json_1) : protoOf(AbstractDecoder).decodeInline_k1q7ba_k$.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.json_1, this.decodeString_x3hxsx_k$(), ' at path ' + this.lexer_1.get_path_wos8ry_k$().getPath_18su3p_k$());
  };
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.consumeStringLenient_9oypvu_k$();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        _this__u8e3s4.fail$default_dmej3o_k$("Failed to parse type '" + expectedType + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  function _get_lexer__es58e3_0($this) {
    return $this.lexer_1;
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.lexer_1 = lexer;
    this.serializersModule_1 = json.get_serializersModule_piitvg_k$();
  }
  protoOf(JsonDecoderForUnsignedTypes).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(JsonDecoderForUnsignedTypes).decodeInt_8iq8f5_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.fail$default_dmej3o_k$("Failed to parse type 'UInt' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).decodeLong_jzt186_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.fail$default_dmej3o_k$("Failed to parse type 'ULong' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).decodeByte_jzz7je_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.fail$default_dmej3o_k$("Failed to parse type 'UByte' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).decodeShort_jjqk32_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.fail$default_dmej3o_k$("Failed to parse type 'UShort' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function _get_composer__1cv6i3($this) {
    return $this.composer_1;
  }
  function _get_mode__dah3bc_0($this) {
    return $this.mode_1;
  }
  function _get_modeReuseCache__1wg056($this) {
    return $this.modeReuseCache_1;
  }
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function _get_configuration__557qfv_0($this) {
    return $this.configuration_1;
  }
  function _set_forceQuoting__c1fr61($this, _set____db54di) {
    $this.forceQuoting_1 = _set____db54di;
  }
  function _get_forceQuoting__rl6hq5_1($this) {
    return $this.forceQuoting_1;
  }
  function _set_polymorphicDiscriminator__uwj3yn($this, _set____db54di) {
    $this.polymorphicDiscriminator_1 = _set____db54di;
  }
  function _get_polymorphicDiscriminator__qe5wbf($this) {
    return $this.polymorphicDiscriminator_1;
  }
  function encodeTypeInfo($this, descriptor) {
    $this.composer_1.nextItem_403h3p_k$();
    $this.encodeString_90sumj_k$(ensureNotNull($this.polymorphicDiscriminator_1));
    $this.composer_1.print_kq9ffk_k$(get_COLON());
    $this.composer_1.space_pnmf91_k$();
    $this.encodeString_90sumj_k$(descriptor.get_serialName_u2rqhk_k$());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.composer_1 = composer;
    this.json_1 = json;
    this.mode_1 = mode;
    this.modeReuseCache_1 = modeReuseCache;
    this.serializersModule_1 = this.json_1.get_serializersModule_piitvg_k$();
    this.configuration_1 = this.json_1.get_configuration_uqypjh_k$();
    this.forceQuoting_1 = false;
    this.polymorphicDiscriminator_1 = null;
    var i = this.mode_1.get_ordinal_ip24qg_k$();
    if (!(this.modeReuseCache_1 == null)) {
      if (!(this.modeReuseCache_1[i] === null) ? true : !(this.modeReuseCache_1[i] === this)) {
        this.modeReuseCache_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).get_json_woos35_k$ = function () {
    return this.json_1;
  };
  protoOf(StreamingJsonEncoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(StreamingJsonEncoder).encodeJsonElement_javf71_k$ = function (element) {
    this.encodeSerializableValue_g55msp_k$(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).shouldEncodeElementDefault_m92hrm_k$ = function (descriptor, index) {
    return this.configuration_1.get_encodeDefaults_m8plkf_k$();
  };
  protoOf(StreamingJsonEncoder).encodeSerializableValue_g55msp_k$ = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.get_json_woos35_k$().get_configuration_uqypjh_k$().get_useArrayPolymorphism_teidaa_k$();
      }
      if (tmp) {
        serializer.serialize_32qylj_k$(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.get_descriptor_wjt6a0_k$(), this.get_json_woos35_k$());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.polymorphicDiscriminator_1 = baseClassDiscriminator;
      actualSerializer.serialize_32qylj_k$(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).beginStructure_dv3yt3_k$ = function (descriptor) {
    var newMode = switchMode(this.json_1, descriptor);
    if (!equals(new Char(newMode.get_begin_15e7lr_k$()), new Char(get_INVALID()))) {
      this.composer_1.print_kq9ffk_k$(newMode.get_begin_15e7lr_k$());
      this.composer_1.indent_cv7m3p_k$();
    }
    if (!(this.polymorphicDiscriminator_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.polymorphicDiscriminator_1 = null;
    }
    if (this.mode_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.modeReuseCache_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.get_ordinal_ip24qg_k$()];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.composer_1, this.json_1, newMode, this.modeReuseCache_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).endStructure_e64gd4_k$ = function (descriptor) {
    if (!equals(new Char(this.mode_1.get_end_l5tfxv_k$()), new Char(get_INVALID()))) {
      this.composer_1.unIndent_456c0k_k$();
      this.composer_1.nextItem_403h3p_k$();
      this.composer_1.print_kq9ffk_k$(this.mode_1.get_end_l5tfxv_k$());
    }
  };
  protoOf(StreamingJsonEncoder).encodeElement_gaiom2_k$ = function (descriptor, index) {
    var tmp0_subject = this.mode_1;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    switch (tmp0) {
      case 1:
        if (!this.composer_1.get_writingFirst_pt5bb1_k$()) {
          this.composer_1.print_kq9ffk_k$(get_COMMA());
        }

        this.composer_1.nextItem_403h3p_k$();
        ;
        break;
      case 2:
        if (!this.composer_1.get_writingFirst_pt5bb1_k$()) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.composer_1.print_kq9ffk_k$(get_COMMA());
            this.composer_1.nextItem_403h3p_k$();
            tmp_0 = true;
          } else {
            this.composer_1.print_kq9ffk_k$(get_COLON());
            this.composer_1.space_pnmf91_k$();
            tmp_0 = false;
          }
          tmp.forceQuoting_1 = tmp_0;
        } else {
          this.forceQuoting_1 = true;
          this.composer_1.nextItem_403h3p_k$();
        }

        break;
      case 3:
        if (index === 0)
          this.forceQuoting_1 = true;
        if (index === 1) {
          this.composer_1.print_kq9ffk_k$(get_COMMA());
          this.composer_1.space_pnmf91_k$();
          this.forceQuoting_1 = false;
        }

        break;
      default:
        if (!this.composer_1.get_writingFirst_pt5bb1_k$()) {
          this.composer_1.print_kq9ffk_k$(get_COMMA());
        }

        this.composer_1.nextItem_403h3p_k$();
        this.encodeString_90sumj_k$(getJsonElementName(descriptor, this.json_1, index));
        this.composer_1.print_kq9ffk_k$(get_COLON());
        this.composer_1.space_pnmf91_k$();
        ;
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).encodeNullableSerializableElement_j50jzb_k$ = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.configuration_1.get_explicitNulls_ppiuof_k$()) {
      protoOf(AbstractEncoder).encodeNullableSerializableElement_j50jzb_k$.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).encodeInline_8gn4q6_k$ = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.composer_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.composer_1;
      } else {
        tmp_0 = new ComposerForUnsignedNumbers(this.composer_1.get_writer_lin69o_k$(), this.forceQuoting_1);
      }
      tmp$ret$0 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$0, this.json_1, this.mode_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.composer_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.composer_1;
      } else {
        tmp_2 = new ComposerForUnquotedLiterals(this.composer_1.get_writer_lin69o_k$(), this.forceQuoting_1);
      }
      tmp$ret$1 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.json_1, this.mode_1, null);
    } else {
      tmp = protoOf(AbstractEncoder).encodeInline_8gn4q6_k$.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).encodeNull_ek2hec_k$ = function () {
    this.composer_1.print_mp71d1_k$(get_NULL());
  };
  protoOf(StreamingJsonEncoder).encodeBoolean_6cztl5_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_8kbg64_k$(value);
    }
  };
  protoOf(StreamingJsonEncoder).encodeByte_gpyndp_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_wuq48e_k$(value);
    }
  };
  protoOf(StreamingJsonEncoder).encodeShort_rh3vxz_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_cg84b4_k$(value);
    }
  };
  protoOf(StreamingJsonEncoder).encodeInt_5vxmon_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_p8se77_k$(value);
    }
  };
  protoOf(StreamingJsonEncoder).encodeLong_rk3ab9_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_u73at6_k$(value);
    }
  };
  protoOf(StreamingJsonEncoder).encodeFloat_f5fde1_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_hp9wj4_k$(value);
    }
    if (!this.configuration_1.get_allowSpecialFloatingPointValues_1eu5hp_k$() ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.composer_1.get_writer_lin69o_k$()));
    }
  };
  protoOf(StreamingJsonEncoder).encodeDouble_79ztsb_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_xvzbiz_k$(value);
    }
    if (!this.configuration_1.get_allowSpecialFloatingPointValues_1eu5hp_k$() ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.composer_1.get_writer_lin69o_k$()));
    }
  };
  protoOf(StreamingJsonEncoder).encodeChar_kkx54x_k$ = function (value) {
    this.encodeString_90sumj_k$(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).encodeString_90sumj_k$ = function (value) {
    return this.composer_1.printQuoted_vsh1i5_k$(value);
  };
  protoOf(StreamingJsonEncoder).encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    this.encodeString_90sumj_k$(enumDescriptor.getElementName_ykpypc_k$(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.get_isInline_usk17w_k$() ? get_unsignedNumberDescriptors().contains_2ehdt1_k$(_this__u8e3s4) : false;
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.get_isInline_usk17w_k$() ? equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor()) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).get_descriptor_wjt6a0_k$(), serializer_0(Companion_getInstance()).get_descriptor_wjt6a0_k$(), serializer_2(Companion_getInstance_2()).get_descriptor_wjt6a0_k$(), serializer_3(Companion_getInstance_3()).get_descriptor_wjt6a0_k$()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  function get_ESCAPE_MARKERS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_MARKERS;
  }
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 97;
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.append_t8oh9e_k$(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(value, i);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.append_tbojcw_k$(value, lastPos, i);
          _this__u8e3s4.append_ssq29y_k$(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.append_tbojcw_k$(value, lastPos, value.length);
    } else {
      _this__u8e3s4.append_ssq29y_k$(value);
    }
    _this__u8e3s4.append_t8oh9e_k$(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(93), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$0_0;
      // Inline function 'kotlin.code' call
      tmp$ret$0_0 = 34;
      var tmp = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'kotlin.code' call
      tmp$ret$1_0 = 34;
      tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
      var tmp$ret$2_0;
      // Inline function 'kotlin.code' call
      tmp$ret$2_0 = 92;
      var tmp_0 = tmp$ret$2_0;
      var tmp$ret$3_0;
      // Inline function 'kotlin.code' call
      tmp$ret$3_0 = 92;
      tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
      var tmp$ret$4_0;
      // Inline function 'kotlin.code' call
      tmp$ret$4_0 = 9;
      var tmp_1 = tmp$ret$4_0;
      var tmp$ret$5_0;
      // Inline function 'kotlin.code' call
      tmp$ret$5_0 = 116;
      tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
      var tmp$ret$6_0;
      // Inline function 'kotlin.code' call
      tmp$ret$6_0 = 8;
      var tmp_2 = tmp$ret$6_0;
      var tmp$ret$7_0;
      // Inline function 'kotlin.code' call
      tmp$ret$7_0 = 98;
      tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
      var tmp$ret$8;
      // Inline function 'kotlin.code' call
      tmp$ret$8 = 10;
      var tmp_3 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.code' call
      tmp$ret$9 = 110;
      tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.code' call
      tmp$ret$10 = 13;
      var tmp_4 = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.code' call
      tmp$ret$11 = 114;
      tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
      var tmp$ret$12;
      // Inline function 'kotlin.code' call
      tmp$ret$12 = 102;
      tmp0_apply_0[12] = toByte(tmp$ret$12);
      tmp$ret$13 = tmp0_apply_0;
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function SuppressAnimalSniffer() {
  }
  protoOf(SuppressAnimalSniffer).equals = function (other) {
    if (!(other instanceof SuppressAnimalSniffer))
      return false;
    var tmp0_other_with_cast = other instanceof SuppressAnimalSniffer ? other : THROW_CCE();
    return true;
  };
  protoOf(SuppressAnimalSniffer).hashCode = function () {
    return 0;
  };
  protoOf(SuppressAnimalSniffer).toString = function () {
    return '@kotlinx.serialization.json.internal.SuppressAnimalSniffer()';
  };
  function readJson(_this__u8e3s4, element, deserializer) {
    var tmp0_subject = element;
    var tmp;
    if (tmp0_subject instanceof JsonObject) {
      tmp = new JsonTreeDecoder(_this__u8e3s4, element);
    } else {
      if (tmp0_subject instanceof JsonArray) {
        tmp = new JsonTreeListDecoder(_this__u8e3s4, element);
      } else {
        var tmp_0;
        if (tmp0_subject instanceof JsonLiteral) {
          tmp_0 = true;
        } else {
          tmp_0 = equals(tmp0_subject, JsonNull_getInstance());
        }
        if (tmp_0) {
          tmp = new JsonPrimitiveDecoder(_this__u8e3s4, element instanceof JsonPrimitive ? element : THROW_CCE());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    var input = tmp;
    return input.decodeSerializableValue_6v83lo_k$(deserializer);
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.get_currentTagOrNull_yhyzw_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.currentElement_sx22im_k$(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.get_value_j01efc_k$() : tmp1_elvis_lhs;
  }
  function primitive(_this__u8e3s4, $this, primitive, block) {
    try {
      var tmp0_elvis_lhs = block(_this__u8e3s4);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive($this, primitive);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive($this, primitive);
      } else {
        throw $p;
      }
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.json_1 = json;
    this.value_1 = value;
    this.configuration_1 = this.get_json_woos35_k$().get_configuration_uqypjh_k$();
  }
  protoOf(AbstractJsonTreeDecoder).get_json_woos35_k$ = function () {
    return this.json_1;
  };
  protoOf(AbstractJsonTreeDecoder).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(AbstractJsonTreeDecoder).get_serializersModule_piitvg_k$ = function () {
    return this.get_json_woos35_k$().get_serializersModule_piitvg_k$();
  };
  protoOf(AbstractJsonTreeDecoder).get_configuration_uqypjh_k$ = function () {
    return this.configuration_1;
  };
  protoOf(AbstractJsonTreeDecoder).decodeJsonElement_6lz9ye_k$ = function () {
    return currentObject(this);
  };
  protoOf(AbstractJsonTreeDecoder).decodeSerializableValue_6v83lo_k$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).composeName_t9idc5_k$ = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).beginStructure_dv3yt3_k$ = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.get_json_woos35_k$();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.get_json_woos35_k$();
        var keyDescriptor = carrierDescriptor(descriptor.getElementDescriptor_sqz94k_k$(0), tmp0_selectMapMode.get_serializersModule_piitvg_k$());
        var keyKind = keyDescriptor.get_kind_wop7ml_k$();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.get_json_woos35_k$();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.get_configuration_uqypjh_k$().get_allowStructuredMapKeys_fk21t_k$()) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.get_json_woos35_k$();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp$ret$3 = currentObject_0;
            tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
            tmp_2 = tmp$ret$4;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$5 = tmp_2;
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.get_json_woos35_k$();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        tmp = new JsonTreeDecoder(tmp_6, tmp$ret$6);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).endStructure_e64gd4_k$ = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).decodeNotNullMark_us4ba1_k$ = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).getPrimitiveValue_r7a8w1_k$ = function (tag) {
    var currentElement = this.currentElement_sx22im_k$(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedEnum_pfrl5l_k$ = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.get_json_woos35_k$(), this.getPrimitiveValue_r7a8w1_k$(tag).get_content_h02jrk_k$());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedEnum_jxsvth_k$ = function (tag, enumDescriptor) {
    return this.decodeTaggedEnum_pfrl5l_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedNull_9cvjhc_k$ = function (tag) {
    return null;
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedNull_x1ibl0_k$ = function (tag) {
    return this.decodeTaggedNull_9cvjhc_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedNotNullMark_o4mjck_k$ = function (tag) {
    return !(this.currentElement_sx22im_k$(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedNotNullMark_lc2tyw_k$ = function (tag) {
    return this.decodeTaggedNotNullMark_o4mjck_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedBoolean_69nto3_k$ = function (tag) {
    var value = this.getPrimitiveValue_r7a8w1_k$(tag);
    if (!this.get_json_woos35_k$().get_configuration_uqypjh_k$().get_isLenient_1g1x8_k$()) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.get_isString_zep7bw_k$())
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedBoolean_kbjyq1_k$ = function (tag) {
    return this.decodeTaggedBoolean_69nto3_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedByte_z232qn_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
        if (result <= ByteCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedByte_weg8ir_k$ = function (tag) {
    return this.decodeTaggedByte_z232qn_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedShort_d78pwf_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
        if (result <= ShortCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedShort_9lw2oz_k$ = function (tag) {
    return this.decodeTaggedShort_d78pwf_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedInt_g5h384_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        tmp$ret$0 = get_int(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedInt_rqx040_k$ = function (tag) {
    return this.decodeTaggedInt_g5h384_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedLong_vws05x_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        tmp$ret$0 = get_long(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedLong_z7jgpd_k$ = function (tag) {
    return this.decodeTaggedLong_vws05x_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedFloat_wuaksh_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        tmp$ret$0 = get_float(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.get_json_woos35_k$().get_configuration_uqypjh_k$().get_allowSpecialFloatingPointValues_1eu5hp_k$();
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedFloat_azhupv_k$ = function (tag) {
    return this.decodeTaggedFloat_wuaksh_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedDouble_c9vp4a_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        tmp$ret$0 = get_double(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.get_json_woos35_k$().get_configuration_uqypjh_k$().get_allowSpecialFloatingPointValues_1eu5hp_k$();
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedDouble_qq3qze_k$ = function (tag) {
    return this.decodeTaggedDouble_c9vp4a_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedChar_ouxcj4_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.get_content_h02jrk_k$());
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedChar_xsxsj0_k$ = function (tag) {
    return this.decodeTaggedChar_ouxcj4_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedString_9404dm_k$ = function (tag) {
    var value = this.getPrimitiveValue_r7a8w1_k$(tag);
    if (!this.get_json_woos35_k$().get_configuration_uqypjh_k$().get_isLenient_1g1x8_k$()) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.get_isString_zep7bw_k$())
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.get_content_h02jrk_k$();
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedString_5es7hi_k$ = function (tag) {
    return this.decodeTaggedString_9404dm_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedInline_qtikgf_k$ = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.getPrimitiveValue_r7a8w1_k$(tag).get_content_h02jrk_k$()), this.get_json_woos35_k$()) : protoOf(NamedValueDecoder).decodeTaggedInline_lzvm4z_k$.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).decodeTaggedInline_lzvm4z_k$ = function (tag, inlineDescriptor) {
    return this.decodeTaggedInline_qtikgf_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  function _get_polyDiscriminator__o5721t($this) {
    return $this.polyDiscriminator_1;
  }
  function _get_polyDescriptor__k5x0cw($this) {
    return $this.polyDescriptor_1;
  }
  function _set_position__5hlfea($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function _get_position__iahqv2($this) {
    return $this.position_1;
  }
  function _set_forceNull__m2khrn($this, _set____db54di) {
    $this.forceNull_1 = _set____db54di;
  }
  function _get_forceNull__jnp3sx($this) {
    return $this.forceNull_1;
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.get_json_woos35_k$();
      var tmp1_tryCoerceValue = descriptor.getElementDescriptor_sqz94k_k$(index);
      var tmp;
      if (!tmp1_tryCoerceValue.get_isNullable_67sy7o_k$()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.currentElement_sx22im_k$(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(tmp1_tryCoerceValue.get_kind_wop7ml_k$(), ENUM_getInstance())) {
        var tmp_1;
        if (tmp1_tryCoerceValue.get_isNullable_67sy7o_k$()) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.currentElement_sx22im_k$(tag);
          tmp$ret$2 = tmp_2 instanceof JsonNull;
          tmp_1 = tmp$ret$2;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.currentElement_sx22im_k$(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        tmp$ret$3 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp0_elvis_lhs = tmp$ret$3;
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        if (enumIndex === Companion_getInstance_0().get_UNKNOWN_NAME_lj8hxl_k$()) {
          var tmp$ret$4;
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$4 = Unit_getInstance();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.forceNull_1 = (!$this.get_json_woos35_k$().get_configuration_uqypjh_k$().get_explicitNulls_ppiuof_k$() ? !descriptor.isElementOptional_c3hgb3_k$(index) : false) ? descriptor.getElementDescriptor_sqz94k_k$(index).get_isNullable_67sy7o_k$() : false;
    return $this.forceNull_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.polyDiscriminator_1 = polyDiscriminator;
    this.polyDescriptor_1 = polyDescriptor;
    this.position_1 = 0;
    this.forceNull_1 = false;
  }
  protoOf(JsonTreeDecoder).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  protoOf(JsonTreeDecoder).decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.position_1 < descriptor.get_elementsCount_288r0x_k$()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.position_1;
      tmp0_this.position_1 = tmp1 + 1 | 0;
      var name = this.getTag_8zycz2_k$(descriptor, tmp1);
      var index = this.position_1 - 1 | 0;
      this.forceNull_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.get_value_j01efc_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$(name);
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.configuration_1.get_coerceInputValues_gdasvc_k$() ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return Companion_getInstance_0().get_DECODE_DONE_1b8fna_k$();
  };
  protoOf(JsonTreeDecoder).decodeNotNullMark_us4ba1_k$ = function () {
    return !this.forceNull_1 ? protoOf(AbstractJsonTreeDecoder).decodeNotNullMark_us4ba1_k$.call(this) : false;
  };
  protoOf(JsonTreeDecoder).elementName_9sehmv_k$ = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.get_json_woos35_k$());
    var baseName = descriptor.getElementName_ykpypc_k$(index);
    if (strategy == null) {
      if (!this.configuration_1.get_useAlternativeNames_c5maqh_k$())
        return baseName;
      if (this.get_value_j01efc_k$().get_keys_wop4xp_k$().contains_2ehdt1_k$(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.get_json_woos35_k$(), descriptor);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.get_value_j01efc_k$().get_keys_wop4xp_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        tmp$ret$0 = deserializationNamesMap_0.get_1mhr4y_k$(element) === index;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = strategy;
    var fallbackName = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serialNameForJson_hcdeen_k$(descriptor, index, baseName);
    var tmp2_elvis_lhs = fallbackName;
    return tmp2_elvis_lhs == null ? baseName : tmp2_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).currentElement_sx22im_k$ = function (tag) {
    return getValue(this.get_value_j01efc_k$(), tag);
  };
  protoOf(JsonTreeDecoder).beginStructure_dv3yt3_k$ = function (descriptor) {
    if (descriptor === this.polyDescriptor_1)
      return this;
    return protoOf(AbstractJsonTreeDecoder).beginStructure_dv3yt3_k$.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).endStructure_e64gd4_k$ = function (descriptor) {
    var tmp;
    if (this.configuration_1.get_ignoreUnknownKeys_kvp19_k$()) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.get_kind_wop7ml_k$();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var strategy = namingStrategy(descriptor, this.get_json_woos35_k$());
    var tmp_1;
    if (strategy == null ? !this.configuration_1.get_useAlternativeNames_c5maqh_k$() : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.get_json_woos35_k$(), descriptor).get_keys_wop4xp_k$();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.get_json_woos35_k$()).get_kuyzdy_k$(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_keys_wop4xp_k$();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.get_value_j01efc_k$().get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var key = tmp1_iterator.next_20eer_k$();
      if (!names.contains_2ehdt1_k$(key) ? !(key === this.polyDiscriminator_1) : false) {
        throw UnknownKeyException(key, this.get_value_j01efc_k$().toString());
      }
    }
  };
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function _set_currentIndex__cezf6m_0($this, _set____db54di) {
    $this.currentIndex_1 = _set____db54di;
  }
  function _get_currentIndex__ryq5qq_0($this) {
    return $this.currentIndex_1;
  }
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.size_1 = this.value_2.get_size_woubt6_k$();
    this.currentIndex_1 = -1;
  }
  protoOf(JsonTreeListDecoder).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  protoOf(JsonTreeListDecoder).elementName_9sehmv_k$ = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).currentElement_sx22im_k$ = function (tag) {
    return this.value_2.get_fkrdnv_k$(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.currentIndex_1 < (this.size_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentIndex_1;
      tmp0_this.currentIndex_1 = tmp1 + 1 | 0;
      return this.currentIndex_1;
    }
    return Companion_getInstance_0().get_DECODE_DONE_1b8fna_k$();
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.pushTag_2jen4a_k$(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  protoOf(JsonPrimitiveDecoder).decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).currentElement_sx22im_k$ = function (tag) {
    // Inline function 'kotlin.require' call
    var tmp0_require = tag === get_PRIMITIVE_TAG();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      tmp$ret$0 = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.value_2;
  };
  function _get_keys__d97k5z($this) {
    return $this.keys_1;
  }
  function _get_size__ddoh9m_0($this) {
    return $this.size_1;
  }
  function _set_position__5hlfea_0($this, _set____db54di) {
    $this.position_2 = _set____db54di;
  }
  function _get_position__iahqv2_0($this) {
    return $this.position_2;
  }
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.value_3 = value;
    this.keys_1 = toList(this.value_3.get_keys_wop4xp_k$());
    this.size_1 = imul(this.keys_1.get_size_woubt6_k$(), 2);
    this.position_2 = -1;
  }
  protoOf(JsonTreeMapDecoder).get_value_j01efc_k$ = function () {
    return this.value_3;
  };
  protoOf(JsonTreeMapDecoder).elementName_9sehmv_k$ = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.keys_1.get_fkrdnv_k$(i);
  };
  protoOf(JsonTreeMapDecoder).decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.position_2 < (this.size_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.position_2;
      tmp0_this.position_2 = tmp1 + 1 | 0;
      return this.position_2;
    }
    return Companion_getInstance_0().get_DECODE_DONE_1b8fna_k$();
  };
  protoOf(JsonTreeMapDecoder).currentElement_sx22im_k$ = function (tag) {
    return (this.position_2 % 2 | 0) === 0 ? JsonPrimitive_2(tag) : getValue(this.value_3, tag);
  };
  protoOf(JsonTreeMapDecoder).endStructure_e64gd4_k$ = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.get_descriptor_wjt6a0_k$())).decodeSerializableValue_6v83lo_k$(deserializer);
  }
  function writeJson(_this__u8e3s4, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(_this__u8e3s4, writeJson$lambda(result));
    encoder.encodeSerializableValue_g55msp_k$(serializer, value);
    var tmp;
    if (result._v == null) {
      throwUninitializedPropertyAccessException('result');
    } else {
      tmp = result._v;
    }
    return tmp;
  }
  function JsonTreeEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.content_1 = tmp$ret$0;
  }
  protoOf(JsonTreeEncoder).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(JsonTreeEncoder).putElement_q1lsnv_k$ = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.content_1;
    tmp0_set.put_3mhbri_k$(key, element);
  };
  protoOf(JsonTreeEncoder).encodeNullableSerializableElement_j50jzb_k$ = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.configuration_1.get_explicitNulls_ppiuof_k$()) {
      protoOf(AbstractJsonTreeEncoder).encodeNullableSerializableElement_j50jzb_k$.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).getCurrent_z8uawt_k$ = function () {
    return new JsonObject(this.content_1);
  };
  function _get_nodeConsumer__ng80ct($this) {
    return $this.nodeConsumer_1;
  }
  function _set_polymorphicDiscriminator__uwj3yn_0($this, _set____db54di) {
    $this.polymorphicDiscriminator_1 = _set____db54di;
  }
  function _get_polymorphicDiscriminator__qe5wbf_0($this) {
    return $this.polymorphicDiscriminator_1;
  }
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.this$0__1 = this$0;
    this.$tag_1 = $tag;
    AbstractEncoder.call(this);
    this.serializersModule_1 = this$0.json_1.get_serializersModule_piitvg_k$();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).putUnquotedString_bv71rl_k$ = function (s) {
    return this.this$0__1.putElement_q1lsnv_k$(this.$tag_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).encodeInt_5vxmon_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.putUnquotedString_bv71rl_k$(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).encodeLong_rk3ab9_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.putUnquotedString_bv71rl_k$(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).encodeByte_gpyndp_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.putUnquotedString_bv71rl_k$(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).encodeShort_rh3vxz_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.putUnquotedString_bv71rl_k$(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.this$0__1 = this$0;
    this.$tag_1 = $tag;
    this.$inlineDescriptor_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).get_serializersModule_piitvg_k$ = function () {
    return this.this$0__1.json_1.get_serializersModule_piitvg_k$();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).encodeString_90sumj_k$ = function (value) {
    return this.this$0__1.putElement_q1lsnv_k$(this.$tag_1, new JsonLiteral(value, false, this.$inlineDescriptor_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.putElement_q1lsnv_k$(this$0.get_currentTag_wui9re_k$(), node);
      return Unit_getInstance();
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.json_1 = json;
    this.nodeConsumer_1 = nodeConsumer;
    this.configuration_1 = this.json_1.get_configuration_uqypjh_k$();
    this.polymorphicDiscriminator_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).get_json_woos35_k$ = function () {
    return this.json_1;
  };
  protoOf(AbstractJsonTreeEncoder).get_serializersModule_piitvg_k$ = function () {
    return this.json_1.get_serializersModule_piitvg_k$();
  };
  protoOf(AbstractJsonTreeEncoder).get_configuration_uqypjh_k$ = function () {
    return this.configuration_1;
  };
  protoOf(AbstractJsonTreeEncoder).elementName_9sehmv_k$ = function (descriptor, index) {
    return getJsonElementName(descriptor, this.json_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).encodeJsonElement_javf71_k$ = function (element) {
    this.encodeSerializableValue_g55msp_k$(JsonElementSerializer_getInstance(), element);
  };
  protoOf(AbstractJsonTreeEncoder).shouldEncodeElementDefault_m92hrm_k$ = function (descriptor, index) {
    return this.configuration_1.get_encodeDefaults_m8plkf_k$();
  };
  protoOf(AbstractJsonTreeEncoder).composeName_t9idc5_k$ = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).encodeNotNullMark_40lhgg_k$ = function () {
  };
  protoOf(AbstractJsonTreeEncoder).encodeNull_ek2hec_k$ = function () {
    var tmp0_elvis_lhs = this.get_currentTagOrNull_yhyzw_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.nodeConsumer_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.encodeTaggedNull_7uuv7t_k$(tag);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedNull_7uuv7t_k$ = function (tag) {
    return this.putElement_q1lsnv_k$(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedNull_qi5bv1_k$ = function (tag) {
    return this.encodeTaggedNull_7uuv7t_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedInt_bsahq4_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedInt_ndzaig_k$ = function (tag, value) {
    return this.encodeTaggedInt_bsahq4_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedByte_hkv08e_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedByte_e5naty_k$ = function (tag, value) {
    return this.encodeTaggedByte_hkv08e_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedShort_drdhss_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedShort_4ro7mw_k$ = function (tag, value) {
    return this.encodeTaggedShort_drdhss_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedLong_kg8soa_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedLong_68sg4u_k$ = function (tag, value) {
    return this.encodeTaggedLong_kg8soa_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedFloat_px6isk_k$ = function (tag, value) {
    this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
    if (!this.configuration_1.get_allowSpecialFloatingPointValues_1eu5hp_k$() ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.getCurrent_z8uawt_k$()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedFloat_xhp5co_k$ = function (tag, value) {
    return this.encodeTaggedFloat_px6isk_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeSerializableValue_g55msp_k$ = function (serializer, value) {
    if (!(this.get_currentTagOrNull_yhyzw_k$() == null) ? true : !get_requiresTopLevelTag(carrierDescriptor(serializer.get_descriptor_wjt6a0_k$(), this.get_serializersModule_piitvg_k$()))) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        var tmp;
        if (!(serializer instanceof AbstractPolymorphicSerializer)) {
          tmp = true;
        } else {
          tmp = this.get_json_woos35_k$().get_configuration_uqypjh_k$().get_useArrayPolymorphism_teidaa_k$();
        }
        if (tmp) {
          serializer.serialize_32qylj_k$(this, value);
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        var baseClassDiscriminator = classDiscriminator(serializer.get_descriptor_wjt6a0_k$(), this.get_json_woos35_k$());
        var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
        validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
        checkKind(actualSerializer.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$());
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeEncoder.encodeSerializableValue.<anonymous>' call
        this.polymorphicDiscriminator_1 = baseClassDiscriminator;
        actualSerializer.serialize_32qylj_k$(this, value);
      }
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new JsonPrimitiveEncoder(this.json_1, this.nodeConsumer_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeEncoder.encodeSerializableValue.<anonymous>' call
      tmp0_apply.encodeSerializableValue_g55msp_k$(serializer, value);
      tmp0_apply.endEncode_2disap_k$(serializer.get_descriptor_wjt6a0_k$());
      tmp$ret$1 = tmp0_apply;
    }
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedDouble_8ug3sw_k$ = function (tag, value) {
    this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
    if (!this.configuration_1.get_allowSpecialFloatingPointValues_1eu5hp_k$() ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.getCurrent_z8uawt_k$()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedDouble_dgqq9w_k$ = function (tag, value) {
    return this.encodeTaggedDouble_8ug3sw_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedBoolean_mejn8k_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedBoolean_wlumqg_k$ = function (tag, value) {
    return this.encodeTaggedBoolean_mejn8k_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedChar_q2imt2_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_2(toString_0(value)));
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedChar_2dcv0m_k$ = function (tag, value) {
    return this.encodeTaggedChar_q2imt2_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedString_tybxa8_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedString_ault6k_k$ = function (tag, value) {
    return this.encodeTaggedString_tybxa8_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedEnum_x78vv5_k$ = function (tag, enumDescriptor, ordinal) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_2(enumDescriptor.getElementName_ykpypc_k$(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedEnum_j126tp_k$ = function (tag, enumDescriptor, ordinal) {
    return this.encodeTaggedEnum_x78vv5_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedValue_vuddkv_k$ = function (tag, value) {
    this.putElement_q1lsnv_k$(tag, JsonPrimitive_2(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedValue_rik3ib_k$ = function (tag, value) {
    return this.encodeTaggedValue_vuddkv_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedInline_n78nx5_k$ = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).encodeTaggedInline_nljf4l_k$.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).encodeTaggedInline_nljf4l_k$ = function (tag, inlineDescriptor) {
    return this.encodeTaggedInline_n78nx5_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).beginStructure_dv3yt3_k$ = function (descriptor) {
    var tmp;
    if (this.get_currentTagOrNull_yhyzw_k$() == null) {
      tmp = this.nodeConsumer_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.json_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.json_1;
        var keyDescriptor = carrierDescriptor(descriptor.getElementDescriptor_sqz94k_k$(0), tmp0_selectMapMode.get_serializersModule_piitvg_k$());
        var keyKind = keyDescriptor.get_kind_wop7ml_k$();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeEncoder.beginStructure.<anonymous>' call
          tmp$ret$0 = new JsonTreeMapEncoder(this.json_1, consumer);
          tmp_2 = tmp$ret$0;
        } else {
          if (tmp0_selectMapMode.get_configuration_uqypjh_k$().get_allowStructuredMapKeys_fk21t_k$()) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeEncoder.beginStructure.<anonymous>' call
            tmp$ret$1 = new JsonTreeListEncoder(this.json_1, consumer);
            tmp_2 = tmp$ret$1;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$2 = tmp_2;
        tmp_0 = tmp$ret$2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.json_1, consumer);
      }
    }
    var encoder = tmp_0;
    if (!(this.polymorphicDiscriminator_1 == null)) {
      encoder.putElement_q1lsnv_k$(ensureNotNull(this.polymorphicDiscriminator_1), JsonPrimitive_2(descriptor.get_serialName_u2rqhk_k$()));
      this.polymorphicDiscriminator_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).endEncode_2disap_k$ = function (descriptor) {
    this.nodeConsumer_1(this.getCurrent_z8uawt_k$());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.get_kind_wop7ml_k$();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.get_kind_wop7ml_k$() === ENUM_getInstance();
    }
    return tmp;
  }
  function _set_content__jmvnbo($this, _set____db54di) {
    $this.content_1 = _set____db54di;
  }
  function _get_content__ps04ag_1($this) {
    return $this.content_1;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.content_1 = null;
    this.pushTag_2jen4a_k$('primitive');
  }
  protoOf(JsonPrimitiveEncoder).putElement_q1lsnv_k$ = function (key, element) {
    // Inline function 'kotlin.require' call
    var tmp0_require = key === 'primitive';
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveEncoder.putElement.<anonymous>' call
      tmp$ret$0 = "This output can only consume primitives with 'primitive' tag";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = this.content_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveEncoder.putElement.<anonymous>' call
      tmp$ret$1 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.content_1 = element;
  };
  protoOf(JsonPrimitiveEncoder).getCurrent_z8uawt_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var tmp0_requireNotNull = this.content_1;
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_requireNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveEncoder.getCurrent.<anonymous>' call
        tmp$ret$0 = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_requireNotNull;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function JsonTreeListEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.array_1 = tmp$ret$0;
  }
  protoOf(JsonTreeListEncoder).elementName_9sehmv_k$ = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).putElement_q1lsnv_k$ = function (key, element) {
    var idx = toInt(key);
    this.array_1.add_ydlf05_k$(idx, element);
  };
  protoOf(JsonTreeListEncoder).getCurrent_z8uawt_k$ = function () {
    return new JsonArray(this.array_1);
  };
  function _set_tag__4wejl7($this, _set____db54di) {
    $this.tag_1 = _set____db54di;
  }
  function _get_tag__e6h4qf($this) {
    var tmp = $this.tag_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function _set_isKey__g0qqz4($this, _set____db54di) {
    $this.isKey_1 = _set____db54di;
  }
  function _get_isKey__g0dpic($this) {
    return $this.isKey_1;
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.isKey_1 = true;
  }
  protoOf(JsonTreeMapEncoder).putElement_q1lsnv_k$ = function (key, element) {
    if (this.isKey_1) {
      var tmp = this;
      var tmp0_subject = element;
      var tmp_0;
      if (tmp0_subject instanceof JsonPrimitive) {
        tmp_0 = element.get_content_h02jrk_k$();
      } else {
        if (tmp0_subject instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().get_descriptor_wjt6a0_k$());
        } else {
          if (tmp0_subject instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().get_descriptor_wjt6a0_k$());
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.tag_1 = tmp_0;
      this.isKey_1 = false;
    } else {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.content_1;
      var tmp1_set = _get_tag__e6h4qf(this);
      tmp0_set.put_3mhbri_k$(tmp1_set, element);
      this.isKey_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).getCurrent_z8uawt_k$ = function () {
    return new JsonObject(this.content_1);
  };
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  function writeJson$lambda($result) {
    return function (it) {
      $result._v = it;
      return Unit_getInstance();
    };
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'OBJ':
        return WriteMode_OBJ_getInstance();
      case 'LIST':
        return WriteMode_LIST_getInstance();
      case 'MAP':
        return WriteMode_MAP_getInstance();
      case 'POLY_OBJ':
        return WriteMode_POLY_OBJ_getInstance();
      default:
        WriteMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.begin_1 = begin;
    this.end_1 = end;
  }
  protoOf(WriteMode).get_begin_15e7lr_k$ = function () {
    return this.begin_1;
  };
  protoOf(WriteMode).get_end_l5tfxv_k$ = function () {
    return this.end_1;
  };
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.get_kind_wop7ml_k$();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.getElementDescriptor_sqz94k_k$(0), _this__u8e3s4.get_serializersModule_piitvg_k$());
          var keyKind = keyDescriptor.get_kind_wop7ml_k$();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp$ret$0 = WriteMode_MAP_getInstance();
            tmp_0 = tmp$ret$0;
          } else {
            if (_this__u8e3s4.get_configuration_uqypjh_k$().get_allowStructuredMapKeys_fk21t_k$()) {
              var tmp$ret$1;
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp$ret$1 = WriteMode_LIST_getInstance();
              tmp_0 = tmp$ret$1;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$2 = tmp_0;
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__u8e3s4, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = carrierDescriptor(mapDescriptor.getElementDescriptor_sqz94k_k$(0), _this__u8e3s4.get_serializersModule_piitvg_k$());
    var keyKind = keyDescriptor.get_kind_wop7ml_k$();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(keyKind, ENUM_getInstance());
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__u8e3s4.get_configuration_uqypjh_k$().get_allowStructuredMapKeys_fk21t_k$()) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.get_kind_wop7ml_k$(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.get_isInline_usk17w_k$()) {
      tmp = carrierDescriptor(_this__u8e3s4.getElementDescriptor_sqz94k_k$(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function _set_peekedString__1ptzck($this, _set____db54di) {
    $this.peekedString_1 = _set____db54di;
  }
  function _get_peekedString__dtwr7k($this) {
    return $this.peekedString_1;
  }
  function insideString($this, isLenient, char) {
    var tmp;
    if (isLenient) {
      tmp = charToTokenClass(char) === 0;
    } else {
      tmp = !equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)));
    }
    return tmp;
  }
  function writeRange($this, fromIndex, toIndex, currentChunkHasEscape, consumeChunk) {
    if (currentChunkHasEscape) {
      consumeChunk(decodedString($this, fromIndex, toIndex));
    } else {
      consumeChunk($this.substring_8we4nj_k$(fromIndex, toIndex));
    }
  }
  function appendEscape($this, lastPosition, current) {
    $this.appendRange_nm7sha_k$(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.appendRange_nm7sha_k$(lastPosition, currentPosition);
    var result = $this.escapedString_1.toString();
    $this.escapedString_1.setLength_kzn4fs_k$(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.peekedString_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.peekedString_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.get_source_jl0x7o_k$(), $this.currentPosition_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.prefetchOrEof_yw6lb3_k$(currentPosition);
    if (currentPosition === -1) {
      $this.fail$default_dmej3o_k$('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.get_source_jl0x7o_k$();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.get_source_jl0x7o_k$(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      $this.fail$default_dmej3o_k$("Invalid escaped char '" + new Char(currentChar) + "'");
    }
    $this.escapedString_1.append_t8oh9e_k$(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.currentPosition_1 = startPos;
      $this.ensureHaveChars_2ohzs6_k$();
      if (($this.currentPosition_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.fail$default_dmej3o_k$('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.currentPosition_1);
    }
    $this.escapedString_1.append_t8oh9e_k$(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(character);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = Char__toInt_impl_vasixd(character);
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 97;
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = Char__toInt_impl_vasixd(character);
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 65;
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      $this.fail$default_dmej3o_k$("Invalid toHexChar char '" + new Char(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.prefetchOrEof_yw6lb3_k$(start);
    if (current >= charSequenceLength($this.get_source_jl0x7o_k$()) ? true : current === -1) {
      $this.fail$default_dmej3o_k$('EOF');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.get_source_jl0x7o_k$();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 116;
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 102;
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.fail$default_dmej3o_k$("Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient_9oypvu_k$() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.get_source_jl0x7o_k$()) - current | 0) < literalSuffix.length) {
      $this.fail$default_dmej3o_k$('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.get_source_jl0x7o_k$(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          $this.fail$default_dmej3o_k$("Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient_9oypvu_k$() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.currentPosition_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.currentPosition_1 = 0;
    this.path_1 = new JsonPath();
    this.peekedString_1 = null;
    this.escapedString_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).set_currentPosition_b6llm3_k$ = function (_set____db54di) {
    this.currentPosition_1 = _set____db54di;
  };
  protoOf(AbstractJsonLexer).get_currentPosition_ic997d_k$ = function () {
    return this.currentPosition_1;
  };
  protoOf(AbstractJsonLexer).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(AbstractJsonLexer).ensureHaveChars_2ohzs6_k$ = function () {
  };
  protoOf(AbstractJsonLexer).isNotEof_61q0b1_k$ = function () {
    return !(this.peekNextToken_1gqwr9_k$() === 10);
  };
  protoOf(AbstractJsonLexer).isValidValueStart_3nntvd_k$ = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  protoOf(AbstractJsonLexer).expectEof_2xcy36_k$ = function () {
    var nextToken = this.consumeNextToken_uf1vsa_k$();
    if (!(nextToken === 10)) {
      this.fail$default_dmej3o_k$('Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.get_source_jl0x7o_k$(), this.currentPosition_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).set_escapedString_7uc22r_k$ = function (_set____db54di) {
    this.escapedString_1 = _set____db54di;
  };
  protoOf(AbstractJsonLexer).get_escapedString_g03bxx_k$ = function () {
    return this.escapedString_1;
  };
  protoOf(AbstractJsonLexer).consumeNextToken_trhodc_k$ = function (expected) {
    var token = this.consumeNextToken_uf1vsa_k$();
    if (!(token === expected)) {
      this.fail_pcesvg_k$(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).consumeNextToken_ev7fkz_k$ = function (expected) {
    this.ensureHaveChars_2ohzs6_k$();
    var source = this.get_source_jl0x7o_k$();
    var cpos = this.currentPosition_1;
    $l$loop_0: while (true) {
      cpos = this.prefetchOrEof_yw6lb3_k$(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.currentPosition_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.unexpectedToken_v8110b_k$(expected);
    }
    this.currentPosition_1 = cpos;
    this.unexpectedToken_v8110b_k$(expected);
  };
  protoOf(AbstractJsonLexer).unexpectedToken_v8110b_k$ = function (expected) {
    var tmp0_this = this;
    tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 - 1 | 0;
    if ((this.currentPosition_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.consumeStringLenient_9oypvu_k$() === 'null' : false) {
      this.fail_icoaf1_k$("Expected string literal but 'null' literal was found", this.currentPosition_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.fail_pcesvg_k$(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).fail_pcesvg_k$ = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.currentPosition_1 === charSequenceLength(this.get_source_jl0x7o_k$()) ? true : this.currentPosition_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.get_source_jl0x7o_k$(), this.currentPosition_1 - 1 | 0));
    this.fail$default_dmej3o_k$('Expected ' + expected + ", but had '" + s + "' instead", this.currentPosition_1 - 1 | 0);
  };
  protoOf(AbstractJsonLexer).peekNextToken_1gqwr9_k$ = function () {
    var source = this.get_source_jl0x7o_k$();
    var cpos = this.currentPosition_1;
    $l$loop_0: while (true) {
      cpos = this.prefetchOrEof_yw6lb3_k$(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.currentPosition_1 = cpos;
      return charToTokenClass(ch);
    }
    this.currentPosition_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).tryConsumeNull_c55xgu_k$ = function (doConsume) {
    var current = this.skipWhitespaces_ox013r_k$();
    current = this.prefetchOrEof_yw6lb3_k$(current);
    var len = charSequenceLength(this.get_source_jl0x7o_k$()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current + i | 0))))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.get_source_jl0x7o_k$(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.currentPosition_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).tryConsumeNull$default_wv86xa_k$ = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.tryConsumeNull_c55xgu_k$(doConsume) : $super.tryConsumeNull_c55xgu_k$.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).skipWhitespaces_ox013r_k$ = function () {
    var current = this.currentPosition_1;
    $l$loop_0: while (true) {
      current = this.prefetchOrEof_yw6lb3_k$(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.get_source_jl0x7o_k$(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.currentPosition_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).peekString_9klnyq_k$ = function (isLenient) {
    var token = this.peekNextToken_1gqwr9_k$();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.consumeStringLenient_9oypvu_k$();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.consumeString_j3j2z7_k$();
    }
    var string = tmp;
    this.peekedString_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).indexOf_qdephw_k$ = function (char, startPos) {
    return indexOf(this.get_source_jl0x7o_k$(), char, startPos);
  };
  protoOf(AbstractJsonLexer).substring_8we4nj_k$ = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.get_source_jl0x7o_k$();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  protoOf(AbstractJsonLexer).consumeStringChunked_s44ekq_k$ = function (isLenient, consumeChunk) {
    var nextToken = this.peekNextToken_1gqwr9_k$();
    if (isLenient ? !(nextToken === 0) : false)
      return Unit_getInstance();
    if (!isLenient) {
      this.consumeNextToken_ev7fkz_k$(_Char___init__impl__6a9atx(34));
    }
    var currentPosition = this.currentPosition_1;
    var lastPosition = currentPosition;
    var char = charSequenceGet(this.get_source_jl0x7o_k$(), currentPosition);
    var usedAppend = false;
    while (insideString(this, isLenient, char)) {
      if (!isLenient ? equals(new Char(char), new Char(_Char___init__impl__6a9atx(92))) : false) {
        usedAppend = true;
        currentPosition = this.prefetchOrEof_yw6lb3_k$(appendEscape(this, lastPosition, currentPosition));
        lastPosition = currentPosition;
      } else {
        var tmp0 = currentPosition;
        currentPosition = tmp0 + 1 | 0;
      }
      if (currentPosition >= charSequenceLength(this.get_source_jl0x7o_k$())) {
        writeRange(this, lastPosition, currentPosition, usedAppend, consumeChunk);
        usedAppend = false;
        currentPosition = this.prefetchOrEof_yw6lb3_k$(currentPosition);
        if (currentPosition === -1) {
          this.fail$default_dmej3o_k$('EOF', currentPosition);
        }
        lastPosition = currentPosition;
      }
      char = charSequenceGet(this.get_source_jl0x7o_k$(), currentPosition);
    }
    writeRange(this, lastPosition, currentPosition, usedAppend, consumeChunk);
    this.currentPosition_1 = currentPosition;
    if (!isLenient) {
      this.consumeNextToken_ev7fkz_k$(_Char___init__impl__6a9atx(34));
    }
  };
  protoOf(AbstractJsonLexer).consumeString_j3j2z7_k$ = function () {
    if (!(this.peekedString_1 == null)) {
      return takePeeked(this);
    }
    return this.consumeKeyString_mfa3ws_k$();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.prefetchOrEof_yw6lb3_k$(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.fail$default_dmej3o_k$('EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.appendRange_nm7sha_k$(lastPosition, currentPosition);
          currentPosition = this.prefetchOrEof_yw6lb3_k$(currentPosition);
          if (currentPosition === -1) {
            this.fail$default_dmej3o_k$('EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.substring_8we4nj_k$(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.currentPosition_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).consumeStringLenientNotNull_m2rgts_k$ = function () {
    var result = this.consumeStringLenient_9oypvu_k$();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.fail$default_dmej3o_k$("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).consumeStringLenient_9oypvu_k$ = function () {
    if (!(this.peekedString_1 == null)) {
      return takePeeked(this);
    }
    var current = this.skipWhitespaces_ox013r_k$();
    if (current >= charSequenceLength(this.get_source_jl0x7o_k$()) ? true : current === -1) {
      this.fail$default_dmej3o_k$('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.get_source_jl0x7o_k$(), current));
    if (token === 1) {
      return this.consumeString_j3j2z7_k$();
    }
    if (!(token === 0)) {
      this.fail$default_dmej3o_k$('Expected beginning of the string, but got ' + new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.get_source_jl0x7o_k$(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.get_source_jl0x7o_k$())) {
        usedAppend = true;
        this.appendRange_nm7sha_k$(this.currentPosition_1, current);
        var eof = this.prefetchOrEof_yw6lb3_k$(current);
        if (eof === -1) {
          this.currentPosition_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.substring_8we4nj_k$(this.currentPosition_1, current);
    } else {
      tmp = decodedString(this, this.currentPosition_1, current);
    }
    var result = tmp;
    this.currentPosition_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).appendRange_nm7sha_k$ = function (fromIndex, toIndex) {
    this.escapedString_1.append_tbojcw_k$(this.get_source_jl0x7o_k$(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).require_6c485v_k$ = function (condition, position, message) {
    if (!condition) {
      this.fail$default_dmej3o_k$(message(), position);
    }
  };
  protoOf(AbstractJsonLexer).skipElement_wcp1ak_k$ = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.peekNextToken_1gqwr9_k$();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.consumeStringLenient_9oypvu_k$();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.peekNextToken_1gqwr9_k$();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.consumeStringLenient_9oypvu_k$();
        } else {
          this.consumeKeyString_mfa3ws_k$();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.add_1j60pz_k$(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last_0(tokenStack) === 8))
          throw JsonDecodingException_0(this.currentPosition_1, 'found ] instead of } at path: ' + this.path_1, this.get_source_jl0x7o_k$());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last_0(tokenStack) === 6))
          throw JsonDecodingException_0(this.currentPosition_1, 'found } instead of ] at path: ' + this.path_1, this.get_source_jl0x7o_k$());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.fail$default_dmej3o_k$('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.consumeNextToken_uf1vsa_k$();
      if (tokenStack.get_size_woubt6_k$() === 0)
        return Unit_getInstance();
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.get_source_jl0x7o_k$() + "', currentPosition=" + this.currentPosition_1 + ')';
  };
  protoOf(AbstractJsonLexer).failOnUnknownKey_6lfa5c_k$ = function (key) {
    var processed = this.substring_8we4nj_k$(0, this.currentPosition_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.fail_icoaf1_k$("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).fail_icoaf1_k$ = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(hint) === 0;
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.path_1.getPath_18su3p_k$() + hintMessage, this.get_source_jl0x7o_k$());
  };
  protoOf(AbstractJsonLexer).fail$default_dmej3o_k$ = function (message, position, hint, $super) {
    position = position === VOID ? this.currentPosition_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.fail_icoaf1_k$(message, position, hint) : $super.fail_icoaf1_k$.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).consumeNumericLiteral_rdea66_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    current = this.prefetchOrEof_yw6lb3_k$(current);
    if (current >= charSequenceLength(this.get_source_jl0x7o_k$()) ? true : current === -1) {
      this.fail$default_dmej3o_k$('EOF');
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.get_source_jl0x7o_k$())) {
        this.fail$default_dmej3o_k$('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.get_source_jl0x7o_k$(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.fail$default_dmej3o_k$("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.get_source_jl0x7o_k$()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.fail$default_dmej3o_k$("Unexpected symbol '" + new Char(ch) + "' in numeric literal");
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.minus_llf5ei_k$(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        this.fail$default_dmej3o_k$('Numeric value overflow');
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.fail$default_dmej3o_k$('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.fail$default_dmej3o_k$('EOF');
      }
      if (!equals(new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.fail$default_dmej3o_k$('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.currentPosition_1 = current;
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(Companion_getInstance_4().get_MIN_VALUE_7nmmor_k$())) {
      tmp_0 = accumulator.unaryMinus_6uz0qp_k$();
    } else {
      this.fail$default_dmej3o_k$('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).consumeBoolean_8eci30_k$ = function () {
    return consumeBoolean(this, this.skipWhitespaces_ox013r_k$());
  };
  protoOf(AbstractJsonLexer).consumeBooleanLenient_iqeqb9_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    if (current === charSequenceLength(this.get_source_jl0x7o_k$())) {
      this.fail$default_dmej3o_k$('EOF');
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.currentPosition_1 === charSequenceLength(this.get_source_jl0x7o_k$())) {
        this.fail$default_dmej3o_k$('EOF');
      }
      if (!equals(new Char(charSequenceGet(this.get_source_jl0x7o_k$(), this.currentPosition_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.fail$default_dmej3o_k$('Expected closing quotation mark');
      }
      var tmp0_this = this;
      tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().CHAR_TO_TOKEN_1;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = Char__toInt_impl_vasixd(c);
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_coerceInputValuesHint() {
    return coerceInputValuesHint;
  }
  var coerceInputValuesHint;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function get_UNICODE_ESC() {
    return UNICODE_ESC;
  }
  var UNICODE_ESC;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().ESCAPE_2_CHAR_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function get_asciiCaseMask() {
    return asciiCaseMask;
  }
  var asciiCaseMask;
  function get_CTC_MAX() {
    return CTC_MAX;
  }
  var CTC_MAX;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.ESCAPE_2_CHAR_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.CHAR_TO_TOKEN_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.ESCAPE_2_CHAR_1 = charArray(117);
    this.CHAR_TO_TOKEN_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  protoOf(CharMappings).get_ESCAPE_2_CHAR_5c0exk_k$ = function () {
    return this.ESCAPE_2_CHAR_1;
  };
  protoOf(CharMappings).get_CHAR_TO_TOKEN_kwe4p7_k$ = function () {
    return this.CHAR_TO_TOKEN_1;
  };
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_ESC2C_MAX() {
    return ESC2C_MAX;
  }
  var ESC2C_MAX;
  function get_TC_INVALID() {
    return TC_INVALID;
  }
  var TC_INVALID;
  function get_TC_STRING_ESC() {
    return TC_STRING_ESC;
  }
  var TC_STRING_ESC;
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function get_BATCH_SIZE() {
    return BATCH_SIZE;
  }
  var BATCH_SIZE;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.source_1 = source;
  }
  protoOf(StringJsonLexer).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(StringJsonLexer).prefetchOrEof_yw6lb3_k$ = function (position) {
    return position < this.source_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).consumeNextToken_uf1vsa_k$ = function () {
    var source = this.source_1;
    $l$loop: while (!(this.get_currentPosition_ic997d_k$() === -1) ? this.get_currentPosition_ic997d_k$() < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.get_currentPosition_ic997d_k$();
      tmp0_this.set_currentPosition_b6llm3_k$(tmp1 + 1 | 0);
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).tryConsumeComma_9n2ve4_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    if (current === this.source_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.source_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.set_currentPosition_b6llm3_k$(tmp0_this.get_currentPosition_ic997d_k$() + 1 | 0);
      tmp0_this.get_currentPosition_ic997d_k$();
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).canConsumeValue_oljqd7_k$ = function () {
    var current = this.get_currentPosition_ic997d_k$();
    if (current === -1)
      return false;
    $l$loop: while (current < this.source_1.length) {
      var c = charSequenceGet(this.source_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.set_currentPosition_b6llm3_k$(current);
      return this.isValidValueStart_3nntvd_k$(c);
    }
    this.set_currentPosition_b6llm3_k$(current);
    return false;
  };
  protoOf(StringJsonLexer).skipWhitespaces_ox013r_k$ = function () {
    var current = this.get_currentPosition_ic997d_k$();
    if (current === -1)
      return current;
    $l$loop: while (current < this.source_1.length) {
      var c = charSequenceGet(this.source_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.set_currentPosition_b6llm3_k$(current);
    return current;
  };
  protoOf(StringJsonLexer).consumeNextToken_ev7fkz_k$ = function (expected) {
    if (this.get_currentPosition_ic997d_k$() === -1) {
      this.unexpectedToken_v8110b_k$(expected);
    }
    var source = this.source_1;
    $l$loop: while (this.get_currentPosition_ic997d_k$() < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.get_currentPosition_ic997d_k$();
      tmp0_this.set_currentPosition_b6llm3_k$(tmp1 + 1 | 0);
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.unexpectedToken_v8110b_k$(expected);
    }
    this.unexpectedToken_v8110b_k$(expected);
  };
  protoOf(StringJsonLexer).consumeKeyString_mfa3ws_k$ = function () {
    this.consumeNextToken_ev7fkz_k$(get_STRING());
    var current = this.get_currentPosition_ic997d_k$();
    var closingQuote = indexOf(this.source_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.fail_pcesvg_k$(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.source_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.source_1, this.get_currentPosition_ic997d_k$(), i);
        }
      }
       while (inductionVariable < closingQuote);
    this.set_currentPosition_b6llm3_k$(closingQuote + 1 | 0);
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.source_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  protoOf(StringJsonLexer).consumeStringChunked_s44ekq_k$ = function (isLenient, consumeChunk) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = chunked(isLenient ? this.consumeStringLenient_9oypvu_k$() : this.consumeString_j3j2z7_k$(), get_BATCH_SIZE());
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      consumeChunk(element);
    }
  };
  protoOf(StringJsonLexer).consumeLeadingMatchingValue_hqrr8x_k$ = function (keyToMatch, isLenient) {
    var positionSnapshot = this.get_currentPosition_ic997d_k$();
    try {
      if (!(this.consumeNextToken_uf1vsa_k$() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.consumeKeyString_mfa3ws_k$() : this.consumeStringLenientNotNull_m2rgts_k$();
      if (firstKey === keyToMatch) {
        if (!(this.consumeNextToken_uf1vsa_k$() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.consumeString_j3j2z7_k$() : this.consumeStringLenientNotNull_m2rgts_k$();
        return result;
      }
      return null;
    }finally {
      this.set_currentPosition_b6llm3_k$(positionSnapshot);
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.get__schemaCache_mw4zkl_k$();
  }
  function _get_sb__ndcaho($this) {
    return $this.sb_1;
  }
  function JsonToStringWriter() {
    this.sb_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).writeLong_91l7mc_k$ = function (value) {
    this.sb_1.append_t8pm91_k$(value);
  };
  protoOf(JsonToStringWriter).writeChar_g0rcso_k$ = function (char) {
    this.sb_1.append_t8oh9e_k$(char);
  };
  protoOf(JsonToStringWriter).write_wmqgwd_k$ = function (text) {
    this.sb_1.append_ssq29y_k$(text);
  };
  protoOf(JsonToStringWriter).writeQuoted_xlksdn_k$ = function (text) {
    printQuoted(this.sb_1, text);
  };
  protoOf(JsonToStringWriter).release_wtm6d2_k$ = function () {
    this.sb_1.clear_1keqml_k$();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.sb_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(defer$1).get_isInline_usk17w_k$ = get_isInline;
  protoOf(defer$1).get_annotations_20dirp_k$ = get_annotations;
  protoOf(PolymorphismValidator).contextual_ki5uma_k$ = contextual;
  protoOf(PolymorphismValidator).polymorphicDefault_zfjs7w_k$ = polymorphicDefault;
  protoOf(StreamingJsonDecoder).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(StreamingJsonDecoder).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(StreamingJsonDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(StreamingJsonDecoder).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(StreamingJsonDecoder).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(JsonDecoderForUnsignedTypes).decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  protoOf(JsonDecoderForUnsignedTypes).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(JsonDecoderForUnsignedTypes).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(JsonDecoderForUnsignedTypes).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(JsonDecoderForUnsignedTypes).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(JsonDecoderForUnsignedTypes).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(StreamingJsonEncoder).encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  protoOf(StreamingJsonEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(StreamingJsonEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(AbstractJsonTreeDecoder).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(AbstractJsonTreeDecoder).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(AbstractJsonTreeDecoder).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(AbstractJsonTreeDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(AbstractJsonTreeDecoder).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(JsonTreeDecoder).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(JsonTreeDecoder).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(JsonTreeDecoder).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(JsonTreeDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(JsonTreeDecoder).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(JsonTreeListDecoder).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(JsonTreeListDecoder).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(JsonTreeListDecoder).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(JsonTreeListDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(JsonTreeListDecoder).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(JsonPrimitiveDecoder).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(JsonPrimitiveDecoder).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(JsonPrimitiveDecoder).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(JsonPrimitiveDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(JsonPrimitiveDecoder).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(JsonTreeMapDecoder).decodeSerializableElement$default_qqku8y_k$ = decodeSerializableElement$default;
  protoOf(JsonTreeMapDecoder).decodeNullableSerializableElement$default_4h8j6x_k$ = decodeNullableSerializableElement$default;
  protoOf(JsonTreeMapDecoder).decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  protoOf(JsonTreeMapDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(JsonTreeMapDecoder).decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  protoOf(AbstractJsonTreeEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(AbstractJsonTreeEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(JsonTreeEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(JsonTreeEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  protoOf(JsonPrimitiveEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(JsonPrimitiveEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(JsonTreeListEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(JsonTreeListEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  protoOf(JsonTreeMapEncoder).beginCollection_dgpn47_k$ = beginCollection;
  protoOf(JsonTreeMapEncoder).encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  //endregion
  //region block: init
  defaultDiscriminator = 'type';
  defaultIndent = '    ';
  PRIMITIVE_TAG = 'primitive';
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  coerceInputValuesHint = "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.";
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  UNICODE_ESC = _Char___init__impl__6a9atx(117);
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  asciiCaseMask = 32;
  CTC_MAX = 126;
  ESC2C_MAX = 117;
  TC_INVALID = 127;
  TC_STRING_ESC = 2;
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  BATCH_SIZE = 16384;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_5;
  _.$_$.b = JsonElement;
  _.$_$.c = Json_0;
  //endregion
  return _;
}));
