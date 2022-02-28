# CryptoAC | Documentation | OPA

[The Open Policy Agent (OPA)](https://www.openpolicyagent.org/) is an open-source, general-purpose policy engine that decouples policy decision-making from policy enforcement. OPA provides a high-level declarative language (Rego) that allows specifying policy as code and offers APIs to offload policy decision-making. OPA has a [**document**](./OPARBACDocumentExample.json) for storing data and a [**policy**](./OPARBACPolicy.rego) for the enforcement. An example input looks like this:

    ```json
    {"input":{"user": "stefano", "associatedPermission": "Read", "associatedFile":"exam"}}
    ```

> At the time of writing, OPA is used in the **CLOUD** scenario.