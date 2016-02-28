//Ways of defining objects

//*******************************

// Object.create() 
var house = {

	color:"blue",
	windows:"clear"

};

var asimHouse = Object.create(house);
console.log(asimHouse.color);
console.log(asimHouse["windows"]);// access property using [] notation
console.log(house);
console.log(asimHouse);

//********************************

// new Object()
var stringProp = "changeName"

var house1 = new Object();
house1.color = "purple";
house1["windows"] = "dusty";
house1[stringProp] = "newName";//assigned a variable declared above, stringProp = "changename";

console.log(house1.color);
console.log(house1["windows"]);//access property using [] notation
console.log(house1[stringProp]);
console.log(house1);

for(var i in house1){
	if(house1.hasOwnProperty(i))
	console.log(i);
}

//**************************************************

//object inside an object example

var car = {
 doors:"four",
 color:"black",
 enginge:function(param){
 	return "four cylinder" == param?"honda":"bmw";
 },
type:{
	wolkswagon:"passat",
	chrysler:"300M"
}

};

console.log(car.enginge("six cylinder"));
console.log(car.type.wolkswagon)

//****************************************************

//Creating variables first and then assigning them in the object

var head = "one", arms = "two", legs = "two";
//ECMA 6
var human = {head, arms,legs};

console.log(human.legs);

//****************************************************

//Constructor object

function Person(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}

var asim = new Person("Asim Mahar",37,"Male");
console.log(asim.name);

function Airplane(model,year,manuf,owner){
	this.model = model;
	this.year = year;
	this.manuf = manuf;
	this.owner = owner;
}

var myPlane = new Airplane(320,2016,"Boeing",asim);
console.log(myPlane.model);
console.log(myPlane.manuf);

// calling an abject inside another object
console.log(myPlane.owner);
console.log(myPlane.owner.name);
console.log(myPlane.owner.age);

//*********************************************************

//var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

//ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log("obj." + prop + " = " + obj[prop]);
  } 
}

// Output:
// "obj.color = red"
