# CryptoAC | Documentation

> Last Update: 31/08/2021


## Introduction

*CryptoAC* joins cutting-edge academic reserch with emerging and established paradigms such as microservices (Docker), RESTful APIs, Kotlin multiplatform and the React framework. Thanks to a careful design enabling synergies among these technologies, *CryptoAC* guarantees portability, flexibility, modularity and easy integration with other services.


## Architecture

*CryptoAC* implements and integrates several software modules which are differently combined based on the chosen scenario (e.g., IoT, Cloud) and CAC scheme. At high-level, *CryptoAC* uses the following modules:
* [**Proxy**](./Proxy) - the core of *CryptoAC*, it performs cryptographic computations and allows users to interface with data through both a web app and RESTful APIs;
* [**Reference Monitor**](./RM) - mediates users' requests to add and write files and ensures compliance with the access control policy for data protection;
* [**Metadata Storage**](./MS) - stores metadata such as public cryptographic keys;
* [**Data Storage**](./DS) - stores the encrypted (sensitive) data and potentially perform other security checks;
* [**Open Policy Agent**](./OPA) - allows defining traditional (i.e., centrally enforced) RBAC policies.

For an in-depth view of the use of these modules in the context of a specific implementation, please refer to one of the supported scenarios:
* [**Cloud**](./Cloud) 
* [**MQTT**](./MQTT)


## Installation

Please refer to the [**Installation**](./Installation) for instructions.