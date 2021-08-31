"use strict";

// this JS file collects variables and methods related to the AJAX requests to the APIs (add-user, ...)
// submitFormAPICryptoAC    : function that intercepts the submit of a form invoking a CryptoAC API. It makes an alert in case the API is a DELETE
// sendAJAXRequestAPI       : function that forwards the submit of a form invoking a CryptoAC API
// extractInputsFromForm    : function that extracts the inputs from a form and returns a formData object
// getFileFromCryptoAC      : function that downloads a file by triggering a GET request to the file URL



// the name of the class of the API forms, except the ReadFile form that is handles separately
let formAPICryptoAC = "formAPICryptoAC";



// when the document is ready
$(document).ready( function() {

    // intercept the submit events on the forms
    $("." + formAPICryptoAC).submit( function(event) {

        // first thing, block the default event
        event.preventDefault();

        // then, invoke the function that will make the AJAX passing the reference of the <form> element
        submitFormAPICryptoAC($(this));
    });

    // intercept the submit events from the read file form
    $("#" + readFileFormID).submit( function(event) {

        // first thing, block the default event
        event.preventDefault();

        // then, invoke the function that will get the fetch file
        getFileFromCryptoAC($(this));
    });

});

// function that intercepts the submit of a form invoking a CryptoAC API. It makes an alert in case the API is a DELETE
function submitFormAPICryptoAC(thisForm) {

    let successCallback = successAJAX;

    // if the method is DELETE, make an extra check
    if (thisForm.attr("method") === "DELETE") {

        // trigger alert
        Swal.fire({
            title: "Are you sure?",
            text: "The operation is not reversible",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) => {

            if (result.value){

                // trigger the request
                sendAJAXRequestAPI(thisForm, successCallback, errorAJAX);
            }
        });
    }
    else {

        // trigger the request
        sendAJAXRequestAPI(thisForm, successCallback, errorAJAX);
    }
}

// function that forwards the submit of a form invoking a CryptoAC API
function sendAJAXRequestAPI(thisForm, successAJAX, errorAJAX) {

    let formData ;
    let formActionParameters = "";
    let formAction = thisForm.attr("action");
    let formMethod = thisForm.attr("method");

    // if any, cut the parameters from the url
    let indexOfColon = formAction.indexOf(":");

    // e.g. "/delete-user/:username/" => "/delete-user/"
    if (indexOfColon !== -1)
        formAction = formAction.substring(0, indexOfColon);

    // for all APIs related to cryptographic AC management, add the CSP to the method URL
    formAction = formAction + currentlySelectedDAO + "/";

    // extract the inputs from the form
    formData = extractInputsFromForm(thisForm);

    // if the method of the form is a GET or a DELETE, we have to set the parameters in the URL
    if (formMethod === "GET" || formMethod === "DELETE") {

        // for each parameter in the form data
        for (let pair of formData.entries()) {

            // put the value of the parameter in the URL
            formActionParameters = formActionParameters + pair[1] + "/";
        }
    }

    // invoke the API
    invokeAPI(formAction + formActionParameters, formMethod, formData, successAJAX, errorAJAX);

    // collapse the form
    let id = thisForm.closest("ul").attr("id");
    $("a[href$=" + id + "]").click();

    // reset the form
    thisForm.trigger("reset");
}

// function that extracts the inputs from a form and returns a formData object
function extractInputsFromForm(formObject) {

    let formData = new FormData();

    // since we don't know which inputs of the form were submitted, loop to get the values
    $(formObject).find("*").filter(':input').each(function() {

        // get type and name
        let type  = $(this).attr("type");
        let name  = $(this).attr("name");

        // if this input is not the submit button
        if (type !== "submit") {

            // the variable that will hold the value of this specific input
            let value;

            // if the input element is a file
            if (type === "file") {

                // get the file as value
                value = $(this).prop('files')[0];
            }
            // otherwise
            else {

                // just get the value
                value = $(this).val();
            }

            // append everything to the form data
            formData.append(name, value);
        }
    });

    // return the data
    return formData;
}

// function that downloads a file by triggering a GET request to the file URL
function getFileFromCryptoAC (thisForm) {

    addLoadingClass();

    // extract the inputs from the form
    let formData = extractInputsFromForm(thisForm);
    let formActionParameters = "";

    let formAction = thisForm.attr("action");

    // if any, cut the parameters from the url
    let indexOfColon = formAction.indexOf(":");

    // e.g. "/delete-user/:username/" => "/delete-user/"
    if (indexOfColon !== -1)
        formAction = formAction.substring(0, indexOfColon);

    // for all APIs related to cryptographic AC management, add the DAO to the method URL
    formAction = formAction + currentlySelectedDAO + "/";

    // for each parameter in the form data
    for (let pair of formData.entries()) {

        // put the value of the parameter in the URL
        formActionParameters = formActionParameters + pair[1] + "/";
    }


    let url = formAction + formActionParameters;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.responseType = 'arraybuffer';
    xhr.onload = function () {
        if (this.status === 200) {

            removeLoadingClass();

            var filename = "";
            var disposition = xhr.getResponseHeader('Content-Disposition');
            if (disposition && disposition.indexOf('attachment') !== -1) {
                var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                var matches = filenameRegex.exec(disposition);
                if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
            }
            var type = xhr.getResponseHeader('Content-Type');

            var blob;
            if (typeof File === 'function') {
                try {
                    blob = new File([this.response], filename, { type: type });
                } catch (e) { /* Edge */ }
            }
            if (typeof blob === 'undefined') {
                blob = new Blob([this.response], { type: type });
            }

            if (typeof window.navigator.msSaveBlob !== 'undefined') {
                // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                window.navigator.msSaveBlob(blob, filename);
            }
            else {
                var URL = window.URL || window.webkitURL;
                var downloadUrl = URL.createObjectURL(blob);

                if (filename) {
                    // use HTML5 a[download] attribute to specify filename
                    var a = document.createElement("a");
                    // safari doesn't support this yet
                    if (typeof a.download === 'undefined') {
                        window.location.href = downloadUrl;
                    } else {
                        a.href = downloadUrl;
                        a.download = filename;
                        document.body.appendChild(a);
                        a.click();
                    }
                }
                else {
                    window.location.href = downloadUrl;
                }

                setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
            }
        }
        else {

            if (!("TextDecoder" in window))
                alert("Sorry, this browser does not support TextDecoder...");

            var enc = new TextDecoder("utf-8");
            console.log();

            // parse the object into a JSON
            let json = $.parseJSON(enc.decode(this.response));

            let errorMessage = json[outcomeMessage];
            let errorCode = json[httpStatus];
            let errorType = "error";

            if (errorMessage === undefined)
                errorMessage = "an unexpected error occurred"


            console.log("received error, message " + errorMessage + ", status " + errorCode)

            // finally, remove the loading class
            removeLoadingClass();

            // finally, trigger the alert
            Swal.fire({
            title: "Error!",
            text: errorMessage + "  (" + errorCode + ")",
            type: errorType,
            confirmButtonText: "Ok"
            });

        }
    };
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader("Accept", "application/json")

//    xhr.send($.param(params));
    xhr.send();








//    // create a custom 'a' element to be clicked on
//    let a = document.createElement("a");
//    a.href = formAction + formActionParameters;
//    document.body.appendChild(a);

    removeLoadingClass();

    // click on it
//    a.click();

}





