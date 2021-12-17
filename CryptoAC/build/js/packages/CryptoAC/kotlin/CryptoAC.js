(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'kotlin-logging-jsLegacy', 'ktor-ktor-io-js-legacy', 'kotlin-css', 'kotlin-styled', '@material-ui/core', 'kotlin-react', 'ktor-ktor-client-json-js-legacy', 'ktor-ktor-client-serialization-js-legacy', 'ktor-ktor-client-core-js-legacy', 'kotlin-react-dom', '@material-ui/lab', 'kotlinx-html-js', 'ktor-ktor-http-js-legacy', 'react-icons/fa', 'kotlinx-coroutines-core', 'kotlinx-serialization-kotlinx-serialization-json-js-legacy', 'ktor-ktor-http-cio-js-legacy', 'react-pro-sidebar'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('kotlin-logging-jsLegacy'), require('ktor-ktor-io-js-legacy'), require('kotlin-css'), require('kotlin-styled'), require('@material-ui/core'), require('kotlin-react'), require('ktor-ktor-client-json-js-legacy'), require('ktor-ktor-client-serialization-js-legacy'), require('ktor-ktor-client-core-js-legacy'), require('kotlin-react-dom'), require('@material-ui/lab'), require('kotlinx-html-js'), require('ktor-ktor-http-js-legacy'), require('react-icons/fa'), require('kotlinx-coroutines-core'), require('kotlinx-serialization-kotlinx-serialization-json-js-legacy'), require('ktor-ktor-http-cio-js-legacy'), require('react-pro-sidebar'));
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
    }if (typeof this['ktor-ktor-http-cio-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'ktor-ktor-http-cio-js-legacy' was not found. Please, check whether 'ktor-ktor-http-cio-js-legacy' is loaded prior to 'CryptoAC'.");
    }if (typeof this['react-pro-sidebar'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC'. Its dependency 'react-pro-sidebar' was not found. Please, check whether 'react-pro-sidebar' is loaded prior to 'CryptoAC'.");
    }root.CryptoAC = factory(typeof CryptoAC === 'undefined' ? {} : CryptoAC, kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['kotlin-logging-jsLegacy'], this['ktor-ktor-io-js-legacy'], this['kotlin-css'], this['kotlin-styled'], this['@material-ui/core'], this['kotlin-react'], this['ktor-ktor-client-json-js-legacy'], this['ktor-ktor-client-serialization-js-legacy'], this['ktor-ktor-client-core-js-legacy'], this['kotlin-react-dom'], this['@material-ui/lab'], this['kotlinx-html-js'], this['ktor-ktor-http-js-legacy'], this['react-icons/fa'], this['kotlinx-coroutines-core'], this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'], this['ktor-ktor-http-cio-js-legacy'], this['react-pro-sidebar']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$kotlin_logging_jsLegacy, $module$ktor_ktor_io_js_legacy, $module$kotlin_css, $module$kotlin_styled, $module$_material_ui_core, $module$kotlin_react, $module$ktor_ktor_client_json_js_legacy, $module$ktor_ktor_client_serialization_js_legacy, $module$ktor_ktor_client_core_js_legacy, $module$kotlin_react_dom, $module$_material_ui_lab, $module$kotlinx_html_js, $module$ktor_ktor_http_js_legacy, $module$react_icons_fa, $module$kotlinx_coroutines_core, $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy, $module$ktor_ktor_http_cio_js_legacy, $module$react_pro_sidebar) {
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
  var mu = $module$kotlin_logging_jsLegacy.mu;
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var getKClass = Kotlin.getKClass;
  var PolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.PolymorphicSerializer;
  var SerializerFactory = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.SerializerFactory;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toString = Kotlin.toString;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var throwCCE = Kotlin.throwCCE;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var EnumSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.EnumSerializer;
  var equals = Kotlin.equals;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var String_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.String_xge8xe$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var plus = Kotlin.kotlin.collections.plus_q4559j$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Random = Kotlin.kotlin.random.Random;
  var getCallableRef = Kotlin.getCallableRef;
  var hashCode = Kotlin.hashCode;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.NullableSerializer;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var SealedClassSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.SealedClassSerializer;
  var set_zIndex = $module$kotlin_css.kotlinx.css.set_zIndex_a6g65m$;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var setState = $module$kotlin_react.react.setState_nm1tvw$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var get_pct = $module$kotlin_css.kotlinx.css.get_pct_rcaex3$;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_marginLeft = $module$kotlin_css.kotlinx.css.set_marginLeft_n8chyh$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var JsonFeature = $module$ktor_ktor_client_json_js_legacy.io.ktor.client.features.json.JsonFeature;
  var KotlinxSerializer = $module$ktor_ktor_client_serialization_js_legacy.io.ktor.client.features.json.serializer.KotlinxSerializer;
  var WebSockets = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.websocket.WebSockets;
  var HttpCookies = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.cookies.HttpCookies;
  var HttpClient = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.HttpClient_f0veat$;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_ftywkw$;
  var RComponent = $module$kotlin_react.react.RComponent;
  var html = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder = $module$kotlin_styled.styled.StyledDOMBuilder;
  var KotlinLoggingLevel = $module$kotlin_logging_jsLegacy.mu.KotlinLoggingLevel;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var createElement = $module$kotlin_react.react.createElement_zepujl$;
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
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var RDOMBuilder = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var FORM_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var Float = $module$kotlin_css.kotlinx.css.Float;
  var set_float = $module$kotlin_css.kotlinx.css.set_float_oo7voy$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var set_paddingLeft = $module$kotlin_css.kotlinx.css.set_paddingLeft_n8chyh$;
  var set_paddingRight = $module$kotlin_css.kotlinx.css.set_paddingRight_n8chyh$;
  var set_background = $module$kotlin_css.kotlinx.css.set_background_krvuuu$;
  var set_backgroundSize = $module$kotlin_css.kotlinx.css.set_backgroundSize_krvuuu$;
  var LineHeight = $module$kotlin_css.kotlinx.css.properties.LineHeight;
  var set_lineHeight = $module$kotlin_css.kotlinx.css.set_lineHeight_ftzj10$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
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
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var set_maxWidth = $module$kotlin_css.kotlinx.css.set_maxWidth_n8chyh$;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var formUrlEncode = $module$ktor_ktor_http_js_legacy.io.ktor.http.formUrlEncode_vw30m7$;
  var attributesMapOf_1 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var DIV_init_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var css = $module$kotlin_css.kotlinx.css;
  var set_maxHeight = $module$kotlin_css.kotlinx.css.set_maxHeight_n8chyh$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var HashSet = Kotlin.kotlin.collections.HashSet;
  var createInvariantKTypeProjection = Kotlin.createInvariantKTypeProjection;
  var get_host = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.get_host_ocert9$;
  var get_port = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.get_port_ocert9$;
  var webSocketSession = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.features.websocket.webSocketSession_e8a0az$;
  var Frame$Text = $module$ktor_ktor_http_cio_js_legacy.io.ktor.http.cio.websocket.Frame.Text;
  var readText_0 = $module$ktor_ktor_http_cio_js_legacy.io.ktor.http.cio.websocket.readText_2pdr7t$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var first_0 = Kotlin.kotlin.collections.first_7wnvza$;
  var plus_1 = Kotlin.kotlin.collections.plus_xfiyik$;
  var plus_2 = Kotlin.kotlin.collections.plus_khz7k3$;
  var set_borderTopLeftRadius = $module$kotlin_css.kotlinx.css.set_borderTopLeftRadius_n8chyh$;
  var set_borderTopRightRadius = $module$kotlin_css.kotlinx.css.set_borderTopRightRadius_n8chyh$;
  var set_padding = $module$kotlin_css.kotlinx.css.set_padding_krvuuu$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_borderColor = $module$kotlin_css.kotlinx.css.set_borderColor_ommczd$;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var BorderCollapse = $module$kotlin_css.kotlinx.css.BorderCollapse;
  var set_borderCollapse = $module$kotlin_css.kotlinx.css.set_borderCollapse_4z7co3$;
  var set_borderBottom = $module$kotlin_css.kotlinx.css.set_borderBottom_krvuuu$;
  var set_paddingTop = $module$kotlin_css.kotlinx.css.set_paddingTop_n8chyh$;
  var set_borderBottomLeftRadius = $module$kotlin_css.kotlinx.css.set_borderBottomLeftRadius_n8chyh$;
  var set_borderBottomRightRadius = $module$kotlin_css.kotlinx.css.set_borderBottomRightRadius_n8chyh$;
  var get_em = $module$kotlin_css.kotlinx.css.get_em_rcaex3$;
  var set_fontFamily = $module$kotlin_css.kotlinx.css.set_fontFamily_krvuuu$;
  var SPAN_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var TD_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var TR_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var THEAD_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
  var TBODY_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
  var TABLE_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var VerticalAlign = $module$kotlin_css.kotlinx.css.VerticalAlign;
  var set_verticalAlign = $module$kotlin_css.kotlinx.css.set_verticalAlign_9eaq6d$;
  var set_opacity = $module$kotlin_css.kotlinx.css.set_opacity_if475a$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var first_1 = Kotlin.kotlin.collections.first_2p1efm$;
  var linkedMapOf = Kotlin.kotlin.collections.linkedMapOf_qfcya0$;
  var BR_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var JsMath = Math;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var TD_init_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
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
  var Cursor = $module$kotlin_css.kotlinx.css.Cursor;
  var set_cursor = $module$kotlin_css.kotlinx.css.set_cursor_hrkqtc$;
  var padding_0 = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var set_borderRadius = $module$kotlin_css.kotlinx.css.set_borderRadius_n8chyh$;
  var TextDecoration = $module$kotlin_css.kotlinx.css.properties.TextDecoration;
  var set_textDecoration = $module$kotlin_css.kotlinx.css.set_textDecoration_pbf7yq$;
  var margin = $module$kotlin_css.kotlinx.css.margin_9vmwvs$;
  var FormPart = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.FormPart;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var formData = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.formData_l3ed5z$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var SUB_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUB;
  var P_init_0 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var A_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var url_0 = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.url_g8iu3v$;
  var MultiPartFormDataContent_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.forms.MultiPartFormDataContent;
  var HeadersBuilder_init = $module$ktor_ktor_http_js_legacy.io.ktor.http.HeadersBuilder;
  InputType_0.prototype = Object.create(Enum.prototype);
  InputType_0.prototype.constructor = InputType_0;
  OutcomeCode.prototype = Object.create(Enum.prototype);
  OutcomeCode.prototype.constructor = OutcomeCode;
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
  DMInterfaceCloudParameters.prototype = Object.create(DMInterfaceParameters.prototype);
  DMInterfaceCloudParameters.prototype.constructor = DMInterfaceCloudParameters;
  DMInterfaceMQTTParameters.prototype = Object.create(DMInterfaceParameters.prototype);
  DMInterfaceMQTTParameters.prototype.constructor = DMInterfaceMQTTParameters;
  AclType.prototype = Object.create(Enum.prototype);
  AclType.prototype.constructor = AclType;
  MMInterfaceMySQLParameters.prototype = Object.create(MMInterfaceParameters.prototype);
  MMInterfaceMySQLParameters.prototype.constructor = MMInterfaceMySQLParameters;
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
  CryptoACSwitch.prototype = Object.create(RComponent.prototype);
  CryptoACSwitch.prototype.constructor = CryptoACSwitch;
  CryptoACTextField.prototype = Object.create(RComponent.prototype);
  CryptoACTextField.prototype.constructor = CryptoACTextField;
  CryptoACTable.prototype = Object.create(RComponent.prototype);
  CryptoACTable.prototype.constructor = CryptoACTable;
  Content.prototype = Object.create(RComponent.prototype);
  Content.prototype.constructor = Content;
  Login.prototype = Object.create(RComponent.prototype);
  Login.prototype.constructor = Login;
  RBACContent.prototype = Object.create(RComponent.prototype);
  RBACContent.prototype.constructor = RBACContent;
  CloudContent.prototype = Object.create(RBACContent.prototype);
  CloudContent.prototype.constructor = CloudContent;
  MQTTContent.prototype = Object.create(RBACContent.prototype);
  MQTTContent.prototype.constructor = MQTTContent;
  BestArchitectures.prototype = Object.create(RComponent.prototype);
  BestArchitectures.prototype.constructor = BestArchitectures;
  Configuration.prototype = Object.create(RComponent.prototype);
  Configuration.prototype.constructor = Configuration;
  ConfigurationItem.prototype = Object.create(RComponent.prototype);
  ConfigurationItem.prototype.constructor = ConfigurationItem;
  EntityIcon.prototype = Object.create(RComponent.prototype);
  EntityIcon.prototype.constructor = EntityIcon;
  PreFilters.prototype = Object.create(RComponent.prototype);
  PreFilters.prototype.constructor = PreFilters;
  RequirementItem.prototype = Object.create(RComponent.prototype);
  RequirementItem.prototype.constructor = RequirementItem;
  Requirements.prototype = Object.create(RComponent.prototype);
  Requirements.prototype.constructor = Requirements;
  TradeOffBoard.prototype = Object.create(RComponent.prototype);
  TradeOffBoard.prototype.constructor = TradeOffBoard;
  Scenario.prototype = Object.create(Enum.prototype);
  Scenario.prototype.constructor = Scenario;
  Algorithm.prototype = Object.create(Enum.prototype);
  Algorithm.prototype.constructor = Algorithm;
  Metric.prototype = Object.create(Enum.prototype);
  Metric.prototype.constructor = Metric;
  DomainsCLOUD.prototype = Object.create(Enum.prototype);
  DomainsCLOUD.prototype.constructor = DomainsCLOUD;
  EntitiesCLOUD.prototype = Object.create(Enum.prototype);
  EntitiesCLOUD.prototype.constructor = EntitiesCLOUD;
  DomainsMQTT.prototype = Object.create(Enum.prototype);
  DomainsMQTT.prototype.constructor = DomainsMQTT;
  EntitiesMQTT.prototype = Object.create(Enum.prototype);
  EntitiesMQTT.prototype.constructor = EntitiesMQTT;
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
  ScenarioRequirementsCLOUD.prototype = Object.create(Enum.prototype);
  ScenarioRequirementsCLOUD.prototype.constructor = ScenarioRequirementsCLOUD;
  ScenarioRequirementsMQTT.prototype = Object.create(Enum.prototype);
  ScenarioRequirementsMQTT.prototype.constructor = ScenarioRequirementsMQTT;
  TrustAssumptions.prototype = Object.create(RComponent.prototype);
  TrustAssumptions.prototype.constructor = TrustAssumptions;
  TrustAssumptionsLikelihood.prototype = Object.create(RComponent.prototype);
  TrustAssumptionsLikelihood.prototype.constructor = TrustAssumptionsLikelihood;
  Sidebar.prototype = Object.create(RComponent.prototype);
  Sidebar.prototype.constructor = Sidebar;
  var development;
  function API() {
    API_instance = this;
    this.HTTP = 'http://';
    this.HTTPS = 'https://';
    this.VERSION1_0 = '/v1/';
    this.CURRENT_VERSION_0 = this.VERSION1_0;
    this.PROXY = '/v1/proxy/';
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
    OutcomeCode$CODE_034_ADMIN_ALREADY_INITIALIZED_instance = new OutcomeCode('CODE_034_ADMIN_ALREADY_INITIALIZED', 34);
    OutcomeCode$CODE_035_FORBIDDEN_instance = new OutcomeCode('CODE_035_FORBIDDEN', 35);
    OutcomeCode$CODE_036_UNAUTHORIZED_instance = new OutcomeCode('CODE_036_UNAUTHORIZED', 36);
    OutcomeCode$CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED_instance = new OutcomeCode('CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED', 37);
    OutcomeCode$CODE_038_PROFILE_NOT_FOUND_instance = new OutcomeCode('CODE_038_PROFILE_NOT_FOUND', 38);
    OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_instance = new OutcomeCode('CODE_039_MALFORMED_PROFILE_FILE', 39);
    OutcomeCode$CODE_040_UR_ASSIGNMENTS_NOT_FOUND_instance = new OutcomeCode('CODE_040_UR_ASSIGNMENTS_NOT_FOUND', 40);
    OutcomeCode$CODE_041_PA_ASSIGNMENTS_NOT_FOUND_instance = new OutcomeCode('CODE_041_PA_ASSIGNMENTS_NOT_FOUND', 41);
    OutcomeCode$CODE_042_RM_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_042_RM_CONNECTION_TIMEOUT', 42);
    OutcomeCode$CODE_043_DM_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_043_DM_CONNECTION_TIMEOUT', 43);
    OutcomeCode$CODE_044_MS_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_044_MS_CONNECTION_TIMEOUT', 44);
    OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_045_PROXY_CONNECTION_TIMEOUT', 45);
    OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_instance = new OutcomeCode('CODE_046_HTTP_METHOD_NOT_SUPPORTED', 46);
    OutcomeCode$CODE_047_UNEXPECTED_instance = new OutcomeCode('CODE_047_UNEXPECTED', 47);
    OutcomeCode$CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS', 48);
    OutcomeCode$CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS', 49);
    OutcomeCode$CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS_instance = new OutcomeCode('CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS', 50);
    OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_instance = new OutcomeCode('CODE_051_NO_NEW_MESSAGES_TO_READ', 51);
    OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_instance = new OutcomeCode('CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION', 52);
    OutcomeCode$CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_instance = new OutcomeCode('CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM', 53);
    OutcomeCode$CODE_054_DM_CONNECTION_TIMEOUT_instance = new OutcomeCode('CODE_054_DM_CONNECTION_TIMEOUT', 54);
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
  var OutcomeCode$CODE_043_DM_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_043_DM_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_043_DM_CONNECTION_TIMEOUT_instance;
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
  var OutcomeCode$CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_instance;
  function OutcomeCode$CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_instance;
  }
  var OutcomeCode$CODE_054_DM_CONNECTION_TIMEOUT_instance;
  function OutcomeCode$CODE_054_DM_CONNECTION_TIMEOUT_getInstance() {
    OutcomeCode_initFields();
    return OutcomeCode$CODE_054_DM_CONNECTION_TIMEOUT_instance;
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
    this.descriptor_n4u1rd$_0 = new EnumDescriptor('eu.fbk.st.cryptoac.OutcomeCode', 55);
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
    this.descriptor.addElement_ivxn3r$('CODE_043_DM_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_044_MS_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_045_PROXY_CONNECTION_TIMEOUT');
    this.descriptor.addElement_ivxn3r$('CODE_046_HTTP_METHOD_NOT_SUPPORTED');
    this.descriptor.addElement_ivxn3r$('CODE_047_UNEXPECTED');
    this.descriptor.addElement_ivxn3r$('CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS');
    this.descriptor.addElement_ivxn3r$('CODE_051_NO_NEW_MESSAGES_TO_READ');
    this.descriptor.addElement_ivxn3r$('CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION');
    this.descriptor.addElement_ivxn3r$('CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM');
    this.descriptor.addElement_ivxn3r$('CODE_054_DM_CONNECTION_TIMEOUT');
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
    return [OutcomeCode$CODE_000_SUCCESS_getInstance(), OutcomeCode$CODE_001_USER_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_002_ROLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_003_FILE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance(), OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance(), OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_009_FILETUPLE_NOT_FOUND_getInstance(), OutcomeCode$CODE_010_ROLETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_012_FILETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_013_USER_WAS_DELETED_getInstance(), OutcomeCode$CODE_014_ROLE_WAS_DELETED_getInstance(), OutcomeCode$CODE_015_FILE_WAS_DELETED_getInstance(), OutcomeCode$CODE_016_INVALID_PERMISSION_getInstance(), OutcomeCode$CODE_017_INVALID_VERSION_NUMBER_getInstance(), OutcomeCode$CODE_018_INTERFACE_CONFIGURATION_PARAMETERS_getInstance(), OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance(), OutcomeCode$CODE_020_INVALID_PARAMETER_getInstance(), OutcomeCode$CODE_021_RM_CONFIGURATION_getInstance(), OutcomeCode$CODE_022_ADMIN_CANNOT_BE_MODIFIED_getInstance(), OutcomeCode$CODE_023_USER_CANNOT_BE_MODIFIED_getInstance(), OutcomeCode$CODE_024_FILE_DELETE_getInstance(), OutcomeCode$CODE_025_FILE_RENAMING_getInstance(), OutcomeCode$CODE_026_TUPLE_FORMAT_getInstance(), OutcomeCode$CODE_027_AC_ENFORCEMENT_INCONSISTENT_getInstance(), OutcomeCode$CODE_028_OPA_POLICY_CREATION_getInstance(), OutcomeCode$CODE_029_OPA_DOCUMENT_UPDATE_getInstance(), OutcomeCode$CODE_030_OPA_DOCUMENT_DOWNLOAD_getInstance(), OutcomeCode$CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance(), OutcomeCode$CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS_getInstance(), OutcomeCode$CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS_getInstance(), OutcomeCode$CODE_034_ADMIN_ALREADY_INITIALIZED_getInstance(), OutcomeCode$CODE_035_FORBIDDEN_getInstance(), OutcomeCode$CODE_036_UNAUTHORIZED_getInstance(), OutcomeCode$CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED_getInstance(), OutcomeCode$CODE_038_PROFILE_NOT_FOUND_getInstance(), OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_getInstance(), OutcomeCode$CODE_040_UR_ASSIGNMENTS_NOT_FOUND_getInstance(), OutcomeCode$CODE_041_PA_ASSIGNMENTS_NOT_FOUND_getInstance(), OutcomeCode$CODE_042_RM_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_043_DM_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_044_MS_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_getInstance(), OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance(), OutcomeCode$CODE_047_UNEXPECTED_getInstance(), OutcomeCode$CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS_getInstance(), OutcomeCode$CODE_051_NO_NEW_MESSAGES_TO_READ_getInstance(), OutcomeCode$CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION_getInstance(), OutcomeCode$CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_getInstance(), OutcomeCode$CODE_054_DM_CONNECTION_TIMEOUT_getInstance()];
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
      case 'CODE_043_DM_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_043_DM_CONNECTION_TIMEOUT_getInstance();
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
      case 'CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM':
        return OutcomeCode$CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_getInstance();
      case 'CODE_054_DM_CONNECTION_TIMEOUT':
        return OutcomeCode$CODE_054_DM_CONNECTION_TIMEOUT_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.OutcomeCode.' + name);
    }
  }
  OutcomeCode.valueOf_61zpoe$ = OutcomeCode$valueOf;
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
    this.RM_URL = 'RM_URL';
    this.RM_PORT = 'RM_Port';
    this.DM_URL = 'DM_URL';
    this.DM_PORT = 'DM_Port';
    this.DM_PASSWORD = 'DM_Password';
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
  function logger$lambda_0() {
    return Unit;
  }
  var logger_0;
  function CoreParametersCLOUD(user, coreType, cryptoType, versionNumber, rmCloudInterfaceParameters, mmMySQLInterfaceParameters, dmCloudInterfaceParameters, opaInterfaceParameters) {
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
    this.rmCloudInterfaceParameters = rmCloudInterfaceParameters;
    this.mmMySQLInterfaceParameters = mmMySQLInterfaceParameters;
    this.dmCloudInterfaceParameters = dmCloudInterfaceParameters;
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
  function CoreParametersCLOUD$Companion() {
    CoreParametersCLOUD$Companion_instance = this;
  }
  function CoreParametersCLOUD$Companion$fromMap$lambda() {
    return 'Not all parameters were provided';
  }
  CoreParametersCLOUD$Companion.prototype.fromMap_xlh5cu$ = function (parameters) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    try {
      tmp$ = new User(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME)), void 0, void 0, void 0, toBoolean(parameters.get_11rb$(SERVER_getInstance().IS_ADMIN)));
      tmp$_0 = CoreType$RBAC_CLOUD_getInstance();
      tmp$_1 = CryptoType$valueOf(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().CRYPTO)));
      tmp$_2 = new RMInterfaceCloudParameters(toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().RM_PORT))), ensureNotNull(parameters.get_11rb$(SERVER_getInstance().RM_URL)));
      tmp$_3 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME));
      tmp$_4 = toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_PORT)));
      tmp$_5 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_URL));
      tmp$_6 = new CoreParametersCLOUD(tmp$, tmp$_0, tmp$_1, 1, tmp$_2, new MMInterfaceMySQLParameters(tmp$_3, ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_PASSWORD)), tmp$_4, tmp$_5), new DMInterfaceCloudParameters(toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_PORT))), ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_URL))), new OPAInterfaceParameters(toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().OPA_PORT))), ensureNotNull(parameters.get_11rb$(SERVER_getInstance().OPA_URL))));
    } catch (e) {
      if (Kotlin.isType(e, NullPointerException)) {
        logger_0.warn_nq59yw$(CoreParametersCLOUD$Companion$fromMap$lambda);
        tmp$_6 = null;
      } else
        throw e;
    }
    return tmp$_6;
  };
  CoreParametersCLOUD$Companion.prototype.toMap_9yj4yv$ = function (parameters) {
    if (parameters === void 0)
      parameters = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    tmp$_0 = new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance(), void 0, (tmp$ = parameters != null ? parameters.user : null) != null ? tmp$.name : null, 'darkTextField');
    tmp$_2 = new CryptoACFormField(SERVER_getInstance().IS_ADMIN, replace(SERVER_getInstance().IS_ADMIN, '_', ' '), InputType$checkBox_getInstance(), void 0, toString((tmp$_1 = parameters != null ? parameters.user : null) != null ? tmp$_1.isAdmin : null), 'darkTextField');
    tmp$_3 = SERVER_getInstance().CRYPTO;
    tmp$_4 = SERVER_getInstance().CRYPTO;
    tmp$_5 = InputType$select_getInstance();
    var $receiver = CryptoType$values();
    var destination = ArrayList_init_0($receiver.length);
    var tmp$_15;
    for (tmp$_15 = 0; tmp$_15 !== $receiver.length; ++tmp$_15) {
      var item = $receiver[tmp$_15];
      destination.add_11rb$(item.toString());
    }
    return listOf([listOf([tmp$_0, tmp$_2, new CryptoACFormField(tmp$_3, tmp$_4, tmp$_5, destination, toString(parameters != null ? parameters.cryptoType : null), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().RM_URL, replace(SERVER_getInstance().RM_URL, '_', ' '), InputType$text_getInstance(), void 0, (tmp$_6 = parameters != null ? parameters.rmCloudInterfaceParameters : null) != null ? tmp$_6.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().RM_PORT, replace(SERVER_getInstance().RM_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString((tmp$_7 = parameters != null ? parameters.rmCloudInterfaceParameters : null) != null ? tmp$_7.port : null), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().MS_URL, replace(SERVER_getInstance().MS_URL, '_', ' '), InputType$text_getInstance(), void 0, (tmp$_8 = parameters != null ? parameters.mmMySQLInterfaceParameters : null) != null ? tmp$_8.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PASSWORD, replace(SERVER_getInstance().MS_PASSWORD, '_', ' '), InputType$password_getInstance(), void 0, (tmp$_9 = parameters != null ? parameters.mmMySQLInterfaceParameters : null) != null ? tmp$_9.password : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PORT, replace(SERVER_getInstance().MS_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString((tmp$_10 = parameters != null ? parameters.mmMySQLInterfaceParameters : null) != null ? tmp$_10.port : null), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().DM_URL, replace(SERVER_getInstance().DM_URL, '_', ' '), InputType$text_getInstance(), void 0, (tmp$_11 = parameters != null ? parameters.dmCloudInterfaceParameters : null) != null ? tmp$_11.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DM_PORT, replace(SERVER_getInstance().DM_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString((tmp$_12 = parameters != null ? parameters.dmCloudInterfaceParameters : null) != null ? tmp$_12.port : null), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().OPA_URL, replace(SERVER_getInstance().OPA_URL, '_', ' '), InputType$text_getInstance(), void 0, (tmp$_13 = parameters != null ? parameters.opaInterfaceParameters : null) != null ? tmp$_13.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().OPA_PORT, replace(SERVER_getInstance().OPA_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString((tmp$_14 = parameters != null ? parameters.opaInterfaceParameters : null) != null ? tmp$_14.port : null), 'darkTextField')])]);
  };
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
  CoreParametersCLOUD.prototype.checkParameters = function () {
    if (!CoreParameters.prototype.checkParameters.call(this)) {
      return false;
    } else {
      return this.rmCloudInterfaceParameters.checkParameters() && this.mmMySQLInterfaceParameters.checkParameters() && this.dmCloudInterfaceParameters.checkParameters() && this.opaInterfaceParameters.checkParameters();
    }
  };
  function CoreParametersCLOUD$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  CoreParametersCLOUD.prototype.update_8dp87x$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, CoreParametersCLOUD)) {
      this.rmCloudInterfaceParameters.update_3asgqy$(updatedParameters.rmCloudInterfaceParameters);
      this.mmMySQLInterfaceParameters.update_f8hg2y$(updatedParameters.mmMySQLInterfaceParameters);
      this.dmCloudInterfaceParameters.update_yb6fw6$(updatedParameters.dmCloudInterfaceParameters);
      this.opaInterfaceParameters.update_3yqp66$(updatedParameters.opaInterfaceParameters);
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_0.error_nq59yw$(CoreParametersCLOUD$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  CoreParametersCLOUD.prototype.obscureSensitiveFields = function () {
    CoreParameters.prototype.obscureSensitiveFields.call(this);
    this.rmCloudInterfaceParameters.obscureSensitiveFields();
    this.mmMySQLInterfaceParameters.obscureSensitiveFields();
    this.dmCloudInterfaceParameters.obscureSensitiveFields();
    this.opaInterfaceParameters.obscureSensitiveFields();
  };
  CoreParametersCLOUD.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
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
    if (!((tmp$_2 = this.rmCloudInterfaceParameters) != null ? tmp$_2.equals(other.rmCloudInterfaceParameters) : null))
      return false;
    if (!((tmp$_3 = this.mmMySQLInterfaceParameters) != null ? tmp$_3.equals(other.mmMySQLInterfaceParameters) : null))
      return false;
    if (!((tmp$_4 = this.dmCloudInterfaceParameters) != null ? tmp$_4.equals(other.dmCloudInterfaceParameters) : null))
      return false;
    if (!((tmp$_5 = this.opaInterfaceParameters) != null ? tmp$_5.equals(other.opaInterfaceParameters) : null))
      return false;
    return true;
  };
  CoreParametersCLOUD.prototype.hashCode = function () {
    var result = this.user.hashCode();
    result = (31 * result | 0) + this.coreType.hashCode() | 0;
    result = (31 * result | 0) + this.cryptoType.hashCode() | 0;
    result = (31 * result | 0) + this.versionNumber | 0;
    result = (31 * result | 0) + this.rmCloudInterfaceParameters.hashCode() | 0;
    result = (31 * result | 0) + this.mmMySQLInterfaceParameters.hashCode() | 0;
    result = (31 * result | 0) + this.dmCloudInterfaceParameters.hashCode() | 0;
    result = (31 * result | 0) + this.opaInterfaceParameters.hashCode() | 0;
    return result;
  };
  function CoreParametersCLOUD$$serializer() {
    this.descriptor_68vvtp$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.CoreParametersCLOUD', this, 8);
    this.descriptor.addElement_ivxn3r$('user', false);
    this.descriptor.addElement_ivxn3r$('coreType', true);
    this.descriptor.addElement_ivxn3r$('cryptoType', false);
    this.descriptor.addElement_ivxn3r$('versionNumber', true);
    this.descriptor.addElement_ivxn3r$('rmCloudInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('mmMySQLInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('dmCloudInterfaceParameters', false);
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
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 4, RMInterfaceCloudParameters$$serializer_getInstance(), value.rmCloudInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 5, MMInterfaceMySQLParameters$$serializer_getInstance(), value.mmMySQLInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 6, DMInterfaceCloudParameters$$serializer_getInstance(), value.dmCloudInterfaceParameters);
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
          local4 = input.decodeSerializableElement_12e8id$(this.descriptor, 4, RMInterfaceCloudParameters$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeSerializableElement_12e8id$(this.descriptor, 5, MMInterfaceMySQLParameters$$serializer_getInstance(), local5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeSerializableElement_12e8id$(this.descriptor, 6, DMInterfaceCloudParameters$$serializer_getInstance(), local6);
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
    return [User$$serializer_getInstance(), new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), CryptoType$$serializer_getInstance(), internal.IntSerializer, RMInterfaceCloudParameters$$serializer_getInstance(), MMInterfaceMySQLParameters$$serializer_getInstance(), DMInterfaceCloudParameters$$serializer_getInstance(), OPAInterfaceParameters$$serializer_getInstance()];
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
  function CoreParametersCLOUD_init(seen1, user, coreType, cryptoType, versionNumber, rmCloudInterfaceParameters, mmMySQLInterfaceParameters, dmCloudInterfaceParameters, opaInterfaceParameters, serializationConstructorMarker) {
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
      throw MissingFieldException_init('rmCloudInterfaceParameters');
    else
      $this.rmCloudInterfaceParameters = rmCloudInterfaceParameters;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('mmMySQLInterfaceParameters');
    else
      $this.mmMySQLInterfaceParameters = mmMySQLInterfaceParameters;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('dmCloudInterfaceParameters');
    else
      $this.dmCloudInterfaceParameters = dmCloudInterfaceParameters;
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
  function CoreParametersMOCK$Companion() {
    CoreParametersMOCK$Companion_instance = this;
  }
  CoreParametersMOCK$Companion.prototype.fromMap = function () {
    return null;
  };
  CoreParametersMOCK$Companion.prototype.toMap = function () {
    return emptyList();
  };
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
  CoreParametersMOCK.prototype.update_8dp87x$ = function (updatedParameters) {
  };
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
  function CoreParametersMQTT(user, coreType, cryptoType, versionNumber, mmMySQLInterfaceParameters, dmMQTTInterfaceParameters) {
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
    this.mmMySQLInterfaceParameters = mmMySQLInterfaceParameters;
    this.dmMQTTInterfaceParameters = dmMQTTInterfaceParameters;
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
  function CoreParametersMQTT$Companion() {
    CoreParametersMQTT$Companion_instance = this;
  }
  function CoreParametersMQTT$Companion$fromMap$lambda() {
    return 'Not all parameters were provided';
  }
  CoreParametersMQTT$Companion.prototype.fromMap_xlh5cu$ = function (parameters) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    try {
      tmp$ = new User(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME)), void 0, void 0, void 0, toBoolean(parameters.get_11rb$(SERVER_getInstance().IS_ADMIN)));
      tmp$_0 = CoreType$RBAC_MQTT_getInstance();
      tmp$_1 = CryptoType$valueOf(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().CRYPTO)));
      tmp$_2 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME));
      tmp$_3 = toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_PORT)));
      tmp$_4 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_URL));
      tmp$_5 = new MMInterfaceMySQLParameters(tmp$_2, ensureNotNull(parameters.get_11rb$(SERVER_getInstance().MS_PASSWORD)), tmp$_3, tmp$_4);
      tmp$_6 = toInt(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_PORT)));
      tmp$_7 = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_URL));
      var $receiver = ensureNotNull(parameters.get_11rb$(SERVER_getInstance().DM_PASSWORD));
      tmp$_8 = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length);
      tmp$_9 = new CoreParametersMQTT(tmp$, tmp$_0, tmp$_1, 1, tmp$_5, new DMInterfaceMQTTParameters(ensureNotNull(parameters.get_11rb$(SERVER_getInstance().USERNAME)), tmp$_8, tmp$_6, tmp$_7));
    } catch (e) {
      if (Kotlin.isType(e, NullPointerException)) {
        logger_1.warn_nq59yw$(CoreParametersMQTT$Companion$fromMap$lambda);
        tmp$_9 = null;
      } else
        throw e;
    }
    return tmp$_9;
  };
  CoreParametersMQTT$Companion.prototype.toMap_huqsyq$ = function (parameters) {
    if (parameters === void 0)
      parameters = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    tmp$_0 = new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance(), void 0, (tmp$ = parameters != null ? parameters.user : null) != null ? tmp$.name : null, 'darkTextField');
    tmp$_2 = new CryptoACFormField(SERVER_getInstance().IS_ADMIN, replace(SERVER_getInstance().IS_ADMIN, '_', ' '), InputType$checkBox_getInstance(), void 0, toString((tmp$_1 = parameters != null ? parameters.user : null) != null ? tmp$_1.isAdmin : null), 'darkTextField');
    tmp$_3 = SERVER_getInstance().CRYPTO;
    tmp$_4 = SERVER_getInstance().CRYPTO;
    tmp$_5 = InputType$select_getInstance();
    var $receiver = CryptoType$values();
    var destination = ArrayList_init_0($receiver.length);
    var tmp$_13;
    for (tmp$_13 = 0; tmp$_13 !== $receiver.length; ++tmp$_13) {
      var item = $receiver[tmp$_13];
      destination.add_11rb$(item.toString());
    }
    return listOf([listOf([tmp$_0, tmp$_2, new CryptoACFormField(tmp$_3, tmp$_4, tmp$_5, destination, toString(parameters != null ? parameters.cryptoType : null), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().DM_URL, 'Broker URL', InputType$text_getInstance(), void 0, (tmp$_6 = parameters != null ? parameters.dmMQTTInterfaceParameters : null) != null ? tmp$_6.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DM_PASSWORD, 'Broker Password', InputType$password_getInstance(), void 0, (tmp$_8 = (tmp$_7 = parameters != null ? parameters.dmMQTTInterfaceParameters : null) != null ? tmp$_7.password : null) != null ? String_0(tmp$_8) : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().DM_PORT, 'Broker Port', InputType$number_getInstance(), void 0, toString((tmp$_9 = parameters != null ? parameters.dmMQTTInterfaceParameters : null) != null ? tmp$_9.port : null), 'darkTextField')]), listOf([new CryptoACFormField(SERVER_getInstance().MS_URL, replace(SERVER_getInstance().MS_URL, '_', ' '), InputType$text_getInstance(), void 0, (tmp$_10 = parameters != null ? parameters.mmMySQLInterfaceParameters : null) != null ? tmp$_10.url : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PASSWORD, replace(SERVER_getInstance().MS_PASSWORD, '_', ' '), InputType$password_getInstance(), void 0, (tmp$_11 = parameters != null ? parameters.mmMySQLInterfaceParameters : null) != null ? tmp$_11.password : null, 'darkTextField'), new CryptoACFormField(SERVER_getInstance().MS_PORT, replace(SERVER_getInstance().MS_PORT, '_', ' '), InputType$number_getInstance(), void 0, toString((tmp$_12 = parameters != null ? parameters.mmMySQLInterfaceParameters : null) != null ? tmp$_12.port : null), 'darkTextField')])]);
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
      return this.mmMySQLInterfaceParameters.checkParameters() && this.dmMQTTInterfaceParameters.checkParameters();
    }
  };
  function CoreParametersMQTT$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  CoreParametersMQTT.prototype.update_8dp87x$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, CoreParametersMQTT)) {
      this.mmMySQLInterfaceParameters.update_f8hg2y$(updatedParameters.mmMySQLInterfaceParameters);
      this.dmMQTTInterfaceParameters.update_yb6fw6$(updatedParameters.dmMQTTInterfaceParameters);
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_1.error_nq59yw$(CoreParametersMQTT$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  CoreParametersMQTT.prototype.obscureSensitiveFields = function () {
    CoreParameters.prototype.obscureSensitiveFields.call(this);
    this.mmMySQLInterfaceParameters.obscureSensitiveFields();
    this.dmMQTTInterfaceParameters.obscureSensitiveFields();
  };
  CoreParametersMQTT.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
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
    if (!((tmp$_2 = this.mmMySQLInterfaceParameters) != null ? tmp$_2.equals(other.mmMySQLInterfaceParameters) : null))
      return false;
    if (!((tmp$_3 = this.dmMQTTInterfaceParameters) != null ? tmp$_3.equals(other.dmMQTTInterfaceParameters) : null))
      return false;
    return true;
  };
  CoreParametersMQTT.prototype.hashCode = function () {
    var result = this.user.hashCode();
    result = (31 * result | 0) + this.coreType.hashCode() | 0;
    result = (31 * result | 0) + this.cryptoType.hashCode() | 0;
    result = (31 * result | 0) + this.versionNumber | 0;
    result = (31 * result | 0) + this.mmMySQLInterfaceParameters.hashCode() | 0;
    result = (31 * result | 0) + this.dmMQTTInterfaceParameters.hashCode() | 0;
    return result;
  };
  function CoreParametersMQTT$$serializer() {
    this.descriptor_8iod1i$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.core.CoreParametersMQTT', this, 6);
    this.descriptor.addElement_ivxn3r$('user', false);
    this.descriptor.addElement_ivxn3r$('coreType', true);
    this.descriptor.addElement_ivxn3r$('cryptoType', false);
    this.descriptor.addElement_ivxn3r$('versionNumber', true);
    this.descriptor.addElement_ivxn3r$('mmMySQLInterfaceParameters', false);
    this.descriptor.addElement_ivxn3r$('dmMQTTInterfaceParameters', false);
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
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 4, MMInterfaceMySQLParameters$$serializer_getInstance(), value.mmMySQLInterfaceParameters);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 5, DMInterfaceMQTTParameters$$serializer_getInstance(), value.dmMQTTInterfaceParameters);
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
          local4 = input.decodeSerializableElement_12e8id$(this.descriptor, 4, MMInterfaceMySQLParameters$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeSerializableElement_12e8id$(this.descriptor, 5, DMInterfaceMQTTParameters$$serializer_getInstance(), local5);
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
    return [User$$serializer_getInstance(), new EnumSerializer('eu.fbk.st.cryptoac.core.CoreType', CoreType$values()), CryptoType$$serializer_getInstance(), internal.IntSerializer, MMInterfaceMySQLParameters$$serializer_getInstance(), DMInterfaceMQTTParameters$$serializer_getInstance()];
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
  function CoreParametersMQTT_init(seen1, user, coreType, cryptoType, versionNumber, mmMySQLInterfaceParameters, dmMQTTInterfaceParameters, serializationConstructorMarker) {
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
      throw MissingFieldException_init('mmMySQLInterfaceParameters');
    else
      $this.mmMySQLInterfaceParameters = mmMySQLInterfaceParameters;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('dmMQTTInterfaceParameters');
    else
      $this.dmMQTTInterfaceParameters = dmMQTTInterfaceParameters;
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
  function ActiveElement$Companion() {
    ActiveElement$Companion_instance = this;
  }
  ActiveElement$Companion.prototype.generateToken_qp1mpu$ = function (length, name, asymEncKeys, asymSigKeys) {
    if (length === void 0)
      length = 20;
    var tmp$, tmp$_0, tmp$_1;
    CryptoACObject$Companion_getInstance().requirePositiveNumber_za3lpa$(length);
    if (equals(name, Constants_getInstance().ADMIN)) {
      tmp$_1 = Constants_getInstance().ADMIN;
    } else {
      var $receiver = ((tmp$ = asymEncKeys != null ? asymEncKeys.private : null) != null ? tmp$ : 'not given') + ((tmp$_0 = asymSigKeys != null ? asymSigKeys.private : null) != null ? tmp$_0 : 'not given');
      tmp$_1 = digest('SHA-256', encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length)).substring(0, length);
    }
    return tmp$_1;
  };
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
  Element$Companion.prototype.generateToken_za3lpa$ = function (length) {
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
    this.token_4xbdxs$_0 = Element$Companion_getInstance().generateToken_za3lpa$();
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
    if (!equals(value.token, Element$Companion_getInstance().generateToken_za3lpa$()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 4))
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
      $this.token_4xbdxs$_0 = Element$Companion_getInstance().generateToken_za3lpa$();
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
    this.token_g1ezfu$_0 = ActiveElement$Companion_getInstance().generateToken_qp1mpu$(void 0, this.name, this.asymEncKeys, this.asymSigKeys);
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
    if (!equals(value.token, ActiveElement$Companion_getInstance().generateToken_qp1mpu$(void 0, this.name, this.asymEncKeys, this.asymSigKeys)) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
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
      $this.token_g1ezfu$_0 = ActiveElement$Companion_getInstance().generateToken_qp1mpu$(void 0, $this.name, $this.asymEncKeys, $this.asymSigKeys);
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
    this.token_vgvmqn$_0 = ActiveElement$Companion_getInstance().generateToken_qp1mpu$(void 0, this.name, this.asymEncKeys, this.asymSigKeys);
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
    if (!equals(value.token, ActiveElement$Companion_getInstance().generateToken_qp1mpu$(void 0, this.name, this.asymEncKeys, this.asymSigKeys)) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 5))
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
      $this.token_vgvmqn$_0 = ActiveElement$Companion_getInstance().generateToken_qp1mpu$(void 0, $this.name, $this.asymEncKeys, $this.asymSigKeys);
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
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.private);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.public);
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
  AsymKeys.prototype.copy_g2dia$ = function (private_0, public_0, type) {
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
  function EncryptedAsymKeys(private_0, public_0, type) {
    EncryptedAsymKeys$Companion_getInstance();
    this.private = private_0;
    this.public = public_0;
    this.type = type;
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
    if (this.type !== other.type)
      return false;
    return true;
  };
  EncryptedAsymKeys.prototype.hashCode = function () {
    var result = contentHashCode(this.private);
    result = (31 * result | 0) + contentHashCode(this.public) | 0;
    result = (31 * result | 0) + this.type.hashCode() | 0;
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
    return this.type;
  };
  EncryptedAsymKeys.prototype.copy_rfefwm$ = function (private_0, public_0, type) {
    return new EncryptedAsymKeys(private_0 === void 0 ? this.private : private_0, public_0 === void 0 ? this.public : public_0, type === void 0 ? this.type : type);
  };
  EncryptedAsymKeys.prototype.toString = function () {
    return 'EncryptedAsymKeys(private=' + Kotlin.toString(this.private) + (', public=' + Kotlin.toString(this.public)) + (', type=' + Kotlin.toString(this.type)) + ')';
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
  function DMInterfaceCloudParameters(port, url) {
    DMInterfaceCloudParameters$Companion_getInstance();
    DMInterfaceParameters.call(this);
    this.port = port;
    this.url = url;
  }
  function DMInterfaceCloudParameters$checkParameters$lambda(this$DMInterfaceCloudParameters) {
    return function () {
      var $receiver = this$DMInterfaceCloudParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function DMInterfaceCloudParameters$checkParameters$lambda_0(this$DMInterfaceCloudParameters) {
    return function () {
      return 'Port number ' + this$DMInterfaceCloudParameters.port + ' is inconsistent';
    };
  }
  DMInterfaceCloudParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_2.warn_nq59yw$(DMInterfaceCloudParameters$checkParameters$lambda(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_2.warn_nq59yw$(DMInterfaceCloudParameters$checkParameters$lambda_0(this));
      return false;
    } else {
      return true;
    }
  };
  function DMInterfaceCloudParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DMInterfaceCloudParameters.prototype.update_yb6fw6$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, DMInterfaceCloudParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_2.error_nq59yw$(DMInterfaceCloudParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  DMInterfaceCloudParameters.prototype.obscureSensitiveFields = function () {
  };
  DMInterfaceCloudParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, DMInterfaceCloudParameters) ? tmp$_0 : throwCCE();
    if (this.port !== other.port)
      return false;
    if (!equals(this.url, other.url))
      return false;
    return true;
  };
  DMInterfaceCloudParameters.prototype.hashCode = function () {
    var result = this.port;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    return result;
  };
  function DMInterfaceCloudParameters$Companion() {
    DMInterfaceCloudParameters$Companion_instance = this;
  }
  DMInterfaceCloudParameters$Companion.prototype.serializer = function () {
    return DMInterfaceCloudParameters$$serializer_getInstance();
  };
  DMInterfaceCloudParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DMInterfaceCloudParameters$Companion_instance = null;
  function DMInterfaceCloudParameters$Companion_getInstance() {
    if (DMInterfaceCloudParameters$Companion_instance === null) {
      new DMInterfaceCloudParameters$Companion();
    }return DMInterfaceCloudParameters$Companion_instance;
  }
  function DMInterfaceCloudParameters$$serializer() {
    this.descriptor_rddo94$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.dm.DMInterfaceCloudParameters', this, 2);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    DMInterfaceCloudParameters$$serializer_instance = this;
  }
  Object.defineProperty(DMInterfaceCloudParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_rddo94$_0;
    }
  });
  DMInterfaceCloudParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  DMInterfaceCloudParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
    return DMInterfaceCloudParameters_init(bitMask0, local0, local1, null);
  };
  DMInterfaceCloudParameters$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.StringSerializer];
  };
  DMInterfaceCloudParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var DMInterfaceCloudParameters$$serializer_instance = null;
  function DMInterfaceCloudParameters$$serializer_getInstance() {
    if (DMInterfaceCloudParameters$$serializer_instance === null) {
      new DMInterfaceCloudParameters$$serializer();
    }return DMInterfaceCloudParameters$$serializer_instance;
  }
  function DMInterfaceCloudParameters_init(seen1, port, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DMInterfaceCloudParameters.prototype);
    $this = DMInterfaceParameters_init(seen1, $this);
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
  DMInterfaceCloudParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMInterfaceCloudParameters',
    interfaces: [DMInterfaceParameters]
  };
  function logger$lambda_3() {
    return Unit;
  }
  var logger_3;
  function DMInterfaceMQTTParameters(username, password, port, url) {
    DMInterfaceMQTTParameters$Companion_getInstance();
    DMInterfaceParameters.call(this);
    this.username = username;
    this.password = password;
    this.port = port;
    this.url = url;
  }
  function DMInterfaceMQTTParameters$checkParameters$lambda(this$DMInterfaceMQTTParameters) {
    return function () {
      var $receiver = this$DMInterfaceMQTTParameters.username;
      return 'Username ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect TEXT regex';
    };
  }
  function DMInterfaceMQTTParameters$checkParameters$lambda_0(this$DMInterfaceMQTTParameters) {
    return function () {
      var $receiver = this$DMInterfaceMQTTParameters.url;
      return 'URL ' + encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length) + ' does not respect URL_OR_IPV4 regex';
    };
  }
  function DMInterfaceMQTTParameters$checkParameters$lambda_1(this$DMInterfaceMQTTParameters) {
    return function () {
      return 'Port number ' + this$DMInterfaceMQTTParameters.port + ' is inconsistent';
    };
  }
  DMInterfaceMQTTParameters.prototype.checkParameters = function () {
    if (!SafeRegex$Companion_getInstance().TEXT.matches_6bul2c$(this.username)) {
      logger_3.warn_nq59yw$(DMInterfaceMQTTParameters$checkParameters$lambda(this));
      return false;
    } else if (!SafeRegex$Companion_getInstance().URL_OR_IPV4.matches_6bul2c$(this.url)) {
      logger_3.warn_nq59yw$(DMInterfaceMQTTParameters$checkParameters$lambda_0(this));
      return false;
    } else if (this.port <= 0 || this.port >= 65535) {
      logger_3.warn_nq59yw$(DMInterfaceMQTTParameters$checkParameters$lambda_1(this));
      return false;
    } else {
      return true;
    }
  };
  function DMInterfaceMQTTParameters$update$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DMInterfaceMQTTParameters.prototype.update_yb6fw6$ = function (updatedParameters) {
    if (Kotlin.isType(updatedParameters, DMInterfaceMQTTParameters)) {
      this.port = updatedParameters.port;
      this.url = updatedParameters.url;
    } else {
      var message = 'Given a non-subclass of ' + Kotlin.getKClassFromExpression(this) + ' for update';
      logger_3.error_nq59yw$(DMInterfaceMQTTParameters$update$lambda(message));
      throw IllegalStateException_init(message);
    }
  };
  DMInterfaceMQTTParameters.prototype.obscureSensitiveFields = function () {
    this.password = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), '***', 0, '***'.length);
  };
  DMInterfaceMQTTParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    if (!DMInterfaceParameters.prototype.equals.call(this, other))
      return false;
    Kotlin.isType(tmp$_0 = other, DMInterfaceMQTTParameters) ? tmp$_0 : throwCCE();
    if (!equals(this.username, other.username))
      return false;
    if (!contentEquals(this.password, other.password))
      return false;
    if (this.port !== other.port)
      return false;
    if (!equals(this.url, other.url))
      return false;
    return true;
  };
  DMInterfaceMQTTParameters.prototype.hashCode = function () {
    var result = DMInterfaceParameters.prototype.hashCode.call(this);
    result = (31 * result | 0) + hashCode(this.username) | 0;
    result = (31 * result | 0) + contentHashCode(this.password) | 0;
    result = (31 * result | 0) + this.port | 0;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    return result;
  };
  function DMInterfaceMQTTParameters$Companion() {
    DMInterfaceMQTTParameters$Companion_instance = this;
  }
  DMInterfaceMQTTParameters$Companion.prototype.serializer = function () {
    return DMInterfaceMQTTParameters$$serializer_getInstance();
  };
  DMInterfaceMQTTParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DMInterfaceMQTTParameters$Companion_instance = null;
  function DMInterfaceMQTTParameters$Companion_getInstance() {
    if (DMInterfaceMQTTParameters$Companion_instance === null) {
      new DMInterfaceMQTTParameters$Companion();
    }return DMInterfaceMQTTParameters$Companion_instance;
  }
  function DMInterfaceMQTTParameters$$serializer() {
    this.descriptor_3ny07z$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.dm.DMInterfaceMQTTParameters', this, 4);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    DMInterfaceMQTTParameters$$serializer_instance = this;
  }
  Object.defineProperty(DMInterfaceMQTTParameters$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_3ny07z$_0;
    }
  });
  DMInterfaceMQTTParameters$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.username);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, internal.ByteArraySerializer, value.password);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.port);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  DMInterfaceMQTTParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return DMInterfaceMQTTParameters_init(bitMask0, local0, local1, local2, local3, null);
  };
  DMInterfaceMQTTParameters$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.ByteArraySerializer, internal.IntSerializer, internal.StringSerializer];
  };
  DMInterfaceMQTTParameters$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var DMInterfaceMQTTParameters$$serializer_instance = null;
  function DMInterfaceMQTTParameters$$serializer_getInstance() {
    if (DMInterfaceMQTTParameters$$serializer_instance === null) {
      new DMInterfaceMQTTParameters$$serializer();
    }return DMInterfaceMQTTParameters$$serializer_instance;
  }
  function DMInterfaceMQTTParameters_init(seen1, username, password, port, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DMInterfaceMQTTParameters.prototype);
    $this = DMInterfaceParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('password');
    else
      $this.password = password;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port = port;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  DMInterfaceMQTTParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMInterfaceMQTTParameters',
    interfaces: [DMInterfaceParameters]
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
    DMInterfaceParameters$Companion_getInstance();
  }
  DMInterfaceParameters.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    return true;
  };
  DMInterfaceParameters.prototype.hashCode = function () {
    return Kotlin.getKClassFromExpression(this).hashCode();
  };
  function DMInterfaceParameters$Companion() {
    DMInterfaceParameters$Companion_instance = this;
  }
  DMInterfaceParameters$Companion.prototype.serializer = function () {
    return new SealedClassSerializer('eu.fbk.st.cryptoac.implementation.dm.DMInterfaceParameters', getKClass(DMInterfaceParameters), [getKClass(DMInterfaceCloudParameters), getKClass(DMInterfaceMQTTParameters)], [DMInterfaceCloudParameters$$serializer_getInstance(), DMInterfaceMQTTParameters$$serializer_getInstance()]);
  };
  DMInterfaceParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [SerializerFactory]
  };
  var DMInterfaceParameters$Companion_instance = null;
  function DMInterfaceParameters$Companion_getInstance() {
    if (DMInterfaceParameters$Companion_instance === null) {
      new DMInterfaceParameters$Companion();
    }return DMInterfaceParameters$Companion_instance;
  }
  function DMInterfaceParameters_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(DMInterfaceParameters.prototype);
    return $this;
  }
  DMInterfaceParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DMInterfaceParameters',
    interfaces: []
  };
  function logger$lambda_4() {
    return Unit;
  }
  var logger_4;
  function MMInterfaceMySQLParameters(username, password, port, url) {
    MMInterfaceMySQLParameters$Companion_getInstance();
    MMInterfaceParameters.call(this);
    this.username = username;
    this.password = password;
    this.port = port;
    this.url = url;
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
  function MMInterfaceMySQLParameters$Companion() {
    MMInterfaceMySQLParameters$Companion_instance = this;
  }
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
  function MMInterfaceMySQLParameters$$serializer() {
    this.descriptor_j4rwij$_0 = new PluginGeneratedSerialDescriptor('eu.fbk.st.cryptoac.implementation.mm.MMInterfaceMySQLParameters', this, 4);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('port', false);
    this.descriptor.addElement_ivxn3r$('url', false);
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
    output.endStructure_24f42q$(this.descriptor);
  };
  MMInterfaceMySQLParameters$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
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
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return MMInterfaceMySQLParameters_init(bitMask0, local0, local1, local2, local3, null);
  };
  MMInterfaceMySQLParameters$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer];
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
  function MMInterfaceMySQLParameters_init(seen1, username, password, port, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MMInterfaceMySQLParameters.prototype);
    $this = MMInterfaceParameters_init(seen1, $this);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('password');
    else
      $this.password = password;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('port');
    else
      $this.port = port;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  MMInterfaceMySQLParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MMInterfaceMySQLParameters',
    interfaces: [MMInterfaceParameters]
  };
  function MMInterfaceParameters() {
    MMInterfaceParameters$Companion_getInstance();
  }
  MMInterfaceParameters.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    return true;
  };
  MMInterfaceParameters.prototype.hashCode = function () {
    return Kotlin.getKClassFromExpression(this).hashCode();
  };
  function MMInterfaceParameters$Companion() {
    MMInterfaceParameters$Companion_instance = this;
  }
  MMInterfaceParameters$Companion.prototype.serializer = function () {
    return new SealedClassSerializer('eu.fbk.st.cryptoac.implementation.mm.MMInterfaceParameters', getKClass(MMInterfaceParameters), [getKClass(MMInterfaceMySQLParameters)], [MMInterfaceMySQLParameters$$serializer_getInstance()]);
  };
  MMInterfaceParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [SerializerFactory]
  };
  var MMInterfaceParameters$Companion_instance = null;
  function MMInterfaceParameters$Companion_getInstance() {
    if (MMInterfaceParameters$Companion_instance === null) {
      new MMInterfaceParameters$Companion();
    }return MMInterfaceParameters$Companion_instance;
  }
  function MMInterfaceParameters_init(seen1, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MMInterfaceParameters.prototype);
    return $this;
  }
  MMInterfaceParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MMInterfaceParameters',
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
    return true;
  };
  OPAInterfaceParameters.prototype.hashCode = function () {
    var result = this.port;
    result = (31 * result | 0) + hashCode(this.url) | 0;
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
  RMInterfaceCloudParameters.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, RMInterfaceCloudParameters) ? tmp$_0 : throwCCE();
    if (this.port !== other.port)
      return false;
    if (!equals(this.url, other.url))
      return false;
    return true;
  };
  RMInterfaceCloudParameters.prototype.hashCode = function () {
    var result = this.port;
    result = (31 * result | 0) + hashCode(this.url) | 0;
    return result;
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
  RMInterfaceParameters.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    return true;
  };
  RMInterfaceParameters.prototype.hashCode = function () {
    return Kotlin.getKClassFromExpression(this).hashCode();
  };
  function RMInterfaceParameters$Companion() {
    RMInterfaceParameters$Companion_instance = this;
  }
  RMInterfaceParameters$Companion.prototype.serializer = function () {
    return new SealedClassSerializer('eu.fbk.st.cryptoac.implementation.rm.RMInterfaceParameters', getKClass(RMInterfaceParameters), [getKClass(RMInterfaceCloudParameters)], [RMInterfaceCloudParameters$$serializer_getInstance()]);
  };
  RMInterfaceParameters$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [SerializerFactory]
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
    return 'not me';
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
      $receiver.attrs.open = this$App.state.backdropIsOpen;
      $receiver.invoke_qk0v40$($module$_material_ui_core.CircularProgress, App$render$lambda$lambda$lambda);
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
  function App$render$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function (backdropIsOpen) {
      this$App.changeBackdropIsOpen_0(backdropIsOpen);
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
    return function (username) {
      this$App.changeUsername_0(username);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_2(this$App) {
    return function (code, severity) {
      this$App.displayAlert_0(code, severity);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.handleChangeBackdropIsOpen = App$render$lambda$lambda$lambda$lambda$lambda(this$App);
      $receiver.handleChangeUserIsLogged = App$render$lambda$lambda$lambda$lambda$lambda_0(this$App);
      $receiver.handleChangeUsername = App$render$lambda$lambda$lambda$lambda$lambda_1(this$App);
      $receiver.handleDisplayAlert = App$render$lambda$lambda$lambda$lambda$lambda_2(this$App);
      $receiver.httpClient = this$App.state.httpClient;
      $receiver.coreType = this$App.state.coreType;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_3(this$App) {
    return function (userHasProfile) {
      this$App.changeUserHasProfile_0(userHasProfile);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_4(this$App) {
    return function (backdropIsOpen) {
      this$App.changeBackdropIsOpen_0(backdropIsOpen);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_5(this$App) {
    return function (userIsLogged) {
      this$App.changeUserIsLogged_0(userIsLogged);
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
    return function (username) {
      this$App.changeUsername_0(username);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_8(this$App) {
    return function (code, severity) {
      this$App.displayAlert_0(code, severity);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_1(this$App) {
    return function ($receiver) {
      $receiver.handleChangeUserHasProfile = App$render$lambda$lambda$lambda$lambda$lambda_3(this$App);
      $receiver.handleChangeBackdropIsOpen = App$render$lambda$lambda$lambda$lambda$lambda_4(this$App);
      $receiver.handleChangeUserIsLogged = App$render$lambda$lambda$lambda$lambda$lambda_5(this$App);
      $receiver.handleChangeUserIsAdmin = App$render$lambda$lambda$lambda$lambda$lambda_6(this$App);
      $receiver.handleChangeUsername = App$render$lambda$lambda$lambda$lambda$lambda_7(this$App);
      $receiver.handleDisplayAlert = App$render$lambda$lambda$lambda$lambda$lambda_8(this$App);
      $receiver.userHasProfile = this$App.state.userHasProfile;
      $receiver.userIsLogged = this$App.state.userIsLogged;
      $receiver.userIsAdmin = this$App.state.userIsAdmin;
      $receiver.httpClient = this$App.state.httpClient;
      $receiver.coreType = this$App.state.coreType;
      $receiver.username = this$App.state.username;
      $receiver.tables = this$App.state.tables;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_1(this$App) {
    return function ($receiver) {
      if (this$App.state.showTradeOffBoard) {
        $receiver.child_30b5ua$(tradeOffBoard(App$render$lambda$lambda$lambda$lambda));
      } else {
        if (!this$App.state.userIsLogged) {
          $receiver.child_30b5ua$(login(App$render$lambda$lambda$lambda$lambda_0(this$App)));
        } else {
          $receiver.child_30b5ua$(content(App$render$lambda$lambda$lambda$lambda_1(this$App)));
        }
      }
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_2(this$App) {
    return function () {
      this$App.toggleShowTradeOffBoard_0();
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_3(this$App) {
    return function (backdropIsOpen) {
      this$App.changeBackdropIsOpen_0(backdropIsOpen);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_4(this$App) {
    return function (topic) {
      this$App.addTableInContent_0(topic);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_5(this$App) {
    return function (coreType) {
      this$App.changeCoreType_0(coreType);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_6(this$App) {
    return function () {
      this$App.toggleSidebarIsCollapsed_0();
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_7(this$App) {
    return function (code, severity) {
      this$App.displayAlert_0(code, severity);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_2(this$App) {
    return function ($receiver) {
      $receiver.handleToggleShowTradeOffBoard = App$render$lambda$lambda$lambda$lambda_2(this$App);
      $receiver.handleChangeBackdropIsOpen = App$render$lambda$lambda$lambda$lambda_3(this$App);
      $receiver.handleAddTableInContent = App$render$lambda$lambda$lambda$lambda_4(this$App);
      $receiver.handleChangeCoreType = App$render$lambda$lambda$lambda$lambda_5(this$App);
      $receiver.handleToggleSidebar = App$render$lambda$lambda$lambda$lambda_6(this$App);
      $receiver.handleDisplayAlert = App$render$lambda$lambda$lambda$lambda_7(this$App);
      $receiver.sidebarIsCollapsed = this$App.state.sidebarIsCollapsed;
      $receiver.showTradeOffBoard = this$App.state.showTradeOffBoard;
      $receiver.userHasProfile = this$App.state.userHasProfile;
      $receiver.userIsLogged = this$App.state.userIsLogged;
      $receiver.userIsAdmin = this$App.state.userIsAdmin;
      $receiver.httpClient = this$App.state.httpClient;
      $receiver.coreType = this$App.state.coreType;
      $receiver.collapsedWidth = get_px(80);
      $receiver.breakpoint = 'md';
      $receiver.image = 'bg3.jpg';
      $receiver.width = get_px(300);
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
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_2 = $receiver_0_0.css;
    set_display($receiver_2, Display.flex);
    set_position($receiver_2, Position.relative);
    set_height($receiver_2, get_pct(100));
    var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_3 = $receiver_0_1.css;
    var tmp$;
    if (this.state.sidebarIsCollapsed) {
      tmp$ = get_px(80);
    } else {
      tmp$ = get_px(300);
    }
    set_marginLeft($receiver_3, tmp$);
    set_width($receiver_3, get_pct(100));
    set_height($receiver_3, get_pct(100));
    $receiver_0_1.invoke_qk0v40$($module$_material_ui_core.Container, App$render$lambda$lambda$lambda_1(this));
    $receiver_0_0.child_30b5ua$($receiver_0_1.create());
    var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_4 = $receiver_0_2.css;
    set_position($receiver_4, Position.fixed);
    set_height($receiver_4, get_pct(100));
    $receiver_0_2.child_30b5ua$(sidebar(App$render$lambda$lambda$lambda_2(this)));
    $receiver_0_0.child_30b5ua$($receiver_0_2.create());
    $receiver.child_30b5ua$($receiver_0_0.create());
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
    $receiver.install_xlxg29$(WebSockets.Feature);
    $receiver.install_xlxg29$(HttpCookies.Companion);
    return Unit;
  }
  App.prototype.init_b4e81d$ = function ($receiver) {
    logger_7.info_nq59yw$(App$init$lambda);
    $receiver.coreType = CoreType$RBAC_CLOUD_getInstance();
    $receiver.sidebarIsCollapsed = false;
    $receiver.showTradeOffBoard = false;
    $receiver.userHasProfile = false;
    $receiver.userIsLogged = false;
    $receiver.backdropIsOpen = false;
    $receiver.userIsAdmin = false;
    $receiver.alertIsOpen = false;
    $receiver.alertMessage = '';
    $receiver.tables = ArrayList_init();
    $receiver.alertSeverity = CryptoACAlertSeverity$SUCCESS_getInstance();
    $receiver.httpClient = HttpClient(App$init$lambda_0);
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
    logger_7.info_nq59yw$(App$displayAlert$lambda(code, severity));
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
    logger_7.info_nq59yw$(App$addTableInContent$lambda(tableName));
    setState(this, App$addTableInContent$lambda_0(tableName));
  };
  function App$toggleSidebarIsCollapsed$lambda(closure$collapse) {
    return function () {
      return "Setting the 'sidebarIsCollapsed' state to " + closure$collapse;
    };
  }
  function App$toggleSidebarIsCollapsed$lambda_0(closure$collapse) {
    return function ($receiver) {
      $receiver.sidebarIsCollapsed = closure$collapse;
      return Unit;
    };
  }
  App.prototype.toggleSidebarIsCollapsed_0 = function () {
    var collapse = !this.state.sidebarIsCollapsed;
    logger_7.info_nq59yw$(App$toggleSidebarIsCollapsed$lambda(collapse));
    setState(this, App$toggleSidebarIsCollapsed$lambda_0(collapse));
  };
  function App$toggleShowTradeOffBoard$lambda(closure$shown) {
    return function () {
      return "Setting the 'showTradeOffBoard' state to " + closure$shown;
    };
  }
  function App$toggleShowTradeOffBoard$lambda_0(closure$shown) {
    return function ($receiver) {
      $receiver.showTradeOffBoard = closure$shown;
      return Unit;
    };
  }
  App.prototype.toggleShowTradeOffBoard_0 = function () {
    var shown = !this.state.showTradeOffBoard;
    logger_7.info_nq59yw$(App$toggleShowTradeOffBoard$lambda(shown));
    setState(this, App$toggleShowTradeOffBoard$lambda_0(shown));
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
    logger_7.info_nq59yw$(App$changeBackdropIsOpen$lambda(newBackdropIsOpen));
    setState(this, App$changeBackdropIsOpen$lambda_0(newBackdropIsOpen));
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
    $receiver.child_up9nw1$(getKClass(App), main$lambda$lambda);
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
  function CryptoACCheckbox() {
    RComponent_init(this);
  }
  function CryptoACCheckbox$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACCheckbox) {
    return function ($receiver) {
      $receiver.changedByUser = true;
      $receiver.value = equals(this$CryptoACCheckbox.state.value, 'true_' + this$CryptoACCheckbox.props.label) ? 'false_' + this$CryptoACCheckbox.props.label : 'true_' + this$CryptoACCheckbox.props.label;
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
      $receiver.checked = toBoolean(split(this$CryptoACCheckbox.state.value, ['_']).get_za3lpa$(0));
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
      state.value = props.defaultValue + '_' + props.label;
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
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function styledDiv$lambda_0(it) {
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
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField, this$CryptoACForm) {
    return function ($receiver) {
      var tmp$;
      var $receiver_0 = closure$formField.defaultValue;
      if ($receiver_0 == null || isBlank($receiver_0) || equals(closure$formField.defaultValue, 'null')) {
        tmp$ = 'false';
      } else {
        tmp$ = closure$formField.defaultValue;
      }
      $receiver.defaultValue = tmp$;
      $receiver.name = closure$formField.name;
      $receiver.row = true;
      var $receiver_1 = ensureNotNull(closure$formField.options);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1 = destination.add_11rb$;
        var tmp$_2, tmp$_3;
        if ((tmp$_2 = this$CryptoACForm.props.method) != null ? tmp$_2.equals(HttpMethod.Companion.Delete) : null) {
          tmp$_3 = 'secondary';
        } else {
          tmp$_3 = 'primary';
        }
        tmp$_1.call(destination, new CryptoACRadioOption(item, item, tmp$_3));
      }
      $receiver.options = destination;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField) {
    return function ($receiver) {
      if (closure$formField.className != null) {
        $receiver.className = closure$formField.className;
      }$receiver.variant = 'standard';
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField) {
    return function ($receiver) {
      $receiver.id = closure$formField.label + '-label';
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField));
      $receiver.unaryPlus_pdl1vz$(closure$formField.label);
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField) {
    return function ($receiver) {
      var tmp$;
      $receiver.name = closure$formField.label;
      $receiver.autoWidth = true;
      var $receiver_0 = closure$formField.defaultValue;
      if ($receiver_0 == null || isBlank($receiver_0) || equals(closure$formField.defaultValue, 'null')) {
        tmp$ = 'Select';
      } else {
        tmp$ = closure$formField.defaultValue;
      }
      $receiver.defaultValue = tmp$;
      $receiver.label = closure$formField.label;
      $receiver.labelId = closure$formField.label + '-label';
      $receiver.id = closure$formField.label;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.value = 'Select';
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$('Select');
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.value = closure$it;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it));
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField));
      $receiver.invoke_qk0v40$($module$_material_ui_core.MenuItem, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      var $receiver_0 = ensureNotNull(closure$formField.options);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        $receiver.invoke_qk0v40$($module$_material_ui_core.MenuItem, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(item));
        tmp$_0.call(destination, Unit);
      }
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField));
      $receiver.invoke_qk0v40$($module$_material_ui_core.InputLabel, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Select, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField));
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField, this$CryptoACForm) {
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
      $receiver.variant = 'filled';
      if ((tmp$_0 = this$CryptoACForm.props.method) != null ? tmp$_0.equals(HttpMethod.Companion.Delete) : null) {
        tmp$_1 = 'secondary';
      } else {
        tmp$_1 = 'primary';
      }
      $receiver.color = tmp$_1;
      return Unit;
    };
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField, this$) {
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
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.color = 'primary';
    $receiver.component = 'label';
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaCloudUploadAlt, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
      $receiver.child_30b5ua$(ensureNotNull(createElement(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3)));
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
          var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
          var closure$formField_0 = closure$formField;
          var $receiver_1 = $receiver_0.css;
          set_marginBottom($receiver_1, get_px(10));
          set_marginTop($receiver_1, get_px(10));
          set_marginRight($receiver_1, get_px(20));
          $receiver_0.invoke_qk0v40$($module$_material_ui_core.FormControl, CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$formField_0));
          $receiver.child_30b5ua$($receiver_0.create());
          break;
        case 'text':
        case 'password':
        case 'number':
          var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
          var closure$formField_1 = closure$formField;
          var this$CryptoACForm_0 = this$CryptoACForm;
          var $receiver_2 = $receiver_0_0.css;
          set_marginBottom($receiver_2, get_px(10));
          set_marginTop($receiver_2, get_px(10));
          set_marginRight($receiver_2, get_px(20));
          $receiver_0_0.child_30b5ua$(cryptoACTextField(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$formField_1, this$CryptoACForm_0)));
          $receiver.child_30b5ua$($receiver_0_0.create());
          break;
        case 'checkBox':
          var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
          var closure$formField_2 = closure$formField;
          var $receiver_3 = $receiver_0_1.css;
          set_marginBottom($receiver_3, get_px(10));
          set_marginTop($receiver_3, get_px(10));
          set_marginRight($receiver_3, get_px(20));
          $receiver_0_1.child_30b5ua$(cryptoACCheckbox(CryptoACForm$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$formField_2, $receiver_0_1)));
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
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
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
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
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
      if (!equals(this$CryptoACRadioGroup.props.onChange, undefined)) {
        this$CryptoACRadioGroup.props.onChange(event);
      }setState(this$CryptoACRadioGroup, CryptoACRadioGroup$render$lambda$lambda$lambda$lambda(event));
      return Unit;
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
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it) {
    return function ($receiver) {
      $receiver.disabled = this$CryptoACRadioGroup.props.disabled;
      $receiver.color = closure$it.color;
      $receiver.checked = equals(this$CryptoACRadioGroup.state.value, closure$it.name);
      $receiver.size = 'small';
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Radio, CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda$lambda_0(closure$it, this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.label = closure$it.label;
      $receiver.value = closure$it.name;
      $receiver.control = ensureNotNull(createElement(CryptoACRadioGroup$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACRadioGroup, closure$it)));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda$lambda$lambda_0(closure$it, this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACRadioGroup$render$lambda$lambda$lambda$lambda_0(closure$it, this$CryptoACRadioGroup));
      return Unit;
    };
  }
  function CryptoACRadioGroup$render$lambda(this$CryptoACRadioGroup) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CryptoACRadioGroup$render$lambda$lambda(this$CryptoACRadioGroup));
      var $receiver_0 = this$CryptoACRadioGroup.props.options;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$CryptoACRadioGroup_0 = this$CryptoACRadioGroup;
        $receiver.invoke_qk0v40$($module$_material_ui_core.FormControlLabel, CryptoACRadioGroup$render$lambda$lambda$lambda_0(element, this$CryptoACRadioGroup_0));
      }
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
  function styledDiv$lambda_1(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf_0('class', closure$classes), it);
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
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
      var this$CryptoACTable_0 = this$CryptoACTable;
      var $receiver_1 = $receiver_0.css;
      set_marginLeft($receiver_1, LinearDimension.Companion.auto);
      set_marginRight($receiver_1, get_px(0));
      if (!equals(this$CryptoACTable_0.props.onClose, undefined)) {
        var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
        var $receiver_2 = $receiver_0_0.css;
        set_marginLeft($receiver_2, get_px(5));
        set_float($receiver_2, Float.left);
        $receiver_0_0.invoke_qk0v40$($module$_material_ui_core.Tooltip, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda(this$CryptoACTable_0));
        $receiver_0.child_30b5ua$($receiver_0_0.create());
      }var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
      var $receiver_3 = $receiver_0_1.css;
      set_marginLeft($receiver_3, get_px(5));
      set_float($receiver_3, Float.left);
      $receiver_0_1.invoke_qk0v40$($module$_material_ui_core.Tooltip, CryptoACTable$render$lambda$lambda$lambda$lambda$lambda_0(this$CryptoACTable_0));
      $receiver_0.child_30b5ua$($receiver_0_1.create());
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
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
        var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
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
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_1);
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
  function styledDiv$lambda_2(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function post$lambda($receiver) {
    return Unit;
  }
  function patch$lambda($receiver) {
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
  }
  function Content$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.variant = 'h6';
    $receiver.id = 'editProfile';
    $receiver.component = 'div';
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.color = 'primary';
    $receiver.component = 'label';
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaCloudUploadAlt, Content$render$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda() {
    return 'Received upload configuration file event';
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Content) {
    return function (event) {
      var tmp$, tmp$_0;
      logger_9.info_nq59yw$(Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      tmp$_0 = ensureNotNull(ensureNotNull((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).files)[0]);
      this$Content.parseProfileFile_0(tmp$_0);
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda_0(this$Content) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Content$render$lambda$lambda$lambda$lambda$lambda);
      $receiver.child_30b5ua$(ensureNotNull(createElement(Content$render$lambda$lambda$lambda$lambda$lambda_0)));
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda_0(null, null, null, null, null));
      var this$Content_0 = this$Content;
      var $receiver_1 = $receiver_0.attrs;
      $receiver_1.type = InputType.file;
      $receiver_1.accept = '.json';
      set_hidden($receiver_1, true);
      set_onChangeFunction($receiver_1, Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Content_0));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Content) {
    return function ($receiver) {
      if (!this$Content.state.editProfileFormIsOpen) {
        $receiver.invoke_qk0v40$($module$react_icons_fa.FaChevronDown, Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      } else {
        $receiver.invoke_qk0v40$($module$react_icons_fa.FaChevronUp, Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      }
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.editProfileFormIsOpen = !$receiver.editProfileFormIsOpen;
    return Unit;
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Content) {
    return function (it) {
      setState(this$Content, Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Content) {
    return function ($receiver) {
      $receiver.color = 'primary';
      $receiver.component = 'label';
      $receiver.size = 'small';
      $receiver.children = ensureNotNull(createElement(Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Content)));
      $receiver.onClick = Content$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Content);
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda_1(this$Content) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Content$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Content));
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda(this$Content) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Content$render$lambda$lambda$lambda$lambda);
      $receiver.unaryPlus_pdl1vz$('Edit or Upload Profile');
      $receiver.invoke_qk0v40$($module$_material_ui_core.IconButton, Content$render$lambda$lambda$lambda$lambda_0(this$Content));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_2);
      var this$Content_0 = this$Content;
      var $receiver_1 = $receiver_0.css;
      set_display($receiver_1, Display.inline);
      set_float($receiver_1, Float.right);
      set_marginTop($receiver_1, get_px(7));
      set_marginRight($receiver_1, get_px(10));
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.IconButton, Content$render$lambda$lambda$lambda$lambda$lambda_1(this$Content_0));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Content) {
    return function (method, endpoint, values, f) {
      this$Content.submitEditProfileForm_0(method, endpoint, values);
      return Unit;
    };
  }
  function Content$render$lambda$lambda$lambda$lambda_1(this$Content, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var this$Content_0 = this$Content;
      $receiver_0.attrs;
      var tmp$;
      $receiver.handleChangeBackdropIsOpen = this$Content_0.props.handleChangeBackdropIsOpen;
      $receiver.handleDisplayCryptoACAlert = this$Content_0.props.handleDisplayAlert;
      $receiver.handleSubmitEvent = Content$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Content_0);
      if (this$Content_0.props.userHasProfile) {
        tmp$ = HttpMethod.Companion.Patch;
      } else {
        tmp$ = HttpMethod.Companion.Post;
      }
      $receiver.method = tmp$;
      $receiver.cryptoACFormFields = this$Content_0.state.cryptoACFormFields;
      $receiver.submitButtonText = 'Edit Profile';
      $receiver.coreType = this$Content_0.props.coreType;
      $receiver.endpoint = API_getInstance().PROFILES;
      return Unit;
    };
  }
  function Content$render$lambda$lambda(this$Content) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Typography, Content$render$lambda$lambda$lambda(this$Content));
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_2);
      var this$Content_0 = this$Content;
      var $receiver_1 = $receiver_0.css;
      set_marginTop($receiver_1, get_px(10));
      set_marginBottom($receiver_1, get_px(10));
      set_marginRight($receiver_1, get_px(10));
      set_marginLeft($receiver_1, get_px(30));
      if (!this$Content_0.state.editProfileFormIsOpen) {
        set_display($receiver_1, Display.none);
      }$receiver_0.child_30b5ua$(cryptoACForm(Content$render$lambda$lambda$lambda$lambda_1(this$Content_0, $receiver_0)));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Content$render$lambda(this$Content) {
    return function ($receiver) {
      $receiver.handleChangeBackdropIsOpen = this$Content.props.handleChangeBackdropIsOpen;
      $receiver.handleDisplayAlert = this$Content.props.handleDisplayAlert;
      $receiver.userIsAdmin = this$Content.props.userIsAdmin;
      $receiver.httpClient = this$Content.props.httpClient;
      $receiver.coreType = this$Content.props.coreType;
      return Unit;
    };
  }
  function Content$render$lambda_0(this$Content) {
    return function ($receiver) {
      $receiver.handleChangeBackdropIsOpen = this$Content.props.handleChangeBackdropIsOpen;
      $receiver.handleDisplayAlert = this$Content.props.handleDisplayAlert;
      $receiver.userIsAdmin = this$Content.props.userIsAdmin;
      $receiver.httpClient = this$Content.props.httpClient;
      $receiver.coreType = this$Content.props.coreType;
      $receiver.topics = this$Content.props.tables;
      return Unit;
    };
  }
  Content.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_2);
    var $receiver_1 = $receiver_0.css;
    set_textAlign($receiver_1, TextAlign.center);
    set_marginTop($receiver_1, get_px(10));
    set_paddingBottom($receiver_1, get_px(10));
    $receiver_0.invoke_qk0v40$($module$_material_ui_core.Paper, Content$render$lambda$lambda(this));
    $receiver.child_30b5ua$($receiver_0.create());
    if (this.props.userHasProfile) {
      switch (this.props.coreType.name) {
        case 'RBAC_CLOUD':
          $receiver.child_30b5ua$(rbacCLOUDContent(Content$render$lambda(this)));
          break;
        case 'RBAC_MQTT':
          $receiver.child_30b5ua$(rbacMQTTContent(Content$render$lambda_0(this)));
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
  Content.prototype.init_b4e81d$ = function ($receiver) {
    logger_9.info_nq59yw$(Content$init$lambda);
    $receiver.editProfileFormIsOpen = true;
    $receiver.cryptoACFormFields = emptyList();
    launch(MainScope(), void 0, void 0, Content$init$lambda_0(this));
  };
  function Content$submitEditProfileForm$lambda(closure$method, closure$endpoint) {
    return function () {
      return 'Submitting CryptoAC edit profile form, method ' + closure$method + ', endpoint ' + closure$endpoint;
    };
  }
  function Content$submitEditProfileForm$lambda_0(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function Content$submitEditProfileForm$lambda_1(closure$method) {
    return function () {
      return 'HTTP Method of edit profile form is neither Post nor Patch (it is ' + closure$method + ')';
    };
  }
  function Content$submitEditProfileForm$lambda_2() {
    return 'Not all fields of the edit profile form were filled';
  }
  function Content$submitEditProfileForm$lambda$lambda(closure$parameters) {
    return function ($receiver) {
      contentType($receiver, ContentType.Application.Json);
      $receiver.body = closure$parameters;
      return Unit;
    };
  }
  function Content$submitEditProfileForm$lambda$lambda_0(closure$parameters) {
    return function ($receiver) {
      contentType($receiver, ContentType.Application.Json);
      $receiver.body = closure$parameters;
      return Unit;
    };
  }
  function Content$submitEditProfileForm$lambda$lambda_1(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Content$submitEditProfileForm$lambda$lambda_2($receiver) {
    $receiver.editProfileFormIsOpen = false;
    return Unit;
  }
  function Content$submitEditProfileForm$lambda$lambda_3(closure$status, closure$code) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$code;
    };
  }
  function Content$submitEditProfileForm$lambda$lambda_4($receiver) {
    $receiver.editProfileFormIsOpen = true;
    return Unit;
  }
  function Content$submitEditProfileForm$lambda$lambda_5(closure$e) {
    return function () {
      return 'Error during edit profile (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function Coroutine$Content$submitEditProfileForm$lambda(this$Content_0, closure$method_0, closure$endpoint_0, closure$parameters_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 23;
    this.local$this$Content = this$Content_0;
    this.local$closure$method = closure$method_0;
    this.local$closure$endpoint = closure$endpoint_0;
    this.local$closure$parameters = closure$parameters_0;
    this.local$tmp$ = void 0;
    this.local$response_0 = void 0;
    this.local$response = void 0;
    this.local$response_1 = void 0;
  }
  Coroutine$Content$submitEditProfileForm$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Content$submitEditProfileForm$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Content$submitEditProfileForm$lambda.prototype.constructor = Coroutine$Content$submitEditProfileForm$lambda;
  Coroutine$Content$submitEditProfileForm$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 20;
            this.local$this$Content.props.handleChangeBackdropIsOpen(true);
            if (this.local$closure$method != null ? this.local$closure$method.equals(HttpMethod.Companion.Post) : null) {
              var $receiver_0 = this.local$this$Content.props.httpClient;
              var urlString = this.local$closure$endpoint;
              var block = Content$submitEditProfileForm$lambda$lambda(this.local$closure$parameters);
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
              var $receiver_0_0 = this.local$this$Content.props.httpClient;
              var urlString_0 = this.local$closure$endpoint;
              var block_0 = Content$submitEditProfileForm$lambda$lambda_0(this.local$closure$parameters);
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
            this.local$tmp$ = this.result_0;
            this.state_0 = 17;
            continue;
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
            this.exceptionState_0 = 20;
            this.finallyPath_0 = [11];
            this.state_0 = 13;
            continue;
          case 11:
            this.state_0 = 15;
            continue;
          case 12:
            this.finallyPath_0 = [20];
            this.state_0 = 13;
            continue;
          case 13:
            this.exceptionState_0 = 20;
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
            this.local$tmp$ = this.result_0;
            this.state_0 = 17;
            continue;
          case 17:
            this.local$response_1 = this.local$tmp$;
            var tmp$_1;
            var tmp$_2 = this.local$response_1.call;
            var typeInfo$result_0_1;
            typeInfo$break: do {
              try {
                typeInfo$result_0_1 = typeInfoImpl(reflect.JsType, getKClass(OutcomeCode), createKType(getKClass(OutcomeCode), [], false));
              } catch (__1) {
                typeInfo$result_0_1 = typeInfoImpl(reflect.JsType, getKClass(OutcomeCode), null);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 18;
            this.result_0 = tmp$_2.receive_qi9ur9$(typeInfo$result_0_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 18:
            this.result_0 = Kotlin.isType(tmp$_1 = this.result_0, OutcomeCode) ? tmp$_1 : throwCCE();
            var code = this.result_0;
            var status = this.local$response_1.status;
            this.local$this$Content.props.handleChangeBackdropIsOpen(false);
            if (status != null ? status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_9.info_nq59yw$(Content$submitEditProfileForm$lambda$lambda_1(status, code));
              this.local$this$Content.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance());
              this.local$this$Content.props.handleChangeUserIsAdmin(this.local$closure$parameters.user.isAdmin);
              this.local$this$Content.props.handleChangeUsername(this.local$closure$parameters.user.name);
              this.local$this$Content.props.handleChangeUserHasProfile(true);
              return setState(this.local$this$Content, Content$submitEditProfileForm$lambda$lambda_2), Unit;
            } else {
              logger_9.warn_nq59yw$(Content$submitEditProfileForm$lambda$lambda_3(status, code));
              this.local$this$Content.props.handleDisplayAlert(code, CryptoACAlertSeverity$ERROR_getInstance());
              this.local$this$Content.props.handleChangeUserHasProfile(false);
              this.local$this$Content.props.handleChangeUserIsAdmin(false);
              this.local$this$Content.props.handleChangeUsername(null);
              return setState(this.local$this$Content, Content$submitEditProfileForm$lambda$lambda_4), Unit;
            }

          case 19:
            this.exceptionState_0 = 23;
            this.state_0 = 22;
            continue;
          case 20:
            this.exceptionState_0 = 23;
            var e = this.exception_0;
            if (Kotlin.isType(e, Error_0)) {
              logger_9.error_nq59yw$(Content$submitEditProfileForm$lambda$lambda_5(e));
              console.log(e);
              return this.local$this$Content.props.handleDisplayAlert(OutcomeCode$CODE_047_UNEXPECTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
            } else {
              throw e;
            }

          case 21:
            this.state_0 = 22;
            continue;
          case 22:
            return;
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
  function Content$submitEditProfileForm$lambda_3(this$Content_0, closure$method_0, closure$endpoint_0, closure$parameters_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Content$submitEditProfileForm$lambda(this$Content_0, closure$method_0, closure$endpoint_0, closure$parameters_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Content.prototype.submitEditProfileForm_0 = function (method, endpoint, values) {
    var tmp$;
    logger_9.info_nq59yw$(Content$submitEditProfileForm$lambda(method, endpoint));
    switch (this.props.coreType.name) {
      case 'RBAC_CLOUD':
        tmp$ = CoreParametersCLOUD$Companion_getInstance().fromMap_xlh5cu$(values);
        break;
      case 'RBAC_MQTT':
        tmp$ = CoreParametersMQTT$Companion_getInstance().fromMap_xlh5cu$(values);
        break;
      case 'RBAC_MOCK':
        if (development) {
          tmp$ = CoreParametersMOCK$Companion_getInstance().fromMap();
        } else {
          var message = 'Using MOCK core when not in development mode';
          logger_9.error_nq59yw$(Content$submitEditProfileForm$lambda_0(message));
          throw IllegalStateException_init(message);
        }

        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var parameters = tmp$;
    if (!(method != null ? method.equals(HttpMethod.Companion.Post) : null) && !(method != null ? method.equals(HttpMethod.Companion.Patch) : null)) {
      logger_9.warn_nq59yw$(Content$submitEditProfileForm$lambda_1(method));
      this.props.handleDisplayAlert(OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
    }if (parameters == null) {
      logger_9.warn_nq59yw$(Content$submitEditProfileForm$lambda_2);
      this.props.handleDisplayAlert(OutcomeCode$CODE_019_MISSING_PARAMETERS_getInstance(), CryptoACAlertSeverity$WARNING_getInstance());
    } else {
      launch(MainScope(), void 0, void 0, Content$submitEditProfileForm$lambda_3(this, method, endpoint, parameters));
    }
  };
  function Content$parseProfileFile$lambda$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function Content$parseProfileFile$lambda$lambda_0($receiver) {
    $receiver.editProfileFormIsOpen = true;
    return Unit;
  }
  function Content$parseProfileFile$lambda$lambda_1() {
    return 'Malformed .json profile file';
  }
  function Content$parseProfileFile$lambda$lambda_2(closure$e) {
    return function () {
      return closure$e;
    };
  }
  function Content$parseProfileFile$lambda$lambda_3(closure$e) {
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
            tmp$ = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(CoreParametersCLOUD), [], false)), KSerializer) ? tmp$_0 : throwCCE(), fileContent);
            break;
          case 'RBAC_MQTT':
            var $receiver_0 = Json.Default;
            var tmp$_1;
            tmp$ = $receiver_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer($receiver_0.serializersModule, createKType(getKClass(CoreParametersMQTT), [], false)), KSerializer) ? tmp$_1 : throwCCE(), fileContent);
            break;
          case 'RBAC_MOCK':
            if (development) {
              var $receiver_1 = Json.Default;
              var tmp$_2;
              tmp$ = $receiver_1.decodeFromString_awif5v$(Kotlin.isType(tmp$_2 = serializer($receiver_1.serializersModule, createKType(getKClass(CoreParametersMOCK), [], false)), KSerializer) ? tmp$_2 : throwCCE(), fileContent);
            } else {
              var message = 'Using MOCK core when not in development mode';
              logger_9.error_nq59yw$(Content$parseProfileFile$lambda$lambda(message));
              throw IllegalStateException_init(message);
            }

            break;
          default:tmp$ = Kotlin.noWhenBranchMatched();
            break;
        }
        var parameters = tmp$;
        setState(this$Content, Content$parseProfileFile$lambda$lambda_0);
        this$Content.getFieldsFromParameters_0(parameters);
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          if (e.name == 'JsonDecodingException') {
            logger_9.warn_nq59yw$(Content$parseProfileFile$lambda$lambda_1);
            logger_9.warn_nq59yw$(Content$parseProfileFile$lambda$lambda_2(e));
            this$Content.props.handleDisplayAlert(OutcomeCode$CODE_039_MALFORMED_PROFILE_FILE_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
          } else {
            logger_9.error_nq59yw$(Content$parseProfileFile$lambda$lambda_3(e));
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
  function Content$getFieldsFromParameters$lambda$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function Content$getFieldsFromParameters$lambda_0(this$Content, closure$params) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      switch (this$Content.props.coreType.name) {
        case 'RBAC_CLOUD':
          tmp$_1 = CoreParametersCLOUD$Companion_getInstance().toMap_9yj4yv$(closure$params == null ? null : Kotlin.isType(tmp$ = closure$params, CoreParametersCLOUD) ? tmp$ : throwCCE());
          break;
        case 'RBAC_MQTT':
          tmp$_1 = CoreParametersMQTT$Companion_getInstance().toMap_huqsyq$(closure$params == null ? null : Kotlin.isType(tmp$_0 = closure$params, CoreParametersMQTT) ? tmp$_0 : throwCCE());
          break;
        case 'RBAC_MOCK':
          if (development) {
            tmp$_1 = CoreParametersMOCK$Companion_getInstance().toMap();
          } else {
            var message = 'Using MOCK core when not in development mode';
            logger_9.error_nq59yw$(Content$getFieldsFromParameters$lambda$lambda(message));
            throw IllegalStateException_init(message);
          }

          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.cryptoACFormFields = tmp$_1;
      return Unit;
    };
  }
  Content.prototype.getFieldsFromParameters_0 = function (params) {
    if (params === void 0)
      params = null;
    logger_9.info_nq59yw$(Content$getFieldsFromParameters$lambda);
    setState(this, Content$getFieldsFromParameters$lambda_0(this, params));
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
  function Content$getProfileFromProxy$lambda_1(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function Content$getProfileFromProxy$lambda_2(this$Content, closure$loggedUserCoreParameters) {
    return function ($receiver) {
      this$Content.props.handleChangeUserHasProfile(true);
      this$Content.props.handleChangeUserIsAdmin(closure$loggedUserCoreParameters.user.isAdmin);
      this$Content.props.handleChangeUsername(closure$loggedUserCoreParameters.user.name);
      $receiver.editProfileFormIsOpen = false;
      return Unit;
    };
  }
  function Content$getProfileFromProxy$lambda_3(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', code is ' + closure$outcomeCode;
    };
  }
  function Content$getProfileFromProxy$lambda_4(this$Content) {
    return function ($receiver) {
      this$Content.props.handleChangeUserHasProfile(false);
      this$Content.props.handleChangeUserIsAdmin(false);
      this$Content.props.handleChangeUsername(null);
      $receiver.editProfileFormIsOpen = true;
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
                  this.state_0 = 14;
                  this.result_0 = readText(httpResponse, void 0, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                case 'RBAC_MQTT':
                  this.local$tmp$_0 = Json.Default;
                  this.state_0 = 13;
                  this.result_0 = readText(httpResponse, void 0, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                case 'RBAC_MOCK':
                  if (development) {
                    this.local$tmp$_1 = Json.Default;
                    this.state_0 = 11;
                    this.result_0 = readText(httpResponse, void 0, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  } else {
                    var message = 'Using MOCK core when not in development mode';
                    logger_9.error_nq59yw$(Content$getProfileFromProxy$lambda_1(message));
                    throw IllegalStateException_init(message);
                  }

                default:this.local$tmp$_2 = Kotlin.noWhenBranchMatched();
                  this.state_0 = 15;
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
            logger_9.warn_nq59yw$(Content$getProfileFromProxy$lambda_3(this.local$status, outcomeCode));
            this.$this.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance());
            setState(this.$this, Content$getProfileFromProxy$lambda_4(this.$this));
            this.$this.getFieldsFromParameters_0();
            this.state_0 = 16;
            continue;
          case 11:
            var string = this.result_0;
            var tmp$_0;
            this.local$tmp$_2 = this.local$tmp$_1.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer(this.local$tmp$_1.serializersModule, createKType(getKClass(CoreParametersMOCK), [], false)), KSerializer) ? tmp$_0 : throwCCE(), string);
            this.state_0 = 12;
            continue;
          case 12:
            this.state_0 = 15;
            continue;
          case 13:
            var string_0 = this.result_0;
            var tmp$_1;
            this.local$tmp$_2 = this.local$tmp$_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer(this.local$tmp$_0.serializersModule, createKType(getKClass(CoreParametersMQTT), [], false)), KSerializer) ? tmp$_1 : throwCCE(), string_0);
            this.state_0 = 15;
            continue;
          case 14:
            var string_1 = this.result_0;
            var tmp$_2;
            this.local$tmp$_2 = this.local$tmp$.decodeFromString_awif5v$(Kotlin.isType(tmp$_2 = serializer(this.local$tmp$.serializersModule, createKType(getKClass(CoreParametersCLOUD), [], false)), KSerializer) ? tmp$_2 : throwCCE(), string_1);
            this.state_0 = 15;
            continue;
          case 15:
            var loggedUserCoreParameters = this.local$tmp$_2;
            setState(this.$this, Content$getProfileFromProxy$lambda_2(this.$this, loggedUserCoreParameters));
            this.$this.getFieldsFromParameters_0(loggedUserCoreParameters);
            this.state_0 = 16;
            continue;
          case 16:
            return;
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
  function content$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function content$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Content), content$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function content(handler) {
    return ensureNotNull(createElement(content$lambda(handler)));
  }
  function styledDiv$lambda_3(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledImg$lambda(closure$alt, closure$src) {
    return function (it) {
      return new IMG_init(attributesMapOf_1(['alt', closure$alt, 'src', closure$src]), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function post$lambda_0($receiver) {
    return Unit;
  }
  function logger$lambda_10() {
    return Unit;
  }
  var logger_10;
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
    $receiver.attrs_37755u$(Login$render$lambda$lambda$lambda$lambda);
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
      $receiver.handleChangeBackdropIsOpen = this$Login_0.props.handleChangeBackdropIsOpen;
      $receiver.handleDisplayCryptoACAlert = this$Login_0.props.handleDisplayAlert;
      $receiver.submitButtonText = 'Login';
      $receiver.method = HttpMethod.Companion.Post;
      $receiver.endpoint = API_getInstance().LOGIN;
      $receiver.handleSubmitEvent = Login$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Login_0);
      $receiver.cryptoACFormFields = listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance(), void 0, void 0, 'darkTextField')));
      return Unit;
    };
  }
  function Login$render$lambda$lambda(this$Login) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$($module$_material_ui_core.Typography, Login$render$lambda$lambda$lambda);
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_3);
      var this$Login_0 = this$Login;
      var $receiver_1 = $receiver_0.css;
      set_marginLeft($receiver_1, get_pct(25));
      set_marginRight($receiver_1, get_pct(25));
      $receiver_0.child_30b5ua$(cryptoACForm(Login$render$lambda$lambda$lambda$lambda_0(this$Login_0, $receiver_0)));
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Login$render$lambda$lambda$lambda$lambda_1(closure$message) {
    return function () {
      return closure$message;
    };
  }
  Login.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_3);
    var $receiver_1 = $receiver_0.css;
    set_textAlign($receiver_1, TextAlign.center);
    set_marginTop($receiver_1, get_px(10));
    set_paddingBottom($receiver_1, get_px(10));
    $receiver_0.invoke_qk0v40$($module$_material_ui_core.Paper, Login$render$lambda$lambda(this));
    $receiver.child_30b5ua$($receiver_0.create());
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
      case 'RBAC_MOCK':
        if (development) {
          tmp$ = 'background_mock.jpg';
        } else {
          var message = 'Using MOCK core when not in development mode';
          logger_10.error_nq59yw$(Login$render$lambda$lambda$lambda$lambda_1(message));
          throw IllegalStateException_init(message);
        }

        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    $receiver_2.src = tmp$;
    $receiver_0_0.child_30b5ua$($receiver_0_1.create());
    $receiver.child_30b5ua$($receiver_0_0.create());
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
              logger_10.info_nq59yw$(Login$submitLogin$lambda$lambda_0(status, code));
              this.local$this$Login.props.handleChangeBackdropIsOpen(false);
              this.local$this$Login.props.handleChangeUserIsLogged(true);
              this.local$this$Login.props.handleChangeUsername(ensureNotNull(this.local$closure$values.get_11rb$(SERVER_getInstance().USERNAME)));
              return this.local$this$Login.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance()), Unit;
            } else {
              logger_10.warn_nq59yw$(Login$submitLogin$lambda$lambda_1(status, code));
              this.local$this$Login.props.handleChangeBackdropIsOpen(false);
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
              this.local$this$Login.props.handleChangeBackdropIsOpen(false);
              logger_10.error_nq59yw$(Login$submitLogin$lambda$lambda_2(e));
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
    logger_10.info_nq59yw$(Login$submitLogin$lambda(method, endpoint));
    this.props.handleChangeBackdropIsOpen(true);
    launch(MainScope(), void 0, void 0, Login$submitLogin$lambda_0(this, endpoint, values));
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
  function styledDiv$lambda_4(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function logger$lambda_11() {
    return Unit;
  }
  var logger_11;
  function CloudContent() {
    RBACContent.call(this);
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
            this.result_0 = this.local$this$CloudContent.getUsers(this);
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
            this.result_0 = this.local$this$CloudContent.getAssignments_rkkr90$(this.local$username, void 0, this);
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
      this$.tableColumns = userColumns;
      this$.title = 'Users';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_0(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda$lambda(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_0(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda);
      $receiver.child_30b5ua$(cryptoACTable(CloudContent$render$lambda$lambda$lambda$lambda_0(this$CloudContent, $receiver)));
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
            this.result_0 = this.local$this$CloudContent.getRoles(this);
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
            this.result_0 = this.local$this$CloudContent.getAssignments_rkkr90$(void 0, this.local$roleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$assignments = {v: this.result_0};
            this.state_0 = 3;
            this.result_0 = this.local$this$CloudContent.getPermissions_rkkr90$(this.local$roleName, void 0, this);
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
      this$.tableColumns = roleColumns;
      this$.title = 'Roles';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_2(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_0(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_1(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda_1);
      $receiver.child_30b5ua$(cryptoACTable(CloudContent$render$lambda$lambda$lambda$lambda_2(this$CloudContent, $receiver)));
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
            this.result_0 = this.local$this$CloudContent.getFiles(this);
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
            this.result_0 = this.local$this$CloudContent.getPermissions_rkkr90$(void 0, this.local$fileName, this);
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
      this$.tableColumns = fileColumns;
      this$.title = 'Files';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_4(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_1(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_2(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda_3);
      $receiver.child_30b5ua$(cryptoACTable(CloudContent$render$lambda$lambda$lambda$lambda_4(this$CloudContent, $receiver)));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudContent$render$lambda$lambda$lambda);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_0(this$CloudContent));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_1(this$CloudContent));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_2(this$CloudContent));
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
            this.result_0 = this.local$this$CloudContent.getAssignments_rkkr90$(void 0, void 0, this);
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
      this$.tableColumns = assignmentColumns;
      this$.title = 'User-Role Assignments';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_6(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_2(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_4(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda_5);
      $receiver.child_30b5ua$(cryptoACTable(CloudContent$render$lambda$lambda$lambda$lambda_6(this$CloudContent, $receiver)));
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
            this.result_0 = this.local$this$CloudContent.getPermissions_rkkr90$(void 0, void 0, this);
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
      this$.tableColumns = permissionColumns;
      this$.title = 'Role-File Permissions';
      this$.onRefresh = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$CloudContent);
      this$.onElementClick = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_8(this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_3(this$CloudContent, $receiver));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_5(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda_7);
      $receiver.child_30b5ua$(cryptoACTable(CloudContent$render$lambda$lambda$lambda$lambda_8(this$CloudContent, $receiver)));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda_0(this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudContent$render$lambda$lambda$lambda_3);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_4(this$CloudContent));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_5(this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda_4(closure$it) {
    return function ($receiver) {
      $receiver.item = true;
      $receiver.xs = closure$it;
      $receiver.sm = closure$it;
      return Unit;
    };
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
      this$.tableColumns = closure$cryptoACTableData.columns;
      this$.title = closure$cryptoACTableData.title;
      this$.onClose = CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$CloudContent);
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$CloudContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, $receiver, this$CloudContent));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda$lambda_10(closure$it, closure$cryptoACTableData, this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda$lambda_4(closure$it));
      $receiver.child_30b5ua$(cryptoACTable(CloudContent$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$CloudContent, $receiver)));
      return Unit;
    };
  }
  function CloudContent$render$lambda$lambda$lambda_6(closure$it, this$CloudContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(CloudContent$render$lambda$lambda$lambda$lambda_9);
      var numberOfTables = this$CloudContent.getNumberOfItemsFromSpan_za3lpa$(closure$it);
      for (var i = 0; i < numberOfTables; i++) {
        var cryptoACTableData = this$CloudContent.state.openedTables.get_za3lpa$(i);
        $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda$lambda_10(closure$it, cryptoACTableData, this$CloudContent));
      }
      return Unit;
    };
  }
  CloudContent.prototype.render_ss14n$ = function ($receiver) {
    css.s;
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_4);
    var $receiver_1 = $receiver_0.css;
    set_marginTop($receiver_1, get_px(10));
    set_marginBottom($receiver_1, get_px(10));
    set_maxHeight($receiver_1, get_px(500));
    if (this.props.userIsAdmin) {
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda(this));
    }$receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda_0(this));
    var tmp$;
    tmp$ = this.getColumnsForTables_za3lpa$(this.state.openedTables.size).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, CloudContent$render$lambda$lambda$lambda_6(element, this));
    }
    $receiver.child_30b5ua$($receiver_0.create());
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
            this.result_0 = this.local$this$CloudContent.getAssignments_rkkr90$(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$fetchedAssignments = this.result_0;
            if (this.local$fetchedAssignments != null) {
              this.state_0 = 3;
              this.result_0 = this.local$this$CloudContent.getPermissions_rkkr90$(void 0, void 0, this);
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
              this.result_0 = this.local$this$CloudContent.getUsers(this);
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
              this.result_0 = this.local$this$CloudContent.getRoles(this);
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
              this.result_0 = this.local$this$CloudContent.getFiles(this);
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
  CloudContent.prototype.init_b4e81d$ = function ($receiver) {
    logger_11.info_nq59yw$(CloudContent$init$lambda);
    $receiver.users = emptyList();
    $receiver.roles = emptyList();
    $receiver.files = emptyList();
    $receiver.assignments = emptyList();
    $receiver.permissions = emptyList();
    $receiver.openedTables = ArrayList_init();
    launch(MainScope(), void 0, void 0, CloudContent$init$lambda_0(this));
  };
  CloudContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloudContent',
    interfaces: [RBACContent]
  };
  function rbacCLOUDContent$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function rbacCLOUDContent$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(CloudContent), rbacCLOUDContent$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function rbacCLOUDContent(handler) {
    return ensureNotNull(createElement(rbacCLOUDContent$lambda(handler)));
  }
  function get$lambda_0($receiver) {
    return Unit;
  }
  function logger$lambda_12() {
    return Unit;
  }
  var logger_12;
  function RBACContent() {
    RComponent_init(this);
  }
  RBACContent.prototype.getUsers = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().USERS, '{Core}', this.props.coreType.toString());
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_004_USER_NOT_FOUND_getInstance(), ElementType$USER_getInstance(), continuation);
  };
  RBACContent.prototype.getRoles = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().ROLES, '{Core}', this.props.coreType.toString());
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_005_ROLE_NOT_FOUND_getInstance(), ElementType$ROLE_getInstance(), continuation);
  };
  RBACContent.prototype.getFiles = function (continuation) {
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().FILES, '{Core}', this.props.coreType.toString());
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_006_FILE_NOT_FOUND_getInstance(), ElementType$FILE_getInstance(), continuation);
  };
  RBACContent.prototype.getAssignments_rkkr90$ = function (username, roleName, continuation) {
    if (username === void 0)
      username = null;
    if (roleName === void 0)
      roleName = null;
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().ASSIGNMENTS, '{Core}', this.props.coreType.toString()) + '?' + (username != null ? SERVER_getInstance().USERNAME + '=' + toString(username) : '' + (roleName != null ? SERVER_getInstance().ROLE_NAME + '=' + toString(roleName) : ''));
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_007_ROLETUPLE_NOT_FOUND_getInstance(), ElementType$ASSIGNMENT_getInstance(), continuation);
  };
  RBACContent.prototype.getPermissions_rkkr90$ = function (roleName, fileName, continuation) {
    if (roleName === void 0)
      roleName = null;
    if (fileName === void 0)
      fileName = null;
    var actualEndpoint = baseURL + API_getInstance().PROXY + replace(API_getInstance().PERMISSIONS, '{Core}', this.props.coreType.toString()) + '?' + (roleName != null ? SERVER_getInstance().ROLE_NAME + '=' + toString(roleName) : '' + (fileName != null ? SERVER_getInstance().FILE_NAME + '=' + toString(fileName) : ''));
    return this.getElements_ofj3vx$(actualEndpoint, OutcomeCode$CODE_008_PERMISSIONTUPLE_NOT_FOUND_getInstance(), ElementType$PERMISSION_getInstance(), continuation);
  };
  function RBACContent$getElements$lambda(closure$type) {
    return function () {
      return 'Getting the list of elements of type ' + closure$type;
    };
  }
  function RBACContent$getElements$lambda_0(closure$endpoint) {
    return function () {
      return 'Sending get request to ' + closure$endpoint;
    };
  }
  function RBACContent$getElements$lambda_1() {
    return 'Proxy is unreachable';
  }
  function RBACContent$getElements$lambda_2(closure$e) {
    return function () {
      return 'Error during HTTP request (' + toString(closure$e.message) + '), see console log for details';
    };
  }
  function RBACContent$getElements$lambda_3(closure$type) {
    return function () {
      return 'Got 0 elements of type ' + closure$type;
    };
  }
  function RBACContent$getElements$lambda_4(closure$type, closure$outcomeCode) {
    return function () {
      return 'Error while getting elements of type ' + closure$type + ': ' + closure$outcomeCode;
    };
  }
  function Coroutine$getElements_ofj3vx$($this, endpoint_0, errorCode_0, type_0, continuation_0) {
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
            logger_12.info_nq59yw$(RBACContent$getElements$lambda(this.local$type));
            logger_12.info_nq59yw$(RBACContent$getElements$lambda_0(this.local$endpoint));
            this.$this.props.handleChangeBackdropIsOpen(true);
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
                logger_12.error_nq59yw$(RBACContent$getElements$lambda_1);
                this.$this.props.handleDisplayAlert(OutcomeCode$CODE_045_PROXY_CONNECTION_TIMEOUT_getInstance(), CryptoACAlertSeverity$ERROR_getInstance());
              } else {
                logger_12.error_nq59yw$(RBACContent$getElements$lambda_2(e));
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
            this.$this.props.handleChangeBackdropIsOpen(false);
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
              logger_12.info_nq59yw$(RBACContent$getElements$lambda_3(this.local$type));
              this.local$tmp$_6 = emptyList();
            } else {
              logger_12.warn_nq59yw$(RBACContent$getElements$lambda_4(this.local$type, outcomeCode));
              this.$this.props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity$ERROR_getInstance());
              this.local$tmp$_6 = null;
            }

            this.state_0 = 19;
            continue;
          case 13:
            var string = this.result_0;
            var tmp$_1;
            var permissions = this.local$tmp$_5.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer(this.local$tmp$_5.serializersModule, createKType(getKClass(HashSet), [createInvariantKTypeProjection(createKType(getKClass(PermissionTuple), [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), string);
            var destination = ArrayList_init_0(collectionSizeOrDefault(permissions, 10));
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
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault(assignments, 10));
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
            var destination_1 = ArrayList_init_0(collectionSizeOrDefault(files, 10));
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
            var destination_2 = ArrayList_init_0(collectionSizeOrDefault(roles, 10));
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
            var destination_3 = ArrayList_init_0(collectionSizeOrDefault(users, 10));
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
  RBACContent.prototype.getElements_ofj3vx$ = function (endpoint_0, errorCode_0, type_0, continuation_0, suspended) {
    var instance = new Coroutine$getElements_ofj3vx$(this, endpoint_0, errorCode_0, type_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  RBACContent.prototype.getColumnsForTables_za3lpa$ = function (numberOfTables) {
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
  RBACContent.prototype.getNumberOfItemsFromSpan_za3lpa$ = function (span) {
    switch (span) {
      case 12:
        return 1;
      case 6:
        return 2;
      default:return 3;
    }
  };
  RBACContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RBACContent',
    interfaces: [RComponent]
  };
  function styledDiv$lambda_5(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function logger$lambda_13() {
    return Unit;
  }
  var logger_13;
  function MQTTContent() {
    RBACContent.call(this);
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
            this.result_0 = this.local$this$MQTTContent.getUsers(this);
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
            this.result_0 = this.local$this$MQTTContent.getAssignments_rkkr90$(this.local$username, void 0, this);
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
      this$.tableColumns = userColumns;
      this$.title = 'Users';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_0(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_0(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda);
      $receiver.child_30b5ua$(cryptoACTable(MQTTContent$render$lambda$lambda$lambda$lambda_0(this$MQTTContent, $receiver)));
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
            this.result_0 = this.local$this$MQTTContent.getRoles(this);
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
            this.result_0 = this.local$this$MQTTContent.getAssignments_rkkr90$(void 0, this.local$roleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$assignments = {v: this.result_0};
            this.state_0 = 3;
            this.result_0 = this.local$this$MQTTContent.getPermissions_rkkr90$(this.local$roleName, void 0, this);
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
      this$.tableColumns = roleColumns;
      this$.title = 'Roles';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_2(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_0(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_1(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda_1);
      $receiver.child_30b5ua$(cryptoACTable(MQTTContent$render$lambda$lambda$lambda$lambda_2(this$MQTTContent, $receiver)));
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
            this.result_0 = this.local$this$MQTTContent.getFiles(this);
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
            this.result_0 = this.local$this$MQTTContent.getPermissions_rkkr90$(void 0, this.local$fileName, this);
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
      this$.tableColumns = fileColumns;
      this$.title = 'Files';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_4(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_1(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_2(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda_3);
      $receiver.child_30b5ua$(cryptoACTable(MQTTContent$render$lambda$lambda$lambda$lambda_4(this$MQTTContent, $receiver)));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_0(this$MQTTContent));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_1(this$MQTTContent));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_2(this$MQTTContent));
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
            this.result_0 = this.local$this$MQTTContent.getAssignments_rkkr90$(void 0, void 0, this);
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
      this$.tableColumns = assignmentColumns;
      this$.title = 'User-Role Assignments';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_6(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_2(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_4(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda_5);
      $receiver.child_30b5ua$(cryptoACTable(MQTTContent$render$lambda$lambda$lambda$lambda_6(this$MQTTContent, $receiver)));
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
            this.result_0 = this.local$this$MQTTContent.getPermissions_rkkr90$(void 0, void 0, this);
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
      this$.tableColumns = permissionColumns;
      this$.title = 'Role-File Permissions';
      this$.onRefresh = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_7(this$MQTTContent);
      this$.onElementClick = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_8(this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_8(this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_3(this$MQTTContent, $receiver));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_5(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda_7);
      $receiver.child_30b5ua$(cryptoACTable(MQTTContent$render$lambda$lambda$lambda$lambda_8(this$MQTTContent, $receiver)));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda_0(this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda_3);
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_4(this$MQTTContent));
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_5(this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_4(closure$it) {
    return function ($receiver) {
      $receiver.item = true;
      $receiver.xs = closure$it;
      $receiver.sm = closure$it;
      return Unit;
    };
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
      this$.tableColumns = closure$cryptoACTableData.columns;
      this$.title = closure$cryptoACTableData.title;
      this$.onClose = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cryptoACTableData, this$MQTTContent);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$MQTTContent, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$cryptoACTableData, $receiver, this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_10(closure$it, closure$cryptoACTableData, this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_4(closure$it));
      $receiver.child_30b5ua$(cryptoACTable(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_5(closure$cryptoACTableData, this$MQTTContent, $receiver)));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_6(closure$it, this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda_9);
      var numberOfTables = this$MQTTContent.getNumberOfItemsFromSpan_za3lpa$(closure$it);
      for (var i = 0; i < numberOfTables; i++) {
        var cryptoACTableData = this$MQTTContent.state.openedTables.get_za3lpa$(i);
        $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda$lambda_10(closure$it, cryptoACTableData, this$MQTTContent));
      }
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_6(closure$it) {
    return function ($receiver) {
      $receiver.item = true;
      $receiver.xs = closure$it;
      $receiver.sm = closure$it;
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(this$MQTTContent, closure$topicName) {
    return function ($receiver) {
      this$MQTTContent.state.mqttMessages.remove_11rb$(closure$topicName);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(this$MQTTContent, closure$topicName) {
    return function (it) {
      setState(this$MQTTContent, MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(this$MQTTContent, closure$topicName));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$listOfMessages, this$, closure$topicName, this$MQTTContent) {
    return function ($receiver) {
      this$.elements = closure$listOfMessages;
      this$.tableColumns = mqttMessagesColumns;
      this$.title = 'Topic: ' + closure$topicName;
      this$.onClose = MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(this$MQTTContent, closure$topicName);
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda$lambda_7(this$MQTTContent, closure$i, this$) {
    return function ($receiver) {
      var tmp$;
      var topicName = this$MQTTContent.props.topics.get_za3lpa$(closure$i);
      var listOfMessages = ArrayList_init();
      if ((tmp$ = this$MQTTContent.state.mqttMessages.get_11rb$(topicName)) != null) {
        var tmp$_0;
        tmp$_0 = tmp$.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          listOfMessages.add_11rb$([element]);
        }
      }this$.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda$lambda_10(listOfMessages, $receiver, topicName, this$MQTTContent));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda$lambda_12(closure$it, this$MQTTContent, closure$i) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_6(closure$it));
      $receiver.child_30b5ua$(cryptoACTable(MQTTContent$render$lambda$lambda$lambda$lambda$lambda_7(this$MQTTContent, closure$i, $receiver)));
      return Unit;
    };
  }
  function MQTTContent$render$lambda$lambda$lambda_7(closure$it, this$MQTTContent) {
    return function ($receiver) {
      $receiver.attrs_37755u$(MQTTContent$render$lambda$lambda$lambda$lambda_11);
      var numberOfTables = this$MQTTContent.getNumberOfItemsFromSpan_za3lpa$(closure$it);
      for (var i = 0; i < numberOfTables; i++) {
        $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda$lambda_12(closure$it, this$MQTTContent, i));
      }
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
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda(this));
    }$receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda_0(this));
    var tmp$;
    tmp$ = this.getColumnsForTables_za3lpa$(this.state.openedTables.size).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_6(element, this));
    }
    var tmp$_0;
    tmp$_0 = this.getColumnsForTables_za3lpa$(this.props.topics.size).iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      $receiver_0.invoke_qk0v40$($module$_material_ui_core.Grid, MQTTContent$render$lambda$lambda$lambda_7(element_0, this));
    }
    $receiver.child_30b5ua$($receiver_0.create());
  };
  function MQTTContent$init$lambda() {
    return 'Initializing the state of the MQTTContent component';
  }
  function MQTTContent$init$lambda$lambda(closure$path) {
    return function ($receiver) {
      url($receiver, 'wss', get_host($receiver), get_port($receiver), closure$path);
      return Unit;
    };
  }
  function MQTTContent$init$lambda$lambda_0(this$MQTTContent, closure$fetchedUsers, closure$fetchedRoles, closure$fetchedFiles, closure$fetchedAssignments, closure$fetchedPermissions, closure$tempWSS) {
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
      }$receiver.wss = closure$tempWSS;
      var tmp$;
      tmp$ = this$MQTTContent.props.topics.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = $receiver.mqttMessages;
        var value = ArrayList_init();
        tmp$_0.put_xwzc9p$(element, value);
      }
      return Unit;
    };
  }
  function MQTTContent$init$lambda$lambda_1(closure$message, closure$topic) {
    return function () {
      return 'RECEIVED MESSAGE ' + closure$message + ' in topic ' + closure$topic;
    };
  }
  function MQTTContent$init$lambda$lambda_2(closure$topic, closure$message) {
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
            var tmp$;
            this.local$fetchedUsers = {v: emptyList()};
            this.local$fetchedRoles = {v: emptyList()};
            this.local$fetchedFiles = {v: emptyList()};
            this.local$fetchedPermissions = {v: emptyList()};
            this.state_0 = 2;
            this.result_0 = this.local$this$MQTTContent.getAssignments_rkkr90$(void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$fetchedAssignments = this.result_0;
            if (this.local$fetchedAssignments != null) {
              this.state_0 = 3;
              this.result_0 = this.local$this$MQTTContent.getPermissions_rkkr90$(void 0, void 0, this);
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
              this.result_0 = this.local$this$MQTTContent.getUsers(this);
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
              this.result_0 = this.local$this$MQTTContent.getRoles(this);
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
              this.result_0 = this.local$this$MQTTContent.getFiles(this);
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
            var path = API_getInstance().PROXY + replace(API_getInstance().FILES, '{Core}', this.local$this$MQTTContent.props.coreType.toString());
            this.state_0 = 11;
            this.result_0 = webSocketSession(this.local$this$MQTTContent.props.httpClient, HttpMethod.Companion.Get, window.location.hostname, toInt(window.location.port), path, MQTTContent$init$lambda$lambda(path), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            var tempWSS = this.result_0;
            setState(this.local$this$MQTTContent, MQTTContent$init$lambda$lambda_0(this.local$this$MQTTContent, this.local$fetchedUsers, this.local$fetchedRoles, this.local$fetchedFiles, this.local$fetchedAssignments, this.local$fetchedPermissions, tempWSS));
            this.state_0 = 12;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = this.local$this$MQTTContent.state.wss.incoming.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            var serializedMQTTMessage = readText_0(ensureNotNull(Kotlin.isType(tmp$ = this.result_0, Frame$Text) ? tmp$ : null));
            var $receiver = Json.Default;
            var tmp$_0;
            var mqttMessage = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(MQTTMessage), [], false)), KSerializer) ? tmp$_0 : throwCCE(), serializedMQTTMessage);
            var message = mqttMessage.message;
            var topic = mqttMessage.topic;
            logger_13.warn_nq59yw$(MQTTContent$init$lambda$lambda_1(message, topic));
            setState(this.local$this$MQTTContent, MQTTContent$init$lambda$lambda_2(topic, message));
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
  function MQTTContent$init$lambda_0(this$MQTTContent_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MQTTContent$init$lambda(this$MQTTContent_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MQTTContent.prototype.init_b4e81d$ = function ($receiver) {
    logger_13.info_nq59yw$(MQTTContent$init$lambda);
    $receiver.users = emptyList();
    $receiver.roles = emptyList();
    $receiver.files = emptyList();
    $receiver.assignments = emptyList();
    $receiver.permissions = emptyList();
    $receiver.openedTables = ArrayList_init();
    $receiver.mqttMessages = HashMap_init();
    launch(MainScope(), void 0, void 0, MQTTContent$init$lambda_0(this));
  };
  MQTTContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MQTTContent',
    interfaces: [RBACContent]
  };
  function rbacMQTTContent$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function rbacMQTTContent$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(MQTTContent), rbacMQTTContent$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function rbacMQTTContent(handler) {
    return ensureNotNull(createElement(rbacMQTTContent$lambda(handler)));
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
  Architecture$Companion.prototype.architectureFromAssignments_lwskbt$ = function (assignments) {
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
    Assignment$Companion_getInstance();
    this.domain = domain;
    this.entity = entity;
  }
  function Assignment$Companion() {
    Assignment$Companion_instance = this;
    this.assignmentsCLOUD = hashMapOf([to(DomainsCLOUD$Client_getInstance().toString(), listOf_0(EntitiesCLOUD$Proxy_getInstance().toString())), to(DomainsCLOUD$OnPremise_getInstance().toString(), listOf([EntitiesCLOUD$Proxy_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()])), to(DomainsCLOUD$CSP_getInstance().toString(), listOf([EntitiesCLOUD$RM_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()]))]);
    this.assignmentsMQTT = hashMapOf([to(DomainsMQTT$Client_getInstance().toString(), listOf_0(EntitiesMQTT$Proxy_getInstance().toString())), to(DomainsMQTT$OnPremise_getInstance().toString(), listOf([EntitiesMQTT$Proxy_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()])), to(DomainsMQTT$Edge_getInstance().toString(), listOf([EntitiesMQTT$Proxy_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()])), to(DomainsMQTT$CSP_getInstance().toString(), listOf([EntitiesMQTT$MM_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()]))]);
  }
  Assignment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Assignment$Companion_instance = null;
  function Assignment$Companion_getInstance() {
    if (Assignment$Companion_instance === null) {
      new Assignment$Companion();
    }return Assignment$Companion_instance;
  }
  Assignment.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, Assignment) ? tmp$ : throwCCE();
    if (!equals(this.domain, other.domain))
      return false;
    if (!equals(this.entity, other.entity))
      return false;
    return true;
  };
  Assignment.prototype.hashCode = function () {
    var result = hashCode(this.domain);
    result = (31 * result | 0) + hashCode(this.entity) | 0;
    return result;
  };
  Assignment.prototype.toString = function () {
    return "Assignment(domain='" + this.domain + "', entity='" + this.entity + "')";
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
  Assignment.prototype.copy_puj7f4$ = function (domain, entity) {
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
        destination.add_11rb$(plus_1(item, first_0(left)));
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
  Attacker.prototype.copy_a5jgfo$ = function (attacker, likelihood) {
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
  function styledSpan$lambda(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function styledDiv$lambda_6(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledTd$lambda(it) {
    return new TD_init(html.emptyMap, it);
  }
  function tr$lambda(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledThead$lambda(it) {
    return new THEAD_init(html.emptyMap, it);
  }
  function tbody$lambda(closure$classes) {
    return function (it) {
      return new TBODY_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledTable$lambda(it) {
    return new TABLE_init(html.emptyMap, it);
  }
  function logger$lambda_14() {
    return Unit;
  }
  var logger_14;
  function BestArchitectures() {
    RComponent_init(this);
  }
  function BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda(this$BestArchitectures) {
    return function (event) {
      this$BestArchitectures.props.refreshBestArchitectures(event);
      return Unit;
    };
  }
  function BestArchitectures$render$lambda$lambda$lambda$lambda$lambda(this$BestArchitectures) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.label = 'refresh';
      $receiver.color = 'secondary';
      $receiver.onClick = BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda(this$BestArchitectures);
      return Unit;
    };
  }
  function BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function BestArchitectures$render$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaUndoAlt, BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function BestArchitectures$render$lambda$lambda$lambda$lambda(this$BestArchitectures) {
    return function ($receiver) {
      $receiver.attrs_37755u$(BestArchitectures$render$lambda$lambda$lambda$lambda$lambda(this$BestArchitectures));
      $receiver.child_30b5ua$(ensureNotNull(createElement(BestArchitectures$render$lambda$lambda$lambda$lambda$lambda_0)));
      return Unit;
    };
  }
  function BestArchitectures$render$lambda$lambda$lambda$lambda_0(closure$architecturesToShow) {
    return function () {
      return 'Showing ' + closure$architecturesToShow.size + ' architectures';
    };
  }
  function BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$entity) {
    return function ($receiver) {
      $receiver.src = getImageFromEntity(closure$entity);
      return Unit;
    };
  }
  function BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.title = replace(closure$it.key, '_', '-');
      return Unit;
    };
  }
  function BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$score) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda);
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
  function BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it, closure$score) {
    return function ($receiver) {
      $receiver.attrs_37755u$(BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it));
      $receiver.child_30b5ua$(ensureNotNull(createElement(BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$score))));
      return Unit;
    };
  }
  function BestArchitectures$render$lambda(this$BestArchitectures) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_6);
      var this$BestArchitectures_0 = this$BestArchitectures;
      var $receiver_1 = $receiver_0.css;
      set_borderTopLeftRadius($receiver_1, get_px(15));
      set_borderTopRightRadius($receiver_1, get_px(15));
      set_padding($receiver_1, '5px');
      set_backgroundColor($receiver_1, new Color('#2980b9'));
      set_borderColor($receiver_1, new Color('#2980b9'));
      set_color($receiver_1, new Color('white'));
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda);
      set_marginLeft($receiver_0_0.css, get_pct(10));
      $receiver_0_0.unaryPlus_pdl1vz$('Best Architectures');
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_6);
      set_float($receiver_0_1.css, Float.right);
      $receiver_0_1.invoke_qk0v40$($module$_material_ui_core.IconButton, BestArchitectures$render$lambda$lambda$lambda$lambda(this$BestArchitectures_0));
      $receiver_0.child_30b5ua$($receiver_0_1.create());
      $receiver.child_30b5ua$($receiver_0.create());
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda);
      var this$BestArchitectures_1 = this$BestArchitectures;
      var $receiver_2 = $receiver_0_2.css;
      set_borderCollapse($receiver_2, BorderCollapse.collapse);
      set_width($receiver_2, get_pct(100));
      var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda);
      set_borderBottom($receiver_0_3.css, '1px solid rgba(173, 173, 173, 0.2)');
      var $receiver_0_4 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
      var tmp$;
      tmp$ = this$BestArchitectures_1.props.domains.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0_5 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
        set_padding($receiver_0_5.css, '4px');
        $receiver_0_5.unaryPlus_pdl1vz$(element);
        $receiver_0_4.child_30b5ua$($receiver_0_5.create());
      }
      var $receiver_0_6 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
      set_padding($receiver_0_6.css, '4px');
      $receiver_0_6.unaryPlus_pdl1vz$('Score');
      $receiver_0_4.child_30b5ua$($receiver_0_6.create());
      $receiver_0_3.child_30b5ua$($receiver_0_4.create());
      $receiver_0_2.child_30b5ua$($receiver_0_3.create());
      var $receiver_0_7 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda(null));
      var $receiver_3 = this$BestArchitectures_1.props.architectures;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_3.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (this$BestArchitectures_1.props.hybrid || !element_0.hybrid)
          destination.add_11rb$(element_0);
      }
      var architecturesToShow = destination;
      logger_14.info_nq59yw$(BestArchitectures$render$lambda$lambda$lambda$lambda_0(architecturesToShow));
      var tmp$_1, tmp$_0_0;
      var index = 0;
      tmp$_1 = architecturesToShow.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var architectureIndex = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        var $receiver_0_8 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(null));
        var tmp$_2, tmp$_0_1;
        var index_0 = 0;
        tmp$_2 = this$BestArchitectures_1.props.domains.iterator();
        while (tmp$_2.hasNext()) {
          var item_0 = tmp$_2.next();
          var domainIndex = checkIndexOverflow((tmp$_0_1 = index_0, index_0 = tmp$_0_1 + 1 | 0, tmp$_0_1));
          var tmp$_3;
          var entitiesInDomain = (tmp$_3 = item.arcs.get_11rb$(item_0)) != null ? tmp$_3 : emptyList();
          var $receiver_0_9 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
          var $receiver_4 = $receiver_0_9.css;
          if (architectureIndex === 0) {
            set_paddingTop($receiver_4, get_px(3));
          } else if (architectureIndex === (architecturesToShow.size - 1 | 0)) {
            set_paddingBottom($receiver_4, get_px(3));
            if (domainIndex === 0) {
              set_borderBottomLeftRadius($receiver_4, get_px(15));
            }}var tmp$_4;
          tmp$_4 = entitiesInDomain.iterator();
          while (tmp$_4.hasNext()) {
            var element_1 = tmp$_4.next();
            $receiver_0_9.child_30b5ua$(entityIcon(BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element_1)));
          }
          $receiver_0_8.child_30b5ua$($receiver_0_9.create());
        }
        var $receiver_0_10 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda);
        var $receiver_5 = $receiver_0_10.css;
        if (architectureIndex === 0) {
          set_paddingTop($receiver_5, get_px(3));
        } else if (architectureIndex === (architecturesToShow.size - 1 | 0)) {
          set_paddingBottom($receiver_5, get_px(3));
          set_borderBottomRightRadius($receiver_5, get_px(15));
        }if (this$BestArchitectures_1.props.algorithm === Algorithm$AdHoc_getInstance()) {
          $receiver_0_10.unaryPlus_pdl1vz$(item.requirementsScore.toString());
        } else if (this$BestArchitectures_1.props.algorithm === Algorithm$Best_getInstance()) {
          var tmp$_5;
          tmp$_5 = item.arrayRequirementsScore.entries.iterator();
          while (tmp$_5.hasNext()) {
            var element_2 = tmp$_5.next();
            var score = element_2.value;
            $receiver_0_10.invoke_qk0v40$($module$_material_ui_core.Tooltip, BestArchitectures$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element_2, score));
          }
        }$receiver_0_8.child_30b5ua$($receiver_0_10.create());
        $receiver_0_7.child_30b5ua$($receiver_0_8.create());
      }
      $receiver_0_2.child_30b5ua$($receiver_0_7.create());
      $receiver.child_30b5ua$($receiver_0_2.create());
      return Unit;
    };
  }
  BestArchitectures.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Paper, BestArchitectures$render$lambda(this));
  };
  BestArchitectures.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BestArchitectures',
    interfaces: [RComponent]
  };
  function bestArchitectures$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function bestArchitectures$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(BestArchitectures), bestArchitectures$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function bestArchitectures(handler) {
    return ensureNotNull(createElement(bestArchitectures$lambda(handler)));
  }
  function styledDiv$lambda_7(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function Configuration() {
    RComponent_init(this);
  }
  function Configuration$render$lambda$lambda$lambda($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda$lambda($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda_0($receiver) {
    $receiver.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$('Scenario');
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda_1($receiver) {
    $receiver.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$('Algorithm');
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.item = true;
    $receiver.xs = 12;
    $receiver.sm = 4;
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda_2($receiver) {
    $receiver.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda_1);
    $receiver.unaryPlus_pdl1vz$('Metric');
    return Unit;
  }
  function Configuration$render$lambda$lambda($receiver) {
    $receiver.attrs_37755u$(Configuration$render$lambda$lambda$lambda);
    $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Configuration$render$lambda$lambda$lambda_0);
    $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Configuration$render$lambda$lambda$lambda_1);
    $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Configuration$render$lambda$lambda$lambda_2);
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda_3($receiver) {
    $receiver.container = true;
    $receiver.spacing = 1;
    return Unit;
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda(this$Configuration) {
    return function (it) {
      this$Configuration.props.handleChangeScenario(Scenario$valueOf(it));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda_2(this$, this$Configuration) {
    return function ($receiver) {
      this$.name = 'Scenario';
      var tmp$ = this$;
      var $receiver_0 = Scenario$values();
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var item = $receiver_0[tmp$_0];
        destination.add_11rb$(item.toString());
      }
      tmp$.values = destination;
      this$.defaultValue = Scenario$CLOUD_getInstance().toString();
      this$.handleChangeChoice = Configuration$render$lambda$lambda$lambda$lambda$lambda(this$Configuration);
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda_4(this$Configuration, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda_2($receiver, this$Configuration));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda_0(this$Configuration) {
    return function (it) {
      this$Configuration.props.handleChangeAlgorithm(Algorithm$valueOf(it));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda_3(this$, this$Configuration) {
    return function ($receiver) {
      this$.name = 'Algorithm';
      var tmp$ = this$;
      var $receiver_0 = Algorithm$values();
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var item = $receiver_0[tmp$_0];
        destination.add_11rb$(item.toString());
      }
      tmp$.values = destination;
      this$.defaultValue = Algorithm$Best_getInstance().toString();
      this$.handleChangeChoice = Configuration$render$lambda$lambda$lambda$lambda$lambda_0(this$Configuration);
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda_5(this$Configuration, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda_3($receiver, this$Configuration));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda$lambda_1(this$Configuration) {
    return function (it) {
      this$Configuration.props.handleChangeMetric(Metric$valueOf(it));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda$lambda_4(this$, this$Configuration) {
    return function ($receiver) {
      this$.name = 'Metric';
      var tmp$ = this$;
      var $receiver_0 = Metric$values();
      var destination = ArrayList_init_0($receiver_0.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var item = $receiver_0[tmp$_0];
        destination.add_11rb$(item.toString());
      }
      tmp$.values = destination;
      this$.defaultValue = Metric$Goals_getInstance().toString();
      this$.handleChangeChoice = Configuration$render$lambda$lambda$lambda$lambda$lambda_1(this$Configuration);
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda$lambda_6(this$Configuration, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(Configuration$render$lambda$lambda$lambda$lambda_4($receiver, this$Configuration));
      return Unit;
    };
  }
  function Configuration$render$lambda$lambda_0(this$Configuration) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Configuration$render$lambda$lambda$lambda_3);
      $receiver.child_30b5ua$(configurationItem(Configuration$render$lambda$lambda$lambda_4(this$Configuration, $receiver)));
      $receiver.child_30b5ua$(configurationItem(Configuration$render$lambda$lambda$lambda_5(this$Configuration, $receiver)));
      $receiver.child_30b5ua$(configurationItem(Configuration$render$lambda$lambda$lambda_6(this$Configuration, $receiver)));
      return Unit;
    };
  }
  function Configuration$render$lambda(this$Configuration) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_7);
      var $receiver_1 = $receiver_0.css;
      set_borderTopLeftRadius($receiver_1, get_px(15));
      set_borderTopRightRadius($receiver_1, get_px(15));
      set_padding($receiver_1, '5px');
      set_backgroundColor($receiver_1, new Color('#343a40'));
      set_borderColor($receiver_1, new Color('#343a40'));
      set_color($receiver_1, new Color('white'));
      $receiver_0.unaryPlus_pdl1vz$('Configuration');
      $receiver.child_30b5ua$($receiver_0.create());
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Configuration$render$lambda$lambda);
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_7);
      set_borderBottom($receiver_0_0.css, '1px solid rgba(173, 173, 173, 0.2)');
      $receiver.child_30b5ua$($receiver_0_0.create());
      $receiver.invoke_qk0v40$($module$_material_ui_core.Grid, Configuration$render$lambda$lambda_0(this$Configuration));
      return Unit;
    };
  }
  Configuration.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Paper, Configuration$render$lambda(this));
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
  function styledDiv$lambda_8(it) {
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
      return Unit;
    };
  }
  function ConfigurationItem$render$lambda$lambda$lambda(this$ConfigurationItem) {
    return function ($receiver) {
      $receiver.name = this$ConfigurationItem.props.name;
      $receiver.disabled = this$ConfigurationItem.props.disabled;
      $receiver.row = false;
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
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_8);
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
      return new IMG_init(attributesMapOf_1(['alt', closure$alt, 'src', closure$src]), it);
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
  function styledSpan$lambda_0(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function styledDiv$lambda_9(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledTd$lambda_0(it) {
    return new TD_init(html.emptyMap, it);
  }
  function tr$lambda_0(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledThead$lambda_0(it) {
    return new THEAD_init(html.emptyMap, it);
  }
  function tbody$lambda_0(closure$classes) {
    return function (it) {
      return new TBODY_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledTable$lambda_0(it) {
    return new TABLE_init(html.emptyMap, it);
  }
  function PreFilters() {
    RComponent_init(this);
  }
  function PreFilters$render$lambda$lambda$lambda$lambda$lambda(this$PreFilters) {
    return function (newValue) {
      this$PreFilters.props.handleToggleHybrid(newValue);
      return Unit;
    };
  }
  function PreFilters$render$lambda$lambda$lambda$lambda(this$PreFilters) {
    return function ($receiver) {
      $receiver.size = 'small';
      $receiver.defaultValue = false;
      $receiver.color = 'primary';
      $receiver.onChange = PreFilters$render$lambda$lambda$lambda$lambda$lambda(this$PreFilters);
      return Unit;
    };
  }
  function PreFilters$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PreFilters) {
    return function (entity, domain, assignment) {
      this$PreFilters.props.handleToggleAssignment(entity, domain, assignment);
      return Unit;
    };
  }
  function PreFilters$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PreFilters, closure$entity, closure$domain) {
    return function ($receiver) {
      $receiver.key = this$PreFilters.props.domains.toString() + this$PreFilters.props.entities.toString();
      $receiver.src = getImageFromEntity(closure$entity);
      $receiver.onClick = PreFilters$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PreFilters);
      $receiver.entity = closure$entity;
      $receiver.domain = closure$domain;
      return Unit;
    };
  }
  function PreFilters$render$lambda(this$PreFilters) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_9);
      var this$PreFilters_0 = this$PreFilters;
      var $receiver_1 = $receiver_0.css;
      set_borderTopLeftRadius($receiver_1, get_px(15));
      set_borderTopRightRadius($receiver_1, get_px(15));
      set_padding($receiver_1, '5px');
      set_backgroundColor($receiver_1, new Color('#343a40'));
      set_borderColor($receiver_1, new Color('#343a40'));
      set_color($receiver_1, new Color('white'));
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda_0);
      set_marginLeft($receiver_0_0.css, get_pct(10));
      $receiver_0_0.unaryPlus_pdl1vz$('Pre-Filters');
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_9);
      set_float($receiver_0_1.css, Float.right);
      $receiver_0_1.unaryPlus_pdl1vz$('Hybrid');
      $receiver_0_1.child_30b5ua$(cryptoACSwitch(PreFilters$render$lambda$lambda$lambda$lambda(this$PreFilters_0)));
      $receiver_0.child_30b5ua$($receiver_0_1.create());
      $receiver.child_30b5ua$($receiver_0.create());
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda_0);
      var this$PreFilters_1 = this$PreFilters;
      var $receiver_2 = $receiver_0_2.css;
      set_borderCollapse($receiver_2, BorderCollapse.collapse);
      set_width($receiver_2, get_pct(100));
      var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda_0);
      set_borderBottom($receiver_0_3.css, '1px solid rgba(173, 173, 173, 0.2)');
      var $receiver_0_4 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda_0(null));
      var $receiver_0_5 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
      set_padding($receiver_0_5.css, '4px');
      $receiver_0_4.child_30b5ua$($receiver_0_5.create());
      var tmp$;
      tmp$ = this$PreFilters_1.props.entities.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0_6 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
        set_padding($receiver_0_6.css, '4px');
        $receiver_0_6.unaryPlus_pdl1vz$(element);
        $receiver_0_4.child_30b5ua$($receiver_0_6.create());
      }
      $receiver_0_3.child_30b5ua$($receiver_0_4.create());
      $receiver_0_2.child_30b5ua$($receiver_0_3.create());
      var $receiver_0_7 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda_0(null));
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = this$PreFilters_1.props.domains.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        var $receiver_0_8 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda_0(null));
        var $receiver_0_9 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
        var $receiver_3 = $receiver_0_9.css;
        set_paddingLeft($receiver_3, get_px(10));
        set_width($receiver_3, get_px(160));
        set_textAlign($receiver_3, TextAlign.left);
        if (index_0 === (this$PreFilters_1.props.domains.size - 1 | 0)) {
          set_borderBottomLeftRadius($receiver_3, get_px(15));
        }$receiver_0_9.unaryPlus_pdl1vz$(item);
        $receiver_0_8.child_30b5ua$($receiver_0_9.create());
        var tmp$_1, tmp$_0_1;
        var index_1 = 0;
        tmp$_1 = this$PreFilters_1.props.entities.iterator();
        while (tmp$_1.hasNext()) {
          var item_0 = tmp$_1.next();
          var entityIndex = checkIndexOverflow((tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1));
          var $receiver_0_10 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_0);
          var $receiver_4 = $receiver_0_10.css;
          if (index_0 === 0) {
            set_paddingTop($receiver_4, get_px(3));
          } else if (index_0 === (this$PreFilters_1.props.domains.size - 1 | 0)) {
            set_paddingBottom($receiver_4, get_px(3));
          }if (index_0 === (this$PreFilters_1.props.domains.size - 1 | 0) && entityIndex === (this$PreFilters_1.props.entities.size - 1 | 0)) {
            set_borderBottomRightRadius($receiver_4, get_px(15));
          }if (ensureNotNull(this$PreFilters_1.props.assignments.get_11rb$(item)).contains_11rb$(item_0)) {
            $receiver_0_10.child_30b5ua$(entityIcon(PreFilters$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$PreFilters_1, item_0, item)));
          }$receiver_0_8.child_30b5ua$($receiver_0_10.create());
        }
        $receiver_0_7.child_30b5ua$($receiver_0_8.create());
      }
      $receiver_0_2.child_30b5ua$($receiver_0_7.create());
      $receiver.child_30b5ua$($receiver_0_2.create());
      return Unit;
    };
  }
  PreFilters.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Paper, PreFilters$render$lambda(this));
  };
  PreFilters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreFilters',
    interfaces: [RComponent]
  };
  function preFilters$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function preFilters$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(PreFilters), preFilters$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function preFilters(handler) {
    return ensureNotNull(createElement(preFilters$lambda(handler)));
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
  Requirement.prototype.copy_1gqd5k$ = function (name, weight, thresholdType, thresholdValue, penalty) {
    return new Requirement(name === void 0 ? this.name : name, weight === void 0 ? this.weight : weight, thresholdType === void 0 ? this.thresholdType : thresholdType, thresholdValue === void 0 ? this.thresholdValue : thresholdValue, penalty === void 0 ? this.penalty : penalty);
  };
  Requirement.prototype.toString = function () {
    return 'Requirement(name=' + Kotlin.toString(this.name) + (', weight=' + Kotlin.toString(this.weight)) + (', thresholdType=' + Kotlin.toString(this.thresholdType)) + (', thresholdValue=' + Kotlin.toString(this.thresholdValue)) + (', penalty=' + Kotlin.toString(this.penalty)) + ')';
  };
  function styledDiv$lambda_10(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledTd$lambda_1(it) {
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
  function RequirementItem$render$lambda$lambda$lambda$lambda$lambda(closure$newThresholdType) {
    return function ($receiver) {
      $receiver.thresholdType = closure$newThresholdType;
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda$lambda_0(this$RequirementItem) {
    return function (e) {
      var tmp$;
      var newThresholdType = Threshold$valueOf(typeof (tmp$ = e.target.value) === 'string' ? tmp$ : throwCCE());
      this$RequirementItem.props.handleChangeThresholdType(newThresholdType);
      setState(this$RequirementItem, RequirementItem$render$lambda$lambda$lambda$lambda$lambda(newThresholdType));
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda_0(this$RequirementItem) {
    return function ($receiver) {
      $receiver.label = 'Threshold type';
      $receiver.defaultValue = this$RequirementItem.props.defaultValue.thresholdType.toString();
      $receiver.onChange = RequirementItem$render$lambda$lambda$lambda$lambda_0(this$RequirementItem);
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.value = closure$it.toString();
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      $receiver.attrs_37755u$(RequirementItem$render$lambda$lambda$lambda$lambda$lambda_0(closure$it));
      $receiver.unaryPlus_pdl1vz$(closure$it.toString());
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda(this$RequirementItem) {
    return function ($receiver) {
      $receiver.attrs_37755u$(RequirementItem$render$lambda$lambda$lambda_0(this$RequirementItem));
      var $receiver_0 = Threshold$values();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        $receiver.invoke_qk0v40$($module$_material_ui_core.MenuItem, RequirementItem$render$lambda$lambda$lambda$lambda_1(element));
      }
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda$lambda_2(this$RequirementItem) {
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
      $receiver.disabled = this$RequirementItem.state.thresholdType === Threshold$None_getInstance();
      if (this$RequirementItem.state.thresholdType === Threshold$None_getInstance()) {
        tmp$ = 'greyTextField';
      } else {
        tmp$ = 'darkTextField';
      }
      $receiver.className = tmp$;
      if (this$RequirementItem.state.thresholdType === Threshold$None_getInstance()) {
        tmp$_0 = 'greyTextField';
      } else {
        tmp$_0 = 'darkTextField';
      }
      $receiver.className = tmp$_0;
      $receiver.onChange = RequirementItem$render$lambda$lambda$lambda$lambda_2(this$RequirementItem);
      return Unit;
    };
  }
  function RequirementItem$render$lambda$lambda$lambda$lambda_3(this$RequirementItem) {
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
      $receiver.disabled = this$RequirementItem.state.thresholdType === Threshold$None_getInstance();
      if (this$RequirementItem.state.thresholdType === Threshold$None_getInstance()) {
        tmp$ = 'greyTextField';
      } else {
        tmp$ = 'darkTextField';
      }
      $receiver.className = tmp$;
      $receiver.onChange = RequirementItem$render$lambda$lambda$lambda$lambda_3(this$RequirementItem);
      return Unit;
    };
  }
  RequirementItem.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_1);
    var $receiver_1 = $receiver_0.css;
    set_padding($receiver_1, '10px');
    set_width($receiver_1, get_px(160));
    set_textAlign($receiver_1, TextAlign.left);
    if (this.props.last) {
      set_borderBottomLeftRadius($receiver_1, get_px(15));
    }$receiver_0.unaryPlus_pdl1vz$(replace(this.props.requirement.name, '_', '-'));
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_1);
    set_padding($receiver_0_0.css, '10px');
    var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_10);
    set_color($receiver_0_1.css, new Color('#000000'));
    $receiver_0_1.child_30b5ua$(cryptoACTextField(RequirementItem$render$lambda$lambda$lambda(this)));
    $receiver_0_0.child_30b5ua$($receiver_0_1.create());
    $receiver.child_30b5ua$($receiver_0_0.create());
    var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_1);
    set_padding($receiver_0_2.css, '10px');
    $receiver_0_2.invoke_qk0v40$($module$_material_ui_core.Select, RequirementItem$render$lambda$lambda(this));
    $receiver.child_30b5ua$($receiver_0_2.create());
    var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_1);
    set_padding($receiver_0_3.css, '10px');
    var $receiver_0_4 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_10);
    set_color($receiver_0_4.css, new Color('#000000'));
    $receiver_0_4.child_30b5ua$(cryptoACTextField(RequirementItem$render$lambda$lambda$lambda_1(this)));
    $receiver_0_3.child_30b5ua$($receiver_0_4.create());
    $receiver.child_30b5ua$($receiver_0_3.create());
    var $receiver_0_5 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_1);
    var $receiver_2 = $receiver_0_5.css;
    set_padding($receiver_2, '10px');
    if (this.props.last) {
      set_borderBottomRightRadius($receiver_2, get_px(15));
    }var $receiver_0_6 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_10);
    set_color($receiver_0_6.css, new Color('#000000'));
    $receiver_0_6.child_30b5ua$(cryptoACTextField(RequirementItem$render$lambda$lambda$lambda_2(this)));
    $receiver_0_5.child_30b5ua$($receiver_0_6.create());
    $receiver.child_30b5ua$($receiver_0_5.create());
  };
  function RequirementItem$init$lambda$lambda(this$RequirementItem) {
    return function ($receiver) {
      $receiver.thresholdType = this$RequirementItem.props.defaultValue.thresholdType;
      return Unit;
    };
  }
  function Coroutine$RequirementItem$init$lambda(this$RequirementItem_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$RequirementItem = this$RequirementItem_0;
  }
  Coroutine$RequirementItem$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RequirementItem$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RequirementItem$init$lambda.prototype.constructor = Coroutine$RequirementItem$init$lambda;
  Coroutine$RequirementItem$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return setState(this.local$this$RequirementItem, RequirementItem$init$lambda$lambda(this.local$this$RequirementItem)), Unit;
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
  function RequirementItem$init$lambda(this$RequirementItem_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RequirementItem$init$lambda(this$RequirementItem_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RequirementItem.prototype.init_b4e81d$ = function ($receiver) {
    launch(MainScope(), void 0, void 0, RequirementItem$init$lambda(this));
  };
  RequirementItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    var tmp$;
    return !((tmp$ = nextProps.defaultValue) != null ? tmp$.equals(this.props.defaultValue) : null);
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
  function styledTd$lambda_2(it) {
    return new TD_init(html.emptyMap, it);
  }
  function tr$lambda_1(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledThead$lambda_1(it) {
    return new THEAD_init(html.emptyMap, it);
  }
  function tbody$lambda_1(closure$classes) {
    return function (it) {
      return new TBODY_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_11(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledTable$lambda_1(it) {
    return new TABLE_init(html.emptyMap, it);
  }
  function Requirements() {
    RComponent_init(this);
  }
  function Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Requirements, closure$req) {
    return function (weight) {
      this$Requirements.props.handleChangeWeightValue(closure$req.name, weight);
      return Unit;
    };
  }
  function Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Requirements, closure$req) {
    return function (type) {
      this$Requirements.props.handleChangeThresholdType(closure$req.name, type);
      return Unit;
    };
  }
  function Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Requirements, closure$req) {
    return function (threshold) {
      this$Requirements.props.handleChangeThresholdValue(closure$req.name, threshold);
      return Unit;
    };
  }
  function Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Requirements, closure$req) {
    return function (penalty) {
      this$Requirements.props.handleChangePenaltyValue(closure$req.name, penalty);
      return Unit;
    };
  }
  function Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$req, closure$index, this$Requirements) {
    return function ($receiver) {
      $receiver.defaultValue = new Requirement(closure$req.name);
      $receiver.last = closure$index === (this$Requirements.props.requirements.size - 1 | 0);
      $receiver.requirement = closure$req;
      $receiver.handleChangeWeightValue = Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Requirements, closure$req);
      $receiver.handleChangeThresholdType = Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Requirements, closure$req);
      $receiver.handleChangeThresholdValue = Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Requirements, closure$req);
      $receiver.handleChangePenaltyValue = Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Requirements, closure$req);
      return Unit;
    };
  }
  function Requirements$render$lambda(this$Requirements) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_11);
      var this$Requirements_0 = this$Requirements;
      var $receiver_1 = $receiver_0.css;
      set_borderTopLeftRadius($receiver_1, get_px(15));
      set_borderTopRightRadius($receiver_1, get_px(15));
      set_padding($receiver_1, '5px');
      set_backgroundColor($receiver_1, new Color('#343a40'));
      set_borderColor($receiver_1, new Color('#343a40'));
      set_color($receiver_1, new Color('white'));
      $receiver_0.unaryPlus_pdl1vz$(this$Requirements_0.props.title);
      $receiver.child_30b5ua$($receiver_0.create());
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda_1);
      var this$Requirements_1 = this$Requirements;
      var $receiver_2 = $receiver_0_0.css;
      set_borderCollapse($receiver_2, BorderCollapse.collapse);
      set_width($receiver_2, get_pct(100));
      var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda_1);
      set_borderBottom($receiver_0_1.css, '1px solid rgba(173, 173, 173, 0.2)');
      var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda_1(null));
      var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_2);
      set_padding($receiver_0_3.css, '4px');
      $receiver_0_2.child_30b5ua$($receiver_0_3.create());
      var $receiver_0_4 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_2);
      set_padding($receiver_0_4.css, '4px');
      $receiver_0_4.unaryPlus_pdl1vz$('Weight');
      $receiver_0_2.child_30b5ua$($receiver_0_4.create());
      var $receiver_0_5 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_2);
      set_padding($receiver_0_5.css, '4px');
      $receiver_0_5.unaryPlus_pdl1vz$('Type');
      $receiver_0_2.child_30b5ua$($receiver_0_5.create());
      var $receiver_0_6 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_2);
      set_padding($receiver_0_6.css, '4px');
      $receiver_0_6.unaryPlus_pdl1vz$('Threshold');
      $receiver_0_2.child_30b5ua$($receiver_0_6.create());
      var $receiver_0_7 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_2);
      set_padding($receiver_0_7.css, '4px');
      $receiver_0_7.unaryPlus_pdl1vz$('Penalty');
      $receiver_0_2.child_30b5ua$($receiver_0_7.create());
      $receiver_0_1.child_30b5ua$($receiver_0_2.create());
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      var $receiver_0_8 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda_1(null));
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = this$Requirements_1.props.requirements.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        $receiver_0_8.key = item.name;
        var $receiver_0_9 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda_1(null));
        $receiver_0_9.child_30b5ua$(requirementItem(Requirements$render$lambda$lambda$lambda$lambda$lambda$lambda(item, index_0, this$Requirements_1)));
        $receiver_0_8.child_30b5ua$($receiver_0_9.create());
      }
      $receiver_0_0.child_30b5ua$($receiver_0_8.create());
      $receiver.child_30b5ua$($receiver_0_0.create());
      return Unit;
    };
  }
  Requirements.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Paper, Requirements$render$lambda(this));
  };
  Requirements.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Requirements',
    interfaces: [RComponent]
  };
  function requirements$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function requirements$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Requirements), requirements$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function requirements(handler) {
    return ensureNotNull(createElement(requirements$lambda(handler)));
  }
  function br$lambda(closure$classes) {
    return function (it) {
      return new BR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_12(it) {
    return new DIV_init(html.emptyMap, it);
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
  function logger$lambda_15() {
    return Unit;
  }
  var logger_15;
  function TradeOffBoard() {
    RComponent_init(this);
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda(this$TradeOffBoard) {
    return function (newScenario) {
      this$TradeOffBoard.changeScenario_0(newScenario);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_0(this$TradeOffBoard) {
    return function (newAlgorithm) {
      this$TradeOffBoard.changeAlgorithm_0(newAlgorithm);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_1(this$TradeOffBoard) {
    return function (newMetric) {
      this$TradeOffBoard.changeMetric_0(newMetric);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda(this$TradeOffBoard, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var this$TradeOffBoard_0 = this$TradeOffBoard;
      $receiver_0.attrs;
      $receiver.handleChangeScenario = TradeOffBoard$render$lambda$lambda$lambda$lambda(this$TradeOffBoard_0);
      $receiver.handleChangeAlgorithm = TradeOffBoard$render$lambda$lambda$lambda$lambda_0(this$TradeOffBoard_0);
      $receiver.handleChangeMetric = TradeOffBoard$render$lambda$lambda$lambda$lambda_1(this$TradeOffBoard_0);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_2(this$TradeOffBoard) {
    return function (entity, domain, accepted) {
      this$TradeOffBoard.toggleAssignment_0(entity, domain, accepted);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_3(this$TradeOffBoard) {
    return function (newValue) {
      this$TradeOffBoard.toggleHybrid_0(newValue);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda_0(this$TradeOffBoard, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var this$TradeOffBoard_0 = this$TradeOffBoard;
      $receiver_0.attrs;
      $receiver.domains = this$TradeOffBoard_0.state.domains;
      $receiver.entities = this$TradeOffBoard_0.state.entities;
      $receiver.assignments = this$TradeOffBoard_0.state.assignments;
      $receiver.handleToggleAssignment = TradeOffBoard$render$lambda$lambda$lambda$lambda_2(this$TradeOffBoard_0);
      $receiver.handleToggleHybrid = TradeOffBoard$render$lambda$lambda$lambda$lambda_3(this$TradeOffBoard_0);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda(this$TradeOffBoard) {
    return function (domain, attacker, newLikelihood) {
      this$TradeOffBoard.changeLikelihood_0(domain, attacker, newLikelihood);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda_1(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.attackers = this$TradeOffBoard.state.attackers;
      $receiver.handleChangeLikelihood = TradeOffBoard$render$lambda$lambda$lambda(this$TradeOffBoard);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda_0(this$TradeOffBoard) {
    return function (requirement, weight) {
      this$TradeOffBoard.changeWeight_0(requirement, weight);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda_1(this$TradeOffBoard) {
    return function (requirement, threshold) {
      this$TradeOffBoard.changeThresholdType_0(requirement, threshold);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda_2(this$TradeOffBoard) {
    return function (requirement, value) {
      this$TradeOffBoard.changeThresholdValue_0(requirement, value);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda_3(this$TradeOffBoard) {
    return function (requirement, penalty) {
      this$TradeOffBoard.changePenalty_0(requirement, penalty);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda_2(this$TradeOffBoard) {
    return function ($receiver) {
      var tmp$;
      switch (this$TradeOffBoard.state.metric.name) {
        case 'Protection':
          tmp$ = 'Security Requirements';
          break;
        case 'Goals':
          tmp$ = 'Scenario Requirements';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      $receiver.title = tmp$;
      $receiver.requirements = this$TradeOffBoard.state.requirementsInputs;
      $receiver.handleChangeWeightValue = TradeOffBoard$render$lambda$lambda$lambda_0(this$TradeOffBoard);
      $receiver.handleChangeThresholdType = TradeOffBoard$render$lambda$lambda$lambda_1(this$TradeOffBoard);
      $receiver.handleChangeThresholdValue = TradeOffBoard$render$lambda$lambda$lambda_2(this$TradeOffBoard);
      $receiver.handleChangePenaltyValue = TradeOffBoard$render$lambda$lambda$lambda_3(this$TradeOffBoard);
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard) {
    return function ($receiver) {
      $receiver.architectures = this$TradeOffBoard.computePossibleArchitectures_0();
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda$lambda$lambda_4(this$TradeOffBoard) {
    return function (f) {
      setState(this$TradeOffBoard, TradeOffBoard$render$lambda$lambda$lambda$lambda$lambda(this$TradeOffBoard));
      return Unit;
    };
  }
  function TradeOffBoard$render$lambda$lambda_3(this$TradeOffBoard, this$) {
    return function ($receiver) {
      var $receiver_0 = this$;
      var this$TradeOffBoard_0 = this$TradeOffBoard;
      $receiver_0.attrs;
      $receiver.algorithm = this$TradeOffBoard_0.state.algorithm;
      $receiver.scenario = this$TradeOffBoard_0.state.scenario;
      $receiver.domains = this$TradeOffBoard_0.state.domains;
      $receiver.hybrid = this$TradeOffBoard_0.state.hybrid;
      $receiver.architectures = this$TradeOffBoard_0.state.architectures;
      $receiver.refreshBestArchitectures = TradeOffBoard$render$lambda$lambda$lambda$lambda_4(this$TradeOffBoard_0);
      return Unit;
    };
  }
  TradeOffBoard.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_12);
    var $receiver_1 = $receiver_0.css;
    set_textAlign($receiver_1, TextAlign.center);
    set_marginTop($receiver_1, get_px(10));
    set_paddingBottom($receiver_1, get_px(10));
    $receiver_0.child_30b5ua$(configuration(TradeOffBoard$render$lambda$lambda(this, $receiver_0)));
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(br$lambda(null));
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    $receiver_0.child_30b5ua$(preFilters(TradeOffBoard$render$lambda$lambda_0(this, $receiver_0)));
    var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(br$lambda(null));
    $receiver_0.child_30b5ua$($receiver_0_1.create());
    $receiver_0.child_30b5ua$(trustAssumptions(TradeOffBoard$render$lambda$lambda_1(this)));
    var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(br$lambda(null));
    $receiver_0.child_30b5ua$($receiver_0_2.create());
    if (this.state.algorithm === Algorithm$AdHoc_getInstance()) {
      $receiver_0.child_30b5ua$(requirements(TradeOffBoard$render$lambda$lambda_2(this)));
      var $receiver_0_3 = RDOMBuilder.Companion.invoke_f6ihu2$(br$lambda(null));
      $receiver_0.child_30b5ua$($receiver_0_3.create());
    }$receiver_0.child_30b5ua$(bestArchitectures(TradeOffBoard$render$lambda$lambda_3(this, $receiver_0)));
    $receiver.child_30b5ua$($receiver_0.create());
  };
  function TradeOffBoard$changePenalty$lambda(closure$penalty, closure$requirement) {
    return function ($receiver) {
      var $receiver_0 = $receiver.requirementsInputs;
      var first$result;
      first$break: do {
        var tmp$;
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
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
  TradeOffBoard.prototype.changePenalty_0 = function (requirement, penalty) {
    console.log('changePenalty, requirement ' + requirement + ', penalty ' + penalty);
    setState(this, TradeOffBoard$changePenalty$lambda(penalty, requirement));
  };
  function TradeOffBoard$changeThresholdValue$lambda(closure$value, closure$requirement) {
    return function ($receiver) {
      var $receiver_0 = $receiver.requirementsInputs;
      var first$result;
      first$break: do {
        var tmp$;
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
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
    console.log('changeThresholdValue, requirement ' + requirement + ', value ' + value);
    setState(this, TradeOffBoard$changeThresholdValue$lambda(value, requirement));
  };
  function TradeOffBoard$changeThresholdType$lambda(closure$threshold, closure$requirement) {
    return function ($receiver) {
      var $receiver_0 = $receiver.requirementsInputs;
      var first$result;
      first$break: do {
        var tmp$;
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
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
    console.log('changeThresholdType, requirement ' + requirement + ', threshold ' + threshold);
    setState(this, TradeOffBoard$changeThresholdType$lambda(threshold, requirement));
  };
  function TradeOffBoard$changeWeight$lambda(closure$weight, closure$requirement) {
    return function ($receiver) {
      var $receiver_0 = $receiver.requirementsInputs;
      var first$result;
      first$break: do {
        var tmp$;
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
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
  TradeOffBoard.prototype.changeWeight_0 = function (requirement, weight) {
    console.log('changeWeight, requirement ' + requirement + ', weight ' + weight);
    setState(this, TradeOffBoard$changeWeight$lambda(weight, requirement));
  };
  function TradeOffBoard$changeLikelihood$lambda(closure$domain, closure$attacker, closure$newLikelihood) {
    return function () {
      return 'changeLikelihood, domain ' + closure$domain + ', attacker ' + closure$attacker + ', newLikelihood ' + closure$newLikelihood;
    };
  }
  function TradeOffBoard$changeLikelihood$lambda_0(closure$newLikelihood, closure$domain, closure$attacker) {
    return function ($receiver) {
      var $receiver_0 = ensureNotNull($receiver.attackers.get_11rb$(closure$domain));
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
    logger_15.info_nq59yw$(TradeOffBoard$changeLikelihood$lambda(domain, attacker, newLikelihood));
    setState(this, TradeOffBoard$changeLikelihood$lambda_0(newLikelihood, domain, attacker));
  };
  function TradeOffBoard$changeAlgorithm$lambda(closure$newAlgorithm) {
    return function () {
      return "Changing the 'algorithm' state to " + closure$newAlgorithm;
    };
  }
  function TradeOffBoard$changeAlgorithm$lambda_0(closure$newAlgorithm) {
    return function ($receiver) {
      $receiver.algorithm = closure$newAlgorithm;
      return Unit;
    };
  }
  TradeOffBoard.prototype.changeAlgorithm_0 = function (newAlgorithm) {
    logger_15.info_nq59yw$(TradeOffBoard$changeAlgorithm$lambda(newAlgorithm));
    setState(this, TradeOffBoard$changeAlgorithm$lambda_0(newAlgorithm));
  };
  function TradeOffBoard$changeMetric$lambda(closure$newMetric) {
    return function () {
      return "Changing the 'metric' state to " + closure$newMetric;
    };
  }
  function TradeOffBoard$changeMetric$lambda_0(closure$newMetric, this$TradeOffBoard) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.metric = closure$newMetric;
      if ($receiver.scenario === Scenario$CLOUD_getInstance()) {
        switch (closure$newMetric.name) {
          case 'Protection':
            var $receiver_0 = SecurityRequirements$values();
            var destination = ArrayList_init_0($receiver_0.length);
            var tmp$_1;
            for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
              var item = $receiver_0[tmp$_1];
              destination.add_11rb$(new Requirement(item.toString()));
            }

            tmp$ = destination;
            break;
          case 'Goals':
            var $receiver_1 = ScenarioRequirementsCLOUD$values();
            var destination_0 = ArrayList_init_0($receiver_1.length);
            var tmp$_2;
            for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
              var item_0 = $receiver_1[tmp$_2];
              destination_0.add_11rb$(new Requirement(item_0.toString()));
            }

            tmp$ = destination_0;
            break;
          default:tmp$ = Kotlin.noWhenBranchMatched();
            break;
        }
        $receiver.requirementsInputs = tmp$;
        $receiver.performanceRequirementsImpact = this$TradeOffBoard.copyPerformanceImpact_0(scenarioRequirementsCLOUDImpact);
        $receiver.securityRequirementsImpact = this$TradeOffBoard.copySecurityImpact_0(securityRequirementsCLOUDImpact);
      } else if ($receiver.scenario === Scenario$MQTT_getInstance()) {
        switch (closure$newMetric.name) {
          case 'Protection':
            var $receiver_2 = SecurityRequirements$values();
            var destination_1 = ArrayList_init_0($receiver_2.length);
            var tmp$_3;
            for (tmp$_3 = 0; tmp$_3 !== $receiver_2.length; ++tmp$_3) {
              var item_1 = $receiver_2[tmp$_3];
              destination_1.add_11rb$(new Requirement(item_1.toString()));
            }

            tmp$_0 = destination_1;
            break;
          case 'Goals':
            var $receiver_3 = ScenarioRequirementsMQTT$values();
            var destination_2 = ArrayList_init_0($receiver_3.length);
            var tmp$_4;
            for (tmp$_4 = 0; tmp$_4 !== $receiver_3.length; ++tmp$_4) {
              var item_2 = $receiver_3[tmp$_4];
              destination_2.add_11rb$(new Requirement(item_2.toString()));
            }

            tmp$_0 = destination_2;
            break;
          default:tmp$_0 = Kotlin.noWhenBranchMatched();
            break;
        }
        $receiver.requirementsInputs = tmp$_0;
        $receiver.performanceRequirementsImpact = this$TradeOffBoard.copyPerformanceImpact_0(scenarioRequirementsMQTTImpact);
        $receiver.securityRequirementsImpact = this$TradeOffBoard.copySecurityImpact_0(securityRequirementsMQTTImpact);
      }return Unit;
    };
  }
  TradeOffBoard.prototype.changeMetric_0 = function (newMetric) {
    logger_15.info_nq59yw$(TradeOffBoard$changeMetric$lambda(newMetric));
    setState(this, TradeOffBoard$changeMetric$lambda_0(newMetric, this));
  };
  function TradeOffBoard$toggleAssignment$lambda(closure$accepted, closure$domain, closure$entity) {
    return function ($receiver) {
      if (closure$accepted) {
        ensureNotNull($receiver.allowedAssignments.get_11rb$(closure$domain)).add_11rb$(closure$entity);
      } else {
        ensureNotNull($receiver.allowedAssignments.get_11rb$(closure$domain)).remove_11rb$(closure$entity);
      }
      return Unit;
    };
  }
  TradeOffBoard.prototype.toggleAssignment_0 = function (entity, domain, accepted) {
    console.log('toggleAssignment, entity ' + entity + ', domain ' + domain + ', accepted ' + accepted);
    setState(this, TradeOffBoard$toggleAssignment$lambda(accepted, domain, entity));
  };
  function TradeOffBoard$toggleHybrid$lambda(closure$newValue) {
    return function ($receiver) {
      $receiver.hybrid = closure$newValue;
      return Unit;
    };
  }
  TradeOffBoard.prototype.toggleHybrid_0 = function (newValue) {
    console.log('toggleHybrid, newValue ' + newValue);
    setState(this, TradeOffBoard$toggleHybrid$lambda(newValue));
  };
  function TradeOffBoard$changeScenario$lambda(closure$newScenario) {
    return function () {
      return "Changing the 'scenario' state to " + closure$newScenario;
    };
  }
  function TradeOffBoard$changeScenario$lambda_0(closure$newScenario, this$TradeOffBoard) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.scenario = closure$newScenario;
      if ($receiver.scenario === Scenario$CLOUD_getInstance()) {
        $receiver.allowedAssignments = this$TradeOffBoard.copyAssignments_0(Assignment$Companion_getInstance().assignmentsCLOUD);
        $receiver.performanceRequirementsImpact = this$TradeOffBoard.copyPerformanceImpact_0(scenarioRequirementsCLOUDImpact);
        $receiver.securityRequirementsImpact = this$TradeOffBoard.copySecurityImpact_0(securityRequirementsCLOUDImpact);
        var $receiver_0 = DomainsCLOUD$values();
        var destination = ArrayList_init_0($receiver_0.length);
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
          var item = $receiver_0[tmp$_1];
          destination.add_11rb$(item.toString());
        }
        $receiver.domains = destination;
        var $receiver_1 = EntitiesCLOUD$values();
        var destination_0 = ArrayList_init_0($receiver_1.length);
        var tmp$_2;
        for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
          var item_0 = $receiver_1[tmp$_2];
          destination_0.add_11rb$(item_0.toString());
        }
        $receiver.entities = destination_0;
        $receiver.assignments = Assignment$Companion_getInstance().assignmentsCLOUD;
        $receiver.attackers = this$TradeOffBoard.copyAttackers_0(attackersCLOUD);
        switch (this$TradeOffBoard.state.metric.name) {
          case 'Protection':
            var $receiver_2 = SecurityRequirements$values();
            var destination_1 = ArrayList_init_0($receiver_2.length);
            var tmp$_3;
            for (tmp$_3 = 0; tmp$_3 !== $receiver_2.length; ++tmp$_3) {
              var item_1 = $receiver_2[tmp$_3];
              destination_1.add_11rb$(new Requirement(item_1.toString()));
            }

            tmp$ = destination_1;
            break;
          case 'Goals':
            var $receiver_3 = ScenarioRequirementsCLOUD$values();
            var destination_2 = ArrayList_init_0($receiver_3.length);
            var tmp$_4;
            for (tmp$_4 = 0; tmp$_4 !== $receiver_3.length; ++tmp$_4) {
              var item_2 = $receiver_3[tmp$_4];
              destination_2.add_11rb$(new Requirement(item_2.toString()));
            }

            tmp$ = destination_2;
            break;
          default:tmp$ = Kotlin.noWhenBranchMatched();
            break;
        }
        $receiver.requirementsInputs = tmp$;
      } else if ($receiver.scenario === Scenario$MQTT_getInstance()) {
        $receiver.allowedAssignments = this$TradeOffBoard.copyAssignments_0(Assignment$Companion_getInstance().assignmentsMQTT);
        var $receiver_4 = ScenarioRequirementsMQTT$values();
        var destination_3 = ArrayList_init_0($receiver_4.length);
        var tmp$_5;
        for (tmp$_5 = 0; tmp$_5 !== $receiver_4.length; ++tmp$_5) {
          var item_3 = $receiver_4[tmp$_5];
          destination_3.add_11rb$(new Requirement(item_3.toString()));
        }
        $receiver.requirementsInputs = destination_3;
        $receiver.performanceRequirementsImpact = this$TradeOffBoard.copyPerformanceImpact_0(scenarioRequirementsMQTTImpact);
        $receiver.securityRequirementsImpact = this$TradeOffBoard.copySecurityImpact_0(securityRequirementsMQTTImpact);
        var $receiver_5 = DomainsMQTT$values();
        var destination_4 = ArrayList_init_0($receiver_5.length);
        var tmp$_6;
        for (tmp$_6 = 0; tmp$_6 !== $receiver_5.length; ++tmp$_6) {
          var item_4 = $receiver_5[tmp$_6];
          destination_4.add_11rb$(item_4.toString());
        }
        $receiver.domains = destination_4;
        var $receiver_6 = EntitiesMQTT$values();
        var destination_5 = ArrayList_init_0($receiver_6.length);
        var tmp$_7;
        for (tmp$_7 = 0; tmp$_7 !== $receiver_6.length; ++tmp$_7) {
          var item_5 = $receiver_6[tmp$_7];
          destination_5.add_11rb$(item_5.toString());
        }
        $receiver.entities = destination_5;
        $receiver.assignments = Assignment$Companion_getInstance().assignmentsMQTT;
        $receiver.attackers = this$TradeOffBoard.copyAttackers_0(attackersMQTT);
        switch (this$TradeOffBoard.state.metric.name) {
          case 'Protection':
            var $receiver_7 = SecurityRequirements$values();
            var destination_6 = ArrayList_init_0($receiver_7.length);
            var tmp$_8;
            for (tmp$_8 = 0; tmp$_8 !== $receiver_7.length; ++tmp$_8) {
              var item_6 = $receiver_7[tmp$_8];
              destination_6.add_11rb$(new Requirement(item_6.toString()));
            }

            tmp$_0 = destination_6;
            break;
          case 'Goals':
            var $receiver_8 = ScenarioRequirementsMQTT$values();
            var destination_7 = ArrayList_init_0($receiver_8.length);
            var tmp$_9;
            for (tmp$_9 = 0; tmp$_9 !== $receiver_8.length; ++tmp$_9) {
              var item_7 = $receiver_8[tmp$_9];
              destination_7.add_11rb$(new Requirement(item_7.toString()));
            }

            tmp$_0 = destination_7;
            break;
          default:tmp$_0 = Kotlin.noWhenBranchMatched();
            break;
        }
        $receiver.requirementsInputs = tmp$_0;
      }return Unit;
    };
  }
  TradeOffBoard.prototype.changeScenario_0 = function (newScenario) {
    logger_15.info_nq59yw$(TradeOffBoard$changeScenario$lambda(newScenario));
    setState(this, TradeOffBoard$changeScenario$lambda_0(newScenario, this));
  };
  TradeOffBoard.prototype.copyAttackers_0 = function (attackers) {
    var returnValue = LinkedHashMap_init();
    var tmp$;
    tmp$ = attackers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = element.key;
      var value = ArrayList_init();
      returnValue.put_xwzc9p$(tmp$_0, value);
      var tmp$_1;
      tmp$_1 = element.value.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        ensureNotNull(returnValue.get_11rb$(element.key)).add_11rb$(new Attacker(element_0.attacker, element_0.likelihood));
      }
    }
    return returnValue;
  };
  TradeOffBoard.prototype.copyAssignments_0 = function (assignments) {
    var returnValue = HashMap_init();
    var tmp$;
    tmp$ = assignments.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = element.key;
      var value = ArrayList_init();
      returnValue.put_xwzc9p$(tmp$_0, value);
      var tmp$_1;
      tmp$_1 = element.value.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        ensureNotNull(returnValue.get_11rb$(element.key)).add_11rb$(element_0);
      }
    }
    return returnValue;
  };
  TradeOffBoard.prototype.copyPerformanceImpact_0 = function (impact) {
    var returnValue = HashMap_init();
    var tmp$;
    tmp$ = impact.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = element.key;
      var value = HashMap_init();
      returnValue.put_xwzc9p$(tmp$_0, value);
      var tmp$_1;
      tmp$_1 = element.value.entries.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        var $receiver = ensureNotNull(returnValue.get_11rb$(element.key));
        var key = new Assignment(element_0.key.domain, element_0.key.entity);
        var value_0 = element_0.value;
        $receiver.put_xwzc9p$(key, value_0);
      }
    }
    return returnValue;
  };
  TradeOffBoard.prototype.copySecurityImpact_0 = function (impact) {
    var returnValue = HashMap_init();
    var tmp$;
    tmp$ = impact.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = element.key;
      var value = HashMap_init();
      returnValue.put_xwzc9p$(tmp$_0, value);
      var tmp$_1;
      tmp$_1 = element.value.entries.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        var $receiver = ensureNotNull(returnValue.get_11rb$(element.key));
        var key = element_0.key;
        var value_0 = element_0.value;
        $receiver.put_xwzc9p$(key, value_0);
      }
    }
    return returnValue;
  };
  function TradeOffBoard$computePossibleArchitectures$lambda() {
    return 'computePossibleArchitectures, but state is undefined';
  }
  function TradeOffBoard$computePossibleArchitectures$lambda_0(this$TradeOffBoard) {
    return function () {
      return 'computePossibleArchitectures, scenario ' + this$TradeOffBoard.state.scenario + ', algorithm ' + this$TradeOffBoard.state.algorithm + ', metric ' + this$TradeOffBoard.state.metric;
    };
  }
  function TradeOffBoard$computePossibleArchitectures$lambda_1() {
    return 'Derive the list of possible assignments in the form of <domain, entity> tuples';
  }
  function TradeOffBoard$computePossibleArchitectures$lambda_2() {
    return 'Compute the power set of possible assignments, so to have all possible architectures';
  }
  function TradeOffBoard$computePossibleArchitectures$lambda_3() {
    return 'Compute the score of each architecture for each (security or performance) requirement';
  }
  function TradeOffBoard$computePossibleArchitectures$lambda_4(closure$architectures) {
    return function () {
      return 'There are ' + closure$architectures.size + ' architectures';
    };
  }
  TradeOffBoard.prototype.computePossibleArchitectures_0 = function () {
    var tmp$;
    if (equals(this.state, undefined)) {
      logger_15.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda);
      return emptyList();
    }logger_15.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda_0(this));
    logger_15.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda_1);
    var possibleAssignments = ArrayList_init();
    var possibleEntities = HashSet_init();
    var tmp$_0;
    tmp$_0 = this.state.allowedAssignments.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var tmp$_1;
      tmp$_1 = element.value.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        possibleAssignments.add_11rb$(new Assignment(element.key, element_0));
        possibleEntities.add_11rb$(element_0);
      }
    }
    logger_15.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda_2);
    var assignmentsPowerSet = powerSet(possibleAssignments);
    logger_15.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda_3);
    var architectures = ArrayList_init();
    var tmp$_2;
    tmp$_2 = assignmentsPowerSet.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      var destination = ArrayList_init_0(collectionSizeOrDefault(element_1, 10));
      var tmp$_3;
      tmp$_3 = element_1.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination.add_11rb$(item.entity);
      }
      var entitiesInThisArchitecture = destination;
      if (entitiesInThisArchitecture.containsAll_brywnq$(possibleEntities)) {
        var architecture = Architecture$Companion_getInstance().architectureFromAssignments_lwskbt$(toList_0(element_1));
        var scoresArray = this.computeScoresArray_0(element_1);
        var excludeArchitecture = {v: false};
        if (this.state.algorithm === Algorithm$AdHoc_getInstance()) {
          var finalScore = {v: 0};
          var tmp$_4;
          tmp$_4 = scoresArray.entries.iterator();
          loop_label: while (tmp$_4.hasNext()) {
            var element_2 = tmp$_4.next();
            var requirementName = element_2.key;
            var tempScore = element_2.value;
            var $receiver = this.state.requirementsInputs;
            var first$result;
            first$break: do {
              var tmp$_5;
              tmp$_5 = $receiver.iterator();
              while (tmp$_5.hasNext()) {
                var element_3 = tmp$_5.next();
                if (equals(element_3.name, requirementName)) {
                  first$result = element_3;
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
        } else if (this.state.algorithm === Algorithm$Best_getInstance()) {
          architecture.arrayRequirementsScore = scoresArray;
        }if (!excludeArchitecture.v) {
          architectures.add_11rb$(architecture);
        }}}
    logger_15.info_nq59yw$(TradeOffBoard$computePossibleArchitectures$lambda_4(architectures));
    if (architectures.size !== 0) {
      tmp$ = this.orderArchitectures_0(architectures);
    } else {
      tmp$ = architectures;
    }
    return tmp$;
  };
  TradeOffBoard.prototype.computeScoresArray_0 = function (currentArchitecture) {
    var scoresArray = HashMap_init();
    if (this.state.metric === Metric$Goals_getInstance()) {
      var tmp$;
      tmp$ = this.state.performanceRequirementsImpact.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var requirementName = element.key;
        var score = {v: 0};
        var assignmentsAndImpact = element.value;
        var tmp$_0;
        tmp$_0 = currentArchitecture.iterator();
        loop_label: while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          var $receiver = this.state.requirementsInputs;
          var first$result;
          first$break: do {
            var tmp$_1;
            tmp$_1 = $receiver.iterator();
            while (tmp$_1.hasNext()) {
              var element_1 = tmp$_1.next();
              if (equals(element_1.name, requirementName)) {
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
          if (this.state.algorithm === Algorithm$AdHoc_getInstance()) {
            tmp$_3 = requirement.weight;
          } else {
            tmp$_3 = 1;
          }
          score.v = tmp$_2 + Kotlin.imul(tmp$_4, tmp$_3) | 0;
        }
        var value = score.v;
        scoresArray.put_xwzc9p$(requirementName, value);
      }
    } else if (this.state.metric === Metric$Protection_getInstance()) {
      var tmp$_5;
      tmp$_5 = this.state.securityRequirementsImpact.entries.iterator();
      loop_label: while (tmp$_5.hasNext()) {
        var element_2 = tmp$_5.next();
        var tmp$_6, tmp$_7;
        var requirementName_0 = element_2.key.toString();
        var score_0 = {v: 3};
        var targetAndImpact = element_2.value;
        var tmp$_8;
        tmp$_8 = this.state.attackers.entries.iterator();
        while (tmp$_8.hasNext()) {
          var element_3 = tmp$_8.next();
          var domain = element_3.key;
          var attackers = element_3.value;
          var tmp$_9;
          tmp$_9 = attackers.iterator();
          while (tmp$_9.hasNext()) {
            var element_4 = tmp$_9.next();
            if (this.state.domains.contains_11rb$(domain)) {
              var destination = ArrayList_init();
              var tmp$_10;
              tmp$_10 = currentArchitecture.iterator();
              while (tmp$_10.hasNext()) {
                var element_5 = tmp$_10.next();
                if (equals(element_5.domain, domain))
                  destination.add_11rb$(element_5);
              }
              var tmp$_11;
              tmp$_11 = destination.iterator();
              while (tmp$_11.hasNext()) {
                var element_6 = tmp$_11.next();
                var entityInDomain = element_6.entity;
                var a = score_0.v;
                var b = this.getProtectionLevel_0(ensureNotNull(targetAndImpact.get_11rb$(entityInDomain)), element_4.likelihood);
                score_0.v = JsMath.min(a, b);
              }
            } else {
              var firstDomain = split(domain, ['_']).get_za3lpa$(0);
              var secondDomain = split(domain, ['_']).get_za3lpa$(1);
              var entitiesInFirstDomain = ArrayList_init();
              var entitiesInSecondDomain = ArrayList_init();
              var tmp$_12;
              tmp$_12 = currentArchitecture.iterator();
              while (tmp$_12.hasNext()) {
                var element_7 = tmp$_12.next();
                if (equals(element_7.domain, firstDomain)) {
                  entitiesInFirstDomain.add_11rb$(element_7.entity);
                } else if (equals(element_7.domain, secondDomain)) {
                  entitiesInSecondDomain.add_11rb$(element_7.entity);
                }}
              var tmp$_13;
              tmp$_13 = entitiesInFirstDomain.iterator();
              while (tmp$_13.hasNext()) {
                var element_8 = tmp$_13.next();
                var tmp$_14;
                tmp$_14 = entitiesInSecondDomain.iterator();
                while (tmp$_14.hasNext()) {
                  var element_9 = tmp$_14.next();
                  var eventualImpact = targetAndImpact.get_11rb$(element_8 + '_' + element_9);
                  if (eventualImpact == null) {
                    eventualImpact = targetAndImpact.get_11rb$(element_9 + '_' + element_8);
                  }if (eventualImpact != null) {
                    var a_0 = score_0.v;
                    var b_0 = this.getProtectionLevel_0(eventualImpact, element_4.likelihood);
                    score_0.v = JsMath.min(a_0, b_0);
                  }}
              }
            }
          }
        }
        tmp$_7 = score_0.v;
        if (this.state.algorithm === Algorithm$AdHoc_getInstance()) {
          var $receiver_0 = this.state.requirementsInputs;
          var first$result_0;
          first$break: do {
            var tmp$_15;
            tmp$_15 = $receiver_0.iterator();
            while (tmp$_15.hasNext()) {
              var element_10 = tmp$_15.next();
              if (equals(element_10.name, requirementName_0)) {
                first$result_0 = element_10;
                break first$break;
              }}
            throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
          }
           while (false);
          tmp$_6 = first$result_0.weight;
        } else {
          tmp$_6 = 1;
        }
        var value_0 = Kotlin.imul(tmp$_7, tmp$_6);
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
    logger_15.info_nq59yw$(TradeOffBoard$orderArchitectures$lambda(possibleArchitectures));
    switch (this.state.algorithm.name) {
      case 'AdHoc':
        tmp$ = toMutableList(sortedWith(possibleArchitectures, new Comparator(compareByDescending$lambda(TradeOffBoard$orderArchitectures$lambda_0))));
        break;
      case 'Best':
        var currentOptimal = {v: first_1(possibleArchitectures)};
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

        logger_15.info_nq59yw$(TradeOffBoard$orderArchitectures$lambda_1(possibleArchitectures));
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
    logger_15.info_nq59yw$(TradeOffBoard$init$lambda);
    $receiver.algorithm = Algorithm$Best_getInstance();
    $receiver.scenario = Scenario$CLOUD_getInstance();
    $receiver.metric = Metric$Goals_getInstance();
    $receiver.hybrid = false;
    var $receiver_0 = DomainsCLOUD$values();
    var destination = ArrayList_init_0($receiver_0.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var item = $receiver_0[tmp$];
      destination.add_11rb$(item.toString());
    }
    $receiver.domains = destination;
    var $receiver_1 = EntitiesCLOUD$values();
    var destination_0 = ArrayList_init_0($receiver_1.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
      var item_0 = $receiver_1[tmp$_0];
      destination_0.add_11rb$(item_0.toString());
    }
    $receiver.entities = destination_0;
    $receiver.attackers = this.copyAttackers_0(attackersCLOUD);
    $receiver.assignments = Assignment$Companion_getInstance().assignmentsCLOUD;
    $receiver.allowedAssignments = this.copyAssignments_0(Assignment$Companion_getInstance().assignmentsCLOUD);
    var $receiver_2 = ScenarioRequirementsCLOUD$values();
    var destination_1 = ArrayList_init_0($receiver_2.length);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver_2.length; ++tmp$_1) {
      var item_1 = $receiver_2[tmp$_1];
      destination_1.add_11rb$(new Requirement(item_1.toString()));
    }
    $receiver.requirementsInputs = destination_1;
    $receiver.performanceRequirementsImpact = this.copyPerformanceImpact_0(scenarioRequirementsCLOUDImpact);
    $receiver.securityRequirementsImpact = this.copySecurityImpact_0(securityRequirementsCLOUDImpact);
    $receiver.architectures = this.computePossibleArchitectures_0();
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.Scenario.' + name);
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.Algorithm.' + name);
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.Metric.' + name);
    }
  }
  Metric.valueOf_61zpoe$ = Metric$valueOf;
  function DomainsCLOUD(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DomainsCLOUD_initFields() {
    DomainsCLOUD_initFields = function () {
    };
    DomainsCLOUD$Client_instance = new DomainsCLOUD('Client', 0);
    DomainsCLOUD$OnPremise_instance = new DomainsCLOUD('OnPremise', 1);
    DomainsCLOUD$CSP_instance = new DomainsCLOUD('CSP', 2);
  }
  var DomainsCLOUD$Client_instance;
  function DomainsCLOUD$Client_getInstance() {
    DomainsCLOUD_initFields();
    return DomainsCLOUD$Client_instance;
  }
  var DomainsCLOUD$OnPremise_instance;
  function DomainsCLOUD$OnPremise_getInstance() {
    DomainsCLOUD_initFields();
    return DomainsCLOUD$OnPremise_instance;
  }
  var DomainsCLOUD$CSP_instance;
  function DomainsCLOUD$CSP_getInstance() {
    DomainsCLOUD_initFields();
    return DomainsCLOUD$CSP_instance;
  }
  DomainsCLOUD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DomainsCLOUD',
    interfaces: [Enum]
  };
  function DomainsCLOUD$values() {
    return [DomainsCLOUD$Client_getInstance(), DomainsCLOUD$OnPremise_getInstance(), DomainsCLOUD$CSP_getInstance()];
  }
  DomainsCLOUD.values = DomainsCLOUD$values;
  function DomainsCLOUD$valueOf(name) {
    switch (name) {
      case 'Client':
        return DomainsCLOUD$Client_getInstance();
      case 'OnPremise':
        return DomainsCLOUD$OnPremise_getInstance();
      case 'CSP':
        return DomainsCLOUD$CSP_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.DomainsCLOUD.' + name);
    }
  }
  DomainsCLOUD.valueOf_61zpoe$ = DomainsCLOUD$valueOf;
  function EntitiesCLOUD(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EntitiesCLOUD_initFields() {
    EntitiesCLOUD_initFields = function () {
    };
    EntitiesCLOUD$Proxy_instance = new EntitiesCLOUD('Proxy', 0);
    EntitiesCLOUD$RM_instance = new EntitiesCLOUD('RM', 1);
    EntitiesCLOUD$MM_instance = new EntitiesCLOUD('MM', 2);
    EntitiesCLOUD$DM_instance = new EntitiesCLOUD('DM', 3);
  }
  var EntitiesCLOUD$Proxy_instance;
  function EntitiesCLOUD$Proxy_getInstance() {
    EntitiesCLOUD_initFields();
    return EntitiesCLOUD$Proxy_instance;
  }
  var EntitiesCLOUD$RM_instance;
  function EntitiesCLOUD$RM_getInstance() {
    EntitiesCLOUD_initFields();
    return EntitiesCLOUD$RM_instance;
  }
  var EntitiesCLOUD$MM_instance;
  function EntitiesCLOUD$MM_getInstance() {
    EntitiesCLOUD_initFields();
    return EntitiesCLOUD$MM_instance;
  }
  var EntitiesCLOUD$DM_instance;
  function EntitiesCLOUD$DM_getInstance() {
    EntitiesCLOUD_initFields();
    return EntitiesCLOUD$DM_instance;
  }
  EntitiesCLOUD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntitiesCLOUD',
    interfaces: [Enum]
  };
  function EntitiesCLOUD$values() {
    return [EntitiesCLOUD$Proxy_getInstance(), EntitiesCLOUD$RM_getInstance(), EntitiesCLOUD$MM_getInstance(), EntitiesCLOUD$DM_getInstance()];
  }
  EntitiesCLOUD.values = EntitiesCLOUD$values;
  function EntitiesCLOUD$valueOf(name) {
    switch (name) {
      case 'Proxy':
        return EntitiesCLOUD$Proxy_getInstance();
      case 'RM':
        return EntitiesCLOUD$RM_getInstance();
      case 'MM':
        return EntitiesCLOUD$MM_getInstance();
      case 'DM':
        return EntitiesCLOUD$DM_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.EntitiesCLOUD.' + name);
    }
  }
  EntitiesCLOUD.valueOf_61zpoe$ = EntitiesCLOUD$valueOf;
  function DomainsMQTT(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DomainsMQTT_initFields() {
    DomainsMQTT_initFields = function () {
    };
    DomainsMQTT$Client_instance = new DomainsMQTT('Client', 0);
    DomainsMQTT$OnPremise_instance = new DomainsMQTT('OnPremise', 1);
    DomainsMQTT$Edge_instance = new DomainsMQTT('Edge', 2);
    DomainsMQTT$CSP_instance = new DomainsMQTT('CSP', 3);
  }
  var DomainsMQTT$Client_instance;
  function DomainsMQTT$Client_getInstance() {
    DomainsMQTT_initFields();
    return DomainsMQTT$Client_instance;
  }
  var DomainsMQTT$OnPremise_instance;
  function DomainsMQTT$OnPremise_getInstance() {
    DomainsMQTT_initFields();
    return DomainsMQTT$OnPremise_instance;
  }
  var DomainsMQTT$Edge_instance;
  function DomainsMQTT$Edge_getInstance() {
    DomainsMQTT_initFields();
    return DomainsMQTT$Edge_instance;
  }
  var DomainsMQTT$CSP_instance;
  function DomainsMQTT$CSP_getInstance() {
    DomainsMQTT_initFields();
    return DomainsMQTT$CSP_instance;
  }
  DomainsMQTT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DomainsMQTT',
    interfaces: [Enum]
  };
  function DomainsMQTT$values() {
    return [DomainsMQTT$Client_getInstance(), DomainsMQTT$OnPremise_getInstance(), DomainsMQTT$Edge_getInstance(), DomainsMQTT$CSP_getInstance()];
  }
  DomainsMQTT.values = DomainsMQTT$values;
  function DomainsMQTT$valueOf(name) {
    switch (name) {
      case 'Client':
        return DomainsMQTT$Client_getInstance();
      case 'OnPremise':
        return DomainsMQTT$OnPremise_getInstance();
      case 'Edge':
        return DomainsMQTT$Edge_getInstance();
      case 'CSP':
        return DomainsMQTT$CSP_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.DomainsMQTT.' + name);
    }
  }
  DomainsMQTT.valueOf_61zpoe$ = DomainsMQTT$valueOf;
  function EntitiesMQTT(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EntitiesMQTT_initFields() {
    EntitiesMQTT_initFields = function () {
    };
    EntitiesMQTT$Proxy_instance = new EntitiesMQTT('Proxy', 0);
    EntitiesMQTT$MM_instance = new EntitiesMQTT('MM', 1);
    EntitiesMQTT$DM_instance = new EntitiesMQTT('DM', 2);
  }
  var EntitiesMQTT$Proxy_instance;
  function EntitiesMQTT$Proxy_getInstance() {
    EntitiesMQTT_initFields();
    return EntitiesMQTT$Proxy_instance;
  }
  var EntitiesMQTT$MM_instance;
  function EntitiesMQTT$MM_getInstance() {
    EntitiesMQTT_initFields();
    return EntitiesMQTT$MM_instance;
  }
  var EntitiesMQTT$DM_instance;
  function EntitiesMQTT$DM_getInstance() {
    EntitiesMQTT_initFields();
    return EntitiesMQTT$DM_instance;
  }
  EntitiesMQTT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntitiesMQTT',
    interfaces: [Enum]
  };
  function EntitiesMQTT$values() {
    return [EntitiesMQTT$Proxy_getInstance(), EntitiesMQTT$MM_getInstance(), EntitiesMQTT$DM_getInstance()];
  }
  EntitiesMQTT.values = EntitiesMQTT$values;
  function EntitiesMQTT$valueOf(name) {
    switch (name) {
      case 'Proxy':
        return EntitiesMQTT$Proxy_getInstance();
      case 'MM':
        return EntitiesMQTT$MM_getInstance();
      case 'DM':
        return EntitiesMQTT$DM_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.EntitiesMQTT.' + name);
    }
  }
  EntitiesMQTT.valueOf_61zpoe$ = EntitiesMQTT$valueOf;
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.Attackers.' + name);
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.Likelihood.' + name);
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.Impact.' + name);
    }
  }
  Impact.valueOf_61zpoe$ = Impact$valueOf;
  var attackersCLOUD;
  var attackersMQTT;
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.Threshold.' + name);
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
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.SecurityRequirements.' + name);
    }
  }
  SecurityRequirements.valueOf_61zpoe$ = SecurityRequirements$valueOf;
  function ScenarioRequirementsCLOUD(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ScenarioRequirementsCLOUD_initFields() {
    ScenarioRequirementsCLOUD_initFields = function () {
    };
    ScenarioRequirementsCLOUD$Redundancy_instance = new ScenarioRequirementsCLOUD('Redundancy', 0);
    ScenarioRequirementsCLOUD$Scalability_instance = new ScenarioRequirementsCLOUD('Scalability', 1);
    ScenarioRequirementsCLOUD$Reliability_instance = new ScenarioRequirementsCLOUD('Reliability', 2);
    ScenarioRequirementsCLOUD$Maintenance_instance = new ScenarioRequirementsCLOUD('Maintenance', 3);
    ScenarioRequirementsCLOUD$DoS_Resilience_instance = new ScenarioRequirementsCLOUD('DoS_Resilience', 4);
    ScenarioRequirementsCLOUD$Vendor_Lock_in_instance = new ScenarioRequirementsCLOUD('Vendor_Lock_in', 5);
    ScenarioRequirementsCLOUD$On_premise_Savings_instance = new ScenarioRequirementsCLOUD('On_premise_Savings', 6);
    ScenarioRequirementsCLOUD$CSP_Savings_instance = new ScenarioRequirementsCLOUD('CSP_Savings', 7);
  }
  var ScenarioRequirementsCLOUD$Redundancy_instance;
  function ScenarioRequirementsCLOUD$Redundancy_getInstance() {
    ScenarioRequirementsCLOUD_initFields();
    return ScenarioRequirementsCLOUD$Redundancy_instance;
  }
  var ScenarioRequirementsCLOUD$Scalability_instance;
  function ScenarioRequirementsCLOUD$Scalability_getInstance() {
    ScenarioRequirementsCLOUD_initFields();
    return ScenarioRequirementsCLOUD$Scalability_instance;
  }
  var ScenarioRequirementsCLOUD$Reliability_instance;
  function ScenarioRequirementsCLOUD$Reliability_getInstance() {
    ScenarioRequirementsCLOUD_initFields();
    return ScenarioRequirementsCLOUD$Reliability_instance;
  }
  var ScenarioRequirementsCLOUD$Maintenance_instance;
  function ScenarioRequirementsCLOUD$Maintenance_getInstance() {
    ScenarioRequirementsCLOUD_initFields();
    return ScenarioRequirementsCLOUD$Maintenance_instance;
  }
  var ScenarioRequirementsCLOUD$DoS_Resilience_instance;
  function ScenarioRequirementsCLOUD$DoS_Resilience_getInstance() {
    ScenarioRequirementsCLOUD_initFields();
    return ScenarioRequirementsCLOUD$DoS_Resilience_instance;
  }
  var ScenarioRequirementsCLOUD$Vendor_Lock_in_instance;
  function ScenarioRequirementsCLOUD$Vendor_Lock_in_getInstance() {
    ScenarioRequirementsCLOUD_initFields();
    return ScenarioRequirementsCLOUD$Vendor_Lock_in_instance;
  }
  var ScenarioRequirementsCLOUD$On_premise_Savings_instance;
  function ScenarioRequirementsCLOUD$On_premise_Savings_getInstance() {
    ScenarioRequirementsCLOUD_initFields();
    return ScenarioRequirementsCLOUD$On_premise_Savings_instance;
  }
  var ScenarioRequirementsCLOUD$CSP_Savings_instance;
  function ScenarioRequirementsCLOUD$CSP_Savings_getInstance() {
    ScenarioRequirementsCLOUD_initFields();
    return ScenarioRequirementsCLOUD$CSP_Savings_instance;
  }
  ScenarioRequirementsCLOUD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScenarioRequirementsCLOUD',
    interfaces: [Enum]
  };
  function ScenarioRequirementsCLOUD$values() {
    return [ScenarioRequirementsCLOUD$Redundancy_getInstance(), ScenarioRequirementsCLOUD$Scalability_getInstance(), ScenarioRequirementsCLOUD$Reliability_getInstance(), ScenarioRequirementsCLOUD$Maintenance_getInstance(), ScenarioRequirementsCLOUD$DoS_Resilience_getInstance(), ScenarioRequirementsCLOUD$Vendor_Lock_in_getInstance(), ScenarioRequirementsCLOUD$On_premise_Savings_getInstance(), ScenarioRequirementsCLOUD$CSP_Savings_getInstance()];
  }
  ScenarioRequirementsCLOUD.values = ScenarioRequirementsCLOUD$values;
  function ScenarioRequirementsCLOUD$valueOf(name) {
    switch (name) {
      case 'Redundancy':
        return ScenarioRequirementsCLOUD$Redundancy_getInstance();
      case 'Scalability':
        return ScenarioRequirementsCLOUD$Scalability_getInstance();
      case 'Reliability':
        return ScenarioRequirementsCLOUD$Reliability_getInstance();
      case 'Maintenance':
        return ScenarioRequirementsCLOUD$Maintenance_getInstance();
      case 'DoS_Resilience':
        return ScenarioRequirementsCLOUD$DoS_Resilience_getInstance();
      case 'Vendor_Lock_in':
        return ScenarioRequirementsCLOUD$Vendor_Lock_in_getInstance();
      case 'On_premise_Savings':
        return ScenarioRequirementsCLOUD$On_premise_Savings_getInstance();
      case 'CSP_Savings':
        return ScenarioRequirementsCLOUD$CSP_Savings_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.ScenarioRequirementsCLOUD.' + name);
    }
  }
  ScenarioRequirementsCLOUD.valueOf_61zpoe$ = ScenarioRequirementsCLOUD$valueOf;
  function ScenarioRequirementsMQTT(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ScenarioRequirementsMQTT_initFields() {
    ScenarioRequirementsMQTT_initFields = function () {
    };
    ScenarioRequirementsMQTT$Redundancy_instance = new ScenarioRequirementsMQTT('Redundancy', 0);
    ScenarioRequirementsMQTT$Scalability_instance = new ScenarioRequirementsMQTT('Scalability', 1);
    ScenarioRequirementsMQTT$Reliability_instance = new ScenarioRequirementsMQTT('Reliability', 2);
    ScenarioRequirementsMQTT$Maintenance_instance = new ScenarioRequirementsMQTT('Maintenance', 3);
    ScenarioRequirementsMQTT$DoS_Resilience_instance = new ScenarioRequirementsMQTT('DoS_Resilience', 4);
    ScenarioRequirementsMQTT$Vendor_Lock_in_instance = new ScenarioRequirementsMQTT('Vendor_Lock_in', 5);
    ScenarioRequirementsMQTT$On_premise_Savings_instance = new ScenarioRequirementsMQTT('On_premise_Savings', 6);
    ScenarioRequirementsMQTT$CSP_Savings_instance = new ScenarioRequirementsMQTT('CSP_Savings', 7);
    ScenarioRequirementsMQTT$Latency_instance = new ScenarioRequirementsMQTT('Latency', 8);
    ScenarioRequirementsMQTT$Throughput_instance = new ScenarioRequirementsMQTT('Throughput', 9);
  }
  var ScenarioRequirementsMQTT$Redundancy_instance;
  function ScenarioRequirementsMQTT$Redundancy_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$Redundancy_instance;
  }
  var ScenarioRequirementsMQTT$Scalability_instance;
  function ScenarioRequirementsMQTT$Scalability_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$Scalability_instance;
  }
  var ScenarioRequirementsMQTT$Reliability_instance;
  function ScenarioRequirementsMQTT$Reliability_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$Reliability_instance;
  }
  var ScenarioRequirementsMQTT$Maintenance_instance;
  function ScenarioRequirementsMQTT$Maintenance_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$Maintenance_instance;
  }
  var ScenarioRequirementsMQTT$DoS_Resilience_instance;
  function ScenarioRequirementsMQTT$DoS_Resilience_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$DoS_Resilience_instance;
  }
  var ScenarioRequirementsMQTT$Vendor_Lock_in_instance;
  function ScenarioRequirementsMQTT$Vendor_Lock_in_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$Vendor_Lock_in_instance;
  }
  var ScenarioRequirementsMQTT$On_premise_Savings_instance;
  function ScenarioRequirementsMQTT$On_premise_Savings_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$On_premise_Savings_instance;
  }
  var ScenarioRequirementsMQTT$CSP_Savings_instance;
  function ScenarioRequirementsMQTT$CSP_Savings_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$CSP_Savings_instance;
  }
  var ScenarioRequirementsMQTT$Latency_instance;
  function ScenarioRequirementsMQTT$Latency_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$Latency_instance;
  }
  var ScenarioRequirementsMQTT$Throughput_instance;
  function ScenarioRequirementsMQTT$Throughput_getInstance() {
    ScenarioRequirementsMQTT_initFields();
    return ScenarioRequirementsMQTT$Throughput_instance;
  }
  ScenarioRequirementsMQTT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScenarioRequirementsMQTT',
    interfaces: [Enum]
  };
  function ScenarioRequirementsMQTT$values() {
    return [ScenarioRequirementsMQTT$Redundancy_getInstance(), ScenarioRequirementsMQTT$Scalability_getInstance(), ScenarioRequirementsMQTT$Reliability_getInstance(), ScenarioRequirementsMQTT$Maintenance_getInstance(), ScenarioRequirementsMQTT$DoS_Resilience_getInstance(), ScenarioRequirementsMQTT$Vendor_Lock_in_getInstance(), ScenarioRequirementsMQTT$On_premise_Savings_getInstance(), ScenarioRequirementsMQTT$CSP_Savings_getInstance(), ScenarioRequirementsMQTT$Latency_getInstance(), ScenarioRequirementsMQTT$Throughput_getInstance()];
  }
  ScenarioRequirementsMQTT.values = ScenarioRequirementsMQTT$values;
  function ScenarioRequirementsMQTT$valueOf(name) {
    switch (name) {
      case 'Redundancy':
        return ScenarioRequirementsMQTT$Redundancy_getInstance();
      case 'Scalability':
        return ScenarioRequirementsMQTT$Scalability_getInstance();
      case 'Reliability':
        return ScenarioRequirementsMQTT$Reliability_getInstance();
      case 'Maintenance':
        return ScenarioRequirementsMQTT$Maintenance_getInstance();
      case 'DoS_Resilience':
        return ScenarioRequirementsMQTT$DoS_Resilience_getInstance();
      case 'Vendor_Lock_in':
        return ScenarioRequirementsMQTT$Vendor_Lock_in_getInstance();
      case 'On_premise_Savings':
        return ScenarioRequirementsMQTT$On_premise_Savings_getInstance();
      case 'CSP_Savings':
        return ScenarioRequirementsMQTT$CSP_Savings_getInstance();
      case 'Latency':
        return ScenarioRequirementsMQTT$Latency_getInstance();
      case 'Throughput':
        return ScenarioRequirementsMQTT$Throughput_getInstance();
      default:throwISE('No enum constant eu.fbk.st.cryptoac.ui.content.tradeoffboard.ScenarioRequirementsMQTT.' + name);
    }
  }
  ScenarioRequirementsMQTT.valueOf_61zpoe$ = ScenarioRequirementsMQTT$valueOf;
  var scenarioRequirementsCLOUDImpact;
  var scenarioRequirementsMQTTImpact;
  var securityRequirementsCLOUDImpact;
  var securityRequirementsMQTTImpact;
  function getImageFromEntity(entity) {
    if (equals(entity, EntitiesCLOUD$Proxy_getInstance().toString()) || equals(entity, EntitiesMQTT$Proxy_getInstance().toString()))
      return 'proxy.png';
    else if (equals(entity, EntitiesCLOUD$RM_getInstance().toString()))
      return 'rm.png';
    else if (equals(entity, EntitiesCLOUD$MM_getInstance().toString()) || equals(entity, EntitiesMQTT$MM_getInstance().toString()))
      return 'mm.png';
    else if (equals(entity, EntitiesCLOUD$DM_getInstance().toString()) || equals(entity, EntitiesMQTT$DM_getInstance().toString()))
      return 'dm.png';
    else
      throw Exception_init('error todo fix this, entity does not have image');
  }
  function styledTd$lambda_3(it) {
    return new TD_init(html.emptyMap, it);
  }
  function tr$lambda_2(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledThead$lambda_2(it) {
    return new THEAD_init(html.emptyMap, it);
  }
  function tbody$lambda_2(closure$classes) {
    return function (it) {
      return new TBODY_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_13(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledTable$lambda_2(it) {
    return new TABLE_init(html.emptyMap, it);
  }
  function TrustAssumptions() {
    RComponent_init(this);
  }
  function TrustAssumptions$render$lambda$lambda$lambda$lambda$lambda$lambda(this$TrustAssumptions) {
    return function (domain, attacker, newLikelihood) {
      this$TrustAssumptions.props.handleChangeLikelihood(domain, attacker, newLikelihood);
      return Unit;
    };
  }
  function TrustAssumptions$render$lambda$lambda$lambda$lambda$lambda(closure$attackers, closure$iterator, closure$domain, this$TrustAssumptions) {
    return function ($receiver) {
      $receiver.defaultValue = Likelihood$High_getInstance();
      $receiver.last = (closure$attackers.size === 1 && !closure$iterator.hasNext());
      $receiver.domain = closure$domain;
      $receiver.attacker = first_1(closure$attackers).attacker;
      $receiver.handleChangeLikelihood = TrustAssumptions$render$lambda$lambda$lambda$lambda$lambda$lambda(this$TrustAssumptions);
      return Unit;
    };
  }
  function TrustAssumptions$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TrustAssumptions) {
    return function (domain, attacker, newLikelihood) {
      this$TrustAssumptions.props.handleChangeLikelihood(domain, attacker, newLikelihood);
      return Unit;
    };
  }
  function TrustAssumptions$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$index, closure$attackers, closure$iterator, closure$domain, closure$attacker, this$TrustAssumptions) {
    return function ($receiver) {
      $receiver.defaultValue = Likelihood$High_getInstance();
      $receiver.last = (closure$index === (closure$attackers.size - 1 | 0) && !closure$iterator.hasNext());
      $receiver.domain = closure$domain;
      $receiver.attacker = closure$attacker.attacker;
      $receiver.handleChangeLikelihood = TrustAssumptions$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$TrustAssumptions);
      return Unit;
    };
  }
  function TrustAssumptions$render$lambda(this$TrustAssumptions) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_13);
      var $receiver_1 = $receiver_0.css;
      set_borderTopLeftRadius($receiver_1, get_px(15));
      set_borderTopRightRadius($receiver_1, get_px(15));
      set_padding($receiver_1, '5px');
      set_backgroundColor($receiver_1, new Color('#343a40'));
      set_borderColor($receiver_1, new Color('#343a40'));
      set_color($receiver_1, new Color('white'));
      $receiver_0.unaryPlus_pdl1vz$('Trust Assumptions');
      $receiver.child_30b5ua$($receiver_0.create());
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTable$lambda_2);
      var this$TrustAssumptions_0 = this$TrustAssumptions;
      var $receiver_2 = $receiver_0_0.css;
      set_borderCollapse($receiver_2, BorderCollapse.collapse);
      set_width($receiver_2, get_pct(100));
      var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledThead$lambda_2);
      set_borderBottom($receiver_0_1.css, '1px solid rgba(173, 173, 173, 0.2)');
      var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda_2(null));
      var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_3);
      set_padding($receiver_0_3.css, '4px');
      $receiver_0_2.child_30b5ua$($receiver_0_3.create());
      var $receiver_0_4 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_3);
      set_padding($receiver_0_4.css, '4px');
      $receiver_0_4.unaryPlus_pdl1vz$('Attacker');
      $receiver_0_2.child_30b5ua$($receiver_0_4.create());
      var $receiver_0_5 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_3);
      set_padding($receiver_0_5.css, '4px');
      $receiver_0_5.attrs.colSpan = '2';
      $receiver_0_5.unaryPlus_pdl1vz$('Likelihood');
      $receiver_0_2.child_30b5ua$($receiver_0_5.create());
      $receiver_0_1.child_30b5ua$($receiver_0_2.create());
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      var $receiver_0_6 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda_2(null));
      var iterator = this$TrustAssumptions_0.props.attackers.entries.iterator();
      while (iterator.hasNext()) {
        var entry = iterator.next();
        var domain = entry.key;
        var attackers = entry.value;
        var $receiver_0_7 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda_2(null));
        var $receiver_0_8 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_3);
        var $receiver_3 = $receiver_0_8.css;
        set_paddingLeft($receiver_3, get_px(10));
        set_width($receiver_3, get_px(160));
        set_textAlign($receiver_3, TextAlign.left);
        if (!iterator.hasNext()) {
          set_borderBottomLeftRadius($receiver_3, get_px(15));
        }$receiver_0_8.attrs.rowSpan = attackers.size.toString();
        $receiver_0_8.unaryPlus_pdl1vz$(domain);
        $receiver_0_7.child_30b5ua$($receiver_0_8.create());
        $receiver_0_7.child_30b5ua$(trustAssumptionsLikelihood(TrustAssumptions$render$lambda$lambda$lambda$lambda$lambda(attackers, iterator, domain, this$TrustAssumptions_0)));
        $receiver_0_6.child_30b5ua$($receiver_0_7.create());
        var tmp$, tmp$_0;
        var index = 0;
        tmp$ = attackers.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
          if (index_0 !== 0) {
            var $receiver_0_9 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda_2(null));
            $receiver_0_9.child_30b5ua$(trustAssumptionsLikelihood(TrustAssumptions$render$lambda$lambda$lambda$lambda$lambda$lambda_0(index_0, attackers, iterator, domain, item, this$TrustAssumptions_0)));
            $receiver_0_6.child_30b5ua$($receiver_0_9.create());
          }}
      }
      $receiver_0_0.child_30b5ua$($receiver_0_6.create());
      $receiver.child_30b5ua$($receiver_0_0.create());
      return Unit;
    };
  }
  TrustAssumptions.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$_material_ui_core.Paper, TrustAssumptions$render$lambda(this));
  };
  TrustAssumptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrustAssumptions',
    interfaces: [RComponent]
  };
  function trustAssumptions$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function trustAssumptions$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(TrustAssumptions), trustAssumptions$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function trustAssumptions(handler) {
    return ensureNotNull(createElement(trustAssumptions$lambda(handler)));
  }
  function styledDiv$lambda_14(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function td$lambda(closure$classes) {
    return function (it) {
      return new TD_init_0(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledTd$lambda_4(it) {
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
      return Unit;
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
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_4);
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
    var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledTd$lambda_4);
    var $receiver_2 = $receiver_0_1.css;
    if (this.props.last) {
      set_borderBottomRightRadius($receiver_2, get_px(15));
    }var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_14);
    $receiver_0_2.key = this.props.domain;
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
  function styledSub$lambda(it) {
    return new SUB_init(html.emptyMap, it);
  }
  function styledP$lambda(it) {
    return new P_init_0(html.emptyMap, it);
  }
  function styledDiv$lambda_15(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledSpan$lambda_1(it) {
    return new SPAN_init(html.emptyMap, it);
  }
  function styledA$lambda(closure$href, closure$target) {
    return function (it) {
      return new A_init(attributesMapOf_1(['href', closure$href, 'target', closure$target]), it);
    };
  }
  function post$lambda_1($receiver) {
    return Unit;
  }
  function patch$lambda_0($receiver) {
    return Unit;
  }
  function submitFormWithBinaryData$lambda($receiver) {
    return Unit;
  }
  function delete$lambda($receiver) {
    return Unit;
  }
  function get$lambda_1($receiver) {
    return Unit;
  }
  function logger$lambda_16() {
    return Unit;
  }
  var logger_16;
  function Sidebar() {
    RComponent_init(this);
    this.adminCryptoACFormsRBACCLOUD_0 = listOf([new CryptoACFormData('add_user', 'Add User', $module$react_icons_fa.FaUserPlus, API_getInstance().PROXY + API_getInstance().USERS, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACCLOUD$lambda(this)), new CryptoACFormData('add_role', 'Add Role', $module$react_icons_fa.FaUserSecret, API_getInstance().PROXY + API_getInstance().ROLES, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACCLOUD$lambda_0(this)), new CryptoACFormData('assign_user_to_role', 'Assign User to Role', $module$react_icons_fa.FaUserFriends, API_getInstance().PROXY + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))]), Sidebar$adminCryptoACFormsRBACCLOUD$lambda_1(this)), new CryptoACFormData('assign_permission_to_role', 'Assign Permission to Role', $module$react_icons_fa.FaUserShield, API_getInstance().PROXY + API_getInstance().PERMISSIONS, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType$radio_getInstance(), listOf([PermissionType$READ_getInstance().toString(), PermissionType$READWRITE_getInstance().toString()]), PermissionType$READ_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACCLOUD$lambda_2(this), true), new CryptoACFormData('delete_user', 'Delete User', $module$react_icons_fa.FaUserMinus, API_getInstance().PROXY + API_getInstance().USERS, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACCLOUD$lambda_3(this)), new CryptoACFormData('delete_role', 'Delete Role', $module$react_icons_fa.FaUserNinja, API_getInstance().PROXY + API_getInstance().ROLES, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACCLOUD$lambda_4(this)), new CryptoACFormData('delete_file', 'Delete File', $module$react_icons_fa.FaFileExcel, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACCLOUD$lambda_5(this)), new CryptoACFormData('revoke_user_from_role', 'Revoke User from Role', $module$react_icons_fa.FaUserTimes, API_getInstance().PROXY + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))]), Sidebar$adminCryptoACFormsRBACCLOUD$lambda_6(this)), new CryptoACFormData('revoke_permission_from_role', 'Revoke Permission from Role', $module$react_icons_fa.FaUserLock, API_getInstance().PROXY + API_getInstance().PERMISSIONS, HttpMethod.Companion.Delete, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType$radio_getInstance(), listOf([PermissionType$READWRITE_getInstance().toString(), PermissionType$WRITE_getInstance().toString()]), PermissionType$READWRITE_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACCLOUD$lambda_7(this), true)]);
    this.userCryptoACFormsRBACCloud_0 = listOf([new CryptoACFormData('add_file', 'Add File', $module$react_icons_fa.FaFileMedical, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Post, CoreType$RBAC_CLOUD_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, SERVER_getInstance().FILE_NAME, InputType$file_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ENFORCEMENT, SERVER_getInstance().ENFORCEMENT, InputType$radio_getInstance(), listOf([EnforcementType$COMBINED_getInstance().toString(), EnforcementType$TRADITIONAL_getInstance().toString()]), EnforcementType$COMBINED_getInstance().toString()))]), Sidebar$userCryptoACFormsRBACCloud$lambda(this)), new CryptoACFormData('write_file', 'Write File', $module$react_icons_fa.FaFileSignature, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Patch, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, SERVER_getInstance().FILE_NAME, InputType$file_getInstance()))), Sidebar$userCryptoACFormsRBACCloud$lambda_0(this)), new CryptoACFormData('read_file', 'Read File', $module$react_icons_fa.FaFileDownload, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Get, CoreType$RBAC_CLOUD_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, replace(SERVER_getInstance().FILE_NAME, '_', ' '), InputType$text_getInstance()))), Sidebar$userCryptoACFormsRBACCloud$lambda_1(this))]);
    this.adminCryptoACFormsRBACMQTT_0 = listOf([new CryptoACFormData('add_user', 'Add User', $module$react_icons_fa.FaUserPlus, API_getInstance().PROXY + API_getInstance().USERS, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACMQTT$lambda(this)), new CryptoACFormData('add_role', 'Add Role', $module$react_icons_fa.FaUserSecret, API_getInstance().PROXY + API_getInstance().ROLES, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACMQTT$lambda_0(this)), new CryptoACFormData('add_file', 'Add Topic', $module$react_icons_fa.FaFileMedical, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, SERVER_getInstance().FILE_NAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ENFORCEMENT, SERVER_getInstance().ENFORCEMENT, InputType$radio_getInstance(), listOf([EnforcementType$COMBINED_getInstance().toString(), EnforcementType$TRADITIONAL_getInstance().toString()]), EnforcementType$COMBINED_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_1(this)), new CryptoACFormData('assign_user_to_role', 'Assign User to Role', $module$react_icons_fa.FaUserFriends, API_getInstance().PROXY + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_2(this)), new CryptoACFormData('assign_permission_to_role', 'Assign Permission to Role', $module$react_icons_fa.FaUserShield, API_getInstance().PROXY + API_getInstance().PERMISSIONS, HttpMethod.Companion.Post, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType$radio_getInstance(), listOf([PermissionType$READ_getInstance().toString(), PermissionType$READWRITE_getInstance().toString()]), PermissionType$READ_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_3(this), true), new CryptoACFormData('delete_user', 'Delete User', $module$react_icons_fa.FaUserMinus, API_getInstance().PROXY + API_getInstance().USERS, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACMQTT$lambda_4(this)), new CryptoACFormData('delete_role', 'Delete Role', $module$react_icons_fa.FaUserNinja, API_getInstance().PROXY + API_getInstance().ROLES, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACMQTT$lambda_5(this)), new CryptoACFormData('delete_file', 'Delete Topic', $module$react_icons_fa.FaFileExcel, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance()))), Sidebar$adminCryptoACFormsRBACMQTT$lambda_6(this)), new CryptoACFormData('revoke_user_from_role', 'Revoke User from Role', $module$react_icons_fa.FaUserTimes, API_getInstance().PROXY + API_getInstance().ASSIGNMENTS, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().USERNAME, SERVER_getInstance().USERNAME, InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance()))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_7(this)), new CryptoACFormData('revoke_permission_from_role', 'Revoke Permission from Role', $module$react_icons_fa.FaUserLock, API_getInstance().PROXY + API_getInstance().PERMISSIONS, HttpMethod.Companion.Delete, CoreType$RBAC_MQTT_getInstance(), listOf([listOf_0(new CryptoACFormField(SERVER_getInstance().ROLE_NAME, replace(SERVER_getInstance().ROLE_NAME, '_', ' '), InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance())), listOf_0(new CryptoACFormField(SERVER_getInstance().PERMISSION, SERVER_getInstance().PERMISSION, InputType$radio_getInstance(), listOf([PermissionType$READWRITE_getInstance().toString(), PermissionType$WRITE_getInstance().toString()]), PermissionType$READWRITE_getInstance().toString()))]), Sidebar$adminCryptoACFormsRBACMQTT$lambda_8(this), true)]);
    this.userCryptoACFormsRBACMQTT_0 = listOf([new CryptoACFormData('write_file', 'Publish to Topic', $module$react_icons_fa.FaFileSignature, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Patch, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf([new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance()), new CryptoACFormField(SERVER_getInstance().FILE_CONTENT, 'Message', InputType$text_getInstance())])), Sidebar$userCryptoACFormsRBACMQTT$lambda(this)), new CryptoACFormData('read_file', 'Subscribe to Topic', $module$react_icons_fa.FaFileDownload, API_getInstance().PROXY + API_getInstance().FILES, HttpMethod.Companion.Get, CoreType$RBAC_MQTT_getInstance(), listOf_0(listOf_0(new CryptoACFormField(SERVER_getInstance().FILE_NAME, 'Topic Name', InputType$text_getInstance()))), Sidebar$userCryptoACFormsRBACMQTT$lambda_0(this))]);
    this.adminCryptoACFormsRBACMOCK_0 = emptyList();
    this.userCryptoACFormsRBACMOCK_0 = emptyList();
  }
  function Sidebar$render$lambda$lambda(this$Sidebar) {
    return function ($receiver) {
      $receiver.collapsed = this$Sidebar.props.sidebarIsCollapsed;
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
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Sidebar) {
    return function ($receiver) {
      $receiver.color = 'primary';
      $receiver.onClick = Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Sidebar);
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaCaretLeft, Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.invoke_qk0v40$($module$react_icons_fa.FaCaretRight, Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda_0(this$Sidebar) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Sidebar));
      if (!this$Sidebar.props.sidebarIsCollapsed) {
        $receiver.child_30b5ua$(ensureNotNull(createElement(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_0)));
      } else {
        $receiver.child_30b5ua$(ensureNotNull(createElement(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_1)));
      }
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Sidebar) {
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
      $receiver.onChange = Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$Sidebar);
      var $receiver_0 = CoreType$values();
      var destination = ArrayList_init_0($receiver_0.length);
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
  function Sidebar$render$lambda$lambda_0(this$Sidebar) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_15);
      var this$Sidebar_0 = this$Sidebar;
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
      if (!this$Sidebar_0.props.sidebarIsCollapsed) {
        padding($receiver_1, get_px(24));
      }var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledP$lambda);
      var $receiver_2 = $receiver_0_0.css;
      set_fontSize($receiver_2, get_px(18));
      set_display($receiver_2, Display.inline);
      set_onClickFunction($receiver_0_0.attrs, Sidebar$render$lambda$lambda$lambda$lambda$lambda(this$Sidebar_0));
      $receiver_0_0.unaryPlus_pdl1vz$(!this$Sidebar_0.props.sidebarIsCollapsed ? 'CryptoAC' : '');
      var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSub$lambda);
      $receiver_0_1.domProps.className = 'badge red';
      var $receiver_3 = $receiver_0_1.css;
      set_marginLeft($receiver_3, !this$Sidebar_0.props.sidebarIsCollapsed ? get_px(5) : get_px(0));
      set_fontSize($receiver_3, get_px(10));
      set_cursor($receiver_3, Cursor.pointer);
      $receiver_0_1.unaryPlus_pdl1vz$(this$Sidebar_0.props.coreType.toString());
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_15);
      set_display($receiver_0_2.css, !this$Sidebar_0.props.sidebarIsCollapsed ? Display.inline : Display.block);
      $receiver_0_2.invoke_qk0v40$($module$_material_ui_core.IconButton, Sidebar$render$lambda$lambda$lambda$lambda$lambda_0(this$Sidebar_0));
      $receiver_0.child_30b5ua$($receiver_0_2.create());
      var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_15);
      var $receiver_4 = $receiver_0_3.css;
      var tmp$;
      if (!this$Sidebar_0.state.displayCoreTypeRadio || this$Sidebar_0.props.sidebarIsCollapsed) {
        tmp$ = Display.none;
      } else {
        tmp$ = Display.initial;
      }
      set_display($receiver_4, tmp$);
      $receiver_0_3.child_30b5ua$(cryptoACRadioGroup(Sidebar$render$lambda$lambda$lambda$lambda$lambda_1(this$Sidebar_0)));
      $receiver_0.child_30b5ua$($receiver_0_3.create());
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$cryptoACFormData) {
    return function ($receiver) {
      $receiver.invoke_qk0v40$(closure$cryptoACFormData.icon, Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$cryptoACFormData) {
    return function ($receiver) {
      $receiver.title = closure$cryptoACFormData.submitButtonText;
      $receiver.icon = ensureNotNull(createElement(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$cryptoACFormData)));
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$cryptoACFormData, this$, this$Sidebar) {
    return function ($receiver) {
      this$.submitButtonText = closure$cryptoACFormData.submitButtonText;
      this$.endpoint = closure$cryptoACFormData.endpoint;
      this$.coreType = closure$cryptoACFormData.coreType;
      this$.method = closure$cryptoACFormData.method;
      this$.cryptoACFormFields = closure$cryptoACFormData.cryptoACFormFields;
      this$.handleSubmitEvent = closure$cryptoACFormData.submit;
      this$.handleChangeBackdropIsOpen = this$Sidebar.props.handleChangeBackdropIsOpen;
      this$.handleDisplayCryptoACAlert = this$Sidebar.props.handleDisplayAlert;
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$cryptoACFormData, this$Sidebar, this$) {
    return function ($receiver) {
      this$.attrs_37755u$(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$cryptoACFormData, $receiver, this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda_2(closure$cryptoACFormData, this$Sidebar) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$cryptoACFormData));
      $receiver.child_30b5ua$(cryptoACForm(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$cryptoACFormData, this$Sidebar, $receiver)));
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda(closure$cryptoACFormData, this$Sidebar) {
    return function ($receiver) {
      $receiver.attrs.iconShape = 'circle';
      $receiver.invoke_qk0v40$($module$react_pro_sidebar.SubMenu, Sidebar$render$lambda$lambda$lambda$lambda$lambda_2(closure$cryptoACFormData, this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda_1(this$Sidebar) {
    return function ($receiver) {
      var tmp$;
      if (this$Sidebar.props.userIsLogged && this$Sidebar.props.userHasProfile) {
        switch (this$Sidebar.props.coreType.name) {
          case 'RBAC_CLOUD':
            tmp$ = this$Sidebar.props.userIsAdmin ? plus_0(this$Sidebar.adminCryptoACFormsRBACCLOUD_0, this$Sidebar.userCryptoACFormsRBACCloud_0) : this$Sidebar.userCryptoACFormsRBACCloud_0;
            break;
          case 'RBAC_MQTT':
            tmp$ = this$Sidebar.props.userIsAdmin ? plus_0(this$Sidebar.adminCryptoACFormsRBACMQTT_0, this$Sidebar.userCryptoACFormsRBACMQTT_0) : this$Sidebar.userCryptoACFormsRBACMQTT_0;
            break;
          case 'RBAC_MOCK':
            if (development) {
              tmp$ = this$Sidebar.props.userIsAdmin ? plus_0(this$Sidebar.adminCryptoACFormsRBACMOCK_0, this$Sidebar.userCryptoACFormsRBACMOCK_0) : this$Sidebar.userCryptoACFormsRBACMOCK_0;
            } else {
              var message = 'Using MOCK core when not in development mode';
              logger_16.error_nq59yw$(Sidebar$render$lambda$lambda$lambda(message));
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
          var this$Sidebar_0 = this$Sidebar;
          $receiver.key = element.key;
          $receiver.invoke_qk0v40$($module$react_pro_sidebar.Menu, Sidebar$render$lambda$lambda$lambda$lambda(element, this$Sidebar_0));
          if (element.divider) {
            var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_15);
            set_borderBottom($receiver_0.css, '1px solid rgba(173, 173, 173, 0.2)');
            $receiver.child_30b5ua$($receiver_0.create());
          }}
      }return Unit;
    };
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    set_color($receiver, new Color('#d8d8d8'));
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    set_color($receiver, new Color('#d8d8d8'));
    return Unit;
  }
  function Sidebar$render$lambda$lambda$lambda$lambda$lambda_4(this$Sidebar) {
    return function (it) {
      this$Sidebar.props.handleToggleShowTradeOffBoard();
      return Unit;
    };
  }
  function Sidebar$render$lambda$lambda_2(this$Sidebar) {
    return function ($receiver) {
      var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_15);
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
      $receiver_2.hover_lx8bml$(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_5);
      if (!this$Sidebar_0.props.sidebarIsCollapsed) {
        padding_0($receiver_2, get_px(1), get_px(15));
      }$receiver_0_0.invoke_qk0v40$($module$react_icons_fa.FaGithub, Sidebar$render$lambda$lambda$lambda$lambda$lambda_3);
      if (!this$Sidebar_0.props.sidebarIsCollapsed) {
        var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda_1);
        var $receiver_3 = $receiver_0_1.css;
        set_marginLeft($receiver_3, get_px(5));
        set_fontSize($receiver_3, get_px(13));
        $receiver_0_1.unaryPlus_pdl1vz$('View source');
        $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      }$receiver_0.child_30b5ua$($receiver_0_0.create());
      var $receiver_0_2 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledA$lambda(null, null));
      var $receiver_4 = $receiver_0_2.css;
      set_cursor($receiver_4, Cursor.pointer);
      set_borderRadius($receiver_4, get_px(40));
      set_background($receiver_4, 'rgba(255, 255, 255, 0.05)');
      set_color($receiver_4, new Color('#adadad'));
      set_textDecoration($receiver_4, TextDecoration.Companion.none);
      margin($receiver_4, get_px(0));
      set_height($receiver_4, get_px(35));
      set_display($receiver_4, Display.flex);
      set_alignItems($receiver_4, Align.center);
      set_justifyContent($receiver_4, JustifyContent.center);
      set_textOverflow($receiver_4, TextOverflow.ellipsis);
      set_overflow($receiver_4, Overflow.hidden);
      $receiver_4.hover_lx8bml$(Sidebar$render$lambda$lambda$lambda$lambda$lambda$lambda_6);
      if (!this$Sidebar_0.props.sidebarIsCollapsed) {
        padding_0($receiver_4, get_px(1), get_px(15));
      }set_onClickFunction($receiver_0_2.attrs, Sidebar$render$lambda$lambda$lambda$lambda$lambda_4(this$Sidebar_0));
      if (!this$Sidebar_0.props.sidebarIsCollapsed) {
        var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledSpan$lambda_1);
        var tmp$;
        var $receiver_5 = $receiver_0_3.css;
        set_marginLeft($receiver_5, get_px(5));
        set_fontSize($receiver_5, get_px(13));
        if (this$Sidebar_0.props.showTradeOffBoard) {
          tmp$ = 'CryptoAC';
        } else {
          tmp$ = 'TradeOffBoard';
        }
        $receiver_0_3.unaryPlus_pdl1vz$(tmp$);
        $receiver_0_2.child_30b5ua$($receiver_0_3.create());
      }$receiver_0.child_30b5ua$($receiver_0_2.create());
      $receiver.child_30b5ua$($receiver_0.create());
      return Unit;
    };
  }
  function Sidebar$render$lambda(this$Sidebar) {
    return function ($receiver) {
      $receiver.attrs_37755u$(Sidebar$render$lambda$lambda(this$Sidebar));
      $receiver.invoke_qk0v40$($module$react_pro_sidebar.SidebarHeader, Sidebar$render$lambda$lambda_0(this$Sidebar));
      $receiver.invoke_qk0v40$($module$react_pro_sidebar.SidebarContent, Sidebar$render$lambda$lambda_1(this$Sidebar));
      $receiver.invoke_qk0v40$($module$react_pro_sidebar.SidebarFooter, Sidebar$render$lambda$lambda_2(this$Sidebar));
      return Unit;
    };
  }
  Sidebar.prototype.render_ss14n$ = function ($receiver) {
    $receiver.invoke_qk0v40$($module$react_pro_sidebar.ProSidebar, Sidebar$render$lambda(this));
  };
  function Sidebar$init$lambda() {
    return 'Initializing the state of the Sidebar component';
  }
  Sidebar.prototype.init_b4e81d$ = function ($receiver) {
    logger_16.info_nq59yw$(Sidebar$init$lambda);
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
    logger_16.info_nq59yw$(Sidebar$toggleDisplayCoreTypeRadio$lambda(display));
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
              this.local$this$Sidebar.props.handleChangeBackdropIsOpen(false);
              logger_16.error_nq59yw$(Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_2(this.local$closure$method));
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
              this.local$this$Sidebar.props.handleChangeBackdropIsOpen(false);
              logger_16.error_nq59yw$(Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda_3(e));
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
    logger_16.info_nq59yw$(Sidebar$submitCryptoACFormUrlEncoded$lambda(method, endpoint));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_16.info_nq59yw$(Sidebar$submitCryptoACFormUrlEncoded$lambda$lambda(element));
    }
    this.props.handleChangeBackdropIsOpen(true);
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
                  var this$Sidebar = this.local$this$Sidebar;
                  var closure$endpoint = this.local$closure$endpoint;
                  var closure$method = this.local$closure$method;
                  var reader = new FileReader();
                  reader.readAsBinaryString(element_1.value);
                  reader.onload = Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda$lambda(fileEntriesUploaded, reader, element_1, parts, closure$files, closure$callback, this$Sidebar, closure$endpoint, closure$method);
                }
                return Unit;
              } else {
                this.local$this$Sidebar.props.handleChangeBackdropIsOpen(false);
                logger_16.error_nq59yw$(Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda_0(this.local$closure$method));
                return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
              }
            } catch (e) {
              if (Kotlin.isType(e, Error_0)) {
                this.local$this$Sidebar.props.handleChangeBackdropIsOpen(false);
                logger_16.error_nq59yw$(Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda_1(e));
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
    logger_16.info_nq59yw$(Sidebar$submitCryptoACFormWithBinaryData$lambda(method, endpoint, files, values));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_16.info_nq59yw$(Sidebar$submitCryptoACFormWithBinaryData$lambda$lambda(element));
    }
    this.props.handleChangeBackdropIsOpen(true);
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
        logger_16.info_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda$lambda$lambda);
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
                this.local$this$Sidebar.props.handleChangeBackdropIsOpen(false);
                return win != null && (win.onload = Sidebar$submitCryptoACFormInNewTab$lambda$lambda_0(win, this.local$this$Sidebar)), Unit;
              } else {
                this.local$this$Sidebar.props.handleChangeBackdropIsOpen(false);
                logger_16.error_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda$lambda_1(this.local$closure$method));
                return this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_046_HTTP_METHOD_NOT_SUPPORTED_getInstance(), CryptoACAlertSeverity$ERROR_getInstance()), Unit;
              }
            } catch (e) {
              if (Kotlin.isType(e, Error_0)) {
                this.local$this$Sidebar.props.handleChangeBackdropIsOpen(false);
                logger_16.error_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda$lambda_2(e));
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
    logger_16.info_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda(method, endpoint, query));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_16.info_nq59yw$(Sidebar$submitCryptoACFormInNewTab$lambda$lambda(element));
    }
    this.props.handleChangeBackdropIsOpen(true);
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
                  get$lambda_1($receiver_1_0);
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
              this.local$this$Sidebar.props.handleChangeBackdropIsOpen(false);
              logger_16.error_nq59yw$(Sidebar$submitCryptoACForm$lambda$lambda_0(this.local$closure$method));
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
              this.local$this$Sidebar.props.handleChangeBackdropIsOpen(false);
              logger_16.error_nq59yw$(Sidebar$submitCryptoACForm$lambda$lambda_1(e));
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
    logger_16.info_nq59yw$(Sidebar$submitCryptoACForm$lambda(method, endpoint, query));
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      logger_16.info_nq59yw$(Sidebar$submitCryptoACForm$lambda$lambda(element));
    }
    this.props.handleChangeBackdropIsOpen(true);
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
              logger_16.info_nq59yw$(Sidebar$callbackShowOutcomeCode$lambda$lambda(this.local$status));
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
            logger_16.warn_nq59yw$(Sidebar$callbackShowOutcomeCode$lambda$lambda_0(this.local$status, outcomeCode));
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
    this.props.handleChangeBackdropIsOpen(false);
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
              logger_16.info_nq59yw$(Sidebar$callbackDownloadUserProfile$lambda$lambda(this.local$status));
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
            logger_16.warn_nq59yw$(Sidebar$callbackDownloadUserProfile$lambda$lambda_0(this.local$status, outcomeCode));
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
    this.props.handleChangeBackdropIsOpen(false);
    launch(MainScope(), void 0, void 0, Sidebar$callbackDownloadUserProfile$lambda(response, values, this));
  };
  function Sidebar$callbackSubscribeToTopic$lambda$lambda(closure$status) {
    return function () {
      return 'Response status is ' + closure$status;
    };
  }
  function Sidebar$callbackSubscribeToTopic$lambda$lambda_0(closure$status, closure$outcomeCode) {
    return function () {
      return 'Response status is ' + closure$status + ', outcome code is ' + closure$outcomeCode;
    };
  }
  function Coroutine$Sidebar$callbackSubscribeToTopic$lambda(closure$response_0, this$Sidebar_0, closure$values_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$response = closure$response_0;
    this.local$this$Sidebar = this$Sidebar_0;
    this.local$closure$values = closure$values_0;
    this.local$tmp$ = void 0;
    this.local$status = void 0;
  }
  Coroutine$Sidebar$callbackSubscribeToTopic$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sidebar$callbackSubscribeToTopic$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sidebar$callbackSubscribeToTopic$lambda.prototype.constructor = Coroutine$Sidebar$callbackSubscribeToTopic$lambda;
  Coroutine$Sidebar$callbackSubscribeToTopic$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$status = this.local$closure$response.status;
            if (this.local$status != null ? this.local$status.equals(HttpStatusCode.Companion.OK) : null) {
              logger_16.info_nq59yw$(Sidebar$callbackSubscribeToTopic$lambda$lambda(this.local$status));
              this.local$this$Sidebar.props.handleDisplayAlert(OutcomeCode$CODE_000_SUCCESS_getInstance(), CryptoACAlertSeverity$SUCCESS_getInstance());
              return this.local$this$Sidebar.props.handleAddTableInContent(ensureNotNull(this.local$closure$values.get_11rb$(SERVER_getInstance().FILE_NAME))), Unit;
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
            logger_16.warn_nq59yw$(Sidebar$callbackSubscribeToTopic$lambda$lambda_0(this.local$status, outcomeCode));
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
  function Sidebar$callbackSubscribeToTopic$lambda(closure$response_0, this$Sidebar_0, closure$values_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sidebar$callbackSubscribeToTopic$lambda(closure$response_0, this$Sidebar_0, closure$values_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Sidebar.prototype.callbackSubscribeToTopic_0 = function (response, values) {
    this.props.handleChangeBackdropIsOpen(false);
    launch(MainScope(), void 0, void 0, Sidebar$callbackSubscribeToTopic$lambda(response, this, values));
  };
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda(this$Sidebar) {
    return function (response, params) {
      this$Sidebar.callbackDownloadUserProfile_0(response, params);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_0(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda_0(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_0(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_1(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda_1(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_1(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_2(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda_2(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACFormUrlEncoded_0(method, endpoint, values, Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_2(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_3(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda_3(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_3(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_4(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda_4(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_4(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_5(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda_5(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_5(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_6(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda_6(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_6(this$Sidebar));
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_7(this$Sidebar) {
    return function (response, f) {
      this$Sidebar.callbackShowOutcomeCode_0(response);
      return Unit;
    };
  }
  function Sidebar$adminCryptoACFormsRBACCLOUD$lambda_7(this$Sidebar) {
    return function (method, endpoint, values, f) {
      this$Sidebar.submitCryptoACForm_0(method, endpoint, values, false, Sidebar$adminCryptoACFormsRBACCLOUD$lambda$lambda_7(this$Sidebar));
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
      this$Sidebar.callbackSubscribeToTopic_0(response, params);
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
  function sidebar$lambda$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_37755u$(closure$handler);
      return Unit;
    };
  }
  function sidebar$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.child_up9nw1$(getKClass(Sidebar), sidebar$lambda$lambda(closure$handler));
      return Unit;
    };
  }
  function sidebar(handler) {
    return ensureNotNull(createElement(sidebar$lambda(handler)));
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
  Object.defineProperty(OutcomeCode, 'CODE_043_DM_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_043_DM_CONNECTION_TIMEOUT_getInstance
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
  Object.defineProperty(OutcomeCode, 'CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM', {
    get: OutcomeCode$CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM_getInstance
  });
  Object.defineProperty(OutcomeCode, 'CODE_054_DM_CONNECTION_TIMEOUT', {
    get: OutcomeCode$CODE_054_DM_CONNECTION_TIMEOUT_getInstance
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
  Object.defineProperty(CoreType, 'RBAC_MOCK', {
    get: CoreType$RBAC_MOCK_getInstance
  });
  package$core.CoreType = CoreType;
  Object.defineProperty(CoreParametersCLOUD, 'Companion', {
    get: CoreParametersCLOUD$Companion_getInstance
  });
  Object.defineProperty(CoreParametersCLOUD, '$serializer', {
    get: CoreParametersCLOUD$$serializer_getInstance
  });
  package$core.CoreParametersCLOUD_init_i8dq2c$ = CoreParametersCLOUD_init;
  package$core.CoreParametersCLOUD = CoreParametersCLOUD;
  Object.defineProperty(CoreParametersMOCK, 'Companion', {
    get: CoreParametersMOCK$Companion_getInstance
  });
  Object.defineProperty(CoreParametersMOCK, '$serializer', {
    get: CoreParametersMOCK$$serializer_getInstance
  });
  package$core.CoreParametersMOCK_init_1h01jw$ = CoreParametersMOCK_init;
  package$core.CoreParametersMOCK = CoreParametersMOCK;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  Object.defineProperty(CoreParametersMQTT, 'Companion', {
    get: CoreParametersMQTT$Companion_getInstance
  });
  Object.defineProperty(CoreParametersMQTT, '$serializer', {
    get: CoreParametersMQTT$$serializer_getInstance
  });
  package$core.CoreParametersMQTT_init_fqz66m$ = CoreParametersMQTT_init;
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
  Object.defineProperty(DMInterfaceCloudParameters, 'Companion', {
    get: DMInterfaceCloudParameters$Companion_getInstance
  });
  Object.defineProperty(DMInterfaceCloudParameters, '$serializer', {
    get: DMInterfaceCloudParameters$$serializer_getInstance
  });
  var package$implementation = package$cryptoac.implementation || (package$cryptoac.implementation = {});
  var package$dm = package$implementation.dm || (package$implementation.dm = {});
  package$dm.DMInterfaceCloudParameters_init_woby6u$ = DMInterfaceCloudParameters_init;
  package$dm.DMInterfaceCloudParameters = DMInterfaceCloudParameters;
  Object.defineProperty(DMInterfaceMQTTParameters, 'Companion', {
    get: DMInterfaceMQTTParameters$Companion_getInstance
  });
  Object.defineProperty(DMInterfaceMQTTParameters, '$serializer', {
    get: DMInterfaceMQTTParameters$$serializer_getInstance
  });
  package$dm.DMInterfaceMQTTParameters_init_inm4vi$ = DMInterfaceMQTTParameters_init;
  package$dm.DMInterfaceMQTTParameters = DMInterfaceMQTTParameters;
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
  Object.defineProperty(DMInterfaceParameters, 'Companion', {
    get: DMInterfaceParameters$Companion_getInstance
  });
  package$dm.DMInterfaceParameters_init_lc88fd$ = DMInterfaceParameters_init;
  package$dm.DMInterfaceParameters = DMInterfaceParameters;
  Object.defineProperty(MMInterfaceMySQLParameters, 'Companion', {
    get: MMInterfaceMySQLParameters$Companion_getInstance
  });
  Object.defineProperty(MMInterfaceMySQLParameters, '$serializer', {
    get: MMInterfaceMySQLParameters$$serializer_getInstance
  });
  var package$mm = package$implementation.mm || (package$implementation.mm = {});
  package$mm.MMInterfaceMySQLParameters_init_kfyxti$ = MMInterfaceMySQLParameters_init;
  package$mm.MMInterfaceMySQLParameters = MMInterfaceMySQLParameters;
  Object.defineProperty(MMInterfaceParameters, 'Companion', {
    get: MMInterfaceParameters$Companion_getInstance
  });
  package$mm.MMInterfaceParameters_init_lc88fd$ = MMInterfaceParameters_init;
  package$mm.MMInterfaceParameters = MMInterfaceParameters;
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
  package$custom.cryptoACAlert_6dw6nw$ = cryptoACAlert;
  package$custom.CryptoACCheckbox = CryptoACCheckbox;
  package$custom.cryptoACCheckbox_74hzcl$ = cryptoACCheckbox;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  package$custom.CryptoACForm = CryptoACForm;
  package$custom.cryptoACForm_koxxx4$ = cryptoACForm;
  package$custom.CryptoACFormData = CryptoACFormData;
  package$custom.CryptoACRadioGroup = CryptoACRadioGroup;
  package$custom.cryptoACRadioGroup_ea40rw$ = cryptoACRadioGroup;
  package$custom.CryptoACRadioOption = CryptoACRadioOption;
  package$custom.CryptoACSwitch = CryptoACSwitch;
  package$custom.cryptoACSwitch_6ru7z0$ = cryptoACSwitch;
  package$custom.CryptoACTextField = CryptoACTextField;
  package$custom.cryptoACTextField_mmgjwt$ = cryptoACTextField;
  var package$table = package$custom.table || (package$custom.table = {});
  package$table.CryptoACTable = CryptoACTable;
  package$table.cryptoACTable_pnuuj2$ = cryptoACTable;
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
  package$content.content_edfa38$ = content;
  package$content.Login = Login;
  package$content.login_octlb8$ = login;
  package$content.CloudContent = CloudContent;
  package$content.rbacCLOUDContent_j9c07p$ = rbacCLOUDContent;
  package$content.RBACContent = RBACContent;
  package$content.MQTTContent = MQTTContent;
  package$content.rbacMQTTContent_1w7la0$ = rbacMQTTContent;
  Object.defineProperty(Architecture, 'Companion', {
    get: Architecture$Companion_getInstance
  });
  var package$tradeoffboard = package$content.tradeoffboard || (package$content.tradeoffboard = {});
  package$tradeoffboard.Architecture = Architecture;
  Object.defineProperty(Assignment, 'Companion', {
    get: Assignment$Companion_getInstance
  });
  package$tradeoffboard.Assignment = Assignment;
  package$tradeoffboard.powerSet_4c7yge$ = powerSet;
  package$tradeoffboard.Attacker = Attacker;
  package$tradeoffboard.BestArchitectures = BestArchitectures;
  package$tradeoffboard.bestArchitectures_vp5870$ = bestArchitectures;
  package$tradeoffboard.Configuration = Configuration;
  package$tradeoffboard.configuration_ujjey$ = configuration;
  package$tradeoffboard.ConfigurationItem = ConfigurationItem;
  package$tradeoffboard.configurationItem_oibjm1$ = configurationItem;
  package$tradeoffboard.EntityIcon = EntityIcon;
  package$tradeoffboard.entityIcon_u6xy6c$ = entityIcon;
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  package$tradeoffboard.PreFilters = PreFilters;
  package$tradeoffboard.preFilters_evc600$ = preFilters;
  package$tradeoffboard.Requirement = Requirement;
  package$tradeoffboard.RequirementItem = RequirementItem;
  package$tradeoffboard.requirementItem_680nwq$ = requirementItem;
  package$tradeoffboard.Requirements = Requirements;
  package$tradeoffboard.requirements_23yap4$ = requirements;
  package$tradeoffboard.TradeOffBoard = TradeOffBoard;
  package$tradeoffboard.tradeOffBoard_ors640$ = tradeOffBoard;
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
  Object.defineProperty(DomainsCLOUD, 'Client', {
    get: DomainsCLOUD$Client_getInstance
  });
  Object.defineProperty(DomainsCLOUD, 'OnPremise', {
    get: DomainsCLOUD$OnPremise_getInstance
  });
  Object.defineProperty(DomainsCLOUD, 'CSP', {
    get: DomainsCLOUD$CSP_getInstance
  });
  package$tradeoffboard.DomainsCLOUD = DomainsCLOUD;
  Object.defineProperty(EntitiesCLOUD, 'Proxy', {
    get: EntitiesCLOUD$Proxy_getInstance
  });
  Object.defineProperty(EntitiesCLOUD, 'RM', {
    get: EntitiesCLOUD$RM_getInstance
  });
  Object.defineProperty(EntitiesCLOUD, 'MM', {
    get: EntitiesCLOUD$MM_getInstance
  });
  Object.defineProperty(EntitiesCLOUD, 'DM', {
    get: EntitiesCLOUD$DM_getInstance
  });
  package$tradeoffboard.EntitiesCLOUD = EntitiesCLOUD;
  Object.defineProperty(DomainsMQTT, 'Client', {
    get: DomainsMQTT$Client_getInstance
  });
  Object.defineProperty(DomainsMQTT, 'OnPremise', {
    get: DomainsMQTT$OnPremise_getInstance
  });
  Object.defineProperty(DomainsMQTT, 'Edge', {
    get: DomainsMQTT$Edge_getInstance
  });
  Object.defineProperty(DomainsMQTT, 'CSP', {
    get: DomainsMQTT$CSP_getInstance
  });
  package$tradeoffboard.DomainsMQTT = DomainsMQTT;
  Object.defineProperty(EntitiesMQTT, 'Proxy', {
    get: EntitiesMQTT$Proxy_getInstance
  });
  Object.defineProperty(EntitiesMQTT, 'MM', {
    get: EntitiesMQTT$MM_getInstance
  });
  Object.defineProperty(EntitiesMQTT, 'DM', {
    get: EntitiesMQTT$DM_getInstance
  });
  package$tradeoffboard.EntitiesMQTT = EntitiesMQTT;
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
  Object.defineProperty(package$tradeoffboard, 'attackersCLOUD', {
    get: function () {
      return attackersCLOUD;
    }
  });
  Object.defineProperty(package$tradeoffboard, 'attackersMQTT', {
    get: function () {
      return attackersMQTT;
    }
  });
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
  Object.defineProperty(ScenarioRequirementsCLOUD, 'Redundancy', {
    get: ScenarioRequirementsCLOUD$Redundancy_getInstance
  });
  Object.defineProperty(ScenarioRequirementsCLOUD, 'Scalability', {
    get: ScenarioRequirementsCLOUD$Scalability_getInstance
  });
  Object.defineProperty(ScenarioRequirementsCLOUD, 'Reliability', {
    get: ScenarioRequirementsCLOUD$Reliability_getInstance
  });
  Object.defineProperty(ScenarioRequirementsCLOUD, 'Maintenance', {
    get: ScenarioRequirementsCLOUD$Maintenance_getInstance
  });
  Object.defineProperty(ScenarioRequirementsCLOUD, 'DoS_Resilience', {
    get: ScenarioRequirementsCLOUD$DoS_Resilience_getInstance
  });
  Object.defineProperty(ScenarioRequirementsCLOUD, 'Vendor_Lock_in', {
    get: ScenarioRequirementsCLOUD$Vendor_Lock_in_getInstance
  });
  Object.defineProperty(ScenarioRequirementsCLOUD, 'On_premise_Savings', {
    get: ScenarioRequirementsCLOUD$On_premise_Savings_getInstance
  });
  Object.defineProperty(ScenarioRequirementsCLOUD, 'CSP_Savings', {
    get: ScenarioRequirementsCLOUD$CSP_Savings_getInstance
  });
  package$tradeoffboard.ScenarioRequirementsCLOUD = ScenarioRequirementsCLOUD;
  Object.defineProperty(ScenarioRequirementsMQTT, 'Redundancy', {
    get: ScenarioRequirementsMQTT$Redundancy_getInstance
  });
  Object.defineProperty(ScenarioRequirementsMQTT, 'Scalability', {
    get: ScenarioRequirementsMQTT$Scalability_getInstance
  });
  Object.defineProperty(ScenarioRequirementsMQTT, 'Reliability', {
    get: ScenarioRequirementsMQTT$Reliability_getInstance
  });
  Object.defineProperty(ScenarioRequirementsMQTT, 'Maintenance', {
    get: ScenarioRequirementsMQTT$Maintenance_getInstance
  });
  Object.defineProperty(ScenarioRequirementsMQTT, 'DoS_Resilience', {
    get: ScenarioRequirementsMQTT$DoS_Resilience_getInstance
  });
  Object.defineProperty(ScenarioRequirementsMQTT, 'Vendor_Lock_in', {
    get: ScenarioRequirementsMQTT$Vendor_Lock_in_getInstance
  });
  Object.defineProperty(ScenarioRequirementsMQTT, 'On_premise_Savings', {
    get: ScenarioRequirementsMQTT$On_premise_Savings_getInstance
  });
  Object.defineProperty(ScenarioRequirementsMQTT, 'CSP_Savings', {
    get: ScenarioRequirementsMQTT$CSP_Savings_getInstance
  });
  Object.defineProperty(ScenarioRequirementsMQTT, 'Latency', {
    get: ScenarioRequirementsMQTT$Latency_getInstance
  });
  Object.defineProperty(ScenarioRequirementsMQTT, 'Throughput', {
    get: ScenarioRequirementsMQTT$Throughput_getInstance
  });
  package$tradeoffboard.ScenarioRequirementsMQTT = ScenarioRequirementsMQTT;
  Object.defineProperty(package$tradeoffboard, 'scenarioRequirementsCLOUDImpact', {
    get: function () {
      return scenarioRequirementsCLOUDImpact;
    }
  });
  Object.defineProperty(package$tradeoffboard, 'scenarioRequirementsMQTTImpact', {
    get: function () {
      return scenarioRequirementsMQTTImpact;
    }
  });
  Object.defineProperty(package$tradeoffboard, 'securityRequirementsCLOUDImpact', {
    get: function () {
      return securityRequirementsCLOUDImpact;
    }
  });
  Object.defineProperty(package$tradeoffboard, 'securityRequirementsMQTTImpact', {
    get: function () {
      return securityRequirementsMQTTImpact;
    }
  });
  package$tradeoffboard.getImageFromEntity_61zpoe$ = getImageFromEntity;
  package$tradeoffboard.TrustAssumptions = TrustAssumptions;
  package$tradeoffboard.trustAssumptions_ldtyqw$ = trustAssumptions;
  package$tradeoffboard.TrustAssumptionsLikelihood = TrustAssumptionsLikelihood;
  package$tradeoffboard.trustAssumptionsLikelihood_b27fyw$ = trustAssumptionsLikelihood;
  $$importsForInline$$['ktor-ktor-http-js-legacy'] = $module$ktor_ktor_http_js_legacy;
  var package$sidebar = package$ui.sidebar || (package$ui.sidebar = {});
  package$sidebar.Sidebar = Sidebar;
  package$sidebar.sidebar_o8s6ry$ = sidebar;
  OutcomeCode$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
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
  DMInterfaceCloudParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  DMInterfaceMQTTParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  MQTTMessage$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  MMInterfaceMySQLParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  OPAInterfaceParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  RMInterfaceCloudParameters$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  development = true;
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
  logger_14 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_14);
  logger_15 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_15);
  attackersCLOUD = linkedMapOf([to(DomainsCLOUD$Client_getInstance().toString(), listOf_0(new Attacker(Attackers$MatD_getInstance()))), to(DomainsCLOUD$OnPremise_getInstance().toString(), listOf_0(new Attacker(Attackers$Insider_getInstance()))), to(DomainsCLOUD$CSP_getInstance().toString(), listOf_0(new Attacker(Attackers$Insider_getInstance()))), to(DomainsCLOUD$Client_getInstance().toString() + '_' + DomainsCLOUD$OnPremise_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance()))), to(DomainsCLOUD$OnPremise_getInstance().toString() + '_' + DomainsCLOUD$CSP_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance()))), to(DomainsCLOUD$Client_getInstance().toString() + '_' + DomainsCLOUD$CSP_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance())))]);
  attackersMQTT = linkedMapOf([to(DomainsMQTT$Client_getInstance().toString(), listOf_0(new Attacker(Attackers$MatD_getInstance()))), to(DomainsMQTT$OnPremise_getInstance().toString(), listOf_0(new Attacker(Attackers$Insider_getInstance()))), to(DomainsMQTT$CSP_getInstance().toString(), listOf_0(new Attacker(Attackers$Insider_getInstance()))), to(DomainsMQTT$Client_getInstance().toString() + '_' + DomainsMQTT$OnPremise_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance()))), to(DomainsMQTT$OnPremise_getInstance().toString() + '_' + DomainsMQTT$CSP_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance()))), to(DomainsMQTT$Client_getInstance().toString() + '_' + DomainsMQTT$CSP_getInstance(), listOf_0(new Attacker(Attackers$MitM_getInstance())))]);
  scenarioRequirementsCLOUDImpact = hashMapOf([to(ScenarioRequirementsCLOUD$Redundancy_getInstance().toString(), hashMapOf([to(new Assignment(DomainsCLOUD$Client_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), 1)])), to(ScenarioRequirementsCLOUD$Scalability_getInstance().toString(), hashMapOf([to(new Assignment(DomainsCLOUD$Client_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), 1)])), to(ScenarioRequirementsCLOUD$Reliability_getInstance().toString(), hashMapOf([to(new Assignment(DomainsCLOUD$Client_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), 1)])), to(ScenarioRequirementsCLOUD$Maintenance_getInstance().toString(), hashMapOf([to(new Assignment(DomainsCLOUD$Client_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), 1)])), to(ScenarioRequirementsCLOUD$DoS_Resilience_getInstance().toString(), hashMapOf([to(new Assignment(DomainsCLOUD$Client_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), 1)])), to(ScenarioRequirementsCLOUD$On_premise_Savings_getInstance().toString(), hashMapOf([to(new Assignment(DomainsCLOUD$Client_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), 1)])), to(ScenarioRequirementsCLOUD$Vendor_Lock_in_getInstance().toString(), hashMapOf([to(new Assignment(DomainsCLOUD$Client_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), -1)])), to(ScenarioRequirementsCLOUD$CSP_Savings_getInstance().toString(), hashMapOf([to(new Assignment(DomainsCLOUD$Client_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$RM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$MM_getInstance().toString()), -1), to(new Assignment(DomainsCLOUD$OnPremise_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), 1), to(new Assignment(DomainsCLOUD$CSP_getInstance().toString(), EntitiesCLOUD$DM_getInstance().toString()), -1)]))]);
  scenarioRequirementsMQTTImpact = hashMapOf([to(ScenarioRequirementsMQTT$Redundancy_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)])), to(ScenarioRequirementsMQTT$Scalability_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)])), to(ScenarioRequirementsMQTT$Reliability_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)])), to(ScenarioRequirementsMQTT$Maintenance_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)])), to(ScenarioRequirementsMQTT$DoS_Resilience_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)])), to(ScenarioRequirementsMQTT$On_premise_Savings_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)])), to(ScenarioRequirementsMQTT$Vendor_Lock_in_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)])), to(ScenarioRequirementsMQTT$CSP_Savings_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 1), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), -1), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)])), to(ScenarioRequirementsMQTT$Latency_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)])), to(ScenarioRequirementsMQTT$Throughput_getInstance().toString(), hashMapOf([to(new Assignment(DomainsMQTT$Client_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$OnPremise_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$CSP_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$Proxy_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$MM_getInstance().toString()), 0), to(new Assignment(DomainsMQTT$Edge_getInstance().toString(), EntitiesMQTT$DM_getInstance().toString()), 0)]))]);
  securityRequirementsCLOUDImpact = hashMapOf([to(SecurityRequirements$Confidentiality_getInstance(), hashMapOf([to(EntitiesCLOUD$Proxy_getInstance().toString(), Impact$High_getInstance()), to(EntitiesCLOUD$RM_getInstance().toString(), Impact$None_getInstance()), to(EntitiesCLOUD$MM_getInstance().toString(), Impact$None_getInstance()), to(EntitiesCLOUD$DM_getInstance().toString(), Impact$None_getInstance()), to(EntitiesCLOUD$Proxy_getInstance().toString() + '_' + EntitiesCLOUD$RM_getInstance(), Impact$None_getInstance()), to(EntitiesCLOUD$Proxy_getInstance().toString() + '_' + EntitiesCLOUD$MM_getInstance(), Impact$None_getInstance()), to(EntitiesCLOUD$Proxy_getInstance().toString() + '_' + EntitiesCLOUD$DM_getInstance(), Impact$None_getInstance()), to(EntitiesCLOUD$RM_getInstance().toString() + '_' + EntitiesCLOUD$MM_getInstance(), Impact$None_getInstance()), to(EntitiesCLOUD$RM_getInstance().toString() + '_' + EntitiesCLOUD$DM_getInstance(), Impact$None_getInstance())])), to(SecurityRequirements$Integrity_getInstance(), hashMapOf([to(EntitiesCLOUD$Proxy_getInstance().toString(), Impact$High_getInstance()), to(EntitiesCLOUD$RM_getInstance().toString(), Impact$High_getInstance()), to(EntitiesCLOUD$MM_getInstance().toString(), Impact$High_getInstance()), to(EntitiesCLOUD$DM_getInstance().toString(), Impact$Low_getInstance()), to(EntitiesCLOUD$Proxy_getInstance().toString() + '_' + EntitiesCLOUD$RM_getInstance(), Impact$None_getInstance()), to(EntitiesCLOUD$Proxy_getInstance().toString() + '_' + EntitiesCLOUD$MM_getInstance(), Impact$High_getInstance()), to(EntitiesCLOUD$Proxy_getInstance().toString() + '_' + EntitiesCLOUD$DM_getInstance(), Impact$Low_getInstance()), to(EntitiesCLOUD$RM_getInstance().toString() + '_' + EntitiesCLOUD$MM_getInstance(), Impact$High_getInstance()), to(EntitiesCLOUD$RM_getInstance().toString() + '_' + EntitiesCLOUD$DM_getInstance(), Impact$Low_getInstance())])), to(SecurityRequirements$Availability_getInstance(), hashMapOf([to(EntitiesCLOUD$Proxy_getInstance().toString(), Impact$None_getInstance()), to(EntitiesCLOUD$RM_getInstance().toString(), Impact$None_getInstance()), to(EntitiesCLOUD$MM_getInstance().toString(), Impact$None_getInstance()), to(EntitiesCLOUD$DM_getInstance().toString(), Impact$Low_getInstance()), to(EntitiesCLOUD$Proxy_getInstance().toString() + '_' + EntitiesCLOUD$RM_getInstance(), Impact$None_getInstance()), to(EntitiesCLOUD$Proxy_getInstance().toString() + '_' + EntitiesCLOUD$MM_getInstance(), Impact$None_getInstance()), to(EntitiesCLOUD$Proxy_getInstance().toString() + '_' + EntitiesCLOUD$DM_getInstance(), Impact$None_getInstance()), to(EntitiesCLOUD$RM_getInstance().toString() + '_' + EntitiesCLOUD$MM_getInstance(), Impact$None_getInstance()), to(EntitiesCLOUD$RM_getInstance().toString() + '_' + EntitiesCLOUD$DM_getInstance(), Impact$None_getInstance())]))]);
  securityRequirementsMQTTImpact = hashMapOf([to(SecurityRequirements$Confidentiality_getInstance(), hashMapOf([to(EntitiesMQTT$Proxy_getInstance().toString(), Impact$High_getInstance()), to(EntitiesMQTT$MM_getInstance().toString(), Impact$None_getInstance()), to(EntitiesMQTT$DM_getInstance().toString(), Impact$None_getInstance()), to(EntitiesMQTT$Proxy_getInstance().toString() + '_' + EntitiesMQTT$MM_getInstance(), Impact$None_getInstance()), to(EntitiesMQTT$Proxy_getInstance().toString() + '_' + EntitiesMQTT$DM_getInstance(), Impact$None_getInstance())])), to(SecurityRequirements$Integrity_getInstance(), hashMapOf([to(EntitiesMQTT$Proxy_getInstance().toString(), Impact$High_getInstance()), to(EntitiesMQTT$MM_getInstance().toString(), Impact$High_getInstance()), to(EntitiesMQTT$DM_getInstance().toString(), Impact$Low_getInstance()), to(EntitiesMQTT$Proxy_getInstance().toString() + '_' + EntitiesMQTT$MM_getInstance(), Impact$High_getInstance()), to(EntitiesMQTT$Proxy_getInstance().toString() + '_' + EntitiesMQTT$DM_getInstance(), Impact$Low_getInstance())])), to(SecurityRequirements$Availability_getInstance(), hashMapOf([to(EntitiesMQTT$Proxy_getInstance().toString(), Impact$None_getInstance()), to(EntitiesMQTT$MM_getInstance().toString(), Impact$None_getInstance()), to(EntitiesMQTT$DM_getInstance().toString(), Impact$Low_getInstance()), to(EntitiesMQTT$Proxy_getInstance().toString() + '_' + EntitiesMQTT$MM_getInstance(), Impact$None_getInstance()), to(EntitiesMQTT$Proxy_getInstance().toString() + '_' + EntitiesMQTT$DM_getInstance(), Impact$None_getInstance())]))]);
  logger_16 = mu.KotlinLogging.logger_o14v8n$(logger$lambda_16);
  main();
  Kotlin.defineModule('CryptoAC', _);
  return _;
}));

//# sourceMappingURL=CryptoAC.js.map
