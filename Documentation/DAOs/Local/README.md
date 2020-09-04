# CryptoAC | CryptoAC | Documentation | DAOs | Local

> Last Update: 31/08/2020

## Local DAO Interface implementation

The **DAOInterfaceLocal** class provides support for using CryptoAC in an **IaaS** paradigm. As this implementation inherits from the **DAOInterfaceMySQL** abstract class for handling metadata, only methods uploading and downloading files are implemented. 

As explained in the [home page](../../README.md), A CAC scheme commonly expects four entities: the proxy, the reference monitor (RM), the data storage (DS) and the metadata storage (MS). As *CryptoAC* can act either as a proxy, RM or DS, it is possible to configure a local deployment in which each entity is entirely supported by *CryptoAC*, i.e., not relying on any specific cloud service or platform. Indeed, the only support needed is the base infrastructure on which to deploy the docker containers.

TODO cloudify orchestration

> As of now, a simple mySQL8+ docker container can act as the MS. You can run `sudo docker run -it -p 127.0.0.1:3306:33060  --name cryptoac-mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:8.0`
