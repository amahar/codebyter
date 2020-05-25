// all about arrays: Arrays are created to access multiple values
var memory = ["stack", "heap", "virtual"];
//**************
//create an array using, array literal

function arrLit() {
  var memory = ["stack", "heap", "virtual"];
  var access = memory[0];
  var accTest = memory["1"]; //we can also access properties surrounded in quotes, which is one of the
  var length = memory["length"]; //two ways to access property, other one being the dot notation.
  console.log(memory.length); //3
  console.log(memory.stack); //undefined
  console.log(memory); // ["stack", "heap", "virtual"]
  console.log(access); // stack
  console.log(accTest); // heap
  console.log(length); // 3
  console.log(memory[0]); // stack
  console.log(memory[1]); //  heap

  //console.log(memory.0);// error
  return memory;
}
console.log(arrLit());

//****************
//create an array example 2

function arr() {
  var controlFlow = [];
  controlFlow[0] = "instructions";
  controlFlow[1] = "registers";
  controlFlow[2] = "threads";
  controlFlow.js = "single";
  controlFlow.prop = "prop";
  controlFlow["createObj"] = { obj: "object created" }; //object inside an array.
  console.log(controlFlow["createObj"]); //calling of the object
  console.log(controlFlow[0]);
  console.log(controlFlow); //output: ["instructions", "registers", "threads", js: "single", prop: "prop", createObj: {…}]
  //let's see how we can retrieve the last three elements from the above array
  console.log(controlFlow.js); //output: single
  //console.log(controlFlow[js]);//output: error -> js is not defined
  console.log(controlFlow["js"]); //output: single
  console.log(controlFlow[3]); //output: undefined
  console.log(typeof controlFlow); // returns object, since array is an object.
  //controlFlow[php] = 'not sure'; // error - since php is not defined.
  return controlFlow;
  // for(i=0; i < controlFlow.length; i++){
  // 	console.log(controlFlow[i]);
  // }
}
console.log(arr()); //need to find out how to access the 'js' property !

//***************
//assign new value to array index '0'

memory[0] = "LIFO";
var assignNaccess = memory[0];
console.log(assignNaccess);

//**********
//you can loop over an array example 1
//var forLoop = '';

for (i = 0; i < memory.length; i++) {
  console.log(memory[i]);
}

//passing array as a function parameter - from eloquent
function loopOver(arr, arg) {
  for (i = 0; i < arr.length; i++) arg(arr[i]);
}
loopOver(["newarray", "testarray", "outputarray"], console.log);

//another example - create function value on spot - from eloquent
//notice how the loopover function is calling another function as an argument
var numbers = [1, 2, 3, 4, 5],
  sum = 0;
loopOver(numbers, function(item) {
  sum += item;
});
console.log(sum);
// → 15

//**********
//another method (forEach) to loop over

methodTwo = "";
memory.forEach(function(item, index) {
  methodTwo += item + " ";
});

console.log(methodTwo);

//**********
//Techinque shown here to run a loop over a string, and replace a character in string.
//Kind of does the same thing as replace() method
var genieVal = $("#genie").text();
var output = "",
  letter;
for (var i = 0; i < genieVal.length; i++) {
  letter = genieVal[i];
  if (letter === "h") {
    letter = "z";
  }
  output += letter;
}
console.log(output);

//same as above, but we are going to outpout the array, that's all
var genieVal = ["apple", "google", "amazon"];
var output = "",
  letter = [];
for (var i = 0; i < genieVal.length; i++) {
  //this is how you would store an array (in this case, the new array is being created from the existing array)
  letter[i] = genieVal[i];
}
console.log(letter);

//this is another example same as above but instead we changing letter to letter array in this solution
var genieVal = $("#genie").text();
var output = "",
  letter = [];
for (var i = 0; i < genieVal.length; i++) {
  letter[i] = genieVal[i];
  if (letter[i] === "h") {
    letter[i] = "z";
  }
  output += letter[i];
}
console.log(output);

//update feb 09, 2018
//Mainly four ways to create ann array but only one way to access them apparently
function emptySquareBrackets() {
  var createArr = [];
  createArr[0] = "foo";
  createArr[1] = "boo";
  createArr[2] = "too";
  console.log(createArr[0]); //foo
  return createArr;
}

function notEmptypSquarebrackets() {
  var createArr = ["foo", "boo", "too"];
}

function emptyNewArray() {
  var createArr = new Array();
  createArr[0] = "foo";
  createArr[1] = "boo";
  createArr[2] = "too";
}

function notEmptyNewArray() {
  var createArr = new Array("foo", "boo", "too");
}
//returning emptySquareBrackets() function inside this function to get its value
function runFourArrayFunctions() {
  var a = emptySquareBrackets();
  console.log(a); //["foo", "boo", "too"]
  console.log(a[0]); //foo
}
runFourArrayFunctions();

//create array with functions, objects and different data types
var diffTypes = [
  "dataTypes",
  { person: "newperson", occupation: "student" },
  function() {
    document.getElementById("arrayOutput").innerHTML = "Wats up";
  }
];
console.log(diffTypes[1].person); //newperson
console.log(diffTypes[1]); //{person: 'newperson', occupation: 'student'}
console.log(diffTypes[2]()); //wats up

//going to create three functions below and see if I can call them from inside an array and the last function has a parameter as well
function arrTest1() {
  console.log("arrTest1");
}

function arrTest2() {
  console.log("arrTest2");
}

function arrTest3(para) {
  console.log(para);
}

var arrTest = [arrTest1, arrTest2, arrTest3];
arrTest[0](); //arrTest1'
arrTest[2]("tes3 -> passing an argument"); //tes3 -> passing an argument

//Some examples to show how to play with arrays.
//example 1. Write a function that results in this (example is from thinkful)
var names = ["Bob", "Brenda", "Ishmael", "Earl"];
var compliment = " is great!";

function complimentGiver(name, comp) {
  var i,
    arr = [];
  for (i = 0; i < name.length; i++) {
    arr[i] = name[i] + comp;
  }
  console.log(arr);
}
complimentGiver(names, compliment); // Results in
// ['Bob is great!', 'Brenda is great!', 'Ishmael is great!', 'Earl is great!']

//example 2. Same as above, but using 'push'array to achieve the same results
function complimentGiver1(name, comp) {
  var i,
    arr = [];
  for (i = 0; i < name.length; i++) {
    var val = name[i] + comp;
    arr.push(val);
  }
  console.log(arr);
}
complimentGiver1(names, compliment);

var chicken = "spicy";

var food = [chicken, "burger", "pizza"];

//This example shows how to store a value to an array -> the source of this example is the pull down menu from bst/fst pages
var elemList = ["foo", "boo", "woo", "zoo"]; //this is could be an arry of DOM or anything
var store = [];
for (var i = 0; i < elemList.length; i++) {
  var newValue = elemList[i]; //we could do some magic here and then save it in a variable
  store[i] = newValue;
}
console.log(store); // ["foo", "boo", "woo", "zoo"]
