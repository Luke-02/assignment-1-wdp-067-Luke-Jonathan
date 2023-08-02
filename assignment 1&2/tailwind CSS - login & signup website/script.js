document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("remember");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission for now
  
      // Perform form validation and login functionality here
      // For now, let's just log the values to the console
      const email = emailInput.value;
      const password = passwordInput.value;
      const rememberMe = rememberCheckbox.checked;
  
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Remember Me:", rememberMe);
    });
  });
  