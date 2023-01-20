(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-extensions'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-extensions'.");
    }
    if (typeof this['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-extensions'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-extensions'.");
    }
    root['kotlin-extensions'] = factory(typeof this['kotlin-extensions'] === 'undefined' ? {} : this['kotlin-extensions'], kotlin, this['kotlin-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getCallableRef = Kotlin.getCallableRef;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function requireAll(context) {
    var $receiver = context.keys();
    var action = getCallableRef('invoke', function ($receiver, p1) {
      return invoke_0($receiver, p1);
    }.bind(null, context));
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      action(element);
    }
  }
  function invoke($receiver) {
    return $receiver();
  }
  function invoke_0($receiver, arg) {
    return $receiver(arg);
  }
  function invoke_1($receiver, arg1, arg2) {
    return $receiver(arg1, arg2);
  }
  function invoke_2($receiver, arg1, arg2, arg3) {
    return $receiver(arg1, arg2, arg3);
  }
  var js = defineInlineFunction('kotlin-extensions.kotlinext.js.js_5ij4lk$', function (builder) {
    var $receiver = {};
    builder($receiver);
    return $receiver;
  });
  function clone(obj) {
    return Object.assign({}, obj);
  }
  var assign = defineInlineFunction('kotlin-extensions.kotlinext.js.assign_bjvcay$', wrapFunction(function () {
    var clone = _.kotlinext.js.clone_issdgt$;
    return function (obj, builder) {
      var $receiver = clone(obj);
      builder($receiver);
      return $receiver;
    };
  }));
  function toPlainObjectStripNull(obj) {
    var $receiver = {};
    var tmp$, tmp$_0;
    tmp$ = Object.keys(obj);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var key = tmp$[tmp$_0];
      var value = obj[key];
      if (value != null)
        $receiver[key] = value;
    }
    return $receiver;
  }
  function asJsObject($receiver) {
    return $receiver;
  }
  function getOwnPropertyNames($receiver) {
    return Object.getOwnPropertyNames($receiver);
  }
  var package$kotlinext = _.kotlinext || (_.kotlinext = {});
  var package$js = package$kotlinext.js || (package$kotlinext.js = {});
  package$js.requireAll_spd3bs$ = requireAll;
  package$js.invoke_o1mxae$ = invoke;
  package$js.invoke_nbfla$ = invoke_0;
  package$js.invoke_xbkh9p$ = invoke_1;
  package$js.invoke_ahlu6z$ = invoke_2;
  $$importsForInline$$['kotlin-js'] = $module$kotlin_js;
  package$js.js_5ij4lk$ = js;
  package$js.clone_issdgt$ = clone;
  package$js.assign_bjvcay$ = assign;
  $$importsForInline$$['kotlin-extensions'] = _;
  package$js.toPlainObjectStripNull_za3rmp$ = toPlainObjectStripNull;
  package$js.asJsObject_s8jyvk$ = asJsObject;
  package$js.getOwnPropertyNames_s8jyvk$ = getOwnPropertyNames;
  Kotlin.defineModule('kotlin-extensions', _);
  return _;
}));
