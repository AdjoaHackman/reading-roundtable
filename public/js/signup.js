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
     alert('Failed to create an account!');
  }
})