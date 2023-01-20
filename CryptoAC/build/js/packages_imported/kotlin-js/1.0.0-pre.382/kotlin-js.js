(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kotlin-js'.");
    }
    root['kotlin-js'] = factory(typeof this['kotlin-js'] === 'undefined' ? {} : this['kotlin-js'], kotlin, this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_dbl4no$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var iterator = Kotlin.kotlin.sequences.iterator_o0x0bg$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Annotation = Kotlin.kotlin.Annotation;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var CancellableContinuationImpl_init = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellableContinuationImpl;
  var DurationUnit = Kotlin.kotlin.time.DurationUnit;
  FetchException.prototype = Object.create(IllegalStateException.prototype);
  FetchException.prototype.constructor = FetchException;
  function AbortController_0() {
    return new AbortController();
  }
  function AbortSignal_0() {
    return new AbortSignal();
  }
  var get_n = defineInlineFunction('kotlin-js.kotlinx.js.get_n_rcaex3$', wrapFunction(function () {
    var BigInt_0 = BigInt;
    return function ($receiver) {
      return BigInt_0($receiver);
    };
  }));
  var get_n_0 = defineInlineFunction('kotlin-js.kotlinx.js.get_n_pdl1vz$', wrapFunction(function () {
    var BigInt_0 = BigInt;
    return function ($receiver) {
      return BigInt_0($receiver);
    };
  }));
  var unaryMinus = defineInlineFunction('kotlin-js.kotlinx.js.unaryMinus_xvw632$', function ($receiver) {
    return -$receiver;
  });
  var plus = defineInlineFunction('kotlin-js.kotlinx.js.plus_62khwr$', function ($receiver, other) {
    return $receiver + other;
  });
  var minus = defineInlineFunction('kotlin-js.kotlinx.js.minus_62khwr$', function ($receiver, other) {
    return $receiver - other;
  });
  var times = defineInlineFunction('kotlin-js.kotlinx.js.times_62khwr$', function ($receiver, other) {
    return $receiver * other;
  });
  var div = defineInlineFunction('kotlin-js.kotlinx.js.div_62khwr$', function ($receiver, other) {
    return $receiver / other;
  });
  function FetchException(cause) {
    IllegalStateException_init(cause, this);
    this.name = 'FetchException';
  }
  FetchException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FetchException',
    interfaces: [IllegalStateException]
  };
  var get = defineInlineFunction('kotlin-js.kotlinx.js.get_u2kjes$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_0 = defineInlineFunction('kotlin-js.kotlinx.js.get_c6o7v2$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_1 = defineInlineFunction('kotlin-js.kotlinx.js.get_7deank$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_2 = defineInlineFunction('kotlin-js.kotlinx.js.get_amgaog$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_3 = defineInlineFunction('kotlin-js.kotlinx.js.get_4xuxs6$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_4 = defineInlineFunction('kotlin-js.kotlinx.js.get_5468ts$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_5 = defineInlineFunction('kotlin-js.kotlinx.js.get_dnejfs$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_6 = defineInlineFunction('kotlin-js.kotlinx.js.get_gtla5s$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_7 = defineInlineFunction('kotlin-js.kotlinx.js.get_h8bly0$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_8 = defineInlineFunction('kotlin-js.kotlinx.js.get_g2wuas$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_9 = defineInlineFunction('kotlin-js.kotlinx.js.get_7wonwo$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_10 = defineInlineFunction('kotlin-js.kotlinx.js.get_tf64s$', function ($receiver, key) {
    return $receiver[key];
  });
  var get_11 = defineInlineFunction('kotlin-js.kotlinx.js.get_dlyrsi$', function ($receiver, key) {
    return $receiver[key];
  });
  var newInstance = defineInlineFunction('kotlin-js.kotlinx.js.newInstance_2sk2mx$', wrapFunction(function () {
    var newInstance = _.kotlinx.js.newInstance_x7e9z0$;
    return function ($receiver) {
      return newInstance($receiver);
    };
  }));
  function newInstance_0(clazz) {
    return new clazz();
  }
  function Coroutine$iterator$lambda(this$iterator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$iterator = this$iterator_0;
    this.local$result = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$iterator$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$iterator$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$iterator$lambda.prototype.constructor = Coroutine$iterator$lambda;
  Coroutine$iterator$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$result = this.local$this$iterator.next();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$result.done) {
              this.state_0 = 4;
              continue;
            }

            var value = this.local$result.value;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$result = this.local$this$iterator.next();
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
  function iterator$lambda(this$iterator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$iterator$lambda(this$iterator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function iterator_0($receiver) {
    return iterator(iterator$lambda($receiver));
  }
  function toExponential($receiver) {
    return (new Number($receiver)).toExponential();
  }
  function toExponential_0($receiver, fractionDigits) {
    return (new Number($receiver)).toExponential(fractionDigits);
  }
  function toExponential_1($receiver) {
    return (new Number($receiver)).toExponential();
  }
  function toExponential_2($receiver, fractionDigits) {
    return (new Number($receiver)).toExponential(fractionDigits);
  }
  var JsPair = defineInlineFunction('kotlin-js.kotlinx.js.JsPair_o5fpdy$', function (a, b) {
    return [a, b];
  });
  function JsTuple1() {
  }
  JsTuple1.prototype.component1 = defineInlineFunction('kotlin-js.kotlinx.js.JsTuple1.component1', function () {
    return this[0];
  });
  JsTuple1.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsTuple1',
    interfaces: []
  };
  function JsTuple2() {
  }
  JsTuple2.prototype.component2 = defineInlineFunction('kotlin-js.kotlinx.js.JsTuple2.component2', function () {
    return this[1];
  });
  JsTuple2.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsTuple2',
    interfaces: [JsTuple1]
  };
  function JsTuple3() {
  }
  JsTuple3.prototype.component3 = defineInlineFunction('kotlin-js.kotlinx.js.JsTuple3.component3', function () {
    return this[2];
  });
  JsTuple3.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsTuple3',
    interfaces: [JsTuple2]
  };
  function JsTuple4() {
  }
  JsTuple4.prototype.component4 = defineInlineFunction('kotlin-js.kotlinx.js.JsTuple4.component4', function () {
    return this[3];
  });
  JsTuple4.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsTuple4',
    interfaces: [JsTuple3]
  };
  function JsTuple5() {
  }
  JsTuple5.prototype.component5 = defineInlineFunction('kotlin-js.kotlinx.js.JsTuple5.component5', function () {
    return this[4];
  });
  JsTuple5.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsTuple5',
    interfaces: [JsTuple4]
  };
  var emptyTuple = defineInlineFunction('kotlin-js.kotlinx.js.emptyTuple', function () {
    return [];
  });
  var tupleOf = defineInlineFunction('kotlin-js.kotlinx.js.tupleOf_mh5how$', function (first) {
    return [first];
  });
  var tupleOf_0 = defineInlineFunction('kotlin-js.kotlinx.js.tupleOf_o5fpdy$', function (first, second) {
    return [first, second];
  });
  var tupleOf_1 = defineInlineFunction('kotlin-js.kotlinx.js.tupleOf_uzi532$', function (first, second, third) {
    return [first, second, third];
  });
  var tupleOf_2 = defineInlineFunction('kotlin-js.kotlinx.js.tupleOf_2zz2ko$', function (first, second, third, fourth) {
    return [first, second, third, fourth];
  });
  var tupleOf_3 = defineInlineFunction('kotlin-js.kotlinx.js.tupleOf_6yyj4c$', function (first, second, third, fourth, fifth) {
    return [first, second, third, fourth, fifth];
  });
  function JsoDsl() {
  }
  JsoDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsoDsl',
    interfaces: [Annotation]
  };
  function PerformanceMeasureOptions() {
  }
  PerformanceMeasureOptions.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PerformanceMeasureOptions',
    interfaces: []
  };
  var resolve = defineInlineFunction('kotlin-js.kotlinx.js.resolve_br86m$', function ($receiver) {
    return $receiver.resolve(undefined);
  });
  var PromiseResult = defineInlineFunction('kotlin-js.kotlinx.js.PromiseResult_mh5how$', function (value) {
    return value;
  });
  var PromiseResult_0 = defineInlineFunction('kotlin-js.kotlinx.js.PromiseResult_a2c6wc$', function (value) {
    return value;
  });
  var toPromise = defineInlineFunction('kotlin-js.kotlinx.js.toPromise_pd2trc$', wrapFunction(function () {
    var Promise$Companion = Promise;
    return function ($receiver) {
      return Promise$Companion.resolve($receiver);
    };
  }));
  var get_12 = defineInlineFunction('kotlin-js.kotlinx.js.get_knffog$', function ($receiver, key) {
    return $receiver[key];
  });
  var set = defineInlineFunction('kotlin-js.kotlinx.js.set_vc5bpe$', function ($receiver, key, value) {
    $receiver[key] = value;
  });
  function Record() {
    return {};
  }
  function Record_0(block) {
    var $receiver = {};
    block($receiver);
    return $receiver;
  }
  function SuspendableIterator() {
  }
  SuspendableIterator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SuspendableIterator',
    interfaces: []
  };
  function suspendCancellableCoroutine$lambda(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function fetch$lambda$lambda(closure$controller) {
    return function (it) {
      closure$controller.abort();
      return Unit;
    };
  }
  function fetch$lambda$lambda_0(closure$continuation) {
    return function (it) {
      closure$continuation.resumeWith_tl1gpc$(new Result(it));
      return Unit;
    };
  }
  function fetch$lambda$lambda_1(closure$continuation) {
    return function (it) {
      var $receiver = closure$continuation;
      var exception = new FetchException(it);
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
      return Unit;
    };
  }
  function fetch$lambda(closure$input) {
    return function (continuation) {
      var controller = AbortController_0();
      continuation.invokeOnCancellation_f05bi3$(fetch$lambda$lambda(controller));
      var tmp$ = closure$input;
      var $receiver = {};
      $receiver.signal = controller.signal;
      var request = new Request(tmp$, $receiver);
      fetch(request).then(fetch$lambda$lambda_0(continuation)).catch(fetch$lambda$lambda_1(continuation));
      return Unit;
    };
  }
  function Coroutine$fetch(input_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$input = input_0;
  }
  Coroutine$fetch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetch.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetch.prototype.constructor = Coroutine$fetch;
  Coroutine$fetch.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda(fetch$lambda(this.local$input))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function fetch_0(input_0, continuation_0, suspended) {
    var instance = new Coroutine$fetch(input_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function fetch_1(input, init, continuation) {
    return fetch_0(new Request(input, init), continuation);
  }
  function fetch_2(input, continuation) {
    return fetch_0(new Request(input), continuation);
  }
  function fetch_3(input, init, continuation) {
    return fetch_0(new Request(input, init), continuation);
  }
  function fetch_4(input, continuation) {
    return fetch_0(new Request(input), continuation);
  }
  function fetch_5(input, init, continuation) {
    return fetch_0(new Request(input, init), continuation);
  }
  var get_MODE = defineInlineFunction('kotlin-js.kotlinx.js.get_MODE_g7idsg$', function ($receiver) {
    return process.env.NODE_ENV;
  });
  var get_PROD = defineInlineFunction('kotlin-js.kotlinx.js.get_PROD_g7idsg$', function ($receiver) {
    return process.env.NODE_ENV === 'production';
  });
  var get_DEV = defineInlineFunction('kotlin-js.kotlinx.js.get_DEV_g7idsg$', function ($receiver) {
    return process.env.NODE_ENV !== 'production';
  });
  var jso = defineInlineFunction('kotlin-js.kotlinx.js.jso_30y1fr$', function () {
    return {};
  });
  var jso_0 = defineInlineFunction('kotlin-js.kotlinx.js.jso_dajwzo$', function (block) {
    var $receiver = {};
    block($receiver);
    return $receiver;
  });
  function setInterval_0(delay, callback) {
    return setInterval(callback, delay.toInt_p6uejw$(DurationUnit.MILLISECONDS));
  }
  function setTimeout_0(delay, callback) {
    return setTimeout(callback, delay.toInt_p6uejw$(DurationUnit.MILLISECONDS));
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$js = package$kotlinx.js || (package$kotlinx.js = {});
  package$js.AbortController = AbortController_0;
  package$js.AbortSignal = AbortSignal_0;
  package$js.get_n_rcaex3$ = get_n;
  package$js.get_n_pdl1vz$ = get_n_0;
  package$js.unaryMinus_xvw632$ = unaryMinus;
  package$js.plus_62khwr$ = plus;
  package$js.minus_62khwr$ = minus;
  package$js.times_62khwr$ = times;
  package$js.div_62khwr$ = div;
  package$js.FetchException = FetchException;
  package$js.get_u2kjes$ = get;
  package$js.get_c6o7v2$ = get_0;
  package$js.get_7deank$ = get_1;
  package$js.get_amgaog$ = get_2;
  package$js.get_4xuxs6$ = get_3;
  package$js.get_5468ts$ = get_4;
  package$js.get_dnejfs$ = get_5;
  package$js.get_gtla5s$ = get_6;
  package$js.get_h8bly0$ = get_7;
  package$js.get_g2wuas$ = get_8;
  package$js.get_7wonwo$ = get_9;
  package$js.get_tf64s$ = get_10;
  package$js.get_dlyrsi$ = get_11;
  package$js.newInstance_x7e9z0$ = newInstance_0;
  package$js.newInstance_2sk2mx$ = newInstance;
  package$js.iterator_8js8x9$ = iterator_0;
  package$js.toExponential_s8ev3n$ = toExponential;
  package$js.toExponential_dqglrj$ = toExponential_0;
  package$js.toExponential_yrwdxr$ = toExponential_1;
  package$js.toExponential_j6vyb1$ = toExponential_2;
  package$js.tupleOf_o5fpdy$ = tupleOf_0;
  $$importsForInline$$['kotlin-js'] = _;
  package$js.JsPair_o5fpdy$ = JsPair;
  package$js.JsTuple1 = JsTuple1;
  package$js.JsTuple2 = JsTuple2;
  package$js.JsTuple3 = JsTuple3;
  package$js.JsTuple4 = JsTuple4;
  package$js.JsTuple5 = JsTuple5;
  package$js.emptyTuple = emptyTuple;
  package$js.tupleOf_mh5how$ = tupleOf;
  package$js.tupleOf_uzi532$ = tupleOf_1;
  package$js.tupleOf_2zz2ko$ = tupleOf_2;
  package$js.tupleOf_6yyj4c$ = tupleOf_3;
  package$js.JsoDsl = JsoDsl;
  package$js.PerformanceMeasureOptions = PerformanceMeasureOptions;
  package$js.resolve_br86m$ = resolve;
  package$js.PromiseResult_mh5how$ = PromiseResult;
  package$js.PromiseResult_a2c6wc$ = PromiseResult_0;
  package$js.toPromise_pd2trc$ = toPromise;
  package$js.get_knffog$ = get_12;
  package$js.set_vc5bpe$ = set;
  package$js.Record_kz82n3$ = Record;
  package$js.Record_a411ad$ = Record_0;
  var package$collections = package$js.collections || (package$js.collections = {});
  package$collections.SuspendableIterator = SuspendableIterator;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$js.fetch_dusfb3$ = fetch_0;
  package$js.fetch_jx0o1o$ = fetch_1;
  package$js.fetch_61zpoe$ = fetch_2;
  package$js.fetch_31m8m9$ = fetch_3;
  package$js.fetch_5mgx3h$ = fetch_4;
  package$js.fetch_cm0txm$ = fetch_5;
  package$js.get_MODE_g7idsg$ = get_MODE;
  package$js.get_PROD_g7idsg$ = get_PROD;
  package$js.get_DEV_g7idsg$ = get_DEV;
  package$js.jso_30y1fr$ = jso;
  package$js.jso_dajwzo$ = jso_0;
  var package$timers = package$js.timers || (package$js.timers = {});
  package$timers.setInterval_azx1yt$ = setInterval_0;
  package$timers.setTimeout_azx1yt$ = setTimeout_0;
  JsTuple2.prototype.component1 = JsTuple1.prototype.component1;
  JsTuple3.prototype.component2 = JsTuple2.prototype.component2;
  JsTuple3.prototype.component1 = JsTuple2.prototype.component1;
  JsTuple4.prototype.component3 = JsTuple3.prototype.component3;
  JsTuple4.prototype.component2 = JsTuple3.prototype.component2;
  JsTuple4.prototype.component1 = JsTuple3.prototype.component1;
  JsTuple5.prototype.component4 = JsTuple4.prototype.component4;
  JsTuple5.prototype.component3 = JsTuple4.prototype.component3;
  JsTuple5.prototype.component2 = JsTuple4.prototype.component2;
  JsTuple5.prototype.component1 = JsTuple4.prototype.component1;
  Kotlin.defineModule('kotlin-js', _);
  return _;
}));
