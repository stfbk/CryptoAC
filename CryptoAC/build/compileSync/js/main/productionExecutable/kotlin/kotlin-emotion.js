(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-emotion'] = factory(typeof this['kotlin-emotion'] === 'undefined' ? {} : this['kotlin-emotion']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var index;
  //region block: init
  index = 0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-emotion.js.map
