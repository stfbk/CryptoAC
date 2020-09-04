"use strict";

// this JS file collects utils for sending AJAX requests
// InvokeAPI            : generic function for sending an API requests with the given route, method, data and callbacks
// addLoadingClass      : this function adds the loading class to the body IF the body does not already have the loading class
// removeLoadingClass   : this function remove the loading class from the body IF the body has the loading class
// successAJAX          : callback handler for when an AJAX request was successful. It makes appear a success alert
// error AJAX           : callback handler for when an AJAX request was not successful. It makes appear an error alert
// errorParsingResponse : callback handler for when the server answered to an API with a 200 BUT we did not manage to parse the JSON response



// the timeout for APIs
const timeout = 60000;
const alertTimer = 2500;

let scrollTopPosition;


// generic function for sending an API requests with the given route, method, data and callbacks
function invokeAPI (api, method, data, successCallback, errorCallback) {

    // first, add the loading class, if any
    addLoadingClass();

    // log what we are invoking
    console.log("invokeAPI - sending " + method + " request to " + api);

    // let's make the AJAX request
    $.ajax({
        url: api,                                           // url for the GET
        headers: {                                          // accept JSON back
            "Accept": "application/json"                    //
        },                                                  //
        contentType: false,                                 // set to false
        method: method,                                     // the method
        cache: false,                                       // do not cache answers
        async: true,                                        // set async
        data: data,                                         // eventual data to send
        processData: false,                                 // do not process data
        success: successCallback,                           // on success...
        error: errorCallback,                               // on error...
        timeout: timeout                                    // set timeout
    });
}

// this function adds the loading class to the body IF the body does not already have the loading class
function addLoadingClass () {

    // store the position from the top
    scrollTopPosition = $(window).scrollTop();

    // does the body have the class "loading"?
    let hasClassLoading = body.hasClass("loading");

    // if the body is not loading
    if (!hasClassLoading) {

        // set the class
        body.addClass("loading");
    }
}

// this function remove the loading class from the body IF the body has the loading class
function removeLoadingClass () {

    // restore the position from the top
    $(window).scrollTop(scrollTopPosition);

    // does the body have the class "loading"?
    let hasClassLoading = body.hasClass("loading");

    // if the body is loading
    if (hasClassLoading) {

        // set the class
        body.removeClass("loading");
    }
}

// callback handler for when an AJAX request was successful. It makes appear a success alert
function successAJAX (json) {

    removeLoadingClass();
    let responseJSON;

    if (json !== undefined) {
        // get the json within the response
        responseJSON = json[outputJSON];
    }

    if (responseJSON === undefined) {

        Swal.fire({
            title: "Success!",
            text: "The operation concluded successfully",
            timer: alertTimer,
            type: "success",
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        });
    }
    else {

        Swal.fire({
            title: "Success!",
            text: "The operation concluded successfully",
            type: "success",
            allowOutsideClick: false,
            confirmButtonText: "Download User Data",
            onClose: () => {
                download("userData.json", responseJSON);
              }
        });
    }
}



function download(filename, json) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(json)));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}




// callback handler for when an AJAX request was not successful. It makes appear an error alert
function errorAJAX (XMLHttpRequest, textStatus) {

    console.log("errorAJAX, raw server response below")
    console.log(XMLHttpRequest.responseText)

    // message and code to put in the alert
    let errorMessage;
    let errorCode;
    let errorType = "error";

    try {

        // this first part is for parsing the response of the server

        // if the error is a timeout
        if (textStatus === 'timeout') {

            // set errors
            errorMessage = "The server is not reachable";
            errorCode = "Connection timeout"
        }
        // the server explicitly returned an error
        else {

            // parse the object into a JSON
            let json = $.parseJSON(XMLHttpRequest.responseText);

            errorMessage = json[outcomeMessage];
            errorCode = json[httpStatus];
            if (errorMessage === undefined)
                errorMessage = "an unexpected error occurred"
        }

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
    // if there was an error in the parsing
    catch (e) {

        // invoke the error parsing response function to alert the error and remove the loading class
        errorParsingResponse(e);
    }
}

// callback handler for when the server answered to an API with a 200 BUT we did not manage to parse the JSON response
function errorParsingResponse (e) {

    Swal.fire({
        title: "Error!",
        text: "Error parsing the server response (" + e + ")",
        type: "error",
        confirmButtonText: "Ok"
    });

    // remove loading class
    removeLoadingClass();
}