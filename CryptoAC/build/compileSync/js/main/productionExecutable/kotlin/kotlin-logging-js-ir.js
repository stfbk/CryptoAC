(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-logging-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-logging-js-ir'.");
    }
    root['kotlin-logging-js-ir'] = factory(typeof this['kotlin-logging-js-ir'] === 'undefined' ? {} : this['kotlin-logging-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.sa;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.lf;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var toString = kotlin_kotlin.$_$.jf;
  var Exception = kotlin_kotlin.$_$.xd;
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var Enum = kotlin_kotlin.$_$.vd;
  var classMeta = kotlin_kotlin.$_$.k9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConsoleOutputAppender, 'ConsoleOutputAppender', objectMeta);
  setMetadataFor(DefaultMessageFormatter, 'DefaultMessageFormatter', objectMeta);
  setMetadataFor(KotlinLogging, 'KotlinLogging', objectMeta);
  setMetadataFor(KotlinLoggingConfiguration, 'KotlinLoggingConfiguration', objectMeta);
  setMetadataFor(KotlinLoggingLevel, 'KotlinLoggingLevel', classMeta, Enum);
  setMetadataFor(ErrorMessageProducer, 'ErrorMessageProducer', objectMeta);
  setMetadataFor(KLoggerJS, 'KLoggerJS', classMeta);
  //endregion
  function ConsoleOutputAppender() {
    ConsoleOutputAppender_instance = this;
  }
  protoOf(ConsoleOutputAppender).v4q = function (message) {
    return console.log(message);
  };
  protoOf(ConsoleOutputAppender).w4q = function (message) {
    return console.info(message);
  };
  protoOf(ConsoleOutputAppender).x4q = function (message) {
    return console.warn(message);
  };
  protoOf(ConsoleOutputAppender).y4q = function (message) {
    return console.error(message);
  };
  var ConsoleOutputAppender_instance;
  function ConsoleOutputAppender_getInstance() {
    if (ConsoleOutputAppender_instance == null)
      new ConsoleOutputAppender();
    return ConsoleOutputAppender_instance;
  }
  function DefaultMessageFormatter() {
    DefaultMessageFormatter_instance = this;
  }
  protoOf(DefaultMessageFormatter).z4q = function (level, loggerName, msg) {
    var tmp$ret$0;
    // Inline function 'mu.internal.toStringSafe' call
    var tmp;
    try {
      tmp = toString(msg());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = ErrorMessageProducer_getInstance().a4r(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$0 = tmp;
    return level.m4_1 + ': [' + loggerName + '] ' + tmp$ret$0;
  };
  var DefaultMessageFormatter_instance;
  function DefaultMessageFormatter_getInstance() {
    if (DefaultMessageFormatter_instance == null)
      new DefaultMessageFormatter();
    return DefaultMessageFormatter_instance;
  }
  function KotlinLogging() {
    KotlinLogging_instance = this;
  }
  protoOf(KotlinLogging).b4r = function (func) {
    return new KLoggerJS(func.constructor.name);
  };
  var KotlinLogging_instance;
  function KotlinLogging_getInstance() {
    if (KotlinLogging_instance == null)
      new KotlinLogging();
    return KotlinLogging_instance;
  }
  function KotlinLoggingConfiguration() {
    KotlinLoggingConfiguration_instance = this;
    this.c4r_1 = KotlinLoggingLevel_INFO_getInstance();
    this.d4r_1 = ConsoleOutputAppender_getInstance();
    this.e4r_1 = DefaultMessageFormatter_getInstance();
  }
  var KotlinLoggingConfiguration_instance;
  function KotlinLoggingConfiguration_getInstance() {
    if (KotlinLoggingConfiguration_instance == null)
      new KotlinLoggingConfiguration();
    return KotlinLoggingConfiguration_instance;
  }
  var KotlinLoggingLevel_TRACE_instance;
  var KotlinLoggingLevel_DEBUG_instance;
  var KotlinLoggingLevel_INFO_instance;
  var KotlinLoggingLevel_WARN_instance;
  var KotlinLoggingLevel_ERROR_instance;
  var KotlinLoggingLevel_entriesInitialized;
  function KotlinLoggingLevel_initEntries() {
    if (KotlinLoggingLevel_entriesInitialized)
      return Unit_getInstance();
    KotlinLoggingLevel_entriesInitialized = true;
    KotlinLoggingLevel_TRACE_instance = new KotlinLoggingLevel('TRACE', 0);
    KotlinLoggingLevel_DEBUG_instance = new KotlinLoggingLevel('DEBUG', 1);
    KotlinLoggingLevel_INFO_instance = new KotlinLoggingLevel('INFO', 2);
    KotlinLoggingLevel_WARN_instance = new KotlinLoggingLevel('WARN', 3);
    KotlinLoggingLevel_ERROR_instance = new KotlinLoggingLevel('ERROR', 4);
  }
  function KotlinLoggingLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function isLoggingEnabled(_this__u8e3s4) {
    return _this__u8e3s4.n4_1 >= KotlinLoggingConfiguration_getInstance().c4r_1.n4_1;
  }
  function KotlinLoggingLevel_DEBUG_getInstance() {
    KotlinLoggingLevel_initEntries();
    return KotlinLoggingLevel_DEBUG_instance;
  }
  function KotlinLoggingLevel_INFO_getInstance() {
    KotlinLoggingLevel_initEntries();
    return KotlinLoggingLevel_INFO_instance;
  }
  function KotlinLoggingLevel_WARN_getInstance() {
    KotlinLoggingLevel_initEntries();
    return KotlinLoggingLevel_WARN_instance;
  }
  function KotlinLoggingLevel_ERROR_getInstance() {
    KotlinLoggingLevel_initEntries();
    return KotlinLoggingLevel_ERROR_instance;
  }
  function ErrorMessageProducer() {
    ErrorMessageProducer_instance = this;
  }
  protoOf(ErrorMessageProducer).a4r = function (e) {
    return 'Log message invocation failed: ' + e;
  };
  var ErrorMessageProducer_instance;
  function ErrorMessageProducer_getInstance() {
    if (ErrorMessageProducer_instance == null)
      new ErrorMessageProducer();
    return ErrorMessageProducer_instance;
  }
  function logIfEnabled(_this__u8e3s4, $this, msg, logFunction) {
    if (isLoggingEnabled(_this__u8e3s4)) {
      logFunction(KotlinLoggingConfiguration_getInstance().e4r_1.z4q(_this__u8e3s4, $this.f4r_1, msg));
    }
  }
  function Appender$debug$ref($boundThis) {
    var l = function (p0) {
      $boundThis.v4q(p0);
      return Unit_getInstance();
    };
    l.callableName = 'debug';
    return l;
  }
  function Appender$info$ref($boundThis) {
    var l = function (p0) {
      $boundThis.w4q(p0);
      return Unit_getInstance();
    };
    l.callableName = 'info';
    return l;
  }
  function Appender$warn$ref($boundThis) {
    var l = function (p0) {
      $boundThis.x4q(p0);
      return Unit_getInstance();
    };
    l.callableName = 'warn';
    return l;
  }
  function Appender$error$ref($boundThis) {
    var l = function (p0) {
      $boundThis.y4q(p0);
      return Unit_getInstance();
    };
    l.callableName = 'error';
    return l;
  }
  function KLoggerJS(loggerName) {
    this.f4r_1 = loggerName;
  }
  protoOf(KLoggerJS).g4r = function (msg) {
    var tmp = KotlinLoggingLevel_DEBUG_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$debug$ref(KotlinLoggingConfiguration_getInstance().d4r_1));
  };
  protoOf(KLoggerJS).h4r = function (msg) {
    var tmp = KotlinLoggingLevel_INFO_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$info$ref(KotlinLoggingConfiguration_getInstance().d4r_1));
  };
  protoOf(KLoggerJS).i4r = function (msg) {
    var tmp = KotlinLoggingLevel_WARN_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$warn$ref(KotlinLoggingConfiguration_getInstance().d4r_1));
  };
  protoOf(KLoggerJS).j4r = function (msg) {
    var tmp = KotlinLoggingLevel_ERROR_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$error$ref(KotlinLoggingConfiguration_getInstance().d4r_1));
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = KotlinLoggingLevel_DEBUG_getInstance;
  _.$_$.b = KotlinLoggingConfiguration_getInstance;
  _.$_$.c = KotlinLogging_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-logging-js-ir.js.map
