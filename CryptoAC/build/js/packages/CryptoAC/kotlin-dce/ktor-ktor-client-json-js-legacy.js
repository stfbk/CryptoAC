(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-http-js-legacy', 'ktor-ktor-io-js-legacy', 'ktor-ktor-client-core-js-legacy', 'ktor-ktor-utils-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-client-core-js-legacy'), require('ktor-ktor-utils-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-json-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-client-json-js-legacy'.");
    }
    root['ktor-ktor-client-json-js-legacy'] = factory(typeof this['ktor-ktor-client-json-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-json-js-legacy'], kotlin, this['ktor-ktor-http-js-legacy'], this['ktor-ktor-io-js-legacy'], this['ktor-ktor-client-core-js-legacy'], this['ktor-ktor-utils-js-legacy']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_client_core_js_legacy, $module$ktor_ktor_utils_js_legacy) {
  'use strict';
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ContentTypeMatcher = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentTypeMatcher;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var getKClass = Kotlin.getKClass;
  var HttpStatusCode = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpStatusCode;
  var ByteReadChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteReadChannel;
  var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var toMutableSet = Kotlin.kotlin.collections.toMutableSet_7wnvza$;
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
  var contentType_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_v1wgmc$;
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
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var DefaultCommonIgnoredTypes;
  function JsonPlugin$Plugin() {
    JsonPlugin$Plugin_instance = this;
    this.key_ho9e9a$_0 = new AttributeKey('Json');
  }
  var JsonPlugin$Plugin_instance = null;
  function JsonSerializer() {
  }
  JsonSerializer.prototype.write_za3rmp$ = function (data) {
    return this.write_ydd6c4$(data, ContentType.Application.Json);
  };
  JsonSerializer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'JsonSerializer', interfaces: []};
  var serializersStore;
  var DefaultIgnoredTypes;
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$plugins = package$client.plugins || (package$client.plugins = {});
  var package$json = package$plugins.json || (package$plugins.json = {});
  package$json.JsonSerializer = JsonSerializer;
  Object.defineProperty(package$json, 'serializersStore', {get: function () {
    return serializersStore;
  }});
  JsonPlugin$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  DefaultCommonIgnoredTypes = setOf([PrimitiveClasses$byteArrayClass, PrimitiveClasses$stringClass, getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
  serializersStore = ArrayList_init();
  DefaultIgnoredTypes = LinkedHashSet_init();
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-json-js-legacy.js.map
