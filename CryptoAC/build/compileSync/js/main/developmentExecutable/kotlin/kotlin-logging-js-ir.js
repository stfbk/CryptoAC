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
  var toString = kotlin_kotlin.$_$.jh;
  var Exception = kotlin_kotlin.$_$.vf;
  var protoOf = kotlin_kotlin.$_$.sb;
  var interfaceMeta = kotlin_kotlin.$_$.va;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var objectMeta = kotlin_kotlin.$_$.rb;
  var equals = kotlin_kotlin.$_$.na;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var THROW_ISE = kotlin_kotlin.$_$.gg;
  var Enum = kotlin_kotlin.$_$.tf;
  var classMeta = kotlin_kotlin.$_$.ka;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Appender, 'Appender', interfaceMeta);
  setMetadataFor(ConsoleOutputAppender, 'ConsoleOutputAppender', objectMeta, VOID, [Appender]);
  setMetadataFor(Formatter, 'Formatter', interfaceMeta);
  setMetadataFor(DefaultMessageFormatter, 'DefaultMessageFormatter', objectMeta, VOID, [Formatter]);
  setMetadataFor(KLogger, 'KLogger', interfaceMeta);
  setMetadataFor(KotlinLogging, 'KotlinLogging', objectMeta);
  setMetadataFor(KotlinLoggingConfiguration, 'KotlinLoggingConfiguration', objectMeta);
  setMetadataFor(KotlinLoggingLevel, 'KotlinLoggingLevel', classMeta, Enum);
  setMetadataFor(Marker, 'Marker', interfaceMeta);
  setMetadataFor(ErrorMessageProducer, 'ErrorMessageProducer', objectMeta);
  setMetadataFor(KLoggerJS, 'KLoggerJS', classMeta, VOID, [KLogger]);
  //endregion
  function toStringSafe(_this__u8e3s4) {
    var tmp;
    try {
      tmp = toString(_this__u8e3s4());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = ErrorMessageProducer_getInstance().getErrorLog_d281an_k$(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function Appender() {
  }
  function ConsoleOutputAppender() {
    ConsoleOutputAppender_instance = this;
  }
  protoOf(ConsoleOutputAppender).trace_xrx097_k$ = function (message) {
    return console.log(message);
  };
  protoOf(ConsoleOutputAppender).debug_dvjxxf_k$ = function (message) {
    return console.log(message);
  };
  protoOf(ConsoleOutputAppender).info_s8pefy_k$ = function (message) {
    return console.info(message);
  };
  protoOf(ConsoleOutputAppender).warn_ol5gp6_k$ = function (message) {
    return console.warn(message);
  };
  protoOf(ConsoleOutputAppender).error_nind54_k$ = function (message) {
    return console.error(message);
  };
  var ConsoleOutputAppender_instance;
  function ConsoleOutputAppender_getInstance() {
    if (ConsoleOutputAppender_instance == null)
      new ConsoleOutputAppender();
    return ConsoleOutputAppender_instance;
  }
  function throwableToString(_this__u8e3s4, $this) {
    if (_this__u8e3s4 == null) {
      return '';
    }
    var msg = '';
    var current = _this__u8e3s4;
    while (!(current == null) ? !equals(current.cause, current) : false) {
      msg = msg + (", Caused by: '" + current.message + "'");
      current = current.cause;
    }
    return msg;
  }
  function DefaultMessageFormatter() {
    DefaultMessageFormatter_instance = this;
  }
  protoOf(DefaultMessageFormatter).formatMessage_4kpj1w_k$ = function (level, loggerName, msg) {
    var tmp = level.get_name_woqyms_k$();
    var tmp$ret$0;
    // Inline function 'mu.internal.toStringSafe' call
    var tmp_0;
    try {
      tmp_0 = toString(msg());
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_1 = ErrorMessageProducer_getInstance().getErrorLog_d281an_k$(e);
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    tmp$ret$0 = tmp_0;
    return tmp + ': [' + loggerName + '] ' + tmp$ret$0;
  };
  protoOf(DefaultMessageFormatter).formatMessage_ixushz_k$ = function (level, loggerName, t, msg) {
    var tmp = level.get_name_woqyms_k$();
    var tmp$ret$0;
    // Inline function 'mu.internal.toStringSafe' call
    var tmp_0;
    try {
      tmp_0 = toString(msg());
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_1 = ErrorMessageProducer_getInstance().getErrorLog_d281an_k$(e);
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    tmp$ret$0 = tmp_0;
    return tmp + ': [' + loggerName + '] ' + tmp$ret$0 + throwableToString(t, this);
  };
  protoOf(DefaultMessageFormatter).formatMessage_g5qziq_k$ = function (level, loggerName, marker, msg) {
    var tmp = level.get_name_woqyms_k$();
    var tmp0_safe_receiver = marker;
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getName_18u48v_k$();
    var tmp$ret$0;
    // Inline function 'mu.internal.toStringSafe' call
    var tmp_1;
    try {
      tmp_1 = toString(msg());
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_2 = ErrorMessageProducer_getInstance().getErrorLog_d281an_k$(e);
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    tmp$ret$0 = tmp_1;
    return tmp + ': [' + loggerName + '] ' + tmp_0 + ' ' + tmp$ret$0;
  };
  protoOf(DefaultMessageFormatter).formatMessage_v3h7zz_k$ = function (level, loggerName, marker, t, msg) {
    var tmp = level.get_name_woqyms_k$();
    var tmp0_safe_receiver = marker;
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getName_18u48v_k$();
    var tmp$ret$0;
    // Inline function 'mu.internal.toStringSafe' call
    var tmp_1;
    try {
      tmp_1 = toString(msg());
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_2 = ErrorMessageProducer_getInstance().getErrorLog_d281an_k$(e);
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    tmp$ret$0 = tmp_1;
    return tmp + ': [' + loggerName + '] ' + tmp_0 + ' ' + tmp$ret$0 + throwableToString(t, this);
  };
  var DefaultMessageFormatter_instance;
  function DefaultMessageFormatter_getInstance() {
    if (DefaultMessageFormatter_instance == null)
      new DefaultMessageFormatter();
    return DefaultMessageFormatter_instance;
  }
  function Formatter() {
  }
  function KLogger() {
  }
  function KotlinLogging() {
    KotlinLogging_instance = this;
  }
  protoOf(KotlinLogging).logger_xf0d0x_k$ = function (func) {
    return new KLoggerJS(func.constructor.name);
  };
  protoOf(KotlinLogging).logger_ourbkf_k$ = function (name) {
    return new KLoggerJS(name);
  };
  var KotlinLogging_instance;
  function KotlinLogging_getInstance() {
    if (KotlinLogging_instance == null)
      new KotlinLogging();
    return KotlinLogging_instance;
  }
  function KotlinLoggingConfiguration() {
    KotlinLoggingConfiguration_instance = this;
    this.LOG_LEVEL_1 = KotlinLoggingLevel_INFO_getInstance();
    this.APPENDER_1 = ConsoleOutputAppender_getInstance();
    this.FORMATTER_1 = DefaultMessageFormatter_getInstance();
  }
  protoOf(KotlinLoggingConfiguration).set_LOG_LEVEL_urdc1k_k$ = function (_set____db54di) {
    this.LOG_LEVEL_1 = _set____db54di;
  };
  protoOf(KotlinLoggingConfiguration).get_LOG_LEVEL_ygxsm8_k$ = function () {
    return this.LOG_LEVEL_1;
  };
  protoOf(KotlinLoggingConfiguration).set_APPENDER_wn39un_k$ = function (_set____db54di) {
    this.APPENDER_1 = _set____db54di;
  };
  protoOf(KotlinLoggingConfiguration).get_APPENDER_ji8sw_k$ = function () {
    return this.APPENDER_1;
  };
  protoOf(KotlinLoggingConfiguration).set_FORMATTER_cvyvet_k$ = function (_set____db54di) {
    this.FORMATTER_1 = _set____db54di;
  };
  protoOf(KotlinLoggingConfiguration).get_FORMATTER_dj1udd_k$ = function () {
    return this.FORMATTER_1;
  };
  var KotlinLoggingConfiguration_instance;
  function KotlinLoggingConfiguration_getInstance() {
    if (KotlinLoggingConfiguration_instance == null)
      new KotlinLoggingConfiguration();
    return KotlinLoggingConfiguration_instance;
  }
  function isLoggingEnabled(_this__u8e3s4) {
    return _this__u8e3s4.get_ordinal_ip24qg_k$() >= KotlinLoggingConfiguration_getInstance().get_LOG_LEVEL_ygxsm8_k$().get_ordinal_ip24qg_k$();
  }
  var KotlinLoggingLevel_TRACE_instance;
  var KotlinLoggingLevel_DEBUG_instance;
  var KotlinLoggingLevel_INFO_instance;
  var KotlinLoggingLevel_WARN_instance;
  var KotlinLoggingLevel_ERROR_instance;
  function values() {
    return [KotlinLoggingLevel_TRACE_getInstance(), KotlinLoggingLevel_DEBUG_getInstance(), KotlinLoggingLevel_INFO_getInstance(), KotlinLoggingLevel_WARN_getInstance(), KotlinLoggingLevel_ERROR_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'TRACE':
        return KotlinLoggingLevel_TRACE_getInstance();
      case 'DEBUG':
        return KotlinLoggingLevel_DEBUG_getInstance();
      case 'INFO':
        return KotlinLoggingLevel_INFO_getInstance();
      case 'WARN':
        return KotlinLoggingLevel_WARN_getInstance();
      case 'ERROR':
        return KotlinLoggingLevel_ERROR_getInstance();
      default:
        KotlinLoggingLevel_initEntries();
        THROW_ISE();
        break;
    }
  }
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
  function KotlinLoggingLevel_TRACE_getInstance() {
    KotlinLoggingLevel_initEntries();
    return KotlinLoggingLevel_TRACE_instance;
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
  function Marker() {
  }
  function ErrorMessageProducer() {
    ErrorMessageProducer_instance = this;
  }
  protoOf(ErrorMessageProducer).getErrorLog_d281an_k$ = function (e) {
    return 'Log message invocation failed: ' + e;
  };
  var ErrorMessageProducer_instance;
  function ErrorMessageProducer_getInstance() {
    if (ErrorMessageProducer_instance == null)
      new ErrorMessageProducer();
    return ErrorMessageProducer_instance;
  }
  function _get_loggerName__rzi5kg($this) {
    return $this.loggerName_1;
  }
  function logIfEnabled(_this__u8e3s4, $this, msg, logFunction) {
    if (isLoggingEnabled(_this__u8e3s4)) {
      logFunction(KotlinLoggingConfiguration_getInstance().get_FORMATTER_dj1udd_k$().formatMessage_4kpj1w_k$(_this__u8e3s4, $this.loggerName_1, msg));
    }
  }
  function logIfEnabled_0(_this__u8e3s4, $this, msg, t, logFunction) {
    if (isLoggingEnabled(_this__u8e3s4)) {
      logFunction(KotlinLoggingConfiguration_getInstance().get_FORMATTER_dj1udd_k$().formatMessage_ixushz_k$(_this__u8e3s4, $this.loggerName_1, t, msg));
    }
  }
  function logIfEnabled_1(_this__u8e3s4, $this, marker, msg, logFunction) {
    if (isLoggingEnabled(_this__u8e3s4)) {
      logFunction(KotlinLoggingConfiguration_getInstance().get_FORMATTER_dj1udd_k$().formatMessage_g5qziq_k$(_this__u8e3s4, $this.loggerName_1, marker, msg));
    }
  }
  function logIfEnabled_2(_this__u8e3s4, $this, marker, msg, t, logFunction) {
    if (isLoggingEnabled(_this__u8e3s4)) {
      logFunction(KotlinLoggingConfiguration_getInstance().get_FORMATTER_dj1udd_k$().formatMessage_v3h7zz_k$(_this__u8e3s4, $this.loggerName_1, marker, t, msg));
    }
  }
  function Appender$trace$ref($boundThis) {
    var l = function (p0) {
      $boundThis.trace_xrx097_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'trace';
    return l;
  }
  function Appender$debug$ref($boundThis) {
    var l = function (p0) {
      $boundThis.debug_dvjxxf_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'debug';
    return l;
  }
  function Appender$info$ref($boundThis) {
    var l = function (p0) {
      $boundThis.info_s8pefy_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'info';
    return l;
  }
  function Appender$warn$ref($boundThis) {
    var l = function (p0) {
      $boundThis.warn_ol5gp6_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'warn';
    return l;
  }
  function Appender$error$ref($boundThis) {
    var l = function (p0) {
      $boundThis.error_nind54_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'error';
    return l;
  }
  function Appender$trace$ref_0($boundThis) {
    var l = function (p0) {
      $boundThis.trace_xrx097_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'trace';
    return l;
  }
  function Appender$debug$ref_0($boundThis) {
    var l = function (p0) {
      $boundThis.debug_dvjxxf_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'debug';
    return l;
  }
  function Appender$info$ref_0($boundThis) {
    var l = function (p0) {
      $boundThis.info_s8pefy_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'info';
    return l;
  }
  function Appender$warn$ref_0($boundThis) {
    var l = function (p0) {
      $boundThis.warn_ol5gp6_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'warn';
    return l;
  }
  function Appender$error$ref_0($boundThis) {
    var l = function (p0) {
      $boundThis.error_nind54_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'error';
    return l;
  }
  function Appender$trace$ref_1($boundThis) {
    var l = function (p0) {
      $boundThis.trace_xrx097_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'trace';
    return l;
  }
  function Appender$debug$ref_1($boundThis) {
    var l = function (p0) {
      $boundThis.debug_dvjxxf_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'debug';
    return l;
  }
  function Appender$info$ref_1($boundThis) {
    var l = function (p0) {
      $boundThis.info_s8pefy_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'info';
    return l;
  }
  function Appender$warn$ref_1($boundThis) {
    var l = function (p0) {
      $boundThis.warn_ol5gp6_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'warn';
    return l;
  }
  function Appender$error$ref_1($boundThis) {
    var l = function (p0) {
      $boundThis.error_nind54_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'error';
    return l;
  }
  function Appender$trace$ref_2($boundThis) {
    var l = function (p0) {
      $boundThis.trace_xrx097_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'trace';
    return l;
  }
  function Appender$debug$ref_2($boundThis) {
    var l = function (p0) {
      $boundThis.debug_dvjxxf_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'debug';
    return l;
  }
  function Appender$info$ref_2($boundThis) {
    var l = function (p0) {
      $boundThis.info_s8pefy_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'info';
    return l;
  }
  function Appender$warn$ref_2($boundThis) {
    var l = function (p0) {
      $boundThis.warn_ol5gp6_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'warn';
    return l;
  }
  function Appender$error$ref_2($boundThis) {
    var l = function (p0) {
      $boundThis.error_nind54_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'error';
    return l;
  }
  function KLoggerJS$entry$lambda($argArray) {
    return function () {
      return 'entry(' + $argArray + ')';
    };
  }
  function Appender$trace$ref_3($boundThis) {
    var l = function (p0) {
      $boundThis.trace_xrx097_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'trace';
    return l;
  }
  function KLoggerJS$exit$lambda() {
    return 'exit()';
  }
  function Appender$trace$ref_4($boundThis) {
    var l = function (p0) {
      $boundThis.trace_xrx097_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'trace';
    return l;
  }
  function KLoggerJS$exit$lambda_0($result) {
    return function () {
      return 'exit(' + $result + ')';
    };
  }
  function Appender$trace$ref_5($boundThis) {
    var l = function (p0) {
      $boundThis.trace_xrx097_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'trace';
    return l;
  }
  function KLoggerJS$throwing$lambda($throwable) {
    return function () {
      return 'throwing(' + $throwable;
    };
  }
  function Appender$error$ref_3($boundThis) {
    var l = function (p0) {
      $boundThis.error_nind54_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'error';
    return l;
  }
  function KLoggerJS$catching$lambda($throwable) {
    return function () {
      return 'catching(' + $throwable;
    };
  }
  function Appender$error$ref_4($boundThis) {
    var l = function (p0) {
      $boundThis.error_nind54_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'error';
    return l;
  }
  function KLoggerJS(loggerName) {
    this.loggerName_1 = loggerName;
  }
  protoOf(KLoggerJS).trace_rfndc4_k$ = function (msg) {
    var tmp = KotlinLoggingLevel_TRACE_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$trace$ref(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).debug_92kje6_k$ = function (msg) {
    var tmp = KotlinLoggingLevel_DEBUG_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$debug$ref(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).info_xkjp5f_k$ = function (msg) {
    var tmp = KotlinLoggingLevel_INFO_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$info$ref(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).warn_175i2t_k$ = function (msg) {
    var tmp = KotlinLoggingLevel_WARN_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$warn$ref(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).error_55fhzb_k$ = function (msg) {
    var tmp = KotlinLoggingLevel_ERROR_getInstance();
    return logIfEnabled(tmp, this, msg, Appender$error$ref(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).trace_e5yfin_k$ = function (t, msg) {
    var tmp = KotlinLoggingLevel_TRACE_getInstance();
    return logIfEnabled_0(tmp, this, msg, t, Appender$trace$ref_0(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).debug_kukpa9_k$ = function (t, msg) {
    var tmp = KotlinLoggingLevel_DEBUG_getInstance();
    return logIfEnabled_0(tmp, this, msg, t, Appender$debug$ref_0(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).info_s0pfmi_k$ = function (t, msg) {
    var tmp = KotlinLoggingLevel_INFO_getInstance();
    return logIfEnabled_0(tmp, this, msg, t, Appender$info$ref_0(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).warn_wx7bxu_k$ = function (t, msg) {
    var tmp = KotlinLoggingLevel_WARN_getInstance();
    return logIfEnabled_0(tmp, this, msg, t, Appender$warn$ref_0(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).error_cr5ltg_k$ = function (t, msg) {
    var tmp = KotlinLoggingLevel_ERROR_getInstance();
    return logIfEnabled_0(tmp, this, msg, t, Appender$error$ref_0(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).trace_qa7vmw_k$ = function (marker, msg) {
    var tmp = KotlinLoggingLevel_TRACE_getInstance();
    return logIfEnabled_1(tmp, this, marker, msg, Appender$trace$ref_1(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).debug_dvw4ay_k$ = function (marker, msg) {
    var tmp = KotlinLoggingLevel_DEBUG_getInstance();
    return logIfEnabled_1(tmp, this, marker, msg, Appender$debug$ref_1(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).info_6jfy29_k$ = function (marker, msg) {
    var tmp = KotlinLoggingLevel_INFO_getInstance();
    return logIfEnabled_1(tmp, this, marker, msg, Appender$info$ref_1(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).warn_2ak06v_k$ = function (marker, msg) {
    var tmp = KotlinLoggingLevel_WARN_getInstance();
    return logIfEnabled_1(tmp, this, marker, msg, Appender$warn$ref_1(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).error_k3g4ol_k$ = function (marker, msg) {
    var tmp = KotlinLoggingLevel_ERROR_getInstance();
    return logIfEnabled_1(tmp, this, marker, msg, Appender$error$ref_1(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).trace_548c05_k$ = function (marker, t, msg) {
    var tmp = KotlinLoggingLevel_TRACE_getInstance();
    return logIfEnabled_2(tmp, this, marker, msg, t, Appender$trace$ref_2(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).debug_yzywax_k$ = function (marker, t, msg) {
    var tmp = KotlinLoggingLevel_DEBUG_getInstance();
    return logIfEnabled_2(tmp, this, marker, msg, t, Appender$debug$ref_2(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).info_7srvek_k$ = function (marker, t, msg) {
    var tmp = KotlinLoggingLevel_INFO_getInstance();
    return logIfEnabled_2(tmp, this, marker, msg, t, Appender$info$ref_2(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).warn_smwo4_k$ = function (marker, t, msg) {
    var tmp = KotlinLoggingLevel_WARN_getInstance();
    return logIfEnabled_2(tmp, this, marker, msg, t, Appender$warn$ref_2(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).error_8mwu1u_k$ = function (marker, t, msg) {
    var tmp = KotlinLoggingLevel_ERROR_getInstance();
    return logIfEnabled_2(tmp, this, marker, msg, t, Appender$error$ref_2(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).entry_q90fvm_k$ = function (argArray) {
    var tmp = KotlinLoggingLevel_TRACE_getInstance();
    var tmp_0 = KLoggerJS$entry$lambda(argArray);
    logIfEnabled(tmp, this, tmp_0, Appender$trace$ref_3(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).exit_v7xagj_k$ = function () {
    var tmp = KotlinLoggingLevel_TRACE_getInstance();
    var tmp_0 = KLoggerJS$exit$lambda;
    logIfEnabled(tmp, this, tmp_0, Appender$trace$ref_4(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
  };
  protoOf(KLoggerJS).exit_80a4bt_k$ = function (result) {
    var tmp = KotlinLoggingLevel_TRACE_getInstance();
    var tmp_0 = KLoggerJS$exit$lambda_0(result);
    logIfEnabled(tmp, this, tmp_0, Appender$trace$ref_5(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
    return result;
  };
  protoOf(KLoggerJS).throwing_wiz3fg_k$ = function (throwable) {
    var tmp = KotlinLoggingLevel_ERROR_getInstance();
    var tmp_0 = KLoggerJS$throwing$lambda(throwable);
    logIfEnabled_0(tmp, this, tmp_0, throwable, Appender$error$ref_3(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
    return throwable;
  };
  protoOf(KLoggerJS).catching_3yfcm6_k$ = function (throwable) {
    var tmp = KotlinLoggingLevel_ERROR_getInstance();
    var tmp_0 = KLoggerJS$catching$lambda(throwable);
    logIfEnabled_0(tmp, this, tmp_0, throwable, Appender$error$ref_4(KotlinLoggingConfiguration_getInstance().get_APPENDER_ji8sw_k$()));
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
