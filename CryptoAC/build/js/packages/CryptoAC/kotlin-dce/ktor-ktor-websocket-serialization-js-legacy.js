(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-utils-js-legacy', 'ktor-ktor-serialization-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-utils-js-legacy'), require('ktor-ktor-serialization-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websocket-serialization-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-websocket-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websocket-serialization-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-websocket-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-serialization-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websocket-serialization-js-legacy'. Its dependency 'ktor-ktor-serialization-js-legacy' was not found. Please, check whether 'ktor-ktor-serialization-js-legacy' is loaded prior to 'ktor-ktor-websocket-serialization-js-legacy'.");
    }
    root['ktor-ktor-websocket-serialization-js-legacy'] = factory(typeof this['ktor-ktor-websocket-serialization-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-websocket-serialization-js-legacy'], kotlin, this['ktor-ktor-utils-js-legacy'], this['ktor-ktor-serialization-js-legacy']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_utils_js_legacy, $module$ktor_ktor_serialization_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var WebsocketDeserializeException = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.WebsocketDeserializeException;
  var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
  var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
  var getKClass = Kotlin.getKClass;
  var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var Throwable = Error;
  var toString = Kotlin.toString;
  defineInlineFunction('ktor-ktor-websocket-serialization-js-legacy.io.ktor.websocket.serialization.sendSerializedBase_2qtcud$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, data, converter, charset, continuation) {
      var tmp$_1 = reflect.JsType;
      var tmp$_0_0 = getKClass(T_0);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = getReifiedTypeParameterKType(T_0);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      Kotlin.suspendCall(converter.serializeNullable_rh40qx$(charset, typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0), data, Kotlin.coroutineReceiver()));
      var serializedData_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      Kotlin.suspendCall($receiver.outgoing.send_11rb$(serializedData_0, Kotlin.coroutineReceiver()));
    };
  }));
  defineInlineFunction('ktor-ktor-websocket-serialization-js-legacy.io.ktor.websocket.serialization.receiveDeserializedBase_27sgp7$', wrapFunction(function () {
    var WebsocketDeserializeException_init = _.$$importsForInline$$['ktor-ktor-serialization-js-legacy'].io.ktor.serialization.WebsocketDeserializeException;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var getKClass = Kotlin.getKClass;
    var toString = Kotlin.toString;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, converter, charset, continuation) {
      var tmp$_1;
      Kotlin.suspendCall($receiver.incoming.receive(Kotlin.coroutineReceiver()));
      var frame = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      if (!converter.isApplicable_q1ubw4$(frame)) {
        throw new WebsocketDeserializeException_init("Converter doesn't support frame type " + frame.frameType.name, void 0, frame);
      }
      var tmp$_2 = reflect.JsType;
      var tmp$_0_1 = getKClass(T_0);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = getReifiedTypeParameterKType(T_0);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      var typeInfo = typeInfoImpl(tmp$_2, tmp$_0_1, tryGetType$result_0);
      Kotlin.suspendCall(converter.deserialize_v0czzf$(charset, typeInfo, frame, Kotlin.coroutineReceiver()));
      var result = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      if (isT(result))
        return result;
      if (result == null) {
        if (((tmp$_1 = typeInfo.kotlinType) != null ? tmp$_1.isMarkedNullable : null) === true)
          return null;
        throw new WebsocketDeserializeException_init('Frame has null content', void 0, frame);
      }
      throw new WebsocketDeserializeException_init("Can't deserialize value : expected value of type " + toString(getKClass(T_0).simpleName) + ',' + (' got ' + toString(Kotlin.getKClassFromExpression(result).simpleName)), void 0, frame);
    };
  }));
  $$importsForInline$$['ktor-ktor-utils-js-legacy'] = $module$ktor_ktor_utils_js_legacy;
  $$importsForInline$$['ktor-ktor-serialization-js-legacy'] = $module$ktor_ktor_serialization_js_legacy;
  return _;
}));

//# sourceMappingURL=ktor-ktor-websocket-serialization-js-legacy.js.map
