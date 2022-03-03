# CryptoAC | Documentation | CryptoAC

*CryptoAC* is the (micro)service performing cryptographic computations and allowing users and administrators to interface with the data and the access control policy through a web app or RESTful APIs. Concretely, there can be multiple instances of *CryptoAC* and the same instance doesn't need to be used to both protect and access a piece of data;


## Web App

The web app requires users to log in, either with traditional username-password credentials or Single Sign-On (**yet to be implemented**).

> As of now, users can log in by supplying a username.

Once logged in, users have access to three functionalities:
* **Modules**: allows selecting the scenario (e.g., CLOUD or MQTT) and the implementation of the involved modules (e.g., RM, MM, DM), proposing a comparison of the available options (**yet to be implemented**);
* **Dashboard**: allows providing the necessary parameters based on the scenario and modules chosen to then interact with the dashboard;
* **TradeOffBoard**: allows optimizing the security and performance of the architecture of *CryptoAC*.


## RESTful APIs

*CryptoAC* uses [**Ktor**](https://ktor.io/) as a server framework to expose RESTful APIs returning JSON-formatted responses to guarantee maximum flexibility; see the [**documentation**](./swagger_CryptoAC.yaml) for more information on the APIs.


## Security

The implementation of *CryptoAC* follows the [**OWASP guidelines**](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet#) to avoid web-based attacks (e.g., injection, Cross-Site Scripting). Moreover, all users' inputs are validated against OWASP-approved regular expressions.