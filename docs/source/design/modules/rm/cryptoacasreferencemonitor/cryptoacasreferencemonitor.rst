.. role:: bash(code)
   :language: bash

*****************************
CryptoAC as Reference Monitor
*****************************

CryptoAC can run as a Reference Monitor. In this configuration, CryptoAC requires the presence of a :ref:`Metadata Manager <Metadata Manager>` and a :ref:`Data Manager <Data Manager>`, while the integration with an :ref:`Access Controller <Access Controller>` is optional. Moreover, CryptoAC can serve different :ref:`cores <Core>` simultaneously and synchronize concurrent requests from users.

.. note::
   CryptoAC as Reference Monitor currently supports role-based acccess control only.

.. warning::
   CryptoAC is intended to be used as Reference Monitor for testing purposes only (at least at the moment), as it offers very limited functionalities and security (e.g., there is not users' authentication).


To act as a Reference Monitor, CryptoAC exposes a number of RESTful APIs. More in detail, the administrator can invoke a dedicated API to configure CryptoAC to interact with a :ref:`Metadata Manager <Metadata Manager>`, a :ref:`Data Manager <Data Manager>` and an :ref:`Access Controller <Access Controller>`, if needed. The other APIs allows mediating operations to add and write over resources, respectively. In both cases, users have to previously upload the (new or updated) resource in the temporary bucket of the Data Manager, which will wait for the :ref:`Reference Monitor <Reference Monitor>` to confirm the correctness and the compliance of the users' operation with the policy. Users can ask to add a resource by sending a :bash:`post` request to :bash:`/v1/rm/resources/\${core}/`, where :bash:`\${core}` is the chosen :ref:`core type <Core>`. CryptoAC will check whether the request is in order, i.e., all values are consistent and digital signatures are valid. If so, CryptoAC will add the information of the new resource in the Metadata Manager, the Access Controller--if previously configured--and confirm the correctness of the operation to the Data Manager. Users can also ask to write over a resource by sending a :bash:`patch` request to :bash:`/v1/rm/resources/\${core}/`. CryptoAC will check whether the request is in order, i.e., all values are consistent and digital signatures are valid, and ask the Access Controller--if previously configured--whether the user is authorized to write over the resource. If so, CryptoAC will update the information of the new resource in the Metadata Manager and confirm the correctness of the operation to the Data Manager.

.. collapse:: Expand this to see the OpenAPI documentation on the APIs that CryptoAC exposes when acting as a Reference Monitor:

    .. code-block:: yaml

        openapi: "3.0.0"
        info:
        version: 0.1.0
        title: "CryptoAC - RM"
        description: "This is the documentation of the RESTful APIs of [CryptoAC](https://github.com/stfbk/CryptoAC) when configured to act as a Reference Monitor (RM). Please see the [repository](https://github.com/stfbk/CryptoAC) for information about CryptoAC. Mandatory parameters are rendered as path parameters, while optional parameters are rendered as query parameters."
        termsOfService: http://swagger.io/terms/
        contact:
            name: FBK - Security and Trust
            email: sberlato@fbk.eu
            url: https://st.fbk.eu/
        license:
            name: Apache 2.0
            url: https://www.apache.org/licenses/LICENSE-2.0.html
        servers:
        - url: http://localhost:8444/v1/rm
        paths:

        /{CORE}:
            post:
            summary: "Configure the RM to interact with an MM, DM and AC module."
            description: "If no AC module is used, set that part of the request body to null. This API can be invoked multiple times by the administrator only, with the newer configuration replacing the old one. This API must be invoked at least once before starting to use the RM."
            operationId: configureRM
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: CORE
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                description: "Parameters of the MM, DM and AC modules."
                content: 
                multipart/form-data:
                    schema:
                    type: array
                    items:
                        $ref: '#/components/schemas/RMCryptoACParameters'
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_018_INTERFACE_CONFIGURATION_PARAMETERS:
                        summary: "Supplied wrong configuration parameters (e.g., wrong URL or port)."
                        value: "CODE_018_INTERFACE_CONFIGURATION_PARAMETERS"
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing core parameter."
                        value: "CODE_019_MISSING_PARAMETERS"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
        
        /resources/{CORE}:
            post:
            summary: "Ask the RM to approve the upload of a new resource in the DM."
            description: "This API can be invoked by any user."
            operationId: checkResourceAdd
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: CORE
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                description: "Information about the resource."
                content: 
                multipart/form-data:
                    schema:
                    type: array
                    items:
                        $ref: '#/components/schemas/AddResourceRBACRequest'
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '404':
                description: "Not Found."
                content:
                    text/plain:
                    examples:
                        CODE_004_USER_NOT_FOUND:
                        summary: "Signer user not found."
                        value: "CODE_004_USER_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_016_INVALID_PERMISSION:
                        summary: "Specified permission is incorrect."
                        value: "CODE_016_INVALID_PERMISSION"
                        CODE_017_INVALID_VERSION_NUMBER:
                        summary: "Version numbers are incorrect."
                        value: "CODE_017_INVALID_VERSION_NUMBER"
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing core or other parameters."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_020_INVALID_PARAMETER:
                        summary: "Missing core parameter."
                        value: "CODE_020_INVALID_PARAMETER"
                        CODE_026_TUPLE_FORMAT:
                        summary: "Tuples do not present consistent values."
                        value: "CODE_026_TUPLE_FORMAT"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
                '503':
                description: "Service Unavailable."
                content:
                    text/plain:
                    examples:
                        CODE_021_RM_CONFIGURATION:
                        summary: "RM was not configured."
                        value: "CODE_021_RM_CONFIGURATION"
            patch:
            summary: "Ask the RM to approve the write operation on a resource in the DM."
            description: "This API can be invoked by any user."
            operationId: checkResourceWrite
            security:
                - cookieAuth: []
                - basicAuth: []
            parameters:
                - name: CORE
                in: path
                description: "The core."
                required: true
                schema:
                    type: string
            requestBody:
                description: "Information about the resource."
                content: 
                multipart/form-data:
                    schema:
                    type: array
                    items:
                        $ref: '#/components/schemas/WriteResourceRBACRequest'
            responses:
                '200':
                description: "Success."
                content:
                    text/plain:
                    examples:
                        CODE_000_SUCCESS:
                        summary: "Success."
                        value: "CODE_000_SUCCESS"
                '404':
                description: "Not Found."
                content:
                    text/plain:
                    examples:
                        CODE_004_USER_NOT_FOUND:
                        summary: "Signer user not found."
                        value: "CODE_004_USER_NOT_FOUND"
                        CODE_006_FILE_NOT_FOUND:
                        summary: "Resource not found. This code is returned both when the resource does not actually exist and when the resource exists but the user does not have access to it."
                        value: "CODE_006_FILE_NOT_FOUND"
                '422':
                description: "Unprocessable Entity."
                content:
                    text/plain:
                    examples:
                        CODE_017_INVALID_VERSION_NUMBER:
                        summary: "Version numbers do not correspond to the previous ones."
                        value: "CODE_017_INVALID_VERSION_NUMBER"
                        CODE_019_MISSING_PARAMETERS:
                        summary: "Missing core or other parameters."
                        value: "CODE_019_MISSING_PARAMETERS"
                        CODE_026_TUPLE_FORMAT:
                        summary: "Tuples do not present consistent values."
                        value: "CODE_026_TUPLE_FORMAT"
                        CODE_027_AC_ENFORCEMENT_INCONSISTENT:
                        summary: "Specified enforcement does not correspond to the previous one."
                        value: "CODE_027_AC_ENFORCEMENT_INCONSISTENT"
                '500':
                description: "Internal Server Error."
                content:
                    text/plain:
                    examples:
                        outcomeCode:
                        summary: "An outcome code describing the error."
                '503':
                description: "Service Unavailable."
                content:
                    text/plain:
                    examples:
                        CODE_021_RM_CONFIGURATION:
                        summary: "RM was not configured."
                        value: "CODE_021_RM_CONFIGURATION"
                

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
        
            AddResourceRBACRequest:
            required:
                - resource
                - permissionTuple
                - symKeyVersionNumber
            type: "object"
            properties:
                resource:
                type: "object"
                properties:
                    name:
                        type: string
                        example: "document"
                    token:
                        type: string
                        example: "dt3yWF5=="
                    enforcement: 
                        type: string
                        enum: [TRADITIONAL, COMBINED]
                    symDecKeyVersionNumber:
                        type: integer
                        example: 1
                    symEncKeyVersionNumber:
                        type: integer
                        example: 1
                    status: 
                        type: string
                        enum: [INCOMPLETE, OPERATIONAL, DELETED]
                permissionTuple:
                type: "object"
                properties:
                    roleName:
                    type: string
                    example: "employee"
                    resourceName:
                    type: string
                    example: "document"
                    roleToken:
                    type: string
                    example: "dt3yWF5=="
                    resourceToken:
                    type: string
                    example: "dt3yWF5=="
                    permission: 
                    type: string
                    enum: [READ, WRITE, READWRITE] 
                    encryptingSymKey:
                    type: "object"
                    properties:
                        key:
                        type: array
                        items:
                            type: integer
                        example: "[-34, 56, 34, 67, ...] (array of bytes)"
                    decryptingSymKey:
                    type: "object"
                    properties:
                        key:
                        type: array
                        items:
                            type: integer
                        example: "[-34, 56, 34, 67, ...] (array of bytes)"
                    roleVersionNumber:
                    type: integer
                    example: 1
                    symKeyVersionNumber:
                    type: integer
                    example: 1
                    signer:
                    type: string
                    example: "admin"
                    signature:
                    type: array
                    items:
                        type: integer
                    example: "[-34, 56, 34, 67, ...] (array of bytes)"
                symKeyVersionNumber:
                    type: integer
                    example: 1
                    
            WriteResourceRBACRequest:
            required:
                - username
                - roleName
                - resource
                - symKeyVersionNumber
            type: "object"
            properties:
                username:
                type: string
                example: "john"
                roleName:
                type: string
                example: "employee"
                resource:
                type: "object"
                properties:
                    name:
                        type: string
                        example: "document"
                    token:
                        type: string
                        example: "dt3yWF5=="
                    enforcement: 
                        type: string
                        enum: [TRADITIONAL, COMBINED]
                    symDecKeyVersionNumber:
                        type: integer
                        example: 1
                    symEncKeyVersionNumber:
                        type: integer
                        example: 1
                    status: 
                        type: string
                        enum: [INCOMPLETE, OPERATIONAL, DELETED]
                symKeyVersionNumber:
                    type: integer
                    example: 1
                        
            RMCryptoACParameters:
            required:
                - crypto
                - mmServiceParameters
                - dmServiceCryptoACParameters
                - acServiceParameters
            type: "object"
            properties:
                crypto:
                type: string
                enum: [JAVA, SODIUM, OPENABE]
                mmServiceParameters:
                description: "Parameters to configure a Metadata Manager module. See the Core Profile section of the documentation for more details."
                type: "object"
                dmServiceCryptoACParameters:
                description: "Parameters to configure a Data Manager module. See the Core Profile section of the documentation for more details."
                type: "object"
                acServiceParameters:
                description: "Parameters to configure an Access Controller module. See the Core Profile section of the documentation for more details."
                type: "object"


CryptoAC as Reference Monitor Configuration
###########################################

To interact with an instance of CryptoAC configured as a Reference Monitor, CryptoAC needs to know the endpoint (i.e., the URL and the port) on which the instance is listening to connections and the client's username and password; see the :ref:`Core Profiles <Core Profiles>` section for more details. Whenever the administrator adds a user to the policy, CryptoAC also creates the user's account in the Reference Monitor and generates the user's password. Intuitively, the Reference Monitor should have already been configured with an account for the administrator. Then, at start-up, if requested, CryptoAC configures the instance acting as a Reference Monitor with the parameters required to interact with a Metadata Manager, a Data Manager and an Access Controller.
