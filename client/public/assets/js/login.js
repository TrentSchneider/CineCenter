$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const emailInput = $("input#emailInput");
  const passwordInput = $("input#passwordInput");

  // When the form is submitted, we validate there's an email and password entered from within the model
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    // Stops the remaining code from running if a field is blank
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the main page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
  }
});
