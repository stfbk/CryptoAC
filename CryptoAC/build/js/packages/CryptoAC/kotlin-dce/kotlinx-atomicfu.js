(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-atomicfu'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-atomicfu'.");
    }
    root['kotlinx-atomicfu'] = factory(typeof this['kotlinx-atomicfu'] === 'undefined' ? {} : this['kotlinx-atomicfu'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var Array_0 = Array;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var wrapFunction = Kotlin.wrapFunction;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  TraceBase$None.prototype = Object.create(TraceBase.prototype);
  TraceBase$None.prototype.constructor = TraceBase$None;
  function atomicArrayOfNulls(size) {
    return new AtomicArray(size);
  }
  function AtomicArray(size) {
    var array = Array_0(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = atomic_0(null);
    }
    this.array_0 = array;
  }
  Object.defineProperty(AtomicArray.prototype, 'atomicfu$size', {configurable: true, get: function () {
    return this.array_0.length;
  }});
  AtomicArray.prototype.atomicfu$get = function (index) {
    return this.array_0[index];
  };
  AtomicArray.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicArray', interfaces: []};
  var ATOMIC_REF_FACTORY;
  var ATOMIC_REF_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_INT_FACTORY;
  var ATOMIC_INT_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_LONG_FACTORY;
  var ATOMIC_LONG_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_BOOLEAN_FACTORY;
  var ATOMIC_BOOLEAN_FACTORY_BINARY_COMPATIBILITY;
  var ATOMIC_VALUE;
  var COMPARE_AND_SET;
  var GET_AND_SET;
  var GET_AND_INCREMENT;
  var GET_AND_INCREMENT_LONG;
  var GET_AND_DECREMENT;
  var GET_AND_DECREMENT_LONG;
  var INCREMENT_AND_GET;
  var INCREMENT_AND_GET_LONG;
  var DECREMENT_AND_GET;
  var DECREMENT_AND_GET_LONG;
  var GET_AND_ADD;
  var GET_AND_ADD_LONG;
  var ADD_AND_GET;
  var ADD_AND_GET_LONG;
  var ATOMIC_ARRAY_OF_NULLS;
  var ATOMIC_INT_ARRAY;
  var ATOMIC_LONG_ARRAY;
  var ATOMIC_BOOLEAN_ARRAY;
  var ATOMIC_REF_ARRAY;
  var ARRAY_SIZE;
  var ARRAY_ELEMENT_GET;
  var REENTRANT_LOCK;
  var TRACE_FACTORY_FUNCTION;
  var TRACE_BASE_CONSTRUCTOR;
  var TRACE_NAMED;
  var TRACE_FORMAT_CLASS;
  var TRACE_FORMAT_FORMAT_FUNCTION;
  var TRACE_APPEND_1;
  var TRACE_APPEND_2;
  var TRACE_APPEND_3;
  var TRACE_APPEND_4;
  function TraceBase() {
  }
  TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  TraceBase.prototype.invoke_t0s8mz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.TraceBase.invoke_t0s8mz$', function (event) {
    this.atomicfu$Trace$append$1(event());
  });
  function TraceBase$None() {
    TraceBase$None_instance = this;
    TraceBase.call(this);
  }
  TraceBase$None.$metadata$ = {kind: Kind_OBJECT, simpleName: 'None', interfaces: [TraceBase]};
  var TraceBase$None_instance = null;
  function TraceBase$None_getInstance() {
    if (TraceBase$None_instance === null) {
      new TraceBase$None();
    }
    return TraceBase$None_instance;
  }
  TraceBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'TraceBase', interfaces: []};
  function TraceFormat() {
  }
  TraceFormat.prototype.atomicfu$TraceFormat$format = function (index, event) {
    return index.toString() + ': ' + event.toString();
  };
  TraceFormat.$metadata$ = {kind: Kind_CLASS, simpleName: 'TraceFormat', interfaces: []};
  function atomic(initial, trace) {
    if (trace === void 0)
      trace = TraceBase$None_getInstance();
    return new AtomicRef(initial);
  }
  function atomic_0(initial) {
    return atomic(initial, TraceBase$None_getInstance());
  }
  function atomic_1(initial, trace) {
    if (trace === void 0)
      trace = TraceBase$None_getInstance();
    return new AtomicInt(initial);
  }
  function atomic_2(initial) {
    return atomic_1(initial, TraceBase$None_getInstance());
  }
  function atomic_3(initial, trace) {
    if (trace === void 0)
      trace = TraceBase$None_getInstance();
    return new AtomicLong(initial);
  }
  function atomic_4(initial) {
    return atomic_3(initial, TraceBase$None_getInstance());
  }
  function atomic_5(initial, trace) {
    if (trace === void 0)
      trace = TraceBase$None_getInstance();
    return new AtomicBoolean(initial);
  }
  function atomic_6(initial) {
    return atomic_5(initial, TraceBase$None_getInstance());
  }
  function AtomicRef(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicRef.prototype.getValue_n5byny$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicRef.getValue_n5byny$', function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  });
  AtomicRef.prototype.setValue_sq4zib$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicRef.setValue_sq4zib$', function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicRef.prototype.lazySet_11rb$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicRef.lazySet_11rb$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (this.kotlinx$atomicfu$value !== expect)
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this.kotlinx$atomicfu$value);
  };
  AtomicRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicRef', interfaces: []};
  function AtomicBoolean(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicBoolean.prototype.getValue_n5byny$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicBoolean.getValue_n5byny$', function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  });
  AtomicBoolean.prototype.setValue_t08ssb$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicBoolean.setValue_t08ssb$', function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicBoolean.prototype.lazySet_6taknv$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicBoolean.lazySet_6taknv$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (this.kotlinx$atomicfu$value !== expect)
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  AtomicBoolean.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicBoolean', interfaces: []};
  function AtomicInt(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicInt.prototype.getValue_n5byny$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.getValue_n5byny$', function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  });
  AtomicInt.prototype.setValue_4vfhis$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.setValue_4vfhis$', function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicInt.prototype.lazySet_za3lpa$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.lazySet_za3lpa$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (this.kotlinx$atomicfu$value !== expect)
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$ + 1 | 0, tmp$;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$ - 1 | 0, tmp$;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + 1 | 0, this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value - 1 | 0, this.kotlinx$atomicfu$value;
  };
  AtomicInt.prototype.plusAssign_za3lpa$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.plusAssign_za3lpa$', function (delta) {
    this.atomicfu$getAndAdd(delta);
  });
  AtomicInt.prototype.minusAssign_za3lpa$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicInt.minusAssign_za3lpa$', function (delta) {
    this.atomicfu$getAndAdd(-delta | 0);
  });
  AtomicInt.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  AtomicInt.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicInt', interfaces: []};
  function AtomicLong(value) {
    this.kotlinx$atomicfu$value = value;
  }
  AtomicLong.prototype.getValue_n5byny$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.getValue_n5byny$', function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  });
  AtomicLong.prototype.setValue_9021kx$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.setValue_9021kx$', function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicLong.prototype.lazySet_s8cxhz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.lazySet_s8cxhz$', function (value) {
    this.kotlinx$atomicfu$value = value;
  });
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!equals(this.kotlinx$atomicfu$value, expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$.inc(), tmp$;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp$;
    return tmp$ = this.kotlinx$atomicfu$value, this.kotlinx$atomicfu$value = tmp$.dec(), tmp$;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.add(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.add(delta);
    return this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.inc(), this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    return this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.dec(), this.kotlinx$atomicfu$value;
  };
  AtomicLong.prototype.plusAssign_s8cxhz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.plusAssign_s8cxhz$', function (delta) {
    this.atomicfu$getAndAdd$long(delta);
  });
  AtomicLong.prototype.minusAssign_s8cxhz$ = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.AtomicLong.minusAssign_s8cxhz$', function (delta) {
    this.atomicfu$getAndAdd$long(delta.unaryMinus());
  });
  AtomicLong.prototype.toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  AtomicLong.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicLong', interfaces: []};
  var traceFormatDefault;
  var Lock;
  function ReentrantLock() {
  }
  ReentrantLock.prototype.lock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.lock', function () {
  });
  ReentrantLock.prototype.tryLock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.tryLock', function () {
    return true;
  });
  ReentrantLock.prototype.unlock = defineInlineFunction('kotlinx-atomicfu.kotlinx.atomicfu.locks.ReentrantLock.unlock', function () {
  });
  ReentrantLock.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReentrantLock', interfaces: []};
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$atomicfu = package$kotlinx.atomicfu || (package$kotlinx.atomicfu = {});
  package$atomicfu.atomicfu$AtomicRefArray$ofNulls = atomicArrayOfNulls;
  package$atomicfu.atomicfu$AtomicRefArray$ref = AtomicArray;
  Object.defineProperty(TraceBase, 'None', {get: TraceBase$None_getInstance});
  package$atomicfu.atomicfu$TraceBase = TraceBase;
  package$atomicfu.atomicfu$TraceFormat = TraceFormat;
  package$atomicfu.atomic$ref$ = atomic;
  package$atomicfu.atomic$ref$1 = atomic_0;
  package$atomicfu.atomic$int$ = atomic_1;
  package$atomicfu.atomic$int$1 = atomic_2;
  package$atomicfu.atomic$long$ = atomic_3;
  package$atomicfu.atomic$long$1 = atomic_4;
  package$atomicfu.atomic$boolean$ = atomic_5;
  package$atomicfu.atomic$boolean$1 = atomic_6;
  package$atomicfu.AtomicRef = AtomicRef;
  package$atomicfu.AtomicBoolean = AtomicBoolean;
  package$atomicfu.AtomicInt = AtomicInt;
  package$atomicfu.AtomicLong = AtomicLong;
  var package$locks = package$atomicfu.locks || (package$atomicfu.locks = {});
  package$locks.ReentrantLock = ReentrantLock;
  ATOMIC_REF_FACTORY = 'atomic$ref$';
  ATOMIC_REF_FACTORY_BINARY_COMPATIBILITY = 'atomic$ref$1';
  ATOMIC_INT_FACTORY = 'atomic$int$';
  ATOMIC_INT_FACTORY_BINARY_COMPATIBILITY = 'atomic$int$1';
  ATOMIC_LONG_FACTORY = 'atomic$long$';
  ATOMIC_LONG_FACTORY_BINARY_COMPATIBILITY = 'atomic$long$1';
  ATOMIC_BOOLEAN_FACTORY = 'atomic$boolean$';
  ATOMIC_BOOLEAN_FACTORY_BINARY_COMPATIBILITY = 'atomic$boolean$1';
  ATOMIC_VALUE = 'kotlinx$atomicfu$value';
  COMPARE_AND_SET = 'atomicfu$compareAndSet';
  GET_AND_SET = 'atomicfu$getAndSet';
  GET_AND_INCREMENT = 'atomicfu$getAndIncrement';
  GET_AND_INCREMENT_LONG = 'atomicfu$getAndIncrement$long';
  GET_AND_DECREMENT = 'atomicfu$getAndDecrement';
  GET_AND_DECREMENT_LONG = 'atomicfu$getAndDecrement$long';
  INCREMENT_AND_GET = 'atomicfu$incrementAndGet';
  INCREMENT_AND_GET_LONG = 'atomicfu$incrementAndGet$long';
  DECREMENT_AND_GET = 'atomicfu$decrementAndGet';
  DECREMENT_AND_GET_LONG = 'atomicfu$decrementAndGet$long';
  GET_AND_ADD = 'atomicfu$getAndAdd';
  GET_AND_ADD_LONG = 'atomicfu$getAndAdd$long';
  ADD_AND_GET = 'atomicfu$addAndGet';
  ADD_AND_GET_LONG = 'atomicfu$addAndGet$long';
  ATOMIC_ARRAY_OF_NULLS = 'atomicfu$AtomicRefArray$ofNulls';
  ATOMIC_INT_ARRAY = 'atomicfu$AtomicIntArray$int';
  ATOMIC_LONG_ARRAY = 'atomicfu$AtomicLongArray$long';
  ATOMIC_BOOLEAN_ARRAY = 'atomicfu$AtomicBooleanArray$boolean';
  ATOMIC_REF_ARRAY = 'atomicfu$AtomicRefArray$ref';
  ARRAY_SIZE = 'atomicfu$size';
  ARRAY_ELEMENT_GET = 'atomicfu$get';
  REENTRANT_LOCK = 'atomicfu$reentrantLock';
  TRACE_FACTORY_FUNCTION = 'atomicfu$Trace';
  TRACE_BASE_CONSTRUCTOR = 'atomicfu$TraceBase';
  TRACE_NAMED = 'atomicfu$Trace$named';
  TRACE_FORMAT_CLASS = 'atomicfu$TraceFormat';
  TRACE_FORMAT_FORMAT_FUNCTION = 'atomicfu$TraceFormat$format';
  TRACE_APPEND_1 = 'atomicfu$Trace$append$1';
  TRACE_APPEND_2 = 'atomicfu$Trace$append$2';
  TRACE_APPEND_3 = 'atomicfu$Trace$append$3';
  TRACE_APPEND_4 = 'atomicfu$Trace$append$4';
  traceFormatDefault = new TraceFormat();
  Lock = new ReentrantLock();
  return _;
}));

//# sourceMappingURL=kotlinx-atomicfu.js.map
