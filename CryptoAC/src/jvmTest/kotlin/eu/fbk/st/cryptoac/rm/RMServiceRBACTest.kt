package eu.fbk.st.cryptoac.rm

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.inputStream
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.model.unit.Resource
import eu.fbk.st.cryptoac.rm.model.AddResourceRBACRequest
import eu.fbk.st.cryptoac.rm.model.WriteResourceRBACRequest
import org.junit.jupiter.api.Test

internal abstract class RMServiceRBACTest : RMServiceTest() {

    abstract val rmRBAC: RMServiceRBAC


    @Test
    open fun check_add_resource_once_works() {
        /** check add resource once */
        run {
            val newResource = Resource(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm!!.addResource(
                newResource = newResource,
                content = "exam content".inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
            val addResourceRequest = createAddResourceRequest(newResource.name, Constants.ADMIN)
            assert(
                rmRBAC.checkAddResource(
                    newResource = addResourceRequest.resource,
                    adminPermissionTuple = addResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun check_add_resource_twice_non_existing_or_deleted_resource_fail() {
        val newResource = Resource(name = "exam", enforcement = EnforcementType.COMBINED)
        val addResourceRequest = createAddResourceRequest(newResource.name, Constants.ADMIN)

        /** check add resource twice */
        run {
            assert(dm!!.addResource(
                newResource = newResource,
                content = "exam content".inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rmRBAC.checkAddResource(
                    newResource = addResourceRequest.resource,
                    adminPermissionTuple = addResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rmRBAC.checkAddResource(
                    newResource = addResourceRequest.resource,
                    adminPermissionTuple = addResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_003_RESOURCE_ALREADY_EXISTS
            )
        }

        /** check non-existing resource */
        run {
            val nonExistingResourceRequest = createAddResourceRequest(
                resourceName = "non-existing",
                roleName = Constants.ADMIN
            )
            assert(
                rmRBAC.checkAddResource(
                    newResource = nonExistingResourceRequest.resource,
                    adminPermissionTuple = nonExistingResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** check deleted resource */
        run {
            assert(dm!!.deleteResource(newResource.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rmRBAC.checkAddResource(
                    newResource = addResourceRequest.resource,
                    adminPermissionTuple = addResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_003_RESOURCE_ALREADY_EXISTS
            )
        }
    }

    @Test
    open fun check_write_resource_once_works() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val addResourceRequest = createAddResourceRequest(newResource.name, Constants.ADMIN)
        assert(dm!!.addResource(
            newResource = newResource,
            content = "exam content".inputStream()
        ) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            rmRBAC.checkAddResource(
                newResource = addResourceRequest.resource,
                adminPermissionTuple = addResourceRequest.permissionTuple
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        /** check write resource once */
        run {
            val updatedResource = Resource(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm!!.addResource(
                newResource = updatedResource,
                content = "updated exam content".inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
            val writeResourceRequest = createWriteResourceRequest(
                resourceName = newResource.name,
                resourceToken = addResourceRequest.resource.token,
                symKeyVersionNumber = 1
            )
            assert(
                rmRBAC.checkWriteResource(
                    Constants.ADMIN,
                    writeResourceRequest.symKeyVersionNumber,
                    writeResourceRequest.resource,
                ) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun check_write_resource_twice_non_existing_or_deleted_resource_fail() {
        val newResource = Resource(name = "exam", enforcement = EnforcementType.COMBINED)
        val addResourceRequest = createAddResourceRequest(newResource.name, Constants.ADMIN)
        assert(dm!!.addResource(
            newResource = newResource,
            content = "exam content".inputStream()
        ) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            rmRBAC.checkAddResource(
                newResource = addResourceRequest.resource,
                adminPermissionTuple = addResourceRequest.permissionTuple
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        val updatedResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        assert(dm!!.addResource(
            newResource = updatedResource,
            content = "updated exam content".inputStream()
        ) == OutcomeCode.CODE_000_SUCCESS)
        val writeResourceRequest = createWriteResourceRequest(
            resourceName = newResource.name,
            resourceToken = addResourceRequest.resource.token,
            symKeyVersionNumber = 1
        )
        assert(
            rmRBAC.checkWriteResource(
                Constants.ADMIN,
                writeResourceRequest.symKeyVersionNumber,
                writeResourceRequest.resource,
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        /** check write resource twice */
        run {
            assert(
                rmRBAC.checkWriteResource(
                    Constants.ADMIN,
                    writeResourceRequest.symKeyVersionNumber,
                    writeResourceRequest.resource,
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** check write non-existing resource */
        run {
            val nonExistingWriteResourceRequest = createWriteResourceRequest(
                resourceName = "non-existing",
                resourceToken = "non-existing",
                symKeyVersionNumber = 1
            )
            assert(
                rmRBAC.checkWriteResource(
                    Constants.ADMIN,
                    nonExistingWriteResourceRequest.symKeyVersionNumber,
                    nonExistingWriteResourceRequest.resource,
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** check write deleted resource */
        run {
            assert(dm!!.deleteResource(newResource.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rmRBAC.checkWriteResource(
                    Constants.ADMIN,
                    writeResourceRequest.symKeyVersionNumber,
                    writeResourceRequest.resource,
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }
    }



    fun createAddResourceRequest(
        resourceName: String,
        roleName: String
    ): AddResourceRBACRequest {
        val role = TestUtilities.createRole(roleName = roleName)
        val resource = TestUtilities.createResource(
            resourceName = resourceName,
            enforcement = EnforcementType.COMBINED
        )
        val permissionTuple = TestUtilities.createPermissionTuple(
            role = role,
            resource = resource,
            permission = PermissionType.READWRITE
        )
        return AddResourceRBACRequest(resource, permissionTuple, 1)
    }
    fun createWriteResourceRequest(
        resourceName: String,
        resourceToken: String,
        symKeyVersionNumber: Int
    ): WriteResourceRBACRequest {
        val resource = TestUtilities.createResource(
            resourceName = resourceName,
            symEncKeyVersionNumber = symKeyVersionNumber,
            enforcement = EnforcementType.COMBINED
        )
        resource.token = resourceToken
        return WriteResourceRBACRequest(
            username = Constants.ADMIN,
            roleName = Constants.ADMIN,
            resource = resource,
            symKeyVersionNumber = symKeyVersionNumber,
        )
    }
}