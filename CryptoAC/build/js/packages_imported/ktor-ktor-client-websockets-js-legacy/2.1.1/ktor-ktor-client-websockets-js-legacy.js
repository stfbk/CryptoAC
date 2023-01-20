(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-websockets-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-websockets-js-legacy'.");
    }
    root['ktor-ktor-client-websockets-js-legacy'] = factory(typeof this['ktor-ktor-client-websockets-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-websockets-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function Empty() {
    Empty_instance = this;
  }
  Empty.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Empty',
    interfaces: []
  };
  var Empty_instance = null;
  function Empty_getInstance() {
    if (Empty_instance === null) {
      new Empty();
    }
    return Empty_instance;
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$plugins = package$client.plugins || (package$client.plugins = {});
  var package$websocket = package$plugins.websocket || (package$plugins.websocket = {});
  var package$empty = package$websocket.empty || (package$websocket.empty = {});
  Object.defineProperty(package$empty, 'Empty', {
    get: Empty_getInstance
  });
  Kotlin.defineModule('ktor-ktor-client-websockets-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-websockets-js-legacy.js.map
