(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    root['ktor-ktor-io-js-ir'] = factory(typeof this['ktor-ktor-io-js-ir'] === 'undefined' ? {} : this['ktor-ktor-io-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var protoOf = kotlin_kotlin.$_$.sa;
  var classMeta = kotlin_kotlin.$_$.k9;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var toLong = kotlin_kotlin.$_$.va;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Long = kotlin_kotlin.$_$.ae;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.he;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Companion_getInstance = kotlin_kotlin.$_$.n4;
  var CancellationException = kotlin_kotlin.$_$.k8;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w;
  var captureStack = kotlin_kotlin.$_$.e9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var interfaceMeta = kotlin_kotlin.$_$.v9;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var isInterface = kotlin_kotlin.$_$.ea;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var equals = kotlin_kotlin.$_$.n9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.f4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var charSequenceLength = kotlin_kotlin.$_$.i9;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var objectCreate = kotlin_kotlin.$_$.qa;
  var Exception = kotlin_kotlin.$_$.xd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var numberToChar = kotlin_kotlin.$_$.na;
  var coerceAtLeast = kotlin_kotlin.$_$.bb;
  var coerceAtMost = kotlin_kotlin.$_$.db;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j2;
  var toByte = kotlin_kotlin.$_$.ua;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r3;
  var coerceAtMost_0 = kotlin_kotlin.$_$.cb;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.ab;
  var copyOf = kotlin_kotlin.$_$.x5;
  var toShort = kotlin_kotlin.$_$.wa;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.s4;
  var charSequenceGet = kotlin_kotlin.$_$.h9;
  var isLowSurrogate = kotlin_kotlin.$_$.fc;
  var isHighSurrogate = kotlin_kotlin.$_$.ec;
  var Job_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var hashCode = kotlin_kotlin.$_$.u9;
  var lazy = kotlin_kotlin.$_$.ef;
  var KProperty1 = kotlin_kotlin.$_$.mb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var replace = kotlin_kotlin.$_$.oc;
  var getStringHashCode = kotlin_kotlin.$_$.t9;
  var extendThrowable = kotlin_kotlin.$_$.o9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.j9;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.t1;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.j1;
  var isCharSequence = kotlin_kotlin.$_$.aa;
  var trim = kotlin_kotlin.$_$.pd;
  var decodeToString = kotlin_kotlin.$_$.ub;
  var setOf = kotlin_kotlin.$_$.r7;
  var fillArrayVal = kotlin_kotlin.$_$.p9;
  var isObject = kotlin_kotlin.$_$.ha;
  //endregion
  //region block: pre-declaration
  setMetadataFor($tryAwaitCOROUTINE$49, '$tryAwaitCOROUTINE$49', classMeta, CoroutineImpl);
  setMetadataFor(ByteChannelSequentialBase$beginWriteSession$1, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0, '$awaitAtLeastNBytesAvailableForWriteCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitAtLeastNBytesAvailableForReadCOROUTINE$1, '$awaitAtLeastNBytesAvailableForReadCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($writePacketCOROUTINE$8, '$writePacketCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor($writeFullyCOROUTINE$9, '$writeFullyCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor($writeFullyCOROUTINE$10, '$writeFullyCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor($readRemainingCOROUTINE$26, '$readRemainingCOROUTINE$26', classMeta, CoroutineImpl);
  setMetadataFor($readRemainingSuspendCOROUTINE$27, '$readRemainingSuspendCOROUTINE$27', classMeta, CoroutineImpl);
  setMetadataFor($readAvailableCOROUTINE$30, '$readAvailableCOROUTINE$30', classMeta, CoroutineImpl);
  setMetadataFor($readAvailableCOROUTINE$33, '$readAvailableCOROUTINE$33', classMeta, CoroutineImpl);
  setMetadataFor($awaitInternalAtLeast1COROUTINE$38, '$awaitInternalAtLeast1COROUTINE$38', classMeta, CoroutineImpl);
  setMetadataFor($awaitSuspendCOROUTINE$39, '$awaitSuspendCOROUTINE$39', classMeta, CoroutineImpl);
  function readRemaining$default(limit, $completion, $super) {
    var tmp;
    if (limit === VOID) {
      Companion_getInstance();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = limit;
    }
    limit = tmp;
    return $super === VOID ? this.d1d(limit, $completion) : $super.d1d.call(this, limit, $completion);
  }
  setMetadataFor(ByteReadChannel_1, 'ByteReadChannel', interfaceMeta, VOID, VOID, VOID, VOID, [3, 1, 2, 0, 5]);
  setMetadataFor(HasWriteSession, 'HasWriteSession', interfaceMeta);
  setMetadataFor(ByteChannelSequentialBase, 'ByteChannelSequentialBase', classMeta, VOID, [ByteReadChannel_1, HasWriteSession], VOID, VOID, [1, 3, 0, 2, 5]);
  setMetadataFor(ClosedWriteChannelException, 'ClosedWriteChannelException', classMeta, CancellationException);
  setMetadataFor(CloseElement, 'CloseElement', classMeta);
  setMetadataFor(WriterScope, 'WriterScope', interfaceMeta, VOID, [CoroutineScope]);
  setMetadataFor(ChannelJob, 'ChannelJob', classMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(ChannelScope, 'ChannelScope', classMeta, VOID, [CoroutineScope, WriterScope]);
  setMetadataFor(launchChannel$slambda, 'launchChannel$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($requestWriteBufferCOROUTINE$52, '$requestWriteBufferCOROUTINE$52', classMeta, CoroutineImpl);
  setMetadataFor($writeBufferSuspendCOROUTINE$53, '$writeBufferSuspendCOROUTINE$53', classMeta, CoroutineImpl);
  setMetadataFor($completeWritingFallbackCOROUTINE$54, '$completeWritingFallbackCOROUTINE$54', classMeta, CoroutineImpl);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Buffer, 'Buffer', classMeta);
  setMetadataFor(InsufficientSpaceException, 'InsufficientSpaceException', classMeta, Exception);
  setMetadataFor(Closeable, 'Closeable', interfaceMeta);
  function close() {
    this.jm();
  }
  setMetadataFor(ObjectPool, 'ObjectPool', interfaceMeta, VOID, [Closeable]);
  setMetadataFor(DefaultPool, 'DefaultPool', classMeta, VOID, [ObjectPool]);
  setMetadataFor(DefaultBufferPool, 'DefaultBufferPool', classMeta, DefaultPool);
  setMetadataFor(Output, 'Output', classMeta, VOID, [Closeable]);
  setMetadataFor(BytePacketBuilder, 'BytePacketBuilder', classMeta, Output);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Input, 'Input', classMeta, VOID, [Closeable]);
  setMetadataFor(ByteReadPacket, 'ByteReadPacket', classMeta, Input);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ChunkBuffer$Companion$Pool$1, VOID, classMeta, VOID, [ObjectPool]);
  setMetadataFor(ChunkBuffer$Companion$EmptyPool$1, VOID, classMeta, VOID, [ObjectPool]);
  setMetadataFor(NoPoolImpl, 'NoPoolImpl', classMeta, VOID, [ObjectPool]);
  setMetadataFor(ChunkBuffer$Companion$NoPool$1, VOID, classMeta, NoPoolImpl);
  setMetadataFor(ChunkBuffer$Companion$NoPoolManuallyManaged$1, VOID, classMeta, NoPoolImpl);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ChunkBuffer, 'ChunkBuffer', classMeta, Buffer);
  setMetadataFor(MalformedUTF8InputException, 'MalformedUTF8InputException', classMeta, Exception);
  setMetadataFor($sleepCOROUTINE$56, '$sleepCOROUTINE$56', classMeta, CoroutineImpl);
  setMetadataFor($trySuspendCOROUTINE$57, '$trySuspendCOROUTINE$57', classMeta, CoroutineImpl);
  setMetadataFor(AwaitingSlot, 'AwaitingSlot', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($copyToSequentialImplCOROUTINE$58, '$copyToSequentialImplCOROUTINE$58', classMeta, CoroutineImpl);
  setMetadataFor($copyToTailCOROUTINE$59, '$copyToTailCOROUTINE$59', classMeta, CoroutineImpl);
  setMetadataFor(ByteArrayPool$1, VOID, classMeta, DefaultPool);
  setMetadataFor(SingleInstancePool, 'SingleInstancePool', classMeta, VOID, [ObjectPool]);
  setMetadataFor(ByteChannelJS, 'ByteChannelJS', classMeta, ByteChannelSequentialBase, VOID, VOID, VOID, [3, 1, 0, 2, 5]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(DefaultAllocator, 'DefaultAllocator', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Memory, 'Memory', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Charset, 'Charset', classMeta);
  setMetadataFor(Charsets, 'Charsets', objectMeta);
  setMetadataFor(MalformedInputException, 'MalformedInputException', classMeta, Error);
  setMetadataFor(CharsetDecoder, 'CharsetDecoder', classMeta);
  setMetadataFor(CharsetEncoder, 'CharsetEncoder', classMeta);
  setMetadataFor(CharsetImpl, 'CharsetImpl', classMeta, Charset);
  setMetadataFor(CharsetEncoderImpl, 'CharsetEncoderImpl', classMeta, CharsetEncoder);
  setMetadataFor(CharsetDecoderImpl, 'CharsetDecoderImpl', classMeta, CharsetDecoder);
  setMetadataFor(DecodeBufferResult, 'DecodeBufferResult', classMeta);
  setMetadataFor(ByteReadPacket$pool$1, VOID, classMeta, SingleInstancePool);
  setMetadataFor(IOException, 'IOException', classMeta, Exception);
  setMetadataFor(EOFException, 'EOFException', classMeta, IOException);
  setMetadataFor(toKtor$1, VOID, classMeta);
  setMetadataFor(TextDecoderFallback, 'TextDecoderFallback', classMeta);
  //endregion
  function ByteReadChannel(content) {
    return ByteReadChannel_0(content, 0, content.length);
  }
  function $tryAwaitCOROUTINE$49(_this__u8e3s4, n, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e15_1 = _this__u8e3s4;
    this.f15_1 = n;
  }
  protoOf($tryAwaitCOROUTINE$49).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            if (this.e15_1.g15_1.w15() < this.f15_1) {
              this.xh_1 = 1;
              suspendResult = this.e15_1.g15_1.v15(this.f15_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.xh_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
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
  function _get_isCancelled__nhbn6y($this) {
    var tmp0_safe_receiver = $this.n15_1.kotlinx$atomicfu$value;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x15_1) == null);
  }
  function flushImpl($this) {
    if ($this.o15_1.dq()) {
      $this.s15_1.z15();
      return false;
    }
    flushWrittenBytes($this);
    $this.s15_1.z15();
    return true;
  }
  function flushWrittenBytes($this) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = $this.t15_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.flushWrittenBytes.<anonymous>' call
    var size = $this.o15_1.i();
    var buffer = ensureNotNull($this.o15_1.q16());
    $this.u15_1.r16(buffer);
    tmp$ret$0 = $this.l15_1.atomicfu$addAndGet(size);
    tmp$ret$1 = tmp$ret$0;
  }
  function ensureNotClosed($this) {
    if ($this.t16()) {
      var tmp0_elvis_lhs = $this.s16();
      throw tmp0_elvis_lhs == null ? new ClosedWriteChannelException('Channel ' + $this + ' is already closed') : tmp0_elvis_lhs;
    }
  }
  function ensureNotFailed($this) {
    var tmp0_safe_receiver = $this.s16();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function ensureNotFailed_0($this, closeable) {
    var tmp0_safe_receiver = $this.s16();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      closeable.fp();
      throw tmp0_safe_receiver;
    }
  }
  function readRemainingSuspend($this, builder, limit, $completion) {
    var tmp = new $readRemainingSuspendCOROUTINE$27($this, builder, limit, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function addBytesRead($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$0 = "Can't read negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp1_minusAssign = $this.m15_1;
    tmp1_minusAssign.atomicfu$getAndAdd(-count | 0);
    $this.j15_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp2_minusAssign = $this.l15_1;
    tmp2_minusAssign.atomicfu$getAndAdd(-count | 0);
    // Inline function 'kotlin.check' call
    var tmp3_check = $this.m15_1.kotlinx$atomicfu$value >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.g17() + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = $this.g17() >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$2 = 'Readable bytes count is negative: ' + $this.g17() + ', ' + count + ' in ' + $this;
      var message_1 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function addBytesWritten($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$0 = "Can't write negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.plusAssign' call
    var tmp1_plusAssign = $this.m15_1;
    tmp1_plusAssign.atomicfu$getAndAdd(count);
    $this.k15_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlin.check' call
    var tmp2_check = $this.m15_1.kotlinx$atomicfu$value >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.m15_1.kotlinx$atomicfu$value + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this$0, $count) {
    return function () {
      return this$0.w15() < $count ? !this$0.t16() : false;
    };
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this$0, $count) {
    return function () {
      return this$0.g17() < $count ? !this$0.h17() : false;
    };
  }
  function ByteChannelSequentialBase$beginWriteSession$1(this$0) {
    this.g15_1 = this$0;
  }
  protoOf(ByteChannelSequentialBase$beginWriteSession$1).i17 = function (min) {
    if (this.g15_1.w15() === 0)
      return null;
    return this.g15_1.o15_1.j17(min);
  };
  protoOf(ByteChannelSequentialBase$beginWriteSession$1).k17 = function (n, $completion) {
    var tmp = new $tryAwaitCOROUTINE$49(this, n, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  function $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t17_1 = _this__u8e3s4;
    this.u17_1 = count;
  }
  protoOf($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 4;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.t17_1.w15() < this.u17_1 ? !this.t17_1.t16() : false)) {
              this.xh_1 = 5;
              continue $sm;
            }

            if (!flushImpl(this.t17_1)) {
              this.xh_1 = 2;
              suspendResult = this.t17_1.s15_1.v17(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this.t17_1, this.u17_1), this);
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
            this.xh_1 = 1;
            continue $sm;
          case 4:
            throw this.ai_1;
          case 5:
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
  function $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e18_1 = _this__u8e3s4;
    this.f18_1 = count;
  }
  protoOf($awaitAtLeastNBytesAvailableForReadCOROUTINE$1).gi = function () {
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
            if (!(this.e18_1.g17() < this.f18_1 ? !this.e18_1.h17() : false)) {
              this.xh_1 = 4;
              continue $sm;
            }

            this.xh_1 = 2;
            suspendResult = this.e18_1.s15_1.v17(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this.e18_1, this.f18_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  function $writePacketCOROUTINE$8(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o18_1 = _this__u8e3s4;
    this.p18_1 = packet;
  }
  protoOf($writePacketCOROUTINE$8).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            this.xh_1 = 1;
            suspendResult = this.o18_1.v15(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var size = this.p18_1.x18().u4();
            this.o18_1.o15_1.y18(this.p18_1);
            this.o18_1.z18(size);
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
  function $writeFullyCOROUTINE$9(_this__u8e3s4, src, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i19_1 = _this__u8e3s4;
    this.j19_1 = src;
  }
  protoOf($writeFullyCOROUTINE$9).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            this.xh_1 = 1;
            suspendResult = this.i19_1.v15(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var count = this.j19_1.m19_1 - this.j19_1.l19_1 | 0;
            writeFully_2(this.i19_1.o15_1, this.j19_1);
            this.i19_1.z18(count);
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
  function $writeFullyCOROUTINE$10(_this__u8e3s4, src, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y19_1 = _this__u8e3s4;
    this.z19_1 = src;
    this.a1a_1 = offset;
    this.b1a_1 = length;
  }
  protoOf($writeFullyCOROUTINE$10).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 4;
            this.c1a_1 = this.a1a_1;
            this.d1a_1 = this.a1a_1 + this.b1a_1 | 0;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.c1a_1 < this.d1a_1)) {
              this.xh_1 = 3;
              continue $sm;
            }

            this.xh_1 = 2;
            suspendResult = this.y19_1.v15(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_min = this.y19_1.w15();
            var tmp1_min = this.d1a_1 - this.c1a_1 | 0;
            var bytesCount = Math.min(tmp0_min, tmp1_min);
            writeFully_3(this.y19_1.o15_1, this.z19_1, this.c1a_1, bytesCount);
            this.c1a_1 = this.c1a_1 + bytesCount | 0;
            this.y19_1.z18(bytesCount);
            this.xh_1 = 1;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.ai_1;
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
  function $readRemainingCOROUTINE$26(_this__u8e3s4, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1a_1 = _this__u8e3s4;
    this.n1a_1 = limit;
  }
  protoOf($readRemainingCOROUTINE$26).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            ensureNotFailed(this.m1a_1);
            this.o1a_1 = new BytePacketBuilder();
            var tmp_0 = this;
            var tmp0_minOf = this.m1a_1.p15_1.x18();
            tmp_0.p1a_1 = this.n1a_1.u(tmp0_minOf) <= 0 ? this.n1a_1 : tmp0_minOf;
            this.o1a_1.s1a(this.m1a_1.p15_1, this.p1a_1);
            this.m1a_1.t1a(this.p1a_1.u4());
            var tmp_1 = this;
            var tmp1_minus = this.o1a_1.i();
            tmp_1.q1a_1 = this.n1a_1.n6(toLong(tmp1_minus));
            if (this.q1a_1.equals(new Long(0, 0)) ? true : this.m1a_1.h17()) {
              var tmp_2 = this;
              ensureNotFailed_0(this.m1a_1, this.o1a_1);
              tmp_2.r1a_1 = this.o1a_1.u1a();
              this.xh_1 = 2;
              continue $sm;
            } else {
              this.xh_1 = 1;
              suspendResult = readRemainingSuspend(this.m1a_1, this.o1a_1, this.n1a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.r1a_1 = suspendResult;
            this.xh_1 = 2;
            continue $sm;
          case 2:
            return this.r1a_1;
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
  function $readRemainingSuspendCOROUTINE$27(_this__u8e3s4, builder, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c17_1 = _this__u8e3s4;
    this.d17_1 = builder;
    this.e17_1 = limit;
  }
  protoOf($readRemainingSuspendCOROUTINE$27).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 5;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            if (!(toLong(this.d17_1.i()).u(this.e17_1) < 0)) {
              this.xh_1 = 4;
              continue $sm;
            }

            var tmp_0 = this;
            var tmp0_minus = this.d17_1.i();
            var tmp1_minOf = this.e17_1.n6(toLong(tmp0_minus));
            var tmp2_minOf = this.c17_1.p15_1.x18();
            tmp_0.f17_1 = tmp1_minOf.u(tmp2_minOf) <= 0 ? tmp1_minOf : tmp2_minOf;
            this.d17_1.s1a(this.c17_1.p15_1, this.f17_1);
            this.c17_1.t1a(this.f17_1.u4());
            ensureNotFailed_0(this.c17_1, this.d17_1);
            if (this.c17_1.h17() ? true : this.d17_1.i() === this.e17_1.u4()) {
              this.xh_1 = 4;
              continue $sm;
            } else {
              this.xh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.xh_1 = 3;
            suspendResult = this.c17_1.v1a(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            this.xh_1 = 1;
            continue $sm;
          case 4:
            ensureNotFailed_0(this.c17_1, this.d17_1);
            return this.d17_1.u1a();
          case 5:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 5) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$30(_this__u8e3s4, dst, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1b_1 = _this__u8e3s4;
    this.f1b_1 = dst;
  }
  protoOf($readAvailableCOROUTINE$30).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            var tmp0_safe_receiver = this.e1b_1.s16();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.e1b_1.t16() ? this.e1b_1.g17() === 0 : false)
              return -1;
            if ((this.f1b_1.o19_1 - this.f1b_1.m19_1 | 0) === 0)
              return 0;
            if (this.e1b_1.g17() === 0) {
              this.xh_1 = 1;
              suspendResult = this.e1b_1.v1a(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.xh_1 = 2;
            continue $sm;
          case 2:
            if (!this.e1b_1.p15_1.h1b()) {
              this.e1b_1.g1b();
            }

            var tmp0_minOf = toLong(this.f1b_1.o19_1 - this.f1b_1.m19_1 | 0);
            var tmp1_minOf = this.e1b_1.p15_1.x18();
            var size = (tmp0_minOf.u(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).u4();
            readFully_2(this.e1b_1.p15_1, this.f1b_1, size);
            this.e1b_1.t1a(size);
            return size;
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
  function $readAvailableCOROUTINE$33(_this__u8e3s4, dst, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1b_1 = _this__u8e3s4;
    this.r1b_1 = dst;
    this.s1b_1 = offset;
    this.t1b_1 = length;
  }
  protoOf($readAvailableCOROUTINE$33).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            var tmp0_safe_receiver = this.q1b_1.s16();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.q1b_1.t16() ? this.q1b_1.g17() === 0 : false)
              return -1;
            if (this.t1b_1 === 0)
              return 0;
            if (this.q1b_1.g17() === 0) {
              this.xh_1 = 1;
              suspendResult = this.q1b_1.v1a(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.xh_1 = 2;
            continue $sm;
          case 2:
            if (!this.q1b_1.p15_1.h1b()) {
              this.q1b_1.g1b();
            }

            var tmp0_minOf = toLong(this.t1b_1);
            var tmp1_minOf = this.q1b_1.p15_1.x18();
            var size = (tmp0_minOf.u(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).u4();
            readFully_1(this.q1b_1.p15_1, this.r1b_1, this.s1b_1, size);
            this.q1b_1.t1a(size);
            return size;
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
  function $awaitInternalAtLeast1COROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1c_1 = _this__u8e3s4;
  }
  protoOf($awaitInternalAtLeast1COROUTINE$38).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            var tmp0__get_isNotEmpty__a29w5p = this.c1c_1.p15_1;
            if (!tmp0__get_isNotEmpty__a29w5p.e1c()) {
              var tmp_0 = this;
              tmp_0.d1c_1 = true;
              this.xh_1 = 3;
              continue $sm;
            } else {
              this.xh_1 = 1;
              suspendResult = this.c1c_1.v1a(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.d1c_1 = suspendResult;
            this.xh_1 = 3;
            continue $sm;
          case 2:
            throw this.ai_1;
          case 3:
            return this.d1c_1;
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
  function $awaitSuspendCOROUTINE$39(_this__u8e3s4, atLeast, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1c_1 = _this__u8e3s4;
    this.o1c_1 = atLeast;
  }
  protoOf($awaitSuspendCOROUTINE$39).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            var tmp0_require = this.o1c_1 >= 0;
            if (!tmp0_require) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.xh_1 = 1;
            suspendResult = this.n1c_1.p1c(this.o1c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n1c_1.g1b();
            var tmp0_safe_receiver = this.n1c_1.s16();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            return !this.n1c_1.h17() ? this.n1c_1.g17() >= this.o1c_1 : false;
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
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    pool = pool === VOID ? Companion_getInstance_4().q1c_1 : pool;
    this.h15_1 = autoFlush;
    this.i15_1 = atomic$ref$1(Companion_getInstance_4().s1c_1);
    this.j15_1 = atomic$long$1(new Long(0, 0));
    this.k15_1 = atomic$long$1(new Long(0, 0));
    this.l15_1 = atomic$int$1(0);
    this.m15_1 = atomic$int$1(0);
    this.n15_1 = atomic$ref$1(null);
    this.o15_1 = new BytePacketBuilder(pool);
    this.p15_1 = ByteReadPacket_init_$Create$(initial, pool);
    this.q15_1 = atomic$int$1(0);
    this.r15_1 = atomic$ref$1(Companion_getInstance_4().s1c_1);
    this.s15_1 = new AwaitingSlot();
    this.t15_1 = new Object();
    this.u15_1 = new BytePacketBuilder();
    var count = remainingAll(initial).u4();
    this.z18(count);
    this.l15_1.atomicfu$addAndGet(count);
  }
  protoOf(ByteChannelSequentialBase).v1c = function () {
    return this.h15_1;
  };
  protoOf(ByteChannelSequentialBase).t16 = function () {
    return !(this.n15_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannelSequentialBase).g17 = function () {
    return this.l15_1.kotlinx$atomicfu$value;
  };
  protoOf(ByteChannelSequentialBase).w15 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = 4088 - this.m15_1.kotlinx$atomicfu$value | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  protoOf(ByteChannelSequentialBase).h17 = function () {
    return _get_isCancelled__nhbn6y(this) ? true : this.t16() ? this.m15_1.kotlinx$atomicfu$value === 0 : false;
  };
  protoOf(ByteChannelSequentialBase).s16 = function () {
    var tmp0_safe_receiver = this.n15_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x15_1;
  };
  protoOf(ByteChannelSequentialBase).v15 = function (count, $completion) {
    var tmp = new $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(this, count, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).p1c = function (count, $completion) {
    var tmp = new $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(this, count, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).w1c = function () {
    flushImpl(this);
  };
  protoOf(ByteChannelSequentialBase).g1b = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.t15_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.prepareFlushedBytes.<anonymous>' call
    tmp$ret$0 = unsafeAppend(this.p15_1, this.u15_1);
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(ByteChannelSequentialBase).x1c = function (packet, $completion) {
    var tmp = new $writePacketCOROUTINE$8(this, packet, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).y1c = function (src, $completion) {
    var tmp = new $writeFullyCOROUTINE$9(this, src, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).z1c = function (src, offset, length, $completion) {
    var tmp = new $writeFullyCOROUTINE$10(this, src, offset, length, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).a1d = function () {
    return new ByteChannelSequentialBase$beginWriteSession$1(this);
  };
  protoOf(ByteChannelSequentialBase).b1d = function (written) {
    this.o15_1.c1d();
    this.z18(written);
  };
  protoOf(ByteChannelSequentialBase).t1a = function (count) {
    addBytesRead(this, count);
    this.s15_1.z15();
  };
  protoOf(ByteChannelSequentialBase).d1d = function (limit, $completion) {
    var tmp = new $readRemainingCOROUTINE$26(this, limit, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).f1d = function (dst, $completion) {
    var tmp0 = this.g1d(dst instanceof Buffer ? dst : THROW_CCE(), $completion);
    return tmp0;
  };
  protoOf(ByteChannelSequentialBase).g1d = function (dst, $completion) {
    var tmp = new $readAvailableCOROUTINE$30(this, dst, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).h1d = function (dst, offset, length, $completion) {
    var tmp = new $readAvailableCOROUTINE$33(this, dst, offset, length, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).i1d = function ($completion) {
    var tmp = new $awaitInternalAtLeast1COROUTINE$38(this, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).v1a = function (atLeast, $completion) {
    var tmp = new $awaitSuspendCOROUTINE$39(this, atLeast, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(ByteChannelSequentialBase).in = function (cause) {
    if (!(this.s16() == null) ? true : this.t16()) {
      return false;
    }
    var tmp0_elvis_lhs = cause;
    return this.px(tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Channel cancelled') : tmp0_elvis_lhs);
  };
  protoOf(ByteChannelSequentialBase).px = function (cause) {
    var closeElement = cause == null ? get_CLOSED_SUCCESS() : new CloseElement(cause);
    if (!this.n15_1.atomicfu$compareAndSet(null, closeElement))
      return false;
    if (!(cause == null)) {
      this.p15_1.fp();
      this.o15_1.fp();
      this.u15_1.fp();
    } else {
      this.w1c();
    }
    this.s15_1.j1d(cause);
    return true;
  };
  protoOf(ByteChannelSequentialBase).k1d = function (dst, limit) {
    var size = this.p15_1.x18();
    var tmp;
    if (size.u(limit) <= 0) {
      dst.o15_1.y18(this.p15_1);
      dst.z18(size.u4());
      this.t1a(size.u4());
      tmp = size;
    } else {
      tmp = new Long(0, 0);
    }
    return tmp;
  };
  protoOf(ByteChannelSequentialBase).z18 = function (count) {
    addBytesWritten(this, count);
    if (this.t16()) {
      this.o15_1.fp();
      ensureNotClosed(this);
    }
    if (this.v1c() ? true : this.w15() === 0) {
      this.w1c();
    }
  };
  function cancel(_this__u8e3s4) {
    return _this__u8e3s4.in(null);
  }
  function readAvailable(_this__u8e3s4, dst, $completion) {
    var tmp0 = _this__u8e3s4.h1d(dst, 0, dst.length, $completion);
    return tmp0;
  }
  function copyTo(_this__u8e3s4, dst, $completion) {
    Companion_getInstance();
    var tmp0 = copyTo_0(_this__u8e3s4, dst, new Long(-1, 2147483647), $completion);
    return tmp0;
  }
  function close_0(_this__u8e3s4) {
    return _this__u8e3s4.px(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, ClosedWriteChannelException);
  }
  function writeFully(_this__u8e3s4, src, $completion) {
    var tmp0 = _this__u8e3s4.z1c(src, 0, src.length, $completion);
    return tmp0;
  }
  function get_CLOSED_SUCCESS() {
    _init_properties_CloseElement_kt__5e72ik();
    return CLOSED_SUCCESS;
  }
  var CLOSED_SUCCESS;
  function CloseElement(cause) {
    this.x15_1 = cause;
  }
  var properties_initialized_CloseElement_kt_clkism;
  function _init_properties_CloseElement_kt__5e72ik() {
    if (properties_initialized_CloseElement_kt_clkism) {
    } else {
      properties_initialized_CloseElement_kt_clkism = true;
      CLOSED_SUCCESS = new CloseElement(null);
    }
  }
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    return launchChannel(_this__u8e3s4, coroutineContext, ByteChannel(autoFlush), true, block);
  }
  function WriterScope() {
  }
  function ChannelJob(delegate, channel) {
    this.n1d_1 = delegate;
    this.o1d_1 = channel;
  }
  protoOf(ChannelJob).m1d = function () {
    return this.o1d_1;
  };
  protoOf(ChannelJob).fj = function () {
    return this.n1d_1.fj();
  };
  protoOf(ChannelJob).p = function () {
    return this.n1d_1.p();
  };
  protoOf(ChannelJob).sk = function (child) {
    return this.n1d_1.sk(child);
  };
  protoOf(ChannelJob).lk = function (cause) {
    this.n1d_1.lk(cause);
  };
  protoOf(ChannelJob).g4 = function (initial, operation) {
    return this.n1d_1.g4(initial, operation);
  };
  protoOf(ChannelJob).a4 = function (key) {
    return this.n1d_1.a4(key);
  };
  protoOf(ChannelJob).ck = function () {
    return this.n1d_1.ck();
  };
  protoOf(ChannelJob).gk = function (onCancelling, invokeImmediately, handler) {
    return this.n1d_1.gk(onCancelling, invokeImmediately, handler);
  };
  protoOf(ChannelJob).fk = function (handler) {
    return this.n1d_1.fk(handler);
  };
  protoOf(ChannelJob).ik = function ($completion) {
    var tmp0 = this.n1d_1.ik($completion);
    return tmp0;
  };
  protoOf(ChannelJob).f4 = function (key) {
    return this.n1d_1.f4(key);
  };
  protoOf(ChannelJob).h4 = function (context) {
    return this.n1d_1.h4(context);
  };
  protoOf(ChannelJob).ak = function () {
    return this.n1d_1.ak();
  };
  protoOf(ChannelJob).toString = function () {
    return 'ChannelJob[' + this.n1d_1 + ']';
  };
  function launchChannel(_this__u8e3s4, context, channel, attachJob, block) {
    var dispatcher = _this__u8e3s4.ej().a4(Key_getInstance());
    var job = launch(_this__u8e3s4, context, VOID, launchChannel$slambda_0(attachJob, channel, block, dispatcher, null));
    job.fk(launchChannel$lambda(channel));
    return new ChannelJob(job, channel);
  }
  function ChannelScope(delegate, channel) {
    this.p1d_1 = channel;
    this.q1d_1 = delegate;
  }
  protoOf(ChannelScope).m1d = function () {
    return this.p1d_1;
  };
  protoOf(ChannelScope).ej = function () {
    return this.q1d_1.ej();
  };
  function launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    this.z1d_1 = $attachJob;
    this.a1e_1 = $channel;
    this.b1e_1 = $block;
    this.c1e_1 = $dispatcher;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchChannel$slambda).f1e = function ($this$launch, $completion) {
    var tmp = this.g1e($this$launch, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(launchChannel$slambda).si = function (p1, $completion) {
    return this.f1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchChannel$slambda).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            if (this.z1d_1) {
              this.a1e_1.l1d(ensureNotNull(this.d1e_1.ej().a4(Key_getInstance_0())));
            }

            var tmp_0 = this;
            var tmp_1 = new ChannelScope(this.d1e_1, this.a1e_1);
            tmp_0.e1e_1 = isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
            this.yh_1 = 2;
            this.xh_1 = 1;
            suspendResult = this.b1e_1(this.e1e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.yh_1 = 3;
            this.xh_1 = 4;
            continue $sm;
          case 2:
            this.yh_1 = 3;
            var tmp_2 = this.ai_1;
            if (tmp_2 instanceof Error) {
              var cause = this.ai_1;
              if (!equals(this.c1e_1, Dispatchers_getInstance().kp_1) ? !(this.c1e_1 == null) : false) {
                throw cause;
              }
              this.a1e_1.in(cause);
              this.xh_1 = 4;
              continue $sm;
            } else {
              throw this.ai_1;
            }

            break;
          case 3:
            throw this.ai_1;
          case 4:
            this.yh_1 = 3;
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
  protoOf(launchChannel$slambda).g1e = function ($this$launch, completion) {
    var i = new launchChannel$slambda(this.z1d_1, this.a1e_1, this.b1e_1, this.c1e_1, completion);
    i.d1e_1 = $this$launch;
    return i;
  };
  function launchChannel$slambda_0($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    var i = new launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.f1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchChannel$lambda($channel) {
    return function (cause) {
      $channel.px(cause);
      return Unit_getInstance();
    };
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (true) {
      if (!(exception instanceof CancellationException)) {
        break $l$loop;
      }
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      var tmp0_elvis_lhs = exception.cause;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return exception;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      exception = tmp;
    }
    return exception;
  }
  function HasWriteSession() {
  }
  function requestWriteBuffer(_this__u8e3s4, desiredSpace, $completion) {
    var tmp = new $requestWriteBufferCOROUTINE$52(_this__u8e3s4, desiredSpace, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function completeWriting(_this__u8e3s4, buffer, written, $completion) {
    if (isInterface(_this__u8e3s4, HasWriteSession)) {
      _this__u8e3s4.b1d(written);
      return Unit_getInstance();
    }
    var tmp0 = completeWritingFallback(_this__u8e3s4, buffer, $completion);
    return tmp0;
  }
  function writeBufferSuspend(session, desiredSpace, $completion) {
    var tmp = new $writeBufferSuspendCOROUTINE$53(session, desiredSpace, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function writeBufferFallback() {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = Companion_getInstance_4().q1c_1.d1f();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.writeBufferFallback.<anonymous>' call
    tmp0_also.e1f();
    Companion_getInstance_1();
    tmp0_also.f1f(8);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function completeWritingFallback(_this__u8e3s4, buffer, $completion) {
    var tmp = new $completeWritingFallbackCOROUTINE$54(_this__u8e3s4, buffer, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function $requestWriteBufferCOROUTINE$52(_this__u8e3s4, desiredSpace, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1e_1 = _this__u8e3s4;
    this.q1e_1 = desiredSpace;
  }
  protoOf($requestWriteBufferCOROUTINE$52).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            var tmp_0 = this;
            var tmp_1;
            var tmp_2 = this.p1e_1;
            if (isInterface(tmp_2, HasWriteSession)) {
              tmp_1 = this.p1e_1.a1d();
            } else {
              tmp_1 = null;
            }

            tmp_0.r1e_1 = tmp_1;
            if (!(this.r1e_1 == null)) {
              this.s1e_1 = this.r1e_1.i17(this.q1e_1);
              if (!(this.s1e_1 == null)) {
                return this.s1e_1;
              }
              this.xh_1 = 2;
              suspendResult = writeBufferSuspend(this.r1e_1, this.q1e_1, this);
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
            return writeBufferFallback();
          case 2:
            return suspendResult;
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
  function $writeBufferSuspendCOROUTINE$53(session, desiredSpace, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1f_1 = session;
    this.c1f_1 = desiredSpace;
  }
  protoOf($writeBufferSuspendCOROUTINE$53).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            this.xh_1 = 1;
            suspendResult = this.b1f_1.k17(this.c1f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = this.b1f_1.i17(this.c1f_1);
            return tmp0_elvis_lhs == null ? this.b1f_1.i17(1) : tmp0_elvis_lhs;
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
  function $completeWritingFallbackCOROUTINE$54(_this__u8e3s4, buffer, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o1f_1 = _this__u8e3s4;
    this.p1f_1 = buffer;
  }
  protoOf($completeWritingFallbackCOROUTINE$54).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            var tmp_0 = this.p1f_1;
            if (tmp_0 instanceof ChunkBuffer) {
              this.xh_1 = 2;
              suspendResult = this.o1f_1.y1c(this.p1f_1, this);
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
            throw UnsupportedOperationException_init_$Create$('Only ChunkBuffer instance is supported.');
          case 2:
            this.p1f_1.a1g(Companion_getInstance_4().q1c_1);
            return Unit_getInstance();
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
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? IntCompanionObject_getInstance().MAX_VALUE : max;
    var tmp$ret$2;
    // Inline function 'kotlin.text.buildString' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = toLong(max);
    var tmp1_minOf = sizeEstimate(input);
    tmp$ret$0 = tmp0_minOf.u(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    var tmp3_buildString = tmp$ret$0.u4();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp2_apply = StringBuilder_init_$Create$(tmp3_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
    decode_0(_this__u8e3s4, input, tmp2_apply, max);
    tmp$ret$1 = tmp2_apply;
    tmp$ret$2 = tmp$ret$1.toString();
    return tmp$ret$2;
  }
  function encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return get_EmptyByteArray();
    var single = Companion_getInstance_4().q1c_1.d1f();
    try {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = single.m19_1 - single.l19_1 | 0;
        var result = new Int8Array(tmp$ret$0);
        // Inline function 'io.ktor.utils.io.core.readFully' call
        var tmp0_readFully = result.length - 0 | 0;
        readFully(single instanceof Buffer ? single : THROW_CCE(), result, 0, tmp0_readFully);
        return result;
      }
      var tmp$ret$1;
      $l$block: {
        // Inline function 'io.ktor.utils.io.core.buildPacket' call
        // Inline function 'kotlin.contracts.contract' call
        var builder = new BytePacketBuilder();
        try {
          // Inline function 'io.ktor.utils.io.charsets.encodeToByteArrayImpl1.<anonymous>' call
          builder.c1g(single.b1g());
          encodeToImpl(_this__u8e3s4, builder, input, start, toIndex);
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
      return readBytes(tmp$ret$1);
    }finally {
      single.a1g(Companion_getInstance_4().q1c_1);
    }
  }
  function sizeEstimate(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ByteReadPacket) {
      tmp = _this__u8e3s4.x18();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp0_maxOf = _this__u8e3s4.x18();
      tmp$ret$0 = tmp0_maxOf.u(new Long(16, 0)) >= 0 ? tmp0_maxOf : new Long(16, 0);
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(destination, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.charsets.encodeToImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.o19_1 - tmp0__anonymous__q1qw7t.m19_1 | 0;
        var before = tmp$ret$0;
        var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, tmp0__anonymous__q1qw7t);
        // Inline function 'kotlin.check' call
        var tmp0_check = rc >= 0;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$1;
          // Inline function 'kotlin.check.<anonymous>' call
          tmp$ret$1 = 'Check failed.';
          var message = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        start = start + rc | 0;
        var tmp = bytesWritten;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$2 = tmp0__anonymous__q1qw7t.o19_1 - tmp0__anonymous__q1qw7t.m19_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$2 | 0) | 0;
        tmp$ret$3 = start >= toIndex ? 0 : rc === 0 ? 8 : 1;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(destination, size, tail);
      }
    }finally {
      destination.c1d();
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this__u8e3s4, destination) | 0;
    return bytesWritten;
  }
  function encodeCompleteImpl(_this__u8e3s4, dst) {
    var size = 1;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(dst, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.encodeCompleteImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.o19_1 - tmp0__anonymous__q1qw7t.m19_1 | 0;
        var before = tmp$ret$0;
        if (encodeComplete(_this__u8e3s4, tmp0__anonymous__q1qw7t)) {
          size = 0;
        } else {
          var tmp0 = size;
          size = tmp0 + 1 | 0;
        }
        var tmp = bytesWritten;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.o19_1 - tmp0__anonymous__q1qw7t.m19_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$1 | 0) | 0;
        tmp$ret$2 = size > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(dst, 1, tail);
      }
    }finally {
      dst.c1d();
    }
    return bytesWritten;
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
        encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
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
    return tmp$ret$0;
  }
  function Companion() {
    Companion_instance = this;
    this.d1g_1 = 8;
  }
  protoOf(Companion).e1g = function () {
    return Companion_getInstance_4().s1c_1;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Buffer(memory) {
    Companion_getInstance_1();
    this.k19_1 = memory;
    this.l19_1 = 0;
    this.m19_1 = 0;
    this.n19_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb = this.k19_1;
    tmp$ret$0 = tmp0__get_size32__ezg0pb.f1g_1.byteLength;
    tmp.o19_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb_0 = this.k19_1;
    tmp$ret$1 = tmp0__get_size32__ezg0pb_0.f1g_1.byteLength;
    tmp_0.p19_1 = tmp$ret$1;
  }
  protoOf(Buffer).g1g = function (count) {
    if (count === 0)
      return Unit_getInstance();
    var newReadPosition = this.l19_1 + count | 0;
    if (count < 0 ? true : newReadPosition > this.m19_1) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$1 = this.m19_1 - this.l19_1 | 0;
      discardFailed(count, tmp$ret$1);
    }
    this.l19_1 = newReadPosition;
  };
  protoOf(Buffer).h1g = function (count) {
    var newWritePosition = this.m19_1 + count | 0;
    if (count < 0 ? true : newWritePosition > this.o19_1) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.o19_1 - this.m19_1 | 0;
      commitWrittenFailed(count, tmp$ret$0);
    }
    this.m19_1 = newWritePosition;
  };
  protoOf(Buffer).i1g = function (position) {
    var limit = this.o19_1;
    if (position < this.m19_1) {
      var tmp = position - this.m19_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.o19_1 - this.m19_1 | 0;
      commitWrittenFailed(tmp, tmp$ret$0);
    }
    if (position >= limit) {
      if (position === limit) {
        this.m19_1 = position;
        return false;
      }
      var tmp_0 = position - this.m19_1 | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = this.o19_1 - this.m19_1 | 0;
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }
    this.m19_1 = position;
    return true;
  };
  protoOf(Buffer).j1g = function (position) {
    if (position < 0 ? true : position > this.m19_1) {
      var tmp = position - this.l19_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = this.m19_1 - this.l19_1 | 0;
      discardFailed(tmp, tmp$ret$0);
    }
    if (!(this.l19_1 === position)) {
      this.l19_1 = position;
    }
  };
  protoOf(Buffer).k1g = function (count) {
    var newReadPosition = this.l19_1 - count | 0;
    if (newReadPosition < this.n19_1) {
      rewindFailed(count, this.l19_1 - this.n19_1 | 0);
    }
    this.l19_1 = newReadPosition;
  };
  protoOf(Buffer).l1g = function (startGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = startGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveStartGap.<anonymous>' call
      tmp$ret$0 = "startGap shouldn't be negative: " + startGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.l19_1 >= startGap) {
      this.n19_1 = startGap;
      return Unit_getInstance();
    }
    if (this.l19_1 === this.m19_1) {
      if (startGap > this.o19_1) {
        startGapReservationFailedDueToLimit(this, startGap);
      }
      this.m19_1 = startGap;
      this.l19_1 = startGap;
      this.n19_1 = startGap;
      return Unit_getInstance();
    }
    startGapReservationFailed(this, startGap);
  };
  protoOf(Buffer).f1f = function (endGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = endGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveEndGap.<anonymous>' call
      tmp$ret$0 = "endGap shouldn't be negative: " + endGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var newLimit = this.p19_1 - endGap | 0;
    if (newLimit >= this.m19_1) {
      this.o19_1 = newLimit;
      return Unit_getInstance();
    }
    if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }
    if (newLimit < this.n19_1) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }
    if (this.l19_1 === this.m19_1) {
      this.o19_1 = newLimit;
      this.l19_1 = newLimit;
      this.m19_1 = newLimit;
      return Unit_getInstance();
    }
    endGapReservationFailedDueToContent(this, endGap);
  };
  protoOf(Buffer).m1g = function () {
    this.n19_1 = 0;
    this.l19_1 = 0;
    var capacity = this.p19_1;
    this.m19_1 = capacity;
  };
  protoOf(Buffer).e1f = function () {
    this.n1g(this.p19_1 - this.n19_1 | 0);
  };
  protoOf(Buffer).n1g = function (limit) {
    var startGap = this.n19_1;
    this.l19_1 = startGap;
    this.m19_1 = startGap;
    this.o19_1 = limit;
  };
  protoOf(Buffer).o1g = function () {
    this.p1g(0);
    this.q1g();
  };
  protoOf(Buffer).q1g = function () {
    this.o19_1 = this.p19_1;
  };
  protoOf(Buffer).p1g = function (newReadPosition) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newReadPosition >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$0 = "newReadPosition shouldn't be negative: " + newReadPosition;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = newReadPosition <= this.l19_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$1 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.l19_1;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.l19_1 = newReadPosition;
    if (this.n19_1 > newReadPosition) {
      this.n19_1 = newReadPosition;
    }
  };
  protoOf(Buffer).r1g = function (copy) {
    copy.o19_1 = this.o19_1;
    copy.n19_1 = this.n19_1;
    copy.l19_1 = this.l19_1;
    copy.m19_1 = this.m19_1;
  };
  protoOf(Buffer).s1g = function () {
    var readPosition = this.l19_1;
    if (readPosition === this.m19_1) {
      throw new EOFException('No readable bytes available.');
    }
    this.l19_1 = readPosition + 1 | 0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.get' call
    var tmp0_get = this.k19_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    tmp$ret$0 = tmp0_get.f1g_1.getInt8(readPosition);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(Buffer).t1g = function (value) {
    var writePosition = this.m19_1;
    if (writePosition === this.o19_1) {
      throw new InsufficientSpaceException('No free space in the buffer to write a byte');
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.set' call
    var tmp0_set = this.k19_1;
    tmp0_set.f1g_1.setInt8(writePosition, value);
    tmp$ret$0 = Unit_getInstance();
    this.m19_1 = writePosition + 1 | 0;
  };
  protoOf(Buffer).u1g = function () {
    this.o1g();
    this.e1f();
  };
  protoOf(Buffer).toString = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = this.m19_1 - this.l19_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$1 = this.o19_1 - this.m19_1 | 0;
    var tmp_0 = tmp$ret$1;
    var tmp_1 = this.n19_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$2 = this.p19_1 - this.o19_1 | 0;
    return 'Buffer(' + tmp + ' used, ' + tmp_0 + ' free, ' + (tmp_1 + tmp$ret$2 | 0) + ' reserved of ' + this.p19_1 + ')';
  };
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init_$Create$('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit(_this__u8e3s4, startGap) {
    if (startGap > _this__u8e3s4.p19_1) {
      throw IllegalArgumentException_init_$Create$('Start gap ' + startGap + ' is bigger than the capacity ' + _this__u8e3s4.p19_1);
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$0 = _this__u8e3s4.p19_1 - _this__u8e3s4.o19_1 | 0;
    throw IllegalStateException_init_$Create$('Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this__u8e3s4, startGap) {
    var tmp = 'Unable to reserve ' + startGap + ' start gap: ';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.m19_1 - _this__u8e3s4.l19_1 | 0;
    throw IllegalStateException_init_$Create$(tmp + ('there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this__u8e3s4.l19_1));
  }
  function endGapReservationFailedDueToCapacity(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: capacity is ' + _this__u8e3s4.p19_1);
  }
  function endGapReservationFailedDueToStartGap(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: there are already ' + _this__u8e3s4.n19_1 + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this__u8e3s4, endGap) {
    var tmp = 'Unable to reserve end gap ' + endGap + ':';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.m19_1 - _this__u8e3s4.l19_1 | 0;
    throw IllegalArgumentException_init_$Create$(tmp + (' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this__u8e3s4.l19_1));
  }
  function InsufficientSpaceException_init_$Init$(name, size, availableSpace, $this) {
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size, availableSpace, objectCreate(protoOf(InsufficientSpaceException)));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    message = message === VOID ? 'Not enough free space' : message;
    Exception_init_$Init$(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  function restoreStartGap(_this__u8e3s4, size) {
    _this__u8e3s4.p1g(_this__u8e3s4.l19_1 - size | 0);
  }
  function writeBufferAppend(_this__u8e3s4, other, maxSize) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.m19_1 - other.l19_1 | 0;
    var tmp0_minOf = tmp$ret$0;
    tmp$ret$1 = Math.min(tmp0_minOf, maxSize);
    var size = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = _this__u8e3s4.o19_1 - _this__u8e3s4.m19_1 | 0;
    if (tmp$ret$2 <= size) {
      writeBufferAppendUnreserve(_this__u8e3s4, size);
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>' call
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.k19_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.m19_1;
    var tmp3__anonymous__ufb84q = _this__u8e3s4.o19_1;
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>.<anonymous>' call
    var tmp0__anonymous__q1qw7t = other.k19_1;
    var tmp1__anonymous__uwfjfc_0 = other.l19_1;
    var tmp2__anonymous__z9zvc9_0 = other.m19_1;
    tmp0__anonymous__q1qw7t.v1g(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc_0, size, tmp2__anonymous__z9zvc9);
    tmp$ret$3 = size;
    var rc = tmp$ret$3;
    other.g1g(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    var rc_0 = tmp$ret$5;
    _this__u8e3s4.h1g(rc_0);
    tmp$ret$6 = rc_0;
    return tmp$ret$6;
  }
  function writeBufferAppendUnreserve(_this__u8e3s4, writeSize) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$0 = _this__u8e3s4.o19_1 - _this__u8e3s4.m19_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = _this__u8e3s4.p19_1 - _this__u8e3s4.o19_1 | 0;
    if ((tmp + tmp$ret$1 | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = _this__u8e3s4.m19_1 + writeSize | 0;
    var overrunSize = newWritePosition - _this__u8e3s4.o19_1 | 0;
    if (overrunSize > 0) {
      _this__u8e3s4.q1g();
    }
  }
  function writeBufferPrepend(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.m19_1 - other.l19_1 | 0;
    var size = tmp$ret$0;
    var readPosition = _this__u8e3s4.l19_1;
    if (readPosition < size) {
      throw IllegalArgumentException_init_$Create$('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.k19_1.v1g(_this__u8e3s4.k19_1, other.l19_1, size, newReadPosition);
    other.g1g(size);
    _this__u8e3s4.p1g(newReadPosition);
    return size;
  }
  function get_DefaultChunkedBufferPool() {
    _init_properties_BufferFactory_kt__uj6b48();
    return DefaultChunkedBufferPool;
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    bufferSize = bufferSize === VOID ? 4096 : bufferSize;
    capacity = capacity === VOID ? 1000 : capacity;
    allocator = allocator === VOID ? DefaultAllocator_getInstance() : allocator;
    DefaultPool.call(this, capacity);
    this.z1g_1 = bufferSize;
    this.a1h_1 = allocator;
  }
  protoOf(DefaultBufferPool).b1h = function () {
    return new ChunkBuffer(this.a1h_1.c1h(this.z1g_1), null, this);
  };
  protoOf(DefaultBufferPool).d1h = function (instance) {
    this.a1h_1.e1h(instance.k19_1);
    protoOf(DefaultPool).i1h.call(this, instance);
    instance.j1h();
  };
  protoOf(DefaultBufferPool).i1h = function (instance) {
    return this.d1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(DefaultBufferPool).k1h = function (instance) {
    protoOf(DefaultPool).l1h.call(this, instance);
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var tmp0__get_size__8hfv5c = instance.k19_1;
    tmp$ret$0 = toLong(tmp0__get_size__8hfv5c.f1g_1.byteLength);
    var tmp1_check = tmp$ret$0.equals(toLong(this.z1g_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var tmp0__get_size__8hfv5c_0 = instance.k19_1;
      tmp$ret$1 = toLong(tmp0__get_size__8hfv5c_0.f1g_1.byteLength);
      tmp$ret$2 = 'Buffer size mismatch. Expected: ' + this.z1g_1 + ', actual: ' + toString(tmp$ret$1);
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = !(instance === Companion_getInstance_4().s1c_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$3 = "ChunkBuffer.Empty couldn't be recycled";
      var message_0 = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp3_check = !(instance === Companion_getInstance_1().e1g());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$4 = "Empty instance couldn't be recycled";
      var message_1 = tmp$ret$4;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = instance.m1h() === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$5 = 'Unable to clear buffer: it is still in use.';
      var message_2 = tmp$ret$5;
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.check' call
    var tmp5_check = instance.n1h() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp5_check) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$6 = "Recycled instance shouldn't be a part of a chain.";
      var message_3 = tmp$ret$6;
      throw IllegalStateException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.check' call
    var tmp6_check = instance.z1f_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp6_check) {
      var tmp$ret$7;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$7 = "Recycled instance shouldn't be a view or another buffer.";
      var message_4 = tmp$ret$7;
      throw IllegalStateException_init_$Create$(toString(message_4));
    }
  };
  protoOf(DefaultBufferPool).l1h = function (instance) {
    return this.k1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(DefaultBufferPool).o1h = function (instance) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = protoOf(DefaultPool).p1h.call(this, instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.clearInstance.<anonymous>' call
    tmp0_apply.q1h();
    tmp0_apply.u1g();
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  };
  protoOf(DefaultBufferPool).p1h = function (instance) {
    return this.o1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function get_DEFAULT_BUFFER_SIZE() {
    return DEFAULT_BUFFER_SIZE;
  }
  var DEFAULT_BUFFER_SIZE;
  var properties_initialized_BufferFactory_kt_q9tgbq;
  function _init_properties_BufferFactory_kt__uj6b48() {
    if (properties_initialized_BufferFactory_kt_q9tgbq) {
    } else {
      properties_initialized_BufferFactory_kt_q9tgbq = true;
      DefaultChunkedBufferPool = new DefaultBufferPool();
    }
  }
  function writeFully_0(_this__u8e3s4, source, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? source.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.k19_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.m19_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.o19_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('byte array', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeByteArray' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = of(Companion_getInstance_6(), source, offset, length);
    // Inline function 'kotlin.contracts.contract' call
    tmp0_let.v1g(tmp0__anonymous__q1qw7t, 0, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = length;
    var rc = tmp$ret$2;
    _this__u8e3s4.h1g(rc);
    tmp$ret$3 = rc;
  }
  function writeFully_1(_this__u8e3s4, src, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      tmp$ret$0 = "length shouldn't be negative: " + length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = src.m19_1 - src.l19_1 | 0;
    var tmp1_require = length <= tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$2 = src.m19_1 - src.l19_1 | 0;
      tmp$ret$3 = "length shouldn't be greater than the source read remaining: " + length + ' > ' + tmp$ret$2;
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$4 = _this__u8e3s4.o19_1 - _this__u8e3s4.m19_1 | 0;
    var tmp2_require = length <= tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$5 = _this__u8e3s4.o19_1 - _this__u8e3s4.m19_1 | 0;
      tmp$ret$6 = "length shouldn't be greater than the destination write remaining space: " + length + ' > ' + tmp$ret$5;
      var message_1 = tmp$ret$6;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$8;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$7;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp3__anonymous__ufb84q = _this__u8e3s4.k19_1;
    var tmp4__anonymous__pkmkx7 = _this__u8e3s4.m19_1;
    var tmp5__anonymous__kpxxpo = _this__u8e3s4.o19_1;
    var writeRemaining = tmp5__anonymous__kpxxpo - tmp4__anonymous__pkmkx7 | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('buffer readable content', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    src.k19_1.v1g(tmp3__anonymous__ufb84q, src.l19_1, length, tmp4__anonymous__pkmkx7);
    src.g1g(length);
    tmp$ret$7 = length;
    var rc = tmp$ret$7;
    _this__u8e3s4.h1g(rc);
    tmp$ret$8 = rc;
  }
  function readFully(_this__u8e3s4, destination, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? destination.length - offset | 0 : length;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.k19_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.l19_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.m19_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new EOFException('Not enough bytes to read a byte array of size ' + length + '.');
    }
    copyTo_1(tmp0__anonymous__q1qw7t, destination, tmp1__anonymous__uwfjfc, length, offset);
    value = Unit_getInstance();
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.g1g(rc);
    tmp$ret$1 = rc;
    tmp$ret$2 = value;
  }
  function readFully_0(_this__u8e3s4, dst, length) {
    var tmp;
    if (length === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = dst.o19_1 - dst.m19_1 | 0;
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.o19_1 - dst.m19_1 | 0;
    var tmp1_require = length <= tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$3 = 'Failed requirement.';
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.k19_1;
    var tmp3__anonymous__ufb84q = _this__u8e3s4.l19_1;
    var tmp4__anonymous__pkmkx7 = _this__u8e3s4.m19_1;
    if ((tmp4__anonymous__pkmkx7 - tmp3__anonymous__ufb84q | 0) < length) {
      throw new EOFException('Not enough bytes to read a buffer content of size ' + length + '.');
    }
    tmp2__anonymous__z9zvc9.v1g(dst.k19_1, tmp3__anonymous__ufb84q, length, dst.m19_1);
    dst.h1g(length);
    value = Unit_getInstance();
    tmp$ret$4 = length;
    var rc = tmp$ret$4;
    _this__u8e3s4.g1g(rc);
    tmp$ret$5 = rc;
    tmp$ret$6 = value;
    return length;
  }
  function writeShort(_this__u8e3s4, value) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.k19_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.m19_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.o19_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_$Create$('short integer', 2, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
    tmp0__anonymous__q1qw7t.f1g_1.setInt16(tmp1__anonymous__uwfjfc, value, false);
    tmp$ret$0 = 2;
    var rc = tmp$ret$0;
    _this__u8e3s4.h1g(rc);
    tmp$ret$1 = rc;
    return Unit_getInstance();
  }
  function readShort(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.k19_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.l19_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.m19_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < 2) {
      throw new EOFException('Not enough bytes to read a short integer of size 2.');
    }
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
    tmp$ret$0 = tmp0__anonymous__q1qw7t.f1g_1.getInt16(tmp1__anonymous__uwfjfc, false);
    tmp$ret$1 = tmp$ret$0;
    value = tmp$ret$1;
    tmp$ret$2 = 2;
    var rc = tmp$ret$2;
    _this__u8e3s4.g1g(rc);
    tmp$ret$3 = rc;
    tmp$ret$4 = value;
    return tmp$ret$4;
  }
  function remainingAll(_this__u8e3s4) {
    return remainingAll_0(_this__u8e3s4, new Long(0, 0));
  }
  function copyAll(_this__u8e3s4) {
    var copied = _this__u8e3s4.b1g();
    var tmp0_elvis_lhs = _this__u8e3s4.n1h();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return copied;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    return copyAll_0(next, copied, copied);
  }
  function findTail(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp0_elvis_lhs = $this.n1h();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        $this = tmp0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function releaseAll(_this__u8e3s4, pool) {
    var current = _this__u8e3s4;
    while (!(current == null)) {
      var next = current.s1h();
      current.a1g(pool);
      current = next;
    }
  }
  function remainingAll_0(_this__u8e3s4, n) {
    var $this = _this__u8e3s4;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = $this.m19_1 - $this.l19_1 | 0;
        var rem = toLong(tmp$ret$0).m6(n_0);
        var tmp0_elvis_lhs = $this.n1h();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return rem;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        var tmp1 = rem;
        $this = tmp0;
        n_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function copyAll_0(_this__u8e3s4, head, prev) {
    var $this = _this__u8e3s4;
    var head_0 = head;
    var prev_0 = prev;
    $l$1: do {
      $l$0: do {
        var copied = $this.b1g();
        prev_0.t1h(copied);
        var tmp0_elvis_lhs = $this.n1h();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return head_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        var tmp1 = head_0;
        var tmp2 = copied;
        $this = tmp0;
        head_0 = tmp1;
        prev_0 = tmp2;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function BytePacketBuilder(pool) {
    pool = pool === VOID ? Companion_getInstance_4().q1c_1 : pool;
    Output.call(this, pool);
  }
  protoOf(BytePacketBuilder).i = function () {
    return this.u1h();
  };
  protoOf(BytePacketBuilder).dq = function () {
    return this.u1h() === 0;
  };
  protoOf(BytePacketBuilder).v1h = function () {
  };
  protoOf(BytePacketBuilder).w1h = function (source, offset, length) {
  };
  protoOf(BytePacketBuilder).i6 = function (value) {
    var tmp = protoOf(Output).i6.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).b = function (value) {
    var tmp = protoOf(Output).b.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).bf = function (value, startIndex, endIndex) {
    var tmp = protoOf(Output).bf.call(this, value, startIndex, endIndex);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).u1a = function () {
    var size = this.i();
    var head = this.q16();
    return head == null ? Companion_getInstance_2().x1h_1 : new ByteReadPacket(head, toLong(size), this.i16_1);
  };
  protoOf(BytePacketBuilder).toString = function () {
    return 'BytePacketBuilder(' + this.i() + ' bytes written)';
  };
  function ByteReadPacket_init_$Init$(head, pool, $this) {
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_$Create$(head, pool) {
    return ByteReadPacket_init_$Init$(head, pool, objectCreate(protoOf(ByteReadPacket)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.x1h_1 = new ByteReadPacket(Companion_getInstance_4().s1c_1, new Long(0, 0), Companion_getInstance_4().r1c_1);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_2();
    Input.call(this, head, remaining, pool);
    this.b1i();
  }
  protoOf(ByteReadPacket).j1i = function () {
    return new ByteReadPacket(copyAll(this.y1h()), this.x18(), this.q18_1);
  };
  protoOf(ByteReadPacket).k1i = function () {
    return null;
  };
  protoOf(ByteReadPacket).l1i = function (destination, offset, length) {
    return 0;
  };
  protoOf(ByteReadPacket).m1i = function () {
  };
  protoOf(ByteReadPacket).toString = function () {
    return 'ByteReadPacket(' + toString(this.x18()) + ' bytes remaining)';
  };
  function _set__head__b4pap2($this, newHead) {
    $this.r18_1 = newHead;
    $this.s18_1 = newHead.k19_1;
    $this.t18_1 = newHead.l19_1;
    $this.u18_1 = newHead.m19_1;
  }
  function readASCII($this, out, min, max) {
    if (max === 0 ? min === 0 : false)
      return 0;
    else if ($this.e1c())
      if (min === 0)
        return 0;
      else {
        atLeastMinCharactersRequire($this, min);
      }
     else if (max < min) {
      minShouldBeLess($this, min, max);
    }
    var copied = 0;
    var utf8 = false;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII' call
            var tmp$ret$6;
            // Inline function 'io.ktor.utils.io.core.read' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$5;
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
            var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.k19_1;
            var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.l19_1;
            var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.m19_1;
            var inductionVariable = tmp1__anonymous__uwfjfc;
            if (inductionVariable < tmp2__anonymous__z9zvc9)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.bits.get' call
                var tmp$ret$1;
                // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                tmp$ret$1 = tmp0__anonymous__q1qw7t_0.f1g_1.getInt8(index);
                tmp$ret$2 = tmp$ret$1;
                var codepoint = tmp$ret$2 & 255;
                var tmp_0;
                if ((codepoint & 128) === 128) {
                  tmp_0 = true;
                } else {
                  var tmp$ret$3;
                  // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>.<anonymous>' call
                  var tmp3__anonymous__ufb84q = numberToChar(codepoint);
                  var tmp_1;
                  if (copied === max) {
                    tmp_1 = false;
                  } else {
                    out.i6(tmp3__anonymous__ufb84q);
                    var tmp0 = copied;
                    copied = tmp0 + 1 | 0;
                    tmp_1 = true;
                  }
                  tmp$ret$3 = tmp_1;
                  tmp_0 = !tmp$ret$3;
                }
                if (tmp_0) {
                  tmp0__anonymous__q1qw7t.g1g(index - tmp1__anonymous__uwfjfc | 0);
                  tmp$ret$4 = false;
                  break $l$block_0;
                }
              }
               while (inductionVariable < tmp2__anonymous__z9zvc9);
            tmp$ret$5 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
            var rc = tmp$ret$5;
            tmp0__anonymous__q1qw7t.g1g(rc);
            tmp$ret$6 = rc;
            tmp$ret$4 = true;
          }
          var rc_0 = tmp$ret$4;
          var tmp_2;
          if (rc_0) {
            tmp_2 = true;
          } else if (copied === max) {
            tmp_2 = false;
          } else {
            utf8 = true;
            tmp_2 = false;
          }
          tmp$ret$7 = tmp_2;
          if (!tmp$ret$7) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead($this, current);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var next = tmp_3;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (utf8) {
      return copied + readUtf8($this, out, min - copied | 0, max - copied | 0) | 0;
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function atLeastMinCharactersRequire($this, min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  }
  function minShouldBeLess($this, min, max) {
    throw IllegalArgumentException_init_$Create$('min should be less or equal to max but min = ' + min + ', max = ' + max);
  }
  function prematureEndOfStreamChars($this, min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  }
  function readUtf8($this, out, min, max) {
    var copied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop_0: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.m19_1 - tmp0__get_readRemaining__u3cy9h.l19_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$11;
              // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>' call
              var tmp3__anonymous__ufb84q = current;
              var tmp$ret$5;
              $l$block_3: {
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8' call
                var byteCount = 0;
                var value = 0;
                var lastByteCount = 0;
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
                var tmp0__anonymous__q1qw7t = tmp3__anonymous__ufb84q.k19_1;
                var tmp1__anonymous__uwfjfc = tmp3__anonymous__ufb84q.l19_1;
                var tmp2__anonymous__z9zvc9 = tmp3__anonymous__ufb84q.m19_1;
                var inductionVariable = tmp1__anonymous__uwfjfc;
                if (inductionVariable < tmp2__anonymous__z9zvc9)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var tmp$ret$3;
                    // Inline function 'io.ktor.utils.io.bits.get' call
                    var tmp$ret$2;
                    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                    tmp$ret$2 = tmp0__anonymous__q1qw7t.f1g_1.getInt8(index);
                    tmp$ret$3 = tmp$ret$2;
                    var v = tmp$ret$3 & 255;
                    if ((v & 128) === 0) {
                      if (!(byteCount === 0)) {
                        malformedByteCount(byteCount);
                      }
                      var tmp$ret$4;
                      // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                      var tmp3__anonymous__ufb84q_0 = numberToChar(v);
                      var tmp_0;
                      if (copied === max) {
                        tmp_0 = false;
                      } else {
                        out.i6(tmp3__anonymous__ufb84q_0);
                        var tmp0 = copied;
                        copied = tmp0 + 1 | 0;
                        tmp_0 = true;
                      }
                      tmp$ret$4 = tmp_0;
                      if (!tmp$ret$4) {
                        tmp3__anonymous__ufb84q.g1g(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = -1;
                        break $l$block_3;
                      }
                    } else if (byteCount === 0) {
                      var mask = 128;
                      value = v;
                      var inductionVariable_0 = 1;
                      if (inductionVariable_0 <= 6)
                        $l$loop: do {
                          var i = inductionVariable_0;
                          inductionVariable_0 = inductionVariable_0 + 1 | 0;
                          if (!((value & mask) === 0)) {
                            value = value & ~mask;
                            mask = mask >> 1;
                            var tmp2 = byteCount;
                            byteCount = tmp2 + 1 | 0;
                          } else {
                            break $l$loop;
                          }
                        }
                         while (inductionVariable_0 <= 6);
                      lastByteCount = byteCount;
                      var tmp3 = byteCount;
                      byteCount = tmp3 - 1 | 0;
                      if (lastByteCount > (tmp2__anonymous__z9zvc9 - index | 0)) {
                        tmp3__anonymous__ufb84q.g1g(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = lastByteCount;
                        break $l$block_3;
                      }
                    } else {
                      value = value << 6 | v & 127;
                      var tmp4 = byteCount;
                      byteCount = tmp4 - 1 | 0;
                      if (byteCount === 0) {
                        if (isBmpCodePoint(value)) {
                          var tmp$ret$6;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp4__anonymous__pkmkx7 = numberToChar(value);
                          var tmp_1;
                          if (copied === max) {
                            tmp_1 = false;
                          } else {
                            out.i6(tmp4__anonymous__pkmkx7);
                            var tmp0_0 = copied;
                            copied = tmp0_0 + 1 | 0;
                            tmp_1 = true;
                          }
                          tmp$ret$6 = tmp_1;
                          if (!tmp$ret$6) {
                            tmp3__anonymous__ufb84q.g1g(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        } else if (!isValidCodePoint(value)) {
                          malformedCodePoint(value);
                        } else {
                          var tmp_2;
                          var tmp$ret$7;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp5__anonymous__kpxxpo = numberToChar(highSurrogate(value));
                          var tmp_3;
                          if (copied === max) {
                            tmp_3 = false;
                          } else {
                            out.i6(tmp5__anonymous__kpxxpo);
                            var tmp0_1 = copied;
                            copied = tmp0_1 + 1 | 0;
                            tmp_3 = true;
                          }
                          tmp$ret$7 = tmp_3;
                          if (!tmp$ret$7) {
                            tmp_2 = true;
                          } else {
                            var tmp$ret$8;
                            // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                            var tmp6__anonymous__fv9ai5 = numberToChar(lowSurrogate(value));
                            var tmp_4;
                            if (copied === max) {
                              tmp_4 = false;
                            } else {
                              out.i6(tmp6__anonymous__fv9ai5);
                              var tmp0_2 = copied;
                              copied = tmp0_2 + 1 | 0;
                              tmp_4 = true;
                            }
                            tmp$ret$8 = tmp_4;
                            tmp_2 = !tmp$ret$8;
                          }
                          if (tmp_2) {
                            tmp3__anonymous__ufb84q.g1g(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        }
                        value = 0;
                      }
                    }
                  }
                   while (inductionVariable < tmp2__anonymous__z9zvc9);
                tmp$ret$9 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
                var rc = tmp$ret$9;
                tmp3__anonymous__ufb84q.g1g(rc);
                tmp$ret$10 = rc;
                tmp$ret$5 = 0;
              }
              var size_0 = tmp$ret$5;
              tmp$ret$11 = size_0 === 0 ? 1 : size_0 > 0 ? size_0 : 0;
              size = tmp$ret$11;
            }finally {
              var tmp$ret$12;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$12 = tmp1__get_readRemaining__qliyus.m19_1 - tmp1__get_readRemaining__qliyus.l19_1 | 0;
              after = tmp$ret$12;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_5;
          if (after === 0) {
            tmp_5 = prepareReadNextHead($this, current);
          } else {
            var tmp_6;
            if (after < size) {
              tmp_6 = true;
            } else {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$13 = tmp2__get_endGap__m31424.p19_1 - tmp2__get_endGap__m31424.o19_1 | 0;
              var tmp_7 = tmp$ret$13;
              Companion_getInstance_1();
              tmp_6 = tmp_7 < 8;
            }
            if (tmp_6) {
              completeReadHead($this, current);
              tmp_5 = prepareReadFirstHead($this, size);
            } else {
              tmp_5 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_5;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }
          var next = tmp_8;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var $this_0 = $this;
    var n_0 = n;
    var skipped_0 = skipped;
    $l$1: do {
      $l$0: do {
        if (n_0.equals(new Long(0, 0)))
          return skipped_0;
        var tmp0_elvis_lhs = $this_0.z1i(1);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return skipped_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var current = tmp;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = current.m19_1 - current.l19_1 | 0;
        var tmp0_minOf = toLong(tmp$ret$0);
        tmp$ret$1 = tmp0_minOf.u(n_0) <= 0 ? tmp0_minOf : n_0;
        var size = tmp$ret$1.u4();
        current.g1g(size);
        var tmp1_this = $this_0;
        tmp1_this.t18_1 = tmp1_this.t18_1 + size | 0;
        afterRead($this_0, current);
        var tmp0 = $this_0;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.minus' call
        tmp$ret$2 = n_0.n6(toLong(size));
        var tmp1 = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$3 = skipped_0.m6(toLong(size));
        var tmp2 = tmp$ret$3;
        $this_0 = tmp0;
        n_0 = tmp1;
        skipped_0 = tmp2;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function discardAsMuchAsPossible_0($this, n, skipped) {
    var currentCount = n;
    var currentSkipped = skipped;
    while (true) {
      if (currentCount === 0) {
        return currentSkipped;
      }
      var tmp0_elvis_lhs = $this.z1i(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return currentSkipped;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = current.m19_1 - current.l19_1 | 0;
      var tmp0_minOf = tmp$ret$0;
      var tmp1_minOf = currentCount;
      tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
      var size = tmp$ret$1;
      current.g1g(size);
      var tmp1_this = $this;
      tmp1_this.t18_1 = tmp1_this.t18_1 + size | 0;
      afterRead($this, current);
      currentCount = currentCount - size | 0;
      currentSkipped = currentSkipped + size | 0;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this.w18_1 ? current.n1h() == null : false) {
      $this.t18_1 = current.l19_1;
      $this.u18_1 = current.m19_1;
      $this.n1i(new Long(0, 0));
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.m19_1 - current.l19_1 | 0;
    var size = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.p19_1 - current.o19_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(size, tmp0_minOf);
    var overrun = tmp$ret$2;
    if (size > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size, overrun);
    } else {
      var new_0 = $this.q18_1.d1f();
      Companion_getInstance_1();
      new_0.f1f(8);
      new_0.t1h(current.s1h());
      writeBufferAppend(new_0, current, size);
      _set__head__b4pap2($this, new_0);
    }
    current.a1g($this.q18_1);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size, overrun) {
    var chunk1 = $this.q18_1.d1f();
    var chunk2 = $this.q18_1.d1f();
    Companion_getInstance_1();
    chunk1.f1f(8);
    Companion_getInstance_1();
    chunk2.f1f(8);
    chunk1.t1h(chunk2);
    chunk2.t1h(current.s1h());
    writeBufferAppend(chunk1, current, size - overrun | 0);
    writeBufferAppend(chunk2, current, overrun);
    _set__head__b4pap2($this, chunk1);
    $this.n1i(remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    $l$1: do {
      $l$0: do {
        if (current_0 === empty_0) {
          return doFill($this_0);
        }
        var next = current_0.s1h();
        current_0.a1g($this_0.q18_1);
        var tmp;
        if (next == null) {
          _set__head__b4pap2($this_0, empty_0);
          $this_0.n1i(new Long(0, 0));
          var tmp0 = $this_0;
          var tmp1 = empty_0;
          var tmp2 = empty_0;
          $this_0 = tmp0;
          current_0 = tmp1;
          empty_0 = tmp2;
          continue $l$0;
        } else {
          var tmp$ret$0;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$0 = next.m19_1 > next.l19_1;
          if (tmp$ret$0) {
            _set__head__b4pap2($this_0, next);
            var tmp0_this = $this_0;
            var tmp$ret$2;
            // Inline function 'kotlin.Long.minus' call
            var tmp0_minus = tmp0_this.v18_1;
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            tmp$ret$1 = next.m19_1 - next.l19_1 | 0;
            var tmp1_minus = tmp$ret$1;
            tmp$ret$2 = tmp0_minus.n6(toLong(tmp1_minus));
            tmp0_this.n1i(tmp$ret$2);
            tmp = next;
          } else {
            var tmp3 = $this_0;
            var tmp4 = next;
            var tmp5 = empty_0;
            $this_0 = tmp3;
            current_0 = tmp4;
            empty_0 = tmp5;
            continue $l$0;
          }
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function doFill($this) {
    if ($this.w18_1)
      return null;
    var chunk = $this.k1i();
    if (chunk == null) {
      $this.w18_1 = true;
      return null;
    }
    appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail($this.r18_1);
    if (tail === Companion_getInstance_4().s1c_1) {
      _set__head__b4pap2($this, chunk);
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.v18_1.equals(new Long(0, 0));
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
      }
      var tmp0_safe_receiver = chunk.n1h();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      $this.n1i(tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail.t1h(chunk);
      var tmp2_this = $this;
      tmp2_this.n1i(tmp2_this.v18_1.m6(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
        tmp$ret$0 = $this_0.u18_1 - $this_0.t18_1 | 0;
        var headSize = tmp$ret$0;
        if (headSize >= minSize_0)
          return head_0;
        var tmp0_elvis_lhs = head_0.n1h();
        var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_0) : tmp0_elvis_lhs;
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var next = tmp;
        if (headSize === 0) {
          if (!(head_0 === Companion_getInstance_4().s1c_1)) {
            $this_0.a1j(head_0);
          }
          var tmp0 = $this_0;
          var tmp1 = minSize_0;
          var tmp2 = next;
          $this_0 = tmp0;
          minSize_0 = tmp1;
          head_0 = tmp2;
          continue $l$0;
        } else {
          var desiredExtraBytes = minSize_0 - headSize | 0;
          var copied = writeBufferAppend(head_0, next, desiredExtraBytes);
          $this_0.u18_1 = head_0.m19_1;
          var tmp2_this = $this_0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.minus' call
          var tmp0_minus = tmp2_this.v18_1;
          tmp$ret$1 = tmp0_minus.n6(toLong(copied));
          tmp2_this.n1i(tmp$ret$1);
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$2 = next.m19_1 > next.l19_1;
          if (!tmp$ret$2) {
            head_0.t1h(null);
            head_0.t1h(next.s1h());
            next.a1g($this_0.q18_1);
          } else {
            next.l1g(copied);
          }
        }
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$3 = head_0.m19_1 - head_0.l19_1 | 0;
        if (tmp$ret$3 >= minSize_0)
          return head_0;
        var tmp_0 = minSize_0;
        Companion_getInstance_1();
        if (tmp_0 > 8) {
          minSizeIsTooBig($this_0, minSize_0);
        }
        var tmp3 = $this_0;
        var tmp4 = minSize_0;
        var tmp5 = head_0;
        $this_0 = tmp3;
        minSize_0 = tmp4;
        head_0 = tmp5;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function minSizeIsTooBig($this, minSize) {
    Companion_getInstance_1();
    throw IllegalStateException_init_$Create$('minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = head.m19_1 - head.l19_1 | 0;
    if (tmp$ret$0 === 0) {
      $this.a1j(head);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Input(head, remaining, pool) {
    Companion_getInstance_3();
    head = head === VOID ? Companion_getInstance_4().s1c_1 : head;
    remaining = remaining === VOID ? remainingAll(head) : remaining;
    pool = pool === VOID ? Companion_getInstance_4().q1c_1 : pool;
    this.q18_1 = pool;
    this.r18_1 = head;
    this.s18_1 = head.k19_1;
    this.t18_1 = head.l19_1;
    this.u18_1 = head.m19_1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = this.u18_1 - this.t18_1 | 0;
    tmp$ret$0 = remaining.n6(toLong(tmp0_minus));
    tmp.v18_1 = tmp$ret$0;
    this.w18_1 = false;
  }
  protoOf(Input).e1c = function () {
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.u18_1 - this.t18_1 | 0;
    if (tmp$ret$0 === 0) {
      tmp_0 = this.v18_1.equals(new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.w18_1 ? true : doFill(this) == null;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Input).y1h = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.r18_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.<get-head>.<anonymous>' call
    tmp0_also.j1g(this.t18_1);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(Input).n1i = function (newValue) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newValue.u(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.<set-tailRemaining>.<anonymous>' call
      tmp$ret$0 = "tailRemaining shouldn't be negative: " + toString(newValue);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v18_1 = newValue;
  };
  protoOf(Input).x18 = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.u18_1 - this.t18_1 | 0;
    return toLong(tmp$ret$0).m6(this.v18_1);
  };
  protoOf(Input).h1b = function () {
    return !(this.t18_1 === this.u18_1) ? true : !this.v18_1.equals(new Long(0, 0));
  };
  protoOf(Input).fp = function () {
    var head = this.y1h();
    var empty = Companion_getInstance_4().s1c_1;
    if (!(head === empty)) {
      _set__head__b4pap2(this, empty);
      this.n1i(new Long(0, 0));
      releaseAll(head, this.q18_1);
    }
  };
  protoOf(Input).c13 = function () {
    this.fp();
    if (!this.w18_1) {
      this.w18_1 = true;
    }
    this.m1i();
  };
  protoOf(Input).q16 = function () {
    var head = this.y1h();
    var empty = Companion_getInstance_4().s1c_1;
    if (head === empty)
      return null;
    _set__head__b4pap2(this, empty);
    this.n1i(new Long(0, 0));
    return head;
  };
  protoOf(Input).o1i = function () {
    var head = this.y1h();
    var next = head.n1h();
    var empty = Companion_getInstance_4().s1c_1;
    if (head === empty)
      return null;
    if (next == null) {
      _set__head__b4pap2(this, empty);
      this.n1i(new Long(0, 0));
    } else {
      _set__head__b4pap2(this, next);
      var tmp0_this = this;
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = tmp0_this.v18_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = next.m19_1 - next.l19_1 | 0;
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp0_minus.n6(toLong(tmp1_minus));
      tmp0_this.n1i(tmp$ret$1);
    }
    head.t1h(null);
    return head;
  };
  protoOf(Input).p1i = function (chain) {
    if (chain === Companion_getInstance_4().s1c_1)
      return Unit_getInstance();
    var size = remainingAll(chain);
    if (this.r18_1 === Companion_getInstance_4().s1c_1) {
      _set__head__b4pap2(this, chain);
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = this.u18_1 - this.t18_1 | 0;
      var tmp0_minus = tmp$ret$0;
      tmp$ret$1 = size.n6(toLong(tmp0_minus));
      this.n1i(tmp$ret$1);
    } else {
      findTail(this.r18_1).t1h(chain);
      var tmp0_this = this;
      tmp0_this.n1i(tmp0_this.v18_1.m6(size));
    }
  };
  protoOf(Input).q1i = function (chain) {
    var tail = findTail(this.y1h());
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = chain.m19_1 - chain.l19_1 | 0;
    var size = tmp$ret$0;
    var tmp;
    if (size === 0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = tail.o19_1 - tail.m19_1 | 0;
      tmp = tmp$ret$1 < size;
    }
    if (tmp)
      return false;
    writeBufferAppend(tail, chain, size);
    if (this.y1h() === tail) {
      this.u18_1 = tail.m19_1;
    } else {
      var tmp0_this = this;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = tmp0_this.v18_1;
      tmp$ret$2 = tmp0_plus.m6(toLong(size));
      tmp0_this.n1i(tmp$ret$2);
    }
    return true;
  };
  protoOf(Input).r1i = function (n) {
    // Inline function 'kotlin.require' call
    var tmp0_require = n >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.discard.<anonymous>' call
      tmp$ret$0 = 'Negative discard is not allowed: ' + n;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return discardAsMuchAsPossible_0(this, n, 0);
  };
  protoOf(Input).g1g = function (n) {
    if (!(this.r1i(n) === n))
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  protoOf(Input).s1i = function (n) {
    if (n.u(new Long(0, 0)) <= 0)
      return new Long(0, 0);
    return discardAsMuchAsPossible(this, n, new Long(0, 0));
  };
  protoOf(Input).t1i = function (min, max) {
    if (min === 0 ? max === 0 ? true : this.e1c() : false)
      return '';
    var remaining = this.x18();
    if (remaining.u(new Long(0, 0)) > 0 ? toLong(max).u(remaining) >= 0 : false)
      return readTextExactBytes(this, remaining.u4());
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    var tmp1_buildString = coerceAtMost(coerceAtLeast(min, 16), max);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp1_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.readText.<anonymous>' call
    readASCII(this, tmp0_apply, min, max);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  protoOf(Input).u1i = function (min, max, $super) {
    min = min === VOID ? 0 : min;
    max = max === VOID ? IntCompanionObject_getInstance().MAX_VALUE : max;
    return $super === VOID ? this.t1i(min, max) : $super.t1i.call(this, min, max);
  };
  protoOf(Input).v1i = function (minSize) {
    return prepareReadLoop(this, minSize, this.y1h());
  };
  protoOf(Input).w1i = function (current) {
    return this.x1i(current);
  };
  protoOf(Input).x1i = function (current) {
    return ensureNext(this, current, Companion_getInstance_4().s1c_1);
  };
  protoOf(Input).y1i = function (current) {
    var tmp0_elvis_lhs = current.n1h();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.m19_1 - current.l19_1 | 0;
    var remaining = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.p19_1 - current.o19_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(remaining, tmp0_minOf);
    var overrunSize = tmp$ret$2;
    if (next.n19_1 < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }
    restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.q1g();
      this.u18_1 = current.m19_1;
      var tmp1_this = this;
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = tmp1_this.v18_1;
      tmp$ret$3 = tmp1_plus.m6(toLong(overrunSize));
      tmp1_this.n1i(tmp$ret$3);
    } else {
      _set__head__b4pap2(this, next);
      var tmp2_this = this;
      var tmp$ret$5;
      // Inline function 'kotlin.Long.minus' call
      var tmp2_minus = tmp2_this.v18_1;
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$4 = next.m19_1 - next.l19_1 | 0;
      var tmp3_minus = tmp$ret$4 - overrunSize | 0;
      tmp$ret$5 = tmp2_minus.n6(toLong(tmp3_minus));
      tmp2_this.n1i(tmp$ret$5);
      current.s1h();
      current.a1g(this.q18_1);
    }
  };
  protoOf(Input).k1i = function () {
    var buffer = this.q18_1.d1f();
    try {
      Companion_getInstance_1();
      buffer.f1f(8);
      var tmp = buffer.m19_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = buffer.o19_1 - buffer.m19_1 | 0;
      var copied = this.l1i(buffer.k19_1, tmp, tmp$ret$0);
      if (copied === 0) {
        this.w18_1 = true;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.canRead' call
        tmp$ret$1 = buffer.m19_1 > buffer.l19_1;
        if (!tmp$ret$1) {
          buffer.a1g(this.q18_1);
          return null;
        }
      }
      buffer.h1g(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        buffer.a1g(this.q18_1);
        throw t;
      } else {
        throw $p;
      }
    }
  };
  protoOf(Input).b1i = function () {
    if (!this.w18_1) {
      this.w18_1 = true;
    }
  };
  protoOf(Input).z1i = function (minSize) {
    var head = this.y1h();
    if ((this.u18_1 - this.t18_1 | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  protoOf(Input).a1j = function (head) {
    var tmp0_elvis_lhs = head.s1h();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_4().s1c_1 : tmp0_elvis_lhs;
    _set__head__b4pap2(this, next);
    var tmp1_this = this;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = tmp1_this.v18_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = next.m19_1 - next.l19_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.n6(toLong(tmp1_minus));
    tmp1_this.n1i(tmp$ret$1);
    head.a1g(this.q18_1);
    return next;
  };
  function discard(_this__u8e3s4) {
    Companion_getInstance();
    return _this__u8e3s4.s1i(new Long(-1, 2147483647));
  }
  function readFully_1(_this__u8e3s4, dst, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? dst.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = offset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.m19_1 - tmp0__anonymous__q1qw7t.l19_1 | 0;
          var tmp1_minOf = tmp$ret$1;
          tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully(tmp0__anonymous__q1qw7t, dst, tmp1__anonymous__uwfjfc, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$3 = remaining > 0;
          if (!tmp$ret$3) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$4 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$4;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function readFully_2(_this__u8e3s4, dst, length) {
    var tmp;
    if (length === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = dst.o19_1 - dst.m19_1 | 0;
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = 0;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var current = tmp_0;
      try {
        $l$loop_0: do {
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$3;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$2 = tmp0__anonymous__q1qw7t.m19_1 - tmp0__anonymous__q1qw7t.l19_1 | 0;
          var tmp1_minOf = tmp$ret$2;
          tmp$ret$3 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully_0(tmp0__anonymous__q1qw7t, dst, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$4 = remaining > 0;
          if (!tmp$ret$4) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var next = tmp_1;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$5 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$5;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function readAvailable_0(_this__u8e3s4, destination, destinationOffset, length) {
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = destinationOffset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$5;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.m19_1 - tmp0__anonymous__q1qw7t.l19_1 | 0;
          var tmp1_minOf = toLong(tmp$ret$1);
          tmp$ret$2 = tmp0_minOf.u(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
          var count = tmp$ret$2.u4();
          // Inline function 'io.ktor.utils.io.core.readAvailable.<anonymous>' call
          var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.k19_1;
          var tmp2__anonymous__z9zvc9 = toLong(tmp0__anonymous__q1qw7t.l19_1);
          var tmp3__anonymous__ufb84q = dstOffset;
          tmp1__anonymous__uwfjfc.b1j(destination, tmp2__anonymous__z9zvc9, toLong(count), tmp3__anonymous__ufb84q);
          tmp0__anonymous__q1qw7t.g1g(count);
          var tmp$ret$3;
          // Inline function 'kotlin.Long.minus' call
          var tmp2_minus = remaining;
          tmp$ret$3 = tmp2_minus.n6(toLong(count));
          remaining = tmp$ret$3;
          var tmp$ret$4;
          // Inline function 'kotlin.Long.plus' call
          var tmp3_plus = dstOffset;
          tmp$ret$4 = tmp3_plus.m6(toLong(count));
          dstOffset = tmp$ret$4;
          tmp$ret$5 = remaining.u(new Long(0, 0)) > 0;
          if (!tmp$ret$5) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$6 = remaining;
    var remaining_0 = tmp$ret$6;
    var result = length.n6(remaining_0);
    return (result.equals(new Long(0, 0)) ? _this__u8e3s4.e1c() : false) ? new Long(-1, -1) : result;
  }
  function readAvailable_1(_this__u8e3s4, dst, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? dst.length - offset | 0 : length;
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = offset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.m19_1 - tmp0__anonymous__q1qw7t.l19_1 | 0;
          var tmp1_minOf = tmp$ret$1;
          tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.readAvailable.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully(tmp0__anonymous__q1qw7t, dst, tmp1__anonymous__uwfjfc, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$3 = remaining > 0;
          if (!tmp$ret$3) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$4 = remaining;
    return length - tmp$ret$4 | 0;
  }
  function readShort_0(_this__u8e3s4) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.readPrimitive' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = _this__u8e3s4.u18_1 - _this__u8e3s4.t18_1 | 0;
      if (tmp$ret$0 > 2) {
        var index = _this__u8e3s4.t18_1;
        _this__u8e3s4.t18_1 = index + 2 | 0;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.s18_1;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.f1g_1.getInt16(index, false);
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
      tmp$ret$4 = readShortFallback(_this__u8e3s4);
      tmp$ret$3 = tmp$ret$4;
    }
    return tmp$ret$3;
  }
  function readShortFallback(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readPrimitiveFallback' call
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readShortFallback.<anonymous>' call
    tmp$ret$0 = readShort(head);
    var value = tmp$ret$0;
    completeReadHead(_this__u8e3s4, head);
    tmp$ret$1 = value;
    return tmp$ret$1;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.q16();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      // Inline function 'io.ktor.utils.io.core.forEachChunk' call
      // Inline function 'kotlin.contracts.contract' call
      var current = oldTail;
      $l$loop: do {
        // Inline function 'io.ktor.utils.io.core.Output.flushChain.<anonymous>' call
        var tmp0__anonymous__q1qw7t = current;
        var tmp_0 = tmp0__anonymous__q1qw7t.l19_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.m19_1 - tmp0__anonymous__q1qw7t.l19_1 | 0;
        $this.w1h(tmp0__anonymous__q1qw7t.k19_1, tmp_0, tmp$ret$0);
        var tmp0_elvis_lhs_0 = current.n1h();
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          break $l$loop;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        current = tmp_1;
      }
       while (true);
    }finally {
      releaseAll(oldTail, $this.i16_1);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this.i16_1.d1f();
    Companion_getInstance_1();
    new_0.f1f(8);
    $this.c1g(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = $this.k16_1;
    if (_tail == null) {
      $this.j16_1 = head;
      $this.p16_1 = 0;
    } else {
      _tail.t1h(head);
      var tailPosition = $this.m16_1;
      _tail.i1g(tailPosition);
      var tmp0_this = $this;
      tmp0_this.p16_1 = tmp0_this.p16_1 + (tailPosition - $this.o16_1 | 0) | 0;
    }
    $this.k16_1 = newTail;
    var tmp1_this = $this;
    tmp1_this.p16_1 = tmp1_this.p16_1 + chainedSizeDelta | 0;
    $this.l16_1 = newTail.k19_1;
    $this.m16_1 = newTail.m19_1;
    $this.o16_1 = newTail.l19_1;
    $this.n16_1 = newTail.o19_1;
  }
  function writeByteFallback($this, v) {
    appendNewChunk($this).t1g(v);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.m16_1;
    tmp0_this.m16_1 = tmp1 + 1 | 0;
  }
  function appendCharFallback($this, c) {
    var tmp$ret$13;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.Output.write' call
      var buffer = $this.j17(3);
      try {
        var tmp$ret$11;
        // Inline function 'io.ktor.utils.io.core.Output.appendCharFallback.<anonymous>' call
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
        var tmp16_putUtf8Char = buffer.k19_1;
        var tmp17_putUtf8Char = buffer.m19_1;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(c);
        var tmp18_putUtf8Char = tmp$ret$0;
        var tmp0_subject = tmp18_putUtf8Char;
        var tmp;
        if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
          // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
          var tmp0_storeAt = toByte(tmp18_putUtf8Char);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp17_putUtf8Char, tmp0_storeAt);
          tmp = 1;
        } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp1_set = toByte(192 | tmp18_putUtf8Char >> 6 & 31);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp17_putUtf8Char, tmp1_set);
          tmp$ret$1 = Unit_getInstance();
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp2_set = tmp17_putUtf8Char + 1 | 0;
          var tmp3_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp2_set, tmp3_set);
          tmp$ret$2 = Unit_getInstance();
          tmp = 2;
        } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp4_set = toByte(224 | tmp18_putUtf8Char >> 12 & 15);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp17_putUtf8Char, tmp4_set);
          tmp$ret$3 = Unit_getInstance();
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp5_set = tmp17_putUtf8Char + 1 | 0;
          var tmp6_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp5_set, tmp6_set);
          tmp$ret$4 = Unit_getInstance();
          var tmp$ret$5;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp7_set = tmp17_putUtf8Char + 2 | 0;
          var tmp8_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp7_set, tmp8_set);
          tmp$ret$5 = Unit_getInstance();
          tmp = 3;
        } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
          var tmp$ret$6;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp9_set = toByte(240 | tmp18_putUtf8Char >> 18 & 7);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp17_putUtf8Char, tmp9_set);
          tmp$ret$6 = Unit_getInstance();
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp10_set = tmp17_putUtf8Char + 1 | 0;
          var tmp11_set = toByte(128 | tmp18_putUtf8Char >> 12 & 63);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp10_set, tmp11_set);
          tmp$ret$7 = Unit_getInstance();
          var tmp$ret$8;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp12_set = tmp17_putUtf8Char + 2 | 0;
          var tmp13_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp12_set, tmp13_set);
          tmp$ret$8 = Unit_getInstance();
          var tmp$ret$9;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp14_set = tmp17_putUtf8Char + 3 | 0;
          var tmp15_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.f1g_1.setInt8(tmp14_set, tmp15_set);
          tmp$ret$9 = Unit_getInstance();
          tmp = 4;
        } else {
          malformedCodePoint(tmp18_putUtf8Char);
        }
        tmp$ret$10 = tmp;
        var size = tmp$ret$10;
        buffer.h1g(size);
        tmp$ret$11 = size;
        var result = tmp$ret$11;
        // Inline function 'kotlin.check' call
        var tmp0_check = result >= 0;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$12;
          // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
          tmp$ret$12 = "The returned value shouldn't be negative";
          var message = tmp$ret$12;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        tmp$ret$13 = result;
        break $l$block;
      }finally {
        $this.c1d();
      }
    }
  }
  function writePacketMerging($this, tail, foreignStolen, pool) {
    tail.i1g($this.m16_1);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.m19_1 - tail.l19_1 | 0;
    var lastSize = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = foreignStolen.m19_1 - foreignStolen.l19_1 | 0;
    var nextSize = tmp$ret$1;
    var maxCopySize = get_PACKET_MAX_COPY_SIZE();
    var tmp;
    var tmp_0;
    if (nextSize < maxCopySize) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$2 = tail.p19_1 - tail.o19_1 | 0;
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$3 = tail.o19_1 - tail.m19_1 | 0;
      tmp_0 = nextSize <= (tmp_1 + tmp$ret$3 | 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = nextSize;
    } else {
      tmp = -1;
    }
    var appendSize = tmp;
    var tmp_2;
    if ((lastSize < maxCopySize ? lastSize <= foreignStolen.n19_1 : false) ? isExclusivelyOwned(foreignStolen) : false) {
      tmp_2 = lastSize;
    } else {
      tmp_2 = -1;
    }
    var prependSize = tmp_2;
    if (appendSize === -1 ? prependSize === -1 : false) {
      $this.z1h(foreignStolen);
    } else if (prependSize === -1 ? true : appendSize <= prependSize) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$4 = tail.o19_1 - tail.m19_1 | 0;
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$5 = tail.p19_1 - tail.o19_1 | 0;
      writeBufferAppend(tail, foreignStolen, tmp_3 + tmp$ret$5 | 0);
      $this.c1d();
      var tmp0_safe_receiver = foreignStolen.s1h();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this.z1h(tmp0_safe_receiver);
        tmp$ret$6 = Unit_getInstance();
      }
      foreignStolen.a1g(pool);
    } else if (appendSize === -1 ? true : prependSize < appendSize) {
      writePacketSlowPrepend($this, foreignStolen, tail);
    } else {
      throw IllegalStateException_init_$Create$('prep = ' + prependSize + ', app = ' + appendSize);
    }
  }
  function writePacketSlowPrepend($this, foreignStolen, tail) {
    writeBufferPrepend(foreignStolen, tail);
    var tmp0_elvis_lhs = $this.j16_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("head should't be null since it is already handled in the fast-path");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _head = tmp;
    if (_head === tail) {
      $this.j16_1 = foreignStolen;
    } else {
      var pre = _head;
      $l$loop: while (true) {
        var next = ensureNotNull(pre.n1h());
        if (next === tail)
          break $l$loop;
        pre = next;
      }
      pre.t1h(foreignStolen);
    }
    tail.a1g($this.i16_1);
    $this.k16_1 = findTail(foreignStolen);
  }
  function Output(pool) {
    this.i16_1 = pool;
    this.j16_1 = null;
    this.k16_1 = null;
    this.l16_1 = Companion_getInstance_6().c1j_1;
    this.m16_1 = 0;
    this.n16_1 = 0;
    this.o16_1 = 0;
    this.p16_1 = 0;
  }
  protoOf(Output).u1h = function () {
    return this.p16_1 + (this.m16_1 - this.o16_1 | 0) | 0;
  };
  protoOf(Output).y1h = function () {
    var tmp0_elvis_lhs = this.j16_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_4().s1c_1 : tmp0_elvis_lhs;
  };
  protoOf(Output).w1c = function () {
    flushChain(this);
  };
  protoOf(Output).q16 = function () {
    var tmp0_elvis_lhs = this.j16_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = this.k16_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.i1g(this.m16_1);
    this.j16_1 = null;
    this.k16_1 = null;
    this.m16_1 = 0;
    this.n16_1 = 0;
    this.o16_1 = 0;
    this.p16_1 = 0;
    this.l16_1 = Companion_getInstance_6().c1j_1;
    return head;
  };
  protoOf(Output).c1g = function (buffer) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffer.n1h() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Output.appendSingleChunk.<anonymous>' call
      tmp$ret$0 = 'It should be a single buffer chunk.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    appendChainImpl(this, buffer, buffer, 0);
  };
  protoOf(Output).z1h = function (head) {
    var tail = findTail(head);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = remainingAll(head);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.m19_1 - tail.l19_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.n6(toLong(tmp1_minus));
    var tmp2_toIntOrFail = tmp$ret$1;
    if (tmp2_toIntOrFail.u(toLong(IntCompanionObject_getInstance().MAX_VALUE)) >= 0) {
      failLongToIntConversion(tmp2_toIntOrFail, 'total size increase');
    }
    tmp$ret$2 = tmp2_toIntOrFail.u4();
    var chainedSizeDelta = tmp$ret$2;
    appendChainImpl(this, head, tail, chainedSizeDelta);
  };
  protoOf(Output).t1g = function (v) {
    var index = this.m16_1;
    if (index < this.n16_1) {
      this.m16_1 = index + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp0_set = this.l16_1;
      tmp0_set.f1g_1.setInt8(index, v);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    }
    return writeByteFallback(this, v);
  };
  protoOf(Output).c13 = function () {
    try {
      this.w1c();
    }finally {
      this.v1h();
    }
  };
  protoOf(Output).i6 = function (value) {
    var tailPosition = this.m16_1;
    if ((this.n16_1 - tailPosition | 0) >= 3) {
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp16_putUtf8Char = this.l16_1;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(value);
      var tmp17_putUtf8Char = tmp$ret$0;
      var tmp0_subject = tmp17_putUtf8Char;
      var tmp;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(tmp17_putUtf8Char);
        tmp16_putUtf8Char.f1g_1.setInt8(tailPosition, tmp0_storeAt);
        tmp = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | tmp17_putUtf8Char >> 6 & 31);
        tmp16_putUtf8Char.f1g_1.setInt8(tailPosition, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tailPosition + 1 | 0;
        var tmp3_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.f1g_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | tmp17_putUtf8Char >> 12 & 15);
        tmp16_putUtf8Char.f1g_1.setInt8(tailPosition, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tailPosition + 1 | 0;
        var tmp6_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.f1g_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tailPosition + 2 | 0;
        var tmp8_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.f1g_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | tmp17_putUtf8Char >> 18 & 7);
        tmp16_putUtf8Char.f1g_1.setInt8(tailPosition, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tailPosition + 1 | 0;
        var tmp11_set = toByte(128 | tmp17_putUtf8Char >> 12 & 63);
        tmp16_putUtf8Char.f1g_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tailPosition + 2 | 0;
        var tmp13_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.f1g_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tailPosition + 3 | 0;
        var tmp15_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.f1g_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp = 4;
      } else {
        malformedCodePoint(tmp17_putUtf8Char);
      }
      tmp$ret$10 = tmp;
      var size = tmp$ret$10;
      this.m16_1 = tailPosition + size | 0;
      return this;
    }
    appendCharFallback(this, value);
    return this;
  };
  protoOf(Output).b = function (value) {
    if (value == null) {
      this.bf('null', 0, 4);
    } else {
      this.bf(value, 0, charSequenceLength(value));
    }
    return this;
  };
  protoOf(Output).bf = function (value, startIndex, endIndex) {
    if (value == null) {
      return this.bf('null', startIndex, endIndex);
    }
    writeText(this, value, startIndex, endIndex, Charsets_getInstance().d1j_1);
    return this;
  };
  protoOf(Output).y18 = function (packet) {
    var foreignStolen = packet.q16();
    if (foreignStolen == null) {
      packet.fp();
      return Unit_getInstance();
    }
    var tail = this.k16_1;
    if (tail == null) {
      this.z1h(foreignStolen);
      return Unit_getInstance();
    }
    writePacketMerging(this, tail, foreignStolen, packet.q18_1);
  };
  protoOf(Output).r16 = function (chunkBuffer) {
    var _tail = this.k16_1;
    if (_tail == null) {
      this.z1h(chunkBuffer);
      return Unit_getInstance();
    }
    writePacketMerging(this, _tail, chunkBuffer, this.i16_1);
  };
  protoOf(Output).s1a = function (p, n) {
    var remaining = n;
    $l$loop: while (remaining.u(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = p.u18_1 - p.t18_1 | 0;
      var headRemaining = toLong(tmp$ret$0);
      if (headRemaining.u(remaining) <= 0) {
        remaining = remaining.n6(headRemaining);
        var tmp0_elvis_lhs = p.o1i();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new EOFException('Unexpected end of packet');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        this.c1g(tmp);
      } else {
        // Inline function 'io.ktor.utils.io.core.read' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_elvis_lhs_0 = p.z1i(1);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          prematureEndOfStream(1);
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var buffer = tmp_0;
        var positionBefore = buffer.l19_1;
        try {
          // Inline function 'io.ktor.utils.io.core.Output.writePacket.<anonymous>' call
          writeFully_2(this, buffer, remaining.u4());
        }finally {
          var positionAfter = buffer.l19_1;
          if (positionAfter < positionBefore) {
            throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
          }
          if (positionAfter === buffer.m19_1) {
            p.x1i(buffer);
          } else {
            p.t18_1 = positionAfter;
          }
        }
        break $l$loop;
      }
    }
  };
  protoOf(Output).fp = function () {
    this.c13();
  };
  protoOf(Output).j17 = function (n) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Output.tailRemaining' call
    tmp$ret$0 = this.n16_1 - this.m16_1 | 0;
    if (tmp$ret$0 >= n) {
      var tmp0_safe_receiver = this.k16_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.i1g(this.m16_1);
        return tmp0_safe_receiver;
      }
    }
    return appendNewChunk(this);
  };
  protoOf(Output).c1d = function () {
    var tmp0_safe_receiver = this.k16_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.m16_1 = tmp0_safe_receiver.m19_1;
      tmp$ret$0 = Unit_getInstance();
    }
  };
  protoOf(Output).a1i = function () {
    var head = this.y1h();
    if (!(head === Companion_getInstance_4().s1c_1)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = head.n1h() == null;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$0 = 'Check failed.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      head.e1f();
      Companion_getInstance_1();
      head.f1f(8);
      this.m16_1 = head.m19_1;
      this.o16_1 = this.m16_1;
      this.n16_1 = head.o19_1;
    }
  };
  function writeFully_2(_this__u8e3s4, src, length) {
    var tmp;
    if (length === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = src.m19_1 - src.l19_1 | 0;
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = 0;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$2;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.o19_1 - tmp0__anonymous__q1qw7t.m19_1 | 0;
        var tmp1_minOf = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_1(tmp0__anonymous__q1qw7t, src, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$3 = remaining > 0;
        if (!tmp$ret$3)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.c1d();
    }
  }
  function writeFully_3(_this__u8e3s4, src, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? src.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.o19_1 - tmp0__anonymous__q1qw7t.m19_1 | 0;
        var tmp1_minOf = tmp$ret$0;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_0(tmp0__anonymous__q1qw7t, src, tmp1__anonymous__uwfjfc, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$2 = remaining > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.c1d();
    }
  }
  function writeShort_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.writePrimitiveTemplate' call
      var index = _this__u8e3s4.m16_1;
      if ((_this__u8e3s4.n16_1 - index | 0) > 2) {
        _this__u8e3s4.m16_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.l16_1;
        // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
        tmp0__anonymous__q1qw7t.f1g_1.setInt16(index, value, false);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    if (!tmp$ret$0) {
      writeShortFallback(_this__u8e3s4, value);
    }
  }
  function writeShortFallback(_this__u8e3s4, value) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writePrimitiveFallbackTemplate' call
    var tail = _this__u8e3s4.j17(2);
    // Inline function 'io.ktor.utils.io.core.writeShortFallback.<anonymous>' call
    writeShort(tail, value);
    _this__u8e3s4.c1d();
    tmp$ret$0 = true;
    if (!tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.highByte' call
      tmp$ret$1 = toByte(value >>> 8 | 0);
      _this__u8e3s4.t1g(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.bits.lowByte' call
      tmp$ret$2 = toByte(value & 255);
      _this__u8e3s4.t1g(tmp$ret$2);
    }
  }
  function readText(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().d1j_1 : charset;
    max = max === VOID ? IntCompanionObject_getInstance().MAX_VALUE : max;
    return decode(charset.g1j(), _this__u8e3s4, max);
  }
  function readBytes(_this__u8e3s4, n) {
    var tmp;
    if (n === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.coerceAtMostMaxIntOrFail' call
      var tmp0_coerceAtMostMaxIntOrFail = _this__u8e3s4.x18();
      if (tmp0_coerceAtMostMaxIntOrFail.u(toLong(IntCompanionObject_getInstance().MAX_VALUE)) > 0)
        throw IllegalArgumentException_init_$Create$('Unable to convert to a ByteArray: packet is too big');
      tmp$ret$0 = tmp0_coerceAtMostMaxIntOrFail.u4();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = n;
    }
    n = tmp;
    var tmp_0;
    if (!(n === 0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Int8Array(n);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.core.readBytes.<anonymous>' call
      readFully_1(_this__u8e3s4, tmp0_also, 0, n);
      tmp$ret$1 = tmp0_also;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = get_EmptyByteArray();
    }
    return tmp_0;
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readTextExactBytes(_this__u8e3s4, bytesCount, charset) {
    charset = charset === VOID ? Charsets_getInstance().d1j_1 : charset;
    return decodeExactBytes(charset.g1j(), _this__u8e3s4, bytesCount);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().d1j_1 : charset;
    if (charset === Charsets_getInstance().d1j_1) {
      return writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.h1j(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex) {
    var index = fromIndex;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeTextUtf8.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var memory = tmp0__anonymous__q1qw7t.k19_1;
        var dstOffset = tmp0__anonymous__q1qw7t.m19_1;
        var dstLimit = tmp0__anonymous__q1qw7t.o19_1;
        var tmp0_container = encodeUTF8(memory, text, index, toIndex, dstOffset, dstLimit);
        var characters = EncodeResult__component1_impl_36tlhi(tmp0_container);
        var bytes = EncodeResult__component2_impl_3nv7vp(tmp0_container);
        var tmp = index;
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
        index = tmp + tmp$ret$0 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
        tmp0__anonymous__q1qw7t.h1g(tmp$ret$1);
        var tmp_0;
        var tmp_1;
        var tmp$ret$2;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$2 = _UShort___get_data__impl__g0245(characters) & 65535;
        if (tmp$ret$2 === 0) {
          tmp_1 = index < toIndex;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = 8;
        } else {
          if (index < toIndex) {
            tmp_0 = 1;
          } else {
            tmp_0 = 0;
          }
        }
        tmp$ret$3 = tmp_0;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.c1d();
    }
  }
  function readBytes_0(_this__u8e3s4) {
    return readBytesOf(_this__u8e3s4);
  }
  function readBytesOf(_this__u8e3s4, min, max) {
    min = min === VOID ? 0 : min;
    max = max === VOID ? IntCompanionObject_getInstance().MAX_VALUE : max;
    var tmp;
    if (min === max ? min === 0 : false) {
      tmp = get_EmptyByteArray();
    } else if (min === max) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Int8Array(min);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.core.readBytesOf.<anonymous>' call
      readFully_1(_this__u8e3s4, tmp0_also, 0, min);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      var array = new Int8Array(coerceAtLeast_0(coerceAtMost_0(toLong(max), sizeEstimate(_this__u8e3s4)), toLong(min)).u4());
      var size = 0;
      $l$loop: while (size < max) {
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp1_minOf = array.length;
        tmp$ret$1 = Math.min(max, tmp1_minOf);
        var partSize = tmp$ret$1 - size | 0;
        var rc = readAvailable_1(_this__u8e3s4, array, size, partSize);
        if (rc <= 0)
          break $l$loop;
        size = size + rc | 0;
        if (array.length === size) {
          array = copyOf(array, imul(size, 2));
        }
      }
      if (size < min) {
        throw new EOFException('Not enough bytes available to read ' + min + ' bytes: ' + (min - size | 0) + ' more required');
      }
      tmp = size === array.length ? array : copyOf(array, size);
    }
    return tmp;
  }
  function ChunkBuffer$Companion$Pool$1() {
  }
  protoOf(ChunkBuffer$Companion$Pool$1).d1f = function () {
    return get_DefaultChunkedBufferPool().d1f();
  };
  protoOf(ChunkBuffer$Companion$Pool$1).i1j = function (instance) {
    get_DefaultChunkedBufferPool().r1h(instance);
  };
  protoOf(ChunkBuffer$Companion$Pool$1).r1h = function (instance) {
    return this.i1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(ChunkBuffer$Companion$Pool$1).jm = function () {
    get_DefaultChunkedBufferPool().jm();
  };
  function ChunkBuffer$Companion$EmptyPool$1() {
  }
  protoOf(ChunkBuffer$Companion$EmptyPool$1).d1f = function () {
    return Companion_getInstance_4().s1c_1;
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).i1j = function (instance) {
    // Inline function 'kotlin.require' call
    var tmp0_require = instance === Companion_getInstance_4().s1c_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.<no name provided>.recycle.<anonymous>' call
      tmp$ret$0 = 'Only ChunkBuffer.Empty instance could be recycled.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).r1h = function (instance) {
    return this.i1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).jm = function () {
  };
  function ChunkBuffer$Companion$NoPool$1() {
    NoPoolImpl.call(this);
  }
  protoOf(ChunkBuffer$Companion$NoPool$1).d1f = function () {
    return new ChunkBuffer(DefaultAllocator_getInstance().c1h(get_DEFAULT_BUFFER_SIZE()), null, this);
  };
  protoOf(ChunkBuffer$Companion$NoPool$1).i1j = function (instance) {
    DefaultAllocator_getInstance().e1h(instance.k19_1);
  };
  protoOf(ChunkBuffer$Companion$NoPool$1).r1h = function (instance) {
    return this.i1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function ChunkBuffer$Companion$NoPoolManuallyManaged$1() {
    NoPoolImpl.call(this);
  }
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).d1f = function () {
    throw UnsupportedOperationException_init_$Create$("This pool doesn't support borrow");
  };
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).i1j = function (instance) {
  };
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).r1h = function (instance) {
    return this.i1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function appendNext($this, chunk) {
    if (!$this.x1f_1.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.q1c_1 = new ChunkBuffer$Companion$Pool$1();
    var tmp_0 = this;
    tmp_0.r1c_1 = new ChunkBuffer$Companion$EmptyPool$1();
    this.s1c_1 = new ChunkBuffer(Companion_getInstance_6().c1j_1, null, this.r1c_1);
    var tmp_1 = this;
    tmp_1.t1c_1 = new ChunkBuffer$Companion$NoPool$1();
    var tmp_2 = this;
    tmp_2.u1c_1 = new ChunkBuffer$Companion$NoPoolManuallyManaged$1();
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_4();
    Buffer.call(this, memory);
    this.w1f_1 = parentPool;
    // Inline function 'kotlin.require' call
    var tmp0_require = !(origin === this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.<anonymous>' call
      tmp$ret$0 = "A chunk couldn't be a view of itself.";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.x1f_1 = atomic$ref$1(null);
    this.y1f_1 = atomic$int$1(1);
    this.z1f_1 = origin;
  }
  protoOf(ChunkBuffer).t1h = function (newValue) {
    if (newValue == null) {
      this.s1h();
    } else {
      appendNext(this, newValue);
    }
  };
  protoOf(ChunkBuffer).n1h = function () {
    return this.x1f_1.kotlinx$atomicfu$value;
  };
  protoOf(ChunkBuffer).m1h = function () {
    return this.y1f_1.kotlinx$atomicfu$value;
  };
  protoOf(ChunkBuffer).s1h = function () {
    return this.x1f_1.atomicfu$getAndSet(null);
  };
  protoOf(ChunkBuffer).b1g = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_elvis_lhs = this.z1f_1;
    var tmp0_let = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>' call
    tmp0_let.j1j();
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ChunkBuffer(this.k19_1, tmp0_let, this.w1f_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>.<anonymous>' call
    this.r1g(tmp0_also);
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(ChunkBuffer).a1g = function (pool) {
    if (this.k1j()) {
      var origin = this.z1f_1;
      if (!(origin == null)) {
        this.j1h();
        origin.a1g(pool);
      } else {
        var tmp0_elvis_lhs = this.w1f_1;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.r1h(this);
      }
    }
  };
  protoOf(ChunkBuffer).j1h = function () {
    if (!this.y1f_1.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }
    this.s1h();
    this.z1f_1 = null;
  };
  protoOf(ChunkBuffer).j1j = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.y1f_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.acquire.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
        tmp$ret$0 = cur + 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  protoOf(ChunkBuffer).q1h = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.y1f_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.unpark.<anonymous>' call
        if (cur < 0) {
          throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
        }
        if (cur > 0) {
          throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
        }
        tmp$ret$0 = 1;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  protoOf(ChunkBuffer).k1j = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = this.y1f_1;
      while (true) {
        var cur = tmp0_updateAndGet.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.release.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
        tmp$ret$0 = cur - 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1 === 0;
  };
  protoOf(ChunkBuffer).u1g = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.z1f_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.reset.<anonymous>' call
      tmp$ret$0 = 'Unable to reset buffer with origin';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    protoOf(Buffer).u1g.call(this);
    this.x1f_1.kotlinx$atomicfu$value = null;
  };
  function isExclusivelyOwned(_this__u8e3s4) {
    return _this__u8e3s4.m1h() === 1;
  }
  function _EncodeResult___init__impl__vkc0cy(value) {
    return value;
  }
  function _EncodeResult___get_value__impl__h0r466($this) {
    return $this;
  }
  function _EncodeResult___init__impl__vkc0cy_0(characters, bytes) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
    var tmp = tmp$ret$0 << 16;
    var tmp$ret$1;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
    var tmp_0 = _EncodeResult___init__impl__vkc0cy(tmp | tmp$ret$1);
    return tmp_0;
  }
  function _EncodeResult___get_characters__impl__rrxzcv($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.highShort' call
    var tmp0__get_highShort__24misv = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_highShort__24misv >>> 16 | 0);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function _EncodeResult___get_bytes__impl__bt0kq0($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.lowShort' call
    var tmp0__get_lowShort__5ljr93 = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_lowShort__5ljr93 & 65535);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function EncodeResult__component1_impl_36tlhi($this) {
    return _EncodeResult___get_characters__impl__rrxzcv($this);
  }
  function EncodeResult__component2_impl_3nv7vp($this) {
    return _EncodeResult___get_bytes__impl__bt0kq0($this);
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('Long value ' + toString(value) + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function MalformedUTF8InputException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedUTF8InputException);
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function isBmpCodePoint(cp) {
    return (cp >>> 16 | 0) === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('Malformed code-point ' + value + ' found');
  }
  function highSurrogate(cp) {
    return (cp >>> 10 | 0) + 55232 | 0;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function encodeUTF8(_this__u8e3s4, text, from, to, dstOffset, dstLimit) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp0_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toInt) & 65535;
    var tmp1_minOf = from + tmp$ret$0 | 0;
    tmp$ret$1 = Math.min(to, tmp1_minOf);
    var lastCharIndex = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp2_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$2 = _UShort___get_data__impl__g0245(tmp2_toInt) & 65535;
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$loop: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        var tmp$ret$3;
        // Inline function 'kotlin.toUShort' call
        var tmp3_toUShort = index - from | 0;
        tmp$ret$3 = _UShort___init__impl__jigrne(toShort(tmp3_toUShort));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.toUShort' call
        var tmp4_toUShort = resultPosition - dstOffset | 0;
        tmp$ret$4 = _UShort___init__impl__jigrne(toShort(tmp4_toUShort));
        return _EncodeResult___init__impl__vkc0cy_0(tmp, tmp$ret$4);
      }
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var tmp5__get_code__iwzzkv = charSequenceGet(text, tmp0);
      tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
      var character = tmp$ret$5 & 65535;
      if ((character & 65408) === 0) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp1 = resultPosition;
        resultPosition = tmp1 + 1 | 0;
        var tmp6_storeAt = tmp1;
        var tmp7_storeAt = toByte(character);
        _this__u8e3s4.f1g_1.setInt8(tmp6_storeAt, tmp7_storeAt);
      } else {
        break $l$loop;
      }
    }
     while (true);
    var tmp2 = index;
    index = tmp2 - 1 | 0;
    return encodeUTF8Stage1(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$loop: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      }
      var codepoint = tmp;
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp16_putUtf8Char = resultPosition;
      var tmp0_subject = codepoint;
      var tmp_1;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.f1g_1.setInt8(tmp16_putUtf8Char, tmp0_storeAt);
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.f1g_1.setInt8(tmp16_putUtf8Char, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp16_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.f1g_1.setInt8(tmp16_putUtf8Char, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp16_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp16_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.f1g_1.setInt8(tmp16_putUtf8Char, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp16_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp16_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp16_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$10 = tmp_1;
      var size = tmp$ret$10;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.toUShort' call
    var tmp17_toUShort = index - from | 0;
    tmp$ret$11 = _UShort___init__impl__jigrne(toShort(tmp17_toUShort));
    var tmp_2 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp18_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp18_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_2, tmp$ret$12);
  }
  function codePoint(high, low) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(high);
    var highValue = tmp$ret$0 - 55232 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = Char__toInt_impl_vasixd(low);
    var lowValue = tmp$ret$1 - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$loop_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop_0;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.internal.charactersSize' call
      var tmp0_subject = codepoint;
      var tmp_1;
      if (1 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$1 = tmp_1;
      if (tmp$ret$1 > freeSpace) {
        var tmp2 = index;
        index = tmp2 - 1 | 0;
        break $l$loop_0;
      }
      var tmp$ret$11;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp16_putUtf8Char = resultPosition;
      var tmp0_subject_0 = codepoint;
      var tmp_2;
      if (0 <= tmp0_subject_0 ? tmp0_subject_0 <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.f1g_1.setInt8(tmp16_putUtf8Char, tmp0_storeAt);
        tmp_2 = 1;
      } else if (128 <= tmp0_subject_0 ? tmp0_subject_0 <= 2047 : false) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.f1g_1.setInt8(tmp16_putUtf8Char, tmp1_set);
        tmp$ret$2 = Unit_getInstance();
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp16_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$3 = Unit_getInstance();
        tmp_2 = 2;
      } else if (2048 <= tmp0_subject_0 ? tmp0_subject_0 <= 65535 : false) {
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.f1g_1.setInt8(tmp16_putUtf8Char, tmp4_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp16_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$5 = Unit_getInstance();
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp16_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$6 = Unit_getInstance();
        tmp_2 = 3;
      } else if (65536 <= tmp0_subject_0 ? tmp0_subject_0 <= 1114111 : false) {
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.f1g_1.setInt8(tmp16_putUtf8Char, tmp9_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp16_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp16_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$9 = Unit_getInstance();
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp16_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.f1g_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$10 = Unit_getInstance();
        tmp_2 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$11 = tmp_2;
      var size = tmp$ret$11;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp17_toUShort = index - from | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp17_toUShort));
    var tmp_3 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'kotlin.toUShort' call
    var tmp18_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$13 = _UShort___init__impl__jigrne(toShort(tmp18_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_3, tmp$ret$13);
  }
  function get_EmptyByteArray() {
    _init_properties_Unsafe_kt__orlvcq();
    return EmptyByteArray;
  }
  var EmptyByteArray;
  function completeReadHead(_this__u8e3s4, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (current === _this__u8e3s4)
      return Unit_getInstance();
    else {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.canRead' call
      tmp$ret$0 = current.m19_1 > current.l19_1;
      if (!tmp$ret$0) {
        _this__u8e3s4.x1i(current);
      } else {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
        tmp$ret$1 = current.p19_1 - current.o19_1 | 0;
        var tmp = tmp$ret$1;
        Companion_getInstance_1();
        if (tmp < 8) {
          _this__u8e3s4.y1i(current);
        } else {
          _this__u8e3s4.t18_1 = current.l19_1;
        }
      }
    }
  }
  function prepareReadFirstHead(_this__u8e3s4, minSize) {
    _init_properties_Unsafe_kt__orlvcq();
    return _this__u8e3s4.v1i(minSize);
  }
  function prepareReadNextHead(_this__u8e3s4, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (current === _this__u8e3s4) {
      return _this__u8e3s4.h1b() ? _this__u8e3s4 : null;
    }
    return _this__u8e3s4.w1i(current);
  }
  function unsafeAppend(_this__u8e3s4, builder) {
    _init_properties_Unsafe_kt__orlvcq();
    var builderSize = builder.i();
    var tmp0_elvis_lhs = builder.q16();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var builderHead = tmp;
    if ((builderSize <= get_PACKET_MAX_COPY_SIZE() ? builderHead.n1h() == null : false) ? _this__u8e3s4.q1i(builderHead) : false) {
      builder.a1i();
      return builderSize;
    }
    _this__u8e3s4.p1i(builderHead);
    return builderSize;
  }
  function prepareWriteHead(_this__u8e3s4, capacity, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (!(current == null)) {
      _this__u8e3s4.c1d();
    }
    return _this__u8e3s4.j17(capacity);
  }
  var properties_initialized_Unsafe_kt_o5mw48;
  function _init_properties_Unsafe_kt__orlvcq() {
    if (properties_initialized_Unsafe_kt_o5mw48) {
    } else {
      properties_initialized_Unsafe_kt_o5mw48 = true;
      EmptyByteArray = new Int8Array(0);
    }
  }
  function trySuspend($this, sleepCondition, $completion) {
    var tmp = new $trySuspendCOROUTINE$57($this, sleepCondition, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function $sleepCOROUTINE$56(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1k_1 = _this__u8e3s4;
    this.g1k_1 = sleepCondition;
  }
  protoOf($sleepCOROUTINE$56).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            this.xh_1 = 1;
            suspendResult = trySuspend(this.f1k_1, this.g1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              return Unit_getInstance();
            } else {
              this.xh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.f1k_1.z15();
            return Unit_getInstance();
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
  function $trySuspendCOROUTINE$57(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1j_1 = _this__u8e3s4;
    this.u1j_1 = sleepCondition;
  }
  protoOf($trySuspendCOROUTINE$57).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            this.v1j_1 = false;
            this.w1j_1 = Job_0();
            if (this.t1j_1.y15_1.atomicfu$compareAndSet(null, this.w1j_1) ? this.u1j_1() : false) {
              this.v1j_1 = true;
              this.xh_1 = 1;
              suspendResult = this.w1j_1.ik(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.xh_1 = 2;
            continue $sm;
          case 2:
            return this.v1j_1;
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
  function AwaitingSlot() {
    this.y15_1 = atomic$ref$1(null);
  }
  protoOf(AwaitingSlot).v17 = function (sleepCondition, $completion) {
    var tmp = new $sleepCOROUTINE$56(this, sleepCondition, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(AwaitingSlot).z15 = function () {
    var tmp0_safe_receiver = this.y15_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.zo();
  };
  protoOf(AwaitingSlot).j1d = function (cause) {
    var tmp0_elvis_lhs = this.y15_1.atomicfu$getAndSet(null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var continuation = tmp;
    if (!(cause == null)) {
      continuation.yo(cause);
    } else {
      continuation.zo();
    }
  };
  function copyToSequentialImpl(_this__u8e3s4, dst, limit, $completion) {
    var tmp = new $copyToSequentialImplCOROUTINE$58(_this__u8e3s4, dst, limit, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function copyToTail(_this__u8e3s4, dst, limit, $completion) {
    var tmp = new $copyToTailCOROUTINE$59(_this__u8e3s4, dst, limit, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function $copyToSequentialImplCOROUTINE$58(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1k_1 = _this__u8e3s4;
    this.q1k_1 = dst;
    this.r1k_1 = limit;
  }
  protoOf($copyToSequentialImplCOROUTINE$58).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 10;
            var tmp0_require = !(this.p1k_1 === this.q1k_1);
            if (!tmp0_require) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!(this.p1k_1.s16() == null)) {
              this.q1k_1.px(this.p1k_1.s16());
              return new Long(0, 0);
            }

            this.s1k_1 = this.r1k_1;
            this.xh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.s1k_1.u(new Long(0, 0)) > 0)) {
              this.xh_1 = 9;
              continue $sm;
            }

            this.xh_1 = 2;
            suspendResult = this.p1k_1.i1d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t1k_1 = suspendResult;
            if (!this.t1k_1) {
              this.xh_1 = 9;
              continue $sm;
            } else {
              this.xh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.u1k_1 = this.p1k_1.k1d(this.q1k_1, this.s1k_1);
            if (this.u1k_1.equals(new Long(0, 0))) {
              this.xh_1 = 6;
              suspendResult = copyToTail(this.p1k_1, this.q1k_1, this.s1k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.q1k_1.w15() === 0) {
                this.xh_1 = 4;
                suspendResult = this.q1k_1.v15(1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.xh_1 = 5;
                continue $sm;
              }
            }

            break;
          case 4:
            this.xh_1 = 5;
            continue $sm;
          case 5:
            this.v1k_1 = this.u1k_1;
            this.xh_1 = 8;
            continue $sm;
          case 6:
            var tail = suspendResult;
            if (tail.equals(new Long(0, 0))) {
              this.xh_1 = 9;
              continue $sm;
            } else {
              this.xh_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            this.v1k_1 = tail;
            this.xh_1 = 8;
            continue $sm;
          case 8:
            var copied = this.v1k_1;
            this.s1k_1 = this.s1k_1.n6(copied);
            if (copied.u(new Long(0, 0)) > 0) {
              this.q1k_1.w1c();
            }

            this.xh_1 = 1;
            continue $sm;
          case 9:
            return this.r1k_1.n6(this.s1k_1);
          case 10:
            throw this.ai_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yh_1 === 10) {
          throw e;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e;
        }
      }
     while (true);
  };
  function $copyToTailCOROUTINE$59(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1l_1 = _this__u8e3s4;
    this.f1l_1 = dst;
    this.g1l_1 = limit;
  }
  protoOf($copyToTailCOROUTINE$59).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 9;
            this.h1l_1 = Companion_getInstance_4().q1c_1.d1f();
            this.xh_1 = 1;
            continue $sm;
          case 1:
            this.xh_1 = 2;
            continue $sm;
          case 2:
            this.yh_1 = 8;
            this.h1l_1.n1g(coerceAtMost_0(this.g1l_1, toLong(this.h1l_1.p19_1)).u4());
            this.xh_1 = 3;
            suspendResult = this.e1l_1.f1d(this.h1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.j1l_1 = suspendResult;
            if (this.j1l_1 === -1) {
              this.h1l_1.a1g(Companion_getInstance_4().q1c_1);
              this.i1l_1 = new Long(0, 0);
              this.yh_1 = 9;
              this.xh_1 = 6;
              continue $sm;
            } else {
              this.xh_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.xh_1 = 5;
            suspendResult = this.f1l_1.y1c(this.h1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.i1l_1 = toLong(this.j1l_1);
            this.yh_1 = 9;
            this.xh_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            var tmp_1 = this.i1l_1;
            this.h1l_1.a1g(Companion_getInstance_4().q1c_1);
            ;
            return tmp_1;
          case 7:
            this.h1l_1.a1g(Companion_getInstance_4().q1c_1);
            ;
            return Unit_getInstance();
          case 8:
            this.yh_1 = 9;
            var t = this.ai_1;
            this.h1l_1.a1g(Companion_getInstance_4().q1c_1);
            ;
            throw t;
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
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).b1h = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (properties_initialized_ByteArrayPool_kt_td6pfh) {
    } else {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).r1h = function (instance) {
  };
  protoOf(NoPoolImpl).jm = function () {
  };
  function SingleInstancePool() {
    this.n1l_1 = atomic$int$1(0);
    this.o1l_1 = atomic$boolean$1(false);
    this.p1l_1 = atomic$ref$1(null);
  }
  protoOf(SingleInstancePool).d1f = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.n1l_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.pool.SingleInstancePool.borrow.<anonymous>' call
        if (!(cur === 0))
          throw IllegalStateException_init_$Create$('Instance is already consumed');
        tmp$ret$0 = 1;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    var instance = this.b1h();
    this.p1l_1.kotlinx$atomicfu$value = instance;
    return instance;
  };
  protoOf(SingleInstancePool).r1h = function (instance) {
    if (!(this.p1l_1.kotlinx$atomicfu$value === instance)) {
      if (this.p1l_1.kotlinx$atomicfu$value == null ? !(this.n1l_1.kotlinx$atomicfu$value === 0) : false) {
        throw IllegalStateException_init_$Create$('Already recycled or an irrelevant instance tried to be recycled');
      }
      throw IllegalStateException_init_$Create$('Unable to recycle irrelevant instance');
    }
    this.p1l_1.kotlinx$atomicfu$value = null;
    if (!this.o1l_1.atomicfu$compareAndSet(false, true)) {
      throw IllegalStateException_init_$Create$('An instance is already disposed');
    }
    this.i1h(instance);
  };
  protoOf(SingleInstancePool).jm = function () {
    if (this.o1l_1.atomicfu$compareAndSet(false, true)) {
      var tmp0_elvis_lhs = this.p1l_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      this.p1l_1.kotlinx$atomicfu$value = null;
      this.i1h(value);
    }
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    return new ByteChannelJS(Companion_getInstance_4().s1c_1, autoFlush);
  }
  function copyTo_0(_this__u8e3s4, dst, limit, $completion) {
    var tmp = _this__u8e3s4 instanceof ByteChannelSequentialBase ? _this__u8e3s4 : THROW_CCE();
    var tmp0 = copyToSequentialImpl(tmp, dst instanceof ByteChannelSequentialBase ? dst : THROW_CCE(), limit, $completion);
    return tmp0;
  }
  function ByteReadChannel_0(content, offset, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = content.length === 0;
    if (tmp$ret$0)
      return Companion_getInstance_5().e1g();
    var head = Companion_getInstance_4().q1c_1.d1f();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    $l$loop: while (true) {
      tail.f1f(8);
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = end - start | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp0__get_writeRemaining__z8qq3e = tail;
      tmp$ret$1 = tmp0__get_writeRemaining__z8qq3e.o19_1 - tmp0__get_writeRemaining__z8qq3e.m19_1 | 0;
      var tmp2_minOf = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      var size = tmp$ret$2;
      writeFully_0(tail instanceof Buffer ? tail : THROW_CCE(), content, start, size);
      start = start + size | 0;
      if (start === end)
        break $l$loop;
      var current = tail;
      tail = Companion_getInstance_4().q1c_1.d1f();
      current.t1h(tail);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp3_apply = new ByteChannelJS(head, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
    close_0(tmp3_apply);
    tmp$ret$3 = tmp3_apply;
    return tmp$ret$3;
  }
  function ByteChannelJS$attachJob$lambda(this$0) {
    return function (cause) {
      this$0.f1m_1 = null;
      var tmp;
      if (!(cause == null)) {
        this$0.in(unwrapCancellationException(cause));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase.call(this, initial, autoFlush);
    this.f1m_1 = null;
  }
  protoOf(ByteChannelJS).l1d = function (job) {
    var tmp0_safe_receiver = this.f1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.mk();
    }
    this.f1m_1 = job;
    job.hk(true, VOID, ByteChannelJS$attachJob$lambda(this));
  };
  protoOf(ByteChannelJS).toString = function () {
    return 'ByteChannel[' + this.f1m_1 + ', ' + hashCode(this) + ']';
  };
  function ByteReadChannel$Companion$Empty$delegate$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ByteChannelJS(Companion_getInstance_4().s1c_1, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Companion.Empty$delegate.<anonymous>.<anonymous>' call
    tmp0_apply.px(null);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.q1l_1 = lazy(ByteReadChannel$Companion$Empty$delegate$lambda);
  }
  protoOf(Companion_3).e1g = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = Empty$factory();
    tmp$ret$0 = this.q1l_1.q();
    return tmp$ret$0;
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ByteReadChannel_1() {
  }
  function Empty$factory() {
    return getPropertyCallableRef('Empty', 1, KProperty1, function (receiver) {
      return receiver.e1g();
    }, null);
  }
  function DefaultAllocator() {
    DefaultAllocator_instance = this;
  }
  protoOf(DefaultAllocator).c1h = function (size) {
    return new Memory(new DataView(new ArrayBuffer(size)));
  };
  protoOf(DefaultAllocator).e1h = function (instance) {
  };
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    if (DefaultAllocator_instance == null)
      new DefaultAllocator();
    return DefaultAllocator_instance;
  }
  function of(_this__u8e3s4, array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length - offset | 0 : length;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = array;
    var typedArray = tmp$ret$0;
    return of_0(Companion_getInstance_6(), typedArray, offset, length);
  }
  function of_0(_this__u8e3s4, view, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? view.byteLength : length;
    return of_1(Companion_getInstance_6(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function of_1(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.byteLength - offset | 0 : length;
    return new Memory(new DataView(buffer, offset, length));
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.c1j_1 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Memory(view) {
    Companion_getInstance_6();
    this.f1g_1 = view;
  }
  protoOf(Memory).g1m = function (offset, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$0 = "offset shouldn't be negative: " + offset;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$1 = "length shouldn't be negative: " + length;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = toLong(offset + length | 0);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    tmp$ret$2 = toLong(this.f1g_1.byteLength);
    if (tmp.u(tmp$ret$2) > 0) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      tmp$ret$3 = toLong(this.f1g_1.byteLength);
      throw IndexOutOfBoundsException_init_$Create$('offset + length > size: ' + offset + ' + ' + length + ' > ' + toString(tmp$ret$3));
    }
    return new Memory(new DataView(this.f1g_1.buffer, this.f1g_1.byteOffset + offset | 0, length));
  };
  protoOf(Memory).v1g = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this.f1g_1.buffer, this.f1g_1.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination.f1g_1.buffer, destination.f1g_1.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  protoOf(Memory).b1j = function (destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    if (offset.u(toLong(IntCompanionObject_getInstance().MAX_VALUE)) >= 0) {
      failLongToIntConversion(offset, 'offset');
    }
    tmp$ret$0 = offset.u4();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    if (length.u(toLong(IntCompanionObject_getInstance().MAX_VALUE)) >= 0) {
      failLongToIntConversion(length, 'length');
    }
    tmp$ret$1 = length.u4();
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    if (destinationOffset.u(toLong(IntCompanionObject_getInstance().MAX_VALUE)) >= 0) {
      failLongToIntConversion(destinationOffset, 'destinationOffset');
    }
    tmp$ret$2 = destinationOffset.u4();
    this.v1g(destination, tmp, tmp_0, tmp$ret$2);
  };
  function copyTo_1(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = destination;
    var to = tmp$ret$0;
    var from = new Int8Array(_this__u8e3s4.f1g_1.buffer, _this__u8e3s4.f1g_1.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_2(_this__u8e3s4, destination, offset, length, destinationOffset) {
    copyTo_3(_this__u8e3s4.buffer, destination, offset + _this__u8e3s4.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_3(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this__u8e3s4, offset, length);
    var to = new Int8Array(destination.f1g_1.buffer, destination.f1g_1.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).h1m = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().d1j_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp0_let = replace(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call
        var tmp_2;
        if (tmp0_let === 'iso-8859-1') {
          tmp_2 = true;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.lowercase' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_let;
          tmp$ret$1 = tmp$ret$0.toLowerCase();
          tmp_2 = tmp$ret$1 === 'iso-8859-1';
        }
        tmp$ret$2 = tmp_2;
        tmp$ret$3 = tmp$ret$2;

        tmp_1 = tmp$ret$3;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().e1j_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  protoOf(Companion_5).i1m = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            var tmp$ret$3;
            // Inline function 'kotlin.let' call
            var tmp0_let = replace(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$2;
            // Inline function 'io.ktor.utils.io.charsets.Companion.isSupported.<anonymous>' call
            var tmp_2;
            if (tmp0_let === 'iso-8859-1') {
              tmp_2 = true;
            } else {
              var tmp$ret$1;
              // Inline function 'kotlin.text.lowercase' call
              var tmp$ret$0;
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$0 = tmp0_let;
              tmp$ret$1 = tmp$ret$0.toLowerCase();
              tmp_2 = tmp$ret$1 === 'iso-8859-1';
            }
            tmp$ret$2 = tmp_2;
            tmp$ret$3 = tmp$ret$2;

            tmp_1 = tmp$ret$3;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Charset(_name) {
    Companion_getInstance_7();
    this.f1j_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !(this.constructor == other.constructor))
      return false;
    if (other instanceof Charset)
      other;
    else
      THROW_CCE();
    if (!(this.f1j_1 === other.f1j_1))
      return false;
    return true;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.f1j_1);
  };
  protoOf(Charset).toString = function () {
    return this.f1j_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.f1j_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.d1j_1 = new CharsetImpl('UTF-8');
    this.e1j_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    extendThrowable(this, message);
    captureStack(this, MalformedInputException);
  }
  function CharsetDecoder(_charset) {
    this.j1m_1 = _charset;
  }
  function encodeToByteArray(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.k1m_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.m1m_1 = name;
  }
  protoOf(CharsetImpl).h1j = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).g1j = function () {
    return new CharsetDecoderImpl(this);
  };
  protoOf(CharsetImpl).toString = function () {
    return 'CharsetImpl(name=' + this.m1m_1 + ')';
  };
  protoOf(CharsetImpl).hashCode = function () {
    return getStringHashCode(this.m1m_1);
  };
  protoOf(CharsetImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this.m1m_1 === tmp0_other_with_cast.m1m_1))
      return false;
    return true;
  };
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.o1m_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.o1m_1 + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.o1m_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.o1m_1.equals(tmp0_other_with_cast.o1m_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.q1m_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.q1m_1 + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.q1m_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.q1m_1.equals(tmp0_other_with_cast.q1m_1))
      return false;
    return true;
  };
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var charactersCopied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(input, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.m19_1 - tmp0__get_readRemaining__u3cy9h.l19_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp3__anonymous__ufb84q = current;
                var rem = max - charactersCopied | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$2 = tmp3__anonymous__ufb84q.m19_1 - tmp3__anonymous__ufb84q.l19_1 | 0;
                var bufferSize = tmp$ret$2;
                if (rem < bufferSize) {
                  tmp$ret$3 = 0;
                  break $l$block_0;
                }
                var tmp$ret$11;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t = tmp3__anonymous__ufb84q.k19_1;
                var tmp1__anonymous__uwfjfc = tmp3__anonymous__ufb84q.l19_1;
                var tmp2__anonymous__z9zvc9 = tmp3__anonymous__ufb84q.m19_1;
                var tmp$ret$8;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q_0 = new Int8Array(tmp0__anonymous__q1qw7t.f1g_1.buffer, tmp0__anonymous__q1qw7t.f1g_1.byteOffset + tmp1__anonymous__uwfjfc | 0, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0);
                var tmp$ret$7;
                $l$block_2: {
                  // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                  try {
                    var tmp$ret$6;
                    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp$ret$4;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.r1m(tmp3__anonymous__ufb84q_0, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t = $p;
                          var tmp0_elvis_lhs_0 = t.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp$ret$6 = tmp$ret$4;
                    tmp$ret$7 = tmp$ret$6;
                    break $l$block_2;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var t_0 = $p;
                      var tmp0_elvis_lhs_1 = t_0.message;
                      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                    } else {
                      throw $p;
                    }
                  }
                }
                var decodedText = tmp$ret$7;
                dst.b(decodedText);
                charactersCopied = charactersCopied + decodedText.length | 0;
                tmp$ret$8 = tmp3__anonymous__ufb84q_0.byteLength;
                tmp$ret$9 = tmp$ret$8;
                var rc = tmp$ret$9;
                tmp3__anonymous__ufb84q.g1g(rc);
                tmp$ret$10 = rc;
                tmp$ret$11 = tmp$ret$10;
                var tmp_0;
                if (charactersCopied === max) {
                  var tmp_1;
                  try {
                    tmp_1 = decoder.s1m();
                  } catch ($p) {
                    var tmp_2;
                    {
                      var _ = $p;
                      tmp_2 = '';
                    }
                    tmp_1 = tmp_2;
                  }
                  var tail = tmp_1;
                  var tmp$ret$12;
                  // Inline function 'kotlin.text.isNotEmpty' call
                  tmp$ret$12 = charSequenceLength(tail) > 0;
                  if (tmp$ret$12) {
                    tmp3__anonymous__ufb84q.k1g(bufferSize);
                  }
                  tmp_0 = 0;
                } else if (charactersCopied < max) {
                  tmp_0 = get_MAX_CHARACTERS_SIZE_IN_BYTES();
                } else {
                  tmp_0 = 0;
                }
                tmp$ret$3 = tmp_0;
              }
              size = tmp$ret$3;
            }finally {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$13 = tmp1__get_readRemaining__qliyus.m19_1 - tmp1__get_readRemaining__qliyus.l19_1 | 0;
              after = tmp$ret$13;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_3;
          if (after === 0) {
            tmp_3 = prepareReadNextHead(input, current);
          } else {
            var tmp_4;
            if (after < size) {
              tmp_4 = true;
            } else {
              var tmp$ret$14;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$14 = tmp2__get_endGap__m31424.p19_1 - tmp2__get_endGap__m31424.o19_1 | 0;
              var tmp_5 = tmp$ret$14;
              Companion_getInstance_1();
              tmp_4 = tmp_5 < 8;
            }
            if (tmp_4) {
              completeReadHead(input, current);
              tmp_3 = prepareReadFirstHead(input, size);
            } else {
              tmp_3 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_3;
          var tmp_6;
          if (tmp1_elvis_lhs == null) {
            break $l$loop;
          } else {
            tmp_6 = tmp1_elvis_lhs;
          }
          var next = tmp_6;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
    if (charactersCopied < max) {
      var size_0 = 1;
      var tmp$ret$15;
      $l$block_3: {
        // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
        var release_0 = true;
        var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
        var tmp_7;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$15 = Unit_getInstance();
          break $l$block_3;
        } else {
          tmp_7 = tmp0_elvis_lhs_2;
        }
        var current_0 = tmp_7;
        var size_1 = 1;
        try {
          $l$loop_0: do {
            var tmp$ret$16;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var tmp4__get_readRemaining__g410mp = current_0;
            tmp$ret$16 = tmp4__get_readRemaining__g410mp.m19_1 - tmp4__get_readRemaining__g410mp.l19_1 | 0;
            var before_0 = tmp$ret$16;
            var after_0;
            if (before_0 >= size_1) {
              try {
                var tmp$ret$21;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp7__anonymous__b0knam = current_0;
                var tmp$ret$20;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$19;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$18;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t_0 = tmp7__anonymous__b0knam.k19_1;
                var tmp1__anonymous__uwfjfc_0 = tmp7__anonymous__b0knam.l19_1;
                var tmp2__anonymous__z9zvc9_0 = tmp7__anonymous__b0knam.m19_1;
                var tmp$ret$17;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q_1 = new Int8Array(tmp0__anonymous__q1qw7t_0.f1g_1.buffer, tmp0__anonymous__q1qw7t_0.f1g_1.byteOffset + tmp1__anonymous__uwfjfc_0 | 0, tmp2__anonymous__z9zvc9_0 - tmp1__anonymous__uwfjfc_0 | 0);
                var result = decodeBufferImpl(tmp3__anonymous__ufb84q_1, decoder, max - charactersCopied | 0);
                dst.b(result.t1m_1);
                charactersCopied = charactersCopied + result.t1m_1.length | 0;
                tmp$ret$17 = result.u1m_1;
                tmp$ret$18 = tmp$ret$17;
                var rc_0 = tmp$ret$18;
                tmp7__anonymous__b0knam.g1g(rc_0);
                tmp$ret$19 = rc_0;
                tmp$ret$20 = tmp$ret$19;
                var rc_1 = tmp$ret$20;
                if (rc_1 > 0)
                  size_0 = 1;
                else if (size_0 === get_MAX_CHARACTERS_SIZE_IN_BYTES())
                  size_0 = 0;
                else {
                  var tmp0 = size_0;
                  size_0 = tmp0 + 1 | 0;
                }
                tmp$ret$21 = size_0;
                size_1 = tmp$ret$21;
              }finally {
                var tmp$ret$22;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var tmp5__get_readRemaining__cm7180 = current_0;
                tmp$ret$22 = tmp5__get_readRemaining__cm7180.m19_1 - tmp5__get_readRemaining__cm7180.l19_1 | 0;
                after_0 = tmp$ret$22;
              }
            } else {
              after_0 = before_0;
            }
            release_0 = false;
            var tmp_8;
            if (after_0 === 0) {
              tmp_8 = prepareReadNextHead(input, current_0);
            } else {
              var tmp_9;
              if (after_0 < size_1) {
                tmp_9 = true;
              } else {
                var tmp$ret$23;
                // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                var tmp6__get_endGap__fi3fsg = current_0;
                tmp$ret$23 = tmp6__get_endGap__fi3fsg.p19_1 - tmp6__get_endGap__fi3fsg.o19_1 | 0;
                var tmp_10 = tmp$ret$23;
                Companion_getInstance_1();
                tmp_9 = tmp_10 < 8;
              }
              if (tmp_9) {
                completeReadHead(input, current_0);
                tmp_8 = prepareReadFirstHead(input, size_1);
              } else {
                tmp_8 = current_0;
              }
            }
            var tmp1_elvis_lhs_0 = tmp_8;
            var tmp_11;
            if (tmp1_elvis_lhs_0 == null) {
              break $l$loop_0;
            } else {
              tmp_11 = tmp1_elvis_lhs_0;
            }
            var next_0 = tmp_11;
            current_0 = next_0;
            release_0 = true;
          }
           while (size_1 > 0);
        }finally {
          if (release_0) {
            completeReadHead(input, current_0);
          }
        }
      }
    }
    return charactersCopied;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    var tmp0_require = fromIndex <= toIndex;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().e1j_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = get_charset_0(_this__u8e3s4) === Charsets_getInstance().d1j_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
      tmp$ret$1 = 'Only UTF-8 encoding is supported in JS';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var encoder = new TextEncoder();
    var start = fromIndex;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.o19_1 - dst.m19_1 | 0;
    var dstRemaining = tmp$ret$2;
    $l$loop: while (start < toIndex ? dstRemaining > 0 : false) {
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = toIndex - start | 0;
      var tmp3_minOf = dstRemaining / 6 | 0;
      tmp$ret$3 = Math.min(tmp2_minOf, tmp3_minOf);
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp4_substring = start;
      tmp$ret$4 = toString(charSequenceSubSequence(input, tmp4_substring, endIndexExclusive));
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$loop;
      writeFully_4(dst, array1);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeComplete(_this__u8e3s4, dst) {
    return true;
  }
  function decodeExactBytes(_this__u8e3s4, input, inputLength) {
    if (inputLength === 0)
      return '';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = input.u18_1 - input.t18_1 | 0;
    if (tmp$ret$0 >= inputLength) {
      var decoder = Decoder(get_charset(_this__u8e3s4).f1j_1, true);
      var head = input.y1h();
      var view = input.s18_1.f1g_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'io.ktor.utils.io.js.decodeWrap' call
        try {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.charsets.decodeExactBytes.<anonymous>' call
          var subView = (head.l19_1 === 0 ? inputLength === view.byteLength : false) ? view : new DataView(view.buffer, view.byteOffset + head.l19_1 | 0, inputLength);
          tmp$ret$1 = decoder.v1m(subView);
          tmp$ret$2 = tmp$ret$1;
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            var tmp0_elvis_lhs = t.message;
            throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
          } else {
            throw $p;
          }
        }
      }
      var text = tmp$ret$2;
      input.g1g(inputLength);
      return text;
    }
    return decodeExactBytesSlow(_this__u8e3s4, input, inputLength);
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.j1m_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.k1m_1;
  }
  function decodeExactBytesSlow(_this__u8e3s4, input, inputLength) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var inputRemaining = inputLength;
    var sb = StringBuilder_init_$Create$(inputLength);
    var tmp$ret$18;
    $l$block_4: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$17;
        // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(input, 6);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          var size = 6;
          try {
            $l$loop: do {
              var tmp$ret$1;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp0__get_readRemaining__u3cy9h = current;
              tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.m19_1 - tmp0__get_readRemaining__u3cy9h.l19_1 | 0;
              var before = tmp$ret$1;
              var after;
              if (before >= size) {
                try {
                  var tmp$ret$8;
                  // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                  var tmp3__anonymous__ufb84q = current;
                  var tmp$ret$2;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  tmp$ret$2 = tmp3__anonymous__ufb84q.m19_1 - tmp3__anonymous__ufb84q.l19_1 | 0;
                  var chunkSize = tmp$ret$2;
                  var tmp$ret$3;
                  // Inline function 'kotlin.comparisons.minOf' call
                  var tmp0_minOf = inputRemaining;
                  tmp$ret$3 = Math.min(chunkSize, tmp0_minOf);
                  var size_0 = tmp$ret$3;
                  var tmp_0;
                  if (tmp3__anonymous__ufb84q.l19_1 === 0 ? tmp3__anonymous__ufb84q.k19_1.f1g_1.byteLength === size_0 : false) {
                    var tmp$ret$4;
                    $l$block_0: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp1_decodeStream = tmp3__anonymous__ufb84q.k19_1.f1g_1;
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.r1m(tmp1_decodeStream, decodeOptions(true));
                        break $l$block_0;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t = $p;
                          var tmp0_elvis_lhs_0 = t.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$4;
                  } else {
                    var tmp$ret$6;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp2_decodeStream = new Int8Array(tmp3__anonymous__ufb84q.k19_1.f1g_1.buffer, tmp3__anonymous__ufb84q.k19_1.f1g_1.byteOffset + tmp3__anonymous__ufb84q.l19_1 | 0, size_0);
                      var tmp$ret$7;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$6 = decoder.r1m(tmp2_decodeStream, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t_0 = $p;
                          var tmp0_elvis_lhs_1 = t_0.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$6;
                  }
                  var text = tmp_0;
                  sb.h7(text);
                  tmp3__anonymous__ufb84q.g1g(size_0);
                  inputRemaining = inputRemaining - size_0 | 0;
                  tmp$ret$8 = inputRemaining > 0 ? 6 : 0;
                  size = tmp$ret$8;
                }finally {
                  var tmp$ret$9;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var tmp1__get_readRemaining__qliyus = current;
                  tmp$ret$9 = tmp1__get_readRemaining__qliyus.m19_1 - tmp1__get_readRemaining__qliyus.l19_1 | 0;
                  after = tmp$ret$9;
                }
              } else {
                after = before;
              }
              release = false;
              var tmp_1;
              if (after === 0) {
                tmp_1 = prepareReadNextHead(input, current);
              } else {
                var tmp_2;
                if (after < size) {
                  tmp_2 = true;
                } else {
                  var tmp$ret$10;
                  // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                  var tmp2__get_endGap__m31424 = current;
                  tmp$ret$10 = tmp2__get_endGap__m31424.p19_1 - tmp2__get_endGap__m31424.o19_1 | 0;
                  var tmp_3 = tmp$ret$10;
                  Companion_getInstance_1();
                  tmp_2 = tmp_3 < 8;
                }
                if (tmp_2) {
                  completeReadHead(input, current);
                  tmp_1 = prepareReadFirstHead(input, size);
                } else {
                  tmp_1 = current;
                }
              }
              var tmp1_elvis_lhs = tmp_1;
              var tmp_4;
              if (tmp1_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_4 = tmp1_elvis_lhs;
              }
              var next = tmp_4;
              current = next;
              release = true;
            }
             while (size > 0);
          }finally {
            if (release) {
              completeReadHead(input, current);
            }
          }
        }
        if (inputRemaining > 0) {
          var tmp$ret$11;
          $l$block_2: {
            // Inline function 'io.ktor.utils.io.core.takeWhile' call
            var release_0 = true;
            var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
            var tmp_5;
            if (tmp0_elvis_lhs_2 == null) {
              tmp$ret$11 = Unit_getInstance();
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs_2;
            }
            var current_0 = tmp_5;
            try {
              $l$loop_1: do {
                var tmp$ret$16;
                // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                var tmp4__anonymous__pkmkx7 = current_0;
                var tmp$ret$12;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$12 = tmp4__anonymous__pkmkx7.m19_1 - tmp4__anonymous__pkmkx7.l19_1 | 0;
                var chunkSize_0 = tmp$ret$12;
                var tmp$ret$13;
                // Inline function 'kotlin.comparisons.minOf' call
                var tmp0_minOf_0 = inputRemaining;
                tmp$ret$13 = Math.min(chunkSize_0, tmp0_minOf_0);
                var size_1 = tmp$ret$13;
                var tmp_6;
                if (tmp4__anonymous__pkmkx7.l19_1 === 0 ? tmp4__anonymous__pkmkx7.k19_1.f1g_1.byteLength === size_1 : false) {
                  tmp_6 = decoder.v1m(tmp4__anonymous__pkmkx7.k19_1.f1g_1);
                } else {
                  var tmp$ret$14;
                  $l$block_3: {
                    // Inline function 'io.ktor.utils.io.js.decodeStream' call
                    var tmp1_decodeStream_0 = new Int8Array(tmp4__anonymous__pkmkx7.k19_1.f1g_1.buffer, tmp4__anonymous__pkmkx7.k19_1.f1g_1.byteOffset + tmp4__anonymous__pkmkx7.l19_1 | 0, size_1);
                    var tmp$ret$15;
                    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                    try {
                      tmp$ret$14 = decoder.r1m(tmp1_decodeStream_0, decodeOptions(true));
                      break $l$block_3;
                    } catch ($p) {
                      if ($p instanceof Error) {
                        var t_1 = $p;
                        var tmp0_elvis_lhs_3 = t_1.message;
                        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_3 == null ? 'no cause provided' : tmp0_elvis_lhs_3));
                      } else {
                        throw $p;
                      }
                    }
                  }
                  tmp_6 = tmp$ret$14;
                }
                var text_0 = tmp_6;
                sb.h7(text_0);
                tmp4__anonymous__pkmkx7.g1g(size_1);
                inputRemaining = inputRemaining - size_1 | 0;
                tmp$ret$16 = true;
                if (!tmp$ret$16) {
                  break $l$loop_1;
                }
                release_0 = false;
                var tmp1_elvis_lhs_0 = prepareReadNextHead(input, current_0);
                var tmp_7;
                if (tmp1_elvis_lhs_0 == null) {
                  break $l$loop_1;
                } else {
                  tmp_7 = tmp1_elvis_lhs_0;
                }
                var next_0 = tmp_7;
                current_0 = next_0;
                release_0 = true;
              }
               while (true);
            }finally {
              if (release_0) {
                completeReadHead(input, current_0);
              }
            }
          }
        }
        tmp$ret$17 = sb.h7(decoder.s1m());
        tmp$ret$18 = tmp$ret$17;
        break $l$block_4;
      } catch ($p) {
        if ($p instanceof Error) {
          var t_2 = $p;
          var tmp0_elvis_lhs_4 = t_2.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_4 == null ? 'no cause provided' : tmp0_elvis_lhs_4));
        } else {
          throw $p;
        }
      }
    }
    if (inputRemaining > 0) {
      throw new EOFException('Not enough bytes available: had only ' + (inputLength - inputRemaining | 0) + ' instead of ' + inputLength);
    }
    return sb.toString();
  }
  function get_MAX_CHARACTERS_SIZE_IN_BYTES() {
    return MAX_CHARACTERS_SIZE_IN_BYTES;
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.t1m_1 = charactersDecoded;
    this.u1m_1 = bytesConsumed;
  }
  protoOf(DecodeBufferResult).toString = function () {
    return 'DecodeBufferResult(charactersDecoded=' + this.t1m_1 + ', bytesConsumed=' + this.u1m_1 + ')';
  };
  protoOf(DecodeBufferResult).hashCode = function () {
    var result = getStringHashCode(this.t1m_1);
    result = imul(result, 31) + this.u1m_1 | 0;
    return result;
  };
  protoOf(DecodeBufferResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeBufferResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeBufferResult ? other : THROW_CCE();
    if (!(this.t1m_1 === tmp0_other_with_cast.t1m_1))
      return false;
    if (!(this.u1m_1 === tmp0_other_with_cast.u1m_1))
      return false;
    return true;
  };
  function decodeBufferImpl(_this__u8e3s4, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost(maxCharacters, _this__u8e3s4.byteLength);
      var text = nativeDecoder.v1m(_this__u8e3s4.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    } catch ($p) {
      var _ = $p;
    }
    return decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters) {
    var maxBytes = coerceAtMost(maxCharacters >= 268435455 ? IntCompanionObject_getInstance().MAX_VALUE : imul(maxCharacters, 8), _this__u8e3s4.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.v1m(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      } catch ($p) {
        var _ = $p;
      }
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.v1m(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      } catch ($p) {
        var __0 = $p;
      }
      var tmp0 = sizeInBytes;
      sizeInBytes = tmp0 - 1 | 0;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.charsets.decodeBufferImplSlow.<anonymous>' call
        tmp$ret$0 = nativeDecoder.v1m(_this__u8e3s4);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          var tmp0_elvis_lhs = t.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeDirect' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var tmp0__anonymous__q1qw7t = dst.k19_1;
    var tmp1__anonymous__uwfjfc = dst.m19_1;
    var tmp2__anonymous__z9zvc9 = dst.o19_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.charsets.encodeISO88591.<anonymous>' call
    var tmp3__anonymous__ufb84q = tmp0__anonymous__q1qw7t.g1m(tmp1__anonymous__uwfjfc, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0).f1g_1;
    var i8 = new Int8Array(tmp3__anonymous__ufb84q.buffer, tmp3__anonymous__ufb84q.byteOffset, tmp3__anonymous__ufb84q.byteLength);
    var writeIndex = 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(input, index);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var character = tmp$ret$0;
        if (character > 255) {
          failedToMapError(character);
        }
        // Inline function 'org.khronos.webgl.set' call
        var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        var tmp1_set = tmp1;
        var tmp2_set = toByte(character);
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = i8;
        tmp$ret$1[tmp1_set] = tmp2_set;
      }
       while (inductionVariable < toIndex);
    tmp$ret$2 = writeIndex;
    tmp$ret$3 = tmp$ret$2;
    var rc = tmp$ret$3;
    dst.h1g(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function writeFully_4(_this__u8e3s4, src, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? src.byteLength - offset | 0 : length;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.k19_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.m19_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.o19_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_2(src, tmp0__anonymous__q1qw7t, offset, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.h1g(rc);
    tmp$ret$1 = rc;
  }
  function ByteReadPacket_0(array, offset, length, block) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = array;
    var tmp = tmp$ret$0;
    var content = tmp instanceof Int8Array ? tmp : THROW_CCE();
    var sub = (offset === 0 ? length === array.length : false) ? content.buffer : content.buffer.slice(offset, offset + length | 0);
    var pool = new ByteReadPacket$pool$1(sub, block, array);
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = pool.d1f();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.ByteReadPacket.<anonymous>' call
    tmp0_apply.m1g();
    tmp$ret$1 = tmp0_apply;
    return ByteReadPacket_init_$Create$(tmp$ret$1, pool);
  }
  function ByteReadPacket$pool$1($sub, $block, $array) {
    this.z1m_1 = $sub;
    this.a1n_1 = $block;
    this.b1n_1 = $array;
    SingleInstancePool.call(this);
  }
  protoOf(ByteReadPacket$pool$1).b1h = function () {
    return new ChunkBuffer(of_1(Companion_getInstance_6(), this.z1m_1), null, this);
  };
  protoOf(ByteReadPacket$pool$1).d1h = function (instance) {
    this.a1n_1(this.b1n_1);
  };
  protoOf(ByteReadPacket$pool$1).i1h = function (instance) {
    return this.d1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function Closeable() {
  }
  function addSuppressedInternal(_this__u8e3s4, other) {
  }
  function get_PACKET_MAX_COPY_SIZE() {
    return PACKET_MAX_COPY_SIZE;
  }
  var PACKET_MAX_COPY_SIZE;
  function String_0(bytes, offset, length, charset) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    charset = charset === VOID ? Charsets_getInstance().d1j_1 : charset;
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = bytes;
    var i8 = tmp$ret$0;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var view = new ChunkBuffer(of_1(Companion_getInstance_6(), buffer), null, Companion_getInstance_4().t1c_1);
    view.m1g();
    var packet = ByteReadPacket_init_$Create$(view, Companion_getInstance_4().u1c_1);
    return decode(charset.g1j(), packet, IntCompanionObject_getInstance().MAX_VALUE);
  }
  function checkIndices(offset, length, bytes) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      throw IndexOutOfBoundsException_init_$Create$('length (' + length + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (offset + length | 0) <= bytes.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init_$Create$_0();
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException_init_$Create$(message) {
    var tmp = IOException_init_$Init$(message, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_0(message, cause, this);
    captureStack(this, IOException);
  }
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function decodeOptions(stream) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.decodeOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.stream = stream;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.textDecoderOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.fatal = fatal;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor$1($this_toKtor) {
    this.c1n_1 = $this_toKtor;
  }
  protoOf(toKtor$1).s1m = function () {
    return this.c1n_1.decode();
  };
  protoOf(toKtor$1).v1m = function (buffer) {
    return this.c1n_1.decode(buffer);
  };
  protoOf(toKtor$1).r1m = function (buffer, options) {
    return this.c1n_1.decode(buffer, options);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.d1n_1 = fatal;
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(encoding) ? encoding : THROW_CCE()));
    var tmp0_lowercase = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_lowercase;
    tmp$ret$2 = tmp$ret$1.toLowerCase();
    var requestedEncoding = tmp$ret$2;
    // Inline function 'kotlin.check' call
    var tmp1_check = get_ENCODING_ALIASES().b1(requestedEncoding);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.<anonymous>' call
      tmp$ret$3 = encoding + ' is not supported.';
      var message = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(TextDecoderFallback).s1m = function () {
    return '';
  };
  protoOf(TextDecoderFallback).v1m = function (buffer) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>' call
        var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
        var inductionVariable = 0;
        var last = bytes.length;
        if (inductionVariable < last)
          $l$loop: do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            // Inline function 'org.khronos.webgl.get' call
            var tmp$ret$0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$0 = bytes;
            tmp$ret$1 = tmp$ret$0[index];
            var byte = tmp$ret$1;
            var point = toCodePoint(byte);
            if (point < 0) {
              // Inline function 'kotlin.check' call
              var tmp0_check = !this.d1n_1;
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check) {
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
                tmp$ret$2 = 'Invalid character: ' + point;
                var message = tmp$ret$2;
                throw IllegalStateException_init_$Create$(toString(message));
              }
              writeFully_3(builder, get_REPLACEMENT());
              continue $l$loop;
            }
            if (point > 255) {
              builder.t1g(toByte(point >> 8));
            }
            builder.t1g(toByte(point & 255));
          }
           while (inductionVariable < last);
        tmp$ret$3 = builder.u1a();
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
    return decodeToString(readBytes(tmp$ret$3));
  };
  protoOf(TextDecoderFallback).r1m = function (buffer, options) {
    return this.v1m(buffer);
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_kt_7y92ax;
  function _init_properties_TextDecoderFallback_kt__nrrftl() {
    if (properties_initialized_TextDecoderFallback_kt_7y92ax) {
    } else {
      properties_initialized_TextDecoderFallback_kt_7y92ax = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      var tmp$ret$0;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp0_byteArrayOf = new Int8Array([-17, -65, -67]);
      tmp$ret$0 = tmp0_byteArrayOf;
      REPLACEMENT = tmp$ret$0;
    }
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (properties_initialized_Win1252Table_kt_pkmjoq) {
    } else {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
      WIN1252_TABLE = tmp$ret$0;
    }
  }
  function DefaultPool(capacity) {
    this.f1h_1 = capacity;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.f1h_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.g1h_1 = tmp$ret$0;
    this.h1h_1 = 0;
  }
  protoOf(DefaultPool).i1h = function (instance) {
  };
  protoOf(DefaultPool).p1h = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).l1h = function (instance) {
  };
  protoOf(DefaultPool).d1f = function () {
    if (this.h1h_1 === 0)
      return this.b1h();
    var tmp0_this = this;
    tmp0_this.h1h_1 = tmp0_this.h1h_1 - 1 | 0;
    var idx = tmp0_this.h1h_1;
    var tmp = this.g1h_1[idx];
    var instance = isObject(tmp) ? tmp : THROW_CCE();
    this.g1h_1[idx] = null;
    return this.p1h(instance);
  };
  protoOf(DefaultPool).r1h = function (instance) {
    this.l1h(instance);
    if (this.h1h_1 === this.f1h_1) {
      this.i1h(instance);
    } else {
      var tmp0_this = this;
      var tmp1 = tmp0_this.h1h_1;
      tmp0_this.h1h_1 = tmp1 + 1 | 0;
      this.g1h_1[tmp1] = instance;
    }
  };
  protoOf(DefaultPool).jm = function () {
    var inductionVariable = 0;
    var last = this.h1h_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.g1h_1[i];
        var instance = isObject(tmp) ? tmp : THROW_CCE();
        this.g1h_1[i] = null;
        this.i1h(instance);
      }
       while (inductionVariable < last);
    this.h1h_1 = 0;
  };
  //region block: post-declaration
  protoOf(ByteChannelSequentialBase).e1d = readRemaining$default;
  protoOf(ChannelJob).mk = cancel$default;
  protoOf(ChannelJob).hk = invokeOnCompletion$default;
  protoOf(DefaultPool).c13 = close;
  protoOf(DefaultBufferPool).c13 = close;
  protoOf(ChunkBuffer$Companion$Pool$1).c13 = close;
  protoOf(ChunkBuffer$Companion$EmptyPool$1).c13 = close;
  protoOf(NoPoolImpl).c13 = close;
  protoOf(ChunkBuffer$Companion$NoPool$1).c13 = close;
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).c13 = close;
  protoOf(ByteArrayPool$1).c13 = close;
  protoOf(SingleInstancePool).c13 = close;
  protoOf(ByteChannelJS).e1d = readRemaining$default;
  protoOf(ByteReadPacket$pool$1).c13 = close;
  //endregion
  //region block: init
  DEFAULT_BUFFER_SIZE = 4096;
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  PACKET_MAX_COPY_SIZE = 200;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = completeWriting;
  _.$_$.b = copyTo_0;
  _.$_$.c = copyTo;
  _.$_$.d = readAvailable;
  _.$_$.e = requestWriteBuffer;
  _.$_$.f = writeFully;
  _.$_$.g = IOException_init_$Init$;
  _.$_$.h = IOException_init_$Create$;
  _.$_$.i = Companion_getInstance_7;
  _.$_$.j = Charsets_getInstance;
  _.$_$.k = Companion_getInstance_1;
  _.$_$.l = Companion_getInstance_5;
  _.$_$.m = MalformedInputException;
  _.$_$.n = decode;
  _.$_$.o = encodeToByteArray;
  _.$_$.p = encode;
  _.$_$.q = get_name;
  _.$_$.r = completeReadHead;
  _.$_$.s = prepareReadFirstHead;
  _.$_$.t = prepareReadNextHead;
  _.$_$.u = BytePacketBuilder;
  _.$_$.v = ByteReadPacket_0;
  _.$_$.w = ByteReadPacket;
  _.$_$.x = Closeable;
  _.$_$.y = Input;
  _.$_$.z = String_0;
  _.$_$.a1 = addSuppressedInternal;
  _.$_$.b1 = discard;
  _.$_$.c1 = readAvailable_1;
  _.$_$.d1 = readAvailable_0;
  _.$_$.e1 = readBytes_0;
  _.$_$.f1 = readBytes;
  _.$_$.g1 = readShort_0;
  _.$_$.h1 = readText;
  _.$_$.i1 = writeFully_3;
  _.$_$.j1 = writeShort_0;
  _.$_$.k1 = writeText;
  _.$_$.l1 = IOException;
  _.$_$.m1 = get_ByteArrayPool;
  _.$_$.n1 = ByteChannel;
  _.$_$.o1 = ByteReadChannel;
  _.$_$.p1 = ByteReadChannel_1;
  _.$_$.q1 = WriterScope;
  _.$_$.r1 = cancel;
  _.$_$.s1 = close_0;
  _.$_$.t1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io-js-ir.js.map
