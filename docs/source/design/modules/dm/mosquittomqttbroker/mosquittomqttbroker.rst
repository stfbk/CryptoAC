.. role:: bash(code)
   :language: bash

*********************
Mosquitto MQTT Broker
*********************

The `Eclipse Mosquitto <https://mosquitto.org/>`_ is an open-source (EPL/EDL licensed) message broker that implements the `MQTT <https://mqtt.org/>`_ protocol (v5.0, v3.1.1 and v3.1). MQTT provides messaging using a publish-subscribe model. Hence, it is particularly suitable for communications in Internet of Things (IoT) scenarios involving low power sensors and mobile devices.
 
When using Mosquitto as Data manager, each resource is mapped to an **MQTT topic**. In detail, the administrator can **create** a topic by publishing to that topic a retained message containing metadata necessary to enable a secure (i.e., end-to-end encrypted and available to authorized clients only) communication among users. Users can then **read** and **write** over resources by subscribing and publishing messages to existing topics, respectively. Finally, the administrator can **delete** a topic by signaling the removal of the resource and eliminating the corresponding metadata (i.e., the retained message).

.. note::
   Currently, the MQTT Quality of Service (QoS) in the Mosquitto broker is hardcoded to :bash:`1`. 


Mosquitto MQTT Broker Configuration
###################################

To interact with the Mosquitto broker, CryptoAC needs to know the endpoint (i.e., the URL and the port) on which the broker is listening to connections, whether the broker is using TLS, and the client's username and password; see the :ref:`Core Profiles <Core Profiles>` section for more details. The client's username and password are only used if the same broker has enabled the :ref:`DynSec plugin <Mosquitto Dynamic Security Plugin>`. The activation of the plugin is strongly recommended; otherwise, anyone could publish to any topic and also subscribe, even though it would receive encrypted--thus, ideally unreadable--messages.

.. note::
   If a Mosquitto MQTT broker is used as Data Manager, the same broker must be used as :ref:`Access Controller <Mosquitto Dynamic Security Plugin>`