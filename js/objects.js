//Ways of defining objects - (4 for now)
//two ways to access object properties, [''] and .(dot) methods. 

//need examples of factory functions and more constructors

//*******************************
// method 1 - object literal

drone = {};

// assigning values using .(dot) method
drone.copter = "four";
drone.camera = "20MP";
drone.blades = function() {
  return console.log('lets fly');

}
console.log(drone.copter);
console.log(drone.camera);
console.log(drone.blades());//lets fly 
console.log(drone['copter']);//four

// assigning values using the [] notation

drone['rotation'] = '360';
//assigning arrays to object properties 
drone['controls'] = ['up', 'right', 'down', 'left'];
drone.manuf = ['google', 'apple', 'phantom'];

console.log(drone.rotation);//360
console.log(drone['rotation']);//360

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
//mixing up array as a variable(or property) to an object. Only reason I am doing this is because Todd had mentioned something like this to remove duplicates for the SEO Landing pages of BST and FST

var tireArr = ['hello', 'bye'];
var tireObj = {}; 
tireObj[tireArr] = tireArr[0];
console.log(tireObj);

//********************************


//********************************
// method 2 - Object.create() 

var house = {

	color:'blue',
	windows:'clear',
	rooms: ['master', 'living', 'guest']
	//garage: two; 

};
//console.log(house[color]); error -> color is not defined
console.log(house['color']);// blue

// iterates over enumerable properties
for (var key in house) {

	console.log('key : '+ key + ', value : ' + house[key]);//key : color value : blue //key : windows value : clear
														  //key : rooms value : master,living,guest
  console.log(house.color);//blue ->this will run three times, because the loop iterates three times for 3 keys in the house object         
                           //And the reason it outputs the correct value is because, its a valid statement. It's not relying in anyway on the key from the loop 
}
//notice if we do this without the for..in loop
//console.log(house[color]);// error color is not defined //above 'house[key]' works because key becomes a variable (check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

console.log(house['color']); //blue
var asimHouse = Object.create(house);
console.log(asimHouse.color); //blue
console.log(asimHouse['windows']);// access property using [] notation // clear

//console.log(asimHouse[color]); //error - because 'color' is not defined

//ways to output the array values; 
console.log(asimHouse['rooms']); //outputs the array 
console.log(asimHouse['rooms'][0]);// output: master
console.log(asimHouse.rooms[0]); // output: master

console.log(asimHouse['rooms.0']);// undefined b/c programs treats 'rooms.0' as one property
console.log(house);
console.log(asimHouse);
asimHouse.color = 'yellow';
console.log(asimHouse.color);//yellow

//********************************
// method 3 - new Object()

var stringProp = "changeName" 

var house1 = new Object();
// three ways to assign values to the p
house1.color = "purple";
house1["windows"] = "dusty";
console.log(house1[stringProp]);//udefined because 'stringProp' is not part of the house1 object 
house1[stringProp] = "newName";//assigned a variable declared above, stringProp = "changename";
                 //since stringProp is a variable, we don't assign quotes

//console.log(house1[color]); // undefined because color is not a variable, and not defined
console.log(house1["color"]);
console.log(house1.color);
console.log(house1["windows"]);//access property using [] notation
console.log(house1.windows); //access prooerty using dot method
console.log(house1[stringProp]);// ->newName, because on line 89 we assigned the variable to "newName" value

console.log(house1);

for(var i in house1){
	if(house1.hasOwnProperty(i))
	console.log(i);
}

//****************************************************
// method 4 - Constructor object

function Person(name,age,sex){
  var privat = 'local scope';//notice how this is private, and can't access from outside
	this.name = name;
	this.age = age;
	this.sex = sex;
}


var asim = new Person("Asim Mahar",37,"Male");
console.log(asim);//Person {name: "Asim Mahar", age: 37, sex: "Male"}
console.log(asim.name);//Asim Mahar
console.log(asim.privat);//undefined

function Airplane(model,year,manuf,owner){
	this.model = model;
	this.year = year;
	this.manuf = manuf;
	this.owner = owner;
}

var asim = new Person("Asim Mahar",37,"Male");

//notice how 'asim' object is being passed as a parameter: very important concept
var myPlane = new Airplane(320,2016,"Boeing",asim);
console.log(myPlane.model);
console.log(myPlane.manuf);

// calling an abject inside another object
console.log(myPlane.owner);

console.log(myPlane.owner.name);
console.log(myPlane.owner.age);
console.log(asim.name);


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

console.log(obj); // ColoredTriangle {color: "red"}
for (var key in obj) {
  if( obj.hasOwnProperty(key) ) {
    console.log("obj." + key + " = " + obj[key]);//obj.color = red
    console.log(obj.key);// undefined // i think this is undefined because 'key' in this context is a different value
                        //  its not the new var key defined in the loop. 
    console.log(obj['key']);//undefined // i think this is undefined because 'key' in this context is a different value
                            //its not the new var key defined in the loop. 
    console.log(obj[key]); //red -> key gives us a value, because its the variable key from the loop
  } 
}



//object.keys - from david walsh article - compare this with example above with 'hasOwnProperty':

var person = {
  firstName: 'David',
  lastName: 'Walsh',
  // ...
};

 Object.keys(person).forEach(function(trait) {
	console.log(trait);
  console.log('Person ', trait,': ', person[trait]);
});

//same as above solution 
var newobj = Object.keys(person);
console.log(newobj);
console.log(person[newobj[0]]);


////another example of iterating throught the objects
var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");

/*example to show hasOwnProperty(), it simply checks if obj has that property, specially up the prototype chain -> don't get hung up on this*/

var obj = {}; 
obj.country = 'usa';
obj.state = 'va';
obj.city = 'manassas';
obj.valueOf = 'prince william';
for(var key in obj) {
  if(obj.hasOwnProperty(key)){
    console.log(`key: ${key}, value: ${obj[key]}`);
  }
}
console.log(obj);

//same as above but in this case I will try to output the object property value
var nation = {}; 
nation.country = 'usa';
nation.state = 'va';
nation.city = 'manassas';
nation.valueOf = 'prince william';
var newNation = Object.keys(nation);
// Object.keys(nation).forEach(function(keys){
//   console.log('key is:' + key + ', value is' + nation[key]);
// });
newNation.forEach(function(key) {
  console.log('anything is:'+key+', value is:'+ nation[key]);
});



/*dealing with functions inside an object*/
/*also notice the 'this' which is bascially calling the current object*/
var buildGame = {
  gameEngine: 'Unity3D',
  progLang: 'C#',
  theme: 'undecided',
  readyTime: function() {
    return `I need pick ${this.gameEngine} as my tool to build games`;
    //the following statement would return the same:
    //return `I need pick ${buildGame.gameEngine} as my tool to build games`; //replaced this -> with object (buildGame);
  }
}
console.log(buildGame.readyTime());//I need pick Unity3D as my tool to build games

var changeEngine = new Object(buildGame);
//var changeEngine = new buildGame(); //remember this will not work as this the way you create a constructor function ->look example number 4 above; 
changeEngine.gameEngine = 'javascript';
console.log(changeEngine.readyTime()); 


//Examples used in hackchapter 
//new note on june 07, 2018. Lookslike the below will not work because 'this' works with constructors and function objects -> need to research this a bit more 
// var House = {
//   this.type = 'single family',
//   this.rooms = '4 bedrooms',
//   this.basement = 'walkout'
// }







