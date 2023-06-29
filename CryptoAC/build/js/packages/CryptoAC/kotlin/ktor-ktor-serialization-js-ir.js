(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    root['ktor-ktor-serialization-js-ir'] = factory(typeof this['ktor-ktor-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Exception = kotlin_kotlin.$_$.vf;
  var VOID = kotlin_kotlin.$_$.lh;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.ea;
  var protoOf = kotlin_kotlin.$_$.sb;
  var classMeta = kotlin_kotlin.$_$.ka;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var ensureNotNull = kotlin_kotlin.$_$.wg;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.k;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.v1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.j;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CoroutineImpl = kotlin_kotlin.$_$.w9;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var isInterface = kotlin_kotlin.$_$.eb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g9;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var isObject = kotlin_kotlin.$_$.hb;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  var SuspendFunction1 = kotlin_kotlin.$_$.x9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ContentConvertException, 'ContentConvertException', classMeta, Exception);
  setMetadataFor(JsonConvertException, 'JsonConvertException', classMeta, ContentConvertException);
  function register$default(contentType, converter, configuration, $super) {
    var tmp;
    if (configuration === VOID) {
      tmp = Configuration$register$lambda;
    } else {
      tmp = configuration;
    }
    configuration = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.register_2n0nvi_k$(contentType, converter, configuration);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.register_2n0nvi_k$.call(this, contentType, converter, configuration);
    }
    return tmp_0;
  }
  setMetadataFor(Configuration, 'Configuration', interfaceMeta);
  function serialize(contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.serializeNullable_66n3vw_k$(contentType, charset, typeInfo, value, $completion);
    return tmp0;
  }
  function serializeNullable(contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.serialize_itgcao_k$(contentType, charset, typeInfo, ensureNotNull(value), $completion);
    return tmp0;
  }
  setMetadataFor(ContentConverter, 'ContentConverter', interfaceMeta, VOID, VOID, VOID, VOID, [4, 3]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(deserialize$o$collect$slambda, 'deserialize$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(deserialize$slambda, 'deserialize$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($deserializeCOROUTINE$0, '$deserializeCOROUTINE$0', classMeta, CoroutineImpl);
  function serialize_0(charset, typeInfo, value, $completion) {
    var tmp0 = this.serializeNullable_2csxc9_k$(charset, typeInfo, value, $completion);
    return tmp0;
  }
  function serializeNullable_0(charset, typeInfo, value, $completion) {
    var tmp0 = this.serialize_9ehjqr_k$(charset, typeInfo, ensureNotNull(value), $completion);
    return tmp0;
  }
  setMetadataFor(WebsocketContentConverter, 'WebsocketContentConverter', interfaceMeta, VOID, VOID, VOID, VOID, [3]);
  //endregion
  function ContentConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  function JsonConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  function Configuration$register$lambda($this$null) {
    return Unit_getInstance();
  }
  function Configuration() {
  }
  function ContentConverter() {
  }
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : defaultCharset;
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : defaultCharset;
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.get_4u8u51_k$(HttpHeaders_getInstance().get_AcceptCharset_1vf6lh_k$())).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      var charset = tmp1_loop_parameter.component1_7eebsc_k$();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().isSupported_4w3rs3_k$(charset))
        return Companion_getInstance().forName_7lnpzh_k$(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.function_1(value, $completion);
    return tmp0;
  };
  function deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation) {
    this.$collector_1 = $collector;
    this.$charset_1 = $charset;
    this.$typeInfo_1 = $typeInfo;
    this.$body_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$o$collect$slambda).invoke_da5e5_k$ = function (value, $completion) {
    var tmp = this.create_gizspi_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(deserialize$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_da5e5_k$((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.value_1.deserialize_ozjkrz_k$(this.$charset_1, this.$typeInfo_1, this.$body_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.ARGUMENT0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
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
  protoOf(deserialize$o$collect$slambda).create_gizspi_k$ = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.$collector_1, this.$charset_1, this.$typeInfo_1, this.$body_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(deserialize$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_gizspi_k$((!(value == null) ? isInterface(value, ContentConverter) : false) ? value : THROW_CCE(), completion);
  };
  function deserialize$o$collect$slambda_0($collector, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_da5e5_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = deserialize$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.$charset_1, this._this__u8e3s4__1.$typeInfo_1, this._this__u8e3s4__1.$body_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv($tmp0_map, $charset, $typeInfo, $body) {
    this.$tmp0_map_1 = $tmp0_map;
    this.$charset_1 = $charset;
    this.$typeInfo_1 = $typeInfo;
    this.$body_1 = $body;
  }
  protoOf(_no_name_provided__qut3iv).collect_ayk01t_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_ayk01t_k$(collector, $completion);
  };
  function deserialize$slambda($body, resultContinuation) {
    this.$body_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$slambda).invoke_qln86i_k$ = function (it, $completion) {
    var tmp = this.create_xubfvz_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(deserialize$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_qln86i_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return !(this.it_1 == null) ? true : this.$body_1.get_isClosedForRead_ajcc1s_k$();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(deserialize$slambda).create_xubfvz_k$ = function (it, completion) {
    var i = new deserialize$slambda(this.$body_1, completion);
    i.it_1 = it;
    return i;
  };
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_qln86i_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.body_1 = body;
    this.typeInfo_1 = typeInfo;
    this.charset_1 = charset;
  }
  protoOf($deserializeCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0_map = asFlow(this._this__u8e3s4__1);
            var tmp_0 = new _no_name_provided__qut3iv(tmp0_map, this.charset_1, this.typeInfo_1, this.body_1);
            suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.body_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1;
            if (!(result == null)) {
              tmp_1 = result;
            } else {
              if (!this.body_1.get_isClosedForRead_ajcc1s_k$()) {
                tmp_1 = this.body_1;
              } else {
                var tmp0_safe_receiver = this.typeInfo_1.get_kotlinType_flgmsk_k$();
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isMarkedNullable_4el8ow_k$()) === true) {
                  tmp_1 = NullBody_getInstance();
                } else {
                  throw new ContentConvertException('No suitable converter found for ' + this.typeInfo_1);
                }
              }
            }

            return tmp_1;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function WebsocketContentConverter() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = Configuration;
  _.$_$.d = ContentConverter;
  _.$_$.e = JsonConvertException;
  _.$_$.f = suitableCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-js-ir.js.map
