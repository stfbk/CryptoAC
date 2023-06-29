(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js', './ktor-ktor-http-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-client-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-client-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'ktor-ktor-client-json-js-ir' was not found. Please, check whether 'ktor-ktor-client-json-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    root['ktor-ktor-client-serialization-js-ir'] = factory(typeof this['ktor-ktor-client-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['ktor-ktor-http-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-client-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_json) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var VOID = kotlin_kotlin.$_$.lh;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var protoOf = kotlin_kotlin.$_$.sb;
  var objectMeta = kotlin_kotlin.$_$.rb;
  var setMetadataFor = kotlin_kotlin.$_$.tb;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.w;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h3;
  var ensureNotNull = kotlin_kotlin.$_$.wg;
  var write = kotlin_io_ktor_ktor_client_json.$_$.a;
  var JsonSerializer = kotlin_io_ktor_ktor_client_json.$_$.b;
  var classMeta = kotlin_kotlin.$_$.ka;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Map = kotlin_kotlin.$_$.m5;
  var isInterface = kotlin_kotlin.$_$.eb;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Set = kotlin_kotlin.$_$.s5;
  var firstOrNull = kotlin_kotlin.$_$.c7;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.o4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var isArray = kotlin_kotlin.$_$.wa;
  var List = kotlin_kotlin.$_$.k5;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.fg;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var filterNotNull = kotlin_kotlin.$_$.a7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var toString = kotlin_kotlin.$_$.xb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var singleOrNull = kotlin_kotlin.$_$.l8;
  var Collection = kotlin_kotlin.$_$.c5;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var get_serializersStore = kotlin_io_ktor_ktor_client_json.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(KotlinxSerializer, 'KotlinxSerializer', classMeta, VOID, [JsonSerializer]);
  setMetadataFor(SerializerInitializer, 'SerializerInitializer', objectMeta);
  //endregion
  function KotlinxSerializer$Companion$DefaultJson$lambda($this$Json) {
    $this$Json.set_isLenient_9pe3jb_k$(false);
    $this$Json.set_ignoreUnknownKeys_d94li_k$(false);
    $this$Json.set_allowSpecialFloatingPointValues_9kglh2_k$(true);
    $this$Json.set_useArrayPolymorphism_a7xwxf_k$(false);
    return Unit_getInstance();
  }
  function _get_json__d8whur($this) {
    return $this.json_1;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.DefaultJson_1 = Json(VOID, KotlinxSerializer$Companion$DefaultJson$lambda);
  }
  protoOf(Companion).get_DefaultJson_y8vsqo_k$ = function () {
    return this.DefaultJson_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KotlinxSerializer(json) {
    Companion_getInstance_0();
    json = json === VOID ? Companion_getInstance_0().DefaultJson_1 : json;
    this.json_1 = json;
  }
  protoOf(KotlinxSerializer).write_tmo8x3_k$ = function (data, contentType) {
    return new TextContent(this.writeContent_v4avoc_k$(data), contentType);
  };
  protoOf(KotlinxSerializer).writeContent_v4avoc_k$ = function (data) {
    return this.json_1.encodeToString_bhi5ce_k$(buildSerializer(data, this.json_1.get_serializersModule_piitvg_k$()), data);
  };
  protoOf(KotlinxSerializer).read_i3h8vj_k$ = function (type, body) {
    var text = body.readText$default_z6dvkm_k$();
    var deserializationStrategy = this.json_1.get_serializersModule_piitvg_k$().getContextual$default_9ols70_k$(type.get_type_wovaf7_k$());
    var tmp2_elvis_lhs = deserializationStrategy;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp0_safe_receiver = type.get_kotlinType_flgmsk_k$();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'io.ktor.client.plugins.kotlinx.serializer.KotlinxSerializer.read.<anonymous>' call
        tmp$ret$0 = serializer(tmp0_safe_receiver);
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? serializer_0(type.get_type_wovaf7_k$()) : tmp1_elvis_lhs;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var mapper = tmp;
    return ensureNotNull(this.json_1.decodeFromString_d9fce8_k$(mapper, text));
  };
  function buildSerializer(value, module_0) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject instanceof JsonElement) {
      tmp = Companion_getInstance().serializer_9w0wvi_k$();
    } else {
      if (isInterface(tmp0_subject, List)) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (isArray(tmp0_subject)) {
          var tmp1_safe_receiver = firstOrNull(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'io.ktor.client.plugins.kotlinx.serializer.buildSerializer.<anonymous>' call
            tmp$ret$0 = buildSerializer(tmp1_safe_receiver, module_0);
            tmp$ret$1 = tmp$ret$0;
            tmp_0 = tmp$ret$1;
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_1(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (isInterface(tmp0_subject, Set)) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (isInterface(tmp0_subject, Map)) {
              var keySerializer = elementSerializer(value.get_keys_wop4xp_k$(), module_0);
              var valueSerializer = elementSerializer(value.get_values_ksazhn_k$(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp3_elvis_lhs = module_0.getContextual$default_9ols70_k$(getKClassFromExpression(value));
              tmp = tmp3_elvis_lhs == null ? serializer_0(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_1 = tmp;
    return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.distinctBy' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = filterNotNull(_this__u8e3s4);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.kotlinx.serializer.elementSerializer.<anonymous>' call
      tmp$ret$0 = buildSerializer(item, module_0);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp2_distinctBy = tmp$ret$2;
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp2_distinctBy.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var e = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'io.ktor.client.plugins.kotlinx.serializer.elementSerializer.<anonymous>' call
      tmp$ret$3 = e.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      var key = tmp$ret$3;
      if (set.add_1j60pz_k$(key)) {
        list.add_1j60pz_k$(e);
      }
    }
    tmp$ret$4 = list;
    var serializers = tmp$ret$4;
    if (serializers.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.error' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp3_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$5;
        // Inline function 'io.ktor.client.plugins.kotlinx.serializer.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
        tmp3_mapTo.add_1j60pz_k$(tmp$ret$5);
      }
      tmp$ret$6 = tmp3_mapTo;
      tmp$ret$7 = tmp$ret$6;
      var tmp4_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
      throw IllegalStateException_init_$Create$(toString(tmp4_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_1(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
      return selected;
    }
    if (isInterface(selected, KSerializer))
      selected;
    else
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_2.next_20eer_k$();
        var tmp$ret$9;
        // Inline function 'io.ktor.client.plugins.kotlinx.serializer.elementSerializer.<anonymous>' call
        tmp$ret$9 = element == null;
        if (tmp$ret$9) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  function get_initializer() {
    return initializer;
  }
  var initializer;
  function SerializerInitializer() {
    SerializerInitializer_instance = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = get_serializersStore();
    var tmp1_plusAssign = new KotlinxSerializer();
    tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
  }
  var SerializerInitializer_instance;
  function SerializerInitializer_getInstance() {
    if (SerializerInitializer_instance == null)
      new SerializerInitializer();
    return SerializerInitializer_instance;
  }
  //region block: post-declaration
  protoOf(KotlinxSerializer).write_qtfzr3_k$ = write;
  //endregion
  //region block: init
  initializer = SerializerInitializer_getInstance();
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-serialization-js-ir.js.map
