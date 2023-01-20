(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-core', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-core'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'kotlin-react'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react'.");
    }
    root['kotlin-react'] = factory(typeof this['kotlin-react'] === 'undefined' ? {} : this['kotlin-react'], kotlin, this['kotlin-react-core'], react);
  }
}(this, function (_, Kotlin, $module$kotlin_react_core, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var createElement = $module$react.createElement;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var isValidElement = $module$react.isValidElement;
  var CHILDREN;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  CHILDREN = Symbol('@@children');
  return _;
}));

//# sourceMappingURL=kotlin-react.js.map
