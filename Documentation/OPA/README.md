# CryptoAC | Documentation | OPA

> Last Update: 17/12/2021

## Introduction

The Open Policy Agent (OPA) allows defining traditional (i.e., centrally enforced) RBAC policies. The following implementations of OPA are available (between square parenthesis there is the list of scenarios using the related implementation):
* [Cloud] **OPA** - [**OPA**](https://www.openpolicyagent.org/) is an open-source, general-purpose policy engine that decouples policy decision-making from policy enforcement. OPA provides a high-level declarative language (Rego) that allows specifying policy as code and offers APIs to offload policy decision-making. In *CryptoAC*, OPA is used to add a further layer of security besides the CAC schemes. OPA has a [**document**](./OPARBACDocumentExample.json) for storing data and a [**policy**](./OPARBACPolicy.rego) for the enforcement. An example input looks like this:

    ```json
    {"input":{"user": "stefano", "associatedPermission": "Read", "associatedFile":"exam"}}
    ```