(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-legacy', 'kotlin-react-core', 'react', 'kotlinx-html-js', 'kotlin-js', 'kotlin-extensions', 'react-dom', 'react-dom/server'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-legacy'), require('kotlin-react-core'), require('react'), require('kotlinx-html-js'), require('kotlin-js'), require('kotlin-extensions'), require('react-dom'), require('react-dom/server'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    if (typeof this['kotlin-react-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'kotlin-react-legacy' was not found. Please, check whether 'kotlin-react-legacy' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    if (typeof this['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    if (typeof this['react-dom/server'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom-legacy'. Its dependency 'react-dom/server' was not found. Please, check whether 'react-dom/server' is loaded prior to 'kotlin-react-dom-legacy'.");
    }
    root['kotlin-react-dom-legacy'] = factory(typeof this['kotlin-react-dom-legacy'] === 'undefined' ? {} : this['kotlin-react-dom-legacy'], kotlin, this['kotlin-react-legacy'], this['kotlin-react-core'], react, this['kotlinx-html-js'], this['kotlin-js'], this['kotlin-extensions'], this['react-dom'], this['react-dom/server']);
  }
}(this, function (_, Kotlin, $module$kotlin_react_legacy, $module$kotlin_react_core, $module$react, $module$kotlinx_html_js, $module$kotlin_js, $module$kotlin_extensions, $module$react_dom, $module$react_dom_server) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var createElement = $module$react.createElement;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RBuilder = $module$kotlin_react_legacy.react.RBuilder;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var RBuilderImpl = $module$kotlin_react_legacy.react.RBuilderImpl;
  var equals = Kotlin.equals;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unsafe = $module$kotlinx_html_js.kotlinx.html.Unsafe;
  var Unit = Kotlin.kotlin.Unit;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var hashCode = Kotlin.hashCode;
  var wrapFunction = Kotlin.wrapFunction;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var createElement_0 = $module$kotlin_react_legacy.react.createElement_38u3nc$;
  var render = $module$react_dom.render;
  RDOMBuilderImpl.prototype = Object.create(RBuilderImpl.prototype);
  RDOMBuilderImpl.prototype.constructor = RDOMBuilderImpl;
  function RDOMBuilder() {
    RDOMBuilder$Companion_getInstance();
  }
  RDOMBuilder.prototype.get_g0n3bx$ = function ($receiver, name) {
    return this.domProps[name];
  };
  RDOMBuilder.prototype.set_hpg2xa$ = function ($receiver, name, value) {
    this.domProps[name] = value;
  };
  RDOMBuilder.prototype.get_defaultChecked_a2ovwx$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.get_g0n3bx$($receiver, 'defaultChecked')) != null ? tmp$ : false;
  };
  RDOMBuilder.prototype.set_defaultChecked_47da7g$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'defaultChecked', value);
  };
  RDOMBuilder.prototype.get_values_sktobr$ = function ($receiver) {
    var tmp$;
    return ((tmp$ = this.get_g0n3bx$($receiver, 'value')) != null ? tmp$ : []).toSet();
  };
  RDOMBuilder.prototype.set_values_d8zj82$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'value', copyToArray(value));
  };
  RDOMBuilder.prototype.get_value_sktobr$ = function ($receiver) {
    return this.get_g0n3bx$($receiver, 'value');
  };
  RDOMBuilder.prototype.set_value_g9clh3$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'value', value);
  };
  Object.defineProperty(RDOMBuilder.prototype, 'key', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    this.domProps.key = value;
  }});
  Object.defineProperty(RDOMBuilder.prototype, 'ref', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    this.domProps.ref = value;
  }});
  RDOMBuilder.prototype.create = function () {
    return createElement.apply(null, [this.attrs.tagName, this.domProps].concat(copyToArray(this.childList)));
  };
  function RDOMBuilder$Companion() {
    RDOMBuilder$Companion_instance = this;
  }
  RDOMBuilder$Companion.prototype.invoke_f6ihu2$ = function (factory) {
    return new RDOMBuilderImpl(factory);
  };
  RDOMBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var RDOMBuilder$Companion_instance = null;
  function RDOMBuilder$Companion_getInstance() {
    if (RDOMBuilder$Companion_instance === null) {
      new RDOMBuilder$Companion();
    }
    return RDOMBuilder$Companion_instance;
  }
  RDOMBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RDOMBuilder', interfaces: [RBuilder]};
  function RDOMBuilderImpl(factory) {
    RBuilderImpl.call(this);
    this.consumer_pncnru$_0 = new RDOMBuilderImpl$consumer$ObjectLiteral(this);
    this.attrs_45o9rq$_0 = factory(this.consumer);
    this.domProps_fsxk8i$_0 = {};
    var $receiver = this.attrs.attributesEntries;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(element.key, jsStyleMarker))
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      setProp(this, element_0.key, element_0.value);
    }
    var jsStyle = get_jsStyle(this.attrs);
    if (jsStyle != undefined) {
      setProp(this, 'style', jsStyle);
    }
  }
  Object.defineProperty(RDOMBuilderImpl.prototype, 'consumer', {configurable: true, get: function () {
    return this.consumer_pncnru$_0;
  }});
  Object.defineProperty(RDOMBuilderImpl.prototype, 'attrs', {configurable: true, get: function () {
    return this.attrs_45o9rq$_0;
  }});
  Object.defineProperty(RDOMBuilderImpl.prototype, 'domProps', {configurable: true, get: function () {
    return this.domProps_fsxk8i$_0;
  }});
  function RDOMBuilderImpl$consumer$ObjectLiteral(this$RDOMBuilderImpl) {
    this.this$RDOMBuilderImpl = this$RDOMBuilderImpl;
  }
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    if (equals(attribute, jsStyleMarker)) {
      setProp(this.this$RDOMBuilderImpl, 'style', get_jsStyle(this.this$RDOMBuilderImpl.attrs));
    } else {
      setProp(this.this$RDOMBuilderImpl, attribute, value);
    }
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagComment_6bul2c$ = function (content) {
    throw IllegalStateException_init('Comments are not supported');
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagContent_6bul2c$ = function (content) {
    this.this$RDOMBuilderImpl.unaryPlus_pdl1vz$(content.toString());
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.this$RDOMBuilderImpl.unaryPlus_m8hz4t$(entity.text);
  };
  function RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(closure$sb) {
    this.closure$sb = closure$sb;
  }
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.closure$sb.append_pdl1vj$($receiver);
  };
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Unsafe]};
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var sb = StringBuilder_init();
    block(new RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(sb));
    var tmp$ = this.this$RDOMBuilderImpl.domProps;
    var $receiver = {};
    $receiver.__html = sb.toString();
    tmp$.dangerouslySetInnerHTML = $receiver;
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagStart_tkgjla$ = function (tag) {
    throw IllegalStateException_init("Don't nest tags inside props block");
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagEnd_tkgjla$ = function (tag) {
    throw IllegalStateException_init("Don't nest tags inside props block");
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagEvent_j30qsv$ = function (tag, event, value) {
    setProp(this.this$RDOMBuilderImpl, event, value);
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.finalize = function () {
    return Unit;
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [TagConsumer]};
  RDOMBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'RDOMBuilderImpl', interfaces: [RBuilderImpl, RDOMBuilder]};
  function setProp($receiver, attribute, value) {
    var key = fixAttributeName(attribute);
    $receiver.domProps[key] = value;
  }
  var events;
  var attrsMap;
  function fixAttributeName(event) {
    var tmp$;
    return (tmp$ = attrsMap.get_11rb$(event)) != null ? tmp$ : event;
  }
  function StringAttr() {
    StringAttr_instance = this;
  }
  StringAttr.prototype.getValue_pt3q5s$ = function (thisRef, property) {
    var tmp$;
    return (tmp$ = thisRef.attributes.get_11rb$(property.callableName)) != null ? tmp$ : '';
  };
  StringAttr.prototype.setValue_wi26v6$ = function (thisRef, property, value) {
    var $receiver = thisRef.attributes;
    var key = property.callableName;
    $receiver.put_xwzc9p$(key, value);
  };
  StringAttr.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StringAttr', interfaces: []};
  var StringAttr_instance = null;
  function StringAttr_getInstance() {
    if (StringAttr_instance === null) {
      new StringAttr();
    }
    return StringAttr_instance;
  }
  var key;
  var key_metadata = new PropertyMetadata('key');
  var defaultValue;
  var defaultValue_metadata = new PropertyMetadata('defaultValue');
  var defaultValue_0;
  var defaultValue_metadata_0 = new PropertyMetadata('defaultValue');
  var value;
  var value_metadata = new PropertyMetadata('value');
  function get_jsStyle($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver[jsStyleMarker]) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = {};
      tmp$_0 = $receiver_0;
    }
    var value = tmp$_0;
    set_jsStyle($receiver, value);
    return value;
  }
  function set_jsStyle($receiver, value) {
    $receiver[jsStyleMarker] = value;
    var $receiver_0 = $receiver.attributes;
    var key = jsStyleMarker;
    var value_0 = hashCode(value).toString();
    $receiver_0.put_xwzc9p$(key, value_0);
  }
  var jsStyleMarker;
  function render$lambda() {
    return Unit;
  }
  function render_0(container, callback, handler) {
    if (callback === void 0)
      callback = render$lambda;
    render(createElement_0(handler), container, callback);
  }
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  $$importsForInline$$['kotlin-react-legacy'] = $module$kotlin_react_legacy;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  Object.defineProperty(RDOMBuilder, 'Companion', {get: RDOMBuilder$Companion_getInstance});
  package$dom.RDOMBuilder = RDOMBuilder;
  $$importsForInline$$['kotlin-js'] = $module$kotlin_js;
  package$dom.RDOMBuilderImpl = RDOMBuilderImpl;
  package$dom.setProp_v86kls$ = setProp;
  package$dom.fixAttributeName_61zpoe$ = fixAttributeName;
  Object.defineProperty(package$dom, 'StringAttr', {get: StringAttr_getInstance});
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$dom.get_jsStyle_6s7ubj$ = get_jsStyle;
  package$dom.set_jsStyle_uekstc$ = set_jsStyle;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$dom.render_9jwdg9$ = render_0;
  RDOMBuilder.prototype.child_up9nw1$ = RBuilder.prototype.child_up9nw1$;
  RDOMBuilder.prototype.child_1mw94g$$default = RBuilder.prototype.child_1mw94g$$default;
  RDOMBuilder.prototype.child_30b5ua$ = RBuilder.prototype.child_30b5ua$;
  RDOMBuilder.prototype.children_w8hwhj$ = RBuilder.prototype.children_w8hwhj$;
  RDOMBuilder.prototype.invoke_c0v1gl$ = RBuilder.prototype.invoke_c0v1gl$;
  RDOMBuilder.prototype.invoke_r7bapy$ = RBuilder.prototype.invoke_r7bapy$;
  RDOMBuilder.prototype.invoke_qk0v40$ = RBuilder.prototype.invoke_qk0v40$;
  RDOMBuilder.prototype.invoke_snhqu5$ = RBuilder.prototype.invoke_snhqu5$;
  RDOMBuilder.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RDOMBuilder.prototype.unaryPlus_m8hz4t$ = RBuilder.prototype.unaryPlus_m8hz4t$;
  RDOMBuilder.prototype.child_1mw94g$ = RBuilder.prototype.child_1mw94g$;
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  RDOMBuilderImpl.prototype.get_g0n3bx$ = RDOMBuilder.prototype.get_g0n3bx$;
  RDOMBuilderImpl.prototype.set_hpg2xa$ = RDOMBuilder.prototype.set_hpg2xa$;
  RDOMBuilderImpl.prototype.get_defaultChecked_a2ovwx$ = RDOMBuilder.prototype.get_defaultChecked_a2ovwx$;
  RDOMBuilderImpl.prototype.set_defaultChecked_47da7g$ = RDOMBuilder.prototype.set_defaultChecked_47da7g$;
  RDOMBuilderImpl.prototype.get_values_sktobr$ = RDOMBuilder.prototype.get_values_sktobr$;
  RDOMBuilderImpl.prototype.set_values_d8zj82$ = RDOMBuilder.prototype.set_values_d8zj82$;
  RDOMBuilderImpl.prototype.get_value_sktobr$ = RDOMBuilder.prototype.get_value_sktobr$;
  RDOMBuilderImpl.prototype.set_value_g9clh3$ = RDOMBuilder.prototype.set_value_g9clh3$;
  Object.defineProperty(RDOMBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'key'));
  Object.defineProperty(RDOMBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'ref'));
  RDOMBuilderImpl.prototype.create = RDOMBuilder.prototype.create;
  RDOMBuilderImpl.prototype.child_up9nw1$ = RDOMBuilder.prototype.child_up9nw1$;
  RDOMBuilderImpl.prototype.child_1mw94g$$default = RDOMBuilder.prototype.child_1mw94g$$default;
  RDOMBuilderImpl.prototype.child_30b5ua$ = RDOMBuilder.prototype.child_30b5ua$;
  RDOMBuilderImpl.prototype.children_w8hwhj$ = RDOMBuilder.prototype.children_w8hwhj$;
  RDOMBuilderImpl.prototype.invoke_c0v1gl$ = RDOMBuilder.prototype.invoke_c0v1gl$;
  RDOMBuilderImpl.prototype.invoke_r7bapy$ = RDOMBuilder.prototype.invoke_r7bapy$;
  RDOMBuilderImpl.prototype.invoke_qk0v40$ = RDOMBuilder.prototype.invoke_qk0v40$;
  RDOMBuilderImpl.prototype.invoke_snhqu5$ = RDOMBuilder.prototype.invoke_snhqu5$;
  RDOMBuilderImpl.prototype.unaryPlus_pdl1vz$ = RDOMBuilder.prototype.unaryPlus_pdl1vz$;
  RDOMBuilderImpl.prototype.unaryPlus_m8hz4t$ = RDOMBuilder.prototype.unaryPlus_m8hz4t$;
  RDOMBuilderImpl.prototype.child_1mw94g$ = RDOMBuilder.prototype.child_1mw94g$;
  events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onInvalid', 'onReset', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onPointerDown', 'onPointerMove', 'onPointerUp', 'onPointerCancel', 'onGotPointerCapture', 'onLostPointerCapture', 'onPointerEnter', 'onPointerLeave', 'onPointerOver', 'onPointerOut', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'onToggle', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'controlsList', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
  var $receiver = events;
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init(capacity);
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    destination.put_xwzc9p$(element.toLowerCase(), element);
  }
  var $receiver_0 = toMutableMap(destination);
  $receiver_0.put_xwzc9p$('class', 'className');
  $receiver_0.put_xwzc9p$('ondblclick', 'onDoubleClick');
  attrsMap = $receiver_0;
  key = StringAttr_getInstance();
  defaultValue = StringAttr_getInstance();
  defaultValue_0 = StringAttr_getInstance();
  value = StringAttr_getInstance();
  jsStyleMarker = '$style$';
  return _;
}));

//# sourceMappingURL=kotlin-react-dom-legacy.js.map
