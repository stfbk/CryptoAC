(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    root['kotlin-react-dom-legacy'] = factory(typeof this['kotlin-react-dom-legacy'] === 'undefined' ? {} : this['kotlin-react-dom-legacy'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.sb;
  var objectMeta = kotlin_kotlin.$_$.rb;
  var VOID = kotlin_kotlin.$_$.lh;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var KMutableProperty1 = kotlin_kotlin.$_$.pc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sa;
  var listOf = kotlin_kotlin.$_$.v7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b6;
  var mapCapacity = kotlin_kotlin.$_$.w7;
  var coerceAtLeast = kotlin_kotlin.$_$.cc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var toMutableMap = kotlin_kotlin.$_$.x8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(StringAttr, 'StringAttr', objectMeta);
  //endregion
  function get_events() {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return events;
  }
  var events;
  function get_attrsMap() {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return attrsMap;
  }
  var attrsMap;
  function set_key(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return key$delegate.setValue_t2nmzp_k$(_this__u8e3s4, key$factory(), _set____db54di);
  }
  function get_key(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return key$delegate.getValue_yowppd_k$(_this__u8e3s4, key$factory_0());
  }
  var key$delegate;
  function set_defaultValue(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return defaultValue$delegate.setValue_t2nmzp_k$(_this__u8e3s4, defaultValue$factory(), _set____db54di);
  }
  function get_defaultValue(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return defaultValue$delegate.getValue_yowppd_k$(_this__u8e3s4, defaultValue$factory_0());
  }
  var defaultValue$delegate;
  function set_defaultValue_0(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return defaultValue$delegate_0.setValue_t2nmzp_k$(_this__u8e3s4, defaultValue$factory_1(), _set____db54di);
  }
  function get_defaultValue_0(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return defaultValue$delegate_0.getValue_yowppd_k$(_this__u8e3s4, defaultValue$factory_2());
  }
  var defaultValue$delegate_0;
  function set_value(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return value$delegate.setValue_t2nmzp_k$(_this__u8e3s4, value$factory(), _set____db54di);
  }
  function get_value(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return value$delegate.getValue_yowppd_k$(_this__u8e3s4, value$factory_0());
  }
  var value$delegate;
  function StringAttr() {
    StringAttr_instance = this;
  }
  protoOf(StringAttr).getValue_yowppd_k$ = function (thisRef, property) {
    var tmp0_elvis_lhs = thisRef.get_attributes_dgqof4_k$().get_1mhr4y_k$(property.callableName);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(StringAttr).setValue_t2nmzp_k$ = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = thisRef.get_attributes_dgqof4_k$();
    var tmp1_set = property.callableName;
    tmp0_set.put_3mhbri_k$(tmp1_set, value);
  };
  var StringAttr_instance;
  function StringAttr_getInstance() {
    if (StringAttr_instance == null)
      new StringAttr();
    return StringAttr_instance;
  }
  function key$factory() {
    return getPropertyCallableRef('key', 1, KMutableProperty1, function (receiver) {
      return get_key(receiver);
    }, function (receiver, value) {
      return set_key(receiver, value);
    });
  }
  function key$factory_0() {
    return getPropertyCallableRef('key', 1, KMutableProperty1, function (receiver) {
      return get_key(receiver);
    }, function (receiver, value) {
      return set_key(receiver, value);
    });
  }
  function defaultValue$factory() {
    return getPropertyCallableRef('defaultValue', 1, KMutableProperty1, function (receiver) {
      return get_defaultValue(receiver);
    }, function (receiver, value) {
      return set_defaultValue(receiver, value);
    });
  }
  function defaultValue$factory_0() {
    return getPropertyCallableRef('defaultValue', 1, KMutableProperty1, function (receiver) {
      return get_defaultValue(receiver);
    }, function (receiver, value) {
      return set_defaultValue(receiver, value);
    });
  }
  function defaultValue$factory_1() {
    return getPropertyCallableRef('defaultValue', 1, KMutableProperty1, function (receiver) {
      return get_defaultValue_0(receiver);
    }, function (receiver, value) {
      return set_defaultValue_0(receiver, value);
    });
  }
  function defaultValue$factory_2() {
    return getPropertyCallableRef('defaultValue', 1, KMutableProperty1, function (receiver) {
      return get_defaultValue_0(receiver);
    }, function (receiver, value) {
      return set_defaultValue_0(receiver, value);
    });
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return get_value(receiver);
    }, function (receiver, value) {
      return set_value(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return get_value(receiver);
    }, function (receiver, value) {
      return set_value(receiver, value);
    });
  }
  var properties_initialized_ReactDOMAttributes_kt_vhbiv0;
  function _init_properties_ReactDOMAttributes_kt__bydi3e() {
    if (properties_initialized_ReactDOMAttributes_kt_vhbiv0) {
    } else {
      properties_initialized_ReactDOMAttributes_kt_vhbiv0 = true;
      events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onInvalid', 'onReset', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onPointerDown', 'onPointerMove', 'onPointerUp', 'onPointerCancel', 'onGotPointerCapture', 'onLostPointerCapture', 'onPointerEnter', 'onPointerLeave', 'onPointerOver', 'onPointerOut', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'onToggle', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'controlsList', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
      var tmp$ret$5;
      // Inline function 'kotlin.apply' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.associateBy' call
      var tmp1_associateBy = get_events();
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp1_associateBy, 10)), 16);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
      var tmp0_iterator = tmp1_associateBy.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'react.dom.attrsMap.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.text.lowercase' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = element;
        tmp$ret$1 = tmp$ret$0.toLowerCase();
        tmp$ret$2 = tmp$ret$1;
        tmp0_associateByTo.put_3mhbri_k$(tmp$ret$2, element);
      }
      tmp$ret$3 = tmp0_associateByTo;
      tmp$ret$4 = tmp$ret$3;
      var tmp2_apply = toMutableMap(tmp$ret$4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'react.dom.attrsMap.<anonymous>' call
      tmp2_apply.put_3mhbri_k$('class', 'className');
      tmp2_apply.put_3mhbri_k$('ondblclick', 'onDoubleClick');
      tmp$ret$5 = tmp2_apply;
      attrsMap = tmp$ret$5;
      key$delegate = StringAttr_getInstance();
      defaultValue$delegate = StringAttr_getInstance();
      defaultValue$delegate_0 = StringAttr_getInstance();
      value$delegate = StringAttr_getInstance();
    }
  }
  return _;
}));

//# sourceMappingURL=kotlin-react-dom-legacy.js.map
