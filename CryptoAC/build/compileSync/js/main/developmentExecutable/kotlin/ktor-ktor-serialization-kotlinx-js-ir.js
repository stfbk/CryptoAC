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
  var protoOf = kotlin_kotlin.$_$.sb;
  var classMeta = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var CoroutineImpl = kotlin_kotlin.$_$.w9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g9;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.gh;
  var toString = kotlin_kotlin.$_$.xb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var isInterface = kotlin_kotlin.$_$.eb;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.l;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.c2;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.w;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getKClass = kotlin_kotlin.$_$.e;
  var discard = kotlin_io_ktor_ktor_io.$_$.c1;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.g1;
  var readText = kotlin_io_ktor_ktor_io.$_$.i1;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.d;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h3;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Map = kotlin_kotlin.$_$.m5;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Set = kotlin_kotlin.$_$.s5;
  var firstOrNull = kotlin_kotlin.$_$.c7;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.o4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var isArray = kotlin_kotlin.$_$.wa;
  var List = kotlin_kotlin.$_$.k5;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var filterNotNull = kotlin_kotlin.$_$.a7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var singleOrNull = kotlin_kotlin.$_$.l8;
  var Collection = kotlin_kotlin.$_$.c5;
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
    this.format_2 = format;
    this.value_2 = value;
    this.typeInfo_2 = typeInfo;
    this.charset_2 = charset;
    this.contentType_1 = contentType;
  }
  protoOf(SerializationNegotiationParameters).get_format_dfdtds_k$ = function () {
    return this.format_2;
  };
  protoOf(SerializationNegotiationParameters).get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  protoOf(SerializationNegotiationParameters).get_typeInfo_s1bhe9_k$ = function () {
    return this.typeInfo_2;
  };
  protoOf(SerializationNegotiationParameters).get_charset_dhkvhf_k$ = function () {
    return this.charset_2;
  };
  protoOf(SerializationNegotiationParameters).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  function _get_format__qlarck($this) {
    return $this.format_1;
  }
  function $serializeCOROUTINE$0(_this__u8e3s4, parameters, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.parameters_1 = parameters;
  }
  protoOf($serializeCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.tmp0_let0__1 = serializerFromTypeInfo(this.parameters_1.get_typeInfo_s1bhe9_k$(), this._this__u8e3s4__1.format_1.get_serializersModule_piitvg_k$());
            this.parameters_1.serializer_1 = this.tmp0_let0__1;
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.serializeContent_bnmmb5_k$(this.parameters_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.result1__1 = suspendResult;
            if (!(this.result1__1 == null)) {
              return this.result1__1;
            }

            this.guessedSearchSerializer2__1 = guessSerializer(this.parameters_1.get_value_j01efc_k$(), this._this__u8e3s4__1.format_1.get_serializersModule_piitvg_k$());
            this.parameters_1.serializer_1 = this.guessedSearchSerializer2__1;
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.serializeContent_bnmmb5_k$(this.parameters_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function KotlinxSerializationBase(format) {
    this.format_1 = format;
  }
  protoOf(KotlinxSerializationBase).serialize_2zn9xm_k$ = function (parameters, $completion) {
    var tmp = new $serializeCOROUTINE$0(this, parameters, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function SerializationParameters(format, value, typeInfo, charset) {
    this.format_1 = format;
    this.value_1 = value;
    this.typeInfo_1 = typeInfo;
    this.charset_1 = charset;
  }
  protoOf(SerializationParameters).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(SerializationParameters).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(SerializationParameters).get_typeInfo_s1bhe9_k$ = function () {
    return this.typeInfo_1;
  };
  protoOf(SerializationParameters).get_charset_dhkvhf_k$ = function () {
    return this.charset_1;
  };
  protoOf(SerializationParameters).set_serializer_5ild1j_k$ = function (_set____db54di) {
    this.serializer_1 = _set____db54di;
  };
  protoOf(SerializationParameters).get_serializer_u29zhh_k$ = function () {
    var tmp = this.serializer_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('serializer');
    }
  };
  function serialization(_this__u8e3s4, contentType, format) {
    _this__u8e3s4.register$default_x33o66_k$(contentType, new KotlinxSerializationConverter(format));
  }
  function _get_format__qlarck_0($this) {
    return $this.format_1;
  }
  function _get_serializationBase__qzkads($this) {
    return $this.serializationBase_1;
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp0_subject = format;
    var tmp;
    if (isInterface(tmp0_subject, StringFormat)) {
      var content = format.encodeToString_bhi5ce_k$(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        var content_0 = format.encodeToByteArray_mm3ys_k$(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = new ByteArrayContent(content_0, contentType);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function KotlinxSerializationConverter$serializationBase$1(this$0) {
    this.this$0__1 = this$0;
    KotlinxSerializationBase.call(this, this$0.format_1);
  }
  protoOf(KotlinxSerializationConverter$serializationBase$1).serializeContent_mlml8m_k$ = function (parameters, $completion) {
    if (!(parameters instanceof SerializationNegotiationParameters)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'parameters type is ' + getKClassFromExpression(parameters).get_simpleName_r6f8py_k$() + ',' + (' but expected ' + getKClass(SerializationNegotiationParameters).get_simpleName_r6f8py_k$());
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return serializeContent(this.this$0__1, parameters.get_serializer_u29zhh_k$(), parameters.get_format_dfdtds_k$(), parameters.get_value_j01efc_k$(), parameters.get_contentType_7git4a_k$(), parameters.get_charset_dhkvhf_k$());
  };
  protoOf(KotlinxSerializationConverter$serializationBase$1).serializeContent_bnmmb5_k$ = function (parameters, $completion) {
    return this.serializeContent_mlml8m_k$(parameters, $completion);
  };
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.charset_1 = charset;
    this.typeInfo_1 = typeInfo;
    this.content_1 = content;
  }
  protoOf($deserializeCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.serializer0__1 = serializerFromTypeInfo(this.typeInfo_1, this._this__u8e3s4__1.format_1.get_serializersModule_piitvg_k$());
            this.set_state_a96kl8_k$(1);
            suspendResult = this.content_1.readRemaining$default_pw759u_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var contentPacket = suspendResult;
            this.set_exceptionState_s9sevl_k$(2);
            var tmp0_subject = this._this__u8e3s4__1.format_1;
            var tmp_0;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_0 = this._this__u8e3s4__1.format_1.decodeFromString_d9fce8_k$(this.serializer0__1, readText(contentPacket, this.charset_1));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_0 = this._this__u8e3s4__1.format_1.decodeFromByteArray_8gbsvm_k$(this.serializer0__1, readBytes(contentPacket));
              } else {
                discard(contentPacket);
                var tmp0_error = 'Unsupported format ' + this._this__u8e3s4__1.format_1;
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }

            return tmp_0;
          case 2:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              throw new JsonConvertException('Illegal input', cause);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            this.set_exceptionState_s9sevl_k$(4);
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function KotlinxSerializationConverter(format) {
    this.format_1 = format;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.format_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.format_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      tmp$ret$0 = 'Only binary and string formats are supported, ' + ('' + this.format_1 + ' is not supported.');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_2 = this;
    tmp_2.serializationBase_1 = new KotlinxSerializationConverter$serializationBase$1(this);
  }
  protoOf(KotlinxSerializationConverter).serialize_d52kvx_k$ = function (contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.serializeNullable_76jvb_k$(contentType, charset, typeInfo, value, $completion);
    return tmp0;
  };
  protoOf(KotlinxSerializationConverter).serialize_itgcao_k$ = function (contentType, charset, typeInfo, value, $completion) {
    return this.serialize_d52kvx_k$(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).serializeNullable_76jvb_k$ = function (contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.serializationBase_1.serialize_2zn9xm_k$(new SerializationNegotiationParameters(this.format_1, value, typeInfo, charset, contentType), $completion);
    return tmp0;
  };
  protoOf(KotlinxSerializationConverter).serializeNullable_66n3vw_k$ = function (contentType, charset, typeInfo, value, $completion) {
    return this.serializeNullable_76jvb_k$(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).deserialize_ozjkrz_k$ = function (charset, typeInfo, content, $completion) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp0_safe_receiver = typeInfo.get_kotlinType_flgmsk_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.serializerFromTypeInfo.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.get_arguments_p5ddub_k$().isEmpty_y1axqb_k$() ? null : serializerOrNull(module_0, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.getContextual$default_9ols70_k$(typeInfo.get_type_wovaf7_k$());
      tmp_0 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.get_type_wovaf7_k$()), typeInfo) : tmp3_elvis_lhs;
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
              var keySerializer = elementSerializer(value.get_keys_wop4xp_k$(), module_0);
              var valueSerializer = elementSerializer(value.get_values_ksazhn_k$(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp3_elvis_lhs = module_0.getContextual$default_9ols70_k$(getKClassFromExpression(value));
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
    var tmp0_safe_receiver = typeInfo.get_kotlinType_flgmsk_k$();
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isMarkedNullable_4el8ow_k$()) === true) {
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
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$0 = guessSerializer(item, module_0);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp2_distinctBy = tmp$ret$2;
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp2_distinctBy.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var e = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$3 = e.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      var key = tmp$ret$3;
      if (set.add_1j60pz_k$(key)) {
        list.add_1j60pz_k$(e);
      }
    }
    tmp$ret$4 = list;
    var serializers = tmp$ret$4;
    if (serializers.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.error' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp3_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$5;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
        tmp3_mapTo.add_1j60pz_k$(tmp$ret$5);
      }
      tmp$ret$6 = tmp3_mapTo;
      tmp$ret$7 = tmp$ret$6;
      var tmp4_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
      throw IllegalStateException_init_$Create$(toString(tmp4_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
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
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_2.next_20eer_k$();
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
