class Validator {
    validateUsername(username) {
      if (username === "") {
        return "Username is required.";
      } else if (username.length < 8 || username.length > 64) {
        return "Username must be between 8 and 64 characters.";
      } else if (/\s/.test(username)) {
        return "Username must not contain spaces.";
      }
      return "";
    }
  
    validatePassword(password) {
      if (password === "") {
        return "Password is required.";
      } else if (password.length < 8 || password.length > 64) {
        return "Password must be between 8 and 64 characters.";
      } else if (/\s/.test(password)) {
        return "Password must not contain spaces.";
      } else if (!/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        return "Password must contain a number and a special character.";
      }
      return "";
    }
  }
  
  // LoginForm class responsible for handling form submission and validation
  class LoginForm {
    constructor() {
      this.validator = new Validator();
      this.form = document.getElementById("loginForm");
      this.usernameInput = document.getElementById("username");
      this.passwordInput = document.getElementById("password");
      this.usernameError = document.getElementById("usernameError");
      this.passwordError = document.getElementById("passwordError");
      this.rememberMeCheckbox = document.getElementById("rememberMe");
      this.savedEmail = "";
      this.savedPassword = "";
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.resetErrors();
  
      const username = this.usernameInput.value;
      const password = this.passwordInput.value;
  
      const usernameError = this.validator.validateUsername(username);
      const passwordError = this.validator.validatePassword(password);
  
      if (usernameError) {
        this.displayError(this.usernameError, usernameError);
      }
  
      if (passwordError) {
        this.displayError(this.passwordError, passwordError);
      }
  
      if (!usernameError && !passwordError) {
        this.handleFormSubmission(username, password);
      }
    }
  
    handleFormSubmission(username, password) {
      if (this.rememberMeCheckbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      }

      let savedArray = JSON.parse(localStorage.getItem('signupdata')) || [];

      // Check if the data matches the stored array
      let isDataMatching = savedArray.filter(obj => obj &&
        obj.username == username &&
        obj.password == password 
      );

      //user exists in the localstorage
      if (isDataMatching.length != 0) {
        if(username=='AdminBhushan' && password=='AdminBhushan@123'){
          this.form.submit();
          window.location.href = "admin.html";
        }else{
          debugger;
          console.log(isDataMatching[0]);
          localStorage.setItem('loggedUser', JSON.stringify(isDataMatching[0]));
          this.form.submit();
          window.location.href = "userDashboard.html";
        }
      }else{
        window.alert('Please enter valid credential!');
      }
    }
  
    resetErrors() {
      this.usernameError.innerText = "";
      this.passwordError.innerText = "";
    }
  
    displayError(errorContainer, errorMessage) {
      errorContainer.innerText = errorMessage;
    }
  
    init() {
      this.form.addEventListener("submit", (event) => this.handleSubmit(event));
    }
  }
  
  // Create a new instance of the LoginForm class and initialize it
  const loginForm = new LoginForm();
  loginForm.init();
  