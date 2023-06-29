(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-serialization-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    root['ktor-ktor-serialization-kotlinx-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-serialization-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.sa;
  var classMeta = kotlin_kotlin.$_$.k9;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.if;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var THROW_CCE = kotlin_kotlin.$_$.he;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var isInterface = kotlin_kotlin.$_$.ea;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.l;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.y1;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.w;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getKClass = kotlin_kotlin.$_$.e;
  var discard = kotlin_io_ktor_ktor_io.$_$.b1;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.f1;
  var readText = kotlin_io_ktor_ktor_io.$_$.h1;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.d;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Map = kotlin_kotlin.$_$.c5;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Set = kotlin_kotlin.$_$.h5;
  var firstOrNull = kotlin_kotlin.$_$.l6;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.h4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var isArray = kotlin_kotlin.$_$.w9;
  var List = kotlin_kotlin.$_$.a5;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var filterNotNull = kotlin_kotlin.$_$.j6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.s7;
  var Collection = kotlin_kotlin.$_$.v4;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationParameters, 'SerializationParameters', classMeta);
  setMetadataFor(SerializationNegotiationParameters, 'SerializationNegotiationParameters', classMeta, SerializationParameters);
  setMetadataFor($serializeCOROUTINE$0, '$serializeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(KotlinxSerializationBase, 'KotlinxSerializationBase', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(KotlinxSerializationConverter$serializationBase$1, VOID, classMeta, KotlinxSerializationBase, VOID, VOID, VOID, [1]);
  setMetadataFor($deserializeCOROUTINE$1, '$deserializeCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(KotlinxSerializationConverter, 'KotlinxSerializationConverter', classMeta, VOID, [ContentConverter], VOID, VOID, [4, 3]);
  //endregion
  function SerializationNegotiationParameters(format, value, typeInfo, charset, contentType) {
    SerializationParameters.call(this, format, value, typeInfo, charset);
    this.n33_1 = format;
    this.o33_1 = value;
    this.p33_1 = typeInfo;
    this.q33_1 = charset;
    this.r33_1 = contentType;
  }
  protoOf(SerializationNegotiationParameters).s33 = function () {
    return this.n33_1;
  };
  protoOf(SerializationNegotiationParameters).q = function () {
    return this.o33_1;
  };
  protoOf(SerializationNegotiationParameters).t33 = function () {
    return this.p33_1;
  };
  protoOf(SerializationNegotiationParameters).u33 = function () {
    return this.q33_1;
  };
  function $serializeCOROUTINE$0(_this__u8e3s4, parameters, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j34_1 = _this__u8e3s4;
    this.k34_1 = parameters;
  }
  protoOf($serializeCOROUTINE$0).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            var tmp_0 = this;
            tmp_0.l34_1 = serializerFromTypeInfo(this.k34_1.t33(), this.j34_1.o34_1.w2j());
            this.k34_1.z33_1 = this.l34_1;
            this.xh_1 = 1;
            suspendResult = this.j34_1.p34(this.k34_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m34_1 = suspendResult;
            if (!(this.m34_1 == null)) {
              return this.m34_1;
            }

            this.n34_1 = guessSerializer(this.k34_1.q(), this.j34_1.o34_1.w2j());
            this.k34_1.z33_1 = this.n34_1;
            this.xh_1 = 2;
            suspendResult = this.j34_1.p34(this.k34_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function KotlinxSerializationBase(format) {
    this.o34_1 = format;
  }
  protoOf(KotlinxSerializationBase).q34 = function (parameters, $completion) {
    var tmp = new $serializeCOROUTINE$0(this, parameters, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  function SerializationParameters(format, value, typeInfo, charset) {
    this.v33_1 = format;
    this.w33_1 = value;
    this.x33_1 = typeInfo;
    this.y33_1 = charset;
  }
  protoOf(SerializationParameters).s33 = function () {
    return this.v33_1;
  };
  protoOf(SerializationParameters).q = function () {
    return this.w33_1;
  };
  protoOf(SerializationParameters).t33 = function () {
    return this.x33_1;
  };
  protoOf(SerializationParameters).u33 = function () {
    return this.y33_1;
  };
  protoOf(SerializationParameters).a34 = function () {
    var tmp = this.z33_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('serializer');
    }
  };
  function serialization(_this__u8e3s4, contentType, format) {
    _this__u8e3s4.k2g(contentType, new KotlinxSerializationConverter(format));
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp0_subject = format;
    var tmp;
    if (isInterface(tmp0_subject, StringFormat)) {
      var content = format.u2j(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        var content_0 = format.x2j(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = new ByteArrayContent(content_0, contentType);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function KotlinxSerializationConverter$serializationBase$1(this$0) {
    this.s34_1 = this$0;
    KotlinxSerializationBase.call(this, this$0.t34_1);
  }
  protoOf(KotlinxSerializationConverter$serializationBase$1).v34 = function (parameters, $completion) {
    if (!(parameters instanceof SerializationNegotiationParameters)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'parameters type is ' + getKClassFromExpression(parameters).sd() + ',' + (' but expected ' + getKClass(SerializationNegotiationParameters).sd());
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return serializeContent(this.s34_1, parameters.a34(), parameters.s33(), parameters.q(), parameters.r33_1, parameters.u33());
  };
  protoOf(KotlinxSerializationConverter$serializationBase$1).p34 = function (parameters, $completion) {
    return this.v34(parameters, $completion);
  };
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e35_1 = _this__u8e3s4;
    this.f35_1 = charset;
    this.g35_1 = typeInfo;
    this.h35_1 = content;
  }
  protoOf($deserializeCOROUTINE$1).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 4;
            this.i35_1 = serializerFromTypeInfo(this.g35_1, this.e35_1.t34_1.w2j());
            this.xh_1 = 1;
            suspendResult = this.h35_1.e1d(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var contentPacket = suspendResult;
            this.yh_1 = 2;
            var tmp0_subject = this.e35_1.t34_1;
            var tmp_0;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_0 = this.e35_1.t34_1.v2j(this.i35_1, readText(contentPacket, this.f35_1));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_0 = this.e35_1.t34_1.y2j(this.i35_1, readBytes(contentPacket));
              } else {
                discard(contentPacket);
                var tmp0_error = 'Unsupported format ' + this.e35_1.t34_1;
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }

            return tmp_0;
          case 2:
            this.yh_1 = 4;
            var tmp_1 = this.ai_1;
            if (tmp_1 instanceof Error) {
              var cause = this.ai_1;
              throw new JsonConvertException('Illegal input', cause);
            } else {
              throw this.ai_1;
            }

            break;
          case 3:
            this.yh_1 = 4;
            return Unit_getInstance();
          case 4:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 4) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function KotlinxSerializationConverter(format) {
    this.t34_1 = format;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.t34_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.t34_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      tmp$ret$0 = 'Only binary and string formats are supported, ' + ('' + this.t34_1 + ' is not supported.');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_2 = this;
    tmp_2.u34_1 = new KotlinxSerializationConverter$serializationBase$1(this);
  }
  protoOf(KotlinxSerializationConverter).j35 = function (contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.k35(contentType, charset, typeInfo, value, $completion);
    return tmp0;
  };
  protoOf(KotlinxSerializationConverter).l2g = function (contentType, charset, typeInfo, value, $completion) {
    return this.j35(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).k35 = function (contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.u34_1.q34(new SerializationNegotiationParameters(this.t34_1, value, typeInfo, charset, contentType), $completion);
    return tmp0;
  };
  protoOf(KotlinxSerializationConverter).m2g = function (contentType, charset, typeInfo, value, $completion) {
    return this.k35(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).n2g = function (charset, typeInfo, content, $completion) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp0_safe_receiver = typeInfo.c1t_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.serializerFromTypeInfo.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.fe().l() ? null : serializerOrNull(module_0, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.b2k(typeInfo.a1t_1);
      tmp_0 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.a1t_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_getInstance()));
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
          var tmp1_safe_receiver = firstOrNull(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
            tmp$ret$0 = guessSerializer(tmp1_safe_receiver, module_0);
            tmp$ret$1 = tmp$ret$0;
            tmp_0 = tmp$ret$1;
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
              var keySerializer = elementSerializer(value.z1(), module_0);
              var valueSerializer = elementSerializer(value.a2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp3_elvis_lhs = module_0.b2k(getKClassFromExpression(value));
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_1 = tmp;
    return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.c1t_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ge()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.distinctBy' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = filterNotNull(_this__u8e3s4);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$0 = guessSerializer(item, module_0);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp2_distinctBy = tmp$ret$2;
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp2_distinctBy.f();
    while (tmp0_iterator_0.g()) {
      var e = tmp0_iterator_0.h();
      var tmp$ret$3;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$3 = e.s2i().s2j();
      var key = tmp$ret$3;
      if (set.a(key)) {
        list.a(e);
      }
    }
    tmp$ret$4 = list;
    var serializers = tmp$ret$4;
    if (serializers.i() > 1) {
      // Inline function 'kotlin.error' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp3_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.f();
      while (tmp0_iterator_1.g()) {
        var item_0 = tmp0_iterator_1.h();
        var tmp$ret$5;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.s2i().s2j();
        tmp3_mapTo.a(tmp$ret$5);
      }
      tmp$ret$6 = tmp3_mapTo;
      tmp$ret$7 = tmp$ret$6;
      var tmp4_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
      throw IllegalStateException_init_$Create$(toString(tmp4_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.s2i().e2k()) {
      return selected;
    }
    if (isInterface(selected, KSerializer))
      selected;
    else
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.f();
      while (tmp0_iterator_2.g()) {
        var element = tmp0_iterator_2.h();
        var tmp$ret$9;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$9 = element == null;
        if (tmp$ret$9) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-js-ir.js.map
