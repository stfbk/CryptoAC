(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-io-js-legacy', 'ktor-ktor-http-js-legacy', 'kotlinx-coroutines-core', 'ktor-ktor-utils-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-http-js-legacy'), require('kotlinx-coroutines-core'), require('ktor-ktor-utils-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-serialization-js-legacy'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-serialization-js-legacy'.");
    }
    root['ktor-ktor-serialization-js-legacy'] = factory(typeof this['ktor-ktor-serialization-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-serialization-js-legacy'], kotlin, this['ktor-ktor-io-js-legacy'], this['ktor-ktor-http-js-legacy'], this['kotlinx-coroutines-core'], this['ktor-ktor-utils-js-legacy']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_http_js_legacy, $module$kotlinx_coroutines_core, $module$ktor_ktor_utils_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Exception = Kotlin.kotlin.Exception;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var parseAndSortHeader = $module$ktor_ktor_http_js_legacy.io.ktor.http.parseAndSortHeader_pdl1vj$;
  var equals = Kotlin.equals;
  var Charset = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.Charset;
  var Unit = Kotlin.kotlin.Unit;
  var asFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.asFlow_7wnvza$;
  var firstOrNull = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.firstOrNull_iskllf$;
  var content = $module$ktor_ktor_http_js_legacy.io.ktor.http.content;
  var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
  var Flow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.Flow;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
  var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
  var getKClass = Kotlin.getKClass;
  var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var Throwable = Error;
  var throwCCE = Kotlin.throwCCE;
  ContentConvertException.prototype = Object.create(Exception.prototype);
  ContentConvertException.prototype.constructor = ContentConvertException;
  JsonConvertException.prototype = Object.create(ContentConvertException.prototype);
  JsonConvertException.prototype.constructor = JsonConvertException;
  WebsocketContentConvertException.prototype = Object.create(ContentConvertException.prototype);
  WebsocketContentConvertException.prototype.constructor = WebsocketContentConvertException;
  WebsocketConverterNotFoundException.prototype = Object.create(WebsocketContentConvertException.prototype);
  WebsocketConverterNotFoundException.prototype.constructor = WebsocketConverterNotFoundException;
  WebsocketDeserializeException.prototype = Object.create(WebsocketContentConvertException.prototype);
  WebsocketDeserializeException.prototype.constructor = WebsocketDeserializeException;
  function ContentConvertException(message, cause) {
    if (cause === void 0)
      cause = null;
    Exception.call(this, message, cause);
    this.name = 'ContentConvertException';
  }
  ContentConvertException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ContentConvertException', interfaces: [Exception]};
  function JsonConvertException(message, cause) {
    if (cause === void 0)
      cause = null;
    ContentConvertException.call(this, message, cause);
    this.name = 'JsonConvertException';
  }
  JsonConvertException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonConvertException', interfaces: [ContentConvertException]};
  function WebsocketContentConvertException(message, cause) {
    if (cause === void 0)
      cause = null;
    ContentConvertException.call(this, message, cause);
    this.name = 'WebsocketContentConvertException';
  }
  WebsocketContentConvertException.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebsocketContentConvertException', interfaces: [ContentConvertException]};
  function WebsocketConverterNotFoundException(message, cause) {
    if (cause === void 0)
      cause = null;
    WebsocketContentConvertException.call(this, message, cause);
    this.name = 'WebsocketConverterNotFoundException';
  }
  WebsocketConverterNotFoundException.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebsocketConverterNotFoundException', interfaces: [WebsocketContentConvertException]};
  function WebsocketDeserializeException(message, cause, frame) {
    if (cause === void 0)
      cause = null;
    WebsocketContentConvertException.call(this, message, cause);
    this.frame = frame;
    this.name = 'WebsocketDeserializeException';
  }
  WebsocketDeserializeException.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebsocketDeserializeException', interfaces: [WebsocketContentConvertException]};
  function unsafeFlow$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$.prototype.constructor = Coroutine$collect_42ocv1$;
  Coroutine$collect_42ocv1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$block(this.local$collector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  unsafeFlow$ObjectLiteral.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$ = this$_0;
    this.local$value = value_0;
  }
  Coroutine$unsafeTransform$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda$lambda;
  Coroutine$unsafeTransform$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$this$, this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function unsafeTransform$lambda$lambda(closure$transform_0, this$_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda$lambda(closure$transform_0, this$_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$this$unsafeTransform = this$unsafeTransform_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$unsafeTransform$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$unsafeTransform$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unsafeTransform$lambda.prototype.constructor = Coroutine$unsafeTransform$lambda;
  Coroutine$unsafeTransform$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$unsafeTransform.collect_42ocv1$(new FlowCollector(unsafeTransform$lambda$lambda(this.local$closure$transform, this.local$$receiver)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$unsafeTransform$lambda(closure$transform_0, this$unsafeTransform_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$transform = closure$transform_0;
    this.local$$receiver = $receiver_0;
    this.local$value = value_0;
  }
  Coroutine$map$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$map$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map$lambda.prototype.constructor = Coroutine$map$lambda;
  Coroutine$map$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$transform(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.emit_11rb$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return Unit;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function map$lambda(closure$transform_0) {
    return function ($receiver_0, value_0, continuation_0, suspended) {
      var instance = new Coroutine$map$lambda(closure$transform_0, $receiver_0, value_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ContentConverter() {
  }
  ContentConverter.prototype.serialize_4ln4px$ = function (contentType, charset, typeInfo, value, continuation) {
    return this.serializeNullable_koybg$(contentType, charset, typeInfo, value, continuation);
  };
  ContentConverter.prototype.serializeNullable_koybg$ = function (contentType, charset, typeInfo, value, continuation) {
    return this.serialize_4ln4px$(contentType, charset, typeInfo, ensureNotNull(value), continuation);
  };
  ContentConverter.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ContentConverter', interfaces: []};
  function suitableCharset($receiver, defaultCharset) {
    if (defaultCharset === void 0)
      defaultCharset = charsets.Charsets.UTF_8;
    var tmp$;
    return (tmp$ = suitableCharsetOrNull($receiver, defaultCharset)) != null ? tmp$ : defaultCharset;
  }
  function suitableCharsetOrNull($receiver, defaultCharset) {
    if (defaultCharset === void 0)
      defaultCharset = charsets.Charsets.UTF_8;
    var tmp$;
    tmp$ = parseAndSortHeader($receiver.get_61zpoe$(http.HttpHeaders.AcceptCharset)).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var charset = tmp$_0.component1();
      if (equals(charset, '*'))
        return defaultCharset;
      else if (Charset.Companion.isSupported_61zpoe$(charset))
        return Charset.Companion.forName_61zpoe$(charset);
    }
    return null;
  }
  function Configuration() {
  }
  function Configuration$register$lambda($receiver) {
    return Unit;
  }
  Configuration.prototype.register_6d0rjl$ = function (contentType, converter, configuration, callback$default) {
    if (configuration === void 0)
      configuration = Configuration$register$lambda;
    callback$default ? callback$default(contentType, converter, configuration) : this.register_6d0rjl$$default(contentType, converter, configuration);
  };
  Configuration.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Configuration', interfaces: []};
  function Coroutine$deserialize$lambda(closure$charset_0, closure$typeInfo_0, closure$body_0, converter_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$charset = closure$charset_0;
    this.local$closure$typeInfo = closure$typeInfo_0;
    this.local$closure$body = closure$body_0;
    this.local$converter = converter_0;
  }
  Coroutine$deserialize$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$deserialize$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deserialize$lambda.prototype.constructor = Coroutine$deserialize$lambda;
  Coroutine$deserialize$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$converter.deserialize_obau6j$(this.local$closure$charset, this.local$closure$typeInfo, this.local$closure$body, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function deserialize$lambda(closure$charset_0, closure$typeInfo_0, closure$body_0) {
    return function (converter_0, continuation_0, suspended) {
      var instance = new Coroutine$deserialize$lambda(closure$charset_0, closure$typeInfo_0, closure$body_0, converter_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$deserialize$lambda_0(closure$body_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$body = closure$body_0;
    this.local$it = it_0;
  }
  Coroutine$deserialize$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$deserialize$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deserialize$lambda_0.prototype.constructor = Coroutine$deserialize$lambda_0;
  Coroutine$deserialize$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it != null || this.local$closure$body.isClosedForRead;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function deserialize$lambda_0(closure$body_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$deserialize$lambda_0(closure$body_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$deserialize($receiver_0, body_0, typeInfo_0, charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$body = body_0;
    this.local$typeInfo = typeInfo_0;
    this.local$charset = charset_0;
  }
  Coroutine$deserialize.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$deserialize.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deserialize.prototype.constructor = Coroutine$deserialize;
  Coroutine$deserialize.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var $receiver = asFlow(this.local$$receiver);
            this.state_0 = 2;
            this.result_0 = firstOrNull(new unsafeFlow$ObjectLiteral(unsafeTransform$lambda(map$lambda(deserialize$lambda(this.local$charset, this.local$typeInfo, this.local$body)), $receiver)), deserialize$lambda_0(this.local$body), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var result = this.result_0;
            if (result != null)
              tmp$ = result;
            else if (!this.local$body.isClosedForRead)
              tmp$ = this.local$body;
            else {
              var tmp$_0;
              if (((tmp$_0 = this.local$typeInfo.kotlinType) != null ? tmp$_0.isMarkedNullable : null) === true)
                tmp$ = content.NullBody;
              else
                throw new ContentConvertException('No suitable converter found for ' + this.local$typeInfo);
            }

            return tmp$;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function deserialize($receiver_0, body_0, typeInfo_0, charset_0, continuation_0, suspended) {
    var instance = new Coroutine$deserialize($receiver_0, body_0, typeInfo_0, charset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-serialization-js-legacy.io.ktor.serialization.serialize_du9chr$', wrapFunction(function () {
    var charsets = _.$$importsForInline$$['ktor-ktor-io-js-legacy'].io.ktor.utils.io.charsets;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, value, charset, continuation) {
      if (charset === void 0)
        charset = charsets.Charsets.UTF_8;
      var tmp$_1 = reflect.JsType;
      var tmp$_0_0 = getKClass(T_0);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = getReifiedTypeParameterKType(T_0);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      Kotlin.suspendCall($receiver.serializeNullable_rh40qx$(charset, typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0), value, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('ktor-ktor-serialization-js-legacy.io.ktor.serialization.deserialize_v41121$', wrapFunction(function () {
    var charsets = _.$$importsForInline$$['ktor-ktor-io-js-legacy'].io.ktor.utils.io.charsets;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, content, charset, continuation) {
      if (charset === void 0)
        charset = charsets.Charsets.UTF_8;
      var tmp$_1;
      var tmp$_2 = reflect.JsType;
      var tmp$_0_1 = getKClass(T_0);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = getReifiedTypeParameterKType(T_0);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      Kotlin.suspendCall($receiver.deserialize_v0czzf$(charset, typeInfoImpl(tmp$_2, tmp$_0_1, tryGetType$result_0), content, Kotlin.coroutineReceiver()));
      return isT(tmp$_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_1 : throwCCE();
    };
  }));
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$serialization = package$ktor.serialization || (package$ktor.serialization = {});
  package$serialization.ContentConvertException = ContentConvertException;
  package$serialization.JsonConvertException = JsonConvertException;
  package$serialization.WebsocketContentConvertException = WebsocketContentConvertException;
  package$serialization.WebsocketConverterNotFoundException = WebsocketConverterNotFoundException;
  package$serialization.WebsocketDeserializeException = WebsocketDeserializeException;
  package$serialization.ContentConverter = ContentConverter;
  package$serialization.suitableCharset_4q0pk1$ = suitableCharset;
  package$serialization.suitableCharsetOrNull_4q0pk1$ = suitableCharsetOrNull;
  package$serialization.Configuration = Configuration;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$serialization.deserialize_2dn85c$ = deserialize;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  $$importsForInline$$['ktor-ktor-utils-js-legacy'] = $module$ktor_ktor_utils_js_legacy;
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-js-legacy.js.map
