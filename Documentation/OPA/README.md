# CryptoAC | CryptoAC | Documentation | OPA

> Last Update: 05/02/2020


## Introduction

The Open Policy Agent (OPA) is an open source, general-purpose policy engine that decouples policy decision-making from policy enforcement. OPA provides a high-level declarative language (Rego) that allows to specify policy as code and offers APIs to offload policy decision-making. In *CryptoAC*, we use OPA as another service to which the [**Data Storage**](../DS) asks for decisions (i.e., add/read/write files).


## Background

When adding a new file, *CryptoAC* allows to specify whether to enforce cryptographic, traditional or both Role-Based Access Control (RBAC). OPA has [**document**](./OPARBACDocumentExample.json) for storing data and a [**policy**](./OPARBACPolicy.rego) for enforcement. An example input looks like this:

```json
{"input":{"user": "stefano", "associatedPermission": "Read", "associatedFile":"exam"}}
```