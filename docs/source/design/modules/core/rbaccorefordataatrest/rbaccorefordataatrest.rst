.. role:: bash(code)
   :language: bash

**************************
RBAC Core for Data At Rest
**************************

This core enforces role-based cryptographic access control policies for data---such as documents and files---stored at rest, e.g., in a simple storage service or database of a Cloud or Edge provider. The encoding of the policy is inspired to what originally proposed in :ref:`[8] <References>`. As a consequence, the core expects a single administrator managing the policy, and it is not possible for users to delegate permissions. The core can be used in both :ref:`Master <Master Operation Mode>` and :ref:`Service <Service Operation Mode>` mode.

.. note::
   A variant of the core allowing resource versioning--thus eliminating the need for the Reference Monitor--is currently under development.


RBAC Core for Data At Rest Operations
#####################################

The core implements the 10 operations defined in the NIST standard for role-based access control :ref:`[9] <References>` plus read (i.e., decrypt) and write (i.e., encrypt) access to data. The administrator can perform any operation, while users can only add, read and write over resources. Finally, operations are implemented as atomic transactions, thus the core guarantees the consistency of the status of the policy in case of errors.

* **add user**: add a user to the policy and, depending on the :ref:`configuration <Architecture>`, generate users' credentials for all involved modules (e.g., create an account in the database containing metadata), returning then the user's profile. Note that new users cannot perform any operation nor be assigned to any role until they first upload their profile in an instance of CryptoAC (which initializes users' data structures);
* **delete user**: delete a user from the policy and revoke the user's credentials for all involved modules. Furthermore, revoke the user from all roles to which the user was assigned, refreshing cryptographic material as needed;
* **add role**: add a role to the policy. By default, the administrator is assigned to the new role.
* **delete role**: delete a role from the policy, remove all users assigned to the role and revoke all permissions assigned to the role, refreshing cryptographic material as needed;
* **add resource**: when in Master mode, a user can send a resource to CryptoAC, which encrypts its content and uploads it to the Data Manager. Then, CryptoAC asks the Reference Monitor to validate the operation. If everything is in order, the Reference Monitor adds the resource to the policy and notifies the Data Manager to accept the new resource. By default, the administrator has access to all resources;

.. warning::
   Use of this operation in Service mode is under construction.


* **delete resource**: delete a resource from the policy and remove all permissions related to the resource from roles. Finally, delete the content of the resource from the Data Manager;
* **assign user to role**: assign a user to a role in the policy, thus allowing the user to assume the assigned role and use its permissions;
* **revoke user from role**: revoke a user from a role in the policy, refreshing cryptographic material as needed;
* **assign permission to role**: assign a permission, which consists in the possibility of executing an action--either read or write over--on a resource--to a role;
* **revoke permission from role**: revoke a permission from a role in the policy, refreshing cryptographic material as needed;
* **read resource**: when in Master mode, download and decrypt the resource from the Data Manager, returning it to the user;

.. warning::
   Use of this operation in Service mode is under construction.


* **write resource**: when in Master mode, a user can send an updated resource to CryptoAC, which encrypts its content and uploads it to the Data Manager. Then, CryptoAC asks the Reference Monitor to validate the operation. If everything is in order, the Reference Monitor notifies the Data Manager to accept the updated resource.

.. warning::
   Use of this operation in Service mode is under construction.
