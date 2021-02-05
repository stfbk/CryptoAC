# CryptoAC | CryptoAC | Documentation

> Last Update: 05/02/2020

## Introduction

*CryptoAC* allows to enforce both traditional and cryptographic Role-Based Access Control (RBAC) policies to protect sensitive cloud-hosted data. *CryptoAC* employs container technology (i.e., Docker) to comply with the microservice paradigm and achieve cloud independency. Furthermore, *CryptoAC* decouples the management of the CAC policy from the actual storage of data through the [**Data Access Object**](https://en.wikipedia.org/wiki/Data_access_object) (DAO) pattern. 



## Architecture

*CryptoAC* is composed of four software modules implemented in Java and shipped in Docker Containers:
* [**Proxy**](./Proxy) - exposes a web app together with RESTful APIs to interface users with data and perform cryptographic computations;
* [**Reference Monitor**](./RM) - mediates users' requests and ensures compliance to the policy;
* [**Metadata Storage**](./MS) - stores metadata such as public cryptographic keys;
* [**Data Storage**](./DS) - stores the encrypted data;

Moreover, *CryptoAC* integrates the [**Open Policy Agent**](./OPA) to enforce traditional RBAC policies.


## Installation

Please refer to the [**Installation**](./Installation) for instructions.