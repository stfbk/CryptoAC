(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module '88b0986a7186d029-atomicfu-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to '88b0986a7186d029-atomicfu-js-ir'.");
    }
    root['88b0986a7186d029-atomicfu-js-ir'] = factory(typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined' ? {} : this['88b0986a7186d029-atomicfu-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.sa;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var classMeta = kotlin_kotlin.$_$.k9;
  var toString = kotlin_kotlin.$_$.jf;
  //endregion
  //region block: pre-declaration
  setMetadataFor(atomicfu$TraceBase, 'TraceBase', classMeta);
  setMetadataFor(None, 'None', objectMeta, atomicfu$TraceBase);
  setMetadataFor(AtomicRef, 'AtomicRef', classMeta);
  setMetadataFor(AtomicBoolean, 'AtomicBoolean', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor(AtomicLong, 'AtomicLong', classMeta);
  //endregion
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$1 = function (event) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$2 = function (event1, event2) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  function AtomicRef(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicRef).ti = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicRef).ui = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicRef).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicRef).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicRef).toString = function () {
    return toString(this.kotlinx$atomicfu$value);
  };
  function atomic$ref$1(initial) {
    return atomic$ref$(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicBoolean).vi = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicBoolean).ui = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicBoolean).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicBoolean).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicBoolean).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$boolean$1(initial) {
    return atomic$boolean$(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicInt).wi = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicInt).ui = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicInt).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicInt).atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1 + 1 | 0;
    return tmp1;
  };
  protoOf(AtomicInt).atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1 - 1 | 0;
    return tmp1;
  };
  protoOf(AtomicInt).atomicfu$getAndAdd = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  };
  protoOf(AtomicInt).atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + 1 | 0;
    return tmp0_this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value - 1 | 0;
    return tmp0_this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$int$1(initial) {
    return atomic$int$(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicLong).xi = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicLong).ui = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).atomicfu$compareAndSet = function (expect, update) {
    if (!this.kotlinx$atomicfu$value.equals(expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicLong).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicLong).atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1.jh();
    return tmp1;
  };
  protoOf(AtomicLong).atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1.kh();
    return tmp1;
  };
  protoOf(AtomicLong).atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.m6(delta);
    return oldValue;
  };
  protoOf(AtomicLong).atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.m6(delta);
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.jh();
    return tmp0_this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.kh();
    return tmp0_this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$long$1(initial) {
    return atomic$long$(initial, None_getInstance());
  }
  function atomic$ref$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicRef(initial);
  }
  function atomic$boolean$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicBoolean(initial);
  }
  function atomic$int$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicInt(initial);
  }
  function atomic$long$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicLong(initial);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomic$boolean$1;
  _.$_$.b = atomic$long$1;
  _.$_$.c = atomic$ref$1;
  _.$_$.d = atomic$int$1;
  //endregion
  return _;
}));

//# sourceMappingURL=88b0986a7186d029-atomicfu-js-ir.js.map
