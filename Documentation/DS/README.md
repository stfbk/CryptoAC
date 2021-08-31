# CryptoAC | Documentation | Data Storage

> Last Update: 31/08/2021

## Introduction

The Data Storage (DS) stores the encrypted (sensitive) data and potentially perform other security checks. The following implementations of the DS are available (between square parenthesis there is the list of scenarios using the related implementation):
* [Cloud] **DSCloud** - the DS is implemented by *CryptoAC* and exposes four RESTful APIs following the Create, Read, Update and Delete (CRUD) paradigm. Normal users can invoke the Read API, while Create, Update and Delete can be invoked by the administrator and **RMCloud** only. New or updated files are uploaded from the proxy to the DS and stored in a temporary upload directory. Only when the RM confirms the compliance of the operation, the DS moves the files in the actual storage directory from which users can download them. Otherwise, files are simply discarded.
* [MQTT] **Mosquitto MQTT Broker** - the DS is implemented by the [**Mosquitto MQTT broker**](https://mosquitto.org/) enhanced with the dynamic security (dynsec) plugin. The administrator creates topics by publishing retained messages containing useful metadata (i.e., the version number of the symmetric key to be used to en/decrypt messages sent in the topic). Moreover, the administrator used the dynsec plugin to enforce traditional RBAC policy alongside with the cryptographic scheme.