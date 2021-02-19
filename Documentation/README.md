# CryptoAC | Documentation

> Last Update: 19/02/2020

## Introduction

*CryptoAC* allows enforcing both traditional and cryptographic *Role-Based Access Control* (RBAC) policies to control access to outsourced sensitive data. *CryptoAC* employs container technology (i.e., Docker) and RESTful APIs for easy integration with other services. Moreover, *CryptoAC* decouples the management of the RBAC policy from the storage of data through the [**Data Access Object**](https://en.wikipedia.org/wiki/Data_access_object) (DAO) pattern to be independent of the actual storage solution. 


## Architecture

*CryptoAC* is composed of four software modules implemented in Java and shipped in Docker Containers:
* [**Proxy**](./Proxy) - exposes a web app together with RESTful APIs to interface users with data and perform cryptographic computations;
* [**Reference Monitor**](./RM) - mediates users' requests and ensures compliance to the policy;
* [**Metadata Storage**](./MS) - stores metadata such as public cryptographic keys;
* [**Data Storage**](./DS) - stores the encrypted data;

Finally, *CryptoAC* integrates the [**Open Policy Agent**](./OPA) service to allow enforcing traditional RBAC policies as well.

> If used in a decentralized blockchain-based solution, the last three modules can be easily replaced by the distributed ledger (for data and metadata storage) and smart contracts (for Reference Monitor).


## Installation

Please refer to the [**Installation**](./Installation) for instructions.