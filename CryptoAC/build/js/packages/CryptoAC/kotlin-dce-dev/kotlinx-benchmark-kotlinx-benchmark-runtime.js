(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-benchmark-kotlinx-benchmark-runtime'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-benchmark-kotlinx-benchmark-runtime'.");
    }root['kotlinx-benchmark-kotlinx-benchmark-runtime'] = factory(typeof this['kotlinx-benchmark-kotlinx-benchmark-runtime'] === 'undefined' ? {} : this['kotlinx-benchmark-kotlinx-benchmark-runtime'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var equals = Kotlin.equals;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var println_0 = Kotlin.kotlin.io.println;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var getCallableRef = Kotlin.getCallableRef;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_raq4np$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var Math_0 = Math;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var L1 = Kotlin.Long.ONE;
  var L1000 = Kotlin.Long.fromInt(1000);
  var L1000000 = Kotlin.Long.fromInt(1000000);
  var L1000000000 = Kotlin.Long.fromInt(1000000000);
  var L60000000000 = new Kotlin.Long(-129542144, 13);
  var L0 = Kotlin.Long.ZERO;
  var toBoxedChar = Kotlin.toBoxedChar;
  var toCharArray = Kotlin.kotlin.collections.toCharArray_rr68x$;
  var concatToString = Kotlin.kotlin.text.concatToString_355ntz$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var numberToInt = Kotlin.numberToInt;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_bvy38s$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var sortedArray = Kotlin.kotlin.collections.sortedArray_bvy38s$;
  var single = Kotlin.kotlin.collections.single_2p1efm$;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_j4ogox$;
  var toString = Kotlin.toString;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var List = Kotlin.kotlin.collections.List;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_tmsbgo$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
  var drop_0 = Kotlin.kotlin.collections.drop_8ujjk8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var Annotation = Kotlin.kotlin.Annotation;
  var toList = Kotlin.kotlin.text.toList_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var toByte = Kotlin.toByte;
  var toByteArray = Kotlin.kotlin.collections.toByteArray_kdx1v$;
  BenchmarkProgress$FinishStatus.prototype = Object.create(Enum.prototype);
  BenchmarkProgress$FinishStatus.prototype.constructor = BenchmarkProgress$FinishStatus;
  IntelliJBenchmarkProgress.prototype = Object.create(BenchmarkProgress.prototype);
  IntelliJBenchmarkProgress.prototype.constructor = IntelliJBenchmarkProgress;
  ConsoleBenchmarkProgress.prototype = Object.create(BenchmarkProgress.prototype);
  ConsoleBenchmarkProgress.prototype.constructor = ConsoleBenchmarkProgress;
  TextBenchmarkReportFormatter.prototype = Object.create(BenchmarkReportFormatter.prototype);
  TextBenchmarkReportFormatter.prototype.constructor = TextBenchmarkReportFormatter;
  CsvBenchmarkReportFormatter.prototype = Object.create(BenchmarkReportFormatter.prototype);
  CsvBenchmarkReportFormatter.prototype.constructor = CsvBenchmarkReportFormatter;
  JsonBenchmarkReportFormatter.prototype = Object.create(BenchmarkReportFormatter.prototype);
  JsonBenchmarkReportFormatter.prototype.constructor = JsonBenchmarkReportFormatter;
  JsBenchmarkDescriptor.prototype = Object.create(BenchmarkDescriptor.prototype);
  JsBenchmarkDescriptor.prototype.constructor = JsBenchmarkDescriptor;
  JsExecutor.prototype = Object.create(SuiteExecutor.prototype);
  JsExecutor.prototype.constructor = JsExecutor;
  Scope.prototype = Object.create(Enum.prototype);
  Scope.prototype.constructor = Scope;
  Mode.prototype = Object.create(Enum.prototype);
  Mode.prototype.constructor = Mode;
  BenchmarkTimeUnit.prototype = Object.create(Enum.prototype);
  BenchmarkTimeUnit.prototype.constructor = BenchmarkTimeUnit;
  function BenchmarkDescriptor(name, suite, function_0) {
    this.name = name;
    this.suite = suite;
    this.function = function_0;
  }
  BenchmarkDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BenchmarkDescriptor',
    interfaces: []
  };
  function BenchmarkProgress() {
    BenchmarkProgress$Companion_getInstance();
  }
  function BenchmarkProgress$Companion() {
    BenchmarkProgress$Companion_instance = this;
  }
  BenchmarkProgress$Companion.prototype.create_61zpoe$ = function (format) {
    switch (format) {
      case 'xml':
        return new IntelliJBenchmarkProgress();
      case 'text':
        return new ConsoleBenchmarkProgress();
      default:throw UnsupportedOperationException_init('Format ' + format + ' is not supported.');
    }
  };
  BenchmarkProgress$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BenchmarkProgress$Companion_instance = null;
  function BenchmarkProgress$Companion_getInstance() {
    if (BenchmarkProgress$Companion_instance === null) {
      new BenchmarkProgress$Companion();
    }return BenchmarkProgress$Companion_instance;
  }
  function BenchmarkProgress$FinishStatus(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BenchmarkProgress$FinishStatus_initFields() {
    BenchmarkProgress$FinishStatus_initFields = function () {
    };
    BenchmarkProgress$FinishStatus$Success_instance = new BenchmarkProgress$FinishStatus('Success', 0);
    BenchmarkProgress$FinishStatus$Failure_instance = new BenchmarkProgress$FinishStatus('Failure', 1);
  }
  var BenchmarkProgress$FinishStatus$Success_instance;
  function BenchmarkProgress$FinishStatus$Success_getInstance() {
    BenchmarkProgress$FinishStatus_initFields();
    return BenchmarkProgress$FinishStatus$Success_instance;
  }
  var BenchmarkProgress$FinishStatus$Failure_instance;
  function BenchmarkProgress$FinishStatus$Failure_getInstance() {
    BenchmarkProgress$FinishStatus_initFields();
    return BenchmarkProgress$FinishStatus$Failure_instance;
  }
  BenchmarkProgress$FinishStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FinishStatus',
    interfaces: [Enum]
  };
  function BenchmarkProgress$FinishStatus$values() {
    return [BenchmarkProgress$FinishStatus$Success_getInstance(), BenchmarkProgress$FinishStatus$Failure_getInstance()];
  }
  BenchmarkProgress$FinishStatus.values = BenchmarkProgress$FinishStatus$values;
  function BenchmarkProgress$FinishStatus$valueOf(name) {
    switch (name) {
      case 'Success':
        return BenchmarkProgress$FinishStatus$Success_getInstance();
      case 'Failure':
        return BenchmarkProgress$FinishStatus$Failure_getInstance();
      default:throwISE('No enum constant kotlinx.benchmark.BenchmarkProgress.FinishStatus.' + name);
    }
  }
  BenchmarkProgress$FinishStatus.valueOf_61zpoe$ = BenchmarkProgress$FinishStatus$valueOf;
  BenchmarkProgress.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BenchmarkProgress',
    interfaces: []
  };
  function IntelliJBenchmarkProgress() {
    BenchmarkProgress.call(this);
    this.rootId_0 = '[root]';
    this.currentClass_0 = '';
    this.currentStatus_0 = BenchmarkProgress$FinishStatus$Success_getInstance();
    this.suiteStatus_0 = BenchmarkProgress$FinishStatus$Success_getInstance();
  }
  IntelliJBenchmarkProgress.prototype.startSuite_61zpoe$ = function (suite) {
    this.currentStatus_0 = BenchmarkProgress$FinishStatus$Success_getInstance();
    println(ijSuiteStart('', this.rootId_0));
    println(ijSuiteStart(this.rootId_0, suite));
  };
  IntelliJBenchmarkProgress.prototype.endSuite_puj7f4$ = function (suite, summary) {
    if (!equals(this.currentClass_0, '')) {
      println(ijSuiteFinish(suite, this.currentClass_0, this.currentStatus_0));
    }println(ijLogOutput(this.rootId_0, suite, suite + ' summary:' + '\n' + summary + '\n'));
    println(ijSuiteFinish(this.rootId_0, suite, this.suiteStatus_0));
    println(ijSuiteFinish('', this.rootId_0, this.suiteStatus_0));
  };
  IntelliJBenchmarkProgress.prototype.startBenchmark_puj7f4$ = function (suite, benchmark) {
    var methodName = substringAfterLast(benchmark, 46);
    var className = substringBeforeLast(benchmark, 46);
    if (!equals(this.currentClass_0, className)) {
      if (!equals(this.currentClass_0, '')) {
        println(ijSuiteFinish(suite, this.currentClass_0, this.currentStatus_0));
      }this.currentStatus_0 = BenchmarkProgress$FinishStatus$Success_getInstance();
      println(ijSuiteStart(suite, className));
      this.currentClass_0 = className;
    }println(ijBenchmarkStart(this.currentClass_0, className, methodName));
    println(ijLogOutput(this.currentClass_0, benchmark, suite + ': ' + benchmark + '\n'));
  };
  IntelliJBenchmarkProgress.prototype.endBenchmark_e7ba0x$ = function (suite, benchmark, status, message) {
    println(ijLogOutput(this.currentClass_0, benchmark, message + '\n' + '\n'));
    println(ijBenchmarkFinish(this.currentClass_0, benchmark, status));
  };
  IntelliJBenchmarkProgress.prototype.endBenchmarkException_w74nik$ = function (suite, benchmark, error, stacktrace) {
    this.currentStatus_0 = BenchmarkProgress$FinishStatus$Failure_getInstance();
    this.suiteStatus_0 = BenchmarkProgress$FinishStatus$Failure_getInstance();
    println(ijBenchmarkFinishException(this.currentClass_0, benchmark, error, stacktrace));
  };
  IntelliJBenchmarkProgress.prototype.output_6hosri$ = function (suite, benchmark, message) {
    println(ijLogOutput(this.currentClass_0, benchmark, message + '\n'));
  };
  IntelliJBenchmarkProgress.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntelliJBenchmarkProgress',
    interfaces: [BenchmarkProgress]
  };
  function ConsoleBenchmarkProgress() {
    BenchmarkProgress.call(this);
  }
  ConsoleBenchmarkProgress.prototype.startSuite_61zpoe$ = function (suite) {
  };
  ConsoleBenchmarkProgress.prototype.endSuite_puj7f4$ = function (suite, summary) {
    println_0();
    println(suite + ' summary:');
    println(summary);
  };
  ConsoleBenchmarkProgress.prototype.startBenchmark_puj7f4$ = function (suite, benchmark) {
    println_0();
    println('\u2026 ' + benchmark);
  };
  ConsoleBenchmarkProgress.prototype.endBenchmark_e7ba0x$ = function (suite, benchmark, status, message) {
    println('  ' + status + ': ' + message);
  };
  ConsoleBenchmarkProgress.prototype.endBenchmarkException_w74nik$ = function (suite, benchmark, error, stacktrace) {
    println('  EXCEPTION: ' + error);
    println(stacktrace);
  };
  ConsoleBenchmarkProgress.prototype.output_6hosri$ = function (suite, benchmark, message) {
    println(message);
  };
  ConsoleBenchmarkProgress.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConsoleBenchmarkProgress',
    interfaces: [BenchmarkProgress]
  };
  function BenchmarkReportFormatter() {
    BenchmarkReportFormatter$Companion_getInstance();
  }
  function BenchmarkReportFormatter$Companion() {
    BenchmarkReportFormatter$Companion_instance = this;
  }
  BenchmarkReportFormatter$Companion.prototype.create_61zpoe$ = function (format) {
    switch (format.toLowerCase()) {
      case 'json':
        return JsonBenchmarkReportFormatter_getInstance();
      case 'csv':
        return new CsvBenchmarkReportFormatter(',');
      case 'scsv':
        return new CsvBenchmarkReportFormatter(';');
      case 'text':
        return TextBenchmarkReportFormatter_getInstance();
      default:throw UnsupportedOperationException_init('Report format ' + format + ' is not supported.');
    }
  };
  BenchmarkReportFormatter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BenchmarkReportFormatter$Companion_instance = null;
  function BenchmarkReportFormatter$Companion_getInstance() {
    if (BenchmarkReportFormatter$Companion_instance === null) {
      new BenchmarkReportFormatter$Companion();
    }return BenchmarkReportFormatter$Companion_instance;
  }
  BenchmarkReportFormatter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BenchmarkReportFormatter',
    interfaces: []
  };
  function TextBenchmarkReportFormatter() {
    TextBenchmarkReportFormatter_instance = this;
    BenchmarkReportFormatter.call(this);
    this.padding_0 = 2;
  }
  function TextBenchmarkReportFormatter$format$columnLength(closure$results) {
    return function (column, selector) {
      var tmp$ = column.length;
      var iterator = closure$results.iterator();
      if (!iterator.hasNext())
        throw NoSuchElementException_init();
      var maxValue = selector(iterator.next()).length;
      while (iterator.hasNext()) {
        var v = selector(iterator.next()).length;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxValue = v;
        }}
      var b = maxValue;
      return Math_0.max(tmp$, b);
    };
  }
  function TextBenchmarkReportFormatter$format$lambda(closure$shortNames) {
    return function (it) {
      return ensureNotNull(closure$shortNames.get_11rb$(it.benchmark.name));
    };
  }
  function TextBenchmarkReportFormatter$format$lambda_0(it) {
    return toText_0(it.config.mode);
  }
  function TextBenchmarkReportFormatter$format$lambda_1(it) {
    return it.values.length.toString();
  }
  function TextBenchmarkReportFormatter$format$lambda_2(it) {
    return format(it.score, 3, false);
  }
  function TextBenchmarkReportFormatter$format$lambda_3(it) {
    return format(it.error, 3, false);
  }
  function TextBenchmarkReportFormatter$format$lambda_4(it) {
    return unitText(it.config.mode, it.config.outputTimeUnit);
  }
  TextBenchmarkReportFormatter.prototype.format_6kr8el$ = function (results) {
    var columnLength = TextBenchmarkReportFormatter$format$columnLength(results);
    var destination = ArrayList_init_0(collectionSizeOrDefault(results, 10));
    var tmp$;
    tmp$ = results.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.benchmark.name);
    }
    var shortNames = this.denseBenchmarkNames_0(destination);
    var nameLength = columnLength('Benchmark', TextBenchmarkReportFormatter$format$lambda(shortNames));
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = results.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.params.keys;
      addAll(destination_0, list);
    }
    var paramNames = toSet(destination_0);
    var result = LinkedHashMap_init(coerceAtLeast(mapCapacity(collectionSizeOrDefault(paramNames, 10)), 16));
    var tmp$_1;
    tmp$_1 = paramNames.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var tmp$_2 = result.put_xwzc9p$;
      var tmp$_3 = element_0.length + 2 | 0;
      var destination_1 = ArrayList_init();
      var tmp$_4;
      tmp$_4 = results.iterator();
      while (tmp$_4.hasNext()) {
        var element_1 = tmp$_4.next();
        var tmp$_0_0;
        if ((tmp$_0_0 = element_1.params.get_11rb$(element_0)) != null) {
          destination_1.add_11rb$(tmp$_0_0);
        }}
      var iterator = destination_1.iterator();
      if (!iterator.hasNext())
        throw NoSuchElementException_init();
      var maxValue = iterator.next().length;
      while (iterator.hasNext()) {
        var v = iterator.next().length;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxValue = v;
        }}
      var b = maxValue;
      tmp$_2.call(result, element_0, Math_0.max(tmp$_3, b) + 2 | 0);
    }
    var paramLengths = result;
    var modeLength = columnLength('Mode', TextBenchmarkReportFormatter$format$lambda_0) + 2 | 0;
    var samplesLength = columnLength('Cnt', TextBenchmarkReportFormatter$format$lambda_1) + 2 | 0;
    var scopeLength = columnLength('Score', TextBenchmarkReportFormatter$format$lambda_2) + 2 | 0;
    var errorLength = columnLength('Error', TextBenchmarkReportFormatter$format$lambda_3) + 2 - 1 | 0;
    var unitsLength = columnLength('Units', TextBenchmarkReportFormatter$format$lambda_4) + 2 | 0;
    var $receiver = StringBuilder_init();
    this.appendPaddedAfter_0($receiver, 'Benchmark', nameLength);
    var tmp$_5;
    tmp$_5 = paramNames.iterator();
    while (tmp$_5.hasNext()) {
      var element_2 = tmp$_5.next();
      this.appendPaddedBefore_0($receiver, '(' + element_2 + ')', ensureNotNull(paramLengths.get_11rb$(element_2)));
    }
    this.appendPaddedBefore_0($receiver, 'Mode', modeLength);
    this.appendPaddedBefore_0($receiver, 'Cnt', samplesLength);
    this.appendPaddedBefore_0($receiver, 'Score', scopeLength);
    $receiver.append_pdl1vj$('  ');
    this.appendPaddedBefore_0($receiver, 'Error', errorLength);
    this.appendPaddedBefore_0($receiver, 'Units', unitsLength);
    $receiver.append_s8itvh$(10);
    var tmp$_6;
    tmp$_6 = results.iterator();
    while (tmp$_6.hasNext()) {
      var element_3 = tmp$_6.next();
      var tmp$_7, tmp$_8;
      this.appendPaddedAfter_0($receiver, ensureNotNull(shortNames.get_11rb$(element_3.benchmark.name)), nameLength);
      var tmp$_9;
      tmp$_9 = paramNames.iterator();
      while (tmp$_9.hasNext()) {
        var element_4 = tmp$_9.next();
        var tmp$_10;
        this.appendPaddedBefore_0($receiver, (tmp$_10 = element_3.params.get_11rb$(element_4)) != null ? tmp$_10 : 'N/A', ensureNotNull(paramLengths.get_11rb$(element_4)));
      }
      this.appendPaddedBefore_0($receiver, toText_0(element_3.config.mode), modeLength);
      var $receiver_0 = element_3.values.length;
      this.appendPaddedBefore_0($receiver, (tmp$_8 = (tmp$_7 = $receiver_0 > 1 ? $receiver_0 : null) != null ? tmp$_7.toString() : null) != null ? tmp$_8 : ' ', samplesLength);
      this.appendPaddedBefore_0($receiver, format(element_3.score, 3, false), scopeLength);
      if (isNaNOrZero(element_3.error)) {
        $receiver.append_pdl1vj$('  ');
        this.appendPaddedBefore_0($receiver, '', errorLength);
      } else {
        $receiver.append_pdl1vj$(' \xB1');
        this.appendPaddedBefore_0($receiver, format(element_3.error, 3, false), errorLength);
      }
      this.appendPaddedBefore_0($receiver, unitText(element_3.config.mode, element_3.config.outputTimeUnit), unitsLength);
      $receiver.append_s8itvh$(10);
    }
    return $receiver.toString();
  };
  TextBenchmarkReportFormatter.prototype.appendSpace_0 = function ($receiver, l) {
    return $receiver.append_pdl1vj$(repeat(' ', l));
  };
  TextBenchmarkReportFormatter.prototype.appendPaddedBefore_0 = function ($receiver, value, l) {
    return this.appendSpace_0($receiver, l - value.length | 0).append_pdl1vj$(value);
  };
  TextBenchmarkReportFormatter.prototype.appendPaddedAfter_0 = function ($receiver, value, l) {
    return this.appendSpace_0($receiver.append_pdl1vj$(value), l - value.length | 0);
  };
  function TextBenchmarkReportFormatter$denseBenchmarkNames$lambda$lambda(it) {
    return it.length > 0 ? it + '.' : '';
  }
  TextBenchmarkReportFormatter.prototype.denseBenchmarkNames_0 = function (src) {
    if (src.isEmpty())
      return emptyMap();
    var first = {v: true};
    var prefixCut = {v: false};
    var tmp$;
    var accumulator = emptyList();
    tmp$ = src.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var prefix = accumulator;
      var operation$result;
      var names = split(element, ['.']);
      if (first.v) {
        first.v = false;
        var tmp$_0;
        var list = ArrayList_init();
        tmp$_0 = names.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          if (!equals(item.toLowerCase(), item))
            break;
          list.add_11rb$(item);
        }
        operation$result = list;
      } else {
        var $receiver = zip(prefix, names);
        var tmp$_1;
        var list_0 = ArrayList_init();
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var item_0 = tmp$_1.next();
          var p = item_0.component1()
          , n = item_0.component2();
          var tmp$_2 = equals(p, n);
          if (tmp$_2) {
            tmp$_2 = equals(n.toLowerCase(), n);
          }if (!tmp$_2)
            break;
          list_0.add_11rb$(item_0);
        }
        var common = list_0;
        if (prefix.size !== common.size)
          prefixCut.v = true;
        operation$result = take(prefix, common.size);
      }
      accumulator = operation$result;
    }
    var $receiver_0 = accumulator;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_3;
    tmp$_3 = $receiver_0.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      destination.add_11rb$(prefixCut.v ? String.fromCharCode(item_1.charCodeAt(0)) : '');
    }
    var prefix_0 = destination;
    var result = LinkedHashMap_init(coerceAtLeast(mapCapacity(collectionSizeOrDefault(src, 10)), 16));
    var tmp$_4;
    tmp$_4 = src.iterator();
    while (tmp$_4.hasNext()) {
      var element_0 = tmp$_4.next();
      var tmp$_5 = result.put_xwzc9p$;
      var names_0 = plus(prefix_0, drop(split(element_0, ['.']), prefix_0.size));
      tmp$_5.call(result, element_0, removeSuffix(joinToString(names_0, '', void 0, void 0, void 0, void 0, TextBenchmarkReportFormatter$denseBenchmarkNames$lambda$lambda), '.'));
    }
    return result;
  };
  TextBenchmarkReportFormatter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TextBenchmarkReportFormatter',
    interfaces: [BenchmarkReportFormatter]
  };
  var TextBenchmarkReportFormatter_instance = null;
  function TextBenchmarkReportFormatter_getInstance() {
    if (TextBenchmarkReportFormatter_instance === null) {
      new TextBenchmarkReportFormatter();
    }return TextBenchmarkReportFormatter_instance;
  }
  function CsvBenchmarkReportFormatter(delimiter) {
    BenchmarkReportFormatter.call(this);
    this.delimiter = delimiter;
  }
  CsvBenchmarkReportFormatter.prototype.format_6kr8el$ = function (results) {
    var $receiver = StringBuilder_init();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = results.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.params.keys;
      addAll(destination, list);
    }
    var allParams = toSet(destination);
    this.appendHeader_0($receiver, allParams);
    var tmp$_0;
    tmp$_0 = results.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      this.appendResult_0($receiver, allParams, element_0);
    }
    return $receiver.toString();
  };
  CsvBenchmarkReportFormatter.prototype.appendHeader_0 = function ($receiver, params) {
    this.appendEscaped_0($receiver, 'Benchmark').append_pdl1vj$(this.delimiter);
    this.appendEscaped_0($receiver, 'Mode').append_pdl1vj$(this.delimiter);
    this.appendEscaped_0($receiver, 'Threads').append_pdl1vj$(this.delimiter);
    this.appendEscaped_0($receiver, 'Samples').append_pdl1vj$(this.delimiter);
    this.appendEscaped_0($receiver, 'Score').append_pdl1vj$(this.delimiter);
    this.appendEscaped_0($receiver, 'Score Error (99.9%)').append_pdl1vj$(this.delimiter);
    this.appendEscaped_0($receiver, 'Unit');
    var tmp$;
    tmp$ = params.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.append_pdl1vj$(this.delimiter);
      this.appendEscaped_0($receiver, 'Param: ' + element);
    }
    $receiver.append_pdl1vj$('\r\n');
  };
  CsvBenchmarkReportFormatter.prototype.appendResult_0 = function ($receiver, params, result) {
    this.appendEscaped_0($receiver, result.benchmark.name).append_pdl1vj$(this.delimiter);
    this.appendEscaped_0($receiver, toText_0(result.config.mode)).append_pdl1vj$(this.delimiter);
    $receiver.append_s8jyv4$(1).append_pdl1vj$(this.delimiter);
    $receiver.append_s8jyv4$(result.values.length).append_pdl1vj$(this.delimiter);
    $receiver.append_pdl1vj$(format(result.score, 6, false)).append_pdl1vj$(this.delimiter);
    $receiver.append_pdl1vj$(format(result.error, 6, false)).append_pdl1vj$(this.delimiter);
    this.appendEscaped_0($receiver, unitText(result.config.mode, result.config.outputTimeUnit));
    var tmp$;
    tmp$ = params.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      $receiver.append_pdl1vj$(this.delimiter);
      if ((tmp$_0 = result.params.get_11rb$(element)) != null) {
        this.appendEscaped_0($receiver, tmp$_0);
      }}
    $receiver.append_pdl1vj$('\r\n');
  };
  CsvBenchmarkReportFormatter.prototype.appendEscaped_0 = function ($receiver, value) {
    return $receiver.append_pdl1vj$('"').append_pdl1vj$(replace(value, '"', '""')).append_pdl1vj$('"');
  };
  CsvBenchmarkReportFormatter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CsvBenchmarkReportFormatter',
    interfaces: [BenchmarkReportFormatter]
  };
  function JsonBenchmarkReportFormatter() {
    JsonBenchmarkReportFormatter_instance = this;
    BenchmarkReportFormatter.call(this);
  }
  JsonBenchmarkReportFormatter.prototype.format_6kr8el$ = function (results) {
    return joinToString(results, ',', '[', '\n]', void 0, void 0, getCallableRef('format', function ($receiver, p1) {
      return $receiver.format_0(p1);
    }.bind(null, this)));
  };
  function JsonBenchmarkReportFormatter$format$lambda(it) {
    return '"' + it.key + '"' + ' : ' + '"' + it.value + '"';
  }
  function JsonBenchmarkReportFormatter$format$lambda_0(it) {
    return '"' + format(it.key, 2) + '"' + ' : ' + it.value;
  }
  JsonBenchmarkReportFormatter.prototype.format_0 = function (result) {
    return '\n' + '  {' + '\n' + '    ' + '"' + 'benchmark' + '"' + ' : ' + '"' + result.benchmark.name + '"' + ',' + '\n' + '    ' + '"' + 'mode' + '"' + ' : ' + '"' + toText_0(result.config.mode) + '"' + ',' + '\n' + '    ' + '"' + 'warmupIterations' + '"' + ' : ' + result.config.warmups + ',' + '\n' + '    ' + '"' + 'warmupTime' + '"' + ' : ' + '"' + result.config.iterationTime.toString() + ' ' + toText(result.config.iterationTimeUnit) + '"' + ',' + '\n' + '    ' + '"' + 'measurementIterations' + '"' + ' : ' + result.config.iterations + ',' + '\n' + '    ' + '"' + 'measurementTime' + '"' + ' : ' + '"' + result.config.iterationTime.toString() + ' ' + toText(result.config.iterationTimeUnit) + '"' + ',' + '\n' + '    ' + '"' + 'params' + '"' + ' : {' + '\n' + '          ' + joinToString(result.params.entries, ',\n          ', void 0, void 0, void 0, void 0, JsonBenchmarkReportFormatter$format$lambda) + '\n' + '    },' + '\n' + '    ' + '"' + 'primaryMetric' + '"' + ' : {' + '\n' + '       ' + '"' + 'score' + '"' + ': ' + result.score + ',' + '\n' + '       ' + '"' + 'scoreError' + '"' + ': ' + result.error + ',' + '\n' + '       ' + '"' + 'scoreConfidence' + '"' + ' : [' + '\n' + '          ' + result.confidence.first + ',' + '\n' + '          ' + result.confidence.second + '\n' + '       ],' + '\n' + '       ' + '"' + 'scorePercentiles' + '"' + ' : {' + '\n' + '          ' + joinToString(result.percentiles.entries, ',\n          ', void 0, void 0, void 0, void 0, JsonBenchmarkReportFormatter$format$lambda_0) + '\n' + '       },' + '\n' + '       ' + '"' + 'scoreUnit' + '"' + ' : ' + '"' + unitText(result.config.mode, result.config.outputTimeUnit) + '"' + ',' + '\n' + '       ' + '"' + 'rawData' + '"' + ' : [' + '\n' + '           ' + joinToString_0(result.values, ',\n             ', '[\n             ', '\n           ]') + '\n' + '       ]' + '\n' + '    },' + '\n' + '    ' + '"' + 'secondaryMetrics' + '"' + ' : {' + '\n' + '    }' + '\n' + '  }';
  };
  JsonBenchmarkReportFormatter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonBenchmarkReportFormatter',
    interfaces: [BenchmarkReportFormatter]
  };
  var JsonBenchmarkReportFormatter_instance = null;
  function JsonBenchmarkReportFormatter_getInstance() {
    if (JsonBenchmarkReportFormatter_instance === null) {
      new JsonBenchmarkReportFormatter();
    }return JsonBenchmarkReportFormatter_instance;
  }
  function toText($receiver) {
    switch ($receiver.name) {
      case 'NANOSECONDS':
        return 'ns';
      case 'MICROSECONDS':
        return 'us';
      case 'MILLISECONDS':
        return 'ms';
      case 'SECONDS':
        return 'sec';
      case 'MINUTES':
        return 'min';
      default:throw UnsupportedOperationException_init($receiver.toString() + ' is not supported');
    }
  }
  function toText_0($receiver) {
    switch ($receiver.name) {
      case 'Throughput':
        return 'thrpt';
      case 'AverageTime':
        return 'avgt';
      default:throw UnsupportedOperationException_init($receiver.toString() + ' is not supported');
    }
  }
  function toMultiplier($receiver) {
    switch ($receiver.name) {
      case 'NANOSECONDS':
        return L1;
      case 'MICROSECONDS':
        return L1000;
      case 'MILLISECONDS':
        return L1000000;
      case 'SECONDS':
        return L1000000000;
      case 'MINUTES':
        return L60000000000;
      default:throw UnsupportedOperationException_init($receiver.toString() + ' is not supported');
    }
  }
  function toSecondsMultiplier($receiver) {
    switch ($receiver.name) {
      case 'NANOSECONDS':
        return 1.0 / 1000000000;
      case 'MICROSECONDS':
        return 1.0 / 1000000;
      case 'MILLISECONDS':
        return 1.0 / 1000;
      case 'SECONDS':
        return 1.0;
      case 'MINUTES':
        return 60.0;
      default:throw UnsupportedOperationException_init($receiver.toString() + ' is not supported');
    }
  }
  function BenchmarkConfiguration(runner, suite) {
    this.runner = runner;
    this.suite = suite;
  }
  Object.defineProperty(BenchmarkConfiguration.prototype, 'iterations', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.runner.iterations) != null ? tmp$ : this.suite.iterations;
    }
  });
  Object.defineProperty(BenchmarkConfiguration.prototype, 'warmups', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.runner.warmups) != null ? tmp$ : this.suite.warmups;
    }
  });
  Object.defineProperty(BenchmarkConfiguration.prototype, 'iterationTime', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.runner.iterationTime) != null ? tmp$ : this.suite.iterationTime.value;
    }
  });
  Object.defineProperty(BenchmarkConfiguration.prototype, 'iterationTimeUnit', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.runner.iterationTimeUnit) != null ? tmp$ : this.suite.iterationTime.timeUnit;
    }
  });
  Object.defineProperty(BenchmarkConfiguration.prototype, 'outputTimeUnit', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.runner.outputTimeUnit) != null ? tmp$ : this.suite.outputTimeUnit;
    }
  });
  Object.defineProperty(BenchmarkConfiguration.prototype, 'mode', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.runner.mode) != null ? tmp$ : this.suite.mode;
    }
  });
  BenchmarkConfiguration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BenchmarkConfiguration',
    interfaces: []
  };
  function ijSuiteStart(parent, id) {
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$('<ijLog>');
    $receiver.append_pdl1vj$("<event type='beforeSuite'>");
    $receiver.append_pdl1vj$("<test id='" + id + "' parentId='" + parent + "'>");
    $receiver.append_pdl1vj$("<descriptor name='" + id + "'/>");
    $receiver.append_pdl1vj$('<\/test>');
    $receiver.append_pdl1vj$('<\/event>');
    $receiver.append_pdl1vj$('<\/ijLog>');
    return $receiver.toString();
  }
  function ijSuiteFinish(parent, id, status, startTime, endTime) {
    if (startTime === void 0)
      startTime = L0;
    if (endTime === void 0)
      endTime = startTime;
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$('<ijLog>');
    $receiver.append_pdl1vj$("<event type='afterSuite'>");
    $receiver.append_pdl1vj$("<test id='" + id + "' parentId='" + parent + "'>");
    $receiver.append_pdl1vj$("<result resultType='" + status.toString().toUpperCase() + "' startTime='" + startTime.toString() + "' endTime='" + endTime.toString() + "'/>");
    $receiver.append_pdl1vj$('<\/test>');
    $receiver.append_pdl1vj$('<\/event>');
    $receiver.append_pdl1vj$('<\/ijLog>');
    return $receiver.toString();
  }
  function ijBenchmarkStart(parent, className, methodName) {
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$('<ijLog>');
    $receiver.append_pdl1vj$("<event type='beforeTest'>");
    $receiver.append_pdl1vj$("<test id='" + className + '.' + methodName + "' parentId='" + parent + "'>");
    $receiver.append_pdl1vj$("<descriptor name='" + methodName + "' className='" + className + "' />");
    $receiver.append_pdl1vj$('<\/test>');
    $receiver.append_pdl1vj$('<\/event>');
    $receiver.append_pdl1vj$('<\/ijLog>');
    return $receiver.toString();
  }
  function ijBenchmarkFinish(parent, id, status, startTime, endTime) {
    if (startTime === void 0)
      startTime = L0;
    if (endTime === void 0)
      endTime = startTime;
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$('<ijLog>');
    $receiver.append_pdl1vj$("<event type='afterTest'>");
    $receiver.append_pdl1vj$("<test id='" + id + "' parentId='" + parent + "'>");
    $receiver.append_pdl1vj$("<result resultType='" + status.toString().toUpperCase() + "' startTime='" + startTime.toString() + "' endTime='" + endTime.toString() + "'/>");
    $receiver.append_pdl1vj$('<\/test>');
    $receiver.append_pdl1vj$('<\/event>');
    $receiver.append_pdl1vj$('<\/ijLog>');
    return $receiver.toString();
  }
  function ijBenchmarkFinishException(parent, id, error, stacktrace, startTime, endTime) {
    if (startTime === void 0)
      startTime = L0;
    if (endTime === void 0)
      endTime = startTime;
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$('<ijLog>');
    $receiver.append_pdl1vj$("<event type='afterTest'>");
    $receiver.append_pdl1vj$("<test id='" + id + "' parentId='" + parent + "'>");
    $receiver.append_pdl1vj$("<result resultType='FAILURE' startTime='" + startTime.toString() + "' endTime='" + endTime.toString() + "'>");
    $receiver.append_pdl1vj$('<errorMsg>');
    $receiver.append_pdl1vj$('<![CDATA[' + encodeBase64(toByteArrayUtf8(error)) + ']]>');
    $receiver.append_pdl1vj$('<\/errorMsg>');
    $receiver.append_pdl1vj$('<stackTrace>');
    $receiver.append_pdl1vj$('<![CDATA[' + encodeBase64(toByteArrayUtf8(stacktrace)) + ']]>');
    $receiver.append_pdl1vj$('<\/stackTrace>');
    $receiver.append_pdl1vj$('<\/result>');
    $receiver.append_pdl1vj$('<\/test>');
    $receiver.append_pdl1vj$('<\/event>');
    $receiver.append_pdl1vj$('<\/ijLog>');
    return $receiver.toString();
  }
  function ijLogOutput(parent, id, info) {
    var $receiver = StringBuilder_init();
    $receiver.append_pdl1vj$('<ijLog>');
    $receiver.append_pdl1vj$("<event type='onOutput'>");
    $receiver.append_pdl1vj$("<test id='" + id + "' parentId='" + parent + "'>");
    $receiver.append_pdl1vj$("<event destination='StdOut'>");
    $receiver.append_pdl1vj$('<![CDATA[' + encodeBase64(toByteArrayUtf8(info)) + ']]>');
    $receiver.append_pdl1vj$('<\/event>');
    $receiver.append_pdl1vj$('<\/test>');
    $receiver.append_pdl1vj$('<\/event>');
    $receiver.append_pdl1vj$('<\/ijLog>');
    return $receiver.toString();
  }
  var BASE64_ALPHABET;
  var BASE64_MASK;
  var BASE64_PAD;
  function toBase64($receiver) {
    return BASE64_ALPHABET.charCodeAt($receiver);
  }
  function encodeBase64$getOrZero($receiver, index) {
    return index >= $receiver.length ? 0 : $receiver[index] & 255;
  }
  function encodeBase64($receiver) {
    var getOrZero = encodeBase64$getOrZero;
    var result = ArrayList_init_0((4 * $receiver.length | 0) / 3 | 0);
    var index = 0;
    while (index < $receiver.length) {
      var symbolsLeft = $receiver.length - index | 0;
      var padSize = symbolsLeft >= 3 ? 0 : ((3 - symbolsLeft | 0) * 8 | 0) / 6 | 0;
      var chunk = getOrZero($receiver, index) << 16 | getOrZero($receiver, index + 1 | 0) << 8 | getOrZero($receiver, index + 2 | 0);
      index = index + 3 | 0;
      for (var i = 3; i >= padSize; i--) {
        var char = chunk >> (6 * i | 0) & BASE64_MASK;
        result.add_11rb$(toBoxedChar(toBase64(char)));
      }
      for (var index_0 = 0; index_0 < padSize; index_0++) {
        result.add_11rb$(toBoxedChar(BASE64_PAD));
      }
    }
    return concatToString(toCharArray(result));
  }
  function ReportBenchmarkResult(config, benchmark, params, score, error, confidence, percentiles, values) {
    this.config = config;
    this.benchmark = benchmark;
    this.params = params;
    this.score = score;
    this.error = error;
    this.confidence = confidence;
    this.percentiles = percentiles;
    this.values = values;
  }
  ReportBenchmarkResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReportBenchmarkResult',
    interfaces: []
  };
  function ReportBenchmarksStatistics(values) {
    ReportBenchmarksStatistics$Companion_getInstance();
    this.values = sortedArray(values);
  }
  Object.defineProperty(ReportBenchmarksStatistics.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.values.length;
    }
  });
  ReportBenchmarksStatistics.prototype.valueAt_14dthe$ = function (quantile) {
    var tmp$;
    if (quantile < 0.0 || quantile > 1.0 || isNaN_0(quantile))
      throw IllegalArgumentException_init(quantile.toString() + ' is not in [0..1]');
    if (this.size === 0)
      return 0.0;
    var pos = quantile * (this.values.length + 1 | 0);
    var index = numberToInt(pos);
    if (index < 1)
      tmp$ = this.values[0];
    else if (index >= this.values.length)
      tmp$ = this.values[this.values.length - 1 | 0];
    else {
      var lower = this.values[index - 1 | 0];
      var upper = this.values[index];
      tmp$ = lower + (pos - Math_0.floor(pos)) * (upper - lower);
    }
    return tmp$;
  };
  ReportBenchmarksStatistics.prototype.median = function () {
    return this.valueAt_14dthe$(0.5);
  };
  ReportBenchmarksStatistics.prototype.min = function () {
    if (this.size === 0)
      return 0.0;
    else
      return this.values[0];
  };
  ReportBenchmarksStatistics.prototype.max = function () {
    if (this.size === 0)
      return 0.0;
    else
      return this.values[get_lastIndex(this.values)];
  };
  ReportBenchmarksStatistics.prototype.mean = function () {
    var $receiver = this.values;
    var tmp$;
    var sum = 0.0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      sum += element;
    }
    return sum / this.size;
  };
  ReportBenchmarksStatistics.prototype.standardDeviation = function () {
    if (this.size <= 1)
      return 0.0;
    var mean = this.mean();
    var $receiver = this.values;
    var tmp$;
    var sum = 0.0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var it = element - mean;
      sum += it * it;
    }
    var sum_0 = sum;
    var variance = sum_0 / get_lastIndex(this.values);
    return Math_0.sqrt(variance);
  };
  function ReportBenchmarksStatistics$Companion() {
    ReportBenchmarksStatistics$Companion_instance = this;
  }
  ReportBenchmarksStatistics$Companion.prototype.createResult_tjyrqp$ = function (benchmark, params, config, samples) {
    var statistics = new ReportBenchmarksStatistics(samples);
    var score = statistics.mean();
    var errorMargin = 1.96 * (statistics.standardDeviation() / Math_0.sqrt(samples.length));
    var $receiver = listOf([0.0, 0.25, 0.5, 0.75, 0.9, 0.99, 0.999, 0.9999, 1.0]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var pair = to(element * 100, statistics.valueAt_14dthe$(element));
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    var percentiles = destination;
    return new ReportBenchmarkResult(config, benchmark, params, score, errorMargin, to(score - errorMargin, score + errorMargin), percentiles, samples);
  };
  ReportBenchmarksStatistics$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ReportBenchmarksStatistics$Companion_instance = null;
  function ReportBenchmarksStatistics$Companion_getInstance() {
    if (ReportBenchmarksStatistics$Companion_instance === null) {
      new ReportBenchmarksStatistics$Companion();
    }return ReportBenchmarksStatistics$Companion_instance;
  }
  ReportBenchmarksStatistics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReportBenchmarksStatistics',
    interfaces: []
  };
  function formatSignificant($receiver, precision) {
    var x = Math_0.log10($receiver);
    var d = coerceAtLeast(precision - numberToInt(Math_0.ceil(x)) | 0, 0);
    return format($receiver, d);
  }
  var zeroThreshold;
  function isNaNOrZero($receiver) {
    return isNaN_0($receiver) || isApproximateZero($receiver);
  }
  function isApproximateZero($receiver) {
    return $receiver < zeroThreshold;
  }
  function nanosToText($receiver, mode, unit) {
    var tmp$;
    var value = nanosToSample($receiver, mode, unit);
    switch (mode.name) {
      case 'Throughput':
        tmp$ = formatSignificant(value, 6) + ' ops/' + toText(unit);
        break;
      case 'AverageTime':
        tmp$ = formatSignificant(value, 6) + ' ' + toText(unit) + '/op';
        break;
      default:throw UnsupportedOperationException_init(mode.toString() + ' is not supported');
    }
    return tmp$;
  }
  function unitText(mode, unit) {
    switch (mode.name) {
      case 'Throughput':
        return 'ops/' + toText(unit);
      case 'AverageTime':
        return toText(unit) + '/op';
      default:throw UnsupportedOperationException_init(mode.toString() + ' is not supported');
    }
  }
  function sampleToText($receiver, mode, unit) {
    var tmp$;
    var value = $receiver;
    switch (mode.name) {
      case 'Throughput':
        tmp$ = formatSignificant(value, 6) + ' ops/' + toText(unit);
        break;
      case 'AverageTime':
        tmp$ = formatSignificant(value, 6) + ' ' + toText(unit) + '/op';
        break;
      default:throw UnsupportedOperationException_init(mode.toString() + ' is not supported');
    }
    return tmp$;
  }
  function nanosToSample($receiver, mode, unit) {
    var tmp$;
    var multiplier = toMultiplier(unit);
    switch (mode.name) {
      case 'Throughput':
        tmp$ = multiplier.toNumber() / $receiver;
        break;
      case 'AverageTime':
        tmp$ = $receiver / multiplier.toNumber();
        break;
      default:throw UnsupportedOperationException_init(mode.toString() + ' is not supported');
    }
    return tmp$;
  }
  function RunnerConfiguration(config) {
    var $receiver = lines(config);
    var destination = LinkedHashMap_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = substringBefore(element, ':');
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      } else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(substringAfter(element, ':', ''));
    }
    this.values_0 = destination;
    this.name = this.singleValue_0('name');
    this.reportFile = this.singleValue_0('reportFile');
    this.traceFormat = this.singleValue_0('traceFormat');
    this.reportFormat = this.singleValue_1('reportFormat', 'json');
    this.params = this.mapValues_0('param', '=');
    this.include = this.listValues_0('include');
    this.exclude = this.listValues_0('exclude');
    this.iterations = this.singleValueOrNull_1('iterations', RunnerConfiguration$iterations$lambda);
    this.warmups = this.singleValueOrNull_1('warmups', RunnerConfiguration$warmups$lambda);
    this.iterationTime = this.singleValueOrNull_1('iterationTime', RunnerConfiguration$iterationTime$lambda);
    this.iterationTimeUnit = this.singleValueOrNull_1('iterationTimeUnit', RunnerConfiguration$iterationTimeUnit$lambda(this));
    this.forks = this.singleValueOrNull_1('forks', RunnerConfiguration$forks$lambda);
    this.outputTimeUnit = this.singleValueOrNull_1('outputTimeUnit', RunnerConfiguration$outputTimeUnit$lambda(this));
    this.mode = this.singleValueOrNull_1('mode', RunnerConfiguration$mode$lambda);
  }
  RunnerConfiguration.prototype.singleValueOrNull_1 = function (name, map) {
    var tmp$;
    return (tmp$ = this.singleValueOrNull_0(name)) != null ? map(tmp$) : null;
  };
  RunnerConfiguration.prototype.singleValueOrNull_0 = function (name) {
    var tmp$;
    tmp$ = this.values_0.get_11rb$(name);
    if (tmp$ == null) {
      return null;
    }var values = tmp$;
    return single(values);
  };
  RunnerConfiguration.prototype.singleValue_0 = function (name) {
    var tmp$;
    tmp$ = this.singleValueOrNull_0(name);
    if (tmp$ == null) {
      throw new NoSuchElementException('Parameter `' + name + '` is required.');
    }return tmp$;
  };
  RunnerConfiguration.prototype.singleValue_1 = function (name, default_0) {
    var tmp$;
    return (tmp$ = this.singleValueOrNull_0(name)) != null ? tmp$ : default_0;
  };
  RunnerConfiguration.prototype.mapValues_0 = function (name, delimiter) {
    var tmp$;
    tmp$ = this.values_0.get_11rb$(name);
    if (tmp$ == null) {
      return emptyMap();
    }var values = tmp$;
    var destination = LinkedHashMap_init_0();
    var tmp$_0;
    tmp$_0 = values.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var key = substringBefore(element, delimiter);
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      } else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(substringAfter(element, delimiter));
    }
    return destination;
  };
  RunnerConfiguration.prototype.listValues_0 = function (name) {
    var tmp$;
    return (tmp$ = this.values_0.get_11rb$(name)) != null ? tmp$ : emptyList();
  };
  RunnerConfiguration.prototype.parseTimeUnit_0 = function (text) {
    if (equals(text, BenchmarkTimeUnit$SECONDS_getInstance().name) || equals(text, 's') || equals(text, 'sec'))
      return BenchmarkTimeUnit$SECONDS_getInstance();
    else if (equals(text, BenchmarkTimeUnit$MICROSECONDS_getInstance().name) || equals(text, 'us') || equals(text, 'micros'))
      return BenchmarkTimeUnit$MICROSECONDS_getInstance();
    else if (equals(text, BenchmarkTimeUnit$MILLISECONDS_getInstance().name) || equals(text, 'ms') || equals(text, 'millis'))
      return BenchmarkTimeUnit$MILLISECONDS_getInstance();
    else if (equals(text, BenchmarkTimeUnit$NANOSECONDS_getInstance().name) || equals(text, 'ns') || equals(text, 'nanos'))
      return BenchmarkTimeUnit$NANOSECONDS_getInstance();
    else if (equals(text, BenchmarkTimeUnit$MINUTES_getInstance().name) || equals(text, 'm') || equals(text, 'min'))
      return BenchmarkTimeUnit$MINUTES_getInstance();
    else
      throw UnsupportedOperationException_init('Unknown time unit: ' + text);
  };
  function RunnerConfiguration$toString$lambda(it) {
    return it.key + ': ' + it.value;
  }
  RunnerConfiguration.prototype.toString = function () {
    return this.name + ' -> ' + this.reportFile + ' (' + this.traceFormat + ', ' + this.reportFormat + ')' + '\n' + 'params: ' + joinToString(this.params.entries, void 0, '{', '}', void 0, void 0, RunnerConfiguration$toString$lambda) + '\n' + 'include: ' + this.include + '\n' + 'exclude: ' + this.exclude + '\n' + 'iterations: ' + toString(this.iterations) + '            ' + '\n' + 'warmups: ' + toString(this.warmups) + '            ' + '\n' + 'iterationTime: ' + toString(this.iterationTime) + '            ' + '\n' + 'iterationTimeUnit: ' + toString(this.iterationTimeUnit) + '            ' + '\n' + 'outputTimeUnit: ' + toString(this.outputTimeUnit) + '            ' + '\n' + 'mode: ' + toString(this.mode) + '            ' + '\n';
  };
  function RunnerConfiguration$iterations$lambda(it) {
    return toInt(it);
  }
  function RunnerConfiguration$warmups$lambda(it) {
    return toInt(it);
  }
  function RunnerConfiguration$iterationTime$lambda(it) {
    return toLong(it);
  }
  function RunnerConfiguration$iterationTimeUnit$lambda(this$RunnerConfiguration) {
    return function (it) {
      return this$RunnerConfiguration.parseTimeUnit_0(it);
    };
  }
  function RunnerConfiguration$forks$lambda(it) {
    return toInt(it);
  }
  function RunnerConfiguration$outputTimeUnit$lambda(this$RunnerConfiguration) {
    return function (it) {
      return this$RunnerConfiguration.parseTimeUnit_0(it);
    };
  }
  function RunnerConfiguration$mode$lambda(it) {
    return Mode$valueOf(it);
  }
  RunnerConfiguration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RunnerConfiguration',
    interfaces: []
  };
  function SuiteDescriptor(name, factory, parametrize, setup, teardown, parameters, defaultParameters, iterations, warmups, iterationTime, outputTimeUnit, mode) {
    if (iterations === void 0)
      iterations = 3;
    if (warmups === void 0)
      warmups = 3;
    if (iterationTime === void 0)
      iterationTime = new IterationTime(L1, BenchmarkTimeUnit$SECONDS_getInstance());
    if (outputTimeUnit === void 0)
      outputTimeUnit = BenchmarkTimeUnit$MILLISECONDS_getInstance();
    if (mode === void 0)
      mode = Mode$Throughput_getInstance();
    this.name = name;
    this.factory = factory;
    this.parametrize = parametrize;
    this.setup = setup;
    this.teardown = teardown;
    this.parameters = parameters;
    this.defaultParameters = defaultParameters;
    this.iterations = iterations;
    this.warmups = warmups;
    this.iterationTime = iterationTime;
    this.outputTimeUnit = outputTimeUnit;
    this.mode = mode;
    this._benchmarks_r48ab0$_0 = ArrayList_init();
  }
  Object.defineProperty(SuiteDescriptor.prototype, 'benchmarks', {
    configurable: true,
    get: function () {
      return this._benchmarks_r48ab0$_0;
    }
  });
  SuiteDescriptor.prototype.add_11zwv$ = function (benchmark) {
    this._benchmarks_r48ab0$_0.add_11rb$(benchmark);
  };
  SuiteDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SuiteDescriptor',
    interfaces: []
  };
  function IterationTime(value, timeUnit) {
    this.value = value;
    this.timeUnit = timeUnit;
  }
  IterationTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IterationTime',
    interfaces: []
  };
  IterationTime.prototype.component1 = function () {
    return this.value;
  };
  IterationTime.prototype.component2 = function () {
    return this.timeUnit;
  };
  IterationTime.prototype.copy_o6ena5$ = function (value, timeUnit) {
    return new IterationTime(value === void 0 ? this.value : value, timeUnit === void 0 ? this.timeUnit : timeUnit);
  };
  IterationTime.prototype.toString = function () {
    return 'IterationTime(value=' + Kotlin.toString(this.value) + (', timeUnit=' + Kotlin.toString(this.timeUnit)) + ')';
  };
  IterationTime.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.timeUnit) | 0;
    return result;
  };
  IterationTime.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.timeUnit, other.timeUnit)))));
  };
  function SuiteExecutor(executionName, arguments_0) {
    this.executionName = executionName;
    this.config_4gsbkd$_0 = new RunnerConfiguration(readConfigFile(first(arguments_0)));
    this.reporter = BenchmarkProgress$Companion_getInstance().create_61zpoe$(this.config_4gsbkd$_0.traceFormat);
    this.reportFormatter_pu37ox$_0 = BenchmarkReportFormatter$Companion_getInstance().create_61zpoe$(this.config_4gsbkd$_0.reportFormat);
    this.results_fn58v$_0 = ArrayList_init();
    this.suites_szkbqs$_0 = ArrayList_init();
  }
  SuiteExecutor.prototype.suite_secitb$ = function (descriptor) {
    this.suites_szkbqs$_0.add_11rb$(descriptor);
  };
  function SuiteExecutor$run$lambda(this$SuiteExecutor) {
    return function () {
      var summary = TextBenchmarkReportFormatter_getInstance().format_6kr8el$(this$SuiteExecutor.results_fn58v$_0);
      this$SuiteExecutor.reporter.endSuite_puj7f4$(this$SuiteExecutor.executionName, summary);
      saveReport(this$SuiteExecutor.config_4gsbkd$_0.reportFile, this$SuiteExecutor.reportFormatter_pu37ox$_0.format_6kr8el$(this$SuiteExecutor.results_fn58v$_0));
      return Unit;
    };
  }
  SuiteExecutor.prototype.run = function () {
    this.reporter.startSuite_61zpoe$(this.executionName);
    var tmp$;
    if (this.config_4gsbkd$_0.include.isEmpty())
      tmp$ = listOf_0(Regex_init('.*'));
    else {
      var $receiver = this.config_4gsbkd$_0.include;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(Regex_init(item));
      }
      tmp$ = destination;
    }
    var include = tmp$;
    var $receiver_0 = this.config_4gsbkd$_0.exclude;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(Regex_init(item_0));
    }
    var exclude = destination_0;
    var $receiver_1 = this.suites_szkbqs$_0;
    var destination_1 = ArrayList_init();
    var tmp$_2;
    tmp$_2 = $receiver_1.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var tmp$_3;
      var $receiver_2 = element.benchmarks;
      var destination_2 = ArrayList_init();
      var tmp$_4;
      tmp$_4 = $receiver_2.iterator();
      loop_label: while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        var fullName = element.name + '.' + element_0.name;
        var any$result;
        any$break: do {
          var tmp$_5;
          if (Kotlin.isType(include, Collection) && include.isEmpty()) {
            any$result = false;
            break any$break;
          }tmp$_5 = include.iterator();
          while (tmp$_5.hasNext()) {
            var element_1 = tmp$_5.next();
            if (element_1.containsMatchIn_6bul2c$(fullName)) {
              any$result = true;
              break any$break;
            }}
          any$result = false;
        }
         while (false);
        var tmp$_6 = any$result;
        if (tmp$_6) {
          var none$result;
          none$break: do {
            var tmp$_7;
            if (Kotlin.isType(exclude, Collection) && exclude.isEmpty()) {
              none$result = true;
              break none$break;
            }tmp$_7 = exclude.iterator();
            while (tmp$_7.hasNext()) {
              var element_2 = tmp$_7.next();
              if (element_2.containsMatchIn_6bul2c$(fullName)) {
                none$result = false;
                break none$break;
              }}
            none$result = true;
          }
           while (false);
          tmp$_6 = none$result;
        }if (tmp$_6)
          destination_2.add_11rb$(element_0);
      }
      var list = Kotlin.isType(tmp$_3 = destination_2, List) ? tmp$_3 : throwCCE();
      addAll(destination_1, list);
    }
    var benchmarks = destination_1;
    this.run_ehbc12$(this.config_4gsbkd$_0, this.reporter, benchmarks, SuiteExecutor$run$lambda(this));
  };
  SuiteExecutor.prototype.result_711jb6$ = function (result) {
    this.results_fn58v$_0.add_11rb$(result);
  };
  function SuiteExecutor$id$lambda(it) {
    return it.key + '=' + it.value;
  }
  SuiteExecutor.prototype.id_mvjluj$ = function (name, params) {
    var id = params.isEmpty() ? name : name + joinToString(params.entries, void 0, ' | ', void 0, void 0, void 0, SuiteExecutor$id$lambda);
    return id;
  };
  SuiteExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SuiteExecutor',
    interfaces: []
  };
  function runWithParameters$parameterValues(closure$parameters, closure$defaults) {
    return function (name) {
      var $receiver = closure$parameters;
      var tmp$;
      var tmp$_0;
      if ((tmp$ = $receiver.get_11rb$(name)) != null)
        tmp$_0 = tmp$;
      else {
        var tmp$_1;
        var tmp$_2;
        if ((tmp$_1 = closure$defaults.get_11rb$(name)) != null)
          tmp$_2 = tmp$_1;
        else {
          throw IllegalStateException_init(("No value specified for parameter '" + name + "'").toString());
        }
        tmp$_0 = tmp$_2;
      }
      return tmp$_0;
    };
  }
  function runWithParameters(names, parameters, defaults, function_0) {
    if (names.isEmpty()) {
      function_0(emptyMap());
      return;
    }var parameterValues = runWithParameters$parameterValues(parameters, defaults);
    var valueIndices = new Int32Array(names.size);
    var array = new Int32Array(names.size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var name = names.get_za3lpa$(i);
      array[i] = parameterValues(name).size;
    }
    var valueLimits = array;
    while (true) {
      var $receiver = get_indices(names);
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
      var destination = LinkedHashMap_init(capacity);
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        destination.put_xwzc9p$(names.get_za3lpa$(element), parameterValues(names.get_za3lpa$(element)).get_za3lpa$(valueIndices[element]));
      }
      var paramsVariant = destination;
      function_0(paramsVariant);
      for (var index = 0; index !== valueIndices.length; ++index) {
        valueIndices[index] = valueIndices[index] + 1 | 0;
        if (valueIndices[index] < valueLimits[index])
          break;
        else if (index === get_lastIndex_0(valueIndices))
          return;
        valueIndices[index] = 0;
      }
    }
  }
  function JsBenchmarkDescriptor(name, suite, function_0, async) {
    if (async === void 0)
      async = false;
    BenchmarkDescriptor.call(this, name, suite, function_0);
    this.async = async;
  }
  JsBenchmarkDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsBenchmarkDescriptor',
    interfaces: [BenchmarkDescriptor]
  };
  function JsBenchmarkDescriptor_init(name, suite, function_0, $this) {
    $this = $this || Object.create(JsBenchmarkDescriptor.prototype);
    JsBenchmarkDescriptor.call($this, name, suite, function_0, true);
    return $this;
  }
  function JsExecutor(name, dummy_args) {
    var tmp$;
    SuiteExecutor.call(this, name, copyToArray(drop_0(Kotlin.isArray(tmp$ = process['argv']) ? tmp$ : throwCCE(), 2)));
    this.benchmarkJs_0 = require('benchmark');
  }
  function JsExecutor$run$lambda(closure$complete) {
    return function () {
      closure$complete();
      return Unit;
    };
  }
  function JsExecutor$run$lambda$lambda$lambda$lambda(closure$deferred) {
    return function (it) {
      return closure$deferred.resolve();
    };
  }
  function JsExecutor$run$lambda$lambda$lambda(closure$instance, closure$promiseFunction) {
    return function (deferred) {
      return closure$promiseFunction(closure$instance).then(JsExecutor$run$lambda$lambda$lambda$lambda(deferred));
    };
  }
  function JsExecutor$run$lambda$lambda$lambda_0(closure$instance, closure$function) {
    return function () {
      return closure$function(closure$instance);
    };
  }
  function JsExecutor$run$lambda$lambda$lambda_1(closure$reporter, this$JsExecutor, closure$id, closure$suite, closure$instance) {
    return function (event) {
      closure$reporter.startBenchmark_puj7f4$(this$JsExecutor.executionName, closure$id);
      closure$suite.setup(closure$instance);
      return Unit;
    };
  }
  function JsExecutor$run$lambda$lambda$lambda_2(closure$config, closure$reporter, this$JsExecutor, closure$id, closure$iteration) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var target = event.target;
      var nanos = (typeof (tmp$ = target.times.period) === 'number' ? tmp$ : throwCCE()) * toMultiplier(BenchmarkTimeUnit$SECONDS_getInstance()).toNumber();
      var sample = nanosToText(nanos, closure$config.mode, closure$config.outputTimeUnit);
      tmp$_0 = this$JsExecutor.executionName;
      tmp$_2 = 'Iteration #' + (tmp$_1 = closure$iteration.v, closure$iteration.v = tmp$_1 + 1 | 0, tmp$_1) + ': ' + sample;
      closure$reporter.output_6hosri$(tmp$_0, closure$id, tmp$_2);
      return Unit;
    };
  }
  function JsExecutor$run$lambda$lambda$lambda_3(closure$suite, closure$instance, closure$config, closure$benchmark, closure$params, closure$reporter, this$JsExecutor, closure$id) {
    return function (event) {
      closure$suite.teardown(closure$instance);
      var stats = event.target.stats;
      var $receiver = stats.sample;
      var destination = ArrayList_init_0($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        var tmp$_0 = destination.add_11rb$;
        var closure$config_0 = closure$config;
        var nanos = item * toMultiplier(BenchmarkTimeUnit$SECONDS_getInstance()).toNumber();
        tmp$_0.call(destination, nanosToSample(nanos, closure$config_0.mode, closure$config_0.outputTimeUnit));
      }
      var samples = toDoubleArray(destination);
      var result = ReportBenchmarksStatistics$Companion_getInstance().createResult_tjyrqp$(closure$benchmark, closure$params, closure$config, samples);
      var closure$config_1 = closure$config;
      var message = '  ~ ' + sampleToText(result.score, closure$config_1.mode, closure$config_1.outputTimeUnit) + ' \xB1' + formatSignificant(result.error / result.score * 100, 2) + '%';
      var error = event.target.error;
      if (error == null) {
        closure$reporter.endBenchmark_e7ba0x$(this$JsExecutor.executionName, closure$id, BenchmarkProgress$FinishStatus$Success_getInstance(), message);
        this$JsExecutor.result_711jb6$(result);
      } else {
        var stacktrace = error.stack;
        closure$reporter.endBenchmarkException_w74nik$(this$JsExecutor.executionName, closure$id, error.toString(), stacktrace.toString());
      }
      return Unit;
    };
  }
  function JsExecutor$run$lambda$lambda(closure$benchmark, this$JsExecutor, closure$suite, closure$jsDescriptor, closure$jsSuite, closure$config, closure$reporter) {
    return function (params) {
      var tmp$, tmp$_0;
      var id = this$JsExecutor.id_mvjluj$(closure$benchmark.name, params);
      var function_0 = closure$benchmark.function;
      var instance = closure$suite.factory();
      closure$suite.parametrize(instance, params);
      if (closure$jsDescriptor.async) {
        var promiseFunction = typeof (tmp$ = function_0) === 'function' ? tmp$ : throwCCE();
        closure$jsSuite.add(closure$benchmark.name, JsExecutor$run$lambda$lambda$lambda(instance, promiseFunction));
        tmp$_0 = true;
      } else {
        closure$jsSuite.add(closure$benchmark.name, JsExecutor$run$lambda$lambda$lambda_0(instance, function_0));
        tmp$_0 = false;
      }
      var asynchronous = tmp$_0;
      var jsBenchmark = closure$jsSuite[closure$jsSuite.length - 1];
      jsBenchmark.options.initCount = closure$config.warmups;
      jsBenchmark.options.minSamples = closure$config.iterations;
      var iterationSeconds = closure$config.iterationTime.toNumber() * toSecondsMultiplier(closure$config.iterationTimeUnit);
      jsBenchmark.options.minTime = iterationSeconds;
      jsBenchmark.options.maxTime = iterationSeconds;
      jsBenchmark.options.async = asynchronous;
      jsBenchmark.options.defer = asynchronous;
      jsBenchmark.on('start', JsExecutor$run$lambda$lambda$lambda_1(closure$reporter, this$JsExecutor, id, closure$suite, instance));
      var iteration = {v: 0};
      jsBenchmark.on('cycle', JsExecutor$run$lambda$lambda$lambda_2(closure$config, closure$reporter, this$JsExecutor, id, iteration));
      jsBenchmark.on('complete', JsExecutor$run$lambda$lambda$lambda_3(closure$suite, instance, closure$config, closure$benchmark, params, closure$reporter, this$JsExecutor, id));
      return Unit;
    };
  }
  JsExecutor.prototype.run_ehbc12$ = function (runnerConfiguration, reporter, benchmarks, complete) {
    var jsSuite = this.benchmarkJs_0.Suite();
    jsSuite.on('complete', JsExecutor$run$lambda(complete));
    var tmp$;
    tmp$ = benchmarks.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var suite = element.suite;
      var config = new BenchmarkConfiguration(runnerConfiguration, suite);
      var jsDescriptor = Kotlin.isType(tmp$_0 = element, JsBenchmarkDescriptor) ? tmp$_0 : throwCCE();
      runWithParameters(suite.parameters, runnerConfiguration.params, suite.defaultParameters, JsExecutor$run$lambda$lambda(element, this, suite, jsDescriptor, jsSuite, config, reporter));
    }
    jsSuite.run();
  };
  JsExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsExecutor',
    interfaces: [SuiteExecutor]
  };
  var process;
  function Scope(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Scope_initFields() {
    Scope_initFields = function () {
    };
    Scope$Benchmark_instance = new Scope('Benchmark', 0);
  }
  var Scope$Benchmark_instance;
  function Scope$Benchmark_getInstance() {
    Scope_initFields();
    return Scope$Benchmark_instance;
  }
  Scope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scope',
    interfaces: [Enum]
  };
  function Scope$values() {
    return [Scope$Benchmark_getInstance()];
  }
  Scope.values = Scope$values;
  function Scope$valueOf(name) {
    switch (name) {
      case 'Benchmark':
        return Scope$Benchmark_getInstance();
      default:throwISE('No enum constant kotlinx.benchmark.Scope.' + name);
    }
  }
  Scope.valueOf_61zpoe$ = Scope$valueOf;
  function State(value) {
    this.value = value;
  }
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: [Annotation]
  };
  function Setup() {
  }
  Setup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Setup',
    interfaces: [Annotation]
  };
  function TearDown() {
  }
  TearDown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TearDown',
    interfaces: [Annotation]
  };
  function Benchmark() {
  }
  Benchmark.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Benchmark',
    interfaces: [Annotation]
  };
  function BenchmarkMode(value) {
    this.value = value;
  }
  BenchmarkMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BenchmarkMode',
    interfaces: [Annotation]
  };
  function Mode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Mode_initFields() {
    Mode_initFields = function () {
    };
    Mode$Throughput_instance = new Mode('Throughput', 0);
    Mode$AverageTime_instance = new Mode('AverageTime', 1);
  }
  var Mode$Throughput_instance;
  function Mode$Throughput_getInstance() {
    Mode_initFields();
    return Mode$Throughput_instance;
  }
  var Mode$AverageTime_instance;
  function Mode$AverageTime_getInstance() {
    Mode_initFields();
    return Mode$AverageTime_instance;
  }
  Mode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function Mode$values() {
    return [Mode$Throughput_getInstance(), Mode$AverageTime_getInstance()];
  }
  Mode.values = Mode$values;
  function Mode$valueOf(name) {
    switch (name) {
      case 'Throughput':
        return Mode$Throughput_getInstance();
      case 'AverageTime':
        return Mode$AverageTime_getInstance();
      default:throwISE('No enum constant kotlinx.benchmark.Mode.' + name);
    }
  }
  Mode.valueOf_61zpoe$ = Mode$valueOf;
  function OutputTimeUnit(value) {
    this.value = value;
  }
  OutputTimeUnit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OutputTimeUnit',
    interfaces: [Annotation]
  };
  function BenchmarkTimeUnit(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BenchmarkTimeUnit_initFields() {
    BenchmarkTimeUnit_initFields = function () {
    };
    BenchmarkTimeUnit$NANOSECONDS_instance = new BenchmarkTimeUnit('NANOSECONDS', 0);
    BenchmarkTimeUnit$MICROSECONDS_instance = new BenchmarkTimeUnit('MICROSECONDS', 1);
    BenchmarkTimeUnit$MILLISECONDS_instance = new BenchmarkTimeUnit('MILLISECONDS', 2);
    BenchmarkTimeUnit$SECONDS_instance = new BenchmarkTimeUnit('SECONDS', 3);
    BenchmarkTimeUnit$MINUTES_instance = new BenchmarkTimeUnit('MINUTES', 4);
  }
  var BenchmarkTimeUnit$NANOSECONDS_instance;
  function BenchmarkTimeUnit$NANOSECONDS_getInstance() {
    BenchmarkTimeUnit_initFields();
    return BenchmarkTimeUnit$NANOSECONDS_instance;
  }
  var BenchmarkTimeUnit$MICROSECONDS_instance;
  function BenchmarkTimeUnit$MICROSECONDS_getInstance() {
    BenchmarkTimeUnit_initFields();
    return BenchmarkTimeUnit$MICROSECONDS_instance;
  }
  var BenchmarkTimeUnit$MILLISECONDS_instance;
  function BenchmarkTimeUnit$MILLISECONDS_getInstance() {
    BenchmarkTimeUnit_initFields();
    return BenchmarkTimeUnit$MILLISECONDS_instance;
  }
  var BenchmarkTimeUnit$SECONDS_instance;
  function BenchmarkTimeUnit$SECONDS_getInstance() {
    BenchmarkTimeUnit_initFields();
    return BenchmarkTimeUnit$SECONDS_instance;
  }
  var BenchmarkTimeUnit$MINUTES_instance;
  function BenchmarkTimeUnit$MINUTES_getInstance() {
    BenchmarkTimeUnit_initFields();
    return BenchmarkTimeUnit$MINUTES_instance;
  }
  BenchmarkTimeUnit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BenchmarkTimeUnit',
    interfaces: [Enum]
  };
  function BenchmarkTimeUnit$values() {
    return [BenchmarkTimeUnit$NANOSECONDS_getInstance(), BenchmarkTimeUnit$MICROSECONDS_getInstance(), BenchmarkTimeUnit$MILLISECONDS_getInstance(), BenchmarkTimeUnit$SECONDS_getInstance(), BenchmarkTimeUnit$MINUTES_getInstance()];
  }
  BenchmarkTimeUnit.values = BenchmarkTimeUnit$values;
  function BenchmarkTimeUnit$valueOf(name) {
    switch (name) {
      case 'NANOSECONDS':
        return BenchmarkTimeUnit$NANOSECONDS_getInstance();
      case 'MICROSECONDS':
        return BenchmarkTimeUnit$MICROSECONDS_getInstance();
      case 'MILLISECONDS':
        return BenchmarkTimeUnit$MILLISECONDS_getInstance();
      case 'SECONDS':
        return BenchmarkTimeUnit$SECONDS_getInstance();
      case 'MINUTES':
        return BenchmarkTimeUnit$MINUTES_getInstance();
      default:throwISE('No enum constant kotlinx.benchmark.BenchmarkTimeUnit.' + name);
    }
  }
  BenchmarkTimeUnit.valueOf_61zpoe$ = BenchmarkTimeUnit$valueOf;
  function Warmup(iterations) {
    if (iterations === void 0)
      iterations = -1;
    this.iterations = iterations;
  }
  Warmup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Warmup',
    interfaces: [Annotation]
  };
  function Measurement(iterations, time, timeUnit, batchSize) {
    if (iterations === void 0)
      iterations = -1;
    if (time === void 0)
      time = -1;
    if (timeUnit === void 0)
      timeUnit = BenchmarkTimeUnit$SECONDS_getInstance();
    if (batchSize === void 0)
      batchSize = -1;
    this.iterations = iterations;
    this.time = time;
    this.timeUnit = timeUnit;
    this.batchSize = batchSize;
  }
  Measurement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Measurement',
    interfaces: [Annotation]
  };
  function Param(value) {
    this.value = value;
  }
  Param.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Param',
    interfaces: [Annotation]
  };
  function Blackhole() {
  }
  Blackhole.prototype.consume_s8jyv4$ = function (obj) {
  };
  Blackhole.prototype.consume_6taknv$ = function (bool) {
  };
  Blackhole.prototype.consume_s8itvh$ = function (c) {
  };
  Blackhole.prototype.consume_s8j3t7$ = function (b) {
  };
  Blackhole.prototype.consume_mq22fl$ = function (s) {
  };
  Blackhole.prototype.consume_za3lpa$ = function (i) {
  };
  Blackhole.prototype.consume_s8cxhz$ = function (l) {
  };
  Blackhole.prototype.consume_mx4ult$ = function (f) {
  };
  Blackhole.prototype.consume_14dthe$ = function (d) {
  };
  Blackhole.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blackhole',
    interfaces: []
  };
  function toByteArrayUtf8($receiver) {
    var tmp$;
    var s = $receiver;
    var block = unescape(encodeURIComponent(s));
    var $receiver_0 = toList(typeof (tmp$ = block) === 'string' ? tmp$ : throwCCE());
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(toByte(unboxChar(item) | 0));
    }
    return toByteArray(destination);
  }
  function format($receiver, precision, useGrouping) {
    if (useGrouping === void 0)
      useGrouping = true;
    var options = {maximumFractionDigits: 2, minimumFractionDigits: 2, useGrouping: true};
    options.minimumFractionDigits = precision;
    options.maximumFractionDigits = precision;
    options.useGrouping = useGrouping;
    return $receiver.toLocaleString(undefined, options);
  }
  var fs;
  function saveReport$lambda(err) {
    if (err != null)
      throw err;
    return Unit;
  }
  function saveReport(reportFile, report) {
    fs.writeFile(reportFile, report, saveReport$lambda);
  }
  function readConfigFile($receiver) {
    return fs.readFileSync($receiver, 'utf8');
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$benchmark = package$kotlinx.benchmark || (package$kotlinx.benchmark = {});
  package$benchmark.BenchmarkDescriptor = BenchmarkDescriptor;
  Object.defineProperty(BenchmarkProgress, 'Companion', {
    get: BenchmarkProgress$Companion_getInstance
  });
  Object.defineProperty(BenchmarkProgress$FinishStatus, 'Success', {
    get: BenchmarkProgress$FinishStatus$Success_getInstance
  });
  Object.defineProperty(BenchmarkProgress$FinishStatus, 'Failure', {
    get: BenchmarkProgress$FinishStatus$Failure_getInstance
  });
  BenchmarkProgress.FinishStatus = BenchmarkProgress$FinishStatus;
  package$benchmark.BenchmarkProgress = BenchmarkProgress;
  package$benchmark.IntelliJBenchmarkProgress = IntelliJBenchmarkProgress;
  package$benchmark.ConsoleBenchmarkProgress = ConsoleBenchmarkProgress;
  Object.defineProperty(BenchmarkReportFormatter, 'Companion', {
    get: BenchmarkReportFormatter$Companion_getInstance
  });
  package$benchmark.BenchmarkReportFormatter = BenchmarkReportFormatter;
  Object.defineProperty(package$benchmark, 'TextBenchmarkReportFormatter', {
    get: TextBenchmarkReportFormatter_getInstance
  });
  package$benchmark.toText_986l4n$ = toText;
  package$benchmark.toText_jcoshw$ = toText_0;
  package$benchmark.toMultiplier_986l4n$ = toMultiplier;
  package$benchmark.toSecondsMultiplier_986l4n$ = toSecondsMultiplier;
  package$benchmark.BenchmarkConfiguration = BenchmarkConfiguration;
  package$benchmark.ijSuiteStart_wdz5eb$ = ijSuiteStart;
  package$benchmark.ijSuiteFinish_c5czb8$ = ijSuiteFinish;
  package$benchmark.ijBenchmarkStart_p1hijf$ = ijBenchmarkStart;
  package$benchmark.ijBenchmarkFinish_c5czb8$ = ijBenchmarkFinish;
  package$benchmark.ijBenchmarkFinishException_tvx5n3$ = ijBenchmarkFinishException;
  package$benchmark.ijLogOutput_p1hijf$ = ijLogOutput;
  package$benchmark.ReportBenchmarkResult = ReportBenchmarkResult;
  Object.defineProperty(ReportBenchmarksStatistics, 'Companion', {
    get: ReportBenchmarksStatistics$Companion_getInstance
  });
  package$benchmark.ReportBenchmarksStatistics = ReportBenchmarksStatistics;
  package$benchmark.formatSignificant_j6vyb1$ = formatSignificant;
  package$benchmark.isNaNOrZero_yrwdxr$ = isNaNOrZero;
  package$benchmark.isApproximateZero_yrwdxr$ = isApproximateZero;
  package$benchmark.nanosToText_actoi2$ = nanosToText;
  package$benchmark.unitText_2f30cl$ = unitText;
  package$benchmark.sampleToText_actoi2$ = sampleToText;
  package$benchmark.nanosToSample_actoi2$ = nanosToSample;
  package$benchmark.RunnerConfiguration = RunnerConfiguration;
  package$benchmark.SuiteDescriptor = SuiteDescriptor;
  package$benchmark.IterationTime = IterationTime;
  package$benchmark.SuiteExecutor = SuiteExecutor;
  package$benchmark.runWithParameters_q86y0p$ = runWithParameters;
  var package$js = package$benchmark.js || (package$benchmark.js = {});
  package$js.JsBenchmarkDescriptor_init_imnqf0$ = JsBenchmarkDescriptor_init;
  package$js.JsBenchmarkDescriptor = JsBenchmarkDescriptor;
  package$js.JsExecutor = JsExecutor;
  Object.defineProperty(Scope, 'Benchmark', {
    get: Scope$Benchmark_getInstance
  });
  package$benchmark.Scope = Scope;
  package$benchmark.State = State;
  package$benchmark.Setup = Setup;
  package$benchmark.TearDown = TearDown;
  package$benchmark.Benchmark = Benchmark;
  package$benchmark.BenchmarkMode = BenchmarkMode;
  Object.defineProperty(Mode, 'Throughput', {
    get: Mode$Throughput_getInstance
  });
  Object.defineProperty(Mode, 'AverageTime', {
    get: Mode$AverageTime_getInstance
  });
  package$benchmark.Mode = Mode;
  package$benchmark.OutputTimeUnit = OutputTimeUnit;
  Object.defineProperty(BenchmarkTimeUnit, 'NANOSECONDS', {
    get: BenchmarkTimeUnit$NANOSECONDS_getInstance
  });
  Object.defineProperty(BenchmarkTimeUnit, 'MICROSECONDS', {
    get: BenchmarkTimeUnit$MICROSECONDS_getInstance
  });
  Object.defineProperty(BenchmarkTimeUnit, 'MILLISECONDS', {
    get: BenchmarkTimeUnit$MILLISECONDS_getInstance
  });
  Object.defineProperty(BenchmarkTimeUnit, 'SECONDS', {
    get: BenchmarkTimeUnit$SECONDS_getInstance
  });
  Object.defineProperty(BenchmarkTimeUnit, 'MINUTES', {
    get: BenchmarkTimeUnit$MINUTES_getInstance
  });
  package$benchmark.BenchmarkTimeUnit = BenchmarkTimeUnit;
  package$benchmark.Warmup = Warmup;
  package$benchmark.Measurement = Measurement;
  package$benchmark.Param = Param;
  package$benchmark.Blackhole = Blackhole;
  package$benchmark.toByteArrayUtf8_pdl1vz$ = toByteArrayUtf8;
  package$benchmark.format_9rbwic$ = format;
  package$benchmark.saveReport_puj7f4$ = saveReport;
  package$benchmark.readConfigFile_pdl1vz$ = readConfigFile;
  BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  BASE64_MASK = 63;
  BASE64_PAD = 61;
  zeroThreshold = 1.0 / Math_0.pow(10.0, 3) / 2;
  process = require('process');
  fs = require('fs');
  Kotlin.defineModule('kotlinx-benchmark-kotlinx-benchmark-runtime', _);
  return _;
}));

//# sourceMappingURL=kotlinx-benchmark-kotlinx-benchmark-runtime.js.map
