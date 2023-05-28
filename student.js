function calculateGrade() {
    // Get the input values
    let name = document.getElementById("name").value;
    let score = parseInt(document.getElementById("score").value);
    
    // Calculate the grade based on the score
    let grade = "";
    if (score >= 95) {
      grade = "A+";
    } else if (score >= 90) {
      grade = "A";
    } else if (score >= 80) {
      grade = "B";
    } else if (score >= 70) {
      grade = "C";
    } else if (score >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
    
    // Display the output
    let output = "Hi " + name + ", your grade is " + grade;
    document.getElementById("output").innerHTML = output;
  }
  function resetGrade() {
    document.getElementById("name").value = "";
    document.getElementById("score").value = "";
    document.getElementById("output").textContent = "";
   }