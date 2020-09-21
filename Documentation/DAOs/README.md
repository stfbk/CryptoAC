# CryptoAC | CryptoAC | Documentation | DAOs

> Last Update: 19/08/2020

## Introduction

*CrpytoAC* uses the [**Data Access Object**](https://en.wikipedia.org/wiki/Data_access_object) (DAO) pattern for the storage of metadata and (encrypted) sensitive data. At high level, the DAO pattern expects an interface describing the functionalities needed to interact with the chosen underlying storage system (e.g., AWS, Azure, Openstack, local IaaS, blochckain). The DAO interface is **eu.fbk.st.cryptoac.dao.DAOInterface** and it contains 53 methods divided into two groups:
* 49 methods handle metadata (e.g., creation and modification of tuples and encrypted keys);
* 4 methods handle encrypted data (i.e., CRUD paradigm).

All methods of the DAO interface must be implemented to allow *CryptoAC* to correctly interact with the underlying storage system. The DAO interface contains the documentation needed to implement these methods. In this folder, you can find the implementations of the DAO interface for the currently supported storage systems. 



## Implement your own DAO Interface

So you want to implement the DAO interface to support a new storage system; if your scenario expects metadata to be stored in a MySQL database, you can re-use the implementation provided in **eu.fbk.st.cryptoac.dao.DAOInterfaceMySQL** (see the section below for more details) for handling metadata. Otherwise, you have to implement all methods for both metadata and (encrypted) sensitive data. 

Below, you find detailed instructions on how to add support to a new storage system named **{dao}**:
* in **eu.fbk.st.cryptoac.dao.DAO**, add another enum with key **{dao}** and value **{dao}**.
* create a new package under **eu.fbk.st.cryptoac.dao** with a meaningful name (e.g., if you add support for Azure, name the package "*azure*"). Hereafter, we will refer this package as **{package}**
* Inside **{package}**, create a class named **DAOInterface{dao}** that extends **eu.fbk.st.cryptoac.dao.DAOInterface** (or **eu.fbk.st.cryptoac.dao.DAOInterfaceMySQL**, if you use a MySQL database as metadata storage)
* Inside **{package}**, create a class named **DAOInterface{dao}Parameters** that extends **eu.fbk.st.cryptoac.dao.DAOInterfaceParameters** (or **eu.fbk.st.cryptoac.dao.DAOInterfaceMySQLParameters**, if you use a MySQL database as metadata storage). 
* In **eu.fbk.st.cryptoac.util.Const**, create a class named **DAOInterface{dao}Parameters**, thus the same name of the class you just created in **{package}**. This class must contain as constant values the names of the fields of the **{package}.DAOInterface{dao}Parameters** class. See **eu.fbk.st.cryptoac.util.Const.DAOInterfaceMySQLParameters** for an example.
* In **eu.fbk.st.cryptoac.util.Const.Apache**, create a final variable with as value **DAOInterface{dao}Parameters**.
* In **{package}.DAOInterface{dao}Parameters**, defines the parameters that you need for initializing your storage system (e.g., URLs, ports, certificates). Besides getter methods, we suggest to create a method to check the consistency of the parameters. Then, you have to implement the **update** method as documented (the **update** method is not abstract if you extended from the **DAOInterfaceMySQL** class). Also, remember to add the "@Expose" annotation to non-sensitive fields, i.e., fields that are not confidential (i.e., do not add this annotation to passowrds or private keys).
* Implement the abstract methods in **{package}.DAOInterface{dao}**. In case your methods throw an expection that is not catched by the calling method (e.g., an expection specific of your SDK), check the the **eu.fbk.st.cryptoac.dao.DAOEXception** class, i.e., a custom exception supposed to be thrown by implementations of the DAO interface. Since we cannot forecast all possible exceptions that might be thrown in future implementations (and therefore we cannot catch them), the idea is to wrap DAO-specific exceptions in this general DAO exception.
* Also, you should create a protected constructor that has an instance of **{package}.DAOInterface{dao}Parameters** as parameter (to acquire the needed parameters). Then, the constructor should set the integer variable "locksOnCloud" to the value 0 and set the String variable "className" to the value "**DAOInterface{dao}**". Lastly, you need to implement a method "getInstance" that has an instance of **{package}.DAOInterface{dao}Parameters** as parameter and returns a new instance of **DAOInterface{dao}**.
* in the **eu.fbk.st.cryptoac.dao.DAOInterface** class in the "getInstance" method, add your case in the switch for your **{dao}**.
* in the **eu.fbk.st.cryptoac.server.proxy.util.ViewUtil** class in the "render" method, add your own **DAOInterface{dao}Parameters** class name in the model.
* in "resources/server/velocity/base.vm", search for the string "id="selectDAO"" and add **{dao}** as an option in the select element. Then, search for the string "id="editProfile"", read the instructions in the comment and add your own parameters.
* TODO?
* Finally, remember that there are tests (under the **"test"** package) that can be run to verify the consistency of the implementation of the interface.



## MySQL Database

To allow you to quickly add support to another storage system, we provide the **DAOInterfaceMySQL** abstract class that already implements the (35) methods to handle metadata in a MySQL8+ database. If your idea is to add support to a new storage system while using a MySQL database for storing metadata, then you can just create a new class extending **DAOInterfaceMySQL**. In this way, you would only have to implement the (5) methods to create (add) delete (delete), update (write) and download (read) files. Note that the create, update and download methods can be invoked by the user. Therefore, invocations to these methods must be checked by the Reference Monitor.

To properly work, the **DAOInterfaceMySQL** abstract class expects the database server to already exist. To initialize the database, just run the script you find in the [**mysqldatabase.sql**](./mysqldatabase.sql) file; the schema, tables, view and triggers are created by the **DAOInterfaceMySQL** itself. The structure of the MySQL database is described below.

Before discussing the database structure in detail, we consider the disclosure of the access control (AC) policy to the users. Indeed, granting users the *SELECT* privilege to all tables in the schema would result in a user being able to read the whole AC policy. Often, it is a good idea to hide the AC policy from users. Therefore, we assign a random token to each user, role and file (except the admin, whose token is the name of the admin). Then, we grant users *SELECT* privilege on the token only and not on the real identifier (i.e., the name of the user, role or file). To further hide the AC policy (i.e., the role, permission and file tuples), we define *Views* which automatically filter the tuples not associated with the user (an indirect implication is that the name of the user in CryptoAC is the same name of the user at database level). In this way, each user can only see the roles and files he is associated to. Finally, triggers in the database allow automatic setting of the tokens whenever a new tuple is inserted.

> all encrypted values are converted in Base64 before being stored in the database

## Tables


* **users** - each user is identified by the username (primary Key) and has a token (to provide anonymity), two public keys (for encrypting and verifying) and a flag representing the current status of the user; a user may be:
    * *incomplete* - when the user was created by the admin but the user has not configured his keys already;
    * *operational*: when the user is fully configured and ready for use;
    * *deleted*: when the user was deleted but user's data is kept as the *user's verifying public key may be needed to verify the signature of tuples previously signed by the user*. 

    > users are given *SELECT* privilege on the token, keys and flag columns
    > the Administrator is inserted in the user table



* **roles** - each role is identified by the role name (primary Key) and has a token (to provide anonymity), two public keys (for encrypting and verifying), a version number and a flag representing the current status of the role; a role may be:
    * *operational*: when the role is fully configured and ready for use;
    * *deleted*: when the role was deleted but role's data is kept as the *role's verifying public key may be needed to verify the signature of tuples previously signed by the role*. 

    > users are given *SELECT* privilege on the token, keys, version number and flag columns
    > the Administrator is inserted in the role table with the same keys and token as the related entry in the *users* table



* **files** - each file is identified by the file name (primary Key) and has a token (to provide anonymity), a file version number (to indicate the symmetric key with which to encrypt the file after *write* operations) and a flag representing the current status of the file; a file may be:
    * *operational*: when the file is fully configured and ready for use;

    > users are given *SELECT* privilege on the token, version number and flag columns



* **roleTuples** - each role tuple is identified by the username and role name (primary key) and has the role version number (in the *roles* table), the encrypted version of both the encrypting and signing public and private keys (encrypted with the user's public key) and a digital signature provided by the administrator

    > users have no privileges on this table
    > currently, only the administrator can sign role tuples



* **permissionTuples** - each permission tuple is identified by the role and file name (primary key) and has the role version number (in the *roles* table), the encrypted version of the symmetric key (encrypted with the role's public key), the version number of the symmetric key (there may be multiple permission tuples related to the same role and file but with different file version number), the role and the file tokens (as in the *role* and *file* tables), the permission over the file, the token of the user that signed the tuple and a digital signature.

    > currently, the given permission may be *read* or *read and write* only
    > users have no privileges on this table
    > permission tuples are signed by the administrator when the permission is granted to a role or by a user when the permission is granted to the administrator



* **fileTuples** - each file tuple is identified by the file name (primary key) and has the file token (as in the *files* table), the token of the signer (that should be a foreign key to either the user or the role table but MySQL does not support *Polymorphic Associations*), the kind of CryptoAC active element that signed the tuple (either *User* or *Role*), a file version number (to indicate the symmetric key with which to decrypt the file for *read* operations) and a digital signature.

    > users have no privileges on this table
    > file tuples are signed by a user when the file is added to the system and by a role when the file is overwritten



## Views


* **user_specific_users** - this view is built on top of the *users* table from which the view selects the user's public keys, token and flag. The condition for the filtering of the entries is that the name of the user logged in the database matches the username column. In practice, this view enforces a row-level AC policy to expose only one entry (the entry related to the logged user) and it is meant to allow users to set their own public keys without having to involve the administrator in the process. The standard scenario is that the administrator creates an entry for all users, setting a mock value in the public key columns. Then, each user updates his row with the actual value of his public keys. Indeed, remember that *keys are generated by the users themselves*. Finally, note that the view exposes the entry only if the keys were not initialized already (i.e., if the value in the public key columns is 'mock'). In this way, a user can set his keys only once. Note also that a user cannot insert any value in the view until the administrator creates the user's entry in the *users* table.

    > users have UPDATE privilege on this view



* **user_specific_roleTuples** - this view is built on top of the *roleTuples* table from which the view selects all columns. The condition for the filtering of the entries is that the name of the user logged in the database matches the username column.

    > users have SELECT privilege on this view



* **user_specific_permissionTuples** - this view is built on top of the *permissionTuples* table from which the view selects all columns. The condition for the filtering of the entries is that the role name in the *permissionTuples* table appears in the *user_specific_roleTuples*.

    > users have SELECT privilege on this view



* **user_specific_fileTuples** - this view is built on top of the *fileTuples* table from which the view selects all columns. The condition for the filtering of the entries is that the file name in the *fileTuples* table appears in the *user_specific_permissionTuples*.

    > users have SELECT privilege on this view



## Triggers


* **insertTokensPermissionTuple** - this trigger is activated when a new permission tuple is added to the *permissionTuples* table. The trigger sets the role and file tokens of the permission tuple by taking the token values from the **roles** and **files** tables.

* **insertTokenFileTuple** - this trigger is activated when a new file tuple is added to the *fileTuples* table. The trigger sets the file token of the file tuple by taking the token value from the **files** table.



## Security

To avoid stored-XSS attacks, all database inputs and outputs are sanitized; inputs are sanitized through the **PreparedStatement** Java class, while outputs are sanitized using the **OWASP Java Encoder**.