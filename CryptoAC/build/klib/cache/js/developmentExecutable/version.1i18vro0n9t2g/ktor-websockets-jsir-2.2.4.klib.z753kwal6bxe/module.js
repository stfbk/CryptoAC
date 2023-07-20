(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-utils-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-websockets-js-ir'.");
    }
    root['ktor-ktor-websockets-js-ir'] = factory(typeof this['ktor-ktor-websockets-js-ir'] === 'undefined' ? {} : this['ktor-ktor-websockets-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-utils-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var mapCapacity = kotlin_kotlin.$_$.w7;
  var coerceAtLeast = kotlin_kotlin.$_$.cc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var protoOf = kotlin_kotlin.$_$.sb;
  var objectMeta = kotlin_kotlin.$_$.rb;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var THROW_ISE = kotlin_kotlin.$_$.gg;
  var objectCreate = kotlin_kotlin.$_$.qb;
  var Enum = kotlin_kotlin.$_$.tf;
  var classMeta = kotlin_kotlin.$_$.ka;
  var toString = kotlin_kotlin.$_$.xb;
  var getStringHashCode = kotlin_kotlin.$_$.ta;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var emptyList = kotlin_kotlin.$_$.u6;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var Long = kotlin_kotlin.$_$.yf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var isInterface = kotlin_kotlin.$_$.eb;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var CoroutineImpl = kotlin_kotlin.$_$.w9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g9;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.v;
  var ensureNotNull = kotlin_kotlin.$_$.wg;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.j1;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.g1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.d;
  var CancellationException = kotlin_kotlin.$_$.f9;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var IOException_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.i;
  var toLong = kotlin_kotlin.$_$.vb;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var joinToString = kotlin_kotlin.$_$.l7;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.m;
  var SuspendFunction1 = kotlin_kotlin.$_$.x9;
  var readShort = kotlin_io_ktor_ktor_io.$_$.h1;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.k;
  var decode = kotlin_io_ktor_ktor_io.$_$.o;
  var Exception = kotlin_kotlin.$_$.vf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.k1;
  var captureStack = kotlin_kotlin.$_$.ea;
  var initCauseBridge = kotlin_io_ktor_ktor_utils.$_$.l;
  var defineProp = kotlin_kotlin.$_$.ma;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var get_lastIndex = kotlin_kotlin.$_$.q7;
  var compareTo = kotlin_kotlin.$_$.la;
  var fillArrayVal = kotlin_kotlin.$_$.pa;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var encodeToByteArray = kotlin_kotlin.$_$.hd;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.p;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.a1;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.k;
  var Random = kotlin_kotlin.$_$.ac;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var hex = kotlin_io_ktor_ktor_utils.$_$.k1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var indexOf = kotlin_kotlin.$_$.od;
  var to = kotlin_kotlin.$_$.kh;
  var until = kotlin_kotlin.$_$.mc;
  var substring = kotlin_kotlin.$_$.ne;
  var asSequence = kotlin_kotlin.$_$.y5;
  var map = kotlin_kotlin.$_$.wc;
  var split = kotlin_kotlin.$_$.ie;
  var first = kotlin_kotlin.$_$.d7;
  var isCharSequence = kotlin_kotlin.$_$.ab;
  var trim = kotlin_kotlin.$_$.kf;
  var drop = kotlin_kotlin.$_$.t6;
  var writeShort = kotlin_io_ktor_ktor_io.$_$.k1;
  var writeText = kotlin_io_ktor_ktor_io.$_$.l1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.dh;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Codes, 'Codes', classMeta, Enum);
  setMetadataFor(CloseReason, 'CloseReason', classMeta);
  function send(frame, $completion) {
    var tmp0 = this.get_outgoing_us7o3v_k$().send_4idxxh_k$(frame, $completion);
    return tmp0;
  }
  setMetadataFor(WebSocketSession, 'WebSocketSession', interfaceMeta, VOID, [CoroutineScope], VOID, VOID, [1, 0]);
  function start$default(negotiatedExtensions, $super) {
    negotiatedExtensions = negotiatedExtensions === VOID ? emptyList() : negotiatedExtensions;
    var tmp;
    if ($super === VOID) {
      this.start_x95223_k$(negotiatedExtensions);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.start_x95223_k$.call(this, negotiatedExtensions);
    }
    return tmp;
  }
  setMetadataFor(DefaultWebSocketSession, 'DefaultWebSocketSession', interfaceMeta, VOID, [WebSocketSession], VOID, VOID, [1, 0]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, 'DefaultWebSocketSessionImpl$runIncomingProcessor$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, 'DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, 'DefaultWebSocketSessionImpl$runOrCancelPinger$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($outgoingProcessorLoopCOROUTINE$0, '$outgoingProcessorLoopCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($sendCloseSequenceCOROUTINE$1, '$sendCloseSequenceCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($checkMaxFrameSizeCOROUTINE$2, '$checkMaxFrameSizeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', classMeta, VOID, [DefaultWebSocketSession, WebSocketSession], VOID, VOID, [1, 0, 2]);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [DisposableHandle]);
  setMetadataFor(FrameTooBigException, 'FrameTooBigException', classMeta, Exception, [Exception, CopyableThrowable]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(FrameType, 'FrameType', classMeta, Enum);
  setMetadataFor(ponger$slambda, 'ponger$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(pinger$slambda$slambda, 'pinger$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(pinger$slambda$slambda_1, 'pinger$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(pinger$slambda, 'pinger$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(WebSocketExtension, 'WebSocketExtension', interfaceMeta);
  setMetadataFor(WebSocketExtensionFactory, 'WebSocketExtensionFactory', interfaceMeta);
  setMetadataFor(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', classMeta);
  setMetadataFor(WebSocketExtensionHeader, 'WebSocketExtensionHeader', classMeta);
  setMetadataFor($closeCOROUTINE$3, '$closeCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(Frame, 'Frame', classMeta);
  setMetadataFor(Binary, 'Binary', classMeta, Frame);
  setMetadataFor(Text, 'Text', classMeta, Frame);
  setMetadataFor(Close, 'Close', classMeta, Frame);
  setMetadataFor(Ping, 'Ping', classMeta, Frame);
  setMetadataFor(Pong, 'Pong', classMeta, Frame);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  //endregion
  function _get_byCodeMap__7duph5($this) {
    return $this.byCodeMap_1;
  }
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp1_associateBy = values();
    var capacity = coerceAtLeast(mapCapacity(tmp1_associateBy.length), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var indexedObject = tmp1_associateBy;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.Companion.byCodeMap.<anonymous>' call
      tmp$ret$0 = element.code_1;
      tmp0_associateByTo.put_3mhbri_k$(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.byCodeMap_1 = tmp$ret$2;
    this.UNEXPECTED_CONDITION_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).get_UNEXPECTED_CONDITION_rk0i52_k$ = function () {
    return this.UNEXPECTED_CONDITION_1;
  };
  protoOf(Companion).byCode_2tpqvq_k$ = function (code) {
    return this.byCodeMap_1.get_1mhr4y_k$(code);
  };
  var Companion_instance;
  function Companion_getInstance() {
    Codes_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NORMAL':
        return Codes_NORMAL_getInstance();
      case 'GOING_AWAY':
        return Codes_GOING_AWAY_getInstance();
      case 'PROTOCOL_ERROR':
        return Codes_PROTOCOL_ERROR_getInstance();
      case 'CANNOT_ACCEPT':
        return Codes_CANNOT_ACCEPT_getInstance();
      case 'CLOSED_ABNORMALLY':
        return Codes_CLOSED_ABNORMALLY_getInstance();
      case 'NOT_CONSISTENT':
        return Codes_NOT_CONSISTENT_getInstance();
      case 'VIOLATED_POLICY':
        return Codes_VIOLATED_POLICY_getInstance();
      case 'TOO_BIG':
        return Codes_TOO_BIG_getInstance();
      case 'NO_EXTENSION':
        return Codes_NO_EXTENSION_getInstance();
      case 'INTERNAL_ERROR':
        return Codes_INTERNAL_ERROR_getInstance();
      case 'SERVICE_RESTART':
        return Codes_SERVICE_RESTART_getInstance();
      case 'TRY_AGAIN_LATER':
        return Codes_TRY_AGAIN_LATER_getInstance();
      default:
        Codes_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Codes_entriesInitialized;
  function Codes_initEntries() {
    if (Codes_entriesInitialized)
      return Unit_getInstance();
    Codes_entriesInitialized = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    Companion_getInstance();
  }
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.code_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.code_1 = code;
  }
  protoOf(Codes).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  function Codes_NORMAL_getInstance() {
    Codes_initEntries();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    Codes_initEntries();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    Codes_initEntries();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    Codes_initEntries();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    Codes_initEntries();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    Codes_initEntries();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    Codes_initEntries();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    Codes_initEntries();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    Codes_initEntries();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    Codes_initEntries();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.code_1 = code;
    this.message_1 = message;
  }
  protoOf(CloseReason).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(CloseReason).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  protoOf(CloseReason).get_knownReason_j6teda_k$ = function () {
    return Companion_getInstance().byCode_2tpqvq_k$(this.code_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.get_knownReason_j6teda_k$();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.code_1 : tmp0_elvis_lhs) + ', message=' + this.message_1 + ')';
  };
  protoOf(CloseReason).component1_7eebsc_k$ = function () {
    return this.code_1;
  };
  protoOf(CloseReason).component2_7eebsb_k$ = function () {
    return this.message_1;
  };
  protoOf(CloseReason).copy_5z8094_k$ = function (code, message) {
    return new CloseReason(code, message);
  };
  protoOf(CloseReason).copy$default_2daixm_k$ = function (code, message, $super) {
    code = code === VOID ? this.code_1 : code;
    message = message === VOID ? this.message_1 : message;
    return $super === VOID ? this.copy_5z8094_k$(code, message) : $super.copy_5z8094_k$.call(this, code, message);
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.code_1;
    result = imul(result, 31) + getStringHashCode(this.message_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    var tmp0_other_with_cast = other instanceof CloseReason ? other : THROW_CCE();
    if (!(this.code_1 === tmp0_other_with_cast.code_1))
      return false;
    if (!(this.message_1 === tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  function get_LOGGER() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return LOGGER;
  }
  var LOGGER;
  function get_IncomingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return IncomingProcessorCoroutineName;
  }
  var IncomingProcessorCoroutineName;
  function get_OutgoingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return OutgoingProcessorCoroutineName;
  }
  var OutgoingProcessorCoroutineName;
  function get_NORMAL_CLOSE() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return NORMAL_CLOSE;
  }
  var NORMAL_CLOSE;
  function DefaultWebSocketSession() {
  }
  function DefaultWebSocketSession_0(session, pingInterval, timeoutMillis) {
    pingInterval = pingInterval === VOID ? new Long(-1, -1) : pingInterval;
    timeoutMillis = timeoutMillis === VOID ? new Long(15000, 0) : timeoutMillis;
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.DefaultWebSocketSession.<anonymous>' call
      tmp$ret$0 = 'Cannot wrap other DefaultWebSocketSession';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingInterval, timeoutMillis);
  }
  function _get_EmptyPong__6eobtg($this) {
    return $this.EmptyPong_1;
  }
  function _get_raw__e6fv55($this) {
    return $this.raw_1;
  }
  function _get_pinger__segtvw($this) {
    return $this.pinger_1;
  }
  function _get_closeReasonRef__5hrql0($this) {
    return $this.closeReasonRef_1;
  }
  function _get_filtered__9xi3ro($this) {
    return $this.filtered_1;
  }
  function _get_outgoingToBeProcessed__uqz9tf($this) {
    return $this.outgoingToBeProcessed_1;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function _get_context__ps0bpe($this) {
    return $this.context_1;
  }
  function _get__extensions__ct7dq6($this) {
    return $this._extensions_1;
  }
  function _get_started__e3clzk($this) {
    return $this.started_1;
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().plus_rgw9wi_k$(Dispatchers_getInstance().get_Unconfined_sfvx0q_k$());
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().plus_rgw9wi_k$(Dispatchers_getInstance().get_Unconfined_sfvx0q_k$());
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $completion) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$0($this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function sendCloseSequence($this, reason, exception, $completion) {
    var tmp = new $sendCloseSequenceCOROUTINE$1($this, reason, exception, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function sendCloseSequence$default($this, reason, exception, $completion, $super) {
    exception = exception === VOID ? null : exception;
    return sendCloseSequence($this, reason, exception, $completion);
  }
  function tryClose($this) {
    return $this.closed_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.pingIntervalMillis_1;
    var tmp;
    if ($this.closed_1.get_kotlinx$atomicfu$value_vi2am5_k$()) {
      tmp = null;
    } else if (interval.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp_0 = $this.raw_1.get_outgoing_us7o3v_k$();
      var tmp_1 = $this.timeoutMillis_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.pinger_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.close$default_4vjk8d_k$();
    var tmp1_safe_receiver = newPinger;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : new ChannelResult(tmp1_safe_receiver.trySend_3hclq4_k$(Companion_getInstance_0().EmptyPong_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.holder_1);
    if ($this.closed_1.get_kotlinx$atomicfu$value_vi2am5_k$() ? !(newPinger == null) : false) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $completion) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$2($this, packet, frame, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function processIncomingExtensions($this, frame) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = $this.get_extensions_kxksyl_k$();
    var accumulator = frame;
    var tmp0_iterator = tmp0_fold.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.DefaultWebSocketSessionImpl.processIncomingExtensions.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.processIncomingFrame_f3o2px_k$(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  }
  function processOutgoingExtensions($this, frame) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = $this.get_extensions_kxksyl_k$();
    var accumulator = frame;
    var tmp0_iterator = tmp0_fold.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.DefaultWebSocketSessionImpl.processOutgoingExtensions.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.processOutgoingFrame_hfix1d_k$(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.EmptyPong_1 = new Pong(new Int8Array(0), NonDisposableHandle_getInstance());
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.this$0__1 = this$0;
    this.$ponger_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(37);
            this.last0__1 = null;
            this.closeFramePresented1__1 = false;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(31);
            this.set_exceptionState_s9sevl_k$(30);
            var tmp_0 = this;
            tmp_0.tmp0_consumeEach4__1 = this.this$0__1.raw_1.get_incoming_u9os29_k$();
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.cause6__1 = null;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.set_exceptionState_s9sevl_k$(27);
            this.set_exceptionState_s9sevl_k$(26);
            this.tmp0_iterator10__1 = this.tmp0_consumeEach4__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.set_state_a96kl8_k$(8);
            suspendResult = this.tmp0_iterator10__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.set_state_a96kl8_k$(24);
              continue $sm;
            }

            this.e11__1 = this.tmp0_iterator10__1.next_20eer_k$();
            this.set_state_a96kl8_k$(9);
            continue $sm;
          case 9:
            get_LOGGER().trace_jqeghf_k$('WebSocketSession(' + this.$this$launch_1 + ') receiving frame ' + this.e11__1);
            this.tmp0_subject13__1 = this.e11__1;
            var tmp_1 = this.tmp0_subject13__1;
            if (tmp_1 instanceof Close) {
              if (!this.this$0__1.get_outgoing_us7o3v_k$().get_isClosedForSend_ajczci_k$()) {
                this.set_state_a96kl8_k$(18);
                var tmp_2 = this.this$0__1.get_outgoing_us7o3v_k$();
                var tmp1_elvis_lhs = readReason(this.e11__1);
                suspendResult = tmp_2.send_4idxxh_k$(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(19);
                continue $sm;
              }
            } else {
              var tmp_3 = this.tmp0_subject13__1;
              if (tmp_3 instanceof Pong) {
                this.tmp2_safe_receiver14__1 = this.this$0__1.pinger_1.get_kotlinx$atomicfu$value_vi2am5_k$();
                if (this.tmp2_safe_receiver14__1 == null) {
                  this.WHEN_RESULT15__1 = null;
                  this.set_state_a96kl8_k$(15);
                  continue $sm;
                } else {
                  this.set_state_a96kl8_k$(14);
                  suspendResult = this.tmp2_safe_receiver14__1.send_4idxxh_k$(this.e11__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                var tmp_4 = this.tmp0_subject13__1;
                if (tmp_4 instanceof Ping) {
                  this.set_state_a96kl8_k$(13);
                  suspendResult = this.$ponger_1.send_4idxxh_k$(this.e11__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_a96kl8_k$(10);
                  suspendResult = checkMaxFrameSize(this.this$0__1, this.last0__1, this.e11__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

            break;
          case 10:
            if (!this.e11__1.get_fin_18j5um_k$()) {
              if (this.last0__1 == null) {
                this.last0__1 = new BytePacketBuilder();
              }
              writeFully(ensureNotNull(this.last0__1), this.e11__1.get_data_wokkxf_k$());
              this.tmp$ret$212__1 = Unit_getInstance();
              this.set_state_a96kl8_k$(17);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(11);
              continue $sm;
            }

            break;
          case 11:
            var tmp_5 = this;
            var tmp3_safe_receiver = this.last0__1;
            var tmp_6;
            if (tmp3_safe_receiver == null) {
              tmp_6 = null;
            } else {
              writeFully(tmp3_safe_receiver, this.e11__1.get_data_wokkxf_k$());
              tmp_6 = Companion_getInstance_2().byType_l553t_k$(true, this.e11__1.get_frameType_hj325a_k$(), readBytes(tmp3_safe_receiver.build_1k0s4u_k$()), this.e11__1.get_rsv1_wotw3p_k$(), this.e11__1.get_rsv2_wotw3q_k$(), this.e11__1.get_rsv3_wotw3r_k$());
            }

            var tmp4_elvis_lhs = tmp_6;
            tmp_5.frameToSend16__1 = tmp4_elvis_lhs == null ? this.e11__1 : tmp4_elvis_lhs;
            this.last0__1 = null;
            this.set_state_a96kl8_k$(12);
            suspendResult = this.this$0__1.filtered_1.send_4idxxh_k$(processIncomingExtensions(this.this$0__1, this.frameToSend16__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            this.set_state_a96kl8_k$(16);
            continue $sm;
          case 13:
            this.set_state_a96kl8_k$(16);
            continue $sm;
          case 14:
            var tmp_7 = this;
            tmp_7.WHEN_RESULT15__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(15);
            continue $sm;
          case 15:
            ;
            this.set_state_a96kl8_k$(16);
            continue $sm;
          case 16:
            if (false) {
              this.set_state_a96kl8_k$(9);
              continue $sm;
            }

            this.set_state_a96kl8_k$(17);
            continue $sm;
          case 17:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 18:
            this.set_state_a96kl8_k$(19);
            continue $sm;
          case 19:
            this.closeFramePresented1__1 = true;
            this.tmp$ret$09__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(20);
            continue $sm;
          case 20:
            var tmp_8 = this;
            cancelConsumed(this.tmp0_consumeEach4__1, this.cause6__1);
            tmp_8.tmp$ret$83__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(37);
            this.set_state_a96kl8_k$(21);
            continue $sm;
          case 21:
            this.$ponger_1.close$default_4vjk8d_k$();
            ;
            var tmp0_safe_receiver = this.last0__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.release_wtm6d2_k$();
            }

            ;
            this.this$0__1.filtered_1.close$default_4vjk8d_k$();
            ;
            if (!this.closeFramePresented1__1) {
              this.set_state_a96kl8_k$(22);
              suspendResult = close(this.this$0__1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(23);
              continue $sm;
            }

            break;
          case 22:
            this.set_state_a96kl8_k$(23);
            continue $sm;
          case 23:
            return Unit_getInstance();
          case 24:
            this.tmp$ret$48__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(25);
            var tmp_9 = this;
            continue $sm;
          case 25:
            var tmp_10 = this;
            cancelConsumed(this.tmp0_consumeEach4__1, this.cause6__1);
            tmp_10.tmp$ret$105__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(29);
            continue $sm;
          case 26:
            this.set_exceptionState_s9sevl_k$(27);
            var tmp_11 = this.get_exception_x0n6w6_k$();
            if (tmp_11 instanceof Error) {
              this.e17__1 = this.get_exception_x0n6w6_k$();
              var tmp_12 = this;
              this.cause6__1 = this.e17__1;
              throw this.e17__1;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 27:
            this.set_exceptionState_s9sevl_k$(30);
            this.t18__1 = this.get_exception_x0n6w6_k$();
            cancelConsumed(this.tmp0_consumeEach4__1, this.cause6__1);
            ;
            throw this.t18__1;
          case 28:
            cancelConsumed(this.tmp0_consumeEach4__1, this.cause6__1);
            ;
            if (false) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            this.set_state_a96kl8_k$(29);
            continue $sm;
          case 29:
            this.tmp$ret$122__1 = this.tmp$ret$105__1;
            this.set_exceptionState_s9sevl_k$(37);
            this.set_state_a96kl8_k$(34);
            continue $sm;
          case 30:
            this.set_exceptionState_s9sevl_k$(31);
            var tmp_13 = this.get_exception_x0n6w6_k$();
            if (tmp_13 instanceof ClosedSendChannelException) {
              this.ignore19__1 = this.get_exception_x0n6w6_k$();
              var tmp_14 = this;
              tmp_14.tmp$ret$122__1 = Unit_getInstance();
              this.set_exceptionState_s9sevl_k$(37);
              this.set_state_a96kl8_k$(34);
              continue $sm;
            } else {
              var tmp_15 = this.get_exception_x0n6w6_k$();
              if (tmp_15 instanceof Error) {
                this.cause20__1 = this.get_exception_x0n6w6_k$();
                var tmp_16 = this;
                this.$ponger_1.close$default_4vjk8d_k$();
                this.this$0__1.filtered_1.close_9zy44b_k$(this.cause20__1);
                tmp_16.tmp$ret$122__1 = Unit_getInstance();
                this.set_exceptionState_s9sevl_k$(37);
                this.set_state_a96kl8_k$(34);
                continue $sm;
              } else {
                throw this.get_exception_x0n6w6_k$();
              }
            }

            break;
          case 31:
            this.set_exceptionState_s9sevl_k$(37);
            this.t21__1 = this.get_exception_x0n6w6_k$();
            this.$ponger_1.close$default_4vjk8d_k$();
            ;
            var tmp0_safe_receiver_0 = this.last0__1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.release_wtm6d2_k$();
            }

            ;
            this.this$0__1.filtered_1.close$default_4vjk8d_k$();
            ;
            if (!this.closeFramePresented1__1) {
              this.set_state_a96kl8_k$(32);
              suspendResult = close(this.this$0__1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(33);
              continue $sm;
            }

            break;
          case 32:
            this.set_state_a96kl8_k$(33);
            continue $sm;
          case 33:
            throw this.t21__1;
          case 34:
            this.$ponger_1.close$default_4vjk8d_k$();
            ;
            var tmp0_safe_receiver_1 = this.last0__1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.release_wtm6d2_k$();
            }

            ;
            this.this$0__1.filtered_1.close$default_4vjk8d_k$();
            ;
            if (!this.closeFramePresented1__1) {
              this.set_state_a96kl8_k$(35);
              suspendResult = close(this.this$0__1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(36);
              continue $sm;
            }

            break;
          case 35:
            this.set_state_a96kl8_k$(36);
            continue $sm;
          case 36:
            return Unit_getInstance();
          case 37:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 37) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.this$0__1, this.$ponger_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(2);
            suspendResult = outgoingProcessorLoop(this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$00__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof ClosedSendChannelException) {
              this.ignore1__1 = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              tmp_1.tmp$ret$00__1 = Unit_getInstance();
              this.set_exceptionState_s9sevl_k$(9);
              this.set_state_a96kl8_k$(7);
              continue $sm;
            } else {
              var tmp_2 = this.get_exception_x0n6w6_k$();
              if (tmp_2 instanceof ClosedReceiveChannelException) {
                this.ignore2__1 = this.get_exception_x0n6w6_k$();
                var tmp_3 = this;
                tmp_3.tmp$ret$00__1 = Unit_getInstance();
                this.set_exceptionState_s9sevl_k$(9);
                this.set_state_a96kl8_k$(7);
                continue $sm;
              } else {
                var tmp_4 = this.get_exception_x0n6w6_k$();
                if (tmp_4 instanceof CancellationException) {
                  this.ignore3__1 = this.get_exception_x0n6w6_k$();
                  var tmp_5 = this;
                  tmp_5.tmp$ret$00__1 = Unit_getInstance();
                  this.set_exceptionState_s9sevl_k$(9);
                  this.set_state_a96kl8_k$(7);
                  continue $sm;
                } else {
                  var tmp_6 = this.get_exception_x0n6w6_k$();
                  if (tmp_6 instanceof ChannelIOException) {
                    this.ignore4__1 = this.get_exception_x0n6w6_k$();
                    var tmp_7 = this;
                    tmp_7.tmp$ret$00__1 = Unit_getInstance();
                    this.set_exceptionState_s9sevl_k$(9);
                    this.set_state_a96kl8_k$(7);
                    continue $sm;
                  } else {
                    var tmp_8 = this.get_exception_x0n6w6_k$();
                    if (tmp_8 instanceof Error) {
                      this.cause5__1 = this.get_exception_x0n6w6_k$();
                      this.this$0__1.outgoingToBeProcessed_1.cancel_4b7aim_k$(CancellationException_init_$Create$('Failed to send frame', this.cause5__1));
                      this.set_state_a96kl8_k$(4);
                      suspendResult = closeExceptionally(this.this$0__1.raw_1, this.cause5__1, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.get_exception_x0n6w6_k$();
                    }
                  }
                }
              }
            }

            break;
          case 4:
            this.tmp$ret$00__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 5:
            this.set_exceptionState_s9sevl_k$(9);
            this.t6__1 = this.get_exception_x0n6w6_k$();
            this.this$0__1.outgoingToBeProcessed_1.cancel$default_l3ut5j_k$();
            this.set_state_a96kl8_k$(6);
            suspendResult = close(this.this$0__1.raw_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            throw this.t6__1;
          case 7:
            this.this$0__1.outgoingToBeProcessed_1.cancel$default_l3ut5j_k$();
            this.set_state_a96kl8_k$(8);
            suspendResult = close(this.this$0__1.raw_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).invoke_7wr2lb_k$ = function (it, $completion) {
    var tmp = this.create_b0xrsk_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_7wr2lb_k$(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = sendCloseSequence(this.this$0__1, this.it_1, IOException_init_$Create$('Ping timeout'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).create_b0xrsk_k$ = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b0xrsk_k$(value instanceof CloseReason ? value : THROW_CCE(), completion);
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_7wr2lb_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $outgoingProcessorLoopCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            this.tmp0_iterator0__1 = this._this__u8e3s4__1.outgoingToBeProcessed_1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this.tmp0_iterator0__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            this.frame1__1 = this.tmp0_iterator0__1.next_20eer_k$();
            get_LOGGER().trace_jqeghf_k$('Sending ' + this.frame1__1 + ' from session ' + this._this__u8e3s4__1);
            this.tmp1_subject2__1 = this.frame1__1;
            var tmp_0 = this.tmp1_subject2__1;
            if (tmp_0 instanceof Close) {
              this.set_state_a96kl8_k$(3);
              suspendResult = sendCloseSequence$default(this._this__u8e3s4__1, readReason(this.frame1__1), VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1;
              var tmp_2 = this.tmp1_subject2__1;
              if (tmp_2 instanceof Text) {
                tmp_1 = true;
              } else {
                var tmp_3 = this.tmp1_subject2__1;
                tmp_1 = tmp_3 instanceof Binary;
              }
              if (tmp_1) {
                this.WHEN_RESULT3__1 = processOutgoingExtensions(this._this__u8e3s4__1, this.frame1__1);
                this.set_state_a96kl8_k$(4);
                continue $sm;
              } else {
                this.WHEN_RESULT3__1 = this.frame1__1;
                this.set_state_a96kl8_k$(4);
                continue $sm;
              }
            }

            break;
          case 3:
            this.set_state_a96kl8_k$(6);
            var tmp_4 = this;
            continue $sm;
          case 4:
            this.processedFrame4__1 = this.WHEN_RESULT3__1;
            this.set_state_a96kl8_k$(5);
            suspendResult = this._this__u8e3s4__1.raw_1.get_outgoing_us7o3v_k$().send_4idxxh_k$(this.processedFrame4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $sendCloseSequenceCOROUTINE$1(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.reason_1 = reason;
    this.exception_2 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            if (!tryClose(this._this__u8e3s4__1))
              return Unit_getInstance();
            get_LOGGER().trace_jqeghf_k$('Sending Close Sequence for session ' + this._this__u8e3s4__1 + ' with reason ' + this.reason_1 + ' and exception ' + this.exception_2);
            this._this__u8e3s4__1.context_1.complete_9ww6vb_k$();
            ;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.reason_1;
            tmp_0.reasonToSend0__1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(5);
            runOrCancelPinger(this._this__u8e3s4__1);
            if (!(this.reasonToSend0__1.get_code_wok7xy_k$() === Codes_CLOSED_ABNORMALLY_getInstance().get_code_wok7xy_k$())) {
              this.set_state_a96kl8_k$(2);
              suspendResult = this._this__u8e3s4__1.raw_1.get_outgoing_us7o3v_k$().send_4idxxh_k$(Close_init_$Create$(this.reasonToSend0__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            break;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this._this__u8e3s4__1.closeReasonRef_1.complete_8y7ynm_k$(this.reasonToSend0__1);
            ;
            if (!(this.exception_2 == null)) {
              this._this__u8e3s4__1.outgoingToBeProcessed_1.close_9zy44b_k$(this.exception_2);
              this._this__u8e3s4__1.filtered_1.close_9zy44b_k$(this.exception_2);
            }

            return Unit_getInstance();
          case 5:
            this.set_exceptionState_s9sevl_k$(6);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.closeReasonRef_1.complete_8y7ynm_k$(this.reasonToSend0__1);
            ;
            if (!(this.exception_2 == null)) {
              this._this__u8e3s4__1.outgoingToBeProcessed_1.close_9zy44b_k$(this.exception_2);
              this._this__u8e3s4__1.filtered_1.close_9zy44b_k$(this.exception_2);
            }

            throw t;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $checkMaxFrameSizeCOROUTINE$2(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.packet_1 = packet;
    this.frame_1 = frame;
  }
  protoOf($checkMaxFrameSizeCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            var tmp_1 = this.frame_1.get_data_wokkxf_k$().length;
            var tmp0_safe_receiver = this.packet_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_size_woubt6_k$();
            tmp_0.size0__1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (toLong(this.size0__1).compareTo_n4fqi2_k$(this._this__u8e3s4__1.get_maxFrameSize_9zaht9_k$()) > 0) {
              var tmp2_safe_receiver = this.packet_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.release_wtm6d2_k$();
              }
              this.set_state_a96kl8_k$(2);
              suspendResult = close(this._this__u8e3s4__1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.size0__1 + '. Max size is ' + toString(this._this__u8e3s4__1.get_maxFrameSize_9zaht9_k$())), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            break;
          case 1:
            return Unit_getInstance();
          case 2:
            throw new FrameTooBigException(toLong(this.size0__1));
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function DefaultWebSocketSessionImpl(raw, pingInterval, timeoutMillis) {
    Companion_getInstance_0();
    this.raw_1 = raw;
    this.pinger_1 = atomic$ref$1(null);
    this.closeReasonRef_1 = CompletableDeferred();
    this.filtered_1 = Channel(8);
    this.outgoingToBeProcessed_1 = Channel(8);
    this.closed_1 = atomic$boolean$1(false);
    this.context_1 = Job(this.raw_1.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance()));
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp._extensions_1 = tmp$ret$0;
    this.started_1 = atomic$boolean$1(false);
    this.coroutineContext_1 = this.raw_1.get_coroutineContext_115oqo_k$().plus_rgw9wi_k$(this.context_1).plus_rgw9wi_k$(new CoroutineName('ws-default'));
    this.pingIntervalMillis_1 = pingInterval;
    this.timeoutMillis_1 = timeoutMillis;
    this.closeReason_1 = this.closeReasonRef_1;
  }
  protoOf(DefaultWebSocketSessionImpl).get_incoming_u9os29_k$ = function () {
    return this.filtered_1;
  };
  protoOf(DefaultWebSocketSessionImpl).get_outgoing_us7o3v_k$ = function () {
    return this.outgoingToBeProcessed_1;
  };
  protoOf(DefaultWebSocketSessionImpl).get_extensions_kxksyl_k$ = function () {
    return this._extensions_1;
  };
  protoOf(DefaultWebSocketSessionImpl).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(DefaultWebSocketSessionImpl).set_masking_ystj9s_k$ = function (value) {
    this.raw_1.set_masking_ystj9s_k$(value);
  };
  protoOf(DefaultWebSocketSessionImpl).get_masking_f5rvkd_k$ = function () {
    return this.raw_1.get_masking_f5rvkd_k$();
  };
  protoOf(DefaultWebSocketSessionImpl).set_maxFrameSize_b0eezk_k$ = function (value) {
    this.raw_1.set_maxFrameSize_b0eezk_k$(value);
  };
  protoOf(DefaultWebSocketSessionImpl).get_maxFrameSize_9zaht9_k$ = function () {
    return this.raw_1.get_maxFrameSize_9zaht9_k$();
  };
  protoOf(DefaultWebSocketSessionImpl).set_pingIntervalMillis_ii9r6b_k$ = function (newValue) {
    this.pingIntervalMillis_1 = newValue;
    runOrCancelPinger(this);
  };
  protoOf(DefaultWebSocketSessionImpl).get_pingIntervalMillis_4y22i_k$ = function () {
    return this.pingIntervalMillis_1;
  };
  protoOf(DefaultWebSocketSessionImpl).set_timeoutMillis_5bgqir_k$ = function (newValue) {
    this.timeoutMillis_1 = newValue;
    runOrCancelPinger(this);
  };
  protoOf(DefaultWebSocketSessionImpl).get_timeoutMillis_ig3vfi_k$ = function () {
    return this.timeoutMillis_1;
  };
  protoOf(DefaultWebSocketSessionImpl).get_closeReason_g1m41f_k$ = function () {
    return this.closeReason_1;
  };
  protoOf(DefaultWebSocketSessionImpl).start_x95223_k$ = function (negotiatedExtensions) {
    if (!this.started_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'WebSocket session ' + this + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    get_LOGGER().trace_jqeghf_k$('Starting default WebSocketSession(' + this + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions)));
    this._extensions_1.addAll_oxxjjk_k$(negotiatedExtensions);
    runOrCancelPinger(this);
    runIncomingProcessor(this, ponger(this, this.get_outgoing_us7o3v_k$()));
    runOutgoingProcessor(this);
  };
  protoOf(DefaultWebSocketSessionImpl).goingAway_xmisqc_k$ = function (message, $completion) {
    var tmp0 = sendCloseSequence$default(this, CloseReason_init_$Create$(Codes_GOING_AWAY_getInstance(), message), VOID, $completion);
    return tmp0;
  };
  protoOf(DefaultWebSocketSessionImpl).goingAway$default_uxz6k9_k$ = function (message, $completion, $super) {
    message = message === VOID ? 'Server is going down' : message;
    return $super === VOID ? this.goingAway_xmisqc_k$(message, $completion) : $super.goingAway_xmisqc_k$.call(this, message, $completion);
  };
  protoOf(DefaultWebSocketSessionImpl).flush_p85oz5_k$ = function ($completion) {
    var tmp0 = this.raw_1.flush_p85oz5_k$($completion);
    return tmp0;
  };
  protoOf(DefaultWebSocketSessionImpl).terminate_hmv27k_k$ = function () {
    this.context_1.cancel$default_64jlsz_k$();
    cancel(this.raw_1);
  };
  var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
  function _init_properties_DefaultWebSocketSession_kt__469s0y() {
    if (properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
    } else {
      properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
      LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
      IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
      OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
      NORMAL_CLOSE = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), 'OK');
    }
  }
  function readReason(_this__u8e3s4) {
    if (_this__u8e3s4.get_data_wokkxf_k$().length < 2) {
      return null;
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.readReason.<anonymous>' call
        writeFully(builder, _this__u8e3s4.get_data_wokkxf_k$());
        tmp$ret$0 = builder.build_1k0s4u_k$();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.release_wtm6d2_k$();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    var packet = tmp$ret$0;
    var code = readShort(packet);
    var message = packet.readText$default_z6dvkm_k$();
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).dispose_3n44we_k$ = function () {
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function readText(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    var tmp0_require = _this__u8e3s4.get_fin_18j5um_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.readText.<anonymous>' call
      tmp$ret$0 = 'Text could be only extracted from non-fragmented frame';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = Charsets_getInstance().get_UTF_8_ihn39z_k$().newDecoder_zcettw_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.readText.<anonymous>' call
        writeFully(builder, _this__u8e3s4.get_data_wokkxf_k$());
        tmp$ret$1 = builder.build_1k0s4u_k$();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.release_wtm6d2_k$();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return decode(tmp, tmp$ret$1);
  }
  function FrameTooBigException(frameSize) {
    Exception_init_$Init$(this);
    captureStack(this, FrameTooBigException);
    this.frameSize_1 = frameSize;
  }
  protoOf(FrameTooBigException).get_frameSize_hj23j9_k$ = function () {
    return this.frameSize_1;
  };
  protoOf(FrameTooBigException).get_message_h23axq_k$ = function () {
    return 'Frame is too big: ' + toString(this.frameSize_1);
  };
  protoOf(FrameTooBigException).createCopy_mmw9ld_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new FrameTooBigException(this.frameSize_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.websocket.FrameTooBigException.createCopy.<anonymous>' call
    initCauseBridge(tmp0_also, this);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.get_message_h23axq_k$();
  });
  function _get_maxOpcode__n4u3i9($this) {
    return $this.maxOpcode_1;
  }
  function _get_byOpcodeArray__zfogar($this) {
    return $this.byOpcodeArray_1;
  }
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var tmp0_maxByOrNull = values_0();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = tmp0_maxByOrNull.length === 0;
      if (tmp$ret$0) {
        tmp$ret$1 = null;
        break $l$block_0;
      }
      var maxElem = tmp0_maxByOrNull[0];
      var lastIndex = get_lastIndex(tmp0_maxByOrNull);
      if (lastIndex === 0) {
        tmp$ret$1 = maxElem;
        break $l$block_0;
      }
      var tmp$ret$2;
      // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
      var tmp1__anonymous__uwfjfc = maxElem;
      tmp$ret$2 = tmp1__anonymous__uwfjfc.opcode_1;
      var maxValue = tmp$ret$2;
      var inductionVariable = 1;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var e = tmp0_maxByOrNull[i];
          var tmp$ret$3;
          // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
          tmp$ret$3 = e.opcode_1;
          var v = tmp$ret$3;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === lastIndex));
      tmp$ret$1 = maxElem;
    }
    tmp.maxOpcode_1 = ensureNotNull(tmp$ret$1).opcode_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.maxOpcode_1 + 1 | 0;
    var tmp$ret$4;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$4 = fillArrayVal(Array(tmp_2), null);
    var tmp_3 = tmp$ret$4;
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$7;
      // Inline function 'io.ktor.websocket.Companion.byOpcodeArray.<anonymous>' call
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var tmp0_singleOrNull = values_0();
        var single = null;
        var found = false;
        var indexedObject = tmp0_singleOrNull;
        var inductionVariable_0 = 0;
        var last = indexedObject.length;
        while (inductionVariable_0 < last) {
          var element = indexedObject[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp$ret$5;
          // Inline function 'io.ktor.websocket.Companion.byOpcodeArray.<anonymous>' call
          tmp$ret$5 = element.opcode_1 === tmp_4;
          if (tmp$ret$5) {
            if (found) {
              tmp$ret$6 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$6 = null;
          break $l$block_2;
        }
        tmp$ret$6 = single;
      }
      tmp$ret$7 = tmp$ret$6;
      tmp_3[tmp_4] = tmp$ret$7;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.byOpcodeArray_1 = tmp_3;
  }
  protoOf(Companion_1).get_fkrdnv_k$ = function (opcode) {
    return (0 <= opcode ? opcode <= this.maxOpcode_1 : false) ? this.byOpcodeArray_1[opcode] : null;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    FrameType_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TEXT':
        return FrameType_TEXT_getInstance();
      case 'BINARY':
        return FrameType_BINARY_getInstance();
      case 'CLOSE':
        return FrameType_CLOSE_getInstance();
      case 'PING':
        return FrameType_PING_getInstance();
      case 'PONG':
        return FrameType_PONG_getInstance();
      default:
        FrameType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_getInstance();
    FrameType_entriesInitialized = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    Companion_getInstance_1();
  }
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.controlFrame_1 = controlFrame;
    this.opcode_1 = opcode;
  }
  protoOf(FrameType).get_controlFrame_mohuav_k$ = function () {
    return this.controlFrame_1;
  };
  protoOf(FrameType).get_opcode_hp2o9j_k$ = function () {
    return this.opcode_1;
  };
  function FrameType_TEXT_getInstance() {
    FrameType_initEntries();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    FrameType_initEntries();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    FrameType_initEntries();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    FrameType_initEntries();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    FrameType_initEntries();
    return FrameType_PONG_instance;
  }
  function get_PongerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PongerCoroutineName;
  }
  var PongerCoroutineName;
  function get_PingerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PingerCoroutineName;
  }
  var PingerCoroutineName;
  function ponger(_this__u8e3s4, outgoing) {
    _init_properties_PingPong_kt__9aqxey();
    var channel = Channel(5);
    var tmp = get_PongerCoroutineName();
    launch(_this__u8e3s4, tmp, VOID, ponger$slambda_0(channel, outgoing, null));
    return channel;
  }
  function pinger(_this__u8e3s4, outgoing, periodMillis, timeoutMillis, onTimeout) {
    _init_properties_PingPong_kt__9aqxey();
    var actorJob = Job();
    var channel = Channel(Factory_getInstance().get_UNLIMITED_eshsm0_k$());
    var tmp = actorJob.plus_rgw9wi_k$(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance()));
    tmp_0.invokeOnCompletion_t2apld_k$(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.$channel_1 = $channel;
    this.$outgoing_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ponger$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ponger$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(14);
            this.set_exceptionState_s9sevl_k$(13);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.cause1__1 = null;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(10);
            this.set_exceptionState_s9sevl_k$(9);
            this.tmp0_iterator4__1 = this.$channel_1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
            suspendResult = this.tmp0_iterator4__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.set_state_a96kl8_k$(7);
              continue $sm;
            }

            this.e5__1 = this.tmp0_iterator4__1.next_20eer_k$();
            get_LOGGER().trace_jqeghf_k$('Received ping message, sending pong message');
            this.set_state_a96kl8_k$(6);
            suspendResult = this.$outgoing_1.send_4idxxh_k$(new Pong(this.e5__1.get_data_wokkxf_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 7:
            this.tmp$ret$03__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(8);
            var tmp_0 = this;
            continue $sm;
          case 8:
            var tmp_1 = this;
            cancelConsumed(this.$channel_1, this.cause1__1);
            tmp_1.tmp$ret$40__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 9:
            this.set_exceptionState_s9sevl_k$(10);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              this.cause1__1 = e;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 10:
            this.set_exceptionState_s9sevl_k$(13);
            var t = this.get_exception_x0n6w6_k$();
            cancelConsumed(this.$channel_1, this.cause1__1);
            ;
            throw t;
          case 11:
            cancelConsumed(this.$channel_1, this.cause1__1);
            ;
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 12:
            this.set_exceptionState_s9sevl_k$(14);
            this.set_state_a96kl8_k$(15);
            continue $sm;
          case 13:
            this.set_exceptionState_s9sevl_k$(14);
            var tmp_4 = this.get_exception_x0n6w6_k$();
            if (tmp_4 instanceof ClosedSendChannelException) {
              var _ = this.get_exception_x0n6w6_k$();
              this.set_state_a96kl8_k$(15);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 14:
            throw this.get_exception_x0n6w6_k$();
          case 15:
            this.set_exceptionState_s9sevl_k$(14);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 14) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(ponger$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new ponger$slambda(this.$channel_1, this.$outgoing_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ponger$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.$channel_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).invoke_d6gbsu_k$ = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.create_b6qu53_k$($this$withTimeoutOrNull, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(pinger$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this.$channel_1.receive_ihhf9g_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda).create_b6qu53_k$ = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.$channel_1, completion);
    i.$this$withTimeoutOrNull_1 = $this$withTimeoutOrNull;
    return i;
  };
  protoOf(pinger$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.invoke_d6gbsu_k$($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.$outgoing_1 = $outgoing;
    this.$pingMessage_1 = $pingMessage;
    this.$channel_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).invoke_d6gbsu_k$ = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.create_b6qu53_k$($this$withTimeoutOrNull, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(pinger$slambda$slambda_1).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            get_LOGGER().trace_jqeghf_k$('WebSocket Pinger: sending ping frame');
            this.set_state_a96kl8_k$(1);
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_toByteArray = Charsets_getInstance().get_ISO_8859_1_y3qebr_k$();
              if (tmp0_toByteArray.equals(Charsets_getInstance().get_UTF_8_ihn39z_k$())) {
                tmp$ret$0 = encodeToByteArray(this.$pingMessage_1);
                break l$ret$1;
              }
              tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.newEncoder_gqwcdg_k$(), this.$pingMessage_1, 0, this.$pingMessage_1.length);
            }
             while (false);
            suspendResult = this.$outgoing_1.send_4idxxh_k$(new Ping(tmp$ret$0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            suspendResult = this.$channel_1.receive_ihhf9g_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var msg = suspendResult;
            if (String_0(msg.get_data_wokkxf_k$(), VOID, VOID, Charsets_getInstance().get_ISO_8859_1_y3qebr_k$()) === this.$pingMessage_1) {
              get_LOGGER().trace_jqeghf_k$('WebSocket Pinger: received valid pong frame ' + msg);
              this.set_state_a96kl8_k$(5);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            break;
          case 4:
            get_LOGGER().trace_jqeghf_k$('WebSocket Pinger: received invalid pong frame ' + msg + ', continue waiting');
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda_1).create_b6qu53_k$ = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.$outgoing_1, this.$pingMessage_1, this.$channel_1, completion);
    i.$this$withTimeoutOrNull_1 = $this$withTimeoutOrNull;
    return i;
  };
  protoOf(pinger$slambda$slambda_1).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.invoke_d6gbsu_k$($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.$periodMillis_1 = $periodMillis;
    this.$timeoutMillis_1 = $timeoutMillis;
    this.$onTimeout_1 = $onTimeout;
    this.$channel_1 = $channel;
    this.$outgoing_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(pinger$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(9);
            get_LOGGER().trace_jqeghf_k$('Starting WebSocket pinger coroutine with period ' + toString(this.$periodMillis_1) + ' ms and timeout ' + toString(this.$timeoutMillis_1) + ' ms');
            this.random0__1 = Random(getTimeMillis());
            this.pingIdBytes1__1 = new Int8Array(32);
            this.set_exceptionState_s9sevl_k$(7);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = withTimeoutOrNull(this.$periodMillis_1, pinger$slambda$slambda_0(this.$channel_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            this.random0__1.nextBytes_7yvat1_k$(this.pingIdBytes1__1);
            ;
            this.pingMessage2__1 = '[ping ' + hex(this.pingIdBytes1__1) + ' ping]';
            this.set_state_a96kl8_k$(3);
            suspendResult = withTimeoutOrNull(this.$timeoutMillis_1, pinger$slambda$slambda_2(this.$outgoing_1, this.pingMessage2__1, this.$channel_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.rc3__1 = suspendResult;
            get_LOGGER().trace_jqeghf_k$('WebSocket pinger has timed out');
            if (this.rc3__1 == null) {
              this.set_state_a96kl8_k$(5);
              suspendResult = this.$onTimeout_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            break;
          case 4:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 5:
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 7:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.get_exception_x0n6w6_k$();
              this.set_state_a96kl8_k$(8);
              continue $sm;
            } else {
              var tmp_1 = this.get_exception_x0n6w6_k$();
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.get_exception_x0n6w6_k$();
                this.set_state_a96kl8_k$(8);
                continue $sm;
              } else {
                var tmp_2 = this.get_exception_x0n6w6_k$();
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.get_exception_x0n6w6_k$();
                  this.set_state_a96kl8_k$(8);
                  continue $sm;
                } else {
                  throw this.get_exception_x0n6w6_k$();
                }
              }
            }

            break;
          case 8:
            this.set_exceptionState_s9sevl_k$(9);
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(pinger$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new pinger$slambda(this.$periodMillis_1, this.$timeoutMillis_1, this.$onTimeout_1, this.$channel_1, this.$outgoing_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(pinger$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.cancel$default_64jlsz_k$();
      return Unit_getInstance();
    };
  }
  var properties_initialized_PingPong_kt_fbfhmc;
  function _init_properties_PingPong_kt__9aqxey() {
    if (properties_initialized_PingPong_kt_fbfhmc) {
    } else {
      properties_initialized_PingPong_kt_fbfhmc = true;
      PongerCoroutineName = new CoroutineName('ws-ponger');
      PingerCoroutineName = new CoroutineName('ws-pinger');
    }
  }
  function WebSocketExtension() {
  }
  function WebSocketExtensionFactory() {
  }
  function _get_installers__49gav4($this) {
    return $this.installers_1;
  }
  function _get_rcv__e6fwlo($this) {
    return $this.rcv_1;
  }
  function checkConflicts($this, extensionFactory) {
    var hasConflict = extensionFactory.get_rsv1_wotw3p_k$() ? $this.rcv_1[1] : false;
    hasConflict = hasConflict ? true : extensionFactory.get_rsv2_wotw3q_k$() ? $this.rcv_1[2] : false;
    hasConflict = hasConflict ? true : extensionFactory.get_rsv3_wotw3r_k$() ? $this.rcv_1[3] : false;
    // Inline function 'kotlin.check' call
    var tmp0_check = !hasConflict;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.WebSocketExtensionsConfig.checkConflicts.<anonymous>' call
      tmp$ret$0 = 'Failed to install extension. Please check configured extensions for conflicts.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function WebSocketExtensionsConfig$install$lambda($this$null) {
    return Unit_getInstance();
  }
  function WebSocketExtensionsConfig$install$lambda_0($extension, $config) {
    return function () {
      return $extension.install_ivb7e7_k$($config);
    };
  }
  function WebSocketExtensionsConfig() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.installers_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = [false, false, false];
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp_0.rcv_1 = tmp$ret$3;
  }
  protoOf(WebSocketExtensionsConfig).install_fqy69n_k$ = function (extension, config) {
    checkConflicts(this, extension);
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.installers_1;
    tmp0_plusAssign.add_1j60pz_k$(WebSocketExtensionsConfig$install$lambda_0(extension, config));
  };
  protoOf(WebSocketExtensionsConfig).install$default_j32zd1_k$ = function (extension, config, $super) {
    var tmp;
    if (config === VOID) {
      tmp = WebSocketExtensionsConfig$install$lambda;
    } else {
      tmp = config;
    }
    config = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.install_fqy69n_k$(extension, config);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.install_fqy69n_k$.call(this, extension, config);
    }
    return tmp_0;
  };
  protoOf(WebSocketExtensionsConfig).build_1k0s4u_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.installers_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.WebSocketExtensionsConfig.build.<anonymous>' call
      tmp$ret$0 = item();
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  function parametersToString($this) {
    return $this.parameters_1.isEmpty_y1axqb_k$() ? '' : ', ' + joinToString($this.parameters_1, ',');
  }
  function WebSocketExtensionHeader$parseParameters$lambda(it) {
    var equalsIndex = indexOf(it, _Char___init__impl__6a9atx(61));
    if (equalsIndex < 0)
      return to(it, '');
    var key = substring(it, until(0, equalsIndex));
    var tmp;
    if ((equalsIndex + 1 | 0) < it.length) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = equalsIndex + 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = it;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring);
      tmp = tmp$ret$1;
    } else {
      tmp = '';
    }
    var value = tmp;
    return to(key, value);
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.name_1 = name;
    this.parameters_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(WebSocketExtensionHeader).get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  protoOf(WebSocketExtensionHeader).parseParameters_8pxmv7_k$ = function () {
    var tmp = asSequence(this.parameters_1);
    return map(tmp, WebSocketExtensionHeader$parseParameters$lambda);
  };
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.name_1 + ' ' + parametersToString(this);
  };
  function parseWebSocketExtensions(value) {
    var tmp$ret$7;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = split(value, [',']);
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$5;
      // Inline function 'io.ktor.websocket.parseWebSocketExtensions.<anonymous>' call
      var extension = split(item, [';']);
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      var tmp0_trim = first(extension);
      tmp$ret$0 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
      var name = tmp$ret$0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp2_map = drop(extension, 1);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp1_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
      var tmp0_iterator_0 = tmp2_map.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'io.ktor.websocket.parseWebSocketExtensions.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.text.trim' call
        tmp$ret$1 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        tmp$ret$2 = tmp$ret$1;
        tmp1_mapTo.add_1j60pz_k$(tmp$ret$2);
      }
      tmp$ret$3 = tmp1_mapTo;
      tmp$ret$4 = tmp$ret$3;
      var parameters = tmp$ret$4;
      tmp$ret$5 = new WebSocketExtensionHeader(name, parameters);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$5);
    }
    tmp$ret$6 = tmp0_mapTo;
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  }
  function WebSocketSession() {
  }
  function close(_this__u8e3s4, reason, $completion) {
    reason = reason === VOID ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : reason;
    var tmp = new $closeCOROUTINE$3(_this__u8e3s4, reason, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function closeExceptionally(_this__u8e3s4, cause, $completion) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject instanceof CancellationException) {
      tmp = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    } else {
      tmp = CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), cause.toString());
    }
    var reason = tmp;
    var tmp0 = close(_this__u8e3s4, reason, $completion);
    return tmp0;
  }
  function $closeCOROUTINE$3(_this__u8e3s4, reason, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.reason_1 = reason;
  }
  protoOf($closeCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.send_xu75tq_k$(Close_init_$Create$(this.reason_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.flush_p85oz5_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var _ = this.get_exception_x0n6w6_k$();
              this.set_state_a96kl8_k$(5);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            this.set_exceptionState_s9sevl_k$(4);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function Binary_init_$Init$(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$(fin, data) {
    return Binary_init_$Init$(fin, data, objectCreate(protoOf(Binary)));
  }
  function Binary_init_$Init$_0(fin, packet, $this) {
    Binary_init_$Init$(fin, readBytes(packet), $this);
    return $this;
  }
  function Binary_init_$Create$_0(fin, packet) {
    return Binary_init_$Init$_0(fin, packet, objectCreate(protoOf(Binary)));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Create$(fin, data) {
    return Text_init_$Init$(fin, data, objectCreate(protoOf(Text)));
  }
  function Text_init_$Init$_0(text, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var tmp0_toByteArray = Charsets_getInstance().get_UTF_8_ihn39z_k$();
      if (tmp0_toByteArray.equals(Charsets_getInstance().get_UTF_8_ihn39z_k$())) {
        tmp$ret$0 = encodeToByteArray(text);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.newEncoder_gqwcdg_k$(), text, 0, text.length);
    }
    Text_init_$Init$(true, tmp$ret$0, $this);
    return $this;
  }
  function Text_init_$Create$_0(text) {
    return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
  }
  function Text_init_$Init$_1(fin, packet, $this) {
    Text_init_$Init$(fin, readBytes(packet), $this);
    return $this;
  }
  function Text_init_$Create$_1(fin, packet) {
    return Text_init_$Init$_1(fin, packet, objectCreate(protoOf(Text)));
  }
  function Close_init_$Init$(reason, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.Close.<init>.<anonymous>' call
        writeShort(builder, reason.get_code_wok7xy_k$());
        writeText(builder, reason.get_message_h23axq_k$());
        tmp$ret$0 = builder.build_1k0s4u_k$();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.release_wtm6d2_k$();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    Close_init_$Init$_0(tmp$ret$0, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, objectCreate(protoOf(Close)));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readBytes(packet));
    return $this;
  }
  function Close_init_$Create$_0(packet) {
    return Close_init_$Init$_0(packet, objectCreate(protoOf(Close)));
  }
  function Close_init_$Init$_1($this) {
    Close.call($this, Companion_getInstance_2().Empty_1);
    return $this;
  }
  function Close_init_$Create$_1() {
    return Close_init_$Init$_1(objectCreate(protoOf(Close)));
  }
  function Ping_init_$Init$(packet, $this) {
    Ping.call($this, readBytes(packet));
    return $this;
  }
  function Ping_init_$Create$(packet) {
    return Ping_init_$Init$(packet, objectCreate(protoOf(Ping)));
  }
  function Pong_init_$Init$(packet, $this) {
    Pong.call($this, readBytes(packet), NonDisposableHandle_getInstance());
    return $this;
  }
  function Pong_init_$Create$(packet) {
    return Pong_init_$Init$(packet, objectCreate(protoOf(Pong)));
  }
  function _get_Empty__x4mxmk($this) {
    return $this.Empty_1;
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  function Ping(data) {
    Frame.call(this, true, FrameType_PING_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  function Pong(data, disposableHandle) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_getInstance() : disposableHandle;
    Frame.call(this, true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Empty_1 = new Int8Array(0);
  }
  protoOf(Companion_2).byType_l553t_k$ = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp0_subject = frameType;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 1:
        tmp = new Binary(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = new Text(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = new Close(data);
        break;
      case 3:
        tmp = new Ping(data);
        break;
      case 4:
        tmp = new Pong(data, NonDisposableHandle_getInstance());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_2();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_getInstance() : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    this.fin_1 = fin;
    this.frameType_1 = frameType;
    this.data_1 = data;
    this.disposableHandle_1 = disposableHandle;
    this.rsv1__1 = rsv1;
    this.rsv2__1 = rsv2;
    this.rsv3__1 = rsv3;
  }
  protoOf(Frame).get_fin_18j5um_k$ = function () {
    return this.fin_1;
  };
  protoOf(Frame).get_frameType_hj325a_k$ = function () {
    return this.frameType_1;
  };
  protoOf(Frame).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(Frame).get_disposableHandle_9vd6rz_k$ = function () {
    return this.disposableHandle_1;
  };
  protoOf(Frame).get_rsv1_wotw3p_k$ = function () {
    return this.rsv1__1;
  };
  protoOf(Frame).get_rsv2_wotw3q_k$ = function () {
    return this.rsv2__1;
  };
  protoOf(Frame).get_rsv3_wotw3r_k$ = function () {
    return this.rsv3__1;
  };
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.frameType_1 + ' (fin=' + this.fin_1 + ', buffer len = ' + this.data_1.length + ')';
  };
  protoOf(Frame).copy_1tks5_k$ = function () {
    var tmp = Companion_getInstance_2();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.data_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp.byType_l553t_k$(this.fin_1, this.frameType_1, tmp$ret$1, this.rsv1__1, this.rsv2__1, this.rsv3__1);
  };
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).start$default_q9enfi_k$ = start$default;
  protoOf(DefaultWebSocketSessionImpl).send_xu75tq_k$ = send;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_INTERNAL_ERROR_getInstance;
  _.$_$.c = send;
  _.$_$.d = start$default;
  _.$_$.e = Binary_init_$Create$;
  _.$_$.f = Close_init_$Create$;
  _.$_$.g = Text_init_$Create$_0;
  _.$_$.h = Companion_getInstance;
  _.$_$.i = CloseReason;
  _.$_$.j = DefaultWebSocketSession_0;
  _.$_$.k = DefaultWebSocketSession;
  _.$_$.l = Text;
  _.$_$.m = WebSocketExtensionsConfig;
  _.$_$.n = WebSocketSession;
  _.$_$.o = parseWebSocketExtensions;
  _.$_$.p = readText;
  //endregion
  return _;
}));
