# CryptoAC | Documentation

> Last Update: 22/09/2020

## Introduction

This folder contains a general overview of the different modules and functionalities of *CryptoAC*, which include:
* **Front-end** - a web interface developed with JQuery (*JS*), Boostrap (*CSS*) and Apache Template Engine (*HTML*)
    > Future plans are to switch to a proper *UI framework* (e.g., *ReactJS* or *Angular*)
* **RESTful APIs** - APIs exposing *CryptoAC* functionalities to the web interface and eventual other external services;
* **Core** - cryptographic functionalities to generate and use cryptographic keys, encrypt and decrypt files and manage the cryptographic access control (AC) policy;
* **DAO** - *CryptoAC* decouples the management of the AC policy from the actual storage of data and metadata through the [**Data Access Object**](https://en.wikipedia.org/wiki/Data_access_object) (DAO) pattern. The DAO consists in an interface describing the functionalities needed to store and retrieve the necessary data from the underlying chosen storage method. This allows *CryptoAC* to be used with public (e.g., AWS, Azure, GCloud) and private (e.g., OpenStack) cloud service providers and other frameworks as well (e.g., blockchain). To see the list of currently supported storage solutions, see the [**DAOs**](./DAOs/) documentation.

*CrypoAC* is available in a docker container.


## How to Navigate this Repository

* [**Server**](./Server/) - description of the server and RESTful APIs for each entity *CryptoAC* supports;
* [**DAOs**](./DAOs/) - specific documentation related to the DAO pattern and available implementations;
* [**Javadoc**](./Javadoc/) - *CryptoAC* Javadoc;
* [**Front-End**](./Front-End/) - manual of the User Interface;
* [**Core**](./Core/) - insights on the functioning of CryptoAC;
* [**Util**](./Util/) - miscellaneous of functionalities used thorough *CryptoAC*;
* [**(Deprecated) UML**](./UML/) - UML sequence diagrams and a class diagram for the *CryptoAC* logic module;
* [**(Deprecated) Sprint Reviews**](./SprintReviews/) - old presentations related to the beginning of the *CryptoAC* project.