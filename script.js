//1. Open with a prompt asking user for R, P, S. It also does not matter whether it is capitalized or not!

var confirmPlay = confirm("Would you like to play Rock, Paper, Scissors?");

var options = ["R", "P", "S", "r", "p", "s"];

if (confirmPlay === true) {
  var choice = prompt("Please choose R, P, or S:");
  if (choice === options[0]) {
    console.log(choice);
  } else if (choice === options[1]) {
    console.log(choice);
  } else if (choice === options[2]) {
    console.log(choice);
  } else if (choice === options[3]) {
    console.log(choice);
  } else if (choice === options[4]) {
    console.log(choice);
  } else if (choice === options[5]) {
    console.log(choice);
  } else if (choice !== options) {
    alert("You did not pick the right criteria. Refresh and try again!");
  }
} else {
  var thankYou = document.createTextNode("Thank you for playing!");
  document.body.appendChild(thankYou);
}
