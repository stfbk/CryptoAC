# CryptoAC | CryptoAC | Documentation | Metadata Storage

> Last Update: 05/02/2020

## Introduction

The Metadata Storage (MS) stores metadata such as public cryptographic keys. The MS is implemented as a MySQL8+ database featuring 6 tables, 4 views and 2 triggers. The database is initialized with a [**MySQL script**](./mysqldatabase.sql), while the tables, views and triggers are created by *CryptoAC* proxy at run-time.

To hide (potentially sensitive) identifiers and avoid the disclosure of the Role-Based Access Control (RBAC) policy to the users, we limit users' *SELECT* privileges to grant access to tokens only and employ views and row-level permissions. Views automatically filter entires not associated with the user querying the database, whose username is available through the USER() MySQL function. This implies that the username with which the user connects to the database is the same the user has in the AC policy. In this way, each user knows his portion of the RBAC policy only and we respect the need-to-know principle (i.e., each user has access only to the information strictly needed to accomplish his task).



## Tables

* **users** - each user is identified by the username (primary Key) and has a token (to provide anonymity), two public keys (for encrypting and verifying) and a flag representing the current status of the user. Users are given *SELECT* privilege on the token, keys and flag columns only. The administrator is inserted in the user table.

* **roles** - each role is identified by the role name (primary Key) and has a token (to provide anonymity), two public keys (for encrypting and verifying), a version number and a flag representing the current status of the role. Users are given *SELECT* privilege on the token, keys, version number and flag columns only. The administrator is inserted in the role table with the same keys and token as in the *users* table.

* **files** - each file is identified by the file name (primary Key) and has a token (to provide anonymity), a file version number (to indicate the symmetric key with which to encrypt the file after *write* operations) and a flag representing the current status of the file. Users are given *SELECT* privilege on the token, version number and flag columns only.

* **roleTuples** - each role tuple is identified by the username and role name (primary key) and has the role version number (in the *roles* table), the encrypted version of both the encrypting and signing public and private keys (encrypted with the user's public key) and a digital signature provided by the administrator. Users have no privileges on this table.

* **permissionTuples** - each permission tuple is identified by the role and file name (primary key) and has the role version number, the encrypted version of the symmetric key (encrypted with the role's public key), the version number of the symmetric key, the role and the file tokens (as in the *role* and *file* tables), the permission over the file, the token of the user that signed the tuple and a digital signature. Permission tuples are signed by the administrator when the permission is granted to a role and by a user when the permission is granted to the administrator. Users have no privileges on this table.

* **fileTuples** - each file tuple is identified by the file name (primary key) and has the file token, the token of the signer (that should be a foreign key to either the user or the role table but MySQL does not support *Polymorphic Associations*), the kind of CryptoAC active element that signed the tuple (either *User* or *Role*), a file version number (to indicate the symmetric key with which to decrypt the file for *read* operations), a field to specify the access control enforcement (traditional, cryptographic or combined) and a digital signature. File tuples are signed by a user when the file is added to the system and by a role when the file is written. Users have no privileges on this table.


## Views

* **user_specific_users** - this view is built on top of the *users* table. The view selects the user's public keys, token and flag. The condition for the filtering of the entries is that the name of the user logged in the database matches the username column. This enforces row-level permission to expose only one entry, i.e., the entry related to the logged user. It allows users to set their own public keys without involving the administrator. The view exposes the entry only if the keys were not initialized already (i.e., if the value in the public key columns is 'mock'). In this way, a user can set his keys only once. Note also that a user cannot insert any value in the view until the administrator creates the user's entry in the *users* table. Users have UPDATE privilege on this view.

* **user_specific_roleTuples** - this view is built on top of the *roleTuples* table from which the view selects all columns. The condition for the filtering of the entries is that the name of the user logged in the database matches the username column. Users have SELECT privilege on this view.

* **user_specific_permissionTuples** - this view is built on top of the *permissionTuples* table from which the view selects all columns. The condition for the filtering of the entries is that the role name in the *permissionTuples* table appears in the *user_specific_roleTuples*. Users have SELECT privilege on this view.

* **user_specific_fileTuples** - this view is built on top of the *fileTuples* table from which the view selects all columns. The condition for the filtering of the entries is that the file name in the *fileTuples* table appears in the *user_specific_permissionTuples*. Users have SELECT privilege on this view.


## Triggers

* **insertTokensPermissionTuple** - this trigger is activated when a new permission tuple is added to the *permissionTuples* table. The trigger sets the role and file tokens of the permission tuple by taking the token values from the **roles** and **files** tables.

* **insertTokenFileTuple** - this trigger is activated when a new file tuple is added to the *fileTuples* table. The trigger sets the file token of the file tuple by taking the token value from the **files** table.


**Security.** To avoid stored-XSS attacks, all database inputs and outputs are sanitized in the proxy; inputs are sanitized through the **PreparedStatement** Java class, while outputs are sanitized using the **OWASP Java Encoder**. All encrypted values are converted in Base64 before being stored in the database.