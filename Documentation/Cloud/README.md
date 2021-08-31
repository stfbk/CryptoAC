# CryptoAC | Documentation | Cloud

> Last Update: 31/08/2021


## Introduction

*CryptoAC* implements (an improved version of) the role-based Cryptographic Access Control (CAC) scheme proposed by [**Garrison et al**](https://arxiv.org/pdf/1602.09069.pdf) to allow organisations and individuals to upload, share and collaborate over sensitive data (i.e., files) through the Cloud. The use of hybrid cryptography combines traditional asymmetric cryptography and digital certificates with symmetric cryptography for fast en/decryption. A single administrator can distribute *Read* and *Read-Write* permissions over files, while the integration with the Open Policy Agent (OPA) provides an additional layer of security.

## Architecture

The architecture of *CryptoAC* for the Cloud scenario is composed of the following modules:
* **Proxy**
* **MSMySQL**
* **RMCloud**
* **DSCloud**