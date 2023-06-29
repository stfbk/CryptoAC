(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-serialization-js-ir.js', './ktor-ktor-io-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'), require('./ktor-ktor-io-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    root['ktor-ktor-client-content-negotiation-js-ir'] = factory(typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-serialization-js-ir'], this['ktor-ktor-io-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.sa;
  var classMeta = kotlin_kotlin.$_$.k9;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var THROW_CCE = kotlin_kotlin.$_$.he;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.m;
  var isObject = kotlin_kotlin.$_$.ha;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.s;
  var contentType = kotlin_io_ktor_ktor_http.$_$.l1;
  var suitableCharset = kotlin_io_ktor_ktor_serialization.$_$.f;
  var plus = kotlin_kotlin.$_$.i7;
  var toMutableSet = kotlin_kotlin.$_$.e8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.r;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.f;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.h;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var toString = kotlin_kotlin.$_$.xa;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.n;
  var Collection = kotlin_kotlin.$_$.v4;
  var isInterface = kotlin_kotlin.$_$.ea;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.j1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Unit = kotlin_kotlin.$_$.se;
  var charset = kotlin_io_ktor_ktor_http.$_$.g1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.n9;
  var joinToString = kotlin_kotlin.$_$.u6;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.p1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Exception = kotlin_kotlin.$_$.xd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.l;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.j4;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.z;
  var getKClass = kotlin_kotlin.$_$.e;
  var setOf = kotlin_kotlin.$_$.r7;
  var endsWith = kotlin_kotlin.$_$.xb;
  var startsWith = kotlin_kotlin.$_$.sc;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConverterRegistration, 'ConverterRegistration', classMeta);
  setMetadataFor(ContentNegotiation$Config$defaultMatcher$1, VOID, classMeta);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda_1, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Config, 'Config', classMeta, VOID, [Configuration]);
  setMetadataFor(Plugin, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor($convertRequestCOROUTINE$0, '$convertRequestCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($convertResponseCOROUTINE$1, '$convertResponseCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(ContentNegotiation, 'ContentNegotiation', classMeta, VOID, VOID, VOID, VOID, [2, 5]);
  setMetadataFor(ContentConverterException, 'ContentConverterException', classMeta, Exception);
  setMetadataFor(JsonContentTypeMatcher, 'JsonContentTypeMatcher', objectMeta);
  //endregion
  function get_LOGGER() {
    _init_properties_ContentNegotiation_kt__o183go();
    return LOGGER;
  }
  var LOGGER;
  function get_DefaultCommonIgnoredTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.w4n_1 = converter;
    this.x4n_1 = contentTypeToSend;
    this.y4n_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.z4n_1 = $pattern;
  }
  protoOf(ContentNegotiation$Config$defaultMatcher$1).a4o = function (contentType) {
    return contentType.v1v(this.z4n_1);
  };
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.j4o_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda).q3g = function ($this$intercept, it, $completion) {
    var tmp = this.r3g($this$intercept, it, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).v7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3g(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            this.xh_1 = 1;
            suspendResult = this.j4o_1.q4o(this.k4o_1.j1s_1, this.k4o_1.m1r(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m4o_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.m4o_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = this.m4o_1;
            }

            tmp_0.n4o_1 = tmp_1;
            this.xh_1 = 2;
            suspendResult = this.k4o_1.n1r(this.n4o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  protoOf(ContentNegotiation$Plugin$install$slambda).r3g = function ($this$intercept, it, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.j4o_1, completion);
    i.k4o_1 = $this$intercept;
    i.l4o_1 = it;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.q3g($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.z4o_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda_1).k3h = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.l3h($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).v7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k3h(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            this.c4p_1 = this.b4p_1.w2();
            this.d4p_1 = this.b4p_1.x2();
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.a4p_1.j1s_1.x3g());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              get_LOGGER().k1t('Response doesn\'t have "Content-Type" header, skipping ContentNegotiation plugin');
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.e4p_1 = tmp_1;
            this.f4p_1 = suitableCharset(this.a4p_1.j1s_1.g3k().a21());
            this.xh_1 = 1;
            suspendResult = this.z4o_1.j4p(this.a4p_1.j1s_1.g3k().i3k(), this.c4p_1, this.d4p_1, this.e4p_1, this.f4p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g4p_1 = suspendResult;
            var tmp_2 = this;
            var tmp_3;
            if (this.g4p_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_3 = this.g4p_1;
            }

            tmp_2.h4p_1 = tmp_3;
            this.i4p_1 = new HttpResponseContainer(this.c4p_1, this.h4p_1);
            this.xh_1 = 2;
            suspendResult = this.a4p_1.n1r(this.i4p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  protoOf(ContentNegotiation$Plugin$install$slambda_1).l3h = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.z4o_1, completion);
    i.a4p_1 = $this$intercept;
    i.b4p_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.k3h($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    this.k4p_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.l4p_1 = tmp$ret$0;
  }
  protoOf(Config).j2g = function (contentType, converter, configuration) {
    var tmp0_subject = contentType;
    var matcher = tmp0_subject.equals(Application_getInstance().f1u_1) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.m4p(contentType, converter, matcher, configuration);
  };
  protoOf(Config).m4p = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    tmp$ret$0 = converter;
    var registration = new ConverterRegistration(tmp$ret$0, contentTypeToSend, contentTypeMatcher);
    this.l4p_1.a(registration);
  };
  function Plugin() {
    Plugin_instance = this;
    this.n4p_1 = new AttributeKey('ContentNegotiation');
  }
  protoOf(Plugin).p = function () {
    return this.n4p_1;
  };
  protoOf(Plugin).o4p = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new ContentNegotiation(config.l4p_1, config.k4p_1);
  };
  protoOf(Plugin).b3j = function (block) {
    return this.o4p(block);
  };
  protoOf(Plugin).p4p = function (plugin, scope) {
    var tmp = Phases_getInstance().u3o_1;
    scope.w3f_1.n1s(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_0().w3i_1;
    scope.x3f_1.n1s(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  protoOf(Plugin).c3j = function (plugin, scope) {
    return this.p4p(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation$convertRequest$lambda(it) {
    return toString(it.w4n_1);
  }
  function $convertRequestCOROUTINE$0(_this__u8e3s4, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y4p_1 = _this__u8e3s4;
    this.z4p_1 = request;
    this.a4q_1 = body;
  }
  protoOf($convertRequestCOROUTINE$0).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 7;
            var tmp0_forEach = this.y4p_1.o4o_1;
            var tmp0_iterator = tmp0_forEach.f();
            while (tmp0_iterator.g()) {
              var element = tmp0_iterator.h();
              get_LOGGER().k1t('Adding Accept=' + element.x4n_1.r1v_1 + ' header for ' + this.z4p_1.w3h_1);
              accept(this.z4p_1, element.x4n_1);
            }

            var tmp_0;
            var tmp_1 = this.a4q_1;
            if (tmp_1 instanceof OutgoingContent) {
              tmp_0 = true;
            } else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp1_any = this.y4p_1.p4o_1;
                var tmp_2;
                if (isInterface(tmp1_any, Collection)) {
                  tmp_2 = tmp1_any.l();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = tmp1_any.f();
                while (tmp0_iterator_0.g()) {
                  var element_0 = tmp0_iterator_0.h();
                  if (element_0.td(this.a4q_1)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            }

            if (tmp_0) {
              get_LOGGER().k1t('Body type ' + getKClassFromExpression(this.a4q_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.z4p_1.w3h_1 + '.'));
              return null;
            }

            var tmp_3 = this;
            var tmp0_elvis_lhs = contentType_0(this.z4p_1);
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              get_LOGGER().k1t("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.z4p_1.w3h_1 + '.');
              return null;
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.b4q_1 = tmp_4;
            var tmp_5 = this.a4q_1;
            if (tmp_5 instanceof Unit) {
              get_LOGGER().k1t('Sending empty body for ' + this.z4p_1.w3h_1);
              this.z4p_1.y3h_1.g1p(HttpHeaders_getInstance().p1x_1);
              return EmptyContent_getInstance();
            }

            var tmp_6 = this;
            var tmp3_filter = this.y4p_1.o4o_1;
            var tmp2_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = tmp3_filter.f();
            while (tmp0_iterator_1.g()) {
              var element_1 = tmp0_iterator_1.h();
              if (element_1.y4n_1.a4o(this.b4q_1)) {
                tmp2_filterTo.a(element_1);
              }
            }

            var tmp4_takeIf = tmp2_filterTo;
            var tmp_7;
            if (!tmp4_takeIf.l()) {
              tmp_7 = tmp4_takeIf;
            } else {
              tmp_7 = null;
            }

            var tmp1_elvis_lhs = tmp_7;
            var tmp_8;
            if (tmp1_elvis_lhs == null) {
              get_LOGGER().k1t('None of the registered converters match request Content-Type=' + this.b4q_1 + '. ' + ('Skipping ContentNegotiation for ' + this.z4p_1.w3h_1 + '.'));
              return null;
            } else {
              tmp_8 = tmp1_elvis_lhs;
            }

            tmp_6.c4q_1 = tmp_8;
            if (this.z4p_1.w4b() == null) {
              get_LOGGER().k1t('Request has unknown body type. Skipping ContentNegotiation for ' + this.z4p_1.w3h_1 + '.');
              return null;
            }

            this.z4p_1.y3h_1.g1p(HttpHeaders_getInstance().p1x_1);
            this.xh_1 = 1;
            continue $sm;
          case 1:
            this.e4q_1 = this.c4q_1.f();
            this.xh_1 = 2;
            continue $sm;
          case 2:
            if (!this.e4q_1.g()) {
              this.xh_1 = 5;
              continue $sm;
            }

            this.f4q_1 = this.e4q_1.h();
            this.xh_1 = 3;
            var tmp0_elvis_lhs_0 = charset(this.b4q_1);
            var tmp_9 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().d1j_1 : tmp0_elvis_lhs_0;
            var tmp_10 = ensureNotNull(this.z4p_1.w4b());
            var tmp_11;
            if (!equals(this.a4q_1, NullBody_getInstance())) {
              tmp_11 = this.a4q_1;
            } else {
              tmp_11 = null;
            }

            suspendResult = this.f4q_1.w4n_1.m2g(this.b4q_1, tmp_9, tmp_10, tmp_11, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().k1t('Converted request body using ' + this.f4q_1.w4n_1 + ' for ' + this.z4p_1.w3h_1);
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.d4q_1 = result_0;
              this.xh_1 = 6;
              continue $sm;
            } else {
              this.xh_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.xh_1 = 2;
            continue $sm;
          case 5:
            this.d4q_1 = null;
            if (false) {
              this.xh_1 = 1;
              continue $sm;
            }

            this.xh_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.d4q_1;
            var tmp_12;
            if (tmp2_elvis_lhs == null) {
              var tmp_13 = "Can't convert " + toString(this.a4q_1) + ' with contentType ' + this.b4q_1 + ' using converters ';
              throw new ContentConverterException(tmp_13 + joinToString(this.c4q_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$convertRequest$lambda));
            } else {
              tmp_12 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_12;
            return serializedContent;
          case 7:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 7) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function $convertResponseCOROUTINE$1(_this__u8e3s4, requestUrl, info, body, responseContentType, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o4q_1 = _this__u8e3s4;
    this.p4q_1 = requestUrl;
    this.q4q_1 = info;
    this.r4q_1 = body;
    this.s4q_1 = responseContentType;
    this.t4q_1 = charset;
  }
  protoOf($convertResponseCOROUTINE$1).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            var tmp_0 = this.r4q_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().k1t('Response body is already transformed. Skipping ContentNegotiation for ' + this.p4q_1 + '.');
              return null;
            }

            if (this.o4q_1.p4o_1.b1(this.q4q_1.a1t_1)) {
              get_LOGGER().k1t('Response body type ' + this.q4q_1.a1t_1 + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.p4q_1 + '.'));
              return null;
            }

            var tmp_1 = this;
            var tmp1_filter = this.o4q_1.o4o_1;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator = tmp1_filter.f();
            while (tmp0_iterator.g()) {
              var element = tmp0_iterator.h();
              if (element.y4n_1.a4o(this.s4q_1)) {
                tmp0_filterTo.a(element);
              }
            }

            var tmp3_map = tmp0_filterTo;
            var tmp2_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp3_map, 10));
            var tmp0_iterator_0 = tmp3_map.f();
            while (tmp0_iterator_0.g()) {
              var item = tmp0_iterator_0.h();
              tmp2_mapTo.a(item.w4n_1);
            }

            var tmp4_takeIf = tmp2_mapTo;
            var tmp_2;
            if (!tmp4_takeIf.l()) {
              tmp_2 = tmp4_takeIf;
            } else {
              tmp_2 = null;
            }

            var tmp0_elvis_lhs = tmp_2;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              get_LOGGER().k1t('None of the registered converters match response with Content-Type=' + this.s4q_1 + '. ' + ('Skipping ContentNegotiation for ' + this.p4q_1 + '.'));
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_1.u4q_1 = tmp_3;
            this.xh_1 = 1;
            suspendResult = deserialize(this.u4q_1, this.r4q_1, this.q4q_1, this.t4q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().k1t('Response body was converted to ' + getKClassFromExpression(result) + ' for ' + this.p4q_1 + '.');
            }

            return result;
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
  function ContentNegotiation(registrations, ignoredTypes) {
    Plugin_getInstance();
    this.o4o_1 = registrations;
    this.p4o_1 = ignoredTypes;
  }
  protoOf(ContentNegotiation).q4o = function (request, body, $completion) {
    var tmp = new $convertRequestCOROUTINE$0(this, request, body, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ContentNegotiation).j4p = function (requestUrl, info, body, responseContentType, charset, $completion) {
    var tmp = new $convertResponseCOROUTINE$1(this, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function _init_properties_ContentNegotiation_kt__o183go() {
    if (properties_initialized_ContentNegotiation_kt_1ayduy) {
    } else {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().ve(), PrimitiveClasses_getInstance().re(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  protoOf(JsonContentTypeMatcher).a4o = function (contentType) {
    if (contentType.v1v(Application_getInstance().f1u_1)) {
      return true;
    }
    var value = contentType.u1v().toString();
    return startsWith(value, 'application/') ? endsWith(value, '+json') : false;
  };
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance == null)
      new JsonContentTypeMatcher();
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
    if (properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    } else {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      DefaultIgnoredTypes = tmp$ret$0;
    }
  }
  //region block: post-declaration
  protoOf(Config).k2g = register$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation-js-ir.js.map
