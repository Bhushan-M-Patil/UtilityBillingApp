// Retrieve user data from local storage
const userData = JSON.parse(localStorage.getItem('loggedUser'));

// Check if user data exists
if (userData) {
  const userDetailsContainer = document.getElementById('userDetails');

  // Create and populate the user details HTML
  const userDetailsHTML = `
    <h5 class="card-title">${userData.username}</h5>
    <p class="card-text"><strong>Email:</strong> ${userData.email}</p>
    <p class="card-text"><strong>Load:</strong> ${userData.load}</p>
    <p class="card-text"><strong>Connection:</strong> ${userData.connection}</p>
    <p class="card-text"><strong>Mobile Number:</strong> ${userData.mobileNo}</p>  
    <p class="card-text"><strong>Building:</strong> ${userData.building}</p>
    <p class="card-text"><strong>Street:</strong> ${userData.street}</p>
    <p class="card-text"><strong>Landmark:</strong> ${userData.landmark}</p>
    <p class="card-text"><strong>City:</strong> ${userData.city}</p>
    <p class="card-text"><strong>State:</strong> ${userData.state}</p>
    <p class="card-text"><strong>Gender:</strong> ${userData.gender}</p>
    <p class="card-text"><strong>Date of Birth:</strong> ${userData.dob}</p>
  `;

  // Add the user details HTML to the container
  userDetailsContainer.innerHTML = userDetailsHTML;
} else {
  // Handle the case when user data is not found in local storage
  console.log('User data not found.');
}
