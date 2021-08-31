(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'kotlin-logging-jsLegacy', 'ktor-ktor-io-js-legacy', 'kotlin-css', 'kotlin-styled', '@material-ui/core', 'kotlin-react', 'ktor-ktor-client-json-js-legacy', 'ktor-ktor-client-serialization-js-legacy', 'ktor-ktor-client-core-js-legacy', 'kotlin-react-dom', '@material-ui/lab', 'kotlinx-html-js', 'ktor-ktor-http-js-legacy', 'react-icons/fa', 'kotlinx-coroutines-core', 'kotlinx-serialization-kotlinx-serialization-json-js-legacy', 'react-pro-sidebar'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('kotlin-logging-jsLegacy'), require('ktor-ktor-io-js-legacy'), require('kotlin-css'), require('kotlin-styled'), require('@material-ui/core'), require('kotlin-react'), require('ktor-ktor-client-json-js-legacy'), require('ktor-ktor-client-serialization-js-legacy'), require('ktor-ktor-client-core-js-legacy'), require('kotlin-react-dom'), require('@material-ui/lab'), require('kotlinx-html-js'), require('ktor-ktor-http-js-legacy'), require('react-icons/fa'), require('kotlinx-coroutines-core'), require('kotlinx-serialization-kotlinx-serialization-json-js-legacy'), require('react-pro-sidebar'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-logging-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-logging-jsLegacy' was not found. Please, check whether 'kotlin-logging-jsLegacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-styled'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-styled' was not found. Please, check whether 'kotlin-styled' is loaded prior to 'CryptoAC'.");
    }if (typeof this['@material-ui/core'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency '@material-ui/core' was not found. Please, check whether '@material-ui/core' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-client-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-client-json-js-legacy' was not found. Please, check whether 'ktor-ktor-client-json-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-client-serialization-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-client-serialization-js-legacy' was not found. Please, check whether 'ktor-ktor-client-serialization-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'CryptoAC'.");
    }if (typeof this['@material-ui/lab'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency '@material-ui/lab' was not found. Please, check whether '@material-ui/lab' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['react-icons/fa'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'react-icons/fa' was not found. Please, check whether 'react-icons/fa' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['react-pro-sidebar'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'react-pro-sidebar' was not found. Please, check whether 'react-pro-sidebar' is loaded prior to 'CryptoAC'.");
    }root.CryptoAC = factory(typeof CryptoAC === 'undefined' ? {} : CryptoAC, kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['kotlin-logging-jsLegacy'], this['ktor-ktor-io-js-legacy'], this['kotlin-css'], this['kotlin-styled'], this['@material-ui/core'], this['kotlin-react'], this['ktor-ktor-client-json-js-legacy'], this['ktor-ktor-client-serialization-js-legacy'], this['ktor-ktor-client-core-js-legacy'], this['kotlin-react-dom'], this['@material-ui/lab'], this['kotlinx-html-js'], this['ktor-ktor-http-js-legacy'], this['react-icons/fa'], this['kotlinx-coroutines-core'], this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'], this['react-pro-sidebar']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$kotlin_logging_jsLegacy, $module$ktor_ktor_io_js_legacy, $module$kotlin_css, $module$kotlin_styled, $module$_material_ui_core, $module$kotlin_react, $module$ktor_ktor_client_json_js_legacy, $module$ktor_ktor_client_serialization_js_legacy, $module$ktor_ktor_client_core_js_legacy, $module$kotlin_react_dom, $module$_material_ui_lab, $module$kotlinx_html_js, $module$ktor_ktor_http_js_legacy, $module$react_icons_fa, $module$kotlinx_coroutines_core, $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy, $module$react_pro_sidebar) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var EnumDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.EnumDescriptor;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var mu = $module$kotlin_logging_jsLegacy.mu;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var getKClass = Kotlin.getKClass;
  var PolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.PolymorphicSerializer;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var EnumSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.EnumSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var primitiveArrayConcat = Kotlin.primitiveArrayConcat;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var plus = Kotlin.kotlin.collections.plus_q4559j$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Random = Kotlin.kotlin.random.Random;
  var getCallableRef = Kotlin.getCallableRef;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.NullableSerializer;
  var toString = Kotlin.toString;
  var SealedClassSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.SealedClassSerializer;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var set_zIndex = $module$kotlin_css.kotlinx.css.set_zIndex_a6g65m$;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var setState = $module$kotlin_react.react.setState_kpl3tw$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var get_pct = $module$kotlin_css.kotlinx.css.get_pct_rcaex3$;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_marginLeft = $module$kotlin_css.kotlinx.css.set_marginLeft_n8chyh$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var JsonFeature = $module$ktor_ktor_client_json_js_legacy.io.ktor.client.features.json.JsonFeature;
  var KotlinxSerializer = $module$ktor_ktor_client_serialization_js_legacy.io.ktor.client.features.json.serializer.KotlinxSerializer;
  var HttpCookies = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.cookies.HttpCookies;
  var HttpClient = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.HttpClient_f0veat$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var RComponent = $module$kotlin_react.react.RComponent;
  var html = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder = $module$kotlin_styled.styled.StyledDOMBuilder;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var KotlinLoggingLevel = $module$kotlin_logging_jsLegacy.mu.KotlinLoggingLevel;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var HttpMethod = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMethod;
  var set_marginBottom = $module$kotlin_css.kotlinx.css.set_marginBottom_n8chyh$;
  var set_marginTop = $module$kotlin_css.kotlinx.css.set_marginTop_n8chyh$;
  var set_marginRight = $module$kotlin_css.kotlinx.css.set_marginRight_n8chyh$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_hidden = $module$kotlinx_html_js.kotlinx.html.set_hidden_jqpcbu$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var TextAlign = $module$kotlin_css.kotlinx.css.TextAlign;
  var set_textAlign = $module$kotlin_css.kotlinx.css.set_textAlign_q2ys32$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var set_alignContent = $module$kotlin_css.kotlinx.css.set_alignContent_olgsez$;
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var RDOMBuilder = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var FORM_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var Float = $module$kotlin_css.kotlinx.css.Float;
  var set_float = $module$kotlin_css.kotlinx.css.set_float_oo7voy$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var set_paddingLeft = $module$kotlin_css.kotlinx.css.set_paddingLeft_n8chyh$;
  var set_paddingRight = $module$kotlin_css.kotlinx.css.set_paddingRight_n8chyh$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var set_paddingBottom = $module$kotlin_css.kotlinx.css.set_paddingBottom_n8chyh$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var contentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_41kwpe$;
  var HttpResponse = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpResponse;
  var createKType = Kotlin.createKType;
  var HttpStatusCode = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpStatusCode;
  var Error_0 = Kotlin.kotlin.Error;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.Json;
  var Exception = Kotlin.kotlin.Exception;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var readText = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.readText_rjorc7$;
  var takeFrom = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_jl1sg7$;
  var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod_0 = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpStatement;
  var complete = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.complete_abn2de$;
  var reflect = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
  var typeInfoImpl = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_ca95z9$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var set_maxHeight = $module$kotlin_css.kotlinx.css.set_maxHeight_n8chyh$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var HashSet = Kotlin.kotlin.collections.HashSet;
  var createInvariantKTypeProjection = Kotlin.createInvariantKTypeProjection;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var set_maxWidth = $module$kotlin_css.kotlinx.css.set_maxWidth_n8chyh$;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var formUrlEncode = $module$ktor_ktor_http_js_legacy.io.ktor.http.formUrlEncode_vw30m7$;
  var attributesMapOf_0 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var attributesMapOf_1 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var TextTransform = $module$kotlin_css.kotlinx.css.TextTransform;
  var set_textTransform = $module$kotlin_css.kotlinx.css.set_textTransform_ktraln$;
  var FontWeight = $module$kotlin_css.kotlinx.css.FontWeight;
  var set_fontWeight = $module$kotlin_css.kotlinx.css.set_fontWeight_6wqc8f$;
  var set_letterSpacing = $module$kotlin_css.kotlinx.css.set_letterSpacing_n8chyh$;
  var Overflow = $module$kotlin_css.kotlinx.css.Overflow;
  var set_overflow = $module$kotlin_css.kotlinx.css.set_overflow_qhpm6s$;
  var TextOverflow = $module$kotlin_css.kotlinx.css.TextOverflow;
  var set_textOverflow = $module$kotlin_css.kotlinx.css.set_textOverflow_67zq6f$;
  var WhiteSpace = $module$kotlin_css.kotlinx.css.WhiteSpace;
  var set_whiteSpace = $module$kotlin_css.kotlinx.css.set_whiteSpace_9bsrpj$;
  var padding = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var Cursor = $module$kotlin_css.kotlinx.css.Cursor;
  var set_cursor = $module$kotlin_css.kotlinx.css.set_cursor_hrkqtc$;
  var set_borderBottom = $module$kotlin_css.kotlinx.css.set_borderBottom_krvuuu$;
  var padding_0 = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var set_borderRadius = $module$kotlin_css.kotlinx.css.set_borderRadius_n8chyh$;
  var set_background = $module$kotlin_css.kotlinx.css.set_background_krvuuu$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var TextDecoration = $module$kotlin_css.kotlinx.css.properties.TextDecoration;
  var set_textDecoration = $module$kotlin_css.kotlinx.css.set_textDecoration_pbf7yq$;
  var margin = $module$kotlin_css.kotlinx.css.margin_9vmwvs$;
  var FormPart = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.FormPart;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var formData = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.formData_l3ed5z$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var SUB_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUB;
  var P_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var SPAN_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var A_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var url_0 = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.url_g8iu3v$;
  var MultiPartFormDataContent_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.MultiPartFormDataContent;
  var HeadersBuilder_init = $module$ktor_ktor_http_js_legacy.io.ktor.http.HeadersBuilder;
  OutcomeCode.prototype = Object.create(Enum.prototype);
  OutcomeCode.prototype.constructor = OutcomeCode;
  CoreType.prototype = Object.create(Enum.prototype);
  CoreType.prototype.constructor = CoreType;
  CoreParametersCloud.prototype = Object.create(CoreParameters.prototype);
  CoreParametersCloud.prototype.constructor = CoreParametersCloud;
  CoreParametersMQTT.prototype = Object.create(CoreParameters.prototype);
  CoreParametersMQTT.prototype.constructor = CoreParametersMQTT;
  Element.prototype = Object.create(CryptoACObject.prototype);
  Element.prototype.constructor = Element;
  ActiveElement.prototype = Object.create(Element.prototype);
  ActiveElement.prototype.constructor = ActiveElement;
  ElementStatus.prototype = Object.create(Enum.prototype);
  ElementStatus.prototype.constructor = ElementStatus;
  ElementType.prototype = Object.create(Enum.prototype);
  ElementType.prototype.constructor = ElementType;
  ElementTypeWithKey.prototype = Object.create(Enum.prototype);
  ElementTypeWithKey.prototype.constructor = ElementTypeWithKey;
  ElementTypeWithStatus.prototype = Object.create(Enum.prototype);
  ElementTypeWithStatus.prototype.constructor = ElementTypeWithStatus;
  ElementTypeWithVersionNumber.prototype = Object.create(Enum.prototype);
  ElementTypeWithVersionNumber.prototype.constructor = ElementTypeWithVersionNumber;
  File.prototype = Object.create(Element.prototype);
  File.prototype.constructor = File;
  Role.prototype = Object.create(ActiveElement.prototype);
  Role.prototype.constructor = Role;
  User.prototype = Object.create(ActiveElement.prototype);
  User.prototype.constructor = User;
  EnforcementType.prototype = Object.create(Enum.prototype);
  EnforcementType.prototype.constructor = EnforcementType;
  Tuple.prototype = Object.create(CryptoACObject.prototype);
  Tuple.prototype.constructor = Tuple;
  FileTuple.prototype = Object.create(Tuple.prototype);
  FileTuple.prototype.constructor = FileTuple;
  PermissionTuple.prototype = Object.create(Tuple.prototype);
  PermissionTuple.prototype.constructor = PermissionTuple;
  PermissionType.prototype = Object.create(Enum.prototype);
  PermissionType.prototype.constructor = PermissionType;
  RoleTuple.prototype = Object.create(Tuple.prototype);
  RoleTuple.prototype.constructor = RoleTuple;
  AsymKeysType.prototype = Object.create(Enum.prototype);
  AsymKeysType.prototype.constructor = AsymKeysType;
  CryptoType.prototype = Object.create(Enum.prototype);
  CryptoType.prototype.constructor = CryptoType;
  DSInterfaceCloudParameters.prototype = Object.create(DSInterfaceParameters.prototype);
  DSInterfaceCloudParameters.prototype.constructor = DSInterfaceCloudParameters;
  DSInterfaceMQTTParameters.prototype = Object.create(DSInterfaceParameters.prototype);
  DSInterfaceMQTTParameters.prototype.constructor = DSInterfaceMQTTParameters;
  AclType.prototype = Object.create(Enum.prototype);
  AclType.prototype.constructor = AclType;
  MSInterfaceMySQLParameters.prototype = Object.create(MSInterfaceParameters.prototype);
  MSInterfaceMySQLParameters.prototype.constructor = MSInterfaceMySQLParameters;
  RMInterfaceCloudParameters.prototype = Object.create(RMInterfaceParameters.prototype);
  RMInterfaceCloudParameters.prototype.constructor = RMInterfaceCloudParameters;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  CryptoACAlertSeverity.prototype = Object.create(Enum.prototype);
  CryptoACAlertSeverity.prototype.constructor = CryptoACAlertSeverity;
  CryptoACAlert.prototype = Object.create(RComponent.prototype);
  CryptoACAlert.prototype.constructor = CryptoACAlert;
  CryptoACCheckbox.prototype = Object.create(RComponent.prototype);
  CryptoACCheckbox.prototype.constructor = CryptoACCheckbox;
  CryptoACForm.prototype = Object.create(RComponent.prototype);
  CryptoACForm.prototype.constructor = CryptoACForm;
  CryptoACRadioGroup.prototype = Object.create(RComponent.prototype);
  CryptoACRadioGroup.prototype.constructor = CryptoACRadioGroup;
  CryptoACTextField.prototype = Object.create(RComponent.prototype);
  CryptoACTextField.prototype.constructor = CryptoACTextField;
  CryptoACTable.prototype = Object.create(RComponent.prototype);
  CryptoACTable.prototype.constructor = CryptoACTable;
  Content.prototype = Object.create(RComponent.prototype);
  Content.prototype.constructor = Content;
  MQTTContent.prototype = Object.create(RComponent.prototype);
  MQTTContent.prototype.constructor = MQTTContent;
  CloudContent.prototype = Object.create(RComponent.prototype);
  CloudContent.prototype.constructor = CloudContent;
  Login.prototype = Object.create(RComponent.prototype);
  Login.prototype.constructor = Login;
  Sidebar.prototype = Object.create(RComponent.prototype);
  Sidebar.prototype.constructor = Sidebar;
  function API() {
    API_instance = this;
    this.HTTP = 'http://';
    this.HTTPS = 'https://';
    this.VERSION1_0 = '/v1/';
    this.CURRENT_VERSION_0 = this.VERSION1_0;
    this.PROXY = '/v1/proxy/';
    this.RM = '/v1/rm/';
    this.DS = '/v1/ds/';
    this.OPA = '/v1/';
    this.USERS = 'users/{Core}/';
    this.ROLES = 'roles/{Core}/';
    this.FILES = 'files/{Core}/';
    this.ASSIGNMENTS = 'assignments/{Core}/';
    this.PERMISSIONS = 'permissions/{Core}/';
    this.PROFILES = '/v1/profile/{Core}/';
    this.LOGIN = '/login/';
    this.LOGOUT = '/logout/';
    this.OPA_RBAC_POLICY = '/v1/policies/rbac';
    this.OPA_RBAC_DATA = '/v1/data/rbac';
    this.OPA_RBAC_QUERY = '/v1/data/app/rbac/allow';
  }
  API.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'API',
    interfaces: []
  };
  var API_instance = null;
  function API_getInstance() {
    if (API_instance === null) {
      new API();
    }return API_instance;
  }
  function Constants() {
    Constants_instance = this;
    this.ADMIN = 'admin';
  }
  Constants.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Constants',
    interfaces: []
  };
  var Constants_instance = null;
  function Constants_getInstance() {
    if (Constants_instance === null) {
      new Constants();
    }return Constants_instance;
  }
  function OutcomeCode(name, ordinal) {
    OutcomeCode$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OutcomeCode_initFields() {
    OutcomeCode_initFields = function () {
    };
    OutcomeCode$CODE_000_SUCCESS_instance = new OutcomeCode('CODE_000_SUCCESS', 0);
    OutcomeCode$CODE_001_USER_ALREADY_EXISTS_instance = new OutcomeCode('CODE_001_USER_ALREADY_EXISTS', 1);
    OutcomeCode$CODE_002_ROLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_002_ROLE_ALREADY_EXISTS', 2);
    OutcomeCode$CODE_003_FILE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_003_FILE_ALREADY_EXISTS', 3);
    OutcomeCode$CODE_004_USER_NOT_FOUND_instance = new OutcomeCode('CODE_004_USER_NOT_FOUND', 4);
    OutcomeCode$CODE_005_ROLE_NOT_FOUND_instance = new OutcomeCode('CODE_005_ROLE_NOT_FOUND', 5);
    OutcomeCode$CODE_006_FILE_NOT_FOUND_instance = new OutcomeCode('CODE_006_FILE_NOT_FOUND', 6);
    OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_instance = new OutcomeCode('CODE_007_ROLETUPLE_NOT_FOUND', 7);
    OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_instance = new OutcomeCode('CODE_008_PERMISSIONTUPLE_NOT_FOUND', 8);
    OutcomeCode$CODE_009_FILETUPLE_NOT_FOUND_instance = new OutcomeCode('CODE_009_FILETUPLE_NOT_FOUND', 9);
    OutcomeCode$CODE_010_ROLETUPLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_010_ROLETUPLE_ALREADY_EXISTS', 10);
    OutcomeCode$CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS', 11);
    OutcomeCode$CODE_012_FILETUPLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_012_FILETUPLE_ALREADY_EXISTS', 12);
    OutcomeCode$CODE_013_USER_WAS_DELETED_instance = new OutcomeCode('CODE_013_USER_WAS_DELETED', 13);
    OutcomeCode$CODE_014_ROLE_WAS_DELETED_instance = new OutcomeCode('CODE_014_ROLE_WAS_DELETED', 14);
    OutcomeCode$CODE_015_FILE_WAS_DELETED_instance = new OutcomeCode('CODE_015_FILE_WAS_DELETED', 15);
    OutcomeCode$CODE_016_INVALID_PERMISSION_instance = new OutcomeCode('CODE_016_INVALID_PERMISSION', 16);
    OutcomeCode$CODE_017_INVALID_VERSION_NUMBER_instance = new OutcomeCode('CODE_017_INVALID_VERSION_NUMBER', 17);
    OutcomeCode$CODE_018_INTERFACE_CONFIGURATION_PARAMETERS_instance = new OutcomeCode('CODE_018_INTERFACE_CONFIGURATION_PARAMETERS', 18);
    OutcomeCode$CODE_019_MISSING_PARAMETERS_instance = new OutcomeCode('CODE_019_MISSING_PARAMETERS', 19);
    OutcomeCode$CODE_020_INVALID_PARAMETER_instance = new OutcomeCode('CODE_020_INVALID_PARAMETER', 20);
    OutcomeCode$CODE_021_RM_CONFIGURATION_instance = new OutcomeCode('CODE_021_RM_CONFIGURATION', 21);
    OutcomeCode$CODE_022_ADMIN_CANNOT_BE_MODIFIED_instance = new OutcomeCode('CODE_022_ADMIN_CANNOT_BE_MODIFIED', 22);
    OutcomeCode$CODE_023_USER_CANNOT_BE_MODIFIED_instance = new OutcomeCode('CODE_023_USER_CANNOT_BE_MODIFIED', 23);
    OutcomeCode$CODE_024_FILE_DELETE_instance = new OutcomeCode('CODE_024_FILE_DELETE', 24);
    OutcomeCode$CODE_025_FILE_RENAMING_instance = new OutcomeCode('CODE_025_FILE_RENAMING', 25);
    OutcomeCode$CODE_026_TUPLE_FORMAT_instance = new OutcomeCode('CODE_026_TUPLE_FORMAT', 26);
    OutcomeCode$CODE_027_AC_ENFORCEMENT_INCONSISTENT_instance = new OutcomeCode('CODE_027_AC_ENFORCEMENT_INCONSISTENT', 27);
    OutcomeCode$CODE_028_OPA_POLICY_CREATION_instance = new OutcomeCode('CODE_028_OPA_POLICY_CREATION', 28);
    OutcomeCode$CODE_029_OPA_DOCUMENT_UPDATE_instance = new OutcomeCode('CODE_029_OPA_DOCUMENT_UPDATE', 29);
    OutcomeCode$CODE_030_OPA_DOCUMENT_DOWNLOAD_instance = new OutcomeCode('CODE_030_OPA_DOCUMENT_DOWNLOAD', 30);
    OutcomeCode$CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS_instance = new OutcomeCode('CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS', 31);
    OutcomeCode$CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS_instance = new OutcomeCode('CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS', 32);
    OutcomeCode$CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS_instance = new OutcomeCode('CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS', 33);
    OutcomeCode$CODE_034_ADMIN_ALREADY_INITIALIZED_instance = new OutcomeCode('CODE_034_ADMIN_ALREADY_INITIALIZED', 34);
    OutcomeCode$CODE_035_FORBIDDEN_instance = new OutcomeCode('CODE_035_FORBIDDEN', 35);
    OutcomeCode$CODE_036_UNAUTHORIZED_instance = new OutcomeCode('CODE_036_UNAUTHORIZED', 36);
    OutcomeCode$CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED_instance = new OutcomeCode('CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED', 37);
    OutcomeCode$CODE_038_PROFILE_NOT_FOUND_instance = new OutcomeCode('CODE_038_PROFILE_NOT_FOUND', 38);
    OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_instance = new OutcomeCode('CODE_039_MALFORMED_PROFILE_FILE', 39);
    OutcomeCode$CODE_040_UR_ASSIGNMENTS_NOT_FOUND_instance = new OutcomeCode('CODE_040_UR_ASSIGNMENTS_NOT_FOUND', 40);
    OutcomeCode$CODE_041_PA_ASSIGNMENTS_NOT_FOUND_instance = new OutcomeCode('CODE_041_PA_ASSIGNMENTS_NOT_FOUND', 41);
    OutcomeCode$CODE_042_RM_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_042_RM_CONNECTION_TIMEOUT', 42);
    OutcomeCode$CODE_043_DS_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_043_DS_CONNECTION_TIMEOUT', 43);
    OutcomeCode$CODE_044_MS_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_044_MS_CONNECTION_TIMEOUT', 44);
    OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_045_PROXY_CONNECTION_TIMEOUT', 45);
    OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_instance = new OutcomeCode('CODE_046_HTTP_METHOD_NOT_SUPPORTED', 46);
    OutcomeCode$CODE_047_UNEXPECTED_instance = new OutcomeCode('CODE_047_UNEXPECTED', 47);
    OutcomeCode$CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS', 48);
    OutcomeCode$CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS', 49);
    OutcomeCode$CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS', 50);
    OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_instance = new OutcomeCode('CODE_051_NO_NEW_MESSAGES_TO_READ', 51);
    OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_instance = new OutcomeCode('CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION', 52);
    OutcomeCode$Companion_getInstance();
  }
  var OutcomeCode$CODE_000_SUCCESS_instance;
  function OutcomeCode$CODE_000_SUCCESS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_000_SUCCESS_instance;
  }
  var OutcomeCode$CODE_001_USER_ALREADY_EXISTS_instance;
  function OutcomeCode$CODE_001_USER_ALREADY_EXISTS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_001_USER_ALREADY_EXISTS_instance;
  }
  var OutcomeCode$CODE_002_ROLE_ALREADY_EXISTS_instance;
  function OutcomeCode$CODE_002_ROLE_ALREADY_EXISTS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_002_ROLE_ALREADY_EXISTS_instance;
  }
  var OutcomeCode$CODE_003_FILE_ALREADY_EXISTS_instance;
  function OutcomeCode$CODE_003_FILE_ALREADY_EXISTS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_003_FILE_ALREADY_EXISTS_instance;
  }
  var OutcomeCode$CODE_004_USER_NOT_FOUND_instance;
  function OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_004_USER_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_005_ROLE_NOT_FOUND_instance;
  function OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_005_ROLE_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_006_FILE_NOT_FOUND_instance;
  function OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_006_FILE_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_instance;
  function OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_instance;
  function OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_009_FILETUPLE_NOT_FOUND_instance;
  function OutcomeCode$CODE_009_FILETUPLE_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_009_FILETUPLE_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_010_ROLETUPLE_ALREADY_EXISTS_instance;
  function OutcomeCode$CODE_010_ROLETUPLE_ALREADY_EXISTS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_010_ROLETUPLE_ALREADY_EXISTS_instance;
  }
  var OutcomeCode$CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS_instance;
  function OutcomeCode$CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS_instance;
  }
  var OutcomeCode$CODE_012_FILETUPLE_ALREADY_EXISTS_instance;
  function OutcomeCode$CODE_012_FILETUPLE_ALREADY_EXISTS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_012_FILETUPLE_ALREADY_EXISTS_instance;
  }
  var OutcomeCode$CODE_013_USER_WAS_DELETED_instance;
  function OutcomeCode$CODE_013_USER_WAS_DELETED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_013_USER_WAS_DELETED_instance;
  }
  var OutcomeCode$CODE_014_ROLE_WAS_DELETED_instance;
  function OutcomeCode$CODE_014_ROLE_WAS_DELETED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_014_ROLE_WAS_DELETED_instance;
  }
  var OutcomeCode$CODE_015_FILE_WAS_DELETED_instance;
  function OutcomeCode$CODE_015_FILE_WAS_DELETED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_015_FILE_WAS_DELETED_instance;
  }
  var OutcomeCode$CODE_016_INVALID_PERMISSION_instance;
  function OutcomeCode$CODE_016_INVALID_PERMISSION_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_016_INVALID_PERMISSION_instance;
  }
  var OutcomeCode$CODE_017_INVALID_VERSION_NUMBER_instance;
  function OutcomeCode$CODE_017_INVALID_VERSION_NUMBER_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_017_INVALID_VERSION_NUMBER_instance;
  }
  var OutcomeCode$CODE_018_INTERFACE_CONFIGURATION_PARAMETERS_instance;
  function OutcomeCode$CODE_018_INTERFACE_CONFIGURATION_PARAMETERS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_018_INTERFACE_CONFIGURATION_PARAMETERS_instance;
  }
  var OutcomeCode$CODE_019_MISSING_PARAMETERS_instance;
  function OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_019_MISSING_PARAMETERS_instance;
  }
  var OutcomeCode$CODE_020_INVALID_PARAMETER_instance;
  function OutcomeCode$CODE_020_INVALID_PARAMETER_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_020_INVALID_PARAMETER_instance;
  }
  var OutcomeCode$CODE_021_RM_CONFIGURATION_instance;
  function OutcomeCode$CODE_021_RM_CONFIGURATION_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_021_RM_CONFIGURATION_instance;
  }
  var OutcomeCode$CODE_022_ADMIN_CANNOT_BE_MODIFIED_instance;
  function OutcomeCode$CODE_022_ADMIN_CANNOT_BE_MODIFIED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_022_ADMIN_CANNOT_BE_MODIFIED_instance;
  }
  var OutcomeCode$CODE_023_USER_CANNOT_BE_MODIFIED_instance;
  function OutcomeCode$CODE_023_USER_CANNOT_BE_MODIFIED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_023_USER_CANNOT_BE_MODIFIED_instance;
  }
  var OutcomeCode$CODE_024_FILE_DELETE_instance;
  function OutcomeCode$CODE_024_FILE_DELETE_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_024_FILE_DELETE_instance;
  }
  var OutcomeCode$CODE_025_FILE_RENAMING_instance;
  function OutcomeCode$CODE_025_FILE_RENAMING_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_025_FILE_RENAMING_instance;
  }
  var OutcomeCode$CODE_026_TUPLE_FORMAT_instance;
  function OutcomeCode$CODE_026_TUPLE_FORMAT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_026_TUPLE_FORMAT_instance;
  }
  var OutcomeCode$CODE_027_AC_ENFORCEMENT_INCONSISTENT_instance;
  function OutcomeCode$CODE_027_AC_ENFORCEMENT_INCONSISTENT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_027_AC_ENFORCEMENT_INCONSISTENT_instance;
  }
  var OutcomeCode$CODE_028_OPA_POLICY_CREATION_instance;
  function OutcomeCode$CODE_028_OPA_POLICY_CREATION_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_028_OPA_POLICY_CREATION_instance;
  }
  var OutcomeCode$CODE_029_OPA_DOCUMENT_UPDATE_instance;
  function OutcomeCode$CODE_029_OPA_DOCUMENT_UPDATE_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_029_OPA_DOCUMENT_UPDATE_instance;
  }
  var OutcomeCode$CODE_030_OPA_DOCUMENT_DOWNLOAD_instance;
  function OutcomeCode$CODE_030_OPA_DOCUMENT_DOWNLOAD_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_030_OPA_DOCUMENT_DOWNLOAD_instance;
  }
  var OutcomeCode$CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS_instance;
  function OutcomeCode$CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS_instance;
  }
  var OutcomeCode$CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS_instance;
  function OutcomeCode$CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS_instance;
  }
  var OutcomeCode$CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS_instance;
  function OutcomeCode$CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS_instance;
  }
  var OutcomeCode$CODE_034_ADMIN_ALREADY_INITIALIZED_instance;
  function OutcomeCode$CODE_034_ADMIN_ALREADY_INITIALIZED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_034_ADMIN_ALREADY_INITIALIZED_instance;
  }
  var OutcomeCode$CODE_035_FORBIDDEN_instance;
  function OutcomeCode$CODE_035_FORBIDDEN_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_035_FORBIDDEN_instance;
  }
  var OutcomeCode$CODE_036_UNAUTHORIZED_instance;
  function OutcomeCode$CODE_036_UNAUTHORIZED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_036_UNAUTHORIZED_instance;
  }
  var OutcomeCode$CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED_instance;
  function OutcomeCode$CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED_instance;
  }
  var OutcomeCode$CODE_038_PROFILE_NOT_FOUND_instance;
  function OutcomeCode$CODE_038_PROFILE_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_038_PROFILE_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_instance;
  function OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_instance;
  }
  var OutcomeCode$CODE_040_UR_ASSIGNMENTS_NOT_FOUND_instance;
  function OutcomeCode$CODE_040_UR_ASSIGNMENTS_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_040_UR_ASSIGNMENTS_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_041_PA_ASSIGNMENTS_NOT_FOUND_instance;
  function OutcomeCode$CODE_041_PA_ASSIGNMENTS_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_041_PA_ASSIGNMENTS_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_042_RM_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_042_RM_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_042_RM_CONNECTION_TIMEOUT_instance;
  }
  var OutcomeCode$CODE_043_DS_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_043_DS_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_043_DS_CONNECTION_TIMEOUT_instance;
  }
  var OutcomeCode$CODE_044_MS_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_044_MS_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_044_MS_CONNECTION_TIMEOUT_instance;
  }
  var OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_instance;
  }
  var OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_instance;
  function OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_instance;
  }
  var OutcomeCode$CODE_047_UNEXPECTED_instance;
  function OutcomeCode$CODE_047_UNEXPECTED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_047_UNEXPECTED_instance;
  }
  var OutcomeCode$CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS_instance;
  function OutcomeCode$CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS_instance;
  }
  var OutcomeCode$CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS_instance;
  function OutcomeCode$CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS_instance;
  }
  var OutcomeCode$CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS_instance;
  function OutcomeCode$CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS_instance;
  }
  var OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_instance;
  function OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_instance;
  }
  var OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_instance;
  function OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_instance;
  }
  function OutcomeCode$Companion() {
    OutcomeCode$Companion_instance = this;
  }
  OutcomeCode$Companion.prototype.serializer = function () {
    return OutcomeCode$$serializer_getInstance();
  };
  OutcomeCode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OutcomeCode$Companion_instance = null;
  function OutcomeCode$Companion_getInstance() {
    if (OutcomeCode$Companion_instance === null) {
      new OutcomeCode$Companion();
    }return OutcomeCode$Companion_instance;
  }
  function OutcomeCode$$serializer() {
    this.descriptor_n4u1rd$_0 = new EnumDescriptor('eu.fbk.st.cryptoac.OutcomeCode', 53);
    this.descriptor.addElement_ivxn3r$('CODE_000_SUCCESS');
    this.descriptor.addElement_ivxn3r$('CODE_001_USER_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_002_ROLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_003_FILE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_004_USER_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_005_ROLE_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_006_FILE_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_007_ROLETUPLE_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_008_PERMISSIONTUPLE_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_009_FILETUPLE_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_010_ROLETUPLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_012_FILETUPLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_013_USER_WAS_DELETED');
    this.descriptor.addElement_ivxn3r$('CODE_014_ROLE_WAS_DELETED');
    this.descriptor.addElement_ivxn3r$('CODE_015_FILE_WAS_DELETED');
    this.descriptor.addElement_ivxn3r$('CODE_016_INVALID_PERMISSION');
    this.descriptor.addElement_ivxn3r$('CODE_017_INVALID_VERSION_NUMBER');
    this.descriptor.addElement_ivxn3r$('CODE_018_INTERFACE_CONFIGURATION_PARAMETERS');
    this.descriptor.addElement_ivxn3r$('CODE_019_MISSING_PARAMETERS');
    this.descriptor.addElement_ivxn3r$('CODE_020_INVALID_PARAMETER');
    this.descriptor.addElement_ivxn3r$('CODE_021_RM_CONFIGURATION');
    this.descriptor.addElement_ivxn3r$('CODE_022_ADMIN_CANNOT_BE_MODIFIED');
    this.descriptor.addElement_ivxn3r$('CODE_023_USER_CANNOT_BE_MODIFIED');
    this.descriptor.addElement_ivxn3r$('CODE_024_FILE_DELETE');
    this.descriptor.addElement_ivxn3r$('CODE_025_FILE_RENAMING');
    this.descriptor.addElement_ivxn3r$('CODE_026_TUPLE_FORMAT');
    this.descriptor.addElement_ivxn3r$('CODE_027_AC_ENFORCEMENT_INCONSISTENT');
    this.descriptor.addElement_ivxn3r$('CODE_028_OPA_POLICY_CREATION');
    this.descriptor.addElement_ivxn3r$('CODE_029_OPA_DOCUMENT_UPDATE');
    this.descriptor.addElement_ivxn3r$('CODE_030_OPA_DOCUMENT_DOWNLOAD');
    this.descriptor.addElement_ivxn3r$('CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS');
    this.descriptor.addElement_ivxn3r$('CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS');
    this.descriptor.addElement_ivxn3r$('CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS');
    this.descriptor.addElement_ivxn3r$('CODE_034_ADMIN_ALREADY_INITIALIZED');
    this.descriptor.addElement_ivxn3r$('CODE_035_FORBIDDEN');
    this.descriptor.addElement_ivxn3r$('CODE_036_UNAUTHORIZED');
    this.descriptor.addElement_ivxn3r$('CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED');
    this.descriptor.addElement_ivxn3r$('CODE_038_PROFILE_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_039_MALFORMED_PROFILE_FILE');
    this.descriptor.addElement_ivxn3r$('CODE_040_UR_ASSIGNMENTS_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_041_PA_ASSIGNMENTS_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_042_RM_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_043_DS_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_044_MS_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_045_PROXY_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_046_HTTP_METHOD_NOT_SUPPORTED');
    this.descriptor.addElement_ivxn3r$('CODE_047_UNEXPECTED');
    this.descriptor.addElement_ivxn3r$('CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_051_NO_NEW_MESSAGES_TO_READ');
    this.descriptor.addElement_ivxn3r$('CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION');
    OutcomeCode$$serializer_instance = this;
  }
  Object.defineProperty(OutcomeCode$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_n4u1rd$_0;
    }
  });
  OutcomeCode$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeEnum_szpzho$(this.descriptor, value.ordinal);
  };
  OutcomeCode$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return OutcomeCode$values()[decoder.decodeEnum_24f42q$(this.descriptor)];
  };
  OutcomeCode$$serializer.prototype.childSerializers = function () {
    return [];
  };
  OutcomeCode$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var OutcomeCode$$serializer_instance = null;
  function OutcomeCode$$serializer_getInstance() {
    if (OutcomeCode$$serializer_instance === null) {
      new OutcomeCode$$serializer();
    }return OutcomeCode$$serializer_instance;
  }
  OutcomeCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OutcomeCode',
    interfaces: [Enum]
  };
  function OutcomeCode$values() {
    return [OutcomeCode$CODE_000_SUCCESS_getInstance(), OutcomeCode$CODE_001_USER_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_002_ROLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_003_FILE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance(), OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance(), OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_009_FILETUPLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_010_ROLETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_012_FILETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_013_USER_WAS_DELETED_getInstance(), OutcomeCode$CODE_014_ROLE_WAS_DELETED_getInstance(), OutcomeCode$CODE_015_FILE_WAS_DELETED_getInstance(), OutcomeCode$CODE_016_INVALID_PERMISSION_getInstance(), OutcomeCode$CODE_017_INVALID_VERSION_NUMBER_getInstance(), OutcomeCode$CODE_018_INTERFACE_CONFIGURATION_PARAMETERS_getInstance(), OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance(), OutcomeCode$CODE_020_INVALID_PARAMETER_getInstance(), OutcomeCode$CODE_021_RM_CONFIGURATION_getInstance(), OutcomeCode$CODE_022_ADMIN_CANNOT_BE_MODIFIED_getInstance(), OutcomeCode$CODE_023_USER_CANNOT_BE_MODIFIED_getInstance(), OutcomeCode$CODE_024_FILE_DELETE_getInstance(), OutcomeCode$CODE_025_FILE_RENAMING_getInstance(), OutcomeCode$CODE_026_TUPLE_FORMAT_getInstance(), OutcomeCode$CODE_027_AC_ENFORCEMENT_INCONSISTENT_getInstance(), OutcomeCode$CODE_028_OPA_POLICY_CREATION_getInstance(), OutcomeCode$CODE_029_OPA_DOCUMENT_UPDATE_getInstance(), OutcomeCode$CODE_030_OPA_DOCUMENT_DOWNLOAD_getInstance(), OutcomeCode$CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance(), OutcomeCode$CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance(), OutcomeCode$CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS_getInstance(), OutcomeCode$CODE_034_ADMIN_ALREADY_INITIALIZED_getInstance(), OutcomeCode$CODE_035_FORBIDDEN_getInstance(), OutcomeCode$CODE_036_UNAUTHORIZED_getInstance(), OutcomeCode$CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED_getInstance(), OutcomeCode$CODE_038_PROFILE_NOT_FOUND_getInstance(), OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_getInstance(), OutcomeCode$CODE_040_UR_ASSIGNMENTS_NOT_FOUND_getInstance(), OutcomeCode$CODE_041_PA_ASSIGNMENTS_NOT_FOUND_getInstance(), OutcomeCode$CODE_042_RM_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_043_DS_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_044_MS_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance(), OutcomeCode$CODE_047_UNEXPECTED_getInstance(), OutcomeCode$CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_getInstance(), OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance()];
  }
  OutcomeCode.values = OutcomeCode$values;
  function OutcomeCode$valueOf(name) {
    switch (name) {
      case 'CODE_000_SUCCESS':
        return OutcomeCode$CODE_000_SUCCESS_getInstance();
      case 'CODE_001_USER_ALREADY_EXISTS':
        return OutcomeCode$CODE_001_USER_ALREADY_EXISTS_getInstance();
      case 'CODE_002_ROLE_ALREADY_EXISTS':
        return OutcomeCode$CODE_002_ROLE_ALREADY_EXISTS_getInstance();
      case 'CODE_003_FILE_ALREADY_EXISTS':
        return OutcomeCode$CODE_003_FILE_ALREADY_EXISTS_getInstance();
      case 'CODE_004_USER_NOT_FOUND':
        return OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance();
      case 'CODE_005_ROLE_NOT_FOUND':
        return OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance();
      case 'CODE_006_FILE_NOT_FOUND':
        return OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance();
      case 'CODE_007_ROLETUPLE_NOT_FOUND':
        return OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance();
      case 'CODE_008_PERMISSIONTUPLE_NOT_FOUND':
        return OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance();
      case 'CODE_009_FILETUPLE_NOT_FOUND':
        return OutcomeCode$CODE_009_FILETUPLE_NOT_FOUND_getInstance();
      case 'CODE_010_ROLETUPLE_ALREADY_EXISTS':
        return OutcomeCode$CODE_010_ROLETUPLE_ALREADY_EXISTS_getInstance();
      case 'CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS':
        return OutcomeCode$CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance();
      case 'CODE_012_FILETUPLE_ALREADY_EXISTS':
        return OutcomeCode$CODE_012_FILETUPLE_ALREADY_EXISTS_getInstance();
      case 'CODE_013_USER_WAS_DELETED':
        return OutcomeCode$CODE_013_USER_WAS_DELETED_getInstance();
      case 'CODE_014_ROLE_WAS_DELETED':
        return OutcomeCode$CODE_014_ROLE_WAS_DELETED_getInstance();
      case 'CODE_015_FILE_WAS_DELETED':
        return OutcomeCode$CODE_015_FILE_WAS_DELETED_getInstance();
      case 'CODE_016_INVALID_PERMISSION':
        return OutcomeCode$CODE_016_INVALID_PERMISSION_getInstance();
      case 'CODE_017_INVALID_VERSION_NUMBER':
        return OutcomeCode$CODE_017_INVALID_VERSION_NUMBER_getInstance();
      case 'CODE_018_INTERFACE_CONFIGURATION_PARAMETERS':
        return OutcomeCode$CODE_018_INTERFACE_CONFIGURATION_PARAMETERS_getInstance();
      case 'CODE_019_MISSING_PARAMETERS':
        return OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance();
      case 'CODE_020_INVALID_PARAMETER':
        return OutcomeCode$CODE_020_INVALID_PARAMETER_getInstance();
      case 'CODE_021_RM_CONFIGURATION':
        return OutcomeCode$CODE_021_RM_CONFIGURATION_getInstance();
      case 'CODE_022_ADMIN_CANNOT_BE_MODIFIED':
        return OutcomeCode$CODE_022_ADMIN_CANNOT_BE_MODIFIED_getInstance();
      case 'CODE_023_USER_CANNOT_BE_MODIFIED':
        return OutcomeCode$CODE_023_USER_CANNOT_BE_MODIFIED_getInstance();
      case 'CODE_024_FILE_DELETE':
        return OutcomeCode$CODE_024_FILE_DELETE_getInstance();
      case 'CODE_025_FILE_RENAMING':
        return OutcomeCode$CODE_025_FILE_RENAMING_getInstance();
      case 'CODE_026_TUPLE_FORMAT':
        return OutcomeCode$CODE_026_TUPLE_FORMAT_getInstance();
      case 'CODE_027_AC_ENFORCEMENT_INCONSISTENT':
        return OutcomeCode$CODE_027_AC_ENFORCEMENT_INCONSISTENT_getInstance();
      case 'CODE_028_OPA_POLICY_CREATION':
        return OutcomeCode$CODE_028_OPA_POLICY_CREATION_getInstance();
      case 'CODE_029_OPA_DOCUMENT_UPDATE':
        return OutcomeCode$CODE_029_OPA_DOCUMENT_UPDATE_getInstance();
      case 'CODE_030_OPA_DOCUMENT_DOWNLOAD':
        return OutcomeCode$CODE_030_OPA_DOCUMENT_DOWNLOAD_getInstance();
      case 'CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS':
        return OutcomeCode$CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance();
      case 'CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS':
        return OutcomeCode$CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance();
      case 'CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS':
        return OutcomeCode$CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS_getInstance();
      case 'CODE_034_ADMIN_ALREADY_INITIALIZED':
        return OutcomeCode$CODE_034_ADMIN_ALREADY_INITIALIZED_getInstance();
      case 'CODE_035_FORBIDDEN':
        return OutcomeCode$CODE_035_FORBIDDEN_getInstance();
      case 'CODE_036_UNAUTHORIZED':
        return OutcomeCode$CODE_036_UNAUTHORIZED_getInstance();
      case 'CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED':
        return OutcomeCode$CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED_getInstance();
      case 'CODE_038_PROFILE_NOT_FOUND':
        return OutcomeCode$CODE_038_PROFILE_NOT_FOUND_getInstance();
      case 'CODE_039_MALFORMED_PROFILE_FILE':
        return OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_getInstance();
      case 'CODE_040_UR_ASSIGNMENTS_NOT_FOUND':
        return OutcomeCode$CODE_040_UR_ASSIGNMENTS_NOT_FOUND_getInstance();
      case 'CODE_041_PA_ASSIGNMENTS_NOT_FOUND':
        return OutcomeCode$CODE_041_PA_ASSIGNMENTS_NOT_FOUND_getInstance();
      case 'CODE_042_RM_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_042_RM_CONNECTION_TIMEOUT_getInstance();
      case 'CODE_043_DS_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_043_DS_CONNECTION_TIMEOUT_getInstance();
      case 'CODE_044_MS_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_044_MS_CONNECTION_TIMEOUT_getInstance();
      case 'CODE_045_PROXY_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_getInstance();
      case 'CODE_046_HTTP_METHOD_NOT_SUPPORTED':
        return OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance();
      case 'CODE_047_UNEXPECTED':
        return OutcomeCode$CODE_047_UNEXPECTED_getInstance();
      case 'CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS':
        return OutcomeCode$CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS_getInstance();
      case 'CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS':
        return OutcomeCode$CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance();
      case 'CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS':
        return OutcomeCode$CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS_getInstance();
      case 'CODE_051_NO_NEW_MESSAGES_TO_READ':
        return OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_getInstance();
      case 'CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION':
        return OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.OutcomeCode.' + name);
    }
  }
  OutcomeCode.valueOf_61zpoe$ = OutcomeCode$valueOf;
  function SERVER() {
    SERVER_instance = this;
    this.CORE = 'Core';
    this.USERNAME = 'Username';
    this.ROLE_NAME = 'Role_Name';
    this.FILE_NAME = 'File_Name';
    this.PERMISSION = 'Permission';
    this.OFFSET = 'Offset';
    this.LIMIT = 'Limit';
    this.ENFORCEMENT = 'Access_Control_Enforcement';
    this.FILE_CONTENT = 'File_Content';
    this.IS_ADMIN = 'Admin';
    this.RM_URL = 'RM_URL';
    this.RM_PORT = 'RM_Port';
    this.DS_URL = 'DS_URL';
    this.DS_PORT = 'DS_Port';
    this.DS_PASSWORD = 'DS_Password';
    this.MS_URL = 'MS_URL';
    this.MS_PASSWORD = 'MS_Password';
    this.MS_PORT = 'MS_Port';
    this.OPA_URL = 'OPA_URL';
    this.OPA_PORT = 'OPA_Port';
  }
  SERVER.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SERVER',
    interfaces: []
  };
  var SERVER_instance = null;
  function SERVER_getInstance() {
    if (SERVER_instance === null) {
      new SERVER();
    }return SERVER_instance;
  }
  function SafeRegex() {
    SafeRegex$Companion_getInstance();
  }
  function SafeRegex$Companion() {
    SafeRegex$Companion_instance = this;
    this.TEXT = Regex_init('^[-a-zA-Z0-9._/+=]+$');
    this.URL = Regex_init('^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$');
    this.URI = Regex_init('^[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$');
    this.IPV4 = Regex_init('^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\\.(?!$)|$)){4}$');
    this.URL_OR_IPV4 = Regex_init('^[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$|^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\\.(?!$)|$)){4}$');
    this.BASE64 = Regex_init('^(?:[A-Za-z0-9+/]{4})+(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$');
    this.AWS_ACCESS_KEY = Regex_init('^[A-Z0-9]{20}$');
    this.AWS_SECRET_KEY = Regex_init('^[A-Za-z0-9/+=]{40}$');
  }
  SafeRegex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SafeRegex$Companion_instance = null;
  function SafeRegex$Companion_getInstance() {
    if (SafeRegex$Companion_instance === null) {
      new SafeRegex$Companion();
    }return SafeRegex$Companion_instance;
  }
  SafeRegex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SafeRegex',
    interfaces: []
  };
  function logger$lambda() {
    return Unit;
  }
  var logger;
  function CoreParameters() {
    CoreParameters$Companion_getInstance();
  }
  function CoreParameters$checkParameters$lambda(this$CoreParameters) {
    return function () {
      return 'Username ' + this$CoreParameters.username + ' does not respect TEXT regex';
    };
  }
  function CoreParameters$checkParameters$lambda_0() {
    return 'Keys does not respect BASE64 regex';
  }
  CoreParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.username)) {
      logger.warn_nq59yw$(CoreParameters$checkParameters$lambda(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().BASE64.matches_6bul2c$(this.asymEncPublicKeyBase64) || !SafeRegex$Companion_getInstance().BASE64.matches_6bul2c$(this.asymEncPrivateKeyBase64) || !SafeRegex$Companion_getInstance().BASE64.matches_6bul2c$(this.asymSigPublicKeyBase64) || !SafeRegex$Companion_getInstance().BASE64.matches_6bul2c$(this.asymSigPrivateKeyBase64)) {
      logger.warn_nq59yw$(CoreParameters$checkParameters$lambda_0);
      return false;
    } else {
      return true;
    }
  };
  CoreParameters.prototype.obscureSensitiveFields = function () {
    this.asymEncPrivateKeyBase64 = '***';
    this.asymSigPrivateKeyBase64 = '***';
  };
  CoreParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, CoreParameters) ? tmp$_0 : throwCCE();
    if (!equals(this.username, other.username))
      return false;
    if (this.isAdmin !== other.isAdmin)
      return false;
    if (!equals(this.asymEncPublicKeyBase64, other.asymEncPublicKeyBase64))
      return false;
    if (!equals(this.asymEncPrivateKeyBase64, other.asymEncPrivateKeyBase64))
      return false;
    if (!equals(this.asymSigPublicKeyBase64, other.asymSigPublicKeyBase64))
      return false;
    if (!equals(this.asymSigPrivateKeyBase64, other.asymSigPrivateKeyBase64))
      return false;
    if (this.coreType !== other.coreType)
      return false;
    return true;
  };
  CoreParameters.prototype.hashCode = function () {
    var result = hashCode(this.username);
    result = (31 * result | 0) + hashCode(this.isAdmin) | 0;
    result = (31 * result | 0) + hashCode(this.asymEncPublicKeyBase64) | 0;
    result = (31 * result | 0) + hashCode(this.asymEncPrivateKeyBase64) | 0;
    result = (31 * result | 0) + hashCode(this.asymSigPublicKeyBase64) | 0;
    result = (31 * result | 0) + hashCode(this.asymSigPrivateKeyBase64) | 0;
    result = (31 * result | 0) + this.coreType.hashCode() | 0;
    return result;
  };
  function CoreParameters$Companion() {
    CoreParameters$Companion_instance = this;
  }
  CoreParameters$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(CoreParameters));
  };
  CoreParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CoreParameters$Companion_instance = null;
  function CoreParameters$Companion_getInstance() {
    if (CoreParameters$Companion_instance === null) {
      new CoreParameters$Companion();
    }return CoreParameters$Companion_instance;
  }
  function CoreParameters_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CoreParameters.prototype);
    return $this;
  }
  CoreParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoreParameters',
    interfaces: []
  };
  function CoreType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CoreType_initFields() {
    CoreType_initFields = function () {
    };
    CoreType$RBAC_CLOUD_instance = new CoreType('RBAC_CLOUD', 0);
    CoreType$RBAC_MQTT_instance = new CoreType('RBAC_MQTT', 1);
  }
  var CoreType$RBAC_CLOUD_instance;
  function CoreType$RBAC_CLOUD_getInstance() {
    CoreType_initFields();
    return CoreType$RBAC_CLOUD_instance;
  }
  var CoreType$RBAC_MQTT_instance;
  function CoreType$RBAC_MQTT_getInstance() {
    CoreType_initFields();
    return CoreType$RBAC_MQTT_instance;
  }
  CoreType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoreType',
    interfaces: [Enum]
  };
  function CoreType$values() {
    return [CoreType$RBAC_CLOUD_getInstance(), CoreType$RBAC_MQTT_getInstance()];
  }
  CoreType.values = CoreType$values;
  function CoreType$valueOf(name) {
    switch (name) {
      case 'RBAC_CLOUD':
        return CoreType$RBAC_CLOUD_getInstance();
      case 'RBAC_MQTT':
        return CoreType$RBAC_MQTT_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.core.CoreType.' + name);
    }
  }
  CoreType.valueOf_61zpoe$ = CoreType$valueOf;
  function logger$lambda_0() {
    return Unit;
  }
  var logger_0;
  function CoreParametersCloud(username, isAdmin, asymEncPublicKeyBase64, asymEncPrivateKeyBase64, asymSigPublicKeyBase64, asymSigPrivateKeyBase64, coreType, rmCloudInterfaceParameters, msMySQLInterfaceParameters, dsCloudInterfaceParameters, opaInterfaceParameters) {
    CoreParametersCloud$Companion_getInstance();
    if (coreType === void 0)
      coreType = CoreType$RBAC_CLOUD_getInstance();
    CoreParameters.call(this);
    this.username_tekk5q$_0 = username;
    this.isAdmin_p1plyj$_0 = isAdmin;
    this.asymEncPublicKeyBase64_mnbk3x$_0 = asymEncPublicKeyBase64;
    this.asymEncPrivateKeyBase64_noorip$_0 = asymEncPrivateKeyBase64;
    this.asymSigPublicKeyBase64_otz42y$_0 = asymSigPublicKeyBase64;
    this.asymSigPrivateKeyBase64_3xify2$_0 = asymSigPrivateKeyBase64;
    this.coreType_2u83ed$_0 = coreType;
    this.rmCloudInterfaceParameters = rmCloudInterfaceParameters;
    this.msMySQLInterfaceParameters = msMySQLInterfaceParameters;
    this.dsCloudInterfaceParameters = dsCloudInterfaceParameters;
    this.opaInterfaceParameters = opaInterfaceParameters;
  }
  Object.defineProperty(CoreParametersCloud.prototype, 'username', {
    get: function () {
      return this.username_tekk5q$_0;
    },
    set: function (username) {
      this.username_tekk5q$_0 = username;
    }
  });
  Object.defineProperty(CoreParametersCloud.prototype, 'isAdmin', {
    get: function () {
      return this.isAdmin_p1plyj$_0;
    },
    set: function (isAdmin) {
      this.isAdmin_p1plyj$_0 = isAdmin;
    }
  });
  Object.defineProperty(CoreParametersCloud.prototype, 'asymEncPublicKeyBase64', {
    get: function () {
      return this.asymEncPublicKeyBase64_mnbk3x$_0;
    },
    set: function (asymEncPublicKeyBase64) {
      this.asymEncPublicKeyBase64_mnbk3x$_0 = asymEncPublicKeyBase64;
    }
  });
  Object.defineProperty(CoreParametersCloud.prototype, 'asymEncPrivateKeyBase64', {
    get: function () {
      return this.asymEncPrivateKeyBase64_noorip$_0;
    },
    set: function (asymEncPrivateKeyBase64) {
      this.asymEncPrivateKeyBase64_noorip$_0 = asymEncPrivateKeyBase64;
    }
  });
  Object.defineProperty(CoreParametersCloud.prototype, 'asymSigPublicKeyBase64', {
    get: function () {
      return this.asymSigPublicKeyBase64_otz42y$_0;
    },
    set: function (asymSigPublicKeyBase64) {
      this.asymSigPublicKeyBase64_otz42y$_0 = asymSigPublicKeyBase64;
    }
  });
  Object.defineProperty(CoreParametersCloud.prototype, 'asymSigPrivateKeyBase64', {
    get: function () {
      return this.asymSigPrivateKeyBase64_3xify2$_0;
    },
    set: function (asymSigPrivateKeyBase64) {
      this.asymSigPrivateKeyBase64_3xify2$_0 = asymSigPrivateKeyBase64;
    }
  });
  Object.defineProperty(CoreParametersCloud.prototype, 'coreType', {
    get: function () {
      return this.coreType_2u83ed$_0;
    }
  });
  function CoreParametersCloud$Companion() {
    CoreParametersCloud$Companion_instance = this;
  }
  function CoreParametersCloud$Companion$fromMap$lambda() {
    return 'Not all parameters were provided';
  }
  CoreParametersCloud$Companion.prototype.fromMap_xlh5cu$ = function (parameters) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    try {
      tmp$ = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME));
      tmp$_0 = toBoolean(parameters.get_11rb$(SERVER_getInstance().IS_ADMIN));
      tmp$_1 = CoreType$RBAC_CLOUD_getInstance();
      tmp$_2 = new RMInterfaceCloudParameters(toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().RM_PORT))), ensureNotNull(parameters.get_11rb$(SERVER_getInstance().RM_URL)));
      tmp$_3 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME));
      tmp$_4 = toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_PORT)));
      tmp$_5 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_URL));
      tmp$_6 = new CoreParametersCloud(tmp$, tmp$_0, 'mock', 'mock', 'mock', 'mock', tmp$_1, tmp$_2, new MSInterfaceMySQLParameters(tmp$_3, tmp$_4, ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_PASSWORD)), tmp$_5), new DSInterfaceCloudParameters(toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DS_PORT))), ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DS_URL))), new OPAInterfaceParameters(toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().OPA_PORT))), ensureNotNull(parameters.get_11rb$(SERVER_getInstance().OPA_URL))));
    } catch (e) {
      if (Kotlin.isType(e, NullPointerException)) {
        logger_0.warn_nq59yw$(CoreParametersCloud$Companion$fromMap$lambda);
        tmp$_6 = null;
      } else
        throw e;
    }
    return tmp$_6;
  };
  CoreParametersCloud$Companion.prototype.serializer = function () {
    return CoreParametersCloud$$serializer_getInstance();
  };
  CoreParametersCloud$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CoreParametersCloud$Companion_instance = null;
  function CoreParametersCloud$Companion_getInstance() {
    if (CoreParametersCloud$Companion_instance === null) {
      new CoreParametersCloud$Companion();
    }return CoreParametersCloud$Companion_instance;
  }
  CoreParametersCloud.prototype.checkParameters = function () {
    if (!CoreParameters.prototype.checkParameters.call(this)) {
      return false;
    } else {
      return this.rmCloudInterfaceParameters.checkParameters() && this.msMySQLInterfaceParameters.checkParameters() && this.dsCloudInterfaceParameters.checkParameters() && this.opaInterfaceParameters.checkParameters();
    }
  };
  function CoreParametersCloud$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  CoreParametersCloud.prototype.update_8dp87x$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, CoreParametersCloud)) {
      this.rmCloudInterfaceParameters.update_3asgqy$(updatedParameters.rmCloudInterfaceParameters);
      this.msMySQLInterfaceParameters.update_3bewa2$(updatedParameters.msMySQLInterfaceParameters);
      this.dsCloudInterfaceParameters.update_osv2a2$(updatedParameters.dsCloudInterfaceParameters);
      this.opaInterfaceParameters.update_3yqp66$(updatedParameters.opaInterfaceParameters);
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_0.error_nq59yw$(CoreParametersCloud$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  CoreParametersCloud.prototype.obscureSensitiveFields = function () {
    CoreParameters.prototype.obscureSensitiveFields.call(this);
    this.rmCloudInterfaceParameters.obscureSensitiveFields();
    this.msMySQLInterfaceParameters.obscureSensitiveFields();
    this.dsCloudInterfaceParameters.obscureSensitiveFields();
    this.opaInterfaceParameters.obscureSensitiveFields();
  };
  function CoreParametersCloud$$serializer() {
    this.descriptor_7rh1wd$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.CoreParametersCloud', this, 11);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('isAdmin', false);
    this.descriptor.addElement_ivxn3r$('asymEncPublicKeyBase64', false);
    this.descriptor.addElement_ivxn3r$('asymEncPrivateKeyBase64', false);
    this.descriptor.addElement_ivxn3r$('asymSigPublicKeyBase64', false);
    this.descriptor.addElement_ivxn3r$('asymSigPrivateKeyBase64', false);
    this.descriptor.addElement_ivxn3r$('coreType', true);
    this.descriptor.addElement_ivxn3r$('rmCloudInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('msMySQLInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('dsCloudInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('opaInterfaceParameters', false);
    CoreParametersCloud$$serializer_instance = this;
  }
  Object.defineProperty(CoreParametersCloud$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_7rh1wd$_0;
    }
  });
  CoreParametersCloud$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.username);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 1, value.isAdmin);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.asymEncPublicKeyBase64);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.asymEncPrivateKeyBase64);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.asymSigPublicKeyBase64);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.asymSigPrivateKeyBase64);
    if (!equals(value.coreType, CoreType$RBAC_CLOUD_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 6))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 6, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), value.coreType);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 7, RMInterfaceCloudParameters$$serializer_getInstance(), value.rmCloudInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 8, MSInterfaceMySQLParameters$$serializer_getInstance(), value.msMySQLInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 9, DSInterfaceCloudParameters$$serializer_getInstance(), value.dsCloudInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 10, OPAInterfaceParameters$$serializer_getInstance(), value.opaInterfaceParameters);
    output.endStructure_24f42q$(this.descriptor);
  };
  CoreParametersCloud$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeBooleanElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeSerializableElement_12e8id$(this.descriptor, 6, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), local6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeSerializableElement_12e8id$(this.descriptor, 7, RMInterfaceCloudParameters$$serializer_getInstance(), local7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeSerializableElement_12e8id$(this.descriptor, 8, MSInterfaceMySQLParameters$$serializer_getInstance(), local8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeSerializableElement_12e8id$(this.descriptor, 9, DSInterfaceCloudParameters$$serializer_getInstance(), local9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeSerializableElement_12e8id$(this.descriptor, 10, OPAInterfaceParameters$$serializer_getInstance(), local10);
          bitMask0 |= 1024;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return CoreParametersCloud_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, null);
  };
  CoreParametersCloud$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), RMInterfaceCloudParameters$$serializer_getInstance(), MSInterfaceMySQLParameters$$serializer_getInstance(), DSInterfaceCloudParameters$$serializer_getInstance(), OPAInterfaceParameters$$serializer_getInstance()];
  };
  CoreParametersCloud$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CoreParametersCloud$$serializer_instance = null;
  function CoreParametersCloud$$serializer_getInstance() {
    if (CoreParametersCloud$$serializer_instance === null) {
      new CoreParametersCloud$$serializer();
    }return CoreParametersCloud$$serializer_instance;
  }
  function CoreParametersCloud_init(seen1, username, isAdmin, asymEncPublicKeyBase64, asymEncPrivateKeyBase64, asymSigPublicKeyBase64, asymSigPrivateKeyBase64, coreType, rmCloudInterfaceParameters, msMySQLInterfaceParameters, dsCloudInterfaceParameters, opaInterfaceParameters, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CoreParametersCloud.prototype);
    $this = CoreParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username_tekk5q$_0 = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('isAdmin');
    else
      $this.isAdmin_p1plyj$_0 = isAdmin;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('asymEncPublicKeyBase64');
    else
      $this.asymEncPublicKeyBase64_mnbk3x$_0 = asymEncPublicKeyBase64;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('asymEncPrivateKeyBase64');
    else
      $this.asymEncPrivateKeyBase64_noorip$_0 = asymEncPrivateKeyBase64;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('asymSigPublicKeyBase64');
    else
      $this.asymSigPublicKeyBase64_otz42y$_0 = asymSigPublicKeyBase64;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('asymSigPrivateKeyBase64');
    else
      $this.asymSigPrivateKeyBase64_3xify2$_0 = asymSigPrivateKeyBase64;
    if ((seen1 & 64) === 0)
      $this.coreType_2u83ed$_0 = CoreType$RBAC_CLOUD_getInstance();
    else
      $this.coreType_2u83ed$_0 = coreType;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('rmCloudInterfaceParameters');
    else
      $this.rmCloudInterfaceParameters = rmCloudInterfaceParameters;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('msMySQLInterfaceParameters');
    else
      $this.msMySQLInterfaceParameters = msMySQLInterfaceParameters;
    if ((seen1 & 512) === 0)
      throw MissingFieldException_init('dsCloudInterfaceParameters');
    else
      $this.dsCloudInterfaceParameters = dsCloudInterfaceParameters;
    if ((seen1 & 1024) === 0)
      throw MissingFieldException_init('opaInterfaceParameters');
    else
      $this.opaInterfaceParameters = opaInterfaceParameters;
    return $this;
  }
  CoreParametersCloud.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoreParametersCloud',
    interfaces: [CoreParameters]
  };
  function logger$lambda_1() {
    return Unit;
  }
  var logger_1;
  function CoreParametersMQTT(username, isAdmin, asymEncPublicKeyBase64, asymEncPrivateKeyBase64, asymSigPublicKeyBase64, asymSigPrivateKeyBase64, coreType, msMySQLInterfaceParameters, dsMQTTInterfaceParameters) {
    CoreParametersMQTT$Companion_getInstance();
    if (coreType === void 0)
      coreType = CoreType$RBAC_MQTT_getInstance();
    CoreParameters.call(this);
    this.username_753bw7$_0 = username;
    this.isAdmin_swtyle$_0 = isAdmin;
    this.asymEncPublicKeyBase64_lw48ys$_0 = asymEncPublicKeyBase64;
    this.asymEncPrivateKeyBase64_nx4p14$_0 = asymEncPrivateKeyBase64;
    this.asymSigPublicKeyBase64_pl6f83$_0 = asymSigPublicKeyBase64;
    this.asymSigPrivateKeyBase64_rct1dd$_0 = asymSigPrivateKeyBase64;
    this.coreType_p3pbnw$_0 = coreType;
    this.msMySQLInterfaceParameters = msMySQLInterfaceParameters;
    this.dsMQTTInterfaceParameters = dsMQTTInterfaceParameters;
  }
  Object.defineProperty(CoreParametersMQTT.prototype, 'username', {
    get: function () {
      return this.username_753bw7$_0;
    },
    set: function (username) {
      this.username_753bw7$_0 = username;
    }
  });
  Object.defineProperty(CoreParametersMQTT.prototype, 'isAdmin', {
    get: function () {
      return this.isAdmin_swtyle$_0;
    },
    set: function (isAdmin) {
      this.isAdmin_swtyle$_0 = isAdmin;
    }
  });
  Object.defineProperty(CoreParametersMQTT.prototype, 'asymEncPublicKeyBase64', {
    get: function () {
      return this.asymEncPublicKeyBase64_lw48ys$_0;
    },
    set: function (asymEncPublicKeyBase64) {
      this.asymEncPublicKeyBase64_lw48ys$_0 = asymEncPublicKeyBase64;
    }
  });
  Object.defineProperty(CoreParametersMQTT.prototype, 'asymEncPrivateKeyBase64', {
    get: function () {
      return this.asymEncPrivateKeyBase64_nx4p14$_0;
    },
    set: function (asymEncPrivateKeyBase64) {
      this.asymEncPrivateKeyBase64_nx4p14$_0 = asymEncPrivateKeyBase64;
    }
  });
  Object.defineProperty(CoreParametersMQTT.prototype, 'asymSigPublicKeyBase64', {
    get: function () {
      return this.asymSigPublicKeyBase64_pl6f83$_0;
    },
    set: function (asymSigPublicKeyBase64) {
      this.asymSigPublicKeyBase64_pl6f83$_0 = asymSigPublicKeyBase64;
    }
  });
  Object.defineProperty(CoreParametersMQTT.prototype, 'asymSigPrivateKeyBase64', {
    get: function () {
      return this.asymSigPrivateKeyBase64_rct1dd$_0;
    },
    set: function (asymSigPrivateKeyBase64) {
      this.asymSigPrivateKeyBase64_rct1dd$_0 = asymSigPrivateKeyBase64;
    }
  });
  Object.defineProperty(CoreParametersMQTT.prototype, 'coreType', {
    get: function () {
      return this.coreType_p3pbnw$_0;
    }
  });
  function CoreParametersMQTT$Companion() {
    CoreParametersMQTT$Companion_instance = this;
  }
  function CoreParametersMQTT$Companion$fromMap$lambda() {
    return 'Not all parameters were provided';
  }
  CoreParametersMQTT$Companion.prototype.fromMap_xlh5cu$ = function (parameters) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    try {
      tmp$ = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME));
      tmp$_0 = toBoolean(parameters.get_11rb$(SERVER_getInstance().IS_ADMIN));
      tmp$_1 = CoreType$RBAC_MQTT_getInstance();
      tmp$_2 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME));
      tmp$_3 = toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_PORT)));
      tmp$_4 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_URL));
      tmp$_5 = new CoreParametersMQTT(tmp$, tmp$_0, 'mock', 'mock', 'mock', 'mock', tmp$_1, new MSInterfaceMySQLParameters(tmp$_2, tmp$_3, ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_PASSWORD)), tmp$_4), new DSInterfaceMQTTParameters(toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DS_PORT))), ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DS_URL)), ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DS_PASSWORD))));
    } catch (e) {
      if (Kotlin.isType(e, NullPointerException)) {
        logger_1.warn_nq59yw$(CoreParametersMQTT$Companion$fromMap$lambda);
        tmp$_5 = null;
      } else
        throw e;
    }
    return tmp$_5;
  };
  CoreParametersMQTT$Companion.prototype.serializer = function () {
    return CoreParametersMQTT$$serializer_getInstance();
  };
  CoreParametersMQTT$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CoreParametersMQTT$Companion_instance = null;
  function CoreParametersMQTT$Companion_getInstance() {
    if (CoreParametersMQTT$Companion_instance === null) {
      new CoreParametersMQTT$Companion();
    }return CoreParametersMQTT$Companion_instance;
  }
  CoreParametersMQTT.prototype.checkParameters = function () {
    if (!CoreParameters.prototype.checkParameters.call(this)) {
      return false;
    } else {
      return this.msMySQLInterfaceParameters.checkParameters() && this.dsMQTTInterfaceParameters.checkParameters();
    }
  };
  function CoreParametersMQTT$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  CoreParametersMQTT.prototype.update_8dp87x$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, CoreParametersMQTT)) {
      this.msMySQLInterfaceParameters.update_3bewa2$(updatedParameters.msMySQLInterfaceParameters);
      this.dsMQTTInterfaceParameters.update_osv2a2$(updatedParameters.dsMQTTInterfaceParameters);
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_1.error_nq59yw$(CoreParametersMQTT$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  CoreParametersMQTT.prototype.obscureSensitiveFields = function () {
    CoreParameters.prototype.obscureSensitiveFields.call(this);
    this.msMySQLInterfaceParameters.obscureSensitiveFields();
    this.dsMQTTInterfaceParameters.obscureSensitiveFields();
  };
  function CoreParametersMQTT$$serializer() {
    this.descriptor_8iod1i$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.CoreParametersMQTT', this, 9);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('isAdmin', false);
    this.descriptor.addElement_ivxn3r$('asymEncPublicKeyBase64', false);
    this.descriptor.addElement_ivxn3r$('asymEncPrivateKeyBase64', false);
    this.descriptor.addElement_ivxn3r$('asymSigPublicKeyBase64', false);
    this.descriptor.addElement_ivxn3r$('asymSigPrivateKeyBase64', false);
    this.descriptor.addElement_ivxn3r$('coreType', true);
    this.descriptor.addElement_ivxn3r$('msMySQLInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('dsMQTTInterfaceParameters', false);
    CoreParametersMQTT$$serializer_instance = this;
  }
  Object.defineProperty(CoreParametersMQTT$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_8iod1i$_0;
    }
  });
  CoreParametersMQTT$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.username);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 1, value.isAdmin);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.asymEncPublicKeyBase64);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.asymEncPrivateKeyBase64);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.asymSigPublicKeyBase64);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.asymSigPrivateKeyBase64);
    if (!equals(value.coreType, CoreType$RBAC_MQTT_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 6))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 6, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), value.coreType);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 7, MSInterfaceMySQLParameters$$serializer_getInstance(), value.msMySQLInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 8, DSInterfaceMQTTParameters$$serializer_getInstance(), value.dsMQTTInterfaceParameters);
    output.endStructure_24f42q$(this.descriptor);
  };
  CoreParametersMQTT$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeBooleanElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeSerializableElement_12e8id$(this.descriptor, 6, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), local6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeSerializableElement_12e8id$(this.descriptor, 7, MSInterfaceMySQLParameters$$serializer_getInstance(), local7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeSerializableElement_12e8id$(this.descriptor, 8, DSInterfaceMQTTParameters$$serializer_getInstance(), local8);
          bitMask0 |= 256;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return CoreParametersMQTT_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, null);
  };
  CoreParametersMQTT$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), MSInterfaceMySQLParameters$$serializer_getInstance(), DSInterfaceMQTTParameters$$serializer_getInstance()];
  };
  CoreParametersMQTT$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CoreParametersMQTT$$serializer_instance = null;
  function CoreParametersMQTT$$serializer_getInstance() {
    if (CoreParametersMQTT$$serializer_instance === null) {
      new CoreParametersMQTT$$serializer();
    }return CoreParametersMQTT$$serializer_instance;
  }
  function CoreParametersMQTT_init(seen1, username, isAdmin, asymEncPublicKeyBase64, asymEncPrivateKeyBase64, asymSigPublicKeyBase64, asymSigPrivateKeyBase64, coreType, msMySQLInterfaceParameters, dsMQTTInterfaceParameters, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CoreParametersMQTT.prototype);
    $this = CoreParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username_753bw7$_0 = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('isAdmin');
    else
      $this.isAdmin_swtyle$_0 = isAdmin;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('asymEncPublicKeyBase64');
    else
      $this.asymEncPublicKeyBase64_lw48ys$_0 = asymEncPublicKeyBase64;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('asymEncPrivateKeyBase64');
    else
      $this.asymEncPrivateKeyBase64_nx4p14$_0 = asymEncPrivateKeyBase64;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('asymSigPublicKeyBase64');
    else
      $this.asymSigPublicKeyBase64_pl6f83$_0 = asymSigPublicKeyBase64;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('asymSigPrivateKeyBase64');
    else
      $this.asymSigPrivateKeyBase64_rct1dd$_0 = asymSigPrivateKeyBase64;
    if ((seen1 & 64) === 0)
      $this.coreType_p3pbnw$_0 = CoreType$RBAC_MQTT_getInstance();
    else
      $this.coreType_p3pbnw$_0 = coreType;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('msMySQLInterfaceParameters');
    else
      $this.msMySQLInterfaceParameters = msMySQLInterfaceParameters;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('dsMQTTInterfaceParameters');
    else
      $this.dsMQTTInterfaceParameters = dsMQTTInterfaceParameters;
    return $this;
  }
  CoreParametersMQTT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoreParametersMQTT',
    interfaces: [CoreParameters]
  };
  function CryptoACObject() {
    CryptoACObject$Companion_getInstance();
  }
  CryptoACObject.prototype.requirePositiveNumber_za3lpa$ = function (number) {
    if (number <= 0) {
      throw IllegalArgumentException_init('Given zero or negative version number ' + number);
    }};
  function CryptoACObject$Companion() {
    CryptoACObject$Companion_instance = this;
  }
  CryptoACObject$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(CryptoACObject));
  };
  CryptoACObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CryptoACObject$Companion_instance = null;
  function CryptoACObject$Companion_getInstance() {
    if (CryptoACObject$Companion_instance === null) {
      new CryptoACObject$Companion();
    }return CryptoACObject$Companion_instance;
  }
  function CryptoACObject_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CryptoACObject.prototype);
    return $this;
  }
  CryptoACObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACObject',
    interfaces: []
  };
  function ActiveElement() {
    ActiveElement$Companion_getInstance();
    Element.call(this);
  }
  ActiveElement.prototype.generateToken_za3lpa$$default = function (length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.requirePositiveNumber_za3lpa$(length);
    if (equals(this.name, Constants_getInstance().ADMIN)) {
      tmp$_4 = Constants_getInstance().ADMIN;
    } else {
      var tmp$_5;
      if ((tmp$_0 = (tmp$ = this.asymEncKeys) != null ? tmp$.private : null) != null)
        tmp$_5 = tmp$_0;
      else {
        var $receiver = 'not given';
        tmp$_5 = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length);
      }
      tmp$_3 = tmp$_5;
      var tmp$_6;
      if ((tmp$_2 = (tmp$_1 = this.asymSigKeys) != null ? tmp$_1.private : null) != null)
        tmp$_6 = tmp$_2;
      else {
        var $receiver_0 = 'not given';
        tmp$_6 = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver_0, 0, $receiver_0.length);
      }
      tmp$_4 = digest('SHA-256', primitiveArrayConcat(tmp$_3, tmp$_6)).substring(0, length);
    }
    return tmp$_4;
  };
  function ActiveElement$Companion() {
    ActiveElement$Companion_instance = this;
  }
  ActiveElement$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(ActiveElement));
  };
  ActiveElement$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActiveElement$Companion_instance = null;
  function ActiveElement$Companion_getInstance() {
    if (ActiveElement$Companion_instance === null) {
      new ActiveElement$Companion();
    }return ActiveElement$Companion_instance;
  }
  function ActiveElement_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ActiveElement.prototype);
    $this = Element_init(seen1, $this);
    return $this;
  }
  ActiveElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActiveElement',
    interfaces: [Element]
  };
  function Element() {
    Element$Companion_getInstance();
    CryptoACObject.call(this);
  }
  Element.prototype.generateToken_za3lpa$$default = function (length) {
    this.requirePositiveNumber_za3lpa$(length);
    var charPool = plus_0(plus(new CharRange(97, 122), new CharRange(65, 90)), new CharRange(48, 57));
    var $receiver = new IntRange(1, length);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(Random.Default.nextInt_vux9f0$(0, charPool.size));
    }
    var transform = getCallableRef('get', function ($receiver, p1) {
      return $receiver.get_za3lpa$(p1);
    }.bind(null, charPool));
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(transform(item_0));
    }
    return joinToString(destination_0, '');
  };
  Element.prototype.generateToken_za3lpa$ = function (length, callback$default) {
    if (length === void 0)
      length = 20;
    return callback$default ? callback$default(length) : this.generateToken_za3lpa$$default(length);
  };
  function Element$Companion() {
    Element$Companion_instance = this;
  }
  Element$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(Element));
  };
  Element$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Element$Companion_instance = null;
  function Element$Companion_getInstance() {
    if (Element$Companion_instance === null) {
      new Element$Companion();
    }return Element$Companion_instance;
  }
  function Element_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Element.prototype);
    $this = CryptoACObject_init(seen1, $this);
    return $this;
  }
  Element.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Element',
    interfaces: [CryptoACObject]
  };
  function ElementStatus(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElementStatus_initFields() {
    ElementStatus_initFields = function () {
    };
    ElementStatus$INCOMPLETE_instance = new ElementStatus('INCOMPLETE', 0);
    ElementStatus$OPERATIONAL_instance = new ElementStatus('OPERATIONAL', 1);
    ElementStatus$DELETED_instance = new ElementStatus('DELETED', 2);
  }
  var ElementStatus$INCOMPLETE_instance;
  function ElementStatus$INCOMPLETE_getInstance() {
    ElementStatus_initFields();
    return ElementStatus$INCOMPLETE_instance;
  }
  var ElementStatus$OPERATIONAL_instance;
  function ElementStatus$OPERATIONAL_getInstance() {
    ElementStatus_initFields();
    return ElementStatus$OPERATIONAL_instance;
  }
  var ElementStatus$DELETED_instance;
  function ElementStatus$DELETED_getInstance() {
    ElementStatus_initFields();
    return ElementStatus$DELETED_instance;
  }
  ElementStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElementStatus',
    interfaces: [Enum]
  };
  function ElementStatus$values() {
    return [ElementStatus$INCOMPLETE_getInstance(), ElementStatus$OPERATIONAL_getInstance(), ElementStatus$DELETED_getInstance()];
  }
  ElementStatus.values = ElementStatus$values;
  function ElementStatus$valueOf(name) {
    switch (name) {
      case 'INCOMPLETE':
        return ElementStatus$INCOMPLETE_getInstance();
      case 'OPERATIONAL':
        return ElementStatus$OPERATIONAL_getInstance();
      case 'DELETED':
        return ElementStatus$DELETED_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.core.elements.ElementStatus.' + name);
    }
  }
  ElementStatus.valueOf_61zpoe$ = ElementStatus$valueOf;
  function ElementType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElementType_initFields() {
    ElementType_initFields = function () {
    };
    ElementType$USER_instance = new ElementType('USER', 0);
    ElementType$ROLE_instance = new ElementType('ROLE', 1);
    ElementType$FILE_instance = new ElementType('FILE', 2);
    ElementType$ASSIGNMENT_instance = new ElementType('ASSIGNMENT', 3);
    ElementType$PERMISSION_instance = new ElementType('PERMISSION', 4);
  }
  var ElementType$USER_instance;
  function ElementType$USER_getInstance() {
    ElementType_initFields();
    return ElementType$USER_instance;
  }
  var ElementType$ROLE_instance;
  function ElementType$ROLE_getInstance() {
    ElementType_initFields();
    return ElementType$ROLE_instance;
  }
  var ElementType$FILE_instance;
  function ElementType$FILE_getInstance() {
    ElementType_initFields();
    return ElementType$FILE_instance;
  }
  var ElementType$ASSIGNMENT_instance;
  function ElementType$ASSIGNMENT_getInstance() {
    ElementType_initFields();
    return ElementType$ASSIGNMENT_instance;
  }
  var ElementType$PERMISSION_instance;
  function ElementType$PERMISSION_getInstance() {
    ElementType_initFields();
    return ElementType$PERMISSION_instance;
  }
  ElementType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElementType',
    interfaces: [Enum]
  };
  function ElementType$values() {
    return [ElementType$USER_getInstance(), ElementType$ROLE_getInstance(), ElementType$FILE_getInstance(), ElementType$ASSIGNMENT_getInstance(), ElementType$PERMISSION_getInstance()];
  }
  ElementType.values = ElementType$values;
  function ElementType$valueOf(name) {
    switch (name) {
      case 'USER':
        return ElementType$USER_getInstance();
      case 'ROLE':
        return ElementType$ROLE_getInstance();
      case 'FILE':
        return ElementType$FILE_getInstance();
      case 'ASSIGNMENT':
        return ElementType$ASSIGNMENT_getInstance();
      case 'PERMISSION':
        return ElementType$PERMISSION_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.core.elements.ElementType.' + name);
    }
  }
  ElementType.valueOf_61zpoe$ = ElementType$valueOf;
  function ElementTypeWithKey(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElementTypeWithKey_initFields() {
    ElementTypeWithKey_initFields = function () {
    };
    ElementTypeWithKey$USER_instance = new ElementTypeWithKey('USER', 0);
    ElementTypeWithKey$ROLE_instance = new ElementTypeWithKey('ROLE', 1);
  }
  var ElementTypeWithKey$USER_instance;
  function ElementTypeWithKey$USER_getInstance() {
    ElementTypeWithKey_initFields();
    return ElementTypeWithKey$USER_instance;
  }
  var ElementTypeWithKey$ROLE_instance;
  function ElementTypeWithKey$ROLE_getInstance() {
    ElementTypeWithKey_initFields();
    return ElementTypeWithKey$ROLE_instance;
  }
  ElementTypeWithKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElementTypeWithKey',
    interfaces: [Enum]
  };
  function ElementTypeWithKey$values() {
    return [ElementTypeWithKey$USER_getInstance(), ElementTypeWithKey$ROLE_getInstance()];
  }
  ElementTypeWithKey.values = ElementTypeWithKey$values;
  function ElementTypeWithKey$valueOf(name) {
    switch (name) {
      case 'USER':
        return ElementTypeWithKey$USER_getInstance();
      case 'ROLE':
        return ElementTypeWithKey$ROLE_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey.' + name);
    }
  }
  ElementTypeWithKey.valueOf_61zpoe$ = ElementTypeWithKey$valueOf;
  function ElementTypeWithStatus(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElementTypeWithStatus_initFields() {
    ElementTypeWithStatus_initFields = function () {
    };
    ElementTypeWithStatus$USER_instance = new ElementTypeWithStatus('USER', 0);
    ElementTypeWithStatus$ROLE_instance = new ElementTypeWithStatus('ROLE', 1);
    ElementTypeWithStatus$FILE_instance = new ElementTypeWithStatus('FILE', 2);
  }
  var ElementTypeWithStatus$USER_instance;
  function ElementTypeWithStatus$USER_getInstance() {
    ElementTypeWithStatus_initFields();
    return ElementTypeWithStatus$USER_instance;
  }
  var ElementTypeWithStatus$ROLE_instance;
  function ElementTypeWithStatus$ROLE_getInstance() {
    ElementTypeWithStatus_initFields();
    return ElementTypeWithStatus$ROLE_instance;
  }
  var ElementTypeWithStatus$FILE_instance;
  function ElementTypeWithStatus$FILE_getInstance() {
    ElementTypeWithStatus_initFields();
    return ElementTypeWithStatus$FILE_instance;
  }
  ElementTypeWithStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElementTypeWithStatus',
    interfaces: [Enum]
  };
  function ElementTypeWithStatus$values() {
    return [ElementTypeWithStatus$USER_getInstance(), ElementTypeWithStatus$ROLE_getInstance(), ElementTypeWithStatus$FILE_getInstance()];
  }
  ElementTypeWithStatus.values = ElementTypeWithStatus$values;
  function ElementTypeWithStatus$valueOf(name) {
    switch (name) {
      case 'USER':
        return ElementTypeWithStatus$USER_getInstance();
      case 'ROLE':
        return ElementTypeWithStatus$ROLE_getInstance();
      case 'FILE':
        return ElementTypeWithStatus$FILE_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.core.elements.ElementTypeWithStatus.' + name);
    }
  }
  ElementTypeWithStatus.valueOf_61zpoe$ = ElementTypeWithStatus$valueOf;
  function ElementTypeWithVersionNumber(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElementTypeWithVersionNumber_initFields() {
    ElementTypeWithVersionNumber_initFields = function () {
    };
    ElementTypeWithVersionNumber$ROLE_instance = new ElementTypeWithVersionNumber('ROLE', 0);
    ElementTypeWithVersionNumber$FILE_instance = new ElementTypeWithVersionNumber('FILE', 1);
  }
  var ElementTypeWithVersionNumber$ROLE_instance;
  function ElementTypeWithVersionNumber$ROLE_getInstance() {
    ElementTypeWithVersionNumber_initFields();
    return ElementTypeWithVersionNumber$ROLE_instance;
  }
  var ElementTypeWithVersionNumber$FILE_instance;
  function ElementTypeWithVersionNumber$FILE_getInstance() {
    ElementTypeWithVersionNumber_initFields();
    return ElementTypeWithVersionNumber$FILE_instance;
  }
  ElementTypeWithVersionNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElementTypeWithVersionNumber',
    interfaces: [Enum]
  };
  function ElementTypeWithVersionNumber$values() {
    return [ElementTypeWithVersionNumber$ROLE_getInstance(), ElementTypeWithVersionNumber$FILE_getInstance()];
  }
  ElementTypeWithVersionNumber.values = ElementTypeWithVersionNumber$values;
  function ElementTypeWithVersionNumber$valueOf(name) {
    switch (name) {
      case 'ROLE':
        return ElementTypeWithVersionNumber$ROLE_getInstance();
      case 'FILE':
        return ElementTypeWithVersionNumber$FILE_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.core.elements.ElementTypeWithVersionNumber.' + name);
    }
  }
  ElementTypeWithVersionNumber.valueOf_61zpoe$ = ElementTypeWithVersionNumber$valueOf;
  function File(name, status, symEncKeyVersionNumber) {
    File$Companion_getInstance();
    if (status === void 0)
      status = ElementStatus$OPERATIONAL_getInstance();
    if (symEncKeyVersionNumber === void 0)
      symEncKeyVersionNumber = 1;
    Element.call(this);
    this.name_4n5cn4$_0 = name;
    this.status_1ttgnb$_0 = status;
    this.symEncKeyVersionNumber = symEncKeyVersionNumber;
    this.token_4xbdxs$_0 = this.generateToken_za3lpa$();
  }
  Object.defineProperty(File.prototype, 'name', {
    get: function () {
      return this.name_4n5cn4$_0;
    }
  });
  Object.defineProperty(File.prototype, 'status', {
    get: function () {
      return this.status_1ttgnb$_0;
    }
  });
  Object.defineProperty(File.prototype, 'token', {
    configurable: true,
    get: function () {
      return this.token_4xbdxs$_0;
    },
    set: function (token) {
      this.token_4xbdxs$_0 = token;
    }
  });
  File.prototype.toArray = function () {
    return [this.name, this.status.toString(), this.symEncKeyVersionNumber.toString(), this.token];
  };
  function File$Companion() {
    File$Companion_instance = this;
  }
  File$Companion.prototype.serializer = function () {
    return File$$serializer_getInstance();
  };
  File$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var File$Companion_instance = null;
  function File$Companion_getInstance() {
    if (File$Companion_instance === null) {
      new File$Companion();
    }return File$Companion_instance;
  }
  function File$$serializer() {
    this.descriptor_rmzn30$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.elements.File', this, 4);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('status', true);
    this.descriptor.addElement_ivxn3r$('symEncKeyVersionNumber', true);
    this.descriptor.addElement_ivxn3r$('token', true);
    File$$serializer_instance = this;
  }
  Object.defineProperty(File$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_rmzn30$_0;
    }
  });
  File$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.name);
    if (!equals(value.status, ElementStatus$OPERATIONAL_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), value.status);
    if (!equals(value.symEncKeyVersionNumber, 1) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.symEncKeyVersionNumber);
    if (!equals(value.token, this.generateToken_za3lpa$()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
      output.encodeStringElement_iij8qq$(this.descriptor, 3, value.token);
    output.endStructure_24f42q$(this.descriptor);
  };
  File$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return File_init(bitMask0, local0, local1, local2, local3, null);
  };
  File$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), internal.IntSerializer, internal.StringSerializer];
  };
  File$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var File$$serializer_instance = null;
  function File$$serializer_getInstance() {
    if (File$$serializer_instance === null) {
      new File$$serializer();
    }return File$$serializer_instance;
  }
  function File_init(seen1, name, status, symEncKeyVersionNumber, token, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(File.prototype);
    $this = Element_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name_4n5cn4$_0 = name;
    if ((seen1 & 2) === 0)
      $this.status_1ttgnb$_0 = ElementStatus$OPERATIONAL_getInstance();
    else
      $this.status_1ttgnb$_0 = status;
    if ((seen1 & 4) === 0)
      $this.symEncKeyVersionNumber = 1;
    else
      $this.symEncKeyVersionNumber = symEncKeyVersionNumber;
    if ((seen1 & 8) === 0)
      $this.token_4xbdxs$_0 = $this.generateToken_za3lpa$();
    else
      $this.token_4xbdxs$_0 = token;
    return $this;
  }
  File.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'File',
    interfaces: [Element]
  };
  function Role(name, status, asymEncKeys, asymSigKeys, versionNumber) {
    Role$Companion_getInstance();
    if (status === void 0)
      status = ElementStatus$OPERATIONAL_getInstance();
    if (asymEncKeys === void 0)
      asymEncKeys = null;
    if (asymSigKeys === void 0)
      asymSigKeys = null;
    if (versionNumber === void 0)
      versionNumber = 1;
    ActiveElement.call(this);
    this.name_m67nq$_0 = name;
    this.status_cgihl9$_0 = status;
    this.asymEncKeys_19otev$_0 = asymEncKeys;
    this.asymSigKeys_luxr5c$_0 = asymSigKeys;
    this.versionNumber = versionNumber;
    this.requirePositiveNumber_za3lpa$(this.versionNumber);
    this.token_g1ezfu$_0 = this.generateToken_za3lpa$();
  }
  Object.defineProperty(Role.prototype, 'name', {
    get: function () {
      return this.name_m67nq$_0;
    }
  });
  Object.defineProperty(Role.prototype, 'status', {
    get: function () {
      return this.status_cgihl9$_0;
    }
  });
  Object.defineProperty(Role.prototype, 'asymEncKeys', {
    get: function () {
      return this.asymEncKeys_19otev$_0;
    }
  });
  Object.defineProperty(Role.prototype, 'asymSigKeys', {
    get: function () {
      return this.asymSigKeys_luxr5c$_0;
    }
  });
  Object.defineProperty(Role.prototype, 'token', {
    configurable: true,
    get: function () {
      return this.token_g1ezfu$_0;
    },
    set: function (token) {
      this.token_g1ezfu$_0 = token;
    }
  });
  Role.prototype.toArray = function () {
    return [this.name, this.status.toString(), this.token];
  };
  function Role$Companion() {
    Role$Companion_instance = this;
  }
  Role$Companion.prototype.serializer = function () {
    return Role$$serializer_getInstance();
  };
  Role$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Role$Companion_instance = null;
  function Role$Companion_getInstance() {
    if (Role$Companion_instance === null) {
      new Role$Companion();
    }return Role$Companion_instance;
  }
  function Role$$serializer() {
    this.descriptor_h861y6$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.elements.Role', this, 4);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('status', true);
    this.descriptor.addElement_ivxn3r$('versionNumber', true);
    this.descriptor.addElement_ivxn3r$('token', true);
    Role$$serializer_instance = this;
  }
  Object.defineProperty(Role$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_h861y6$_0;
    }
  });
  Role$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.name);
    if (!equals(value.status, ElementStatus$OPERATIONAL_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), value.status);
    if (!equals(value.versionNumber, 1) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.versionNumber);
    if (!equals(value.token, this.generateToken_za3lpa$()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
      output.encodeStringElement_iij8qq$(this.descriptor, 3, value.token);
    output.endStructure_24f42q$(this.descriptor);
  };
  Role$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Role_init(bitMask0, local0, local1, local2, local3, null);
  };
  Role$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), internal.IntSerializer, internal.StringSerializer];
  };
  Role$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Role$$serializer_instance = null;
  function Role$$serializer_getInstance() {
    if (Role$$serializer_instance === null) {
      new Role$$serializer();
    }return Role$$serializer_instance;
  }
  function Role_init(seen1, name, status, versionNumber, token, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Role.prototype);
    $this = ActiveElement_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name_m67nq$_0 = name;
    if ((seen1 & 2) === 0)
      $this.status_cgihl9$_0 = ElementStatus$OPERATIONAL_getInstance();
    else
      $this.status_cgihl9$_0 = status;
    if ((seen1 & 4) === 0)
      $this.versionNumber = 1;
    else
      $this.versionNumber = versionNumber;
    if ((seen1 & 8) === 0)
      $this.token_g1ezfu$_0 = $this.generateToken_za3lpa$();
    else
      $this.token_g1ezfu$_0 = token;
    $this.asymEncKeys_19otev$_0 = null;
    $this.asymSigKeys_luxr5c$_0 = null;
    $this.requirePositiveNumber_za3lpa$($this.versionNumber);
    return $this;
  }
  Role.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Role',
    interfaces: [ActiveElement]
  };
  function User(name, status, asymEncKeys, asymSigKeys, isAdmin) {
    User$Companion_getInstance();
    if (status === void 0)
      status = ElementStatus$INCOMPLETE_getInstance();
    if (asymEncKeys === void 0)
      asymEncKeys = null;
    if (asymSigKeys === void 0)
      asymSigKeys = null;
    if (isAdmin === void 0)
      isAdmin = false;
    ActiveElement.call(this);
    this.name_16ea8f$_0 = name;
    this.status_6fxtxk$_0 = status;
    this.asymEncKeys_zhhky6$_0 = asymEncKeys;
    this.asymSigKeys_cezwgr$_0 = asymSigKeys;
    this.isAdmin = isAdmin;
    this.token_vgvmqn$_0 = this.generateToken_za3lpa$();
  }
  Object.defineProperty(User.prototype, 'name', {
    get: function () {
      return this.name_16ea8f$_0;
    }
  });
  Object.defineProperty(User.prototype, 'status', {
    get: function () {
      return this.status_6fxtxk$_0;
    }
  });
  Object.defineProperty(User.prototype, 'asymEncKeys', {
    get: function () {
      return this.asymEncKeys_zhhky6$_0;
    }
  });
  Object.defineProperty(User.prototype, 'asymSigKeys', {
    get: function () {
      return this.asymSigKeys_cezwgr$_0;
    }
  });
  Object.defineProperty(User.prototype, 'token', {
    configurable: true,
    get: function () {
      return this.token_vgvmqn$_0;
    },
    set: function (token) {
      this.token_vgvmqn$_0 = token;
    }
  });
  User.prototype.toArray = function () {
    return [this.name, this.status.toString(), this.isAdmin.toString(), this.token];
  };
  function User$Companion() {
    User$Companion_instance = this;
  }
  User$Companion.prototype.serializer = function () {
    return User$$serializer_getInstance();
  };
  User$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var User$Companion_instance = null;
  function User$Companion_getInstance() {
    if (User$Companion_instance === null) {
      new User$Companion();
    }return User$Companion_instance;
  }
  function User$$serializer() {
    this.descriptor_qtrxot$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.elements.User', this, 4);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('status', true);
    this.descriptor.addElement_ivxn3r$('isAdmin', true);
    this.descriptor.addElement_ivxn3r$('token', true);
    User$$serializer_instance = this;
  }
  Object.defineProperty(User$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_qtrxot$_0;
    }
  });
  User$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.name);
    if (!equals(value.status, ElementStatus$INCOMPLETE_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), value.status);
    if (!equals(value.isAdmin, false) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeBooleanElement_qh7jdn$(this.descriptor, 2, value.isAdmin);
    if (!equals(value.token, this.generateToken_za3lpa$()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
      output.encodeStringElement_iij8qq$(this.descriptor, 3, value.token);
    output.endStructure_24f42q$(this.descriptor);
  };
  User$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeBooleanElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return User_init(bitMask0, local0, local1, local2, local3, null);
  };
  User$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), internal.BooleanSerializer, internal.StringSerializer];
  };
  User$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var User$$serializer_instance = null;
  function User$$serializer_getInstance() {
    if (User$$serializer_instance === null) {
      new User$$serializer();
    }return User$$serializer_instance;
  }
  function User_init(seen1, name, status, isAdmin, token, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(User.prototype);
    $this = ActiveElement_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name_16ea8f$_0 = name;
    if ((seen1 & 2) === 0)
      $this.status_6fxtxk$_0 = ElementStatus$INCOMPLETE_getInstance();
    else
      $this.status_6fxtxk$_0 = status;
    if ((seen1 & 4) === 0)
      $this.isAdmin = false;
    else
      $this.isAdmin = isAdmin;
    if ((seen1 & 8) === 0)
      $this.token_vgvmqn$_0 = $this.generateToken_za3lpa$();
    else
      $this.token_vgvmqn$_0 = token;
    $this.asymEncKeys_zhhky6$_0 = null;
    $this.asymSigKeys_cezwgr$_0 = null;
    return $this;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: [ActiveElement]
  };
  function EnforcementType(name, ordinal) {
    EnforcementType$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EnforcementType_initFields() {
    EnforcementType_initFields = function () {
    };
    EnforcementType$TRADITIONAL_instance = new EnforcementType('TRADITIONAL', 0);
    EnforcementType$COMBINED_instance = new EnforcementType('COMBINED', 1);
    EnforcementType$Companion_getInstance();
  }
  var EnforcementType$TRADITIONAL_instance;
  function EnforcementType$TRADITIONAL_getInstance() {
    EnforcementType_initFields();
    return EnforcementType$TRADITIONAL_instance;
  }
  var EnforcementType$COMBINED_instance;
  function EnforcementType$COMBINED_getInstance() {
    EnforcementType_initFields();
    return EnforcementType$COMBINED_instance;
  }
  function EnforcementType$Companion() {
    EnforcementType$Companion_instance = this;
  }
  EnforcementType$Companion.prototype.serializer = function () {
    return EnforcementType$$serializer_getInstance();
  };
  EnforcementType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EnforcementType$Companion_instance = null;
  function EnforcementType$Companion_getInstance() {
    if (EnforcementType$Companion_instance === null) {
      new EnforcementType$Companion();
    }return EnforcementType$Companion_instance;
  }
  function EnforcementType$$serializer() {
    this.descriptor_bey3xs$_0 = new EnumDescriptor('eu.fbk.st.cryptoac.core.tuples.EnforcementType', 2);
    this.descriptor.addElement_ivxn3r$('TRADITIONAL');
    this.descriptor.addElement_ivxn3r$('COMBINED');
    EnforcementType$$serializer_instance = this;
  }
  Object.defineProperty(EnforcementType$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_bey3xs$_0;
    }
  });
  EnforcementType$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeEnum_szpzho$(this.descriptor, value.ordinal);
  };
  EnforcementType$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return EnforcementType$values()[decoder.decodeEnum_24f42q$(this.descriptor)];
  };
  EnforcementType$$serializer.prototype.childSerializers = function () {
    return [];
  };
  EnforcementType$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var EnforcementType$$serializer_instance = null;
  function EnforcementType$$serializer_getInstance() {
    if (EnforcementType$$serializer_instance === null) {
      new EnforcementType$$serializer();
    }return EnforcementType$$serializer_instance;
  }
  EnforcementType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnforcementType',
    interfaces: [Enum]
  };
  function EnforcementType$values() {
    return [EnforcementType$TRADITIONAL_getInstance(), EnforcementType$COMBINED_getInstance()];
  }
  EnforcementType.values = EnforcementType$values;
  function EnforcementType$valueOf(name) {
    switch (name) {
      case 'TRADITIONAL':
        return EnforcementType$TRADITIONAL_getInstance();
      case 'COMBINED':
        return EnforcementType$COMBINED_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.core.tuples.EnforcementType.' + name);
    }
  }
  EnforcementType.valueOf_61zpoe$ = EnforcementType$valueOf;
  function FileTuple(fileName, fileToken, roleToken, enforcement, symDecKeyVersionNumber) {
    FileTuple$Companion_getInstance();
    if (symDecKeyVersionNumber === void 0)
      symDecKeyVersionNumber = 1;
    Tuple.call(this);
    this.fileName = fileName;
    this.fileToken = fileToken;
    this.roleToken = roleToken;
    this.enforcement = enforcement;
    this.symDecKeyVersionNumber = symDecKeyVersionNumber;
    this.requirePositiveNumber_za3lpa$(this.symDecKeyVersionNumber);
  }
  FileTuple.prototype.getBytesForSignature = function () {
    var $receiver = this.fileName + this.fileToken + this.roleToken + this.symDecKeyVersionNumber + this.enforcement;
    return encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length);
  };
  FileTuple.prototype.updateSignature_um8w34$ = function (newSignature, newSigner, newSignerType) {
    if (equals(newSignerType, ElementTypeWithKey$USER_getInstance()))
      Tuple.prototype.updateSignature_um8w34$.call(this, newSignature, newSigner, newSignerType);
    else
      throw IllegalArgumentException_init('Signed must be a User');
  };
  FileTuple.prototype.toArray = function () {
    return [this.fileName, this.symDecKeyVersionNumber.toString(), this.enforcement.toString()];
  };
  function FileTuple$Companion() {
    FileTuple$Companion_instance = this;
  }
  FileTuple$Companion.prototype.serializer = function () {
    return FileTuple$$serializer_getInstance();
  };
  FileTuple$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FileTuple$Companion_instance = null;
  function FileTuple$Companion_getInstance() {
    if (FileTuple$Companion_instance === null) {
      new FileTuple$Companion();
    }return FileTuple$Companion_instance;
  }
  function FileTuple$$serializer() {
    this.descriptor_od1jz6$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.tuples.FileTuple', this, 8);
    this.descriptor.addElement_ivxn3r$('signature', true);
    this.descriptor.addElement_ivxn3r$('signer', true);
    this.descriptor.addElement_ivxn3r$('signerType', true);
    this.descriptor.addElement_ivxn3r$('fileName', false);
    this.descriptor.addElement_ivxn3r$('fileToken', false);
    this.descriptor.addElement_ivxn3r$('roleToken', false);
    this.descriptor.addElement_ivxn3r$('enforcement', false);
    this.descriptor.addElement_ivxn3r$('symDecKeyVersionNumber', true);
    FileTuple$$serializer_instance = this;
  }
  Object.defineProperty(FileTuple$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_od1jz6$_0;
    }
  });
  FileTuple$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    if (!equals(value.signature, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 0))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 0, internal.ByteArraySerializer, value.signature);
    if (!equals(value.signer, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 1, internal.StringSerializer, value.signer);
    if (!equals(value.signerType, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey', ElementTypeWithKey$values()), value.signerType);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.fileName);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.fileToken);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.roleToken);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 6, EnforcementType$$serializer_getInstance(), value.enforcement);
    if (!equals(value.symDecKeyVersionNumber, 1) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 7))
      output.encodeIntElement_ptg7oe$(this.descriptor, 7, value.symDecKeyVersionNumber);
    output.endStructure_24f42q$(this.descriptor);
  };
  FileTuple$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 0, internal.ByteArraySerializer, local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey', ElementTypeWithKey$values()), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeSerializableElement_12e8id$(this.descriptor, 6, EnforcementType$$serializer_getInstance(), local6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeIntElement_szpzho$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return FileTuple_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, null);
  };
  FileTuple$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.ByteArraySerializer), new NullableSerializer(internal.StringSerializer), new NullableSerializer(new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey', ElementTypeWithKey$values())), internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, EnforcementType$$serializer_getInstance(), internal.IntSerializer];
  };
  FileTuple$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var FileTuple$$serializer_instance = null;
  function FileTuple$$serializer_getInstance() {
    if (FileTuple$$serializer_instance === null) {
      new FileTuple$$serializer();
    }return FileTuple$$serializer_instance;
  }
  function FileTuple_init(seen1, signature, signer, signerType, fileName, fileToken, roleToken, enforcement, symDecKeyVersionNumber, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(FileTuple.prototype);
    $this = Tuple_init(seen1, signature, signer, signerType, $this);
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('fileName');
    else
      $this.fileName = fileName;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('fileToken');
    else
      $this.fileToken = fileToken;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('roleToken');
    else
      $this.roleToken = roleToken;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('enforcement');
    else
      $this.enforcement = enforcement;
    if ((seen1 & 128) === 0)
      $this.symDecKeyVersionNumber = 1;
    else
      $this.symDecKeyVersionNumber = symDecKeyVersionNumber;
    $this.requirePositiveNumber_za3lpa$($this.symDecKeyVersionNumber);
    return $this;
  }
  FileTuple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileTuple',
    interfaces: [Tuple]
  };
  function PermissionTuple(roleName, fileName, roleToken, fileToken, permission, encryptedSymKey, roleVersionNumber, symKeyVersionNumber) {
    PermissionTuple$Companion_getInstance();
    if (encryptedSymKey === void 0)
      encryptedSymKey = null;
    if (roleVersionNumber === void 0)
      roleVersionNumber = 1;
    if (symKeyVersionNumber === void 0)
      symKeyVersionNumber = 1;
    Tuple.call(this);
    this.roleName = roleName;
    this.fileName = fileName;
    this.roleToken = roleToken;
    this.fileToken = fileToken;
    this.permission = permission;
    this.encryptedSymKey = encryptedSymKey;
    this.roleVersionNumber = roleVersionNumber;
    this.symKeyVersionNumber = symKeyVersionNumber;
    this.requirePositiveNumber_za3lpa$(this.roleVersionNumber);
    this.requirePositiveNumber_za3lpa$(this.symKeyVersionNumber);
  }
  PermissionTuple.prototype.getBytesForSignature = function () {
    var $receiver = this.roleName + this.fileName + this.roleToken + this.fileToken + this.permission + this.roleVersionNumber + (this.symKeyVersionNumber.toString() + toString(this.encryptedSymKey));
    return encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length);
  };
  PermissionTuple.prototype.updateSignature_um8w34$ = function (newSignature, newSigner, newSignerType) {
    if (equals(newSignerType, ElementTypeWithKey$USER_getInstance()))
      Tuple.prototype.updateSignature_um8w34$.call(this, newSignature, newSigner, newSignerType);
    else
      throw IllegalArgumentException_init('Signed must be either a User');
  };
  PermissionTuple.prototype.toArray = function () {
    return [this.roleName, this.fileName, this.symKeyVersionNumber.toString(), this.permission.toString()];
  };
  function PermissionTuple$Companion() {
    PermissionTuple$Companion_instance = this;
  }
  PermissionTuple$Companion.prototype.serializer = function () {
    return PermissionTuple$$serializer_getInstance();
  };
  PermissionTuple$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PermissionTuple$Companion_instance = null;
  function PermissionTuple$Companion_getInstance() {
    if (PermissionTuple$Companion_instance === null) {
      new PermissionTuple$Companion();
    }return PermissionTuple$Companion_instance;
  }
  function PermissionTuple$$serializer() {
    this.descriptor_mv86vl$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.tuples.PermissionTuple', this, 11);
    this.descriptor.addElement_ivxn3r$('signature', true);
    this.descriptor.addElement_ivxn3r$('signer', true);
    this.descriptor.addElement_ivxn3r$('signerType', true);
    this.descriptor.addElement_ivxn3r$('roleName', false);
    this.descriptor.addElement_ivxn3r$('fileName', false);
    this.descriptor.addElement_ivxn3r$('roleToken', false);
    this.descriptor.addElement_ivxn3r$('fileToken', false);
    this.descriptor.addElement_ivxn3r$('permission', false);
    this.descriptor.addElement_ivxn3r$('encryptedSymKey', true);
    this.descriptor.addElement_ivxn3r$('roleVersionNumber', true);
    this.descriptor.addElement_ivxn3r$('symKeyVersionNumber', true);
    PermissionTuple$$serializer_instance = this;
  }
  Object.defineProperty(PermissionTuple$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_mv86vl$_0;
    }
  });
  PermissionTuple$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    if (!equals(value.signature, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 0))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 0, internal.ByteArraySerializer, value.signature);
    if (!equals(value.signer, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 1, internal.StringSerializer, value.signer);
    if (!equals(value.signerType, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey', ElementTypeWithKey$values()), value.signerType);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.roleName);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.fileName);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.roleToken);
    output.encodeStringElement_iij8qq$(this.descriptor, 6, value.fileToken);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 7, PermissionType$$serializer_getInstance(), value.permission);
    if (!equals(value.encryptedSymKey, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 8))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 8, EncryptedSymKey$$serializer_getInstance(), value.encryptedSymKey);
    if (!equals(value.roleVersionNumber, 1) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 9))
      output.encodeIntElement_ptg7oe$(this.descriptor, 9, value.roleVersionNumber);
    if (!equals(value.symKeyVersionNumber, 1) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 10))
      output.encodeIntElement_ptg7oe$(this.descriptor, 10, value.symKeyVersionNumber);
    output.endStructure_24f42q$(this.descriptor);
  };
  PermissionTuple$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 0, internal.ByteArraySerializer, local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey', ElementTypeWithKey$values()), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeStringElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeSerializableElement_12e8id$(this.descriptor, 7, PermissionType$$serializer_getInstance(), local7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 8, EncryptedSymKey$$serializer_getInstance(), local8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeIntElement_szpzho$(this.descriptor, 9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeIntElement_szpzho$(this.descriptor, 10);
          bitMask0 |= 1024;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PermissionTuple_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, null);
  };
  PermissionTuple$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.ByteArraySerializer), new NullableSerializer(internal.StringSerializer), new NullableSerializer(new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey', ElementTypeWithKey$values())), internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, PermissionType$$serializer_getInstance(), new NullableSerializer(EncryptedSymKey$$serializer_getInstance()), internal.IntSerializer, internal.IntSerializer];
  };
  PermissionTuple$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PermissionTuple$$serializer_instance = null;
  function PermissionTuple$$serializer_getInstance() {
    if (PermissionTuple$$serializer_instance === null) {
      new PermissionTuple$$serializer();
    }return PermissionTuple$$serializer_instance;
  }
  function PermissionTuple_init(seen1, signature, signer, signerType, roleName, fileName, roleToken, fileToken, permission, encryptedSymKey, roleVersionNumber, symKeyVersionNumber, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PermissionTuple.prototype);
    $this = Tuple_init(seen1, signature, signer, signerType, $this);
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('roleName');
    else
      $this.roleName = roleName;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('fileName');
    else
      $this.fileName = fileName;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('roleToken');
    else
      $this.roleToken = roleToken;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('fileToken');
    else
      $this.fileToken = fileToken;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('permission');
    else
      $this.permission = permission;
    if ((seen1 & 256) === 0)
      $this.encryptedSymKey = null;
    else
      $this.encryptedSymKey = encryptedSymKey;
    if ((seen1 & 512) === 0)
      $this.roleVersionNumber = 1;
    else
      $this.roleVersionNumber = roleVersionNumber;
    if ((seen1 & 1024) === 0)
      $this.symKeyVersionNumber = 1;
    else
      $this.symKeyVersionNumber = symKeyVersionNumber;
    $this.requirePositiveNumber_za3lpa$($this.roleVersionNumber);
    $this.requirePositiveNumber_za3lpa$($this.symKeyVersionNumber);
    return $this;
  }
  PermissionTuple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PermissionTuple',
    interfaces: [Tuple]
  };
  function PermissionType(name, ordinal) {
    PermissionType$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PermissionType_initFields() {
    PermissionType_initFields = function () {
    };
    PermissionType$READ_instance = new PermissionType('READ', 0);
    PermissionType$WRITE_instance = new PermissionType('WRITE', 1);
    PermissionType$READWRITE_instance = new PermissionType('READWRITE', 2);
    PermissionType$Companion_getInstance();
  }
  var PermissionType$READ_instance;
  function PermissionType$READ_getInstance() {
    PermissionType_initFields();
    return PermissionType$READ_instance;
  }
  var PermissionType$WRITE_instance;
  function PermissionType$WRITE_getInstance() {
    PermissionType_initFields();
    return PermissionType$WRITE_instance;
  }
  var PermissionType$READWRITE_instance;
  function PermissionType$READWRITE_getInstance() {
    PermissionType_initFields();
    return PermissionType$READWRITE_instance;
  }
  function PermissionType$Companion() {
    PermissionType$Companion_instance = this;
  }
  PermissionType$Companion.prototype.serializer = function () {
    return PermissionType$$serializer_getInstance();
  };
  PermissionType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PermissionType$Companion_instance = null;
  function PermissionType$Companion_getInstance() {
    if (PermissionType$Companion_instance === null) {
      new PermissionType$Companion();
    }return PermissionType$Companion_instance;
  }
  function PermissionType$$serializer() {
    this.descriptor_7wim3n$_0 = new EnumDescriptor('eu.fbk.st.cryptoac.core.tuples.PermissionType', 3);
    this.descriptor.addElement_ivxn3r$('READ');
    this.descriptor.addElement_ivxn3r$('WRITE');
    this.descriptor.addElement_ivxn3r$('READWRITE');
    PermissionType$$serializer_instance = this;
  }
  Object.defineProperty(PermissionType$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_7wim3n$_0;
    }
  });
  PermissionType$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeEnum_szpzho$(this.descriptor, value.ordinal);
  };
  PermissionType$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return PermissionType$values()[decoder.decodeEnum_24f42q$(this.descriptor)];
  };
  PermissionType$$serializer.prototype.childSerializers = function () {
    return [];
  };
  PermissionType$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PermissionType$$serializer_instance = null;
  function PermissionType$$serializer_getInstance() {
    if (PermissionType$$serializer_instance === null) {
      new PermissionType$$serializer();
    }return PermissionType$$serializer_instance;
  }
  PermissionType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PermissionType',
    interfaces: [Enum]
  };
  function PermissionType$values() {
    return [PermissionType$READ_getInstance(), PermissionType$WRITE_getInstance(), PermissionType$READWRITE_getInstance()];
  }
  PermissionType.values = PermissionType$values;
  function PermissionType$valueOf(name) {
    switch (name) {
      case 'READ':
        return PermissionType$READ_getInstance();
      case 'WRITE':
        return PermissionType$WRITE_getInstance();
      case 'READWRITE':
        return PermissionType$READWRITE_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.core.tuples.PermissionType.' + name);
    }
  }
  PermissionType.valueOf_61zpoe$ = PermissionType$valueOf;
  function RoleTuple(username, roleName, roleVersionNumber, encryptedAsymEncKeys, encryptedAsymSigKeys) {
    RoleTuple$Companion_getInstance();
    if (roleVersionNumber === void 0)
      roleVersionNumber = 1;
    if (encryptedAsymEncKeys === void 0)
      encryptedAsymEncKeys = null;
    if (encryptedAsymSigKeys === void 0)
      encryptedAsymSigKeys = null;
    Tuple.call(this);
    this.username = username;
    this.roleName = roleName;
    this.roleVersionNumber = roleVersionNumber;
    this.encryptedAsymEncKeys = encryptedAsymEncKeys;
    this.encryptedAsymSigKeys = encryptedAsymSigKeys;
    this.requirePositiveNumber_za3lpa$(this.roleVersionNumber);
  }
  RoleTuple.prototype.getBytesForSignature = function () {
    var $receiver = this.username + this.roleName + this.roleVersionNumber + (toString(this.encryptedAsymEncKeys) + toString(this.encryptedAsymSigKeys));
    return encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length);
  };
  RoleTuple.prototype.updateSignature_um8w34$ = function (newSignature, newSigner, newSignerType) {
    if (equals(newSignerType, ElementTypeWithKey$USER_getInstance()))
      Tuple.prototype.updateSignature_um8w34$.call(this, newSignature, newSigner, newSignerType);
    else
      throw IllegalArgumentException_init('Signed must be a User');
  };
  RoleTuple.prototype.toArray = function () {
    return [this.username, this.roleName, this.roleVersionNumber.toString()];
  };
  function RoleTuple$Companion() {
    RoleTuple$Companion_instance = this;
  }
  RoleTuple$Companion.prototype.serializer = function () {
    return RoleTuple$$serializer_getInstance();
  };
  RoleTuple$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RoleTuple$Companion_instance = null;
  function RoleTuple$Companion_getInstance() {
    if (RoleTuple$Companion_instance === null) {
      new RoleTuple$Companion();
    }return RoleTuple$Companion_instance;
  }
  function RoleTuple$$serializer() {
    this.descriptor_ut7qnc$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.tuples.RoleTuple', this, 6);
    this.descriptor.addElement_ivxn3r$('signature', true);
    this.descriptor.addElement_ivxn3r$('signer', true);
    this.descriptor.addElement_ivxn3r$('signerType', true);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('roleName', false);
    this.descriptor.addElement_ivxn3r$('roleVersionNumber', true);
    RoleTuple$$serializer_instance = this;
  }
  Object.defineProperty(RoleTuple$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ut7qnc$_0;
    }
  });
  RoleTuple$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    if (!equals(value.signature, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 0))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 0, internal.ByteArraySerializer, value.signature);
    if (!equals(value.signer, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 1, internal.StringSerializer, value.signer);
    if (!equals(value.signerType, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey', ElementTypeWithKey$values()), value.signerType);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.username);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.roleName);
    if (!equals(value.roleVersionNumber, 1) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 5))
      output.encodeIntElement_ptg7oe$(this.descriptor, 5, value.roleVersionNumber);
    output.endStructure_24f42q$(this.descriptor);
  };
  RoleTuple$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 0, internal.ByteArraySerializer, local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey', ElementTypeWithKey$values()), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeIntElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return RoleTuple_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  RoleTuple$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.ByteArraySerializer), new NullableSerializer(internal.StringSerializer), new NullableSerializer(new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey', ElementTypeWithKey$values())), internal.StringSerializer, internal.StringSerializer, internal.IntSerializer];
  };
  RoleTuple$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var RoleTuple$$serializer_instance = null;
  function RoleTuple$$serializer_getInstance() {
    if (RoleTuple$$serializer_instance === null) {
      new RoleTuple$$serializer();
    }return RoleTuple$$serializer_instance;
  }
  function RoleTuple_init(seen1, signature, signer, signerType, username, roleName, roleVersionNumber, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(RoleTuple.prototype);
    $this = Tuple_init(seen1, signature, signer, signerType, $this);
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username = username;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('roleName');
    else
      $this.roleName = roleName;
    if ((seen1 & 32) === 0)
      $this.roleVersionNumber = 1;
    else
      $this.roleVersionNumber = roleVersionNumber;
    $this.encryptedAsymEncKeys = null;
    $this.encryptedAsymSigKeys = null;
    $this.requirePositiveNumber_za3lpa$($this.roleVersionNumber);
    return $this;
  }
  RoleTuple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RoleTuple',
    interfaces: [Tuple]
  };
  function Tuple() {
    Tuple$Companion_getInstance();
    CryptoACObject.call(this);
    this.signature = null;
    this.signer = null;
    this.signerType = null;
  }
  Tuple.prototype.updateSignature_um8w34$ = function (newSignature, newSigner, newSignerType) {
    this.signature = newSignature;
    this.signer = newSigner;
    this.signerType = newSignerType;
  };
  function Tuple$Companion() {
    Tuple$Companion_instance = this;
  }
  Tuple$Companion.prototype.serializer = function () {
    return new SealedClassSerializer('eu.fbk.st.cryptoac.core.tuples.Tuple', getKClass(Tuple), [getKClass(FileTuple), getKClass(PermissionTuple), getKClass(RoleTuple)], [FileTuple$$serializer_getInstance(), PermissionTuple$$serializer_getInstance(), RoleTuple$$serializer_getInstance()]);
  };
  Tuple$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tuple$Companion_instance = null;
  function Tuple$Companion_getInstance() {
    if (Tuple$Companion_instance === null) {
      new Tuple$Companion();
    }return Tuple$Companion_instance;
  }
  function Tuple_init(seen1, signature, signer, signerType, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Tuple.prototype);
    $this = CryptoACObject_init(seen1, $this);
    if ((seen1 & 1) === 0)
      $this.signature = null;
    else
      $this.signature = signature;
    if ((seen1 & 2) === 0)
      $this.signer = null;
    else
      $this.signer = signer;
    if ((seen1 & 4) === 0)
      $this.signerType = null;
    else
      $this.signerType = signerType;
    return $this;
  }
  Tuple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tuple',
    interfaces: [CryptoACObject]
  };
  function AsymKeys(private_0, public_0, type) {
    AsymKeys$Companion_getInstance();
    this.private = private_0;
    this.public = public_0;
    this.type = type;
  }
  function AsymKeys$Companion() {
    AsymKeys$Companion_instance = this;
  }
  AsymKeys$Companion.prototype.serializer = function () {
    return AsymKeys$$serializer_getInstance();
  };
  AsymKeys$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AsymKeys$Companion_instance = null;
  function AsymKeys$Companion_getInstance() {
    if (AsymKeys$Companion_instance === null) {
      new AsymKeys$Companion();
    }return AsymKeys$Companion_instance;
  }
  function AsymKeys$$serializer() {
    this.descriptor_2v0x0x$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.crypto.AsymKeys', this, 3);
    this.descriptor.addElement_ivxn3r$('private', false);
    this.descriptor.addElement_ivxn3r$('public', false);
    this.descriptor.addElement_ivxn3r$('type', false);
    AsymKeys$$serializer_instance = this;
  }
  Object.defineProperty(AsymKeys$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_2v0x0x$_0;
    }
  });
  AsymKeys$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, internal.ByteArraySerializer, value.private);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, internal.ByteArraySerializer, value.public);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, AsymKeysType$$serializer_getInstance(), value.type);
    output.endStructure_24f42q$(this.descriptor);
  };
  AsymKeys$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, internal.ByteArraySerializer, local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, internal.ByteArraySerializer, local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, AsymKeysType$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return AsymKeys_init(bitMask0, local0, local1, local2, null);
  };
  AsymKeys$$serializer.prototype.childSerializers = function () {
    return [internal.ByteArraySerializer, internal.ByteArraySerializer, AsymKeysType$$serializer_getInstance()];
  };
  AsymKeys$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var AsymKeys$$serializer_instance = null;
  function AsymKeys$$serializer_getInstance() {
    if (AsymKeys$$serializer_instance === null) {
      new AsymKeys$$serializer();
    }return AsymKeys$$serializer_instance;
  }
  function AsymKeys_init(seen1, private_0, public_0, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(AsymKeys.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('private');
    else
      $this.private = private_0;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('public');
    else
      $this.public = public_0;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('type');
    else
      $this.type = type;
    return $this;
  }
  AsymKeys.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsymKeys',
    interfaces: []
  };
  AsymKeys.prototype.component1 = function () {
    return this.private;
  };
  AsymKeys.prototype.component2 = function () {
    return this.public;
  };
  AsymKeys.prototype.component3 = function () {
    return this.type;
  };
  AsymKeys.prototype.copy_rfefwm$ = function (private_0, public_0, type) {
    return new AsymKeys(private_0 === void 0 ? this.private : private_0, public_0 === void 0 ? this.public : public_0, type === void 0 ? this.type : type);
  };
  AsymKeys.prototype.toString = function () {
    return 'AsymKeys(private=' + Kotlin.toString(this.private) + (', public=' + Kotlin.toString(this.public)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  AsymKeys.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.private) | 0;
    result = result * 31 + Kotlin.hashCode(this.public) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  AsymKeys.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.private, other.private) && Kotlin.equals(this.public, other.public) && Kotlin.equals(this.type, other.type)))));
  };
  function AsymKeysType(name, ordinal) {
    AsymKeysType$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AsymKeysType_initFields() {
    AsymKeysType_initFields = function () {
    };
    AsymKeysType$ENC_instance = new AsymKeysType('ENC', 0);
    AsymKeysType$SIG_instance = new AsymKeysType('SIG', 1);
    AsymKeysType$Companion_getInstance();
  }
  var AsymKeysType$ENC_instance;
  function AsymKeysType$ENC_getInstance() {
    AsymKeysType_initFields();
    return AsymKeysType$ENC_instance;
  }
  var AsymKeysType$SIG_instance;
  function AsymKeysType$SIG_getInstance() {
    AsymKeysType_initFields();
    return AsymKeysType$SIG_instance;
  }
  function AsymKeysType$Companion() {
    AsymKeysType$Companion_instance = this;
  }
  AsymKeysType$Companion.prototype.serializer = function () {
    return AsymKeysType$$serializer_getInstance();
  };
  AsymKeysType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AsymKeysType$Companion_instance = null;
  function AsymKeysType$Companion_getInstance() {
    if (AsymKeysType$Companion_instance === null) {
      new AsymKeysType$Companion();
    }return AsymKeysType$Companion_instance;
  }
  function AsymKeysType$$serializer() {
    this.descriptor_wh2451$_0 = new EnumDescriptor('eu.fbk.st.cryptoac.crypto.AsymKeysType', 2);
    this.descriptor.addElement_ivxn3r$('ENC');
    this.descriptor.addElement_ivxn3r$('SIG');
    AsymKeysType$$serializer_instance = this;
  }
  Object.defineProperty(AsymKeysType$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_wh2451$_0;
    }
  });
  AsymKeysType$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeEnum_szpzho$(this.descriptor, value.ordinal);
  };
  AsymKeysType$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return AsymKeysType$values()[decoder.decodeEnum_24f42q$(this.descriptor)];
  };
  AsymKeysType$$serializer.prototype.childSerializers = function () {
    return [];
  };
  AsymKeysType$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var AsymKeysType$$serializer_instance = null;
  function AsymKeysType$$serializer_getInstance() {
    if (AsymKeysType$$serializer_instance === null) {
      new AsymKeysType$$serializer();
    }return AsymKeysType$$serializer_instance;
  }
  AsymKeysType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsymKeysType',
    interfaces: [Enum]
  };
  function AsymKeysType$values() {
    return [AsymKeysType$ENC_getInstance(), AsymKeysType$SIG_getInstance()];
  }
  AsymKeysType.values = AsymKeysType$values;
  function AsymKeysType$valueOf(name) {
    switch (name) {
      case 'ENC':
        return AsymKeysType$ENC_getInstance();
      case 'SIG':
        return AsymKeysType$SIG_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.crypto.AsymKeysType.' + name);
    }
  }
  AsymKeysType.valueOf_61zpoe$ = AsymKeysType$valueOf;
  function CryptoType(name, ordinal) {
    CryptoType$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CryptoType_initFields() {
    CryptoType_initFields = function () {
    };
    CryptoType$JAVA_instance = new CryptoType('JAVA', 0);
    CryptoType$NATIVE_instance = new CryptoType('NATIVE', 1);
    CryptoType$Companion_getInstance();
  }
  var CryptoType$JAVA_instance;
  function CryptoType$JAVA_getInstance() {
    CryptoType_initFields();
    return CryptoType$JAVA_instance;
  }
  var CryptoType$NATIVE_instance;
  function CryptoType$NATIVE_getInstance() {
    CryptoType_initFields();
    return CryptoType$NATIVE_instance;
  }
  function CryptoType$Companion() {
    CryptoType$Companion_instance = this;
  }
  CryptoType$Companion.prototype.serializer = function () {
    return CryptoType$$serializer_getInstance();
  };
  CryptoType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CryptoType$Companion_instance = null;
  function CryptoType$Companion_getInstance() {
    if (CryptoType$Companion_instance === null) {
      new CryptoType$Companion();
    }return CryptoType$Companion_instance;
  }
  function CryptoType$$serializer() {
    this.descriptor_asc12q$_0 = new EnumDescriptor('eu.fbk.st.cryptoac.crypto.CryptoType', 2);
    this.descriptor.addElement_ivxn3r$('JAVA');
    this.descriptor.addElement_ivxn3r$('NATIVE');
    CryptoType$$serializer_instance = this;
  }
  Object.defineProperty(CryptoType$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_asc12q$_0;
    }
  });
  CryptoType$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeEnum_szpzho$(this.descriptor, value.ordinal);
  };
  CryptoType$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return CryptoType$values()[decoder.decodeEnum_24f42q$(this.descriptor)];
  };
  CryptoType$$serializer.prototype.childSerializers = function () {
    return [];
  };
  CryptoType$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CryptoType$$serializer_instance = null;
  function CryptoType$$serializer_getInstance() {
    if (CryptoType$$serializer_instance === null) {
      new CryptoType$$serializer();
    }return CryptoType$$serializer_instance;
  }
  CryptoType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoType',
    interfaces: [Enum]
  };
  function CryptoType$values() {
    return [CryptoType$JAVA_getInstance(), CryptoType$NATIVE_getInstance()];
  }
  CryptoType.values = CryptoType$values;
  function CryptoType$valueOf(name) {
    switch (name) {
      case 'JAVA':
        return CryptoType$JAVA_getInstance();
      case 'NATIVE':
        return CryptoType$NATIVE_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.crypto.CryptoType.' + name);
    }
  }
  CryptoType.valueOf_61zpoe$ = CryptoType$valueOf;
  function EncryptedAsymKeys(private_0, public_0, type) {
    EncryptedAsymKeys$Companion_getInstance();
    this.private = private_0;
    this.public = public_0;
    this.type = type;
  }
  function EncryptedAsymKeys$Companion() {
    EncryptedAsymKeys$Companion_instance = this;
  }
  EncryptedAsymKeys$Companion.prototype.serializer = function () {
    return EncryptedAsymKeys$$serializer_getInstance();
  };
  EncryptedAsymKeys$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EncryptedAsymKeys$Companion_instance = null;
  function EncryptedAsymKeys$Companion_getInstance() {
    if (EncryptedAsymKeys$Companion_instance === null) {
      new EncryptedAsymKeys$Companion();
    }return EncryptedAsymKeys$Companion_instance;
  }
  function EncryptedAsymKeys$$serializer() {
    this.descriptor_iovzqp$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.crypto.EncryptedAsymKeys', this, 3);
    this.descriptor.addElement_ivxn3r$('private', false);
    this.descriptor.addElement_ivxn3r$('public', false);
    this.descriptor.addElement_ivxn3r$('type', false);
    EncryptedAsymKeys$$serializer_instance = this;
  }
  Object.defineProperty(EncryptedAsymKeys$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_iovzqp$_0;
    }
  });
  EncryptedAsymKeys$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, internal.ByteArraySerializer, value.private);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, internal.ByteArraySerializer, value.public);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, AsymKeysType$$serializer_getInstance(), value.type);
    output.endStructure_24f42q$(this.descriptor);
  };
  EncryptedAsymKeys$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, internal.ByteArraySerializer, local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, internal.ByteArraySerializer, local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, AsymKeysType$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return EncryptedAsymKeys_init(bitMask0, local0, local1, local2, null);
  };
  EncryptedAsymKeys$$serializer.prototype.childSerializers = function () {
    return [internal.ByteArraySerializer, internal.ByteArraySerializer, AsymKeysType$$serializer_getInstance()];
  };
  EncryptedAsymKeys$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var EncryptedAsymKeys$$serializer_instance = null;
  function EncryptedAsymKeys$$serializer_getInstance() {
    if (EncryptedAsymKeys$$serializer_instance === null) {
      new EncryptedAsymKeys$$serializer();
    }return EncryptedAsymKeys$$serializer_instance;
  }
  function EncryptedAsymKeys_init(seen1, private_0, public_0, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(EncryptedAsymKeys.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('private');
    else
      $this.private = private_0;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('public');
    else
      $this.public = public_0;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('type');
    else
      $this.type = type;
    return $this;
  }
  EncryptedAsymKeys.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EncryptedAsymKeys',
    interfaces: []
  };
  EncryptedAsymKeys.prototype.component1 = function () {
    return this.private;
  };
  EncryptedAsymKeys.prototype.component2 = function () {
    return this.public;
  };
  EncryptedAsymKeys.prototype.component3 = function () {
    return this.type;
  };
  EncryptedAsymKeys.prototype.copy_rfefwm$ = function (private_0, public_0, type) {
    return new EncryptedAsymKeys(private_0 === void 0 ? this.private : private_0, public_0 === void 0 ? this.public : public_0, type === void 0 ? this.type : type);
  };
  EncryptedAsymKeys.prototype.toString = function () {
    return 'EncryptedAsymKeys(private=' + Kotlin.toString(this.private) + (', public=' + Kotlin.toString(this.public)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  EncryptedAsymKeys.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.private) | 0;
    result = result * 31 + Kotlin.hashCode(this.public) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  EncryptedAsymKeys.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.private, other.private) && Kotlin.equals(this.public, other.public) && Kotlin.equals(this.type, other.type)))));
  };
  function EncryptedSymKey(key) {
    EncryptedSymKey$Companion_getInstance();
    this.key = key;
  }
  function EncryptedSymKey$Companion() {
    EncryptedSymKey$Companion_instance = this;
  }
  EncryptedSymKey$Companion.prototype.serializer = function () {
    return EncryptedSymKey$$serializer_getInstance();
  };
  EncryptedSymKey$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EncryptedSymKey$Companion_instance = null;
  function EncryptedSymKey$Companion_getInstance() {
    if (EncryptedSymKey$Companion_instance === null) {
      new EncryptedSymKey$Companion();
    }return EncryptedSymKey$Companion_instance;
  }
  function EncryptedSymKey$$serializer() {
    this.descriptor_yrz0q7$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.crypto.EncryptedSymKey', this, 1);
    this.descriptor.addElement_ivxn3r$('key', false);
    EncryptedSymKey$$serializer_instance = this;
  }
  Object.defineProperty(EncryptedSymKey$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_yrz0q7$_0;
    }
  });
  EncryptedSymKey$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, internal.ByteArraySerializer, value.key);
    output.endStructure_24f42q$(this.descriptor);
  };
  EncryptedSymKey$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, internal.ByteArraySerializer, local0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return EncryptedSymKey_init(bitMask0, local0, null);
  };
  EncryptedSymKey$$serializer.prototype.childSerializers = function () {
    return [internal.ByteArraySerializer];
  };
  EncryptedSymKey$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var EncryptedSymKey$$serializer_instance = null;
  function EncryptedSymKey$$serializer_getInstance() {
    if (EncryptedSymKey$$serializer_instance === null) {
      new EncryptedSymKey$$serializer();
    }return EncryptedSymKey$$serializer_instance;
  }
  function EncryptedSymKey_init(seen1, key, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(EncryptedSymKey.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('key');
    else
      $this.key = key;
    return $this;
  }
  EncryptedSymKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EncryptedSymKey',
    interfaces: []
  };
  EncryptedSymKey.prototype.component1 = function () {
    return this.key;
  };
  EncryptedSymKey.prototype.copy_fqrh44$ = function (key) {
    return new EncryptedSymKey(key === void 0 ? this.key : key);
  };
  EncryptedSymKey.prototype.toString = function () {
    return 'EncryptedSymKey(key=' + Kotlin.toString(this.key) + ')';
  };
  EncryptedSymKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    return result;
  };
  EncryptedSymKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.key, other.key))));
  };
  function logger$lambda_2() {
    return Unit;
  }
  var logger_2;
  function DSInterfaceCloudParameters(port, url) {
    DSInterfaceCloudParameters$Companion_getInstance();
    DSInterfaceParameters.call(this);
    this.port = port;
    this.url = url;
  }
  function DSInterfaceCloudParameters$checkParameters$lambda(this$DSInterfaceCloudParameters) {
    return function () {
      var $receiver = this$DSInterfaceCloudParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function DSInterfaceCloudParameters$checkParameters$lambda_0(this$DSInterfaceCloudParameters) {
    return function () {
      return 'Port number ' + this$DSInterfaceCloudParameters.port + ' is inconsistent';
    };
  }
  DSInterfaceCloudParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_2.warn_nq59yw$(DSInterfaceCloudParameters$checkParameters$lambda(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_2.warn_nq59yw$(DSInterfaceCloudParameters$checkParameters$lambda_0(this));
      return false;
    } else {
      return true;
    }
  };
  function DSInterfaceCloudParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DSInterfaceCloudParameters.prototype.update_osv2a2$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, DSInterfaceCloudParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_2.error_nq59yw$(DSInterfaceCloudParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  DSInterfaceCloudParameters.prototype.obscureSensitiveFields = function () {
  };
  function DSInterfaceCloudParameters$Companion() {
    DSInterfaceCloudParameters$Companion_instance = this;
  }
  DSInterfaceCloudParameters$Companion.prototype.serializer = function () {
    return DSInterfaceCloudParameters$$serializer_getInstance();
  };
  DSInterfaceCloudParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DSInterfaceCloudParameters$Companion_instance = null;
  function DSInterfaceCloudParameters$Companion_getInstance() {
    if (DSInterfaceCloudParameters$Companion_instance === null) {
      new DSInterfaceCloudParameters$Companion();
    }return DSInterfaceCloudParameters$Companion_instance;
  }
  function DSInterfaceCloudParameters$$serializer() {
    this.descriptor_mujow8$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.ds.DSInterfaceCloudParameters', this, 2);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    DSInterfaceCloudParameters$$serializer_instance = this;
  }
  Object.defineProperty(DSInterfaceCloudParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_mujow8$_0;
    }
  });
  DSInterfaceCloudParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  DSInterfaceCloudParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return DSInterfaceCloudParameters_init(bitMask0, local0, local1, null);
  };
  DSInterfaceCloudParameters$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer];
  };
  DSInterfaceCloudParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var DSInterfaceCloudParameters$$serializer_instance = null;
  function DSInterfaceCloudParameters$$serializer_getInstance() {
    if (DSInterfaceCloudParameters$$serializer_instance === null) {
      new DSInterfaceCloudParameters$$serializer();
    }return DSInterfaceCloudParameters$$serializer_instance;
  }
  function DSInterfaceCloudParameters_init(seen1, port, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DSInterfaceCloudParameters.prototype);
    $this = DSInterfaceParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port = port;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  DSInterfaceCloudParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DSInterfaceCloudParameters',
    interfaces: [DSInterfaceParameters]
  };
  function logger$lambda_3() {
    return Unit;
  }
  var logger_3;
  function DSInterfaceMQTTParameters(port, url, password) {
    DSInterfaceMQTTParameters$Companion_getInstance();
    DSInterfaceParameters.call(this);
    this.port = port;
    this.url = url;
    this.password = password;
  }
  function DSInterfaceMQTTParameters$checkParameters$lambda() {
    return 'Password does not respect TEXT regex';
  }
  function DSInterfaceMQTTParameters$checkParameters$lambda_0(this$DSInterfaceMQTTParameters) {
    return function () {
      var $receiver = this$DSInterfaceMQTTParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function DSInterfaceMQTTParameters$checkParameters$lambda_1(this$DSInterfaceMQTTParameters) {
    return function () {
      return 'Port number ' + this$DSInterfaceMQTTParameters.port + ' is inconsistent';
    };
  }
  DSInterfaceMQTTParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.password)) {
      logger_3.warn_nq59yw$(DSInterfaceMQTTParameters$checkParameters$lambda);
      return false;
    } else if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_3.warn_nq59yw$(DSInterfaceMQTTParameters$checkParameters$lambda_0(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_3.warn_nq59yw$(DSInterfaceMQTTParameters$checkParameters$lambda_1(this));
      return false;
    } else {
      return true;
    }
  };
  function DSInterfaceMQTTParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DSInterfaceMQTTParameters.prototype.update_osv2a2$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, DSInterfaceMQTTParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
      this.password = updatedParameters.password;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_3.error_nq59yw$(DSInterfaceMQTTParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  DSInterfaceMQTTParameters.prototype.obscureSensitiveFields = function () {
    this.password = '***';
  };
  function DSInterfaceMQTTParameters$Companion() {
    DSInterfaceMQTTParameters$Companion_instance = this;
  }
  DSInterfaceMQTTParameters$Companion.prototype.serializer = function () {
    return DSInterfaceMQTTParameters$$serializer_getInstance();
  };
  DSInterfaceMQTTParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DSInterfaceMQTTParameters$Companion_instance = null;
  function DSInterfaceMQTTParameters$Companion_getInstance() {
    if (DSInterfaceMQTTParameters$Companion_instance === null) {
      new DSInterfaceMQTTParameters$Companion();
    }return DSInterfaceMQTTParameters$Companion_instance;
  }
  function DSInterfaceMQTTParameters$$serializer() {
    this.descriptor_rrzxd$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.ds.DSInterfaceMQTTParameters', this, 3);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    DSInterfaceMQTTParameters$$serializer_instance = this;
  }
  Object.defineProperty(DSInterfaceMQTTParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_rrzxd$_0;
    }
  });
  DSInterfaceMQTTParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.url);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.password);
    output.endStructure_24f42q$(this.descriptor);
  };
  DSInterfaceMQTTParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return DSInterfaceMQTTParameters_init(bitMask0, local0, local1, local2, null);
  };
  DSInterfaceMQTTParameters$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  DSInterfaceMQTTParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var DSInterfaceMQTTParameters$$serializer_instance = null;
  function DSInterfaceMQTTParameters$$serializer_getInstance() {
    if (DSInterfaceMQTTParameters$$serializer_instance === null) {
      new DSInterfaceMQTTParameters$$serializer();
    }return DSInterfaceMQTTParameters$$serializer_instance;
  }
  function DSInterfaceMQTTParameters_init(seen1, port, url, password, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DSInterfaceMQTTParameters.prototype);
    $this = DSInterfaceParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port = port;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('password');
    else
      $this.password = password;
    return $this;
  }
  DSInterfaceMQTTParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DSInterfaceMQTTParameters',
    interfaces: [DSInterfaceParameters]
  };
  function AclType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AclType_initFields() {
    AclType_initFields = function () {
    };
    AclType$publishClientSend_instance = new AclType('publishClientSend', 0);
    AclType$publishClientReceive_instance = new AclType('publishClientReceive', 1);
    AclType$subscribeLiteral_instance = new AclType('subscribeLiteral', 2);
    AclType$subscribePattern_instance = new AclType('subscribePattern', 3);
    AclType$unsubscribeLiteral_instance = new AclType('unsubscribeLiteral', 4);
    AclType$unsubscribePattern_instance = new AclType('unsubscribePattern', 5);
  }
  var AclType$publishClientSend_instance;
  function AclType$publishClientSend_getInstance() {
    AclType_initFields();
    return AclType$publishClientSend_instance;
  }
  var AclType$publishClientReceive_instance;
  function AclType$publishClientReceive_getInstance() {
    AclType_initFields();
    return AclType$publishClientReceive_instance;
  }
  var AclType$subscribeLiteral_instance;
  function AclType$subscribeLiteral_getInstance() {
    AclType_initFields();
    return AclType$subscribeLiteral_instance;
  }
  var AclType$subscribePattern_instance;
  function AclType$subscribePattern_getInstance() {
    AclType_initFields();
    return AclType$subscribePattern_instance;
  }
  var AclType$unsubscribeLiteral_instance;
  function AclType$unsubscribeLiteral_getInstance() {
    AclType_initFields();
    return AclType$unsubscribeLiteral_instance;
  }
  var AclType$unsubscribePattern_instance;
  function AclType$unsubscribePattern_getInstance() {
    AclType_initFields();
    return AclType$unsubscribePattern_instance;
  }
  AclType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AclType',
    interfaces: [Enum]
  };
  function AclType$values() {
    return [AclType$publishClientSend_getInstance(), AclType$publishClientReceive_getInstance(), AclType$subscribeLiteral_getInstance(), AclType$subscribePattern_getInstance(), AclType$unsubscribeLiteral_getInstance(), AclType$unsubscribePattern_getInstance()];
  }
  AclType.values = AclType$values;
  function AclType$valueOf(name) {
    switch (name) {
      case 'publishClientSend':
        return AclType$publishClientSend_getInstance();
      case 'publishClientReceive':
        return AclType$publishClientReceive_getInstance();
      case 'subscribeLiteral':
        return AclType$subscribeLiteral_getInstance();
      case 'subscribePattern':
        return AclType$subscribePattern_getInstance();
      case 'unsubscribeLiteral':
        return AclType$unsubscribeLiteral_getInstance();
      case 'unsubscribePattern':
        return AclType$unsubscribePattern_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.implementation.ds.AclType.' + name);
    }
  }
  AclType.valueOf_61zpoe$ = AclType$valueOf;
  function DSInterfaceParameters() {
    DSInterfaceParameters$Companion_getInstance();
  }
  function DSInterfaceParameters$Companion() {
    DSInterfaceParameters$Companion_instance = this;
  }
  DSInterfaceParameters$Companion.prototype.serializer = function () {
    return new SealedClassSerializer('eu.fbk.st.cryptoac.implementation.ds.DSInterfaceParameters', getKClass(DSInterfaceParameters), [getKClass(DSInterfaceCloudParameters), getKClass(DSInterfaceMQTTParameters)], [DSInterfaceCloudParameters$$serializer_getInstance(), DSInterfaceMQTTParameters$$serializer_getInstance()]);
  };
  DSInterfaceParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DSInterfaceParameters$Companion_instance = null;
  function DSInterfaceParameters$Companion_getInstance() {
    if (DSInterfaceParameters$Companion_instance === null) {
      new DSInterfaceParameters$Companion();
    }return DSInterfaceParameters$Companion_instance;
  }
  function DSInterfaceParameters_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DSInterfaceParameters.prototype);
    return $this;
  }
  DSInterfaceParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DSInterfaceParameters',
    interfaces: []
  };
  function DSMQTTMessage(message) {
    DSMQTTMessage$Companion_getInstance();
    this.message = message;
  }
  function DSMQTTMessage$Companion() {
    DSMQTTMessage$Companion_instance = this;
  }
  DSMQTTMessage$Companion.prototype.serializer = function () {
    return DSMQTTMessage$$serializer_getInstance();
  };
  DSMQTTMessage$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DSMQTTMessage$Companion_instance = null;
  function DSMQTTMessage$Companion_getInstance() {
    if (DSMQTTMessage$Companion_instance === null) {
      new DSMQTTMessage$Companion();
    }return DSMQTTMessage$Companion_instance;
  }
  function DSMQTTMessage$$serializer() {
    this.descriptor_s2i7q3$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.ds.DSMQTTMessage', this, 1);
    this.descriptor.addElement_ivxn3r$('message', false);
    DSMQTTMessage$$serializer_instance = this;
  }
  Object.defineProperty(DSMQTTMessage$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_s2i7q3$_0;
    }
  });
  DSMQTTMessage$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.message);
    output.endStructure_24f42q$(this.descriptor);
  };
  DSMQTTMessage$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return DSMQTTMessage_init(bitMask0, local0, null);
  };
  DSMQTTMessage$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer];
  };
  DSMQTTMessage$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var DSMQTTMessage$$serializer_instance = null;
  function DSMQTTMessage$$serializer_getInstance() {
    if (DSMQTTMessage$$serializer_instance === null) {
      new DSMQTTMessage$$serializer();
    }return DSMQTTMessage$$serializer_instance;
  }
  function DSMQTTMessage_init(seen1, message, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DSMQTTMessage.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('message');
    else
      $this.message = message;
    return $this;
  }
  DSMQTTMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DSMQTTMessage',
    interfaces: []
  };
  DSMQTTMessage.prototype.component1 = function () {
    return this.message;
  };
  DSMQTTMessage.prototype.copy_61zpoe$ = function (message) {
    return new DSMQTTMessage(message === void 0 ? this.message : message);
  };
  DSMQTTMessage.prototype.toString = function () {
    return 'DSMQTTMessage(message=' + Kotlin.toString(this.message) + ')';
  };
  DSMQTTMessage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  DSMQTTMessage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function logger$lambda_4() {
    return Unit;
  }
  var logger_4;
  function MSInterfaceMySQLParameters(username, port, password, url) {
    MSInterfaceMySQLParameters$Companion_getInstance();
    MSInterfaceParameters.call(this);
    this.username = username;
    this.port = port;
    this.password = password;
    this.url = url;
  }
  function MSInterfaceMySQLParameters$checkParameters$lambda(this$MSInterfaceMySQLParameters) {
    return function () {
      var $receiver = this$MSInterfaceMySQLParameters.username;
      return 'Username ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect TEXT regex';
    };
  }
  function MSInterfaceMySQLParameters$checkParameters$lambda_0(this$MSInterfaceMySQLParameters) {
    return function () {
      var $receiver = this$MSInterfaceMySQLParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function MSInterfaceMySQLParameters$checkParameters$lambda_1() {
    return 'Password does not respect TEXT regex';
  }
  function MSInterfaceMySQLParameters$checkParameters$lambda_2(this$MSInterfaceMySQLParameters) {
    return function () {
      return 'Port number ' + this$MSInterfaceMySQLParameters.port + ' is inconsistent';
    };
  }
  MSInterfaceMySQLParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.username)) {
      logger_4.warn_nq59yw$(MSInterfaceMySQLParameters$checkParameters$lambda(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_4.warn_nq59yw$(MSInterfaceMySQLParameters$checkParameters$lambda_0(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.password)) {
      logger_4.warn_nq59yw$(MSInterfaceMySQLParameters$checkParameters$lambda_1);
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_4.warn_nq59yw$(MSInterfaceMySQLParameters$checkParameters$lambda_2(this));
      return false;
    } else {
      return true;
    }
  };
  function MSInterfaceMySQLParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  MSInterfaceMySQLParameters.prototype.update_3bewa2$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, MSInterfaceMySQLParameters)) {
      this.port = updatedParameters.port;
      this.password = updatedParameters.password;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_4.error_nq59yw$(MSInterfaceMySQLParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  MSInterfaceMySQLParameters.prototype.obscureSensitiveFields = function () {
    this.password = '***';
  };
  function MSInterfaceMySQLParameters$Companion() {
    MSInterfaceMySQLParameters$Companion_instance = this;
  }
  MSInterfaceMySQLParameters$Companion.prototype.serializer = function () {
    return MSInterfaceMySQLParameters$$serializer_getInstance();
  };
  MSInterfaceMySQLParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MSInterfaceMySQLParameters$Companion_instance = null;
  function MSInterfaceMySQLParameters$Companion_getInstance() {
    if (MSInterfaceMySQLParameters$Companion_instance === null) {
      new MSInterfaceMySQLParameters$Companion();
    }return MSInterfaceMySQLParameters$Companion_instance;
  }
  function MSInterfaceMySQLParameters$$serializer() {
    this.descriptor_elxx5n$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.ms.MSInterfaceMySQLParameters', this, 4);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    MSInterfaceMySQLParameters$$serializer_instance = this;
  }
  Object.defineProperty(MSInterfaceMySQLParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_elxx5n$_0;
    }
  });
  MSInterfaceMySQLParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.username);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.password);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  MSInterfaceMySQLParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return MSInterfaceMySQLParameters_init(bitMask0, local0, local1, local2, local3, null);
  };
  MSInterfaceMySQLParameters$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  MSInterfaceMySQLParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MSInterfaceMySQLParameters$$serializer_instance = null;
  function MSInterfaceMySQLParameters$$serializer_getInstance() {
    if (MSInterfaceMySQLParameters$$serializer_instance === null) {
      new MSInterfaceMySQLParameters$$serializer();
    }return MSInterfaceMySQLParameters$$serializer_instance;
  }
  function MSInterfaceMySQLParameters_init(seen1, username, port, password, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MSInterfaceMySQLParameters.prototype);
    $this = MSInterfaceParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port = port;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('password');
    else
      $this.password = password;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  MSInterfaceMySQLParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MSInterfaceMySQLParameters',
    interfaces: [MSInterfaceParameters]
  };
  function MSInterfaceParameters() {
    MSInterfaceParameters$Companion_getInstance();
  }
  function MSInterfaceParameters$Companion() {
    MSInterfaceParameters$Companion_instance = this;
  }
  MSInterfaceParameters$Companion.prototype.serializer = function () {
    return new SealedClassSerializer('eu.fbk.st.cryptoac.implementation.ms.MSInterfaceParameters', getKClass(MSInterfaceParameters), [getKClass(MSInterfaceMySQLParameters)], [MSInterfaceMySQLParameters$$serializer_getInstance()]);
  };
  MSInterfaceParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MSInterfaceParameters$Companion_instance = null;
  function MSInterfaceParameters$Companion_getInstance() {
    if (MSInterfaceParameters$Companion_instance === null) {
      new MSInterfaceParameters$Companion();
    }return MSInterfaceParameters$Companion_instance;
  }
  function MSInterfaceParameters_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MSInterfaceParameters.prototype);
    return $this;
  }
  MSInterfaceParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MSInterfaceParameters',
    interfaces: []
  };
  function logger$lambda_5() {
    return Unit;
  }
  var logger_5;
  function OPAInterfaceParameters(port, url) {
    OPAInterfaceParameters$Companion_getInstance();
    this.port = port;
    this.url = url;
  }
  function OPAInterfaceParameters$checkParameters$lambda(this$OPAInterfaceParameters) {
    return function () {
      var $receiver = this$OPAInterfaceParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function OPAInterfaceParameters$checkParameters$lambda_0(this$OPAInterfaceParameters) {
    return function () {
      return 'Port number ' + this$OPAInterfaceParameters.port + ' is inconsistent';
    };
  }
  OPAInterfaceParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_5.warn_nq59yw$(OPAInterfaceParameters$checkParameters$lambda(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_5.warn_nq59yw$(OPAInterfaceParameters$checkParameters$lambda_0(this));
      return false;
    } else {
      return true;
    }
  };
  OPAInterfaceParameters.prototype.update_3yqp66$ = function (updatedParameters) {
    this.port = updatedParameters.port;
    this.url = updatedParameters.url;
  };
  OPAInterfaceParameters.prototype.obscureSensitiveFields = function () {
  };
  function OPAInterfaceParameters$Companion() {
    OPAInterfaceParameters$Companion_instance = this;
  }
  OPAInterfaceParameters$Companion.prototype.serializer = function () {
    return OPAInterfaceParameters$$serializer_getInstance();
  };
  OPAInterfaceParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OPAInterfaceParameters$Companion_instance = null;
  function OPAInterfaceParameters$Companion_getInstance() {
    if (OPAInterfaceParameters$Companion_instance === null) {
      new OPAInterfaceParameters$Companion();
    }return OPAInterfaceParameters$Companion_instance;
  }
  function OPAInterfaceParameters$$serializer() {
    this.descriptor_nv7o15$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters', this, 2);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    OPAInterfaceParameters$$serializer_instance = this;
  }
  Object.defineProperty(OPAInterfaceParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_nv7o15$_0;
    }
  });
  OPAInterfaceParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  OPAInterfaceParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return OPAInterfaceParameters_init(bitMask0, local0, local1, null);
  };
  OPAInterfaceParameters$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer];
  };
  OPAInterfaceParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var OPAInterfaceParameters$$serializer_instance = null;
  function OPAInterfaceParameters$$serializer_getInstance() {
    if (OPAInterfaceParameters$$serializer_instance === null) {
      new OPAInterfaceParameters$$serializer();
    }return OPAInterfaceParameters$$serializer_instance;
  }
  function OPAInterfaceParameters_init(seen1, port, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(OPAInterfaceParameters.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port = port;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  OPAInterfaceParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OPAInterfaceParameters',
    interfaces: []
  };
  function logger$lambda_6() {
    return Unit;
  }
  var logger_6;
  function RMInterfaceCloudParameters(port, url) {
    RMInterfaceCloudParameters$Companion_getInstance();
    RMInterfaceParameters.call(this);
    this.port = port;
    this.url = url;
  }
  function RMInterfaceCloudParameters$checkParameters$lambda(this$RMInterfaceCloudParameters) {
    return function () {
      var $receiver = this$RMInterfaceCloudParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function RMInterfaceCloudParameters$checkParameters$lambda_0(this$RMInterfaceCloudParameters) {
    return function () {
      return 'Port number ' + this$RMInterfaceCloudParameters.port + ' is inconsistent';
    };
  }
  RMInterfaceCloudParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_6.warn_nq59yw$(RMInterfaceCloudParameters$checkParameters$lambda(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_6.warn_nq59yw$(RMInterfaceCloudParameters$checkParameters$lambda_0(this));
      return false;
    } else {
      return true;
    }
  };
  function RMInterfaceCloudParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  RMInterfaceCloudParameters.prototype.update_3asgqy$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, RMInterfaceCloudParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_6.error_nq59yw$(RMInterfaceCloudParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  RMInterfaceCloudParameters.prototype.obscureSensitiveFields = function () {
  };
  function RMInterfaceCloudParameters$Companion() {
    RMInterfaceCloudParameters$Companion_instance = this;
  }
  RMInterfaceCloudParameters$Companion.prototype.serializer = function () {
    return RMInterfaceCloudParameters$$serializer_getInstance();
  };
  RMInterfaceCloudParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RMInterfaceCloudParameters$Companion_instance = null;
  function RMInterfaceCloudParameters$Companion_getInstance() {
    if (RMInterfaceCloudParameters$Companion_instance === null) {
      new RMInterfaceCloudParameters$Companion();
    }return RMInterfaceCloudParameters$Companion_instance;
  }
  function RMInterfaceCloudParameters$$serializer() {
    this.descriptor_vobvwo$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.rm.RMInterfaceCloudParameters', this, 2);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    RMInterfaceCloudParameters$$serializer_instance = this;
  }
  Object.defineProperty(RMInterfaceCloudParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_vobvwo$_0;
    }
  });
  RMInterfaceCloudParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  RMInterfaceCloudParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return RMInterfaceCloudParameters_init(bitMask0, local0, local1, null);
  };
  RMInterfaceCloudParameters$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer];
  };
  RMInterfaceCloudParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var RMInterfaceCloudParameters$$serializer_instance = null;
  function RMInterfaceCloudParameters$$serializer_getInstance() {
    if (RMInterfaceCloudParameters$$serializer_instance === null) {
      new RMInterfaceCloudParameters$$serializer();
    }return RMInterfaceCloudParameters$$serializer_instance;
  }
  function RMInterfaceCloudParameters_init(seen1, port, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(RMInterfaceCloudParameters.prototype);
    $this = RMInterfaceParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port = port;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  RMInterfaceCloudParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RMInterfaceCloudParameters',
    interfaces: [RMInterfaceParameters]
  };
  function RMInterfaceParameters() {
    RMInterfaceParameters$Companion_getInstance();
  }
  function RMInterfaceParameters$Companion() {
    RMInterfaceParameters$Companion_instance = this;
  }
  RMInterfaceParameters$Companion.prototype.serializer = function () {
    return new SealedClassSerializer('eu.fbk.st.cryptoac.implementation.rm.RMInterfaceParameters', getKClass(RMInterfaceParameters), [getKClass(RMInterfaceCloudParameters)], [RMInterfaceCloudParameters$$serializer_getInstance()]);
  };
  RMInterfaceParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RMInterfaceParameters$Companion_instance = null;
  function RMInterfaceParameters$Companion_getInstance() {
    if (RMInterfaceParameters$Companion_instance === null) {
      new RMInterfaceParameters$Companion();
    }return RMInterfaceParameters$Companion_instance;
  }
  function RMInterfaceParameters_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(RMInterfaceParameters.prototype);
    return $this;
  }
  RMInterfaceParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RMInterfaceParameters',
    interfaces: []
  };
  function digest(algorithm, bytes) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Should never be invoked');
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function logger$lambda_7() {
    return Unit;
  }
  var logger_7;
  function App() {
    RComponent_init(this);
  }
  function App$render$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function App$render$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.attrs.open = this$App.state.backdropOpen;
      $receiver.invoke_eb8iu4$($module$_material_ui_core.CircularProgress, App$render$lambda$lambda$lambda);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_0($receiver) {
    $receiver.alertOpen = false;
    return Unit;
  }
  function App$render$lambda$lambda_0(this$App) {
    return function (it) {
      setState(this$App, App$render$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function App$render$lambda(this$App) {
    return function ($receiver) {
      $receiver.severity = this$App.state.alertSeverity;
      $receiver.message = this$App.state.alertMessage;
      $receiver.open = this$App.state.alertOpen;
      $receiver.handleClose = App$render$lambda$lambda_0(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function (code, severity) {
      this$App.displayAlert_0(code, severity);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_0(this$App) {
    return function (userIsLogged) {
      this$App.changeUserIsLogged_0(userIsLogged);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_1(this$App) {
    return function (backdropOpen) {
      this$App.changeBackdropOpen_0(backdropOpen);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_2(this$App) {
    return function (username) {
      this$App.changeUsername_0(username);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.handleDisplayAlert = App$render$lambda$lambda$lambda$lambda$lambda(this$App);
      $receiver.handleChangeUserIsLogged = App$render$lambda$lambda$lambda$lambda$lambda_0(this$App);
      $receiver.handleChangeBackdropOpen = App$render$lambda$lambda$lambda$lambda$lambda_1(this$App);
      $receiver.handleChangeUsername = App$render$lambda$lambda$lambda$lambda$lambda_2(this$App);
      $receiver.httpClient = this$App.state.httpClient;
      $receiver.coreType = this$App.state.coreType;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_3(this$App) {
    return function (code, severity) {
      this$App.displayAlert_0(code, severity);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_4(this$App) {
    return function (userIsLogged) {
      this$App.changeUserIsLogged_0(userIsLogged);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_5(this$App) {
    return function (backdropOpen) {
      this$App.changeBackdropOpen_0(backdropOpen);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_6(this$App) {
    return function (username) {
      this$App.changeUsername_0(username);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_7(this$App) {
    return function (userHasProfile) {
      this$App.changeUserHasProfile_0(userHasProfile);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_8(this$App) {
    return function (userIsAdmin) {
      this$App.changeUserIsAdmin_0(userIsAdmin);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.handleDisplayAlert = App$render$lambda$lambda$lambda$lambda$lambda_3(this$App);
      $receiver.handleChangeUserIsLogged = App$render$lambda$lambda$lambda$lambda$lambda_4(this$App);
      $receiver.handleChangeBackdropOpen = App$render$lambda$lambda$lambda$lambda$lambda_5(this$App);
      $receiver.handleChangeUsername = App$render$lambda$lambda$lambda$lambda$lambda_6(this$App);
      $receiver.handleChangeUserHasProfile = App$render$lambda$lambda$lambda$lambda$lambda_7(this$App);
      $receiver.handleChangeUserIsAdmin = App$render$lambda$lambda$lambda$lambda$lambda_8(this$App);
      $receiver.userHasProfile = this$App.state.userHasProfile;
      $receiver.userIsLogged = this$App.state.userIsLogged;
      $receiver.userIsAdmin = this$App.state.userIsAdmin;
      $receiver.coreType = this$App.state.coreType;
      $receiver.username = this$App.state.username;
      $receiver.httpClient = this$App.state.httpClient;
      $receiver.contentMessages = this$App.state.contentMessages;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_1(this$App) {
    return function ($receiver) {
      if (!this$App.state.userIsLogged) {
        login($receiver, App$render$lambda$lambda$lambda$lambda(this$App));
      } else {
        content($receiver, App$render$lambda$lambda$lambda$lambda_0(this$App));
      }
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_1(this$App) {
    return function (file, messages) {
      this$App.setContentMessages_0(file, messages);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_2(this$App) {
    return function (code, severity) {
      this$App.displayAlert_0(code, severity);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_3(this$App) {
    return function (backdropOpen) {
      this$App.changeBackdropOpen_0(backdropOpen);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_4(this$App) {
    return function (coreType) {
      this$App.changeCoreType_0(coreType);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_5(this$App) {
    return function () {
      this$App.toggleProSidebarCollapsed_0();
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_2(this$App) {
    return function ($receiver) {
      $receiver.handleAddMessagesToDisplayInContent = App$render$lambda$lambda$lambda$lambda_1(this$App);
      $receiver.handleDisplayAlert = App$render$lambda$lambda$lambda$lambda_2(this$App);
      $receiver.handleChangeBackdropOpen = App$render$lambda$lambda$lambda$lambda_3(this$App);
      $receiver.handleChangeCoreType = App$render$lambda$lambda$lambda$lambda_4(this$App);
      $receiver.handleToggleSidebar = App$render$lambda$lambda$lambda$lambda_5(this$App);
      $receiver.proSidebarCollapsed = this$App.state.proSidebarCollapsed;
      $receiver.userHasProfile = this$App.state.userHasProfile;
      $receiver.userIsLogged = this$App.state.userIsLogged;
      $receiver.userIsAdmin = this$App.state.userIsAdmin;
      $receiver.coreType = this$App.state.coreType;
      $receiver.httpClient = this$App.state.httpClient;
      $receiver.collapsedWidth = get_px(80);
      $receiver.width = get_px(300);
      $receiver.image = 'bg3.jpg';
      $receiver.breakpoint = 'md';
      return Unit;
    };
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    set_zIndex($receiver_1, 10);
    set_position($receiver_1, Position.relative);
    $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Backdrop, App$render$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0.create());
    cryptoACAlert($receiver, App$render$lambda(this));
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_2 = $receiver_0_0.css;
    set_display($receiver_2, Display.flex);
    set_position($receiver_2, Position.relative);
    set_height($receiver_2, get_pct(100));
    var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_3 = $receiver_0_1.css;
    var tmp$;
    if (this.state.proSidebarCollapsed) {
      tmp$ = get_px(80);
    } else {
      tmp$ = get_px(300);
    }
    set_marginLeft($receiver_3, tmp$);
    set_width($receiver_3, get_pct(100));
    set_height($receiver_3, get_pct(100));
    $receiver_0_1.invoke_eb8iu4$($module$_material_ui_core.Container, App$render$lambda$lambda$lambda_1(this));
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_4 = $receiver_0_2.css;
    set_position($receiver_4, Position.fixed);
    set_height($receiver_4, get_pct(100));
    proSidebarWrapper($receiver_0_2, App$render$lambda$lambda$lambda_2(this));
    $receiver_0_0.child_52psg1$($receiver_0_2.create());
    $receiver.child_52psg1$($receiver_0_0.create());
  };
  function App$init$lambda() {
    return 'Initializing the state of the App component';
  }
  function App$init$lambda$lambda($receiver) {
    $receiver.serializer = new KotlinxSerializer();
    return Unit;
  }
  function App$init$lambda_0($receiver) {
    $receiver.expectSuccess = false;
    $receiver.install_xlxg29$(JsonFeature.Feature, App$init$lambda$lambda);
    $receiver.install_xlxg29$(HttpCookies.Companion);
    return Unit;
  }
  App.prototype.init_bc6fkx$ = function ($receiver) {
    logger_7.info_nq59yw$(App$init$lambda);
    $receiver.coreType = CoreType$RBAC_CLOUD_getInstance();
    $receiver.proSidebarCollapsed = false;
    $receiver.userHasProfile = false;
    $receiver.userIsLogged = false;
    $receiver.backdropOpen = false;
    $receiver.userIsAdmin = false;
    $receiver.alertOpen = false;
    $receiver.alertMessage = '';
    $receiver.contentMessages = HashMap_init();
    $receiver.alertSeverity = CryptoACAlertSeverity$SUCCESS_getInstance();
    $receiver.httpClient = HttpClient(App$init$lambda_0);
  };
  function App$setContentMessages$lambda(closure$file, closure$messages) {
    return function ($receiver) {
      var $receiver_0 = $receiver.contentMessages;
      var key = closure$file;
      var tmp$;
      var value = $receiver_0.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        $receiver_0.put_xwzc9p$(key, answer);
        tmp$ = answer;
      } else {
        tmp$ = value;
      }
      tmp$.addAll_brywnq$(closure$messages);
      return Unit;
    };
  }
  App.prototype.setContentMessages_0 = function (file, messages) {
    setState(this, App$setContentMessages$lambda(file, messages));
  };
  function App$displayAlert$lambda(closure$code, closure$severity) {
    return function () {
      return 'Displaying the alert with code ' + closure$code + ' and severity ' + closure$severity;
    };
  }
  function App$displayAlert$lambda_0(closure$errorMessage, closure$errorCode, closure$code, closure$severity) {
    return function ($receiver) {
      $receiver.alertOpen = true;
      $receiver.alertMessage = closure$errorMessage + (' (Code ' + closure$errorCode + ')');
      $receiver.alertSeverity = closure$code === OutcomeCode$CODE_038_PROFILE_NOT_FOUND_getInstance() ? CryptoACAlertSeverity$INFO_getInstance() : closure$severity;
      return Unit;
    };
  }
  App.prototype.displayAlert_0 = function (code, severity) {
    logger_7.info_nq59yw$(App$displayAlert$lambda(code, severity));
    var splitCode = toMutableList(split(code.toString(), ['_']));
    var errorCode = splitCode.get_za3lpa$(1);
    var errorMessage = joinToString(splitCode.subList_vux9f0$(2, get_lastIndex(splitCode) + 1 | 0), ' ');
    setState(this, App$displayAlert$lambda_0(errorMessage, errorCode, code, severity));
  };
  function App$toggleProSidebarCollapsed$lambda(closure$collapse) {
    return function () {
      return "Setting the 'proSidebarCollapsed' state to " + closure$collapse;
    };
  }
  function App$toggleProSidebarCollapsed$lambda_0(closure$collapse) {
    return function ($receiver) {
      $receiver.proSidebarCollapsed = closure$collapse;
      return Unit;
    };
  }
  App.prototype.toggleProSidebarCollapsed_0 = function () {
    var collapse = !this.state.proSidebarCollapsed;
    logger_7.info_nq59yw$(App$toggleProSidebarCollapsed$lambda(collapse));
    setState(this, App$toggleProSidebarCollapsed$lambda_0(collapse));
  };
  function App$changeBackdropOpen$lambda(closure$newBackdropOpen) {
    return function () {
      return "Setting the 'backdropOpen' state to " + closure$newBackdropOpen;
    };
  }
  function App$changeBackdropOpen$lambda_0(closure$newBackdropOpen) {
    return function ($receiver) {
      $receiver.backdropOpen = closure$newBackdropOpen;
      return Unit;
    };
  }
  App.prototype.changeBackdropOpen_0 = function (newBackdropOpen) {
    logger_7.info_nq59yw$(App$changeBackdropOpen$lambda(newBackdropOpen));
    setState(this, App$changeBackdropOpen$lambda_0(newBackdropOpen));
  };
  function App$changeUserIsLogged$lambda(closure$newUserIsLogged) {
    return function () {
      return "Setting the 'userIsLogged' state to " + closure$newUserIsLogged;
    };
  }
  function App$changeUserIsLogged$lambda_0(closure$newUserIsLogged) {
    return function ($receiver) {
      $receiver.userIsLogged = closure$newUserIsLogged;
      return Unit;
    };
  }
  App.prototype.changeUserIsLogged_0 = function (newUserIsLogged) {
    logger_7.info_nq59yw$(App$changeUserIsLogged$lambda(newUserIsLogged));
    setState(this, App$changeUserIsLogged$lambda_0(newUserIsLogged));
  };
  function App$changeUserHasProfile$lambda(closure$newUserHasProfile) {
    return function () {
      return "Changing the 'newHasProfile' state to " + closure$newUserHasProfile;
    };
  }
  function App$changeUserHasProfile$lambda_0(closure$newUserHasProfile) {
    return function ($receiver) {
      $receiver.userHasProfile = closure$newUserHasProfile;
      return Unit;
    };
  }
  App.prototype.changeUserHasProfile_0 = function (newUserHasProfile) {
    logger_7.info_nq59yw$(App$changeUserHasProfile$lambda(newUserHasProfile));
    setState(this, App$changeUserHasProfile$lambda_0(newUserHasProfile));
  };
  function App$changeUsername$lambda(closure$newUsername) {
    return function () {
      return "Changing the 'username' state to " + toString(closure$newUsername);
    };
  }
  function App$changeUsername$lambda_0(closure$newUsername) {
    return function ($receiver) {
      $receiver.username = closure$newUsername;
      return Unit;
    };
  }
  App.prototype.changeUsername_0 = function (newUsername) {
    logger_7.info_nq59yw$(App$changeUsername$lambda(newUsername));
    setState(this, App$changeUsername$lambda_0(newUsername));
  };
  function App$changeUserIsAdmin$lambda(closure$newUserIsAdmin) {
    return function () {
      return "Changing the 'userIsAdmin' state to " + closure$newUserIsAdmin;
    };
  }
  function App$changeUserIsAdmin$lambda_0(closure$newUserIsAdmin) {
    return function ($receiver) {
      $receiver.userIsAdmin = closure$newUserIsAdmin;
      return Unit;
    };
  }
  App.prototype.changeUserIsAdmin_0 = function (newUserIsAdmin) {
    logger_7.info_nq59yw$(App$changeUserIsAdmin$lambda(newUserIsAdmin));
    setState(this, App$changeUserIsAdmin$lambda_0(newUserIsAdmin));
  };
  function App$changeCoreType$lambda(closure$newCoreType) {
    return function () {
      return "Changing the 'coreType' state to " + closure$newCoreType;
    };
  }
  function App$changeCoreType$lambda_0(closure$newCoreType) {
    return function ($receiver) {
      $receiver.coreType = closure$newCoreType;
      $receiver.userHasProfile = false;
      $receiver.userIsAdmin = false;
      $receiver.userIsLogged = false;
      $receiver.username = null;
      return Unit;
    };
  }
  App.prototype.changeCoreType_0 = function (newCoreType) {
    logger_7.info_nq59yw$(App$changeCoreType$lambda(newCoreType));
    setState(this, App$changeCoreType$lambda_0(newCoreType));
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  var baseURL;
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    mu.KotlinLoggingConfiguration.LOG_LEVEL = KotlinLoggingLevel.DEBUG;
    require('prosidebar.scss');
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function CryptoACAlertSeverity(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CryptoACAlertSeverity_initFields() {
    CryptoACAlertSeverity_initFields = function () {
    };
    CryptoACAlertSeverity$SUCCESS_instance = new CryptoACAlertSeverity('SUCCESS', 0);
    CryptoACAlertSeverity$WARNING_instance = new CryptoACAlertSeverity('WARNING', 1);
    CryptoACAlertSeverity$INFO_instance = new CryptoACAlertSeverity('INFO', 2);
    CryptoACAlertSeverity$ERROR_instance = new CryptoACAlertSeverity('ERROR', 3);
  }
  var CryptoACAlertSeverity$SUCCESS_instance;
  function CryptoACAlertSeverity$SUCCESS_getInstance() {
    CryptoACAlertSeverity_initFields();
    return CryptoACAlertSeverity$SUCCESS_instance;
  }
  var CryptoACAlertSeverity$WARNING_instance;
  function CryptoACAlertSeverity$WARNING_getInstance() {
    CryptoACAlertSeverity_initFields();
    return CryptoACAlertSeverity$WARNING_instance;
  }
  var CryptoACAlertSeverity$INFO_instance;
  function CryptoACAlertSeverity$INFO_getInstance() {
    CryptoACAlertSeverity_initFields();
    return CryptoACAlertSeverity$INFO_instance;
  }
  var CryptoACAlertSeverity$ERROR_instance;
  function CryptoACAlertSeverity$ERROR_getInstance() {
    CryptoACAlertSeverity_initFields();
    return CryptoACAlertSeverity$ERROR_instance;
  }
  CryptoACAlertSeverity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACAlertSeverity',
    interfaces: [Enum]
  };
  function CryptoACAlertSeverity$values() {
    return [CryptoACAlertSeverity$SUCCESS_getInstance(), CryptoACAlertSeverity$WARNING_getInstance(), CryptoACAlertSeverity$INFO_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()];
  }
  CryptoACAlertSeverity.values = CryptoACAlertSeverity$values;
  function CryptoACAlertSeverity$valueOf(name) {
    switch (name) {
      case 'SUCCESS':
        return CryptoACAlertSeverity$SUCCESS_getInstance();
      case 'WARNING':
        return CryptoACAlertSeverity$WARNING_getInstance();
      case 'INFO':
        return CryptoACAlertSeverity$INFO_getInstance();
      case 'ERROR':
        return CryptoACAlertSeverity$ERROR_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.components.custom.CryptoACAlertSeverity.' + name);
    }
  }
  CryptoACAlertSeverity.valueOf_61zpoe$ = CryptoACAlertSeverity$valueOf;
  function CryptoACAlert() {
    RComponent_init(this);
  }
  function CryptoACAlert$render$lambda$lambda$lambda(this$CryptoACAlert) {
    return function (event, f) {
      this$CryptoACAlert.props.handleClose(event);
      return Unit;
    };
  }
  function CryptoACAlert$render$lambda$lambda(this$CryptoACAlert) {
    return function ($receiver) {
      $receiver.open = this$CryptoACAlert.props.open;
      $receiver.autoHideDuration = this$CryptoACAlert.props.severity === CryptoACAlertSeverity$SUCCESS_getInstance() ? 4000 : null;
      $receiver.onClose = CryptoACAlert$render$lambda$lambda$lambda(this$CryptoACAlert);
      return Unit;
    };
  }
  function CryptoACAlert$render$lambda$lambda$lambda$lambda(this$CryptoACAlert) {
    return function (event) {
      this$CryptoACAlert.props.handleClose(event);
      return Unit;
    };
  }
  function CryptoACAlert$render$lambda$lambda$lambda_0(this$CryptoACAlert) {
    return function ($receiver) {
      $receiver.severity = this$CryptoACAlert.props.severity.toString().toLowerCase();
      $receiver.onClose = CryptoACAlert$render$lambda$lambda$lambda$lambda(this$CryptoACAlert);
      return Unit;
    };
  }
  function CryptoACAlert$render$lambda$lambda_0(this$CryptoACAlert) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACAlert$render$lambda$lambda$lambda_0(this$CryptoACAlert));
      $receiver.unaryPlus_pdl1vz$(this$CryptoACAlert.props.message);
      return Unit;
    };
  }
  function CryptoACAlert$render$lambda(this$CryptoACAlert) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACAlert$render$lambda$lambda(this$CryptoACAlert));
      $receiver.invoke_eb8iu4$($module$_material_ui_lab.Alert, CryptoACAlert$render$lambda$lambda_0(this$CryptoACAlert));
      return Unit;
    };
  }
  CryptoACAlert.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_eb8iu4$($module$_material_ui_core.Snackbar, CryptoACAlert$render$lambda(this));
  };
  CryptoACAlert.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACAlert',
    interfaces: [RComponent]
  };
  function cryptoACAlert$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cryptoACAlert($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(CryptoACAlert), cryptoACAlert$lambda(handler));
  }
  function styledDiv$lambda_0(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function CryptoACCheckbox() {
    RComponent_init(this);
  }
  function CryptoACCheckbox$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.hasToSetValue = true;
      $receiver.value = equals(this$CryptoACCheckbox.state.value, 'true_' + this$CryptoACCheckbox.props.label) ? 'false_' + this$CryptoACCheckbox.props.label : 'true_' + this$CryptoACCheckbox.props.label;
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda$lambda$lambda$lambda(this$CryptoACCheckbox) {
    return function (it) {
      setState(this$CryptoACCheckbox, CryptoACCheckbox$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACCheckbox));
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda$lambda$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.value = this$CryptoACCheckbox.state.value;
      $receiver.checked = toBoolean(split(this$CryptoACCheckbox.state.value, ['_']).get_za3lpa$(0));
      $receiver.onChange = CryptoACCheckbox$render$lambda$lambda$lambda$lambda(this$CryptoACCheckbox);
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACCheckbox$render$lambda$lambda$lambda(this$CryptoACCheckbox));
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda$lambda_0(closure$checkboxElement, this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.control = ensureNotNull(closure$checkboxElement.v);
      $receiver.label = this$CryptoACCheckbox.props.label;
      $receiver.value = this$CryptoACCheckbox.props.label;
      $receiver.labelPlacement = 'start';
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda(closure$checkboxElement, this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACCheckbox$render$lambda$lambda_0(closure$checkboxElement, this$CryptoACCheckbox));
      return Unit;
    };
  }
  CryptoACCheckbox.prototype.render_ss14n$ = function ($receiver) {
    var checkboxElement = {v: null};
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
    set_display($receiver_0.css, Display.none);
    checkboxElement.v = $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Checkbox, CryptoACCheckbox$render$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0.create());
    $receiver.invoke_eb8iu4$($module$_material_ui_core.FormControlLabel, CryptoACCheckbox$render$lambda(checkboxElement, this));
  };
  function CryptoACCheckbox$init$lambda(props, state) {
    if (!state.hasToSetValue) {
      state.value = equals(props.defaultValue, undefined) ? 'false_' + props.label : props.defaultValue + '_' + props.label;
    }state.hasToSetValue = false;
    return Unit;
  }
  CryptoACCheckbox.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.hasToSetValue = false;
    get_js(getKClass(CryptoACCheckbox)).getDerivedStateFromProps = CryptoACCheckbox$init$lambda;
  };
  CryptoACCheckbox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACCheckbox',
    interfaces: [RComponent]
  };
  function cryptoACCheckbox$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cryptoACCheckbox($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(CryptoACCheckbox), cryptoACCheckbox$lambda(handler));
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function styledDiv$lambda_1(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function form$lambda(closure$action, closure$encType, closure$method, closure$classes) {
    return function (it) {
      return new FORM_init(attributesMapOf(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null, 'class', closure$classes]), it);
    };
  }
  function logger$lambda_8() {
    return Unit;
  }
  var logger_8;
  function CryptoACForm() {
    RComponent_init(this);
  }
  function CryptoACForm$render$lambda$lambda$lambda(this$CryptoACForm) {
    return function (event) {
      this$CryptoACForm.handleCryptoACFormSubmit_0(event, this$CryptoACForm.props.submit);
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda_0($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$currentSM) {
    return function ($receiver) {
      $receiver.item = true;
      $receiver.xs = 12;
      $receiver.sm = closure$currentSM;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField, this$CryptoACForm) {
    return function ($receiver) {
      $receiver.defaultValue = equals(closure$formField.defaultValue, undefined) ? 'false' : closure$formField.defaultValue;
      $receiver.name = closure$formField.name;
      $receiver.row = true;
      var $receiver_0 = ensureNotNull(closure$formField.radioOptions);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var tmp$_1, tmp$_2;
        if ((tmp$_1 = this$CryptoACForm.props.method) != null ? tmp$_1.equals(HttpMethod.Companion.Delete) : null) {
          tmp$_2 = 'secondary';
        } else {
          tmp$_2 = 'primary';
        }
        tmp$_0.call(destination, new CryptoACRadioOption(item, item, tmp$_2));
      }
      $receiver.options = destination;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField, this$CryptoACForm) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      if (closure$formField.className != null) {
        $receiver.className = closure$formField.className;
      }$receiver.defaultValue = equals(closure$formField.defaultValue, undefined) ? '' : closure$formField.defaultValue;
      $receiver.name = closure$formField.name;
      $receiver.label = closure$formField.label;
      $receiver.type = closure$formField.type.toString();
      $receiver.variant = 'filled';
      if ((tmp$ = this$CryptoACForm.props.method) != null ? tmp$.equals(HttpMethod.Companion.Delete) : null) {
        tmp$_0 = 'secondary';
      } else {
        tmp$_0 = 'primary';
      }
      $receiver.color = tmp$_0;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var closure$formField_0 = closure$formField;
      $receiver_0.attrs;
      $receiver.defaultValue = equals(closure$formField_0.defaultValue, undefined) ? 'false' : closure$formField_0.defaultValue.toString();
      $receiver.label = closure$formField_0.name;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      $receiver.color = 'primary';
      $receiver.component = 'label';
      $receiver.children = this$.invoke_eb8iu4$($module$react_icons_fa.FaCloudUploadAlt, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver));
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
      var closure$formField_0 = closure$formField;
      var $receiver_1 = $receiver_0.attrs;
      $receiver_1.name = closure$formField_0.name;
      $receiver_1.type = InputType.file;
      set_hidden($receiver_1, true);
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda(closure$currentSM, closure$formField, this$CryptoACForm) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$currentSM));
      switch (closure$formField.type.name) {
        case 'radio':
          cryptoACRadioGroup($receiver, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField, this$CryptoACForm));
          break;
        case 'text':
        case 'password':
        case 'number':
          var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
          var closure$formField_0 = closure$formField;
          var this$CryptoACForm_0 = this$CryptoACForm;
          var $receiver_1 = $receiver_0.css;
          set_marginBottom($receiver_1, get_px(10));
          set_marginTop($receiver_1, get_px(10));
          set_marginRight($receiver_1, get_px(20));
          cryptoACTextField($receiver_0, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField_0, this$CryptoACForm_0));
          $receiver.child_52psg1$($receiver_0.create());
          break;
        case 'checkBox':
          var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
          var closure$formField_1 = closure$formField;
          var $receiver_2 = $receiver_0_0.css;
          set_marginBottom($receiver_2, get_px(10));
          set_marginTop($receiver_2, get_px(10));
          set_marginRight($receiver_2, get_px(20));
          cryptoACCheckbox($receiver_0_0, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField_1, $receiver_0_0));
          $receiver.child_52psg1$($receiver_0_0.create());
          break;
        case 'file':
          $receiver.invoke_eb8iu4$($module$_material_ui_core.IconButton, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField));
          break;
        default:throw Exception_init('TODO');
      }
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 12;
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACForm) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.type = InputType.submit.toString();
      if ((tmp$ = this$CryptoACForm.props.method) != null ? tmp$.equals(HttpMethod.Companion.Delete) : null) {
        tmp$_0 = 'secondary';
      } else {
        tmp$_0 = 'primary';
      }
      $receiver.color = tmp$_0;
      $receiver.variant = 'contained';
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACForm) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACForm));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
      var this$CryptoACForm_0 = this$CryptoACForm;
      set_marginRight($receiver_0.css, get_px(5));
      $receiver_0.unaryPlus_pdl1vz$(this$CryptoACForm_0.props.submitButtonText.toUpperCase());
      $receiver.child_52psg1$($receiver_0.create());
      $receiver.invoke_eb8iu4$($module$react_icons_fa.FaPaperPlane, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda_1(this$CryptoACForm) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACForm$render$lambda$lambda$lambda$lambda);
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
      var this$CryptoACForm_0 = this$CryptoACForm;
      var $receiver_1 = $receiver_0.css;
      set_textAlign($receiver_1, TextAlign.center);
      set_textAlign($receiver_1, TextAlign.center);
      set_alignItems($receiver_1, Align.center);
      set_alignContent($receiver_1, Align.center);
      set_marginTop($receiver_1, get_px(15));
      set_marginRight($receiver_1, get_px(15));
      $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Button, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACForm_0));
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda(this$CryptoACForm) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACForm$render$lambda$lambda$lambda_0);
      var $receiver_0 = this$CryptoACForm.props.cryptoACFormFields;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$CryptoACForm_0 = this$CryptoACForm;
        var currentSM = 12 / element.size | 0;
        var tmp$_0;
        tmp$_0 = element.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          $receiver.key = element_0.name;
          $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda(currentSM, element_0, this$CryptoACForm_0));
        }
      }
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, CryptoACForm$render$lambda$lambda$lambda_1(this$CryptoACForm));
      return Unit;
    };
  }
  CryptoACForm.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(form$lambda(null, null, null, null));
    var $receiver_1 = $receiver_0.attrs;
    $receiver_1.action = this.props.endpoint;
    set_onSubmitFunction($receiver_1, CryptoACForm$render$lambda$lambda$lambda(this));
    $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Grid, CryptoACForm$render$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0.create());
  };
  function CryptoACForm$handleCryptoACFormSubmit$lambda() {
    return 'Received form submit request, retrieving values';
  }
  function CryptoACForm$handleCryptoACFormSubmit$lambda_0(closure$values, closure$files) {
    return function () {
      return 'Collected ' + closure$values.size + ' values and ' + closure$files.size + ' files';
    };
  }
  function Coroutine$CryptoACForm$handleCryptoACFormSubmit$lambda(this$CryptoACForm_0, closure$submitAndHandleCallback_0, closure$values_0, closure$files_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CryptoACForm = this$CryptoACForm_0;
    this.local$closure$submitAndHandleCallback = closure$submitAndHandleCallback_0;
    this.local$closure$values = closure$values_0;
    this.local$closure$files = closure$files_0;
  }
  Coroutine$CryptoACForm$handleCryptoACFormSubmit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CryptoACForm$handleCryptoACFormSubmit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CryptoACForm$handleCryptoACFormSubmit$lambda.prototype.constructor = Coroutine$CryptoACForm$handleCryptoACFormSubmit$lambda;
  Coroutine$CryptoACForm$handleCryptoACFormSubmit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (equals(this.local$this$CryptoACForm.props.coreType, undefined)) {
              tmp$ = baseURL + this.local$this$CryptoACForm.props.endpoint;
            } else {
              tmp$ = baseURL + replace(this.local$this$CryptoACForm.props.endpoint, '{Core}', this.local$this$CryptoACForm.props.coreType.toString());
            }

            var actualEndpoint = tmp$;
            return this.local$closure$submitAndHandleCallback(this.local$this$CryptoACForm.props.method, actualEndpoint, this.local$closure$values, this.local$closure$files);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
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
  function CryptoACForm$handleCryptoACFormSubmit$lambda_1(this$CryptoACForm_0, closure$submitAndHandleCallback_0, closure$values_0, closure$files_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CryptoACForm$handleCryptoACFormSubmit$lambda(this$CryptoACForm_0, closure$submitAndHandleCallback_0, closure$values_0, closure$files_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CryptoACForm$handleCryptoACFormSubmit$lambda_2(closure$collectedValues, closure$expectedValues) {
    return function () {
      return 'Not all values were given (collected ' + closure$collectedValues + ', expected ' + closure$expectedValues.v + '), canceling submit request';
    };
  }
  function CryptoACForm$handleCryptoACFormSubmit$lambda_3(closure$values, closure$files) {
    return function () {
      return 'Collected ' + closure$values.size + ' values, ' + closure$files.size + ' files: ';
    };
  }
  function CryptoACForm$handleCryptoACFormSubmit$lambda$lambda(closure$it) {
    return function () {
      return 'key ' + closure$it.key + ', value ' + closure$it.value;
    };
  }
  function CryptoACForm$handleCryptoACFormSubmit$lambda$lambda_0(closure$it) {
    return function () {
      return 'file name ' + closure$it.key;
    };
  }
  CryptoACForm.prototype.handleCryptoACFormSubmit_0 = function (e, submitAndHandleCallback) {
    var tmp$, tmp$_0;
    e.preventDefault();
    logger_8.info_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda);
    var values = this.getValuesFromInputFields_0(Kotlin.isType(tmp$ = e.target, HTMLFormElement) ? tmp$ : throwCCE());
    var files = this.getFilesFromInputFields_0(Kotlin.isType(tmp$_0 = e.target, HTMLFormElement) ? tmp$_0 : throwCCE());
    logger_8.info_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda_0(values, files));
    var collectedValues = values.size + files.size | 0;
    var expectedValues = {v: 0};
    var tmp$_1;
    tmp$_1 = this.props.cryptoACFormFields.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      expectedValues.v = expectedValues.v + element.size | 0;
    }
    if (expectedValues.v === collectedValues) {
      launch(MainScope(), void 0, void 0, CryptoACForm$handleCryptoACFormSubmit$lambda_1(this, submitAndHandleCallback, values, files));
    } else {
      logger_8.warn_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda_2(collectedValues, expectedValues));
      logger_8.debug_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda_3(values, files));
      var tmp$_2;
      tmp$_2 = values.entries.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        logger_8.debug_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda$lambda(element_0));
      }
      var tmp$_3;
      tmp$_3 = files.entries.iterator();
      while (tmp$_3.hasNext()) {
        var element_1 = tmp$_3.next();
        logger_8.debug_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda$lambda_0(element_1));
      }
      this.props.handleDisplayCryptoACAlert(OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance(), CryptoACAlertSeverity$WARNING_getInstance());
    }
  };
  CryptoACForm.prototype.getValuesFromInputFields_0 = function (form) {
    var tmp$;
    var values = HashMap_init();
    tmp$ = form.elements.length;
    for (var i = 0; i <= tmp$; i++) {
      var $receiver = form.elements.item(i);
      var tmp$_0;
      var tmp$_1 = Kotlin.isType($receiver, HTMLInputElement);
      if (tmp$_1) {
        tmp$_1 = !isBlank($receiver.value);
      }if (tmp$_1) {
        tmp$_0 = $receiver.type;
        if (equals(tmp$_0, InputType.password.toString())) {
          var key = $receiver.name;
          var value = $receiver.value;
          values.put_xwzc9p$(key, value);
        } else if (equals(tmp$_0, InputType.text.toString())) {
          var key_0 = $receiver.name;
          var value_0 = $receiver.value;
          values.put_xwzc9p$(key_0, value_0);
        } else if (equals(tmp$_0, InputType.number.toString())) {
          var key_1 = $receiver.name;
          var value_1 = $receiver.value;
          values.put_xwzc9p$(key_1, value_1);
        } else if (equals(tmp$_0, InputType.radio.toString())) {
          if ($receiver.checked) {
            var key_2 = $receiver.name;
            var value_2 = $receiver.value;
            values.put_xwzc9p$(key_2, value_2);
          }} else {
          if (equals(tmp$_0, InputType.checkBox.toString().toLowerCase())) {
            var key_3 = split($receiver.value, ['_']).get_za3lpa$(1);
            var value_3 = split($receiver.value, ['_']).get_za3lpa$(0);
            values.put_xwzc9p$(key_3, value_3);
          } else {
            console.log('TODO FIX');
          }
        }
      }}
    return values;
  };
  CryptoACForm.prototype.getFilesFromInputFields_0 = function (form) {
    var tmp$;
    var values = HashMap_init();
    tmp$ = form.elements.length;
    for (var i = 0; i <= tmp$; i++) {
      var $receiver = form.elements.item(i);
      if (Kotlin.isType($receiver, HTMLInputElement) && equals($receiver.type, InputType.file.toString())) {
        var file = ensureNotNull($receiver.files)[0];
        if (file != null) {
          var key = $receiver.name;
          values.put_xwzc9p$(key, file);
        }}}
    return values;
  };
  CryptoACForm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACForm',
    interfaces: [RComponent]
  };
  function cryptoACForm$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cryptoACForm($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(CryptoACForm), cryptoACForm$lambda(handler));
  }
  function CryptoACFormData(key, submitButtonText, icon, endpoint, method, coreType, cryptoACFormFields, submit, divider) {
    if (divider === void 0)
      divider = false;
    this.key = key;
    this.submitButtonText = submitButtonText;
    this.icon = icon;
    this.endpoint = endpoint;
    this.method = method;
    this.coreType = coreType;
    this.cryptoACFormFields = cryptoACFormFields;
    this.submit = submit;
    this.divider = divider;
  }
  CryptoACFormData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACFormData',
    interfaces: []
  };
  CryptoACFormData.prototype.component1 = function () {
    return this.key;
  };
  CryptoACFormData.prototype.component2 = function () {
    return this.submitButtonText;
  };
  CryptoACFormData.prototype.component3 = function () {
    return this.icon;
  };
  CryptoACFormData.prototype.component4 = function () {
    return this.endpoint;
  };
  CryptoACFormData.prototype.component5 = function () {
    return this.method;
  };
  CryptoACFormData.prototype.component6 = function () {
    return this.coreType;
  };
  CryptoACFormData.prototype.component7 = function () {
    return this.cryptoACFormFields;
  };
  CryptoACFormData.prototype.component8 = function () {
    return this.submit;
  };
  CryptoACFormData.prototype.component9 = function () {
    return this.divider;
  };
  CryptoACFormData.prototype.copy_ia800z$ = function (key, submitButtonText, icon, endpoint, method, coreType, cryptoACFormFields, submit, divider) {
    return new CryptoACFormData(key === void 0 ? this.key : key, submitButtonText === void 0 ? this.submitButtonText : submitButtonText, icon === void 0 ? this.icon : icon, endpoint === void 0 ? this.endpoint : endpoint, method === void 0 ? this.method : method, coreType === void 0 ? this.coreType : coreType, cryptoACFormFields === void 0 ? this.cryptoACFormFields : cryptoACFormFields, submit === void 0 ? this.submit : submit, divider === void 0 ? this.divider : divider);
  };
  CryptoACFormData.prototype.toString = function () {
    return 'CryptoACFormData(key=' + Kotlin.toString(this.key) + (', submitButtonText=' + Kotlin.toString(this.submitButtonText)) + (', icon=' + Kotlin.toString(this.icon)) + (', endpoint=' + Kotlin.toString(this.endpoint)) + (', method=' + Kotlin.toString(this.method)) + (', coreType=' + Kotlin.toString(this.coreType)) + (', cryptoACFormFields=' + Kotlin.toString(this.cryptoACFormFields)) + (', submit=' + Kotlin.toString(this.submit)) + (', divider=' + Kotlin.toString(this.divider)) + ')';
  };
  CryptoACFormData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.submitButtonText) | 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    result = result * 31 + Kotlin.hashCode(this.endpoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.method) | 0;
    result = result * 31 + Kotlin.hashCode(this.coreType) | 0;
    result = result * 31 + Kotlin.hashCode(this.cryptoACFormFields) | 0;
    result = result * 31 + Kotlin.hashCode(this.submit) | 0;
    result = result * 31 + Kotlin.hashCode(this.divider) | 0;
    return result;
  };
  CryptoACFormData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.submitButtonText, other.submitButtonText) && Kotlin.equals(this.icon, other.icon) && Kotlin.equals(this.endpoint, other.endpoint) && Kotlin.equals(this.method, other.method) && Kotlin.equals(this.coreType, other.coreType) && Kotlin.equals(this.cryptoACFormFields, other.cryptoACFormFields) && Kotlin.equals(this.submit, other.submit) && Kotlin.equals(this.divider, other.divider)))));
  };
  function CryptoACFormField(name, label, type, radioOptions, defaultValue, className) {
    if (radioOptions === void 0)
      radioOptions = null;
    if (defaultValue === void 0)
      defaultValue = null;
    if (className === void 0)
      className = null;
    this.name = name;
    this.label = label;
    this.type = type;
    this.radioOptions = radioOptions;
    this.defaultValue = defaultValue;
    this.className = className;
  }
  CryptoACFormField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACFormField',
    interfaces: []
  };
  CryptoACFormField.prototype.component1 = function () {
    return this.name;
  };
  CryptoACFormField.prototype.component2 = function () {
    return this.label;
  };
  CryptoACFormField.prototype.component3 = function () {
    return this.type;
  };
  CryptoACFormField.prototype.component4 = function () {
    return this.radioOptions;
  };
  CryptoACFormField.prototype.component5 = function () {
    return this.defaultValue;
  };
  CryptoACFormField.prototype.component6 = function () {
    return this.className;
  };
  CryptoACFormField.prototype.copy_wko658$ = function (name, label, type, radioOptions, defaultValue, className) {
    return new CryptoACFormField(name === void 0 ? this.name : name, label === void 0 ? this.label : label, type === void 0 ? this.type : type, radioOptions === void 0 ? this.radioOptions : radioOptions, defaultValue === void 0 ? this.defaultValue : defaultValue, className === void 0 ? this.className : className);
  };
  CryptoACFormField.prototype.toString = function () {
    return 'CryptoACFormField(name=' + Kotlin.toString(this.name) + (', label=' + Kotlin.toString(this.label)) + (', type=' + Kotlin.toString(this.type)) + (', radioOptions=' + Kotlin.toString(this.radioOptions)) + (', defaultValue=' + Kotlin.toString(this.defaultValue)) + (', className=' + Kotlin.toString(this.className)) + ')';
  };
  CryptoACFormField.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.radioOptions) | 0;
    result = result * 31 + Kotlin.hashCode(this.defaultValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.className) | 0;
    return result;
  };
  CryptoACFormField.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.label, other.label) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.radioOptions, other.radioOptions) && Kotlin.equals(this.defaultValue, other.defaultValue) && Kotlin.equals(this.className, other.className)))));
  };
  function styledDiv$lambda_2(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function CryptoACRadioGroup() {
    RComponent_init(this);
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda(closure$event) {
    return function ($receiver) {
      var tmp$;
      $receiver.hasToSetValue = true;
      $receiver.value = (Kotlin.isType(tmp$ = closure$event.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda(this$CryptoACRadioGroup) {
    return function (event) {
      setState(this$CryptoACRadioGroup, CryptoACRadioGroup$render$lambda$lambda$lambda$lambda(event));
      if (!equals(this$CryptoACRadioGroup.props.onChange, undefined)) {
        this$CryptoACRadioGroup.props.onChange(event);
      }return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda(this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.value = this$CryptoACRadioGroup.state.value;
      $receiver.name = this$CryptoACRadioGroup.props.name;
      $receiver.row = this$CryptoACRadioGroup.props.row;
      $receiver.onChange = CryptoACRadioGroup$render$lambda$lambda$lambda(this$CryptoACRadioGroup);
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda(closure$it, this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.color = closure$it.color;
      $receiver.checked = equals(this$CryptoACRadioGroup.state.value, closure$it.name);
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda_0(closure$it, this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda(closure$it, this$CryptoACRadioGroup));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda_1(closure$it, closure$radioElement) {
    return function ($receiver) {
      $receiver.label = closure$it.label;
      $receiver.value = closure$it.name;
      $receiver.control = ensureNotNull(closure$radioElement.v);
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda_0(closure$it, closure$radioElement) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACRadioGroup$render$lambda$lambda$lambda$lambda_1(closure$it, closure$radioElement));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda(this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACRadioGroup$render$lambda$lambda(this$CryptoACRadioGroup));
      var $receiver_0 = this$CryptoACRadioGroup.props.options;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$CryptoACRadioGroup_0 = this$CryptoACRadioGroup;
        var radioElement = {v: null};
        var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_2);
        set_display($receiver_0_0.css, Display.none);
        radioElement.v = $receiver_0_0.invoke_eb8iu4$($module$_material_ui_core.Radio, CryptoACRadioGroup$render$lambda$lambda$lambda$lambda_0(element, this$CryptoACRadioGroup_0));
        $receiver.child_52psg1$($receiver_0_0.create());
        $receiver.invoke_eb8iu4$($module$_material_ui_core.FormControlLabel, CryptoACRadioGroup$render$lambda$lambda$lambda_0(element, radioElement));
      }
      return Unit;
    };
  }
  CryptoACRadioGroup.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_eb8iu4$($module$_material_ui_core.RadioGroup, CryptoACRadioGroup$render$lambda(this));
  };
  function CryptoACRadioGroup$init$lambda(props, state) {
    if (!state.hasToSetValue) {
      state.value = equals(props.defaultValue, undefined) ? '' : props.defaultValue;
    }state.hasToSetValue = false;
    return Unit;
  }
  CryptoACRadioGroup.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.hasToSetValue = false;
    get_js(getKClass(CryptoACRadioGroup)).getDerivedStateFromProps = CryptoACRadioGroup$init$lambda;
  };
  CryptoACRadioGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACRadioGroup',
    interfaces: [RComponent]
  };
  function cryptoACRadioGroup$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cryptoACRadioGroup($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(CryptoACRadioGroup), cryptoACRadioGroup$lambda(handler));
  }
  function CryptoACRadioOption(label, name, color) {
    this.label = label;
    this.name = name;
    this.color = color;
  }
  CryptoACRadioOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACRadioOption',
    interfaces: []
  };
  CryptoACRadioOption.prototype.component1 = function () {
    return this.label;
  };
  CryptoACRadioOption.prototype.component2 = function () {
    return this.name;
  };
  CryptoACRadioOption.prototype.component3 = function () {
    return this.color;
  };
  CryptoACRadioOption.prototype.copy_6hosri$ = function (label, name, color) {
    return new CryptoACRadioOption(label === void 0 ? this.label : label, name === void 0 ? this.name : name, color === void 0 ? this.color : color);
  };
  CryptoACRadioOption.prototype.toString = function () {
    return 'CryptoACRadioOption(label=' + Kotlin.toString(this.label) + (', name=' + Kotlin.toString(this.name)) + (', color=' + Kotlin.toString(this.color)) + ')';
  };
  CryptoACRadioOption.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  CryptoACRadioOption.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.label, other.label) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.color, other.color)))));
  };
  function CryptoACTextField() {
    RComponent_init(this);
  }
  function CryptoACTextField$render$lambda$lambda$lambda$lambda(closure$event) {
    return function ($receiver) {
      var tmp$;
      $receiver.hasToSetValue = true;
      $receiver.value = (Kotlin.isType(tmp$ = closure$event.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function CryptoACTextField$render$lambda$lambda$lambda(this$CryptoACTextField) {
    return function (event) {
      setState(this$CryptoACTextField, CryptoACTextField$render$lambda$lambda$lambda$lambda(event));
      return Unit;
    };
  }
  function CryptoACTextField$render$lambda$lambda(this$CryptoACTextField) {
    return function ($receiver) {
      $receiver.className = this$CryptoACTextField.props.className;
      $receiver.value = this$CryptoACTextField.state.value;
      $receiver.name = this$CryptoACTextField.props.name;
      $receiver.label = this$CryptoACTextField.props.label;
      $receiver.type = this$CryptoACTextField.props.type;
      $receiver.variant = this$CryptoACTextField.props.variant;
      $receiver.color = this$CryptoACTextField.props.color;
      $receiver.autoComplete = 'off';
      $receiver.required = true;
      $receiver.onChange = CryptoACTextField$render$lambda$lambda$lambda(this$CryptoACTextField);
      return Unit;
    };
  }
  function CryptoACTextField$render$lambda(this$CryptoACTextField) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACTextField$render$lambda$lambda(this$CryptoACTextField));
      return Unit;
    };
  }
  CryptoACTextField.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_eb8iu4$($module$_material_ui_core.TextField, CryptoACTextField$render$lambda(this));
  };
  function CryptoACTextField$init$lambda(props, state) {
    if (!state.hasToSetValue) {
      state.value = equals(props.defaultValue, undefined) ? '' : props.defaultValue;
    }state.hasToSetValue = false;
    return Unit;
  }
  CryptoACTextField.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.hasToSetValue = false;
    get_js(getKClass(CryptoACTextField)).getDerivedStateFromProps = CryptoACTextField$init$lambda;
  };
  CryptoACTextField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACTextField',
    interfaces: [RComponent]
  };
  function cryptoACTextField$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cryptoACTextField($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(CryptoACTextField), cryptoACTextField$lambda(handler));
  }
  function styledDiv$lambda_3(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function CryptoACTable() {
    RComponent_init(this);
  }
  function CryptoACTable$render$lambda$lambda($receiver) {
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda_0($receiver) {
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda_1($receiver) {
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.variant = 'h6';
    $receiver.id = 'tableTitle';
    $receiver.component = 'div';
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACTable$render$lambda$lambda$lambda$lambda);
      $receiver.unaryPlus_pdl1vz$(this$CryptoACTable.props.title);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable) {
    return function (event) {
      this$CryptoACTable.props.onClose(event);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$faTimesIcon, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'close';
      $receiver.children = ensureNotNull(closure$faTimesIcon.v);
      $receiver.onClick = CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$faTimesIcon, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$faTimesIcon, this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda(closure$faTimesIcon, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs.title = 'Close';
      $receiver.invoke_eb8iu4$($module$_material_ui_core.IconButton, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$faTimesIcon, this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACTable) {
    return function (it) {
      var csv = StringBuilder_init();
      var prefix = {v: ''};
      var $receiver = this$CryptoACTable.props.columns;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        csv.append_pdl1vj$(prefix.v);
        prefix.v = ',';
        csv.append_pdl1vj$(element.field);
      }
      csv.append_pdl1vj$('%0A');
      var tmp$_0;
      tmp$_0 = this$CryptoACTable.props.elements.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        prefix.v = '';
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== element_0.length; ++tmp$_1) {
          var element_1 = element_0[tmp$_1];
          csv.append_pdl1vj$(prefix.v);
          prefix.v = ',';
          csv.append_pdl1vj$(element_1);
        }
        csv.append_pdl1vj$('%0A');
      }
      var element_2 = document.createElement('a');
      element_2.setAttribute('href', 'data:text/csv;charset=utf-8,' + csv);
      element_2.setAttribute('download', this$CryptoACTable.props.title + '.csv');
      element_2.setAttribute('display', 'none');
      ensureNotNull(document.body).appendChild(element_2);
      element_2.click();
      ensureNotNull(document.body).removeChild(element_2);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$faDownloadIcon, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'download data';
      $receiver.children = ensureNotNull(closure$faDownloadIcon.v);
      $receiver.onClick = CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACTable);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$faDownloadIcon, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$faDownloadIcon, this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_0(closure$faDownloadIcon, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs.title = 'Download as CSV';
      $receiver.invoke_eb8iu4$($module$_material_ui_core.IconButton, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$faDownloadIcon, this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable) {
    return function (event) {
      this$CryptoACTable.props.onRefresh(event);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$faUndoAltIcon, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'refresh';
      $receiver.children = ensureNotNull(closure$faUndoAltIcon.v);
      $receiver.onClick = CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$faUndoAltIcon, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$faUndoAltIcon, this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_1(closure$faUndoAltIcon, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs.title = 'Refresh';
      $receiver.invoke_eb8iu4$($module$_material_ui_core.IconButton, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$faUndoAltIcon, this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda_2(this$CryptoACTable, closure$faTimesIcon, closure$faDownloadIcon, closure$faUndoAltIcon) {
    return function ($receiver) {
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Typography, CryptoACTable$render$lambda$lambda$lambda(this$CryptoACTable));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_3);
      var this$CryptoACTable_0 = this$CryptoACTable;
      var closure$faTimesIcon_0 = closure$faTimesIcon;
      var closure$faDownloadIcon_0 = closure$faDownloadIcon;
      var closure$faUndoAltIcon_0 = closure$faUndoAltIcon;
      var $receiver_1 = $receiver_0.css;
      set_marginLeft($receiver_1, LinearDimension.Companion.auto);
      set_marginRight($receiver_1, get_px(0));
      if (!equals(this$CryptoACTable_0.props.onClose, undefined)) {
        var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_3);
        var $receiver_2 = $receiver_0_0.css;
        set_marginLeft($receiver_2, get_px(5));
        set_float($receiver_2, Float.left);
        $receiver_0_0.invoke_eb8iu4$($module$_material_ui_core.Tooltip, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda(closure$faTimesIcon_0, this$CryptoACTable_0));
        $receiver_0.child_52psg1$($receiver_0_0.create());
      }var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_3);
      var $receiver_3 = $receiver_0_1.css;
      set_marginLeft($receiver_3, get_px(5));
      set_float($receiver_3, Float.left);
      $receiver_0_1.invoke_eb8iu4$($module$_material_ui_core.Tooltip, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_0(closure$faDownloadIcon_0, this$CryptoACTable_0));
      $receiver_0.child_52psg1$($receiver_0_1.create());
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_3);
      var $receiver_4 = $receiver_0_2.css;
      set_marginLeft($receiver_4, get_px(5));
      set_float($receiver_4, Float.left);
      $receiver_0_2.invoke_eb8iu4$($module$_material_ui_core.Tooltip, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_1(closure$faUndoAltIcon_0, this$CryptoACTable_0));
      $receiver_0.child_52psg1$($receiver_0_2.create());
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.align = 'center';
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it) {
    return function ($receiver) {
      $receiver.key = closure$it.field;
      $receiver.attrs_slhiwc$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      $receiver.unaryPlus_pdl1vz$(closure$it.headerName);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable) {
    return function ($receiver) {
      var $receiver_0 = this$CryptoACTable.props.columns;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        $receiver.invoke_eb8iu4$($module$_material_ui_core.TableCell, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(element));
      }
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.invoke_eb8iu4$($module$_material_ui_core.TableRow, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACTable, closure$it) {
    return function (f) {
      this$CryptoACTable.props.onElementClick(closure$it);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CryptoACTable, closure$it) {
    return function ($receiver) {
      $receiver.hover = true;
      $receiver.selected = false;
      $receiver.onClick = CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACTable, closure$it);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      $receiver.attrs.align = 'center';
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.key = joinToString_0(closure$it, '');
      $receiver.attrs_slhiwc$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CryptoACTable, closure$it));
      var $receiver_0 = closure$it;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        $receiver.invoke_eb8iu4$($module$_material_ui_core.TableCell, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(element));
      }
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_3(this$CryptoACTable) {
    return function ($receiver) {
      var $receiver_0 = this$CryptoACTable.props.elements.subList_vux9f0$(this$CryptoACTable.fromIndex_0(), this$CryptoACTable.toIndex_0());
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$CryptoACTable_0 = this$CryptoACTable;
        $receiver.invoke_eb8iu4$($module$_material_ui_core.TableRow, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(element, this$CryptoACTable_0));
      }
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda_0(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.invoke_eb8iu4$($module$_material_ui_core.TableHead, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable));
      $receiver.invoke_eb8iu4$($module$_material_ui_core.TableBody, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_3(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda_0(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Table, CryptoACTable$render$lambda$lambda$lambda$lambda_0(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_4(closure$newPage) {
    return function ($receiver) {
      $receiver.page = closure$newPage;
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda_1(this$CryptoACTable) {
    return function (f, newPage) {
      setState(this$CryptoACTable, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_4(newPage));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_5(closure$event) {
    return function ($receiver) {
      var tmp$;
      $receiver.rowsPerPage = typeof (tmp$ = closure$event.target.value) === 'number' ? tmp$ : throwCCE();
      $receiver.page = 0;
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda_2(this$CryptoACTable) {
    return function (event) {
      setState(this$CryptoACTable, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_5(event));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda_1(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.rowsPerPageOptions = [5, 10, 25, 50];
      $receiver.component = 'div';
      $receiver.count = this$CryptoACTable.props.elements.size;
      $receiver.rowsPerPage = this$CryptoACTable.state.rowsPerPage;
      $receiver.page = this$CryptoACTable.state.page;
      $receiver.labelRowsPerPage = 'Rows:';
      $receiver.onChangePage = CryptoACTable$render$lambda$lambda$lambda$lambda_1(this$CryptoACTable);
      $receiver.onChangeRowsPerPage = CryptoACTable$render$lambda$lambda$lambda$lambda_2(this$CryptoACTable);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda_3(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CryptoACTable$render$lambda$lambda$lambda_1(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda(this$CryptoACTable, closure$faTimesIcon, closure$faDownloadIcon, closure$faUndoAltIcon) {
    return function ($receiver) {
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Toolbar, CryptoACTable$render$lambda$lambda_2(this$CryptoACTable, closure$faTimesIcon, closure$faDownloadIcon, closure$faUndoAltIcon));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_3);
      var this$CryptoACTable_0 = this$CryptoACTable;
      var $receiver_1 = $receiver_0.css;
      set_paddingLeft($receiver_1, get_px(5));
      set_paddingRight($receiver_1, get_px(5));
      $receiver_0.invoke_eb8iu4$($module$_material_ui_core.TableContainer, CryptoACTable$render$lambda$lambda$lambda_0(this$CryptoACTable_0));
      $receiver.child_52psg1$($receiver_0.create());
      $receiver.invoke_eb8iu4$($module$_material_ui_core.TablePagination, CryptoACTable$render$lambda$lambda_3(this$CryptoACTable));
      return Unit;
    };
  }
  CryptoACTable.prototype.render_ss14n$ = function ($receiver) {
    var faUndoAltIcon = {v: null};
    var faTimesIcon = {v: null};
    var faDownloadIcon = {v: null};
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_3);
    set_display($receiver_0.css, Display.none);
    faUndoAltIcon.v = $receiver_0.invoke_eb8iu4$($module$react_icons_fa.FaUndoAlt, CryptoACTable$render$lambda$lambda);
    faTimesIcon.v = $receiver_0.invoke_eb8iu4$($module$react_icons_fa.FaTimes, CryptoACTable$render$lambda$lambda_0);
    faDownloadIcon.v = $receiver_0.invoke_eb8iu4$($module$react_icons_fa.FaDownload, CryptoACTable$render$lambda$lambda_1);
    $receiver.child_52psg1$($receiver_0.create());
    $receiver.invoke_eb8iu4$($module$_material_ui_core.Paper, CryptoACTable$render$lambda(this, faTimesIcon, faDownloadIcon, faUndoAltIcon));
  };
  CryptoACTable.prototype.toIndex_0 = function () {
    var tmp$;
    var toIndex = this.fromIndex_0() + this.state.rowsPerPage | 0;
    var maxIndex = this.props.elements.size;
    if (toIndex >= maxIndex) {
      tmp$ = maxIndex;
    } else {
      tmp$ = toIndex;
    }
    return tmp$;
  };
  CryptoACTable.prototype.fromIndex_0 = function () {
    var tmp$;
    var fromIndex = Kotlin.imul(this.state.rowsPerPage, this.state.page);
    var maxIndex = this.props.elements.size;
    if (fromIndex >= maxIndex) {
      tmp$ = maxIndex;
    } else {
      if (fromIndex < 0) {
        tmp$ = 0;
      } else {
        tmp$ = fromIndex;
      }
    }
    return tmp$;
  };
  CryptoACTable.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.page = 0;
    $receiver.rowsPerPage = 10;
  };
  CryptoACTable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACTable',
    interfaces: [RComponent]
  };
  function cryptoACTable$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cryptoACTable($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(CryptoACTable), cryptoACTable$lambda(handler));
  }
  function CryptoACTableColumn(field, headerName, description, type, flex, resizable) {
    if (type === void 0)
      type = 'string';
    if (flex === void 0)
      flex = 1;
    if (resizable === void 0)
      resizable = false;
    this.field = field;
    this.headerName = headerName;
    this.description = description;
    this.type = type;
    this.flex = flex;
    this.resizable = resizable;
  }
  CryptoACTableColumn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACTableColumn',
    interfaces: []
  };
  CryptoACTableColumn.prototype.component1 = function () {
    return this.field;
  };
  CryptoACTableColumn.prototype.component2 = function () {
    return this.headerName;
  };
  CryptoACTableColumn.prototype.component3 = function () {
    return this.description;
  };
  CryptoACTableColumn.prototype.component4 = function () {
    return this.type;
  };
  CryptoACTableColumn.prototype.component5 = function () {
    return this.flex;
  };
  CryptoACTableColumn.prototype.component6 = function () {
    return this.resizable;
  };
  CryptoACTableColumn.prototype.copy_3eh8fh$ = function (field, headerName, description, type, flex, resizable) {
    return new CryptoACTableColumn(field === void 0 ? this.field : field, headerName === void 0 ? this.headerName : headerName, description === void 0 ? this.description : description, type === void 0 ? this.type : type, flex === void 0 ? this.flex : flex, resizable === void 0 ? this.resizable : resizable);
  };
  CryptoACTableColumn.prototype.toString = function () {
    return 'CryptoACTableColumn(field=' + Kotlin.toString(this.field) + (', headerName=' + Kotlin.toString(this.headerName)) + (', description=' + Kotlin.toString(this.description)) + (', type=' + Kotlin.toString(this.type)) + (', flex=' + Kotlin.toString(this.flex)) + (', resizable=' + Kotlin.toString(this.resizable)) + ')';
  };
  CryptoACTableColumn.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    result = result * 31 + Kotlin.hashCode(this.headerName) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.flex) | 0;
    result = result * 31 + Kotlin.hashCode(this.resizable) | 0;
    return result;
  };
  CryptoACTableColumn.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.field, other.field) && Kotlin.equals(this.headerName, other.headerName) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.flex, other.flex) && Kotlin.equals(this.resizable, other.resizable)))));
  };
  var userColumns;
  var roleColumns;
  var fileColumns;
  var assignmentColumns;
  var permissionColumns;
  var mqttMessagesColumns;
  function CryptoACTableData(elements, columns, title) {
    this.elements = elements;
    this.columns = columns;
    this.title = title;
  }
  CryptoACTableData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACTableData',
    interfaces: []
  };
  CryptoACTableData.prototype.component1 = function () {
    return this.elements;
  };
  CryptoACTableData.prototype.component2 = function () {
    return this.columns;
  };
  CryptoACTableData.prototype.component3 = function () {
    return this.title;
  };
  CryptoACTableData.prototype.copy_if0emw$ = function (elements, columns, title) {
    return new CryptoACTableData(elements === void 0 ? this.elements : elements, columns === void 0 ? this.columns : columns, title === void 0 ? this.title : title);
  };
  CryptoACTableData.prototype.toString = function () {
    return 'CryptoACTableData(elements=' + Kotlin.toString(this.elements) + (', columns=' + Kotlin.toString(this.columns)) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  CryptoACTableData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.elements) | 0;
    result = result * 31 + Kotlin.hashCode(this.columns) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  CryptoACTableData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.elements, other.elements) && Kotlin.equals(this.columns, other.columns) && Kotlin.equals(this.title, other.title)))));
  };
  function CryptoACTableRow(field, headerName, description, type, flex, resizable) {
    if (type === void 0)
      type = 'string';
    if (flex === void 0)
      flex = 1;
    if (resizable === void 0)
      resizable = false;
    this.field = field;
    this.headerName = headerName;
    this.description = description;
    this.type = type;
    this.flex = flex;
    this.resizable = resizable;
  }
  CryptoACTableRow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACTableRow',
    interfaces: []
  };
  CryptoACTableRow.prototype.component1 = function () {
    return this.field;
  };
  CryptoACTableRow.prototype.component2 = function () {
    return this.headerName;
  };
  CryptoACTableRow.prototype.component3 = function () {
    return this.description;
  };
  CryptoACTableRow.prototype.component4 = function () {
    return this.type;
  };
  CryptoACTableRow.prototype.component5 = function () {
    return this.flex;
  };
  CryptoACTableRow.prototype.component6 = function () {
    return this.resizable;
  };
  CryptoACTableRow.prototype.copy_3eh8fh$ = function (field, headerName, description, type, flex, resizable) {
    return new CryptoACTableRow(field === void 0 ? this.field : field, headerName === void 0 ? this.headerName : headerName, description === void 0 ? this.description : description, type === void 0 ? this.type : type, flex === void 0 ? this.flex : flex, resizable === void 0 ? this.resizable : resizable);
  };
  CryptoACTableRow.prototype.toString = function () {
    return 'CryptoACTableRow(field=' + Kotlin.toString(this.field) + (', headerName=' + Kotlin.toString(this.headerName)) + (', description=' + Kotlin.toString(this.description)) + (', type=' + Kotlin.toString(this.type)) + (', flex=' + Kotlin.toString(this.flex)) + (', resizable=' + Kotlin.toString(this.resizable)) + ')';
  };
  CryptoACTableRow.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    result = result * 31 + Kotlin.hashCode(this.headerName) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.flex) | 0;
    result = result * 31 + Kotlin.hashCode(this.resizable) | 0;
    return result;
  };
  CryptoACTableRow.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.field, other.field) && Kotlin.equals(this.headerName, other.headerName) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.flex, other.flex) && Kotlin.equals(this.resizable, other.resizable)))));
  };
  function input$lambda_0(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function styledDiv$lambda_4(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function post$lambda($receiver) {
    return Unit;
  }
  function get$lambda($receiver) {
    return Unit;
  }
  function logger$lambda_9() {
    return Unit;
  }
  var logger_9;
  function Content() {
    RComponent_init(this);
    this.coreParametersCloudFormFields_0 = listOf([listOf([new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().IS_ADMIN, replace(SERVER_getInstance().IS_ADMIN, '_', ' '), InputType.checkBox, void 0, void 0, 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().RM_URL, replace(SERVER_getInstance().RM_URL, '_', ' '), InputType.text, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().RM_PORT, replace(SERVER_getInstance().RM_PORT, '_', ' '), InputType.number, void 0, void 0, 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().MS_URL, replace(SERVER_getInstance().MS_URL, '_', ' '), InputType.text, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PASSWORD, replace(SERVER_getInstance().MS_PASSWORD, '_', ' '), InputType.password, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PORT, replace(SERVER_getInstance().MS_PORT, '_', ' '), InputType.number, void 0, void 0, 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().DS_URL, replace(SERVER_getInstance().DS_URL, '_', ' '), InputType.text, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DS_PORT, replace(SERVER_getInstance().DS_PORT, '_', ' '), InputType.number, void 0, void 0, 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().OPA_URL, replace(SERVER_getInstance().OPA_URL, '_', ' '), InputType.text, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().OPA_PORT, replace(SERVER_getInstance().OPA_PORT, '_', ' '), InputType.number, void 0, void 0, 'darkTextField')])]);
    this.coreParametersMQTTCryptoACFormFields_0 = listOf([listOf([new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().IS_ADMIN, replace(SERVER_getInstance().IS_ADMIN, '_', ' '), InputType.checkBox, void 0, void 0, 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().DS_URL, 'Broker URL', InputType.text, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DS_PASSWORD, 'Broker Password', InputType.password, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DS_PORT, 'Broker Port', InputType.number, void 0, void 0, 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().MS_URL, replace(SERVER_getInstance().MS_URL, '_', ' '), InputType.text, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PASSWORD, replace(SERVER_getInstance().MS_PASSWORD, '_', ' '), InputType.password, void 0, void 0, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PORT, replace(SERVER_getInstance().MS_PORT, '_', ' '), InputType.number, void 0, void 0, 'darkTextField')])]);
  }
  function Content$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.variant = 'h6';
    $receiver.id = 'editProfile';
    $receiver.component = 'div';
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.color = 'primary';
      $receiver.component = 'label';
      $receiver.children = this$.invoke_eb8iu4$($module$react_icons_fa.FaCloudUploadAlt, Content$render$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda() {
    return 'Received upload configuration file event';
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Content) {
    return function (event) {
      var tmp$;
      logger_9.info_nq59yw$(Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      var fileInput = Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE();
      var file = ensureNotNull(fileInput.files)[0];
      this$Content.parseProfileFile_0(ensureNotNull(file));
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda_0(this$Content) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(Content$render$lambda$lambda$lambda$lambda$lambda($receiver));
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda_0(null, null, null, null, null));
      var this$Content_0 = this$Content;
      var $receiver_1 = $receiver_0.attrs;
      $receiver_1.type = InputType.file;
      $receiver_1.accept = '.json';
      set_hidden($receiver_1, true);
      set_onChangeFunction($receiver_1, Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Content_0));
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.editProfileFormOpen = !$receiver.editProfileFormOpen;
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Content) {
    return function (it) {
      setState(this$Content, Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Content, this$) {
    return function ($receiver) {
      var tmp$;
      $receiver.color = 'primary';
      $receiver.component = 'label';
      $receiver.size = 'small';
      if (!this$Content.state.editProfileFormOpen) {
        tmp$ = this$.invoke_eb8iu4$($module$react_icons_fa.FaChevronDown, Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      } else {
        tmp$ = this$.invoke_eb8iu4$($module$react_icons_fa.FaChevronUp, Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      }
      $receiver.children = tmp$;
      $receiver.onClick = Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Content);
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda_0(this$Content) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(Content$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Content, $receiver));
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda(this$Content) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(Content$render$lambda$lambda$lambda$lambda);
      $receiver.unaryPlus_pdl1vz$('Edit or Upload Profile');
      $receiver.invoke_eb8iu4$($module$_material_ui_core.IconButton, Content$render$lambda$lambda$lambda$lambda_0(this$Content));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_4);
      var this$Content_0 = this$Content;
      var $receiver_1 = $receiver_0.css;
      set_display($receiver_1, Display.inline);
      set_float($receiver_1, Float.right);
      set_marginTop($receiver_1, get_px(7));
      set_marginRight($receiver_1, get_px(10));
      $receiver_0.invoke_eb8iu4$($module$_material_ui_core.IconButton, Content$render$lambda$lambda$lambda$lambda$lambda_0(this$Content_0));
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Content) {
    return function (method, endpoint, values, f) {
      this$Content.submitEditProfile_0(method, endpoint, values);
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda_1(this$Content, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var this$Content_0 = this$Content;
      $receiver_0.attrs;
      var tmp$;
      $receiver.handleChangeBackdropOpen = this$Content_0.props.handleChangeBackdropOpen;
      $receiver.handleDisplayCryptoACAlert = this$Content_0.props.handleDisplayAlert;
      $receiver.submitButtonText = 'Edit Profile';
      $receiver.method = this$Content_0.props.userHasProfile ? HttpMethod.Companion.Patch : HttpMethod.Companion.Post;
      $receiver.coreType = this$Content_0.props.coreType;
      $receiver.endpoint = API_getInstance().PROFILES;
      $receiver.submit = Content$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Content_0);
      switch (this$Content_0.props.coreType.name) {
        case 'RBAC_CLOUD':
          tmp$ = this$Content_0.coreParametersCloudFormFields_0;
          break;
        case 'RBAC_MQTT':
          tmp$ = this$Content_0.coreParametersMQTTCryptoACFormFields_0;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.cryptoACFormFields = tmp$;
      return Unit;
    };
  }
  function Content$render$lambda$lambda(this$Content) {
    return function ($receiver) {
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Typography, Content$render$lambda$lambda$lambda(this$Content));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_4);
      var this$Content_0 = this$Content;
      var $receiver_1 = $receiver_0.css;
      set_marginTop($receiver_1, get_px(10));
      set_marginBottom($receiver_1, get_px(10));
      set_marginRight($receiver_1, get_px(10));
      set_marginLeft($receiver_1, get_px(30));
      if (!this$Content_0.state.editProfileFormOpen) {
        set_display($receiver_1, Display.none);
      }cryptoACForm($receiver_0, Content$render$lambda$lambda$lambda$lambda_1(this$Content_0, $receiver_0));
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function Content$render$lambda(this$Content) {
    return function ($receiver) {
      $receiver.httpClient = this$Content.props.httpClient;
      $receiver.userIsAdmin = this$Content.props.userIsAdmin;
      $receiver.coreType = this$Content.props.coreType;
      $receiver.handleChangeBackdropOpen = this$Content.props.handleChangeBackdropOpen;
      $receiver.handleDisplayAlert = this$Content.props.handleDisplayAlert;
      return Unit;
    };
  }
  function Content$render$lambda_0(this$Content) {
    return function ($receiver) {
      $receiver.httpClient = this$Content.props.httpClient;
      $receiver.userIsAdmin = this$Content.props.userIsAdmin;
      $receiver.coreType = this$Content.props.coreType;
      $receiver.handleChangeBackdropOpen = this$Content.props.handleChangeBackdropOpen;
      $receiver.handleDisplayAlert = this$Content.props.handleDisplayAlert;
      $receiver.contentMessages = this$Content.props.contentMessages;
      return Unit;
    };
  }
  Content.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_4);
    var $receiver_1 = $receiver_0.css;
    set_textAlign($receiver_1, TextAlign.center);
    set_marginTop($receiver_1, get_px(10));
    set_paddingBottom($receiver_1, get_px(10));
    $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Paper, Content$render$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0.create());
    if (this.props.userHasProfile) {
      switch (this.props.coreType.name) {
        case 'RBAC_CLOUD':
          cloudContent($receiver, Content$render$lambda(this));
          break;
        case 'RBAC_MQTT':
          mqttContent($receiver, Content$render$lambda_0(this));
          break;
        default:Kotlin.noWhenBranchMatched();
          break;
      }
    }};
  function Content$init$lambda() {
    return 'Initializing the state of the Content component';
  }
  function Coroutine$Content$init$lambda(this$Content_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Content = this$Content_0;
  }
  Coroutine$Content$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Content$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Content$init$lambda.prototype.constructor = Coroutine$Content$init$lambda;
  Coroutine$Content$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Content.getProfileFromProxy_0(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
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
  function Content$init$lambda_0(this$Content_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Content$init$lambda(this$Content_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Content.prototype.init_bc6fkx$ = function ($receiver) {
    logger_9.info_nq59yw$(Content$init$lambda);
    $receiver.editProfileFormOpen = true;
    launch(MainScope(), void 0, void 0, Content$init$lambda_0(this));
  };
  function Content$submitEditProfile$lambda(closure$method, closure$endpoint) {
    return function () {
      return 'Submitting CryptoAC edit profile form, method ' + closure$method + ', endpoint ' + closure$endpoint;
    };
  }
  function Content$submitEditProfile$lambda_0() {
    return 'Not all fields of the edit profile form were filled';
  }
  function Content$submitEditProfile$lambda$lambda(closure$parameters) {
    return function ($receiver) {
      contentType($receiver, ContentType.Application.Json);
      $receiver.body = closure$parameters;
      return Unit;
    };
  }
  function Content$submitEditProfile$lambda$lambda_0(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Content$submitEditProfile$lambda$lambda_1($receiver) {
    $receiver.editProfileFormOpen = false;
    return Unit;
  }
  function Content$submitEditProfile$lambda$lambda_2(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Content$submitEditProfile$lambda$lambda_3($receiver) {
    $receiver.editProfileFormOpen = true;
    return Unit;
  }
  function Content$submitEditProfile$lambda$lambda_4(closure$e) {
    return function () {
      return 'Error during edit profile (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Content$submitEditProfile$lambda(this$Content_0, closure$endpoint_0, closure$parameters_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 14;
    this.local$this$Content = this$Content_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$parameters = closure$parameters_0;
    this.local$response = void 0;
    this.local$response_0 = void 0;
  }
  Coroutine$Content$submitEditProfile$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Content$submitEditProfile$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Content$submitEditProfile$lambda.prototype.constructor = Coroutine$Content$submitEditProfile$lambda;
  Coroutine$Content$submitEditProfile$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 11;
            var $receiver_0 = this.local$this$Content.props.httpClient;
            var urlString = this.local$closure$endpoint;
            var block = Content$submitEditProfile$lambda$lambda(this.local$closure$parameters);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, urlString);
            block($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(HttpResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, HttpResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 8;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 6;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, HttpResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 11;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 7;
            continue;
          case 4:
            this.finallyPath_0 = [11];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 11;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, HttpResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.result_0;
            this.local$response_0 = this.result_0;
            var tmp$_1;
            var tmp$_2 = this.local$response_0.call;
            var typeInfo$result_0_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, getKClass(OutcomeCode), createKType(getKClass(OutcomeCode), [], false));
              } catch (__0) {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, getKClass(OutcomeCode), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 9;
            this.result_0 = tmp$_2.receive_qi9ur9$(typeInfo$result_0_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.result_0 = Kotlin.isType(tmp$_1 = this.result_0, OutcomeCode) ? tmp$_1 : throwCCE();
            var code = this.result_0;
            var status = this.local$response_0.status;
            this.local$this$Content.props.handleChangeBackdropOpen(false);
            if (status != null ? status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_9.info_nq59yw$(Content$submitEditProfile$lambda$lambda_0(status, code));
              this.local$this$Content.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance());
              this.local$this$Content.props.handleChangeUserHasProfile(true);
              this.local$this$Content.props.handleChangeUserIsAdmin(this.local$closure$parameters.isAdmin);
              this.local$this$Content.props.handleChangeUsername(this.local$closure$parameters.username);
              return setState(this.local$this$Content, Content$submitEditProfile$lambda$lambda_1), Unit;
            } else {
              logger_9.warn_nq59yw$(Content$submitEditProfile$lambda$lambda_2(status, code));
              this.local$this$Content.props.handleDisplayAlert(code, CryptoACAlertSeverity$ERROR_getInstance());
              this.local$this$Content.props.handleChangeUserHasProfile(false);
              this.local$this$Content.props.handleChangeUserIsAdmin(false);
              this.local$this$Content.props.handleChangeUsername(null);
              return setState(this.local$this$Content, Content$submitEditProfile$lambda$lambda_3), Unit;
            }

          case 10:
            this.exceptionState_0 = 14;
            this.state_0 = 13;
            continue;
          case 11:
            this.exceptionState_0 = 14;
            var e = this.exception_0;
            if (Kotlin.isType(e, Error_0)) {
              logger_9.error_nq59yw$(Content$submitEditProfile$lambda$lambda_4(e));
              console.log(e);
              return this.local$this$Content.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
            } else {
              throw e;
            }

          case 12:
            this.state_0 = 13;
            continue;
          case 13:
            return;
          case 14:
            throw this.exception_0;
          default:this.state_0 = 14;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 14) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Content$submitEditProfile$lambda_1(this$Content_0, closure$endpoint_0, closure$parameters_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Content$submitEditProfile$lambda(this$Content_0, closure$endpoint_0, closure$parameters_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Content.prototype.submitEditProfile_0 = function (method, endpoint, values) {
    var tmp$;
    logger_9.info_nq59yw$(Content$submitEditProfile$lambda(method, endpoint));
    this.props.handleChangeBackdropOpen(true);
    switch (this.props.coreType.name) {
      case 'RBAC_CLOUD':
        tmp$ = CoreParametersCloud$Companion_getInstance().fromMap_xlh5cu$(values);
        break;
      case 'RBAC_MQTT':
        tmp$ = CoreParametersMQTT$Companion_getInstance().fromMap_xlh5cu$(values);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var parameters = tmp$;
    if (parameters == null) {
      logger_9.warn_nq59yw$(Content$submitEditProfile$lambda_0);
      this.props.handleDisplayAlert(OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance(), CryptoACAlertSeverity$WARNING_getInstance());
    } else {
      launch(MainScope(), void 0, void 0, Content$submitEditProfile$lambda_1(this, endpoint, parameters));
    }
  };
  function Content$parseProfileFile$lambda$lambda(closure$parameters, this$Content) {
    return function ($receiver) {
      $receiver.editProfileFormOpen = true;
      this$Content.getFieldsFromParameters_0(closure$parameters);
      return Unit;
    };
  }
  function Content$parseProfileFile$lambda$lambda_0() {
    return 'Malformed .json profile file';
  }
  function Content$parseProfileFile$lambda$lambda_1(closure$e) {
    return function () {
      return 'Error during upload file (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Content$parseProfileFile$lambda(closure$reader, this$Content) {
    return function (f) {
      var tmp$;
      var fileContent = closure$reader.result.toString();
      try {
        switch (this$Content.props.coreType.name) {
          case 'RBAC_CLOUD':
            var $receiver = Json.Default;
            var tmp$_0;
            tmp$ = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(CoreParametersCloud), [], false)), KSerializer) ? tmp$_0 : throwCCE(), fileContent);
            break;
          case 'RBAC_MQTT':
            var $receiver_0 = Json.Default;
            var tmp$_1;
            tmp$ = $receiver_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer($receiver_0.serializersModule, createKType(getKClass(CoreParametersMQTT), [], false)), KSerializer) ? tmp$_1 : throwCCE(), fileContent);
            break;
          default:tmp$ = Kotlin.noWhenBranchMatched();
            break;
        }
        var parameters = tmp$;
        setState(this$Content, Content$parseProfileFile$lambda$lambda(parameters, this$Content));
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          if (e.name == 'JsonDecodingException') {
            logger_9.warn_nq59yw$(Content$parseProfileFile$lambda$lambda_0);
            this$Content.props.handleDisplayAlert(OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
          } else {
            logger_9.error_nq59yw$(Content$parseProfileFile$lambda$lambda_1(e));
            console.log(e);
            this$Content.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
          }
        } else
          throw e;
      }
      return Unit;
    };
  }
  function Content$parseProfileFile$lambda_0() {
    return 'The user did not provide a .json file for the profile';
  }
  Content.prototype.parseProfileFile_0 = function (file) {
    if (endsWith(file.name, '.json')) {
      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = Content$parseProfileFile$lambda(reader, this);
    } else {
      logger_9.warn_nq59yw$(Content$parseProfileFile$lambda_0);
      this.props.handleDisplayAlert(OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_getInstance(), CryptoACAlertSeverity$WARNING_getInstance());
    }
  };
  function Content$getFieldsFromParameters$lambda() {
    return 'Getting profile fields from parameters';
  }
  Content.prototype.getFieldsFromParameters_0 = function (parameters) {
    var tmp$, tmp$_0;
    logger_9.info_nq59yw$(Content$getFieldsFromParameters$lambda);
    switch (parameters.coreType.name) {
      case 'RBAC_CLOUD':
        this.coreParametersCloudFormFields_0 = listOf([listOf([new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text, void 0, parameters.username, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().IS_ADMIN, replace(SERVER_getInstance().IS_ADMIN, '_', ' '), InputType.checkBox, void 0, parameters.isAdmin.toString(), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().RM_URL, replace(SERVER_getInstance().RM_URL, '_', ' '), InputType.text, void 0, (Kotlin.isType(tmp$ = parameters, CoreParametersCloud) ? tmp$ : throwCCE()).rmCloudInterfaceParameters.url, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().RM_PORT, replace(SERVER_getInstance().RM_PORT, '_', ' '), InputType.number, void 0, parameters.rmCloudInterfaceParameters.port.toString(), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().MS_URL, replace(SERVER_getInstance().MS_URL, '_', ' '), InputType.text, void 0, parameters.msMySQLInterfaceParameters.url, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PASSWORD, replace(SERVER_getInstance().MS_PASSWORD, '_', ' '), InputType.password, void 0, parameters.msMySQLInterfaceParameters.password, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PORT, replace(SERVER_getInstance().MS_PORT, '_', ' '), InputType.number, void 0, parameters.msMySQLInterfaceParameters.port.toString(), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().DS_URL, replace(SERVER_getInstance().DS_URL, '_', ' '), InputType.text, void 0, parameters.dsCloudInterfaceParameters.url, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DS_PORT, replace(SERVER_getInstance().DS_PORT, '_', ' '), InputType.number, void 0, parameters.dsCloudInterfaceParameters.port.toString(), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().OPA_URL, replace(SERVER_getInstance().OPA_URL, '_', ' '), InputType.text, void 0, parameters.opaInterfaceParameters.url, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().OPA_PORT, replace(SERVER_getInstance().OPA_PORT, '_', ' '), InputType.number, void 0, parameters.opaInterfaceParameters.port.toString(), 'darkTextField')])]);
        break;
      case 'RBAC_MQTT':
        this.coreParametersMQTTCryptoACFormFields_0 = listOf([listOf([new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text, void 0, parameters.username, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().IS_ADMIN, replace(SERVER_getInstance().IS_ADMIN, '_', ' '), InputType.checkBox, void 0, parameters.isAdmin.toString(), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().DS_URL, 'Broker URL', InputType.text, void 0, (Kotlin.isType(tmp$_0 = parameters, CoreParametersMQTT) ? tmp$_0 : throwCCE()).dsMQTTInterfaceParameters.url, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DS_PASSWORD, 'Broker Password', InputType.password, void 0, parameters.dsMQTTInterfaceParameters.password, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DS_PORT, 'Broker Port', InputType.number, void 0, parameters.dsMQTTInterfaceParameters.port.toString(), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().MS_URL, replace(SERVER_getInstance().MS_URL, '_', ' '), InputType.text, void 0, parameters.msMySQLInterfaceParameters.url, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PASSWORD, replace(SERVER_getInstance().MS_PASSWORD, '_', ' '), InputType.password, void 0, parameters.msMySQLInterfaceParameters.password, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PORT, replace(SERVER_getInstance().MS_PORT, '_', ' '), InputType.number, void 0, parameters.msMySQLInterfaceParameters.port.toString(), 'darkTextField')])]);
        break;
    }
  };
  function Content$getProfileFromProxy$lambda(closure$username, closure$actualEndpoint) {
    return function () {
      return 'Getting the profile for user ' + toString(closure$username) + ' at endpoint ' + closure$actualEndpoint;
    };
  }
  function Content$getProfileFromProxy$lambda_0(closure$status) {
    return function () {
      return 'Response status is ' + closure$status;
    };
  }
  function Content$getProfileFromProxy$lambda_1(this$Content, closure$loggedUserCoreParameters) {
    return function ($receiver) {
      this$Content.props.handleChangeUserHasProfile(true);
      this$Content.props.handleChangeUserIsAdmin(closure$loggedUserCoreParameters.isAdmin);
      this$Content.props.handleChangeUsername(closure$loggedUserCoreParameters.username);
      $receiver.editProfileFormOpen = false;
      this$Content.getFieldsFromParameters_0(closure$loggedUserCoreParameters);
      return Unit;
    };
  }
  function Content$getProfileFromProxy$lambda_2(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$outcomeCode;
    };
  }
  function Content$getProfileFromProxy$lambda_3(this$Content) {
    return function ($receiver) {
      this$Content.props.handleChangeUserHasProfile(false);
      this$Content.props.handleChangeUserIsAdmin(false);
      this$Content.props.handleChangeUsername(null);
      $receiver.editProfileFormOpen = true;
      return Unit;
    };
  }
  function Coroutine$getProfileFromProxy_0($this, username_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$response = void 0;
    this.local$status = void 0;
    this.local$username = username_0;
  }
  Coroutine$getProfileFromProxy_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getProfileFromProxy_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getProfileFromProxy_0.prototype.constructor = Coroutine$getProfileFromProxy_0;
  Coroutine$getProfileFromProxy_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$username === void 0)
              this.local$username = this.$this.props.username;
            var actualEndpoint = baseURL + replace(API_getInstance().PROFILES, '{Core}', this.$this.props.coreType.toString()) + '?' + SERVER_getInstance().USERNAME + '=' + toString(this.local$username);
            logger_9.info_nq59yw$(Content$getProfileFromProxy$lambda(this.local$username, actualEndpoint));
            var $receiver_0 = this.$this.props.httpClient;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, actualEndpoint);
            get$lambda($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(HttpResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, HttpResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, HttpResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, HttpResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            var httpResponse = this.result_0;
            this.local$status = httpResponse.status;
            if (this.local$status != null ? this.local$status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_9.info_nq59yw$(Content$getProfileFromProxy$lambda_0(this.local$status));
              switch (this.$this.props.coreType.name) {
                case 'RBAC_CLOUD':
                  this.local$tmp$ = Json.Default;
                  this.state_0 = 12;
                  this.result_0 = readText(httpResponse, void 0, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                case 'RBAC_MQTT':
                  this.local$tmp$_0 = Json.Default;
                  this.state_0 = 11;
                  this.result_0 = readText(httpResponse, void 0, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                default:this.local$tmp$_1 = Kotlin.noWhenBranchMatched();
                  this.state_0 = 13;
                  continue;
              }
            } else {
              this.state_0 = 10;
              this.result_0 = readText(httpResponse, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 10:
            var text = this.result_0;
            var $receiver = Json.Default;
            var tmp$;
            var outcomeCode = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$ : throwCCE(), text);
            logger_9.warn_nq59yw$(Content$getProfileFromProxy$lambda_2(this.local$status, outcomeCode));
            this.$this.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance());
            setState(this.$this, Content$getProfileFromProxy$lambda_3(this.$this));
            this.local$tmp$_2 = null;
            this.state_0 = 14;
            continue;
          case 11:
            var string = this.result_0;
            var tmp$_0;
            this.local$tmp$_1 = this.local$tmp$_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer(this.local$tmp$_0.serializersModule, createKType(getKClass(CoreParametersMQTT), [], false)), KSerializer) ? tmp$_0 : throwCCE(), string);
            this.state_0 = 13;
            continue;
          case 12:
            var string_0 = this.result_0;
            var tmp$_1;
            this.local$tmp$_1 = this.local$tmp$.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer(this.local$tmp$.serializersModule, createKType(getKClass(CoreParametersCloud), [], false)), KSerializer) ? tmp$_1 : throwCCE(), string_0);
            this.state_0 = 13;
            continue;
          case 13:
            var loggedUserCoreParameters = this.local$tmp$_1;
            setState(this.$this, Content$getProfileFromProxy$lambda_1(this.$this, loggedUserCoreParameters));
            this.local$tmp$_2 = loggedUserCoreParameters;
            this.state_0 = 14;
            continue;
          case 14:
            return this.local$tmp$_2;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Content.prototype.getProfileFromProxy_0 = function (username_0, continuation_0, suspended) {
    var instance = new Coroutine$getProfileFromProxy_0(this, username_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Content.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Content',
    interfaces: [RComponent]
  };
  function content$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function content($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(Content), content$lambda(handler));
  }
  function styledDiv$lambda_5(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function get$lambda_0($receiver) {
    return Unit;
  }
  function logger$lambda_10() {
    return Unit;
  }
  var logger_10;
  function MQTTContent() {
    RComponent_init(this);
  }
  function MQTTContent$render$lambda$lambda$lambda($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$fetchedUsers) {
    return function ($receiver) {
      $receiver.users = closure$fetchedUsers;
      return Unit;
    };
  }
  function Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTContent = this$MQTTContent_0;
  }
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getUsers_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedUsers = this.result_0;
            if (fetchedUsers != null) {
              return setState(this.local$this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(fetchedUsers)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$result, closure$username) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$result, assignmentColumns, 'Assignments of user ' + closure$username));
      return Unit;
    };
  }
  function Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$MQTTContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$MQTTContent = this$MQTTContent_0;
    this.local$username = void 0;
  }
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$username = first(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getAssignments_0(this.local$username, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var result = this.result_0;
            var tmp$ = result != null;
            if (tmp$) {
              tmp$ = !result.isEmpty();
            }
            if (tmp$) {
              return setState(this.local$this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(result, this.local$username)), Unit;
            } else {
              return this.local$this$MQTTContent.props.handleDisplayAlert(OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
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
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$MQTTContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(it, this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTContent.state.users;
      this$.columns = userColumns;
      this$.title = 'Users';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_0(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_0(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda);
      cryptoACTable($receiver, MQTTContent$render$lambda$lambda$lambda$lambda_0(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$fetchedRoles) {
    return function ($receiver) {
      $receiver.roles = closure$fetchedRoles;
      return Unit;
    };
  }
  function Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTContent = this$MQTTContent_0;
  }
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getRoles_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedRoles = this.result_0;
            if (fetchedRoles != null) {
              return setState(this.local$this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(fetchedRoles)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$assignments, closure$roleName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$assignments.v, assignmentColumns, 'Assignments of role ' + closure$roleName));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$permissions, closure$roleName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$permissions.v, permissionColumns, 'Permissions of role ' + closure$roleName));
      return Unit;
    };
  }
  function Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$MQTTContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$MQTTContent = this$MQTTContent_0;
    this.local$roleName = void 0;
    this.local$assignments = void 0;
  }
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$roleName = first(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getAssignments_0(void 0, this.local$roleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$assignments = {v: this.result_0};
            this.state_0 = 3;
            this.result_0 = this.local$this$MQTTContent.getPermissions_0(this.local$roleName, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var permissions = {v: this.result_0};
            var tmp$ = this.local$assignments.v != null;
            if (tmp$) {
              tmp$ = !this.local$assignments.v.isEmpty();
            }
            if (tmp$) {
              setState(this.local$this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this.local$assignments, this.local$roleName));
            } else {
              this.local$this$MQTTContent.props.handleDisplayAlert(OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
            }

            var tmp$_0 = permissions.v != null;
            if (tmp$_0) {
              tmp$_0 = !permissions.v.isEmpty();
            }
            if (tmp$_0) {
              return setState(this.local$this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(permissions, this.local$roleName)), Unit;
            } else {
              return this.local$this$MQTTContent.props.handleDisplayAlert(OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
            }

          case 4:
            return;
          default:this.state_0 = 1;
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
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$MQTTContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(it, this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_0(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTContent.state.roles;
      this$.columns = roleColumns;
      this$.title = 'Roles';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_2(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_0(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_1(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda_1);
      cryptoACTable($receiver, MQTTContent$render$lambda$lambda$lambda$lambda_2(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$fetchedFiles) {
    return function ($receiver) {
      $receiver.files = closure$fetchedFiles;
      return Unit;
    };
  }
  function Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTContent = this$MQTTContent_0;
  }
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3;
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getFiles_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedFiles = this.result_0;
            if (fetchedFiles != null) {
              return setState(this.local$this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(fetchedFiles)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$permissions, closure$fileName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$permissions.v, permissionColumns, 'Permissions for file ' + closure$fileName));
      return Unit;
    };
  }
  function Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$MQTTContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$MQTTContent = this$MQTTContent_0;
    this.local$fileName = void 0;
  }
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4;
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fileName = first(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getPermissions_0(void 0, this.local$fileName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var permissions = {v: this.result_0};
            var tmp$ = permissions.v != null;
            if (tmp$) {
              tmp$ = !permissions.v.isEmpty();
            }
            if (tmp$) {
              return setState(this.local$this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(permissions, this.local$fileName)), Unit;
            } else {
              return this.local$this$MQTTContent.props.handleDisplayAlert(OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
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
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$MQTTContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(it, this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTContent.state.files;
      this$.columns = fileColumns;
      this$.title = 'Files';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_4(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_2(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda_3);
      cryptoACTable($receiver, MQTTContent$render$lambda$lambda$lambda$lambda_4(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda);
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_0(this$MQTTContent));
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_1(this$MQTTContent));
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_2(this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_3($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 6;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$fetchedAssignments) {
    return function ($receiver) {
      $receiver.assignments = closure$fetchedAssignments;
      return Unit;
    };
  }
  function Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTContent = this$MQTTContent_0;
  }
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.constructor = Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5;
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getAssignments_0(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedAssignments = this.result_0;
            if (fetchedAssignments != null) {
              return setState(this.local$this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(fetchedAssignments)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTContent) {
    return function (it) {
      this$MQTTContent.props.handleDisplayAlert(OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_2(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTContent.state.assignments;
      this$.columns = assignmentColumns;
      this$.title = 'User-Role Assignments';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_6(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_2(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_4(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda_5);
      cryptoACTable($receiver, MQTTContent$render$lambda$lambda$lambda$lambda_6(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 6;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$fetchedPermissions) {
    return function ($receiver) {
      $receiver.permissions = closure$fetchedPermissions;
      return Unit;
    };
  }
  function Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTContent = this$MQTTContent_0;
  }
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.constructor = Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6;
  Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getPermissions_0(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedPermissions = this.result_0;
            if (fetchedPermissions != null) {
              return setState(this.local$this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(fetchedPermissions)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$MQTTContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$MQTTContent) {
    return function (it) {
      this$MQTTContent.props.handleDisplayAlert(OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTContent.state.permissions;
      this$.columns = permissionColumns;
      this$.title = 'Role-File Permissions';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_8(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_5(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda_7);
      cryptoACTable($receiver, MQTTContent$render$lambda$lambda$lambda$lambda_8(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda_0(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda_3);
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_4(this$MQTTContent));
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_5(this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 12;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$cryptoACTableData) {
    return function ($receiver) {
      $receiver.openedTables.remove_11rb$(closure$cryptoACTableData);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$MQTTContent) {
    return function (it) {
      setState(this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$cryptoACTableData));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, this$, this$MQTTContent) {
    return function ($receiver) {
      this$.elements = closure$cryptoACTableData.elements;
      this$.columns = closure$cryptoACTableData.columns;
      this$.title = closure$cryptoACTableData.title;
      this$.onClose = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, $receiver, this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_10(closure$cryptoACTableData, this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_4);
      cryptoACTable($receiver, MQTTContent$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_6(closure$cryptoACTableData, this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda_9);
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda$lambda_10(closure$cryptoACTableData, this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 12;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$listOfMessages, this$, closure$it) {
    return function ($receiver) {
      this$.elements = closure$listOfMessages;
      this$.columns = mqttMessagesColumns;
      this$.title = 'Topic: ' + closure$it.key;
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_7(closure$it, this$) {
    return function ($receiver) {
      var listOfMessages = ArrayList_init_0();
      var tmp$;
      tmp$ = closure$it.value.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        listOfMessages.add_11rb$([element.message]);
      }
      this$.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_10(listOfMessages, $receiver, closure$it));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_12(closure$it) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_6);
      cryptoACTable($receiver, MQTTContent$render$lambda$lambda$lambda$lambda$lambda_7(closure$it, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_7(closure$it) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(MQTTContent$render$lambda$lambda$lambda$lambda_11);
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda$lambda_12(closure$it));
      return Unit;
    };
  }
  MQTTContent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_5);
    var $receiver_1 = $receiver_0.css;
    set_marginTop($receiver_1, get_px(10));
    set_marginBottom($receiver_1, get_px(10));
    set_maxHeight($receiver_1, get_px(500));
    if (this.props.userIsAdmin) {
      $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda(this));
    }$receiver_0.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda_0(this));
    var tmp$;
    tmp$ = this.state.openedTables.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_6(element, this));
    }
    var tmp$_0;
    tmp$_0 = this.props.contentMessages.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_7(element_0));
    }
    $receiver.child_52psg1$($receiver_0.create());
  };
  function MQTTContent$init$lambda() {
    return 'Initializing the state of the MQTTContent component';
  }
  function MQTTContent$init$lambda$lambda(this$MQTTContent, closure$fetchedUsers, closure$fetchedRoles, closure$fetchedFiles, closure$fetchedAssignments, closure$fetchedPermissions) {
    return function ($receiver) {
      if (this$MQTTContent.props.userIsAdmin && closure$fetchedUsers.v != null) {
        $receiver.users = closure$fetchedUsers.v;
      }if (this$MQTTContent.props.userIsAdmin && closure$fetchedRoles.v != null) {
        $receiver.roles = closure$fetchedRoles.v;
      }if (this$MQTTContent.props.userIsAdmin && closure$fetchedFiles.v != null) {
        $receiver.files = closure$fetchedFiles.v;
      }if (closure$fetchedAssignments != null) {
        $receiver.assignments = closure$fetchedAssignments;
      }if (closure$fetchedPermissions.v != null) {
        $receiver.permissions = closure$fetchedPermissions.v;
      }return Unit;
    };
  }
  function Coroutine$MQTTContent$init$lambda(this$MQTTContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTContent = this$MQTTContent_0;
    this.local$fetchedUsers = void 0;
    this.local$fetchedRoles = void 0;
    this.local$fetchedFiles = void 0;
    this.local$fetchedPermissions = void 0;
    this.local$fetchedAssignments = void 0;
  }
  Coroutine$MQTTContent$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTContent$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTContent$init$lambda.prototype.constructor = Coroutine$MQTTContent$init$lambda;
  Coroutine$MQTTContent$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fetchedUsers = {v: emptyList()};
            this.local$fetchedRoles = {v: emptyList()};
            this.local$fetchedFiles = {v: emptyList()};
            this.local$fetchedPermissions = {v: emptyList()};
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getAssignments_0(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$fetchedAssignments = this.result_0;
            if (this.local$fetchedAssignments != null) {
              this.state_0 = 3;
              this.result_0 = this.local$this$MQTTContent.getPermissions_0(void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 10;
              continue;
            }

          case 3:
            this.local$fetchedPermissions.v = this.result_0;
            if (this.local$fetchedPermissions.v != null && this.local$this$MQTTContent.props.userIsAdmin) {
              this.state_0 = 4;
              this.result_0 = this.local$this$MQTTContent.getUsers_0(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 9;
              continue;
            }

          case 4:
            this.local$fetchedUsers.v = this.result_0;
            if (this.local$fetchedUsers.v != null) {
              this.state_0 = 5;
              this.result_0 = this.local$this$MQTTContent.getRoles_0(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 8;
              continue;
            }

          case 5:
            this.local$fetchedRoles.v = this.result_0;
            if (this.local$fetchedRoles.v != null) {
              this.state_0 = 6;
              this.result_0 = this.local$this$MQTTContent.getFiles_0(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.local$fetchedFiles.v = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            return setState(this.local$this$MQTTContent, MQTTContent$init$lambda$lambda(this.local$this$MQTTContent, this.local$fetchedUsers, this.local$fetchedRoles, this.local$fetchedFiles, this.local$fetchedAssignments, this.local$fetchedPermissions)), Unit;
          default:this.state_0 = 1;
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
  function MQTTContent$init$lambda_0(this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$init$lambda(this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MQTTContent.prototype.init_bc6fkx$ = function ($receiver) {
    logger_10.info_nq59yw$(MQTTContent$init$lambda);
    $receiver.users = emptyList();
    $receiver.roles = emptyList();
    $receiver.files = emptyList();
    $receiver.assignments = emptyList();
    $receiver.permissions = emptyList();
    $receiver.openedTables = ArrayList_init_0();
    launch(MainScope(), void 0, void 0, MQTTContent$init$lambda_0(this));
  };
  MQTTContent.prototype.getUsers_0 = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().USERS, '{Core}', this.props.coreType.toString());
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance(), ElementType$USER_getInstance(), continuation);
  };
  MQTTContent.prototype.getRoles_0 = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().ROLES, '{Core}', this.props.coreType.toString());
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance(), ElementType$ROLE_getInstance(), continuation);
  };
  MQTTContent.prototype.getFiles_0 = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().FILES, '{Core}', this.props.coreType.toString());
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance(), ElementType$FILE_getInstance(), continuation);
  };
  MQTTContent.prototype.getAssignments_0 = function (username, roleName, continuation) {
    if (username === void 0)
      username = null;
    if (roleName === void 0)
      roleName = null;
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().ASSIGNMENTS, '{Core}', this.props.coreType.toString()) + '?' + (username != null ? SERVER_getInstance().USERNAME + '=' + toString(username) : '' + (roleName != null ? SERVER_getInstance().ROLE_NAME + '=' + toString(roleName) : ''));
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), ElementType$ASSIGNMENT_getInstance(), continuation);
  };
  MQTTContent.prototype.getPermissions_0 = function (roleName, fileName, continuation) {
    if (roleName === void 0)
      roleName = null;
    if (fileName === void 0)
      fileName = null;
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().PERMISSIONS, '{Core}', this.props.coreType.toString()) + '?' + (roleName != null ? SERVER_getInstance().ROLE_NAME + '=' + toString(roleName) : '' + (fileName != null ? SERVER_getInstance().FILE_NAME + '=' + toString(fileName) : ''));
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), ElementType$PERMISSION_getInstance(), continuation);
  };
  function MQTTContent$getElements$lambda(closure$type) {
    return function () {
      return 'Getting the list of elements of type ' + closure$type;
    };
  }
  function MQTTContent$getElements$lambda_0(closure$endpoint) {
    return function () {
      return 'Sending get request to ' + closure$endpoint;
    };
  }
  function MQTTContent$getElements$lambda_1() {
    return 'Proxy is unreachable';
  }
  function MQTTContent$getElements$lambda_2(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function MQTTContent$getElements$lambda_3(closure$type) {
    return function () {
      return 'Got 0 elements of type ' + closure$type;
    };
  }
  function MQTTContent$getElements$lambda_4(closure$type, closure$outcomeCode) {
    return function () {
      return 'Error while getting elements of type ' + closure$type + ': ' + closure$outcomeCode;
    };
  }
  function Coroutine$getElements_0($this, endpoint_0, errorCode_0, type_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 21;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$tmp$_6 = void 0;
    this.local$response = void 0;
    this.local$endpoint = endpoint_0;
    this.local$errorCode = errorCode_0;
    this.local$type = type_0;
  }
  Coroutine$getElements_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getElements_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getElements_0.prototype.constructor = Coroutine$getElements_0;
  Coroutine$getElements_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            logger_10.info_nq59yw$(MQTTContent$getElements$lambda(this.local$type));
            logger_10.info_nq59yw$(MQTTContent$getElements$lambda_0(this.local$endpoint));
            this.$this.props.handleChangeBackdropOpen(true);
            this.exceptionState_0 = 9;
            var $receiver_0 = this.$this.props.httpClient;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, this.local$endpoint);
            get$lambda_0($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(HttpResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = (tmp$_5 = $this_0) == null || Kotlin.isType(tmp$_5, HttpResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 8;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 6;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], true));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = (tmp$_7 = this.result_0) == null || Kotlin.isType(tmp$_7, HttpResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 7;
            continue;
          case 4:
            this.finallyPath_0 = [9];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.result_0 = (tmp$_6 = this.result_0) == null || Kotlin.isType(tmp$_6, HttpResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.result_0;
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 21;
            this.finallyPath_0 = [11];
            this.state_0 = 10;
            continue;
          case 9:
            this.finallyPath_0 = [21];
            this.exceptionState_0 = 10;
            var e = this.exception_0;
            if (Kotlin.isType(e, Error_0)) {
              if (equals(e.message, 'Fail to fetch')) {
                logger_10.error_nq59yw$(MQTTContent$getElements$lambda_1);
                this.$this.props.handleDisplayAlert(OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
              } else {
                logger_10.error_nq59yw$(MQTTContent$getElements$lambda_2(e));
                console.log(e);
                this.$this.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
              }
              this.local$tmp$ = null;
            } else
              throw e;
            this.finallyPath_0 = [11];
            this.state_0 = 10;
            continue;
          case 10:
            this.exceptionState_0 = 21;
            this.$this.props.handleChangeBackdropOpen(false);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 11:
            var httpResponse = this.local$tmp$;
            if (httpResponse != null) {
              if ((tmp$ = httpResponse.status) != null ? tmp$.equals(HttpStatusCode.Companion.OK) : null) {
                switch (this.local$type.name) {
                  case 'USER':
                    this.local$tmp$_1 = Json.Default;
                    this.state_0 = 17;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'ROLE':
                    this.local$tmp$_2 = Json.Default;
                    this.state_0 = 16;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'FILE':
                    this.local$tmp$_3 = Json.Default;
                    this.state_0 = 15;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'ASSIGNMENT':
                    this.local$tmp$_4 = Json.Default;
                    this.state_0 = 14;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'PERMISSION':
                    this.local$tmp$_5 = Json.Default;
                    this.state_0 = 13;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  default:this.local$tmp$_6 = Kotlin.noWhenBranchMatched();
                    this.state_0 = 18;
                    continue;
                }
              } else {
                this.state_0 = 12;
                this.result_0 = readText(httpResponse, void 0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            } else {
              this.local$tmp$_6 = null;
              this.state_0 = 20;
              continue;
            }

          case 12:
            var text = this.result_0;
            var $receiver = Json.Default;
            var tmp$_0;
            var outcomeCode = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$_0 : throwCCE(), text);
            if (outcomeCode === this.local$errorCode) {
              logger_10.info_nq59yw$(MQTTContent$getElements$lambda_3(this.local$type));
              this.local$tmp$_6 = emptyList();
            } else {
              logger_10.warn_nq59yw$(MQTTContent$getElements$lambda_4(this.local$type, outcomeCode));
              this.$this.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance());
              this.local$tmp$_6 = null;
            }

            this.state_0 = 19;
            continue;
          case 13:
            var string = this.result_0;
            var tmp$_1;
            var permissions = this.local$tmp$_5.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer(this.local$tmp$_5.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(PermissionTuple), [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), string);
            var destination = ArrayList_init(collectionSizeOrDefault(permissions, 10));
            var tmp$_2;
            tmp$_2 = permissions.iterator();
            while (tmp$_2.hasNext()) {
              var item = tmp$_2.next();
              destination.add_11rb$(item.toArray());
            }

            this.local$tmp$_6 = destination;
            this.state_0 = 18;
            continue;
          case 14:
            var string_0 = this.result_0;
            var tmp$_3;
            var assignments = this.local$tmp$_4.decodeFromString_awif5v$(Kotlin.isType(tmp$_3 = serializer(this.local$tmp$_4.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(RoleTuple), [], false))], false)), KSerializer) ? tmp$_3 : throwCCE(), string_0);
            var destination_0 = ArrayList_init(collectionSizeOrDefault(assignments, 10));
            var tmp$_9;
            tmp$_9 = assignments.iterator();
            while (tmp$_9.hasNext()) {
              var item_0 = tmp$_9.next();
              destination_0.add_11rb$(item_0.toArray());
            }

            this.local$tmp$_6 = destination_0;
            this.state_0 = 18;
            continue;
          case 15:
            var string_1 = this.result_0;
            var tmp$_10;
            var files = this.local$tmp$_3.decodeFromString_awif5v$(Kotlin.isType(tmp$_10 = serializer(this.local$tmp$_3.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(File), [], false))], false)), KSerializer) ? tmp$_10 : throwCCE(), string_1);
            var destination_1 = ArrayList_init(collectionSizeOrDefault(files, 10));
            var tmp$_11;
            tmp$_11 = files.iterator();
            while (tmp$_11.hasNext()) {
              var item_1 = tmp$_11.next();
              destination_1.add_11rb$(item_1.toArray());
            }

            this.local$tmp$_6 = destination_1;
            this.state_0 = 18;
            continue;
          case 16:
            var string_2 = this.result_0;
            var tmp$_12;
            var roles = this.local$tmp$_2.decodeFromString_awif5v$(Kotlin.isType(tmp$_12 = serializer(this.local$tmp$_2.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(Role), [], false))], false)), KSerializer) ? tmp$_12 : throwCCE(), string_2);
            var destination_2 = ArrayList_init(collectionSizeOrDefault(roles, 10));
            var tmp$_13;
            tmp$_13 = roles.iterator();
            while (tmp$_13.hasNext()) {
              var item_2 = tmp$_13.next();
              destination_2.add_11rb$(item_2.toArray());
            }

            this.local$tmp$_6 = destination_2;
            this.state_0 = 18;
            continue;
          case 17:
            var string_3 = this.result_0;
            var tmp$_14;
            var users = this.local$tmp$_1.decodeFromString_awif5v$(Kotlin.isType(tmp$_14 = serializer(this.local$tmp$_1.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(User), [], false))], false)), KSerializer) ? tmp$_14 : throwCCE(), string_3);
            var destination_3 = ArrayList_init(collectionSizeOrDefault(users, 10));
            var tmp$_15;
            tmp$_15 = users.iterator();
            while (tmp$_15.hasNext()) {
              var item_3 = tmp$_15.next();
              destination_3.add_11rb$(item_3.toArray());
            }

            this.local$tmp$_6 = destination_3;
            this.state_0 = 18;
            continue;
          case 18:
            this.state_0 = 19;
            continue;
          case 19:
            this.state_0 = 20;
            continue;
          case 20:
            return this.local$tmp$_6;
          case 21:
            throw this.exception_0;
          default:this.state_0 = 21;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 21) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MQTTContent.prototype.getElements_0 = function (endpoint_0, errorCode_0, type_0, continuation_0, suspended) {
    var instance = new Coroutine$getElements_0(this, endpoint_0, errorCode_0, type_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  MQTTContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MQTTContent',
    interfaces: [RComponent]
  };
  function mqttContent$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function mqttContent($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(MQTTContent), mqttContent$lambda(handler));
  }
  function styledDiv$lambda_6(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function get$lambda_1($receiver) {
    return Unit;
  }
  function logger$lambda_11() {
    return Unit;
  }
  var logger_11;
  function CloudContent() {
    RComponent_init(this);
  }
  function CloudContent$render$lambda$lambda$lambda($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$fetchedUsers) {
    return function ($receiver) {
      $receiver.users = closure$fetchedUsers;
      return Unit;
    };
  }
  function Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudContent = this$CloudContent_0;
  }
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudContent.getUsers_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedUsers = this.result_0;
            if (fetchedUsers != null) {
              return setState(this.local$this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(fetchedUsers)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$result, closure$username) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$result, assignmentColumns, 'Assignments of user ' + closure$username));
      return Unit;
    };
  }
  function Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$CloudContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$CloudContent = this$CloudContent_0;
    this.local$username = void 0;
  }
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$username = first(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudContent.getAssignments_0(this.local$username, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var result = this.result_0;
            var tmp$ = result != null;
            if (tmp$) {
              tmp$ = !result.isEmpty();
            }
            if (tmp$) {
              return setState(this.local$this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(result, this.local$username)), Unit;
            } else {
              return this.local$this$CloudContent.props.handleDisplayAlert(OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
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
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$CloudContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$CloudContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CloudContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(it, this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda(this$CloudContent, this$) {
    return function ($receiver) {
      this$.elements = this$CloudContent.state.users;
      this$.columns = userColumns;
      this$.title = 'Users';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_0(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda$lambda(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_0(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda);
      cryptoACTable($receiver, CloudContent$render$lambda$lambda$lambda$lambda_0(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$fetchedRoles) {
    return function ($receiver) {
      $receiver.roles = closure$fetchedRoles;
      return Unit;
    };
  }
  function Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudContent = this$CloudContent_0;
  }
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudContent.getRoles_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedRoles = this.result_0;
            if (fetchedRoles != null) {
              return setState(this.local$this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(fetchedRoles)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$assignments, closure$roleName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$assignments.v, assignmentColumns, 'Assignments of role ' + closure$roleName));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$permissions, closure$roleName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$permissions.v, permissionColumns, 'Permissions of role ' + closure$roleName));
      return Unit;
    };
  }
  function Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$CloudContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$CloudContent = this$CloudContent_0;
    this.local$roleName = void 0;
    this.local$assignments = void 0;
  }
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$roleName = first(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudContent.getAssignments_0(void 0, this.local$roleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$assignments = {v: this.result_0};
            this.state_0 = 3;
            this.result_0 = this.local$this$CloudContent.getPermissions_0(this.local$roleName, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var permissions = {v: this.result_0};
            var tmp$ = this.local$assignments.v != null;
            if (tmp$) {
              tmp$ = !this.local$assignments.v.isEmpty();
            }
            if (tmp$) {
              setState(this.local$this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this.local$assignments, this.local$roleName));
            } else {
              this.local$this$CloudContent.props.handleDisplayAlert(OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
            }

            var tmp$_0 = permissions.v != null;
            if (tmp$_0) {
              tmp$_0 = !permissions.v.isEmpty();
            }
            if (tmp$_0) {
              return setState(this.local$this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(permissions, this.local$roleName)), Unit;
            } else {
              return this.local$this$CloudContent.props.handleDisplayAlert(OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
            }

          case 4:
            return;
          default:this.state_0 = 1;
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
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$CloudContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$CloudContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CloudContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(it, this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda_0(this$CloudContent, this$) {
    return function ($receiver) {
      this$.elements = this$CloudContent.state.roles;
      this$.columns = roleColumns;
      this$.title = 'Roles';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_2(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_0(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_1(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda_1);
      cryptoACTable($receiver, CloudContent$render$lambda$lambda$lambda$lambda_2(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$fetchedFiles) {
    return function ($receiver) {
      $receiver.files = closure$fetchedFiles;
      return Unit;
    };
  }
  function Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudContent = this$CloudContent_0;
  }
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3;
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudContent.getFiles_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedFiles = this.result_0;
            if (fetchedFiles != null) {
              return setState(this.local$this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(fetchedFiles)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$permissions, closure$fileName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$permissions.v, permissionColumns, 'Permissions for file ' + closure$fileName));
      return Unit;
    };
  }
  function Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$CloudContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$CloudContent = this$CloudContent_0;
    this.local$fileName = void 0;
  }
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4;
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fileName = first(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudContent.getPermissions_0(void 0, this.local$fileName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var permissions = {v: this.result_0};
            var tmp$ = permissions.v != null;
            if (tmp$) {
              tmp$ = !permissions.v.isEmpty();
            }
            if (tmp$) {
              return setState(this.local$this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(permissions, this.local$fileName)), Unit;
            } else {
              return this.local$this$CloudContent.props.handleDisplayAlert(OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
            }

          case 3:
            return;
          default:this.state_0 = 1;
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
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$CloudContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$CloudContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$CloudContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(it, this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent, this$) {
    return function ($receiver) {
      this$.elements = this$CloudContent.state.files;
      this$.columns = fileColumns;
      this$.title = 'Files';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_4(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_2(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda_3);
      cryptoACTable($receiver, CloudContent$render$lambda$lambda$lambda$lambda_4(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda);
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_0(this$CloudContent));
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_1(this$CloudContent));
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_2(this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_3($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 6;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$fetchedAssignments) {
    return function ($receiver) {
      $receiver.assignments = closure$fetchedAssignments;
      return Unit;
    };
  }
  function Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudContent = this$CloudContent_0;
  }
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.constructor = Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5;
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudContent.getAssignments_0(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedAssignments = this.result_0;
            if (fetchedAssignments != null) {
              return setState(this.local$this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(fetchedAssignments)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudContent) {
    return function (it) {
      this$CloudContent.props.handleDisplayAlert(OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda_2(this$CloudContent, this$) {
    return function ($receiver) {
      this$.elements = this$CloudContent.state.assignments;
      this$.columns = assignmentColumns;
      this$.title = 'User-Role Assignments';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_6(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_2(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_4(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda_5);
      cryptoACTable($receiver, CloudContent$render$lambda$lambda$lambda$lambda_6(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 6;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$fetchedPermissions) {
    return function ($receiver) {
      $receiver.permissions = closure$fetchedPermissions;
      return Unit;
    };
  }
  function Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudContent = this$CloudContent_0;
  }
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.constructor = Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6;
  Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudContent.getPermissions_0(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedPermissions = this.result_0;
            if (fetchedPermissions != null) {
              return setState(this.local$this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(fetchedPermissions)), Unit;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
          default:this.state_0 = 1;
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
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$CloudContent) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$CloudContent) {
    return function (it) {
      this$CloudContent.props.handleDisplayAlert(OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent, this$) {
    return function ($receiver) {
      this$.elements = this$CloudContent.state.permissions;
      this$.columns = permissionColumns;
      this$.title = 'Role-File Permissions';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_8(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_5(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda_7);
      cryptoACTable($receiver, CloudContent$render$lambda$lambda$lambda$lambda_8(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda_0(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda_3);
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_4(this$CloudContent));
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_5(this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 12;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$cryptoACTableData) {
    return function ($receiver) {
      $receiver.openedTables.remove_11rb$(closure$cryptoACTableData);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$CloudContent) {
    return function (it) {
      setState(this$CloudContent, CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$cryptoACTableData));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, this$, this$CloudContent) {
    return function ($receiver) {
      this$.elements = closure$cryptoACTableData.elements;
      this$.columns = closure$cryptoACTableData.columns;
      this$.title = closure$cryptoACTableData.title;
      this$.onClose = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, $receiver, this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_10(closure$cryptoACTableData, this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_4);
      cryptoACTable($receiver, CloudContent$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_6(closure$cryptoACTableData, this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(CloudContent$render$lambda$lambda$lambda$lambda_9);
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda$lambda_10(closure$cryptoACTableData, this$CloudContent));
      return Unit;
    };
  }
  CloudContent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_6);
    var $receiver_1 = $receiver_0.css;
    set_marginTop($receiver_1, get_px(10));
    set_marginBottom($receiver_1, get_px(10));
    set_maxHeight($receiver_1, get_px(500));
    if (this.props.userIsAdmin) {
      $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda(this));
    }$receiver_0.invoke_eb8iu4$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda_0(this));
    var tmp$;
    tmp$ = this.state.openedTables.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_6(element, this));
    }
    $receiver.child_52psg1$($receiver_0.create());
  };
  function CloudContent$init$lambda() {
    return 'Initializing the state of the CloudContent component';
  }
  function CloudContent$init$lambda$lambda(this$CloudContent, closure$fetchedUsers, closure$fetchedRoles, closure$fetchedFiles, closure$fetchedAssignments, closure$fetchedPermissions) {
    return function ($receiver) {
      if (this$CloudContent.props.userIsAdmin && closure$fetchedUsers.v != null) {
        $receiver.users = closure$fetchedUsers.v;
      }if (this$CloudContent.props.userIsAdmin && closure$fetchedRoles.v != null) {
        $receiver.roles = closure$fetchedRoles.v;
      }if (this$CloudContent.props.userIsAdmin && closure$fetchedFiles.v != null) {
        $receiver.files = closure$fetchedFiles.v;
      }if (closure$fetchedAssignments != null) {
        $receiver.assignments = closure$fetchedAssignments;
      }if (closure$fetchedPermissions.v != null) {
        $receiver.permissions = closure$fetchedPermissions.v;
      }return Unit;
    };
  }
  function Coroutine$CloudContent$init$lambda(this$CloudContent_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudContent = this$CloudContent_0;
    this.local$fetchedUsers = void 0;
    this.local$fetchedRoles = void 0;
    this.local$fetchedFiles = void 0;
    this.local$fetchedPermissions = void 0;
    this.local$fetchedAssignments = void 0;
  }
  Coroutine$CloudContent$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudContent$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudContent$init$lambda.prototype.constructor = Coroutine$CloudContent$init$lambda;
  Coroutine$CloudContent$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fetchedUsers = {v: emptyList()};
            this.local$fetchedRoles = {v: emptyList()};
            this.local$fetchedFiles = {v: emptyList()};
            this.local$fetchedPermissions = {v: emptyList()};
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudContent.getAssignments_0(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$fetchedAssignments = this.result_0;
            if (this.local$fetchedAssignments != null) {
              this.state_0 = 3;
              this.result_0 = this.local$this$CloudContent.getPermissions_0(void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 10;
              continue;
            }

          case 3:
            this.local$fetchedPermissions.v = this.result_0;
            if (this.local$fetchedPermissions.v != null && this.local$this$CloudContent.props.userIsAdmin) {
              this.state_0 = 4;
              this.result_0 = this.local$this$CloudContent.getUsers_0(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 9;
              continue;
            }

          case 4:
            this.local$fetchedUsers.v = this.result_0;
            if (this.local$fetchedUsers.v != null) {
              this.state_0 = 5;
              this.result_0 = this.local$this$CloudContent.getRoles_0(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 8;
              continue;
            }

          case 5:
            this.local$fetchedRoles.v = this.result_0;
            if (this.local$fetchedRoles.v != null) {
              this.state_0 = 6;
              this.result_0 = this.local$this$CloudContent.getFiles_0(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.local$fetchedFiles.v = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            return setState(this.local$this$CloudContent, CloudContent$init$lambda$lambda(this.local$this$CloudContent, this.local$fetchedUsers, this.local$fetchedRoles, this.local$fetchedFiles, this.local$fetchedAssignments, this.local$fetchedPermissions)), Unit;
          default:this.state_0 = 1;
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
  function CloudContent$init$lambda_0(this$CloudContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudContent$init$lambda(this$CloudContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  CloudContent.prototype.init_bc6fkx$ = function ($receiver) {
    logger_11.info_nq59yw$(CloudContent$init$lambda);
    $receiver.users = emptyList();
    $receiver.roles = emptyList();
    $receiver.files = emptyList();
    $receiver.assignments = emptyList();
    $receiver.permissions = emptyList();
    $receiver.openedTables = ArrayList_init_0();
    launch(MainScope(), void 0, void 0, CloudContent$init$lambda_0(this));
  };
  CloudContent.prototype.getUsers_0 = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().USERS, '{Core}', this.props.coreType.toString());
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance(), ElementType$USER_getInstance(), continuation);
  };
  CloudContent.prototype.getRoles_0 = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().ROLES, '{Core}', this.props.coreType.toString());
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance(), ElementType$ROLE_getInstance(), continuation);
  };
  CloudContent.prototype.getFiles_0 = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().FILES, '{Core}', this.props.coreType.toString());
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance(), ElementType$FILE_getInstance(), continuation);
  };
  CloudContent.prototype.getAssignments_0 = function (username, roleName, continuation) {
    if (username === void 0)
      username = null;
    if (roleName === void 0)
      roleName = null;
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().ASSIGNMENTS, '{Core}', this.props.coreType.toString()) + '?' + (username != null ? SERVER_getInstance().USERNAME + '=' + toString(username) : '' + (roleName != null ? SERVER_getInstance().ROLE_NAME + '=' + toString(roleName) : ''));
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), ElementType$ASSIGNMENT_getInstance(), continuation);
  };
  CloudContent.prototype.getPermissions_0 = function (roleName, fileName, continuation) {
    if (roleName === void 0)
      roleName = null;
    if (fileName === void 0)
      fileName = null;
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().PERMISSIONS, '{Core}', this.props.coreType.toString()) + '?' + (roleName != null ? SERVER_getInstance().ROLE_NAME + '=' + toString(roleName) : '' + (fileName != null ? SERVER_getInstance().FILE_NAME + '=' + toString(fileName) : ''));
    return this.getElements_0(actualEndpoint, OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), ElementType$PERMISSION_getInstance(), continuation);
  };
  function CloudContent$getElements$lambda(closure$type) {
    return function () {
      return 'Getting the list of elements of type ' + closure$type;
    };
  }
  function CloudContent$getElements$lambda_0(closure$endpoint) {
    return function () {
      return 'Sending get request to ' + closure$endpoint;
    };
  }
  function CloudContent$getElements$lambda_1() {
    return 'Proxy is unreachable';
  }
  function CloudContent$getElements$lambda_2(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function CloudContent$getElements$lambda_3(closure$type) {
    return function () {
      return 'Got 0 elements of type ' + closure$type;
    };
  }
  function CloudContent$getElements$lambda_4(closure$type, closure$outcomeCode) {
    return function () {
      return 'Error while getting elements of type ' + closure$type + ': ' + closure$outcomeCode;
    };
  }
  function Coroutine$getElements_0_0($this, endpoint_0, errorCode_0, type_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 21;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$tmp$_6 = void 0;
    this.local$response = void 0;
    this.local$endpoint = endpoint_0;
    this.local$errorCode = errorCode_0;
    this.local$type = type_0;
  }
  Coroutine$getElements_0_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getElements_0_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getElements_0_0.prototype.constructor = Coroutine$getElements_0_0;
  Coroutine$getElements_0_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            logger_11.info_nq59yw$(CloudContent$getElements$lambda(this.local$type));
            logger_11.info_nq59yw$(CloudContent$getElements$lambda_0(this.local$endpoint));
            this.$this.props.handleChangeBackdropOpen(true);
            this.exceptionState_0 = 9;
            var $receiver_0 = this.$this.props.httpClient;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, this.local$endpoint);
            get$lambda_1($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(HttpResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = (tmp$_5 = $this_0) == null || Kotlin.isType(tmp$_5, HttpResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 8;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 6;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], true));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = (tmp$_7 = this.result_0) == null || Kotlin.isType(tmp$_7, HttpResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 7;
            continue;
          case 4:
            this.finallyPath_0 = [9];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.result_0 = (tmp$_6 = this.result_0) == null || Kotlin.isType(tmp$_6, HttpResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.result_0;
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 21;
            this.finallyPath_0 = [11];
            this.state_0 = 10;
            continue;
          case 9:
            this.finallyPath_0 = [21];
            this.exceptionState_0 = 10;
            var e = this.exception_0;
            if (Kotlin.isType(e, Error_0)) {
              if (equals(e.message, 'Fail to fetch')) {
                logger_11.error_nq59yw$(CloudContent$getElements$lambda_1);
                this.$this.props.handleDisplayAlert(OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
              } else {
                logger_11.error_nq59yw$(CloudContent$getElements$lambda_2(e));
                console.log(e);
                this.$this.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
              }
              this.local$tmp$ = null;
            } else
              throw e;
            this.finallyPath_0 = [11];
            this.state_0 = 10;
            continue;
          case 10:
            this.exceptionState_0 = 21;
            this.$this.props.handleChangeBackdropOpen(false);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 11:
            var httpResponse = this.local$tmp$;
            if (httpResponse != null) {
              if ((tmp$ = httpResponse.status) != null ? tmp$.equals(HttpStatusCode.Companion.OK) : null) {
                switch (this.local$type.name) {
                  case 'USER':
                    this.local$tmp$_1 = Json.Default;
                    this.state_0 = 17;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'ROLE':
                    this.local$tmp$_2 = Json.Default;
                    this.state_0 = 16;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'FILE':
                    this.local$tmp$_3 = Json.Default;
                    this.state_0 = 15;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'ASSIGNMENT':
                    this.local$tmp$_4 = Json.Default;
                    this.state_0 = 14;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'PERMISSION':
                    this.local$tmp$_5 = Json.Default;
                    this.state_0 = 13;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  default:this.local$tmp$_6 = Kotlin.noWhenBranchMatched();
                    this.state_0 = 18;
                    continue;
                }
              } else {
                this.state_0 = 12;
                this.result_0 = readText(httpResponse, void 0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            } else {
              this.local$tmp$_6 = null;
              this.state_0 = 20;
              continue;
            }

          case 12:
            var text = this.result_0;
            var $receiver = Json.Default;
            var tmp$_0;
            var outcomeCode = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$_0 : throwCCE(), text);
            if (outcomeCode === this.local$errorCode) {
              logger_11.info_nq59yw$(CloudContent$getElements$lambda_3(this.local$type));
              this.local$tmp$_6 = emptyList();
            } else {
              logger_11.warn_nq59yw$(CloudContent$getElements$lambda_4(this.local$type, outcomeCode));
              this.$this.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance());
              this.local$tmp$_6 = null;
            }

            this.state_0 = 19;
            continue;
          case 13:
            var string = this.result_0;
            var tmp$_1;
            var permissions = this.local$tmp$_5.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer(this.local$tmp$_5.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(PermissionTuple), [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), string);
            var destination = ArrayList_init(collectionSizeOrDefault(permissions, 10));
            var tmp$_2;
            tmp$_2 = permissions.iterator();
            while (tmp$_2.hasNext()) {
              var item = tmp$_2.next();
              destination.add_11rb$(item.toArray());
            }

            this.local$tmp$_6 = destination;
            this.state_0 = 18;
            continue;
          case 14:
            var string_0 = this.result_0;
            var tmp$_3;
            var assignments = this.local$tmp$_4.decodeFromString_awif5v$(Kotlin.isType(tmp$_3 = serializer(this.local$tmp$_4.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(RoleTuple), [], false))], false)), KSerializer) ? tmp$_3 : throwCCE(), string_0);
            var destination_0 = ArrayList_init(collectionSizeOrDefault(assignments, 10));
            var tmp$_9;
            tmp$_9 = assignments.iterator();
            while (tmp$_9.hasNext()) {
              var item_0 = tmp$_9.next();
              destination_0.add_11rb$(item_0.toArray());
            }

            this.local$tmp$_6 = destination_0;
            this.state_0 = 18;
            continue;
          case 15:
            var string_1 = this.result_0;
            var tmp$_10;
            var files = this.local$tmp$_3.decodeFromString_awif5v$(Kotlin.isType(tmp$_10 = serializer(this.local$tmp$_3.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(File), [], false))], false)), KSerializer) ? tmp$_10 : throwCCE(), string_1);
            var destination_1 = ArrayList_init(collectionSizeOrDefault(files, 10));
            var tmp$_11;
            tmp$_11 = files.iterator();
            while (tmp$_11.hasNext()) {
              var item_1 = tmp$_11.next();
              destination_1.add_11rb$(item_1.toArray());
            }

            this.local$tmp$_6 = destination_1;
            this.state_0 = 18;
            continue;
          case 16:
            var string_2 = this.result_0;
            var tmp$_12;
            var roles = this.local$tmp$_2.decodeFromString_awif5v$(Kotlin.isType(tmp$_12 = serializer(this.local$tmp$_2.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(Role), [], false))], false)), KSerializer) ? tmp$_12 : throwCCE(), string_2);
            var destination_2 = ArrayList_init(collectionSizeOrDefault(roles, 10));
            var tmp$_13;
            tmp$_13 = roles.iterator();
            while (tmp$_13.hasNext()) {
              var item_2 = tmp$_13.next();
              destination_2.add_11rb$(item_2.toArray());
            }

            this.local$tmp$_6 = destination_2;
            this.state_0 = 18;
            continue;
          case 17:
            var string_3 = this.result_0;
            var tmp$_14;
            var users = this.local$tmp$_1.decodeFromString_awif5v$(Kotlin.isType(tmp$_14 = serializer(this.local$tmp$_1.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(User), [], false))], false)), KSerializer) ? tmp$_14 : throwCCE(), string_3);
            var destination_3 = ArrayList_init(collectionSizeOrDefault(users, 10));
            var tmp$_15;
            tmp$_15 = users.iterator();
            while (tmp$_15.hasNext()) {
              var item_3 = tmp$_15.next();
              destination_3.add_11rb$(item_3.toArray());
            }

            this.local$tmp$_6 = destination_3;
            this.state_0 = 18;
            continue;
          case 18:
            this.state_0 = 19;
            continue;
          case 19:
            this.state_0 = 20;
            continue;
          case 20:
            return this.local$tmp$_6;
          case 21:
            throw this.exception_0;
          default:this.state_0 = 21;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 21) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  CloudContent.prototype.getElements_0 = function (endpoint_0, errorCode_0, type_0, continuation_0, suspended) {
    var instance = new Coroutine$getElements_0_0(this, endpoint_0, errorCode_0, type_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  CloudContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloudContent',
    interfaces: [RComponent]
  };
  function cloudContent$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function cloudContent($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(CloudContent), cloudContent$lambda(handler));
  }
  function styledDiv$lambda_7(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledImg$lambda(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf_1('class', closure$classes), it);
    };
  }
  function post$lambda_0($receiver) {
    return Unit;
  }
  function logger$lambda_12() {
    return Unit;
  }
  var logger_12;
  function Login() {
    RComponent_init(this);
  }
  function Login$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.variant = 'h6';
    $receiver.id = 'login';
    $receiver.component = 'div';
    return Unit;
  }
  function Login$render$lambda$lambda$lambda($receiver) {
    $receiver.attrs_slhiwc$(Login$render$lambda$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$('Login to use CryptoAC');
    return Unit;
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Login) {
    return function (method, endpoint, values, f) {
      this$Login.submitLogin_0(method, endpoint, values);
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda_0(this$Login, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var this$Login_0 = this$Login;
      $receiver_0.attrs;
      $receiver.handleChangeBackdropOpen = this$Login_0.props.handleChangeBackdropOpen;
      $receiver.handleDisplayCryptoACAlert = this$Login_0.props.handleDisplayAlert;
      $receiver.submitButtonText = 'Login';
      $receiver.method = HttpMethod.Companion.Post;
      $receiver.endpoint = API_getInstance().LOGIN;
      $receiver.submit = Login$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Login_0);
      $receiver.cryptoACFormFields = listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text, void 0, void 0, 'darkTextField')));
      return Unit;
    };
  }
  function Login$render$lambda$lambda(this$Login) {
    return function ($receiver) {
      $receiver.invoke_eb8iu4$($module$_material_ui_core.Typography, Login$render$lambda$lambda$lambda);
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_7);
      var this$Login_0 = this$Login;
      var $receiver_1 = $receiver_0.css;
      set_marginLeft($receiver_1, get_pct(25));
      set_marginRight($receiver_1, get_pct(25));
      cryptoACForm($receiver_0, Login$render$lambda$lambda$lambda$lambda_0(this$Login_0, $receiver_0));
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  Login.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_7);
    var $receiver_1 = $receiver_0.css;
    set_textAlign($receiver_1, TextAlign.center);
    set_marginTop($receiver_1, get_px(10));
    set_paddingBottom($receiver_1, get_px(10));
    $receiver_0.invoke_eb8iu4$($module$_material_ui_core.Paper, Login$render$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledImg$lambda(null, null));
    set_maxWidth($receiver_0_1.css, get_pct(100));
    var $receiver_2 = $receiver_0_1.attrs;
    var tmp$;
    switch (this.props.coreType.name) {
      case 'RBAC_CLOUD':
        tmp$ = 'background_cloud.jpg';
        break;
      case 'RBAC_MQTT':
        tmp$ = 'background_mqtt.jpg';
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    $receiver_2.src = tmp$;
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    $receiver.child_52psg1$($receiver_0_0.create());
  };
  function Login$submitLogin$lambda(closure$method, closure$endpoint) {
    return function () {
      return 'Submitting CryptoAC login form, method ' + closure$method + ', endpoint ' + closure$endpoint;
    };
  }
  function Login$submitLogin$lambda$lambda(closure$values) {
    return function ($receiver) {
      contentType($receiver, ContentType.Application.FormUrlEncoded);
      $receiver.body = formUrlEncode(toList(closure$values));
      return Unit;
    };
  }
  function Login$submitLogin$lambda$lambda_0(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Login$submitLogin$lambda$lambda_1(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Login$submitLogin$lambda$lambda_2(closure$e) {
    return function () {
      return 'Error during login (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Login$submitLogin$lambda(this$Login_0, closure$endpoint_0, closure$values_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 14;
    this.local$this$Login = this$Login_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$values = closure$values_0;
    this.local$response = void 0;
    this.local$response_0 = void 0;
  }
  Coroutine$Login$submitLogin$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login$submitLogin$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login$submitLogin$lambda.prototype.constructor = Coroutine$Login$submitLogin$lambda;
  Coroutine$Login$submitLogin$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 11;
            var $receiver_0 = this.local$this$Login.props.httpClient;
            var urlString = this.local$closure$endpoint;
            var block = Login$submitLogin$lambda$lambda(this.local$closure$values);
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod_0.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, urlString);
            block($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(HttpResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, HttpResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 8;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 6;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, HttpResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 11;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 7;
            continue;
          case 4:
            this.finallyPath_0 = [11];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 11;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, HttpResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.result_0;
            this.local$response_0 = this.result_0;
            var tmp$_1;
            var tmp$_2 = this.local$response_0.call;
            var typeInfo$result_0_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, getKClass(OutcomeCode), createKType(getKClass(OutcomeCode), [], false));
              } catch (__0) {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, getKClass(OutcomeCode), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 9;
            this.result_0 = tmp$_2.receive_qi9ur9$(typeInfo$result_0_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.result_0 = Kotlin.isType(tmp$_1 = this.result_0, OutcomeCode) ? tmp$_1 : throwCCE();
            var code = this.result_0;
            var status = this.local$response_0.status;
            if (status != null ? status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_12.info_nq59yw$(Login$submitLogin$lambda$lambda_0(status, code));
              this.local$this$Login.props.handleChangeBackdropOpen(false);
              this.local$this$Login.props.handleChangeUserIsLogged(true);
              this.local$this$Login.props.handleChangeUsername(ensureNotNull(this.local$closure$values.get_11rb$(SERVER_getInstance().USERNAME)));
              return this.local$this$Login.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance()), Unit;
            } else {
              logger_12.warn_nq59yw$(Login$submitLogin$lambda$lambda_1(status, code));
              this.local$this$Login.props.handleChangeBackdropOpen(false);
              this.local$this$Login.props.handleChangeUserIsLogged(false);
              this.local$this$Login.props.handleChangeUsername(null);
              return this.local$this$Login.props.handleDisplayAlert(code, CryptoACAlertSeverity$ERROR_getInstance()), Unit;
            }

          case 10:
            this.exceptionState_0 = 14;
            this.state_0 = 13;
            continue;
          case 11:
            this.exceptionState_0 = 14;
            var e = this.exception_0;
            if (Kotlin.isType(e, Error_0)) {
              this.local$this$Login.props.handleChangeBackdropOpen(false);
              logger_12.error_nq59yw$(Login$submitLogin$lambda$lambda_2(e));
              console.log(e);
              return this.local$this$Login.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
            } else {
              throw e;
            }

          case 12:
            this.state_0 = 13;
            continue;
          case 13:
            return;
          case 14:
            throw this.exception_0;
          default:this.state_0 = 14;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 14) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Login$submitLogin$lambda_0(this$Login_0, closure$endpoint_0, closure$values_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Login$submitLogin$lambda(this$Login_0, closure$endpoint_0, closure$values_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Login.prototype.submitLogin_0 = function (method, endpoint, values) {
    logger_12.info_nq59yw$(Login$submitLogin$lambda(method, endpoint));
    this.props.handleChangeBackdropOpen(true);
    launch(MainScope(), void 0, void 0, Login$submitLogin$lambda_0(this, endpoint, values));
  };
  Login.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Login',
    interfaces: [RComponent]
  };
  function login$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function login($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(Login), login$lambda(handler));
  }
  function styledSub$lambda(it) {
    return new SUB_init(html.emptyMap, it);
  }
  function styledP$lambda(it) {
    return new P_init(html.emptyMap, it);
  }
  function styledDiv$lambda_8(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledSpan$lambda(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function styledA$lambda(closure$href, closure$target) {
    return function (it) {
      return new A_init(attributesMapOf_0(['href', closure$href, 'target', closure$target]), it);
    };
  }
  function post$lambda_1($receiver) {
    return Unit;
  }
  function patch$lambda($receiver) {
    return Unit;
  }
  function submitFormWithBinaryData$lambda($receiver) {
    return Unit;
  }
  function delete$lambda($receiver) {
    return Unit;
  }
  function get$lambda_2($receiver) {
    return Unit;
  }
  function logger$lambda_13() {
    return Unit;
  }
  var logger_13;
  function Sidebar() {
    RComponent_init(this);
    this.adminCryptoACFormsRBACCloud_0 = listOf([new CryptoACFormData('add_user', 'Add User', $module$react_icons_fa.FaUserPlus, API_getInstance().PROXY + API_getInstance().USERS, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text))), Sidebar$adminCryptoACFormsRBACCloud$lambda(this)), new CryptoACFormData('add_role', 'Add Role', $module$react_icons_fa.FaUserSecret, API_getInstance().PROXY + API_getInstance().ROLES, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text))), Sidebar$adminCryptoACFormsRBACCloud$lambda_0(this)), new CryptoACFormData('assign_user_to_role', 'Assign User to Role', $module$react_icons_fa.FaUserFriends, API_getInstance().PROXY + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text))]), Sidebar$adminCryptoACFormsRBACCloud$lambda_1(this)), new CryptoACFormData('assign_permission_to_role', 'Assign Permission to Role', $module$react_icons_fa.FaUserShield, API_getInstance().PROXY + API_getInstance().PERMISSIONS, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType.radio, listOf([PermissionType$READ_getInstance().toString(), PermissionType$READWRITE_getInstance().toString()]), PermissionType$READ_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACCloud$lambda_2(this), true), new CryptoACFormData('delete_user', 'Delete User', $module$react_icons_fa.FaUserMinus, API_getInstance().PROXY + API_getInstance().USERS, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text))), Sidebar$adminCryptoACFormsRBACCloud$lambda_3(this)), new CryptoACFormData('delete_role', 'Delete Role', $module$react_icons_fa.FaUserNinja, API_getInstance().PROXY + API_getInstance().ROLES, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text))), Sidebar$adminCryptoACFormsRBACCloud$lambda_4(this)), new CryptoACFormData('delete_file', 'Delete File', $module$react_icons_fa.FaFileExcel, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType.text))), Sidebar$adminCryptoACFormsRBACCloud$lambda_5(this)), new CryptoACFormData('revoke_user_from_role', 'Revoke User from Role', $module$react_icons_fa.FaUserTimes, API_getInstance().PROXY + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text))]), Sidebar$adminCryptoACFormsRBACCloud$lambda_6(this)), new CryptoACFormData('revoke_permission_from_role', 'Revoke Permission from Role', $module$react_icons_fa.FaUserLock, API_getInstance().PROXY + API_getInstance().PERMISSIONS, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType.radio, listOf([PermissionType$READWRITE_getInstance().toString(), PermissionType$WRITE_getInstance().toString()]), PermissionType$READWRITE_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACCloud$lambda_7(this), true)]);
    this.userCryptoACFormsRBACCloud_0 = listOf([new CryptoACFormData('add_file', 'Add File', $module$react_icons_fa.FaFileMedical, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, SERVER_getInstance().FILE_NAME, InputType.file)), listOf_0(new CryptoACFormField(SERVER_getInstance().ENFORCEMENT, SERVER_getInstance().ENFORCEMENT, InputType.radio, listOf([EnforcementType$COMBINED_getInstance().toString(), EnforcementType$TRADITIONAL_getInstance().toString()]), EnforcementType$COMBINED_getInstance().toString()))]), Sidebar$userCryptoACFormsRBACCloud$lambda(this)), new CryptoACFormData('write_file', 'Write File', $module$react_icons_fa.FaFileSignature, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Patch, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, SERVER_getInstance().FILE_NAME, InputType.file))), Sidebar$userCryptoACFormsRBACCloud$lambda_0(this)), new CryptoACFormData('read_file', 'Read File', $module$react_icons_fa.FaFileDownload, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Get, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType.text))), Sidebar$userCryptoACFormsRBACCloud$lambda_1(this))]);
    this.adminCryptoACFormsRBACMQTT_0 = listOf([new CryptoACFormData('add_user', 'Add User', $module$react_icons_fa.FaUserPlus, API_getInstance().PROXY + API_getInstance().USERS, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text))), Sidebar$adminCryptoACFormsRBACMQTT$lambda(this)), new CryptoACFormData('add_role', 'Add Role', $module$react_icons_fa.FaUserSecret, API_getInstance().PROXY + API_getInstance().ROLES, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text))), Sidebar$adminCryptoACFormsRBACMQTT$lambda_0(this)), new CryptoACFormData('add_file', 'Add Topic', $module$react_icons_fa.FaFileMedical, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, SERVER_getInstance().FILE_NAME, InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().ENFORCEMENT, SERVER_getInstance().ENFORCEMENT, InputType.radio, listOf([EnforcementType$COMBINED_getInstance().toString(), EnforcementType$TRADITIONAL_getInstance().toString()]), EnforcementType$COMBINED_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_1(this)), new CryptoACFormData('assign_user_to_role', 'Assign User to Role', $module$react_icons_fa.FaUserFriends, API_getInstance().PROXY + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_2(this)), new CryptoACFormData('assign_permission_to_role', 'Assign Permission to Role', $module$react_icons_fa.FaUserShield, API_getInstance().PROXY + API_getInstance().PERMISSIONS, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType.radio, listOf([PermissionType$READ_getInstance().toString(), PermissionType$READWRITE_getInstance().toString()]), PermissionType$READ_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_3(this), true), new CryptoACFormData('delete_user', 'Delete User', $module$react_icons_fa.FaUserMinus, API_getInstance().PROXY + API_getInstance().USERS, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text))), Sidebar$adminCryptoACFormsRBACMQTT$lambda_4(this)), new CryptoACFormData('delete_role', 'Delete Role', $module$react_icons_fa.FaUserNinja, API_getInstance().PROXY + API_getInstance().ROLES, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text))), Sidebar$adminCryptoACFormsRBACMQTT$lambda_5(this)), new CryptoACFormData('delete_file', 'Delete Topic', $module$react_icons_fa.FaFileExcel, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType.text))), Sidebar$adminCryptoACFormsRBACMQTT$lambda_6(this)), new CryptoACFormData('revoke_user_from_role', 'Revoke User from Role', $module$react_icons_fa.FaUserTimes, API_getInstance().PROXY + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_7(this)), new CryptoACFormData('revoke_permission_from_role', 'Revoke Permission from Role', $module$react_icons_fa.FaUserLock, API_getInstance().PROXY + API_getInstance().PERMISSIONS, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType.text)), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType.radio, listOf([PermissionType$READWRITE_getInstance().toString(), PermissionType$WRITE_getInstance().toString()]), PermissionType$READWRITE_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_8(this), true)]);
    this.userCryptoACFormsRBACMQTT_0 = listOf([new CryptoACFormData('write_file', 'Publish to Topic', $module$react_icons_fa.FaFileSignature, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Patch, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf([new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType.text), new CryptoACFormField(SERVER_getInstance().FILE_CONTENT, 'Message', InputType.text)])), Sidebar$userCryptoACFormsRBACMQTT$lambda(this)), new CryptoACFormData('read_file', 'Read from Topic', $module$react_icons_fa.FaFileDownload, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Get, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType.text))), Sidebar$userCryptoACFormsRBACMQTT$lambda_0(this))]);
  }
  function Sidebar$render$lambda$lambda($receiver) {
    return Unit;
  }
  function Sidebar$render$lambda$lambda_0($receiver) {
    return Unit;
  }
  function Sidebar$render$lambda$lambda_1(this$Sidebar) {
    return function ($receiver) {
      $receiver.collapsed = this$Sidebar.props.proSidebarCollapsed;
      $receiver.collapsedWidth = this$Sidebar.props.collapsedWidth;
      $receiver.width = this$Sidebar.props.width;
      $receiver.image = this$Sidebar.props.image;
      $receiver.breakpoint = this$Sidebar.props.breakpoint;
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda(this$Sidebar) {
    return function (f) {
      this$Sidebar.toggleDisplayCoreTypeRadio_0();
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Sidebar) {
    return function (it) {
      this$Sidebar.props.handleToggleSidebar();
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Sidebar, closure$faCaretLeftIcon, closure$faCaretRightIcon) {
    return function ($receiver) {
      var tmp$;
      $receiver.color = 'primary';
      $receiver.onClick = Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Sidebar);
      if (!this$Sidebar.props.proSidebarCollapsed) {
        tmp$ = ensureNotNull(closure$faCaretLeftIcon.v);
      } else {
        tmp$ = ensureNotNull(closure$faCaretRightIcon.v);
      }
      $receiver.children = tmp$;
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda_0(this$Sidebar, closure$faCaretLeftIcon, closure$faCaretRightIcon) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Sidebar, closure$faCaretLeftIcon, closure$faCaretRightIcon));
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Sidebar) {
    return function (event) {
      var tmp$;
      this$Sidebar.props.handleChangeCoreType(CoreType$valueOf((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value));
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda_1(this$Sidebar) {
    return function ($receiver) {
      $receiver.name = 'coreType';
      $receiver.row = false;
      $receiver.onChange = Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Sidebar);
      var $receiver_0 = CoreType$values();
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(new CryptoACRadioOption(item.toString(), item.toString(), 'primary'));
      }
      $receiver.options = destination;
      $receiver.defaultValue = this$Sidebar.props.coreType.toString();
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda_2(this$Sidebar, closure$faCaretLeftIcon, closure$faCaretRightIcon) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_8);
      var this$Sidebar_0 = this$Sidebar;
      var closure$faCaretLeftIcon_0 = closure$faCaretLeftIcon;
      var closure$faCaretRightIcon_0 = closure$faCaretRightIcon;
      var $receiver_1 = $receiver_0.css;
      set_display($receiver_1, Display.block);
      set_alignItems($receiver_1, Align.center);
      set_justifyContent($receiver_1, JustifyContent.center);
      set_textAlign($receiver_1, TextAlign.center);
      set_textTransform($receiver_1, TextTransform.uppercase);
      set_fontWeight($receiver_1, FontWeight.Companion.bold);
      set_letterSpacing($receiver_1, get_px(2));
      set_overflow($receiver_1, Overflow.hidden);
      set_textOverflow($receiver_1, TextOverflow.ellipsis);
      set_whiteSpace($receiver_1, WhiteSpace.nowrap);
      if (!this$Sidebar_0.props.proSidebarCollapsed) {
        padding($receiver_1, get_px(24));
      }var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledP$lambda);
      var $receiver_2 = $receiver_0_0.css;
      set_fontSize($receiver_2, get_px(18));
      set_display($receiver_2, Display.inline);
      set_onClickFunction($receiver_0_0.attrs, Sidebar$render$lambda$lambda$lambda$lambda$lambda(this$Sidebar_0));
      $receiver_0_0.unaryPlus_pdl1vz$(!this$Sidebar_0.props.proSidebarCollapsed ? 'CryptoAC' : '');
      var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSub$lambda);
      $receiver_0_1.domProps.className = 'badge red';
      var $receiver_3 = $receiver_0_1.css;
      set_marginLeft($receiver_3, !this$Sidebar_0.props.proSidebarCollapsed ? get_px(5) : get_px(0));
      set_fontSize($receiver_3, get_px(10));
      set_cursor($receiver_3, Cursor.pointer);
      $receiver_0_1.unaryPlus_pdl1vz$(this$Sidebar_0.props.coreType.toString());
      $receiver_0_0.child_52psg1$($receiver_0_1.create());
      $receiver_0.child_52psg1$($receiver_0_0.create());
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_8);
      set_display($receiver_0_2.css, !this$Sidebar_0.props.proSidebarCollapsed ? Display.inline : Display.block);
      $receiver_0_2.invoke_eb8iu4$($module$_material_ui_core.IconButton, Sidebar$render$lambda$lambda$lambda$lambda$lambda_0(this$Sidebar_0, closure$faCaretLeftIcon_0, closure$faCaretRightIcon_0));
      $receiver_0.child_52psg1$($receiver_0_2.create());
      var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_8);
      var $receiver_4 = $receiver_0_3.css;
      var tmp$;
      if (!this$Sidebar_0.state.displayCoreTypeRadio || this$Sidebar_0.props.proSidebarCollapsed) {
        tmp$ = Display.none;
      } else {
        tmp$ = Display.initial;
      }
      set_display($receiver_4, tmp$);
      cryptoACRadioGroup($receiver_0_3, Sidebar$render$lambda$lambda$lambda$lambda$lambda_1(this$Sidebar_0));
      $receiver_0.child_52psg1$($receiver_0_3.create());
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$cryptoACFormData, closure$subMenuIcon) {
    return function ($receiver) {
      $receiver.title = closure$cryptoACFormData.submitButtonText;
      $receiver.icon = ensureNotNull(closure$subMenuIcon.v);
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cryptoACFormData, this$, this$Sidebar) {
    return function ($receiver) {
      this$.submitButtonText = closure$cryptoACFormData.submitButtonText;
      this$.endpoint = closure$cryptoACFormData.endpoint;
      this$.coreType = closure$cryptoACFormData.coreType;
      this$.method = closure$cryptoACFormData.method;
      this$.cryptoACFormFields = closure$cryptoACFormData.cryptoACFormFields;
      this$.submit = closure$cryptoACFormData.submit;
      this$.handleChangeBackdropOpen = this$Sidebar.props.handleChangeBackdropOpen;
      this$.handleDisplayCryptoACAlert = this$Sidebar.props.handleDisplayAlert;
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$cryptoACFormData, this$Sidebar, this$) {
    return function ($receiver) {
      this$.attrs_slhiwc$(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cryptoACFormData, $receiver, this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda_3(closure$cryptoACFormData, closure$subMenuIcon, this$Sidebar) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$cryptoACFormData, closure$subMenuIcon));
      cryptoACForm($receiver, Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$cryptoACFormData, this$Sidebar, $receiver));
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda(closure$cryptoACFormData, closure$subMenuIcon, this$Sidebar) {
    return function ($receiver) {
      $receiver.attrs.iconShape = 'circle';
      $receiver.invoke_eb8iu4$($module$react_pro_sidebar.SubMenu, Sidebar$render$lambda$lambda$lambda$lambda$lambda_3(closure$cryptoACFormData, closure$subMenuIcon, this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda_3(this$Sidebar) {
    return function ($receiver) {
      var tmp$;
      if (this$Sidebar.props.userIsLogged && this$Sidebar.props.userHasProfile) {
        switch (this$Sidebar.props.coreType.name) {
          case 'RBAC_CLOUD':
            tmp$ = this$Sidebar.props.userIsAdmin ? plus_0(this$Sidebar.adminCryptoACFormsRBACCloud_0, this$Sidebar.userCryptoACFormsRBACCloud_0) : this$Sidebar.userCryptoACFormsRBACCloud_0;
            break;
          case 'RBAC_MQTT':
            tmp$ = this$Sidebar.props.userIsAdmin ? plus_0(this$Sidebar.adminCryptoACFormsRBACMQTT_0, this$Sidebar.userCryptoACFormsRBACMQTT_0) : this$Sidebar.userCryptoACFormsRBACMQTT_0;
            break;
          default:tmp$ = Kotlin.noWhenBranchMatched();
            break;
        }
        var cryptoACForm = tmp$;
        var tmp$_0;
        tmp$_0 = cryptoACForm.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          var this$Sidebar_0 = this$Sidebar;
          var subMenuIcon = {v: null};
          var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_8);
          set_display($receiver_0.css, Display.none);
          subMenuIcon.v = $receiver_0.invoke_eb8iu4$(element.icon, Sidebar$render$lambda$lambda$lambda$lambda$lambda_2);
          $receiver.child_52psg1$($receiver_0.create());
          $receiver.key = element.key;
          $receiver.invoke_eb8iu4$($module$react_pro_sidebar.Menu, Sidebar$render$lambda$lambda$lambda$lambda(element, subMenuIcon, this$Sidebar_0));
          if (element.divider) {
            var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_8);
            set_borderBottom($receiver_0_0.css, '1px solid rgba(173, 173, 173, 0.2)');
            $receiver.child_52psg1$($receiver_0_0.create());
          }}
      }return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    set_color($receiver, new Color('#d8d8d8'));
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    return Unit;
  }
  function Sidebar$render$lambda$lambda_4(this$Sidebar) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_8);
      var this$Sidebar_0 = this$Sidebar;
      var $receiver_1 = $receiver_0.css;
      set_display($receiver_1, Display.flex);
      set_alignItems($receiver_1, Align.center);
      set_justifyContent($receiver_1, JustifyContent.center);
      padding_0($receiver_1, get_px(20), get_px(24));
      set_textAlign($receiver_1, TextAlign.center);
      var href = 'https://github.com/stfbk/CryptoAC';
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledA$lambda(href, '_blank'));
      var $receiver_2 = $receiver_0_0.css;
      set_borderRadius($receiver_2, get_px(40));
      set_background($receiver_2, 'rgba(255, 255, 255, 0.05)');
      set_color($receiver_2, new Color('#adadad'));
      set_textDecoration($receiver_2, TextDecoration.Companion.none);
      margin($receiver_2, get_px(0));
      set_height($receiver_2, get_px(35));
      set_display($receiver_2, Display.flex);
      set_alignItems($receiver_2, Align.center);
      set_justifyContent($receiver_2, JustifyContent.center);
      set_textOverflow($receiver_2, TextOverflow.ellipsis);
      set_overflow($receiver_2, Overflow.hidden);
      $receiver_2.hover_sa4rfh$(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_3);
      if (!this$Sidebar_0.props.proSidebarCollapsed) {
        padding_0($receiver_2, get_px(1), get_px(15));
      }$receiver_0_0.invoke_eb8iu4$($module$react_icons_fa.FaGithub, Sidebar$render$lambda$lambda$lambda$lambda$lambda_4);
      if (!this$Sidebar_0.props.proSidebarCollapsed) {
        var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda);
        var $receiver_3 = $receiver_0_1.css;
        set_marginLeft($receiver_3, get_px(5));
        set_fontSize($receiver_3, get_px(13));
        $receiver_0_1.unaryPlus_pdl1vz$('View source');
        $receiver_0_0.child_52psg1$($receiver_0_1.create());
      }$receiver_0.child_52psg1$($receiver_0_0.create());
      $receiver.child_52psg1$($receiver_0.create());
      return Unit;
    };
  }
  function Sidebar$render$lambda(this$Sidebar, closure$faCaretLeftIcon, closure$faCaretRightIcon) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(Sidebar$render$lambda$lambda_1(this$Sidebar));
      $receiver.invoke_eb8iu4$($module$react_pro_sidebar.SidebarHeader, Sidebar$render$lambda$lambda_2(this$Sidebar, closure$faCaretLeftIcon, closure$faCaretRightIcon));
      $receiver.invoke_eb8iu4$($module$react_pro_sidebar.SidebarContent, Sidebar$render$lambda$lambda_3(this$Sidebar));
      $receiver.invoke_eb8iu4$($module$react_pro_sidebar.SidebarFooter, Sidebar$render$lambda$lambda_4(this$Sidebar));
      return Unit;
    };
  }
  Sidebar.prototype.render_ss14n$ = function ($receiver) {
    var faCaretLeftIcon = {v: null};
    var faCaretRightIcon = {v: null};
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_8);
    set_display($receiver_0.css, Display.none);
    faCaretLeftIcon.v = $receiver_0.invoke_eb8iu4$($module$react_icons_fa.FaCaretLeft, Sidebar$render$lambda$lambda);
    faCaretRightIcon.v = $receiver_0.invoke_eb8iu4$($module$react_icons_fa.FaCaretRight, Sidebar$render$lambda$lambda_0);
    $receiver.child_52psg1$($receiver_0.create());
    $receiver.invoke_eb8iu4$($module$react_pro_sidebar.ProSidebar, Sidebar$render$lambda(this, faCaretLeftIcon, faCaretRightIcon));
  };
  function Sidebar$init$lambda() {
    return 'Initializing the state of the Sidebar component';
  }
  Sidebar.prototype.init_bc6fkx$ = function ($receiver) {
    logger_13.info_nq59yw$(Sidebar$init$lambda);
    $receiver.displayCoreTypeRadio = false;
  };
  function Sidebar$toggleDisplayCoreTypeRadio$lambda(closure$display) {
    return function () {
      return "Setting the 'displayCoreTypeRadio' state to " + closure$display;
    };
  }
  function Sidebar$toggleDisplayCoreTypeRadio$lambda_0(closure$display) {
    return function ($receiver) {
      $receiver.displayCoreTypeRadio = closure$display;
      return Unit;
    };
  }
  Sidebar.prototype.toggleDisplayCoreTypeRadio_0 = function () {
    var display = !this.state.displayCoreTypeRadio;
    logger_13.info_nq59yw$(Sidebar$toggleDisplayCoreTypeRadio$lambda(display));
    setState(this, Sidebar$toggleDisplayCoreTypeRadio$lambda_0(display));
  };
  function Sidebar$submitCryptoACFormUrlEncoded$lambda(closure$method, closure$endpoint) {
    return function () {
      return 'Submitting CryptoAC form (method ' + closure$method + ', endpoint ' + closure$endpoint + ') with the following values:';
    };
  }
  function Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda(closure$it) {
    return function () {
      return '- key: ' + closure$it.key + ', value: ' + closure$it.value;
    };
  }
  function Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_0(closure$values) {
    return function ($receiver) {
      contentType($receiver, ContentType.Application.FormUrlEncoded);
      $receiver.body = formUrlEncode(toList(closure$values));
      return Unit;
    };
  }
  function Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_1(closure$values) {
    return function ($receiver) {
      contentType($receiver, ContentType.Application.FormUrlEncoded);
      $receiver.body = formUrlEncode(toList(closure$values));
      return Unit;
    };
  }
  function Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_2(closure$method) {
    return function () {
      return 'Method ' + closure$method + ' is not supported';
    };
  }
  function Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_3(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Sidebar$submitCryptoACFormUrlEncoded$lambda(closure$method_0, closure$callback_0, this$Sidebar_0, closure$endpoint_0, closure$values_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 22;
    this.local$closure$method = closure$method_0;
    this.local$closure$callback = closure$callback_0;
    this.local$this$Sidebar = this$Sidebar_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$values = closure$values_0;
    this.local$response_0 = void 0;
    this.local$response = void 0;
  }
  Coroutine$Sidebar$submitCryptoACFormUrlEncoded$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sidebar$submitCryptoACFormUrlEncoded$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sidebar$submitCryptoACFormUrlEncoded$lambda.prototype.constructor = Coroutine$Sidebar$submitCryptoACFormUrlEncoded$lambda;
  Coroutine$Sidebar$submitCryptoACFormUrlEncoded$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 19;
            if ((this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Post) : null) || (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Patch) : null)) {
              if (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Post) : null) {
                var $receiver_0 = this.local$this$Sidebar.props.httpClient;
                var urlString = this.local$closure$endpoint;
                var block = Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_0(this.local$closure$values);
                var host_0;
                var body_0;
                host_0 = 'localhost';
                body_0 = utils.EmptyContent;
                var $receiver_1 = new HttpRequestBuilder_init();
                url($receiver_1, 'http', host_0, 0, '/');
                $receiver_1.method = HttpMethod_0.Companion.Post;
                $receiver_1.body = body_0;
                takeFrom($receiver_1.url, urlString);
                block($receiver_1);
                var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
                var tmp$_4, tmp$_5, tmp$_6;
                tmp$_4 = getKClass(HttpResponse);
                if (equals(tmp$_4, getKClass(HttpStatement_init))) {
                  this.result_0 = Kotlin.isType(tmp$_5 = $this_0, HttpResponse) ? tmp$_5 : throwCCE();
                  this.state_0 = 16;
                  continue;
                } else {
                  if (equals(tmp$_4, getKClass(HttpResponse))) {
                    this.state_0 = 14;
                    this.result_0 = $this_0.execute(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  } else {
                    this.state_0 = 9;
                    this.result_0 = $this_0.executeUnsafe(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  }
                }
              } else {
                var $receiver_0_0 = this.local$this$Sidebar.props.httpClient;
                var urlString_0 = this.local$closure$endpoint;
                var block_0 = Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_1(this.local$closure$values);
                var host_0_0;
                var body_0_0;
                host_0_0 = 'localhost';
                body_0_0 = utils.EmptyContent;
                var $receiver_1_0 = new HttpRequestBuilder_init();
                url($receiver_1_0, 'http', host_0_0, 0, '/');
                $receiver_1_0.method = HttpMethod_0.Companion.Patch;
                $receiver_1_0.body = body_0_0;
                takeFrom($receiver_1_0.url, urlString_0);
                block_0($receiver_1_0);
                var $this_0_0 = new HttpStatement_init($receiver_1_0, $receiver_0_0);
                var tmp$_4_0, tmp$_5_0, tmp$_6_0;
                tmp$_4_0 = getKClass(HttpResponse);
                if (equals(tmp$_4_0, getKClass(HttpStatement_init))) {
                  this.result_0 = Kotlin.isType(tmp$_5_0 = $this_0_0, HttpResponse) ? tmp$_5_0 : throwCCE();
                  this.state_0 = 8;
                  continue;
                } else {
                  if (equals(tmp$_4_0, getKClass(HttpResponse))) {
                    this.state_0 = 6;
                    this.result_0 = $this_0_0.execute(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  } else {
                    this.state_0 = 1;
                    this.result_0 = $this_0_0.executeUnsafe(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  }
                }
              }
            } else {
              this.local$this$Sidebar.props.handleChangeBackdropOpen(false);
              logger_13.error_nq59yw$(Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_2(this.local$closure$method));
              return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, HttpResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 19;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 7;
            continue;
          case 4:
            this.finallyPath_0 = [19];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 19;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.result_0 = Kotlin.isType(tmp$_6_0 = this.result_0, HttpResponse) ? tmp$_6_0 : throwCCE();
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.result_0;
            return this.local$closure$callback(this.result_0, this.local$closure$values), Unit;
          case 9:
            this.local$response_0 = this.result_0;
            this.exceptionState_0 = 12;
            var tmp$_7_0;
            var tmp$_8_0 = this.local$response_0.call;
            var typeInfo$result_0_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], false));
              } catch (__0) {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 10;
            this.result_0 = tmp$_8_0.receive_qi9ur9$(typeInfo$result_0_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.result_0 = Kotlin.isType(tmp$_7_0 = this.result_0, HttpResponse) ? tmp$_7_0 : throwCCE();
            this.exceptionState_0 = 19;
            this.finallyPath_0 = [11];
            this.state_0 = 13;
            continue;
          case 11:
            this.state_0 = 15;
            continue;
          case 12:
            this.finallyPath_0 = [19];
            this.state_0 = 13;
            continue;
          case 13:
            this.exceptionState_0 = 19;
            complete(this.local$response_0);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 14:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, HttpResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 15;
            continue;
          case 15:
            this.state_0 = 16;
            continue;
          case 16:
            this.result_0;
            return this.local$closure$callback(this.result_0, this.local$closure$values), Unit;
          case 17:
            this.state_0 = 18;
            continue;
          case 18:
            this.exceptionState_0 = 22;
            this.state_0 = 21;
            continue;
          case 19:
            this.exceptionState_0 = 22;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              this.local$this$Sidebar.props.handleChangeBackdropOpen(false);
              logger_13.error_nq59yw$(Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_3(e));
              console.log(e);
              return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
            } else {
              throw e;
            }

          case 20:
            this.state_0 = 21;
            continue;
          case 21:
            return;
          case 22:
            throw this.exception_0;
          default:this.state_0 = 22;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 22) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Sidebar$submitCryptoACFormUrlEncoded$lambda_0(closure$method_0, closure$callback_0, this$Sidebar_0, closure$endpoint_0, closure$values_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sidebar$submitCryptoACFormUrlEncoded$lambda(closure$method_0, closure$callback_0, this$Sidebar_0, closure$endpoint_0, closure$values_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Sidebar.prototype.submitCryptoACFormUrlEncoded_0 = function (method, endpoint, values, callback) {
    logger_13.info_nq59yw$(Sidebar$submitCryptoACFormUrlEncoded$lambda(method, endpoint));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_13.info_nq59yw$(Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda(element));
    }
    this.props.handleChangeBackdropOpen(true);
    launch(MainScope(), void 0, void 0, Sidebar$submitCryptoACFormUrlEncoded$lambda_0(method, callback, this, endpoint, values));
  };
  function Sidebar$submitCryptoACFormWithBinaryData$lambda(closure$method, closure$endpoint, closure$files, closure$values) {
    return function () {
      return 'Submitting CryptoAC form, method ' + closure$method + ', endpoint ' + closure$endpoint + ', ' + closure$files.size + ' files' + (closure$values.size > 0 ? ' and the following values:' : '');
    };
  }
  function Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda(closure$it) {
    return function () {
      return '- key: ' + closure$it.key + ', value: ' + closure$it.value;
    };
  }
  function Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda$lambda(closure$method) {
    return function ($receiver) {
      $receiver.method = closure$method;
      return Unit;
    };
  }
  function Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda(closure$callback_0, this$Sidebar_0, closure$endpoint_0, closure$parts_0, closure$method_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 6;
    this.local$closure$callback = closure$callback_0;
    this.local$this$Sidebar = this$Sidebar_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$parts = closure$parts_0;
    this.local$closure$method = closure$method_0;
    this.local$response = void 0;
  }
  Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda;
  Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.local$this$Sidebar.props.httpClient;
            var tmp$_0 = this.local$closure$endpoint;
            var formData_0 = formData(copyToArray(this.local$closure$parts).slice());
            var block = Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda$lambda(this.local$closure$method);
            var $receiver_1 = new HttpRequestBuilder_init();
            $receiver_1.method = HttpMethod_0.Companion.Post;
            $receiver_1.body = new MultiPartFormDataContent_init(formData_0);
            url_0($receiver_1, tmp$_0);
            block($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, tmp$);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(HttpResponse);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, HttpResponse) ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, HttpResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, HttpResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            return this.local$closure$callback(this.result_0);
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda(closure$callback_0, this$Sidebar_0, closure$endpoint_0, closure$parts_0, closure$method_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda(closure$callback_0, this$Sidebar_0, closure$endpoint_0, closure$parts_0, closure$method_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda(closure$fileEntriesUploaded, closure$reader, closure$it, closure$parts, closure$files, closure$callback, this$Sidebar, closure$endpoint, closure$method) {
    return function (f) {
      closure$fileEntriesUploaded.v = closure$fileEntriesUploaded.v + 1 | 0;
      var fileContent = closure$reader.result.toString();
      var tmp$ = closure$it.key;
      var $receiver = new HeadersBuilder_init();
      var closure$it_0 = closure$it;
      $receiver.append_puj7f4$(http.HttpHeaders.ContentDisposition, 'filename=' + closure$it_0.value.name);
      var formPart = new FormPart(tmp$, fileContent, $receiver.build());
      closure$parts.add_11rb$(formPart);
      if (closure$fileEntriesUploaded.v === closure$files.size) {
        launch(MainScope(), void 0, void 0, Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda(closure$callback, this$Sidebar, closure$endpoint, closure$parts, closure$method));
      }return Unit;
    };
  }
  function Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda_0(closure$method) {
    return function () {
      return 'Method ' + closure$method + ' is not supported';
    };
  }
  function Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda_1(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda(closure$method_0, closure$values_0, closure$files_0, closure$callback_0, this$Sidebar_0, closure$endpoint_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$method = closure$method_0;
    this.local$closure$values = closure$values_0;
    this.local$closure$files = closure$files_0;
    this.local$closure$callback = closure$callback_0;
    this.local$this$Sidebar = this$Sidebar_0;
    this.local$closure$endpoint = closure$endpoint_0;
  }
  Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda.prototype.constructor = Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda;
  Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            try {
              if ((this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Post) : null) || (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Patch) : null)) {
                var parts = ArrayList_init_0();
                var tmp$;
                tmp$ = this.local$closure$values.entries.iterator();
                while (tmp$.hasNext()) {
                  var element = tmp$.next();
                  var element_0 = new FormPart(element.key, element.value);
                  parts.add_11rb$(element_0);
                }
                var fileEntriesUploaded = {v: 0};
                var tmp$_0;
                tmp$_0 = this.local$closure$files.entries.iterator();
                while (tmp$_0.hasNext()) {
                  var element_1 = tmp$_0.next();
                  var closure$files = this.local$closure$files;
                  var closure$callback = this.local$closure$callback;
                  var this$Sidebar = this.local$this$Sidebar;
                  var closure$endpoint = this.local$closure$endpoint;
                  var closure$method = this.local$closure$method;
                  var reader = new FileReader();
                  reader.readAsBinaryString(element_1.value);
                  reader.onload = Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda(fileEntriesUploaded, reader, element_1, parts, closure$files, closure$callback, this$Sidebar, closure$endpoint, closure$method);
                }
                return Unit;
              } else {
                this.local$this$Sidebar.props.handleChangeBackdropOpen(false);
                logger_13.error_nq59yw$(Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda_0(this.local$closure$method));
                return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
              }
            } catch (e) {
              if (Kotlin.isType(e, Error_0)) {
                this.local$this$Sidebar.props.handleChangeBackdropOpen(false);
                logger_13.error_nq59yw$(Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda_1(e));
                console.log(e);
                return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
              } else
                throw e;
            }

          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
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
  function Sidebar$submitCryptoACFormWithBinaryData$lambda_0(closure$method_0, closure$values_0, closure$files_0, closure$callback_0, this$Sidebar_0, closure$endpoint_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sidebar$submitCryptoACFormWithBinaryData$lambda(closure$method_0, closure$values_0, closure$files_0, closure$callback_0, this$Sidebar_0, closure$endpoint_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Sidebar.prototype.submitCryptoACFormWithBinaryData_0 = function (method, endpoint, values, files, callback) {
    logger_13.info_nq59yw$(Sidebar$submitCryptoACFormWithBinaryData$lambda(method, endpoint, files, values));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_13.info_nq59yw$(Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda(element));
    }
    this.props.handleChangeBackdropOpen(true);
    launch(MainScope(), void 0, void 0, Sidebar$submitCryptoACFormWithBinaryData$lambda_0(method, values, files, callback, this, endpoint));
  };
  function Sidebar$submitCryptoACFormInNewTab$lambda(closure$method, closure$endpoint, closure$query) {
    return function () {
      return 'Submitting CryptoAC form (method ' + closure$method + ', endpoint ' + closure$endpoint + ', query ' + closure$query + ') with the following values:';
    };
  }
  function Sidebar$submitCryptoACFormInNewTab$lambda$lambda(closure$it) {
    return function () {
      return '- key: ' + closure$it.key + ', value: ' + closure$it.value;
    };
  }
  function Sidebar$submitCryptoACFormInNewTab$lambda$lambda$lambda() {
    return 'Get request successful';
  }
  function Sidebar$submitCryptoACFormInNewTab$lambda$lambda_0(closure$win, this$Sidebar) {
    return function (it) {
      if (equals(ensureNotNull(closure$win).document, undefined)) {
        logger_13.info_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda$lambda$lambda);
        this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance());
      }closure$win.close();
      return Unit;
    };
  }
  function Sidebar$submitCryptoACFormInNewTab$lambda$lambda_1(closure$method) {
    return function () {
      return 'Method ' + closure$method + ' is not supported';
    };
  }
  function Sidebar$submitCryptoACFormInNewTab$lambda$lambda_2(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Sidebar$submitCryptoACFormInNewTab$lambda(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, this$Sidebar_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$method = closure$method_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$query = closure$query_0;
    this.local$closure$values = closure$values_0;
    this.local$this$Sidebar = this$Sidebar_0;
  }
  Coroutine$Sidebar$submitCryptoACFormInNewTab$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sidebar$submitCryptoACFormInNewTab$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sidebar$submitCryptoACFormInNewTab$lambda.prototype.constructor = Coroutine$Sidebar$submitCryptoACFormInNewTab$lambda;
  Coroutine$Sidebar$submitCryptoACFormInNewTab$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            try {
              if (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Get) : null) {
                var $receiver = this.local$closure$endpoint;
                var endIndex = this.local$closure$endpoint.length - 1 | 0;
                var endpointWithParameters = new StringBuilder($receiver.substring(0, endIndex));
                if (this.local$closure$query) {
                  endpointWithParameters.append_pdl1vj$('?');
                  var tmp$;
                  tmp$ = this.local$closure$values.entries.iterator();
                  while (tmp$.hasNext()) {
                    var element = tmp$.next();
                    endpointWithParameters.append_pdl1vj$(element.key).append_pdl1vj$('=').append_pdl1vj$(element.value);
                  }
                } else {
                  var tmp$_0;
                  tmp$_0 = this.local$closure$values.entries.iterator();
                  while (tmp$_0.hasNext()) {
                    var element_0 = tmp$_0.next();
                    endpointWithParameters.append_pdl1vj$('/').append_pdl1vj$(element_0.value);
                  }
                }
                var win = window.open(endpointWithParameters.toString(), '_blank');
                this.local$this$Sidebar.props.handleChangeBackdropOpen(false);
                return win != null && (win.onload = Sidebar$submitCryptoACFormInNewTab$lambda$lambda_0(win, this.local$this$Sidebar)), Unit;
              } else {
                this.local$this$Sidebar.props.handleChangeBackdropOpen(false);
                logger_13.error_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda$lambda_1(this.local$closure$method));
                return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
              }
            } catch (e) {
              if (Kotlin.isType(e, Error_0)) {
                this.local$this$Sidebar.props.handleChangeBackdropOpen(false);
                logger_13.error_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda$lambda_2(e));
                console.log(e);
                return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
              } else
                throw e;
            }

          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
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
  function Sidebar$submitCryptoACFormInNewTab$lambda_0(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, this$Sidebar_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sidebar$submitCryptoACFormInNewTab$lambda(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, this$Sidebar_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Sidebar.prototype.submitCryptoACFormInNewTab_0 = function (method, endpoint, values, query) {
    logger_13.info_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda(method, endpoint, query));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_13.info_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda$lambda(element));
    }
    this.props.handleChangeBackdropOpen(true);
    launch(MainScope(), void 0, void 0, Sidebar$submitCryptoACFormInNewTab$lambda_0(method, endpoint, query, values, this));
  };
  function Sidebar$submitCryptoACForm$lambda(closure$method, closure$endpoint, closure$query) {
    return function () {
      return 'Submitting CryptoAC form (method ' + closure$method + ', endpoint ' + closure$endpoint + ', query ' + closure$query + ') with the following values:';
    };
  }
  function Sidebar$submitCryptoACForm$lambda$lambda(closure$it) {
    return function () {
      return '- key: ' + closure$it.key + ', value: ' + closure$it.value;
    };
  }
  function Sidebar$submitCryptoACForm$lambda$lambda_0(closure$method) {
    return function () {
      return 'Method ' + closure$method + ' is not supported';
    };
  }
  function Sidebar$submitCryptoACForm$lambda$lambda_1(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Sidebar$submitCryptoACForm$lambda(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, closure$callback_0, this$Sidebar_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 23;
    this.local$closure$method = closure$method_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$query = closure$query_0;
    this.local$closure$values = closure$values_0;
    this.local$closure$callback = closure$callback_0;
    this.local$this$Sidebar = this$Sidebar_0;
    this.local$response_0 = void 0;
    this.local$response = void 0;
  }
  Coroutine$Sidebar$submitCryptoACForm$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sidebar$submitCryptoACForm$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sidebar$submitCryptoACForm$lambda.prototype.constructor = Coroutine$Sidebar$submitCryptoACForm$lambda;
  Coroutine$Sidebar$submitCryptoACForm$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 20;
            if ((this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Delete) : null) || (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Get) : null)) {
              var $receiver = this.local$closure$endpoint;
              var endIndex = this.local$closure$endpoint.length - 1 | 0;
              var endpointWithParameters = new StringBuilder($receiver.substring(0, endIndex));
              if (this.local$closure$query) {
                endpointWithParameters.append_pdl1vj$('?');
                var tmp$;
                tmp$ = this.local$closure$values.entries.iterator();
                while (tmp$.hasNext()) {
                  var element = tmp$.next();
                  endpointWithParameters.append_pdl1vj$(element.key).append_pdl1vj$('=').append_pdl1vj$(element.value);
                }
              } else {
                var tmp$_0;
                tmp$_0 = this.local$closure$values.entries.iterator();
                while (tmp$_0.hasNext()) {
                  var element_0 = tmp$_0.next();
                  endpointWithParameters.append_pdl1vj$('/').append_pdl1vj$(element_0.value);
                }
              }
              if (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Delete) : null) {
                var $receiver_0 = this.local$this$Sidebar.props.httpClient;
                var urlString = endpointWithParameters.toString();
                var host_0;
                var body_0;
                host_0 = 'localhost';
                body_0 = utils.EmptyContent;
                var $receiver_1 = new HttpRequestBuilder_init();
                url($receiver_1, 'http', host_0, 0, '/');
                $receiver_1.method = HttpMethod_0.Companion.Delete;
                $receiver_1.body = body_0;
                takeFrom($receiver_1.url, urlString);
                delete$lambda($receiver_1);
                var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
                var tmp$_4, tmp$_5, tmp$_6;
                tmp$_4 = getKClass(HttpResponse);
                if (equals(tmp$_4, getKClass(HttpStatement_init))) {
                  this.result_0 = Kotlin.isType(tmp$_5 = $this_0, HttpResponse) ? tmp$_5 : throwCCE();
                  this.state_0 = 17;
                  continue;
                } else {
                  if (equals(tmp$_4, getKClass(HttpResponse))) {
                    this.state_0 = 15;
                    this.result_0 = $this_0.execute(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  } else {
                    this.state_0 = 10;
                    this.result_0 = $this_0.executeUnsafe(this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  }
                }
              } else {
                if (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Get) : null) {
                  var $receiver_0_0 = this.local$this$Sidebar.props.httpClient;
                  var urlString_0 = endpointWithParameters.toString();
                  var host_0_0;
                  var body_0_0;
                  host_0_0 = 'localhost';
                  body_0_0 = utils.EmptyContent;
                  var $receiver_1_0 = new HttpRequestBuilder_init();
                  url($receiver_1_0, 'http', host_0_0, 0, '/');
                  $receiver_1_0.method = HttpMethod_0.Companion.Get;
                  $receiver_1_0.body = body_0_0;
                  takeFrom($receiver_1_0.url, urlString_0);
                  get$lambda_2($receiver_1_0);
                  var $this_0_0 = new HttpStatement_init($receiver_1_0, $receiver_0_0);
                  var tmp$_4_0, tmp$_5_0, tmp$_6_0;
                  tmp$_4_0 = getKClass(HttpResponse);
                  if (equals(tmp$_4_0, getKClass(HttpStatement_init))) {
                    this.result_0 = Kotlin.isType(tmp$_5_0 = $this_0_0, HttpResponse) ? tmp$_5_0 : throwCCE();
                    this.state_0 = 8;
                    continue;
                  } else {
                    if (equals(tmp$_4_0, getKClass(HttpResponse))) {
                      this.state_0 = 6;
                      this.result_0 = $this_0_0.execute(this);
                      if (this.result_0 === COROUTINE_SUSPENDED)
                        return COROUTINE_SUSPENDED;
                      continue;
                    } else {
                      this.state_0 = 1;
                      this.result_0 = $this_0_0.executeUnsafe(this);
                      if (this.result_0 === COROUTINE_SUSPENDED)
                        return COROUTINE_SUSPENDED;
                      continue;
                    }
                  }
                } else {
                  this.state_0 = 9;
                  continue;
                }
              }
            } else {
              this.local$this$Sidebar.props.handleChangeBackdropOpen(false);
              logger_13.error_nq59yw$(Sidebar$submitCryptoACForm$lambda$lambda_0(this.local$closure$method));
              return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], false));
              } catch (_) {
                typeInfo$result_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_qi9ur9$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, HttpResponse) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 20;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 7;
            continue;
          case 4:
            this.finallyPath_0 = [20];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 20;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.result_0 = Kotlin.isType(tmp$_6_0 = this.result_0, HttpResponse) ? tmp$_6_0 : throwCCE();
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.result_0;
            return this.local$closure$callback(this.result_0, this.local$closure$values), Unit;
          case 9:
            this.state_0 = 18;
            continue;
          case 10:
            this.local$response_0 = this.result_0;
            this.exceptionState_0 = 13;
            var tmp$_7_0;
            var tmp$_8_0 = this.local$response_0.call;
            var typeInfo$result_0_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), createKType(getKClass(HttpResponse), [], false));
              } catch (__0) {
                typeInfo$result_0_0 = typeInfoImpl(reflect.JsType, getKClass(HttpResponse), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 11;
            this.result_0 = tmp$_8_0.receive_qi9ur9$(typeInfo$result_0_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.result_0 = Kotlin.isType(tmp$_7_0 = this.result_0, HttpResponse) ? tmp$_7_0 : throwCCE();
            this.exceptionState_0 = 20;
            this.finallyPath_0 = [12];
            this.state_0 = 14;
            continue;
          case 12:
            this.state_0 = 16;
            continue;
          case 13:
            this.finallyPath_0 = [20];
            this.state_0 = 14;
            continue;
          case 14:
            this.exceptionState_0 = 20;
            complete(this.local$response_0);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 15:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, HttpResponse) ? tmp$_6 : throwCCE();
            this.state_0 = 16;
            continue;
          case 16:
            this.state_0 = 17;
            continue;
          case 17:
            this.result_0;
            return this.local$closure$callback(this.result_0, this.local$closure$values), Unit;
          case 18:
            this.state_0 = 19;
            continue;
          case 19:
            this.exceptionState_0 = 23;
            this.state_0 = 22;
            continue;
          case 20:
            this.exceptionState_0 = 23;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              this.local$this$Sidebar.props.handleChangeBackdropOpen(false);
              logger_13.error_nq59yw$(Sidebar$submitCryptoACForm$lambda$lambda_1(e));
              console.log(e);
              return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
            } else {
              throw e;
            }

          case 21:
            this.state_0 = 22;
            continue;
          case 22:
            return Unit;
          case 23:
            throw this.exception_0;
          default:this.state_0 = 23;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 23) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Sidebar$submitCryptoACForm$lambda_0(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, closure$callback_0, this$Sidebar_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sidebar$submitCryptoACForm$lambda(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, closure$callback_0, this$Sidebar_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Sidebar.prototype.submitCryptoACForm_0 = function (method, endpoint, values, query, callback) {
    logger_13.info_nq59yw$(Sidebar$submitCryptoACForm$lambda(method, endpoint, query));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_13.info_nq59yw$(Sidebar$submitCryptoACForm$lambda$lambda(element));
    }
    this.props.handleChangeBackdropOpen(true);
    launch(MainScope(), void 0, void 0, Sidebar$submitCryptoACForm$lambda_0(method, endpoint, query, values, callback, this));
  };
  function Sidebar$callbackShowOutcomeCode$lambda$lambda(closure$status) {
    return function () {
      return 'Response status is ' + closure$status;
    };
  }
  function Sidebar$callbackShowOutcomeCode$lambda$lambda_0(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', outcome code is ' + closure$outcomeCode;
    };
  }
  function Coroutine$Sidebar$callbackShowOutcomeCode$lambda(closure$response_0, this$Sidebar_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$response = closure$response_0;
    this.local$this$Sidebar = this$Sidebar_0;
    this.local$tmp$ = void 0;
    this.local$status = void 0;
  }
  Coroutine$Sidebar$callbackShowOutcomeCode$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sidebar$callbackShowOutcomeCode$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sidebar$callbackShowOutcomeCode$lambda.prototype.constructor = Coroutine$Sidebar$callbackShowOutcomeCode$lambda;
  Coroutine$Sidebar$callbackShowOutcomeCode$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$status = this.local$closure$response.status;
            if (this.local$status != null ? this.local$status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_13.info_nq59yw$(Sidebar$callbackShowOutcomeCode$lambda$lambda(this.local$status));
              return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance()), Unit;
            } else {
              this.local$tmp$ = Json.Default;
              this.state_0 = 2;
              this.result_0 = readText(this.local$closure$response, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var string = this.result_0;
            var tmp$;
            var outcomeCode = this.local$tmp$.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer(this.local$tmp$.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$ : throwCCE(), string);
            logger_13.warn_nq59yw$(Sidebar$callbackShowOutcomeCode$lambda$lambda_0(this.local$status, outcomeCode));
            return this.local$this$Sidebar.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance()), Unit;
          case 3:
            return;
          default:this.state_0 = 1;
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
  function Sidebar$callbackShowOutcomeCode$lambda(closure$response_0, this$Sidebar_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sidebar$callbackShowOutcomeCode$lambda(closure$response_0, this$Sidebar_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Sidebar.prototype.callbackShowOutcomeCode_0 = function (response) {
    this.props.handleChangeBackdropOpen(false);
    launch(MainScope(), void 0, void 0, Sidebar$callbackShowOutcomeCode$lambda(response, this));
  };
  function Sidebar$callbackDownloadUserProfile$lambda$lambda(closure$status) {
    return function () {
      return 'Response status is ' + closure$status;
    };
  }
  function Sidebar$callbackDownloadUserProfile$lambda$lambda_0(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', outcome code is ' + closure$outcomeCode;
    };
  }
  function Coroutine$Sidebar$callbackDownloadUserProfile$lambda(closure$response_0, closure$values_0, this$Sidebar_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$response = closure$response_0;
    this.local$closure$values = closure$values_0;
    this.local$this$Sidebar = this$Sidebar_0;
    this.local$tmp$ = void 0;
    this.local$status = void 0;
  }
  Coroutine$Sidebar$callbackDownloadUserProfile$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sidebar$callbackDownloadUserProfile$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sidebar$callbackDownloadUserProfile$lambda.prototype.constructor = Coroutine$Sidebar$callbackDownloadUserProfile$lambda;
  Coroutine$Sidebar$callbackDownloadUserProfile$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$status = this.local$closure$response.status;
            if (this.local$status != null ? this.local$status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_13.info_nq59yw$(Sidebar$callbackDownloadUserProfile$lambda$lambda(this.local$status));
              this.state_0 = 3;
              this.result_0 = readText(this.local$closure$response, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.local$tmp$ = Json.Default;
              this.state_0 = 2;
              this.result_0 = readText(this.local$closure$response, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var string = this.result_0;
            var tmp$;
            var outcomeCode = this.local$tmp$.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer(this.local$tmp$.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$ : throwCCE(), string);
            logger_13.warn_nq59yw$(Sidebar$callbackDownloadUserProfile$lambda$lambda_0(this.local$status, outcomeCode));
            return this.local$this$Sidebar.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance());
          case 3:
            var text = this.result_0;
            var element = document.createElement('a');
            element.setAttribute('href', 'data:application/json;charset=utf-8,' + text);
            element.setAttribute('download', toString(this.local$closure$values.get_11rb$(SERVER_getInstance().USERNAME)) + '.json');
            element.setAttribute('display', 'none');
            ensureNotNull(document.body).appendChild(element);
            element.click();
            return ensureNotNull(document.body).removeChild(element);
          case 4:
            return;
          default:this.state_0 = 1;
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
  function Sidebar$callbackDownloadUserProfile$lambda(closure$response_0, closure$values_0, this$Sidebar_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sidebar$callbackDownloadUserProfile$lambda(closure$response_0, closure$values_0, this$Sidebar_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Sidebar.prototype.callbackDownloadUserProfile_0 = function (response, values) {
    this.props.handleChangeBackdropOpen(false);
    launch(MainScope(), void 0, void 0, Sidebar$callbackDownloadUserProfile$lambda(response, values, this));
  };
  function Sidebar$callbackReceiveMQTTMessages$lambda$lambda(closure$status) {
    return function () {
      return 'Response status is ' + closure$status;
    };
  }
  function Sidebar$callbackReceiveMQTTMessages$lambda$lambda_0(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', outcome code is ' + closure$outcomeCode;
    };
  }
  function Coroutine$Sidebar$callbackReceiveMQTTMessages$lambda(closure$response_0, this$Sidebar_0, closure$values_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$response = closure$response_0;
    this.local$this$Sidebar = this$Sidebar_0;
    this.local$closure$values = closure$values_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$status = void 0;
  }
  Coroutine$Sidebar$callbackReceiveMQTTMessages$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sidebar$callbackReceiveMQTTMessages$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sidebar$callbackReceiveMQTTMessages$lambda.prototype.constructor = Coroutine$Sidebar$callbackReceiveMQTTMessages$lambda;
  Coroutine$Sidebar$callbackReceiveMQTTMessages$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$status = this.local$closure$response.status;
            if (this.local$status != null ? this.local$status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_13.info_nq59yw$(Sidebar$callbackReceiveMQTTMessages$lambda$lambda(this.local$status));
              this.local$tmp$ = Json.Default;
              this.state_0 = 3;
              this.result_0 = readText(this.local$closure$response, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.local$tmp$_0 = Json.Default;
              this.state_0 = 2;
              this.result_0 = readText(this.local$closure$response, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var string = this.result_0;
            var tmp$;
            var outcomeCode = this.local$tmp$_0.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer(this.local$tmp$_0.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$ : throwCCE(), string);
            logger_13.warn_nq59yw$(Sidebar$callbackReceiveMQTTMessages$lambda$lambda_0(this.local$status, outcomeCode));
            return this.local$this$Sidebar.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance()), Unit;
          case 3:
            var string_0 = this.result_0;
            var tmp$_0;
            var mqttMessages = this.local$tmp$.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer(this.local$tmp$.serializersModule, createKType(getKClass(MutableList), [createInvariantKTypeProjection(createKType(getKClass(DSMQTTMessage), [], false))], false)), KSerializer) ? tmp$_0 : throwCCE(), string_0);
            if (mqttMessages.isEmpty()) {
              return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
            } else {
              return this.local$this$Sidebar.props.handleAddMessagesToDisplayInContent(ensureNotNull(this.local$closure$values.get_11rb$(SERVER_getInstance().FILE_NAME)), mqttMessages), Unit;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
          default:this.state_0 = 1;
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
  function Sidebar$callbackReceiveMQTTMessages$lambda(closure$response_0, this$Sidebar_0, closure$values_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sidebar$callbackReceiveMQTTMessages$lambda(closure$response_0, this$Sidebar_0, closure$values_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Sidebar.prototype.callbackReceiveMQTTMessages_0 = function (response, values) {
    this.props.handleChangeBackdropOpen(false);
    launch(MainScope(), void 0, void 0, Sidebar$callbackReceiveMQTTMessages$lambda(response, this, values));
  };
  function Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda(this$Sidebar) {
    return function (response, params) {
      this$Sidebar.callbackDownloadUserProfile_0(response, params);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_0(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda_0(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_0(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_1(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda_1(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_1(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_2(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda_2(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_2(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_3(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda_3(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_3(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_4(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda_4(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_4(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_5(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda_5(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_5(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_6(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda_6(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_6(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_7(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCloud$lambda_7(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCloud$lambda$lambda_7(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$userCryptoACFormsRBACCloud$lambda$lambda(this$Sidebar) {
    return function (response) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$userCryptoACFormsRBACCloud$lambda(this$Sidebar) {
    return function (method, endpoint, values, files) {
      this$Sidebar.submitCryptoACFormWithBinaryData_0(method, endpoint, values, files, Sidebar$userCryptoACFormsRBACCloud$lambda$lambda(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$userCryptoACFormsRBACCloud$lambda$lambda_0(this$Sidebar) {
    return function (response) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$userCryptoACFormsRBACCloud$lambda_0(this$Sidebar) {
    return function (method, endpoint, values, files) {
      this$Sidebar.submitCryptoACFormWithBinaryData_0(method, endpoint, values, files, Sidebar$userCryptoACFormsRBACCloud$lambda$lambda_0(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$userCryptoACFormsRBACCloud$lambda_1(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormInNewTab_0(method, endpoint, values, false);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda(this$Sidebar) {
    return function (response, params) {
      this$Sidebar.callbackDownloadUserProfile_0(response, params);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_0(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda_0(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_0(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_1(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda_1(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_1(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_2(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda_2(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_2(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_3(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda_3(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_3(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_4(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda_4(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_4(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_5(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda_5(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_5(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_6(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda_6(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_6(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_7(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda_7(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_7(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_8(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACMQTT$lambda_8(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACMQTT$lambda$lambda_8(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$userCryptoACFormsRBACMQTT$lambda$lambda(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$userCryptoACFormsRBACMQTT$lambda(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$userCryptoACFormsRBACMQTT$lambda$lambda(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$userCryptoACFormsRBACMQTT$lambda$lambda_0(this$Sidebar) {
    return function (response, params) {
      this$Sidebar.callbackReceiveMQTTMessages_0(response, params);
      return Unit;
    };
  }
  function Sidebar$userCryptoACFormsRBACMQTT$lambda_0(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$userCryptoACFormsRBACMQTT$lambda$lambda_0(this$Sidebar));
      return Unit;
    };
  }
  Sidebar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sidebar',
    interfaces: [RComponent]
  };
  function proSidebarWrapper$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function proSidebarWrapper($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(Sidebar), proSidebarWrapper$lambda(handler));
  }
  var package$eu = _.eu || (_.eu = {});
  var package$fbk = package$eu.fbk || (package$eu.fbk = {});
  var package$st = package$fbk.st || (package$fbk.st = {});
  var package$cryptoac = package$st.cryptoac || (package$st.cryptoac = {});
  Object.defineProperty(package$cryptoac, 'API', {
    get: API_getInstance
  });
  Object.defineProperty(package$cryptoac, 'Constants', {
    get: Constants_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_000_SUCCESS', {
    get: OutcomeCode$CODE_000_SUCCESS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_001_USER_ALREADY_EXISTS', {
    get: OutcomeCode$CODE_001_USER_ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_002_ROLE_ALREADY_EXISTS', {
    get: OutcomeCode$CODE_002_ROLE_ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_003_FILE_ALREADY_EXISTS', {
    get: OutcomeCode$CODE_003_FILE_ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_004_USER_NOT_FOUND', {
    get: OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_005_ROLE_NOT_FOUND', {
    get: OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_006_FILE_NOT_FOUND', {
    get: OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_007_ROLETUPLE_NOT_FOUND', {
    get: OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_008_PERMISSIONTUPLE_NOT_FOUND', {
    get: OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_009_FILETUPLE_NOT_FOUND', {
    get: OutcomeCode$CODE_009_FILETUPLE_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_010_ROLETUPLE_ALREADY_EXISTS', {
    get: OutcomeCode$CODE_010_ROLETUPLE_ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS', {
    get: OutcomeCode$CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_012_FILETUPLE_ALREADY_EXISTS', {
    get: OutcomeCode$CODE_012_FILETUPLE_ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_013_USER_WAS_DELETED', {
    get: OutcomeCode$CODE_013_USER_WAS_DELETED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_014_ROLE_WAS_DELETED', {
    get: OutcomeCode$CODE_014_ROLE_WAS_DELETED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_015_FILE_WAS_DELETED', {
    get: OutcomeCode$CODE_015_FILE_WAS_DELETED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_016_INVALID_PERMISSION', {
    get: OutcomeCode$CODE_016_INVALID_PERMISSION_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_017_INVALID_VERSION_NUMBER', {
    get: OutcomeCode$CODE_017_INVALID_VERSION_NUMBER_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_018_INTERFACE_CONFIGURATION_PARAMETERS', {
    get: OutcomeCode$CODE_018_INTERFACE_CONFIGURATION_PARAMETERS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_019_MISSING_PARAMETERS', {
    get: OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_020_INVALID_PARAMETER', {
    get: OutcomeCode$CODE_020_INVALID_PARAMETER_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_021_RM_CONFIGURATION', {
    get: OutcomeCode$CODE_021_RM_CONFIGURATION_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_022_ADMIN_CANNOT_BE_MODIFIED', {
    get: OutcomeCode$CODE_022_ADMIN_CANNOT_BE_MODIFIED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_023_USER_CANNOT_BE_MODIFIED', {
    get: OutcomeCode$CODE_023_USER_CANNOT_BE_MODIFIED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_024_FILE_DELETE', {
    get: OutcomeCode$CODE_024_FILE_DELETE_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_025_FILE_RENAMING', {
    get: OutcomeCode$CODE_025_FILE_RENAMING_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_026_TUPLE_FORMAT', {
    get: OutcomeCode$CODE_026_TUPLE_FORMAT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_027_AC_ENFORCEMENT_INCONSISTENT', {
    get: OutcomeCode$CODE_027_AC_ENFORCEMENT_INCONSISTENT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_028_OPA_POLICY_CREATION', {
    get: OutcomeCode$CODE_028_OPA_POLICY_CREATION_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_029_OPA_DOCUMENT_UPDATE', {
    get: OutcomeCode$CODE_029_OPA_DOCUMENT_UPDATE_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_030_OPA_DOCUMENT_DOWNLOAD', {
    get: OutcomeCode$CODE_030_OPA_DOCUMENT_DOWNLOAD_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS', {
    get: OutcomeCode$CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS', {
    get: OutcomeCode$CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS', {
    get: OutcomeCode$CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_034_ADMIN_ALREADY_INITIALIZED', {
    get: OutcomeCode$CODE_034_ADMIN_ALREADY_INITIALIZED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_035_FORBIDDEN', {
    get: OutcomeCode$CODE_035_FORBIDDEN_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_036_UNAUTHORIZED', {
    get: OutcomeCode$CODE_036_UNAUTHORIZED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED', {
    get: OutcomeCode$CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_038_PROFILE_NOT_FOUND', {
    get: OutcomeCode$CODE_038_PROFILE_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_039_MALFORMED_PROFILE_FILE', {
    get: OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_040_UR_ASSIGNMENTS_NOT_FOUND', {
    get: OutcomeCode$CODE_040_UR_ASSIGNMENTS_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_041_PA_ASSIGNMENTS_NOT_FOUND', {
    get: OutcomeCode$CODE_041_PA_ASSIGNMENTS_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_042_RM_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_042_RM_CONNECTION_TIMEOUT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_043_DS_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_043_DS_CONNECTION_TIMEOUT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_044_MS_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_044_MS_CONNECTION_TIMEOUT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_045_PROXY_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_046_HTTP_METHOD_NOT_SUPPORTED', {
    get: OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_047_UNEXPECTED', {
    get: OutcomeCode$CODE_047_UNEXPECTED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS', {
    get: OutcomeCode$CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS', {
    get: OutcomeCode$CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS', {
    get: OutcomeCode$CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_051_NO_NEW_MESSAGES_TO_READ', {
    get: OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION', {
    get: OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance
  });
  Object.defineProperty(OutcomeCode, 'Companion', {
    get: OutcomeCode$Companion_getInstance
  });
  Object.defineProperty(OutcomeCode, '$serializer', {
    get: OutcomeCode$$serializer_getInstance
  });
  package$cryptoac.OutcomeCode = OutcomeCode;
  Object.defineProperty(package$cryptoac, 'SERVER', {
    get: SERVER_getInstance
  });
  Object.defineProperty(SafeRegex, 'Companion', {
    get: SafeRegex$Companion_getInstance
  });
  package$cryptoac.SafeRegex = SafeRegex;
  Object.defineProperty(CoreParameters, 'Companion', {
    get: CoreParameters$Companion_getInstance
  });
  var package$core = package$cryptoac.core || (package$cryptoac.core = {});
  package$core.CoreParameters_init_lc88fd$ = CoreParameters_init;
  package$core.CoreParameters = CoreParameters;
  Object.defineProperty(CoreType, 'RBAC_CLOUD', {
    get: CoreType$RBAC_CLOUD_getInstance
  });
  Object.defineProperty(CoreType, 'RBAC_MQTT', {
    get: CoreType$RBAC_MQTT_getInstance
  });
  package$core.CoreType = CoreType;
  Object.defineProperty(CoreParametersCloud, 'Companion', {
    get: CoreParametersCloud$Companion_getInstance
  });
  Object.defineProperty(CoreParametersCloud, '$serializer', {
    get: CoreParametersCloud$$serializer_getInstance
  });
  package$core.CoreParametersCloud_init_5qrlt3$ = CoreParametersCloud_init;
  package$core.CoreParametersCloud = CoreParametersCloud;
  Object.defineProperty(CoreParametersMQTT, 'Companion', {
    get: CoreParametersMQTT$Companion_getInstance
  });
  Object.defineProperty(CoreParametersMQTT, '$serializer', {
    get: CoreParametersMQTT$$serializer_getInstance
  });
  package$core.CoreParametersMQTT_init_7tkivr$ = CoreParametersMQTT_init;
  package$core.CoreParametersMQTT = CoreParametersMQTT;
  Object.defineProperty(CryptoACObject, 'Companion', {
    get: CryptoACObject$Companion_getInstance
  });
  package$core.CryptoACObject_init_lc88fd$ = CryptoACObject_init;
  package$core.CryptoACObject = CryptoACObject;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  Object.defineProperty(ActiveElement, 'Companion', {
    get: ActiveElement$Companion_getInstance
  });
  var package$elements = package$core.elements || (package$core.elements = {});
  package$elements.ActiveElement_init_lc88fd$ = ActiveElement_init;
  package$elements.ActiveElement = ActiveElement;
  Object.defineProperty(Element, 'Companion', {
    get: Element$Companion_getInstance
  });
  package$elements.Element_init_lc88fd$ = Element_init;
  package$elements.Element = Element;
  Object.defineProperty(ElementStatus, 'INCOMPLETE', {
    get: ElementStatus$INCOMPLETE_getInstance
  });
  Object.defineProperty(ElementStatus, 'OPERATIONAL', {
    get: ElementStatus$OPERATIONAL_getInstance
  });
  Object.defineProperty(ElementStatus, 'DELETED', {
    get: ElementStatus$DELETED_getInstance
  });
  package$elements.ElementStatus = ElementStatus;
  Object.defineProperty(ElementType, 'USER', {
    get: ElementType$USER_getInstance
  });
  Object.defineProperty(ElementType, 'ROLE', {
    get: ElementType$ROLE_getInstance
  });
  Object.defineProperty(ElementType, 'FILE', {
    get: ElementType$FILE_getInstance
  });
  Object.defineProperty(ElementType, 'ASSIGNMENT', {
    get: ElementType$ASSIGNMENT_getInstance
  });
  Object.defineProperty(ElementType, 'PERMISSION', {
    get: ElementType$PERMISSION_getInstance
  });
  package$elements.ElementType = ElementType;
  Object.defineProperty(ElementTypeWithKey, 'USER', {
    get: ElementTypeWithKey$USER_getInstance
  });
  Object.defineProperty(ElementTypeWithKey, 'ROLE', {
    get: ElementTypeWithKey$ROLE_getInstance
  });
  package$elements.ElementTypeWithKey = ElementTypeWithKey;
  Object.defineProperty(ElementTypeWithStatus, 'USER', {
    get: ElementTypeWithStatus$USER_getInstance
  });
  Object.defineProperty(ElementTypeWithStatus, 'ROLE', {
    get: ElementTypeWithStatus$ROLE_getInstance
  });
  Object.defineProperty(ElementTypeWithStatus, 'FILE', {
    get: ElementTypeWithStatus$FILE_getInstance
  });
  package$elements.ElementTypeWithStatus = ElementTypeWithStatus;
  Object.defineProperty(ElementTypeWithVersionNumber, 'ROLE', {
    get: ElementTypeWithVersionNumber$ROLE_getInstance
  });
  Object.defineProperty(ElementTypeWithVersionNumber, 'FILE', {
    get: ElementTypeWithVersionNumber$FILE_getInstance
  });
  package$elements.ElementTypeWithVersionNumber = ElementTypeWithVersionNumber;
  Object.defineProperty(File, 'Companion', {
    get: File$Companion_getInstance
  });
  Object.defineProperty(File, '$serializer', {
    get: File$$serializer_getInstance
  });
  package$elements.File_init_p56fbb$ = File_init;
  package$elements.File = File;
  Object.defineProperty(Role, 'Companion', {
    get: Role$Companion_getInstance
  });
  Object.defineProperty(Role, '$serializer', {
    get: Role$$serializer_getInstance
  });
  package$elements.Role_init_p56fbb$ = Role_init;
  package$elements.Role = Role;
  Object.defineProperty(User, 'Companion', {
    get: User$Companion_getInstance
  });
  Object.defineProperty(User, '$serializer', {
    get: User$$serializer_getInstance
  });
  package$elements.User_init_ng1she$ = User_init;
  package$elements.User = User;
  Object.defineProperty(EnforcementType, 'TRADITIONAL', {
    get: EnforcementType$TRADITIONAL_getInstance
  });
  Object.defineProperty(EnforcementType, 'COMBINED', {
    get: EnforcementType$COMBINED_getInstance
  });
  Object.defineProperty(EnforcementType, 'Companion', {
    get: EnforcementType$Companion_getInstance
  });
  Object.defineProperty(EnforcementType, '$serializer', {
    get: EnforcementType$$serializer_getInstance
  });
  var package$tuples = package$core.tuples || (package$core.tuples = {});
  package$tuples.EnforcementType = EnforcementType;
  Object.defineProperty(FileTuple, 'Companion', {
    get: FileTuple$Companion_getInstance
  });
  Object.defineProperty(FileTuple, '$serializer', {
    get: FileTuple$$serializer_getInstance
  });
  package$tuples.FileTuple_init_iyyfrd$ = FileTuple_init;
  package$tuples.FileTuple = FileTuple;
  Object.defineProperty(PermissionTuple, 'Companion', {
    get: PermissionTuple$Companion_getInstance
  });
  Object.defineProperty(PermissionTuple, '$serializer', {
    get: PermissionTuple$$serializer_getInstance
  });
  package$tuples.PermissionTuple_init_41wajw$ = PermissionTuple_init;
  package$tuples.PermissionTuple = PermissionTuple;
  Object.defineProperty(PermissionType, 'READ', {
    get: PermissionType$READ_getInstance
  });
  Object.defineProperty(PermissionType, 'WRITE', {
    get: PermissionType$WRITE_getInstance
  });
  Object.defineProperty(PermissionType, 'READWRITE', {
    get: PermissionType$READWRITE_getInstance
  });
  Object.defineProperty(PermissionType, 'Companion', {
    get: PermissionType$Companion_getInstance
  });
  Object.defineProperty(PermissionType, '$serializer', {
    get: PermissionType$$serializer_getInstance
  });
  package$tuples.PermissionType = PermissionType;
  Object.defineProperty(RoleTuple, 'Companion', {
    get: RoleTuple$Companion_getInstance
  });
  Object.defineProperty(RoleTuple, '$serializer', {
    get: RoleTuple$$serializer_getInstance
  });
  package$tuples.RoleTuple_init_2ji7c6$ = RoleTuple_init;
  package$tuples.RoleTuple = RoleTuple;
  Object.defineProperty(Tuple, 'Companion', {
    get: Tuple$Companion_getInstance
  });
  package$tuples.Tuple_init_2b0p3y$ = Tuple_init;
  package$tuples.Tuple = Tuple;
  Object.defineProperty(AsymKeys, 'Companion', {
    get: AsymKeys$Companion_getInstance
  });
  Object.defineProperty(AsymKeys, '$serializer', {
    get: AsymKeys$$serializer_getInstance
  });
  var package$crypto = package$cryptoac.crypto || (package$cryptoac.crypto = {});
  package$crypto.AsymKeys_init_qm3bku$ = AsymKeys_init;
  package$crypto.AsymKeys = AsymKeys;
  Object.defineProperty(AsymKeysType, 'ENC', {
    get: AsymKeysType$ENC_getInstance
  });
  Object.defineProperty(AsymKeysType, 'SIG', {
    get: AsymKeysType$SIG_getInstance
  });
  Object.defineProperty(AsymKeysType, 'Companion', {
    get: AsymKeysType$Companion_getInstance
  });
  Object.defineProperty(AsymKeysType, '$serializer', {
    get: AsymKeysType$$serializer_getInstance
  });
  package$crypto.AsymKeysType = AsymKeysType;
  Object.defineProperty(CryptoType, 'JAVA', {
    get: CryptoType$JAVA_getInstance
  });
  Object.defineProperty(CryptoType, 'NATIVE', {
    get: CryptoType$NATIVE_getInstance
  });
  Object.defineProperty(CryptoType, 'Companion', {
    get: CryptoType$Companion_getInstance
  });
  Object.defineProperty(CryptoType, '$serializer', {
    get: CryptoType$$serializer_getInstance
  });
  package$crypto.CryptoType = CryptoType;
  Object.defineProperty(EncryptedAsymKeys, 'Companion', {
    get: EncryptedAsymKeys$Companion_getInstance
  });
  Object.defineProperty(EncryptedAsymKeys, '$serializer', {
    get: EncryptedAsymKeys$$serializer_getInstance
  });
  package$crypto.EncryptedAsymKeys_init_qm3bku$ = EncryptedAsymKeys_init;
  package$crypto.EncryptedAsymKeys = EncryptedAsymKeys;
  Object.defineProperty(EncryptedSymKey, 'Companion', {
    get: EncryptedSymKey$Companion_getInstance
  });
  Object.defineProperty(EncryptedSymKey, '$serializer', {
    get: EncryptedSymKey$$serializer_getInstance
  });
  package$crypto.EncryptedSymKey_init_ymqoo6$ = EncryptedSymKey_init;
  package$crypto.EncryptedSymKey = EncryptedSymKey;
  Object.defineProperty(DSInterfaceCloudParameters, 'Companion', {
    get: DSInterfaceCloudParameters$Companion_getInstance
  });
  Object.defineProperty(DSInterfaceCloudParameters, '$serializer', {
    get: DSInterfaceCloudParameters$$serializer_getInstance
  });
  var package$implementation = package$cryptoac.implementation || (package$cryptoac.implementation = {});
  var package$ds = package$implementation.ds || (package$implementation.ds = {});
  package$ds.DSInterfaceCloudParameters_init_woby6u$ = DSInterfaceCloudParameters_init;
  package$ds.DSInterfaceCloudParameters = DSInterfaceCloudParameters;
  Object.defineProperty(DSInterfaceMQTTParameters, 'Companion', {
    get: DSInterfaceMQTTParameters$Companion_getInstance
  });
  Object.defineProperty(DSInterfaceMQTTParameters, '$serializer', {
    get: DSInterfaceMQTTParameters$$serializer_getInstance
  });
  package$ds.DSInterfaceMQTTParameters_init_zgi4xr$ = DSInterfaceMQTTParameters_init;
  package$ds.DSInterfaceMQTTParameters = DSInterfaceMQTTParameters;
  Object.defineProperty(AclType, 'publishClientSend', {
    get: AclType$publishClientSend_getInstance
  });
  Object.defineProperty(AclType, 'publishClientReceive', {
    get: AclType$publishClientReceive_getInstance
  });
  Object.defineProperty(AclType, 'subscribeLiteral', {
    get: AclType$subscribeLiteral_getInstance
  });
  Object.defineProperty(AclType, 'subscribePattern', {
    get: AclType$subscribePattern_getInstance
  });
  Object.defineProperty(AclType, 'unsubscribeLiteral', {
    get: AclType$unsubscribeLiteral_getInstance
  });
  Object.defineProperty(AclType, 'unsubscribePattern', {
    get: AclType$unsubscribePattern_getInstance
  });
  package$ds.AclType = AclType;
  Object.defineProperty(DSInterfaceParameters, 'Companion', {
    get: DSInterfaceParameters$Companion_getInstance
  });
  package$ds.DSInterfaceParameters_init_lc88fd$ = DSInterfaceParameters_init;
  package$ds.DSInterfaceParameters = DSInterfaceParameters;
  Object.defineProperty(DSMQTTMessage, 'Companion', {
    get: DSMQTTMessage$Companion_getInstance
  });
  Object.defineProperty(DSMQTTMessage, '$serializer', {
    get: DSMQTTMessage$$serializer_getInstance
  });
  package$ds.DSMQTTMessage_init_q11ckg$ = DSMQTTMessage_init;
  package$ds.DSMQTTMessage = DSMQTTMessage;
  Object.defineProperty(MSInterfaceMySQLParameters, 'Companion', {
    get: MSInterfaceMySQLParameters$Companion_getInstance
  });
  Object.defineProperty(MSInterfaceMySQLParameters, '$serializer', {
    get: MSInterfaceMySQLParameters$$serializer_getInstance
  });
  var package$ms = package$implementation.ms || (package$implementation.ms = {});
  package$ms.MSInterfaceMySQLParameters_init_7574dk$ = MSInterfaceMySQLParameters_init;
  package$ms.MSInterfaceMySQLParameters = MSInterfaceMySQLParameters;
  Object.defineProperty(MSInterfaceParameters, 'Companion', {
    get: MSInterfaceParameters$Companion_getInstance
  });
  package$ms.MSInterfaceParameters_init_lc88fd$ = MSInterfaceParameters_init;
  package$ms.MSInterfaceParameters = MSInterfaceParameters;
  Object.defineProperty(OPAInterfaceParameters, 'Companion', {
    get: OPAInterfaceParameters$Companion_getInstance
  });
  Object.defineProperty(OPAInterfaceParameters, '$serializer', {
    get: OPAInterfaceParameters$$serializer_getInstance
  });
  var package$opa = package$implementation.opa || (package$implementation.opa = {});
  package$opa.OPAInterfaceParameters_init_woby6u$ = OPAInterfaceParameters_init;
  package$opa.OPAInterfaceParameters = OPAInterfaceParameters;
  Object.defineProperty(RMInterfaceCloudParameters, 'Companion', {
    get: RMInterfaceCloudParameters$Companion_getInstance
  });
  Object.defineProperty(RMInterfaceCloudParameters, '$serializer', {
    get: RMInterfaceCloudParameters$$serializer_getInstance
  });
  var package$rm = package$implementation.rm || (package$implementation.rm = {});
  package$rm.RMInterfaceCloudParameters_init_woby6u$ = RMInterfaceCloudParameters_init;
  package$rm.RMInterfaceCloudParameters = RMInterfaceCloudParameters;
  Object.defineProperty(RMInterfaceParameters, 'Companion', {
    get: RMInterfaceParameters$Companion_getInstance
  });
  package$rm.RMInterfaceParameters_init_lc88fd$ = RMInterfaceParameters_init;
  package$rm.RMInterfaceParameters = RMInterfaceParameters;
  package$elements.digest_yzgtim$ = digest;
  $$importsForInline$$['kotlin-styled'] = $module$kotlin_styled;
  var package$ui = package$cryptoac.ui || (package$cryptoac.ui = {});
  package$ui.App = App;
  Object.defineProperty(package$ui, 'baseURL', {
    get: function () {
      return baseURL;
    }
  });
  package$ui.main = main;
  Object.defineProperty(CryptoACAlertSeverity, 'SUCCESS', {
    get: CryptoACAlertSeverity$SUCCESS_getInstance
  });
  Object.defineProperty(CryptoACAlertSeverity, 'WARNING', {
    get: CryptoACAlertSeverity$WARNING_getInstance
  });
  Object.defineProperty(CryptoACAlertSeverity, 'INFO', {
    get: CryptoACAlertSeverity$INFO_getInstance
  });
  Object.defineProperty(CryptoACAlertSeverity, 'ERROR', {
    get: CryptoACAlertSeverity$ERROR_getInstance
  });
  var package$components = package$ui.components || (package$ui.components = {});
  var package$custom = package$components.custom || (package$components.custom = {});
  package$custom.CryptoACAlertSeverity = CryptoACAlertSeverity;
  package$custom.CryptoACAlert = CryptoACAlert;
  package$custom.cryptoACAlert_duv67v$ = cryptoACAlert;
  package$custom.CryptoACCheckbox = CryptoACCheckbox;
  package$custom.cryptoACCheckbox_ntlazi$ = cryptoACCheckbox;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  package$custom.CryptoACForm = CryptoACForm;
  package$custom.cryptoACForm_ui0gnz$ = cryptoACForm;
  package$custom.CryptoACFormData = CryptoACFormData;
  package$custom.CryptoACFormField = CryptoACFormField;
  package$custom.CryptoACRadioGroup = CryptoACRadioGroup;
  package$custom.cryptoACRadioGroup_lfusg3$ = cryptoACRadioGroup;
  package$custom.CryptoACRadioOption = CryptoACRadioOption;
  package$custom.CryptoACTextField = CryptoACTextField;
  package$custom.cryptoACTextField_28dx06$ = cryptoACTextField;
  var package$table = package$custom.table || (package$custom.table = {});
  package$table.CryptoACTable = CryptoACTable;
  package$table.cryptoACTable_yikifr$ = cryptoACTable;
  package$table.CryptoACTableColumn = CryptoACTableColumn;
  Object.defineProperty(package$table, 'userColumns', {
    get: function () {
      return userColumns;
    }
  });
  Object.defineProperty(package$table, 'roleColumns', {
    get: function () {
      return roleColumns;
    }
  });
  Object.defineProperty(package$table, 'fileColumns', {
    get: function () {
      return fileColumns;
    }
  });
  Object.defineProperty(package$table, 'assignmentColumns', {
    get: function () {
      return assignmentColumns;
    }
  });
  Object.defineProperty(package$table, 'permissionColumns', {
    get: function () {
      return permissionColumns;
    }
  });
  Object.defineProperty(package$table, 'mqttMessagesColumns', {
    get: function () {
      return mqttMessagesColumns;
    }
  });
  package$table.CryptoACTableData = CryptoACTableData;
  package$table.CryptoACTableRow = CryptoACTableRow;
  $$importsForInline$$['ktor-ktor-client-core-js-legacy'] = $module$ktor_ktor_client_core_js_legacy;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy;
  var package$content = package$ui.content || (package$ui.content = {});
  package$content.Content = Content;
  package$content.content_e58h57$ = content;
  package$content.MQTTContent = MQTTContent;
  package$content.mqttContent_z428lt$ = mqttContent;
  package$content.CloudContent = CloudContent;
  package$content.cloudContent_rfjuds$ = cloudContent;
  var package$login = package$content.login || (package$content.login = {});
  package$login.Login = Login;
  package$login.login_erjs1s$ = login;
  $$importsForInline$$['ktor-ktor-http-js-legacy'] = $module$ktor_ktor_http_js_legacy;
  var package$sidebar = package$ui.sidebar || (package$ui.sidebar = {});
  package$sidebar.Sidebar = Sidebar;
  package$sidebar.proSidebarWrapper_o0ldtx$ = proSidebarWrapper;
  OutcomeCode$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  CoreParametersCloud$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  CoreParametersMQTT$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  File$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Role$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  User$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  EnforcementType$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  FileTuple$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PermissionTuple$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PermissionType$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  RoleTuple$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  AsymKeys$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  AsymKeysType$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  CryptoType$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  EncryptedAsymKeys$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  EncryptedSymKey$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  DSInterfaceCloudParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  DSInterfaceMQTTParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  DSMQTTMessage$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  MSInterfaceMySQLParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  OPAInterfaceParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  RMInterfaceCloudParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  logger = mu.KotlinLogging.logger_o14v8n$(logger$lambda);
  logger_0 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_0);
  logger_1 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_1);
  logger_2 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_2);
  logger_3 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_3);
  logger_4 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_4);
  logger_5 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_5);
  logger_6 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_6);
  logger_7 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_7);
  baseURL = window.location.protocol + '//' + window.location.host;
  logger_8 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_8);
  userColumns = [new CryptoACTableColumn('name', 'Name', 'The name of the user'), new CryptoACTableColumn('status', 'Status', 'The current status of the user (INCOMPLETE, OPERATIONAL or DELETED)'), new CryptoACTableColumn('isAdmin', 'Admin', 'Whether the user has administrative privileges', 'boolean'), new CryptoACTableColumn('token', 'Token', 'The token of the user')];
  roleColumns = [new CryptoACTableColumn('name', 'Name', 'The name of the role'), new CryptoACTableColumn('status', 'Status', 'The current status of the role (OPERATIONAL or DELETED)'), new CryptoACTableColumn('token', 'Token', 'The token of the role')];
  fileColumns = [new CryptoACTableColumn('name', 'Name', 'The name of the file'), new CryptoACTableColumn('status', 'Status', 'The current status of the file (OPERATIONAL or DELETED)'), new CryptoACTableColumn('versionNumber', '#', 'The version number of the file', 'number'), new CryptoACTableColumn('token', 'Token', 'The token of the file')];
  assignmentColumns = [new CryptoACTableColumn('username', 'Username', 'The name of the user'), new CryptoACTableColumn('role name', 'Role Name', 'The name of the role'), new CryptoACTableColumn('versionNumber', '#', 'The version number of the role', 'number')];
  permissionColumns = [new CryptoACTableColumn('role name', 'Role Name', 'The name of the role'), new CryptoACTableColumn('file name', 'File Name', 'The name of the file'), new CryptoACTableColumn('fileVersionNumber', '#', 'The version number of the key', 'number'), new CryptoACTableColumn('permission', 'Permission', 'The permission assigned (either Read or ReadWrite)')];
  mqttMessagesColumns = [new CryptoACTableColumn('message', 'Message', 'A message sent in the topic')];
  logger_9 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_9);
  logger_10 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_10);
  logger_11 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_11);
  logger_12 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_12);
  logger_13 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_13);
  main();
  Kotlin.defineModule('CryptoAC', _);
  return _;
}));

//# sourceMappingURL=CryptoAC.js.map
