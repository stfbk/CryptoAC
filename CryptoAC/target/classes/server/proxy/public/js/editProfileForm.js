"use strict";

// this JS file collects variables and methods related to the Edit Profile form
// updateEditProfileFormOnCSPSelection  : this function shows/hides the relevant part of the Edit Profile form depending on the CSP selected by the user
// submitEditProfileForm                : this function handles the submit event of the Edit Profile form
// successAfterSubmitEditProfileForm    : callback handler for when the AJAX request was successful. It then fetches the user data from CryptoAC
// successGetUserData                   : callback handler for when the AJAX request was successful. It fetches roles and files assigned to the user from CryptoAC
// errorGetUserData                     : callback handler for when the AJAX request was not successful. It clears previous data and shows a relevant message to the user



// this variable are the HTML class that each part of the Edit Profile form has. In this way, we can loop over the
// parts of the form to show only the ones related to the DAO that the user selected
let editProfileFormSuffix   = "editProfileFormPart";
let editProfileFormID       = "editProfileForm";
let editProfileButtonID     = "editProfileButton";

let editProfileForm = null;

// this is the key for the chosen underlying storage system for CryptoAC. It is also the ID of
// the hidden input element in the edit profile form that indicates the chosen storage system
let kDAO = null;


$(document).ready( function() {

    editProfileForm     = $("#" + editProfileFormID);
    editProfileButton   = $("#" + editProfileButtonID);

    // this is the key for the chosen underlying storage system for CryptoAC
    kDAO = $('#kDAO').text();

    // intercept the submit events on the edit profile form
    // and instead manually handle the submit
    $(editProfileForm).submit( function(event) {
        event.preventDefault();
        submitEditProfileForm($(this));
    });

    $("#" + kIsAdminInCryptoAC).click( function() {
    console.log("click")
        if ($("#" + kIsAdminInCryptoAC).is(':checked')) {
            $("#" + kIsAdminInCryptoAC).val('true');
            $('#' + kUsernameInCryptoAC).val("")
            $('#' + kUsernameInCryptoAC).prop('disabled', true);
            $('#' + kUsernameInCryptoAC).css( "background-color", "#ecf0f1" );
            $('#' + kUsernameInCryptoAC).css( "border-color", "#ecf0f1" );
        }
        else {
            $("#" + kIsAdminInCryptoAC).val('false');
            $('#' + kUsernameInCryptoAC).prop('disabled', false);
            $('#' + kUsernameInCryptoAC).css( "background-color", "" );
            $('#' + kUsernameInCryptoAC).css( "border-color", "" );
        }
    });

    $(".field-icon").click( function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        let input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        }
        else {
            input.attr("type", "password");
        }
    });


    $("#configFile").change( function(e) {

        addLoadingClass();

        var file = $(this)[0].files[0];

        try {
            if (file.name.indexOf(".json") >= 0) {
                var reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = function (e2) {

                    try {
                        // now this variable holds the content of the file as a JSON object
                        let configurationFileJSON = $.parseJSON(e2.target.result);
                        fillEditProfileForm (configurationFileJSON)
                    }
                    // if there was an error in the parsing
                    catch (e) {

                        console.log(e)

                        // finally, trigger the alert
                        Swal.fire({
                            title: "Error!",
                            text: "The file you provided is probably malformed",
                            type: "error",
                            confirmButtonText: "Sorry"
                        });
                    }
                }

                $(this)[0].files = null;
            }
            else {
                ;
                // TODO dare errore
            }
        }
        catch (e) {
            ;
            // TODO do something
        }

        removeLoadingClass();

    });

});


// this function handles the submit event of the Edit Profile form
function submitEditProfileForm (editProfileForm) {

    // get the form data, action and method
    let formData = extractInputsFromForm(editProfileForm);
    let formAction = editProfileForm.attr("action");
    let formMethod = editProfileForm.attr("method");

    console.log("submitEditProfileForm - sending " + formMethod + " request to " + formAction);

    invokeAPI(formAction, formMethod, formData, successAfterSubmitEditProfileForm, errorAJAX);

    // collapse the form
    $(editProfileButton).click();
}

// callback handler for when the AJAX request was successful. It then fetches the user data from CryptoAC
function successAfterSubmitEditProfileForm () {

    successAJAX();

    invokeAPI(pathAPIProfile + currentlySelectedDAO + "/", "GET", null, successGetUserData, errorGetUserData);
}

// this function shows/hides the relevant part of the Edit Profile form depending on the CSP selected by the user
function updateEditProfileFormOnDAOSelection (selectedDAO) {


    // for each part of the form
    $("." + editProfileFormSuffix).each(function() {

        // if this part of the form is related to the selected CSP
        if ($(this).hasClass(selectedDAO)) {

            // for each input of that part
            $(this).find("*").filter(':input').each(function() {

                if ($(this).attr("class") !== "configFile" && $(this).attr("type") !== "checkbox") {

                    // enable the required attribute
                    $(this).attr("required", true);
                }
            });

            // eventually, show the part of the form
            $(this).collapse("show");
        }
            // otherwise, it means that this part of the form contains parameters that are not related to the selected CSP
        // therefore, we can hide them
        else {

            // find each input
            $(this).find("*").filter(':input').each(function () {

                // disable the required attribute
                $(this).attr("required", false);
            });

            // eventually, hide the part of the form
            $(this).collapse("hide");
        }
    });

    if (selectedDAO !== "Select") {

        // set the value of the hidden input in the edit profile form
        $('#' + kDAO).val(selectedDAO);

        // store the value of the currently selected DAO
        currentlySelectedDAO = selectedDAO;

        // get the user data of the selected CSP
        invokeAPI(pathAPIProfile + selectedDAO + "/", "GET", null, successGetUserData, errorGetUserData);
    }
}

// callback handler for when the AJAX request was successful. It fetches roles and files assigned to the user from CryptoAC
function successGetUserData (json) {

    console.log("successGetUserData, raw server response below")
    console.log(json)

    // try to parse the response JSON
    try {

        // is the user admin (false by default. We will get the value from the response)
        let isUserAdmin = false;

        // get the data of the user within the response
        let data = json[outputJSON];

        // fill the edit profile form with the user's data
        fillEditProfileForm (data);

        // for each attribute in the user's data
        $.each(data, function (key, data) {

            // if the key corresponds to the variable saying whether the user is the admin or not
            if (key === kIsAdminInCryptoAC) {

                // show the users actions and hide the getStarted div
                getStarted.hide();
                userActions.show();

                // set the variable for the isAdmin flag
                isUserAdmin = data;

                // if the client is the admin, show the admin's panel and the users/roles/files tables
                if (isUserAdmin) {
                    adminActions.show();

                    // show the tables
                    usersTable.show();
                    rolesTable.show();
                    filesTable.show();

                }
                // else, the client is a normal user. Therefore, hide the admin's panel and show the assignments/permissions tables
                else {
                    adminActions.hide();

                    // show the tables
                    assignmentsTable.show();
                    permissionsTable.show();
                }
            }
        });

        // now set the method of the edit form to PATCH, because, in the case the
        // user wants to modify something, that is an "update" operation, not a "create" one
        editProfileForm.attr("method", "PATCH");

//        // now we remove the "required" attribute from the input with type password
//        // for each part of the form
//        $("." + editProfileFormSuffix).each(function() {
//
//            // if this part of the form is related to the selected CSP
//            if ($(this).hasClass(currentlySelectedDAO)) {
//
//                // for each input of that part
//                $(this).find("*").filter(':input').each(function() {
//
//                    // if the method is not patch and the field is not the password
//                    // it means that the user is updating his data, but the user does not get from the
//                    // server sensitive data like password. So, we do not require sensitive data for PATCH
//                    // requests. Still, the user can update the password if he wants
//                    if (($(this).attr("type") === "password"))
//
//                        // disable the required attribute
//                        $(this).attr("required", false);
//                });
//            }
//        });


        // load also the other tables (users only if the user is the admin)
        if (isUserAdmin) {

            getUsersTableData();
            getRolesTableData();
            getFilesTableData();
        }
        else {
            getAssignmentsTableData();
            getPermissionsTableData();
        }

    }
    // if there was an error in the parsing of the response JSON
    catch (e) {

        // invoke the error parsing response function to alert the error and remove the loading class
        errorParsingResponse(e);
    }
}

// callback handler for when the AJAX request was not successful. It clears previous data and shows a relevant message to the user
function errorGetUserData (XMLHttpRequest, textStatus) {

    console.log("errorGetUserData, raw server response below")
    console.log(XMLHttpRequest.responseText)

    // this means that the user's profile is not configured yet
    if (XMLHttpRequest.status === 404) {

        // set the method of the edit form to POST, because, in the case the
        // user wants to modify something, that is an "create" operation, not an "update" one
        editProfileForm.attr("method", "POST");

        // hide the possible actions and empty the tables
        $(editProfileForm)[0].reset();

        // clear also the username and the isAdmin flag
        $("." + kIsAdminInCryptoAC).html("TBD");
        $("." + kUsernameInCryptoAC).html("TBD");

        // clear also everything else
        getStartedTables();

        // finally, remove the loading class
        removeLoadingClass();

        // finally, trigger the alert
        Swal.fire({
            title: "Attention",
            text: "Configure your profile to start",
            type: "info",
            confirmButtonText: "Ok"
        }).then((result) => {
            $(editProfileButton).click(); // TODO fix not with toggle but with show
        });

    }
    // else, show usual error
    else {
        errorAJAX(XMLHttpRequest, textStatus);
    }
}


function fillEditProfileForm (data) {

    // data are a JSON object. The key of the JSON elements correspond (by construction) to the HTML class of
    // the elements in the user's data card and profile form. Therefore, we can fill such values by looking
    // for the HTML elements having the class as the key of the JSON element

    // for each attribute in the user's data
    $.each(data, function (key, data) {

        // for each element to fill with the value
        $("." + key).each(function () {

            // get the element to fill with the value
            let elementToFill = $(this);

            // get the tag of the element
            let elementToFillTag = elementToFill.prop("tagName").toUpperCase();

            // if the element is related to a form input
            if (elementToFillTag === "INPUT") {

                // which type is the element (text, checkbox, ...)?
                let typeOfElementToFill = elementToFill.attr("type").toUpperCase();

                // if the type is not a file
                if (typeOfElementToFill !== "FILE") {

                    // if the element to fill with the data is a text field, a password or a hidden one
                    if (typeOfElementToFill === "TEXT" || typeOfElementToFill === "PASSWORD" || typeOfElementToFill === "HIDDEN") {

                        // set value of element
                        elementToFill.attr("value", data);
                    }
                    // if the element to fill with the data is a checkbox
                    else if (typeOfElementToFill === "CHECKBOX") {

                        if (data !== elementToFill[0].checked)

                            // set value of element
                            elementToFill.click();
                    }
                }
            }
            // the element is a <select>
            else if (elementToFillTag === "SELECT") {

                // set value of element
                elementToFill.attr("value", data);
            }
            // in any other case
            else {

                // set html of element
                elementToFill.text(data);

            }
        });
    });

}