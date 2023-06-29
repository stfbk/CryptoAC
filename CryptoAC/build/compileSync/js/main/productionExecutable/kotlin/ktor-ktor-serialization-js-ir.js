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
  var Exception = kotlin_kotlin.$_$.xd;
  var VOID = kotlin_kotlin.$_$.lf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var protoOf = kotlin_kotlin.$_$.sa;
  var classMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var interfaceMeta = kotlin_kotlin.$_$.v9;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.j;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.r1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var THROW_CCE = kotlin_kotlin.$_$.he;
  var isInterface = kotlin_kotlin.$_$.ea;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var isObject = kotlin_kotlin.$_$.ha;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
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
      this.j2g(contentType, converter, configuration);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.j2g.call(this, contentType, converter, configuration);
    }
    return tmp_0;
  }
  setMetadataFor(Configuration, 'Configuration', interfaceMeta);
  function serialize(contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.m2g(contentType, charset, typeInfo, value, $completion);
    return tmp0;
  }
  function serializeNullable(contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.l2g(contentType, charset, typeInfo, ensureNotNull(value), $completion);
    return tmp0;
  }
  setMetadataFor(ContentConverter, 'ContentConverter', interfaceMeta, VOID, VOID, VOID, VOID, [4, 3]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(deserialize$o$collect$slambda, 'deserialize$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(deserialize$slambda, 'deserialize$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($deserializeCOROUTINE$0, '$deserializeCOROUTINE$0', classMeta, CoroutineImpl);
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
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().d1j_1 : defaultCharset;
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().d1j_1 : defaultCharset;
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.z1n(HttpHeaders_getInstance().y1w_1)).f();
    while (tmp0_iterator.g()) {
      var tmp1_loop_parameter = tmp0_iterator.h();
      var charset = tmp1_loop_parameter.w2();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().i1m(charset))
        return Companion_getInstance().h1m(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.a2h_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).o10 = function (value, $completion) {
    var tmp0 = this.a2h_1(value, $completion);
    return tmp0;
  };
  function deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation) {
    this.j2h_1 = $collector;
    this.k2h_1 = $charset;
    this.l2h_1 = $typeInfo;
    this.m2h_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$o$collect$slambda).p2h = function (value, $completion) {
    var tmp = this.q2h(value, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(deserialize$o$collect$slambda).si = function (p1, $completion) {
    return this.p2h((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$o$collect$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            this.xh_1 = 1;
            suspendResult = this.n2h_1.n2g(this.k2h_1, this.l2h_1, this.m2h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o2h_1 = suspendResult;
            this.xh_1 = 2;
            suspendResult = this.j2h_1.o10(this.o2h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
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
  protoOf(deserialize$o$collect$slambda).q2h = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.j2h_1, this.k2h_1, this.l2h_1, this.m2h_1, completion);
    i.n2h_1 = value;
    return i;
  };
  function deserialize$o$collect$slambda_0($collector, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $completion) {
      return i.p2h(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z2h_1 = _this__u8e3s4;
    this.a2i_1 = collector;
  }
  protoOf($collectCOROUTINE$1).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            this.xh_1 = 1;
            var tmp_0 = deserialize$o$collect$slambda_0(this.a2i_1, this.z2h_1.c2i_1, this.z2h_1.d2i_1, this.z2h_1.e2i_1, null);
            suspendResult = this.z2h_1.b2i_1.p10(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  function _no_name_provided__qut3iv($tmp0_map, $charset, $typeInfo, $body) {
    this.b2i_1 = $tmp0_map;
    this.c2i_1 = $charset;
    this.d2i_1 = $typeInfo;
    this.e2i_1 = $body;
  }
  protoOf(_no_name_provided__qut3iv).f2i = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(_no_name_provided__qut3iv).p10 = function (collector, $completion) {
    return this.f2i(collector, $completion);
  };
  function deserialize$slambda($body, resultContinuation) {
    this.o2i_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$slambda).q2i = function (it, $completion) {
    var tmp = this.r2i(it, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(deserialize$slambda).si = function (p1, $completion) {
    return this.q2i((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        if (tmp === 0) {
          this.yh_1 = 1;
          return !(this.p2i_1 == null) ? true : this.o2i_1.h17();
        } else if (tmp === 1) {
          throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(deserialize$slambda).r2i = function (it, completion) {
    var i = new deserialize$slambda(this.o2i_1, completion);
    i.p2i_1 = it;
    return i;
  };
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $completion) {
      return i.q2i(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2g_1 = _this__u8e3s4;
    this.x2g_1 = body;
    this.y2g_1 = typeInfo;
    this.z2g_1 = charset;
  }
  protoOf($deserializeCOROUTINE$0).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            this.xh_1 = 1;
            var tmp0_map = asFlow(this.w2g_1);
            var tmp_0 = new _no_name_provided__qut3iv(tmp0_map, this.z2g_1, this.y2g_1, this.x2g_1);
            suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.x2g_1, null), this);
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
              if (!this.x2g_1.h17()) {
                tmp_1 = this.x2g_1;
              } else {
                var tmp0_safe_receiver = this.y2g_1.c1t_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ge()) === true) {
                  tmp_1 = NullBody_getInstance();
                } else {
                  throw new ContentConvertException('No suitable converter found for ' + this.y2g_1);
                }
              }
            }

            return tmp_1;
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
