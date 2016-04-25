//Ways of defining objects - (4 for now)
//two ways to access object properties, [''] and .(dot) methods. 


//*******************************
// method 1 - object literal

drone = {};

// assigning values using .(dot) method
drone.copter = "four";
drone.camera = "20MP";
console.log(drone.copter);
console.log(drone.camera);

// assigning values using the [] notation

drone['rotation'] = '360';
//assigning arrays to object properties 
drone['controls'] = ['up', 'right', 'down', 'left'];
drone.manuf = ['google', 'apple', 'phantom'];

console.log(drone.rotation);
console.log(drone['rotation']);

//outputs of array
console.log(drone.controls);
console.log(drone['controls']);
console.log(drone['controls'][0]);
console.log(drone.controls[0]);
//console.log(drone.controls.0); // error

console.log(drone.manuf);
console.log(drone['manuf']);
console.log(drone['manuf'][0]);
console.log(drone.manuf[0]);



//********************************
// method 2 - Object.create() 

var house = {

	color:'blue',
	windows:'clear',
	rooms: ['master', 'living', 'guest']
	//garage: two; 

};


var asimHouse = Object.create(house);
console.log(asimHouse.color);
console.log(asimHouse['windows']);// access property using [] notation

//console.log(asimHouse[color]); //error - because 'color' is not defined

//ways to output the array values; 
console.log(asimHouse['rooms']); //outputs the array 
console.log(asimHouse['rooms'][0]);// output: master
console.log(asimHouse.rooms[0]); // output: master

console.log(asimHouse['rooms.0']);// undefined b/c programs treats 'rooms.0' as one property
console.log(house);
console.log(asimHouse);

//********************************
// method 3 - new Object()

var stringProp = "changeName" 

var house1 = new Object();
// three ways to assign values to the p
house1.color = "purple";
house1["windows"] = "dusty";
house1[stringProp] = "newName";//assigned a variable declared above, stringProp = "changename";
							   //since stringProp is a variable, we don't assign quotes

//console.log(house1[color]); // undefined because color is not a variable, and not defined
console.log(house1["color"]);
console.log(house1.color);
console.log(house1["windows"]);//access property using [] notation
console.log(house1.windows); //access prooerty using dot method
console.log(house1[stringProp]);

console.log(house1);

for(var i in house1){
	if(house1.hasOwnProperty(i))
	console.log(i);
}

//****************************************************
// method 4 - Constructor object

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
