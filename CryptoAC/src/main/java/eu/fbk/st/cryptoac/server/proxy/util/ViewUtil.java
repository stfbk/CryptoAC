package eu.fbk.st.cryptoac.server.proxy.util;

import eu.fbk.st.cryptoac.util.Const;
import org.apache.velocity.app.*;
import spark.*;
import spark.template.velocity.VelocityTemplateEngine;

import java.util.*;

import static eu.fbk.st.cryptoac.util.Const.Apache.*;


/**
 * This class renders HTML templates at run time. Even though most of the UI
 * is rendered client side (through API calls that return JSON) there are
 * still some variables to be set server-side (like the "action" attribute
 * of the forms)
 */
public class ViewUtil {

    /**
     * This method renders a template given a Model (i.e., data to visualize).
     * @param model data to insert in the page
     * @param templatePath path of the template to render
     * @return the HTML rendered page
     */
    public static String render(Map<String, Object> model, String templatePath) {

        model.put(kDAOInterfaceLocalParameters, new FieldMethodizer(Const.DAOInterfaceLocalParameters.class.getName()));
        model.put(kDAOInterfaceMySQLParameters, new FieldMethodizer(Const.DAOInterfaceMySQLParameters.class.getName()));
        model.put(kDAOInterfaceAWSParameters, new FieldMethodizer(Const.DAOInterfaceAWSParameters.class.getName()));
        model.put(kDAOInterfaceParameters, new FieldMethodizer(Const.DAOInterfaceParameters.class.getName()));
        model.put(kFormParameters, new FieldMethodizer(Const.FormParameters.class.getName()));
        model.put(kMapKeys, new FieldMethodizer(Const.SessionKeys.class.getName()));
        model.put(kAPI, new FieldMethodizer(Const.API.class.getName()));

        return strictVelocityEngine().render(new ModelAndView(model, templatePath));
    }


    /**
     * This method generates a velocity engine for the rendering of the templates.
     * @return the velocity template engine
     */
    private static VelocityTemplateEngine strictVelocityEngine() {

        VelocityEngine configuredEngine = new VelocityEngine();

        configuredEngine.setProperty("runtime.references.strict", true);
        configuredEngine.setProperty("resource.loader", "class");
        configuredEngine.setProperty("class.resource.loader.class",
                "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");

        return new VelocityTemplateEngine(configuredEngine);
    }
}
