// DOM loaded snippet (only need one of these)
$(document).ready(function () {

  // TODO: place "form submitted snippets" here

});


// form submitted snippet (need one for each form)
$("TODO: form CSS selector").on("submit", function() {
  // assume the form is valid by default
  var formValid = true;

  // TODO: place all "check component validity snippets" here

  // Tell the browser whether the form is valid (sent form data to server).
  return formValid;
});


// check component validity snippet (need one for each component with feedback)
if( $("TODO: component CSS selector").prop("validity").valid ) {
  $("TODO: feedback CSS selector").addClass("hidden");
} else {
  $("TODO: feedback CSS selector").removeClass("hidden");
  formValid = false;
}


// log snippet (use to debug; check dev tools console)
console.log("TODO: your message");


// at least one checkbox is checked snippet
if ( $("TODO: checkbox CSS selector").is(':checked') || $("TODO: checkbox CSS selector").is(':checked') /* TODO: append: || $(...).is(':checked') as necessary*/) {
  $("TODO: feedback CSS selector").addClass("hidden");
} else {
  $("TODO: feedback CSS selector").removeClass("hidden");
  formValid = false;
}
