package eu.fbk.st.cryptoac.mm

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.createAttributeTuple
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import eu.fbk.st.cryptoac.model.ABACUnitElementTypeWithStatus
import eu.fbk.st.cryptoac.model.ABACUnitElementTypeWithVN
import org.junit.jupiter.api.*

internal abstract class MMServiceABACTest : MMServiceTest() {

    abstract override val mm: MMServiceABAC

    @Test
    open fun `set and get MPK works`() {
        /** set and get MPK */
        myRun {
            assert(mm.setMPK("testMPK") == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.getMPK() == "testMPK")
        }
    }

    @Test
    open fun `set MPK twice fails`() {
        myRun {
            assert(mm.setMPK("testMPK") == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.setMPK("testMPK2") == OutcomeCode.CODE_072_MPK_ALREADY_INITIALIZED)
        }
    }

    @Test
    open fun `get MPK without setting it works`() {
        assert(mm.getMPK() == null)
    }

    @Test
    open fun `add attribute once or with same name as previously deleted attribute with restore option works`() {

        /** add attribute once */
        myRun {
            addAttribute("tall")
        }

        /** add attribute with same name as previously deleted attribute with restore option */
        myRun {
            val adultAttribute = addAttribute("over18")
            val newAdultAttribute = Attribute(
                name = adultAttribute.name,
                versionNumber = 2
            )
            assert(mm.deleteAttribute(attributeName = adultAttribute.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.addAttribute(newAttribute = newAdultAttribute, restoreIfDeleted = true) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.getAttributes(attributeName = adultAttribute.name).first().versionNumber == 2)
        }
    }

    @Test
    open fun `add attribute twice or with same name as previously deleted attribute with no restore option fails`() {
        val adultAttribute = addAttribute("over18")

        /** add attribute twice */
        myRun {
            assert(mm.addAttribute(newAttribute = adultAttribute, restoreIfDeleted = false) == OutcomeCode.CODE_065_ATTRIBUTE_ALREADY_EXISTS)
        }

        /** add attribute with same name as previously deleted attribute with no restore option */
        myRun {
            assert(mm.deleteAttribute(attributeName = adultAttribute.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.addAttribute(newAttribute = adultAttribute, restoreIfDeleted = false) == OutcomeCode.CODE_067_ATTRIBUTE_WAS_DELETED)
        }
    }

    @Test
    open fun `add resource once works`() {
        /** add resource once */
        myRun {
            addResource("exam")
        }
    }

    @Test
    open fun `add resource twice or with same name as previously deleted resource fails`() {
        val exam = addResource("exam")

        /** add resource twice */
        myRun {
            assert(mm.addResource(exam) == OutcomeCode.CODE_003_RESOURCE_ALREADY_EXISTS)
        }

        /** add resource with same name as previously deleted resource */
        myRun {
            assert(mm.deleteResource(exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.addResource(exam) == OutcomeCode.CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    open fun `add no, one or multiple attribute tuples work`() {
        val aliceName = Parameters.aliceUser.name
        addAndInitUser(Parameters.aliceUser)
        val bobName = Parameters.bobUser.name
        addAndInitUser(Parameters.bobUser)
        val adultAttribute = addAttribute("over18")
        val adultAttributeName = adultAttribute.name
        val tallAttribute = addAttribute("tall")
        val tallAttributeName = tallAttribute.name

        /** add no attribute tuples */
        myRun {
            assert(mm.addAttributeTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one attribute tuple */
        myRun {
            addAttributeTuple(aliceName, adultAttributeName)
        }

        /** add multiple attribute tuples */
        myRun {
            val bobAdultAttributeTuple = createAttributeTuple(
                username = bobName,
                attributeName = adultAttributeName,
            )
            val aliceTallAttributeTuple = createAttributeTuple(
                username = aliceName,
                attributeName = tallAttributeName,
            )
            assert(
                mm.addAttributeTuples(hashSetOf(
                    bobAdultAttributeTuple,
                    aliceTallAttributeTuple
                )) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun `add attribute tuple twice fails`() {
        val aliceName = Parameters.aliceUser.name
        addAndInitUser(Parameters.aliceUser)
        val adultAttribute = addAttribute("over18")
        val adultAttributeName = adultAttribute.name

        /** add attribute tuple twice */
        myRun {
            val aliceAdultAttributeTuple = addAttributeTuple(aliceName, adultAttributeName)
            assert(
                mm.addAttributeTuples(hashSetOf(aliceAdultAttributeTuple)) ==
                        OutcomeCode.CODE_068_ATTRIBUTETUPLE_ALREADY_EXISTS
            )
        }
    }

    @Test
    open fun `add attribute tuple with non-existing or deleted user or attribute fails`() {
        val aliceName = Parameters.aliceUser.name
        addAndInitUser(Parameters.aliceUser)

        val bobName = Parameters.bobUser.name
        addAndInitUser(Parameters.bobUser)
        assert(mm.deleteUser(bobName) == OutcomeCode.CODE_000_SUCCESS)

        val userNonExisting = TestUtilities.createUser("non-existing-user")
        val userNonExistingName = userNonExisting.name

        val adultAttribute = addAttribute("over18")
        val adultAttributeName = adultAttribute.name

        val attributeNonExisting = TestUtilities.createAttribute("non-existing-attribute")
        val attributeNonExistingName = attributeNonExisting.name
        val tallAttribute = addAttribute("tall")
        val deletedAttributeName = tallAttribute.name
        assert(mm.deleteAttribute(deletedAttributeName) == OutcomeCode.CODE_000_SUCCESS)

        /** add attribute tuple with non-existing user */
        myRun {
            val nonExistingUserAdultAttributeTuple =
                createAttributeTuple(
                    username = userNonExistingName,
                    attributeName = adultAttributeName,
                )
            assert(
                mm.addAttributeTuples(hashSetOf(nonExistingUserAdultAttributeTuple)) ==
                        OutcomeCode.CODE_004_USER_NOT_FOUND
            )
        }

        /** add attribute tuple with deleted user */
        myRun {
            val deleteUserAdultAttributeTuple =
                createAttributeTuple(
                    username = bobName,
                    attributeName = adultAttributeName,
                )
            assert(
                mm.addAttributeTuples(hashSetOf(deleteUserAdultAttributeTuple)) ==
                        OutcomeCode.CODE_013_USER_WAS_DELETED
            )
        }

        /** add attribute tuple with non-existing attribute */
        myRun {
            val aliceNonExistingAttributeAttributeTuple =
                createAttributeTuple(
                    username = aliceName,
                    attributeName = attributeNonExistingName,
                )
            assert(
                mm.addAttributeTuples(hashSetOf(aliceNonExistingAttributeAttributeTuple)) ==
                        OutcomeCode.CODE_066_ATTRIBUTE_NOT_FOUND
            )
        }

        /** add attribute tuple with deleted attribute */
        myRun {
            val aliceDeletedAttributeAttributetuple =
                createAttributeTuple(
                    username = aliceName,
                    attributeName = deletedAttributeName,
                )
            assert(
                mm.addAttributeTuples(hashSetOf(aliceDeletedAttributeAttributetuple)) ==
                        OutcomeCode.CODE_067_ATTRIBUTE_WAS_DELETED
            )
        }
    }

    @Test
    open fun `add no, one or multiple access structure tuples work`() {
        val exam = addResource("exam")
        val text = addResource("text")
        val page = addResource("page")

        /** add no access structure tuples */
        myRun {
            assert(mm.addAccessStructureTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one access structure tuple */
        myRun {
            addAccessStructureTuple("From:Bob", exam)
        }

        /** add multiple access structure tuples */
        myRun {
            val textAccessStructureTuple = TestUtilities.createAccessStructureTuple("Adult and Tall", text)
            val examAccessStructureTuple = TestUtilities.createAccessStructureTuple("From:Admin", page)
            assert(
                mm.addAccessStructureTuples(hashSetOf(
                    examAccessStructureTuple,
                    textAccessStructureTuple
                )) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun `add access structure tuple twice fails`() {
        val exam = addResource("exam")

        /** add access structure tuple twice */
        myRun {
            val examAccessStructureTuple = addAccessStructureTuple("Adult and Tall", exam)
            assert(
                mm.addAccessStructureTuples(hashSetOf(examAccessStructureTuple)) ==
                        OutcomeCode.CODE_069_ACCESSSTRUCTURETUPLE_ALREADY_EXISTS
            )
        }
    }

    @Test
    open fun `add access structure tuple with non-existing or deleted resource fails`() {
        val nonExistingResource = TestUtilities.createResource("non-existing")

        val deletedResource = addResource("deletedResource")
        assert(mm.deleteResource(deletedResource.name) == OutcomeCode.CODE_000_SUCCESS)

        /** add access structure tuple with non-existing resource */
        myRun {
            val nonExistingResourceAccessStructureTuple =
                TestUtilities.createAccessStructureTuple("Adult and Tall", nonExistingResource)
            assert(
                mm.addAccessStructureTuples(hashSetOf(nonExistingResourceAccessStructureTuple)) ==
                        OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** add access structure tuple with deleted resource */
        myRun {
            val deletedResourceAccessStructureTuple =
                TestUtilities.createAccessStructureTuple("Adult and Tall", deletedResource)
            assert(
                mm.addAccessStructureTuples(hashSetOf(deletedResourceAccessStructureTuple)) ==
                        OutcomeCode.CODE_015_RESOURCE_WAS_DELETED
            )
        }
    }

    @Test
    open fun `get not-existing, operational and deleted attribute by name works`() {
        val tall = addAttribute("tall")
        val deleted = addAttribute("deleted")
        assert(mm.deleteAttribute(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing attribute by name */
        myRun {
            assert(mm.getAttributes(attributeName = "non-existing").isEmpty())
        }

        /** get operational attribute by name */
        myRun {
            val operationalAttributeByName = mm.getAttributes(attributeName = tall.name)
            assert(operationalAttributeByName.size == 1)
            assert(operationalAttributeByName.firstOrNull()!!.token == tall.token)
        }

        /** get deleted attribute by name */
        myRun {
            val deletedAttributeByName = mm.getAttributes(attributeName = deleted.name, status = UnitElementStatus.DELETED)
            assert(deletedAttributeByName.size == 1)
            assert(deletedAttributeByName.firstOrNull()!!.name == deleted.name)
        }
    }

    @Test
    open fun `get all attributes works`() {
        val tall = addAttribute("tall")
        val adult = addAttribute("adult")
        val short = addAttribute("short")

        /** get all attributes */
        myRun {
            val allAttributes = mm.getAttributes()
            /** there is also the admin */
            assert(allAttributes.size == 3)
            assert(allAttributes.filter { it.name == tall.name }.size == 1)
            assert(allAttributes.filter { it.name == adult.name }.size == 1)
            assert(allAttributes.filter { it.name == short.name }.size == 1)
        }
    }

    @Test
    open fun `get not-existing, operational and deleted resource by name works`() {
        val operational = addResource("operational")
        val deleted = addResource("deleted")
        assertUnLockAndLock(mm)
        assert(mm.deleteResource(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing resource by name */
        myRun {
            assert(mm.getResources(resourceName = "non-existing").isEmpty())
        }

        /** get operational resource by name */
        myRun {
            val operationalResourceByName = mm.getResources(resourceName = operational.name)
            assert(operationalResourceByName.size == 1)
            assert(operationalResourceByName.firstOrNull()!!.token == operational.token)
        }

        /** get deleted resource by name */
        myRun {
            val deletedResourceByName = mm.getResources(resourceName = deleted.name, status = UnitElementStatus.DELETED)
            assert(deletedResourceByName.size == 1)
            assert(deletedResourceByName.firstOrNull()!!.token == deleted.token)
        }
    }

    @Test
    open fun `get all resources works`() {
        val exam = addResource("exam")
        val document = addResource("document")
        val excel = addResource("excel")

        /** get all resources */
        myRun {
            val allResources = mm.getResources()
            assert(allResources.size == 3)
            assert(allResources.filter { it.name == exam.name }.size == 1)
            assert(allResources.filter { it.name == document.name }.size == 1)
            assert(allResources.filter { it.name == excel.name }.size == 1)
        }
    }

    @Test
    open fun `get attribute tuples by user or attribute name works`() {
        val aliceName = Parameters.aliceUser.name
        addAndInitUser(Parameters.aliceUser)
        val bobName = Parameters.bobUser.name
        addAndInitUser(Parameters.bobUser)
        val adultAttribute = addAttribute("over18")
        val adultAttributeName = adultAttribute.name

        addAttributeTuple(aliceName, adultAttributeName)
        addAttributeTuple(bobName, adultAttributeName)

        /** get attribute tuples by username */
        myRun {
            val adultAttributeTuplesByUserName = mm.getAttributeTuples(
                username = aliceName
            )
            assert(adultAttributeTuplesByUserName.size == 1)
            assert(adultAttributeTuplesByUserName.filter { it.attributeName == adultAttributeName }.size == 1)
        }

        /** get attribute tuples by attribute name */
        myRun {
            val adultAttributeTuplesByAttributeName = mm.getAttributeTuples(attributeName = adultAttributeName)
            assert(adultAttributeTuplesByAttributeName.size == 2)
            assert(adultAttributeTuplesByAttributeName.filter { it.username == aliceName }.size == 1)
            assert(adultAttributeTuplesByAttributeName.filter { it.username == bobName }.size == 1)
        }
    }

    @Test
    open fun `get access structure tuples of resource by name works`() {
        val exam = addResource("exam")
        val text = addResource("text")
        addAccessStructureTuple("From:Bob", exam)
        addAccessStructureTuple("Alice and Bob", text)

        /** get access structure tuples of resource by name */
        myRun {
            val examAccessStructureTuple = mm.getAccessStructureTuples(resourceName = exam.name)
            assert(examAccessStructureTuple.size == 1)
            assert(examAccessStructureTuple.first().accessStructure == "From:Bob")

            val textAccessStructureTuple = mm.getAccessStructureTuples(resourceName = text.name)
            assert(textAccessStructureTuple.size == 1)
            assert(textAccessStructureTuple.first().accessStructure == "Alice and Bob")
        }
    }

    @Test
    open fun `get public key of non-existing, incomplete, operational and deleted users by name or token works`() {
        val nonExistingUser = Parameters.aliceUser
        val incompleteUser = Parameters.bobUser
        val operationalUser = Parameters.carlUser
        val deleteUser = Parameters.deniseUser
        assert(mm.addUser(incompleteUser).code == OutcomeCode.CODE_000_SUCCESS)
        addAndInitUser(operationalUser)
        addAndInitUser(deleteUser)
        assert(mm.deleteUser(deleteUser.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get public key of non-existing users by name or token */
        myRun {
            assert(
                mm.getUserPublicKey(
                    name = nonExistingUser.name, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getUserPublicKey(
                    token = nonExistingUser.token, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getUserPublicKey(
                    name = nonExistingUser.name, asymKeyType = AsymKeysType.SIG
                ) == null
            )
            assert(
                mm.getUserPublicKey(
                    token = nonExistingUser.token, asymKeyType = AsymKeysType.SIG
                ) == null
            )
        }

        /** get public key of incomplete users by name or token */
        myRun {
            assert(
                mm.getUserPublicKey(
                    name = incompleteUser.name, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getUserPublicKey(
                    token = incompleteUser.token, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getUserPublicKey(
                    name = incompleteUser.name, asymKeyType = AsymKeysType.SIG
                ) == null
            )
            assert(
                mm.getUserPublicKey(
                    token = incompleteUser.token, asymKeyType = AsymKeysType.SIG
                ) == null
            )
        }

        /** get public key of operational users by name or token */
        myRun {
            val asymEncKeysBytesByName = mm.getUserPublicKey(
                name = operationalUser.name, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(operationalUser.asymEncKeys!!.public.decodeBase64()))

            val asymEncKeysBytesByToken = mm.getUserPublicKey(
                token = operationalUser.token, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByToken != null)
            assert(asymEncKeysBytesByToken.contentEquals(operationalUser.asymEncKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByName = mm.getUserPublicKey(
                name = operationalUser.name, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(operationalUser.asymSigKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByToken = mm.getUserPublicKey(
                token = operationalUser.token, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByToken != null)
            assert(asymSigKeysBytesByToken.contentEquals(operationalUser.asymSigKeys!!.public.decodeBase64()))
        }

        /** get public key of deleted users by name or token */
        myRun {
            mm.getUserPublicKey(
                name = deleteUser.name, asymKeyType = AsymKeysType.ENC
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deleteUser.asymEncKeys!!.public.decodeBase64()))
            }
            mm.getUserPublicKey(
                token = deleteUser.token, asymKeyType = AsymKeysType.ENC
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deleteUser.asymEncKeys!!.public.decodeBase64()))
            }
            mm.getUserPublicKey(
                name = deleteUser.name, asymKeyType = AsymKeysType.SIG
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deleteUser.asymSigKeys!!.public.decodeBase64()))
            }
            mm.getUserPublicKey(
                token = deleteUser.token, asymKeyType = AsymKeysType.SIG
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deleteUser.asymSigKeys!!.public.decodeBase64()))
            }
        }
    }

    @Test
    open fun `get version number of non-existing, operational and deleted attributes and resources by name or token works`() {
        val attributeNonExisting = Attribute("attributeNonExisting")
        val attributeOperational = addAttribute("attributeOperational", 2)
        val attributeDeleted = addAttribute("attributeDeleted")
        assert(mm.deleteAttribute(attributeDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        val resourceNonExisting = Resource(
            name = "resourceNonExisting",
            enforcement = EnforcementType.COMBINED
        )
        val resourceOperational = addResource("resourceOperational", 3)
        val resourceDeleted = addResource("resourceDeleted")
        assert(mm.deleteResource(resourceDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get version number of non-existing attributes by name or token */
        myRun {
            assert(
                mm.getVersionNumber(
                    name = attributeNonExisting.name, elementType = ABACUnitElementTypeWithVN.ATTRIBUTE,
                ) == null
            )
            assert(
                mm.getVersionNumber(
                    token = attributeNonExisting.token, elementType = ABACUnitElementTypeWithVN.ATTRIBUTE,
                ) == null
            )
        }

        /** get version number of operational attributes by name or token */
        myRun {
            val versionNumbersByName = mm.getVersionNumber(
                name = attributeOperational.name, elementType = ABACUnitElementTypeWithVN.ATTRIBUTE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == attributeOperational.versionNumber)

            val versionNumbersByToken = mm.getVersionNumber(
                token = attributeOperational.token, elementType = ABACUnitElementTypeWithVN.ATTRIBUTE
            )
            assert(versionNumbersByToken != null)
            assert(versionNumbersByToken == attributeOperational.versionNumber)
        }

        /** get version number of deleted attributes by name or token */
        myRun {
            assert(
                mm.getVersionNumber(
                    name = attributeDeleted.name, elementType = ABACUnitElementTypeWithVN.ATTRIBUTE,
                ) == null
            )
            assert(
                mm.getVersionNumber(
                    token = attributeDeleted.token, elementType = ABACUnitElementTypeWithVN.ATTRIBUTE,
                ) == null
            )
        }

        /** get version number of non-existing resources by name or token */
        myRun {
            assert(
                mm.getVersionNumber(
                    name = resourceNonExisting.name, elementType = ABACUnitElementTypeWithVN.RESOURCE,
                ) == null
            )
            assert(
                mm.getVersionNumber(
                    token = resourceNonExisting.token, elementType = ABACUnitElementTypeWithVN.RESOURCE,
                ) == null
            )
        }

        /** get version number of operational resources by name or token */
        myRun {
            val versionNumbersByName = mm.getVersionNumber(
                name = resourceOperational.name, elementType = ABACUnitElementTypeWithVN.RESOURCE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == resourceOperational.symEncKeyVersionNumber)

            val versionNumbersByToken = mm.getVersionNumber(
                token = resourceOperational.token, elementType = ABACUnitElementTypeWithVN.RESOURCE
            )
            assert(versionNumbersByToken != null)
            assert(versionNumbersByToken == resourceOperational.symEncKeyVersionNumber)
        }

        /** get version number of deleted resources by name or token */
        myRun {
            assert(
                mm.getVersionNumber(
                    name = resourceDeleted.name, elementType = ABACUnitElementTypeWithVN.RESOURCE,
                ) == null
            )
            assert(
                mm.getVersionNumber(
                    token = resourceDeleted.token, elementType = ABACUnitElementTypeWithVN.RESOURCE,
                ) == null
            )
        }
    }

    @Test
    open fun `get token of non-existing, operational and deleted attributes and resources by name works`() {
        val attributeNonExisting = Attribute("attributeNonExisting")
        val attributeOperational = addAttribute("attributeOperational", 2)
        val attributeDeleted = addAttribute("attributeDeleted")
        assert(mm.deleteAttribute(attributeDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        val resourceNonExisting = Resource(
            name = "resourceNonExisting",
            enforcement = EnforcementType.COMBINED
        )
        val resourceOperational = addResource("resourceOperational", 3)
        val resourceDeleted = addResource("resourceDeleted")
        assert(mm.deleteResource(resourceDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get token of non-existing attributes by name */
        myRun {
            assert(
                mm.getToken(
                    name = attributeNonExisting.name, type = ABACUnitElementTypeWithStatus.ATTRIBUTE,
                ) == null
            )
        }

        /** get token of operational attributes by name */
        myRun {
            val operationalAttributeToken = mm.getToken(
                name = attributeOperational.name, type = ABACUnitElementTypeWithStatus.ATTRIBUTE
            )
            assert(operationalAttributeToken != null)
            assert(operationalAttributeToken == attributeOperational.token)
        }

        /** get token of deleted attributes by name */
        myRun {
            val deletedAttributeToken = mm.getToken(
                name = attributeDeleted.name, type = ABACUnitElementTypeWithStatus.ATTRIBUTE,
            )
            assert(deletedAttributeToken != null)
            assert(deletedAttributeToken == attributeDeleted.token)
        }

        /** get token of non-existing resources by name */
        myRun {
            assert(
                mm.getToken(
                    name = resourceNonExisting.name, type = ABACUnitElementTypeWithStatus.RESOURCE,
                ) == null
            )
        }

        /** get token of operational resources by name */
        myRun {
            val operationalResourceToken = mm.getToken(
                name = resourceOperational.name, type = ABACUnitElementTypeWithStatus.RESOURCE
            )
            assert(operationalResourceToken != null)
            assert(operationalResourceToken == resourceOperational.token)
        }

        /** get token of deleted resources by name */
        myRun {
            val deletedResourceToken = mm.getToken(
                name = resourceDeleted.name, type = ABACUnitElementTypeWithStatus.RESOURCE
            )
            assert(deletedResourceToken != null)
            assert(deletedResourceToken == resourceDeleted.token)
        }
    }

    @Test
    open fun `get element status with existing, deleted and non-existing elements by name or token works`() {

        /** get status of admin user by name or token */
        myRun {
            val statusByName = mm.getStatus(name = ADMIN, type = ABACUnitElementTypeWithStatus.USER)
            assert(statusByName == UnitElementStatus.OPERATIONAL)
            val statusByToken = mm.getStatus(token = ADMIN, type = ABACUnitElementTypeWithStatus.USER)
            assert(statusByToken == UnitElementStatus.OPERATIONAL)
        }

        /** get status of non-existing user by name or token */
        myRun {
            val statusByName = mm.getStatus(name = "not-existing", type = ABACUnitElementTypeWithStatus.USER)
            assert(statusByName == null)
            val statusByToken = mm.getStatus(token = "not-existing", type = ABACUnitElementTypeWithStatus.USER)
            assert(statusByToken == null)
        }

        /** get status of existing but incomplete user by name (not by token, as incomplete users still lack a token) */
        myRun {
            assert(mm.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
            val aliceName = Parameters.aliceUser.name
            val statusByName = mm.getStatus(name = aliceName, type = ABACUnitElementTypeWithStatus.USER)
            assert(statusByName == UnitElementStatus.INCOMPLETE)
        }

        /** get status of operational user by name or token */
        myRun {
            addAndInitUser(Parameters.bobUser)
            val bobName = Parameters.bobUser.name
            val bobToken = Parameters.bobUser.token
            val statusByName = mm.getStatus(name = bobName, type = ABACUnitElementTypeWithStatus.USER)
            assert(statusByName == UnitElementStatus.OPERATIONAL)
            val statusByToken = mm.getStatus(token = bobToken, type = ABACUnitElementTypeWithStatus.USER)
            assert(statusByToken == UnitElementStatus.OPERATIONAL)
        }

        /** get status of deleted user by name or token */
        myRun {
            addAndInitUser(Parameters.carlUser)
            assert(mm.deleteUser(Parameters.carlUser.name) == OutcomeCode.CODE_000_SUCCESS)
            val carlName = Parameters.carlUser.name
            val carlToken = Parameters.carlUser.token
            val statusByName = mm.getStatus(name = carlName, type = ABACUnitElementTypeWithStatus.USER)
            assert(statusByName == UnitElementStatus.DELETED)
            val statusByToken = mm.getStatus(token = carlToken, type = ABACUnitElementTypeWithStatus.USER)
            assert(statusByToken == UnitElementStatus.DELETED)
        }

        /** get status of non-existing attribute by name or token */
        myRun {
            val statusByName = mm.getStatus(name = "not-existing", type = ABACUnitElementTypeWithStatus.ATTRIBUTE)
            assert(statusByName == null)
            val statusByToken = mm.getStatus(token = "not-existing", type = ABACUnitElementTypeWithStatus.ATTRIBUTE)
            assert(statusByToken == null)
        }

        /** get status of operational attribute by name or token */
        myRun {
            val attributeOperational = addAttribute("attributeOperational")
            val attributeName = attributeOperational.name
            val attributeToken = attributeOperational.token
            val statusByName = mm.getStatus(name = attributeName, type = ABACUnitElementTypeWithStatus.ATTRIBUTE)
            assert(statusByName == UnitElementStatus.OPERATIONAL)
            val statusByToken = mm.getStatus(token = attributeToken, type = ABACUnitElementTypeWithStatus.ATTRIBUTE)
            assert(statusByToken == UnitElementStatus.OPERATIONAL)
        }

        /** get status of deleted attribute by name or token */
        myRun {
            val attributeDeleted = addAttribute("attributeDeleted")
            assert(mm.deleteAttribute(attributeDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            val attributeName = attributeDeleted.name
            val attributeToken = attributeDeleted.token
            val statusByName = mm.getStatus(name = attributeName, type = ABACUnitElementTypeWithStatus.ATTRIBUTE)
            assert(statusByName == UnitElementStatus.DELETED)
            val statusByToken = mm.getStatus(token = attributeToken, type = ABACUnitElementTypeWithStatus.ATTRIBUTE)
            assert(statusByToken == UnitElementStatus.DELETED)
        }

        /** get status of non-existing resource by name or token */
        myRun {
            val statusByName = mm.getStatus(name = "not-existing", type = ABACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByName == null)
            val statusByToken = mm.getStatus(token = "not-existing", type = ABACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByToken == null)
        }

        /** get status of operational resource by name or token */
        myRun {
            val resourceOperational = addResource("resourceOperational")
            val resourceName = resourceOperational.name
            val resourceToken = resourceOperational.token
            val statusByName = mm.getStatus(name = resourceName, type = ABACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByName == UnitElementStatus.OPERATIONAL)
            val statusByToken = mm.getStatus(token = resourceToken, type = ABACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByToken == UnitElementStatus.OPERATIONAL)
        }

        /** get status of deleted resource by name or token */
        myRun {
            val resourceDeleted = addResource("resourceDeleted")
            assert(mm.deleteResource(resourceDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            val resourceName = resourceDeleted.name
            val resourceToken = resourceDeleted.token
            val statusByName = mm.getStatus(name = resourceName, type = ABACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByName == UnitElementStatus.DELETED)
            val statusByToken = mm.getStatus(token = resourceToken, type = ABACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByToken == UnitElementStatus.DELETED)
        }
    }

    @Test
    open fun `delete operational attributes by name works`() {
        val operational = addAttribute("operational")

        /** delete operational attributes */
        myRun {
            assert(mm.deleteAttribute(operational.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteAttributes = mm.getAttributes(attributeName = operational.name, status = UnitElementStatus.DELETED)
            assert(deleteAttributes.size == 1)
            assert(deleteAttributes.firstOrNull()!!.name == operational.name)
        }
    }

    @Test
    open fun `delete non-existing and deleted attributes by name fails`() {
        val nonExisting = Attribute("nonExisting")
        val deleted = addAttribute("operational")
        assert(mm.deleteAttribute(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing attributes */
        myRun {
            assert(mm.deleteAttribute(nonExisting.name) == OutcomeCode.CODE_066_ATTRIBUTE_NOT_FOUND)
        }

        /** delete deleted attributes */
        myRun {
            assert(mm.deleteAttribute(deleted.name) == OutcomeCode.CODE_067_ATTRIBUTE_WAS_DELETED)
        }
    }

    @Test
    open fun `delete operational resources by name works`() {
        val operational = addResource("operational")

        /** delete operational resources */
        myRun {
            assert(mm.deleteResource(operational.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteResources = mm.getResources(resourceName = operational.name, status = UnitElementStatus.DELETED)
            assert(deleteResources.size == 1)
            assert(deleteResources.firstOrNull()!!.name == operational.name)
        }
    }

    @Test
    open fun `delete non-existing and deleted resources by name fails`() {
        val nonExisting = Resource(
            name = "nonExisting",
            enforcement = EnforcementType.COMBINED
        )
        val deleted = addResource("operational")
        assert(mm.deleteResource(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing resources */
        myRun {
            assert(mm.deleteResource(nonExisting.name) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** delete deleted resources */
        myRun {
            assert(mm.deleteResource(deleted.name) == OutcomeCode.CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    open fun `delete existing attribute tuples by user or attribute name works`() {
        val aliceName = Parameters.aliceUser.name
        addAndInitUser(Parameters.aliceUser)
        val bobName = Parameters.bobUser.name
        addAndInitUser(Parameters.bobUser)
        val adultAttribute = addAttribute("over18")
        val adultAttributeName = adultAttribute.name

        addAttributeTuple(aliceName, adultAttributeName)
        addAttributeTuple(bobName, adultAttributeName)

        /** delete existing attribute tuples by username */
        myRun {
            assert(mm.getAttributeTuples(attributeName = adultAttributeName).size == 2)
            assert(mm.deleteAttributeTuples(username = aliceName) == OutcomeCode.CODE_000_SUCCESS)
        }
        assert(mm.getAttributeTuples(attributeName = adultAttributeName).size == 1)

        /** delete existing attribute tuples by attribute name */
        myRun {
            assert(mm.deleteAttributeTuples(attributeName = adultAttributeName) == OutcomeCode.CODE_000_SUCCESS)
        }
        assert(mm.getAttributeTuples(attributeName = adultAttributeName).size == 0)
    }

    @Test
    open fun `delete non-existing attribute tuples by user or attribute name fails`() {

        /** delete non-existing attribute tuples by user or attribute name */
        myRun {
            assert(mm.deleteAttributeTuples(username = "non-existing") == OutcomeCode.CODE_004_USER_NOT_FOUND)
            assert(mm.deleteAttributeTuples(attributeName = "non-existing") == OutcomeCode.CODE_066_ATTRIBUTE_NOT_FOUND)
        }
    }

    @Test
    open fun `delete existing access structure tuples by resource name and permission works`() {
        val exam = addResource("exam")
        addAccessStructureTuple("From:Alice", exam, PermissionType.READ)
        addAccessStructureTuple("From:Bob", exam, PermissionType.READWRITE)

        /** delete existing access tuples by resource name and permission */
        myRun {
            assert(mm.getAccessStructureTuples(resourceName = exam.name).size == 2)
            assert(mm.deleteAccessStructureTuples(resourceName = exam.name, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.getAccessStructureTuples(resourceName = exam.name).size == 1)
            assert(mm.deleteAccessStructureTuples(resourceName = exam.name, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.getAccessStructureTuples(resourceName = exam.name).size == 0)
        }
    }

    @Test
    open fun `delete non-existing access structure tuples by resource name fails`() {

        /** delete non-existing access structure tuples */
        myRun {
            assert(mm.deleteAccessStructureTuples(resourceName = "non-existing") == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }
    }

    @Test
    open fun `update symmetric encryption key version number and token for operational resource works`() {
        val exam = addResource("exam", 1)
        val examToken = exam.token

        /** update symmetric encryption key version number and token for operational resource */
        myRun {
            assert(
                mm.getVersionNumber(name = exam.name, elementType = ABACUnitElementTypeWithVN.RESOURCE) == 1
            )
            assert(
                mm.getToken(name = exam.name, type = ABACUnitElementTypeWithStatus.RESOURCE) == examToken
            )

            val newExamToken = UnitElement.generateRandomToken()
            assert(mm.updateResourceTokenAndVersionNumber(
                resourceName = exam.name,
                oldResourceToken = examToken,
                newResourceToken = newExamToken,
                newSymEncKeyVersionNumber = 2
            ) == OutcomeCode.CODE_000_SUCCESS)

            assert(
                mm.getVersionNumber(name = exam.name, elementType = ABACUnitElementTypeWithVN.RESOURCE) == 2
            )
            assert(
                mm.getToken(name = exam.name, type = ABACUnitElementTypeWithStatus.RESOURCE) == newExamToken
            )
        }
    }

    @Test
    open fun `update symmetric encryption key version number and token for non-existing or deleted resource fails`() {
        val exam = addResource("exam", 1)
        val examToken = exam.token
        assert(mm.deleteResource(exam.name) == OutcomeCode.CODE_000_SUCCESS)

        /** update symmetric encryption key version number and token for non-existing resource */
        myRun {
            assert(mm.updateResourceTokenAndVersionNumber(
                resourceName = "non-existing",
                oldResourceToken = "non-existing-token",
                newResourceToken = "newExamToken",
                newSymEncKeyVersionNumber = 2
            ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** update symmetric encryption key version number and token for deleted resource */
        myRun {
            assert(mm.updateResourceTokenAndVersionNumber(
                resourceName = exam.name,
                oldResourceToken = examToken,
                newResourceToken = "newExamToken",
                newSymEncKeyVersionNumber = 2
            ) == OutcomeCode.CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    open fun `update existing attribute token and version number works`() {
        val tall = addAttribute("tall")

        /** update existing attribute version number */
        myRun {
            val getBefore = mm.getAttributes(attributeName = tall.name)
            assert(getBefore.filter { it.name == tall.name }.size == 1)
            assert(getBefore.first { it.name == tall.name }.token == tall.token)
            assert(getBefore.first { it.name == tall.name }.versionNumber == 1)
            val newToken = UnitElement.generateRandomToken()

            assert(mm.updateAttributeTokenAndVersionNumber(
                attributeName = tall.name,
                oldAttributeToken = tall.token,
                newAttributeToken = newToken,
                newVersionNumber = 2
            ) == OutcomeCode.CODE_000_SUCCESS)

            val getAfter = mm.getAttributes(attributeName = tall.name)
            assert(getAfter.filter { it.name == tall.name }.size == 1)
            assert(getAfter.first { it.name == tall.name }.token == newToken)
            assert(getAfter.first { it.name == tall.name }.versionNumber == 2)
        }
    }

    @Test
    open fun `update non-existing or deleted attribute version number fails`() {
        val tall = addAttribute("tall")
        assert(mm.deleteAttribute(tall.name) == OutcomeCode.CODE_000_SUCCESS)

        /** update non-existing attribute version number */
        myRun {
            assert(mm.updateAttributeTokenAndVersionNumber(
                attributeName = "non-existing",
                oldAttributeToken = "non-existing",
                newAttributeToken = "non-existing",
                newVersionNumber = 2
            ) == OutcomeCode.CODE_066_ATTRIBUTE_NOT_FOUND)

        }
        /** update deleted attribute version number */
        myRun {
            assert(mm.updateAttributeTokenAndVersionNumber(
                attributeName = tall.name,
                oldAttributeToken = tall.token,
                newAttributeToken = tall.token,
                newVersionNumber = 2
            ) == OutcomeCode.CODE_067_ATTRIBUTE_WAS_DELETED)
        }
    }

    @Test
    open fun `update existing user ABE key works`() {
        // TODO
    }

    @Test
    open fun `update not-existing or incomplete or deleted user ABE key fails`() {
        // TODO
    }

    @Test
    open fun `update existing access structure tuple works`() {
        val exam = addResource("exam")
        val examAccessStructureTuple = addAccessStructureTuple("From:Bob", exam)

        /** update existing access structure tuple */
        myRun {
            val getBefore = mm.getAccessStructureTuples(resourceName = exam.name)
            assert(getBefore.filter { it.resourceName == exam.name }.size == 1)
            assert(getBefore.firstOrNull { it.resourceName == exam.name }!!.accessStructure == "From:Bob")

            val newResourceToken = UnitElement.generateRandomToken()
            val newEncryptedSymKey = EncryptedSymKey(
                key = "newEncryptedSymKey".toByteArray()
            )
            val newAccessStructureTuple = AccessStructureTuple(
                resourceName = exam.name,
                resourceToken = newResourceToken,
                accessStructure = "Prize < 10",
                permission = PermissionType.READ,
                symKeyVersionNumber = exam.symEncKeyVersionNumber + 1,
                encryptingSymKey = newEncryptedSymKey,
                decryptingSymKey = examAccessStructureTuple.decryptingSymKey
            )
            val signature = Parameters.cryptoPKEObject.createSignature(
                bytes = newAccessStructureTuple.getBytesForSignature(),
                signingKey = Parameters.adminAsymSigKeys.private
            )
            newAccessStructureTuple.updateSignature(
                newSignature = signature,
                newSigner = ADMIN
            )
            /**
             * This is needed to update the token in the
             * resource table (the token is a foreign key
             * in the access structure tuple table)
             */
            assert(mm.updateResourceTokenAndVersionNumber(
                resourceName = exam.name,
                oldResourceToken = exam.token,
                newResourceToken = newResourceToken,
                newSymEncKeyVersionNumber = (exam.symEncKeyVersionNumber + 1)
            ) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.updateAccessStructureTuple(newAccessStructureTuple) == OutcomeCode.CODE_000_SUCCESS)

            val getAfter = mm.getAccessStructureTuples(resourceName = exam.name)
            val afterTuple = getAfter.first { it.resourceName == exam.name }
            assert(getAfter.filter { it.resourceName == exam.name }.size == 1)
            assert(afterTuple.resourceToken == newResourceToken)
            assert(afterTuple.accessStructure == "Prize < 10")
            assert(afterTuple.encryptingSymKey!!.key.contentEquals(newEncryptedSymKey.key))
            assert(afterTuple.symKeyVersionNumber == exam.symEncKeyVersionNumber + 1)
        }
    }

    @Test
    open fun `update non-existing access structure tuple fails`() {
        /** update non-existing access structure tuple */
        myRun {
            val nonExistingAccessStructureTuple = AccessStructureTuple(
                resourceName = "non-existing-resource",
                resourceToken = "non-existing-token",
                accessStructure = "Prize < 10",
                permission = PermissionType.READWRITE,
                symKeyVersionNumber = 1,
                encryptingSymKey = EncryptedSymKey(
                    key = "non-existing-encryptingSymKey".toByteArray()
                ),
                decryptingSymKey = EncryptedSymKey(
                    key = "non-existing-decryptingSymKey".toByteArray()
                )
            )
            val signature = Parameters.cryptoPKEObject.createSignature(
                bytes = nonExistingAccessStructureTuple.getBytesForSignature(),
                signingKey = Parameters.adminAsymSigKeys.private
            )
            nonExistingAccessStructureTuple.updateSignature(
                newSignature = signature,
                newSigner = ADMIN
            )
            assert(mm.updateAccessStructureTuple(nonExistingAccessStructureTuple) == OutcomeCode.CODE_071_ACCESSSTRUCTURETUPLE_NOT_FOUND)
        }
    }

    // TODO test:
    //  - updateUserABEKey
    //  - getUserABEKey
    // TODO test paginazione (limit e offset)



    private fun addAttribute(
        attributeName: String,
        attributeVersionNumber: Int = 1,
        restoreIfDeleted: Boolean = false
    ): Attribute {
        val newAttribute = TestUtilities.createAttribute(attributeName, attributeVersionNumber)
        assert(mm.addAttribute(newAttribute, restoreIfDeleted) == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        return newAttribute
    }

    private fun addResource(
        resourceName: String,
        symEncKeyVersionNumber: Int = 1
    ): Resource {
        val newResource = TestUtilities.createResource(resourceName, symEncKeyVersionNumber, enforcement = EnforcementType.COMBINED)
        assert(mm.addResource(newResource) == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        return newResource
    }

    private fun addAttributeTuple(
        username: String,
        attributeName: String,
        attributeValue: String? = null,
    ): AttributeTuple {
        val attributeTuple = createAttributeTuple(
            username = username,
            attributeName = attributeName,
            attributeValue = attributeValue
        )
        assert(mm.addAttributeTuples(hashSetOf(attributeTuple)) == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        return attributeTuple
    }

    private fun addAccessStructureTuple(
        accessStructure: String,
        resource: Resource,
        permission: PermissionType = PermissionType.READ
    ): AccessStructureTuple {
        val accessStructureTuple = TestUtilities.createAccessStructureTuple(
            accessStructure = accessStructure,
            resource = resource,
            permission = permission
        )
        assert(mm.addAccessStructureTuples(hashSetOf(accessStructureTuple)) == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        return accessStructureTuple
    }
}
