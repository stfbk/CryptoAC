(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'ktor-ktor-http-js-legacy', 'ktor-ktor-client-core-js-legacy', 'ktor-ktor-io-js-legacy', 'ktor-ktor-utils-js-legacy'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-client-core-js-legacy'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-utils-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    root['ktor-ktor-client-json-js-legacy'] = factory(typeof this['ktor-ktor-client-json-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-json-js-legacy'], kotlin, this['ktor-ktor-http-js-legacy'], this['ktor-ktor-client-core-js-legacy'], this['ktor-ktor-io-js-legacy'], this['ktor-ktor-utils-js-legacy']);
  }
}(this, function(_, Kotlin, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_client_core_js_legacy, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_utils_js_legacy) {
  'use strict';
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ContentTypeMatcher = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentTypeMatcher;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var HttpRequestPipeline = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpRequestPipeline;
  var accept = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.accept_41kwpe$;
  var Unit = Kotlin.kotlin.Unit;
  var contentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_jzzg3d$;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
  var equals = Kotlin.equals;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var HttpResponsePipeline = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpResponsePipeline;
  var ByteReadChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteReadChannel;
  var contentType_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_v1wgmc$;
  var readRemaining = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.readRemaining_3dmw3p$;
  var HttpResponseContainer = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpResponseContainer;
  var AttributeKey = $module$ktor_ktor_utils_js_legacy.io.ktor.util.AttributeKey;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HttpClientPlugin = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.plugins.HttpClientPlugin;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function JsonContentTypeMatcher() {
  }
  JsonContentTypeMatcher.prototype.contains_9v5yzd$ = function(contentType) {
  if (ContentType.Application.Json.match_9v5yzd$(contentType)) {
    return true;
  }
  var value = contentType.withoutParameters().toString();
  return startsWith(value, 'application/') && endsWith(value, '+json');
};
  JsonContentTypeMatcher.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'JsonContentTypeMatcher', 
  interfaces: [ContentTypeMatcher]};
  function JsonPlugin(serializer, acceptContentTypes, receiveContentTypeMatchers) {
    JsonPlugin$Plugin_getInstance();
    if (acceptContentTypes === void 0) 
      acceptContentTypes = listOf(ContentType.Application.Json);
    if (receiveContentTypeMatchers === void 0) 
      receiveContentTypeMatchers = listOf(new JsonContentTypeMatcher());
    this.serializer = serializer;
    this.acceptContentTypes = acceptContentTypes;
    this.receiveContentTypeMatchers_0 = receiveContentTypeMatchers;
  }
  function JsonPlugin$Config() {
    this.serializer = null;
    this._acceptContentTypes_0 = mutableListOf([ContentType.Application.Json]);
    this._receiveContentTypeMatchers_0 = mutableListOf([new JsonContentTypeMatcher()]);
  }
  Object.defineProperty(JsonPlugin$Config.prototype, 'acceptContentTypes', {
  configurable: true, 
  get: function() {
  return this._acceptContentTypes_0;
}, 
  set: function(value) {
  if (!!value.isEmpty()) {
    var message = 'At least one content type should be provided to acceptContentTypes';
    throw IllegalArgumentException_init(message.toString());
  }
  this._acceptContentTypes_0.clear();
  this._acceptContentTypes_0.addAll_brywnq$(value);
}});
  Object.defineProperty(JsonPlugin$Config.prototype, 'receiveContentTypeMatchers', {
  configurable: true, 
  get: function() {
  return this._receiveContentTypeMatchers_0;
}, 
  set: function(value) {
  if (!!value.isEmpty()) {
    var message = 'At least one content type should be provided to acceptContentTypes';
    throw IllegalArgumentException_init(message.toString());
  }
  this._receiveContentTypeMatchers_0.clear();
  this._receiveContentTypeMatchers_0.addAll_brywnq$(value);
}});
  JsonPlugin$Config.prototype.accept_r40bgu$ = function(contentTypes) {
  addAll(this._acceptContentTypes_0, contentTypes);
};
  JsonPlugin$Config.prototype.receive_9llxf9$ = function(matcher) {
  this._receiveContentTypeMatchers_0.add_11rb$(matcher);
};
  JsonPlugin$Config.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Config', 
  interfaces: []};
  JsonPlugin.prototype.canHandle_3vupc4$ = function(contentType) {
  var $receiver = this.acceptContentTypes;
  var any$result;
  any$break:
    do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (contentType.match_9v5yzd$(element)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    } while (false);
  var accepted = any$result;
  var matchers = this.receiveContentTypeMatchers_0;
  var tmp$_0 = accepted;
  if (!tmp$_0) {
    var any$result_0;
    any$break:
      do {
        var tmp$_1;
        if (Kotlin.isType(matchers, Collection) && matchers.isEmpty()) {
          any$result_0 = false;
          break any$break;
        }
        tmp$_1 = matchers.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          if (element_0.contains_9v5yzd$(contentType)) {
            any$result_0 = true;
            break any$break;
          }
        }
        any$result_0 = false;
      } while (false);
    tmp$_0 = any$result_0;
  }
  return tmp$_0;
};
  function JsonPlugin$Plugin() {
    JsonPlugin$Plugin_instance = this;
    this.key_ho9e9a$_0 = new AttributeKey('Json');
  }
  Object.defineProperty(JsonPlugin$Plugin.prototype, 'key', {
  configurable: true, 
  get: function() {
  return this.key_ho9e9a$_0;
}});
  JsonPlugin$Plugin.prototype.prepare_oh3mgy$$default = function(block) {
  var tmp$;
  var $receiver = new JsonPlugin$Config();
  block($receiver);
  var config = $receiver;
  var serializer = (tmp$ = config.serializer) != null ? tmp$ : defaultSerializer();
  var allowedContentTypes = toList(config.acceptContentTypes);
  var receiveContentTypeMatchers = config.receiveContentTypeMatchers;
  return new JsonPlugin(serializer, allowedContentTypes, receiveContentTypeMatchers);
};
  function Coroutine$JsonPlugin$Plugin$install$lambda(closure$plugin_0, $receiver_0, payload_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$tmp$ = void 0;
    this.local$contentType = void 0;
    this.local$$receiver = $receiver_0;
    this.local$payload = payload_0;
  }
  Coroutine$JsonPlugin$Plugin$install$lambda.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$JsonPlugin$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsonPlugin$Plugin$install$lambda.prototype.constructor = Coroutine$JsonPlugin$Plugin$install$lambda;
  Coroutine$JsonPlugin$Plugin$install$lambda.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        var tmp$_0;
        tmp$_0 = this.local$closure$plugin.acceptContentTypes.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          accept(this.local$$receiver.context, element);
        }
        this.local$tmp$ = contentType(this.local$$receiver.context);
        if (this.local$tmp$ == null) {
          return;
        } else {
          this.state_0 = 2;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$contentType = this.local$tmp$;
        if (!this.local$closure$plugin.canHandle_3vupc4$(this.local$contentType)) {
          return;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 3:
        this.local$$receiver.context.headers.remove_61zpoe$(http.HttpHeaders.ContentType);
        if (equals(this.local$payload, Unit)) 
          tmp$ = utils.EmptyContent;
        else if (Kotlin.isType(this.local$payload, Object.getPrototypeOf(utils.EmptyContent).constructor)) 
          tmp$ = utils.EmptyContent;
        else 
          tmp$ = this.local$closure$plugin.serializer.write_ydd6c4$(this.local$payload, this.local$contentType);
        var serializedContent = tmp$;
        this.state_0 = 4;
        this.result_0 = this.local$$receiver.proceedWith_trkh7z$(serializedContent, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 4:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function JsonPlugin$Plugin$install$lambda(closure$plugin_0) {
    return function($receiver_0, payload_0, continuation_0, suspended) {
  var instance = new Coroutine$JsonPlugin$Plugin$install$lambda(closure$plugin_0, $receiver_0, payload_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  function Coroutine$JsonPlugin$Plugin$install$lambda_0(closure$plugin_0, $receiver_0, f_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$info = void 0;
    this.local$body = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$f = f_0;
  }
  Coroutine$JsonPlugin$Plugin$install$lambda_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$JsonPlugin$Plugin$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsonPlugin$Plugin$install$lambda_0.prototype.constructor = Coroutine$JsonPlugin$Plugin$install$lambda_0;
  Coroutine$JsonPlugin$Plugin$install$lambda_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.local$info = this.local$f.component1() , this.local$body = this.local$f.component2();
        if (!Kotlin.isType(this.local$body, ByteReadChannel)) {
          return;
        } else {
          this.state_0 = 2;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.local$tmp$ = contentType_0(this.local$$receiver.context.response);
        if (this.local$tmp$ == null) {
          return;
        } else {
          this.state_0 = 3;
          continue;
        }
      case 3:
        var contentType = this.local$tmp$;
        if (!this.local$closure$plugin.canHandle_3vupc4$(contentType)) {
          return;
        } else {
          this.state_0 = 4;
          continue;
        }
      case 4:
        this.local$tmp$_0 = this.local$closure$plugin.serializer;
        this.state_0 = 5;
        this.result_0 = readRemaining(this.local$body, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 5:
        var parsedBody = this.local$tmp$_0.read_slinh1$(this.local$info, this.result_0);
        var response = new HttpResponseContainer(this.local$info, parsedBody);
        this.state_0 = 6;
        this.result_0 = this.local$$receiver.proceedWith_trkh7z$(response, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 6:
        return this.result_0;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function JsonPlugin$Plugin$install$lambda_0(closure$plugin_0) {
    return function($receiver_0, f_0, continuation_0, suspended) {
  var instance = new Coroutine$JsonPlugin$Plugin$install$lambda_0(closure$plugin_0, $receiver_0, f_0, this, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  }
  JsonPlugin$Plugin.prototype.install_wojrb5$ = function(plugin, scope) {
  scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline.Phases.Transform, JsonPlugin$Plugin$install$lambda(plugin));
  scope.responsePipeline.intercept_h71y74$(HttpResponsePipeline.Phases.Transform, JsonPlugin$Plugin$install$lambda_0(plugin));
};
  JsonPlugin$Plugin.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Plugin', 
  interfaces: [HttpClientPlugin]};
  var JsonPlugin$Plugin_instance = null;
  function JsonPlugin$Plugin_getInstance() {
    if (JsonPlugin$Plugin_instance === null) {
      new JsonPlugin$Plugin();
    }
    return JsonPlugin$Plugin_instance;
  }
  JsonPlugin.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'JsonPlugin', 
  interfaces: []};
  function JsonPlugin_init(config, $this) {
    $this = $this || Object.create(JsonPlugin.prototype);
    var tmp$;
    JsonPlugin.call($this, (tmp$ = config.serializer) != null ? tmp$ : defaultSerializer(), config.acceptContentTypes, config.receiveContentTypeMatchers);
    return $this;
  }
  function Json($receiver, block) {
    $receiver.install_dq2y33$(JsonPlugin$Plugin_getInstance(), block);
  }
  function JsonSerializer() {
  }
  JsonSerializer.prototype.write_za3rmp$ = function(data) {
  return this.write_ydd6c4$(data, ContentType.Application.Json);
};
  JsonSerializer.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'JsonSerializer', 
  interfaces: []};
  function defaultSerializer() {
    return first(serializersStore);
  }
  var serializersStore;
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$plugins = package$client.plugins || (package$client.plugins = {});
  var package$json = package$plugins.json || (package$plugins.json = {});
  package$json.JsonContentTypeMatcher = JsonContentTypeMatcher;
  JsonPlugin.Config = JsonPlugin$Config;
  Object.defineProperty(JsonPlugin, 'Plugin', {
  get: JsonPlugin$Plugin_getInstance});
  package$json.JsonPlugin_init_wsxxkn$ = JsonPlugin_init;
  package$json.JsonPlugin = JsonPlugin;
  package$json.Json_j01nw8$ = Json;
  package$json.JsonSerializer = JsonSerializer;
  package$json.defaultSerializer = defaultSerializer;
  Object.defineProperty(package$json, 'serializersStore', {
  get: function() {
  return serializersStore;
}});
  JsonPlugin$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  serializersStore = ArrayList_init();
  Kotlin.defineModule('ktor-ktor-client-json-js-legacy', _);
  return _;
}));
