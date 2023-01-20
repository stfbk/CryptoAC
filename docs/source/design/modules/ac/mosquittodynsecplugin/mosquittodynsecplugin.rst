.. role:: bash(code)
   :language: bash

*********************************
Mosquitto Dynamic Security Plugin
*********************************

The `Mosquitto Dynamic Security Plugin (DynSec) <https://mosquitto.org/documentation/dynamic-security/>`_ provides role-based authentication and access control features for the `Mosquitto <https://mosquitto.org/>`_ MQTT broker.

.. note::
   The Mosquitto Dynamic Security Plugin supports RBAC policies only.



Role-based Access Control Integration with the Dynamic Security Plugin
######################################################################

CryptoAC integrates with the DynSec plugin by synchronizing the cryptographic access control policy as described in the `related documentation <https://mosquitto.org/documentation/dynamic-security/>`_. Each modification to the policy is then reflected in real-time into the DynSec plugin thanks to a special topic-based API. In other words, CryptoAC publishes commands--such as :bash:`createClient`, :bash:`addClientRole` and :bash:`addRoleACL`--to the dedicated :bash:`$CONTROL/dynamic-security/v1` topic. DynSec then evaluates clients' publish-subscribe requests against the policy automatically.


Role-based Access Control Configuration for the Dynamic Security Plugin
***********************************************************************

To interact with the DynSec plugin, CryptoAC needs to know the endpoint (i.e., the URL and the port) on which the Mosquitto MQTT broker is listening to connections, whether the broker is using TLS, and the client's username and password; see the :ref:`Core Profiles <Core Profiles>` section for more details. Whenever the administrator adds a user to the policy, CryptoAC also creates the user's account in the DynSec plugin and generates the user's password. Intuitively, the DynSec plugin should have already been configured with the administrator's data. More in detail, there should exist the administrator's client with the related username and password, the administrator's role and the assignment between the user and the role. This can be done by, e.g., setting the :bash:`dynamic-security.json` file--which is the file where the plugin stores its configuration--as shown below:

.. code-block:: json

    {
        "clients":[
            {
                "username":"admin",
                "textName":"Dynsec admin user",
                "password":"o5Ves8UtkxWh+ELZ5O8L3BCRe1tHJBE+capQBZfoXpNo6ohyaPxjpPz2wX3VvuJbKZxVDyrGogqGKO++fdayMg==",
                "salt":"Rl3CKxTVy8M+63sA",
                "iterations":101,
                "roles":[
                    {
                        "rolename":"admin"
                    }
                ]
            }
        ],
        "roles":[
            {
                "rolename":"admin",
                "acls":[
                    {
                        "acltype":"publishClientSend",
                        "topic":"$CONTROL/#",
                        "allow":true
                    },
                    {
                        "acltype":"publishClientReceive",
                        "topic":"$CONTROL/#",
                        "allow":true
                    },
                    {
                        "acltype":"subscribePattern",
                        "topic":"$CONTROL/#",
                        "allow":true
                    },
                    {
                        "acltype":"publishClientReceive",
                        "topic":"$SYS/#",
                        "allow":true
                    },
                    {
                        "acltype":"subscribePattern",
                        "topic":"$SYS/#",
                        "allow":true
                    },
                    {
                        "acltype":"publishClientSend",
                        "topic":"#",
                        "allow":true
                    },
                    {
                        "acltype":"publishClientReceive",
                        "topic":"#",
                        "allow":true
                    },
                    {
                        "acltype":"subscribePattern",
                        "topic":"#",
                        "allow":true
                    },
                    {
                        "acltype":"unsubscribePattern",
                        "topic":"#",
                        "allow":true
                    }
                ]
            }
        ],
        "defaultACLAccess":{
            "publishClientSend":false,
            "publishClientReceive":true,
            "subscribe":false,
            "unsubscribe":true
        }
    }


.. note::
   If the DynSec plugin of a Mosquitto MQTT broker is used as Access Controller, the same broker must be used as :ref:`Data Manager <Mosquitto MQTT Broker>`

.. warning::
   The `secure deployment of the Mosquitto broker <https://mosquitto.org/documentation/authentication-methods/>`_ and the configuration of the broker TLS certificate into CryptoAC is currently under development.
