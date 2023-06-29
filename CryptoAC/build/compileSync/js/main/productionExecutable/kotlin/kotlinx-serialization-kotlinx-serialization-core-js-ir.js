(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.sa;
  var interfaceMeta = kotlin_kotlin.$_$.v9;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var asList = kotlin_kotlin.$_$.k5;
  var objectCreate = kotlin_kotlin.$_$.qa;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.h4;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var emptyList = kotlin_kotlin.$_$.f6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.df;
  var classMeta = kotlin_kotlin.$_$.k9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.mb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s9;
  var THROW_CCE = kotlin_kotlin.$_$.he;
  var Entry = kotlin_kotlin.$_$.b5;
  var isInterface = kotlin_kotlin.$_$.ea;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var zip = kotlin_kotlin.$_$.i8;
  var toMap = kotlin_kotlin.$_$.b8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var mapCapacity = kotlin_kotlin.$_$.f7;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var Map = kotlin_kotlin.$_$.c5;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.n1;
  var IllegalArgumentException = kotlin_kotlin.$_$.yd;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var KClass = kotlin_kotlin.$_$.jb;
  var Triple = kotlin_kotlin.$_$.je;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.ee;
  var LinkedHashMap = kotlin_kotlin.$_$.y4;
  var MutableMap = kotlin_kotlin.$_$.f5;
  var HashMap = kotlin_kotlin.$_$.w4;
  var LinkedHashSet = kotlin_kotlin.$_$.z4;
  var MutableSet = kotlin_kotlin.$_$.g5;
  var Set = kotlin_kotlin.$_$.h5;
  var HashSet = kotlin_kotlin.$_$.x4;
  var ArrayList = kotlin_kotlin.$_$.u4;
  var MutableList = kotlin_kotlin.$_$.d5;
  var List = kotlin_kotlin.$_$.a5;
  var Collection = kotlin_kotlin.$_$.v4;
  var copyToArray = kotlin_kotlin.$_$.c6;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o2;
  var isObject = kotlin_kotlin.$_$.ha;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n2;
  var Result = kotlin_kotlin.$_$.fe;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var equals = kotlin_kotlin.$_$.n9;
  var getStringHashCode = kotlin_kotlin.$_$.t9;
  var isBlank = kotlin_kotlin.$_$.dc;
  var toList = kotlin_kotlin.$_$.z7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.w7;
  var toBooleanArray = kotlin_kotlin.$_$.v7;
  var withIndex = kotlin_kotlin.$_$.h8;
  var to = kotlin_kotlin.$_$.kf;
  var lazy_0 = kotlin_kotlin.$_$.ef;
  var contentEquals = kotlin_kotlin.$_$.o5;
  var until = kotlin_kotlin.$_$.ib;
  var joinToString = kotlin_kotlin.$_$.u6;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var Long = kotlin_kotlin.$_$.ae;
  var Char = kotlin_kotlin.$_$.rd;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.c2;
  var Duration = kotlin_kotlin.$_$.qd;
  var Companion_getInstance = kotlin_kotlin.$_$.l4;
  var toIntOrNull = kotlin_kotlin.$_$.ad;
  var hashCode = kotlin_kotlin.$_$.u9;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var isArray = kotlin_kotlin.$_$.w9;
  var arrayIterator = kotlin_kotlin.$_$.c9;
  var step = kotlin_kotlin.$_$.hb;
  var getValue = kotlin_kotlin.$_$.p6;
  var longArray = kotlin_kotlin.$_$.la;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.n4;
  var get_lastIndex = kotlin_kotlin.$_$.x6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.we;
  var indexOf = kotlin_kotlin.$_$.r6;
  var contentToString = kotlin_kotlin.$_$.s5;
  var fillArrayVal = kotlin_kotlin.$_$.p9;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var KTypeParameter = kotlin_kotlin.$_$.nb;
  var booleanArray = kotlin_kotlin.$_$.d9;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var contentHashCode = kotlin_kotlin.$_$.r5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.m4;
  var isCharArray = kotlin_kotlin.$_$.z9;
  var charArray = kotlin_kotlin.$_$.g9;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.d4;
  var isDoubleArray = kotlin_kotlin.$_$.ba;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.e4;
  var isFloatArray = kotlin_kotlin.$_$.ca;
  var isLongArray = kotlin_kotlin.$_$.fa;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.r4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.o3;
  var ULongArray = kotlin_kotlin.$_$.oe;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.k3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.m3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i3;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.f4;
  var isIntArray = kotlin_kotlin.$_$.da;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.q4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.f3;
  var UIntArray = kotlin_kotlin.$_$.me;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.b3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.y2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.d3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.z2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.g4;
  var isShortArray = kotlin_kotlin.$_$.ia;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.s4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.x3;
  var UShortArray = kotlin_kotlin.$_$.qe;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.t3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.v3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r3;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.c4;
  var isByteArray = kotlin_kotlin.$_$.y9;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.p4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.w2;
  var UByteArray = kotlin_kotlin.$_$.ke;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.t2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.p2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.u2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.q2;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.b4;
  var isBooleanArray = kotlin_kotlin.$_$.x9;
  var coerceAtLeast = kotlin_kotlin.$_$.bb;
  var copyOf = kotlin_kotlin.$_$.w5;
  var copyOf_0 = kotlin_kotlin.$_$.y5;
  var copyOf_1 = kotlin_kotlin.$_$.z5;
  var copyOf_2 = kotlin_kotlin.$_$.u5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.p3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.l3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.n3;
  var copyOf_3 = kotlin_kotlin.$_$.b6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.g3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.c3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.e3;
  var copyOf_4 = kotlin_kotlin.$_$.t5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.y3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.u3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.w3;
  var copyOf_5 = kotlin_kotlin.$_$.x5;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.x2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.s2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.v2;
  var copyOf_6 = kotlin_kotlin.$_$.v5;
  var Unit = kotlin_kotlin.$_$.se;
  var trimIndent = kotlin_kotlin.$_$.ld;
  var equals_0 = kotlin_kotlin.$_$.yb;
  var charSequenceLength = kotlin_kotlin.$_$.i9;
  var charSequenceGet = kotlin_kotlin.$_$.h9;
  var toString_0 = kotlin_kotlin.$_$.k2;
  var titlecase = kotlin_kotlin.$_$.vc;
  var isLowerCase = kotlin_kotlin.$_$.gc;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.j4;
  var ULong = kotlin_kotlin.$_$.pe;
  var UInt = kotlin_kotlin.$_$.ne;
  var UShort = kotlin_kotlin.$_$.re;
  var UByte = kotlin_kotlin.$_$.le;
  var mapOf = kotlin_kotlin.$_$.g7;
  var lastOrNull = kotlin_kotlin.$_$.a7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.y6;
  var asSequence = kotlin_kotlin.$_$.l5;
  var get_js = kotlin_kotlin.$_$.ka;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.t6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var get_indices_0 = kotlin_kotlin.$_$.s6;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.o4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.xe;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(StringFormat, 'StringFormat', interfaceMeta);
  setMetadataFor(BinaryFormat, 'BinaryFormat', interfaceMeta);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(elementNames$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.u2i(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.q2m(descriptor, index, deserializer, previousValue) : $super.q2m.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.e2m(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.t2i(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.s2i().e2k();
    if (isNullabilitySupported) {
      return this.v2n(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.y2m();
    } else {
      this.y2n();
      this.v2n(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(EnumSerializer, 'EnumSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(EnumDescriptor, 'EnumDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicModuleBuilder, 'PolymorphicModuleBuilder', classMeta);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.w32(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializersModuleBuilder, 'SerializersModuleBuilder', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', classMeta, IllegalArgumentException);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.w2i_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.g2j('type', serializer_2(StringCompanionObject_getInstance()).s2i());
      $this$buildSerialDescriptor.g2j('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.v2i_1.sd() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.a2j_1 = this$0.w2i_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.v2i_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.v2i_1 = baseClass;
    this.w2i_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.x2i_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).h2j = function () {
    return this.v2i_1;
  };
  protoOf(PolymorphicSerializer).s2i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.x2i_1.q();
    return tmp$ret$0;
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.v2i_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.j2j(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.h2j());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.i2j(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.h2j());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.s2i();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.l2j_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp0_forEach = this$0.o2j_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_forEach.o().f();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$1 = element.p();
        var name = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$2 = element.q();
        var serializer = tmp$ret$2;
        $this$buildSerialDescriptor.g2j(name, serializer.s2i());
      }
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.g2j('type', serializer_2(StringCompanionObject_getInstance()).s2i());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.k2j_1.sd() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.g2j('value', elementDescriptor);
      $this$buildSerialDescriptor.a2j_1 = this$0.l2j_1;
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function _no_name_provided__qut3iv($tmp0_groupingBy) {
    this.p2j_1 = $tmp0_groupingBy;
  }
  protoOf(_no_name_provided__qut3iv).q2j = function () {
    return this.p2j_1.f();
  };
  protoOf(_no_name_provided__qut3iv).r2j = function (element) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    tmp$ret$0 = element.q().s2i().s2j();
    return tmp$ret$0;
  };
  protoOf(_no_name_provided__qut3iv).t2j = function (element) {
    return this.r2j((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.k2j_1 = baseClass;
    this.l2j_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.m2j_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.k2j_1.sd() + ' should be marked @Serializable');
    }
    this.n2j_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.aggregate' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.groupingBy' call
    var tmp0_groupingBy = this.n2j_1.o();
    tmp$ret$0 = new _no_name_provided__qut3iv(tmp0_groupingBy);
    var tmp4_aggregate = tmp$ret$0;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.aggregateTo' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    var tmp3_aggregateTo = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.iterator' call
    var tmp1_iterator = tmp4_aggregate.q2j();
    tmp$ret$2 = tmp1_iterator;
    var tmp0_iterator = tmp$ret$2;
    while (tmp0_iterator.g()) {
      var e = tmp0_iterator.h();
      var key = tmp4_aggregate.t2j(e);
      var accumulator = tmp3_aggregateTo.y1(key);
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      var tmp5__anonymous__kpxxpo = accumulator == null ? !tmp3_aggregateTo.s1(key) : false;
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var tmp0_error = "Multiple sealed subclasses of '" + this.k2j_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.p() + "', '" + e.p() + "'");
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
      tmp$ret$3 = e;
      var tmp2_set = tmp$ret$3;
      tmp3_aggregateTo.y2(key, tmp2_set);
    }
    tmp$ret$4 = tmp3_aggregateTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp8_mapValues = tmp$ret$5;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp7_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp8_mapValues.i()));
    var tmp$ret$8;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp6_associateByTo = tmp8_mapValues.o();
    var tmp0_iterator_0 = tmp6_associateByTo.f();
    while (tmp0_iterator_0.g()) {
      var element = tmp0_iterator_0.h();
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$6 = element.p();
      var tmp_2 = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      tmp$ret$7 = element.q().q();
      tmp7_mapValuesTo.y2(tmp_2, tmp$ret$7);
    }
    tmp$ret$8 = tmp7_mapValuesTo;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp_1.o2j_1 = tmp$ret$10;
  }
  protoOf(SealedClassSerializer).h2j = function () {
    return this.k2j_1;
  };
  protoOf(SealedClassSerializer).s2i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.m2j_1.q();
    return tmp$ret$0;
  };
  protoOf(SealedClassSerializer).i2j = function (decoder, klassName) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    var tmp0_get = this.o2j_1;
    tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).y1(klassName);
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).i2j.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).j2j = function (encoder, value) {
    var tmp0_elvis_lhs = this.n2j_1.y1(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).j2j.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, SerializationStrategy) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.s2i();
    }, null);
  }
  function StringFormat() {
  }
  function BinaryFormat() {
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.i() === 1 ? "Field '" + missingFields.j(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    captureStack(this, MissingFieldException);
    this.z2j_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.f();
      while (tmp0_iterator.g()) {
        var item = tmp0_iterator.h();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        tmp$ret$0 = serializer(_this__u8e3s4, item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp1_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.f();
      while (tmp0_iterator_0.g()) {
        var item_0 = tmp0_iterator_0.h();
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$3 = tmp_0;
        tmp1_mapTo.a(tmp$ret$3);
      }
      tmp$ret$4 = tmp1_mapTo;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, types, serializers) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, types, serializers);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, typeArguments, serializers) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.j(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.j(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.j(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.j(0), serializers.j(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.j(0), serializers.j(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.j(0), serializers.j(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.j(0), serializers.j(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.j(0), serializers.j(1), serializers.j(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = typeArguments.j(0).ee();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.j(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.ge();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = type.fe();
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.g6_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_requireNotNull == null) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.l()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      var cachedResult = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (failOnMissingTypeArgSerializer) {
        var tmp$ret$5;
        // Inline function 'kotlin.Result.getOrNull' call
        var tmp_1;
        if (_Result___get_isFailure__impl__jpiriv(cachedResult)) {
          tmp_1 = null;
        } else {
          var tmp_2 = _Result___get_value__impl__bjfvqg(cachedResult);
          tmp_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        }
        tmp$ret$5 = tmp_1;
        tmp_0 = tmp$ret$5;
      } else {
        var tmp$ret$6;
        // Inline function 'kotlin.getOrElse' call
        // Inline function 'kotlin.contracts.contract' call
        var exception = Result__exceptionOrNull_impl_p6xea9(cachedResult);
        var tmp_3;
        if (exception == null) {
          var tmp_4 = _Result___get_value__impl__bjfvqg(cachedResult);
          tmp_3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        } else {
          return null;
        }
        tmp$ret$6 = tmp_3;
        tmp_0 = tmp$ret$6;
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    var tmp0_safe_receiver = cachedSerializer;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var tmp_5;
    if (typeArguments.l()) {
      tmp_5 = _this__u8e3s4.b2k(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp1_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, typeArguments, serializers);
      tmp_5 = tmp2_elvis_lhs == null ? _this__u8e3s4.a2k(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_5;
    var tmp3_safe_receiver = contextualSerializer;
    var tmp_7;
    if (tmp3_safe_receiver == null) {
      tmp_7 = null;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$8 = (!(tmp3_safe_receiver == null) ? isInterface(tmp3_safe_receiver, KSerializer) : false) ? tmp3_safe_receiver : THROW_CCE();
      tmp_7 = tmp$ret$8;
    }
    var tmp4_safe_receiver = tmp_7;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(type) {
    return serializer(EmptySerializersModule_0(), type);
  }
  function serializer_1(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().c2k(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$0 = (!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, KSerializer) : false) ? tmp0_safe_receiver : THROW_CCE();
        tmp_0 = tmp$ret$0;
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().c2k(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().d2k(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().d2k(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, types, serializers);
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, types, serializers);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (properties_initialized_SerializersCache_kt_q8kf25) {
    } else {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.s2i().e2k()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_2(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.f2k_1 = original;
    this.g2k_1 = kClass;
    this.h2k_1 = this.f2k_1.s2j() + '<' + this.g2k_1.sd() + '>';
  }
  protoOf(ContextDescriptor).i2k = function () {
    return this.f2k_1.i2k();
  };
  protoOf(ContextDescriptor).j2k = function () {
    return this.f2k_1.j2k();
  };
  protoOf(ContextDescriptor).k2k = function () {
    return this.f2k_1.k2k();
  };
  protoOf(ContextDescriptor).e2k = function () {
    return this.f2k_1.e2k();
  };
  protoOf(ContextDescriptor).l2k = function () {
    return this.f2k_1.l2k();
  };
  protoOf(ContextDescriptor).m2k = function (index) {
    return this.f2k_1.m2k(index);
  };
  protoOf(ContextDescriptor).n2k = function (index) {
    return this.f2k_1.n2k(index);
  };
  protoOf(ContextDescriptor).o2k = function (name) {
    return this.f2k_1.o2k(name);
  };
  protoOf(ContextDescriptor).p2k = function (index) {
    return this.f2k_1.p2k(index);
  };
  protoOf(ContextDescriptor).q2k = function (index) {
    return this.f2k_1.q2k(index);
  };
  protoOf(ContextDescriptor).s2j = function () {
    return this.h2k_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.f2k_1, another.f2k_1) ? another.g2k_1.equals(this.g2k_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.g2k_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.h2k_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.g2k_1 + ', original: ' + this.f2k_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.b2k(tmp0_safe_receiver);
      tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.s2i();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.g2k_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.r2k_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv_0(_this__u8e3s4);
    return tmp$ret$0;
  }
  function get_elementNames(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv_1(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.v2k_1 = $this_elementDescriptors;
    this.u2k_1 = $this_elementDescriptors.j2k();
  }
  protoOf(elementDescriptors$1$1).g = function () {
    return this.u2k_1 > 0;
  };
  protoOf(elementDescriptors$1$1).h = function () {
    var tmp = this.v2k_1.j2k();
    var tmp0_this = this;
    var tmp1 = tmp0_this.u2k_1;
    tmp0_this.u2k_1 = tmp1 - 1 | 0;
    return this.v2k_1.n2k(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementDescriptors) {
    this.w2k_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv_0).f = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.w2k_1);
    return tmp$ret$0;
  };
  function elementNames$1$1($this_elementNames) {
    this.y2k_1 = $this_elementNames;
    this.x2k_1 = $this_elementNames.j2k();
  }
  protoOf(elementNames$1$1).g = function () {
    return this.x2k_1 > 0;
  };
  protoOf(elementNames$1$1).h = function () {
    var tmp = this.y2k_1.j2k();
    var tmp0_this = this;
    var tmp1 = tmp0_this.x2k_1;
    tmp0_this.x2k_1 = tmp1 - 1 | 0;
    return this.y2k_1.p2k(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_1($this_elementNames) {
    this.z2k_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_1).f = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    tmp$ret$0 = new elementNames$1$1(this.z2k_1);
    return tmp$ret$0;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.b2j_1.i(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.y2i_1 = serialName;
    this.z2i_1 = false;
    this.a2j_1 = emptyList();
    this.b2j_1 = ArrayList_init_$Create$_0();
    this.c2j_1 = HashSet_init_$Create$();
    this.d2j_1 = ArrayList_init_$Create$_0();
    this.e2j_1 = ArrayList_init_$Create$_0();
    this.f2j_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).a2l = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.c2j_1.a(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered in " + this.y2i_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.b2j_1;
    tmp1_plusAssign.a(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.d2j_1;
    tmp2_plusAssign.a(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.e2j_1;
    tmp3_plusAssign.a(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.f2j_1;
    tmp4_plusAssign.a(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).g2j = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.a2l(elementName, descriptor, annotations, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.a2l.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.b2j_1.i(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.m2l_1.q();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.l2l_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.p2k(it) + ': ' + this$0.n2k(it).s2j();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.b2l_1 = serialName;
    this.c2l_1 = kind;
    this.d2l_1 = elementsCount;
    this.e2l_1 = builder.a2j_1;
    this.f2l_1 = toHashSet(builder.b2j_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.b2j_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.g2l_1 = tmp$ret$0;
    this.h2l_1 = compactArray(builder.d2j_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.e2j_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.i2l_1 = tmp$ret$1;
    this.j2l_1 = toBooleanArray(builder.f2j_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = withIndex(this.g2l_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.m2_1, item.l2_1);
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.k2l_1 = toMap(tmp$ret$4);
    this.l2l_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.m2l_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).s2j = function () {
    return this.b2l_1;
  };
  protoOf(SerialDescriptorImpl).l2k = function () {
    return this.c2l_1;
  };
  protoOf(SerialDescriptorImpl).j2k = function () {
    return this.d2l_1;
  };
  protoOf(SerialDescriptorImpl).i2k = function () {
    return this.e2l_1;
  };
  protoOf(SerialDescriptorImpl).n2l = function () {
    return this.f2l_1;
  };
  protoOf(SerialDescriptorImpl).p2k = function (index) {
    return getChecked(this.g2l_1, index);
  };
  protoOf(SerialDescriptorImpl).o2k = function (name) {
    var tmp0_elvis_lhs = this.k2l_1.y1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).m2k = function (index) {
    return getChecked(this.i2l_1, index);
  };
  protoOf(SerialDescriptorImpl).n2k = function (index) {
    return getChecked(this.h2l_1, index);
  };
  protoOf(SerialDescriptorImpl).q2k = function (index) {
    return getChecked_0(this.j2l_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.s2j() === other.s2j())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.l2l_1, tmp0__anonymous__q1qw7t.l2l_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.j2k() === other.j2k())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.j2k();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.n2k(index).s2j() === other.n2k(index).s2j())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.n2k(index).l2k(), other.n2k(index).l2k())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.d2l_1);
    var tmp_0 = this.b2l_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).sd());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).o2l = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).p2l = function () {
    return true;
  };
  protoOf(AbstractDecoder).q2l = function () {
    return null;
  };
  protoOf(AbstractDecoder).r2l = function () {
    var tmp = this.o2l();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).s2l = function () {
    var tmp = this.o2l();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).t2l = function () {
    var tmp = this.o2l();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).u2l = function () {
    var tmp = this.o2l();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).v2l = function () {
    var tmp = this.o2l();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w2l = function () {
    var tmp = this.o2l();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x2l = function () {
    var tmp = this.o2l();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).y2l = function () {
    var tmp = this.o2l();
    return tmp instanceof Char ? tmp.h6_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).z2l = function () {
    var tmp = this.o2l();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a2m = function (enumDescriptor) {
    var tmp = this.o2l();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).b2m = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).c2m = function (deserializer, previousValue) {
    return this.d2m(deserializer);
  };
  protoOf(AbstractDecoder).e2m = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).f2m = function (descriptor) {
  };
  protoOf(AbstractDecoder).g2m = function (descriptor, index) {
    return this.r2l();
  };
  protoOf(AbstractDecoder).h2m = function (descriptor, index) {
    return this.s2l();
  };
  protoOf(AbstractDecoder).i2m = function (descriptor, index) {
    return this.t2l();
  };
  protoOf(AbstractDecoder).j2m = function (descriptor, index) {
    return this.u2l();
  };
  protoOf(AbstractDecoder).k2m = function (descriptor, index) {
    return this.v2l();
  };
  protoOf(AbstractDecoder).l2m = function (descriptor, index) {
    return this.w2l();
  };
  protoOf(AbstractDecoder).m2m = function (descriptor, index) {
    return this.x2l();
  };
  protoOf(AbstractDecoder).n2m = function (descriptor, index) {
    return this.y2l();
  };
  protoOf(AbstractDecoder).o2m = function (descriptor, index) {
    return this.z2l();
  };
  protoOf(AbstractDecoder).p2m = function (descriptor, index) {
    return this.b2m(descriptor.n2k(index));
  };
  protoOf(AbstractDecoder).q2m = function (descriptor, index, deserializer, previousValue) {
    return this.c2m(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).s2m = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.s2i().e2k();
    return (isNullabilitySupported ? true : this.p2l()) ? this.c2m(deserializer, previousValue) : this.q2l();
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).e2m = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).f2m = function (descriptor) {
  };
  protoOf(AbstractEncoder).w2m = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).x2m = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).y2m = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).z2m = function (value) {
    return this.x2m(value);
  };
  protoOf(AbstractEncoder).a2n = function (value) {
    return this.x2m(value);
  };
  protoOf(AbstractEncoder).b2n = function (value) {
    return this.x2m(value);
  };
  protoOf(AbstractEncoder).c2n = function (value) {
    return this.x2m(value);
  };
  protoOf(AbstractEncoder).d2n = function (value) {
    return this.x2m(value);
  };
  protoOf(AbstractEncoder).e2n = function (value) {
    return this.x2m(value);
  };
  protoOf(AbstractEncoder).f2n = function (value) {
    return this.x2m(value);
  };
  protoOf(AbstractEncoder).g2n = function (value) {
    return this.x2m(new Char(value));
  };
  protoOf(AbstractEncoder).h2n = function (value) {
    return this.x2m(value);
  };
  protoOf(AbstractEncoder).i2n = function (enumDescriptor, index) {
    return this.x2m(index);
  };
  protoOf(AbstractEncoder).j2n = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).k2n = function (descriptor, index, value) {
    if (this.w2m(descriptor, index)) {
      this.z2m(value);
    }
  };
  protoOf(AbstractEncoder).l2n = function (descriptor, index, value) {
    if (this.w2m(descriptor, index)) {
      this.a2n(value);
    }
  };
  protoOf(AbstractEncoder).m2n = function (descriptor, index, value) {
    if (this.w2m(descriptor, index)) {
      this.b2n(value);
    }
  };
  protoOf(AbstractEncoder).n2n = function (descriptor, index, value) {
    if (this.w2m(descriptor, index)) {
      this.c2n(value);
    }
  };
  protoOf(AbstractEncoder).o2n = function (descriptor, index, value) {
    if (this.w2m(descriptor, index)) {
      this.d2n(value);
    }
  };
  protoOf(AbstractEncoder).p2n = function (descriptor, index, value) {
    if (this.w2m(descriptor, index)) {
      this.e2n(value);
    }
  };
  protoOf(AbstractEncoder).q2n = function (descriptor, index, value) {
    if (this.w2m(descriptor, index)) {
      this.f2n(value);
    }
  };
  protoOf(AbstractEncoder).r2n = function (descriptor, index, value) {
    if (this.w2m(descriptor, index)) {
      this.g2n(value);
    }
  };
  protoOf(AbstractEncoder).s2n = function (descriptor, index, value) {
    if (this.w2m(descriptor, index)) {
      this.h2n(value);
    }
  };
  protoOf(AbstractEncoder).t2n = function (descriptor, index) {
    return this.w2m(descriptor, index) ? this.j2n(descriptor.n2k(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).u2n = function (descriptor, index, serializer, value) {
    if (this.w2m(descriptor, index)) {
      this.v2n(serializer, value);
    }
  };
  protoOf(AbstractEncoder).w2n = function (descriptor, index, serializer, value) {
    if (this.w2m(descriptor, index)) {
      this.x2n(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    Companion_instance = this;
    this.b2o_1 = -1;
    this.c2o_1 = -3;
  }
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.o2m($this.s2i(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.r2m($this.s2i(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).t2i = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.s2i();
    var composite = encoder.e2m(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.s2n(this.s2i(), 0, actualSerializer.s2i().s2j());
    var tmp = this.s2i();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.u2n(tmp, 1, tmp$ret$0, value);
    composite.f2m(tmp0_encodeStructure);
  };
  protoOf(AbstractPolymorphicSerializer).u2i = function (decoder) {
    var tmp$ret$5;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.s2i();
    var composite = decoder.e2m(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.t2m()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.u2m(this.s2i());
        Companion_getInstance_7();
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.o2m(this.s2i(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var tmp0_requireNotNull = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (tmp0_requireNotNull == null) {
                  var tmp$ret$1;
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                  var message = tmp$ret$1;
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = tmp0_requireNotNull;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.r2m(this.s2i(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp1_requireNotNull = value;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_requireNotNull == null) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
          var message_0 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1_requireNotNull;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = isObject(tmp) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.f2m(tmp0_decodeStructure);
    tmp$ret$5 = result;
    return tmp$ret$5;
  };
  protoOf(AbstractPolymorphicSerializer).i2j = function (decoder, klassName) {
    return decoder.w2j().d2o(this.h2j(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).j2j = function (encoder, value) {
    return encoder.w2j().e2o(this.h2j(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.sd();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.sd() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.sd() + "' has to be sealed and '@Serializable'.\n") + ("Alternatively, register the serializer for '" + subClassName + "' explicitly in a corresponding SerializersModule."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.f2o_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).s2i = function () {
    return this.f2o_1;
  };
  protoOf(NothingSerializer_0).g2o = function (encoder, value) {
    throw SerializationException_init_$Create$("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).t2i = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.g2o(encoder, tmp);
  };
  protoOf(NothingSerializer_0).u2i = function (decoder) {
    throw SerializationException_init_$Create$("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.h2o_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).s2i = function () {
    return this.h2o_1;
  };
  protoOf(DurationSerializer).i2o = function (encoder, value) {
    encoder.h2n(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).t2i = function (encoder, value) {
    return this.i2o(encoder, value instanceof Duration ? value.e7_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).j2o = function (decoder) {
    return Companion_getInstance().c7(decoder.z2l());
  };
  protoOf(DurationSerializer).u2i = function (decoder) {
    return new Duration(this.j2o(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).s2j = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).s2j = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).s2j = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).s2j = function () {
    return 'kotlin.Array';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.a2p_1 = primitive.s2j() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).s2j = function () {
    return this.a2p_1;
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.m2o_1 = elementDescriptor;
    this.n2o_1 = 1;
  }
  protoOf(ListLikeDescriptor).l2k = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).j2k = function () {
    return this.n2o_1;
  };
  protoOf(ListLikeDescriptor).p2k = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).o2k = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).q2k = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.s2j() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).m2k = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.s2j() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).n2k = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.s2j() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.m2o_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.m2o_1, other.m2o_1) ? this.s2j() === other.s2j() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.m2o_1), 31) + getStringHashCode(this.s2j()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.s2j() + '(' + this.m2o_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.s2o_1 = serialName;
    this.t2o_1 = keyDescriptor;
    this.u2o_1 = valueDescriptor;
    this.v2o_1 = 2;
  }
  protoOf(MapLikeDescriptor).s2j = function () {
    return this.s2o_1;
  };
  protoOf(MapLikeDescriptor).l2k = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).j2k = function () {
    return this.v2o_1;
  };
  protoOf(MapLikeDescriptor).p2k = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).o2k = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).q2k = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.s2j() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).m2k = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.s2j() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).n2k = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.s2j() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.t2o_1;
        break;
      case 1:
        tmp = this.u2o_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.s2j() === other.s2j()))
      return false;
    if (!equals(this.t2o_1, other.t2o_1))
      return false;
    if (!equals(this.u2o_1, other.u2o_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.s2j());
    result = imul(31, result) + hashCode(this.t2o_1) | 0;
    result = imul(31, result) + hashCode(this.u2o_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.s2j() + '(' + this.t2o_1 + ', ' + this.u2o_1 + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.c2p_1 = new ArrayListClassDesc(element.s2i());
  }
  protoOf(ArrayListSerializer).s2i = function () {
    return this.c2p_1;
  };
  protoOf(ArrayListSerializer).d2p = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  protoOf(ArrayListSerializer).e2p = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(ArrayListSerializer).f2p = function (_this__u8e3s4) {
    return this.e2p(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).g2p = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).h2p = function (_this__u8e3s4) {
    return this.g2p(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).i2p = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).j2p = function (_this__u8e3s4) {
    return this.i2p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).k2p = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ub(size);
  };
  protoOf(ArrayListSerializer).l2p = function (_this__u8e3s4, size) {
    return this.k2p(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).m2p = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.bb(index, element);
  };
  protoOf(ArrayListSerializer).n2p = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.m2p(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.y2p_1 = new HashSetClassDesc(eSerializer.s2i());
  }
  protoOf(HashSetSerializer).s2i = function () {
    return this.y2p_1;
  };
  protoOf(HashSetSerializer).d2p = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).z2p = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(HashSetSerializer).f2p = function (_this__u8e3s4) {
    return this.z2p(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).a2q = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).h2p = function (_this__u8e3s4) {
    return this.a2q(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).b2q = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).j2p = function (_this__u8e3s4) {
    return this.b2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).c2q = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).l2p = function (_this__u8e3s4, size) {
    return this.c2q(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).d2q = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  protoOf(HashSetSerializer).n2p = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.d2q(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.f2q_1 = new LinkedHashSetClassDesc(eSerializer.s2i());
  }
  protoOf(LinkedHashSetSerializer).s2i = function () {
    return this.f2q_1;
  };
  protoOf(LinkedHashSetSerializer).d2p = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return tmp$ret$0;
  };
  protoOf(LinkedHashSetSerializer).g2q = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(LinkedHashSetSerializer).f2p = function (_this__u8e3s4) {
    return this.g2q(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).h2q = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).h2p = function (_this__u8e3s4) {
    return this.h2q(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).b2q = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).j2p = function (_this__u8e3s4) {
    return this.b2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).i2q = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).l2p = function (_this__u8e3s4, size) {
    return this.i2q(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).j2q = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  protoOf(LinkedHashSetSerializer).n2p = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.j2q(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.m2q_1 = new HashMapClassDesc(kSerializer.s2i(), vSerializer.s2i());
  }
  protoOf(HashMapSerializer).s2i = function () {
    return this.m2q_1;
  };
  protoOf(HashMapSerializer).n2q = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(HashMapSerializer).o2q = function (_this__u8e3s4) {
    return this.n2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).p2q = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.o().f();
    return tmp$ret$0;
  };
  protoOf(HashMapSerializer).q2q = function (_this__u8e3s4) {
    return this.p2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).d2p = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).r2q = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.i(), 2);
  };
  protoOf(HashMapSerializer).f2p = function (_this__u8e3s4) {
    return this.r2q(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).s2q = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).h2p = function (_this__u8e3s4) {
    return this.s2q(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).t2q = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).j2p = function (_this__u8e3s4) {
    return this.t2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).u2q = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).l2p = function (_this__u8e3s4, size) {
    return this.u2q(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.z2q_1 = new LinkedHashMapClassDesc(kSerializer.s2i(), vSerializer.s2i());
  }
  protoOf(LinkedHashMapSerializer).s2i = function () {
    return this.z2q_1;
  };
  protoOf(LinkedHashMapSerializer).n2q = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(LinkedHashMapSerializer).o2q = function (_this__u8e3s4) {
    return this.n2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).p2q = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.o().f();
    return tmp$ret$0;
  };
  protoOf(LinkedHashMapSerializer).q2q = function (_this__u8e3s4) {
    return this.p2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).d2p = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).a2r = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.i(), 2);
  };
  protoOf(LinkedHashMapSerializer).f2p = function (_this__u8e3s4) {
    return this.a2r(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).b2r = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).h2p = function (_this__u8e3s4) {
    return this.b2r(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).t2q = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).j2p = function (_this__u8e3s4) {
    return this.t2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).c2r = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).l2p = function (_this__u8e3s4, size) {
    return this.c2r(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.e2r_1 = kClass;
    this.f2r_1 = new ArrayClassDesc(eSerializer.s2i());
  }
  protoOf(ReferenceArraySerializer).s2i = function () {
    return this.f2r_1;
  };
  protoOf(ReferenceArraySerializer).g2r = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).o2q = function (_this__u8e3s4) {
    return this.g2r((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).h2r = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).q2q = function (_this__u8e3s4) {
    return this.h2r((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).d2p = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  protoOf(ReferenceArraySerializer).i2r = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(ReferenceArraySerializer).f2p = function (_this__u8e3s4) {
    return this.i2r(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).j2r = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.e2r_1);
  };
  protoOf(ReferenceArraySerializer).h2p = function (_this__u8e3s4) {
    return this.j2r(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).k2r = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).j2p = function (_this__u8e3s4) {
    return this.k2r((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).l2r = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ub(size);
  };
  protoOf(ReferenceArraySerializer).l2p = function (_this__u8e3s4, size) {
    return this.l2r(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).m2r = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.bb(index, element);
  };
  protoOf(ReferenceArraySerializer).n2p = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.m2r(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).p2p = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(CollectionSerializer).o2q = function (_this__u8e3s4) {
    return this.p2p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).q2p = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(CollectionSerializer).q2q = function (_this__u8e3s4) {
    return this.q2p((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.v2q_1 = keySerializer;
    this.w2q_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).t2p = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.v_1;
    var last = progression.w_1;
    var step_0 = progression.x_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.u2p(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).u2p = function (decoder, index, builder, checkIndex) {
    var key = decoder.r2m(this.s2i(), index, this.v2q_1);
    var tmp;
    if (checkIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.u2m(this.s2i());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_require = tmp0_also === (index + 1 | 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.s1(key)) {
      var tmp_2 = this.w2q_1.s2i().l2k();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.q2m(this.s2i(), vIndex, this.w2q_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.r2m(this.s2i(), vIndex, this.w2q_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.y2(key, value);
  };
  protoOf(MapLikeSerializer).s2p = function (encoder, value) {
    var size = this.o2q(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.s2i();
    var composite = encoder.z2n(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.q2q(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = iterator;
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.p();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.q();
      var v = tmp$ret$2;
      var tmp = this.s2i();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.u2n(tmp, tmp0, this.v2q_1, k);
      var tmp_0 = this.s2i();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.u2n(tmp_0, tmp1, this.w2q_1, v);
    }
    composite.f2m(tmp0_encodeCollection);
  };
  protoOf(MapLikeSerializer).t2i = function (encoder, value) {
    return this.s2p(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.r2p_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).s2p = function (encoder, value) {
    var size = this.o2q(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.s2i();
    var composite = encoder.z2n(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.q2q(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.u2n(this.s2i(), index, this.r2p_1, iterator.h());
      }
       while (inductionVariable < size);
    composite.f2m(tmp0_encodeCollection);
  };
  protoOf(CollectionLikeSerializer).t2i = function (encoder, value) {
    return this.s2p(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).t2p = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.u2p(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).u2p = function (decoder, index, builder, checkIndex) {
    this.n2p(builder, index, decoder.r2m(this.s2i(), index, this.r2p_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.v2m($this.s2i());
    $this.l2p(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).w2p = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.j2p(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.d2p() : tmp1_elvis_lhs;
    var startIndex = this.f2p(builder);
    var compositeDecoder = decoder.e2m(this.s2i());
    if (compositeDecoder.t2m()) {
      this.t2p(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.u2m(this.s2i());
        Companion_getInstance_7();
        if (index === -1)
          break $l$loop;
        this.v2p(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.f2m(this.s2i());
    return this.h2p(builder);
  };
  protoOf(AbstractCollectionSerializer).u2i = function (decoder) {
    return this.w2p(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).v2p = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.u2p(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.u2p.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.o2r_1 = new PrimitiveArrayDescriptor(primitiveSerializer.s2i());
  }
  protoOf(PrimitiveArraySerializer).s2i = function () {
    return this.o2r_1;
  };
  protoOf(PrimitiveArraySerializer).f2p = function (_this__u8e3s4) {
    return _this__u8e3s4.p2r();
  };
  protoOf(PrimitiveArraySerializer).h2p = function (_this__u8e3s4) {
    return _this__u8e3s4.u1a();
  };
  protoOf(PrimitiveArraySerializer).l2p = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ub(size);
  };
  protoOf(PrimitiveArraySerializer).q2r = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  protoOf(PrimitiveArraySerializer).q2q = function (_this__u8e3s4) {
    return this.q2r((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).n2p = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  protoOf(PrimitiveArraySerializer).d2p = function () {
    return this.j2p(this.r2r());
  };
  protoOf(PrimitiveArraySerializer).t2r = function (encoder, value) {
    var size = this.o2q(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.o2r_1;
    var composite = encoder.z2n(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.s2r(composite, value, size);
    composite.f2m(tmp0_encodeCollection);
  };
  protoOf(PrimitiveArraySerializer).t2i = function (encoder, value) {
    return this.t2r(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).s2p = function (encoder, value) {
    return this.t2r(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).u2i = function (decoder) {
    return this.w2p(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).u2r = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.p2r() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ub(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ub.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.v2r_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).m7(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.z2r_1[slot] = $this.z2r_1[slot].mh((new Long(1, 0)).m7(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.z2r_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.z2r_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.lh());
          slotMarks = slotMarks.mh((new Long(1, 0)).m7(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.x2r_1($this.w2r_1, index)) {
            $this.z2r_1[slot] = slotMarks;
            return index;
          }
        }
        $this.z2r_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_7();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.w2r_1 = descriptor;
    this.x2r_1 = readIfAbsent;
    var elementsCount = this.w2r_1.j2k();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).m7(elementsCount);
      }
      tmp.y2r_1 = tmp_0;
      this.z2r_1 = Companion_getInstance_8().v2r_1;
    } else {
      this.y2r_1 = new Long(0, 0);
      this.z2r_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).a2s = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.y2r_1 = this.y2r_1.mh((new Long(1, 0)).m7(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).b2s = function () {
    var elementsCount = this.w2r_1.j2k();
    while (!this.y2r_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.y2r_1.lh());
      this.y2r_1 = this.y2r_1.mh((new Long(1, 0)).m7(index));
      if (this.x2r_1(this.w2r_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_7();
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.c2s_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.c2s_1;
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.r2s(element.m4_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.d2s_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.c2s_1 = values;
    this.d2s_1 = null;
    var tmp = this;
    tmp.e2s_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).s2i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_1();
    tmp$ret$0 = this.e2s_1.q();
    return tmp$ret$0;
  };
  protoOf(EnumSerializer).t2i = function (encoder, value) {
    var index = indexOf(this.c2s_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$('' + value + ' is not a valid enum ' + this.s2i().s2j() + ', ' + ('must be one of ' + contentToString(this.c2s_1)));
    }
    encoder.i2n(this.s2i(), index);
  };
  protoOf(EnumSerializer).u2i = function (decoder) {
    var index = decoder.a2m(this.s2i());
    if (!(0 <= index ? index <= (this.c2s_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$('' + index + ' is not among valid ' + this.s2i().s2j() + ' enum values, ' + ('values size is ' + this.c2s_1.length));
    }
    return this.c2s_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.s2i().s2j() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = elementDescriptors$factory();
    tmp$ret$0 = $this.f2t_1.q();
    return tmp$ret$0;
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
      var tmp_1 = tmp$ret$0;
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.internal.EnumDescriptor.elementDescriptors$delegate.<anonymous>.<anonymous>' call
        tmp$ret$1 = buildSerialDescriptor($name + '.' + this$0.p2k(tmp_2), OBJECT_getInstance(), []);
        tmp_1[tmp_2] = tmp$ret$1;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.e2t_1 = ENUM_getInstance();
    var tmp = this;
    tmp.f2t_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).l2k = function () {
    return this.e2t_1;
  };
  protoOf(EnumDescriptor).n2k = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.l2k() === ENUM_getInstance()))
      return false;
    if (!(this.s2j() === other.s2j()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.s2j() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.s2j());
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp1_elementsHashCodeBy = get_elementNames(this);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = tmp1_elementsHashCodeBy.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.EnumDescriptor.hashCode.<anonymous>' call
      tmp$ret$0 = element;
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var elementsHashCode = tmp$ret$4;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.s2i();
    }, null);
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p(receiver);
    }, null);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.u2t_1 = true;
  }
  protoOf(InlineClassDescriptor).k2k = function () {
    return this.u2t_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.s2j() === other.s2j())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = tmp0__anonymous__q1qw7t.u2t_1 ? contentEquals(this.g2t(), tmp0__anonymous__q1qw7t.g2t()) : false;
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.j2k() === other.j2k())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.j2k();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.n2k(index).s2j() === other.n2k(index).s2j())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.n2k(index).l2k(), other.n2k(index).l2k())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.v2t_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).w2t = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.v2t_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(InlinePrimitiveDescriptor$1).s2i = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).t2i = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).u2i = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.y2t_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).w2j = function () {
    return this.y2t_1;
  };
  protoOf(NoOpEncoder).x2m = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).y2m = function () {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).z2m = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).a2n = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).b2n = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).c2n = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).d2n = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).e2n = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).f2n = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).g2n = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).h2n = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).i2n = function (enumDescriptor, index) {
    return Unit_getInstance();
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.z2t_1 = OBJECT_getInstance();
    this.a2u_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).l2k = function () {
    return this.z2t_1;
  };
  protoOf(NothingSerialDescriptor).s2j = function () {
    return this.a2u_1;
  };
  protoOf(NothingSerialDescriptor).j2k = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).p2k = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).o2k = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).q2k = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).n2k = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).m2k = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.a2u_1) + imul(31, this.z2t_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.b2u_1 = serializer;
    this.c2u_1 = new SerialDescriptorForNullable(this.b2u_1.s2i());
  }
  protoOf(NullableSerializer).s2i = function () {
    return this.c2u_1;
  };
  protoOf(NullableSerializer).d2u = function (encoder, value) {
    if (!(value == null)) {
      encoder.y2n();
      encoder.v2n(this.b2u_1, value);
    } else {
      encoder.y2m();
    }
  };
  protoOf(NullableSerializer).t2i = function (encoder, value) {
    return this.d2u(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).u2i = function (decoder) {
    return decoder.p2l() ? decoder.d2m(this.b2u_1) : decoder.q2l();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.b2u_1, other.b2u_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.b2u_1);
  };
  function SerialDescriptorForNullable(original) {
    this.r2k_1 = original;
    this.s2k_1 = this.r2k_1.s2j() + '?';
    this.t2k_1 = cachedSerialNames(this.r2k_1);
  }
  protoOf(SerialDescriptorForNullable).i2k = function () {
    return this.r2k_1.i2k();
  };
  protoOf(SerialDescriptorForNullable).j2k = function () {
    return this.r2k_1.j2k();
  };
  protoOf(SerialDescriptorForNullable).k2k = function () {
    return this.r2k_1.k2k();
  };
  protoOf(SerialDescriptorForNullable).l2k = function () {
    return this.r2k_1.l2k();
  };
  protoOf(SerialDescriptorForNullable).m2k = function (index) {
    return this.r2k_1.m2k(index);
  };
  protoOf(SerialDescriptorForNullable).n2k = function (index) {
    return this.r2k_1.n2k(index);
  };
  protoOf(SerialDescriptorForNullable).o2k = function (name) {
    return this.r2k_1.o2k(name);
  };
  protoOf(SerialDescriptorForNullable).p2k = function (index) {
    return this.r2k_1.p2k(index);
  };
  protoOf(SerialDescriptorForNullable).q2k = function (index) {
    return this.r2k_1.q2k(index);
  };
  protoOf(SerialDescriptorForNullable).s2j = function () {
    return this.s2k_1;
  };
  protoOf(SerialDescriptorForNullable).n2l = function () {
    return this.t2k_1;
  };
  protoOf(SerialDescriptorForNullable).e2k = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.r2k_1, other.r2k_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.r2k_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.r2k_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.a2j_1 = this$0.f2u_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.e2u_1 = objectInstance;
    this.f2u_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.g2u_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).s2i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_2();
    tmp$ret$0 = this.g2u_1.q();
    return tmp$ret$0;
  };
  protoOf(ObjectSerializer).t2i = function (encoder, value) {
    encoder.e2m(this.s2i()).f2m(this.s2i());
  };
  protoOf(ObjectSerializer).u2i = function (decoder) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.s2i();
    var composite = decoder.e2m(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      var index = composite.u2m(this.s2i());
      Companion_getInstance_7();
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        throw SerializationException_init_$Create$('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.f2m(tmp0_decodeStructure);
    tmp$ret$1 = result;
    return this.e2u_1;
  };
  function descriptor$factory_2() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.s2i();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.n2l();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.j2k());
    var inductionVariable = 0;
    var last = _this__u8e3s4.j2k();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.p2k(i);
        result.a(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.ee();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type parameter ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.sd();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.l();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$(notRegisteredMessage(_this__u8e3s4));
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.p2k(i);
          missingFields.a(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.s2j());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.o2s_1.q();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this.q2s_1.q();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.j2s_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.j2s_1[i];
        indices.y2(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.g2s_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w2t();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.g2s_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2t();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.g()) {
          var item = tmp0_iterator.h();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.s2i();
          tmp0_mapTo.a(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.g2t());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.p2k(i) + ': ' + this$0.n2k(i).s2j();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.f2s_1 = serialName;
    this.g2s_1 = generatedSerializer;
    this.h2s_1 = elementsCount;
    this.i2s_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.h2s_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.j2s_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.h2s_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.k2s_1 = tmp$ret$2;
    this.l2s_1 = null;
    this.m2s_1 = booleanArray(this.h2s_1);
    this.n2s_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.o2s_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.p2s_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.q2s_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).s2j = function () {
    return this.f2s_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).j2k = function () {
    return this.h2s_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).l2k = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).i2k = function () {
    var tmp0_elvis_lhs = this.l2s_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).n2l = function () {
    return this.n2s_1.z1();
  };
  protoOf(PluginGeneratedSerialDescriptor).g2t = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.p2s_1.q();
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).h2t = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.i2s_1 = tmp0_this.i2s_1 + 1 | 0;
    this.j2s_1[tmp0_this.i2s_1] = name;
    this.m2s_1[this.i2s_1] = isOptional;
    this.k2s_1[this.i2s_1] = null;
    if (this.i2s_1 === (this.h2s_1 - 1 | 0)) {
      this.n2s_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).r2s = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.h2t(name, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.h2t.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).n2k = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).s2i();
  };
  protoOf(PluginGeneratedSerialDescriptor).q2k = function (index) {
    return getChecked_0(this.m2s_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).m2k = function (index) {
    var tmp0_elvis_lhs = getChecked(this.k2s_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).p2k = function (index) {
    return getChecked(this.j2s_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).o2k = function (name) {
    var tmp0_elvis_lhs = this.n2s_1.y1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.s2j() === other.s2j())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.g2t(), tmp0__anonymous__q1qw7t.g2t());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.j2k() === other.j2k())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.j2k();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.n2k(index).s2j() === other.n2k(index).s2j())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.n2k(index).l2k(), other.n2k(index).l2k())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.h2s_1);
    var tmp_0 = this.s2j() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.s2j());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.s2j();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.f();
    while (tmp0_iterator_0.g()) {
      var element_0 = tmp0_iterator_0.h();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator_0;
      var tmp_0 = imul(31, tmp1__anonymous__uwfjfc);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.l2k();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.g2t();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).k2u = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.k2u((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).l2u = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.l2u((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).r2r = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).m2u = function (decoder, index, builder, checkIndex) {
    builder.p2u(decoder.n2m(this.o2r_1, index));
  };
  protoOf(CharArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.m2u(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).q2u = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.r2n(this.o2r_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).s2r = function (encoder, content, size) {
    return this.q2u(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(DoubleCompanionObject_getInstance()));
  }
  protoOf(DoubleArraySerializer_0).t2u = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.t2u((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).u2u = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.u2u((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).r2r = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).v2u = function (decoder, index, builder, checkIndex) {
    builder.y2u(decoder.m2m(this.o2r_1, index));
  };
  protoOf(DoubleArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.v2u(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).z2u = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.q2n(this.o2r_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).s2r = function (encoder, content, size) {
    return this.z2u(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(FloatCompanionObject_getInstance()));
  }
  protoOf(FloatArraySerializer_0).c2v = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.c2v((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).d2v = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.d2v((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).r2r = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).e2v = function (decoder, index, builder, checkIndex) {
    builder.h2v(decoder.l2m(this.o2r_1, index));
  };
  protoOf(FloatArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.e2v(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).i2v = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p2n(this.o2r_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).s2r = function (encoder, content, size) {
    return this.i2v(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).l2v = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.l2v((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).m2v = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.m2v((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).r2r = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).n2v = function (decoder, index, builder, checkIndex) {
    builder.q2v(decoder.k2m(this.o2r_1, index));
  };
  protoOf(LongArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.n2v(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).r2v = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o2n(this.o2r_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).s2r = function (encoder, content, size) {
    return this.r2v(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).u2v = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.u2v(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.o9_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).v2v = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.v2v(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.o9_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).w2v = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).r2r = function () {
    return new ULongArray(this.w2v());
  };
  protoOf(ULongArraySerializer_0).x2v = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.p2m(this.o2r_1, index).v2l();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    builder.a2w(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.x2v(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).b2w = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2n(this.o2r_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = ULongArray__get_impl_pr71q9(content, i);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp.d2n(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).s2r = function (encoder, content, size) {
    return this.b2w(encoder, content instanceof ULongArray ? content.o9_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(IntCompanionObject_getInstance()));
  }
  protoOf(IntArraySerializer_0).e2w = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.e2w((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).f2w = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.f2w((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).r2r = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).g2w = function (decoder, index, builder, checkIndex) {
    builder.j2w(decoder.j2m(this.o2r_1, index));
  };
  protoOf(IntArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.g2w(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).k2w = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.n2n(this.o2r_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).s2r = function (encoder, content, size) {
    return this.k2w(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).n2w = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.n2w(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.d9_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).o2w = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.o2w(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.d9_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).p2w = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).r2r = function () {
    return new UIntArray(this.p2w());
  };
  protoOf(UIntArraySerializer_0).q2w = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.p2m(this.o2r_1, index).u2l();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    builder.t2w(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.q2w(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).u2w = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2n(this.o2r_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = UIntArray__get_impl_gp5kza(content, i);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp.c2n(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).s2r = function (encoder, content, size) {
    return this.u2w(encoder, content instanceof UIntArray ? content.d9_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ShortCompanionObject_getInstance()));
  }
  protoOf(ShortArraySerializer_0).x2w = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.x2w((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).y2w = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.y2w((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).r2r = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).z2w = function (decoder, index, builder, checkIndex) {
    builder.c2x(decoder.i2m(this.o2r_1, index));
  };
  protoOf(ShortArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.z2w(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).d2x = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.m2n(this.o2r_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).s2r = function (encoder, content, size) {
    return this.d2x(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).g2x = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.g2x(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.z9_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).h2x = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.h2x(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.z9_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).i2x = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).r2r = function () {
    return new UShortArray(this.i2x());
  };
  protoOf(UShortArraySerializer_0).j2x = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.p2m(this.o2r_1, index).t2l();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    builder.m2x(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.j2x(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).n2x = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2n(this.o2r_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = UShortArray__get_impl_fnbhmx(content, i);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp.b2n(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).s2r = function (encoder, content, size) {
    return this.n2x(encoder, content instanceof UShortArray ? content.z9_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(ByteCompanionObject_getInstance()));
  }
  protoOf(ByteArraySerializer_0).q2x = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.q2x((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).r2x = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.r2x((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).r2r = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).s2x = function (decoder, index, builder, checkIndex) {
    builder.v2x(decoder.h2m(this.o2r_1, index));
  };
  protoOf(ByteArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.s2x(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).w2x = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.l2n(this.o2r_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).s2r = function (encoder, content, size) {
    return this.w2x(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).z2x = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.z2x(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.r8_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).a2y = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.a2y(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.r8_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).b2y = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).r2r = function () {
    return new UByteArray(this.b2y());
  };
  protoOf(UByteArraySerializer_0).c2y = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.p2m(this.o2r_1, index).s2l();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    builder.f2y(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.c2y(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).g2y = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.t2n(this.o2r_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = UByteArray__get_impl_t5f3hv(content, i);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp.a2n(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).s2r = function (encoder, content, size) {
    return this.g2y(encoder, content instanceof UByteArray ? content.r8_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_14(BooleanCompanionObject_getInstance()));
  }
  protoOf(BooleanArraySerializer_0).j2y = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).o2q = function (_this__u8e3s4) {
    return this.j2y((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).k2y = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).j2p = function (_this__u8e3s4) {
    return this.k2y((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).r2r = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).l2y = function (decoder, index, builder, checkIndex) {
    builder.o2y(decoder.g2m(this.o2r_1, index));
  };
  protoOf(BooleanArraySerializer_0).u2p = function (decoder, index, builder, checkIndex) {
    return this.l2y(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).p2y = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.k2n(this.o2r_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).s2r = function (encoder, content, size) {
    return this.p2y(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n2u_1 = bufferWithData;
    this.o2u_1 = bufferWithData.length;
    this.ub(10);
  }
  protoOf(CharArrayBuilder).p2r = function () {
    return this.o2u_1;
  };
  protoOf(CharArrayBuilder).ub = function (requiredCapacity) {
    if (this.n2u_1.length < requiredCapacity)
      this.n2u_1 = copyOf(this.n2u_1, coerceAtLeast(requiredCapacity, imul(this.n2u_1.length, 2)));
  };
  protoOf(CharArrayBuilder).p2u = function (c) {
    this.u2r();
    var tmp = this.n2u_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.o2u_1;
    tmp0_this.o2u_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).u1a = function () {
    return copyOf(this.n2u_1, this.o2u_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w2u_1 = bufferWithData;
    this.x2u_1 = bufferWithData.length;
    this.ub(10);
  }
  protoOf(DoubleArrayBuilder).p2r = function () {
    return this.x2u_1;
  };
  protoOf(DoubleArrayBuilder).ub = function (requiredCapacity) {
    if (this.w2u_1.length < requiredCapacity)
      this.w2u_1 = copyOf_0(this.w2u_1, coerceAtLeast(requiredCapacity, imul(this.w2u_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).y2u = function (c) {
    this.u2r();
    var tmp = this.w2u_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.x2u_1;
    tmp0_this.x2u_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).u1a = function () {
    return copyOf_0(this.w2u_1, this.x2u_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f2v_1 = bufferWithData;
    this.g2v_1 = bufferWithData.length;
    this.ub(10);
  }
  protoOf(FloatArrayBuilder).p2r = function () {
    return this.g2v_1;
  };
  protoOf(FloatArrayBuilder).ub = function (requiredCapacity) {
    if (this.f2v_1.length < requiredCapacity)
      this.f2v_1 = copyOf_1(this.f2v_1, coerceAtLeast(requiredCapacity, imul(this.f2v_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).h2v = function (c) {
    this.u2r();
    var tmp = this.f2v_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.g2v_1;
    tmp0_this.g2v_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).u1a = function () {
    return copyOf_1(this.f2v_1, this.g2v_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o2v_1 = bufferWithData;
    this.p2v_1 = bufferWithData.length;
    this.ub(10);
  }
  protoOf(LongArrayBuilder).p2r = function () {
    return this.p2v_1;
  };
  protoOf(LongArrayBuilder).ub = function (requiredCapacity) {
    if (this.o2v_1.length < requiredCapacity)
      this.o2v_1 = copyOf_2(this.o2v_1, coerceAtLeast(requiredCapacity, imul(this.o2v_1.length, 2)));
  };
  protoOf(LongArrayBuilder).q2v = function (c) {
    this.u2r();
    var tmp = this.o2v_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.p2v_1;
    tmp0_this.p2v_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).u1a = function () {
    return copyOf_2(this.o2v_1, this.p2v_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y2v_1 = bufferWithData;
    this.z2v_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ub(10);
  }
  protoOf(ULongArrayBuilder).p2r = function () {
    return this.z2v_1;
  };
  protoOf(ULongArrayBuilder).ub = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.y2v_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.y2v_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.y2v_1), 2));
      tmp$ret$0 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
      tmp.y2v_1 = tmp$ret$0;
    }
  };
  protoOf(ULongArrayBuilder).a2w = function (c) {
    this.u2r();
    var tmp = this.y2v_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.z2v_1;
    tmp0_this.z2v_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).q2y = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.y2v_1;
    var tmp1_copyOf = this.z2v_1;
    tmp$ret$0 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  protoOf(ULongArrayBuilder).u1a = function () {
    return new ULongArray(this.q2y());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h2w_1 = bufferWithData;
    this.i2w_1 = bufferWithData.length;
    this.ub(10);
  }
  protoOf(IntArrayBuilder).p2r = function () {
    return this.i2w_1;
  };
  protoOf(IntArrayBuilder).ub = function (requiredCapacity) {
    if (this.h2w_1.length < requiredCapacity)
      this.h2w_1 = copyOf_3(this.h2w_1, coerceAtLeast(requiredCapacity, imul(this.h2w_1.length, 2)));
  };
  protoOf(IntArrayBuilder).j2w = function (c) {
    this.u2r();
    var tmp = this.h2w_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.i2w_1;
    tmp0_this.i2w_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).u1a = function () {
    return copyOf_3(this.h2w_1, this.i2w_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r2w_1 = bufferWithData;
    this.s2w_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ub(10);
  }
  protoOf(UIntArrayBuilder).p2r = function () {
    return this.s2w_1;
  };
  protoOf(UIntArrayBuilder).ub = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.r2w_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.r2w_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.r2w_1), 2));
      tmp$ret$0 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
      tmp.r2w_1 = tmp$ret$0;
    }
  };
  protoOf(UIntArrayBuilder).t2w = function (c) {
    this.u2r();
    var tmp = this.r2w_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.s2w_1;
    tmp0_this.s2w_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).r2y = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.r2w_1;
    var tmp1_copyOf = this.s2w_1;
    tmp$ret$0 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  protoOf(UIntArrayBuilder).u1a = function () {
    return new UIntArray(this.r2y());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a2x_1 = bufferWithData;
    this.b2x_1 = bufferWithData.length;
    this.ub(10);
  }
  protoOf(ShortArrayBuilder).p2r = function () {
    return this.b2x_1;
  };
  protoOf(ShortArrayBuilder).ub = function (requiredCapacity) {
    if (this.a2x_1.length < requiredCapacity)
      this.a2x_1 = copyOf_4(this.a2x_1, coerceAtLeast(requiredCapacity, imul(this.a2x_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).c2x = function (c) {
    this.u2r();
    var tmp = this.a2x_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.b2x_1;
    tmp0_this.b2x_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).u1a = function () {
    return copyOf_4(this.a2x_1, this.b2x_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k2x_1 = bufferWithData;
    this.l2x_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ub(10);
  }
  protoOf(UShortArrayBuilder).p2r = function () {
    return this.l2x_1;
  };
  protoOf(UShortArrayBuilder).ub = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.k2x_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.k2x_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.k2x_1), 2));
      tmp$ret$0 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
      tmp.k2x_1 = tmp$ret$0;
    }
  };
  protoOf(UShortArrayBuilder).m2x = function (c) {
    this.u2r();
    var tmp = this.k2x_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.l2x_1;
    tmp0_this.l2x_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).s2y = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.k2x_1;
    var tmp1_copyOf = this.l2x_1;
    tmp$ret$0 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  protoOf(UShortArrayBuilder).u1a = function () {
    return new UShortArray(this.s2y());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t2x_1 = bufferWithData;
    this.u2x_1 = bufferWithData.length;
    this.ub(10);
  }
  protoOf(ByteArrayBuilder).p2r = function () {
    return this.u2x_1;
  };
  protoOf(ByteArrayBuilder).ub = function (requiredCapacity) {
    if (this.t2x_1.length < requiredCapacity)
      this.t2x_1 = copyOf_5(this.t2x_1, coerceAtLeast(requiredCapacity, imul(this.t2x_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).v2x = function (c) {
    this.u2r();
    var tmp = this.t2x_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.u2x_1;
    tmp0_this.u2x_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).u1a = function () {
    return copyOf_5(this.t2x_1, this.u2x_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d2y_1 = bufferWithData;
    this.e2y_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ub(10);
  }
  protoOf(UByteArrayBuilder).p2r = function () {
    return this.e2y_1;
  };
  protoOf(UByteArrayBuilder).ub = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.d2y_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.d2y_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.d2y_1), 2));
      tmp$ret$0 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
      tmp.d2y_1 = tmp$ret$0;
    }
  };
  protoOf(UByteArrayBuilder).f2y = function (c) {
    this.u2r();
    var tmp = this.d2y_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.e2y_1;
    tmp0_this.e2y_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).t2y = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.d2y_1;
    var tmp1_copyOf = this.e2y_1;
    tmp$ret$0 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  protoOf(UByteArrayBuilder).u1a = function () {
    return new UByteArray(this.t2y());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m2y_1 = bufferWithData;
    this.n2y_1 = bufferWithData.length;
    this.ub(10);
  }
  protoOf(BooleanArrayBuilder).p2r = function () {
    return this.n2y_1;
  };
  protoOf(BooleanArrayBuilder).ub = function (requiredCapacity) {
    if (this.m2y_1.length < requiredCapacity)
      this.m2y_1 = copyOf_6(this.m2y_1, coerceAtLeast(requiredCapacity, imul(this.m2y_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).o2y = function (c) {
    this.u2r();
    var tmp = this.m2y_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.n2y_1;
    tmp0_this.n2y_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).u1a = function () {
    return copyOf_6(this.m2y_1, this.n2y_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().y1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.u2y_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).s2i = function () {
    return this.u2y_1;
  };
  protoOf(StringSerializer).v2y = function (encoder, value) {
    return encoder.h2n(value);
  };
  protoOf(StringSerializer).t2i = function (encoder, value) {
    return this.v2y(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).u2i = function (decoder) {
    return decoder.z2l();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.w2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).s2i = function () {
    return this.w2y_1;
  };
  protoOf(CharSerializer).x2y = function (encoder, value) {
    return encoder.g2n(value);
  };
  protoOf(CharSerializer).t2i = function (encoder, value) {
    return this.x2y(encoder, value instanceof Char ? value.h6_1 : THROW_CCE());
  };
  protoOf(CharSerializer).y2y = function (decoder) {
    return decoder.y2l();
  };
  protoOf(CharSerializer).u2i = function (decoder) {
    return new Char(this.y2y(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.z2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).s2i = function () {
    return this.z2y_1;
  };
  protoOf(DoubleSerializer).a2z = function (encoder, value) {
    return encoder.f2n(value);
  };
  protoOf(DoubleSerializer).t2i = function (encoder, value) {
    return this.a2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).u2i = function (decoder) {
    return decoder.x2l();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.b2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).s2i = function () {
    return this.b2z_1;
  };
  protoOf(FloatSerializer).c2z = function (encoder, value) {
    return encoder.e2n(value);
  };
  protoOf(FloatSerializer).t2i = function (encoder, value) {
    return this.c2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).u2i = function (decoder) {
    return decoder.w2l();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.d2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).s2i = function () {
    return this.d2z_1;
  };
  protoOf(LongSerializer).e2z = function (encoder, value) {
    return encoder.d2n(value);
  };
  protoOf(LongSerializer).t2i = function (encoder, value) {
    return this.e2z(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).u2i = function (decoder) {
    return decoder.v2l();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.f2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).s2i = function () {
    return this.f2z_1;
  };
  protoOf(IntSerializer).g2z = function (encoder, value) {
    return encoder.c2n(value);
  };
  protoOf(IntSerializer).t2i = function (encoder, value) {
    return this.g2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).u2i = function (decoder) {
    return decoder.u2l();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.h2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).s2i = function () {
    return this.h2z_1;
  };
  protoOf(ShortSerializer).i2z = function (encoder, value) {
    return encoder.b2n(value);
  };
  protoOf(ShortSerializer).t2i = function (encoder, value) {
    return this.i2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).u2i = function (decoder) {
    return decoder.t2l();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.j2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).s2i = function () {
    return this.j2z_1;
  };
  protoOf(ByteSerializer).k2z = function (encoder, value) {
    return encoder.a2n(value);
  };
  protoOf(ByteSerializer).t2i = function (encoder, value) {
    return this.k2z(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).u2i = function (decoder) {
    return decoder.s2l();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.l2z_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).s2i = function () {
    return this.l2z_1;
  };
  protoOf(BooleanSerializer).m2z = function (encoder, value) {
    return encoder.z2m(value);
  };
  protoOf(BooleanSerializer).t2i = function (encoder, value) {
    return this.m2z(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).u2i = function (decoder) {
    return decoder.r2l();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.n2z_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  protoOf(UnitSerializer).s2i = function () {
    return this.n2z_1.s2i();
  };
  protoOf(UnitSerializer).o2z = function (decoder) {
    this.n2z_1.u2i(decoder);
  };
  protoOf(UnitSerializer).u2i = function (decoder) {
    this.o2z(decoder);
    return Unit_getInstance();
  };
  protoOf(UnitSerializer).p2z = function (encoder, value) {
    this.n2z_1.t2i(encoder, Unit_getInstance());
  };
  protoOf(UnitSerializer).t2i = function (encoder, value) {
    return this.p2z(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.q2z_1 = serialName;
    this.r2z_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).s2j = function () {
    return this.q2z_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).l2k = function () {
    return this.r2z_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).j2k = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).p2k = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).o2k = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).q2k = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).n2k = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).m2k = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.q2z_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.q2z_1 === other.q2z_1 ? equals(this.r2z_1, other.r2z_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.q2z_1) + imul(31, this.r2z_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().z1();
    var tmp0_iterator = keys.f();
    while (tmp0_iterator.g()) {
      var primitive = tmp0_iterator.h();
      var simpleName = capitalize(ensureNotNull(primitive.sd()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp$ret$4;
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
      tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
      var tmp_0 = toString(tmp$ret$1);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = _this__u8e3s4;
      tmp$ret$3 = tmp$ret$2.substring(1);
      tmp = tmp_0 + tmp$ret$3;
    } else {
      tmp = _this__u8e3s4;
    }
    tmp$ret$4 = tmp;
    return tmp$ret$4;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().re(), serializer_2(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_3(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().ue(), CharArraySerializer()), to(PrimitiveClasses_getInstance().pe(), serializer_4(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().af(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().oe(), serializer_5(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ze(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().ye(), LongArraySerializer()), to(getKClass(ULong), serializer_7(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().ne(), serializer_8(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().xe(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().me(), serializer_10(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().we(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().le(), serializer_12(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ve(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ke(), serializer_14(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().te(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_getInstance())), to(PrimitiveClasses_getInstance().je(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).u2z = function (_this__u8e3s4, index) {
    return this.w2z(this.v2z(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).w2z = function (nestedName) {
    var tmp0_elvis_lhs = this.z2z();
    return this.a30(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).v2z = function (descriptor, index) {
    return descriptor.p2k(index);
  };
  protoOf(NamedValueDecoder).a30 = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(parentName) === 0;
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.o30(tag);
    var r = block();
    if (!$this.y2z_1) {
      $this.p30();
    }
    $this.y2z_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.c2m($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.p2l() ? this$0.c2m($deserializer, $previousValue) : this$0.q2l();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.x2z_1 = tmp$ret$0;
    this.y2z_1 = false;
  }
  protoOf(TaggedDecoder).w2j = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).b30 = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).c30 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).d30 = function (tag) {
    var tmp = this.b30(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).e30 = function (tag) {
    var tmp = this.b30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).f30 = function (tag) {
    var tmp = this.b30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).g30 = function (tag) {
    var tmp = this.b30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).h30 = function (tag) {
    var tmp = this.b30(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).i30 = function (tag) {
    var tmp = this.b30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).j30 = function (tag) {
    var tmp = this.b30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).k30 = function (tag) {
    var tmp = this.b30(tag);
    return tmp instanceof Char ? tmp.h6_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).l30 = function (tag) {
    var tmp = this.b30(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).m30 = function (tag, enumDescriptor) {
    var tmp = this.b30(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).n30 = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.o30(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  protoOf(TaggedDecoder).c2m = function (deserializer, previousValue) {
    return this.d2m(deserializer);
  };
  protoOf(TaggedDecoder).b2m = function (descriptor) {
    return this.n30(this.p30(), descriptor);
  };
  protoOf(TaggedDecoder).p2l = function () {
    var tmp0_elvis_lhs = this.z2z();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.c30(currentTag);
  };
  protoOf(TaggedDecoder).q2l = function () {
    return null;
  };
  protoOf(TaggedDecoder).r2l = function () {
    return this.d30(this.p30());
  };
  protoOf(TaggedDecoder).s2l = function () {
    return this.e30(this.p30());
  };
  protoOf(TaggedDecoder).t2l = function () {
    return this.f30(this.p30());
  };
  protoOf(TaggedDecoder).u2l = function () {
    return this.g30(this.p30());
  };
  protoOf(TaggedDecoder).v2l = function () {
    return this.h30(this.p30());
  };
  protoOf(TaggedDecoder).w2l = function () {
    return this.i30(this.p30());
  };
  protoOf(TaggedDecoder).x2l = function () {
    return this.j30(this.p30());
  };
  protoOf(TaggedDecoder).y2l = function () {
    return this.k30(this.p30());
  };
  protoOf(TaggedDecoder).z2l = function () {
    return this.l30(this.p30());
  };
  protoOf(TaggedDecoder).a2m = function (enumDescriptor) {
    return this.m30(this.p30(), enumDescriptor);
  };
  protoOf(TaggedDecoder).e2m = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).f2m = function (descriptor) {
  };
  protoOf(TaggedDecoder).g2m = function (descriptor, index) {
    return this.d30(this.u2z(descriptor, index));
  };
  protoOf(TaggedDecoder).h2m = function (descriptor, index) {
    return this.e30(this.u2z(descriptor, index));
  };
  protoOf(TaggedDecoder).i2m = function (descriptor, index) {
    return this.f30(this.u2z(descriptor, index));
  };
  protoOf(TaggedDecoder).j2m = function (descriptor, index) {
    return this.g30(this.u2z(descriptor, index));
  };
  protoOf(TaggedDecoder).k2m = function (descriptor, index) {
    return this.h30(this.u2z(descriptor, index));
  };
  protoOf(TaggedDecoder).l2m = function (descriptor, index) {
    return this.i30(this.u2z(descriptor, index));
  };
  protoOf(TaggedDecoder).m2m = function (descriptor, index) {
    return this.j30(this.u2z(descriptor, index));
  };
  protoOf(TaggedDecoder).n2m = function (descriptor, index) {
    return this.k30(this.u2z(descriptor, index));
  };
  protoOf(TaggedDecoder).o2m = function (descriptor, index) {
    return this.l30(this.u2z(descriptor, index));
  };
  protoOf(TaggedDecoder).p2m = function (descriptor, index) {
    return this.n30(this.u2z(descriptor, index), descriptor.n2k(index));
  };
  protoOf(TaggedDecoder).q2m = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.u2z(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).s2m = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.u2z(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).z2z = function () {
    return lastOrNull(this.x2z_1);
  };
  protoOf(TaggedDecoder).o30 = function (name) {
    this.x2z_1.a(name);
  };
  protoOf(TaggedDecoder).p30 = function () {
    var r = this.x2z_1.b3(get_lastIndex_0(this.x2z_1));
    this.y2z_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.q30_1 = key;
    this.r30_1 = value;
  }
  protoOf(MapEntry).p = function () {
    return this.q30_1;
  };
  protoOf(MapEntry).q = function () {
    return this.r30_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.q30_1 + ', value=' + this.r30_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.q30_1 == null ? 0 : hashCode(this.q30_1);
    result = imul(result, 31) + (this.r30_1 == null ? 0 : hashCode(this.r30_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.q30_1, tmp0_other_with_cast.q30_1))
      return false;
    if (!equals(this.r30_1, tmp0_other_with_cast.r30_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.g2j('key', $keySerializer.s2i());
      $this$buildSerialDescriptor.g2j('value', $valueSerializer.s2i());
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.u30_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).s2i = function () {
    return this.u30_1;
  };
  protoOf(MapEntrySerializer_0).v30 = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(MapEntrySerializer_0).w30 = function (_this__u8e3s4) {
    return this.v30((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).x30 = function (_this__u8e3s4) {
    return _this__u8e3s4.q();
  };
  protoOf(MapEntrySerializer_0).y30 = function (_this__u8e3s4) {
    return this.x30((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).z30 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.g2j('first', $keySerializer.s2i());
      $this$buildClassSerialDescriptor.g2j('second', $valueSerializer.s2i());
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.f31_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).s2i = function () {
    return this.f31_1;
  };
  protoOf(PairSerializer_0).g31 = function (_this__u8e3s4) {
    return _this__u8e3s4.u2_1;
  };
  protoOf(PairSerializer_0).w30 = function (_this__u8e3s4) {
    return this.g31(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).h31 = function (_this__u8e3s4) {
    return _this__u8e3s4.v2_1;
  };
  protoOf(PairSerializer_0).y30 = function (_this__u8e3s4) {
    return this.h31(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).z30 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.r2m($this.l31_1, 0, $this.i31_1);
    var b = composite.r2m($this.l31_1, 1, $this.j31_1);
    var c = composite.r2m($this.l31_1, 2, $this.k31_1);
    composite.f2m($this.l31_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.u2m($this.l31_1);
      Companion_getInstance_7();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.r2m($this.l31_1, 0, $this.i31_1);
        } else {
          if (index === 1) {
            b = composite.r2m($this.l31_1, 1, $this.j31_1);
          } else {
            if (index === 2) {
              c = composite.r2m($this.l31_1, 2, $this.k31_1);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.f2m($this.l31_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.g2j('first', this$0.i31_1.s2i());
      $this$buildClassSerialDescriptor.g2j('second', this$0.j31_1.s2i());
      $this$buildClassSerialDescriptor.g2j('third', this$0.k31_1.s2i());
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.i31_1 = aSerializer;
    this.j31_1 = bSerializer;
    this.k31_1 = cSerializer;
    var tmp = this;
    tmp.l31_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).s2i = function () {
    return this.l31_1;
  };
  protoOf(TripleSerializer_0).m31 = function (encoder, value) {
    var structuredEncoder = encoder.e2m(this.l31_1);
    structuredEncoder.u2n(this.l31_1, 0, this.i31_1, value.f8_1);
    structuredEncoder.u2n(this.l31_1, 1, this.j31_1, value.g8_1);
    structuredEncoder.u2n(this.l31_1, 2, this.k31_1, value.h8_1);
    structuredEncoder.f2m(this.l31_1);
  };
  protoOf(TripleSerializer_0).t2i = function (encoder, value) {
    return this.m31(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).u2i = function (decoder) {
    var composite = decoder.e2m(this.l31_1);
    if (composite.t2m()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.a31_1 = keySerializer;
    this.b31_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).c31 = function (encoder, value) {
    var structuredEncoder = encoder.e2m(this.s2i());
    structuredEncoder.u2n(this.s2i(), 0, this.a31_1, this.w30(value));
    structuredEncoder.u2n(this.s2i(), 1, this.b31_1, this.y30(value));
    structuredEncoder.f2m(this.s2i());
  };
  protoOf(KeyValueSerializer).t2i = function (encoder, value) {
    return this.c31(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).u2i = function (decoder) {
    var composite = decoder.e2m(this.s2i());
    if (composite.t2m()) {
      var key = composite.r2m(this.s2i(), 0, this.a31_1);
      var value = composite.r2m(this.s2i(), 1, this.b31_1);
      return this.z30(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.u2m(this.s2i());
      Companion_getInstance_7();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          key_0 = composite.r2m(this.s2i(), 0, this.a31_1);
        } else {
          if (idx === 1) {
            value_0 = composite.r2m(this.s2i(), 1, this.b31_1);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.f2m(this.s2i());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.z30(tmp, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.n31_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).s2i = function () {
    return this.n31_1;
  };
  protoOf(ULongSerializer).o31 = function (encoder, value) {
    var tmp = encoder.j2n(this.n31_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.d2n(tmp$ret$0);
  };
  protoOf(ULongSerializer).t2i = function (encoder, value) {
    return this.o31(encoder, value instanceof ULong ? value.j9_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).p31 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.b2m(this.n31_1).v2l();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    return tmp$ret$0;
  };
  protoOf(ULongSerializer).u2i = function (decoder) {
    return new ULong(this.p31(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.q31_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_getInstance()));
  }
  protoOf(UIntSerializer).s2i = function () {
    return this.q31_1;
  };
  protoOf(UIntSerializer).r31 = function (encoder, value) {
    var tmp = encoder.j2n(this.q31_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.c2n(tmp$ret$0);
  };
  protoOf(UIntSerializer).t2i = function (encoder, value) {
    return this.r31(encoder, value instanceof UInt ? value.x8_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).s31 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.b2m(this.q31_1).u2l();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    return tmp$ret$0;
  };
  protoOf(UIntSerializer).u2i = function (decoder) {
    return new UInt(this.s31(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.t31_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_getInstance()));
  }
  protoOf(UShortSerializer).s2i = function () {
    return this.t31_1;
  };
  protoOf(UShortSerializer).u31 = function (encoder, value) {
    var tmp = encoder.j2n(this.t31_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.b2n(tmp$ret$0);
  };
  protoOf(UShortSerializer).t2i = function (encoder, value) {
    return this.u31(encoder, value instanceof UShort ? value.u9_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).v31 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.b2m(this.t31_1).t2l();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    return tmp$ret$0;
  };
  protoOf(UShortSerializer).u2i = function (decoder) {
    return new UShort(this.v31(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.w31_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_getInstance()));
  }
  protoOf(UByteSerializer).s2i = function () {
    return this.w31_1;
  };
  protoOf(UByteSerializer).x31 = function (encoder, value) {
    var tmp = encoder.j2n(this.w31_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.a2n(tmp$ret$0);
  };
  protoOf(UByteSerializer).t2i = function (encoder, value) {
    return this.x31(encoder, value instanceof UByte ? value.m8_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).y31 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.b2m(this.w31_1).s2l();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    return tmp$ret$0;
  };
  protoOf(UByteSerializer).u2i = function (decoder) {
    return new UByte(this.y31(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    baseSerializer = baseSerializer === VOID ? null : baseSerializer;
    this.z31_1 = baseClass;
    this.a32_1 = baseSerializer;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.b32_1 = tmp$ret$0;
    this.c32_1 = null;
    this.d32_1 = null;
  }
  protoOf(PolymorphicModuleBuilder).e32 = function (subclass, serializer) {
    this.b32_1.a(to(subclass, serializer));
  };
  protoOf(PolymorphicModuleBuilder).f32 = function (builder) {
    if (!(this.a32_1 == null)) {
      builder.l32(this.z31_1, this.z31_1, this.a32_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.b32_1;
    var tmp0_iterator = tmp0_forEach.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'kotlinx.serialization.modules.PolymorphicModuleBuilder.buildTo.<anonymous>' call
      var kclass = element.w2();
      var serializer = element.x2();
      var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
      builder.l32(this.z31_1, tmp, tmp$ret$0);
    }
    var defaultSerializer = this.c32_1;
    if (!(defaultSerializer == null)) {
      builder.m32(this.z31_1, defaultSerializer, false);
    }
    var defaultDeserializer = this.d32_1;
    if (!(defaultDeserializer == null)) {
      builder.n32(this.z31_1, defaultDeserializer, false);
    }
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).b2k = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.a2k(kClass, typeArgumentsSerializers) : $super.a2k.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.p32_1 = class2ContextualFactory;
    this.q32_1 = polyBase2Serializers;
    this.r32_1 = polyBase2DefaultSerializerProvider;
    this.s32_1 = polyBase2NamedSerializers;
    this.t32_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).e2o = function (baseClass, value) {
    if (!baseClass.td(value))
      return null;
    var tmp0_safe_receiver = this.q32_1.y1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.r32_1.y1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).d2o = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.s32_1.y1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).y1(serializedClassName);
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.t32_1.y1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).a2k = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.p32_1.y1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u32(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).o32 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.p32_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.o().f();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.p();
      var kclass = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.q();
      var serial = tmp$ret$2;
      var tmp0_subject = serial;
      if (tmp0_subject instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.x32_1;
        collector.y32(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject instanceof WithTypeArguments) {
          collector.w32(kclass, serial.v32_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.q32_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$3 = tmp1_forEach.o().f();
    var tmp0_iterator_0 = tmp$ret$3;
    while (tmp0_iterator_0.g()) {
      var element_0 = tmp0_iterator_0.h();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$4 = element_0.p();
      var baseClass = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$5 = element_0.q();
      var classMap = tmp$ret$5;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$6 = classMap.o().f();
      var tmp0_iterator_1 = tmp$ret$6;
      while (tmp0_iterator_1.g()) {
        var element_1 = tmp0_iterator_1.h();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$7 = element_1.p();
        var actualClass = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$8 = element_1.q();
        var serializer = tmp$ret$8;
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.z32(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = this.r32_1;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$10 = tmp2_forEach.o().f();
    var tmp0_iterator_2 = tmp$ret$10;
    while (tmp0_iterator_2.g()) {
      var element_2 = tmp0_iterator_2.h();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$11 = element_2.p();
      var baseClass_0 = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$12 = element_2.q();
      var provider = tmp$ret$12;
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.a33(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = this.t32_1;
    var tmp$ret$13;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$13 = tmp3_forEach.o().f();
    var tmp0_iterator_3 = tmp$ret$13;
    while (tmp0_iterator_3.g()) {
      var element_3 = tmp0_iterator_3.h();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$14;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$14 = element_3.p();
      var baseClass_1 = tmp$ret$14;
      var tmp$ret$15;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$15 = element_3.q();
      var provider_0 = tmp$ret$15;
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.b33(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.x32_1 = serializer;
  }
  protoOf(Argless).u32 = function (typeArgumentsSerializers) {
    return this.x32_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.x32_1, this.x32_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.x32_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.v32_1 = provider;
  }
  protoOf(WithTypeArguments).u32 = function (typeArgumentsSerializers) {
    return this.v32_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$0 = HashMap_init_$Create$();
    tmp.g32_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$1 = HashMap_init_$Create$();
    tmp_0.h32_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$2 = HashMap_init_$Create$();
    tmp_1.i32_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$3 = HashMap_init_$Create$();
    tmp_2.j32_1 = tmp$ret$3;
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$4 = HashMap_init_$Create$();
    tmp_3.k32_1 = tmp$ret$4;
  }
  protoOf(SerializersModuleBuilder).y32 = function (kClass, serializer) {
    return this.c33(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).w32 = function (kClass, provider) {
    return this.c33(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).z32 = function (baseClass, actualClass, actualSerializer) {
    this.l32(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).a33 = function (baseClass, defaultSerializerProvider) {
    this.m32(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).b33 = function (baseClass, defaultDeserializerProvider) {
    this.n32(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).d33 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.g32_1.y1(forClass);
      if (!(previous == null) ? !equals(previous, provider) : false) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + forClass + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.g32_1;
    tmp0_set.y2(forClass, provider);
  };
  protoOf(SerializersModuleBuilder).c33 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.d33(forClass, provider, allowOverwrite);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.d33.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).m32 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.i32_1.y1(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultSerializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.i32_1;
    tmp0_set.y2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).n32 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.k32_1.y1(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultDeserializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.k32_1;
    tmp0_set.y2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).e33 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.s2i().s2j();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.h32_1;
    var value = tmp0_getOrPut.y1(baseClass);
    var tmp;
    if (value == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      var answer = tmp$ret$0;
      tmp0_getOrPut.y2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$1 = tmp;
    var baseClassSerializers = tmp$ret$1;
    var previousSerializer = baseClassSerializers.y1(concreteClass);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp1_getOrPut = this.j32_1;
    var value_0 = tmp1_getOrPut.y1(baseClass);
    var tmp_0;
    if (value_0 == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$2 = HashMap_init_$Create$();
      var answer_0 = tmp$ret$2;
      tmp1_getOrPut.y2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    tmp$ret$3 = tmp_0;
    var names = tmp$ret$3;
    if (allowOverwrite) {
      if (!(previousSerializer == null)) {
        names.tb(previousSerializer.s2i().s2j());
      }
      // Inline function 'kotlin.collections.set' call
      baseClassSerializers.y2(concreteClass, concreteSerializer);
      // Inline function 'kotlin.collections.set' call
      names.y2(name, concreteSerializer);
      return Unit_getInstance();
    }
    if (!(previousSerializer == null)) {
      if (!equals(previousSerializer, concreteSerializer)) {
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
      } else {
        names.tb(previousSerializer.s2i().s2j());
      }
    }
    var previousByName = names.y1(name);
    if (!(previousByName == null)) {
      var tmp$ret$6;
      // Inline function 'kotlin.sequences.find' call
      var tmp2_find = asSequence(ensureNotNull(this.h32_1.y1(baseClass)));
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var tmp0_iterator = tmp2_find.f();
        while (tmp0_iterator.g()) {
          var element = tmp0_iterator.h();
          var tmp$ret$4;
          // Inline function 'kotlinx.serialization.modules.SerializersModuleBuilder.registerPolymorphicSerializer.<anonymous>' call
          tmp$ret$4 = element.q() === previousByName;
          if (tmp$ret$4) {
            tmp$ret$5 = element;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      tmp$ret$6 = tmp$ret$5;
      var conflictingClass = tmp$ret$6;
      throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers for base class '" + baseClass + "' " + ("have the same serial name '" + name + "': '" + concreteClass + "' and '" + conflictingClass + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.y2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.y2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).l32 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.e33(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.e33.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).u1a = function () {
    return new SerialModuleImpl(this.g32_1, this.h32_1, this.i32_1, this.j32_1, this.k32_1);
  };
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + concreteClass + ' already registered in the scope of ' + baseClass);
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.f33_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.f33_1.equals(tmp0_other_with_cast.f33_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.f33_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.f33_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$(notRegisteredMessage(_this__u8e3s4) + '\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().qe());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.h2u(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        var e = $p;
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = get_js(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.g33_1 = $factory;
  }
  protoOf(createCache$1).c2k = function (key) {
    return this.g33_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.h33_1 = $factory;
  }
  protoOf(createParametrizedCache$1).d2k = function (key, types) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_6();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      tmp$ret$0 = this.h33_1(key, types);
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_6();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(e));
        tmp_0 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    return tmp$ret$3;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).e2k = get_isNullable;
  protoOf(SerialDescriptorImpl).k2k = get_isInline;
  protoOf(AbstractDecoder).r2m = decodeSerializableElement$default;
  protoOf(AbstractDecoder).d2m = decodeSerializableValue;
  protoOf(AbstractDecoder).t2m = decodeSequentially;
  protoOf(AbstractDecoder).v2m = decodeCollectionSize;
  protoOf(AbstractEncoder).y2n = encodeNotNullMark;
  protoOf(AbstractEncoder).z2n = beginCollection;
  protoOf(AbstractEncoder).v2n = encodeSerializableValue;
  protoOf(AbstractEncoder).x2n = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).a2o = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).e2k = get_isNullable;
  protoOf(ListLikeDescriptor).k2k = get_isInline;
  protoOf(ListLikeDescriptor).i2k = get_annotations;
  protoOf(ArrayListClassDesc).e2k = get_isNullable;
  protoOf(ArrayListClassDesc).k2k = get_isInline;
  protoOf(ArrayListClassDesc).i2k = get_annotations;
  protoOf(HashSetClassDesc).e2k = get_isNullable;
  protoOf(HashSetClassDesc).k2k = get_isInline;
  protoOf(HashSetClassDesc).i2k = get_annotations;
  protoOf(LinkedHashSetClassDesc).e2k = get_isNullable;
  protoOf(LinkedHashSetClassDesc).k2k = get_isInline;
  protoOf(LinkedHashSetClassDesc).i2k = get_annotations;
  protoOf(MapLikeDescriptor).e2k = get_isNullable;
  protoOf(MapLikeDescriptor).k2k = get_isInline;
  protoOf(MapLikeDescriptor).i2k = get_annotations;
  protoOf(HashMapClassDesc).e2k = get_isNullable;
  protoOf(HashMapClassDesc).k2k = get_isInline;
  protoOf(HashMapClassDesc).i2k = get_annotations;
  protoOf(LinkedHashMapClassDesc).e2k = get_isNullable;
  protoOf(LinkedHashMapClassDesc).k2k = get_isInline;
  protoOf(LinkedHashMapClassDesc).i2k = get_annotations;
  protoOf(ArrayClassDesc).e2k = get_isNullable;
  protoOf(ArrayClassDesc).k2k = get_isInline;
  protoOf(ArrayClassDesc).i2k = get_annotations;
  protoOf(PrimitiveArrayDescriptor).e2k = get_isNullable;
  protoOf(PrimitiveArrayDescriptor).k2k = get_isInline;
  protoOf(PrimitiveArrayDescriptor).i2k = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).e2k = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).k2k = get_isInline;
  protoOf(EnumDescriptor).e2k = get_isNullable;
  protoOf(EnumDescriptor).k2k = get_isInline;
  protoOf(InlineClassDescriptor).e2k = get_isNullable;
  protoOf(InlinePrimitiveDescriptor$1).x2t = typeParametersSerializers;
  protoOf(NoOpEncoder).y2n = encodeNotNullMark;
  protoOf(NoOpEncoder).z2n = beginCollection;
  protoOf(NoOpEncoder).v2n = encodeSerializableValue;
  protoOf(NoOpEncoder).x2n = encodeNullableSerializableValue;
  protoOf(NoOpEncoder).a2o = shouldEncodeElementDefault;
  protoOf(NothingSerialDescriptor).e2k = get_isNullable;
  protoOf(NothingSerialDescriptor).k2k = get_isInline;
  protoOf(NothingSerialDescriptor).i2k = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).e2k = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).k2k = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).i2k = get_annotations;
  protoOf(TaggedDecoder).r2m = decodeSerializableElement$default;
  protoOf(TaggedDecoder).d2m = decodeSerializableValue;
  protoOf(TaggedDecoder).t2m = decodeSequentially;
  protoOf(TaggedDecoder).v2m = decodeCollectionSize;
  protoOf(NamedValueDecoder).d2m = decodeSerializableValue;
  protoOf(NamedValueDecoder).r2m = decodeSerializableElement$default;
  protoOf(NamedValueDecoder).t2m = decodeSequentially;
  protoOf(NamedValueDecoder).v2m = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = decodeSerializableElement$default;
  _.$_$.b = PolymorphicSerializer_init_$Create$;
  _.$_$.c = SealedClassSerializer_init_$Create$;
  _.$_$.d = SerializationException_init_$Init$;
  _.$_$.e = SerializationException_init_$Create$;
  _.$_$.f = UnknownFieldException_init_$Create$;
  _.$_$.g = SEALED_getInstance;
  _.$_$.h = STRING_getInstance;
  _.$_$.i = CONTEXTUAL_getInstance;
  _.$_$.j = ENUM_getInstance;
  _.$_$.k = CLASS_getInstance;
  _.$_$.l = LIST_getInstance;
  _.$_$.m = MAP_getInstance;
  _.$_$.n = Companion_getInstance_7;
  _.$_$.o = BooleanSerializer_getInstance;
  _.$_$.p = ByteArraySerializer_getInstance;
  _.$_$.q = IntSerializer_getInstance;
  _.$_$.r = StringSerializer_getInstance;
  _.$_$.s = ListSerializer;
  _.$_$.t = MapSerializer;
  _.$_$.u = SetSerializer;
  _.$_$.v = get_nullable;
  _.$_$.w = serializer_2;
  _.$_$.x = serializer_11;
  _.$_$.y = serializer_9;
  _.$_$.z = serializer_13;
  _.$_$.a1 = serializer_7;
  _.$_$.b1 = PolymorphicKind;
  _.$_$.c1 = PrimitiveKind;
  _.$_$.d1 = PrimitiveSerialDescriptor;
  _.$_$.e1 = get_annotations;
  _.$_$.f1 = get_isInline;
  _.$_$.g1 = get_isNullable;
  _.$_$.h1 = SerialDescriptor;
  _.$_$.i1 = ENUM;
  _.$_$.j1 = buildSerialDescriptor;
  _.$_$.k1 = getContextualDescriptor;
  _.$_$.l1 = AbstractDecoder;
  _.$_$.m1 = AbstractEncoder;
  _.$_$.n1 = decodeCollectionSize;
  _.$_$.o1 = decodeSequentially;
  _.$_$.p1 = CompositeDecoder;
  _.$_$.q1 = CompositeEncoder;
  _.$_$.r1 = decodeSerializableValue;
  _.$_$.s1 = Decoder;
  _.$_$.t1 = beginCollection;
  _.$_$.u1 = encodeNotNullMark;
  _.$_$.v1 = encodeNullableSerializableValue;
  _.$_$.w1 = Encoder;
  _.$_$.x1 = AbstractPolymorphicSerializer;
  _.$_$.y1 = ElementMarker;
  _.$_$.z1 = typeParametersSerializers;
  _.$_$.a2 = GeneratedSerializer;
  _.$_$.b2 = InlinePrimitiveDescriptor;
  _.$_$.c2 = NamedValueDecoder;
  _.$_$.d2 = PluginGeneratedSerialDescriptor;
  _.$_$.e2 = SerializerFactory;
  _.$_$.f2 = createSimpleEnumSerializer;
  _.$_$.g2 = jsonCachedSerialNames;
  _.$_$.h2 = throwMissingFieldException;
  _.$_$.i2 = EmptySerializersModule_0;
  _.$_$.j2 = PolymorphicModuleBuilder;
  _.$_$.k2 = SerializersModuleBuilder;
  _.$_$.l2 = contextual;
  _.$_$.m2 = SerializersModuleCollector;
  _.$_$.n2 = BinaryFormat;
  _.$_$.o2 = DeserializationStrategy;
  _.$_$.p2 = KSerializer;
  _.$_$.q2 = MissingFieldException;
  _.$_$.r2 = SealedClassSerializer;
  _.$_$.s2 = SerializationException;
  _.$_$.t2 = StringFormat;
  _.$_$.u2 = findPolymorphicSerializer;
  _.$_$.v2 = serializerOrNull_0;
  _.$_$.w2 = serializer_0;
  _.$_$.x2 = serializer_1;
  _.$_$.y2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
