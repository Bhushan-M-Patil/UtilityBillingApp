    let flag = false;
    // Validate username
    function validateUsername() {
     let username = document.getElementById('username').value;
     if (username.trim().length < 8 || username.trim().length > 16) {
        document.getElementById('username-error').innerText = ('Username should be between 8 and 16 characters.');
        flag = true;
     } else if (/\d/.test(username) || /[!@#$%^&*]/.test(username)) {
      document.getElementById('username-error').innerText =('Username must not contain any special char or number.');
      flag = true;
     }else{
      document.getElementById('username-error').innerText = '';
      flag = false;
     }
    }
  
    // Validate password
    function validatePassword() {
      let password = document.getElementById('password').value;
      if (password.length === 0) {
        document.getElementById('password-error').innerText =('Password is required.');
        flag = true;
      } else if (password.length < 8 || password.length > 16) {
        document.getElementById('password-error').innerText =('Password should be between 8 and 16 characters.');
        flag = true;
      } else if (!/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        document.getElementById('password-error').innerText =('Password should contain at least one number and one special character.');
        flag = true;
      }else{
        document.getElementById('password-error').innerText ='';
        flag = false;
      }
    }
    
    //validate age of user.
    function isDateMoreThan18YearsAgo() {
      let dob = document.getElementById('dob').value;
        const today = new Date();
        const birthDate = new Date(dob);
        const age = today.getFullYear() - birthDate.getFullYear();

        if (age < 18) {
          document.getElementById('dob-error').innerText =("You must be at least 18 years old.");
          flag = true;
        }else{
          document.getElementById('dob-error').innerText =("");
          flag = false;
        }
    }


    function storedata(){
      let formSubmit = document.getElementById('signup-form');
      // get all form data into one object
      const completeFormData = new FormData(formSubmit);
      // Convert form data to a simple object
      const FormValues = {};
      for (const [key, value] of completeFormData.entries()) {
      FormValues[key] = value;
      }

      // Retrieve the existing array from local storage or create a new one
      let existingArray = JSON.parse(localStorage.getItem('signupdata')) || [];

      // Push the new object into the existing array
      existingArray.push(FormValues);

      // Store the updated array in local storage
      localStorage.setItem('signupdata', JSON.stringify(existingArray));
      window.alert("Thank for signing with us!");
    }

    document.getElementById('signup-form').addEventListener('submit', function(event) {
      if(flag){
        event.preventDefault();
      }else{
        storedata();
      }
    });
