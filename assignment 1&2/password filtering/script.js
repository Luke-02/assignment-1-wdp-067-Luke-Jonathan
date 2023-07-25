// Password Validation
const correctPassword = "your_password"; // Replace "your_password" with the correct password

function checkPassword() {
  const userPassword = prompt("Enter your password:");
  
  if (userPassword === correctPassword) {
    alert("Correct password! You have access.");
  } else {
    window.location.href = "https://www.google.com"; // Redirect to Google
  }
}

checkPassword();
