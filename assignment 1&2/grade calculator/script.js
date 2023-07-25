// Grade Calculator
function calculateGrade() {
    const score = prompt("Enter your score (between 1 and 100):");
    const parsedScore = parseInt(score);
  
    if (isNaN(parsedScore) || parsedScore < 1 || parsedScore > 100) {
      alert("Cannot calculate your grade. Please enter a valid score between 1 and 100.");
    } else if (parsedScore >= 80 && parsedScore <= 100) {
      alert("Your grade is A");
    } else if (parsedScore >= 70 && parsedScore < 80) {
      alert("Your grade is B");
    } else if (parsedScore >= 60 && parsedScore < 70) {
      alert("Your grade is C");
    } else if (parsedScore >= 50 && parsedScore < 60) {
        alert("Your grade is D");
    } else if (parsedScore >= 40 && parsedScore < 50) {
        alert("Your grade is E");
    } else {
      alert("Your grade is F");
    }
  }
  
  calculateGrade();
  