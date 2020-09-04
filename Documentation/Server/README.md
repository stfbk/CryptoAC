# CryptoAC | CryptoAC | Documentation | Server

> Last Update: 28/07/2020

## Introduction

Each instance of *CryptoAC* exposes different RESTful APIs based on the current operation mode (i.e., based on whether the instance of *CryptoAC* is acting as the proxy, reference monitor or data storage). You can find a detailed documentation of all APIs in the [**Swagger Document**](./CryptoACAPISwagger.yaml), 


## Proxy

The proxy operation mode of *CryptoAC* registers two groups of APIs, one related to the management of the user's data (e.g., private keys, system storage configuration data) and the other related to the management of the access control (AC) policy (e.g., add user, read file, write file). These are the only APIs that present a graphical interface toward the users.

The first group

users have a profile for each dao in the form $userintheserver.$dao. The file contains configuraiton parmaters to instantiate the igiven dao. User can update all parameters except the usernameincryptoac and whether he is the admin or not. admin can create, update and delete all profiles


## Security

**TODO Maybe elaborate a bit**
**TODO Maybe elaborate a bit**
We followed OWASP guidelines for [**Stored, Reflected**](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet#). 
**TODO Maybe elaborate a bit**

* we have regex for validating users input like text and AWS keys



TODO explain In CryptoAC, each user may have multiple configurations toward different storage systems.

users can get create and update their own profile only, the admin can everything

