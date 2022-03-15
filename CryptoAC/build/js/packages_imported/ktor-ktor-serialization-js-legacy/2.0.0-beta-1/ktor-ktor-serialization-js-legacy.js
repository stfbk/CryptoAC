(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'ktor-ktor-io-js-legacy', 'ktor-ktor-http-js-legacy'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-http-js-legacy'));
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
    root['ktor-ktor-serialization-js-legacy'] = factory(typeof this['ktor-ktor-serialization-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-serialization-js-legacy'], kotlin, this['ktor-ktor-io-js-legacy'], this['ktor-ktor-http-js-legacy']);
  }
}(this, function(_, Kotlin, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_http_js_legacy) {
  'use strict';
  var Exception = Kotlin.kotlin.Exception;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var parseAndSortHeader = $module$ktor_ktor_http_js_legacy.io.ktor.http.parseAndSortHeader_pdl1vj$;
  var equals = Kotlin.equals;
  var Charset = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.Charset;
  var Unit = Kotlin.kotlin.Unit;
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
  ContentConvertException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ContentConvertException', 
  interfaces: [Exception]};
  function JsonConvertException(message, cause) {
    if (cause === void 0) 
      cause = null;
    ContentConvertException.call(this, message, cause);
    this.name = 'JsonConvertException';
  }
  JsonConvertException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'JsonConvertException', 
  interfaces: [ContentConvertException]};
  function WebsocketContentConvertException(message, cause) {
    if (cause === void 0) 
      cause = null;
    ContentConvertException.call(this, message, cause);
    this.name = 'WebsocketContentConvertException';
  }
  WebsocketContentConvertException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'WebsocketContentConvertException', 
  interfaces: [ContentConvertException]};
  function WebsocketConverterNotFoundException(message, cause) {
    if (cause === void 0) 
      cause = null;
    WebsocketContentConvertException.call(this, message, cause);
    this.name = 'WebsocketConverterNotFoundException';
  }
  WebsocketConverterNotFoundException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'WebsocketConverterNotFoundException', 
  interfaces: [WebsocketContentConvertException]};
  function WebsocketDeserializeException(message, cause, frame) {
    if (cause === void 0) 
      cause = null;
    WebsocketContentConvertException.call(this, message, cause);
    this.frame = frame;
    this.name = 'WebsocketDeserializeException';
  }
  WebsocketDeserializeException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'WebsocketDeserializeException', 
  interfaces: [WebsocketContentConvertException]};
  function ContentConverter() {
  }
  ContentConverter.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ContentConverter', 
  interfaces: []};
  function suitableCharset($receiver, defaultCharset) {
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
    return defaultCharset;
  }
  function Configuration() {
  }
  function Configuration$register$lambda($receiver) {
    return Unit;
  }
  Configuration.prototype.register_6d0rjl$ = function(contentType, converter, configuration, callback$default) {
  if (configuration === void 0) 
    configuration = Configuration$register$lambda;
    callback$default ? callback$default(contentType, converter, configuration) : this.register_6d0rjl$$default(contentType, converter, configuration);
};
  Configuration.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'Configuration', 
  interfaces: []};
  function WebsocketContentConverter() {
  }
  WebsocketContentConverter.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'WebsocketContentConverter', 
  interfaces: []};
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
  package$serialization.Configuration = Configuration;
  package$serialization.WebsocketContentConverter = WebsocketContentConverter;
  Kotlin.defineModule('ktor-ktor-serialization-js-legacy', _);
  return _;
}));
