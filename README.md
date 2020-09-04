# CryptoAC

> Last Update: 04/09/2020

# Introduction

To facilitate the adoption of cloud by organizations, *cryptographic access control* is the obvious solution to control data sharing among users while preventing partially trusted cloud service providers to access sensitive data. In this context, **CryptoAC** implements the state of the art role-based cryptographic access control scheme proposed by [**Garrison et al**](https://arxiv.org/pdf/1602.09069.pdf). **CryptoAC** comes with an easy deployment process, it supports 81 different architectures and it is cloud-independent, meaning that it can be seamlessly deployed in all major cloud service providers (e.g., AWS, Azure, GCloud).

**CryptoAC** is the subject of a [**Master Degree thesis**](https://github.com/StefanoBerlato/Master-Thesis) presented at the *University of Trento* and of a [**scientific article**](https://doi.org/10.1145/3320269.3384767) published at the ACM [**ASIACCS20 conference**](https://asiaccs2020.cs.nthu.edu.tw/).


Table of Contents:
- [Description](#description)
- [Background](#background)
- [How To Install](#how-to-install)
- [How to Navigate this Repository](#how-to-navigate-this-repository)


# Description

**Cryptographic Access Control** (CAC) is the natural solution to allow individuals and organizations to store sensitive data in the cloud while preserving confidentiality and the possibility to share resources with other users. While many academic researchers focused on CAC, the vast majority proposes theoretical formulations only; few developed even a working prototype and none studied a deployment in a realistic use case by considering concrete issues like portability, keys management, robustness or scalability. 

**CryptoAC** fills this gap by implementing the state of the art role-based cryptographic access control scheme proposed by [**Garrison et al**](https://arxiv.org/pdf/1602.09069.pdf). **CryptoAC** allows to store sensitive data in the cloud while guaranteeing strong confidentiality, i.e., neither external attackers not the cloud service provider itself can read the data. Furthermore, **CryptoAC** allows for an easy management and exchange of files by supporting **Cryptographic Role-Based Access Control** (RBAC). Finally, **CryptoAC** comes with an easy deployment process, consisting of an optimisation step to maximize the performance of the architecture and an automated deployment with the TOSCA-based cloud orchestration framework [**Cloudify**](https://cloudify.co/). More importantly, **CryptoAC** is compatible with any combination of private-public cloud service model and can be deployed in all major cloud service providers (e.g., AWS, Azure, GCloud).

# Background

**CryptoAC** allows to enforce RBAC policies, in which an administrator assigns users to one or more roles and permissions over files to one or more roles. Users assume the identity of a role to access the permissions needed to finalize their operations (e.g., read a file). In **Cryptographic RBAC**, each user and each role is provided with two pairs of public-private cryptographic keys, for de/encryption and signign/verification of data, respectively. Permissions involve files as resources and *Read* and *Read-Write* as actions. Each file is encrypted with a different symmetric key and then securely stored in the cloud. The policy itself is encoded through metadata that can be stored either in the cloud or internally by the organization.
While in traditional **RBAC** there is the need of a central entity enforcing AC policies, in **Cryptographic RBAC** files are encrypted and then stored in the cloud. As files are encrypted, neither external attackers nor the cloud service provider can read the content of the files. In fact, only those who have the decrypting symmetric key can actually read the file.


# How To Install

Read the instructions in the [**documentation folder**](./Documentation).



# How to Navigate this Repository

This **repository** contains the following folders:

* [**CryptoAC**](./CryptoAC) - CryptoAC source code;
* [**CryptoAC-AWSLambda**](./CryptoAC-AWSLambda) - CryptoAC artifact for Saas deployment in AWS;
* [**Documentation**](./Documentation) - CryptoAC documentation.
