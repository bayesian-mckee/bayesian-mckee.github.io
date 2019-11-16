$(document).ready(function() {


  // All other Javascript functions must go here

  // Basic functions for adding/removing a class
  // These functions apply/remove a class to an EXISTING class
  //$(".whatever").removeClass("hidden");
  //$(".whatever").addClass("hidden");//

  // The form element IDs are:
  //   userName
  //   userAge
  //   chooseContactMethods
  //   userEmail
  //   userPhoneNumber
  //   helpTextArea

  // The form's ID is get-help-form"

  // Always include a console.log message for debugging!
  // Note that with novalidation applied to the <form> element,
  // you can type in stuff (which triggers the console log),
  //  but when you hit return, it goes straight to form submission.
  //  Also, seems like you can tab between fields without
  //  triggering submission or a new console log

  $("#userName").on("input", function() {
    console.log("userName selected");
  })

  $("#userAge").on("input", function() {
    console.log("userAge selected");
  })

  $("#chooseContactMethods").on("input", function() {
    console.log("chooseContactMethods selected");
  })

  $("#userEmail").on("input", function() {
    console.log("userEmail selected");
  })

  $("#userPhoneNumber").on("input", function() {
    console.log("userPhoneNumber selected");
  })

  $("#helpTextArea").on("input", function() {
    console.log("helpTextArea selected");
  })

  // Explanation of the difference between . and # in the jquery
  // . selects all classes labeled with .userEmail_error
  // # selects the one and only element with that // IDEA:
  // BUT, if id elements are not unique, it only gets the first one.
  // When user selects e-mail option
  $("#contactByEmail").on("input", function() {
    console.log("contactByEmail selected");
    $("#userPhoneNumber").addClass("hidden");
    $("#userPhoneNumberLabel").addClass("hidden");
    $("#userPhoneNumber_error").addClass("hidden");
    $("#userEmail").attr("required", false);

    $("#userEmail").removeClass("hidden");
    $("#userEmailLabel").removeClass("hidden");
    $("#userEmail_error").addClass("hidden");
    $("#userEmail").attr("required", true);

  })

/*  $("#credit").on("input",function() {
    console.log("credit selected");
    $("#credit_num").removeClass("hidden");
    $("#credit_num").attr("required",true);
  })
*/

  // When user selects text message number
  $("#contactByPhoneNumber").on("input", function() {
    console.log("contactByPhoneNumber selected");
    $("#userEmail").addClass("hidden");
    $("#userEmailLabel").addClass("hidden");
    $("#userEmail_error").addClass("hidden");
    $("#userEmail").attr("required",false)

    $("#userPhoneNumber").removeClass("hidden");
    $("#userPhoneNumberLabel").removeClass("hidden");
    $("#userPhoneNumber_error").addClass("hidden");
    $("#userPhoneNumber").attr("required", true);

  })
  //*****************************************************************************
  // Form validation code  when user submits form
  //*****************************************************************************

  $("#get-help-form").on("submit", function() {

    // Assume that the form input is valid.
    var valid = true;
    // Now cycle through every form field

    // Check the user name - this is optional, so just
    // Remind the user to add something if there was another error.

    if ($("#userName").prop("validity").valid) {
      $("#userName_error").addClass("hidden");
    } else {
      $("#userName_error").removeClass("hidden");
      //$(".whatever").addClass("hidden");//
      valid = false;
    };

    //*
    // Check the userEmail entry
    if ($("#userEmail").prop("validity").valid) {
      $("#userEmail_error").addClass("hidden");
      $("#userPhoneNumber_error").addClass("hidden");

    } else {
      $("#userEmail_error").removeClass("hidden");
      $("#userPhoneNumber_error").addClass("hidden");
      valid = false;
      //$(".whatever").addClass("hidden");//
    };

    // Check the userPhoneNumber entry
    if ($("#userPhoneNumber").prop("validity").valid) {
      $("#userPhoneNumber_error").addClass("hidden");
      $("#userEmail_error").addClass("hidden");
    } else {
      $("#userPhoneNumber_error").addClass("hidden");
      $("#userEmail_error").addClass("hidden");
      valid = false;
    };

    if ($("#helpTextArea").prop("validity").valid) {
      $("#helpTextArea_error").addClass("hidden");
    } else {
      $("#helpTextArea_error").removeClass("hidden");
      valid = false;
    };
    // Tell the browser whether the form is valid (sent form data to server).
    return valid;

  }); // End of Validation

}); // End of $(document).ready
