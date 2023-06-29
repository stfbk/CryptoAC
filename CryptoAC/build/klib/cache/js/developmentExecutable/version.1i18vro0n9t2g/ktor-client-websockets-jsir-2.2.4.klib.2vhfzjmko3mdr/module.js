(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['ktor-ktor-client-websockets-js-ir'] = factory(typeof this['ktor-ktor-client-websockets-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-websockets-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
