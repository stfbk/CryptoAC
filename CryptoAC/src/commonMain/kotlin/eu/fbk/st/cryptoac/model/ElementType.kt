package eu.fbk.st.cryptoac.model

/**
 * An RBAC Element has one among the following types:
 * - USER: the Element is a user;
 * - ROLE: the Element is a role;
 * - RESOURCE: the Element is a resource;
 * - ROLETUPLE: the Element represents an assignment between a user and a role;
 * - PERMISSIONTUPLE: the Element represents an assignment between a role and a resource;
 */
enum class RBACElementType {
    USER,
    ROLE,
    RESOURCE,
    ROLETUPLE,
    PERMISSIONTUPLE,
}

/** An RBAC UnitElement with a status */
enum class RBACUnitElementTypeWithStatus {
    USER,
    ROLE,
    RESOURCE,
}

/** An RBAC UnitElement with a version number */
enum class RBACUnitElementTypeWithVN {
    ROLE,
    RESOURCE
}

/** An RBAC UnitElement with keys */
enum class RBACUnitElementTypeWithKeys {
    USER,
    ROLE
}



///**
// * An ABAC Element has one among the following types:
// * - USER: the Element is a user;
// * - RESOURCE: the Element is a resource;
// * - ATTRIBUTE: the Element represents an attribute;
// * - ATTRIBUTETUPLE: the Element represents an assignment between a user and an attribute;
// * - ACCESSSTRUCTURETUPLE: the Element represents an assignment between a resource and an access structure.
// */
//enum class ABACElementType {
//    USER,
//    ATTRIBUTE,
//    ATTRIBUTETUPLE,
//    ACCESSSTRUCTURETUPLE,
//}

/** An ABAC UnitElement with a status */
enum class ABACUnitElementTypeWithStatus {
    USER,
    RESOURCE,
    ATTRIBUTE
}

/** An ABAC UnitElement with a version number */
enum class ABACUnitElementTypeWithVN {
    ATTRIBUTE,
    RESOURCE
}
