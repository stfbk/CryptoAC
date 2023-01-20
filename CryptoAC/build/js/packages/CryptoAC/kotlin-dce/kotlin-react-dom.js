(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-dom'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'kotlin-react-dom'.");
    }
    root['kotlin-react-dom'] = factory(typeof this['kotlin-react-dom'] === 'undefined' ? {} : this['kotlin-react-dom'], kotlin, this['kotlin-react-core']);
  }
}(this, function (_, Kotlin, $module$kotlin_react_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  Object.defineProperty(ReactHTML.prototype, 'a', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_a', function () {
    return 'a';
  })});
  Object.defineProperty(ReactHTML.prototype, 'abbr', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_abbr', function () {
    return 'abbr';
  })});
  Object.defineProperty(ReactHTML.prototype, 'address', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_address', function () {
    return 'address';
  })});
  Object.defineProperty(ReactHTML.prototype, 'area', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_area', function () {
    return 'area';
  })});
  Object.defineProperty(ReactHTML.prototype, 'article', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_article', function () {
    return 'article';
  })});
  Object.defineProperty(ReactHTML.prototype, 'aside', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_aside', function () {
    return 'aside';
  })});
  Object.defineProperty(ReactHTML.prototype, 'audio', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_audio', function () {
    return 'audio';
  })});
  Object.defineProperty(ReactHTML.prototype, 'b', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_b', function () {
    return 'b';
  })});
  Object.defineProperty(ReactHTML.prototype, 'base', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_base', function () {
    return 'base';
  })});
  Object.defineProperty(ReactHTML.prototype, 'bdi', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_bdi', function () {
    return 'bdi';
  })});
  Object.defineProperty(ReactHTML.prototype, 'bdo', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_bdo', function () {
    return 'bdo';
  })});
  Object.defineProperty(ReactHTML.prototype, 'big', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_big', function () {
    return 'big';
  })});
  Object.defineProperty(ReactHTML.prototype, 'blockquote', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_blockquote', function () {
    return 'blockquote';
  })});
  Object.defineProperty(ReactHTML.prototype, 'body', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_body', function () {
    return 'body';
  })});
  Object.defineProperty(ReactHTML.prototype, 'br', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_br', function () {
    return 'br';
  })});
  Object.defineProperty(ReactHTML.prototype, 'button', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_button', function () {
    return 'button';
  })});
  Object.defineProperty(ReactHTML.prototype, 'canvas', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_canvas', function () {
    return 'canvas';
  })});
  Object.defineProperty(ReactHTML.prototype, 'caption', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_caption', function () {
    return 'caption';
  })});
  Object.defineProperty(ReactHTML.prototype, 'cite', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_cite', function () {
    return 'cite';
  })});
  Object.defineProperty(ReactHTML.prototype, 'code', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_code', function () {
    return 'code';
  })});
  Object.defineProperty(ReactHTML.prototype, 'col', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_col', function () {
    return 'col';
  })});
  Object.defineProperty(ReactHTML.prototype, 'colgroup', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_colgroup', function () {
    return 'colgroup';
  })});
  Object.defineProperty(ReactHTML.prototype, 'data', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_data', function () {
    return 'data';
  })});
  Object.defineProperty(ReactHTML.prototype, 'datalist', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_datalist', function () {
    return 'datalist';
  })});
  Object.defineProperty(ReactHTML.prototype, 'dd', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dd', function () {
    return 'dd';
  })});
  Object.defineProperty(ReactHTML.prototype, 'del', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_del', function () {
    return 'del';
  })});
  Object.defineProperty(ReactHTML.prototype, 'details', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_details', function () {
    return 'details';
  })});
  Object.defineProperty(ReactHTML.prototype, 'dfn', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dfn', function () {
    return 'dfn';
  })});
  Object.defineProperty(ReactHTML.prototype, 'dialog', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dialog', function () {
    return 'dialog';
  })});
  Object.defineProperty(ReactHTML.prototype, 'div', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_div', function () {
    return 'div';
  })});
  Object.defineProperty(ReactHTML.prototype, 'dl', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dl', function () {
    return 'dl';
  })});
  Object.defineProperty(ReactHTML.prototype, 'dt', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dt', function () {
    return 'dt';
  })});
  Object.defineProperty(ReactHTML.prototype, 'em', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_em', function () {
    return 'em';
  })});
  Object.defineProperty(ReactHTML.prototype, 'embed', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_embed', function () {
    return 'embed';
  })});
  Object.defineProperty(ReactHTML.prototype, 'fieldset', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_fieldset', function () {
    return 'fieldset';
  })});
  Object.defineProperty(ReactHTML.prototype, 'figcaption', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_figcaption', function () {
    return 'figcaption';
  })});
  Object.defineProperty(ReactHTML.prototype, 'figure', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_figure', function () {
    return 'figure';
  })});
  Object.defineProperty(ReactHTML.prototype, 'footer', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_footer', function () {
    return 'footer';
  })});
  Object.defineProperty(ReactHTML.prototype, 'form', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_form', function () {
    return 'form';
  })});
  Object.defineProperty(ReactHTML.prototype, 'h1', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h1', function () {
    return 'h1';
  })});
  Object.defineProperty(ReactHTML.prototype, 'h2', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h2', function () {
    return 'h2';
  })});
  Object.defineProperty(ReactHTML.prototype, 'h3', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h3', function () {
    return 'h3';
  })});
  Object.defineProperty(ReactHTML.prototype, 'h4', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h4', function () {
    return 'h4';
  })});
  Object.defineProperty(ReactHTML.prototype, 'h5', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h5', function () {
    return 'h5';
  })});
  Object.defineProperty(ReactHTML.prototype, 'h6', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h6', function () {
    return 'h6';
  })});
  Object.defineProperty(ReactHTML.prototype, 'head', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_head', function () {
    return 'head';
  })});
  Object.defineProperty(ReactHTML.prototype, 'header', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_header', function () {
    return 'header';
  })});
  Object.defineProperty(ReactHTML.prototype, 'hgroup', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_hgroup', function () {
    return 'hgroup';
  })});
  Object.defineProperty(ReactHTML.prototype, 'hr', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_hr', function () {
    return 'hr';
  })});
  Object.defineProperty(ReactHTML.prototype, 'html', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_html', function () {
    return 'html';
  })});
  Object.defineProperty(ReactHTML.prototype, 'i', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_i', function () {
    return 'i';
  })});
  Object.defineProperty(ReactHTML.prototype, 'iframe', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_iframe', function () {
    return 'iframe';
  })});
  Object.defineProperty(ReactHTML.prototype, 'img', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_img', function () {
    return 'img';
  })});
  Object.defineProperty(ReactHTML.prototype, 'input', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_input', function () {
    return 'input';
  })});
  Object.defineProperty(ReactHTML.prototype, 'ins', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ins', function () {
    return 'ins';
  })});
  Object.defineProperty(ReactHTML.prototype, 'kbd', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_kbd', function () {
    return 'kbd';
  })});
  Object.defineProperty(ReactHTML.prototype, 'keygen', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_keygen', function () {
    return 'keygen';
  })});
  Object.defineProperty(ReactHTML.prototype, 'label', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_label', function () {
    return 'label';
  })});
  Object.defineProperty(ReactHTML.prototype, 'legend', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_legend', function () {
    return 'legend';
  })});
  Object.defineProperty(ReactHTML.prototype, 'li', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_li', function () {
    return 'li';
  })});
  Object.defineProperty(ReactHTML.prototype, 'link', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_link', function () {
    return 'link';
  })});
  Object.defineProperty(ReactHTML.prototype, 'main', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_main', function () {
    return 'main';
  })});
  Object.defineProperty(ReactHTML.prototype, 'map', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_map', function () {
    return 'map';
  })});
  Object.defineProperty(ReactHTML.prototype, 'mark', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_mark', function () {
    return 'mark';
  })});
  Object.defineProperty(ReactHTML.prototype, 'menu', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_menu', function () {
    return 'menu';
  })});
  Object.defineProperty(ReactHTML.prototype, 'menuitem', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_menuitem', function () {
    return 'menuitem';
  })});
  Object.defineProperty(ReactHTML.prototype, 'meta', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_meta', function () {
    return 'meta';
  })});
  Object.defineProperty(ReactHTML.prototype, 'meter', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_meter', function () {
    return 'meter';
  })});
  Object.defineProperty(ReactHTML.prototype, 'nav', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_nav', function () {
    return 'nav';
  })});
  Object.defineProperty(ReactHTML.prototype, 'noscript', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_noscript', function () {
    return 'noscript';
  })});
  Object.defineProperty(ReactHTML.prototype, 'object', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_object', function () {
    return 'object';
  })});
  Object.defineProperty(ReactHTML.prototype, 'ol', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ol', function () {
    return 'ol';
  })});
  Object.defineProperty(ReactHTML.prototype, 'optgroup', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_optgroup', function () {
    return 'optgroup';
  })});
  Object.defineProperty(ReactHTML.prototype, 'option', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_option', function () {
    return 'option';
  })});
  Object.defineProperty(ReactHTML.prototype, 'output', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_output', function () {
    return 'output';
  })});
  Object.defineProperty(ReactHTML.prototype, 'p', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_p', function () {
    return 'p';
  })});
  Object.defineProperty(ReactHTML.prototype, 'param', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_param', function () {
    return 'param';
  })});
  Object.defineProperty(ReactHTML.prototype, 'picture', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_picture', function () {
    return 'picture';
  })});
  Object.defineProperty(ReactHTML.prototype, 'pre', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_pre', function () {
    return 'pre';
  })});
  Object.defineProperty(ReactHTML.prototype, 'progress', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_progress', function () {
    return 'progress';
  })});
  Object.defineProperty(ReactHTML.prototype, 'q', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_q', function () {
    return 'q';
  })});
  Object.defineProperty(ReactHTML.prototype, 'rp', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_rp', function () {
    return 'rp';
  })});
  Object.defineProperty(ReactHTML.prototype, 'rt', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_rt', function () {
    return 'rt';
  })});
  Object.defineProperty(ReactHTML.prototype, 'ruby', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ruby', function () {
    return 'ruby';
  })});
  Object.defineProperty(ReactHTML.prototype, 's', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_s', function () {
    return 's';
  })});
  Object.defineProperty(ReactHTML.prototype, 'samp', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_samp', function () {
    return 'samp';
  })});
  Object.defineProperty(ReactHTML.prototype, 'slot', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_slot', function () {
    return 'slot';
  })});
  Object.defineProperty(ReactHTML.prototype, 'script', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_script', function () {
    return 'script';
  })});
  Object.defineProperty(ReactHTML.prototype, 'section', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_section', function () {
    return 'section';
  })});
  Object.defineProperty(ReactHTML.prototype, 'select', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_select', function () {
    return 'select';
  })});
  Object.defineProperty(ReactHTML.prototype, 'small', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_small', function () {
    return 'small';
  })});
  Object.defineProperty(ReactHTML.prototype, 'source', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_source', function () {
    return 'source';
  })});
  Object.defineProperty(ReactHTML.prototype, 'span', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_span', function () {
    return 'span';
  })});
  Object.defineProperty(ReactHTML.prototype, 'strong', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_strong', function () {
    return 'strong';
  })});
  Object.defineProperty(ReactHTML.prototype, 'style', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_style', function () {
    return 'style';
  })});
  Object.defineProperty(ReactHTML.prototype, 'sub', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_sub', function () {
    return 'sub';
  })});
  Object.defineProperty(ReactHTML.prototype, 'summary', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_summary', function () {
    return 'summary';
  })});
  Object.defineProperty(ReactHTML.prototype, 'sup', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_sup', function () {
    return 'sup';
  })});
  Object.defineProperty(ReactHTML.prototype, 'table', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_table', function () {
    return 'table';
  })});
  Object.defineProperty(ReactHTML.prototype, 'template', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_template', function () {
    return 'template';
  })});
  Object.defineProperty(ReactHTML.prototype, 'tbody', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_tbody', function () {
    return 'tbody';
  })});
  Object.defineProperty(ReactHTML.prototype, 'td', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_td', function () {
    return 'td';
  })});
  Object.defineProperty(ReactHTML.prototype, 'textarea', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_textarea', function () {
    return 'textarea';
  })});
  Object.defineProperty(ReactHTML.prototype, 'tfoot', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_tfoot', function () {
    return 'tfoot';
  })});
  Object.defineProperty(ReactHTML.prototype, 'th', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_th', function () {
    return 'th';
  })});
  Object.defineProperty(ReactHTML.prototype, 'thead', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_thead', function () {
    return 'thead';
  })});
  Object.defineProperty(ReactHTML.prototype, 'time', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_time', function () {
    return 'time';
  })});
  Object.defineProperty(ReactHTML.prototype, 'title', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_title', function () {
    return 'title';
  })});
  Object.defineProperty(ReactHTML.prototype, 'tr', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_tr', function () {
    return 'tr';
  })});
  Object.defineProperty(ReactHTML.prototype, 'track', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_track', function () {
    return 'track';
  })});
  Object.defineProperty(ReactHTML.prototype, 'u', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_u', function () {
    return 'u';
  })});
  Object.defineProperty(ReactHTML.prototype, 'ul', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ul', function () {
    return 'ul';
  })});
  Object.defineProperty(ReactHTML.prototype, 'var', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_var', function () {
    return 'var';
  })});
  Object.defineProperty(ReactHTML.prototype, 'video', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_video', function () {
    return 'video';
  })});
  Object.defineProperty(ReactHTML.prototype, 'wbr', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_wbr', function () {
    return 'wbr';
  })});
  Object.defineProperty(ReactHTML.prototype, 'webview', {configurable: true, get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_webview', function () {
    return 'webview';
  })});
  ReactHTML.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ReactHTML', interfaces: []};
  var ReactHTML_instance = null;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance === null) {
      new ReactHTML();
    }
    return ReactHTML_instance;
  }
  var ReactSVG_instance = null;
  var FormEncType_instance = null;
  var FormMethod_instance = null;
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  var package$html = package$dom.html || (package$dom.html = {});
  Object.defineProperty(package$html, 'ReactHTML', {get: ReactHTML_getInstance});
  return _;
}));

//# sourceMappingURL=kotlin-react-dom.js.map
