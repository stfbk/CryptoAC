package eu.fbk.st.cryptoac.server.proxy.profile;

import java.lang.reflect.Type;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

/**
 * Since UserData has a variable of type DAOInterfaceParameters, but the serialized data may
 * hold subclasses of DAOInterfaceParameters, we want to deserialize to the proper subclass.
 * @param <T> generic
 */
public class InterfaceAdapterUserData<T> implements JsonSerializer<T>, JsonDeserializer<T> {

    /**
     * This method is not invoked.
     * @param object not needed
     * @param interfaceType not needed
     * @param context not needed
     * @return the sheer serialization of the given object
     */
    @Override
    public final JsonElement serialize(final T object, final Type interfaceType, final JsonSerializationContext context)
    {
        return context.serialize(object);
    }

    /**
     * This method deserialize the given element based on the type value.
     * The type value holds the FQN of the Java class.
     * @param elem the element to deserialize
     * @param interfaceType the interface type
     * @param context deserialization context
     * @return the de-serialized object
     * @throws JsonParseException if there were errors in parsing the JSON
     */
    @Override
    public final T deserialize(final JsonElement elem, final Type interfaceType, final JsonDeserializationContext context)
            throws JsonParseException {

        // get the type of the object
        final JsonObject member = (JsonObject) elem;
        final JsonElement typeString = get(member, "type");
        final Type actualType = typeForName(typeString);

        // deserialize basing on the type
        return context.deserialize(elem, actualType);
    }

    /**
     * return the class from the type
     * @param typeElem the element type as a string
     * @return the class for name
     */
    private Type typeForName(final JsonElement typeElem)
    {
        try {
            return Class.forName(typeElem.getAsString());
        }
        catch (ClassNotFoundException e) {
            throw new JsonParseException(e);
        }
    }

    /**
     * get the given member from the json.
     * @param wrapper the JSON object wrapping the element to get
     * @param memberName key of the element to get
     * @return the requested element
     */
    private JsonElement get(final JsonObject wrapper, final String memberName)
    {
        final JsonElement elem = wrapper.get(memberName);
        if (elem == null)
            throw new JsonParseException("no '" + memberName + "' member found in json file.");
        return elem;
    }
}
