# CryptoAC | Documentation | Reference Monitor

> Last Update: 04/02/2022

## Introduction

The Reference Monitor (RM) mediates users' requests to add and write files and ensures compliance with the access control policy for data protection. The following implementations of the RM are available (between square parenthesis there is the list of scenarios compatible with the related implementation):
* [CLOUD] **RMCloud** - the RM is implemented by *CryptoAC* and exposes three RESTful APIs. The first API is reserved to the administrator and allows to configure the RM (e.g., by providing URLs of the MS and DS). The other two APIs are for checking add and write files operations. Whenever a user wants to add a new file, the RM checks whether the user is granting to the administrator all permissions over the file. When a user wants to write over a file, the RM queries the AC policy to ensure that the user has the permission to do so.