# CryptoAC

> Last Update: 19/02/2020

## Introduction

*CryptoAC* allows organisations to control access to outsourced sensitive data while guaranteeing strong confidentiality through cryptography; neither external attackers nor the data hoster (e.g., a Cloud Service Provider - CSP) can read the data. *CryptoAC* comes with an easy microservices-based deployment process including an optimisation step to maximize the performance and security of the architecture. More importantly, *CryptoAC* can be used in all major CSPs (e.g., AWS, Azure, GCloud) and in other frameworks as well (e.g., Hyperledger Fabric).


## Background

*CryptoAC* implements the state-of-the-art *Cryptographic Access Control* (CAC) scheme proposed by [**Garrison et al**](https://arxiv.org/pdf/1602.09069.pdf). *CryptoAC* enforces *Role-Based Access Control* (RBAC) policies, in which an administrator assigns users and permissions to one or more roles. In **Cryptographic RBAC**, each user and each role is provided with two pairs of public-private cryptographic keys for de/encryption and signing/verification of data, respectively. Permissions involve data as resources and *Read* and *Read-Write* as actions. Each chunk of data (e.g., file) is encrypted with a different symmetric key. *CryptoAC* does not need a central entity for enforcing AC policies, and thus it can be used in decentralized solutions (e.g., blockchain) as well.


## Related Publications

* [**Master thesis**](https://github.com/StefanoBerlato/Master-Thesis/blob/master/thesis.pdf) presented at the university of Trento in 2019 introducing *CryptoAC*;
* [**ACM ASIACCS20 conference paper**](https://stefanoberlato.it/publications/pdf/CryptoAC.pdf) presenting an architectual model for CAC schemes and an optimisation problem to find the best CAC architecture for a given scenario;
* [**Submitted**] [**ACM TOPS paper**](https://gitlab.fbk.eu/st/people/StefanoBerlato/cryptorbaccompiler/-/tree/master/TOPS) extending the ACM ASIACCS2020 conference paper with a more detailed trade-off analysis and security considerations;
* [**Submitted**] [**ATC21 conference paper**](https://gitlab.fbk.eu/st/people/StefanoBerlato/cryptorbaccompiler/-/tree/master/ATC21) detailing design and implementation concerns of *CryptoAC*.


## How To Try *CryptoAC*

Read the instructions in the [**documentation**](./Documentation).


## How to Navigate this Repository

This **repository** contains the following folders:

* [**CryptoAC**](./CryptoAC) - *CryptoAC* source code;
* [**CryptoAC-AWSLambda**](./CryptoAC-AWSLambda) - *CryptoAC* artifact for SaaS deployment in AWS;
* [**Documentation**](./Documentation) - *CryptoAC* documentation;