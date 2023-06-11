// User class represents a user object
class User {
    constructor(username, email, load, connection, mobileNo, city, street, state, landmark, gender, dob, building) {
      this.username = username;
      this.email = email;
      this.load = load;
      this.connection = connection;
      this.mobileNo = mobileNo;
      this.city = city;
      this.street = street;
      this.state = state;
      this.landmark = landmark;
      this.gender = gender;
      this.dob = dob;
      this.building = building;
    }
  }
  
  // UserTable class handles table-related operations
  class UserTable {
    constructor() {
      // Get the reference to the user table element
      this.userTable = document.getElementById('userTable');
      // Get the reference to the user details popup element
      this.userDetailsPopup = document.getElementById('userDetailsPopup');
      // Get the reference to the user details content element
      this.userDetailsContent = document.getElementById('userDetailsContent');
      // Get the reference to the close button of the user details popup
      this.closeButton = document.getElementById('closeButton');
    }
  
    // Clear the existing table rows
    clearTable() {
      this.userTable.innerHTML = '';
    }
  
    // Generate a row for a user in the table
    generateRow(user, index) {
      const { username, email, load, connection, mobileNo, city } = user;
      const role = this.getRole(username);
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${role}</td>
        <td>${load}</td>
        <td>${connection}</td>
        <td>${mobileNo}</td>
        <td>${city}</td>
        <td><button class="btn btn-primary" onclick="userDetails(${index})">Details</button></td>
      `;
  
      this.userTable.appendChild(row);
    }
  
    // Get the role of a user based on their username
    getRole(username) {
      return username === 'AdminBhushan' ? 'Admin' : 'Consumer';
    }
  
    // Generate table rows based on user data
    generateTableRows(userData) {
      this.clearTable();
  
      // Generate a row for each user in the user data array
      userData.forEach((user, index) => {
        this.generateRow(user, index);
      });
    }
  
    // Show user details in the popup
    showUserDetails(user) {
      const { username, email, load, connection, mobileNo, city, street, state, landmark, gender, dob, building } = user;
  
      // Update the user details content
      this.userDetailsContent.innerHTML = `
        <h5 class="card-title">${username}</h5>
        <p class="card-text"><strong>Email:</strong> ${email}</p>
        <p class="card-text"><strong>Load:</strong> ${load}</p>
        <p class="card-text"><strong>Connection:</strong> ${connection}</p>
        <p class="card-text"><strong>Mobile Number:</strong> ${mobileNo}</p>  
        <p class="card-text"><strong>Building:</strong> ${building}</p>
        <p class="card-text"><strong>Street:</strong> ${street}</p>
        <p class="card-text"><strong>Landmark:</strong> ${landmark}</p>
        <p class="card-text"><strong>City:</strong> ${city}</p>
        <p class="card-text"><strong>State:</strong> ${state}</p>
        <p class="card-text"><strong>Gender:</strong> ${gender}</p>
        <p class="card-text"><strong>Date of Birth:</strong> ${dob}</p>
      `;
  
      // Show the user details popup
      this.userDetailsPopup.style.display = 'block';
    }
  
    // Close the user details popup
    closeUserDetailsPopup() {
      // Hide the user details popup
      this.userDetailsPopup.style.display = 'none';
    }
  }
  
  // Retrieve user data from localStorage or create an empty array if it doesn't exist
  function retrieveUserData() {
    const userData = JSON.parse(localStorage.getItem('signupdata')) || [];
  
    // Convert the data into User objects
    return userData.map((data) => {
      const { username, email, load, connection, mobileNo, city, street, state, landmark, gender, dob, building } = data; //used destructuring
      return new User(username, email, load, connection, mobileNo, city, street, state, landmark, gender, dob, building);
    });
  }
  
  // Initialize the user table
  function initializeTable() {
    const userTable = new UserTable();
    const userData = retrieveUserData();
  
    // Generate table rows based on user data
    userTable.generateTableRows(userData);
  }
  
  // Show user details in the popup
  function userDetails(index) {
    const userData = retrieveUserData();
    const user = userData[index];
  
    const userTable = new UserTable();
    userTable.showUserDetails(user);
  }
  
  // Close the user details popup
  function closeUserDetails() {
    const userTable = new UserTable();
    userTable.closeUserDetailsPopup();
  }
  
  // Call the function to initialize the table
  initializeTable();
  