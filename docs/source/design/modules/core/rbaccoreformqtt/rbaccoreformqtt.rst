.. role:: bash(code)
   :language: bash

******************
RBAC Core for MQTT
******************

This core enforces role-based cryptographic access control policies for data---such as messages---in transit with publish-subscribe protocols, e.g., in a message queue of an MQTT broker. The encoding of the policy is inspired to what originally proposed in :ref:`[4] <References>`. As a consequence, the core expects a single administrator managing the policy, and it is not possible for users to delegate permissions. The core can be used in both :ref:`Master <Master Operation Mode>` and :ref:`Service <Service Operation Mode>` mode. However, in the first case, the core does not expect the :ref:`Reference Monitor <Reference Monitor>` module and, intuitively, the same MQTT broker must be used as both :ref:`Data Manager <Data Manager>` and :ref:`Access Controller <Access Controller>`


RBAC Core for MQTT Operations
#############################

The core implements the 10 operations defined in the NIST standard for role-based access control :ref:`[9] <References>` plus read (i.e., decrypt) and write (i.e., encrypt) access to data. The administrator can perform any operation, while users can only read and write over resources. Finally, operations are implemented as atomic transactions, thus the core guarantees the consistency of the status of the policy in case of errors.

* **add user**: add a user to the policy and, depending on the :ref:`configuration <Architecture>`, generate users' credentials for all involved modules (e.g., create an account in the database containing metadata), returning then the user's profile. Note that new users cannot perform any operation nor be assigned to any role until they first upload their profile in an instance of CryptoAC (which initializes users' data structures);
* **delete user**: delete a user from the policy and revoke the user's credentials for all involved modules. Furthermore, revoke the user from all roles to which the user was assigned, refreshing cryptographic material as needed;
* **add role**: add a role to the policy. By default, the administrator is assigned to the new role.
* **delete role**: delete a role from the policy, remove all users assigned to the role and revoke all permissions assigned to the role, refreshing cryptographic material as needed;
* **add resource**: when in Master mode, add a resource to the policy by creating a new topic in the MQTT broker. By default, the administrator has access to all resources;

.. warning::
   Use of this operation in Service mode is under construction.

   
* **delete resource**: delete a resource from the policy and remove all permissions related to the resource from roles. Finally, unsubscribe all users from the topic;
* **assign user to role**: assign a user to a role in the policy, thus allowing the user to assume the assigned role and use its permissions;
* **revoke user from role**: revoke a user from a role in the policy, refreshing cryptographic material as needed;
* **assign permission to role**: assign a permission, which consists in the possibility of executing an action--either read or write over--on a resource--to a role;
* **revoke permission from role**: revoke a permission from a role in the policy, refreshing cryptographic material as needed;
* **read resource**: when in Master mode, subscribe to the corresponding topic. Whenever a message is published to the topic, CryptoAC receives and decrypts it. Then, CryptoAC stores the message locally and waits for the user to download it;

.. warning::
   Use of this operation in Service mode is under construction.

   
* **write resource**: when in Master mode, encrypt and then publish the given message to the corresponding topic.

.. warning::
   Use of this operation in Service mode is under construction.
