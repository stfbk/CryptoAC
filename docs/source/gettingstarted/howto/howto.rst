.. role:: bash(code)
   :language: bash

******
How To
******

Once you have CryptoAC up and running (see the :ref:`Installation <Installation>` section), you can interact with it by either using the :ref:`UI <React Dashboard>` or invoking the :ref:`RESTful APIs <API Controller>` with external or command line tools (e.g., :bash:`curl`). Below, we describe how to configure CryptoAC and explain how to carry out the most common operations for a cryptographic access control scheme in CryptoAC.

.. note::
    You can use tools such as `ngrok <https://ngrok.com/>`_ to share access to your instance of CryptoAC by allowing other clients to connect to your device. 


Setup the Administrator
#######################

As said in the :ref:`motivations <Motivation>`, CryptoAC can adapt to a wide variety of scenarios by combining :ref:`cryptographic access control schemes <Core>` with different :ref:`modules <CryptoAC Modules>`. For instance, to setup CryptoAC to protect documents and files stored in the Cloud with a role-based access control policy:

0. go to :bash:`https://0.0.0.0:8443` and log in as "admin";

1. on the "**New Profile**" page, select the core type of your choice (e.g., RBAC for Cloud). Then, click on the upload icon next to "Create or Upload Profile" and select the corresponding profile file you find in this directory (e.g., :bash:`adminRBACAtRest.json`). Finally, clic on the "**Edit Profile**" button;

2. done! You now have access to the administrator dashboard of CryptoAC, which shows--in the central section--the current state of the cryptographic access control policy through tables and--in the sidebar--all available operations.


CryptoAC APIs
#############

CryptoAC exposes a number of RESTful APIs returning :bash:`JSON` responses to favour flexibility, modularity, scalability and easy integration with other services and allowing to:

* Login and logout users;

* Create, read, update, and delete :ref:`users' profiles <Core Profiles>`: 

* Manage the access control policy by creating and deleting users, roles, attributes, resources and by distributing and revoking assignments and permissions;

.. note::
    Each user can invoke one API of a CryptoAC instance at a time, i.e., parallel requests from the same user are consequentialized.

.. note::
    Whenever you create a new user, CryptoAC returns a :bash:`JSON` file; that file contains the information needed to configure the profile of the new user. To login as the new user, simply repeats the steps 0--2 above, using the name of the user during the login and the user's profile file during the configuration of the profile. 


.. collapse:: Expand this to see the OpenAPI documentation:

    .. code-block:: yaml

        openapi: "3.0.0"
        info:
        version: 0.1.0
        title: "CryptoAC"
        description: "This is the documentation of the RESTful APIs of [CryptoAC](https://github.com/stfbk/CryptoAC). Please see the [repository](https://github.com/stfbk/CryptoAC) for information about CryptoAC. Mandatory parameters are rendered as path parameters, while optional parameters are rendered as query parameters."
        termsOfService: http://swagger.io/terms/
        contact:
            name: FBK - Security and Trust
            email: sberlato@fbk.eu
            url: https://st.fbk.eu/
        license:
            name: Apache 2.0
            url: https://www.apache.org/licenses/LICENSE-2.0.html
        servers:
        - url: http://localhost:8443/v1
        paths:

        
        /profile/{Core}/{Username}:
            get:
            tags: ["Profile"]
            summary: "Get the profile of the user for the given core."
            description: "The admin can get the profile of all users, while a user can only get her own profile."
            operationId: getUserProfile
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Username
                in: path
                description: "The name of the user of the profile to get."
                required: true
                schema:
                    type: string
            responses:
                '200':
                description: "The requested profile as a JSON object."
                content:
                    application/json:
                    schema:
                        type: object
                        items:
                        $ref: '#/components/schemas/userProfile'
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The requested profile was not found. This code is returned both when the profile does not actually exist and when the profile exists but the user does not have access to it."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
            delete:
            tags: ["Profile"]
            summary: "Delete the profile of the user for the given core."
            description: "The admin can delete the profile of all users, while a user can only delete her own profile. This API does not delete the user from the access control policy."
            operationId: deleteUserProfile
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Username
                in: path
                description: "The name of the user of the profile to delete."
                required: true
                schema:
                    type: string
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile to delete was not found. This code is returned both when the profile does not actually exist and when the profile exists but the user does not have access to it."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
                
        /profile/{Core}:
            post:
            tags: ["Profile"]
            summary: "Create the profile of the user for the given core."
            description: "The admin can create the profile for other users, while a user can only create her own profile. Note that cryptographic keys, if not given, are generated by CryptoAC."
            operationId: createUserProfile
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                required: true
                description: "The profile as a JSON object."
                content:
                application/json:
                    schema:
                    type: array
                    items:
                        $ref: '#/components/schemas/userProfile'
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot create profiles of other users."
                        value: "CODE_037_FORBIDDEN"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_018_INTERFACE_CONFIGURATION_PARAMETERS:
                        summary: "Incorrect parameters (e.g., admin flag enabled but not admin user, values do not satisfy regular expressions) ."
                        value: "CODE_018_INTERFACE_CONFIGURATION_PARAMETERS"
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."                
            patch:
            tags: ["Profile"]
            summary: "Update the profile of the user for the given core."
            description: "The admin can update the profile for other users, while a user can only update her own profile. Note that some fields of the profile (which depend on the core type and configuration) cannot be updated."
            operationId: updateUserProfile
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                required: true
                description: "The profile as a JSON object."
                content:
                application/json:
                    schema:
                    type: array
                    items:
                        $ref: '#/components/schemas/userProfile'
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot update profiles of other users."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile to update was not found."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_018_INTERFACE_CONFIGURATION_PARAMETERS:
                        summary: "Incorrect parameters (e.g., admin flag enabled but not admin user, values do not satisfy regular expressions) ."
                        value: "CODE_018_INTERFACE_CONFIGURATION_PARAMETERS"
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."



        /CryptoAC/users/{Core}:
            get:
            tags: ["Users"]
            summary: "Get the list of users for the given core."
            description: "This API concerns users in the access control policy, and not users' profiles."
            operationId: listUsers
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            responses:
                '200':
                description: "The list of users as a JSON object."
                content:
                    application/json:
                    schema:
                        type: array
                        items:
                        $ref: '#/components/schemas/listUsers'
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
            post:
            tags: ["Users"]
            summary: "Add a user to the access control policy for the given core."
            description: "If successful, the API returns the profile of the user (which, by default, is not stored in the CryptoAC instance used to create the user)."
            operationId: addUser
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                required: true
                content:
                application/x-www-form-urlencoded:
                    schema:
                    type: object
                    properties:
                        Username:
                        type: string
                        description: "The name of the user to add."
            responses:
                '200':
                description: "The profile of the new user as a JSON object."
                content:
                    application/json:
                    schema:
                        type: array
                        items:
                        $ref: '#/components/schemas/userProfile'     
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
                        
        /CryptoAC/users/{Core}/{Username}:   
            delete:
            tags: ["Users"]
            summary: "Delete the user from the access control policy for the given core."
            description: "This API removes the deleted user from all roles to which the user was assigned and consequently update the access control policy. This API concerns users in the access control policy, and not users' profiles."
            operationId: deleteUser
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Username
                in: path
                description: "The name of the user to delete."
                required: true
                schema:
                    type: string
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
            
            
                
        /CryptoAC/roles/{Core}:
            get:
            tags: ["Roles"]
            summary: "Get the list of roles for the given core."
            description: ""
            operationId: listRoles
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            responses:
                '200':
                description: "The list of roles as a JSON object."
                content:
                    application/json:
                    schema:
                        type: array
                        items:
                        $ref: '#/components/schemas/listRoles'
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
            post:
            tags: ["Roles"]
            summary: "Add a role to the access control policy for the given core."
            description: ""
            operationId: addRole
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                required: true
                content:
                application/x-www-form-urlencoded:
                    schema:
                    type: object
                    properties:
                        Role_Name:
                        type: string
                        description: "The name of the role to add."
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."              
        
        /CryptoAC/roles/{Core}/{Role_Name}:   
            delete:
            tags: ["Roles"]
            summary: "Delete the role from the access control policy for the given core."
            description: "This API removes all assigned users and permissions from the deleted role and consequently update the access control policy."
            operationId: deleteRole
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Role_Name
                in: path
                description: "The name of the role to delete."
                required: true
                schema:
                    type: string
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
        


        /CryptoAC/resources/{Core}:
            get:
            tags: ["Resources"]
            summary: "Get the list of resources for the given core."
            description: ""
            operationId: listResources
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            responses:
                '200':
                description: "The list of resources as a JSON object."
                content:
                    application/json:
                    schema:
                        type: array
                        items:
                        $ref: '#/components/schemas/listResources'
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
            post:
            tags: ["Resources"]
            summary: "Add a resource to the access control policy for the given core."
            description: ""
            operationId: addResource
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                required: true
                content:
                multipart/form-data:
                    schema:
                    type: object
                    properties:
                        Access_Control_Enforcement:
                        type: string
                        description: "The access control enforcement level of the resource to add."
                        enum: [TRADITIONAL, COMBINED]
                        Resource:
                        type: string
                        format: binary
                        description: "The content of the resource to add (as a file item)."
                application/x-www-form-urlencoded:
                    schema:
                    type: object
                    properties:
                        Access_Control_Enforcement:
                        type: string
                        description: "The access control enforcement level of the resource to add."
                        enum: [TRADITIONAL, COMBINED]
                        Resource_Name:
                        type: string
                        description: "The name of the resource to add."
                        Resource_Content:
                        type: string
                        description: "The content of the resource to add."
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                        CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED:
                        summary: "Wrong content type."
                        value: "CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
            patch:
            tags: ["Resources"]
            summary: "Update a resource in the access control policy for the given core."
            description: ""
            operationId: updateResource
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                required: true
                content:
                multipart/form-data:
                    schema:
                    type: object
                    properties:
                        Resource:
                        type: string
                        format: binary
                        description: "The content of the resource to update (as a file item)."
                application/x-www-form-urlencoded:
                    schema:
                    type: object
                    properties:
                        Resource_Name:
                        type: string
                        description: "The name of the resource to update."
                        Resource_Content:
                        type: string
                        description: "The content of the resource to update."
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                        CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED:
                        summary: "Wrong content type."
                        value: "CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."

        /CryptoAC/resources/{Core}/{Resource_Name}:  
            get:
            tags: ["Resources"]
            summary: "Get the content of the resource for the given core."
            description: "The actual behaviour of this API depends on the configuration of the core (e.g., download the resource as a file, subscribe to an MQTT topic). This API returns 404 both when the resource does not exist and when the resource exists but the user does not have access to it."
            operationId: readResource
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Resource_Name
                in: path
                description: "The name of the resource."
                required: true
                schema:
                    type: string
            responses:
                '200': 
                description: "Success." 
                content: 
                    application/octet-stream: 
                    schema: 
                        type: string 
                        format: binary 
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                headers: 
                    Content-Disposition: 
                    schema: 
                        type: string 
                        description: "Used only with `application/octet-stream` responses."
                        example: attachment; filename="name.pdf"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
            delete:
            tags: ["Resources"]
            summary: "Delete the resource from the access control policy for the given core."
            description: "This API removes the deleted resource from all roles to which the resource was assigned and consequently update the access control policy. This API also deleted all data of the resource."
            operationId: deleteResource
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Resource_Name
                in: path
                description: "The name of the resource to delete."
                required: true
                schema:
                    type: string
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
                
            
                
        /CryptoAC/assignments/{Core}:
            get:
            tags: ["Assignments"]
            summary: "Get the list of user-role assignments for the given core."
            description: "This API accepts query parameters--the name of the user and the name of the role--to filter the assignments. Regardless, not-admin users can only get their own assignments."  
            operationId: listAssignments
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Username
                in: query
                description: "The name of the user to filter the assignments by."
                required: false
                schema:
                    type: string
                - name: Role_Name
                in: query
                description: "The name of the role to filter the assignments by."
                required: false
                schema:
                    type: string
            responses:
                '200':
                description: "The list of assignments as a JSON object."
                content:
                    application/json:
                    schema:
                        type: array
                        items:
                        $ref: '#/components/schemas/listAssignments'
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
            post:
            tags: ["Assignments"]
            summary: "Add a user-role assignment to the access control policy for the given core."
            description: ""
            operationId: addAssignment
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                required: true
                content:
                application/x-www-form-urlencoded:
                    schema:
                    type: object
                    properties:
                        Username:
                        type: string
                        description: "The name of the user of the new assignment."
                        Role_Name:
                        type: string
                        description: "The name of the role of the new assignment."
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."              
            
        /CryptoAC/assignments/{Core}/{Username}/{Role_Name}:
            delete:
            tags: ["Assignments"]
            summary: "Delete the user-role assignment from the access control policy for the given core."
            description: ""
            operationId: deleteAssignment
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Username
                in: path
                description: "The name of the user of the assignment to delete."
                required: true
                schema:
                    type: string
                - name: Role_Name
                in: path
                description: "The name of the role of the assignment to delete."
                required: true
                schema:
                    type: string
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."



        /CryptoAC/permissions/{Core}:
            get:
            tags: ["Permissions"]
            summary: "Get the list of role-(permission-resource) permissions for the given core."
            description: "This API accepts query parameters--the name of the user, the name of the role and the name of the resource--to filter the permissions. Regardless, not-admin users can only get their own permissions."  
            operationId: listPermissions
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Username
                in: query
                description: "The name of the user to filter the permissions by."
                required: false
                schema:
                    type: string
                - name: Role_Name
                in: query
                description: "The name of the role to filter the permissions by."
                required: false
                schema:
                    type: string
                - name: Resource_Name
                in: query
                description: "The name of the resource to filter the permissions by."
                required: false
                schema:
                    type: string
            responses:
                '200':
                description: "The list of permissions as a JSON object."
                content:
                    application/json:
                    schema:
                        type: array
                        items:
                        $ref: '#/components/schemas/listPermissions'
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
            post:
            tags: ["Permissions"]
            summary: "Add a role-(permission-resource) permission to the access control policy for the given core."
            description: ""
            operationId: addPermission
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                required: true
                content:
                application/x-www-form-urlencoded:
                    schema:
                    type: object
                    properties:
                        Role_Name:
                        type: string
                        description: "The name of the role of the new permission."
                        Resource_Name:
                        type: string
                        description: "The name of the resource of the new permission."
                        Permission:
                        type: string
                        description: "The permission of the new permission."
                        enum: [READ, WRITE, READWRITE]
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."                  
                        
        /CryptoAC/permissions/{Core}/{Role_Name}/{Resource_Name}/{Permission}:
            delete:
            tags: ["Permissions"]
            summary: "Delete the role-(permission-resource) permission from the access control policy for the given core."
            description: ""
            operationId: deletePermission
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: Core
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
                - name: Role_Name
                in: path
                description: "The name of the role of the permission to delete."
                required: true
                schema:
                    type: string
                - name: Resource_Name
                in: path
                description: "The name of the resource of the permission to delete."
                required: true
                schema:
                    type: string
                - name: Permission
                in: path
                description: "The permission of the permission to delete."
                required: true
                schema:
                    type: string
                    enum: [READ, WRITE, READWRITE]
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '401':
                description: "Unauthorized."
                content:
                    text/plain:
                    examples:
                        CODE_038_UNAUTHORIZED:
                        summary: "The user is not logged in."
                        value: "CODE_038_UNAUTHORIZED"
                '403':
                description: "Forbidden."
                content:
                    text/plain:
                    examples:
                        CODE_037_FORBIDDEN:
                        summary: "A not-admin user cannot invoke this API."
                        value: "CODE_037_FORBIDDEN"
                '404':
                description: "Not found."
                content:
                    text/plain:
                    examples:
                        CODE_039_PROFILE_NOT_FOUND:
                        summary: "The profile of the logged user was not found in this instance of CryptoAC."
                        value: "CODE_039_PROFILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Supplied a wrong parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
        
        

        /login/:
            post:
            tags: ["Login"]
            summary: "User log in."
            description: "This API is still under development. Currently, users can log in by just providing their username. Logins with multiple sessions (i.e., from different devices and browsers) are allowed and supported."
            operationId: login
            security:
                - cookieAuth: []
                - basicAuth: []
            requestBody:
                required: true
                description: "The user's credentials."
                content:
                application/x-www-form-urlencoded:
                    schema:
                    type: object
                    properties:
                        User:
                        type: string
                        description: "The username."
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '409':
                description: "Conflict."
                content:
                    text/plain:
                    examples:
                        CODE_062_ALREADY_LOGGED_IN_WITH_DIFFERENT_USERNAME:
                        summary: "The user was already logged in but with a different username."
                        value: "CODE_062_ALREADY_LOGGED_IN_WITH_DIFFERENT_USERNAME"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing a mandatory parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                        
        /logout/:
            delete:
            tags: ["Login"]
            summary: "User log out."
            description: "Log out the user from the current session of the device that sent the logout request."
            operationId: logout
            security:
                - cookieAuth: []
                - basicAuth: []
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"


        components:
        securitySchemes:
            cookieAuth:
            type: apiKey
            in: cookie
            name: JSESSIONID
            basicAuth:
            type: http
            scheme: basic

        
        schemas:
                
            userProfile:
            description: "The profile of a user. See the Core Profile section of the documentation for more details."
            type: "object"

            listUsers:
            required:
                - name
                - token
                - status
                - isAdmin
            type: "object"
            properties:
                name:
                type: "string"
                description: "The name of the user."
                token:
                type: "string"
                description: "The pseudonym of the user."
                status:
                type: "string"
                enum: [INCOMPLETE, OPERATIONAL, DELETED]
                isAdmin:
                type: "boolean"
                description: "Whether the user has admin privileges or not."
        
            listRoles:
            required:
                - name
                - token
                - status
                - versionNumber
            type: "object"
            properties:
                name:
                type: "string"
                description: "The name of the user."
                token:
                type: "string"
                description: "The pseudonym of the user."
                status:
                type: "string"
                enum: [INCOMPLETE, OPERATIONAL, DELETED]
                versionNumber:
                type: "integer"
                description: "The version number of the role."
            
            listResources:
            required:
                - name
                - token
                - status
                - versionNumber
            type: "object"
            properties:
                name:
                type: "string"
                description: "The name of the user."
                token:
                type: "string"
                description: "The pseudonym of the user."
                status:
                type: "string"
                enum: [INCOMPLETE, OPERATIONAL, DELETED]
                symEncKeyVersionNumber:
                type: "integer"
                description: "The version number of the symmetric cryptographic key to use to encrypt new data for the resource."
                symDecKeyVersionNumber:
                type: "integer"
                description: "The version number of the symmetric cryptographic key to use to decrypt old data for the resource."
                enforcement:
                type: "string"
                enum: [TRADITIONAL, COMBINED]    
            
            listAssignments:
            required:
                - username
                - roleName
                - roleVersionNumber
                - encryptedAsymEncKeys
                - encryptedAsymSigKeys
                - signer
                - signature
            type: "object"
            properties:
                username:
                type: "string"
                description: "The name of the user."
                roleName:
                type: "string"
                description: "The name of the role."
                roleVersionNumber:
                type: "integer"
                description: "The version number of the role."
                encryptedAsymEncKeys:
                type: "object"
                required:
                    - private
                    - public
                    - keyType
                description: "The asymmetric keys for en/decryption operations of the role, encrypted with the public key of the user of this assignment."
                properties:
                    private:
                    type: "string"
                    format: "byte"
                    description: "The (encrypted) asymmetric private decryption key."
                    public:
                    type: "string"
                    format: "byte"
                    description: "The (encrypted) asymmetric public encryption key."
                    keyType:
                    type: "string"
                    enum: [ENC, SIG]
                    keyID:
                    type: "string"
                    description: "The (optional) identifier of the key pair."
                encryptedAsymSigKeys:
                type: "object"
                required:
                    - private
                    - public
                    - keyType
                description: "The asymmetric keys for create and verify digital signatures of the role, encrypted with the public key of the user of this assignment."
                properties:
                    private:
                    type: "string"
                    format: "byte"
                    description: "The (encrypted) asymmetric private signing key."
                    public:
                    type: "string"
                    format: "byte"
                    description: "The (encrypted) asymmetric public verification key."
                    keyType:
                    type: "string"
                    enum: [ENC, SIG]
                    keyID:
                    type: "string"
                    description: "The (optional) identifier of the key pair."
                signer:
                type: "string"
                description: "The pseudonym (and not the name) of the user (usually the administrator) that signed this assignment."
                signature:
                type: "string"
                format: "byte"
                description: "The signature of this assignment."
            
            listPermissions:
            required:
                - roleName
                - resourceName
                - roleToken
                - resourceToken
                - permission
                - encryptingSymKey
                - decryptingSymKey
                - roleVersionNumber
                - symKeyVersionNumber
                - signer
                - signature
            type: "object"
            properties:
                roleName:
                type: "string"
                description: "The name of the role."
                resourceName:
                type: "string"
                description: "The name of the resource."
                roleToken:
                type: "string"
                description: "The pseudonym of the role."
                resourceToken:
                type: "string"
                description: "The pseudonym of the resource."          
                permission:
                type: "string"
                enum: [READ, WRITE, READWRITE]  
                encryptingSymKey:
                type: "object"
                required:
                    - key
                description: "The symmetric key of the permission, encrypted with the public key of the role of this assignment, to encrypt the resource of this assignment."
                properties:
                    key:
                    type: "string"
                    format: "byte"
                    description: "The (encrypted) symmetric key."
                decryptingSymKey:
                type: "object"
                required:
                    - key
                description: "The symmetric key of the permission, encrypted with the public key of the role of this assignment, to decrypt the resource of this assignment."
                properties:
                    key:
                    type: "string"
                    format: "byte"
                    description: "The (encrypted) symmetric key."
                roleVersionNumber:
                type: "integer"
                description: "The version number of the role."
                symKeyVersionNumber:
                type: "integer"
                description: "The version number of the symmetric key to encrypt the resource."
                signer:
                type: "string"
                description: "The pseudonym (and not the name) of the user (usually the administrator) that signed this assignment."
                signature:
                type: "string"
                format: "byte"
                description: "The signature of this assignment."


Error Codes
###########

Except for a few cases (e.g., when adding a user or reading a resource), CryptoAC's APIs all return a code representing the outcome of the operation, which can be either successful (i.e., :bash:`CODE_000_SUCCESS`) or not (i.e., any other code). Codes are ideally self-explanatory, though one may need to check the logs of CryptoAC to understand the root cause of an error.

.. collapse:: Expand this to see all error codes:

    .. code-block:: yaml

        CODE_000_SUCCESS
        CODE_001_USER_ALREADY_EXISTS
        CODE_002_ROLE_ALREADY_EXISTS
        CODE_003_RESOURCE_ALREADY_EXISTS
        CODE_004_USER_NOT_FOUND
        CODE_005_ROLE_NOT_FOUND
        CODE_006_RESOURCE_NOT_FOUND
        CODE_007_ROLETUPLE_NOT_FOUND
        CODE_008_PERMISSIONTUPLE_NOT_FOUND
        CODE_010_ROLETUPLE_ALREADY_EXISTS
        CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
        CODE_013_USER_WAS_DELETED
        CODE_014_ROLE_WAS_DELETED
        CODE_015_RESOURCE_WAS_DELETED
        CODE_016_INVALID_PERMISSION
        CODE_017_INVALID_VERSION_NUMBER
        CODE_018_SERVICE_CONFIGURATION_PARAMETERS
        CODE_019_MISSING_PARAMETERS
        CODE_020_INVALID_PARAMETER
        CODE_021_RM_CONFIGURATION
        CODE_022_ADMIN_CANNOT_BE_MODIFIED
        CODE_023_USER_CANNOT_BE_MODIFIED
        CODE_024_RESOURCE_DELETE
        CODE_025_RESOURCE_WRITE
        CODE_026_TUPLE_FORMAT
        CODE_027_AC_ENFORCEMENT_INCONSISTENT
        CODE_028_OPA_POLICY_CREATION
        CODE_029_OPA_POLICY_UPDATE
        CODE_030_OPA_DOCUMENT_DOWNLOAD
        CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
        CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
        CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
        CODE_034_UNLOCK_FAILED
        CODE_035_ADMIN_ALREADY_INITIALIZED
        CODE_036_ADMIN_NAME
        CODE_037_FORBIDDEN
        CODE_038_UNAUTHORIZED
        CODE_039_PROFILE_NOT_FOUND
        CODE_040_MALFORMED_PROFILE
        CODE_041_UR_ASSIGNMENTS_NOT_FOUND
        CODE_042_PA_ASSIGNMENTS_NOT_FOUND
        CODE_043_RM_CONNECTION_TIMEOUT
        CODE_044_DM_CONNECTION_TIMEOUT
        CODE_045_MM_CONNECTION_TIMEOUT
        CODE_046_CRYPTOAC_CONNECTION_TIMEOUT
        CODE_047_AC_CONNECTION_TIMEOUT
        CODE_048_HTTP_METHOD_NOT_SUPPORTED
        CODE_049_UNEXPECTED
        CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION
        CODE_051_LOGIN_REQUIRED
        CODE_052_USER_ALREADY_INITIALIZED
        CODE_053_USER_IS_INCOMPLETE
        CODE_054_CREATE_USER_MM
        CODE_055_ACCESS_DENIED_TO_MM
        CODE_056_DELETE_USER_MM
        CODE_057_SERVICE_TYPE_UPDATED
        CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_RESOURCE_IN_DM
        CODE_059_ACCESS_DENIED_TO_DM
        CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED
        CODE_061_WRONG_PARAMETERS_FOR_CORE
        CODE_062_ALREADY_LOGGED_IN_WITH_DIFFERENT_USERNAME
        CODE_063_ACCESS_DENIED_TO_AC
        CODE_062_UR_ASSIGNMENTS_ALREADY_EXISTS
        CODE_063_PA_ASSIGNMENTS_ALREADY_EXISTS
        CODE_064_DELETE_ATTRIBUTES_CAUSES_EMPTY_ACCESS_STRUCTURE
        CODE_065_ATTRIBUTE_ALREADY_EXISTS
        CODE_066_ATTRIBUTE_NOT_FOUND
        CODE_067_ATTRIBUTE_WAS_DELETED
        CODE_068_ATTRIBUTETUPLE_ALREADY_EXISTS
        CODE_069_ACCESSSTRUCTURETUPLE_ALREADY_EXISTS
        CODE_070_ATTRIBUTETUPLE_NOT_FOUND
        CODE_071_ACCESSSTRUCTURETUPLE_NOT_FOUND
        CODE_072_MPK_ALREADY_INITIALIZED
        CODE_073_ABE_KEY_NOT_FOUND
        CODE_074_CANNOT_REVOKE_LAST_ACCESS_STRUCTURE_TUPLE
        CODE_075_DM_CONFIGURATION
        CODE_076_OPA_POLICY_EVAL
        CODE_077_SERVICE_ALREADY_CONFIGURED
        CODE_078_XACML_CONFIGURATION
        CODE_079_XACML_DOMAIN_QUERY
        CODE_080_XACML_PAP
        CODE_081_XACML_PAP_POLICY_NOT_FOUND
        CODE_082_XACML_PDP
        CODE_083_XACML_PDP_UNAUTHORIZED
        CODE_084_UNSUPPORTED_DYNSEC_ERROR
            