(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-atomicfu'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-atomicfu'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    root['kotlinx-coroutines-core'] = factory(typeof this['kotlinx-coroutines-core'] === 'undefined' ? {} : this['kotlinx-coroutines-core'], kotlin, this['kotlinx-atomicfu']);
  }
}(this, function (_, Kotlin, $module$kotlinx_atomicfu) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Continuation = Kotlin.kotlin.coroutines.Continuation;
  var Annotation = Kotlin.kotlin.Annotation;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var throwUPAE = Kotlin.throwUPAE;
  var atomic = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$ref$1;
  var atomic_0 = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$int$1;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var Array_0 = Array;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Result = Kotlin.kotlin.Result;
  var coroutines = Kotlin.kotlin.coroutines;
  var createCoroutineUnintercepted = Kotlin.kotlin.coroutines.intrinsics.createCoroutineUnintercepted_3a617i$;
  var ContinuationInterceptor = Kotlin.kotlin.coroutines.ContinuationInterceptor;
  var equals = Kotlin.equals;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Throwable = Error;
  var toString = Kotlin.toString;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var atomic_1 = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$boolean$1;
  var CancellationException_init = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_pdl1vj$;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var AbstractCoroutineContextKey = Kotlin.kotlin.coroutines.AbstractCoroutineContextKey;
  var AbstractCoroutineContextElement = Kotlin.kotlin.coroutines.AbstractCoroutineContextElement;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var CoroutineContext$Key = Kotlin.kotlin.coroutines.CoroutineContext.Key;
  var CoroutineContext$Element = Kotlin.kotlin.coroutines.CoroutineContext.Element;
  var CancellationException_init_0 = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_wspj0f$;
  var startCoroutine = Kotlin.kotlin.coroutines.startCoroutine_x18nsh$;
  var startCoroutine_0 = Kotlin.kotlin.coroutines.startCoroutine_3a617i$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var L1 = Kotlin.Long.ONE;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_2p08ub$;
  var L0 = Kotlin.Long.ZERO;
  var L4294967296 = new Kotlin.Long(0, 1);
  var L1000000 = Kotlin.Long.fromInt(1000000);
  var L9223372036854 = new Kotlin.Long(2077252342, 2147);
  var L4611686018427387903 = new Kotlin.Long(-1, 1073741823);
  var ensureNotNull = Kotlin.ensureNotNull;
  var Comparable = Kotlin.kotlin.Comparable;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Error_0 = Kotlin.kotlin.Error;
  var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var emptySequence = Kotlin.kotlin.sequences.emptySequence_287e2$;
  var addSuppressed = Kotlin.kotlin.addSuppressed_oh0dqn$;
  var SuspendFunction1 = Function;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_2p08ub$;
  var atomic_2 = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$long$1;
  var fill = Kotlin.kotlin.collections.fill_jfbbbd$;
  var JsMath = Math;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var hashCode = Kotlin.hashCode;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var IndexedValue = Kotlin.kotlin.collections.IndexedValue;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var L_1 = Kotlin.Long.NEG_ONE;
  var copyOf = Kotlin.kotlin.collections.copyOf_8ujjk8$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var toByte = Kotlin.toByte;
  var coerceAtLeast_0 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var ArithmeticException_init = Kotlin.kotlin.ArithmeticException;
  var L3458764513820540928 = new Kotlin.Long(0, 805306368);
  var L1073741823 = Kotlin.Long.fromInt(1073741823);
  var L1152921503533105152 = new Kotlin.Long(-1073741824, 268435455);
  var L1152921504606846976 = new Kotlin.Long(0, 268435456);
  var L2305843009213693952 = new Kotlin.Long(0, 536870912);
  var atomicArrayOfNulls = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomicfu$AtomicRefArray$ofNulls;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var createCoroutineUnintercepted_0 = Kotlin.kotlin.coroutines.intrinsics.createCoroutineUnintercepted_x18nsh$;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_ekzx8g$;
  var HashSet_init_0 = Kotlin.kotlin.collections.HashSet_init_ww73n8$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var AbstractMutableList = Kotlin.kotlin.collections.AbstractMutableList;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  ScopeCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ScopeCoroutine.prototype.constructor = ScopeCoroutine;
  DispatchedCoroutine.prototype = Object.create(ScopeCoroutine.prototype);
  DispatchedCoroutine.prototype.constructor = DispatchedCoroutine;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  RemoveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveOnCancel.prototype.constructor = RemoveOnCancel;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CompletableDeferredImpl.prototype = Object.create(JobSupport.prototype);
  CompletableDeferredImpl.prototype.constructor = CompletableDeferredImpl;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  CoroutineDispatcher$Key.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  CoroutineDispatcher$Key.prototype.constructor = CoroutineDispatcher$Key;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  CoroutineName.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineName.prototype.constructor = CoroutineName;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  EventLoopImplPlatform.prototype = Object.create(EventLoop.prototype);
  EventLoopImplPlatform.prototype.constructor = EventLoopImplPlatform;
  EventLoopImplBase.prototype = Object.create(EventLoopImplPlatform.prototype);
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  JobSupport$ChildCompletion.prototype = Object.create(JobNode.prototype);
  JobSupport$ChildCompletion.prototype.constructor = JobSupport$ChildCompletion;
  JobSupport$AwaitContinuation.prototype = Object.create(CancellableContinuationImpl.prototype);
  JobSupport$AwaitContinuation.prototype.constructor = JobSupport$AwaitContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  ResumeAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeAwaitOnCompletion.prototype.constructor = ResumeAwaitOnCompletion;
  DisposeOnCompletion.prototype = Object.create(JobNode.prototype);
  DisposeOnCompletion.prototype.constructor = DisposeOnCompletion;
  SelectJoinOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectJoinOnCompletion.prototype.constructor = SelectJoinOnCompletion;
  SelectAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectAwaitOnCompletion.prototype.constructor = SelectAwaitOnCompletion;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  NonCancellable.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  SupervisorJobImpl.prototype = Object.create(JobImpl.prototype);
  SupervisorJobImpl.prototype.constructor = SupervisorJobImpl;
  TimeoutCoroutine.prototype = Object.create(ScopeCoroutine.prototype);
  TimeoutCoroutine.prototype.constructor = TimeoutCoroutine;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  AbstractAtomicDesc.prototype = Object.create(AtomicDesc.prototype);
  AbstractAtomicDesc.prototype.constructor = AbstractAtomicDesc;
  AddLastDesc.prototype = Object.create(AbstractAtomicDesc.prototype);
  AddLastDesc.prototype.constructor = AddLastDesc;
  AbstractSendChannel$SendBufferedDesc.prototype = Object.create(AddLastDesc.prototype);
  AbstractSendChannel$SendBufferedDesc.prototype.constructor = AbstractSendChannel$SendBufferedDesc;
  RemoveFirstDesc.prototype = Object.create(AbstractAtomicDesc.prototype);
  RemoveFirstDesc.prototype.constructor = RemoveFirstDesc;
  AbstractSendChannel$TryOfferDesc.prototype = Object.create(RemoveFirstDesc.prototype);
  AbstractSendChannel$TryOfferDesc.prototype.constructor = AbstractSendChannel$TryOfferDesc;
  Send.prototype = Object.create(LinkedListNode.prototype);
  Send.prototype.constructor = Send;
  AbstractSendChannel$SendSelect.prototype = Object.create(Send.prototype);
  AbstractSendChannel$SendSelect.prototype.constructor = AbstractSendChannel$SendSelect;
  AbstractSendChannel$SendBuffered.prototype = Object.create(Send.prototype);
  AbstractSendChannel$SendBuffered.prototype.constructor = AbstractSendChannel$SendBuffered;
  AbstractChannel$TryPollDesc.prototype = Object.create(RemoveFirstDesc.prototype);
  AbstractChannel$TryPollDesc.prototype.constructor = AbstractChannel$TryPollDesc;
  AbstractChannel$RemoveReceiveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  AbstractChannel$RemoveReceiveOnCancel.prototype.constructor = AbstractChannel$RemoveReceiveOnCancel;
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  AbstractChannel$ReceiveElement.prototype = Object.create(Receive.prototype);
  AbstractChannel$ReceiveElement.prototype.constructor = AbstractChannel$ReceiveElement;
  AbstractChannel$ReceiveElementWithUndeliveredHandler.prototype = Object.create(AbstractChannel$ReceiveElement.prototype);
  AbstractChannel$ReceiveElementWithUndeliveredHandler.prototype.constructor = AbstractChannel$ReceiveElementWithUndeliveredHandler;
  AbstractChannel$ReceiveHasNext.prototype = Object.create(Receive.prototype);
  AbstractChannel$ReceiveHasNext.prototype.constructor = AbstractChannel$ReceiveHasNext;
  AbstractChannel$ReceiveSelect.prototype = Object.create(Receive.prototype);
  AbstractChannel$ReceiveSelect.prototype.constructor = AbstractChannel$ReceiveSelect;
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  SendElement.prototype = Object.create(Send.prototype);
  SendElement.prototype.constructor = SendElement;
  SendElementWithUndeliveredHandler.prototype = Object.create(SendElement.prototype);
  SendElementWithUndeliveredHandler.prototype.constructor = SendElementWithUndeliveredHandler;
  Closed.prototype = Object.create(Send.prototype);
  Closed.prototype.constructor = Closed;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BroadcastCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  BufferOverflow.prototype = Object.create(Enum.prototype);
  BufferOverflow.prototype.constructor = BufferOverflow;
  ChannelResult$Closed.prototype = Object.create(ChannelResult$Failed.prototype);
  ChannelResult$Closed.prototype.constructor = ChannelResult$Closed;
  ClosedSendChannelException.prototype = Object.create(IllegalStateException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ChannelCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  AtomicOp.prototype = Object.create(OpDescriptor.prototype);
  AtomicOp.prototype.constructor = AtomicOp;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  LimitedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  LimitedDispatcher.prototype.constructor = LimitedDispatcher;
  UndeliveredElementException.prototype = Object.create(RuntimeException.prototype);
  UndeliveredElementException.prototype.constructor = UndeliveredElementException;
  SelectBuilderImpl$SelectOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  SelectBuilderImpl$SelectOnCancelling.prototype.constructor = SelectBuilderImpl$SelectOnCancelling;
  SelectBuilderImpl$PairSelectOp.prototype = Object.create(OpDescriptor.prototype);
  SelectBuilderImpl$PairSelectOp.prototype.constructor = SelectBuilderImpl$PairSelectOp;
  SelectBuilderImpl$AtomicSelectOp.prototype = Object.create(AtomicOp.prototype);
  SelectBuilderImpl$AtomicSelectOp.prototype.constructor = SelectBuilderImpl$AtomicSelectOp;
  SelectBuilderImpl$DisposeNode.prototype = Object.create(LinkedListNode.prototype);
  SelectBuilderImpl$DisposeNode.prototype.constructor = SelectBuilderImpl$DisposeNode;
  SelectBuilderImpl.prototype = Object.create(LinkedListHead.prototype);
  SelectBuilderImpl.prototype.constructor = SelectBuilderImpl;
  MutexImpl$TryLockDesc$PrepareOp.prototype = Object.create(OpDescriptor.prototype);
  MutexImpl$TryLockDesc$PrepareOp.prototype.constructor = MutexImpl$TryLockDesc$PrepareOp;
  MutexImpl$TryLockDesc.prototype = Object.create(AtomicDesc.prototype);
  MutexImpl$TryLockDesc.prototype.constructor = MutexImpl$TryLockDesc;
  MutexImpl$LockedQueue.prototype = Object.create(LinkedListHead.prototype);
  MutexImpl$LockedQueue.prototype.constructor = MutexImpl$LockedQueue;
  MutexImpl$LockWaiter.prototype = Object.create(LinkedListNode.prototype);
  MutexImpl$LockWaiter.prototype.constructor = MutexImpl$LockWaiter;
  MutexImpl$LockCont.prototype = Object.create(MutexImpl$LockWaiter.prototype);
  MutexImpl$LockCont.prototype.constructor = MutexImpl$LockCont;
  MutexImpl$LockSelect.prototype = Object.create(MutexImpl$LockWaiter.prototype);
  MutexImpl$LockSelect.prototype.constructor = MutexImpl$LockSelect;
  MutexImpl$UnlockOp.prototype = Object.create(AtomicOp.prototype);
  MutexImpl$UnlockOp.prototype.constructor = MutexImpl$UnlockOp;
  CloseableCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  CloseableCoroutineDispatcher.prototype.constructor = CloseableCoroutineDispatcher;
  UndispatchedCoroutine.prototype = Object.create(ScopeCoroutine.prototype);
  UndispatchedCoroutine.prototype.constructor = UndispatchedCoroutine;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  SetTimeoutBasedDispatcher$ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  SetTimeoutBasedDispatcher$ScheduledMessageQueue.prototype.constructor = SetTimeoutBasedDispatcher$ScheduledMessageQueue;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  AbortFlowException.prototype = Object.create(CancellationException.prototype);
  AbortFlowException.prototype.constructor = AbortFlowException;
  PrepareOp.prototype = Object.create(OpDescriptor.prototype);
  PrepareOp.prototype.constructor = PrepareOp;
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob)
      this.initParentJob_5dx9e$(parentContext.get_j3r2sn$(Job$Key_getInstance()));
    this.context_p8rm81$_0 = parentContext.plus_1fupul$(this);
  }
  Object.defineProperty(AbstractCoroutine.prototype, 'context', {configurable: true, get: function () {
    return this.context_p8rm81$_0;
  }});
  Object.defineProperty(AbstractCoroutine.prototype, 'coroutineContext', {configurable: true, get: function () {
    return this.context;
  }});
  Object.defineProperty(AbstractCoroutine.prototype, 'isActive', {configurable: true, get: function () {
    return Kotlin.callGetter(this, JobSupport.prototype, 'isActive');
  }});
  AbstractCoroutine.prototype.onCompleted_11rb$ = function (value) {
  };
  AbstractCoroutine.prototype.onCancelled_z1nxw$ = function (cause, handled) {
  };
  AbstractCoroutine.prototype.cancellationExceptionMessage = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.onCompletionInternal_s8jyv4$ = function (state) {
    var tmp$;
    if (Kotlin.isType(state, CompletedExceptionally))
      this.onCancelled_z1nxw$(state.cause, state.handled);
    else {
      this.onCompleted_11rb$((tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
    }
  };
  AbstractCoroutine.prototype.resumeWith_tl1gpc$ = function (result) {
    var state = this.makeCompletingOnce_8ea4ql$(toState(result));
    if (state === COMPLETING_WAITING_CHILDREN)
      return;
    this.afterResume_s8jyv4$(state);
  };
  AbstractCoroutine.prototype.afterResume_s8jyv4$ = function (state) {
    this.afterCompletion_s8jyv4$(state);
  };
  AbstractCoroutine.prototype.handleOnCompletionException_tcv7n7$ = function (exception) {
    handleCoroutineException(this.context, exception);
  };
  AbstractCoroutine.prototype.nameString = function () {
    var tmp$;
    tmp$ = get_coroutineName(this.context);
    if (tmp$ == null) {
      return JobSupport.prototype.nameString.call(this);
    }
    var coroutineName = tmp$;
    return '"' + coroutineName + '"' + ':' + JobSupport.prototype.nameString.call(this);
  };
  AbstractCoroutine.prototype.start_b5ul0p$ = function (start, receiver, block) {
    start.invoke_3o0yor$(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractCoroutine', interfaces: [CoroutineScope, Continuation, JobSupport, Job]};
  function launch($receiver, context, start, block) {
    if (context === void 0)
      context = coroutines.EmptyCoroutineContext;
    if (start === void 0)
      start = CoroutineStart$DEFAULT_getInstance();
    var newContext = newCoroutineContext($receiver, context);
    var coroutine = start.isLazy ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_b5ul0p$(start, coroutine, block);
    return coroutine;
  }
  function async($receiver, context, start, block) {
    if (context === void 0)
      context = coroutines.EmptyCoroutineContext;
    if (start === void 0)
      start = CoroutineStart$DEFAULT_getInstance();
    var newContext = newCoroutineContext($receiver, context);
    var coroutine = start.isLazy ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_b5ul0p$(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.getCompleted = function () {
    var tmp$;
    return (tmp$ = this.getCompletedInternal_8be2vx$()) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  function Coroutine$await($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.awaitInternal_8be2vx$(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DeferredCoroutine.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(DeferredCoroutine.prototype, 'onAwait', {configurable: true, get: function () {
    return this;
  }});
  DeferredCoroutine.prototype.registerSelectClause1_o3xas4$ = function (select, block) {
    this.registerSelectClause1Internal_u6kgbh$(select, block);
  };
  DeferredCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'DeferredCoroutine', interfaces: [SelectClause1, Deferred, AbstractCoroutine]};
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.continuation_0 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.onStart = function () {
    startCoroutineCancellable_1(this.continuation_0, this);
  };
  LazyDeferredCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'LazyDeferredCoroutine', interfaces: [DeferredCoroutine]};
  function withContext$lambda(closure$context, closure$block) {
    return function (uCont) {
      var oldContext = uCont.context;
      var newContext = newCoroutineContext_0(oldContext, closure$context);
      ensureActive_1(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, uCont);
        return startUndispatchedOrReturn(coroutine, coroutine, closure$block);
      }
      if (equals(newContext.get_j3r2sn$(ContinuationInterceptor.Key), oldContext.get_j3r2sn$(ContinuationInterceptor.Key))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, uCont);
        return startUndispatchedOrReturn(coroutine_0, coroutine_0, closure$block);
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, uCont);
      startCoroutineCancellable_0(closure$block, coroutine_1, coroutine_1);
      return coroutine_1.getResult();
    };
  }
  function withContext(context, block, continuation) {
    return withContext$lambda(context, block)(continuation);
  }
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.invoke_5xrhu2$', wrapFunction(function () {
    var withContext = _.kotlinx.coroutines.withContext_i5cbzn$;
    return function ($receiver, block, continuation) {
      Kotlin.suspendCall(withContext($receiver, block, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.handleJobException_tcv7n7$ = function (exception) {
    handleCoroutineException(this.context, exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'StandaloneCoroutine', interfaces: [AbstractCoroutine]};
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.continuation_0 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.onStart = function () {
    startCoroutineCancellable_1(this.continuation_0, this);
  };
  LazyStandaloneCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'LazyStandaloneCoroutine', interfaces: [StandaloneCoroutine]};
  var UNDECIDED;
  var SUSPENDED;
  var RESUMED;
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this._decision_0 = atomic_0(0);
  }
  DispatchedCoroutine.prototype.trySuspend_0 = function () {
    var $receiver = this._decision_0;
    while (true) {
      switch ($receiver.kotlinx$atomicfu$value) {
        case 0:
          if (this._decision_0.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          throw IllegalStateException_init('Already suspended'.toString());
      }
    }
  };
  DispatchedCoroutine.prototype.tryResume_0 = function () {
    var $receiver = this._decision_0;
    while (true) {
      switch ($receiver.kotlinx$atomicfu$value) {
        case 0:
          if (this._decision_0.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          throw IllegalStateException_init('Already resumed'.toString());
      }
    }
  };
  DispatchedCoroutine.prototype.afterCompletion_s8jyv4$ = function (state) {
    this.afterResume_s8jyv4$(state);
  };
  DispatchedCoroutine.prototype.afterResume_s8jyv4$ = function (state) {
    if (this.tryResume_0())
      return;
    resumeCancellableWith(intercepted(this.uCont), recoverResult(state, this.uCont));
  };
  DispatchedCoroutine.prototype.getResult = function () {
    var tmp$;
    if (this.trySuspend_0())
      return COROUTINE_SUSPENDED;
    var state = unboxState(this.state_8be2vx$);
    if (Kotlin.isType(state, CompletedExceptionally))
      throw state.cause;
    return (tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  DispatchedCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'DispatchedCoroutine', interfaces: [ScopeCoroutine]};
  function CancellableContinuation() {
  }
  CancellableContinuation.prototype.tryResume_19pj23$ = function (value, idempotent, callback$default) {
    if (idempotent === void 0)
      idempotent = null;
    return callback$default ? callback$default(value, idempotent) : this.tryResume_19pj23$$default(value, idempotent);
  };
  CancellableContinuation.prototype.cancel_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.cancel_dbl4no$$default(cause);
  };
  CancellableContinuation.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CancellableContinuation', interfaces: [Continuation]};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.suspendCancellableCoroutine_o6sdx9$', wrapFunction(function () {
    var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
    var CancellableContinuationImpl_init = _.kotlinx.coroutines.CancellableContinuationImpl;
    function suspendCancellableCoroutine$lambda(closure$block) {
      return function (uCont) {
        var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
        cancellable.initCancellability();
        closure$block(cancellable);
        return cancellable.getResult();
      };
    }
    return function (block, continuation) {
      Kotlin.suspendCall(suspendCancellableCoroutine$lambda(block)(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.suspendCancellableCoroutineReusable_mkkzkw$', wrapFunction(function () {
    var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
    var getOrCreateCancellableContinuation = _.kotlinx.coroutines.getOrCreateCancellableContinuation_3j0xf1$;
    function suspendCancellableCoroutineReusable$lambda(closure$block) {
      return function (uCont) {
        var cancellable = getOrCreateCancellableContinuation(intercepted(uCont));
        closure$block(cancellable);
        return cancellable.getResult();
      };
    }
    return function (block, continuation) {
      Kotlin.suspendCall(suspendCancellableCoroutineReusable$lambda(block)(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function getOrCreateCancellableContinuation(delegate) {
    var tmp$, tmp$_0;
    if (!Kotlin.isType(delegate, DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    tmp$_0 = (tmp$ = delegate.claimReusableCancellableContinuation()) != null ? tmp$.resetStateReusable_8be2vx$() ? tmp$ : null : null;
    if (tmp$_0 == null) {
      return new CancellableContinuationImpl(delegate, 2);
    }
    return tmp$_0;
  }
  function removeOnCancellation($receiver, node) {
    $receiver.invokeOnCancellation_f05bi3$(new RemoveOnCancel(node));
  }
  function disposeOnCancellation($receiver, handle) {
    $receiver.invokeOnCancellation_f05bi3$(new DisposeOnCancel(handle));
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.node_0 = node;
  }
  RemoveOnCancel.prototype.invoke = function (cause) {
    this.node_0.remove();
  };
  RemoveOnCancel.prototype.toString = function () {
    return 'RemoveOnCancel[' + this.node_0 + ']';
  };
  RemoveOnCancel.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoveOnCancel', interfaces: [BeforeResumeCancelHandler]};
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.handle_0 = handle;
  }
  DisposeOnCancel.prototype.invoke = function (cause) {
    this.handle_0.dispose();
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.handle_0 + ']';
  };
  DisposeOnCancel.$metadata$ = {kind: Kind_CLASS, simpleName: 'DisposeOnCancel', interfaces: [CancelHandler]};
  var UNDECIDED_0;
  var SUSPENDED_0;
  var RESUMED_0;
  var RESUME_TOKEN;
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_dhbmku$_0 = delegate;
    this.context_xycjfy$_0 = this.delegate.context;
    this._decision_0 = atomic_0(0);
    this._state_0 = atomic(Active_getInstance());
    this.parentHandle_0 = null;
  }
  Object.defineProperty(CancellableContinuationImpl.prototype, 'delegate', {get: function () {
    return this.delegate_dhbmku$_0;
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'context', {configurable: true, get: function () {
    return this.context_xycjfy$_0;
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'state_8be2vx$', {configurable: true, get: function () {
    return this._state_0.kotlinx$atomicfu$value;
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'isActive', {configurable: true, get: function () {
    return Kotlin.isType(this.state_8be2vx$, NotCompleted);
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'isCompleted', {configurable: true, get: function () {
    return !Kotlin.isType(this.state_8be2vx$, NotCompleted);
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'isCancelled', {configurable: true, get: function () {
    return Kotlin.isType(this.state_8be2vx$, CancelledContinuation);
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'stateDebugRepresentation_0', {configurable: true, get: function () {
    var tmp$;
    tmp$ = this.state_8be2vx$;
    if (Kotlin.isType(tmp$, NotCompleted))
      return 'Active';
    else if (Kotlin.isType(tmp$, CancelledContinuation))
      return 'Cancelled';
    else
      return 'Completed';
  }});
  CancellableContinuationImpl.prototype.initCancellability = function () {
    var tmp$;
    tmp$ = this.installParentHandle_0();
    if (tmp$ == null) {
      return;
    }
    var handle = tmp$;
    if (this.isCompleted) {
      handle.dispose();
      this.parentHandle_0 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.isReusable_0 = function () {
    var tmp$;
    return get_isReusableMode(this.resumeMode) && (Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : throwCCE()).isReusable();
  };
  CancellableContinuationImpl.prototype.resetStateReusable_8be2vx$ = function () {
    var state = this._state_0.kotlinx$atomicfu$value;
    if (Kotlin.isType(state, CompletedContinuation) && state.idempotentResume != null) {
      this.detachChild_8be2vx$();
      return false;
    }
    this._decision_0.kotlinx$atomicfu$value = 0;
    this._state_0.kotlinx$atomicfu$value = Active_getInstance();
    return true;
  };
  Object.defineProperty(CancellableContinuationImpl.prototype, 'callerFrame', {configurable: true, get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.delegate, CoroutineStackFrame) ? tmp$ : null;
  }});
  CancellableContinuationImpl.prototype.getStackTraceElement = function () {
    return null;
  };
  CancellableContinuationImpl.prototype.takeState = function () {
    return this.state_8be2vx$;
  };
  CancellableContinuationImpl.prototype.cancelCompletedResult_83a7kv$ = function (takenState, cause) {
    var $receiver = this._state_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      if (Kotlin.isType(state, NotCompleted)) {
        throw IllegalStateException_init('Not completed'.toString());
      } else if (Kotlin.isType(state, CompletedExceptionally))
        return;
      else if (Kotlin.isType(state, CompletedContinuation)) {
        if (!!state.cancelled) {
          var message = 'Must be called at most once';
          throw IllegalStateException_init(message.toString());
        }
        var update = state.copy_pkdjca$(void 0, void 0, void 0, void 0, cause);
        if (this._state_0.atomicfu$compareAndSet(state, update)) {
          state.invokeHandlers_gygfbe$(this, cause);
          return;
        }
      } else {
        if (this._state_0.atomicfu$compareAndSet(state, new CompletedContinuation(state, void 0, void 0, void 0, cause))) {
          return;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.cancelLater_0 = function (cause) {
    var tmp$;
    if (!this.isReusable_0())
      return false;
    var dispatched = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : throwCCE();
    return dispatched.postponeCancellation_tcv7n7$(cause);
  };
  CancellableContinuationImpl.prototype.cancel_dbl4no$$default = function (cause) {
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      action$break: do {
        var tmp$, tmp$_0;
        if (!Kotlin.isType(state, NotCompleted))
          return false;
        var update = new CancelledContinuation(this, cause, Kotlin.isType(state, CancelHandler));
        if (!this._state_0.atomicfu$compareAndSet(state, update))
          break action$break;
        if ((tmp$_0 = Kotlin.isType(tmp$ = state, CancelHandler) ? tmp$ : null) != null) {
          this.callCancelHandler_gluymk$(tmp$_0, cause);
        }
        this.detachChildIfNonResuable_0();
        this.dispatchResume_0(this.resumeMode);
        return true;
      }
       while (false);
    }
  };
  CancellableContinuationImpl.prototype.parentCancelled_8o0b5c$ = function (cause) {
    if (this.cancelLater_0(cause))
      return;
    this.cancel_dbl4no$(cause);
    this.detachChildIfNonResuable_0();
  };
  CancellableContinuationImpl.prototype.callCancelHandlerSafely_0 = function (block) {
    try {
      block();
    } catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        handleCoroutineException(this.context, new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
      } else
        throw ex;
    }
  };
  CancellableContinuationImpl.prototype.callCancelHandler_0 = function (handler, cause) {
    try {
      invokeIt(handler, cause);
    } catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        handleCoroutineException(this.context, new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
      } else
        throw ex;
    }
  };
  CancellableContinuationImpl.prototype.callCancelHandler_gluymk$ = function (handler, cause) {
    try {
      handler.invoke(cause);
    } catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        handleCoroutineException(this.context, new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
      } else
        throw ex;
    }
  };
  CancellableContinuationImpl.prototype.callOnCancellation_e590hv$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        handleCoroutineException(this.context, new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else
        throw ex;
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause_dqr1mp$ = function (parent) {
    return parent.getCancellationException();
  };
  CancellableContinuationImpl.prototype.trySuspend_0 = function () {
    var $receiver = this._decision_0;
    while (true) {
      switch ($receiver.kotlinx$atomicfu$value) {
        case 0:
          if (this._decision_0.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          throw IllegalStateException_init('Already suspended'.toString());
      }
    }
  };
  CancellableContinuationImpl.prototype.tryResume_0 = function () {
    var $receiver = this._decision_0;
    while (true) {
      switch ($receiver.kotlinx$atomicfu$value) {
        case 0:
          if (this._decision_0.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          throw IllegalStateException_init('Already resumed'.toString());
      }
    }
  };
  CancellableContinuationImpl.prototype.getResult = function () {
    var isReusable = this.isReusable_0();
    if (this.trySuspend_0()) {
      if (this.parentHandle_0 == null) {
        this.installParentHandle_0();
      }
      if (isReusable) {
        this.releaseClaimedReusableContinuation_0();
      }
      return COROUTINE_SUSPENDED;
    }
    if (isReusable) {
      this.releaseClaimedReusableContinuation_0();
    }
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, CompletedExceptionally))
      throw recoverStackTrace(state.cause, this);
    if (get_isCancellableMode(this.resumeMode)) {
      var job = this.context.get_j3r2sn$(Job$Key_getInstance());
      if (job != null && !job.isActive) {
        var cause = job.getCancellationException();
        this.cancelCompletedResult_83a7kv$(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.getSuccessfulResult_tpy1pm$(state);
  };
  CancellableContinuationImpl.prototype.installParentHandle_0 = function () {
    var tmp$;
    tmp$ = this.context.get_j3r2sn$(Job$Key_getInstance());
    if (tmp$ == null) {
      return null;
    }
    var parent = tmp$;
    var handle = parent.invokeOnCompletion_ct2b2z$(true, void 0, new ChildContinuation(this));
    this.parentHandle_0 = handle;
    return handle;
  };
  CancellableContinuationImpl.prototype.releaseClaimedReusableContinuation_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : null) != null ? tmp$_0.tryReleaseClaimedContinuation_jp3215$(this) : null;
    if (tmp$_1 == null) {
      return;
    }
    var cancellationCause = tmp$_1;
    this.detachChild_8be2vx$();
    this.cancel_dbl4no$(cancellationCause);
  };
  CancellableContinuationImpl.prototype.resumeWith_tl1gpc$ = function (result) {
    this.resumeImpl_0(toState_0(result, this), this.resumeMode);
  };
  CancellableContinuationImpl.prototype.resume_q1ktlu$ = function (value, onCancellation) {
    this.resumeImpl_0(value, this.resumeMode, onCancellation);
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_f05bi3$ = function (handler) {
    var cancelHandler = this.makeCancelHandler_0(handler);
    var $receiver = this._state_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      var tmp$, tmp$_0;
      if (Kotlin.isType(state, Active)) {
        if (this._state_0.atomicfu$compareAndSet(state, cancelHandler))
          return;
      } else if (Kotlin.isType(state, CancelHandler))
        this.multipleHandlersError_0(handler, state);
      else if (Kotlin.isType(state, CompletedExceptionally)) {
        if (!state.makeHandled())
          this.multipleHandlersError_0(handler, state);
        if (Kotlin.isType(state, CancelledContinuation)) {
          this.callCancelHandler_0(handler, (tmp$_0 = Kotlin.isType(tmp$ = state, CompletedExceptionally) ? tmp$ : null) != null ? tmp$_0.cause : null);
        }
        return;
      } else if (Kotlin.isType(state, CompletedContinuation)) {
        if (state.cancelHandler != null)
          this.multipleHandlersError_0(handler, state);
        if (Kotlin.isType(cancelHandler, BeforeResumeCancelHandler))
          return;
        if (state.cancelled) {
          this.callCancelHandler_0(handler, state.cancelCause);
          return;
        }
        var update = state.copy_pkdjca$(void 0, cancelHandler);
        if (this._state_0.atomicfu$compareAndSet(state, update))
          return;
      } else {
        if (Kotlin.isType(cancelHandler, BeforeResumeCancelHandler))
          return;
        var update_0 = new CompletedContinuation(state, cancelHandler);
        if (this._state_0.atomicfu$compareAndSet(state, update_0))
          return;
      }
    }
  };
  CancellableContinuationImpl.prototype.multipleHandlersError_0 = function (handler, state) {
    throw IllegalStateException_init(("It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state)).toString());
  };
  CancellableContinuationImpl.prototype.makeCancelHandler_0 = function (handler) {
    return Kotlin.isType(handler, CancelHandler) ? handler : new InvokeOnCancel(handler);
  };
  CancellableContinuationImpl.prototype.dispatchResume_0 = function (mode) {
    if (this.tryResume_0())
      return;
    dispatch(this, mode);
  };
  CancellableContinuationImpl.prototype.resumedState_0 = function (state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp$;
    if (Kotlin.isType(proposedUpdate, CompletedExceptionally)) {
      return proposedUpdate;
    } else if (!get_isCancellableMode(resumeMode) && idempotent == null)
      return proposedUpdate;
    else if (onCancellation != null || (Kotlin.isType(state, CancelHandler) && !Kotlin.isType(state, BeforeResumeCancelHandler)) || idempotent != null) {
      return new CompletedContinuation(proposedUpdate, Kotlin.isType(tmp$ = state, CancelHandler) ? tmp$ : null, onCancellation, idempotent);
    } else
      return proposedUpdate;
  };
  CancellableContinuationImpl.prototype.resumeImpl_0 = function (proposedUpdate, resumeMode, onCancellation) {
    if (onCancellation === void 0)
      onCancellation = null;
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      action$break: do {
        if (Kotlin.isType(state, NotCompleted)) {
          var update = this.resumedState_0(state, proposedUpdate, resumeMode, onCancellation, null);
          if (!this._state_0.atomicfu$compareAndSet(state, update))
            break action$break;
          this.detachChildIfNonResuable_0();
          this.dispatchResume_0(resumeMode);
          return;
        } else if (Kotlin.isType(state, CancelledContinuation))
          if (state.makeResumed()) {
            if (onCancellation != null) {
              this.callOnCancellation_e590hv$(onCancellation, state.cause);
            }
            return;
          }
        this.alreadyResumedError_0(proposedUpdate);
      }
       while (false);
    }
  };
  CancellableContinuationImpl.prototype.tryResumeImpl_0 = function (proposedUpdate, idempotent, onCancellation) {
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      action$break: do {
        var tmp$;
        if (Kotlin.isType(state, NotCompleted)) {
          var update = this.resumedState_0(state, proposedUpdate, this.resumeMode, onCancellation, idempotent);
          if (!this._state_0.atomicfu$compareAndSet(state, update))
            break action$break;
          this.detachChildIfNonResuable_0();
          return RESUME_TOKEN;
        } else if (Kotlin.isType(state, CompletedContinuation)) {
          if (idempotent != null && state.idempotentResume === idempotent) {
            tmp$ = RESUME_TOKEN;
          } else {
            tmp$ = null;
          }
          return tmp$;
        } else
          return null;
      }
       while (false);
    }
  };
  CancellableContinuationImpl.prototype.alreadyResumedError_0 = function (proposedUpdate) {
    throw IllegalStateException_init(('Already resumed, but proposed with update ' + toString(proposedUpdate)).toString());
  };
  CancellableContinuationImpl.prototype.detachChildIfNonResuable_0 = function () {
    if (!this.isReusable_0())
      this.detachChild_8be2vx$();
  };
  CancellableContinuationImpl.prototype.detachChild_8be2vx$ = function () {
    var tmp$;
    tmp$ = this.parentHandle_0;
    if (tmp$ == null) {
      return;
    }
    var handle = tmp$;
    handle.dispose();
    this.parentHandle_0 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.tryResume_19pj23$$default = function (value, idempotent) {
    return this.tryResumeImpl_0(value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.tryResume_i8qury$ = function (value, idempotent, onCancellation) {
    return this.tryResumeImpl_0(value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.tryResumeWithException_tcv7n7$ = function (exception) {
    return this.tryResumeImpl_0(new CompletedExceptionally(exception), null, null);
  };
  CancellableContinuationImpl.prototype.completeResume_za3rmp$ = function (token) {
    this.dispatchResume_0(this.resumeMode);
  };
  CancellableContinuationImpl.prototype.resumeUndispatched_hyuxa3$ = function ($receiver, value) {
    var tmp$;
    var dc = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : null;
    this.resumeImpl_0(value, (dc != null ? dc.dispatcher : null) === $receiver ? 4 : this.resumeMode);
  };
  CancellableContinuationImpl.prototype.resumeUndispatchedWithException_gd0rtt$ = function ($receiver, exception) {
    var tmp$;
    var dc = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : null;
    this.resumeImpl_0(new CompletedExceptionally(exception), (dc != null ? dc.dispatcher : null) === $receiver ? 4 : this.resumeMode);
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_tpy1pm$ = function (state) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(state, CompletedContinuation))
      return (tmp$ = state.result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    else
      return (tmp$_0 = state) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  CancellableContinuationImpl.prototype.getExceptionalResult_s8jyv4$ = function (state) {
    var tmp$;
    return (tmp$ = DispatchedTask.prototype.getExceptionalResult_s8jyv4$.call(this, state)) != null ? recoverStackTrace(tmp$, this.delegate) : null;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.nameString() + '(' + toDebugString(this.delegate) + '){' + this.stateDebugRepresentation_0 + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.nameString = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CancellableContinuationImpl', interfaces: [CoroutineStackFrame, CancellableContinuation, DispatchedTask]};
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'NotCompleted', interfaces: []};
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Active', interfaces: [NotCompleted]};
  var Active_instance = null;
  function Active_getInstance() {
    if (Active_instance === null) {
      new Active();
    }
    return Active_instance;
  }
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = {kind: Kind_CLASS, simpleName: 'CancelHandler', interfaces: [NotCompleted, CancelHandlerBase]};
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = {kind: Kind_CLASS, simpleName: 'BeforeResumeCancelHandler', interfaces: [CancelHandler]};
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.handler_0 = handler;
  }
  InvokeOnCancel.prototype.invoke = function (cause) {
    this.handler_0(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.handler_0) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancel.$metadata$ = {kind: Kind_CLASS, simpleName: 'InvokeOnCancel', interfaces: [CancelHandler]};
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    if (cancelHandler === void 0)
      cancelHandler = null;
    if (onCancellation === void 0)
      onCancellation = null;
    if (idempotentResume === void 0)
      idempotentResume = null;
    if (cancelCause === void 0)
      cancelCause = null;
    this.result = result;
    this.cancelHandler = cancelHandler;
    this.onCancellation = onCancellation;
    this.idempotentResume = idempotentResume;
    this.cancelCause = cancelCause;
  }
  Object.defineProperty(CompletedContinuation.prototype, 'cancelled', {configurable: true, get: function () {
    return this.cancelCause != null;
  }});
  CompletedContinuation.prototype.invokeHandlers_gygfbe$ = function (cont, cause) {
    var tmp$, tmp$_0;
    if ((tmp$ = this.cancelHandler) != null) {
      cont.callCancelHandler_gluymk$(tmp$, cause);
    }
    if ((tmp$_0 = this.onCancellation) != null) {
      cont.callOnCancellation_e590hv$(tmp$_0, cause);
    }
  };
  CompletedContinuation.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletedContinuation', interfaces: []};
  CompletedContinuation.prototype.component1 = function () {
    return this.result;
  };
  CompletedContinuation.prototype.component2 = function () {
    return this.cancelHandler;
  };
  CompletedContinuation.prototype.component3 = function () {
    return this.onCancellation;
  };
  CompletedContinuation.prototype.component4 = function () {
    return this.idempotentResume;
  };
  CompletedContinuation.prototype.component5 = function () {
    return this.cancelCause;
  };
  CompletedContinuation.prototype.copy_pkdjca$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result === void 0 ? this.result : result, cancelHandler === void 0 ? this.cancelHandler : cancelHandler, onCancellation === void 0 ? this.onCancellation : onCancellation, idempotentResume === void 0 ? this.idempotentResume : idempotentResume, cancelCause === void 0 ? this.cancelCause : cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + Kotlin.toString(this.result) + (', cancelHandler=' + Kotlin.toString(this.cancelHandler)) + (', onCancellation=' + Kotlin.toString(this.onCancellation)) + (', idempotentResume=' + Kotlin.toString(this.idempotentResume)) + (', cancelCause=' + Kotlin.toString(this.cancelCause)) + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    result = result * 31 + Kotlin.hashCode(this.cancelHandler) | 0;
    result = result * 31 + Kotlin.hashCode(this.onCancellation) | 0;
    result = result * 31 + Kotlin.hashCode(this.idempotentResume) | 0;
    result = result * 31 + Kotlin.hashCode(this.cancelCause) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.cancelHandler, other.cancelHandler) && Kotlin.equals(this.onCancellation, other.onCancellation) && Kotlin.equals(this.idempotentResume, other.idempotentResume) && Kotlin.equals(this.cancelCause, other.cancelCause)))));
  };
  function CompletableDeferred() {
  }
  CompletableDeferred.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CompletableDeferred', interfaces: [Deferred]};
  function CompletableDeferred_0(parent) {
    if (parent === void 0)
      parent = null;
    return new CompletableDeferredImpl(parent);
  }
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_5dx9e$(parent);
  }
  Object.defineProperty(CompletableDeferredImpl.prototype, 'onCancelComplete', {configurable: true, get: function () {
    return true;
  }});
  CompletableDeferredImpl.prototype.getCompleted = function () {
    var tmp$;
    return (tmp$ = this.getCompletedInternal_8be2vx$()) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  function Coroutine$await_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$await_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await_0.prototype.constructor = Coroutine$await_0;
  Coroutine$await_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.awaitInternal_8be2vx$(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  CompletableDeferredImpl.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(CompletableDeferredImpl.prototype, 'onAwait', {configurable: true, get: function () {
    return this;
  }});
  CompletableDeferredImpl.prototype.registerSelectClause1_o3xas4$ = function (select, block) {
    this.registerSelectClause1Internal_u6kgbh$(select, block);
  };
  CompletableDeferredImpl.prototype.complete_11rb$ = function (value) {
    return this.makeCompleting_8ea4ql$(value);
  };
  CompletableDeferredImpl.prototype.completeExceptionally_tcv7n7$ = function (exception) {
    return this.makeCompleting_8ea4ql$(new CompletedExceptionally(exception));
  };
  CompletableDeferredImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletableDeferredImpl', interfaces: [SelectClause1, CompletableDeferred, JobSupport]};
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CompletableJob', interfaces: [Job]};
  function toState($receiver, onCancellation) {
    if (onCancellation === void 0)
      onCancellation = null;
    var tmp$, tmp$_0;
    var exception = $receiver.exceptionOrNull();
    if (exception == null) {
      var it = (tmp$ = $receiver.value) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
      tmp$_0 = onCancellation != null ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      tmp$_0 = new CompletedExceptionally(exception);
    }
    return tmp$_0;
  }
  function toState_0($receiver, caller) {
    var tmp$, tmp$_0;
    var exception = $receiver.exceptionOrNull();
    if (exception == null) {
      tmp$_0 = (tmp$ = $receiver.value) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    } else {
      tmp$_0 = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp$_0;
  }
  function recoverResult(state, uCont) {
    var tmp$;
    if (Kotlin.isType(state, CompletedExceptionally)) {
      return new Result(createFailure(recoverStackTrace(state.cause, uCont)));
    } else {
      Result.Companion;
      return new Result((tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
    }
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.result = result;
    this.onCancellation = onCancellation;
  }
  CompletedWithCancellation.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletedWithCancellation', interfaces: []};
  CompletedWithCancellation.prototype.component1 = function () {
    return this.result;
  };
  CompletedWithCancellation.prototype.component2 = function () {
    return this.onCancellation;
  };
  CompletedWithCancellation.prototype.copy_pe4fyg$ = function (result, onCancellation) {
    return new CompletedWithCancellation(result === void 0 ? this.result : result, onCancellation === void 0 ? this.onCancellation : onCancellation);
  };
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + Kotlin.toString(this.result) + (', onCancellation=' + Kotlin.toString(this.onCancellation)) + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    result = result * 31 + Kotlin.hashCode(this.onCancellation) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.onCancellation, other.onCancellation)))));
  };
  function CompletedExceptionally(cause, handled) {
    if (handled === void 0)
      handled = false;
    this.cause = cause;
    this._handled_0 = atomic_1(handled);
  }
  Object.defineProperty(CompletedExceptionally.prototype, 'handled', {configurable: true, get: function () {
    return this._handled_0.kotlinx$atomicfu$value;
  }});
  CompletedExceptionally.prototype.makeHandled = function () {
    return this._handled_0.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.cause + ']';
  };
  CompletedExceptionally.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletedExceptionally', interfaces: []};
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause != null ? cause : CancellationException_init('Continuation ' + continuation + ' was cancelled normally'), handled);
    this._resumed_0 = atomic_1(false);
  }
  CancelledContinuation.prototype.makeResumed = function () {
    return this._resumed_0.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = {kind: Kind_CLASS, simpleName: 'CancelledContinuation', interfaces: [CompletedExceptionally]};
  function CoroutineDispatcher() {
    CoroutineDispatcher$Key_getInstance();
    AbstractCoroutineContextElement.call(this, ContinuationInterceptor.Key);
  }
  function CoroutineDispatcher$Key() {
    CoroutineDispatcher$Key_instance = this;
    AbstractCoroutineContextKey.call(this, ContinuationInterceptor.Key, CoroutineDispatcher$CoroutineDispatcher$Key_init$lambda);
  }
  function CoroutineDispatcher$CoroutineDispatcher$Key_init$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = it, CoroutineDispatcher) ? tmp$ : null;
  }
  CoroutineDispatcher$Key.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Key', interfaces: [AbstractCoroutineContextKey]};
  var CoroutineDispatcher$Key_instance = null;
  function CoroutineDispatcher$Key_getInstance() {
    if (CoroutineDispatcher$Key_instance === null) {
      new CoroutineDispatcher$Key();
    }
    return CoroutineDispatcher$Key_instance;
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_1fupul$ = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.limitedParallelism_za3lpa$ = function (parallelism) {
    checkParallelism(parallelism);
    return new LimitedDispatcher(this, parallelism);
  };
  CoroutineDispatcher.prototype.dispatchYield_5bn72i$ = function (context, block) {
    this.dispatch_5bn72i$(context, block);
  };
  CoroutineDispatcher.prototype.interceptContinuation_wj8d80$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_k98bjh$ = function (continuation) {
    var tmp$;
    var dispatched = Kotlin.isType(tmp$ = continuation, DispatchedContinuation) ? tmp$ : throwCCE();
    dispatched.release();
  };
  CoroutineDispatcher.prototype.plus_9wrrq5$ = function (other) {
    return other;
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'CoroutineDispatcher', interfaces: [ContinuationInterceptor, AbstractCoroutineContextElement]};
  function handleCoroutineException(context, exception) {
    var tmp$;
    try {
      if ((tmp$ = context.get_j3r2sn$(CoroutineExceptionHandler$Key_getInstance())) != null) {
        tmp$.handleException_1ur55u$(context, exception);
        return;
      }
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return;
      } else
        throw t;
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    return new RuntimeException('Exception while trying to handle coroutine exception', thrownException);
  }
  function CoroutineExceptionHandler_0() {
    CoroutineExceptionHandler$Key_getInstance();
  }
  function CoroutineExceptionHandler$Key() {
    CoroutineExceptionHandler$Key_instance = this;
  }
  CoroutineExceptionHandler$Key.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Key', interfaces: [CoroutineContext$Key]};
  var CoroutineExceptionHandler$Key_instance = null;
  function CoroutineExceptionHandler$Key_getInstance() {
    if (CoroutineExceptionHandler$Key_instance === null) {
      new CoroutineExceptionHandler$Key();
    }
    return CoroutineExceptionHandler$Key_instance;
  }
  CoroutineExceptionHandler_0.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CoroutineExceptionHandler', interfaces: [CoroutineContext$Element]};
  function CoroutineName(name) {
    CoroutineName$Key_getInstance();
    AbstractCoroutineContextElement.call(this, CoroutineName$Key_getInstance());
    this.name = name;
  }
  function CoroutineName$Key() {
    CoroutineName$Key_instance = this;
  }
  CoroutineName$Key.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Key', interfaces: [CoroutineContext$Key]};
  var CoroutineName$Key_instance = null;
  function CoroutineName$Key_getInstance() {
    if (CoroutineName$Key_instance === null) {
      new CoroutineName$Key();
    }
    return CoroutineName$Key_instance;
  }
  CoroutineName.prototype.toString = function () {
    return 'CoroutineName(' + this.name + ')';
  };
  CoroutineName.$metadata$ = {kind: Kind_CLASS, simpleName: 'CoroutineName', interfaces: [AbstractCoroutineContextElement]};
  CoroutineName.prototype.component1 = function () {
    return this.name;
  };
  CoroutineName.prototype.copy_61zpoe$ = function (name) {
    return new CoroutineName(name === void 0 ? this.name : name);
  };
  CoroutineName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  CoroutineName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CoroutineScope', interfaces: []};
  function MainScope() {
    return new ContextScope(SupervisorJob().plus_1fupul$(Dispatchers_getInstance().Main));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  Object.defineProperty(GlobalScope.prototype, 'coroutineContext', {configurable: true, get: function () {
    return coroutines.EmptyCoroutineContext;
  }});
  GlobalScope.$metadata$ = {kind: Kind_OBJECT, simpleName: 'GlobalScope', interfaces: [CoroutineScope]};
  var GlobalScope_instance = null;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance === null) {
      new GlobalScope();
    }
    return GlobalScope_instance;
  }
  function CoroutineScope_0(context) {
    return new ContextScope(context.get_j3r2sn$(Job$Key_getInstance()) != null ? context : context.plus_1fupul$(Job_0()));
  }
  function cancel($receiver, cause) {
    if (cause === void 0)
      cause = null;
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.coroutineContext.get_j3r2sn$(Job$Key_getInstance())) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Scope cannot be cancelled because it does not have a job: ' + $receiver).toString());
    }
    var job = tmp$_0;
    job.cancel_x5z25k$(cause);
  }
  function cancel_0($receiver, message, cause) {
    if (cause === void 0)
      cause = null;
    cancel($receiver, CancellationException_init_0(message, cause));
  }
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.currentCoroutineContext', function (continuation) {
    return Kotlin.coroutineReceiver().context;
  });
  function CoroutineStart(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CoroutineStart_initFields() {
    CoroutineStart_initFields = function () {
    };
    CoroutineStart$DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart$LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart$ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart$UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  var CoroutineStart$DEFAULT_instance;
  function CoroutineStart$DEFAULT_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$DEFAULT_instance;
  }
  var CoroutineStart$LAZY_instance;
  function CoroutineStart$LAZY_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$LAZY_instance;
  }
  var CoroutineStart$ATOMIC_instance;
  function CoroutineStart$ATOMIC_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$ATOMIC_instance;
  }
  var CoroutineStart$UNDISPATCHED_instance;
  function CoroutineStart$UNDISPATCHED_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$UNDISPATCHED_instance;
  }
  CoroutineStart.prototype.invoke_810yno$ = function (block, completion) {
    switch (this.name) {
      case 'DEFAULT':
        startCoroutineCancellable(block, completion);
        break;
      case 'ATOMIC':
        startCoroutine(block, completion);
        break;
      case 'UNDISPATCHED':
        startCoroutineUndispatched(block, completion);
        break;
      case 'LAZY':
        break;
      default:
        Kotlin.noWhenBranchMatched();
        break;
    }
  };
  CoroutineStart.prototype.invoke_3o0yor$ = function (block, receiver, completion) {
    switch (this.name) {
      case 'DEFAULT':
        startCoroutineCancellable_0(block, receiver, completion);
        break;
      case 'ATOMIC':
        startCoroutine_0(block, receiver, completion);
        break;
      case 'UNDISPATCHED':
        startCoroutineUndispatched_0(block, receiver, completion);
        break;
      case 'LAZY':
        break;
      default:
        Kotlin.noWhenBranchMatched();
        break;
    }
  };
  Object.defineProperty(CoroutineStart.prototype, 'isLazy', {configurable: true, get: function () {
    return this === CoroutineStart$LAZY_getInstance();
  }});
  CoroutineStart.$metadata$ = {kind: Kind_CLASS, simpleName: 'CoroutineStart', interfaces: [Enum]};
  function CoroutineStart$values() {
    return [CoroutineStart$DEFAULT_getInstance(), CoroutineStart$LAZY_getInstance(), CoroutineStart$ATOMIC_getInstance(), CoroutineStart$UNDISPATCHED_getInstance()];
  }
  CoroutineStart.values = CoroutineStart$values;
  function CoroutineStart$valueOf(name) {
    switch (name) {
      case 'DEFAULT':
        return CoroutineStart$DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart$LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart$ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart$UNDISPATCHED_getInstance();
      default:
        throwISE('No enum constant kotlinx.coroutines.CoroutineStart.' + name);
    }
  }
  CoroutineStart.valueOf_61zpoe$ = CoroutineStart$valueOf;
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CopyableThrowable', interfaces: []};
  function Deferred() {
  }
  Deferred.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Deferred', interfaces: [Job]};
  function suspendCancellableCoroutine$lambda_1(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
      cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function Delay() {
  }
  function Delay$delay$lambda(closure$time, this$Delay) {
    return function (it) {
      this$Delay.scheduleResumeAfterDelay_egqmvs$(closure$time, it);
      return Unit;
    };
  }
  Delay.prototype.delay_s8cxhz$ = function (time, continuation) {
    if (time.toNumber() <= 0)
      return;
    return suspendCancellableCoroutine$lambda_1(Delay$delay$lambda(time, this))(continuation);
  };
  Delay.prototype.invokeOnTimeout_oczv3n$ = function (timeMillis, block, context) {
    return get_DefaultDelay().invokeOnTimeout_oczv3n$(timeMillis, block, context);
  };
  Delay.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Delay', interfaces: []};
  function delay$lambda(closure$timeMillis) {
    return function (cont) {
      if (closure$timeMillis.compareTo_11rb$(Long$Companion$MAX_VALUE) < 0) {
        get_delay(cont.context).scheduleResumeAfterDelay_egqmvs$(closure$timeMillis, cont);
      }
      return Unit;
    };
  }
  function delay(timeMillis, continuation) {
    if (timeMillis.toNumber() <= 0)
      return;
    return suspendCancellableCoroutine$lambda_1(delay$lambda(timeMillis))(continuation);
  }
  function get_delay($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver.get_j3r2sn$(ContinuationInterceptor.Key), Delay) ? tmp$ : null) != null ? tmp$_0 : get_DefaultDelay();
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_0 = L0;
    this.shared_0 = false;
    this.unconfinedQueue_0 = null;
  }
  EventLoop.prototype.processNextEvent = function () {
    if (!this.processUnconfinedEvent())
      return Long$Companion$MAX_VALUE;
    return L0;
  };
  Object.defineProperty(EventLoop.prototype, 'isEmpty', {configurable: true, get: function () {
    return this.isUnconfinedQueueEmpty;
  }});
  Object.defineProperty(EventLoop.prototype, 'nextTime', {configurable: true, get: function () {
    var tmp$;
    tmp$ = this.unconfinedQueue_0;
    if (tmp$ == null) {
      return Long$Companion$MAX_VALUE;
    }
    var queue = tmp$;
    return queue.isEmpty ? Long$Companion$MAX_VALUE : L0;
  }});
  EventLoop.prototype.processUnconfinedEvent = function () {
    var tmp$, tmp$_0;
    tmp$ = this.unconfinedQueue_0;
    if (tmp$ == null) {
      return false;
    }
    var queue = tmp$;
    tmp$_0 = queue.removeFirstOrNull();
    if (tmp$_0 == null) {
      return false;
    }
    var task = tmp$_0;
    task.run();
    return true;
  };
  EventLoop.prototype.shouldBeProcessedFromContext = function () {
    return false;
  };
  EventLoop.prototype.dispatchUnconfined_4avnfa$ = function (task) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.unconfinedQueue_0) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = new ArrayQueue();
      this.unconfinedQueue_0 = $receiver;
      tmp$_0 = $receiver;
    }
    var queue = tmp$_0;
    queue.addLast_trkh7z$(task);
  };
  Object.defineProperty(EventLoop.prototype, 'isActive', {configurable: true, get: function () {
    return this.useCount_0.toNumber() > 0;
  }});
  Object.defineProperty(EventLoop.prototype, 'isUnconfinedLoopActive', {configurable: true, get: function () {
    return this.useCount_0.compareTo_11rb$(this.delta_0(true)) >= 0;
  }});
  Object.defineProperty(EventLoop.prototype, 'isUnconfinedQueueEmpty', {configurable: true, get: function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.unconfinedQueue_0) != null ? tmp$.isEmpty : null) != null ? tmp$_0 : true;
  }});
  EventLoop.prototype.delta_0 = function (unconfined) {
    return unconfined ? L4294967296 : L1;
  };
  EventLoop.prototype.incrementUseCount_6taknv$ = function (unconfined) {
    if (unconfined === void 0)
      unconfined = false;
    this.useCount_0 = this.useCount_0.add(this.delta_0(unconfined));
    if (!unconfined)
      this.shared_0 = true;
  };
  EventLoop.prototype.decrementUseCount_6taknv$ = function (unconfined) {
    if (unconfined === void 0)
      unconfined = false;
    this.useCount_0 = this.useCount_0.subtract(this.delta_0(unconfined));
    if (this.useCount_0.toNumber() > 0)
      return;
    if (this.shared_0) {
      this.shutdown();
    }
  };
  EventLoop.prototype.limitedParallelism_za3lpa$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  EventLoop.prototype.shutdown = function () {
  };
  EventLoop.$metadata$ = {kind: Kind_CLASS, simpleName: 'EventLoop', interfaces: [CoroutineDispatcher]};
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_0 = new CommonThreadLocal();
  }
  Object.defineProperty(ThreadLocalEventLoop.prototype, 'eventLoop_8be2vx$', {configurable: true, get: function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.ref_0.get()) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = createEventLoop();
      this.ref_0.set_11rb$($receiver);
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  }});
  ThreadLocalEventLoop.prototype.currentOrNull_8be2vx$ = function () {
    return this.ref_0.get();
  };
  ThreadLocalEventLoop.prototype.resetEventLoop_8be2vx$ = function () {
    this.ref_0.set_11rb$(null);
  };
  ThreadLocalEventLoop.prototype.setEventLoop_13etkv$ = function (eventLoop) {
    this.ref_0.set_11rb$(eventLoop);
  };
  ThreadLocalEventLoop.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ThreadLocalEventLoop', interfaces: []};
  var ThreadLocalEventLoop_instance = null;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance === null) {
      new ThreadLocalEventLoop();
    }
    return ThreadLocalEventLoop_instance;
  }
  var DISPOSED_TASK;
  var SCHEDULE_OK;
  var SCHEDULE_COMPLETED;
  var SCHEDULE_DISPOSED;
  var MS_TO_NS;
  var MAX_MS;
  var MAX_DELAY_NS;
  var CLOSED_EMPTY;
  function EventLoopImplBase() {
    EventLoopImplPlatform.call(this);
    this._queue_0 = atomic(null);
    this._delayed_0 = atomic(null);
    this._isCompleted_0 = atomic_1(false);
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException.call(this, message, cause);
    this.name = 'CompletionHandlerException';
  }
  CompletionHandlerException.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletionHandlerException', interfaces: [RuntimeException]};
  function CoroutinesInternalError(message, cause) {
    Error_0.call(this, message, cause);
    this.name = 'CoroutinesInternalError';
  }
  CoroutinesInternalError.$metadata$ = {kind: Kind_CLASS, simpleName: 'CoroutinesInternalError', interfaces: [Error_0]};
  function Job() {
    Job$Key_getInstance();
  }
  function Job$Key() {
    Job$Key_instance = this;
  }
  Job$Key.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Key', interfaces: [CoroutineContext$Key]};
  var Job$Key_instance = null;
  function Job$Key_getInstance() {
    if (Job$Key_instance === null) {
      new Job$Key();
    }
    return Job$Key_instance;
  }
  Job.prototype.cancel_x5z25k$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    callback$default ? callback$default(cause) : this.cancel_x5z25k$$default(cause);
  };
  Job.prototype.cancel = function () {
    this.cancel_x5z25k$(null);
  };
  Job.prototype.cancel_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.cancel_dbl4no$$default(cause);
  };
  Job.prototype.invokeOnCompletion_ct2b2z$ = function (onCancelling, invokeImmediately, handler, callback$default) {
    if (onCancelling === void 0)
      onCancelling = false;
    if (invokeImmediately === void 0)
      invokeImmediately = true;
    return callback$default ? callback$default(onCancelling, invokeImmediately, handler) : this.invokeOnCompletion_ct2b2z$$default(onCancelling, invokeImmediately, handler);
  };
  Job.prototype.plus_dqr1mp$ = function (other) {
    return other;
  };
  Job.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Job', interfaces: [CoroutineContext$Element]};
  function Job_0(parent) {
    if (parent === void 0)
      parent = null;
    return new JobImpl(parent);
  }
  function DisposableHandle(f) {
    this.function$ = f;
  }
  DisposableHandle.prototype.dispose = function () {
    return this.function$();
  };
  DisposableHandle.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'DisposableHandle', interfaces: []};
  function ChildJob() {
  }
  ChildJob.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ChildJob', interfaces: [Job]};
  function ParentJob() {
  }
  ParentJob.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ParentJob', interfaces: [Job]};
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ChildHandle', interfaces: [DisposableHandle]};
  function disposeOnCompletion($receiver, handle) {
    return $receiver.invokeOnCompletion_f05bi3$(new DisposeOnCompletion(handle));
  }
  function cancel_1($receiver, cause) {
    if (cause === void 0)
      cause = null;
    var tmp$;
    (tmp$ = $receiver.get_j3r2sn$(Job$Key_getInstance())) != null ? (tmp$.cancel_x5z25k$(cause), Unit) : null;
  }
  function ensureActive_0($receiver) {
    if (!$receiver.isActive)
      throw $receiver.getCancellationException();
  }
  function ensureActive_1($receiver) {
    var tmp$;
    (tmp$ = $receiver.get_j3r2sn$(Job$Key_getInstance())) != null ? (ensureActive_0(tmp$), Unit) : null;
  }
  function cancel_3($receiver, message, cause) {
    if (cause === void 0)
      cause = null;
    $receiver.cancel_x5z25k$(CancellationException_init_0(message, cause));
  }
  function get_job($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.get_j3r2sn$(Job$Key_getInstance())) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Current context doesn't contain Job in it: " + $receiver).toString());
    }
    return tmp$_0;
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  Object.defineProperty(NonDisposableHandle.prototype, 'parent', {configurable: true, get: function () {
    return null;
  }});
  NonDisposableHandle.prototype.dispose = function () {
  };
  NonDisposableHandle.prototype.childCancelled_tcv7n7$ = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {kind: Kind_OBJECT, simpleName: 'NonDisposableHandle', interfaces: [ChildHandle, DisposableHandle]};
  var NonDisposableHandle_instance = null;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance === null) {
      new NonDisposableHandle();
    }
    return NonDisposableHandle_instance;
  }
  function suspendCancellableCoroutine$lambda_2(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
      cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function JobSupport(active) {
    this._state_v70vig$_0 = atomic(active ? EMPTY_ACTIVE : EMPTY_NEW);
    this._parentHandle_acgcx5$_0 = atomic(null);
  }
  Object.defineProperty(JobSupport.prototype, 'key', {configurable: true, get: function () {
    return Job$Key_getInstance();
  }});
  Object.defineProperty(JobSupport.prototype, 'parentHandle_8be2vx$', {configurable: true, get: function () {
    return this._parentHandle_acgcx5$_0.kotlinx$atomicfu$value;
  }, set: function (value) {
    this._parentHandle_acgcx5$_0.kotlinx$atomicfu$value = value;
  }});
  JobSupport.prototype.initParentJob_5dx9e$ = function (parent) {
    if (parent == null) {
      this.parentHandle_8be2vx$ = NonDisposableHandle_getInstance();
      return;
    }
    parent.start();
    var handle = parent.attachChild_kx8v25$(this);
    this.parentHandle_8be2vx$ = handle;
    if (this.isCompleted) {
      handle.dispose();
      this.parentHandle_8be2vx$ = NonDisposableHandle_getInstance();
    }
  };
  Object.defineProperty(JobSupport.prototype, 'state_8be2vx$', {configurable: true, get: function () {
    var $receiver = this._state_v70vig$_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      if (!Kotlin.isType(state, OpDescriptor))
        return state;
      state.perform_s8jyv4$(this);
    }
  }});
  JobSupport.prototype.loopOnState_46ivxf$_0 = function (block) {
    while (true) {
      block(this.state_8be2vx$);
    }
  };
  Object.defineProperty(JobSupport.prototype, 'isActive', {configurable: true, get: function () {
    var state = this.state_8be2vx$;
    return Kotlin.isType(state, Incomplete) && state.isActive;
  }});
  Object.defineProperty(JobSupport.prototype, 'isCompleted', {configurable: true, get: function () {
    return !Kotlin.isType(this.state_8be2vx$, Incomplete);
  }});
  Object.defineProperty(JobSupport.prototype, 'isCancelled', {configurable: true, get: function () {
    var state = this.state_8be2vx$;
    return Kotlin.isType(state, CompletedExceptionally) || (Kotlin.isType(state, JobSupport$Finishing) && state.isCancelling);
  }});
  JobSupport.prototype.finalizeFinishingState_10mr1z$_0 = function (state, proposedUpdate) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var proposedException = (tmp$_0 = Kotlin.isType(tmp$ = proposedUpdate, CompletedExceptionally) ? tmp$ : null) != null ? tmp$_0.cause : null;
    var wasCancelling = {v: false};
    wasCancelling.v = state.isCancelling;
    var exceptions = state.sealLocked_dbl4no$(proposedException);
    var finalCause = this.getFinalRootCause_3zkch4$_0(state, exceptions);
    if (finalCause != null)
      this.addSuppressedExceptions_85dgeo$_0(finalCause, exceptions);
    var finalException = finalCause;
    if (finalException == null)
      tmp$_1 = proposedUpdate;
    else if (finalException === proposedException)
      tmp$_1 = proposedUpdate;
    else
      tmp$_1 = new CompletedExceptionally(finalException);
    var finalState = tmp$_1;
    if (finalException != null) {
      var handled = this.cancelParent_7dutpz$_0(finalException) || this.handleJobException_tcv7n7$(finalException);
      if (handled)
        (Kotlin.isType(tmp$_2 = finalState, CompletedExceptionally) ? tmp$_2 : throwCCE()).makeHandled();
    }
    if (!wasCancelling.v)
      this.onCancelling_dbl4no$(finalException);
    this.onCompletionInternal_s8jyv4$(finalState);
    var casSuccess = this._state_v70vig$_0.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    this.completeStateFinalization_a4ilmi$_0(state, finalState);
    return finalState;
  };
  JobSupport.prototype.getFinalRootCause_3zkch4$_0 = function (state, exceptions) {
    if (exceptions.isEmpty()) {
      if (state.isCancelling) {
        return new JobCancellationException(null != null ? null : this.cancellationExceptionMessage(), null, this);
      }
      return null;
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = exceptions.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!Kotlin.isType(element, CancellationException)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var firstNonCancellation = firstOrNull$result;
    if (firstNonCancellation != null)
      return firstNonCancellation;
    var first = exceptions.get_za3lpa$(0);
    if (Kotlin.isType(first, TimeoutCancellationException)) {
      var firstOrNull$result_0;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = exceptions.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          if (element_0 !== first && Kotlin.isType(element_0, TimeoutCancellationException)) {
            firstOrNull$result_0 = element_0;
            break firstOrNull$break;
          }
        }
        firstOrNull$result_0 = null;
      }
       while (false);
      var detailedTimeoutException = firstOrNull$result_0;
      if (detailedTimeoutException != null)
        return detailedTimeoutException;
    }
    return first;
  };
  JobSupport.prototype.addSuppressedExceptions_85dgeo$_0 = function (rootCause, exceptions) {
    var tmp$;
    if (exceptions.size <= 1)
      return;
    var seenExceptions = identitySet(exceptions.size);
    var unwrappedCause = unwrap(rootCause);
    tmp$ = exceptions.iterator();
    while (tmp$.hasNext()) {
      var exception = tmp$.next();
      var unwrapped = unwrap(exception);
      unwrapped !== rootCause && unwrapped !== unwrappedCause && !Kotlin.isType(unwrapped, CancellationException) && seenExceptions.add_11rb$(unwrapped);
    }
  };
  JobSupport.prototype.tryFinalizeSimpleState_5emg4m$_0 = function (state, update) {
    if (!this._state_v70vig$_0.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    this.onCancelling_dbl4no$(null);
    this.onCompletionInternal_s8jyv4$(update);
    this.completeStateFinalization_a4ilmi$_0(state, update);
    return true;
  };
  JobSupport.prototype.completeStateFinalization_a4ilmi$_0 = function (state, update) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if ((tmp$ = this.parentHandle_8be2vx$) != null) {
      tmp$.dispose();
      this.parentHandle_8be2vx$ = NonDisposableHandle_getInstance();
    }
    var cause = (tmp$_1 = Kotlin.isType(tmp$_0 = update, CompletedExceptionally) ? tmp$_0 : null) != null ? tmp$_1.cause : null;
    if (Kotlin.isType(state, JobNode)) {
      try {
        state.invoke(cause);
      } catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          this.handleOnCompletionException_tcv7n7$(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + this, ex));
        } else
          throw ex;
      }
    } else {
      (tmp$_2 = state.list) != null ? (this.notifyCompletion_mgxta4$_0(tmp$_2, cause), Unit) : null;
    }
  };
  JobSupport.prototype.notifyCancelling_xkpzb8$_0 = function (list, cause) {
    this.onCancelling_dbl4no$(cause);
    var tmp$;
    var exception = {v: null};
    var cur = list._next;
    while (!equals(cur, list)) {
      if (Kotlin.isType(cur, JobCancellingNode)) {
        var node = cur;
        var tmp$_0;
        try {
          node.invoke(cause);
        } catch (ex) {
          if (Kotlin.isType(ex, Throwable)) {
            if (((tmp$_0 = exception.v) != null ? tmp$_0 : null) == null) {
              exception.v = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + this, ex);
            }
          } else
            throw ex;
        }
      }
      cur = cur._next;
    }
    if ((tmp$ = exception.v) != null) {
      this.handleOnCompletionException_tcv7n7$(tmp$);
    }
    this.cancelParent_7dutpz$_0(cause);
  };
  JobSupport.prototype.cancelParent_7dutpz$_0 = function (cause) {
    if (this.isScopedCoroutine)
      return true;
    var isCancellation = Kotlin.isType(cause, CancellationException);
    var parent = this.parentHandle_8be2vx$;
    if (parent === null || parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.childCancelled_tcv7n7$(cause) || isCancellation;
  };
  JobSupport.prototype.notifyCompletion_mgxta4$_0 = function ($receiver, cause) {
    var tmp$;
    var exception = {v: null};
    var cur = $receiver._next;
    while (!equals(cur, $receiver)) {
      if (Kotlin.isType(cur, JobNode)) {
        var node = cur;
        var tmp$_0;
        try {
          node.invoke(cause);
        } catch (ex) {
          if (Kotlin.isType(ex, Throwable)) {
            if (((tmp$_0 = exception.v) != null ? tmp$_0 : null) == null) {
              exception.v = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + this, ex);
            }
          } else
            throw ex;
        }
      }
      cur = cur._next;
    }
    if ((tmp$ = exception.v) != null) {
      this.handleOnCompletionException_tcv7n7$(tmp$);
    }
  };
  JobSupport.prototype.notifyHandlers_8g4jwh$_0 = wrapFunction(function () {
    var equals = Kotlin.equals;
    return function (T_0, isT, list, cause) {
      var tmp$;
      var exception = {v: null};
      var cur = list._next;
      while (!equals(cur, list)) {
        if (isT(cur)) {
          var node = cur;
          var tmp$_0;
          try {
            node.invoke(cause);
          } catch (ex) {
            if (Kotlin.isType(ex, Throwable)) {
              if (((tmp$_0 = exception.v) != null ? tmp$_0 : null) == null) {
                exception.v = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + this, ex);
              }
            } else
              throw ex;
          }
        }
        cur = cur._next;
      }
      if ((tmp$ = exception.v) != null) {
        this.handleOnCompletionException_tcv7n7$(tmp$);
      }
    };
  });
  JobSupport.prototype.start = function () {
    while (true) {
      switch (this.startInternal_tp1bqd$_0(this.state_8be2vx$)) {
        case 0:
          return false;
        case 1:
          return true;
      }
    }
  };
  JobSupport.prototype.startInternal_tp1bqd$_0 = function (state) {
    if (Kotlin.isType(state, Empty)) {
      if (state.isActive)
        return 0;
      if (!this._state_v70vig$_0.atomicfu$compareAndSet(state, EMPTY_ACTIVE))
        return -1;
      this.onStart();
      return 1;
    } else if (Kotlin.isType(state, InactiveNodeList)) {
      if (!this._state_v70vig$_0.atomicfu$compareAndSet(state, state.list))
        return -1;
      this.onStart();
      return 1;
    } else
      return 0;
  };
  JobSupport.prototype.onStart = function () {
  };
  JobSupport.prototype.getCancellationException = function () {
    var tmp$, tmp$_0;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing)) {
      var tmp$_1;
      if ((tmp$_0 = (tmp$ = state.rootCause) != null ? this.toCancellationException_rg9tb7$(tmp$, get_classSimpleName(this) + ' is cancelling') : null) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init(('Job is still new or active: ' + this).toString());
      }
      return tmp$_1;
    } else if (Kotlin.isType(state, Incomplete)) {
      throw IllegalStateException_init(('Job is still new or active: ' + this).toString());
    } else if (Kotlin.isType(state, CompletedExceptionally))
      return this.toCancellationException_rg9tb7$(state.cause);
    else
      return new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
  };
  JobSupport.prototype.toCancellationException_rg9tb7$ = function ($receiver, message) {
    if (message === void 0)
      message = null;
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, CancellationException) ? tmp$ : null) != null ? tmp$_0 : new JobCancellationException(message != null ? message : this.cancellationExceptionMessage(), $receiver, this);
  };
  Object.defineProperty(JobSupport.prototype, 'completionCause', {configurable: true, get: function () {
    var tmp$;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing)) {
      var tmp$_0;
      if ((tmp$ = state.rootCause) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init(('Job is still new or active: ' + this).toString());
      }
      return tmp$_0;
    } else if (Kotlin.isType(state, Incomplete)) {
      throw IllegalStateException_init(('Job is still new or active: ' + this).toString());
    } else if (Kotlin.isType(state, CompletedExceptionally))
      return state.cause;
    else
      return null;
  }});
  Object.defineProperty(JobSupport.prototype, 'completionCauseHandled', {configurable: true, get: function () {
    var it = this.state_8be2vx$;
    return Kotlin.isType(it, CompletedExceptionally) && it.handled;
  }});
  JobSupport.prototype.invokeOnCompletion_f05bi3$ = function (handler) {
    return this.invokeOnCompletion_ct2b2z$(false, true, handler);
  };
  JobSupport.prototype.invokeOnCompletion_ct2b2z$$default = function (onCancelling, invokeImmediately, handler) {
    var node = this.makeNode_9qhc1i$_0(handler, onCancelling);
    loop_label: while (true) {
      var state = this.state_8be2vx$;
      block$break: do {
        var tmp$, tmp$_0, tmp$_1;
        if (Kotlin.isType(state, Empty))
          if (state.isActive) {
            if (this._state_v70vig$_0.atomicfu$compareAndSet(state, node))
              return node;
          } else
            this.promoteEmptyToNodeList_lchanx$_0(state);
        else if (Kotlin.isType(state, Incomplete)) {
          var list = state.list;
          if (list == null) {
            this.promoteSingleToNodeList_l9deey$_0(Kotlin.isType(tmp$ = state, JobNode) ? tmp$ : throwCCE());
          } else {
            var rootCause = {v: null};
            var handle = {v: NonDisposableHandle_getInstance()};
            if (onCancelling && Kotlin.isType(state, JobSupport$Finishing)) {
              rootCause.v = state.rootCause;
              var tmp$_2 = rootCause.v == null;
              if (!tmp$_2) {
                tmp$_2 = (Kotlin.isType(handler, ChildHandleNode) && !state.isCompleting);
              }
              if (tmp$_2) {
                if (!this.addLastAtomic_ct8uo8$_0(state, list, node))
                  break block$break;
                if (rootCause.v == null)
                  return node;
                handle.v = node;
              }
            }
            if (rootCause.v != null) {
              if (invokeImmediately)
                invokeIt(handler, rootCause.v);
              return handle.v;
            } else {
              if (this.addLastAtomic_ct8uo8$_0(state, list, node))
                return node;
            }
          }
        } else {
          if (invokeImmediately) {
            invokeIt(handler, (tmp$_1 = Kotlin.isType(tmp$_0 = state, CompletedExceptionally) ? tmp$_0 : null) != null ? tmp$_1.cause : null);
          }
          return NonDisposableHandle_getInstance();
        }
      }
       while (false);
    }
  };
  JobSupport.prototype.makeNode_9qhc1i$_0 = function (handler, onCancelling) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (onCancelling) {
      tmp$_4 = (tmp$_0 = Kotlin.isType(tmp$ = handler, JobCancellingNode) ? tmp$ : null) != null ? tmp$_0 : new InvokeOnCancelling(handler);
    } else {
      tmp$_4 = (tmp$_3 = (tmp$_2 = Kotlin.isType(tmp$_1 = handler, JobNode) ? tmp$_1 : null) != null ? tmp$_2 : null) != null ? tmp$_3 : new InvokeOnCompletion(handler);
    }
    var node = tmp$_4;
    node.job = this;
    return node;
  };
  function JobSupport$addLastAtomic$lambda(this$JobSupport, closure$expect) {
    return function () {
      return this$JobSupport.state_8be2vx$ === closure$expect;
    };
  }
  JobSupport.prototype.addLastAtomic_ct8uo8$_0 = function (expect, list, node) {
    var addLastIf_w327v9$result;
    addLastIf_w327v9$break: do {
      if (!JobSupport$addLastAtomic$lambda(this, expect)()) {
        addLastIf_w327v9$result = false;
        break addLastIf_w327v9$break;
      }
      list.addLast_l2j9rm$(node);
      addLastIf_w327v9$result = true;
    }
     while (false);
    return addLastIf_w327v9$result;
  };
  JobSupport.prototype.promoteEmptyToNodeList_lchanx$_0 = function (state) {
    var list = new NodeList();
    var update = state.isActive ? list : new InactiveNodeList(list);
    this._state_v70vig$_0.atomicfu$compareAndSet(state, update);
  };
  JobSupport.prototype.promoteSingleToNodeList_l9deey$_0 = function (state) {
    state.addOneIfEmpty_l2j9rm$(new NodeList());
    var list = state._next;
    this._state_v70vig$_0.atomicfu$compareAndSet(state, list);
  };
  JobSupport.prototype.join = function (continuation) {
    if (!this.joinInternal_ta6o25$_0()) {
      ensureActive_1(continuation.context);
      return;
    }
    return this.joinSuspend_kfh5g8$_0(continuation);
  };
  JobSupport.prototype.joinInternal_ta6o25$_0 = function () {
    while (true) {
      var state = this.state_8be2vx$;
      if (!Kotlin.isType(state, Incomplete))
        return false;
      if (this.startInternal_tp1bqd$_0(state) >= 0)
        return true;
    }
  };
  function JobSupport$joinSuspend$lambda(this$JobSupport) {
    return function (cont) {
      disposeOnCancellation(cont, this$JobSupport.invokeOnCompletion_f05bi3$(new ResumeOnCompletion(cont)));
      return Unit;
    };
  }
  JobSupport.prototype.joinSuspend_kfh5g8$_0 = function (continuation) {
    return suspendCancellableCoroutine$lambda_2(JobSupport$joinSuspend$lambda(this))(continuation);
  };
  Object.defineProperty(JobSupport.prototype, 'onJoin', {configurable: true, get: function () {
    return this;
  }});
  JobSupport.prototype.registerSelectClause0_s9h9qd$ = function (select, block) {
    while (true) {
      var state = this.state_8be2vx$;
      if (select.isSelected)
        return;
      if (!Kotlin.isType(state, Incomplete)) {
        if (select.trySelect()) {
          startCoroutineUnintercepted(block, select.completion);
        }
        return;
      }
      if (this.startInternal_tp1bqd$_0(state) === 0) {
        select.disposeOnSelect_rvfg84$(this.invokeOnCompletion_f05bi3$(new SelectJoinOnCompletion(select, block)));
        return;
      }
    }
  };
  JobSupport.prototype.removeNode_jr34ao$ = function (node) {
    while (true) {
      var state = this.state_8be2vx$;
      if (Kotlin.isType(state, JobNode)) {
        if (state !== node)
          return;
        if (this._state_v70vig$_0.atomicfu$compareAndSet(state, EMPTY_ACTIVE))
          return;
      } else if (Kotlin.isType(state, Incomplete)) {
        if (state.list != null)
          node.remove();
        return;
      } else
        return;
    }
  };
  Object.defineProperty(JobSupport.prototype, 'onCancelComplete', {configurable: true, get: function () {
    return false;
  }});
  JobSupport.prototype.cancel_x5z25k$$default = function (cause) {
    this.cancelInternal_tcv7n7$(cause != null ? cause : new JobCancellationException(null != null ? null : this.cancellationExceptionMessage(), null, this));
  };
  JobSupport.prototype.cancellationExceptionMessage = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.cancel_dbl4no$$default = function (cause) {
    var tmp$;
    this.cancelInternal_tcv7n7$((tmp$ = cause != null ? this.toCancellationException_rg9tb7$(cause) : null) != null ? tmp$ : new JobCancellationException(null != null ? null : this.cancellationExceptionMessage(), null, this));
    return true;
  };
  JobSupport.prototype.cancelInternal_tcv7n7$ = function (cause) {
    this.cancelImpl_8ea4ql$(cause);
  };
  JobSupport.prototype.parentCancelled_pv1t6x$ = function (parentJob) {
    this.cancelImpl_8ea4ql$(parentJob);
  };
  JobSupport.prototype.childCancelled_tcv7n7$ = function (cause) {
    if (Kotlin.isType(cause, CancellationException))
      return true;
    return this.cancelImpl_8ea4ql$(cause) && this.handlesException;
  };
  JobSupport.prototype.cancelCoroutine_dbl4no$ = function (cause) {
    return this.cancelImpl_8ea4ql$(cause);
  };
  JobSupport.prototype.cancelImpl_8ea4ql$ = function (cause) {
    var tmp$;
    var finalState = COMPLETING_ALREADY;
    if (this.onCancelComplete) {
      finalState = this.cancelMakeCompleting_z3ww04$_0(cause);
      if (finalState === COMPLETING_WAITING_CHILDREN)
        return true;
    }
    if (finalState === COMPLETING_ALREADY) {
      finalState = this.makeCancelling_xjon1g$_0(cause);
    }
    if (finalState === COMPLETING_ALREADY)
      tmp$ = true;
    else if (finalState === COMPLETING_WAITING_CHILDREN)
      tmp$ = true;
    else if (finalState === TOO_LATE_TO_CANCEL)
      tmp$ = false;
    else {
      this.afterCompletion_s8jyv4$(finalState);
      tmp$ = true;
    }
    return tmp$;
  };
  JobSupport.prototype.cancelMakeCompleting_z3ww04$_0 = function (cause) {
    while (true) {
      var state = this.state_8be2vx$;
      if (!Kotlin.isType(state, Incomplete) || (Kotlin.isType(state, JobSupport$Finishing) && state.isCompleting)) {
        return COMPLETING_ALREADY;
      }
      var proposedUpdate = new CompletedExceptionally(this.createCauseException_kfrsk8$_0(cause));
      var finalState = this.tryMakeCompleting_w5s53t$_0(state, proposedUpdate);
      if (finalState !== COMPLETING_RETRY)
        return finalState;
    }
  };
  JobSupport.prototype.defaultCancellationException_6umzry$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.JobSupport.defaultCancellationException_6umzry$', wrapFunction(function () {
    var JobCancellationException_init = _.kotlinx.coroutines.JobCancellationException;
    return function (message, cause) {
      if (message === void 0)
        message = null;
      if (cause === void 0)
        cause = null;
      return new JobCancellationException_init(message != null ? message : this.cancellationExceptionMessage(), cause, this);
    };
  }));
  JobSupport.prototype.getChildJobCancellationCause = function () {
    var tmp$, tmp$_0, tmp$_1;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing))
      tmp$ = state.rootCause;
    else if (Kotlin.isType(state, CompletedExceptionally))
      tmp$ = state.cause;
    else if (Kotlin.isType(state, Incomplete)) {
      throw IllegalStateException_init(('Cannot be cancelling child in this state: ' + toString(state)).toString());
    } else
      tmp$ = null;
    var rootCause = tmp$;
    return (tmp$_1 = Kotlin.isType(tmp$_0 = rootCause, CancellationException) ? tmp$_0 : null) != null ? tmp$_1 : new JobCancellationException('Parent job is ' + this.stateString_u2sjqg$_0(state), rootCause, this);
  };
  JobSupport.prototype.createCauseException_kfrsk8$_0 = function (cause) {
    var tmp$;
    if (cause == null || Kotlin.isType(cause, Throwable)) {
      return cause != null ? cause : new JobCancellationException(null != null ? null : this.cancellationExceptionMessage(), null, this);
    } else
      return (Kotlin.isType(tmp$ = cause, ParentJob) ? tmp$ : throwCCE()).getChildJobCancellationCause();
  };
  JobSupport.prototype.makeCancelling_xjon1g$_0 = function (cause) {
    var causeExceptionCache = {v: null};
    while (true) {
      var state = this.state_8be2vx$;
      var tmp$;
      if (Kotlin.isType(state, JobSupport$Finishing)) {
        var tmp$_0;
        if (state.isSealed)
          return TOO_LATE_TO_CANCEL;
        var wasCancelling = state.isCancelling;
        if (cause != null || !wasCancelling) {
          var tmp$_1;
          if ((tmp$_0 = causeExceptionCache.v) != null)
            tmp$_1 = tmp$_0;
          else {
            var $receiver = this.createCauseException_kfrsk8$_0(cause);
            causeExceptionCache.v = $receiver;
            tmp$_1 = $receiver;
          }
          var causeException = tmp$_1;
          state.addExceptionLocked_tcv7n7$(causeException);
        }
        var $receiver_0 = state.rootCause;
        var notifyRootCause = !wasCancelling ? $receiver_0 : null;
        if (notifyRootCause != null) {
          this.notifyCancelling_xkpzb8$_0(state.list, notifyRootCause);
        }
        return COMPLETING_ALREADY;
      } else if (Kotlin.isType(state, Incomplete)) {
        var tmp$_2;
        if ((tmp$ = causeExceptionCache.v) != null)
          tmp$_2 = tmp$;
        else {
          var $receiver_1 = this.createCauseException_kfrsk8$_0(cause);
          causeExceptionCache.v = $receiver_1;
          tmp$_2 = $receiver_1;
        }
        var causeException_0 = tmp$_2;
        if (state.isActive) {
          if (this.tryMakeCancelling_v0qvyy$_0(state, causeException_0))
            return COMPLETING_ALREADY;
        } else {
          var finalState = this.tryMakeCompleting_w5s53t$_0(state, new CompletedExceptionally(causeException_0));
          if (finalState === COMPLETING_ALREADY) {
            throw IllegalStateException_init(('Cannot happen in ' + toString(state)).toString());
          } else if (finalState !== COMPLETING_RETRY)
            return finalState;
        }
      } else
        return TOO_LATE_TO_CANCEL;
    }
  };
  JobSupport.prototype.getOrPromoteCancellingList_dmij2j$_0 = function (state) {
    var tmp$, tmp$_0;
    tmp$_0 = state.list;
    if (tmp$_0 == null) {
      if (Kotlin.isType(state, Empty))
        tmp$ = new NodeList();
      else if (Kotlin.isType(state, JobNode)) {
        this.promoteSingleToNodeList_l9deey$_0(state);
        tmp$ = null;
      } else {
        throw IllegalStateException_init(('State should have list: ' + state).toString());
      }
      tmp$_0 = tmp$;
    }
    return tmp$_0;
  };
  JobSupport.prototype.tryMakeCancelling_v0qvyy$_0 = function (state, rootCause) {
    var tmp$;
    tmp$ = this.getOrPromoteCancellingList_dmij2j$_0(state);
    if (tmp$ == null) {
      return false;
    }
    var list = tmp$;
    var cancelling = new JobSupport$Finishing(list, false, rootCause);
    if (!this._state_v70vig$_0.atomicfu$compareAndSet(state, cancelling))
      return false;
    this.notifyCancelling_xkpzb8$_0(list, rootCause);
    return true;
  };
  JobSupport.prototype.makeCompleting_8ea4ql$ = function (proposedUpdate) {
    while (true) {
      var finalState = this.tryMakeCompleting_w5s53t$_0(this.state_8be2vx$, proposedUpdate);
      if (finalState === COMPLETING_ALREADY)
        return false;
      else if (finalState === COMPLETING_WAITING_CHILDREN)
        return true;
      else if (finalState !== COMPLETING_RETRY) {
        this.afterCompletion_s8jyv4$(finalState);
        return true;
      }
    }
  };
  JobSupport.prototype.makeCompletingOnce_8ea4ql$ = function (proposedUpdate) {
    while (true) {
      var finalState = this.tryMakeCompleting_w5s53t$_0(this.state_8be2vx$, proposedUpdate);
      if (finalState === COMPLETING_ALREADY)
        throw new IllegalStateException('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), this.get_exceptionOrNull_ejijbb$_0(proposedUpdate));
      else if (finalState !== COMPLETING_RETRY)
        return finalState;
    }
  };
  JobSupport.prototype.tryMakeCompleting_w5s53t$_0 = function (state, proposedUpdate) {
    if (!Kotlin.isType(state, Incomplete))
      return COMPLETING_ALREADY;
    if ((Kotlin.isType(state, Empty) || Kotlin.isType(state, JobNode)) && !Kotlin.isType(state, ChildHandleNode) && !Kotlin.isType(proposedUpdate, CompletedExceptionally)) {
      if (this.tryFinalizeSimpleState_5emg4m$_0(state, proposedUpdate)) {
        return proposedUpdate;
      }
      return COMPLETING_RETRY;
    }
    return this.tryMakeCompletingSlowPath_uh1ctj$_0(state, proposedUpdate);
  };
  JobSupport.prototype.tryMakeCompletingSlowPath_uh1ctj$_0 = function (state, proposedUpdate) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.getOrPromoteCancellingList_dmij2j$_0(state);
    if (tmp$ == null) {
      return COMPLETING_RETRY;
    }
    var list = tmp$;
    var finishing = (tmp$_1 = Kotlin.isType(tmp$_0 = state, JobSupport$Finishing) ? tmp$_0 : null) != null ? tmp$_1 : new JobSupport$Finishing(list, false, null);
    var notifyRootCause = {v: null};
    var tmp$_3, tmp$_4;
    if (finishing.isCompleting)
      return COMPLETING_ALREADY;
    finishing.isCompleting = true;
    if (finishing !== state) {
      if (!this._state_v70vig$_0.atomicfu$compareAndSet(state, finishing))
        return COMPLETING_RETRY;
    }
    var wasCancelling = finishing.isCancelling;
    if ((tmp$_4 = Kotlin.isType(tmp$_3 = proposedUpdate, CompletedExceptionally) ? tmp$_3 : null) != null) {
      finishing.addExceptionLocked_tcv7n7$(tmp$_4.cause);
    }
    var $receiver = finishing.rootCause;
    notifyRootCause.v = !wasCancelling ? $receiver : null;
    if ((tmp$_2 = notifyRootCause.v) != null) {
      this.notifyCancelling_xkpzb8$_0(list, tmp$_2);
    }
    var child = this.firstChild_15hr5g$_0(state);
    if (child != null && this.tryWaitForChild_dzo3im$_0(finishing, child, proposedUpdate))
      return COMPLETING_WAITING_CHILDREN;
    return this.finalizeFinishingState_10mr1z$_0(finishing, proposedUpdate);
  };
  JobSupport.prototype.get_exceptionOrNull_ejijbb$_0 = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, CompletedExceptionally) ? tmp$ : null) != null ? tmp$_0.cause : null;
  };
  JobSupport.prototype.firstChild_15hr5g$_0 = function (state) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = Kotlin.isType(tmp$ = state, ChildHandleNode) ? tmp$ : null) != null ? tmp$_1 : (tmp$_0 = state.list) != null ? this.nextChild_n2no7k$_0(tmp$_0) : null;
  };
  JobSupport.prototype.tryWaitForChild_dzo3im$_0 = function (state, child, proposedUpdate) {
    var tmp$;
    var handle = child.childJob.invokeOnCompletion_ct2b2z$(void 0, false, new JobSupport$ChildCompletion(this, state, child, proposedUpdate));
    if (handle !== NonDisposableHandle_getInstance())
      return true;
    tmp$ = this.nextChild_n2no7k$_0(child);
    if (tmp$ == null) {
      return false;
    }
    var nextChild = tmp$;
    return this.tryWaitForChild_dzo3im$_0(state, nextChild, proposedUpdate);
  };
  JobSupport.prototype.continueCompleting_vth2d4$_0 = function (state, lastChild, proposedUpdate) {
    var waitChild = this.nextChild_n2no7k$_0(lastChild);
    if (waitChild != null && this.tryWaitForChild_dzo3im$_0(state, waitChild, proposedUpdate))
      return;
    var finalState = this.finalizeFinishingState_10mr1z$_0(state, proposedUpdate);
    this.afterCompletion_s8jyv4$(finalState);
  };
  JobSupport.prototype.nextChild_n2no7k$_0 = function ($receiver) {
    var cur = $receiver;
    while (cur._removed) {
      cur = cur._prev;
    }
    while (true) {
      cur = cur._next;
      if (cur._removed)
        continue;
      if (Kotlin.isType(cur, ChildHandleNode))
        return cur;
      if (Kotlin.isType(cur, NodeList))
        return null;
    }
  };
  function Coroutine$JobSupport$get_JobSupport$children$lambda(this$JobSupport_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JobSupport = this$JobSupport_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$cur = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$JobSupport$get_JobSupport$children$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JobSupport$get_JobSupport$children$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JobSupport$get_JobSupport$children$lambda.prototype.constructor = Coroutine$JobSupport$get_JobSupport$children$lambda;
  Coroutine$JobSupport$get_JobSupport$children$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var state = this.local$this$JobSupport.state_8be2vx$;
            if (Kotlin.isType(state, ChildHandleNode)) {
              this.state_0 = 8;
              this.result_0 = this.local$$receiver.yield_11rb$(state.childJob, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (Kotlin.isType(state, Incomplete)) {
                if ((this.local$tmp$ = state.list) != null) {
                  this.local$cur = this.local$tmp$._next;
                  this.state_0 = 2;
                  continue;
                } else {
                  this.local$tmp$_0 = null;
                  this.state_0 = 6;
                  continue;
                }
              } else {
                this.state_0 = 7;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (equals(this.local$cur, this.local$tmp$)) {
              this.state_0 = 5;
              continue;
            }

            if (Kotlin.isType(this.local$cur, ChildHandleNode)) {
              this.state_0 = 3;
              this.result_0 = this.local$$receiver.yield_11rb$(this.local$cur.childJob, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$cur = this.local$cur._next;
            this.state_0 = 2;
            continue;
          case 5:
            this.local$tmp$_0 = Unit;
            this.state_0 = 6;
            continue;
          case 6:
            return this.local$tmp$_0;
          case 7:
            this.state_0 = 9;
            continue;
          case 8:
            return this.result_0;
          case 9:
            return Unit;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JobSupport$get_JobSupport$children$lambda(this$JobSupport_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JobSupport$get_JobSupport$children$lambda(this$JobSupport_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Object.defineProperty(JobSupport.prototype, 'children', {configurable: true, get: function () {
    return sequence(JobSupport$get_JobSupport$children$lambda(this));
  }});
  JobSupport.prototype.attachChild_kx8v25$ = function (child) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.invokeOnCompletion_ct2b2z$(true, void 0, new ChildHandleNode(child)), ChildHandle) ? tmp$ : throwCCE();
  };
  JobSupport.prototype.handleOnCompletionException_tcv7n7$ = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_dbl4no$ = function (cause) {
  };
  Object.defineProperty(JobSupport.prototype, 'isScopedCoroutine', {configurable: true, get: function () {
    return false;
  }});
  Object.defineProperty(JobSupport.prototype, 'handlesException', {configurable: true, get: function () {
    return true;
  }});
  JobSupport.prototype.handleJobException_tcv7n7$ = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_s8jyv4$ = function (state) {
  };
  JobSupport.prototype.afterCompletion_s8jyv4$ = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.toDebugString() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.toDebugString = function () {
    return this.nameString() + '{' + this.stateString_u2sjqg$_0(this.state_8be2vx$) + '}';
  };
  JobSupport.prototype.nameString = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.stateString_u2sjqg$_0 = function (state) {
    if (Kotlin.isType(state, JobSupport$Finishing))
      if (state.isCancelling)
        return 'Cancelling';
      else if (state.isCompleting)
        return 'Completing';
      else
        return 'Active';
    else if (Kotlin.isType(state, Incomplete))
      return state.isActive ? 'Active' : 'New';
    else if (Kotlin.isType(state, CompletedExceptionally))
      return 'Cancelled';
    else
      return 'Completed';
  };
  function JobSupport$Finishing(list, isCompleting, rootCause) {
    this.list_m9wkmb$_0 = list;
    this._isCompleting_0 = atomic_1(isCompleting);
    this._rootCause_0 = atomic(rootCause);
    this._exceptionsHolder_0 = atomic(null);
  }
  Object.defineProperty(JobSupport$Finishing.prototype, 'list', {get: function () {
    return this.list_m9wkmb$_0;
  }});
  Object.defineProperty(JobSupport$Finishing.prototype, 'isCompleting', {configurable: true, get: function () {
    return this._isCompleting_0.kotlinx$atomicfu$value;
  }, set: function (value) {
    this._isCompleting_0.kotlinx$atomicfu$value = value;
  }});
  Object.defineProperty(JobSupport$Finishing.prototype, 'rootCause', {configurable: true, get: function () {
    return this._rootCause_0.kotlinx$atomicfu$value;
  }, set: function (value) {
    this._rootCause_0.kotlinx$atomicfu$value = value;
  }});
  Object.defineProperty(JobSupport$Finishing.prototype, 'exceptionsHolder_0', {configurable: true, get: function () {
    return this._exceptionsHolder_0.kotlinx$atomicfu$value;
  }, set: function (value) {
    this._exceptionsHolder_0.kotlinx$atomicfu$value = value;
  }});
  Object.defineProperty(JobSupport$Finishing.prototype, 'isSealed', {configurable: true, get: function () {
    return this.exceptionsHolder_0 === SEALED;
  }});
  Object.defineProperty(JobSupport$Finishing.prototype, 'isCancelling', {configurable: true, get: function () {
    return this.rootCause != null;
  }});
  Object.defineProperty(JobSupport$Finishing.prototype, 'isActive', {configurable: true, get: function () {
    return this.rootCause == null;
  }});
  JobSupport$Finishing.prototype.sealLocked_dbl4no$ = function (proposedException) {
    var tmp$, tmp$_0;
    var eh = this.exceptionsHolder_0;
    if (eh == null)
      tmp$_0 = this.allocateList_0();
    else if (Kotlin.isType(eh, Throwable)) {
      var $receiver = this.allocateList_0();
      $receiver.add_11rb$(eh);
      tmp$_0 = $receiver;
    } else if (Kotlin.isType(eh, ArrayList))
      tmp$_0 = Kotlin.isType(tmp$ = eh, ArrayList) ? tmp$ : throwCCE();
    else {
      throw IllegalStateException_init(('State is ' + toString(eh)).toString());
    }
    var list = tmp$_0;
    var rootCause = this.rootCause;
    if (rootCause != null) {
      list.add_wxm5ur$(0, rootCause);
    }
    if (proposedException != null && !equals(proposedException, rootCause))
      list.add_11rb$(proposedException);
    this.exceptionsHolder_0 = SEALED;
    return list;
  };
  JobSupport$Finishing.prototype.addExceptionLocked_tcv7n7$ = function (exception) {
    var tmp$;
    var rootCause = this.rootCause;
    if (rootCause == null) {
      this.rootCause = exception;
      return;
    }
    if (exception === rootCause)
      return;
    var eh = this.exceptionsHolder_0;
    if (eh == null)
      this.exceptionsHolder_0 = exception;
    else if (Kotlin.isType(eh, Throwable)) {
      if (exception === eh)
        return;
      var $receiver = this.allocateList_0();
      $receiver.add_11rb$(eh);
      $receiver.add_11rb$(exception);
      this.exceptionsHolder_0 = $receiver;
    } else if (Kotlin.isType(eh, ArrayList))
      (Kotlin.isType(tmp$ = eh, ArrayList) ? tmp$ : throwCCE()).add_11rb$(exception);
    else {
      throw IllegalStateException_init(('State is ' + toString(eh)).toString());
    }
  };
  JobSupport$Finishing.prototype.allocateList_0 = function () {
    return ArrayList_init(4);
  };
  JobSupport$Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.isCancelling + ', completing=' + this.isCompleting + ', rootCause=' + toString(this.rootCause) + ', exceptions=' + toString(this.exceptionsHolder_0) + ', list=' + this.list + ']';
  };
  JobSupport$Finishing.$metadata$ = {kind: Kind_CLASS, simpleName: 'Finishing', interfaces: [Incomplete]};
  JobSupport.prototype.get_isCancelling_dpdoz8$_0 = function ($receiver) {
    return Kotlin.isType($receiver, JobSupport$Finishing) && $receiver.isCancelling;
  };
  function JobSupport$ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.parent_0 = parent;
    this.state_0 = state;
    this.child_0 = child;
    this.proposedUpdate_0 = proposedUpdate;
  }
  JobSupport$ChildCompletion.prototype.invoke = function (cause) {
    this.parent_0.continueCompleting_vth2d4$_0(this.state_0, this.child_0, this.proposedUpdate_0);
  };
  JobSupport$ChildCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChildCompletion', interfaces: [JobNode]};
  function JobSupport$AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.job_0 = job;
  }
  JobSupport$AwaitContinuation.prototype.getContinuationCancellationCause_dqr1mp$ = function (parent) {
    var tmp$;
    var state = this.job_0.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing)) {
      if ((tmp$ = state.rootCause) != null) {
        return tmp$;
      }
    }
    if (Kotlin.isType(state, CompletedExceptionally))
      return state.cause;
    return parent.getCancellationException();
  };
  JobSupport$AwaitContinuation.prototype.nameString = function () {
    return 'AwaitContinuation';
  };
  JobSupport$AwaitContinuation.$metadata$ = {kind: Kind_CLASS, simpleName: 'AwaitContinuation', interfaces: [CancellableContinuationImpl]};
  Object.defineProperty(JobSupport.prototype, 'isCompletedExceptionally', {configurable: true, get: function () {
    return Kotlin.isType(this.state_8be2vx$, CompletedExceptionally);
  }});
  JobSupport.prototype.getCompletionExceptionOrNull = function () {
    var state = this.state_8be2vx$;
    if (!!Kotlin.isType(state, Incomplete)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init(message.toString());
    }
    return this.get_exceptionOrNull_ejijbb$_0(state);
  };
  JobSupport.prototype.getCompletedInternal_8be2vx$ = function () {
    var state = this.state_8be2vx$;
    if (!!Kotlin.isType(state, Incomplete)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init(message.toString());
    }
    if (Kotlin.isType(state, CompletedExceptionally))
      throw state.cause;
    return unboxState(state);
  };
  JobSupport.prototype.awaitInternal_8be2vx$ = function (continuation) {
    while (true) {
      var state = this.state_8be2vx$;
      if (!Kotlin.isType(state, Incomplete)) {
        if (Kotlin.isType(state, CompletedExceptionally)) {
          throw state.cause;
        }
        return unboxState(state);
      }
      if (this.startInternal_tp1bqd$_0(state) >= 0)
        break;
    }
    return this.awaitSuspend_ixl9xw$_0(continuation);
  };
  function JobSupport$awaitSuspend$lambda(this$JobSupport) {
    return function (uCont) {
      var cont = new JobSupport$AwaitContinuation(intercepted(uCont), this$JobSupport);
      cont.initCancellability();
      disposeOnCancellation(cont, this$JobSupport.invokeOnCompletion_f05bi3$(new ResumeAwaitOnCompletion(cont)));
      return cont.getResult();
    };
  }
  JobSupport.prototype.awaitSuspend_ixl9xw$_0 = function (continuation) {
    return JobSupport$awaitSuspend$lambda(this)(continuation);
  };
  JobSupport.prototype.registerSelectClause1Internal_u6kgbh$ = function (select, block) {
    while (true) {
      var state = this.state_8be2vx$;
      var tmp$;
      if (select.isSelected)
        return;
      if (!Kotlin.isType(state, Incomplete)) {
        if (select.trySelect()) {
          if (Kotlin.isType(state, CompletedExceptionally)) {
            select.resumeSelectWithException_tcv7n7$(state.cause);
          } else {
            startCoroutineUnintercepted_0(block, (tmp$ = unboxState(state)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), select.completion);
          }
        }
        return;
      }
      if (this.startInternal_tp1bqd$_0(state) === 0) {
        select.disposeOnSelect_rvfg84$(this.invokeOnCompletion_f05bi3$(new SelectAwaitOnCompletion(select, block)));
        return;
      }
    }
  };
  JobSupport.prototype.selectAwaitCompletion_u6kgbh$ = function (select, block) {
    var tmp$;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, CompletedExceptionally))
      select.resumeSelectWithException_tcv7n7$(state.cause);
    else {
      startCoroutineCancellable_0(block, (tmp$ = unboxState(state)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), select.completion);
    }
  };
  JobSupport.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobSupport', interfaces: [SelectClause0, ParentJob, ChildJob, Job]};
  function IncompleteStateBox(state) {
    this.state = state;
  }
  IncompleteStateBox.$metadata$ = {kind: Kind_CLASS, simpleName: 'IncompleteStateBox', interfaces: []};
  function boxIncomplete($receiver) {
    return Kotlin.isType($receiver, Incomplete) ? new IncompleteStateBox($receiver) : $receiver;
  }
  function unboxState($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = $receiver, IncompleteStateBox) ? tmp$ : null) != null ? tmp$_0.state : null) != null ? tmp$_1 : $receiver;
  }
  var COMPLETING_ALREADY;
  var COMPLETING_WAITING_CHILDREN;
  var COMPLETING_RETRY;
  var TOO_LATE_TO_CANCEL;
  var RETRY;
  var FALSE;
  var TRUE;
  var SEALED;
  var EMPTY_NEW;
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.isActive_hyoax9$_0 = isActive;
  }
  Object.defineProperty(Empty.prototype, 'isActive', {get: function () {
    return this.isActive_hyoax9$_0;
  }});
  Object.defineProperty(Empty.prototype, 'list', {configurable: true, get: function () {
    return null;
  }});
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.isActive ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {kind: Kind_CLASS, simpleName: 'Empty', interfaces: [Incomplete]};
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_5dx9e$(parent);
    this.handlesException_fejgjb$_0 = this.handlesExceptionF();
  }
  Object.defineProperty(JobImpl.prototype, 'onCancelComplete', {configurable: true, get: function () {
    return true;
  }});
  Object.defineProperty(JobImpl.prototype, 'handlesException', {configurable: true, get: function () {
    return this.handlesException_fejgjb$_0;
  }});
  JobImpl.prototype.complete = function () {
    return this.makeCompleting_8ea4ql$(Unit);
  };
  JobImpl.prototype.completeExceptionally_tcv7n7$ = function (exception) {
    return this.makeCompleting_8ea4ql$(new CompletedExceptionally(exception));
  };
  JobImpl.prototype.handlesExceptionF = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.parentHandle_8be2vx$, ChildHandleNode) ? tmp$ : null) != null ? tmp$_0.job : null;
    if (tmp$_1 == null) {
      return false;
    }
    var parentJob = tmp$_1;
    while (true) {
      if (parentJob.handlesException)
        return true;
      tmp$_4 = (tmp$_3 = Kotlin.isType(tmp$_2 = parentJob.parentHandle_8be2vx$, ChildHandleNode) ? tmp$_2 : null) != null ? tmp$_3.job : null;
      if (tmp$_4 == null) {
        return false;
      }
      parentJob = tmp$_4;
    }
  };
  JobImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobImpl', interfaces: [CompletableJob, JobSupport]};
  function Incomplete() {
  }
  Incomplete.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Incomplete', interfaces: []};
  function JobNode() {
    CompletionHandlerBase.call(this);
    this.job_ndnibc$_0 = this.job_ndnibc$_0;
  }
  Object.defineProperty(JobNode.prototype, 'job', {configurable: true, get: function () {
    if (this.job_ndnibc$_0 == null)
      return throwUPAE('job');
    return this.job_ndnibc$_0;
  }, set: function (job) {
    this.job_ndnibc$_0 = job;
  }});
  Object.defineProperty(JobNode.prototype, 'isActive', {configurable: true, get: function () {
    return true;
  }});
  Object.defineProperty(JobNode.prototype, 'list', {configurable: true, get: function () {
    return null;
  }});
  JobNode.prototype.dispose = function () {
    this.job.removeNode_jr34ao$(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.job) + ']';
  };
  JobNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobNode', interfaces: [Incomplete, DisposableHandle, CompletionHandlerBase]};
  function NodeList() {
    LinkedListHead.call(this);
  }
  Object.defineProperty(NodeList.prototype, 'isActive', {configurable: true, get: function () {
    return true;
  }});
  Object.defineProperty(NodeList.prototype, 'list', {configurable: true, get: function () {
    return this;
  }});
  NodeList.prototype.getString_61zpoe$ = function (state) {
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$('List{');
    $receiver.append_pdl1vj$(state);
    $receiver.append_pdl1vj$('}[');
    var first = {v: true};
    var cur = this._next;
    while (!equals(cur, this)) {
      if (Kotlin.isType(cur, JobNode)) {
        var node = cur;
        if (first.v)
          first.v = false;
        else
          $receiver.append_pdl1vj$(', ');
        $receiver.append_s8jyv4$(node);
      }
      cur = cur._next;
    }
    $receiver.append_pdl1vj$(']');
    return $receiver.toString();
  };
  NodeList.prototype.toString = function () {
    return DEBUG ? this.getString_61zpoe$('Active') : LinkedListHead.prototype.toString.call(this);
  };
  NodeList.$metadata$ = {kind: Kind_CLASS, simpleName: 'NodeList', interfaces: [Incomplete, LinkedListHead]};
  function InactiveNodeList(list) {
    this.list_afai45$_0 = list;
  }
  Object.defineProperty(InactiveNodeList.prototype, 'list', {get: function () {
    return this.list_afai45$_0;
  }});
  Object.defineProperty(InactiveNodeList.prototype, 'isActive', {configurable: true, get: function () {
    return false;
  }});
  InactiveNodeList.prototype.toString = function () {
    return DEBUG ? this.list.getString_61zpoe$('New') : Any.prototype.toString.call(this);
  };
  InactiveNodeList.$metadata$ = {kind: Kind_CLASS, simpleName: 'InactiveNodeList', interfaces: [Incomplete]};
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.handler_0 = handler;
  }
  InvokeOnCompletion.prototype.invoke = function (cause) {
    this.handler_0(cause);
  };
  InvokeOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'InvokeOnCompletion', interfaces: [JobNode]};
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_0 = continuation;
  }
  ResumeOnCompletion.prototype.invoke = function (cause) {
    this.continuation_0.resumeWith_tl1gpc$(new Result(Unit));
  };
  ResumeOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'ResumeOnCompletion', interfaces: [JobNode]};
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_0 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    var tmp$, tmp$_0;
    var state = this.job.state_8be2vx$;
    if (Kotlin.isType(state, CompletedExceptionally)) {
      var $receiver = this.continuation_0;
      var exception = state.cause;
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
    } else {
      tmp$_0 = this.continuation_0;
      var value = (tmp$ = unboxState(state)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
      tmp$_0.resumeWith_tl1gpc$(new Result(value));
    }
  };
  ResumeAwaitOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'ResumeAwaitOnCompletion', interfaces: [JobNode]};
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.handle_0 = handle;
  }
  DisposeOnCompletion.prototype.invoke = function (cause) {
    this.handle_0.dispose();
  };
  DisposeOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'DisposeOnCompletion', interfaces: [JobNode]};
  function SelectJoinOnCompletion(select, block) {
    JobNode.call(this);
    this.select_0 = select;
    this.block_0 = block;
  }
  SelectJoinOnCompletion.prototype.invoke = function (cause) {
    if (this.select_0.trySelect())
      startCoroutineCancellable(this.block_0, this.select_0.completion);
  };
  SelectJoinOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelectJoinOnCompletion', interfaces: [JobNode]};
  function SelectAwaitOnCompletion(select, block) {
    JobNode.call(this);
    this.select_0 = select;
    this.block_0 = block;
  }
  SelectAwaitOnCompletion.prototype.invoke = function (cause) {
    if (this.select_0.trySelect())
      this.job.selectAwaitCompletion_u6kgbh$(this.select_0, this.block_0);
  };
  SelectAwaitOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelectAwaitOnCompletion', interfaces: [JobNode]};
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobCancellingNode', interfaces: [JobNode]};
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.handler_0 = handler;
    this._invoked_0 = atomic_0(0);
  }
  InvokeOnCancelling.prototype.invoke = function (cause) {
    if (this._invoked_0.atomicfu$compareAndSet(0, 1))
      this.handler_0(cause);
  };
  InvokeOnCancelling.$metadata$ = {kind: Kind_CLASS, simpleName: 'InvokeOnCancelling', interfaces: [JobCancellingNode]};
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.childJob = childJob;
  }
  Object.defineProperty(ChildHandleNode.prototype, 'parent', {configurable: true, get: function () {
    return this.job;
  }});
  ChildHandleNode.prototype.invoke = function (cause) {
    this.childJob.parentCancelled_pv1t6x$(this.job);
  };
  ChildHandleNode.prototype.childCancelled_tcv7n7$ = function (cause) {
    return this.job.childCancelled_tcv7n7$(cause);
  };
  ChildHandleNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChildHandleNode', interfaces: [ChildHandle, JobCancellingNode]};
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.child = child;
  }
  ChildContinuation.prototype.invoke = function (cause) {
    this.child.parentCancelled_8o0b5c$(this.child.getContinuationCancellationCause_dqr1mp$(this.job));
  };
  ChildContinuation.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChildContinuation', interfaces: [JobCancellingNode]};
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp$;
    return (tmp$ = this.toStringInternalImpl()) != null ? tmp$ : get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  MainCoroutineDispatcher.prototype.limitedParallelism_za3lpa$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  MainCoroutineDispatcher.prototype.toStringInternalImpl = function () {
    var tmp$;
    var main = Dispatchers_getInstance().Main;
    if (this === main)
      return 'Dispatchers.Main';
    try {
      tmp$ = main.immediate;
    } catch (e) {
      if (Kotlin.isType(e, UnsupportedOperationException)) {
        tmp$ = null;
      } else
        throw e;
    }
    var immediate = tmp$;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'MainCoroutineDispatcher', interfaces: [CoroutineDispatcher]};
  function NonCancellable() {
    NonCancellable_instance = this;
    AbstractCoroutineContextElement.call(this, Job$Key_getInstance());
    this.message_0 = "NonCancellable can be used only as an argument for 'withContext', direct usages of its API are prohibited";
  }
  var NonCancellable_instance = null;
  function SupervisorJob(parent) {
    if (parent === void 0)
      parent = null;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.childCancelled_tcv7n7$ = function (cause) {
    return false;
  };
  SupervisorJobImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'SupervisorJobImpl', interfaces: [JobImpl]};
  function withTimeoutOrNull$lambda(closure$timeMillis, closure$coroutine, closure$block) {
    return function (uCont) {
      var timeoutCoroutine = new TimeoutCoroutine(closure$timeMillis, uCont);
      closure$coroutine.v = timeoutCoroutine;
      return setupTimeout(timeoutCoroutine, closure$block);
    };
  }
  function Coroutine$withTimeoutOrNull(timeMillis_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$coroutine = void 0;
    this.local$e = void 0;
    this.local$timeMillis = timeMillis_0;
    this.local$block = block_0;
  }
  Coroutine$withTimeoutOrNull.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$withTimeoutOrNull.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$withTimeoutOrNull.prototype.constructor = Coroutine$withTimeoutOrNull;
  Coroutine$withTimeoutOrNull.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$timeMillis.compareTo_11rb$(L0) <= 0) {
              return null;
            } else {
              this.state_0 = 1;
              continue;
            }

          case 1:
            this.local$coroutine = {v: null};
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = withTimeoutOrNull$lambda(this.local$timeMillis, this.local$coroutine, this.local$block)(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 7;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, TimeoutCancellationException)) {
              if (this.local$e.coroutine_8be2vx$ === this.local$coroutine.v) {
                return null;
              } else {
                this.state_0 = 4;
                continue;
              }
            } else {
              throw this.local$e;
            }

          case 4:
            throw this.local$e;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            return;
          case 7:
            throw this.exception_0;
          default:
            this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 7) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function withTimeoutOrNull(timeMillis_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$withTimeoutOrNull(timeMillis_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function setupTimeout(coroutine, block) {
    var cont = coroutine.uCont;
    var context = cont.context;
    disposeOnCompletion(coroutine, get_delay(context).invokeOnTimeout_oczv3n$(coroutine.time, coroutine, coroutine.context));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.context, uCont);
    this.time = time;
  }
  TimeoutCoroutine.prototype.run = function () {
    this.cancelCoroutine_dbl4no$(TimeoutCancellationException_0(this.time, this));
  };
  TimeoutCoroutine.prototype.nameString = function () {
    return ScopeCoroutine.prototype.nameString.call(this) + '(timeMillis=' + this.time.toString() + ')';
  };
  TimeoutCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'TimeoutCoroutine', interfaces: [Runnable, ScopeCoroutine]};
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init(message, this);
    this.coroutine_8be2vx$ = coroutine;
    this.name = 'TimeoutCancellationException';
  }
  TimeoutCancellationException.prototype.createCopy = function () {
    var tmp$;
    var $receiver = new TimeoutCancellationException((tmp$ = this.message) != null ? tmp$ : '', this.coroutine_8be2vx$);
    initCause($receiver, this);
    return $receiver;
  };
  TimeoutCancellationException.$metadata$ = {kind: Kind_CLASS, simpleName: 'TimeoutCancellationException', interfaces: [CopyableThrowable, CancellationException]};
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + time.toString() + ' ms', coroutine);
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.limitedParallelism_za3lpa$ = function (parallelism) {
    throw UnsupportedOperationException_init('limitedParallelism is not supported for Dispatchers.Unconfined');
  };
  Unconfined.prototype.isDispatchNeeded_1fupul$ = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_5bn72i$ = function (context, block) {
    var yieldContext = context.get_j3r2sn$(YieldContext$Key_getInstance());
    if (yieldContext != null) {
      yieldContext.dispatcherWasUnconfined = true;
      return;
    }
    throw UnsupportedOperationException_init('Dispatchers.Unconfined.dispatch function can only be used by the yield function. ' + 'If you wrap Unconfined dispatcher in your code, make sure you properly delegate ' + 'isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Unconfined', interfaces: [CoroutineDispatcher]};
  var Unconfined_instance = null;
  function Unconfined_getInstance() {
    if (Unconfined_instance === null) {
      new Unconfined();
    }
    return Unconfined_instance;
  }
  function YieldContext() {
    YieldContext$Key_getInstance();
    AbstractCoroutineContextElement.call(this, YieldContext$Key_getInstance());
    this.dispatcherWasUnconfined = false;
  }
  function YieldContext$Key() {
    YieldContext$Key_instance = this;
  }
  YieldContext$Key.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Key', interfaces: [CoroutineContext$Key]};
  var YieldContext$Key_instance = null;
  function YieldContext$Key_getInstance() {
    if (YieldContext$Key_instance === null) {
      new YieldContext$Key();
    }
    return YieldContext$Key_instance;
  }
  function suspendCancellableCoroutineReusable$lambda_0(closure$block) {
    return function (uCont) {
      var cancellable = getOrCreateCancellableContinuation(intercepted(uCont));
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function AbstractSendChannel(onUndeliveredElement) {
    this.onUndeliveredElement_0 = onUndeliveredElement;
    this.queue_0 = new LinkedListHead();
    this.onCloseHandler_0 = atomic(null);
  }
  AbstractSendChannel.prototype.offerInternal_11rb$ = function (element) {
    var tmp$;
    while (true) {
      tmp$ = this.takeFirstReceiveOrPeekClosed();
      if (tmp$ == null) {
        return OFFER_FAILED;
      }
      var receive = tmp$;
      var token = receive.tryResumeReceive_j43gjz$(element, null);
      if (token != null) {
        receive.completeResumeReceive_11rb$(element);
        return receive.offerResult;
      }
    }
  };
  AbstractSendChannel.prototype.offerSelectInternal_ys5ufj$ = function (element, select) {
    var offerOp = this.describeTryOffer_0(element);
    var failure = select.performAtomicTrySelect_6q0pxr$(offerOp);
    if (failure != null)
      return failure;
    var receive = offerOp.result;
    receive.completeResumeReceive_11rb$(element);
    return receive.offerResult;
  };
  Object.defineProperty(AbstractSendChannel.prototype, 'closedForSend_0', {configurable: true, get: function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = this.queue_0._prev, Closed) ? tmp$ : null) != null) {
      this.helpClose_0(tmp$_0);
      tmp$_1 = tmp$_0;
    } else
      tmp$_1 = null;
    return tmp$_1;
  }});
  Object.defineProperty(AbstractSendChannel.prototype, 'closedForReceive_0', {configurable: true, get: function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = this.queue_0._next, Closed) ? tmp$ : null) != null) {
      this.helpClose_0(tmp$_0);
      tmp$_1 = tmp$_0;
    } else
      tmp$_1 = null;
    return tmp$_1;
  }});
  AbstractSendChannel.prototype.takeFirstSendOrPeekClosed_0 = function () {
    var $this = this.queue_0;
    var removeFirstIfIsInstanceOfOrPeekIf_14urrv$result;
    removeFirstIfIsInstanceOfOrPeekIf_14urrv$break: do {
      var next = $this._next;
      if (next === $this) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = null;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (!Kotlin.isType(next, Send)) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = null;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (Kotlin.isType(next, Closed)) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = next;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (!next.removeImpl()) {
        var message = 'Should remove';
        throw IllegalStateException_init(message.toString());
      }
      removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = next;
    }
     while (false);
    return removeFirstIfIsInstanceOfOrPeekIf_14urrv$result;
  };
  AbstractSendChannel.prototype.sendBuffered_0 = function (element) {
    var $this = this.queue_0;
    var node = new AbstractSendChannel$SendBuffered(element);
    addLastIfPrev_s8xlln$break: do {
      var prev = $this._prev;
      if (Kotlin.isType(prev, ReceiveOrClosed))
        return prev;
      if (!true) {
        false;
        break addLastIfPrev_s8xlln$break;
      }
      $this.addLast_l2j9rm$(node);
      true;
    }
     while (false);
    return null;
  };
  AbstractSendChannel.prototype.describeSendBuffered_0 = function (element) {
    return new AbstractSendChannel$SendBufferedDesc(this.queue_0, element);
  };
  function AbstractSendChannel$SendBufferedDesc(queue, element) {
    AddLastDesc.call(this, queue, new AbstractSendChannel$SendBuffered(element));
  }
  AbstractSendChannel$SendBufferedDesc.prototype.failure_l2j9rm$ = function (affected) {
    if (Kotlin.isType(affected, Closed))
      return affected;
    else if (Kotlin.isType(affected, ReceiveOrClosed))
      return OFFER_FAILED;
    else
      return null;
  };
  AbstractSendChannel$SendBufferedDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendBufferedDesc', interfaces: [AddLastDesc]};
  Object.defineProperty(AbstractSendChannel.prototype, 'isClosedForSend', {configurable: true, get: function () {
    return this.closedForSend_0 != null;
  }});
  Object.defineProperty(AbstractSendChannel.prototype, 'isFullImpl_0', {configurable: true, get: function () {
    return !Kotlin.isType(this.queue_0._next, ReceiveOrClosed) && this.isBufferFull;
  }});
  AbstractSendChannel.prototype.send_11rb$ = function (element, continuation) {
    if (this.offerInternal_11rb$(element) === OFFER_SUCCESS)
      return;
    return this.sendSuspend_0(element, continuation);
  };
  AbstractSendChannel.prototype.offer_11rb$ = function (element) {
    var tmp$, tmp$_0;
    try {
      return SendChannel.prototype.offer_11rb$.call(this, element);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if ((tmp$_0 = (tmp$ = this.onUndeliveredElement_0) != null ? callUndeliveredElementCatchingException(tmp$, element) : null) != null) {
          addSuppressed(tmp$_0, e);
          throw tmp$_0;
        }
        throw e;
      } else
        throw e;
    }
  };
  AbstractSendChannel.prototype.trySend_11rb$ = function (element) {
    var tmp$, tmp$_0;
    var result = this.offerInternal_11rb$(element);
    if (result === OFFER_SUCCESS)
      tmp$_0 = ChannelResult$Companion_getInstance().success_mh5how$(Unit);
    else if (result === OFFER_FAILED) {
      tmp$ = this.closedForSend_0;
      if (tmp$ == null) {
        return ChannelResult$Companion_getInstance().failure_287e2$();
      }
      var closedForSend = tmp$;
      tmp$_0 = ChannelResult$Companion_getInstance().closed_xo0v4m$(this.helpCloseAndGetSendException_0(closedForSend));
    } else if (Kotlin.isType(result, Closed))
      tmp$_0 = ChannelResult$Companion_getInstance().closed_xo0v4m$(this.helpCloseAndGetSendException_0(result));
    else {
      throw IllegalStateException_init(('trySend returned ' + result.toString()).toString());
    }
    return tmp$_0;
  };
  AbstractSendChannel.prototype.helpCloseAndGetSendException_0 = function (closed) {
    this.helpClose_0(closed);
    return closed.sendException;
  };
  AbstractSendChannel.prototype.helpCloseAndGetSendException_1 = function (element, closed) {
    var tmp$, tmp$_0;
    this.helpClose_0(closed);
    if ((tmp$_0 = (tmp$ = this.onUndeliveredElement_0) != null ? callUndeliveredElementCatchingException(tmp$, element) : null) != null) {
      addSuppressed(tmp$_0, closed.sendException);
      throw tmp$_0;
    }
    return closed.sendException;
  };
  function AbstractSendChannel$sendSuspend$lambda(this$AbstractSendChannel, closure$element) {
    return function (cont) {
      loop: while (true) {
        if (this$AbstractSendChannel.isFullImpl_0) {
          var send = this$AbstractSendChannel.onUndeliveredElement_0 == null ? new SendElement(closure$element, cont) : new SendElementWithUndeliveredHandler(closure$element, cont, this$AbstractSendChannel.onUndeliveredElement_0);
          var enqueueResult = this$AbstractSendChannel.enqueueSend_vs6846$(send);
          if (enqueueResult == null) {
            removeOnCancellation(cont, send);
            return;
          } else if (Kotlin.isType(enqueueResult, Closed)) {
            this$AbstractSendChannel.helpCloseAndResumeWithSendException_0(cont, closure$element, enqueueResult);
            return;
          } else if (enqueueResult !== ENQUEUE_FAILED)
            if (!Kotlin.isType(enqueueResult, Receive)) {
              throw IllegalStateException_init(('enqueueSend returned ' + toString(enqueueResult)).toString());
            }
        }
        var offerResult = this$AbstractSendChannel.offerInternal_11rb$(closure$element);
        if (offerResult === OFFER_SUCCESS) {
          cont.resumeWith_tl1gpc$(new Result(Unit));
          return;
        } else if (offerResult === OFFER_FAILED)
          continue loop;
        else if (Kotlin.isType(offerResult, Closed)) {
          this$AbstractSendChannel.helpCloseAndResumeWithSendException_0(cont, closure$element, offerResult);
          return;
        } else {
          throw IllegalStateException_init(('offerInternal returned ' + offerResult.toString()).toString());
        }
      }
    };
  }
  AbstractSendChannel.prototype.sendSuspend_0 = function (element, continuation) {
    return suspendCancellableCoroutineReusable$lambda_0(AbstractSendChannel$sendSuspend$lambda(this, element))(continuation);
  };
  AbstractSendChannel.prototype.helpCloseAndResumeWithSendException_0 = function ($receiver, element, closed) {
    var tmp$, tmp$_0;
    this.helpClose_0(closed);
    var sendException = closed.sendException;
    if ((tmp$_0 = (tmp$ = this.onUndeliveredElement_0) != null ? callUndeliveredElementCatchingException(tmp$, element) : null) != null) {
      addSuppressed(tmp$_0, sendException);
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(tmp$_0)));
      return;
    }
    $receiver.resumeWith_tl1gpc$(new Result(createFailure(sendException)));
  };
  function AbstractSendChannel$enqueueSend$lambda(this$AbstractSendChannel) {
    return function () {
      return this$AbstractSendChannel.isBufferFull;
    };
  }
  AbstractSendChannel.prototype.enqueueSend_vs6846$ = function (send) {
    if (this.isBufferAlwaysFull) {
      var $this = this.queue_0;
      addLastIfPrev_s8xlln$break: do {
        var prev = $this._prev;
        if (Kotlin.isType(prev, ReceiveOrClosed))
          return prev;
        if (!true) {
          false;
          break addLastIfPrev_s8xlln$break;
        }
        $this.addLast_l2j9rm$(send);
        true;
      }
       while (false);
    } else {
      var $this_0 = this.queue_0;
      var addLastIfPrevAndIf_dzcug$result;
      addLastIfPrevAndIf_dzcug$break: do {
        var prev_0 = $this_0._prev;
        if (Kotlin.isType(prev_0, ReceiveOrClosed))
          return prev_0;
        if (!true) {
          addLastIfPrevAndIf_dzcug$result = false;
          break addLastIfPrevAndIf_dzcug$break;
        }
        if (!AbstractSendChannel$enqueueSend$lambda(this)()) {
          addLastIfPrevAndIf_dzcug$result = false;
          break addLastIfPrevAndIf_dzcug$break;
        }
        $this_0.addLast_l2j9rm$(send);
        addLastIfPrevAndIf_dzcug$result = true;
      }
       while (false);
      if (!addLastIfPrevAndIf_dzcug$result)
        return ENQUEUE_FAILED;
    }
    return null;
  };
  AbstractSendChannel.prototype.close_dbl4no$$default = function (cause) {
    var tmp$;
    var closed = new Closed(cause);
    var $this = this.queue_0;
    var addLastIfPrev_s8xlln$result;
    addLastIfPrev_s8xlln$break: do {
      if (!!Kotlin.isType($this._prev, Closed)) {
        addLastIfPrev_s8xlln$result = false;
        break addLastIfPrev_s8xlln$break;
      }
      $this.addLast_l2j9rm$(closed);
      addLastIfPrev_s8xlln$result = true;
    }
     while (false);
    var closeAdded = addLastIfPrev_s8xlln$result;
    var actuallyClosed = closeAdded ? closed : Kotlin.isType(tmp$ = this.queue_0._prev, Closed) ? tmp$ : throwCCE();
    this.helpClose_0(actuallyClosed);
    if (closeAdded)
      this.invokeOnCloseHandler_0(cause);
    return closeAdded;
  };
  AbstractSendChannel.prototype.invokeOnCloseHandler_0 = function (cause) {
    var tmp$;
    var handler = this.onCloseHandler_0.kotlinx$atomicfu$value;
    if (handler !== null && handler !== HANDLER_INVOKED && this.onCloseHandler_0.atomicfu$compareAndSet(handler, HANDLER_INVOKED)) {
      (typeof (tmp$ = handler) === 'function' ? tmp$ : throwCCE())(cause);
    }
  };
  AbstractSendChannel.prototype.invokeOnClose_f05bi3$ = function (handler) {
    if (!this.onCloseHandler_0.atomicfu$compareAndSet(null, handler)) {
      var value = this.onCloseHandler_0.kotlinx$atomicfu$value;
      if (value === HANDLER_INVOKED) {
        throw IllegalStateException_init('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init('Another handler was already registered: ' + toString(value));
    } else {
      var closedToken = this.closedForSend_0;
      if (closedToken != null && this.onCloseHandler_0.atomicfu$compareAndSet(handler, HANDLER_INVOKED)) {
        handler(closedToken.closeCause);
      }
    }
  };
  AbstractSendChannel.prototype.helpClose_0 = function (closed) {
    var tmp$, tmp$_0;
    var closedList = new InlineList();
    while (true) {
      tmp$_0 = Kotlin.isType(tmp$ = closed._prev, Receive) ? tmp$ : null;
      if (tmp$_0 == null) {
        break;
      }
      var previous = tmp$_0;
      if (!previous.remove()) {
        previous.helpRemove();
        continue;
      }
      closedList = closedList.plus_11rb$(previous);
    }
    var $this = closedList;
    var tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = $this.holder_0;
    if (tmp$_1 != null)
      if (!Kotlin.isType(tmp$_1, ArrayList)) {
        ((tmp$_2 = $this.holder_0) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE()).resumeReceiveClosed_1zqbm$(closed);
      } else {
        var list = Kotlin.isType(tmp$_3 = $this.holder_0, ArrayList) ? tmp$_3 : throwCCE();
        for (var i = list.size - 1 | 0; i >= 0; i--) {
          list.get_za3lpa$(i).resumeReceiveClosed_1zqbm$(closed);
        }
      }
    this.onClosedIdempotent_l2j9rm$(closed);
  };
  AbstractSendChannel.prototype.onClosedIdempotent_l2j9rm$ = function (closed) {
  };
  AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed = function () {
    var $this = this.queue_0;
    var removeFirstIfIsInstanceOfOrPeekIf_14urrv$result;
    removeFirstIfIsInstanceOfOrPeekIf_14urrv$break: do {
      var next = $this._next;
      if (next === $this) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = null;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (!Kotlin.isType(next, ReceiveOrClosed)) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = null;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (Kotlin.isType(next, Closed)) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = next;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (!next.removeImpl()) {
        var message = 'Should remove';
        throw IllegalStateException_init(message.toString());
      }
      removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = next;
    }
     while (false);
    return removeFirstIfIsInstanceOfOrPeekIf_14urrv$result;
  };
  AbstractSendChannel.prototype.describeTryOffer_0 = function (element) {
    return new AbstractSendChannel$TryOfferDesc(element, this.queue_0);
  };
  function AbstractSendChannel$TryOfferDesc(element, queue) {
    RemoveFirstDesc.call(this, queue);
    this.element = element;
  }
  AbstractSendChannel$TryOfferDesc.prototype.failure_l2j9rm$ = function (affected) {
    if (Kotlin.isType(affected, Closed))
      return affected;
    else if (!Kotlin.isType(affected, ReceiveOrClosed))
      return OFFER_FAILED;
    else
      return null;
  };
  AbstractSendChannel$TryOfferDesc.prototype.onPrepare_xe32vn$ = function (prepareOp) {
    var tmp$, tmp$_0;
    var affected = Kotlin.isType(tmp$ = prepareOp.affected, ReceiveOrClosed) ? tmp$ : throwCCE();
    tmp$_0 = affected.tryResumeReceive_j43gjz$(this.element, prepareOp);
    if (tmp$_0 == null) {
      return REMOVE_PREPARED;
    }
    var token = tmp$_0;
    if (token === RETRY_ATOMIC)
      return RETRY_ATOMIC;
    return null;
  };
  AbstractSendChannel$TryOfferDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'TryOfferDesc', interfaces: [RemoveFirstDesc]};
  function AbstractSendChannel$get_AbstractSendChannel$onSend$ObjectLiteral(this$AbstractSendChannel) {
    this.this$AbstractSendChannel = this$AbstractSendChannel;
  }
  AbstractSendChannel$get_AbstractSendChannel$onSend$ObjectLiteral.prototype.registerSelectClause2_rol3se$ = function (select, param, block) {
    this.this$AbstractSendChannel.registerSelectSend_0(select, param, block);
  };
  AbstractSendChannel$get_AbstractSendChannel$onSend$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SelectClause2]};
  Object.defineProperty(AbstractSendChannel.prototype, 'onSend', {configurable: true, get: function () {
    return new AbstractSendChannel$get_AbstractSendChannel$onSend$ObjectLiteral(this);
  }});
  AbstractSendChannel.prototype.registerSelectSend_0 = function (select, element, block) {
    while (true) {
      if (select.isSelected)
        return;
      if (this.isFullImpl_0) {
        var node = new AbstractSendChannel$SendSelect(element, this, select, block);
        var enqueueResult = this.enqueueSend_vs6846$(node);
        if (enqueueResult == null) {
          select.disposeOnSelect_rvfg84$(node);
          return;
        } else if (Kotlin.isType(enqueueResult, Closed))
          throw recoverStackTrace_0(this.helpCloseAndGetSendException_1(element, enqueueResult));
        else if (enqueueResult !== ENQUEUE_FAILED)
          if (!Kotlin.isType(enqueueResult, Receive)) {
            throw IllegalStateException_init(('enqueueSend returned ' + toString(enqueueResult) + ' ').toString());
          }
      }
      var offerResult = this.offerSelectInternal_ys5ufj$(element, select);
      if (offerResult === ALREADY_SELECTED)
        return;
      else if (offerResult !== OFFER_FAILED)
        if (offerResult !== RETRY_ATOMIC)
          if (offerResult === OFFER_SUCCESS) {
            startCoroutineUnintercepted_0(block, this, select.completion);
            return;
          } else if (Kotlin.isType(offerResult, Closed))
            throw recoverStackTrace_0(this.helpCloseAndGetSendException_1(element, offerResult));
          else {
            throw IllegalStateException_init(('offerSelectInternal returned ' + offerResult.toString()).toString());
          }
    }
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + this.queueDebugStateString_0 + '}' + this.bufferDebugString;
  };
  Object.defineProperty(AbstractSendChannel.prototype, 'queueDebugStateString_0', {configurable: true, get: function () {
    var tmp$;
    var head = this.queue_0._next;
    if (head === this.queue_0)
      return 'EmptyQueue';
    if (Kotlin.isType(head, Closed))
      tmp$ = head.toString();
    else if (Kotlin.isType(head, Receive))
      tmp$ = 'ReceiveQueued';
    else if (Kotlin.isType(head, Send))
      tmp$ = 'SendQueued';
    else
      tmp$ = 'UNEXPECTED:' + head;
    var result = tmp$;
    var tail = this.queue_0._prev;
    if (tail !== head) {
      result += ',queueSize=' + this.countQueueSize_0();
      if (Kotlin.isType(tail, Closed))
        result += ',closedForSend=' + tail;
    }
    return result;
  }});
  AbstractSendChannel.prototype.countQueueSize_0 = function () {
    var size = {v: 0};
    var $this = this.queue_0;
    var cur = $this._next;
    while (!equals(cur, $this)) {
      if (Kotlin.isType(cur, LinkedListNode)) {
        size.v = size.v + 1 | 0;
      }
      cur = cur._next;
    }
    return size.v;
  };
  Object.defineProperty(AbstractSendChannel.prototype, 'bufferDebugString', {configurable: true, get: function () {
    return '';
  }});
  function AbstractSendChannel$SendSelect(pollResult, channel, select, block) {
    Send.call(this);
    this.pollResult_m5nr4l$_0 = pollResult;
    this.channel = channel;
    this.select = select;
    this.block = block;
  }
  Object.defineProperty(AbstractSendChannel$SendSelect.prototype, 'pollResult', {get: function () {
    return this.pollResult_m5nr4l$_0;
  }});
  AbstractSendChannel$SendSelect.prototype.tryResumeSend_uc1cc4$ = function (otherOp) {
    var tmp$;
    return (tmp$ = this.select.trySelectOther_uc1cc4$(otherOp)) == null || Kotlin.isType(tmp$, Symbol) ? tmp$ : throwCCE();
  };
  AbstractSendChannel$SendSelect.prototype.completeResumeSend = function () {
    startCoroutineCancellable_0(this.block, this.channel, this.select.completion);
  };
  AbstractSendChannel$SendSelect.prototype.dispose = function () {
    if (!this.remove())
      return;
    this.undeliveredElement();
  };
  AbstractSendChannel$SendSelect.prototype.resumeSendClosed_1zqbm$ = function (closed) {
    if (this.select.trySelect())
      this.select.resumeSelectWithException_tcv7n7$(closed.sendException);
  };
  AbstractSendChannel$SendSelect.prototype.undeliveredElement = function () {
    var tmp$;
    (tmp$ = this.channel.onUndeliveredElement_0) != null ? (callUndeliveredElement(tmp$, this.pollResult, this.select.completion.context), Unit) : null;
  };
  AbstractSendChannel$SendSelect.prototype.toString = function () {
    return 'SendSelect@' + get_hexAddress(this) + '(' + this.pollResult + ')[' + this.channel + ', ' + this.select + ']';
  };
  AbstractSendChannel$SendSelect.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendSelect', interfaces: [DisposableHandle, Send]};
  function AbstractSendChannel$SendBuffered(element) {
    Send.call(this);
    this.element = element;
  }
  Object.defineProperty(AbstractSendChannel$SendBuffered.prototype, 'pollResult', {configurable: true, get: function () {
    return this.element;
  }});
  AbstractSendChannel$SendBuffered.prototype.tryResumeSend_uc1cc4$ = function (otherOp) {
    otherOp != null ? (otherOp.finishPrepare(), Unit) : null;
    return RESUME_TOKEN;
  };
  AbstractSendChannel$SendBuffered.prototype.completeResumeSend = function () {
  };
  AbstractSendChannel$SendBuffered.prototype.resumeSendClosed_1zqbm$ = function (closed) {
  };
  AbstractSendChannel$SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.element + ')';
  };
  AbstractSendChannel$SendBuffered.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendBuffered', interfaces: [Send]};
  AbstractSendChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractSendChannel', interfaces: [SendChannel]};
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.pollInternal = function () {
    var tmp$;
    while (true) {
      tmp$ = this.takeFirstSendOrPeekClosed_0();
      if (tmp$ == null) {
        return POLL_FAILED;
      }
      var send = tmp$;
      var token = send.tryResumeSend_uc1cc4$(null);
      if (token != null) {
        send.completeResumeSend();
        return send.pollResult;
      }
      send.undeliveredElement();
    }
  };
  AbstractChannel.prototype.pollSelectInternal_y5yyj0$ = function (select) {
    var pollOp = this.describeTryPoll_0();
    var failure = select.performAtomicTrySelect_6q0pxr$(pollOp);
    if (failure != null)
      return failure;
    var send = pollOp.result;
    send.completeResumeSend();
    return pollOp.result.pollResult;
  };
  Object.defineProperty(AbstractChannel.prototype, 'hasReceiveOrClosed_0', {configurable: true, get: function () {
    return Kotlin.isType(this.queue_0._next, ReceiveOrClosed);
  }});
  Object.defineProperty(AbstractChannel.prototype, 'isClosedForReceive', {configurable: true, get: function () {
    return this.closedForReceive_0 != null && this.isBufferEmpty;
  }});
  Object.defineProperty(AbstractChannel.prototype, 'isEmpty', {configurable: true, get: function () {
    return this.isEmptyImpl_0;
  }});
  Object.defineProperty(AbstractChannel.prototype, 'isEmptyImpl_0', {configurable: true, get: function () {
    return !Kotlin.isType(this.queue_0._next, Send) && this.isBufferEmpty;
  }});
  AbstractChannel.prototype.receive = function (continuation) {
    var tmp$;
    var result = this.pollInternal();
    if (result !== POLL_FAILED && !Kotlin.isType(result, Closed))
      return (tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    return this.receiveSuspend_0(0, continuation);
  };
  function AbstractChannel$receiveSuspend$lambda(this$AbstractChannel, closure$receiveMode) {
    return function (cont) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      if (this$AbstractChannel.onUndeliveredElement_0 == null) {
        tmp$_3 = new AbstractChannel$ReceiveElement(Kotlin.isType(tmp$ = cont, CancellableContinuation) ? tmp$ : throwCCE(), closure$receiveMode);
      } else {
        tmp$_1 = Kotlin.isType(tmp$_0 = cont, CancellableContinuation) ? tmp$_0 : throwCCE();
        tmp$_2 = this$AbstractChannel.onUndeliveredElement_0;
        tmp$_3 = new AbstractChannel$ReceiveElementWithUndeliveredHandler(tmp$_1, closure$receiveMode, tmp$_2);
      }
      var receive = tmp$_3;
      while (true) {
        if (this$AbstractChannel.enqueueReceive_0(receive)) {
          this$AbstractChannel.removeReceiveOnCancel_0(cont, receive);
          return;
        }
        var result = this$AbstractChannel.pollInternal();
        if (Kotlin.isType(result, Closed)) {
          receive.resumeReceiveClosed_1zqbm$(result);
          return;
        }
        if (result !== POLL_FAILED) {
          cont.resume_q1ktlu$(receive.resumeValue_11rb$((tmp$_4 = result) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE()), receive.resumeOnCancellationFun_11rb$((tmp$_5 = result) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE()));
          return;
        }
      }
      return Unit;
    };
  }
  AbstractChannel.prototype.receiveSuspend_0 = function (receiveMode, continuation) {
    return suspendCancellableCoroutineReusable$lambda_0(AbstractChannel$receiveSuspend$lambda(this, receiveMode))(continuation);
  };
  function AbstractChannel$enqueueReceiveInternal$lambda(this$AbstractChannel) {
    return function () {
      return this$AbstractChannel.isBufferEmpty;
    };
  }
  AbstractChannel.prototype.enqueueReceiveInternal_i292ax$ = function (receive) {
    var tmp$;
    if (this.isBufferAlwaysEmpty) {
      var $this = this.queue_0;
      var addLastIfPrev_s8xlln$result;
      addLastIfPrev_s8xlln$break: do {
        if (!!Kotlin.isType($this._prev, Send)) {
          addLastIfPrev_s8xlln$result = false;
          break addLastIfPrev_s8xlln$break;
        }
        $this.addLast_l2j9rm$(receive);
        addLastIfPrev_s8xlln$result = true;
      }
       while (false);
      tmp$ = addLastIfPrev_s8xlln$result;
    } else {
      var $this_0 = this.queue_0;
      var addLastIfPrevAndIf_dzcug$result;
      addLastIfPrevAndIf_dzcug$break: do {
        if (!!Kotlin.isType($this_0._prev, Send)) {
          addLastIfPrevAndIf_dzcug$result = false;
          break addLastIfPrevAndIf_dzcug$break;
        }
        if (!AbstractChannel$enqueueReceiveInternal$lambda(this)()) {
          addLastIfPrevAndIf_dzcug$result = false;
          break addLastIfPrevAndIf_dzcug$break;
        }
        $this_0.addLast_l2j9rm$(receive);
        addLastIfPrevAndIf_dzcug$result = true;
      }
       while (false);
      tmp$ = addLastIfPrevAndIf_dzcug$result;
    }
    return tmp$;
  };
  AbstractChannel.prototype.enqueueReceive_0 = function (receive) {
    var $receiver = this.enqueueReceiveInternal_i292ax$(receive);
    if ($receiver)
      this.onReceiveEnqueued();
    return $receiver;
  };
  AbstractChannel.prototype.receiveCatching = function (continuation) {
    var result = this.pollInternal();
    if (result !== POLL_FAILED) {
      var toResult$result;
      var tmp$;
      if (Kotlin.isType(result, Closed)) {
        toResult$result = ChannelResult$Companion_getInstance().closed_xo0v4m$(result.closeCause);
      } else {
        toResult$result = ChannelResult$Companion_getInstance().success_mh5how$((tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
      }
      return toResult$result;
    }
    return this.receiveSuspend_0(1, continuation);
  };
  AbstractChannel.prototype.tryReceive = function () {
    var tmp$;
    var result = this.pollInternal();
    if (result === POLL_FAILED)
      return ChannelResult$Companion_getInstance().failure_287e2$();
    if (Kotlin.isType(result, Closed))
      return ChannelResult$Companion_getInstance().closed_xo0v4m$(result.closeCause);
    return ChannelResult$Companion_getInstance().success_mh5how$((tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
  };
  AbstractChannel.prototype.cancel_dbl4no$$default = function (cause) {
    return this.cancelInternal_fg6mcv$(cause);
  };
  AbstractChannel.prototype.cancel_x5z25k$$default = function (cause) {
    if (this.isClosedForReceive)
      return;
    this.cancelInternal_fg6mcv$(cause != null ? cause : CancellationException_init(get_classSimpleName(this) + ' was cancelled'));
  };
  AbstractChannel.prototype.cancelInternal_fg6mcv$ = function (cause) {
    var $receiver = this.close_dbl4no$(cause);
    this.onCancelIdempotent_6taknv$($receiver);
    return $receiver;
  };
  AbstractChannel.prototype.onCancelIdempotent_6taknv$ = function (wasClosed) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.closedForSend_0) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('Cannot happen'.toString());
    }
    var closed = tmp$_0;
    var list = new InlineList();
    while (true) {
      var previous = closed._prev;
      if (Kotlin.isType(previous, LinkedListHead)) {
        break;
      }
      if (!previous.remove()) {
        previous.helpRemove();
        continue;
      }
      var tmp$_1;
      list = list.plus_11rb$(Kotlin.isType(tmp$_1 = previous, Send) ? tmp$_1 : throwCCE());
    }
    this.onCancelIdempotentList_kji3ae$(list, closed);
  };
  AbstractChannel.prototype.onCancelIdempotentList_kji3ae$ = function (list, closed) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = list.holder_0;
    if (tmp$ != null)
      if (!Kotlin.isType(tmp$, ArrayList)) {
        ((tmp$_0 = list.holder_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE()).resumeSendClosed_1zqbm$(closed);
      } else {
        var list_0 = Kotlin.isType(tmp$_1 = list.holder_0, ArrayList) ? tmp$_1 : throwCCE();
        for (var i = list_0.size - 1 | 0; i >= 0; i--) {
          list_0.get_za3lpa$(i).resumeSendClosed_1zqbm$(closed);
        }
      }
  };
  AbstractChannel.prototype.iterator = function () {
    return new AbstractChannel$Itr(this);
  };
  AbstractChannel.prototype.describeTryPoll_0 = function () {
    return new AbstractChannel$TryPollDesc(this.queue_0);
  };
  function AbstractChannel$TryPollDesc(queue) {
    RemoveFirstDesc.call(this, queue);
  }
  AbstractChannel$TryPollDesc.prototype.failure_l2j9rm$ = function (affected) {
    if (Kotlin.isType(affected, Closed))
      return affected;
    else if (!Kotlin.isType(affected, Send))
      return POLL_FAILED;
    else
      return null;
  };
  AbstractChannel$TryPollDesc.prototype.onPrepare_xe32vn$ = function (prepareOp) {
    var tmp$, tmp$_0;
    var affected = Kotlin.isType(tmp$ = prepareOp.affected, Send) ? tmp$ : throwCCE();
    tmp$_0 = affected.tryResumeSend_uc1cc4$(prepareOp);
    if (tmp$_0 == null) {
      return REMOVE_PREPARED;
    }
    var token = tmp$_0;
    if (token === RETRY_ATOMIC)
      return RETRY_ATOMIC;
    return null;
  };
  AbstractChannel$TryPollDesc.prototype.onRemoved_l2j9rm$ = function (affected) {
    var tmp$;
    (Kotlin.isType(tmp$ = affected, Send) ? tmp$ : throwCCE()).undeliveredElement();
  };
  AbstractChannel$TryPollDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'TryPollDesc', interfaces: [RemoveFirstDesc]};
  function AbstractChannel$get_AbstractChannel$onReceive$ObjectLiteral(this$AbstractChannel) {
    this.this$AbstractChannel = this$AbstractChannel;
  }
  AbstractChannel$get_AbstractChannel$onReceive$ObjectLiteral.prototype.registerSelectClause1_o3xas4$ = function (select, block) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = block, SuspendFunction1) ? tmp$ : throwCCE();
    this.this$AbstractChannel.registerSelectReceiveMode_0(select, 0, tmp$_0);
  };
  AbstractChannel$get_AbstractChannel$onReceive$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SelectClause1]};
  Object.defineProperty(AbstractChannel.prototype, 'onReceive', {configurable: true, get: function () {
    return new AbstractChannel$get_AbstractChannel$onReceive$ObjectLiteral(this);
  }});
  function AbstractChannel$get_AbstractChannel$onReceiveCatching$ObjectLiteral(this$AbstractChannel) {
    this.this$AbstractChannel = this$AbstractChannel;
  }
  AbstractChannel$get_AbstractChannel$onReceiveCatching$ObjectLiteral.prototype.registerSelectClause1_o3xas4$ = function (select, block) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = block, SuspendFunction1) ? tmp$ : throwCCE();
    this.this$AbstractChannel.registerSelectReceiveMode_0(select, 1, tmp$_0);
  };
  AbstractChannel$get_AbstractChannel$onReceiveCatching$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SelectClause1]};
  Object.defineProperty(AbstractChannel.prototype, 'onReceiveCatching', {configurable: true, get: function () {
    return new AbstractChannel$get_AbstractChannel$onReceiveCatching$ObjectLiteral(this);
  }});
  AbstractChannel.prototype.registerSelectReceiveMode_0 = function (select, receiveMode, block) {
    while (true) {
      if (select.isSelected)
        return;
      if (this.isEmptyImpl_0) {
        if (this.enqueueReceiveSelect_0(select, block, receiveMode))
          return;
      } else {
        var pollResult = this.pollSelectInternal_y5yyj0$(select);
        if (pollResult === ALREADY_SELECTED)
          return;
        else if (pollResult !== POLL_FAILED)
          if (pollResult !== RETRY_ATOMIC)
            this.tryStartBlockUnintercepted_0(block, select, receiveMode, pollResult);
      }
    }
  };
  AbstractChannel.prototype.tryStartBlockUnintercepted_0 = function ($receiver, select, receiveMode, value) {
    if (Kotlin.isType(value, Closed)) {
      switch (receiveMode) {
        case 0:
          throw recoverStackTrace_0(value.receiveException);
        case 1:
          if (!select.trySelect())
            return;
          startCoroutineUnintercepted_0($receiver, ChannelResult$Companion_getInstance().closed_xo0v4m$(value.closeCause), select.completion);
          break;
      }
    } else {
      if (receiveMode === 1) {
        var toResult$result;
        var tmp$;
        if (Kotlin.isType(value, Closed)) {
          toResult$result = ChannelResult$Companion_getInstance().closed_xo0v4m$(value.closeCause);
        } else {
          toResult$result = ChannelResult$Companion_getInstance().success_mh5how$((tmp$ = value) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
        }
        startCoroutineUnintercepted_0($receiver, toResult$result, select.completion);
      } else {
        startCoroutineUnintercepted_0($receiver, value, select.completion);
      }
    }
  };
  AbstractChannel.prototype.enqueueReceiveSelect_0 = function (select, block, receiveMode) {
    var node = new AbstractChannel$ReceiveSelect(this, select, block, receiveMode);
    var result = this.enqueueReceive_0(node);
    if (result)
      select.disposeOnSelect_rvfg84$(node);
    return result;
  };
  AbstractChannel.prototype.takeFirstReceiveOrPeekClosed = function () {
    var $receiver = AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed.call(this);
    if ($receiver != null && !Kotlin.isType($receiver, Closed))
      this.onReceiveDequeued();
    return $receiver;
  };
  AbstractChannel.prototype.onReceiveEnqueued = function () {
  };
  AbstractChannel.prototype.onReceiveDequeued = function () {
  };
  AbstractChannel.prototype.removeReceiveOnCancel_0 = function (cont, receive) {
    cont.invokeOnCancellation_f05bi3$(new AbstractChannel$RemoveReceiveOnCancel(this, receive));
  };
  function AbstractChannel$RemoveReceiveOnCancel($outer, receive) {
    this.$outer = $outer;
    BeforeResumeCancelHandler.call(this);
    this.receive_0 = receive;
  }
  AbstractChannel$RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    if (this.receive_0.remove())
      this.$outer.onReceiveDequeued();
  };
  AbstractChannel$RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.receive_0 + ']';
  };
  AbstractChannel$RemoveReceiveOnCancel.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoveReceiveOnCancel', interfaces: [BeforeResumeCancelHandler]};
  function AbstractChannel$Itr(channel) {
    this.channel = channel;
    this.result = POLL_FAILED;
  }
  AbstractChannel$Itr.prototype.hasNext = function (continuation) {
    if (this.result !== POLL_FAILED)
      return this.hasNextResult_0(this.result);
    this.result = this.channel.pollInternal();
    if (this.result !== POLL_FAILED)
      return this.hasNextResult_0(this.result);
    return this.hasNextSuspend_0(continuation);
  };
  AbstractChannel$Itr.prototype.hasNextResult_0 = function (result) {
    if (Kotlin.isType(result, Closed)) {
      if (result.closeCause != null)
        throw recoverStackTrace_0(result.receiveException);
      return false;
    }
    return true;
  };
  function AbstractChannel$Itr$hasNextSuspend$lambda(this$Itr) {
    return function (cont) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var receive = new AbstractChannel$ReceiveHasNext(this$Itr, cont);
      while (true) {
        if (this$Itr.channel.enqueueReceive_0(receive)) {
          this$Itr.channel.removeReceiveOnCancel_0(cont, receive);
          return;
        }
        var result = this$Itr.channel.pollInternal();
        this$Itr.result = result;
        if (Kotlin.isType(result, Closed)) {
          if (result.closeCause == null) {
            cont.resumeWith_tl1gpc$(new Result(false));
          } else {
            var exception = result.receiveException;
            cont.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          }
          return;
        }
        if (result !== POLL_FAILED) {
          tmp$_2 = this$Itr.channel.onUndeliveredElement_0;
          tmp$_0 = (tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
          tmp$_1 = cont.context;
          cont.resume_q1ktlu$(true, tmp$_2 != null ? bindCancellationFun(tmp$_2, tmp$_0, tmp$_1) : null);
          return;
        }
      }
      return Unit;
    };
  }
  AbstractChannel$Itr.prototype.hasNextSuspend_0 = function (continuation) {
    return suspendCancellableCoroutineReusable$lambda_0(AbstractChannel$Itr$hasNextSuspend$lambda(this))(continuation);
  };
  AbstractChannel$Itr.prototype.next = function () {
    var tmp$;
    var result = this.result;
    if (Kotlin.isType(result, Closed))
      throw recoverStackTrace_0(result.receiveException);
    if (result !== POLL_FAILED) {
      this.result = POLL_FAILED;
      return (tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
    throw IllegalStateException_init("'hasNext' should be called prior to 'next' invocation");
  };
  AbstractChannel$Itr.$metadata$ = {kind: Kind_CLASS, simpleName: 'Itr', interfaces: [ChannelIterator]};
  function AbstractChannel$ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.cont = cont;
    this.receiveMode = receiveMode;
  }
  AbstractChannel$ReceiveElement.prototype.resumeValue_11rb$ = function (value) {
    if (this.receiveMode === 1)
      return ChannelResult$Companion_getInstance().success_mh5how$(value);
    else
      return value;
  };
  AbstractChannel$ReceiveElement.prototype.tryResumeReceive_j43gjz$ = function (value, otherOp) {
    var tmp$;
    tmp$ = this.cont.tryResume_i8qury$(this.resumeValue_11rb$(value), otherOp != null ? otherOp.desc : null, this.resumeOnCancellationFun_11rb$(value));
    if (tmp$ == null) {
      return null;
    }
    var token = tmp$;
    otherOp != null ? (otherOp.finishPrepare(), Unit) : null;
    return RESUME_TOKEN;
  };
  AbstractChannel$ReceiveElement.prototype.completeResumeReceive_11rb$ = function (value) {
    this.cont.completeResume_za3rmp$(RESUME_TOKEN);
  };
  AbstractChannel$ReceiveElement.prototype.resumeReceiveClosed_1zqbm$ = function (closed) {
    if (this.receiveMode === 1) {
      var tmp$ = this.cont;
      var value = ChannelResult$Companion_getInstance().closed_xo0v4m$(closed.closeCause);
      tmp$.resumeWith_tl1gpc$(new Result(value));
    } else {
      var $receiver = this.cont;
      var exception = closed.receiveException;
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
    }
  };
  AbstractChannel$ReceiveElement.prototype.toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.receiveMode + ']';
  };
  AbstractChannel$ReceiveElement.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReceiveElement', interfaces: [Receive]};
  function AbstractChannel$ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    AbstractChannel$ReceiveElement.call(this, cont, receiveMode);
    this.onUndeliveredElement = onUndeliveredElement;
  }
  AbstractChannel$ReceiveElementWithUndeliveredHandler.prototype.resumeOnCancellationFun_11rb$ = function (value) {
    return bindCancellationFun(this.onUndeliveredElement, value, this.cont.context);
  };
  AbstractChannel$ReceiveElementWithUndeliveredHandler.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReceiveElementWithUndeliveredHandler', interfaces: [AbstractChannel$ReceiveElement]};
  function AbstractChannel$ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.iterator = iterator;
    this.cont = cont;
  }
  AbstractChannel$ReceiveHasNext.prototype.tryResumeReceive_j43gjz$ = function (value, otherOp) {
    var tmp$;
    tmp$ = this.cont.tryResume_i8qury$(true, otherOp != null ? otherOp.desc : null, this.resumeOnCancellationFun_11rb$(value));
    if (tmp$ == null) {
      return null;
    }
    var token = tmp$;
    otherOp != null ? (otherOp.finishPrepare(), Unit) : null;
    return RESUME_TOKEN;
  };
  AbstractChannel$ReceiveHasNext.prototype.completeResumeReceive_11rb$ = function (value) {
    this.iterator.result = value;
    this.cont.completeResume_za3rmp$(RESUME_TOKEN);
  };
  AbstractChannel$ReceiveHasNext.prototype.resumeReceiveClosed_1zqbm$ = function (closed) {
    var tmp$;
    if (closed.closeCause == null) {
      tmp$ = this.cont.tryResume_19pj23$(false);
    } else {
      tmp$ = this.cont.tryResumeWithException_tcv7n7$(closed.receiveException);
    }
    var token = tmp$;
    if (token != null) {
      this.iterator.result = closed;
      this.cont.completeResume_za3rmp$(token);
    }
  };
  AbstractChannel$ReceiveHasNext.prototype.resumeOnCancellationFun_11rb$ = function (value) {
    var tmp$;
    return (tmp$ = this.iterator.channel.onUndeliveredElement_0) != null ? bindCancellationFun(tmp$, value, this.cont.context) : null;
  };
  AbstractChannel$ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  AbstractChannel$ReceiveHasNext.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReceiveHasNext', interfaces: [Receive]};
  function AbstractChannel$ReceiveSelect(channel, select, block, receiveMode) {
    Receive.call(this);
    this.channel = channel;
    this.select = select;
    this.block = block;
    this.receiveMode = receiveMode;
  }
  AbstractChannel$ReceiveSelect.prototype.tryResumeReceive_j43gjz$ = function (value, otherOp) {
    var tmp$;
    return (tmp$ = this.select.trySelectOther_uc1cc4$(otherOp)) == null || Kotlin.isType(tmp$, Symbol) ? tmp$ : throwCCE();
  };
  AbstractChannel$ReceiveSelect.prototype.completeResumeReceive_11rb$ = function (value) {
    startCoroutineCancellable_0(this.block, this.receiveMode === 1 ? ChannelResult$Companion_getInstance().success_mh5how$(value) : value, this.select.completion, this.resumeOnCancellationFun_11rb$(value));
  };
  AbstractChannel$ReceiveSelect.prototype.resumeReceiveClosed_1zqbm$ = function (closed) {
    if (!this.select.trySelect())
      return;
    switch (this.receiveMode) {
      case 0:
        this.select.resumeSelectWithException_tcv7n7$(closed.receiveException);
        break;
      case 1:
        startCoroutineCancellable_0(this.block, ChannelResult$Companion_getInstance().closed_xo0v4m$(closed.closeCause), this.select.completion);
        break;
    }
  };
  AbstractChannel$ReceiveSelect.prototype.dispose = function () {
    if (this.remove())
      this.channel.onReceiveDequeued();
  };
  AbstractChannel$ReceiveSelect.prototype.resumeOnCancellationFun_11rb$ = function (value) {
    var tmp$;
    return (tmp$ = this.channel.onUndeliveredElement_0) != null ? bindCancellationFun(tmp$, value, this.select.completion.context) : null;
  };
  AbstractChannel$ReceiveSelect.prototype.toString = function () {
    return 'ReceiveSelect@' + get_hexAddress(this) + '[' + this.select + ',receiveMode=' + this.receiveMode + ']';
  };
  AbstractChannel$ReceiveSelect.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReceiveSelect', interfaces: [DisposableHandle, Receive]};
  AbstractChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractChannel', interfaces: [Channel, AbstractSendChannel]};
  var RECEIVE_THROWS_ON_CLOSE;
  var RECEIVE_RESULT;
  var EMPTY;
  var OFFER_SUCCESS;
  var OFFER_FAILED;
  var POLL_FAILED;
  var ENQUEUE_FAILED;
  var HANDLER_INVOKED;
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.undeliveredElement = function () {
  };
  Send.$metadata$ = {kind: Kind_CLASS, simpleName: 'Send', interfaces: [LinkedListNode]};
  function ReceiveOrClosed() {
  }
  ReceiveOrClosed.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ReceiveOrClosed', interfaces: []};
  function SendElement(pollResult, cont) {
    Send.call(this);
    this.pollResult_vo6xxe$_0 = pollResult;
    this.cont = cont;
  }
  Object.defineProperty(SendElement.prototype, 'pollResult', {get: function () {
    return this.pollResult_vo6xxe$_0;
  }});
  SendElement.prototype.tryResumeSend_uc1cc4$ = function (otherOp) {
    var tmp$;
    tmp$ = this.cont.tryResume_19pj23$(Unit, otherOp != null ? otherOp.desc : null);
    if (tmp$ == null) {
      return null;
    }
    var token = tmp$;
    otherOp != null ? (otherOp.finishPrepare(), Unit) : null;
    return RESUME_TOKEN;
  };
  SendElement.prototype.completeResumeSend = function () {
    this.cont.completeResume_za3rmp$(RESUME_TOKEN);
  };
  SendElement.prototype.resumeSendClosed_1zqbm$ = function (closed) {
    var $receiver = this.cont;
    var exception = closed.sendException;
    $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
  };
  SendElement.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '(' + this.pollResult + ')';
  };
  SendElement.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendElement', interfaces: [Send]};
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    SendElement.call(this, pollResult, cont);
    this.onUndeliveredElement = onUndeliveredElement;
  }
  SendElementWithUndeliveredHandler.prototype.remove = function () {
    if (!SendElement.prototype.remove.call(this))
      return false;
    this.undeliveredElement();
    return true;
  };
  SendElementWithUndeliveredHandler.prototype.undeliveredElement = function () {
    callUndeliveredElement(this.onUndeliveredElement, this.pollResult, this.cont.context);
  };
  SendElementWithUndeliveredHandler.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendElementWithUndeliveredHandler', interfaces: [SendElement]};
  function Closed(closeCause) {
    Send.call(this);
    this.closeCause = closeCause;
  }
  Object.defineProperty(Closed.prototype, 'sendException', {configurable: true, get: function () {
    var tmp$;
    return (tmp$ = this.closeCause) != null ? tmp$ : new ClosedSendChannelException(DEFAULT_CLOSE_MESSAGE);
  }});
  Object.defineProperty(Closed.prototype, 'receiveException', {configurable: true, get: function () {
    var tmp$;
    return (tmp$ = this.closeCause) != null ? tmp$ : new ClosedReceiveChannelException(DEFAULT_CLOSE_MESSAGE);
  }});
  Object.defineProperty(Closed.prototype, 'offerResult', {configurable: true, get: function () {
    return this;
  }});
  Object.defineProperty(Closed.prototype, 'pollResult', {configurable: true, get: function () {
    return this;
  }});
  Closed.prototype.tryResumeSend_uc1cc4$ = function (otherOp) {
    otherOp != null ? (otherOp.finishPrepare(), Unit) : null;
    return RESUME_TOKEN;
  };
  Closed.prototype.completeResumeSend = function () {
  };
  Closed.prototype.tryResumeReceive_j43gjz$ = function (value, otherOp) {
    otherOp != null ? (otherOp.finishPrepare(), Unit) : null;
    return RESUME_TOKEN;
  };
  Closed.prototype.completeResumeReceive_11rb$ = function (value) {
  };
  Closed.prototype.resumeSendClosed_1zqbm$ = function (closed) {
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + toString(this.closeCause) + ']';
  };
  Closed.$metadata$ = {kind: Kind_CLASS, simpleName: 'Closed', interfaces: [ReceiveOrClosed, Send]};
  function Receive() {
    LinkedListNode.call(this);
  }
  Object.defineProperty(Receive.prototype, 'offerResult', {configurable: true, get: function () {
    return OFFER_SUCCESS;
  }});
  Receive.prototype.resumeOnCancellationFun_11rb$ = function (value) {
    return null;
  };
  Receive.$metadata$ = {kind: Kind_CLASS, simpleName: 'Receive', interfaces: [ReceiveOrClosed, LinkedListNode]};
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.capacity_0 = capacity;
    this.onBufferOverflow_0 = onBufferOverflow;
    if (!(this.capacity_0 >= 1)) {
      var message = 'ArrayChannel capacity must be at least 1, but ' + this.capacity_0 + ' was specified';
      throw IllegalArgumentException_init(message.toString());
    }
    this.lock_0 = new NoOpLock();
    var a = this.capacity_0;
    var $receiver = Kotlin.newArray(JsMath.min(a, 8), null);
    fill($receiver, EMPTY);
    this.buffer_0 = $receiver;
    this.head_0 = 0;
    this.size_0 = atomic_0(0);
  }
  Object.defineProperty(ArrayChannel.prototype, 'isBufferAlwaysEmpty', {configurable: true, get: function () {
    return false;
  }});
  Object.defineProperty(ArrayChannel.prototype, 'isBufferEmpty', {configurable: true, get: function () {
    return this.size_0.kotlinx$atomicfu$value === 0;
  }});
  Object.defineProperty(ArrayChannel.prototype, 'isBufferAlwaysFull', {configurable: true, get: function () {
    return false;
  }});
  Object.defineProperty(ArrayChannel.prototype, 'isBufferFull', {configurable: true, get: function () {
    return this.size_0.kotlinx$atomicfu$value === this.capacity_0 && this.onBufferOverflow_0 === BufferOverflow$SUSPEND_getInstance();
  }});
  Object.defineProperty(ArrayChannel.prototype, 'isEmpty', {configurable: true, get: function () {
    return this.isEmptyImpl_0;
  }});
  Object.defineProperty(ArrayChannel.prototype, 'isClosedForReceive', {configurable: true, get: function () {
    return Kotlin.callGetter(this, AbstractChannel.prototype, 'isClosedForReceive');
  }});
  ArrayChannel.prototype.offerInternal_11rb$ = function (element) {
    var receive = {v: null};
    action$break: do {
      var tmp$, tmp$_0, tmp$_1;
      var size = this.size_0.kotlinx$atomicfu$value;
      if ((tmp$ = this.closedForSend_0) != null) {
        return tmp$;
      }
      if ((tmp$_0 = this.updateBufferSize_0(size)) != null) {
        return tmp$_0;
      }
      if (size === 0) {
        loop: while (true) {
          tmp$_1 = this.takeFirstReceiveOrPeekClosed();
          if (tmp$_1 == null) {
            break loop;
          }
          receive.v = tmp$_1;
          if (Kotlin.isType(receive.v, Closed)) {
            this.size_0.kotlinx$atomicfu$value = size;
            return ensureNotNull(receive.v);
          }
          var token = ensureNotNull(receive.v).tryResumeReceive_j43gjz$(element, null);
          if (token != null) {
            this.size_0.kotlinx$atomicfu$value = size;
            break action$break;
          }
        }
      }
      this.enqueueElement_0(size, element);
      return OFFER_SUCCESS;
    }
     while (false);
    ensureNotNull(receive.v).completeResumeReceive_11rb$(element);
    return ensureNotNull(receive.v).offerResult;
  };
  ArrayChannel.prototype.offerSelectInternal_ys5ufj$ = function (element, select) {
    var receive = {v: null};
    action$break: do {
      var tmp$, tmp$_0;
      var size = this.size_0.kotlinx$atomicfu$value;
      if ((tmp$ = this.closedForSend_0) != null) {
        return tmp$;
      }
      if ((tmp$_0 = this.updateBufferSize_0(size)) != null) {
        return tmp$_0;
      }
      if (size === 0) {
        loop: while (true) {
          var offerOp = this.describeTryOffer_0(element);
          var failure = select.performAtomicTrySelect_6q0pxr$(offerOp);
          if (failure == null) {
            this.size_0.kotlinx$atomicfu$value = size;
            receive.v = offerOp.result;
            break action$break;
          } else if (failure === OFFER_FAILED)
            break loop;
          else if (failure !== RETRY_ATOMIC)
            if (failure === ALREADY_SELECTED || Kotlin.isType(failure, Closed)) {
              this.size_0.kotlinx$atomicfu$value = size;
              return failure;
            } else {
              throw IllegalStateException_init(('performAtomicTrySelect(describeTryOffer) returned ' + toString(failure)).toString());
            }
        }
      }
      if (!select.trySelect()) {
        this.size_0.kotlinx$atomicfu$value = size;
        return ALREADY_SELECTED;
      }
      this.enqueueElement_0(size, element);
      return OFFER_SUCCESS;
    }
     while (false);
    ensureNotNull(receive.v).completeResumeReceive_11rb$(element);
    return ensureNotNull(receive.v).offerResult;
  };
  ArrayChannel.prototype.enqueueSend_vs6846$ = function (send) {
    return AbstractChannel.prototype.enqueueSend_vs6846$.call(this, send);
  };
  ArrayChannel.prototype.updateBufferSize_0 = function (currentSize) {
    var tmp$;
    if (currentSize < this.capacity_0) {
      this.size_0.kotlinx$atomicfu$value = currentSize + 1 | 0;
      return null;
    }
    switch (this.onBufferOverflow_0.name) {
      case 'SUSPEND':
        tmp$ = OFFER_FAILED;
        break;
      case 'DROP_LATEST':
        tmp$ = OFFER_SUCCESS;
        break;
      case 'DROP_OLDEST':
        tmp$ = null;
        break;
      default:
        tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  ArrayChannel.prototype.enqueueElement_0 = function (currentSize, element) {
    if (currentSize < this.capacity_0) {
      this.ensureCapacity_0(currentSize);
      this.buffer_0[(this.head_0 + currentSize | 0) % this.buffer_0.length] = element;
    } else {
      this.buffer_0[this.head_0 % this.buffer_0.length] = null;
      this.buffer_0[(this.head_0 + currentSize | 0) % this.buffer_0.length] = element;
      this.head_0 = (this.head_0 + 1 | 0) % this.buffer_0.length;
    }
  };
  ArrayChannel.prototype.ensureCapacity_0 = function (currentSize) {
    if (currentSize >= this.buffer_0.length) {
      var a = this.buffer_0.length * 2 | 0;
      var b = this.capacity_0;
      var newSize = JsMath.min(a, b);
      var newBuffer = Kotlin.newArray(newSize, null);
      for (var i = 0; i < currentSize; i++) {
        newBuffer[i] = this.buffer_0[(this.head_0 + i | 0) % this.buffer_0.length];
      }
      fill(newBuffer, EMPTY, currentSize, newSize);
      this.buffer_0 = newBuffer;
      this.head_0 = 0;
    }
  };
  ArrayChannel.prototype.pollInternal = function () {
    var send = {v: null};
    var resumed = {v: false};
    var result = {v: null};
    var tmp$, tmp$_0;
    var size = this.size_0.kotlinx$atomicfu$value;
    if (size === 0)
      return (tmp$ = this.closedForSend_0) != null ? tmp$ : POLL_FAILED;
    result.v = this.buffer_0[this.head_0];
    this.buffer_0[this.head_0] = null;
    this.size_0.kotlinx$atomicfu$value = size - 1 | 0;
    var replacement = POLL_FAILED;
    if (size === this.capacity_0) {
      loop: while (true) {
        tmp$_0 = this.takeFirstSendOrPeekClosed_0();
        if (tmp$_0 == null) {
          break;
        }
        send.v = tmp$_0;
        var token = ensureNotNull(send.v).tryResumeSend_uc1cc4$(null);
        if (token != null) {
          resumed.v = true;
          replacement = ensureNotNull(send.v).pollResult;
          break loop;
        }
        ensureNotNull(send.v).undeliveredElement();
      }
    }
    if (replacement !== POLL_FAILED && !Kotlin.isType(replacement, Closed)) {
      this.size_0.kotlinx$atomicfu$value = size;
      this.buffer_0[(this.head_0 + size | 0) % this.buffer_0.length] = replacement;
    }
    this.head_0 = (this.head_0 + 1 | 0) % this.buffer_0.length;
    if (resumed.v)
      ensureNotNull(send.v).completeResumeSend();
    return result.v;
  };
  ArrayChannel.prototype.pollSelectInternal_y5yyj0$ = function (select) {
    var send = {v: null};
    var success = {v: false};
    var result = {v: null};
    var tmp$;
    var size = this.size_0.kotlinx$atomicfu$value;
    if (size === 0)
      return (tmp$ = this.closedForSend_0) != null ? tmp$ : POLL_FAILED;
    result.v = this.buffer_0[this.head_0];
    this.buffer_0[this.head_0] = null;
    this.size_0.kotlinx$atomicfu$value = size - 1 | 0;
    var replacement = POLL_FAILED;
    if (size === this.capacity_0) {
      loop: while (true) {
        var pollOp = this.describeTryPoll_0();
        var failure = select.performAtomicTrySelect_6q0pxr$(pollOp);
        if (failure == null) {
          send.v = pollOp.result;
          success.v = true;
          replacement = ensureNotNull(send.v).pollResult;
          break loop;
        } else if (failure === POLL_FAILED)
          break loop;
        else if (failure !== RETRY_ATOMIC)
          if (failure === ALREADY_SELECTED) {
            this.size_0.kotlinx$atomicfu$value = size;
            this.buffer_0[this.head_0] = result.v;
            return failure;
          } else if (Kotlin.isType(failure, Closed)) {
            send.v = failure;
            success.v = true;
            replacement = failure;
            break loop;
          } else {
            throw IllegalStateException_init(('performAtomicTrySelect(describeTryOffer) returned ' + toString(failure)).toString());
          }
      }
    }
    if (replacement !== POLL_FAILED && !Kotlin.isType(replacement, Closed)) {
      this.size_0.kotlinx$atomicfu$value = size;
      this.buffer_0[(this.head_0 + size | 0) % this.buffer_0.length] = replacement;
    } else {
      if (!select.trySelect()) {
        this.size_0.kotlinx$atomicfu$value = size;
        this.buffer_0[this.head_0] = result.v;
        return ALREADY_SELECTED;
      }
    }
    this.head_0 = (this.head_0 + 1 | 0) % this.buffer_0.length;
    if (success.v)
      ensureNotNull(send.v).completeResumeSend();
    return result.v;
  };
  ArrayChannel.prototype.enqueueReceiveInternal_i292ax$ = function (receive) {
    return AbstractChannel.prototype.enqueueReceiveInternal_i292ax$.call(this, receive);
  };
  ArrayChannel.prototype.onCancelIdempotent_6taknv$ = function (wasClosed) {
    var tmp$;
    var onUndeliveredElement = this.onUndeliveredElement_0;
    var undeliveredElementException = {v: null};
    var times = this.size_0.kotlinx$atomicfu$value;
    for (var index = 0; index < times; index++) {
      var tmp$_0;
      var value = this.buffer_0[this.head_0];
      if (onUndeliveredElement != null && value !== EMPTY) {
        undeliveredElementException.v = callUndeliveredElementCatchingException(onUndeliveredElement, (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), undeliveredElementException.v);
      }
      this.buffer_0[this.head_0] = EMPTY;
      this.head_0 = (this.head_0 + 1 | 0) % this.buffer_0.length;
    }
    this.size_0.kotlinx$atomicfu$value = 0;
    AbstractChannel.prototype.onCancelIdempotent_6taknv$.call(this, wasClosed);
    if ((tmp$ = undeliveredElementException.v) != null) {
      throw tmp$;
    }
  };
  Object.defineProperty(ArrayChannel.prototype, 'bufferDebugString', {configurable: true, get: function () {
    return '(buffer:capacity=' + this.capacity_0 + ',size=' + this.size_0.kotlinx$atomicfu$value + ')';
  }});
  ArrayChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayChannel', interfaces: [AbstractChannel]};
  function BroadcastCoroutine(parentContext, _channel, active) {
    AbstractCoroutine.call(this, parentContext, false, active);
    this._channel_0 = _channel;
    this.initParentJob_5dx9e$(parentContext.get_j3r2sn$(Job$Key_getInstance()));
  }
  function BroadcastChannel() {
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BufferOverflow_initFields() {
    BufferOverflow_initFields = function () {
    };
    BufferOverflow$SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow$DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow$DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  var BufferOverflow$SUSPEND_instance;
  function BufferOverflow$SUSPEND_getInstance() {
    BufferOverflow_initFields();
    return BufferOverflow$SUSPEND_instance;
  }
  var BufferOverflow$DROP_OLDEST_instance;
  function BufferOverflow$DROP_OLDEST_getInstance() {
    BufferOverflow_initFields();
    return BufferOverflow$DROP_OLDEST_instance;
  }
  var BufferOverflow$DROP_LATEST_instance;
  function BufferOverflow$DROP_LATEST_getInstance() {
    BufferOverflow_initFields();
    return BufferOverflow$DROP_LATEST_instance;
  }
  BufferOverflow.$metadata$ = {kind: Kind_CLASS, simpleName: 'BufferOverflow', interfaces: [Enum]};
  function BufferOverflow$values() {
    return [BufferOverflow$SUSPEND_getInstance(), BufferOverflow$DROP_OLDEST_getInstance(), BufferOverflow$DROP_LATEST_getInstance()];
  }
  BufferOverflow.values = BufferOverflow$values;
  function BufferOverflow$valueOf(name) {
    switch (name) {
      case 'SUSPEND':
        return BufferOverflow$SUSPEND_getInstance();
      case 'DROP_OLDEST':
        return BufferOverflow$DROP_OLDEST_getInstance();
      case 'DROP_LATEST':
        return BufferOverflow$DROP_LATEST_getInstance();
      default:
        throwISE('No enum constant kotlinx.coroutines.channels.BufferOverflow.' + name);
    }
  }
  BufferOverflow.valueOf_61zpoe$ = BufferOverflow$valueOf;
  function SendChannel() {
  }
  SendChannel.prototype.close_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.close_dbl4no$$default(cause);
  };
  SendChannel.prototype.offer_11rb$ = function (element) {
    var tmp$;
    var result = this.trySend_11rb$(element);
    if (result.isSuccess)
      return true;
    tmp$ = result.exceptionOrNull();
    if (tmp$ == null) {
      return false;
    }
    throw recoverStackTrace_0(tmp$);
  };
  SendChannel.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SendChannel', interfaces: []};
  function ReceiveChannel() {
  }
  ReceiveChannel.prototype.cancel_x5z25k$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    callback$default ? callback$default(cause) : this.cancel_x5z25k$$default(cause);
  };
  ReceiveChannel.prototype.cancel = function () {
    this.cancel_x5z25k$(null);
  };
  ReceiveChannel.prototype.cancel_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.cancel_dbl4no$$default(cause);
  };
  ReceiveChannel.prototype.poll = function () {
    var tmp$;
    var result = this.tryReceive();
    if (result.isSuccess)
      return result.getOrThrow();
    tmp$ = result.exceptionOrNull();
    if (tmp$ == null) {
      return null;
    }
    throw recoverStackTrace_0(tmp$);
  };
  function Coroutine$receiveOrNull($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$receiveOrNull.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$receiveOrNull.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receiveOrNull.prototype.constructor = Coroutine$receiveOrNull;
  Coroutine$receiveOrNull.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.receiveCatching(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.getOrNull();
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ReceiveChannel.prototype.receiveOrNull = function (continuation_0, suspended) {
    var instance = new Coroutine$receiveOrNull(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral(this$ReceiveChannel) {
    this.this$ReceiveChannel = this$ReceiveChannel;
  }
  function Coroutine$ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral$registerSelectClause1$lambda(closure$block_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
    this.local$it = it_0;
  }
  Coroutine$ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral$registerSelectClause1$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral$registerSelectClause1$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral$registerSelectClause1$lambda.prototype.constructor = Coroutine$ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral$registerSelectClause1$lambda;
  Coroutine$ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral$registerSelectClause1$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$it.exceptionOrNull()) != null) {
              throw tmp$;
            }

            this.state_0 = 2;
            this.result_0 = this.local$closure$block(this.local$it.getOrNull(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral$registerSelectClause1$lambda(closure$block_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral$registerSelectClause1$lambda(closure$block_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral.prototype.registerSelectClause1_o3xas4$ = function (select, block) {
    this.this$ReceiveChannel.onReceiveCatching.registerSelectClause1_o3xas4$(select, ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral$registerSelectClause1$lambda(block));
  };
  ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SelectClause1]};
  Object.defineProperty(ReceiveChannel.prototype, 'onReceiveOrNull', {configurable: true, get: function () {
    return new ReceiveChannel$get_ReceiveChannel$onReceiveOrNull$ObjectLiteral(this);
  }});
  ReceiveChannel.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ReceiveChannel', interfaces: []};
  function ChannelResult(holder) {
    ChannelResult$Companion_getInstance();
    this.holder = holder;
  }
  Object.defineProperty(ChannelResult.prototype, 'isSuccess', {configurable: true, get: function () {
    return !Kotlin.isType(this.holder, ChannelResult$Failed);
  }});
  Object.defineProperty(ChannelResult.prototype, 'isFailure', {configurable: true, get: function () {
    return Kotlin.isType(this.holder, ChannelResult$Failed);
  }});
  Object.defineProperty(ChannelResult.prototype, 'isClosed', {configurable: true, get: function () {
    return Kotlin.isType(this.holder, ChannelResult$Closed);
  }});
  ChannelResult.prototype.getOrNull = function () {
    var tmp$;
    return !Kotlin.isType(this.holder, ChannelResult$Failed) ? (tmp$ = this.holder) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE() : null;
  };
  ChannelResult.prototype.getOrThrow = function () {
    var tmp$;
    if (!Kotlin.isType(this.holder, ChannelResult$Failed))
      return (tmp$ = this.holder) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    if (Kotlin.isType(this.holder, ChannelResult$Closed) && this.holder.cause != null)
      throw this.holder.cause;
    throw IllegalStateException_init(("Trying to call 'getOrThrow' on a failed channel result: " + toString(this.holder)).toString());
  };
  ChannelResult.prototype.exceptionOrNull = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.holder, ChannelResult$Closed) ? tmp$ : null) != null ? tmp$_0.cause : null;
  };
  function ChannelResult$Failed() {
  }
  ChannelResult$Failed.prototype.toString = function () {
    return 'Failed';
  };
  ChannelResult$Failed.$metadata$ = {kind: Kind_CLASS, simpleName: 'Failed', interfaces: []};
  function ChannelResult$Closed(cause) {
    ChannelResult$Failed.call(this);
    this.cause = cause;
  }
  ChannelResult$Closed.prototype.equals = function (other) {
    return Kotlin.isType(other, ChannelResult$Closed) && equals(this.cause, other.cause);
  };
  ChannelResult$Closed.prototype.hashCode = function () {
    var $receiver = this.cause;
    var tmp$;
    return (tmp$ = $receiver != null ? hashCode($receiver) : null) != null ? tmp$ : 0;
  };
  ChannelResult$Closed.prototype.toString = function () {
    return 'Closed(' + toString(this.cause) + ')';
  };
  ChannelResult$Closed.$metadata$ = {kind: Kind_CLASS, simpleName: 'Closed', interfaces: [ChannelResult$Failed]};
  function ChannelResult$Companion() {
    ChannelResult$Companion_instance = this;
    this.failed_0 = new ChannelResult$Failed();
  }
  ChannelResult$Companion.prototype.success_mh5how$ = function (value) {
    return new ChannelResult(value);
  };
  ChannelResult$Companion.prototype.failure_287e2$ = function () {
    return new ChannelResult(this.failed_0);
  };
  ChannelResult$Companion.prototype.closed_xo0v4m$ = function (cause) {
    return new ChannelResult(new ChannelResult$Closed(cause));
  };
  ChannelResult$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ChannelResult$Companion_instance = null;
  function ChannelResult$Companion_getInstance() {
    if (ChannelResult$Companion_instance === null) {
      new ChannelResult$Companion();
    }
    return ChannelResult$Companion_instance;
  }
  ChannelResult.prototype.toString = function () {
    if (Kotlin.isType(this.holder, ChannelResult$Closed))
      return this.holder.toString();
    else
      return 'Value(' + toString(this.holder) + ')';
  };
  ChannelResult.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChannelResult', interfaces: []};
  ChannelResult.prototype.unbox = function () {
    return this.holder;
  };
  ChannelResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.holder) | 0;
    return result;
  };
  ChannelResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.holder, other.holder))));
  };
  function ChannelIterator() {
  }
  function Coroutine$next0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$next0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$next0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$next0.prototype.constructor = Coroutine$next0;
  Coroutine$next0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.result_0)
              throw new ClosedReceiveChannelException(DEFAULT_CLOSE_MESSAGE);
            return this.$this.next();
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ChannelIterator.prototype.next0 = function (continuation_0, suspended) {
    var instance = new Coroutine$next0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ChannelIterator.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ChannelIterator', interfaces: []};
  function Channel() {
    Channel$Factory_getInstance();
  }
  function Channel$Factory() {
    Channel$Factory_instance = this;
    this.UNLIMITED = 2147483647;
    this.RENDEZVOUS = 0;
    this.CONFLATED = -1;
    this.BUFFERED = -2;
    this.OPTIONAL_CHANNEL_8be2vx$ = -3;
    this.DEFAULT_BUFFER_PROPERTY_NAME = 'kotlinx.coroutines.channels.defaultBuffer';
    this.CHANNEL_DEFAULT_CAPACITY_8be2vx$ = systemProp_0(this.DEFAULT_BUFFER_PROPERTY_NAME, 64, 1, 2147483646);
  }
  Channel$Factory.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Factory', interfaces: []};
  var Channel$Factory_instance = null;
  function Channel$Factory_getInstance() {
    if (Channel$Factory_instance === null) {
      new Channel$Factory();
    }
    return Channel$Factory_instance;
  }
  Channel.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Channel', interfaces: [ReceiveChannel, SendChannel]};
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    if (capacity === void 0)
      capacity = 0;
    if (onBufferOverflow === void 0)
      onBufferOverflow = BufferOverflow$SUSPEND_getInstance();
    if (onUndeliveredElement === void 0)
      onUndeliveredElement = null;
    switch (capacity) {
      case 0:
        return onBufferOverflow === BufferOverflow$SUSPEND_getInstance() ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
      case -1:
        if (!(onBufferOverflow === BufferOverflow$SUSPEND_getInstance())) {
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init(message.toString());
        }

        return new ConflatedChannel(onUndeliveredElement);
      case 2147483647:
        return new LinkedListChannel(onUndeliveredElement);
      case -2:
        return new ArrayChannel(onBufferOverflow === BufferOverflow$SUSPEND_getInstance() ? Channel$Factory_getInstance().CHANNEL_DEFAULT_CAPACITY_8be2vx$ : 1, onBufferOverflow, onUndeliveredElement);
      default:
        return capacity === 1 && onBufferOverflow === BufferOverflow$DROP_OLDEST_getInstance() ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
    }
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init(message, this);
    this.name = 'ClosedSendChannelException';
  }
  ClosedSendChannelException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ClosedSendChannelException', interfaces: [IllegalStateException]};
  function ClosedReceiveChannelException(message) {
    NoSuchElementException.call(this, message);
    this.name = 'ClosedReceiveChannelException';
  }
  ClosedReceiveChannelException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ClosedReceiveChannelException', interfaces: [NoSuchElementException]};
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this._channel_0 = _channel;
  }
  var DEFAULT_CLOSE_MESSAGE;
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.consumeEach_fsi0yh$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    var cancelConsumed = _.kotlinx.coroutines.channels.cancelConsumed_v57n85$;
    return function ($receiver, action, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          var e = tmp$.next();
          action(e);
        }
      } catch (e_2) {
        if (Kotlin.isType(e_2, Throwable)) {
          cause = e_2;
          throw e_2;
        } else
          throw e_2;
      }
      finally {
        cancelConsumed($receiver, cause);
      }
      return Unit;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.consumeEach_ur1qrk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    return function ($receiver, action, continuation) {
      var channel = $receiver.openSubscription();
      try {
        var tmp$;
        tmp$ = channel.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          var element_0 = tmp$.next();
          action(element_0);
        }
      }finally {
        channel.cancel_x5z25k$();
      }
      return Unit;
    };
  }));
  function cancelConsumed($receiver, cause) {
    var tmp$;
    if (cause != null) {
      var tmp$_0, tmp$_1;
      tmp$ = (tmp$_1 = Kotlin.isType(tmp$_0 = cause, CancellationException) ? tmp$_0 : null) != null ? tmp$_1 : CancellationException_init_0('Channel was consumed, consumer had failed', cause);
    } else
      tmp$ = null;
    $receiver.cancel_x5z25k$(tmp$);
  }
  function ConflatedBroadcastChannel() {
    ConflatedBroadcastChannel$Companion_getInstance();
    this._state_0 = atomic(ConflatedBroadcastChannel$Companion_getInstance().INITIAL_STATE_0);
    this._updating_0 = atomic_0(0);
    this.onCloseHandler_0 = atomic(null);
  }
  var ConflatedBroadcastChannel$Companion_instance = null;
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.lock_0 = new NoOpLock();
    this.value_0 = EMPTY;
  }
  Object.defineProperty(ConflatedChannel.prototype, 'isBufferAlwaysEmpty', {configurable: true, get: function () {
    return false;
  }});
  Object.defineProperty(ConflatedChannel.prototype, 'isBufferEmpty', {configurable: true, get: function () {
    return this.value_0 === EMPTY;
  }});
  Object.defineProperty(ConflatedChannel.prototype, 'isBufferAlwaysFull', {configurable: true, get: function () {
    return false;
  }});
  Object.defineProperty(ConflatedChannel.prototype, 'isBufferFull', {configurable: true, get: function () {
    return false;
  }});
  Object.defineProperty(ConflatedChannel.prototype, 'isEmpty', {configurable: true, get: function () {
    return this.isEmptyImpl_0;
  }});
  ConflatedChannel.prototype.offerInternal_11rb$ = function (element) {
    var receive = {v: null};
    action$break: do {
      var tmp$, tmp$_0, tmp$_1;
      if ((tmp$ = this.closedForSend_0) != null) {
        return tmp$;
      }
      if (this.value_0 === EMPTY) {
        loop: while (true) {
          tmp$_0 = this.takeFirstReceiveOrPeekClosed();
          if (tmp$_0 == null) {
            break loop;
          }
          receive.v = tmp$_0;
          if (Kotlin.isType(receive.v, Closed)) {
            return ensureNotNull(receive.v);
          }
          var token = ensureNotNull(receive.v).tryResumeReceive_j43gjz$(element, null);
          if (token != null) {
            break action$break;
          }
        }
      }
      if ((tmp$_1 = this.updateValueLocked_0(element)) != null) {
        throw tmp$_1;
      }
      return OFFER_SUCCESS;
    }
     while (false);
    ensureNotNull(receive.v).completeResumeReceive_11rb$(element);
    return ensureNotNull(receive.v).offerResult;
  };
  ConflatedChannel.prototype.offerSelectInternal_ys5ufj$ = function (element, select) {
    var receive = {v: null};
    action$break: do {
      var tmp$, tmp$_0;
      if ((tmp$ = this.closedForSend_0) != null) {
        return tmp$;
      }
      if (this.value_0 === EMPTY) {
        loop: while (true) {
          var offerOp = this.describeTryOffer_0(element);
          var failure = select.performAtomicTrySelect_6q0pxr$(offerOp);
          if (failure == null) {
            receive.v = offerOp.result;
            break action$break;
          } else if (failure === OFFER_FAILED)
            break loop;
          else if (failure !== RETRY_ATOMIC)
            if (failure === ALREADY_SELECTED || Kotlin.isType(failure, Closed))
              return failure;
            else {
              throw IllegalStateException_init(('performAtomicTrySelect(describeTryOffer) returned ' + toString(failure)).toString());
            }
        }
      }
      if (!select.trySelect()) {
        return ALREADY_SELECTED;
      }
      if ((tmp$_0 = this.updateValueLocked_0(element)) != null) {
        throw tmp$_0;
      }
      return OFFER_SUCCESS;
    }
     while (false);
    ensureNotNull(receive.v).completeResumeReceive_11rb$(element);
    return ensureNotNull(receive.v).offerResult;
  };
  ConflatedChannel.prototype.pollInternal = function () {
    var result = {v: null};
    var tmp$;
    if (this.value_0 === EMPTY)
      return (tmp$ = this.closedForSend_0) != null ? tmp$ : POLL_FAILED;
    result.v = this.value_0;
    this.value_0 = EMPTY;
    return result.v;
  };
  ConflatedChannel.prototype.pollSelectInternal_y5yyj0$ = function (select) {
    var result = {v: null};
    var tmp$;
    if (this.value_0 === EMPTY)
      return (tmp$ = this.closedForSend_0) != null ? tmp$ : POLL_FAILED;
    if (!select.trySelect())
      return ALREADY_SELECTED;
    result.v = this.value_0;
    this.value_0 = EMPTY;
    return result.v;
  };
  ConflatedChannel.prototype.onCancelIdempotent_6taknv$ = function (wasClosed) {
    var tmp$;
    var undeliveredElementException = {v: null};
    undeliveredElementException.v = this.updateValueLocked_0(EMPTY);
    AbstractChannel.prototype.onCancelIdempotent_6taknv$.call(this, wasClosed);
    if ((tmp$ = undeliveredElementException.v) != null) {
      throw tmp$;
    }
  };
  ConflatedChannel.prototype.updateValueLocked_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var old = this.value_0;
    if (old === EMPTY)
      tmp$_2 = null;
    else {
      tmp$_1 = this.onUndeliveredElement_0;
      tmp$_0 = (tmp$ = old) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
      tmp$_2 = tmp$_1 != null ? callUndeliveredElementCatchingException(tmp$_1, tmp$_0) : null;
    }
    var undeliveredElementException = tmp$_2;
    this.value_0 = element;
    return undeliveredElementException;
  };
  ConflatedChannel.prototype.enqueueReceiveInternal_i292ax$ = function (receive) {
    return AbstractChannel.prototype.enqueueReceiveInternal_i292ax$.call(this, receive);
  };
  Object.defineProperty(ConflatedChannel.prototype, 'bufferDebugString', {configurable: true, get: function () {
    return '(value=' + toString(this.value_0) + ')';
  }});
  ConflatedChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConflatedChannel', interfaces: [AbstractChannel]};
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  Object.defineProperty(LinkedListChannel.prototype, 'isBufferAlwaysEmpty', {configurable: true, get: function () {
    return true;
  }});
  Object.defineProperty(LinkedListChannel.prototype, 'isBufferEmpty', {configurable: true, get: function () {
    return true;
  }});
  Object.defineProperty(LinkedListChannel.prototype, 'isBufferAlwaysFull', {configurable: true, get: function () {
    return false;
  }});
  Object.defineProperty(LinkedListChannel.prototype, 'isBufferFull', {configurable: true, get: function () {
    return false;
  }});
  LinkedListChannel.prototype.offerInternal_11rb$ = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.offerInternal_11rb$.call(this, element);
      if (result === OFFER_SUCCESS)
        return OFFER_SUCCESS;
      else if (result === OFFER_FAILED) {
        var sendResult = this.sendBuffered_0(element);
        if (sendResult == null)
          return OFFER_SUCCESS;
        else if (Kotlin.isType(sendResult, Closed))
          return sendResult;
      } else if (Kotlin.isType(result, Closed))
        return result;
      else {
        throw IllegalStateException_init(('Invalid offerInternal result ' + result.toString()).toString());
      }
    }
  };
  LinkedListChannel.prototype.offerSelectInternal_ys5ufj$ = function (element, select) {
    var tmp$;
    while (true) {
      var result = this.hasReceiveOrClosed_0 ? AbstractChannel.prototype.offerSelectInternal_ys5ufj$.call(this, element, select) : (tmp$ = select.performAtomicTrySelect_6q0pxr$(this.describeSendBuffered_0(element))) != null ? tmp$ : OFFER_SUCCESS;
      if (result === ALREADY_SELECTED)
        return ALREADY_SELECTED;
      else if (result === OFFER_SUCCESS)
        return OFFER_SUCCESS;
      else if (result !== OFFER_FAILED)
        if (result !== RETRY_ATOMIC)
          if (Kotlin.isType(result, Closed))
            return result;
          else {
            throw IllegalStateException_init(('Invalid result ' + result.toString()).toString());
          }
    }
  };
  LinkedListChannel.prototype.onCancelIdempotentList_kji3ae$ = function (list, closed) {
    var tmp$;
    var undeliveredElementException = {v: null};
    var tmp$_0, tmp$_1, tmp$_2;
    tmp$_0 = list.holder_0;
    if (tmp$_0 != null)
      if (!Kotlin.isType(tmp$_0, ArrayList)) {
        var it = (tmp$_1 = list.holder_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6;
        if (Kotlin.isType(it, AbstractSendChannel$SendBuffered)) {
          tmp$_6 = this.onUndeliveredElement_0;
          tmp$_4 = (tmp$_3 = it.element) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
          tmp$_5 = undeliveredElementException.v;
          undeliveredElementException.v = tmp$_6 != null ? callUndeliveredElementCatchingException(tmp$_6, tmp$_4, tmp$_5) : null;
        } else
          it.resumeSendClosed_1zqbm$(closed);
      } else {
        var list_0 = Kotlin.isType(tmp$_2 = list.holder_0, ArrayList) ? tmp$_2 : throwCCE();
        for (var i = list_0.size - 1 | 0; i >= 0; i--) {
          var it_0 = list_0.get_za3lpa$(i);
          var tmp$_7, tmp$_8, tmp$_9, tmp$_10;
          if (Kotlin.isType(it_0, AbstractSendChannel$SendBuffered)) {
            tmp$_10 = this.onUndeliveredElement_0;
            tmp$_8 = (tmp$_7 = it_0.element) == null || Kotlin.isType(tmp$_7, Any) ? tmp$_7 : throwCCE();
            tmp$_9 = undeliveredElementException.v;
            undeliveredElementException.v = tmp$_10 != null ? callUndeliveredElementCatchingException(tmp$_10, tmp$_8, tmp$_9) : null;
          } else
            it_0.resumeSendClosed_1zqbm$(closed);
        }
      }
    if ((tmp$ = undeliveredElementException.v) != null) {
      throw tmp$;
    }
  };
  LinkedListChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedListChannel', interfaces: [AbstractChannel]};
  function ProducerScope() {
  }
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  Object.defineProperty(RendezvousChannel.prototype, 'isBufferAlwaysEmpty', {configurable: true, get: function () {
    return true;
  }});
  Object.defineProperty(RendezvousChannel.prototype, 'isBufferEmpty', {configurable: true, get: function () {
    return true;
  }});
  Object.defineProperty(RendezvousChannel.prototype, 'isBufferAlwaysFull', {configurable: true, get: function () {
    return true;
  }});
  Object.defineProperty(RendezvousChannel.prototype, 'isBufferFull', {configurable: true, get: function () {
    return true;
  }});
  RendezvousChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'RendezvousChannel', interfaces: [AbstractChannel]};
  function unsafeFlow$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  function Coroutine$collect_42ocv1$($this, collector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$collector = collector_0;
  }
  Coroutine$collect_42ocv1$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$collect_42ocv1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collect_42ocv1$.prototype.constructor = Coroutine$collect_42ocv1$;
  Coroutine$collect_42ocv1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$block(this.local$collector, this);
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
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  unsafeFlow$ObjectLiteral.prototype.collect_42ocv1$ = function (collector_0, continuation_0, suspended) {
    var instance = new Coroutine$collect_42ocv1$(this, collector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  unsafeFlow$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Flow]};
  function Coroutine$asFlow$lambda_1(this$asFlow_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$asFlow = this$asFlow_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$asFlow$lambda_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$asFlow$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$asFlow$lambda_1.prototype.constructor = Coroutine$asFlow$lambda_1;
  Coroutine$asFlow$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$asFlow.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.emit_11rb$(element, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function asFlow$lambda_1(this$asFlow_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$asFlow$lambda_1(this$asFlow_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function asFlow_1($receiver) {
    return new unsafeFlow$ObjectLiteral(asFlow$lambda_1($receiver));
  }
  var EmptyFlow_instance = null;
  function Flow() {
  }
  Flow.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Flow', interfaces: []};
  function FlowCollector(f) {
    this.function$ = f;
  }
  FlowCollector.prototype.emit_11rb$ = function (value, continuation) {
    return this.function$(value, continuation);
  };
  FlowCollector.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'FlowCollector', interfaces: []};
  var NO_VALUE;
  var SharingCommand$START_instance;
  var SharingCommand$STOP_instance;
  var SharingCommand$STOP_AND_RESET_REPLAY_CACHE_instance;
  var SharingStarted$Companion_instance = null;
  var NONE;
  var PENDING;
  var EMPTY_RESUMES;
  function checkOwnership($receiver, owner) {
    if ($receiver.owner !== owner)
      throw $receiver;
  }
  var NopCollector_instance = null;
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var defaultKeySelector;
  var defaultAreEquivalent;
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.flow.collectWhile_rysrwq$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var AbortFlowException_init = _.kotlinx.coroutines.flow.internal.AbortFlowException;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = _.kotlinx.coroutines.flow.FlowCollector;
    var checkOwnership = _.kotlinx.coroutines.flow.internal.checkOwnership_ygf9h9$;
    function collectWhile$ObjectLiteral(closure$predicate) {
      this.closure$predicate = closure$predicate;
    }
    function Coroutine$emit_11rb$($this, value_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.$this = $this;
      this.local$value = value_0;
    }
    Coroutine$emit_11rb$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$emit_11rb$.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$emit_11rb$.prototype.constructor = Coroutine$emit_11rb$;
    Coroutine$emit_11rb$.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.$this.closure$predicate(this.local$value, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              if (!this.result_0) {
                throw new AbortFlowException_init(this.$this);
              }

              return;
            default:
              this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    collectWhile$ObjectLiteral.prototype.emit_11rb$ = function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$emit_11rb$(this, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
    collectWhile$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    return function ($receiver, predicate, continuation) {
      var collector = new collectWhile$ObjectLiteral(predicate);
      try {
        Kotlin.suspendCall($receiver.collect_42ocv1$(collector, Kotlin.coroutineReceiver()));
      } catch (e) {
        if (Kotlin.isType(e, AbortFlowException_init)) {
          checkOwnership(e, collector);
        } else
          throw e;
      }
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.flow.toList_qzmi91$', wrapFunction(function () {
    var Flow = _.kotlinx.coroutines.flow.Flow;
    var throwCCE = Kotlin.throwCCE;
    var toList = _.kotlinx.coroutines.flow.toList_7a0s5y$;
    return function ($receiver, continuation) {
      var tmp$_0;
      Kotlin.suspendCall(toList(Kotlin.isType(tmp$_0 = $receiver, Flow) ? tmp$_0 : throwCCE(), void 0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.flow.toSet_qzmi91$', wrapFunction(function () {
    var Flow = _.kotlinx.coroutines.flow.Flow;
    var throwCCE = Kotlin.throwCCE;
    var toSet = _.kotlinx.coroutines.flow.toSet_a3q90u$;
    return function ($receiver, continuation) {
      var tmp$_0;
      Kotlin.suspendCall(toSet(Kotlin.isType(tmp$_0 = $receiver, Flow) ? tmp$_0 : throwCCE(), void 0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.flow.count_qzmi91$', wrapFunction(function () {
    var Flow = _.kotlinx.coroutines.flow.Flow;
    var throwCCE = Kotlin.throwCCE;
    var count = _.kotlinx.coroutines.flow.count_x2ftfk$;
    return function ($receiver, continuation) {
      var tmp$_0;
      Kotlin.suspendCall(count(Kotlin.isType(tmp$_0 = $receiver, Flow) ? tmp$_0 : throwCCE(), Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  var DEFAULT_CONCURRENCY_PROPERTY_NAME;
  var DEFAULT_CONCURRENCY;
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.flow.collectIndexed_57beod$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = _.kotlinx.coroutines.flow.FlowCollector;
    var ArithmeticException_init = Kotlin.kotlin.ArithmeticException;
    function collectIndexed$ObjectLiteral(closure$action) {
      this.closure$action = closure$action;
      this.index_0 = 0;
    }
    collectIndexed$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
      var tmp$, tmp$_0;
      tmp$_0 = this.closure$action;
      var index = (tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$);
      if (index < 0) {
        throw new ArithmeticException_init('Index overflow has happened');
      }
      return tmp$_0(index, value, continuation);
    };
    collectIndexed$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    return function ($receiver, action, continuation) {
      Kotlin.suspendCall($receiver.collect_42ocv1$(new collectIndexed$ObjectLiteral(action), Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.flow.collect_706ovd$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var FlowCollector = _.kotlinx.coroutines.flow.FlowCollector;
    function collect$ObjectLiteral(closure$action) {
      this.closure$action = closure$action;
    }
    collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
      return this.closure$action(value, continuation);
    };
    collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
    return function ($receiver, action, continuation) {
      Kotlin.suspendCall($receiver.collect_42ocv1$(new collect$ObjectLiteral(action), Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function toList_1($receiver, destination, continuation) {
    if (destination === void 0)
      destination = ArrayList_init_0();
    return toCollection_0($receiver, destination, continuation);
  }
  function toSet_1($receiver, destination, continuation) {
    if (destination === void 0)
      destination = LinkedHashSet_init();
    return toCollection_0($receiver, destination, continuation);
  }
  function Coroutine$toCollection$lambda(closure$destination_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$destination = closure$destination_0;
    this.local$value = value_0;
  }
  Coroutine$toCollection$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$toCollection$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toCollection$lambda.prototype.constructor = Coroutine$toCollection$lambda;
  Coroutine$toCollection$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$destination.add_11rb$(this.local$value);
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toCollection$lambda(closure$destination_0) {
    return function (value_0, continuation_0, suspended) {
      var instance = new Coroutine$toCollection$lambda(closure$destination_0, value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$toCollection_0($receiver_0, destination_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$destination = destination_0;
  }
  Coroutine$toCollection_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$toCollection_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toCollection_0.prototype.constructor = Coroutine$toCollection_0;
  Coroutine$toCollection_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.collect_42ocv1$(new FlowCollector(toCollection$lambda(this.local$destination)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$destination;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toCollection_0($receiver_0, destination_0, continuation_0, suspended) {
    var instance = new Coroutine$toCollection_0($receiver_0, destination_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$count$lambda(closure$i_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$i = closure$i_0;
  }
  Coroutine$count$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$count$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$count$lambda.prototype.constructor = Coroutine$count$lambda;
  Coroutine$count$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$i.v = this.local$closure$i.v + 1 | 0, this.local$closure$i.v;
          case 1:
            throw this.exception_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function count$lambda(closure$i_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$count$lambda(closure$i_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$count_0($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$i = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$count_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$count_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$count_0.prototype.constructor = Coroutine$count_0;
  Coroutine$count_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$i = {v: 0};
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.collect_42ocv1$(new FlowCollector(count$lambda(this.local$i)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$i.v;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function count_1($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$count_0($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function collectWhile$ObjectLiteral_0(closure$predicate) {
    this.closure$predicate = closure$predicate;
  }
  function Coroutine$emit_11rb$_1($this, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$value = value_0;
  }
  Coroutine$emit_11rb$_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$emit_11rb$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$emit_11rb$_1.prototype.constructor = Coroutine$emit_11rb$_1;
  Coroutine$emit_11rb$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.closure$predicate(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.result_0) {
              throw new AbortFlowException(this.$this);
            }

            return;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  collectWhile$ObjectLiteral_0.prototype.emit_11rb$ = function (value_0, continuation_0, suspended) {
    var instance = new Coroutine$emit_11rb$_1(this, value_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  collectWhile$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.flow.fold_usjyvu$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var FlowCollector = _.kotlinx.coroutines.flow.FlowCollector;
    function Coroutine$fold$lambda(closure$operation_0, closure$accumulator_0, value_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$operation = closure$operation_0;
      this.local$closure$accumulator = closure$accumulator_0;
      this.local$value = value_0;
    }
    Coroutine$fold$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$fold$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$fold$lambda.prototype.constructor = Coroutine$fold$lambda;
    Coroutine$fold$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$operation(this.local$closure$accumulator.v, this.local$value, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.local$closure$accumulator.v = this.result_0, Unit;
            default:
              this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function fold$lambda(closure$operation_0, closure$accumulator_0) {
      return function (value_0, continuation_0, suspended) {
        var instance = new Coroutine$fold$lambda(closure$operation_0, closure$accumulator_0, value_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    return function ($receiver, initial, operation, continuation) {
      var accumulator = {v: initial};
      Kotlin.suspendCall($receiver.collect_42ocv1$(new FlowCollector(fold$lambda(operation, accumulator)), Kotlin.coroutineReceiver()));
      return accumulator.v;
    };
  }));
  function Coroutine$firstOrNull$lambda_0(closure$predicate_0, closure$result_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$predicate = closure$predicate_0;
    this.local$closure$result = closure$result_0;
    this.local$it = it_0;
  }
  Coroutine$firstOrNull$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$firstOrNull$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$firstOrNull$lambda_0.prototype.constructor = Coroutine$firstOrNull$lambda_0;
  Coroutine$firstOrNull$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$predicate(this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.result_0) {
              this.local$closure$result.v = this.local$it;
              return false;
            } else {
              return true;
            }

          case 3:
            return;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function firstOrNull$lambda_0(closure$predicate_0, closure$result_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$firstOrNull$lambda_0(closure$predicate_0, closure$result_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$firstOrNull_1($receiver_0, predicate_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$result = void 0;
    this.local$collector = void 0;
    this.local$$receiver = $receiver_0;
    this.local$predicate = predicate_0;
  }
  Coroutine$firstOrNull_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$firstOrNull_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$firstOrNull_1.prototype.constructor = Coroutine$firstOrNull_1;
  Coroutine$firstOrNull_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$result = {v: null};
            this.local$collector = new collectWhile$ObjectLiteral_0(firstOrNull$lambda_0(this.local$predicate, this.local$result));
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.collect_42ocv1$(this.local$collector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, AbortFlowException)) {
              checkOwnership(e_0, this.local$collector);
            } else
              throw e_0;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$result.v;
          case 4:
            throw this.exception_0;
          default:
            this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function firstOrNull_1($receiver_0, predicate_0, continuation_0, suspended) {
    var instance = new Coroutine$firstOrNull_1($receiver_0, predicate_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ArrayQueue() {
    this.elements_0 = Kotlin.newArray(16, null);
    this.head_0 = 0;
    this.tail_0 = 0;
  }
  Object.defineProperty(ArrayQueue.prototype, 'isEmpty', {configurable: true, get: function () {
    return this.head_0 === this.tail_0;
  }});
  ArrayQueue.prototype.addLast_trkh7z$ = function (element) {
    this.elements_0[this.tail_0] = element;
    this.tail_0 = this.tail_0 + 1 & this.elements_0.length - 1;
    if (this.tail_0 === this.head_0)
      this.ensureCapacity_0();
  };
  ArrayQueue.prototype.removeFirstOrNull = function () {
    var tmp$;
    if (this.head_0 === this.tail_0)
      return null;
    var element = this.elements_0[this.head_0];
    this.elements_0[this.head_0] = null;
    this.head_0 = this.head_0 + 1 & this.elements_0.length - 1;
    return Kotlin.isType(tmp$ = element, Any) ? tmp$ : throwCCE();
  };
  ArrayQueue.prototype.clear = function () {
    this.head_0 = 0;
    this.tail_0 = 0;
    this.elements_0 = Kotlin.newArray(this.elements_0.length, null);
  };
  ArrayQueue.prototype.ensureCapacity_0 = function () {
    var currentSize = this.elements_0.length;
    var newCapacity = currentSize << 1;
    var newElements = Kotlin.newArray(newCapacity, null);
    var $receiver = this.elements_0;
    arrayCopy($receiver, newElements, 0, this.head_0, $receiver.length);
    arrayCopy(this.elements_0, newElements, this.elements_0.length - this.head_0 | 0, 0, this.head_0);
    this.elements_0 = newElements;
    this.head_0 = 0;
    this.tail_0 = currentSize;
  };
  ArrayQueue.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayQueue', interfaces: []};
  function OpDescriptor() {
  }
  OpDescriptor.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  OpDescriptor.prototype.isEarlierThan_bfmzsr$ = function (that) {
    var tmp$, tmp$_0;
    tmp$ = this.atomicOp;
    if (tmp$ == null) {
      return false;
    }
    var thisOp = tmp$;
    tmp$_0 = that.atomicOp;
    if (tmp$_0 == null) {
      return false;
    }
    var thatOp = tmp$_0;
    return thisOp.opSequence.compareTo_11rb$(thatOp.opSequence) < 0;
  };
  OpDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'OpDescriptor', interfaces: []};
  var NO_DECISION;
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_c6dvpx$_0 = atomic(NO_DECISION);
  }
  Object.defineProperty(AtomicOp.prototype, 'consensus', {configurable: true, get: function () {
    return this._consensus_c6dvpx$_0.kotlinx$atomicfu$value;
  }});
  Object.defineProperty(AtomicOp.prototype, 'isDecided', {configurable: true, get: function () {
    return this._consensus_c6dvpx$_0.kotlinx$atomicfu$value !== NO_DECISION;
  }});
  Object.defineProperty(AtomicOp.prototype, 'opSequence', {configurable: true, get: function () {
    return L0;
  }});
  Object.defineProperty(AtomicOp.prototype, 'atomicOp', {configurable: true, get: function () {
    return this;
  }});
  AtomicOp.prototype.decide_s8jyv4$ = function (decision) {
    var current = this._consensus_c6dvpx$_0.kotlinx$atomicfu$value;
    if (current !== NO_DECISION)
      return current;
    if (this._consensus_c6dvpx$_0.atomicfu$compareAndSet(NO_DECISION, decision))
      return decision;
    return this._consensus_c6dvpx$_0.kotlinx$atomicfu$value;
  };
  AtomicOp.prototype.perform_s8jyv4$ = function (affected) {
    var tmp$, tmp$_0;
    var decision = this._consensus_c6dvpx$_0.kotlinx$atomicfu$value;
    if (decision === NO_DECISION) {
      decision = this.decide_s8jyv4$(this.prepare_11rb$((tmp$ = affected) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE()));
    }
    this.complete_19pj23$((tmp$_0 = affected) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), decision);
    return decision;
  };
  AtomicOp.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicOp', interfaces: [OpDescriptor]};
  function AtomicDesc() {
    this.atomicOp_ss7ttb$_0 = this.atomicOp_ss7ttb$_0;
  }
  Object.defineProperty(AtomicDesc.prototype, 'atomicOp', {configurable: true, get: function () {
    if (this.atomicOp_ss7ttb$_0 == null)
      return throwUPAE('atomicOp');
    return this.atomicOp_ss7ttb$_0;
  }, set: function (atomicOp) {
    this.atomicOp_ss7ttb$_0 = atomicOp;
  }});
  AtomicDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicDesc', interfaces: []};
  var RETRY_ATOMIC;
  var POINTERS_SHIFT;
  var CLOSED;
  var UNDEFINED;
  var REUSABLE_CLAIMED;
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.dispatcher = dispatcher;
    this.continuation = continuation;
    this._state_8be2vx$ = UNDEFINED;
    this.countOrElement_8be2vx$ = threadContextElements(this.context);
    this._reusableCancellableContinuation_0 = atomic(null);
  }
  Object.defineProperty(DispatchedContinuation.prototype, 'callerFrame', {configurable: true, get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.continuation, CoroutineStackFrame) ? tmp$ : null;
  }});
  DispatchedContinuation.prototype.getStackTraceElement = function () {
    return null;
  };
  Object.defineProperty(DispatchedContinuation.prototype, 'reusableCancellableContinuation_0', {configurable: true, get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this._reusableCancellableContinuation_0.kotlinx$atomicfu$value, CancellableContinuationImpl) ? tmp$ : null;
  }});
  DispatchedContinuation.prototype.isReusable = function () {
    return this._reusableCancellableContinuation_0.kotlinx$atomicfu$value != null;
  };
  DispatchedContinuation.prototype.awaitReusability = function () {
    var $receiver = this._reusableCancellableContinuation_0;
    while (true) {
      if ($receiver.kotlinx$atomicfu$value !== REUSABLE_CLAIMED)
        return;
    }
  };
  DispatchedContinuation.prototype.release = function () {
    var tmp$;
    this.awaitReusability();
    (tmp$ = this.reusableCancellableContinuation_0) != null ? (tmp$.detachChild_8be2vx$(), Unit) : null;
  };
  DispatchedContinuation.prototype.claimReusableCancellableContinuation = function () {
    var $receiver = this._reusableCancellableContinuation_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      var tmp$;
      if (state === null) {
        this._reusableCancellableContinuation_0.kotlinx$atomicfu$value = REUSABLE_CLAIMED;
        return null;
      } else if (Kotlin.isType(state, CancellableContinuationImpl)) {
        if (this._reusableCancellableContinuation_0.atomicfu$compareAndSet(state, REUSABLE_CLAIMED)) {
          return Kotlin.isType(tmp$ = state, CancellableContinuationImpl) ? tmp$ : throwCCE();
        }
      } else if (state !== REUSABLE_CLAIMED)
        if (!Kotlin.isType(state, Throwable)) {
          throw IllegalStateException_init(('Inconsistent state ' + toString(state)).toString());
        }
    }
  };
  DispatchedContinuation.prototype.tryReleaseClaimedContinuation_jp3215$ = function (continuation) {
    var $receiver = this._reusableCancellableContinuation_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      if (state === REUSABLE_CLAIMED) {
        if (this._reusableCancellableContinuation_0.atomicfu$compareAndSet(REUSABLE_CLAIMED, continuation))
          return null;
      } else if (Kotlin.isType(state, Throwable)) {
        if (!this._reusableCancellableContinuation_0.atomicfu$compareAndSet(state, null)) {
          var message = 'Failed requirement.';
          throw IllegalArgumentException_init(message.toString());
        }
        return state;
      } else {
        throw IllegalStateException_init(('Inconsistent state ' + toString(state)).toString());
      }
    }
  };
  DispatchedContinuation.prototype.postponeCancellation_tcv7n7$ = function (cause) {
    var $receiver = this._reusableCancellableContinuation_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      if (equals(state, REUSABLE_CLAIMED)) {
        if (this._reusableCancellableContinuation_0.atomicfu$compareAndSet(REUSABLE_CLAIMED, cause))
          return true;
      } else if (Kotlin.isType(state, Throwable))
        return true;
      else {
        if (this._reusableCancellableContinuation_0.atomicfu$compareAndSet(state, null))
          return false;
      }
    }
  };
  DispatchedContinuation.prototype.takeState = function () {
    var state = this._state_8be2vx$;
    this._state_8be2vx$ = UNDEFINED;
    return state;
  };
  Object.defineProperty(DispatchedContinuation.prototype, 'delegate', {configurable: true, get: function () {
    return this;
  }});
  DispatchedContinuation.prototype.resumeWith_tl1gpc$ = function (result) {
    var context = this.continuation.context;
    var state = toState(result);
    if (this.dispatcher.isDispatchNeeded_1fupul$(context)) {
      this._state_8be2vx$ = state;
      this.resumeMode = 0;
      this.dispatcher.dispatch_5bn72i$(context, this);
    } else {
      executeUnconfined$break: do {
        var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
        if (false && eventLoop.isUnconfinedQueueEmpty) {
          false;
          break executeUnconfined$break;
        }
        if (eventLoop.isUnconfinedLoopActive) {
          this._state_8be2vx$ = state;
          this.resumeMode = 0;
          eventLoop.dispatchUnconfined_4avnfa$(this);
        } else {
          eventLoop.incrementUseCount_6taknv$(true);
          try {
            this.context;
            this.continuation.resumeWith_tl1gpc$(result);
            while (eventLoop.processUnconfinedEvent()) {
            }
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              this.handleFatalException_pr7uss$(e, null);
            } else
              throw e;
          }
          finally {
            eventLoop.decrementUseCount_6taknv$(true);
          }
        }
      }
       while (false);
    }
  };
  DispatchedContinuation.prototype.resumeCancellableWith_rdpv6h$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith_rdpv6h$', wrapFunction(function () {
    var toState = _.kotlinx.coroutines.toState_fbj1ua$;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var Throwable = Error;
    var Job = _.kotlinx.coroutines.Job;
    var Result = Kotlin.kotlin.Result;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var DispatchedContinuation$resumeCancellableWith$lambda = wrapFunction(function () {
      var Job = _.kotlinx.coroutines.Job;
      var Result = Kotlin.kotlin.Result;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      return function (closure$state, this$DispatchedContinuation, closure$result) {
        return function () {
          var $this = this$DispatchedContinuation;
          var state = closure$state;
          var resumeCancelled_s8jyv4$result;
          resumeCancelled_s8jyv4$break: do {
            var job = $this.context.get_j3r2sn$(Job.Key);
            if (job != null && !job.isActive) {
              var cause = job.getCancellationException();
              $this.cancelCompletedResult_83a7kv$(state, cause);
              $this.resumeWith_tl1gpc$(new Result(createFailure(cause)));
              resumeCancelled_s8jyv4$result = true;
              break resumeCancelled_s8jyv4$break;
            }
            resumeCancelled_s8jyv4$result = false;
          }
           while (false);
          if (!resumeCancelled_s8jyv4$result) {
            this$DispatchedContinuation.continuation.resumeWith_tl1gpc$(closure$result);
          }
          return Unit;
        };
      };
    });
    return function (result, onCancellation) {
      var state = toState(result, onCancellation);
      if (this.dispatcher.isDispatchNeeded_1fupul$(this.context)) {
        this._state_8be2vx$ = state;
        this.resumeMode = 1;
        this.dispatcher.dispatch_5bn72i$(this.context, this);
      } else {
        executeUnconfined$break: do {
          var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
          if (false && eventLoop.isUnconfinedQueueEmpty) {
            false;
            break executeUnconfined$break;
          }
          if (eventLoop.isUnconfinedLoopActive) {
            this._state_8be2vx$ = state;
            this.resumeMode = 1;
            eventLoop.dispatchUnconfined_4avnfa$(this);
          } else {
            eventLoop.incrementUseCount_6taknv$(true);
            try {
              var resumeCancelled_s8jyv4$result;
              resumeCancelled_s8jyv4$break: do {
                var job = this.context.get_j3r2sn$(Job.Key);
                if (job != null && !job.isActive) {
                  var cause = job.getCancellationException();
                  this.cancelCompletedResult_83a7kv$(state, cause);
                  this.resumeWith_tl1gpc$(new Result(createFailure(cause)));
                  resumeCancelled_s8jyv4$result = true;
                  break resumeCancelled_s8jyv4$break;
                }
                resumeCancelled_s8jyv4$result = false;
              }
               while (false);
              if (!resumeCancelled_s8jyv4$result) {
                this.continuation.resumeWith_tl1gpc$(result);
              }
              while (eventLoop.processUnconfinedEvent()) {
              }
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                this.handleFatalException_pr7uss$(e, null);
              } else
                throw e;
            }
            finally {
              eventLoop.decrementUseCount_6taknv$(true);
            }
          }
        }
         while (false);
      }
    };
  }));
  DispatchedContinuation.prototype.cancelCompletedResult_83a7kv$ = function (takenState, cause) {
    if (Kotlin.isType(takenState, CompletedWithCancellation)) {
      takenState.onCancellation(cause);
    }
  };
  DispatchedContinuation.prototype.resumeCancelled_s8jyv4$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled_s8jyv4$', wrapFunction(function () {
    var Job = _.kotlinx.coroutines.Job;
    var Result = Kotlin.kotlin.Result;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    return function (state) {
      var job = this.context.get_j3r2sn$(Job.Key);
      if (job != null && !job.isActive) {
        var cause = job.getCancellationException();
        this.cancelCompletedResult_83a7kv$(state, cause);
        this.resumeWith_tl1gpc$(new Result(createFailure(cause)));
        return true;
      }
      return false;
    };
  }));
  DispatchedContinuation.prototype.resumeUndispatchedWith_tl1gpc$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith_tl1gpc$', function (result) {
    this.continuation.resumeWith_tl1gpc$(result);
  });
  DispatchedContinuation.prototype.dispatchYield_6v298r$ = function (context, value) {
    this._state_8be2vx$ = value;
    this.resumeMode = 1;
    this.dispatcher.dispatchYield_5bn72i$(context, this);
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher + ', ' + toDebugString(this.continuation) + ']';
  };
  Object.defineProperty(DispatchedContinuation.prototype, 'context', {configurable: true, get: function () {
    return this.continuation.context;
  }});
  DispatchedContinuation.$metadata$ = {kind: Kind_CLASS, simpleName: 'DispatchedContinuation', interfaces: [Continuation, CoroutineStackFrame, DispatchedTask]};
  function resumeCancellableWith($receiver, result, onCancellation) {
    if (onCancellation === void 0)
      onCancellation = null;
    if (Kotlin.isType($receiver, DispatchedContinuation)) {
      var state = toState(result, onCancellation);
      if ($receiver.dispatcher.isDispatchNeeded_1fupul$($receiver.context)) {
        $receiver._state_8be2vx$ = state;
        $receiver.resumeMode = 1;
        $receiver.dispatcher.dispatch_5bn72i$($receiver.context, $receiver);
      } else {
        executeUnconfined$break: do {
          var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
          if (false && eventLoop.isUnconfinedQueueEmpty) {
            false;
            break executeUnconfined$break;
          }
          if (eventLoop.isUnconfinedLoopActive) {
            $receiver._state_8be2vx$ = state;
            $receiver.resumeMode = 1;
            eventLoop.dispatchUnconfined_4avnfa$($receiver);
          } else {
            eventLoop.incrementUseCount_6taknv$(true);
            try {
              var resumeCancelled_s8jyv4$result;
              resumeCancelled_s8jyv4$break: do {
                var job = $receiver.context.get_j3r2sn$(Job.Key);
                if (job != null && !job.isActive) {
                  var cause = job.getCancellationException();
                  $receiver.cancelCompletedResult_83a7kv$(state, cause);
                  $receiver.resumeWith_tl1gpc$(new Result(createFailure(cause)));
                  resumeCancelled_s8jyv4$result = true;
                  break resumeCancelled_s8jyv4$break;
                }
                resumeCancelled_s8jyv4$result = false;
              }
               while (false);
              if (!resumeCancelled_s8jyv4$result) {
                $receiver.continuation.resumeWith_tl1gpc$(result);
              }
              while (eventLoop.processUnconfinedEvent()) {
              }
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                $receiver.handleFatalException_pr7uss$(e, null);
              } else
                throw e;
            }
            finally {
              eventLoop.decrementUseCount_6taknv$(true);
            }
          }
        }
         while (false);
      }
    } else
      $receiver.resumeWith_tl1gpc$(result);
  }
  var MODE_ATOMIC;
  var MODE_CANCELLABLE;
  var MODE_CANCELLABLE_REUSABLE;
  var MODE_UNDISPATCHED;
  var MODE_UNINITIALIZED;
  function get_isCancellableMode($receiver) {
    return $receiver === 1 || $receiver === 2;
  }
  function get_isReusableMode($receiver) {
    return $receiver === 2;
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.resumeMode = resumeMode;
  }
  DispatchedTask.prototype.cancelCompletedResult_83a7kv$ = function (takenState, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_tpy1pm$ = function (state) {
    var tmp$;
    return (tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  DispatchedTask.prototype.getExceptionalResult_s8jyv4$ = function (state) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = state, CompletedExceptionally) ? tmp$ : null) != null ? tmp$_0.cause : null;
  };
  DispatchedTask.prototype.run = function () {
    var tmp$;
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var delegate = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : throwCCE();
      var continuation = delegate.continuation;
      var context = continuation.context;
      var state = this.takeState();
      var exception = this.getExceptionalResult_s8jyv4$(state);
      var job = exception == null && get_isCancellableMode(this.resumeMode) ? context.get_j3r2sn$(Job$Key_getInstance()) : null;
      if (job != null && !job.isActive) {
        var cause = job.getCancellationException();
        this.cancelCompletedResult_83a7kv$(state, cause);
        continuation.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(cause, continuation))));
      } else {
        if (exception != null) {
          continuation.resumeWith_tl1gpc$(new Result(createFailure(exception)));
        } else {
          var value = this.getSuccessfulResult_tpy1pm$(state);
          continuation.resumeWith_tl1gpc$(new Result(value));
        }
      }
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        fatalException = e;
      } else
        throw e;
    }
    finally {
      var tmp$_0;
      try {
        tmp$_0 = new Result(Unit);
      } catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          tmp$_0 = new Result(createFailure(e_0));
        } else
          throw e_0;
      }
      var result = tmp$_0;
      this.handleFatalException_pr7uss$(fatalException, result.exceptionOrNull());
    }
  };
  DispatchedTask.prototype.handleFatalException_pr7uss$ = function (exception, finallyException) {
    if (exception === null && finallyException === null)
      return;
    var cause = exception != null ? exception : finallyException;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.delegate.context, reason);
  };
  DispatchedTask.$metadata$ = {kind: Kind_CLASS, simpleName: 'DispatchedTask', interfaces: [SchedulerTask]};
  function dispatch($receiver, mode) {
    var delegate = $receiver.delegate;
    var undispatched = mode === 4;
    if (!undispatched && Kotlin.isType(delegate, DispatchedContinuation) && get_isCancellableMode(mode) === get_isCancellableMode($receiver.resumeMode)) {
      var dispatcher = delegate.dispatcher;
      var context = delegate.context;
      if (dispatcher.isDispatchNeeded_1fupul$(context)) {
        dispatcher.dispatch_5bn72i$(context, $receiver);
      } else {
        resumeUnconfined($receiver);
      }
    } else {
      resume($receiver, delegate, undispatched);
    }
  }
  function resume($receiver, delegate, undispatched) {
    var tmp$;
    var state = $receiver.takeState();
    var exception = $receiver.getExceptionalResult_s8jyv4$(state);
    var result = exception != null ? new Result(createFailure(exception)) : new Result($receiver.getSuccessfulResult_tpy1pm$(state));
    if (undispatched) {
      (Kotlin.isType(tmp$ = delegate, DispatchedContinuation) ? tmp$ : throwCCE()).continuation.resumeWith_tl1gpc$(result);
    } else
      delegate.resumeWith_tl1gpc$(result);
  }
  function resumeUnconfined($receiver) {
    var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
    if (eventLoop.isUnconfinedLoopActive) {
      eventLoop.dispatchUnconfined_4avnfa$($receiver);
    } else {
      eventLoop.incrementUseCount_6taknv$(true);
      try {
        resume($receiver, $receiver.delegate, true);
        while (eventLoop.processUnconfinedEvent()) {
        }
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          $receiver.handleFatalException_pr7uss$(e, null);
        } else
          throw e;
      }
      finally {
        eventLoop.decrementUseCount_6taknv$(true);
      }
    }
  }
  function InlineList(holder) {
    if (holder === void 0)
      holder = null;
    this.holder_0 = holder;
  }
  InlineList.prototype.plus_11rb$ = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.holder_0;
    if (tmp$ == null)
      tmp$_2 = new InlineList(element);
    else if (Kotlin.isType(tmp$, ArrayList)) {
      (Kotlin.isType(tmp$_0 = this.holder_0, ArrayList) ? tmp$_0 : throwCCE()).add_11rb$(element);
      tmp$_2 = new InlineList(this.holder_0);
    } else {
      var list = ArrayList_init(4);
      list.add_11rb$((tmp$_1 = this.holder_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE());
      list.add_11rb$(element);
      tmp$_2 = new InlineList(list);
    }
    return tmp$_2;
  };
  InlineList.prototype.forEachReversed_qlkmfe$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.InlineList.forEachReversed_qlkmfe$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var ArrayList = Kotlin.kotlin.collections.ArrayList;
    return function (action) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = this.holder_0;
      if (tmp$ == null)
        return;
      else if (!Kotlin.isType(tmp$, ArrayList)) {
        action((tmp$_0 = this.holder_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
      } else {
        var list = Kotlin.isType(tmp$_1 = this.holder_0, ArrayList) ? tmp$_1 : throwCCE();
        for (var i = list.size - 1 | 0; i >= 0; i--) {
          action(list.get_za3lpa$(i));
        }
      }
    };
  }));
  InlineList.$metadata$ = {kind: Kind_CLASS, simpleName: 'InlineList', interfaces: []};
  InlineList.prototype.unbox = function () {
    return this.holder_0;
  };
  InlineList.prototype.toString = function () {
    return 'InlineList(holder=' + Kotlin.toString(this.holder_0) + ')';
  };
  InlineList.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.holder_0) | 0;
    return result;
  };
  InlineList.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.holder_0, other.holder_0))));
  };
  function LimitedDispatcher(dispatcher, parallelism) {
    CoroutineDispatcher.call(this);
    this.dispatcher_0 = dispatcher;
    this.parallelism_0 = parallelism;
    var tmp$, tmp$_0;
    this.$delegate_ay9hik$_0 = (tmp$_0 = Kotlin.isType(tmp$ = dispatcher, Delay) ? tmp$ : null) != null ? tmp$_0 : get_DefaultDelay();
    this.runningWorkers_0 = 0;
    this.queue_0 = new LockFreeTaskQueue(false);
    this.workerAllocationLock_0 = new Any();
  }
  LimitedDispatcher.prototype.limitedParallelism_za3lpa$ = function (parallelism) {
    checkParallelism(parallelism);
    if (parallelism >= this.parallelism_0)
      return this;
    return CoroutineDispatcher.prototype.limitedParallelism_za3lpa$.call(this, parallelism);
  };
  LimitedDispatcher.prototype.run = function () {
    var fairnessCounter = {v: 0};
    while (true) {
      var task = this.queue_0.removeFirstOrNull();
      if (task != null) {
        try {
          task.run();
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            handleCoroutineException(coroutines.EmptyCoroutineContext, e);
          } else
            throw e;
        }
        if ((fairnessCounter.v = fairnessCounter.v + 1 | 0, fairnessCounter.v) >= 16 && this.dispatcher_0.isDispatchNeeded_1fupul$(this)) {
          this.dispatcher_0.dispatch_5bn72i$(this, this);
          return;
        }
        continue;
      }
      this.runningWorkers_0 = this.runningWorkers_0 - 1 | 0;
      if (this.queue_0.size === 0)
        return;
      this.runningWorkers_0 = this.runningWorkers_0 + 1 | 0;
      fairnessCounter.v = 0;
    }
  };
  LimitedDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    dispatchInternal_0$break: do {
      if (this.addAndTryDispatching_0(block))
        break dispatchInternal_0$break;
      if (!this.tryAllocateWorker_0())
        break dispatchInternal_0$break;
      this.dispatcher_0.dispatch_5bn72i$(this, this);
    }
     while (false);
  };
  LimitedDispatcher.prototype.dispatchYield_5bn72i$ = function (context, block) {
    dispatchInternal_0$break: do {
      if (this.addAndTryDispatching_0(block))
        break dispatchInternal_0$break;
      if (!this.tryAllocateWorker_0())
        break dispatchInternal_0$break;
      this.dispatcher_0.dispatchYield_5bn72i$(this, this);
    }
     while (false);
  };
  LimitedDispatcher.prototype.dispatchInternal_0 = function (block, dispatch) {
    if (this.addAndTryDispatching_0(block))
      return;
    if (!this.tryAllocateWorker_0())
      return;
    dispatch();
  };
  LimitedDispatcher.prototype.tryAllocateWorker_0 = function () {
    if (this.runningWorkers_0 >= this.parallelism_0)
      return false;
    this.runningWorkers_0 = this.runningWorkers_0 + 1 | 0;
    return true;
  };
  LimitedDispatcher.prototype.addAndTryDispatching_0 = function (block) {
    this.queue_0.addLast_trkh7z$(block);
    return this.runningWorkers_0 >= this.parallelism_0;
  };
  LimitedDispatcher.prototype.delay_s8cxhz$ = function (time, continuation) {
    return this.$delegate_ay9hik$_0.delay_s8cxhz$(time, continuation);
  };
  LimitedDispatcher.prototype.invokeOnTimeout_oczv3n$ = function (timeMillis, block, context) {
    return this.$delegate_ay9hik$_0.invokeOnTimeout_oczv3n$(timeMillis, block, context);
  };
  LimitedDispatcher.prototype.scheduleResumeAfterDelay_egqmvs$ = function (timeMillis, continuation) {
    return this.$delegate_ay9hik$_0.scheduleResumeAfterDelay_egqmvs$(timeMillis, continuation);
  };
  LimitedDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'LimitedDispatcher', interfaces: [Delay, Runnable, CoroutineDispatcher]};
  function checkParallelism($receiver) {
    if (!($receiver >= 1)) {
      var message = 'Expected positive parallelism level, but got ' + $receiver;
      throw IllegalArgumentException_init(message.toString());
    }
  }
  var REMOVE_PREPARED;
  function LockFreeTaskQueue(singleConsumer) {
    this._cur_0 = atomic(new LockFreeTaskQueueCore(8, singleConsumer));
  }
  Object.defineProperty(LockFreeTaskQueue.prototype, 'isEmpty', {configurable: true, get: function () {
    return this._cur_0.kotlinx$atomicfu$value.isEmpty;
  }});
  Object.defineProperty(LockFreeTaskQueue.prototype, 'size', {configurable: true, get: function () {
    return this._cur_0.kotlinx$atomicfu$value.size;
  }});
  LockFreeTaskQueue.prototype.close = function () {
    var $receiver = this._cur_0;
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      if (cur.close())
        return;
      this._cur_0.atomicfu$compareAndSet(cur, cur.next());
    }
  };
  LockFreeTaskQueue.prototype.addLast_trkh7z$ = function (element) {
    var $receiver = this._cur_0;
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      switch (cur.addLast_trkh7z$(element)) {
        case 0:
          return true;
        case 2:
          return false;
        case 1:
          this._cur_0.atomicfu$compareAndSet(cur, cur.next());
          break;
      }
    }
  };
  LockFreeTaskQueue.prototype.removeFirstOrNull = function () {
    var $receiver = this._cur_0;
    while (true) {
      var cur = $receiver.kotlinx$atomicfu$value;
      var tmp$;
      var result = cur.removeFirstOrNull();
      if (result !== LockFreeTaskQueueCore$Companion_getInstance().REMOVE_FROZEN)
        return (tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
      this._cur_0.atomicfu$compareAndSet(cur, cur.next());
    }
  };
  LockFreeTaskQueue.prototype.map_m8mn37$ = function (transform) {
    return this._cur_0.kotlinx$atomicfu$value.map_m8mn37$(transform);
  };
  LockFreeTaskQueue.prototype.isClosed = function () {
    return this._cur_0.kotlinx$atomicfu$value.isClosed();
  };
  LockFreeTaskQueue.$metadata$ = {kind: Kind_CLASS, simpleName: 'LockFreeTaskQueue', interfaces: []};
  function LockFreeTaskQueueCore(capacity, singleConsumer) {
    LockFreeTaskQueueCore$Companion_getInstance();
    this.capacity_0 = capacity;
    this.singleConsumer_0 = singleConsumer;
    this.mask_0 = this.capacity_0 - 1 | 0;
    this._next_0 = atomic(null);
    this._state_0 = atomic_2(L0);
    this.array_0 = atomicArrayOfNulls(this.capacity_0);
    if (!(this.mask_0 <= 1073741823)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!((this.capacity_0 & this.mask_0) === 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
  }
  Object.defineProperty(LockFreeTaskQueueCore.prototype, 'isEmpty', {configurable: true, get: function () {
    var $receiver = this._state_0.kotlinx$atomicfu$value;
    var head = $receiver.and(LockFreeTaskQueueCore$Companion$HEAD_MASK).shiftRight(0).toInt();
    var tail = $receiver.and(LockFreeTaskQueueCore$Companion$TAIL_MASK).shiftRight(30).toInt();
    return head === tail;
  }});
  Object.defineProperty(LockFreeTaskQueueCore.prototype, 'size', {configurable: true, get: function () {
    var $receiver = this._state_0.kotlinx$atomicfu$value;
    var head = $receiver.and(LockFreeTaskQueueCore$Companion$HEAD_MASK).shiftRight(0).toInt();
    var tail = $receiver.and(LockFreeTaskQueueCore$Companion$TAIL_MASK).shiftRight(30).toInt();
    return tail - head & 1073741823;
  }});
  LockFreeTaskQueueCore.prototype.close = function () {
    var $receiver = this._state_0;
    update$break: do {
      while (true) {
        var cur = $receiver.kotlinx$atomicfu$value;
        if (!equals(cur.and(LockFreeTaskQueueCore$Companion_getInstance().CLOSED_MASK), L0))
          return true;
        if (!equals(cur.and(LockFreeTaskQueueCore$Companion_getInstance().FROZEN_MASK), L0))
          return false;
        var upd = cur.or(LockFreeTaskQueueCore$Companion_getInstance().CLOSED_MASK);
        if ($receiver.atomicfu$compareAndSet(cur, upd))
          break update$break;
      }
    }
     while (false);
    return true;
  };
  LockFreeTaskQueueCore.prototype.addLast_trkh7z$ = function (element) {
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      action$break: do {
        if (!equals(state.and(L3458764513820540928), L0))
          return LockFreeTaskQueueCore$Companion_getInstance().addFailReason_mts6qi$(state);
        var head = state.and(LockFreeTaskQueueCore$Companion$HEAD_MASK).shiftRight(0).toInt();
        var tail = state.and(LockFreeTaskQueueCore$Companion$TAIL_MASK).shiftRight(30).toInt();
        var tmp$;
        var mask = this.mask_0;
        if ((tail + 2 & mask) === (head & mask))
          return 1;
        if (!this.singleConsumer_0 && this.array_0.atomicfu$get(tail & mask).kotlinx$atomicfu$value != null) {
          if (this.capacity_0 < 1024 || (tail - head & 1073741823) > this.capacity_0 >> 1) {
            return 1;
          }
          break action$break;
        }
        var newTail = tail + 1 & 1073741823;
        if (this._state_0.atomicfu$compareAndSet(state, LockFreeTaskQueueCore$Companion_getInstance().updateTail_if0zpk$(state, newTail))) {
          this.array_0.atomicfu$get(tail & mask).kotlinx$atomicfu$value = element;
          var cur = this;
          while (!equals(cur._state_0.kotlinx$atomicfu$value.and(LockFreeTaskQueueCore$Companion_getInstance().FROZEN_MASK), L0)) {
            tmp$ = cur.next().fillPlaceholder_0(tail, element);
            if (tmp$ == null) {
              break;
            }
            cur = tmp$;
          }
          return 0;
        }
      }
       while (false);
    }
  };
  LockFreeTaskQueueCore.prototype.fillPlaceholder_0 = function (index, element) {
    var old = this.array_0.atomicfu$get(index & this.mask_0).kotlinx$atomicfu$value;
    if (Kotlin.isType(old, LockFreeTaskQueueCore$Placeholder) && old.index === index) {
      this.array_0.atomicfu$get(index & this.mask_0).kotlinx$atomicfu$value = element;
      return this;
    }
    return null;
  };
  LockFreeTaskQueueCore.prototype.removeFirstOrNull = function () {
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      action$break: do {
        if (!equals(state.and(LockFreeTaskQueueCore$Companion_getInstance().FROZEN_MASK), L0))
          return LockFreeTaskQueueCore$Companion_getInstance().REMOVE_FROZEN;
        var head = state.and(LockFreeTaskQueueCore$Companion$HEAD_MASK).shiftRight(0).toInt();
        var tail = state.and(LockFreeTaskQueueCore$Companion$TAIL_MASK).shiftRight(30).toInt();
        var tmp$;
        if ((tail & this.mask_0) === (head & this.mask_0))
          return null;
        var element = this.array_0.atomicfu$get(head & this.mask_0).kotlinx$atomicfu$value;
        if (element == null) {
          if (this.singleConsumer_0)
            return null;
          break action$break;
        }
        if (Kotlin.isType(element, LockFreeTaskQueueCore$Placeholder))
          return null;
        var newHead = head + 1 & 1073741823;
        if (this._state_0.atomicfu$compareAndSet(state, LockFreeTaskQueueCore$Companion_getInstance().updateHead_if0zpk$(state, newHead))) {
          this.array_0.atomicfu$get(head & this.mask_0).kotlinx$atomicfu$value = null;
          return element;
        }
        if (!this.singleConsumer_0)
          break action$break;
        var cur = this;
        while (true) {
          tmp$ = cur.removeSlowPath_0(head, newHead);
          if (tmp$ == null) {
            return element;
          }
          cur = tmp$;
        }
      }
       while (false);
    }
  };
  LockFreeTaskQueueCore.prototype.removeSlowPath_0 = function (oldHead, newHead) {
    var $receiver = this._state_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      var head = state.and(LockFreeTaskQueueCore$Companion$HEAD_MASK).shiftRight(0).toInt();
      var tail = state.and(LockFreeTaskQueueCore$Companion$TAIL_MASK).shiftRight(30).toInt();
      if (!equals(state.and(LockFreeTaskQueueCore$Companion_getInstance().FROZEN_MASK), L0)) {
        return this.next();
      }
      if (this._state_0.atomicfu$compareAndSet(state, LockFreeTaskQueueCore$Companion_getInstance().updateHead_if0zpk$(state, newHead))) {
        this.array_0.atomicfu$get(head & this.mask_0).kotlinx$atomicfu$value = null;
        return null;
      }
    }
  };
  LockFreeTaskQueueCore.prototype.next = function () {
    return this.allocateOrGetNextCopy_0(this.markFrozen_0());
  };
  LockFreeTaskQueueCore.prototype.markFrozen_0 = function () {
    var $receiver = this._state_0;
    var updateAndGet$result;
    updateAndGet$break: do {
      while (true) {
        var cur = $receiver.kotlinx$atomicfu$value;
        if (!equals(cur.and(LockFreeTaskQueueCore$Companion_getInstance().FROZEN_MASK), L0))
          return cur;
        var upd = cur.or(LockFreeTaskQueueCore$Companion_getInstance().FROZEN_MASK);
        if ($receiver.atomicfu$compareAndSet(cur, upd)) {
          updateAndGet$result = upd;
          break updateAndGet$break;
        }
      }
    }
     while (false);
    return updateAndGet$result;
  };
  LockFreeTaskQueueCore.prototype.allocateOrGetNextCopy_0 = function (state) {
    var $receiver = this._next_0;
    while (true) {
      var next = $receiver.kotlinx$atomicfu$value;
      if (next != null)
        return next;
      this._next_0.atomicfu$compareAndSet(null, this.allocateNextCopy_0(state));
    }
  };
  LockFreeTaskQueueCore.prototype.allocateNextCopy_0 = function (state) {
    var next = new LockFreeTaskQueueCore(this.capacity_0 * 2 | 0, this.singleConsumer_0);
    var head = state.and(LockFreeTaskQueueCore$Companion$HEAD_MASK).shiftRight(0).toInt();
    var tail = state.and(LockFreeTaskQueueCore$Companion$TAIL_MASK).shiftRight(30).toInt();
    var tmp$;
    var index = head;
    while ((index & this.mask_0) !== (tail & this.mask_0)) {
      var value = (tmp$ = this.array_0.atomicfu$get(index & this.mask_0).kotlinx$atomicfu$value) != null ? tmp$ : new LockFreeTaskQueueCore$Placeholder(index);
      next.array_0.atomicfu$get(index & next.mask_0).kotlinx$atomicfu$value = value;
      index = index + 1 | 0;
    }
    next._state_0.kotlinx$atomicfu$value = LockFreeTaskQueueCore$Companion_getInstance().wo_2p08ub$(state, LockFreeTaskQueueCore$Companion_getInstance().FROZEN_MASK);
    return next;
  };
  LockFreeTaskQueueCore.prototype.map_m8mn37$ = function (transform) {
    var res = ArrayList_init(this.capacity_0);
    var $receiver = this._state_0.kotlinx$atomicfu$value;
    var head = $receiver.and(LockFreeTaskQueueCore$Companion$HEAD_MASK).shiftRight(0).toInt();
    var tail = $receiver.and(LockFreeTaskQueueCore$Companion$TAIL_MASK).shiftRight(30).toInt();
    var tmp$;
    var index = head;
    while ((index & this.mask_0) !== (tail & this.mask_0)) {
      var element = this.array_0.atomicfu$get(index & this.mask_0).kotlinx$atomicfu$value;
      if (element != null && !Kotlin.isType(element, LockFreeTaskQueueCore$Placeholder)) {
        res.add_11rb$(transform(Kotlin.isType(tmp$ = element, Any) ? tmp$ : throwCCE()));
      }
      index = index + 1 | 0;
    }
    return res;
  };
  LockFreeTaskQueueCore.prototype.isClosed = function () {
    return !equals(this._state_0.kotlinx$atomicfu$value.and(LockFreeTaskQueueCore$Companion_getInstance().CLOSED_MASK), L0);
  };
  function LockFreeTaskQueueCore$Placeholder(index) {
    this.index = index;
  }
  LockFreeTaskQueueCore$Placeholder.$metadata$ = {kind: Kind_CLASS, simpleName: 'Placeholder', interfaces: []};
  function LockFreeTaskQueueCore$Companion() {
    LockFreeTaskQueueCore$Companion_instance = this;
    this.INITIAL_CAPACITY = 8;
    this.CAPACITY_BITS = 30;
    this.MAX_CAPACITY_MASK = 1073741823;
    this.HEAD_SHIFT = 0;
    this.HEAD_MASK = L1073741823;
    this.TAIL_SHIFT = 30;
    this.TAIL_MASK = L1152921503533105152;
    this.FROZEN_SHIFT = 60;
    this.FROZEN_MASK = L1152921504606846976;
    this.CLOSED_SHIFT = 61;
    this.CLOSED_MASK = L2305843009213693952;
    this.MIN_ADD_SPIN_CAPACITY = 1024;
    this.REMOVE_FROZEN = new Symbol('REMOVE_FROZEN');
    this.ADD_SUCCESS = 0;
    this.ADD_FROZEN = 1;
    this.ADD_CLOSED = 2;
  }
  LockFreeTaskQueueCore$Companion.prototype.wo_2p08ub$ = function ($receiver, other) {
    return $receiver.and(other.inv());
  };
  LockFreeTaskQueueCore$Companion.prototype.updateHead_if0zpk$ = function ($receiver, newHead) {
    return this.wo_2p08ub$($receiver, this.HEAD_MASK).or(Kotlin.Long.fromInt(newHead).shiftLeft(0));
  };
  LockFreeTaskQueueCore$Companion.prototype.updateTail_if0zpk$ = function ($receiver, newTail) {
    return this.wo_2p08ub$($receiver, this.TAIL_MASK).or(Kotlin.Long.fromInt(newTail).shiftLeft(30));
  };
  LockFreeTaskQueueCore$Companion.prototype.withState_d0ock6$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LockFreeTaskQueueCore.Companion.withState_d0ock6$', wrapFunction(function () {
    var LockFreeTaskQueueCore$Companion$HEAD_MASK = Kotlin.Long.fromInt(1073741823);
    var LockFreeTaskQueueCore$Companion$TAIL_MASK = new Kotlin.Long(-1073741824, 268435455);
    return function ($receiver, block) {
      var head = $receiver.and(LockFreeTaskQueueCore$Companion$HEAD_MASK).shiftRight(0).toInt();
      var tail = $receiver.and(LockFreeTaskQueueCore$Companion$TAIL_MASK).shiftRight(30).toInt();
      return block(head, tail);
    };
  }));
  LockFreeTaskQueueCore$Companion.prototype.addFailReason_mts6qi$ = function ($receiver) {
    return !equals($receiver.and(this.CLOSED_MASK), L0) ? 2 : 1;
  };
  LockFreeTaskQueueCore$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var LockFreeTaskQueueCore$Companion_instance = null;
  function LockFreeTaskQueueCore$Companion_getInstance() {
    if (LockFreeTaskQueueCore$Companion_instance === null) {
      new LockFreeTaskQueueCore$Companion();
    }
    return LockFreeTaskQueueCore$Companion_instance;
  }
  LockFreeTaskQueueCore.$metadata$ = {kind: Kind_CLASS, simpleName: 'LockFreeTaskQueueCore', interfaces: []};
  function callUndeliveredElementCatchingException($receiver, element, undeliveredElementException) {
    if (undeliveredElementException === void 0)
      undeliveredElementException = null;
    try {
      $receiver(element);
    } catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        if (undeliveredElementException == null || undeliveredElementException.cause === ex) {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, ex);
        }
      } else
        throw ex;
    }
    return undeliveredElementException;
  }
  function callUndeliveredElement($receiver, element, context) {
    var tmp$;
    if ((tmp$ = callUndeliveredElementCatchingException($receiver, element, null)) != null) {
      handleCoroutineException(context, tmp$);
    }
  }
  function bindCancellationFun$lambda(closure$element, closure$context, this$bindCancellationFun) {
    return function (f) {
      callUndeliveredElement(this$bindCancellationFun, closure$element, closure$context);
      return Unit;
    };
  }
  function bindCancellationFun($receiver, element, context) {
    return bindCancellationFun$lambda(element, context, $receiver);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException.call(this, message, cause);
    this.name = 'UndeliveredElementException';
  }
  UndeliveredElementException.$metadata$ = {kind: Kind_CLASS, simpleName: 'UndeliveredElementException', interfaces: [RuntimeException]};
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.uCont = uCont;
  }
  Object.defineProperty(ScopeCoroutine.prototype, 'callerFrame', {configurable: true, get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.uCont, CoroutineStackFrame) ? tmp$ : null;
  }});
  ScopeCoroutine.prototype.getStackTraceElement = function () {
    return null;
  };
  Object.defineProperty(ScopeCoroutine.prototype, 'isScopedCoroutine', {configurable: true, get: function () {
    return true;
  }});
  Object.defineProperty(ScopeCoroutine.prototype, 'parent_8be2vx$', {configurable: true, get: function () {
    var tmp$;
    return (tmp$ = this.parentHandle_8be2vx$) != null ? tmp$.parent : null;
  }});
  ScopeCoroutine.prototype.afterCompletion_s8jyv4$ = function (state) {
    resumeCancellableWith(intercepted(this.uCont), recoverResult(state, this.uCont));
  };
  ScopeCoroutine.prototype.afterResume_s8jyv4$ = function (state) {
    this.uCont.resumeWith_tl1gpc$(recoverResult(state, this.uCont));
  };
  ScopeCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'ScopeCoroutine', interfaces: [CoroutineStackFrame, AbstractCoroutine]};
  function ContextScope(context) {
    this.coroutineContext_glfhxt$_0 = context;
  }
  Object.defineProperty(ContextScope.prototype, 'coroutineContext', {configurable: true, get: function () {
    return this.coroutineContext_glfhxt$_0;
  }});
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.coroutineContext + ')';
  };
  ContextScope.$metadata$ = {kind: Kind_CLASS, simpleName: 'ContextScope', interfaces: [CoroutineScope]};
  function Symbol(symbol) {
    this.symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.symbol + '>';
  };
  Symbol.prototype.unbox_tpy1pm$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.Symbol.unbox_tpy1pm$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (value) {
      var tmp$, tmp$_0;
      return value === this ? (tmp$ = null) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE() : (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    };
  }));
  Symbol.$metadata$ = {kind: Kind_CLASS, simpleName: 'Symbol', interfaces: []};
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    if (minValue === void 0)
      minValue = 1;
    if (maxValue === void 0)
      maxValue = 2147483647;
    return systemProp_1(propertyName, Kotlin.Long.fromInt(defaultValue), Kotlin.Long.fromInt(minValue), Kotlin.Long.fromInt(maxValue)).toInt();
  }
  function systemProp_1(propertyName, defaultValue, minValue, maxValue) {
    if (minValue === void 0)
      minValue = L1;
    if (maxValue === void 0)
      maxValue = Long$Companion$MAX_VALUE;
    var tmp$, tmp$_0;
    tmp$ = systemProp_2(propertyName);
    if (tmp$ == null) {
      return defaultValue;
    }
    var value = tmp$;
    var tmp$_1;
    if ((tmp$_0 = toLongOrNull(value)) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init(("System property '" + propertyName + "' has unrecognized value '" + value + "'").toString());
    }
    var parsed = tmp$_1;
    if (!(minValue.lessThanOrEqual(parsed) && parsed.lessThanOrEqual(maxValue))) {
      throw IllegalStateException_init(("System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'").toString());
    }
    return parsed;
  }
  function startCoroutineCancellable($receiver, completion) {
    try {
      resumeCancellableWith(intercepted(createCoroutineUnintercepted_0($receiver, completion)), new Result(Unit));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        dispatcherFailure(completion, e);
      } else
        throw e;
    }
  }
  function startCoroutineCancellable_0($receiver, receiver, completion, onCancellation) {
    if (onCancellation === void 0)
      onCancellation = null;
    try {
      resumeCancellableWith(intercepted(createCoroutineUnintercepted($receiver, receiver, completion)), new Result(Unit), onCancellation);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        dispatcherFailure(completion, e);
      } else
        throw e;
    }
  }
  function startCoroutineCancellable_1($receiver, fatalCompletion) {
    try {
      resumeCancellableWith(intercepted($receiver), new Result(Unit));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        dispatcherFailure(fatalCompletion, e);
      } else
        throw e;
    }
  }
  function dispatcherFailure(completion, e) {
    completion.resumeWith_tl1gpc$(new Result(createFailure(e)));
    throw e;
  }
  function startCoroutineUnintercepted($receiver, completion) {
    startDirect$break: do {
      var tmp$, tmp$_0;
      var actualCompletion = completion;
      try {
        tmp$ = $receiver(actualCompletion, false);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          var exception = e;
          actualCompletion.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          break startDirect$break;
        } else
          throw e;
      }
      var value = tmp$;
      if (value !== COROUTINE_SUSPENDED) {
        var value_0 = (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
        actualCompletion.resumeWith_tl1gpc$(new Result(value_0));
      }
    }
     while (false);
  }
  function startCoroutineUnintercepted_0($receiver, receiver, completion) {
    startDirect$break: do {
      var tmp$, tmp$_0;
      var actualCompletion = completion;
      try {
        tmp$ = $receiver(receiver, actualCompletion, false);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          var exception = e;
          actualCompletion.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          break startDirect$break;
        } else
          throw e;
      }
      var value = tmp$;
      if (value !== COROUTINE_SUSPENDED) {
        var value_0 = (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
        actualCompletion.resumeWith_tl1gpc$(new Result(value_0));
      }
    }
     while (false);
  }
  function startCoroutineUndispatched($receiver, completion) {
    startDirect$break: do {
      var tmp$, tmp$_0;
      var actualCompletion = completion;
      try {
        completion.context;
        tmp$ = $receiver(actualCompletion, false);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          var exception = e;
          actualCompletion.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          break startDirect$break;
        } else
          throw e;
      }
      var value = tmp$;
      if (value !== COROUTINE_SUSPENDED) {
        var value_0 = (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
        actualCompletion.resumeWith_tl1gpc$(new Result(value_0));
      }
    }
     while (false);
  }
  function startCoroutineUndispatched_0($receiver, receiver, completion) {
    startDirect$break: do {
      var tmp$, tmp$_0;
      var actualCompletion = completion;
      try {
        completion.context;
        tmp$ = $receiver(receiver, actualCompletion, false);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          var exception = e;
          actualCompletion.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          break startDirect$break;
        } else
          throw e;
      }
      var value = tmp$;
      if (value !== COROUTINE_SUSPENDED) {
        var value_0 = (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
        actualCompletion.resumeWith_tl1gpc$(new Result(value_0));
      }
    }
     while (false);
  }
  function startUndispatchedOrReturn($receiver, receiver, block) {
    var undispatchedResult$result;
    undispatchedResult$break: do {
      var tmp$, tmp$_0;
      try {
        tmp$ = block(receiver, $receiver, false);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$ = new CompletedExceptionally(e);
        } else
          throw e;
      }
      var result = tmp$;
      if (result === COROUTINE_SUSPENDED) {
        undispatchedResult$result = COROUTINE_SUSPENDED;
        break undispatchedResult$break;
      }
      var state = $receiver.makeCompletingOnce_8ea4ql$(result);
      if (state === COMPLETING_WAITING_CHILDREN) {
        undispatchedResult$result = COROUTINE_SUSPENDED;
        break undispatchedResult$break;
      }
      if (Kotlin.isType(state, CompletedExceptionally)) {
        if (true)
          throw recoverStackTrace(state.cause, $receiver.uCont);
        else if (Kotlin.isType(result, CompletedExceptionally))
          throw recoverStackTrace(result.cause, $receiver.uCont);
        else
          tmp$_0 = result;
      } else {
        tmp$_0 = unboxState(state);
      }
      undispatchedResult$result = tmp$_0;
    }
     while (false);
    return undispatchedResult$result;
  }
  function startUndispatchedOrReturnIgnoreTimeout($receiver, receiver, block) {
    var undispatchedResult$result;
    undispatchedResult$break: do {
      var tmp$, tmp$_0;
      try {
        tmp$ = block(receiver, $receiver, false);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$ = new CompletedExceptionally(e);
        } else
          throw e;
      }
      var result = tmp$;
      if (result === COROUTINE_SUSPENDED) {
        undispatchedResult$result = COROUTINE_SUSPENDED;
        break undispatchedResult$break;
      }
      var state = $receiver.makeCompletingOnce_8ea4ql$(result);
      if (state === COMPLETING_WAITING_CHILDREN) {
        undispatchedResult$result = COROUTINE_SUSPENDED;
        break undispatchedResult$break;
      }
      if (Kotlin.isType(state, CompletedExceptionally)) {
        var e_0 = state.cause;
        if (!(Kotlin.isType(e_0, TimeoutCancellationException) && e_0.coroutine_8be2vx$ === $receiver))
          throw recoverStackTrace(state.cause, $receiver.uCont);
        else if (Kotlin.isType(result, CompletedExceptionally))
          throw recoverStackTrace(result.cause, $receiver.uCont);
        else
          tmp$_0 = result;
      } else {
        tmp$_0 = unboxState(state);
      }
      undispatchedResult$result = tmp$_0;
    }
     while (false);
    return undispatchedResult$result;
  }
  function Runnable$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  Runnable$ObjectLiteral.prototype.run = function () {
    this.closure$block();
  };
  Runnable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Runnable]};
  function SelectBuilder() {
  }
  SelectBuilder.prototype.invoke_en0wgx$ = function ($receiver, block) {
    this.invoke_ha2bmj$($receiver, null, block);
  };
  SelectBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectBuilder', interfaces: []};
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectClause0', interfaces: []};
  function SelectClause1() {
  }
  SelectClause1.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectClause1', interfaces: []};
  function SelectClause2() {
  }
  SelectClause2.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectClause2', interfaces: []};
  function SelectInstance() {
  }
  SelectInstance.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectInstance', interfaces: []};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.selects.select_wd2ujs$', wrapFunction(function () {
    var SelectBuilderImpl_init = _.kotlinx.coroutines.selects.SelectBuilderImpl;
    var Throwable = Error;
    function select$lambda(closure$builder) {
      return function (uCont) {
        var scope = new SelectBuilderImpl_init(uCont);
        try {
          closure$builder(scope);
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            scope.handleBuilderException_tcv7n7$(e);
          } else
            throw e;
        }
        return scope.getResult();
      };
    }
    return function (builder, continuation) {
      Kotlin.suspendCall(select$lambda(builder)(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  var NOT_SELECTED;
  var ALREADY_SELECTED;
  var UNDECIDED_1;
  var RESUMED_1;
  function SeqNumber() {
    this.number_0 = atomic_2(L1);
  }
  SeqNumber.prototype.next = function () {
    return this.number_0.atomicfu$incrementAndGet$long();
  };
  SeqNumber.$metadata$ = {kind: Kind_CLASS, simpleName: 'SeqNumber', interfaces: []};
  var selectOpSequenceNumber;
  function SelectBuilderImpl(uCont) {
    LinkedListHead.call(this);
    this.uCont_0 = uCont;
    this._state_0 = atomic(NOT_SELECTED);
    this._result_0 = atomic(UNDECIDED_1);
    this._parentHandle_0 = atomic(null);
  }
  Object.defineProperty(SelectBuilderImpl.prototype, 'callerFrame', {configurable: true, get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.uCont_0, CoroutineStackFrame) ? tmp$ : null;
  }});
  SelectBuilderImpl.prototype.getStackTraceElement = function () {
    return null;
  };
  Object.defineProperty(SelectBuilderImpl.prototype, 'parentHandle_0', {configurable: true, get: function () {
    return this._parentHandle_0.kotlinx$atomicfu$value;
  }, set: function (value) {
    this._parentHandle_0.kotlinx$atomicfu$value = value;
  }});
  Object.defineProperty(SelectBuilderImpl.prototype, 'context', {configurable: true, get: function () {
    return this.uCont_0.context;
  }});
  Object.defineProperty(SelectBuilderImpl.prototype, 'completion', {configurable: true, get: function () {
    return this;
  }});
  SelectBuilderImpl.prototype.doResume_0 = function (value, block) {
    var $receiver = this._result_0;
    while (true) {
      var result = $receiver.kotlinx$atomicfu$value;
      if (result === UNDECIDED_1) {
        var update = value();
        if (this._result_0.atomicfu$compareAndSet(UNDECIDED_1, update))
          return;
      } else if (result === COROUTINE_SUSPENDED) {
        if (this._result_0.atomicfu$compareAndSet(COROUTINE_SUSPENDED, RESUMED_1)) {
          block();
          return;
        }
      } else
        throw IllegalStateException_init('Already resumed');
    }
  };
  SelectBuilderImpl.prototype.resumeWith_tl1gpc$ = function (result) {
    doResume_0$break: do {
      var $receiver = this._result_0;
      while (true) {
        var result_0 = $receiver.kotlinx$atomicfu$value;
        if (result_0 === UNDECIDED_1) {
          var update = toState(result);
          if (this._result_0.atomicfu$compareAndSet(UNDECIDED_1, update))
            break doResume_0$break;
        } else if (result_0 === COROUTINE_SUSPENDED) {
          if (this._result_0.atomicfu$compareAndSet(COROUTINE_SUSPENDED, RESUMED_1)) {
            if (result.isFailure) {
              var $receiver_0 = this.uCont_0;
              $receiver_0.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(ensureNotNull(result.exceptionOrNull()), $receiver_0))));
            } else {
              this.uCont_0.resumeWith_tl1gpc$(result);
            }
            break doResume_0$break;
          }
        } else
          throw IllegalStateException_init('Already resumed');
      }
    }
     while (false);
  };
  SelectBuilderImpl.prototype.resumeSelectWithException_tcv7n7$ = function (exception) {
    doResume_0$break: do {
      var $receiver = this._result_0;
      while (true) {
        var result = $receiver.kotlinx$atomicfu$value;
        if (result === UNDECIDED_1) {
          var update = new CompletedExceptionally(recoverStackTrace(exception, this.uCont_0));
          if (this._result_0.atomicfu$compareAndSet(UNDECIDED_1, update))
            break doResume_0$break;
        } else if (result === COROUTINE_SUSPENDED) {
          if (this._result_0.atomicfu$compareAndSet(COROUTINE_SUSPENDED, RESUMED_1)) {
            intercepted(this.uCont_0).resumeWith_tl1gpc$(new Result(createFailure(exception)));
            break doResume_0$break;
          }
        } else
          throw IllegalStateException_init('Already resumed');
      }
    }
     while (false);
  };
  SelectBuilderImpl.prototype.getResult = function () {
    if (!this.isSelected)
      this.initCancellability_0();
    var result = this._result_0.kotlinx$atomicfu$value;
    if (result === UNDECIDED_1) {
      if (this._result_0.atomicfu$compareAndSet(UNDECIDED_1, COROUTINE_SUSPENDED))
        return COROUTINE_SUSPENDED;
      result = this._result_0.kotlinx$atomicfu$value;
    }
    if (result === RESUMED_1)
      throw IllegalStateException_init('Already resumed');
    else if (Kotlin.isType(result, CompletedExceptionally))
      throw result.cause;
    else
      return result;
  };
  SelectBuilderImpl.prototype.initCancellability_0 = function () {
    var tmp$;
    tmp$ = this.context.get_j3r2sn$(Job$Key_getInstance());
    if (tmp$ == null) {
      return;
    }
    var parent = tmp$;
    var newRegistration = parent.invokeOnCompletion_ct2b2z$(true, void 0, new SelectBuilderImpl$SelectOnCancelling(this));
    this.parentHandle_0 = newRegistration;
    if (this.isSelected)
      newRegistration.dispose();
  };
  function SelectBuilderImpl$SelectOnCancelling($outer) {
    this.$outer = $outer;
    JobCancellingNode.call(this);
  }
  SelectBuilderImpl$SelectOnCancelling.prototype.invoke = function (cause) {
    if (this.$outer.trySelect())
      this.$outer.resumeSelectWithException_tcv7n7$(this.job.getCancellationException());
  };
  SelectBuilderImpl$SelectOnCancelling.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelectOnCancelling', interfaces: [JobCancellingNode]};
  SelectBuilderImpl.prototype.handleBuilderException_tcv7n7$ = function (e) {
    if (this.trySelect()) {
      this.resumeWith_tl1gpc$(new Result(createFailure(e)));
    } else if (!Kotlin.isType(e, CancellationException)) {
      var result = this.getResult();
      if (!Kotlin.isType(result, CompletedExceptionally) || unwrap(result.cause) !== unwrap(e)) {
        handleCoroutineException(this.context, e);
      }
    }
  };
  Object.defineProperty(SelectBuilderImpl.prototype, 'isSelected', {configurable: true, get: function () {
    var $receiver = this._state_0;
    var loop$result;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      if (state === NOT_SELECTED)
        return false;
      else if (Kotlin.isType(state, OpDescriptor))
        state.perform_s8jyv4$(this);
      else
        return true;
    }
    return loop$result;
  }});
  SelectBuilderImpl.prototype.disposeOnSelect_rvfg84$ = function (handle) {
    var node = new SelectBuilderImpl$DisposeNode(handle);
    if (!this.isSelected) {
      this.addLast_l2j9rm$(node);
      if (!this.isSelected)
        return;
    }
    handle.dispose();
  };
  SelectBuilderImpl.prototype.doAfterSelect_0 = function () {
    var tmp$;
    (tmp$ = this.parentHandle_0) != null ? (tmp$.dispose(), Unit) : null;
    var cur = this._next;
    while (!equals(cur, this)) {
      if (Kotlin.isType(cur, SelectBuilderImpl$DisposeNode)) {
        cur.handle.dispose();
      }
      cur = cur._next;
    }
  };
  SelectBuilderImpl.prototype.trySelect = function () {
    var tmp$;
    var result = this.trySelectOther_uc1cc4$(null);
    if (result === RESUME_TOKEN)
      tmp$ = true;
    else if (result == null)
      tmp$ = false;
    else {
      throw IllegalStateException_init(('Unexpected trySelectIdempotent result ' + toString(result)).toString());
    }
    return tmp$;
  };
  SelectBuilderImpl.prototype.trySelectOther_uc1cc4$ = function (otherOp) {
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      action$break: do {
        if (state === NOT_SELECTED) {
          if (otherOp == null) {
            if (!this._state_0.atomicfu$compareAndSet(NOT_SELECTED, null))
              break action$break;
          } else {
            var pairSelectOp = new SelectBuilderImpl$PairSelectOp(otherOp);
            if (!this._state_0.atomicfu$compareAndSet(NOT_SELECTED, pairSelectOp))
              break action$break;
            var decision = pairSelectOp.perform_s8jyv4$(this);
            if (decision !== null)
              return decision;
          }
          this.doAfterSelect_0();
          return RESUME_TOKEN;
        } else if (Kotlin.isType(state, OpDescriptor)) {
          if (otherOp != null) {
            var otherAtomicOp = otherOp.atomicOp;
            if (Kotlin.isType(otherAtomicOp, SelectBuilderImpl$AtomicSelectOp) && otherAtomicOp.impl === this) {
              throw IllegalStateException_init('Cannot use matching select clauses on the same object'.toString());
            } else if (otherAtomicOp.isEarlierThan_bfmzsr$(state))
              return RETRY_ATOMIC;
          }
          state.perform_s8jyv4$(this);
        } else if (otherOp == null)
          return null;
        else if (state === otherOp.desc)
          return RESUME_TOKEN;
        else
          return null;
      }
       while (false);
    }
  };
  function SelectBuilderImpl$PairSelectOp(otherOp) {
    OpDescriptor.call(this);
    this.otherOp = otherOp;
  }
  SelectBuilderImpl$PairSelectOp.prototype.perform_s8jyv4$ = function (affected) {
    var tmp$;
    var impl = Kotlin.isType(tmp$ = affected, SelectBuilderImpl) ? tmp$ : throwCCE();
    this.otherOp.finishPrepare();
    var decision = this.otherOp.atomicOp.decide_s8jyv4$(null);
    var update = decision == null ? this.otherOp.desc : NOT_SELECTED;
    impl._state_0.atomicfu$compareAndSet(this, update);
    return decision;
  };
  Object.defineProperty(SelectBuilderImpl$PairSelectOp.prototype, 'atomicOp', {configurable: true, get: function () {
    return this.otherOp.atomicOp;
  }});
  SelectBuilderImpl$PairSelectOp.$metadata$ = {kind: Kind_CLASS, simpleName: 'PairSelectOp', interfaces: [OpDescriptor]};
  SelectBuilderImpl.prototype.performAtomicTrySelect_6q0pxr$ = function (desc) {
    return (new SelectBuilderImpl$AtomicSelectOp(this, desc)).perform_s8jyv4$(null);
  };
  SelectBuilderImpl.prototype.toString = function () {
    return 'SelectInstance(state=' + toString(this._state_0.kotlinx$atomicfu$value) + ', result=' + toString(this._result_0.kotlinx$atomicfu$value) + ')';
  };
  function SelectBuilderImpl$AtomicSelectOp(impl, desc) {
    AtomicOp.call(this);
    this.impl = impl;
    this.desc = desc;
    this.opSequence_oe6pw4$_0 = selectOpSequenceNumber.next();
    this.desc.atomicOp = this;
  }
  Object.defineProperty(SelectBuilderImpl$AtomicSelectOp.prototype, 'opSequence', {configurable: true, get: function () {
    return this.opSequence_oe6pw4$_0;
  }});
  SelectBuilderImpl$AtomicSelectOp.prototype.prepare_11rb$ = function (affected) {
    var tmp$;
    if (affected == null) {
      if ((tmp$ = this.prepareSelectOp_0()) != null) {
        return tmp$;
      }
    }
    try {
      return this.desc.prepare_4uxf5b$(this);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (affected == null)
          this.undoPrepare_0();
        throw e;
      } else
        throw e;
    }
  };
  SelectBuilderImpl$AtomicSelectOp.prototype.complete_19pj23$ = function (affected, failure) {
    this.completeSelect_0(failure);
    this.desc.complete_ayrq83$(this, failure);
  };
  SelectBuilderImpl$AtomicSelectOp.prototype.prepareSelectOp_0 = function () {
    var $receiver = this.impl._state_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      if (state === this)
        return null;
      else if (Kotlin.isType(state, OpDescriptor))
        state.perform_s8jyv4$(this.impl);
      else if (state === NOT_SELECTED) {
        if (this.impl._state_0.atomicfu$compareAndSet(NOT_SELECTED, this))
          return null;
      } else
        return ALREADY_SELECTED;
    }
  };
  SelectBuilderImpl$AtomicSelectOp.prototype.undoPrepare_0 = function () {
    this.impl._state_0.atomicfu$compareAndSet(this, NOT_SELECTED);
  };
  SelectBuilderImpl$AtomicSelectOp.prototype.completeSelect_0 = function (failure) {
    var selectSuccess = failure == null;
    var update = selectSuccess ? null : NOT_SELECTED;
    if (this.impl._state_0.atomicfu$compareAndSet(this, update)) {
      if (selectSuccess)
        this.impl.doAfterSelect_0();
    }
  };
  SelectBuilderImpl$AtomicSelectOp.prototype.toString = function () {
    return 'AtomicSelectOp(sequence=' + this.opSequence.toString() + ')';
  };
  SelectBuilderImpl$AtomicSelectOp.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicSelectOp', interfaces: [AtomicOp]};
  SelectBuilderImpl.prototype.invoke_nd4vgy$ = function ($receiver, block) {
    $receiver.registerSelectClause0_s9h9qd$(this, block);
  };
  SelectBuilderImpl.prototype.invoke_veq140$ = function ($receiver, block) {
    $receiver.registerSelectClause1_o3xas4$(this, block);
  };
  SelectBuilderImpl.prototype.invoke_ha2bmj$ = function ($receiver, param, block) {
    $receiver.registerSelectClause2_rol3se$(this, param, block);
  };
  function SelectBuilderImpl$onTimeout$lambda(this$SelectBuilderImpl, closure$block) {
    return function () {
      if (this$SelectBuilderImpl.trySelect())
        startCoroutineCancellable(closure$block, this$SelectBuilderImpl.completion);
      return Unit;
    };
  }
  SelectBuilderImpl.prototype.onTimeout_7xvrws$ = function (timeMillis, block) {
    if (timeMillis.compareTo_11rb$(L0) <= 0) {
      if (this.trySelect())
        startCoroutineUnintercepted(block, this.completion);
      return;
    }
    var action = new Runnable$ObjectLiteral(SelectBuilderImpl$onTimeout$lambda(this, block));
    this.disposeOnSelect_rvfg84$(get_delay(this.context).invokeOnTimeout_oczv3n$(timeMillis, action, this.context));
  };
  function SelectBuilderImpl$DisposeNode(handle) {
    LinkedListNode.call(this);
    this.handle = handle;
  }
  SelectBuilderImpl$DisposeNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'DisposeNode', interfaces: [LinkedListNode]};
  SelectBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelectBuilderImpl', interfaces: [CoroutineStackFrame, Continuation, SelectInstance, SelectBuilder, LinkedListHead]};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.selects.selectUnbiased_wd2ujs$', wrapFunction(function () {
    var UnbiasedSelectBuilderImpl_init = _.kotlinx.coroutines.selects.UnbiasedSelectBuilderImpl;
    var Throwable = Error;
    function selectUnbiased$lambda(closure$builder) {
      return function (uCont) {
        var scope = new UnbiasedSelectBuilderImpl_init(uCont);
        try {
          closure$builder(scope);
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            scope.handleBuilderException_tcv7n7$(e);
          } else
            throw e;
        }
        return scope.initSelectResult();
      };
    }
    return function (builder, continuation) {
      Kotlin.suspendCall(selectUnbiased$lambda(builder)(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function UnbiasedSelectBuilderImpl(uCont) {
    this.instance = new SelectBuilderImpl(uCont);
    this.clauses = ArrayList_init_0();
  }
  UnbiasedSelectBuilderImpl.prototype.handleBuilderException_tcv7n7$ = function (e) {
    this.instance.handleBuilderException_tcv7n7$(e);
  };
  UnbiasedSelectBuilderImpl.prototype.initSelectResult = function () {
    if (!this.instance.isSelected) {
      try {
        shuffle(this.clauses);
        var tmp$;
        tmp$ = this.clauses.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element();
        }
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          this.instance.handleBuilderException_tcv7n7$(e);
        } else
          throw e;
      }
    }
    return this.instance.getResult();
  };
  function UnbiasedSelectBuilderImpl$invoke$lambda(this$UnbiasedSelectBuilderImpl, closure$block, this$invoke) {
    return function () {
      this$invoke.registerSelectClause0_s9h9qd$(this$UnbiasedSelectBuilderImpl.instance, closure$block);
      return Unit;
    };
  }
  UnbiasedSelectBuilderImpl.prototype.invoke_nd4vgy$ = function ($receiver, block) {
    this.clauses.add_11rb$(UnbiasedSelectBuilderImpl$invoke$lambda(this, block, $receiver));
  };
  function UnbiasedSelectBuilderImpl$invoke$lambda_0(this$UnbiasedSelectBuilderImpl, closure$block, this$invoke) {
    return function () {
      this$invoke.registerSelectClause1_o3xas4$(this$UnbiasedSelectBuilderImpl.instance, closure$block);
      return Unit;
    };
  }
  UnbiasedSelectBuilderImpl.prototype.invoke_veq140$ = function ($receiver, block) {
    this.clauses.add_11rb$(UnbiasedSelectBuilderImpl$invoke$lambda_0(this, block, $receiver));
  };
  function UnbiasedSelectBuilderImpl$invoke$lambda_1(this$UnbiasedSelectBuilderImpl, closure$param, closure$block, this$invoke) {
    return function () {
      this$invoke.registerSelectClause2_rol3se$(this$UnbiasedSelectBuilderImpl.instance, closure$param, closure$block);
      return Unit;
    };
  }
  UnbiasedSelectBuilderImpl.prototype.invoke_ha2bmj$ = function ($receiver, param, block) {
    this.clauses.add_11rb$(UnbiasedSelectBuilderImpl$invoke$lambda_1(this, param, block, $receiver));
  };
  function UnbiasedSelectBuilderImpl$onTimeout$lambda(this$UnbiasedSelectBuilderImpl, closure$timeMillis, closure$block) {
    return function () {
      this$UnbiasedSelectBuilderImpl.instance.onTimeout_7xvrws$(closure$timeMillis, closure$block);
      return Unit;
    };
  }
  UnbiasedSelectBuilderImpl.prototype.onTimeout_7xvrws$ = function (timeMillis, block) {
    this.clauses.add_11rb$(UnbiasedSelectBuilderImpl$onTimeout$lambda(this, timeMillis, block));
  };
  UnbiasedSelectBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnbiasedSelectBuilderImpl', interfaces: [SelectBuilder]};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.selects.whileSelect_vmyjlh$', wrapFunction(function () {
    var SelectBuilderImpl_init = _.kotlinx.coroutines.selects.SelectBuilderImpl;
    var Throwable = Error;
    function select$lambda(closure$builder) {
      return function (uCont) {
        var scope = new SelectBuilderImpl_init(uCont);
        try {
          closure$builder(scope);
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            scope.handleBuilderException_tcv7n7$(e);
          } else
            throw e;
        }
        return scope.getResult();
      };
    }
    return function (builder, continuation) {
      while (true) {
        Kotlin.suspendCall(select$lambda(builder)(Kotlin.coroutineReceiver()));
        if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
          break;
      }
    };
  }));
  function suspendCancellableCoroutineReusable$lambda_1(closure$block) {
    return function (uCont) {
      var cancellable = getOrCreateCancellableContinuation(intercepted(uCont));
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function Mutex() {
  }
  Mutex.prototype.tryLock_s8jyv4$ = function (owner, callback$default) {
    if (owner === void 0)
      owner = null;
    return callback$default ? callback$default(owner) : this.tryLock_s8jyv4$$default(owner);
  };
  Mutex.prototype.lock_s8jyv4$ = function (owner, continuation, callback$default) {
    if (owner === void 0)
      owner = null;
    return callback$default ? callback$default(owner, continuation) : this.lock_s8jyv4$$default(owner, continuation);
  };
  Mutex.prototype.unlock_s8jyv4$ = function (owner, callback$default) {
    if (owner === void 0)
      owner = null;
    callback$default ? callback$default(owner) : this.unlock_s8jyv4$$default(owner);
  };
  Mutex.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Mutex', interfaces: []};
  function Mutex_0(locked) {
    if (locked === void 0)
      locked = false;
    return new MutexImpl(locked);
  }
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.sync.withLock_8701tb$', function ($receiver, owner, action, continuation) {
    if (owner === void 0)
      owner = null;
    Kotlin.suspendCall($receiver.lock_s8jyv4$(owner, Kotlin.coroutineReceiver()));
    try {
      return action();
    }finally {
      $receiver.unlock_s8jyv4$(owner);
    }
  });
  var LOCK_FAIL;
  var UNLOCK_FAIL;
  var LOCKED;
  var UNLOCKED;
  var EMPTY_LOCKED;
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.locked = locked;
  }
  Empty_0.prototype.toString = function () {
    return 'Empty[' + this.locked.toString() + ']';
  };
  Empty_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'Empty', interfaces: []};
  function MutexImpl(locked) {
    this._state_0 = atomic(locked ? EMPTY_LOCKED : EMPTY_UNLOCKED);
  }
  Object.defineProperty(MutexImpl.prototype, 'isLocked', {configurable: true, get: function () {
    var $receiver = this._state_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      if (Kotlin.isType(state, Empty_0))
        return state.locked !== UNLOCKED;
      else if (Kotlin.isType(state, MutexImpl$LockedQueue))
        return true;
      else if (Kotlin.isType(state, OpDescriptor))
        state.perform_s8jyv4$(this);
      else {
        throw IllegalStateException_init(('Illegal state ' + toString(state)).toString());
      }
    }
  }});
  Object.defineProperty(MutexImpl.prototype, 'isLockedEmptyQueueState_8be2vx$', {configurable: true, get: function () {
    var state = this._state_0.kotlinx$atomicfu$value;
    return Kotlin.isType(state, MutexImpl$LockedQueue) && state.isEmpty;
  }});
  MutexImpl.prototype.tryLock_s8jyv4$$default = function (owner) {
    var $receiver = this._state_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      if (Kotlin.isType(state, Empty_0)) {
        if (state.locked !== UNLOCKED)
          return false;
        var update = owner == null ? EMPTY_LOCKED : new Empty_0(owner);
        if (this._state_0.atomicfu$compareAndSet(state, update))
          return true;
      } else if (Kotlin.isType(state, MutexImpl$LockedQueue)) {
        if (!(state.owner !== owner)) {
          var message = 'Already locked by ' + toString(owner);
          throw IllegalStateException_init(message.toString());
        }
        return false;
      } else if (Kotlin.isType(state, OpDescriptor))
        state.perform_s8jyv4$(this);
      else {
        throw IllegalStateException_init(('Illegal state ' + toString(state)).toString());
      }
    }
  };
  MutexImpl.prototype.lock_s8jyv4$$default = function (owner, continuation) {
    if (this.tryLock_s8jyv4$(owner))
      return;
    return this.lockSuspend_0(owner, continuation);
  };
  function MutexImpl$lockSuspend$lambda$lambda$lambda(closure$owner, this$MutexImpl) {
    return function (it) {
      this$MutexImpl.unlock_s8jyv4$(closure$owner);
      return Unit;
    };
  }
  function MutexImpl$lockSuspend$lambda(closure$owner, this$MutexImpl) {
    return function (cont) {
      var waiter = {v: new MutexImpl$LockCont(this$MutexImpl, closure$owner, cont)};
      var $receiver = this$MutexImpl._state_0;
      while (true) {
        var this$MutexImpl_0 = this$MutexImpl;
        var closure$owner_0 = closure$owner;
        var state = $receiver.kotlinx$atomicfu$value;
        if (Kotlin.isType(state, Empty_0))
          if (state.locked !== UNLOCKED) {
            this$MutexImpl_0._state_0.atomicfu$compareAndSet(state, new MutexImpl$LockedQueue(state.locked));
          } else {
            var update = closure$owner_0 == null ? EMPTY_LOCKED : new Empty_0(closure$owner_0);
            if (this$MutexImpl_0._state_0.atomicfu$compareAndSet(state, update)) {
              cont.resume_q1ktlu$(Unit, MutexImpl$lockSuspend$lambda$lambda$lambda(closure$owner_0, this$MutexImpl_0));
              return;
            }
          }
         else if (Kotlin.isType(state, MutexImpl$LockedQueue)) {
          var curOwner = state.owner;
          if (!(curOwner !== closure$owner_0)) {
            var message = 'Already locked by ' + toString(closure$owner_0);
            throw IllegalStateException_init(message.toString());
          }
          state.addLast_l2j9rm$(waiter.v);
          if (this$MutexImpl_0._state_0.kotlinx$atomicfu$value === state || !waiter.v.take()) {
            removeOnCancellation(cont, waiter.v);
            return;
          }
          waiter.v = new MutexImpl$LockCont(this$MutexImpl_0, closure$owner_0, cont);
        } else if (Kotlin.isType(state, OpDescriptor))
          state.perform_s8jyv4$(this$MutexImpl_0);
        else {
          throw IllegalStateException_init(('Illegal state ' + toString(state)).toString());
        }
      }
      return Unit;
    };
  }
  MutexImpl.prototype.lockSuspend_0 = function (owner, continuation) {
    return suspendCancellableCoroutineReusable$lambda_1(MutexImpl$lockSuspend$lambda(owner, this))(continuation);
  };
  Object.defineProperty(MutexImpl.prototype, 'onLock', {configurable: true, get: function () {
    return this;
  }});
  MutexImpl.prototype.registerSelectClause2_rol3se$ = function (select, owner, block) {
    while (true) {
      if (select.isSelected)
        return;
      var state = this._state_0.kotlinx$atomicfu$value;
      if (Kotlin.isType(state, Empty_0))
        if (state.locked !== UNLOCKED) {
          this._state_0.atomicfu$compareAndSet(state, new MutexImpl$LockedQueue(state.locked));
        } else {
          var failure = select.performAtomicTrySelect_6q0pxr$(new MutexImpl$TryLockDesc(this, owner));
          if (failure == null) {
            startCoroutineUnintercepted_0(block, this, select.completion);
            return;
          } else if (failure === ALREADY_SELECTED)
            return;
          else if (failure !== LOCK_FAIL)
            if (failure !== RETRY_ATOMIC) {
              throw IllegalStateException_init(('performAtomicTrySelect(TryLockDesc) returned ' + toString(failure)).toString());
            }
        }
       else if (Kotlin.isType(state, MutexImpl$LockedQueue)) {
        if (!(state.owner !== owner)) {
          var message = 'Already locked by ' + toString(owner);
          throw IllegalStateException_init(message.toString());
        }
        var node = new MutexImpl$LockSelect(this, owner, select, block);
        state.addLast_l2j9rm$(node);
        if (this._state_0.kotlinx$atomicfu$value === state || !node.take()) {
          select.disposeOnSelect_rvfg84$(node);
          return;
        }
      } else if (Kotlin.isType(state, OpDescriptor))
        state.perform_s8jyv4$(this);
      else {
        throw IllegalStateException_init(('Illegal state ' + toString(state)).toString());
      }
    }
  };
  function MutexImpl$TryLockDesc(mutex, owner) {
    AtomicDesc.call(this);
    this.mutex = mutex;
    this.owner = owner;
  }
  function MutexImpl$TryLockDesc$PrepareOp($outer, atomicOp) {
    this.$outer = $outer;
    OpDescriptor.call(this);
    this.atomicOp_o4bkb9$_0 = atomicOp;
  }
  Object.defineProperty(MutexImpl$TryLockDesc$PrepareOp.prototype, 'atomicOp', {get: function () {
    return this.atomicOp_o4bkb9$_0;
  }});
  MutexImpl$TryLockDesc$PrepareOp.prototype.perform_s8jyv4$ = function (affected) {
    var tmp$;
    var update = this.atomicOp.isDecided ? EMPTY_UNLOCKED : this.atomicOp;
    (Kotlin.isType(tmp$ = affected, MutexImpl) ? tmp$ : throwCCE())._state_0.atomicfu$compareAndSet(this, update);
    return null;
  };
  MutexImpl$TryLockDesc$PrepareOp.$metadata$ = {kind: Kind_CLASS, simpleName: 'PrepareOp', interfaces: [OpDescriptor]};
  MutexImpl$TryLockDesc.prototype.prepare_4uxf5b$ = function (op) {
    var prepare = new MutexImpl$TryLockDesc$PrepareOp(this, op);
    if (!this.mutex._state_0.atomicfu$compareAndSet(EMPTY_UNLOCKED, prepare))
      return LOCK_FAIL;
    return prepare.perform_s8jyv4$(this.mutex);
  };
  MutexImpl$TryLockDesc.prototype.complete_ayrq83$ = function (op, failure) {
    var tmp$;
    if (failure != null)
      tmp$ = EMPTY_UNLOCKED;
    else {
      tmp$ = this.owner == null ? EMPTY_LOCKED : new Empty_0(this.owner);
    }
    var update = tmp$;
    this.mutex._state_0.atomicfu$compareAndSet(op, update);
  };
  MutexImpl$TryLockDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'TryLockDesc', interfaces: [AtomicDesc]};
  MutexImpl.prototype.holdsLock_za3rmp$ = function (owner) {
    var state = this._state_0.kotlinx$atomicfu$value;
    var block$result;
    if (Kotlin.isType(state, Empty_0)) {
      block$result = state.locked === owner;
    } else if (Kotlin.isType(state, MutexImpl$LockedQueue)) {
      block$result = state.owner === owner;
    } else {
      block$result = false;
    }
    return block$result;
  };
  MutexImpl.prototype.unlock_s8jyv4$$default = function (owner) {
    var $receiver = this._state_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      var tmp$, tmp$_0;
      if (Kotlin.isType(state, Empty_0)) {
        if (owner == null) {
          if (!(state.locked !== UNLOCKED)) {
            var message = 'Mutex is not locked';
            throw IllegalStateException_init(message.toString());
          }
        } else {
          if (!(state.locked === owner)) {
            var message_0 = 'Mutex is locked by ' + state.locked.toString() + ' but expected ' + toString(owner);
            throw IllegalStateException_init(message_0.toString());
          }
        }
        if (this._state_0.atomicfu$compareAndSet(state, EMPTY_UNLOCKED))
          return;
      } else if (Kotlin.isType(state, OpDescriptor))
        state.perform_s8jyv4$(this);
      else if (Kotlin.isType(state, MutexImpl$LockedQueue)) {
        if (owner != null) {
          if (!(state.owner === owner)) {
            var message_1 = 'Mutex is locked by ' + state.owner.toString() + ' but expected ' + toString(owner);
            throw IllegalStateException_init(message_1.toString());
          }
        }
        var waiter = state.removeFirstOrNull();
        if (waiter == null) {
          var op = new MutexImpl$UnlockOp(state);
          if (this._state_0.atomicfu$compareAndSet(state, op) && op.perform_s8jyv4$(this) == null)
            return;
        } else {
          if ((Kotlin.isType(tmp$ = waiter, MutexImpl$LockWaiter) ? tmp$ : throwCCE()).tryResumeLockWaiter()) {
            state.owner = (tmp$_0 = waiter.owner) != null ? tmp$_0 : LOCKED;
            waiter.completeResumeLockWaiter();
            return;
          }
        }
      } else {
        throw IllegalStateException_init(('Illegal state ' + toString(state)).toString());
      }
    }
  };
  MutexImpl.prototype.toString = function () {
    var $receiver = this._state_0;
    while (true) {
      var state = $receiver.kotlinx$atomicfu$value;
      if (Kotlin.isType(state, Empty_0))
        return 'Mutex[' + state.locked.toString() + ']';
      else if (Kotlin.isType(state, OpDescriptor))
        state.perform_s8jyv4$(this);
      else if (Kotlin.isType(state, MutexImpl$LockedQueue))
        return 'Mutex[' + state.owner.toString() + ']';
      else {
        throw IllegalStateException_init(('Illegal state ' + toString(state)).toString());
      }
    }
  };
  function MutexImpl$LockedQueue(owner) {
    LinkedListHead.call(this);
    this.owner = owner;
  }
  MutexImpl$LockedQueue.prototype.toString = function () {
    return 'LockedQueue[' + this.owner.toString() + ']';
  };
  MutexImpl$LockedQueue.$metadata$ = {kind: Kind_CLASS, simpleName: 'LockedQueue', interfaces: [LinkedListHead]};
  function MutexImpl$LockWaiter($outer, owner) {
    this.$outer = $outer;
    LinkedListNode.call(this);
    this.owner = owner;
    this.isTaken_0 = atomic_1(false);
  }
  MutexImpl$LockWaiter.prototype.take = function () {
    return this.isTaken_0.atomicfu$compareAndSet(false, true);
  };
  MutexImpl$LockWaiter.prototype.dispose = function () {
    this.remove();
  };
  MutexImpl$LockWaiter.$metadata$ = {kind: Kind_CLASS, simpleName: 'LockWaiter', interfaces: [DisposableHandle, LinkedListNode]};
  function MutexImpl$LockCont($outer, owner, cont) {
    this.$outer = $outer;
    MutexImpl$LockWaiter.call(this, this.$outer, owner);
    this.cont_0 = cont;
  }
  function MutexImpl$LockCont$tryResumeLockWaiter$lambda(this$LockCont, this$MutexImpl) {
    return function (it) {
      this$MutexImpl.unlock_s8jyv4$(this$LockCont.owner);
      return Unit;
    };
  }
  MutexImpl$LockCont.prototype.tryResumeLockWaiter = function () {
    if (!this.take())
      return false;
    return this.cont_0.tryResume_i8qury$(Unit, null, MutexImpl$LockCont$tryResumeLockWaiter$lambda(this, this.$outer)) != null;
  };
  MutexImpl$LockCont.prototype.completeResumeLockWaiter = function () {
    this.cont_0.completeResume_za3rmp$(RESUME_TOKEN);
  };
  MutexImpl$LockCont.prototype.toString = function () {
    return 'LockCont[' + toString(this.owner) + ', ' + this.cont_0 + '] for ' + this.$outer;
  };
  MutexImpl$LockCont.$metadata$ = {kind: Kind_CLASS, simpleName: 'LockCont', interfaces: [MutexImpl$LockWaiter]};
  function MutexImpl$LockSelect($outer, owner, select, block) {
    this.$outer = $outer;
    MutexImpl$LockWaiter.call(this, this.$outer, owner);
    this.select = select;
    this.block = block;
  }
  MutexImpl$LockSelect.prototype.tryResumeLockWaiter = function () {
    return this.take() && this.select.trySelect();
  };
  function MutexImpl$LockSelect$completeResumeLockWaiter$lambda(this$LockSelect, this$MutexImpl) {
    return function (it) {
      this$MutexImpl.unlock_s8jyv4$(this$LockSelect.owner);
      return Unit;
    };
  }
  MutexImpl$LockSelect.prototype.completeResumeLockWaiter = function () {
    startCoroutineCancellable_0(this.block, this.$outer, this.select.completion, MutexImpl$LockSelect$completeResumeLockWaiter$lambda(this, this.$outer));
  };
  MutexImpl$LockSelect.prototype.toString = function () {
    return 'LockSelect[' + toString(this.owner) + ', ' + this.select + '] for ' + this.$outer;
  };
  MutexImpl$LockSelect.$metadata$ = {kind: Kind_CLASS, simpleName: 'LockSelect', interfaces: [MutexImpl$LockWaiter]};
  function MutexImpl$UnlockOp(queue) {
    AtomicOp.call(this);
    this.queue = queue;
  }
  MutexImpl$UnlockOp.prototype.prepare_11rb$ = function (affected) {
    return this.queue.isEmpty ? null : UNLOCK_FAIL;
  };
  MutexImpl$UnlockOp.prototype.complete_19pj23$ = function (affected, failure) {
    var update = failure == null ? EMPTY_UNLOCKED : this.queue;
    affected._state_0.atomicfu$compareAndSet(this, update);
  };
  MutexImpl$UnlockOp.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnlockOp', interfaces: [AtomicOp]};
  MutexImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutexImpl', interfaces: [SelectClause2, Mutex]};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.sync.withPermit_103m5a$', function ($receiver, action, continuation) {
    Kotlin.suspendCall($receiver.acquire(Kotlin.coroutineReceiver()));
    try {
      return action();
    }finally {
      $receiver.release();
    }
  });
  var MAX_SPIN_CYCLES;
  var PERMIT;
  var TAKEN;
  var BROKEN;
  var CANCELLED;
  var SEGMENT_SIZE;
  function CloseableCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  CloseableCoroutineDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'CloseableCoroutineDispatcher', interfaces: [CoroutineDispatcher]};
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletionHandlerBase', interfaces: [LinkedListNode]};
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'CancelHandlerBase', interfaces: []};
  function invokeIt($receiver, cause) {
    if (equals(typeof $receiver, 'function'))
      $receiver(cause);
    else
      $receiver.invoke(cause);
  }
  var UNDEFINED_0;
  function createDefaultDispatcher() {
    if (isJsdom())
      return NodeDispatcher_getInstance();
    else {
      var tmp$ = !equals(typeof window, UNDEFINED_0) && window != null;
      if (tmp$) {
        tmp$ = !equals(typeof window.addEventListener, UNDEFINED_0);
      }
      if (tmp$)
        return asCoroutineDispatcher(window);
      else {
        var tmp$_0 = equals(typeof process, UNDEFINED_0);
        if (!tmp$_0) {
          tmp$_0 = equals(typeof process.nextTick, UNDEFINED_0);
        }
        if (tmp$_0)
          return SetTimeoutDispatcher_getInstance();
        else
          return NodeDispatcher_getInstance();
      }
    }
  }
  function isJsdom() {
    var tmp$ = !equals(typeof navigator, UNDEFINED_0) && navigator != null && navigator.userAgent != null;
    if (tmp$) {
      tmp$ = !equals(typeof navigator.userAgent, UNDEFINED_0);
    }
    var tmp$_0 = tmp$;
    if (tmp$_0) {
      tmp$_0 = !equals(typeof navigator.userAgent.match, UNDEFINED_0);
    }
    return tmp$_0 && navigator.userAgent.match('\\bjsdom\\b');
  }
  function get_DefaultDelay() {
    var tmp$;
    return Kotlin.isType(tmp$ = Dispatchers_getInstance().Default, Delay) ? tmp$ : throwCCE();
  }
  function newCoroutineContext($receiver, context) {
    var combined = $receiver.coroutineContext.plus_1fupul$(context);
    return combined !== Dispatchers_getInstance().Default && combined.get_j3r2sn$(ContinuationInterceptor.Key) == null ? combined.plus_1fupul$(Dispatchers_getInstance().Default) : combined;
  }
  function newCoroutineContext_0($receiver, addedContext) {
    return $receiver.plus_1fupul$(addedContext);
  }
  function toDebugString($receiver) {
    return $receiver.toString();
  }
  function get_coroutineName($receiver) {
    return null;
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  UndispatchedCoroutine.prototype.afterResume_s8jyv4$ = function (state) {
    this.uCont.resumeWith_tl1gpc$(recoverResult(state, this.uCont));
  };
  UndispatchedCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'UndispatchedCoroutine', interfaces: [ScopeCoroutine]};
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  var DEBUG;
  function get_hexAddress($receiver) {
    var tmp$;
    var result = $receiver.__debug_counter;
    if (typeof result !== 'number') {
      result = (counter = counter + 1 | 0, counter);
      $receiver.__debug_counter = result;
    }
    return (typeof (tmp$ = result) === 'number' ? tmp$ : throwCCE()).toString();
  }
  function get_classSimpleName($receiver) {
    var tmp$;
    return (tmp$ = Kotlin.getKClassFromExpression($receiver).simpleName) != null ? tmp$ : 'Unknown';
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default = createDefaultDispatcher();
    this.Unconfined = Unconfined_getInstance();
    this.mainDispatcher_0 = new JsMainDispatcher(this.Default, false);
    this.injectedMainDispatcher_0 = null;
  }
  Object.defineProperty(Dispatchers.prototype, 'Main', {configurable: true, get: function () {
    var tmp$;
    return (tmp$ = this.injectedMainDispatcher_0) != null ? tmp$ : this.mainDispatcher_0;
  }});
  Dispatchers.prototype.injectMain_ox7ct2$ = function (dispatcher) {
    this.injectedMainDispatcher_0 = dispatcher;
  };
  Dispatchers.prototype.resetInjectedMain = function () {
    this.injectedMainDispatcher_0 = null;
  };
  Dispatchers.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Dispatchers', interfaces: []};
  var Dispatchers_instance = null;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance === null) {
      new Dispatchers();
    }
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.delegate = delegate;
    this.invokeImmediately_0 = invokeImmediately;
    this.immediate_iydbla$_0 = this.invokeImmediately_0 ? this : new JsMainDispatcher(this.delegate, true);
  }
  Object.defineProperty(JsMainDispatcher.prototype, 'immediate', {configurable: true, get: function () {
    return this.immediate_iydbla$_0;
  }});
  JsMainDispatcher.prototype.isDispatchNeeded_1fupul$ = function (context) {
    return !this.invokeImmediately_0;
  };
  JsMainDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    this.delegate.dispatch_5bn72i$(context, block);
  };
  JsMainDispatcher.prototype.dispatchYield_5bn72i$ = function (context, block) {
    this.delegate.dispatchYield_5bn72i$(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp$;
    return (tmp$ = this.toStringInternalImpl()) != null ? tmp$ : this.delegate.toString();
  };
  JsMainDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsMainDispatcher', interfaces: [MainCoroutineDispatcher]};
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_5bn72i$ = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnconfinedEventLoop', interfaces: [EventLoop]};
  function EventLoopImplPlatform() {
    EventLoop.call(this);
  }
  EventLoopImplPlatform.prototype.unpark_0 = function () {
    unsupported();
  };
  EventLoopImplPlatform.prototype.reschedule_0 = function (now, delayedTask) {
    unsupported();
  };
  EventLoopImplPlatform.$metadata$ = {kind: Kind_CLASS, simpleName: 'EventLoopImplPlatform', interfaces: [EventLoop]};
  var DefaultExecutor_instance = null;
  function unsupported() {
    throw UnsupportedOperationException_init('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_0(message, cause, this);
    this.job_8be2vx$ = job;
    this.name = 'JobCancellationException';
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.job_8be2vx$;
  };
  JobCancellationException.prototype.equals = function (other) {
    return other === this || (Kotlin.isType(other, JobCancellationException) && equals(other.message, this.message) && equals(other.job_8be2vx$, this.job_8be2vx$) && equals(other.cause, this.cause));
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    return (((hashCode(ensureNotNull(this.message)) * 31 | 0) + hashCode(this.job_8be2vx$) | 0) * 31 | 0) + ((tmp$_0 = (tmp$ = this.cause) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
  };
  JobCancellationException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobCancellationException', interfaces: [CancellationException]};
  var RECOVER_STACK_TRACES;
  var MAX_DELAY;
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, L0, MAX_DELAY).toInt();
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.messageQueue_8be2vx$ = new SetTimeoutBasedDispatcher$ScheduledMessageQueue(this);
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue($outer) {
    this.$outer = $outer;
    MessageQueue.call(this);
    this.processQueue_8be2vx$ = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  SetTimeoutBasedDispatcher$ScheduledMessageQueue.prototype.schedule = function () {
    this.$outer.scheduleQueueProcessing();
  };
  SetTimeoutBasedDispatcher$ScheduledMessageQueue.prototype.reschedule = function () {
    setTimeout(this.processQueue_8be2vx$, 0);
  };
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$ScheduledMessageQueue) {
    return function () {
      this$ScheduledMessageQueue.process();
      return Unit;
    };
  }
  SetTimeoutBasedDispatcher$ScheduledMessageQueue.$metadata$ = {kind: Kind_CLASS, simpleName: 'ScheduledMessageQueue', interfaces: [MessageQueue]};
  SetTimeoutBasedDispatcher.prototype.limitedParallelism_za3lpa$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  SetTimeoutBasedDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    this.messageQueue_8be2vx$.enqueue_771g0p$(block);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  SetTimeoutBasedDispatcher.prototype.invokeOnTimeout_oczv3n$ = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(closure$continuation, this$SetTimeoutBasedDispatcher) {
    return function () {
      var receiver = closure$continuation;
      receiver.resumeUndispatched_hyuxa3$(this$SetTimeoutBasedDispatcher, Unit);
      return Unit;
    };
  }
  SetTimeoutBasedDispatcher.prototype.scheduleResumeAfterDelay_egqmvs$ = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    continuation.invokeOnCancellation_f05bi3$(new ClearTimeout(handle));
  };
  SetTimeoutBasedDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'SetTimeoutBasedDispatcher', interfaces: [Delay, CoroutineDispatcher]};
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.scheduleQueueProcessing = function () {
    process.nextTick(this.messageQueue_8be2vx$.processQueue_8be2vx$);
  };
  NodeDispatcher.$metadata$ = {kind: Kind_OBJECT, simpleName: 'NodeDispatcher', interfaces: [SetTimeoutBasedDispatcher]};
  var NodeDispatcher_instance = null;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance === null) {
      new NodeDispatcher();
    }
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.scheduleQueueProcessing = function () {
    setTimeout(this.messageQueue_8be2vx$.processQueue_8be2vx$, 0);
  };
  SetTimeoutDispatcher.$metadata$ = {kind: Kind_OBJECT, simpleName: 'SetTimeoutDispatcher', interfaces: [SetTimeoutBasedDispatcher]};
  var SetTimeoutDispatcher_instance = null;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance === null) {
      new SetTimeoutDispatcher();
    }
    return SetTimeoutDispatcher_instance;
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.handle_0 = handle;
  }
  ClearTimeout.prototype.dispose = function () {
    clearTimeout(this.handle_0);
  };
  ClearTimeout.prototype.invoke = function (cause) {
    this.dispose();
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.handle_0 + ']';
  };
  ClearTimeout.$metadata$ = {kind: Kind_CLASS, simpleName: 'ClearTimeout', interfaces: [DisposableHandle, CancelHandler]};
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_0 = window_0;
    this.queue_0 = new WindowMessageQueue(this.window_0);
  }
  WindowDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    this.queue_0.enqueue_771g0p$(block);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda(closure$continuation, this$WindowDispatcher) {
    return function () {
      var receiver = closure$continuation;
      receiver.resumeUndispatched_hyuxa3$(this$WindowDispatcher, Unit);
      return Unit;
    };
  }
  WindowDispatcher.prototype.scheduleResumeAfterDelay_egqmvs$ = function (timeMillis, continuation) {
    this.window_0.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  function WindowDispatcher$invokeOnTimeout$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  function WindowDispatcher$invokeOnTimeout$ObjectLiteral(this$WindowDispatcher, closure$handle) {
    this.this$WindowDispatcher = this$WindowDispatcher;
    this.closure$handle = closure$handle;
  }
  WindowDispatcher$invokeOnTimeout$ObjectLiteral.prototype.dispose = function () {
    this.this$WindowDispatcher.window_0.clearTimeout(this.closure$handle);
  };
  WindowDispatcher$invokeOnTimeout$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [DisposableHandle]};
  WindowDispatcher.prototype.invokeOnTimeout_oczv3n$ = function (timeMillis, block, context) {
    var handle = this.window_0.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$ObjectLiteral(this, handle);
  };
  WindowDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'WindowDispatcher', interfaces: [Delay, CoroutineDispatcher]};
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.window_0 = window_0;
    this.messageName_0 = 'dispatchCoroutine';
    this.window_0.addEventListener('message', WindowMessageQueue_init$lambda(this), true);
  }
  function WindowMessageQueue$schedule$lambda(this$WindowMessageQueue) {
    return function (it) {
      this$WindowMessageQueue.process();
      return Unit;
    };
  }
  WindowMessageQueue.prototype.schedule = function () {
    Promise.resolve(Unit).then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.reschedule = function () {
    this.window_0.postMessage(this.messageName_0, '*');
  };
  function WindowMessageQueue_init$lambda(this$WindowMessageQueue) {
    return function (event) {
      if (event.source == this$WindowMessageQueue.window_0 && event.data == this$WindowMessageQueue.messageName_0) {
        event.stopPropagation();
        this$WindowMessageQueue.process();
      }
      return Unit;
    };
  }
  WindowMessageQueue.$metadata$ = {kind: Kind_CLASS, simpleName: 'WindowMessageQueue', interfaces: [MessageQueue]};
  function MessageQueue() {
    ArrayQueue.call(this);
    this.yieldEvery = 16;
    this.scheduled_0 = false;
  }
  MessageQueue.prototype.enqueue_771g0p$ = function (element) {
    this.addLast_trkh7z$(element);
    if (!this.scheduled_0) {
      this.scheduled_0 = true;
      this.schedule();
    }
  };
  MessageQueue.prototype.process = function () {
    try {
      var times = this.yieldEvery;
      for (var index = 0; index < times; index++) {
        var tmp$;
        tmp$ = this.removeFirstOrNull();
        if (tmp$ == null) {
          return;
        }
        var element = tmp$;
        element.run();
      }
    }finally {
      if (this.isEmpty) {
        this.scheduled_0 = false;
      } else {
        this.reschedule();
      }
    }
  };
  MessageQueue.$metadata$ = {kind: Kind_CLASS, simpleName: 'MessageQueue', interfaces: [ArrayQueue]};
  function Runnable() {
  }
  Runnable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Runnable', interfaces: []};
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {kind: Kind_CLASS, simpleName: 'SchedulerTask', interfaces: [Runnable]};
  function get_taskContext($receiver) {
  }
  function asCoroutineDispatcher($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.coroutineDispatcher) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = new WindowDispatcher($receiver);
      $receiver.coroutineDispatcher = $receiver_0;
      tmp$_0 = $receiver_0;
    }
    return tmp$_0;
  }
  function AbortFlowException(owner) {
    CancellationException_init('Flow was aborted, no more elements needed', this);
    this.owner = owner;
    this.name = 'AbortFlowException';
  }
  AbortFlowException.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbortFlowException', interfaces: [CancellationException]};
  function NoOpLock() {
  }
  NoOpLock.prototype.tryLock = function () {
    return true;
  };
  NoOpLock.prototype.unlock = function () {
  };
  NoOpLock.$metadata$ = {kind: Kind_CLASS, simpleName: 'NoOpLock', interfaces: []};
  function identitySet(expectedSize) {
    return HashSet_init_0(expectedSize);
  }
  function LinkedListNode() {
    this._next = this;
    this._prev = this;
    this._removed = false;
  }
  Object.defineProperty(LinkedListNode.prototype, 'nextNode', {configurable: true, get: defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.get_nextNode', function () {
    return this._next;
  })});
  Object.defineProperty(LinkedListNode.prototype, 'prevNode', {configurable: true, get: defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.get_prevNode', function () {
    return this._prev;
  })});
  Object.defineProperty(LinkedListNode.prototype, 'isRemoved', {configurable: true, get: defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.get_isRemoved', function () {
    return this._removed;
  })});
  LinkedListNode.prototype.addLast_l2j9rm$ = function (node) {
    var prev = this._prev;
    node._next = this;
    node._prev = prev;
    prev._next = node;
    this._prev = node;
  };
  LinkedListNode.prototype.remove = function () {
    return this.removeImpl();
  };
  LinkedListNode.prototype.removeImpl = function () {
    if (this._removed)
      return false;
    var prev = this._prev;
    var next = this._next;
    prev._next = next;
    next._prev = prev;
    this._removed = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_l2j9rm$ = function (node) {
    if (this._next !== this)
      return false;
    this.addLast_l2j9rm$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIf_w327v9$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.addLastIf_w327v9$', function (node, condition) {
    if (!condition())
      return false;
    this.addLast_l2j9rm$(node);
    return true;
  });
  LinkedListNode.prototype.addLastIfPrev_s8xlln$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev_s8xlln$', function (node, predicate) {
    if (!predicate(this._prev))
      return false;
    this.addLast_l2j9rm$(node);
    return true;
  });
  LinkedListNode.prototype.addLastIfPrevAndIf_dzcug$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf_dzcug$', function (node, predicate, condition) {
    if (!predicate(this._prev))
      return false;
    if (!condition())
      return false;
    this.addLast_l2j9rm$(node);
    return true;
  });
  LinkedListNode.prototype.helpRemove = function () {
  };
  LinkedListNode.prototype.removeFirstOrNull = function () {
    var next = this._next;
    if (next === this)
      return null;
    if (!next.removeImpl()) {
      var message = 'Should remove';
      throw IllegalStateException_init(message.toString());
    }
    return next;
  };
  LinkedListNode.prototype.removeFirstIfIsInstanceOfOrPeekIf_14urrv$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf_14urrv$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (T_0, isT, predicate) {
      var next = this._next;
      if (next === this)
        return null;
      if (!isT(next))
        return null;
      if (predicate(next))
        return next;
      if (!next.removeImpl()) {
        var message = 'Should remove';
        throw IllegalStateException_init(message.toString());
      }
      return next;
    };
  }));
  LinkedListNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedListNode', interfaces: []};
  function AddLastDesc(queue, node) {
    AbstractAtomicDesc.call(this);
    this.queue = queue;
    this.node = node;
  }
  Object.defineProperty(AddLastDesc.prototype, 'affectedNode', {configurable: true, get: function () {
    return this.queue._prev;
  }});
  AddLastDesc.prototype.finishPrepare_xe32vn$ = function (prepareOp) {
  };
  AddLastDesc.prototype.onComplete = function () {
    this.queue.addLast_l2j9rm$(this.node);
  };
  AddLastDesc.prototype.finishOnSuccess_bpl3tg$ = function (affected, next) {
  };
  AddLastDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'AddLastDesc', interfaces: [AbstractAtomicDesc]};
  function RemoveFirstDesc(queue) {
    AbstractAtomicDesc.call(this);
    this.queue = queue;
    this.affectedNode_rjf1fm$_0 = this.queue._next;
  }
  Object.defineProperty(RemoveFirstDesc.prototype, 'result', {configurable: true, get: function () {
    var tmp$;
    return (tmp$ = this.affectedNode) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RemoveFirstDesc.prototype, 'affectedNode', {configurable: true, get: function () {
    return this.affectedNode_rjf1fm$_0;
  }});
  RemoveFirstDesc.prototype.finishPrepare_xe32vn$ = function (prepareOp) {
  };
  RemoveFirstDesc.prototype.onComplete = function () {
    this.queue.removeFirstOrNull();
  };
  RemoveFirstDesc.prototype.finishOnSuccess_bpl3tg$ = function (affected, next) {
  };
  RemoveFirstDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoveFirstDesc', interfaces: [AbstractAtomicDesc]};
  function AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  AbstractAtomicDesc.prototype.onPrepare_xe32vn$ = function (prepareOp) {
    this.finishPrepare_xe32vn$(prepareOp);
    return null;
  };
  AbstractAtomicDesc.prototype.onRemoved_l2j9rm$ = function (affected) {
  };
  AbstractAtomicDesc.prototype.prepare_4uxf5b$ = function (op) {
    var affected = this.affectedNode;
    var failure = this.failure_l2j9rm$(affected);
    if (failure != null)
      return failure;
    return this.onPrepare_xe32vn$(new PrepareOp(affected, this, op));
  };
  AbstractAtomicDesc.prototype.complete_ayrq83$ = function (op, failure) {
    this.onComplete();
  };
  AbstractAtomicDesc.prototype.failure_l2j9rm$ = function (affected) {
    return null;
  };
  AbstractAtomicDesc.prototype.retry_ru8hrx$ = function (affected, next) {
    return false;
  };
  AbstractAtomicDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractAtomicDesc', interfaces: [AtomicDesc]};
  function PrepareOp(affected, desc, atomicOp) {
    OpDescriptor.call(this);
    this.affected = affected;
    this.desc = desc;
    this.atomicOp_khy6pf$_0 = atomicOp;
  }
  Object.defineProperty(PrepareOp.prototype, 'atomicOp', {get: function () {
    return this.atomicOp_khy6pf$_0;
  }});
  PrepareOp.prototype.perform_s8jyv4$ = function (affected) {
    return null;
  };
  PrepareOp.prototype.finishPrepare = function () {
  };
  PrepareOp.$metadata$ = {kind: Kind_CLASS, simpleName: 'PrepareOp', interfaces: [OpDescriptor]};
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  Object.defineProperty(LinkedListHead.prototype, 'isEmpty', {configurable: true, get: function () {
    return this._next === this;
  }});
  LinkedListHead.prototype.forEach_jgwmnf$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListHead.forEach_jgwmnf$', wrapFunction(function () {
    var equals = Kotlin.equals;
    return function (T_0, isT, block) {
      var cur = this._next;
      while (!equals(cur, this)) {
        if (isT(cur))
          block(cur);
        cur = cur._next;
      }
    };
  }));
  LinkedListHead.prototype.remove = function () {
    throw UnsupportedOperationException_init_0();
  };
  LinkedListHead.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedListHead', interfaces: [LinkedListNode]};
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.recoverAndThrow_8o0b5c$', function (exception, continuation) {
    throw exception;
  });
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CoroutineStackFrame', interfaces: []};
  function initCause($receiver, cause) {
  }
  function systemProp_2(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.value_0 = null;
  }
  CommonThreadLocal.prototype.get = function () {
    var tmp$;
    return (tmp$ = this.value_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  CommonThreadLocal.prototype.set_11rb$ = function (value) {
    this.value_0 = value;
  };
  CommonThreadLocal.$metadata$ = {kind: Kind_CLASS, simpleName: 'CommonThreadLocal', interfaces: []};
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$coroutines = package$kotlinx.coroutines || (package$kotlinx.coroutines = {});
  package$coroutines.AbstractCoroutine = AbstractCoroutine;
  package$coroutines.launch_s496o7$ = launch;
  package$coroutines.async_pda6u4$ = async;
  package$coroutines.withContext_i5cbzn$ = withContext;
  $$importsForInline$$['kotlinx-atomicfu'] = $module$kotlinx_atomicfu;
  package$coroutines.DispatchedCoroutine = DispatchedCoroutine;
  package$coroutines.CancellableContinuation = CancellableContinuation;
  package$coroutines.getOrCreateCancellableContinuation_3j0xf1$ = getOrCreateCancellableContinuation;
  package$coroutines.removeOnCancellation_1u31dd$ = removeOnCancellation;
  package$coroutines.disposeOnCancellation_xredcy$ = disposeOnCancellation;
  package$coroutines.CancellableContinuationImpl = CancellableContinuationImpl;
  package$coroutines.NotCompleted = NotCompleted;
  package$coroutines.CancelHandler = CancelHandler;
  package$coroutines.BeforeResumeCancelHandler = BeforeResumeCancelHandler;
  package$coroutines.CompletableDeferred = CompletableDeferred;
  package$coroutines.CompletableDeferred_xptg6w$ = CompletableDeferred_0;
  package$coroutines.CompletableJob = CompletableJob;
  package$coroutines.toState_fbj1ua$ = toState;
  package$coroutines.toState_bd49bs$ = toState_0;
  package$coroutines.recoverResult_nnrdi1$ = recoverResult;
  package$coroutines.CompletedWithCancellation = CompletedWithCancellation;
  package$coroutines.CompletedExceptionally = CompletedExceptionally;
  package$coroutines.CancelledContinuation = CancelledContinuation;
  Object.defineProperty(CoroutineDispatcher, 'Key', {get: CoroutineDispatcher$Key_getInstance});
  package$coroutines.CoroutineDispatcher = CoroutineDispatcher;
  package$coroutines.handleCoroutineException_1ur55u$ = handleCoroutineException;
  package$coroutines.handlerException_l3aqr5$ = handlerException;
  package$coroutines.CoroutineExceptionHandler = CoroutineExceptionHandler_0;
  Object.defineProperty(CoroutineExceptionHandler_0, 'Key', {get: CoroutineExceptionHandler$Key_getInstance});
  Object.defineProperty(CoroutineName, 'Key', {get: CoroutineName$Key_getInstance});
  package$coroutines.CoroutineName = CoroutineName;
  package$coroutines.CoroutineScope = CoroutineScope;
  package$coroutines.MainScope = MainScope;
  Object.defineProperty(package$coroutines, 'GlobalScope', {get: GlobalScope_getInstance});
  package$coroutines.CoroutineScope_1fupul$ = CoroutineScope_0;
  package$coroutines.cancel_q2ti5d$ = cancel;
  package$coroutines.cancel_n4wjt3$ = cancel_0;
  Object.defineProperty(CoroutineStart, 'DEFAULT', {get: CoroutineStart$DEFAULT_getInstance});
  Object.defineProperty(CoroutineStart, 'LAZY', {get: CoroutineStart$LAZY_getInstance});
  Object.defineProperty(CoroutineStart, 'ATOMIC', {get: CoroutineStart$ATOMIC_getInstance});
  Object.defineProperty(CoroutineStart, 'UNDISPATCHED', {get: CoroutineStart$UNDISPATCHED_getInstance});
  package$coroutines.CoroutineStart = CoroutineStart;
  package$coroutines.CopyableThrowable = CopyableThrowable;
  package$coroutines.Deferred = Deferred;
  package$coroutines.Delay = Delay;
  package$coroutines.delay_s8cxhz$ = delay;
  package$coroutines.get_delay_tcgsej$ = get_delay;
  package$coroutines.EventLoop = EventLoop;
  Object.defineProperty(package$coroutines, 'ThreadLocalEventLoop', {get: ThreadLocalEventLoop_getInstance});
  package$coroutines.EventLoopImplBase = EventLoopImplBase;
  package$coroutines.CompletionHandlerException = CompletionHandlerException;
  package$coroutines.CoroutinesInternalError = CoroutinesInternalError;
  Object.defineProperty(Job, 'Key', {get: Job$Key_getInstance});
  package$coroutines.Job = Job;
  package$coroutines.Job_5dx9e$ = Job_0;
  package$coroutines.DisposableHandle = DisposableHandle;
  package$coroutines.ChildJob = ChildJob;
  package$coroutines.ParentJob = ParentJob;
  package$coroutines.ChildHandle = ChildHandle;
  package$coroutines.disposeOnCompletion_l1yf65$ = disposeOnCompletion;
  package$coroutines.cancel_xz8be$ = cancel_1;
  package$coroutines.ensureActive_5dx9u$ = ensureActive_0;
  package$coroutines.ensureActive_qdnslq$ = ensureActive_1;
  package$coroutines.cancel_6dgle8$ = cancel_3;
  package$coroutines.get_job_qdnslq$ = get_job;
  Object.defineProperty(package$coroutines, 'NonDisposableHandle', {get: NonDisposableHandle_getInstance});
  package$coroutines.JobSupport = JobSupport;
  package$coroutines.boxIncomplete_ntq51o$ = boxIncomplete;
  package$coroutines.unboxState_ntq51o$ = unboxState;
  package$coroutines.JobImpl = JobImpl;
  package$coroutines.Incomplete = Incomplete;
  package$coroutines.JobNode = JobNode;
  package$coroutines.NodeList = NodeList;
  package$coroutines.InactiveNodeList = InactiveNodeList;
  package$coroutines.DisposeOnCompletion = DisposeOnCompletion;
  package$coroutines.JobCancellingNode = JobCancellingNode;
  package$coroutines.ChildHandleNode = ChildHandleNode;
  package$coroutines.ChildContinuation = ChildContinuation;
  package$coroutines.MainCoroutineDispatcher = MainCoroutineDispatcher;
  package$coroutines.SupervisorJob_5dx9e$ = SupervisorJob;
  package$coroutines.withTimeoutOrNull_ms3uf5$ = withTimeoutOrNull;
  package$coroutines.TimeoutCancellationException = TimeoutCancellationException;
  package$coroutines.TimeoutCancellationException_mkhm69$ = TimeoutCancellationException_0;
  Object.defineProperty(package$coroutines, 'Unconfined', {get: Unconfined_getInstance});
  Object.defineProperty(YieldContext, 'Key', {get: YieldContext$Key_getInstance});
  package$coroutines.YieldContext = YieldContext;
  AbstractSendChannel.SendBuffered = AbstractSendChannel$SendBuffered;
  var package$channels = package$coroutines.channels || (package$coroutines.channels = {});
  package$channels.AbstractSendChannel = AbstractSendChannel;
  package$channels.AbstractChannel = AbstractChannel;
  package$channels.Send = Send;
  package$channels.ReceiveOrClosed = ReceiveOrClosed;
  package$channels.SendElement = SendElement;
  package$channels.SendElementWithUndeliveredHandler = SendElementWithUndeliveredHandler;
  package$channels.Closed = Closed;
  package$channels.Receive = Receive;
  package$channels.ArrayChannel = ArrayChannel;
  package$channels.BroadcastChannel = BroadcastChannel;
  Object.defineProperty(BufferOverflow, 'SUSPEND', {get: BufferOverflow$SUSPEND_getInstance});
  Object.defineProperty(BufferOverflow, 'DROP_OLDEST', {get: BufferOverflow$DROP_OLDEST_getInstance});
  Object.defineProperty(BufferOverflow, 'DROP_LATEST', {get: BufferOverflow$DROP_LATEST_getInstance});
  package$channels.BufferOverflow = BufferOverflow;
  package$channels.SendChannel = SendChannel;
  package$channels.ReceiveChannel = ReceiveChannel;
  ChannelResult.Failed = ChannelResult$Failed;
  ChannelResult.Closed = ChannelResult$Closed;
  Object.defineProperty(ChannelResult, 'Companion', {get: ChannelResult$Companion_getInstance});
  package$channels.ChannelResult = ChannelResult;
  package$channels.ChannelIterator = ChannelIterator;
  Object.defineProperty(Channel, 'Factory', {get: Channel$Factory_getInstance});
  package$channels.Channel = Channel;
  package$channels.Channel_lsve6m$ = Channel_0;
  package$channels.ClosedSendChannelException = ClosedSendChannelException;
  package$channels.ClosedReceiveChannelException = ClosedReceiveChannelException;
  package$channels.ChannelCoroutine = ChannelCoroutine;
  package$channels.cancelConsumed_v57n85$ = cancelConsumed;
  package$channels.ConflatedBroadcastChannel = ConflatedBroadcastChannel;
  package$channels.ConflatedChannel = ConflatedChannel;
  package$channels.LinkedListChannel = LinkedListChannel;
  package$channels.ProducerScope = ProducerScope;
  package$channels.RendezvousChannel = RendezvousChannel;
  var package$flow = package$coroutines.flow || (package$coroutines.flow = {});
  package$flow.asFlow_7wnvza$ = asFlow_1;
  package$flow.Flow = Flow;
  package$flow.FlowCollector = FlowCollector;
  var package$internal = package$flow.internal || (package$flow.internal = {});
  package$internal.checkOwnership_ygf9h9$ = checkOwnership;
  package$flow.toList_7a0s5y$ = toList_1;
  package$flow.toSet_a3q90u$ = toSet_1;
  package$flow.count_x2ftfk$ = count_1;
  package$flow.toCollection_eyr3lx$ = toCollection_0;
  package$flow.firstOrNull_iskllf$ = firstOrNull_1;
  var package$internal_0 = package$coroutines.internal || (package$coroutines.internal = {});
  package$internal_0.ArrayQueue = ArrayQueue;
  package$internal_0.OpDescriptor = OpDescriptor;
  package$internal_0.AtomicOp = AtomicOp;
  package$internal_0.AtomicDesc = AtomicDesc;
  package$internal_0.DispatchedContinuation = DispatchedContinuation;
  package$internal_0.resumeCancellableWith_udi45l$ = resumeCancellableWith;
  package$coroutines.get_isCancellableMode_8e50z4$ = get_isCancellableMode;
  package$coroutines.get_isReusableMode_8e50z4$ = get_isReusableMode;
  package$coroutines.DispatchedTask = DispatchedTask;
  package$coroutines.dispatch_h66hf9$ = dispatch;
  package$coroutines.resume_h7ljpe$ = resume;
  package$internal_0.recoverStackTrace_ak2v6d$ = recoverStackTrace;
  package$internal_0.InlineList = InlineList;
  package$internal_0.LimitedDispatcher = LimitedDispatcher;
  package$internal_0.checkParallelism_8e50z4$ = checkParallelism;
  package$internal_0.LockFreeTaskQueue = LockFreeTaskQueue;
  LockFreeTaskQueueCore.Placeholder = LockFreeTaskQueueCore$Placeholder;
  Object.defineProperty(LockFreeTaskQueueCore, 'Companion', {get: LockFreeTaskQueueCore$Companion_getInstance});
  package$internal_0.LockFreeTaskQueueCore = LockFreeTaskQueueCore;
  package$internal_0.callUndeliveredElementCatchingException_xmr2eb$ = callUndeliveredElementCatchingException;
  package$internal_0.callUndeliveredElement_ku137g$ = callUndeliveredElement;
  package$internal_0.bindCancellationFun_ku137g$ = bindCancellationFun;
  package$internal_0.UndeliveredElementException = UndeliveredElementException;
  package$internal_0.ScopeCoroutine = ScopeCoroutine;
  package$internal_0.ContextScope = ContextScope;
  package$internal_0.Symbol = Symbol;
  package$internal_0.systemProp_vrsuct$ = systemProp_0;
  package$internal_0.systemProp_ornks8$ = systemProp_1;
  var package$intrinsics = package$coroutines.intrinsics || (package$coroutines.intrinsics = {});
  package$intrinsics.startCoroutineCancellable_x18nsh$ = startCoroutineCancellable;
  package$intrinsics.startCoroutineCancellable_7jvlzs$ = startCoroutineCancellable_0;
  package$intrinsics.startCoroutineCancellable_he7xzw$ = startCoroutineCancellable_1;
  package$intrinsics.startCoroutineUnintercepted_81hn2s$ = startCoroutineUnintercepted;
  package$intrinsics.startCoroutineUnintercepted_kew4v3$ = startCoroutineUnintercepted_0;
  package$intrinsics.startCoroutineUndispatched_81hn2s$ = startCoroutineUndispatched;
  package$intrinsics.startCoroutineUndispatched_kew4v3$ = startCoroutineUndispatched_0;
  package$intrinsics.startUndispatchedOrReturn_nxbeil$ = startUndispatchedOrReturn;
  package$intrinsics.startUndispatchedOrReturnIgnoreTimeout_nxbeil$ = startUndispatchedOrReturnIgnoreTimeout;
  var package$selects = package$coroutines.selects || (package$coroutines.selects = {});
  package$selects.SelectBuilder = SelectBuilder;
  package$selects.SelectClause0 = SelectClause0;
  package$selects.SelectClause1 = SelectClause1;
  package$selects.SelectClause2 = SelectClause2;
  package$selects.SelectInstance = SelectInstance;
  package$selects.SeqNumber = SeqNumber;
  package$selects.SelectBuilderImpl = SelectBuilderImpl;
  package$selects.UnbiasedSelectBuilderImpl = UnbiasedSelectBuilderImpl;
  var package$sync = package$coroutines.sync || (package$coroutines.sync = {});
  package$sync.Mutex = Mutex;
  package$sync.Mutex_6taknv$ = Mutex_0;
  package$sync.MutexImpl = MutexImpl;
  package$coroutines.CloseableCoroutineDispatcher = CloseableCoroutineDispatcher;
  package$coroutines.CompletionHandlerBase = CompletionHandlerBase;
  package$coroutines.CancelHandlerBase = CancelHandlerBase;
  package$coroutines.invokeIt_beznmj$ = invokeIt;
  package$coroutines.createDefaultDispatcher_8be2vx$ = createDefaultDispatcher;
  Object.defineProperty(package$coroutines, 'DefaultDelay_8be2vx$', {get: get_DefaultDelay});
  package$coroutines.newCoroutineContext_7n4184$ = newCoroutineContext;
  package$coroutines.newCoroutineContext_583yvj$ = newCoroutineContext_0;
  package$coroutines.toDebugString_u0ddlz$ = toDebugString;
  package$coroutines.get_coroutineName_tcgsej$ = get_coroutineName;
  package$coroutines.UndispatchedCoroutine = UndispatchedCoroutine;
  package$coroutines.handleCoroutineExceptionImpl_yfv4gr$ = handleCoroutineExceptionImpl;
  package$coroutines.get_hexAddress_8ea4r1$ = get_hexAddress;
  package$coroutines.get_classSimpleName_8ea4r1$ = get_classSimpleName;
  Object.defineProperty(package$coroutines, 'Dispatchers', {get: Dispatchers_getInstance});
  package$coroutines.createEventLoop_8be2vx$ = createEventLoop;
  package$coroutines.UnconfinedEventLoop = UnconfinedEventLoop;
  package$coroutines.EventLoopImplPlatform = EventLoopImplPlatform;
  package$coroutines.JobCancellationException = JobCancellationException;
  SetTimeoutBasedDispatcher.ScheduledMessageQueue = SetTimeoutBasedDispatcher$ScheduledMessageQueue;
  package$coroutines.SetTimeoutBasedDispatcher = SetTimeoutBasedDispatcher;
  Object.defineProperty(package$coroutines, 'NodeDispatcher', {get: NodeDispatcher_getInstance});
  Object.defineProperty(package$coroutines, 'SetTimeoutDispatcher', {get: SetTimeoutDispatcher_getInstance});
  package$coroutines.WindowDispatcher = WindowDispatcher;
  package$coroutines.MessageQueue = MessageQueue;
  package$coroutines.Runnable = Runnable;
  package$coroutines.SchedulerTask = SchedulerTask;
  package$coroutines.get_taskContext_5sfo4y$ = get_taskContext;
  package$coroutines.asCoroutineDispatcher_nz12v2$ = asCoroutineDispatcher;
  package$internal.AbortFlowException = AbortFlowException;
  package$internal_0.NoOpLock = NoOpLock;
  package$internal_0.identitySet_46rbr$ = identitySet;
  package$internal_0.LinkedListNode = LinkedListNode;
  package$internal_0.AddLastDesc = AddLastDesc;
  package$internal_0.RemoveFirstDesc = RemoveFirstDesc;
  package$internal_0.AbstractAtomicDesc = AbstractAtomicDesc;
  package$internal_0.PrepareOp = PrepareOp;
  package$internal_0.LinkedListHead = LinkedListHead;
  package$internal_0.recoverStackTrace_87698k$ = recoverStackTrace_0;
  package$internal_0.unwrap_87698k$ = unwrap;
  package$internal_0.CoroutineStackFrame = CoroutineStackFrame;
  package$internal_0.initCause_oz8fe6$ = initCause;
  package$internal_0.systemProp_y4putb$ = systemProp_2;
  package$internal_0.threadContextElements_v4qu62$ = threadContextElements;
  package$internal_0.CommonThreadLocal = CommonThreadLocal;
  Job.prototype.plus_1fupul$ = CoroutineContext$Element.prototype.plus_1fupul$;
  Job.prototype.fold_3cc69b$ = CoroutineContext$Element.prototype.fold_3cc69b$;
  Job.prototype.get_j3r2sn$ = CoroutineContext$Element.prototype.get_j3r2sn$;
  Job.prototype.minusKey_yeqjby$ = CoroutineContext$Element.prototype.minusKey_yeqjby$;
  ChildJob.prototype.cancel = Job.prototype.cancel;
  ChildJob.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  ChildJob.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  ChildJob.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  ChildJob.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  ChildJob.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  ChildJob.prototype.cancel_x5z25k$ = Job.prototype.cancel_x5z25k$;
  ChildJob.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  ChildJob.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  ParentJob.prototype.cancel = Job.prototype.cancel;
  ParentJob.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  ParentJob.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  ParentJob.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  ParentJob.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  ParentJob.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  ParentJob.prototype.cancel_x5z25k$ = Job.prototype.cancel_x5z25k$;
  ParentJob.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  ParentJob.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  JobSupport.prototype.cancel = Job.prototype.cancel;
  JobSupport.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  JobSupport.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  JobSupport.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  JobSupport.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  JobSupport.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  JobSupport.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  JobSupport.prototype.cancel_x5z25k$ = Job.prototype.cancel_x5z25k$;
  JobSupport.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  Deferred.prototype.cancel = Job.prototype.cancel;
  Deferred.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  Deferred.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  Deferred.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  Deferred.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  Deferred.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  Deferred.prototype.cancel_x5z25k$ = Job.prototype.cancel_x5z25k$;
  Deferred.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  Deferred.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  CancellableContinuationImpl.prototype.cancel_dbl4no$ = CancellableContinuation.prototype.cancel_dbl4no$;
  CancellableContinuationImpl.prototype.tryResume_19pj23$ = CancellableContinuation.prototype.tryResume_19pj23$;
  CompletableDeferred.prototype.cancel = Deferred.prototype.cancel;
  CompletableDeferred.prototype.plus_dqr1mp$ = Deferred.prototype.plus_dqr1mp$;
  CompletableDeferred.prototype.plus_1fupul$ = Deferred.prototype.plus_1fupul$;
  CompletableDeferred.prototype.fold_3cc69b$ = Deferred.prototype.fold_3cc69b$;
  CompletableDeferred.prototype.get_j3r2sn$ = Deferred.prototype.get_j3r2sn$;
  CompletableDeferred.prototype.minusKey_yeqjby$ = Deferred.prototype.minusKey_yeqjby$;
  CompletableDeferred.prototype.cancel_x5z25k$ = Deferred.prototype.cancel_x5z25k$;
  CompletableDeferred.prototype.cancel_dbl4no$ = Deferred.prototype.cancel_dbl4no$;
  CompletableDeferred.prototype.invokeOnCompletion_ct2b2z$ = Deferred.prototype.invokeOnCompletion_ct2b2z$;
  CompletableJob.prototype.cancel = Job.prototype.cancel;
  CompletableJob.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  CompletableJob.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  CompletableJob.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  CompletableJob.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  CompletableJob.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  CompletableJob.prototype.cancel_x5z25k$ = Job.prototype.cancel_x5z25k$;
  CompletableJob.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  CompletableJob.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  CoroutineDispatcher.prototype.get_j3r2sn$ = ContinuationInterceptor.prototype.get_j3r2sn$;
  CoroutineDispatcher.prototype.minusKey_yeqjby$ = ContinuationInterceptor.prototype.minusKey_yeqjby$;
  CoroutineExceptionHandler_0.prototype.fold_3cc69b$ = CoroutineContext$Element.prototype.fold_3cc69b$;
  CoroutineExceptionHandler_0.prototype.get_j3r2sn$ = CoroutineContext$Element.prototype.get_j3r2sn$;
  CoroutineExceptionHandler_0.prototype.minusKey_yeqjby$ = CoroutineContext$Element.prototype.minusKey_yeqjby$;
  CoroutineExceptionHandler_0.prototype.plus_1fupul$ = CoroutineContext$Element.prototype.plus_1fupul$;
  EventLoopImplBase.prototype.delay_s8cxhz$ = Delay.prototype.delay_s8cxhz$;
  EventLoopImplBase.prototype.invokeOnTimeout_oczv3n$ = Delay.prototype.invokeOnTimeout_oczv3n$;
  NonCancellable.prototype.cancel = Job.prototype.cancel;
  NonCancellable.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  NonCancellable.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  NonCancellable.prototype.cancel_x5z25k$ = Job.prototype.cancel_x5z25k$;
  NonCancellable.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  AbstractSendChannel.prototype.close_dbl4no$ = SendChannel.prototype.close_dbl4no$;
  AbstractChannel$Itr.prototype.next0 = ChannelIterator.prototype.next0;
  Channel.prototype.offer_11rb$ = SendChannel.prototype.offer_11rb$;
  Channel.prototype.cancel = ReceiveChannel.prototype.cancel;
  Channel.prototype.poll = ReceiveChannel.prototype.poll;
  Channel.prototype.receiveOrNull = ReceiveChannel.prototype.receiveOrNull;
  Object.defineProperty(Channel.prototype, 'onReceiveOrNull', Object.getOwnPropertyDescriptor(ReceiveChannel.prototype, 'onReceiveOrNull'));
  Channel.prototype.close_dbl4no$ = SendChannel.prototype.close_dbl4no$;
  Channel.prototype.cancel_x5z25k$ = ReceiveChannel.prototype.cancel_x5z25k$;
  Channel.prototype.cancel_dbl4no$ = ReceiveChannel.prototype.cancel_dbl4no$;
  AbstractChannel.prototype.cancel = Channel.prototype.cancel;
  AbstractChannel.prototype.poll = Channel.prototype.poll;
  AbstractChannel.prototype.receiveOrNull = Channel.prototype.receiveOrNull;
  Object.defineProperty(AbstractChannel.prototype, 'onReceiveOrNull', Object.getOwnPropertyDescriptor(Channel.prototype, 'onReceiveOrNull'));
  AbstractChannel.prototype.cancel_dbl4no$ = Channel.prototype.cancel_dbl4no$;
  AbstractChannel.prototype.cancel_x5z25k$ = Channel.prototype.cancel_x5z25k$;
  BroadcastChannel.prototype.offer_11rb$ = SendChannel.prototype.offer_11rb$;
  BroadcastChannel.prototype.close_dbl4no$ = SendChannel.prototype.close_dbl4no$;
  ProducerScope.prototype.offer_11rb$ = SendChannel.prototype.offer_11rb$;
  ProducerScope.prototype.close_dbl4no$ = SendChannel.prototype.close_dbl4no$;
  BroadcastCoroutine.prototype.close_dbl4no$ = ProducerScope.prototype.close_dbl4no$;
  ChannelCoroutine.prototype.close_dbl4no$ = Channel.prototype.close_dbl4no$;
  ConflatedBroadcastChannel.prototype.offer_11rb$ = BroadcastChannel.prototype.offer_11rb$;
  ConflatedBroadcastChannel.prototype.close_dbl4no$ = BroadcastChannel.prototype.close_dbl4no$;
  SelectBuilderImpl.prototype.invoke_en0wgx$ = SelectBuilder.prototype.invoke_en0wgx$;
  UnbiasedSelectBuilderImpl.prototype.invoke_en0wgx$ = SelectBuilder.prototype.invoke_en0wgx$;
  MutexImpl.prototype.tryLock_s8jyv4$ = Mutex.prototype.tryLock_s8jyv4$;
  MutexImpl.prototype.lock_s8jyv4$ = Mutex.prototype.lock_s8jyv4$;
  MutexImpl.prototype.unlock_s8jyv4$ = Mutex.prototype.unlock_s8jyv4$;
  SetTimeoutBasedDispatcher.prototype.delay_s8cxhz$ = Delay.prototype.delay_s8cxhz$;
  WindowDispatcher.prototype.delay_s8cxhz$ = Delay.prototype.delay_s8cxhz$;
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  UNDECIDED_0 = 0;
  SUSPENDED_0 = 1;
  RESUMED_0 = 2;
  RESUME_TOKEN = new Symbol('RESUME_TOKEN');
  DISPOSED_TASK = new Symbol('REMOVED_TASK');
  SCHEDULE_OK = 0;
  SCHEDULE_COMPLETED = 1;
  SCHEDULE_DISPOSED = 2;
  CLOSED_EMPTY = new Symbol('CLOSED_EMPTY');
  COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
  COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
  COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
  TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
  RETRY = -1;
  FALSE = 0;
  TRUE = 1;
  SEALED = new Symbol('SEALED');
  EMPTY_NEW = new Empty(false);
  EMPTY_ACTIVE = new Empty(true);
  RECEIVE_THROWS_ON_CLOSE = 0;
  RECEIVE_RESULT = 1;
  EMPTY = new Symbol('EMPTY');
  OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
  OFFER_FAILED = new Symbol('OFFER_FAILED');
  POLL_FAILED = new Symbol('POLL_FAILED');
  ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
  HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  NO_VALUE = new Symbol('NO_VALUE');
  NONE = new Symbol('NONE');
  PENDING = new Symbol('PENDING');
  EMPTY_RESUMES = Kotlin.newArray(0, null);
  NULL = new Symbol('NULL');
  UNINITIALIZED = new Symbol('UNINITIALIZED');
  DONE = new Symbol('DONE');
  DEFAULT_CONCURRENCY_PROPERTY_NAME = 'kotlinx.coroutines.flow.defaultConcurrency';
  DEFAULT_CONCURRENCY = systemProp_0(DEFAULT_CONCURRENCY_PROPERTY_NAME, 16, 1, 2147483647);
  NO_DECISION = new Symbol('NO_DECISION');
  RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
  POINTERS_SHIFT = 16;
  CLOSED = new Symbol('CLOSED');
  UNDEFINED = new Symbol('UNDEFINED');
  REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
  MODE_ATOMIC = 0;
  MODE_CANCELLABLE = 1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_UNINITIALIZED = -1;
  REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
  NOT_SELECTED = new Symbol('NOT_SELECTED');
  ALREADY_SELECTED = new Symbol('ALREADY_SELECTED');
  UNDECIDED_1 = new Symbol('UNDECIDED');
  RESUMED_1 = new Symbol('RESUMED');
  selectOpSequenceNumber = new SeqNumber();
  LOCK_FAIL = new Symbol('LOCK_FAIL');
  UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
  LOCKED = new Symbol('LOCKED');
  UNLOCKED = new Symbol('UNLOCKED');
  EMPTY_LOCKED = new Empty_0(LOCKED);
  EMPTY_UNLOCKED = new Empty_0(UNLOCKED);
  MAX_SPIN_CYCLES = systemProp_0('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
  PERMIT = new Symbol('PERMIT');
  TAKEN = new Symbol('TAKEN');
  BROKEN = new Symbol('BROKEN');
  CANCELLED = new Symbol('CANCELLED');
  SEGMENT_SIZE = systemProp_0('kotlinx.coroutines.semaphore.segmentSize', 16);
  UNDEFINED_0 = 'undefined';
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  MAX_DELAY = L2147483647;
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
