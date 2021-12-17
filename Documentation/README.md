# CryptoAC | Documentation

> Last Update: 17/12/2021


## Introduction

*CryptoAC* joins cutting-edge academic research with emerging and established development paradigms and technologies such as microservices (Docker), RESTful APIs, Kotlin multiplatform and the React framework. Thanks to a careful design enabling synergies among these technologies, *CryptoAC* guarantees portability, flexibility, modularity and easy integration with other services.


## Architecture

*CryptoAC* implements and integrates several software modules which are differently combined based on the chosen scenario (e.g., IoT, Cloud) and CAC scheme. At high-level, *CryptoAC* provides the following modules:
* [**Proxy**](./Proxy) - the core of *CryptoAC*: it performs cryptographic computations and allows agents to interface with the system through both a React web app and RESTful APIs.;
* [**Reference Monitor**](./RM) - mediates users' requests to add and write files and ensures compliance with the AC policy;
* [**Metadata Manager**](./MM) - manages metadata such as public cryptographic keys and the AC policy;
* [**Data Manager**](./DM) - manages the encrypted (sensitive) data and potentially perform security checks;
* [**Open Policy Agent**](./OPA) - allows defining traditional (i.e., centrally enforced) RBAC policies.

For an in-depth view of the use of these modules in the context of a specific implementation, please refer to one of the supported scenarios:
* [**Cloud**](./Cloud) 
* [**MQTT**](./MQTT)


## Installation

Please refer to the [**Installation**](./Installation) for instructions.