function validatePassword() {
  var newPasswordInput = document.getElementById("newPassword").value.trim();
  var confirmPasswordInput = document
    .getElementById("confirmPassword")
    .value.trim();
  var confirmPasswordError = document.getElementById("confirmPasswordError");

  if (newPasswordInput === "") {
    confirmPasswordError.textContent = "New password is required.";
    return false;
  }

  // Password must be at least 8 characters long
  if (newPasswordInput.length < 8) {
    confirmPasswordError.textContent =
      "Password must be at least 8 characters long.";
    return false;
  }

  // Password and confirm password must match
  if (newPasswordInput !== confirmPasswordInput) {
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  }

  confirmPasswordError.textContent = "";
  return true;
}

function validateForm() {
  var isNewPasswordValid = validatePassword();

  if (!isNewPasswordValid) {
    return false;
  }

  // Remove the form and show success message
  var formElement = document.getElementById("forgotPasswordForm");
  formElement.parentNode.removeChild(formElement);

  var successMessage = document.createElement("div");
  successMessage.className = "success-message";
  successMessage.textContent = "Password changed successfully.";
  document.body.appendChild(successMessage);
}
