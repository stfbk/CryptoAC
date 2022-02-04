# CryptoAC | Documentation | Proxy

> Last Update: 04/02/2022

## Introduction

The proxy is the core of *CryptoAC*. It performs cryptographic computations and allows users to interface with data through both a web app and RESTful APIs.


## Web App

The web interface requires users to log in, either with traditional username-password credentials or Single Sign-On (which will be soon implemented).
> As of now, users can login with their username

Once logged in, users have access to three functionalities:
* **Modules**: allows selecting the scenario (e.g., CLOUD or MQTT) and the implementation of the involved modules (e.g., RM, MM, DM), proposing a comparison of the available options (to be implemented);
* **Dashboard**: allows providing the necessary parameters based on the scenario and modules chosen, to then interact with the scenario;
* **TradeOffBoard**: allows optimizing the security and performance of the architecture of *CryptoAC*.


## RESTful APIs

The proxy uses [**Ktor**](https://ktor.io/) as a server framework to expose RESTful APIs returning JSON-formatted responses to guarantee maximum flexibility; see the [**documentation**](./CryptoACAPISwagger.yaml) for more information on the APIs.


## Security

The implementation follows the [**OWASP guidelines**](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet#) to avoid web-based attacks (e.g., injection, Cross-Site Scripting). Moreover, all users' inputs are validated against OWASP-approved regular expressions. HTTPS is also enabled once a valid cryptographic certificate is provided.