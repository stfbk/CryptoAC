# CryptoAC | Documentation

*CryptoAC* combines cutting-edge academic research with emerging and established development paradigms and technologies such as microservices, RESTful APIs and multiplatform capabilities. Thanks to a careful design enabling synergies among these technologies, *CryptoAC* guarantees portability, flexibility, modularity and easy integration with other services.


## Architecture

*CryptoAC* is a tool that interacts with other agents (e.g., Cloud, MQTT broker) to provide complete protection of sensitive data. The exact configuration and architecture of *CryptoAC* depend on the deployment scenario. Nonetheless, we can abstract low-level services to identify **four abstract entities** involved in the architecture of *CryptoAC*:
* [**CryptoAC**](./CryptoAC) - the (micro)service performing cryptographic computations and allowing users and administrators to interface with the data and the access control policy through a web app or RESTful APIs. There can be multiple instances of *CryptoAC* and the same instance doesn't need to be used to both protect and access a piece of data;
* [**Data Manager**](./DM) - the entity managing encrypted data, for instance when at-rest (e.g., Cloud) or in-transit (e.g., MQTT). This entity can be operated by a partially-trusted agent, as data are always encrypted when handled by the Data Manager (DM). The DM can be a service storing data in the cloud (e.g., AWS S3) or managing the transmission of data (e.g., an MQTT broker);
* [**Metadata Manager**](./MM) - to properly function, *CryptoAC* needs to maintain metadata, e.g., on the status of the access control policy and cryptographic material (e.g., public keys). The Metadata Manager (MM) is the entity that manages such metadata and it usually is a database (e.g., MySQL, Redis). As for the DM, the MM can be operated by a partially-trusted agent; 
* [**Reference Monitor**](./RM) - some scenarios may require the presence of a Reference Monitor (RM) mediating users' requests to add and (over)write data to ensure compliance with the access control policy. The RM is an extension of *CryptoAC* which can be operated by a partially-trusted agent; 

*CryptoAC* either implements these abstract entities (e.g., as usually it is the case for the RM) or already provides a working interface to an external service (e.g., a MySQL database as MM or an AWS S3 bucket as DM) out-of-the-box.


## Supported Scenarios

At the time of writing, *CryptoAC* supports the protection of data in two scenarios (other scenarios are currently being implemented). For an in-depth view of these scenarios, please refer to the related documentation:
* [**CLOUD**](./Cloud) - *CryptoAC* protects data-at-rest when stored in the Cloud so that neither external attackers nor malicious insiders nor the Cloud service provider itself can access sensitive data. In this scenario, *CryptoAC* allows organisations and individuals to upload, share and collaborate over sensitive files and documents through the Cloud;
* [**MQTT**](./MQTT) - *CryptoAC* allows MQTT clients (e.g., IoT devices) to securely exchange messages through an MQTT broker by providing E2E protection for sensitive data in-transit. 


## Installation

Please refer to the [**Installation**](./Installation) for instructions.