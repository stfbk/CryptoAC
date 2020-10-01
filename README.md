# CryptoAC

> Last Update: 01/10/2020

## Introduction

To facilitate the adoption of cloud by organizations, *cryptographic access control* is the obvious solution to control data sharing among users while preventing partially trusted cloud service providers to access sensitive data. In this context, *CryptoAC* implements the state of the art role-based cryptographic access control scheme proposed by [**Garrison et al**](https://arxiv.org/pdf/1602.09069.pdf). *CryptoAC* comes with an easy deployment process, supports 81 different architectures and is cloud-independent, meaning that it can be seamlessly deployed in all major cloud service providers (e.g., AWS, Azure, GCloud).


## Description

**Cryptographic Access Control** (CAC) allows organizations and users to enforce Access Control (AC) on cloud-hosted sensitive data while preserving data confidentiality with respect to both external attackers and the Cloud Service Provider (CSP) itself. While many researchers focused on CAC, the vast majority proposes theoretical formulations only; few developed even a working prototype and none studied a deployment in a realistic use case by considering concrete issues like portability, keys management, robustness or scalability. 

*CryptoAC* fills this gap by implementing the state of the art role-based cryptographic access control scheme proposed by [**Garrison et al**](https://arxiv.org/pdf/1602.09069.pdf). *CryptoAC* allows to store sensitive data in the cloud while guaranteeing strong confidentiality, i.e., neither external attackers not the cloud service provider itself can read the data. Furthermore, *CryptoAC* allows for an easy management and exchange of files by enforcing **Cryptographic Role-Based Access Control** (RBAC) policies. Finally, *CryptoAC* comes with an easy deployment process, consisting of an optimisation phase to maximize the performance and security of the architecture and an automated deployment through the TOSCA-based cloud orchestration framework [**Cloudify**](https://cloudify.co/). More importantly, *CryptoAC* is compatible with any combination of private-public cloud service model (e.g., IaaS, SaaS) and can be deployed in all major cloud service providers (e.g., AWS, Azure, GCloud).


## Background

*CryptoAC* allows to enforce RBAC policies, in which an administrator assigns users to one or more roles and permissions over files to one or more roles. Users assume the identity of a role to access the permissions needed to finalize their operations (e.g., read a file). In **Cryptographic RBAC**, each user and each role is provided with two pairs of public-private cryptographic keys, for de/encryption and signign/verification of data, respectively. Permissions involve files as resources and *Read* and *Read-Write* as actions. Each file is encrypted with a different symmetric key and then securely stored in the cloud. The policy itself is encoded through metadata that can be stored either in the cloud or internally by the organization.
While in traditional **RBAC** there is the need of a central entity enforcing AC policies, in **Cryptographic RBAC** files are encrypted and then stored in the cloud. As files are encrypted, neither external attackers nor the cloud service provider can read the data. In fact, only those who have the relative decrypting symmetric key can actually decrypt a file.


## Related Publications

CryptoAC is the subject of a [**master thesis**](https://github.com/StefanoBerlato/Master-Thesis) presented at the university of Trento in 2019. A paper proposing an architectual model for CAC schemes and an optimisation problem to find the best architecture for a scenario was accepted at the [**ACM ASIACCS20 conference**](https://stefanoberlato.it/publications/pdf/CryptoAC.pdf). Other articles are currently being written;



## How To Install

Read the instructions in the [**docker folder**](./Docker).


# How to Navigate this Repository

This **repository** contains the following folders:

* [*CryptoAC*](./CryptoAC) - CryptoAC source code;
* [**CryptoAC-AWSLambda**](./CryptoAC-AWSLambda) - CryptoAC artifact for Saas deployment in AWS;
* [**Docker**](./Docker) - Docker files for deployment;
* [**Documentation**](./Documentation) - CryptoAC documentation.
