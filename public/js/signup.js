document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the login button
    document.querySelector('#login').addEventListener('click', function() {
      window.location.href = '/login'; // Redirect to login page
    });
  });

  document.getElementById("signUpForm").addEventListener("submit", async function(e){
    e.preventDefault()
    const signUpName = document.getElementById("create-name").value
    const signUpEmail = document.getElementById("create-email").value
    const signUpPassword = document.getElementById("create-password").value
    const errorMessage = document.getElementById('displayError')
    const reEnter = document.getElementById('re-enter-password').value

    if (signUpPassword.length < 8) {
      errorMessage.textContent = 'Password must be at least 8 characters'
      errorMessage.classList.remove('visually-hidden')
      return;
    }

    if (reEnter !== signUpPassword) {
      errorMessage.textContent = 'Passwords do not match'
      errorMessage.classList.remove('visually-hidden')
      return;
    }

  const response = await fetch('/api/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: signUpName,
      email: signUpEmail,
      password: signUpPassword
    })
  })
  
  
  if (response.ok) {
     document.location.replace('/');
  } else {
    data = await response.json()
    alert('Failed to create an account!');
  }
})