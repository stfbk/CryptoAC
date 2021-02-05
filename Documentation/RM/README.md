# CryptoAC | CryptoAC | Documentation | Reference Monitor

> Last Update: 05/02/2020

## Introduction

The Reference Monitor (RM) mediates users' requests and ensures compliance to the policy. The RM is implemented by *CryptoAC* and exposes three RESTful APIs. The first API is reserved to the administrator and allows to configure the RM (e.g., by providing URLs of the MS and DS). The other two APIs are for adding and writing files, respectively. 

When a user wants to add a new file, the RM checks whether the user is granting to the administrator all permissions over the file. When a user wants to write over a file, the RM queries the AC policy in the [**Metadata Storage**](../MS) to ensure that the user has the permission to do so.

**Security.** We followed the [**OWASP guidelines**](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet#). to avoid web-based attacks (e.g., injection, Cross-Site Scripting). Moreover, all users' inputs are validated against OWASP-approved regular expressions. HTTPS is also enabled once the cryptographic certificate is provided.