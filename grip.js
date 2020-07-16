function validateForm() {
  var email = document.forms["gripform"]["email"].value;
  var badgeid = document.forms["gripform"]["badgeid"].value;

  if (email == "" && badgeid == "") {
    alert("Email and Badge ID must be filled out");
    return false;
  } else if (email == "") {
    alert("Email must be filled out!");
    return false;
  }
  // A regular expression to validate email address since input type = "email" returns true
  // if you enter "aaaa@aaaa" which is invalid as email should end with a . followed by 2 or 3 characters
  // such as ".com"/".uk" etc.
  else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false
  ) {
    alert("You have entered an invalid email address!");
    return false;
  } else if (badgeid == "") {
    alert("Badge ID must be filled out!");
    return false;
  } else if (isNaN(badgeid)) {
    alert("Please enter a number for Badge ID!");
  }
}
