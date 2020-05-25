//example showing prototype - notice how prototype chain is working for the Customer method.
//example taken from mozilla and modified with notes

var Person = function() {
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log("Hi, I am " + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this);
  this.name = name;
  this.title = title;
};

Employee.prototype = new Person();
//this is same as:
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log("Hi, I am " + this.name + ", the " + this.title);
  }
};

var Customer = function(name) {
  Person.call(this);
  this.name = name;
};

Customer.prototype = new Person();
//this is same as:
// Customer.prototype = Object.create(Person.prototype);
// Customer.prototype.constructor = Customer;

// Customer.prototype.greet = function() {
// 	if(this.canTalk) {
// 		console.log(this.name+' will stop prototype chaining');
// 	}
// }

var Mime = function(name) {
  Person.call(this);
  this.name = name;
  this.canTalk = false;
};

Mime.prototype = new Person();
//this is same as:
// Mime.prototype = Object.create(Person.prototype);
// Mime.prototype.constructor = Mime;

var bob = new Employee("Bob", "Builder");
var joe = new Customer("Joe");
var rg = new Employee("Red Green", "Handyman");
var mike = new Customer("Mike");
var mime = new Mime("Mime");

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();
