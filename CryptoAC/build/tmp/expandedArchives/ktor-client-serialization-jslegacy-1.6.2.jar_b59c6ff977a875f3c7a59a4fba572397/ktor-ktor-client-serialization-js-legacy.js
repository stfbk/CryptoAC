(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'ktor-ktor-http-js-legacy', 'ktor-ktor-io-js-legacy', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'kotlinx-serialization-kotlinx-serialization-json-js-legacy', 'ktor-ktor-client-json-js-legacy'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-io-js-legacy'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('kotlinx-serialization-kotlinx-serialization-json-js-legacy'), require('ktor-ktor-client-json-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-client-serialization-js-legacy'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-legacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'ktor-ktor-client-serialization-js-legacy'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-legacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' is loaded prior to 'ktor-ktor-client-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-client-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-legacy'. Its dependency 'ktor-ktor-client-json-js-legacy' was not found. Please, check whether 'ktor-ktor-client-json-js-legacy' is loaded prior to 'ktor-ktor-client-serialization-js-legacy'.");
    }
    root['ktor-ktor-client-serialization-js-legacy'] = factory(typeof this['ktor-ktor-client-serialization-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-serialization-js-legacy'], kotlin, this['ktor-ktor-http-js-legacy'], this['ktor-ktor-io-js-legacy'], this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'], this['ktor-ktor-client-json-js-legacy']);
  }
}(this, function(_, Kotlin, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_io_js_legacy, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy, $module$ktor_ktor_client_json_js_legacy) {
  'use strict';
  var TextContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.TextContent;
  var readText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readText_1lnizf$;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_saj79j$;
  var serializer_0 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_1yb8b7$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.Json_x26noe$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var JsonSerializer = $module$ktor_ktor_client_json_js_legacy.io.ktor.client.features.json.JsonSerializer;
  var JsonElement = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.JsonElement;
  var ListSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.ListSerializer_swdriu$;
  var List = Kotlin.kotlin.collections.List;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_us0mfu$;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var serializer_1 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_6eet4j$;
  var SetSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.SetSerializer_swdriu$;
  var Set = Kotlin.kotlin.collections.Set;
  var MapSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.MapSerializer_2yqygg$;
  var Map = Kotlin.kotlin.collections.Map;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var throwCCE = Kotlin.throwCCE;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var singleOrNull = Kotlin.kotlin.collections.singleOrNull_2p1efm$;
  var get_nullable = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.get_nullable_2418p6$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var json = $module$ktor_ktor_client_json_js_legacy.io.ktor.client.features.json;
  function KotlinxSerializer(json) {
    KotlinxSerializer$Companion_getInstance();
    if (json === void 0) 
      json = KotlinxSerializer$Companion_getInstance().DefaultJson;
    this.json_0 = json;
  }
  KotlinxSerializer.prototype.write_ydd6c4$ = function(data, contentType) {
  return new TextContent(this.writeContent_kcmwxo$(data), contentType);
};
  KotlinxSerializer.prototype.writeContent_kcmwxo$ = function(data) {
  return this.json_0.encodeToString_tf03ej$(buildSerializer(data, this.json_0.serializersModule), data);
};
  KotlinxSerializer.prototype.read_slinh1$ = function(type, body) {
  var tmp$, tmp$_0;
  var text = readText(body);
  var deserializationStrategy = this.json_0.serializersModule.getContextual_2n2k9f$(type.type);
  var mapper = deserializationStrategy != null ? deserializationStrategy : (tmp$_0 = (tmp$ = type.kotlinType) != null ? serializer(tmp$) : null) != null ? tmp$_0 : serializer_0(type.type);
  return ensureNotNull(this.json_0.decodeFromString_awif5v$(mapper, text));
};
  function KotlinxSerializer$Companion() {
    KotlinxSerializer$Companion_instance = this;
    this.DefaultJsonConfiguration = Json(void 0, KotlinxSerializer$Companion$DefaultJsonConfiguration$lambda);
    this.DefaultJson = Json(void 0, KotlinxSerializer$Companion$DefaultJson$lambda);
  }
  function KotlinxSerializer$Companion$DefaultJsonConfiguration$lambda($receiver) {
    $receiver.isLenient = false;
    $receiver.ignoreUnknownKeys = false;
    $receiver.allowSpecialFloatingPointValues = true;
    $receiver.useArrayPolymorphism = false;
    return Unit;
  }
  function KotlinxSerializer$Companion$DefaultJson$lambda($receiver) {
    $receiver.isLenient = false;
    $receiver.ignoreUnknownKeys = false;
    $receiver.allowSpecialFloatingPointValues = true;
    $receiver.useArrayPolymorphism = false;
    return Unit;
  }
  KotlinxSerializer$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var KotlinxSerializer$Companion_instance = null;
  function KotlinxSerializer$Companion_getInstance() {
    if (KotlinxSerializer$Companion_instance === null) {
      new KotlinxSerializer$Companion();
    }
    return KotlinxSerializer$Companion_instance;
  }
  KotlinxSerializer.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'KotlinxSerializer', 
  interfaces: [JsonSerializer]};
  function buildSerializer(value, module_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (Kotlin.isType(value, JsonElement)) 
      tmp$_2 = JsonElement.Companion.serializer();
    else if (Kotlin.isType(value, List)) 
      tmp$_2 = ListSerializer(elementSerializer(value, module_0));
    else if (Kotlin.isArray(value)) {
      tmp$_2 = (tmp$_0 = (tmp$ = firstOrNull(value)) != null ? buildSerializer(tmp$, module_0) : null) != null ? tmp$_0 : ListSerializer(serializer_1(kotlin_js_internal_StringCompanionObject));
    } else if (Kotlin.isType(value, Set)) 
      tmp$_2 = SetSerializer(elementSerializer(value, module_0));
    else if (Kotlin.isType(value, Map)) {
      var keySerializer = elementSerializer(value.keys, module_0);
      var valueSerializer = elementSerializer(value.values, module_0);
      tmp$_2 = MapSerializer(keySerializer, valueSerializer);
    } else {
      tmp$_2 = (tmp$_1 = module_0.getContextual_2n2k9f$(Kotlin.getKClassFromExpression(value))) != null ? tmp$_1 : serializer_0(Kotlin.getKClassFromExpression(value));
    }
    return Kotlin.isType(tmp$_3 = tmp$_2, KSerializer) ? tmp$_3 : throwCCE();
  }
  function elementSerializer($receiver, module_0) {
    var tmp$, tmp$_0;
    var $receiver_0 = filterNotNull($receiver);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(buildSerializer(item, module_0));
    }
    var tmp$_2;
    var set = HashSet_init();
    var list = ArrayList_init_0();
    tmp$_2 = destination.iterator();
    while (tmp$_2.hasNext()) {
      var e = tmp$_2.next();
      var key = e.descriptor.serialName;
      if (set.add_11rb$(key)) 
        list.add_11rb$(e);
    }
    var serializers = list;
    if (serializers.size > 1) {
      var destination_0 = ArrayList_init(collectionSizeOrDefault(serializers, 10));
      var tmp$_3;
      tmp$_3 = serializers.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        destination_0.add_11rb$(item_0.descriptor.serialName);
      }
      throw IllegalStateException_init(('Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + destination_0)).toString());
    }
    var selected = (tmp$ = singleOrNull(serializers)) != null ? tmp$ : serializer_1(kotlin_js_internal_StringCompanionObject);
    if (selected.descriptor.isNullable) {
      return selected;
    }
        Kotlin.isType(tmp$_0 = selected, KSerializer) ? tmp$_0 : throwCCE();
    var any$result;
    any$break:
      do {
        var tmp$_4;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$_4 = $receiver.iterator();
        while (tmp$_4.hasNext()) {
          var element = tmp$_4.next();
          if (element == null) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      } while (false);
    if (any$result) {
      return get_nullable(selected);
    }
    return selected;
  }
  var initializer;
  function SerializerInitializer() {
    SerializerInitializer_instance = this;
    var $receiver = json.serializersStore;
    var element = new KotlinxSerializer();
    $receiver.add_11rb$(element);
  }
  SerializerInitializer.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'SerializerInitializer', 
  interfaces: []};
  var SerializerInitializer_instance = null;
  function SerializerInitializer_getInstance() {
    if (SerializerInitializer_instance === null) {
      new SerializerInitializer();
    }
    return SerializerInitializer_instance;
  }
  Object.defineProperty(KotlinxSerializer, 'Companion', {
  get: KotlinxSerializer$Companion_getInstance});
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$features = package$client.features || (package$client.features = {});
  var package$json = package$features.json || (package$features.json = {});
  var package$serializer = package$json.serializer || (package$json.serializer = {});
  package$serializer.KotlinxSerializer = KotlinxSerializer;
  Object.defineProperty(_, 'initializer', {
  get: function() {
  return initializer;
}});
  Object.defineProperty(_, 'SerializerInitializer', {
  get: SerializerInitializer_getInstance});
  KotlinxSerializer.prototype.write_za3rmp$ = JsonSerializer.prototype.write_za3rmp$;
  KotlinxSerializer.prototype.read_2ktxo1$ = JsonSerializer.prototype.read_2ktxo1$;
  initializer = SerializerInitializer_getInstance();
  Kotlin.defineModule('ktor-ktor-client-serialization-js-legacy', _);
  return _;
}));
