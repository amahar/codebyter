// examples are from article: https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know

//module design

//notice the self invoking function
var HTMLChanger = (function() {
  var contents = "contents";

  var changeHTML = function() {
    var element = document.getElementById("input");
    console.log(element);
    element.innerHTML = contents;
  };

  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };
})();

HTMLChanger.callChangeHTML(); // outputs: contents
console.log(HTMLChanger.contents); //outputs: undefined

//another modular example

var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log("Inside a private method");
    privateVariable++;
    //console.log(privateVariable);
    return privateVariable;
  };

  var methodToExpose = function() {
    console.log("This is a method I want to expose");
  };

  var otherMethodIWantToExpose = function() {
    privateMethod();
  };

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose,
    third: privateMethod
  };
})();
Exposer.first(); //output: This is a method I want to expose!
Exposer.second(); //output: Inside a private method!
Exposer.methodToExpose; //underfined
Exposer.third(); //output: inisde a private method
console.log(Exposer.third()); //ouput: 13
console.log(Exposer.privateVariable); //output: undefined

//prototype design pattern

var TeslaModelS = function() {
  this.numberWheels = 4;
  this.manufacturere = "Tesla";
  this.make = "Model S";
};

TeslaModelS.prototype.go = function() {
  console.log("rotate wheels");
};

TeslaModelS.prototype.stop = function() {
  console.log("apply brakes");
};

var TeslaModelX = new TeslaModelS();
TeslaModelX.stop(); // apply brakes
console.log(TeslaModelX.numberWheels); // 4

//to be continued with singleton and observer design patterns
