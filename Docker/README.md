# CryptoAC | Docker

> Last Update: 22/09/2020

## One Docker to rule them all

A CAC scheme commonly expects four entities: the proxy, the reference monitor (RM), the data storage (DS) and the metadata storage (MS). For a detailed discussion of these entities, please read the related [**publication**](https://www.stefanoberlato.it/publications/pdf/CryptoAC.pdf). In general, the deployment of a CAC scheme includes:
* one or more proxies. Note that each proxy can handle many users and interact with several storage solutions at once;
* one DS only (e.g., CSP, blockchain) to store encrypted files;
* one RM only (e.g., cloud function, smart contract) to check users' **add file** and **write file** operations;
* one MS only (e.g., a database) to store metadata.

*CryptoAC* is shipped in a Docker container for an easy orchestration and portability across different platforms. To enhance maintenability and simplify deployments, each instance of *CryptoAC* (i.e., each docker container) can be configured to act as a proxy, as the RM or as the DS. In this way, CryptoAC can be used in multiple ways and support the entire deployment. The configuration of the entity that an instance of *CryptoAC* is acting as is called "**Operation Mode**".

> As of now, a simple mySQL8+ docker container can act as the MS.

To try CryptoAC on your machine, just run `docker-compose --env-file .env.dev -f .\docker-compose-staticIP.yml up`
