# CryptoAC | CryptoAC

> Last Update: 05/02/2020

## Introduction

*CryptoAC* allows organisations to control cloud-hosted data sharing while guaranteeing strong confidentiality through cryptography; neither external attackers not the Cloud Service Provider (CSP) can read the data. *CryptoAC* comes with an easy deployment process including an optimisation phase to maximize the performance and security of the architecture. More importantly, *CryptoAC* can be used in all major CSPs (e.g., AWS, Azure, GCloud) and potentially in other frameworks as well (e.g., Hyperledger Fabric).


## Background

*CryptoAC* implements the state of the art *Cryptographic Access Control* (CAC) scheme proposed by [**Garrison et al**](https://arxiv.org/pdf/1602.09069.pdf). *CryptoAC* enforces *Role-Based Access Control* (RBAC) policies, in which an administrator assigns users to one or more roles and permissions over files to one or more roles. In **Cryptographic RBAC**, each user and each role is provided with two pairs of public-private cryptographic keys, for de/encryption and signign/verification of data, respectively. Permissions involve files as resources and *Read* and *Read-Write* as actions. Each file is encrypted with a different symmetric key securely stored in the cloud. The policy itself is encoded through metadata that can be stored either in the cloud or internally by the organization. 

While in traditional **RBAC** there is the need of a central entity enforcing AC policies, in **Cryptographic RBAC** files are encrypted and then stored in the cloud. As files are encrypted, neither external attackers nor the CSP can read the data. In fact, only those who have the symmetric key can decrypt the file.


## How To Install *CryptoAC*

Read the instructions in the [**documentation**](./Documentation).


## Related Publications

* [**Master thesis**](https://github.com/StefanoBerlato/Master-Thesis/blob/master/thesis.pdf) at the university of Trento in 2019 presenting *CryptoAC*;
* [**ACM ASIACCS20 conference paper**](https://stefanoberlato.it/publications/pdf/CryptoAC.pdf) presenting an architectual model for CAC schemes and an optimisation problem for the best CAC architecture for a given scenario;
* [**Submitted**] [**ACM TOPS paper**](https://gitlab.fbk.eu/st/people/StefanoBerlato/cryptorbaccompiler/-/tree/master/TOPS) extending the ACM ASIACCS2020 conference paper with a more detailed trade-off analysis and security considerations;
* [**Submitted**] [**ATC21 conference paper**](https://gitlab.fbk.eu/st/people/StefanoBerlato/cryptorbaccompiler/-/tree/master/ATC21) detailing design and implementation concerns of *CryptoAC*.
    

## How to Navigate this Repository

This **repository** contains the following folders:

* [**CryptoAC**](./CryptoAC) - *CryptoAC* source code;
* [**CryptoAC-AWSLambda**](./CryptoAC-AWSLambda) - *CryptoAC* artifact for SaaS deployment in AWS;
* [**Documentation**](./Documentation) - *CryptoAC* documentation;