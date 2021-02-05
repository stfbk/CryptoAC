# Role-based Access Control (RBAC) Rego policy for OPA (Open Policy Agent).

# Each policy should have a package associated. You use the package to refer to
# a particular policy. For instance, whenever you want to parse this policy, you
# should send a POST HTTP API request to "/v1/data/app/rbac". The body of the
# request should contain the "input" (here acessed through the "input." variable).
# Note: requests to "v1/data/app/rbac" make OPA evaluate all rules (i.e., the rules
#       'allow', 'user_is_granted'). To evaluate a specific rule, add it in the path
#       (e.g., 'v1/data/app/rbac/user_is_admin' evauates only the 'user_is_admin' rule,
#       while 'v1/data/app/rbac/allow' evaluates all 'Allow" rules. In our case, we should
#       use the 'v1/data/app/rbac/allow' path).
package app.rbac

# You can either specify the data in the HTTP request or (better) refer to
# previously uploaded data. In our case, we upload the RBAC policy data in
# OPA at the path "/v1/data/rbac". To use that data in our policy, we have
# to import that document.
import data.rbac # as rbac (e.g., use "rbac.key" or rbac[key] to access data)


# By default, deny requests.
default allow = false

# Allow admins to do anything.
allow {
	user_is_admin
}

# A user is an administrator if
user_is_admin {

	# for some `i`
	some i

	# "admin" is the associated element of the `i`-th element in the UR mappings for the user given in the input.
	rbac.ur[input.user][i].associatedElement == "admin"
}


# Allow the action if
allow {

	# for some 'grant' which is granted to the user
	some grant
	user_is_granted[grant]

	# the grant allows the permissions given in the input
	input.associatedPermission == grant.associatedPermission
	input.associatedFile == grant.associatedFile
}


# A user has a grant for every
user_is_granted[grant] {

    # 'i' and i' so that
	some i, j

	# the user is associated to `role`.
	role := rbac.ur[input.user][i].associatedRole

	# Return the j-th `grant`
	grant := rbac.pa[role][j]
}