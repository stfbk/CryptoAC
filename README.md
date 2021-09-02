# CryptoAC

> Last Update: 31/08/2021

## Introduction

*CryptoAC* allows organisations and individuals to protect outsourced sensitive data against external attackers and unauthorized entities, while guaranteeing strong confidentiality and integrity through cryptography. Concretely, *CryptoAC* is a software written in multiplatform Kotlin and it implements several CAC schemes for different scenarios (e.g., Cloud, IoT). *CryptoAC* comes with an easy microservices-based deployment process including an optimisation step to maximize the performance and security of the architecture.


## Supported Scenarios

*CryptoAC* implements several CAC schemes for different scenarios. Up to know, the following scenarios are supported:
* **CLOUD** - *CryptoAC* implements (an improved version of) the role-based Cryptographic Access Control (CAC) scheme proposed by [**Garrison et al**](https://arxiv.org/pdf/1602.09069.pdf) to allow organisations and individuals to upload, share and collaborate over sensitive data (i.e., files) through the Cloud. The use of hybrid cryptography combines traditional asymmetric cryptography and digital certificates with symmetric cryptography for fast en/decryption. A single administrator can distribute *Read* and *Read-Write* permissions over files, while the integration with the Open Policy Agent (OPA) provides an additional layer of security.
* **MQTT** - *CryptoAC* implements a role-based CAC scheme based on hybrid-cryptography to allow entities to security exchange messages through an MQTT broker. The use of hybrid cryptography combines traditional asymmetric cryptography and digital certificates with symmetric cryptography for fast en/decryption. A single administrator creates topics and allows entities to subscribe and publish messages, while the integration with the Mosquitto Dynamic Security Plugin (dynsec) provides an additional layer of security.


## Related Publications

* [**Master thesis**](https://github.com/StefanoBerlato/Master-Thesis) presenting the first design of *CryptoAC* at the university of Trento in 2019;
* [**ASIACCS20**](https://stefanoberlato.it/publications/pdf/CryptoAC.pdf) presenting an architectual model for CAC schemes and an optimisation problem to find the best CAC architecture for a given Cloud scenario;
* [**SECRYPT21**](https://stefanoberlato.it/publications/pdf/SECRYPT21.pdf) proposing the toolchain COERCIVE for optimal enforcement of CAC schemes in the cloud;
* [**ACM TOPS**](https://stefanoberlato.it/publications/pdf/TOPS21.pdf) extending the ACM ASIACCS2020 conference paper with a more detailed trade-off analysis and further security considerations;


## How To Run *CryptoAC*

Read the instructions in the [**documentation folder**](./Documentation).


## How to Navigate this Repository

This **repository** contains the following folders:

* [**CryptoAC**](./CryptoAC) - *CryptoAC* source code;
* [**Documentation**](./Documentation) - *CryptoAC* documentation;