(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'ktor-ktor-io-js-legacy', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('ktor-ktor-io-js-legacy'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-websockets-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-websockets-js-legacy'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-websockets-js-legacy'.");
    }
    root['ktor-ktor-websockets-js-legacy'] = factory(typeof this['ktor-ktor-websockets-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-websockets-js-legacy'], kotlin, this['ktor-ktor-io-js-legacy'], this['kotlinx-coroutines-core']);
  }
}(this, function(_, Kotlin, $module$ktor_ktor_io_js_legacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var writeFully = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeFully_i6snlg$;
  var decode = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.decode_lb8wo3$;
  var readShort = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readShort_7wsnj1$;
  var DisposableHandle = $module$kotlinx_coroutines_core.kotlinx.coroutines.DisposableHandle;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var BytePacketBuilder = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.BytePacketBuilder_za3lpa$;
  var Throwable = Error;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var Array_0 = Array;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var readBytes = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_xc9h3n$;
  var writeShort = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeShort_9kfkzl$;
  var writeText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeText_t153jy$;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  CloseReason$Codes.prototype = Object.create(Enum.prototype);
  CloseReason$Codes.prototype.constructor = CloseReason$Codes;
  FrameType.prototype = Object.create(Enum.prototype);
  FrameType.prototype.constructor = FrameType;
  Frame$Binary.prototype = Object.create(Frame.prototype);
  Frame$Binary.prototype.constructor = Frame$Binary;
  Frame$Text.prototype = Object.create(Frame.prototype);
  Frame$Text.prototype.constructor = Frame$Text;
  Frame$Close.prototype = Object.create(Frame.prototype);
  Frame$Close.prototype.constructor = Frame$Close;
  Frame$Ping.prototype = Object.create(Frame.prototype);
  Frame$Ping.prototype.constructor = Frame$Ping;
  Frame$Pong.prototype = Object.create(Frame.prototype);
  Frame$Pong.prototype.constructor = Frame$Pong;
  function CloseReason(code, message) {
    this.code = code;
    this.message = message;
  }
  Object.defineProperty(CloseReason.prototype, 'knownReason', {
  configurable: true, 
  get: function() {
  return CloseReason$Codes$Companion_getInstance().byCode_mq22fl$(this.code);
}});
  CloseReason.prototype.toString = function() {
  var tmp$;
  return 'CloseReason(reason=' + ((tmp$ = this.knownReason) != null ? tmp$ : this.code).toString() + ', message=' + this.message + ')';
};
  function CloseReason$Codes(name, ordinal, code) {
    Enum.call(this);
    this.code = code;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CloseReason$Codes_initFields() {
    CloseReason$Codes_initFields = function() {
};
    CloseReason$Codes$NORMAL_instance = new CloseReason$Codes('NORMAL', 0, 1000);
    CloseReason$Codes$GOING_AWAY_instance = new CloseReason$Codes('GOING_AWAY', 1, 1001);
    CloseReason$Codes$PROTOCOL_ERROR_instance = new CloseReason$Codes('PROTOCOL_ERROR', 2, 1002);
    CloseReason$Codes$CANNOT_ACCEPT_instance = new CloseReason$Codes('CANNOT_ACCEPT', 3, 1003);
    CloseReason$Codes$CLOSED_ABNORMALLY_instance = new CloseReason$Codes('CLOSED_ABNORMALLY', 4, 1006);
    CloseReason$Codes$NOT_CONSISTENT_instance = new CloseReason$Codes('NOT_CONSISTENT', 5, 1007);
    CloseReason$Codes$VIOLATED_POLICY_instance = new CloseReason$Codes('VIOLATED_POLICY', 6, 1008);
    CloseReason$Codes$TOO_BIG_instance = new CloseReason$Codes('TOO_BIG', 7, 1009);
    CloseReason$Codes$NO_EXTENSION_instance = new CloseReason$Codes('NO_EXTENSION', 8, 1010);
    CloseReason$Codes$INTERNAL_ERROR_instance = new CloseReason$Codes('INTERNAL_ERROR', 9, 1011);
    CloseReason$Codes$SERVICE_RESTART_instance = new CloseReason$Codes('SERVICE_RESTART', 10, 1012);
    CloseReason$Codes$TRY_AGAIN_LATER_instance = new CloseReason$Codes('TRY_AGAIN_LATER', 11, 1013);
    CloseReason$Codes$Companion_getInstance();
  }
  var CloseReason$Codes$NORMAL_instance;
  function CloseReason$Codes$NORMAL_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$NORMAL_instance;
  }
  var CloseReason$Codes$GOING_AWAY_instance;
  function CloseReason$Codes$GOING_AWAY_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$GOING_AWAY_instance;
  }
  var CloseReason$Codes$PROTOCOL_ERROR_instance;
  function CloseReason$Codes$PROTOCOL_ERROR_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$PROTOCOL_ERROR_instance;
  }
  var CloseReason$Codes$CANNOT_ACCEPT_instance;
  function CloseReason$Codes$CANNOT_ACCEPT_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$CANNOT_ACCEPT_instance;
  }
  var CloseReason$Codes$CLOSED_ABNORMALLY_instance;
  function CloseReason$Codes$CLOSED_ABNORMALLY_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$CLOSED_ABNORMALLY_instance;
  }
  var CloseReason$Codes$NOT_CONSISTENT_instance;
  function CloseReason$Codes$NOT_CONSISTENT_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$NOT_CONSISTENT_instance;
  }
  var CloseReason$Codes$VIOLATED_POLICY_instance;
  function CloseReason$Codes$VIOLATED_POLICY_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$VIOLATED_POLICY_instance;
  }
  var CloseReason$Codes$TOO_BIG_instance;
  function CloseReason$Codes$TOO_BIG_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$TOO_BIG_instance;
  }
  var CloseReason$Codes$NO_EXTENSION_instance;
  function CloseReason$Codes$NO_EXTENSION_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$NO_EXTENSION_instance;
  }
  var CloseReason$Codes$INTERNAL_ERROR_instance;
  function CloseReason$Codes$INTERNAL_ERROR_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$INTERNAL_ERROR_instance;
  }
  var CloseReason$Codes$SERVICE_RESTART_instance;
  function CloseReason$Codes$SERVICE_RESTART_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$SERVICE_RESTART_instance;
  }
  var CloseReason$Codes$TRY_AGAIN_LATER_instance;
  function CloseReason$Codes$TRY_AGAIN_LATER_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$TRY_AGAIN_LATER_instance;
  }
  function CloseReason$Codes$Companion() {
    CloseReason$Codes$Companion_instance = this;
    var $receiver = CloseReason$Codes$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.code, element);
    }
    this.byCodeMap_0 = destination;
    this.UNEXPECTED_CONDITION = CloseReason$Codes$INTERNAL_ERROR_getInstance();
  }
  CloseReason$Codes$Companion.prototype.byCode_mq22fl$ = function(code) {
  return this.byCodeMap_0.get_11rb$(code);
};
  CloseReason$Codes$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var CloseReason$Codes$Companion_instance = null;
  function CloseReason$Codes$Companion_getInstance() {
    CloseReason$Codes_initFields();
    if (CloseReason$Codes$Companion_instance === null) {
      new CloseReason$Codes$Companion();
    }
    return CloseReason$Codes$Companion_instance;
  }
  CloseReason$Codes.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Codes', 
  interfaces: [Enum]};
  function CloseReason$Codes$values() {
    return [CloseReason$Codes$NORMAL_getInstance(), CloseReason$Codes$GOING_AWAY_getInstance(), CloseReason$Codes$PROTOCOL_ERROR_getInstance(), CloseReason$Codes$CANNOT_ACCEPT_getInstance(), CloseReason$Codes$CLOSED_ABNORMALLY_getInstance(), CloseReason$Codes$NOT_CONSISTENT_getInstance(), CloseReason$Codes$VIOLATED_POLICY_getInstance(), CloseReason$Codes$TOO_BIG_getInstance(), CloseReason$Codes$NO_EXTENSION_getInstance(), CloseReason$Codes$INTERNAL_ERROR_getInstance(), CloseReason$Codes$SERVICE_RESTART_getInstance(), CloseReason$Codes$TRY_AGAIN_LATER_getInstance()];
  }
  CloseReason$Codes.values = CloseReason$Codes$values;
  function CloseReason$Codes$valueOf(name) {
    switch (name) {
      case 'NORMAL':
        return CloseReason$Codes$NORMAL_getInstance();
      case 'GOING_AWAY':
        return CloseReason$Codes$GOING_AWAY_getInstance();
      case 'PROTOCOL_ERROR':
        return CloseReason$Codes$PROTOCOL_ERROR_getInstance();
      case 'CANNOT_ACCEPT':
        return CloseReason$Codes$CANNOT_ACCEPT_getInstance();
      case 'CLOSED_ABNORMALLY':
        return CloseReason$Codes$CLOSED_ABNORMALLY_getInstance();
      case 'NOT_CONSISTENT':
        return CloseReason$Codes$NOT_CONSISTENT_getInstance();
      case 'VIOLATED_POLICY':
        return CloseReason$Codes$VIOLATED_POLICY_getInstance();
      case 'TOO_BIG':
        return CloseReason$Codes$TOO_BIG_getInstance();
      case 'NO_EXTENSION':
        return CloseReason$Codes$NO_EXTENSION_getInstance();
      case 'INTERNAL_ERROR':
        return CloseReason$Codes$INTERNAL_ERROR_getInstance();
      case 'SERVICE_RESTART':
        return CloseReason$Codes$SERVICE_RESTART_getInstance();
      case 'TRY_AGAIN_LATER':
        return CloseReason$Codes$TRY_AGAIN_LATER_getInstance();
      default:
        throwISE('No enum constant io.ktor.websocket.CloseReason.Codes.' + name);
    }
  }
  CloseReason$Codes.valueOf_61zpoe$ = CloseReason$Codes$valueOf;
  CloseReason.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'CloseReason', 
  interfaces: []};
  function CloseReason_init(code, message, $this) {
    $this = $this || Object.create(CloseReason.prototype);
    CloseReason.call($this, code.code, message);
    return $this;
  }
  CloseReason.prototype.component1 = function() {
  return this.code;
};
  CloseReason.prototype.component2 = function() {
  return this.message;
};
  CloseReason.prototype.copy_qid81t$ = function(code, message) {
  return new CloseReason(code === void 0 ? this.code : code, message === void 0 ? this.message : message);
};
  CloseReason.prototype.hashCode = function() {
  var result = 0;
  result = result * 31 + Kotlin.hashCode(this.code) | 0;
  result = result * 31 + Kotlin.hashCode(this.message) | 0;
  return result;
};
  CloseReason.prototype.equals = function(other) {
  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.message, other.message)))));
};
  function readText($receiver) {
    if (!$receiver.fin) {
      var message = 'Text could be only extracted from non-fragmented frame';
      throw IllegalArgumentException_init(message.toString());
    }
    var tmp$ = charsets.Charsets.UTF_8.newDecoder();
    var buildPacket$result;
    var builder = BytePacketBuilder(0);
    try {
      writeFully(builder, $receiver.data);
      buildPacket$result = builder.build();
    }    catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
    return decode(tmp$, buildPacket$result);
  }
  function readBytes_0($receiver) {
    return $receiver.data.slice();
  }
  function readReason($receiver) {
    if ($receiver.data.length < 2) {
      return null;
    }
    var buildPacket$result;
    var builder = BytePacketBuilder(0);
    try {
      writeFully(builder, $receiver.data);
      buildPacket$result = builder.build();
    }    catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
    var packet = buildPacket$result;
    var code = readShort(packet);
    var message = packet.readText_vux9f0$();
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose = function() {
};
  NonDisposableHandle.prototype.toString = function() {
  return 'NonDisposableHandle';
};
  NonDisposableHandle.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'NonDisposableHandle', 
  interfaces: [DisposableHandle]};
  var NonDisposableHandle_instance = null;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance === null) {
      new NonDisposableHandle();
    }
    return NonDisposableHandle_instance;
  }
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this);
    this.controlFrame = controlFrame;
    this.opcode = opcode;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FrameType_initFields() {
    FrameType_initFields = function() {
};
    FrameType$TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType$BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType$CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType$PING_instance = new FrameType('PING', 3, true, 9);
    FrameType$PONG_instance = new FrameType('PONG', 4, true, 10);
    FrameType$Companion_getInstance();
  }
  var FrameType$TEXT_instance;
  function FrameType$TEXT_getInstance() {
    FrameType_initFields();
    return FrameType$TEXT_instance;
  }
  var FrameType$BINARY_instance;
  function FrameType$BINARY_getInstance() {
    FrameType_initFields();
    return FrameType$BINARY_instance;
  }
  var FrameType$CLOSE_instance;
  function FrameType$CLOSE_getInstance() {
    FrameType_initFields();
    return FrameType$CLOSE_instance;
  }
  var FrameType$PING_instance;
  function FrameType$PING_getInstance() {
    FrameType_initFields();
    return FrameType$PING_instance;
  }
  var FrameType$PONG_instance;
  function FrameType$PONG_getInstance() {
    FrameType_initFields();
    return FrameType$PONG_instance;
  }
  function FrameType$Companion() {
    FrameType$Companion_instance = this;
    var $receiver = FrameType$values();
    var maxByOrNull$result;
    maxByOrNull$break:
      do {
        if ($receiver.length === 0) {
          maxByOrNull$result = null;
          break maxByOrNull$break;
        }
        var maxElem = $receiver[0];
        var lastIndex = get_lastIndex($receiver);
        if (lastIndex === 0) {
          maxByOrNull$result = maxElem;
          break maxByOrNull$break;
        }
        var maxValue = maxElem.opcode;
        for (var i = 1; i <= lastIndex; i++) {
          var e = $receiver[i];
          var v = e.opcode;
          if (Kotlin.compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
        maxByOrNull$result = maxElem;
      } while (false);
    this.maxOpcode_0 = ensureNotNull(maxByOrNull$result).opcode;
    var array = Array_0(this.maxOpcode_0 + 1 | 0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    loop_label:
      for (var i_0 = 0; i_0 <= tmp$; i_0++) {
        var $receiver_0 = FrameType$values();
        var singleOrNull$result;
        singleOrNull$break:
          do {
            var tmp$_0;
            var single = null;
            var found = false;
            for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
              var element = $receiver_0[tmp$_0];
              if (element.opcode === i_0) {
                if (found) {
                  singleOrNull$result = null;
                  break singleOrNull$break;
                }
                single = element;
                found = true;
              }
            }
            if (!found) {
              singleOrNull$result = null;
              break singleOrNull$break;
            }
            singleOrNull$result = single;
          } while (false);
        array[i_0] = singleOrNull$result;
      }
    this.byOpcodeArray_0 = array;
  }
  FrameType$Companion.prototype.get_za3lpa$ = function(opcode) {
  var tmp$;
  tmp$ = this.maxOpcode_0;
  return 0 <= opcode && opcode <= tmp$ ? this.byOpcodeArray_0[opcode] : null;
};
  FrameType$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var FrameType$Companion_instance = null;
  function FrameType$Companion_getInstance() {
    FrameType_initFields();
    if (FrameType$Companion_instance === null) {
      new FrameType$Companion();
    }
    return FrameType$Companion_instance;
  }
  FrameType.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'FrameType', 
  interfaces: [Enum]};
  function FrameType$values() {
    return [FrameType$TEXT_getInstance(), FrameType$BINARY_getInstance(), FrameType$CLOSE_getInstance(), FrameType$PING_getInstance(), FrameType$PONG_getInstance()];
  }
  FrameType.values = FrameType$values;
  function FrameType$valueOf(name) {
    switch (name) {
      case 'TEXT':
        return FrameType$TEXT_getInstance();
      case 'BINARY':
        return FrameType$BINARY_getInstance();
      case 'CLOSE':
        return FrameType$CLOSE_getInstance();
      case 'PING':
        return FrameType$PING_getInstance();
      case 'PONG':
        return FrameType$PONG_getInstance();
      default:
        throwISE('No enum constant io.ktor.websocket.FrameType.' + name);
    }
  }
  FrameType.valueOf_61zpoe$ = FrameType$valueOf;
  var xor = defineInlineFunction('ktor-ktor-websockets-js-legacy.io.ktor.websocket.xor_34yeqm$', wrapFunction(function() {
  var toByte = Kotlin.toByte;
  return function($receiver, other) {
  return toByte($receiver ^ other);
};
}));
  var flagAt = defineInlineFunction('ktor-ktor-websockets-js-legacy.io.ktor.websocket.flagAt_wndlt3$', function($receiver, at) {
  return $receiver ? 1 << at : 0;
});
  function WebSocketExtensionFactory() {
  }
  WebSocketExtensionFactory.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'WebSocketExtensionFactory', 
  interfaces: []};
  function WebSocketExtension() {
  }
  WebSocketExtension.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'WebSocketExtension', 
  interfaces: []};
  function WebSocketExtensionsConfig() {
    this.installers_0 = ArrayList_init();
    this.rcv_0 = [false, false, false];
  }
  function WebSocketExtensionsConfig$install$lambda($receiver) {
    return Unit;
  }
  function WebSocketExtensionsConfig$install$lambda_0(closure$extension, closure$config) {
    return function() {
  return closure$extension.install_oh3mgy$(closure$config);
};
  }
  WebSocketExtensionsConfig.prototype.install_bhsgl$ = function(extension, config) {
  if (config === void 0) 
    config = WebSocketExtensionsConfig$install$lambda;
  this.checkConflicts_0(extension);
  this.installers_0.add_11rb$(WebSocketExtensionsConfig$install$lambda_0(extension, config));
};
  WebSocketExtensionsConfig.prototype.build = function() {
  var $receiver = this.installers_0;
  var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var item = tmp$.next();
    destination.add_11rb$(item());
  }
  return destination;
};
  WebSocketExtensionsConfig.prototype.checkConflicts_0 = function(extensionFactory) {
  var hasConflict = extensionFactory.rsv1 && this.rcv_0[1];
  hasConflict = hasConflict || (extensionFactory.rsv2 && this.rcv_0[2]);
  hasConflict = hasConflict || (extensionFactory.rsv3 && this.rcv_0[3]);
  if (!!hasConflict) {
    var message = 'Failed to install extension. Please check configured extensions for conflicts.';
    throw IllegalStateException_init(message.toString());
  }
};
  WebSocketExtensionsConfig.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'WebSocketExtensionsConfig', 
  interfaces: []};
  function WebSocketExtensionHeader(name, parameters) {
    this.name = name;
    this.parameters = parameters;
  }
  function WebSocketExtensionHeader$parseParameters$lambda(it) {
    var equalsIndex = indexOf(it, 61);
    if (equalsIndex < 0) 
      return to(it, '');
    var key = substring(it, until(0, equalsIndex));
    var tmp$;
    if ((equalsIndex + 1 | 0) < it.length) {
      var startIndex = equalsIndex + 1 | 0;
      tmp$ = it.substring(startIndex);
    } else 
      tmp$ = '';
    var value = tmp$;
    return to(key, value);
  }
  WebSocketExtensionHeader.prototype.parseParameters = function() {
  return map(asSequence(this.parameters), WebSocketExtensionHeader$parseParameters$lambda);
};
  WebSocketExtensionHeader.prototype.toString = function() {
  return this.name + ' ' + this.parametersToString_0();
};
  WebSocketExtensionHeader.prototype.parametersToString_0 = function() {
  return this.parameters.isEmpty() ? '' : ', ' + joinToString(this.parameters, ',');
};
  WebSocketExtensionHeader.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'WebSocketExtensionHeader', 
  interfaces: []};
  function parseWebSocketExtensions(value) {
    var $receiver = split(value, [';']);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var extension = split(item, [',']);
      var $receiver_0 = first(extension);
      var tmp$_1;
      var name = trim(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : throwCCE()).toString();
      var $receiver_1 = drop(extension, 1);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        var tmp$_3;
        destination_0.add_11rb$(trim(Kotlin.isCharSequence(tmp$_3 = item_0) ? tmp$_3 : throwCCE()).toString());
      }
      var parameters = destination_0;
      tmp$_0.call(destination, new WebSocketExtensionHeader(name, parameters));
    }
    return destination;
  }
  function extension($receiver, extension) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = extensionOrNull($receiver, extension)) != null) 
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Extension ' + extension + ' not found.').toString());
    }
    return tmp$_0;
  }
  function extensionOrNull($receiver, extension) {
    var tmp$;
    var $receiver_0 = $receiver.extensions;
    var firstOrNull$result;
    firstOrNull$break:
      do {
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (element.factory.key === extension.key) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      } while (false);
    return (tmp$ = firstOrNull$result) == null || Kotlin.isType(tmp$, WebSocketExtension) ? tmp$ : null;
  }
  function send($receiver, content, continuation) {
    return $receiver.send_q1ubw4$(Frame$Frame$Text_init_0(content), continuation);
  }
  function send_0($receiver, content, continuation) {
    return $receiver.send_q1ubw4$(Frame$Frame$Binary_init(true, content), continuation);
  }
  function Coroutine$close($receiver_0, reason_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$$receiver = $receiver_0;
    this.local$reason = reason_0;
  }
  Coroutine$close.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$close.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$close.prototype.constructor = Coroutine$close;
  Coroutine$close.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.local$reason === void 0) 
          this.local$reason = CloseReason_init(CloseReason$Codes$NORMAL_getInstance(), '');
        this.exceptionState_0 = 3;
        this.state_0 = 1;
        this.result_0 = this.local$$receiver.send_q1ubw4$(Frame$Frame$Close_init(this.local$reason), this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        this.state_0 = 2;
        this.result_0 = this.local$$receiver.flush(this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 2:
        this.exceptionState_0 = 5;
        this.state_0 = 4;
        continue;
      case 3:
        this.exceptionState_0 = 5;
        var _ = this.exception_0;
        if (!Kotlin.isType(_, Throwable)) 
          throw _;
        this.state_0 = 4;
        continue;
      case 4:
        return;
      case 5:
        throw this.exception_0;
      default:
        this.state_0 = 5;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 5) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function close($receiver_0, reason_0, continuation_0, suspended) {
    var instance = new Coroutine$close($receiver_0, reason_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$close_0($receiver_0, cause_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$cause = cause_0;
  }
  Coroutine$close_0.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$close_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$close_0.prototype.constructor = Coroutine$close_0;
  Coroutine$close_0.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        if (this.local$cause == null) {
          this.state_0 = 3;
          this.result_0 = close(this.local$$receiver, void 0, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        } else {
          this.state_0 = 2;
          this.result_0 = closeExceptionally(this.local$$receiver, this.local$cause, this);
          if (this.result_0 === COROUTINE_SUSPENDED) 
            return COROUTINE_SUSPENDED;
          continue;
        }
      case 1:
        throw this.exception_0;
      case 2:
        this.state_0 = 4;
        continue;
      case 3:
        this.state_0 = 4;
        continue;
      case 4:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function close_0($receiver_0, cause_0, continuation_0, suspended) {
    var instance = new Coroutine$close_0($receiver_0, cause_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function Coroutine$closeExceptionally($receiver_0, cause_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$cause = cause_0;
  }
  Coroutine$closeExceptionally.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$closeExceptionally.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$closeExceptionally.prototype.constructor = Coroutine$closeExceptionally;
  Coroutine$closeExceptionally.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        var tmp$;
        if (Kotlin.isType(this.local$cause, CancellationException)) 
          tmp$ = CloseReason_init(CloseReason$Codes$NORMAL_getInstance(), '');
        else 
          tmp$ = CloseReason_init(CloseReason$Codes$INTERNAL_ERROR_getInstance(), this.local$cause.toString());
        var reason = tmp$;
        this.state_0 = 2;
        this.result_0 = close(this.local$$receiver, reason, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  function closeExceptionally($receiver_0, cause_0, continuation_0, suspended) {
    var instance = new Coroutine$closeExceptionally($receiver_0, cause_0, continuation_0);
    if (suspended) 
      return instance;
    else 
      return instance.doResume(null);
  }
  function DefaultWebSocketSession() {
  }
  DefaultWebSocketSession.prototype.start_wwqcjq$ = function(negotiatedExtensions, callback$default) {
  if (negotiatedExtensions === void 0) 
    negotiatedExtensions = emptyList();
    callback$default ? callback$default(negotiatedExtensions) : this.start_wwqcjq$$default(negotiatedExtensions);
};
  DefaultWebSocketSession.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'DefaultWebSocketSession', 
  interfaces: [WebSocketSession]};
  function DefaultWebSocketSession_0(session, pingInterval, timeoutMillis) {
    throw IllegalStateException_init('There is no CIO js websocket implementation. Consider using platform default.'.toString());
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Frame$Companion_getInstance();
    if (disposableHandle === void 0) 
      disposableHandle = NonDisposableHandle_getInstance();
    if (rsv1 === void 0) 
      rsv1 = false;
    if (rsv2 === void 0) 
      rsv2 = false;
    if (rsv3 === void 0) 
      rsv3 = false;
    this.fin = fin;
    this.frameType = frameType;
    this.data = data;
    this.disposableHandle = disposableHandle;
    this.rsv1_xeh3hg$_0 = rsv1;
    this.rsv2_xeh3gl$_0 = rsv2;
    this.rsv3_xeh3fq$_0 = rsv3;
  }
  Object.defineProperty(Frame.prototype, 'rsv1', {
  get: function() {
  return this.rsv1_xeh3hg$_0;
}});
  Object.defineProperty(Frame.prototype, 'rsv2', {
  get: function() {
  return this.rsv2_xeh3gl$_0;
}});
  Object.defineProperty(Frame.prototype, 'rsv3', {
  get: function() {
  return this.rsv3_xeh3fq$_0;
}});
  function Frame$Binary(fin, data, rsv1, rsv2, rsv3) {
    if (rsv1 === void 0) 
      rsv1 = false;
    if (rsv2 === void 0) 
      rsv2 = false;
    if (rsv3 === void 0) 
      rsv3 = false;
    Frame.call(this, fin, FrameType$BINARY_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  Frame$Binary.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Binary', 
  interfaces: [Frame]};
  function Frame$Frame$Binary_init(fin, data, $this) {
    $this = $this || Object.create(Frame$Binary.prototype);
    Frame$Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Frame$Frame$Binary_init_0(fin, packet, $this) {
    $this = $this || Object.create(Frame$Binary.prototype);
    Frame$Frame$Binary_init(fin, readBytes(packet), $this);
    return $this;
  }
  function Frame$Text(fin, data, rsv1, rsv2, rsv3) {
    if (rsv1 === void 0) 
      rsv1 = false;
    if (rsv2 === void 0) 
      rsv2 = false;
    if (rsv3 === void 0) 
      rsv3 = false;
    Frame.call(this, fin, FrameType$TEXT_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  Frame$Text.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Text', 
  interfaces: [Frame]};
  function Frame$Frame$Text_init(fin, data, $this) {
    $this = $this || Object.create(Frame$Text.prototype);
    Frame$Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Frame$Frame$Text_init_0(text, $this) {
    $this = $this || Object.create(Frame$Text.prototype);
    Frame$Frame$Text_init(true, encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), text, 0, text.length), $this);
    return $this;
  }
  function Frame$Frame$Text_init_1(fin, packet, $this) {
    $this = $this || Object.create(Frame$Text.prototype);
    Frame$Frame$Text_init(fin, readBytes(packet), $this);
    return $this;
  }
  function Frame$Close(data) {
    Frame.call(this, true, FrameType$CLOSE_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  Frame$Close.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Close', 
  interfaces: [Frame]};
  function Frame$Frame$Close_init(reason, $this) {
    $this = $this || Object.create(Frame$Close.prototype);
    var buildPacket$result;
    var builder = BytePacketBuilder(0);
    try {
      writeShort(builder, reason.code);
      writeText(builder, reason.message);
      buildPacket$result = builder.build();
    }    catch (t) {
  if (Kotlin.isType(t, Throwable)) {
    builder.release();
    throw t;
  } else 
    throw t;
}
    Frame$Frame$Close_init_0(buildPacket$result, $this);
    return $this;
  }
  function Frame$Frame$Close_init_0(packet, $this) {
    $this = $this || Object.create(Frame$Close.prototype);
    Frame$Close.call($this, readBytes(packet));
    return $this;
  }
  function Frame$Frame$Close_init_1($this) {
    $this = $this || Object.create(Frame$Close.prototype);
    Frame$Close.call($this, Frame$Companion_getInstance().Empty_0);
    return $this;
  }
  function Frame$Ping(data) {
    Frame.call(this, true, FrameType$PING_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  Frame$Ping.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Ping', 
  interfaces: [Frame]};
  function Frame$Frame$Ping_init(packet, $this) {
    $this = $this || Object.create(Frame$Ping.prototype);
    Frame$Ping.call($this, readBytes(packet));
    return $this;
  }
  function Frame$Pong(data, disposableHandle) {
    if (disposableHandle === void 0) 
      disposableHandle = NonDisposableHandle_getInstance();
    Frame.call(this, true, FrameType$PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  Frame$Pong.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Pong', 
  interfaces: [Frame]};
  function Frame$Frame$Pong_init(packet, $this) {
    $this = $this || Object.create(Frame$Pong.prototype);
    Frame$Pong.call($this, readBytes(packet), NonDisposableHandle_getInstance());
    return $this;
  }
  Frame.prototype.toString = function() {
  return 'Frame ' + this.frameType + ' (fin=' + this.fin + ', buffer len = ' + this.data.length + ')';
};
  Frame.prototype.copy = function() {
  return Frame$Companion_getInstance().byType_da1xm4$(this.fin, this.frameType, this.data.slice(), this.rsv1, this.rsv2, this.rsv3);
};
  function Frame$Companion() {
    Frame$Companion_instance = this;
    this.Empty_0 = new Int8Array(0);
  }
  Frame$Companion.prototype.byType_b24k11$ = function(fin, frameType, data) {
  switch (frameType.name) {
    case 'BINARY':
      return Frame$Frame$Binary_init(fin, data);
    case 'TEXT':
      return Frame$Frame$Text_init(fin, data);
    case 'CLOSE':
      return new Frame$Close(data);
    case 'PING':
      return new Frame$Ping(data);
    case 'PONG':
      return new Frame$Pong(data, NonDisposableHandle_getInstance());
    default:
      return Kotlin.noWhenBranchMatched();
  }
};
  Frame$Companion.prototype.byType_da1xm4$ = function(fin, frameType, data, rsv1, rsv2, rsv3) {
  switch (frameType.name) {
    case 'BINARY':
      return new Frame$Binary(fin, data, rsv1, rsv2, rsv3);
    case 'TEXT':
      return new Frame$Text(fin, data, rsv1, rsv2, rsv3);
    case 'CLOSE':
      return new Frame$Close(data);
    case 'PING':
      return new Frame$Ping(data);
    case 'PONG':
      return new Frame$Pong(data, NonDisposableHandle_getInstance());
    default:
      return Kotlin.noWhenBranchMatched();
  }
};
  Frame$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var Frame$Companion_instance = null;
  function Frame$Companion_getInstance() {
    if (Frame$Companion_instance === null) {
      new Frame$Companion();
    }
    return Frame$Companion_instance;
  }
  Frame.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Frame', 
  interfaces: []};
  function WebSocketSession() {
  }
  function Coroutine$send_q1ubw4$($this, frame_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$frame = frame_0;
  }
  Coroutine$send_q1ubw4$.$metadata$ = {
  kind: Kotlin.Kind.CLASS, 
  simpleName: null, 
  interfaces: [CoroutineImpl]};
  Coroutine$send_q1ubw4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$send_q1ubw4$.prototype.constructor = Coroutine$send_q1ubw4$;
  Coroutine$send_q1ubw4$.prototype.doResume = function() {
  do try {
    switch (this.state_0) {
      case 0:
        this.state_0 = 2;
        this.result_0 = this.$this.outgoing.send_11rb$(this.local$frame, this);
        if (this.result_0 === COROUTINE_SUSPENDED) 
          return COROUTINE_SUSPENDED;
        continue;
      case 1:
        throw this.exception_0;
      case 2:
        return;
      default:
        this.state_0 = 1;
        throw new Error('State Machine Unreachable execution');
    }
  }  catch (e) {
  if (this.state_0 === 1) {
    this.exceptionState_0 = this.state_0;
    throw e;
  } else {
    this.state_0 = this.exceptionState_0;
    this.exception_0 = e;
  }
} while (true);
};
  WebSocketSession.prototype.send_q1ubw4$ = function(frame_0, continuation_0, suspended) {
  var instance = new Coroutine$send_q1ubw4$(this, frame_0, continuation_0);
  if (suspended) 
    return instance;
  else 
    return instance.doResume(null);
};
  WebSocketSession.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'WebSocketSession', 
  interfaces: [CoroutineScope]};
  Object.defineProperty(CloseReason$Codes, 'NORMAL', {
  get: CloseReason$Codes$NORMAL_getInstance});
  Object.defineProperty(CloseReason$Codes, 'GOING_AWAY', {
  get: CloseReason$Codes$GOING_AWAY_getInstance});
  Object.defineProperty(CloseReason$Codes, 'PROTOCOL_ERROR', {
  get: CloseReason$Codes$PROTOCOL_ERROR_getInstance});
  Object.defineProperty(CloseReason$Codes, 'CANNOT_ACCEPT', {
  get: CloseReason$Codes$CANNOT_ACCEPT_getInstance});
  Object.defineProperty(CloseReason$Codes, 'CLOSED_ABNORMALLY', {
  get: CloseReason$Codes$CLOSED_ABNORMALLY_getInstance});
  Object.defineProperty(CloseReason$Codes, 'NOT_CONSISTENT', {
  get: CloseReason$Codes$NOT_CONSISTENT_getInstance});
  Object.defineProperty(CloseReason$Codes, 'VIOLATED_POLICY', {
  get: CloseReason$Codes$VIOLATED_POLICY_getInstance});
  Object.defineProperty(CloseReason$Codes, 'TOO_BIG', {
  get: CloseReason$Codes$TOO_BIG_getInstance});
  Object.defineProperty(CloseReason$Codes, 'NO_EXTENSION', {
  get: CloseReason$Codes$NO_EXTENSION_getInstance});
  Object.defineProperty(CloseReason$Codes, 'INTERNAL_ERROR', {
  get: CloseReason$Codes$INTERNAL_ERROR_getInstance});
  Object.defineProperty(CloseReason$Codes, 'SERVICE_RESTART', {
  get: CloseReason$Codes$SERVICE_RESTART_getInstance});
  Object.defineProperty(CloseReason$Codes, 'TRY_AGAIN_LATER', {
  get: CloseReason$Codes$TRY_AGAIN_LATER_getInstance});
  Object.defineProperty(CloseReason$Codes, 'Companion', {
  get: CloseReason$Codes$Companion_getInstance});
  CloseReason.Codes = CloseReason$Codes;
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$websocket = package$ktor.websocket || (package$ktor.websocket = {});
  package$websocket.CloseReason_init_dy9ulh$ = CloseReason_init;
  package$websocket.CloseReason = CloseReason;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  package$websocket.readText_xv7s0w$ = readText;
  package$websocket.readBytes_q8vmvx$ = readBytes_0;
  package$websocket.readReason_7mwy0p$ = readReason;
  Object.defineProperty(package$websocket, 'NonDisposableHandle', {
  get: NonDisposableHandle_getInstance});
  Object.defineProperty(FrameType, 'TEXT', {
  get: FrameType$TEXT_getInstance});
  Object.defineProperty(FrameType, 'BINARY', {
  get: FrameType$BINARY_getInstance});
  Object.defineProperty(FrameType, 'CLOSE', {
  get: FrameType$CLOSE_getInstance});
  Object.defineProperty(FrameType, 'PING', {
  get: FrameType$PING_getInstance});
  Object.defineProperty(FrameType, 'PONG', {
  get: FrameType$PONG_getInstance});
  Object.defineProperty(FrameType, 'Companion', {
  get: FrameType$Companion_getInstance});
  package$websocket.FrameType = FrameType;
  package$websocket.xor_34yeqm$ = xor;
  package$websocket.flagAt_wndlt3$ = flagAt;
  package$websocket.WebSocketExtensionFactory = WebSocketExtensionFactory;
  package$websocket.WebSocketExtension = WebSocketExtension;
  package$websocket.WebSocketExtensionsConfig = WebSocketExtensionsConfig;
  package$websocket.WebSocketExtensionHeader = WebSocketExtensionHeader;
  package$websocket.parseWebSocketExtensions_61zpoe$ = parseWebSocketExtensions;
  package$websocket.extension_5979nv$ = extension;
  package$websocket.extensionOrNull_5979nv$ = extensionOrNull;
  package$websocket.send_ryst5t$ = send;
  package$websocket.send_634u1v$ = send_0;
  package$websocket.close_d9la3o$ = close;
  package$websocket.close_sjmroz$ = close_0;
  package$websocket.closeExceptionally_jp8kky$ = closeExceptionally;
  package$websocket.DefaultWebSocketSession = DefaultWebSocketSession;
  package$websocket.DefaultWebSocketSession_f6qnbq$ = DefaultWebSocketSession_0;
  Frame.Binary_init_3eyok5$ = Frame$Frame$Binary_init;
  Frame.Binary_init_cqnnqj$ = Frame$Frame$Binary_init_0;
  Frame.Binary = Frame$Binary;
  Frame.Text_init_3eyok5$ = Frame$Frame$Text_init;
  Frame.Text_init_61zpoe$ = Frame$Frame$Text_init_0;
  Frame.Text_init_cqnnqj$ = Frame$Frame$Text_init_1;
  Frame.Text = Frame$Text;
  Frame.Close_init_becdtx$ = Frame$Frame$Close_init;
  Frame.Close_init_3uq2w4$ = Frame$Frame$Close_init_0;
  Frame.Close_init = Frame$Frame$Close_init_1;
  Frame.Close = Frame$Close;
  Frame.Ping_init_3uq2w4$ = Frame$Frame$Ping_init;
  Frame.Ping = Frame$Ping;
  Frame.Pong_init_3uq2w4$ = Frame$Frame$Pong_init;
  Frame.Pong = Frame$Pong;
  Object.defineProperty(Frame, 'Companion', {
  get: Frame$Companion_getInstance});
  package$websocket.Frame = Frame;
  package$websocket.WebSocketSession = WebSocketSession;
  DefaultWebSocketSession.prototype.send_q1ubw4$ = WebSocketSession.prototype.send_q1ubw4$;
  Kotlin.defineModule('ktor-ktor-websockets-js-legacy', _);
  return _;
}));
