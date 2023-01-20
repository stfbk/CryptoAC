.. role:: bash(code)
   :language: bash

*****************
Open Policy Agent
*****************

The `Open Policy Agent (OPA) <https://www.openpolicyagent.org/>`_ is an open-source, general-purpose policy engine that decouples policy decision-making from policy enforcement. OPA provides a high-level declarative language (**Rego**) that allows specifying policy as code and offers APIs to offload policy decision-making. 

.. note::
   CryptoAC currently integrates the cryptographic access control policy with OPA for role-based access control only.



Role-based Access Control Integration with the Open Policy Agent
################################################################

CryptoAC integrates with OPA by synchronizing the cryptographic access control policy into an **OPA document**--which contains the state of the policy--and an **OPA policy**--which contains the logic that implements RBAC--, respectively. We implement the management and evaluation of the policy as described in the `related documentation <https://www.openpolicyagent.org/docs/latest/comparison-to-other-systems/#role-based-access-control-rbac>`_. Therefore, the OPA document consists of assignments of users and permissions to roles, i.e., it maintains the :bash:`UR` and :bash:`PA` sets of the RBAC policy only, as shown below:

.. code-block:: json

    {
        "ur": {
            "thomas": [
                "professor"
            ],
            "lucas": [
                "student"
            ]
        },
        "pa": {
            "professor": [
                {
                    "permission":"READ",
                    "resource":"exam.txt"
                },
                {
                    "permission":"WRITE",
                    "resource":"exam.txt"
                }
            ],
            "student": [
                {
                    "permission":"READ",
                    "resource":"exam.txt"
                }
            ]
        }
    }

    

Similarly, the OPA policy (written in **Rego**) checks whether a given user is assigned to at least one role that has the requested permission, i.e., can perform the given operation on the given resource:  

.. code-block:: bash

    package rbac

    # To use the OPA document in the policy, we need to import that document.
    import data.rbac as policy

    # By default, deny requests.
    default allow = false

    # logic that implements RBAC.
    allow {
        # lookup the list of roles for the user
        roles := policy.ur[input.username]
        # for each role in that list
        r := roles[_]
        # lookup the permissions list for role r
        permissions := policy.pa[r]
        # for each permission
        p := permissions[_]
        # check if the permission granted to r matches the user's request
        p == {"permission": input.permission, "resource": input.resource}
    }



Consequently, a policy evaluation request sent to the :bash:`v1/data/rbac/allow` RESTful APIs of OPA would contain the following payload: 

.. code-block:: json

    {
        "input":{
            "username": "thomas", 
            "permission": "READ", 
            "resource":"exam"
        }
    }


.. warning::
   Currently, each modification to the cryptographic access control policy is reflected into the OPA document directly, i.e., a new OPA document is created (and replaces the old document) each time the policy is modified. Intuitively, even though still fast, this is not an optimal behaviour. However, even though OPA allows modifying the OPA document with the :bash:`application/json-patch+json` media, the corresponding `RFC <https://tools.ietf.org/html/rfc6902>`_ does not expect the possibility of selecting an element from a JSON array by any property (e.g., value) except by index. A `possible revision <https://github.com/json-patch/json-patch2>`_ adding `this functionality <https://github.com/json-patch/json-patch2/issues/18>`_ to the RFC is currently being discussed.


Role-based Access Control Configuration for the Open Policy Agent
*****************************************************************

To interact with OPA, CryptoAC needs to know the endpoint (i.e., the URL and the port) on which OPA is listening to connections; see the :ref:`Core Profiles <Core Profiles>` section for more details. Then, at start-up, CryptoAC configures OPA with an empty OPA document--which will be modified as the cryptographic access control policy is updated--and the :ref:`OPA policy implementing RBAC <Role-based Access Control Integration with the Open Policy Agent>`.

.. warning::
   The `secure deployment of OPA <https://www.openpolicyagent.org/docs/latest/security/>`_ and the integration of CryptoAC with security features such as HTTPS communication, authentication and authorization of clients is currently under development.
