(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'ktor-ktor-http-js-legacy', 'ktor-ktor-client-core-js-legacy', 'kotlin-logging-js-legacy', 'kotlinx-serialization-kotlinx-serialization-json-js-legacy', 'ktor-ktor-io-js-legacy', 'kotlin-css', 'kotlin-styled', '@material-ui/core', 'kotlin-react-legacy', 'react-icons/fa', 'react-pro-sidebar', 'kotlin-react-dom-legacy', 'ktor-ktor-client-content-negotiation-js-legacy', 'ktor-ktor-serialization-kotlinx-json-js-legacy', 'kotlinx-coroutines-core', '@material-ui/lab', 'kotlinx-html-js', 'kotlin-react-dom', 'ktor-ktor-websockets-js-legacy', 'kotlin-react-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-client-core-js-legacy'), require('kotlin-logging-js-legacy'), require('kotlinx-serialization-kotlinx-serialization-json-js-legacy'), require('ktor-ktor-io-js-legacy'), require('kotlin-css'), require('kotlin-styled'), require('@material-ui/core'), require('kotlin-react-legacy'), require('react-icons/fa'), require('react-pro-sidebar'), require('kotlin-react-dom-legacy'), require('ktor-ktor-client-content-negotiation-js-legacy'), require('ktor-ktor-serialization-kotlinx-json-js-legacy'), require('kotlinx-coroutines-core'), require('@material-ui/lab'), require('kotlinx-html-js'), require('kotlin-react-dom'), require('ktor-ktor-websockets-js-legacy'), require('kotlin-react-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-logging-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-logging-js-legacy' was not found. Please, check whether 'kotlin-logging-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-styled'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-styled' was not found. Please, check whether 'kotlin-styled' is loaded prior to 'CryptoAC'.");
    }if (typeof this['@material-ui/core'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency '@material-ui/core' was not found. Please, check whether '@material-ui/core' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-react-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-react-legacy' was not found. Please, check whether 'kotlin-react-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['react-icons/fa'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'react-icons/fa' was not found. Please, check whether 'react-icons/fa' is loaded prior to 'CryptoAC'.");
    }if (typeof this['react-pro-sidebar'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'react-pro-sidebar' was not found. Please, check whether 'react-pro-sidebar' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-react-dom-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-react-dom-legacy' was not found. Please, check whether 'kotlin-react-dom-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-client-content-negotiation-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-client-content-negotiation-js-legacy' was not found. Please, check whether 'ktor-ktor-client-content-negotiation-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-serialization-kotlinx-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-serialization-kotlinx-json-js-legacy' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'CryptoAC'.");
    }if (typeof this['@material-ui/lab'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency '@material-ui/lab' was not found. Please, check whether '@material-ui/lab' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'CryptoAC'.");
    }if (typeof this['ktor-ktor-websockets-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-websockets-js-legacy' was not found. Please, check whether 'ktor-ktor-websockets-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'CryptoAC'.");
    }root.CryptoAC = factory(typeof CryptoAC === 'undefined' ? {} : CryptoAC, kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['ktor-ktor-http-js-legacy'], this['ktor-ktor-client-core-js-legacy'], this['kotlin-logging-js-legacy'], this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'], this['ktor-ktor-io-js-legacy'], this['kotlin-css'], this['kotlin-styled'], this['@material-ui/core'], this['kotlin-react-legacy'], this['react-icons/fa'], this['react-pro-sidebar'], this['kotlin-react-dom-legacy'], this['ktor-ktor-client-content-negotiation-js-legacy'], this['ktor-ktor-serialization-kotlinx-json-js-legacy'], this['kotlinx-coroutines-core'], this['@material-ui/lab'], this['kotlinx-html-js'], this['kotlin-react-dom'], this['ktor-ktor-websockets-js-legacy'], this['kotlin-react-core']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_client_core_js_legacy, $module$kotlin_logging_js_legacy, $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy, $module$ktor_ktor_io_js_legacy, $module$kotlin_css, $module$kotlin_styled, $module$_material_ui_core, $module$kotlin_react_legacy, $module$react_icons_fa, $module$react_pro_sidebar, $module$kotlin_react_dom_legacy, $module$ktor_ktor_client_content_negotiation_js_legacy, $module$ktor_ktor_serialization_kotlinx_json_js_legacy, $module$kotlinx_coroutines_core, $module$_material_ui_lab, $module$kotlinx_html_js, $module$kotlin_react_dom, $module$ktor_ktor_websockets_js_legacy, $module$kotlin_react_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var EnumDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.EnumDescriptor;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var plus = Kotlin.kotlin.collections.plus_q4559j$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Random = Kotlin.kotlin.random.Random;
  var getCallableRef = Kotlin.getCallableRef;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var HttpMethod = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMethod;
  var FormDataContent = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.FormDataContent;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
  var OutgoingContent = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
  var reflect = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
  var typeInfoImpl = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var Throwable = Error;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpStatement;
  var mu = $module$kotlin_logging_js_legacy.mu;
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var PolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.PolymorphicSerializer;
  var SerializerFactory = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.SerializerFactory;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.Json_x26noe$;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_saj79j$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var throwCCE = Kotlin.throwCCE;
  var PolymorphicModuleBuilder_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.modules.PolymorphicModuleBuilder;
  var SerializersModuleBuilder_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.modules.SerializersModuleBuilder;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var EnumSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.EnumSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.NullableSerializer;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var toString = Kotlin.toString;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var SealedClassSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.SealedClassSerializer;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var toBooleanStrict = Kotlin.kotlin.text.toBooleanStrict_pdl1vz$;
  var String_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.String_xge8xe$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var set_zIndex = $module$kotlin_css.kotlinx.css.set_zIndex_a6g65m$;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var setState = $module$kotlin_react_legacy.react.setState_nm1tvw$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var get_pct = $module$kotlin_css.kotlinx.css.get_pct_rcaex3$;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_marginLeft = $module$kotlin_css.kotlinx.css.set_marginLeft_n8chyh$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var set_padding = $module$kotlin_css.kotlinx.css.set_padding_krvuuu$;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var set_marginTop = $module$kotlin_css.kotlinx.css.set_marginTop_n8chyh$;
  var createElement = $module$kotlin_react_legacy.react.createElement_zepujl$;
  var TextAlign = $module$kotlin_css.kotlinx.css.TextAlign;
  var set_textAlign = $module$kotlin_css.kotlinx.css.set_textAlign_q2ys32$;
  var FontWeight = $module$kotlin_css.kotlinx.css.FontWeight;
  var set_fontWeight = $module$kotlin_css.kotlinx.css.set_fontWeight_6wqc8f$;
  var set_letterSpacing = $module$kotlin_css.kotlinx.css.set_letterSpacing_n8chyh$;
  var padding = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var padding_0 = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var TextDecoration = $module$kotlin_css.kotlinx.css.properties.TextDecoration;
  var set_textDecoration = $module$kotlin_css.kotlinx.css.set_textDecoration_pbf7yq$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var TextOverflow = $module$kotlin_css.kotlinx.css.TextOverflow;
  var set_textOverflow = $module$kotlin_css.kotlinx.css.set_textOverflow_67zq6f$;
  var Overflow = $module$kotlin_css.kotlinx.css.Overflow;
  var set_overflow = $module$kotlin_css.kotlinx.css.set_overflow_qhpm6s$;
  var WebSockets = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.plugins.websocket.WebSockets;
  var HttpCookies = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.plugins.cookies.HttpCookies;
  var ContentNegotiation = $module$ktor_ktor_client_content_negotiation_js_legacy.io.ktor.client.plugins.ContentNegotiation;
  var json = $module$ktor_ktor_serialization_kotlinx_json_js_legacy.io.ktor.serialization.kotlinx.json.json_mhw46j$;
  var HttpClient = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.HttpClient_f0veat$;
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var HttpStatusCode = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpStatusCode;
  var Error_0 = Kotlin.kotlin.Error;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var RComponent_init = $module$kotlin_react_legacy.react.RComponent_init_ftywkw$;
  var RComponent = $module$kotlin_react_legacy.react.RComponent;
  var html = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var SPAN_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var StyledDOMBuilder = $module$kotlin_styled.styled.StyledDOMBuilder;
  var DIV_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var attributesMapOf = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init_0 = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var RDOMBuilder = $module$kotlin_react_dom_legacy.react.dom.RDOMBuilder;
  var attributesMapOf_0 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var A_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
  var url = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.url_g8iu3v$;
  var HttpMethod_0 = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Image = $module$kotlin_css.kotlinx.css.Image;
  var set_backgroundImage = $module$kotlin_css.kotlinx.css.set_backgroundImage_opvm7l$;
  var set_backgroundPosition = $module$kotlin_css.kotlinx.css.set_backgroundPosition_krvuuu$;
  var BackgroundRepeat = $module$kotlin_css.kotlinx.css.BackgroundRepeat;
  var set_backgroundRepeat = $module$kotlin_css.kotlinx.css.set_backgroundRepeat_l8g6hf$;
  var set_backgroundSize = $module$kotlin_css.kotlinx.css.set_backgroundSize_krvuuu$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_left = $module$kotlin_css.kotlinx.css.set_left_n8chyh$;
  var Transforms = $module$kotlin_css.kotlinx.css.properties.Transforms;
  var translate = $module$kotlin_css.kotlinx.css.properties.translate_z52cu5$;
  var set_transform = $module$kotlin_css.kotlinx.css.set_transform_z5yzaw$;
  var set_marginRight = $module$kotlin_css.kotlinx.css.set_marginRight_n8chyh$;
  var ParametersBuilder = $module$ktor_ktor_http_js_legacy.io.ktor.http.ParametersBuilder_za3lpa$;
  var wrapFunction = Kotlin.wrapFunction;
  var KotlinLoggingLevel = $module$kotlin_logging_js_legacy.mu.KotlinLoggingLevel;
  var render = $module$kotlin_react_dom_legacy.react.dom.render_9jwdg9$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var set_marginBottom = $module$kotlin_css.kotlinx.css.set_marginBottom_n8chyh$;
  var set_borderBottom = $module$kotlin_css.kotlinx.css.set_borderBottom_krvuuu$;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_hidden = $module$kotlinx_html_js.kotlinx.html.set_hidden_jqpcbu$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var set_alignContent = $module$kotlin_css.kotlinx.css.set_alignContent_olgsez$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var enumEncode = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_1 = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var FORM_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
  var numberToInt = Kotlin.numberToInt;
  var P_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var html_0 = $module$kotlin_react_dom.react.dom.html;
  var Float = $module$kotlin_css.kotlinx.css.Float;
  var set_float = $module$kotlin_css.kotlinx.css.set_float_oo7voy$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var set_paddingLeft = $module$kotlin_css.kotlinx.css.set_paddingLeft_n8chyh$;
  var set_paddingRight = $module$kotlin_css.kotlinx.css.set_paddingRight_n8chyh$;
  var set_background = $module$kotlin_css.kotlinx.css.set_background_krvuuu$;
  var LineHeight = $module$kotlin_css.kotlinx.css.properties.LineHeight;
  var set_lineHeight = $module$kotlin_css.kotlinx.css.set_lineHeight_ftzj10$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var P_init_0 = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var set_paddingTop = $module$kotlin_css.kotlinx.css.set_paddingTop_n8chyh$;
  var set_paddingBottom = $module$kotlin_css.kotlinx.css.set_paddingBottom_n8chyh$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var contentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_41kwpe$;
  var printStackTrace = Kotlin.kotlin.printStackTrace_dbl4o4$;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var bodyAsText = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.bodyAsText_89yka0$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var Exception = Kotlin.kotlin.Exception;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var serializer_0 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_ca95z9$;
  var css = $module$kotlin_css.kotlinx.css;
  var set_maxHeight = $module$kotlin_css.kotlinx.css.set_maxHeight_n8chyh$;
  var first_0 = Kotlin.kotlin.collections.first_us0mfu$;
  var HashSet = Kotlin.kotlin.collections.HashSet;
  var createInvariantKTypeProjection = Kotlin.createInvariantKTypeProjection;
  var get_host = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.get_host_ocert9$;
  var get_port = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.get_port_ocert9$;
  var url_0 = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.url_77nkxq$;
  var webSocketSession = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.plugins.websocket.webSocketSession_se50ds$;
  var Frame$Text = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Text;
  var readText = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.readText_xv7s0w$;
  var VerticalAlign = $module$kotlin_css.kotlinx.css.VerticalAlign;
  var set_verticalAlign = $module$kotlin_css.kotlinx.css.set_verticalAlign_9eaq6d$;
  var set_maxWidth = $module$kotlin_css.kotlinx.css.set_maxWidth_n8chyh$;
  var IMG_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var BR_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var first_1 = Kotlin.kotlin.collections.first_7wnvza$;
  var plus_1 = Kotlin.kotlin.collections.plus_xfiyik$;
  var plus_2 = Kotlin.kotlin.collections.plus_khz7k3$;
  var set_opacity = $module$kotlin_css.kotlinx.css.set_opacity_if475a$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var set_borderBottomLeftRadius = $module$kotlin_css.kotlinx.css.set_borderBottomLeftRadius_n8chyh$;
  var set_borderBottomRightRadius = $module$kotlin_css.kotlinx.css.set_borderBottomRightRadius_n8chyh$;
  var TD_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var BorderCollapse = $module$kotlin_css.kotlinx.css.BorderCollapse;
  var set_borderCollapse = $module$kotlin_css.kotlinx.css.set_borderCollapse_4z7co3$;
  var get_em = $module$kotlin_css.kotlinx.css.get_em_rcaex3$;
  var set_fontFamily = $module$kotlin_css.kotlinx.css.set_fontFamily_krvuuu$;
  var toMutableList_0 = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var linkedMapOf = Kotlin.kotlin.collections.linkedMapOf_qfcya0$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var TR_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var THEAD_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
  var TBODY_init = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
  var TABLE_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var JsMath = Math;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var TD_init_0 = $module$kotlin_react_dom_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var FormPart = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.FormPart;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var formData = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.formData_l3ed5z$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var MultiPartFormDataContent_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.MultiPartFormDataContent;
  var HeadersBuilder_init = $module$ktor_ktor_http_js_legacy.io.ktor.http.HeadersBuilder;
  InputType_0.prototype = Object.create(Enum.prototype);
  InputType_0.prototype.constructor = InputType_0;
  OutcomeCode.prototype = Object.create(Enum.prototype);
  OutcomeCode.prototype.constructor = OutcomeCode;
  PolicyModel.prototype = Object.create(Enum.prototype);
  PolicyModel.prototype.constructor = PolicyModel;
  CoreType.prototype = Object.create(Enum.prototype);
  CoreType.prototype.constructor = CoreType;
  CoreParametersCLOUD.prototype = Object.create(CoreParameters.prototype);
  CoreParametersCLOUD.prototype.constructor = CoreParametersCLOUD;
  CoreParametersMOCK.prototype = Object.create(CoreParameters.prototype);
  CoreParametersMOCK.prototype.constructor = CoreParametersMOCK;
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
  AclType.prototype = Object.create(Enum.prototype);
  AclType.prototype.constructor = AclType;
  DMType.prototype = Object.create(Enum.prototype);
  DMType.prototype.constructor = DMType;
  MMType.prototype = Object.create(Enum.prototype);
  MMType.prototype.constructor = MMType;
  RMType.prototype = Object.create(Enum.prototype);
  RMType.prototype.constructor = RMType;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  UIType.prototype = Object.create(Enum.prototype);
  UIType.prototype.constructor = UIType;
  Login.prototype = Object.create(RComponent.prototype);
  Login.prototype.constructor = Login;
  CryptoACAlertSeverity.prototype = Object.create(Enum.prototype);
  CryptoACAlertSeverity.prototype.constructor = CryptoACAlertSeverity;
  CryptoACAlert.prototype = Object.create(RComponent.prototype);
  CryptoACAlert.prototype.constructor = CryptoACAlert;
  CryptoACButtonAndIcon.prototype = Object.create(RComponent.prototype);
  CryptoACButtonAndIcon.prototype.constructor = CryptoACButtonAndIcon;
  CryptoACButtonAndIconGroup.prototype = Object.create(RComponent.prototype);
  CryptoACButtonAndIconGroup.prototype.constructor = CryptoACButtonAndIconGroup;
  CryptoACCheckbox.prototype = Object.create(RComponent.prototype);
  CryptoACCheckbox.prototype.constructor = CryptoACCheckbox;
  CryptoACDivider.prototype = Object.create(RComponent.prototype);
  CryptoACDivider.prototype.constructor = CryptoACDivider;
  CryptoACForm.prototype = Object.create(RComponent.prototype);
  CryptoACForm.prototype.constructor = CryptoACForm;
  CryptoACPaper.prototype = Object.create(RComponent.prototype);
  CryptoACPaper.prototype.constructor = CryptoACPaper;
  CryptoACRadioGroup.prototype = Object.create(RComponent.prototype);
  CryptoACRadioGroup.prototype.constructor = CryptoACRadioGroup;
  CryptoACScore.prototype = Object.create(RComponent.prototype);
  CryptoACScore.prototype.constructor = CryptoACScore;
  CryptoACSelect.prototype = Object.create(RComponent.prototype);
  CryptoACSelect.prototype.constructor = CryptoACSelect;
  CryptoACSlider.prototype = Object.create(RComponent.prototype);
  CryptoACSlider.prototype.constructor = CryptoACSlider;
  CryptoACSwitch.prototype = Object.create(RComponent.prototype);
  CryptoACSwitch.prototype.constructor = CryptoACSwitch;
  CryptoACTextField.prototype = Object.create(RComponent.prototype);
  CryptoACTextField.prototype.constructor = CryptoACTextField;
  CryptoACTable.prototype = Object.create(RComponent.prototype);
  CryptoACTable.prototype.constructor = CryptoACTable;
  Dashboard.prototype = Object.create(RComponent.prototype);
  Dashboard.prototype.constructor = Dashboard;
  RBACDashboard.prototype = Object.create(RComponent.prototype);
  RBACDashboard.prototype.constructor = RBACDashboard;
  CloudDashboard.prototype = Object.create(RBACDashboard.prototype);
  CloudDashboard.prototype.constructor = CloudDashboard;
  MQTTDashboard.prototype = Object.create(RBACDashboard.prototype);
  MQTTDashboard.prototype.constructor = MQTTDashboard;
  ModuleItem.prototype = Object.create(RComponent.prototype);
  ModuleItem.prototype.constructor = ModuleItem;
  Modules.prototype = Object.create(RComponent.prototype);
  Modules.prototype.constructor = Modules;
  ConfigurationItem.prototype = Object.create(RComponent.prototype);
  ConfigurationItem.prototype.constructor = ConfigurationItem;
  EntityIcon.prototype = Object.create(RComponent.prototype);
  EntityIcon.prototype.constructor = EntityIcon;
  RequirementItem.prototype = Object.create(RComponent.prototype);
  RequirementItem.prototype.constructor = RequirementItem;
  TradeOffBoard.prototype = Object.create(RComponent.prototype);
  TradeOffBoard.prototype.constructor = TradeOffBoard;
  Scenario.prototype = Object.create(Enum.prototype);
  Scenario.prototype.constructor = Scenario;
  Algorithm.prototype = Object.create(Enum.prototype);
  Algorithm.prototype.constructor = Algorithm;
  Metric.prototype = Object.create(Enum.prototype);
  Metric.prototype.constructor = Metric;
  Domains.prototype = Object.create(Enum.prototype);
  Domains.prototype.constructor = Domains;
  DomainsWithChannels.prototype = Object.create(Enum.prototype);
  DomainsWithChannels.prototype.constructor = DomainsWithChannels;
  Entities.prototype = Object.create(Enum.prototype);
  Entities.prototype.constructor = Entities;
  EntitiesWithChannels.prototype = Object.create(Enum.prototype);
  EntitiesWithChannels.prototype.constructor = EntitiesWithChannels;
  Attackers.prototype = Object.create(Enum.prototype);
  Attackers.prototype.constructor = Attackers;
  Likelihood.prototype = Object.create(Enum.prototype);
  Likelihood.prototype.constructor = Likelihood;
  Impact.prototype = Object.create(Enum.prototype);
  Impact.prototype.constructor = Impact;
  Threshold.prototype = Object.create(Enum.prototype);
  Threshold.prototype.constructor = Threshold;
  SecurityRequirements.prototype = Object.create(Enum.prototype);
  SecurityRequirements.prototype.constructor = SecurityRequirements;
  PerformanceRequirements.prototype = Object.create(Enum.prototype);
  PerformanceRequirements.prototype.constructor = PerformanceRequirements;
  TrustAssumptionsLikelihood.prototype = Object.create(RComponent.prototype);
  TrustAssumptionsLikelihood.prototype.constructor = TrustAssumptionsLikelihood;
  Actions.prototype = Object.create(RComponent.prototype);
  Actions.prototype.constructor = Actions;
  Configuration.prototype = Object.create(RComponent.prototype);
  Configuration.prototype.constructor = Configuration;
  Empty.prototype = Object.create(RComponent.prototype);
  Empty.prototype.constructor = Empty;
  Evaluation.prototype = Object.create(RComponent.prototype);
  Evaluation.prototype.constructor = Evaluation;
  var development;
  function API() {
    API_instance = this;
    this.HTTP = 'http://';
    this.HTTPS = 'https://';
    this.VERSION1_0 = '/v1/';
    this.CURRENT_VERSION_0 = this.VERSION1_0;
    this.CRYPTOAC = '/v1/CryptoAC/';
    this.RM = '/v1/rm/';
    this.DM = '/v1/dm/';
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
  function CryptoACFormField(name, label, type, options, defaultValue, className) {
    if (options === void 0)
      options = null;
    if (defaultValue === void 0)
      defaultValue = null;
    if (className === void 0)
      className = null;
    this.name = name;
    this.label = label;
    this.type = type;
    this.options = options;
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
    return this.options;
  };
  CryptoACFormField.prototype.component5 = function () {
    return this.defaultValue;
  };
  CryptoACFormField.prototype.component6 = function () {
    return this.className;
  };
  CryptoACFormField.prototype.copy_uc97rn$ = function (name, label, type, options, defaultValue, className) {
    return new CryptoACFormField(name === void 0 ? this.name : name, label === void 0 ? this.label : label, type === void 0 ? this.type : type, options === void 0 ? this.options : options, defaultValue === void 0 ? this.defaultValue : defaultValue, className === void 0 ? this.className : className);
  };
  CryptoACFormField.prototype.toString = function () {
    return 'CryptoACFormField(name=' + Kotlin.toString(this.name) + (', label=' + Kotlin.toString(this.label)) + (', type=' + Kotlin.toString(this.type)) + (', options=' + Kotlin.toString(this.options)) + (', defaultValue=' + Kotlin.toString(this.defaultValue)) + (', className=' + Kotlin.toString(this.className)) + ')';
  };
  CryptoACFormField.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    result = result * 31 + Kotlin.hashCode(this.defaultValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.className) | 0;
    return result;
  };
  CryptoACFormField.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.label, other.label) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.options, other.options) && Kotlin.equals(this.defaultValue, other.defaultValue) && Kotlin.equals(this.className, other.className)))));
  };
  function InputType_0(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputType_initFields() {
    InputType_initFields = function () {
    };
    InputType$button_instance = new InputType_0('button', 0, 'button');
    InputType$checkBox_instance = new InputType_0('checkBox', 1, 'checkbox');
    InputType$color_instance = new InputType_0('color', 2, 'color');
    InputType$date_instance = new InputType_0('date', 3, 'date');
    InputType$dateTime_instance = new InputType_0('dateTime', 4, 'datetime');
    InputType$dateTimeLocal_instance = new InputType_0('dateTimeLocal', 5, 'datetime-local');
    InputType$email_instance = new InputType_0('email', 6, 'email');
    InputType$file_instance = new InputType_0('file', 7, 'file');
    InputType$hidden_instance = new InputType_0('hidden', 8, 'hidden');
    InputType$image_instance = new InputType_0('image', 9, 'image');
    InputType$month_instance = new InputType_0('month', 10, 'month');
    InputType$number_instance = new InputType_0('number', 11, 'number');
    InputType$password_instance = new InputType_0('password', 12, 'password');
    InputType$radio_instance = new InputType_0('radio', 13, 'radio');
    InputType$range_instance = new InputType_0('range', 14, 'range');
    InputType$reset_instance = new InputType_0('reset', 15, 'reset');
    InputType$search_instance = new InputType_0('search', 16, 'search');
    InputType$submit_instance = new InputType_0('submit', 17, 'submit');
    InputType$text_instance = new InputType_0('text', 18, 'text');
    InputType$tel_instance = new InputType_0('tel', 19, 'tel');
    InputType$time_instance = new InputType_0('time', 20, 'time');
    InputType$url_instance = new InputType_0('url', 21, 'url');
    InputType$week_instance = new InputType_0('week', 22, 'week');
    InputType$select_instance = new InputType_0('select', 23, 'select');
  }
  var InputType$button_instance;
  function InputType$button_getInstance() {
    InputType_initFields();
    return InputType$button_instance;
  }
  var InputType$checkBox_instance;
  function InputType$checkBox_getInstance() {
    InputType_initFields();
    return InputType$checkBox_instance;
  }
  var InputType$color_instance;
  function InputType$color_getInstance() {
    InputType_initFields();
    return InputType$color_instance;
  }
  var InputType$date_instance;
  function InputType$date_getInstance() {
    InputType_initFields();
    return InputType$date_instance;
  }
  var InputType$dateTime_instance;
  function InputType$dateTime_getInstance() {
    InputType_initFields();
    return InputType$dateTime_instance;
  }
  var InputType$dateTimeLocal_instance;
  function InputType$dateTimeLocal_getInstance() {
    InputType_initFields();
    return InputType$dateTimeLocal_instance;
  }
  var InputType$email_instance;
  function InputType$email_getInstance() {
    InputType_initFields();
    return InputType$email_instance;
  }
  var InputType$file_instance;
  function InputType$file_getInstance() {
    InputType_initFields();
    return InputType$file_instance;
  }
  var InputType$hidden_instance;
  function InputType$hidden_getInstance() {
    InputType_initFields();
    return InputType$hidden_instance;
  }
  var InputType$image_instance;
  function InputType$image_getInstance() {
    InputType_initFields();
    return InputType$image_instance;
  }
  var InputType$month_instance;
  function InputType$month_getInstance() {
    InputType_initFields();
    return InputType$month_instance;
  }
  var InputType$number_instance;
  function InputType$number_getInstance() {
    InputType_initFields();
    return InputType$number_instance;
  }
  var InputType$password_instance;
  function InputType$password_getInstance() {
    InputType_initFields();
    return InputType$password_instance;
  }
  var InputType$radio_instance;
  function InputType$radio_getInstance() {
    InputType_initFields();
    return InputType$radio_instance;
  }
  var InputType$range_instance;
  function InputType$range_getInstance() {
    InputType_initFields();
    return InputType$range_instance;
  }
  var InputType$reset_instance;
  function InputType$reset_getInstance() {
    InputType_initFields();
    return InputType$reset_instance;
  }
  var InputType$search_instance;
  function InputType$search_getInstance() {
    InputType_initFields();
    return InputType$search_instance;
  }
  var InputType$submit_instance;
  function InputType$submit_getInstance() {
    InputType_initFields();
    return InputType$submit_instance;
  }
  var InputType$text_instance;
  function InputType$text_getInstance() {
    InputType_initFields();
    return InputType$text_instance;
  }
  var InputType$tel_instance;
  function InputType$tel_getInstance() {
    InputType_initFields();
    return InputType$tel_instance;
  }
  var InputType$time_instance;
  function InputType$time_getInstance() {
    InputType_initFields();
    return InputType$time_instance;
  }
  var InputType$url_instance;
  function InputType$url_getInstance() {
    InputType_initFields();
    return InputType$url_instance;
  }
  var InputType$week_instance;
  function InputType$week_getInstance() {
    InputType_initFields();
    return InputType$week_instance;
  }
  var InputType$select_instance;
  function InputType$select_getInstance() {
    InputType_initFields();
    return InputType$select_instance;
  }
  InputType_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputType',
    interfaces: [Enum]
  };
  function InputType$values() {
    return [InputType$button_getInstance(), InputType$checkBox_getInstance(), InputType$color_getInstance(), InputType$date_getInstance(), InputType$dateTime_getInstance(), InputType$dateTimeLocal_getInstance(), InputType$email_getInstance(), InputType$file_getInstance(), InputType$hidden_getInstance(), InputType$image_getInstance(), InputType$month_getInstance(), InputType$number_getInstance(), InputType$password_getInstance(), InputType$radio_getInstance(), InputType$range_getInstance(), InputType$reset_getInstance(), InputType$search_getInstance(), InputType$submit_getInstance(), InputType$text_getInstance(), InputType$tel_getInstance(), InputType$time_getInstance(), InputType$url_getInstance(), InputType$week_getInstance(), InputType$select_getInstance()];
  }
  InputType_0.values = InputType$values;
  function InputType$valueOf(name) {
    switch (name) {
      case 'button':
        return InputType$button_getInstance();
      case 'checkBox':
        return InputType$checkBox_getInstance();
      case 'color':
        return InputType$color_getInstance();
      case 'date':
        return InputType$date_getInstance();
      case 'dateTime':
        return InputType$dateTime_getInstance();
      case 'dateTimeLocal':
        return InputType$dateTimeLocal_getInstance();
      case 'email':
        return InputType$email_getInstance();
      case 'file':
        return InputType$file_getInstance();
      case 'hidden':
        return InputType$hidden_getInstance();
      case 'image':
        return InputType$image_getInstance();
      case 'month':
        return InputType$month_getInstance();
      case 'number':
        return InputType$number_getInstance();
      case 'password':
        return InputType$password_getInstance();
      case 'radio':
        return InputType$radio_getInstance();
      case 'range':
        return InputType$range_getInstance();
      case 'reset':
        return InputType$reset_getInstance();
      case 'search':
        return InputType$search_getInstance();
      case 'submit':
        return InputType$submit_getInstance();
      case 'text':
        return InputType$text_getInstance();
      case 'tel':
        return InputType$tel_getInstance();
      case 'time':
        return InputType$time_getInstance();
      case 'url':
        return InputType$url_getInstance();
      case 'week':
        return InputType$week_getInstance();
      case 'select':
        return InputType$select_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.InputType.' + name);
    }
  }
  InputType_0.valueOf_61zpoe$ = InputType$valueOf;
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
    OutcomeCode$CODE_034_UNLOCK_FAILED_instance = new OutcomeCode('CODE_034_UNLOCK_FAILED', 34);
    OutcomeCode$CODE_035_ADMIN_ALREADY_INITIALIZED_instance = new OutcomeCode('CODE_035_ADMIN_ALREADY_INITIALIZED', 35);
    OutcomeCode$CODE_036_ADMIN_NAME_instance = new OutcomeCode('CODE_036_ADMIN_NAME', 36);
    OutcomeCode$CODE_037_FORBIDDEN_instance = new OutcomeCode('CODE_037_FORBIDDEN', 37);
    OutcomeCode$CODE_038_UNAUTHORIZED_instance = new OutcomeCode('CODE_038_UNAUTHORIZED', 38);
    OutcomeCode$CODE_039_PROFILE_NOT_FOUND_instance = new OutcomeCode('CODE_039_PROFILE_NOT_FOUND', 39);
    OutcomeCode$CODE_040_MALFORMED_PROFILE_FILE_instance = new OutcomeCode('CODE_040_MALFORMED_PROFILE_FILE', 40);
    OutcomeCode$CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA_instance = new OutcomeCode('CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA', 41);
    OutcomeCode$CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA_instance = new OutcomeCode('CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA', 42);
    OutcomeCode$CODE_043_RM_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_043_RM_CONNECTION_TIMEOUT', 43);
    OutcomeCode$CODE_044_DM_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_044_DM_CONNECTION_TIMEOUT', 44);
    OutcomeCode$CODE_045_MM_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_045_MM_CONNECTION_TIMEOUT', 45);
    OutcomeCode$CODE_046_CRYPTOAC_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_046_CRYPTOAC_CONNECTION_TIMEOUT', 46);
    OutcomeCode$CODE_047_OPA_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_047_OPA_CONNECTION_TIMEOUT', 47);
    OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_instance = new OutcomeCode('CODE_048_HTTP_METHOD_NOT_SUPPORTED', 48);
    OutcomeCode$CODE_049_UNEXPECTED_instance = new OutcomeCode('CODE_049_UNEXPECTED', 49);
    OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_instance = new OutcomeCode('CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION', 50);
    OutcomeCode$CODE_051_LOGIN_REQUIRED_instance = new OutcomeCode('CODE_051_LOGIN_REQUIRED', 51);
    OutcomeCode$CODE_052_USER_ALREADY_INITIALIZED_instance = new OutcomeCode('CODE_052_USER_ALREADY_INITIALIZED', 52);
    OutcomeCode$CODE_053_USER_IS_INCOMPLETE_instance = new OutcomeCode('CODE_053_USER_IS_INCOMPLETE', 53);
    OutcomeCode$CODE_054_CREATE_USER_MM_instance = new OutcomeCode('CODE_054_CREATE_USER_MM', 54);
    OutcomeCode$CODE_055_ACCESS_DENIED_TO_MM_instance = new OutcomeCode('CODE_055_ACCESS_DENIED_TO_MM', 55);
    OutcomeCode$CODE_056_DELETE_USER_MM_instance = new OutcomeCode('CODE_056_DELETE_USER_MM', 56);
    OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_instance = new OutcomeCode('CODE_057_INTERFACE_TYPE_UPDATED', 57);
    OutcomeCode$CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_instance = new OutcomeCode('CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM', 58);
    OutcomeCode$CODE_059_ACCESS_DENIED_TO_DM_instance = new OutcomeCode('CODE_059_ACCESS_DENIED_TO_DM', 59);
    OutcomeCode$CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED_instance = new OutcomeCode('CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED', 60);
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
  var OutcomeCode$CODE_034_UNLOCK_FAILED_instance;
  function OutcomeCode$CODE_034_UNLOCK_FAILED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_034_UNLOCK_FAILED_instance;
  }
  var OutcomeCode$CODE_035_ADMIN_ALREADY_INITIALIZED_instance;
  function OutcomeCode$CODE_035_ADMIN_ALREADY_INITIALIZED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_035_ADMIN_ALREADY_INITIALIZED_instance;
  }
  var OutcomeCode$CODE_036_ADMIN_NAME_instance;
  function OutcomeCode$CODE_036_ADMIN_NAME_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_036_ADMIN_NAME_instance;
  }
  var OutcomeCode$CODE_037_FORBIDDEN_instance;
  function OutcomeCode$CODE_037_FORBIDDEN_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_037_FORBIDDEN_instance;
  }
  var OutcomeCode$CODE_038_UNAUTHORIZED_instance;
  function OutcomeCode$CODE_038_UNAUTHORIZED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_038_UNAUTHORIZED_instance;
  }
  var OutcomeCode$CODE_039_PROFILE_NOT_FOUND_instance;
  function OutcomeCode$CODE_039_PROFILE_NOT_FOUND_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_039_PROFILE_NOT_FOUND_instance;
  }
  var OutcomeCode$CODE_040_MALFORMED_PROFILE_FILE_instance;
  function OutcomeCode$CODE_040_MALFORMED_PROFILE_FILE_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_040_MALFORMED_PROFILE_FILE_instance;
  }
  var OutcomeCode$CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA_instance;
  function OutcomeCode$CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA_instance;
  }
  var OutcomeCode$CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA_instance;
  function OutcomeCode$CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA_instance;
  }
  var OutcomeCode$CODE_043_RM_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_043_RM_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_043_RM_CONNECTION_TIMEOUT_instance;
  }
  var OutcomeCode$CODE_044_DM_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_044_DM_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_044_DM_CONNECTION_TIMEOUT_instance;
  }
  var OutcomeCode$CODE_045_MM_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_045_MM_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_045_MM_CONNECTION_TIMEOUT_instance;
  }
  var OutcomeCode$CODE_046_CRYPTOAC_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_046_CRYPTOAC_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_046_CRYPTOAC_CONNECTION_TIMEOUT_instance;
  }
  var OutcomeCode$CODE_047_OPA_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_047_OPA_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_047_OPA_CONNECTION_TIMEOUT_instance;
  }
  var OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_instance;
  function OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_instance;
  }
  var OutcomeCode$CODE_049_UNEXPECTED_instance;
  function OutcomeCode$CODE_049_UNEXPECTED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_049_UNEXPECTED_instance;
  }
  var OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_instance;
  function OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_instance;
  }
  var OutcomeCode$CODE_051_LOGIN_REQUIRED_instance;
  function OutcomeCode$CODE_051_LOGIN_REQUIRED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_051_LOGIN_REQUIRED_instance;
  }
  var OutcomeCode$CODE_052_USER_ALREADY_INITIALIZED_instance;
  function OutcomeCode$CODE_052_USER_ALREADY_INITIALIZED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_052_USER_ALREADY_INITIALIZED_instance;
  }
  var OutcomeCode$CODE_053_USER_IS_INCOMPLETE_instance;
  function OutcomeCode$CODE_053_USER_IS_INCOMPLETE_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_053_USER_IS_INCOMPLETE_instance;
  }
  var OutcomeCode$CODE_054_CREATE_USER_MM_instance;
  function OutcomeCode$CODE_054_CREATE_USER_MM_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_054_CREATE_USER_MM_instance;
  }
  var OutcomeCode$CODE_055_ACCESS_DENIED_TO_MM_instance;
  function OutcomeCode$CODE_055_ACCESS_DENIED_TO_MM_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_055_ACCESS_DENIED_TO_MM_instance;
  }
  var OutcomeCode$CODE_056_DELETE_USER_MM_instance;
  function OutcomeCode$CODE_056_DELETE_USER_MM_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_056_DELETE_USER_MM_instance;
  }
  var OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_instance;
  function OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_instance;
  }
  var OutcomeCode$CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_instance;
  function OutcomeCode$CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_instance;
  }
  var OutcomeCode$CODE_059_ACCESS_DENIED_TO_DM_instance;
  function OutcomeCode$CODE_059_ACCESS_DENIED_TO_DM_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_059_ACCESS_DENIED_TO_DM_instance;
  }
  var OutcomeCode$CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED_instance;
  function OutcomeCode$CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED_instance;
  }
  OutcomeCode.prototype.getNumber = function () {
    return split(this.toString(), ['_']).get_za3lpa$(1);
  };
  OutcomeCode.prototype.getMessage = function () {
    var $receiver = toMutableList(split(this.toString(), ['_']));
    var destination = ArrayList_init();
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      if (index_0 !== 0 && index_0 !== 1)
        destination.add_11rb$(item);
    }
    return joinToString(destination, ' ');
  };
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
    this.descriptor_n4u1rd$_0 = new EnumDescriptor('eu.fbk.st.cryptoac.OutcomeCode', 61);
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
    this.descriptor.addElement_ivxn3r$('CODE_034_UNLOCK_FAILED');
    this.descriptor.addElement_ivxn3r$('CODE_035_ADMIN_ALREADY_INITIALIZED');
    this.descriptor.addElement_ivxn3r$('CODE_036_ADMIN_NAME');
    this.descriptor.addElement_ivxn3r$('CODE_037_FORBIDDEN');
    this.descriptor.addElement_ivxn3r$('CODE_038_UNAUTHORIZED');
    this.descriptor.addElement_ivxn3r$('CODE_039_PROFILE_NOT_FOUND');
    this.descriptor.addElement_ivxn3r$('CODE_040_MALFORMED_PROFILE_FILE');
    this.descriptor.addElement_ivxn3r$('CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA');
    this.descriptor.addElement_ivxn3r$('CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA');
    this.descriptor.addElement_ivxn3r$('CODE_043_RM_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_044_DM_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_045_MM_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_046_CRYPTOAC_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_047_OPA_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_048_HTTP_METHOD_NOT_SUPPORTED');
    this.descriptor.addElement_ivxn3r$('CODE_049_UNEXPECTED');
    this.descriptor.addElement_ivxn3r$('CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION');
    this.descriptor.addElement_ivxn3r$('CODE_051_LOGIN_REQUIRED');
    this.descriptor.addElement_ivxn3r$('CODE_052_USER_ALREADY_INITIALIZED');
    this.descriptor.addElement_ivxn3r$('CODE_053_USER_IS_INCOMPLETE');
    this.descriptor.addElement_ivxn3r$('CODE_054_CREATE_USER_MM');
    this.descriptor.addElement_ivxn3r$('CODE_055_ACCESS_DENIED_TO_MM');
    this.descriptor.addElement_ivxn3r$('CODE_056_DELETE_USER_MM');
    this.descriptor.addElement_ivxn3r$('CODE_057_INTERFACE_TYPE_UPDATED');
    this.descriptor.addElement_ivxn3r$('CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM');
    this.descriptor.addElement_ivxn3r$('CODE_059_ACCESS_DENIED_TO_DM');
    this.descriptor.addElement_ivxn3r$('CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED');
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
    return [OutcomeCode$CODE_000_SUCCESS_getInstance(), OutcomeCode$CODE_001_USER_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_002_ROLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_003_FILE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance(), OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance(), OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_009_FILETUPLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_010_ROLETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_012_FILETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_013_USER_WAS_DELETED_getInstance(), OutcomeCode$CODE_014_ROLE_WAS_DELETED_getInstance(), OutcomeCode$CODE_015_FILE_WAS_DELETED_getInstance(), OutcomeCode$CODE_016_INVALID_PERMISSION_getInstance(), OutcomeCode$CODE_017_INVALID_VERSION_NUMBER_getInstance(), OutcomeCode$CODE_018_INTERFACE_CONFIGURATION_PARAMETERS_getInstance(), OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance(), OutcomeCode$CODE_020_INVALID_PARAMETER_getInstance(), OutcomeCode$CODE_021_RM_CONFIGURATION_getInstance(), OutcomeCode$CODE_022_ADMIN_CANNOT_BE_MODIFIED_getInstance(), OutcomeCode$CODE_023_USER_CANNOT_BE_MODIFIED_getInstance(), OutcomeCode$CODE_024_FILE_DELETE_getInstance(), OutcomeCode$CODE_025_FILE_RENAMING_getInstance(), OutcomeCode$CODE_026_TUPLE_FORMAT_getInstance(), OutcomeCode$CODE_027_AC_ENFORCEMENT_INCONSISTENT_getInstance(), OutcomeCode$CODE_028_OPA_POLICY_CREATION_getInstance(), OutcomeCode$CODE_029_OPA_DOCUMENT_UPDATE_getInstance(), OutcomeCode$CODE_030_OPA_DOCUMENT_DOWNLOAD_getInstance(), OutcomeCode$CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance(), OutcomeCode$CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance(), OutcomeCode$CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS_getInstance(), OutcomeCode$CODE_034_UNLOCK_FAILED_getInstance(), OutcomeCode$CODE_035_ADMIN_ALREADY_INITIALIZED_getInstance(), OutcomeCode$CODE_036_ADMIN_NAME_getInstance(), OutcomeCode$CODE_037_FORBIDDEN_getInstance(), OutcomeCode$CODE_038_UNAUTHORIZED_getInstance(), OutcomeCode$CODE_039_PROFILE_NOT_FOUND_getInstance(), OutcomeCode$CODE_040_MALFORMED_PROFILE_FILE_getInstance(), OutcomeCode$CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA_getInstance(), OutcomeCode$CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA_getInstance(), OutcomeCode$CODE_043_RM_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_044_DM_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_045_MM_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_046_CRYPTOAC_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_047_OPA_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_getInstance(), OutcomeCode$CODE_049_UNEXPECTED_getInstance(), OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), OutcomeCode$CODE_051_LOGIN_REQUIRED_getInstance(), OutcomeCode$CODE_052_USER_ALREADY_INITIALIZED_getInstance(), OutcomeCode$CODE_053_USER_IS_INCOMPLETE_getInstance(), OutcomeCode$CODE_054_CREATE_USER_MM_getInstance(), OutcomeCode$CODE_055_ACCESS_DENIED_TO_MM_getInstance(), OutcomeCode$CODE_056_DELETE_USER_MM_getInstance(), OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_getInstance(), OutcomeCode$CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_getInstance(), OutcomeCode$CODE_059_ACCESS_DENIED_TO_DM_getInstance(), OutcomeCode$CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED_getInstance()];
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
      case 'CODE_034_UNLOCK_FAILED':
        return OutcomeCode$CODE_034_UNLOCK_FAILED_getInstance();
      case 'CODE_035_ADMIN_ALREADY_INITIALIZED':
        return OutcomeCode$CODE_035_ADMIN_ALREADY_INITIALIZED_getInstance();
      case 'CODE_036_ADMIN_NAME':
        return OutcomeCode$CODE_036_ADMIN_NAME_getInstance();
      case 'CODE_037_FORBIDDEN':
        return OutcomeCode$CODE_037_FORBIDDEN_getInstance();
      case 'CODE_038_UNAUTHORIZED':
        return OutcomeCode$CODE_038_UNAUTHORIZED_getInstance();
      case 'CODE_039_PROFILE_NOT_FOUND':
        return OutcomeCode$CODE_039_PROFILE_NOT_FOUND_getInstance();
      case 'CODE_040_MALFORMED_PROFILE_FILE':
        return OutcomeCode$CODE_040_MALFORMED_PROFILE_FILE_getInstance();
      case 'CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA':
        return OutcomeCode$CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA_getInstance();
      case 'CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA':
        return OutcomeCode$CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA_getInstance();
      case 'CODE_043_RM_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_043_RM_CONNECTION_TIMEOUT_getInstance();
      case 'CODE_044_DM_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_044_DM_CONNECTION_TIMEOUT_getInstance();
      case 'CODE_045_MM_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_045_MM_CONNECTION_TIMEOUT_getInstance();
      case 'CODE_046_CRYPTOAC_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_046_CRYPTOAC_CONNECTION_TIMEOUT_getInstance();
      case 'CODE_047_OPA_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_047_OPA_CONNECTION_TIMEOUT_getInstance();
      case 'CODE_048_HTTP_METHOD_NOT_SUPPORTED':
        return OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_getInstance();
      case 'CODE_049_UNEXPECTED':
        return OutcomeCode$CODE_049_UNEXPECTED_getInstance();
      case 'CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION':
        return OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance();
      case 'CODE_051_LOGIN_REQUIRED':
        return OutcomeCode$CODE_051_LOGIN_REQUIRED_getInstance();
      case 'CODE_052_USER_ALREADY_INITIALIZED':
        return OutcomeCode$CODE_052_USER_ALREADY_INITIALIZED_getInstance();
      case 'CODE_053_USER_IS_INCOMPLETE':
        return OutcomeCode$CODE_053_USER_IS_INCOMPLETE_getInstance();
      case 'CODE_054_CREATE_USER_MM':
        return OutcomeCode$CODE_054_CREATE_USER_MM_getInstance();
      case 'CODE_055_ACCESS_DENIED_TO_MM':
        return OutcomeCode$CODE_055_ACCESS_DENIED_TO_MM_getInstance();
      case 'CODE_056_DELETE_USER_MM':
        return OutcomeCode$CODE_056_DELETE_USER_MM_getInstance();
      case 'CODE_057_INTERFACE_TYPE_UPDATED':
        return OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_getInstance();
      case 'CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM':
        return OutcomeCode$CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_getInstance();
      case 'CODE_059_ACCESS_DENIED_TO_DM':
        return OutcomeCode$CODE_059_ACCESS_DENIED_TO_DM_getInstance();
      case 'CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED':
        return OutcomeCode$CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.OutcomeCode.' + name);
    }
  }
  OutcomeCode.valueOf_61zpoe$ = OutcomeCode$valueOf;
  function PolicyModel(name, ordinal) {
    PolicyModel$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PolicyModel_initFields() {
    PolicyModel_initFields = function () {
    };
    PolicyModel$RBAC_instance = new PolicyModel('RBAC', 0);
    PolicyModel$ABAC_instance = new PolicyModel('ABAC', 1);
    PolicyModel$Companion_getInstance();
  }
  var PolicyModel$RBAC_instance;
  function PolicyModel$RBAC_getInstance() {
    PolicyModel_initFields();
    return PolicyModel$RBAC_instance;
  }
  var PolicyModel$ABAC_instance;
  function PolicyModel$ABAC_getInstance() {
    PolicyModel_initFields();
    return PolicyModel$ABAC_instance;
  }
  function PolicyModel$Companion() {
    PolicyModel$Companion_instance = this;
  }
  PolicyModel$Companion.prototype.serializer = function () {
    return PolicyModel$$serializer_getInstance();
  };
  PolicyModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PolicyModel$Companion_instance = null;
  function PolicyModel$Companion_getInstance() {
    if (PolicyModel$Companion_instance === null) {
      new PolicyModel$Companion();
    }return PolicyModel$Companion_instance;
  }
  function PolicyModel$$serializer() {
    this.descriptor_k0xgdd$_0 = new EnumDescriptor('eu.fbk.st.cryptoac.PolicyModel', 2);
    this.descriptor.addElement_ivxn3r$('RBAC');
    this.descriptor.addElement_ivxn3r$('ABAC');
    PolicyModel$$serializer_instance = this;
  }
  Object.defineProperty(PolicyModel$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_k0xgdd$_0;
    }
  });
  PolicyModel$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeEnum_szpzho$(this.descriptor, value.ordinal);
  };
  PolicyModel$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return PolicyModel$values()[decoder.decodeEnum_24f42q$(this.descriptor)];
  };
  PolicyModel$$serializer.prototype.childSerializers = function () {
    return [];
  };
  PolicyModel$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PolicyModel$$serializer_instance = null;
  function PolicyModel$$serializer_getInstance() {
    if (PolicyModel$$serializer_instance === null) {
      new PolicyModel$$serializer();
    }return PolicyModel$$serializer_instance;
  }
  PolicyModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolicyModel',
    interfaces: [Enum]
  };
  function PolicyModel$values() {
    return [PolicyModel$RBAC_getInstance(), PolicyModel$ABAC_getInstance()];
  }
  PolicyModel.values = PolicyModel$values;
  function PolicyModel$valueOf(name) {
    switch (name) {
      case 'RBAC':
        return PolicyModel$RBAC_getInstance();
      case 'ABAC':
        return PolicyModel$ABAC_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.PolicyModel.' + name);
    }
  }
  PolicyModel.valueOf_61zpoe$ = PolicyModel$valueOf;
  function SERVER() {
    SERVER_instance = this;
    this.CRYPTO = 'Cryptography';
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
    this.RM = 'RM';
    this.MM = 'MM';
    this.DM = 'DM';
    this.RM_URL = 'RM_URL';
    this.RM_PORT = 'RM_Port';
    this.DM_URL = 'DM_URL';
    this.DM_TLS = 'DM_TLS';
    this.DM_PORT = 'DM_Port';
    this.DM_PASSWORD = 'DM_Password';
    this.MM_URL = 'MM_URL';
    this.MM_PASSWORD = 'MM_Password';
    this.MM_TOKEN = 'MM_Token';
    this.MM_PORT = 'MM_Port';
    this.OPA_URL = 'OPA_URL';
    this.OPA_POLICY_MODEL = 'OPA_POLICY_MODEL';
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
  function Utils() {
    Utils$Companion_getInstance();
  }
  function Utils$Companion() {
    Utils$Companion_instance = this;
  }
  Utils$Companion.prototype.generateRandomString_za3lpa$ = function (length) {
    if (length === void 0)
      length = 20;
    var charPool = plus_0(plus(new CharRange(97, 122), new CharRange(65, 90)), new CharRange(48, 57));
    var $receiver = new IntRange(1, length);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(Random.Default.nextInt_vux9f0$(0, charPool.size));
    }
    var transform = getCallableRef('get', function ($receiver, p1) {
      return $receiver.get_za3lpa$(p1);
    }.bind(null, charPool));
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(transform(item_0));
    }
    return joinToString(destination_0, '');
  };
  Utils$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Utils$Companion_instance = null;
  function Utils$Companion_getInstance() {
    if (Utils$Companion_instance === null) {
      new Utils$Companion();
    }return Utils$Companion_instance;
  }
  Utils.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Utils',
    interfaces: []
  };
  function Coroutine$submitFormPatch($receiver_0, formParameters_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formParameters = formParameters_0;
    this.local$block = block_0;
  }
  Coroutine$submitFormPatch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$submitFormPatch.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$submitFormPatch.prototype.constructor = Coroutine$submitFormPatch;
  Coroutine$submitFormPatch.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_1 = new HttpRequestBuilder_init();
            $receiver_1.method = HttpMethod.Companion.Patch;
            var body = new FormDataContent(this.local$formParameters);
            if (body == null) {
              $receiver_1.body = utils.EmptyContent;
              $receiver_1.bodyType = null;
            } else if (Kotlin.isType(body, OutgoingContent)) {
              $receiver_1.body = body;
              $receiver_1.bodyType = null;
            } else {
              $receiver_1.body = body;
              var tmp$ = reflect.JsType;
              var tmp$_0 = getKClass(FormDataContent);
              var tryGetType$result;
              tryGetType$break: do {
                try {
                  tryGetType$result = createKType(getKClass(FormDataContent), [], false);
                } catch (cause) {
                  if (Kotlin.isType(cause, Throwable)) {
                    tryGetType$result = null;
                    break tryGetType$break;
                  } else
                    throw cause;
                }
              }
               while (false);
              $receiver_1.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
            }

            this.local$block($receiver_1);
            this.state_0 = 2;
            this.result_0 = (new HttpStatement_init($receiver_1, this.local$$receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function submitFormPatch($receiver_0, formParameters_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$submitFormPatch($receiver_0, formParameters_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function polymorphic$lambda($receiver) {
    return Unit;
  }
  function logger$lambda() {
    return Unit;
  }
  var logger;
  function CoreParameters() {
    CoreParameters$Companion_getInstance();
  }
  function CoreParameters$checkParameters$lambda(this$CoreParameters) {
    return function () {
      return 'Username ' + this$CoreParameters.user.name + ' does not respect TEXT regex';
    };
  }
  function CoreParameters$checkParameters$lambda_0() {
    return 'Encryption keys does not respect BASE64 regex';
  }
  function CoreParameters$checkParameters$lambda_1() {
    return 'Signing keys does not respect BASE64 regex';
  }
  function CoreParameters$checkParameters$lambda_2(this$CoreParameters) {
    return function () {
      return 'Parameters version is not supported (version' + (' number is ' + this$CoreParameters.versionNumber + ', supported are 1..1');
    };
  }
  CoreParameters.prototype.checkParameters = function () {
    var tmp$;
    if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.user.name)) {
      logger.warn_nq59yw$(CoreParameters$checkParameters$lambda(this));
      return false;
    } else if (this.user.asymEncKeys != null && (!SafeRegex$Companion_getInstance().BASE64.matches_6bul2c$(ensureNotNull(this.user.asymEncKeys).public) || !SafeRegex$Companion_getInstance().BASE64.matches_6bul2c$(ensureNotNull(this.user.asymEncKeys).private))) {
      logger.warn_nq59yw$(CoreParameters$checkParameters$lambda_0);
      return false;
    } else if (this.user.asymSigKeys != null && (!SafeRegex$Companion_getInstance().BASE64.matches_6bul2c$(ensureNotNull(this.user.asymSigKeys).public) || !SafeRegex$Companion_getInstance().BASE64.matches_6bul2c$(ensureNotNull(this.user.asymSigKeys).private))) {
      logger.warn_nq59yw$(CoreParameters$checkParameters$lambda_1);
      return false;
    } else {
      tmp$ = this.versionNumber;
      if (!(1 <= tmp$ && tmp$ <= 1)) {
        logger.warn_nq59yw$(CoreParameters$checkParameters$lambda_2(this));
        return false;
      } else {
        return true;
      }
    }
  };
  CoreParameters.prototype.obscureSensitiveFields = function () {
    var tmp$, tmp$_0;
    (tmp$ = this.user.asymEncKeys) != null ? (tmp$.private = '***') : null;
    (tmp$_0 = this.user.asymSigKeys) != null ? (tmp$_0.private = '***') : null;
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
    interfaces: [SerializerFactory]
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
    CoreType$RBAC_MOCK_instance = new CoreType('RBAC_MOCK', 2);
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
  var CoreType$RBAC_MOCK_instance;
  function CoreType$RBAC_MOCK_getInstance() {
    CoreType_initFields();
    return CoreType$RBAC_MOCK_instance;
  }
  CoreType.prototype.toPrettyString = function () {
    switch (this.name) {
      case 'RBAC_CLOUD':
        return 'RBAC for the Cloud';
      case 'RBAC_MQTT':
        return 'RBAC for MQTT';
      case 'RBAC_MOCK':
        return 'RBAC for testing';
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  CoreType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoreType',
    interfaces: [Enum]
  };
  function CoreType$values() {
    return [CoreType$RBAC_CLOUD_getInstance(), CoreType$RBAC_MQTT_getInstance(), CoreType$RBAC_MOCK_getInstance()];
  }
  CoreType.values = CoreType$values;
  function CoreType$valueOf(name) {
    switch (name) {
      case 'RBAC_CLOUD':
        return CoreType$RBAC_CLOUD_getInstance();
      case 'RBAC_MQTT':
        return CoreType$RBAC_MQTT_getInstance();
      case 'RBAC_MOCK':
        return CoreType$RBAC_MOCK_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.core.CoreType.' + name);
    }
  }
  CoreType.valueOf_61zpoe$ = CoreType$valueOf;
  var module_0;
  function myJson$lambda($receiver) {
    $receiver.encodeDefaults = true;
    $receiver.serializersModule = module_0;
    return Unit;
  }
  var myJson;
  function logger$lambda_0() {
    return Unit;
  }
  var logger_0;
  function CoreParametersCLOUD(user, coreType, cryptoType, versionNumber, rmInterfaceParameters, mmInterfaceParameters, dmInterfaceParameters, opaInterfaceParameters) {
    CoreParametersCLOUD$Companion_getInstance();
    if (coreType === void 0)
      coreType = CoreType$RBAC_CLOUD_getInstance();
    if (versionNumber === void 0)
      versionNumber = 1;
    CoreParameters.call(this);
    this.user_kai3sp$_0 = user;
    this.coreType_o3qeh7$_0 = coreType;
    this.cryptoType_1xhvu1$_0 = cryptoType;
    this.versionNumber_35lban$_0 = versionNumber;
    this.rmInterfaceParameters = rmInterfaceParameters;
    this.mmInterfaceParameters = mmInterfaceParameters;
    this.dmInterfaceParameters = dmInterfaceParameters;
    this.opaInterfaceParameters = opaInterfaceParameters;
  }
  Object.defineProperty(CoreParametersCLOUD.prototype, 'user', {
    get: function () {
      return this.user_kai3sp$_0;
    },
    set: function (user) {
      this.user_kai3sp$_0 = user;
    }
  });
  Object.defineProperty(CoreParametersCLOUD.prototype, 'coreType', {
    get: function () {
      return this.coreType_o3qeh7$_0;
    }
  });
  Object.defineProperty(CoreParametersCLOUD.prototype, 'cryptoType', {
    get: function () {
      return this.cryptoType_1xhvu1$_0;
    }
  });
  Object.defineProperty(CoreParametersCLOUD.prototype, 'versionNumber', {
    get: function () {
      return this.versionNumber_35lban$_0;
    }
  });
  CoreParametersCLOUD.prototype.checkParameters = function () {
    if (!CoreParameters.prototype.checkParameters.call(this)) {
      return false;
    } else {
      return this.rmInterfaceParameters.checkParameters() && this.mmInterfaceParameters.checkParameters() && this.dmInterfaceParameters.checkParameters() && this.opaInterfaceParameters.checkParameters();
    }
  };
  function CoreParametersCLOUD$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  CoreParametersCLOUD.prototype.update_8dp87x$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, CoreParametersCLOUD)) {
      this.rmInterfaceParameters.update_3asgqy$(updatedParameters.rmInterfaceParameters);
      this.mmInterfaceParameters.update_f8hg2y$(updatedParameters.mmInterfaceParameters);
      this.dmInterfaceParameters.update_yb6fw6$(updatedParameters.dmInterfaceParameters);
      this.opaInterfaceParameters.update_3yqp66$(updatedParameters.opaInterfaceParameters);
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_0.error_nq59yw$(CoreParametersCLOUD$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  CoreParametersCLOUD.prototype.obscureSensitiveFields = function () {
    CoreParameters.prototype.obscureSensitiveFields.call(this);
    this.rmInterfaceParameters.obscureSensitiveFields();
    this.mmInterfaceParameters.obscureSensitiveFields();
    this.dmInterfaceParameters.obscureSensitiveFields();
    this.opaInterfaceParameters.obscureSensitiveFields();
  };
  CoreParametersCLOUD.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, CoreParametersCLOUD) ? tmp$_0 : throwCCE();
    if (!((tmp$_1 = this.user) != null ? tmp$_1.equals(other.user) : null))
      return false;
    if (this.coreType !== other.coreType)
      return false;
    if (this.cryptoType !== other.cryptoType)
      return false;
    if (this.versionNumber !== other.versionNumber)
      return false;
    if (!equals(this.rmInterfaceParameters, other.rmInterfaceParameters))
      return false;
    if (!equals(this.mmInterfaceParameters, other.mmInterfaceParameters))
      return false;
    if (!equals(this.dmInterfaceParameters, other.dmInterfaceParameters))
      return false;
    if (!((tmp$_2 = this.opaInterfaceParameters) != null ? tmp$_2.equals(other.opaInterfaceParameters) : null))
      return false;
    return true;
  };
  CoreParametersCLOUD.prototype.hashCode = function () {
    var result = this.user.hashCode();
    result = (31 * result | 0) + this.coreType.hashCode() | 0;
    result = (31 * result | 0) + this.cryptoType.hashCode() | 0;
    result = (31 * result | 0) + this.versionNumber | 0;
    result = (31 * result | 0) + hashCode(this.rmInterfaceParameters) | 0;
    result = (31 * result | 0) + hashCode(this.mmInterfaceParameters) | 0;
    result = (31 * result | 0) + hashCode(this.dmInterfaceParameters) | 0;
    result = (31 * result | 0) + this.opaInterfaceParameters.hashCode() | 0;
    return result;
  };
  function CoreParametersCLOUD$Companion() {
    CoreParametersCLOUD$Companion_instance = this;
  }
  CoreParametersCLOUD$Companion.prototype.serializer = function () {
    return CoreParametersCLOUD$$serializer_getInstance();
  };
  CoreParametersCLOUD$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CoreParametersCLOUD$Companion_instance = null;
  function CoreParametersCLOUD$Companion_getInstance() {
    if (CoreParametersCLOUD$Companion_instance === null) {
      new CoreParametersCLOUD$Companion();
    }return CoreParametersCLOUD$Companion_instance;
  }
  function CoreParametersCLOUD$$serializer() {
    this.descriptor_68vvtp$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.CoreParametersCLOUD', this, 8);
    this.descriptor.addElement_ivxn3r$('user', false);
    this.descriptor.addElement_ivxn3r$('coreType', true);
    this.descriptor.addElement_ivxn3r$('cryptoType', false);
    this.descriptor.addElement_ivxn3r$('versionNumber', true);
    this.descriptor.addElement_ivxn3r$('rmInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('mmInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('dmInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('opaInterfaceParameters', false);
    CoreParametersCLOUD$$serializer_instance = this;
  }
  Object.defineProperty(CoreParametersCLOUD$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_68vvtp$_0;
    }
  });
  CoreParametersCLOUD$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, User$$serializer_getInstance(), value.user);
    if (!equals(value.coreType, CoreType$RBAC_CLOUD_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), value.coreType);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, CryptoType$$serializer_getInstance(), value.cryptoType);
    if (!equals(value.versionNumber, 1) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
      output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.versionNumber);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 4, new PolymorphicSerializer(getKClass(RMInterfaceRBACCLOUDParameters)), value.rmInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 5, new PolymorphicSerializer(getKClass(MMInterfaceRBACCLOUDParameters)), value.mmInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 6, new PolymorphicSerializer(getKClass(DMInterfaceRBACCLOUDParameters)), value.dmInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 7, OPAInterfaceParameters$$serializer_getInstance(), value.opaInterfaceParameters);
    output.endStructure_24f42q$(this.descriptor);
  };
  CoreParametersCLOUD$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, User$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, CryptoType$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeSerializableElement_12e8id$(this.descriptor, 4, new PolymorphicSerializer(getKClass(RMInterfaceRBACCLOUDParameters)), local4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeSerializableElement_12e8id$(this.descriptor, 5, new PolymorphicSerializer(getKClass(MMInterfaceRBACCLOUDParameters)), local5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeSerializableElement_12e8id$(this.descriptor, 6, new PolymorphicSerializer(getKClass(DMInterfaceRBACCLOUDParameters)), local6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeSerializableElement_12e8id$(this.descriptor, 7, OPAInterfaceParameters$$serializer_getInstance(), local7);
          bitMask0 |= 128;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return CoreParametersCLOUD_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, null);
  };
  CoreParametersCLOUD$$serializer.prototype.childSerializers = function () {
    return [User$$serializer_getInstance(), new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), CryptoType$$serializer_getInstance(), internal.IntSerializer, new PolymorphicSerializer(getKClass(RMInterfaceRBACCLOUDParameters)), new PolymorphicSerializer(getKClass(MMInterfaceRBACCLOUDParameters)), new PolymorphicSerializer(getKClass(DMInterfaceRBACCLOUDParameters)), OPAInterfaceParameters$$serializer_getInstance()];
  };
  CoreParametersCLOUD$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CoreParametersCLOUD$$serializer_instance = null;
  function CoreParametersCLOUD$$serializer_getInstance() {
    if (CoreParametersCLOUD$$serializer_instance === null) {
      new CoreParametersCLOUD$$serializer();
    }return CoreParametersCLOUD$$serializer_instance;
  }
  function CoreParametersCLOUD_init(seen1, user, coreType, cryptoType, versionNumber, rmInterfaceParameters, mmInterfaceParameters, dmInterfaceParameters, opaInterfaceParameters, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CoreParametersCLOUD.prototype);
    $this = CoreParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('user');
    else
      $this.user_kai3sp$_0 = user;
    if ((seen1 & 2) === 0)
      $this.coreType_o3qeh7$_0 = CoreType$RBAC_CLOUD_getInstance();
    else
      $this.coreType_o3qeh7$_0 = coreType;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('cryptoType');
    else
      $this.cryptoType_1xhvu1$_0 = cryptoType;
    if ((seen1 & 8) === 0)
      $this.versionNumber_35lban$_0 = 1;
    else
      $this.versionNumber_35lban$_0 = versionNumber;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('rmInterfaceParameters');
    else
      $this.rmInterfaceParameters = rmInterfaceParameters;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('mmInterfaceParameters');
    else
      $this.mmInterfaceParameters = mmInterfaceParameters;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('dmInterfaceParameters');
    else
      $this.dmInterfaceParameters = dmInterfaceParameters;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('opaInterfaceParameters');
    else
      $this.opaInterfaceParameters = opaInterfaceParameters;
    return $this;
  }
  CoreParametersCLOUD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoreParametersCLOUD',
    interfaces: [CoreParameters]
  };
  function CoreParametersMOCK(user, coreType, cryptoType, versionNumber) {
    CoreParametersMOCK$Companion_getInstance();
    if (coreType === void 0)
      coreType = CoreType$RBAC_MOCK_getInstance();
    if (versionNumber === void 0)
      versionNumber = 1;
    CoreParameters.call(this);
    this.user_n6hn20$_0 = user;
    this.coreType_2ok716$_0 = coreType;
    this.cryptoType_evh1tk$_0 = cryptoType;
    this.versionNumber_eut9fk$_0 = versionNumber;
  }
  Object.defineProperty(CoreParametersMOCK.prototype, 'user', {
    get: function () {
      return this.user_n6hn20$_0;
    },
    set: function (user) {
      this.user_n6hn20$_0 = user;
    }
  });
  Object.defineProperty(CoreParametersMOCK.prototype, 'coreType', {
    get: function () {
      return this.coreType_2ok716$_0;
    }
  });
  Object.defineProperty(CoreParametersMOCK.prototype, 'cryptoType', {
    get: function () {
      return this.cryptoType_evh1tk$_0;
    }
  });
  Object.defineProperty(CoreParametersMOCK.prototype, 'versionNumber', {
    get: function () {
      return this.versionNumber_eut9fk$_0;
    }
  });
  CoreParametersMOCK.prototype.update_8dp87x$ = function (updatedParameters) {
  };
  CoreParametersMOCK.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, CoreParametersMOCK) ? tmp$_0 : throwCCE();
    if (!((tmp$_1 = this.user) != null ? tmp$_1.equals(other.user) : null))
      return false;
    if (this.coreType !== other.coreType)
      return false;
    if (this.cryptoType !== other.cryptoType)
      return false;
    if (this.versionNumber !== other.versionNumber)
      return false;
    return true;
  };
  CoreParametersMOCK.prototype.hashCode = function () {
    var result = this.user.hashCode();
    result = (31 * result | 0) + this.coreType.hashCode() | 0;
    result = (31 * result | 0) + this.cryptoType.hashCode() | 0;
    result = (31 * result | 0) + this.versionNumber | 0;
    return result;
  };
  function CoreParametersMOCK$Companion() {
    CoreParametersMOCK$Companion_instance = this;
  }
  CoreParametersMOCK$Companion.prototype.serializer = function () {
    return CoreParametersMOCK$$serializer_getInstance();
  };
  CoreParametersMOCK$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CoreParametersMOCK$Companion_instance = null;
  function CoreParametersMOCK$Companion_getInstance() {
    if (CoreParametersMOCK$Companion_instance === null) {
      new CoreParametersMOCK$Companion();
    }return CoreParametersMOCK$Companion_instance;
  }
  function CoreParametersMOCK$$serializer() {
    this.descriptor_6ybpuc$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.CoreParametersMOCK', this, 4);
    this.descriptor.addElement_ivxn3r$('user', false);
    this.descriptor.addElement_ivxn3r$('coreType', true);
    this.descriptor.addElement_ivxn3r$('cryptoType', false);
    this.descriptor.addElement_ivxn3r$('versionNumber', true);
    CoreParametersMOCK$$serializer_instance = this;
  }
  Object.defineProperty(CoreParametersMOCK$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_6ybpuc$_0;
    }
  });
  CoreParametersMOCK$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, User$$serializer_getInstance(), value.user);
    if (!equals(value.coreType, CoreType$RBAC_MOCK_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), value.coreType);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, CryptoType$$serializer_getInstance(), value.cryptoType);
    if (!equals(value.versionNumber, 1) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
      output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.versionNumber);
    output.endStructure_24f42q$(this.descriptor);
  };
  CoreParametersMOCK$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, User$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, CryptoType$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return CoreParametersMOCK_init(bitMask0, local0, local1, local2, local3, null);
  };
  CoreParametersMOCK$$serializer.prototype.childSerializers = function () {
    return [User$$serializer_getInstance(), new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), CryptoType$$serializer_getInstance(), internal.IntSerializer];
  };
  CoreParametersMOCK$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var CoreParametersMOCK$$serializer_instance = null;
  function CoreParametersMOCK$$serializer_getInstance() {
    if (CoreParametersMOCK$$serializer_instance === null) {
      new CoreParametersMOCK$$serializer();
    }return CoreParametersMOCK$$serializer_instance;
  }
  function CoreParametersMOCK_init(seen1, user, coreType, cryptoType, versionNumber, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CoreParametersMOCK.prototype);
    $this = CoreParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('user');
    else
      $this.user_n6hn20$_0 = user;
    if ((seen1 & 2) === 0)
      $this.coreType_2ok716$_0 = CoreType$RBAC_MOCK_getInstance();
    else
      $this.coreType_2ok716$_0 = coreType;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('cryptoType');
    else
      $this.cryptoType_evh1tk$_0 = cryptoType;
    if ((seen1 & 8) === 0)
      $this.versionNumber_eut9fk$_0 = 1;
    else
      $this.versionNumber_eut9fk$_0 = versionNumber;
    return $this;
  }
  CoreParametersMOCK.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoreParametersMOCK',
    interfaces: [CoreParameters]
  };
  function logger$lambda_1() {
    return Unit;
  }
  var logger_1;
  function CoreParametersMQTT(user, coreType, cryptoType, versionNumber, mmInterfaceParameters, dmInterfaceParameters) {
    CoreParametersMQTT$Companion_getInstance();
    if (coreType === void 0)
      coreType = CoreType$RBAC_MQTT_getInstance();
    if (versionNumber === void 0)
      versionNumber = 1;
    CoreParameters.call(this);
    this.user_t4fie6$_0 = user;
    this.coreType_p3pbnw$_0 = coreType;
    this.cryptoType_kzploy$_0 = cryptoType;
    this.versionNumber_rgthwa$_0 = versionNumber;
    this.mmInterfaceParameters = mmInterfaceParameters;
    this.dmInterfaceParameters = dmInterfaceParameters;
  }
  Object.defineProperty(CoreParametersMQTT.prototype, 'user', {
    get: function () {
      return this.user_t4fie6$_0;
    },
    set: function (user) {
      this.user_t4fie6$_0 = user;
    }
  });
  Object.defineProperty(CoreParametersMQTT.prototype, 'coreType', {
    get: function () {
      return this.coreType_p3pbnw$_0;
    }
  });
  Object.defineProperty(CoreParametersMQTT.prototype, 'cryptoType', {
    get: function () {
      return this.cryptoType_kzploy$_0;
    }
  });
  Object.defineProperty(CoreParametersMQTT.prototype, 'versionNumber', {
    get: function () {
      return this.versionNumber_rgthwa$_0;
    }
  });
  CoreParametersMQTT.prototype.checkParameters = function () {
    if (!CoreParameters.prototype.checkParameters.call(this)) {
      return false;
    } else {
      return this.mmInterfaceParameters.checkParameters() && this.dmInterfaceParameters.checkParameters();
    }
  };
  function CoreParametersMQTT$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  CoreParametersMQTT.prototype.update_8dp87x$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, CoreParametersMQTT)) {
      this.mmInterfaceParameters.update_f8hg2y$(updatedParameters.mmInterfaceParameters);
      this.dmInterfaceParameters.update_yb6fw6$(updatedParameters.dmInterfaceParameters);
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_1.error_nq59yw$(CoreParametersMQTT$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  CoreParametersMQTT.prototype.obscureSensitiveFields = function () {
    CoreParameters.prototype.obscureSensitiveFields.call(this);
    this.mmInterfaceParameters.obscureSensitiveFields();
    this.dmInterfaceParameters.obscureSensitiveFields();
  };
  CoreParametersMQTT.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, CoreParametersMQTT) ? tmp$_0 : throwCCE();
    if (!((tmp$_1 = this.user) != null ? tmp$_1.equals(other.user) : null))
      return false;
    if (this.coreType !== other.coreType)
      return false;
    if (this.cryptoType !== other.cryptoType)
      return false;
    if (this.versionNumber !== other.versionNumber)
      return false;
    if (!equals(this.mmInterfaceParameters, other.mmInterfaceParameters))
      return false;
    if (!equals(this.dmInterfaceParameters, other.dmInterfaceParameters))
      return false;
    return true;
  };
  CoreParametersMQTT.prototype.hashCode = function () {
    var result = this.user.hashCode();
    result = (31 * result | 0) + this.coreType.hashCode() | 0;
    result = (31 * result | 0) + this.cryptoType.hashCode() | 0;
    result = (31 * result | 0) + this.versionNumber | 0;
    result = (31 * result | 0) + hashCode(this.mmInterfaceParameters) | 0;
    result = (31 * result | 0) + hashCode(this.dmInterfaceParameters) | 0;
    return result;
  };
  function CoreParametersMQTT$Companion() {
    CoreParametersMQTT$Companion_instance = this;
  }
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
  function CoreParametersMQTT$$serializer() {
    this.descriptor_8iod1i$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.CoreParametersMQTT', this, 6);
    this.descriptor.addElement_ivxn3r$('user', false);
    this.descriptor.addElement_ivxn3r$('coreType', true);
    this.descriptor.addElement_ivxn3r$('cryptoType', false);
    this.descriptor.addElement_ivxn3r$('versionNumber', true);
    this.descriptor.addElement_ivxn3r$('mmInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('dmInterfaceParameters', false);
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
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, User$$serializer_getInstance(), value.user);
    if (!equals(value.coreType, CoreType$RBAC_MQTT_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), value.coreType);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, CryptoType$$serializer_getInstance(), value.cryptoType);
    if (!equals(value.versionNumber, 1) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
      output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.versionNumber);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 4, new PolymorphicSerializer(getKClass(MMInterfaceRBACMQTTParameters)), value.mmInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 5, new PolymorphicSerializer(getKClass(DMInterfaceRBACMQTTParameters)), value.dmInterfaceParameters);
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
    , local5;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, User$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, CryptoType$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeSerializableElement_12e8id$(this.descriptor, 4, new PolymorphicSerializer(getKClass(MMInterfaceRBACMQTTParameters)), local4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeSerializableElement_12e8id$(this.descriptor, 5, new PolymorphicSerializer(getKClass(DMInterfaceRBACMQTTParameters)), local5);
          bitMask0 |= 32;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return CoreParametersMQTT_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  CoreParametersMQTT$$serializer.prototype.childSerializers = function () {
    return [User$$serializer_getInstance(), new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), CryptoType$$serializer_getInstance(), internal.IntSerializer, new PolymorphicSerializer(getKClass(MMInterfaceRBACMQTTParameters)), new PolymorphicSerializer(getKClass(DMInterfaceRBACMQTTParameters))];
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
  function CoreParametersMQTT_init(seen1, user, coreType, cryptoType, versionNumber, mmInterfaceParameters, dmInterfaceParameters, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(CoreParametersMQTT.prototype);
    $this = CoreParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('user');
    else
      $this.user_t4fie6$_0 = user;
    if ((seen1 & 2) === 0)
      $this.coreType_p3pbnw$_0 = CoreType$RBAC_MQTT_getInstance();
    else
      $this.coreType_p3pbnw$_0 = coreType;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('cryptoType');
    else
      $this.cryptoType_kzploy$_0 = cryptoType;
    if ((seen1 & 8) === 0)
      $this.versionNumber_rgthwa$_0 = 1;
    else
      $this.versionNumber_rgthwa$_0 = versionNumber;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('mmInterfaceParameters');
    else
      $this.mmInterfaceParameters = mmInterfaceParameters;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('dmInterfaceParameters');
    else
      $this.dmInterfaceParameters = dmInterfaceParameters;
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
  function CryptoACObject$Companion() {
    CryptoACObject$Companion_instance = this;
  }
  CryptoACObject$Companion.prototype.requirePositiveNumber_za3lpa$ = function (number) {
    if (number <= 0) {
      throw IllegalArgumentException_init('Given zero or negative version number ' + number);
    }};
  CryptoACObject$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(CryptoACObject));
  };
  CryptoACObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [SerializerFactory]
  };
  var CryptoACObject$Companion_instance = null;
  function CryptoACObject$Companion_getInstance() {
    if (CryptoACObject$Companion_instance === null) {
      new CryptoACObject$Companion();
    }return CryptoACObject$Companion_instance;
  }
  CryptoACObject.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    return true;
  };
  CryptoACObject.prototype.hashCode = function () {
    return Kotlin.getKClassFromExpression(this).hashCode();
  };
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
  ActiveElement.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    if (!Element.prototype.equals.call(this, other))
      return false;
    Kotlin.isType(tmp$_0 = other, ActiveElement) ? tmp$_0 : throwCCE();
    if (!equals(this.asymEncKeys, other.asymEncKeys))
      return false;
    if (!equals(this.asymSigKeys, other.asymSigKeys))
      return false;
    return true;
  };
  ActiveElement.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = Element.prototype.hashCode.call(this);
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.asymEncKeys) != null ? tmp$.hashCode() : null) != null ? tmp$_0 : 0) | 0;
    result = (31 * result | 0) + ((tmp$_2 = (tmp$_1 = this.asymSigKeys) != null ? tmp$_1.hashCode() : null) != null ? tmp$_2 : 0) | 0;
    return result;
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
    interfaces: [SerializerFactory]
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
  function Element$Companion() {
    Element$Companion_instance = this;
  }
  Element$Companion.prototype.generateRandomToken_za3lpa$ = function (length) {
    if (length === void 0)
      length = 20;
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$(length);
    var charPool = plus_0(plus(new CharRange(97, 122), new CharRange(65, 90)), new CharRange(48, 57));
    var $receiver = new IntRange(1, length);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(Random.Default.nextInt_vux9f0$(0, charPool.size));
    }
    var transform = getCallableRef('get', function ($receiver, p1) {
      return $receiver.get_za3lpa$(p1);
    }.bind(null, charPool));
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(transform(item_0));
    }
    return joinToString(destination_0, '');
  };
  Element$Companion.prototype.generateRandomTokenForAdmin_bm4lxs$ = function (name, length) {
    if (length === void 0)
      length = 20;
    var tmp$;
    if (equals(name, Constants_getInstance().ADMIN)) {
      tmp$ = Constants_getInstance().ADMIN;
    } else {
      tmp$ = this.generateRandomToken_za3lpa$(length);
    }
    return tmp$;
  };
  Element$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(Element));
  };
  Element$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [SerializerFactory]
  };
  var Element$Companion_instance = null;
  function Element$Companion_getInstance() {
    if (Element$Companion_instance === null) {
      new Element$Companion();
    }return Element$Companion_instance;
  }
  Element.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    if (!CryptoACObject.prototype.equals.call(this, other))
      return false;
    Kotlin.isType(tmp$_0 = other, Element) ? tmp$_0 : throwCCE();
    if (!equals(this.name, other.name))
      return false;
    if (this.status !== other.status)
      return false;
    if (!equals(this.token, other.token))
      return false;
    return true;
  };
  Element.prototype.hashCode = function () {
    var result = CryptoACObject.prototype.hashCode.call(this);
    result = (31 * result | 0) + hashCode(this.name) | 0;
    result = (31 * result | 0) + this.status.hashCode() | 0;
    result = (31 * result | 0) + hashCode(this.token) | 0;
    return result;
  };
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
  function File(name, status, symEncKeyVersionNumber, enforcement) {
    File$Companion_getInstance();
    if (status === void 0)
      status = ElementStatus$OPERATIONAL_getInstance();
    if (symEncKeyVersionNumber === void 0)
      symEncKeyVersionNumber = 1;
    Element.call(this);
    this.name_4n5cn4$_0 = name;
    this.status_1ttgnb$_0 = status;
    this.symEncKeyVersionNumber = symEncKeyVersionNumber;
    this.enforcement = enforcement;
    this.token_4xbdxs$_0 = Element$Companion_getInstance().generateRandomToken_za3lpa$();
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
    return [this.name, this.status.toString(), this.symEncKeyVersionNumber.toString(), this.token, this.enforcement.toString()];
  };
  File.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    if (!Element.prototype.equals.call(this, other))
      return false;
    Kotlin.isType(tmp$_0 = other, File) ? tmp$_0 : throwCCE();
    if (!equals(this.name, other.name))
      return false;
    if (this.status !== other.status)
      return false;
    if (this.symEncKeyVersionNumber !== other.symEncKeyVersionNumber)
      return false;
    if (this.enforcement !== other.enforcement)
      return false;
    if (!equals(this.token, other.token))
      return false;
    return true;
  };
  File.prototype.hashCode = function () {
    var result = Element.prototype.hashCode.call(this);
    result = (31 * result | 0) + hashCode(this.name) | 0;
    result = (31 * result | 0) + this.status.hashCode() | 0;
    result = (31 * result | 0) + this.symEncKeyVersionNumber | 0;
    result = (31 * result | 0) + this.enforcement.hashCode() | 0;
    result = (31 * result | 0) + hashCode(this.token) | 0;
    return result;
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
    this.descriptor_rmzn30$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.elements.File', this, 5);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('status', true);
    this.descriptor.addElement_ivxn3r$('symEncKeyVersionNumber', true);
    this.descriptor.addElement_ivxn3r$('enforcement', false);
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
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 3, EnforcementType$$serializer_getInstance(), value.enforcement);
    if (!equals(value.token, Element$Companion_getInstance().generateRandomToken_za3lpa$()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 4))
      output.encodeStringElement_iij8qq$(this.descriptor, 4, value.token);
    output.endStructure_24f42q$(this.descriptor);
  };
  File$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
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
          local3 = input.decodeSerializableElement_12e8id$(this.descriptor, 3, EnforcementType$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return File_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  File$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), internal.IntSerializer, EnforcementType$$serializer_getInstance(), internal.StringSerializer];
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
  function File_init(seen1, name, status, symEncKeyVersionNumber, enforcement, token, serializationConstructorMarker) {
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
      throw MissingFieldException_init('enforcement');
    else
      $this.enforcement = enforcement;
    if ((seen1 & 16) === 0)
      $this.token_4xbdxs$_0 = Element$Companion_getInstance().generateRandomToken_za3lpa$();
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
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$(this.versionNumber);
    this.token_g1ezfu$_0 = Element$Companion_getInstance().generateRandomTokenForAdmin_bm4lxs$(this.name);
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
  Role.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, Role) ? tmp$_0 : throwCCE();
    if (!equals(this.name, other.name))
      return false;
    if (this.status !== other.status)
      return false;
    if (!equals(this.asymEncKeys, other.asymEncKeys))
      return false;
    if (!equals(this.asymSigKeys, other.asymSigKeys))
      return false;
    if (this.versionNumber !== other.versionNumber)
      return false;
    if (!equals(this.token, other.token))
      return false;
    return true;
  };
  Role.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = hashCode(this.name);
    result = (31 * result | 0) + this.status.hashCode() | 0;
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.asymEncKeys) != null ? tmp$.hashCode() : null) != null ? tmp$_0 : 0) | 0;
    result = (31 * result | 0) + ((tmp$_2 = (tmp$_1 = this.asymSigKeys) != null ? tmp$_1.hashCode() : null) != null ? tmp$_2 : 0) | 0;
    result = (31 * result | 0) + this.versionNumber | 0;
    result = (31 * result | 0) + hashCode(this.token) | 0;
    return result;
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
    if (!equals(value.token, Element$Companion_getInstance().generateRandomTokenForAdmin_bm4lxs$(this.name)) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
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
      $this.token_g1ezfu$_0 = Element$Companion_getInstance().generateRandomTokenForAdmin_bm4lxs$($this.name);
    else
      $this.token_g1ezfu$_0 = token;
    $this.asymEncKeys_19otev$_0 = null;
    $this.asymSigKeys_luxr5c$_0 = null;
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$($this.versionNumber);
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
    this.token_vgvmqn$_0 = Element$Companion_getInstance().generateRandomTokenForAdmin_bm4lxs$(this.name);
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
  User.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    if (!ActiveElement.prototype.equals.call(this, other))
      return false;
    Kotlin.isType(tmp$_0 = other, User) ? tmp$_0 : throwCCE();
    if (!equals(this.name, other.name))
      return false;
    if (this.status !== other.status)
      return false;
    if (!equals(this.asymEncKeys, other.asymEncKeys))
      return false;
    if (!equals(this.asymSigKeys, other.asymSigKeys))
      return false;
    if (this.isAdmin !== other.isAdmin)
      return false;
    if (!equals(this.token, other.token))
      return false;
    return true;
  };
  User.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = ActiveElement.prototype.hashCode.call(this);
    result = (31 * result | 0) + hashCode(this.name) | 0;
    result = (31 * result | 0) + this.status.hashCode() | 0;
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.asymEncKeys) != null ? tmp$.hashCode() : null) != null ? tmp$_0 : 0) | 0;
    result = (31 * result | 0) + ((tmp$_2 = (tmp$_1 = this.asymSigKeys) != null ? tmp$_1.hashCode() : null) != null ? tmp$_2 : 0) | 0;
    result = (31 * result | 0) + hashCode(this.isAdmin) | 0;
    result = (31 * result | 0) + hashCode(this.token) | 0;
    return result;
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
    this.descriptor_qtrxot$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.elements.User', this, 6);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('status', true);
    this.descriptor.addElement_ivxn3r$('asymEncKeys', true);
    this.descriptor.addElement_ivxn3r$('asymSigKeys', true);
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
    if (!equals(value.asymEncKeys, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 2, AsymKeys$$serializer_getInstance(), value.asymEncKeys);
    if (!equals(value.asymSigKeys, null) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
      output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 3, AsymKeys$$serializer_getInstance(), value.asymSigKeys);
    if (!equals(value.isAdmin, false) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 4))
      output.encodeBooleanElement_qh7jdn$(this.descriptor, 4, value.isAdmin);
    if (!equals(value.token, Element$Companion_getInstance().generateRandomTokenForAdmin_bm4lxs$(this.name)) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 5))
      output.encodeStringElement_iij8qq$(this.descriptor, 5, value.token);
    output.endStructure_24f42q$(this.descriptor);
  };
  User$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 2, AsymKeys$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 3, AsymKeys$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeBooleanElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return User_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  User$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.core.elements.ElementStatus', ElementStatus$values()), new NullableSerializer(AsymKeys$$serializer_getInstance()), new NullableSerializer(AsymKeys$$serializer_getInstance()), internal.BooleanSerializer, internal.StringSerializer];
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
  function User_init(seen1, name, status, asymEncKeys, asymSigKeys, isAdmin, token, serializationConstructorMarker) {
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
      $this.asymEncKeys_zhhky6$_0 = null;
    else
      $this.asymEncKeys_zhhky6$_0 = asymEncKeys;
    if ((seen1 & 8) === 0)
      $this.asymSigKeys_cezwgr$_0 = null;
    else
      $this.asymSigKeys_cezwgr$_0 = asymSigKeys;
    if ((seen1 & 16) === 0)
      $this.isAdmin = false;
    else
      $this.isAdmin = isAdmin;
    if ((seen1 & 32) === 0)
      $this.token_vgvmqn$_0 = Element$Companion_getInstance().generateRandomTokenForAdmin_bm4lxs$($this.name);
    else
      $this.token_vgvmqn$_0 = token;
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
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$(this.symDecKeyVersionNumber);
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
  FileTuple.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    if (!Tuple.prototype.equals.call(this, other))
      return false;
    Kotlin.isType(tmp$_0 = other, FileTuple) ? tmp$_0 : throwCCE();
    if (!equals(this.fileName, other.fileName))
      return false;
    if (!equals(this.fileToken, other.fileToken))
      return false;
    if (!equals(this.roleToken, other.roleToken))
      return false;
    if (this.enforcement !== other.enforcement)
      return false;
    if (this.symDecKeyVersionNumber !== other.symDecKeyVersionNumber)
      return false;
    return true;
  };
  FileTuple.prototype.hashCode = function () {
    var result = Tuple.prototype.hashCode.call(this);
    result = (31 * result | 0) + hashCode(this.fileName) | 0;
    result = (31 * result | 0) + hashCode(this.fileToken) | 0;
    result = (31 * result | 0) + hashCode(this.roleToken) | 0;
    result = (31 * result | 0) + this.enforcement.hashCode() | 0;
    result = (31 * result | 0) + this.symDecKeyVersionNumber | 0;
    return result;
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
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$($this.symDecKeyVersionNumber);
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
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$(this.roleVersionNumber);
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$(this.symKeyVersionNumber);
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
  PermissionTuple.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    if (!Tuple.prototype.equals.call(this, other))
      return false;
    Kotlin.isType(tmp$_0 = other, PermissionTuple) ? tmp$_0 : throwCCE();
    if (!equals(this.roleName, other.roleName))
      return false;
    if (!equals(this.fileName, other.fileName))
      return false;
    if (!equals(this.roleToken, other.roleToken))
      return false;
    if (!equals(this.fileToken, other.fileToken))
      return false;
    if (this.permission !== other.permission)
      return false;
    if (!equals(this.encryptedSymKey, other.encryptedSymKey))
      return false;
    if (this.roleVersionNumber !== other.roleVersionNumber)
      return false;
    if (this.symKeyVersionNumber !== other.symKeyVersionNumber)
      return false;
    return true;
  };
  PermissionTuple.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    var result = Tuple.prototype.hashCode.call(this);
    result = (31 * result | 0) + hashCode(this.roleName) | 0;
    result = (31 * result | 0) + hashCode(this.fileName) | 0;
    result = (31 * result | 0) + hashCode(this.roleToken) | 0;
    result = (31 * result | 0) + hashCode(this.fileToken) | 0;
    result = (31 * result | 0) + this.permission.hashCode() | 0;
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.encryptedSymKey) != null ? tmp$.hashCode() : null) != null ? tmp$_0 : 0) | 0;
    result = (31 * result | 0) + this.roleVersionNumber | 0;
    result = (31 * result | 0) + this.symKeyVersionNumber | 0;
    return result;
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
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$($this.roleVersionNumber);
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$($this.symKeyVersionNumber);
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
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$(this.roleVersionNumber);
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
  RoleTuple.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    if (!Tuple.prototype.equals.call(this, other))
      return false;
    Kotlin.isType(tmp$_0 = other, RoleTuple) ? tmp$_0 : throwCCE();
    if (!equals(this.username, other.username))
      return false;
    if (!equals(this.roleName, other.roleName))
      return false;
    if (this.roleVersionNumber !== other.roleVersionNumber)
      return false;
    if (!equals(this.encryptedAsymEncKeys, other.encryptedAsymEncKeys))
      return false;
    if (!equals(this.encryptedAsymSigKeys, other.encryptedAsymSigKeys))
      return false;
    return true;
  };
  RoleTuple.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = Tuple.prototype.hashCode.call(this);
    result = (31 * result | 0) + hashCode(this.username) | 0;
    result = (31 * result | 0) + hashCode(this.roleName) | 0;
    result = (31 * result | 0) + this.roleVersionNumber | 0;
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.encryptedAsymEncKeys) != null ? tmp$.hashCode() : null) != null ? tmp$_0 : 0) | 0;
    result = (31 * result | 0) + ((tmp$_2 = (tmp$_1 = this.encryptedAsymSigKeys) != null ? tmp$_1.hashCode() : null) != null ? tmp$_2 : 0) | 0;
    return result;
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
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$($this.roleVersionNumber);
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
  Tuple.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    if (!CryptoACObject.prototype.equals.call(this, other))
      return false;
    Kotlin.isType(tmp$_0 = other, Tuple) ? tmp$_0 : throwCCE();
    if (this.signature != null) {
      if (other.signature == null)
        return false;
      if (!contentEquals(this.signature, other.signature))
        return false;
    } else if (other.signature != null)
      return false;
    if (!equals(this.signer, other.signer))
      return false;
    if (!equals(this.signerType, other.signerType))
      return false;
    return true;
  };
  Tuple.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var result = CryptoACObject.prototype.hashCode.call(this);
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.signature) != null ? contentHashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
    result = (31 * result | 0) + ((tmp$_2 = (tmp$_1 = this.signer) != null ? hashCode(tmp$_1) : null) != null ? tmp$_2 : 0) | 0;
    result = (31 * result | 0) + ((tmp$_4 = (tmp$_3 = this.signerType) != null ? tmp$_3.hashCode() : null) != null ? tmp$_4 : 0) | 0;
    return result;
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
    interfaces: [SerializerFactory]
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
  function AsymKeys(private_0, public_0, keysType) {
    AsymKeys$Companion_getInstance();
    this.private = private_0;
    this.public = public_0;
    this.keysType = keysType;
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
    this.descriptor.addElement_ivxn3r$('keysType', false);
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
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.private);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.public);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, AsymKeysType$$serializer_getInstance(), value.keysType);
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
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
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
    return [internal.StringSerializer, internal.StringSerializer, AsymKeysType$$serializer_getInstance()];
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
  function AsymKeys_init(seen1, private_0, public_0, keysType, serializationConstructorMarker) {
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
      throw MissingFieldException_init('keysType');
    else
      $this.keysType = keysType;
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
    return this.keysType;
  };
  AsymKeys.prototype.copy_g2dia$ = function (private_0, public_0, keysType) {
    return new AsymKeys(private_0 === void 0 ? this.private : private_0, public_0 === void 0 ? this.public : public_0, keysType === void 0 ? this.keysType : keysType);
  };
  AsymKeys.prototype.toString = function () {
    return 'AsymKeys(private=' + Kotlin.toString(this.private) + (', public=' + Kotlin.toString(this.public)) + (', keysType=' + Kotlin.toString(this.keysType)) + ')';
  };
  AsymKeys.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.private) | 0;
    result = result * 31 + Kotlin.hashCode(this.public) | 0;
    result = result * 31 + Kotlin.hashCode(this.keysType) | 0;
    return result;
  };
  AsymKeys.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.private, other.private) && Kotlin.equals(this.public, other.public) && Kotlin.equals(this.keysType, other.keysType)))));
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
    CryptoType$SODIUM_instance = new CryptoType('SODIUM', 1);
    CryptoType$Companion_getInstance();
  }
  var CryptoType$JAVA_instance;
  function CryptoType$JAVA_getInstance() {
    CryptoType_initFields();
    return CryptoType$JAVA_instance;
  }
  var CryptoType$SODIUM_instance;
  function CryptoType$SODIUM_getInstance() {
    CryptoType_initFields();
    return CryptoType$SODIUM_instance;
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
    this.descriptor.addElement_ivxn3r$('SODIUM');
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
    return [CryptoType$JAVA_getInstance(), CryptoType$SODIUM_getInstance()];
  }
  CryptoType.values = CryptoType$values;
  function CryptoType$valueOf(name) {
    switch (name) {
      case 'JAVA':
        return CryptoType$JAVA_getInstance();
      case 'SODIUM':
        return CryptoType$SODIUM_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.crypto.CryptoType.' + name);
    }
  }
  CryptoType.valueOf_61zpoe$ = CryptoType$valueOf;
  function EncryptedAsymKeys(private_0, public_0, keysType) {
    EncryptedAsymKeys$Companion_getInstance();
    this.private = private_0;
    this.public = public_0;
    this.keysType = keysType;
    if (!!(this.private.length === 0)) {
      var message = 'No encrypted asymmetric private key was given';
      throw IllegalArgumentException_init(message.toString());
    }if (!!(this.public.length === 0)) {
      var message_0 = 'No encrypted asymmetric public key was given';
      throw IllegalArgumentException_init(message_0.toString());
    }}
  EncryptedAsymKeys.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, EncryptedAsymKeys) ? tmp$_0 : throwCCE();
    if (!contentEquals(this.private, other.private))
      return false;
    if (!contentEquals(this.public, other.public))
      return false;
    if (this.keysType !== other.keysType)
      return false;
    return true;
  };
  EncryptedAsymKeys.prototype.hashCode = function () {
    var result = contentHashCode(this.private);
    result = (31 * result | 0) + contentHashCode(this.public) | 0;
    result = (31 * result | 0) + this.keysType.hashCode() | 0;
    return result;
  };
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
    this.descriptor.addElement_ivxn3r$('keysType', false);
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
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, AsymKeysType$$serializer_getInstance(), value.keysType);
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
  function EncryptedAsymKeys_init(seen1, private_0, public_0, keysType, serializationConstructorMarker) {
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
      throw MissingFieldException_init('keysType');
    else
      $this.keysType = keysType;
    if (!!($this.private.length === 0)) {
      var message = 'No encrypted asymmetric private key was given';
      throw IllegalArgumentException_init(message.toString());
    }if (!!($this.public.length === 0)) {
      var message_0 = 'No encrypted asymmetric public key was given';
      throw IllegalArgumentException_init(message_0.toString());
    }return $this;
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
    return this.keysType;
  };
  EncryptedAsymKeys.prototype.copy_rfefwm$ = function (private_0, public_0, keysType) {
    return new EncryptedAsymKeys(private_0 === void 0 ? this.private : private_0, public_0 === void 0 ? this.public : public_0, keysType === void 0 ? this.keysType : keysType);
  };
  EncryptedAsymKeys.prototype.toString = function () {
    return 'EncryptedAsymKeys(private=' + Kotlin.toString(this.private) + (', public=' + Kotlin.toString(this.public)) + (', keysType=' + Kotlin.toString(this.keysType)) + ')';
  };
  function EncryptedSymKey(key) {
    EncryptedSymKey$Companion_getInstance();
    this.key = key;
    if (!!(this.key.length === 0)) {
      var message = 'No encrypted symmetric key was given';
      throw IllegalArgumentException_init(message.toString());
    }}
  EncryptedSymKey.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, EncryptedSymKey) ? tmp$_0 : throwCCE();
    if (!contentEquals(this.key, other.key))
      return false;
    return true;
  };
  EncryptedSymKey.prototype.hashCode = function () {
    return contentHashCode(this.key);
  };
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
    if (!!($this.key.length === 0)) {
      var message = 'No encrypted symmetric key was given';
      throw IllegalArgumentException_init(message.toString());
    }return $this;
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
  function logger$lambda_2() {
    return Unit;
  }
  var logger_2;
  function DMInterfaceCryptoACParameters(port, url) {
    DMInterfaceCryptoACParameters$Companion_getInstance();
    this.port_l32nqc$_0 = port;
    this.url_59jurk$_0 = url;
    this.dmType_g844vy$_0 = DMType$CRYPTOAC_getInstance();
  }
  Object.defineProperty(DMInterfaceCryptoACParameters.prototype, 'port', {
    get: function () {
      return this.port_l32nqc$_0;
    },
    set: function (port) {
      this.port_l32nqc$_0 = port;
    }
  });
  Object.defineProperty(DMInterfaceCryptoACParameters.prototype, 'url', {
    get: function () {
      return this.url_59jurk$_0;
    },
    set: function (url) {
      this.url_59jurk$_0 = url;
    }
  });
  Object.defineProperty(DMInterfaceCryptoACParameters.prototype, 'dmType', {
    configurable: true,
    get: function () {
      return this.dmType_g844vy$_0;
    }
  });
  function DMInterfaceCryptoACParameters$Companion() {
    DMInterfaceCryptoACParameters$Companion_instance = this;
  }
  DMInterfaceCryptoACParameters$Companion.prototype.fromMap_xlh5cu$ = function (parameters) {
    var tmp$;
    tmp$ = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_URL));
    return new DMInterfaceCryptoACParameters(toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_PORT))), tmp$);
  };
  DMInterfaceCryptoACParameters$Companion.prototype.toMap_2qkhay$ = function (parameters) {
    if (parameters === void 0)
      parameters = null;
    return listOf_0(listOf([new CryptoACFormField(SERVER_getInstance().DM_URL, replace(SERVER_getInstance().DM_URL, '_', ' '), InputType$text_getInstance(), void 0, parameters != null ? parameters.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DM_PORT, replace(SERVER_getInstance().DM_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString(parameters != null ? parameters.port : null), 'darkTextField')]));
  };
  DMInterfaceCryptoACParameters$Companion.prototype.serializer = function () {
    return DMInterfaceCryptoACParameters$$serializer_getInstance();
  };
  DMInterfaceCryptoACParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DMInterfaceCryptoACParameters$Companion_instance = null;
  function DMInterfaceCryptoACParameters$Companion_getInstance() {
    if (DMInterfaceCryptoACParameters$Companion_instance === null) {
      new DMInterfaceCryptoACParameters$Companion();
    }return DMInterfaceCryptoACParameters$Companion_instance;
  }
  function DMInterfaceCryptoACParameters$checkParameters$lambda(this$DMInterfaceCryptoACParameters) {
    return function () {
      var $receiver = this$DMInterfaceCryptoACParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function DMInterfaceCryptoACParameters$checkParameters$lambda_0(this$DMInterfaceCryptoACParameters) {
    return function () {
      return 'Port number ' + this$DMInterfaceCryptoACParameters.port + ' is inconsistent';
    };
  }
  DMInterfaceCryptoACParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_2.warn_nq59yw$(DMInterfaceCryptoACParameters$checkParameters$lambda(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_2.warn_nq59yw$(DMInterfaceCryptoACParameters$checkParameters$lambda_0(this));
      return false;
    } else {
      return true;
    }
  };
  function DMInterfaceCryptoACParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DMInterfaceCryptoACParameters.prototype.update_yb6fw6$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, DMInterfaceCryptoACParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_2.error_nq59yw$(DMInterfaceCryptoACParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  DMInterfaceCryptoACParameters.prototype.obscureSensitiveFields = function () {
  };
  DMInterfaceCryptoACParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, DMInterfaceCryptoACParameters) ? tmp$_0 : throwCCE();
    if (this.port !== other.port)
      return false;
    if (!equals(this.url, other.url))
      return false;
    return true;
  };
  DMInterfaceCryptoACParameters.prototype.hashCode = function () {
    var result = this.port;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    return result;
  };
  function DMInterfaceCryptoACParameters$$serializer() {
    this.descriptor_6yp20u$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.dm.DMInterfaceCryptoACParameters', this, 3);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    this.descriptor.addElement_ivxn3r$('dmType', true);
    DMInterfaceCryptoACParameters$$serializer_instance = this;
  }
  Object.defineProperty(DMInterfaceCryptoACParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_6yp20u$_0;
    }
  });
  DMInterfaceCryptoACParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.url);
    if (!equals(value.dmType, DMType$CRYPTOAC_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.implementation.dm.DMType', DMType$values()), value.dmType);
    output.endStructure_24f42q$(this.descriptor);
  };
  DMInterfaceCryptoACParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.implementation.dm.DMType', DMType$values()), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return DMInterfaceCryptoACParameters_init(bitMask0, local0, local1, local2, null);
  };
  DMInterfaceCryptoACParameters$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.implementation.dm.DMType', DMType$values())];
  };
  DMInterfaceCryptoACParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var DMInterfaceCryptoACParameters$$serializer_instance = null;
  function DMInterfaceCryptoACParameters$$serializer_getInstance() {
    if (DMInterfaceCryptoACParameters$$serializer_instance === null) {
      new DMInterfaceCryptoACParameters$$serializer();
    }return DMInterfaceCryptoACParameters$$serializer_instance;
  }
  function DMInterfaceCryptoACParameters_init(seen1, port, url, dmType, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DMInterfaceCryptoACParameters.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port_l32nqc$_0 = port;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url_59jurk$_0 = url;
    if ((seen1 & 4) === 0)
      $this.dmType_g844vy$_0 = DMType$CRYPTOAC_getInstance();
    else
      $this.dmType_g844vy$_0 = dmType;
    return $this;
  }
  DMInterfaceCryptoACParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMInterfaceCryptoACParameters',
    interfaces: [DMInterfaceRBACCLOUDParameters]
  };
  function logger$lambda_3() {
    return Unit;
  }
  var logger_3;
  function DMInterfaceMosquittoParameters(username, password, port, url, tls) {
    DMInterfaceMosquittoParameters$Companion_getInstance();
    this.username_b5dn5d$_0 = username;
    this.password_wc15zq$_0 = password;
    this.port_gbp5q4$_0 = port;
    this.url_nfqqow$_0 = url;
    this.tls_nfrhyk$_0 = tls;
    this.dmType_pxppcu$_0 = DMType$MOSQUITTO_getInstance();
  }
  Object.defineProperty(DMInterfaceMosquittoParameters.prototype, 'username', {
    get: function () {
      return this.username_b5dn5d$_0;
    },
    set: function (username) {
      this.username_b5dn5d$_0 = username;
    }
  });
  Object.defineProperty(DMInterfaceMosquittoParameters.prototype, 'password', {
    get: function () {
      return this.password_wc15zq$_0;
    },
    set: function (password) {
      this.password_wc15zq$_0 = password;
    }
  });
  Object.defineProperty(DMInterfaceMosquittoParameters.prototype, 'port', {
    get: function () {
      return this.port_gbp5q4$_0;
    },
    set: function (port) {
      this.port_gbp5q4$_0 = port;
    }
  });
  Object.defineProperty(DMInterfaceMosquittoParameters.prototype, 'url', {
    get: function () {
      return this.url_nfqqow$_0;
    },
    set: function (url) {
      this.url_nfqqow$_0 = url;
    }
  });
  Object.defineProperty(DMInterfaceMosquittoParameters.prototype, 'tls', {
    get: function () {
      return this.tls_nfrhyk$_0;
    },
    set: function (tls) {
      this.tls_nfrhyk$_0 = tls;
    }
  });
  Object.defineProperty(DMInterfaceMosquittoParameters.prototype, 'dmType', {
    configurable: true,
    get: function () {
      return this.dmType_pxppcu$_0;
    }
  });
  function DMInterfaceMosquittoParameters$Companion() {
    DMInterfaceMosquittoParameters$Companion_instance = this;
  }
  DMInterfaceMosquittoParameters$Companion.prototype.fromMap_xlh5cu$ = function (parameters) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME));
    tmp$_0 = toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_PORT)));
    tmp$_1 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_URL));
    var $receiver = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_PASSWORD));
    return new DMInterfaceMosquittoParameters(tmp$, encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length), tmp$_0, tmp$_1, toBooleanStrict(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_TLS))));
  };
  DMInterfaceMosquittoParameters$Companion.prototype.toMap_4xwjay$ = function (parameters) {
    if (parameters === void 0)
      parameters = null;
    var tmp$;
    return listOf_0(listOf([new CryptoACFormField(SERVER_getInstance().DM_URL, replace(SERVER_getInstance().DM_URL, '_', ' '), InputType$text_getInstance(), void 0, parameters != null ? parameters.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DM_PASSWORD, replace(SERVER_getInstance().DM_PASSWORD, '_', ' '), InputType$password_getInstance(), void 0, (tmp$ = parameters != null ? parameters.password : null) != null ? String_0(tmp$) : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DM_PORT, replace(SERVER_getInstance().DM_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString(parameters != null ? parameters.port : null), 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DM_TLS, SERVER_getInstance().DM_TLS, InputType$checkBox_getInstance(), void 0, toString(parameters != null ? parameters.tls : null), 'darkTextField')]));
  };
  DMInterfaceMosquittoParameters$Companion.prototype.serializer = function () {
    return DMInterfaceMosquittoParameters$$serializer_getInstance();
  };
  DMInterfaceMosquittoParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DMInterfaceMosquittoParameters$Companion_instance = null;
  function DMInterfaceMosquittoParameters$Companion_getInstance() {
    if (DMInterfaceMosquittoParameters$Companion_instance === null) {
      new DMInterfaceMosquittoParameters$Companion();
    }return DMInterfaceMosquittoParameters$Companion_instance;
  }
  function DMInterfaceMosquittoParameters$checkParameters$lambda(this$DMInterfaceMosquittoParameters) {
    return function () {
      var $receiver = this$DMInterfaceMosquittoParameters.username;
      return 'Username ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect TEXT regex';
    };
  }
  function DMInterfaceMosquittoParameters$checkParameters$lambda_0(this$DMInterfaceMosquittoParameters) {
    return function () {
      var $receiver = this$DMInterfaceMosquittoParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function DMInterfaceMosquittoParameters$checkParameters$lambda_1(this$DMInterfaceMosquittoParameters) {
    return function () {
      return 'Port number ' + this$DMInterfaceMosquittoParameters.port + ' is inconsistent';
    };
  }
  DMInterfaceMosquittoParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.username)) {
      logger_3.warn_nq59yw$(DMInterfaceMosquittoParameters$checkParameters$lambda(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_3.warn_nq59yw$(DMInterfaceMosquittoParameters$checkParameters$lambda_0(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_3.warn_nq59yw$(DMInterfaceMosquittoParameters$checkParameters$lambda_1(this));
      return false;
    } else {
      return true;
    }
  };
  function DMInterfaceMosquittoParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DMInterfaceMosquittoParameters.prototype.update_yb6fw6$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, DMInterfaceMosquittoParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_3.error_nq59yw$(DMInterfaceMosquittoParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  DMInterfaceMosquittoParameters.prototype.obscureSensitiveFields = function () {
    this.password = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), '***', 0, '***'.length);
  };
  DMInterfaceMosquittoParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, DMInterfaceMosquittoParameters) ? tmp$_0 : throwCCE();
    if (!equals(this.username, other.username))
      return false;
    if (!contentEquals(this.password, other.password))
      return false;
    if (this.port !== other.port)
      return false;
    if (!equals(this.url, other.url))
      return false;
    if (this.tls !== other.tls)
      return false;
    if (this.dmType !== other.dmType)
      return false;
    return true;
  };
  DMInterfaceMosquittoParameters.prototype.hashCode = function () {
    var result = hashCode(this.username);
    result = (31 * result | 0) + contentHashCode(this.password) | 0;
    result = (31 * result | 0) + this.port | 0;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    result = (31 * result | 0) + hashCode(this.tls) | 0;
    result = (31 * result | 0) + this.dmType.hashCode() | 0;
    return result;
  };
  function DMInterfaceMosquittoParameters$$serializer() {
    this.descriptor_telz6q$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.dm.DMInterfaceMosquittoParameters', this, 6);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    this.descriptor.addElement_ivxn3r$('tls', false);
    this.descriptor.addElement_ivxn3r$('dmType', true);
    DMInterfaceMosquittoParameters$$serializer_instance = this;
  }
  Object.defineProperty(DMInterfaceMosquittoParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_telz6q$_0;
    }
  });
  DMInterfaceMosquittoParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.username);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, internal.ByteArraySerializer, value.password);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.url);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 4, value.tls);
    if (!equals(value.dmType, DMType$MOSQUITTO_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 5))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 5, new EnumSerializer('eu.fbk.st.cryptoac.implementation.dm.DMType', DMType$values()), value.dmType);
    output.endStructure_24f42q$(this.descriptor);
  };
  DMInterfaceMosquittoParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, internal.ByteArraySerializer, local1);
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
        case 4:
          local4 = input.decodeBooleanElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeSerializableElement_12e8id$(this.descriptor, 5, new EnumSerializer('eu.fbk.st.cryptoac.implementation.dm.DMType', DMType$values()), local5);
          bitMask0 |= 32;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return DMInterfaceMosquittoParameters_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  DMInterfaceMosquittoParameters$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.ByteArraySerializer, internal.IntSerializer, internal.StringSerializer, internal.BooleanSerializer, new EnumSerializer('eu.fbk.st.cryptoac.implementation.dm.DMType', DMType$values())];
  };
  DMInterfaceMosquittoParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var DMInterfaceMosquittoParameters$$serializer_instance = null;
  function DMInterfaceMosquittoParameters$$serializer_getInstance() {
    if (DMInterfaceMosquittoParameters$$serializer_instance === null) {
      new DMInterfaceMosquittoParameters$$serializer();
    }return DMInterfaceMosquittoParameters$$serializer_instance;
  }
  function DMInterfaceMosquittoParameters_init(seen1, username, password, port, url, tls, dmType, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DMInterfaceMosquittoParameters.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username_b5dn5d$_0 = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('password');
    else
      $this.password_wc15zq$_0 = password;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port_gbp5q4$_0 = port;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url_nfqqow$_0 = url;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('tls');
    else
      $this.tls_nfrhyk$_0 = tls;
    if ((seen1 & 32) === 0)
      $this.dmType_pxppcu$_0 = DMType$MOSQUITTO_getInstance();
    else
      $this.dmType_pxppcu$_0 = dmType;
    return $this;
  }
  DMInterfaceMosquittoParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMInterfaceMosquittoParameters',
    interfaces: [DMInterfaceRBACMQTTParameters]
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.implementation.dm.AclType.' + name);
    }
  }
  AclType.valueOf_61zpoe$ = AclType$valueOf;
  function MQTTMessage(message, topic, error) {
    MQTTMessage$Companion_getInstance();
    this.message = message;
    this.topic = topic;
    this.error = error;
  }
  function MQTTMessage$Companion() {
    MQTTMessage$Companion_instance = this;
  }
  MQTTMessage$Companion.prototype.serializer = function () {
    return MQTTMessage$$serializer_getInstance();
  };
  MQTTMessage$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MQTTMessage$Companion_instance = null;
  function MQTTMessage$Companion_getInstance() {
    if (MQTTMessage$Companion_instance === null) {
      new MQTTMessage$Companion();
    }return MQTTMessage$Companion_instance;
  }
  function MQTTMessage$$serializer() {
    this.descriptor_b4ms5g$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.dm.MQTTMessage', this, 3);
    this.descriptor.addElement_ivxn3r$('message', false);
    this.descriptor.addElement_ivxn3r$('topic', false);
    this.descriptor.addElement_ivxn3r$('error', false);
    MQTTMessage$$serializer_instance = this;
  }
  Object.defineProperty(MQTTMessage$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_b4ms5g$_0;
    }
  });
  MQTTMessage$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.message);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.topic);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 2, value.error);
    output.endStructure_24f42q$(this.descriptor);
  };
  MQTTMessage$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeBooleanElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return MQTTMessage_init(bitMask0, local0, local1, local2, null);
  };
  MQTTMessage$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.BooleanSerializer];
  };
  MQTTMessage$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MQTTMessage$$serializer_instance = null;
  function MQTTMessage$$serializer_getInstance() {
    if (MQTTMessage$$serializer_instance === null) {
      new MQTTMessage$$serializer();
    }return MQTTMessage$$serializer_instance;
  }
  function MQTTMessage_init(seen1, message, topic, error, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MQTTMessage.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('message');
    else
      $this.message = message;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('topic');
    else
      $this.topic = topic;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('error');
    else
      $this.error = error;
    return $this;
  }
  MQTTMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MQTTMessage',
    interfaces: []
  };
  MQTTMessage.prototype.component1 = function () {
    return this.message;
  };
  MQTTMessage.prototype.component2 = function () {
    return this.topic;
  };
  MQTTMessage.prototype.component3 = function () {
    return this.error;
  };
  MQTTMessage.prototype.copy_qz9155$ = function (message, topic, error) {
    return new MQTTMessage(message === void 0 ? this.message : message, topic === void 0 ? this.topic : topic, error === void 0 ? this.error : error);
  };
  MQTTMessage.prototype.toString = function () {
    return 'MQTTMessage(message=' + Kotlin.toString(this.message) + (', topic=' + Kotlin.toString(this.topic)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  MQTTMessage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.topic) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  MQTTMessage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.message, other.message) && Kotlin.equals(this.topic, other.topic) && Kotlin.equals(this.error, other.error)))));
  };
  function DMInterfaceParameters() {
  }
  DMInterfaceParameters.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DMInterfaceParameters',
    interfaces: []
  };
  function DMInterfaceRBACMQTTParameters() {
  }
  DMInterfaceRBACMQTTParameters.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DMInterfaceRBACMQTTParameters',
    interfaces: [DMInterfaceParameters]
  };
  function DMInterfaceRBACCLOUDParameters() {
  }
  DMInterfaceRBACCLOUDParameters.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DMInterfaceRBACCLOUDParameters',
    interfaces: [DMInterfaceParameters]
  };
  function DMType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DMType_initFields() {
    DMType_initFields = function () {
    };
    DMType$CRYPTOAC_instance = new DMType('CRYPTOAC', 0);
    DMType$MOSQUITTO_instance = new DMType('MOSQUITTO', 1);
  }
  var DMType$CRYPTOAC_instance;
  function DMType$CRYPTOAC_getInstance() {
    DMType_initFields();
    return DMType$CRYPTOAC_instance;
  }
  var DMType$MOSQUITTO_instance;
  function DMType$MOSQUITTO_getInstance() {
    DMType_initFields();
    return DMType$MOSQUITTO_instance;
  }
  DMType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMType',
    interfaces: [Enum]
  };
  function DMType$values() {
    return [DMType$CRYPTOAC_getInstance(), DMType$MOSQUITTO_getInstance()];
  }
  DMType.values = DMType$values;
  function DMType$valueOf(name) {
    switch (name) {
      case 'CRYPTOAC':
        return DMType$CRYPTOAC_getInstance();
      case 'MOSQUITTO':
        return DMType$MOSQUITTO_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.implementation.dm.DMType.' + name);
    }
  }
  DMType.valueOf_61zpoe$ = DMType$valueOf;
  function logger$lambda_4() {
    return Unit;
  }
  var logger_4;
  function MMInterfaceMySQLParameters(username, password, port, url) {
    MMInterfaceMySQLParameters$Companion_getInstance();
    this.username_ctkuu$_0 = username;
    this.password_kttxzj$_0 = password;
    this.port_xiwl8r$_0 = port;
    this.url_cnwhfr$_0 = url;
    this.mmType_4rpc26$_0 = MMType$MYSQL_getInstance();
  }
  Object.defineProperty(MMInterfaceMySQLParameters.prototype, 'username', {
    get: function () {
      return this.username_ctkuu$_0;
    },
    set: function (username) {
      this.username_ctkuu$_0 = username;
    }
  });
  Object.defineProperty(MMInterfaceMySQLParameters.prototype, 'password', {
    get: function () {
      return this.password_kttxzj$_0;
    },
    set: function (password) {
      this.password_kttxzj$_0 = password;
    }
  });
  Object.defineProperty(MMInterfaceMySQLParameters.prototype, 'port', {
    get: function () {
      return this.port_xiwl8r$_0;
    },
    set: function (port) {
      this.port_xiwl8r$_0 = port;
    }
  });
  Object.defineProperty(MMInterfaceMySQLParameters.prototype, 'url', {
    get: function () {
      return this.url_cnwhfr$_0;
    },
    set: function (url) {
      this.url_cnwhfr$_0 = url;
    }
  });
  Object.defineProperty(MMInterfaceMySQLParameters.prototype, 'mmType', {
    configurable: true,
    get: function () {
      return this.mmType_4rpc26$_0;
    }
  });
  function MMInterfaceMySQLParameters$Companion() {
    MMInterfaceMySQLParameters$Companion_instance = this;
  }
  MMInterfaceMySQLParameters$Companion.prototype.fromMap_xlh5cu$ = function (parameters) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME));
    tmp$_0 = toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MM_PORT)));
    tmp$_1 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MM_URL));
    return new MMInterfaceMySQLParameters(tmp$, ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MM_PASSWORD)), tmp$_0, tmp$_1);
  };
  MMInterfaceMySQLParameters$Companion.prototype.toMap_169afz$ = function (parameters) {
    if (parameters === void 0)
      parameters = null;
    return listOf_0(listOf([new CryptoACFormField(SERVER_getInstance().MM_URL, replace(SERVER_getInstance().MM_URL, '_', ' '), InputType$text_getInstance(), void 0, parameters != null ? parameters.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MM_PASSWORD, replace(SERVER_getInstance().MM_PASSWORD, '_', ' '), InputType$password_getInstance(), void 0, parameters != null ? parameters.password : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MM_PORT, replace(SERVER_getInstance().MM_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString(parameters != null ? parameters.port : null), 'darkTextField')]));
  };
  MMInterfaceMySQLParameters$Companion.prototype.serializer = function () {
    return MMInterfaceMySQLParameters$$serializer_getInstance();
  };
  MMInterfaceMySQLParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MMInterfaceMySQLParameters$Companion_instance = null;
  function MMInterfaceMySQLParameters$Companion_getInstance() {
    if (MMInterfaceMySQLParameters$Companion_instance === null) {
      new MMInterfaceMySQLParameters$Companion();
    }return MMInterfaceMySQLParameters$Companion_instance;
  }
  function MMInterfaceMySQLParameters$checkParameters$lambda(this$MMInterfaceMySQLParameters) {
    return function () {
      var $receiver = this$MMInterfaceMySQLParameters.username;
      return 'Username ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect TEXT regex';
    };
  }
  function MMInterfaceMySQLParameters$checkParameters$lambda_0(this$MMInterfaceMySQLParameters) {
    return function () {
      var $receiver = this$MMInterfaceMySQLParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function MMInterfaceMySQLParameters$checkParameters$lambda_1() {
    return 'Password does not respect TEXT regex';
  }
  function MMInterfaceMySQLParameters$checkParameters$lambda_2(this$MMInterfaceMySQLParameters) {
    return function () {
      return 'Port number ' + this$MMInterfaceMySQLParameters.port + ' is inconsistent';
    };
  }
  MMInterfaceMySQLParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.username)) {
      logger_4.warn_nq59yw$(MMInterfaceMySQLParameters$checkParameters$lambda(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_4.warn_nq59yw$(MMInterfaceMySQLParameters$checkParameters$lambda_0(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.password)) {
      logger_4.warn_nq59yw$(MMInterfaceMySQLParameters$checkParameters$lambda_1);
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_4.warn_nq59yw$(MMInterfaceMySQLParameters$checkParameters$lambda_2(this));
      return false;
    } else {
      return true;
    }
  };
  function MMInterfaceMySQLParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  MMInterfaceMySQLParameters.prototype.update_f8hg2y$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, MMInterfaceMySQLParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_4.error_nq59yw$(MMInterfaceMySQLParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  MMInterfaceMySQLParameters.prototype.obscureSensitiveFields = function () {
    this.password = '***';
  };
  MMInterfaceMySQLParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, MMInterfaceMySQLParameters) ? tmp$_0 : throwCCE();
    if (!equals(this.username, other.username))
      return false;
    if (!equals(this.password, other.password))
      return false;
    if (this.port !== other.port)
      return false;
    if (!equals(this.url, other.url))
      return false;
    return true;
  };
  MMInterfaceMySQLParameters.prototype.hashCode = function () {
    var result = hashCode(this.username);
    result = (31 * result | 0) + hashCode(this.password) | 0;
    result = (31 * result | 0) + this.port | 0;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    return result;
  };
  function MMInterfaceMySQLParameters$$serializer() {
    this.descriptor_j4rwij$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.mm.MMInterfaceMySQLParameters', this, 5);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    this.descriptor.addElement_ivxn3r$('mmType', true);
    MMInterfaceMySQLParameters$$serializer_instance = this;
  }
  Object.defineProperty(MMInterfaceMySQLParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_j4rwij$_0;
    }
  });
  MMInterfaceMySQLParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.username);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.password);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.url);
    if (!equals(value.mmType, MMType$MYSQL_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 4))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 4, new EnumSerializer('eu.fbk.st.cryptoac.implementation.mm.MMType', MMType$values()), value.mmType);
    output.endStructure_24f42q$(this.descriptor);
  };
  MMInterfaceMySQLParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
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
        case 4:
          local4 = input.decodeSerializableElement_12e8id$(this.descriptor, 4, new EnumSerializer('eu.fbk.st.cryptoac.implementation.mm.MMType', MMType$values()), local4);
          bitMask0 |= 16;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return MMInterfaceMySQLParameters_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  MMInterfaceMySQLParameters$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.implementation.mm.MMType', MMType$values())];
  };
  MMInterfaceMySQLParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MMInterfaceMySQLParameters$$serializer_instance = null;
  function MMInterfaceMySQLParameters$$serializer_getInstance() {
    if (MMInterfaceMySQLParameters$$serializer_instance === null) {
      new MMInterfaceMySQLParameters$$serializer();
    }return MMInterfaceMySQLParameters$$serializer_instance;
  }
  function MMInterfaceMySQLParameters_init(seen1, username, password, port, url, mmType, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MMInterfaceMySQLParameters.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username_ctkuu$_0 = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('password');
    else
      $this.password_kttxzj$_0 = password;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port_xiwl8r$_0 = port;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url_cnwhfr$_0 = url;
    if ((seen1 & 16) === 0)
      $this.mmType_4rpc26$_0 = MMType$MYSQL_getInstance();
    else
      $this.mmType_4rpc26$_0 = mmType;
    return $this;
  }
  MMInterfaceMySQLParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MMInterfaceMySQLParameters',
    interfaces: [MMInterfaceRBACMQTTParameters, MMInterfaceRBACCLOUDParameters]
  };
  function MMInterfaceParameters() {
  }
  MMInterfaceParameters.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MMInterfaceParameters',
    interfaces: []
  };
  function MMInterfaceRBACMQTTParameters() {
  }
  MMInterfaceRBACMQTTParameters.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MMInterfaceRBACMQTTParameters',
    interfaces: [MMInterfaceParameters]
  };
  function MMInterfaceRBACCLOUDParameters() {
  }
  MMInterfaceRBACCLOUDParameters.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MMInterfaceRBACCLOUDParameters',
    interfaces: [MMInterfaceParameters]
  };
  function MMType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MMType_initFields() {
    MMType_initFields = function () {
    };
    MMType$MYSQL_instance = new MMType('MYSQL', 0);
    MMType$REDIS_instance = new MMType('REDIS', 1);
  }
  var MMType$MYSQL_instance;
  function MMType$MYSQL_getInstance() {
    MMType_initFields();
    return MMType$MYSQL_instance;
  }
  var MMType$REDIS_instance;
  function MMType$REDIS_getInstance() {
    MMType_initFields();
    return MMType$REDIS_instance;
  }
  MMType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MMType',
    interfaces: [Enum]
  };
  function MMType$values() {
    return [MMType$MYSQL_getInstance(), MMType$REDIS_getInstance()];
  }
  MMType.values = MMType$values;
  function MMType$valueOf(name) {
    switch (name) {
      case 'MYSQL':
        return MMType$MYSQL_getInstance();
      case 'REDIS':
        return MMType$REDIS_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.implementation.mm.MMType.' + name);
    }
  }
  MMType.valueOf_61zpoe$ = MMType$valueOf;
  function logger$lambda_5() {
    return Unit;
  }
  var logger_5;
  function MMInterfaceRedisParameters(username, password, port, url, token) {
    MMInterfaceRedisParameters$Companion_getInstance();
    this.username_pbcrin$_0 = username;
    this.password_44p8oa$_0 = password;
    this.port_9l8jg$_0 = port;
    this.url_iboihs$_0 = url;
    this.token = token;
    this.mmType_hb4az9$_0 = MMType$REDIS_getInstance();
  }
  Object.defineProperty(MMInterfaceRedisParameters.prototype, 'username', {
    get: function () {
      return this.username_pbcrin$_0;
    },
    set: function (username) {
      this.username_pbcrin$_0 = username;
    }
  });
  Object.defineProperty(MMInterfaceRedisParameters.prototype, 'password', {
    get: function () {
      return this.password_44p8oa$_0;
    },
    set: function (password) {
      this.password_44p8oa$_0 = password;
    }
  });
  Object.defineProperty(MMInterfaceRedisParameters.prototype, 'port', {
    get: function () {
      return this.port_9l8jg$_0;
    },
    set: function (port) {
      this.port_9l8jg$_0 = port;
    }
  });
  Object.defineProperty(MMInterfaceRedisParameters.prototype, 'url', {
    get: function () {
      return this.url_iboihs$_0;
    },
    set: function (url) {
      this.url_iboihs$_0 = url;
    }
  });
  Object.defineProperty(MMInterfaceRedisParameters.prototype, 'mmType', {
    configurable: true,
    get: function () {
      return this.mmType_hb4az9$_0;
    }
  });
  function MMInterfaceRedisParameters$Companion() {
    MMInterfaceRedisParameters$Companion_instance = this;
  }
  MMInterfaceRedisParameters$Companion.prototype.fromMap_xlh5cu$ = function (parameters) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME));
    tmp$_0 = toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MM_PORT)));
    tmp$_1 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MM_URL));
    return new MMInterfaceRedisParameters(tmp$, ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MM_PASSWORD)), tmp$_0, tmp$_1, ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MM_TOKEN)));
  };
  MMInterfaceRedisParameters$Companion.prototype.toMap_4poj22$ = function (parameters) {
    if (parameters === void 0)
      parameters = null;
    return listOf_0(listOf([new CryptoACFormField(SERVER_getInstance().MM_URL, replace(SERVER_getInstance().MM_URL, '_', ' '), InputType$text_getInstance(), void 0, parameters != null ? parameters.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MM_TOKEN, replace(SERVER_getInstance().MM_TOKEN, '_', ' '), InputType$text_getInstance(), void 0, parameters != null ? parameters.token : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MM_PASSWORD, replace(SERVER_getInstance().MM_PASSWORD, '_', ' '), InputType$password_getInstance(), void 0, parameters != null ? parameters.password : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MM_PORT, replace(SERVER_getInstance().MM_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString(parameters != null ? parameters.port : null), 'darkTextField')]));
  };
  MMInterfaceRedisParameters$Companion.prototype.serializer = function () {
    return MMInterfaceRedisParameters$$serializer_getInstance();
  };
  MMInterfaceRedisParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MMInterfaceRedisParameters$Companion_instance = null;
  function MMInterfaceRedisParameters$Companion_getInstance() {
    if (MMInterfaceRedisParameters$Companion_instance === null) {
      new MMInterfaceRedisParameters$Companion();
    }return MMInterfaceRedisParameters$Companion_instance;
  }
  function MMInterfaceRedisParameters$checkParameters$lambda(this$MMInterfaceRedisParameters) {
    return function () {
      var $receiver = this$MMInterfaceRedisParameters.username;
      return 'Username ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect TEXT regex';
    };
  }
  function MMInterfaceRedisParameters$checkParameters$lambda_0(this$MMInterfaceRedisParameters) {
    return function () {
      var $receiver = this$MMInterfaceRedisParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function MMInterfaceRedisParameters$checkParameters$lambda_1() {
    return 'Password does not respect TEXT regex';
  }
  function MMInterfaceRedisParameters$checkParameters$lambda_2(this$MMInterfaceRedisParameters) {
    return function () {
      return 'Port number ' + this$MMInterfaceRedisParameters.port + ' is inconsistent';
    };
  }
  function MMInterfaceRedisParameters$checkParameters$lambda_3(this$MMInterfaceRedisParameters) {
    return function () {
      var $receiver = this$MMInterfaceRedisParameters.token;
      return 'Token ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect BASE64 regex';
    };
  }
  MMInterfaceRedisParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.username)) {
      logger_5.warn_nq59yw$(MMInterfaceRedisParameters$checkParameters$lambda(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_5.warn_nq59yw$(MMInterfaceRedisParameters$checkParameters$lambda_0(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.password)) {
      logger_5.warn_nq59yw$(MMInterfaceRedisParameters$checkParameters$lambda_1);
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_5.warn_nq59yw$(MMInterfaceRedisParameters$checkParameters$lambda_2(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.token)) {
      logger_5.warn_nq59yw$(MMInterfaceRedisParameters$checkParameters$lambda_3(this));
      return false;
    } else {
      return true;
    }
  };
  function MMInterfaceRedisParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  MMInterfaceRedisParameters.prototype.update_f8hg2y$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, MMInterfaceRedisParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_5.error_nq59yw$(MMInterfaceRedisParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  MMInterfaceRedisParameters.prototype.obscureSensitiveFields = function () {
    this.password = '***';
  };
  MMInterfaceRedisParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, MMInterfaceRedisParameters) ? tmp$_0 : throwCCE();
    if (!equals(this.username, other.username))
      return false;
    if (!equals(this.password, other.password))
      return false;
    if (this.port !== other.port)
      return false;
    if (!equals(this.url, other.url))
      return false;
    if (!equals(this.token, other.token))
      return false;
    if (this.mmType !== other.mmType)
      return false;
    return true;
  };
  MMInterfaceRedisParameters.prototype.hashCode = function () {
    var result = hashCode(this.username);
    result = (31 * result | 0) + hashCode(this.password) | 0;
    result = (31 * result | 0) + this.port | 0;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    result = (31 * result | 0) + hashCode(this.token) | 0;
    result = (31 * result | 0) + this.mmType.hashCode() | 0;
    return result;
  };
  function MMInterfaceRedisParameters$$serializer() {
    this.descriptor_5crmhu$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.mm.MMInterfaceRedisParameters', this, 6);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    this.descriptor.addElement_ivxn3r$('token', false);
    this.descriptor.addElement_ivxn3r$('mmType', true);
    MMInterfaceRedisParameters$$serializer_instance = this;
  }
  Object.defineProperty(MMInterfaceRedisParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_5crmhu$_0;
    }
  });
  MMInterfaceRedisParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.username);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.password);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.url);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.token);
    if (!equals(value.mmType, MMType$REDIS_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 5))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 5, new EnumSerializer('eu.fbk.st.cryptoac.implementation.mm.MMType', MMType$values()), value.mmType);
    output.endStructure_24f42q$(this.descriptor);
  };
  MMInterfaceRedisParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
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
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeSerializableElement_12e8id$(this.descriptor, 5, new EnumSerializer('eu.fbk.st.cryptoac.implementation.mm.MMType', MMType$values()), local5);
          bitMask0 |= 32;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return MMInterfaceRedisParameters_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  MMInterfaceRedisParameters$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.implementation.mm.MMType', MMType$values())];
  };
  MMInterfaceRedisParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MMInterfaceRedisParameters$$serializer_instance = null;
  function MMInterfaceRedisParameters$$serializer_getInstance() {
    if (MMInterfaceRedisParameters$$serializer_instance === null) {
      new MMInterfaceRedisParameters$$serializer();
    }return MMInterfaceRedisParameters$$serializer_instance;
  }
  function MMInterfaceRedisParameters_init(seen1, username, password, port, url, token, mmType, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MMInterfaceRedisParameters.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username_pbcrin$_0 = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('password');
    else
      $this.password_44p8oa$_0 = password;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port_9l8jg$_0 = port;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url_iboihs$_0 = url;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('token');
    else
      $this.token = token;
    if ((seen1 & 32) === 0)
      $this.mmType_hb4az9$_0 = MMType$REDIS_getInstance();
    else
      $this.mmType_hb4az9$_0 = mmType;
    return $this;
  }
  MMInterfaceRedisParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MMInterfaceRedisParameters',
    interfaces: [MMInterfaceRBACMQTTParameters]
  };
  function logger$lambda_6() {
    return Unit;
  }
  var logger_6;
  function OPAInterfaceParameters(port, url, policyModel) {
    OPAInterfaceParameters$Companion_getInstance();
    this.port = port;
    this.url = url;
    this.policyModel = policyModel;
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
      logger_6.warn_nq59yw$(OPAInterfaceParameters$checkParameters$lambda(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_6.warn_nq59yw$(OPAInterfaceParameters$checkParameters$lambda_0(this));
      return false;
    } else {
      return true;
    }
  };
  OPAInterfaceParameters.prototype.update_3yqp66$ = function (updatedParameters) {
    this.port = updatedParameters.port;
    this.url = updatedParameters.url;
    this.policyModel = updatedParameters.policyModel;
  };
  OPAInterfaceParameters.prototype.obscureSensitiveFields = function () {
  };
  OPAInterfaceParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, OPAInterfaceParameters) ? tmp$_0 : throwCCE();
    if (this.port !== other.port)
      return false;
    if (!equals(this.url, other.url))
      return false;
    if (this.policyModel !== other.policyModel)
      return false;
    return true;
  };
  OPAInterfaceParameters.prototype.hashCode = function () {
    var result = this.port;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    result = (31 * result | 0) + this.policyModel.hashCode() | 0;
    return result;
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
    this.descriptor_nv7o15$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters', this, 3);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    this.descriptor.addElement_ivxn3r$('policyModel', false);
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
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, PolicyModel$$serializer_getInstance(), value.policyModel);
    output.endStructure_24f42q$(this.descriptor);
  };
  OPAInterfaceParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, PolicyModel$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return OPAInterfaceParameters_init(bitMask0, local0, local1, local2, null);
  };
  OPAInterfaceParameters$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, PolicyModel$$serializer_getInstance()];
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
  function OPAInterfaceParameters_init(seen1, port, url, policyModel, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(OPAInterfaceParameters.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port = port;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('policyModel');
    else
      $this.policyModel = policyModel;
    return $this;
  }
  OPAInterfaceParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OPAInterfaceParameters',
    interfaces: []
  };
  function logger$lambda_7() {
    return Unit;
  }
  var logger_7;
  function RMInterfaceCryptoACParameters(port, url) {
    RMInterfaceCryptoACParameters$Companion_getInstance();
    this.port_haxuxw$_0 = port;
    this.url_yxhwzk$_0 = url;
    this.rmType_z9a29c$_0 = RMType$CRYPTOAC_getInstance();
  }
  Object.defineProperty(RMInterfaceCryptoACParameters.prototype, 'port', {
    get: function () {
      return this.port_haxuxw$_0;
    },
    set: function (port) {
      this.port_haxuxw$_0 = port;
    }
  });
  Object.defineProperty(RMInterfaceCryptoACParameters.prototype, 'url', {
    get: function () {
      return this.url_yxhwzk$_0;
    },
    set: function (url) {
      this.url_yxhwzk$_0 = url;
    }
  });
  Object.defineProperty(RMInterfaceCryptoACParameters.prototype, 'rmType', {
    configurable: true,
    get: function () {
      return this.rmType_z9a29c$_0;
    }
  });
  function RMInterfaceCryptoACParameters$Companion() {
    RMInterfaceCryptoACParameters$Companion_instance = this;
  }
  RMInterfaceCryptoACParameters$Companion.prototype.fromMap_xlh5cu$ = function (parameters) {
    return new RMInterfaceCryptoACParameters(toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().RM_PORT))), ensureNotNull(parameters.get_11rb$(SERVER_getInstance().RM_URL)));
  };
  RMInterfaceCryptoACParameters$Companion.prototype.toMap_8hxbyy$ = function (parameters) {
    if (parameters === void 0)
      parameters = null;
    return listOf_0(listOf([new CryptoACFormField(SERVER_getInstance().RM_URL, replace(SERVER_getInstance().RM_URL, '_', ' '), InputType$text_getInstance(), void 0, parameters != null ? parameters.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().RM_PORT, replace(SERVER_getInstance().RM_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString(parameters != null ? parameters.port : null), 'darkTextField')]));
  };
  RMInterfaceCryptoACParameters$Companion.prototype.serializer = function () {
    return RMInterfaceCryptoACParameters$$serializer_getInstance();
  };
  RMInterfaceCryptoACParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RMInterfaceCryptoACParameters$Companion_instance = null;
  function RMInterfaceCryptoACParameters$Companion_getInstance() {
    if (RMInterfaceCryptoACParameters$Companion_instance === null) {
      new RMInterfaceCryptoACParameters$Companion();
    }return RMInterfaceCryptoACParameters$Companion_instance;
  }
  function RMInterfaceCryptoACParameters$checkParameters$lambda(this$RMInterfaceCryptoACParameters) {
    return function () {
      var $receiver = this$RMInterfaceCryptoACParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function RMInterfaceCryptoACParameters$checkParameters$lambda_0(this$RMInterfaceCryptoACParameters) {
    return function () {
      return 'Port number ' + this$RMInterfaceCryptoACParameters.port + ' is inconsistent';
    };
  }
  RMInterfaceCryptoACParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_7.warn_nq59yw$(RMInterfaceCryptoACParameters$checkParameters$lambda(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_7.warn_nq59yw$(RMInterfaceCryptoACParameters$checkParameters$lambda_0(this));
      return false;
    } else {
      return true;
    }
  };
  function RMInterfaceCryptoACParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  RMInterfaceCryptoACParameters.prototype.update_3asgqy$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, RMInterfaceCryptoACParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_7.error_nq59yw$(RMInterfaceCryptoACParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  RMInterfaceCryptoACParameters.prototype.obscureSensitiveFields = function () {
  };
  RMInterfaceCryptoACParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, RMInterfaceCryptoACParameters) ? tmp$_0 : throwCCE();
    if (this.port !== other.port)
      return false;
    if (!equals(this.url, other.url))
      return false;
    return true;
  };
  RMInterfaceCryptoACParameters.prototype.hashCode = function () {
    var result = this.port;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    return result;
  };
  function RMInterfaceCryptoACParameters$$serializer() {
    this.descriptor_7yw2f6$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.rm.RMInterfaceCryptoACParameters', this, 3);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    this.descriptor.addElement_ivxn3r$('rmType', true);
    RMInterfaceCryptoACParameters$$serializer_instance = this;
  }
  Object.defineProperty(RMInterfaceCryptoACParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_7yw2f6$_0;
    }
  });
  RMInterfaceCryptoACParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.url);
    if (!equals(value.rmType, RMType$CRYPTOAC_getInstance()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.implementation.rm.RMType', RMType$values()), value.rmType);
    output.endStructure_24f42q$(this.descriptor);
  };
  RMInterfaceCryptoACParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, new EnumSerializer('eu.fbk.st.cryptoac.implementation.rm.RMType', RMType$values()), local2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return RMInterfaceCryptoACParameters_init(bitMask0, local0, local1, local2, null);
  };
  RMInterfaceCryptoACParameters$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer, new EnumSerializer('eu.fbk.st.cryptoac.implementation.rm.RMType', RMType$values())];
  };
  RMInterfaceCryptoACParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var RMInterfaceCryptoACParameters$$serializer_instance = null;
  function RMInterfaceCryptoACParameters$$serializer_getInstance() {
    if (RMInterfaceCryptoACParameters$$serializer_instance === null) {
      new RMInterfaceCryptoACParameters$$serializer();
    }return RMInterfaceCryptoACParameters$$serializer_instance;
  }
  function RMInterfaceCryptoACParameters_init(seen1, port, url, rmType, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(RMInterfaceCryptoACParameters.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port_haxuxw$_0 = port;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url_yxhwzk$_0 = url;
    if ((seen1 & 4) === 0)
      $this.rmType_z9a29c$_0 = RMType$CRYPTOAC_getInstance();
    else
      $this.rmType_z9a29c$_0 = rmType;
    return $this;
  }
  RMInterfaceCryptoACParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RMInterfaceCryptoACParameters',
    interfaces: [RMInterfaceRBACCLOUDParameters]
  };
  function RMInterfaceParameters() {
  }
  RMInterfaceParameters.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RMInterfaceParameters',
    interfaces: []
  };
  function RMInterfaceRBACCLOUDParameters() {
  }
  RMInterfaceRBACCLOUDParameters.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RMInterfaceRBACCLOUDParameters',
    interfaces: [RMInterfaceParameters]
  };
  function RMType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RMType_initFields() {
    RMType_initFields = function () {
    };
    RMType$CRYPTOAC_instance = new RMType('CRYPTOAC', 0);
    RMType$NONE_instance = new RMType('NONE', 1);
  }
  var RMType$CRYPTOAC_instance;
  function RMType$CRYPTOAC_getInstance() {
    RMType_initFields();
    return RMType$CRYPTOAC_instance;
  }
  var RMType$NONE_instance;
  function RMType$NONE_getInstance() {
    RMType_initFields();
    return RMType$NONE_instance;
  }
  RMType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RMType',
    interfaces: [Enum]
  };
  function RMType$values() {
    return [RMType$CRYPTOAC_getInstance(), RMType$NONE_getInstance()];
  }
  RMType.values = RMType$values;
  function RMType$valueOf(name) {
    switch (name) {
      case 'CRYPTOAC':
        return RMType$CRYPTOAC_getInstance();
      case 'NONE':
        return RMType$NONE_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.implementation.rm.RMType.' + name);
    }
  }
  RMType.valueOf_61zpoe$ = RMType$valueOf;
  function Themes() {
    Themes_instance = this;
    this.lightGreyColor = '#f7f7f7';
    this.concreteColor = '#95a5a6';
    this.greyColor = '#676767';
    this.purpleColor = '#8e44ad';
    this.wetAsphaltColor = '#34495e';
    this.purpleLinearGradient = 'linear-gradient(to right, rgb(142, 68, 173), rgb(172, 98, 203))';
    this.lightBlueLinearGradient = 'linear-gradient(to right, rgb(3, 169, 244), rgb(33, 199, 255))';
    this.amberLinearGradient = 'linear-gradient(to right, rgb(245, 183, 0), rgb(255, 193, 7))';
    this.plainPaperTitleStyle = JSON.parse(trimMargin('{\n                                         "paddingTop": "5px",\n                                         "paddingBottom": "5px",\n                                         "color": "#3C4858"\n                                     }'));
    this.largePlainPaperTitleStyle = JSON.parse(trimMargin('{\n                                         "paddingTop": "20px",\n                                         "paddingBottom": "20px",\n                                         "color": "#3C4858"\n                                     }'));
    this.decoratedPaperTitleStyle = JSON.parse(trimMargin('{\n                                         "marginTop": "2%",\n                                         "borderRadius": "2px",\n                                         "width": "96%",\n                                         "transform": "translate(2%, -20%)",\n                                         "backgroundImage": "linear-gradient(to right, rgb(142, 68, 173), rgb(172, 98, 203))",\n                                         "paddingTop": "5px",\n                                         "paddingBottom": "5px",\n                                         "color": "white"\n                                     }'));
  }
  Themes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Themes',
    interfaces: []
  };
  var Themes_instance = null;
  function Themes_getInstance() {
    if (Themes_instance === null) {
      new Themes();
    }return Themes_instance;
  }
  function styledSpan$lambda(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledA$lambda(closure$href, closure$target) {
    return function (it) {
      return new A_init(attributesMapOf_0(['href', closure$href, 'target', closure$target]), it);
    };
  }
  function delete$lambda($receiver) {
    return Unit;
  }
  function logger$lambda_8() {
    return Unit;
  }
  var logger_8;
  function App() {
    RComponent_init(this);
  }
  function App$render$lambda$lambda$lambda$lambda(this$App) {
    return function ($receiver) {
      if (this$App.state.circularProgressValue !== 0) {
        $receiver.value = this$App.state.circularProgressValue;
      }return Unit;
    };
  }
  function App$render$lambda$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.attrs_37755u$(App$render$lambda$lambda$lambda$lambda(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.attrs.open = this$App.state.backdropIsOpen;
      $receiver.invoke_qk0v40$($module$_material_ui_core.CircularProgress, App$render$lambda$lambda$lambda(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_0($receiver) {
    $receiver.alertIsOpen = false;
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
      $receiver.open = this$App.state.alertIsOpen;
      $receiver.handleClose = App$render$lambda$lambda_0(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function (it) {
      this$App.submitLogout_0();
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'logout';
      $receiver.style = JSON.parse(trimMargin('{\n                                             "marginLeft": "auto"\n                                         }'));
      $receiver.onClick = App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaDoorOpen, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.attrs_37755u$(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App));
      $receiver.child_30b5ua$(ensureNotNull(createElement(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0)));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.attrs.title = 'Logout';
      $receiver.invoke_qk0v40$($module$_material_ui_core.IconButton, App$render$lambda$lambda$lambda$lambda$lambda$lambda(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.width = get_pct(100);
    $receiver.marginBottom = get_px(10);
    $receiver.marginTop = get_px(0);
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_0(this$App) {
    return function (core) {
      this$App.changeCoreType_0(core);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_1(this$App) {
    return function (rmType) {
      this$App.changeRMType_0(rmType);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_2(this$App) {
    return function (mmType) {
      this$App.changeMMType_0(mmType);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_3(this$App) {
    return function (dmType) {
      this$App.changeDMType_0(dmType);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_1(this$App) {
    return function ($receiver) {
      $receiver.handleChangeCoreType = App$render$lambda$lambda$lambda$lambda$lambda_0(this$App);
      $receiver.handleChangeRMType = App$render$lambda$lambda$lambda$lambda$lambda_1(this$App);
      $receiver.handleChangeMMType = App$render$lambda$lambda$lambda$lambda$lambda_2(this$App);
      $receiver.handleChangeDMType = App$render$lambda$lambda$lambda$lambda$lambda_3(this$App);
      $receiver.coreType = this$App.state.coreType;
      $receiver.rmType = this$App.state.rmType;
      $receiver.mmType = this$App.state.mmType;
      $receiver.dmType = this$App.state.dmType;
      $receiver.availableRMImplementations = this$App.state.availableRMImplementations;
      $receiver.availableMMImplementations = this$App.state.availableMMImplementations;
      $receiver.availableDMImplementations = this$App.state.availableDMImplementations;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_4(this$App) {
    return function (userHasProfile) {
      this$App.changeUserHasProfile_0(userHasProfile);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_5(this$App) {
    return function (backdropIsOpen) {
      this$App.changeBackdropIsOpen_0(backdropIsOpen);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_6(this$App) {
    return function (userIsAdmin) {
      this$App.changeUserIsAdmin_0(userIsAdmin);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_7(this$App) {
    return function (code, severity) {
      this$App.displayAlert_0(code, severity);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_8(this$App) {
    return function (rmType) {
      this$App.changeRMType_0(rmType);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_9(this$App) {
    return function (mmType) {
      this$App.changeMMType_0(mmType);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_10(this$App) {
    return function (dmType) {
      this$App.changeDMType_0(dmType);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_2(this$App) {
    return function ($receiver) {
      $receiver.handleChangeUserHasProfile = App$render$lambda$lambda$lambda$lambda$lambda_4(this$App);
      $receiver.handleChangeBackdropIsOpen = App$render$lambda$lambda$lambda$lambda$lambda_5(this$App);
      $receiver.handleChangeUserIsAdmin = App$render$lambda$lambda$lambda$lambda$lambda_6(this$App);
      $receiver.handleDisplayAlert = App$render$lambda$lambda$lambda$lambda$lambda_7(this$App);
      $receiver.handleChangeRMType = App$render$lambda$lambda$lambda$lambda$lambda_8(this$App);
      $receiver.handleChangeMMType = App$render$lambda$lambda$lambda$lambda$lambda_9(this$App);
      $receiver.handleChangeDMType = App$render$lambda$lambda$lambda$lambda$lambda_10(this$App);
      $receiver.userHasProfile = this$App.state.userHasProfile;
      $receiver.userIsLogged = this$App.state.userIsLogged;
      $receiver.userIsAdmin = this$App.state.userIsAdmin;
      $receiver.httpClient = this$App.state.httpClient;
      $receiver.coreType = this$App.state.coreType;
      $receiver.rmType = this$App.state.rmType;
      $receiver.mmType = this$App.state.mmType;
      $receiver.dmType = this$App.state.dmType;
      $receiver.username = this$App.state.username;
      $receiver.tables = this$App.state.tables;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_11(this$App) {
    return function (circularProgressValue) {
      this$App.changeCircularProgressValue_0(circularProgressValue);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_12(this$App) {
    return function (backdropIsOpen) {
      this$App.changeBackdropIsOpen_0(backdropIsOpen);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_3(this$App) {
    return function ($receiver) {
      $receiver.handleChangeCircularProgressValue = App$render$lambda$lambda$lambda$lambda$lambda_11(this$App);
      $receiver.handleChangeBackdropIsOpen = App$render$lambda$lambda$lambda$lambda$lambda_12(this$App);
      $receiver.scenario = this$App.state.scenario;
      $receiver.algorithm = this$App.state.algorithm;
      $receiver.metric = this$App.state.metric;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_1(this$App) {
    return function ($receiver) {
      var tmp$;
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
      var this$App_0 = this$App;
      var $receiver_1 = $receiver_0.css;
      set_display($receiver_1, Display.flex);
      set_padding($receiver_1, '13.75px 0px');
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda);
      set_marginTop($receiver_0_0.css, LinearDimension.Companion.auto);
      $receiver_0_0.unaryPlus_pdl1vz$('Hello, ' + toString(this$App_0.state.username));
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Tooltip, App$render$lambda$lambda$lambda$lambda$lambda(this$App_0));
      $receiver.child_30b5ua$($receiver_0.create());
      $receiver.child_30b5ua$(cryptoACDivider(App$render$lambda$lambda$lambda$lambda_0));
      switch (this$App.state.uiType.name) {
        case 'Modules':
          tmp$ = modules(App$render$lambda$lambda$lambda$lambda_1(this$App));
          break;
        case 'Dashboard':
          tmp$ = dashboard(App$render$lambda$lambda$lambda$lambda_2(this$App));
          break;
        case 'TradeOffBoard':
          tmp$ = tradeOffBoard(App$render$lambda$lambda$lambda$lambda_3(this$App));
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.child_30b5ua$(tmp$);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_4(this$App) {
    return function ($receiver) {
      $receiver.collapsed = this$App.state.sidebarIsCollapsed;
      $receiver.collapsedWidth = get_px(80);
      $receiver.width = get_px(300);
      $receiver.image = 'bg4.jpg';
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function (it) {
      this$App.toggleSidebarIsCollapsed_0();
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.style = JSON.parse(trimMargin('{\n                                                        "width": "100%",\n                                                        "maxHeight": "20px",\n                                                        "padding": "0"\n                                                    }'));
      $receiver.variant = 'text';
      $receiver.onClick = App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$App) {
    return function ($receiver) {
      $receiver.attrs_37755u$(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda);
      var $receiver_1 = $receiver_0.css;
      set_fontSize($receiver_1, get_px(18));
      set_display($receiver_1, Display.inline);
      set_color($receiver_1, new Color(Themes_getInstance().concreteColor));
      $receiver_0.unaryPlus_pdl1vz$('CryptoAC');
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function (it) {
      this$App.toggleSidebarIsCollapsed_0();
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'expand';
      $receiver.onClick = App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaStream, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.attrs_37755u$(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$App));
      $receiver.child_30b5ua$(ensureNotNull(createElement(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1)));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$App) {
    return function ($receiver) {
      $receiver.attrs.title = 'Expand';
      $receiver.invoke_qk0v40$($module$_material_ui_core.IconButton, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.width = get_pct(100);
    $receiver.marginTop = get_px(10);
    $receiver.marginBottom = get_px(10);
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$App) {
    return function ($receiver) {
      $receiver.style = JSON.parse(trimMargin('{' + '"' + 'marginRight' + '"' + ': ' + '"' + (this$App.state.sidebarIsCollapsed ? 'unset' : 'auto') + ' ' + '"' + '}'));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$App) {
    return function ($receiver) {
      $receiver.attrs_37755u$(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$App) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$react_icons_fa.FaBoxes, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$App) {
    return function (it) {
      this$App.changeUIType_0(UIType$Modules_getInstance());
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$App) {
    return function ($receiver) {
      $receiver.style = JSON.parse(trimMargin('{' + '"' + 'marginRight' + '"' + ': ' + '"' + (this$App.state.sidebarIsCollapsed ? 'unset' : 'auto') + ' ' + '"' + '}'));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$App) {
    return function ($receiver) {
      $receiver.attrs_37755u$(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$App) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$react_icons_fa.FaBullseye, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$App) {
    return function (it) {
      this$App.changeUIType_0(UIType$Dashboard_getInstance());
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$App) {
    return function ($receiver) {
      $receiver.style = JSON.parse(trimMargin('{' + '"' + 'marginRight' + '"' + ': ' + '"' + (this$App.state.sidebarIsCollapsed ? 'unset' : 'auto') + ' ' + '"' + '}'));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$App) {
    return function ($receiver) {
      $receiver.attrs_37755u$(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$App) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$react_icons_fa.FaVials, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$App) {
    return function (it) {
      this$App.changeUIType_0(UIType$TradeOffBoard_getInstance());
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$App) {
    return function ($receiver) {
      $receiver.defaultSelectedButton = 0;
      $receiver.buttons = listOf([new CryptoACButtonAndIconData(ensureNotNull(createElement(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$App))), 'Modules', !this$App.state.sidebarIsCollapsed, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$App)), new CryptoACButtonAndIconData(ensureNotNull(createElement(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$App))), 'Dashboard', !this$App.state.sidebarIsCollapsed, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$App)), new CryptoACButtonAndIconData(ensureNotNull(createElement(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$App))), 'TradeOffBoard', !this$App.state.sidebarIsCollapsed, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$App))]);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_5(this$App) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
      var this$App_0 = this$App;
      var $receiver_1 = $receiver_0.css;
      set_textAlign($receiver_1, TextAlign.center);
      set_fontWeight($receiver_1, FontWeight.Companion.bold);
      set_letterSpacing($receiver_1, get_px(2));
      padding($receiver_1, !this$App_0.state.sidebarIsCollapsed ? get_px(20) : get_px(0));
      var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
      if (!this$App_0.state.sidebarIsCollapsed) {
        var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
        $receiver_0_1.invoke_qk0v40$($module$_material_ui_core.Button, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$App_0));
        $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      } else {
        var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
        set_marginTop($receiver_0_2.css, get_px(10));
        $receiver_0_2.invoke_qk0v40$($module$_material_ui_core.Tooltip, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$App_0));
        $receiver_0_0.child_30b5ua$($receiver_0_2.create());
      }
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      $receiver_0.child_30b5ua$(cryptoACDivider(App$render$lambda$lambda$lambda$lambda$lambda$lambda_0));
      $receiver_0.child_30b5ua$(cryptoACButtonAndIconGroup(App$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$App_0)));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_6($receiver) {
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_13(this$App) {
    return function (newScenario) {
      this$App.changeScenario_0(newScenario);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_14(this$App) {
    return function (newAlgorithm) {
      this$App.changeAlgorithm_0(newAlgorithm);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_15(this$App) {
    return function (newMetric) {
      this$App.changeMetric_0(newMetric);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_7(this$App) {
    return function ($receiver) {
      $receiver.handleChangeScenario = App$render$lambda$lambda$lambda$lambda$lambda_13(this$App);
      $receiver.handleChangeAlgorithm = App$render$lambda$lambda$lambda$lambda$lambda_14(this$App);
      $receiver.handleChangeMetric = App$render$lambda$lambda$lambda$lambda$lambda_15(this$App);
      $receiver.currentScenario = this$App.state.scenario;
      $receiver.currentAlgorithm = this$App.state.algorithm;
      $receiver.currentMetric = this$App.state.metric;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_16(this$App) {
    return function (backdropIsOpen) {
      this$App.changeBackdropIsOpen_0(backdropIsOpen);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_17(this$App) {
    return function (topic) {
      this$App.addTableInContent_0(topic);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_18(this$App) {
    return function (code, severity) {
      this$App.displayAlert_0(code, severity);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_8(this$App) {
    return function ($receiver) {
      $receiver.handleChangeBackdropIsOpen = App$render$lambda$lambda$lambda$lambda$lambda_16(this$App);
      $receiver.handleAddTableInContent = App$render$lambda$lambda$lambda$lambda$lambda_17(this$App);
      $receiver.handleDisplayAlert = App$render$lambda$lambda$lambda$lambda$lambda_18(this$App);
      $receiver.userHasProfile = this$App.state.userHasProfile;
      $receiver.userIsLogged = this$App.state.userIsLogged;
      $receiver.userIsAdmin = this$App.state.userIsAdmin;
      $receiver.httpClient = this$App.state.httpClient;
      $receiver.coreType = this$App.state.coreType;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_9($receiver) {
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    set_color($receiver, new Color(Themes_getInstance().wetAsphaltColor));
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda_10(this$App) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
      var this$App_0 = this$App;
      padding_0($receiver_0.css, get_px(20), get_px(24));
      var href = 'https://github.com/stfbk/CryptoAC';
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledA$lambda(href, '_blank'));
      var $receiver_1 = $receiver_0_0.css;
      set_color($receiver_1, new Color(Themes_getInstance().greyColor));
      set_textDecoration($receiver_1, TextDecoration.Companion.none);
      set_display($receiver_1, Display.flex);
      set_alignItems($receiver_1, Align.center);
      set_justifyContent($receiver_1, JustifyContent.center);
      set_textOverflow($receiver_1, TextOverflow.ellipsis);
      set_overflow($receiver_1, Overflow.hidden);
      $receiver_1.hover_lx8bml$(App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6);
      $receiver_0_0.invoke_qk0v40$($module$react_icons_fa.FaGithub, App$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7);
      if (!this$App_0.state.sidebarIsCollapsed) {
        var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda);
        var $receiver_2 = $receiver_0_1.css;
        set_marginLeft($receiver_2, get_px(5));
        set_fontSize($receiver_2, get_px(13));
        $receiver_0_1.unaryPlus_pdl1vz$('View source');
        $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      }$receiver_0.child_30b5ua$($receiver_0_0.create());
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_2(this$App) {
    return function ($receiver) {
      var tmp$;
      $receiver.attrs_37755u$(App$render$lambda$lambda$lambda$lambda_4(this$App));
      $receiver.invoke_qk0v40$($module$react_pro_sidebar.SidebarHeader, App$render$lambda$lambda$lambda$lambda_5(this$App));
      if (this$App.state.sidebarIsCollapsed) {
        tmp$ = empty(App$render$lambda$lambda$lambda$lambda_6);
      } else {
        switch (this$App.state.uiType.name) {
          case 'TradeOffBoard':
            tmp$ = configuration(App$render$lambda$lambda$lambda$lambda_7(this$App));
            break;
          case 'Dashboard':
            tmp$ = actions(App$render$lambda$lambda$lambda$lambda_8(this$App));
            break;
          case 'Modules':
            tmp$ = evaluation(App$render$lambda$lambda$lambda$lambda_9);
            break;
          default:tmp$ = Kotlin.noWhenBranchMatched();
            break;
        }
      }
      $receiver.child_30b5ua$(tmp$);
      $receiver.invoke_qk0v40$($module$react_pro_sidebar.SidebarFooter, App$render$lambda$lambda$lambda$lambda_10(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda_1(this$App) {
    return function (backdropIsOpen) {
      this$App.changeBackdropIsOpen_0(backdropIsOpen);
      return Unit;
    };
  }
  function App$render$lambda$lambda_2(this$App) {
    return function (userIsLogged) {
      this$App.changeUserIsLogged_0(userIsLogged);
      return Unit;
    };
  }
  function App$render$lambda$lambda_3(this$App) {
    return function (username) {
      this$App.changeUsername_0(username);
      return Unit;
    };
  }
  function App$render$lambda$lambda_4(this$App) {
    return function (code, severity) {
      this$App.displayAlert_0(code, severity);
      return Unit;
    };
  }
  function App$render$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.httpClient = this$App.state.httpClient;
      $receiver.handleChangeBackdropIsOpen = App$render$lambda$lambda_1(this$App);
      $receiver.handleChangeUserIsLogged = App$render$lambda$lambda_2(this$App);
      $receiver.handleChangeUsername = App$render$lambda$lambda_3(this$App);
      $receiver.handleDisplayAlert = App$render$lambda$lambda_4(this$App);
      return Unit;
    };
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    set_zIndex($receiver_1, 10);
    set_position($receiver_1, Position.relative);
    $receiver_0.invoke_qk0v40$($module$_material_ui_core.Backdrop, App$render$lambda$lambda(this));
    $receiver.child_30b5ua$($receiver_0.create());
    $receiver.child_30b5ua$(cryptoACAlert(App$render$lambda(this)));
    if (this.state.userIsLogged) {
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
      var $receiver_2 = $receiver_0_0.css;
      set_display($receiver_2, Display.flex);
      set_position($receiver_2, Position.relative);
      set_height($receiver_2, get_pct(100));
      var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
      var $receiver_3 = $receiver_0_1.css;
      set_backgroundColor($receiver_3, new Color(Themes_getInstance().lightGreyColor));
      set_marginLeft($receiver_3, get_px(this.state.sidebarIsCollapsed ? 80 : 300));
      set_width($receiver_3, get_pct(100));
      set_height($receiver_3, get_pct(100));
      $receiver_0_1.invoke_qk0v40$($module$_material_ui_core.Container, App$render$lambda$lambda$lambda_1(this));
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
      var $receiver_4 = $receiver_0_2.css;
      set_position($receiver_4, Position.fixed);
      set_height($receiver_4, get_pct(100));
      $receiver_4.classes.add_11rb$('sidebarShadow');
      $receiver_0_2.invoke_qk0v40$($module$react_pro_sidebar.ProSidebar, App$render$lambda$lambda$lambda_2(this));
      $receiver_0_0.child_30b5ua$($receiver_0_2.create());
      $receiver.child_30b5ua$($receiver_0_0.create());
    } else {
      $receiver.child_30b5ua$(login(App$render$lambda_0(this)));
    }
  };
  function App$init$lambda() {
    return 'Initializing the state of the App component';
  }
  function App$init$lambda$lambda($receiver) {
    json($receiver, myJson);
    return Unit;
  }
  function App$init$lambda_0($receiver) {
    $receiver.expectSuccess = false;
    $receiver.install_dq2y33$(WebSockets.Plugin);
    $receiver.install_dq2y33$(HttpCookies.Companion);
    $receiver.install_dq2y33$(ContentNegotiation.Plugin, App$init$lambda$lambda);
    return Unit;
  }
  App.prototype.init_b4e81d$ = function ($receiver) {
    logger_8.info_nq59yw$(App$init$lambda);
    $receiver.coreType = CoreType$RBAC_CLOUD_getInstance();
    $receiver.uiType = UIType$Modules_getInstance();
    $receiver.sidebarIsCollapsed = false;
    $receiver.backdropIsOpen = false;
    $receiver.userHasProfile = false;
    $receiver.userIsLogged = false;
    $receiver.userIsAdmin = false;
    $receiver.alertIsOpen = false;
    $receiver.alertMessage = '';
    $receiver.tables = ArrayList_init();
    $receiver.alertSeverity = CryptoACAlertSeverity$SUCCESS_getInstance();
    $receiver.httpClient = HttpClient(App$init$lambda_0);
    $receiver.metric = Metric$Goals_getInstance();
    $receiver.scenario = Scenario$CLOUD_getInstance();
    $receiver.algorithm = Algorithm$Best_getInstance();
    $receiver.rmType = RMType$CRYPTOAC_getInstance();
    $receiver.mmType = MMType$MYSQL_getInstance();
    $receiver.dmType = DMType$CRYPTOAC_getInstance();
    $receiver.availableRMImplementations = this.getRMImplementations_0(CoreType$RBAC_CLOUD_getInstance());
    $receiver.availableMMImplementations = this.getMMImplementations_0(CoreType$RBAC_CLOUD_getInstance());
    $receiver.availableDMImplementations = this.getDMImplementations_0(CoreType$RBAC_CLOUD_getInstance());
    $receiver.circularProgressValue = 0;
  };
  function App$submitLogout$lambda() {
    return 'Submitting CryptoAC logout form';
  }
  function App$submitLogout$lambda$lambda(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function App$submitLogout$lambda$lambda_0(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function App$submitLogout$lambda$lambda_1(closure$e) {
    return function () {
      return 'Error during login (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$App$submitLogout$lambda(this$App_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 11;
    this.local$this$App = this$App_0;
    this.local$response = void 0;
  }
  Coroutine$App$submitLogout$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$App$submitLogout$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$App$submitLogout$lambda.prototype.constructor = Coroutine$App$submitLogout$lambda;
  Coroutine$App$submitLogout$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 6;
            var $receiver = this.local$this$App.state.httpClient;
            var urlString = baseURL + API_getInstance().LOGOUT;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, urlString);
            $receiver_1.method = HttpMethod_0.Companion.Delete;
            this.state_0 = 1;
            this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.result_0;
            this.local$response = this.result_0;
            var tmp$_2;
            var tmp$_3 = this.local$response.call;
            var tmp$_4 = reflect.JsType;
            var tmp$_0_1 = getKClass(OutcomeCode);
            var tryGetType$result_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0 = createKType(getKClass(OutcomeCode), [], false);
              } catch (cause_0) {
                if (Kotlin.isType(cause_0, Throwable)) {
                  tryGetType$result_0 = null;
                  break tryGetType$break;
                } else
                  throw cause_0;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_3.body_qi9ur9$(typeInfoImpl(tmp$_4, tmp$_0_1, tryGetType$result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_2 = this.result_0, OutcomeCode) ? tmp$_2 : throwCCE();
            var code = this.result_0;
            var status = this.local$response.status;
            if (status != null ? status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_8.info_nq59yw$(App$submitLogout$lambda$lambda(status, code));
              this.local$this$App.changeUserIsLogged_0(false);
              this.exceptionState_0 = 11;
              this.finallyPath_0 = [4];
              this.state_0 = 9;
              this.$returnValue = (this.local$this$App.changeUsername_0(null), Unit);
              continue;
            } else {
              logger_8.warn_nq59yw$(App$submitLogout$lambda$lambda_0(status, code));
              this.exceptionState_0 = 11;
              this.finallyPath_0 = [3];
              this.state_0 = 9;
              this.$returnValue = (this.local$this$App.displayAlert_0(code, CryptoACAlertSeverity$ERROR_getInstance()), Unit);
              continue;
            }

          case 3:
            return this.$returnValue;
          case 4:
            return this.$returnValue;
          case 5:
            this.exceptionState_0 = 11;
            this.finallyPath_0 = [10];
            this.state_0 = 9;
            continue;
          case 6:
            this.finallyPath_0 = [11];
            this.exceptionState_0 = 9;
            var e = this.exception_0;
            if (Kotlin.isType(e, Error_0)) {
              logger_8.error_nq59yw$(App$submitLogout$lambda$lambda_1(e));
              console.log(e);
              this.exceptionState_0 = 11;
              this.finallyPath_0 = [7];
              this.state_0 = 9;
              this.$returnValue = (this.local$this$App.displayAlert_0(OutcomeCode$CODE_049_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit);
              continue;
            } else {
              throw e;
            }

          case 7:
            return this.$returnValue;
          case 8:
            this.finallyPath_0 = [10];
            this.state_0 = 9;
            continue;
          case 9:
            this.exceptionState_0 = 11;
            this.local$this$App.changeBackdropIsOpen_0(false);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 10:
            return;
          case 11:
            throw this.exception_0;
          default:this.state_0 = 11;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 11) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function App$submitLogout$lambda_0(this$App_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$App$submitLogout$lambda(this$App_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  App.prototype.submitLogout_0 = function () {
    logger_8.info_nq59yw$(App$submitLogout$lambda);
    this.changeBackdropIsOpen_0(true);
    launch(MainScope(), void 0, void 0, App$submitLogout$lambda_0(this));
  };
  function App$displayAlert$lambda(closure$code, closure$severity) {
    return function () {
      return 'Displaying the alert with code ' + closure$code + ' and severity ' + closure$severity;
    };
  }
  function App$displayAlert$lambda_0(closure$code, closure$severity) {
    return function ($receiver) {
      $receiver.alertIsOpen = true;
      $receiver.alertMessage = closure$code.getMessage() + (' (Code ' + closure$code.getNumber() + ')');
      $receiver.alertSeverity = closure$severity;
      return Unit;
    };
  }
  App.prototype.displayAlert_0 = function (code, severity) {
    logger_8.info_nq59yw$(App$displayAlert$lambda(code, severity));
    setState(this, App$displayAlert$lambda_0(code, severity));
  };
  function App$addTableInContent$lambda(closure$tableName) {
    return function () {
      return 'Adding table ' + closure$tableName + ' to content';
    };
  }
  function App$addTableInContent$lambda_0(closure$tableName) {
    return function ($receiver) {
      $receiver.tables.add_11rb$(closure$tableName);
      return Unit;
    };
  }
  App.prototype.addTableInContent_0 = function (tableName) {
    logger_8.info_nq59yw$(App$addTableInContent$lambda(tableName));
    setState(this, App$addTableInContent$lambda_0(tableName));
  };
  function App$changeUIType$lambda(closure$newUIType) {
    return function () {
      return "Asking to change the 'uiType' state to " + closure$newUIType;
    };
  }
  function App$changeUIType$lambda$lambda(closure$newUIType) {
    return function () {
      return "Setting the 'uiType' state to " + closure$newUIType;
    };
  }
  function App$changeUIType$lambda_0(closure$newUIType) {
    return function ($receiver) {
      logger_8.info_nq59yw$(App$changeUIType$lambda$lambda(closure$newUIType));
      $receiver.uiType = closure$newUIType;
      return Unit;
    };
  }
  App.prototype.changeUIType_0 = function (newUIType) {
    logger_8.info_nq59yw$(App$changeUIType$lambda(newUIType));
    setState(this, App$changeUIType$lambda_0(newUIType));
    return true;
  };
  function App$changeBackdropIsOpen$lambda(closure$newBackdropIsOpen) {
    return function () {
      return "Setting the 'backdropIsOpen' state to " + closure$newBackdropIsOpen;
    };
  }
  function App$changeBackdropIsOpen$lambda_0(closure$newBackdropIsOpen) {
    return function ($receiver) {
      $receiver.backdropIsOpen = closure$newBackdropIsOpen;
      return Unit;
    };
  }
  App.prototype.changeBackdropIsOpen_0 = function (newBackdropIsOpen) {
    logger_8.info_nq59yw$(App$changeBackdropIsOpen$lambda(newBackdropIsOpen));
    if (!newBackdropIsOpen) {
      this.changeCircularProgressValue_0(0);
    }setState(this, App$changeBackdropIsOpen$lambda_0(newBackdropIsOpen));
  };
  function App$changeCircularProgressValue$lambda(closure$newCircularProgressValue) {
    return function () {
      return "Setting the 'circularProgressValue' state to " + closure$newCircularProgressValue;
    };
  }
  function App$changeCircularProgressValue$lambda_0(closure$newCircularProgressValue) {
    return function ($receiver) {
      $receiver.circularProgressValue = closure$newCircularProgressValue;
      return Unit;
    };
  }
  App.prototype.changeCircularProgressValue_0 = function (newCircularProgressValue) {
    logger_8.info_nq59yw$(App$changeCircularProgressValue$lambda(newCircularProgressValue));
    setState(this, App$changeCircularProgressValue$lambda_0(newCircularProgressValue));
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
    logger_8.info_nq59yw$(App$changeUserIsLogged$lambda(newUserIsLogged));
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
    logger_8.info_nq59yw$(App$changeUserHasProfile$lambda(newUserHasProfile));
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
    logger_8.info_nq59yw$(App$changeUsername$lambda(newUsername));
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
    logger_8.info_nq59yw$(App$changeUserIsAdmin$lambda(newUserIsAdmin));
    setState(this, App$changeUserIsAdmin$lambda_0(newUserIsAdmin));
  };
  function App$changeCoreType$lambda(closure$newCoreType) {
    return function () {
      return "Changing the 'coreType' state to " + closure$newCoreType;
    };
  }
  function App$changeCoreType$lambda_0(closure$newCoreType, this$App) {
    return function ($receiver) {
      $receiver.coreType = closure$newCoreType;
      $receiver.userHasProfile = false;
      $receiver.userIsAdmin = false;
      $receiver.availableRMImplementations = this$App.getRMImplementations_0(closure$newCoreType);
      $receiver.availableMMImplementations = this$App.getMMImplementations_0(closure$newCoreType);
      $receiver.availableDMImplementations = this$App.getDMImplementations_0(closure$newCoreType);
      if (!$receiver.availableRMImplementations.contains_11rb$($receiver.rmType.toString())) {
        $receiver.rmType = RMType$valueOf(first($receiver.availableRMImplementations));
      }if (!$receiver.availableMMImplementations.contains_11rb$($receiver.mmType.toString())) {
        $receiver.mmType = MMType$valueOf(first($receiver.availableMMImplementations));
      }if (!$receiver.availableDMImplementations.contains_11rb$($receiver.dmType.toString())) {
        $receiver.dmType = DMType$valueOf(first($receiver.availableDMImplementations));
      }return Unit;
    };
  }
  App.prototype.changeCoreType_0 = function (newCoreType) {
    logger_8.info_nq59yw$(App$changeCoreType$lambda(newCoreType));
    setState(this, App$changeCoreType$lambda_0(newCoreType, this));
  };
  function App$changeAlgorithm$lambda(closure$newAlgorithm) {
    return function () {
      return "Changing the 'algorithm' state to " + closure$newAlgorithm;
    };
  }
  function App$changeAlgorithm$lambda_0(closure$newAlgorithm) {
    return function ($receiver) {
      $receiver.algorithm = closure$newAlgorithm;
      return Unit;
    };
  }
  App.prototype.changeAlgorithm_0 = function (newAlgorithm) {
    logger_8.info_nq59yw$(App$changeAlgorithm$lambda(newAlgorithm));
    setState(this, App$changeAlgorithm$lambda_0(newAlgorithm));
  };
  function App$changeMetric$lambda(closure$newMetric) {
    return function () {
      return "Changing the 'metric' state to " + closure$newMetric;
    };
  }
  function App$changeMetric$lambda_0(closure$newMetric) {
    return function ($receiver) {
      $receiver.metric = closure$newMetric;
      return Unit;
    };
  }
  App.prototype.changeMetric_0 = function (newMetric) {
    logger_8.info_nq59yw$(App$changeMetric$lambda(newMetric));
    setState(this, App$changeMetric$lambda_0(newMetric));
  };
  function App$changeScenario$lambda(closure$newScenario) {
    return function () {
      return "Changing the 'scenario' state to " + closure$newScenario;
    };
  }
  function App$changeScenario$lambda_0(closure$newScenario) {
    return function ($receiver) {
      $receiver.scenario = closure$newScenario;
      return Unit;
    };
  }
  App.prototype.changeScenario_0 = function (newScenario) {
    logger_8.info_nq59yw$(App$changeScenario$lambda(newScenario));
    setState(this, App$changeScenario$lambda_0(newScenario));
  };
  function App$changeRMType$lambda(closure$newRMType) {
    return function () {
      return "Setting the 'rmType' state to " + closure$newRMType;
    };
  }
  function App$changeRMType$lambda_0(closure$newRMType) {
    return function ($receiver) {
      $receiver.rmType = closure$newRMType;
      return Unit;
    };
  }
  App.prototype.changeRMType_0 = function (newRMType) {
    logger_8.info_nq59yw$(App$changeRMType$lambda(newRMType));
    setState(this, App$changeRMType$lambda_0(newRMType));
  };
  function App$changeMMType$lambda(closure$newMMType) {
    return function () {
      return "Setting the 'mmType' state to " + closure$newMMType;
    };
  }
  function App$changeMMType$lambda_0(closure$newMMType) {
    return function ($receiver) {
      $receiver.mmType = closure$newMMType;
      return Unit;
    };
  }
  App.prototype.changeMMType_0 = function (newMMType) {
    logger_8.info_nq59yw$(App$changeMMType$lambda(newMMType));
    setState(this, App$changeMMType$lambda_0(newMMType));
  };
  function App$changeDMType$lambda(closure$newDMType) {
    return function () {
      return "Setting the 'dmType' state to " + closure$newDMType;
    };
  }
  function App$changeDMType$lambda_0(closure$newDMType) {
    return function ($receiver) {
      $receiver.dmType = closure$newDMType;
      return Unit;
    };
  }
  App.prototype.changeDMType_0 = function (newDMType) {
    logger_8.info_nq59yw$(App$changeDMType$lambda(newDMType));
    setState(this, App$changeDMType$lambda_0(newDMType));
  };
  function App$toggleSidebarIsCollapsed$lambda(closure$collapsed) {
    return function () {
      return "Setting the 'sidebarIsCollapsed' state to " + closure$collapsed;
    };
  }
  function App$toggleSidebarIsCollapsed$lambda_0(closure$collapsed) {
    return function ($receiver) {
      $receiver.sidebarIsCollapsed = closure$collapsed;
      return Unit;
    };
  }
  App.prototype.toggleSidebarIsCollapsed_0 = function () {
    var collapsed = !this.state.sidebarIsCollapsed;
    logger_8.info_nq59yw$(App$toggleSidebarIsCollapsed$lambda(collapsed));
    setState(this, App$toggleSidebarIsCollapsed$lambda_0(collapsed));
  };
  App.prototype.getDMImplementations_0 = function (coreType) {
    switch (coreType.name) {
      case 'RBAC_CLOUD':
        return listOf_0(DMType$CRYPTOAC_getInstance().toString());
      case 'RBAC_MQTT':
        return listOf_0(DMType$MOSQUITTO_getInstance().toString());
      case 'RBAC_MOCK':
        return emptyList();
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  App.prototype.getMMImplementations_0 = function (coreType) {
    switch (coreType.name) {
      case 'RBAC_CLOUD':
        return listOf([MMType$MYSQL_getInstance().toString(), MMType$REDIS_getInstance().toString()]);
      case 'RBAC_MQTT':
        return listOf([MMType$MYSQL_getInstance().toString(), MMType$REDIS_getInstance().toString()]);
      case 'RBAC_MOCK':
        return emptyList();
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  App.prototype.getRMImplementations_0 = function (coreType) {
    switch (coreType.name) {
      case 'RBAC_CLOUD':
        return listOf_0(RMType$CRYPTOAC_getInstance().toString());
      case 'RBAC_MQTT':
        return listOf_0(RMType$NONE_getInstance().toString());
      case 'RBAC_MOCK':
        return emptyList();
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function UIType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UIType_initFields() {
    UIType_initFields = function () {
    };
    UIType$Modules_instance = new UIType('Modules', 0);
    UIType$Dashboard_instance = new UIType('Dashboard', 1);
    UIType$TradeOffBoard_instance = new UIType('TradeOffBoard', 2);
  }
  var UIType$Modules_instance;
  function UIType$Modules_getInstance() {
    UIType_initFields();
    return UIType$Modules_instance;
  }
  var UIType$Dashboard_instance;
  function UIType$Dashboard_getInstance() {
    UIType_initFields();
    return UIType$Dashboard_instance;
  }
  var UIType$TradeOffBoard_instance;
  function UIType$TradeOffBoard_getInstance() {
    UIType_initFields();
    return UIType$TradeOffBoard_instance;
  }
  UIType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UIType',
    interfaces: [Enum]
  };
  function UIType$values() {
    return [UIType$Modules_getInstance(), UIType$Dashboard_getInstance(), UIType$TradeOffBoard_getInstance()];
  }
  UIType.values = UIType$values;
  function UIType$valueOf(name) {
    switch (name) {
      case 'Modules':
        return UIType$Modules_getInstance();
      case 'Dashboard':
        return UIType$Dashboard_getInstance();
      case 'TradeOffBoard':
        return UIType$TradeOffBoard_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.UIType.' + name);
    }
  }
  UIType.valueOf_61zpoe$ = UIType$valueOf;
  function styledDiv$lambda_0(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function submitForm$lambda($receiver) {
    return Unit;
  }
  var submitForm$lambda_0 = wrapFunction(function () {
    var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
    var OutgoingContent = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var reflect = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass_0 = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$encodeInQuery, closure$formParameters, closure$block) {
      return function ($receiver) {
        if (closure$encodeInQuery) {
          $receiver.method = HttpMethod_0.Companion.Get;
          $receiver.url.parameters.appendAll_hb0ubp$(closure$formParameters);
        } else {
          $receiver.method = HttpMethod_0.Companion.Post;
          var body = new FormDataContent(closure$formParameters);
          if (body == null) {
            $receiver.body = utils.EmptyContent;
            $receiver.bodyType = null;
          } else if (Kotlin.isType(body, OutgoingContent)) {
            $receiver.body = body;
            $receiver.bodyType = null;
          } else {
            $receiver.body = body;
            var tmp$ = reflect.JsType;
            var tmp$_0 = getKClass_0(FormDataContent);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(FormDataContent), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
          }
        }
        closure$block($receiver);
        return Unit;
      };
    };
  });
  function logger$lambda_9() {
    return Unit;
  }
  var logger_9;
  function Login() {
    RComponent_init(this);
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Login) {
    return function (method, endpoint, values, f) {
      this$Login.submitLogin_0(method, endpoint, values);
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Login, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var this$Login_0 = this$Login;
      $receiver_0.attrs;
      $receiver.handleChangeBackdropIsOpen = this$Login_0.props.handleChangeBackdropIsOpen;
      $receiver.handleDisplayCryptoACAlert = this$Login_0.props.handleDisplayAlert;
      $receiver.submitButtonText = 'Login';
      $receiver.method = HttpMethod.Companion.Post;
      $receiver.endpoint = API_getInstance().LOGIN;
      $receiver.handleSubmitEvent = Login$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Login_0);
      $receiver.cryptoACFormFields = listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance(), void 0, void 0, 'darkTextField')));
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda(this$Login) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
      var this$Login_0 = this$Login;
      var $receiver_1 = $receiver_0.css;
      set_marginLeft($receiver_1, get_pct(15));
      set_marginRight($receiver_1, get_pct(15));
      $receiver_0.child_30b5ua$(cryptoACForm(Login$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Login_0, $receiver_0)));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda(this$Login) {
    return function ($receiver) {
      $receiver.titleStyle = Themes_getInstance().largePlainPaperTitleStyle;
      $receiver.titleText = 'Login to CryptoAC';
      $receiver.titleVariant = 'h5';
      $receiver.setDivider = true;
      $receiver.dividerWidth = get_pct(80);
      $receiver.child = ensureNotNull(createElement(Login$render$lambda$lambda$lambda$lambda(this$Login)));
      return Unit;
    };
  }
  Login.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
    var $receiver_1 = $receiver_0.css;
    set_height($receiver_1, get_pct(100));
    set_width($receiver_1, get_pct(100));
    set_backgroundImage($receiver_1, new Image('url(fbk_background.jpg)'));
    set_backgroundPosition($receiver_1, 'center');
    set_backgroundRepeat($receiver_1, BackgroundRepeat.noRepeat);
    set_backgroundSize($receiver_1, 'cover');
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
    var $receiver_2 = $receiver_0_0.css;
    set_position($receiver_2, Position.fixed);
    set_top($receiver_2, get_pct(50));
    set_left($receiver_2, get_pct(50));
    var $receiver_3 = new Transforms();
    translate($receiver_3, get_pct(-50), get_pct(-50));
    set_transform($receiver_2, $receiver_3);
    set_textAlign($receiver_2, TextAlign.center);
    set_width($receiver_2, get_pct(35));
    set_height($receiver_2, get_pct(30));
    $receiver_0_0.child_30b5ua$(cryptoACPaper(Login$render$lambda$lambda$lambda(this)));
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    $receiver.child_30b5ua$($receiver_0.create());
  };
  function Login$submitLogin$lambda(closure$method, closure$endpoint) {
    return function () {
      return 'Submitting CryptoAC login form, method ' + closure$method + ', endpoint ' + closure$endpoint;
    };
  }
  function Login$submitLogin$lambda$lambda(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Login$submitLogin$lambda$lambda_0(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Login$submitLogin$lambda$lambda_1(closure$e) {
    return function () {
      return 'Error during login (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Login$submitLogin$lambda(this$Login_0, closure$values_0, closure$endpoint_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 7;
    this.local$this$Login = this$Login_0;
    this.local$closure$values = closure$values_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$response = void 0;
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
            this.exceptionState_0 = 4;
            var tmp$ = this.local$this$Login.props.httpClient;
            var $receiver = ParametersBuilder();
            var tmp$_0;
            tmp$_0 = this.local$closure$values.entries.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              $receiver.append_puj7f4$(element.key, element.value);
            }

            var formParameters = $receiver.build();
            var $receiver_1 = new HttpRequestBuilder_init();
            if (false) {
              $receiver_1.method = HttpMethod_0.Companion.Get;
              $receiver_1.url.parameters.appendAll_hb0ubp$(formParameters);
            } else {
              $receiver_1.method = HttpMethod_0.Companion.Post;
              var body_0 = new FormDataContent(formParameters);
              if (body_0 == null) {
                $receiver_1.body = utils.EmptyContent;
                $receiver_1.bodyType = null;
              } else if (Kotlin.isType(body_0, OutgoingContent)) {
                $receiver_1.body = body_0;
                $receiver_1.bodyType = null;
              } else {
                $receiver_1.body = body_0;
                var tmp$_1 = reflect.JsType;
                var tmp$_0_0 = getKClass(FormDataContent);
                var tryGetType$result_0;
                tryGetType$break: do {
                  try {
                    tryGetType$result_0 = createKType(getKClass(FormDataContent), [], false);
                  } catch (cause_0) {
                    if (Kotlin.isType(cause_0, Throwable)) {
                      tryGetType$result_0 = null;
                      break tryGetType$break;
                    } else
                      throw cause_0;
                  }
                }
                 while (false);
                $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
              }
            }

            url($receiver_1, this.local$closure$endpoint);
            this.state_0 = 1;
            this.result_0 = (new HttpStatement_init($receiver_1, tmp$)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.result_0;
            this.local$response = this.result_0;
            var tmp$_2;
            var tmp$_3 = this.local$response.call;
            var tmp$_4 = reflect.JsType;
            var tmp$_0_1 = getKClass(OutcomeCode);
            var tryGetType$result_0_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0_0 = createKType(getKClass(OutcomeCode), [], false);
              } catch (cause_0_0) {
                if (Kotlin.isType(cause_0_0, Throwable)) {
                  tryGetType$result_0_0 = null;
                  break tryGetType$break;
                } else
                  throw cause_0_0;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_3.body_qi9ur9$(typeInfoImpl(tmp$_4, tmp$_0_1, tryGetType$result_0_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_2 = this.result_0, OutcomeCode) ? tmp$_2 : throwCCE();
            var code = this.result_0;
            var status = this.local$response.status;
            if (status != null ? status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_9.info_nq59yw$(Login$submitLogin$lambda$lambda(status, code));
              this.local$this$Login.props.handleChangeBackdropIsOpen(false);
              this.local$this$Login.props.handleChangeUserIsLogged(true);
              this.local$this$Login.props.handleChangeUsername(ensureNotNull(this.local$closure$values.get_11rb$(SERVER_getInstance().USERNAME)));
              return this.local$this$Login.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance()), Unit;
            } else {
              logger_9.warn_nq59yw$(Login$submitLogin$lambda$lambda_0(status, code));
              this.local$this$Login.props.handleChangeBackdropIsOpen(false);
              this.local$this$Login.props.handleChangeUserIsLogged(false);
              this.local$this$Login.props.handleChangeUsername(null);
              return this.local$this$Login.props.handleDisplayAlert(code, CryptoACAlertSeverity$ERROR_getInstance()), Unit;
            }

          case 3:
            this.exceptionState_0 = 7;
            this.state_0 = 6;
            continue;
          case 4:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              this.local$this$Login.props.handleChangeBackdropIsOpen(false);
              this.local$this$Login.props.handleChangeUserIsLogged(false);
              this.local$this$Login.props.handleChangeUsername(null);
              logger_9.error_nq59yw$(Login$submitLogin$lambda$lambda_1(e));
              console.log(e);
              return this.local$this$Login.props.handleDisplayAlert(OutcomeCode$CODE_049_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
            } else {
              throw e;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            return;
          case 7:
            throw this.exception_0;
          default:this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 7) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Login$submitLogin$lambda_0(this$Login_0, closure$values_0, closure$endpoint_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Login$submitLogin$lambda(this$Login_0, closure$values_0, closure$endpoint_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Login.prototype.submitLogin_0 = function (method, endpoint, values) {
    logger_9.info_nq59yw$(Login$submitLogin$lambda(method, endpoint));
    this.props.handleChangeBackdropIsOpen(true);
    launch(MainScope(), void 0, void 0, Login$submitLogin$lambda_0(this, values, endpoint));
  };
  Login.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Login',
    interfaces: [RComponent]
  };
  function login$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function login$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Login), login$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function login(handler) {
    return ensureNotNull(createElement(login$lambda(handler)));
  }
  var baseURL;
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_up9nw1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = mu.KotlinLoggingConfiguration;
    tmp$ = development;
    if (tmp$ === true)
      tmp$_0 = KotlinLoggingLevel.DEBUG;
    else if (tmp$ === false)
      tmp$_0 = KotlinLoggingLevel.INFO;
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    tmp$_1.LOG_LEVEL = tmp$_0;
    require('prosidebar.scss');
    render(ensureNotNull(document.getElementById('root')), void 0, main$lambda);
  }
  var enumContains = defineInlineFunction('CryptoAC.eu.fbk.st.cryptoac.view.enumContains_a9gw98$', wrapFunction(function () {
    var equals = Kotlin.equals;
    return function (T_0, isT, name) {
      var $receiver = T_0.values();
      var any$result;
      any$break: do {
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
          var element = $receiver[tmp$];
          if (equals(element.name, name)) {
            any$result = true;
            break any$break;
          }}
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }));
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.components.custom.CryptoACAlertSeverity.' + name);
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
      $receiver.attrs_37755u$(CryptoACAlert$render$lambda$lambda$lambda_0(this$CryptoACAlert));
      $receiver.unaryPlus_pdl1vz$(this$CryptoACAlert.props.message);
      return Unit;
    };
  }
  function CryptoACAlert$render$lambda(this$CryptoACAlert) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACAlert$render$lambda$lambda(this$CryptoACAlert));
      $receiver.invoke_qk0v40$($module$_material_ui_lab.Alert, CryptoACAlert$render$lambda$lambda_0(this$CryptoACAlert));
      return Unit;
    };
  }
  CryptoACAlert.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Snackbar, CryptoACAlert$render$lambda(this));
  };
  CryptoACAlert.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACAlert',
    interfaces: [RComponent]
  };
  function cryptoACAlert$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACAlert$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACAlert), cryptoACAlert$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACAlert(handler) {
    return ensureNotNull(createElement(cryptoACAlert$lambda(handler)));
  }
  function styledSpan$lambda_0(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function CryptoACButtonAndIcon() {
    RComponent_init(this);
  }
  function CryptoACButtonAndIcon$render$lambda$lambda$lambda(this$CryptoACButtonAndIcon) {
    return function (it) {
      this$CryptoACButtonAndIcon.props.onClick(it);
      return Unit;
    };
  }
  function CryptoACButtonAndIcon$render$lambda$lambda(this$CryptoACButtonAndIcon) {
    return function ($receiver) {
      $receiver.variant = 'text';
      $receiver.style = JSON.parse(trimMargin('{' + '\n' + '                    ' + '"' + 'margin' + '"' + ': ' + '"' + '5px' + '"' + ',' + '\n' + '                    ' + (this$CryptoACButtonAndIcon.props.showText ? ' "width": "90%", ' : '') + '\n' + '                    ' + (this$CryptoACButtonAndIcon.props.highlighted ? ' "backgroundImage": "linear-gradient(to right, rgb(142, 68, 173), rgb(172, 98, 203))", ' : '') + '\n' + '                    ' + '"' + 'color' + '"' + ': ' + '"' + (this$CryptoACButtonAndIcon.props.highlighted ? 'white' : Themes_getInstance().greyColor) + '"' + '\n' + '                }'));
      $receiver.onClick = CryptoACButtonAndIcon$render$lambda$lambda$lambda(this$CryptoACButtonAndIcon);
      return Unit;
    };
  }
  function CryptoACButtonAndIcon$render$lambda(this$CryptoACButtonAndIcon) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACButtonAndIcon$render$lambda$lambda(this$CryptoACButtonAndIcon));
      $receiver.child_30b5ua$(this$CryptoACButtonAndIcon.props.icon);
      if (this$CryptoACButtonAndIcon.props.showText) {
        $receiver.unaryPlus_pdl1vz$(this$CryptoACButtonAndIcon.props.text);
        var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda_0);
        set_marginLeft($receiver_0.css, LinearDimension.Companion.auto);
        $receiver_0.unaryPlus_pdl1vz$('');
        $receiver.child_30b5ua$($receiver_0.create());
      }return Unit;
    };
  }
  CryptoACButtonAndIcon.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Button, CryptoACButtonAndIcon$render$lambda(this));
  };
  CryptoACButtonAndIcon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACButtonAndIcon',
    interfaces: [RComponent]
  };
  function cryptoACButtonAndIcon$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACButtonAndIcon$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACButtonAndIcon), cryptoACButtonAndIcon$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACButtonAndIcon(handler) {
    return ensureNotNull(createElement(cryptoACButtonAndIcon$lambda(handler)));
  }
  function CryptoACButtonAndIconData(icon, text, showText, onClick) {
    this.icon = icon;
    this.text = text;
    this.showText = showText;
    this.onClick = onClick;
  }
  CryptoACButtonAndIconData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACButtonAndIconData',
    interfaces: []
  };
  CryptoACButtonAndIconData.prototype.component1 = function () {
    return this.icon;
  };
  CryptoACButtonAndIconData.prototype.component2 = function () {
    return this.text;
  };
  CryptoACButtonAndIconData.prototype.component3 = function () {
    return this.showText;
  };
  CryptoACButtonAndIconData.prototype.component4 = function () {
    return this.onClick;
  };
  CryptoACButtonAndIconData.prototype.copy_bazxyq$ = function (icon, text, showText, onClick) {
    return new CryptoACButtonAndIconData(icon === void 0 ? this.icon : icon, text === void 0 ? this.text : text, showText === void 0 ? this.showText : showText, onClick === void 0 ? this.onClick : onClick);
  };
  CryptoACButtonAndIconData.prototype.toString = function () {
    return 'CryptoACButtonAndIconData(icon=' + Kotlin.toString(this.icon) + (', text=' + Kotlin.toString(this.text)) + (', showText=' + Kotlin.toString(this.showText)) + (', onClick=' + Kotlin.toString(this.onClick)) + ')';
  };
  CryptoACButtonAndIconData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.showText) | 0;
    result = result * 31 + Kotlin.hashCode(this.onClick) | 0;
    return result;
  };
  CryptoACButtonAndIconData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.icon, other.icon) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.showText, other.showText) && Kotlin.equals(this.onClick, other.onClick)))));
  };
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf('class', closure$classes), it);
    };
  }
  function logger$lambda_10() {
    return Unit;
  }
  var logger_10;
  function CryptoACButtonAndIconGroup() {
    RComponent_init(this);
  }
  function CryptoACButtonAndIconGroup$render$lambda$lambda$lambda$lambda(closure$index, this$CryptoACButtonAndIconGroup, closure$it) {
    return function (event) {
      this$CryptoACButtonAndIconGroup.changeSelectedButton_0(closure$index);
      closure$it.onClick(event);
      return Unit;
    };
  }
  function CryptoACButtonAndIconGroup$render$lambda$lambda$lambda(closure$it, closure$index, this$CryptoACButtonAndIconGroup) {
    return function ($receiver) {
      var tmp$;
      $receiver.icon = closure$it.icon;
      $receiver.text = closure$it.text;
      $receiver.showText = closure$it.showText;
      $receiver.onClick = CryptoACButtonAndIconGroup$render$lambda$lambda$lambda$lambda(closure$index, this$CryptoACButtonAndIconGroup, closure$it);
      if (equals(this$CryptoACButtonAndIconGroup.state.selectedButton, undefined)) {
        tmp$ = this$CryptoACButtonAndIconGroup.props.defaultSelectedButton === closure$index;
      } else {
        tmp$ = this$CryptoACButtonAndIconGroup.state.selectedButton === closure$index;
      }
      $receiver.highlighted = tmp$;
      return Unit;
    };
  }
  CryptoACButtonAndIconGroup.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_0(null));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.props.buttons.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      $receiver_0.key = item.text;
      $receiver_0.child_30b5ua$(cryptoACButtonAndIcon(CryptoACButtonAndIconGroup$render$lambda$lambda$lambda(item, index_0, this)));
    }
    $receiver.child_30b5ua$($receiver_0.create());
  };
  function CryptoACButtonAndIconGroup$changeSelectedButton$lambda(closure$newSelectedButton) {
    return function () {
      return "Setting the 'selectedButton' state to " + closure$newSelectedButton;
    };
  }
  function CryptoACButtonAndIconGroup$changeSelectedButton$lambda_0(closure$newSelectedButton) {
    return function ($receiver) {
      $receiver.selectedButton = closure$newSelectedButton;
      return Unit;
    };
  }
  CryptoACButtonAndIconGroup.prototype.changeSelectedButton_0 = function (newSelectedButton) {
    logger_10.info_nq59yw$(CryptoACButtonAndIconGroup$changeSelectedButton$lambda(newSelectedButton));
    setState(this, CryptoACButtonAndIconGroup$changeSelectedButton$lambda_0(newSelectedButton));
  };
  CryptoACButtonAndIconGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACButtonAndIconGroup',
    interfaces: [RComponent]
  };
  function cryptoACButtonAndIconGroup$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACButtonAndIconGroup$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACButtonAndIconGroup), cryptoACButtonAndIconGroup$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACButtonAndIconGroup(handler) {
    return ensureNotNull(createElement(cryptoACButtonAndIconGroup$lambda(handler)));
  }
  var divider;
  function CryptoACCheckbox() {
    RComponent_init(this);
  }
  function CryptoACCheckbox$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.changedByUser = true;
      $receiver.value = equals(this$CryptoACCheckbox.state.value, 'true' + divider + this$CryptoACCheckbox.props.label) ? 'false' + divider + this$CryptoACCheckbox.props.label : 'true' + divider + this$CryptoACCheckbox.props.label;
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACCheckbox) {
    return function (it) {
      setState(this$CryptoACCheckbox, CryptoACCheckbox$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACCheckbox));
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.value = this$CryptoACCheckbox.state.value;
      $receiver.checked = toBoolean(split(this$CryptoACCheckbox.state.value, [divider]).get_za3lpa$(0));
      $receiver.onChange = CryptoACCheckbox$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACCheckbox);
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda$lambda$lambda$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACCheckbox$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACCheckbox));
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda$lambda$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Checkbox, CryptoACCheckbox$render$lambda$lambda$lambda$lambda(this$CryptoACCheckbox));
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.control = ensureNotNull(createElement(CryptoACCheckbox$render$lambda$lambda$lambda(this$CryptoACCheckbox)));
      $receiver.label = this$CryptoACCheckbox.props.label;
      $receiver.value = this$CryptoACCheckbox.props.label;
      $receiver.labelPlacement = 'start';
      return Unit;
    };
  }
  function CryptoACCheckbox$render$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACCheckbox$render$lambda$lambda(this$CryptoACCheckbox));
      return Unit;
    };
  }
  CryptoACCheckbox.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.FormControlLabel, CryptoACCheckbox$render$lambda(this));
  };
  function CryptoACCheckbox$init$lambda(props, state) {
    if (state.justMounted || !state.changedByUser) {
      state.value = props.defaultValue + divider + props.label;
    }state.changedByUser = false;
    state.justMounted = false;
    return Unit;
  }
  CryptoACCheckbox.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.justMounted = true;
    $receiver.changedByUser = false;
    get_js(getKClass(CryptoACCheckbox)).getDerivedStateFromProps = CryptoACCheckbox$init$lambda;
  };
  CryptoACCheckbox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACCheckbox',
    interfaces: [RComponent]
  };
  function cryptoACCheckbox$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACCheckbox$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACCheckbox), cryptoACCheckbox$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACCheckbox(handler) {
    return ensureNotNull(createElement(cryptoACCheckbox$lambda(handler)));
  }
  function styledDiv$lambda_1(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function CryptoACDivider() {
    RComponent_init(this);
  }
  CryptoACDivider.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
    var $receiver_1 = $receiver_0.css;
    set_width($receiver_1, this.props.width);
    set_marginTop($receiver_1, this.props.marginTop);
    set_marginBottom($receiver_1, this.props.marginBottom);
    set_marginLeft($receiver_1, LinearDimension.Companion.auto);
    set_marginRight($receiver_1, LinearDimension.Companion.auto);
    set_borderBottom($receiver_1, '1px solid rgba(173, 173, 173, 0.2)');
    $receiver.child_30b5ua$($receiver_0.create());
  };
  CryptoACDivider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACDivider',
    interfaces: [RComponent]
  };
  function cryptoACDivider$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACDivider$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACDivider), cryptoACDivider$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACDivider(handler) {
    return ensureNotNull(createElement(cryptoACDivider$lambda(handler)));
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_1(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function styledDiv$lambda_2(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function form$lambda(closure$action, closure$encType, closure$method, closure$classes) {
    return function (it) {
      return new FORM_init(attributesMapOf_1(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null, 'class', closure$classes]), it);
    };
  }
  function logger$lambda_11() {
    return Unit;
  }
  var logger_11;
  function CryptoACForm() {
    RComponent_init(this);
  }
  function CryptoACForm$render$lambda$lambda$lambda(this$CryptoACForm) {
    return function (event) {
      this$CryptoACForm.handleCryptoACFormSubmit_0(event, this$CryptoACForm.props.handleSubmitEvent);
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda_0($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda(it) {
    return it;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$currentSM) {
    return function ($receiver) {
      $receiver.item = true;
      $receiver.xs = 12;
      $receiver.sm = closure$currentSM;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField, closure$newValue) {
    return function () {
      return 'chosen new value for radio group ' + closure$formField.name + ': ' + closure$newValue;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField) {
    return function (event) {
      var tmp$;
      var newValue = (Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      logger_11.info_nq59yw$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField, newValue));
      return true;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField, this$CryptoACForm) {
    return function ($receiver) {
      $receiver.defaultValue = ensureNotNull(closure$formField.defaultValue);
      $receiver.name = closure$formField.name;
      $receiver.row = true;
      var $receiver_0 = ensureNotNull(closure$formField.options);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
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
      $receiver.onChange = CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField);
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField) {
    return function ($receiver) {
      if (closure$formField.className != null) {
        $receiver.className = closure$formField.className;
      }$receiver.variant = 'standard';
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField) {
    return function ($receiver) {
      $receiver.name = closure$formField.name;
      $receiver.id = closure$formField.label;
      $receiver.label = closure$formField.label;
      $receiver.labelId = closure$formField.label + '-label';
      $receiver.autoWidth = true;
      var $receiver_0 = Scenario$values();
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(item.toString());
      }
      $receiver.options = destination;
      $receiver.defaultValue = ensureNotNull(closure$formField.defaultValue);
      $receiver.options = ensureNotNull(closure$formField.options);
      $receiver.onChange = CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField));
      $receiver.child_30b5ua$(cryptoACSelect(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField)));
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField, this$CryptoACForm) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      if (closure$formField.className != null) {
        $receiver.className = closure$formField.className;
      }var $receiver_0 = closure$formField.defaultValue;
      if ($receiver_0 == null || isBlank($receiver_0) || equals(closure$formField.defaultValue, 'null')) {
        tmp$ = '';
      } else {
        tmp$ = closure$formField.defaultValue;
      }
      $receiver.defaultValue = tmp$;
      $receiver.name = closure$formField.name;
      $receiver.label = closure$formField.label;
      $receiver.type = closure$formField.type.toString();
      $receiver.variant = 'standard';
      if ((tmp$_0 = this$CryptoACForm.props.method) != null ? tmp$_0.equals(HttpMethod.Companion.Delete) : null) {
        tmp$_1 = 'secondary';
      } else {
        tmp$_1 = 'primary';
      }
      $receiver.color = tmp$_1;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$formField, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var closure$formField_0 = closure$formField;
      $receiver_0.attrs;
      var tmp$;
      var $receiver_1 = closure$formField_0.defaultValue;
      if ($receiver_1 == null || isBlank($receiver_1) || equals(closure$formField_0.defaultValue, 'null')) {
        tmp$ = 'false';
      } else {
        tmp$ = closure$formField_0.defaultValue;
      }
      $receiver.defaultValue = tmp$;
      $receiver.label = closure$formField_0.name;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.color = 'primary';
    $receiver.component = 'label';
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaCloudUploadAlt, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
      $receiver.child_30b5ua$(ensureNotNull(createElement(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4)));
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
      var closure$formField_0 = closure$formField;
      var $receiver_1 = $receiver_0.attrs;
      $receiver_1.name = closure$formField_0.name;
      $receiver_1.type = InputType.file;
      set_hidden($receiver_1, true);
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda(closure$currentSM, closure$formField, this$CryptoACForm) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$currentSM));
      switch (closure$formField.type.name) {
        case 'radio':
          $receiver.child_30b5ua$(cryptoACRadioGroup(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField, this$CryptoACForm)));
          break;
        case 'select':
          var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_2);
          var closure$formField_0 = closure$formField;
          var $receiver_1 = $receiver_0.css;
          set_marginBottom($receiver_1, get_px(10));
          set_marginTop($receiver_1, get_px(10));
          set_marginRight($receiver_1, get_px(20));
          $receiver_0.invoke_qk0v40$($module$_material_ui_core.FormControl, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField_0));
          $receiver.child_30b5ua$($receiver_0.create());
          break;
        case 'text':
        case 'password':
        case 'number':
          var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_2);
          var closure$formField_1 = closure$formField;
          var this$CryptoACForm_0 = this$CryptoACForm;
          var $receiver_2 = $receiver_0_0.css;
          set_marginBottom($receiver_2, get_px(10));
          set_marginTop($receiver_2, get_px(10));
          set_marginRight($receiver_2, get_px(20));
          $receiver_0_0.child_30b5ua$(cryptoACTextField(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField_1, this$CryptoACForm_0)));
          $receiver.child_30b5ua$($receiver_0_0.create());
          break;
        case 'checkBox':
          var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_2);
          var closure$formField_2 = closure$formField;
          var $receiver_3 = $receiver_0_1.css;
          set_marginBottom($receiver_3, get_px(10));
          set_marginTop($receiver_3, get_px(10));
          set_marginRight($receiver_3, get_px(20));
          $receiver_0_1.child_30b5ua$(cryptoACCheckbox(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$formField_2, $receiver_0_1)));
          $receiver.child_30b5ua$($receiver_0_1.create());
          break;
        case 'file':
          $receiver.invoke_qk0v40$($module$_material_ui_core.IconButton, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField));
          break;
        default:throw Exception_init('TODO');
      }
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 12;
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACForm) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.type = InputType$submit_getInstance().toString();
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
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACForm));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_2);
      var this$CryptoACForm_0 = this$CryptoACForm;
      set_marginRight($receiver_0.css, get_px(5));
      $receiver_0.unaryPlus_pdl1vz$(this$CryptoACForm_0.props.submitButtonText.toUpperCase());
      $receiver.child_30b5ua$($receiver_0.create());
      $receiver.invoke_qk0v40$($module$react_icons_fa.FaPaperPlane, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda_1(this$CryptoACForm) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda_0);
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_2);
      var this$CryptoACForm_0 = this$CryptoACForm;
      var $receiver_1 = $receiver_0.css;
      set_textAlign($receiver_1, TextAlign.center);
      set_textAlign($receiver_1, TextAlign.center);
      set_alignItems($receiver_1, Align.center);
      set_alignContent($receiver_1, Align.center);
      set_marginTop($receiver_1, get_px(15));
      set_marginRight($receiver_1, get_px(15));
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Button, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACForm_0));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda(this$CryptoACForm) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda_0);
      var $receiver_0 = this$CryptoACForm.props.cryptoACFormFields;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$CryptoACForm_0 = this$CryptoACForm;
        var destination = ArrayList_init_0(collectionSizeOrDefault(element, 10));
        var tmp$_0;
        tmp$_0 = element.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination.add_11rb$(item.name + item.defaultValue);
        }
        $receiver.key = joinToString(destination, void 0, void 0, void 0, void 0, void 0, CryptoACForm$render$lambda$lambda$lambda$lambda);
        var currentSM = 12 / element.size | 0;
        var tmp$_1;
        tmp$_1 = element.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          $receiver.key = element_0.name + element_0.defaultValue;
          $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda(currentSM, element_0, this$CryptoACForm_0));
        }
      }
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CryptoACForm$render$lambda$lambda$lambda_1(this$CryptoACForm));
      return Unit;
    };
  }
  CryptoACForm.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(form$lambda(null, null, null, null));
    var $receiver_1 = $receiver_0.attrs;
    $receiver_1.action = this.props.endpoint;
    set_onSubmitFunction($receiver_1, CryptoACForm$render$lambda$lambda$lambda(this));
    $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, CryptoACForm$render$lambda$lambda(this));
    $receiver.child_30b5ua$($receiver_0.create());
  };
  function CryptoACForm$handleCryptoACFormSubmit$lambda() {
    return 'Received form submit request, retrieving values';
  }
  function CryptoACForm$handleCryptoACFormSubmit$lambda_0(closure$values, closure$files) {
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
  CryptoACForm.prototype.handleCryptoACFormSubmit_0 = function (e, submitAndHandleCallback) {
    var tmp$, tmp$_0;
    e.preventDefault();
    logger_11.info_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda);
    var values = this.getValuesFromInputFields_0(Kotlin.isType(tmp$ = e.target, HTMLFormElement) ? tmp$ : throwCCE());
    var files = this.getFilesFromInputFields_0(Kotlin.isType(tmp$_0 = e.target, HTMLFormElement) ? tmp$_0 : throwCCE());
    logger_11.debug_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda_0(values, files));
    var tmp$_1;
    tmp$_1 = values.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      logger_11.debug_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda$lambda(element));
    }
    var tmp$_2;
    tmp$_2 = files.entries.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      logger_11.debug_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda$lambda_0(element_0));
    }
    var collectedValues = values.size + files.size | 0;
    var expectedValues = {v: 0};
    var tmp$_3;
    tmp$_3 = this.props.cryptoACFormFields.iterator();
    while (tmp$_3.hasNext()) {
      var element_1 = tmp$_3.next();
      expectedValues.v = expectedValues.v + element_1.size | 0;
    }
    if (expectedValues.v === collectedValues) {
      launch(MainScope(), void 0, void 0, CryptoACForm$handleCryptoACFormSubmit$lambda_1(this, submitAndHandleCallback, values, files));
    } else {
      logger_11.warn_nq59yw$(CryptoACForm$handleCryptoACFormSubmit$lambda_2(collectedValues, expectedValues));
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
        if (equals(tmp$_0, InputType$password_getInstance().toString())) {
          var key = $receiver.name;
          var value = $receiver.value;
          values.put_xwzc9p$(key, value);
        } else if (equals(tmp$_0, InputType$text_getInstance().toString())) {
          var key_0 = $receiver.name;
          var value_0 = $receiver.value;
          values.put_xwzc9p$(key_0, value_0);
        } else if (equals(tmp$_0, InputType$number_getInstance().toString())) {
          var key_1 = $receiver.name;
          var value_1 = $receiver.value;
          values.put_xwzc9p$(key_1, value_1);
        } else if (equals(tmp$_0, InputType$radio_getInstance().toString())) {
          if ($receiver.checked) {
            var key_2 = $receiver.name;
            var value_2 = $receiver.value;
            values.put_xwzc9p$(key_2, value_2);
          }} else {
          if (equals(tmp$_0, InputType$checkBox_getInstance().toString().toLowerCase())) {
            var key_3 = split($receiver.value, [divider]).get_za3lpa$(1);
            var value_3 = split($receiver.value, [divider]).get_za3lpa$(0);
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
      if (Kotlin.isType($receiver, HTMLInputElement) && equals($receiver.type, InputType$file_getInstance().toString())) {
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
  function cryptoACForm$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACForm$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACForm), cryptoACForm$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACForm(handler) {
    return ensureNotNull(createElement(cryptoACForm$lambda(handler)));
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
  CryptoACFormData.prototype.copy_l2fmsl$ = function (key, submitButtonText, icon, endpoint, method, coreType, cryptoACFormFields, submit, divider) {
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
  function CryptoACPaper() {
    RComponent_init(this);
  }
  function CryptoACPaper$render$lambda$lambda$lambda(this$CryptoACPaper) {
    return function ($receiver) {
      $receiver.style = this$CryptoACPaper.props.titleStyle;
      $receiver.variant = this$CryptoACPaper.props.titleVariant;
      $receiver.id = 'login';
      $receiver.component = 'div';
      return Unit;
    };
  }
  function CryptoACPaper$render$lambda$lambda(this$CryptoACPaper) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACPaper$render$lambda$lambda$lambda(this$CryptoACPaper));
      $receiver.unaryPlus_pdl1vz$(this$CryptoACPaper.props.titleText);
      return Unit;
    };
  }
  function CryptoACPaper$render$lambda$lambda_0(this$CryptoACPaper) {
    return function ($receiver) {
      $receiver.width = this$CryptoACPaper.props.dividerWidth;
      $receiver.marginTop = get_px(0);
      $receiver.marginBottom = get_px(0);
      return Unit;
    };
  }
  function CryptoACPaper$render$lambda(this$CryptoACPaper) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Typography, CryptoACPaper$render$lambda$lambda(this$CryptoACPaper));
      if (this$CryptoACPaper.props.setDivider) {
        $receiver.child_30b5ua$(cryptoACDivider(CryptoACPaper$render$lambda$lambda_0(this$CryptoACPaper)));
      }$receiver.child_30b5ua$(this$CryptoACPaper.props.child);
      return Unit;
    };
  }
  CryptoACPaper.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Paper, CryptoACPaper$render$lambda(this));
  };
  CryptoACPaper.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.collapsed = false;
  };
  CryptoACPaper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACPaper',
    interfaces: [RComponent]
  };
  function cryptoACPaper$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACPaper$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACPaper), cryptoACPaper$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACPaper(handler) {
    return ensureNotNull(createElement(cryptoACPaper$lambda(handler)));
  }
  function styledDiv$lambda_3(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function CryptoACRadioGroup() {
    RComponent_init(this);
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda(closure$event) {
    return function ($receiver) {
      var tmp$;
      $receiver.changedByUser = true;
      $receiver.value = (Kotlin.isType(tmp$ = closure$event.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda(this$CryptoACRadioGroup) {
    return function (event) {
      var changeValue = false;
      if (!equals(this$CryptoACRadioGroup.props.onChange, undefined)) {
        changeValue = this$CryptoACRadioGroup.props.onChange(event);
      }if (changeValue) {
        setState(this$CryptoACRadioGroup, CryptoACRadioGroup$render$lambda$lambda$lambda$lambda(event));
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
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it) {
    return function ($receiver) {
      $receiver.disabled = this$CryptoACRadioGroup.props.disabled;
      $receiver.color = closure$it.color;
      $receiver.checked = equals(this$CryptoACRadioGroup.state.value, closure$it.name);
      $receiver.size = 'small';
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Radio, CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda(closure$it, this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.label = closure$it.label;
      $receiver.value = closure$it.name;
      $receiver.control = ensureNotNull(createElement(CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it)));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda_0(closure$it, this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda(closure$it, this$CryptoACRadioGroup));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda(this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACRadioGroup$render$lambda$lambda(this$CryptoACRadioGroup));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_3);
      var this$CryptoACRadioGroup_0 = this$CryptoACRadioGroup;
      var $receiver_1 = $receiver_0.css;
      set_display($receiver_1, Display.block);
      set_width($receiver_1, get_pct(100));
      var tmp$;
      tmp$ = this$CryptoACRadioGroup_0.props.options.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver_0.invoke_qk0v40$($module$_material_ui_core.FormControlLabel, CryptoACRadioGroup$render$lambda$lambda$lambda$lambda_0(element, this$CryptoACRadioGroup_0));
      }
      if (this$CryptoACRadioGroup_0.props.options.isEmpty()) {
        $receiver_0.unaryPlus_pdl1vz$('No option available');
      }$receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  CryptoACRadioGroup.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.RadioGroup, CryptoACRadioGroup$render$lambda(this));
  };
  function CryptoACRadioGroup$init$lambda(props, state) {
    if (state.justMounted || !state.changedByUser) {
      state.value = props.defaultValue;
    }state.changedByUser = false;
    state.justMounted = false;
    return Unit;
  }
  CryptoACRadioGroup.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.justMounted = true;
    $receiver.changedByUser = false;
    get_js(getKClass(CryptoACRadioGroup)).getDerivedStateFromProps = CryptoACRadioGroup$init$lambda;
  };
  CryptoACRadioGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACRadioGroup',
    interfaces: [RComponent]
  };
  function cryptoACRadioGroup$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACRadioGroup$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACRadioGroup), cryptoACRadioGroup$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACRadioGroup(handler) {
    return ensureNotNull(createElement(cryptoACRadioGroup$lambda(handler)));
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
  function styledP$lambda(it) {
    return new P_init(html.emptyMap, it);
  }
  function styledDiv$lambda_4(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function CryptoACScore() {
    RComponent_init(this);
  }
  function CryptoACScore$render$lambda$lambda$lambda(this$CryptoACScore) {
    return function ($receiver) {
      $receiver.sx = JSON.parse(trimMargin('{' + '\n' + '                        ' + '"' + 'padding' + '"' + ':' + '"' + '0 0 0 0' + '"' + ',' + '\n' + '                        ' + '"' + 'height' + '"' + ':' + '"' + '5px' + '"' + ',' + '\n' + '                        ' + '"' + 'width' + '"' + ':' + '"' + this$CryptoACScore.getWidth_0(true) + '"' + ',' + '\n' + '                        ' + '"' + 'float' + '"' + ':' + '"' + 'left' + '"' + ',' + '\n' + '                        ' + '"' + 'span' + '"' + ':2,' + '\n' + '                        ' + '"' + 'background-color' + '"' + ':' + '"' + this$CryptoACScore.getColor_0() + '"' + ',' + '\n' + '                        ' + '"' + 'border-radius' + '"' + ':' + '"' + '25px 0 0 25px' + '"' + '\n' + '                    }'));
      return Unit;
    };
  }
  function CryptoACScore$render$lambda$lambda(this$CryptoACScore) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACScore$render$lambda$lambda$lambda(this$CryptoACScore));
      return Unit;
    };
  }
  function CryptoACScore$render$lambda$lambda$lambda_0(this$CryptoACScore) {
    return function ($receiver) {
      $receiver.sx = JSON.parse(trimMargin('{' + '\n' + '                        ' + '"' + 'padding' + '"' + ':' + '"' + '0 0 0 0' + '"' + ',' + '\n' + '                        ' + '"' + 'height' + '"' + ':' + '"' + '5px' + '"' + ',' + '\n' + '                        ' + '"' + 'width' + '"' + ':' + '"' + this$CryptoACScore.getWidth_0(false) + '"' + ',' + '\n' + '                        ' + '"' + 'float' + '"' + ':' + '"' + 'left' + '"' + ',' + '\n' + '                        ' + '"' + 'span' + '"' + ':2,' + '\n' + '                        ' + '"' + 'background-color' + '"' + ':' + '"' + 'black' + '"' + ',' + '\n' + '                        ' + '"' + 'border-radius' + '"' + ':' + '"' + '0px 25px 25px 0px' + '"' + '\n' + '                    }'));
      return Unit;
    };
  }
  function CryptoACScore$render$lambda$lambda_0(this$CryptoACScore) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACScore$render$lambda$lambda$lambda_0(this$CryptoACScore));
      return Unit;
    };
  }
  CryptoACScore.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_4);
    set_padding($receiver_0.css, '0px 20px 10px 20px');
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledP$lambda);
    set_marginBottom($receiver_0_0.css, get_px(5));
    $receiver_0_0.unaryPlus_pdl1vz$(this.props.label);
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    $receiver_0.invoke_qk0v40$($module$_material_ui_core.Box, CryptoACScore$render$lambda$lambda(this));
    $receiver_0.invoke_qk0v40$($module$_material_ui_core.Box, CryptoACScore$render$lambda$lambda_0(this));
    $receiver.child_30b5ua$($receiver_0.create());
  };
  CryptoACScore.prototype.getWidth_0 = function (bar) {
    var tmp$;
    var percentage = numberToInt(this.getValueOfBar_0() * 100);
    if (bar) {
      tmp$ = percentage.toString() + '%';
    } else {
      tmp$ = (100 - percentage | 0).toString() + '%';
    }
    return tmp$;
  };
  CryptoACScore.prototype.getColor_0 = function () {
    return 'hsl(' + this.getValueOfBar_0() * 100 + ',100%,50%)';
  };
  CryptoACScore.prototype.getValueOfBar_0 = function () {
    var valueOfBar = this.props.value / (this.props.max - this.props.min);
    if (valueOfBar === 0.0) {
      valueOfBar = 0.01;
    }if (valueOfBar === 1.0) {
      valueOfBar = 0.99;
    }return valueOfBar;
  };
  CryptoACScore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACScore',
    interfaces: [RComponent]
  };
  function cryptoACScore$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACScore$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACScore), cryptoACScore$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACScore(handler) {
    return ensureNotNull(createElement(cryptoACScore$lambda(handler)));
  }
  function CryptoACSelect() {
    RComponent_init(this);
  }
  function CryptoACSelect$render$lambda$lambda(this$CryptoACSelect) {
    return function ($receiver) {
      $receiver.id = this$CryptoACSelect.props.labelId;
      return Unit;
    };
  }
  function CryptoACSelect$render$lambda(this$CryptoACSelect) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACSelect$render$lambda$lambda(this$CryptoACSelect));
      $receiver.unaryPlus_pdl1vz$(this$CryptoACSelect.props.label);
      return Unit;
    };
  }
  function CryptoACSelect$render$lambda$lambda$lambda$lambda(closure$newChoice) {
    return function ($receiver) {
      $receiver.value = closure$newChoice;
      $receiver.changedByUser = true;
      return Unit;
    };
  }
  function CryptoACSelect$render$lambda$lambda$lambda(this$CryptoACSelect) {
    return function (e) {
      var tmp$;
      var newChoice = typeof (tmp$ = e.target.value) === 'string' ? tmp$ : throwCCE();
      setState(this$CryptoACSelect, CryptoACSelect$render$lambda$lambda$lambda$lambda(newChoice));
      this$CryptoACSelect.props.onChange(newChoice);
      return Unit;
    };
  }
  function CryptoACSelect$render$lambda$lambda_0(this$CryptoACSelect) {
    return function ($receiver) {
      $receiver.style = this$CryptoACSelect.props.selectStyle;
      $receiver.autoWidth = this$CryptoACSelect.props.autoWidth;
      $receiver.name = this$CryptoACSelect.props.name;
      $receiver.id = this$CryptoACSelect.props.id;
      $receiver.inputProps = JSON.parse(trimMargin('{ ' + '"' + 'name' + '"' + ':' + '"' + this$CryptoACSelect.props.name + '"' + ' }'));
      $receiver.labelId = this$CryptoACSelect.props.labelId;
      $receiver.label = this$CryptoACSelect.props.label;
      $receiver.value = this$CryptoACSelect.state.value;
      $receiver.onChange = CryptoACSelect$render$lambda$lambda$lambda(this$CryptoACSelect);
      return Unit;
    };
  }
  function CryptoACSelect$render$lambda$lambda$lambda_0($receiver) {
    $receiver.value = 'Select';
    return Unit;
  }
  function CryptoACSelect$render$lambda$lambda_1($receiver) {
    $receiver.attrs_37755u$(CryptoACSelect$render$lambda$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$('Select');
    return Unit;
  }
  function CryptoACSelect$render$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.value = closure$it;
      return Unit;
    };
  }
  function CryptoACSelect$render$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACSelect$render$lambda$lambda$lambda$lambda_0(closure$it));
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function CryptoACSelect$render$lambda_0(this$CryptoACSelect) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACSelect$render$lambda$lambda_0(this$CryptoACSelect));
      if (this$CryptoACSelect.props.selectOption) {
        $receiver.invoke_qk0v40$($module$_material_ui_core.MenuItem, CryptoACSelect$render$lambda$lambda_1);
      }var tmp$;
      tmp$ = this$CryptoACSelect.props.options.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.invoke_qk0v40$($module$_material_ui_core.MenuItem, CryptoACSelect$render$lambda$lambda$lambda_1(element));
      }
      return Unit;
    };
  }
  CryptoACSelect.prototype.render_ss14n$ = function ($receiver) {
    if (!equals(this.props.labelId, undefined) && !equals(this.props.label, undefined)) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.InputLabel, CryptoACSelect$render$lambda(this));
    }$receiver.invoke_qk0v40$($module$_material_ui_core.Select, CryptoACSelect$render$lambda_0(this));
  };
  function CryptoACSelect$init$lambda(props, state) {
    if (state.justMounted || !state.changedByUser) {
      state.value = equals(props.defaultValue, undefined) ? first(props.options) : props.defaultValue;
    }state.changedByUser = false;
    state.justMounted = false;
    return Unit;
  }
  CryptoACSelect.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.justMounted = true;
    $receiver.changedByUser = false;
    get_js(getKClass(CryptoACSelect)).getDerivedStateFromProps = CryptoACSelect$init$lambda;
  };
  CryptoACSelect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACSelect',
    interfaces: [RComponent]
  };
  function cryptoACSelect$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACSelect$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACSelect), cryptoACSelect$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACSelect(handler) {
    return ensureNotNull(createElement(cryptoACSelect$lambda(handler)));
  }
  function styledDiv$lambda_5(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function div$lambda_1(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf('class', closure$classes), it);
    };
  }
  function CryptoACSlider() {
    RComponent_init(this);
  }
  function CryptoACSlider$render$lambda$lambda(this$CryptoACSlider) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$CryptoACSlider.props.label);
      return Unit;
    };
  }
  function CryptoACSlider$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$newValue) {
    return function ($receiver) {
      var tmp$;
      $receiver.values = Kotlin.isArray(tmp$ = closure$newValue) ? tmp$ : throwCCE();
      return Unit;
    };
  }
  function CryptoACSlider$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$newValue) {
    return function ($receiver) {
      var tmp$;
      $receiver.value = typeof (tmp$ = closure$newValue) === 'number' ? tmp$ : throwCCE();
      return Unit;
    };
  }
  function CryptoACSlider$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACSlider) {
    return function (f, newValue) {
      if (this$CryptoACSlider.props.range) {
        setState(this$CryptoACSlider, CryptoACSlider$render$lambda$lambda$lambda$lambda$lambda$lambda(newValue));
      } else {
        setState(this$CryptoACSlider, CryptoACSlider$render$lambda$lambda$lambda$lambda$lambda$lambda_0(newValue));
      }
      if (!equals(this$CryptoACSlider.props.onChange, undefined)) {
        this$CryptoACSlider.props.onChange(newValue);
      }return Unit;
    };
  }
  function CryptoACSlider$render$lambda$lambda$lambda$lambda(this$CryptoACSlider) {
    return function ($receiver) {
      var tmp$;
      $receiver.min = this$CryptoACSlider.props.min;
      $receiver.max = this$CryptoACSlider.props.max;
      if (this$CryptoACSlider.props.range) {
        tmp$ = this$CryptoACSlider.state.values;
      } else {
        tmp$ = this$CryptoACSlider.state.value;
      }
      $receiver.value = tmp$;
      $receiver.color = this$CryptoACSlider.props.color;
      $receiver.valueLabelDisplay = 'auto';
      $receiver.onChange = CryptoACSlider$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACSlider);
      return Unit;
    };
  }
  function CryptoACSlider$render$lambda$lambda$lambda(this$CryptoACSlider) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACSlider$render$lambda$lambda$lambda$lambda(this$CryptoACSlider));
      return Unit;
    };
  }
  CryptoACSlider.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_1(null));
    if (!equals(this.props.label, undefined)) {
      $receiver_0.invoke_qk0v40$(html_0.ReactHTML.p, CryptoACSlider$render$lambda$lambda(this));
    }var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_5);
    set_padding($receiver_0_0.css, '20px');
    $receiver_0_0.invoke_qk0v40$($module$_material_ui_core.Slider, CryptoACSlider$render$lambda$lambda$lambda(this));
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    $receiver.child_30b5ua$($receiver_0.create());
  };
  function CryptoACSlider$init$lambda(props, state) {
    if (state.justMounted) {
      if (props.range) {
        state.values = props.defaultValues;
      } else {
        state.value = props.defaultValue;
      }
    }state.justMounted = false;
    return Unit;
  }
  CryptoACSlider.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.justMounted = true;
    get_js(getKClass(CryptoACSlider)).getDerivedStateFromProps = CryptoACSlider$init$lambda;
  };
  CryptoACSlider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACSlider',
    interfaces: [RComponent]
  };
  function cryptoACSlider$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACSlider$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACSlider), cryptoACSlider$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACSlider(handler) {
    return ensureNotNull(createElement(cryptoACSlider$lambda(handler)));
  }
  function CryptoACSwitch() {
    RComponent_init(this);
  }
  function CryptoACSwitch$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.changedByUser = true;
    $receiver.value = !$receiver.value;
    return Unit;
  }
  function CryptoACSwitch$render$lambda$lambda$lambda(this$CryptoACSwitch) {
    return function (it) {
      this$CryptoACSwitch.props.onChange(!this$CryptoACSwitch.state.value);
      setState(this$CryptoACSwitch, CryptoACSwitch$render$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function CryptoACSwitch$render$lambda$lambda(this$CryptoACSwitch) {
    return function ($receiver) {
      $receiver.checked = this$CryptoACSwitch.state.value;
      $receiver.color = this$CryptoACSwitch.props.color;
      $receiver.size = this$CryptoACSwitch.props.size;
      $receiver.onChange = CryptoACSwitch$render$lambda$lambda$lambda(this$CryptoACSwitch);
      return Unit;
    };
  }
  function CryptoACSwitch$render$lambda(this$CryptoACSwitch) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACSwitch$render$lambda$lambda(this$CryptoACSwitch));
      return Unit;
    };
  }
  CryptoACSwitch.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Switch, CryptoACSwitch$render$lambda(this));
  };
  function CryptoACSwitch$init$lambda(props, state) {
    if (state.justMounted || !state.changedByUser) {
      state.value = equals(props.defaultValue, undefined) ? false : props.defaultValue;
    }state.changedByUser = false;
    state.justMounted = false;
    return Unit;
  }
  CryptoACSwitch.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.justMounted = true;
    $receiver.changedByUser = false;
    get_js(getKClass(CryptoACSwitch)).getDerivedStateFromProps = CryptoACSwitch$init$lambda;
  };
  CryptoACSwitch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACSwitch',
    interfaces: [RComponent]
  };
  function cryptoACSwitch$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACSwitch$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACSwitch), cryptoACSwitch$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACSwitch(handler) {
    return ensureNotNull(createElement(cryptoACSwitch$lambda(handler)));
  }
  function CryptoACTextField() {
    RComponent_init(this);
  }
  function CryptoACTextField$render$lambda$lambda$lambda$lambda(closure$newValue) {
    return function ($receiver) {
      $receiver.changedByUser = true;
      $receiver.value = closure$newValue;
      return Unit;
    };
  }
  function CryptoACTextField$render$lambda$lambda$lambda(this$CryptoACTextField) {
    return function (event) {
      var tmp$;
      var newValue = (Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      if (!equals(this$CryptoACTextField.props.onChange, undefined)) {
        this$CryptoACTextField.props.onChange(newValue);
      }setState(this$CryptoACTextField, CryptoACTextField$render$lambda$lambda$lambda$lambda(newValue));
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
      $receiver.disabled = this$CryptoACTextField.props.disabled;
      $receiver.onChange = CryptoACTextField$render$lambda$lambda$lambda(this$CryptoACTextField);
      return Unit;
    };
  }
  function CryptoACTextField$render$lambda(this$CryptoACTextField) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACTextField$render$lambda$lambda(this$CryptoACTextField));
      return Unit;
    };
  }
  CryptoACTextField.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.TextField, CryptoACTextField$render$lambda(this));
  };
  function CryptoACTextField$init$lambda(props, state) {
    if (state.justMounted || !state.changedByUser) {
      state.value = props.defaultValue;
    }state.changedByUser = false;
    state.justMounted = false;
    return Unit;
  }
  CryptoACTextField.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.justMounted = true;
    $receiver.changedByUser = false;
    get_js(getKClass(CryptoACTextField)).getDerivedStateFromProps = CryptoACTextField$init$lambda;
  };
  CryptoACTextField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACTextField',
    interfaces: [RComponent]
  };
  function cryptoACTextField$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACTextField$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACTextField), cryptoACTextField$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACTextField(handler) {
    return ensureNotNull(createElement(cryptoACTextField$lambda(handler)));
  }
  function styledDiv$lambda_6(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init_0(attributesMapOf('class', closure$classes), it);
    };
  }
  function CryptoACTable() {
    RComponent_init(this);
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.variant = 'h6';
    $receiver.id = 'tableTitle';
    $receiver.component = 'div';
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACTable$render$lambda$lambda$lambda$lambda);
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
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'close';
      $receiver.onClick = CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaTimes, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable));
      $receiver.child_30b5ua$(ensureNotNull(createElement(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0)));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs.title = 'Close';
      $receiver.invoke_qk0v40$($module$_material_ui_core.IconButton, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable) {
    return function (it) {
      var csv = StringBuilder_init();
      var prefix = {v: ''};
      var $receiver = this$CryptoACTable.props.tableColumns;
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
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaDownload, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable, this$) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'download data';
      $receiver.onClick = CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable);
      this$.child_30b5ua$(ensureNotNull(createElement(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2)));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable, $receiver));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs.title = 'Download as CSV';
      $receiver.invoke_qk0v40$($module$_material_ui_core.IconButton, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CryptoACTable) {
    return function (event) {
      this$CryptoACTable.props.onRefresh(event);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'refresh';
      $receiver.onClick = CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CryptoACTable);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaUndoAlt, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable));
      $receiver.child_30b5ua$(ensureNotNull(createElement(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3)));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs.title = 'Refresh';
      $receiver.invoke_qk0v40$($module$_material_ui_core.IconButton, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Typography, CryptoACTable$render$lambda$lambda$lambda(this$CryptoACTable));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_6);
      var this$CryptoACTable_0 = this$CryptoACTable;
      var $receiver_1 = $receiver_0.css;
      set_marginLeft($receiver_1, LinearDimension.Companion.auto);
      set_marginRight($receiver_1, get_px(0));
      if (!equals(this$CryptoACTable_0.props.onClose, undefined)) {
        var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_6);
        var $receiver_2 = $receiver_0_0.css;
        set_marginLeft($receiver_2, get_px(5));
        set_float($receiver_2, Float.left);
        $receiver_0_0.invoke_qk0v40$($module$_material_ui_core.Tooltip, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable_0));
        $receiver_0.child_30b5ua$($receiver_0_0.create());
      }var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_6);
      var $receiver_3 = $receiver_0_1.css;
      set_marginLeft($receiver_3, get_px(5));
      set_float($receiver_3, Float.left);
      $receiver_0_1.invoke_qk0v40$($module$_material_ui_core.Tooltip, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACTable_0));
      $receiver_0.child_30b5ua$($receiver_0_1.create());
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_6);
      var $receiver_4 = $receiver_0_2.css;
      set_marginLeft($receiver_4, get_px(5));
      set_float($receiver_4, Float.left);
      $receiver_0_2.invoke_qk0v40$($module$_material_ui_core.Tooltip, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable_0));
      $receiver_0.child_30b5ua$($receiver_0_2.create());
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.align = 'center';
    return Unit;
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$it) {
    return function ($receiver) {
      $receiver.key = closure$it.field;
      $receiver.attrs_37755u$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      $receiver.unaryPlus_pdl1vz$(closure$it.headerName);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable) {
    return function ($receiver) {
      var $receiver_0 = this$CryptoACTable.props.tableColumns;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        $receiver.invoke_qk0v40$($module$_material_ui_core.TableCell, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(element));
      }
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.TableRow, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable, closure$it) {
    return function (f) {
      this$CryptoACTable.props.onElementClick(closure$it);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CryptoACTable, closure$it) {
    return function ($receiver) {
      $receiver.hover = true;
      $receiver.selected = false;
      $receiver.onClick = CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CryptoACTable, closure$it);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it) {
    return function ($receiver) {
      $receiver.attrs.align = 'center';
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it, this$CryptoACTable) {
    return function ($receiver) {
      $receiver.key = joinToString_0(closure$it, '');
      $receiver.attrs_37755u$(CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CryptoACTable, closure$it));
      var $receiver_0 = closure$it;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        $receiver.invoke_qk0v40$($module$_material_ui_core.TableCell, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(element));
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
        $receiver.invoke_qk0v40$($module$_material_ui_core.TableRow, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(element, this$CryptoACTable_0));
      }
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda$lambda_0(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.TableHead, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_2(this$CryptoACTable));
      $receiver.invoke_qk0v40$($module$_material_ui_core.TableBody, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_3(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda$lambda$lambda_0(this$CryptoACTable) {
    return function ($receiver) {
      if (this$CryptoACTable.props.elements.isEmpty()) {
        var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_6);
        var $receiver_1 = $receiver_0.css;
        set_background($receiver_1, 'url(blackhole.svg) no-repeat center center');
        set_backgroundSize($receiver_1, '150px');
        set_lineHeight($receiver_1, new LineHeight('75px'));
        set_textAlign($receiver_1, TextAlign.center);
        set_height($receiver_1, get_pct(90));
        var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(p$lambda(null));
        $receiver_0_0.unaryPlus_pdl1vz$('No items in this table yet');
        $receiver_0.child_30b5ua$($receiver_0_0.create());
        $receiver.child_30b5ua$($receiver_0.create());
      } else {
        $receiver.invoke_qk0v40$($module$_material_ui_core.Table, CryptoACTable$render$lambda$lambda$lambda$lambda_0(this$CryptoACTable));
      }
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
  function CryptoACTable$render$lambda$lambda_0(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACTable$render$lambda$lambda$lambda_1(this$CryptoACTable));
      return Unit;
    };
  }
  function CryptoACTable$render$lambda(this$CryptoACTable) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Toolbar, CryptoACTable$render$lambda$lambda(this$CryptoACTable));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_6);
      var this$CryptoACTable_0 = this$CryptoACTable;
      var $receiver_1 = $receiver_0.css;
      set_height($receiver_1, get_px(330));
      set_paddingLeft($receiver_1, get_px(5));
      set_paddingRight($receiver_1, get_px(5));
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.TableContainer, CryptoACTable$render$lambda$lambda$lambda_0(this$CryptoACTable_0));
      $receiver.child_30b5ua$($receiver_0.create());
      $receiver.invoke_qk0v40$($module$_material_ui_core.TablePagination, CryptoACTable$render$lambda$lambda_0(this$CryptoACTable));
      return Unit;
    };
  }
  CryptoACTable.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Paper, CryptoACTable$render$lambda(this));
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
  CryptoACTable.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.page = 0;
    $receiver.rowsPerPage = 10;
  };
  CryptoACTable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACTable',
    interfaces: [RComponent]
  };
  function cryptoACTable$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function cryptoACTable$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CryptoACTable), cryptoACTable$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function cryptoACTable(handler) {
    return ensureNotNull(createElement(cryptoACTable$lambda(handler)));
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
  CryptoACTableData.prototype.copy_obad5l$ = function (elements, columns, title) {
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
      return new INPUT_init(attributesMapOf_1(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function styledDiv$lambda_7(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function logger$lambda_12() {
    return Unit;
  }
  var logger_12;
  function Dashboard() {
    RComponent_init(this);
  }
  function Dashboard$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.variant = 'h6';
    $receiver.id = 'editProfile';
    $receiver.component = 'div';
    return Unit;
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.color = 'primary';
    $receiver.component = 'label';
    return Unit;
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaCloudUploadAlt, Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda() {
    return 'Received upload configuration file event';
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Dashboard) {
    return function (event) {
      var tmp$, tmp$_0;
      logger_12.info_nq59yw$(Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      tmp$_0 = ensureNotNull(ensureNotNull((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).files)[0]);
      this$Dashboard.parseProfileFile_0(tmp$_0);
      return Unit;
    };
  }
  function Dashboard$render$lambda$lambda$lambda$lambda_0(this$Dashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Dashboard$render$lambda$lambda$lambda$lambda$lambda);
      $receiver.child_30b5ua$(ensureNotNull(createElement(Dashboard$render$lambda$lambda$lambda$lambda$lambda_0)));
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda_0(null, null, null, null, null));
      var this$Dashboard_0 = this$Dashboard;
      var $receiver_1 = $receiver_0.attrs;
      $receiver_1.type = InputType.file;
      $receiver_1.accept = '.json';
      set_hidden($receiver_1, true);
      set_onChangeFunction($receiver_1, Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Dashboard_0));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Dashboard) {
    return function ($receiver) {
      if (!this$Dashboard.state.editProfileFormIsOpen) {
        $receiver.invoke_qk0v40$($module$react_icons_fa.FaChevronDown, Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      } else {
        $receiver.invoke_qk0v40$($module$react_icons_fa.FaChevronUp, Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      }
      return Unit;
    };
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.editProfileFormIsOpen = !$receiver.editProfileFormIsOpen;
    return Unit;
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Dashboard) {
    return function (it) {
      setState(this$Dashboard, Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Dashboard) {
    return function ($receiver) {
      $receiver.color = 'primary';
      $receiver.component = 'label';
      $receiver.size = 'small';
      $receiver.children = ensureNotNull(createElement(Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Dashboard)));
      $receiver.onClick = Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Dashboard);
      return Unit;
    };
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda_1(this$Dashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Dashboard));
      return Unit;
    };
  }
  function Dashboard$render$lambda$lambda$lambda(this$Dashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Dashboard$render$lambda$lambda$lambda$lambda);
      $receiver.unaryPlus_pdl1vz$('Edit or Upload Profile');
      $receiver.invoke_qk0v40$($module$_material_ui_core.IconButton, Dashboard$render$lambda$lambda$lambda$lambda_0(this$Dashboard));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_7);
      var this$Dashboard_0 = this$Dashboard;
      var $receiver_1 = $receiver_0.css;
      set_display($receiver_1, Display.inline);
      set_float($receiver_1, Float.right);
      set_marginTop($receiver_1, get_px(7));
      set_marginRight($receiver_1, get_px(10));
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.IconButton, Dashboard$render$lambda$lambda$lambda$lambda$lambda_1(this$Dashboard_0));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Dashboard) {
    return function (method, endpoint, values, f) {
      this$Dashboard.submitEditProfileForm_0(method, endpoint, values);
      return Unit;
    };
  }
  function Dashboard$render$lambda$lambda$lambda$lambda_1(this$Dashboard, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var this$Dashboard_0 = this$Dashboard;
      $receiver_0.attrs;
      var tmp$;
      $receiver.handleChangeBackdropIsOpen = this$Dashboard_0.props.handleChangeBackdropIsOpen;
      $receiver.handleDisplayCryptoACAlert = this$Dashboard_0.props.handleDisplayAlert;
      $receiver.handleSubmitEvent = Dashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Dashboard_0);
      if (this$Dashboard_0.props.userHasProfile) {
        tmp$ = HttpMethod.Companion.Patch;
      } else {
        tmp$ = HttpMethod.Companion.Post;
      }
      $receiver.method = tmp$;
      $receiver.cryptoACFormFields = this$Dashboard_0.state.cryptoACFormFields;
      $receiver.submitButtonText = 'Edit Profile';
      $receiver.coreType = this$Dashboard_0.props.coreType;
      $receiver.endpoint = API_getInstance().PROFILES;
      return Unit;
    };
  }
  function Dashboard$render$lambda$lambda(this$Dashboard) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Typography, Dashboard$render$lambda$lambda$lambda(this$Dashboard));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_7);
      var this$Dashboard_0 = this$Dashboard;
      var $receiver_1 = $receiver_0.css;
      set_marginTop($receiver_1, get_px(10));
      set_marginBottom($receiver_1, get_px(10));
      set_marginRight($receiver_1, get_px(10));
      set_marginLeft($receiver_1, get_px(30));
      if (!this$Dashboard_0.state.editProfileFormIsOpen) {
        set_display($receiver_1, Display.none);
      }$receiver_0.child_30b5ua$(cryptoACForm(Dashboard$render$lambda$lambda$lambda$lambda_1(this$Dashboard_0, $receiver_0)));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Dashboard$render$lambda(this$Dashboard) {
    return function ($receiver) {
      $receiver.handleChangeBackdropIsOpen = this$Dashboard.props.handleChangeBackdropIsOpen;
      $receiver.handleDisplayAlert = this$Dashboard.props.handleDisplayAlert;
      $receiver.userIsAdmin = this$Dashboard.props.userIsAdmin;
      $receiver.httpClient = this$Dashboard.props.httpClient;
      $receiver.coreType = this$Dashboard.props.coreType;
      return Unit;
    };
  }
  function Dashboard$render$lambda_0(this$Dashboard) {
    return function ($receiver) {
      $receiver.handleChangeBackdropIsOpen = this$Dashboard.props.handleChangeBackdropIsOpen;
      $receiver.handleDisplayAlert = this$Dashboard.props.handleDisplayAlert;
      $receiver.userIsAdmin = this$Dashboard.props.userIsAdmin;
      $receiver.httpClient = this$Dashboard.props.httpClient;
      $receiver.coreType = this$Dashboard.props.coreType;
      $receiver.topics = this$Dashboard.props.tables;
      return Unit;
    };
  }
  Dashboard.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_7);
    var $receiver_1 = $receiver_0.css;
    set_textAlign($receiver_1, TextAlign.center);
    set_paddingTop($receiver_1, get_px(10));
    set_paddingBottom($receiver_1, get_px(10));
    $receiver_0.invoke_qk0v40$($module$_material_ui_core.Paper, Dashboard$render$lambda$lambda(this));
    $receiver.child_30b5ua$($receiver_0.create());
    if (this.props.userHasProfile) {
      switch (this.props.coreType.name) {
        case 'RBAC_CLOUD':
          $receiver.child_30b5ua$(rbacCLOUDDashboard(Dashboard$render$lambda(this)));
          break;
        case 'RBAC_MQTT':
          $receiver.child_30b5ua$(rbacMQTTDashboard(Dashboard$render$lambda_0(this)));
          break;
        case 'RBAC_MOCK':
          throw new NotImplementedError_init();
      }
    }};
  function Dashboard$init$lambda() {
    return 'Initializing the state of the Dashboard component';
  }
  function Dashboard$init$lambda$lambda() {
    return 'Trying to see the dashboard but user is not logged in';
  }
  function Coroutine$Dashboard$init$lambda(this$Dashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Dashboard = this$Dashboard_0;
  }
  Coroutine$Dashboard$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Dashboard$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Dashboard$init$lambda.prototype.constructor = Coroutine$Dashboard$init$lambda;
  Coroutine$Dashboard$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$this$Dashboard.props.userIsLogged) {
              this.state_0 = 2;
              this.result_0 = this.local$this$Dashboard.getProfileFromCryptoAC_0(void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              logger_12.warn_nq59yw$(Dashboard$init$lambda$lambda);
              return this.local$this$Dashboard.props.handleDisplayAlert(OutcomeCode$CODE_051_LOGIN_REQUIRED_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
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
  function Dashboard$init$lambda_0(this$Dashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Dashboard$init$lambda(this$Dashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Dashboard.prototype.init_b4e81d$ = function ($receiver) {
    logger_12.info_nq59yw$(Dashboard$init$lambda);
    $receiver.editProfileFormIsOpen = true;
    $receiver.cryptoACFormFields = emptyList();
    launch(MainScope(), void 0, void 0, Dashboard$init$lambda_0(this));
  };
  function Dashboard$submitEditProfileForm$lambda(closure$method, closure$endpoint) {
    return function () {
      return 'Submitting CryptoAC edit profile form, method ' + closure$method + ', endpoint ' + closure$endpoint;
    };
  }
  function Dashboard$submitEditProfileForm$lambda_0(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function Dashboard$submitEditProfileForm$lambda_1(closure$method) {
    return function () {
      return 'HTTP Method of edit profile form is neither Post nor Patch (it is ' + closure$method + ')';
    };
  }
  function Dashboard$submitEditProfileForm$lambda$lambda(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Dashboard$submitEditProfileForm$lambda$lambda_0($receiver) {
    $receiver.editProfileFormIsOpen = false;
    return Unit;
  }
  function Dashboard$submitEditProfileForm$lambda$lambda_1(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Dashboard$submitEditProfileForm$lambda$lambda_2($receiver) {
    $receiver.editProfileFormIsOpen = true;
    return Unit;
  }
  function Coroutine$Dashboard$submitEditProfileForm$lambda(this$Dashboard_0, closure$method_0, closure$endpoint_0, closure$parameters_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Dashboard = this$Dashboard_0;
    this.local$closure$method = closure$method_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$parameters = closure$parameters_0;
    this.local$tmp$ = void 0;
    this.local$response = void 0;
  }
  Coroutine$Dashboard$submitEditProfileForm$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Dashboard$submitEditProfileForm$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Dashboard$submitEditProfileForm$lambda.prototype.constructor = Coroutine$Dashboard$submitEditProfileForm$lambda;
  Coroutine$Dashboard$submitEditProfileForm$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$Dashboard.props.handleChangeBackdropIsOpen(true);
            if (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Post) : null) {
              var $receiver = this.local$this$Dashboard.props.httpClient;
              var $receiver_1 = new HttpRequestBuilder_init();
              var closure$endpoint = this.local$closure$endpoint;
              var closure$parameters = this.local$closure$parameters;
              url($receiver_1, closure$endpoint);
              contentType($receiver_1, ContentType.Application.Json);
              if (closure$parameters == null) {
                $receiver_1.body = utils.EmptyContent;
                $receiver_1.bodyType = null;
              } else if (Kotlin.isType(closure$parameters, OutgoingContent)) {
                $receiver_1.body = closure$parameters;
                $receiver_1.bodyType = null;
              } else {
                $receiver_1.body = closure$parameters;
                var tmp$ = reflect.JsType;
                var tmp$_0 = getKClass(CoreParameters);
                var tryGetType$result;
                tryGetType$break: do {
                  try {
                    tryGetType$result = createKType(getKClass(CoreParameters), [], false);
                  } catch (cause) {
                    if (Kotlin.isType(cause, Throwable)) {
                      tryGetType$result = null;
                      break tryGetType$break;
                    } else
                      throw cause;
                  }
                }
                 while (false);
                $receiver_1.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
              }
              $receiver_1.method = HttpMethod_0.Companion.Post;
              this.state_0 = 3;
              this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              var $receiver_0 = this.local$this$Dashboard.props.httpClient;
              var $receiver_1_0 = new HttpRequestBuilder_init();
              var closure$endpoint_0 = this.local$closure$endpoint;
              var closure$parameters_0 = this.local$closure$parameters;
              url($receiver_1_0, closure$endpoint_0);
              contentType($receiver_1_0, ContentType.Application.Json);
              if (closure$parameters_0 == null) {
                $receiver_1_0.body = utils.EmptyContent;
                $receiver_1_0.bodyType = null;
              } else if (Kotlin.isType(closure$parameters_0, OutgoingContent)) {
                $receiver_1_0.body = closure$parameters_0;
                $receiver_1_0.bodyType = null;
              } else {
                $receiver_1_0.body = closure$parameters_0;
                var tmp$_1 = reflect.JsType;
                var tmp$_0_0 = getKClass(CoreParameters);
                var tryGetType$result_0;
                tryGetType$break: do {
                  try {
                    tryGetType$result_0 = createKType(getKClass(CoreParameters), [], false);
                  } catch (cause_0) {
                    if (Kotlin.isType(cause_0, Throwable)) {
                      tryGetType$result_0 = null;
                      break tryGetType$break;
                    } else
                      throw cause_0;
                  }
                }
                 while (false);
                $receiver_1_0.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
              }
              $receiver_1_0.method = HttpMethod_0.Companion.Patch;
              this.state_0 = 2;
              this.result_0 = (new HttpStatement_init($receiver_1_0, $receiver_0)).execute(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 3:
            this.result_0;
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$response = this.local$tmp$;
            var tmp$_2;
            var tmp$_3 = this.local$response.call;
            var tmp$_4 = reflect.JsType;
            var tmp$_0_1 = getKClass(OutcomeCode);
            var tryGetType$result_0_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0_0 = createKType(getKClass(OutcomeCode), [], false);
              } catch (cause_0_0) {
                if (Kotlin.isType(cause_0_0, Throwable)) {
                  tryGetType$result_0_0 = null;
                  break tryGetType$break;
                } else
                  throw cause_0_0;
              }
            }
             while (false);
            this.state_0 = 5;
            this.result_0 = tmp$_3.body_qi9ur9$(typeInfoImpl(tmp$_4, tmp$_0_1, tryGetType$result_0_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.result_0 = Kotlin.isType(tmp$_2 = this.result_0, OutcomeCode) ? tmp$_2 : throwCCE();
            var code = this.result_0;
            var status = this.local$response.status;
            this.local$this$Dashboard.props.handleChangeBackdropIsOpen(false);
            if (status != null ? status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_12.info_nq59yw$(Dashboard$submitEditProfileForm$lambda$lambda(status, code));
              this.local$this$Dashboard.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance());
              this.local$this$Dashboard.props.handleChangeUserIsAdmin(this.local$closure$parameters.user.isAdmin);
              this.local$this$Dashboard.props.handleChangeUserHasProfile(true);
              return setState(this.local$this$Dashboard, Dashboard$submitEditProfileForm$lambda$lambda_0), Unit;
            } else {
              logger_12.warn_nq59yw$(Dashboard$submitEditProfileForm$lambda$lambda_1(status, code));
              this.local$this$Dashboard.props.handleDisplayAlert(code, CryptoACAlertSeverity$ERROR_getInstance());
              this.local$this$Dashboard.props.handleChangeUserHasProfile(false);
              this.local$this$Dashboard.props.handleChangeUserIsAdmin(false);
              return setState(this.local$this$Dashboard, Dashboard$submitEditProfileForm$lambda$lambda_2), Unit;
            }

          case 6:
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
  function Dashboard$submitEditProfileForm$lambda_2(this$Dashboard_0, closure$method_0, closure$endpoint_0, closure$parameters_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Dashboard$submitEditProfileForm$lambda(this$Dashboard_0, closure$method_0, closure$endpoint_0, closure$parameters_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Dashboard$submitEditProfileForm$lambda_3() {
    return 'NullPointerException: probably not all fields of the edit profile form were filled';
  }
  function Dashboard$submitEditProfileForm$lambda_4(closure$e) {
    return function () {
      return 'Error during edit profile (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  Dashboard.prototype.submitEditProfileForm_0 = function (method, endpoint, values) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    logger_12.info_nq59yw$(Dashboard$submitEditProfileForm$lambda(method, endpoint));
    try {
      switch (this.props.rmType.name) {
        case 'CRYPTOAC':
          tmp$ = RMInterfaceCryptoACParameters$Companion_getInstance().fromMap_xlh5cu$(values);
          break;
        case 'NONE':
          tmp$ = null;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var rmParameters = tmp$;
      switch (this.props.mmType.name) {
        case 'MYSQL':
          tmp$_0 = MMInterfaceMySQLParameters$Companion_getInstance().fromMap_xlh5cu$(values);
          break;
        case 'REDIS':
          tmp$_0 = MMInterfaceRedisParameters$Companion_getInstance().fromMap_xlh5cu$(values);
          break;
        default:tmp$_0 = Kotlin.noWhenBranchMatched();
          break;
      }
      var mmParameters = tmp$_0;
      switch (this.props.dmType.name) {
        case 'CRYPTOAC':
          tmp$_1 = DMInterfaceCryptoACParameters$Companion_getInstance().fromMap_xlh5cu$(values);
          break;
        case 'MOSQUITTO':
          tmp$_1 = DMInterfaceMosquittoParameters$Companion_getInstance().fromMap_xlh5cu$(values);
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      var dmParameters = tmp$_1;
      var user = new User(ensureNotNull(values.get_11rb$(SERVER_getInstance().USERNAME)), void 0, void 0, void 0, toBoolean(values.get_11rb$(SERVER_getInstance().IS_ADMIN)));
      var cryptoType = CryptoType$valueOf(ensureNotNull(values.get_11rb$(SERVER_getInstance().CRYPTO)));
      switch (this.props.coreType.name) {
        case 'RBAC_CLOUD':
          tmp$_5 = new CoreParametersCLOUD(user, void 0, cryptoType, void 0, ensureNotNull(rmParameters), Kotlin.isType(tmp$_2 = mmParameters, MMInterfaceRBACCLOUDParameters) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = dmParameters, DMInterfaceRBACCLOUDParameters) ? tmp$_3 : throwCCE(), new OPAInterfaceParameters(toInt(ensureNotNull(values.get_11rb$(SERVER_getInstance().OPA_PORT))), ensureNotNull(values.get_11rb$(SERVER_getInstance().OPA_URL)), PolicyModel$valueOf(ensureNotNull(values.get_11rb$(SERVER_getInstance().OPA_POLICY_MODEL)))));
          break;
        case 'RBAC_MQTT':
          tmp$_5 = new CoreParametersMQTT(user, void 0, cryptoType, void 0, mmParameters, Kotlin.isType(tmp$_4 = dmParameters, DMInterfaceRBACMQTTParameters) ? tmp$_4 : throwCCE());
          break;
        case 'RBAC_MOCK':
          var message = 'Using MOCK core when not in development mode';
          logger_12.error_nq59yw$(Dashboard$submitEditProfileForm$lambda_0(message));
          throw IllegalStateException_init(message);
        default:tmp$_5 = Kotlin.noWhenBranchMatched();
          break;
      }
      var parameters = tmp$_5;
      if (!(method != null ? method.equals(HttpMethod.Companion.Post) : null) && !(method != null ? method.equals(HttpMethod.Companion.Patch) : null)) {
        logger_12.warn_nq59yw$(Dashboard$submitEditProfileForm$lambda_1(method));
        this.props.handleDisplayAlert(OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
      }launch(MainScope(), void 0, void 0, Dashboard$submitEditProfileForm$lambda_2(this, method, endpoint, parameters));
    } catch (e) {
      if (Kotlin.isType(e, NullPointerException)) {
        printStackTrace(e);
        logger_12.warn_nq59yw$(Dashboard$submitEditProfileForm$lambda_3);
        this.props.handleDisplayAlert(OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance(), CryptoACAlertSeverity$WARNING_getInstance());
      } else if (Kotlin.isType(e, Error_0)) {
        logger_12.error_nq59yw$(Dashboard$submitEditProfileForm$lambda_4(e));
        console.log(e);
        this.props.handleDisplayAlert(OutcomeCode$CODE_049_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
      } else
        throw e;
    }
  };
  function Dashboard$parseProfileFile$lambda(closure$reader, this$Dashboard) {
    return function (f) {
      var fileContent = closure$reader.result.toString();
      var $receiver = myJson;
      var tmp$;
      var parameters = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer_0($receiver.serializersModule, createKType(getKClass(CoreParameters), [], false)), KSerializer) ? tmp$ : throwCCE(), fileContent);
      return this$Dashboard.parseProfileAndUpdateFields_0(parameters, true);
    };
  }
  function Dashboard$parseProfileFile$lambda_0() {
    return 'The user did not provide a .json file for the profile';
  }
  Dashboard.prototype.parseProfileFile_0 = function (file) {
    if (endsWith(file.name, '.json')) {
      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = Dashboard$parseProfileFile$lambda(reader, this);
    } else {
      logger_12.warn_nq59yw$(Dashboard$parseProfileFile$lambda_0);
      this.props.handleDisplayAlert(OutcomeCode$CODE_040_MALFORMED_PROFILE_FILE_getInstance(), CryptoACAlertSeverity$WARNING_getInstance());
    }
  };
  function Dashboard$getProfileFromCryptoAC$lambda(closure$username, closure$actualEndpoint) {
    return function () {
      return 'Getting the profile for user ' + toString(closure$username) + ' at endpoint ' + closure$actualEndpoint;
    };
  }
  function Dashboard$getProfileFromCryptoAC$lambda_0(closure$status) {
    return function () {
      return 'Response status is ' + closure$status;
    };
  }
  function Dashboard$getProfileFromCryptoAC$lambda_1(this$Dashboard, closure$parameters) {
    return function ($receiver) {
      this$Dashboard.props.handleChangeUserHasProfile(true);
      this$Dashboard.props.handleChangeUserIsAdmin(closure$parameters.user.isAdmin);
      $receiver.editProfileFormIsOpen = false;
      return Unit;
    };
  }
  function Dashboard$getProfileFromCryptoAC$lambda_2(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$outcomeCode;
    };
  }
  function Dashboard$getProfileFromCryptoAC$lambda_3(this$Dashboard) {
    return function ($receiver) {
      this$Dashboard.props.handleChangeUserHasProfile(false);
      this$Dashboard.props.handleChangeUserIsAdmin(false);
      $receiver.editProfileFormIsOpen = true;
      return Unit;
    };
  }
  function Coroutine$getProfileFromCryptoAC_0($this, username_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$status = void 0;
    this.local$username = username_0;
  }
  Coroutine$getProfileFromCryptoAC_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getProfileFromCryptoAC_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getProfileFromCryptoAC_0.prototype.constructor = Coroutine$getProfileFromCryptoAC_0;
  Coroutine$getProfileFromCryptoAC_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$username === void 0)
              this.local$username = this.$this.props.username;
            var actualEndpoint = baseURL + replace(API_getInstance().PROFILES, '{Core}', this.$this.props.coreType.toString()) + toString(this.local$username);
            logger_12.info_nq59yw$(Dashboard$getProfileFromCryptoAC$lambda(this.local$username, actualEndpoint));
            var $receiver = this.$this.props.httpClient;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, actualEndpoint);
            $receiver_1.method = HttpMethod_0.Companion.Get;
            this.state_0 = 2;
            this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            var httpResponse = this.result_0;
            this.local$status = httpResponse.status;
            if (this.local$status != null ? this.local$status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_12.info_nq59yw$(Dashboard$getProfileFromCryptoAC$lambda_0(this.local$status));
              this.state_0 = 4;
              this.result_0 = bodyAsText(httpResponse, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              this.result_0 = bodyAsText(httpResponse, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            var text = this.result_0;
            var $receiver_0 = myJson;
            var tmp$;
            var outcomeCode = $receiver_0.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer_0($receiver_0.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$ : throwCCE(), text);
            logger_12.warn_nq59yw$(Dashboard$getProfileFromCryptoAC$lambda_2(this.local$status, outcomeCode));
            this.$this.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance());
            setState(this.$this, Dashboard$getProfileFromCryptoAC$lambda_3(this.$this));
            this.$this.getFieldsFromParameters_0(new User(ensureNotNull(this.$this.props.username)), CryptoType$SODIUM_getInstance());
            this.state_0 = 5;
            continue;
          case 4:
            var profileAsString = this.result_0;
            var $receiver_2 = myJson;
            var tmp$_0;
            var parameters = $receiver_2.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer_0($receiver_2.serializersModule, createKType(getKClass(CoreParameters), [], false)), KSerializer) ? tmp$_0 : throwCCE(), profileAsString);
            if (this.$this.parseProfileAndUpdateFields_0(parameters, true)) {
              setState(this.$this, Dashboard$getProfileFromCryptoAC$lambda_1(this.$this, parameters));
            }
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
  Dashboard.prototype.getProfileFromCryptoAC_0 = function (username_0, continuation_0, suspended) {
    var instance = new Coroutine$getProfileFromCryptoAC_0(this, username_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Dashboard$parseProfileAndUpdateFields$lambda() {
    return 'Version number of profile file is 1';
  }
  function Dashboard$parseProfileAndUpdateFields$lambda_0($receiver) {
    $receiver.editProfileFormIsOpen = true;
    return Unit;
  }
  function Dashboard$parseProfileAndUpdateFields$lambda_1() {
    return 'Malformed .json profile file';
  }
  function Dashboard$parseProfileAndUpdateFields$lambda_2(closure$e) {
    return function () {
      return closure$e;
    };
  }
  function Dashboard$parseProfileAndUpdateFields$lambda_3(closure$e) {
    return function () {
      return 'Error during upload file (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  Dashboard.prototype.parseProfileAndUpdateFields_0 = function (parameters, forceTypesUpdate) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var everythingIsFine = true;
    try {
      var versionNumber = parameters.versionNumber;
      var coreType = parameters.coreType;
      var cryptoType = parameters.cryptoType;
      var user = parameters.user;
      if (coreType !== this.props.coreType) {
        throw UnsupportedOperationException_init('Core type of file (' + coreType + ') is different from currently selected core type (' + this.props.coreType);
      }if (versionNumber === 1)
        logger_12.debug_nq59yw$(Dashboard$parseProfileAndUpdateFields$lambda);
      else {
        throw UnsupportedOperationException_init('Version number ' + versionNumber + ' is not supported');
      }
      if (Kotlin.isType(parameters, CoreParametersCLOUD))
        tmp$ = parameters.rmInterfaceParameters;
      else
        tmp$ = null;
      var rmParameters = tmp$;
      if (rmParameters != null) {
        if (rmParameters.rmType !== this.props.rmType) {
          if (forceTypesUpdate) {
            this.props.handleChangeRMType(rmParameters.rmType);
            this.props.handleDisplayAlert(OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
          } else {
            throw UnsupportedOperationException_init('RM type of file (' + rmParameters.rmType + ') is different from currently selected core type (' + this.props.rmType);
          }
        }}if (Kotlin.isType(parameters, CoreParametersCLOUD))
        tmp$_0 = parameters.mmInterfaceParameters;
      else if (Kotlin.isType(parameters, CoreParametersMQTT))
        tmp$_0 = parameters.mmInterfaceParameters;
      else
        tmp$_0 = null;
      var mmParameters = tmp$_0;
      if (mmParameters != null) {
        if (mmParameters.mmType !== this.props.mmType) {
          if (forceTypesUpdate) {
            this.props.handleChangeMMType(mmParameters.mmType);
            this.props.handleDisplayAlert(OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
          } else {
            throw UnsupportedOperationException_init('MM type of file (' + mmParameters.mmType + ') is different from currently selected core type (' + this.props.mmType);
          }
        }}if (Kotlin.isType(parameters, CoreParametersCLOUD))
        tmp$_1 = parameters.dmInterfaceParameters;
      else if (Kotlin.isType(parameters, CoreParametersMQTT))
        tmp$_1 = parameters.dmInterfaceParameters;
      else
        tmp$_1 = null;
      var dmParameters = tmp$_1;
      if (dmParameters != null) {
        if (dmParameters.dmType !== this.props.dmType) {
          if (forceTypesUpdate) {
            this.props.handleChangeDMType(dmParameters.dmType);
            this.props.handleDisplayAlert(OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
          } else {
            throw UnsupportedOperationException_init('DM type of file (' + dmParameters.dmType + ') is different from currently selected core type (' + this.props.dmType);
          }
        }}if (Kotlin.isType(parameters, CoreParametersCLOUD))
        tmp$_2 = parameters.opaInterfaceParameters;
      else
        tmp$_2 = null;
      var opaParameters = tmp$_2;
      setState(this, Dashboard$parseProfileAndUpdateFields$lambda_0);
      this.getFieldsFromParameters_0(user, cryptoType, rmParameters, mmParameters, dmParameters, opaParameters);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        everythingIsFine = false;
        if (Kotlin.isType(e, NullPointerException) || Kotlin.isType(e, UnsupportedOperationException) || e.name == 'JsonDecodingException') {
          logger_12.warn_nq59yw$(Dashboard$parseProfileAndUpdateFields$lambda_1);
          logger_12.warn_nq59yw$(Dashboard$parseProfileAndUpdateFields$lambda_2(e));
          this.props.handleDisplayAlert(OutcomeCode$CODE_040_MALFORMED_PROFILE_FILE_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
        } else {
          logger_12.error_nq59yw$(Dashboard$parseProfileAndUpdateFields$lambda_3(e));
          console.log(e);
          this.props.handleDisplayAlert(OutcomeCode$CODE_049_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
        }
      } else
        throw e;
    }
    return everythingIsFine;
  };
  function Dashboard$getFieldsFromParameters$lambda() {
    return 'Getting profile fields from parameters';
  }
  function Dashboard$getFieldsFromParameters$lambda_0(closure$fields) {
    return function ($receiver) {
      $receiver.cryptoACFormFields = toList(closure$fields);
      return Unit;
    };
  }
  Dashboard.prototype.getFieldsFromParameters_0 = function (user, cryptoType, rmParameters, mmParameters, dmParameters, opaParameters) {
    if (rmParameters === void 0)
      rmParameters = null;
    if (mmParameters === void 0)
      mmParameters = null;
    if (dmParameters === void 0)
      dmParameters = null;
    if (opaParameters === void 0)
      opaParameters = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    logger_12.info_nq59yw$(Dashboard$getFieldsFromParameters$lambda);
    tmp$ = new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance(), void 0, user.name, 'darkTextField');
    tmp$_0 = new CryptoACFormField(SERVER_getInstance().IS_ADMIN, replace(SERVER_getInstance().IS_ADMIN, '_', ' '), InputType$checkBox_getInstance(), void 0, user.isAdmin.toString(), 'darkTextField');
    tmp$_1 = SERVER_getInstance().CRYPTO;
    tmp$_2 = SERVER_getInstance().CRYPTO;
    tmp$_3 = InputType$select_getInstance();
    var $receiver = CryptoType$values();
    var destination = ArrayList_init_0($receiver.length);
    var tmp$_12;
    for (tmp$_12 = 0; tmp$_12 !== $receiver.length; ++tmp$_12) {
      var item = $receiver[tmp$_12];
      destination.add_11rb$(item.toString());
    }
    var fields = mutableListOf([listOf([tmp$, tmp$_0, new CryptoACFormField(tmp$_1, tmp$_2, tmp$_3, destination, cryptoType.toString(), 'darkTextField')])]);
    switch (this.props.rmType.name) {
      case 'CRYPTOAC':
        var tmp$_13 = RMInterfaceCryptoACParameters$Companion_getInstance();
        var tmp$_14;
        if (rmParameters != null) {
          var tmp$_15;
          tmp$_14 = Kotlin.isType(tmp$_15 = rmParameters, RMInterfaceCryptoACParameters) ? tmp$_15 : throwCCE();
        } else
          tmp$_14 = null;
        tmp$_4 = tmp$_13.toMap_8hxbyy$(tmp$_14);
        break;
      case 'NONE':
        tmp$_4 = emptyList();
        break;
      default:tmp$_4 = Kotlin.noWhenBranchMatched();
        break;
    }
    fields.addAll_brywnq$(tmp$_4);
    switch (this.props.mmType.name) {
      case 'MYSQL':
        var tmp$_16 = MMInterfaceMySQLParameters$Companion_getInstance();
        var tmp$_17;
        if (mmParameters != null) {
          var tmp$_18;
          tmp$_17 = Kotlin.isType(tmp$_18 = mmParameters, MMInterfaceMySQLParameters) ? tmp$_18 : throwCCE();
        } else
          tmp$_17 = null;
        tmp$_5 = tmp$_16.toMap_169afz$(tmp$_17);
        break;
      case 'REDIS':
        var tmp$_19 = MMInterfaceRedisParameters$Companion_getInstance();
        var tmp$_20;
        if (mmParameters != null) {
          var tmp$_21;
          tmp$_20 = Kotlin.isType(tmp$_21 = mmParameters, MMInterfaceRedisParameters) ? tmp$_21 : throwCCE();
        } else
          tmp$_20 = null;
        tmp$_5 = tmp$_19.toMap_4poj22$(tmp$_20);
        break;
      default:tmp$_5 = Kotlin.noWhenBranchMatched();
        break;
    }
    fields.addAll_brywnq$(tmp$_5);
    switch (this.props.dmType.name) {
      case 'CRYPTOAC':
        var tmp$_22 = DMInterfaceCryptoACParameters$Companion_getInstance();
        var tmp$_23;
        if (dmParameters != null) {
          var tmp$_24;
          tmp$_23 = Kotlin.isType(tmp$_24 = dmParameters, DMInterfaceCryptoACParameters) ? tmp$_24 : throwCCE();
        } else
          tmp$_23 = null;
        tmp$_6 = tmp$_22.toMap_2qkhay$(tmp$_23);
        break;
      case 'MOSQUITTO':
        var tmp$_25 = DMInterfaceMosquittoParameters$Companion_getInstance();
        var tmp$_26;
        if (dmParameters != null) {
          var tmp$_27;
          tmp$_26 = Kotlin.isType(tmp$_27 = dmParameters, DMInterfaceMosquittoParameters) ? tmp$_27 : throwCCE();
        } else
          tmp$_26 = null;
        tmp$_6 = tmp$_25.toMap_4xwjay$(tmp$_26);
        break;
      default:tmp$_6 = Kotlin.noWhenBranchMatched();
        break;
    }
    fields.addAll_brywnq$(tmp$_6);
    if (this.props.coreType === CoreType$RBAC_CLOUD_getInstance()) {
      tmp$_7 = new CryptoACFormField(SERVER_getInstance().OPA_URL, replace(SERVER_getInstance().OPA_URL, '_', ' '), InputType$text_getInstance(), void 0, opaParameters != null ? opaParameters.url : null, 'darkTextField');
      tmp$_8 = new CryptoACFormField(SERVER_getInstance().OPA_PORT, replace(SERVER_getInstance().OPA_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString(opaParameters != null ? opaParameters.port : null), 'darkTextField');
      tmp$_9 = SERVER_getInstance().OPA_POLICY_MODEL;
      tmp$_10 = replace(SERVER_getInstance().OPA_POLICY_MODEL, '_', ' ');
      tmp$_11 = InputType$select_getInstance();
      var $receiver_0 = PolicyModel$values();
      var destination_0 = ArrayList_init_0($receiver_0.length);
      var tmp$_28;
      for (tmp$_28 = 0; tmp$_28 !== $receiver_0.length; ++tmp$_28) {
        var item_0 = $receiver_0[tmp$_28];
        destination_0.add_11rb$(item_0.toString());
      }
      fields.addAll_brywnq$(listOf_0(listOf([tmp$_7, tmp$_8, new CryptoACFormField(tmp$_9, tmp$_10, tmp$_11, destination_0, toString(opaParameters != null ? opaParameters.policyModel : null), 'darkTextField')])));
    }setState(this, Dashboard$getFieldsFromParameters$lambda_0(fields));
  };
  Dashboard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dashboard',
    interfaces: [RComponent]
  };
  function dashboard$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function dashboard$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Dashboard), dashboard$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function dashboard(handler) {
    return ensureNotNull(createElement(dashboard$lambda(handler)));
  }
  function styledDiv$lambda_8(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function logger$lambda_13() {
    return Unit;
  }
  var logger_13;
  function CloudDashboard() {
    RBACDashboard.call(this);
  }
  function CloudDashboard$render$lambda$lambda$lambda($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$fetchedUsers) {
    return function ($receiver) {
      $receiver.users = closure$fetchedUsers;
      return Unit;
    };
  }
  function Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudDashboard = this$CloudDashboard_0;
  }
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudDashboard.getUsers(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedUsers = this.result_0;
            if (fetchedUsers != null) {
              return setState(this.local$this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(fetchedUsers)), Unit;
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
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$result, closure$username) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$result, assignmentColumns, 'Assignments of user ' + closure$username));
      return Unit;
    };
  }
  function Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$CloudDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$CloudDashboard = this$CloudDashboard_0;
    this.local$username = void 0;
  }
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$username = first_0(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudDashboard.getAssignments_rkkr90$(this.local$username, void 0, this);
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
              return setState(this.local$this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(result, this.local$username)), Unit;
            } else {
              return this.local$this$CloudDashboard.props.handleDisplayAlert(OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
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
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$CloudDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$CloudDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CloudDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(it, this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$CloudDashboard.state.users;
      this$.tableColumns = userColumns;
      this$.title = 'Users';
      this$.onRefresh = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudDashboard);
      this$.onElementClick = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CloudDashboard);
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_0(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda$lambda(this$CloudDashboard, $receiver));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda_0(this$CloudDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda);
      $receiver.child_30b5ua$(cryptoACTable(CloudDashboard$render$lambda$lambda$lambda$lambda_0(this$CloudDashboard, $receiver)));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$fetchedRoles) {
    return function ($receiver) {
      $receiver.roles = closure$fetchedRoles;
      return Unit;
    };
  }
  function Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudDashboard = this$CloudDashboard_0;
  }
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudDashboard.getRoles(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedRoles = this.result_0;
            if (fetchedRoles != null) {
              return setState(this.local$this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(fetchedRoles)), Unit;
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
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$assignments, closure$roleName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$assignments.v, assignmentColumns, 'Assignments of role ' + closure$roleName));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$permissions, closure$roleName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$permissions.v, permissionColumns, 'Permissions of role ' + closure$roleName));
      return Unit;
    };
  }
  function Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$CloudDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$CloudDashboard = this$CloudDashboard_0;
    this.local$roleName = void 0;
    this.local$assignments = void 0;
  }
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$roleName = first_0(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudDashboard.getAssignments_rkkr90$(void 0, this.local$roleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$assignments = {v: this.result_0};
            this.state_0 = 3;
            this.result_0 = this.local$this$CloudDashboard.getPermissions_rkkr90$(this.local$roleName, void 0, this);
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
              setState(this.local$this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this.local$assignments, this.local$roleName));
            } else {
              this.local$this$CloudDashboard.props.handleDisplayAlert(OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
            }

            var tmp$_0 = permissions.v != null;
            if (tmp$_0) {
              tmp$_0 = !permissions.v.isEmpty();
            }
            if (tmp$_0) {
              return setState(this.local$this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(permissions, this.local$roleName)), Unit;
            } else {
              return this.local$this$CloudDashboard.props.handleDisplayAlert(OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
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
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$CloudDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$CloudDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CloudDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(it, this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_0(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$CloudDashboard.state.roles;
      this$.tableColumns = roleColumns;
      this$.title = 'Roles';
      this$.onRefresh = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudDashboard);
      this$.onElementClick = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CloudDashboard);
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_2(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_0(this$CloudDashboard, $receiver));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda_1(this$CloudDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda_1);
      $receiver.child_30b5ua$(cryptoACTable(CloudDashboard$render$lambda$lambda$lambda$lambda_2(this$CloudDashboard, $receiver)));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$fetchedFiles) {
    return function ($receiver) {
      $receiver.files = closure$fetchedFiles;
      return Unit;
    };
  }
  function Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudDashboard = this$CloudDashboard_0;
  }
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3;
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudDashboard.getFiles(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedFiles = this.result_0;
            if (fetchedFiles != null) {
              return setState(this.local$this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(fetchedFiles)), Unit;
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
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$permissions, closure$fileName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$permissions.v, permissionColumns, 'Permissions for file ' + closure$fileName));
      return Unit;
    };
  }
  function Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$CloudDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$CloudDashboard = this$CloudDashboard_0;
    this.local$fileName = void 0;
  }
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4;
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fileName = first_0(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudDashboard.getPermissions_rkkr90$(void 0, this.local$fileName, this);
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
              return setState(this.local$this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(permissions, this.local$fileName)), Unit;
            } else {
              return this.local$this$CloudDashboard.props.handleDisplayAlert(OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
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
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$CloudDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$CloudDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$CloudDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(it, this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_1(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$CloudDashboard.state.files;
      this$.tableColumns = fileColumns;
      this$.title = 'Files';
      this$.onRefresh = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudDashboard);
      this$.onElementClick = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$CloudDashboard);
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_4(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_1(this$CloudDashboard, $receiver));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda_2(this$CloudDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda_3);
      $receiver.child_30b5ua$(cryptoACTable(CloudDashboard$render$lambda$lambda$lambda$lambda_4(this$CloudDashboard, $receiver)));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda(this$CloudDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudDashboard$render$lambda$lambda$lambda_0(this$CloudDashboard));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudDashboard$render$lambda$lambda$lambda_1(this$CloudDashboard));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudDashboard$render$lambda$lambda$lambda_2(this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda_3($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 6;
    return Unit;
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$fetchedAssignments) {
    return function ($receiver) {
      $receiver.assignments = closure$fetchedAssignments;
      return Unit;
    };
  }
  function Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudDashboard = this$CloudDashboard_0;
  }
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.constructor = Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5;
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudDashboard.getAssignments_rkkr90$(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedAssignments = this.result_0;
            if (fetchedAssignments != null) {
              return setState(this.local$this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(fetchedAssignments)), Unit;
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
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudDashboard) {
    return function (it) {
      this$CloudDashboard.props.handleDisplayAlert(OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_2(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$CloudDashboard.state.assignments;
      this$.tableColumns = assignmentColumns;
      this$.title = 'User-Role Assignments';
      this$.onRefresh = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudDashboard);
      this$.onElementClick = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudDashboard);
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_6(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_2(this$CloudDashboard, $receiver));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda_4(this$CloudDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda_5);
      $receiver.child_30b5ua$(cryptoACTable(CloudDashboard$render$lambda$lambda$lambda$lambda_6(this$CloudDashboard, $receiver)));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 6;
    return Unit;
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$fetchedPermissions) {
    return function ($receiver) {
      $receiver.permissions = closure$fetchedPermissions;
      return Unit;
    };
  }
  function Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudDashboard = this$CloudDashboard_0;
  }
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.constructor = Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6;
  Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudDashboard.getPermissions_rkkr90$(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedPermissions = this.result_0;
            if (fetchedPermissions != null) {
              return setState(this.local$this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(fetchedPermissions)), Unit;
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
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$CloudDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$CloudDashboard) {
    return function (it) {
      this$CloudDashboard.props.handleDisplayAlert(OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_3(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$CloudDashboard.state.permissions;
      this$.tableColumns = permissionColumns;
      this$.title = 'Role-File Permissions';
      this$.onRefresh = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$CloudDashboard);
      this$.onElementClick = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$CloudDashboard);
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_8(this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_3(this$CloudDashboard, $receiver));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda_5(this$CloudDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda_7);
      $receiver.child_30b5ua$(cryptoACTable(CloudDashboard$render$lambda$lambda$lambda$lambda_8(this$CloudDashboard, $receiver)));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda_0(this$CloudDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda_3);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudDashboard$render$lambda$lambda$lambda_4(this$CloudDashboard));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudDashboard$render$lambda$lambda$lambda_5(this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_4(closure$it) {
    return function ($receiver) {
      $receiver.item = true;
      $receiver.xs = closure$it;
      $receiver.sm = closure$it;
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$cryptoACTableData) {
    return function ($receiver) {
      $receiver.openedTables.remove_11rb$(closure$cryptoACTableData);
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$CloudDashboard) {
    return function (it) {
      setState(this$CloudDashboard, CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$cryptoACTableData));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, this$, this$CloudDashboard) {
    return function ($receiver) {
      this$.elements = closure$cryptoACTableData.elements;
      this$.tableColumns = closure$cryptoACTableData.columns;
      this$.title = closure$cryptoACTableData.title;
      this$.onClose = CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$CloudDashboard);
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$CloudDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, $receiver, this$CloudDashboard));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda$lambda_10(closure$it, closure$cryptoACTableData, this$CloudDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_4(closure$it));
      $receiver.child_30b5ua$(cryptoACTable(CloudDashboard$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$CloudDashboard, $receiver)));
      return Unit;
    };
  }
  function CloudDashboard$render$lambda$lambda$lambda_6(closure$it, this$CloudDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudDashboard$render$lambda$lambda$lambda$lambda_9);
      var numberOfTables = this$CloudDashboard.getNumberOfItemsFromSpan_za3lpa$(closure$it);
      for (var i = 0; i < numberOfTables; i++) {
        var cryptoACTableData = this$CloudDashboard.state.openedTables.get_za3lpa$(i);
        $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudDashboard$render$lambda$lambda$lambda$lambda_10(closure$it, cryptoACTableData, this$CloudDashboard));
      }
      return Unit;
    };
  }
  CloudDashboard.prototype.render_ss14n$ = function ($receiver) {
    css.s;
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_8);
    var $receiver_1 = $receiver_0.css;
    set_marginTop($receiver_1, get_px(10));
    set_marginBottom($receiver_1, get_px(10));
    set_maxHeight($receiver_1, get_px(500));
    if (this.props.userIsAdmin) {
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, CloudDashboard$render$lambda$lambda(this));
    }$receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, CloudDashboard$render$lambda$lambda_0(this));
    var tmp$;
    tmp$ = this.getColumnsForTables_za3lpa$(this.state.openedTables.size).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, CloudDashboard$render$lambda$lambda$lambda_6(element, this));
    }
    $receiver.child_30b5ua$($receiver_0.create());
  };
  function CloudDashboard$init$lambda() {
    return 'Initializing the state of the RBACCLOUDDashboard component';
  }
  function CloudDashboard$init$lambda$lambda(this$CloudDashboard, closure$fetchedUsers, closure$fetchedRoles, closure$fetchedFiles, closure$fetchedAssignments, closure$fetchedPermissions) {
    return function ($receiver) {
      if (this$CloudDashboard.props.userIsAdmin && closure$fetchedUsers.v != null) {
        $receiver.users = closure$fetchedUsers.v;
      }if (this$CloudDashboard.props.userIsAdmin && closure$fetchedRoles.v != null) {
        $receiver.roles = closure$fetchedRoles.v;
      }if (this$CloudDashboard.props.userIsAdmin && closure$fetchedFiles.v != null) {
        $receiver.files = closure$fetchedFiles.v;
      }if (closure$fetchedAssignments != null) {
        $receiver.assignments = closure$fetchedAssignments;
      }if (closure$fetchedPermissions.v != null) {
        $receiver.permissions = closure$fetchedPermissions.v;
      }return Unit;
    };
  }
  function Coroutine$CloudDashboard$init$lambda(this$CloudDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CloudDashboard = this$CloudDashboard_0;
    this.local$fetchedUsers = void 0;
    this.local$fetchedRoles = void 0;
    this.local$fetchedFiles = void 0;
    this.local$fetchedPermissions = void 0;
    this.local$fetchedAssignments = void 0;
  }
  Coroutine$CloudDashboard$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CloudDashboard$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CloudDashboard$init$lambda.prototype.constructor = Coroutine$CloudDashboard$init$lambda;
  Coroutine$CloudDashboard$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fetchedUsers = {v: emptyList()};
            this.local$fetchedRoles = {v: emptyList()};
            this.local$fetchedFiles = {v: emptyList()};
            this.local$fetchedPermissions = {v: emptyList()};
            this.state_0 = 2;
            this.result_0 = this.local$this$CloudDashboard.getAssignments_rkkr90$(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$fetchedAssignments = this.result_0;
            if (this.local$fetchedAssignments != null) {
              this.state_0 = 3;
              this.result_0 = this.local$this$CloudDashboard.getPermissions_rkkr90$(void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 10;
              continue;
            }

          case 3:
            this.local$fetchedPermissions.v = this.result_0;
            if (this.local$fetchedPermissions.v != null && this.local$this$CloudDashboard.props.userIsAdmin) {
              this.state_0 = 4;
              this.result_0 = this.local$this$CloudDashboard.getUsers(this);
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
              this.result_0 = this.local$this$CloudDashboard.getRoles(this);
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
              this.result_0 = this.local$this$CloudDashboard.getFiles(this);
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
            return setState(this.local$this$CloudDashboard, CloudDashboard$init$lambda$lambda(this.local$this$CloudDashboard, this.local$fetchedUsers, this.local$fetchedRoles, this.local$fetchedFiles, this.local$fetchedAssignments, this.local$fetchedPermissions)), Unit;
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
  function CloudDashboard$init$lambda_0(this$CloudDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CloudDashboard$init$lambda(this$CloudDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  CloudDashboard.prototype.init_b4e81d$ = function ($receiver) {
    logger_13.info_nq59yw$(CloudDashboard$init$lambda);
    $receiver.users = emptyList();
    $receiver.roles = emptyList();
    $receiver.files = emptyList();
    $receiver.assignments = emptyList();
    $receiver.permissions = emptyList();
    $receiver.openedTables = ArrayList_init();
    launch(MainScope(), void 0, void 0, CloudDashboard$init$lambda_0(this));
  };
  CloudDashboard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloudDashboard',
    interfaces: [RBACDashboard]
  };
  function rbacCLOUDDashboard$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function rbacCLOUDDashboard$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CloudDashboard), rbacCLOUDDashboard$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function rbacCLOUDDashboard(handler) {
    return ensureNotNull(createElement(rbacCLOUDDashboard$lambda(handler)));
  }
  function logger$lambda_14() {
    return Unit;
  }
  var logger_14;
  function RBACDashboard() {
    RComponent_init(this);
  }
  RBACDashboard.prototype.getUsers = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().CRYPTOAC + replace(API_getInstance().USERS, '{Core}', this.props.coreType.toString());
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance(), ElementType$USER_getInstance(), continuation);
  };
  RBACDashboard.prototype.getRoles = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().CRYPTOAC + replace(API_getInstance().ROLES, '{Core}', this.props.coreType.toString());
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance(), ElementType$ROLE_getInstance(), continuation);
  };
  RBACDashboard.prototype.getFiles = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().CRYPTOAC + replace(API_getInstance().FILES, '{Core}', this.props.coreType.toString());
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance(), ElementType$FILE_getInstance(), continuation);
  };
  RBACDashboard.prototype.getAssignments_rkkr90$ = function (username, roleName, continuation) {
    if (username === void 0)
      username = null;
    if (roleName === void 0)
      roleName = null;
    var actualEndpoint = baseURL + API_getInstance().CRYPTOAC + replace(API_getInstance().ASSIGNMENTS, '{Core}', this.props.coreType.toString()) + '?' + (username != null ? SERVER_getInstance().USERNAME + '=' + toString(username) : '' + (roleName != null ? SERVER_getInstance().ROLE_NAME + '=' + toString(roleName) : ''));
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), ElementType$ASSIGNMENT_getInstance(), continuation);
  };
  RBACDashboard.prototype.getPermissions_rkkr90$ = function (roleName, fileName, continuation) {
    if (roleName === void 0)
      roleName = null;
    if (fileName === void 0)
      fileName = null;
    var actualEndpoint = baseURL + API_getInstance().CRYPTOAC + replace(API_getInstance().PERMISSIONS, '{Core}', this.props.coreType.toString()) + '?' + (roleName != null ? SERVER_getInstance().ROLE_NAME + '=' + toString(roleName) : '' + (fileName != null ? SERVER_getInstance().FILE_NAME + '=' + toString(fileName) : ''));
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), ElementType$PERMISSION_getInstance(), continuation);
  };
  function RBACDashboard$getElements$lambda(closure$type) {
    return function () {
      return 'Getting the list of elements of type ' + closure$type;
    };
  }
  function RBACDashboard$getElements$lambda_0(closure$endpoint) {
    return function () {
      return 'Sending get request to ' + closure$endpoint;
    };
  }
  function RBACDashboard$getElements$lambda_1() {
    return 'CryptoAC is unreachable';
  }
  function RBACDashboard$getElements$lambda_2(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function RBACDashboard$getElements$lambda_3(closure$type) {
    return function () {
      return 'Got 0 elements of type ' + closure$type;
    };
  }
  function RBACDashboard$getElements$lambda_4(closure$type, closure$outcomeCode) {
    return function () {
      return 'Error while getting elements of type ' + closure$type + ': ' + closure$outcomeCode;
    };
  }
  function Coroutine$getElements_ofj3vx$($this, endpoint_0, errorCode_0, type_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 14;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_1 = void 0;
    this.local$endpoint = endpoint_0;
    this.local$errorCode = errorCode_0;
    this.local$type = type_0;
  }
  Coroutine$getElements_ofj3vx$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getElements_ofj3vx$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getElements_ofj3vx$.prototype.constructor = Coroutine$getElements_ofj3vx$;
  Coroutine$getElements_ofj3vx$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            logger_14.info_nq59yw$(RBACDashboard$getElements$lambda(this.local$type));
            logger_14.info_nq59yw$(RBACDashboard$getElements$lambda_0(this.local$endpoint));
            this.$this.props.handleChangeBackdropIsOpen(true);
            this.exceptionState_0 = 2;
            var $receiver = this.$this.props.httpClient;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, this.local$endpoint);
            $receiver_1.method = HttpMethod_0.Companion.Get;
            this.state_0 = 1;
            this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.result_0;
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 14;
            this.finallyPath_0 = [4];
            this.state_0 = 3;
            continue;
          case 2:
            this.finallyPath_0 = [14];
            this.exceptionState_0 = 3;
            var e = this.exception_0;
            if (Kotlin.isType(e, Error_0)) {
              if (equals(e.message, 'Fail to fetch')) {
                logger_14.error_nq59yw$(RBACDashboard$getElements$lambda_1);
                this.$this.props.handleDisplayAlert(OutcomeCode$CODE_046_CRYPTOAC_CONNECTION_TIMEOUT_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
              } else {
                logger_14.error_nq59yw$(RBACDashboard$getElements$lambda_2(e));
                console.log(e);
                this.$this.props.handleDisplayAlert(OutcomeCode$CODE_049_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
              }
              this.local$tmp$ = null;
            } else
              throw e;
            this.finallyPath_0 = [4];
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 14;
            this.$this.props.handleChangeBackdropIsOpen(false);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 4:
            var httpResponse = this.local$tmp$;
            if (httpResponse != null) {
              if ((tmp$ = httpResponse.status) != null ? tmp$.equals(HttpStatusCode.Companion.OK) : null) {
                switch (this.local$type.name) {
                  case 'USER':
                    this.state_0 = 10;
                    this.result_0 = bodyAsText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'ROLE':
                    this.state_0 = 9;
                    this.result_0 = bodyAsText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'FILE':
                    this.state_0 = 8;
                    this.result_0 = bodyAsText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'ASSIGNMENT':
                    this.state_0 = 7;
                    this.result_0 = bodyAsText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  case 'PERMISSION':
                    this.state_0 = 6;
                    this.result_0 = bodyAsText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  default:this.local$tmp$_1 = Kotlin.noWhenBranchMatched();
                    this.state_0 = 11;
                    continue;
                }
              } else {
                this.state_0 = 5;
                this.result_0 = bodyAsText(httpResponse, void 0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            } else {
              this.local$tmp$_1 = null;
              this.state_0 = 13;
              continue;
            }

          case 5:
            var text = this.result_0;
            var $receiver_0 = myJson;
            var tmp$_0;
            var outcomeCode = $receiver_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer_0($receiver_0.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$_0 : throwCCE(), text);
            if (outcomeCode === this.local$errorCode) {
              logger_14.info_nq59yw$(RBACDashboard$getElements$lambda_3(this.local$type));
              this.local$tmp$_1 = emptyList();
            } else {
              logger_14.warn_nq59yw$(RBACDashboard$getElements$lambda_4(this.local$type, outcomeCode));
              this.$this.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance());
              this.local$tmp$_1 = null;
            }

            this.state_0 = 12;
            continue;
          case 6:
            var $receiver_2 = myJson;
            var string = this.result_0;
            var tmp$_1;
            var permissions = $receiver_2.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer_0($receiver_2.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(PermissionTuple), [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), string);
            var destination = ArrayList_init_0(collectionSizeOrDefault(permissions, 10));
            var tmp$_2;
            tmp$_2 = permissions.iterator();
            while (tmp$_2.hasNext()) {
              var item = tmp$_2.next();
              destination.add_11rb$(item.toArray());
            }

            this.local$tmp$_1 = destination;
            this.state_0 = 11;
            continue;
          case 7:
            var $receiver_3 = myJson;
            var string_0 = this.result_0;
            var tmp$_3;
            var assignments = $receiver_3.decodeFromString_awif5v$(Kotlin.isType(tmp$_3 = serializer_0($receiver_3.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(RoleTuple), [], false))], false)), KSerializer) ? tmp$_3 : throwCCE(), string_0);
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault(assignments, 10));
            var tmp$_4;
            tmp$_4 = assignments.iterator();
            while (tmp$_4.hasNext()) {
              var item_0 = tmp$_4.next();
              destination_0.add_11rb$(item_0.toArray());
            }

            this.local$tmp$_1 = destination_0;
            this.state_0 = 11;
            continue;
          case 8:
            var $receiver_4 = myJson;
            var string_1 = this.result_0;
            var tmp$_5;
            var files = $receiver_4.decodeFromString_awif5v$(Kotlin.isType(tmp$_5 = serializer_0($receiver_4.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(File), [], false))], false)), KSerializer) ? tmp$_5 : throwCCE(), string_1);
            var destination_1 = ArrayList_init_0(collectionSizeOrDefault(files, 10));
            var tmp$_6;
            tmp$_6 = files.iterator();
            while (tmp$_6.hasNext()) {
              var item_1 = tmp$_6.next();
              destination_1.add_11rb$(item_1.toArray());
            }

            this.local$tmp$_1 = destination_1;
            this.state_0 = 11;
            continue;
          case 9:
            var $receiver_5 = myJson;
            var string_2 = this.result_0;
            var tmp$_7;
            var roles = $receiver_5.decodeFromString_awif5v$(Kotlin.isType(tmp$_7 = serializer_0($receiver_5.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(Role), [], false))], false)), KSerializer) ? tmp$_7 : throwCCE(), string_2);
            var destination_2 = ArrayList_init_0(collectionSizeOrDefault(roles, 10));
            var tmp$_8;
            tmp$_8 = roles.iterator();
            while (tmp$_8.hasNext()) {
              var item_2 = tmp$_8.next();
              destination_2.add_11rb$(item_2.toArray());
            }

            this.local$tmp$_1 = destination_2;
            this.state_0 = 11;
            continue;
          case 10:
            var $receiver_6 = myJson;
            var string_3 = this.result_0;
            var tmp$_9;
            var users = $receiver_6.decodeFromString_awif5v$(Kotlin.isType(tmp$_9 = serializer_0($receiver_6.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(User), [], false))], false)), KSerializer) ? tmp$_9 : throwCCE(), string_3);
            var destination_3 = ArrayList_init_0(collectionSizeOrDefault(users, 10));
            var tmp$_10;
            tmp$_10 = users.iterator();
            while (tmp$_10.hasNext()) {
              var item_3 = tmp$_10.next();
              destination_3.add_11rb$(item_3.toArray());
            }

            this.local$tmp$_1 = destination_3;
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            this.state_0 = 13;
            continue;
          case 13:
            return this.local$tmp$_1;
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
  RBACDashboard.prototype.getElements_ofj3vx$ = function (endpoint_0, errorCode_0, type_0, continuation_0, suspended) {
    var instance = new Coroutine$getElements_ofj3vx$(this, endpoint_0, errorCode_0, type_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  RBACDashboard.prototype.getColumnsForTables_za3lpa$ = function (numberOfTables) {
    var tmp$;
    var tablesLeft = numberOfTables;
    var columnsForRow = ArrayList_init();
    while (tablesLeft > 0) {
      switch (tablesLeft) {
        case 1:
          columnsForRow.add_11rb$(12);
          tmp$ = 0;
          break;
        case 2:
          columnsForRow.add_11rb$(6);
          tmp$ = 0;
          break;
        default:columnsForRow.add_11rb$(4);
          tmp$ = tablesLeft - 3 | 0;
          break;
      }
      tablesLeft = tmp$;
    }
    return columnsForRow;
  };
  RBACDashboard.prototype.getNumberOfItemsFromSpan_za3lpa$ = function (span) {
    switch (span) {
      case 12:
        return 1;
      case 6:
        return 2;
      default:return 3;
    }
  };
  RBACDashboard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RBACDashboard',
    interfaces: [RComponent]
  };
  function styledDiv$lambda_9(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function logger$lambda_15() {
    return Unit;
  }
  var logger_15;
  function MQTTDashboard() {
    RBACDashboard.call(this);
  }
  function MQTTDashboard$render$lambda$lambda$lambda($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$fetchedUsers) {
    return function ($receiver) {
      $receiver.users = closure$fetchedUsers;
      return Unit;
    };
  }
  function Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTDashboard = this$MQTTDashboard_0;
  }
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTDashboard.getUsers(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedUsers = this.result_0;
            if (fetchedUsers != null) {
              return setState(this.local$this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(fetchedUsers)), Unit;
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
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$result, closure$username) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$result, assignmentColumns, 'Assignments of user ' + closure$username));
      return Unit;
    };
  }
  function Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$MQTTDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$MQTTDashboard = this$MQTTDashboard_0;
    this.local$username = void 0;
  }
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$username = first_0(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTDashboard.getAssignments_rkkr90$(this.local$username, void 0, this);
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
              return setState(this.local$this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(result, this.local$username)), Unit;
            } else {
              return this.local$this$MQTTDashboard.props.handleDisplayAlert(OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
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
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$MQTTDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it_0, this$MQTTDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$MQTTDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(it, this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTDashboard.state.users;
      this$.tableColumns = userColumns;
      this$.title = 'Users';
      this$.onRefresh = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTDashboard);
      this$.onElementClick = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$MQTTDashboard);
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_0(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda(this$MQTTDashboard, $receiver));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda_0(this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda);
      $receiver.child_30b5ua$(cryptoACTable(MQTTDashboard$render$lambda$lambda$lambda$lambda_0(this$MQTTDashboard, $receiver)));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$fetchedRoles) {
    return function ($receiver) {
      $receiver.roles = closure$fetchedRoles;
      return Unit;
    };
  }
  function Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTDashboard = this$MQTTDashboard_0;
  }
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTDashboard.getRoles(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedRoles = this.result_0;
            if (fetchedRoles != null) {
              return setState(this.local$this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(fetchedRoles)), Unit;
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
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$assignments, closure$roleName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$assignments.v, assignmentColumns, 'Assignments of role ' + closure$roleName));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$permissions, closure$roleName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$permissions.v, permissionColumns, 'Permissions of role ' + closure$roleName));
      return Unit;
    };
  }
  function Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$MQTTDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$MQTTDashboard = this$MQTTDashboard_0;
    this.local$roleName = void 0;
    this.local$assignments = void 0;
  }
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$roleName = first_0(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTDashboard.getAssignments_rkkr90$(void 0, this.local$roleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$assignments = {v: this.result_0};
            this.state_0 = 3;
            this.result_0 = this.local$this$MQTTDashboard.getPermissions_rkkr90$(this.local$roleName, void 0, this);
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
              setState(this.local$this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this.local$assignments, this.local$roleName));
            } else {
              this.local$this$MQTTDashboard.props.handleDisplayAlert(OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
            }

            var tmp$_0 = permissions.v != null;
            if (tmp$_0) {
              tmp$_0 = !permissions.v.isEmpty();
            }
            if (tmp$_0) {
              return setState(this.local$this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(permissions, this.local$roleName)), Unit;
            } else {
              return this.local$this$MQTTDashboard.props.handleDisplayAlert(OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
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
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$MQTTDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it_0, this$MQTTDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$MQTTDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(it, this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_0(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTDashboard.state.roles;
      this$.tableColumns = roleColumns;
      this$.title = 'Roles';
      this$.onRefresh = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTDashboard);
      this$.onElementClick = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$MQTTDashboard);
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_2(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_0(this$MQTTDashboard, $receiver));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda_1(this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda_1);
      $receiver.child_30b5ua$(cryptoACTable(MQTTDashboard$render$lambda$lambda$lambda$lambda_2(this$MQTTDashboard, $receiver)));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$fetchedFiles) {
    return function ($receiver) {
      $receiver.files = closure$fetchedFiles;
      return Unit;
    };
  }
  function Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTDashboard = this$MQTTDashboard_0;
  }
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3;
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTDashboard.getFiles(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedFiles = this.result_0;
            if (fetchedFiles != null) {
              return setState(this.local$this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(fetchedFiles)), Unit;
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
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$permissions, closure$fileName) {
    return function ($receiver) {
      $receiver.openedTables.add_11rb$(new CryptoACTableData(closure$permissions.v, permissionColumns, 'Permissions for file ' + closure$fileName));
      return Unit;
    };
  }
  function Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$MQTTDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$this$MQTTDashboard = this$MQTTDashboard_0;
    this.local$fileName = void 0;
  }
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4;
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fileName = first_0(this.local$closure$it);
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTDashboard.getPermissions_rkkr90$(void 0, this.local$fileName, this);
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
              return setState(this.local$this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(permissions, this.local$fileName)), Unit;
            } else {
              return this.local$this$MQTTDashboard.props.handleDisplayAlert(OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), CryptoACAlertSeverity$INFO_getInstance()), Unit;
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
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$MQTTDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$it_0, this$MQTTDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$MQTTDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(it, this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_1(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTDashboard.state.files;
      this$.tableColumns = fileColumns;
      this$.title = 'Files';
      this$.onRefresh = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTDashboard);
      this$.onElementClick = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$MQTTDashboard);
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_4(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_1(this$MQTTDashboard, $receiver));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda_2(this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda_3);
      $receiver.child_30b5ua$(cryptoACTable(MQTTDashboard$render$lambda$lambda$lambda$lambda_4(this$MQTTDashboard, $receiver)));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda(this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda$lambda_0(this$MQTTDashboard));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda$lambda_1(this$MQTTDashboard));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda$lambda_2(this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda_3($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 6;
    return Unit;
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$fetchedAssignments) {
    return function ($receiver) {
      $receiver.assignments = closure$fetchedAssignments;
      return Unit;
    };
  }
  function Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTDashboard = this$MQTTDashboard_0;
  }
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.constructor = Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5;
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTDashboard.getAssignments_rkkr90$(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedAssignments = this.result_0;
            if (fetchedAssignments != null) {
              return setState(this.local$this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(fetchedAssignments)), Unit;
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
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTDashboard) {
    return function (it) {
      this$MQTTDashboard.props.handleDisplayAlert(OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_2(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTDashboard.state.assignments;
      this$.tableColumns = assignmentColumns;
      this$.title = 'User-Role Assignments';
      this$.onRefresh = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTDashboard);
      this$.onElementClick = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTDashboard);
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_6(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_2(this$MQTTDashboard, $receiver));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda_4(this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda_5);
      $receiver.child_30b5ua$(cryptoACTable(MQTTDashboard$render$lambda$lambda$lambda$lambda_6(this$MQTTDashboard, $receiver)));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 6;
    return Unit;
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$fetchedPermissions) {
    return function ($receiver) {
      $receiver.permissions = closure$fetchedPermissions;
      return Unit;
    };
  }
  function Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTDashboard = this$MQTTDashboard_0;
  }
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.constructor = Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6;
  Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTDashboard.getPermissions_rkkr90$(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fetchedPermissions = this.result_0;
            if (fetchedPermissions != null) {
              return setState(this.local$this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(fetchedPermissions)), Unit;
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
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$MQTTDashboard) {
    return function (it) {
      launch(MainScope(), void 0, void 0, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$MQTTDashboard) {
    return function (it) {
      this$MQTTDashboard.props.handleDisplayAlert(OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), CryptoACAlertSeverity$INFO_getInstance());
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_3(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.elements = this$MQTTDashboard.state.permissions;
      this$.tableColumns = permissionColumns;
      this$.title = 'Role-File Permissions';
      this$.onRefresh = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$MQTTDashboard);
      this$.onElementClick = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$MQTTDashboard);
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_8(this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_3(this$MQTTDashboard, $receiver));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda_5(this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda_7);
      $receiver.child_30b5ua$(cryptoACTable(MQTTDashboard$render$lambda$lambda$lambda$lambda_8(this$MQTTDashboard, $receiver)));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda_0(this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda_3);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda$lambda_4(this$MQTTDashboard));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda$lambda_5(this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_4(closure$it) {
    return function ($receiver) {
      $receiver.item = true;
      $receiver.xs = closure$it;
      $receiver.sm = closure$it;
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$cryptoACTableData) {
    return function ($receiver) {
      $receiver.openedTables.remove_11rb$(closure$cryptoACTableData);
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$MQTTDashboard) {
    return function (it) {
      setState(this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$cryptoACTableData));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, this$, this$MQTTDashboard) {
    return function ($receiver) {
      this$.elements = closure$cryptoACTableData.elements;
      this$.tableColumns = closure$cryptoACTableData.columns;
      this$.title = closure$cryptoACTableData.title;
      this$.onClose = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$MQTTDashboard);
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$MQTTDashboard, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, $receiver, this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_10(closure$it, closure$cryptoACTableData, this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_4(closure$it));
      $receiver.child_30b5ua$(cryptoACTable(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$MQTTDashboard, $receiver)));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda_6(closure$it, this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda_9);
      var numberOfTables = this$MQTTDashboard.getNumberOfItemsFromSpan_za3lpa$(closure$it);
      for (var i = 0; i < numberOfTables; i++) {
        var cryptoACTableData = this$MQTTDashboard.state.openedTables.get_za3lpa$(i);
        $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda$lambda$lambda_10(closure$it, cryptoACTableData, this$MQTTDashboard));
      }
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_6(closure$it) {
    return function ($receiver) {
      $receiver.item = true;
      $receiver.xs = closure$it;
      $receiver.sm = closure$it;
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(this$MQTTDashboard, closure$topicName) {
    return function ($receiver) {
      this$MQTTDashboard.state.mqttMessages.remove_11rb$(closure$topicName);
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(this$MQTTDashboard, closure$topicName) {
    return function (it) {
      setState(this$MQTTDashboard, MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(this$MQTTDashboard, closure$topicName));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$listOfMessages, this$, closure$topicName, this$MQTTDashboard) {
    return function ($receiver) {
      this$.elements = closure$listOfMessages;
      this$.tableColumns = mqttMessagesColumns;
      this$.title = 'Topic: ' + closure$topicName;
      this$.onClose = MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(this$MQTTDashboard, closure$topicName);
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_7(this$MQTTDashboard, closure$i, this$) {
    return function ($receiver) {
      var tmp$;
      var topicName = this$MQTTDashboard.props.topics.get_za3lpa$(closure$i);
      var listOfMessages = ArrayList_init();
      if ((tmp$ = this$MQTTDashboard.state.mqttMessages.get_11rb$(topicName)) != null) {
        var tmp$_0;
        tmp$_0 = tmp$.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          listOfMessages.add_11rb$([element]);
        }
      }this$.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda$lambda_10(listOfMessages, $receiver, topicName, this$MQTTDashboard));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda$lambda_12(closure$it, this$MQTTDashboard, closure$i) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_6(closure$it));
      $receiver.child_30b5ua$(cryptoACTable(MQTTDashboard$render$lambda$lambda$lambda$lambda$lambda_7(this$MQTTDashboard, closure$i, $receiver)));
      return Unit;
    };
  }
  function MQTTDashboard$render$lambda$lambda$lambda_7(closure$it, this$MQTTDashboard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTDashboard$render$lambda$lambda$lambda$lambda_11);
      var numberOfTables = this$MQTTDashboard.getNumberOfItemsFromSpan_za3lpa$(closure$it);
      for (var i = 0; i < numberOfTables; i++) {
        $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda$lambda$lambda_12(closure$it, this$MQTTDashboard, i));
      }
      return Unit;
    };
  }
  MQTTDashboard.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_9);
    var $receiver_1 = $receiver_0.css;
    set_marginTop($receiver_1, get_px(10));
    set_marginBottom($receiver_1, get_px(10));
    set_maxHeight($receiver_1, get_px(500));
    if (this.props.userIsAdmin) {
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda(this));
    }$receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda_0(this));
    var tmp$;
    tmp$ = this.getColumnsForTables_za3lpa$(this.state.openedTables.size).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda$lambda_6(element, this));
    }
    var tmp$_0;
    tmp$_0 = this.getColumnsForTables_za3lpa$(this.props.topics.size).iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTDashboard$render$lambda$lambda$lambda_7(element_0, this));
    }
    $receiver.child_30b5ua$($receiver_0.create());
  };
  function MQTTDashboard$init$lambda() {
    return 'Initializing the state of the RBACMQTTDashboard component';
  }
  function MQTTDashboard$init$lambda$lambda(closure$path) {
    return function ($receiver) {
      url_0($receiver, 'wss', get_host($receiver), get_port($receiver), closure$path);
      return Unit;
    };
  }
  function MQTTDashboard$init$lambda$lambda_0(this$MQTTDashboard, closure$fetchedUsers, closure$fetchedRoles, closure$fetchedFiles, closure$fetchedAssignments, closure$fetchedPermissions, closure$tempWSS) {
    return function ($receiver) {
      if (this$MQTTDashboard.props.userIsAdmin && closure$fetchedUsers.v != null) {
        $receiver.users = closure$fetchedUsers.v;
      }if (this$MQTTDashboard.props.userIsAdmin && closure$fetchedRoles.v != null) {
        $receiver.roles = closure$fetchedRoles.v;
      }if (this$MQTTDashboard.props.userIsAdmin && closure$fetchedFiles.v != null) {
        $receiver.files = closure$fetchedFiles.v;
      }if (closure$fetchedAssignments != null) {
        $receiver.assignments = closure$fetchedAssignments;
      }if (closure$fetchedPermissions.v != null) {
        $receiver.permissions = closure$fetchedPermissions.v;
      }$receiver.wss = closure$tempWSS;
      var tmp$;
      tmp$ = this$MQTTDashboard.props.topics.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = $receiver.mqttMessages;
        var value = ArrayList_init();
        tmp$_0.put_xwzc9p$(element, value);
      }
      return Unit;
    };
  }
  function MQTTDashboard$init$lambda$lambda_1(closure$message, closure$topic) {
    return function () {
      return 'RECEIVED MESSAGE ' + closure$message + ' in topic ' + closure$topic;
    };
  }
  function MQTTDashboard$init$lambda$lambda_2(closure$topic, closure$message) {
    return function ($receiver) {
      var $receiver_0 = $receiver.mqttMessages;
      var key = closure$topic;
      var tmp$;
      var value = $receiver_0.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        $receiver_0.put_xwzc9p$(key, answer);
        tmp$ = answer;
      } else {
        tmp$ = value;
      }
      tmp$.add_11rb$(closure$message);
      return Unit;
    };
  }
  function Coroutine$MQTTDashboard$init$lambda(this$MQTTDashboard_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MQTTDashboard = this$MQTTDashboard_0;
    this.local$fetchedUsers = void 0;
    this.local$fetchedRoles = void 0;
    this.local$fetchedFiles = void 0;
    this.local$fetchedPermissions = void 0;
    this.local$fetchedAssignments = void 0;
  }
  Coroutine$MQTTDashboard$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MQTTDashboard$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MQTTDashboard$init$lambda.prototype.constructor = Coroutine$MQTTDashboard$init$lambda;
  Coroutine$MQTTDashboard$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$fetchedUsers = {v: emptyList()};
            this.local$fetchedRoles = {v: emptyList()};
            this.local$fetchedFiles = {v: emptyList()};
            this.local$fetchedPermissions = {v: emptyList()};
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTDashboard.getAssignments_rkkr90$(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$fetchedAssignments = this.result_0;
            if (this.local$fetchedAssignments != null) {
              this.state_0 = 3;
              this.result_0 = this.local$this$MQTTDashboard.getPermissions_rkkr90$(void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 10;
              continue;
            }

          case 3:
            this.local$fetchedPermissions.v = this.result_0;
            if (this.local$fetchedPermissions.v != null && this.local$this$MQTTDashboard.props.userIsAdmin) {
              this.state_0 = 4;
              this.result_0 = this.local$this$MQTTDashboard.getUsers(this);
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
              this.result_0 = this.local$this$MQTTDashboard.getRoles(this);
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
              this.result_0 = this.local$this$MQTTDashboard.getFiles(this);
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
            var path = API_getInstance().CRYPTOAC + replace(API_getInstance().FILES, '{Core}', this.local$this$MQTTDashboard.props.coreType.toString());
            this.state_0 = 11;
            this.result_0 = webSocketSession(this.local$this$MQTTDashboard.props.httpClient, HttpMethod.Companion.Get, window.location.hostname, toInt(window.location.port), path, MQTTDashboard$init$lambda$lambda(path), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            var tempWSS = this.result_0;
            setState(this.local$this$MQTTDashboard, MQTTDashboard$init$lambda$lambda_0(this.local$this$MQTTDashboard, this.local$fetchedUsers, this.local$fetchedRoles, this.local$fetchedFiles, this.local$fetchedAssignments, this.local$fetchedPermissions, tempWSS));
            this.state_0 = 12;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = this.local$this$MQTTDashboard.state.wss.incoming.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            var serializedMQTTMessage = readText(ensureNotNull(Kotlin.isType(tmp$ = this.result_0, Frame$Text) ? tmp$ : null));
            var $receiver = myJson;
            var tmp$_0;
            var mqttMessage = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer_0($receiver.serializersModule, createKType(getKClass(MQTTMessage), [], false)), KSerializer) ? tmp$_0 : throwCCE(), serializedMQTTMessage);
            var message = mqttMessage.message;
            var topic = mqttMessage.topic;
            logger_15.warn_nq59yw$(MQTTDashboard$init$lambda$lambda_1(message, topic));
            setState(this.local$this$MQTTDashboard, MQTTDashboard$init$lambda$lambda_2(topic, message));
            this.state_0 = 12;
            continue;
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
  function MQTTDashboard$init$lambda_0(this$MQTTDashboard_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTDashboard$init$lambda(this$MQTTDashboard_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MQTTDashboard.prototype.init_b4e81d$ = function ($receiver) {
    logger_15.info_nq59yw$(MQTTDashboard$init$lambda);
    $receiver.users = emptyList();
    $receiver.roles = emptyList();
    $receiver.files = emptyList();
    $receiver.assignments = emptyList();
    $receiver.permissions = emptyList();
    $receiver.openedTables = ArrayList_init();
    $receiver.mqttMessages = HashMap_init();
    launch(MainScope(), void 0, void 0, MQTTDashboard$init$lambda_0(this));
  };
  MQTTDashboard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MQTTDashboard',
    interfaces: [RBACDashboard]
  };
  function rbacMQTTDashboard$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function rbacMQTTDashboard$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(MQTTDashboard), rbacMQTTDashboard$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function rbacMQTTDashboard(handler) {
    return ensureNotNull(createElement(rbacMQTTDashboard$lambda(handler)));
  }
  function styledImg$lambda(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function styledP$lambda_0(it) {
    return new P_init(html.emptyMap, it);
  }
  function ModuleItem() {
    RComponent_init(this);
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 4;
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ModuleItem) {
    return function ($receiver) {
      $receiver.attrs_37755u$(ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledImg$lambda(null, null));
      var this$ModuleItem_0 = this$ModuleItem;
      var $receiver_1 = $receiver_0.css;
      set_verticalAlign($receiver_1, VerticalAlign.Companion.middle);
      set_padding($receiver_1, '3px');
      set_marginTop($receiver_1, get_pct(25));
      set_maxWidth($receiver_1, get_pct(50));
      set_maxHeight($receiver_1, get_pct(50));
      set_width($receiver_1, LinearDimension.Companion.auto);
      set_height($receiver_1, LinearDimension.Companion.auto);
      $receiver_0.attrs.src = getImageFromModuleImplementation(this$ModuleItem_0.state.currentChoice);
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$newChoice) {
    return function ($receiver) {
      $receiver.changedByUser = true;
      $receiver.currentChoice = closure$newChoice;
      return Unit;
    };
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ModuleItem) {
    return function (newChoice) {
      setState(this$ModuleItem, ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(newChoice));
      this$ModuleItem.props.handleChangeChoice(newChoice);
      return Unit;
    };
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ModuleItem) {
    return function ($receiver) {
      $receiver.name = this$ModuleItem.props.name;
      $receiver.label = 'Label';
      $receiver.defaultValue = this$ModuleItem.state.currentChoice;
      $receiver.onChange = ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ModuleItem);
      $receiver.options = this$ModuleItem.props.options;
      return Unit;
    };
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ModuleItem, this$) {
    return function ($receiver) {
      this$.child_30b5ua$(cryptoACSelect(ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ModuleItem)));
      $receiver.item = true;
      $receiver.xs = 12;
      return Unit;
    };
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ModuleItem) {
    return function ($receiver) {
      $receiver.attrs_37755u$(ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ModuleItem, $receiver));
      return Unit;
    };
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda_0(this$ModuleItem) {
    return function ($receiver) {
      $receiver.attrs_37755u$(ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ModuleItem));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, ModuleItem$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ModuleItem));
      return Unit;
    };
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda_0(this$ModuleItem) {
    return function ($receiver) {
      $receiver.attrs_37755u$(ModuleItem$render$lambda$lambda$lambda$lambda$lambda);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, ModuleItem$render$lambda$lambda$lambda$lambda$lambda_0(this$ModuleItem));
      return Unit;
    };
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.item = true;
    $receiver.xs = 8;
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.label = 'Throughput';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = Random.Default.nextInt_vux9f0$(0, 100);
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.label = 'Scalability';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = Random.Default.nextInt_vux9f0$(0, 100);
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.label = 'Reliability';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = Random.Default.nextInt_vux9f0$(0, 100);
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.label = 'Redundancy';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = Random.Default.nextInt_vux9f0$(0, 100);
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.label = 'Latency';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = Random.Default.nextInt_vux9f0$(0, 100);
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.label = 'CSP Lock-in';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = Random.Default.nextInt_vux9f0$(0, 100);
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.attrs_37755u$(ModuleItem$render$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.child_30b5ua$(cryptoACScore(ModuleItem$render$lambda$lambda$lambda$lambda$lambda_2));
    $receiver.child_30b5ua$(cryptoACScore(ModuleItem$render$lambda$lambda$lambda$lambda$lambda_3));
    $receiver.child_30b5ua$(cryptoACScore(ModuleItem$render$lambda$lambda$lambda$lambda$lambda_4));
    $receiver.child_30b5ua$(cryptoACScore(ModuleItem$render$lambda$lambda$lambda$lambda$lambda_5));
    $receiver.child_30b5ua$(cryptoACScore(ModuleItem$render$lambda$lambda$lambda$lambda$lambda_6));
    $receiver.child_30b5ua$(cryptoACScore(ModuleItem$render$lambda$lambda$lambda$lambda$lambda_7));
    return Unit;
  }
  function ModuleItem$render$lambda$lambda$lambda(this$ModuleItem) {
    return function ($receiver) {
      $receiver.attrs_37755u$(ModuleItem$render$lambda$lambda$lambda$lambda);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, ModuleItem$render$lambda$lambda$lambda$lambda_0(this$ModuleItem));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, ModuleItem$render$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function ModuleItem$render$lambda$lambda(this$ModuleItem) {
    return function ($receiver) {
      if (this$ModuleItem.props.options.isEmpty()) {
        var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledP$lambda_0);
        set_marginTop($receiver_0.css, get_pct(35));
        $receiver_0.unaryPlus_pdl1vz$('No option available');
        $receiver.child_30b5ua$($receiver_0.create());
      } else {
        $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, ModuleItem$render$lambda$lambda$lambda(this$ModuleItem));
      }
      return Unit;
    };
  }
  function ModuleItem$render$lambda(this$ModuleItem) {
    return function ($receiver) {
      $receiver.titleStyle = Themes_getInstance().plainPaperTitleStyle;
      $receiver.titleText = this$ModuleItem.props.title;
      $receiver.titleVariant = 'subtitle1';
      $receiver.setDivider = true;
      $receiver.dividerWidth = get_pct(95);
      $receiver.child = ensureNotNull(createElement(ModuleItem$render$lambda$lambda(this$ModuleItem)));
      return Unit;
    };
  }
  ModuleItem.prototype.render_ss14n$ = function ($receiver) {
    $receiver.child_30b5ua$(cryptoACPaper(ModuleItem$render$lambda(this)));
  };
  function ModuleItem$init$lambda(props, state) {
    if (state.justMounted || !state.changedByUser) {
      if (props.defaultValue != null) {
        state.currentChoice = ensureNotNull(props.defaultValue);
      }}state.changedByUser = false;
    state.justMounted = false;
    return Unit;
  }
  ModuleItem.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.justMounted = true;
    $receiver.changedByUser = false;
    get_js(getKClass(ModuleItem)).getDerivedStateFromProps = ModuleItem$init$lambda;
  };
  ModuleItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModuleItem',
    interfaces: [RComponent]
  };
  function moduleItem$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function moduleItem$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(ModuleItem), moduleItem$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function moduleItem(handler) {
    return ensureNotNull(createElement(moduleItem$lambda(handler)));
  }
  function styledDiv$lambda_10(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function br$lambda(closure$classes) {
    return function (it) {
      return new BR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function logger$lambda_16() {
    return Unit;
  }
  var logger_16;
  function Modules() {
    RComponent_init(this);
  }
  function Modules$render$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 12;
    return Unit;
  }
  function Modules$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Modules) {
    return function (event) {
      var tmp$;
      this$Modules.props.handleChangeCoreType(CoreType$valueOf((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value));
      return true;
    };
  }
  function Modules$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Modules) {
    return function ($receiver) {
      $receiver.name = 'CoreType';
      $receiver.disabled = false;
      $receiver.row = true;
      $receiver.defaultValue = this$Modules.props.coreType.toString();
      $receiver.onChange = Modules$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Modules);
      $receiver.options = listOf([new CryptoACRadioOption(CoreType$RBAC_CLOUD_getInstance().toPrettyString(), CoreType$RBAC_CLOUD_getInstance().toString(), 'primary'), new CryptoACRadioOption(CoreType$RBAC_MQTT_getInstance().toPrettyString(), CoreType$RBAC_MQTT_getInstance().toString(), 'primary')]);
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda$lambda(this$Modules) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Modules$render$lambda$lambda$lambda$lambda$lambda);
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_10);
      var this$Modules_0 = this$Modules;
      set_display($receiver_0.css, Display.inlineFlex);
      $receiver_0.child_30b5ua$(cryptoACRadioGroup(Modules$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Modules_0)));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda(this$Modules) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Modules$render$lambda$lambda$lambda$lambda(this$Modules));
      return Unit;
    };
  }
  function Modules$render$lambda$lambda(this$Modules) {
    return function ($receiver) {
      $receiver.titleStyle = Themes_getInstance().plainPaperTitleStyle;
      $receiver.titleText = 'Select the Core Type';
      $receiver.titleVariant = 'subtitle1';
      $receiver.setDivider = true;
      $receiver.dividerWidth = get_pct(95);
      $receiver.child = ensureNotNull(createElement(Modules$render$lambda$lambda$lambda(this$Modules)));
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda_0($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function Modules$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.item = true;
    $receiver.sm = 12;
    $receiver.md = 6;
    return Unit;
  }
  function Modules$render$lambda$lambda$lambda$lambda$lambda_0(this$Modules) {
    return function (newChoice) {
      this$Modules.props.handleChangeRMType(RMType$valueOf(newChoice));
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda$lambda_1(this$Modules) {
    return function ($receiver) {
      $receiver.name = SERVER_getInstance().RM;
      $receiver.title = 'Select the Reference Monitor';
      $receiver.defaultValue = this$Modules.props.rmType.toString();
      $receiver.options = this$Modules.props.availableRMImplementations;
      $receiver.handleChangeChoice = Modules$render$lambda$lambda$lambda$lambda$lambda_0(this$Modules);
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda_1(this$Modules) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Modules$render$lambda$lambda$lambda$lambda_0);
      $receiver.child_30b5ua$(moduleItem(Modules$render$lambda$lambda$lambda$lambda_1(this$Modules)));
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.item = true;
    $receiver.sm = 12;
    $receiver.md = 6;
    return Unit;
  }
  function Modules$render$lambda$lambda$lambda$lambda$lambda_1(this$Modules) {
    return function (newChoice) {
      this$Modules.props.handleChangeMMType(MMType$valueOf(newChoice));
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda$lambda_3(this$Modules) {
    return function ($receiver) {
      $receiver.name = SERVER_getInstance().MM;
      $receiver.title = 'Select the Metadata Manager';
      $receiver.defaultValue = this$Modules.props.mmType.toString();
      $receiver.options = this$Modules.props.availableMMImplementations;
      $receiver.handleChangeChoice = Modules$render$lambda$lambda$lambda$lambda$lambda_1(this$Modules);
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda_2(this$Modules) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Modules$render$lambda$lambda$lambda$lambda_2);
      $receiver.child_30b5ua$(moduleItem(Modules$render$lambda$lambda$lambda$lambda_3(this$Modules)));
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.item = true;
    $receiver.sm = 12;
    $receiver.md = 6;
    return Unit;
  }
  function Modules$render$lambda$lambda$lambda$lambda$lambda_2(this$Modules) {
    return function (newChoice) {
      this$Modules.props.handleChangeDMType(DMType$valueOf(newChoice));
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda$lambda_5(this$Modules) {
    return function ($receiver) {
      $receiver.name = SERVER_getInstance().DM;
      $receiver.title = 'Select the Data Manager';
      $receiver.defaultValue = this$Modules.props.dmType.toString();
      $receiver.options = this$Modules.props.availableDMImplementations;
      $receiver.handleChangeChoice = Modules$render$lambda$lambda$lambda$lambda$lambda_2(this$Modules);
      return Unit;
    };
  }
  function Modules$render$lambda$lambda$lambda_3(this$Modules) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Modules$render$lambda$lambda$lambda$lambda_4);
      $receiver.child_30b5ua$(moduleItem(Modules$render$lambda$lambda$lambda$lambda_5(this$Modules)));
      return Unit;
    };
  }
  function Modules$render$lambda$lambda_0(this$Modules) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Modules$render$lambda$lambda$lambda_0);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Modules$render$lambda$lambda$lambda_1(this$Modules));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Modules$render$lambda$lambda$lambda_2(this$Modules));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Modules$render$lambda$lambda$lambda_3(this$Modules));
      return Unit;
    };
  }
  Modules.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_10);
    var $receiver_1 = $receiver_0.css;
    set_textAlign($receiver_1, TextAlign.center);
    set_paddingTop($receiver_1, get_px(10));
    set_paddingBottom($receiver_1, get_px(10));
    $receiver_0.child_30b5ua$(cryptoACPaper(Modules$render$lambda$lambda(this)));
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(br$lambda(null));
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, Modules$render$lambda$lambda_0(this));
    $receiver.child_30b5ua$($receiver_0.create());
  };
  Modules.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Modules',
    interfaces: [RComponent]
  };
  function modules$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function modules$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Modules), modules$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function modules(handler) {
    return ensureNotNull(createElement(modules$lambda(handler)));
  }
  function getImageFromModuleImplementation$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function getImageFromModuleImplementation(choice) {
    switch (choice) {
      case 'CRYPTOAC':
        return 'proxy.png';
      case 'MOSQUITTO':
        return 'mosquitto.png';
      case 'MYSQL':
        return 'mysql.png';
      case 'REDIS':
        return 'redis.png';
      case 'NONE':
        return 'none.png';
      default:var message = 'Given choice ' + '"' + choice + '"' + ' not corresponding to any module implementation';
        logger_16.error_nq59yw$(getImageFromModuleImplementation$lambda(message));
        throw IllegalStateException_init(message);
    }
  }
  function Architecture(arcs, hybrid) {
    Architecture$Companion_getInstance();
    this.arcs = arcs;
    this.hybrid = hybrid;
    this.arrayRequirementsScore = HashMap_init();
    this.requirementsScore = 0;
  }
  function Architecture$Companion() {
    Architecture$Companion_instance = this;
  }
  Architecture$Companion.prototype.architectureFromAssignments_dliw48$ = function (assignments) {
    var arcs = HashMap_init();
    var hybrid = {v: false};
    var entitiesAlreadyPresent = HashSet_init();
    var tmp$;
    tmp$ = assignments.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.domain;
      var tmp$_0;
      var value = arcs.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        arcs.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      } else {
        tmp$_0 = value;
      }
      tmp$_0.add_11rb$(element.entity);
      if (entitiesAlreadyPresent.contains_11rb$(element.entity)) {
        hybrid.v = true;
      } else {
        entitiesAlreadyPresent.add_11rb$(element.entity);
      }
    }
    return new Architecture(arcs, hybrid.v);
  };
  Architecture$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Architecture$Companion_instance = null;
  function Architecture$Companion_getInstance() {
    if (Architecture$Companion_instance === null) {
      new Architecture$Companion();
    }return Architecture$Companion_instance;
  }
  Architecture.prototype.toString = function () {
    return 'Architecture(arcs=' + this.arcs + ', hybrid=' + this.hybrid + ')';
  };
  Architecture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Architecture',
    interfaces: []
  };
  function Assignment(domain, entity) {
    this.domain = domain;
    this.entity = entity;
  }
  Assignment.prototype.toString = function () {
    return "Assignment(domain='" + this.domain + "', entity='" + this.entity + "')";
  };
  Assignment.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, Assignment) ? tmp$ : throwCCE();
    if (this.domain !== other.domain)
      return false;
    if (this.entity !== other.entity)
      return false;
    return true;
  };
  Assignment.prototype.hashCode = function () {
    var result = this.domain.hashCode();
    result = (31 * result | 0) + this.entity.hashCode() | 0;
    return result;
  };
  Assignment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Assignment',
    interfaces: []
  };
  Assignment.prototype.component1 = function () {
    return this.domain;
  };
  Assignment.prototype.component2 = function () {
    return this.entity;
  };
  Assignment.prototype.copy_90ef7u$ = function (domain, entity) {
    return new Assignment(domain === void 0 ? this.domain : domain, entity === void 0 ? this.entity : entity);
  };
  function powerSet($receiver) {
    return powerSet_0($receiver, setOf(emptySet()));
  }
  function powerSet_0(left, acc) {
    var tmp$;
    if (left.isEmpty())
      tmp$ = acc;
    else {
      var tmp$_0 = drop(left, 1);
      var destination = ArrayList_init_0(collectionSizeOrDefault(acc, 10));
      var tmp$_1;
      tmp$_1 = acc.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(plus_1(item, first_1(left)));
      }
      tmp$ = powerSet_0(tmp$_0, plus_2(acc, destination));
    }
    return tmp$;
  }
  function Attacker(attacker, likelihood) {
    if (likelihood === void 0)
      likelihood = Likelihood$High_getInstance();
    this.attacker = attacker;
    this.likelihood = likelihood;
  }
  Attacker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attacker',
    interfaces: []
  };
  Attacker.prototype.component1 = function () {
    return this.attacker;
  };
  Attacker.prototype.component2 = function () {
    return this.likelihood;
  };
  Attacker.prototype.copy_z38kfe$ = function (attacker, likelihood) {
    return new Attacker(attacker === void 0 ? this.attacker : attacker, likelihood === void 0 ? this.likelihood : likelihood);
  };
  Attacker.prototype.toString = function () {
    return 'Attacker(attacker=' + Kotlin.toString(this.attacker) + (', likelihood=' + Kotlin.toString(this.likelihood)) + ')';
  };
  Attacker.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.attacker) | 0;
    result = result * 31 + Kotlin.hashCode(this.likelihood) | 0;
    return result;
  };
  Attacker.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.attacker, other.attacker) && Kotlin.equals(this.likelihood, other.likelihood)))));
  };
  function styledDiv$lambda_11(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function ConfigurationItem() {
    RComponent_init(this);
  }
  function ConfigurationItem$render$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function ConfigurationItem$render$lambda$lambda$lambda$lambda(this$ConfigurationItem) {
    return function (event) {
      var tmp$;
      this$ConfigurationItem.props.handleChangeChoice((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      return true;
    };
  }
  function ConfigurationItem$render$lambda$lambda$lambda(this$ConfigurationItem) {
    return function ($receiver) {
      $receiver.name = this$ConfigurationItem.props.name;
      $receiver.disabled = this$ConfigurationItem.props.disabled;
      $receiver.row = this$ConfigurationItem.props.optionsInRow;
      $receiver.defaultValue = this$ConfigurationItem.props.defaultValue;
      $receiver.onChange = ConfigurationItem$render$lambda$lambda$lambda$lambda(this$ConfigurationItem);
      var $receiver_0 = this$ConfigurationItem.props.values;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(new CryptoACRadioOption(item, item, 'primary'));
      }
      $receiver.options = destination;
      return Unit;
    };
  }
  function ConfigurationItem$render$lambda(this$ConfigurationItem) {
    return function ($receiver) {
      $receiver.attrs_37755u$(ConfigurationItem$render$lambda$lambda);
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_11);
      var this$ConfigurationItem_0 = this$ConfigurationItem;
      set_display($receiver_0.css, Display.inlineFlex);
      $receiver_0.child_30b5ua$(cryptoACRadioGroup(ConfigurationItem$render$lambda$lambda$lambda(this$ConfigurationItem_0)));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  ConfigurationItem.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, ConfigurationItem$render$lambda(this));
  };
  function ConfigurationItem$init$lambda$lambda(this$ConfigurationItem) {
    return function ($receiver) {
      $receiver.currentChoice = this$ConfigurationItem.props.defaultValue;
      return Unit;
    };
  }
  function Coroutine$ConfigurationItem$init$lambda(this$ConfigurationItem_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ConfigurationItem = this$ConfigurationItem_0;
  }
  Coroutine$ConfigurationItem$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ConfigurationItem$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ConfigurationItem$init$lambda.prototype.constructor = Coroutine$ConfigurationItem$init$lambda;
  Coroutine$ConfigurationItem$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return setState(this.local$this$ConfigurationItem, ConfigurationItem$init$lambda$lambda(this.local$this$ConfigurationItem)), Unit;
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
  function ConfigurationItem$init$lambda(this$ConfigurationItem_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ConfigurationItem$init$lambda(this$ConfigurationItem_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ConfigurationItem.prototype.init_b4e81d$ = function ($receiver) {
    launch(MainScope(), void 0, void 0, ConfigurationItem$init$lambda(this));
  };
  ConfigurationItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    return !equals(nextProps.defaultValue, this.props.defaultValue);
  };
  ConfigurationItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConfigurationItem',
    interfaces: [RComponent]
  };
  function configurationItem$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function configurationItem$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(ConfigurationItem), configurationItem$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function configurationItem(handler) {
    return ensureNotNull(createElement(configurationItem$lambda(handler)));
  }
  function styledImg$lambda_0(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function EntityIcon() {
    RComponent_init(this);
  }
  function EntityIcon$render$lambda$lambda$lambda$lambda(this$EntityIcon) {
    return function ($receiver) {
      var tmp$;
      if ($receiver.opacity === 1.0) {
        this$EntityIcon.props.onClick(this$EntityIcon.props.entity, this$EntityIcon.props.domain, false);
        tmp$ = 0.5;
      } else {
        this$EntityIcon.props.onClick(this$EntityIcon.props.entity, this$EntityIcon.props.domain, true);
        tmp$ = 1.0;
      }
      $receiver.opacity = tmp$;
      return Unit;
    };
  }
  function EntityIcon$render$lambda$lambda$lambda(this$EntityIcon) {
    return function (f) {
      if (!equals(this$EntityIcon.props.onClick, undefined)) {
        setState(this$EntityIcon, EntityIcon$render$lambda$lambda$lambda$lambda(this$EntityIcon));
      }return Unit;
    };
  }
  EntityIcon.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledImg$lambda_0(null, null));
    var $receiver_1 = $receiver_0.css;
    set_verticalAlign($receiver_1, VerticalAlign.Companion.middle);
    set_opacity($receiver_1, this.state.opacity);
    set_padding($receiver_1, '3px');
    var $receiver_2 = $receiver_0.attrs;
    $receiver_2.width = '30em';
    $receiver_2.height = '30em';
    $receiver_2.src = this.props.src;
    set_onClickFunction($receiver_2, EntityIcon$render$lambda$lambda$lambda(this));
    $receiver.child_30b5ua$($receiver_0.create());
  };
  EntityIcon.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.opacity = 1.0;
  };
  EntityIcon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntityIcon',
    interfaces: [RComponent]
  };
  function entityIcon$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function entityIcon$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(EntityIcon), entityIcon$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function entityIcon(handler) {
    return ensureNotNull(createElement(entityIcon$lambda(handler)));
  }
  function Requirement(name, weight, thresholdType, thresholdValue, penalty) {
    if (weight === void 0)
      weight = 1;
    if (thresholdType === void 0)
      thresholdType = Threshold$None_getInstance();
    if (thresholdValue === void 0)
      thresholdValue = 0;
    if (penalty === void 0)
      penalty = 0;
    this.name = name;
    this.weight = weight;
    this.thresholdType = thresholdType;
    this.thresholdValue = thresholdValue;
    this.penalty = penalty;
  }
  Requirement.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, Requirement) ? tmp$ : throwCCE();
    if (!equals(this.name, other.name))
      return false;
    if (this.weight !== other.weight)
      return false;
    if (this.thresholdType !== other.thresholdType)
      return false;
    if (this.thresholdValue !== other.thresholdValue)
      return false;
    if (this.penalty !== other.penalty)
      return false;
    return true;
  };
  Requirement.prototype.hashCode = function () {
    var result = hashCode(this.name);
    result = (31 * result | 0) + this.weight | 0;
    result = (31 * result | 0) + this.thresholdType.hashCode() | 0;
    result = (31 * result | 0) + this.thresholdValue | 0;
    result = (31 * result | 0) + this.penalty | 0;
    return result;
  };
  Requirement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Requirement',
    interfaces: []
  };
  Requirement.prototype.component1 = function () {
    return this.name;
  };
  Requirement.prototype.component2 = function () {
    return this.weight;
  };
  Requirement.prototype.component3 = function () {
    return this.thresholdType;
  };
  Requirement.prototype.component4 = function () {
    return this.thresholdValue;
  };
  Requirement.prototype.component5 = function () {
    return this.penalty;
  };
  Requirement.prototype.copy_i28wav$ = function (name, weight, thresholdType, thresholdValue, penalty) {
    return new Requirement(name === void 0 ? this.name : name, weight === void 0 ? this.weight : weight, thresholdType === void 0 ? this.thresholdType : thresholdType, thresholdValue === void 0 ? this.thresholdValue : thresholdValue, penalty === void 0 ? this.penalty : penalty);
  };
  Requirement.prototype.toString = function () {
    return 'Requirement(name=' + Kotlin.toString(this.name) + (', weight=' + Kotlin.toString(this.weight)) + (', thresholdType=' + Kotlin.toString(this.thresholdType)) + (', thresholdValue=' + Kotlin.toString(this.thresholdValue)) + (', penalty=' + Kotlin.toString(this.penalty)) + ')';
  };
  function styledDiv$lambda_12(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledTd$lambda(it) {
    return new TD_init(html.emptyMap, it);
  }
  function RequirementItem() {
    RComponent_init(this);
  }
  function RequirementItem$render$lambda$lambda$lambda$lambda(this$RequirementItem) {
    return function (it) {
      var newWeight = toInt(it);
      this$RequirementItem.props.handleChangeWeightValue(newWeight);
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda(this$RequirementItem) {
    return function ($receiver) {
      $receiver.className = 'darkTextField';
      $receiver.defaultValue = this$RequirementItem.props.defaultValue.weight.toString();
      $receiver.type = 'Number';
      $receiver.color = 'primary';
      $receiver.onChange = RequirementItem$render$lambda$lambda$lambda$lambda(this$RequirementItem);
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda_0(this$RequirementItem) {
    return function (e) {
      var newThresholdType = Threshold$valueOf(e);
      this$RequirementItem.props.handleChangeThresholdType(newThresholdType);
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda(this$RequirementItem) {
    return function ($receiver) {
      $receiver.name = 'threshold';
      $receiver.id = 'threshold';
      var $receiver_0 = Threshold$values();
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(item.toString());
      }
      $receiver.options = destination;
      $receiver.defaultValue = this$RequirementItem.props.defaultValue.thresholdType.toString();
      $receiver.onChange = RequirementItem$render$lambda$lambda$lambda_0(this$RequirementItem);
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda$lambda_0(this$RequirementItem) {
    return function (it) {
      var newThreshold = toInt(it);
      this$RequirementItem.props.handleChangeThresholdValue(newThreshold);
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda_1(this$RequirementItem) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.defaultValue = this$RequirementItem.props.defaultValue.thresholdValue.toString();
      $receiver.type = 'Number';
      $receiver.color = 'primary';
      $receiver.disabled = this$RequirementItem.props.requirement.thresholdType === Threshold$None_getInstance();
      if (this$RequirementItem.props.requirement.thresholdType === Threshold$None_getInstance()) {
        tmp$ = 'greyTextField';
      } else {
        tmp$ = 'darkTextField';
      }
      $receiver.className = tmp$;
      if (this$RequirementItem.props.requirement.thresholdType === Threshold$None_getInstance()) {
        tmp$_0 = 'greyTextField';
      } else {
        tmp$_0 = 'darkTextField';
      }
      $receiver.className = tmp$_0;
      $receiver.onChange = RequirementItem$render$lambda$lambda$lambda$lambda_0(this$RequirementItem);
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda$lambda_1(this$RequirementItem) {
    return function (it) {
      var newPenalty = toInt(it);
      this$RequirementItem.props.handleChangePenaltyValue(newPenalty);
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda_2(this$RequirementItem) {
    return function ($receiver) {
      var tmp$;
      $receiver.defaultValue = this$RequirementItem.props.defaultValue.penalty.toString();
      $receiver.type = 'Number';
      $receiver.color = 'primary';
      $receiver.disabled = this$RequirementItem.props.requirement.thresholdType === Threshold$None_getInstance();
      if (this$RequirementItem.props.requirement.thresholdType === Threshold$None_getInstance()) {
        tmp$ = 'greyTextField';
      } else {
        tmp$ = 'darkTextField';
      }
      $receiver.className = tmp$;
      $receiver.onChange = RequirementItem$render$lambda$lambda$lambda$lambda_1(this$RequirementItem);
      return Unit;
    };
  }
  RequirementItem.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
    var $receiver_1 = $receiver_0.css;
    set_padding($receiver_1, '10px');
    set_width($receiver_1, get_px(160));
    set_textAlign($receiver_1, TextAlign.left);
    if (this.props.last) {
      set_borderBottomLeftRadius($receiver_1, get_px(15));
    }$receiver_0.unaryPlus_pdl1vz$(replace(this.props.requirement.name, '_', '-'));
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
    set_padding($receiver_0_0.css, '10px');
    var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_12);
    set_color($receiver_0_1.css, new Color('#000000'));
    $receiver_0_1.child_30b5ua$(cryptoACTextField(RequirementItem$render$lambda$lambda$lambda(this)));
    $receiver_0_0.child_30b5ua$($receiver_0_1.create());
    $receiver.child_30b5ua$($receiver_0_0.create());
    var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
    set_padding($receiver_0_2.css, '10px');
    $receiver_0_2.child_30b5ua$(cryptoACSelect(RequirementItem$render$lambda$lambda(this)));
    $receiver.child_30b5ua$($receiver_0_2.create());
    var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
    set_padding($receiver_0_3.css, '10px');
    var $receiver_0_4 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_12);
    set_color($receiver_0_4.css, new Color('#000000'));
    $receiver_0_4.child_30b5ua$(cryptoACTextField(RequirementItem$render$lambda$lambda$lambda_1(this)));
    $receiver_0_3.child_30b5ua$($receiver_0_4.create());
    $receiver.child_30b5ua$($receiver_0_3.create());
    var $receiver_0_5 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
    var $receiver_2 = $receiver_0_5.css;
    set_padding($receiver_2, '10px');
    if (this.props.last) {
      set_borderBottomRightRadius($receiver_2, get_px(15));
    }var $receiver_0_6 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_12);
    set_color($receiver_0_6.css, new Color('#000000'));
    $receiver_0_6.child_30b5ua$(cryptoACTextField(RequirementItem$render$lambda$lambda$lambda_2(this)));
    $receiver_0_5.child_30b5ua$($receiver_0_6.create());
    $receiver.child_30b5ua$($receiver_0_5.create());
  };
  RequirementItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequirementItem',
    interfaces: [RComponent]
  };
  function requirementItem$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function requirementItem$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(RequirementItem), requirementItem$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function requirementItem(handler) {
    return ensureNotNull(createElement(requirementItem$lambda(handler)));
  }
  function styledTd$lambda_0(it) {
    return new TD_init(html.emptyMap, it);
  }
  function tr$lambda(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledThead$lambda(it) {
    return new THEAD_init(html.emptyMap, it);
  }
  function tbody$lambda(closure$classes) {
    return function (it) {
      return new TBODY_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledTable$lambda(it) {
    return new TABLE_init(html.emptyMap, it);
  }
  function styledSpan$lambda_1(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function styledDiv$lambda_13(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function br$lambda_0(closure$classes) {
    return function (it) {
      return new BR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function logger$lambda_17() {
    return Unit;
  }
  var logger_17;
  function TradeOffBoard() {
    RComponent_init(this);
  }
  function TradeOffBoard$render$lambda$lambda$lambda($receiver) {
    $receiver.container = true;
    $receiver.spacing = 3;
    return Unit;
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.sm = 12;
    $receiver.md = 12;
    $receiver.lg = 12;
    $receiver.xl = 12;
    return Unit;
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$entity, this$TradeOffBoard) {
    return function (newNumberOfInstances) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isArray(tmp$ = newNumberOfInstances) ? tmp$ : throwCCE();
      this$TradeOffBoard.changeNumberOfInstances_0(closure$entity, tmp$_0);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard, closure$entity) {
    return function ($receiver) {
      $receiver.label = '';
      $receiver.min = 0;
      $receiver.max = this$TradeOffBoard.state.domains.size;
      $receiver.defaultValues = [0, Domains$values().length];
      $receiver.color = 'primary';
      $receiver.range = true;
      $receiver.onChange = TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$entity, this$TradeOffBoard);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
      var this$TradeOffBoard_0 = this$TradeOffBoard;
      var $receiver_1 = $receiver_0.css;
      set_borderCollapse($receiver_1, BorderCollapse.collapse);
      set_width($receiver_1, get_pct(100));
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda);
      set_borderBottom($receiver_0_0.css, '1px solid rgba(173, 173, 173, 0.2)');
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
      var tmp$;
      tmp$ = this$TradeOffBoard_0.state.entities.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
        set_padding($receiver_0_2.css, '4px');
        $receiver_0_2.unaryPlus_pdl1vz$(element.toString());
        $receiver_0_1.child_30b5ua$($receiver_0_2.create());
      }
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      var $receiver_0_3 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda(null));
      var $receiver_0_4 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = this$TradeOffBoard_0.state.entities.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        var $receiver_0_5 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
        var $receiver_2 = $receiver_0_5.css;
        if (index_0 === 0) {
          set_paddingTop($receiver_2, get_px(3));
        } else if (index_0 === (this$TradeOffBoard_0.state.entities.size - 1 | 0)) {
          set_paddingBottom($receiver_2, get_px(3));
        }if (index_0 === (this$TradeOffBoard_0.state.entities.size - 1 | 0) && index_0 === (this$TradeOffBoard_0.state.entities.size - 1 | 0)) {
          set_borderBottomRightRadius($receiver_2, get_px(15));
        }$receiver_0_5.child_30b5ua$(cryptoACSlider(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard_0, item)));
        $receiver_0_4.child_30b5ua$($receiver_0_5.create());
      }
      $receiver_0_3.child_30b5ua$($receiver_0_4.create());
      $receiver_0.child_30b5ua$($receiver_0_3.create());
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_0(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.titleStyle = Themes_getInstance().plainPaperTitleStyle;
      $receiver.titleText = 'Replication of Entities';
      $receiver.titleVariant = 'subtitle1';
      $receiver.setDivider = false;
      $receiver.dividerWidth = get_pct(95);
      $receiver.child = ensureNotNull(createElement(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard)));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda_0(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(TradeOffBoard$render$lambda$lambda$lambda$lambda);
      $receiver.child_30b5ua$(cryptoACPaper(TradeOffBoard$render$lambda$lambda$lambda$lambda_0(this$TradeOffBoard)));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.item = true;
    $receiver.sm = 12;
    $receiver.md = 12;
    $receiver.lg = 12;
    $receiver.xl = 12;
    return Unit;
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard) {
    return function (entity, domain, assignment) {
      this$TradeOffBoard.toggleAssignment_0(entity, domain, assignment);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$TradeOffBoard, closure$entity, closure$domain) {
    return function ($receiver) {
      $receiver.key = this$TradeOffBoard.state.domains.toString() + this$TradeOffBoard.state.entities.toString();
      $receiver.src = getImageFromEntity(closure$entity);
      $receiver.onClick = TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard);
      $receiver.entity = closure$entity;
      $receiver.domain = closure$domain;
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda_0(this$TradeOffBoard) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
      var this$TradeOffBoard_0 = this$TradeOffBoard;
      var $receiver_1 = $receiver_0.css;
      set_borderCollapse($receiver_1, BorderCollapse.collapse);
      set_width($receiver_1, get_pct(100));
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda);
      set_borderBottom($receiver_0_0.css, '1px solid rgba(173, 173, 173, 0.2)');
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_2.css, '4px');
      $receiver_0_1.child_30b5ua$($receiver_0_2.create());
      var tmp$;
      tmp$ = this$TradeOffBoard_0.state.entities.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
        set_padding($receiver_0_3.css, '4px');
        $receiver_0_3.unaryPlus_pdl1vz$(element.toString());
        $receiver_0_1.child_30b5ua$($receiver_0_3.create());
      }
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      var $receiver_0_4 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda(null));
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = this$TradeOffBoard_0.state.domains.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        var $receiver_0_5 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
        var $receiver_0_6 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
        var $receiver_2 = $receiver_0_6.css;
        set_paddingLeft($receiver_2, get_px(10));
        set_width($receiver_2, get_px(160));
        set_textAlign($receiver_2, TextAlign.left);
        if (index_0 === (this$TradeOffBoard_0.state.domains.size - 1 | 0)) {
          set_borderBottomLeftRadius($receiver_2, get_px(15));
        }$receiver_0_6.unaryPlus_pdl1vz$(item.toString());
        $receiver_0_5.child_30b5ua$($receiver_0_6.create());
        var tmp$_1, tmp$_0_1;
        var index_1 = 0;
        tmp$_1 = this$TradeOffBoard_0.state.entities.iterator();
        while (tmp$_1.hasNext()) {
          var item_0 = tmp$_1.next();
          var entityIndex = checkIndexOverflow((tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1));
          var $receiver_0_7 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
          var $receiver_3 = $receiver_0_7.css;
          if (index_0 === 0) {
            set_paddingTop($receiver_3, get_px(3));
          } else if (index_0 === (this$TradeOffBoard_0.state.domains.size - 1 | 0)) {
            set_paddingBottom($receiver_3, get_px(3));
          }if (index_0 === (this$TradeOffBoard_0.state.domains.size - 1 | 0) && entityIndex === (this$TradeOffBoard_0.state.entities.size - 1 | 0)) {
            set_borderBottomRightRadius($receiver_3, get_px(15));
          }$receiver_0_7.child_30b5ua$(entityIcon(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$TradeOffBoard_0, item_0, item)));
          $receiver_0_5.child_30b5ua$($receiver_0_7.create());
        }
        $receiver_0_4.child_30b5ua$($receiver_0_5.create());
      }
      $receiver_0.child_30b5ua$($receiver_0_4.create());
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_2(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.titleStyle = Themes_getInstance().plainPaperTitleStyle;
      $receiver.titleText = 'Pre-filters';
      $receiver.titleVariant = 'subtitle1';
      $receiver.setDivider = false;
      $receiver.dividerWidth = get_pct(95);
      $receiver.child = ensureNotNull(createElement(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda_0(this$TradeOffBoard)));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda_1(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(TradeOffBoard$render$lambda$lambda$lambda$lambda_1);
      $receiver.child_30b5ua$(cryptoACPaper(TradeOffBoard$render$lambda$lambda$lambda$lambda_2(this$TradeOffBoard)));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.item = true;
    $receiver.sm = 12;
    $receiver.md = 12;
    $receiver.lg = 12;
    $receiver.xl = 12;
    return Unit;
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard) {
    return function (domain, attacker, newLikelihood) {
      this$TradeOffBoard.changeLikelihood_0(domain, attacker, newLikelihood);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$attackers, closure$iterator, closure$domain, this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.defaultValue = Likelihood$High_getInstance();
      $receiver.last = (closure$attackers.size === 1 && !closure$iterator.hasNext());
      $receiver.domain = closure$domain;
      $receiver.attacker = first(closure$attackers).attacker;
      $receiver.handleChangeLikelihood = TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$TradeOffBoard) {
    return function (domain, attacker, newLikelihood) {
      this$TradeOffBoard.changeLikelihood_0(domain, attacker, newLikelihood);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$index, closure$attackers, closure$iterator, closure$domain, closure$attacker, this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.defaultValue = Likelihood$High_getInstance();
      $receiver.last = (closure$index === (closure$attackers.size - 1 | 0) && !closure$iterator.hasNext());
      $receiver.domain = closure$domain;
      $receiver.attacker = closure$attacker.attacker;
      $receiver.handleChangeLikelihood = TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$TradeOffBoard);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda_1(this$TradeOffBoard) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
      var this$TradeOffBoard_0 = this$TradeOffBoard;
      var $receiver_1 = $receiver_0.css;
      set_borderCollapse($receiver_1, BorderCollapse.collapse);
      set_width($receiver_1, get_pct(100));
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda);
      set_borderBottom($receiver_0_0.css, '1px solid rgba(173, 173, 173, 0.2)');
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_2.css, '4px');
      $receiver_0_2.unaryPlus_pdl1vz$('Domain or Channel');
      $receiver_0_1.child_30b5ua$($receiver_0_2.create());
      var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_3.css, '4px');
      $receiver_0_3.unaryPlus_pdl1vz$('Attacker');
      $receiver_0_1.child_30b5ua$($receiver_0_3.create());
      var $receiver_0_4 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_4.css, '4px');
      $receiver_0_4.attrs.colSpan = '2';
      $receiver_0_4.unaryPlus_pdl1vz$('Likelihood');
      $receiver_0_1.child_30b5ua$($receiver_0_4.create());
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      var $receiver_0_5 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda(null));
      var iterator = this$TradeOffBoard_0.state.attackersInput.entries.iterator();
      while (iterator.hasNext()) {
        var entry = iterator.next();
        var domain = entry.key;
        var attackers = entry.value;
        var $receiver_0_6 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
        var $receiver_0_7 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
        var $receiver_2 = $receiver_0_7.css;
        set_paddingLeft($receiver_2, get_px(10));
        set_width($receiver_2, get_px(160));
        set_textAlign($receiver_2, TextAlign.left);
        if (!iterator.hasNext()) {
          set_borderBottomLeftRadius($receiver_2, get_px(15));
        }$receiver_0_7.attrs.rowSpan = attackers.size.toString();
        $receiver_0_7.unaryPlus_pdl1vz$(domain.toString());
        $receiver_0_6.child_30b5ua$($receiver_0_7.create());
        $receiver_0_6.child_30b5ua$(trustAssumptionsLikelihood(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(attackers, iterator, domain, this$TradeOffBoard_0)));
        $receiver_0_5.child_30b5ua$($receiver_0_6.create());
        var tmp$, tmp$_0;
        var index = 0;
        tmp$ = attackers.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
          if (index_0 !== 0) {
            var $receiver_0_8 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
            $receiver_0_8.child_30b5ua$(trustAssumptionsLikelihood(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(index_0, attackers, iterator, domain, item, this$TradeOffBoard_0)));
            $receiver_0_5.child_30b5ua$($receiver_0_8.create());
          }}
      }
      $receiver_0.child_30b5ua$($receiver_0_5.create());
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_4(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.titleStyle = Themes_getInstance().plainPaperTitleStyle;
      $receiver.titleText = 'Trust Assumptions';
      $receiver.titleVariant = 'subtitle1';
      $receiver.setDivider = false;
      $receiver.dividerWidth = get_pct(95);
      $receiver.child = ensureNotNull(createElement(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda_1(this$TradeOffBoard)));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda_2(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(TradeOffBoard$render$lambda$lambda$lambda$lambda_3);
      $receiver.child_30b5ua$(cryptoACPaper(TradeOffBoard$render$lambda$lambda$lambda$lambda_4(this$TradeOffBoard)));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.item = true;
    $receiver.sm = 12;
    $receiver.md = 12;
    $receiver.lg = 12;
    $receiver.xl = 12;
    return Unit;
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$req, this$TradeOffBoard) {
    return function (weight) {
      this$TradeOffBoard.changeWeightValue_0(closure$req.name, weight);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$req, this$TradeOffBoard) {
    return function (type) {
      this$TradeOffBoard.changeThresholdType_0(closure$req.name, type);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$req, this$TradeOffBoard) {
    return function (threshold) {
      this$TradeOffBoard.changeThresholdValue_0(closure$req.name, threshold);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$req, this$TradeOffBoard) {
    return function (penalty) {
      this$TradeOffBoard.changePenaltyValue_0(closure$req.name, penalty);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$TradeOffBoard, closure$req, closure$index, closure$requirements) {
    return function ($receiver) {
      var tmp$;
      switch (this$TradeOffBoard.props.metric.name) {
        case 'Goals':
          tmp$ = this$TradeOffBoard.state.performanceRequirementsInputs;
          break;
        case 'Protection':
          tmp$ = this$TradeOffBoard.state.securityRequirementsInputs;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var $receiver_0 = tmp$;
      var first$result;
      first$break: do {
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(element.name, closure$req.name)) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      $receiver.defaultValue = first$result;
      $receiver.last = closure$index === (closure$requirements.size - 1 | 0);
      $receiver.requirement = closure$req;
      $receiver.handleChangeWeightValue = TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$req, this$TradeOffBoard);
      $receiver.handleChangeThresholdType = TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$req, this$TradeOffBoard);
      $receiver.handleChangeThresholdValue = TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$req, this$TradeOffBoard);
      $receiver.handleChangePenaltyValue = TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$req, this$TradeOffBoard);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda_2(this$TradeOffBoard) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
      var this$TradeOffBoard_0 = this$TradeOffBoard;
      var $receiver_1 = $receiver_0.css;
      set_borderCollapse($receiver_1, BorderCollapse.collapse);
      set_width($receiver_1, get_pct(100));
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda);
      set_borderBottom($receiver_0_0.css, '1px solid rgba(173, 173, 173, 0.2)');
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_2.css, '4px');
      $receiver_0_1.child_30b5ua$($receiver_0_2.create());
      var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_3.css, '4px');
      $receiver_0_3.unaryPlus_pdl1vz$('Weight');
      $receiver_0_1.child_30b5ua$($receiver_0_3.create());
      var $receiver_0_4 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_4.css, '4px');
      $receiver_0_4.unaryPlus_pdl1vz$('Threshold');
      $receiver_0_1.child_30b5ua$($receiver_0_4.create());
      var $receiver_0_5 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_5.css, '4px');
      $receiver_0_5.unaryPlus_pdl1vz$('Threshold Value');
      $receiver_0_1.child_30b5ua$($receiver_0_5.create());
      var $receiver_0_6 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_6.css, '4px');
      $receiver_0_6.unaryPlus_pdl1vz$('Penalty');
      $receiver_0_1.child_30b5ua$($receiver_0_6.create());
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      var $receiver_0_7 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda(null));
      var tmp$;
      switch (this$TradeOffBoard_0.props.metric.name) {
        case 'Goals':
          tmp$ = this$TradeOffBoard_0.state.performanceRequirementsInputs;
          break;
        case 'Protection':
          tmp$ = this$TradeOffBoard_0.state.securityRequirementsInputs;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var requirements = tmp$;
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = requirements.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        $receiver_0_7.key = item.name;
        var $receiver_0_8 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
        $receiver_0_8.child_30b5ua$(requirementItem(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$TradeOffBoard_0, item, index_0, requirements)));
        $receiver_0_7.child_30b5ua$($receiver_0_8.create());
      }
      $receiver_0.child_30b5ua$($receiver_0_7.create());
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_6(this$TradeOffBoard) {
    return function ($receiver) {
      var tmp$;
      $receiver.titleStyle = Themes_getInstance().plainPaperTitleStyle;
      switch (this$TradeOffBoard.props.metric.name) {
        case 'Protection':
          tmp$ = 'Security Requirements';
          break;
        case 'Goals':
          tmp$ = 'Scenario Requirements';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.titleText = tmp$;
      $receiver.titleVariant = 'subtitle1';
      $receiver.setDivider = false;
      $receiver.dividerWidth = get_pct(95);
      $receiver.child = ensureNotNull(createElement(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda_2(this$TradeOffBoard)));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda_3(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(TradeOffBoard$render$lambda$lambda$lambda$lambda_5);
      $receiver.child_30b5ua$(cryptoACPaper(TradeOffBoard$render$lambda$lambda$lambda$lambda_6(this$TradeOffBoard)));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(TradeOffBoard$render$lambda$lambda$lambda);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, TradeOffBoard$render$lambda$lambda$lambda_0(this$TradeOffBoard));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, TradeOffBoard$render$lambda$lambda$lambda_1(this$TradeOffBoard));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, TradeOffBoard$render$lambda$lambda$lambda_2(this$TradeOffBoard));
      if (this$TradeOffBoard.props.algorithm === Algorithm$AdHoc_getInstance()) {
        $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, TradeOffBoard$render$lambda$lambda$lambda_3(this$TradeOffBoard));
      }return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$newArchitectures) {
    return function ($receiver) {
      $receiver.architectures = closure$newArchitectures;
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard) {
    return function (it) {
      this$TradeOffBoard.props.handleChangeBackdropIsOpen(true);
      var newArchitectures = this$TradeOffBoard.computePossibleArchitectures_0();
      this$TradeOffBoard.props.handleChangeBackdropIsOpen(false);
      setState(this$TradeOffBoard, TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(newArchitectures));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'refresh';
      $receiver.color = 'secondary';
      $receiver.onClick = TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaUndoAlt, TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda_3(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.attrs_37755u$(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard));
      $receiver.child_30b5ua$(ensureNotNull(createElement(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda_0)));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$architecturesToShow) {
    return function () {
      return 'Showing ' + closure$architecturesToShow.size + ' architectures';
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$entity) {
    return function ($receiver) {
      $receiver.src = getImageFromEntity(closure$entity);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$it) {
    return function ($receiver) {
      $receiver.title = replace(closure$it.key, '_', '-');
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$score) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda_1);
      var closure$score_0 = closure$score;
      var tmp$;
      var $receiver_1 = $receiver_0.css;
      var tmp$_0;
      set_marginRight($receiver_1, get_em(0.5));
      set_fontFamily($receiver_1, 'Courier');
      if (closure$score_0 < 0) {
        tmp$_0 = '#c0392b';
      } else if (closure$score_0 === 0) {
        tmp$_0 = 'black';
      } else {
        tmp$_0 = '#27ae60';
      }
      set_color($receiver_1, new Color(tmp$_0));
      if (closure$score_0 >= 0) {
        tmp$ = '+';
      } else {
        tmp$ = '';
      }
      $receiver_0.unaryPlus_pdl1vz$(tmp$ + closure$score_0);
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it, closure$score) {
    return function ($receiver) {
      $receiver.attrs_37755u$(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$it));
      $receiver.child_30b5ua$(ensureNotNull(createElement(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$score))));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda_4(this$TradeOffBoard) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_13);
      var this$TradeOffBoard_0 = this$TradeOffBoard;
      set_float($receiver_0.css, Float.right);
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.IconButton, TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda_3(this$TradeOffBoard_0));
      $receiver.child_30b5ua$($receiver_0.create());
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
      var this$TradeOffBoard_1 = this$TradeOffBoard;
      var $receiver_1 = $receiver_0_0.css;
      set_borderCollapse($receiver_1, BorderCollapse.collapse);
      set_width($receiver_1, get_pct(100));
      var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda);
      set_borderBottom($receiver_0_1.css, '1px solid rgba(173, 173, 173, 0.2)');
      var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
      var tmp$;
      tmp$ = this$TradeOffBoard_1.state.domains.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
        set_padding($receiver_0_3.css, '4px');
        $receiver_0_3.unaryPlus_pdl1vz$(element.toString());
        $receiver_0_2.child_30b5ua$($receiver_0_3.create());
      }
      var $receiver_0_4 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_4.css, '4px');
      $receiver_0_4.unaryPlus_pdl1vz$('Score');
      $receiver_0_2.child_30b5ua$($receiver_0_4.create());
      $receiver_0_1.child_30b5ua$($receiver_0_2.create());
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      var $receiver_0_5 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda(null));
      var architecturesToShow = this$TradeOffBoard_1.state.architectures;
      logger_17.info_nq59yw$(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda_1(architecturesToShow));
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = architecturesToShow.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var architectureIndex = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        var $receiver_0_6 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
        var tmp$_1, tmp$_0_1;
        var index_0 = 0;
        tmp$_1 = this$TradeOffBoard_1.state.domains.iterator();
        while (tmp$_1.hasNext()) {
          var item_0 = tmp$_1.next();
          var domainIndex = checkIndexOverflow((tmp$_0_1 = index_0, index_0 = tmp$_0_1 + 1 | 0, tmp$_0_1));
          var tmp$_2;
          var entitiesInDomain = (tmp$_2 = item.arcs.get_11rb$(item_0)) != null ? tmp$_2 : emptyList();
          var $receiver_0_7 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
          var $receiver_2 = $receiver_0_7.css;
          if (architectureIndex === 0) {
            set_paddingTop($receiver_2, get_px(3));
          } else if (architectureIndex === (architecturesToShow.size - 1 | 0)) {
            set_paddingBottom($receiver_2, get_px(3));
            if (domainIndex === 0) {
              set_borderBottomLeftRadius($receiver_2, get_px(15));
            }}var tmp$_3;
          tmp$_3 = entitiesInDomain.iterator();
          while (tmp$_3.hasNext()) {
            var element_0 = tmp$_3.next();
            $receiver_0_7.child_30b5ua$(entityIcon(TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(element_0)));
          }
          $receiver_0_6.child_30b5ua$($receiver_0_7.create());
        }
        var $receiver_0_8 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
        var $receiver_3 = $receiver_0_8.css;
        if (architectureIndex === 0) {
          set_paddingTop($receiver_3, get_px(3));
        } else if (architectureIndex === (architecturesToShow.size - 1 | 0)) {
          set_paddingBottom($receiver_3, get_px(3));
          set_borderBottomRightRadius($receiver_3, get_px(15));
        }if (this$TradeOffBoard_1.props.algorithm === Algorithm$AdHoc_getInstance()) {
          $receiver_0_8.unaryPlus_pdl1vz$(item.requirementsScore.toString());
        } else if (this$TradeOffBoard_1.props.algorithm === Algorithm$Best_getInstance()) {
          var tmp$_4;
          tmp$_4 = item.arrayRequirementsScore.entries.iterator();
          while (tmp$_4.hasNext()) {
            var element_1 = tmp$_4.next();
            var score = element_1.value;
            $receiver_0_8.invoke_qk0v40$($module$_material_ui_core.Tooltip, TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(element_1, score));
          }
        }$receiver_0_6.child_30b5ua$($receiver_0_8.create());
        $receiver_0_5.child_30b5ua$($receiver_0_6.create());
      }
      $receiver_0_0.child_30b5ua$($receiver_0_5.create());
      $receiver.child_30b5ua$($receiver_0_0.create());
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda_0(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.titleStyle = Themes_getInstance().plainPaperTitleStyle;
      $receiver.titleText = 'Best Architectures';
      $receiver.titleVariant = 'subtitle1';
      $receiver.setDivider = false;
      $receiver.dividerWidth = get_pct(95);
      $receiver.child = ensureNotNull(createElement(TradeOffBoard$render$lambda$lambda$lambda_4(this$TradeOffBoard)));
      return Unit;
    };
  }
  TradeOffBoard.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_13);
    var $receiver_1 = $receiver_0.css;
    set_textAlign($receiver_1, TextAlign.center);
    set_paddingTop($receiver_1, get_px(10));
    set_paddingBottom($receiver_1, get_px(10));
    $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, TradeOffBoard$render$lambda$lambda(this));
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(br$lambda_0(null));
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    $receiver_0.child_30b5ua$(cryptoACPaper(TradeOffBoard$render$lambda$lambda_0(this)));
    $receiver.child_30b5ua$($receiver_0.create());
  };
  function TradeOffBoard$changeNumberOfInstances$lambda(closure$entity, closure$newNumberOfInstances) {
    return function () {
      return 'changeNumberOfInstances, entity ' + closure$entity + ', newNumberOfInstances ' + closure$newNumberOfInstances;
    };
  }
  function TradeOffBoard$changeNumberOfInstances$lambda_0(closure$newNumberOfInstances, closure$entity) {
    return function ($receiver) {
      var $receiver_0 = $receiver.numberOfInstances;
      var key = closure$entity;
      var value = closure$newNumberOfInstances;
      $receiver_0.put_xwzc9p$(key, value);
      return Unit;
    };
  }
  TradeOffBoard.prototype.changeNumberOfInstances_0 = function (entity, newNumberOfInstances) {
    logger_17.info_nq59yw$(TradeOffBoard$changeNumberOfInstances$lambda(entity, newNumberOfInstances));
    setState(this, TradeOffBoard$changeNumberOfInstances$lambda_0(newNumberOfInstances, entity));
  };
  function TradeOffBoard$changePenaltyValue$lambda(closure$requirement, closure$penalty) {
    return function () {
      return 'changePenalty, requirement ' + closure$requirement + ', penalty ' + closure$penalty;
    };
  }
  function TradeOffBoard$changePenaltyValue$lambda_0(closure$penalty, this$TradeOffBoard, closure$requirement) {
    return function ($receiver) {
      var tmp$;
      switch (this$TradeOffBoard.props.metric.name) {
        case 'Goals':
          tmp$ = this$TradeOffBoard.state.performanceRequirementsInputs;
          break;
        case 'Protection':
          tmp$ = this$TradeOffBoard.state.securityRequirementsInputs;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var $receiver_0 = tmp$;
      var first$result;
      first$break: do {
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(element.name, closure$requirement)) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      first$result.penalty = closure$penalty;
      return Unit;
    };
  }
  TradeOffBoard.prototype.changePenaltyValue_0 = function (requirement, penalty) {
    logger_17.info_nq59yw$(TradeOffBoard$changePenaltyValue$lambda(requirement, penalty));
    setState(this, TradeOffBoard$changePenaltyValue$lambda_0(penalty, this, requirement));
  };
  function TradeOffBoard$changeThresholdValue$lambda(closure$requirement, closure$value) {
    return function () {
      return 'changeThresholdValue, requirement ' + closure$requirement + ', value ' + closure$value;
    };
  }
  function TradeOffBoard$changeThresholdValue$lambda_0(closure$value, this$TradeOffBoard, closure$requirement) {
    return function ($receiver) {
      var tmp$;
      switch (this$TradeOffBoard.props.metric.name) {
        case 'Goals':
          tmp$ = this$TradeOffBoard.state.performanceRequirementsInputs;
          break;
        case 'Protection':
          tmp$ = this$TradeOffBoard.state.securityRequirementsInputs;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var $receiver_0 = tmp$;
      var first$result;
      first$break: do {
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(element.name, closure$requirement)) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      first$result.thresholdValue = closure$value;
      return Unit;
    };
  }
  TradeOffBoard.prototype.changeThresholdValue_0 = function (requirement, value) {
    logger_17.info_nq59yw$(TradeOffBoard$changeThresholdValue$lambda(requirement, value));
    setState(this, TradeOffBoard$changeThresholdValue$lambda_0(value, this, requirement));
  };
  function TradeOffBoard$changeThresholdType$lambda(closure$requirement, closure$threshold) {
    return function () {
      return 'changeThresholdType, requirement ' + closure$requirement + ', threshold ' + closure$threshold;
    };
  }
  function TradeOffBoard$changeThresholdType$lambda_0(closure$threshold, this$TradeOffBoard, closure$requirement) {
    return function ($receiver) {
      var tmp$;
      switch (this$TradeOffBoard.props.metric.name) {
        case 'Goals':
          tmp$ = this$TradeOffBoard.state.performanceRequirementsInputs;
          break;
        case 'Protection':
          tmp$ = this$TradeOffBoard.state.securityRequirementsInputs;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var $receiver_0 = tmp$;
      var first$result;
      first$break: do {
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(element.name, closure$requirement)) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      first$result.thresholdType = closure$threshold;
      return Unit;
    };
  }
  TradeOffBoard.prototype.changeThresholdType_0 = function (requirement, threshold) {
    logger_17.info_nq59yw$(TradeOffBoard$changeThresholdType$lambda(requirement, threshold));
    setState(this, TradeOffBoard$changeThresholdType$lambda_0(threshold, this, requirement));
  };
  function TradeOffBoard$changeWeightValue$lambda(closure$requirement, closure$weight) {
    return function () {
      return 'changeWeight, requirement ' + closure$requirement + ', weight ' + closure$weight;
    };
  }
  function TradeOffBoard$changeWeightValue$lambda_0(closure$weight, this$TradeOffBoard, closure$requirement) {
    return function ($receiver) {
      var tmp$;
      switch (this$TradeOffBoard.props.metric.name) {
        case 'Goals':
          tmp$ = this$TradeOffBoard.state.performanceRequirementsInputs;
          break;
        case 'Protection':
          tmp$ = this$TradeOffBoard.state.securityRequirementsInputs;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var $receiver_0 = tmp$;
      var first$result;
      first$break: do {
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(element.name, closure$requirement)) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      first$result.weight = closure$weight;
      return Unit;
    };
  }
  TradeOffBoard.prototype.changeWeightValue_0 = function (requirement, weight) {
    logger_17.info_nq59yw$(TradeOffBoard$changeWeightValue$lambda(requirement, weight));
    setState(this, TradeOffBoard$changeWeightValue$lambda_0(weight, this, requirement));
  };
  function TradeOffBoard$changeLikelihood$lambda(closure$domain, closure$attacker, closure$newLikelihood) {
    return function () {
      return 'ChangeLikelihood, domain ' + closure$domain + ', attacker ' + closure$attacker + ', newLikelihood ' + closure$newLikelihood;
    };
  }
  function TradeOffBoard$changeLikelihood$lambda_0(closure$newLikelihood, closure$domain, closure$attacker) {
    return function ($receiver) {
      var $receiver_0 = ensureNotNull($receiver.attackersInput.get_11rb$(closure$domain));
      var first$result;
      first$break: do {
        var tmp$;
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.attacker === closure$attacker) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      first$result.likelihood = closure$newLikelihood;
      return Unit;
    };
  }
  TradeOffBoard.prototype.changeLikelihood_0 = function (domain, attacker, newLikelihood) {
    logger_17.info_nq59yw$(TradeOffBoard$changeLikelihood$lambda(domain, attacker, newLikelihood));
    setState(this, TradeOffBoard$changeLikelihood$lambda_0(newLikelihood, domain, attacker));
  };
  function TradeOffBoard$toggleAssignment$lambda(closure$entity, closure$domain, closure$accepted) {
    return function () {
      return 'ToggleAssignment, entity ' + closure$entity + ', domain ' + closure$domain + ', accepted ' + closure$accepted;
    };
  }
  function TradeOffBoard$toggleAssignment$lambda_0(closure$accepted, closure$domain, closure$entity) {
    return function ($receiver) {
      if (closure$accepted) {
        ensureNotNull($receiver.assignments.get_11rb$(closure$domain)).add_11rb$(closure$entity);
      } else {
        ensureNotNull($receiver.assignments.get_11rb$(closure$domain)).remove_11rb$(closure$entity);
      }
      return Unit;
    };
  }
  TradeOffBoard.prototype.toggleAssignment_0 = function (entity, domain, accepted) {
    logger_17.info_nq59yw$(TradeOffBoard$toggleAssignment$lambda(entity, domain, accepted));
    setState(this, TradeOffBoard$toggleAssignment$lambda_0(accepted, domain, entity));
  };
  function TradeOffBoard$computePossibleArchitectures$lambda() {
    return 'Derive the list of possible assignments in the form of <domain, entity> tuples';
  }
  function TradeOffBoard$computePossibleArchitectures$lambda_0() {
    return 'Compute the power set of possible assignments, so to have all possible architectures';
  }
  function TradeOffBoard$computePossibleArchitectures$lambda_1() {
    return 'Compute the score of each architecture for each (security or performance) requirement';
  }
  function TradeOffBoard$computePossibleArchitectures$lambda_2(closure$architectures) {
    return function () {
      return 'There are ' + closure$architectures.size + ' architectures';
    };
  }
  TradeOffBoard.prototype.computePossibleArchitectures_0 = function () {
    var tmp$;
    if (equals(this.state, undefined)) {
      return emptyList();
    }logger_17.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda);
    var possibleAssignments = ArrayList_init();
    var tmp$_0;
    tmp$_0 = this.state.assignments.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var domain = element.key;
      var tmp$_1;
      tmp$_1 = element.value.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        possibleAssignments.add_11rb$(new Assignment(domain, element_0));
      }
    }
    this.props.handleChangeCircularProgressValue(50);
    logger_17.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda_0);
    var assignmentsPowerSet = powerSet(possibleAssignments);
    this.props.handleChangeCircularProgressValue(90);
    logger_17.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda_1);
    var architectures = ArrayList_init();
    var tmp$_2;
    tmp$_2 = assignmentsPowerSet.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      var numberOfEntities = HashMap_init();
      var tmp$_3;
      tmp$_3 = this.state.entities.iterator();
      while (tmp$_3.hasNext()) {
        var element_2 = tmp$_3.next();
        numberOfEntities.put_xwzc9p$(element_2, 0);
      }
      var tmp$_4;
      tmp$_4 = element_1.iterator();
      while (tmp$_4.hasNext()) {
        var element_3 = tmp$_4.next();
        var key = element_3.entity;
        var value = ensureNotNull(numberOfEntities.get_11rb$(element_3.entity)) + 1 | 0;
        numberOfEntities.put_xwzc9p$(key, value);
      }
      var discardArchitecture = {v: false};
      var tmp$_5;
      tmp$_5 = this.state.numberOfInstances.entries.iterator();
      while (tmp$_5.hasNext()) {
        var element_4 = tmp$_5.next();
        var numberOfEntity = ensureNotNull(numberOfEntities.get_11rb$(element_4.key));
        var minNumberOfEntity = element_4.value[0];
        var maxNumberOfEntity = element_4.value[1];
        if (numberOfEntity < minNumberOfEntity || numberOfEntity > maxNumberOfEntity) {
          discardArchitecture.v = true;
        }}
      if (!discardArchitecture.v) {
        var architecture = Architecture$Companion_getInstance().architectureFromAssignments_dliw48$(toList(element_1));
        var scoresArray = this.computeScoresArray_0(element_1);
        var excludeArchitecture = {v: false};
        if (this.props.algorithm === Algorithm$AdHoc_getInstance()) {
          var finalScore = {v: 0};
          var tmp$_6;
          tmp$_6 = scoresArray.entries.iterator();
          loop_label: while (tmp$_6.hasNext()) {
            var element_5 = tmp$_6.next();
            var tmp$_7;
            var requirementName = element_5.key;
            var tempScore = element_5.value;
            switch (this.props.metric.name) {
              case 'Goals':
                tmp$_7 = this.state.performanceRequirementsInputs;
                break;
              case 'Protection':
                tmp$_7 = this.state.securityRequirementsInputs;
                break;
              default:tmp$_7 = Kotlin.noWhenBranchMatched();
                break;
            }
            var $receiver = tmp$_7;
            var first$result;
            first$break: do {
              var tmp$_8;
              tmp$_8 = $receiver.iterator();
              while (tmp$_8.hasNext()) {
                var element_6 = tmp$_8.next();
                if (equals(element_6.name, requirementName)) {
                  first$result = element_6;
                  break first$break;
                }}
              throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
            }
             while (false);
            var requirement = first$result;
            switch (requirement.thresholdType.name) {
              case 'None':
                break;
              case 'Soft':
                if (tempScore < requirement.thresholdValue) {
                  tempScore = tempScore - requirement.penalty | 0;
                }
                break;
              case 'Hard':
                if (tempScore < requirement.thresholdValue) {
                  excludeArchitecture.v = true;
                }
                break;
            }
            finalScore.v = finalScore.v + tempScore | 0;
          }
          architecture.requirementsScore = finalScore.v;
        } else if (this.props.algorithm === Algorithm$Best_getInstance()) {
          architecture.arrayRequirementsScore = scoresArray;
        }if (!excludeArchitecture.v) {
          architectures.add_11rb$(architecture);
        }}}
    logger_17.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda_2(architectures));
    if (architectures.size !== 0) {
      tmp$ = this.orderArchitectures_0(architectures);
    } else {
      tmp$ = architectures;
    }
    return tmp$;
  };
  TradeOffBoard.prototype.computeScoresArray_0 = function (currentArchitecture) {
    var scoresArray = HashMap_init();
    if (this.props.metric === Metric$Goals_getInstance()) {
      var tmp$;
      tmp$ = performanceRequirementsImpact.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var requirementName = element.key;
        var score = {v: 0};
        var assignmentsAndImpact = element.value;
        var tmp$_0;
        tmp$_0 = currentArchitecture.iterator();
        loop_label: while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          var $receiver = this.state.performanceRequirementsInputs;
          var first$result;
          first$break: do {
            var tmp$_1;
            tmp$_1 = $receiver.iterator();
            while (tmp$_1.hasNext()) {
              var element_1 = tmp$_1.next();
              if (equals(element_1.name, requirementName.name)) {
                first$result = element_1;
                break first$break;
              }}
            throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
          }
           while (false);
          var requirement = first$result;
          var tmp$_2;
          tmp$_2 = score.v;
          var tmp$_3, tmp$_4;
          tmp$_4 = ensureNotNull(assignmentsAndImpact.get_11rb$(element_0));
          if (this.props.algorithm === Algorithm$AdHoc_getInstance()) {
            tmp$_3 = requirement.weight;
          } else {
            tmp$_3 = 1;
          }
          score.v = tmp$_2 + Kotlin.imul(tmp$_4, tmp$_3) | 0;
        }
        var key = requirementName.toString();
        var value = score.v;
        scoresArray.put_xwzc9p$(key, value);
      }
    } else if (this.props.metric === Metric$Protection_getInstance()) {
      var tmp$_5;
      tmp$_5 = securityRequirementsImpact.entries.iterator();
      loop_label: while (tmp$_5.hasNext()) {
        var element_2 = tmp$_5.next();
        var tmp$_6, tmp$_7, tmp$_8;
        var requirementName_0 = element_2.key.toString();
        var score_0 = {v: 3};
        var targetAndImpact = element_2.value;
        var tmp$_9;
        tmp$_9 = this.state.attackersInput.entries.iterator();
        while (tmp$_9.hasNext()) {
          var element_3 = tmp$_9.next();
          var domain = element_3.key;
          var attackers = element_3.value;
          var tmp$_10;
          tmp$_10 = attackers.iterator();
          loop_label_0: while (tmp$_10.hasNext()) {
            var element_4 = tmp$_10.next();
            var name = domain.toString();
            var $receiver_0 = Domains.values();
            var any$result;
            any$break: do {
              var tmp$_11;
              for (tmp$_11 = 0; tmp$_11 !== $receiver_0.length; ++tmp$_11) {
                var element_5 = $receiver_0[tmp$_11];
                if (equals(element_5.name, name)) {
                  any$result = true;
                  break any$break;
                }}
              any$result = false;
            }
             while (false);
            if (any$result) {
              var convertedDomain = Domains$valueOf(domain.toString());
              var destination = ArrayList_init();
              var tmp$_12;
              tmp$_12 = currentArchitecture.iterator();
              while (tmp$_12.hasNext()) {
                var element_6 = tmp$_12.next();
                if (element_6.domain === convertedDomain)
                  destination.add_11rb$(element_6);
              }
              var tmp$_13;
              tmp$_13 = destination.iterator();
              while (tmp$_13.hasNext()) {
                var element_7 = tmp$_13.next();
                var entityInDomain = element_7.entity;
                var convertedEntity = EntitiesWithChannels$valueOf(entityInDomain.toString());
                var a = score_0.v;
                var b = this.getProtectionLevel_0(ensureNotNull(targetAndImpact.get_11rb$(convertedEntity)), element_4.likelihood);
                score_0.v = JsMath.min(a, b);
              }
            } else {
              var firstDomainString = split(domain.toString(), ['_']).get_za3lpa$(0);
              var secondDomainString = split(domain.toString(), ['_']).get_za3lpa$(1);
              var firstDomain = Domains$valueOf(firstDomainString);
              var secondDomain = Domains$valueOf(secondDomainString);
              var entitiesInFirstDomain = ArrayList_init();
              var entitiesInSecondDomain = ArrayList_init();
              var tmp$_14;
              tmp$_14 = currentArchitecture.iterator();
              while (tmp$_14.hasNext()) {
                var element_8 = tmp$_14.next();
                if (element_8.domain === firstDomain) {
                  entitiesInFirstDomain.add_11rb$(element_8.entity);
                } else if (element_8.domain === secondDomain) {
                  entitiesInSecondDomain.add_11rb$(element_8.entity);
                }}
              var tmp$_15;
              tmp$_15 = entitiesInFirstDomain.iterator();
              while (tmp$_15.hasNext()) {
                var element_9 = tmp$_15.next();
                var tmp$_16;
                tmp$_16 = entitiesInSecondDomain.iterator();
                while (tmp$_16.hasNext()) {
                  var element_10 = tmp$_16.next();
                  var entityWithChannel = EntitiesWithChannels$valueOf(element_9.toString() + '_' + element_10);
                  var entityWithChannelReverse = EntitiesWithChannels$valueOf(element_10.toString() + '_' + element_9);
                  var eventualImpact = targetAndImpact.get_11rb$(entityWithChannel);
                  if (eventualImpact == null) {
                    eventualImpact = targetAndImpact.get_11rb$(entityWithChannelReverse);
                  }if (eventualImpact != null) {
                    var a_0 = score_0.v;
                    var b_0 = this.getProtectionLevel_0(eventualImpact, element_4.likelihood);
                    score_0.v = JsMath.min(a_0, b_0);
                  }}
              }
            }
          }
        }
        tmp$_8 = score_0.v;
        if (this.props.algorithm === Algorithm$AdHoc_getInstance()) {
          switch (this.props.metric.name) {
            case 'Goals':
              tmp$_6 = this.state.performanceRequirementsInputs;
              break;
            case 'Protection':
              tmp$_6 = this.state.securityRequirementsInputs;
              break;
            default:tmp$_6 = Kotlin.noWhenBranchMatched();
              break;
          }
          var $receiver_1 = tmp$_6;
          var first$result_0;
          first$break: do {
            var tmp$_17;
            tmp$_17 = $receiver_1.iterator();
            while (tmp$_17.hasNext()) {
              var element_11 = tmp$_17.next();
              if (equals(element_11.name, requirementName_0)) {
                first$result_0 = element_11;
                break first$break;
              }}
            throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
          }
           while (false);
          tmp$_7 = first$result_0.weight;
        } else {
          tmp$_7 = 1;
        }
        var value_0 = Kotlin.imul(tmp$_8, tmp$_7);
        scoresArray.put_xwzc9p$(requirementName_0, value_0);
      }
    }return scoresArray;
  };
  TradeOffBoard.prototype.getProtectionLevel_0 = function (impact, likelihood) {
    var tmp$;
    if (impact === Impact$None_getInstance() || likelihood === Likelihood$None_getInstance()) {
      tmp$ = 3;
    } else if (impact === Impact$Low_getInstance() || likelihood === Likelihood$Low_getInstance()) {
      tmp$ = 2;
    } else if (impact === Impact$Medium_getInstance() || likelihood === Likelihood$Medium_getInstance()) {
      tmp$ = 1;
    } else {
      tmp$ = 0;
    }
    return tmp$;
  };
  function TradeOffBoard$orderArchitectures$lambda(closure$possibleArchitectures) {
    return function () {
      return closure$possibleArchitectures.size.toString() + ' architectures are being ordered';
    };
  }
  function TradeOffBoard$orderArchitectures$lambda_0(it) {
    return it.requirementsScore;
  }
  function TradeOffBoard$orderArchitectures$lambda_1(closure$possibleArchitectures) {
    return function () {
      return closure$possibleArchitectures.size.toString() + ' architectures are optimal';
    };
  }
  TradeOffBoard.prototype.orderArchitectures_0 = function (possibleArchitectures) {
    var tmp$;
    logger_17.info_nq59yw$(TradeOffBoard$orderArchitectures$lambda(possibleArchitectures));
    switch (this.props.algorithm.name) {
      case 'AdHoc':
        tmp$ = toMutableList(sortedWith(possibleArchitectures, new Comparator(compareByDescending$lambda(TradeOffBoard$orderArchitectures$lambda_0))));
        break;
      case 'Best':
        var currentOptimal = {v: first(possibleArchitectures)};
        var tmp$_0;
        tmp$_0 = possibleArchitectures.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (this.dominates_0(element.arrayRequirementsScore, currentOptimal.v.arrayRequirementsScore)) {
            currentOptimal.v = element;
          }}

        var iterator = possibleArchitectures.iterator();
        while (iterator.hasNext()) {
          var currentArchitecture = iterator.next();
          if (this.dominates_0(currentOptimal.v.arrayRequirementsScore, currentArchitecture.arrayRequirementsScore)) {
            iterator.remove();
          }}

        logger_17.info_nq59yw$(TradeOffBoard$orderArchitectures$lambda_1(possibleArchitectures));
        tmp$ = possibleArchitectures;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  TradeOffBoard.prototype.dominates_0 = function (dominator, dominatee) {
    var dominate = {v: true};
    var majorInAtLeastOne = {v: false};
    var tmp$;
    tmp$ = dominator.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (ensureNotNull(dominatee.get_11rb$(element.key)) > element.value) {
        dominate.v = false;
      }if (element.value > ensureNotNull(dominatee.get_11rb$(element.key))) {
        majorInAtLeastOne.v = true;
      }}
    return dominate.v && majorInAtLeastOne.v;
  };
  function TradeOffBoard$init$lambda() {
    return 'Initializing the state of the TradeOffBoard component';
  }
  TradeOffBoard.prototype.init_b4e81d$ = function ($receiver) {
    logger_17.info_nq59yw$(TradeOffBoard$init$lambda);
    $receiver.domains = toMutableList_0(Domains$values());
    $receiver.entities = toMutableList_0(Entities$values());
    var $receiver_0 = PerformanceRequirements$values();
    var destination = ArrayList_init_0($receiver_0.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var item = $receiver_0[tmp$];
      destination.add_11rb$(new Requirement(item.toString()));
    }
    $receiver.performanceRequirementsInputs = destination;
    var $receiver_1 = SecurityRequirements$values();
    var destination_0 = ArrayList_init_0($receiver_1.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
      var item_0 = $receiver_1[tmp$_0];
      destination_0.add_11rb$(new Requirement(item_0.toString()));
    }
    $receiver.securityRequirementsInputs = destination_0;
    $receiver.attackersInput = linkedMapOf([to(DomainsWithChannels$Client_getInstance(), listOf_0(new Attacker(Attackers$MatD_getInstance()))), to(DomainsWithChannels$ESP_getInstance(), listOf_0(new Attacker(Attackers$Insider_getInstance()))), to(DomainsWithChannels$OnPremise_getInstance(), listOf_0(new Attacker(Attackers$Insider_getInstance()))), to(DomainsWithChannels$CSP_getInstance(), listOf_0(new Attacker(Attackers$Insider_getInstance()))), to(DomainsWithChannels$Client_ESP_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance()))), to(DomainsWithChannels$Client_OnPremise_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance()))), to(DomainsWithChannels$Client_CSP_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance()))), to(DomainsWithChannels$ESP_OnPremise_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance()))), to(DomainsWithChannels$ESP_CSP_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance()))), to(DomainsWithChannels$OnPremise_CSP_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance())))]);
    $receiver.numberOfInstances = HashMap_init();
    var $receiver_2 = Entities$values();
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver_2.length; ++tmp$_1) {
      var element = $receiver_2[tmp$_1];
      var $receiver_3 = $receiver.numberOfInstances;
      var value = [0, Domains$values().length];
      $receiver_3.put_xwzc9p$(element, value);
    }
    $receiver.assignments = HashMap_init();
    var $receiver_4 = Domains$values();
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_4.length; ++tmp$_2) {
      var element_0 = $receiver_4[tmp$_2];
      var $receiver_5 = $receiver.assignments;
      var value_0 = toMutableList_0(Entities$values());
      $receiver_5.put_xwzc9p$(element_0, value_0);
    }
    $receiver.architectures = emptyList();
  };
  TradeOffBoard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TradeOffBoard',
    interfaces: [RComponent]
  };
  function tradeOffBoard$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function tradeOffBoard$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(TradeOffBoard), tradeOffBoard$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function tradeOffBoard(handler) {
    return ensureNotNull(createElement(tradeOffBoard$lambda(handler)));
  }
  function Scenario(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Scenario_initFields() {
    Scenario_initFields = function () {
    };
    Scenario$CLOUD_instance = new Scenario('CLOUD', 0);
    Scenario$MQTT_instance = new Scenario('MQTT', 1);
  }
  var Scenario$CLOUD_instance;
  function Scenario$CLOUD_getInstance() {
    Scenario_initFields();
    return Scenario$CLOUD_instance;
  }
  var Scenario$MQTT_instance;
  function Scenario$MQTT_getInstance() {
    Scenario_initFields();
    return Scenario$MQTT_instance;
  }
  Scenario.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scenario',
    interfaces: [Enum]
  };
  function Scenario$values() {
    return [Scenario$CLOUD_getInstance(), Scenario$MQTT_getInstance()];
  }
  Scenario.values = Scenario$values;
  function Scenario$valueOf(name) {
    switch (name) {
      case 'CLOUD':
        return Scenario$CLOUD_getInstance();
      case 'MQTT':
        return Scenario$MQTT_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.Scenario.' + name);
    }
  }
  Scenario.valueOf_61zpoe$ = Scenario$valueOf;
  function Algorithm(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Algorithm_initFields() {
    Algorithm_initFields = function () {
    };
    Algorithm$Best_instance = new Algorithm('Best', 0);
    Algorithm$AdHoc_instance = new Algorithm('AdHoc', 1);
  }
  var Algorithm$Best_instance;
  function Algorithm$Best_getInstance() {
    Algorithm_initFields();
    return Algorithm$Best_instance;
  }
  var Algorithm$AdHoc_instance;
  function Algorithm$AdHoc_getInstance() {
    Algorithm_initFields();
    return Algorithm$AdHoc_instance;
  }
  Algorithm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Algorithm',
    interfaces: [Enum]
  };
  function Algorithm$values() {
    return [Algorithm$Best_getInstance(), Algorithm$AdHoc_getInstance()];
  }
  Algorithm.values = Algorithm$values;
  function Algorithm$valueOf(name) {
    switch (name) {
      case 'Best':
        return Algorithm$Best_getInstance();
      case 'AdHoc':
        return Algorithm$AdHoc_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.Algorithm.' + name);
    }
  }
  Algorithm.valueOf_61zpoe$ = Algorithm$valueOf;
  function Metric(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Metric_initFields() {
    Metric_initFields = function () {
    };
    Metric$Goals_instance = new Metric('Goals', 0);
    Metric$Protection_instance = new Metric('Protection', 1);
  }
  var Metric$Goals_instance;
  function Metric$Goals_getInstance() {
    Metric_initFields();
    return Metric$Goals_instance;
  }
  var Metric$Protection_instance;
  function Metric$Protection_getInstance() {
    Metric_initFields();
    return Metric$Protection_instance;
  }
  Metric.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Metric',
    interfaces: [Enum]
  };
  function Metric$values() {
    return [Metric$Goals_getInstance(), Metric$Protection_getInstance()];
  }
  Metric.values = Metric$values;
  function Metric$valueOf(name) {
    switch (name) {
      case 'Goals':
        return Metric$Goals_getInstance();
      case 'Protection':
        return Metric$Protection_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.Metric.' + name);
    }
  }
  Metric.valueOf_61zpoe$ = Metric$valueOf;
  function Domains(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Domains_initFields() {
    Domains_initFields = function () {
    };
    Domains$Client_instance = new Domains('Client', 0);
    Domains$ESP_instance = new Domains('ESP', 1);
    Domains$OnPremise_instance = new Domains('OnPremise', 2);
    Domains$CSP_instance = new Domains('CSP', 3);
  }
  var Domains$Client_instance;
  function Domains$Client_getInstance() {
    Domains_initFields();
    return Domains$Client_instance;
  }
  var Domains$ESP_instance;
  function Domains$ESP_getInstance() {
    Domains_initFields();
    return Domains$ESP_instance;
  }
  var Domains$OnPremise_instance;
  function Domains$OnPremise_getInstance() {
    Domains_initFields();
    return Domains$OnPremise_instance;
  }
  var Domains$CSP_instance;
  function Domains$CSP_getInstance() {
    Domains_initFields();
    return Domains$CSP_instance;
  }
  Domains.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Domains',
    interfaces: [Enum]
  };
  function Domains$values() {
    return [Domains$Client_getInstance(), Domains$ESP_getInstance(), Domains$OnPremise_getInstance(), Domains$CSP_getInstance()];
  }
  Domains.values = Domains$values;
  function Domains$valueOf(name) {
    switch (name) {
      case 'Client':
        return Domains$Client_getInstance();
      case 'ESP':
        return Domains$ESP_getInstance();
      case 'OnPremise':
        return Domains$OnPremise_getInstance();
      case 'CSP':
        return Domains$CSP_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.Domains.' + name);
    }
  }
  Domains.valueOf_61zpoe$ = Domains$valueOf;
  function DomainsWithChannels(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DomainsWithChannels_initFields() {
    DomainsWithChannels_initFields = function () {
    };
    DomainsWithChannels$Client_instance = new DomainsWithChannels('Client', 0);
    DomainsWithChannels$ESP_instance = new DomainsWithChannels('ESP', 1);
    DomainsWithChannels$OnPremise_instance = new DomainsWithChannels('OnPremise', 2);
    DomainsWithChannels$CSP_instance = new DomainsWithChannels('CSP', 3);
    DomainsWithChannels$Client_ESP_instance = new DomainsWithChannels('Client_ESP', 4);
    DomainsWithChannels$Client_OnPremise_instance = new DomainsWithChannels('Client_OnPremise', 5);
    DomainsWithChannels$Client_CSP_instance = new DomainsWithChannels('Client_CSP', 6);
    DomainsWithChannels$ESP_OnPremise_instance = new DomainsWithChannels('ESP_OnPremise', 7);
    DomainsWithChannels$ESP_CSP_instance = new DomainsWithChannels('ESP_CSP', 8);
    DomainsWithChannels$OnPremise_CSP_instance = new DomainsWithChannels('OnPremise_CSP', 9);
  }
  var DomainsWithChannels$Client_instance;
  function DomainsWithChannels$Client_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$Client_instance;
  }
  var DomainsWithChannels$ESP_instance;
  function DomainsWithChannels$ESP_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$ESP_instance;
  }
  var DomainsWithChannels$OnPremise_instance;
  function DomainsWithChannels$OnPremise_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$OnPremise_instance;
  }
  var DomainsWithChannels$CSP_instance;
  function DomainsWithChannels$CSP_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$CSP_instance;
  }
  var DomainsWithChannels$Client_ESP_instance;
  function DomainsWithChannels$Client_ESP_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$Client_ESP_instance;
  }
  var DomainsWithChannels$Client_OnPremise_instance;
  function DomainsWithChannels$Client_OnPremise_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$Client_OnPremise_instance;
  }
  var DomainsWithChannels$Client_CSP_instance;
  function DomainsWithChannels$Client_CSP_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$Client_CSP_instance;
  }
  var DomainsWithChannels$ESP_OnPremise_instance;
  function DomainsWithChannels$ESP_OnPremise_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$ESP_OnPremise_instance;
  }
  var DomainsWithChannels$ESP_CSP_instance;
  function DomainsWithChannels$ESP_CSP_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$ESP_CSP_instance;
  }
  var DomainsWithChannels$OnPremise_CSP_instance;
  function DomainsWithChannels$OnPremise_CSP_getInstance() {
    DomainsWithChannels_initFields();
    return DomainsWithChannels$OnPremise_CSP_instance;
  }
  DomainsWithChannels.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DomainsWithChannels',
    interfaces: [Enum]
  };
  function DomainsWithChannels$values() {
    return [DomainsWithChannels$Client_getInstance(), DomainsWithChannels$ESP_getInstance(), DomainsWithChannels$OnPremise_getInstance(), DomainsWithChannels$CSP_getInstance(), DomainsWithChannels$Client_ESP_getInstance(), DomainsWithChannels$Client_OnPremise_getInstance(), DomainsWithChannels$Client_CSP_getInstance(), DomainsWithChannels$ESP_OnPremise_getInstance(), DomainsWithChannels$ESP_CSP_getInstance(), DomainsWithChannels$OnPremise_CSP_getInstance()];
  }
  DomainsWithChannels.values = DomainsWithChannels$values;
  function DomainsWithChannels$valueOf(name) {
    switch (name) {
      case 'Client':
        return DomainsWithChannels$Client_getInstance();
      case 'ESP':
        return DomainsWithChannels$ESP_getInstance();
      case 'OnPremise':
        return DomainsWithChannels$OnPremise_getInstance();
      case 'CSP':
        return DomainsWithChannels$CSP_getInstance();
      case 'Client_ESP':
        return DomainsWithChannels$Client_ESP_getInstance();
      case 'Client_OnPremise':
        return DomainsWithChannels$Client_OnPremise_getInstance();
      case 'Client_CSP':
        return DomainsWithChannels$Client_CSP_getInstance();
      case 'ESP_OnPremise':
        return DomainsWithChannels$ESP_OnPremise_getInstance();
      case 'ESP_CSP':
        return DomainsWithChannels$ESP_CSP_getInstance();
      case 'OnPremise_CSP':
        return DomainsWithChannels$OnPremise_CSP_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.DomainsWithChannels.' + name);
    }
  }
  DomainsWithChannels.valueOf_61zpoe$ = DomainsWithChannels$valueOf;
  function Entities(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Entities_initFields() {
    Entities_initFields = function () {
    };
    Entities$CryptoAC_instance = new Entities('CryptoAC', 0);
    Entities$RM_instance = new Entities('RM', 1);
    Entities$MM_instance = new Entities('MM', 2);
    Entities$DM_instance = new Entities('DM', 3);
  }
  var Entities$CryptoAC_instance;
  function Entities$CryptoAC_getInstance() {
    Entities_initFields();
    return Entities$CryptoAC_instance;
  }
  var Entities$RM_instance;
  function Entities$RM_getInstance() {
    Entities_initFields();
    return Entities$RM_instance;
  }
  var Entities$MM_instance;
  function Entities$MM_getInstance() {
    Entities_initFields();
    return Entities$MM_instance;
  }
  var Entities$DM_instance;
  function Entities$DM_getInstance() {
    Entities_initFields();
    return Entities$DM_instance;
  }
  Entities.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entities',
    interfaces: [Enum]
  };
  function Entities$values() {
    return [Entities$CryptoAC_getInstance(), Entities$RM_getInstance(), Entities$MM_getInstance(), Entities$DM_getInstance()];
  }
  Entities.values = Entities$values;
  function Entities$valueOf(name) {
    switch (name) {
      case 'CryptoAC':
        return Entities$CryptoAC_getInstance();
      case 'RM':
        return Entities$RM_getInstance();
      case 'MM':
        return Entities$MM_getInstance();
      case 'DM':
        return Entities$DM_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.Entities.' + name);
    }
  }
  Entities.valueOf_61zpoe$ = Entities$valueOf;
  function EntitiesWithChannels(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EntitiesWithChannels_initFields() {
    EntitiesWithChannels_initFields = function () {
    };
    EntitiesWithChannels$CryptoAC_instance = new EntitiesWithChannels('CryptoAC', 0);
    EntitiesWithChannels$RM_instance = new EntitiesWithChannels('RM', 1);
    EntitiesWithChannels$MM_instance = new EntitiesWithChannels('MM', 2);
    EntitiesWithChannels$DM_instance = new EntitiesWithChannels('DM', 3);
    EntitiesWithChannels$CryptoAC_RM_instance = new EntitiesWithChannels('CryptoAC_RM', 4);
    EntitiesWithChannels$CryptoAC_DM_instance = new EntitiesWithChannels('CryptoAC_DM', 5);
    EntitiesWithChannels$CryptoAC_MM_instance = new EntitiesWithChannels('CryptoAC_MM', 6);
    EntitiesWithChannels$RM_MM_instance = new EntitiesWithChannels('RM_MM', 7);
    EntitiesWithChannels$RM_DM_instance = new EntitiesWithChannels('RM_DM', 8);
    EntitiesWithChannels$MM_DM_instance = new EntitiesWithChannels('MM_DM', 9);
  }
  var EntitiesWithChannels$CryptoAC_instance;
  function EntitiesWithChannels$CryptoAC_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$CryptoAC_instance;
  }
  var EntitiesWithChannels$RM_instance;
  function EntitiesWithChannels$RM_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$RM_instance;
  }
  var EntitiesWithChannels$MM_instance;
  function EntitiesWithChannels$MM_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$MM_instance;
  }
  var EntitiesWithChannels$DM_instance;
  function EntitiesWithChannels$DM_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$DM_instance;
  }
  var EntitiesWithChannels$CryptoAC_RM_instance;
  function EntitiesWithChannels$CryptoAC_RM_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$CryptoAC_RM_instance;
  }
  var EntitiesWithChannels$CryptoAC_DM_instance;
  function EntitiesWithChannels$CryptoAC_DM_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$CryptoAC_DM_instance;
  }
  var EntitiesWithChannels$CryptoAC_MM_instance;
  function EntitiesWithChannels$CryptoAC_MM_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$CryptoAC_MM_instance;
  }
  var EntitiesWithChannels$RM_MM_instance;
  function EntitiesWithChannels$RM_MM_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$RM_MM_instance;
  }
  var EntitiesWithChannels$RM_DM_instance;
  function EntitiesWithChannels$RM_DM_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$RM_DM_instance;
  }
  var EntitiesWithChannels$MM_DM_instance;
  function EntitiesWithChannels$MM_DM_getInstance() {
    EntitiesWithChannels_initFields();
    return EntitiesWithChannels$MM_DM_instance;
  }
  EntitiesWithChannels.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntitiesWithChannels',
    interfaces: [Enum]
  };
  function EntitiesWithChannels$values() {
    return [EntitiesWithChannels$CryptoAC_getInstance(), EntitiesWithChannels$RM_getInstance(), EntitiesWithChannels$MM_getInstance(), EntitiesWithChannels$DM_getInstance(), EntitiesWithChannels$CryptoAC_RM_getInstance(), EntitiesWithChannels$CryptoAC_DM_getInstance(), EntitiesWithChannels$CryptoAC_MM_getInstance(), EntitiesWithChannels$RM_MM_getInstance(), EntitiesWithChannels$RM_DM_getInstance(), EntitiesWithChannels$MM_DM_getInstance()];
  }
  EntitiesWithChannels.values = EntitiesWithChannels$values;
  function EntitiesWithChannels$valueOf(name) {
    switch (name) {
      case 'CryptoAC':
        return EntitiesWithChannels$CryptoAC_getInstance();
      case 'RM':
        return EntitiesWithChannels$RM_getInstance();
      case 'MM':
        return EntitiesWithChannels$MM_getInstance();
      case 'DM':
        return EntitiesWithChannels$DM_getInstance();
      case 'CryptoAC_RM':
        return EntitiesWithChannels$CryptoAC_RM_getInstance();
      case 'CryptoAC_DM':
        return EntitiesWithChannels$CryptoAC_DM_getInstance();
      case 'CryptoAC_MM':
        return EntitiesWithChannels$CryptoAC_MM_getInstance();
      case 'RM_MM':
        return EntitiesWithChannels$RM_MM_getInstance();
      case 'RM_DM':
        return EntitiesWithChannels$RM_DM_getInstance();
      case 'MM_DM':
        return EntitiesWithChannels$MM_DM_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.EntitiesWithChannels.' + name);
    }
  }
  EntitiesWithChannels.valueOf_61zpoe$ = EntitiesWithChannels$valueOf;
  function Attackers(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Attackers_initFields() {
    Attackers_initFields = function () {
    };
    Attackers$MitM_instance = new Attackers('MitM', 0);
    Attackers$Insider_instance = new Attackers('Insider', 1);
    Attackers$MatD_instance = new Attackers('MatD', 2);
  }
  var Attackers$MitM_instance;
  function Attackers$MitM_getInstance() {
    Attackers_initFields();
    return Attackers$MitM_instance;
  }
  var Attackers$Insider_instance;
  function Attackers$Insider_getInstance() {
    Attackers_initFields();
    return Attackers$Insider_instance;
  }
  var Attackers$MatD_instance;
  function Attackers$MatD_getInstance() {
    Attackers_initFields();
    return Attackers$MatD_instance;
  }
  Attackers.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attackers',
    interfaces: [Enum]
  };
  function Attackers$values() {
    return [Attackers$MitM_getInstance(), Attackers$Insider_getInstance(), Attackers$MatD_getInstance()];
  }
  Attackers.values = Attackers$values;
  function Attackers$valueOf(name) {
    switch (name) {
      case 'MitM':
        return Attackers$MitM_getInstance();
      case 'Insider':
        return Attackers$Insider_getInstance();
      case 'MatD':
        return Attackers$MatD_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.Attackers.' + name);
    }
  }
  Attackers.valueOf_61zpoe$ = Attackers$valueOf;
  function Likelihood(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Likelihood_initFields() {
    Likelihood_initFields = function () {
    };
    Likelihood$High_instance = new Likelihood('High', 0);
    Likelihood$Medium_instance = new Likelihood('Medium', 1);
    Likelihood$Low_instance = new Likelihood('Low', 2);
    Likelihood$None_instance = new Likelihood('None', 3);
  }
  var Likelihood$High_instance;
  function Likelihood$High_getInstance() {
    Likelihood_initFields();
    return Likelihood$High_instance;
  }
  var Likelihood$Medium_instance;
  function Likelihood$Medium_getInstance() {
    Likelihood_initFields();
    return Likelihood$Medium_instance;
  }
  var Likelihood$Low_instance;
  function Likelihood$Low_getInstance() {
    Likelihood_initFields();
    return Likelihood$Low_instance;
  }
  var Likelihood$None_instance;
  function Likelihood$None_getInstance() {
    Likelihood_initFields();
    return Likelihood$None_instance;
  }
  Likelihood.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Likelihood',
    interfaces: [Enum]
  };
  function Likelihood$values() {
    return [Likelihood$High_getInstance(), Likelihood$Medium_getInstance(), Likelihood$Low_getInstance(), Likelihood$None_getInstance()];
  }
  Likelihood.values = Likelihood$values;
  function Likelihood$valueOf(name) {
    switch (name) {
      case 'High':
        return Likelihood$High_getInstance();
      case 'Medium':
        return Likelihood$Medium_getInstance();
      case 'Low':
        return Likelihood$Low_getInstance();
      case 'None':
        return Likelihood$None_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.Likelihood.' + name);
    }
  }
  Likelihood.valueOf_61zpoe$ = Likelihood$valueOf;
  function Impact(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Impact_initFields() {
    Impact_initFields = function () {
    };
    Impact$High_instance = new Impact('High', 0);
    Impact$Medium_instance = new Impact('Medium', 1);
    Impact$Low_instance = new Impact('Low', 2);
    Impact$None_instance = new Impact('None', 3);
  }
  var Impact$High_instance;
  function Impact$High_getInstance() {
    Impact_initFields();
    return Impact$High_instance;
  }
  var Impact$Medium_instance;
  function Impact$Medium_getInstance() {
    Impact_initFields();
    return Impact$Medium_instance;
  }
  var Impact$Low_instance;
  function Impact$Low_getInstance() {
    Impact_initFields();
    return Impact$Low_instance;
  }
  var Impact$None_instance;
  function Impact$None_getInstance() {
    Impact_initFields();
    return Impact$None_instance;
  }
  Impact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Impact',
    interfaces: [Enum]
  };
  function Impact$values() {
    return [Impact$High_getInstance(), Impact$Medium_getInstance(), Impact$Low_getInstance(), Impact$None_getInstance()];
  }
  Impact.values = Impact$values;
  function Impact$valueOf(name) {
    switch (name) {
      case 'High':
        return Impact$High_getInstance();
      case 'Medium':
        return Impact$Medium_getInstance();
      case 'Low':
        return Impact$Low_getInstance();
      case 'None':
        return Impact$None_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.Impact.' + name);
    }
  }
  Impact.valueOf_61zpoe$ = Impact$valueOf;
  function Threshold(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Threshold_initFields() {
    Threshold_initFields = function () {
    };
    Threshold$None_instance = new Threshold('None', 0);
    Threshold$Soft_instance = new Threshold('Soft', 1);
    Threshold$Hard_instance = new Threshold('Hard', 2);
  }
  var Threshold$None_instance;
  function Threshold$None_getInstance() {
    Threshold_initFields();
    return Threshold$None_instance;
  }
  var Threshold$Soft_instance;
  function Threshold$Soft_getInstance() {
    Threshold_initFields();
    return Threshold$Soft_instance;
  }
  var Threshold$Hard_instance;
  function Threshold$Hard_getInstance() {
    Threshold_initFields();
    return Threshold$Hard_instance;
  }
  Threshold.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Threshold',
    interfaces: [Enum]
  };
  function Threshold$values() {
    return [Threshold$None_getInstance(), Threshold$Soft_getInstance(), Threshold$Hard_getInstance()];
  }
  Threshold.values = Threshold$values;
  function Threshold$valueOf(name) {
    switch (name) {
      case 'None':
        return Threshold$None_getInstance();
      case 'Soft':
        return Threshold$Soft_getInstance();
      case 'Hard':
        return Threshold$Hard_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.Threshold.' + name);
    }
  }
  Threshold.valueOf_61zpoe$ = Threshold$valueOf;
  function SecurityRequirements(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SecurityRequirements_initFields() {
    SecurityRequirements_initFields = function () {
    };
    SecurityRequirements$Confidentiality_instance = new SecurityRequirements('Confidentiality', 0);
    SecurityRequirements$Integrity_instance = new SecurityRequirements('Integrity', 1);
    SecurityRequirements$Availability_instance = new SecurityRequirements('Availability', 2);
  }
  var SecurityRequirements$Confidentiality_instance;
  function SecurityRequirements$Confidentiality_getInstance() {
    SecurityRequirements_initFields();
    return SecurityRequirements$Confidentiality_instance;
  }
  var SecurityRequirements$Integrity_instance;
  function SecurityRequirements$Integrity_getInstance() {
    SecurityRequirements_initFields();
    return SecurityRequirements$Integrity_instance;
  }
  var SecurityRequirements$Availability_instance;
  function SecurityRequirements$Availability_getInstance() {
    SecurityRequirements_initFields();
    return SecurityRequirements$Availability_instance;
  }
  SecurityRequirements.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SecurityRequirements',
    interfaces: [Enum]
  };
  function SecurityRequirements$values() {
    return [SecurityRequirements$Confidentiality_getInstance(), SecurityRequirements$Integrity_getInstance(), SecurityRequirements$Availability_getInstance()];
  }
  SecurityRequirements.values = SecurityRequirements$values;
  function SecurityRequirements$valueOf(name) {
    switch (name) {
      case 'Confidentiality':
        return SecurityRequirements$Confidentiality_getInstance();
      case 'Integrity':
        return SecurityRequirements$Integrity_getInstance();
      case 'Availability':
        return SecurityRequirements$Availability_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.SecurityRequirements.' + name);
    }
  }
  SecurityRequirements.valueOf_61zpoe$ = SecurityRequirements$valueOf;
  function PerformanceRequirements(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PerformanceRequirements_initFields() {
    PerformanceRequirements_initFields = function () {
    };
    PerformanceRequirements$Redundancy_instance = new PerformanceRequirements('Redundancy', 0);
    PerformanceRequirements$Scalability_instance = new PerformanceRequirements('Scalability', 1);
    PerformanceRequirements$Reliability_instance = new PerformanceRequirements('Reliability', 2);
    PerformanceRequirements$Maintenance_instance = new PerformanceRequirements('Maintenance', 3);
    PerformanceRequirements$DoS_Resilience_instance = new PerformanceRequirements('DoS_Resilience', 4);
    PerformanceRequirements$CSP_Vendor_Lock_in_instance = new PerformanceRequirements('CSP_Vendor_Lock_in', 5);
    PerformanceRequirements$On_premise_Savings_instance = new PerformanceRequirements('On_premise_Savings', 6);
    PerformanceRequirements$CSP_Savings_instance = new PerformanceRequirements('CSP_Savings', 7);
    PerformanceRequirements$Latency_instance = new PerformanceRequirements('Latency', 8);
    PerformanceRequirements$Throughput_instance = new PerformanceRequirements('Throughput', 9);
    PerformanceRequirements$Computational_Power_instance = new PerformanceRequirements('Computational_Power', 10);
    PerformanceRequirements$Storage_capacity_instance = new PerformanceRequirements('Storage_capacity', 11);
    PerformanceRequirements$ESP_Vendor_Lock_in_instance = new PerformanceRequirements('ESP_Vendor_Lock_in', 12);
    PerformanceRequirements$ESP_Savings_instance = new PerformanceRequirements('ESP_Savings', 13);
  }
  var PerformanceRequirements$Redundancy_instance;
  function PerformanceRequirements$Redundancy_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$Redundancy_instance;
  }
  var PerformanceRequirements$Scalability_instance;
  function PerformanceRequirements$Scalability_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$Scalability_instance;
  }
  var PerformanceRequirements$Reliability_instance;
  function PerformanceRequirements$Reliability_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$Reliability_instance;
  }
  var PerformanceRequirements$Maintenance_instance;
  function PerformanceRequirements$Maintenance_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$Maintenance_instance;
  }
  var PerformanceRequirements$DoS_Resilience_instance;
  function PerformanceRequirements$DoS_Resilience_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$DoS_Resilience_instance;
  }
  var PerformanceRequirements$CSP_Vendor_Lock_in_instance;
  function PerformanceRequirements$CSP_Vendor_Lock_in_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$CSP_Vendor_Lock_in_instance;
  }
  var PerformanceRequirements$On_premise_Savings_instance;
  function PerformanceRequirements$On_premise_Savings_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$On_premise_Savings_instance;
  }
  var PerformanceRequirements$CSP_Savings_instance;
  function PerformanceRequirements$CSP_Savings_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$CSP_Savings_instance;
  }
  var PerformanceRequirements$Latency_instance;
  function PerformanceRequirements$Latency_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$Latency_instance;
  }
  var PerformanceRequirements$Throughput_instance;
  function PerformanceRequirements$Throughput_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$Throughput_instance;
  }
  var PerformanceRequirements$Computational_Power_instance;
  function PerformanceRequirements$Computational_Power_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$Computational_Power_instance;
  }
  var PerformanceRequirements$Storage_capacity_instance;
  function PerformanceRequirements$Storage_capacity_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$Storage_capacity_instance;
  }
  var PerformanceRequirements$ESP_Vendor_Lock_in_instance;
  function PerformanceRequirements$ESP_Vendor_Lock_in_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$ESP_Vendor_Lock_in_instance;
  }
  var PerformanceRequirements$ESP_Savings_instance;
  function PerformanceRequirements$ESP_Savings_getInstance() {
    PerformanceRequirements_initFields();
    return PerformanceRequirements$ESP_Savings_instance;
  }
  PerformanceRequirements.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PerformanceRequirements',
    interfaces: [Enum]
  };
  function PerformanceRequirements$values() {
    return [PerformanceRequirements$Redundancy_getInstance(), PerformanceRequirements$Scalability_getInstance(), PerformanceRequirements$Reliability_getInstance(), PerformanceRequirements$Maintenance_getInstance(), PerformanceRequirements$DoS_Resilience_getInstance(), PerformanceRequirements$CSP_Vendor_Lock_in_getInstance(), PerformanceRequirements$On_premise_Savings_getInstance(), PerformanceRequirements$CSP_Savings_getInstance(), PerformanceRequirements$Latency_getInstance(), PerformanceRequirements$Throughput_getInstance(), PerformanceRequirements$Computational_Power_getInstance(), PerformanceRequirements$Storage_capacity_getInstance(), PerformanceRequirements$ESP_Vendor_Lock_in_getInstance(), PerformanceRequirements$ESP_Savings_getInstance()];
  }
  PerformanceRequirements.values = PerformanceRequirements$values;
  function PerformanceRequirements$valueOf(name) {
    switch (name) {
      case 'Redundancy':
        return PerformanceRequirements$Redundancy_getInstance();
      case 'Scalability':
        return PerformanceRequirements$Scalability_getInstance();
      case 'Reliability':
        return PerformanceRequirements$Reliability_getInstance();
      case 'Maintenance':
        return PerformanceRequirements$Maintenance_getInstance();
      case 'DoS_Resilience':
        return PerformanceRequirements$DoS_Resilience_getInstance();
      case 'CSP_Vendor_Lock_in':
        return PerformanceRequirements$CSP_Vendor_Lock_in_getInstance();
      case 'On_premise_Savings':
        return PerformanceRequirements$On_premise_Savings_getInstance();
      case 'CSP_Savings':
        return PerformanceRequirements$CSP_Savings_getInstance();
      case 'Latency':
        return PerformanceRequirements$Latency_getInstance();
      case 'Throughput':
        return PerformanceRequirements$Throughput_getInstance();
      case 'Computational_Power':
        return PerformanceRequirements$Computational_Power_getInstance();
      case 'Storage_capacity':
        return PerformanceRequirements$Storage_capacity_getInstance();
      case 'ESP_Vendor_Lock_in':
        return PerformanceRequirements$ESP_Vendor_Lock_in_getInstance();
      case 'ESP_Savings':
        return PerformanceRequirements$ESP_Savings_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.view.content.tradeoffboard.PerformanceRequirements.' + name);
    }
  }
  PerformanceRequirements.valueOf_61zpoe$ = PerformanceRequirements$valueOf;
  function getImageFromEntity(entity) {
    switch (entity.name) {
      case 'CryptoAC':
        return 'proxy.png';
      case 'RM':
        return 'rm.png';
      case 'MM':
        return 'mm.png';
      case 'DM':
        return 'dm.png';
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  var performanceRequirementsImpact;
  var securityRequirementsImpact;
  function styledDiv$lambda_14(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function td$lambda(closure$classes) {
    return function (it) {
      return new TD_init_0(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledTd$lambda_1(it) {
    return new TD_init(html.emptyMap, it);
  }
  function TrustAssumptionsLikelihood() {
    RComponent_init(this);
  }
  function TrustAssumptionsLikelihood$render$lambda$lambda$lambda$lambda$lambda(closure$newLikelihood) {
    return function ($receiver) {
      $receiver.currentLikelihood = closure$newLikelihood;
      return Unit;
    };
  }
  function TrustAssumptionsLikelihood$render$lambda$lambda$lambda$lambda(this$TrustAssumptionsLikelihood) {
    return function (event) {
      var tmp$;
      var newLikelihood = Likelihood$valueOf((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      setState(this$TrustAssumptionsLikelihood, TrustAssumptionsLikelihood$render$lambda$lambda$lambda$lambda$lambda(newLikelihood));
      this$TrustAssumptionsLikelihood.props.handleChangeLikelihood(this$TrustAssumptionsLikelihood.props.domain, this$TrustAssumptionsLikelihood.props.attacker, newLikelihood);
      return true;
    };
  }
  function TrustAssumptionsLikelihood$render$lambda$lambda$lambda(this$TrustAssumptionsLikelihood) {
    return function ($receiver) {
      $receiver.row = true;
      $receiver.defaultValue = this$TrustAssumptionsLikelihood.props.defaultValue.toString();
      var $receiver_0 = Likelihood$values();
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(new CryptoACRadioOption('', item.toString(), 'primary'));
      }
      $receiver.options = destination;
      $receiver.onChange = TrustAssumptionsLikelihood$render$lambda$lambda$lambda$lambda(this$TrustAssumptionsLikelihood);
      return Unit;
    };
  }
  TrustAssumptionsLikelihood.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$(this.props.attacker.toString());
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_1);
    var $receiver_1 = $receiver_0_0.css;
    var tmp$;
    switch (this.state.currentLikelihood.name) {
      case 'High':
        tmp$ = '#c0392b';
        break;
      case 'Medium':
        tmp$ = '#f39c12';
        break;
      case 'Low':
        tmp$ = '#27ae60';
        break;
      case 'None':
        tmp$ = '#bdc3c7';
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    set_color($receiver_1, new Color(tmp$));
    set_width($receiver_1, get_px(100));
    $receiver_0_0.unaryPlus_pdl1vz$(this.state.currentLikelihood.toString());
    $receiver.child_30b5ua$($receiver_0_0.create());
    var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_1);
    var $receiver_2 = $receiver_0_1.css;
    if (this.props.last) {
      set_borderBottomRightRadius($receiver_2, get_px(15));
    }var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_14);
    $receiver_0_2.key = this.props.domain.toString();
    set_display($receiver_0_2.css, Display.block);
    $receiver_0_2.child_30b5ua$(cryptoACRadioGroup(TrustAssumptionsLikelihood$render$lambda$lambda$lambda(this)));
    $receiver_0_1.child_30b5ua$($receiver_0_2.create());
    $receiver.child_30b5ua$($receiver_0_1.create());
  };
  function TrustAssumptionsLikelihood$init$lambda$lambda(this$TrustAssumptionsLikelihood) {
    return function ($receiver) {
      $receiver.currentLikelihood = this$TrustAssumptionsLikelihood.props.defaultValue;
      return Unit;
    };
  }
  function Coroutine$TrustAssumptionsLikelihood$init$lambda(this$TrustAssumptionsLikelihood_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$TrustAssumptionsLikelihood = this$TrustAssumptionsLikelihood_0;
  }
  Coroutine$TrustAssumptionsLikelihood$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TrustAssumptionsLikelihood$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TrustAssumptionsLikelihood$init$lambda.prototype.constructor = Coroutine$TrustAssumptionsLikelihood$init$lambda;
  Coroutine$TrustAssumptionsLikelihood$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return setState(this.local$this$TrustAssumptionsLikelihood, TrustAssumptionsLikelihood$init$lambda$lambda(this.local$this$TrustAssumptionsLikelihood)), Unit;
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
  function TrustAssumptionsLikelihood$init$lambda(this$TrustAssumptionsLikelihood_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$TrustAssumptionsLikelihood$init$lambda(this$TrustAssumptionsLikelihood_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  TrustAssumptionsLikelihood.prototype.init_b4e81d$ = function ($receiver) {
    $receiver.currentLikelihood = Likelihood$High_getInstance();
    launch(MainScope(), void 0, void 0, TrustAssumptionsLikelihood$init$lambda(this));
  };
  TrustAssumptionsLikelihood.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    return nextProps.defaultValue !== this.props.defaultValue || nextState.currentLikelihood !== this.state.currentLikelihood;
  };
  TrustAssumptionsLikelihood.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrustAssumptionsLikelihood',
    interfaces: [RComponent]
  };
  function trustAssumptionsLikelihood$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function trustAssumptionsLikelihood$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(TrustAssumptionsLikelihood), trustAssumptionsLikelihood$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function trustAssumptionsLikelihood(handler) {
    return ensureNotNull(createElement(trustAssumptionsLikelihood$lambda(handler)));
  }
  function submitForm$lambda_1($receiver) {
    return Unit;
  }
  var submitForm$lambda_0_0 = wrapFunction(function () {
    var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
    var OutgoingContent = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var reflect = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass_0 = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$encodeInQuery, closure$formParameters, closure$block) {
      return function ($receiver) {
        if (closure$encodeInQuery) {
          $receiver.method = HttpMethod_0.Companion.Get;
          $receiver.url.parameters.appendAll_hb0ubp$(closure$formParameters);
        } else {
          $receiver.method = HttpMethod_0.Companion.Post;
          var body = new FormDataContent(closure$formParameters);
          if (body == null) {
            $receiver.body = utils.EmptyContent;
            $receiver.bodyType = null;
          } else if (Kotlin.isType(body, OutgoingContent)) {
            $receiver.body = body;
            $receiver.bodyType = null;
          } else {
            $receiver.body = body;
            var tmp$ = reflect.JsType;
            var tmp$_0 = getKClass_0(FormDataContent);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(FormDataContent), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
          }
        }
        closure$block($receiver);
        return Unit;
      };
    };
  });
  var submitFormWithBinaryData$lambda = wrapFunction(function () {
    var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
    var OutgoingContent = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var reflect = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass_0 = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$formData, closure$block) {
      return function ($receiver) {
        $receiver.method = HttpMethod_0.Companion.Post;
        var body = new MultiPartFormDataContent_init(closure$formData);
        if (body == null) {
          $receiver.body = utils.EmptyContent;
          $receiver.bodyType = null;
        } else if (Kotlin.isType(body, OutgoingContent)) {
          $receiver.body = body;
          $receiver.bodyType = null;
        } else {
          $receiver.body = body;
          var tmp$ = reflect.JsType;
          var tmp$_0 = getKClass_0(MultiPartFormDataContent_init);
          var tryGetType$result;
          tryGetType$break: do {
            try {
              tryGetType$result = createKType(getKClass(MultiPartFormDataContent_init), [], false);
            } catch (cause) {
              if (Kotlin.isType(cause, Throwable)) {
                tryGetType$result = null;
                break tryGetType$break;
              } else
                throw cause;
            }
          }
           while (false);
          $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
        }
        closure$block($receiver);
        return Unit;
      };
    };
  });
  function submitFormWithBinaryData$lambda_0($receiver) {
    return Unit;
  }
  function logger$lambda_18() {
    return Unit;
  }
  var logger_18;
  function Actions() {
    RComponent_init(this);
    this.adminCryptoACFormsRBACCLOUD_0 = listOf([new CryptoACFormData('add_user', 'Add User', $module$react_icons_fa.FaUserPlus, API_getInstance().CRYPTOAC + API_getInstance().USERS, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACCLOUD$lambda(this)), new CryptoACFormData('add_role', 'Add Role', $module$react_icons_fa.FaUserSecret, API_getInstance().CRYPTOAC + API_getInstance().ROLES, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACCLOUD$lambda_0(this)), new CryptoACFormData('assign_user_to_role', 'Assign User to Role', $module$react_icons_fa.FaUserFriends, API_getInstance().CRYPTOAC + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))]), Actions$adminCryptoACFormsRBACCLOUD$lambda_1(this)), new CryptoACFormData('assign_permission_to_role', 'Assign Permission to Role', $module$react_icons_fa.FaUserShield, API_getInstance().CRYPTOAC + API_getInstance().PERMISSIONS, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType$radio_getInstance(), listOf([PermissionType$READ_getInstance().toString(), PermissionType$READWRITE_getInstance().toString()]), PermissionType$READ_getInstance().toString()))]), Actions$adminCryptoACFormsRBACCLOUD$lambda_2(this), true), new CryptoACFormData('delete_user', 'Delete User', $module$react_icons_fa.FaUserMinus, API_getInstance().CRYPTOAC + API_getInstance().USERS, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACCLOUD$lambda_3(this)), new CryptoACFormData('delete_role', 'Delete Role', $module$react_icons_fa.FaUserNinja, API_getInstance().CRYPTOAC + API_getInstance().ROLES, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACCLOUD$lambda_4(this)), new CryptoACFormData('delete_file', 'Delete File', $module$react_icons_fa.FaFileExcel, API_getInstance().CRYPTOAC + API_getInstance().FILES, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACCLOUD$lambda_5(this)), new CryptoACFormData('revoke_user_from_role', 'Revoke User from Role', $module$react_icons_fa.FaUserTimes, API_getInstance().CRYPTOAC + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))]), Actions$adminCryptoACFormsRBACCLOUD$lambda_6(this)), new CryptoACFormData('revoke_permission_from_role', 'Revoke Permission from Role', $module$react_icons_fa.FaUserLock, API_getInstance().CRYPTOAC + API_getInstance().PERMISSIONS, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType$radio_getInstance(), listOf([PermissionType$READWRITE_getInstance().toString(), PermissionType$WRITE_getInstance().toString()]), PermissionType$READWRITE_getInstance().toString()))]), Actions$adminCryptoACFormsRBACCLOUD$lambda_7(this), true)]);
    this.userCryptoACFormsRBACCloud_0 = listOf([new CryptoACFormData('add_file', 'Add File', $module$react_icons_fa.FaFileMedical, API_getInstance().CRYPTOAC + API_getInstance().FILES, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, SERVER_getInstance().FILE_NAME, InputType$file_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ENFORCEMENT, SERVER_getInstance().ENFORCEMENT, InputType$radio_getInstance(), listOf([EnforcementType$COMBINED_getInstance().toString(), EnforcementType$TRADITIONAL_getInstance().toString()]), EnforcementType$COMBINED_getInstance().toString()))]), Actions$userCryptoACFormsRBACCloud$lambda(this)), new CryptoACFormData('write_file', 'Write File', $module$react_icons_fa.FaFileSignature, API_getInstance().CRYPTOAC + API_getInstance().FILES, HttpMethod.Companion.Patch, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, SERVER_getInstance().FILE_NAME, InputType$file_getInstance()))), Actions$userCryptoACFormsRBACCloud$lambda_0(this)), new CryptoACFormData('read_file', 'Read File', $module$react_icons_fa.FaFileDownload, API_getInstance().CRYPTOAC + API_getInstance().FILES, HttpMethod.Companion.Get, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType$text_getInstance()))), Actions$userCryptoACFormsRBACCloud$lambda_1(this))]);
    this.adminCryptoACFormsRBACMQTT_0 = listOf([new CryptoACFormData('add_user', 'Add User', $module$react_icons_fa.FaUserPlus, API_getInstance().CRYPTOAC + API_getInstance().USERS, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACMQTT$lambda(this)), new CryptoACFormData('add_role', 'Add Role', $module$react_icons_fa.FaUserSecret, API_getInstance().CRYPTOAC + API_getInstance().ROLES, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACMQTT$lambda_0(this)), new CryptoACFormData('add_file', 'Add Topic', $module$react_icons_fa.FaFileMedical, API_getInstance().CRYPTOAC + API_getInstance().FILES, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, SERVER_getInstance().FILE_NAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ENFORCEMENT, SERVER_getInstance().ENFORCEMENT, InputType$radio_getInstance(), listOf([EnforcementType$COMBINED_getInstance().toString(), EnforcementType$TRADITIONAL_getInstance().toString()]), EnforcementType$COMBINED_getInstance().toString()))]), Actions$adminCryptoACFormsRBACMQTT$lambda_1(this)), new CryptoACFormData('assign_user_to_role', 'Assign User to Role', $module$react_icons_fa.FaUserFriends, API_getInstance().CRYPTOAC + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))]), Actions$adminCryptoACFormsRBACMQTT$lambda_2(this)), new CryptoACFormData('assign_permission_to_role', 'Assign Permission to Role', $module$react_icons_fa.FaUserShield, API_getInstance().CRYPTOAC + API_getInstance().PERMISSIONS, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType$radio_getInstance(), listOf([PermissionType$READ_getInstance().toString(), PermissionType$READWRITE_getInstance().toString()]), PermissionType$READ_getInstance().toString()))]), Actions$adminCryptoACFormsRBACMQTT$lambda_3(this), true), new CryptoACFormData('delete_user', 'Delete User', $module$react_icons_fa.FaUserMinus, API_getInstance().CRYPTOAC + API_getInstance().USERS, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACMQTT$lambda_4(this)), new CryptoACFormData('delete_role', 'Delete Role', $module$react_icons_fa.FaUserNinja, API_getInstance().CRYPTOAC + API_getInstance().ROLES, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACMQTT$lambda_5(this)), new CryptoACFormData('delete_file', 'Delete Topic', $module$react_icons_fa.FaFileExcel, API_getInstance().CRYPTOAC + API_getInstance().FILES, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance()))), Actions$adminCryptoACFormsRBACMQTT$lambda_6(this)), new CryptoACFormData('revoke_user_from_role', 'Revoke User from Role', $module$react_icons_fa.FaUserTimes, API_getInstance().CRYPTOAC + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))]), Actions$adminCryptoACFormsRBACMQTT$lambda_7(this)), new CryptoACFormData('revoke_permission_from_role', 'Revoke Permission from Role', $module$react_icons_fa.FaUserLock, API_getInstance().CRYPTOAC + API_getInstance().PERMISSIONS, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType$radio_getInstance(), listOf([PermissionType$READWRITE_getInstance().toString(), PermissionType$WRITE_getInstance().toString()]), PermissionType$READWRITE_getInstance().toString()))]), Actions$adminCryptoACFormsRBACMQTT$lambda_8(this), true)]);
    this.userCryptoACFormsRBACMQTT_0 = listOf([new CryptoACFormData('write_file', 'Publish to Topic', $module$react_icons_fa.FaFileSignature, API_getInstance().CRYPTOAC + API_getInstance().FILES, HttpMethod.Companion.Patch, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf([new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance()), new CryptoACFormField(SERVER_getInstance().FILE_CONTENT, 'Message', InputType$text_getInstance())])), Actions$userCryptoACFormsRBACMQTT$lambda(this)), new CryptoACFormData('read_file', 'Subscribe to Topic', $module$react_icons_fa.FaFileDownload, API_getInstance().CRYPTOAC + API_getInstance().FILES, HttpMethod.Companion.Get, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance()))), Actions$userCryptoACFormsRBACMQTT$lambda_0(this))]);
    this.adminCryptoACFormsRBACMOCK_0 = emptyList();
    this.userCryptoACFormsRBACMOCK_0 = emptyList();
  }
  function Actions$render$lambda$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function Actions$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Actions$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$cryptoACFormData) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$(closure$cryptoACFormData.icon, Actions$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function Actions$render$lambda$lambda$lambda$lambda$lambda(closure$cryptoACFormData) {
    return function ($receiver) {
      $receiver.title = closure$cryptoACFormData.submitButtonText;
      $receiver.icon = ensureNotNull(createElement(Actions$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$cryptoACFormData)));
      return Unit;
    };
  }
  function Actions$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cryptoACFormData, this$, this$Actions) {
    return function ($receiver) {
      this$.submitButtonText = closure$cryptoACFormData.submitButtonText;
      this$.endpoint = closure$cryptoACFormData.endpoint;
      this$.coreType = closure$cryptoACFormData.coreType;
      this$.method = closure$cryptoACFormData.method;
      this$.cryptoACFormFields = closure$cryptoACFormData.cryptoACFormFields;
      this$.handleSubmitEvent = closure$cryptoACFormData.submit;
      this$.handleChangeBackdropIsOpen = this$Actions.props.handleChangeBackdropIsOpen;
      this$.handleDisplayCryptoACAlert = this$Actions.props.handleDisplayAlert;
      return Unit;
    };
  }
  function Actions$render$lambda$lambda$lambda$lambda$lambda_0(closure$cryptoACFormData, this$Actions, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(Actions$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cryptoACFormData, $receiver, this$Actions));
      return Unit;
    };
  }
  function Actions$render$lambda$lambda$lambda$lambda(closure$cryptoACFormData, this$Actions) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Actions$render$lambda$lambda$lambda$lambda$lambda(closure$cryptoACFormData));
      $receiver.child_30b5ua$(cryptoACForm(Actions$render$lambda$lambda$lambda$lambda$lambda_0(closure$cryptoACFormData, this$Actions, $receiver)));
      return Unit;
    };
  }
  function Actions$render$lambda$lambda$lambda(closure$cryptoACFormData, this$Actions) {
    return function ($receiver) {
      $receiver.attrs.iconShape = 'circle';
      $receiver.invoke_qk0v40$($module$react_pro_sidebar.SubMenu, Actions$render$lambda$lambda$lambda$lambda(closure$cryptoACFormData, this$Actions));
      return Unit;
    };
  }
  function Actions$render$lambda$lambda$lambda_0($receiver) {
    $receiver.width = get_pct(100);
    $receiver.marginTop = get_px(0);
    $receiver.marginBottom = get_px(0);
    return Unit;
  }
  function Actions$render$lambda(this$Actions) {
    return function ($receiver) {
      var tmp$;
      if (this$Actions.props.userIsLogged && this$Actions.props.userHasProfile) {
        switch (this$Actions.props.coreType.name) {
          case 'RBAC_CLOUD':
            tmp$ = this$Actions.props.userIsAdmin ? plus_0(this$Actions.adminCryptoACFormsRBACCLOUD_0, this$Actions.userCryptoACFormsRBACCloud_0) : this$Actions.userCryptoACFormsRBACCloud_0;
            break;
          case 'RBAC_MQTT':
            tmp$ = this$Actions.props.userIsAdmin ? plus_0(this$Actions.adminCryptoACFormsRBACMQTT_0, this$Actions.userCryptoACFormsRBACMQTT_0) : this$Actions.userCryptoACFormsRBACMQTT_0;
            break;
          case 'RBAC_MOCK':
            if (development) {
              tmp$ = this$Actions.props.userIsAdmin ? plus_0(this$Actions.adminCryptoACFormsRBACMOCK_0, this$Actions.userCryptoACFormsRBACMOCK_0) : this$Actions.userCryptoACFormsRBACMOCK_0;
            } else {
              var message = 'Using MOCK core when not in development mode';
              logger_18.error_nq59yw$(Actions$render$lambda$lambda(message));
              throw IllegalStateException_init(message);
            }

            break;
          default:tmp$ = Kotlin.noWhenBranchMatched();
            break;
        }
        var cryptoACForm = tmp$;
        var tmp$_0;
        tmp$_0 = cryptoACForm.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          var this$Actions_0 = this$Actions;
          $receiver.key = element.key;
          $receiver.invoke_qk0v40$($module$react_pro_sidebar.Menu, Actions$render$lambda$lambda$lambda(element, this$Actions_0));
          if (element.divider) {
            $receiver.child_30b5ua$(cryptoACDivider(Actions$render$lambda$lambda$lambda_0));
          }}
      }return Unit;
    };
  }
  Actions.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$react_pro_sidebar.SidebarContent, Actions$render$lambda(this));
  };
  function Actions$submitCryptoACForm$lambda(closure$method, closure$endpoint) {
    return function () {
      return 'Submitting CryptoAC form (method ' + closure$method + ', endpoint ' + closure$endpoint + ') with the following values:';
    };
  }
  function Actions$submitCryptoACForm$lambda$lambda(closure$it) {
    return function () {
      return '- key: ' + closure$it.key + ', value: ' + closure$it.value;
    };
  }
  function Actions$submitCryptoACForm$lambda$lambda_0(closure$endpoint) {
    return function ($receiver) {
      url($receiver, closure$endpoint);
      return Unit;
    };
  }
  function Actions$submitCryptoACForm$lambda$lambda_1(closure$method) {
    return function () {
      return 'Method ' + closure$method + ' is not supported';
    };
  }
  function Actions$submitCryptoACForm$lambda$lambda_2(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Actions$submitCryptoACForm$lambda(closure$method_0, closure$callback_0, this$Actions_0, closure$values_0, closure$endpoint_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 8;
    this.local$closure$method = closure$method_0;
    this.local$closure$callback = closure$callback_0;
    this.local$this$Actions = this$Actions_0;
    this.local$closure$values = closure$values_0;
    this.local$closure$endpoint = closure$endpoint_0;
  }
  Coroutine$Actions$submitCryptoACForm$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actions$submitCryptoACForm$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actions$submitCryptoACForm$lambda.prototype.constructor = Coroutine$Actions$submitCryptoACForm$lambda;
  Coroutine$Actions$submitCryptoACForm$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 5;
            if ((this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Post) : null) || (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Patch) : null)) {
              if (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Post) : null) {
                var tmp$ = this.local$this$Actions.props.httpClient;
                var $receiver = ParametersBuilder();
                var tmp$_0;
                tmp$_0 = this.local$closure$values.entries.iterator();
                while (tmp$_0.hasNext()) {
                  var element = tmp$_0.next();
                  $receiver.append_puj7f4$(element.key, element.value);
                }
                var formParameters = $receiver.build();
                var $receiver_1 = new HttpRequestBuilder_init();
                if (false) {
                  $receiver_1.method = HttpMethod_0.Companion.Get;
                  $receiver_1.url.parameters.appendAll_hb0ubp$(formParameters);
                } else {
                  $receiver_1.method = HttpMethod_0.Companion.Post;
                  var body_0 = new FormDataContent(formParameters);
                  if (body_0 == null) {
                    $receiver_1.body = utils.EmptyContent;
                    $receiver_1.bodyType = null;
                  } else if (Kotlin.isType(body_0, OutgoingContent)) {
                    $receiver_1.body = body_0;
                    $receiver_1.bodyType = null;
                  } else {
                    $receiver_1.body = body_0;
                    var tmp$_1 = reflect.JsType;
                    var tmp$_0_0 = getKClass(FormDataContent);
                    var tryGetType$result_0;
                    tryGetType$break: do {
                      try {
                        tryGetType$result_0 = createKType(getKClass(FormDataContent), [], false);
                      } catch (cause_0) {
                        if (Kotlin.isType(cause_0, Throwable)) {
                          tryGetType$result_0 = null;
                          break tryGetType$break;
                        } else
                          throw cause_0;
                      }
                    }
                     while (false);
                    $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
                  }
                }
                url($receiver_1, this.local$closure$endpoint);
                this.state_0 = 2;
                this.result_0 = (new HttpStatement_init($receiver_1, tmp$)).execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                var tmp$_2 = this.local$this$Actions.props.httpClient;
                var $receiver_0 = ParametersBuilder();
                var tmp$_3;
                tmp$_3 = this.local$closure$values.entries.iterator();
                while (tmp$_3.hasNext()) {
                  var element_0 = tmp$_3.next();
                  $receiver_0.append_puj7f4$(element_0.key, element_0.value);
                }
                this.state_0 = 1;
                this.result_0 = submitFormPatch(tmp$_2, $receiver_0.build(), Actions$submitCryptoACForm$lambda$lambda_0(this.local$closure$endpoint), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            } else {
              this.local$this$Actions.props.handleChangeBackdropIsOpen(false);
              logger_18.error_nq59yw$(Actions$submitCryptoACForm$lambda$lambda_1(this.local$closure$method));
              return this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
            }

          case 1:
            return this.local$closure$callback(this.result_0, this.local$closure$values), Unit;
          case 2:
            this.result_0;
            return this.local$closure$callback(this.result_0, this.local$closure$values), Unit;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            continue;
          case 5:
            this.exceptionState_0 = 8;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              this.local$this$Actions.props.handleChangeBackdropIsOpen(false);
              logger_18.error_nq59yw$(Actions$submitCryptoACForm$lambda$lambda_2(e));
              console.log(e);
              return this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_049_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
            } else {
              throw e;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            return;
          case 8:
            throw this.exception_0;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Actions$submitCryptoACForm$lambda_0(closure$method_0, closure$callback_0, this$Actions_0, closure$values_0, closure$endpoint_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actions$submitCryptoACForm$lambda(closure$method_0, closure$callback_0, this$Actions_0, closure$values_0, closure$endpoint_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Actions.prototype.submitCryptoACForm_0 = function (method, endpoint, values, callback) {
    logger_18.info_nq59yw$(Actions$submitCryptoACForm$lambda(method, endpoint));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_18.info_nq59yw$(Actions$submitCryptoACForm$lambda$lambda(element));
    }
    this.props.handleChangeBackdropIsOpen(true);
    launch(MainScope(), void 0, void 0, Actions$submitCryptoACForm$lambda_0(method, callback, this, values, endpoint));
  };
  function Actions$submitCryptoACFormWithBinaryData$lambda(closure$method, closure$endpoint, closure$files, closure$values) {
    return function () {
      return 'Submitting CryptoAC form, method ' + closure$method + ', endpoint ' + closure$endpoint + ', ' + closure$files.size + ' files' + (closure$values.size > 0 ? ' and the following values:' : '');
    };
  }
  function Actions$submitCryptoACFormWithBinaryData$lambda$lambda(closure$it) {
    return function () {
      return '- key: ' + closure$it.key + ', value: ' + closure$it.value;
    };
  }
  function Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda(closure$callback_0, this$Actions_0, closure$endpoint_0, closure$parts_0, closure$method_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
    this.local$this$Actions = this$Actions_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$parts = closure$parts_0;
    this.local$closure$method = closure$method_0;
  }
  Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda;
  Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.local$this$Actions.props.httpClient;
            var tmp$_0 = this.local$closure$endpoint;
            var formData_0 = formData(copyToArray(this.local$closure$parts).slice());
            var $receiver_1 = new HttpRequestBuilder_init();
            $receiver_1.method = HttpMethod_0.Companion.Post;
            var body_0 = new MultiPartFormDataContent_init(formData_0);
            if (body_0 == null) {
              $receiver_1.body = utils.EmptyContent;
              $receiver_1.bodyType = null;
            } else if (Kotlin.isType(body_0, OutgoingContent)) {
              $receiver_1.body = body_0;
              $receiver_1.bodyType = null;
            } else {
              $receiver_1.body = body_0;
              var tmp$_1 = reflect.JsType;
              var tmp$_0_0 = getKClass(MultiPartFormDataContent_init);
              var tryGetType$result_0;
              tryGetType$break: do {
                try {
                  tryGetType$result_0 = createKType(getKClass(MultiPartFormDataContent_init), [], false);
                } catch (cause_0) {
                  if (Kotlin.isType(cause_0, Throwable)) {
                    tryGetType$result_0 = null;
                    break tryGetType$break;
                  } else
                    throw cause_0;
                }
              }
               while (false);
              $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
            }

            url($receiver_1, tmp$_0);
            $receiver_1.method = this.local$closure$method;
            this.state_0 = 2;
            this.result_0 = (new HttpStatement_init($receiver_1, tmp$)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.local$closure$callback(this.result_0);
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
  function Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda(closure$callback_0, this$Actions_0, closure$endpoint_0, closure$parts_0, closure$method_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda(closure$callback_0, this$Actions_0, closure$endpoint_0, closure$parts_0, closure$method_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda(closure$fileEntriesUploaded, closure$reader, closure$it, closure$parts, closure$files, closure$callback, this$Actions, closure$endpoint, closure$method) {
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
        launch(MainScope(), void 0, void 0, Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda$lambda(closure$callback, this$Actions, closure$endpoint, closure$parts, closure$method));
      }return Unit;
    };
  }
  function Actions$submitCryptoACFormWithBinaryData$lambda$lambda_0(closure$method) {
    return function () {
      return 'Method ' + closure$method + ' is not supported';
    };
  }
  function Actions$submitCryptoACFormWithBinaryData$lambda$lambda_1(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda(closure$method_0, closure$values_0, closure$files_0, closure$callback_0, this$Actions_0, closure$endpoint_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$method = closure$method_0;
    this.local$closure$values = closure$values_0;
    this.local$closure$files = closure$files_0;
    this.local$closure$callback = closure$callback_0;
    this.local$this$Actions = this$Actions_0;
    this.local$closure$endpoint = closure$endpoint_0;
  }
  Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda.prototype.constructor = Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda;
  Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            try {
              if ((this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Post) : null) || (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Patch) : null)) {
                var parts = ArrayList_init();
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
                  var this$Actions = this.local$this$Actions;
                  var closure$endpoint = this.local$closure$endpoint;
                  var closure$method = this.local$closure$method;
                  var reader = new FileReader();
                  reader.readAsBinaryString(element_1.value);
                  reader.onload = Actions$submitCryptoACFormWithBinaryData$lambda$lambda$lambda(fileEntriesUploaded, reader, element_1, parts, closure$files, closure$callback, this$Actions, closure$endpoint, closure$method);
                }
                return Unit;
              } else {
                this.local$this$Actions.props.handleChangeBackdropIsOpen(false);
                logger_18.error_nq59yw$(Actions$submitCryptoACFormWithBinaryData$lambda$lambda_0(this.local$closure$method));
                return this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
              }
            } catch (e) {
              if (Kotlin.isType(e, Error_0)) {
                this.local$this$Actions.props.handleChangeBackdropIsOpen(false);
                logger_18.error_nq59yw$(Actions$submitCryptoACFormWithBinaryData$lambda$lambda_1(e));
                console.log(e);
                return this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_049_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
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
  function Actions$submitCryptoACFormWithBinaryData$lambda_0(closure$method_0, closure$values_0, closure$files_0, closure$callback_0, this$Actions_0, closure$endpoint_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actions$submitCryptoACFormWithBinaryData$lambda(closure$method_0, closure$values_0, closure$files_0, closure$callback_0, this$Actions_0, closure$endpoint_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Actions.prototype.submitCryptoACFormWithBinaryData_0 = function (method, endpoint, values, files, callback) {
    logger_18.info_nq59yw$(Actions$submitCryptoACFormWithBinaryData$lambda(method, endpoint, files, values));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_18.info_nq59yw$(Actions$submitCryptoACFormWithBinaryData$lambda$lambda(element));
    }
    this.props.handleChangeBackdropIsOpen(true);
    launch(MainScope(), void 0, void 0, Actions$submitCryptoACFormWithBinaryData$lambda_0(method, values, files, callback, this, endpoint));
  };
  function Actions$submitCryptoACFormInNewTab$lambda(closure$method, closure$endpoint, closure$query) {
    return function () {
      return 'Submitting CryptoAC form (method ' + closure$method + ', endpoint ' + closure$endpoint + ', query ' + closure$query + ') with the following values:';
    };
  }
  function Actions$submitCryptoACFormInNewTab$lambda$lambda(closure$it) {
    return function () {
      return '- key: ' + closure$it.key + ', value: ' + closure$it.value;
    };
  }
  function Actions$submitCryptoACFormInNewTab$lambda$lambda$lambda() {
    return 'Get request successful';
  }
  function Actions$submitCryptoACFormInNewTab$lambda$lambda_0(closure$win, this$Actions) {
    return function (it) {
      if (equals(ensureNotNull(closure$win).document, undefined)) {
        logger_18.info_nq59yw$(Actions$submitCryptoACFormInNewTab$lambda$lambda$lambda);
        this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance());
      }closure$win.close();
      return Unit;
    };
  }
  function Actions$submitCryptoACFormInNewTab$lambda$lambda_1(closure$method) {
    return function () {
      return 'Method ' + closure$method + ' is not supported';
    };
  }
  function Actions$submitCryptoACFormInNewTab$lambda$lambda_2(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Actions$submitCryptoACFormInNewTab$lambda(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, this$Actions_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$method = closure$method_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$query = closure$query_0;
    this.local$closure$values = closure$values_0;
    this.local$this$Actions = this$Actions_0;
  }
  Coroutine$Actions$submitCryptoACFormInNewTab$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actions$submitCryptoACFormInNewTab$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actions$submitCryptoACFormInNewTab$lambda.prototype.constructor = Coroutine$Actions$submitCryptoACFormInNewTab$lambda;
  Coroutine$Actions$submitCryptoACFormInNewTab$lambda.prototype.doResume = function () {
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
                this.local$this$Actions.props.handleChangeBackdropIsOpen(false);
                return win != null && (win.onload = Actions$submitCryptoACFormInNewTab$lambda$lambda_0(win, this.local$this$Actions)), Unit;
              } else {
                this.local$this$Actions.props.handleChangeBackdropIsOpen(false);
                logger_18.error_nq59yw$(Actions$submitCryptoACFormInNewTab$lambda$lambda_1(this.local$closure$method));
                return this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
              }
            } catch (e) {
              if (Kotlin.isType(e, Error_0)) {
                this.local$this$Actions.props.handleChangeBackdropIsOpen(false);
                logger_18.error_nq59yw$(Actions$submitCryptoACFormInNewTab$lambda$lambda_2(e));
                console.log(e);
                return this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_049_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
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
  function Actions$submitCryptoACFormInNewTab$lambda_0(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, this$Actions_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actions$submitCryptoACFormInNewTab$lambda(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, this$Actions_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Actions.prototype.submitCryptoACFormInNewTab_0 = function (method, endpoint, values, query) {
    logger_18.info_nq59yw$(Actions$submitCryptoACFormInNewTab$lambda(method, endpoint, query));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_18.info_nq59yw$(Actions$submitCryptoACFormInNewTab$lambda$lambda(element));
    }
    this.props.handleChangeBackdropIsOpen(true);
    launch(MainScope(), void 0, void 0, Actions$submitCryptoACFormInNewTab$lambda_0(method, endpoint, query, values, this));
  };
  function Actions$submitCryptoACForm$lambda_1(closure$method, closure$endpoint, closure$query) {
    return function () {
      return 'Submitting CryptoAC form (method ' + closure$method + ', endpoint ' + closure$endpoint + ', query ' + closure$query + ') with the following values:';
    };
  }
  function Actions$submitCryptoACForm$lambda$lambda_3(closure$it) {
    return function () {
      return '- key: ' + closure$it.key + ', value: ' + closure$it.value;
    };
  }
  function Actions$submitCryptoACForm$lambda$lambda_4(closure$method) {
    return function () {
      return 'Method ' + closure$method + ' is not supported';
    };
  }
  function Actions$submitCryptoACForm$lambda$lambda_5(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Actions$submitCryptoACForm$lambda_0(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, closure$callback_0, this$Actions_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 9;
    this.local$closure$method = closure$method_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$query = closure$query_0;
    this.local$closure$values = closure$values_0;
    this.local$closure$callback = closure$callback_0;
    this.local$this$Actions = this$Actions_0;
  }
  Coroutine$Actions$submitCryptoACForm$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actions$submitCryptoACForm$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actions$submitCryptoACForm$lambda_0.prototype.constructor = Coroutine$Actions$submitCryptoACForm$lambda_0;
  Coroutine$Actions$submitCryptoACForm$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 6;
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
                var $receiver_0 = this.local$this$Actions.props.httpClient;
                var $receiver_1 = new HttpRequestBuilder_init();
                url($receiver_1, endpointWithParameters.toString());
                $receiver_1.method = HttpMethod_0.Companion.Delete;
                this.state_0 = 3;
                this.result_0 = (new HttpStatement_init($receiver_1, $receiver_0)).execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                if (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Get) : null) {
                  var $receiver_2 = this.local$this$Actions.props.httpClient;
                  var $receiver_1_0 = new HttpRequestBuilder_init();
                  url($receiver_1_0, endpointWithParameters.toString());
                  $receiver_1_0.method = HttpMethod_0.Companion.Get;
                  this.state_0 = 1;
                  this.result_0 = (new HttpStatement_init($receiver_1_0, $receiver_2)).execute(this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                } else {
                  this.state_0 = 2;
                  continue;
                }
              }
            } else {
              this.local$this$Actions.props.handleChangeBackdropIsOpen(false);
              logger_18.error_nq59yw$(Actions$submitCryptoACForm$lambda$lambda_4(this.local$closure$method));
              return this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
            }

          case 1:
            this.result_0;
            return this.local$closure$callback(this.result_0, this.local$closure$values), Unit;
          case 2:
            this.state_0 = 4;
            continue;
          case 3:
            this.result_0;
            return this.local$closure$callback(this.result_0, this.local$closure$values), Unit;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            this.state_0 = 8;
            continue;
          case 6:
            this.exceptionState_0 = 9;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              this.local$this$Actions.props.handleChangeBackdropIsOpen(false);
              logger_18.error_nq59yw$(Actions$submitCryptoACForm$lambda$lambda_5(e));
              console.log(e);
              return this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_049_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
            } else {
              throw e;
            }

          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return Unit;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 9) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Actions$submitCryptoACForm$lambda_2(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, closure$callback_0, this$Actions_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actions$submitCryptoACForm$lambda_0(closure$method_0, closure$endpoint_0, closure$query_0, closure$values_0, closure$callback_0, this$Actions_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Actions.prototype.submitCryptoACForm_1 = function (method, endpoint, values, query, callback) {
    logger_18.info_nq59yw$(Actions$submitCryptoACForm$lambda_1(method, endpoint, query));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_18.info_nq59yw$(Actions$submitCryptoACForm$lambda$lambda_3(element));
    }
    this.props.handleChangeBackdropIsOpen(true);
    launch(MainScope(), void 0, void 0, Actions$submitCryptoACForm$lambda_2(method, endpoint, query, values, callback, this));
  };
  function Actions$callbackShowOutcomeCode$lambda$lambda(closure$status) {
    return function () {
      return 'Response status is ' + closure$status;
    };
  }
  function Actions$callbackShowOutcomeCode$lambda$lambda_0(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', outcome code is ' + closure$outcomeCode;
    };
  }
  function Coroutine$Actions$callbackShowOutcomeCode$lambda(closure$response_0, this$Actions_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$response = closure$response_0;
    this.local$this$Actions = this$Actions_0;
    this.local$status = void 0;
  }
  Coroutine$Actions$callbackShowOutcomeCode$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actions$callbackShowOutcomeCode$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actions$callbackShowOutcomeCode$lambda.prototype.constructor = Coroutine$Actions$callbackShowOutcomeCode$lambda;
  Coroutine$Actions$callbackShowOutcomeCode$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$status = this.local$closure$response.status;
            if (this.local$status != null ? this.local$status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_18.info_nq59yw$(Actions$callbackShowOutcomeCode$lambda$lambda(this.local$status));
              return this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance()), Unit;
            } else {
              this.state_0 = 2;
              this.result_0 = bodyAsText(this.local$closure$response, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = myJson;
            var string = this.result_0;
            var tmp$;
            var outcomeCode = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer_0($receiver.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$ : throwCCE(), string);
            logger_18.warn_nq59yw$(Actions$callbackShowOutcomeCode$lambda$lambda_0(this.local$status, outcomeCode));
            return this.local$this$Actions.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance()), Unit;
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
  function Actions$callbackShowOutcomeCode$lambda(closure$response_0, this$Actions_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actions$callbackShowOutcomeCode$lambda(closure$response_0, this$Actions_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Actions.prototype.callbackShowOutcomeCode_0 = function (response) {
    this.props.handleChangeBackdropIsOpen(false);
    launch(MainScope(), void 0, void 0, Actions$callbackShowOutcomeCode$lambda(response, this));
  };
  function Actions$callbackDownloadUserProfile$lambda$lambda(closure$status) {
    return function () {
      return 'Response status is ' + closure$status;
    };
  }
  function Actions$callbackDownloadUserProfile$lambda$lambda_0(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', outcome code is ' + closure$outcomeCode;
    };
  }
  function Coroutine$Actions$callbackDownloadUserProfile$lambda(closure$response_0, closure$values_0, this$Actions_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$response = closure$response_0;
    this.local$closure$values = closure$values_0;
    this.local$this$Actions = this$Actions_0;
    this.local$status = void 0;
  }
  Coroutine$Actions$callbackDownloadUserProfile$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actions$callbackDownloadUserProfile$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actions$callbackDownloadUserProfile$lambda.prototype.constructor = Coroutine$Actions$callbackDownloadUserProfile$lambda;
  Coroutine$Actions$callbackDownloadUserProfile$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$status = this.local$closure$response.status;
            if (this.local$status != null ? this.local$status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_18.info_nq59yw$(Actions$callbackDownloadUserProfile$lambda$lambda(this.local$status));
              this.state_0 = 3;
              this.result_0 = bodyAsText(this.local$closure$response, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 2;
              this.result_0 = bodyAsText(this.local$closure$response, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = myJson;
            var string = this.result_0;
            var tmp$;
            var outcomeCode = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer_0($receiver.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$ : throwCCE(), string);
            logger_18.warn_nq59yw$(Actions$callbackDownloadUserProfile$lambda$lambda_0(this.local$status, outcomeCode));
            return this.local$this$Actions.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance());
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
  function Actions$callbackDownloadUserProfile$lambda(closure$response_0, closure$values_0, this$Actions_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actions$callbackDownloadUserProfile$lambda(closure$response_0, closure$values_0, this$Actions_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Actions.prototype.callbackDownloadUserProfile_0 = function (response, values) {
    this.props.handleChangeBackdropIsOpen(false);
    launch(MainScope(), void 0, void 0, Actions$callbackDownloadUserProfile$lambda(response, values, this));
  };
  function Actions$callbackSubscribeToTopic$lambda$lambda(closure$status) {
    return function () {
      return 'Response status is ' + closure$status;
    };
  }
  function Actions$callbackSubscribeToTopic$lambda$lambda_0(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', outcome code is ' + closure$outcomeCode;
    };
  }
  function Coroutine$Actions$callbackSubscribeToTopic$lambda(closure$response_0, this$Actions_0, closure$values_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$response = closure$response_0;
    this.local$this$Actions = this$Actions_0;
    this.local$closure$values = closure$values_0;
    this.local$status = void 0;
  }
  Coroutine$Actions$callbackSubscribeToTopic$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actions$callbackSubscribeToTopic$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actions$callbackSubscribeToTopic$lambda.prototype.constructor = Coroutine$Actions$callbackSubscribeToTopic$lambda;
  Coroutine$Actions$callbackSubscribeToTopic$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$status = this.local$closure$response.status;
            if (this.local$status != null ? this.local$status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_18.info_nq59yw$(Actions$callbackSubscribeToTopic$lambda$lambda(this.local$status));
              this.local$this$Actions.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance());
              return this.local$this$Actions.props.handleAddTableInContent(ensureNotNull(this.local$closure$values.get_11rb$(SERVER_getInstance().FILE_NAME))), Unit;
            } else {
              this.state_0 = 2;
              this.result_0 = bodyAsText(this.local$closure$response, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = myJson;
            var string = this.result_0;
            var tmp$;
            var outcomeCode = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer_0($receiver.serializersModule, createKType(getKClass(OutcomeCode), [], false)), KSerializer) ? tmp$ : throwCCE(), string);
            logger_18.warn_nq59yw$(Actions$callbackSubscribeToTopic$lambda$lambda_0(this.local$status, outcomeCode));
            return this.local$this$Actions.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance()), Unit;
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
  function Actions$callbackSubscribeToTopic$lambda(closure$response_0, this$Actions_0, closure$values_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actions$callbackSubscribeToTopic$lambda(closure$response_0, this$Actions_0, closure$values_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Actions.prototype.callbackSubscribeToTopic_0 = function (response, values) {
    this.props.handleChangeBackdropIsOpen(false);
    launch(MainScope(), void 0, void 0, Actions$callbackSubscribeToTopic$lambda(response, this, values));
  };
  function Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda(this$Actions) {
    return function (response, params) {
      this$Actions.callbackDownloadUserProfile_0(response, params);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_0(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda_0(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_0(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_1(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda_1(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_1(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_2(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda_2(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_2(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_3(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda_3(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_3(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_4(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda_4(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_4(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_5(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda_5(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_5(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_6(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda_6(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_6(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_7(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACCLOUD$lambda_7(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACCLOUD$lambda$lambda_7(this$Actions));
      return Unit;
    };
  }
  function Actions$userCryptoACFormsRBACCloud$lambda$lambda(this$Actions) {
    return function (response) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$userCryptoACFormsRBACCloud$lambda(this$Actions) {
    return function (method, endpoint, values, files) {
      this$Actions.submitCryptoACFormWithBinaryData_0(method, endpoint, values, files, Actions$userCryptoACFormsRBACCloud$lambda$lambda(this$Actions));
      return Unit;
    };
  }
  function Actions$userCryptoACFormsRBACCloud$lambda$lambda_0(this$Actions) {
    return function (response) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$userCryptoACFormsRBACCloud$lambda_0(this$Actions) {
    return function (method, endpoint, values, files) {
      this$Actions.submitCryptoACFormWithBinaryData_0(method, endpoint, values, files, Actions$userCryptoACFormsRBACCloud$lambda$lambda_0(this$Actions));
      return Unit;
    };
  }
  function Actions$userCryptoACFormsRBACCloud$lambda_1(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACFormInNewTab_0(method, endpoint, values, false);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda(this$Actions) {
    return function (response, params) {
      this$Actions.callbackDownloadUserProfile_0(response, params);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_0(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda_0(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_0(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_1(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda_1(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_1(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_2(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda_2(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_2(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_3(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda_3(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_3(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_4(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda_4(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_4(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_5(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda_5(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_5(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_6(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda_6(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_6(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_7(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda_7(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_7(this$Actions));
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_8(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$adminCryptoACFormsRBACMQTT$lambda_8(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$adminCryptoACFormsRBACMQTT$lambda$lambda_8(this$Actions));
      return Unit;
    };
  }
  function Actions$userCryptoACFormsRBACMQTT$lambda$lambda(this$Actions) {
    return function (response, f) {
      this$Actions.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Actions$userCryptoACFormsRBACMQTT$lambda(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_0(method, endpoint, values, Actions$userCryptoACFormsRBACMQTT$lambda$lambda(this$Actions));
      return Unit;
    };
  }
  function Actions$userCryptoACFormsRBACMQTT$lambda$lambda_0(this$Actions) {
    return function (response, params) {
      this$Actions.callbackSubscribeToTopic_0(response, params);
      return Unit;
    };
  }
  function Actions$userCryptoACFormsRBACMQTT$lambda_0(this$Actions) {
    return function (method, endpoint, values, f) {
      this$Actions.submitCryptoACForm_1(method, endpoint, values, false, Actions$userCryptoACFormsRBACMQTT$lambda$lambda_0(this$Actions));
      return Unit;
    };
  }
  Actions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Actions',
    interfaces: [RComponent]
  };
  function actions$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function actions$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Actions), actions$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function actions(handler) {
    return ensureNotNull(createElement(actions$lambda(handler)));
  }
  function styledP$lambda_1(it) {
    return new P_init(html.emptyMap, it);
  }
  function styledDiv$lambda_15(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function Configuration() {
    RComponent_init(this);
  }
  function Configuration$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.container = true;
    $receiver.spacing = 6;
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.xl = 12;
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Configuration) {
    return function (it) {
      this$Configuration.props.handleChangeScenario(Scenario$valueOf(it));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda_0(this$Configuration) {
    return function ($receiver) {
      $receiver.name = 'scenario';
      $receiver.id = 'scenario';
      $receiver.label = 'Scenario';
      $receiver.labelId = 'scenario-label';
      $receiver.autoWidth = true;
      $receiver.selectStyle = JSON.parse(trimMargin('{\n                                "width": "100%"\n                            }'));
      var $receiver_0 = Scenario$values();
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(item.toString());
      }
      $receiver.options = destination;
      $receiver.defaultValue = this$Configuration.props.currentScenario.toString();
      $receiver.onChange = Configuration$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Configuration);
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda_0(this$Configuration) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda$lambda);
      $receiver.child_30b5ua$(cryptoACSelect(Configuration$render$lambda$lambda$lambda$lambda$lambda_0(this$Configuration)));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.xl = 12;
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Configuration) {
    return function (it) {
      this$Configuration.props.handleChangeAlgorithm(Algorithm$valueOf(it));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda_2(this$Configuration) {
    return function ($receiver) {
      $receiver.name = 'algorithm';
      $receiver.id = 'algorithm';
      $receiver.label = 'Algorithm';
      $receiver.labelId = 'algorithm-label';
      $receiver.autoWidth = true;
      $receiver.selectStyle = JSON.parse(trimMargin('{\n                                "width": "100%"\n                            }'));
      var $receiver_0 = Algorithm$values();
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(item.toString());
      }
      $receiver.options = destination;
      $receiver.defaultValue = this$Configuration.props.currentAlgorithm.toString();
      $receiver.onChange = Configuration$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Configuration);
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda_1(this$Configuration) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda$lambda_1);
      $receiver.child_30b5ua$(cryptoACSelect(Configuration$render$lambda$lambda$lambda$lambda$lambda_2(this$Configuration)));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.xl = 12;
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Configuration) {
    return function (it) {
      this$Configuration.props.handleChangeMetric(Metric$valueOf(it));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda_4(this$Configuration) {
    return function ($receiver) {
      $receiver.name = 'metric';
      $receiver.id = 'metric';
      $receiver.label = 'Metric';
      $receiver.labelId = 'metric-label';
      $receiver.autoWidth = true;
      $receiver.selectStyle = JSON.parse(trimMargin('{\n                                "width": "100%"\n                            }'));
      var $receiver_0 = Metric$values();
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(item.toString());
      }
      $receiver.options = destination;
      $receiver.defaultValue = this$Configuration.props.currentMetric.toString();
      $receiver.onChange = Configuration$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Configuration);
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda_2(this$Configuration) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda$lambda_3);
      $receiver.child_30b5ua$(cryptoACSelect(Configuration$render$lambda$lambda$lambda$lambda$lambda_4(this$Configuration)));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda(this$Configuration) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Configuration$render$lambda$lambda$lambda$lambda_0(this$Configuration));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Configuration$render$lambda$lambda$lambda$lambda_1(this$Configuration));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Configuration$render$lambda$lambda$lambda$lambda_2(this$Configuration));
      return Unit;
    };
  }
  function Configuration$render$lambda(this$Configuration) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledP$lambda_1);
      var $receiver_1 = $receiver_0.css;
      set_textAlign($receiver_1, TextAlign.center);
      set_marginBottom($receiver_1, get_px(50));
      $receiver_0.unaryPlus_pdl1vz$('Configure TradeOffBoard');
      $receiver.child_30b5ua$($receiver_0.create());
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_15);
      var this$Configuration_0 = this$Configuration;
      set_padding($receiver_0_0.css, '20px');
      $receiver_0_0.invoke_qk0v40$($module$_material_ui_core.Grid, Configuration$render$lambda$lambda$lambda(this$Configuration_0));
      $receiver.child_30b5ua$($receiver_0_0.create());
      return Unit;
    };
  }
  Configuration.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$react_pro_sidebar.SidebarContent, Configuration$render$lambda(this));
  };
  Configuration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Configuration',
    interfaces: [RComponent]
  };
  function configuration$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function configuration$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Configuration), configuration$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function configuration(handler) {
    return ensureNotNull(createElement(configuration$lambda(handler)));
  }
  function Empty() {
    RComponent_init(this);
  }
  function Empty$render$lambda($receiver) {
    return Unit;
  }
  Empty.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$react_pro_sidebar.SidebarContent, Empty$render$lambda);
  };
  Empty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Empty',
    interfaces: [RComponent]
  };
  function empty$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function empty$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Empty), empty$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function empty(handler) {
    return ensureNotNull(createElement(empty$lambda(handler)));
  }
  function Evaluation() {
    RComponent_init(this);
  }
  function Evaluation$render$lambda$lambda($receiver) {
    $receiver.label = 'Throughput';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = 0;
    return Unit;
  }
  function Evaluation$render$lambda$lambda_0($receiver) {
    $receiver.label = 'Scalability';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = 20;
    return Unit;
  }
  function Evaluation$render$lambda$lambda_1($receiver) {
    $receiver.label = 'Reliability';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = 40;
    return Unit;
  }
  function Evaluation$render$lambda$lambda_2($receiver) {
    $receiver.label = 'Redundancy';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = 60;
    return Unit;
  }
  function Evaluation$render$lambda$lambda_3($receiver) {
    $receiver.label = 'Latency';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = 80;
    return Unit;
  }
  function Evaluation$render$lambda$lambda_4($receiver) {
    $receiver.label = 'CSP Lock-in';
    $receiver.min = 0;
    $receiver.max = 100;
    $receiver.value = 100;
    return Unit;
  }
  function Evaluation$render$lambda($receiver) {
    $receiver.child_30b5ua$(cryptoACScore(Evaluation$render$lambda$lambda));
    $receiver.child_30b5ua$(cryptoACScore(Evaluation$render$lambda$lambda_0));
    $receiver.child_30b5ua$(cryptoACScore(Evaluation$render$lambda$lambda_1));
    $receiver.child_30b5ua$(cryptoACScore(Evaluation$render$lambda$lambda_2));
    $receiver.child_30b5ua$(cryptoACScore(Evaluation$render$lambda$lambda_3));
    $receiver.child_30b5ua$(cryptoACScore(Evaluation$render$lambda$lambda_4));
    return Unit;
  }
  Evaluation.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$react_pro_sidebar.SidebarContent, Evaluation$render$lambda);
  };
  Evaluation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Evaluation',
    interfaces: [RComponent]
  };
  function evaluation$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function evaluation$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Evaluation), evaluation$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function evaluation(handler) {
    return ensureNotNull(createElement(evaluation$lambda(handler)));
  }
  Object.defineProperty(_, 'development', {
    get: function () {
      return development;
    }
  });
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
  package$cryptoac.CryptoACFormField = CryptoACFormField;
  Object.defineProperty(InputType_0, 'button', {
    get: InputType$button_getInstance
  });
  Object.defineProperty(InputType_0, 'checkBox', {
    get: InputType$checkBox_getInstance
  });
  Object.defineProperty(InputType_0, 'color', {
    get: InputType$color_getInstance
  });
  Object.defineProperty(InputType_0, 'date', {
    get: InputType$date_getInstance
  });
  Object.defineProperty(InputType_0, 'dateTime', {
    get: InputType$dateTime_getInstance
  });
  Object.defineProperty(InputType_0, 'dateTimeLocal', {
    get: InputType$dateTimeLocal_getInstance
  });
  Object.defineProperty(InputType_0, 'email', {
    get: InputType$email_getInstance
  });
  Object.defineProperty(InputType_0, 'file', {
    get: InputType$file_getInstance
  });
  Object.defineProperty(InputType_0, 'hidden', {
    get: InputType$hidden_getInstance
  });
  Object.defineProperty(InputType_0, 'image', {
    get: InputType$image_getInstance
  });
  Object.defineProperty(InputType_0, 'month', {
    get: InputType$month_getInstance
  });
  Object.defineProperty(InputType_0, 'number', {
    get: InputType$number_getInstance
  });
  Object.defineProperty(InputType_0, 'password', {
    get: InputType$password_getInstance
  });
  Object.defineProperty(InputType_0, 'radio', {
    get: InputType$radio_getInstance
  });
  Object.defineProperty(InputType_0, 'range', {
    get: InputType$range_getInstance
  });
  Object.defineProperty(InputType_0, 'reset', {
    get: InputType$reset_getInstance
  });
  Object.defineProperty(InputType_0, 'search', {
    get: InputType$search_getInstance
  });
  Object.defineProperty(InputType_0, 'submit', {
    get: InputType$submit_getInstance
  });
  Object.defineProperty(InputType_0, 'text', {
    get: InputType$text_getInstance
  });
  Object.defineProperty(InputType_0, 'tel', {
    get: InputType$tel_getInstance
  });
  Object.defineProperty(InputType_0, 'time', {
    get: InputType$time_getInstance
  });
  Object.defineProperty(InputType_0, 'url', {
    get: InputType$url_getInstance
  });
  Object.defineProperty(InputType_0, 'week', {
    get: InputType$week_getInstance
  });
  Object.defineProperty(InputType_0, 'select', {
    get: InputType$select_getInstance
  });
  package$cryptoac.InputType = InputType_0;
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
  Object.defineProperty(OutcomeCode, 'CODE_034_UNLOCK_FAILED', {
    get: OutcomeCode$CODE_034_UNLOCK_FAILED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_035_ADMIN_ALREADY_INITIALIZED', {
    get: OutcomeCode$CODE_035_ADMIN_ALREADY_INITIALIZED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_036_ADMIN_NAME', {
    get: OutcomeCode$CODE_036_ADMIN_NAME_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_037_FORBIDDEN', {
    get: OutcomeCode$CODE_037_FORBIDDEN_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_038_UNAUTHORIZED', {
    get: OutcomeCode$CODE_038_UNAUTHORIZED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_039_PROFILE_NOT_FOUND', {
    get: OutcomeCode$CODE_039_PROFILE_NOT_FOUND_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_040_MALFORMED_PROFILE_FILE', {
    get: OutcomeCode$CODE_040_MALFORMED_PROFILE_FILE_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA', {
    get: OutcomeCode$CODE_041_UR_ASSIGNMENTS_NOT_FOUND_OPA_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA', {
    get: OutcomeCode$CODE_042_PA_ASSIGNMENTS_NOT_FOUND_OPA_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_043_RM_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_043_RM_CONNECTION_TIMEOUT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_044_DM_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_044_DM_CONNECTION_TIMEOUT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_045_MM_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_045_MM_CONNECTION_TIMEOUT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_046_CRYPTOAC_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_046_CRYPTOAC_CONNECTION_TIMEOUT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_047_OPA_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_047_OPA_CONNECTION_TIMEOUT_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_048_HTTP_METHOD_NOT_SUPPORTED', {
    get: OutcomeCode$CODE_048_HTTP_METHOD_NOT_SUPPORTED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_049_UNEXPECTED', {
    get: OutcomeCode$CODE_049_UNEXPECTED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION', {
    get: OutcomeCode$CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_051_LOGIN_REQUIRED', {
    get: OutcomeCode$CODE_051_LOGIN_REQUIRED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_052_USER_ALREADY_INITIALIZED', {
    get: OutcomeCode$CODE_052_USER_ALREADY_INITIALIZED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_053_USER_IS_INCOMPLETE', {
    get: OutcomeCode$CODE_053_USER_IS_INCOMPLETE_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_054_CREATE_USER_MM', {
    get: OutcomeCode$CODE_054_CREATE_USER_MM_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_055_ACCESS_DENIED_TO_MM', {
    get: OutcomeCode$CODE_055_ACCESS_DENIED_TO_MM_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_056_DELETE_USER_MM', {
    get: OutcomeCode$CODE_056_DELETE_USER_MM_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_057_INTERFACE_TYPE_UPDATED', {
    get: OutcomeCode$CODE_057_INTERFACE_TYPE_UPDATED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM', {
    get: OutcomeCode$CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_059_ACCESS_DENIED_TO_DM', {
    get: OutcomeCode$CODE_059_ACCESS_DENIED_TO_DM_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED', {
    get: OutcomeCode$CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED_getInstance
  });
  Object.defineProperty(OutcomeCode, 'Companion', {
    get: OutcomeCode$Companion_getInstance
  });
  Object.defineProperty(OutcomeCode, '$serializer', {
    get: OutcomeCode$$serializer_getInstance
  });
  package$cryptoac.OutcomeCode = OutcomeCode;
  Object.defineProperty(PolicyModel, 'RBAC', {
    get: PolicyModel$RBAC_getInstance
  });
  Object.defineProperty(PolicyModel, 'ABAC', {
    get: PolicyModel$ABAC_getInstance
  });
  Object.defineProperty(PolicyModel, 'Companion', {
    get: PolicyModel$Companion_getInstance
  });
  Object.defineProperty(PolicyModel, '$serializer', {
    get: PolicyModel$$serializer_getInstance
  });
  package$cryptoac.PolicyModel = PolicyModel;
  Object.defineProperty(package$cryptoac, 'SERVER', {
    get: SERVER_getInstance
  });
  Object.defineProperty(SafeRegex, 'Companion', {
    get: SafeRegex$Companion_getInstance
  });
  package$cryptoac.SafeRegex = SafeRegex;
  Object.defineProperty(Utils, 'Companion', {
    get: Utils$Companion_getInstance
  });
  package$cryptoac.Utils = Utils;
  $$importsForInline$$['ktor-ktor-client-core-js-legacy'] = $module$ktor_ktor_client_core_js_legacy;
  package$cryptoac.submitFormPatch_is78iq$ = submitFormPatch;
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
  Object.defineProperty(CoreType, 'RBAC_MOCK', {
    get: CoreType$RBAC_MOCK_getInstance
  });
  package$core.CoreType = CoreType;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy;
  Object.defineProperty(package$core, 'module', {
    get: function () {
      return module_0;
    }
  });
  Object.defineProperty(package$core, 'myJson', {
    get: function () {
      return myJson;
    }
  });
  Object.defineProperty(CoreParametersCLOUD, 'Companion', {
    get: CoreParametersCLOUD$Companion_getInstance
  });
  Object.defineProperty(CoreParametersCLOUD, '$serializer', {
    get: CoreParametersCLOUD$$serializer_getInstance
  });
  package$core.CoreParametersCLOUD_init_dch7vr$ = CoreParametersCLOUD_init;
  package$core.CoreParametersCLOUD = CoreParametersCLOUD;
  Object.defineProperty(CoreParametersMOCK, 'Companion', {
    get: CoreParametersMOCK$Companion_getInstance
  });
  Object.defineProperty(CoreParametersMOCK, '$serializer', {
    get: CoreParametersMOCK$$serializer_getInstance
  });
  package$core.CoreParametersMOCK_init_1h01jw$ = CoreParametersMOCK_init;
  package$core.CoreParametersMOCK = CoreParametersMOCK;
  Object.defineProperty(CoreParametersMQTT, 'Companion', {
    get: CoreParametersMQTT$Companion_getInstance
  });
  Object.defineProperty(CoreParametersMQTT, '$serializer', {
    get: CoreParametersMQTT$$serializer_getInstance
  });
  package$core.CoreParametersMQTT_init_oorxme$ = CoreParametersMQTT_init;
  package$core.CoreParametersMQTT = CoreParametersMQTT;
  Object.defineProperty(CryptoACObject, 'Companion', {
    get: CryptoACObject$Companion_getInstance
  });
  package$core.CryptoACObject_init_lc88fd$ = CryptoACObject_init;
  package$core.CryptoACObject = CryptoACObject;
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
  package$elements.File_init_yinlk1$ = File_init;
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
  package$elements.User_init_a6xm90$ = User_init;
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
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
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
  package$crypto.AsymKeys_init_cj33do$ = AsymKeys_init;
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
  Object.defineProperty(CryptoType, 'SODIUM', {
    get: CryptoType$SODIUM_getInstance
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
  Object.defineProperty(DMInterfaceCryptoACParameters, 'Companion', {
    get: DMInterfaceCryptoACParameters$Companion_getInstance
  });
  Object.defineProperty(DMInterfaceCryptoACParameters, '$serializer', {
    get: DMInterfaceCryptoACParameters$$serializer_getInstance
  });
  var package$implementation = package$cryptoac.implementation || (package$cryptoac.implementation = {});
  var package$dm = package$implementation.dm || (package$implementation.dm = {});
  package$dm.DMInterfaceCryptoACParameters_init_lo0m20$ = DMInterfaceCryptoACParameters_init;
  package$dm.DMInterfaceCryptoACParameters = DMInterfaceCryptoACParameters;
  Object.defineProperty(DMInterfaceMosquittoParameters, 'Companion', {
    get: DMInterfaceMosquittoParameters$Companion_getInstance
  });
  Object.defineProperty(DMInterfaceMosquittoParameters, '$serializer', {
    get: DMInterfaceMosquittoParameters$$serializer_getInstance
  });
  package$dm.DMInterfaceMosquittoParameters_init_k30w7f$ = DMInterfaceMosquittoParameters_init;
  package$dm.DMInterfaceMosquittoParameters = DMInterfaceMosquittoParameters;
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
  package$dm.AclType = AclType;
  Object.defineProperty(MQTTMessage, 'Companion', {
    get: MQTTMessage$Companion_getInstance
  });
  Object.defineProperty(MQTTMessage, '$serializer', {
    get: MQTTMessage$$serializer_getInstance
  });
  package$dm.MQTTMessage_init_2tljvq$ = MQTTMessage_init;
  package$dm.MQTTMessage = MQTTMessage;
  package$dm.DMInterfaceParameters = DMInterfaceParameters;
  package$dm.DMInterfaceRBACMQTTParameters = DMInterfaceRBACMQTTParameters;
  package$dm.DMInterfaceRBACCLOUDParameters = DMInterfaceRBACCLOUDParameters;
  Object.defineProperty(DMType, 'CRYPTOAC', {
    get: DMType$CRYPTOAC_getInstance
  });
  Object.defineProperty(DMType, 'MOSQUITTO', {
    get: DMType$MOSQUITTO_getInstance
  });
  package$dm.DMType = DMType;
  Object.defineProperty(MMInterfaceMySQLParameters, 'Companion', {
    get: MMInterfaceMySQLParameters$Companion_getInstance
  });
  Object.defineProperty(MMInterfaceMySQLParameters, '$serializer', {
    get: MMInterfaceMySQLParameters$$serializer_getInstance
  });
  var package$mm = package$implementation.mm || (package$implementation.mm = {});
  package$mm.MMInterfaceMySQLParameters_init_owlmu0$ = MMInterfaceMySQLParameters_init;
  package$mm.MMInterfaceMySQLParameters = MMInterfaceMySQLParameters;
  package$mm.MMInterfaceParameters = MMInterfaceParameters;
  package$mm.MMInterfaceRBACMQTTParameters = MMInterfaceRBACMQTTParameters;
  package$mm.MMInterfaceRBACCLOUDParameters = MMInterfaceRBACCLOUDParameters;
  Object.defineProperty(MMType, 'MYSQL', {
    get: MMType$MYSQL_getInstance
  });
  Object.defineProperty(MMType, 'REDIS', {
    get: MMType$REDIS_getInstance
  });
  package$mm.MMType = MMType;
  Object.defineProperty(MMInterfaceRedisParameters, 'Companion', {
    get: MMInterfaceRedisParameters$Companion_getInstance
  });
  Object.defineProperty(MMInterfaceRedisParameters, '$serializer', {
    get: MMInterfaceRedisParameters$$serializer_getInstance
  });
  package$mm.MMInterfaceRedisParameters_init_vkx0s3$ = MMInterfaceRedisParameters_init;
  package$mm.MMInterfaceRedisParameters = MMInterfaceRedisParameters;
  Object.defineProperty(OPAInterfaceParameters, 'Companion', {
    get: OPAInterfaceParameters$Companion_getInstance
  });
  Object.defineProperty(OPAInterfaceParameters, '$serializer', {
    get: OPAInterfaceParameters$$serializer_getInstance
  });
  var package$opa = package$implementation.opa || (package$implementation.opa = {});
  package$opa.OPAInterfaceParameters_init_p3y8yb$ = OPAInterfaceParameters_init;
  package$opa.OPAInterfaceParameters = OPAInterfaceParameters;
  Object.defineProperty(RMInterfaceCryptoACParameters, 'Companion', {
    get: RMInterfaceCryptoACParameters$Companion_getInstance
  });
  Object.defineProperty(RMInterfaceCryptoACParameters, '$serializer', {
    get: RMInterfaceCryptoACParameters$$serializer_getInstance
  });
  var package$rm = package$implementation.rm || (package$implementation.rm = {});
  package$rm.RMInterfaceCryptoACParameters_init_ld8t48$ = RMInterfaceCryptoACParameters_init;
  package$rm.RMInterfaceCryptoACParameters = RMInterfaceCryptoACParameters;
  package$rm.RMInterfaceParameters = RMInterfaceParameters;
  package$rm.RMInterfaceRBACCLOUDParameters = RMInterfaceRBACCLOUDParameters;
  Object.defineProperty(RMType, 'CRYPTOAC', {
    get: RMType$CRYPTOAC_getInstance
  });
  Object.defineProperty(RMType, 'NONE', {
    get: RMType$NONE_getInstance
  });
  package$rm.RMType = RMType;
  Object.defineProperty(package$cryptoac, 'Themes', {
    get: Themes_getInstance
  });
  $$importsForInline$$['kotlin-styled'] = $module$kotlin_styled;
  $$importsForInline$$['kotlin-react-dom-legacy'] = $module$kotlin_react_dom_legacy;
  var package$view = package$cryptoac.view || (package$cryptoac.view = {});
  package$view.App = App;
  Object.defineProperty(UIType, 'Modules', {
    get: UIType$Modules_getInstance
  });
  Object.defineProperty(UIType, 'Dashboard', {
    get: UIType$Dashboard_getInstance
  });
  Object.defineProperty(UIType, 'TradeOffBoard', {
    get: UIType$TradeOffBoard_getInstance
  });
  package$view.UIType = UIType;
  $$importsForInline$$['ktor-ktor-http-js-legacy'] = $module$ktor_ktor_http_js_legacy;
  package$view.Login = Login;
  package$view.login_by9vj2$ = login;
  Object.defineProperty(package$view, 'baseURL', {
    get: function () {
      return baseURL;
    }
  });
  package$view.main = main;
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
  var package$components = package$view.components || (package$view.components = {});
  var package$custom = package$components.custom || (package$components.custom = {});
  package$custom.CryptoACAlertSeverity = CryptoACAlertSeverity;
  package$custom.CryptoACAlert = CryptoACAlert;
  package$custom.cryptoACAlert_qx5uz7$ = cryptoACAlert;
  package$custom.CryptoACButtonAndIcon = CryptoACButtonAndIcon;
  package$custom.cryptoACButtonAndIcon_e5ep0v$ = cryptoACButtonAndIcon;
  package$custom.CryptoACButtonAndIconData = CryptoACButtonAndIconData;
  package$custom.CryptoACButtonAndIconGroup = CryptoACButtonAndIconGroup;
  package$custom.cryptoACButtonAndIconGroup_z0kyko$ = cryptoACButtonAndIconGroup;
  Object.defineProperty(package$custom, 'divider', {
    get: function () {
      return divider;
    }
  });
  package$custom.CryptoACCheckbox = CryptoACCheckbox;
  package$custom.cryptoACCheckbox_t7vnd2$ = cryptoACCheckbox;
  package$custom.CryptoACDivider = CryptoACDivider;
  package$custom.cryptoACDivider_v9xll6$ = cryptoACDivider;
  package$custom.CryptoACForm = CryptoACForm;
  package$custom.cryptoACForm_ryu66h$ = cryptoACForm;
  package$custom.CryptoACFormData = CryptoACFormData;
  package$custom.CryptoACPaper = CryptoACPaper;
  package$custom.cryptoACPaper_kg650j$ = cryptoACPaper;
  package$custom.CryptoACRadioGroup = CryptoACRadioGroup;
  package$custom.cryptoACRadioGroup_kayesb$ = cryptoACRadioGroup;
  package$custom.CryptoACRadioOption = CryptoACRadioOption;
  package$custom.CryptoACScore = CryptoACScore;
  package$custom.cryptoACScore_c8tul9$ = cryptoACScore;
  package$custom.CryptoACSelect = CryptoACSelect;
  package$custom.cryptoACSelect_urwqz7$ = cryptoACSelect;
  package$custom.CryptoACSlider = CryptoACSlider;
  package$custom.cryptoACSlider_oyir8o$ = cryptoACSlider;
  package$custom.CryptoACSwitch = CryptoACSwitch;
  package$custom.cryptoACSwitch_vbcf91$ = cryptoACSwitch;
  package$custom.CryptoACTextField = CryptoACTextField;
  package$custom.cryptoACTextField_n0ampu$ = cryptoACTextField;
  var package$table = package$custom.table || (package$custom.table = {});
  package$table.CryptoACTable = CryptoACTable;
  package$table.cryptoACTable_pb91d$ = cryptoACTable;
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
  var package$content = package$view.content || (package$view.content = {});
  var package$dashboard = package$content.dashboard || (package$content.dashboard = {});
  package$dashboard.Dashboard = Dashboard;
  package$dashboard.dashboard_w8jcce$ = dashboard;
  package$dashboard.CloudDashboard = CloudDashboard;
  package$dashboard.rbacCLOUDDashboard_w3edf3$ = rbacCLOUDDashboard;
  package$dashboard.RBACDashboard = RBACDashboard;
  package$dashboard.MQTTDashboard = MQTTDashboard;
  package$dashboard.rbacMQTTDashboard_fp9qee$ = rbacMQTTDashboard;
  var package$modules = package$content.modules || (package$content.modules = {});
  package$modules.ModuleItem = ModuleItem;
  package$modules.moduleItem_o4448a$ = moduleItem;
  package$modules.Modules = Modules;
  package$modules.modules_awzo2k$ = modules;
  package$modules.getImageFromModuleImplementation_61zpoe$ = getImageFromModuleImplementation;
  Object.defineProperty(Architecture, 'Companion', {
    get: Architecture$Companion_getInstance
  });
  var package$tradeoffboard = package$content.tradeoffboard || (package$content.tradeoffboard = {});
  package$tradeoffboard.Architecture = Architecture;
  package$tradeoffboard.Assignment = Assignment;
  package$tradeoffboard.powerSet_4c7yge$ = powerSet;
  package$tradeoffboard.Attacker = Attacker;
  package$tradeoffboard.ConfigurationItem = ConfigurationItem;
  package$tradeoffboard.configurationItem_q1e56u$ = configurationItem;
  package$tradeoffboard.EntityIcon = EntityIcon;
  package$tradeoffboard.entityIcon_7w8p1p$ = entityIcon;
  package$tradeoffboard.Requirement = Requirement;
  package$tradeoffboard.RequirementItem = RequirementItem;
  package$tradeoffboard.requirementItem_wl6rh5$ = requirementItem;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  $$importsForInline$$.CryptoAC = _;
  package$tradeoffboard.TradeOffBoard = TradeOffBoard;
  package$tradeoffboard.tradeOffBoard_5d2epg$ = tradeOffBoard;
  Object.defineProperty(Scenario, 'CLOUD', {
    get: Scenario$CLOUD_getInstance
  });
  Object.defineProperty(Scenario, 'MQTT', {
    get: Scenario$MQTT_getInstance
  });
  package$tradeoffboard.Scenario = Scenario;
  Object.defineProperty(Algorithm, 'Best', {
    get: Algorithm$Best_getInstance
  });
  Object.defineProperty(Algorithm, 'AdHoc', {
    get: Algorithm$AdHoc_getInstance
  });
  package$tradeoffboard.Algorithm = Algorithm;
  Object.defineProperty(Metric, 'Goals', {
    get: Metric$Goals_getInstance
  });
  Object.defineProperty(Metric, 'Protection', {
    get: Metric$Protection_getInstance
  });
  package$tradeoffboard.Metric = Metric;
  Object.defineProperty(Domains, 'Client', {
    get: Domains$Client_getInstance
  });
  Object.defineProperty(Domains, 'ESP', {
    get: Domains$ESP_getInstance
  });
  Object.defineProperty(Domains, 'OnPremise', {
    get: Domains$OnPremise_getInstance
  });
  Object.defineProperty(Domains, 'CSP', {
    get: Domains$CSP_getInstance
  });
  package$tradeoffboard.Domains = Domains;
  Object.defineProperty(DomainsWithChannels, 'Client', {
    get: DomainsWithChannels$Client_getInstance
  });
  Object.defineProperty(DomainsWithChannels, 'ESP', {
    get: DomainsWithChannels$ESP_getInstance
  });
  Object.defineProperty(DomainsWithChannels, 'OnPremise', {
    get: DomainsWithChannels$OnPremise_getInstance
  });
  Object.defineProperty(DomainsWithChannels, 'CSP', {
    get: DomainsWithChannels$CSP_getInstance
  });
  Object.defineProperty(DomainsWithChannels, 'Client_ESP', {
    get: DomainsWithChannels$Client_ESP_getInstance
  });
  Object.defineProperty(DomainsWithChannels, 'Client_OnPremise', {
    get: DomainsWithChannels$Client_OnPremise_getInstance
  });
  Object.defineProperty(DomainsWithChannels, 'Client_CSP', {
    get: DomainsWithChannels$Client_CSP_getInstance
  });
  Object.defineProperty(DomainsWithChannels, 'ESP_OnPremise', {
    get: DomainsWithChannels$ESP_OnPremise_getInstance
  });
  Object.defineProperty(DomainsWithChannels, 'ESP_CSP', {
    get: DomainsWithChannels$ESP_CSP_getInstance
  });
  Object.defineProperty(DomainsWithChannels, 'OnPremise_CSP', {
    get: DomainsWithChannels$OnPremise_CSP_getInstance
  });
  package$tradeoffboard.DomainsWithChannels = DomainsWithChannels;
  Object.defineProperty(Entities, 'CryptoAC', {
    get: Entities$CryptoAC_getInstance
  });
  Object.defineProperty(Entities, 'RM', {
    get: Entities$RM_getInstance
  });
  Object.defineProperty(Entities, 'MM', {
    get: Entities$MM_getInstance
  });
  Object.defineProperty(Entities, 'DM', {
    get: Entities$DM_getInstance
  });
  package$tradeoffboard.Entities = Entities;
  Object.defineProperty(EntitiesWithChannels, 'CryptoAC', {
    get: EntitiesWithChannels$CryptoAC_getInstance
  });
  Object.defineProperty(EntitiesWithChannels, 'RM', {
    get: EntitiesWithChannels$RM_getInstance
  });
  Object.defineProperty(EntitiesWithChannels, 'MM', {
    get: EntitiesWithChannels$MM_getInstance
  });
  Object.defineProperty(EntitiesWithChannels, 'DM', {
    get: EntitiesWithChannels$DM_getInstance
  });
  Object.defineProperty(EntitiesWithChannels, 'CryptoAC_RM', {
    get: EntitiesWithChannels$CryptoAC_RM_getInstance
  });
  Object.defineProperty(EntitiesWithChannels, 'CryptoAC_DM', {
    get: EntitiesWithChannels$CryptoAC_DM_getInstance
  });
  Object.defineProperty(EntitiesWithChannels, 'CryptoAC_MM', {
    get: EntitiesWithChannels$CryptoAC_MM_getInstance
  });
  Object.defineProperty(EntitiesWithChannels, 'RM_MM', {
    get: EntitiesWithChannels$RM_MM_getInstance
  });
  Object.defineProperty(EntitiesWithChannels, 'RM_DM', {
    get: EntitiesWithChannels$RM_DM_getInstance
  });
  Object.defineProperty(EntitiesWithChannels, 'MM_DM', {
    get: EntitiesWithChannels$MM_DM_getInstance
  });
  package$tradeoffboard.EntitiesWithChannels = EntitiesWithChannels;
  Object.defineProperty(Attackers, 'MitM', {
    get: Attackers$MitM_getInstance
  });
  Object.defineProperty(Attackers, 'Insider', {
    get: Attackers$Insider_getInstance
  });
  Object.defineProperty(Attackers, 'MatD', {
    get: Attackers$MatD_getInstance
  });
  package$tradeoffboard.Attackers = Attackers;
  Object.defineProperty(Likelihood, 'High', {
    get: Likelihood$High_getInstance
  });
  Object.defineProperty(Likelihood, 'Medium', {
    get: Likelihood$Medium_getInstance
  });
  Object.defineProperty(Likelihood, 'Low', {
    get: Likelihood$Low_getInstance
  });
  Object.defineProperty(Likelihood, 'None', {
    get: Likelihood$None_getInstance
  });
  package$tradeoffboard.Likelihood = Likelihood;
  Object.defineProperty(Impact, 'High', {
    get: Impact$High_getInstance
  });
  Object.defineProperty(Impact, 'Medium', {
    get: Impact$Medium_getInstance
  });
  Object.defineProperty(Impact, 'Low', {
    get: Impact$Low_getInstance
  });
  Object.defineProperty(Impact, 'None', {
    get: Impact$None_getInstance
  });
  package$tradeoffboard.Impact = Impact;
  Object.defineProperty(Threshold, 'None', {
    get: Threshold$None_getInstance
  });
  Object.defineProperty(Threshold, 'Soft', {
    get: Threshold$Soft_getInstance
  });
  Object.defineProperty(Threshold, 'Hard', {
    get: Threshold$Hard_getInstance
  });
  package$tradeoffboard.Threshold = Threshold;
  Object.defineProperty(SecurityRequirements, 'Confidentiality', {
    get: SecurityRequirements$Confidentiality_getInstance
  });
  Object.defineProperty(SecurityRequirements, 'Integrity', {
    get: SecurityRequirements$Integrity_getInstance
  });
  Object.defineProperty(SecurityRequirements, 'Availability', {
    get: SecurityRequirements$Availability_getInstance
  });
  package$tradeoffboard.SecurityRequirements = SecurityRequirements;
  Object.defineProperty(PerformanceRequirements, 'Redundancy', {
    get: PerformanceRequirements$Redundancy_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'Scalability', {
    get: PerformanceRequirements$Scalability_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'Reliability', {
    get: PerformanceRequirements$Reliability_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'Maintenance', {
    get: PerformanceRequirements$Maintenance_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'DoS_Resilience', {
    get: PerformanceRequirements$DoS_Resilience_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'CSP_Vendor_Lock_in', {
    get: PerformanceRequirements$CSP_Vendor_Lock_in_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'On_premise_Savings', {
    get: PerformanceRequirements$On_premise_Savings_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'CSP_Savings', {
    get: PerformanceRequirements$CSP_Savings_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'Latency', {
    get: PerformanceRequirements$Latency_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'Throughput', {
    get: PerformanceRequirements$Throughput_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'Computational_Power', {
    get: PerformanceRequirements$Computational_Power_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'Storage_capacity', {
    get: PerformanceRequirements$Storage_capacity_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'ESP_Vendor_Lock_in', {
    get: PerformanceRequirements$ESP_Vendor_Lock_in_getInstance
  });
  Object.defineProperty(PerformanceRequirements, 'ESP_Savings', {
    get: PerformanceRequirements$ESP_Savings_getInstance
  });
  package$tradeoffboard.PerformanceRequirements = PerformanceRequirements;
  package$tradeoffboard.getImageFromEntity_ez605z$ = getImageFromEntity;
  Object.defineProperty(package$tradeoffboard, 'performanceRequirementsImpact', {
    get: function () {
      return performanceRequirementsImpact;
    },
    set: function (value) {
      performanceRequirementsImpact = value;
    }
  });
  Object.defineProperty(package$tradeoffboard, 'securityRequirementsImpact', {
    get: function () {
      return securityRequirementsImpact;
    },
    set: function (value) {
      securityRequirementsImpact = value;
    }
  });
  package$tradeoffboard.TrustAssumptionsLikelihood = TrustAssumptionsLikelihood;
  package$tradeoffboard.trustAssumptionsLikelihood_894y3t$ = trustAssumptionsLikelihood;
  var package$sidebar = package$view.sidebar || (package$view.sidebar = {});
  package$sidebar.Actions = Actions;
  package$sidebar.actions_975gys$ = actions;
  package$sidebar.Configuration = Configuration;
  package$sidebar.configuration_f9gbyb$ = configuration;
  package$sidebar.Empty = Empty;
  package$sidebar.empty_ors640$ = empty;
  package$sidebar.Evaluation = Evaluation;
  package$sidebar.evaluation_ors640$ = evaluation;
  OutcomeCode$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PolicyModel$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  CoreParametersCLOUD$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  CoreParametersMOCK$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
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
  DMInterfaceCryptoACParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  DMInterfaceMosquittoParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  MQTTMessage$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  MMInterfaceMySQLParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  MMInterfaceRedisParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  OPAInterfaceParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  RMInterfaceCryptoACParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  development = true;
  logger = mu.KotlinLogging.logger_o14v8n$(logger$lambda);
  var builder = new SerializersModuleBuilder_init();
  var builder_0 = new PolymorphicModuleBuilder_init(getKClass(MMInterfaceRBACCLOUDParameters), null);
  var clazz = getKClass(MMInterfaceMySQLParameters);
  var tmp$;
  builder_0.subclass_g8f9ns$(clazz, Kotlin.isType(tmp$ = serializer(createKType(getKClass(MMInterfaceMySQLParameters), [], false)), KSerializer) ? tmp$ : throwCCE());
  builder_0.buildTo_gz4556$(builder);
  var builder_1 = new PolymorphicModuleBuilder_init(getKClass(MMInterfaceRBACMQTTParameters), null);
  var clazz_0 = getKClass(MMInterfaceRedisParameters);
  var tmp$_0;
  builder_1.subclass_g8f9ns$(clazz_0, Kotlin.isType(tmp$_0 = serializer(createKType(getKClass(MMInterfaceRedisParameters), [], false)), KSerializer) ? tmp$_0 : throwCCE());
  builder_1.buildTo_gz4556$(builder);
  var builder_2 = new PolymorphicModuleBuilder_init(getKClass(MMInterfaceParameters), null);
  var clazz_1 = getKClass(MMInterfaceMySQLParameters);
  var tmp$_1;
  builder_2.subclass_g8f9ns$(clazz_1, Kotlin.isType(tmp$_1 = serializer(createKType(getKClass(MMInterfaceMySQLParameters), [], false)), KSerializer) ? tmp$_1 : throwCCE());
  var clazz_2 = getKClass(MMInterfaceRedisParameters);
  var tmp$_2;
  builder_2.subclass_g8f9ns$(clazz_2, Kotlin.isType(tmp$_2 = serializer(createKType(getKClass(MMInterfaceRedisParameters), [], false)), KSerializer) ? tmp$_2 : throwCCE());
  builder_2.buildTo_gz4556$(builder);
  var builder_3 = new PolymorphicModuleBuilder_init(getKClass(DMInterfaceRBACCLOUDParameters), null);
  var clazz_3 = getKClass(DMInterfaceCryptoACParameters);
  var tmp$_3;
  builder_3.subclass_g8f9ns$(clazz_3, Kotlin.isType(tmp$_3 = serializer(createKType(getKClass(DMInterfaceCryptoACParameters), [], false)), KSerializer) ? tmp$_3 : throwCCE());
  builder_3.buildTo_gz4556$(builder);
  var builder_4 = new PolymorphicModuleBuilder_init(getKClass(DMInterfaceRBACMQTTParameters), null);
  var clazz_4 = getKClass(DMInterfaceMosquittoParameters);
  var tmp$_4;
  builder_4.subclass_g8f9ns$(clazz_4, Kotlin.isType(tmp$_4 = serializer(createKType(getKClass(DMInterfaceMosquittoParameters), [], false)), KSerializer) ? tmp$_4 : throwCCE());
  builder_4.buildTo_gz4556$(builder);
  var builder_5 = new PolymorphicModuleBuilder_init(getKClass(DMInterfaceParameters), null);
  var clazz_5 = getKClass(DMInterfaceCryptoACParameters);
  var tmp$_5;
  builder_5.subclass_g8f9ns$(clazz_5, Kotlin.isType(tmp$_5 = serializer(createKType(getKClass(DMInterfaceCryptoACParameters), [], false)), KSerializer) ? tmp$_5 : throwCCE());
  var clazz_6 = getKClass(DMInterfaceMosquittoParameters);
  var tmp$_6;
  builder_5.subclass_g8f9ns$(clazz_6, Kotlin.isType(tmp$_6 = serializer(createKType(getKClass(DMInterfaceMosquittoParameters), [], false)), KSerializer) ? tmp$_6 : throwCCE());
  builder_5.buildTo_gz4556$(builder);
  var builder_6 = new PolymorphicModuleBuilder_init(getKClass(RMInterfaceRBACCLOUDParameters), null);
  var clazz_7 = getKClass(RMInterfaceCryptoACParameters);
  var tmp$_7;
  builder_6.subclass_g8f9ns$(clazz_7, Kotlin.isType(tmp$_7 = serializer(createKType(getKClass(RMInterfaceCryptoACParameters), [], false)), KSerializer) ? tmp$_7 : throwCCE());
  builder_6.buildTo_gz4556$(builder);
  var builder_7 = new PolymorphicModuleBuilder_init(getKClass(CoreParameters), null);
  var clazz_8 = getKClass(CoreParametersMQTT);
  var tmp$_8;
  builder_7.subclass_g8f9ns$(clazz_8, Kotlin.isType(tmp$_8 = serializer(createKType(getKClass(CoreParametersMQTT), [], false)), KSerializer) ? tmp$_8 : throwCCE());
  var clazz_9 = getKClass(CoreParametersCLOUD);
  var tmp$_9;
  builder_7.subclass_g8f9ns$(clazz_9, Kotlin.isType(tmp$_9 = serializer(createKType(getKClass(CoreParametersCLOUD), [], false)), KSerializer) ? tmp$_9 : throwCCE());
  var clazz_10 = getKClass(CoreParametersMOCK);
  var tmp$_10;
  builder_7.subclass_g8f9ns$(clazz_10, Kotlin.isType(tmp$_10 = serializer(createKType(getKClass(CoreParametersMOCK), [], false)), KSerializer) ? tmp$_10 : throwCCE());
  builder_7.buildTo_gz4556$(builder);
  module_0 = builder.build();
  myJson = Json(void 0, myJson$lambda);
  logger_0 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_0);
  logger_1 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_1);
  logger_2 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_2);
  logger_3 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_3);
  logger_4 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_4);
  logger_5 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_5);
  logger_6 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_6);
  logger_7 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_7);
  logger_8 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_8);
  logger_9 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_9);
  baseURL = window.location.protocol + '//' + window.location.host;
  logger_10 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_10);
  divider = '4%&\xA3$5';
  logger_11 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_11);
  userColumns = [new CryptoACTableColumn('name', 'Name', 'The name of the user'), new CryptoACTableColumn('status', 'Status', 'The current status of the user (INCOMPLETE, OPERATIONAL or DELETED)'), new CryptoACTableColumn('isAdmin', 'Admin', 'Whether the user has administrative privileges', 'boolean'), new CryptoACTableColumn('token', 'Token', 'The token of the user')];
  roleColumns = [new CryptoACTableColumn('name', 'Name', 'The name of the role'), new CryptoACTableColumn('status', 'Status', 'The current status of the role (OPERATIONAL or DELETED)'), new CryptoACTableColumn('token', 'Token', 'The token of the role')];
  fileColumns = [new CryptoACTableColumn('name', 'Name', 'The name of the file'), new CryptoACTableColumn('status', 'Status', 'The current status of the file (OPERATIONAL or DELETED)'), new CryptoACTableColumn('versionNumber', '#', 'The version number of the file', 'number'), new CryptoACTableColumn('token', 'Token', 'The token of the file')];
  assignmentColumns = [new CryptoACTableColumn('username', 'Username', 'The name of the user'), new CryptoACTableColumn('role name', 'Role Name', 'The name of the role'), new CryptoACTableColumn('versionNumber', '#', 'The version number of the role', 'number')];
  permissionColumns = [new CryptoACTableColumn('role name', 'Role Name', 'The name of the role'), new CryptoACTableColumn('file name', 'File Name', 'The name of the file'), new CryptoACTableColumn('fileVersionNumber', '#', 'The version number of the key', 'number'), new CryptoACTableColumn('permission', 'Permission', 'The permission assigned (either Read or ReadWrite)')];
  mqttMessagesColumns = [new CryptoACTableColumn('message', 'Message', 'A message sent in the topic')];
  logger_12 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_12);
  logger_13 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_13);
  logger_14 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_14);
  logger_15 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_15);
  logger_16 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_16);
  logger_17 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_17);
  performanceRequirementsImpact = hashMapOf([to(PerformanceRequirements$Redundancy_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$Scalability_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$Reliability_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$Maintenance_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$DoS_Resilience_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$On_premise_Savings_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$CSP_Vendor_Lock_in_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$CSP_Savings_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$Latency_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$Throughput_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$Computational_Power_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$Storage_capacity_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$ESP_Vendor_Lock_in_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)])), to(PerformanceRequirements$ESP_Savings_getInstance(), hashMapOf([to(new Assignment(Domains$Client_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$Client_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$OnPremise_getInstance(), Entities$RM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$MM_getInstance()), -1), to(new Assignment(Domains$OnPremise_getInstance(), Entities$DM_getInstance()), -1), to(new Assignment(Domains$ESP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$RM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$MM_getInstance()), 0), to(new Assignment(Domains$ESP_getInstance(), Entities$DM_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$CryptoAC_getInstance()), 0), to(new Assignment(Domains$CSP_getInstance(), Entities$RM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$MM_getInstance()), 1), to(new Assignment(Domains$CSP_getInstance(), Entities$DM_getInstance()), 1)]))]);
  securityRequirementsImpact = hashMapOf([to(SecurityRequirements$Confidentiality_getInstance(), hashMapOf([to(EntitiesWithChannels$CryptoAC_getInstance(), Impact$High_getInstance()), to(EntitiesWithChannels$RM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$MM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$DM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$CryptoAC_RM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$CryptoAC_DM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$CryptoAC_MM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$RM_MM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$RM_DM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$MM_DM_getInstance(), Impact$None_getInstance())])), to(SecurityRequirements$Integrity_getInstance(), hashMapOf([to(EntitiesWithChannels$CryptoAC_getInstance(), Impact$High_getInstance()), to(EntitiesWithChannels$RM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$MM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$DM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$CryptoAC_RM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$CryptoAC_DM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$CryptoAC_MM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$RM_MM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$RM_DM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$MM_DM_getInstance(), Impact$None_getInstance())])), to(SecurityRequirements$Availability_getInstance(), hashMapOf([to(EntitiesWithChannels$CryptoAC_getInstance(), Impact$High_getInstance()), to(EntitiesWithChannels$RM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$MM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$DM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$CryptoAC_RM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$CryptoAC_DM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$CryptoAC_MM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$RM_MM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$RM_DM_getInstance(), Impact$None_getInstance()), to(EntitiesWithChannels$MM_DM_getInstance(), Impact$None_getInstance())]))]);
  logger_18 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_18);
  main();
  Kotlin.defineModule('CryptoAC', _);
  return _;
}));

//# sourceMappingURL=CryptoAC.js.map
