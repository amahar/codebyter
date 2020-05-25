//Assign all variables needed
var validNumber = "";
var number = prompt("Please kindly enter a number");
//var output = document.getElementById('output');

//check to make sure the input is an integer and not any other value
if (isNaN(number)) {
  newNumber = prompt("please enter a valid number");
  validNumber = newNumber;
} else {
  validNumber = number;
}

for (var i = 1; i <= validNumber; i++) {
  var message = i;
  if (i % 3 == 0 && i % 5 == 0) {
    message = "FizzBuzz";
  } else if (i % 5 == 0) {
    message = "Buzz";
  } else if (i % 3 == 0) {
    message = "Fizz";
  }
  //output.innerHTML += '\n' + message + '\n<br>';
  console.log(message);
}
