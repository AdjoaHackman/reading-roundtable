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
    data = await response.json()
    alert('Failed to create an account!');
  }
})


 // const router = require('express').Router();
// const { User } = require('../../seeds/userData.json');

// module.exports = router;

// router.post('/signup', async (req, res) => {
//   try {
//     // Find the user who matches the posted e-mail address
//     const userData = await User.create({ where: { email: req.body.email } });
//     //body is the data sent from the post request

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     // Verify the posted password with the password store in the database
//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     // Create session variables based on the logged in user
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     // Remove the session variables
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });