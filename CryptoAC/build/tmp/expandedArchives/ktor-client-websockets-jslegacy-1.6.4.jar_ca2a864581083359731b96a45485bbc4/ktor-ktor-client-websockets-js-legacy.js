(function(root, factory) {
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
}(this, function(_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function Empty() {
    Empty_instance = this;
  }
  Empty.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Empty', 
  interfaces: []};
  var Empty_instance = null;
  function Empty_getInstance() {
    if (Empty_instance === null) {
      new Empty();
    }
    return Empty_instance;
  }
  Object.defineProperty(_, 'Empty', {
  get: Empty_getInstance});
  Kotlin.defineModule('ktor-ktor-client-websockets-js-legacy', _);
  return _;
}));
