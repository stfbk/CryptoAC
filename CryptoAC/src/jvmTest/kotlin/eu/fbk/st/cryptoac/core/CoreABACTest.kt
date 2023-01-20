package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.inputStream
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.model.unit.UnitElementStatus
import org.junit.jupiter.api.*
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals

internal abstract class CoreABACTest : CoreTest() {

    private val coreABAC: CoreABAC by lazy { core as CoreABAC }

    // TODO test that, when revoking an attribute from a user (or when
    //  updating the access structure of a resource), the tokens
    //  of the attribute and the involved resources change.



    @Test
    fun `add attribute of non-existing or deleted attribute works`() {
        val tall = "height"

        /** add attribute of non-existing attribute */
        run {
            assert(coreABAC.addAttribute(
                attributeName = tall,
                attributeAdminValue = "200cm",
            ) == CODE_000_SUCCESS)
            val adminAttributes = coreABAC.getAttributeAssignments(username = ADMIN)
            assert(adminAttributes.code == CODE_000_SUCCESS)
            assert(adminAttributes.attributeTuples!!.size == 2)
            val adminAttributeTuple = adminAttributes.attributeTuples!!.first { it.attributeName == ADMIN }
            assert(adminAttributeTuple.attributeName == ADMIN)
            assert(adminAttributeTuple.attributeValue == null)
            val tallAttributeTuple = adminAttributes.attributeTuples!!.first { it.attributeName == tall }
            assert(tallAttributeTuple.attributeName == tall)
            assert(tallAttributeTuple.attributeValue == "200cm")

            val attributes = coreABAC.getAttributes().attributes!!
            assert(attributes.size == 2)
            assert(attributes.filter { it.name == ADMIN }.size == 1)
            assert(attributes.filter { it.name == tall }.size == 1)
            val adminAttribute = attributes.first { it.name == ADMIN }
            assert(adminAttribute.versionNumber == 1)
            assert(adminAttribute.status == UnitElementStatus.OPERATIONAL)
            val tallAttribute = attributes.first { it.name == tall }
            assert(tallAttribute.versionNumber == 1)
            assert(tallAttribute.status == UnitElementStatus.OPERATIONAL)
        }

        /** add attribute of deleted attribute */
        run {
            assert(coreABAC.deleteAttributes(tall) == CODE_000_SUCCESS)
            val deletedTallAttribute = coreABAC.getAttributes().attributes!!.first { it.name == tall }
            assert(deletedTallAttribute.versionNumber == 1)
            assert(deletedTallAttribute.status == UnitElementStatus.DELETED)
            assert(coreABAC.addAttribute(
                attributeName = tall,
                attributeAdminValue = "250cm",
            ) == CODE_000_SUCCESS)
            val tallAttribute = coreABAC.getAttributes().attributes!!.first { it.name == tall }
            assert(tallAttribute.versionNumber == 2)
            assert(tallAttribute.status == UnitElementStatus.OPERATIONAL)
        }
    }

    @Test
    fun `add attribute with blank name or operational attribute fails`() {
        /** add attribute with blank name */
        run {
            assert(coreABAC.addAttribute("") == CODE_020_INVALID_PARAMETER)
            assert(coreABAC.addAttribute("    ") == CODE_020_INVALID_PARAMETER)
        }

        /** add attribute of operational attribute */
        run {
            val tallName = "tall"
            assert(coreABAC.addAttribute(tallName) == CODE_000_SUCCESS)
            assert(coreABAC.addAttribute(tallName) == CODE_065_ATTRIBUTE_ALREADY_EXISTS)
        }

    }

    @Test
    fun `delete attribute of operational attribute works`() {
        /** delete attribute operational attribute */
        run {
            val tallName = "tall"
            assert(coreABAC.addAttribute(tallName) == CODE_000_SUCCESS)
            assert(coreABAC.deleteAttributes(tallName) == CODE_000_SUCCESS)
            val attributeTuples = coreABAC.getAttributeAssignments(attributeName = tallName)
            assert(attributeTuples.code == CODE_000_SUCCESS)
            assert(attributeTuples.attributeTuples!!.size == 0)
        }
    }

    @Test
    fun `delete attribute of blank, non-existing or deleted attribute fails`() {
        val tallName = "tall"

        /** delete attribute of blank attribute */
        run {
            assert(coreABAC.deleteAttributes(hashSetOf("", tallName)) == CODE_020_INVALID_PARAMETER)
            assert(coreABAC.deleteAttributes(hashSetOf(tallName, "   ")) == CODE_020_INVALID_PARAMETER)
        }

        /** delete attribute of non-existing attribute */
        run {
            assert(coreABAC.deleteAttributes(tallName) == CODE_066_ATTRIBUTE_NOT_FOUND)
        }

        /** delete attribute of deleted attribute */
        run {
            assert(coreABAC.addAttribute(tallName) == CODE_000_SUCCESS)
            assert(coreABAC.deleteAttributes(tallName) == CODE_000_SUCCESS)
            assert(coreABAC.deleteAttributes(tallName) == CODE_067_ATTRIBUTE_WAS_DELETED)
        }
    }

    @Test
    fun `add resource of non-existing resource works`() {
        /** add resource of non-existing resource */
        val testResource = "testResource"
        assert(coreABAC.addAttribute("Tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        run {
            assert(
                coreABAC.addResource(
                    resourceName = testResource,
                    resourceContent = testResource.inputStream(),
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_000_SUCCESS)

            val adminAttributeTuples = coreABAC.getAttributeAssignments(username = ADMIN)
            assert(adminAttributeTuples.code == CODE_000_SUCCESS)
            assert(adminAttributeTuples.attributeTuples!!.size == 3)
            assert(adminAttributeTuples.attributeTuples!!.filter { it.username == ADMIN && it.attributeName == ADMIN }.size == 1)
            assert(adminAttributeTuples.attributeTuples!!.filter { it.username == ADMIN && it.attributeName == "Tall" }.size == 1)
            assert(adminAttributeTuples.attributeTuples!!.filter { it.username == ADMIN && it.attributeName == "From" }.size == 1)

            val accessStructureTuples = coreABAC.getAccessStructures(resourceName = testResource)
            assert(accessStructureTuples.code == CODE_000_SUCCESS)
            assert(accessStructureTuples.accessStructureTuples!!.size == 1)
            assert(accessStructureTuples.accessStructureTuples!!.filter { it.resourceName == testResource }.size == 1)
            val accessStructureTuple = accessStructureTuples.accessStructureTuples!!.elementAt(0)
            assert(accessStructureTuple.permission == PermissionType.READWRITE)
            assert(accessStructureTuple.symKeyVersionNumber == 1)

            val resources = coreABAC.getResources().resources!!.filter { it.name == testResource }
            assert(resources.size == 1)
            assert(resources.filter { it.name == testResource }.size == 1)
            val resource = resources.first { it.name == testResource }
            assert(resource.symEncKeyVersionNumber == 1)
            assert(resource.symDecKeyVersionNumber == 1)
            assert(resource.status == UnitElementStatus.OPERATIONAL)
        }
    }

    @Test
    fun `add resource of blank, operational or deleted resource fails`() {
        val testResource = "testResource"
        val content = testResource.inputStream()
        assert(coreABAC.addAttribute("Tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("Short") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)

        /** add resource with blank name or access structure */
        run {
            assert(
                coreABAC.addResource(
                    resourceName = "",
                    resourceContent = content,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_020_INVALID_PARAMETER)
            assert(
                coreABAC.addResource(
                    resourceName = "    ",
                    resourceContent = content,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_020_INVALID_PARAMETER)
            assert(
                coreABAC.addResource(
                    resourceName = testResource,
                    resourceContent = content,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = " "
                ) == CODE_020_INVALID_PARAMETER)
            assert(
                coreABAC.addResource(
                    resourceName = testResource,
                    resourceContent = content,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "    "
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** add resource of operational resource */
        run {
            assert(
                coreABAC.addResource(
                    resourceName = testResource,
                    resourceContent = content,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_000_SUCCESS)
            assert(
                coreABAC.addResource(
                    resourceName = testResource,
                    resourceContent = content,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_003_RESOURCE_ALREADY_EXISTS)
            assert(
                coreABAC.addResource(
                    resourceName = testResource,
                    resourceContent = content,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READWRITE,
                    accessStructure = "Tall and From"
                ) == CODE_003_RESOURCE_ALREADY_EXISTS)
        }

        /** add resource of deleted resource */
        run {
            val exam = "exam"
            assert(
                coreABAC.addResource(
                    resourceName = exam,
                    resourceContent = content,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_000_SUCCESS)
            assert(coreABAC.deleteResource(exam) == CODE_000_SUCCESS)
            assert(
                coreABAC.addResource(
                    resourceName = exam,
                    resourceContent = content,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    fun `update resource of operational resource works`() {
        val alice = "alice"
        addAndInitUser(coreABAC, alice)
        assert(coreABAC.addAttribute("tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("short") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(coreABAC.assignUserToAttributes(
            username = alice,
            attributeName = "tall",
            attributeValue = "200cm"
        ) == CODE_000_SUCCESS)

        val testResource = "testResource"
        assert(
            coreABAC.addResource(
                resourceName = testResource,
                resourceContent = testResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** update resource of operational resource */
        run {
            assert(coreABAC.updateResourceAndAccessStructures(
                resourceName = testResource,
                newAccessStructuresByPermission = hashMapOf(
                    PermissionType.READ to "short and From:alice"
                ),
                newAccessStructuresEmbedVersionNumbers = false,
            ) == CODE_000_SUCCESS)

            val accessStructureTuples = coreABAC.getAccessStructures(resourceName = testResource)
            assert(accessStructureTuples.code == CODE_000_SUCCESS)
            assert(accessStructureTuples.accessStructureTuples!!.size == 1)
            assert(accessStructureTuples.accessStructureTuples!!.filter { it.resourceName == testResource }.size == 1)
            val accessStructureTuple = accessStructureTuples.accessStructureTuples!!.elementAt(0)
            assert(accessStructureTuple.permission == PermissionType.READ)
            assert(accessStructureTuple.symKeyVersionNumber == 2)
            assert(accessStructureTuple.accessStructure == "admin_1 or (short_1 and From_1:alice)")

            val resources = coreABAC.getResources().resources!!.filter { it.name == testResource }
            assert(resources.size == 1)
            assert(resources.filter { it.name == testResource }.size == 1)
            val resource = resources.first { it.name == testResource }
            assert(resource.symEncKeyVersionNumber == 2)
            assert(resource.symDecKeyVersionNumber == 1)
            assert(resource.status == UnitElementStatus.OPERATIONAL)
        }
    }

    @Test
    fun `update resource of blank, non-existing or deleted resource fails`() {
        val alice = "alice"
        addAndInitUser(coreABAC, alice)
        assert(coreABAC.addAttribute("short") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(coreABAC.assignUserToAttributes(
            username = alice,
            attributeName = "tall",
            attributeValue = "200cm"
        ) == CODE_000_SUCCESS)

        val testResource = "testResource"
        assert(
            coreABAC.addResource(
                resourceName = testResource,
                resourceContent = testResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** update resource of blank name or access structure */
        run {
            assert(
                coreABAC.updateResourceAndAccessStructures(
                    resourceName = "",
                    newAccessStructuresByPermission = hashMapOf(
                        PermissionType.READ to "short and From:bob"
                    ),
                    newAccessStructuresEmbedVersionNumbers = false,
                ) == CODE_020_INVALID_PARAMETER)

            assert(
                coreABAC.updateResourceAndAccessStructures(
                    resourceName = testResource,
                    newAccessStructuresByPermission = hashMapOf(
                        PermissionType.READ to ""
                    ),
                    newAccessStructuresEmbedVersionNumbers = false,
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** update resource of non-existing resource */
        run {
            assert(
                coreABAC.updateResourceAndAccessStructures(
                    resourceName = "non-existing",
                    newAccessStructuresByPermission = hashMapOf(
                        PermissionType.READ to "short and From:bob"
                    ),
                    newAccessStructuresEmbedVersionNumbers = false,
                ) == CODE_006_RESOURCE_NOT_FOUND)

            assert(
                coreABAC.updateResourceAndAccessStructures(
                    resourceName = testResource,
                    newAccessStructuresByPermission = hashMapOf(
                        PermissionType.READWRITE to "short and From:bob"
                    ),
                    newAccessStructuresEmbedVersionNumbers = false,
                ) == CODE_071_ACCESSSTRUCTURETUPLE_NOT_FOUND)
        }

        /** update resource of deleted resource */
        run {
            assert(coreABAC.deleteResource(testResource) == CODE_000_SUCCESS)

            assert(
                coreABAC.updateResourceAndAccessStructures(
                    resourceName = testResource,
                    newAccessStructuresByPermission = hashMapOf(
                        PermissionType.READWRITE to "short and From:bob"
                    ),
                    newAccessStructuresEmbedVersionNumbers = false,
                ) == CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    fun `delete resource of operational resource works`() {
        assert(coreABAC.addAttribute("Short") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)

        /** delete resource of operational resource */
        run {
            val exam = "exam"
            val examContent = "exam".inputStream()
            assert(
                coreABAC.addResource(
                    resourceName = exam,
                    resourceContent = examContent,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_000_SUCCESS)
            assert(coreABAC.deleteResource(exam) == CODE_000_SUCCESS)
            val examAccessStructureTuples = coreABAC.getAccessStructures(resourceName = exam)
            assert(examAccessStructureTuples.code == CODE_000_SUCCESS)
            assert(examAccessStructureTuples.accessStructureTuples!!.size == 0)
            assert(coreABAC.getResources().resources!!.first { it.status == UnitElementStatus.DELETED }.name == exam)
        }
    }

    @Test
    fun `delete resource of blank, non-existing or deleted resource fails`() {
        assert(coreABAC.addAttribute("Short") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)

        /** delete resource of blank resource */
        run {
            assert(coreABAC.deleteResource("") == CODE_020_INVALID_PARAMETER)
            assert(coreABAC.deleteResource("   ") == CODE_020_INVALID_PARAMETER)
        }

        /** delete resource of non-existing resource */
        run {
            assert(coreABAC.deleteResource("exam") == CODE_006_RESOURCE_NOT_FOUND)
        }

        /** delete resource of deleted resource */
        run {
            val exam = "exam"
            val examContent = "exam".inputStream()
            assert(
                coreABAC.addResource(
                    resourceName = exam,
                    resourceContent = examContent,
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_000_SUCCESS)
            assert(coreABAC.deleteResource(exam) == CODE_000_SUCCESS)
            assert(coreABAC.deleteResource(exam) == CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    fun `assign operational user to operational attribute works`() {
        val alice = "alice"
        val tall = "tall"
        addAndInitUser(coreABAC, alice)
        assert(coreABAC.addAttribute(tall) == CODE_000_SUCCESS)

        /** assign operational user to operational attribute */
        run {
            assert(coreABAC.assignUserToAttributes(
                username = alice,
                attributeName = "tall",
                attributeValue = "200cm"
            ) == CODE_000_SUCCESS)

            val aliceAttributes = coreABAC.getAttributeAssignments(alice)
            assert(aliceAttributes.code == CODE_000_SUCCESS)
            assert(aliceAttributes.attributeTuples!!.size == 1)
            assert(aliceAttributes.attributeTuples!!.filter { it.username == alice && it.attributeName == tall }.size == 1)
            val aliceAttributeTuple = aliceAttributes.attributeTuples!!.first { it.username == alice && it.attributeName == tall }
            assert(aliceAttributeTuple.attributeValue == "200cm")
        }
    }

    @Test
    fun `assign blank, non-existing, incomplete or deleted user to blank, non-existing or deleted attribute fails`() {
        val userNonExisting = "userNonExisting"
        val userIncomplete = "userIncomplete"
        assert(coreABAC.addUser(userIncomplete).code == CODE_000_SUCCESS)
        val userOperational = "userOperational"
        addAndInitUser(coreABAC, userOperational)
        val userDeleted = "userDeleted"
        assert(coreABAC.addUser(userDeleted).code == CODE_000_SUCCESS)
        assert(coreABAC.deleteUser(userDeleted) == CODE_000_SUCCESS)

        val attributeNonExisting = "attributeNonExisting"
        val attributeOperational = "attributeOperational"
        assert(coreABAC.addAttribute(attributeOperational) == CODE_000_SUCCESS)
        val attributeDeleted = "attributeDeleted"
        assert(coreABAC.addAttribute(attributeDeleted) == CODE_000_SUCCESS)
        assert(coreABAC.deleteAttributes(attributeDeleted) == CODE_000_SUCCESS)

        /** assign non-existing user to non-existing attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userNonExisting, attributeNonExisting) ==
                        CODE_066_ATTRIBUTE_NOT_FOUND
            )
        }

        /** assign non-existing user to operational attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userNonExisting, attributeOperational) ==
                        CODE_004_USER_NOT_FOUND
            )
        }

        /** assign non-existing user to deleted attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userNonExisting, attributeDeleted) ==
                        CODE_067_ATTRIBUTE_WAS_DELETED
            )
        }

        /** assign incomplete user to non-existing attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userIncomplete, attributeNonExisting) ==
                        CODE_066_ATTRIBUTE_NOT_FOUND
            )
        }

        /** assign incomplete user to operational attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userIncomplete, attributeOperational) ==
                        CODE_053_USER_IS_INCOMPLETE
            )
        }

        /** assign incomplete user to deleted attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userIncomplete, attributeDeleted) ==
                        CODE_067_ATTRIBUTE_WAS_DELETED
            )
        }

        /** assign operational user to non-existing attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userOperational, attributeNonExisting) ==
                        CODE_066_ATTRIBUTE_NOT_FOUND
            )
        }

        /** assign operational user to deleted attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userOperational, attributeDeleted) ==
                        CODE_067_ATTRIBUTE_WAS_DELETED
            )
        }

        /** assign deleted user to non-existing attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userDeleted, attributeNonExisting) ==
                        CODE_066_ATTRIBUTE_NOT_FOUND
            )
        }

        /** assign deleted user to operational attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userDeleted, attributeOperational) ==
                        CODE_013_USER_WAS_DELETED
            )
        }

        /** assign deleted user to deleted attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userDeleted, attributeDeleted) ==
                        CODE_067_ATTRIBUTE_WAS_DELETED
            )
        }

        /** assign blank user to operational attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes("  ", attributeOperational) ==
                        CODE_020_INVALID_PARAMETER
            )
        }

        /** assign operational user to blank attribute */
        run {
            assert(
                coreABAC.assignUserToAttributes(userOperational, "  ") ==
                        CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `assign operational user to operational attribute twice fails`() {
        val alice = "alice"
        val tall = "tall"
        addAndInitUser(coreABAC, alice)
        assert(coreABAC.addAttribute(tall) == CODE_000_SUCCESS)

        /** assign operational user to operational attribute twice */
        run {
            assert(coreABAC.assignUserToAttributes(alice, tall) == CODE_000_SUCCESS)
            assert(coreABAC.assignUserToAttributes(alice, tall) == CODE_068_ATTRIBUTETUPLE_ALREADY_EXISTS)
        }
    }

    @Test
    fun `revoke user from assigned attribute works`() {
        val alice = "alice"
        val tall = "tall"
        val excel = "excel"
        addAndInitUser(coreABAC, alice)
        assert(coreABAC.addAttribute(tall) == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(coreABAC.assignUserToAttributes(alice, tall) == CODE_000_SUCCESS)
        assert(
            coreABAC.addResource(
                resourceName = excel,
                resourceContent = excel.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** revoke user from assigned attribute */
        run {
            /** get the attribute and the resource/access structure tuples before the revoke operation */
            val beforeTallAttribute = coreABAC.getAttributes().attributes!!.first { it.name == tall }
            assert(beforeTallAttribute.versionNumber == 1)
            val beforeAccessStructureTuples = coreABAC.getAccessStructures(resourceName = excel)
            assert(beforeAccessStructureTuples.code == CODE_000_SUCCESS)
            assert(beforeAccessStructureTuples.accessStructureTuples!!.size == 1)
            beforeAccessStructureTuples.accessStructureTuples!!.filter { it.resourceName == excel }.apply {
                assert(size == 1)
                assert(first().symKeyVersionNumber == 1)
            }
            val beforeResourceExcel = coreABAC.getResources().resources!!.first { it.name == excel }
            assert(beforeResourceExcel.symDecKeyVersionNumber == 1)
            assert(beforeResourceExcel.symEncKeyVersionNumber == 1)

            /** revoke operation */
            assert(coreABAC.revokeAttributesFromUser(alice, tall) == CODE_000_SUCCESS)
            val aliceAttributes = coreABAC.getAttributeAssignments(alice)
            assert(aliceAttributes.code == CODE_000_SUCCESS)
            assert(aliceAttributes.attributeTuples!!.size == 0)

            /** get the attribute and the resource/access structure tuples after the revoke operation */
            val afterTallAttribute = coreABAC.getAttributes().attributes!!.first { it.name == tall }
            assert(afterTallAttribute.versionNumber == 2)
            val afterAccessStructureTuples = coreABAC.getAccessStructures(resourceName = excel)
            assert(afterAccessStructureTuples.code == CODE_000_SUCCESS)
            assert(afterAccessStructureTuples.accessStructureTuples!!.size == 1)
            afterAccessStructureTuples.accessStructureTuples!!.filter { it.resourceName == excel }.apply {
                assert(size == 1)
                assert(first().symKeyVersionNumber == 2)
            }
            val afterResourceExcel = coreABAC.getResources().resources!!.first { it.name == excel }
            assert(afterResourceExcel.symDecKeyVersionNumber == 1)
            assert(afterResourceExcel.symEncKeyVersionNumber == 2)


            /** check the difference between the access structure tuples before and after the revoke operation */
            val beforeAccessStructureTuple = beforeAccessStructureTuples.accessStructureTuples!!.elementAt(0)
            val afterAccessStructureTuple = afterAccessStructureTuples.accessStructureTuples!!.elementAt(0)

            assertNotEquals(
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = beforeAccessStructureTuple.encryptingSymKey!!.key.encodeBase64()
                ),
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = afterAccessStructureTuple.encryptingSymKey!!.key.encodeBase64()
                )
            )
            assertEquals(
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = beforeAccessStructureTuple.decryptingSymKey!!.key.encodeBase64()
                ),
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = afterAccessStructureTuple.decryptingSymKey!!.key.encodeBase64()
                )
            )
        }
    }

    @Test
    fun `revoke blank, non-existing, incomplete or deleted user from blank, non-existing or deleted attribute fails`() {
        val userNonExisting = "userNonExisting"
        val userIncomplete = "userIncomplete"
        assert(coreABAC.addUser(userIncomplete).code == CODE_000_SUCCESS)
        val userOperational = "userOperational"
        addAndInitUser(coreABAC, userOperational)
        val userDeleted = "userDeleted"
        assert(coreABAC.addUser(userDeleted).code == CODE_000_SUCCESS)
        assert(coreABAC.deleteUser(userDeleted) == CODE_000_SUCCESS)

        val attributeNonExisting = "attributeNonExisting"
        val attributeOperational = "attributeOperational"
        assert(coreABAC.addAttribute(attributeOperational) == CODE_000_SUCCESS)
        val attributeDeleted = "attributeDeleted"
        assert(coreABAC.addAttribute(attributeDeleted) == CODE_000_SUCCESS)
        assert(coreABAC.deleteAttributes(attributeDeleted) == CODE_000_SUCCESS)

        /** revoke non-existing user from non-existing attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userNonExisting, attributeNonExisting) ==
                        CODE_066_ATTRIBUTE_NOT_FOUND
            )
        }

        /** revoke non-existing user from operational attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userNonExisting, attributeOperational) ==
                        CODE_070_ATTRIBUTETUPLE_NOT_FOUND
            )
        }

        /** revoke non-existing user from deleted attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userNonExisting, attributeDeleted) ==
                        CODE_067_ATTRIBUTE_WAS_DELETED
            )
        }

        /** revoke incomplete user from non-existing attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userIncomplete, attributeNonExisting) ==
                        CODE_066_ATTRIBUTE_NOT_FOUND
            )
        }

        /** revoke incomplete user from operational attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userIncomplete, attributeOperational) ==
                        CODE_070_ATTRIBUTETUPLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from deleted attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userIncomplete, attributeDeleted) ==
                        CODE_067_ATTRIBUTE_WAS_DELETED
            )
        }

        /** revoke operational user from non-existing attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userOperational, attributeNonExisting) ==
                        CODE_066_ATTRIBUTE_NOT_FOUND
            )
        }

        /** revoke operational user from deleted attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userOperational, attributeDeleted) ==
                        CODE_067_ATTRIBUTE_WAS_DELETED
            )
        }

        /** revoke deleted user from non-existing attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userDeleted, attributeNonExisting) ==
                        CODE_066_ATTRIBUTE_NOT_FOUND
            )
        }

        /** revoke deleted user from operational attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userDeleted, attributeOperational) ==
                        CODE_070_ATTRIBUTETUPLE_NOT_FOUND
            )
        }

        /** revoke deleted user from deleted attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userDeleted, attributeDeleted) ==
                        CODE_067_ATTRIBUTE_WAS_DELETED
            )
        }

        /** revoke blank user from operational attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser("  ", attributeOperational) ==
                        CODE_020_INVALID_PARAMETER
            )
        }

        /** revoke operational user from blank attribute */
        run {
            assert(
                coreABAC.revokeAttributesFromUser(userOperational, "  ") ==
                        CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `revoke user to assigned attribute twice fails`() {
        val alice = "alice"
        val tall = "tall"
        addAndInitUser(coreABAC, alice)
        assert(coreABAC.addAttribute(tall) == CODE_000_SUCCESS)
        assert(coreABAC.assignUserToAttributes(alice, tall) == CODE_000_SUCCESS)

        /** revoke user to assigned attribute twice */
        run {
            assert(coreABAC.revokeAttributesFromUser(alice, tall) == CODE_000_SUCCESS)
            assert(coreABAC.revokeAttributesFromUser(alice, tall) == CODE_070_ATTRIBUTETUPLE_NOT_FOUND)
        }
    }

    @Test
    fun `assign access structure to operational resource works`() {
        val testResource = "testResource"
        assert(coreABAC.addAttribute("Tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(
            coreABAC.addResource(
                resourceName = testResource,
                resourceContent = testResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** assign access structure to operational resource */
        run {
            assert(coreABAC.assignAccessStructure(
                resourceName = testResource,
                accessStructure = "Tall or From:bob",
                permission = PermissionType.READ
            ) == CODE_000_SUCCESS)

            val resourceAccessStructures = coreABAC.getAccessStructures(
                resourceName = testResource
            )
            assert(resourceAccessStructures.code == CODE_000_SUCCESS)
            assert(resourceAccessStructures.accessStructureTuples!!.size == 2)
            assert(resourceAccessStructures.accessStructureTuples!!.filter { it.permission == PermissionType.READWRITE }.size == 1)
            assert(resourceAccessStructures.accessStructureTuples!!.filter { it.permission == PermissionType.READ }.size == 1)
            val readWriteAS = resourceAccessStructures.accessStructureTuples!!.first { it.permission == PermissionType.READWRITE }
            assert(readWriteAS.accessStructure == "admin_1 or (Tall_1 and From_1:bob)")
            assert(readWriteAS.symKeyVersionNumber == 1)
            val readAS = resourceAccessStructures.accessStructureTuples!!.first { it.permission == PermissionType.READ }
            assert(readAS.accessStructure == "admin_1 or (Tall_1 or From_1:bob)")
            assert(readAS.symKeyVersionNumber == 1)

            assertEquals(
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = readWriteAS.encryptingSymKey!!.key.encodeBase64()
                ),
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = readAS.encryptingSymKey!!.key.encodeBase64()
                )
            )
            assertEquals(
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = readWriteAS.decryptingSymKey!!.key.encodeBase64()
                ),
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = readAS.decryptingSymKey!!.key.encodeBase64()
                )
            )
        }
    }

    @Test
    fun `assign blank access structure to non-existing, blank or deleted resource fails`() {
        val deletedResource = "deletedResource"
        assert(coreABAC.addAttribute("Tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(
            coreABAC.addResource(
                resourceName = deletedResource,
                resourceContent = deletedResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)
        assert(coreABAC.deleteResource(deletedResource) == CODE_000_SUCCESS)

        val operationalResource = "operationalResource"
        assert(
            coreABAC.addResource(
                resourceName = operationalResource,
                resourceContent = operationalResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** assign blank access structure to any resource */
        run {
            assert(
                coreABAC.assignAccessStructure(
                    resourceName = "non-existing",
                    accessStructure = "   ",
                    permission = PermissionType.READ
                ) == CODE_020_INVALID_PARAMETER)

            assert(
                coreABAC.assignAccessStructure(
                    resourceName = deletedResource,
                    accessStructure = "   ",
                    permission = PermissionType.READ
                ) == CODE_020_INVALID_PARAMETER)

            assert(
                coreABAC.assignAccessStructure(
                    resourceName = operationalResource,
                    accessStructure = "   ",
                    permission = PermissionType.READ
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** assign access structure to blank resource */
        run {
            assert(
                coreABAC.assignAccessStructure(
                    resourceName = "    ",
                    accessStructure = "Tall",
                    permission = PermissionType.READ
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** assign access structure to non-existing resource */
        run {
            assert(
                coreABAC.assignAccessStructure(
                    resourceName = "non-existing",
                    accessStructure = "Tall",
                    permission = PermissionType.READ
                ) == CODE_006_RESOURCE_NOT_FOUND)
        }

        /** assign access structure to deleted resource */
        run {
            assert(
                coreABAC.assignAccessStructure(
                    resourceName = deletedResource,
                    accessStructure = "Tall",
                    permission = PermissionType.READ
                ) == CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    fun `assign access structure to operational resource twice fails`() {
        val testResource = "testResource"
        assert(coreABAC.addAttribute("Tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(
            coreABAC.addResource(
                resourceName = testResource,
                resourceContent = testResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** assign access structure to operational resource twice */
        run {
            assert(
                coreABAC.assignAccessStructure(
                    resourceName = testResource,
                    accessStructure = "Tall or From:bob",
                    permission = PermissionType.READWRITE,
                ) == CODE_069_ACCESSSTRUCTURETUPLE_ALREADY_EXISTS)
        }
    }

    @Test
    fun `revoke access structure from assigned resource works`() {
        val testResource = "testResource"
        assert(coreABAC.addAttribute("Tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(
            coreABAC.addResource(
                resourceName = testResource,
                resourceContent = testResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** revoke access structure from assigned resource */
        run {
            assert(coreABAC.assignAccessStructure(
                resourceName = testResource,
                accessStructure = "Tall or From:bob",
                permission = PermissionType.READ
            ) == CODE_000_SUCCESS)

            val beforeResourceAccessStructures = coreABAC.getAccessStructures(
                resourceName = testResource
            )
            val beforeAS = beforeResourceAccessStructures.accessStructureTuples!!.first { it.permission == PermissionType.READ }
            assert(beforeAS.accessStructure == "admin_1 or (Tall_1 or From_1:bob)")
            assert(beforeAS.symKeyVersionNumber == 1)
            val beforeResource = coreABAC.getResources().resources!!.first { it.name == testResource }
            assert(beforeResource.symDecKeyVersionNumber == 1)
            assert(beforeResource.symEncKeyVersionNumber == 1)

            assert(coreABAC.revokeAccessStructure(
                resourceName = testResource,
                permission = PermissionType.READWRITE
            ) == CODE_000_SUCCESS)

            val afterResourceAccessStructures = coreABAC.getAccessStructures(
                resourceName = testResource
            )
            val afterAS = afterResourceAccessStructures.accessStructureTuples!!.first { it.permission == PermissionType.READ }
            assert(afterAS.accessStructure == "admin_1 or (Tall_1 or From_1:bob)")
            assert(afterAS.symKeyVersionNumber == 2)
            val afterResource = coreABAC.getResources().resources!!.first { it.name == testResource }
            assert(afterResource.symDecKeyVersionNumber == 1)
            assert(afterResource.symEncKeyVersionNumber == 2)

            assertNotEquals(
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = beforeAS.encryptingSymKey!!.key.encodeBase64()
                ),
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = afterAS.encryptingSymKey!!.key.encodeBase64()
                )
            )
            assertEquals(
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = beforeAS.decryptingSymKey!!.key.encodeBase64()
                ),
                coreABAC.cryptoABE.decryptABE(
                    keyID = coreABAC.user.name,
                    ciphertext = afterAS.decryptingSymKey!!.key.encodeBase64()
                )
            )
        }
    }

    @Test
    fun `revoke access structure from blank, non-existing or deleted resource fails`() {
        val deletedResource = "deletedResource"
        assert(coreABAC.addAttribute("Tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(
            coreABAC.addResource(
                resourceName = deletedResource,
                resourceContent = deletedResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)
        assert(coreABAC.deleteResource(deletedResource) == CODE_000_SUCCESS)

        /** revoke access structure from non-existing resource */
        run {
            assert(coreABAC.revokeAccessStructure(
                resourceName = "non-existing",
                permission = PermissionType.READWRITE
            ) == CODE_006_RESOURCE_NOT_FOUND)
        }

        /** revoke access structure from deleted resource */
        run {
            assert(coreABAC.revokeAccessStructure(
                resourceName = deletedResource,
                permission = PermissionType.READWRITE
            ) == CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    fun `revoke last access structure to assigned resource or twice fails`() {
        val operationalResource = "operationalResource"
        assert(coreABAC.addAttribute("Tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(
            coreABAC.addResource(
                resourceName = operationalResource,
                resourceContent = operationalResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** revoke last access structure to assigned resource */
        run {
            assert(coreABAC.revokeAccessStructure(
                resourceName = operationalResource,
                permission = PermissionType.READWRITE,
            ) == CODE_074_CANNOT_REVOKE_LAST_ACCESS_STRUCTURE_TUPLE)
        }

        /** revoke access structure to assigned resource twice */
        run {
            assert(coreABAC.assignAccessStructure(
                resourceName = operationalResource,
                accessStructure = "Tall or From:bob",
                permission = PermissionType.READ
            ) == CODE_000_SUCCESS)

            assert(coreABAC.revokeAccessStructure(
                resourceName = operationalResource,
                permission = PermissionType.READ,
            ) == CODE_000_SUCCESS)

            assert(coreABAC.revokeAccessStructure(
                resourceName = operationalResource,
                permission = PermissionType.READ,
            ) == CODE_071_ACCESSSTRUCTURETUPLE_NOT_FOUND)
        }
    }

    @Test
    open fun `revoke access structure and reassign lower permission works`() {
        val alice = "alice"
        val aliceCoreRBAC = addAndInitUser(core, alice)

        val testResource = "testResource"
        assert(coreABAC.addAttribute("Short") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("Tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("From") == CODE_000_SUCCESS)
        assert(
            coreABAC.addResource(
                resourceName = testResource,
                resourceContent = testResource.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** revoke assigned permission and reassign lower permission */
        run {
            assert(coreABAC.assignAccessStructure(
                resourceName = testResource,
                accessStructure = "Short",
                permission = PermissionType.READ
            ) == CODE_000_SUCCESS)

            assert(coreABAC.assignUserToAttributes(
                username = alice,
                attributes = hashMapOf("Tall" to null, "From" to "Student")
            ) == CODE_000_SUCCESS)
            assert(coreABAC.revokeAttributesFromUser(
                username = alice,
                attributes = hashSetOf("Tall", "From")
            ) == CODE_000_SUCCESS)
            assert(coreABAC.assignUserToAttributes(
                username = alice,
                attributes = hashMapOf("Short" to null)
            ) == CODE_000_SUCCESS)

            val downloadedResourceResult = aliceCoreRBAC.readResource(testResource)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == testResource)
        }
    }

    @Test
    open fun `admin or user read resource having satisfying attributes over resource works`() {
        val alice = "alice"
        val aliceCoreABAC = addAndInitUser(coreABAC, alice)

        val tall = "tall"
        assert(coreABAC.addAttribute(tall) == CODE_000_SUCCESS)
        val adult = "adult"
        assert(coreABAC.addAttribute(adult) == CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreABAC.addResource(
                resourceName = exam,
                resourceContent = examContent.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** admin read resource having satisfying attributes over resource works */
        run {
            val downloadedResourceResult = coreABAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == examContent)
        }

        /** user read resource having satisfying attributes over resource works */
        run {
            assert(coreABAC.assignUserToAttributes(alice, hashMapOf(
                tall to null, adult to null
            )) == CODE_000_SUCCESS)
            val downloadedResourceResult = aliceCoreABAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == examContent)
        }
    }

    @Test
    open fun `user read resource not having satisfying attributes or revoked fails`() {
        val alice = "alice"
        val aliceCoreABAC = addAndInitUser(coreABAC, alice)

        val tall = "tall"
        assert(coreABAC.addAttribute(tall) == CODE_000_SUCCESS)
        val adult = "adult"
        assert(coreABAC.addAttribute(adult) == CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreABAC.addResource(
                resourceName = exam,
                resourceContent = examContent.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** not assigned user read resource */
        run {
            assert(coreABAC.assignUserToAttributes(alice, tall) == CODE_000_SUCCESS)
            assert(aliceCoreABAC.readResource(exam).code == CODE_006_RESOURCE_NOT_FOUND)
        }

        /** revoked user read resource */
        run {
            assert(coreABAC.assignUserToAttributes(alice, adult) == CODE_000_SUCCESS)
            val downloadedResourceResult = aliceCoreABAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == examContent)

            assert(coreABAC.revokeAttributesFromUser(alice, adult) == CODE_000_SUCCESS)
            assert(aliceCoreABAC.readResource(exam).code == CODE_006_RESOURCE_NOT_FOUND)
        }
    }

    @Test
    open fun `admin or user write resource having satisfying attributes over resource works`() {
        val alice = "alice"
        val aliceCoreABAC = addAndInitUser(coreABAC, alice)

        val tall = "tall"
        assert(coreABAC.addAttribute(tall) == CODE_000_SUCCESS)
        val adult = "adult"
        assert(coreABAC.addAttribute(adult) == CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreABAC.addResource(
                resourceName = exam,
                resourceContent = examContent.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)
        val readResourceResult = coreABAC.readResource(exam)
        assert(String(readResourceResult.stream!!.readAllBytes()) == examContent)

        /** admin write resource having permission over resource */
        run {
            val updatedExamContent = "updated exam content by admin"
            val updateResourceCode = coreABAC.writeResource(exam, updatedExamContent.inputStream())
            assert(updateResourceCode == CODE_000_SUCCESS)
            val downloadedResourceResult = coreABAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == updatedExamContent)
        }

        /** user write resource having permission over resource */
        run {
            assert(coreABAC.assignUserToAttributes(alice, hashMapOf(
                tall to null, adult to null
            )) == CODE_000_SUCCESS)
            val updatedExamContent = "updated exam content by user"
            val updateResourceCode = aliceCoreABAC.writeResource(exam, updatedExamContent.inputStream())
            assert(updateResourceCode == CODE_000_SUCCESS)
            val downloadedResourceResult = aliceCoreABAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == updatedExamContent)
        }
    }

    @Test
    open fun `user write resource not having satisfying attributes or revoked fails`() {
        val alice = "alice"
        val aliceCoreABAC = addAndInitUser(coreABAC, alice)

        val tall = "tall"
        assert(coreABAC.addAttribute(tall) == CODE_000_SUCCESS)
        val adult = "adult"
        assert(coreABAC.addAttribute(adult) == CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreABAC.addResource(
                resourceName = exam,
                resourceContent = examContent.inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** not assigned user write resource */
        run {
            assert(coreABAC.assignUserToAttributes(alice, tall) == CODE_000_SUCCESS)
            assert(aliceCoreABAC.writeResource(exam, exam.inputStream()) == CODE_006_RESOURCE_NOT_FOUND)
        }

        /** revoked user write resource */
        run {
            assert(coreABAC.assignUserToAttributes(alice, adult) == CODE_000_SUCCESS)
            val downloadedResourceResult = aliceCoreABAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == examContent)

            assert(coreABAC.revokeAttributesFromUser(alice, adult) == CODE_000_SUCCESS)
            assert(aliceCoreABAC.writeResource(exam, exam.inputStream()) == CODE_006_RESOURCE_NOT_FOUND)
        }
    }



    @Test
    fun `get attribute of operational or deleted attribute works`() {
        assert(coreABAC.addAttribute("operational") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("deleted") == CODE_000_SUCCESS)
        assert(coreABAC.deleteAttributes("deleted") == CODE_000_SUCCESS)

        /** get attribute of operational attribute */
        run {
            assert(coreABAC.getAttributes().attributes!!.filter { it.name == "operational" }.size == 1)
        }

        /** get attribute of deleted attribute */
        run {
            assert(coreABAC.getAttributes().attributes!!.first { it.status == UnitElementStatus.DELETED }.name == "deleted")
        }
    }

    @Test
    fun `get attribute of non-existing fails`() {

        /** get attribute of non-existing attribute */
        run {
            assert(coreABAC.getAttributes().attributes!!.none { it.name == "not-existing" })
        }
    }

    @Test
    fun `get resource of operational or deleted resource works`() {
        assert(coreABAC.addAttribute("tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("adult") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("short") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("funny") == CODE_000_SUCCESS)

        assert(
            coreABAC.addResource(
                resourceName = "operational",
                resourceContent = "operational".inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        assert(
            coreABAC.addResource(
                resourceName = "deleted",
                resourceContent = "deleted".inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)
        assert(coreABAC.deleteResource("deleted") == CODE_000_SUCCESS)

        /** get resource of operational resource */
        run {
            assert(coreABAC.getResources().resources!!.first { it.status == UnitElementStatus.OPERATIONAL }.name == "operational")
        }

        /** get resource of deleted resource */
        run {
            assert(coreABAC.getResources().resources!!.first { it.status == UnitElementStatus.DELETED }.name == "deleted")
        }
    }

    @Test
    fun `get resource of non-existing or deleted resource fails`() {

        /** get resource of non-existing resource */
        run {
            assert(coreABAC.getResources().resources!!.none { it.name == "not-existing" })
        }
    }

    @Test
    fun `get existing assignment specifying any combination of username and attribute name works`() {
        addAndInitUser(coreABAC, "alice")
        assert(coreABAC.addAttribute("tall") == CODE_000_SUCCESS)
        assert(coreABAC.assignUserToAttributes("alice", "tall") == CODE_000_SUCCESS)

        /** get existing assignment specifying the username */
        run {
            assert(coreABAC.getAttributeAssignments(username = "alice").attributeTuples!!.filter { it.attributeName == "tall" }.size == 1)
        }

        /** get existing assignment specifying the attribute name */
        run {
            assert(coreABAC.getAttributeAssignments(attributeName = "tall").attributeTuples!!.filter { it.username == "alice" }.size == 1)
        }

        /** get existing assignment specifying both the username and the attribute name */
        run {
            assert(coreABAC.getAttributeAssignments(username = "alice", attributeName = "tall").attributeTuples!!.size == 1)
        }
    }

    @Test
    fun `get non-existing or deleted assignment fails`() {

        /** get non-existing assignment */
        run {
            assert(coreABAC.getAttributeAssignments(username = "alice").attributeTuples!!.none { it.attributeName == "tall" })
            assert(coreABAC.getAttributeAssignments(attributeName = "tall").attributeTuples!!.none { it.username == "alice" })
            assert(coreABAC.getAttributeAssignments(username = "alice", attributeName = "tall").attributeTuples!!.isEmpty())
        }

        /** get deleted assignment */
        run {
            addAndInitUser(coreABAC, "alice")
            assert(coreABAC.addAttribute("tall") == CODE_000_SUCCESS)
            assert(coreABAC.assignUserToAttributes("alice", "tall") == CODE_000_SUCCESS)
            assert(coreABAC.revokeAttributesFromUser("alice", "tall") == CODE_000_SUCCESS)

            assert(coreABAC.getAttributeAssignments(username = "alice").attributeTuples!!.none { it.attributeName == "tall" })
            assert(coreABAC.getAttributeAssignments(attributeName = "tall").attributeTuples!!.none { it.username == "alice" })
            assert(coreABAC.getAttributeAssignments(username = "alice", attributeName = "tall").attributeTuples!!.isEmpty())
        }
    }

    @Test
    fun `get existing access structures specifying the resource name works`() {
        assert(coreABAC.addAttribute("tall") == CODE_000_SUCCESS)
        assert(coreABAC.addAttribute("adult") == CODE_000_SUCCESS)
        assert(
            coreABAC.addResource(
                resourceName = "operational",
                resourceContent = "operational".inputStream(),
                enforcement = EnforcementType.COMBINED,
                permission = PermissionType.READ,
                accessStructure = "Tall and From"
            ) == CODE_000_SUCCESS)

        /** get existing access structures specifying the resource name */
        run {
            assert(
                coreABAC.getAccessStructures(resourceName = "operational").accessStructureTuples!!.filter {
                    it.resourceName == "operational"
                }.size == 1
            )
        }
    }

    @Test
    fun `get non-existing or deleted access structures fails`() {

        /** get non-existing access structure */
        run {
            assert(coreABAC.getAccessStructures(resourceName = "non-existing").accessStructureTuples!!.isEmpty())
        }

        /** get deleted access structure */
        run {
            assert(coreABAC.addAttribute("tall") == CODE_000_SUCCESS)
            assert(coreABAC.addAttribute("adult") == CODE_000_SUCCESS)
            assert(
                coreABAC.addResource(
                    resourceName = "operational",
                    resourceContent = "operational".inputStream(),
                    enforcement = EnforcementType.COMBINED,
                    permission = PermissionType.READ,
                    accessStructure = "Tall and From"
                ) == CODE_000_SUCCESS)

            assert(
                coreABAC.assignAccessStructure(
                    resourceName = "operational",
                    accessStructure = "tall or adult",
                    permission = PermissionType.READ,
                ) == CODE_000_SUCCESS)
            assert(
                coreABAC.revokeAccessStructure(
                    resourceName = "operational",
                    permission = PermissionType.READ,
                ) == CODE_000_SUCCESS)

            val lastAS = coreABAC.getAccessStructures(resourceName = "operational").accessStructureTuples!!.filter { it.resourceName == "operational" }
            assert(lastAS.size == 1)
            lastAS.first().apply {
                assert(symKeyVersionNumber == 2)
                assert(permission == PermissionType.READWRITE)
            }
        }
    }



    override fun addAndInitUser(core: Core, username: String): CoreABAC {
        return super.addAndInitUser(core, username) as CoreABAC
    }
}
