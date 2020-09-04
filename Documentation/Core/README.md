# CryptoAC | CryptoAC | Documentation | Core

> Last Update: 21/07/2020

## Introduction

The core of *CryptoAC* includes two sub-modules: elements and tuples.

## Elements

*CryptoAC* elements are those involved in the role-based access control (RBAC) policy, i.e., users, roles and files:

* **users**: a user can add, read and write files, depending on the AC policy. Among the users, the administrator can add and delete users and roles, distribute and revoke permissions and add, read, write, and delete files. In *CryptoAC*, each user may have multiple configurations toward different storage systems, e.g., one with AWS, one with Azure, one with a local deployment of Hyperledger Fabric (see this topic in detail [here](../Server/)). For each configuration, the user has a dedicated DAO interface instance that is used to store and retrieve data from the underlying storage system. Each user can be assigned to multiple roles through role tuples;
* **roles**: roles are created internally in an organization for various job functions (e.g., doctor, student, dean, researcher). In RBAC, roles are used to group together privileges. In *CryptoaC*, more users can be assigned to the same role through role tuples. A role has a version number that increases by 1 each time a user is revoked from the role;
* **files**: the RBAC policy is enforced over files containing the actual sensitive or personal data. Each file is encrypted with a symmetric key and securely stored in the DS. Each file is associated with two version numbers, the smaller number identifies the symmetric key to use to decrypt the file, while the greater number the key to encrypt the file. The greater file version number increases by 1 each time a role is revoked all permissions from the file.

Each user and each role has a pair of asymmetric keys for encryption/decryption and another pair for signing/verifying signatures. Moreover, users and role may be found in three different statuses:
* **incomplete**: the element was created but it is not fully configured (e.g., a user missing the keys);
* **operational**: the element is present, fully configured and is ready for use;
* **deleted**: the element was deleted but it is kept in the metadata (e.g., a role that was deleted but we keep it anyway to check eventual digital signatures on tuples).

Each element in *CryptoAC* has an identifier (i.e., username, role name and file name) and a random token of 50 bytes for anonymity (see this topic in detail [here](../DAOs)).


## Tuples

*CryptoAC* tuples represent a link between two elements:
* **role tuples** - when a user is assigned to a role, a role tuple is created. A role tuple contains the identifiers of the user and the role, the role version number and the two pair of the role's asymmetric keys **encrypted** with the public key of the user. In this way, the tuple can be securely stored in the MS and the user can decrypt the role's keys with his private key;
* **permission tuples** - when a role is given a permission over a file, a permission tuple is created. A permission tuple contains the identifiers and the tokens of the role and the file, the role version number, the given permission (i.e., as of now, either "read" or "read and write"), the symmetric key encrypted with the role public key and the version number of the symmetric key;
* **file tuples** - when a file is added, a file tuple is created. The file tuple contains the smaller decryption number of the file and the file token;

Before being stored in the MS, each tuple must be signed against accidental or malicious modifications. Usually, the administrator signs the tuples. The exception is when a user add a new file (the user signs the new file tuple and the permission tuple giving the administrator full permissions over the file) and when a user write over a file (the user uses the keys of the assumed role to sign the updated file tuple). The signature is checked every time a tuple is retrieved from the MS.