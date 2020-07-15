function validateForm() {
  var email = document.forms["gripform"]["email"].value;
  var badgeid = document.forms["gripform"]["badgeid"].value;
  if (email == "" && badgeid == "") {
    alert("Email and Badge ID must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out!");
    return false;
  }
  else if (badgeid == "") {
    alert("Badge ID must be filled out!");
    return false;
  }
}