(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react', 'react', 'kotlinx-html-js', 'kotlin-extensions', 'react-dom', 'react-dom/server'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react'), require('react'), require('kotlinx-html-js'), require('kotlin-extensions'), require('react-dom'), require('react-dom/server'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['react-dom/server'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'react-dom/server' was not found. Please, check whether 'react-dom/server' is loaded prior to 'kotlin-react-dom'.");
    }root['kotlin-react-dom'] = factory(typeof this['kotlin-react-dom'] === 'undefined' ? {} : this['kotlin-react-dom'], kotlin, this['kotlin-react'], react, this['kotlinx-html-js'], this['kotlin-extensions'], this['react-dom'], this['react-dom/server']);
  }
}(this, function (_, Kotlin, $module$kotlin_react, $module$react, $module$kotlinx_html_js, $module$kotlin_extensions, $module$react_dom, $module$react_dom_server) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var createElement = $module$react.createElement;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RBuilder = $module$kotlin_react.react.RBuilder;
  var RBuilderImpl = $module$kotlin_react.react.RBuilderImpl;
  var equals = Kotlin.equals;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unsafe = $module$kotlinx_html_js.kotlinx.html.Unsafe;
  var Unit = Kotlin.kotlin.Unit;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var createElement_0 = $module$kotlin_react.react.createElement_zepujl$;
  var render = $module$react_dom.render;
  var createRoot = $module$react_dom.createRoot;
  var hydrate = $module$react_dom.hydrate;
  var createPortal = $module$react_dom.createPortal;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var hashCode = Kotlin.hashCode;
  var wrapFunction = Kotlin.wrapFunction;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var rawRenderToString = $module$react_dom_server.renderToString;
  var rawRenderToStaticMarkup = $module$react_dom_server.renderToStaticMarkup;
  RDOMBuilderImpl.prototype = Object.create(RBuilderImpl.prototype);
  RDOMBuilderImpl.prototype.constructor = RDOMBuilderImpl;
  var get_ariaActiveDescendant = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaActiveDescendant_jwhqjp$', function ($receiver) {
    return $receiver['aria-activedescendant'];
  });
  var set_ariaActiveDescendant = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaActiveDescendant_khicw7$', function ($receiver, value) {
    $receiver['aria-activedescendant'] = value;
  });
  var get_ariaAtomic = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaAtomic_jwhqjp$', function ($receiver) {
    return $receiver['aria-atomic'];
  });
  var set_ariaAtomic = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaAtomic_yn11c0$', function ($receiver, value) {
    $receiver['aria-atomic'] = value;
  });
  var get_ariaAutoComplete = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaAutoComplete_jwhqjp$', function ($receiver) {
    return $receiver['aria-autocomplete'];
  });
  var set_ariaAutoComplete = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaAutoComplete_i2msty$', function ($receiver, value) {
    $receiver['aria-autocomplete'] = value;
  });
  var get_ariaBusy = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaBusy_jwhqjp$', function ($receiver) {
    return $receiver['aria-busy'];
  });
  var set_ariaBusy = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaBusy_yn11c0$', function ($receiver, value) {
    $receiver['aria-busy'] = value;
  });
  var get_ariaChecked = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaChecked_jwhqjp$', function ($receiver) {
    return $receiver['aria-checked'];
  });
  var set_ariaChecked = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaChecked_eamw7b$', function ($receiver, value) {
    $receiver['aria-checked'] = value;
  });
  var get_ariaColCount = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaColCount_jwhqjp$', function ($receiver) {
    return $receiver['aria-colcount'];
  });
  var set_ariaColCount = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaColCount_l0htmh$', function ($receiver, value) {
    $receiver['aria-colcount'] = value;
  });
  var get_ariaColIndex = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaColIndex_jwhqjp$', function ($receiver) {
    return $receiver['aria-colindex'];
  });
  var set_ariaColIndex = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaColIndex_l0htmh$', function ($receiver, value) {
    $receiver['aria-colindex'] = value;
  });
  var get_ariaColSpan = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaColSpan_jwhqjp$', function ($receiver) {
    return $receiver['aria-colspan'];
  });
  var set_ariaColSpan = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaColSpan_l0htmh$', function ($receiver, value) {
    $receiver['aria-colspan'] = value;
  });
  var get_ariaControls = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaControls_jwhqjp$', function ($receiver) {
    return $receiver['aria-controls'];
  });
  var set_ariaControls = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaControls_khicw7$', function ($receiver, value) {
    $receiver['aria-controls'] = value;
  });
  var get_ariaCurrent = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaCurrent_jwhqjp$', function ($receiver) {
    return $receiver['aria-current'];
  });
  var set_ariaCurrent = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaCurrent_7xn0s5$', function ($receiver, value) {
    $receiver['aria-current'] = value;
  });
  var get_ariaDescribedBy = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaDescribedBy_jwhqjp$', function ($receiver) {
    return $receiver['aria-describedby'];
  });
  var set_ariaDescribedBy = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaDescribedBy_khicw7$', function ($receiver, value) {
    $receiver['aria-describedby'] = value;
  });
  var get_ariaDetails = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaDetails_jwhqjp$', function ($receiver) {
    return $receiver['aria-details'];
  });
  var set_ariaDetails = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaDetails_khicw7$', function ($receiver, value) {
    $receiver['aria-details'] = value;
  });
  var get_ariaDisabled = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaDisabled_jwhqjp$', function ($receiver) {
    return $receiver['aria-disabled'];
  });
  var set_ariaDisabled = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaDisabled_yn11c0$', function ($receiver, value) {
    $receiver['aria-disabled'] = value;
  });
  var get_ariaDropEffect = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaDropEffect_jwhqjp$', function ($receiver) {
    return $receiver['aria-dropeffect'];
  });
  var set_ariaDropEffect = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaDropEffect_sfm5rm$', function ($receiver, value) {
    $receiver['aria-dropeffect'] = value;
  });
  var get_ariaErrorMessage = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaErrorMessage_jwhqjp$', function ($receiver) {
    return $receiver['aria-errormessage'];
  });
  var set_ariaErrorMessage = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaErrorMessage_khicw7$', function ($receiver, value) {
    $receiver['aria-errormessage'] = value;
  });
  var get_ariaExpanded = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaExpanded_jwhqjp$', function ($receiver) {
    return $receiver['aria-expanded'];
  });
  var set_ariaExpanded = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaExpanded_yn11c0$', function ($receiver, value) {
    $receiver['aria-expanded'] = value;
  });
  var get_ariaFlowTo = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaFlowTo_jwhqjp$', function ($receiver) {
    return $receiver['aria-flowto'];
  });
  var set_ariaFlowTo = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaFlowTo_khicw7$', function ($receiver, value) {
    $receiver['aria-flowto'] = value;
  });
  var get_ariaGrabbed = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaGrabbed_jwhqjp$', function ($receiver) {
    return $receiver['aria-grabbed'];
  });
  var set_ariaGrabbed = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaGrabbed_yn11c0$', function ($receiver, value) {
    $receiver['aria-grabbed'] = value;
  });
  var get_ariaHasPopup = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaHasPopup_jwhqjp$', function ($receiver) {
    return $receiver['aria-haspopup'];
  });
  var set_ariaHasPopup = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaHasPopup_uqke5c$', function ($receiver, value) {
    $receiver['aria-haspopup'] = value;
  });
  var get_ariaHidden = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaHidden_jwhqjp$', function ($receiver) {
    return $receiver['aria-hidden'];
  });
  var set_ariaHidden = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaHidden_yn11c0$', function ($receiver, value) {
    $receiver['aria-hidden'] = value;
  });
  var get_ariaInvalid = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaInvalid_jwhqjp$', function ($receiver) {
    return $receiver['aria-invalid'];
  });
  var set_ariaInvalid = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaInvalid_5u7qh5$', function ($receiver, value) {
    $receiver['aria-invalid'] = value;
  });
  var get_ariaKeyShortcuts = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaKeyShortcuts_jwhqjp$', function ($receiver) {
    return $receiver['aria-keyshortcuts'];
  });
  var set_ariaKeyShortcuts = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaKeyShortcuts_khicw7$', function ($receiver, value) {
    $receiver['aria-keyshortcuts'] = value;
  });
  var get_ariaLabel = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaLabel_jwhqjp$', function ($receiver) {
    return $receiver['aria-label'];
  });
  var set_ariaLabel = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaLabel_khicw7$', function ($receiver, value) {
    $receiver['aria-label'] = value;
  });
  var get_ariaLabelledBy = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaLabelledBy_jwhqjp$', function ($receiver) {
    return $receiver['aria-labelledby'];
  });
  var set_ariaLabelledBy = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaLabelledBy_khicw7$', function ($receiver, value) {
    $receiver['aria-labelledby'] = value;
  });
  var get_ariaLevel = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaLevel_jwhqjp$', function ($receiver) {
    return $receiver['aria-level'];
  });
  var set_ariaLevel = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaLevel_l0htmh$', function ($receiver, value) {
    $receiver['aria-level'] = value;
  });
  var get_ariaLive = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaLive_jwhqjp$', function ($receiver) {
    return $receiver['aria-live'];
  });
  var set_ariaLive = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaLive_qrgxga$', function ($receiver, value) {
    $receiver['aria-live'] = value;
  });
  var get_ariaModal = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaModal_jwhqjp$', function ($receiver) {
    return $receiver['aria-modal'];
  });
  var set_ariaModal = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaModal_yn11c0$', function ($receiver, value) {
    $receiver['aria-modal'] = value;
  });
  var get_ariaMultiline = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaMultiline_jwhqjp$', function ($receiver) {
    return $receiver['aria-multiline'];
  });
  var set_ariaMultiline = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaMultiline_yn11c0$', function ($receiver, value) {
    $receiver['aria-multiline'] = value;
  });
  var get_ariaMultiSelectable = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaMultiSelectable_jwhqjp$', function ($receiver) {
    return $receiver['aria-multiselectable'];
  });
  var set_ariaMultiSelectable = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaMultiSelectable_yn11c0$', function ($receiver, value) {
    $receiver['aria-multiselectable'] = value;
  });
  var get_ariaOrientation = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaOrientation_jwhqjp$', function ($receiver) {
    return $receiver['aria-orientation'];
  });
  var set_ariaOrientation = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaOrientation_re6d0e$', function ($receiver, value) {
    $receiver['aria-orientation'] = value;
  });
  var get_ariaOwns = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaOwns_jwhqjp$', function ($receiver) {
    return $receiver['aria-owns'];
  });
  var set_ariaOwns = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaOwns_khicw7$', function ($receiver, value) {
    $receiver['aria-owns'] = value;
  });
  var get_ariaPlaceholder = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaPlaceholder_jwhqjp$', function ($receiver) {
    return $receiver['aria-placeholder'];
  });
  var set_ariaPlaceholder = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaPlaceholder_khicw7$', function ($receiver, value) {
    $receiver['aria-placeholder'] = value;
  });
  var get_ariaPosInSet = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaPosInSet_jwhqjp$', function ($receiver) {
    return $receiver['aria-posinset'];
  });
  var set_ariaPosInSet = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaPosInSet_l0htmh$', function ($receiver, value) {
    $receiver['aria-posinset'] = value;
  });
  var get_ariaPressed = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaPressed_jwhqjp$', function ($receiver) {
    return $receiver['aria-pressed'];
  });
  var set_ariaPressed = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaPressed_vu2rkc$', function ($receiver, value) {
    $receiver['aria-pressed'] = value;
  });
  var get_ariaReadOnly = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaReadOnly_jwhqjp$', function ($receiver) {
    return $receiver['aria-readonly'];
  });
  var set_ariaReadOnly = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaReadOnly_yn11c0$', function ($receiver, value) {
    $receiver['aria-readonly'] = value;
  });
  var get_ariaRelevant = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRelevant_jwhqjp$', function ($receiver) {
    return $receiver['aria-relevant'];
  });
  var set_ariaRelevant = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRelevant_jj6h3f$', function ($receiver, value) {
    $receiver['aria-relevant'] = value;
  });
  var get_ariaRequired = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRequired_jwhqjp$', function ($receiver) {
    return $receiver['aria-required'];
  });
  var set_ariaRequired = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRequired_yn11c0$', function ($receiver, value) {
    $receiver['aria-required'] = value;
  });
  var get_ariaRoleDescription = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRoleDescription_jwhqjp$', function ($receiver) {
    return $receiver['aria-roledescription'];
  });
  var set_ariaRoleDescription = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRoleDescription_khicw7$', function ($receiver, value) {
    $receiver['aria-roledescription'] = value;
  });
  var get_ariaRowCount = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRowCount_jwhqjp$', function ($receiver) {
    return $receiver['aria-rowcount'];
  });
  var set_ariaRowCount = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRowCount_l0htmh$', function ($receiver, value) {
    $receiver['aria-rowcount'] = value;
  });
  var get_ariaRowIndex = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRowIndex_jwhqjp$', function ($receiver) {
    return $receiver['aria-rowindex'];
  });
  var set_ariaRowIndex = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRowIndex_l0htmh$', function ($receiver, value) {
    $receiver['aria-rowindex'] = value;
  });
  var get_ariaRowSpan = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRowSpan_jwhqjp$', function ($receiver) {
    return $receiver['aria-rowspan'];
  });
  var set_ariaRowSpan = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRowSpan_l0htmh$', function ($receiver, value) {
    $receiver['aria-rowspan'] = value;
  });
  var get_ariaSelected = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaSelected_jwhqjp$', function ($receiver) {
    return $receiver['aria-selected'];
  });
  var set_ariaSelected = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaSelected_yn11c0$', function ($receiver, value) {
    $receiver['aria-selected'] = value;
  });
  var get_ariaSetSize = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaSetSize_jwhqjp$', function ($receiver) {
    return $receiver['aria-setsize'];
  });
  var set_ariaSetSize = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaSetSize_l0htmh$', function ($receiver, value) {
    $receiver['aria-setsize'] = value;
  });
  var get_ariaSort = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaSort_jwhqjp$', function ($receiver) {
    return $receiver['aria-sort'];
  });
  var set_ariaSort = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaSort_qrliq4$', function ($receiver, value) {
    $receiver['aria-sort'] = value;
  });
  var get_ariaValueMax = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaValueMax_jwhqjp$', function ($receiver) {
    return $receiver['aria-valuemax'];
  });
  var set_ariaValueMax = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaValueMax_rnvw1z$', function ($receiver, value) {
    $receiver['aria-valuemax'] = value;
  });
  var get_ariaValueMin = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaValueMin_jwhqjp$', function ($receiver) {
    return $receiver['aria-valuemin'];
  });
  var set_ariaValueMin = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaValueMin_rnvw1z$', function ($receiver, value) {
    $receiver['aria-valuemin'] = value;
  });
  var get_ariaValueNow = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaValueNow_jwhqjp$', function ($receiver) {
    return $receiver['aria-valuenow'];
  });
  var set_ariaValueNow = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaValueNow_rnvw1z$', function ($receiver, value) {
    $receiver['aria-valuenow'] = value;
  });
  var get_ariaValueText = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaValueText_jwhqjp$', function ($receiver) {
    return $receiver['aria-valuetext'];
  });
  var set_ariaValueText = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaValueText_khicw7$', function ($receiver, value) {
    $receiver['aria-valuetext'] = value;
  });
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  Object.defineProperty(ReactHTML.prototype, 'a', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_a', function () {
      return 'a';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'abbr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_abbr', function () {
      return 'abbr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'address', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_address', function () {
      return 'address';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'area', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_area', function () {
      return 'area';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'article', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_article', function () {
      return 'article';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'aside', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_aside', function () {
      return 'aside';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'audio', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_audio', function () {
      return 'audio';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'b', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_b', function () {
      return 'b';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'base', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_base', function () {
      return 'base';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'bdi', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_bdi', function () {
      return 'bdi';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'bdo', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_bdo', function () {
      return 'bdo';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'big', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_big', function () {
      return 'big';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'blockquote', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_blockquote', function () {
      return 'blockquote';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'body', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_body', function () {
      return 'body';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'br', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_br', function () {
      return 'br';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'button', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_button', function () {
      return 'button';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'canvas', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_canvas', function () {
      return 'canvas';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'caption', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_caption', function () {
      return 'caption';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'cite', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_cite', function () {
      return 'cite';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'code', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_code', function () {
      return 'code';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'col', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_col', function () {
      return 'col';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'colgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_colgroup', function () {
      return 'colgroup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'data', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_data', function () {
      return 'data';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'datalist', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_datalist', function () {
      return 'datalist';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dd', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dd', function () {
      return 'dd';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'del', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_del', function () {
      return 'del';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'details', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_details', function () {
      return 'details';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dfn', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dfn', function () {
      return 'dfn';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dialog', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dialog', function () {
      return 'dialog';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'div', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_div', function () {
      return 'div';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dl', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dl', function () {
      return 'dl';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dt', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dt', function () {
      return 'dt';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'em', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_em', function () {
      return 'em';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'embed', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_embed', function () {
      return 'embed';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'fieldset', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_fieldset', function () {
      return 'fieldset';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'figcaption', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_figcaption', function () {
      return 'figcaption';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'figure', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_figure', function () {
      return 'figure';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'footer', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_footer', function () {
      return 'footer';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'form', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_form', function () {
      return 'form';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h1', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h1', function () {
      return 'h1';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h2', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h2', function () {
      return 'h2';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h3', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h3', function () {
      return 'h3';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h4', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h4', function () {
      return 'h4';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h5', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h5', function () {
      return 'h5';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h6', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h6', function () {
      return 'h6';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'head', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_head', function () {
      return 'head';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'header', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_header', function () {
      return 'header';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'hgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_hgroup', function () {
      return 'hgroup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'hr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_hr', function () {
      return 'hr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'html', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_html', function () {
      return 'html';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'i', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_i', function () {
      return 'i';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'iframe', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_iframe', function () {
      return 'iframe';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'img', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_img', function () {
      return 'img';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'input', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_input', function () {
      return 'input';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ins', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ins', function () {
      return 'ins';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'kbd', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_kbd', function () {
      return 'kbd';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'keygen', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_keygen', function () {
      return 'keygen';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'label', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_label', function () {
      return 'label';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'legend', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_legend', function () {
      return 'legend';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'li', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_li', function () {
      return 'li';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'link', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_link', function () {
      return 'link';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'main', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_main', function () {
      return 'main';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'map', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_map', function () {
      return 'map';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'mark', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_mark', function () {
      return 'mark';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'menu', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_menu', function () {
      return 'menu';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'menuitem', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_menuitem', function () {
      return 'menuitem';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'meta', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_meta', function () {
      return 'meta';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'meter', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_meter', function () {
      return 'meter';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'nav', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_nav', function () {
      return 'nav';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'noscript', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_noscript', function () {
      return 'noscript';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'object', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_object', function () {
      return 'object';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ol', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ol', function () {
      return 'ol';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'optgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_optgroup', function () {
      return 'optgroup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'option', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_option', function () {
      return 'option';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'output', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_output', function () {
      return 'output';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'p', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_p', function () {
      return 'p';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'param', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_param', function () {
      return 'param';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'picture', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_picture', function () {
      return 'picture';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'pre', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_pre', function () {
      return 'pre';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'progress', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_progress', function () {
      return 'progress';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'q', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_q', function () {
      return 'q';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'rp', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_rp', function () {
      return 'rp';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'rt', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_rt', function () {
      return 'rt';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ruby', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ruby', function () {
      return 'ruby';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 's', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_s', function () {
      return 's';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'samp', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_samp', function () {
      return 'samp';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'slot', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_slot', function () {
      return 'slot';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'script', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_script', function () {
      return 'script';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'section', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_section', function () {
      return 'section';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'select', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_select', function () {
      return 'select';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'small', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_small', function () {
      return 'small';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'source', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_source', function () {
      return 'source';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'span', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_span', function () {
      return 'span';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'strong', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_strong', function () {
      return 'strong';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'style', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_style', function () {
      return 'style';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'sub', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_sub', function () {
      return 'sub';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'summary', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_summary', function () {
      return 'summary';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'sup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_sup', function () {
      return 'sup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'table', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_table', function () {
      return 'table';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'template', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_template', function () {
      return 'template';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'tbody', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_tbody', function () {
      return 'tbody';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'td', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_td', function () {
      return 'td';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'textarea', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_textarea', function () {
      return 'textarea';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'tfoot', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_tfoot', function () {
      return 'tfoot';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'th', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_th', function () {
      return 'th';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'thead', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_thead', function () {
      return 'thead';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'time', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_time', function () {
      return 'time';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'title', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_title', function () {
      return 'title';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'tr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_tr', function () {
      return 'tr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'track', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_track', function () {
      return 'track';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'u', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_u', function () {
      return 'u';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ul', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ul', function () {
      return 'ul';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'var', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_var', function () {
      return 'var';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'video', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_video', function () {
      return 'video';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'wbr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_wbr', function () {
      return 'wbr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'webview', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_webview', function () {
      return 'webview';
    })
  });
  ReactHTML.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReactHTML',
    interfaces: []
  };
  var ReactHTML_instance = null;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance === null) {
      new ReactHTML();
    }return ReactHTML_instance;
  }
  function ReactSVG() {
    ReactSVG_instance = this;
  }
  Object.defineProperty(ReactSVG.prototype, 'svg', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_svg', function () {
      return 'svg';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'animate', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_animate', function () {
      return 'animate';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'animateTransform', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_animateTransform', function () {
      return 'animateTransform';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'clipPath', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_clipPath', function () {
      return 'clipPath';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'defs', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_defs', function () {
      return 'defs';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'desc', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_desc', function () {
      return 'desc';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'ellipse', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_ellipse', function () {
      return 'ellipse';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feBlend', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feBlend', function () {
      return 'feBlend';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feColorMatrix', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feColorMatrix', function () {
      return 'feColorMatrix';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feComponentTransfer', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feComponentTransfer', function () {
      return 'feComponentTransfer';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feComposite', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feComposite', function () {
      return 'feComposite';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feConvolveMatrix', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feConvolveMatrix', function () {
      return 'feConvolveMatrix';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feDiffuseLighting', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feDiffuseLighting', function () {
      return 'feDiffuseLighting';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feDisplacementMap', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feDisplacementMap', function () {
      return 'feDisplacementMap';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feDistantLight', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feDistantLight', function () {
      return 'feDistantLight';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feDropShadow', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feDropShadow', function () {
      return 'feDropShadow';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFlood', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFlood', function () {
      return 'feFlood';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFuncA', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFuncA', function () {
      return 'feFuncA';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFuncB', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFuncB', function () {
      return 'feFuncB';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFuncG', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFuncG', function () {
      return 'feFuncG';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFuncR', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFuncR', function () {
      return 'feFuncR';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feGaussianBlur', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feGaussianBlur', function () {
      return 'feGaussianBlur';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feImage', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feImage', function () {
      return 'feImage';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feMerge', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feMerge', function () {
      return 'feMerge';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feMergeNode', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feMergeNode', function () {
      return 'feMergeNode';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feMorphology', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feMorphology', function () {
      return 'feMorphology';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feOffset', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feOffset', function () {
      return 'feOffset';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'fePointLight', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_fePointLight', function () {
      return 'fePointLight';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feSpecularLighting', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feSpecularLighting', function () {
      return 'feSpecularLighting';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feSpotLight', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feSpotLight', function () {
      return 'feSpotLight';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feTile', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feTile', function () {
      return 'feTile';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feTurbulence', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feTurbulence', function () {
      return 'feTurbulence';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'filter', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_filter', function () {
      return 'filter';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'foreignObject', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_foreignObject', function () {
      return 'foreignObject';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'g', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_g', function () {
      return 'g';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'image', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_image', function () {
      return 'image';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'line', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_line', function () {
      return 'line';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'linearGradient', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_linearGradient', function () {
      return 'linearGradient';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'marker', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_marker', function () {
      return 'marker';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'mask', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_mask', function () {
      return 'mask';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'metadata', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_metadata', function () {
      return 'metadata';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'mpath', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_mpath', function () {
      return 'mpath';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'path', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_path', function () {
      return 'path';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'pattern', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_pattern', function () {
      return 'pattern';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'polygon', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_polygon', function () {
      return 'polygon';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'polyline', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_polyline', function () {
      return 'polyline';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'radialGradient', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_radialGradient', function () {
      return 'radialGradient';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'rect', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_rect', function () {
      return 'rect';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'stop', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_stop', function () {
      return 'stop';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'switch', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_switch', function () {
      return 'switch';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'symbol', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_symbol', function () {
      return 'symbol';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'text', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_text', function () {
      return 'text';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'textPath', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_textPath', function () {
      return 'textPath';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'tspan', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_tspan', function () {
      return 'tspan';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'use', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_use', function () {
      return 'use';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'view', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_view', function () {
      return 'view';
    })
  });
  ReactSVG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReactSVG',
    interfaces: []
  };
  var ReactSVG_instance = null;
  function ReactSVG_getInstance() {
    if (ReactSVG_instance === null) {
      new ReactSVG();
    }return ReactSVG_instance;
  }
  function get_onCopy($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCopy($receiver, value) {
    onEvent($receiver, 'oncopy', value);
  }
  function get_onCut($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCut($receiver, value) {
    onEvent($receiver, 'oncut', value);
  }
  function get_onPaste($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPaste($receiver, value) {
    onEvent($receiver, 'onpaste', value);
  }
  function get_onCompositionEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCompositionEnd($receiver, value) {
    onEvent($receiver, 'oncompositionend', value);
  }
  function get_onCompositionStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCompositionStart($receiver, value) {
    onEvent($receiver, 'oncompositionstart', value);
  }
  function get_onCompositionUpdate($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCompositionUpdate($receiver, value) {
    onEvent($receiver, 'oncompositionupdate', value);
  }
  function get_onFocus($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onFocus($receiver, value) {
    onEvent($receiver, 'onfocus', value);
  }
  function get_onBlur($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onBlur($receiver, value) {
    onEvent($receiver, 'onblur', value);
  }
  function get_onChange($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onChange($receiver, value) {
    onEvent($receiver, 'onchange', value);
  }
  function get_onBeforeInput($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onBeforeInput($receiver, value) {
    onEvent($receiver, 'onbeforeinput', value);
  }
  function get_onInput($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onInput($receiver, value) {
    onEvent($receiver, 'oninput', value);
  }
  function get_onReset($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onReset($receiver, value) {
    onEvent($receiver, 'onreset', value);
  }
  function get_onSubmit($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSubmit($receiver, value) {
    onEvent($receiver, 'onsubmit', value);
  }
  function get_onInvalid($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onInvalid($receiver, value) {
    onEvent($receiver, 'oninvalid', value);
  }
  function get_onLoad($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLoad($receiver, value) {
    onEvent($receiver, 'onload', value);
  }
  function get_onError($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onError($receiver, value) {
    onEvent($receiver, 'onerror', value);
  }
  function get_onKeyDown($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onKeyDown($receiver, value) {
    onEvent($receiver, 'onkeydown', value);
  }
  function get_onKeyPress($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onKeyPress($receiver, value) {
    onEvent($receiver, 'onkeypress', value);
  }
  function get_onKeyUp($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onKeyUp($receiver, value) {
    onEvent($receiver, 'onkeyup', value);
  }
  function get_onAbort($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAbort($receiver, value) {
    onEvent($receiver, 'onabort', value);
  }
  function get_onCanPlay($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCanPlay($receiver, value) {
    onEvent($receiver, 'oncanplay', value);
  }
  function get_onCanPlayThrough($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCanPlayThrough($receiver, value) {
    onEvent($receiver, 'oncanplaythrough', value);
  }
  function get_onDurationChange($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDurationChange($receiver, value) {
    onEvent($receiver, 'ondurationchange', value);
  }
  function get_onEmptied($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onEmptied($receiver, value) {
    onEvent($receiver, 'onemptied', value);
  }
  function get_onEncrypted($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onEncrypted($receiver, value) {
    onEvent($receiver, 'onencrypted', value);
  }
  function get_onEnded($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onEnded($receiver, value) {
    onEvent($receiver, 'onended', value);
  }
  function get_onLoadedData($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLoadedData($receiver, value) {
    onEvent($receiver, 'onloadeddata', value);
  }
  function get_onLoadedMetadata($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLoadedMetadata($receiver, value) {
    onEvent($receiver, 'onloadedmetadata', value);
  }
  function get_onLoadStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLoadStart($receiver, value) {
    onEvent($receiver, 'onloadstart', value);
  }
  function get_onPause($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPause($receiver, value) {
    onEvent($receiver, 'onpause', value);
  }
  function get_onPlay($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPlay($receiver, value) {
    onEvent($receiver, 'onplay', value);
  }
  function get_onPlaying($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPlaying($receiver, value) {
    onEvent($receiver, 'onplaying', value);
  }
  function get_onProgress($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onProgress($receiver, value) {
    onEvent($receiver, 'onprogress', value);
  }
  function get_onRateChange($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onRateChange($receiver, value) {
    onEvent($receiver, 'onratechange', value);
  }
  function get_onSeeked($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSeeked($receiver, value) {
    onEvent($receiver, 'onseeked', value);
  }
  function get_onSeeking($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSeeking($receiver, value) {
    onEvent($receiver, 'onseeking', value);
  }
  function get_onStalled($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onStalled($receiver, value) {
    onEvent($receiver, 'onstalled', value);
  }
  function get_onSuspend($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSuspend($receiver, value) {
    onEvent($receiver, 'onsuspend', value);
  }
  function get_onTimeUpdate($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTimeUpdate($receiver, value) {
    onEvent($receiver, 'ontimeupdate', value);
  }
  function get_onVolumeChange($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onVolumeChange($receiver, value) {
    onEvent($receiver, 'onvolumechange', value);
  }
  function get_onWaiting($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onWaiting($receiver, value) {
    onEvent($receiver, 'onwaiting', value);
  }
  function get_onAuxClick($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAuxClick($receiver, value) {
    onEvent($receiver, 'onauxclick', value);
  }
  function get_onClick($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onClick($receiver, value) {
    onEvent($receiver, 'onclick', value);
  }
  function get_onContextMenu($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onContextMenu($receiver, value) {
    onEvent($receiver, 'oncontextmenu', value);
  }
  function get_onDoubleClick($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDoubleClick($receiver, value) {
    onEvent($receiver, 'ondoubleclick', value);
  }
  function get_onDrag($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDrag($receiver, value) {
    onEvent($receiver, 'ondrag', value);
  }
  function get_onDragEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragEnd($receiver, value) {
    onEvent($receiver, 'ondragend', value);
  }
  function get_onDragEnter($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragEnter($receiver, value) {
    onEvent($receiver, 'ondragenter', value);
  }
  function get_onDragExit($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragExit($receiver, value) {
    onEvent($receiver, 'ondragexit', value);
  }
  function get_onDragLeave($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragLeave($receiver, value) {
    onEvent($receiver, 'ondragleave', value);
  }
  function get_onDragOver($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragOver($receiver, value) {
    onEvent($receiver, 'ondragover', value);
  }
  function get_onDragStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragStart($receiver, value) {
    onEvent($receiver, 'ondragstart', value);
  }
  function get_onDrop($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDrop($receiver, value) {
    onEvent($receiver, 'ondrop', value);
  }
  function get_onMouseDown($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseDown($receiver, value) {
    onEvent($receiver, 'onmousedown', value);
  }
  function get_onMouseEnter($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseEnter($receiver, value) {
    onEvent($receiver, 'onmouseenter', value);
  }
  function get_onMouseLeave($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseLeave($receiver, value) {
    onEvent($receiver, 'onmouseleave', value);
  }
  function get_onMouseMove($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseMove($receiver, value) {
    onEvent($receiver, 'onmousemove', value);
  }
  function get_onMouseOut($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseOut($receiver, value) {
    onEvent($receiver, 'onmouseout', value);
  }
  function get_onMouseOver($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseOver($receiver, value) {
    onEvent($receiver, 'onmouseover', value);
  }
  function get_onMouseUp($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseUp($receiver, value) {
    onEvent($receiver, 'onmouseup', value);
  }
  function get_onSelect($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSelect($receiver, value) {
    onEvent($receiver, 'onselect', value);
  }
  function get_onTouchCancel($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTouchCancel($receiver, value) {
    onEvent($receiver, 'ontouchcancel', value);
  }
  function get_onTouchEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTouchEnd($receiver, value) {
    onEvent($receiver, 'ontouchend', value);
  }
  function get_onTouchMove($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTouchMove($receiver, value) {
    onEvent($receiver, 'ontouchmove', value);
  }
  function get_onTouchStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTouchStart($receiver, value) {
    onEvent($receiver, 'ontouchstart', value);
  }
  function get_onPointerDown($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerDown($receiver, value) {
    onEvent($receiver, 'onpointerdown', value);
  }
  function get_onPointerMove($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerMove($receiver, value) {
    onEvent($receiver, 'onpointermove', value);
  }
  function get_onPointerUp($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerUp($receiver, value) {
    onEvent($receiver, 'onpointerup', value);
  }
  function get_onPointerCancel($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerCancel($receiver, value) {
    onEvent($receiver, 'onpointercancel', value);
  }
  function get_onPointerEnter($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerEnter($receiver, value) {
    onEvent($receiver, 'onpointerenter', value);
  }
  function get_onPointerLeave($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerLeave($receiver, value) {
    onEvent($receiver, 'onpointerleave', value);
  }
  function get_onPointerOver($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerOver($receiver, value) {
    onEvent($receiver, 'onpointerover', value);
  }
  function get_onPointerOut($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerOut($receiver, value) {
    onEvent($receiver, 'onpointerout', value);
  }
  function get_onGotPointerCapture($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onGotPointerCapture($receiver, value) {
    onEvent($receiver, 'ongotpointercapture', value);
  }
  function get_onLostPointerCapture($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLostPointerCapture($receiver, value) {
    onEvent($receiver, 'onlostpointercapture', value);
  }
  function get_onScroll($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onScroll($receiver, value) {
    onEvent($receiver, 'onscroll', value);
  }
  function get_onWheel($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onWheel($receiver, value) {
    onEvent($receiver, 'onwheel', value);
  }
  function get_onAnimationStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAnimationStart($receiver, value) {
    onEvent($receiver, 'onanimationstart', value);
  }
  function get_onAnimationEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAnimationEnd($receiver, value) {
    onEvent($receiver, 'onanimationend', value);
  }
  function get_onAnimationIteration($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAnimationIteration($receiver, value) {
    onEvent($receiver, 'onanimationiteration', value);
  }
  function get_onTransitionEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTransitionEnd($receiver, value) {
    onEvent($receiver, 'ontransitionend', value);
  }
  function onEvent($receiver, type, handler) {
    $receiver.consumer.onTagEvent_azi6uv$($receiver, type, handler);
  }
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
  Object.defineProperty(RDOMBuilder.prototype, 'key', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      this.domProps.key = value;
    }
  });
  Object.defineProperty(RDOMBuilder.prototype, 'ref', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      this.domProps.ref = value;
    }
  });
  RDOMBuilder.prototype.create = function () {
    return createElement.apply(null, [this.attrs.tagName, this.domProps].concat(copyToArray(this.childList)));
  };
  function RDOMBuilder$Companion() {
    RDOMBuilder$Companion_instance = this;
  }
  RDOMBuilder$Companion.prototype.invoke_f6ihu2$ = function (factory) {
    return new RDOMBuilderImpl(factory);
  };
  RDOMBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RDOMBuilder$Companion_instance = null;
  function RDOMBuilder$Companion_getInstance() {
    if (RDOMBuilder$Companion_instance === null) {
      new RDOMBuilder$Companion();
    }return RDOMBuilder$Companion_instance;
  }
  RDOMBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RDOMBuilder',
    interfaces: [RBuilder]
  };
  var attrs = defineInlineFunction('kotlin-react-dom.react.dom.attrs_cftwgj$', function ($receiver, handler) {
    handler($receiver.attrs);
  });
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
    }}
  Object.defineProperty(RDOMBuilderImpl.prototype, 'consumer', {
    configurable: true,
    get: function () {
      return this.consumer_pncnru$_0;
    }
  });
  Object.defineProperty(RDOMBuilderImpl.prototype, 'attrs', {
    configurable: true,
    get: function () {
      return this.attrs_45o9rq$_0;
    }
  });
  Object.defineProperty(RDOMBuilderImpl.prototype, 'domProps', {
    configurable: true,
    get: function () {
      return this.domProps_fsxk8i$_0;
    }
  });
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
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Unsafe]
  };
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
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagEvent_azi6uv$ = function (tag, event, value) {
    setProp(this.this$RDOMBuilderImpl, event, value);
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.finalize = function () {
    return Unit;
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TagConsumer]
  };
  RDOMBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RDOMBuilderImpl',
    interfaces: [RBuilderImpl, RDOMBuilder]
  };
  function setProp($receiver, attribute, value) {
    var key = fixAttributeName(attribute);
    $receiver.domProps[key] = value;
  }
  function render$lambda() {
    return Unit;
  }
  function render_0(container, callback, handler) {
    if (callback === void 0)
      callback = render$lambda;
    render(createElement_0(handler), container, callback);
  }
  function renderIntoRoot(container, options, handler) {
    if (options === void 0)
      options = null;
    return createRoot(container, options).render(createElement_0(handler));
  }
  function hydrate$lambda() {
    return Unit;
  }
  function hydrate_0(container, callback, handler) {
    if (callback === void 0)
      callback = hydrate$lambda;
    hydrate(createElement_0(handler), container, callback);
  }
  function createPortal_0(container, handler) {
    return createPortal(createElement_0(handler), container);
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
  StringAttr.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringAttr',
    interfaces: []
  };
  var StringAttr_instance = null;
  function StringAttr_getInstance() {
    if (StringAttr_instance === null) {
      new StringAttr();
    }return StringAttr_instance;
  }
  var key;
  var key_metadata = new PropertyMetadata('key');
  function get_key($receiver) {
    return key.getValue_pt3q5s$($receiver, key_metadata);
  }
  function set_key($receiver, key_0) {
    key.setValue_wi26v6$($receiver, key_metadata, key_0);
  }
  var defaultValue;
  var defaultValue_metadata = new PropertyMetadata('defaultValue');
  function get_defaultValue($receiver) {
    return defaultValue.getValue_pt3q5s$($receiver, defaultValue_metadata);
  }
  function set_defaultValue($receiver, defaultValue_0) {
    defaultValue.setValue_wi26v6$($receiver, defaultValue_metadata, defaultValue_0);
  }
  var defaultValue_0;
  var defaultValue_metadata_0 = new PropertyMetadata('defaultValue');
  function get_defaultValue_0($receiver) {
    return defaultValue_0.getValue_pt3q5s$($receiver, defaultValue_metadata_0);
  }
  function set_defaultValue_0($receiver, defaultValue) {
    defaultValue_0.setValue_wi26v6$($receiver, defaultValue_metadata_0, defaultValue);
  }
  var value;
  var value_metadata = new PropertyMetadata('value');
  function get_value($receiver) {
    return value.getValue_pt3q5s$($receiver, value_metadata);
  }
  function set_value($receiver, value_0) {
    value.setValue_wi26v6$($receiver, value_metadata, value_0);
  }
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
  var jsStyle = defineInlineFunction('kotlin-react-dom.react.dom.jsStyle_ymsho7$', wrapFunction(function () {
    var get_jsStyle = _.react.dom.get_jsStyle_6s7ubj$;
    return function ($receiver, handler) {
      handler(get_jsStyle($receiver));
    };
  }));
  var tag = defineInlineFunction('kotlin-react-dom.react.dom.tag_usjfi1$', wrapFunction(function () {
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    return function ($receiver, block, factory) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(factory);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var a = defineInlineFunction('kotlin-react-dom.react.dom.a_nbz07b$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function a$lambda(closure$href, closure$target, closure$classes) {
      return function (it) {
        return new A_init(attributesMapOf(['href', closure$href, 'target', closure$target, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, href, target, classes, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(a$lambda(href, target, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var abbr = defineInlineFunction('kotlin-react-dom.react.dom.abbr_2pbh6j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ABBR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ABBR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function abbr$lambda(closure$classes) {
      return function (it) {
        return new ABBR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(abbr$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var address = defineInlineFunction('kotlin-react-dom.react.dom.address_z0z9h0$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ADDRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ADDRESS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function address$lambda(closure$classes) {
      return function (it) {
        return new ADDRESS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(address$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var area = defineInlineFunction('kotlin-react-dom.react.dom.area_88drbb$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AREA;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function area$lambda(closure$shape, closure$alt, closure$classes) {
      return function (it) {
        return new AREA_init(attributesMapOf(['Shape', closure$shape != null ? enumEncode(closure$shape) : null, 'alt', closure$alt, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, shape, alt, classes, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(area$lambda(shape, alt, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var article = defineInlineFunction('kotlin-react-dom.react.dom.article_oyo50y$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ARTICLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ARTICLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function article$lambda(closure$classes) {
      return function (it) {
        return new ARTICLE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(article$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var aside = defineInlineFunction('kotlin-react-dom.react.dom.aside_d4tg9c$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ASIDE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ASIDE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function aside$lambda(closure$classes) {
      return function (it) {
        return new ASIDE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(aside$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var audio = defineInlineFunction('kotlin-react-dom.react.dom.audio_26aei6$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var AUDIO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AUDIO;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function audio$lambda(closure$classes) {
      return function (it) {
        return new AUDIO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(audio$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var b = defineInlineFunction('kotlin-react-dom.react.dom.b_7nhtl2$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var B_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.B;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function b$lambda(closure$classes) {
      return function (it) {
        return new B_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(b$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var base = defineInlineFunction('kotlin-react-dom.react.dom.base_1qtasl$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BASE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BASE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function base$lambda(closure$classes) {
      return function (it) {
        return new BASE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(base$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var bdi = defineInlineFunction('kotlin-react-dom.react.dom.bdi_e0blcx$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BDI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDI;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function bdi$lambda(closure$classes) {
      return function (it) {
        return new BDI_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(bdi$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var bdo = defineInlineFunction('kotlin-react-dom.react.dom.bdo_ydoj6j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BDO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDO;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function bdo$lambda(closure$classes) {
      return function (it) {
        return new BDO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(bdo$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var blockquote = defineInlineFunction('kotlin-react-dom.react.dom.blockquote_244j8j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BLOCKQUOTE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BLOCKQUOTE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function blockquote$lambda(closure$classes) {
      return function (it) {
        return new BLOCKQUOTE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(blockquote$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var body = defineInlineFunction('kotlin-react-dom.react.dom.body_qvl2vq$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BODY;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function body$lambda(closure$classes) {
      return function (it) {
        return new BODY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(body$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var br = defineInlineFunction('kotlin-react-dom.react.dom.br_dl5xac$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function br$lambda(closure$classes) {
      return function (it) {
        return new BR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(br$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var button = defineInlineFunction('kotlin-react-dom.react.dom.button_ueq2um$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
      return function (it) {
        return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, formEncType, formMethod, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(button$lambda(formEncType, formMethod, type, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var canvas = defineInlineFunction('kotlin-react-dom.react.dom.canvas_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function canvas$lambda(closure$classes) {
      return function (it) {
        return new CANVAS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(canvas$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var canvas_0 = defineInlineFunction('kotlin-react-dom.react.dom.canvas_jixbo$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function canvas$lambda(closure$classes) {
      return function (it) {
        return new CANVAS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(canvas$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var caption = defineInlineFunction('kotlin-react-dom.react.dom.caption_ix3blu$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CAPTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function caption$lambda(closure$classes) {
      return function (it) {
        return new CAPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(caption$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var cite = defineInlineFunction('kotlin-react-dom.react.dom.cite_gtb7bp$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CITE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CITE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function cite$lambda(closure$classes) {
      return function (it) {
        return new CITE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(cite$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var code = defineInlineFunction('kotlin-react-dom.react.dom.code_e1ernl$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CODE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CODE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function code$lambda(closure$classes) {
      return function (it) {
        return new CODE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(code$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var col = defineInlineFunction('kotlin-react-dom.react.dom.col_5agiaw$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var COL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function col$lambda(closure$classes) {
      return function (it) {
        return new COL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(col$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var colgroup = defineInlineFunction('kotlin-react-dom.react.dom.colgroup_efezmb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var COLGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COLGROUP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function colgroup$lambda(closure$classes) {
      return function (it) {
        return new COLGROUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(colgroup$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var datalist = defineInlineFunction('kotlin-react-dom.react.dom.datalist_bhll8k$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DATALIST_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DATALIST;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function datalist$lambda(closure$classes) {
      return function (it) {
        return new DATALIST_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(datalist$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dd = defineInlineFunction('kotlin-react-dom.react.dom.dd_7bhhcc$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dd$lambda(closure$classes) {
      return function (it) {
        return new DD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dd$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var del = defineInlineFunction('kotlin-react-dom.react.dom.del_lx3a6b$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DEL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function del$lambda(closure$classes) {
      return function (it) {
        return new DEL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(del$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var details = defineInlineFunction('kotlin-react-dom.react.dom.details_dx18be$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DETAILS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DETAILS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function details$lambda(closure$classes) {
      return function (it) {
        return new DETAILS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(details$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dfn = defineInlineFunction('kotlin-react-dom.react.dom.dfn_gfa744$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DFN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DFN;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dfn$lambda(closure$classes) {
      return function (it) {
        return new DFN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dfn$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dialog = defineInlineFunction('kotlin-react-dom.react.dom.dialog_r2vd0$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DIALOG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIALOG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dialog$lambda(closure$classes) {
      return function (it) {
        return new DIALOG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dialog$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var div = defineInlineFunction('kotlin-react-dom.react.dom.div_gtrzbd$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DIV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function div$lambda(closure$classes) {
      return function (it) {
        return new DIV_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dl = defineInlineFunction('kotlin-react-dom.react.dom.dl_asxds4$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dl$lambda(closure$classes) {
      return function (it) {
        return new DL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dl$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dt = defineInlineFunction('kotlin-react-dom.react.dom.dt_eada7w$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dt$lambda(closure$classes) {
      return function (it) {
        return new DT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dt$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var em = defineInlineFunction('kotlin-react-dom.react.dom.em_oqozj8$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var EM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EM;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function em$lambda(closure$classes) {
      return function (it) {
        return new EM_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(em$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var embed = defineInlineFunction('kotlin-react-dom.react.dom.embed_n808k1$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var EMBED_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EMBED;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function embed$lambda(closure$classes) {
      return function (it) {
        return new EMBED_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(embed$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var fieldset = defineInlineFunction('kotlin-react-dom.react.dom.fieldset_hp7o$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIELDSET_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIELDSET;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function fieldset$lambda(closure$classes) {
      return function (it) {
        return new FIELDSET_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(fieldset$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var figcaption = defineInlineFunction('kotlin-react-dom.react.dom.figcaption_m3xu5m$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIGCAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGCAPTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function figcaption$lambda(closure$classes) {
      return function (it) {
        return new FIGCAPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(figcaption$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var figure = defineInlineFunction('kotlin-react-dom.react.dom.figure_1mq3ag$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIGURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGURE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function figure$lambda(closure$classes) {
      return function (it) {
        return new FIGURE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(figure$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var footer = defineInlineFunction('kotlin-react-dom.react.dom.footer_xcq26p$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FOOTER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FOOTER;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function footer$lambda(closure$classes) {
      return function (it) {
        return new FOOTER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(footer$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var form = defineInlineFunction('kotlin-react-dom.react.dom.form_7ftnwq$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function form$lambda(closure$action, closure$encType, closure$method, closure$classes) {
      return function (it) {
        return new FORM_init(attributesMapOf(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, action, encType, method, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(form$lambda(action, encType, method, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h1 = defineInlineFunction('kotlin-react-dom.react.dom.h1_quudml$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H1_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h1$lambda(closure$classes) {
      return function (it) {
        return new H1_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h1$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h2 = defineInlineFunction('kotlin-react-dom.react.dom.h2_zaswbi$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H2_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h2$lambda(closure$classes) {
      return function (it) {
        return new H2_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h2$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h3 = defineInlineFunction('kotlin-react-dom.react.dom.h3_racmyp$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H3_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h3$lambda(closure$classes) {
      return function (it) {
        return new H3_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h3$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h4 = defineInlineFunction('kotlin-react-dom.react.dom.h4_iue49s$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H4_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h4$lambda(closure$classes) {
      return function (it) {
        return new H4_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h4$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h5 = defineInlineFunction('kotlin-react-dom.react.dom.h5_aeflkv$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H5_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H5;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h5$lambda(closure$classes) {
      return function (it) {
        return new H5_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h5$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h6 = defineInlineFunction('kotlin-react-dom.react.dom.h6_1yh2vy$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H6_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H6;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h6$lambda(closure$classes) {
      return function (it) {
        return new H6_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h6$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var head = defineInlineFunction('kotlin-react-dom.react.dom.head_elsczb$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEAD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function head$lambda(it) {
      return new HEAD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(head$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var header = defineInlineFunction('kotlin-react-dom.react.dom.header_xi6ch$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HEADER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function header$lambda(closure$classes) {
      return function (it) {
        return new HEADER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(header$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var hr = defineInlineFunction('kotlin-react-dom.react.dom.hr_ld1ake$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function hr$lambda(closure$classes) {
      return function (it) {
        return new HR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(hr$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var html = defineInlineFunction('kotlin-react-dom.react.dom.html_a3w7j2$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HTML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HTML;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function html$lambda(it) {
      return new HTML_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(html$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var i = defineInlineFunction('kotlin-react-dom.react.dom.i_jkw8pr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var I_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function i$lambda(closure$classes) {
      return function (it) {
        return new I_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(i$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var iframe = defineInlineFunction('kotlin-react-dom.react.dom.iframe_ft8ple$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function iframe$lambda(closure$sandbox, closure$classes) {
      return function (it) {
        return new IFRAME_init(attributesMapOf(['sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, sandbox, classes, content) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(iframe$lambda(sandbox, classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var iframe_0 = defineInlineFunction('kotlin-react-dom.react.dom.iframe_i8zf9o$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function iframe$lambda(closure$sandbox, closure$classes) {
      return function (it) {
        return new IFRAME_init(attributesMapOf(['sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, sandbox, classes, block) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(iframe$lambda(sandbox, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var img = defineInlineFunction('kotlin-react-dom.react.dom.img_vso3mj$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function img$lambda(closure$alt, closure$src, closure$classes) {
      return function (it) {
        return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, alt, src, classes, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(img$lambda(alt, src, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var input = defineInlineFunction('kotlin-react-dom.react.dom.input_etd37n$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
      return function (it) {
        return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, type, formEncType, formMethod, name, classes, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(type, formEncType, formMethod, name, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var ins = defineInlineFunction('kotlin-react-dom.react.dom.ins_x2jgqu$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var INS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function ins$lambda(closure$classes) {
      return function (it) {
        return new INS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ins$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var kbd = defineInlineFunction('kotlin-react-dom.react.dom.kbd_547kbf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var KBD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KBD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function kbd$lambda(closure$classes) {
      return function (it) {
        return new KBD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(kbd$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var label = defineInlineFunction('kotlin-react-dom.react.dom.label_thtid0$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LABEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function label$lambda(closure$classes) {
      return function (it) {
        return new LABEL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(label$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var legend = defineInlineFunction('kotlin-react-dom.react.dom.legend_jb5h3z$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LEGEND;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function legend$lambda(closure$classes) {
      return function (it) {
        return new LEGEND_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(legend$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var li = defineInlineFunction('kotlin-react-dom.react.dom.li_239rhr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function li$lambda(closure$classes) {
      return function (it) {
        return new LI_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(li$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var link = defineInlineFunction('kotlin-react-dom.react.dom.link_28p9e6$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LINK;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function link$lambda(closure$href, closure$rel, closure$type) {
      return function (it) {
        return new LINK_init(attributesMapOf(['href', closure$href, 'rel', closure$rel, 'type', closure$type]), it);
      };
    }
    return function ($receiver, href, rel, type, block) {
      if (href === void 0)
        href = null;
      if (rel === void 0)
        rel = null;
      if (type === void 0)
        type = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(link$lambda(href, rel, type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var main = defineInlineFunction('kotlin-react-dom.react.dom.main_szkgy5$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MAIN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAIN;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function main$lambda(closure$classes) {
      return function (it) {
        return new MAIN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(main$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var map = defineInlineFunction('kotlin-react-dom.react.dom.map_5olbsf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var MAP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function map$lambda(closure$name, closure$classes) {
      return function (it) {
        return new MAP_init(attributesMapOf(['name', closure$name, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, name, classes, block) {
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(map$lambda(name, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var mark = defineInlineFunction('kotlin-react-dom.react.dom.mark_fbhysh$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MARK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MARK;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function mark$lambda(closure$classes) {
      return function (it) {
        return new MARK_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(mark$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var math = defineInlineFunction('kotlin-react-dom.react.dom.math_g9a7ss$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MATH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATH;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function math$lambda(closure$classes) {
      return function (it) {
        return new MATH_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(math$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var meta = defineInlineFunction('kotlin-react-dom.react.dom.meta_lff4tg$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.META;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function meta$lambda(closure$name, closure$content) {
      return function (it) {
        return new META_init(attributesMapOf(['name', closure$name, 'content', closure$content]), it);
      };
    }
    return function ($receiver, name, content, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(meta$lambda(name, content));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var meter = defineInlineFunction('kotlin-react-dom.react.dom.meter_pg8oht$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var METER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.METER;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function meter$lambda(closure$classes) {
      return function (it) {
        return new METER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(meter$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var nav = defineInlineFunction('kotlin-react-dom.react.dom.nav_5mbwij$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var NAV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function nav$lambda(closure$classes) {
      return function (it) {
        return new NAV_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(nav$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var noscript = defineInlineFunction('kotlin-react-dom.react.dom.noscript_3p4atc$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var NOSCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NOSCRIPT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function noscript$lambda(closure$classes) {
      return function (it) {
        return new NOSCRIPT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(noscript$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var objectTag = defineInlineFunction('kotlin-react-dom.react.dom.objectTag_hy8adv$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OBJECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OBJECT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function objectTag$lambda(closure$classes) {
      return function (it) {
        return new OBJECT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(objectTag$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var ol = defineInlineFunction('kotlin-react-dom.react.dom.ol_r4jh81$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function ol$lambda(closure$classes) {
      return function (it) {
        return new OL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ol$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var optgroup = defineInlineFunction('kotlin-react-dom.react.dom.optgroup_q968rn$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var OPTGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTGROUP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function optgroup$lambda(closure$label, closure$classes) {
      return function (it) {
        return new OPTGROUP_init(attributesMapOf(['label', closure$label, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, label, classes, block) {
      if (label === void 0)
        label = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(optgroup$lambda(label, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var option = defineInlineFunction('kotlin-react-dom.react.dom.option_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function option$lambda(closure$classes) {
      return function (it) {
        return new OPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(option$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var option_0 = defineInlineFunction('kotlin-react-dom.react.dom.option_10ahkn$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function option$lambda(closure$classes) {
      return function (it) {
        return new OPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(option$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var output = defineInlineFunction('kotlin-react-dom.react.dom.output_6fkigb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OUTPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OUTPUT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function output$lambda(closure$classes) {
      return function (it) {
        return new OUTPUT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(output$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var p = defineInlineFunction('kotlin-react-dom.react.dom.p_vianug$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var P_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function p$lambda(closure$classes) {
      return function (it) {
        return new P_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(p$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var param = defineInlineFunction('kotlin-react-dom.react.dom.param_r0oori$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PARAM;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function param$lambda(closure$name, closure$value) {
      return function (it) {
        return new PARAM_init(attributesMapOf(['name', closure$name, 'value', closure$value]), it);
      };
    }
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(param$lambda(name, value));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var picture = defineInlineFunction('kotlin-react-dom.react.dom.picture_2zheom$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PICTURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PICTURE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function picture$lambda(closure$classes) {
      return function (it) {
        return new PICTURE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(picture$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var pre = defineInlineFunction('kotlin-react-dom.react.dom.pre_bsqswr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PRE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PRE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function pre$lambda(closure$classes) {
      return function (it) {
        return new PRE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(pre$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var progress = defineInlineFunction('kotlin-react-dom.react.dom.progress_qram69$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PROGRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PROGRESS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function progress$lambda(closure$classes) {
      return function (it) {
        return new PROGRESS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(progress$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var q = defineInlineFunction('kotlin-react-dom.react.dom.q_n2c55j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var Q_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.Q;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function q$lambda(closure$classes) {
      return function (it) {
        return new Q_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(q$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var rp = defineInlineFunction('kotlin-react-dom.react.dom.rp_68stce$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function rp$lambda(closure$classes) {
      return function (it) {
        return new RP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(rp$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var rt = defineInlineFunction('kotlin-react-dom.react.dom.rt_rj19fa$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function rt$lambda(closure$classes) {
      return function (it) {
        return new RT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(rt$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var ruby = defineInlineFunction('kotlin-react-dom.react.dom.ruby_w5f9pu$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RUBY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RUBY;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function ruby$lambda(closure$classes) {
      return function (it) {
        return new RUBY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ruby$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var samp = defineInlineFunction('kotlin-react-dom.react.dom.samp_uvv9ff$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SAMP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SAMP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function samp$lambda(closure$classes) {
      return function (it) {
        return new SAMP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(samp$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var script = defineInlineFunction('kotlin-react-dom.react.dom.script_4uv0f2$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SCRIPT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function script$lambda(closure$type, closure$src) {
      return function (it) {
        return new SCRIPT_init(attributesMapOf(['type', closure$type, 'src', closure$src]), it);
      };
    }
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(script$lambda(type, src));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var section = defineInlineFunction('kotlin-react-dom.react.dom.section_7ougmb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SECTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SECTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function section$lambda(closure$classes) {
      return function (it) {
        return new SECTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(section$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var select = defineInlineFunction('kotlin-react-dom.react.dom.select_iug7io$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SELECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function select$lambda(closure$classes) {
      return function (it) {
        return new SELECT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(select$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var small = defineInlineFunction('kotlin-react-dom.react.dom.small_c9m43j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SMALL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SMALL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function small$lambda(closure$classes) {
      return function (it) {
        return new SMALL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(small$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var source = defineInlineFunction('kotlin-react-dom.react.dom.source_ly1yj5$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SOURCE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SOURCE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function source$lambda(closure$classes) {
      return function (it) {
        return new SOURCE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(source$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var span = defineInlineFunction('kotlin-react-dom.react.dom.span_t2ee0y$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SPAN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function span$lambda(closure$classes) {
      return function (it) {
        return new SPAN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(span$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var strong = defineInlineFunction('kotlin-react-dom.react.dom.strong_oovi1h$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STRONG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STRONG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function strong$lambda(closure$classes) {
      return function (it) {
        return new STRONG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(strong$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var style = defineInlineFunction('kotlin-react-dom.react.dom.style_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function style$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, content) {
      if (type === void 0)
        type = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(style$lambda(type));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var style_0 = defineInlineFunction('kotlin-react-dom.react.dom.style_kht6w9$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function style$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(style$lambda(type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var sub = defineInlineFunction('kotlin-react-dom.react.dom.sub_v7eync$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SUB_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUB;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function sub$lambda(closure$classes) {
      return function (it) {
        return new SUB_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(sub$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var sup = defineInlineFunction('kotlin-react-dom.react.dom.sup_fyw92e$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function sup$lambda(closure$classes) {
      return function (it) {
        return new SUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(sup$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var svg = defineInlineFunction('kotlin-react-dom.react.dom.svg_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function svg$lambda(closure$classes) {
      return function (it) {
        return new SVG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(svg$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var svg_0 = defineInlineFunction('kotlin-react-dom.react.dom.svg_bdchms$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function svg$lambda(closure$classes) {
      return function (it) {
        return new SVG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(svg$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var table = defineInlineFunction('kotlin-react-dom.react.dom.table_lwybxi$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TABLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function table$lambda(closure$classes) {
      return function (it) {
        return new TABLE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(table$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var tbody = defineInlineFunction('kotlin-react-dom.react.dom.tbody_tx0lke$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TBODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function tbody$lambda(closure$classes) {
      return function (it) {
        return new TBODY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var td = defineInlineFunction('kotlin-react-dom.react.dom.td_a9j6l8$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function td$lambda(closure$classes) {
      return function (it) {
        return new TD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var textarea = defineInlineFunction('kotlin-react-dom.react.dom.textarea_ctzq07$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function textarea$lambda(closure$rows, closure$cols, closure$wrap, closure$classes) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, classes, content) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(textarea$lambda(rows, cols, wrap, classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var textarea_0 = defineInlineFunction('kotlin-react-dom.react.dom.textarea_4u31cv$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function textarea$lambda(closure$rows, closure$cols, closure$wrap, closure$classes) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, classes, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(textarea$lambda(rows, cols, wrap, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var tfoot = defineInlineFunction('kotlin-react-dom.react.dom.tfoot_agonsq$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TFOOT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TFOOT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function tfoot$lambda(closure$classes) {
      return function (it) {
        return new TFOOT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(tfoot$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var th = defineInlineFunction('kotlin-react-dom.react.dom.th_bo9ux3$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function th$lambda(closure$scope, closure$classes) {
      return function (it) {
        return new TH_init(attributesMapOf(['scope', closure$scope != null ? enumEncode(closure$scope) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, scope, classes, block) {
      if (scope === void 0)
        scope = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(scope, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var thead = defineInlineFunction('kotlin-react-dom.react.dom.thead_jad978$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var THEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function thead$lambda(closure$classes) {
      return function (it) {
        return new THEAD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(thead$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var time = defineInlineFunction('kotlin-react-dom.react.dom.time_m4er8h$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TIME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TIME;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function time$lambda(closure$classes) {
      return function (it) {
        return new TIME_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(time$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var title = defineInlineFunction('kotlin-react-dom.react.dom.title_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function title$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(title$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var title_0 = defineInlineFunction('kotlin-react-dom.react.dom.title_cp8zsd$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function title$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(title$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var tr = defineInlineFunction('kotlin-react-dom.react.dom.tr_y4c0um$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function tr$lambda(closure$classes) {
      return function (it) {
        return new TR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var ul = defineInlineFunction('kotlin-react-dom.react.dom.ul_yweui3$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var UL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function ul$lambda(closure$classes) {
      return function (it) {
        return new UL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ul$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var varTag = defineInlineFunction('kotlin-react-dom.react.dom.varTag_wqfjdr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var VAR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VAR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function varTag$lambda(closure$classes) {
      return function (it) {
        return new VAR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(varTag$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var video = defineInlineFunction('kotlin-react-dom.react.dom.video_4xrr2l$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var VIDEO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VIDEO;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function video$lambda(closure$classes) {
      return function (it) {
        return new VIDEO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(video$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  function FormEncType() {
    FormEncType_instance = this;
    this.applicationFormUrlEncoded = 'application/x-www-form-urlencoded';
    this.multipartFormData = 'multipart/form-data';
    this.textPlain = 'text/plain';
  }
  FormEncType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FormEncType',
    interfaces: []
  };
  var FormEncType_instance = null;
  function FormEncType_getInstance() {
    if (FormEncType_instance === null) {
      new FormEncType();
    }return FormEncType_instance;
  }
  function FormMethod() {
    FormMethod_instance = this;
    this.get = 'get';
    this.post = 'post';
  }
  FormMethod.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FormMethod',
    interfaces: []
  };
  var FormMethod_instance = null;
  function FormMethod_getInstance() {
    if (FormMethod_instance === null) {
      new FormMethod();
    }return FormMethod_instance;
  }
  var get_ref = defineInlineFunction('kotlin-react-dom.react.dom.html.get_ref_yct6uq$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function ($receiver) {
      throw IllegalStateException_init(''.toString());
    };
  }));
  var set_ref = defineInlineFunction('kotlin-react-dom.react.dom.html.set_ref_ea39i6$', function ($receiver, value) {
    $receiver.ref = value;
  });
  function renderToString(handler) {
    return rawRenderToString(createElement_0(handler));
  }
  function renderToStaticMarkup(handler) {
    return rawRenderToStaticMarkup(createElement_0(handler));
  }
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  var package$aria = package$dom.aria || (package$dom.aria = {});
  package$aria.get_ariaActiveDescendant_jwhqjp$ = get_ariaActiveDescendant;
  package$aria.set_ariaActiveDescendant_khicw7$ = set_ariaActiveDescendant;
  package$aria.get_ariaAtomic_jwhqjp$ = get_ariaAtomic;
  package$aria.set_ariaAtomic_yn11c0$ = set_ariaAtomic;
  package$aria.get_ariaAutoComplete_jwhqjp$ = get_ariaAutoComplete;
  package$aria.set_ariaAutoComplete_i2msty$ = set_ariaAutoComplete;
  package$aria.get_ariaBusy_jwhqjp$ = get_ariaBusy;
  package$aria.set_ariaBusy_yn11c0$ = set_ariaBusy;
  package$aria.get_ariaChecked_jwhqjp$ = get_ariaChecked;
  package$aria.set_ariaChecked_eamw7b$ = set_ariaChecked;
  package$aria.get_ariaColCount_jwhqjp$ = get_ariaColCount;
  package$aria.set_ariaColCount_l0htmh$ = set_ariaColCount;
  package$aria.get_ariaColIndex_jwhqjp$ = get_ariaColIndex;
  package$aria.set_ariaColIndex_l0htmh$ = set_ariaColIndex;
  package$aria.get_ariaColSpan_jwhqjp$ = get_ariaColSpan;
  package$aria.set_ariaColSpan_l0htmh$ = set_ariaColSpan;
  package$aria.get_ariaControls_jwhqjp$ = get_ariaControls;
  package$aria.set_ariaControls_khicw7$ = set_ariaControls;
  package$aria.get_ariaCurrent_jwhqjp$ = get_ariaCurrent;
  package$aria.set_ariaCurrent_7xn0s5$ = set_ariaCurrent;
  package$aria.get_ariaDescribedBy_jwhqjp$ = get_ariaDescribedBy;
  package$aria.set_ariaDescribedBy_khicw7$ = set_ariaDescribedBy;
  package$aria.get_ariaDetails_jwhqjp$ = get_ariaDetails;
  package$aria.set_ariaDetails_khicw7$ = set_ariaDetails;
  package$aria.get_ariaDisabled_jwhqjp$ = get_ariaDisabled;
  package$aria.set_ariaDisabled_yn11c0$ = set_ariaDisabled;
  package$aria.get_ariaDropEffect_jwhqjp$ = get_ariaDropEffect;
  package$aria.set_ariaDropEffect_sfm5rm$ = set_ariaDropEffect;
  package$aria.get_ariaErrorMessage_jwhqjp$ = get_ariaErrorMessage;
  package$aria.set_ariaErrorMessage_khicw7$ = set_ariaErrorMessage;
  package$aria.get_ariaExpanded_jwhqjp$ = get_ariaExpanded;
  package$aria.set_ariaExpanded_yn11c0$ = set_ariaExpanded;
  package$aria.get_ariaFlowTo_jwhqjp$ = get_ariaFlowTo;
  package$aria.set_ariaFlowTo_khicw7$ = set_ariaFlowTo;
  package$aria.get_ariaGrabbed_jwhqjp$ = get_ariaGrabbed;
  package$aria.set_ariaGrabbed_yn11c0$ = set_ariaGrabbed;
  package$aria.get_ariaHasPopup_jwhqjp$ = get_ariaHasPopup;
  package$aria.set_ariaHasPopup_uqke5c$ = set_ariaHasPopup;
  package$aria.get_ariaHidden_jwhqjp$ = get_ariaHidden;
  package$aria.set_ariaHidden_yn11c0$ = set_ariaHidden;
  package$aria.get_ariaInvalid_jwhqjp$ = get_ariaInvalid;
  package$aria.set_ariaInvalid_5u7qh5$ = set_ariaInvalid;
  package$aria.get_ariaKeyShortcuts_jwhqjp$ = get_ariaKeyShortcuts;
  package$aria.set_ariaKeyShortcuts_khicw7$ = set_ariaKeyShortcuts;
  package$aria.get_ariaLabel_jwhqjp$ = get_ariaLabel;
  package$aria.set_ariaLabel_khicw7$ = set_ariaLabel;
  package$aria.get_ariaLabelledBy_jwhqjp$ = get_ariaLabelledBy;
  package$aria.set_ariaLabelledBy_khicw7$ = set_ariaLabelledBy;
  package$aria.get_ariaLevel_jwhqjp$ = get_ariaLevel;
  package$aria.set_ariaLevel_l0htmh$ = set_ariaLevel;
  package$aria.get_ariaLive_jwhqjp$ = get_ariaLive;
  package$aria.set_ariaLive_qrgxga$ = set_ariaLive;
  package$aria.get_ariaModal_jwhqjp$ = get_ariaModal;
  package$aria.set_ariaModal_yn11c0$ = set_ariaModal;
  package$aria.get_ariaMultiline_jwhqjp$ = get_ariaMultiline;
  package$aria.set_ariaMultiline_yn11c0$ = set_ariaMultiline;
  package$aria.get_ariaMultiSelectable_jwhqjp$ = get_ariaMultiSelectable;
  package$aria.set_ariaMultiSelectable_yn11c0$ = set_ariaMultiSelectable;
  package$aria.get_ariaOrientation_jwhqjp$ = get_ariaOrientation;
  package$aria.set_ariaOrientation_re6d0e$ = set_ariaOrientation;
  package$aria.get_ariaOwns_jwhqjp$ = get_ariaOwns;
  package$aria.set_ariaOwns_khicw7$ = set_ariaOwns;
  package$aria.get_ariaPlaceholder_jwhqjp$ = get_ariaPlaceholder;
  package$aria.set_ariaPlaceholder_khicw7$ = set_ariaPlaceholder;
  package$aria.get_ariaPosInSet_jwhqjp$ = get_ariaPosInSet;
  package$aria.set_ariaPosInSet_l0htmh$ = set_ariaPosInSet;
  package$aria.get_ariaPressed_jwhqjp$ = get_ariaPressed;
  package$aria.set_ariaPressed_vu2rkc$ = set_ariaPressed;
  package$aria.get_ariaReadOnly_jwhqjp$ = get_ariaReadOnly;
  package$aria.set_ariaReadOnly_yn11c0$ = set_ariaReadOnly;
  package$aria.get_ariaRelevant_jwhqjp$ = get_ariaRelevant;
  package$aria.set_ariaRelevant_jj6h3f$ = set_ariaRelevant;
  package$aria.get_ariaRequired_jwhqjp$ = get_ariaRequired;
  package$aria.set_ariaRequired_yn11c0$ = set_ariaRequired;
  package$aria.get_ariaRoleDescription_jwhqjp$ = get_ariaRoleDescription;
  package$aria.set_ariaRoleDescription_khicw7$ = set_ariaRoleDescription;
  package$aria.get_ariaRowCount_jwhqjp$ = get_ariaRowCount;
  package$aria.set_ariaRowCount_l0htmh$ = set_ariaRowCount;
  package$aria.get_ariaRowIndex_jwhqjp$ = get_ariaRowIndex;
  package$aria.set_ariaRowIndex_l0htmh$ = set_ariaRowIndex;
  package$aria.get_ariaRowSpan_jwhqjp$ = get_ariaRowSpan;
  package$aria.set_ariaRowSpan_l0htmh$ = set_ariaRowSpan;
  package$aria.get_ariaSelected_jwhqjp$ = get_ariaSelected;
  package$aria.set_ariaSelected_yn11c0$ = set_ariaSelected;
  package$aria.get_ariaSetSize_jwhqjp$ = get_ariaSetSize;
  package$aria.set_ariaSetSize_l0htmh$ = set_ariaSetSize;
  package$aria.get_ariaSort_jwhqjp$ = get_ariaSort;
  package$aria.set_ariaSort_qrliq4$ = set_ariaSort;
  package$aria.get_ariaValueMax_jwhqjp$ = get_ariaValueMax;
  package$aria.set_ariaValueMax_rnvw1z$ = set_ariaValueMax;
  package$aria.get_ariaValueMin_jwhqjp$ = get_ariaValueMin;
  package$aria.set_ariaValueMin_rnvw1z$ = set_ariaValueMin;
  package$aria.get_ariaValueNow_jwhqjp$ = get_ariaValueNow;
  package$aria.set_ariaValueNow_rnvw1z$ = set_ariaValueNow;
  package$aria.get_ariaValueText_jwhqjp$ = get_ariaValueText;
  package$aria.set_ariaValueText_khicw7$ = set_ariaValueText;
  var package$html = package$dom.html || (package$dom.html = {});
  Object.defineProperty(package$html, 'ReactHTML', {
    get: ReactHTML_getInstance
  });
  var package$svg = package$dom.svg || (package$dom.svg = {});
  Object.defineProperty(package$svg, 'ReactSVG', {
    get: ReactSVG_getInstance
  });
  package$dom.get_onCopy_fxodxh$ = get_onCopy;
  package$dom.set_onCopy_rs73sa$ = set_onCopy;
  package$dom.get_onCut_fxodxh$ = get_onCut;
  package$dom.set_onCut_rs73sa$ = set_onCut;
  package$dom.get_onPaste_fxodxh$ = get_onPaste;
  package$dom.set_onPaste_rs73sa$ = set_onPaste;
  package$dom.get_onCompositionEnd_fxodxh$ = get_onCompositionEnd;
  package$dom.set_onCompositionEnd_9agdka$ = set_onCompositionEnd;
  package$dom.get_onCompositionStart_fxodxh$ = get_onCompositionStart;
  package$dom.set_onCompositionStart_9agdka$ = set_onCompositionStart;
  package$dom.get_onCompositionUpdate_fxodxh$ = get_onCompositionUpdate;
  package$dom.set_onCompositionUpdate_9agdka$ = set_onCompositionUpdate;
  package$dom.get_onFocus_fxodxh$ = get_onFocus;
  package$dom.set_onFocus_5y81y0$ = set_onFocus;
  package$dom.get_onBlur_fxodxh$ = get_onBlur;
  package$dom.set_onBlur_5y81y0$ = set_onBlur;
  package$dom.get_onChange_fxodxh$ = get_onChange;
  package$dom.set_onChange_48e8z8$ = set_onChange;
  package$dom.get_onBeforeInput_fxodxh$ = get_onBeforeInput;
  package$dom.set_onBeforeInput_8970js$ = set_onBeforeInput;
  package$dom.get_onInput_fxodxh$ = get_onInput;
  package$dom.set_onInput_8970js$ = set_onInput;
  package$dom.get_onReset_fxodxh$ = get_onReset;
  package$dom.set_onReset_8970js$ = set_onReset;
  package$dom.get_onSubmit_fxodxh$ = get_onSubmit;
  package$dom.set_onSubmit_8970js$ = set_onSubmit;
  package$dom.get_onInvalid_fxodxh$ = get_onInvalid;
  package$dom.set_onInvalid_8970js$ = set_onInvalid;
  package$dom.get_onLoad_fxodxh$ = get_onLoad;
  package$dom.set_onLoad_ng3l3b$ = set_onLoad;
  package$dom.get_onError_fxodxh$ = get_onError;
  package$dom.set_onError_ng3l3b$ = set_onError;
  package$dom.get_onKeyDown_fxodxh$ = get_onKeyDown;
  package$dom.set_onKeyDown_sqit91$ = set_onKeyDown;
  package$dom.get_onKeyPress_fxodxh$ = get_onKeyPress;
  package$dom.set_onKeyPress_sqit91$ = set_onKeyPress;
  package$dom.get_onKeyUp_fxodxh$ = get_onKeyUp;
  package$dom.set_onKeyUp_sqit91$ = set_onKeyUp;
  package$dom.get_onAbort_fxodxh$ = get_onAbort;
  package$dom.set_onAbort_ng3l3b$ = set_onAbort;
  package$dom.get_onCanPlay_fxodxh$ = get_onCanPlay;
  package$dom.set_onCanPlay_ng3l3b$ = set_onCanPlay;
  package$dom.get_onCanPlayThrough_fxodxh$ = get_onCanPlayThrough;
  package$dom.set_onCanPlayThrough_ng3l3b$ = set_onCanPlayThrough;
  package$dom.get_onDurationChange_fxodxh$ = get_onDurationChange;
  package$dom.set_onDurationChange_ng3l3b$ = set_onDurationChange;
  package$dom.get_onEmptied_fxodxh$ = get_onEmptied;
  package$dom.set_onEmptied_ng3l3b$ = set_onEmptied;
  package$dom.get_onEncrypted_fxodxh$ = get_onEncrypted;
  package$dom.set_onEncrypted_ng3l3b$ = set_onEncrypted;
  package$dom.get_onEnded_fxodxh$ = get_onEnded;
  package$dom.set_onEnded_ng3l3b$ = set_onEnded;
  package$dom.get_onLoadedData_fxodxh$ = get_onLoadedData;
  package$dom.set_onLoadedData_ng3l3b$ = set_onLoadedData;
  package$dom.get_onLoadedMetadata_fxodxh$ = get_onLoadedMetadata;
  package$dom.set_onLoadedMetadata_ng3l3b$ = set_onLoadedMetadata;
  package$dom.get_onLoadStart_fxodxh$ = get_onLoadStart;
  package$dom.set_onLoadStart_ng3l3b$ = set_onLoadStart;
  package$dom.get_onPause_fxodxh$ = get_onPause;
  package$dom.set_onPause_ng3l3b$ = set_onPause;
  package$dom.get_onPlay_fxodxh$ = get_onPlay;
  package$dom.set_onPlay_ng3l3b$ = set_onPlay;
  package$dom.get_onPlaying_fxodxh$ = get_onPlaying;
  package$dom.set_onPlaying_ng3l3b$ = set_onPlaying;
  package$dom.get_onProgress_fxodxh$ = get_onProgress;
  package$dom.set_onProgress_ng3l3b$ = set_onProgress;
  package$dom.get_onRateChange_fxodxh$ = get_onRateChange;
  package$dom.set_onRateChange_ng3l3b$ = set_onRateChange;
  package$dom.get_onSeeked_fxodxh$ = get_onSeeked;
  package$dom.set_onSeeked_ng3l3b$ = set_onSeeked;
  package$dom.get_onSeeking_fxodxh$ = get_onSeeking;
  package$dom.set_onSeeking_ng3l3b$ = set_onSeeking;
  package$dom.get_onStalled_fxodxh$ = get_onStalled;
  package$dom.set_onStalled_ng3l3b$ = set_onStalled;
  package$dom.get_onSuspend_fxodxh$ = get_onSuspend;
  package$dom.set_onSuspend_ng3l3b$ = set_onSuspend;
  package$dom.get_onTimeUpdate_fxodxh$ = get_onTimeUpdate;
  package$dom.set_onTimeUpdate_ng3l3b$ = set_onTimeUpdate;
  package$dom.get_onVolumeChange_fxodxh$ = get_onVolumeChange;
  package$dom.set_onVolumeChange_ng3l3b$ = set_onVolumeChange;
  package$dom.get_onWaiting_fxodxh$ = get_onWaiting;
  package$dom.set_onWaiting_ng3l3b$ = set_onWaiting;
  package$dom.get_onAuxClick_fxodxh$ = get_onAuxClick;
  package$dom.set_onAuxClick_evmc4n$ = set_onAuxClick;
  package$dom.get_onClick_fxodxh$ = get_onClick;
  package$dom.set_onClick_evmc4n$ = set_onClick;
  package$dom.get_onContextMenu_fxodxh$ = get_onContextMenu;
  package$dom.set_onContextMenu_evmc4n$ = set_onContextMenu;
  package$dom.get_onDoubleClick_fxodxh$ = get_onDoubleClick;
  package$dom.set_onDoubleClick_evmc4n$ = set_onDoubleClick;
  package$dom.get_onDrag_fxodxh$ = get_onDrag;
  package$dom.set_onDrag_cl1hiw$ = set_onDrag;
  package$dom.get_onDragEnd_fxodxh$ = get_onDragEnd;
  package$dom.set_onDragEnd_cl1hiw$ = set_onDragEnd;
  package$dom.get_onDragEnter_fxodxh$ = get_onDragEnter;
  package$dom.set_onDragEnter_cl1hiw$ = set_onDragEnter;
  package$dom.get_onDragExit_fxodxh$ = get_onDragExit;
  package$dom.set_onDragExit_cl1hiw$ = set_onDragExit;
  package$dom.get_onDragLeave_fxodxh$ = get_onDragLeave;
  package$dom.set_onDragLeave_cl1hiw$ = set_onDragLeave;
  package$dom.get_onDragOver_fxodxh$ = get_onDragOver;
  package$dom.set_onDragOver_cl1hiw$ = set_onDragOver;
  package$dom.get_onDragStart_fxodxh$ = get_onDragStart;
  package$dom.set_onDragStart_cl1hiw$ = set_onDragStart;
  package$dom.get_onDrop_fxodxh$ = get_onDrop;
  package$dom.set_onDrop_cl1hiw$ = set_onDrop;
  package$dom.get_onMouseDown_fxodxh$ = get_onMouseDown;
  package$dom.set_onMouseDown_evmc4n$ = set_onMouseDown;
  package$dom.get_onMouseEnter_fxodxh$ = get_onMouseEnter;
  package$dom.set_onMouseEnter_evmc4n$ = set_onMouseEnter;
  package$dom.get_onMouseLeave_fxodxh$ = get_onMouseLeave;
  package$dom.set_onMouseLeave_evmc4n$ = set_onMouseLeave;
  package$dom.get_onMouseMove_fxodxh$ = get_onMouseMove;
  package$dom.set_onMouseMove_evmc4n$ = set_onMouseMove;
  package$dom.get_onMouseOut_fxodxh$ = get_onMouseOut;
  package$dom.set_onMouseOut_evmc4n$ = set_onMouseOut;
  package$dom.get_onMouseOver_fxodxh$ = get_onMouseOver;
  package$dom.set_onMouseOver_evmc4n$ = set_onMouseOver;
  package$dom.get_onMouseUp_fxodxh$ = get_onMouseUp;
  package$dom.set_onMouseUp_evmc4n$ = set_onMouseUp;
  package$dom.get_onSelect_fxodxh$ = get_onSelect;
  package$dom.set_onSelect_ng3l3b$ = set_onSelect;
  package$dom.get_onTouchCancel_fxodxh$ = get_onTouchCancel;
  package$dom.set_onTouchCancel_s0ibk1$ = set_onTouchCancel;
  package$dom.get_onTouchEnd_fxodxh$ = get_onTouchEnd;
  package$dom.set_onTouchEnd_s0ibk1$ = set_onTouchEnd;
  package$dom.get_onTouchMove_fxodxh$ = get_onTouchMove;
  package$dom.set_onTouchMove_s0ibk1$ = set_onTouchMove;
  package$dom.get_onTouchStart_fxodxh$ = get_onTouchStart;
  package$dom.set_onTouchStart_s0ibk1$ = set_onTouchStart;
  package$dom.get_onPointerDown_fxodxh$ = get_onPointerDown;
  package$dom.set_onPointerDown_6rtczh$ = set_onPointerDown;
  package$dom.get_onPointerMove_fxodxh$ = get_onPointerMove;
  package$dom.set_onPointerMove_6rtczh$ = set_onPointerMove;
  package$dom.get_onPointerUp_fxodxh$ = get_onPointerUp;
  package$dom.set_onPointerUp_6rtczh$ = set_onPointerUp;
  package$dom.get_onPointerCancel_fxodxh$ = get_onPointerCancel;
  package$dom.set_onPointerCancel_6rtczh$ = set_onPointerCancel;
  package$dom.get_onPointerEnter_fxodxh$ = get_onPointerEnter;
  package$dom.set_onPointerEnter_6rtczh$ = set_onPointerEnter;
  package$dom.get_onPointerLeave_fxodxh$ = get_onPointerLeave;
  package$dom.set_onPointerLeave_6rtczh$ = set_onPointerLeave;
  package$dom.get_onPointerOver_fxodxh$ = get_onPointerOver;
  package$dom.set_onPointerOver_6rtczh$ = set_onPointerOver;
  package$dom.get_onPointerOut_fxodxh$ = get_onPointerOut;
  package$dom.set_onPointerOut_6rtczh$ = set_onPointerOut;
  package$dom.get_onGotPointerCapture_fxodxh$ = get_onGotPointerCapture;
  package$dom.set_onGotPointerCapture_6rtczh$ = set_onGotPointerCapture;
  package$dom.get_onLostPointerCapture_fxodxh$ = get_onLostPointerCapture;
  package$dom.set_onLostPointerCapture_6rtczh$ = set_onLostPointerCapture;
  package$dom.get_onScroll_fxodxh$ = get_onScroll;
  package$dom.set_onScroll_8u7wna$ = set_onScroll;
  package$dom.get_onWheel_fxodxh$ = get_onWheel;
  package$dom.set_onWheel_6lubrv$ = set_onWheel;
  package$dom.get_onAnimationStart_fxodxh$ = get_onAnimationStart;
  package$dom.set_onAnimationStart_ybk324$ = set_onAnimationStart;
  package$dom.get_onAnimationEnd_fxodxh$ = get_onAnimationEnd;
  package$dom.set_onAnimationEnd_ybk324$ = set_onAnimationEnd;
  package$dom.get_onAnimationIteration_fxodxh$ = get_onAnimationIteration;
  package$dom.set_onAnimationIteration_ybk324$ = set_onAnimationIteration;
  package$dom.get_onTransitionEnd_fxodxh$ = get_onTransitionEnd;
  package$dom.set_onTransitionEnd_4qlh5z$ = set_onTransitionEnd;
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  Object.defineProperty(RDOMBuilder, 'Companion', {
    get: RDOMBuilder$Companion_getInstance
  });
  package$dom.RDOMBuilder = RDOMBuilder;
  $$importsForInline$$['kotlin-react-dom'] = _;
  package$dom.attrs_cftwgj$ = attrs;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$dom.RDOMBuilderImpl = RDOMBuilderImpl;
  package$dom.setProp_v86kls$ = setProp;
  package$dom.render_2955dm$ = render_0;
  package$dom.renderIntoRoot_elv2ha$ = renderIntoRoot;
  package$dom.hydrate_2955dm$ = hydrate_0;
  package$dom.createPortal_4s0l5f$ = createPortal_0;
  package$dom.fixAttributeName_61zpoe$ = fixAttributeName;
  Object.defineProperty(package$dom, 'StringAttr', {
    get: StringAttr_getInstance
  });
  package$dom.get_key_6s7ubj$ = get_key;
  package$dom.set_key_g0n3bx$ = set_key;
  package$dom.get_defaultValue_a2ovwx$ = get_defaultValue;
  package$dom.set_defaultValue_q3v29f$ = set_defaultValue;
  package$dom.get_defaultValue_dtfm6v$ = get_defaultValue_0;
  package$dom.set_defaultValue_5ng1o5$ = set_defaultValue_0;
  package$dom.get_value_dtfm6v$ = get_value;
  package$dom.set_value_5ng1o5$ = set_value;
  package$dom.get_jsStyle_6s7ubj$ = get_jsStyle;
  package$dom.set_jsStyle_uekstc$ = set_jsStyle;
  Object.defineProperty(package$dom, 'jsStyleMarker', {
    get: function () {
      return jsStyleMarker;
    }
  });
  package$dom.jsStyle_ymsho7$ = jsStyle;
  package$dom.tag_usjfi1$ = tag;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$dom.a_nbz07b$ = a;
  package$dom.abbr_2pbh6j$ = abbr;
  package$dom.address_z0z9h0$ = address;
  package$dom.area_88drbb$ = area;
  package$dom.article_oyo50y$ = article;
  package$dom.aside_d4tg9c$ = aside;
  package$dom.audio_26aei6$ = audio;
  package$dom.b_7nhtl2$ = b;
  package$dom.base_1qtasl$ = base;
  package$dom.bdi_e0blcx$ = bdi;
  package$dom.bdo_ydoj6j$ = bdo;
  package$dom.blockquote_244j8j$ = blockquote;
  package$dom.body_qvl2vq$ = body;
  package$dom.br_dl5xac$ = br;
  package$dom.button_ueq2um$ = button;
  package$dom.canvas_xoe246$ = canvas;
  package$dom.canvas_jixbo$ = canvas_0;
  package$dom.caption_ix3blu$ = caption;
  package$dom.cite_gtb7bp$ = cite;
  package$dom.code_e1ernl$ = code;
  package$dom.col_5agiaw$ = col;
  package$dom.colgroup_efezmb$ = colgroup;
  package$dom.datalist_bhll8k$ = datalist;
  package$dom.dd_7bhhcc$ = dd;
  package$dom.del_lx3a6b$ = del;
  package$dom.details_dx18be$ = details;
  package$dom.dfn_gfa744$ = dfn;
  package$dom.dialog_r2vd0$ = dialog;
  package$dom.div_gtrzbd$ = div;
  package$dom.dl_asxds4$ = dl;
  package$dom.dt_eada7w$ = dt;
  package$dom.em_oqozj8$ = em;
  package$dom.embed_n808k1$ = embed;
  package$dom.fieldset_hp7o$ = fieldset;
  package$dom.figcaption_m3xu5m$ = figcaption;
  package$dom.figure_1mq3ag$ = figure;
  package$dom.footer_xcq26p$ = footer;
  package$dom.form_7ftnwq$ = form;
  package$dom.h1_quudml$ = h1;
  package$dom.h2_zaswbi$ = h2;
  package$dom.h3_racmyp$ = h3;
  package$dom.h4_iue49s$ = h4;
  package$dom.h5_aeflkv$ = h5;
  package$dom.h6_1yh2vy$ = h6;
  package$dom.head_elsczb$ = head;
  package$dom.header_xi6ch$ = header;
  package$dom.hr_ld1ake$ = hr;
  package$dom.html_a3w7j2$ = html;
  package$dom.i_jkw8pr$ = i;
  package$dom.iframe_ft8ple$ = iframe;
  package$dom.iframe_i8zf9o$ = iframe_0;
  package$dom.img_vso3mj$ = img;
  package$dom.input_etd37n$ = input;
  package$dom.ins_x2jgqu$ = ins;
  package$dom.kbd_547kbf$ = kbd;
  package$dom.label_thtid0$ = label;
  package$dom.legend_jb5h3z$ = legend;
  package$dom.li_239rhr$ = li;
  package$dom.link_28p9e6$ = link;
  package$dom.main_szkgy5$ = main;
  package$dom.map_5olbsf$ = map;
  package$dom.mark_fbhysh$ = mark;
  package$dom.math_g9a7ss$ = math;
  package$dom.meta_lff4tg$ = meta;
  package$dom.meter_pg8oht$ = meter;
  package$dom.nav_5mbwij$ = nav;
  package$dom.noscript_3p4atc$ = noscript;
  package$dom.objectTag_hy8adv$ = objectTag;
  package$dom.ol_r4jh81$ = ol;
  package$dom.optgroup_q968rn$ = optgroup;
  package$dom.option_xoe246$ = option;
  package$dom.option_10ahkn$ = option_0;
  package$dom.output_6fkigb$ = output;
  package$dom.p_vianug$ = p;
  package$dom.param_r0oori$ = param;
  package$dom.picture_2zheom$ = picture;
  package$dom.pre_bsqswr$ = pre;
  package$dom.progress_qram69$ = progress;
  package$dom.q_n2c55j$ = q;
  package$dom.rp_68stce$ = rp;
  package$dom.rt_rj19fa$ = rt;
  package$dom.ruby_w5f9pu$ = ruby;
  package$dom.samp_uvv9ff$ = samp;
  package$dom.script_4uv0f2$ = script;
  package$dom.section_7ougmb$ = section;
  package$dom.select_iug7io$ = select;
  package$dom.small_c9m43j$ = small;
  package$dom.source_ly1yj5$ = source;
  package$dom.span_t2ee0y$ = span;
  package$dom.strong_oovi1h$ = strong;
  package$dom.style_xoe246$ = style;
  package$dom.style_kht6w9$ = style_0;
  package$dom.sub_v7eync$ = sub;
  package$dom.sup_fyw92e$ = sup;
  package$dom.svg_xoe246$ = svg;
  package$dom.svg_bdchms$ = svg_0;
  package$dom.table_lwybxi$ = table;
  package$dom.tbody_tx0lke$ = tbody;
  package$dom.td_a9j6l8$ = td;
  package$dom.textarea_ctzq07$ = textarea;
  package$dom.textarea_4u31cv$ = textarea_0;
  package$dom.tfoot_agonsq$ = tfoot;
  package$dom.th_bo9ux3$ = th;
  package$dom.thead_jad978$ = thead;
  package$dom.time_m4er8h$ = time;
  package$dom.title_hw0qe1$ = title;
  package$dom.title_cp8zsd$ = title_0;
  package$dom.tr_y4c0um$ = tr;
  package$dom.ul_yweui3$ = ul;
  package$dom.varTag_wqfjdr$ = varTag;
  package$dom.video_4xrr2l$ = video;
  Object.defineProperty(package$html, 'FormEncType', {
    get: FormEncType_getInstance
  });
  Object.defineProperty(package$html, 'FormMethod', {
    get: FormMethod_getInstance
  });
  package$html.get_ref_yct6uq$ = get_ref;
  package$html.set_ref_ea39i6$ = set_ref;
  var package$server = package$dom.server || (package$dom.server = {});
  package$server.renderToString_zepujl$ = renderToString;
  package$server.renderToStaticMarkup_zepujl$ = renderToStaticMarkup;
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
  events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
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
  Kotlin.defineModule('kotlin-react-dom', _);
  return _;
}));
