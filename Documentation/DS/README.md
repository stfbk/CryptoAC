# CryptoAC | CryptoAC | Documentation | Data Storage

> Last Update: 05/02/2020

## Introduction

The Data Storage (DS) stores the encrypted data. The DS is implemented by *CryptoAC* and exposes four RESTful APIs following the Create, Read, Update and Delete (CRUD) paradigm. Normal users can invoke the Read API, while Create, Update and Delete can be invoked by the administrator and the [**Reference Monitor**](../RM) only. 

New or updated files are uploaded from the [**proxy**](../proxy) to the DS and stored in a temporary upload directory. Then, the proxy asks the RM to check the users' requests and, if compliant with the access control policy, the RM asks the DS to move the files in the actual storage directory from which users can download them. Otherwise, files are simply discarded.

**Security.** We followed the [**OWASP guidelines**](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet#). to avoid web-based attacks (e.g., injection, Cross-Site Scripting). Moreover, all users' inputs are validated against OWASP-approved regular expressions. HTTPS is also enabled once the cryptographic certificate is provided.