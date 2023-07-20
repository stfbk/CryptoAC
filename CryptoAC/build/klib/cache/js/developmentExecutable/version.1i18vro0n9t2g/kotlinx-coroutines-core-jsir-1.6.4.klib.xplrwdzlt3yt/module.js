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
  var protoOf = kotlin_kotlin.$_$.sb;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var isObject = kotlin_kotlin.$_$.hb;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var plus = kotlin_kotlin.$_$.v9;
  var get = kotlin_kotlin.$_$.r9;
  var fold = kotlin_kotlin.$_$.q9;
  var minusKey = kotlin_kotlin.$_$.s9;
  var Continuation = kotlin_kotlin.$_$.p9;
  var classMeta = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var Annotation = kotlin_kotlin.$_$.mf;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.h4;
  var CoroutineImpl = kotlin_kotlin.$_$.w9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g9;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.i9;
  var intercepted = kotlin_kotlin.$_$.j9;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var isInterface = kotlin_kotlin.$_$.eb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var toString = kotlin_kotlin.$_$.jh;
  var toString_0 = kotlin_kotlin.$_$.xb;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.rb;
  var hashCode = kotlin_kotlin.$_$.ua;
  var equals = kotlin_kotlin.$_$.na;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.t2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.v2;
  var Companion_getInstance = kotlin_kotlin.$_$.v4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s2;
  var createFailure = kotlin_kotlin.$_$.vg;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.l9;
  var Key_getInstance = kotlin_kotlin.$_$.g4;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.k9;
  var get_0 = kotlin_kotlin.$_$.m9;
  var minusKey_0 = kotlin_kotlin.$_$.n9;
  var ContinuationInterceptor = kotlin_kotlin.$_$.o9;
  var Key = kotlin_kotlin.$_$.u9;
  var Element = kotlin_kotlin.$_$.t9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var getStringHashCode = kotlin_kotlin.$_$.ta;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var THROW_ISE = kotlin_kotlin.$_$.gg;
  var Enum = kotlin_kotlin.$_$.tf;
  var startCoroutine = kotlin_kotlin.$_$.z9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.dh;
  var startCoroutine_0 = kotlin_kotlin.$_$.aa;
  var Long = kotlin_kotlin.$_$.yf;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u4;
  var RuntimeException = kotlin_kotlin.$_$.eg;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.e2;
  var captureStack = kotlin_kotlin.$_$.ea;
  var Error_0 = kotlin_kotlin.$_$.uf;
  var Error_init_$Init$ = kotlin_kotlin.$_$.i1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.gh;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var CancellationException = kotlin_kotlin.$_$.f9;
  var ArrayList = kotlin_kotlin.$_$.b5;
  var SequenceScope = kotlin_kotlin.$_$.tc;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.z1;
  var sequence = kotlin_kotlin.$_$.xc;
  var anyToString = kotlin_kotlin.$_$.ba;
  var SuspendFunction1 = kotlin_kotlin.$_$.x9;
  var UnsupportedOperationException = kotlin_kotlin.$_$.rg;
  var objectCreate = kotlin_kotlin.$_$.qb;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.y;
  var returnIfSuspended = kotlin_kotlin.$_$.i;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var isSuspendFunction = kotlin_kotlin.$_$.jb;
  var addSuppressed = kotlin_kotlin.$_$.sg;
  var fillArrayVal = kotlin_kotlin.$_$.pa;
  var fill = kotlin_kotlin.$_$.z6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var ensureNotNull = kotlin_kotlin.$_$.wg;
  var IllegalStateException = kotlin_kotlin.$_$.xf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var NoSuchElementException = kotlin_kotlin.$_$.zf;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.c2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.m4;
  var arrayCopy = kotlin_kotlin.$_$.v5;
  var toLong = kotlin_kotlin.$_$.vb;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var toLongOrNull = kotlin_kotlin.$_$.xe;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.h9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.a1;
  var coerceIn = kotlin_kotlin.$_$.hc;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.h2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_4b7aim_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_4b7aim_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel() {
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_as6ug7_k$(cause) : $super.cancel_as6ug7_k$.call(this, cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.invokeOnCompletion_npwpyn_k$(onCancelling, invokeImmediately, handler) : $super.invokeOnCompletion_npwpyn_k$.call(this, onCancelling, invokeImmediately, handler);
  }
  function plus_0(other) {
    return other;
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, [0]);
  setMetadataFor(ChildJob, 'ChildJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(SelectClause0, 'SelectClause0', interfaceMeta);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ChildJob, ParentJob, SelectClause0], VOID, VOID, [0]);
  setMetadataFor(CoroutineScope_0, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope_0], VOID, VOID, [0]);
  setMetadataFor(InternalCoroutinesApi, 'InternalCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor(FlowPreview, 'FlowPreview', classMeta, VOID, [Annotation]);
  setMetadataFor(ExperimentalCoroutinesApi, 'ExperimentalCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor(DelicateCoroutinesApi, 'DelicateCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor($awaitCOROUTINE$0, '$awaitCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(Deferred, 'Deferred', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(SelectClause1, 'SelectClause1', interfaceMeta);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Deferred, SelectClause1], VOID, VOID, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, [0]);
  function tryResume$default(value, idempotent, $super) {
    idempotent = idempotent === VOID ? null : idempotent;
    return $super === VOID ? this.tryResume_10oxem_k$(value, idempotent) : $super.tryResume_10oxem_k$.call(this, value, idempotent);
  }
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_as6ug7_k$(cause) : $super.cancel_as6ug7_k$.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(RemoveOnCancel, 'RemoveOnCancel', classMeta, BeforeResumeCancelHandler);
  setMetadataFor(Runnable, 'Runnable', interfaceMeta);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, VOID, [Runnable]);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(CoroutineStackFrame, 'CoroutineStackFrame', interfaceMeta);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation, CoroutineStackFrame]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor(CompletableDeferred, 'CompletableDeferred', interfaceMeta, VOID, [Deferred], VOID, VOID, [0]);
  setMetadataFor($awaitCOROUTINE$1, '$awaitCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, CompletableDeferred, SelectClause1], VOID, VOID, [0]);
  setMetadataFor(CompletableJob, 'CompletableJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key_0, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_1, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(CoroutineExceptionHandler, 'CoroutineExceptionHandler', interfaceMeta, VOID, [Element]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, CoroutineExceptionHandler]);
  setMetadataFor(Key_2, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(CoroutineName, 'CoroutineName', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, VOID, [CoroutineScope_0]);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  setMetadataFor(CopyableThrowable, 'CopyableThrowable', interfaceMeta);
  function delay(time, $completion) {
    if (time.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.Delay.delay.<anonymous>' call
    this.scheduleResumeAfterDelay_5x4w1l_k$(time, cancellable);
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_3, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(DisposableHandle, 'DisposableHandle', interfaceMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta, VOID, [DisposableHandle]);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [DisposableHandle, ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete]);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, DisposableHandle, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode);
  setMetadataFor(SelectJoinOnCompletion, 'SelectJoinOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(SelectAwaitOnCompletion, 'SelectAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, CompletableJob], VOID, VOID, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException, [CancellationException, CopyableThrowable]);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, CoroutineStackFrame], VOID, VOID, [0]);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, [ScopeCoroutine, Runnable], VOID, VOID, [0]);
  setMetadataFor($withTimeoutOrNullCOROUTINE$2, '$withTimeoutOrNullCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_4, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(YieldContext, 'YieldContext', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(AtomicDesc, 'AtomicDesc', classMeta);
  setMetadataFor(AbstractAtomicDesc, 'AbstractAtomicDesc', classMeta, AtomicDesc);
  setMetadataFor(RemoveFirstDesc, 'RemoveFirstDesc', classMeta, AbstractAtomicDesc);
  setMetadataFor(TryPollDesc, 'TryPollDesc', classMeta, RemoveFirstDesc);
  setMetadataFor(RemoveReceiveOnCancel, 'RemoveReceiveOnCancel', classMeta, BeforeResumeCancelHandler);
  function next0($completion) {
    var tmp = new $next0COROUTINE$2(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  setMetadataFor(ChannelIterator, 'ChannelIterator', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Itr, 'Itr', classMeta, VOID, [ChannelIterator], VOID, VOID, [0]);
  setMetadataFor(ReceiveOrClosed, 'ReceiveOrClosed', interfaceMeta);
  setMetadataFor(Receive, 'Receive', classMeta, LinkedListNode, [LinkedListNode, ReceiveOrClosed]);
  setMetadataFor(ReceiveElement, 'ReceiveElement', classMeta, Receive);
  setMetadataFor(ReceiveElementWithUndeliveredHandler, 'ReceiveElementWithUndeliveredHandler', classMeta, ReceiveElement);
  setMetadataFor(ReceiveHasNext, 'ReceiveHasNext', classMeta, Receive);
  setMetadataFor(ReceiveSelect, 'ReceiveSelect', classMeta, Receive, [Receive, DisposableHandle]);
  setMetadataFor(AbstractChannel$onReceive$1, VOID, classMeta, VOID, [SelectClause1]);
  setMetadataFor(AbstractChannel$onReceiveCatching$1, VOID, classMeta, VOID, [SelectClause1]);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.close_9zy44b_k$(cause) : $super.close_9zy44b_k$.call(this, cause);
  }
  function offer(element) {
    var result = this.trySend_3hclq4_k$(element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return true;
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractSendChannel, 'AbstractSendChannel', classMeta, VOID, [SendChannel], VOID, VOID, [1]);
  function cancel$default_2(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_4b7aim_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_4b7aim_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel_0() {
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_3(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_as6ug7_k$(cause) : $super.cancel_as6ug7_k$.call(this, cause);
  }
  function poll() {
    var result = this.tryReceive_5r5v2p_k$();
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return ChannelResult__getOrThrow_impl_od1axs(result);
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  function receiveOrNull($completion) {
    var tmp = new $receiveOrNullCOROUTINE$3(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_onReceiveOrNull() {
    return new ReceiveChannel$onReceiveOrNull$1(this);
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Channel, 'Channel', interfaceMeta, VOID, [SendChannel, ReceiveChannel], VOID, VOID, [1, 0]);
  setMetadataFor(AbstractChannel, 'AbstractChannel', classMeta, AbstractSendChannel, [AbstractSendChannel, Channel], VOID, VOID, [0, 1]);
  setMetadataFor(AddLastDesc, 'AddLastDesc', classMeta, AbstractAtomicDesc);
  setMetadataFor(SendBufferedDesc, 'SendBufferedDesc', classMeta, AddLastDesc);
  setMetadataFor(TryOfferDesc, 'TryOfferDesc', classMeta, RemoveFirstDesc);
  setMetadataFor(Send, 'Send', classMeta, LinkedListNode);
  setMetadataFor(SendSelect, 'SendSelect', classMeta, Send, [Send, DisposableHandle]);
  setMetadataFor(SendBuffered, 'SendBuffered', classMeta, Send);
  setMetadataFor(SelectClause2, 'SelectClause2', interfaceMeta);
  setMetadataFor(AbstractSendChannel$onSend$1, VOID, classMeta, VOID, [SelectClause2]);
  setMetadataFor(Closed, 'Closed', classMeta, Send, [Send, ReceiveOrClosed]);
  setMetadataFor(SendElement, 'SendElement', classMeta, Send);
  setMetadataFor(SendElementWithUndeliveredHandler, 'SendElementWithUndeliveredHandler', classMeta, SendElement);
  setMetadataFor(ArrayChannel, 'ArrayChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor($next0COROUTINE$2, '$next0COROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt, 'ReceiveChannel$<get-onReceiveOrNull>$o$registerSelectClause1$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ReceiveChannel$onReceiveOrNull$1, VOID, classMeta, VOID, [SelectClause1]);
  setMetadataFor($receiveOrNullCOROUTINE$3, '$receiveOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(Failed, 'Failed', classMeta);
  setMetadataFor(Closed_0, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta);
  setMetadataFor($consumeEachCOROUTINE$5, '$consumeEachCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(ConflatedChannel, 'ConflatedChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(LinkedListChannel, 'LinkedListChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(RendezvousChannel, 'RendezvousChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(Flow, 'Flow', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(unsafeTransform$o$collect$slambda, 'unsafeTransform$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$7, '$collectCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$9, '$emitCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($collectWhileCOROUTINE$8, '$collectWhileCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(map$o$collect$slambda, 'map$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$12, '$emitCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($firstOrNullCOROUTINE$11, '$firstOrNullCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(AtomicOp, 'AtomicOp', classMeta, OpDescriptor);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, CoroutineStackFrame, Continuation]);
  setMetadataFor(InlineList, 'InlineList', classMeta);
  setMetadataFor(LimitedDispatcher, 'LimitedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Runnable, Delay], VOID, VOID, [1]);
  setMetadataFor(LockFreeTaskQueue, 'LockFreeTaskQueue', classMeta);
  setMetadataFor(Placeholder, 'Placeholder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(LockFreeTaskQueueCore, 'LockFreeTaskQueueCore', classMeta);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope_0]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(SelectInstance, 'SelectInstance', interfaceMeta);
  setMetadataFor(SeqNumber, 'SeqNumber', classMeta);
  setMetadataFor(Empty_0, 'Empty', classMeta);
  function tryLock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.tryLock_jl1wg7_k$(owner) : $super.tryLock_jl1wg7_k$.call(this, owner);
  }
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.lock_25dizd_k$(owner, $completion) : $super.lock_25dizd_k$.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.unlock_uksyr8_k$(owner);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.unlock_uksyr8_k$.call(this, owner);
    }
    return tmp;
  }
  setMetadataFor(Mutex, 'Mutex', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(PrepareOp, 'PrepareOp', classMeta, OpDescriptor);
  setMetadataFor(TryLockDesc, 'TryLockDesc', classMeta, AtomicDesc);
  setMetadataFor(LockedQueue, 'LockedQueue', classMeta, LinkedListHead);
  setMetadataFor(LockWaiter, 'LockWaiter', classMeta, LinkedListNode, [LinkedListNode, DisposableHandle]);
  setMetadataFor(LockCont, 'LockCont', classMeta, LockWaiter);
  setMetadataFor(LockSelect, 'LockSelect', classMeta, LockWaiter);
  setMetadataFor(UnlockOp, 'UnlockOp', classMeta, AtomicOp);
  setMetadataFor(MutexImpl, 'MutexImpl', classMeta, VOID, [Mutex, SelectClause2], VOID, VOID, [1]);
  setMetadataFor($withLockCOROUTINE$13, '$withLockCOROUTINE$13', classMeta, CoroutineImpl);
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
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler, [CancelHandler, DisposableHandle]);
  setMetadataFor(WindowDispatcher$invokeOnTimeout$1, VOID, classMeta, VOID, [DisposableHandle]);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException);
  setMetadataFor(NoOpLock, 'NoOpLock', classMeta);
  setMetadataFor(PrepareOp_0, 'PrepareOp', classMeta, OpDescriptor);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.initParentJob_4c2lht_k$(parentContext.get_j1ktw6_k$(Key_getInstance_3()));
    }
    this.context_1 = parentContext.plus_rgw9wi_k$(this);
  }
  protoOf(AbstractCoroutine).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_coroutineContext_115oqo_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_isActive_quafmh_k$ = function () {
    return protoOf(JobSupport).get_isActive_quafmh_k$.call(this);
  };
  protoOf(AbstractCoroutine).onCompleted_wmtzyo_k$ = function (value) {
  };
  protoOf(AbstractCoroutine).onCancelled_oqqex5_k$ = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).cancellationExceptionMessage_a64063_k$ = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).onCompletionInternal_39c1g8_k$ = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.onCancelled_oqqex5_k$(state.get_cause_iplhs0_k$(), state.get_handled_cq14k3_k$());
    } else {
      this.onCompleted_wmtzyo_k$((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).resumeWith_s3a3yh_k$ = function (result) {
    var state = this.makeCompletingOnce_b13xy2_k$(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.afterResume_ufx9w9_k$(state);
  };
  protoOf(AbstractCoroutine).afterResume_ufx9w9_k$ = function (state) {
    return this.afterCompletion_2ogq6g_k$(state);
  };
  protoOf(AbstractCoroutine).handleOnCompletionException_o179kb_k$ = function (exception) {
    handleCoroutineException(this.context_1, exception);
  };
  protoOf(AbstractCoroutine).nameString_cd9e9w_k$ = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.context_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).nameString_cd9e9w_k$.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).nameString_cd9e9w_k$.call(this);
  };
  protoOf(AbstractCoroutine).start_eui3tp_k$ = function (start, receiver, block) {
    start.invoke_gvylz3_k$(block, receiver, this);
  };
  function InternalCoroutinesApi() {
  }
  protoOf(InternalCoroutinesApi).equals = function (other) {
    if (!(other instanceof InternalCoroutinesApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  protoOf(InternalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.InternalCoroutinesApi()';
  };
  function FlowPreview() {
  }
  protoOf(FlowPreview).equals = function (other) {
    if (!(other instanceof FlowPreview))
      return false;
    var tmp0_other_with_cast = other instanceof FlowPreview ? other : THROW_CCE();
    return true;
  };
  protoOf(FlowPreview).hashCode = function () {
    return 0;
  };
  protoOf(FlowPreview).toString = function () {
    return '@kotlinx.coroutines.FlowPreview()';
  };
  function ExperimentalCoroutinesApi() {
  }
  protoOf(ExperimentalCoroutinesApi).equals = function (other) {
    if (!(other instanceof ExperimentalCoroutinesApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  protoOf(ExperimentalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.ExperimentalCoroutinesApi()';
  };
  function DelicateCoroutinesApi() {
  }
  protoOf(DelicateCoroutinesApi).equals = function (other) {
    if (!(other instanceof DelicateCoroutinesApi))
      return false;
    var tmp0_other_with_cast = other instanceof DelicateCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  protoOf(DelicateCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(DelicateCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.DelicateCoroutinesApi()';
  };
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_eui3tp_k$(start, coroutine, block);
    return coroutine;
  }
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_eui3tp_k$(start, coroutine, block);
    return coroutine;
  }
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitInternal_pz51jj_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).getCompleted_nczk2z_k$ = function () {
    var tmp = this.getCompletedInternal_26f4i6_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(DeferredCoroutine).await_xhs9og_k$ = function ($completion) {
    var tmp = new $awaitCOROUTINE$0(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DeferredCoroutine).get_onAwait_l48qpe_k$ = function () {
    return this;
  };
  protoOf(DeferredCoroutine).registerSelectClause1_7bev4b_k$ = function (select, block) {
    return this.registerSelectClause1Internal_77s7gf_k$(select, block);
  };
  protoOf(DeferredCoroutine).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_7bev4b_k$(select, block);
  };
  function _get_continuation__y3gzck($this) {
    return $this.continuation_1;
  }
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).onStart_qth026_k$ = function () {
    startCoroutineCancellable_1(this.continuation_1, this);
  };
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).handleJobException_oc4gxk_k$ = function (exception) {
    handleCoroutineException(this.get_context_h02k06_k$(), exception);
    return true;
  };
  function _get_continuation__y3gzck_0($this) {
    return $this.continuation_1;
  }
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).onStart_qth026_k$ = function () {
    startCoroutineCancellable_1(this.continuation_1, this);
  };
  function suspendCancellableCoroutine(block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    block(cancellable);
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
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
    return _this__u8e3s4.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function _get_handle__ls055p($this) {
    return $this.handle_1;
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  protoOf(DisposeOnCancel).invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + this.handle_1 + ']';
  };
  function suspendCancellableCoroutineReusable(block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    block(cancellable);
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function removeOnCancellation(_this__u8e3s4, node) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveOnCancel(node);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.claimReusableCancellableContinuation_oatv30_k$();
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
      tmp$ret$0 = tmp0_safe_receiver.resetStateReusable_a3kq5v_k$();
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
  function _get_node__db0vwp($this) {
    return $this.node_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.node_1 = node;
  }
  protoOf(RemoveOnCancel).invoke_7fb7sc_k$ = function (cause) {
    this.node_1.remove_fgfybg_k$();
  };
  protoOf(RemoveOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(RemoveOnCancel).toString = function () {
    return 'RemoveOnCancel[' + this.node_1 + ']';
  };
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get__decision__uou2k6($this) {
    return $this._decision_1;
  }
  function _get__state__37adl3($this) {
    return $this._state_1;
  }
  function _set_parentHandle__bde57($this, _set____db54di) {
    $this.parentHandle_1 = _set____db54di;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.parentHandle_1;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.get_state_iypx7s_k$();
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
    if (get_isReusableMode($this.get_resumeMode_te1i4n_k$())) {
      var tmp_0 = $this.delegate_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_hrfetn_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.delegate_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_723ard_k$(cause);
  }
  function callCancelHandlerSafely($this, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
      } else {
        throw $p;
      }
    }
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
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
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
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 1))
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
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 2))
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
    var tmp0_elvis_lhs = $this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
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
    var handle = parent.invokeOnCompletion$default_gp7u53_k$(true, VOID, tmp$ret$1);
    $this.parentHandle_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.delegate_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_5s4a1c_k$($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.detachChild_qdtbew_k$();
    $this.cancel_as6ug7_k$(cancellationCause);
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
    var tmp0_loop = $this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.makeResumed_vjvawn_k$()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.callOnCancellation_adp92k_k$(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.get_cause_iplhs0_k$());
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
    var tmp0_loop = $this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.get_resumeMode_te1i4n_k$(), onCancellation, idempotent);
          if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.idempotentResume_1 === idempotent : false) {
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
      $this.detachChild_qdtbew_k$();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.context_1 = this.delegate_1.get_context_h02k06_k$();
    this._decision_1 = atomic$int$1(0);
    this._state_1 = atomic$ref$1(Active_getInstance());
    this.parentHandle_1 = null;
  }
  protoOf(CancellableContinuationImpl).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(CancellableContinuationImpl).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(CancellableContinuationImpl).get_state_iypx7s_k$ = function () {
    return this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CancellableContinuationImpl).get_isActive_quafmh_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  protoOf(CancellableContinuationImpl).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).get_isCancelled_trk8pu_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).initCancellability_sh6jkn_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3n44we_k$();
      this.parentHandle_1 = NonDisposableHandle_getInstance();
    }
  };
  protoOf(CancellableContinuationImpl).resetStateReusable_a3kq5v_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.idempotentResume_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.detachChild_qdtbew_k$();
      return false;
    }
    this._decision_1.set_kotlinx$atomicfu$value_3lx0f_k$(0);
    this._state_1.set_kotlinx$atomicfu$value_koguff_k$(Active_getInstance());
    return true;
  };
  protoOf(CancellableContinuationImpl).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.delegate_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(CancellableContinuationImpl).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(CancellableContinuationImpl).takeState_olvzuy_k$ = function () {
    return this.get_state_iypx7s_k$();
  };
  protoOf(CancellableContinuationImpl).cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
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
            var tmp0_check = !tmp1__anonymous__uwfjfc.get_cancelled_ge9r54_k$();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.copy$default_g8p7u0_k$(VOID, VOID, VOID, VOID, cause);
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.invokeHandlers_2wd6qe_k$(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, new CompletedContinuation(tmp1__anonymous__uwfjfc, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).cancel_as6ug7_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
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
          this.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.get_resumeMode_te1i4n_k$());
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).parentCancelled_uc06zq_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_as6ug7_k$(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).callCancelHandler_qcjvzx_k$ = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).callOnCancellation_adp92k_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(CancellableContinuationImpl).getResult_clfhg3_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.parentHandle_1 == null) {
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
    var state = this.get_state_iypx7s_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.get_cause_iplhs0_k$(), this);
    if (get_isCancellableMode(this.get_resumeMode_te1i4n_k$())) {
      var job = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.getSuccessfulResult_t876z0_k$(state);
  };
  protoOf(CancellableContinuationImpl).resumeWith_s3a3yh_k$ = function (result) {
    return resumeImpl$default(this, toState(result, this), this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resume_l1w5in_k$ = function (value, onCancellation) {
    return resumeImpl(this, value, this.get_resumeMode_te1i4n_k$(), onCancellation);
  };
  protoOf(CancellableContinuationImpl).invokeOnCancellation_yygv6h_k$ = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.makeHandled_ws9oq6_k$()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$());
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.cancelHandler_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.get_cancelled_ge9r54_k$()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.cancelCause_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.copy$default_g8p7u0_k$(VOID, cancelHandler);
              if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = new CompletedContinuation(tmp1__anonymous__uwfjfc, cancelHandler);
              if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  protoOf(CancellableContinuationImpl).detachChild_qdtbew_k$ = function () {
    var tmp0_elvis_lhs = this.parentHandle_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_3n44we_k$();
    this.parentHandle_1 = NonDisposableHandle_getInstance();
  };
  protoOf(CancellableContinuationImpl).tryResume_10oxem_k$ = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  protoOf(CancellableContinuationImpl).tryResume_93jc0s_k$ = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).tryResumeWithException_3icka9_k$ = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).completeResume_fu4ex_k$ = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resumeUndispatched_re4yxz_k$ = function (_this__u8e3s4, value) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_dispatcher_usy1bk_k$()) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).resumeUndispatchedWithException_xuy3rd_k$ = function (_this__u8e3s4, exception) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0 = new CompletedExceptionally(exception);
    var tmp_1;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_dispatcher_usy1bk_k$()) === _this__u8e3s4) {
      tmp_1 = get_MODE_UNDISPATCHED();
    } else {
      tmp_1 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, tmp_0, tmp_1);
  };
  protoOf(CancellableContinuationImpl).getSuccessfulResult_t876z0_k$ = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.result_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).getExceptionalResult_bnge6_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.delegate_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.nameString_cd9e9w_k$() + '(' + toDebugString(this.delegate_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).nameString_cd9e9w_k$ = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
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
    this.result_1 = result;
    this.cancelHandler_1 = cancelHandler;
    this.onCancellation_1 = onCancellation;
    this.idempotentResume_1 = idempotentResume;
    this.cancelCause_1 = cancelCause;
  }
  protoOf(CompletedContinuation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).get_cancelHandler_w4ijbb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).get_idempotentResume_61d27l_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).get_cancelCause_cj8bx6_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).get_cancelled_ge9r54_k$ = function () {
    return !(this.cancelCause_1 == null);
  };
  protoOf(CompletedContinuation).invokeHandlers_2wd6qe_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this.cancelHandler_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.onCancellation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callOnCancellation_adp92k_k$(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  protoOf(CompletedContinuation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).component2_7eebsb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).component3_7eebsa_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).component4_7eebs9_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).component5_7eebs8_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).copy_q5vocy_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).copy$default_g8p7u0_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.result_1 : result;
    cancelHandler = cancelHandler === VOID ? this.cancelHandler_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.idempotentResume_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.cancelCause_1 : cancelCause;
    return $super === VOID ? this.copy_q5vocy_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.copy_q5vocy_k$.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString(this.result_1) + ', cancelHandler=' + this.cancelHandler_1 + ', onCancellation=' + this.onCancellation_1 + ', idempotentResume=' + toString(this.idempotentResume_1) + ', cancelCause=' + this.cancelCause_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + (this.cancelHandler_1 == null ? 0 : hashCode(this.cancelHandler_1)) | 0;
    result = imul(result, 31) + (this.onCancellation_1 == null ? 0 : hashCode(this.onCancellation_1)) | 0;
    result = imul(result, 31) + (this.idempotentResume_1 == null ? 0 : hashCode(this.idempotentResume_1)) | 0;
    result = imul(result, 31) + (this.cancelCause_1 == null ? 0 : hashCode(this.cancelCause_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.cancelHandler_1, tmp0_other_with_cast.cancelHandler_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    if (!equals(this.idempotentResume_1, tmp0_other_with_cast.idempotentResume_1))
      return false;
    if (!equals(this.cancelCause_1, tmp0_other_with_cast.cancelCause_1))
      return false;
    return true;
  };
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.handler_1 = handler;
  }
  protoOf(InvokeOnCancel).invoke_7fb7sc_k$ = function (cause) {
    this.handler_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.handler_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred() {
  }
  function CompletableDeferred_0(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitInternal_pz51jj_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_4c2lht_k$(parent);
  }
  protoOf(CompletableDeferredImpl).get_onCancelComplete_4lfsth_k$ = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).getCompleted_nczk2z_k$ = function () {
    var tmp = this.getCompletedInternal_26f4i6_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).await_xhs9og_k$ = function ($completion) {
    var tmp = new $awaitCOROUTINE$1(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CompletableDeferredImpl).get_onAwait_l48qpe_k$ = function () {
    return this;
  };
  protoOf(CompletableDeferredImpl).registerSelectClause1_7bev4b_k$ = function (select, block) {
    return this.registerSelectClause1Internal_77s7gf_k$(select, block);
  };
  protoOf(CompletableDeferredImpl).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_7bev4b_k$(select, block);
  };
  protoOf(CompletableDeferredImpl).complete_8y7ynm_k$ = function (value) {
    return this.makeCompleting_2ycklh_k$(value);
  };
  protoOf(CompletableDeferredImpl).completeExceptionally_7s0ccc_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function _get__handled__q1dawe($this) {
    return $this._handled_1;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.cause_1 = cause;
    this._handled_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(CompletedExceptionally).get_handled_cq14k3_k$ = function () {
    return this._handled_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CompletedExceptionally).makeHandled_ws9oq6_k$ = function () {
    return this._handled_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.cause_1 + ']';
  };
  function _get__resumed__kg85kj($this) {
    return $this._resumed_1;
  }
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this._resumed_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).makeResumed_vjvawn_k$ = function () {
    return this._resumed_1.atomicfu$compareAndSet(false, true);
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
    this.result_1 = result;
    this.onCancellation_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).component2_7eebsb_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).copy_eadg01_k$ = function (result, onCancellation) {
    return new CompletedWithCancellation(result, onCancellation);
  };
  protoOf(CompletedWithCancellation).copy$default_y4c1k2_k$ = function (result, onCancellation, $super) {
    result = result === VOID ? this.result_1 : result;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    return $super === VOID ? this.copy_eadg01_k$(result, onCancellation) : $super.copy_eadg01_k$.call(this, result, onCancellation);
  };
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.result_1) + ', onCancellation=' + this.onCancellation_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + hashCode(this.onCancellation_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.cause_1, uCont);
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
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).isDispatchNeeded_fmz9vn_k$ = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return new LimitedDispatcher(this, parallelism);
  };
  protoOf(CoroutineDispatcher).dispatchYield_ww21f6_k$ = function (context, block) {
    return this.dispatch_o98ux7_k$(context, block);
  };
  protoOf(CoroutineDispatcher).interceptContinuation_gcmqkx_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).releaseInterceptedContinuation_4i98ok_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_wtm6d2_k$();
  };
  protoOf(CoroutineDispatcher).plus_jld99k_k$ = function (other) {
    return other;
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_j1ktw6_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.handleException_w1h9is_k$(context, exception);
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
  function Key_1() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
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
  function CoroutineExceptionHandler_0(handler) {
    return new _no_name_provided__qut3iv(handler);
  }
  function _no_name_provided__qut3iv($handler) {
    this.$handler_1 = $handler;
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
  }
  protoOf(_no_name_provided__qut3iv).handleException_w1h9is_k$ = function (context, exception) {
    return this.$handler_1(context, exception);
  };
  function Key_2() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.name_1 = name;
  }
  protoOf(CoroutineName).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.name_1 + ')';
  };
  protoOf(CoroutineName).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(CoroutineName).copy_3t26ic_k$ = function (name) {
    return new CoroutineName(name);
  };
  protoOf(CoroutineName).copy$default_hajcdj_k$ = function (name, $super) {
    name = name === VOID ? this.name_1 : name;
    return $super === VOID ? this.copy_3t26ic_k$(name) : $super.copy_3t26ic_k$.call(this, name);
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  function CoroutineScope(context) {
    return new ContextScope(!(context.get_j1ktw6_k$(Key_getInstance_3()) == null) ? context : context.plus_rgw9wi_k$(Job_0()));
  }
  function CoroutineScope_0() {
  }
  function cancel_1(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.cancel_4b7aim_k$(cause);
  }
  function cancel_2(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel_1(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  protoOf(GlobalScope).get_coroutineContext_115oqo_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function MainScope() {
    return new ContextScope(SupervisorJob().plus_rgw9wi_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$()));
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  function values() {
    return [CoroutineStart_DEFAULT_getInstance(), CoroutineStart_LAZY_getInstance(), CoroutineStart_ATOMIC_getInstance(), CoroutineStart_UNDISPATCHED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'DEFAULT':
        return CoroutineStart_DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart_LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart_ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart_UNDISPATCHED_getInstance();
      default:
        CoroutineStart_initEntries();
        THROW_ISE();
        break;
    }
  }
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
  protoOf(CoroutineStart).invoke_80e41m_k$ = function (block, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable_0(block, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, completion);
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
  protoOf(CoroutineStart).invoke_gvylz3_k$ = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine_0(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched_0(block, receiver, completion);
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
  protoOf(CoroutineStart).get_isLazy_ew1d53_k$ = function () {
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
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  function Deferred() {
  }
  function Delay() {
  }
  function delay_0(timeMillis, $completion) {
    if (timeMillis.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.compareTo_n4fqi2_k$(Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$()) < 0) {
      get_delay(cancellable.get_context_h02k06_k$()).scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function get_DISPOSED_TASK() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return DISPOSED_TASK;
  }
  var DISPOSED_TASK;
  function get_CLOSED_EMPTY() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return CLOSED_EMPTY;
  }
  var CLOSED_EMPTY;
  function _set_useCount__kwzmz3($this, _set____db54di) {
    $this.useCount_1 = _set____db54di;
  }
  function _get_useCount__843bib($this) {
    return $this.useCount_1;
  }
  function _set_shared__q6vn2($this, _set____db54di) {
    $this.shared_1 = _set____db54di;
  }
  function _get_shared__qjozq($this) {
    return $this.shared_1;
  }
  function _set_unconfinedQueue__ri92ob($this, _set____db54di) {
    $this.unconfinedQueue_1 = _set____db54di;
  }
  function _get_unconfinedQueue__heiv5r($this) {
    return $this.unconfinedQueue_1;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_1 = new Long(0, 0);
    this.shared_1 = false;
    this.unconfinedQueue_1 = null;
  }
  protoOf(EventLoop).processNextEvent_jmndfc_k$ = function () {
    if (!this.processUnconfinedEvent_mypjl6_k$())
      return Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$();
    return new Long(0, 0);
  };
  protoOf(EventLoop).get_isEmpty_zauvru_k$ = function () {
    return this.get_isUnconfinedQueueEmpty_mi405s_k$();
  };
  protoOf(EventLoop).get_nextTime_88vw7r_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    return queue.get_isEmpty_zauvru_k$() ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : new Long(0, 0);
  };
  protoOf(EventLoop).processUnconfinedEvent_mypjl6_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_eges3a_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_mw4iiu_k$();
    return true;
  };
  protoOf(EventLoop).shouldBeProcessedFromContext_tzcyz7_k$ = function () {
    return false;
  };
  protoOf(EventLoop).dispatchUnconfined_do6j6f_k$ = function (task) {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.unconfinedQueue_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_xhfl3v_k$(task);
  };
  protoOf(EventLoop).get_isActive_quafmh_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
  };
  protoOf(EventLoop).get_isUnconfinedLoopActive_g78ri6_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).get_isUnconfinedQueueEmpty_mi405s_k$ = function () {
    var tmp0_safe_receiver = this.unconfinedQueue_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isEmpty_zauvru_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).incrementUseCount_ocukpa_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.plus_u6jwas_k$(delta(this, unconfined));
    if (!unconfined)
      this.shared_1 = true;
  };
  protoOf(EventLoop).incrementUseCount$default_cfnf22_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.incrementUseCount_ocukpa_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.incrementUseCount_ocukpa_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).decrementUseCount_saho26_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.minus_llf5ei_k$(delta(this, unconfined));
    if (this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.shared_1) {
      this.shutdown_cq5p8b_k$();
    }
  };
  protoOf(EventLoop).decrementUseCount$default_fi51yi_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.decrementUseCount_saho26_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.decrementUseCount_saho26_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(EventLoop).shutdown_cq5p8b_k$ = function () {
  };
  function _get_ref__e6fxpa($this) {
    return $this.ref_1;
  }
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_1 = new CommonThreadLocal();
  }
  protoOf(ThreadLocalEventLoop).get_eventLoop_913645_k$ = function () {
    var tmp0_elvis_lhs = this.ref_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ref_1.set_hda1d2_k$(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ThreadLocalEventLoop).currentOrNull_z5p8mb_k$ = function () {
    return this.ref_1.get_26vq_k$();
  };
  protoOf(ThreadLocalEventLoop).resetEventLoop_a6lzlu_k$ = function () {
    this.ref_1.set_hda1d2_k$(null);
  };
  protoOf(ThreadLocalEventLoop).setEventLoop_d3g3n0_k$ = function (eventLoop) {
    this.ref_1.set_hda1d2_k$(eventLoop);
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  var properties_initialized_EventLoop_common_kt_cfxg9p;
  function _init_properties_EventLoop_common_kt__pwfggr() {
    if (properties_initialized_EventLoop_common_kt_cfxg9p) {
    } else {
      properties_initialized_EventLoop_common_kt_cfxg9p = true;
      DISPOSED_TASK = new Symbol('REMOVED_TASK');
      CLOSED_EMPTY = new Symbol('CLOSED_EMPTY');
    }
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function ParentJob() {
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ChildJob() {
  }
  function ChildHandle() {
  }
  function cancel_3(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel_4b7aim_k$(cause);
    }
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).get_parent_hy4reb_k$ = function () {
    return null;
  };
  protoOf(NonDisposableHandle).dispose_3n44we_k$ = function () {
  };
  protoOf(NonDisposableHandle).childCancelled_fdoq8t_k$ = function (cause) {
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
  function cancel_4(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.cancel_4b7aim_k$(CancellationException_init_$Create$_0(message, cause));
  }
  function DisposableHandle() {
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCompletion(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.invokeOnCompletion_t2apld_k$(tmp$ret$1);
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.get_isActive_quafmh_k$())
      throw _this__u8e3s4.getCancellationException_8i1q6u_k$();
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
    this.isActive_1 = isActive;
  }
  protoOf(Empty).get_isActive_quafmh_k$ = function () {
    return this.isActive_1;
  };
  protoOf(Empty).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.isActive_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(NodeList).get_list_wopuqv_k$ = function () {
    return this;
  };
  protoOf(NodeList).getString_xqex6i_k$ = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.append_ssq29y_k$('List{');
    tmp0_apply.append_ssq29y_k$(state);
    tmp0_apply.append_ssq29y_k$('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.get__next_inmai1_k$();
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.append_ssq29y_k$(', ');
        }
        tmp0_apply.append_t8pm91_k$(tmp0__anonymous__q1qw7t);
      }
      cur = cur.get__next_inmai1_k$();
    }
    tmp0_apply.append_ssq29y_k$(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.getString_xqex6i_k$('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).set_job_d610gu_k$ = function (_set____db54di) {
    this.job_1 = _set____db54di;
  };
  protoOf(JobNode).get_job_18j2r0_k$ = function () {
    var tmp = this.job_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(JobNode).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(JobNode).dispose_3n44we_k$ = function () {
    return this.get_job_18j2r0_k$().removeNode_o3o6t1_k$(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.get_job_18j2r0_k$()) + ']';
  };
  function _get__isCompleting__kxhw32($this) {
    return $this._isCompleting_1;
  }
  function _get__rootCause__pzi6w3($this) {
    return $this._rootCause_1;
  }
  function _get__exceptionsHolder__e2tfjy($this) {
    return $this._exceptionsHolder_1;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this._exceptionsHolder_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this._exceptionsHolder_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function _get_child__j05w3v($this) {
    return $this.child_1;
  }
  function _get_proposedUpdate__cai7fg($this) {
    return $this.proposedUpdate_1;
  }
  function _get_job__e6b14k($this) {
    return $this.job_1;
  }
  function _get__state__37adl3_0($this) {
    return $this._state_1;
  }
  function _get__parentHandle__f9kzhc($this) {
    return $this._parentHandle_1;
  }
  function loopOnState($this, block) {
    while (true) {
      block($this.get_state_iypx7s_k$());
    }
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.get_isCancelling_o1apv_k$();
    var exceptions = state.sealLocked_11gdw4_k$(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_oc4gxk_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_ws9oq6_k$();
      }
    }
    if (!wasCancelling) {
      $this.onCancelling_bxyn9n_k$(finalException);
    }
    $this.onCompletionInternal_39c1g8_k$(finalState);
    var casSuccess = $this._state_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_y1axqb_k$()) {
      if (state.get_isCancelling_o1apv_k$()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
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
    var first = exceptions.get_fkrdnv_k$(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
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
    if (exceptions.get_size_woubt6_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.get_size_woubt6_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var exception = tmp0_iterator.next_20eer_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_1j60pz_k$(unwrapped);
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
    if (!$this._state_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_bxyn9n_k$(null);
    $this.onCompletionInternal_39c1g8_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.get_parentHandle_gmoqez_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.dispose_3n44we_k$();
      $this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$();
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.handleOnCompletionException_o179kb_k$(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.get_list_wopuqv_k$();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_bxyn9n_k$(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.get__next_inmai1_k$();
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
      cur = cur.get__next_inmai1_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.get_isScopedCoroutine_rwmmff_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.get_parentHandle_gmoqez_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.childCancelled_fdoq8t_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.get__next_inmai1_k$();
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
      cur = cur.get__next_inmai1_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.isActive_1)
        return 0;
      if (!$this._state_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.onStart_qth026_k$();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this._state_1.atomicfu$compareAndSet(state, state.list_1))
          return -1;
        $this.onStart_qth026_k$();
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
    node.job_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.get_state_iypx7s_k$() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.addLast_uyctnf_k$(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.isActive_1 ? list : new InactiveNodeList(list);
    $this._state_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_cbgboi_k$(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.get__next_inmai1_k$();
    var list = tmp$ret$0;
    $this._state_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.get_state_iypx7s_k$();
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
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
    tmp$ret$2 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$2;
    return tmp0;
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.get_state_iypx7s_k$();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.get_isCompleting_vi2bwp_k$();
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
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_wx9uoh_k$();
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
        var tmp0__anonymous__q1qw7t = $this.get_state_iypx7s_k$();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.get_isSealed_zdv4z3_k$())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.get_isCancelling_o1apv_k$();
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
            tmp0__anonymous__q1qw7t.addExceptionLocked_jeuhbd_k$(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.get_rootCause_69dwxu_k$();
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
            notifyCancelling($this, tmp0__anonymous__q1qw7t.list_1, tmp1_safe_receiver);
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
            if (tmp0__anonymous__q1qw7t.get_isActive_quafmh_k$()) {
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
    var tmp1_elvis_lhs = state.get_list_wopuqv_k$();
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
    if (!$this._state_1.atomicfu$compareAndSet(state, cancelling))
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
    if (finishing.get_isCompleting_vi2bwp_k$())
      return get_COMPLETING_ALREADY();
    finishing.set_isCompleting_i5ljas_k$(true);
    if (!(finishing === state)) {
      if (!$this._state_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.get_isCancelling_o1apv_k$();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.addExceptionLocked_jeuhbd_k$(tmp0_safe_receiver.get_cause_iplhs0_k$());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.get_rootCause_69dwxu_k$();
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
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.get_list_wopuqv_k$();
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
        var tmp = child_0.childJob_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.invokeOnCompletion$default_gp7u53_k$(VOID, false, tmp$ret$1);
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
    $this.afterCompletion_2ogq6g_k$(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.get__removed_p9514a_k$();
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.get__prev_inntnt_k$();
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.get__next_inmai1_k$();
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.get__removed_p9514a_k$();
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
      tmp = state.get_isCancelling_o1apv_k$() ? 'Cancelling' : state.get_isCompleting_vi2bwp_k$() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.get_isActive_quafmh_k$() ? 'Active' : 'New';
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
    this.list_1 = list;
    this._isCompleting_1 = atomic$boolean$1(isCompleting);
    this._rootCause_1 = atomic$ref$1(rootCause);
    this._exceptionsHolder_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(Finishing).set_isCompleting_i5ljas_k$ = function (value) {
    this._isCompleting_1.set_kotlinx$atomicfu$value_rpu4go_k$(value);
  };
  protoOf(Finishing).get_isCompleting_vi2bwp_k$ = function () {
    return this._isCompleting_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).set_rootCause_s52kuy_k$ = function (value) {
    this._rootCause_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  };
  protoOf(Finishing).get_rootCause_69dwxu_k$ = function () {
    return this._rootCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).get_isSealed_zdv4z3_k$ = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).get_isCancelling_o1apv_k$ = function () {
    return !(this.get_rootCause_69dwxu_k$() == null);
  };
  protoOf(Finishing).get_isActive_quafmh_k$ = function () {
    return this.get_rootCause_69dwxu_k$() == null;
  };
  protoOf(Finishing).sealLocked_11gdw4_k$ = function (proposedException) {
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
        tmp0_also.add_1j60pz_k$(eh);
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
    var rootCause = this.get_rootCause_69dwxu_k$();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.add_ydlf05_k$(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.add_1j60pz_k$(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).addExceptionLocked_jeuhbd_k$ = function (exception) {
    var rootCause = this.get_rootCause_69dwxu_k$();
    if (rootCause == null) {
      this.set_rootCause_s52kuy_k$(exception);
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
        tmp0_apply.add_1j60pz_k$(eh);
        tmp0_apply.add_1j60pz_k$(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_1j60pz_k$(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.get_isCancelling_o1apv_k$() + ', completing=' + this.get_isCompleting_vi2bwp_k$() + ', rootCause=' + this.get_rootCause_69dwxu_k$() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.list_1 + ']';
  };
  function _get_isCancelling__hlz7m9(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof Finishing) {
      tmp = _this__u8e3s4.get_isCancelling_o1apv_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.parent_1 = parent;
    this.state_1 = state;
    this.child_1 = child;
    this.proposedUpdate_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).invoke_7fb7sc_k$ = function (cause) {
    continueCompleting(this.parent_1, this.state_1, this.child_1, this.proposedUpdate_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.job_1 = job;
  }
  protoOf(AwaitContinuation).getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    var state = this.job_1.get_state_iypx7s_k$();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
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
      return state.get_cause_iplhs0_k$();
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(AwaitContinuation).nameString_cd9e9w_k$ = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.initCancellability_sh6jkn_k$();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
    tmp$ret$2 = cont.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$2;
    return tmp0;
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_6hwafz_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_d86qwy_k$($this$sequence, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6hwafz_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            this.state0__1 = this.this$0__1.get_state_iypx7s_k$();
            var tmp_0 = this.state0__1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.set_state_a96kl8_k$(6);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.state0__1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.state0__1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.tmp0_safe_receiver1__1 = this.state0__1.get_list_wopuqv_k$();
                if (this.tmp0_safe_receiver1__1 == null) {
                  this.WHEN_RESULT2__1 = null;
                  this.set_state_a96kl8_k$(5);
                  continue $sm;
                } else {
                  this.cur3__1 = this.tmp0_safe_receiver1__1.get__next_inmai1_k$();
                  this.set_state_a96kl8_k$(1);
                  continue $sm;
                }
              } else {
                this.set_state_a96kl8_k$(7);
                continue $sm;
              }
            }

            break;
          case 1:
            if (!!equals(this.cur3__1, this.tmp0_safe_receiver1__1)) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            var tmp_2 = this.cur3__1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.tmp0__anonymous_4_q5x4yb_1 = this.cur3__1;
              this.set_state_a96kl8_k$(2);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.tmp0__anonymous_4_q5x4yb_1.childJob_1, this);
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
            this.cur3__1 = this.cur3__1.get__next_inmai1_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            this.WHEN_RESULT2__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            ;
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_d86qwy_k$ = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_xubfvz_k$ = function (value, completion) {
    return this.create_d86qwy_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_6hwafz_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this._state_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).get_key_18j28a_k$ = function () {
    return Key_getInstance_3();
  };
  protoOf(JobSupport).set_parentHandle_voxu0m_k$ = function (value) {
    this._parentHandle_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  };
  protoOf(JobSupport).get_parentHandle_gmoqez_k$ = function () {
    return this._parentHandle_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(JobSupport).initParentJob_4c2lht_k$ = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.start_1tchgi_k$();
    var handle = parent.attachChild_ik9c8b_k$(this);
    this.set_parentHandle_voxu0m_k$(handle);
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3n44we_k$();
      this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).get_state_iypx7s_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.perform_8emi3i_k$(this);
    }
  };
  protoOf(JobSupport).get_isActive_quafmh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.get_isActive_quafmh_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).get_isCancelled_trk8pu_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.get_isCancelling_o1apv_k$();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).start_1tchgi_k$ = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).onStart_qth026_k$ = function () {
  };
  protoOf(JobSupport).getCancellationException_8i1q6u_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_8ve25p_k$(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
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
          tmp = this.toCancellationException$default_9ghy63_k$(state.get_cause_iplhs0_k$());
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException_8ve25p_k$ = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException$default_9ghy63_k$ = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.toCancellationException_8ve25p_k$(_this__u8e3s4, message) : $super.toCancellationException_8ve25p_k$.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).get_completionCause_bxx3i4_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_elvis_lhs = state.get_rootCause_69dwxu_k$();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = state.get_cause_iplhs0_k$();
        } else {
          tmp = null;
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).get_completionCauseHandled_bdr920_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.<get-completionCauseHandled>.<anonymous>' call
    var tmp;
    if (tmp0_let instanceof CompletedExceptionally) {
      tmp = tmp0_let.get_handled_cq14k3_k$();
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(JobSupport).invokeOnCompletion_t2apld_k$ = function (handler) {
    return this.invokeOnCompletion_npwpyn_k$(false, true, handler);
  };
  protoOf(JobSupport).invokeOnCompletion_npwpyn_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.isActive_1) {
            if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.get_list_wopuqv_k$();
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
                rootCause = tmp0__anonymous__q1qw7t.get_rootCause_69dwxu_k$();
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
                    tmp_2 = !tmp0__anonymous__q1qw7t.get_isCompleting_vi2bwp_k$();
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
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$());
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).join_kbq7u1_k$ = function ($completion) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $completion.get_context_h02k06_k$();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    var tmp0 = joinSuspend(this, $completion);
    return tmp0;
  };
  protoOf(JobSupport).get_onJoin_hnj4j6_k$ = function () {
    return this;
  };
  protoOf(JobSupport).registerSelectClause0_glbs1v_k$ = function (select, block) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.registerSelectClause0.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        if (select.trySelect_1ivjiv_k$()) {
          startCoroutineUnintercepted(block, select.get_completion_t4gxwb_k$());
        }
        return Unit_getInstance();
      }
      if (startInternal(this, tmp0__anonymous__q1qw7t) === 0) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new SelectJoinOnCompletion(select, block);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
        return Unit_getInstance();
      }
    }
  };
  protoOf(JobSupport).removeNode_o3o6t1_k$ = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.get_list_wopuqv_k$() == null)) {
            node.remove_fgfybg_k$();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).get_onCancelComplete_4lfsth_k$ = function () {
    return false;
  };
  protoOf(JobSupport).cancel_4b7aim_k$ = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
  };
  protoOf(JobSupport).cancellationExceptionMessage_a64063_k$ = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).cancel_as6ug7_k$ = function (cause) {
    var tmp0_safe_receiver = cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException$default_9ghy63_k$(tmp0_safe_receiver);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
    return true;
  };
  protoOf(JobSupport).cancelInternal_wqrppy_k$ = function (cause) {
    this.cancelImpl_5ls1mt_k$(cause);
  };
  protoOf(JobSupport).parentCancelled_53w4ri_k$ = function (parentJob) {
    this.cancelImpl_5ls1mt_k$(parentJob);
  };
  protoOf(JobSupport).childCancelled_fdoq8t_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.cancelImpl_5ls1mt_k$(cause) ? this.get_handlesException_f6my9f_k$() : false;
  };
  protoOf(JobSupport).cancelCoroutine_dy4tw5_k$ = function (cause) {
    return this.cancelImpl_5ls1mt_k$(cause);
  };
  protoOf(JobSupport).cancelImpl_5ls1mt_k$ = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.get_onCancelComplete_4lfsth_k$()) {
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
      this.afterCompletion_2ogq6g_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).defaultCancellationException_lkdizi_k$ = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, cause, this);
  };
  protoOf(JobSupport).getChildJobCancellationCause_wx9uoh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.get_rootCause_69dwxu_k$();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.get_cause_iplhs0_k$();
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
  protoOf(JobSupport).makeCompleting_2ycklh_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.afterCompletion_2ogq6g_k$(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).makeCompletingOnce_b13xy2_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
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
  protoOf(JobSupport).get_children_4cwbp4_k$ = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).attachChild_ik9c8b_k$ = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.invokeOnCompletion$default_gp7u53_k$(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).handleOnCompletionException_o179kb_k$ = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).onCancelling_bxyn9n_k$ = function (cause) {
  };
  protoOf(JobSupport).get_isScopedCoroutine_rwmmff_k$ = function () {
    return false;
  };
  protoOf(JobSupport).get_handlesException_f6my9f_k$ = function () {
    return true;
  };
  protoOf(JobSupport).handleJobException_oc4gxk_k$ = function (exception) {
    return false;
  };
  protoOf(JobSupport).onCompletionInternal_39c1g8_k$ = function (state) {
  };
  protoOf(JobSupport).afterCompletion_2ogq6g_k$ = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.toDebugString_v3moy1_k$() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).toDebugString_v3moy1_k$ = function () {
    return this.nameString_cd9e9w_k$() + '{' + stateString(this, this.get_state_iypx7s_k$()) + '}';
  };
  protoOf(JobSupport).nameString_cd9e9w_k$ = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).get_isCompletedExceptionally_i25lfz_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CompletedExceptionally;
  };
  protoOf(JobSupport).getCompletionExceptionOrNull_snuvbb_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  protoOf(JobSupport).getCompletedInternal_26f4i6_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.get_cause_iplhs0_k$();
    return unboxState(state);
  };
  protoOf(JobSupport).awaitInternal_pz51jj_k$ = function ($completion) {
    $l$loop: while (true) {
      var state = this.get_state_iypx7s_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.get_cause_iplhs0_k$();
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
  protoOf(JobSupport).registerSelectClause1Internal_77s7gf_k$ = function (select, block) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.registerSelectClause1Internal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        if (select.trySelect_1ivjiv_k$()) {
          if (tmp0__anonymous__q1qw7t instanceof CompletedExceptionally) {
            select.resumeSelectWithException_xs2ljz_k$(tmp0__anonymous__q1qw7t.get_cause_iplhs0_k$());
          } else {
            var tmp = unboxState(tmp0__anonymous__q1qw7t);
            startCoroutineUnintercepted_0(block, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), select.get_completion_t4gxwb_k$());
          }
        }
        return Unit_getInstance();
      }
      if (startInternal(this, tmp0__anonymous__q1qw7t) === 0) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new SelectAwaitOnCompletion(select, block);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
        return Unit_getInstance();
      }
    }
  };
  protoOf(JobSupport).selectAwaitCompletion_q773bd_k$ = function (select, block) {
    var state = this.get_state_iypx7s_k$();
    if (state instanceof CompletedExceptionally) {
      select.resumeSelectWithException_xs2ljz_k$(state.get_cause_iplhs0_k$());
    } else {
      var tmp = unboxState(state);
      startCoroutineCancellable(block, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), select.get_completion_t4gxwb_k$());
    }
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
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function get_RETRY() {
    return RETRY;
  }
  var RETRY;
  function InactiveNodeList(list) {
    this.list_1 = list;
  }
  protoOf(InactiveNodeList).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(InactiveNodeList).get_isActive_quafmh_k$ = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.list_1.getString_xqex6i_k$('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.childJob_1 = childJob;
  }
  protoOf(ChildHandleNode).get_childJob_4cx54m_k$ = function () {
    return this.childJob_1;
  };
  protoOf(ChildHandleNode).get_parent_hy4reb_k$ = function () {
    return this.get_job_18j2r0_k$();
  };
  protoOf(ChildHandleNode).invoke_7fb7sc_k$ = function (cause) {
    return this.childJob_1.parentCancelled_53w4ri_k$(this.get_job_18j2r0_k$());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(ChildHandleNode).childCancelled_fdoq8t_k$ = function (cause) {
    return this.get_job_18j2r0_k$().childCancelled_fdoq8t_k$(cause);
  };
  function _get_handler__z70553_0($this) {
    return $this.handler_1;
  }
  function _get__invoked__yhwoci($this) {
    return $this._invoked_1;
  }
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.handler_1 = handler;
    this._invoked_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).invoke_7fb7sc_k$ = function (cause) {
    if (this._invoked_1.atomicfu$compareAndSet(0, 1))
      this.handler_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_handler__z70553_1($this) {
    return $this.handler_1;
  }
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.handler_1 = handler;
  }
  protoOf(InvokeOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    return this.handler_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_continuation__y3gzck_1($this) {
    return $this.continuation_1;
  }
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp1_resume = this.continuation_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp1_resume.resumeWith_s3a3yh_k$(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_select__irrld($this) {
    return $this.select_1;
  }
  function _get_block__jewopo($this) {
    return $this.block_1;
  }
  function SelectJoinOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(SelectJoinOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      startCoroutineCancellable_0(this.block_1, this.select_1.get_completion_t4gxwb_k$());
    }
  };
  protoOf(SelectJoinOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.state_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _get_continuation__y3gzck_2($this) {
    return $this.continuation_1;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    var state = this.get_job_18j2r0_k$().get_state_iypx7s_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp1_resumeWithException = this.continuation_1;
      var tmp2_resumeWithException = state.get_cause_iplhs0_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
      tmp1_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp4_resume = this.continuation_1;
      var tmp = unboxState(state);
      var tmp5_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp3_success = Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp5_resume);
      tmp4_resume.resumeWith_s3a3yh_k$(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_select__irrld_0($this) {
    return $this.select_1;
  }
  function _get_block__jewopo_0($this) {
    return $this.block_1;
  }
  function SelectAwaitOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(SelectAwaitOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      this.get_job_18j2r0_k$().selectAwaitCompletion_q773bd_k$(this.select_1, this.block_1);
    }
  };
  protoOf(SelectAwaitOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function IncompleteStateBox(state) {
    this.state_1 = state;
  }
  protoOf(IncompleteStateBox).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.child_1 = child;
  }
  protoOf(ChildContinuation).get_child_ipppmb_k$ = function () {
    return this.child_1;
  };
  protoOf(ChildContinuation).invoke_7fb7sc_k$ = function (cause) {
    this.child_1.parentCancelled_uc06zq_k$(this.child_1.getContinuationCancellationCause_62o4c9_k$(this.get_job_18j2r0_k$()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function handlesException($this) {
    var tmp = $this.get_parentHandle_gmoqez_k$();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_job_18j2r0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.get_handlesException_f6my9f_k$())
        return true;
      var tmp_1 = parentJob.get_parentHandle_gmoqez_k$();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_job_18j2r0_k$();
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
    this.initParentJob_4c2lht_k$(parent);
    this.handlesException_1 = handlesException(this);
  }
  protoOf(JobImpl).get_onCancelComplete_4lfsth_k$ = function () {
    return true;
  };
  protoOf(JobImpl).get_handlesException_f6my9f_k$ = function () {
    return this.handlesException_1;
  };
  protoOf(JobImpl).complete_9ww6vb_k$ = function () {
    return this.makeCompleting_2ycklh_k$(Unit_getInstance());
  };
  protoOf(JobImpl).completeExceptionally_7s0ccc_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(new CompletedExceptionally(exception));
  };
  function _get_handle__ls055p_0($this) {
    return $this.handle_1;
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.handle_1 = handle;
  }
  protoOf(DisposeOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
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
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(MainCoroutineDispatcher).toStringInternalImpl_hcqz93_k$ = function () {
    var main = Dispatchers_getInstance().get_Main_wo5vz6_k$();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.get_immediate_r3y8eg_k$();
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
  protoOf(SupervisorJobImpl).childCancelled_fdoq8t_k$ = function (cause) {
    return false;
  };
  function TimeoutCancellationException_init_$Init$(message, $this) {
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_init_$Create$(message) {
    var tmp = TimeoutCancellationException_init_$Init$(message, objectCreate(protoOf(TimeoutCancellationException)));
    captureStack(tmp, TimeoutCancellationException_init_$Create$);
    return tmp;
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.coroutine_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).get_coroutine_cnpmtt_k$ = function () {
    return this.coroutine_1;
  };
  protoOf(TimeoutCancellationException).createCopy_mmw9ld_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = this.message;
    var tmp0_also = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.coroutine_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.TimeoutCancellationException.createCopy.<anonymous>' call
    initCause(tmp0_also, this);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$2(timeMillis, block, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.get_context_h02k06_k$(), uCont);
    this.time_1 = time;
  }
  protoOf(TimeoutCoroutine).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(TimeoutCoroutine).run_mw4iiu_k$ = function () {
    this.cancelCoroutine_dy4tw5_k$(TimeoutCancellationException_0(this.time_1, this));
  };
  protoOf(TimeoutCoroutine).nameString_cd9e9w_k$ = function () {
    return protoOf(ScopeCoroutine).nameString_cd9e9w_k$.call(this) + '(timeMillis=' + toString_0(this.time_1) + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.get_uCont_iyyiam_k$();
    var context = cont.get_context_h02k06_k$();
    disposeOnCompletion(coroutine, get_delay(context).invokeOnTimeout_sx2bqq_k$(coroutine.time_1, coroutine, coroutine.get_context_h02k06_k$()));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + toString_0(time) + ' ms', coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$2(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.timeMillis_1 = timeMillis;
    this.block_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (this.timeMillis_1.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
              return null;
            this.coroutine0__1 = {_v: null};
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0__anonymous__q1qw7t = this;
            var timeoutCoroutine = new TimeoutCoroutine(this.timeMillis_1, tmp0__anonymous__q1qw7t);
            this.coroutine0__1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.block_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              if (e.coroutine_1 === this.coroutine0__1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).limitedParallelism_glrman_k$ = function (parallelism) {
    throw UnsupportedOperationException_init_$Create$('limitedParallelism is not supported for Dispatchers.Unconfined');
  };
  protoOf(Unconfined).isDispatchNeeded_fmz9vn_k$ = function (context) {
    return false;
  };
  protoOf(Unconfined).dispatch_o98ux7_k$ = function (context, block) {
    var yieldContext = context.get_j1ktw6_k$(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined_1 = true;
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
  function Key_4() {
    Key_instance_3 = this;
  }
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function YieldContext() {
    Key_getInstance_4();
    AbstractCoroutineContextElement.call(this, Key_getInstance_4());
    this.dispatcherWasUnconfined_1 = false;
  }
  protoOf(YieldContext).set_dispatcherWasUnconfined_6oi8pp_k$ = function (_set____db54di) {
    this.dispatcherWasUnconfined_1 = _set____db54di;
  };
  protoOf(YieldContext).get_dispatcherWasUnconfined_gkf39i_k$ = function () {
    return this.dispatcherWasUnconfined_1;
  };
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
  function _get_receive__lsa4cu($this) {
    return $this.receive_1;
  }
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.closeCause_1 == null))
        throw recoverStackTrace_0(result.get_receiveException_nqbiq3_k$());
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
        if (enqueueReceive($this.channel_1, receive)) {
          removeReceiveOnCancel($this.channel_1, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.channel_1.pollInternal_ml771g_k$();
        $this.result_1 = result;
        if (result instanceof Closed) {
          if (result.closeCause_1 == null) {
            var tmp$ret$2;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.resumeWith_s3a3yh_k$(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp2_resumeWithException = result.get_receiveException_nqbiq3_k$();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            var tmp1_failure = Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
            cancellable.resumeWith_s3a3yh_k$(tmp$ret$3);
            tmp$ret$4 = Unit_getInstance();
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.channel_1.onUndeliveredElement_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.get_context_h02k06_k$());
          }
          cancellable.resume_l1w5in_k$(true, tmp);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$5 = cancellable.getResult_clfhg3_k$();
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
      if ($this.onUndeliveredElement_1 == null) {
        tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.onUndeliveredElement_1);
      }
      var receive = tmp;
      while (true) {
        if (enqueueReceive($this, receive)) {
          removeReceiveOnCancel($this, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.pollInternal_ml771g_k$();
        if (result instanceof Closed) {
          receive.resumeReceiveClosed_ep2qlw_k$(result);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp_0 = receive.resumeValue_nsekne_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
          cancellable.resume_l1w5in_k$(tmp_0, receive.resumeOnCancellationFun_ya26h6_k$((result == null ? true : isObject(result)) ? result : THROW_CCE()));
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$1 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$1;
    return tmp0;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.enqueueReceiveInternal_rxtsl7_k$(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.onReceiveEnqueued_xu1a6p_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function TryPollDesc(queue) {
    RemoveFirstDesc.call(this, queue);
  }
  protoOf(TryPollDesc).failure_mowj19_k$ = function (affected) {
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (!(tmp0_subject instanceof Send)) {
        tmp = get_POLL_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(TryPollDesc).onPrepare_soaf0c_k$ = function (prepareOp) {
    var tmp = prepareOp.get_affected_lutt4z_k$();
    var affected = tmp instanceof Send ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeSend_93c6it_k$(prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return get_REMOVE_PREPARED();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === get_RETRY_ATOMIC())
      return get_RETRY_ATOMIC();
    // Inline function 'kotlinx.coroutines.assert' call
    return null;
  };
  protoOf(TryPollDesc).onRemoved_gagg6z_k$ = function (affected) {
    (affected instanceof Send ? affected : THROW_CCE()).undeliveredElement_djsee8_k$();
  };
  function registerSelectReceiveMode($this, select, receiveMode, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if ($this.get_isEmptyImpl_9w6w0q_k$()) {
        if (enqueueReceiveSelect($this, select, block, receiveMode))
          return Unit_getInstance();
      } else {
        var pollResult = $this.pollSelectInternal_puj25v_k$(select);
        if (pollResult === get_ALREADY_SELECTED())
          return Unit_getInstance();
        else if (pollResult === get_POLL_FAILED()) {
        } else if (pollResult === get_RETRY_ATOMIC()) {
        } else {
          tryStartBlockUnintercepted(block, $this, select, receiveMode, pollResult);
        }
      }
    }
  }
  function tryStartBlockUnintercepted(_this__u8e3s4, $this, select, receiveMode, value) {
    var tmp0_subject = value;
    if (tmp0_subject instanceof Closed) {
      var tmp1_subject = receiveMode;
      if (tmp1_subject === 0) {
        throw recoverStackTrace_0(value.get_receiveException_nqbiq3_k$());
      } else if (tmp1_subject === 1) {
        if (!select.trySelect_1ivjiv_k$())
          return Unit_getInstance();
        startCoroutineUnintercepted_0(_this__u8e3s4, new ChannelResult(Companion_getInstance_1().closed_raq7mh_k$(value.closeCause_1)), select.get_completion_t4gxwb_k$());
      }
    } else {
      if (receiveMode === 1) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.toResult' call
        var tmp;
        if (value instanceof Closed) {
          tmp = Companion_getInstance_1().closed_raq7mh_k$(value.closeCause_1);
        } else {
          var tmp_0 = Companion_getInstance_1();
          tmp = tmp_0.success_qotpmt_k$((value == null ? true : isObject(value)) ? value : THROW_CCE());
        }
        tmp$ret$0 = tmp;
        startCoroutineUnintercepted_0(_this__u8e3s4, new ChannelResult(tmp$ret$0), select.get_completion_t4gxwb_k$());
      } else {
        startCoroutineUnintercepted_0(_this__u8e3s4, value, select.get_completion_t4gxwb_k$());
      }
    }
  }
  function enqueueReceiveSelect($this, select, block, receiveMode) {
    var node = new ReceiveSelect($this, select, block, receiveMode);
    var result = enqueueReceive($this, node);
    if (result) {
      select.disposeOnSelect_lrl426_k$(node);
    }
    return result;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return cont.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.$this_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.receive_1 = receive;
  }
  protoOf(RemoveReceiveOnCancel).invoke_7fb7sc_k$ = function (cause) {
    if (this.receive_1.remove_fgfybg_k$()) {
      this.$this_1.onReceiveDequeued_4wpjax_k$();
    }
  };
  protoOf(RemoveReceiveOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(RemoveReceiveOnCancel).toString = function () {
    return 'RemoveReceiveOnCancel[' + this.receive_1 + ']';
  };
  function Itr(channel) {
    this.channel_1 = channel;
    this.result_1 = get_POLL_FAILED();
  }
  protoOf(Itr).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(Itr).set_result_kw7ubu_k$ = function (_set____db54di) {
    this.result_1 = _set____db54di;
  };
  protoOf(Itr).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(Itr).hasNext_4tgia2_k$ = function ($completion) {
    if (!(this.result_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.result_1);
    this.result_1 = this.channel_1.pollInternal_ml771g_k$();
    if (!(this.result_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.result_1);
    var tmp0 = hasNextSuspend(this, $completion);
    return tmp0;
  };
  protoOf(Itr).next_20eer_k$ = function () {
    var result = this.result_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.get_receiveException_nqbiq3_k$());
    if (!(result === get_POLL_FAILED())) {
      this.result_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.cont_1 = cont;
    this.receiveMode_1 = receiveMode;
  }
  protoOf(ReceiveElement).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(ReceiveElement).get_receiveMode_kw93yb_k$ = function () {
    return this.receiveMode_1;
  };
  protoOf(ReceiveElement).resumeValue_nsekne_k$ = function (value) {
    var tmp0_subject = this.receiveMode_1;
    return tmp0_subject === 1 ? new ChannelResult(Companion_getInstance_1().success_qotpmt_k$(value)) : value;
  };
  protoOf(ReceiveElement).tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp = this.resumeValue_nsekne_k$(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.cont_1.tryResume_93jc0s_k$(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_desc_woknve_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
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
      tmp2_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveElement).completeResumeReceive_1cyi5u_k$ = function (value) {
    return this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  protoOf(ReceiveElement).resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    if (this.receiveMode_1 === 1) {
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp1_resume = this.cont_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      tmp$ret$0 = Companion_getInstance_1().closed_raq7mh_k$(closed.closeCause_1);
      var tmp2_resume = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(new ChannelResult(tmp2_resume));
      tmp1_resume.resumeWith_s3a3yh_k$(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp4_resumeWithException = this.cont_1;
      var tmp5_resumeWithException = closed.get_receiveException_nqbiq3_k$();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      var tmp3_failure = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp5_resumeWithException));
      tmp4_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  protoOf(ReceiveElement).toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.receiveMode_1 + ']';
  };
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  protoOf(ReceiveElementWithUndeliveredHandler).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(ReceiveElementWithUndeliveredHandler).resumeOnCancellationFun_ya26h6_k$ = function (value) {
    return bindCancellationFun(this.onUndeliveredElement_1, value, this.cont_1.get_context_h02k06_k$());
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.iterator_1 = iterator;
    this.cont_1 = cont;
  }
  protoOf(ReceiveHasNext).get_iterator_c8vxs9_k$ = function () {
    return this.iterator_1;
  };
  protoOf(ReceiveHasNext).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(ReceiveHasNext).tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.cont_1.tryResume_93jc0s_k$(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_desc_woknve_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
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
      tmp2_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveHasNext).completeResumeReceive_1cyi5u_k$ = function (value) {
    this.iterator_1.result_1 = value;
    this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  protoOf(ReceiveHasNext).resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    var tmp;
    if (closed.closeCause_1 == null) {
      tmp = this.cont_1.tryResume$default_32aap5_k$(false);
    } else {
      tmp = this.cont_1.tryResumeWithException_3icka9_k$(closed.get_receiveException_nqbiq3_k$());
    }
    var token = tmp;
    if (!(token == null)) {
      this.iterator_1.result_1 = closed;
      this.cont_1.completeResume_fu4ex_k$(token);
    }
  };
  protoOf(ReceiveHasNext).resumeOnCancellationFun_ya26h6_k$ = function (value) {
    var tmp0_safe_receiver = this.iterator_1.channel_1.onUndeliveredElement_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.cont_1.get_context_h02k06_k$());
  };
  protoOf(ReceiveHasNext).toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  function ReceiveSelect(channel, select, block, receiveMode) {
    Receive.call(this);
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
    this.receiveMode_1 = receiveMode;
  }
  protoOf(ReceiveSelect).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(ReceiveSelect).get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  protoOf(ReceiveSelect).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(ReceiveSelect).get_receiveMode_kw93yb_k$ = function () {
    return this.receiveMode_1;
  };
  protoOf(ReceiveSelect).tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp = this.select_1.trySelectOther_zha44u_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  protoOf(ReceiveSelect).completeResumeReceive_1cyi5u_k$ = function (value) {
    startCoroutineCancellable(this.block_1, this.receiveMode_1 === 1 ? new ChannelResult(Companion_getInstance_1().success_qotpmt_k$(value)) : value, this.select_1.get_completion_t4gxwb_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
  };
  protoOf(ReceiveSelect).resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    if (!this.select_1.trySelect_1ivjiv_k$())
      return Unit_getInstance();
    var tmp0_subject = this.receiveMode_1;
    if (tmp0_subject === 0) {
      this.select_1.resumeSelectWithException_xs2ljz_k$(closed.get_receiveException_nqbiq3_k$());
    } else if (tmp0_subject === 1) {
      startCoroutineCancellable(this.block_1, new ChannelResult(Companion_getInstance_1().closed_raq7mh_k$(closed.closeCause_1)), this.select_1.get_completion_t4gxwb_k$());
    }
  };
  protoOf(ReceiveSelect).dispose_3n44we_k$ = function () {
    if (this.remove_fgfybg_k$()) {
      this.channel_1.onReceiveDequeued_4wpjax_k$();
    }
  };
  protoOf(ReceiveSelect).resumeOnCancellationFun_ya26h6_k$ = function (value) {
    var tmp0_safe_receiver = this.channel_1.onUndeliveredElement_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.select_1.get_completion_t4gxwb_k$().get_context_h02k06_k$());
  };
  protoOf(ReceiveSelect).toString = function () {
    return 'ReceiveSelect@' + get_hexAddress(this) + '[' + this.select_1 + ',receiveMode=' + this.receiveMode_1 + ']';
  };
  function AbstractChannel$onReceive$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(AbstractChannel$onReceive$1).registerSelectClause1_n2iwro_k$ = function (select, block) {
    registerSelectReceiveMode(this.this$0__1, select, 0, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  protoOf(AbstractChannel$onReceive$1).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_n2iwro_k$(select, block);
  };
  function AbstractChannel$onReceiveCatching$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(AbstractChannel$onReceiveCatching$1).registerSelectClause1_bsb2fm_k$ = function (select, block) {
    registerSelectReceiveMode(this.this$0__1, select, 1, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  protoOf(AbstractChannel$onReceiveCatching$1).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_bsb2fm_k$(select, block);
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  protoOf(AbstractChannel).pollInternal_ml771g_k$ = function () {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstSendOrPeekClosed_h7sgez_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.tryResumeSend_93c6it_k$(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.completeResumeSend_upvqar_k$();
        return send.get_pollResult_t5mkl7_k$();
      }
      send.undeliveredElement_djsee8_k$();
    }
  };
  protoOf(AbstractChannel).pollSelectInternal_puj25v_k$ = function (select) {
    var pollOp = this.describeTryPoll_k2m4a9_k$();
    var failure = select.performAtomicTrySelect_9r1u91_k$(pollOp);
    if (!(failure == null))
      return failure;
    var send = pollOp.get_result_iyg5d2_k$();
    send.completeResumeSend_upvqar_k$();
    return pollOp.get_result_iyg5d2_k$().get_pollResult_t5mkl7_k$();
  };
  protoOf(AbstractChannel).get_hasReceiveOrClosed_wl54xr_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.get__next_inmai1_k$();
    var tmp = tmp$ret$0;
    return isInterface(tmp, ReceiveOrClosed);
  };
  protoOf(AbstractChannel).get_isClosedForReceive_v0r77d_k$ = function () {
    return !(this.get_closedForReceive_iep3v5_k$() == null) ? this.get_isBufferEmpty_t57jne_k$() : false;
  };
  protoOf(AbstractChannel).get_isEmpty_zauvru_k$ = function () {
    return this.get_isEmptyImpl_9w6w0q_k$();
  };
  protoOf(AbstractChannel).get_isEmptyImpl_9w6w0q_k$ = function () {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.get__next_inmai1_k$();
    var tmp_0 = tmp$ret$0;
    if (!(tmp_0 instanceof Send)) {
      tmp = this.get_isBufferEmpty_t57jne_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AbstractChannel).receive_ihhf9g_k$ = function ($completion) {
    var result = this.pollInternal_ml771g_k$();
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
  protoOf(AbstractChannel).enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp;
    if (this.get_isBufferAlwaysEmpty_ross6j_k$()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.queue_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.get__prev_inntnt_k$();
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.addLast_uyctnf_k$(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.queue_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.get__prev_inntnt_k$();
        tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        tmp$ret$4 = this.get_isBufferEmpty_t57jne_k$();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.addLast_uyctnf_k$(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(AbstractChannel).receiveCatching_wrys2l_k$ = function ($completion) {
    var result = this.pollInternal_ml771g_k$();
    if (!(result === get_POLL_FAILED())) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      var tmp;
      if (result instanceof Closed) {
        tmp = Companion_getInstance_1().closed_raq7mh_k$(result.closeCause_1);
      } else {
        var tmp_0 = Companion_getInstance_1();
        tmp = tmp_0.success_qotpmt_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
      }
      tmp$ret$0 = tmp;
      return new ChannelResult(tmp$ret$0);
    }
    var tmp_1 = receiveSuspend(this, 1, $completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      return tmp_1;
    var tmp0 = new ChannelResult(tmp_1.holder_1);
    return tmp0;
  };
  protoOf(AbstractChannel).tryReceive_5r5v2p_k$ = function () {
    var result = this.pollInternal_ml771g_k$();
    if (result === get_POLL_FAILED())
      return Companion_getInstance_1().failure_gnxj6a_k$();
    if (result instanceof Closed)
      return Companion_getInstance_1().closed_raq7mh_k$(result.closeCause_1);
    var tmp = Companion_getInstance_1();
    return tmp.success_qotpmt_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
  };
  protoOf(AbstractChannel).cancel_as6ug7_k$ = function (cause) {
    return this.cancelInternal_vex9ac_k$(cause);
  };
  protoOf(AbstractChannel).cancel_4b7aim_k$ = function (cause) {
    if (this.get_isClosedForReceive_v0r77d_k$())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.cancelInternal_vex9ac_k$(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  protoOf(AbstractChannel).cancelInternal_vex9ac_k$ = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.close_9zy44b_k$(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.onCancelIdempotent_1zp8pj_k$(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(AbstractChannel).onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
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
      tmp$ret$0 = closed.get__prev_inntnt_k$();
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3vfak_k$();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.onCancelIdempotentList_icdvp_k$(list, closed);
  };
  protoOf(AbstractChannel).onCancelIdempotentList_icdvp_k$ = function (list, closed) {
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
          tmp0__anonymous__q1qw7t.resumeSendClosed_r0hgr7_k$(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.get_fkrdnv_k$(i);
              tmp1__anonymous__uwfjfc.resumeSendClosed_r0hgr7_k$(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  protoOf(AbstractChannel).iterator_jk1svi_k$ = function () {
    return new Itr(this);
  };
  protoOf(AbstractChannel).describeTryPoll_k2m4a9_k$ = function () {
    return new TryPollDesc(this.queue_1);
  };
  protoOf(AbstractChannel).get_onReceive_mimw11_k$ = function () {
    return new AbstractChannel$onReceive$1(this);
  };
  protoOf(AbstractChannel).get_onReceiveCatching_ajg9xa_k$ = function () {
    return new AbstractChannel$onReceiveCatching$1(this);
  };
  protoOf(AbstractChannel).takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = protoOf(AbstractSendChannel).takeFirstReceiveOrPeekClosed_ri9e84_k$.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.onReceiveDequeued_4wpjax_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(AbstractChannel).onReceiveEnqueued_xu1a6p_k$ = function () {
  };
  protoOf(AbstractChannel).onReceiveDequeued_4wpjax_k$ = function () {
  };
  function _get_onCloseHandler__k3p6yi($this) {
    return $this.onCloseHandler_1;
  }
  function SendBufferedDesc(queue, element) {
    AddLastDesc.call(this, queue, new SendBuffered(element));
  }
  protoOf(SendBufferedDesc).failure_mowj19_k$ = function (affected) {
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (isInterface(tmp0_subject, ReceiveOrClosed)) {
        tmp = get_OFFER_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  function _get_isFullImpl__v905xu($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.get__next_inmai1_k$();
    var tmp_0 = tmp$ret$0;
    if (!isInterface(tmp_0, ReceiveOrClosed)) {
      tmp = $this.get_isBufferFull_xv8jm_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.get_sendException_qpq1ry_k$();
  }
  function helpCloseAndGetSendException_0($this, element, closed) {
    helpClose($this, closed);
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, closed.get_sendException_qpq1ry_k$());
      throw tmp1_safe_receiver;
    }
    return closed.get_sendException_qpq1ry_k$();
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
          var send = $this.onUndeliveredElement_1 == null ? new SendElement(element, cancellable) : new SendElementWithUndeliveredHandler(element, cancellable, $this.onUndeliveredElement_1);
          var enqueueResult = $this.enqueueSend_9ksp3t_k$(send);
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
        var offerResult = $this.offerInternal_tuzlq7_k$(element);
        if (offerResult === get_OFFER_SUCCESS()) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.success' call
          var tmp1_success = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
          cancellable.resumeWith_s3a3yh_k$(tmp$ret$1);
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
    tmp$ret$3 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$3;
    return tmp0;
  }
  function helpCloseAndResumeWithSendException(_this__u8e3s4, $this, element, closed) {
    helpClose($this, closed);
    var sendException = closed.get_sendException_qpq1ry_k$();
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
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
      _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    }
    var tmp$ret$4;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp$ret$3;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure_0 = Companion_getInstance();
    tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(sendException));
    _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$3);
    tmp$ret$4 = Unit_getInstance();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.onCloseHandler_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.onCloseHandler_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.get__prev_inntnt_k$();
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3vfak_k$();
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
          tmp1__anonymous__uwfjfc.resumeReceiveClosed_ep2qlw_k$(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = list.get_fkrdnv_k$(i);
              tmp2__anonymous__z9zvc9.resumeReceiveClosed_ep2qlw_k$(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.onClosedIdempotent_57xn14_k$(closed);
  }
  function TryOfferDesc(element, queue) {
    RemoveFirstDesc.call(this, queue);
    this.element_1 = element;
  }
  protoOf(TryOfferDesc).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(TryOfferDesc).failure_mowj19_k$ = function (affected) {
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (!isInterface(tmp0_subject, ReceiveOrClosed)) {
        tmp = get_OFFER_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(TryOfferDesc).onPrepare_soaf0c_k$ = function (prepareOp) {
    var tmp = prepareOp.get_affected_lutt4z_k$();
    var affected = isInterface(tmp, ReceiveOrClosed) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeReceive_mpjrre_k$(this.element_1, prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return get_REMOVE_PREPARED();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === get_RETRY_ATOMIC())
      return get_RETRY_ATOMIC();
    // Inline function 'kotlinx.coroutines.assert' call
    return null;
  };
  function registerSelectSend($this, select, element, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (_get_isFullImpl__v905xu($this)) {
        var node = new SendSelect(element, $this, select, block);
        var enqueueResult = $this.enqueueSend_9ksp3t_k$(node);
        if (enqueueResult == null) {
          select.disposeOnSelect_lrl426_k$(node);
          return Unit_getInstance();
        } else {
          if (enqueueResult instanceof Closed)
            throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, enqueueResult));
          else {
            if (enqueueResult === get_ENQUEUE_FAILED()) {
            } else {
              if (enqueueResult instanceof Receive) {
              } else {
                var tmp0_error = 'enqueueSend returned ' + toString(enqueueResult) + ' ';
                throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
              }
            }
          }
        }
      }
      var offerResult = $this.offerSelectInternal_lspj9s_k$(element, select);
      if (offerResult === get_ALREADY_SELECTED())
        return Unit_getInstance();
      else {
        if (offerResult === get_OFFER_FAILED()) {
        } else {
          if (offerResult === get_RETRY_ATOMIC()) {
          } else {
            if (offerResult === get_OFFER_SUCCESS()) {
              startCoroutineUnintercepted_0(block, $this, select.get_completion_t4gxwb_k$());
              return Unit_getInstance();
            } else {
              if (offerResult instanceof Closed)
                throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, offerResult));
              else {
                var tmp1_error = 'offerSelectInternal returned ' + toString_0(offerResult);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              }
            }
          }
        }
      }
    }
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.get__next_inmai1_k$();
    var head = tmp$ret$0;
    if (head === $this.queue_1)
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
    var tmp1__get_prevNode__b1i0ed = $this.queue_1;
    tmp$ret$1 = tmp1__get_prevNode__b1i0ed.get__prev_inntnt_k$();
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
    var tmp0_forEach = $this.queue_1;
    var cur = tmp0_forEach.get__next_inmai1_k$();
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        var tmp1__anonymous__uwfjfc = cur;
        var tmp0 = size;
        size = tmp0 + 1 | 0;
      }
      cur = cur.get__next_inmai1_k$();
    }
    return size;
  }
  function SendSelect(pollResult, channel, select, block) {
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(SendSelect).get_pollResult_t5mkl7_k$ = function () {
    return this.pollResult_1;
  };
  protoOf(SendSelect).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(SendSelect).get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  protoOf(SendSelect).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(SendSelect).tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp = this.select_1.trySelectOther_zha44u_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  protoOf(SendSelect).completeResumeSend_upvqar_k$ = function () {
    startCoroutineCancellable(this.block_1, this.channel_1, this.select_1.get_completion_t4gxwb_k$());
  };
  protoOf(SendSelect).dispose_3n44we_k$ = function () {
    if (!this.remove_fgfybg_k$())
      return Unit_getInstance();
    this.undeliveredElement_djsee8_k$();
  };
  protoOf(SendSelect).resumeSendClosed_r0hgr7_k$ = function (closed) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      this.select_1.resumeSelectWithException_xs2ljz_k$(closed.get_sendException_qpq1ry_k$());
    }
  };
  protoOf(SendSelect).undeliveredElement_djsee8_k$ = function () {
    var tmp0_safe_receiver = this.channel_1.onUndeliveredElement_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, this.pollResult_1, this.select_1.get_completion_t4gxwb_k$().get_context_h02k06_k$());
    }
  };
  protoOf(SendSelect).toString = function () {
    return 'SendSelect@' + get_hexAddress(this) + '(' + this.pollResult_1 + ')[' + this.channel_1 + ', ' + this.select_1 + ']';
  };
  function SendBuffered(element) {
    Send.call(this);
    this.element_1 = element;
  }
  protoOf(SendBuffered).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(SendBuffered).get_pollResult_t5mkl7_k$ = function () {
    return this.element_1;
  };
  protoOf(SendBuffered).tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(SendBuffered).completeResumeSend_upvqar_k$ = function () {
  };
  protoOf(SendBuffered).resumeSendClosed_r0hgr7_k$ = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  protoOf(SendBuffered).toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.element_1 + ')';
  };
  function AbstractSendChannel$onSend$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(AbstractSendChannel$onSend$1).registerSelectClause2_5777du_k$ = function (select, param, block) {
    registerSelectSend(this.this$0__1, select, param, block);
  };
  protoOf(AbstractSendChannel$onSend$1).registerSelectClause2_5jxiui_k$ = function (select, param, block) {
    return this.registerSelectClause2_5777du_k$(select, (param == null ? true : isObject(param)) ? param : THROW_CCE(), block);
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.onUndeliveredElement_1 = onUndeliveredElement;
    this.queue_1 = new LinkedListHead();
    this.onCloseHandler_1 = atomic$ref$1(null);
  }
  protoOf(AbstractSendChannel).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(AbstractSendChannel).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(AbstractSendChannel).offerInternal_tuzlq7_k$ = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.tryResumeReceive_mpjrre_k$(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.completeResumeReceive_1cyi5u_k$(element);
        return receive.get_offerResult_jdi2i8_k$();
      }
    }
  };
  protoOf(AbstractSendChannel).offerSelectInternal_lspj9s_k$ = function (element, select) {
    var offerOp = this.describeTryOffer_6o0iky_k$(element);
    var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
    if (!(failure == null))
      return failure;
    var receive = offerOp.get_result_iyg5d2_k$();
    receive.completeResumeReceive_1cyi5u_k$(element);
    return receive.get_offerResult_jdi2i8_k$();
  };
  protoOf(AbstractSendChannel).get_closedForSend_4r8ipo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp0__get_prevNode__2ljhpg = this.queue_1;
    tmp$ret$0 = tmp0__get_prevNode__2ljhpg.get__prev_inntnt_k$();
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
  protoOf(AbstractSendChannel).get_closedForReceive_iep3v5_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.get__next_inmai1_k$();
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
  protoOf(AbstractSendChannel).takeFirstSendOrPeekClosed_h7sgez_k$ = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.queue_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.get__next_inmai1_k$();
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
      var tmp0_check = next.removeImpl_i5v938_k$();
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
  protoOf(AbstractSendChannel).sendBuffered_4b6ooj_k$ = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.queue_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.get__prev_inntnt_k$();
      if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
        return tmp2__anonymous__z9zvc9;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.addLast_uyctnf_k$(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  protoOf(AbstractSendChannel).describeSendBuffered_gmw7y0_k$ = function (element) {
    return new SendBufferedDesc(this.queue_1, element);
  };
  protoOf(AbstractSendChannel).get_isClosedForSend_ajczci_k$ = function () {
    return !(this.get_closedForSend_4r8ipo_k$() == null);
  };
  protoOf(AbstractSendChannel).send_4idxxh_k$ = function (element, $completion) {
    if (this.offerInternal_tuzlq7_k$(element) === get_OFFER_SUCCESS())
      return Unit_getInstance();
    var tmp0 = sendSuspend(this, element, $completion);
    return tmp0;
  };
  protoOf(AbstractSendChannel).offer_pm4fdq_k$ = function (element) {
    try {
      return offer.call(this, element);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        var tmp0_safe_receiver = this.onUndeliveredElement_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp1_safe_receiver, e);
          throw tmp1_safe_receiver;
        }
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(AbstractSendChannel).trySend_3hclq4_k$ = function (element) {
    var result = this.offerInternal_tuzlq7_k$(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().success_qotpmt_k$(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().failure_gnxj6a_k$();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().closed_raq7mh_k$(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().closed_raq7mh_k$(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractSendChannel).enqueueSend_9ksp3t_k$ = function (send) {
    if (this.get_isBufferAlwaysFull_v6nbtb_k$()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.queue_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.get__prev_inntnt_k$();
        if (isInterface(tmp1__anonymous__uwfjfc, ReceiveOrClosed))
          return tmp1__anonymous__uwfjfc;
        tmp$ret$0 = true;
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.addLast_uyctnf_k$(send);
        tmp$ret$1 = true;
      }
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.queue_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.get__prev_inntnt_k$();
        if (isInterface(tmp3__anonymous__ufb84q, ReceiveOrClosed))
          return tmp3__anonymous__ufb84q;
        tmp$ret$2 = true;
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        tmp$ret$4 = this.get_isBufferFull_xv8jm_k$();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.addLast_uyctnf_k$(send);
        tmp$ret$3 = true;
      }
      if (!tmp$ret$3)
        return get_ENQUEUE_FAILED();
    }
    return null;
  };
  protoOf(AbstractSendChannel).close_9zy44b_k$ = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.queue_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.get__prev_inntnt_k$();
      tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.addLast_uyctnf_k$(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp2__get_prevNode__jhgj3a = this.queue_1;
      tmp$ret$2 = tmp2__get_prevNode__jhgj3a.get__prev_inntnt_k$();
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
  protoOf(AbstractSendChannel).invokeOnClose_88rhe6_k$ = function (handler) {
    if (!this.onCloseHandler_1.atomicfu$compareAndSet(null, handler)) {
      var value = this.onCloseHandler_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (value === get_HANDLER_INVOKED()) {
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init_$Create$('Another handler was already registered: ' + toString(value));
    } else {
      var closedToken = this.get_closedForSend_4r8ipo_k$();
      if (!(closedToken == null) ? this.onCloseHandler_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
        handler(closedToken.closeCause_1);
      }
    }
  };
  protoOf(AbstractSendChannel).onClosedIdempotent_57xn14_k$ = function (closed) {
  };
  protoOf(AbstractSendChannel).takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.queue_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.get__next_inmai1_k$();
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
      var tmp0_check = next.removeImpl_i5v938_k$();
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
  protoOf(AbstractSendChannel).describeTryOffer_6o0iky_k$ = function (element) {
    return new TryOfferDesc(element, this.queue_1);
  };
  protoOf(AbstractSendChannel).get_onSend_hnoo40_k$ = function () {
    return new AbstractSendChannel$onSend$1(this);
  };
  protoOf(AbstractSendChannel).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.get_bufferDebugString_66mwn9_k$();
  };
  protoOf(AbstractSendChannel).get_bufferDebugString_66mwn9_k$ = function () {
    return '';
  };
  function Send() {
    LinkedListNode.call(this);
  }
  protoOf(Send).undeliveredElement_djsee8_k$ = function () {
  };
  function ReceiveOrClosed() {
  }
  function Closed(closeCause) {
    Send.call(this);
    this.closeCause_1 = closeCause;
  }
  protoOf(Closed).get_closeCause_gbqkm2_k$ = function () {
    return this.closeCause_1;
  };
  protoOf(Closed).get_sendException_qpq1ry_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).get_receiveException_nqbiq3_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).get_offerResult_jdi2i8_k$ = function () {
    return this;
  };
  protoOf(Closed).get_pollResult_t5mkl7_k$ = function () {
    return this;
  };
  protoOf(Closed).tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(Closed).completeResumeSend_upvqar_k$ = function () {
  };
  protoOf(Closed).tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(Closed).completeResumeReceive_1cyi5u_k$ = function (value) {
  };
  protoOf(Closed).resumeSendClosed_r0hgr7_k$ = function (closed) {
    return Unit_getInstance();
  };
  protoOf(Closed).toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.closeCause_1 + ']';
  };
  function get_RECEIVE_THROWS_ON_CLOSE() {
    return RECEIVE_THROWS_ON_CLOSE;
  }
  var RECEIVE_THROWS_ON_CLOSE;
  function Receive() {
    LinkedListNode.call(this);
  }
  protoOf(Receive).get_offerResult_jdi2i8_k$ = function () {
    return get_OFFER_SUCCESS();
  };
  protoOf(Receive).resumeOnCancellationFun_ya26h6_k$ = function (value) {
    return null;
  };
  function toResult(_this__u8e3s4) {
    _init_properties_AbstractChannel_kt__sw8o27();
    var tmp;
    if (_this__u8e3s4 instanceof Closed) {
      tmp = Companion_getInstance_1().closed_raq7mh_k$(_this__u8e3s4.closeCause_1);
    } else {
      var tmp_0 = Companion_getInstance_1();
      tmp = tmp_0.success_qotpmt_k$((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
    }
    return tmp;
  }
  function get_RECEIVE_RESULT() {
    return RECEIVE_RESULT;
  }
  var RECEIVE_RESULT;
  function toResult_0(_this__u8e3s4) {
    _init_properties_AbstractChannel_kt__sw8o27();
    return Companion_getInstance_1().closed_raq7mh_k$(_this__u8e3s4.closeCause_1);
  }
  function SendElement(pollResult, cont) {
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.cont_1 = cont;
  }
  protoOf(SendElement).get_pollResult_t5mkl7_k$ = function () {
    return this.pollResult_1;
  };
  protoOf(SendElement).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(SendElement).tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.cont_1.tryResume_10oxem_k$(Unit_getInstance(), tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_desc_woknve_k$());
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
      tmp2_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(SendElement).completeResumeSend_upvqar_k$ = function () {
    return this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  protoOf(SendElement).resumeSendClosed_r0hgr7_k$ = function (closed) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp1_resumeWithException = this.cont_1;
    var tmp2_resumeWithException = closed.get_sendException_qpq1ry_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
    tmp1_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  protoOf(SendElement).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '(' + this.get_pollResult_t5mkl7_k$() + ')';
  };
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    SendElement.call(this, pollResult, cont);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  protoOf(SendElementWithUndeliveredHandler).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(SendElementWithUndeliveredHandler).remove_fgfybg_k$ = function () {
    if (!protoOf(SendElement).remove_fgfybg_k$.call(this))
      return false;
    this.undeliveredElement_djsee8_k$();
    return true;
  };
  protoOf(SendElementWithUndeliveredHandler).undeliveredElement_djsee8_k$ = function () {
    callUndeliveredElement(this.onUndeliveredElement_1, this.get_pollResult_t5mkl7_k$(), this.cont_1.get_context_h02k06_k$());
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
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function _get_onBufferOverflow__4ha2pi($this) {
    return $this.onBufferOverflow_1;
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_head__9nromv($this, _set____db54di) {
    $this.head_1 = _set____db54di;
  }
  function _get_head__d7jo8b($this) {
    return $this.head_1;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.capacity_1) {
      $this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(currentSize + 1 | 0);
      return null;
    }
    var tmp0_subject = $this.onBufferOverflow_1;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
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
    if (currentSize < $this.capacity_1) {
      ensureCapacity($this, currentSize);
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.buffer_1[$this.head_1 % $this.buffer_1.length | 0] = null;
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length | 0] = element;
      $this.head_1 = ($this.head_1 + 1 | 0) % $this.buffer_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.buffer_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.buffer_1.length, 2);
      var tmp1_min = $this.capacity_1;
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
          newBuffer[i] = $this.buffer_1[($this.head_1 + i | 0) % $this.buffer_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.buffer_1 = newBuffer;
      $this.head_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.capacity_1 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.capacity_1 + ' was specified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.lock_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.capacity_1;
    tmp$ret$1 = Math.min(tmp0_min, 8);
    var tmp1_arrayOfNulls = tmp$ret$1;
    tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var tmp2_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    fill(tmp2_apply, get_EMPTY());
    tmp$ret$3 = tmp2_apply;
    tmp.buffer_1 = tmp$ret$3;
    this.head_1 = 0;
    this.size_1 = atomic$int$1(0);
  }
  protoOf(ArrayChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return false;
  };
  protoOf(ArrayChannel).get_isBufferEmpty_t57jne_k$ = function () {
    return this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$() === 0;
  };
  protoOf(ArrayChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  protoOf(ArrayChannel).get_isBufferFull_xv8jm_k$ = function () {
    return this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$() === this.capacity_1 ? this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance()) : false;
  };
  protoOf(ArrayChannel).get_isEmpty_zauvru_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isEmpty>.<anonymous>' call
    tmp$ret$0 = this.get_isEmptyImpl_9w6w0q_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ArrayChannel).get_isClosedForReceive_v0r77d_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).get_isClosedForReceive_v0r77d_k$.call(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ArrayChannel).offerInternal_tuzlq7_k$ = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
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
          var tmp2_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).tryResumeReceive_mpjrre_k$(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ArrayChannel).offerSelectInternal_lspj9s_k$ = function (element, select) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerSelectInternal.<anonymous>' call
      var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
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
          var offerOp = this.describeTryOffer_6o0iky_k$(element);
          var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
          if (failure == null) {
            this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
            receive = offerOp.get_result_iyg5d2_k$();
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          } else {
            if (failure === get_OFFER_FAILED())
              break loop;
            else {
              if (failure === get_RETRY_ATOMIC()) {
              } else {
                var tmp;
                if (failure === get_ALREADY_SELECTED()) {
                  tmp = true;
                } else {
                  tmp = failure instanceof Closed;
                }
                if (tmp) {
                  this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
                  return failure;
                } else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
      if (!select.trySelect_1ivjiv_k$()) {
        this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
        return get_ALREADY_SELECTED();
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ArrayChannel).enqueueSend_9ksp3t_k$ = function (send) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueSend.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).enqueueSend_9ksp3t_k$.call(this, send);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ArrayChannel).pollInternal_ml771g_k$ = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (size === 0) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.buffer_1[this.head_1];
    this.buffer_1[this.head_1] = null;
    this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size - 1 | 0);
    var replacement = get_POLL_FAILED();
    if (size === this.capacity_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.takeFirstSendOrPeekClosed_h7sgez_k$();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).tryResumeSend_93c6it_k$(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).get_pollResult_t5mkl7_k$();
          break loop;
        }
        ensureNotNull(send).undeliveredElement_djsee8_k$();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
      this.buffer_1[(this.head_1 + size | 0) % this.buffer_1.length | 0] = replacement;
    }
    this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (resumed) {
      ensureNotNull(send).completeResumeSend_upvqar_k$();
    }
    return result;
  };
  protoOf(ArrayChannel).pollSelectInternal_puj25v_k$ = function (select) {
    var send = null;
    var success = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (size === 0) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.buffer_1[this.head_1];
    this.buffer_1[this.head_1] = null;
    this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size - 1 | 0);
    var replacement = get_POLL_FAILED();
    if (size === this.capacity_1) {
      loop: while (true) {
        var pollOp = this.describeTryPoll_k2m4a9_k$();
        var failure = select.performAtomicTrySelect_9r1u91_k$(pollOp);
        if (failure == null) {
          send = pollOp.get_result_iyg5d2_k$();
          success = true;
          replacement = ensureNotNull(send).get_pollResult_t5mkl7_k$();
          break loop;
        } else {
          if (failure === get_POLL_FAILED())
            break loop;
          else {
            if (failure === get_RETRY_ATOMIC()) {
            } else {
              if (failure === get_ALREADY_SELECTED()) {
                this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
                this.buffer_1[this.head_1] = result;
                return failure;
              } else {
                if (failure instanceof Closed) {
                  send = failure;
                  success = true;
                  replacement = failure;
                  break loop;
                } else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
    }
    var tmp;
    if (!(replacement === get_POLL_FAILED())) {
      tmp = !(replacement instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
      this.buffer_1[(this.head_1 + size | 0) % this.buffer_1.length | 0] = replacement;
    } else {
      if (!select.trySelect_1ivjiv_k$()) {
        this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
        this.buffer_1[this.head_1] = result;
        return get_ALREADY_SELECTED();
      }
    }
    this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (success) {
      ensureNotNull(send).completeResumeSend_upvqar_k$();
    }
    return result;
  };
  protoOf(ArrayChannel).enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).enqueueReceiveInternal_rxtsl7_k$.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ArrayChannel).onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var onUndeliveredElement = this.get_onUndeliveredElement_a8l4w7_k$();
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.buffer_1[this.head_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.buffer_1[this.head_1] = get_EMPTY();
        this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(0);
    tmp$ret$0 = Unit_getInstance();
    protoOf(AbstractChannel).onCancelIdempotent_1zp8pj_k$.call(this, wasClosed);
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
  protoOf(ArrayChannel).get_bufferDebugString_66mwn9_k$ = function () {
    return '(buffer:capacity=' + this.capacity_1 + ',size=' + this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$() + ')';
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  function values_0() {
    return [BufferOverflow_SUSPEND_getInstance(), BufferOverflow_DROP_OLDEST_getInstance(), BufferOverflow_DROP_LATEST_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SUSPEND':
        return BufferOverflow_SUSPEND_getInstance();
      case 'DROP_OLDEST':
        return BufferOverflow_DROP_OLDEST_getInstance();
      case 'DROP_LATEST':
        return BufferOverflow_DROP_LATEST_getInstance();
      default:
        BufferOverflow_initEntries();
        THROW_ISE();
        break;
    }
  }
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
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function Factory() {
    Factory_instance = this;
    this.UNLIMITED_1 = 2147483647;
    this.RENDEZVOUS_1 = 0;
    this.CONFLATED_1 = -1;
    this.BUFFERED_1 = -2;
    this.OPTIONAL_CHANNEL_1 = -3;
    this.DEFAULT_BUFFER_PROPERTY_NAME_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.CHANNEL_DEFAULT_CAPACITY_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  protoOf(Factory).get_UNLIMITED_eshsm0_k$ = function () {
    return this.UNLIMITED_1;
  };
  protoOf(Factory).get_RENDEZVOUS_7qhqgu_k$ = function () {
    return this.RENDEZVOUS_1;
  };
  protoOf(Factory).get_CONFLATED_tox14f_k$ = function () {
    return this.CONFLATED_1;
  };
  protoOf(Factory).get_BUFFERED_qzy754_k$ = function () {
    return this.BUFFERED_1;
  };
  protoOf(Factory).get_OPTIONAL_CHANNEL_c6wrw3_k$ = function () {
    return this.OPTIONAL_CHANNEL_1;
  };
  protoOf(Factory).get_DEFAULT_BUFFER_PROPERTY_NAME_rafy59_k$ = function () {
    return this.DEFAULT_BUFFER_PROPERTY_NAME_1;
  };
  protoOf(Factory).get_CHANNEL_DEFAULT_CAPACITY_4xco1p_k$ = function () {
    return this.CHANNEL_DEFAULT_CAPACITY_1;
  };
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  function SendChannel() {
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function $next0COROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($next0COROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE());
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            return this._this__u8e3s4__1.next_20eer_k$();
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
  function ChannelIterator() {
  }
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt($block, resultContinuation) {
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).invoke_xgbiie_k$ = function (it, $completion) {
    var tmp = this.create_vaj3v6_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_xgbiie_k$(p1 instanceof ChannelResult ? p1.holder_1 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.it_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$block_1(ChannelResult__getOrNull_impl_f5e07h(this.it_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).create_vaj3v6_k$ = function (it, completion) {
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt(this.$block_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).create_xubfvz_k$ = function (value, completion) {
    return this.create_vaj3v6_k$(value instanceof ChannelResult ? value.holder_1 : THROW_CCE(), completion);
  };
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt_0($block, resultContinuation) {
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt($block, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_xgbiie_k$(it.holder_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ReceiveChannel$onReceiveOrNull$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(ReceiveChannel$onReceiveOrNull$1).registerSelectClause1_d10579_k$ = function (select, block) {
    var tmp = this.this$0__1.get_onReceiveCatching_ajg9xa_k$();
    tmp.registerSelectClause1_cysp94_k$(select, ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt_0(block, null));
  };
  protoOf(ReceiveChannel$onReceiveOrNull$1).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_d10579_k$(select, block);
  };
  function $receiveOrNullCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($receiveOrNullCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.receiveCatching_wrys2l_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.holder_1;
            suspendResult = new ChannelResult(unboxed);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult.holder_1;
            return ChannelResult__getOrNull_impl_f5e07h(ARGUMENT);
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
  function ReceiveChannel() {
  }
  function _get_failed__jtpc32($this) {
    return $this.failed_1;
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
  function _ChannelResult___get_isFailure__impl__nz6ehu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Failed;
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed_0;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__getOrThrow_impl_od1axs($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
      return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (tmp_2 instanceof Closed_0) {
      tmp_1 = !(_ChannelResult___get_holder__impl__pm9gzw($this).cause_1 == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__pm9gzw($this).cause_1;
    // Inline function 'kotlin.error' call
    var tmp0_error = "Trying to call 'getOrThrow' on a failed channel result: " + toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed_0 ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.cause_1 = cause;
  }
  protoOf(Closed_0).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(Closed_0).equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.cause_1, other.cause_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed_0).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.cause_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  protoOf(Closed_0).toString = function () {
    return 'Closed(' + this.cause_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.failed_1 = new Failed();
  }
  protoOf(Companion).success_qotpmt_k$ = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).failure_gnxj6a_k$ = function () {
    return _ChannelResult___init__impl__siwsuf(this.failed_1);
  };
  protoOf(Companion).closed_raq7mh_k$ = function (cause) {
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
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.holder_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.holder_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.holder_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.holder_1, other);
  };
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
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
            tmp_0 = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().CHANNEL_DEFAULT_CAPACITY_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp_0 = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp_0;
  }
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function consumeEach(_this__u8e3s4, action, $completion) {
    var tmp = new $consumeEachCOROUTINE$5(_this__u8e3s4, action, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function consume(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var cause = null;
    try {
      return block(_this__u8e3s4);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cause = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      cancelConsumed(_this__u8e3s4, cause);
    }
  }
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
    _this__u8e3s4.cancel_4b7aim_k$(tmp);
  }
  function $consumeEachCOROUTINE$5(_this__u8e3s4, action, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.action_1 = action;
  }
  protoOf($consumeEachCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(10);
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
            this.set_exceptionState_s9sevl_k$(9);
            this.set_exceptionState_s9sevl_k$(8);
            this.tmp0_iterator4__1 = this._this__u8e3s4__1.iterator_jk1svi_k$();
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
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            var e = this.tmp0_iterator4__1.next_20eer_k$();
            this.action_1(e);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 6:
            this.tmp$ret$03__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(7);
            var tmp_0 = this;
            continue $sm;
          case 7:
            var tmp_1 = this;
            cancelConsumed(this._this__u8e3s4__1, this.cause1__1);
            tmp_1.tmp$ret$40__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 8:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              var e_0 = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              this.cause1__1 = e_0;
              throw e_0;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 9:
            this.set_exceptionState_s9sevl_k$(10);
            var t = this.get_exception_x0n6w6_k$();
            cancelConsumed(this._this__u8e3s4__1, this.cause1__1);
            ;
            throw t;
          case 10:
            throw this.get_exception_x0n6w6_k$();
          case 11:
            cancelConsumed(this._this__u8e3s4__1, this.cause1__1);
            ;
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw e_1;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_1);
        }
      }
     while (true);
  };
  function _get_lock__d9xa4g_0($this) {
    return $this.lock_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function updateValueLocked($this, element) {
    var old = $this.value_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.get_onUndeliveredElement_a8l4w7_k$();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = callUndeliveredElementCatchingException(tmp0_safe_receiver, (old == null ? true : isObject(old)) ? old : THROW_CCE());
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.value_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.lock_1 = new NoOpLock();
    this.value_1 = get_EMPTY();
  }
  protoOf(ConflatedChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return false;
  };
  protoOf(ConflatedChannel).get_isBufferEmpty_t57jne_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    tmp$ret$0 = this.value_1 === get_EMPTY();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ConflatedChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  protoOf(ConflatedChannel).get_isBufferFull_xv8jm_k$ = function () {
    return false;
  };
  protoOf(ConflatedChannel).get_isEmpty_zauvru_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isEmpty>.<anonymous>' call
    tmp$ret$0 = this.get_isEmptyImpl_9w6w0q_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ConflatedChannel).offerInternal_tuzlq7_k$ = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.value_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
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
          var token = ensureNotNull(receive).tryResumeReceive_mpjrre_k$(element, null);
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
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ConflatedChannel).offerSelectInternal_lspj9s_k$ = function (element, select) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerSelectInternal.<anonymous>' call
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.value_1 === get_EMPTY()) {
        loop: while (true) {
          var offerOp = this.describeTryOffer_6o0iky_k$(element);
          var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
          if (failure == null) {
            receive = offerOp.get_result_iyg5d2_k$();
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          } else {
            if (failure === get_OFFER_FAILED())
              break loop;
            else {
              if (failure === get_RETRY_ATOMIC()) {
              } else {
                var tmp;
                if (failure === get_ALREADY_SELECTED()) {
                  tmp = true;
                } else {
                  tmp = failure instanceof Closed;
                }
                if (tmp)
                  return failure;
                else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
      if (!select.trySelect_1ivjiv_k$()) {
        return get_ALREADY_SELECTED();
      }
      var tmp1_safe_receiver = updateValueLocked(this, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp1_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ConflatedChannel).pollInternal_ml771g_k$ = function () {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    if (this.value_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.value_1;
    this.value_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  protoOf(ConflatedChannel).pollSelectInternal_puj25v_k$ = function (select) {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    if (this.value_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    if (!select.trySelect_1ivjiv_k$())
      return get_ALREADY_SELECTED();
    result = this.value_1;
    this.value_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  protoOf(ConflatedChannel).onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    tmp$ret$0 = Unit_getInstance();
    protoOf(AbstractChannel).onCancelIdempotent_1zp8pj_k$.call(this, wasClosed);
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
  protoOf(ConflatedChannel).enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).enqueueReceiveInternal_rxtsl7_k$.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ConflatedChannel).get_bufferDebugString_66mwn9_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    tmp$ret$0 = '(value=' + toString(this.value_1) + ')';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(LinkedListChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return true;
  };
  protoOf(LinkedListChannel).get_isBufferEmpty_t57jne_k$ = function () {
    return true;
  };
  protoOf(LinkedListChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  protoOf(LinkedListChannel).get_isBufferFull_xv8jm_k$ = function () {
    return false;
  };
  protoOf(LinkedListChannel).offerInternal_tuzlq7_k$ = function (element) {
    while (true) {
      var result = protoOf(AbstractChannel).offerInternal_tuzlq7_k$.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.sendBuffered_4b6ooj_k$(element);
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
  protoOf(LinkedListChannel).offerSelectInternal_lspj9s_k$ = function (element, select) {
    while (true) {
      var tmp;
      if (this.get_hasReceiveOrClosed_wl54xr_k$()) {
        tmp = protoOf(AbstractChannel).offerSelectInternal_lspj9s_k$.call(this, element, select);
      } else {
        var tmp0_elvis_lhs = select.performAtomicTrySelect_9r1u91_k$(this.describeSendBuffered_gmw7y0_k$(element));
        tmp = tmp0_elvis_lhs == null ? get_OFFER_SUCCESS() : tmp0_elvis_lhs;
      }
      var result = tmp;
      if (result === get_ALREADY_SELECTED())
        return get_ALREADY_SELECTED();
      else {
        if (result === get_OFFER_SUCCESS())
          return get_OFFER_SUCCESS();
        else {
          if (result === get_OFFER_FAILED()) {
          } else {
            if (result === get_RETRY_ATOMIC()) {
            } else {
              if (result instanceof Closed)
                return result;
              else {
                var tmp0_error = 'Invalid result ' + toString_0(result);
                throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
              }
            }
          }
        }
      }
    }
  };
  protoOf(LinkedListChannel).onCancelIdempotentList_icdvp_k$ = function (list, closed) {
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
            var tmp1_safe_receiver = this.get_onUndeliveredElement_a8l4w7_k$();
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.get_element_q8gf71_k$();
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.resumeSendClosed_r0hgr7_k$(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.get_fkrdnv_k$(i);
              var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
              if (tmp0_subject_1 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.get_onUndeliveredElement_a8l4w7_k$();
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1__anonymous__uwfjfc.get_element_q8gf71_k$();
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1__anonymous__uwfjfc.resumeSendClosed_r0hgr7_k$(closed);
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
  protoOf(RendezvousChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return true;
  };
  protoOf(RendezvousChannel).get_isBufferEmpty_t57jne_k$ = function () {
    return true;
  };
  protoOf(RendezvousChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return true;
  };
  protoOf(RendezvousChannel).get_isBufferFull_xv8jm_k$ = function () {
    return true;
  };
  function asFlow(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_0(_this__u8e3s4);
    return tmp$ret$0;
  }
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.tmp0_iterator0__1 = this._this__u8e3s4__1.$this_asFlow_1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator0__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            this.element1__1 = this.tmp0_iterator0__1.next_20eer_k$();
            this.set_state_a96kl8_k$(2);
            suspendResult = this.collector_1.emit_1fbrsb_k$(this.element1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
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
  function _no_name_provided__qut3iv_0($this_asFlow) {
    this.$this_asFlow_1 = $this_asFlow;
  }
  protoOf(_no_name_provided__qut3iv_0).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$6(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function Flow() {
  }
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (properties_initialized_SharedFlow_kt_tmefor) {
    } else {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (properties_initialized_StateFlow_kt_nsqikx) {
    } else {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (properties_initialized_AbstractSharedFlow_kt_2mpafr) {
    } else {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.get_owner_iwkx3e_k$() === owner))
      throw _this__u8e3s4;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  function get_UNINITIALIZED() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return UNINITIALIZED;
  }
  var UNINITIALIZED;
  function get_DONE() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (properties_initialized_NullSurrogate_kt_39v8bl) {
    } else {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function unsafeFlow(block) {
    return new _no_name_provided__qut3iv_1(block);
  }
  function _no_name_provided__qut3iv_1($block) {
    this.$block_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv_1).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp0 = this.$block_1(collector, $completion);
    return tmp0;
  };
  function get_defaultKeySelector() {
    _init_properties_Distinct_kt__4eindw();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function get_defaultAreEquivalent() {
    _init_properties_Distinct_kt__4eindw();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function defaultKeySelector$lambda(it) {
    _init_properties_Distinct_kt__4eindw();
    return it;
  }
  function defaultAreEquivalent$lambda(old, new_0) {
    _init_properties_Distinct_kt__4eindw();
    return equals(old, new_0);
  }
  var properties_initialized_Distinct_kt_uy8c72;
  function _init_properties_Distinct_kt__4eindw() {
    if (properties_initialized_Distinct_kt_uy8c72) {
    } else {
      properties_initialized_Distinct_kt_uy8c72 = true;
      defaultKeySelector = defaultKeySelector$lambda;
      defaultAreEquivalent = defaultAreEquivalent$lambda;
    }
  }
  function unsafeTransform(_this__u8e3s4, transform) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_2(_this__u8e3s4, transform);
    return tmp$ret$0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.function_1(value, $completion);
    return tmp0;
  };
  function unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation) {
    this.$transform_1 = $transform;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(unsafeTransform$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(unsafeTransform$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(unsafeTransform$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$transform_1(this.$collector_1, this.value_1, this);
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
  protoOf(unsafeTransform$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new unsafeTransform$o$collect$slambda(this.$transform_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(unsafeTransform$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function unsafeTransform$o$collect$slambda_0($transform, $collector, resultContinuation) {
    var i = new unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$7(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = unsafeTransform$o$collect$slambda_0(this._this__u8e3s4__1.$transform_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$this_unsafeTransform_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  function _no_name_provided__qut3iv_2($this_unsafeTransform, $transform) {
    this.$this_unsafeTransform_1 = $this_unsafeTransform;
    this.$transform_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_2).collect_aabnv5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$7(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_2).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_aabnv5_k$(collector, $completion);
  };
  function collectWhile(_this__u8e3s4, predicate, $completion) {
    var tmp = new $collectWhileCOROUTINE$8(_this__u8e3s4, predicate, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitCOROUTINE$9(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            return Unit_getInstance();
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
  function _no_name_provided__qut3iv_3($predicate) {
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_3).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$9(this, value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $collectWhileCOROUTINE$8(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($collectWhileCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new _no_name_provided__qut3iv_3(this.predicate_1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.collect_llpwvh_k$(this.collector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector0__1);
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function get_DEFAULT_CONCURRENCY() {
    _init_properties_Merge_kt__cbpr96();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function get_DEFAULT_CONCURRENCY_PROPERTY_NAME() {
    return DEFAULT_CONCURRENCY_PROPERTY_NAME;
  }
  var DEFAULT_CONCURRENCY_PROPERTY_NAME;
  var properties_initialized_Merge_kt_dhn6vs;
  function _init_properties_Merge_kt__cbpr96() {
    if (properties_initialized_Merge_kt_dhn6vs) {
    } else {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
    }
  }
  function map(_this__u8e3s4, transform) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_4(_this__u8e3s4, transform);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.function_1(value, $completion);
    return tmp0;
  };
  function map$o$collect$slambda($collector, $transform, resultContinuation) {
    this.$collector_1 = $collector;
    this.$transform_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(map$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(map$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(map$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$transform_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.ARGUMENT0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
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
  protoOf(map$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new map$o$collect$slambda(this.$collector_1, this.$transform_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(map$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function map$o$collect$slambda_0($collector, $transform, resultContinuation) {
    var i = new map$o$collect$slambda($collector, $transform, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = map$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.$transform_1, null);
            suspendResult = this._this__u8e3s4__1.$this_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  function _no_name_provided__qut3iv_4($this_map, $transform) {
    this.$this_map_1 = $this_map;
    this.$transform_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_4).collect_aabnv5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$10(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_4).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_aabnv5_k$(collector, $completion);
  };
  function firstOrNull(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstOrNullCOROUTINE$11(_this__u8e3s4, predicate, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitCOROUTINE$12(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$12).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this._this__u8e3s4__1.$result_1._v = this.value_1;
              tmp_0.WHEN_RESULT0__1 = false;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.WHEN_RESULT0__1 = true;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            break;
          case 2:
            var ARGUMENT = this.WHEN_RESULT0__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            ;
            break;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
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
  function _no_name_provided__qut3iv_5($predicate, $result) {
    this.$predicate_1 = $predicate;
    this.$result_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_5).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$12(this, value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $firstOrNullCOROUTINE$11(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($firstOrNullCOROUTINE$11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.result0__1 = {_v: null};
            var tmp_0 = this;
            tmp_0.collector1__1 = new _no_name_provided__qut3iv_5(this.predicate_1, this.result0__1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.collect_llpwvh_k$(this.collector1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector1__1);
              this.set_state_a96kl8_k$(3);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            this.set_exceptionState_s9sevl_k$(4);
            return this.result0__1._v;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function _set_elements__x18af4($this, _set____db54di) {
    $this.elements_1 = _set____db54di;
  }
  function _get_elements__k8byyc($this) {
    return $this.elements_1;
  }
  function _set_head__9nromv_0($this, _set____db54di) {
    $this.head_1 = _set____db54di;
  }
  function _get_head__d7jo8b_0($this) {
    return $this.head_1;
  }
  function _set_tail__9uatxj($this, _set____db54di) {
    $this.tail_1 = _set____db54di;
  }
  function _get_tail__de2tiz($this) {
    return $this.tail_1;
  }
  function ensureCapacity_0($this) {
    var currentSize = $this.elements_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.elements_1;
    var tmp1_copyInto = $this.head_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.elements_1;
    var tmp4_copyInto = $this.elements_1.length - $this.head_1 | 0;
    var tmp5_copyInto = $this.head_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.elements_1 = newElements;
    $this.head_1 = 0;
    $this.tail_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.elements_1 = tmp$ret$0;
    this.head_1 = 0;
    this.tail_1 = 0;
  }
  protoOf(ArrayQueue).get_isEmpty_zauvru_k$ = function () {
    return this.head_1 === this.tail_1;
  };
  protoOf(ArrayQueue).addLast_xhfl3v_k$ = function (element) {
    this.elements_1[this.tail_1] = element;
    this.tail_1 = (this.tail_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    if (this.tail_1 === this.head_1) {
      ensureCapacity_0(this);
    }
  };
  protoOf(ArrayQueue).removeFirstOrNull_eges3a_k$ = function () {
    if (this.head_1 === this.tail_1)
      return null;
    var element = this.elements_1[this.head_1];
    this.elements_1[this.head_1] = null;
    this.head_1 = (this.head_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  protoOf(ArrayQueue).clear_j9y8zo_k$ = function () {
    this.head_1 = 0;
    this.tail_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.elements_1.length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.elements_1 = tmp$ret$0;
  };
  function get_NO_DECISION() {
    _init_properties_Atomic_kt__5uvtv9();
    return NO_DECISION;
  }
  var NO_DECISION;
  function get_RETRY_ATOMIC() {
    _init_properties_Atomic_kt__5uvtv9();
    return RETRY_ATOMIC;
  }
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  protoOf(OpDescriptor).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  protoOf(OpDescriptor).isEarlierThan_b5adjh_k$ = function (that) {
    var tmp0_elvis_lhs = this.get_atomicOp_p2pkuj_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var thisOp = tmp;
    var tmp1_elvis_lhs = that.get_atomicOp_p2pkuj_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var thatOp = tmp_0;
    return thisOp.get_opSequence_bttwhh_k$().compareTo_n4fqi2_k$(thatOp.get_opSequence_bttwhh_k$()) < 0;
  };
  function _get__consensus__nhzvjh($this) {
    return $this._consensus_1;
  }
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_1 = atomic$ref$1(get_NO_DECISION());
  }
  protoOf(AtomicOp).get_consensus_1b3g0e_k$ = function () {
    return this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicOp).get_isDecided_ofk0qx_k$ = function () {
    return !(this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$() === get_NO_DECISION());
  };
  protoOf(AtomicOp).get_opSequence_bttwhh_k$ = function () {
    return new Long(0, 0);
  };
  protoOf(AtomicOp).get_atomicOp_p2pkuj_k$ = function () {
    return this;
  };
  protoOf(AtomicOp).decide_ydi1rd_k$ = function (decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (!(current === get_NO_DECISION()))
      return current;
    if (this._consensus_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicOp).perform_8emi3i_k$ = function (affected) {
    var decision = this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (decision === get_NO_DECISION()) {
      decision = this.decide_ydi1rd_k$(this.prepare_gq68ys_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.complete_fye4ce_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  function AtomicDesc() {
  }
  protoOf(AtomicDesc).set_atomicOp_7j6ry0_k$ = function (_set____db54di) {
    this.atomicOp_1 = _set____db54di;
  };
  protoOf(AtomicDesc).get_atomicOp_p2pkuj_k$ = function () {
    var tmp = this.atomicOp_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('atomicOp');
    }
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
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (properties_initialized_ConcurrentLinkedList_kt_kwt434) {
    } else {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
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
      if (tmp1_resumeCancellableWith.dispatcher_1.isDispatchNeeded_fmz9vn_k$(tmp1_resumeCancellableWith.get_context_h02k06_k$())) {
        tmp1_resumeCancellableWith._state_1 = state;
        tmp1_resumeCancellableWith.set_resumeMode_b1d3vh_k$(get_MODE_CANCELLABLE());
        tmp1_resumeCancellableWith.dispatcher_1.dispatch_o98ux7_k$(tmp1_resumeCancellableWith.get_context_h02k06_k$(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
          if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
            tmp1_resumeCancellableWith._state_1 = state;
            tmp1_resumeCancellableWith.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
            eventLoop.dispatchUnconfined_do6j6f_k$(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.incrementUseCount_ocukpa_k$(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
                if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                  var cause = job.getCancellationException_8i1q6u_k$();
                  tmp1_resumeCancellableWith.cancelCompletedResult_tweln2_k$(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.resumeWith_s3a3yh_k$(tmp$ret$1);
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
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.continuation_1;
                var tmp2_withContinuationContext = tmp1_resumeCancellableWith.countOrElement_1;
                tmp1_resumeCancellableWith.continuation_1.resumeWith_s3a3yh_k$(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                tmp1_resumeCancellableWith.handleFatalException_56zdfo_k$(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.decrementUseCount_saho26_k$(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.resumeWith_s3a3yh_k$(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _get__reusableCancellableContinuation__ic28e($this) {
    return $this._reusableCancellableContinuation_1;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.dispatcher_1 = dispatcher;
    this.continuation_1 = continuation;
    this._state_1 = get_UNDEFINED();
    this.countOrElement_1 = threadContextElements(this.get_context_h02k06_k$());
    this._reusableCancellableContinuation_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).get_dispatcher_usy1bk_k$ = function () {
    return this.dispatcher_1;
  };
  protoOf(DispatchedContinuation).get_continuation_7yron4_k$ = function () {
    return this.continuation_1;
  };
  protoOf(DispatchedContinuation).get_context_h02k06_k$ = function () {
    return this.continuation_1.get_context_h02k06_k$();
  };
  protoOf(DispatchedContinuation).set__state_9u8p4v_k$ = function (_set____db54di) {
    this._state_1 = _set____db54di;
  };
  protoOf(DispatchedContinuation).get__state_a6aoij_k$ = function () {
    return this._state_1;
  };
  protoOf(DispatchedContinuation).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.continuation_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(DispatchedContinuation).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(DispatchedContinuation).get_countOrElement_ut92s3_k$ = function () {
    return this.countOrElement_1;
  };
  protoOf(DispatchedContinuation).isReusable_hrfetn_k$ = function () {
    return !(this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null);
  };
  protoOf(DispatchedContinuation).awaitReusability_itz0u_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).release_wtm6d2_k$ = function () {
    this.awaitReusability_itz0u_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_qdtbew_k$();
    }
  };
  protoOf(DispatchedContinuation).claimReusableCancellableContinuation_oatv30_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1__anonymous__uwfjfc === null) {
        this._reusableCancellableContinuation_1.set_kotlinx$atomicfu$value_koguff_k$(get_REUSABLE_CLAIMED());
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
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
  protoOf(DispatchedContinuation).tryReleaseClaimedContinuation_5s4a1c_k$ = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
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
  protoOf(DispatchedContinuation).postponeCancellation_723ard_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).takeState_olvzuy_k$ = function () {
    var state = this._state_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this._state_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).get_delegate_i94tki_k$ = function () {
    return this;
  };
  protoOf(DispatchedContinuation).resumeWith_s3a3yh_k$ = function (result) {
    var context = this.continuation_1.get_context_h02k06_k$();
    var state = toState_0(result);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(context)) {
      this._state_1 = state;
      this.set_resumeMode_b1d3vh_k$(get_MODE_ATOMIC());
      this.dispatcher_1.dispatch_o98ux7_k$(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
          eventLoop.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_ocukpa_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.get_context_h02k06_k$();
            var tmp1_withCoroutineContext = this.countOrElement_1;
            this.continuation_1.resumeWith_s3a3yh_k$(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_56zdfo_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_saho26_k$(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  protoOf(DispatchedContinuation).resumeCancellableWith_tuk66b_k$ = function (result, onCancellation) {
    var state = toState_0(result, onCancellation);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this.get_context_h02k06_k$())) {
      this._state_1 = state;
      this.set_resumeMode_b1d3vh_k$(get_MODE_CANCELLABLE());
      this.dispatcher_1.dispatch_o98ux7_k$(this.get_context_h02k06_k$(), this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
          eventLoop.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_ocukpa_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
            var tmp$ret$3;
            $l$block_0: {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
              var job = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
              if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                var cause = job.getCancellationException_8i1q6u_k$();
                this.cancelCompletedResult_tweln2_k$(state, cause);
                var tmp$ret$2;
                // Inline function 'kotlin.coroutines.resumeWithException' call
                var tmp$ret$1;
                // Inline function 'kotlin.Companion.failure' call
                var tmp0_failure = Companion_getInstance();
                tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                this.resumeWith_s3a3yh_k$(tmp$ret$1);
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
              var tmp1_withContinuationContext = this.continuation_1;
              var tmp2_withContinuationContext = this.countOrElement_1;
              this.continuation_1.resumeWith_s3a3yh_k$(result);
              tmp$ret$4 = Unit_getInstance();
            }
            $l$loop: while (true) {
              if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_56zdfo_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_saho26_k$(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  protoOf(DispatchedContinuation).cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.get_onCancellation_no7t6d_k$()(cause);
    }
  };
  protoOf(DispatchedContinuation).resumeCancelled_vc1wm3_k$ = function (state) {
    var job = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
    if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
      var cause = job.getCancellationException_8i1q6u_k$();
      this.cancelCompletedResult_tweln2_k$(state, cause);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return true;
    }
    return false;
  };
  protoOf(DispatchedContinuation).resumeUndispatchedWith_xz834r_k$ = function (result) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    var tmp0_withContinuationContext = this.continuation_1;
    var tmp1_withContinuationContext = this.countOrElement_1;
    this.continuation_1.resumeWith_s3a3yh_k$(result);
    tmp$ret$0 = Unit_getInstance();
  };
  protoOf(DispatchedContinuation).dispatchYield_r38es3_k$ = function (context, value) {
    this._state_1 = value;
    this.set_resumeMode_b1d3vh_k$(get_MODE_CANCELLABLE());
    this.dispatcher_1.dispatchYield_ww21f6_k$(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher_1 + ', ' + toDebugString(this.continuation_1) + ']';
  };
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    doYield = doYield === VOID ? false : doYield;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    // Inline function 'kotlinx.coroutines.assert' call
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (doYield ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false)
      return false;
    var tmp;
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      _this__u8e3s4._state_1 = contState;
      _this__u8e3s4.set_resumeMode_b1d3vh_k$(mode);
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
      tmp = true;
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_ocukpa_k$(true);
      try {
        block();
        $l$loop: while (true) {
          if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_saho26_k$(true);
      }
      tmp = false;
    }
    return tmp;
  }
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
    this.resumeMode_1 = resumeMode;
  }
  protoOf(DispatchedTask).set_resumeMode_b1d3vh_k$ = function (_set____db54di) {
    this.resumeMode_1 = _set____db54di;
  };
  protoOf(DispatchedTask).get_resumeMode_te1i4n_k$ = function () {
    return this.resumeMode_1;
  };
  protoOf(DispatchedTask).cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
  };
  protoOf(DispatchedTask).getSuccessfulResult_t876z0_k$ = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  };
  protoOf(DispatchedTask).run_mw4iiu_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.get_delegate_i94tki_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.get_continuation_7yron4_k$();
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.get_countOrElement_ut92s3_k$();
      var context = continuation.get_context_h02k06_k$();
      var state = this.takeState_olvzuy_k$();
      var exception = this.getExceptionalResult_bnge6_k$(state);
      var job = (exception == null ? get_isCancellableMode(this.resumeMode_1) : false) ? context.get_j1ktw6_k$(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.resumeWith_s3a3yh_k$(tmp$ret$0);
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
          continuation.resumeWith_s3a3yh_k$(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp4_resume = this.getSuccessfulResult_t876z0_k$(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp3_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp4_resume);
          continuation.resumeWith_s3a3yh_k$(tmp$ret$3);
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
      this.handleFatalException_56zdfo_k$(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).handleFatalException_56zdfo_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.get_delegate_i94tki_k$().get_context_h02k06_k$(), reason);
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
    var delegate = _this__u8e3s4.get_delegate_i94tki_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.resumeMode_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.get_dispatcher_usy1bk_k$();
      var context = delegate.get_context_h02k06_k$();
      if (dispatcher.isDispatchNeeded_fmz9vn_k$(context)) {
        dispatcher.dispatch_o98ux7_k$(context, _this__u8e3s4);
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
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.incrementUseCount_ocukpa_k$(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.decrementUseCount_saho26_k$(true);
    }
  }
  function resumeWithStackTrace(_this__u8e3s4, exception) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    var tmp1_failure = recoverStackTrace(exception, _this__u8e3s4);
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
    _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$0);
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_ocukpa_k$(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.get_delegate_i94tki_k$(), true);
        $l$loop: while (true) {
          if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_saho26_k$(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.takeState_olvzuy_k$();
    var exception = _this__u8e3s4.getExceptionalResult_bnge6_k$(state);
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
      var tmp2_success = _this__u8e3s4.getSuccessfulResult_t876z0_k$(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp5_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp3_withContinuationContext = tmp5_resumeUndispatchedWith.get_continuation_7yron4_k$();
      var tmp4_withContinuationContext = tmp5_resumeUndispatchedWith.get_countOrElement_ut92s3_k$();
      tmp5_resumeUndispatchedWith.get_continuation_7yron4_k$().resumeWith_s3a3yh_k$(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.resumeWith_s3a3yh_k$(result);
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
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).add_1j60pz_k$(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.add_1j60pz_k$((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.add_1j60pz_k$(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.get_fkrdnv_k$(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.holder_1 = holder;
  }
  protoOf(InlineList).toString = function () {
    return InlineList__toString_impl_1aej86(this.holder_1);
  };
  protoOf(InlineList).hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.holder_1);
  };
  protoOf(InlineList).equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.holder_1, other);
  };
  function checkParallelism(_this__u8e3s4) {
    var tmp0_require = _this__u8e3s4 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.checkParallelism.<anonymous>' call
      tmp$ret$0 = 'Expected positive parallelism level, but got ' + _this__u8e3s4;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    return tmp;
  }
  function _get_dispatcher__dketks($this) {
    return $this.dispatcher_1;
  }
  function _get_parallelism__25q2h7($this) {
    return $this.parallelism_1;
  }
  function _set_runningWorkers__ctf6jl($this, _set____db54di) {
    $this.runningWorkers_1 = _set____db54di;
  }
  function _get_runningWorkers__wolfe3($this) {
    return $this.runningWorkers_1;
  }
  function _get_queue__c6g84g($this) {
    return $this.queue_1;
  }
  function _get_workerAllocationLock__l5417m($this) {
    return $this.workerAllocationLock_1;
  }
  function dispatchInternal($this, block, dispatch) {
    if (addAndTryDispatching($this, block))
      return Unit_getInstance();
    if (!tryAllocateWorker($this))
      return Unit_getInstance();
    dispatch();
  }
  function tryAllocateWorker($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = $this.workerAllocationLock_1;
    if ($this.runningWorkers_1 >= $this.parallelism_1)
      return false;
    var tmp0_this = $this;
    tmp0_this.runningWorkers_1 = tmp0_this.runningWorkers_1 + 1 | 0;
    return true;
  }
  function addAndTryDispatching($this, block) {
    $this.queue_1.addLast_3l8aar_k$(block);
    return $this.runningWorkers_1 >= $this.parallelism_1;
  }
  function LimitedDispatcher(dispatcher, parallelism) {
    CoroutineDispatcher.call(this);
    this.dispatcher_1 = dispatcher;
    this.parallelism_1 = parallelism;
    var tmp = this;
    var tmp0_elvis_lhs = isInterface(dispatcher, Delay) ? dispatcher : null;
    tmp.$$delegate_0__1 = tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
    this.runningWorkers_1 = 0;
    this.queue_1 = new LockFreeTaskQueue(false);
    this.workerAllocationLock_1 = new Object();
  }
  protoOf(LimitedDispatcher).delay_sw4t2e_k$ = function (time, $completion) {
    var tmp0 = this.$$delegate_0__1.delay_sw4t2e_k$(time, $completion);
    return tmp0;
  };
  protoOf(LimitedDispatcher).invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    return this.$$delegate_0__1.invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  };
  protoOf(LimitedDispatcher).scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.$$delegate_0__1.scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, continuation);
  };
  protoOf(LimitedDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    if (parallelism >= this.parallelism_1)
      return this;
    return protoOf(CoroutineDispatcher).limitedParallelism_glrman_k$.call(this, parallelism);
  };
  protoOf(LimitedDispatcher).run_mw4iiu_k$ = function () {
    var fairnessCounter = 0;
    $l$loop: while (true) {
      var task = this.queue_1.removeFirstOrNull_eges3a_k$();
      if (!(task == null)) {
        try {
          task.run_mw4iiu_k$();
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            handleCoroutineException(EmptyCoroutineContext_getInstance(), e);
          } else {
            throw $p;
          }
        }
        var tmp;
        fairnessCounter = fairnessCounter + 1 | 0;
        if (fairnessCounter >= 16) {
          tmp = this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this);
        } else {
          tmp = false;
        }
        if (tmp) {
          this.dispatcher_1.dispatch_o98ux7_k$(this, this);
          return Unit_getInstance();
        }
        continue $l$loop;
      }
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      var tmp0_synchronized = this.workerAllocationLock_1;
      var tmp0_this = this;
      tmp0_this.runningWorkers_1 = tmp0_this.runningWorkers_1 - 1 | 0;
      if (this.queue_1.get_size_woubt6_k$() === 0)
        return Unit_getInstance();
      var tmp1_this = this;
      tmp1_this.runningWorkers_1 = tmp1_this.runningWorkers_1 + 1 | 0;
      fairnessCounter = 0;
      tmp$ret$0 = Unit_getInstance();
    }
  };
  protoOf(LimitedDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      if (addAndTryDispatching(this, block)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatch.<anonymous>' call
      this.dispatcher_1.dispatch_o98ux7_k$(this, this);
    }
  };
  protoOf(LimitedDispatcher).dispatchYield_ww21f6_k$ = function (context, block) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      if (addAndTryDispatching(this, block)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchYield.<anonymous>' call
      this.dispatcher_1.dispatchYield_ww21f6_k$(this, this);
    }
  };
  function get_REMOVE_PREPARED() {
    _init_properties_LockFreeLinkedList_common_kt__j1bptz();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  var properties_initialized_LockFreeLinkedList_common_kt_b0cmf9;
  function _init_properties_LockFreeLinkedList_common_kt__j1bptz() {
    if (properties_initialized_LockFreeLinkedList_common_kt_b0cmf9) {
    } else {
      properties_initialized_LockFreeLinkedList_common_kt_b0cmf9 = true;
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
    }
  }
  function _get__cur__d2ko2y($this) {
    return $this._cur_1;
  }
  function LockFreeTaskQueue(singleConsumer) {
    var tmp = this;
    Companion_getInstance_2();
    tmp._cur_1 = atomic$ref$1(new LockFreeTaskQueueCore(8, singleConsumer));
  }
  protoOf(LockFreeTaskQueue).get_isEmpty_zauvru_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_isEmpty_zauvru_k$();
  };
  protoOf(LockFreeTaskQueue).get_size_woubt6_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_size_woubt6_k$();
  };
  protoOf(LockFreeTaskQueue).close_ymq55z_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1__anonymous__uwfjfc.close_1keygo_k$())
        return Unit_getInstance();
      this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).addLast_3l8aar_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.addLast.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc.addLast_3l8aar_k$(element);
      Companion_getInstance_2();
      if (tmp0_subject === 0)
        return true;
      else {
        Companion_getInstance_2();
        if (tmp0_subject === 2)
          return false;
        else {
          Companion_getInstance_2();
          if (tmp0_subject === 1) {
            this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc.next_20eer_k$());
          }
        }
      }
    }
  };
  protoOf(LockFreeTaskQueue).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.removeFirstOrNull.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var result = tmp1__anonymous__uwfjfc.removeFirstOrNull_eges3a_k$();
      if (!(result === Companion_getInstance_2().REMOVE_FROZEN_1)) {
        return (result == null ? true : isObject(result)) ? result : THROW_CCE();
      }
      this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).map_o73y3q_k$ = function (transform) {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().map_o73y3q_k$(transform);
  };
  protoOf(LockFreeTaskQueue).isClosed_baxhhm_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().isClosed_baxhhm_k$();
  };
  function _get_capacity__a9k9f3_0($this) {
    return $this.capacity_1;
  }
  function _get_singleConsumer__485sb7($this) {
    return $this.singleConsumer_1;
  }
  function _get_mask__da8grj($this) {
    return $this.mask_1;
  }
  function _get__next__kt3wsh($this) {
    return $this._next_1;
  }
  function _get__state__37adl3_1($this) {
    return $this._state_1;
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function fillPlaceholder($this, index, element) {
    var old = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (old instanceof Placeholder) {
      tmp = old.index_1 === index;
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.array_1.atomicfu$get(index & $this.mask_1).set_kotlinx$atomicfu$value_koguff_k$(element);
      return $this;
    }
    return null;
  }
  function removeSlowPath($this, oldHead, newHead) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeSlowPath.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
      var tmp0_withState = Companion_getInstance_2();
      var head = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      // Inline function 'kotlinx.coroutines.assert' call
      Companion_getInstance_2();
      if (!tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
        return $this.next_20eer_k$();
      }
      var tmp;
      if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, Companion_getInstance_2().updateHead_eajy5c_k$(tmp1__anonymous__uwfjfc, newHead))) {
        $this.array_1.atomicfu$get(head & $this.mask_1).set_kotlinx$atomicfu$value_koguff_k$(null);
        return null;
      }
      tmp$ret$0 = tmp;
    }
  }
  function markFrozen($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = $this._state_1;
      while (true) {
        var cur = tmp0_updateAndGet.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.markFrozen.<anonymous>' call
        Companion_getInstance_2();
        if (!cur.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return cur;
        Companion_getInstance_2();
        tmp$ret$0 = cur.or_s401rn_k$(new Long(0, 268435456));
        var upd = tmp$ret$0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1;
  }
  function allocateOrGetNextCopy($this, state) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._next_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.allocateOrGetNextCopy.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(tmp1__anonymous__uwfjfc == null))
        return tmp1__anonymous__uwfjfc;
      $this._next_1.atomicfu$compareAndSet(null, allocateNextCopy($this, state));
    }
  }
  function allocateNextCopy($this, state) {
    var next = new LockFreeTaskQueueCore(imul($this.capacity_1, 2), $this.singleConsumer_1);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_2();
    var head = state.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = state.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & $this.mask_1) === (tail & $this.mask_1))) {
      var tmp0_elvis_lhs = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var value = tmp0_elvis_lhs == null ? new Placeholder(index) : tmp0_elvis_lhs;
      next.array_1.atomicfu$get(index & next.mask_1).set_kotlinx$atomicfu$value_koguff_k$(value);
      var tmp1 = index;
      index = tmp1 + 1 | 0;
    }
    var tmp = Companion_getInstance_2();
    Companion_getInstance_2();
    next._state_1.set_kotlinx$atomicfu$value_sbfhx2_k$(tmp.wo_iscla2_k$(state, new Long(0, 268435456)));
    tmp$ret$0 = Unit_getInstance();
    return next;
  }
  function Placeholder(index) {
    this.index_1 = index;
  }
  protoOf(Placeholder).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.INITIAL_CAPACITY_1 = 8;
    this.CAPACITY_BITS_1 = 30;
    this.MAX_CAPACITY_MASK_1 = 1073741823;
    this.HEAD_SHIFT_1 = 0;
    this.HEAD_MASK_1 = new Long(1073741823, 0);
    this.TAIL_SHIFT_1 = 30;
    this.TAIL_MASK_1 = new Long(-1073741824, 268435455);
    this.FROZEN_SHIFT_1 = 60;
    this.FROZEN_MASK_1 = new Long(0, 268435456);
    this.CLOSED_SHIFT_1 = 61;
    this.CLOSED_MASK_1 = new Long(0, 536870912);
    this.MIN_ADD_SPIN_CAPACITY_1 = 1024;
    this.REMOVE_FROZEN_1 = new Symbol('REMOVE_FROZEN');
    this.ADD_SUCCESS_1 = 0;
    this.ADD_FROZEN_1 = 1;
    this.ADD_CLOSED_1 = 2;
  }
  protoOf(Companion_0).get_INITIAL_CAPACITY_tvo5ku_k$ = function () {
    return this.INITIAL_CAPACITY_1;
  };
  protoOf(Companion_0).get_CAPACITY_BITS_m7bade_k$ = function () {
    return this.CAPACITY_BITS_1;
  };
  protoOf(Companion_0).get_MAX_CAPACITY_MASK_bnmlt9_k$ = function () {
    return this.MAX_CAPACITY_MASK_1;
  };
  protoOf(Companion_0).get_HEAD_SHIFT_ww01xo_k$ = function () {
    return this.HEAD_SHIFT_1;
  };
  protoOf(Companion_0).get_HEAD_MASK_jkay7y_k$ = function () {
    return this.HEAD_MASK_1;
  };
  protoOf(Companion_0).get_TAIL_SHIFT_z9ya0s_k$ = function () {
    return this.TAIL_SHIFT_1;
  };
  protoOf(Companion_0).get_TAIL_MASK_h71l4e_k$ = function () {
    return this.TAIL_MASK_1;
  };
  protoOf(Companion_0).get_FROZEN_SHIFT_9ve6oc_k$ = function () {
    return this.FROZEN_SHIFT_1;
  };
  protoOf(Companion_0).get_FROZEN_MASK_gcrlj6_k$ = function () {
    return this.FROZEN_MASK_1;
  };
  protoOf(Companion_0).get_CLOSED_SHIFT_v5gopk_k$ = function () {
    return this.CLOSED_SHIFT_1;
  };
  protoOf(Companion_0).get_CLOSED_MASK_agddhm_k$ = function () {
    return this.CLOSED_MASK_1;
  };
  protoOf(Companion_0).get_MIN_ADD_SPIN_CAPACITY_z2m7z7_k$ = function () {
    return this.MIN_ADD_SPIN_CAPACITY_1;
  };
  protoOf(Companion_0).get_REMOVE_FROZEN_w56qum_k$ = function () {
    return this.REMOVE_FROZEN_1;
  };
  protoOf(Companion_0).get_ADD_SUCCESS_vnro04_k$ = function () {
    return this.ADD_SUCCESS_1;
  };
  protoOf(Companion_0).get_ADD_FROZEN_bsr1ax_k$ = function () {
    return this.ADD_FROZEN_1;
  };
  protoOf(Companion_0).get_ADD_CLOSED_db6t8t_k$ = function () {
    return this.ADD_CLOSED_1;
  };
  protoOf(Companion_0).wo_iscla2_k$ = function (_this__u8e3s4, other) {
    return _this__u8e3s4.and_jhajnj_k$(other.inv_28kx_k$());
  };
  protoOf(Companion_0).updateHead_eajy5c_k$ = function (_this__u8e3s4, newHead) {
    return this.wo_iscla2_k$(_this__u8e3s4, new Long(1073741823, 0)).or_s401rn_k$(toLong(newHead).shl_po5ip6_k$(0));
  };
  protoOf(Companion_0).updateTail_fwivqo_k$ = function (_this__u8e3s4, newTail) {
    return this.wo_iscla2_k$(_this__u8e3s4, new Long(-1073741824, 268435455)).or_s401rn_k$(toLong(newTail).shl_po5ip6_k$(30));
  };
  protoOf(Companion_0).withState_mwp87b_k$ = function (_this__u8e3s4, block) {
    var head = _this__u8e3s4.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = _this__u8e3s4.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    return block(head, tail);
  };
  protoOf(Companion_0).addFailReason_gc2gzp_k$ = function (_this__u8e3s4) {
    return !_this__u8e3s4.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)) ? 2 : 1;
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LockFreeTaskQueueCore(capacity, singleConsumer) {
    Companion_getInstance_2();
    this.capacity_1 = capacity;
    this.singleConsumer_1 = singleConsumer;
    this.mask_1 = this.capacity_1 - 1 | 0;
    this._next_1 = atomic$ref$1(null);
    this._state_1 = atomic$long$1(new Long(0, 0));
    this.array_1 = atomicfu$AtomicRefArray$ofNulls(this.capacity_1);
    // Inline function 'kotlin.check' call
    Companion_getInstance_2();
    var tmp0_check = this.mask_1 <= 1073741823;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = (this.capacity_1 & this.mask_1) === 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(LockFreeTaskQueueCore).get_isEmpty_zauvru_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_2();
    var tmp1_withState = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-isEmpty>.<anonymous>' call
    tmp$ret$0 = head === tail;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(LockFreeTaskQueueCore).get_size_woubt6_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_2();
    var tmp1_withState = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-size>.<anonymous>' call
    var tmp = tail - head | 0;
    Companion_getInstance_2();
    tmp$ret$0 = tmp & 1073741823;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(LockFreeTaskQueueCore).close_1keygo_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this._state_1;
      while (true) {
        var cur = tmp0_update.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.close.<anonymous>' call
        Companion_getInstance_2();
        if (!cur.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)))
          return true;
        Companion_getInstance_2();
        if (!cur.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return false;
        Companion_getInstance_2();
        tmp$ret$0 = cur.or_s401rn_k$(new Long(0, 536870912));
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    return true;
  };
  protoOf(LockFreeTaskQueueCore).addLast_3l8aar_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.addLast.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        Companion_getInstance_2();
        var tmp = new Long(0, 268435456);
        Companion_getInstance_2();
        if (!tmp1__anonymous__uwfjfc.and_jhajnj_k$(tmp.or_s401rn_k$(new Long(0, 536870912))).equals(new Long(0, 0)))
          return Companion_getInstance_2().addFailReason_gc2gzp_k$(tmp1__anonymous__uwfjfc);
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        var tmp0_withState = Companion_getInstance_2();
        var head = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
        var tail = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
        var mask = this.mask_1;
        if (((tail + 2 | 0) & mask) === (head & mask)) {
          Companion_getInstance_2();
          return 1;
        }
        if (!this.singleConsumer_1 ? !(this.array_1.atomicfu$get(tail & mask).get_kotlinx$atomicfu$value_vi2am5_k$() == null) : false) {
          var tmp_0;
          Companion_getInstance_2();
          if (this.capacity_1 < 1024) {
            tmp_0 = true;
          } else {
            var tmp_1 = tail - head | 0;
            Companion_getInstance_2();
            tmp_0 = (tmp_1 & 1073741823) > this.capacity_1 >> 1;
          }
          if (tmp_0) {
            Companion_getInstance_2();
            return 1;
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp_2 = tail + 1 | 0;
        Companion_getInstance_2();
        var newTail = tmp_2 & 1073741823;
        var tmp_3;
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, Companion_getInstance_2().updateTail_fwivqo_k$(tmp1__anonymous__uwfjfc, newTail))) {
          this.array_1.atomicfu$get(tail & mask).set_kotlinx$atomicfu$value_koguff_k$(element);
          var cur = this;
          $l$loop_0: while (true) {
            var tmp_4 = cur._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            Companion_getInstance_2();
            if (tmp_4.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
              break $l$loop_0;
            var tmp0_elvis_lhs = fillPlaceholder(cur.next_20eer_k$(), tail, element);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              break $l$loop_0;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            cur = tmp_5;
          }
          Companion_getInstance_2();
          return 0;
        }
        tmp$ret$1 = tmp_3;
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeFirstOrNull.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        Companion_getInstance_2();
        if (!tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return Companion_getInstance_2().REMOVE_FROZEN_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        var tmp0_withState = Companion_getInstance_2();
        var head = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
        var tail = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
        if ((tail & this.mask_1) === (head & this.mask_1))
          return null;
        var element = this.array_1.atomicfu$get(head & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
        if (element == null) {
          if (this.singleConsumer_1)
            return null;
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        if (element instanceof Placeholder)
          return null;
        var tmp = head + 1 | 0;
        Companion_getInstance_2();
        var newHead = tmp & 1073741823;
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, Companion_getInstance_2().updateHead_eajy5c_k$(tmp1__anonymous__uwfjfc, newHead))) {
          this.array_1.atomicfu$get(head & this.mask_1).set_kotlinx$atomicfu$value_koguff_k$(null);
          return element;
        }
        if (!this.singleConsumer_1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        var cur = this;
        while (true) {
          var tmp0_elvis_lhs = removeSlowPath(cur, head, newHead);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return element;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          cur = tmp_0;
        }
        tmp$ret$1 = Unit_getInstance();
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).next_20eer_k$ = function () {
    return allocateOrGetNextCopy(this, markFrozen(this));
  };
  protoOf(LockFreeTaskQueueCore).map_o73y3q_k$ = function (transform) {
    var res = ArrayList_init_$Create$(this.capacity_1);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_2();
    var tmp1_withState = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & this.mask_1) === (tail & this.mask_1))) {
      var element = this.array_1.atomicfu$get(index & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp;
      if (!(element == null)) {
        tmp = !(element instanceof Placeholder);
      } else {
        tmp = false;
      }
      if (tmp) {
        res.add_1j60pz_k$(transform(isObject(element) ? element : THROW_CCE()));
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
    }
    tmp$ret$0 = Unit_getInstance();
    return res;
  };
  protoOf(LockFreeTaskQueueCore).isClosed_baxhhm_k$ = function () {
    var tmp = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    Companion_getInstance_2();
    return !tmp.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0));
  };
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
    this.coroutineContext_1 = context;
  }
  protoOf(ContextScope).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.coroutineContext_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.uCont_1 = uCont;
  }
  protoOf(ScopeCoroutine).get_uCont_iyyiam_k$ = function () {
    return this.uCont_1;
  };
  protoOf(ScopeCoroutine).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(ScopeCoroutine).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(ScopeCoroutine).get_isScopedCoroutine_rwmmff_k$ = function () {
    return true;
  };
  protoOf(ScopeCoroutine).get_parent_hy4reb_k$ = function () {
    var tmp0_safe_receiver = this.get_parentHandle_gmoqez_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_parent_hy4reb_k$();
  };
  protoOf(ScopeCoroutine).afterCompletion_2ogq6g_k$ = function (state) {
    resumeCancellableWith(intercepted(this.uCont_1), recoverResult(state, this.uCont_1));
  };
  protoOf(ScopeCoroutine).afterResume_ufx9w9_k$ = function (state) {
    this.uCont_1.resumeWith_s3a3yh_k$(recoverResult(state, this.uCont_1));
  };
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  protoOf(Symbol).get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  protoOf(Symbol).toString = function () {
    return '<' + this.symbol_1 + '>';
  };
  protoOf(Symbol).unbox_4pmzbj_k$ = function (value) {
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return tmp;
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).toInt_1tsl84_k$();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.compareTo_n4fqi2_k$(parsed) <= 0 ? parsed.compareTo_n4fqi2_k$(maxValue) <= 0 : false)) {
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
  function startCoroutineCancellable_0(_this__u8e3s4, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
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
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function runSafely(completion, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
      } else {
        throw $p;
      }
    }
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.resumeWith_s3a3yh_k$(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, fatalCompletion) {
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
  function startCoroutineUnintercepted(_this__u8e3s4, completion) {
    var tmp$ret$6;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUnintercepted.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(actualCompletion) : _this__u8e3s4.invoke_34if6s_k$(actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp = tmp$ret$3;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          var tmp$ret$5;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$4);
          tmp$ret$5 = Unit_getInstance();
          tmp$ret$6 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$8;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp2_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(tmp2_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$7);
        tmp$ret$8 = Unit_getInstance();
      }
    }
  }
  function startCoroutineUnintercepted_0(_this__u8e3s4, receiver, completion) {
    var tmp$ret$6;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUnintercepted.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.invoke_5zdxxo_k$(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp = tmp$ret$3;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          var tmp$ret$5;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$4);
          tmp$ret$5 = Unit_getInstance();
          tmp$ret$6 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$8;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp2_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(tmp2_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$7);
        tmp$ret$8 = Unit_getInstance();
      }
    }
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    tmp$ret$0 = completion;
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$1);
        tmp$ret$2 = Unit_getInstance();
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
      actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  }
  function startCoroutineUndispatched(_this__u8e3s4, completion) {
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
        var tmp0_withCoroutineContext = completion.get_context_h02k06_k$();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(actualCompletion) : _this__u8e3s4.invoke_34if6s_k$(actualCompletion);
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
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$6);
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
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function startCoroutineUndispatched_0(_this__u8e3s4, receiver, completion) {
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
        var tmp0_withCoroutineContext = completion.get_context_h02k06_k$();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.invoke_5zdxxo_k$(receiver, actualCompletion);
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
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$6);
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
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$9);
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
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.invoke_5zdxxo_k$(receiver, _this__u8e3s4);
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
      var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.get_cause_iplhs0_k$();
        var tmp_3;
        if (tmp0__anonymous__q1qw7t instanceof TimeoutCancellationException) {
          tmp_3 = tmp0__anonymous__q1qw7t.get_coroutine_cnpmtt_k$() === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        tmp$ret$4 = !tmp_3;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
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
  function undispatchedResult(_this__u8e3s4, shouldThrow, startBlock) {
    var tmp;
    try {
      tmp = startBlock();
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
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (shouldThrow(state.get_cause_iplhs0_k$())) {
        throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function get_NOT_SELECTED() {
    _init_properties_Select_kt__zhm2jg();
    return NOT_SELECTED;
  }
  var NOT_SELECTED;
  function get_ALREADY_SELECTED() {
    _init_properties_Select_kt__zhm2jg();
    return ALREADY_SELECTED;
  }
  var ALREADY_SELECTED;
  function get_UNDECIDED_0() {
    _init_properties_Select_kt__zhm2jg();
    return UNDECIDED_0;
  }
  var UNDECIDED_0;
  function get_RESUMED_0() {
    _init_properties_Select_kt__zhm2jg();
    return RESUMED_0;
  }
  var RESUMED_0;
  function get_selectOpSequenceNumber() {
    _init_properties_Select_kt__zhm2jg();
    return selectOpSequenceNumber;
  }
  var selectOpSequenceNumber;
  function SelectClause0() {
  }
  function SelectInstance() {
  }
  function _get_number__4pkqn6($this) {
    return $this.number_1;
  }
  function SeqNumber() {
    this.number_1 = atomic$long$1(new Long(1, 0));
  }
  protoOf(SeqNumber).next_20eer_k$ = function () {
    return this.number_1.atomicfu$incrementAndGet$long();
  };
  function SelectClause1() {
  }
  function SelectClause2() {
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (properties_initialized_Select_kt_7rpl36) {
    } else {
      properties_initialized_Select_kt_7rpl36 = true;
      NOT_SELECTED = new Symbol('NOT_SELECTED');
      ALREADY_SELECTED = new Symbol('ALREADY_SELECTED');
      UNDECIDED_0 = new Symbol('UNDECIDED');
      RESUMED_0 = new Symbol('RESUMED');
      selectOpSequenceNumber = new SeqNumber();
    }
  }
  function get_LOCK_FAIL() {
    _init_properties_Mutex_kt__jod56b();
    return LOCK_FAIL;
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
    this.locked_1 = locked;
  }
  protoOf(Empty_0).get_locked_g9dxjn_k$ = function () {
    return this.locked_1;
  };
  protoOf(Empty_0).toString = function () {
    return 'Empty[' + toString_0(this.locked_1) + ']';
  };
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function withLock(_this__u8e3s4, owner, action, $completion) {
    owner = owner === VOID ? null : owner;
    var tmp = new $withLockCOROUTINE$13(_this__u8e3s4, owner, action, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function PrepareOp($outer, atomicOp) {
    this.$this_1 = $outer;
    OpDescriptor.call(this);
    this.atomicOp_1 = atomicOp;
  }
  protoOf(PrepareOp).get_atomicOp_p2pkuj_k$ = function () {
    return this.atomicOp_1;
  };
  protoOf(PrepareOp).perform_8emi3i_k$ = function (affected) {
    var update = this.atomicOp_1.get_isDecided_ofk0qx_k$() ? get_EMPTY_UNLOCKED() : this.atomicOp_1;
    (affected instanceof MutexImpl ? affected : THROW_CCE())._state_1.atomicfu$compareAndSet(this, update);
    return null;
  };
  function _get_isTaken__vqhb78($this) {
    return $this.isTaken_1;
  }
  function _get_cont__d4zd5l($this) {
    return $this.cont_1;
  }
  function MutexImpl$LockCont$tryResumeLockWaiter$lambda(this$0, this$1) {
    return function (it) {
      this$0.unlock_uksyr8_k$(this$1.owner_1);
      return Unit_getInstance();
    };
  }
  function MutexImpl$LockSelect$completeResumeLockWaiter$lambda(this$0, this$1) {
    return function (it) {
      this$0.unlock_uksyr8_k$(this$1.owner_1);
      return Unit_getInstance();
    };
  }
  function _get__state__37adl3_2($this) {
    return $this._state_1;
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
      var tmp0_loop = $this._state_1;
      while (true) {
        var tmp$ret$2;
        $l$block_1: {
          // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>.<anonymous>' call
          var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (tmp0_subject instanceof Empty_0) {
            if (!(tmp1__anonymous__uwfjfc.locked_1 === get_UNLOCKED())) {
              $this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, new LockedQueue(tmp1__anonymous__uwfjfc.locked_1));
            } else {
              var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
              if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
                cancellable.resume_l1w5in_k$(Unit_getInstance(), MutexImpl$lockSuspend$lambda($this, owner));
                tmp$ret$0 = Unit_getInstance();
                break $l$block_0;
              }
            }
          } else {
            if (tmp0_subject instanceof LockedQueue) {
              var curOwner = tmp1__anonymous__uwfjfc.owner_1;
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
              tmp1__anonymous__uwfjfc.addLast_uyctnf_k$(waiter);
              if ($this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$() === tmp1__anonymous__uwfjfc ? true : !waiter.take_2451j_k$()) {
                removeOnCancellation(cancellable, waiter);
                tmp$ret$0 = Unit_getInstance();
                break $l$block_0;
              }
              waiter = new LockCont($this, owner, cancellable);
              tmp$ret$2 = Unit_getInstance();
              break $l$block_1;
            } else {
              if (tmp0_subject instanceof OpDescriptor) {
                tmp1__anonymous__uwfjfc.perform_8emi3i_k$($this);
              } else {
                var tmp1_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              }
            }
          }
        }
      }
    }
    tmp$ret$3 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$3;
    return tmp0;
  }
  function TryLockDesc(mutex, owner) {
    AtomicDesc.call(this);
    this.mutex_1 = mutex;
    this.owner_1 = owner;
  }
  protoOf(TryLockDesc).get_mutex_ivg6dy_k$ = function () {
    return this.mutex_1;
  };
  protoOf(TryLockDesc).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(TryLockDesc).prepare_lz7jjr_k$ = function (op) {
    var prepare = new PrepareOp(this, op);
    if (!this.mutex_1._state_1.atomicfu$compareAndSet(get_EMPTY_UNLOCKED(), prepare))
      return get_LOCK_FAIL();
    return prepare.perform_8emi3i_k$(this.mutex_1);
  };
  protoOf(TryLockDesc).complete_b09hpj_k$ = function (op, failure) {
    var tmp;
    if (!(failure == null)) {
      tmp = get_EMPTY_UNLOCKED();
    } else {
      tmp = this.owner_1 == null ? get_EMPTY_LOCKED() : new Empty_0(this.owner_1);
    }
    var update = tmp;
    this.mutex_1._state_1.atomicfu$compareAndSet(op, update);
  };
  function LockedQueue(owner) {
    LinkedListHead.call(this);
    this.owner_1 = owner;
  }
  protoOf(LockedQueue).set_owner_hxk9qv_k$ = function (_set____db54di) {
    this.owner_1 = _set____db54di;
  };
  protoOf(LockedQueue).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(LockedQueue).toString = function () {
    return 'LockedQueue[' + toString_0(this.owner_1) + ']';
  };
  function LockWaiter($outer, owner) {
    this.$this_1 = $outer;
    LinkedListNode.call(this);
    this.owner_1 = owner;
    this.isTaken_1 = atomic$boolean$1(false);
  }
  protoOf(LockWaiter).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(LockWaiter).take_2451j_k$ = function () {
    return this.isTaken_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(LockWaiter).dispose_3n44we_k$ = function () {
    this.remove_fgfybg_k$();
  };
  function LockCont($outer, owner, cont) {
    this.$this_2 = $outer;
    LockWaiter.call(this, $outer, owner);
    this.cont_1 = cont;
  }
  protoOf(LockCont).tryResumeLockWaiter_ic8017_k$ = function () {
    if (!this.take_2451j_k$())
      return false;
    return !(this.cont_1.tryResume_93jc0s_k$(Unit_getInstance(), null, MutexImpl$LockCont$tryResumeLockWaiter$lambda(this.$this_2, this)) == null);
  };
  protoOf(LockCont).completeResumeLockWaiter_9lh6gy_k$ = function () {
    return this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  protoOf(LockCont).toString = function () {
    return 'LockCont[' + toString(this.owner_1) + ', ' + this.cont_1 + '] for ' + this.$this_2;
  };
  function LockSelect($outer, owner, select, block) {
    this.$this_2 = $outer;
    LockWaiter.call(this, $outer, owner);
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(LockSelect).get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  protoOf(LockSelect).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(LockSelect).tryResumeLockWaiter_ic8017_k$ = function () {
    return this.take_2451j_k$() ? this.select_1.trySelect_1ivjiv_k$() : false;
  };
  protoOf(LockSelect).completeResumeLockWaiter_9lh6gy_k$ = function () {
    var tmp = this.select_1.get_completion_t4gxwb_k$();
    startCoroutineCancellable(this.block_1, this.$this_2, tmp, MutexImpl$LockSelect$completeResumeLockWaiter$lambda(this.$this_2, this));
  };
  protoOf(LockSelect).toString = function () {
    return 'LockSelect[' + toString(this.owner_1) + ', ' + this.select_1 + '] for ' + this.$this_2;
  };
  function UnlockOp(queue) {
    AtomicOp.call(this);
    this.queue_1 = queue;
  }
  protoOf(UnlockOp).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(UnlockOp).prepare_qor5c_k$ = function (affected) {
    return this.queue_1.get_isEmpty_zauvru_k$() ? null : get_UNLOCK_FAIL();
  };
  protoOf(UnlockOp).prepare_gq68ys_k$ = function (affected) {
    return this.prepare_qor5c_k$(affected instanceof MutexImpl ? affected : THROW_CCE());
  };
  protoOf(UnlockOp).complete_fo0qwe_k$ = function (affected, failure) {
    var update = failure == null ? get_EMPTY_UNLOCKED() : this.queue_1;
    affected._state_1.atomicfu$compareAndSet(this, update);
  };
  protoOf(UnlockOp).complete_fye4ce_k$ = function (affected, failure) {
    return this.complete_fo0qwe_k$(affected instanceof MutexImpl ? affected : THROW_CCE(), failure);
  };
  function MutexImpl$lockSuspend$lambda(this$0, $owner) {
    return function (it) {
      this$0.unlock_uksyr8_k$($owner);
      return Unit_getInstance();
    };
  }
  function MutexImpl(locked) {
    this._state_1 = atomic$ref$1(locked ? get_EMPTY_LOCKED() : get_EMPTY_UNLOCKED());
  }
  protoOf(MutexImpl).get_isLocked_w82zdp_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.<get-isLocked>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0)
        return !(tmp1__anonymous__uwfjfc.locked_1 === get_UNLOCKED());
      else {
        if (tmp0_subject instanceof LockedQueue)
          return true;
        else {
          if (tmp0_subject instanceof OpDescriptor) {
            tmp1__anonymous__uwfjfc.perform_8emi3i_k$(this);
          } else {
            var tmp0_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).get_isLockedEmptyQueueState_r5n45s_k$ = function () {
    var state = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (state instanceof LockedQueue) {
      tmp = state.get_isEmpty_zauvru_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MutexImpl).tryLock_jl1wg7_k$ = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.tryLock.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0) {
        if (!(tmp1__anonymous__uwfjfc.locked_1 === get_UNLOCKED()))
          return false;
        var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
          return true;
      } else {
        if (tmp0_subject instanceof LockedQueue) {
          // Inline function 'kotlin.check' call
          var tmp0_check = !(tmp1__anonymous__uwfjfc.owner_1 === owner);
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
            tmp1__anonymous__uwfjfc.perform_8emi3i_k$(this);
          } else {
            var tmp1_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).lock_25dizd_k$ = function (owner, $completion) {
    if (this.tryLock_jl1wg7_k$(owner))
      return Unit_getInstance();
    var tmp0 = lockSuspend(this, owner, $completion);
    return tmp0;
  };
  protoOf(MutexImpl).get_onLock_hnkecz_k$ = function () {
    return this;
  };
  protoOf(MutexImpl).registerSelectClause2_k018gz_k$ = function (select, owner, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      var state = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (state instanceof Empty_0) {
        if (!(state.locked_1 === get_UNLOCKED())) {
          this._state_1.atomicfu$compareAndSet(state, new LockedQueue(state.locked_1));
        } else {
          var failure = select.performAtomicTrySelect_9r1u91_k$(new TryLockDesc(this, owner));
          if (failure == null) {
            startCoroutineUnintercepted_0(block, this, select.get_completion_t4gxwb_k$());
            return Unit_getInstance();
          } else if (failure === get_ALREADY_SELECTED())
            return Unit_getInstance();
          else if (failure === get_LOCK_FAIL()) {
          } else if (failure === get_RETRY_ATOMIC()) {
          } else {
            // Inline function 'kotlin.error' call
            var tmp0_error = 'performAtomicTrySelect(TryLockDesc) returned ' + toString(failure);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      } else {
        if (state instanceof LockedQueue) {
          // Inline function 'kotlin.check' call
          var tmp1_check = !(state.owner_1 === owner);
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp1_check) {
            var tmp$ret$0;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.registerSelectClause2.<anonymous>' call
            tmp$ret$0 = 'Already locked by ' + toString(owner);
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
          var node = new LockSelect(this, owner, select, block);
          state.addLast_uyctnf_k$(node);
          if (this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$() === state ? true : !node.take_2451j_k$()) {
            select.disposeOnSelect_lrl426_k$(node);
            return Unit_getInstance();
          }
        } else {
          if (state instanceof OpDescriptor) {
            state.perform_8emi3i_k$(this);
          } else {
            var tmp2_error = 'Illegal state ' + toString(state);
            throw IllegalStateException_init_$Create$(toString_0(tmp2_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).registerSelectClause2_5jxiui_k$ = function (select, param, block) {
    return this.registerSelectClause2_k018gz_k$(select, (param == null ? true : isObject(param)) ? param : THROW_CCE(), block);
  };
  protoOf(MutexImpl).holdsLock_9pqa81_k$ = function (owner) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.sync.MutexImpl.holdsLock.<anonymous>' call
    var tmp0_subject = tmp0_let;
    var tmp;
    if (tmp0_subject instanceof Empty_0) {
      tmp = tmp0_let.locked_1 === owner;
    } else {
      if (tmp0_subject instanceof LockedQueue) {
        tmp = tmp0_let.owner_1 === owner;
      } else {
        tmp = false;
      }
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(MutexImpl).unlock_uksyr8_k$ = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0) {
        if (owner == null) {
          // Inline function 'kotlin.check' call
          var tmp0_check = !(tmp1__anonymous__uwfjfc.locked_1 === get_UNLOCKED());
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
          var tmp1_check = tmp1__anonymous__uwfjfc.locked_1 === owner;
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp1_check) {
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
            tmp$ret$1 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__uwfjfc.locked_1) + ' but expected ' + toString(owner);
            var message_0 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_0(message_0));
          }
        }
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_EMPTY_UNLOCKED()))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.perform_8emi3i_k$(this);
        } else {
          if (tmp0_subject instanceof LockedQueue) {
            if (!(owner == null)) {
              // Inline function 'kotlin.check' call
              var tmp2_check = tmp1__anonymous__uwfjfc.owner_1 === owner;
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp2_check) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
                tmp$ret$2 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__uwfjfc.owner_1) + ' but expected ' + toString(owner);
                var message_1 = tmp$ret$2;
                throw IllegalStateException_init_$Create$(toString_0(message_1));
              }
            }
            var waiter = tmp1__anonymous__uwfjfc.removeFirstOrNull_eges3a_k$();
            if (waiter == null) {
              var op = new UnlockOp(tmp1__anonymous__uwfjfc);
              if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, op) ? op.perform_8emi3i_k$(this) == null : false)
                return Unit_getInstance();
            } else {
              if ((waiter instanceof LockWaiter ? waiter : THROW_CCE()).tryResumeLockWaiter_ic8017_k$()) {
                var tmp = tmp1__anonymous__uwfjfc;
                var tmp1_elvis_lhs = waiter.owner_1;
                tmp.owner_1 = tmp1_elvis_lhs == null ? get_LOCKED() : tmp1_elvis_lhs;
                waiter.completeResumeLockWaiter_9lh6gy_k$();
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
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.toString.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0)
        return 'Mutex[' + toString_0(tmp1__anonymous__uwfjfc.locked_1) + ']';
      else {
        if (tmp0_subject instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.perform_8emi3i_k$(this);
        } else {
          if (tmp0_subject instanceof LockedQueue)
            return 'Mutex[' + toString_0(tmp1__anonymous__uwfjfc.owner_1) + ']';
          else {
            var tmp0_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  function $withLockCOROUTINE$13(_this__u8e3s4, owner, action, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.owner_1 = owner;
    this.action_1 = action;
  }
  protoOf($withLockCOROUTINE$13).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.lock_25dizd_k$(this.owner_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp$ret$2;
            l$ret$3: do {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp_0;
                try {
                  tmp$ret$0 = this.action_1();
                  break l$ret$1;
                } catch ($p) {
                  var tmp_1;
                  {
                    var t = $p;
                    this._this__u8e3s4__1.unlock_uksyr8_k$(this.owner_1);
                    throw t;
                  }
                  tmp_0 = tmp_1;
                }
                tmp$ret$0 = tmp_0;
              }
               while (false);
              var tmp_2 = tmp$ret$0;
              this._this__u8e3s4__1.unlock_uksyr8_k$(this.owner_1);
              return tmp_2;
            }
             while (false);
            this._this__u8e3s4__1.unlock_uksyr8_k$(this.owner_1);
            ;
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
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (properties_initialized_Semaphore_kt_uqcwok) {
    } else {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function CloseableCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
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
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function get_asHandler_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
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
  function get_UNDEFINED_0() {
    return UNDEFINED_0;
  }
  var UNDEFINED_0;
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.get_coroutineContext_115oqo_k$().plus_rgw9wi_k$(context);
    return (!(combined === Dispatchers_getInstance().get_Default_goqax4_k$()) ? combined.get_j1ktw6_k$(Key_getInstance()) == null : false) ? combined.plus_rgw9wi_k$(Dispatchers_getInstance().get_Default_goqax4_k$()) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  function set_counter(_set____db54di) {
    counter = _set____db54di;
  }
  function get_counter() {
    return counter;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
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
  function assert(value) {
  }
  function _get_mainDispatcher__sm5ex7($this) {
    return $this.mainDispatcher_1;
  }
  function _set_injectedMainDispatcher__9278zd($this, _set____db54di) {
    $this.injectedMainDispatcher_1 = _set____db54di;
  }
  function _get_injectedMainDispatcher__d6w7gb($this) {
    return $this.injectedMainDispatcher_1;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default_1 = createDefaultDispatcher();
    this.Unconfined_1 = Unconfined_getInstance();
    this.mainDispatcher_1 = new JsMainDispatcher(this.Default_1, false);
    this.injectedMainDispatcher_1 = null;
  }
  protoOf(Dispatchers).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(Dispatchers).get_Main_wo5vz6_k$ = function () {
    var tmp0_elvis_lhs = this.injectedMainDispatcher_1;
    return tmp0_elvis_lhs == null ? this.mainDispatcher_1 : tmp0_elvis_lhs;
  };
  protoOf(Dispatchers).get_Unconfined_sfvx0q_k$ = function () {
    return this.Unconfined_1;
  };
  protoOf(Dispatchers).injectMain_isae1a_k$ = function (dispatcher) {
    this.injectedMainDispatcher_1 = dispatcher;
  };
  protoOf(Dispatchers).resetInjectedMain_6cv6vt_k$ = function () {
    this.injectedMainDispatcher_1 = null;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function _get_invokeImmediately__pxbc17($this) {
    return $this.invokeImmediately_1;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.delegate_1 = delegate;
    this.invokeImmediately_1 = invokeImmediately;
    this.immediate_1 = this.invokeImmediately_1 ? this : new JsMainDispatcher(this.delegate_1, true);
  }
  protoOf(JsMainDispatcher).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(JsMainDispatcher).get_immediate_r3y8eg_k$ = function () {
    return this.immediate_1;
  };
  protoOf(JsMainDispatcher).isDispatchNeeded_fmz9vn_k$ = function (context) {
    return !this.invokeImmediately_1;
  };
  protoOf(JsMainDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    return this.delegate_1.dispatch_o98ux7_k$(context, block);
  };
  protoOf(JsMainDispatcher).dispatchYield_ww21f6_k$ = function (context, block) {
    return this.delegate_1.dispatchYield_ww21f6_k$(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? this.delegate_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).dispatch_o98ux7_k$ = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.job_1 = job;
  }
  protoOf(JobCancellationException).get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.job_1;
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
        tmp_1 = equals(other.job_1, this.job_1);
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
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.job_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).scheduleQueueProcessing_nyddyc_k$ = function () {
    process.nextTick(this.messageQueue_1.processQueue_1);
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
  protoOf(SetTimeoutDispatcher).scheduleQueueProcessing_nyddyc_k$ = function () {
    setTimeout(this.messageQueue_1.processQueue_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.$this_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.processQueue_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).get_processQueue_xqf7it_k$ = function () {
    return this.processQueue_1;
  };
  protoOf(ScheduledMessageQueue).schedule_o6nex2_k$ = function () {
    this.$this_1.scheduleQueueProcessing_nyddyc_k$();
  };
  protoOf(ScheduledMessageQueue).reschedule_mh206x_k$ = function () {
    setTimeout(this.processQueue_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.messageQueue_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).get_messageQueue_gxtffx_k$ = function () {
    return this.messageQueue_1;
  };
  protoOf(SetTimeoutBasedDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(SetTimeoutBasedDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    this.messageQueue_1.enqueue_w6uc33_k$(block);
  };
  protoOf(SetTimeoutBasedDispatcher).invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  };
  function _set_scheduled__8qlfaw($this, _set____db54di) {
    $this.scheduled_1 = _set____db54di;
  }
  function _get_scheduled__wzo69o($this) {
    return $this.scheduled_1;
  }
  function MessageQueue() {
    ArrayQueue.call(this);
    this.yieldEvery_1 = 16;
    this.scheduled_1 = false;
  }
  protoOf(MessageQueue).get_yieldEvery_1qy12h_k$ = function () {
    return this.yieldEvery_1;
  };
  protoOf(MessageQueue).enqueue_w6uc33_k$ = function (element) {
    this.addLast_xhfl3v_k$(element);
    if (!this.scheduled_1) {
      this.scheduled_1 = true;
      this.schedule_o6nex2_k$();
    }
  };
  protoOf(MessageQueue).process_mza50i_k$ = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.yieldEvery_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.removeFirstOrNull_eges3a_k$();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.run_mw4iiu_k$();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.get_isEmpty_zauvru_k$()) {
        this.scheduled_1 = false;
      } else {
        this.reschedule_mh206x_k$();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_1tsl84_k$();
  }
  function _get_handle__ls055p_1($this) {
    return $this.handle_1;
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  protoOf(ClearTimeout).dispose_3n44we_k$ = function () {
    clearTimeout(this.handle_1);
  };
  protoOf(ClearTimeout).invoke_7fb7sc_k$ = function (cause) {
    this.dispose_3n44we_k$();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.handle_1 + ']';
  };
  function get_MAX_DELAY() {
    return MAX_DELAY;
  }
  var MAX_DELAY;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function _get_queue__c6g84g_0($this) {
    return $this.queue_1;
  }
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.this$0__1 = this$0;
    this.$handle_1 = $handle;
  }
  protoOf(WindowDispatcher$invokeOnTimeout$1).dispose_3n44we_k$ = function () {
    this.this$0__1.window_1.clearTimeout(this.$handle_1);
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_1 = window_0;
    this.queue_1 = new WindowMessageQueue(this.window_1);
  }
  protoOf(WindowDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    return this.queue_1.enqueue_w6uc33_k$(block);
  };
  protoOf(WindowDispatcher).scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.window_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  protoOf(WindowDispatcher).invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = this.window_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  function _get_window__ax0zxh_0($this) {
    return $this.window_1;
  }
  function _get_messageName__5th09r($this) {
    return $this.messageName_1;
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.window_1 ? event.data == this$0.messageName_1 : false) {
        event.stopPropagation();
        this$0.process_mza50i_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.window_1 = window_0;
    this.messageName_1 = 'dispatchCoroutine';
    this.window_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).schedule_o6nex2_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).reschedule_mh206x_k$ = function () {
    this.window_1.postMessage(this.messageName_1, '*');
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function afterTask(_this__u8e3s4) {
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
    this.owner_1 = owner;
  }
  protoOf(AbortFlowException).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  protoOf(NoOpLock).tryLock_hapj0a_k$ = function () {
    return true;
  };
  protoOf(NoOpLock).unlock_85cgkz_k$ = function () {
  };
  function withLock_0(_this__u8e3s4, action) {
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).get_isEmpty_zauvru_k$ = function () {
    return this._next_1 === this;
  };
  protoOf(LinkedListHead).remove_fgfybg_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this._next_1 = this;
    this._prev_1 = this;
    this._removed_1 = false;
  }
  protoOf(LinkedListNode).set__next_ir5h2x_k$ = function (_set____db54di) {
    this._next_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__next_inmai1_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).set__prev_qmwz5z_k$ = function (_set____db54di) {
    this._prev_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__prev_inntnt_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).set__removed_pin64r_k$ = function (_set____db54di) {
    this._removed_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__removed_p9514a_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).get_nextNode_88zlwi_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).get_prevNode_i5bmvy_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).get_isRemoved_gzdz59_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).addLast_uyctnf_k$ = function (node) {
    var prev = this._prev_1;
    node._next_1 = this;
    node._prev_1 = prev;
    prev._next_1 = node;
    this._prev_1 = node;
  };
  protoOf(LinkedListNode).remove_fgfybg_k$ = function () {
    return this.removeImpl_i5v938_k$();
  };
  protoOf(LinkedListNode).removeImpl_i5v938_k$ = function () {
    if (this._removed_1)
      return false;
    var prev = this._prev_1;
    var next = this._next_1;
    prev._next_1 = next;
    next._prev_1 = prev;
    this._removed_1 = true;
    return true;
  };
  protoOf(LinkedListNode).addOneIfEmpty_cbgboi_k$ = function (node) {
    if (!(this._next_1 === this))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIf_h8xph4_k$ = function (node, condition) {
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrev_bzlxtw_k$ = function (node, predicate) {
    if (!predicate(this._prev_1))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrevAndIf_gphed7_k$ = function (node, predicate, condition) {
    if (!predicate(this._prev_1))
      return false;
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).helpRemove_v3vfak_k$ = function () {
  };
  protoOf(LinkedListNode).removeFirstOrNull_eges3a_k$ = function () {
    var next = this._next_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    var tmp0_check = next.removeImpl_i5v938_k$();
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
  function PrepareOp_0(affected, desc, atomicOp) {
    OpDescriptor.call(this);
    this.affected_1 = affected;
    this.desc_1 = desc;
    this.atomicOp_1 = atomicOp;
  }
  protoOf(PrepareOp_0).get_affected_lutt4z_k$ = function () {
    return this.affected_1;
  };
  protoOf(PrepareOp_0).get_desc_woknve_k$ = function () {
    return this.desc_1;
  };
  protoOf(PrepareOp_0).get_atomicOp_p2pkuj_k$ = function () {
    return this.atomicOp_1;
  };
  protoOf(PrepareOp_0).perform_8emi3i_k$ = function (affected) {
    return null;
  };
  protoOf(PrepareOp_0).finishPrepare_o9c8d9_k$ = function () {
  };
  function AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  protoOf(AbstractAtomicDesc).onPrepare_soaf0c_k$ = function (prepareOp) {
    this.finishPrepare_kkga2x_k$(prepareOp);
    return null;
  };
  protoOf(AbstractAtomicDesc).onRemoved_gagg6z_k$ = function (affected) {
  };
  protoOf(AbstractAtomicDesc).prepare_lz7jjr_k$ = function (op) {
    var affected = this.get_affectedNode_2377z5_k$();
    var failure = this.failure_mowj19_k$(affected);
    if (!(failure == null))
      return failure;
    return this.onPrepare_soaf0c_k$(new PrepareOp_0(affected, this, op));
  };
  protoOf(AbstractAtomicDesc).complete_b09hpj_k$ = function (op, failure) {
    return this.onComplete_9ma4gp_k$();
  };
  protoOf(AbstractAtomicDesc).failure_mowj19_k$ = function (affected) {
    return null;
  };
  protoOf(AbstractAtomicDesc).retry_84e02v_k$ = function (affected, next) {
    return false;
  };
  function RemoveFirstDesc(queue) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4._next_1;
    tmp.affectedNode_1 = tmp$ret$0;
  }
  protoOf(RemoveFirstDesc).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(RemoveFirstDesc).get_result_iyg5d2_k$ = function () {
    var tmp = this.get_affectedNode_2377z5_k$();
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  protoOf(RemoveFirstDesc).get_affectedNode_2377z5_k$ = function () {
    return this.affectedNode_1;
  };
  protoOf(RemoveFirstDesc).finishPrepare_kkga2x_k$ = function (prepareOp) {
  };
  protoOf(RemoveFirstDesc).onComplete_9ma4gp_k$ = function () {
    this.queue_1.removeFirstOrNull_eges3a_k$();
  };
  protoOf(RemoveFirstDesc).finishOnSuccess_jxa2jk_k$ = function (affected, next) {
    return Unit_getInstance();
  };
  function AddLastDesc(queue, node) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    this.node_1 = node;
  }
  protoOf(AddLastDesc).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(AddLastDesc).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(AddLastDesc).get_affectedNode_2377z5_k$ = function () {
    return this.queue_1._prev_1;
  };
  protoOf(AddLastDesc).finishPrepare_kkga2x_k$ = function (prepareOp) {
  };
  protoOf(AddLastDesc).onComplete_9ma4gp_k$ = function () {
    return this.queue_1.addLast_uyctnf_k$(this.node_1);
  };
  protoOf(AddLastDesc).finishOnSuccess_jxa2jk_k$ = function (affected, next) {
    return Unit_getInstance();
  };
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverAndThrow(exception, $completion) {
    throw exception;
  }
  function initCause(_this__u8e3s4, cause) {
  }
  function CoroutineStackFrame() {
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function _set_value__lx0xdg_0($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function CommonThreadLocal() {
    this.value_1 = null;
  }
  protoOf(CommonThreadLocal).get_26vq_k$ = function () {
    var tmp = this.value_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).set_hda1d2_k$ = function (value) {
    this.value_1 = value;
  };
  //region block: post-declaration
  protoOf(JobSupport).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(JobSupport).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(JobSupport).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(JobSupport).cancel_2kogtl_k$ = cancel;
  protoOf(JobSupport).plus_ee14jq_k$ = plus_0;
  protoOf(JobSupport).plus_rgw9wi_k$ = plus;
  protoOf(JobSupport).get_j1ktw6_k$ = get;
  protoOf(JobSupport).fold_iindx8_k$ = fold;
  protoOf(JobSupport).minusKey_y21q55_k$ = minusKey;
  protoOf(AbstractCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(AbstractCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(AbstractCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(AbstractCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(AbstractCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(AbstractCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(AbstractCoroutine).get_j1ktw6_k$ = get;
  protoOf(AbstractCoroutine).fold_iindx8_k$ = fold;
  protoOf(AbstractCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(DeferredCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(DeferredCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(DeferredCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(DeferredCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(DeferredCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(DeferredCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(DeferredCoroutine).get_j1ktw6_k$ = get;
  protoOf(DeferredCoroutine).fold_iindx8_k$ = fold;
  protoOf(DeferredCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(LazyDeferredCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(LazyDeferredCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(LazyDeferredCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(LazyDeferredCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(LazyDeferredCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(LazyDeferredCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(LazyDeferredCoroutine).get_j1ktw6_k$ = get;
  protoOf(LazyDeferredCoroutine).fold_iindx8_k$ = fold;
  protoOf(LazyDeferredCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(StandaloneCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(StandaloneCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(StandaloneCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(StandaloneCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(StandaloneCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(StandaloneCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(StandaloneCoroutine).get_j1ktw6_k$ = get;
  protoOf(StandaloneCoroutine).fold_iindx8_k$ = fold;
  protoOf(StandaloneCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(LazyStandaloneCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(LazyStandaloneCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(LazyStandaloneCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(LazyStandaloneCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(LazyStandaloneCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(LazyStandaloneCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(LazyStandaloneCoroutine).get_j1ktw6_k$ = get;
  protoOf(LazyStandaloneCoroutine).fold_iindx8_k$ = fold;
  protoOf(LazyStandaloneCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(CancellableContinuationImpl).cancel$default_hru8c2_k$ = cancel$default_1;
  protoOf(CancellableContinuationImpl).tryResume$default_32aap5_k$ = tryResume$default;
  protoOf(CompletableDeferredImpl).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(CompletableDeferredImpl).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(CompletableDeferredImpl).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(CompletableDeferredImpl).cancel_2kogtl_k$ = cancel;
  protoOf(CompletableDeferredImpl).plus_ee14jq_k$ = plus_0;
  protoOf(CompletableDeferredImpl).plus_rgw9wi_k$ = plus;
  protoOf(CompletableDeferredImpl).get_j1ktw6_k$ = get;
  protoOf(CompletableDeferredImpl).fold_iindx8_k$ = fold;
  protoOf(CompletableDeferredImpl).minusKey_y21q55_k$ = minusKey;
  protoOf(CoroutineDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(CoroutineDispatcher).fold_iindx8_k$ = fold;
  protoOf(CoroutineDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(CoroutineDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(_no_name_provided__qut3iv).get_j1ktw6_k$ = get;
  protoOf(_no_name_provided__qut3iv).fold_iindx8_k$ = fold;
  protoOf(_no_name_provided__qut3iv).minusKey_y21q55_k$ = minusKey;
  protoOf(_no_name_provided__qut3iv).plus_rgw9wi_k$ = plus;
  protoOf(CoroutineName).get_j1ktw6_k$ = get;
  protoOf(CoroutineName).fold_iindx8_k$ = fold;
  protoOf(CoroutineName).minusKey_y21q55_k$ = minusKey;
  protoOf(CoroutineName).plus_rgw9wi_k$ = plus;
  protoOf(EventLoop).plus_rgw9wi_k$ = plus;
  protoOf(EventLoop).get_j1ktw6_k$ = get_0;
  protoOf(EventLoop).fold_iindx8_k$ = fold;
  protoOf(EventLoop).minusKey_y21q55_k$ = minusKey_0;
  protoOf(AwaitContinuation).cancel$default_hru8c2_k$ = cancel$default_1;
  protoOf(AwaitContinuation).tryResume$default_32aap5_k$ = tryResume$default;
  protoOf(JobImpl).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(JobImpl).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(JobImpl).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(JobImpl).cancel_2kogtl_k$ = cancel;
  protoOf(JobImpl).plus_ee14jq_k$ = plus_0;
  protoOf(JobImpl).plus_rgw9wi_k$ = plus;
  protoOf(JobImpl).get_j1ktw6_k$ = get;
  protoOf(JobImpl).fold_iindx8_k$ = fold;
  protoOf(JobImpl).minusKey_y21q55_k$ = minusKey;
  protoOf(MainCoroutineDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(MainCoroutineDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(MainCoroutineDispatcher).fold_iindx8_k$ = fold;
  protoOf(MainCoroutineDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SupervisorJobImpl).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(SupervisorJobImpl).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(SupervisorJobImpl).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(SupervisorJobImpl).cancel_2kogtl_k$ = cancel;
  protoOf(SupervisorJobImpl).plus_ee14jq_k$ = plus_0;
  protoOf(SupervisorJobImpl).plus_rgw9wi_k$ = plus;
  protoOf(SupervisorJobImpl).get_j1ktw6_k$ = get;
  protoOf(SupervisorJobImpl).fold_iindx8_k$ = fold;
  protoOf(SupervisorJobImpl).minusKey_y21q55_k$ = minusKey;
  protoOf(ScopeCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(ScopeCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(ScopeCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(ScopeCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(ScopeCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(ScopeCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(ScopeCoroutine).get_j1ktw6_k$ = get;
  protoOf(ScopeCoroutine).fold_iindx8_k$ = fold;
  protoOf(ScopeCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(TimeoutCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(TimeoutCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(TimeoutCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(TimeoutCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(TimeoutCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(TimeoutCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(TimeoutCoroutine).get_j1ktw6_k$ = get;
  protoOf(TimeoutCoroutine).fold_iindx8_k$ = fold;
  protoOf(TimeoutCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(Unconfined).plus_rgw9wi_k$ = plus;
  protoOf(Unconfined).get_j1ktw6_k$ = get_0;
  protoOf(Unconfined).fold_iindx8_k$ = fold;
  protoOf(Unconfined).minusKey_y21q55_k$ = minusKey_0;
  protoOf(YieldContext).get_j1ktw6_k$ = get;
  protoOf(YieldContext).fold_iindx8_k$ = fold;
  protoOf(YieldContext).minusKey_y21q55_k$ = minusKey;
  protoOf(YieldContext).plus_rgw9wi_k$ = plus;
  protoOf(Itr).next0_nshvhy_k$ = next0;
  protoOf(AbstractSendChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(AbstractChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(AbstractChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(AbstractChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(AbstractChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(AbstractChannel).poll_21vi7_k$ = poll;
  protoOf(AbstractChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(AbstractChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(ArrayChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(ArrayChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(ArrayChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(ArrayChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(ArrayChannel).poll_21vi7_k$ = poll;
  protoOf(ArrayChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(ArrayChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(ConflatedChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(ConflatedChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(ConflatedChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(ConflatedChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(ConflatedChannel).poll_21vi7_k$ = poll;
  protoOf(ConflatedChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(ConflatedChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(LinkedListChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(LinkedListChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(LinkedListChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(LinkedListChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(LinkedListChannel).poll_21vi7_k$ = poll;
  protoOf(LinkedListChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(LinkedListChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(RendezvousChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(RendezvousChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(RendezvousChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(RendezvousChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(RendezvousChannel).poll_21vi7_k$ = poll;
  protoOf(RendezvousChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(RendezvousChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(LimitedDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(LimitedDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(LimitedDispatcher).fold_iindx8_k$ = fold;
  protoOf(LimitedDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(MutexImpl).tryLock$default_rul8cl_k$ = tryLock$default;
  protoOf(MutexImpl).lock$default_6ude1f_k$ = lock$default;
  protoOf(MutexImpl).unlock$default_u8q7s8_k$ = unlock$default;
  protoOf(CloseableCoroutineDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(CloseableCoroutineDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(CloseableCoroutineDispatcher).fold_iindx8_k$ = fold;
  protoOf(CloseableCoroutineDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(JsMainDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(JsMainDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(JsMainDispatcher).fold_iindx8_k$ = fold;
  protoOf(JsMainDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(UnconfinedEventLoop).plus_rgw9wi_k$ = plus;
  protoOf(UnconfinedEventLoop).get_j1ktw6_k$ = get_0;
  protoOf(UnconfinedEventLoop).fold_iindx8_k$ = fold;
  protoOf(UnconfinedEventLoop).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(SetTimeoutBasedDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(SetTimeoutBasedDispatcher).fold_iindx8_k$ = fold;
  protoOf(SetTimeoutBasedDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).delay_sw4t2e_k$ = delay;
  protoOf(NodeDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(NodeDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(NodeDispatcher).fold_iindx8_k$ = fold;
  protoOf(NodeDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(NodeDispatcher).delay_sw4t2e_k$ = delay;
  protoOf(SetTimeoutDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(SetTimeoutDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(SetTimeoutDispatcher).fold_iindx8_k$ = fold;
  protoOf(SetTimeoutDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SetTimeoutDispatcher).delay_sw4t2e_k$ = delay;
  protoOf(WindowDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(WindowDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(WindowDispatcher).fold_iindx8_k$ = fold;
  protoOf(WindowDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(WindowDispatcher).delay_sw4t2e_k$ = delay;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  RETRY = -1;
  RECEIVE_THROWS_ON_CLOSE = 0;
  RECEIVE_RESULT = 1;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  DEFAULT_CONCURRENCY_PROPERTY_NAME = 'kotlinx.coroutines.flow.defaultConcurrency';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  UNDEFINED_0 = 'undefined';
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  MAX_DELAY = new Long(2147483647, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = firstOrNull;
  _.$_$.c = delay_0;
  _.$_$.d = withTimeoutOrNull;
  _.$_$.e = cancel$default_0;
  _.$_$.f = cancel$default;
  _.$_$.g = invokeOnCompletion$default;
  _.$_$.h = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.i = Factory_getInstance;
  _.$_$.j = Key_getInstance_0;
  _.$_$.k = Key_getInstance_1;
  _.$_$.l = Dispatchers_getInstance;
  _.$_$.m = GlobalScope_getInstance;
  _.$_$.n = Key_getInstance_3;
  _.$_$.o = ChannelResult;
  _.$_$.p = Channel_0;
  _.$_$.q = ClosedReceiveChannelException;
  _.$_$.r = ClosedSendChannelException;
  _.$_$.s = cancelConsumed;
  _.$_$.t = FlowCollector;
  _.$_$.u = Flow;
  _.$_$.v = asFlow;
  _.$_$.w = LinkedListHead;
  _.$_$.x = LinkedListNode;
  _.$_$.y = recoverStackTrace;
  _.$_$.z = Mutex_0;
  _.$_$.a1 = CancellableContinuationImpl;
  _.$_$.b1 = CloseableCoroutineDispatcher;
  _.$_$.c1 = CompletableDeferred_0;
  _.$_$.d1 = CompletableJob;
  _.$_$.e1 = CopyableThrowable;
  _.$_$.f1 = CoroutineExceptionHandler;
  _.$_$.g1 = CoroutineName;
  _.$_$.h1 = CoroutineScope;
  _.$_$.i1 = CoroutineScope_0;
  _.$_$.j1 = DisposableHandle;
  _.$_$.k1 = Job_0;
  _.$_$.l1 = Job;
  _.$_$.m1 = get_MODE_CANCELLABLE;
  _.$_$.n1 = MainScope;
  _.$_$.o1 = SupervisorJob;
  _.$_$.p1 = async;
  _.$_$.q1 = cancel_1;
  _.$_$.r1 = cancel_3;
  _.$_$.s1 = cancel_2;
  _.$_$.t1 = cancel_4;
  _.$_$.u1 = get_job;
  _.$_$.v1 = launch;
  //endregion
  return _;
}));
