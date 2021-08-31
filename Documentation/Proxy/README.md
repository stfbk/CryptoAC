# CryptoAC | Documentation | Proxy

> Last Update: 31/08/2021

## Introduction

The proxy is the core of *CryptoAC*. It performs cryptographic computations and allows users to interface with data through both a web app and RESTful APIs. The proxy involves three elements:

* **users**: *CryptoAC* expects an administrator with full control over the access control policy. The administrator can distribute and revoke permissions, while normal users can only add, read and write files. We higlight that a single instance of the proxy can handle multiple users and that each user can have multiple configurations with different scenarios. For each configuration, the proxy has dedicated web interfaces and RESTful APIs;
* **roles**: roles are created internally in an organization for various job functions (e.g., doctor, student, dean, researcher);
* **files**: files usually contain sensitive or personal data. Each file is encrypted with a symmetric key. Both traditional and cryptographic policies can be enforced over files.

Each element in *CryptoAC* has an identifier (i.e., username, role name and file name) and a random token of 20 bytes for anonymity. Then, each user and role has a pair of asymmetric keys for encryption and decryption and another pair for signing and verifying signatures. Moreover, users and roles may be found in three different statuses:
* **incomplete**: the element was created but it is not fully configured (e.g., a user missing the keys);
* **operational**: the element is present, fully configured and is ready for use;
* **deleted**: the element was deleted.

Besides elements, CryptoAC features tuples to represent a link between two elements:

* **role tuples** - when a user is assigned to a role, a role tuple is created. A role tuple contains the identifiers of the user and the role and the role's asymmetric keys **encrypted** with the public key of the user;
* **permission tuples** - when a role is given a permission over a file, a permission tuple is created. A permission tuple contains the identifiers and the tokens of the role and the file, the given permission (i.e., either "read" or "read and write") and the symmetric key encrypted with the role's public key;
* **file tuples** - when a file is added, a file tuple is created. The file tuple contains information on the enforcement of cryptographic and traditional RBAC.

Each tuple is signed to protect its integrity against accidental or malicious modifications.



## Web App

The web interface requires users to login, either with traditional username-password credentials or Single Sign-On (which will be soon implemented). Once logged in, users have to configure their profile by choosing the scenario (e.g., Cloud or MQTT) and providing necessary parameters. Afterwards, users have access to the dashboard: a sidebar on the left presents the actions the user can perform (e.g., read or write file), while the center of the page presents useful informations (e.g., the list of roles and files the user has access to).  


## RESTful APIs

The proxy uses [**Ktor**](https://ktor.io/) as a server framework to expose RESTful APIs returning JSON-formatted responses to guarantee maximum flexibility; see the [**documentation**](./CryptoACAPISwagger.yaml) for more information on the APIs.


## Security

The implementation follows the [**OWASP guidelines**](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet#) to avoid web-based attacks (e.g., injection, Cross-Site Scripting). Moreover, all users' inputs are validated against OWASP-approved regular expressions. HTTPS is also enabled once a valid cryptographic certificate is provided.