(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-csstype'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-csstype'.");
    }
    if (typeof this['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-csstype'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-csstype'.");
    }
    root['kotlin-csstype'] = factory(typeof this['kotlin-csstype'] === 'undefined' ? {} : this['kotlin-csstype'], kotlin, this['kotlin-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  $$importsForInline$$['kotlin-js'] = $module$kotlin_js;
  return _;
}));

//# sourceMappingURL=kotlin-csstype.js.map
