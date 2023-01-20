# Role-based Access Control (RBAC) Rego policy for OPA (Open Policy Agent).

# Each policy should have a package associated. You use the package to refer to
# a particular policy. For instance, whenever you want to parse this policy, you
# should send a POST HTTP API request to "/v1/data/rbac". To evaluate the "allow"
# rule only, send the request to "v1/data/rbac/allow". The body of the request
# should be a json document contain the "input" (here accessed through the "input."
# variable) An example of input document is "{'input':{'username':'user1',
# 'resource':'resource1', 'permission':'READ'}}".
package rbac

# You can either specify the data in the HTTP request or (better) refer to
# previously uploaded data. In our case, we upload the RBAC policy data in
# OPA at the path "/v1/data/rbac". To use that data in our policy, we have
# to import that document.
import data.rbac as policy # (e.g., use "policy.key" or policy[key] to access data)

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