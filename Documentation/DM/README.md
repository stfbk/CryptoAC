# CryptoAC | Documentation | Data Manager

> Last Update: 17/12/2021

## Introduction

The Data Manager (DM) manages the encrypted (sensitive) data and perform other security checks. The following implementations of the DM are available (between square parenthesis there is the list of scenarios using the related implementation):
* [Cloud] **DMCloud** - the DM is implemented by *CryptoAC* and exposes four RESTful APIs following the Create, Read, Update and Delete (CRUD) paradigm. Normal users can invoke the Read API, while Create, Update and Delete can be invoked by the administrator and **RMCloud** only. New or updated files are uploaded from the proxy to the DM and stored in a temporary upload directory. Only when the RM confirms the compliance of the operation, the DM moves the files to the actual storage directory from which users can download them. Otherwise, files are simply discarded.
* [MQTT] **Mosquitto MQTT Broker** - the DM is implemented by the [**Mosquitto MQTT broker**](https://mosquitto.org/) enhanced with the dynamic security (dynsec) plugin. The administrator creates topics by publishing retained messages containing useful metadata (i.e., the version number of the symmetric key to be used to en/decrypt messages sent in the topic). Moreover, the administrator used the Mosquitto dynsec plugin to enforce traditional RBAC policy alongside the cryptographic scheme.