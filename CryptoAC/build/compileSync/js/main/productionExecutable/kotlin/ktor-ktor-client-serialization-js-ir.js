(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js', './ktor-ktor-client-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./ktor-ktor-client-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'ktor-ktor-client-json-js-ir' was not found. Please, check whether 'ktor-ktor-client-json-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    root['ktor-ktor-client-serialization-js-ir'] = factory(typeof this['ktor-ktor-client-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['ktor-ktor-client-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_client_json) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.t4;
  var VOID = kotlin_kotlin.$_$.lf;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var protoOf = kotlin_kotlin.$_$.sa;
  var objectMeta = kotlin_kotlin.$_$.ra;
  var setMetadataFor = kotlin_kotlin.$_$.ta;
  var classMeta = kotlin_kotlin.$_$.k9;
  var get_serializersStore = kotlin_io_ktor_ktor_client_json.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(KotlinxSerializer, 'KotlinxSerializer', classMeta);
  setMetadataFor(SerializerInitializer, 'SerializerInitializer', objectMeta);
  //endregion
  function KotlinxSerializer$Companion$DefaultJson$lambda($this$Json) {
    $this$Json.f36_1 = false;
    $this$Json.e36_1 = false;
    $this$Json.m36_1 = true;
    $this$Json.k36_1 = false;
    return Unit_getInstance();
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.u4n_1 = Json(VOID, KotlinxSerializer$Companion$DefaultJson$lambda);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KotlinxSerializer(json) {
    Companion_getInstance();
    json = json === VOID ? Companion_getInstance().u4n_1 : json;
    this.v4n_1 = json;
  }
  var initializer;
  function SerializerInitializer() {
    SerializerInitializer_instance = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = get_serializersStore();
    var tmp1_plusAssign = new KotlinxSerializer();
    tmp0_plusAssign.a(tmp1_plusAssign);
  }
  var SerializerInitializer_instance;
  function SerializerInitializer_getInstance() {
    if (SerializerInitializer_instance == null)
      new SerializerInitializer();
    return SerializerInitializer_instance;
  }
  //region block: init
  initializer = SerializerInitializer_getInstance();
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-serialization-js-ir.js.map
