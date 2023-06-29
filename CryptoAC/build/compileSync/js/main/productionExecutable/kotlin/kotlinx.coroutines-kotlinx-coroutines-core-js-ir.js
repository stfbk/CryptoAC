(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.sa;
  var THROW_CCE = kotlin_kotlin.$_$.he;
  var isObject = kotlin_kotlin.$_$.ha;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var plus = kotlin_kotlin.$_$.y8;
  var get = kotlin_kotlin.$_$.v8;
  var fold = kotlin_kotlin.$_$.u8;
  var minusKey = kotlin_kotlin.$_$.w8;
  var Continuation = kotlin_kotlin.$_$.t8;
  var classMeta = kotlin_kotlin.$_$.k9;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a4;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.m8;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l8;
  var interfaceMeta = kotlin_kotlin.$_$.v9;
  var isInterface = kotlin_kotlin.$_$.ea;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var toString = kotlin_kotlin.$_$.jf;
  var toString_0 = kotlin_kotlin.$_$.xa;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var hashCode = kotlin_kotlin.$_$.u9;
  var equals = kotlin_kotlin.$_$.n9;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o2;
  var Companion_getInstance = kotlin_kotlin.$_$.o4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.xe;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.p8;
  var Key_getInstance = kotlin_kotlin.$_$.z3;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.o8;
  var get_0 = kotlin_kotlin.$_$.q8;
  var minusKey_0 = kotlin_kotlin.$_$.r8;
  var ContinuationInterceptor = kotlin_kotlin.$_$.s8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var getStringHashCode = kotlin_kotlin.$_$.t9;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var Enum = kotlin_kotlin.$_$.vd;
  var startCoroutine = kotlin_kotlin.$_$.a9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ff;
  var Long = kotlin_kotlin.$_$.ae;
  var intercepted = kotlin_kotlin.$_$.n8;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.n4;
  var RuntimeException = kotlin_kotlin.$_$.ge;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.e9;
  var Error_0 = kotlin_kotlin.$_$.wd;
  var Error_init_$Init$ = kotlin_kotlin.$_$.e1;
  var Element = kotlin_kotlin.$_$.x8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.if;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var CancellationException = kotlin_kotlin.$_$.k8;
  var ArrayList = kotlin_kotlin.$_$.u4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  var anyToString = kotlin_kotlin.$_$.b9;
  var UnsupportedOperationException = kotlin_kotlin.$_$.te;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var addSuppressed = kotlin_kotlin.$_$.ue;
  var fillArrayVal = kotlin_kotlin.$_$.p9;
  var fill = kotlin_kotlin.$_$.i6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var NoSuchElementException = kotlin_kotlin.$_$.be;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var IllegalStateException = kotlin_kotlin.$_$.zd;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.p1;
  var arrayCopy = kotlin_kotlin.$_$.j5;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.f4;
  var toLong = kotlin_kotlin.$_$.va;
  var toLongOrNull = kotlin_kotlin.$_$.cd;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.y;
  var coerceIn = kotlin_kotlin.$_$.eb;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.a2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.lk(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.lk.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.gk(onCancelling, invokeImmediately, handler) : $super.gk.call(this, onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor($awaitCOROUTINE$0, '$awaitCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Job], VOID, VOID, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, VOID, VOID, VOID, [0]);
  function tryResume$default(value, idempotent, $super) {
    idempotent = idempotent === VOID ? null : idempotent;
    return $super === VOID ? this.zl(value, idempotent) : $super.zl.call(this, value, idempotent);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(RemoveOnCancel, 'RemoveOnCancel', classMeta, BeforeResumeCancelHandler);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor($awaitCOROUTINE$1, '$awaitCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, [0]);
  setMetadataFor(CompletableJob, 'CompletableJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_0, 'Key', objectMeta);
  setMetadataFor(Key_1, 'Key', objectMeta);
  setMetadataFor(CoroutineName, 'CoroutineName', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, VOID, [CoroutineScope]);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().pp(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_2, 'Key', objectMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete]);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, CompletableJob], VOID, VOID, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor($withTimeoutOrNullCOROUTINE$2, '$withTimeoutOrNullCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_3, 'Key', objectMeta);
  setMetadataFor(RemoveReceiveOnCancel, 'RemoveReceiveOnCancel', classMeta, BeforeResumeCancelHandler);
  setMetadataFor(Itr, 'Itr', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(ReceiveOrClosed, 'ReceiveOrClosed', interfaceMeta);
  setMetadataFor(Receive, 'Receive', classMeta, LinkedListNode, [LinkedListNode, ReceiveOrClosed]);
  setMetadataFor(ReceiveElement, 'ReceiveElement', classMeta, Receive);
  setMetadataFor(ReceiveElementWithUndeliveredHandler, 'ReceiveElementWithUndeliveredHandler', classMeta, ReceiveElement);
  setMetadataFor(ReceiveHasNext, 'ReceiveHasNext', classMeta, Receive);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.px(cause) : $super.px.call(this, cause);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractSendChannel, 'AbstractSendChannel', classMeta, VOID, [SendChannel], VOID, VOID, [1]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.lk(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.lk.call(this, cause);
    }
    return tmp;
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AbstractChannel, 'AbstractChannel', classMeta, AbstractSendChannel, [AbstractSendChannel, SendChannel, ReceiveChannel], VOID, VOID, [0, 1]);
  setMetadataFor(Send, 'Send', classMeta, LinkedListNode);
  setMetadataFor(SendBuffered, 'SendBuffered', classMeta, Send);
  setMetadataFor(Closed, 'Closed', classMeta, Send, [Send, ReceiveOrClosed]);
  setMetadataFor(SendElement, 'SendElement', classMeta, Send);
  setMetadataFor(SendElementWithUndeliveredHandler, 'SendElementWithUndeliveredHandler', classMeta, SendElement);
  setMetadataFor(ArrayChannel, 'ArrayChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(Failed, 'Failed', classMeta);
  setMetadataFor(Closed_0, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(ConflatedChannel, 'ConflatedChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(LinkedListChannel, 'LinkedListChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(RendezvousChannel, 'RendezvousChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$12, '$emitCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($firstOrNullCOROUTINE$11, '$firstOrNullCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(AtomicOp, 'AtomicOp', classMeta, OpDescriptor);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation]);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(Empty_0, 'Empty', classMeta);
  setMetadataFor(LockedQueue, 'LockedQueue', classMeta, LinkedListHead);
  setMetadataFor(LockWaiter, 'LockWaiter', classMeta, LinkedListNode);
  setMetadataFor(LockCont, 'LockCont', classMeta, LockWaiter);
  setMetadataFor(UnlockOp, 'UnlockOp', classMeta, AtomicOp);
  setMetadataFor(MutexImpl, 'MutexImpl', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(CloseableCoroutineDispatcher, 'CloseableCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler);
  setMetadataFor(WindowDispatcher$invokeOnTimeout$1, VOID, classMeta);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException);
  setMetadataFor(NoOpLock, 'NoOpLock', classMeta);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.aj(parentContext.a4(Key_getInstance_3()));
    }
    this.dj_1 = parentContext.h4(this);
  }
  protoOf(AbstractCoroutine).w3 = function () {
    return this.dj_1;
  };
  protoOf(AbstractCoroutine).ej = function () {
    return this.dj_1;
  };
  protoOf(AbstractCoroutine).fj = function () {
    return protoOf(JobSupport).fj.call(this);
  };
  protoOf(AbstractCoroutine).gj = function (value) {
  };
  protoOf(AbstractCoroutine).hj = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).ij = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).jj = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.hj(state.kj_1, state.mj());
    } else {
      this.gj((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).x3 = function (result) {
    var state = this.nj(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.oj(state);
  };
  protoOf(AbstractCoroutine).oj = function (state) {
    return this.pj(state);
  };
  protoOf(AbstractCoroutine).qj = function (exception) {
    handleCoroutineException(this.dj_1, exception);
  };
  protoOf(AbstractCoroutine).rj = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.dj_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).rj.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).rj.call(this);
  };
  protoOf(AbstractCoroutine).sj = function (start, receiver, block) {
    start.vj(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.yk() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.sj(start, coroutine, block);
    return coroutine;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.yk() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.sj(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).wk = function (exception) {
    handleCoroutineException(this.dj_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.fl_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).bk = function () {
    startCoroutineCancellable_0(this.fl_1, this);
  };
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ol_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$0).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            this.xh_1 = 1;
            suspendResult = this.ol_1.pl(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).tl = function ($completion) {
    var tmp = new $awaitCOROUTINE$0(this, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.xl_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).bk = function () {
    startCoroutineCancellable_0(this.xl_1, this);
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.em(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.hm_1 = handle;
  }
  protoOf(DisposeOnCancel).im = function (cause) {
    return this.hm_1.jm();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.im(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + this.hm_1 + ']';
  };
  function removeOnCancellation(_this__u8e3s4, node) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveOnCancel(node);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.em(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.qm();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.xm();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.ym_1 = node;
  }
  protoOf(RemoveOnCancel).im = function (cause) {
    this.ym_1.cn();
  };
  protoOf(RemoveOnCancel).invoke = function (cause) {
    return this.im(cause);
  };
  protoOf(RemoveOnCancel).toString = function () {
    return 'RemoveOnCancel[' + this.ym_1 + ']';
  };
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.yj();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.en_1)) {
      var tmp_0 = $this.sm_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).dn();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.sm_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.fn(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.w3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.um_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.um_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.um_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.um_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.w3().a4(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.hk(true, VOID, tmp$ret$1);
    $this.wm_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.sm_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gn($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.hn();
    $this.in(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.vm_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.vm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.nn()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.jn(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.kj_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.vm_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.en_1, onCancellation, idempotent);
          if (!$this.vm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.rn_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.hn();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.sm_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.tm_1 = this.sm_1.w3();
    this.um_1 = atomic$int$1(0);
    this.vm_1 = atomic$ref$1(Active_getInstance());
    this.wm_1 = null;
  }
  protoOf(CancellableContinuationImpl).tn = function () {
    return this.sm_1;
  };
  protoOf(CancellableContinuationImpl).w3 = function () {
    return this.tm_1;
  };
  protoOf(CancellableContinuationImpl).yj = function () {
    return this.vm_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).zj = function () {
    var tmp = this.yj();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).yl = function () {
    var tmp = this.yj();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).un = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.zj()) {
      handle.jm();
      this.wm_1 = NonDisposableHandle_getInstance();
    }
  };
  protoOf(CancellableContinuationImpl).xm = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.vm_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.rn_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.hn();
      return false;
    }
    this.um_1.kotlinx$atomicfu$value = 0;
    this.vm_1.kotlinx$atomicfu$value = Active_getInstance();
    return true;
  };
  protoOf(CancellableContinuationImpl).vn = function () {
    return this.yj();
  };
  protoOf(CancellableContinuationImpl).wn = function (takenState, cause) {
    var tmp0_loop = this.vm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.xn();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.yn(VOID, VOID, VOID, VOID, cause);
            if (this.vm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.zn(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.vm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, new CompletedContinuation(tmp1__anonymous__uwfjfc, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).in = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.vm_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this.vm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.ao(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.en_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).bo = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.in(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).ao = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.w3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).jn = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.w3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).co = function (parent) {
    return parent.ck();
  };
  protoOf(CancellableContinuationImpl).do = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.wm_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.yj();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.kj_1, this);
    if (get_isCancellableMode(this.en_1)) {
      var job = this.w3().a4(Key_getInstance_3());
      if (!(job == null) ? !job.fj() : false) {
        var cause = job.ck();
        this.wn(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.eo(state);
  };
  protoOf(CancellableContinuationImpl).x3 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.en_1);
  };
  protoOf(CancellableContinuationImpl).gm = function (value, onCancellation) {
    return resumeImpl(this, value, this.en_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).em = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.vm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this.vm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.fo()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kj_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.pn_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.xn()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.sn_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.yn(VOID, cancelHandler);
              if (this.vm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = new CompletedContinuation(tmp1__anonymous__uwfjfc, cancelHandler);
              if (this.vm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  protoOf(CancellableContinuationImpl).hn = function () {
    var tmp0_elvis_lhs = this.wm_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.jm();
    this.wm_1 = NonDisposableHandle_getInstance();
  };
  protoOf(CancellableContinuationImpl).zl = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  protoOf(CancellableContinuationImpl).bm = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).cm = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).dm = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.en_1);
  };
  protoOf(CancellableContinuationImpl).fm = function (_this__u8e3s4, value) {
    var tmp = this.sm_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lm_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.en_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).eo = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.on_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).go = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).go.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.sm_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.rj() + '(' + toDebugString(this.sm_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).rj = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.on_1 = result;
    this.pn_1 = cancelHandler;
    this.qn_1 = onCancellation;
    this.rn_1 = idempotentResume;
    this.sn_1 = cancelCause;
  }
  protoOf(CompletedContinuation).xn = function () {
    return !(this.sn_1 == null);
  };
  protoOf(CompletedContinuation).zn = function (cont, cause) {
    var tmp0_safe_receiver = this.pn_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.ao(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.qn_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.jn(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  protoOf(CompletedContinuation).jo = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).yn = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.on_1 : result;
    cancelHandler = cancelHandler === VOID ? this.pn_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.qn_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.rn_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.sn_1 : cancelCause;
    return $super === VOID ? this.jo(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.jo.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString(this.on_1) + ', cancelHandler=' + this.pn_1 + ', onCancellation=' + this.qn_1 + ', idempotentResume=' + toString(this.rn_1) + ', cancelCause=' + this.sn_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.on_1 == null ? 0 : hashCode(this.on_1);
    result = imul(result, 31) + (this.pn_1 == null ? 0 : hashCode(this.pn_1)) | 0;
    result = imul(result, 31) + (this.qn_1 == null ? 0 : hashCode(this.qn_1)) | 0;
    result = imul(result, 31) + (this.rn_1 == null ? 0 : hashCode(this.rn_1)) | 0;
    result = imul(result, 31) + (this.sn_1 == null ? 0 : hashCode(this.sn_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.on_1, tmp0_other_with_cast.on_1))
      return false;
    if (!equals(this.pn_1, tmp0_other_with_cast.pn_1))
      return false;
    if (!equals(this.qn_1, tmp0_other_with_cast.qn_1))
      return false;
    if (!equals(this.rn_1, tmp0_other_with_cast.rn_1))
      return false;
    if (!equals(this.sn_1, tmp0_other_with_cast.sn_1))
      return false;
    return true;
  };
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.ko_1 = handler;
  }
  protoOf(InvokeOnCancel).im = function (cause) {
    this.ko_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.im(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.ko_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.to_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$1).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 2;
            this.xh_1 = 1;
            suspendResult = this.to_1.pl(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.aj(parent);
  }
  protoOf(CompletableDeferredImpl).kk = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).tl = function ($completion) {
    var tmp = new $awaitCOROUTINE$1(this, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  protoOf(CompletableDeferredImpl).wo = function (value) {
    return this.xo(value);
  };
  protoOf(CompletableDeferredImpl).yo = function (exception) {
    return this.xo(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.kj_1 = cause;
    this.lj_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).mj = function () {
    return this.lj_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).fo = function () {
    return this.lj_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.kj_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.mn_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).nn = function () {
    return this.mn_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = new CompletedExceptionally(recoverStackTrace(exception, caller));
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = new CompletedExceptionally(exception);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.ap_1 = result;
    this.bp_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.ap_1) + ', onCancellation=' + this.bp_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.ap_1 == null ? 0 : hashCode(this.ap_1);
    result = imul(result, 31) + hashCode(this.bp_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.ap_1, tmp0_other_with_cast.ap_1))
      return false;
    if (!equals(this.bp_1, tmp0_other_with_cast.bp_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.kj_1, uCont);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp2_success = Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp3_success);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).dp = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).y3 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).z3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.fp();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.a4(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.gp(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.ip_1 = name;
  }
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.ip_1 + ')';
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.ip_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.ip_1 === tmp0_other_with_cast.ip_1))
      return false;
    return true;
  };
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.ej().a4(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.lk(cause);
  }
  function CoroutineScope() {
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  protoOf(GlobalScope).ej = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function MainScope() {
    return new ContextScope(SupervisorJob().h4(Dispatchers_getInstance().np()));
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.a4(Key_getInstance_3()) == null) ? context : context.h4(Job_0()));
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).vj = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.n4_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).yk = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.u(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.un();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance_0();
    if (timeMillis.u(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.w3()).op(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.do();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.a4(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.rp_1 = new Long(0, 0);
    this.sp_1 = false;
    this.tp_1 = null;
  }
  protoOf(EventLoop).up = function () {
    var tmp0_elvis_lhs = this.tp_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.yp();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.ho();
    return true;
  };
  protoOf(EventLoop).zp = function (task) {
    var tmp0_elvis_lhs = this.tp_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.tp_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.aq(task);
  };
  protoOf(EventLoop).bq = function () {
    return this.rp_1.u(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).cq = function () {
    var tmp0_safe_receiver = this.tp_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dq();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).eq = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.rp_1 = tmp0_this.rp_1.m6(delta(this, unconfined));
    if (!unconfined)
      this.sp_1 = true;
  };
  protoOf(EventLoop).fq = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.rp_1 = tmp0_this.rp_1.n6(delta(this, unconfined));
    if (this.rp_1.u(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.sp_1) {
      this.gq();
    }
  };
  protoOf(EventLoop).gq = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.hq_1 = new CommonThreadLocal();
  }
  protoOf(ThreadLocalEventLoop).iq = function () {
    var tmp0_elvis_lhs = this.hq_1.kq();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().hq_1.lq(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_2();
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).jm = function () {
  };
  protoOf(NonDisposableHandle).pk = function (cause) {
    return false;
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
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.a4(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.fj())
      throw _this__u8e3s4.ck();
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.lk(CancellationException_init_$Create$_0(message, cause));
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.a4(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_2(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.a4(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.lk(cause);
    }
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCompletion(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.fk(tmp$ret$1);
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.mq_1 = isActive;
  }
  protoOf(Empty).fj = function () {
    return this.mq_1;
  };
  protoOf(Empty).nq = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.mq_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).fj = function () {
    return true;
  };
  protoOf(NodeList).nq = function () {
    return this;
  };
  protoOf(NodeList).rq = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.h7('List{');
    tmp0_apply.h7(state);
    tmp0_apply.h7('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.zm_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.h7(', ');
        }
        tmp0_apply.g7(tmp0__anonymous__q1qw7t);
      }
      cur = cur.zm_1;
    }
    tmp0_apply.h7(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.rq('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).cr = function () {
    var tmp = this.br_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).fj = function () {
    return true;
  };
  protoOf(JobNode).nq = function () {
    return null;
  };
  protoOf(JobNode).jm = function () {
    return this.cr().jk(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.cr()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.hr_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.hr_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kj_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.ir();
    var exceptions = state.jr(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.wk(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).fo();
      }
    }
    if (!wasCancelling) {
      $this.tk(finalException);
    }
    $this.jj(finalState);
    var casSuccess = $this.yi_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.l()) {
      if (state.ir()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.ij() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.j(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.f();
        while (tmp0_iterator_0.g()) {
          var element_0 = tmp0_iterator_0.h();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.i() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.i());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.f();
    while (tmp0_iterator.g()) {
      var exception = tmp0_iterator.h();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.yi_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.tk(null);
    $this.jj(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.xj();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.jm();
      $this.wj(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kj_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.qj(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.nq();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.tk(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.zm_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, ex);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.zm_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.qj(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.uk())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.xj();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.pk(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.zm_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, ex);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.zm_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.qj(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.mq_1)
        return 0;
      if (!$this.yi_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.bk();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.yi_1.atomicfu$compareAndSet(state, state.kr_1))
          return -1;
        $this.bk();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.br_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.yj() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.vq(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.mq_1 ? list : new InactiveNodeList(list);
    $this.yi_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.dr(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.zm_1;
    var list = tmp$ret$0;
    $this.yi_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.yj();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.un();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.fk(tmp$ret$1));
    tmp$ret$2 = cancellable.do();
    var tmp0 = tmp$ret$2;
    return tmp0;
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.yj();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.lr();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.ij() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).rk();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.yj();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.mr())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.ir();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.nr(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.or();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.er_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.fj()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$7 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.nq();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.yi_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.lr())
      return get_COMPLETING_ALREADY();
    finishing.pr(true);
    if (!(finishing === state)) {
      if (!$this.yi_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.ir();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.nr(tmp0_safe_receiver.kj_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kj_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.nq();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.ur_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.hk(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.pj(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.bn_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.an_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.zm_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.bn_1;
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.ir() ? 'Cancelling' : state.lr() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.fj() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.er_1 = list;
    this.fr_1 = atomic$boolean$1(isCompleting);
    this.gr_1 = atomic$ref$1(rootCause);
    this.hr_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).nq = function () {
    return this.er_1;
  };
  protoOf(Finishing).pr = function (value) {
    this.fr_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).lr = function () {
    return this.fr_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).vr = function (value) {
    this.gr_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).or = function () {
    return this.gr_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).mr = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).ir = function () {
    return !(this.or() == null);
  };
  protoOf(Finishing).fj = function () {
    return this.or() == null;
  };
  protoOf(Finishing).jr = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.or();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.bb(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).nr = function (exception) {
    var rootCause = this.or();
    if (rootCause == null) {
      this.vr(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.ir() + ', completing=' + this.lr() + ', rootCause=' + this.or() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.er_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.as_1 = parent;
    this.bs_1 = state;
    this.cs_1 = child;
    this.ds_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).im = function (cause) {
    continueCompleting(this.as_1, this.bs_1, this.cs_1, this.ds_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.im(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.ks_1 = job;
  }
  protoOf(AwaitContinuation).co = function (parent) {
    var state = this.ks_1.yj();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.or();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.kj_1;
    return parent.ck();
  };
  protoOf(AwaitContinuation).rj = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.un();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.fk(tmp$ret$1));
    tmp$ret$2 = cont.do();
    var tmp0 = tmp$ret$2;
    return tmp0;
  }
  function JobSupport(active) {
    this.yi_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.zi_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).p = function () {
    return Key_getInstance_3();
  };
  protoOf(JobSupport).wj = function (value) {
    this.zi_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).xj = function () {
    return this.zi_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).aj = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.wj(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.ak();
    var handle = parent.sk(this);
    this.wj(handle);
    if (this.zj()) {
      handle.jm();
      this.wj(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).yj = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.yi_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.ls(this);
    }
  };
  protoOf(JobSupport).fj = function () {
    var state = this.yj();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.fj();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).zj = function () {
    var tmp = this.yj();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).ak = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.yj();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).bk = function () {
  };
  protoOf(JobSupport).ck = function () {
    var state = this.yj();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.or();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.dk(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.ek(state.kj_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).dk = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.ij() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).ek = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.dk(_this__u8e3s4, message) : $super.dk.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).fk = function (handler) {
    return this.gk(false, true, handler);
  };
  protoOf(JobSupport).gk = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.yj();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.mq_1) {
            if (this.yi_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.nq();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.or();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.lr();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kj_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).ik = function ($completion) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $completion.w3();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    var tmp0 = joinSuspend(this, $completion);
    return tmp0;
  };
  protoOf(JobSupport).jk = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.yj();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.yi_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.nq() == null)) {
            node.cn();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).kk = function () {
    return false;
  };
  protoOf(JobSupport).lk = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.ij() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.nk(tmp);
  };
  protoOf(JobSupport).ij = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).nk = function (cause) {
    this.qk(cause);
  };
  protoOf(JobSupport).ok = function (parentJob) {
    this.qk(parentJob);
  };
  protoOf(JobSupport).pk = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.qk(cause) ? this.vk() : false;
  };
  protoOf(JobSupport).ms = function (cause) {
    return this.qk(cause);
  };
  protoOf(JobSupport).qk = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.kk()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.pj(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).rk = function () {
    var state = this.yj();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.or();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.kj_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).xo = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.yj();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.pj(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).nj = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.yj();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).sk = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.hk(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).qj = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).tk = function (cause) {
  };
  protoOf(JobSupport).uk = function () {
    return false;
  };
  protoOf(JobSupport).vk = function () {
    return true;
  };
  protoOf(JobSupport).wk = function (exception) {
    return false;
  };
  protoOf(JobSupport).jj = function (state) {
  };
  protoOf(JobSupport).pj = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.xk() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).xk = function () {
    return this.rj() + '{' + stateString(this, this.yj()) + '}';
  };
  protoOf(JobSupport).rj = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).pl = function ($completion) {
    $l$loop: while (true) {
      var state = this.yj();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.kj_1;
          throw tmp0_recoverAndThrow;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    var tmp0 = awaitSuspend(this, $completion);
    return tmp0;
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.kr_1 = list;
  }
  protoOf(InactiveNodeList).nq = function () {
    return this.kr_1;
  };
  protoOf(InactiveNodeList).fj = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.kr_1.rq('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.ur_1 = childJob;
  }
  protoOf(ChildHandleNode).im = function (cause) {
    return this.ur_1.ok(this.cr());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.im(cause);
  };
  protoOf(ChildHandleNode).pk = function (cause) {
    return this.cr().pk(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.rs_1 = handler;
    this.ss_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).im = function (cause) {
    if (this.ss_1.atomicfu$compareAndSet(0, 1))
      this.rs_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.im(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.xs_1 = handler;
  }
  protoOf(InvokeOnCompletion).im = function (cause) {
    return this.xs_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.im(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.ct_1 = continuation;
  }
  protoOf(ResumeOnCompletion).im = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp1_resume = this.ct_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp1_resume.x3(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.im(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dt_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.it_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).im = function (cause) {
    var state = this.cr().yj();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp1_resumeWithException = this.it_1;
      var tmp2_resumeWithException = state.kj_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
      tmp1_resumeWithException.x3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp4_resume = this.it_1;
      var tmp = unboxState(state);
      var tmp5_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp3_success = Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp5_resume);
      tmp4_resume.x3(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.im(cause);
  };
  function IncompleteStateBox(state) {
    this.dt_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.nt_1 = child;
  }
  protoOf(ChildContinuation).im = function (cause) {
    this.nt_1.bo(this.nt_1.co(this.cr()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.im(cause);
  };
  function handlesException($this) {
    var tmp = $this.xj();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cr();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.vk())
        return true;
      var tmp_1 = parentJob.xj();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.cr();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.aj(parent);
    this.qt_1 = handlesException(this);
  }
  protoOf(JobImpl).kk = function () {
    return true;
  };
  protoOf(JobImpl).vk = function () {
    return this.qt_1;
  };
  protoOf(JobImpl).zo = function () {
    return this.xo(Unit_getInstance());
  };
  protoOf(JobImpl).yo = function (exception) {
    return this.xo(new CompletedExceptionally(exception));
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.vt_1 = handle;
  }
  protoOf(DisposeOnCompletion).im = function (cause) {
    return this.vt_1.jm();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.im(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.yt();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).yt = function () {
    var main = Dispatchers_getInstance().np();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.xt();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).pk = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.cu_1 = coroutine;
  }
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$2(timeMillis, block, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.w3(), uCont);
    this.su_1 = time;
  }
  protoOf(TimeoutCoroutine).ho = function () {
    this.ms(TimeoutCancellationException_0(this.su_1, this));
  };
  protoOf(TimeoutCoroutine).rj = function () {
    return protoOf(ScopeCoroutine).rj.call(this) + '(timeMillis=' + toString_0(this.su_1) + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.wu_1;
    var context = cont.w3();
    disposeOnCompletion(coroutine, get_delay(context).pp(coroutine.su_1, coroutine, coroutine.dj_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + toString_0(time) + ' ms', coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$2(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lu_1 = timeMillis;
    this.mu_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$2).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 3;
            if (this.lu_1.u(new Long(0, 0)) <= 0)
              return null;
            this.nu_1 = {_v: null};
            this.yh_1 = 2;
            this.xh_1 = 1;
            var tmp0__anonymous__q1qw7t = this;
            var timeoutCoroutine = new TimeoutCoroutine(this.lu_1, tmp0__anonymous__q1qw7t);
            this.nu_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.mu_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.yh_1 = 3;
            var tmp_0 = this.ai_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.ai_1;
              if (e.cu_1 === this.nu_1._v) {
                return null;
              }
              throw e;
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
        var e_0 = $p;
        if (this.yh_1 === 3) {
          throw e_0;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).dp = function (context) {
    return false;
  };
  protoOf(Unconfined).ep = function (context, block) {
    var yieldContext = context.a4(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.zu_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_3 = this;
  }
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_3();
    return Key_instance_3;
  }
  function get_EMPTY() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  function get_ENQUEUE_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return ENQUEUE_FAILED;
  }
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.dv_1 == null))
        throw recoverStackTrace_0(result.ev());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $completion) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.fv_1, receive)) {
          removeReceiveOnCancel($this.fv_1, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.fv_1.kv();
        $this.gv_1 = result;
        if (result instanceof Closed) {
          if (result.dv_1 == null) {
            var tmp$ret$2;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.x3(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp2_resumeWithException = result.ev();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            var tmp1_failure = Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
            cancellable.x3(tmp$ret$3);
            tmp$ret$4 = Unit_getInstance();
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.fv_1.lv_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.w3());
          }
          cancellable.gm(true, tmp);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$5 = cancellable.do();
    var tmp0 = tmp$ret$5;
    return tmp0;
  }
  function receiveSuspend($this, receiveMode, $completion) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.AbstractChannel.receiveSuspend.<anonymous>' call
      var tmp;
      if ($this.lv_1 == null) {
        tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.lv_1);
      }
      var receive = tmp;
      while (true) {
        if (enqueueReceive($this, receive)) {
          removeReceiveOnCancel($this, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.kv();
        if (result instanceof Closed) {
          receive.tv(result);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp_0 = receive.uv((result == null ? true : isObject(result)) ? result : THROW_CCE());
          cancellable.gm(tmp_0, receive.yv((result == null ? true : isObject(result)) ? result : THROW_CCE()));
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$1 = cancellable.do();
    var tmp0 = tmp$ret$1;
    return tmp0;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.zv(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.aw();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return cont.em(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.cw_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.bw_1 = receive;
  }
  protoOf(RemoveReceiveOnCancel).im = function (cause) {
    if (this.bw_1.cn()) {
      this.cw_1.dw();
    }
  };
  protoOf(RemoveReceiveOnCancel).invoke = function (cause) {
    return this.im(cause);
  };
  protoOf(RemoveReceiveOnCancel).toString = function () {
    return 'RemoveReceiveOnCancel[' + this.bw_1 + ']';
  };
  function Itr(channel) {
    this.fv_1 = channel;
    this.gv_1 = get_POLL_FAILED();
  }
  protoOf(Itr).ew = function ($completion) {
    if (!(this.gv_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.gv_1);
    this.gv_1 = this.fv_1.kv();
    if (!(this.gv_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.gv_1);
    var tmp0 = hasNextSuspend(this, $completion);
    return tmp0;
  };
  protoOf(Itr).h = function () {
    var result = this.gv_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.ev());
    if (!(result === get_POLL_FAILED())) {
      this.gv_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.rv_1 = cont;
    this.sv_1 = receiveMode;
  }
  protoOf(ReceiveElement).uv = function (value) {
    var tmp0_subject = this.sv_1;
    return tmp0_subject === 1 ? new ChannelResult(Companion_getInstance_1().gw(value)) : value;
  };
  protoOf(ReceiveElement).hw = function (value, otherOp) {
    var tmp = this.uv(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.rv_1.bm(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jw_1, this.yv(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.lw();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveElement).mw = function (value) {
    return this.rv_1.dm(get_RESUME_TOKEN());
  };
  protoOf(ReceiveElement).tv = function (closed) {
    if (this.sv_1 === 1) {
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp1_resume = this.rv_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      tmp$ret$0 = Companion_getInstance_1().nw(closed.dv_1);
      var tmp2_resume = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(new ChannelResult(tmp2_resume));
      tmp1_resume.x3(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp4_resumeWithException = this.rv_1;
      var tmp5_resumeWithException = closed.ev();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      var tmp3_failure = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp5_resumeWithException));
      tmp4_resumeWithException.x3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  protoOf(ReceiveElement).toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.sv_1 + ']';
  };
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.uw_1 = onUndeliveredElement;
  }
  protoOf(ReceiveElementWithUndeliveredHandler).yv = function (value) {
    return bindCancellationFun(this.uw_1, value, this.rv_1.w3());
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.yw_1 = iterator;
    this.zw_1 = cont;
  }
  protoOf(ReceiveHasNext).hw = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.zw_1.bm(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jw_1, this.yv(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.lw();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveHasNext).mw = function (value) {
    this.yw_1.gv_1 = value;
    this.zw_1.dm(get_RESUME_TOKEN());
  };
  protoOf(ReceiveHasNext).tv = function (closed) {
    var tmp;
    if (closed.dv_1 == null) {
      tmp = this.zw_1.am(false);
    } else {
      tmp = this.zw_1.cm(closed.ev());
    }
    var token = tmp;
    if (!(token == null)) {
      this.yw_1.gv_1 = closed;
      this.zw_1.dm(token);
    }
  };
  protoOf(ReceiveHasNext).yv = function (value) {
    var tmp0_safe_receiver = this.yw_1.fv_1.lv_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.zw_1.w3());
  };
  protoOf(ReceiveHasNext).toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  protoOf(AbstractChannel).kv = function () {
    while (true) {
      var tmp0_elvis_lhs = this.cx();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.gx(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.hx();
        return send.ix();
      }
      send.jx();
    }
  };
  protoOf(AbstractChannel).kx = function () {
    return !(this.lx() == null) ? this.bx() : false;
  };
  protoOf(AbstractChannel).mx = function ($completion) {
    var result = this.kv();
    var tmp;
    if (!(result === get_POLL_FAILED())) {
      tmp = !(result instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    var tmp0 = receiveSuspend(this, 0, $completion);
    return tmp0;
  };
  protoOf(AbstractChannel).zv = function (receive) {
    var tmp;
    if (this.ax()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.mv_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.an_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.vq(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.mv_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.an_1;
        tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        tmp$ret$4 = this.bx();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.vq(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(AbstractChannel).lk = function (cause) {
    if (this.kx())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.nx(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  protoOf(AbstractChannel).nx = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.px(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.qx(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(AbstractChannel).qx = function (wasClosed) {
    var tmp0_elvis_lhs = this.rx();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.an_1;
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.cn()) {
        previous.xq();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.sx(list, closed);
  };
  protoOf(AbstractChannel).sx = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.tx(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.i() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.j(i);
              tmp1__anonymous__uwfjfc.tx(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  protoOf(AbstractChannel).f = function () {
    return new Itr(this);
  };
  protoOf(AbstractChannel).ux = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = protoOf(AbstractSendChannel).ux.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.dw();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(AbstractChannel).aw = function () {
  };
  protoOf(AbstractChannel).dw = function () {
  };
  function _get_isFullImpl__v905xu($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.mv_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.zm_1;
    var tmp_0 = tmp$ret$0;
    if (!isInterface(tmp_0, ReceiveOrClosed)) {
      tmp = $this.wx();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.gy();
  }
  function sendSuspend($this, element, $completion) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendSuspend.<anonymous>' call
      loop: while (true) {
        if (_get_isFullImpl__v905xu($this)) {
          var send = $this.lv_1 == null ? new SendElement(element, cancellable) : new SendElementWithUndeliveredHandler(element, cancellable, $this.lv_1);
          var enqueueResult = $this.by(send);
          if (enqueueResult == null) {
            removeOnCancellation(cancellable, send);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_2;
          } else {
            if (enqueueResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, enqueueResult);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_2;
            } else {
              if (enqueueResult === get_ENQUEUE_FAILED()) {
              } else {
                if (enqueueResult instanceof Receive) {
                } else {
                  var tmp0_error = 'enqueueSend returned ' + toString(enqueueResult);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
        var offerResult = $this.xx(element);
        if (offerResult === get_OFFER_SUCCESS()) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.success' call
          var tmp1_success = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
          cancellable.x3(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp$ret$0 = Unit_getInstance();
          break $l$block_2;
        } else {
          if (offerResult === get_OFFER_FAILED())
            continue loop;
          else {
            if (offerResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, offerResult);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_2;
            } else {
              var tmp2_error = 'offerInternal returned ' + toString_0(offerResult);
              throw IllegalStateException_init_$Create$(toString_0(tmp2_error));
            }
          }
        }
      }
    }
    tmp$ret$3 = cancellable.do();
    var tmp0 = tmp$ret$3;
    return tmp0;
  }
  function helpCloseAndResumeWithSendException(_this__u8e3s4, $this, element, closed) {
    helpClose($this, closed);
    var sendException = closed.gy();
    var tmp0_safe_receiver = $this.lv_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, sendException);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_safe_receiver));
      _this__u8e3s4.x3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    }
    var tmp$ret$4;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp$ret$3;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure_0 = Companion_getInstance();
    tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(sendException));
    _this__u8e3s4.x3(tmp$ret$3);
    tmp$ret$4 = Unit_getInstance();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.nv_1.kotlinx$atomicfu$value;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.nv_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.an_1;
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.cn()) {
        previous.xq();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.tv(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.i() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = list.j(i);
              tmp2__anonymous__z9zvc9.tv(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.ey(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.mv_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.zm_1;
    var head = tmp$ret$0;
    if (head === $this.mv_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp1__get_prevNode__b1i0ed = $this.mv_1;
    tmp$ret$1 = tmp1__get_prevNode__b1i0ed.an_1;
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.mv_1;
    var cur = tmp0_forEach.zm_1;
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        var tmp1__anonymous__uwfjfc = cur;
        var tmp0 = size;
        size = tmp0 + 1 | 0;
      }
      cur = cur.zm_1;
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.ky_1 = element;
  }
  protoOf(SendBuffered).ix = function () {
    return this.ky_1;
  };
  protoOf(SendBuffered).gx = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.lw();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(SendBuffered).hx = function () {
  };
  protoOf(SendBuffered).tx = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  protoOf(SendBuffered).toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.ky_1 + ')';
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.lv_1 = onUndeliveredElement;
    this.mv_1 = new LinkedListHead();
    this.nv_1 = atomic$ref$1(null);
  }
  protoOf(AbstractSendChannel).xx = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.ux();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.hw(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.mw(element);
        return receive.ow();
      }
    }
  };
  protoOf(AbstractSendChannel).rx = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp0__get_prevNode__2ljhpg = this.mv_1;
    tmp$ret$0 = tmp0__get_prevNode__2ljhpg.an_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).lx = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.mv_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.zm_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).cx = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.mv_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.zm_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.wq();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).ly = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.mv_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.an_1;
      if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
        return tmp2__anonymous__z9zvc9;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.vq(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  protoOf(AbstractSendChannel).yx = function () {
    return !(this.rx() == null);
  };
  protoOf(AbstractSendChannel).zx = function (element, $completion) {
    if (this.xx(element) === get_OFFER_SUCCESS())
      return Unit_getInstance();
    var tmp0 = sendSuspend(this, element, $completion);
    return tmp0;
  };
  protoOf(AbstractSendChannel).ay = function (element) {
    var result = this.xx(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().gw(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.rx();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().my();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().nw(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().nw(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractSendChannel).by = function (send) {
    if (this.vx()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.mv_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.an_1;
        if (isInterface(tmp1__anonymous__uwfjfc, ReceiveOrClosed))
          return tmp1__anonymous__uwfjfc;
        tmp$ret$0 = true;
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.vq(send);
        tmp$ret$1 = true;
      }
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.mv_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.an_1;
        if (isInterface(tmp3__anonymous__ufb84q, ReceiveOrClosed))
          return tmp3__anonymous__ufb84q;
        tmp$ret$2 = true;
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        tmp$ret$4 = this.wx();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.vq(send);
        tmp$ret$3 = true;
      }
      if (!tmp$ret$3)
        return get_ENQUEUE_FAILED();
    }
    return null;
  };
  protoOf(AbstractSendChannel).px = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.mv_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.an_1;
      tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.vq(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp2__get_prevNode__jhgj3a = this.mv_1;
      tmp$ret$2 = tmp2__get_prevNode__jhgj3a.an_1;
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  protoOf(AbstractSendChannel).dy = function (handler) {
    if (!this.nv_1.atomicfu$compareAndSet(null, handler)) {
      var value = this.nv_1.kotlinx$atomicfu$value;
      if (value === get_HANDLER_INVOKED()) {
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init_$Create$('Another handler was already registered: ' + toString(value));
    } else {
      var closedToken = this.rx();
      if (!(closedToken == null) ? this.nv_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
        handler(closedToken.dv_1);
      }
    }
  };
  protoOf(AbstractSendChannel).ey = function (closed) {
  };
  protoOf(AbstractSendChannel).ux = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.mv_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.zm_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.wq();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.fy();
  };
  protoOf(AbstractSendChannel).fy = function () {
    return '';
  };
  function Send() {
    LinkedListNode.call(this);
  }
  protoOf(Send).jx = function () {
  };
  function ReceiveOrClosed() {
  }
  function Closed(closeCause) {
    Send.call(this);
    this.dv_1 = closeCause;
  }
  protoOf(Closed).gy = function () {
    var tmp0_elvis_lhs = this.dv_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).ev = function () {
    var tmp0_elvis_lhs = this.dv_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).ow = function () {
    return this;
  };
  protoOf(Closed).ix = function () {
    return this;
  };
  protoOf(Closed).gx = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.lw();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(Closed).hx = function () {
  };
  protoOf(Closed).hw = function (value, otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.lw();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(Closed).mw = function (value) {
  };
  protoOf(Closed).tx = function (closed) {
    return Unit_getInstance();
  };
  protoOf(Closed).toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.dv_1 + ']';
  };
  function Receive() {
    LinkedListNode.call(this);
  }
  protoOf(Receive).ow = function () {
    return get_OFFER_SUCCESS();
  };
  protoOf(Receive).yv = function (value) {
    return null;
  };
  function SendElement(pollResult, cont) {
    Send.call(this);
    this.qy_1 = pollResult;
    this.ry_1 = cont;
  }
  protoOf(SendElement).ix = function () {
    return this.qy_1;
  };
  protoOf(SendElement).gx = function (otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.ry_1.zl(Unit_getInstance(), tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jw_1);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.lw();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(SendElement).hx = function () {
    return this.ry_1.dm(get_RESUME_TOKEN());
  };
  protoOf(SendElement).tx = function (closed) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp1_resumeWithException = this.ry_1;
    var tmp2_resumeWithException = closed.gy();
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
    tmp1_resumeWithException.x3(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  protoOf(SendElement).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '(' + this.ix() + ')';
  };
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    SendElement.call(this, pollResult, cont);
    this.xy_1 = onUndeliveredElement;
  }
  protoOf(SendElementWithUndeliveredHandler).cn = function () {
    if (!protoOf(SendElement).cn.call(this))
      return false;
    this.jx();
    return true;
  };
  protoOf(SendElementWithUndeliveredHandler).jx = function () {
    callUndeliveredElement(this.xy_1, this.ix(), this.ry_1.w3());
  };
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function _init_properties_AbstractChannel_kt__sw8o27() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.bz_1) {
      $this.gz_1.kotlinx$atomicfu$value = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.cz_1;
    var tmp0 = tmp0_subject.n4_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.bz_1) {
      ensureCapacity($this, currentSize);
      $this.ez_1[($this.fz_1 + currentSize | 0) % $this.ez_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.ez_1[$this.fz_1 % $this.ez_1.length | 0] = null;
      $this.ez_1[($this.fz_1 + currentSize | 0) % $this.ez_1.length | 0] = element;
      $this.fz_1 = ($this.fz_1 + 1 | 0) % $this.ez_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.ez_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.ez_1.length, 2);
      var tmp1_min = $this.bz_1;
      tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(newSize), null);
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.ez_1[($this.fz_1 + i | 0) % $this.ez_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.ez_1 = newBuffer;
      $this.fz_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.bz_1 = capacity;
    this.cz_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.bz_1 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.bz_1 + ' was specified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.dz_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.bz_1;
    tmp$ret$1 = Math.min(tmp0_min, 8);
    var tmp1_arrayOfNulls = tmp$ret$1;
    tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var tmp2_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    fill(tmp2_apply, get_EMPTY());
    tmp$ret$3 = tmp2_apply;
    tmp.ez_1 = tmp$ret$3;
    this.fz_1 = 0;
    this.gz_1 = atomic$int$1(0);
  }
  protoOf(ArrayChannel).ax = function () {
    return false;
  };
  protoOf(ArrayChannel).bx = function () {
    return this.gz_1.kotlinx$atomicfu$value === 0;
  };
  protoOf(ArrayChannel).vx = function () {
    return false;
  };
  protoOf(ArrayChannel).wx = function () {
    return this.gz_1.kotlinx$atomicfu$value === this.bz_1 ? this.cz_1.equals(BufferOverflow_SUSPEND_getInstance()) : false;
  };
  protoOf(ArrayChannel).kx = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.dz_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).kx.call(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ArrayChannel).xx = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.dz_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.gz_1.kotlinx$atomicfu$value;
      var tmp0_safe_receiver = this.rx();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.ux();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.gz_1.kotlinx$atomicfu$value = size;
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).hw(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.gz_1.kotlinx$atomicfu$value = size;
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).mw(element);
    return ensureNotNull(receive).ow();
  };
  protoOf(ArrayChannel).by = function (send) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.dz_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueSend.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).by.call(this, send);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ArrayChannel).kv = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.dz_1;
    var size = this.gz_1.kotlinx$atomicfu$value;
    if (size === 0) {
      var tmp0_elvis_lhs = this.rx();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.ez_1[this.fz_1];
    this.ez_1[this.fz_1] = null;
    this.gz_1.kotlinx$atomicfu$value = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.bz_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.cx();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).gx(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).ix();
          break loop;
        }
        ensureNotNull(send).jx();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.gz_1.kotlinx$atomicfu$value = size;
      this.ez_1[(this.fz_1 + size | 0) % this.ez_1.length | 0] = replacement;
    }
    this.fz_1 = (this.fz_1 + 1 | 0) % this.ez_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (resumed) {
      ensureNotNull(send).hx();
    }
    return result;
  };
  protoOf(ArrayChannel).zv = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.dz_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).zv.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ArrayChannel).qx = function (wasClosed) {
    var onUndeliveredElement = this.lv_1;
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.dz_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.gz_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.ez_1[this.fz_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.ez_1[this.fz_1] = get_EMPTY();
        this.fz_1 = (this.fz_1 + 1 | 0) % this.ez_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.gz_1.kotlinx$atomicfu$value = 0;
    tmp$ret$0 = Unit_getInstance();
    protoOf(AbstractChannel).qx.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ArrayChannel).fy = function () {
    return '(buffer:capacity=' + this.bz_1 + ',size=' + this.gz_1.kotlinx$atomicfu$value + ')';
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function ReceiveChannel() {
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.hz_1 = cause;
  }
  protoOf(Closed_0).equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.hz_1, other.hz_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed_0).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.hz_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  protoOf(Closed_0).toString = function () {
    return 'Closed(' + this.hz_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.fw_1 = new Failed();
  }
  protoOf(Companion).gw = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).my = function () {
    return _ChannelResult___init__impl__siwsuf(this.fw_1);
  };
  protoOf(Companion).nw = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp0_subject = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp;
    if (tmp0_subject instanceof Closed_0) {
      tmp = toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.iz_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.iz_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.iz_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.iz_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.iz_1, other);
  };
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function Factory() {
    Factory_instance = this;
    this.jz_1 = 2147483647;
    this.kz_1 = 0;
    this.lz_1 = -1;
    this.mz_1 = -2;
    this.nz_1 = -3;
    this.oz_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.pz_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = 0;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp0_subject = capacity;
    var tmp_0;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp_0 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        // Inline function 'kotlin.require' call
        var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp_0 = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp_0 = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp_0 = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().pz_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp_0 = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp_0;
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
      tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.lk(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.uz_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.lv_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = callUndeliveredElementCatchingException(tmp0_safe_receiver, (old == null ? true : isObject(old)) ? old : THROW_CCE());
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.uz_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.tz_1 = new NoOpLock();
    this.uz_1 = get_EMPTY();
  }
  protoOf(ConflatedChannel).ax = function () {
    return false;
  };
  protoOf(ConflatedChannel).bx = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.tz_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    tmp$ret$0 = this.uz_1 === get_EMPTY();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ConflatedChannel).vx = function () {
    return false;
  };
  protoOf(ConflatedChannel).wx = function () {
    return false;
  };
  protoOf(ConflatedChannel).xx = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.tz_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.rx();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.uz_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.ux();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).hw(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).mw(element);
    return ensureNotNull(receive).ow();
  };
  protoOf(ConflatedChannel).kv = function () {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.tz_1;
    if (this.uz_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.rx();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.uz_1;
    this.uz_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  protoOf(ConflatedChannel).qx = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.tz_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    tmp$ret$0 = Unit_getInstance();
    protoOf(AbstractChannel).qx.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ConflatedChannel).zv = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.tz_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).zv.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ConflatedChannel).fy = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.tz_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    tmp$ret$0 = '(value=' + toString(this.uz_1) + ')';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(LinkedListChannel).ax = function () {
    return true;
  };
  protoOf(LinkedListChannel).bx = function () {
    return true;
  };
  protoOf(LinkedListChannel).vx = function () {
    return false;
  };
  protoOf(LinkedListChannel).wx = function () {
    return false;
  };
  protoOf(LinkedListChannel).xx = function (element) {
    while (true) {
      var result = protoOf(AbstractChannel).xx.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.ly(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  protoOf(LinkedListChannel).sx = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.lv_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.ky_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.tx(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.i() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.j(i);
              var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
              if (tmp0_subject_1 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.lv_1;
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1__anonymous__uwfjfc.ky_1;
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1__anonymous__uwfjfc.tx(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(RendezvousChannel).ax = function () {
    return true;
  };
  protoOf(RendezvousChannel).bx = function () {
    return true;
  };
  protoOf(RendezvousChannel).vx = function () {
    return true;
  };
  protoOf(RendezvousChannel).wx = function () {
    return true;
  };
  function asFlow(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j10_1 = _this__u8e3s4;
    this.k10_1 = collector;
  }
  protoOf($collectCOROUTINE$6).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 4;
            this.l10_1 = this.j10_1.n10_1.f();
            this.xh_1 = 1;
            continue $sm;
          case 1:
            if (!this.l10_1.g()) {
              this.xh_1 = 3;
              continue $sm;
            }

            this.m10_1 = this.l10_1.h();
            this.xh_1 = 2;
            suspendResult = this.k10_1.o10(this.m10_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  function _no_name_provided__qut3iv($this_asFlow) {
    this.n10_1 = $this_asFlow;
  }
  protoOf(_no_name_provided__qut3iv).p10 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$6(this, collector, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.q10_1 === owner))
      throw _this__u8e3s4;
  }
  function firstOrNull(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstOrNullCOROUTINE$11(_this__u8e3s4, predicate, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  }
  function $emitCOROUTINE$12(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l11_1 = _this__u8e3s4;
    this.m11_1 = value;
  }
  protoOf($emitCOROUTINE$12).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 4;
            this.xh_1 = 1;
            suspendResult = this.l11_1.o11_1(this.m11_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this.l11_1.p11_1._v = this.m11_1;
              tmp_0.n11_1 = false;
              this.xh_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.n11_1 = true;
              this.xh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var ARGUMENT = this.n11_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.l11_1);
            } else {
              this.xh_1 = 3;
              continue $sm;
            }

            ;
            break;
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
  function _no_name_provided__qut3iv_0($predicate, $result) {
    this.o11_1 = $predicate;
    this.p11_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_0).o10 = function (value, $completion) {
    var tmp = new $emitCOROUTINE$12(this, value, $completion);
    tmp.zh_1 = Unit_getInstance();
    tmp.ai_1 = null;
    return tmp.gi();
  };
  function $firstOrNullCOROUTINE$11(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z10_1 = _this__u8e3s4;
    this.a11_1 = predicate;
  }
  protoOf($firstOrNullCOROUTINE$11).gi = function () {
    var suspendResult = this.zh_1;
    $sm: do
      try {
        var tmp = this.xh_1;
        switch (tmp) {
          case 0:
            this.yh_1 = 4;
            this.b11_1 = {_v: null};
            var tmp_0 = this;
            tmp_0.c11_1 = new _no_name_provided__qut3iv_0(this.a11_1, this.b11_1);
            this.yh_1 = 2;
            this.xh_1 = 1;
            suspendResult = this.z10_1.p10(this.c11_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.yh_1 = 4;
            this.xh_1 = 3;
            continue $sm;
          case 2:
            this.yh_1 = 4;
            var tmp_1 = this.ai_1;
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.ai_1;
              checkOwnership(e, this.c11_1);
              this.xh_1 = 3;
              continue $sm;
            } else {
              throw this.ai_1;
            }

            break;
          case 3:
            this.yh_1 = 4;
            return this.b11_1._v;
          case 4:
            throw this.ai_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.yh_1 === 4) {
          throw e_0;
        } else {
          this.xh_1 = this.yh_1;
          this.ai_1 = e_0;
        }
      }
     while (true);
  };
  function ensureCapacity_0($this) {
    var currentSize = $this.vp_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.vp_1;
    var tmp1_copyInto = $this.wp_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.vp_1;
    var tmp4_copyInto = $this.vp_1.length - $this.wp_1 | 0;
    var tmp5_copyInto = $this.wp_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.vp_1 = newElements;
    $this.wp_1 = 0;
    $this.xp_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.vp_1 = tmp$ret$0;
    this.wp_1 = 0;
    this.xp_1 = 0;
  }
  protoOf(ArrayQueue).dq = function () {
    return this.wp_1 === this.xp_1;
  };
  protoOf(ArrayQueue).aq = function (element) {
    this.vp_1[this.xp_1] = element;
    this.xp_1 = (this.xp_1 + 1 | 0) & (this.vp_1.length - 1 | 0);
    if (this.xp_1 === this.wp_1) {
      ensureCapacity_0(this);
    }
  };
  protoOf(ArrayQueue).yp = function () {
    if (this.wp_1 === this.xp_1)
      return null;
    var element = this.vp_1[this.wp_1];
    this.vp_1[this.wp_1] = null;
    this.wp_1 = (this.wp_1 + 1 | 0) & (this.vp_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  function get_NO_DECISION() {
    _init_properties_Atomic_kt__5uvtv9();
    return NO_DECISION;
  }
  var NO_DECISION;
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  protoOf(OpDescriptor).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function AtomicOp() {
    OpDescriptor.call(this);
    this.q11_1 = atomic$ref$1(get_NO_DECISION());
  }
  protoOf(AtomicOp).r11 = function (decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = this.q11_1.kotlinx$atomicfu$value;
    if (!(current === get_NO_DECISION()))
      return current;
    if (this.q11_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return this.q11_1.kotlinx$atomicfu$value;
  };
  protoOf(AtomicOp).ls = function (affected) {
    var decision = this.q11_1.kotlinx$atomicfu$value;
    if (decision === get_NO_DECISION()) {
      decision = this.r11(this.s11((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.t11((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  var properties_initialized_Atomic_kt_vn225v;
  function _init_properties_Atomic_kt__5uvtv9() {
    if (properties_initialized_Atomic_kt_vn225v) {
    } else {
      properties_initialized_Atomic_kt_vn225v = true;
      NO_DECISION = new Symbol('NO_DECISION');
      RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
    }
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.lm_1.dp(tmp1_resumeCancellableWith.w3())) {
        tmp1_resumeCancellableWith.nm_1 = state;
        tmp1_resumeCancellableWith.en_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.lm_1.ep(tmp1_resumeCancellableWith.w3(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().iq();
          if (false ? eventLoop.cq() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.bq()) {
            tmp1_resumeCancellableWith.nm_1 = state;
            tmp1_resumeCancellableWith.en_1 = tmp0_executeUnconfined;
            eventLoop.zp(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.eq(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.w3().a4(Key_getInstance_3());
                if (!(job == null) ? !job.fj() : false) {
                  var cause = job.ck();
                  tmp1_resumeCancellableWith.wn(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.x3(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.mm_1;
                var tmp2_withContinuationContext = tmp1_resumeCancellableWith.om_1;
                tmp1_resumeCancellableWith.mm_1.x3(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.up())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                tmp1_resumeCancellableWith.io(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.fq(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.x3(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.pm_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.lm_1 = dispatcher;
    this.mm_1 = continuation;
    this.nm_1 = get_UNDEFINED();
    this.om_1 = threadContextElements(this.w3());
    this.pm_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).w3 = function () {
    return this.mm_1.w3();
  };
  protoOf(DispatchedContinuation).dn = function () {
    return !(this.pm_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).u11 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.pm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).fp = function () {
    this.u11();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.hn();
    }
  };
  protoOf(DispatchedContinuation).qm = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.pm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === null) {
        this.pm_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this.pm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
            return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          }
        } else {
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
            } else {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).gn = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.pm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this.pm_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this.pm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).fn = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.pm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this.pm_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this.pm_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).vn = function () {
    var state = this.nm_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.nm_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).tn = function () {
    return this;
  };
  protoOf(DispatchedContinuation).x3 = function (result) {
    var context = this.mm_1.w3();
    var state = toState_0(result);
    if (this.lm_1.dp(context)) {
      this.nm_1 = state;
      this.en_1 = get_MODE_ATOMIC();
      this.lm_1.ep(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().iq();
        if (false ? eventLoop.cq() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.bq()) {
          this.nm_1 = state;
          this.en_1 = tmp0_executeUnconfined;
          eventLoop.zp(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.eq(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.w3();
            var tmp1_withCoroutineContext = this.om_1;
            this.mm_1.x3(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.up())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.io(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.fq(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  protoOf(DispatchedContinuation).wn = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.bp_1(cause);
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.lm_1 + ', ' + toDebugString(this.mm_1) + ']';
  };
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.en_1 = resumeMode;
  }
  protoOf(DispatchedTask).wn = function (takenState, cause) {
  };
  protoOf(DispatchedTask).eo = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).go = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kj_1;
  };
  protoOf(DispatchedTask).ho = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.tn();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.mm_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.om_1;
      var context = continuation.w3();
      var state = this.vn();
      var exception = this.go(state);
      var job = (exception == null ? get_isCancellableMode(this.en_1) : false) ? context.a4(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.fj() : false) {
        var cause = job.ck();
        this.wn(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.x3(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.x3(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp4_resume = this.eo(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp3_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp4_resume);
          continuation.x3(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        var tmp2_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp3_failure = Companion_getInstance();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(e_0));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.io(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).io = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.tn().w3(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.tn();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.en_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.lm_1;
      var context = delegate.w3();
      if (dispatcher.dp(context)) {
        dispatcher.ep(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().iq();
    if (eventLoop.bq()) {
      eventLoop.zp(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.eq(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.tn(), true);
        $l$loop: while (true) {
          if (!eventLoop.up())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.io(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.fq(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.vn();
    var exception = _this__u8e3s4.go(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      var tmp2_success = _this__u8e3s4.eo(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp5_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp3_withContinuationContext = tmp5_resumeUndispatchedWith.mm_1;
      var tmp4_withContinuationContext = tmp5_resumeUndispatchedWith.om_1;
      tmp5_resumeUndispatchedWith.mm_1.x3(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.x3(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).a(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.a((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.a(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === ex) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.v11_1 = context;
  }
  protoOf(ContextScope).ej = function () {
    return this.v11_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.v11_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.wu_1 = uCont;
  }
  protoOf(ScopeCoroutine).uk = function () {
    return true;
  };
  protoOf(ScopeCoroutine).pj = function (state) {
    resumeCancellableWith(intercepted(this.wu_1), recoverResult(state, this.wu_1));
  };
  protoOf(ScopeCoroutine).oj = function (state) {
    this.wu_1.x3(recoverResult(state, this.wu_1));
  };
  function Symbol(symbol) {
    this.w11_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.w11_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).u4();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    var tmp;
    if (maxValue === VOID) {
      Companion_getInstance_0();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = maxValue;
    }
    maxValue = tmp;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var value = tmp_0;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var parsed = tmp_1;
    if (!(minValue.u(parsed) <= 0 ? parsed.u(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.x3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(fatalCompletion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.w3();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.si(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.x3(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp2_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp2_resume);
        actualCompletion.x3(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.si(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.nj(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.kj_1;
        var tmp_3;
        if (tmp0__anonymous__q1qw7t instanceof TimeoutCancellationException) {
          tmp_3 = tmp0__anonymous__q1qw7t.cu_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        tmp$ret$4 = !tmp_3;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.kj_1, _this__u8e3s4.wu_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.kj_1, _this__u8e3s4.wu_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  var LOCK_FAIL;
  function get_UNLOCK_FAIL() {
    _init_properties_Mutex_kt__jod56b();
    return UNLOCK_FAIL;
  }
  var UNLOCK_FAIL;
  function get_LOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return LOCKED;
  }
  var LOCKED;
  function get_UNLOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return UNLOCKED;
  }
  var UNLOCKED;
  function get_EMPTY_LOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return EMPTY_LOCKED;
  }
  var EMPTY_LOCKED;
  function get_EMPTY_UNLOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return EMPTY_UNLOCKED;
  }
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.x11_1 = locked;
  }
  protoOf(Empty_0).toString = function () {
    return 'Empty[' + toString_0(this.x11_1) + ']';
  };
  function Mutex(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$LockCont$tryResumeLockWaiter$lambda(this$0, this$1) {
    return function (it) {
      this$0.f12(this$1.b12_1);
      return Unit_getInstance();
    };
  }
  function lockSuspend($this, owner, $completion) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var waiter = new LockCont($this, owner, cancellable);
      // Inline function 'kotlinx.atomicfu.loop' call
      var tmp0_loop = $this.e12_1;
      while (true) {
        var tmp$ret$2;
        $l$block_1: {
          // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>.<anonymous>' call
          var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (tmp0_subject instanceof Empty_0) {
            if (!(tmp1__anonymous__uwfjfc.x11_1 === get_UNLOCKED())) {
              $this.e12_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, new LockedQueue(tmp1__anonymous__uwfjfc.x11_1));
            } else {
              var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
              if ($this.e12_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
                cancellable.gm(Unit_getInstance(), MutexImpl$lockSuspend$lambda($this, owner));
                tmp$ret$0 = Unit_getInstance();
                break $l$block_0;
              }
            }
          } else {
            if (tmp0_subject instanceof LockedQueue) {
              var curOwner = tmp1__anonymous__uwfjfc.j12_1;
              // Inline function 'kotlin.check' call
              var tmp0_check = !(curOwner === owner);
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check) {
                var tmp$ret$1;
                // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>.<anonymous>.<anonymous>' call
                tmp$ret$1 = 'Already locked by ' + toString(owner);
                var message = tmp$ret$1;
                throw IllegalStateException_init_$Create$(toString_0(message));
              }
              tmp1__anonymous__uwfjfc.vq(waiter);
              if ($this.e12_1.kotlinx$atomicfu$value === tmp1__anonymous__uwfjfc ? true : !waiter.k12()) {
                removeOnCancellation(cancellable, waiter);
                tmp$ret$0 = Unit_getInstance();
                break $l$block_0;
              }
              waiter = new LockCont($this, owner, cancellable);
              tmp$ret$2 = Unit_getInstance();
              break $l$block_1;
            } else {
              if (tmp0_subject instanceof OpDescriptor) {
                tmp1__anonymous__uwfjfc.ls($this);
              } else {
                var tmp1_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              }
            }
          }
        }
      }
    }
    tmp$ret$3 = cancellable.do();
    var tmp0 = tmp$ret$3;
    return tmp0;
  }
  function LockedQueue(owner) {
    LinkedListHead.call(this);
    this.j12_1 = owner;
  }
  protoOf(LockedQueue).toString = function () {
    return 'LockedQueue[' + toString_0(this.j12_1) + ']';
  };
  function LockWaiter($outer, owner) {
    this.d12_1 = $outer;
    LinkedListNode.call(this);
    this.b12_1 = owner;
    this.c12_1 = atomic$boolean$1(false);
  }
  protoOf(LockWaiter).k12 = function () {
    return this.c12_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(LockWaiter).jm = function () {
    this.cn();
  };
  function LockCont($outer, owner, cont) {
    this.u12_1 = $outer;
    LockWaiter.call(this, $outer, owner);
    this.t12_1 = cont;
  }
  protoOf(LockCont).l12 = function () {
    if (!this.k12())
      return false;
    return !(this.t12_1.bm(Unit_getInstance(), null, MutexImpl$LockCont$tryResumeLockWaiter$lambda(this.u12_1, this)) == null);
  };
  protoOf(LockCont).m12 = function () {
    return this.t12_1.dm(get_RESUME_TOKEN());
  };
  protoOf(LockCont).toString = function () {
    return 'LockCont[' + toString(this.b12_1) + ', ' + this.t12_1 + '] for ' + this.u12_1;
  };
  function UnlockOp(queue) {
    AtomicOp.call(this);
    this.w12_1 = queue;
  }
  protoOf(UnlockOp).x12 = function (affected) {
    return this.w12_1.dq() ? null : get_UNLOCK_FAIL();
  };
  protoOf(UnlockOp).s11 = function (affected) {
    return this.x12(affected instanceof MutexImpl ? affected : THROW_CCE());
  };
  protoOf(UnlockOp).y12 = function (affected, failure) {
    var update = failure == null ? get_EMPTY_UNLOCKED() : this.w12_1;
    affected.e12_1.atomicfu$compareAndSet(this, update);
  };
  protoOf(UnlockOp).t11 = function (affected, failure) {
    return this.y12(affected instanceof MutexImpl ? affected : THROW_CCE(), failure);
  };
  function MutexImpl$lockSuspend$lambda(this$0, $owner) {
    return function (it) {
      this$0.f12($owner);
      return Unit_getInstance();
    };
  }
  function MutexImpl(locked) {
    this.e12_1 = atomic$ref$1(locked ? get_EMPTY_LOCKED() : get_EMPTY_UNLOCKED());
  }
  protoOf(MutexImpl).z12 = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.e12_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.tryLock.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0) {
        if (!(tmp1__anonymous__uwfjfc.x11_1 === get_UNLOCKED()))
          return false;
        var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
        if (this.e12_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
          return true;
      } else {
        if (tmp0_subject instanceof LockedQueue) {
          // Inline function 'kotlin.check' call
          var tmp0_check = !(tmp1__anonymous__uwfjfc.j12_1 === owner);
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$0;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.tryLock.<anonymous>.<anonymous>' call
            tmp$ret$0 = 'Already locked by ' + toString(owner);
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
          return false;
        } else {
          if (tmp0_subject instanceof OpDescriptor) {
            tmp1__anonymous__uwfjfc.ls(this);
          } else {
            var tmp1_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).a13 = function (owner, $completion) {
    if (this.z12(owner))
      return Unit_getInstance();
    var tmp0 = lockSuspend(this, owner, $completion);
    return tmp0;
  };
  protoOf(MutexImpl).f12 = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.e12_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0) {
        if (owner == null) {
          // Inline function 'kotlin.check' call
          var tmp0_check = !(tmp1__anonymous__uwfjfc.x11_1 === get_UNLOCKED());
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$0;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
            tmp$ret$0 = 'Mutex is not locked';
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
        } else {
          // Inline function 'kotlin.check' call
          var tmp1_check = tmp1__anonymous__uwfjfc.x11_1 === owner;
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp1_check) {
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
            tmp$ret$1 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__uwfjfc.x11_1) + ' but expected ' + toString(owner);
            var message_0 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_0(message_0));
          }
        }
        if (this.e12_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_EMPTY_UNLOCKED()))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.ls(this);
        } else {
          if (tmp0_subject instanceof LockedQueue) {
            if (!(owner == null)) {
              // Inline function 'kotlin.check' call
              var tmp2_check = tmp1__anonymous__uwfjfc.j12_1 === owner;
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp2_check) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
                tmp$ret$2 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__uwfjfc.j12_1) + ' but expected ' + toString(owner);
                var message_1 = tmp$ret$2;
                throw IllegalStateException_init_$Create$(toString_0(message_1));
              }
            }
            var waiter = tmp1__anonymous__uwfjfc.yp();
            if (waiter == null) {
              var op = new UnlockOp(tmp1__anonymous__uwfjfc);
              if (this.e12_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, op) ? op.ls(this) == null : false)
                return Unit_getInstance();
            } else {
              if ((waiter instanceof LockWaiter ? waiter : THROW_CCE()).l12()) {
                var tmp = tmp1__anonymous__uwfjfc;
                var tmp1_elvis_lhs = waiter.b12_1;
                tmp.j12_1 = tmp1_elvis_lhs == null ? get_LOCKED() : tmp1_elvis_lhs;
                waiter.m12();
                return Unit_getInstance();
              }
            }
          } else {
            var tmp3_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp3_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).toString = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.e12_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.toString.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0)
        return 'Mutex[' + toString_0(tmp1__anonymous__uwfjfc.x11_1) + ']';
      else {
        if (tmp0_subject instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.ls(this);
        } else {
          if (tmp0_subject instanceof LockedQueue)
            return 'Mutex[' + toString_0(tmp1__anonymous__uwfjfc.j12_1) + ']';
          else {
            var tmp0_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (properties_initialized_Mutex_kt_yv4p3j) {
    } else {
      properties_initialized_Mutex_kt_yv4p3j = true;
      LOCK_FAIL = new Symbol('LOCK_FAIL');
      UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
      LOCKED = new Symbol('LOCKED');
      UNLOCKED = new Symbol('UNLOCKED');
      EMPTY_LOCKED = new Empty_0(get_LOCKED());
      EMPTY_UNLOCKED = new Empty_0(get_UNLOCKED());
    }
  }
  function CloseableCoroutineDispatcher() {
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().jp_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.ej().h4(context);
    return (!(combined === Dispatchers_getInstance().jp_1) ? combined.a4(Key_getInstance()) == null : false) ? combined.h4(Dispatchers_getInstance().jp_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).sd();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.jp_1 = createDefaultDispatcher();
    this.kp_1 = Unconfined_getInstance();
    this.lp_1 = new JsMainDispatcher(this.jp_1, false);
    this.mp_1 = null;
  }
  protoOf(Dispatchers).np = function () {
    var tmp0_elvis_lhs = this.mp_1;
    return tmp0_elvis_lhs == null ? this.lp_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.e13_1 = delegate;
    this.f13_1 = invokeImmediately;
    this.g13_1 = this.f13_1 ? this : new JsMainDispatcher(this.e13_1, true);
  }
  protoOf(JsMainDispatcher).xt = function () {
    return this.g13_1;
  };
  protoOf(JsMainDispatcher).dp = function (context) {
    return !this.f13_1;
  };
  protoOf(JsMainDispatcher).ep = function (context, block) {
    return this.e13_1.ep(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.yt();
    return tmp0_elvis_lhs == null ? this.e13_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).ep = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.l13_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.l13_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.l13_1, this.l13_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.l13_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).o13 = function () {
    process.nextTick(this.x13_1.u13_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).o13 = function () {
    setTimeout(this.x13_1.u13_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.f14();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.v13_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.u13_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).g14 = function () {
    this.v13_1.o13();
  };
  protoOf(ScheduledMessageQueue).h14 = function () {
    setTimeout(this.u13_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.ho();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.fm(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.x13_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).ep = function (context, block) {
    this.x13_1.i14(block);
  };
  protoOf(SetTimeoutBasedDispatcher).pp = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).op = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.em(tmp$ret$1);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.d14_1 = 16;
    this.e14_1 = false;
  }
  protoOf(MessageQueue).i14 = function (element) {
    this.aq(element);
    if (!this.e14_1) {
      this.e14_1 = true;
      this.g14();
    }
  };
  protoOf(MessageQueue).f14 = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.d14_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.yp();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.ho();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.dq()) {
        this.e14_1 = false;
      } else {
        this.h14();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).u4();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.j14_1 = handle;
  }
  protoOf(ClearTimeout).jm = function () {
    clearTimeout(this.j14_1);
  };
  protoOf(ClearTimeout).im = function (cause) {
    this.jm();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.im(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.j14_1 + ']';
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.fm(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.ho();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.k14_1 = this$0;
    this.l14_1 = $handle;
  }
  protoOf(WindowDispatcher$invokeOnTimeout$1).jm = function () {
    this.k14_1.n14_1.clearTimeout(this.l14_1);
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.n14_1 = window_0;
    this.o14_1 = new WindowMessageQueue(this.n14_1);
  }
  protoOf(WindowDispatcher).ep = function (context, block) {
    return this.o14_1.i14(block);
  };
  protoOf(WindowDispatcher).op = function (timeMillis, continuation) {
    this.n14_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  protoOf(WindowDispatcher).pp = function (timeMillis, block, context) {
    var handle = this.n14_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.u14_1 ? event.data == this$0.v14_1 : false) {
        event.stopPropagation();
        this$0.f14();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.f14();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.u14_1 = window_0;
    this.v14_1 = 'dispatchCoroutine';
    this.u14_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).g14 = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).h14 = function () {
    this.u14_1.postMessage(this.v14_1, '*');
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    captureStack(this, AbortFlowException);
    this.q10_1 = owner;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).dq = function () {
    return this.zm_1 === this;
  };
  protoOf(LinkedListHead).cn = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.zm_1 = this;
    this.an_1 = this;
    this.bn_1 = false;
  }
  protoOf(LinkedListNode).vq = function (node) {
    var prev = this.an_1;
    node.zm_1 = this;
    node.an_1 = prev;
    prev.zm_1 = node;
    this.an_1 = node;
  };
  protoOf(LinkedListNode).cn = function () {
    return this.wq();
  };
  protoOf(LinkedListNode).wq = function () {
    if (this.bn_1)
      return false;
    var prev = this.an_1;
    var next = this.zm_1;
    prev.zm_1 = next;
    next.an_1 = prev;
    this.bn_1 = true;
    return true;
  };
  protoOf(LinkedListNode).dr = function (node) {
    if (!(this.zm_1 === this))
      return false;
    this.vq(node);
    return true;
  };
  protoOf(LinkedListNode).xq = function () {
  };
  protoOf(LinkedListNode).yp = function () {
    var next = this.zm_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    var tmp0_check = next.wq();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstOrNull.<anonymous>' call
      tmp$ret$0 = 'Should remove';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return next;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.jq_1 = null;
  }
  protoOf(CommonThreadLocal).kq = function () {
    var tmp = this.jq_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).lq = function (value) {
    this.jq_1 = value;
  };
  //region block: post-declaration
  protoOf(JobSupport).hk = invokeOnCompletion$default;
  protoOf(JobSupport).mk = cancel$default;
  protoOf(JobSupport).h4 = plus;
  protoOf(JobSupport).a4 = get;
  protoOf(JobSupport).g4 = fold;
  protoOf(JobSupport).f4 = minusKey;
  protoOf(AbstractCoroutine).hk = invokeOnCompletion$default;
  protoOf(AbstractCoroutine).mk = cancel$default;
  protoOf(AbstractCoroutine).h4 = plus;
  protoOf(AbstractCoroutine).a4 = get;
  protoOf(AbstractCoroutine).g4 = fold;
  protoOf(AbstractCoroutine).f4 = minusKey;
  protoOf(StandaloneCoroutine).hk = invokeOnCompletion$default;
  protoOf(StandaloneCoroutine).mk = cancel$default;
  protoOf(StandaloneCoroutine).h4 = plus;
  protoOf(StandaloneCoroutine).a4 = get;
  protoOf(StandaloneCoroutine).g4 = fold;
  protoOf(StandaloneCoroutine).f4 = minusKey;
  protoOf(LazyStandaloneCoroutine).hk = invokeOnCompletion$default;
  protoOf(LazyStandaloneCoroutine).mk = cancel$default;
  protoOf(LazyStandaloneCoroutine).h4 = plus;
  protoOf(LazyStandaloneCoroutine).a4 = get;
  protoOf(LazyStandaloneCoroutine).g4 = fold;
  protoOf(LazyStandaloneCoroutine).f4 = minusKey;
  protoOf(DeferredCoroutine).hk = invokeOnCompletion$default;
  protoOf(DeferredCoroutine).mk = cancel$default;
  protoOf(DeferredCoroutine).h4 = plus;
  protoOf(DeferredCoroutine).a4 = get;
  protoOf(DeferredCoroutine).g4 = fold;
  protoOf(DeferredCoroutine).f4 = minusKey;
  protoOf(LazyDeferredCoroutine).hk = invokeOnCompletion$default;
  protoOf(LazyDeferredCoroutine).mk = cancel$default;
  protoOf(LazyDeferredCoroutine).h4 = plus;
  protoOf(LazyDeferredCoroutine).a4 = get;
  protoOf(LazyDeferredCoroutine).g4 = fold;
  protoOf(LazyDeferredCoroutine).f4 = minusKey;
  protoOf(CancellableContinuationImpl).am = tryResume$default;
  protoOf(CompletableDeferredImpl).hk = invokeOnCompletion$default;
  protoOf(CompletableDeferredImpl).mk = cancel$default;
  protoOf(CompletableDeferredImpl).h4 = plus;
  protoOf(CompletableDeferredImpl).a4 = get;
  protoOf(CompletableDeferredImpl).g4 = fold;
  protoOf(CompletableDeferredImpl).f4 = minusKey;
  protoOf(CoroutineDispatcher).a4 = get_0;
  protoOf(CoroutineDispatcher).g4 = fold;
  protoOf(CoroutineDispatcher).f4 = minusKey_0;
  protoOf(CoroutineDispatcher).h4 = plus;
  protoOf(CoroutineName).a4 = get;
  protoOf(CoroutineName).g4 = fold;
  protoOf(CoroutineName).f4 = minusKey;
  protoOf(CoroutineName).h4 = plus;
  protoOf(EventLoop).h4 = plus;
  protoOf(EventLoop).a4 = get_0;
  protoOf(EventLoop).g4 = fold;
  protoOf(EventLoop).f4 = minusKey_0;
  protoOf(AwaitContinuation).am = tryResume$default;
  protoOf(JobImpl).hk = invokeOnCompletion$default;
  protoOf(JobImpl).mk = cancel$default;
  protoOf(JobImpl).h4 = plus;
  protoOf(JobImpl).a4 = get;
  protoOf(JobImpl).g4 = fold;
  protoOf(JobImpl).f4 = minusKey;
  protoOf(MainCoroutineDispatcher).h4 = plus;
  protoOf(MainCoroutineDispatcher).a4 = get_0;
  protoOf(MainCoroutineDispatcher).g4 = fold;
  protoOf(MainCoroutineDispatcher).f4 = minusKey_0;
  protoOf(SupervisorJobImpl).hk = invokeOnCompletion$default;
  protoOf(SupervisorJobImpl).mk = cancel$default;
  protoOf(SupervisorJobImpl).h4 = plus;
  protoOf(SupervisorJobImpl).a4 = get;
  protoOf(SupervisorJobImpl).g4 = fold;
  protoOf(SupervisorJobImpl).f4 = minusKey;
  protoOf(ScopeCoroutine).hk = invokeOnCompletion$default;
  protoOf(ScopeCoroutine).mk = cancel$default;
  protoOf(ScopeCoroutine).h4 = plus;
  protoOf(ScopeCoroutine).a4 = get;
  protoOf(ScopeCoroutine).g4 = fold;
  protoOf(ScopeCoroutine).f4 = minusKey;
  protoOf(TimeoutCoroutine).hk = invokeOnCompletion$default;
  protoOf(TimeoutCoroutine).mk = cancel$default;
  protoOf(TimeoutCoroutine).h4 = plus;
  protoOf(TimeoutCoroutine).a4 = get;
  protoOf(TimeoutCoroutine).g4 = fold;
  protoOf(TimeoutCoroutine).f4 = minusKey;
  protoOf(Unconfined).h4 = plus;
  protoOf(Unconfined).a4 = get_0;
  protoOf(Unconfined).g4 = fold;
  protoOf(Unconfined).f4 = minusKey_0;
  protoOf(AbstractSendChannel).cy = close$default;
  protoOf(AbstractChannel).ox = cancel$default_0;
  protoOf(AbstractChannel).cy = close$default;
  protoOf(ArrayChannel).ox = cancel$default_0;
  protoOf(ArrayChannel).cy = close$default;
  protoOf(ConflatedChannel).ox = cancel$default_0;
  protoOf(ConflatedChannel).cy = close$default;
  protoOf(LinkedListChannel).ox = cancel$default_0;
  protoOf(LinkedListChannel).cy = close$default;
  protoOf(RendezvousChannel).ox = cancel$default_0;
  protoOf(RendezvousChannel).cy = close$default;
  protoOf(JsMainDispatcher).h4 = plus;
  protoOf(JsMainDispatcher).a4 = get_0;
  protoOf(JsMainDispatcher).g4 = fold;
  protoOf(JsMainDispatcher).f4 = minusKey_0;
  protoOf(UnconfinedEventLoop).h4 = plus;
  protoOf(UnconfinedEventLoop).a4 = get_0;
  protoOf(UnconfinedEventLoop).g4 = fold;
  protoOf(UnconfinedEventLoop).f4 = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).h4 = plus;
  protoOf(SetTimeoutBasedDispatcher).a4 = get_0;
  protoOf(SetTimeoutBasedDispatcher).g4 = fold;
  protoOf(SetTimeoutBasedDispatcher).f4 = minusKey_0;
  protoOf(NodeDispatcher).h4 = plus;
  protoOf(NodeDispatcher).a4 = get_0;
  protoOf(NodeDispatcher).g4 = fold;
  protoOf(NodeDispatcher).f4 = minusKey_0;
  protoOf(SetTimeoutDispatcher).h4 = plus;
  protoOf(SetTimeoutDispatcher).a4 = get_0;
  protoOf(SetTimeoutDispatcher).g4 = fold;
  protoOf(SetTimeoutDispatcher).f4 = minusKey_0;
  protoOf(WindowDispatcher).h4 = plus;
  protoOf(WindowDispatcher).a4 = get_0;
  protoOf(WindowDispatcher).g4 = fold;
  protoOf(WindowDispatcher).f4 = minusKey_0;
  //endregion
  //region block: init
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = firstOrNull;
  _.$_$.c = delay;
  _.$_$.d = withTimeoutOrNull;
  _.$_$.e = cancel$default;
  _.$_$.f = invokeOnCompletion$default;
  _.$_$.g = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.h = Factory_getInstance;
  _.$_$.i = Key_getInstance_0;
  _.$_$.j = Key_getInstance_1;
  _.$_$.k = Dispatchers_getInstance;
  _.$_$.l = GlobalScope_getInstance;
  _.$_$.m = Key_getInstance_3;
  _.$_$.n = ChannelResult;
  _.$_$.o = Channel;
  _.$_$.p = ClosedReceiveChannelException;
  _.$_$.q = ClosedSendChannelException;
  _.$_$.r = cancelConsumed;
  _.$_$.s = asFlow;
  _.$_$.t = LinkedListNode;
  _.$_$.u = recoverStackTrace;
  _.$_$.v = Mutex;
  _.$_$.w = CancellableContinuationImpl;
  _.$_$.x = CloseableCoroutineDispatcher;
  _.$_$.y = CompletableDeferred;
  _.$_$.z = CompletableJob;
  _.$_$.a1 = CoroutineName;
  _.$_$.b1 = CoroutineScope_0;
  _.$_$.c1 = CoroutineScope;
  _.$_$.d1 = Job_0;
  _.$_$.e1 = Job;
  _.$_$.f1 = get_MODE_CANCELLABLE;
  _.$_$.g1 = MainScope;
  _.$_$.h1 = SupervisorJob;
  _.$_$.i1 = async;
  _.$_$.j1 = cancel;
  _.$_$.k1 = cancel_2;
  _.$_$.l1 = cancel_0;
  _.$_$.m1 = cancel_1;
  _.$_$.n1 = get_job;
  _.$_$.o1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
