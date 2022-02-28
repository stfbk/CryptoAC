# CryptoAC | Documentation | Reference Monitor

Some scenarios may require the presence of a Reference Monitor (RM) mediating users' requests to add and (over)write data to ensure compliance with the access control policy. Concretely, the RM is an extension of *CryptoAC* which can be operated by a partially-trusted agent.

In detail, the following implementations of the DM are available (between square parenthesis there is the list of scenarios compatible with the related implementation):
* [CLOUD] **RMCloud** - the RM is implemented by *CryptoAC* and exposes three RESTful APIs. The first API is reserved to the administrator and allows to configure the RM (e.g., by providing URLs of the MS and DS). The other two APIs are for checking add and write files operations. Whenever a user wants to add a new file, the RM checks whether the user is granting to the administrator all permissions over the file. When a user wants to write over a file, the RM queries the AC policy to ensure that the user has permission to do so.

> The MQTT scenario does not require an RM.