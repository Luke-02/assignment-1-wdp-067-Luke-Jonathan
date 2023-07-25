// Password Validation
const correctPassword = "your_password"; // Replace "your_password" with the correct password

function checkPassword() {
  const userPassword = prompt("Enter your password:");
  
  if (userPassword === correctPassword) {
    alert("Correct password! You have access.");
    window.location.href = "https://windows.php.net/download#php-8.2"; // Redirect to php
  } else {
    window.location.href = "https://www.google.com"; // Redirect to Google
  }
}

checkPassword();
