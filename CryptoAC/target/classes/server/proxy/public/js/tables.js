"use strict";

// this JS file collects variables and methods related to the five tables (users, roles, files, assignments and permissions)

// default offset and limit for tables
const defaultOffset = 0;
const defaultLimit = 10;

let currentOffsetUsersTable = defaultOffset;
let currentLimitUsersTable  = defaultLimit;

let currentOffsetRolesTable = defaultOffset;
let currentLimitRolesTable  = defaultLimit;

let currentOffsetFilesTable = defaultOffset;
let currentLimitFilesTable  = defaultLimit;

let currentOffsetAssignmentsTable = defaultOffset;
let currentLimitAssignmentsTable  = defaultLimit;

let currentOffsetPermissionsTable = defaultOffset;
let currentLimitPermissionsTable  = defaultLimit;


// divs related to the actions that the user and the admin can perform so to hide/show depending on whether the user is the admin or not
let adminActions        = null;
let userActions         = null;
let getStarted          = null;

// the tables, table bodies and table images for users, roles, files, assignments and permissions
let usersTable          = null;
let rolesTable          = null;
let filesTable          = null;
let assignmentsTable    = null;
let permissionsTable    = null;

let usersTableBody          = null;
let rolesTableBody          = null;
let filesTableBody          = null;
let assignmentsTableBody    = null;
let permissionsTableBody    = null;

let usersTableImage         = null;
let rolesTableImage         = null;
let filesTableImage         = null;
let assignmentsTableImage   = null;
let permissionsTableImage   = null;


let usersTablePrevious          = null;
let usersTableNext              = null;
let rolesTablePrevious          = null;
let rolesTableNext              = null;
let filesTablePrevious          = null;
let filesTableNext              = null;
let assignmentsTablePrevious    = null;
let assignmentsTableNext        = null;
let permissionsTablePrevious    = null;
let permissionsTableNext        = null;


let usersTableShowing           = null;
let rolesTableShowing           = null;
let filesTableShowing           = null;
let assignmentsTableShowing     = null;
let permissionsTableShowing     = null;



// this function is invoked to hide everything on a fresh start
function getStartedTables() {

    // empty tables
    usersTableBody.empty();
    usersTableBody.hide();
    rolesTableBody.empty();
    rolesTableBody.hide();
    filesTableBody.empty();
    filesTableBody.hide();
    assignmentsTableBody.empty();
    assignmentsTableBody.hide();
    permissionsTableBody.empty();
    permissionsTableBody.hide();

    usersTableImage.show();
    rolesTableImage.show();
    filesTableImage.show();
    assignmentsTableImage.show();
    permissionsTableImage.show();

    // hide tables
    usersTable.hide();
    rolesTable.hide();
    filesTable.hide();
    assignmentsTable.hide();
    permissionsTable.hide();

    // hide actions in panel
    userActions.hide();
    adminActions.hide();

    // show the "get started" panel
    getStarted.show();
}


// when the document is ready, get reference to objects
$(document).ready( function() {

    // get references to HTML elements the page
    adminActions    = $("#" + adminActionsID);
    userActions     = $("#" + userActionsID);
    getStarted      = $("#" + getStartedID);

    usersTable       = $("#" + usersTableID);
    rolesTable       = $("#" + rolesTableID);
    filesTable       = $("#" + filesTableID);
    assignmentsTable = $("#" + assignmentsTableID);
    permissionsTable = $("#" + permissionsTableID);

    usersTableBody       = $("#" + usersTableBodyID);
    rolesTableBody       = $("#" + rolesTableBodyID);
    filesTableBody       = $("#" + filesTableBodyID);
    assignmentsTableBody = $("#" + assignmentsTableBodyID);
    permissionsTableBody = $("#" + permissionsTableBodyID);

    usersTableImage       = $("#" + usersTableImageID);
    rolesTableImage       = $("#" + rolesTableImageID);
    filesTableImage       = $("#" + filesTableImageID);
    assignmentsTableImage = $("#" + assignmentsTableImageID);
    permissionsTableImage = $("#" + permissionsTableImageID);

    usersTablePrevious        = $("#" + usersTablePreviousID);
    usersTableNext            = $("#" + usersTableNextID);
    rolesTablePrevious        = $("#" + rolesTablePreviousID);
    rolesTableNext            = $("#" + rolesTableNextID);
    filesTablePrevious        = $("#" + filesTablePreviousID);
    filesTableNext            = $("#" + filesTableNextID);
    assignmentsTablePrevious  = $("#" + assignmentsTablePreviousID);
    assignmentsTableNext      = $("#" + assignmentsTableNextID);
    permissionsTablePrevious  = $("#" + permissionsTablePreviousID);
    permissionsTableNext      = $("#" + permissionsTableNextID);

    usersTableShowing         = $("#" + usersTableShowingID);
    rolesTableShowing         = $("#" + rolesTableShowingID);
    filesTableShowing         = $("#" + filesTableShowingID);
    permissionsTableShowing   = $("#" + permissionsTableShowingID);
    assignmentsTableShowing   = $("#" + assignmentsTableShowingID);

});


// function to get the users table data
function getUsersTableData (increase) {

    if (increase === 1) {
        currentOffsetUsersTable = currentOffsetUsersTable + defaultLimit;
        currentLimitUsersTable  = currentLimitUsersTable  + defaultLimit;
    }
    else if (increase === -1) {
        currentOffsetUsersTable = currentOffsetUsersTable - defaultLimit;
        currentLimitUsersTable  = currentLimitUsersTable  - defaultLimit;
    }

    // invoke the API
    invokeAPI(pathAPIUsers + currentlySelectedDAO +
        "/?" + kLimitInCryptoAC  + "=" + currentLimitUsersTable +
        "&" + kOffsetInCryptoAC + "=" + currentOffsetUsersTable,
        "GET", null, successGetUsersTableData, errorAJAX);
}

// function to get the roles table data
function getRolesTableData (increase) {

    if (increase === 1) {
        currentOffsetRolesTable = currentOffsetRolesTable + defaultLimit;
        currentLimitRolesTable  = currentLimitRolesTable  + defaultLimit;
    }
    else if (increase === -1) {
        currentOffsetRolesTable = currentOffsetRolesTable - defaultLimit;
        currentLimitRolesTable  = currentLimitRolesTable  - defaultLimit;
    }

    // invoke the API
    invokeAPI(pathAPIRoles + currentlySelectedDAO +
        "/?" + kLimitInCryptoAC  + "=" + currentLimitRolesTable +
        "&" + kOffsetInCryptoAC + "=" + currentOffsetRolesTable,
        "GET", null, successGetRolesTableData, errorAJAX);
}

// function to get the files table data
function getFilesTableData (increase) {

    if (increase === 1) {
        currentOffsetFilesTable = currentOffsetFilesTable + defaultLimit;
        currentLimitFilesTable  = currentLimitFilesTable  + defaultLimit;
    }
    else if (increase === -1) {
        currentOffsetFilesTable = currentOffsetFilesTable - defaultLimit;
        currentLimitFilesTable  = currentLimitFilesTable  - defaultLimit;
    }

    // invoke the API
    invokeAPI(pathAPIFiles + currentlySelectedDAO +
        "/?" + kLimitInCryptoAC  + "=" + currentLimitFilesTable +
        "&" + kOffsetInCryptoAC + "=" + currentOffsetFilesTable,
        "GET", null, successGetFilesTableData, errorAJAX);
}

// function to get the assignments table data
function getAssignmentsTableData (increase) {

    if (increase === 1) {
        currentOffsetAssignmentsTable = currentOffsetAssignmentsTable + defaultLimit;
        currentLimitAssignmentsTable  = currentLimitAssignmentsTable  + defaultLimit;
    }
    else if (increase === -1) {
        currentOffsetAssignmentsTable = currentOffsetAssignmentsTable - defaultLimit;
        currentLimitAssignmentsTable  = currentLimitAssignmentsTable  - defaultLimit;
    }

    // invoke the API
    invokeAPI(pathAPIAssignments + currentlySelectedDAO +
        "/?" + kLimitInCryptoAC  + "=" + currentLimitAssignmentsTable +
        "&" + kOffsetInCryptoAC + "=" + currentOffsetAssignmentsTable,
        "GET", null, successGetAssignmentsTableData, errorAJAX);
}

// function to get the permissions table data
function getPermissionsTableData (increase) {

    if (increase === 1) {
        currentOffsetPermissionsTable = currentOffsetPermissionsTable + defaultLimit;
        currentLimitPermissionsTable  = currentLimitPermissionsTable  + defaultLimit;
    }
    else if (increase === -1) {
        currentOffsetPermissionsTable = currentOffsetPermissionsTable - defaultLimit;
        currentLimitPermissionsTable  = currentLimitPermissionsTable  - defaultLimit;
    }

    // invoke the API
    invokeAPI(pathAPIPermissions + currentlySelectedDAO +
        "/?" + kLimitInCryptoAC  + "=" + currentLimitPermissionsTable +
        "&" + kOffsetInCryptoAC + "=" + currentOffsetPermissionsTable,
        "GET", null, successGetPermissionsTableData, errorAJAX);
}





// AJAX was successful in getting the list of users in the cloud
function successGetUsersTableData (json) {

    // try to parse the JSON
    try {

        // get the json within the response
        let arrayOfUsers = json[outputJSON];

        // remove precedent data in the table
        usersTableBody.empty();

        // if there are no elements
        if (arrayOfUsers.length === 0) {

            usersTableImage.show();
            usersTableBody.hide();
        }
        // else, there are elements to display
        else {
            usersTableImage.hide();
            usersTableBody.show();
        }

        // for each user
        $.each(arrayOfUsers, function (index, userAsJSON) {

            // append users data
            $('<tr>').append(
                $('<td>').text(userAsJSON[userName])            .addClass("filterable-cell col-md-4 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", userAsJSON[userName]),
                $('<td>').text(userAsJSON[userToken])           .addClass("filterable-cell col-md-4 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", userAsJSON[userToken]),
                $('<td>').text(userAsJSON[userCurrentStatus])   .addClass("filterable-cell col-md-2 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", userAsJSON[userCurrentStatus]),
                $('<td>').text(userAsJSON[userIsUserAdmin])     .addClass("filterable-cell col-md-2 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", userAsJSON[userIsUserAdmin])
            ).appendTo(usersTableBody);
        });

        toggleNextAndPreviousButtons(usersTableNext, usersTablePrevious, usersTableShowing,
            arrayOfUsers.length, currentOffsetUsersTable, currentLimitUsersTable);
        computeShowingString(arrayOfUsers.length, usersTableShowing, currentOffsetUsersTable, currentLimitUsersTable, "users");
        enableTooltips();
        removeLoadingClass();
    }
    // if there was an error in the parsing
    catch (e) {

        // alert the error
        errorParsingResponse(e);
    }
}

// AJAX was successful in getting the list of roles in the cloud
function successGetRolesTableData (json) {

    // try to parse the JSON
    try {

        // get the json within the response
        let arrayOfRoles = json[outputJSON];

        // remove precedent data in the table
        rolesTableBody.empty();

        // if there are no elements
        if (arrayOfRoles.length === 0) {

            rolesTableImage.show();
            rolesTableBody.hide();
        }
        // else, there are elements to display
        else {
            rolesTableImage.hide();
            rolesTableBody.show();
        }

        // for each role
        $.each(arrayOfRoles, function (index, roleAsJSON) {


            $('<tr>').append(
                $('<td>').text(roleAsJSON[roleName])            .addClass("filterable-cell col-md-4 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", roleAsJSON[roleName]),
                $('<td>').text(roleAsJSON[roleToken])           .addClass("filterable-cell col-md-4 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", roleAsJSON[roleToken]),
                $('<td>').text(roleAsJSON[roleCurrentStatus])   .addClass("filterable-cell col-md-2 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", roleAsJSON[roleCurrentStatus]),
                $('<td>').text(roleAsJSON[roleVersionNumber])   .addClass("filterable-cell col-md-2 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", roleAsJSON[roleVersionNumber]),
            ).appendTo(rolesTableBody);
        });


        toggleNextAndPreviousButtons(rolesTableNext, rolesTablePrevious, rolesTableShowing,
            arrayOfRoles.length, currentOffsetRolesTable, currentLimitRolesTable);
        computeShowingString(arrayOfRoles.length, rolesTableShowing, currentOffsetRolesTable, currentLimitRolesTable, "roles");
        enableTooltips();
        removeLoadingClass();
    }
    // if there was an error in the parsing
    catch (e) {

        // alert the error
        errorParsingResponse(e);
    }
}

// AJAX was successful in getting the list of files in the cloud
function successGetFilesTableData (json) {

    // try to parse the JSON
    try {

        // get the json within the response
        let arrayOfFiles = json[outputJSON];

        // remove precedent data in the table
        filesTableBody.empty();

        // if there are no elements
        if (arrayOfFiles.length === 0) {

            filesTableImage.show();
            filesTableBody.hide();
        }
        // else, there are elements to display
        else {
            filesTableImage.hide();
            filesTableBody.show();
        }

        // for each file
        $.each(arrayOfFiles, function (index, fileAsJSON) {

            // append the data to the table
            $('<tr>').append(
                $('<td>').text(fileAsJSON[fileName])                    .addClass("filterable-cell col-md-5 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", fileAsJSON[fileName]),
                $('<td>').text(fileAsJSON[token])                       .addClass("filterable-cell col-md-5 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", fileAsJSON[token]),
                $('<td>').text(fileAsJSON[encryptingKeyVersionNumber])  .addClass("filterable-cell col-md-2 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", fileAsJSON[encryptingKeyVersionNumber])

            ).appendTo(filesTableBody);
        });


        toggleNextAndPreviousButtons(filesTableNext, filesTablePrevious, filesTableShowing,
            arrayOfFiles.length, currentOffsetFilesTable, currentLimitFilesTable);
        computeShowingString(arrayOfFiles.length, filesTableShowing, currentOffsetFilesTable, currentLimitFilesTable, "files");
        enableTooltips();
        removeLoadingClass();
    }
    // if there was an error in the parsing
    catch (e) {

        // alert the error
        errorParsingResponse(e);
    }
}

// AJAX was successful in getting user's associated roles
function successGetAssignmentsTableData (json) {

    // try to parse the JSON
    try {

        // get the json within the response
        let arrayOfAssignments = json[outputJSON];

        // remove precedent data in the table
        assignmentsTableBody.empty();

        // if there are no elements
        if (arrayOfAssignments.length === 0) {

            assignmentsTableImage.show();
            assignmentsTableBody.hide();
        }
        // else, there are elements to display
        else {
            assignmentsTableImage.hide();
            assignmentsTableBody.show();
        }

        // for each assignments
        $.each(arrayOfAssignments, function (index, assignmentAsJSON) {


            // append the data to the table
            $('<tr>').append(
                $('<td>').text(assignmentAsJSON[associatedRole])    .addClass("filterable-cell col-md-8 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", assignmentAsJSON[associatedRole]),
                $('<td>').text(assignmentAsJSON[roleVersionNumber]) .addClass("filterable-cell col-md-4 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", assignmentAsJSON[roleVersionNumber])

            ).appendTo(assignmentsTableBody);
        });


        toggleNextAndPreviousButtons(assignmentsTableNext, assignmentsTablePrevious, assignmentsTableShowing,
            arrayOfAssignments.length, currentOffsetAssignmentsTable, currentLimitAssignmentsTable);
        computeShowingString(arrayOfAssignments.length, assignmentsTableShowing, currentOffsetAssignmentsTable, currentLimitAssignmentsTable, "Assignments");
        enableTooltips();
        removeLoadingClass();
    }
        // if there was an error in the parsing
    catch (e) {

        // alert the error
        errorParsingResponse(e);
    }
}

// AJAX was successful in getting user's accessible files
function successGetPermissionsTableData (json) {

    // try to parse the JSON
    try {

        // get the json within the response
        let arrayOfPermissions = json[outputJSON];

        // remove precedent data in the table
        permissionsTableBody.empty();

        // if there are no elements
        if (arrayOfPermissions.length === 0) {

            permissionsTableImage.show();
            permissionsTableBody.hide();
        }
        // else, there are elements to display
        else {
            permissionsTableImage.hide();
            permissionsTableBody.show();
        }

        // for each file
        $.each(arrayOfPermissions, function (index, permissionsAsJSON) {

            // append the data to the table
            $('<tr>').append(
                $('<td>').text(permissionsAsJSON[associatedFile])                       .addClass("filterable-cell col-md-4 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", permissionsAsJSON[associatedFile]),
                $('<td>').text(permissionsAsJSON[fileToken])                            .addClass("filterable-cell col-md-3 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", permissionsAsJSON[fileToken]),
                $('<td>').text(getPermissionFromString(permissionsAsJSON[permission]))  .addClass("filterable-cell col-md-3 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", getPermissionFromString(permissionsAsJSON[permission])),
                $('<td>').text(permissionsAsJSON[encryptingKeyVersionNumber])           .addClass("filterable-cell col-md-2 wrap-text").attr("data-toggle", "tooltip").attr("data-delay", "{ \"show\": \"500\", \"hide\": \"250\"}").attr("title", permissionsAsJSON[encryptingKeyVersionNumber])

            ).appendTo( permissionsTableBody);
        });


        toggleNextAndPreviousButtons(permissionsTableNext, permissionsTablePrevious, permissionsTableShowing,
            arrayOfPermissions.length, currentOffsetPermissionsTable, currentLimitPermissionsTable);
        computeShowingString(arrayOfPermissions.length, permissionsTableShowing, currentOffsetPermissionsTable, currentLimitPermissionsTable, "Permissions");
        enableTooltips();
        removeLoadingClass();
    }
        // if there was an error in the parsing
    catch (e) {

        // alert the error
        errorParsingResponse(e);
    }
}



// function to toggle the next and previous buttons of the given table
function toggleNextAndPreviousButtons(next, previous, showing, fetched, offset, limit) {

    // if we are at the first page, disable the previous button
    if (offset === 0)
        previous.addClass("disabled");
    else
        previous.removeClass("disabled");


    // if we fetched less items than the limit, it means that there are no more items
    if (fetched < limit)
        next.addClass("disabled");
    else
        next.removeClass("disabled");
}

// to create the "showing X of Y" string at the footer of each table
function computeShowingString(fetched, showing, offset, limit, tableName) {

    // if no items were fetched
    if (fetched === 0)
        showing.html("No " + tableName + " found");
    // if some items were fetched
    else
        showing.html("Showing " + offset + " to " + limit);

}

// to remove _ in the permission string
function getPermissionFromString(permission) {

    return permission.replace(/_/g, " ");

}
