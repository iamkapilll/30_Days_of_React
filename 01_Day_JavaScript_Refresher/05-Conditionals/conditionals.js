let grade = "B";
let isScholarship = false;

// if-else
if (grade === "A") {
  console.log("Excellent!");
} else if (grade === "B") {
  console.log("Good job!");
} else {
  console.log("Keep trying.");
}

// switch
switch (grade) {
  case "A":
    console.log("Top marks!");
    break;
  case "B":
    console.log("Very good.");
    break;
  default:
    console.log("Study more.");
}

// ternary
let status = isScholarship ? "Scholarship awarded" : "No scholarship";
console.log(status);

// logical operators
if (grade === "A" && isScholarship) {
  console.log("Outstanding performance!");
}
