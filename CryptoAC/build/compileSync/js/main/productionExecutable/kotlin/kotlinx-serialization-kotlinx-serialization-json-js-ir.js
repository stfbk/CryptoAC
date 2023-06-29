(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var protoOf = kotlin_kotlin.$_$.sa;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var classMeta = kotlin_kotlin.$_$.k9;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var charSequenceGet = kotlin_kotlin.$_$.h9;
  var Char = kotlin_kotlin.$_$.rd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var equals = kotlin_kotlin.$_$.n9;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var interfaceMeta = kotlin_kotlin.$_$.v9;
  var THROW_CCE = kotlin_kotlin.$_$.he;
  var hashCode = kotlin_kotlin.$_$.u9;
  var joinToString = kotlin_kotlin.$_$.u6;
  var List = kotlin_kotlin.$_$.a5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Map = kotlin_kotlin.$_$.c5;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.t9;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.df;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var toInt = kotlin_kotlin.$_$.bd;
  var toLong = kotlin_kotlin.$_$.dd;
  var toDouble = kotlin_kotlin.$_$.zc;
  var toLongOrNull = kotlin_kotlin.$_$.cd;
  var toDoubleOrNull = kotlin_kotlin.$_$.yc;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.h4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toULongOrNull = kotlin_kotlin.$_$.hd;
  var Companion_getInstance = kotlin_kotlin.$_$.r4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i3;
  var ULong = kotlin_kotlin.$_$.pe;
  var isInterface = kotlin_kotlin.$_$.ea;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var lazy_0 = kotlin_kotlin.$_$.ef;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var KProperty1 = kotlin_kotlin.$_$.mb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s9;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var toLong_0 = kotlin_kotlin.$_$.va;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.y2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.a3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.j3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.p2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.r2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.s3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var charSequenceLength = kotlin_kotlin.$_$.i9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.j9;
  var coerceAtLeast = kotlin_kotlin.$_$.bb;
  var coerceAtMost = kotlin_kotlin.$_$.db;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.s7;
  var arrayIterator = kotlin_kotlin.$_$.c9;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var getValue = kotlin_kotlin.$_$.p6;
  var fillArrayVal = kotlin_kotlin.$_$.p9;
  var copyOf = kotlin_kotlin.$_$.a6;
  var copyOf_0 = kotlin_kotlin.$_$.b6;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.td;
  var invoke = kotlin_kotlin.$_$.ze;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ud;
  var Unit = kotlin_kotlin.$_$.se;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var isObject = kotlin_kotlin.$_$.ha;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var plus = kotlin_kotlin.$_$.gf;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var IllegalArgumentException = kotlin_kotlin.$_$.yd;
  var isFinite = kotlin_kotlin.$_$.bf;
  var isFinite_0 = kotlin_kotlin.$_$.af;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var toUInt = kotlin_kotlin.$_$.gd;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.z2;
  var toULong = kotlin_kotlin.$_$.id;
  var toUByte = kotlin_kotlin.$_$.fd;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.q2;
  var toUShort = kotlin_kotlin.$_$.jd;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var objectCreate = kotlin_kotlin.$_$.qa;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var toString_0 = kotlin_kotlin.$_$.k2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.q4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.p4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.s4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var setOf = kotlin_kotlin.$_$.r7;
  var numberToChar = kotlin_kotlin.$_$.na;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j2;
  var equals_0 = kotlin_kotlin.$_$.yb;
  var toByte = kotlin_kotlin.$_$.ua;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.c4;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.g4;
  var toShort = kotlin_kotlin.$_$.wa;
  var single = kotlin_kotlin.$_$.pc;
  var emptySet = kotlin_kotlin.$_$.h6;
  var plus_0 = kotlin_kotlin.$_$.i7;
  var toList = kotlin_kotlin.$_$.y7;
  var Enum = kotlin_kotlin.$_$.vd;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var last = kotlin_kotlin.$_$.b7;
  var removeLast = kotlin_kotlin.$_$.o7;
  var lastIndexOf = kotlin_kotlin.$_$.kc;
  var Long = kotlin_kotlin.$_$.ae;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.f2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.n4;
  var charArray = kotlin_kotlin.$_$.g9;
  var indexOf = kotlin_kotlin.$_$.cc;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta, VOID, [StringFormat]);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
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
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta);
  //endregion
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
    this.l35_1 = configuration;
    this.m35_1 = serializersModule;
    this.n35_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).w2j = function () {
    return this.m35_1;
  };
  protoOf(Json).u2j = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.fp();
    }
  };
  protoOf(Json).v2j = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.s2i(), null);
    var result = input.d2m(deserializer);
    lexer.b36();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.u1a();
    return new JsonImpl(conf, builder.p36_1);
  }
  function JsonBuilder(json) {
    this.c36_1 = json.l35_1.q36_1;
    this.d36_1 = json.l35_1.v36_1;
    this.e36_1 = json.l35_1.r36_1;
    this.f36_1 = json.l35_1.s36_1;
    this.g36_1 = json.l35_1.t36_1;
    this.h36_1 = json.l35_1.u36_1;
    this.i36_1 = json.l35_1.w36_1;
    this.j36_1 = json.l35_1.x36_1;
    this.k36_1 = json.l35_1.y36_1;
    this.l36_1 = json.l35_1.z36_1;
    this.m36_1 = json.l35_1.a37_1;
    this.n36_1 = json.l35_1.b37_1;
    this.o36_1 = json.l35_1.c37_1;
    this.p36_1 = json.w2j();
  }
  protoOf(JsonBuilder).u1a = function () {
    if (this.k36_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.l36_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.h36_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.i36_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.i36_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.i36_1;
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
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.i36_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.c36_1, this.e36_1, this.f36_1, this.g36_1, this.h36_1, this.d36_1, this.i36_1, this.j36_1, this.k36_1, this.l36_1, this.m36_1, this.n36_1, this.o36_1);
  };
  function validateConfiguration($this) {
    if (equals($this.w2j(), EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.l35_1.y36_1, $this.l35_1.z36_1);
    $this.w2j().o32(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
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
    this.q36_1 = encodeDefaults;
    this.r36_1 = ignoreUnknownKeys;
    this.s36_1 = isLenient;
    this.t36_1 = allowStructuredMapKeys;
    this.u36_1 = prettyPrint;
    this.v36_1 = explicitNulls;
    this.w36_1 = prettyPrintIndent;
    this.x36_1 = coerceInputValues;
    this.y36_1 = useArrayPolymorphism;
    this.z36_1 = classDiscriminator;
    this.a37_1 = allowSpecialFloatingPointValues;
    this.b37_1 = useAlternativeNames;
    this.c37_1 = namingStrategy;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.q36_1 + ', ignoreUnknownKeys=' + this.r36_1 + ', isLenient=' + this.s36_1 + ', ' + ('allowStructuredMapKeys=' + this.t36_1 + ', prettyPrint=' + this.u36_1 + ', explicitNulls=' + this.v36_1 + ', ') + ("prettyPrintIndent='" + this.w36_1 + "', coerceInputValues=" + this.x36_1 + ', useArrayPolymorphism=' + this.y36_1 + ', ') + ("classDiscriminator='" + this.z36_1 + "', allowSpecialFloatingPointValues=" + this.a37_1 + ', useAlternativeNames=' + this.b37_1 + ', ') + ('namingStrategy=' + this.c37_1 + ')');
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
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonArray(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.f37_1 = content;
  }
  protoOf(JsonArray).i = function () {
    return this.f37_1.i();
  };
  protoOf(JsonArray).g37 = function (element) {
    return this.f37_1.b1(element);
  };
  protoOf(JsonArray).b1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.g37(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).h37 = function (elements) {
    return this.f37_1.c1(elements);
  };
  protoOf(JsonArray).c1 = function (elements) {
    return this.h37(elements);
  };
  protoOf(JsonArray).j = function (index) {
    return this.f37_1.j(index);
  };
  protoOf(JsonArray).l = function () {
    return this.f37_1.l();
  };
  protoOf(JsonArray).f = function () {
    return this.f37_1.f();
  };
  protoOf(JsonArray).m = function (index) {
    return this.f37_1.m(index);
  };
  protoOf(JsonArray).g2 = function (fromIndex, toIndex) {
    return this.f37_1.g2(fromIndex, toIndex);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.f37_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.f37_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.f37_1, ',', '[', ']');
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.p();
    var k = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.q();
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
    tmp0_apply.i6(_Char___init__impl__6a9atx(58));
    tmp0_apply.g7(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.i37_1 = content;
  }
  protoOf(JsonObject).o = function () {
    return this.i37_1.o();
  };
  protoOf(JsonObject).z1 = function () {
    return this.i37_1.z1();
  };
  protoOf(JsonObject).i = function () {
    return this.i37_1.i();
  };
  protoOf(JsonObject).a2 = function () {
    return this.i37_1.a2();
  };
  protoOf(JsonObject).y1n = function (key) {
    return this.i37_1.s1(key);
  };
  protoOf(JsonObject).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.y1n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).z1n = function (key) {
    return this.i37_1.y1(key);
  };
  protoOf(JsonObject).y1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.z1n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).l = function () {
    return this.i37_1.l();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.i37_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.i37_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.i37_1.o();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
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
    return this.j37();
  };
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.k37_1 = isString;
    this.l37_1 = coerceToInlineType;
    this.m37_1 = toString(body);
    if (!(this.l37_1 == null)) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.l37_1.k2k();
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
  protoOf(JsonLiteral).j37 = function () {
    return this.m37_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.k37_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.m37_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.m37_1;
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
    if (!(this.k37_1 === other.k37_1))
      return false;
    if (!(this.m37_1 === other.m37_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = this.k37_1 | 0;
    result = imul(31, result) + getStringHashCode(this.m37_1) | 0;
    return result;
  };
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.n37_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.o37_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  protoOf(JsonNull).j37 = function () {
    return this.n37_1;
  };
  protoOf(JsonNull).p37 = function () {
    return this.o37_1.q();
  };
  protoOf(JsonNull).h2u = function (typeParamsSerializers) {
    return this.p37();
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
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.j37());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toInt(_this__u8e3s4.j37());
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toLong(_this__u8e3s4.j37());
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp1_toFloat = _this__u8e3s4.j37();
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
    return toDouble(_this__u8e3s4.j37());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.j37();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toLongOrNull(_this__u8e3s4.j37());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.j37());
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
    $this$buildSerialDescriptor.g2j('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.g2j('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.g2j('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.g2j('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.g2j('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().q37_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().r37_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().s37_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().t37_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().u37_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.v37_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).s2i = function () {
    return this.v37_1;
  };
  protoOf(JsonElementSerializer).w37 = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.v2n(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.v2n(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.v2n(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).t2i = function (encoder, value) {
    return this.w37(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).u2i = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.e37();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.x37_1 = ListSerializer(JsonElementSerializer_getInstance()).s2i();
    this.y37_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).i2k = function () {
    return this.x37_1.i2k();
  };
  protoOf(JsonArrayDescriptor).j2k = function () {
    return this.x37_1.j2k();
  };
  protoOf(JsonArrayDescriptor).k2k = function () {
    return this.x37_1.k2k();
  };
  protoOf(JsonArrayDescriptor).e2k = function () {
    return this.x37_1.e2k();
  };
  protoOf(JsonArrayDescriptor).l2k = function () {
    return this.x37_1.l2k();
  };
  protoOf(JsonArrayDescriptor).m2k = function (index) {
    return this.x37_1.m2k(index);
  };
  protoOf(JsonArrayDescriptor).n2k = function (index) {
    return this.x37_1.n2k(index);
  };
  protoOf(JsonArrayDescriptor).o2k = function (name) {
    return this.x37_1.o2k(name);
  };
  protoOf(JsonArrayDescriptor).p2k = function (index) {
    return this.x37_1.p2k(index);
  };
  protoOf(JsonArrayDescriptor).q2k = function (index) {
    return this.x37_1.q2k(index);
  };
  protoOf(JsonArrayDescriptor).s2j = function () {
    return this.y37_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.u37_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).s2i = function () {
    return this.u37_1;
  };
  protoOf(JsonArraySerializer).z37 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).t2i(encoder, value);
  };
  protoOf(JsonArraySerializer).t2i = function (encoder, value) {
    return this.z37(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).u2i = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).u2i(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.a38_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).s2i();
    this.b38_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).i2k = function () {
    return this.a38_1.i2k();
  };
  protoOf(JsonObjectDescriptor).j2k = function () {
    return this.a38_1.j2k();
  };
  protoOf(JsonObjectDescriptor).k2k = function () {
    return this.a38_1.k2k();
  };
  protoOf(JsonObjectDescriptor).e2k = function () {
    return this.a38_1.e2k();
  };
  protoOf(JsonObjectDescriptor).l2k = function () {
    return this.a38_1.l2k();
  };
  protoOf(JsonObjectDescriptor).m2k = function (index) {
    return this.a38_1.m2k(index);
  };
  protoOf(JsonObjectDescriptor).n2k = function (index) {
    return this.a38_1.n2k(index);
  };
  protoOf(JsonObjectDescriptor).o2k = function (name) {
    return this.a38_1.o2k(name);
  };
  protoOf(JsonObjectDescriptor).p2k = function (index) {
    return this.a38_1.p2k(index);
  };
  protoOf(JsonObjectDescriptor).q2k = function (index) {
    return this.a38_1.q2k(index);
  };
  protoOf(JsonObjectDescriptor).s2j = function () {
    return this.b38_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.t37_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).s2i = function () {
    return this.t37_1;
  };
  protoOf(JsonObjectSerializer).c38 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).t2i(encoder, value);
  };
  protoOf(JsonObjectSerializer).t2i = function (encoder, value) {
    return this.c38(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).u2i = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).u2i(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.q37_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).s2i = function () {
    return this.q37_1;
  };
  protoOf(JsonPrimitiveSerializer).d38 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.v2n(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.v2n(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).t2i = function (encoder, value) {
    return this.d38(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).u2i = function (decoder) {
    var result = asJsonDecoder(decoder).e37();
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
    this.r37_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).s2i = function () {
    return this.r37_1;
  };
  protoOf(JsonNullSerializer).e38 = function (encoder, value) {
    verify(encoder);
    encoder.y2m();
  };
  protoOf(JsonNullSerializer).t2i = function (encoder, value) {
    return this.e38(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).u2i = function (decoder) {
    verify_0(decoder);
    if (decoder.p2l()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.q2l();
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
    this.s37_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).s2i = function () {
    return this.s37_1;
  };
  protoOf(JsonLiteralSerializer).f38 = function (encoder, value) {
    verify(encoder);
    if (value.k37_1) {
      return encoder.h2n(value.m37_1);
    }
    if (!(value.l37_1 == null)) {
      return encoder.j2n(value.l37_1).h2n(value.m37_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.d2n(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.m37_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.j2n(serializer_0(Companion_getInstance()).s2i());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.d2n(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.f2n(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.z2m(tmp3_safe_receiver);
    }
    encoder.h2n(value.m37_1);
  };
  protoOf(JsonLiteralSerializer).t2i = function (encoder, value) {
    return this.f38(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).u2i = function (decoder) {
    var result = asJsonDecoder(decoder).e37();
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
    tmp$ret$0 = $this.g38_1.q();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.g38_1 = lazy_0($deferred);
  }
  protoOf(defer$1).s2j = function () {
    return _get_original__l7ku1m(this).s2j();
  };
  protoOf(defer$1).l2k = function () {
    return _get_original__l7ku1m(this).l2k();
  };
  protoOf(defer$1).j2k = function () {
    return _get_original__l7ku1m(this).j2k();
  };
  protoOf(defer$1).p2k = function (index) {
    return _get_original__l7ku1m(this).p2k(index);
  };
  protoOf(defer$1).o2k = function (name) {
    return _get_original__l7ku1m(this).o2k(name);
  };
  protoOf(defer$1).m2k = function (index) {
    return _get_original__l7ku1m(this).m2k(index);
  };
  protoOf(defer$1).n2k = function (index) {
    return _get_original__l7ku1m(this).n2k(index);
  };
  protoOf(defer$1).q2k = function (index) {
    return _get_original__l7ku1m(this).q2k(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.h38_1 = writer;
    this.i38_1 = true;
  }
  protoOf(Composer).j38 = function () {
    this.i38_1 = true;
  };
  protoOf(Composer).k38 = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).l38 = function () {
    this.i38_1 = false;
  };
  protoOf(Composer).m38 = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).n38 = function (v) {
    return this.h38_1.o38(v);
  };
  protoOf(Composer).p38 = function (v) {
    return this.h38_1.q38(v);
  };
  protoOf(Composer).r38 = function (v) {
    return this.h38_1.q38(v.toString());
  };
  protoOf(Composer).s38 = function (v) {
    return this.h38_1.q38(v.toString());
  };
  protoOf(Composer).t38 = function (v) {
    return this.h38_1.u38(toLong_0(v));
  };
  protoOf(Composer).v38 = function (v) {
    return this.h38_1.u38(toLong_0(v));
  };
  protoOf(Composer).w38 = function (v) {
    return this.h38_1.u38(toLong_0(v));
  };
  protoOf(Composer).x38 = function (v) {
    return this.h38_1.u38(v);
  };
  protoOf(Composer).y38 = function (v) {
    return this.h38_1.q38(v.toString());
  };
  protoOf(Composer).z38 = function (value) {
    return this.h38_1.a39(value);
  };
  function Composer_0(sb, json) {
    return json.l35_1.u36_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.d39_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).w38 = function (v) {
    if (this.d39_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.z38(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.p38(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).x38 = function (v) {
    if (this.d39_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.z38(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.p38(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).t38 = function (v) {
    if (this.d39_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.z38(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.p38(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).v38 = function (v) {
    if (this.d39_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.z38(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.p38(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.g39_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).z38 = function (value) {
    if (this.g39_1) {
      protoOf(Composer).z38.call(this, value);
    } else {
      protoOf(Composer).p38.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.j39_1 = json;
    this.k39_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).j38 = function () {
    this.i38_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.k39_1;
    tmp0_this.k39_1 = tmp1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).k38 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.k39_1;
    tmp0_this.k39_1 = tmp1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).l38 = function () {
    this.i38_1 = false;
    this.p38('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.k39_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.p38(this.j39_1.l35_1.w36_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  protoOf(ComposerWithPrettyPrint).m38 = function () {
    this.n38(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.m39_1 = !descriptor.q2k(index) ? descriptor.n2k(index).e2k() : false;
    return $this.m39_1;
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
    tmp.l39_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.m39_1 = false;
  }
  protoOf(JsonElementMarker).a2s = function (index) {
    this.l39_1.a2s(index);
  };
  protoOf(JsonElementMarker).b2s = function () {
    return this.l39_1.b2s();
  };
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.n39('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.s2j() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.l2k() + "'.\n") + get_allowStructuredMapKeysHint());
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
  function InvalidFloatingPointEncoded(value, output) {
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
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndex$getJsonNameIndexSlowPath(json, _this__u8e3s4, name);
    var index = _this__u8e3s4.o2k(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.l35_1.b37_1)
      return index;
    return getJsonNameIndex$getJsonNameIndexSlowPath(json, _this__u8e3s4, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    Companion_getInstance_0();
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.s2j() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.p2k(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.l2k(), CLASS_getInstance()) ? json.l35_1.c37_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.p39(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.p39(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var builder = tmp$ret$0;
    var strategy = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.j2k();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp1_filterIsInstance = _this__u8e3s4.m2k(i);
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp1_filterIsInstance.f();
        while (tmp0_iterator.g()) {
          var element = tmp0_iterator.h();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.a(element);
          }
        }
        tmp$ret$1 = tmp0_filterIsInstanceTo;
        tmp$ret$2 = tmp$ret$1;
        var tmp1_safe_receiver = singleOrNull(tmp$ret$2);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q39_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.g()) {
            var element_0 = tmp0_iterator_0.h();
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
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp3_safe_receiver.r39(_this__u8e3s4, i, _this__u8e3s4.p2k(i)), i);
          tmp$ret$3 = Unit_getInstance();
        }
      }
       while (inductionVariable < last);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (builder.l()) {
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
    var tmp0_elvis_lhs = deserializationNamesMap($json, $this_getJsonNameIndex).y1($name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).s1(name);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildDeserializationNamesMap.p2k(index) + ' is already one of the names for property ' + ($this_buildDeserializationNamesMap.p2k(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.y2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.j2k();
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
      var tmp_1 = tmp$ret$0;
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.serializationNamesIndices.<anonymous>.<anonymous>' call
        var baseName = $this_serializationNamesIndices.p2k(tmp_2);
        tmp$ret$1 = $strategy.r39($this_serializationNamesIndices, tmp_2, baseName);
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
  function resize($this) {
    var newSize = imul($this.u39_1, 2);
    $this.s39_1 = copyOf($this.s39_1, newSize);
    $this.t39_1 = copyOf_0($this.t39_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(8), null);
    tmp.s39_1 = tmp$ret$0;
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
    tmp_0.t39_1 = tmp_3;
    this.u39_1 = -1;
  }
  protoOf(JsonPath).v39 = function (sd) {
    var tmp0_this = this;
    tmp0_this.u39_1 = tmp0_this.u39_1 + 1 | 0;
    var depth = tmp0_this.u39_1;
    if (depth === this.s39_1.length) {
      resize(this);
    }
    this.s39_1[depth] = sd;
  };
  protoOf(JsonPath).w39 = function (index) {
    this.t39_1[this.u39_1] = index;
  };
  protoOf(JsonPath).x39 = function (key) {
    var tmp;
    if (!(this.t39_1[this.u39_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.u39_1 = tmp0_this.u39_1 + 1 | 0;
      tmp = tmp0_this.u39_1 === this.s39_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.s39_1[this.u39_1] = key;
    this.t39_1[this.u39_1] = -2;
  };
  protoOf(JsonPath).y39 = function () {
    if (this.t39_1[this.u39_1] === -2) {
      this.s39_1[this.u39_1] = Tombstone_getInstance();
    }
  };
  protoOf(JsonPath).z39 = function () {
    var depth = this.u39_1;
    if (this.t39_1[depth] === -2) {
      this.t39_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.u39_1;
      tmp0_this.u39_1 = tmp1 - 1 | 0;
    }
    if (!(this.u39_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.u39_1;
      tmp2_this.u39_1 = tmp3 - 1 | 0;
    }
  };
  protoOf(JsonPath).a3a = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.h7('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.u39_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.s39_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.l2k(), LIST_getInstance())) {
            if (!(this.t39_1[index] === -1)) {
              tmp0_apply.h7('[');
              tmp0_apply.g7(this.t39_1[index]);
              tmp0_apply.h7(']');
            }
          } else {
            var idx = this.t39_1[index];
            if (idx >= 0) {
              tmp0_apply.h7('.');
              tmp0_apply.h7(element.p2k(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.h7('[');
            tmp0_apply.h7("'");
            tmp0_apply.g7(element);
            tmp0_apply.h7("'");
            tmp0_apply.h7(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  protoOf(JsonPath).toString = function () {
    return this.a3a();
  };
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.v2n(serializer, value);
  }
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.j3a_1.m3a(get_TC_BEGIN_OBJ());
    if ($this.j3a_1.n3a() === get_TC_COMMA()) {
      $this.j3a_1.n39('Unexpected leading comma');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.j3a_1.o3a()) {
      var key = $this.k3a_1 ? $this.j3a_1.q3a() : $this.j3a_1.p3a();
      $this.j3a_1.m3a(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.r3a();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.y2(key, element);
      lastToken = $this.j3a_1.s3a();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.j3a_1.n39('Expected end of the object or comma');
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.j3a_1.m3a(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.j3a_1.n39('Unexpected trailing comma');
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function readArray($this) {
    var lastToken = $this.j3a_1.s3a();
    if ($this.j3a_1.n3a() === get_TC_COMMA()) {
      $this.j3a_1.n39('Unexpected leading comma');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.j3a_1.o3a()) {
      var element = $this.r3a();
      result.a(element);
      lastToken = $this.j3a_1.s3a();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.j3a_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.x35_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          tmp0_require.n39(tmp$ret$1, tmp2_require);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.j3a_1.m3a(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.j3a_1.n39('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.k3a_1 ? true : !isString) {
      tmp = $this.j3a_1.q3a();
    } else {
      tmp = $this.j3a_1.p3a();
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
    this.o3b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).t3b = function ($this$$receiver, it, $completion) {
    var tmp = this.u3b($this$$receiver, it, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).v7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.t3b(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            this.r3b_1 = this.o3b_1.j3a_1.n3a();
            if (this.r3b_1 === get_TC_STRING()) {
              this.s3b_1 = readValue(this.o3b_1, true);
              this.xh_1 = 2;
              continue $sm;
            } else {
              if (this.r3b_1 === get_TC_OTHER()) {
                this.s3b_1 = readValue(this.o3b_1, false);
                this.xh_1 = 2;
                continue $sm;
              } else {
                if (this.r3b_1 === get_TC_BEGIN_OBJ()) {
                  this.xh_1 = 1;
                  suspendResult = readObject_0(this.p3b_1, this.o3b_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.r3b_1 === get_TC_BEGIN_LIST()) {
                    this.s3b_1 = readArray(this.o3b_1);
                    this.xh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.o3b_1.j3a_1.n39("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.s3b_1 = suspendResult;
            this.xh_1 = 2;
            continue $sm;
          case 2:
            return this.s3b_1;
          case 3:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 3) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).u3b = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.o3b_1, completion);
    i.p3b_1 = $this$$receiver;
    i.q3b_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.t3b($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b3b_1 = _this__u8e3s4;
    this.c3b_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 5;
            this.d3b_1 = this.b3b_1.j3a_1.m3a(get_TC_BEGIN_OBJ());
            if (this.b3b_1.j3a_1.n3a() === get_TC_COMMA()) {
              this.b3b_1.j3a_1.n39('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.e3b_1 = LinkedHashMap_init_$Create$();
            this.xh_1 = 1;
            continue $sm;
          case 1:
            if (!this.b3b_1.j3a_1.o3a()) {
              this.xh_1 = 4;
              continue $sm;
            }

            this.f3b_1 = this.b3b_1.k3a_1 ? this.b3b_1.j3a_1.q3a() : this.b3b_1.j3a_1.p3a();
            this.b3b_1.j3a_1.m3a(get_TC_COLON());
            ;
            this.xh_1 = 2;
            suspendResult = this.c3b_1.n7(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.e3b_1.y2(this.f3b_1, element);
            ;
            this.d3b_1 = this.b3b_1.j3a_1.s3a();
            var tmp0_subject = this.d3b_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.xh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.xh_1 = 4;
                continue $sm;
              } else {
                this.b3b_1.j3a_1.n39('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.xh_1 = 1;
            continue $sm;
          case 4:
            if (this.d3b_1 === get_TC_BEGIN_OBJ()) {
              this.b3b_1.j3a_1.m3a(get_TC_END_OBJ());
            } else if (this.d3b_1 === get_TC_COMMA()) {
              this.b3b_1.j3a_1.n39('Unexpected trailing comma');
            }

            return new JsonObject(this.e3b_1);
          case 5:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 5) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.j3a_1 = lexer;
    this.k3a_1 = configuration.s36_1;
    this.l3a_1 = 0;
  }
  protoOf(JsonTreeReader).r3a = function () {
    var token = this.j3a_1.n3a();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.l3a_1 = tmp0_this.l3a_1 + 1 | 0;
      if (tmp0_this.l3a_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.l3a_1 = tmp1_this.l3a_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.j3a_1.n39('Cannot begin reading element, unexpected token: ' + token);
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.i2k().f();
    while (tmp0_iterator.g()) {
      var annotation = tmp0_iterator.h();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.v3b_1;
    }
    return json.l35_1.z36_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.d37().l35_1.y36_1;
    }
    if (tmp) {
      return deserializer.u2i(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.s2i(), _this__u8e3s4.d37());
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.e37();
    var tmp1_cast = deserializer.s2i();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.s2j() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.z1n(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j37();
    var tmp2_elvis_lhs = deserializer.i2j(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.d37();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.s2i()).b1(classDiscriminator)) {
      var baseName = serializer.s2i().s2j();
      var actualName = actualSerializer.s2i().s2j();
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
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.l2k();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.sd() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.w3b_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.sd() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.j2k();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.p2k(i);
        if (name === $this.x3b_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.w3b_1 = useArrayPolymorphism;
    this.x3b_1 = discriminator;
  }
  protoOf(PolymorphismValidator).w32 = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).z32 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.s2i();
    checkKind_0(this, descriptor, actualClass);
    if (!this.w3b_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).a33 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).b33 = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.o39_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).y3b = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.o39_1;
    var value_0 = tmp0_getOrPut.y1(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(2);
      var answer = tmp$ret$0;
      tmp0_getOrPut.y2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.y2(tmp2_set, tmp3_set);
  };
  protoOf(DescriptorSchemaCache).p39 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.z3b(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.y3b(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).z3b = function (descriptor, key) {
    var tmp0_safe_receiver = this.o39_1.y1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.y1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.a3c_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.a3c_1 === unknownKey) {
      _this__u8e3s4.a3c_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.u2m(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.r35_1.n3a() === get_TC_COMMA()) {
      $this.r35_1.n39('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.t35_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.t35_1 === -1)) {
        hasComma = $this.r35_1.c3c();
      }
    } else {
      $this.r35_1.b3c(get_COLON());
    }
    var tmp;
    if ($this.r35_1.o3a()) {
      if (decodingKey) {
        if ($this.t35_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.r35_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.x35_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            tmp0_require.n39(tmp$ret$0, tmp2_require);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.r35_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.x35_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3_require.n39(tmp$ret$1, tmp5_require);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.t35_1 = tmp0_this.t35_1 + 1 | 0;
      tmp = tmp0_this.t35_1;
    } else {
      if (hasComma) {
        $this.r35_1.n39("Expected '}', but had ',' instead");
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.p35_1;
      var tmp1_tryCoerceValue = descriptor.n2k(index);
      var tmp;
      if (!tmp1_tryCoerceValue.e2k()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = $this.r35_1.d3c(true);
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(tmp1_tryCoerceValue.l2k(), ENUM_getInstance())) {
        var tmp_0;
        if (tmp1_tryCoerceValue.e2k()) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp$ret$2 = $this.r35_1.d3c(false);
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
        tmp$ret$3 = $this.r35_1.e3c($this.v35_1.s36_1);
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
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.r35_1.p3a();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.r35_1.c3c();
    while ($this.r35_1.o3a()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.r35_1.b3c(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.p35_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.v35_1.x36_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.r35_1.c3c();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.w35_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.a2s(index);
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
      $this.r35_1.n39('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.w35_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b2s();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.v35_1.r36_1 ? true : trySkip($this.u35_1, $this, key)) {
      $this.r35_1.g3c($this.v35_1.s36_1);
    } else {
      $this.r35_1.f3c(key);
    }
    return $this.r35_1.c3c();
  }
  function decodeListIndex($this) {
    var hasComma = $this.r35_1.c3c();
    var tmp;
    if ($this.r35_1.o3a()) {
      if (!($this.t35_1 === -1) ? !hasComma : false) {
        $this.r35_1.n39('Expected end of the array or comma');
      }
      var tmp0_this = $this;
      tmp0_this.t35_1 = tmp0_this.t35_1 + 1 | 0;
      tmp = tmp0_this.t35_1;
    } else {
      if (hasComma) {
        $this.r35_1.n39('Unexpected trailing comma');
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.v35_1.s36_1) {
      tmp = $this.r35_1.i3c();
    } else {
      tmp = $this.r35_1.h3c();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.p35_1 = json;
    this.q35_1 = mode;
    this.r35_1 = lexer;
    this.s35_1 = this.p35_1.w2j();
    this.t35_1 = -1;
    this.u35_1 = discriminatorHolder;
    this.v35_1 = this.p35_1.l35_1;
    this.w35_1 = this.v35_1.v36_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).d37 = function () {
    return this.p35_1;
  };
  protoOf(StreamingJsonDecoder).w2j = function () {
    return this.s35_1;
  };
  protoOf(StreamingJsonDecoder).e37 = function () {
    return (new JsonTreeReader(this.p35_1.l35_1, this.r35_1)).r3a();
  };
  protoOf(StreamingJsonDecoder).d2m = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.p35_1.l35_1.y36_1;
      }
      if (tmp) {
        return deserializer.u2i(this);
      }
      var discriminator = classDiscriminator(deserializer.s2i(), this.p35_1);
      var type = this.r35_1.j3c(discriminator, this.v35_1.s36_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.i2j(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.u35_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.u2i(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        throw new MissingFieldException(e.z2j_1, plus(e.message, ' at path: ') + this.r35_1.y35_1.a3a(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).e2m = function (descriptor) {
    var newMode = switchMode(this.p35_1, descriptor);
    this.r35_1.y35_1.v39(descriptor);
    this.r35_1.b3c(newMode.m3c_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.n4_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.p35_1, newMode, this.r35_1, descriptor, this.u35_1);
        break;
      default:
        var tmp_0;
        if (this.q35_1.equals(newMode) ? this.p35_1.l35_1.v36_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.p35_1, newMode, this.r35_1, descriptor, this.u35_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).f2m = function (descriptor) {
    if (this.p35_1.l35_1.r36_1 ? descriptor.j2k() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.r35_1.b3c(this.q35_1.n3c_1);
    this.r35_1.y35_1.z39();
  };
  protoOf(StreamingJsonDecoder).p2l = function () {
    var tmp;
    var tmp0_safe_receiver = this.w35_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m39_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.r35_1.o3c();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).q2l = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).q2m = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.q35_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.r35_1.y35_1.y39();
    }
    var value = protoOf(AbstractDecoder).q2m.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.r35_1.y35_1.x39(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).u2m = function (descriptor) {
    var tmp0_subject = this.q35_1;
    var tmp0 = tmp0_subject.n4_1;
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
    if (!this.q35_1.equals(WriteMode_MAP_getInstance())) {
      this.r35_1.y35_1.w39(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).r2l = function () {
    var tmp;
    if (this.v35_1.s36_1) {
      tmp = this.r35_1.q3c();
    } else {
      tmp = this.r35_1.p3c();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).s2l = function () {
    var value = this.r35_1.r3c();
    if (!value.equals(toLong_0(value.nh()))) {
      this.r35_1.n39("Failed to parse byte for input '" + toString(value) + "'");
    }
    return value.nh();
  };
  protoOf(StreamingJsonDecoder).t2l = function () {
    var value = this.r35_1.r3c();
    if (!value.equals(toLong_0(value.oh()))) {
      this.r35_1.n39("Failed to parse short for input '" + toString(value) + "'");
    }
    return value.oh();
  };
  protoOf(StreamingJsonDecoder).u2l = function () {
    var value = this.r35_1.r3c();
    if (!value.equals(toLong_0(value.u4()))) {
      this.r35_1.n39("Failed to parse int for input '" + toString(value) + "'");
    }
    return value.u4();
  };
  protoOf(StreamingJsonDecoder).v2l = function () {
    return this.r35_1.r3c();
  };
  protoOf(StreamingJsonDecoder).w2l = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.r35_1;
      var input = tmp0_parseString.q3a();
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
          tmp0_parseString.n39("Failed to parse type 'float' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.p35_1.l35_1.a37_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.r35_1, result);
  };
  protoOf(StreamingJsonDecoder).x2l = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.r35_1;
      var input = tmp0_parseString.q3a();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.n39("Failed to parse type 'double' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.p35_1.l35_1.a37_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.r35_1, result);
  };
  protoOf(StreamingJsonDecoder).y2l = function () {
    var string = this.r35_1.q3a();
    if (!(string.length === 1)) {
      this.r35_1.n39("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).z2l = function () {
    var tmp;
    if (this.v35_1.s36_1) {
      tmp = this.r35_1.i3c();
    } else {
      tmp = this.r35_1.p3a();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).b2m = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.r35_1, this.p35_1) : protoOf(AbstractDecoder).b2m.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).a2m = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.p35_1, this.z2l(), ' at path ' + this.r35_1.y35_1.a3a());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.s3c_1 = lexer;
    this.t3c_1 = json.w2j();
  }
  protoOf(JsonDecoderForUnsignedTypes).w2j = function () {
    return this.t3c_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).u2m = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(JsonDecoderForUnsignedTypes).u2l = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.s3c_1;
      var input = tmp0_parseString.q3a();
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
          tmp0_parseString.n39("Failed to parse type 'UInt' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).v2l = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.s3c_1;
      var input = tmp0_parseString.q3a();
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
          tmp0_parseString.n39("Failed to parse type 'ULong' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).s2l = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.s3c_1;
      var input = tmp0_parseString.q3a();
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
          tmp0_parseString.n39("Failed to parse type 'UByte' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).t2l = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.s3c_1;
      var input = tmp0_parseString.q3a();
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
          tmp0_parseString.n39("Failed to parse type 'UShort' for input '" + input + "'");
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
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.b3a_1.l38();
    $this.h2n(ensureNotNull($this.i3a_1));
    $this.b3a_1.n38(get_COLON());
    $this.b3a_1.m38();
    $this.h2n(descriptor.s2j());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.b3a_1 = composer;
    this.c3a_1 = json;
    this.d3a_1 = mode;
    this.e3a_1 = modeReuseCache;
    this.f3a_1 = this.c3a_1.w2j();
    this.g3a_1 = this.c3a_1.l35_1;
    this.h3a_1 = false;
    this.i3a_1 = null;
    var i = this.d3a_1.n4_1;
    if (!(this.e3a_1 == null)) {
      if (!(this.e3a_1[i] === null) ? true : !(this.e3a_1[i] === this)) {
        this.e3a_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).d37 = function () {
    return this.c3a_1;
  };
  protoOf(StreamingJsonEncoder).w2j = function () {
    return this.f3a_1;
  };
  protoOf(StreamingJsonEncoder).a2o = function (descriptor, index) {
    return this.g3a_1.q36_1;
  };
  protoOf(StreamingJsonEncoder).v2n = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.d37().l35_1.y36_1;
      }
      if (tmp) {
        serializer.t2i(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.s2i(), this.d37());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.s2i().l2k());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.i3a_1 = baseClassDiscriminator;
      actualSerializer.t2i(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).e2m = function (descriptor) {
    var newMode = switchMode(this.c3a_1, descriptor);
    if (!equals(new Char(newMode.m3c_1), new Char(get_INVALID()))) {
      this.b3a_1.n38(newMode.m3c_1);
      this.b3a_1.j38();
    }
    if (!(this.i3a_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.i3a_1 = null;
    }
    if (this.d3a_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.e3a_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.n4_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.b3a_1, this.c3a_1, newMode, this.e3a_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).f2m = function (descriptor) {
    if (!equals(new Char(this.d3a_1.n3c_1), new Char(get_INVALID()))) {
      this.b3a_1.k38();
      this.b3a_1.l38();
      this.b3a_1.n38(this.d3a_1.n3c_1);
    }
  };
  protoOf(StreamingJsonEncoder).w2m = function (descriptor, index) {
    var tmp0_subject = this.d3a_1;
    var tmp0 = tmp0_subject.n4_1;
    switch (tmp0) {
      case 1:
        if (!this.b3a_1.i38_1) {
          this.b3a_1.n38(get_COMMA());
        }

        this.b3a_1.l38();
        ;
        break;
      case 2:
        if (!this.b3a_1.i38_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.b3a_1.n38(get_COMMA());
            this.b3a_1.l38();
            tmp_0 = true;
          } else {
            this.b3a_1.n38(get_COLON());
            this.b3a_1.m38();
            tmp_0 = false;
          }
          tmp.h3a_1 = tmp_0;
        } else {
          this.h3a_1 = true;
          this.b3a_1.l38();
        }

        break;
      case 3:
        if (index === 0)
          this.h3a_1 = true;
        if (index === 1) {
          this.b3a_1.n38(get_COMMA());
          this.b3a_1.m38();
          this.h3a_1 = false;
        }

        break;
      default:
        if (!this.b3a_1.i38_1) {
          this.b3a_1.n38(get_COMMA());
        }

        this.b3a_1.l38();
        this.h2n(getJsonElementName(descriptor, this.c3a_1, index));
        this.b3a_1.n38(get_COLON());
        this.b3a_1.m38();
        ;
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).w2n = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.g3a_1.v36_1) {
      protoOf(AbstractEncoder).w2n.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).j2n = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.b3a_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.b3a_1;
      } else {
        tmp_0 = new ComposerForUnsignedNumbers(this.b3a_1.h38_1, this.h3a_1);
      }
      tmp$ret$0 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$0, this.c3a_1, this.d3a_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.b3a_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.b3a_1;
      } else {
        tmp_2 = new ComposerForUnquotedLiterals(this.b3a_1.h38_1, this.h3a_1);
      }
      tmp$ret$1 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.c3a_1, this.d3a_1, null);
    } else {
      tmp = protoOf(AbstractEncoder).j2n.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).y2m = function () {
    this.b3a_1.p38(get_NULL());
  };
  protoOf(StreamingJsonEncoder).z2m = function (value) {
    if (this.h3a_1) {
      this.h2n(value.toString());
    } else {
      this.b3a_1.y38(value);
    }
  };
  protoOf(StreamingJsonEncoder).a2n = function (value) {
    if (this.h3a_1) {
      this.h2n(value.toString());
    } else {
      this.b3a_1.t38(value);
    }
  };
  protoOf(StreamingJsonEncoder).b2n = function (value) {
    if (this.h3a_1) {
      this.h2n(value.toString());
    } else {
      this.b3a_1.v38(value);
    }
  };
  protoOf(StreamingJsonEncoder).c2n = function (value) {
    if (this.h3a_1) {
      this.h2n(value.toString());
    } else {
      this.b3a_1.w38(value);
    }
  };
  protoOf(StreamingJsonEncoder).d2n = function (value) {
    if (this.h3a_1) {
      this.h2n(value.toString());
    } else {
      this.b3a_1.x38(value);
    }
  };
  protoOf(StreamingJsonEncoder).e2n = function (value) {
    if (this.h3a_1) {
      this.h2n(value.toString());
    } else {
      this.b3a_1.r38(value);
    }
    if (!this.g3a_1.a37_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.b3a_1.h38_1));
    }
  };
  protoOf(StreamingJsonEncoder).f2n = function (value) {
    if (this.h3a_1) {
      this.h2n(value.toString());
    } else {
      this.b3a_1.s38(value);
    }
    if (!this.g3a_1.a37_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.b3a_1.h38_1));
    }
  };
  protoOf(StreamingJsonEncoder).g2n = function (value) {
    this.h2n(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).h2n = function (value) {
    return this.b3a_1.z38(value);
  };
  protoOf(StreamingJsonEncoder).i2n = function (enumDescriptor, index) {
    this.h2n(enumDescriptor.p2k(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.k2k() ? get_unsignedNumberDescriptors().b1(_this__u8e3s4) : false;
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.k2k() ? equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor()) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).s2i(), serializer_0(Companion_getInstance()).s2i(), serializer_2(Companion_getInstance_2()).s2i(), serializer_3(Companion_getInstance_3()).s2i()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
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
    _this__u8e3s4.i6(get_STRING());
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
          _this__u8e3s4.bf(value, lastPos, i);
          _this__u8e3s4.h7(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.bf(value, lastPos, value.length);
    } else {
      _this__u8e3s4.h7(value);
    }
    _this__u8e3s4.i6(get_STRING());
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
  function currentObject($this) {
    var tmp0_safe_receiver = $this.z2z();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.z3c(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.q() : tmp1_elvis_lhs;
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
    this.w3c_1 = json;
    this.x3c_1 = value;
    this.y3c_1 = this.d37().l35_1;
  }
  protoOf(AbstractJsonTreeDecoder).d37 = function () {
    return this.w3c_1;
  };
  protoOf(AbstractJsonTreeDecoder).q = function () {
    return this.x3c_1;
  };
  protoOf(AbstractJsonTreeDecoder).w2j = function () {
    return this.d37().w2j();
  };
  protoOf(AbstractJsonTreeDecoder).e37 = function () {
    return currentObject(this);
  };
  protoOf(AbstractJsonTreeDecoder).d2m = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).a30 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).e2m = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.l2k();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.d37();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.s2j() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.d37();
        var keyDescriptor = carrierDescriptor(descriptor.n2k(0), tmp0_selectMapMode.w2j());
        var keyKind = keyDescriptor.l2k();
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
          var tmp_4 = this.d37();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.s2j() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.l35_1.t36_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.d37();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.s2j() + ', but had ' + getKClassFromExpression(currentObject_0));
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
        var tmp_6 = this.d37();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.s2j() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        tmp = new JsonTreeDecoder(tmp_6, tmp$ret$6);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).f2m = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).p2l = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).a3d = function (tag) {
    var currentElement = this.z3c(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).b3d = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.d37(), this.a3d(tag).j37());
  };
  protoOf(AbstractJsonTreeDecoder).m30 = function (tag, enumDescriptor) {
    return this.b3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).c3d = function (tag) {
    return !(this.z3c(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).c30 = function (tag) {
    return this.c3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d3d = function (tag) {
    var value = this.a3d(tag);
    if (!this.d37().l35_1.s36_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.k37_1)
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
  protoOf(AbstractJsonTreeDecoder).d30 = function (tag) {
    return this.d3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e3d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.a3d(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().MIN_VALUE;
        if (result <= ByteCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
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
  protoOf(AbstractJsonTreeDecoder).e30 = function (tag) {
    return this.e3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f3d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.a3d(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().MIN_VALUE;
        if (result <= ShortCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
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
  protoOf(AbstractJsonTreeDecoder).f30 = function (tag) {
    return this.f3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g3d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.a3d(tag);
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
  protoOf(AbstractJsonTreeDecoder).g30 = function (tag) {
    return this.g3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h3d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.a3d(tag);
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
  protoOf(AbstractJsonTreeDecoder).h30 = function (tag) {
    return this.h3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i3d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.a3d(tag);
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
    var specialFp = this.d37().l35_1.a37_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).i30 = function (tag) {
    return this.i3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j3d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.a3d(tag);
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
    var specialFp = this.d37().l35_1.a37_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  protoOf(AbstractJsonTreeDecoder).j30 = function (tag) {
    return this.j3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k3d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.a3d(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.j37());
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
  protoOf(AbstractJsonTreeDecoder).k30 = function (tag) {
    return this.k3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l3d = function (tag) {
    var value = this.a3d(tag);
    if (!this.d37().l35_1.s36_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.k37_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.j37();
  };
  protoOf(AbstractJsonTreeDecoder).l30 = function (tag) {
    return this.l3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m3d = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.a3d(tag).j37()), this.d37()) : protoOf(NamedValueDecoder).n30.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).n30 = function (tag, inlineDescriptor) {
    return this.m3d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.d37();
      var tmp1_tryCoerceValue = descriptor.n2k(index);
      var tmp;
      if (!tmp1_tryCoerceValue.e2k()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.z3c(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(tmp1_tryCoerceValue.l2k(), ENUM_getInstance())) {
        var tmp_1;
        if (tmp1_tryCoerceValue.e2k()) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.z3c(tag);
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
        var tmp_3 = $this.z3c(tag);
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
        Companion_getInstance_0();
        if (enumIndex === -3) {
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
    $this.w3d_1 = (!$this.d37().l35_1.v36_1 ? !descriptor.q2k(index) : false) ? descriptor.n2k(index).e2k() : false;
    return $this.w3d_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.s3d_1 = value;
    this.t3d_1 = polyDiscriminator;
    this.u3d_1 = polyDescriptor;
    this.v3d_1 = 0;
    this.w3d_1 = false;
  }
  protoOf(JsonTreeDecoder).q = function () {
    return this.s3d_1;
  };
  protoOf(JsonTreeDecoder).u2m = function (descriptor) {
    while (this.v3d_1 < descriptor.j2k()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.v3d_1;
      tmp0_this.v3d_1 = tmp1 + 1 | 0;
      var name = this.u2z(descriptor, tmp1);
      var index = this.v3d_1 - 1 | 0;
      this.w3d_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.q();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).s1(name);
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.y3c_1.x36_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  protoOf(JsonTreeDecoder).p2l = function () {
    return !this.w3d_1 ? protoOf(AbstractJsonTreeDecoder).p2l.call(this) : false;
  };
  protoOf(JsonTreeDecoder).v2z = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.d37());
    var baseName = descriptor.p2k(index);
    if (strategy == null) {
      if (!this.y3c_1.b37_1)
        return baseName;
      if (this.q().z1().b1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.d37(), descriptor);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.q().z1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        tmp$ret$0 = deserializationNamesMap_0.y1(element) === index;
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
    var fallbackName = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r39(descriptor, index, baseName);
    var tmp2_elvis_lhs = fallbackName;
    return tmp2_elvis_lhs == null ? baseName : tmp2_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).z3c = function (tag) {
    return getValue(this.q(), tag);
  };
  protoOf(JsonTreeDecoder).e2m = function (descriptor) {
    if (descriptor === this.u3d_1)
      return this;
    return protoOf(AbstractJsonTreeDecoder).e2m.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).f2m = function (descriptor) {
    var tmp;
    if (this.y3c_1.r36_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.l2k();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var strategy = namingStrategy(descriptor, this.d37());
    var tmp_1;
    if (strategy == null ? !this.y3c_1.b37_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.d37(), descriptor).z1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.d37()).z3b(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.q().z1().f();
    while (tmp1_iterator.g()) {
      var key = tmp1_iterator.h();
      if (!names.b1(key) ? !(key === this.t3d_1) : false) {
        throw UnknownKeyException(key, this.q().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.c3e_1 = value;
    this.d3e_1 = this.c3e_1.i();
    this.e3e_1 = -1;
  }
  protoOf(JsonTreeListDecoder).q = function () {
    return this.c3e_1;
  };
  protoOf(JsonTreeListDecoder).v2z = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).z3c = function (tag) {
    return this.c3e_1.j(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).u2m = function (descriptor) {
    while (this.e3e_1 < (this.d3e_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.e3e_1;
      tmp0_this.e3e_1 = tmp1 + 1 | 0;
      return this.e3e_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.p3e_1 = value;
    this.q3e_1 = toList(this.p3e_1.z1());
    this.r3e_1 = imul(this.q3e_1.i(), 2);
    this.s3e_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).q = function () {
    return this.p3e_1;
  };
  protoOf(JsonTreeMapDecoder).v2z = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.q3e_1.j(i);
  };
  protoOf(JsonTreeMapDecoder).u2m = function (descriptor) {
    while (this.s3e_1 < (this.r3e_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.s3e_1;
      tmp0_this.s3e_1 = tmp1 + 1 | 0;
      return this.s3e_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  protoOf(JsonTreeMapDecoder).z3c = function (tag) {
    return (this.s3e_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.p3e_1, tag);
  };
  protoOf(JsonTreeMapDecoder).f2m = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.s2i())).d2m(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
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
    this.m3c_1 = begin;
    this.n3c_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.l2k();
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
          var keyDescriptor = carrierDescriptor(desc.n2k(0), _this__u8e3s4.w2j());
          var keyKind = keyDescriptor.l2k();
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
            if (_this__u8e3s4.l35_1.t36_1) {
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
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.l2k(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.k2k()) {
      tmp = carrierDescriptor(_this__u8e3s4.n2k(0), module_0);
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
  function appendEscape($this, lastPosition, current) {
    $this.t3e(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.t3e(lastPosition, currentPosition);
    var result = $this.a36_1.toString();
    $this.a36_1.cf(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.z35_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.z35_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.u3e(), $this.x35_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.v3e(currentPosition);
    if (currentPosition === -1) {
      $this.n39('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.u3e();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.u3e(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      $this.n39("Invalid escaped char '" + new Char(currentChar) + "'");
    }
    $this.a36_1.i6(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.x35_1 = startPos;
      $this.w3e();
      if (($this.x35_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.n39('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.x35_1);
    }
    $this.a36_1.i6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.n39("Invalid toHexChar char '" + new Char(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.v3e(start);
    if (current >= charSequenceLength($this.u3e()) ? true : current === -1) {
      $this.n39('EOF');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.u3e();
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
        $this.n39("Expected valid boolean literal prefix, but had '" + $this.q3a() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.u3e()) - current | 0) < literalSuffix.length) {
      $this.n39('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.u3e(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          $this.n39("Expected valid boolean literal prefix, but had '" + $this.q3a() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.x35_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.x35_1 = 0;
    this.y35_1 = new JsonPath();
    this.z35_1 = null;
    this.a36_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).w3e = function () {
  };
  protoOf(AbstractJsonLexer).x3e = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  protoOf(AbstractJsonLexer).b36 = function () {
    var nextToken = this.s3a();
    if (!(nextToken === 10)) {
      this.n39('Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.u3e(), this.x35_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).m3a = function (expected) {
    var token = this.s3a();
    if (!(token === expected)) {
      this.y3e(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).b3c = function (expected) {
    this.w3e();
    var source = this.u3e();
    var cpos = this.x35_1;
    $l$loop_0: while (true) {
      cpos = this.v3e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.x35_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.z3e(expected);
    }
    this.x35_1 = cpos;
    this.z3e(expected);
  };
  protoOf(AbstractJsonLexer).z3e = function (expected) {
    var tmp0_this = this;
    tmp0_this.x35_1 = tmp0_this.x35_1 - 1 | 0;
    if ((this.x35_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.q3a() === 'null' : false) {
      this.a3f("Expected string literal but 'null' literal was found", this.x35_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.y3e(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).y3e = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.x35_1 === charSequenceLength(this.u3e()) ? true : this.x35_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.u3e(), this.x35_1 - 1 | 0));
    this.n39('Expected ' + expected + ", but had '" + s + "' instead", this.x35_1 - 1 | 0);
  };
  protoOf(AbstractJsonLexer).n3a = function () {
    var source = this.u3e();
    var cpos = this.x35_1;
    $l$loop_0: while (true) {
      cpos = this.v3e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.x35_1 = cpos;
      return charToTokenClass(ch);
    }
    this.x35_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).d3c = function (doConsume) {
    var current = this.b3f();
    current = this.v3e(current);
    var len = charSequenceLength(this.u3e()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.u3e(), current + i | 0))))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.u3e(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.x35_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).o3c = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.d3c(doConsume) : $super.d3c.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).b3f = function () {
    var current = this.x35_1;
    $l$loop_0: while (true) {
      current = this.v3e(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.u3e(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.x35_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).e3c = function (isLenient) {
    var token = this.n3a();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.q3a();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.p3a();
    }
    var string = tmp;
    this.z35_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).c3f = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.u3e();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  protoOf(AbstractJsonLexer).p3a = function () {
    if (!(this.z35_1 == null)) {
      return takePeeked(this);
    }
    return this.h3c();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.v3e(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.n39('EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.t3e(lastPosition, currentPosition);
          currentPosition = this.v3e(currentPosition);
          if (currentPosition === -1) {
            this.n39('EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.c3f(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.x35_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).i3c = function () {
    var result = this.q3a();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.n39("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).q3a = function () {
    if (!(this.z35_1 == null)) {
      return takePeeked(this);
    }
    var current = this.b3f();
    if (current >= charSequenceLength(this.u3e()) ? true : current === -1) {
      this.n39('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.u3e(), current));
    if (token === 1) {
      return this.p3a();
    }
    if (!(token === 0)) {
      this.n39('Expected beginning of the string, but got ' + new Char(charSequenceGet(this.u3e(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.u3e(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.u3e())) {
        usedAppend = true;
        this.t3e(this.x35_1, current);
        var eof = this.v3e(current);
        if (eof === -1) {
          this.x35_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.c3f(this.x35_1, current);
    } else {
      tmp = decodedString(this, this.x35_1, current);
    }
    var result = tmp;
    this.x35_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).t3e = function (fromIndex, toIndex) {
    this.a36_1.bf(this.u3e(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).g3c = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.n3a();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.q3a();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.n3a();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.q3a();
        } else {
          this.h3c();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.a(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.x35_1, 'found ] instead of } at path: ' + this.y35_1, this.u3e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.x35_1, 'found } instead of ] at path: ' + this.y35_1, this.u3e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.n39('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.s3a();
      if (tokenStack.i() === 0)
        return Unit_getInstance();
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.u3e() + "', currentPosition=" + this.x35_1 + ')';
  };
  protoOf(AbstractJsonLexer).f3c = function (key) {
    var processed = this.c3f(0, this.x35_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.a3f("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).a3f = function (message, position, hint) {
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
    throw JsonDecodingException_0(position, message + ' at path: ' + this.y35_1.a3a() + hintMessage, this.u3e());
  };
  protoOf(AbstractJsonLexer).n39 = function (message, position, hint, $super) {
    position = position === VOID ? this.x35_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.a3f(message, position, hint) : $super.a3f.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).r3c = function () {
    var current = this.b3f();
    current = this.v3e(current);
    if (current >= charSequenceLength(this.u3e()) ? true : current === -1) {
      this.n39('EOF');
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.u3e(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.u3e())) {
        this.n39('EOF');
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
      var ch = charSequenceGet(this.u3e(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.n39("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.u3e()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.n39("Unexpected symbol '" + new Char(ch) + "' in numeric literal");
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.l6(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.n6(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.u(new Long(0, 0)) > 0) {
        this.n39('Numeric value overflow');
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.n39('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.n39('EOF');
      }
      if (!equals(new Char(charSequenceGet(this.u3e(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.n39('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.x35_1 = current;
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else {
      var tmp_1 = accumulator;
      Companion_getInstance_4();
      if (!tmp_1.equals(new Long(0, -2147483648))) {
        tmp_0 = accumulator.j6();
      } else {
        this.n39('Numeric value overflow');
      }
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).p3c = function () {
    return consumeBoolean(this, this.b3f());
  };
  protoOf(AbstractJsonLexer).q3c = function () {
    var current = this.b3f();
    if (current === charSequenceLength(this.u3e())) {
      this.n39('EOF');
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.u3e(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.x35_1 === charSequenceLength(this.u3e())) {
        this.n39('EOF');
      }
      if (!equals(new Char(charSequenceGet(this.u3e(), this.x35_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.n39('Expected closing quotation mark');
      }
      var tmp0_this = this;
      tmp0_this.x35_1 = tmp0_this.x35_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().e3f_1;
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
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().d3f_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
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
      $this.d3f_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.e3f_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.d3f_1 = charArray(117);
    this.e3f_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.j3f_1 = source;
  }
  protoOf(StringJsonLexer).u3e = function () {
    return this.j3f_1;
  };
  protoOf(StringJsonLexer).v3e = function (position) {
    return position < this.j3f_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).s3a = function () {
    var source = this.j3f_1;
    $l$loop: while (!(this.x35_1 === -1) ? this.x35_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.x35_1;
      tmp0_this.x35_1 = tmp1 + 1 | 0;
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
  protoOf(StringJsonLexer).c3c = function () {
    var current = this.b3f();
    if (current === this.j3f_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.j3f_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.x35_1 = tmp0_this.x35_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).o3a = function () {
    var current = this.x35_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.j3f_1.length) {
      var c = charSequenceGet(this.j3f_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.x35_1 = current;
      return this.x3e(c);
    }
    this.x35_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).b3f = function () {
    var current = this.x35_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.j3f_1.length) {
      var c = charSequenceGet(this.j3f_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.x35_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).b3c = function (expected) {
    if (this.x35_1 === -1) {
      this.z3e(expected);
    }
    var source = this.j3f_1;
    $l$loop: while (this.x35_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.x35_1;
      tmp0_this.x35_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.z3e(expected);
    }
    this.z3e(expected);
  };
  protoOf(StringJsonLexer).h3c = function () {
    this.b3c(get_STRING());
    var current = this.x35_1;
    var closingQuote = indexOf(this.j3f_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.y3e(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.j3f_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.j3f_1, this.x35_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.x35_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.j3f_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  protoOf(StringJsonLexer).j3c = function (keyToMatch, isLenient) {
    var positionSnapshot = this.x35_1;
    try {
      if (!(this.s3a() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.h3c() : this.i3c();
      if (firstKey === keyToMatch) {
        if (!(this.s3a() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.p3a() : this.i3c();
        return result;
      }
      return null;
    }finally {
      this.x35_1 = positionSnapshot;
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.n35_1;
  }
  function JsonToStringWriter() {
    this.o35_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).u38 = function (value) {
    this.o35_1.g7(value);
  };
  protoOf(JsonToStringWriter).o38 = function (char) {
    this.o35_1.i6(char);
  };
  protoOf(JsonToStringWriter).q38 = function (text) {
    this.o35_1.h7(text);
  };
  protoOf(JsonToStringWriter).a39 = function (text) {
    printQuoted(this.o35_1, text);
  };
  protoOf(JsonToStringWriter).fp = function () {
    this.o35_1.df();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.o35_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).e2k = get_isNullable;
  protoOf(defer$1).k2k = get_isInline;
  protoOf(defer$1).i2k = get_annotations;
  protoOf(PolymorphismValidator).y32 = contextual;
  protoOf(StreamingJsonDecoder).r2m = decodeSerializableElement$default;
  protoOf(StreamingJsonDecoder).t2m = decodeSequentially;
  protoOf(StreamingJsonDecoder).v2m = decodeCollectionSize;
  protoOf(JsonDecoderForUnsignedTypes).d2m = decodeSerializableValue;
  protoOf(JsonDecoderForUnsignedTypes).r2m = decodeSerializableElement$default;
  protoOf(JsonDecoderForUnsignedTypes).t2m = decodeSequentially;
  protoOf(JsonDecoderForUnsignedTypes).v2m = decodeCollectionSize;
  protoOf(StreamingJsonEncoder).y2n = encodeNotNullMark;
  protoOf(StreamingJsonEncoder).z2n = beginCollection;
  protoOf(StreamingJsonEncoder).x2n = encodeNullableSerializableValue;
  protoOf(AbstractJsonTreeDecoder).r2m = decodeSerializableElement$default;
  protoOf(AbstractJsonTreeDecoder).t2m = decodeSequentially;
  protoOf(AbstractJsonTreeDecoder).v2m = decodeCollectionSize;
  protoOf(JsonTreeDecoder).r2m = decodeSerializableElement$default;
  protoOf(JsonTreeDecoder).t2m = decodeSequentially;
  protoOf(JsonTreeDecoder).v2m = decodeCollectionSize;
  protoOf(JsonTreeListDecoder).r2m = decodeSerializableElement$default;
  protoOf(JsonTreeListDecoder).t2m = decodeSequentially;
  protoOf(JsonTreeListDecoder).v2m = decodeCollectionSize;
  protoOf(JsonTreeMapDecoder).r2m = decodeSerializableElement$default;
  protoOf(JsonTreeMapDecoder).t2m = decodeSequentially;
  protoOf(JsonTreeMapDecoder).v2m = decodeCollectionSize;
  //endregion
  //region block: init
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
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map
