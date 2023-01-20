(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'CryptoAC', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('CryptoAC'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'CryptoAC-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'CryptoAC-test'.");
    }
    if (typeof CryptoAC === 'undefined') {
      throw new Error("Error loading module 'CryptoAC-test'. Its dependency 'CryptoAC' was not found. Please, check whether 'CryptoAC' is loaded prior to 'CryptoAC-test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'CryptoAC-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'CryptoAC-test'.");
    }
    root['CryptoAC-test'] = factory(typeof this['CryptoAC-test'] === 'undefined' ? {} : this['CryptoAC-test'], kotlin, CryptoAC, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$CryptoAC, $module$kotlin_test) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var SafeRegex = $module$CryptoAC.eu.fbk.st.cryptoac.SafeRegex;
  var assertTrue = $module$kotlin_test.kotlin.test.assertTrue_ifx8ge$;
  var assertFalse = $module$kotlin_test.kotlin.test.assertFalse_ifx8ge$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  var Element = $module$CryptoAC.eu.fbk.st.cryptoac.model.Element;
  var Unit = Kotlin.kotlin.Unit;
  var checkResultIsFailure = $module$kotlin_test.kotlin.test.checkResultIsFailure_8v9b5x$;
  var Result = Kotlin.kotlin.Result;
  var Throwable = Error;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var Condition = $module$CryptoAC.eu.fbk.st.cryptoac.model.tuple.Condition;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var hashSetOf = Kotlin.kotlin.collections.hashSetOf_i5x0yv$;
  var UnitElement = $module$CryptoAC.eu.fbk.st.cryptoac.model.unit.UnitElement;
  var cryptoac = $module$CryptoAC.eu.fbk.st.cryptoac;
  var User = $module$CryptoAC.eu.fbk.st.cryptoac.model.unit.User;
  var Role = $module$CryptoAC.eu.fbk.st.cryptoac.model.unit.Role;
  var equals = Kotlin.equals;
  function SafeRegexTest() {
    this.exampleSafeTextNoSpacesRegex_0 = 'text';
    this.exampleUrlRegex_0 = 'https://google.com/';
    this.exampleUriRegex_0 = '/#G1kiGui2qDYcdjriD0kdsspLycD75of';
    this.exampleIpv4Regex_0 = '192.168.111.4';
    this.exampleBase64Regex_0 = 'At539hww';
    this.exampleAwsAccessKeyRegex_0 = 'A94KF94IR9FIEKDMCJ84';
    this.exampleAwsSecretKeyRegex_0 = '3F9IKGJRIT58TYRHhe93hg88skf95uf74hdy3=/d';
  }
  SafeRegexTest.prototype.valid_texts_validate_against_regex = function () {
    assertTrue(SafeRegex.Companion.TEXT.matches_6bul2c$(this.exampleSafeTextNoSpacesRegex_0));
    assertTrue(SafeRegex.Companion.URL.matches_6bul2c$(this.exampleUrlRegex_0));
    assertTrue(SafeRegex.Companion.URI.matches_6bul2c$(this.exampleUriRegex_0));
    assertTrue(SafeRegex.Companion.IPV4.matches_6bul2c$(this.exampleIpv4Regex_0));
    assertTrue(SafeRegex.Companion.URL_OR_IPV4.matches_6bul2c$(this.exampleUrlRegex_0));
    assertTrue(SafeRegex.Companion.URL_OR_IPV4.matches_6bul2c$(this.exampleIpv4Regex_0));
    assertTrue(SafeRegex.Companion.BASE64.matches_6bul2c$(this.exampleBase64Regex_0));
    assertTrue(SafeRegex.Companion.AWS_ACCESS_KEY.matches_6bul2c$(this.exampleAwsAccessKeyRegex_0));
    assertTrue(SafeRegex.Companion.AWS_SECRET_KEY.matches_6bul2c$(this.exampleAwsSecretKeyRegex_0));
  };
  SafeRegexTest.prototype.empty_text_do_not_validate_against_regex = function () {
    assertFalse(SafeRegex.Companion.TEXT.matches_6bul2c$(''));
    assertFalse(SafeRegex.Companion.URL.matches_6bul2c$(''));
    assertFalse(SafeRegex.Companion.URI.matches_6bul2c$(''));
    assertFalse(SafeRegex.Companion.IPV4.matches_6bul2c$(''));
    assertFalse(SafeRegex.Companion.URL_OR_IPV4.matches_6bul2c$(''));
    assertFalse(SafeRegex.Companion.BASE64.matches_6bul2c$(''));
    assertFalse(SafeRegex.Companion.AWS_ACCESS_KEY.matches_6bul2c$(''));
    assertFalse(SafeRegex.Companion.AWS_SECRET_KEY.matches_6bul2c$(''));
  };
  SafeRegexTest.prototype.blank_text_do_not_validate_against_regex = function () {
    assertFalse(SafeRegex.Companion.TEXT.matches_6bul2c$(' '));
    assertFalse(SafeRegex.Companion.URL.matches_6bul2c$(' '));
    assertFalse(SafeRegex.Companion.URI.matches_6bul2c$(' '));
    assertFalse(SafeRegex.Companion.IPV4.matches_6bul2c$(' '));
    assertFalse(SafeRegex.Companion.URL_OR_IPV4.matches_6bul2c$(' '));
    assertFalse(SafeRegex.Companion.BASE64.matches_6bul2c$(' '));
    assertFalse(SafeRegex.Companion.AWS_ACCESS_KEY.matches_6bul2c$(' '));
    assertFalse(SafeRegex.Companion.AWS_SECRET_KEY.matches_6bul2c$(' '));
  };
  SafeRegexTest.prototype.not_anchored_text_at_the_beginning_do_not_validate_against_regex = function () {
    assertFalse(SafeRegex.Companion.TEXT.matches_6bul2c$(' text'));
    assertFalse(SafeRegex.Companion.URL.matches_6bul2c$(' https://google.com/'));
    assertFalse(SafeRegex.Companion.URI.matches_6bul2c$(' /#G1kiGui2qDYcdjriD0kdsspLycD75of'));
    assertFalse(SafeRegex.Companion.IPV4.matches_6bul2c$(' 192.168.111.4'));
    assertFalse(SafeRegex.Companion.URL_OR_IPV4.matches_6bul2c$(' https://google.com/'));
    assertFalse(SafeRegex.Companion.URL_OR_IPV4.matches_6bul2c$(' /#G1kiGui2qDYcdjriD0kdsspLycD75of'));
    assertFalse(SafeRegex.Companion.BASE64.matches_6bul2c$(' At539hww'));
    assertFalse(SafeRegex.Companion.AWS_ACCESS_KEY.matches_6bul2c$(' A94KF94IR9FIEKDMCJ84'));
    assertFalse(SafeRegex.Companion.AWS_SECRET_KEY.matches_6bul2c$(' 3F9IKGJRIT58TYRHhe93hg88skf95uf74hdy3=/d'));
  };
  SafeRegexTest.prototype.not_anchored_text_at_the_end_do_not_validate_against_regex = function () {
    assertFalse(SafeRegex.Companion.TEXT.matches_6bul2c$('text '));
    assertFalse(SafeRegex.Companion.URL.matches_6bul2c$('https://google.com/ '));
    assertFalse(SafeRegex.Companion.URI.matches_6bul2c$('/#G1kiGui2qDYcdjriD0kdsspLycD75of '));
    assertFalse(SafeRegex.Companion.IPV4.matches_6bul2c$('192.168.111.4 '));
    assertFalse(SafeRegex.Companion.URL_OR_IPV4.matches_6bul2c$('https://google.com/ '));
    assertFalse(SafeRegex.Companion.URL_OR_IPV4.matches_6bul2c$('/#G1kiGui2qDYcdjriD0kdsspLycD75of '));
    assertFalse(SafeRegex.Companion.BASE64.matches_6bul2c$('At539hww '));
    assertFalse(SafeRegex.Companion.AWS_ACCESS_KEY.matches_6bul2c$('A94KF94IR9FIEKDMCJ84 '));
    assertFalse(SafeRegex.Companion.AWS_SECRET_KEY.matches_6bul2c$('3F9IKGJRIT58TYRHhe93hg88skf95uf74hdy3=/d '));
  };
  SafeRegexTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SafeRegexTest',
    interfaces: []
  };
  function CryptoACObjectTest() {
  }
  CryptoACObjectTest.prototype.enforcing_positive_numbers_positive_values_works = function () {
    Element.Companion.requirePositiveNumber_za3lpa$(1);
  };
  CryptoACObjectTest.prototype.enforcing_positive_numbers_with_zero_or_negative_values_throws_exception = function () {
    var tmp$;
    try {
      Element.Companion.requirePositiveNumber_za3lpa$(0);
      tmp$ = new Result(Unit);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = new Result(createFailure(e));
      } else
        throw e;
    }
    checkResultIsFailure(null, tmp$);
    var tmp$_0;
    try {
      Element.Companion.requirePositiveNumber_za3lpa$(-1);
      tmp$_0 = new Result(Unit);
    } catch (e_0) {
      if (Kotlin.isType(e_0, Throwable)) {
        tmp$_0 = new Result(createFailure(e_0));
      } else
        throw e_0;
    }
    checkResultIsFailure(null, tmp$_0);
  };
  CryptoACObjectTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CryptoACObjectTest',
    interfaces: []
  };
  function AccessStructureTest() {
  }
  AccessStructureTest.prototype.parse_valid_access_structure_works = function () {
    assertEquals('Bob or Luca', Condition.Companion.parseAccessStructure_61zpoe$('Bob or Luca').toString());
    assertEquals('Alice and (Bob or Luca)', Condition.Companion.parseAccessStructure_61zpoe$('Alice and (Bob or Luca)').toString());
    assertEquals('(Bob and Luca) or Alice', Condition.Companion.parseAccessStructure_61zpoe$('(Bob and Luca) or Alice').toString());
    assertEquals('(Alice or Bob) and (Carl or Denise)', Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)').toString());
    assertEquals('((Alice or Bob) and Erica) and (Carl or Denise)', Condition.Companion.parseAccessStructure_61zpoe$('((Alice or Bob) and Erica) and (Carl or Denise)').toString());
    assertEquals('(Erica and (Alice or Bob)) and (Carl or Denise)', Condition.Companion.parseAccessStructure_61zpoe$('(Erica and (Alice or Bob)) and (Carl or Denise)').toString());
    assertEquals('(Carl or Denise) and ((Alice or Bob) and Erica)', Condition.Companion.parseAccessStructure_61zpoe$('(Carl or Denise) and ((Alice or Bob) and Erica)').toString());
    assertEquals('(Carl or Denise) and (Erica and (Alice or Bob))', Condition.Companion.parseAccessStructure_61zpoe$('(Carl or Denise) and (Erica and (Alice or Bob))').toString());
    assertEquals('Alice and (Carl or (Bob and Luca))', Condition.Companion.parseAccessStructure_61zpoe$('Alice and (Carl or (Bob and Luca))').toString());
    assertEquals('((Alice and Carl) or Bob) and Luca', Condition.Companion.parseAccessStructure_61zpoe$('((Alice and Carl) or Bob) and Luca').toString());
    assertEquals('Alice and ((Silvio or ((Bob and Carl) and Denise)) and Zuck)', Condition.Companion.parseAccessStructure_61zpoe$('Alice and ((Silvio or ((Bob and Carl) and Denise)) and Zuck)').toString());
    assertEquals('Alice or ((Silvio and (Bob and Carl)) and Marco)', Condition.Companion.parseAccessStructure_61zpoe$('Alice or (( Silvio and (Bob and Carl)) and Marco)').toString());
  };
  AccessStructureTest.prototype.remove_valid_access_structure_works = function () {
    var $receiver = Condition.Companion.parseAccessStructure_61zpoe$('Bob or Luca');
    assertTrue($receiver.containsAtLeastOne_oyxfla$(hashSetOf(['Luca'])));
    $receiver.remove_oyxfla$(hashSetOf(['Luca']));
    assertEquals('Bob', $receiver.toString());
    var $receiver_0 = Condition.Companion.parseAccessStructure_61zpoe$('Bob or Luca');
    assertTrue($receiver_0.containsAtLeastOne_oyxfla$(hashSetOf(['Bob'])));
    $receiver_0.remove_oyxfla$(hashSetOf(['Bob']));
    assertEquals('Luca', $receiver_0.toString());
    var $receiver_1 = Condition.Companion.parseAccessStructure_61zpoe$('Bob or Luca');
    assertTrue($receiver_1.containsAtLeastOne_oyxfla$(hashSetOf(['Bob', 'Luca'])));
    $receiver_1.remove_oyxfla$(hashSetOf(['Bob', 'Luca']));
    assertEquals('', $receiver_1.toString());
    var $receiver_2 = Condition.Companion.parseAccessStructure_61zpoe$('Alice and (Bob or Luca)');
    assertTrue($receiver_2.containsAtLeastOne_oyxfla$(hashSetOf(['Bob'])));
    $receiver_2.remove_oyxfla$(hashSetOf(['Bob']));
    assertEquals('Alice and Luca', $receiver_2.toString());
    var $receiver_3 = Condition.Companion.parseAccessStructure_61zpoe$('Alice and (Bob or Luca)');
    assertTrue($receiver_3.containsAtLeastOne_oyxfla$(hashSetOf(['Alice'])));
    $receiver_3.remove_oyxfla$(hashSetOf(['Alice']));
    assertEquals('Bob or Luca', $receiver_3.toString());
    var $receiver_4 = Condition.Companion.parseAccessStructure_61zpoe$('Alice and (Bob or Luca)');
    assertTrue($receiver_4.containsAtLeastOne_oyxfla$(hashSetOf(['Luca'])));
    $receiver_4.remove_oyxfla$(hashSetOf(['Luca']));
    assertEquals('Alice and Bob', $receiver_4.toString());
    var $receiver_5 = Condition.Companion.parseAccessStructure_61zpoe$('Alice and (Bob or Luca)');
    assertTrue($receiver_5.containsAtLeastOne_oyxfla$(hashSetOf(['Alice', 'Bob', 'Luca'])));
    $receiver_5.remove_oyxfla$(hashSetOf(['Alice', 'Bob', 'Luca']));
    assertEquals('', $receiver_5.toString());
    var $receiver_6 = Condition.Companion.parseAccessStructure_61zpoe$('(Bob and Luca) or Alice');
    assertTrue($receiver_6.containsAtLeastOne_oyxfla$(hashSetOf(['Luca'])));
    $receiver_6.remove_oyxfla$(hashSetOf(['Luca']));
    assertEquals('Bob or Alice', $receiver_6.toString());
    var $receiver_7 = Condition.Companion.parseAccessStructure_61zpoe$('(Bob and Luca) or Alice');
    assertTrue($receiver_7.containsAtLeastOne_oyxfla$(hashSetOf(['Bob'])));
    $receiver_7.remove_oyxfla$(hashSetOf(['Bob']));
    assertEquals('Luca or Alice', $receiver_7.toString());
    var $receiver_8 = Condition.Companion.parseAccessStructure_61zpoe$('(Bob and Luca) or Alice');
    assertTrue($receiver_8.containsAtLeastOne_oyxfla$(hashSetOf(['Alice'])));
    $receiver_8.remove_oyxfla$(hashSetOf(['Alice']));
    assertEquals('Bob and Luca', $receiver_8.toString());
    var $receiver_9 = Condition.Companion.parseAccessStructure_61zpoe$('(Bob and Luca) or Alice');
    assertTrue($receiver_9.containsAtLeastOne_oyxfla$(hashSetOf(['Alice', 'Bob', 'Luca'])));
    $receiver_9.remove_oyxfla$(hashSetOf(['Alice', 'Bob', 'Luca']));
    assertEquals('', $receiver_9.toString());
    var $receiver_10 = Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)');
    assertTrue($receiver_10.containsAtLeastOne_oyxfla$(hashSetOf(['Alice'])));
    $receiver_10.remove_oyxfla$(hashSetOf(['Alice']));
    assertEquals('Bob and (Carl or Denise)', $receiver_10.toString());
    var $receiver_11 = Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)');
    assertTrue($receiver_11.containsAtLeastOne_oyxfla$(hashSetOf(['Bob'])));
    $receiver_11.remove_oyxfla$(hashSetOf(['Bob']));
    assertEquals('Alice and (Carl or Denise)', $receiver_11.toString());
    var $receiver_12 = Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)');
    assertTrue($receiver_12.containsAtLeastOne_oyxfla$(hashSetOf(['Carl'])));
    $receiver_12.remove_oyxfla$(hashSetOf(['Carl']));
    assertEquals('(Alice or Bob) and Denise', $receiver_12.toString());
    var $receiver_13 = Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)');
    assertTrue($receiver_13.containsAtLeastOne_oyxfla$(hashSetOf(['Denise'])));
    $receiver_13.remove_oyxfla$(hashSetOf(['Denise']));
    assertEquals('(Alice or Bob) and Carl', $receiver_13.toString());
    var $receiver_14 = Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)');
    assertTrue($receiver_14.containsAtLeastOne_oyxfla$(hashSetOf(['Carl', 'Denise'])));
    $receiver_14.remove_oyxfla$(hashSetOf(['Carl', 'Denise']));
    assertEquals('Alice or Bob', $receiver_14.toString());
    var $receiver_15 = Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)');
    assertTrue($receiver_15.containsAtLeastOne_oyxfla$(hashSetOf(['Alice', 'Denise'])));
    $receiver_15.remove_oyxfla$(hashSetOf(['Alice', 'Denise']));
    assertEquals('Bob and Carl', $receiver_15.toString());
    var $receiver_16 = Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)');
    assertTrue($receiver_16.containsAtLeastOne_oyxfla$(hashSetOf(['Alice', 'Bob', 'Carl', 'Denise'])));
    $receiver_16.remove_oyxfla$(hashSetOf(['Alice', 'Bob', 'Carl', 'Denise']));
    assertEquals('', $receiver_16.toString());
    var $receiver_17 = Condition.Companion.parseAccessStructure_61zpoe$('((Alice or Bob) and Erica) and (Carl or Denise)');
    assertTrue($receiver_17.containsAtLeastOne_oyxfla$(hashSetOf(['Alice', 'Carl'])));
    $receiver_17.remove_oyxfla$(hashSetOf(['Alice', 'Carl']));
    assertEquals('(Bob and Erica) and Denise', $receiver_17.toString());
    var $receiver_18 = Condition.Companion.parseAccessStructure_61zpoe$('((Alice or Bob) and Erica) and (Carl or Denise)');
    assertTrue($receiver_18.containsAtLeastOne_oyxfla$(hashSetOf(['Bob', 'Erica'])));
    $receiver_18.remove_oyxfla$(hashSetOf(['Bob', 'Erica']));
    assertEquals('Alice and (Carl or Denise)', $receiver_18.toString());
    var $receiver_19 = Condition.Companion.parseAccessStructure_61zpoe$('((Alice or Bob) and Erica) and (Carl or Denise)');
    assertTrue($receiver_19.containsAtLeastOne_oyxfla$(hashSetOf(['Carl', 'Denise', 'Alice', 'Bob'])));
    $receiver_19.remove_oyxfla$(hashSetOf(['Carl', 'Denise', 'Alice', 'Bob']));
    assertEquals('Erica', $receiver_19.toString());
    var $receiver_20 = Condition.Companion.parseAccessStructure_61zpoe$('((Alice or Bob) and Erica) and (Carl or Denise)');
    assertTrue($receiver_20.containsAtLeastOne_oyxfla$(hashSetOf(['Carl', 'Denise', 'Alice', 'Bob'])));
    $receiver_20.remove_oyxfla$(hashSetOf(['Erica', 'Carl', 'Denise', 'Alice', 'Bob']));
    assertEquals('', $receiver_20.toString());
    var $receiver_21 = Condition.Companion.parseAccessStructure_61zpoe$('(Erica and (Alice or Bob)) and (Carl or Denise)');
    assertTrue($receiver_21.containsAtLeastOne_oyxfla$(hashSetOf(['Bob', 'Carl'])));
    $receiver_21.remove_oyxfla$(hashSetOf(['Bob', 'Carl']));
    assertEquals('(Erica and Alice) and Denise', $receiver_21.toString());
    var $receiver_22 = Condition.Companion.parseAccessStructure_61zpoe$('(Erica and (Alice or Bob)) and (Carl or Denise)');
    assertTrue($receiver_22.containsAtLeastOne_oyxfla$(hashSetOf(['Erica'])));
    $receiver_22.remove_oyxfla$(hashSetOf(['Erica']));
    assertEquals('(Alice or Bob) and (Carl or Denise)', $receiver_22.toString());
    var $receiver_23 = Condition.Companion.parseAccessStructure_61zpoe$('(Erica and (Alice or Bob)) and (Carl or Denise)');
    assertTrue($receiver_23.containsAtLeastOne_oyxfla$(hashSetOf(['Erica', 'Alice', 'Bob', 'Carl', 'Denise'])));
    $receiver_23.remove_oyxfla$(hashSetOf(['Erica', 'Alice', 'Bob', 'Carl', 'Denise']));
    assertEquals('', $receiver_23.toString());
    var $receiver_24 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_24.containsAtLeastOne_oyxfla$(hashSetOf(['From'])));
    $receiver_24.remove_oyxfla$(hashSetOf(['From']));
    assertEquals('(Floor in (2, 5) or Date = March 1-15, 2015) and (Prize < 10 or Denise)', $receiver_24.toString());
    var $receiver_25 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_25.containsAtLeastOne_oyxfla$(hashSetOf(['Floor'])));
    $receiver_25.remove_oyxfla$(hashSetOf(['Floor']));
    assertEquals('(From:Bob and Date = March 1-15, 2015) and (Prize < 10 or Denise)', $receiver_25.toString());
    var $receiver_26 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_26.containsAtLeastOne_oyxfla$(hashSetOf(['Date'])));
    $receiver_26.remove_oyxfla$(hashSetOf(['Date']));
    assertEquals('(From:Bob and Floor in (2, 5)) and (Prize < 10 or Denise)', $receiver_26.toString());
    var $receiver_27 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_27.containsAtLeastOne_oyxfla$(hashSetOf(['Prize'])));
    $receiver_27.remove_oyxfla$(hashSetOf(['Prize']));
    assertEquals('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and Denise', $receiver_27.toString());
    var $receiver_28 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_28.containsAtLeastOne_oyxfla$(hashSetOf(['Denise'])));
    $receiver_28.remove_oyxfla$(hashSetOf(['Denise']));
    assertEquals('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and Prize < 10', $receiver_28.toString());
    var $receiver_29 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_29.containsAtLeastOne_oyxfla$(hashSetOf(['From', 'Date'])));
    $receiver_29.remove_oyxfla$(hashSetOf(['From', 'Date']));
    assertEquals('Floor in (2, 5) and (Prize < 10 or Denise)', $receiver_29.toString());
    var $receiver_30 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_30.containsAtLeastOne_oyxfla$(hashSetOf(['From', 'Prize'])));
    $receiver_30.remove_oyxfla$(hashSetOf(['From', 'Prize']));
    assertEquals('(Floor in (2, 5) or Date = March 1-15, 2015) and Denise', $receiver_30.toString());
    var $receiver_31 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_31.containsAtLeastOne_oyxfla$(hashSetOf(['Floor', 'Denise'])));
    $receiver_31.remove_oyxfla$(hashSetOf(['Floor', 'Denise']));
    assertEquals('(From:Bob and Date = March 1-15, 2015) and Prize < 10', $receiver_31.toString());
    var $receiver_32 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_32.containsAtLeastOne_oyxfla$(hashSetOf(['From', 'Floor', 'Date', 'Prize'])));
    $receiver_32.remove_oyxfla$(hashSetOf(['From', 'Floor', 'Date', 'Prize']));
    assertEquals('Denise', $receiver_32.toString());
    var $receiver_33 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_33.containsAtLeastOne_oyxfla$(hashSetOf(['From', 'Floor', 'Date', 'Denise'])));
    $receiver_33.remove_oyxfla$(hashSetOf(['From', 'Floor', 'Date', 'Denise']));
    assertEquals('Prize < 10', $receiver_33.toString());
    var $receiver_34 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_34.containsAtLeastOne_oyxfla$(hashSetOf(['From', 'Floor', 'Prize', 'Denise'])));
    $receiver_34.remove_oyxfla$(hashSetOf(['From', 'Floor', 'Prize', 'Denise']));
    assertEquals('Date = March 1-15, 2015', $receiver_34.toString());
    var $receiver_35 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_35.containsAtLeastOne_oyxfla$(hashSetOf(['From', 'Date', 'Prize', 'Denise'])));
    $receiver_35.remove_oyxfla$(hashSetOf(['From', 'Date', 'Prize', 'Denise']));
    assertEquals('Floor in (2, 5)', $receiver_35.toString());
    var $receiver_36 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_36.containsAtLeastOne_oyxfla$(hashSetOf(['Floor', 'Date', 'Prize', 'Denise'])));
    $receiver_36.remove_oyxfla$(hashSetOf(['Floor', 'Date', 'Prize', 'Denise']));
    assertEquals('From:Bob', $receiver_36.toString());
  };
  AccessStructureTest.prototype.get_attributes_works = function () {
    var $receiver = Condition.Companion.parseAccessStructure_61zpoe$('Bob or Luca');
    assertEquals(hashSetOf(['Bob', 'Luca']), $receiver.getAttributes());
    var $receiver_0 = Condition.Companion.parseAccessStructure_61zpoe$('Alice and (Bob or Luca)');
    assertEquals(hashSetOf(['Bob', 'Luca', 'Alice']), $receiver_0.getAttributes());
    var $receiver_1 = Condition.Companion.parseAccessStructure_61zpoe$('(Bob and Luca) or Alice');
    assertEquals(hashSetOf(['Bob', 'Luca', 'Alice']), $receiver_1.getAttributes());
    var $receiver_2 = Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)');
    assertEquals(hashSetOf(['Bob', 'Carl', 'Alice', 'Denise']), $receiver_2.getAttributes());
    var $receiver_3 = Condition.Companion.parseAccessStructure_61zpoe$('((Alice or Bob) and Erica) and (Carl or Denise)');
    assertEquals(hashSetOf(['Bob', 'Carl', 'Alice', 'Denise', 'Erica']), $receiver_3.getAttributes());
    var $receiver_4 = Condition.Companion.parseAccessStructure_61zpoe$('(Erica and (Alice or Bob)) and (Carl or Denise)');
    assertEquals(hashSetOf(['Bob', 'Carl', 'Alice', 'Denise', 'Erica']), $receiver_4.getAttributes());
    var $receiver_5 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertEquals(hashSetOf(['From', 'Floor', 'Date', 'Prize', 'Denise']), $receiver_5.getAttributes());
  };
  AccessStructureTest.prototype.replace_attribute_name_works = function () {
    var $receiver = Condition.Companion.parseAccessStructure_61zpoe$('Bob or Luca');
    assertTrue($receiver.replaceAttribute_puj7f4$('Bob', 'Bob_1'));
    assertEquals('Bob_1 or Luca', $receiver.toString());
    var $receiver_0 = Condition.Companion.parseAccessStructure_61zpoe$('Alice and (Bob or Luca)');
    assertTrue($receiver_0.replaceAttribute_puj7f4$('Alice', 'Alice_1'));
    assertEquals('Alice_1 and (Bob or Luca)', $receiver_0.toString());
    var $receiver_1 = Condition.Companion.parseAccessStructure_61zpoe$('(Alice or Bob) and (Carl or Denise)');
    assertTrue($receiver_1.replaceAttribute_puj7f4$('Alice', 'Alice_1'));
    assertTrue($receiver_1.replaceAttribute_puj7f4$('Denise', 'Denise_2'));
    assertEquals('(Alice_1 or Bob) and (Carl or Denise_2)', $receiver_1.toString());
    var $receiver_2 = Condition.Companion.parseAccessStructure_61zpoe$('((Alice or Bob) and Erica) and (Carl or Denise)');
    assertTrue($receiver_2.replaceAttribute_puj7f4$('Alice', 'Alice_1'));
    assertTrue($receiver_2.replaceAttribute_puj7f4$('Denise', 'Denise_2'));
    assertTrue($receiver_2.replaceAttribute_puj7f4$('Erica', 'Erica_3'));
    assertFalse($receiver_2.replaceAttribute_puj7f4$('Alice', 'Alice_2'));
    assertEquals('((Alice_1 or Bob) and Erica_3) and (Carl or Denise_2)', $receiver_2.toString());
    var $receiver_3 = Condition.Companion.parseAccessStructure_61zpoe$('(Erica and (Alice or Bob)) and (Carl or Denise)');
    assertTrue($receiver_3.replaceAttribute_puj7f4$('Alice', 'Alice_1'));
    assertTrue($receiver_3.replaceAttribute_puj7f4$('Alice_1', 'Alice_2'));
    assertTrue($receiver_3.replaceAttribute_puj7f4$('Denise', 'Denise_2'));
    assertTrue($receiver_3.replaceAttribute_puj7f4$('Erica', 'Erica_3'));
    assertFalse($receiver_3.replaceAttribute_puj7f4$('Alice', 'Alice_2'));
    assertEquals('(Erica_3 and (Alice_2 or Bob)) and (Carl or Denise_2)', $receiver_3.toString());
    var $receiver_4 = Condition.Companion.parseAccessStructure_61zpoe$('(From:Bob and (Floor in (2, 5) or Date = March 1-15, 2015)) and (Prize < 10 or Denise)');
    assertTrue($receiver_4.replaceAttribute_puj7f4$('From', 'From_1'));
    assertFalse($receiver_4.replaceAttribute_puj7f4$('Bob', 'Bob_1'));
    assertTrue($receiver_4.replaceAttribute_puj7f4$('Floor', 'Floor_2'));
    assertTrue($receiver_4.replaceAttribute_puj7f4$('Date', 'Date_3'));
    assertTrue($receiver_4.replaceAttribute_puj7f4$('Prize', 'Prize_2'));
    assertTrue($receiver_4.replaceAttribute_puj7f4$('Denise', 'Denise_1'));
    assertEquals('(From_1:Bob and (Floor_2 in (2, 5) or Date_3 = March 1-15, 2015)) and (Prize_2 < 10 or Denise_1)', $receiver_4.toString());
  };
  AccessStructureTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AccessStructureTest',
    interfaces: []
  };
  function UnitElementTest() {
  }
  UnitElementTest.prototype.token_creation_for_positive_values_works = function () {
    assertTrue(UnitElement.Companion.generateRandomToken_za3lpa$(1).length === 1);
  };
  UnitElementTest.prototype.token_creation_with_zero_or_negative_values_fails = function () {
    var tmp$;
    try {
      UnitElement.Companion.generateRandomToken_za3lpa$(0);
      tmp$ = new Result(Unit);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = new Result(createFailure(e));
      } else
        throw e;
    }
    checkResultIsFailure(null, tmp$);
    var tmp$_0;
    try {
      UnitElement.Companion.generateRandomToken_za3lpa$(-1);
      tmp$_0 = new Result(Unit);
    } catch (e_0) {
      if (Kotlin.isType(e_0, Throwable)) {
        tmp$_0 = new Result(createFailure(e_0));
      } else
        throw e_0;
    }
    checkResultIsFailure(null, tmp$_0);
  };
  UnitElementTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnitElementTest',
    interfaces: []
  };
  function UnitElementWithKeysTest() {
  }
  UnitElementWithKeysTest.prototype.the_admin_token_is_the_name_of_the_admin = function () {
    assertEquals((new User(cryptoac.Constants.ADMIN)).token, cryptoac.Constants.ADMIN);
    assertEquals((new Role(cryptoac.Constants.ADMIN)).token, cryptoac.Constants.ADMIN);
  };
  UnitElementWithKeysTest.prototype.the_token_of_an_active_element_is_not_the_name_of_the_admin = function () {
    assertTrue(!equals((new User('Alice')).token, cryptoac.Constants.ADMIN));
    assertTrue(!equals((new Role('Student')).token, cryptoac.Constants.ADMIN));
  };
  UnitElementWithKeysTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnitElementWithKeysTest',
    interfaces: []
  };
  function AppTest() {
  }
  AppTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AppTest',
    interfaces: []
  };
  var package$eu = _.eu || (_.eu = {});
  var package$fbk = package$eu.fbk || (package$eu.fbk = {});
  var package$st = package$fbk.st || (package$fbk.st = {});
  var package$cryptoac = package$st.cryptoac || (package$st.cryptoac = {});
  package$cryptoac.SafeRegexTest = SafeRegexTest;
  $$importsForInline$$['kotlin-test'] = $module$kotlin_test;
  var package$model = package$cryptoac.model || (package$cryptoac.model = {});
  package$model.CryptoACObjectTest = CryptoACObjectTest;
  var package$tuple = package$model.tuple || (package$model.tuple = {});
  package$tuple.AccessStructureTest = AccessStructureTest;
  var package$unit = package$model.unit || (package$model.unit = {});
  package$unit.UnitElementTest = UnitElementTest;
  package$unit.UnitElementWithKeysTest = UnitElementWithKeysTest;
  var package$view = package$cryptoac.view || (package$cryptoac.view = {});
  package$view.AppTest = AppTest;
  suite('eu.fbk.st.cryptoac', false, function () {
    suite('SafeRegexTest', false, function () {
      test('valid_texts_validate_against_regex', false, function () {
        return (new SafeRegexTest()).valid_texts_validate_against_regex();
      });
      test('empty_text_do_not_validate_against_regex', false, function () {
        return (new SafeRegexTest()).empty_text_do_not_validate_against_regex();
      });
      test('blank_text_do_not_validate_against_regex', false, function () {
        return (new SafeRegexTest()).blank_text_do_not_validate_against_regex();
      });
      test('not_anchored_text_at_the_beginning_do_not_validate_against_regex', false, function () {
        return (new SafeRegexTest()).not_anchored_text_at_the_beginning_do_not_validate_against_regex();
      });
      test('not_anchored_text_at_the_end_do_not_validate_against_regex', false, function () {
        return (new SafeRegexTest()).not_anchored_text_at_the_end_do_not_validate_against_regex();
      });
    });
  });
  suite('eu.fbk.st.cryptoac.model', false, function () {
    suite('CryptoACObjectTest', false, function () {
      test('enforcing_positive_numbers_positive_values_works', false, function () {
        return (new CryptoACObjectTest()).enforcing_positive_numbers_positive_values_works();
      });
      test('enforcing_positive_numbers_with_zero_or_negative_values_throws_exception', false, function () {
        return (new CryptoACObjectTest()).enforcing_positive_numbers_with_zero_or_negative_values_throws_exception();
      });
    });
  });
  suite('eu.fbk.st.cryptoac.model.tuple', false, function () {
    suite('AccessStructureTest', false, function () {
      test('parse_valid_access_structure_works', false, function () {
        return (new AccessStructureTest()).parse_valid_access_structure_works();
      });
      test('remove_valid_access_structure_works', false, function () {
        return (new AccessStructureTest()).remove_valid_access_structure_works();
      });
      test('get_attributes_works', false, function () {
        return (new AccessStructureTest()).get_attributes_works();
      });
      test('replace_attribute_name_works', false, function () {
        return (new AccessStructureTest()).replace_attribute_name_works();
      });
    });
  });
  suite('eu.fbk.st.cryptoac.model.unit', false, function () {
    suite('UnitElementTest', false, function () {
      test('token_creation_for_positive_values_works', false, function () {
        return (new UnitElementTest()).token_creation_for_positive_values_works();
      });
      test('token_creation_with_zero_or_negative_values_fails', false, function () {
        return (new UnitElementTest()).token_creation_with_zero_or_negative_values_fails();
      });
    });
    suite('UnitElementWithKeysTest', false, function () {
      test('the_admin_token_is_the_name_of_the_admin', false, function () {
        return (new UnitElementWithKeysTest()).the_admin_token_is_the_name_of_the_admin();
      });
      test('the_token_of_an_active_element_is_not_the_name_of_the_admin', false, function () {
        return (new UnitElementWithKeysTest()).the_token_of_an_active_element_is_not_the_name_of_the_admin();
      });
    });
  });
  Kotlin.defineModule('CryptoAC-test', _);
  return _;
}));

//# sourceMappingURL=CryptoAC-test.js.map
