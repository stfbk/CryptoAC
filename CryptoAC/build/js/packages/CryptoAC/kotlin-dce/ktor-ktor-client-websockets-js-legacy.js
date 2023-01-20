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
  var Empty_instance = null;
}));

//# sourceMappingURL=ktor-ktor-client-websockets-js-legacy.js.map
