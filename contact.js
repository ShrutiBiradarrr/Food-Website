var form = document.getElementById("contact-form");
var submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();
  var error = document.getElementById("error-message");

  if (name == "" || email == "" || message == "") {
    error.innerHTML = "Please fill in all required fields.";
    return false;
  } else {
    error.innerHTML = "";
  }

  if (!isValidEmail(email)) {
    error.innerHTML = "Please enter a valid email address.";
    return false;
  } else {
    error.innerHTML = "";
  }

  form.submit();
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
