(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    root['ktor-ktor-utils-js-ir'] = factory(typeof this['ktor-ktor-utils-js-ir'] === 'undefined' ? {} : this['ktor-ktor-utils-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var charSequenceLength = kotlin_kotlin.$_$.i9;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var protoOf = kotlin_kotlin.$_$.sa;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.he;
  var getStringHashCode = kotlin_kotlin.$_$.t9;
  var classMeta = kotlin_kotlin.$_$.k9;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var interfaceMeta = kotlin_kotlin.$_$.v9;
  var charArray = kotlin_kotlin.$_$.g9;
  var charSequenceGet = kotlin_kotlin.$_$.h9;
  var concatToString = kotlin_kotlin.$_$.sb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.k1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.j;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.z;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.f1;
  var get_lastIndex = kotlin_kotlin.$_$.jc;
  var Char = kotlin_kotlin.$_$.rd;
  var equals = kotlin_kotlin.$_$.n9;
  var readBytes_0 = kotlin_io_ktor_ktor_io.$_$.e1;
  var Long = kotlin_kotlin.$_$.ae;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.c1;
  var toByte = kotlin_kotlin.$_$.ua;
  var numberToChar = kotlin_kotlin.$_$.na;
  var indexOf = kotlin_kotlin.$_$.cc;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var isObject = kotlin_kotlin.$_$.ha;
  var hashCode = kotlin_kotlin.$_$.u9;
  var MutableMap = kotlin_kotlin.$_$.f5;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var Entry = kotlin_kotlin.$_$.b5;
  var isInterface = kotlin_kotlin.$_$.ea;
  var MutableEntry = kotlin_kotlin.$_$.e5;
  var toString = kotlin_kotlin.$_$.k2;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.o8;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var get = kotlin_kotlin.$_$.v8;
  var fold = kotlin_kotlin.$_$.u8;
  var minusKey = kotlin_kotlin.$_$.w8;
  var plus = kotlin_kotlin.$_$.y8;
  var Element = kotlin_kotlin.$_$.x8;
  var concatToString_0 = kotlin_kotlin.$_$.rb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Set = kotlin_kotlin.$_$.h5;
  var toString_0 = kotlin_kotlin.$_$.xa;
  var MutableSet = kotlin_kotlin.$_$.g5;
  var firstOrNull = kotlin_kotlin.$_$.k6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var to = kotlin_kotlin.$_$.kf;
  var addAll = kotlin_kotlin.$_$.i5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.h2;
  var equals_0 = kotlin_kotlin.$_$.yb;
  var IOException = kotlin_io_ktor_ktor_io.$_$.l1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var Comparable = kotlin_kotlin.$_$.sd;
  var Enum = kotlin_kotlin.$_$.vd;
  var toInt = kotlin_kotlin.$_$.bd;
  var IllegalStateException = kotlin_kotlin.$_$.zd;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.if;
  var isSuspendFunction = kotlin_kotlin.$_$.ja;
  var MutableList = kotlin_kotlin.$_$.d5;
  var objectCreate = kotlin_kotlin.$_$.qa;
  var ArrayList = kotlin_kotlin.$_$.u4;
  var emptyList = kotlin_kotlin.$_$.f6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.y6;
  var last = kotlin_kotlin.$_$.b7;
  var mutableListOf = kotlin_kotlin.$_$.h7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var extendThrowable = kotlin_kotlin.$_$.o9;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Companion_getInstance = kotlin_kotlin.$_$.o4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.xe;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.f4;
  var Continuation = kotlin_kotlin.$_$.t8;
  var fillArrayVal = kotlin_kotlin.$_$.p9;
  var intercepted = kotlin_kotlin.$_$.n8;
  var toList = kotlin_kotlin.$_$.y7;
  var KProperty0 = kotlin_kotlin.$_$.lb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s9;
  var lazy = kotlin_kotlin.$_$.ef;
  var isNaN_0 = kotlin_kotlin.$_$.cf;
  var numberToLong = kotlin_kotlin.$_$.pa;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AttributeKey, 'AttributeKey', classMeta);
  function get_0(key) {
    var tmp0_elvis_lhs = this.g1n(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  setMetadataFor(Attributes, 'Attributes', interfaceMeta);
  setMetadataFor($toByteArrayCOROUTINE$0, '$toByteArrayCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(CaseInsensitiveMap, 'CaseInsensitiveMap', classMeta, VOID, [MutableMap]);
  setMetadataFor(Entry_0, 'Entry', classMeta, VOID, [MutableEntry]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  setMetadataFor(DelegatingMutableSet$iterator$1, VOID, classMeta);
  setMetadataFor(DelegatingMutableSet, 'DelegatingMutableSet', classMeta, VOID, [MutableSet]);
  function get_1(name) {
    var tmp0_safe_receiver = this.u1o(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_forEach = this.w1o();
    var tmp0_iterator = tmp0_forEach.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.p();
      var k = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.q();
      var v = tmp$ret$1;
      body(k, v);
    }
    return Unit_getInstance();
  }
  setMetadataFor(StringValues, 'StringValues', interfaceMeta);
  setMetadataFor(StringValuesBuilderImpl, 'StringValuesBuilderImpl', classMeta);
  setMetadataFor(StringValuesImpl, 'StringValuesImpl', classMeta, VOID, [StringValues]);
  setMetadataFor(CaseInsensitiveString, 'CaseInsensitiveString', classMeta);
  setMetadataFor(ChannelIOException, 'ChannelIOException', classMeta, IOException);
  setMetadataFor(CopyOnWriteHashMap, 'CopyOnWriteHashMap', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(GMTDate, 'GMTDate', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(WeekDay, 'WeekDay', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Month, 'Month', classMeta, Enum);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(GMTDateParser, 'GMTDateParser', classMeta);
  setMetadataFor(InvalidDateStringException, 'InvalidDateStringException', classMeta, IllegalStateException);
  setMetadataFor(GMTDateBuilder, 'GMTDateBuilder', classMeta);
  setMetadataFor($proceedLoopCOROUTINE$1, '$proceedLoopCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(PipelineContext, 'PipelineContext', classMeta, VOID, [CoroutineScope], VOID, VOID, [1, 0]);
  setMetadataFor(DebugPipelineContext, 'DebugPipelineContext', classMeta, PipelineContext, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(PhaseContent, 'PhaseContent', classMeta);
  setMetadataFor(Pipeline, 'Pipeline', classMeta, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(PipelinePhase, 'PipelinePhase', classMeta);
  setMetadataFor(InvalidPhaseException, 'InvalidPhaseException', classMeta, Error);
  setMetadataFor(PipelinePhaseRelation, 'PipelinePhaseRelation', classMeta);
  setMetadataFor(After, 'After', classMeta, PipelinePhaseRelation);
  setMetadataFor(Before, 'Before', classMeta, PipelinePhaseRelation);
  setMetadataFor(Last, 'Last', objectMeta, PipelinePhaseRelation);
  setMetadataFor(SuspendFunctionGun$continuation$1, VOID, classMeta, VOID, [Continuation]);
  setMetadataFor(SuspendFunctionGun, 'SuspendFunctionGun', classMeta, PipelineContext, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(TypeInfo, 'TypeInfo', classMeta);
  setMetadataFor(AttributesJs, 'AttributesJs', classMeta, VOID, [Attributes]);
  setMetadataFor(PlatformUtils, 'PlatformUtils', objectMeta);
  setMetadataFor(InvalidTimestampException, 'InvalidTimestampException', classMeta, IllegalStateException);
  setMetadataFor(KtorSimpleLogger$1, VOID, classMeta);
  setMetadataFor(JsType, 'JsType', objectMeta);
  //endregion
  function AttributeKey(name) {
    this.e1n_1 = name;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.e1n_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.e1n_1;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof AttributeKey)
      other;
    else
      THROW_CCE();
    if (!(this.e1n_1 === other.e1n_1))
      return false;
    return true;
  };
  protoOf(AttributeKey).hashCode = function () {
    return getStringHashCode(this.e1n_1);
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = other.l1n();
    var tmp0_iterator = tmp0_forEach.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.i1n(element instanceof AttributeKey ? element : THROW_CCE(), other.f1n(element));
    }
  }
  function get_BASE64_INVERSE_ALPHABET() {
    _init_properties_Base64_kt__ymmsz3();
    return BASE64_INVERSE_ALPHABET;
  }
  var BASE64_INVERSE_ALPHABET;
  function encodeBase64(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    var array = _this__u8e3s4;
    var position = 0;
    var writeOffset = 0;
    var charArray_0 = charArray((imul(_this__u8e3s4.length, 8) / 6 | 0) + 3 | 0);
    while ((position + 3 | 0) <= array.length) {
      var first = array[position];
      var second = array[position + 1 | 0];
      var third = array[position + 2 | 0];
      position = position + 3 | 0;
      var chunk = (first & 255) << 16 | (second & 255) << 8 | third & 255;
      var inductionVariable = 3;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var char = chunk >> imul(6, index) & 63;
          var tmp1 = writeOffset;
          writeOffset = tmp1 + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.ktor.util.toBase64' call
          tmp$ret$0 = charSequenceGet(_get_BASE64_ALPHABET_$accessor$1rlrljx_834nh0(), char);
          charArray_0[tmp1] = tmp$ret$0;
        }
         while (0 <= inductionVariable);
    }
    var remaining = array.length - position | 0;
    if (remaining === 0)
      return concatToString(charArray_0, 0, writeOffset);
    var tmp;
    if (remaining === 1) {
      tmp = (array[position] & 255) << 16 | 0 | 0;
    } else {
      tmp = (array[position] & 255) << 16 | (array[position + 1 | 0] & 255) << 8 | 0;
    }
    var chunk_0 = tmp;
    var padSize = imul(3 - remaining | 0, 8) / 6 | 0;
    var inductionVariable_0 = 3;
    if (padSize <= inductionVariable_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + -1 | 0;
        var char_0 = chunk_0 >> imul(6, index_0) & 63;
        var tmp3 = writeOffset;
        writeOffset = tmp3 + 1 | 0;
        var tmp$ret$1;
        // Inline function 'io.ktor.util.toBase64' call
        tmp$ret$1 = charSequenceGet(_get_BASE64_ALPHABET_$accessor$1rlrljx_834nh0(), char_0);
        charArray_0[tmp3] = tmp$ret$1;
      }
       while (!(index_0 === padSize));
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < padSize)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'io.ktor.util.encodeBase64.<anonymous>' call
        var tmp0 = writeOffset;
        writeOffset = tmp0 + 1 | 0;
        charArray_0[tmp0] = _Char___init__impl__6a9atx(61);
      }
       while (inductionVariable_1 < padSize);
    return concatToString(charArray_0, 0, writeOffset);
  }
  function encodeBase64_0(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.util.encodeBase64.<anonymous>' call
        writeText(builder, _this__u8e3s4);
        tmp$ret$0 = builder.u1a();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.fp();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return encodeBase64_1(tmp$ret$0);
  }
  function decodeBase64String(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    return String_0(decodeBase64Bytes(_this__u8e3s4), VOID, VOID, Charsets_getInstance().d1j_1);
  }
  function encodeBase64_1(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    return encodeBase64(readBytes(_this__u8e3s4));
  }
  function decodeBase64Bytes(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.util.decodeBase64Bytes.<anonymous>' call
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.text.dropLastWhile' call
          var inductionVariable = get_lastIndex(_this__u8e3s4);
          if (0 <= inductionVariable)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var tmp$ret$0;
              // Inline function 'io.ktor.util.decodeBase64Bytes.<anonymous>.<anonymous>' call
              var tmp1__anonymous__uwfjfc = charSequenceGet(_this__u8e3s4, index);
              tmp$ret$0 = equals(new Char(tmp1__anonymous__uwfjfc), new Char(_Char___init__impl__6a9atx(61)));
              if (!tmp$ret$0) {
                var tmp$ret$2;
                // Inline function 'kotlin.text.substring' call
                var tmp0_substring = index + 1 | 0;
                var tmp$ret$1;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$1 = _this__u8e3s4;
                tmp$ret$2 = tmp$ret$1.substring(0, tmp0_substring);
                tmp$ret$3 = tmp$ret$2;
                break $l$block;
              }
            }
             while (0 <= inductionVariable);
          tmp$ret$3 = '';
        }
        writeText(builder, tmp$ret$3);
        tmp$ret$4 = builder.u1a();
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.fp();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return readBytes_0(decodeBase64Bytes_0(tmp$ret$4));
  }
  function decodeBase64Bytes_0(_this__u8e3s4) {
    _init_properties_Base64_kt__ymmsz3();
    var tmp$ret$4;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.util.decodeBase64Bytes.<anonymous>' call
        var data = new Int8Array(4);
        while (_this__u8e3s4.x18().u(new Long(0, 0)) > 0) {
          var read = readAvailable(_this__u8e3s4, data);
          var tmp$ret$3;
          // Inline function 'kotlin.collections.foldIndexed' call
          var index = 0;
          var accumulator = 0;
          var indexedObject = data;
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var element = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$2;
            // Inline function 'io.ktor.util.decodeBase64Bytes.<anonymous>.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            var tmp0__anonymous__q1qw7t = tmp1;
            var tmp1__anonymous__uwfjfc = accumulator;
            var tmp$ret$1;
            // Inline function 'io.ktor.util.fromBase64' call
            var tmp$ret$0;
            // Inline function 'kotlin.experimental.and' call
            var tmp0_and = toByte(_get_BASE64_INVERSE_ALPHABET_$accessor$1rlrljx_ynhlmj()[element & 255]);
            var tmp1_and = _get_BASE64_MASK_$accessor$1rlrljx_e67tnp();
            tmp$ret$0 = toByte(tmp0_and & tmp1_and);
            tmp$ret$1 = tmp$ret$0;
            tmp$ret$2 = tmp1__anonymous__uwfjfc | tmp$ret$1 << imul(3 - tmp0__anonymous__q1qw7t | 0, 6);
            accumulator = tmp$ret$2;
          }
          tmp$ret$3 = accumulator;
          var chunk = tmp$ret$3;
          var inductionVariable_0 = data.length - 2 | 0;
          var last_0 = data.length - read | 0;
          if (last_0 <= inductionVariable_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var origin = chunk >> imul(8, index_0) & 255;
              builder.t1g(toByte(origin));
            }
             while (!(index_0 === last_0));
        }
        tmp$ret$4 = builder.u1a();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.fp();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  }
  function _get_BASE64_ALPHABET_$accessor$1rlrljx_834nh0() {
    _init_properties_Base64_kt__ymmsz3();
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  }
  function _get_BASE64_INVERSE_ALPHABET_$accessor$1rlrljx_ynhlmj() {
    _init_properties_Base64_kt__ymmsz3();
    return get_BASE64_INVERSE_ALPHABET();
  }
  function _get_BASE64_MASK_$accessor$1rlrljx_e67tnp() {
    _init_properties_Base64_kt__ymmsz3();
    return 63;
  }
  var properties_initialized_Base64_kt_5g824v;
  function _init_properties_Base64_kt__ymmsz3() {
    if (properties_initialized_Base64_kt_5g824v) {
    } else {
      properties_initialized_Base64_kt_5g824v = true;
      var tmp = 0;
      var tmp_0 = 256;
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'io.ktor.util.BASE64_INVERSE_ALPHABET.<anonymous>' call
        tmp$ret$0 = indexOf(_get_BASE64_ALPHABET_$accessor$1rlrljx_834nh0(), numberToChar(tmp_2));
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      BASE64_INVERSE_ALPHABET = tmp_1;
    }
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function $toByteArrayCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1n_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$0).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            this.xh_1 = 1;
            suspendResult = this.u1n_1.e1d(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
          case 2:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 2) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$$receiver) {
    return $this$$receiver.v1n_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$$receiver) {
    return caseInsensitive($this$$receiver);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$$receiver) {
    return new Entry_0($this$$receiver.p().v1n_1, $this$$receiver.q());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver.p()), $this$$receiver.q());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.x1n_1 = tmp$ret$0;
  }
  protoOf(CaseInsensitiveMap).i = function () {
    return this.x1n_1.i();
  };
  protoOf(CaseInsensitiveMap).y1n = function (key) {
    return this.x1n_1.s1(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.y1n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).z1n = function (key) {
    return this.x1n_1.y1(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).y1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.z1n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).l = function () {
    return this.x1n_1.l();
  };
  protoOf(CaseInsensitiveMap).oa = function () {
    this.x1n_1.oa();
  };
  protoOf(CaseInsensitiveMap).a1o = function (key, value) {
    return this.x1n_1.y2(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).y2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.a1o(tmp, isObject(value) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).b1o = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = from.o().f();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.p();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.q();
      var value = tmp$ret$2;
      this.a1o(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).sb = function (from) {
    return this.b1o(from);
  };
  protoOf(CaseInsensitiveMap).c1o = function (key) {
    return this.x1n_1.tb(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).tb = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.c1o((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).z1 = function () {
    var tmp = this.x1n_1.z1();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).o = function () {
    var tmp = this.x1n_1.o();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).a2 = function () {
    return this.x1n_1.a2();
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.x1n_1, this.x1n_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.x1n_1);
  };
  function Entry_0(key, value) {
    this.d1o_1 = key;
    this.e1o_1 = value;
  }
  protoOf(Entry_0).p = function () {
    return this.d1o_1;
  };
  protoOf(Entry_0).q = function () {
    return this.e1o_1;
  };
  protoOf(Entry_0).f1o = function (newValue) {
    this.e1o_1 = newValue;
    return this.e1o_1;
  };
  protoOf(Entry_0).ib = function (newValue) {
    return this.f1o((newValue == null ? true : isObject(newValue)) ? newValue : THROW_CCE());
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.d1o_1)) | 0) + hashCode(ensureNotNull(this.e1o_1)) | 0;
  };
  protoOf(Entry_0).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.p(), this.d1o_1) ? equals(other.q(), this.e1o_1) : false;
  };
  protoOf(Entry_0).toString = function () {
    return '' + this.d1o_1 + '=' + this.e1o_1;
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'io.ktor.util.toCharArray.<anonymous>' call
      tmp$ret$0 = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercaseChar' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
    return equals(new Char(tmp$ret$3), new Char(_this__u8e3s4));
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.h4(tmp$ret$0);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(_no_name_provided__qut3iv).gp = function (context, exception) {
    var tmp$ret$0;
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  function get_digits() {
    _init_properties_Crypto_kt__txayzl();
    return digits;
  }
  var digits;
  function generateNonce(size) {
    _init_properties_Crypto_kt__txayzl();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.util.generateNonce.<anonymous>' call
        while (builder.i() < size) {
          writeText(builder, generateNonce_0());
        }
        tmp$ret$0 = builder.u1a();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.fp();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return readBytes(tmp$ret$0, size);
  }
  function get_NONCE_SIZE_IN_BYTES() {
    return NONCE_SIZE_IN_BYTES;
  }
  var NONCE_SIZE_IN_BYTES;
  function hex(bytes) {
    _init_properties_Crypto_kt__txayzl();
    var result = charArray(imul(bytes.length, 2));
    var resultIndex = 0;
    var digits = get_digits();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = bytes[index] & 255;
        var tmp1 = resultIndex;
        resultIndex = tmp1 + 1 | 0;
        result[tmp1] = digits[b >> 4];
        var tmp2 = resultIndex;
        resultIndex = tmp2 + 1 | 0;
        result[tmp2] = digits[b & 15];
      }
       while (inductionVariable < last);
    return concatToString_0(result);
  }
  var properties_initialized_Crypto_kt_8g5vqb;
  function _init_properties_Crypto_kt__txayzl() {
    if (properties_initialized_Crypto_kt_8g5vqb) {
    } else {
      properties_initialized_Crypto_kt_8g5vqb = true;
      digits = toCharArray('0123456789abcdef');
    }
  }
  function DelegatingMutableSet$iterator$1(this$0) {
    this.i1o_1 = this$0;
    this.h1o_1 = this$0.j1o_1.f();
  }
  protoOf(DelegatingMutableSet$iterator$1).g = function () {
    return this.h1o_1.g();
  };
  protoOf(DelegatingMutableSet$iterator$1).h = function () {
    return this.i1o_1.k1o_1(this.h1o_1.h());
  };
  protoOf(DelegatingMutableSet$iterator$1).z2 = function () {
    return this.h1o_1.z2();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.j1o_1 = delegate;
    this.k1o_1 = convertTo;
    this.l1o_1 = convert;
    this.m1o_1 = this.j1o_1.i();
  }
  protoOf(DelegatingMutableSet).n1o = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      tmp$ret$0 = this.l1o_1(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(DelegatingMutableSet).o1o = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      tmp$ret$0 = this.k1o_1(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(DelegatingMutableSet).i = function () {
    return this.m1o_1;
  };
  protoOf(DelegatingMutableSet).p1o = function (element) {
    return this.j1o_1.a(this.l1o_1(element));
  };
  protoOf(DelegatingMutableSet).a = function (element) {
    return this.p1o((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).q1o = function (elements) {
    return this.j1o_1.k(this.n1o(elements));
  };
  protoOf(DelegatingMutableSet).k = function (elements) {
    return this.q1o(elements);
  };
  protoOf(DelegatingMutableSet).oa = function () {
    this.j1o_1.oa();
  };
  protoOf(DelegatingMutableSet).r1o = function (element) {
    return this.j1o_1.b1(this.l1o_1(element));
  };
  protoOf(DelegatingMutableSet).b1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.r1o((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).s1o = function (elements) {
    return this.j1o_1.c1(this.n1o(elements));
  };
  protoOf(DelegatingMutableSet).c1 = function (elements) {
    return this.s1o(elements);
  };
  protoOf(DelegatingMutableSet).l = function () {
    return this.j1o_1.l();
  };
  protoOf(DelegatingMutableSet).f = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.j1o_1);
  };
  protoOf(DelegatingMutableSet).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    var elements = this.o1o(this.j1o_1);
    var tmp_0;
    if (other.c1(elements)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsAll' call
      var tmp0_containsAll = other;
      tmp$ret$0 = elements.c1(tmp0_containsAll);
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString_0(this.o1o(this.j1o_1));
  };
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.z1o_1.y1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.a1p(name);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.z1o_1;
      tmp0_set.y2(name, tmp0_also);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.b1p(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.y1o_1 = caseInsensitiveName;
    this.z1o_1 = this.y1o_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).t1o = function () {
    return this.y1o_1;
  };
  protoOf(StringValuesBuilderImpl).u1o = function (name) {
    return this.z1o_1.y1(name);
  };
  protoOf(StringValuesBuilderImpl).v1o = function () {
    return this.z1o_1.z1();
  };
  protoOf(StringValuesBuilderImpl).l = function () {
    return this.z1o_1.l();
  };
  protoOf(StringValuesBuilderImpl).w1o = function () {
    return unmodifiable(this.z1o_1.o());
  };
  protoOf(StringValuesBuilderImpl).c1p = function (name, value) {
    this.d1p(value);
    var list = ensureListForKey(this, name);
    list.oa();
    list.a(value);
  };
  protoOf(StringValuesBuilderImpl).z1n = function (name) {
    var tmp0_safe_receiver = this.u1o(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).e1p = function (name, value) {
    this.d1p(value);
    ensureListForKey(this, name).a(value);
  };
  protoOf(StringValuesBuilderImpl).f1p = function (stringValues) {
    stringValues.x1o(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).b1p = function (name, values) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureListForKey(this, name);
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_iterator = values.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.d1p(element);
      tmp0_let.a(element);
    }
    tmp$ret$0 = Unit_getInstance();
  };
  protoOf(StringValuesBuilderImpl).g1p = function (name) {
    this.z1o_1.tb(name);
  };
  protoOf(StringValuesBuilderImpl).oa = function () {
    this.z1o_1.oa();
  };
  protoOf(StringValuesBuilderImpl).a1p = function (name) {
  };
  protoOf(StringValuesBuilderImpl).d1p = function (value) {
  };
  function listForKey($this, name) {
    return $this.i1p_1.y1(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.h1p_1 = caseInsensitiveName;
    var tmp;
    if (this.h1p_1) {
      tmp = caseInsensitiveMap();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      tmp = tmp$ret$0;
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$1 = values.o().f();
    var tmp0_iterator = tmp$ret$1;
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$2 = element.p();
      var key = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$3 = element.q();
      var value = tmp$ret$3;
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = value.i();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_List)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          var tmp$ret$4;
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          tmp$ret$4 = value.j(index);
          list.a(tmp$ret$4);
        }
         while (inductionVariable < tmp0_List);
      tmp$ret$5 = list;
      tmp$ret$6 = tmp$ret$5;
      var tmp1_set = tmp$ret$6;
      newMap.y2(key, tmp1_set);
    }
    this.i1p_1 = newMap;
  }
  protoOf(StringValuesImpl).t1o = function () {
    return this.h1p_1;
  };
  protoOf(StringValuesImpl).z1n = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).u1o = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).v1o = function () {
    return unmodifiable(this.i1p_1.z1());
  };
  protoOf(StringValuesImpl).l = function () {
    return this.i1p_1.l();
  };
  protoOf(StringValuesImpl).w1o = function () {
    return unmodifiable(this.i1p_1.o());
  };
  protoOf(StringValuesImpl).x1o = function (body) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.i1p_1;
    tmp$ret$0 = tmp0_iterator.o().f();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.g()) {
      var tmp1_loop_parameter = tmp0_iterator_0.h();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.p();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.q();
      var value = tmp$ret$2;
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.h1p_1 + ') ' + this.w1o();
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.h1p_1 === other.t1o()))
      return false;
    return entriesEquals(this.w1o(), other.w1o());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.w1o(), imul(31, this.h1p_1 | 0));
  };
  function appendAll(_this__u8e3s4, builder) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = builder.w1o();
    var tmp0_iterator = tmp0_forEach.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.p();
      var name = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.q();
      var values = tmp$ret$1;
      _this__u8e3s4.b1p(name, values);
    }
    tmp$ret$2 = _this__u8e3s4;
    return tmp$ret$2;
  }
  function flattenEntries(_this__u8e3s4) {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp1_flatMap = _this__u8e3s4.w1o();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_flatMap.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      var tmp$ret$3;
      // Inline function 'io.ktor.util.flattenEntries.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = element.q();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_0 = tmp1_map.f();
      while (tmp0_iterator_0.g()) {
        var item = tmp0_iterator_0.h();
        var tmp$ret$0;
        // Inline function 'io.ktor.util.flattenEntries.<anonymous>.<anonymous>' call
        tmp$ret$0 = to(element.p(), item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var list = tmp$ret$3;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$4 = tmp0_flatMapTo;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, index);
          tmp$ret$0 = !equals(new Char(toLowerCasePreservingASCII(tmp0__anonymous__q1qw7t)), new Char(tmp0__anonymous__q1qw7t));
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    var tmp2_buildString = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = StringBuilder_init_$Create$(tmp2_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    tmp1_apply.bf(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp1_apply.i6(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    tmp$ret$2 = tmp1_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp0_subject = ch;
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercaseChar' call
      var tmp$ret$2;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = toString(ch);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
      tmp$ret$1 = tmp1_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.v1n_1 = content;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.v1n_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    tmp.w1n_1 = getStringHashCode(tmp$ret$1);
  }
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1n_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.v1n_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.w1n_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.v1n_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function ChannelIOException() {
  }
  function CopyOnWriteHashMap() {
    this.j1p_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).y1 = function (key) {
    return this.j1p_1.kotlinx$atomicfu$value.y1(key);
  };
  function Companion() {
    Companion_instance = this;
    this.k1p_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_0();
    this.l1p_1 = seconds;
    this.m1p_1 = minutes;
    this.n1p_1 = hours;
    this.o1p_1 = dayOfWeek;
    this.p1p_1 = dayOfMonth;
    this.q1p_1 = dayOfYear;
    this.r1p_1 = month;
    this.s1p_1 = year;
    this.t1p_1 = timestamp;
  }
  protoOf(GMTDate).u1p = function (other) {
    return this.t1p_1.u(other.t1p_1);
  };
  protoOf(GMTDate).l7 = function (other) {
    return this.u1p(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.l1p_1 + ', minutes=' + this.m1p_1 + ', hours=' + this.n1p_1 + ', dayOfWeek=' + this.o1p_1 + ', dayOfMonth=' + this.p1p_1 + ', dayOfYear=' + this.q1p_1 + ', month=' + this.r1p_1 + ', year=' + this.s1p_1 + ', timestamp=' + toString_0(this.t1p_1) + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.l1p_1;
    result = imul(result, 31) + this.m1p_1 | 0;
    result = imul(result, 31) + this.n1p_1 | 0;
    result = imul(result, 31) + this.o1p_1.hashCode() | 0;
    result = imul(result, 31) + this.p1p_1 | 0;
    result = imul(result, 31) + this.q1p_1 | 0;
    result = imul(result, 31) + this.r1p_1.hashCode() | 0;
    result = imul(result, 31) + this.s1p_1 | 0;
    result = imul(result, 31) + this.t1p_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.l1p_1 === tmp0_other_with_cast.l1p_1))
      return false;
    if (!(this.m1p_1 === tmp0_other_with_cast.m1p_1))
      return false;
    if (!(this.n1p_1 === tmp0_other_with_cast.n1p_1))
      return false;
    if (!this.o1p_1.equals(tmp0_other_with_cast.o1p_1))
      return false;
    if (!(this.p1p_1 === tmp0_other_with_cast.p1p_1))
      return false;
    if (!(this.q1p_1 === tmp0_other_with_cast.q1p_1))
      return false;
    if (!this.r1p_1.equals(tmp0_other_with_cast.r1p_1))
      return false;
    if (!(this.s1p_1 === tmp0_other_with_cast.s1p_1))
      return false;
    if (!this.t1p_1.equals(tmp0_other_with_cast.t1p_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).v1p = function (ordinal) {
    return values()[ordinal];
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    WeekDay_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_getInstance();
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    Companion_getInstance_1();
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.y1p_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).v1p = function (ordinal) {
    return values_0()[ordinal];
  };
  protoOf(Companion_1).z1p = function (value) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = values_0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = tmp0_find;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'io.ktor.util.date.Companion.from.<anonymous>' call
        tmp$ret$0 = element.c1q_1 === value;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var tmp0_elvis_lhs = tmp$ret$2;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_error = 'Invalid month: ' + value;
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    Month_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Companion_getInstance_2();
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.c1q_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function handleToken(_this__u8e3s4, $this, type, chunk) {
    var tmp0_subject = type;
    var tmp;
    var tmp_0 = new Char(tmp0_subject);
    Companion_getInstance_3();
    if (equals(tmp_0, new Char(_Char___init__impl__6a9atx(115)))) {
      _this__u8e3s4.d1q_1 = toInt(chunk);
      tmp = Unit_getInstance();
    } else {
      var tmp_1 = new Char(tmp0_subject);
      Companion_getInstance_3();
      if (equals(tmp_1, new Char(_Char___init__impl__6a9atx(109)))) {
        _this__u8e3s4.e1q_1 = toInt(chunk);
        tmp = Unit_getInstance();
      } else {
        var tmp_2 = new Char(tmp0_subject);
        Companion_getInstance_3();
        if (equals(tmp_2, new Char(_Char___init__impl__6a9atx(104)))) {
          _this__u8e3s4.f1q_1 = toInt(chunk);
          tmp = Unit_getInstance();
        } else {
          var tmp_3 = new Char(tmp0_subject);
          Companion_getInstance_3();
          if (equals(tmp_3, new Char(_Char___init__impl__6a9atx(100)))) {
            _this__u8e3s4.g1q_1 = toInt(chunk);
            tmp = Unit_getInstance();
          } else {
            var tmp_4 = new Char(tmp0_subject);
            Companion_getInstance_3();
            if (equals(tmp_4, new Char(_Char___init__impl__6a9atx(77)))) {
              _this__u8e3s4.h1q_1 = Companion_getInstance_2().z1p(chunk);
              tmp = Unit_getInstance();
            } else {
              var tmp_5 = new Char(tmp0_subject);
              Companion_getInstance_3();
              if (equals(tmp_5, new Char(_Char___init__impl__6a9atx(89)))) {
                _this__u8e3s4.i1q_1 = toInt(chunk);
                tmp = Unit_getInstance();
              } else {
                var tmp_6 = new Char(tmp0_subject);
                Companion_getInstance_3();
                if (equals(tmp_6, new Char(_Char___init__impl__6a9atx(122)))) {
                  var tmp0_check = chunk === 'GMT';
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp_7;
                  if (!tmp0_check) {
                    var tmp$ret$0;
                    // Inline function 'kotlin.check.<anonymous>' call
                    tmp$ret$0 = 'Check failed.';
                    var message = tmp$ret$0;
                    throw IllegalStateException_init_$Create$(toString_0(message));
                  }
                  tmp = tmp_7;
                } else {
                  var tmp_8 = new Char(tmp0_subject);
                  Companion_getInstance_3();
                  if (equals(tmp_8, new Char(_Char___init__impl__6a9atx(42)))) {
                    tmp = Unit_getInstance();
                  } else {
                    var tmp$ret$2;
                    $l$block: {
                      // Inline function 'kotlin.text.all' call
                      var indexedObject = chunk;
                      var inductionVariable = 0;
                      var last = indexedObject.length;
                      while (inductionVariable < last) {
                        var element = charSequenceGet(indexedObject, inductionVariable);
                        inductionVariable = inductionVariable + 1 | 0;
                        var tmp$ret$1;
                        // Inline function 'io.ktor.util.date.GMTDateParser.handleToken.<anonymous>' call
                        tmp$ret$1 = equals(new Char(element), new Char(type));
                        if (!tmp$ret$1) {
                          tmp$ret$2 = false;
                          break $l$block;
                        }
                      }
                      tmp$ret$2 = true;
                    }
                    var tmp1_check = tmp$ret$2;
                    // Inline function 'kotlin.contracts.contract' call
                    // Inline function 'kotlin.contracts.contract' call
                    var tmp_9;
                    if (!tmp1_check) {
                      var tmp$ret$3;
                      // Inline function 'kotlin.check.<anonymous>' call
                      tmp$ret$3 = 'Check failed.';
                      var message_0 = tmp$ret$3;
                      throw IllegalStateException_init_$Create$(toString_0(message_0));
                    }
                    tmp = tmp_9;
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.j1q_1 = _Char___init__impl__6a9atx(115);
    this.k1q_1 = _Char___init__impl__6a9atx(109);
    this.l1q_1 = _Char___init__impl__6a9atx(104);
    this.m1q_1 = _Char___init__impl__6a9atx(100);
    this.n1q_1 = _Char___init__impl__6a9atx(77);
    this.o1q_1 = _Char___init__impl__6a9atx(89);
    this.p1q_1 = _Char___init__impl__6a9atx(122);
    this.q1q_1 = _Char___init__impl__6a9atx(42);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function GMTDateParser(pattern) {
    Companion_getInstance_3();
    this.r1q_1 = pattern;
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = this.r1q_1;
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    var tmp1_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.util.date.GMTDateParser.<anonymous>' call
      tmp$ret$1 = "Date parser pattern shouldn't be empty.";
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
  }
  protoOf(GMTDateParser).s1q = function (dateString) {
    var builder = new GMTDateBuilder();
    var start = 0;
    var current = charSequenceGet(this.r1q_1, start);
    var chunkStart = 0;
    var index = 1;
    try {
      $l$loop: while (index < this.r1q_1.length) {
        if (equals(new Char(charSequenceGet(this.r1q_1, index)), new Char(current))) {
          var tmp0 = index;
          index = tmp0 + 1 | 0;
          continue $l$loop;
        }
        var chunkEnd = (chunkStart + index | 0) - start | 0;
        var tmp = current;
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = chunkStart;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = dateString;
        tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, chunkEnd);
        handleToken(builder, this, tmp, tmp$ret$1);
        chunkStart = chunkEnd;
        start = index;
        current = charSequenceGet(this.r1q_1, index);
        var tmp1 = index;
        index = tmp1 + 1 | 0;
      }
      if (chunkStart < dateString.length) {
        var tmp_0 = current;
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp1_substring = chunkStart;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = dateString;
        tmp$ret$3 = tmp$ret$2.substring(tmp1_substring);
        handleToken(builder, this, tmp_0, tmp$ret$3);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var _ = $p;
        throw new InvalidDateStringException(dateString, chunkStart, this.r1q_1);
      } else {
        throw $p;
      }
    }
    return builder.u1a();
  };
  function InvalidDateStringException(data, at, pattern) {
    IllegalStateException_init_$Init$('Failed to parse date string: "' + data + '" at index ' + at + '. Pattern: "' + pattern + '"', this);
    captureStack(this, InvalidDateStringException);
  }
  function GMTDateBuilder() {
    this.d1q_1 = null;
    this.e1q_1 = null;
    this.f1q_1 = null;
    this.g1q_1 = null;
    this.i1q_1 = null;
  }
  protoOf(GMTDateBuilder).t1q = function () {
    var tmp = this.h1q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('month');
    }
  };
  protoOf(GMTDateBuilder).u1a = function () {
    return GMTDate_1(ensureNotNull(this.d1q_1), ensureNotNull(this.e1q_1), ensureNotNull(this.f1q_1), ensureNotNull(this.g1q_1), this.t1q(), ensureNotNull(this.i1q_1));
  };
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$1($this, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function $proceedLoopCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1r_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$1).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 6;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            this.d1r_1 = this.c1r_1.k1r_1;
            if (this.d1r_1 === -1) {
              this.xh_1 = 5;
              continue $sm;
            } else {
              this.xh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.e1r_1 = this.c1r_1.h1r_1;
            if (this.d1r_1 >= this.e1r_1.i()) {
              this.c1r_1.l1r();
              this.xh_1 = 5;
              continue $sm;
            } else {
              this.xh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.f1r_1 = this.e1r_1.j(this.d1r_1);
            this.c1r_1.k1r_1 = this.d1r_1 + 1 | 0;
            this.xh_1 = 4;
            var tmp_0 = this.f1r_1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this.c1r_1, this.c1r_1.j1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            {
              this.xh_1 = 1;
              continue $sm;
            }

            this.xh_1 = 5;
            continue $sm;
          case 5:
            return this.c1r_1.j1r_1;
          case 6:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 6) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.h1r_1 = interceptors;
    this.i1r_1 = coroutineContext;
    this.j1r_1 = subject;
    this.k1r_1 = 0;
  }
  protoOf(DebugPipelineContext).ej = function () {
    return this.i1r_1;
  };
  protoOf(DebugPipelineContext).m1r = function () {
    return this.j1r_1;
  };
  protoOf(DebugPipelineContext).l1r = function () {
    this.k1r_1 = -1;
  };
  protoOf(DebugPipelineContext).n1r = function (subject, $completion) {
    this.j1r_1 = subject;
    var tmp0 = this.o1r($completion);
    return tmp0;
  };
  protoOf(DebugPipelineContext).o1r = function ($completion) {
    var index = this.k1r_1;
    if (index < 0)
      return this.j1r_1;
    if (index >= this.h1r_1.i()) {
      this.l1r();
      return this.j1r_1;
    }
    var tmp0 = proceedLoop(this, $completion);
    return tmp0;
  };
  protoOf(DebugPipelineContext).p1r = function (initial, $completion) {
    this.k1r_1 = 0;
    this.j1r_1 = initial;
    var tmp0 = this.o1r($completion);
    return tmp0;
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_4().q1r_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    var tmp0_check = Companion_getInstance_4().q1r_1.l();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      tmp$ret$0 = 'The shared empty array list has been modified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copyInterceptors($this) {
    $this.t1r_1 = $this.v1r();
    $this.u1r_1 = false;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.q1r_1 = tmp$ret$0;
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_4();
    this.r1r_1 = phase;
    this.s1r_1 = relation;
    this.t1r_1 = interceptors;
    this.u1r_1 = true;
  }
  protoOf(PhaseContent).dq = function () {
    return this.t1r_1.l();
  };
  protoOf(PhaseContent).i = function () {
    return this.t1r_1.i();
  };
  protoOf(PhaseContent).w1r = function (interceptor) {
    if (this.u1r_1) {
      copyInterceptors(this);
    }
    this.t1r_1.a(interceptor);
  };
  protoOf(PhaseContent).x1r = function (destination) {
    var interceptors = this.t1r_1;
    if (destination instanceof ArrayList) {
      destination.ub(destination.i() + interceptors.i() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.a(interceptors.j(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).y1r = function () {
    this.u1r_1 = true;
    return this.t1r_1;
  };
  protoOf(PhaseContent).v1r = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.pipeline.PhaseContent.copiedInterceptors.<anonymous>' call
    tmp0_apply.k(this.t1r_1);
    tmp$ret$1 = tmp0_apply;
    return tmp$ret$1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.r1r_1.z1r_1 + '`, ' + this.i() + ' handlers';
  };
  function _set_interceptors__wod97b($this, value) {
    $this.e1s_1.kotlinx$atomicfu$value = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.e1s_1.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.h1s());
  }
  function findPhase($this, phase) {
    var phasesList = $this.c1s_1;
    var inductionVariable = 0;
    var last = phasesList.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.j(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.a3(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.r1r_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.c1s_1;
    var inductionVariable = 0;
    var last = phasesList.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.j(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.r1r_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.c1s_1;
    var inductionVariable = 0;
    var last = phasesList.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.j(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.r1r_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.d1s_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.c1s_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.j(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.dq())
            continue $l$loop_0;
          var interceptors = phaseContent.y1r();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var destination = tmp$ret$0;
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.j(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.x1r(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.f1s_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.f1s_1 = false;
    $this.g1s_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.f1s_1 = false;
    $this.g1s_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.y1r());
    $this.f1s_1 = false;
    $this.g1s_1 = phaseContent.r1r_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.c1s_1.l() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.f1s_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.g1s_1, phase)) {
      currentInterceptors.a(block);
      return true;
    }
    if (equals(phase, last($this.c1s_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.c1s_1)) {
      ensureNotNull(findPhase($this, phase)).w1r(block);
      currentInterceptors.a(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.a1s_1 = AttributesJsFn(true);
    this.b1s_1 = false;
    this.c1s_1 = mutableListOf(phases.slice());
    this.d1s_1 = 0;
    this.e1s_1 = atomic$ref$1(null);
    this.f1s_1 = false;
    this.g1s_1 = null;
  }
  protoOf(Pipeline).h1s = function () {
    return this.b1s_1;
  };
  protoOf(Pipeline).i1s = function (context, subject, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.w3();
    var tmp0 = createContext(this, context, subject, tmp$ret$0).p1r(subject, $completion);
    return tmp0;
  };
  protoOf(Pipeline).k1s = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.c1s_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.c1s_1.j(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s1r_1;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.l1s_1;
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.c1s_1.bb(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).m1s = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.c1s_1.bb(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).n1s = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (typeof block === 'function')
      block;
    else
      THROW_CCE();
    if (tryAddToPhaseFastPath(this, phase, block)) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.d1s_1;
      tmp1_this.d1s_1 = tmp2 + 1 | 0;
      return Unit_getInstance();
    }
    phaseContent.w1r(block);
    var tmp3_this = this;
    var tmp4 = tmp3_this.d1s_1;
    tmp3_this.d1s_1 = tmp4 + 1 | 0;
    resetInterceptorsList(this);
    this.o1s();
  };
  protoOf(Pipeline).o1s = function () {
  };
  function PipelineContext(context) {
    this.j1s_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() ? true : debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.z1r_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.z1r_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.l1s_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.p1s_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _ = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.w1s_1;
      if (currentIndex === $this.r1s_1.i()) {
        if (!direct) {
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          var tmp1_success = $this.t1s_1;
          tmp$ret$0 = _Result___init__impl__xyqfz8(tmp1_success);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.w1s_1 = currentIndex + 1 | 0;
      var next = $this.r1s_1.j(currentIndex);
      try {
        var result = next($this, $this.t1s_1, $this.s1s_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.v1s_1 < 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    }
    var next = ensureNotNull($this.u1s_1[$this.v1s_1]);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.v1s_1;
    tmp0_this.v1s_1 = tmp1 - 1 | 0;
    $this.u1s_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.x3(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.x3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.v1s_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp0_this = $this;
    var tmp1 = tmp0_this.v1s_1;
    tmp0_this.v1s_1 = tmp1 - 1 | 0;
    $this.u1s_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    var tmp0_this = $this;
    tmp0_this.v1s_1 = tmp0_this.v1s_1 + 1 | 0;
    $this.u1s_1[tmp0_this.v1s_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.y1s_1 = this$0;
    this.x1s_1 = IntCompanionObject_getInstance().MIN_VALUE;
  }
  protoOf(SuspendFunctionGun$continuation$1).w3 = function () {
    var tmp0_safe_receiver = this.y1s_1.u1s_1[this.y1s_1.v1s_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w3();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Not started');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SuspendFunctionGun$continuation$1).z1s = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      resumeRootWith(this.y1s_1, tmp$ret$0);
      return Unit_getInstance();
    }
    loop(this.y1s_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).x3 = function (result) {
    return this.z1s(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.r1s_1 = blocks;
    var tmp = this;
    tmp.s1s_1 = new SuspendFunctionGun$continuation$1(this);
    this.t1s_1 = initial;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.r1s_1.i();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_0.u1s_1 = tmp$ret$0;
    this.v1s_1 = -1;
    this.w1s_1 = 0;
  }
  protoOf(SuspendFunctionGun).ej = function () {
    return this.s1s_1.w3();
  };
  protoOf(SuspendFunctionGun).m1r = function () {
    return this.t1s_1;
  };
  protoOf(SuspendFunctionGun).o1r = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $completion;
      if (this.w1s_1 === this.r1s_1.i()) {
        tmp$ret$0 = this.t1s_1;
        break $l$block_0;
      }
      addContinuation(this, intercepted(tmp0__anonymous__q1qw7t));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.t1s_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  };
  protoOf(SuspendFunctionGun).n1r = function (subject, $completion) {
    this.t1s_1 = subject;
    var tmp0 = this.o1r($completion);
    return tmp0;
  };
  protoOf(SuspendFunctionGun).p1r = function (initial, $completion) {
    this.w1s_1 = 0;
    if (this.w1s_1 === this.r1s_1.i())
      return initial;
    this.t1s_1 = initial;
    if (this.v1s_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    var tmp0 = this.o1r($completion);
    return tmp0;
  };
  function TypeInfo(type, reifiedType, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.a1t_1 = type;
    this.b1t_1 = reifiedType;
    this.c1t_1 = kotlinType;
  }
  protoOf(TypeInfo).toString = function () {
    return 'TypeInfo(type=' + this.a1t_1 + ', reifiedType=' + this.b1t_1 + ', kotlinType=' + this.c1t_1 + ')';
  };
  protoOf(TypeInfo).hashCode = function () {
    var result = this.a1t_1.hashCode();
    result = imul(result, 31) + hashCode(this.b1t_1) | 0;
    result = imul(result, 31) + (this.c1t_1 == null ? 0 : hashCode(this.c1t_1)) | 0;
    return result;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.a1t_1.equals(tmp0_other_with_cast.a1t_1))
      return false;
    if (!equals(this.b1t_1, tmp0_other_with_cast.b1t_1))
      return false;
    if (!equals(this.c1t_1, tmp0_other_with_cast.c1t_1))
      return false;
    return true;
  };
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.d1t_1 = tmp$ret$0;
  }
  protoOf(AttributesJs).g1n = function (key) {
    var tmp = this.d1t_1.y1(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).h1n = function (key) {
    return this.d1t_1.s1(key);
  };
  protoOf(AttributesJs).i1n = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.d1t_1;
    tmp0_set.y2(key, value);
  };
  protoOf(AttributesJs).j1n = function (key) {
    this.d1t_1.tb(key);
  };
  protoOf(AttributesJs).k1n = function (key, block) {
    var tmp0_safe_receiver = this.d1t_1.y1(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return isObject(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.d1t_1;
    tmp0_set.y2(key, tmp0_also);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  protoOf(AttributesJs).l1n = function () {
    return toList(this.d1t_1.z1());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get__crypto() {
    _init_properties_CryptoJs_kt__3vpuru();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _crypto$factory();
    tmp$ret$0 = _crypto$delegate.q();
    return tmp$ret$0;
  }
  var _crypto$delegate;
  function generateNonce_0() {
    _init_properties_CryptoJs_kt__3vpuru();
    var buffer = new Int8Array(get_NONCE_SIZE_IN_BYTES());
    if (PlatformUtils_getInstance().f1t_1) {
      get__crypto().randomFillSync(buffer);
    } else {
      get__crypto().getRandomValues(buffer);
    }
    return hex(buffer);
  }
  function _crypto$delegate$lambda() {
    _init_properties_CryptoJs_kt__3vpuru();
    var tmp;
    if (PlatformUtils_getInstance().f1t_1) {
      tmp = eval('require')('crypto');
    } else {
      tmp = window ? window.crypto ? window.crypto : window.msCrypto : self.crypto;
    }
    return tmp;
  }
  function _crypto$factory() {
    return getPropertyCallableRef('_crypto', 0, KProperty0, function () {
      return get__crypto();
    }, null);
  }
  var properties_initialized_CryptoJs_kt_linsrw;
  function _init_properties_CryptoJs_kt__3vpuru() {
    if (properties_initialized_CryptoJs_kt_linsrw) {
    } else {
      properties_initialized_CryptoJs_kt_linsrw = true;
      _crypto$delegate = lazy(_crypto$delegate$lambda);
    }
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var tmp_0 = typeof window !== 'undefined' && typeof window.document !== 'undefined' || (typeof self !== 'undefined' && typeof self.location !== 'undefined');
    tmp.e1t_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    tmp_1.f1t_1 = (!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE();
    this.g1t_1 = false;
    this.h1t_1 = false;
    this.i1t_1 = false;
    this.j1t_1 = true;
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp0_safe_receiver = timestamp;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pd();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp$ret$0 = new Date(tmp1_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_getInstance_1().v1p((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_getInstance_2().v1p(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + toString_0(timestamp), this);
    captureStack(this, InvalidTimestampException);
  }
  function GMTDate_1(seconds, minutes, hours, dayOfMonth, month, year) {
    var timestamp = numberToLong(Date.UTC(year, month.n4_1, dayOfMonth, hours, minutes, seconds));
    return GMTDate_0(timestamp);
  }
  function getTimeMillis() {
    return numberToLong((new Date()).getTime());
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function KtorSimpleLogger$1() {
  }
  protoOf(KtorSimpleLogger$1).k1t = function (message) {
    console.info('TRACE: ' + message);
  };
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.td(_this__u8e3s4);
  }
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function JsType() {
    JsType_instance = this;
  }
  var JsType_instance;
  function JsType_getInstance() {
    if (JsType_instance == null)
      new JsType();
    return JsType_instance;
  }
  //region block: post-declaration
  protoOf(_no_name_provided__qut3iv).a4 = get;
  protoOf(_no_name_provided__qut3iv).g4 = fold;
  protoOf(_no_name_provided__qut3iv).f4 = minusKey;
  protoOf(_no_name_provided__qut3iv).h4 = plus;
  protoOf(AttributesJs).f1n = get_0;
  //endregion
  //region block: init
  NONCE_SIZE_IN_BYTES = 16;
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toByteArray;
  _.$_$.b = JsType_getInstance;
  _.$_$.c = PlatformUtils_getInstance;
  _.$_$.d = ChannelIOException;
  _.$_$.e = CopyOnWriteHashMap;
  _.$_$.f = GMTDateParser;
  _.$_$.g = GMTDate_0;
  _.$_$.h = GMTDate_1;
  _.$_$.i = InvalidDateStringException;
  _.$_$.j = values_0;
  _.$_$.k = getTimeMillis;
  _.$_$.l = KtorSimpleLogger;
  _.$_$.m = PipelineContext;
  _.$_$.n = PipelinePhase;
  _.$_$.o = Pipeline;
  _.$_$.p = instanceOf;
  _.$_$.q = typeInfoImpl;
  _.$_$.r = AttributeKey;
  _.$_$.s = AttributesJsFn;
  _.$_$.t = SilentSupervisor;
  _.$_$.u = forEach;
  _.$_$.v = get_1;
  _.$_$.w = StringValuesBuilderImpl;
  _.$_$.x = StringValuesImpl;
  _.$_$.y = StringValues;
  _.$_$.z = appendAll;
  _.$_$.a1 = decodeBase64String;
  _.$_$.b1 = encodeBase64_0;
  _.$_$.c1 = encodeBase64;
  _.$_$.d1 = flattenEntries;
  _.$_$.e1 = generateNonce;
  _.$_$.f1 = hex;
  _.$_$.g1 = isLowerCase;
  _.$_$.h1 = putAll;
  _.$_$.i1 = toCharArray;
  _.$_$.j1 = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils-js-ir.js.map
