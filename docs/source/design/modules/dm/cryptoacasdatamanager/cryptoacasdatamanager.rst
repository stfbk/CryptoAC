.. role:: bash(code)
   :language: bash

************************
CryptoAC as Data Manager
************************

CryptoAC can run as a simple storage service for resources such as documents and files. In this configuration, CryptoAC requires the presence of a :ref:`Reference Monitor <Reference Monitor>`, while the integration with an :ref:`Access Controller <Access Controller>` is optional. Moreover, CryptoAC can serve different :ref:`cores <Core>` simultaneously and synchronize concurrent requests from users.

.. warning::
   CryptoAC is intended to be used as Data Manager for testing purposes only (at least at the moment), as it offers very limited functionalities and security (e.g., there is not users' authentication).

To act as a Data Manager, CryptoAC exposes a number of RESTful APIs. More in detail, the administrator can invoke a dedicated API to configure CryptoAC to interact with an :ref:`Access Controller <Access Controller>`, if needed. The other APIs follow the **Create, Read, Update and Delete (CRUD) paradigm**. Users can ask to read a resource by sending a :bash:`get` request to :bash:`/v1/dm/resources/\${core}/\${resourceName}`, where :bash:`\${core}` is the chosen :ref:`core type <Core>` and :bash:`\${resourceName}` is the name (identifier) of the resource; if previously configured, CryptoAC will ask the Access Controller whether the user is authorized to read the resource. If so, CryptoAC will return the (possibly encrypted) requested resource to the user. Users can also ask to add or write over a resource. In both cases, users send a :bash:`post` request to :bash:`/v1/dm/resources` with--as body--the content of the resource. The (new or updated) resource is stored in a temporary bucket until the :ref:`Reference Monitor <Reference Monitor>` confirms the correctness and the compliance of the users' operation with the policy. Only then, CryptoAC moves the resource to the main bucket, making it available to all (authorized) users.

.. collapse:: Expand this to see the OpenAPI documentation on the APIs that CryptoAC exposes when acting as a Data Manager:

  .. code-block:: yaml

      openapi: "3.0.0"
      info:
        version: 0.1.0
        title: "CryptoAC - DM"
        description: "This is the documentation of the RESTful APIs of [CryptoAC](https://github.com/stfbk/CryptoAC) when configured to act as a Data Manager (DM). Please see the [repository](https://github.com/stfbk/CryptoAC) for information about CryptoAC. Mandatory parameters are rendered as path parameters, while optional parameters are rendered as query parameters."
        termsOfService: http://swagger.io/terms/
        contact:
          name: FBK - Security and Trust
          email: sberlato@fbk.eu
          url: https://st.fbk.eu/
        license:
          name: Apache 2.0
          url: https://www.apache.org/licenses/LICENSE-2.0.html
      servers:
        - url: http://localhost:8445/v1/dm
      paths:

        /{CORE}:
          post:
            summary: "Configure the DM to interact with an AC module for traditional access control enforcement."
            description: "If no AC module is used, set the request body to null. This API can be invoked multiple times by the administrator only, with the newer configuration replacing the old one. This API must be invoked at least once before starting to use the DM."
            operationId: configureDM
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
              description: "Parameters of the AC module."
              content: 
                multipart/form-data:
                  schema:
                    type: array
                    items:
                      $ref: '#/components/schemas/ACServiceParameters'
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
            summary: "Upload a resource in the DM for the given core."
            description: "This API can be invoked by any user."
            operationId: addResource
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
              required: true
              content:
                multipart/form-data:
                  schema:
                    type: object
                    properties:
                      Resource:
                        type: string
                        format: binary
                        description: "The resource to add."
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
                      CODE_003_RESOURCE_ALREADY_EXISTS:
                        summary: "Resource already exists."
                        value: "CODE_003_RESOURCE_ALREADY_EXISTS"
              '422':
                description: "Unprocessable Entity."
                content:
                  text/plain:
                    examples:
                      CODE_019_MISSING_PARAMETERS:
                        summary: "Missing core, resource or resource name parameters."
                        value: "CODE_019_MISSING_PARAMETERS"
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
                      CODE_075_DM_CONFIGURATION:
                        summary: "DM was not configured."
                        value: "CODE_075_DM_CONFIGURATION"


        /resources/{CORE}/{Resource_Name}:   
          get:
            summary: "Download the resource from the DM for the given core."
            description: "This API can be invoked by any user."
            operationId: getResource
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
              - name: Resource_Name
                in: path
                description: "The name of the resource."
                required: true
                schema:
                  type: string
              - name: Username
                in: query
                description: "The name of the user requesting the resource."
                required: true
                schema:
                  type: string
            responses:
              '200': 
                description: ok 
                content: 
                  application/octet-stream: 
                    schema: 
                      type: string 
                      format: binary 
                headers: 
                  Content-Disposition: 
                    schema: 
                      type: string 
                      description: Used only with `application/octet-stream` responses 
                      example: attachment; filename="name.pdf"
              '404':
                description: "Not found."
                content:
                  text/plain:
                    examples:
                      CODE_006_RESOURCE_NOT_FOUND:
                        summary: "Resource not found. This code is returned both when the resource does not actually exist and when the resource exists but the user does not have access to it."
                        value: "CODE_006_RESOURCE_NOT_FOUND"
              '422':
                description: "Unprocessable Entity."
                content:
                  text/plain:
                    examples:
                      CODE_019_MISSING_PARAMETERS:
                        summary: "Missing core, resource or user name parameters."
                        value: "CODE_019_MISSING_PARAMETERS"
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
                      CODE_075_DM_CONFIGURATION:
                        summary: "DM was not configured."
                        value: "CODE_075_DM_CONFIGURATION"

                        
          put:
            summary: "Confirm the add or write operation forof the resource for the given core."
            description: "If no AC module is present, this API can be invoked by the administrator and the RM only. Otherwise, this API can be invoked by any user."
            operationId: moveResource
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
              - name: Resource_Name
                in: path
                description: "The name of the resource."
                required: true
                schema:
                  type: string
              - name: Username
                in: query
                description: "The name of the user requesting to write over the resource."
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
              '403':
                description: "Forbidden."
                content:
                  text/plain:
                    examples:
                      CODE_037_FORBIDDEN:
                        summary: "No AC module is present but the API was invoked by a non-admin user."
                        value: "CODE_037_FORBIDDEN"
              '404':
                description: "Not found."
                content:
                  text/plain:
                    examples:
                      CODE_006_RESOURCE_NOT_FOUND:
                        summary: "Resource not found. This code is returned both when the resource does not actually exist and when the resource exists but the user does not have access to it."
                        value: "CODE_006_RESOURCE_NOT_FOUND"
              '422':
                description: "Unprocessable Entity."
                content:
                  text/plain:
                    examples:
                      CODE_019_MISSING_PARAMETERS:
                        summary: "Missing core, resource or user name parameters."
                        value: "CODE_019_MISSING_PARAMETERS"
              '500':
                description: "Internal Server Error."
                content:
                  text/plain:
                    examples:
                      CODE_025_RESOURCE_WRITE:
                        summary: "File system error while writing the resource."
                        value: "CODE_025_RESOURCE_WRITE"
                      CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_RESOURCE_IN_DM:
                        summary: "File system error while deleting the old resource."
                        value: "CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_RESOURCE_IN_DM"
                      outcomeCode:
                        summary: "An outcome code describing the error."
              '503':
                description: "Service Unavailable."
                content:
                  text/plain:
                    examples:
                      CODE_075_DM_CONFIGURATION:
                        summary: "DM was not configured."
                        value: "CODE_075_DM_CONFIGURATION"
                        
          delete:
            summary: "Delete the resource from the DM for the given core."
            description: "This API can be invoked by the administrator only."
            operationId: deleteResource
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
              - name: Resource_Name
                in: path
                description: "The name of the resource."
                required: true
                schema:
                  type: string
              - name: Username
                in: query
                description: "The name of the user requesting to delete the resource."
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
              '403':
                description: "Forbidden."
                content:
                  text/plain:
                    examples:
                      CODE_037_FORBIDDEN:
                        summary: "The API was invoked by a non-admin user."
                        value: "CODE_037_FORBIDDEN"
              '404':
                description: "Not found."
                content:
                  text/plain:
                    examples:
                      CODE_006_RESOURCE_NOT_FOUND:
                        summary: "Resource not found. This code is returned both when the resource does not actually exist and when the resource exists but the user does not have access to it."
                        value: "CODE_006_RESOURCE_NOT_FOUND"
              '422':
                description: "Unprocessable Entity."
                content:
                  text/plain:
                    examples:
                      CODE_019_MISSING_PARAMETERS:
                        summary: "Missing core, resource or user name parameters."
                        value: "CODE_019_MISSING_PARAMETERS"
              '500':
                description: "Internal Server Error."
                content:
                  text/plain:
                    examples:
                      CODE_024_RESOURCE_DELETE:
                        summary: "File system error while deleting the resource."
                        value: "CODE_024_RESOURCE_DELETE"
                      outcomeCode:
                        summary: "An outcome code describing the error."
              '503':
                description: "Service Unavailable."
                content:
                  text/plain:
                    examples:
                      CODE_075_DM_CONFIGURATION:
                        summary: "DM was not configured."
                        value: "CODE_075_DM_CONFIGURATION"



        /temporaryResources/{CORE}/{Resource_Name}:
          delete:
            summary: "Delete the temporary resource from the DM for the given core."
            description: "This API can be invoked by the administrator only."
            operationId: deleteTemporaryResource
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
              - name: Resource_Name
                in: path
                description: "The name of the resource."
                required: true
                schema:
                  type: string
              - name: Username
                in: query
                description: "The name of the user requesting to delete the temporary resource."
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
              '403':
                description: "Forbidden."
                content:
                  text/plain:
                    examples:
                      CODE_037_FORBIDDEN:
                        summary: "The API was invoked by a non-admin user."
                        value: "CODE_037_FORBIDDEN"
              '404':
                description: "Not found."
                content:
                  text/plain:
                    examples:
                      CODE_006_RESOURCE_NOT_FOUND:
                        summary: "Resource not found. This code is returned both when the resource does not actually exist and when the resource exists but the user does not have access to it."
                        value: "CODE_006_RESOURCE_NOT_FOUND"
              '422':
                description: "Unprocessable Entity."
                content:
                  text/plain:
                    examples:
                      CODE_019_MISSING_PARAMETERS:
                        summary: "Missing core, resource or user name parameters."
                        value: "CODE_019_MISSING_PARAMETERS"
              '500':
                description: "Internal Server Error."
                content:
                  text/plain:
                    examples:
                      CODE_024_RESOURCE_DELETE:
                        summary: "File system error while deleting the resource."
                        value: "CODE_024_RESOURCE_DELETE"
                      outcomeCode:
                        summary: "An outcome code describing the error."
              '503':
                description: "Service Unavailable."
                content:
                  text/plain:
                    examples:
                      CODE_075_DM_CONFIGURATION:
                        summary: "DM was not configured."
                        value: "CODE_075_DM_CONFIGURATION"

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

          ACServiceParameters:
            description: Parameters to configure an Access Controller module. See the Core Profile section of the documentation for more details.
            type: "object"


CryptoAC as Data Manager Configuration
######################################

To interact with an instance of CryptoAC configured as a Data Manager, CryptoAC needs to know the endpoint (i.e., the URL and the port) on which the instance is listening to connections and the client's username and password; see the :ref:`Core Profiles <Core Profiles>` section for more details. Whenever the administrator adds a user to the policy, CryptoAC also creates the user's account in the Data Manager and generates the user's password. Intuitively, the Data Manager should have already been configured with an account for the administrator. Then, at start-up, if requested, CryptoAC configures the instance acting as a Data Manager with the parameters required to interact with an Access Controller.
