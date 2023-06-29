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
  var mapCapacity = kotlin_kotlin.$_$.f7;
  var coerceAtLeast = kotlin_kotlin.$_$.bb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var protoOf = kotlin_kotlin.$_$.sa;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var objectCreate = kotlin_kotlin.$_$.qa;
  var Enum = kotlin_kotlin.$_$.vd;
  var classMeta = kotlin_kotlin.$_$.k9;
  var toString = kotlin_kotlin.$_$.xa;
  var getStringHashCode = kotlin_kotlin.$_$.t9;
  var THROW_CCE = kotlin_kotlin.$_$.he;
  var interfaceMeta = kotlin_kotlin.$_$.v9;
  var Long = kotlin_kotlin.$_$.ae;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var isInterface = kotlin_kotlin.$_$.ea;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.i1;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.f1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.d;
  var CancellationException = kotlin_kotlin.$_$.k8;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var IOException_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.h;
  var toLong = kotlin_kotlin.$_$.va;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var joinToString = kotlin_kotlin.$_$.u6;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.l;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.j;
  var decode = kotlin_io_ktor_ktor_io.$_$.n;
  var readShort = kotlin_io_ktor_ktor_io.$_$.g1;
  var Exception = kotlin_kotlin.$_$.xd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.g1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var defineProp = kotlin_kotlin.$_$.m9;
  var get_lastIndex = kotlin_kotlin.$_$.z6;
  var compareTo = kotlin_kotlin.$_$.l9;
  var fillArrayVal = kotlin_kotlin.$_$.p9;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var encodeToByteArray = kotlin_kotlin.$_$.vb;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.o;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.z;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.k;
  var Random = kotlin_kotlin.$_$.za;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var hex = kotlin_io_ktor_ktor_utils.$_$.f1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var split = kotlin_kotlin.$_$.rc;
  var first = kotlin_kotlin.$_$.m6;
  var isCharSequence = kotlin_kotlin.$_$.aa;
  var trim = kotlin_kotlin.$_$.pd;
  var drop = kotlin_kotlin.$_$.e6;
  var writeShort = kotlin_io_ktor_ktor_io.$_$.j1;
  var writeText = kotlin_io_ktor_ktor_io.$_$.k1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ff;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Codes, 'Codes', classMeta, Enum);
  setMetadataFor(CloseReason, 'CloseReason', classMeta);
  function send(frame, $completion) {
    var tmp0 = this.l28().zx(frame, $completion);
    return tmp0;
  }
  setMetadataFor(WebSocketSession, 'WebSocketSession', interfaceMeta, VOID, [CoroutineScope], VOID, VOID, [1, 0]);
  setMetadataFor(DefaultWebSocketSession, 'DefaultWebSocketSession', interfaceMeta, VOID, [WebSocketSession], VOID, VOID, [1, 0]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, 'DefaultWebSocketSessionImpl$runIncomingProcessor$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, 'DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, 'DefaultWebSocketSessionImpl$runOrCancelPinger$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($outgoingProcessorLoopCOROUTINE$0, '$outgoingProcessorLoopCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($sendCloseSequenceCOROUTINE$1, '$sendCloseSequenceCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($checkMaxFrameSizeCOROUTINE$2, '$checkMaxFrameSizeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', classMeta, VOID, [DefaultWebSocketSession, WebSocketSession], VOID, VOID, [1, 0, 2]);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta);
  setMetadataFor(FrameTooBigException, 'FrameTooBigException', classMeta, Exception);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(FrameType, 'FrameType', classMeta, Enum);
  setMetadataFor(ponger$slambda, 'ponger$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(pinger$slambda$slambda, 'pinger$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(pinger$slambda$slambda_1, 'pinger$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(pinger$slambda, 'pinger$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
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
      tmp$ret$0 = element.a28_1;
      tmp0_associateByTo.y2(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.b28_1 = tmp$ret$2;
    this.c28_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).d28 = function (code) {
    return this.b28_1.y1(code);
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
    CloseReason.call($this, code.a28_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.a28_1 = code;
  }
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
    this.e28_1 = code;
    this.f28_1 = message;
  }
  protoOf(CloseReason).g28 = function () {
    return Companion_getInstance().d28(this.e28_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.g28();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.e28_1 : tmp0_elvis_lhs) + ', message=' + this.f28_1 + ')';
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.e28_1;
    result = imul(result, 31) + getStringHashCode(this.f28_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    var tmp0_other_with_cast = other instanceof CloseReason ? other : THROW_CCE();
    if (!(this.e28_1 === tmp0_other_with_cast.e28_1))
      return false;
    if (!(this.f28_1 === tmp0_other_with_cast.f28_1))
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
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().h4(Dispatchers_getInstance().kp_1);
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().h4(Dispatchers_getInstance().kp_1);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $completion) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$0($this, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function sendCloseSequence($this, reason, exception, $completion) {
    var tmp = new $sendCloseSequenceCOROUTINE$1($this, reason, exception, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function sendCloseSequence$default($this, reason, exception, $completion, $super) {
    exception = exception === VOID ? null : exception;
    return sendCloseSequence($this, reason, exception, $completion);
  }
  function tryClose($this) {
    return $this.u29_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.z29_1;
    var tmp;
    if ($this.u29_1.kotlinx$atomicfu$value) {
      tmp = null;
    } else if (interval.u(new Long(0, 0)) > 0) {
      var tmp_0 = $this.p29_1.l28();
      var tmp_1 = $this.a2a_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.q29_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.cy();
    var tmp1_safe_receiver = newPinger;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : new ChannelResult(tmp1_safe_receiver.ay(Companion_getInstance_0().c2a_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.iz_1);
    if ($this.u29_1.kotlinx$atomicfu$value ? !(newPinger == null) : false) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $completion) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$2($this, packet, frame, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function processIncomingExtensions($this, frame) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = $this.p2a();
    var accumulator = frame;
    var tmp0_iterator = tmp0_fold.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.DefaultWebSocketSessionImpl.processIncomingExtensions.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.q2a(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  }
  function processOutgoingExtensions($this, frame) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = $this.p2a();
    var accumulator = frame;
    var tmp0_iterator = tmp0_fold.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.DefaultWebSocketSessionImpl.processOutgoingExtensions.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = element.r2a(tmp1__anonymous__uwfjfc);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.c2a_1 = new Pong(new Int8Array(0), NonDisposableHandle_getInstance());
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.a2b_1 = this$0;
    this.b2b_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).f1e = function ($this$launch, $completion) {
    var tmp = this.g1e($this$launch, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).si = function (p1, $completion) {
    return this.f1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 37;
            this.d2b_1 = null;
            this.e2b_1 = false;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            this.xh_1 = 2;
            continue $sm;
          case 2:
            this.yh_1 = 31;
            this.yh_1 = 30;
            var tmp_0 = this;
            tmp_0.h2b_1 = this.a2b_1.p29_1.k28();
            this.xh_1 = 3;
            continue $sm;
          case 3:
            this.j2b_1 = null;
            this.xh_1 = 4;
            continue $sm;
          case 4:
            this.xh_1 = 5;
            continue $sm;
          case 5:
            this.xh_1 = 6;
            continue $sm;
          case 6:
            this.yh_1 = 27;
            this.yh_1 = 26;
            this.m2b_1 = this.h2b_1.f();
            this.xh_1 = 7;
            continue $sm;
          case 7:
            this.xh_1 = 8;
            suspendResult = this.m2b_1.ew(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.xh_1 = 24;
              continue $sm;
            }

            this.n2b_1 = this.m2b_1.h();
            this.xh_1 = 9;
            continue $sm;
          case 9:
            get_LOGGER().k1t('WebSocketSession(' + this.c2b_1 + ') receiving frame ' + this.n2b_1);
            this.p2b_1 = this.n2b_1;
            var tmp_1 = this.p2b_1;
            if (tmp_1 instanceof Close) {
              if (!this.a2b_1.l28().yx()) {
                this.xh_1 = 18;
                var tmp_2 = this.a2b_1.l28();
                var tmp1_elvis_lhs = readReason(this.n2b_1);
                suspendResult = tmp_2.zx(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.xh_1 = 19;
                continue $sm;
              }
            } else {
              var tmp_3 = this.p2b_1;
              if (tmp_3 instanceof Pong) {
                this.q2b_1 = this.a2b_1.q29_1.kotlinx$atomicfu$value;
                if (this.q2b_1 == null) {
                  this.r2b_1 = null;
                  this.xh_1 = 15;
                  continue $sm;
                } else {
                  this.xh_1 = 14;
                  suspendResult = this.q2b_1.zx(this.n2b_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                var tmp_4 = this.p2b_1;
                if (tmp_4 instanceof Ping) {
                  this.xh_1 = 13;
                  suspendResult = this.b2b_1.zx(this.n2b_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.xh_1 = 10;
                  suspendResult = checkMaxFrameSize(this.a2b_1, this.d2b_1, this.n2b_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

            break;
          case 10:
            if (!this.n2b_1.y2b_1) {
              if (this.d2b_1 == null) {
                this.d2b_1 = new BytePacketBuilder();
              }
              writeFully(ensureNotNull(this.d2b_1), this.n2b_1.a2c_1);
              this.o2b_1 = Unit_getInstance();
              this.xh_1 = 17;
              continue $sm;
            } else {
              this.xh_1 = 11;
              continue $sm;
            }

            break;
          case 11:
            var tmp_5 = this;
            var tmp3_safe_receiver = this.d2b_1;
            var tmp_6;
            if (tmp3_safe_receiver == null) {
              tmp_6 = null;
            } else {
              writeFully(tmp3_safe_receiver, this.n2b_1.a2c_1);
              tmp_6 = Companion_getInstance_2().g2c(true, this.n2b_1.z2b_1, readBytes(tmp3_safe_receiver.u1a()), this.n2b_1.c2c_1, this.n2b_1.d2c_1, this.n2b_1.e2c_1);
            }

            var tmp4_elvis_lhs = tmp_6;
            tmp_5.s2b_1 = tmp4_elvis_lhs == null ? this.n2b_1 : tmp4_elvis_lhs;
            this.d2b_1 = null;
            this.xh_1 = 12;
            suspendResult = this.a2b_1.s29_1.zx(processIncomingExtensions(this.a2b_1, this.s2b_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            this.xh_1 = 16;
            continue $sm;
          case 13:
            this.xh_1 = 16;
            continue $sm;
          case 14:
            var tmp_7 = this;
            tmp_7.r2b_1 = Unit_getInstance();
            this.xh_1 = 15;
            continue $sm;
          case 15:
            ;
            this.xh_1 = 16;
            continue $sm;
          case 16:
            if (false) {
              this.xh_1 = 9;
              continue $sm;
            }

            this.xh_1 = 17;
            continue $sm;
          case 17:
            this.xh_1 = 7;
            continue $sm;
          case 18:
            this.xh_1 = 19;
            continue $sm;
          case 19:
            this.e2b_1 = true;
            this.l2b_1 = Unit_getInstance();
            this.xh_1 = 20;
            continue $sm;
          case 20:
            var tmp_8 = this;
            cancelConsumed(this.h2b_1, this.j2b_1);
            tmp_8.g2b_1 = Unit_getInstance();
            this.yh_1 = 37;
            this.xh_1 = 21;
            continue $sm;
          case 21:
            this.b2b_1.cy();
            ;
            var tmp0_safe_receiver = this.d2b_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.fp();
            }

            ;
            this.a2b_1.s29_1.cy();
            ;
            if (!this.e2b_1) {
              this.xh_1 = 22;
              suspendResult = close(this.a2b_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 23;
              continue $sm;
            }

            break;
          case 22:
            this.xh_1 = 23;
            continue $sm;
          case 23:
            return Unit_getInstance();
          case 24:
            this.k2b_1 = Unit_getInstance();
            this.xh_1 = 25;
            var tmp_9 = this;
            continue $sm;
          case 25:
            var tmp_10 = this;
            cancelConsumed(this.h2b_1, this.j2b_1);
            tmp_10.i2b_1 = Unit_getInstance();
            this.xh_1 = 29;
            continue $sm;
          case 26:
            this.yh_1 = 27;
            var tmp_11 = this.ai_1;
            if (tmp_11 instanceof Error) {
              this.t2b_1 = this.ai_1;
              var tmp_12 = this;
              this.j2b_1 = this.t2b_1;
              throw this.t2b_1;
            } else {
              throw this.ai_1;
            }

            break;
          case 27:
            this.yh_1 = 30;
            this.u2b_1 = this.ai_1;
            cancelConsumed(this.h2b_1, this.j2b_1);
            ;
            throw this.u2b_1;
          case 28:
            cancelConsumed(this.h2b_1, this.j2b_1);
            ;
            if (false) {
              this.xh_1 = 3;
              continue $sm;
            }

            this.xh_1 = 29;
            continue $sm;
          case 29:
            this.f2b_1 = this.i2b_1;
            this.yh_1 = 37;
            this.xh_1 = 34;
            continue $sm;
          case 30:
            this.yh_1 = 31;
            var tmp_13 = this.ai_1;
            if (tmp_13 instanceof ClosedSendChannelException) {
              this.v2b_1 = this.ai_1;
              var tmp_14 = this;
              tmp_14.f2b_1 = Unit_getInstance();
              this.yh_1 = 37;
              this.xh_1 = 34;
              continue $sm;
            } else {
              var tmp_15 = this.ai_1;
              if (tmp_15 instanceof Error) {
                this.w2b_1 = this.ai_1;
                var tmp_16 = this;
                this.b2b_1.cy();
                this.a2b_1.s29_1.px(this.w2b_1);
                tmp_16.f2b_1 = Unit_getInstance();
                this.yh_1 = 37;
                this.xh_1 = 34;
                continue $sm;
              } else {
                throw this.ai_1;
              }
            }

            break;
          case 31:
            this.yh_1 = 37;
            this.x2b_1 = this.ai_1;
            this.b2b_1.cy();
            ;
            var tmp0_safe_receiver_0 = this.d2b_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.fp();
            }

            ;
            this.a2b_1.s29_1.cy();
            ;
            if (!this.e2b_1) {
              this.xh_1 = 32;
              suspendResult = close(this.a2b_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 33;
              continue $sm;
            }

            break;
          case 32:
            this.xh_1 = 33;
            continue $sm;
          case 33:
            throw this.x2b_1;
          case 34:
            this.b2b_1.cy();
            ;
            var tmp0_safe_receiver_1 = this.d2b_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.fp();
            }

            ;
            this.a2b_1.s29_1.cy();
            ;
            if (!this.e2b_1) {
              this.xh_1 = 35;
              suspendResult = close(this.a2b_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 36;
              continue $sm;
            }

            break;
          case 35:
            this.xh_1 = 36;
            continue $sm;
          case 36:
            return Unit_getInstance();
          case 37:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 37) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).g1e = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.a2b_1, this.b2b_1, completion);
    i.c2b_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.f1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.p2c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).f1e = function ($this$launch, $completion) {
    var tmp = this.g1e($this$launch, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).si = function (p1, $completion) {
    return this.f1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 9;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            this.yh_1 = 5;
            this.yh_1 = 3;
            this.xh_1 = 2;
            suspendResult = outgoingProcessorLoop(this.p2c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r2c_1 = suspendResult;
            this.yh_1 = 9;
            this.xh_1 = 7;
            continue $sm;
          case 3:
            this.yh_1 = 5;
            var tmp_0 = this.ai_1;
            if (tmp_0 instanceof ClosedSendChannelException) {
              this.s2c_1 = this.ai_1;
              var tmp_1 = this;
              tmp_1.r2c_1 = Unit_getInstance();
              this.yh_1 = 9;
              this.xh_1 = 7;
              continue $sm;
            } else {
              var tmp_2 = this.ai_1;
              if (tmp_2 instanceof ClosedReceiveChannelException) {
                this.t2c_1 = this.ai_1;
                var tmp_3 = this;
                tmp_3.r2c_1 = Unit_getInstance();
                this.yh_1 = 9;
                this.xh_1 = 7;
                continue $sm;
              } else {
                var tmp_4 = this.ai_1;
                if (tmp_4 instanceof CancellationException) {
                  this.u2c_1 = this.ai_1;
                  var tmp_5 = this;
                  tmp_5.r2c_1 = Unit_getInstance();
                  this.yh_1 = 9;
                  this.xh_1 = 7;
                  continue $sm;
                } else {
                  var tmp_6 = this.ai_1;
                  if (tmp_6 instanceof ChannelIOException) {
                    this.v2c_1 = this.ai_1;
                    var tmp_7 = this;
                    tmp_7.r2c_1 = Unit_getInstance();
                    this.yh_1 = 9;
                    this.xh_1 = 7;
                    continue $sm;
                  } else {
                    var tmp_8 = this.ai_1;
                    if (tmp_8 instanceof Error) {
                      this.w2c_1 = this.ai_1;
                      this.p2c_1.t29_1.lk(CancellationException_init_$Create$('Failed to send frame', this.w2c_1));
                      this.xh_1 = 4;
                      suspendResult = closeExceptionally(this.p2c_1.p29_1, this.w2c_1, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.ai_1;
                    }
                  }
                }
              }
            }

            break;
          case 4:
            this.r2c_1 = suspendResult;
            this.yh_1 = 9;
            this.xh_1 = 7;
            continue $sm;
          case 5:
            this.yh_1 = 9;
            this.x2c_1 = this.ai_1;
            this.p2c_1.t29_1.ox();
            this.xh_1 = 6;
            suspendResult = close(this.p2c_1.p29_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            throw this.x2c_1;
          case 7:
            this.p2c_1.t29_1.ox();
            this.xh_1 = 8;
            suspendResult = close(this.p2c_1.p29_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 9) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).g1e = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.p2c_1, completion);
    i.q2c_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.f1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.g2d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).i2d = function (it, $completion) {
    var tmp = this.j2d(it, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).si = function (p1, $completion) {
    return this.i2d(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            this.xh_1 = 1;
            suspendResult = sendCloseSequence(this.g2d_1, this.h2d_1, IOException_init_$Create$('Ping timeout'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 2) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).j2d = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.g2d_1, completion);
    i.h2d_1 = it;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.i2d(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $outgoingProcessorLoopCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w28_1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$0).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 7;
            this.x28_1 = this.w28_1.t29_1.f();
            this.xh_1 = 1;
            continue $sm;
          case 1:
            this.xh_1 = 2;
            suspendResult = this.x28_1.ew(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.xh_1 = 6;
              continue $sm;
            }

            this.y28_1 = this.x28_1.h();
            get_LOGGER().k1t('Sending ' + this.y28_1 + ' from session ' + this.w28_1);
            this.z28_1 = this.y28_1;
            var tmp_0 = this.z28_1;
            if (tmp_0 instanceof Close) {
              this.xh_1 = 3;
              suspendResult = sendCloseSequence$default(this.w28_1, readReason(this.y28_1), VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1;
              var tmp_2 = this.z28_1;
              if (tmp_2 instanceof Text) {
                tmp_1 = true;
              } else {
                var tmp_3 = this.z28_1;
                tmp_1 = tmp_3 instanceof Binary;
              }
              if (tmp_1) {
                this.a29_1 = processOutgoingExtensions(this.w28_1, this.y28_1);
                this.xh_1 = 4;
                continue $sm;
              } else {
                this.a29_1 = this.y28_1;
                this.xh_1 = 4;
                continue $sm;
              }
            }

            break;
          case 3:
            this.xh_1 = 6;
            var tmp_4 = this;
            continue $sm;
          case 4:
            this.b29_1 = this.a29_1;
            this.xh_1 = 5;
            suspendResult = this.w28_1.p29_1.l28().zx(this.b29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.xh_1 = 1;
            continue $sm;
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 7) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function $sendCloseSequenceCOROUTINE$1(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k29_1 = _this__u8e3s4;
    this.l29_1 = reason;
    this.m29_1 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$1).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 6;
            if (!tryClose(this.k29_1))
              return Unit_getInstance();
            get_LOGGER().k1t('Sending Close Sequence for session ' + this.k29_1 + ' with reason ' + this.l29_1 + ' and exception ' + this.m29_1);
            this.k29_1.v29_1.zo();
            ;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.l29_1;
            tmp_0.n29_1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            this.yh_1 = 5;
            runOrCancelPinger(this.k29_1);
            if (!(this.n29_1.e28_1 === Codes_CLOSED_ABNORMALLY_getInstance().a28_1)) {
              this.xh_1 = 2;
              suspendResult = this.k29_1.p29_1.l28().zx(Close_init_$Create$(this.n29_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.xh_1 = 3;
            continue $sm;
          case 3:
            this.o29_1 = Unit_getInstance();
            this.yh_1 = 6;
            this.xh_1 = 4;
            continue $sm;
          case 4:
            this.k29_1.r29_1.wo(this.n29_1);
            ;
            if (!(this.m29_1 == null)) {
              this.k29_1.t29_1.px(this.m29_1);
              this.k29_1.s29_1.px(this.m29_1);
            }

            return Unit_getInstance();
          case 5:
            this.yh_1 = 6;
            var t = this.ai_1;
            this.k29_1.r29_1.wo(this.n29_1);
            ;
            if (!(this.m29_1 == null)) {
              this.k29_1.t29_1.px(this.m29_1);
              this.k29_1.s29_1.px(this.m29_1);
            }

            throw t;
          case 6:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 6) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function $checkMaxFrameSizeCOROUTINE$2(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2a_1 = _this__u8e3s4;
    this.m2a_1 = packet;
    this.n2a_1 = frame;
  }
  protoOf($checkMaxFrameSizeCOROUTINE$2).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this.n2a_1.a2c_1.length;
            var tmp0_safe_receiver = this.m2a_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i();
            tmp_0.o2a_1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (toLong(this.o2a_1).u(this.l2a_1.j28()) > 0) {
              var tmp2_safe_receiver = this.m2a_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.fp();
              }
              this.xh_1 = 2;
              suspendResult = close(this.l2a_1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.o2a_1 + '. Max size is ' + toString(this.l2a_1.j28())), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 1;
              continue $sm;
            }

            break;
          case 1:
            return Unit_getInstance();
          case 2:
            throw new FrameTooBigException(toLong(this.o2a_1));
          case 3:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 3) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function DefaultWebSocketSessionImpl(raw, pingInterval, timeoutMillis) {
    Companion_getInstance_0();
    this.p29_1 = raw;
    this.q29_1 = atomic$ref$1(null);
    this.r29_1 = CompletableDeferred();
    this.s29_1 = Channel(8);
    this.t29_1 = Channel(8);
    this.u29_1 = atomic$boolean$1(false);
    this.v29_1 = Job(this.p29_1.ej().a4(Key_getInstance()));
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.w29_1 = tmp$ret$0;
    this.x29_1 = atomic$boolean$1(false);
    this.y29_1 = this.p29_1.ej().h4(this.v29_1).h4(new CoroutineName('ws-default'));
    this.z29_1 = pingInterval;
    this.a2a_1 = timeoutMillis;
    this.b2a_1 = this.r29_1;
  }
  protoOf(DefaultWebSocketSessionImpl).k28 = function () {
    return this.s29_1;
  };
  protoOf(DefaultWebSocketSessionImpl).l28 = function () {
    return this.t29_1;
  };
  protoOf(DefaultWebSocketSessionImpl).p2a = function () {
    return this.w29_1;
  };
  protoOf(DefaultWebSocketSessionImpl).ej = function () {
    return this.y29_1;
  };
  protoOf(DefaultWebSocketSessionImpl).i28 = function (value) {
    this.p29_1.i28(value);
  };
  protoOf(DefaultWebSocketSessionImpl).j28 = function () {
    return this.p29_1.j28();
  };
  protoOf(DefaultWebSocketSessionImpl).h28 = function (negotiatedExtensions) {
    if (!this.x29_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'WebSocket session ' + this + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    get_LOGGER().k1t('Starting default WebSocketSession(' + this + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions)));
    this.w29_1.k(negotiatedExtensions);
    runOrCancelPinger(this);
    runIncomingProcessor(this, ponger(this, this.l28()));
    runOutgoingProcessor(this);
  };
  protoOf(DefaultWebSocketSessionImpl).n28 = function ($completion) {
    var tmp0 = this.p29_1.n28($completion);
    return tmp0;
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
  function readText(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    var tmp0_require = _this__u8e3s4.y2b_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.readText.<anonymous>' call
      tmp$ret$0 = 'Text could be only extracted from non-fragmented frame';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = Charsets_getInstance().d1j_1.g1j();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.readText.<anonymous>' call
        writeFully(builder, _this__u8e3s4.a2c_1);
        tmp$ret$1 = builder.u1a();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.fp();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return decode(tmp, tmp$ret$1);
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).jm = function () {
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
  function readReason(_this__u8e3s4) {
    if (_this__u8e3s4.a2c_1.length < 2) {
      return null;
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.readReason.<anonymous>' call
        writeFully(builder, _this__u8e3s4.a2c_1);
        tmp$ret$0 = builder.u1a();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.fp();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    var packet = tmp$ret$0;
    var code = readShort(packet);
    var message = packet.u1i();
    return new CloseReason(code, message);
  }
  function FrameTooBigException(frameSize) {
    Exception_init_$Init$(this);
    captureStack(this, FrameTooBigException);
    this.k2d_1 = frameSize;
  }
  protoOf(FrameTooBigException).b8 = function () {
    return 'Frame is too big: ' + toString(this.k2d_1);
  };
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.b8();
  });
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
      tmp$ret$2 = tmp1__anonymous__uwfjfc.o2d_1;
      var maxValue = tmp$ret$2;
      var inductionVariable = 1;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var e = tmp0_maxByOrNull[i];
          var tmp$ret$3;
          // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
          tmp$ret$3 = e.o2d_1;
          var v = tmp$ret$3;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === lastIndex));
      tmp$ret$1 = maxElem;
    }
    tmp.p2d_1 = ensureNotNull(tmp$ret$1).o2d_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.p2d_1 + 1 | 0;
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
          tmp$ret$5 = element.o2d_1 === tmp_4;
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
    tmp_0.q2d_1 = tmp_3;
  }
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
    this.n2d_1 = controlFrame;
    this.o2d_1 = opcode;
  }
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
    Factory_getInstance();
    var channel = Channel(2147483647);
    var tmp = actorJob.h4(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.ej().a4(Key_getInstance()));
    tmp_0.fk(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.z2d_1 = $channel;
    this.a2e_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).f1e = function ($this$launch, $completion) {
    var tmp = this.g1e($this$launch, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ponger$slambda).si = function (p1, $completion) {
    return this.f1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ponger$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 14;
            this.yh_1 = 13;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            this.d2e_1 = null;
            this.xh_1 = 2;
            continue $sm;
          case 2:
            this.xh_1 = 3;
            continue $sm;
          case 3:
            this.yh_1 = 10;
            this.yh_1 = 9;
            this.f2e_1 = this.z2d_1.f();
            this.xh_1 = 4;
            continue $sm;
          case 4:
            this.xh_1 = 5;
            suspendResult = this.f2e_1.ew(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.xh_1 = 7;
              continue $sm;
            }

            this.g2e_1 = this.f2e_1.h();
            get_LOGGER().k1t('Received ping message, sending pong message');
            this.xh_1 = 6;
            suspendResult = this.a2e_1.zx(new Pong(this.g2e_1.a2c_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.xh_1 = 4;
            continue $sm;
          case 7:
            this.e2e_1 = Unit_getInstance();
            this.xh_1 = 8;
            var tmp_0 = this;
            continue $sm;
          case 8:
            var tmp_1 = this;
            cancelConsumed(this.z2d_1, this.d2e_1);
            tmp_1.c2e_1 = Unit_getInstance();
            this.xh_1 = 12;
            continue $sm;
          case 9:
            this.yh_1 = 10;
            var tmp_2 = this.ai_1;
            if (tmp_2 instanceof Error) {
              var e = this.ai_1;
              var tmp_3 = this;
              this.d2e_1 = e;
              throw e;
            } else {
              throw this.ai_1;
            }

            break;
          case 10:
            this.yh_1 = 13;
            var t = this.ai_1;
            cancelConsumed(this.z2d_1, this.d2e_1);
            ;
            throw t;
          case 11:
            cancelConsumed(this.z2d_1, this.d2e_1);
            ;
            if (false) {
              this.xh_1 = 1;
              continue $sm;
            }

            this.xh_1 = 12;
            continue $sm;
          case 12:
            this.yh_1 = 14;
            this.xh_1 = 15;
            continue $sm;
          case 13:
            this.yh_1 = 14;
            var tmp_4 = this.ai_1;
            if (tmp_4 instanceof ClosedSendChannelException) {
              var _ = this.ai_1;
              this.xh_1 = 15;
              continue $sm;
            } else {
              throw this.ai_1;
            }

            break;
          case 14:
            throw this.ai_1;
          case 15:
            this.yh_1 = 14;
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.yh_1 === 14) {
          throw e_0;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(ponger$slambda).g1e = function ($this$launch, completion) {
    var i = new ponger$slambda(this.z2d_1, this.a2e_1, completion);
    i.b2e_1 = $this$launch;
    return i;
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.f1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.p2e_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).f1e = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.g1e($this$withTimeoutOrNull, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(pinger$slambda$slambda).si = function (p1, $completion) {
    return this.f1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.xh_1 = 4;
              continue $sm;
            }

            this.xh_1 = 2;
            suspendResult = this.p2e_1.mx(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            this.xh_1 = 1;
            continue $sm;
          case 3:
            throw this.ai_1;
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 3) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda).g1e = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.p2e_1, completion);
    i.q2e_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.f1e($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.z2e_1 = $outgoing;
    this.a2f_1 = $pingMessage;
    this.b2f_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).f1e = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.g1e($this$withTimeoutOrNull, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(pinger$slambda$slambda_1).si = function (p1, $completion) {
    return this.f1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 6;
            get_LOGGER().k1t('WebSocket Pinger: sending ping frame');
            this.xh_1 = 1;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_toByteArray = Charsets_getInstance().e1j_1;
              if (tmp0_toByteArray.equals(Charsets_getInstance().d1j_1)) {
                tmp$ret$0 = encodeToByteArray(this.a2f_1);
                break l$ret$1;
              }
              tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.h1j(), this.a2f_1, 0, this.a2f_1.length);
            }
             while (false);
            suspendResult = this.z2e_1.zx(new Ping(tmp$ret$0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xh_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.xh_1 = 5;
              continue $sm;
            }

            this.xh_1 = 3;
            suspendResult = this.b2f_1.mx(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var msg = suspendResult;
            if (String_0(msg.a2c_1, VOID, VOID, Charsets_getInstance().e1j_1) === this.a2f_1) {
              get_LOGGER().k1t('WebSocket Pinger: received valid pong frame ' + msg);
              this.xh_1 = 5;
              continue $sm;
            } else {
              this.xh_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            get_LOGGER().k1t('WebSocket Pinger: received invalid pong frame ' + msg + ', continue waiting');
            this.xh_1 = 2;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 6) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda_1).g1e = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.z2e_1, this.a2f_1, this.b2f_1, completion);
    i.c2f_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.f1e($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.l2f_1 = $periodMillis;
    this.m2f_1 = $timeoutMillis;
    this.n2f_1 = $onTimeout;
    this.o2f_1 = $channel;
    this.p2f_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).f1e = function ($this$launch, $completion) {
    var tmp = this.g1e($this$launch, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(pinger$slambda).si = function (p1, $completion) {
    return this.f1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 9;
            get_LOGGER().k1t('Starting WebSocket pinger coroutine with period ' + toString(this.l2f_1) + ' ms and timeout ' + toString(this.m2f_1) + ' ms');
            this.r2f_1 = Random(getTimeMillis());
            this.s2f_1 = new Int8Array(32);
            this.yh_1 = 7;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.xh_1 = 6;
              continue $sm;
            }

            this.xh_1 = 2;
            suspendResult = withTimeoutOrNull(this.l2f_1, pinger$slambda$slambda_0(this.o2f_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            this.r2f_1.s4(this.s2f_1);
            ;
            this.t2f_1 = '[ping ' + hex(this.s2f_1) + ' ping]';
            this.xh_1 = 3;
            suspendResult = withTimeoutOrNull(this.m2f_1, pinger$slambda$slambda_2(this.p2f_1, this.t2f_1, this.o2f_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.u2f_1 = suspendResult;
            get_LOGGER().k1t('WebSocket pinger has timed out');
            if (this.u2f_1 == null) {
              this.xh_1 = 5;
              suspendResult = this.n2f_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.xh_1 = 1;
            continue $sm;
          case 5:
            this.xh_1 = 6;
            continue $sm;
          case 6:
            this.yh_1 = 9;
            this.xh_1 = 8;
            continue $sm;
          case 7:
            this.yh_1 = 9;
            var tmp_0 = this.ai_1;
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.ai_1;
              this.xh_1 = 8;
              continue $sm;
            } else {
              var tmp_1 = this.ai_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.ai_1;
                this.xh_1 = 8;
                continue $sm;
              } else {
                var tmp_2 = this.ai_1;
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.ai_1;
                  this.xh_1 = 8;
                  continue $sm;
                } else {
                  throw this.ai_1;
                }
              }
            }

            break;
          case 8:
            this.yh_1 = 9;
            return Unit_getInstance();
          case 9:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 9) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda).g1e = function ($this$launch, completion) {
    var i = new pinger$slambda(this.l2f_1, this.m2f_1, this.n2f_1, this.o2f_1, this.p2f_1, completion);
    i.q2f_1 = $this$launch;
    return i;
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.f1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.mk();
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
  function WebSocketExtensionsConfig() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.v2f_1 = tmp$ret$0;
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
    tmp_0.w2f_1 = tmp$ret$3;
  }
  protoOf(WebSocketExtensionsConfig).u1a = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.v2f_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.WebSocketExtensionsConfig.build.<anonymous>' call
      tmp$ret$0 = item();
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  function parametersToString($this) {
    return $this.y2f_1.l() ? '' : ', ' + joinToString($this.y2f_1, ',');
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.x2f_1 = name;
    this.y2f_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.x2f_1 + ' ' + parametersToString(this);
  };
  function parseWebSocketExtensions(value) {
    var tmp$ret$7;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = split(value, [',']);
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
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
      var tmp0_iterator_0 = tmp2_map.f();
      while (tmp0_iterator_0.g()) {
        var item_0 = tmp0_iterator_0.h();
        var tmp$ret$2;
        // Inline function 'io.ktor.websocket.parseWebSocketExtensions.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.text.trim' call
        tmp$ret$1 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        tmp$ret$2 = tmp$ret$1;
        tmp1_mapTo.a(tmp$ret$2);
      }
      tmp$ret$3 = tmp1_mapTo;
      tmp$ret$4 = tmp$ret$3;
      var parameters = tmp$ret$4;
      tmp$ret$5 = new WebSocketExtensionHeader(name, parameters);
      tmp0_mapTo.a(tmp$ret$5);
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
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
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
    this.h2g_1 = _this__u8e3s4;
    this.i2g_1 = reason;
  }
  protoOf($closeCOROUTINE$3).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 4;
            this.yh_1 = 3;
            this.xh_1 = 1;
            suspendResult = this.h2g_1.m28(Close_init_$Create$(this.i2g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xh_1 = 2;
            suspendResult = this.h2g_1.n28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.yh_1 = 4;
            this.xh_1 = 5;
            continue $sm;
          case 3:
            this.yh_1 = 4;
            var tmp_0 = this.ai_1;
            if (tmp_0 instanceof Error) {
              var _ = this.ai_1;
              this.xh_1 = 5;
              continue $sm;
            } else {
              throw this.ai_1;
            }

            break;
          case 4:
            throw this.ai_1;
          case 5:
            this.yh_1 = 4;
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 4) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
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
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Init$_0(text, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var tmp0_toByteArray = Charsets_getInstance().d1j_1;
      if (tmp0_toByteArray.equals(Charsets_getInstance().d1j_1)) {
        tmp$ret$0 = encodeToByteArray(text);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.h1j(), text, 0, text.length);
    }
    Text_init_$Init$(true, tmp$ret$0, $this);
    return $this;
  }
  function Text_init_$Create$(text) {
    return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
  }
  function Close_init_$Init$(reason, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.Close.<init>.<anonymous>' call
        writeShort(builder, reason.e28_1);
        writeText(builder, reason.f28_1);
        tmp$ret$0 = builder.u1a();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.fp();
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
    this.f2c_1 = new Int8Array(0);
  }
  protoOf(Companion_2).g2c = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp0_subject = frameType;
    var tmp0 = tmp0_subject.n4_1;
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
    this.y2b_1 = fin;
    this.z2b_1 = frameType;
    this.a2c_1 = data;
    this.b2c_1 = disposableHandle;
    this.c2c_1 = rsv1;
    this.d2c_1 = rsv2;
    this.e2c_1 = rsv3;
  }
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.z2b_1 + ' (fin=' + this.y2b_1 + ', buffer len = ' + this.a2c_1.length + ')';
  };
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).m28 = send;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_INTERNAL_ERROR_getInstance;
  _.$_$.c = send;
  _.$_$.d = Binary_init_$Create$;
  _.$_$.e = Close_init_$Create$;
  _.$_$.f = Text_init_$Create$;
  _.$_$.g = Companion_getInstance;
  _.$_$.h = CloseReason;
  _.$_$.i = DefaultWebSocketSession_0;
  _.$_$.j = DefaultWebSocketSession;
  _.$_$.k = Text;
  _.$_$.l = WebSocketExtensionsConfig;
  _.$_$.m = WebSocketSession;
  _.$_$.n = parseWebSocketExtensions;
  _.$_$.o = readText;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets-js-ir.js.map
