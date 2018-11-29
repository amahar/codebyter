//Scope is usually local within the function (lexical environment) the first three examples show that 
//example 1
var name = 'Richard';

function showName(){
	var name = 'bob';
	console.log(name);//bob
}

showName();
console.log(name);// Richard ->comes from line 3
/***********************************/

//example 2
var name = 'John';// we are changing the value of the global value

function showNameJohn(){
	var name = 'bobby';
	console.log(name);//bobby 
}

showNameJohn();
console.log(name);// john ->comes from line 15 value 

/***********************************/
//example 3
var name = 'smith';

function showNameJohnSmith(){
	 name = 'john smith';// becomes global because removed var and now we can call it outside the function scope
	console.log(name);//john smith

}
showNameJohnSmith();
console.log(name);// John Smith

/***********************************/
/*The next two examples show how the return value is used*/

//Example 1: This example only shows the 'returnValue()' is actually the returned value; 
function returnValue() {
	return 3; 
}
console.log(returnValue());//3

//Example 2: This example shows running one function inside another function
function foo() {
	return 'I am hungry';
}

function boo() {
	var x = foo();
	return 'I need food ' + x;
}
console.log(boo());// I need food I am hungry

/***********************************/
/*How to pass one value from one function to another*/

//Example 1
function passToValue() {
	var x = 5; 
	passFromValue(x);
}
function passFromValue(y) {
	console.log(y);//5
}
passToValue(); 

//Example 2
var globalVariable = 5; 
function passToValue1() {
	globalVariable = 9;
	passFromValue1();  
}
function passFromValue1() {
	console.log(globalVariable);//9
}
passToValue1(); 

//Example 3 
function passToValue2(){
	var x = 15;
	return x;  
}
function passFromValue2() {
	var y = passToValue2();
	console.log(y);//15
}
passFromValue2(); 

//Example 4 -> we can also use three functions as well (note, these are also constructor functions)
function New1() {
    this.a = 1;
}
function New2() {
    this.b = 2;
}
function new3() {
    var objnew1= new New1();
    var objnew2= new New2();
    console.log(objnew1.a);//1
    console.log(objnew2.b);//2
}
new3();//a less than b


//The below example is taken from 'https://css-tricks.com/understanding-javascript-constructors/' 
//An example showing constructor function without capitalizing the function name. So the result shows the constructor still works. But we captilize for convention to show that is a constructor.
function noCaps () {
	this.a = 1; 
}
var noCapsReturn = new noCaps();

console.log(noCapsReturn);// noCaps {a: 1} -> notice how this returns an object, since we have called it with 'new', we have initilized the object

console.log(noCaps);//ƒ noCaps() { this.a = 1; }

console.log(noCapsReturn.a);//1

console.log(noCapsReturn instanceof noCaps);//true
//console.log(noCaps instanceof noCapsReturn);//error ->right hand side not callable

console.log(typeof noCapsReturn);//object

console.log(typeof noCaps);//function

//have commented out the below two examples because, otherwise they were setting up variables in correctly. I should have done a function for each to provide them their own scope.
//console.log(noCaps = noCapsReturn);// noCaps {a: 1} -> Again, becuase of new, 'noCapsReturn' has become an object now

//console.log(noCapsReturn = noCaps);// ƒ noCaps() { this.a = 1; } //makes sure to comment the above before testing this, other it will produce an ojbect too, which would be incorrect

console.log(noCaps == noCapsReturn);// true
console.log(noCaps === noCapsReturn);//true

console.log(noCapsReturn.constructor == noCaps);//since the constructor property of noCapsReturn points to noCaps, it returns true. All objects inherit a constructor property from their prototype.


//example 1) expression function without a name is anonymous
var anny1 = function(){
	return 4; 
}; 
console.log(anny1());//4
var anny1return = anny1(); 
console.log(anny1return);//4


//self invoking function 
var anny1 = (function(){
	return 4; 
}()); 
console.log(anny1);//4

//function expression 
var newfunn = function(){ return 'this is two';}; newfunn(); 
console.log(newfunn());// this is two
console.log(newfunn);//ƒ (){ return 'this is two';}

//function expression with a parameter 
var newfunn = function(val){ return 'this is new ' + val;}; 
console.log(newfunn(4)); // this is a new 4

//function expression asigned to a variable, with a parameter
var newfunn = function(val){ return 'this is new ' + val;}; 
var newValue = newfunn(4);
console.log(newValue); //this is new 4

//functions expression can have a name as well, but its only used for the function to showup with a name in the debugger
var newfunn = function doesThisMatter(val){ return 'this is new ' + val;}; 
var newValue = newfunn(4);
console.log(newValue); //this is new 4



//this is example is from 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' and it shows how 
//a function expression can be passed as a variable BUT I wanted to see in this example is if the value 'fox(a[i])'
//gets executed inside the map function or comes back out to be executed where the fox function is being declared. So 
//I ran the function with break points, and found out that it runs at the fox function declaration. 
function map(foxes, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = fox(a[i]);
      return result;
}
var fox = function(axis) {
   return axis * axis * axis; 
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(fox,numbers);
console.log(cube);
