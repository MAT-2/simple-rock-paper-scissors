//1. Open with a prompt asking user for R, P, S. It also does not matter whether it is capitalized or not!

var confirmPlay = confirm("Would you like to play Rock, Paper, Scissors?");

if (confirmPlay === true) {
  var choice = prompt("Please choose R, P, or S:");
} else {
  var thankYou = document.createTextNode("Thank you for playing!");
  document.body.appendChild(thankYou);
}

console.log(choice);
