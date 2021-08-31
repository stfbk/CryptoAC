"use strict";

// this JS file collects the ID of general global variables
// enableTooltips : enable tooltips on the page



// the body of the HTML document
let body;

// the edit profile button
let editProfileButton;

// the currently selected DAO
let currentlySelectedDAO;

// the username of the currently logged user
let loggedUser;

// base path for APIs
let pathAPIUsers;
let pathAPIRoles;
let pathAPIFiles;
let pathAPIAssignments;
let pathAPIPermissions;
let pathAPIProfile;

// the key for offset and limit parameters in APIs
let kOffsetInCryptoAC;
let kLimitInCryptoAC;

let kIsAdminInCryptoAC;
let kUsernameInCryptoAC;




// JSON key for getting the data out of an API response
const outputJSON            = "outputJSON";
const outcomeMessage        = "outcomeMessage";
const httpStatus            = "httpStatus";

const loggedUserID          = "loggedUser";

const selectOptionCSP       = "Select";
const readFileFormID        = "readFileForm";

const adminActionsID        = "adminActions";
const userActionsID         = "userActions";
const getStartedID          = "getStarted";

const usersTableID          = "usersTable";
const usersTableBodyID      = "usersTableBody";
const usersTableImageID     = "usersTableImage";

const rolesTableID          = "rolesTable";
const rolesTableBodyID      = "rolesTableBody";
const rolesTableImageID     = "rolesTableImage";

const filesTableID          = "filesTable";
const filesTableBodyID      = "filesTableBody";
const filesTableImageID     = "filesTableImage";

const assignmentsTableID          = "assignmentsTable";
const assignmentsTableBodyID      = "assignmentsTableBody";
const assignmentsTableImageID     = "assignmentsTableImage";

const permissionsTableID          = "permissionsTable";
const permissionsTableBodyID      = "permissionsTableBody";
const permissionsTableImageID     = "permissionsTableImage";

const usersTablePreviousID  = "usersTablePrevious";
const usersTableNextID      = "usersTableNext";
const rolesTablePreviousID  = "rolesTablePrevious";
const rolesTableNextID      = "rolesTableNext";
const filesTablePreviousID  = "filesTablePrevious";
const filesTableNextID      = "filesTableNext";
const assignmentsTablePreviousID  = "assignmentsTablePrevious";
const assignmentsTableNextID      = "assignmentsTableNext";
const permissionsTablePreviousID  = "permissionsTablePrevious";
const permissionsTableNextID      = "permissionsTableNext";

const usersTableShowingID   = "usersTableShowing";
const rolesTableShowingID   = "rolesTableShowing";
const filesTableShowingID   = "filesTableShowing";
const assignmentsTableShowingID   = "assignmentsTableShowing";
const permissionsTableShowingID   = "permissionsTableShowing";


// keys for tables
const userIsUserAdmin       = "isUserAdmin";
const userName              = "name";
const roleName              = "name";
const fileName              = "name";
const userCurrentStatus     = "currentStatus";
const roleCurrentStatus     = "currentStatus";
const token                 = "token";
const userToken             = "token";
const roleToken             = "token";
const fileToken             = "fileToken";
const permission            = "associatedPermission";
const associatedRole        = "associatedRole";
const associatedFile        = "associatedFile";
const roleVersionNumber     = "roleVersionNumber";
const fileVersionNumber     = "fileVersionNumber";
const encryptingKeyVersionNumber     = "encryptingKeyVersionNumber";



// when the document is ready
$(document).ready( function() {

    // make tooltips appear
    enableTooltips();

    // get reference to the body
    body = $(document.body);

    loggedUser = $("#" + loggedUserID).text();


    // these are the base URLs for invoking APIs
    // the ".split(":")[0];" is to remove eventual path parameters
    pathAPIUsers = $('#pathAPIUsers').text().split(":")[0];
    pathAPIRoles = $('#pathAPIRoles').text().split(":")[0];
    pathAPIFiles = $('#pathAPIFiles').text().split(":")[0];
    pathAPIAssignments = $('#pathAPIAssignments').text().split(":")[0];
    pathAPIPermissions = $('#pathAPIPermissions').text().split(":")[0];
    pathAPIProfile = $('#pathAPIProfile').text().split(":")[0];

    kOffsetInCryptoAC = $('#kOffsetInCryptoAC').text();
    kLimitInCryptoAC = $('#kLimitInCryptoAC').text();

    kIsAdminInCryptoAC = $('#kIsAdminInCryptoAC').text();
    kUsernameInCryptoAC = $('#kUsernameInCryptoAC').text();


    // side bar code
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
        $('#greyAreaCollapseSidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    // when sidebar is showed and screen is narrow (e.g. smart phone)
    // click on the body to collapse the sidebar
    $('#greyAreaCollapseSidebar').on('click', function () {

        if ($('#greyAreaCollapseSidebar').hasClass('active')) {

            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');
            $('#greyAreaCollapseSidebar').toggleClass('active');
        }
    });
});


function enableTooltips() {
    $('[data-toggle="tooltip"]').tooltip("enable");
}
