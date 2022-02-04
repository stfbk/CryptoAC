(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-csstype'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-csstype'.");
    }root['kotlin-csstype'] = factory(typeof this['kotlin-csstype'] === 'undefined' ? {} : this['kotlin-csstype'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  function AdvancedPseudosRuleBuilder() {
  }
  AdvancedPseudosRuleBuilder.prototype.cue_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.cue_3dp6ds$', function (selector, block) {
    var $receiver = '::cue(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.cueRegion_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.cueRegion_3dp6ds$', function (selector, block) {
    var $receiver = '::cue-region(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.part_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.part_3dp6ds$', function (selector, block) {
    var $receiver = '::part(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.slotted_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.slotted_3dp6ds$', function (selector, block) {
    var $receiver = '::slotted(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.dir_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.dir_3dp6ds$', function (selector, block) {
    var $receiver = ':dir(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.has_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.has_3dp6ds$', function (selector, block) {
    var $receiver = ':has(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.host_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.host_3dp6ds$', function (selector, block) {
    var $receiver = ':host(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.hostContext_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.hostContext_3dp6ds$', function (selector, block) {
    var $receiver = ':host-context(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.is_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.is_3dp6ds$', function (selector, block) {
    var $receiver = ':is(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.lang_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.lang_3dp6ds$', function (selector, block) {
    var $receiver = ':lang(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.matches_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.matches_3dp6ds$', function (selector, block) {
    var $receiver = ':matches()(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.not_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.not_3dp6ds$', function (selector, block) {
    var $receiver = ':not(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthChild_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthChild_3dp6ds$', function (selector, block) {
    var $receiver = ':nth-child(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthLastChild_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthLastChild_3dp6ds$', function (selector, block) {
    var $receiver = ':nth-last-child(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthLastOfType_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthLastOfType_3dp6ds$', function (selector, block) {
    var $receiver = ':nth-last-of-type(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthOfType_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthOfType_3dp6ds$', function (selector, block) {
    var $receiver = ':nth-of-type(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.where_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.where_3dp6ds$', function (selector, block) {
    var $receiver = ':where(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AdvancedPseudosRuleBuilder',
    interfaces: [RuleBuilder]
  };
  var ColumnCount = defineInlineFunction('kotlin-csstype.csstype.ColumnCount_za3lpa$', function (value) {
    return value;
  });
  function CssDsl() {
  }
  CssDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssDsl',
    interfaces: [Annotation]
  };
  var FlexGrow = defineInlineFunction('kotlin-csstype.csstype.FlexGrow_14dthe$', function (value) {
    return value;
  });
  var FlexShrink = defineInlineFunction('kotlin-csstype.csstype.FlexShrink_14dthe$', function (value) {
    return value;
  });
  var FontWeight = defineInlineFunction('kotlin-csstype.csstype.FontWeight_za3lpa$', function (value) {
    return value;
  });
  var get_fr = defineInlineFunction('kotlin-csstype.csstype.get_fr_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'fr';
  });
  var Length = defineInlineFunction('kotlin-csstype.csstype.Length_61zpoe$', function (value) {
    return value;
  });
  var get_ch = defineInlineFunction('kotlin-csstype.csstype.get_ch_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'ch';
  });
  var get_em = defineInlineFunction('kotlin-csstype.csstype.get_em_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'em';
  });
  var get_ex = defineInlineFunction('kotlin-csstype.csstype.get_ex_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'ex';
  });
  var get_rem = defineInlineFunction('kotlin-csstype.csstype.get_rem_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'rem';
  });
  var get_vh = defineInlineFunction('kotlin-csstype.csstype.get_vh_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'vh';
  });
  var get_vw = defineInlineFunction('kotlin-csstype.csstype.get_vw_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'vw';
  });
  var get_vmin = defineInlineFunction('kotlin-csstype.csstype.get_vmin_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'vmin';
  });
  var get_vmax = defineInlineFunction('kotlin-csstype.csstype.get_vmax_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'vmax';
  });
  var get_px = defineInlineFunction('kotlin-csstype.csstype.get_px_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'px';
  });
  var get_cm = defineInlineFunction('kotlin-csstype.csstype.get_cm_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'cm';
  });
  var get_mm = defineInlineFunction('kotlin-csstype.csstype.get_mm_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'mm';
  });
  var get_in = defineInlineFunction('kotlin-csstype.csstype.get_in_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'in';
  });
  var get_pc = defineInlineFunction('kotlin-csstype.csstype.get_pc_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'pc';
  });
  var get_pt = defineInlineFunction('kotlin-csstype.csstype.get_pt_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'pt';
  });
  var get_pct = defineInlineFunction('kotlin-csstype.csstype.get_pct_rcaex3$', function ($receiver) {
    return $receiver.toString() + '%';
  });
  var LineClamp = defineInlineFunction('kotlin-csstype.csstype.LineClamp_za3lpa$', function (value) {
    return value;
  });
  var MaxLines = defineInlineFunction('kotlin-csstype.csstype.MaxLines_za3lpa$', function (value) {
    return value;
  });
  var Opacity = defineInlineFunction('kotlin-csstype.csstype.Opacity_14dthe$', function (value) {
    return value;
  });
  var Order = defineInlineFunction('kotlin-csstype.csstype.Order_za3lpa$', function (value) {
    return value;
  });
  var Orphans = defineInlineFunction('kotlin-csstype.csstype.Orphans_za3lpa$', function (value) {
    return value;
  });
  function PseudosRuleBuilder() {
  }
  PseudosRuleBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PseudosRuleBuilder',
    interfaces: [SimplePseudosRuleBuilder, AdvancedPseudosRuleBuilder]
  };
  function RuleBuilder() {
  }
  RuleBuilder.prototype.invoke_thkxg3$ = defineInlineFunction('kotlin-csstype.csstype.RuleBuilder.invoke_thkxg3$', function ($receiver, block) {
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  RuleBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RuleBuilder',
    interfaces: []
  };
  var Scale = defineInlineFunction('kotlin-csstype.csstype.Scale_14dthe$', function (value) {
    return value;
  });
  function SimplePseudosRuleBuilder() {
  }
  SimplePseudosRuleBuilder.prototype.after_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.after_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this['::after'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.backdrop_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.backdrop_oh3mgy$', function (block) {
    var $receiver = '::backdrop';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.before_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.before_oh3mgy$', function (block) {
    var $receiver = '::before';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.cue_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.cue_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this['::cue'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.cueRegion_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.cueRegion_oh3mgy$', function (block) {
    var $receiver = '::cue-region';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.firstLetter_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.firstLetter_oh3mgy$', function (block) {
    var $receiver = '::first-letter';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.firstLine_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.firstLine_oh3mgy$', function (block) {
    var $receiver = '::first-line';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.grammarError_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.grammarError_oh3mgy$', function (block) {
    var $receiver = '::grammar-error';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.marker_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.marker_oh3mgy$', function (block) {
    var $receiver = '::marker';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.placeholder_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.placeholder_oh3mgy$', function (block) {
    var $receiver = '::placeholder';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.selection_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.selection_oh3mgy$', function (block) {
    var $receiver = '::selection';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.spellingError_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.spellingError_oh3mgy$', function (block) {
    var $receiver = '::spelling-error';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.targetText_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.targetText_oh3mgy$', function (block) {
    var $receiver = '::target-text';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.active_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.active_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':active'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.anyLink_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.anyLink_oh3mgy$', function (block) {
    var $receiver = ':any-link';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.blank_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.blank_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':blank'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.checked_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.checked_oh3mgy$', function (block) {
    var $receiver = ':checked';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.current_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.current_oh3mgy$', function (block) {
    var $receiver = ':current';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.default_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.default_oh3mgy$', function (block) {
    var $receiver = ':default';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.defined_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.defined_oh3mgy$', function (block) {
    var $receiver = ':defined';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.disabled_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.disabled_oh3mgy$', function (block) {
    var $receiver = ':disabled';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.empty_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.empty_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':empty'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.enabled_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.enabled_oh3mgy$', function (block) {
    var $receiver = ':enabled';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.first_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.first_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':first'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.firstChild_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.firstChild_oh3mgy$', function (block) {
    var $receiver = ':first-child';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.firstOfType_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.firstOfType_oh3mgy$', function (block) {
    var $receiver = ':first-of-type';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.focus_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.focus_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':focus'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.focusVisible_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.focusVisible_oh3mgy$', function (block) {
    var $receiver = ':focus-visible';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.focusWithin_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.focusWithin_oh3mgy$', function (block) {
    var $receiver = ':focus-within';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.fullscreen_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.fullscreen_oh3mgy$', function (block) {
    var $receiver = ':fullscreen';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.future_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.future_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':future'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.hover_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.hover_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':hover'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.inRange_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.inRange_oh3mgy$', function (block) {
    var $receiver = ':in-range';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.indeterminate_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.indeterminate_oh3mgy$', function (block) {
    var $receiver = ':indeterminate';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.invalid_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.invalid_oh3mgy$', function (block) {
    var $receiver = ':invalid';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.lastChild_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.lastChild_oh3mgy$', function (block) {
    var $receiver = ':last-child';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.lastOfType_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.lastOfType_oh3mgy$', function (block) {
    var $receiver = ':last-of-type';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.left_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.left_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':left'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.link_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.link_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':link'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.localLink_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.localLink_oh3mgy$', function (block) {
    var $receiver = ':local-link';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.nthCol_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.nthCol_oh3mgy$', function (block) {
    var $receiver = ':nth-col';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.nthLastCol_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.nthLastCol_oh3mgy$', function (block) {
    var $receiver = ':nth-last-col';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.onlyChild_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.onlyChild_oh3mgy$', function (block) {
    var $receiver = ':only-child';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.onlyOfType_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.onlyOfType_oh3mgy$', function (block) {
    var $receiver = ':only-of-type';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.optional_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.optional_oh3mgy$', function (block) {
    var $receiver = ':optional';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.outOfRange_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.outOfRange_oh3mgy$', function (block) {
    var $receiver = ':out-of-range';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.past_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.past_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':past'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.paused_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.paused_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':paused'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.pictureInPicture_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.pictureInPicture_oh3mgy$', function (block) {
    var $receiver = ':picture-in-picture';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.placeholderShown_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.placeholderShown_oh3mgy$', function (block) {
    var $receiver = ':placeholder-shown';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.readOnly_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.readOnly_oh3mgy$', function (block) {
    var $receiver = ':read-only';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.readWrite_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.readWrite_oh3mgy$', function (block) {
    var $receiver = ':read-write';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.required_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.required_oh3mgy$', function (block) {
    var $receiver = ':required';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.right_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.right_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':right'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.root_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.root_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':root'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.scope_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.scope_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':scope'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.target_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.target_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':target'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.targetWithin_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.targetWithin_oh3mgy$', function (block) {
    var $receiver = ':target-within';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.userInvalid_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.userInvalid_oh3mgy$', function (block) {
    var $receiver = ':user-invalid';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.userValid_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.userValid_oh3mgy$', function (block) {
    var $receiver = ':user-valid';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.valid_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.valid_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':valid'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.visited_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.visited_oh3mgy$', function (block) {
    var $receiver = ':visited';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SimplePseudosRuleBuilder',
    interfaces: [RuleBuilder]
  };
  var get_ms = defineInlineFunction('kotlin-csstype.csstype.get_ms_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'ms';
  });
  var get_s = defineInlineFunction('kotlin-csstype.csstype.get_s_rcaex3$', function ($receiver) {
    return $receiver.toString() + 's';
  });
  var Widows = defineInlineFunction('kotlin-csstype.csstype.Widows_za3lpa$', function (value) {
    return value;
  });
  var ZIndex = defineInlineFunction('kotlin-csstype.csstype.ZIndex_za3lpa$', function (value) {
    return value;
  });
  var Zoom = defineInlineFunction('kotlin-csstype.csstype.Zoom_14dthe$', function (value) {
    return value;
  });
  var AnimationName = defineInlineFunction('kotlin-csstype.csstype.AnimationName_61zpoe$', function (value) {
    return value;
  });
  var Border = defineInlineFunction('kotlin-csstype.csstype.Border_iqydjd$', function (thickness, style) {
    return thickness.toString() + ' ' + style;
  });
  var Border_0 = defineInlineFunction('kotlin-csstype.csstype.Border_3d6msd$', function (thickness, style, color) {
    return thickness.toString() + ' ' + style + ' ' + color;
  });
  var Color = defineInlineFunction('kotlin-csstype.csstype.Color_61zpoe$', function (value) {
    return value;
  });
  var rgb = defineInlineFunction('kotlin-csstype.csstype.rgb_qt1dr2$', function (red, green, blue) {
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  });
  var rgba = defineInlineFunction('kotlin-csstype.csstype.rgba_gb4hak$', function (red, green, blue, alpha) {
    return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  });
  var GridArea = defineInlineFunction('kotlin-csstype.csstype.GridArea_61zpoe$', function (value) {
    return value;
  });
  function GridTemplateAreas$lambda(it) {
    return "'" + it + "'";
  }
  function GridTemplateAreas(values) {
    return joinToString(values, '\n', void 0, void 0, void 0, void 0, GridTemplateAreas$lambda);
  }
  function GridTemplateAreas$lambda_0(it) {
    return "'" + joinToString(it, ' ') + "'";
  }
  function GridTemplateAreas_0(values) {
    return joinToString(values, '\n', void 0, void 0, void 0, void 0, GridTemplateAreas$lambda_0);
  }
  function GridTemplateColumns(values) {
    return joinToString(values, ' ');
  }
  function GridTemplateRows(values) {
    return joinToString(values, ' ');
  }
  var unaryMinus = defineInlineFunction('kotlin-csstype.csstype.unaryMinus_oablfs$', function ($receiver) {
    return '-' + $receiver;
  });
  var plus = defineInlineFunction('kotlin-csstype.csstype.plus_3df375$', function ($receiver, other) {
    return 'calc(' + $receiver + ' + ' + other + ')';
  });
  var minus = defineInlineFunction('kotlin-csstype.csstype.minus_3df375$', function ($receiver, other) {
    return 'calc(' + $receiver + ' - ' + other + ')';
  });
  var Margin = defineInlineFunction('kotlin-csstype.csstype.Margin_61zpoe$', function (value) {
    return value;
  });
  var Margin_0 = defineInlineFunction('kotlin-csstype.csstype.Margin_bchfas$', function (vertical, horizontal) {
    return vertical.toString() + ' ' + horizontal;
  });
  var Margin_1 = defineInlineFunction('kotlin-csstype.csstype.Margin_kjmcvv$', function (top, horizontal, bottom) {
    return top.toString() + ' ' + horizontal + ' ' + bottom;
  });
  var Margin_2 = defineInlineFunction('kotlin-csstype.csstype.Margin_copp0s$', function (top, right, bottom, left) {
    return top.toString() + ' ' + right + ' ' + bottom + ' ' + left;
  });
  var Padding = defineInlineFunction('kotlin-csstype.csstype.Padding_61zpoe$', function (value) {
    return value;
  });
  var Padding_0 = defineInlineFunction('kotlin-csstype.csstype.Padding_bchfas$', function (vertical, horizontal) {
    return vertical.toString() + ' ' + horizontal;
  });
  var Padding_1 = defineInlineFunction('kotlin-csstype.csstype.Padding_kjmcvv$', function (top, horizontal, bottom) {
    return top.toString() + ' ' + horizontal + ' ' + bottom;
  });
  var Padding_2 = defineInlineFunction('kotlin-csstype.csstype.Padding_copp0s$', function (top, right, bottom, left) {
    return top.toString() + ' ' + right + ' ' + bottom + ' ' + left;
  });
  function PropertiesBuilder() {
  }
  PropertiesBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertiesBuilder',
    interfaces: [PseudosRuleBuilder, RuleBuilder]
  };
  var fallback = defineInlineFunction('kotlin-csstype.csstype.fallback_jurz7g$', function (values) {
    return values;
  });
  var important = defineInlineFunction('kotlin-csstype.csstype.important_issdgt$', function (value) {
    return value.toString() + ' !important';
  });
  $$importsForInline$$['kotlin-csstype'] = _;
  var package$csstype = _.csstype || (_.csstype = {});
  package$csstype.AdvancedPseudosRuleBuilder = AdvancedPseudosRuleBuilder;
  package$csstype.ColumnCount_za3lpa$ = ColumnCount;
  package$csstype.CssDsl = CssDsl;
  package$csstype.FlexGrow_14dthe$ = FlexGrow;
  package$csstype.FlexShrink_14dthe$ = FlexShrink;
  package$csstype.FontWeight_za3lpa$ = FontWeight;
  package$csstype.get_fr_rcaex3$ = get_fr;
  package$csstype.Length_61zpoe$ = Length;
  package$csstype.get_ch_rcaex3$ = get_ch;
  package$csstype.get_em_rcaex3$ = get_em;
  package$csstype.get_ex_rcaex3$ = get_ex;
  package$csstype.get_rem_rcaex3$ = get_rem;
  package$csstype.get_vh_rcaex3$ = get_vh;
  package$csstype.get_vw_rcaex3$ = get_vw;
  package$csstype.get_vmin_rcaex3$ = get_vmin;
  package$csstype.get_vmax_rcaex3$ = get_vmax;
  package$csstype.get_px_rcaex3$ = get_px;
  package$csstype.get_cm_rcaex3$ = get_cm;
  package$csstype.get_mm_rcaex3$ = get_mm;
  package$csstype.get_in_rcaex3$ = get_in;
  package$csstype.get_pc_rcaex3$ = get_pc;
  package$csstype.get_pt_rcaex3$ = get_pt;
  package$csstype.get_pct_rcaex3$ = get_pct;
  package$csstype.LineClamp_za3lpa$ = LineClamp;
  package$csstype.MaxLines_za3lpa$ = MaxLines;
  package$csstype.Opacity_14dthe$ = Opacity;
  package$csstype.Order_za3lpa$ = Order;
  package$csstype.Orphans_za3lpa$ = Orphans;
  package$csstype.PseudosRuleBuilder = PseudosRuleBuilder;
  package$csstype.RuleBuilder = RuleBuilder;
  package$csstype.Scale_14dthe$ = Scale;
  package$csstype.SimplePseudosRuleBuilder = SimplePseudosRuleBuilder;
  package$csstype.get_ms_rcaex3$ = get_ms;
  package$csstype.get_s_rcaex3$ = get_s;
  package$csstype.Widows_za3lpa$ = Widows;
  package$csstype.ZIndex_za3lpa$ = ZIndex;
  package$csstype.Zoom_14dthe$ = Zoom;
  package$csstype.AnimationName_61zpoe$ = AnimationName;
  package$csstype.Border_iqydjd$ = Border;
  package$csstype.Border_3d6msd$ = Border_0;
  package$csstype.Color_61zpoe$ = Color;
  package$csstype.rgb_qt1dr2$ = rgb;
  package$csstype.rgba_gb4hak$ = rgba;
  package$csstype.GridArea_61zpoe$ = GridArea;
  package$csstype.GridTemplateAreas_d7befb$ = GridTemplateAreas;
  package$csstype.GridTemplateAreas_ybss80$ = GridTemplateAreas_0;
  package$csstype.GridTemplateColumns_nz4mzb$ = GridTemplateColumns;
  package$csstype.GridTemplateRows_nx1yb3$ = GridTemplateRows;
  package$csstype.unaryMinus_oablfs$ = unaryMinus;
  package$csstype.plus_3df375$ = plus;
  package$csstype.minus_3df375$ = minus;
  package$csstype.Margin_61zpoe$ = Margin;
  package$csstype.Margin_bchfas$ = Margin_0;
  package$csstype.Margin_kjmcvv$ = Margin_1;
  package$csstype.Margin_copp0s$ = Margin_2;
  package$csstype.Padding_61zpoe$ = Padding;
  package$csstype.Padding_bchfas$ = Padding_0;
  package$csstype.Padding_kjmcvv$ = Padding_1;
  package$csstype.Padding_copp0s$ = Padding_2;
  package$csstype.PropertiesBuilder = PropertiesBuilder;
  package$csstype.fallback_jurz7g$ = fallback;
  package$csstype.important_issdgt$ = important;
  AdvancedPseudosRuleBuilder.prototype.invoke_thkxg3$ = RuleBuilder.prototype.invoke_thkxg3$;
  SimplePseudosRuleBuilder.prototype.invoke_thkxg3$ = RuleBuilder.prototype.invoke_thkxg3$;
  PseudosRuleBuilder.prototype.cue_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.cue_3dp6ds$;
  PseudosRuleBuilder.prototype.cue_oh3mgy$ = SimplePseudosRuleBuilder.prototype.cue_oh3mgy$;
  PseudosRuleBuilder.prototype.cueRegion_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.cueRegion_3dp6ds$;
  PseudosRuleBuilder.prototype.cueRegion_oh3mgy$ = SimplePseudosRuleBuilder.prototype.cueRegion_oh3mgy$;
  PseudosRuleBuilder.prototype.part_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.part_3dp6ds$;
  PseudosRuleBuilder.prototype.slotted_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.slotted_3dp6ds$;
  PseudosRuleBuilder.prototype.dir_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.dir_3dp6ds$;
  PseudosRuleBuilder.prototype.has_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.has_3dp6ds$;
  PseudosRuleBuilder.prototype.host_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.host_3dp6ds$;
  PseudosRuleBuilder.prototype.hostContext_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.hostContext_3dp6ds$;
  PseudosRuleBuilder.prototype.is_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.is_3dp6ds$;
  PseudosRuleBuilder.prototype.lang_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.lang_3dp6ds$;
  PseudosRuleBuilder.prototype.matches_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.matches_3dp6ds$;
  PseudosRuleBuilder.prototype.not_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.not_3dp6ds$;
  PseudosRuleBuilder.prototype.nthChild_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.nthChild_3dp6ds$;
  PseudosRuleBuilder.prototype.nthLastChild_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.nthLastChild_3dp6ds$;
  PseudosRuleBuilder.prototype.nthLastOfType_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.nthLastOfType_3dp6ds$;
  PseudosRuleBuilder.prototype.nthOfType_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.nthOfType_3dp6ds$;
  PseudosRuleBuilder.prototype.where_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.where_3dp6ds$;
  PseudosRuleBuilder.prototype.invoke_thkxg3$ = AdvancedPseudosRuleBuilder.prototype.invoke_thkxg3$;
  PseudosRuleBuilder.prototype.after_oh3mgy$ = SimplePseudosRuleBuilder.prototype.after_oh3mgy$;
  PseudosRuleBuilder.prototype.backdrop_oh3mgy$ = SimplePseudosRuleBuilder.prototype.backdrop_oh3mgy$;
  PseudosRuleBuilder.prototype.before_oh3mgy$ = SimplePseudosRuleBuilder.prototype.before_oh3mgy$;
  PseudosRuleBuilder.prototype.firstLetter_oh3mgy$ = SimplePseudosRuleBuilder.prototype.firstLetter_oh3mgy$;
  PseudosRuleBuilder.prototype.firstLine_oh3mgy$ = SimplePseudosRuleBuilder.prototype.firstLine_oh3mgy$;
  PseudosRuleBuilder.prototype.grammarError_oh3mgy$ = SimplePseudosRuleBuilder.prototype.grammarError_oh3mgy$;
  PseudosRuleBuilder.prototype.marker_oh3mgy$ = SimplePseudosRuleBuilder.prototype.marker_oh3mgy$;
  PseudosRuleBuilder.prototype.placeholder_oh3mgy$ = SimplePseudosRuleBuilder.prototype.placeholder_oh3mgy$;
  PseudosRuleBuilder.prototype.selection_oh3mgy$ = SimplePseudosRuleBuilder.prototype.selection_oh3mgy$;
  PseudosRuleBuilder.prototype.spellingError_oh3mgy$ = SimplePseudosRuleBuilder.prototype.spellingError_oh3mgy$;
  PseudosRuleBuilder.prototype.targetText_oh3mgy$ = SimplePseudosRuleBuilder.prototype.targetText_oh3mgy$;
  PseudosRuleBuilder.prototype.active_oh3mgy$ = SimplePseudosRuleBuilder.prototype.active_oh3mgy$;
  PseudosRuleBuilder.prototype.anyLink_oh3mgy$ = SimplePseudosRuleBuilder.prototype.anyLink_oh3mgy$;
  PseudosRuleBuilder.prototype.blank_oh3mgy$ = SimplePseudosRuleBuilder.prototype.blank_oh3mgy$;
  PseudosRuleBuilder.prototype.checked_oh3mgy$ = SimplePseudosRuleBuilder.prototype.checked_oh3mgy$;
  PseudosRuleBuilder.prototype.current_oh3mgy$ = SimplePseudosRuleBuilder.prototype.current_oh3mgy$;
  PseudosRuleBuilder.prototype.default_oh3mgy$ = SimplePseudosRuleBuilder.prototype.default_oh3mgy$;
  PseudosRuleBuilder.prototype.defined_oh3mgy$ = SimplePseudosRuleBuilder.prototype.defined_oh3mgy$;
  PseudosRuleBuilder.prototype.disabled_oh3mgy$ = SimplePseudosRuleBuilder.prototype.disabled_oh3mgy$;
  PseudosRuleBuilder.prototype.empty_oh3mgy$ = SimplePseudosRuleBuilder.prototype.empty_oh3mgy$;
  PseudosRuleBuilder.prototype.enabled_oh3mgy$ = SimplePseudosRuleBuilder.prototype.enabled_oh3mgy$;
  PseudosRuleBuilder.prototype.first_oh3mgy$ = SimplePseudosRuleBuilder.prototype.first_oh3mgy$;
  PseudosRuleBuilder.prototype.firstChild_oh3mgy$ = SimplePseudosRuleBuilder.prototype.firstChild_oh3mgy$;
  PseudosRuleBuilder.prototype.firstOfType_oh3mgy$ = SimplePseudosRuleBuilder.prototype.firstOfType_oh3mgy$;
  PseudosRuleBuilder.prototype.focus_oh3mgy$ = SimplePseudosRuleBuilder.prototype.focus_oh3mgy$;
  PseudosRuleBuilder.prototype.focusVisible_oh3mgy$ = SimplePseudosRuleBuilder.prototype.focusVisible_oh3mgy$;
  PseudosRuleBuilder.prototype.focusWithin_oh3mgy$ = SimplePseudosRuleBuilder.prototype.focusWithin_oh3mgy$;
  PseudosRuleBuilder.prototype.fullscreen_oh3mgy$ = SimplePseudosRuleBuilder.prototype.fullscreen_oh3mgy$;
  PseudosRuleBuilder.prototype.future_oh3mgy$ = SimplePseudosRuleBuilder.prototype.future_oh3mgy$;
  PseudosRuleBuilder.prototype.hover_oh3mgy$ = SimplePseudosRuleBuilder.prototype.hover_oh3mgy$;
  PseudosRuleBuilder.prototype.inRange_oh3mgy$ = SimplePseudosRuleBuilder.prototype.inRange_oh3mgy$;
  PseudosRuleBuilder.prototype.indeterminate_oh3mgy$ = SimplePseudosRuleBuilder.prototype.indeterminate_oh3mgy$;
  PseudosRuleBuilder.prototype.invalid_oh3mgy$ = SimplePseudosRuleBuilder.prototype.invalid_oh3mgy$;
  PseudosRuleBuilder.prototype.lastChild_oh3mgy$ = SimplePseudosRuleBuilder.prototype.lastChild_oh3mgy$;
  PseudosRuleBuilder.prototype.lastOfType_oh3mgy$ = SimplePseudosRuleBuilder.prototype.lastOfType_oh3mgy$;
  PseudosRuleBuilder.prototype.left_oh3mgy$ = SimplePseudosRuleBuilder.prototype.left_oh3mgy$;
  PseudosRuleBuilder.prototype.link_oh3mgy$ = SimplePseudosRuleBuilder.prototype.link_oh3mgy$;
  PseudosRuleBuilder.prototype.localLink_oh3mgy$ = SimplePseudosRuleBuilder.prototype.localLink_oh3mgy$;
  PseudosRuleBuilder.prototype.nthCol_oh3mgy$ = SimplePseudosRuleBuilder.prototype.nthCol_oh3mgy$;
  PseudosRuleBuilder.prototype.nthLastCol_oh3mgy$ = SimplePseudosRuleBuilder.prototype.nthLastCol_oh3mgy$;
  PseudosRuleBuilder.prototype.onlyChild_oh3mgy$ = SimplePseudosRuleBuilder.prototype.onlyChild_oh3mgy$;
  PseudosRuleBuilder.prototype.onlyOfType_oh3mgy$ = SimplePseudosRuleBuilder.prototype.onlyOfType_oh3mgy$;
  PseudosRuleBuilder.prototype.optional_oh3mgy$ = SimplePseudosRuleBuilder.prototype.optional_oh3mgy$;
  PseudosRuleBuilder.prototype.outOfRange_oh3mgy$ = SimplePseudosRuleBuilder.prototype.outOfRange_oh3mgy$;
  PseudosRuleBuilder.prototype.past_oh3mgy$ = SimplePseudosRuleBuilder.prototype.past_oh3mgy$;
  PseudosRuleBuilder.prototype.paused_oh3mgy$ = SimplePseudosRuleBuilder.prototype.paused_oh3mgy$;
  PseudosRuleBuilder.prototype.pictureInPicture_oh3mgy$ = SimplePseudosRuleBuilder.prototype.pictureInPicture_oh3mgy$;
  PseudosRuleBuilder.prototype.placeholderShown_oh3mgy$ = SimplePseudosRuleBuilder.prototype.placeholderShown_oh3mgy$;
  PseudosRuleBuilder.prototype.readOnly_oh3mgy$ = SimplePseudosRuleBuilder.prototype.readOnly_oh3mgy$;
  PseudosRuleBuilder.prototype.readWrite_oh3mgy$ = SimplePseudosRuleBuilder.prototype.readWrite_oh3mgy$;
  PseudosRuleBuilder.prototype.required_oh3mgy$ = SimplePseudosRuleBuilder.prototype.required_oh3mgy$;
  PseudosRuleBuilder.prototype.right_oh3mgy$ = SimplePseudosRuleBuilder.prototype.right_oh3mgy$;
  PseudosRuleBuilder.prototype.root_oh3mgy$ = SimplePseudosRuleBuilder.prototype.root_oh3mgy$;
  PseudosRuleBuilder.prototype.scope_oh3mgy$ = SimplePseudosRuleBuilder.prototype.scope_oh3mgy$;
  PseudosRuleBuilder.prototype.target_oh3mgy$ = SimplePseudosRuleBuilder.prototype.target_oh3mgy$;
  PseudosRuleBuilder.prototype.targetWithin_oh3mgy$ = SimplePseudosRuleBuilder.prototype.targetWithin_oh3mgy$;
  PseudosRuleBuilder.prototype.userInvalid_oh3mgy$ = SimplePseudosRuleBuilder.prototype.userInvalid_oh3mgy$;
  PseudosRuleBuilder.prototype.userValid_oh3mgy$ = SimplePseudosRuleBuilder.prototype.userValid_oh3mgy$;
  PseudosRuleBuilder.prototype.valid_oh3mgy$ = SimplePseudosRuleBuilder.prototype.valid_oh3mgy$;
  PseudosRuleBuilder.prototype.visited_oh3mgy$ = SimplePseudosRuleBuilder.prototype.visited_oh3mgy$;
  PropertiesBuilder.prototype.invoke_thkxg3$ = RuleBuilder.prototype.invoke_thkxg3$;
  PropertiesBuilder.prototype.cue_3dp6ds$ = PseudosRuleBuilder.prototype.cue_3dp6ds$;
  PropertiesBuilder.prototype.cue_oh3mgy$ = PseudosRuleBuilder.prototype.cue_oh3mgy$;
  PropertiesBuilder.prototype.cueRegion_3dp6ds$ = PseudosRuleBuilder.prototype.cueRegion_3dp6ds$;
  PropertiesBuilder.prototype.cueRegion_oh3mgy$ = PseudosRuleBuilder.prototype.cueRegion_oh3mgy$;
  PropertiesBuilder.prototype.part_3dp6ds$ = PseudosRuleBuilder.prototype.part_3dp6ds$;
  PropertiesBuilder.prototype.slotted_3dp6ds$ = PseudosRuleBuilder.prototype.slotted_3dp6ds$;
  PropertiesBuilder.prototype.dir_3dp6ds$ = PseudosRuleBuilder.prototype.dir_3dp6ds$;
  PropertiesBuilder.prototype.has_3dp6ds$ = PseudosRuleBuilder.prototype.has_3dp6ds$;
  PropertiesBuilder.prototype.host_3dp6ds$ = PseudosRuleBuilder.prototype.host_3dp6ds$;
  PropertiesBuilder.prototype.hostContext_3dp6ds$ = PseudosRuleBuilder.prototype.hostContext_3dp6ds$;
  PropertiesBuilder.prototype.is_3dp6ds$ = PseudosRuleBuilder.prototype.is_3dp6ds$;
  PropertiesBuilder.prototype.lang_3dp6ds$ = PseudosRuleBuilder.prototype.lang_3dp6ds$;
  PropertiesBuilder.prototype.matches_3dp6ds$ = PseudosRuleBuilder.prototype.matches_3dp6ds$;
  PropertiesBuilder.prototype.not_3dp6ds$ = PseudosRuleBuilder.prototype.not_3dp6ds$;
  PropertiesBuilder.prototype.nthChild_3dp6ds$ = PseudosRuleBuilder.prototype.nthChild_3dp6ds$;
  PropertiesBuilder.prototype.nthLastChild_3dp6ds$ = PseudosRuleBuilder.prototype.nthLastChild_3dp6ds$;
  PropertiesBuilder.prototype.nthLastOfType_3dp6ds$ = PseudosRuleBuilder.prototype.nthLastOfType_3dp6ds$;
  PropertiesBuilder.prototype.nthOfType_3dp6ds$ = PseudosRuleBuilder.prototype.nthOfType_3dp6ds$;
  PropertiesBuilder.prototype.where_3dp6ds$ = PseudosRuleBuilder.prototype.where_3dp6ds$;
  PropertiesBuilder.prototype.after_oh3mgy$ = PseudosRuleBuilder.prototype.after_oh3mgy$;
  PropertiesBuilder.prototype.backdrop_oh3mgy$ = PseudosRuleBuilder.prototype.backdrop_oh3mgy$;
  PropertiesBuilder.prototype.before_oh3mgy$ = PseudosRuleBuilder.prototype.before_oh3mgy$;
  PropertiesBuilder.prototype.firstLetter_oh3mgy$ = PseudosRuleBuilder.prototype.firstLetter_oh3mgy$;
  PropertiesBuilder.prototype.firstLine_oh3mgy$ = PseudosRuleBuilder.prototype.firstLine_oh3mgy$;
  PropertiesBuilder.prototype.grammarError_oh3mgy$ = PseudosRuleBuilder.prototype.grammarError_oh3mgy$;
  PropertiesBuilder.prototype.marker_oh3mgy$ = PseudosRuleBuilder.prototype.marker_oh3mgy$;
  PropertiesBuilder.prototype.placeholder_oh3mgy$ = PseudosRuleBuilder.prototype.placeholder_oh3mgy$;
  PropertiesBuilder.prototype.selection_oh3mgy$ = PseudosRuleBuilder.prototype.selection_oh3mgy$;
  PropertiesBuilder.prototype.spellingError_oh3mgy$ = PseudosRuleBuilder.prototype.spellingError_oh3mgy$;
  PropertiesBuilder.prototype.targetText_oh3mgy$ = PseudosRuleBuilder.prototype.targetText_oh3mgy$;
  PropertiesBuilder.prototype.active_oh3mgy$ = PseudosRuleBuilder.prototype.active_oh3mgy$;
  PropertiesBuilder.prototype.anyLink_oh3mgy$ = PseudosRuleBuilder.prototype.anyLink_oh3mgy$;
  PropertiesBuilder.prototype.blank_oh3mgy$ = PseudosRuleBuilder.prototype.blank_oh3mgy$;
  PropertiesBuilder.prototype.checked_oh3mgy$ = PseudosRuleBuilder.prototype.checked_oh3mgy$;
  PropertiesBuilder.prototype.current_oh3mgy$ = PseudosRuleBuilder.prototype.current_oh3mgy$;
  PropertiesBuilder.prototype.default_oh3mgy$ = PseudosRuleBuilder.prototype.default_oh3mgy$;
  PropertiesBuilder.prototype.defined_oh3mgy$ = PseudosRuleBuilder.prototype.defined_oh3mgy$;
  PropertiesBuilder.prototype.disabled_oh3mgy$ = PseudosRuleBuilder.prototype.disabled_oh3mgy$;
  PropertiesBuilder.prototype.empty_oh3mgy$ = PseudosRuleBuilder.prototype.empty_oh3mgy$;
  PropertiesBuilder.prototype.enabled_oh3mgy$ = PseudosRuleBuilder.prototype.enabled_oh3mgy$;
  PropertiesBuilder.prototype.first_oh3mgy$ = PseudosRuleBuilder.prototype.first_oh3mgy$;
  PropertiesBuilder.prototype.firstChild_oh3mgy$ = PseudosRuleBuilder.prototype.firstChild_oh3mgy$;
  PropertiesBuilder.prototype.firstOfType_oh3mgy$ = PseudosRuleBuilder.prototype.firstOfType_oh3mgy$;
  PropertiesBuilder.prototype.focus_oh3mgy$ = PseudosRuleBuilder.prototype.focus_oh3mgy$;
  PropertiesBuilder.prototype.focusVisible_oh3mgy$ = PseudosRuleBuilder.prototype.focusVisible_oh3mgy$;
  PropertiesBuilder.prototype.focusWithin_oh3mgy$ = PseudosRuleBuilder.prototype.focusWithin_oh3mgy$;
  PropertiesBuilder.prototype.fullscreen_oh3mgy$ = PseudosRuleBuilder.prototype.fullscreen_oh3mgy$;
  PropertiesBuilder.prototype.future_oh3mgy$ = PseudosRuleBuilder.prototype.future_oh3mgy$;
  PropertiesBuilder.prototype.hover_oh3mgy$ = PseudosRuleBuilder.prototype.hover_oh3mgy$;
  PropertiesBuilder.prototype.inRange_oh3mgy$ = PseudosRuleBuilder.prototype.inRange_oh3mgy$;
  PropertiesBuilder.prototype.indeterminate_oh3mgy$ = PseudosRuleBuilder.prototype.indeterminate_oh3mgy$;
  PropertiesBuilder.prototype.invalid_oh3mgy$ = PseudosRuleBuilder.prototype.invalid_oh3mgy$;
  PropertiesBuilder.prototype.lastChild_oh3mgy$ = PseudosRuleBuilder.prototype.lastChild_oh3mgy$;
  PropertiesBuilder.prototype.lastOfType_oh3mgy$ = PseudosRuleBuilder.prototype.lastOfType_oh3mgy$;
  PropertiesBuilder.prototype.left_oh3mgy$ = PseudosRuleBuilder.prototype.left_oh3mgy$;
  PropertiesBuilder.prototype.link_oh3mgy$ = PseudosRuleBuilder.prototype.link_oh3mgy$;
  PropertiesBuilder.prototype.localLink_oh3mgy$ = PseudosRuleBuilder.prototype.localLink_oh3mgy$;
  PropertiesBuilder.prototype.nthCol_oh3mgy$ = PseudosRuleBuilder.prototype.nthCol_oh3mgy$;
  PropertiesBuilder.prototype.nthLastCol_oh3mgy$ = PseudosRuleBuilder.prototype.nthLastCol_oh3mgy$;
  PropertiesBuilder.prototype.onlyChild_oh3mgy$ = PseudosRuleBuilder.prototype.onlyChild_oh3mgy$;
  PropertiesBuilder.prototype.onlyOfType_oh3mgy$ = PseudosRuleBuilder.prototype.onlyOfType_oh3mgy$;
  PropertiesBuilder.prototype.optional_oh3mgy$ = PseudosRuleBuilder.prototype.optional_oh3mgy$;
  PropertiesBuilder.prototype.outOfRange_oh3mgy$ = PseudosRuleBuilder.prototype.outOfRange_oh3mgy$;
  PropertiesBuilder.prototype.past_oh3mgy$ = PseudosRuleBuilder.prototype.past_oh3mgy$;
  PropertiesBuilder.prototype.paused_oh3mgy$ = PseudosRuleBuilder.prototype.paused_oh3mgy$;
  PropertiesBuilder.prototype.pictureInPicture_oh3mgy$ = PseudosRuleBuilder.prototype.pictureInPicture_oh3mgy$;
  PropertiesBuilder.prototype.placeholderShown_oh3mgy$ = PseudosRuleBuilder.prototype.placeholderShown_oh3mgy$;
  PropertiesBuilder.prototype.readOnly_oh3mgy$ = PseudosRuleBuilder.prototype.readOnly_oh3mgy$;
  PropertiesBuilder.prototype.readWrite_oh3mgy$ = PseudosRuleBuilder.prototype.readWrite_oh3mgy$;
  PropertiesBuilder.prototype.required_oh3mgy$ = PseudosRuleBuilder.prototype.required_oh3mgy$;
  PropertiesBuilder.prototype.right_oh3mgy$ = PseudosRuleBuilder.prototype.right_oh3mgy$;
  PropertiesBuilder.prototype.root_oh3mgy$ = PseudosRuleBuilder.prototype.root_oh3mgy$;
  PropertiesBuilder.prototype.scope_oh3mgy$ = PseudosRuleBuilder.prototype.scope_oh3mgy$;
  PropertiesBuilder.prototype.target_oh3mgy$ = PseudosRuleBuilder.prototype.target_oh3mgy$;
  PropertiesBuilder.prototype.targetWithin_oh3mgy$ = PseudosRuleBuilder.prototype.targetWithin_oh3mgy$;
  PropertiesBuilder.prototype.userInvalid_oh3mgy$ = PseudosRuleBuilder.prototype.userInvalid_oh3mgy$;
  PropertiesBuilder.prototype.userValid_oh3mgy$ = PseudosRuleBuilder.prototype.userValid_oh3mgy$;
  PropertiesBuilder.prototype.valid_oh3mgy$ = PseudosRuleBuilder.prototype.valid_oh3mgy$;
  PropertiesBuilder.prototype.visited_oh3mgy$ = PseudosRuleBuilder.prototype.visited_oh3mgy$;
  Kotlin.defineModule('kotlin-csstype', _);
  return _;
}));
