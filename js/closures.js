var retinaMacbook = function() {
 
    //Private variables
    var RAM, addRAM;
 
    RAM = 4;
 
    //Private method
    addRAM = function (additionalRAM) {
        RAM += additionalRAM;
    };
 
    return {
 
        //Public variables and methods
        USB: undefined,
        insertUSB: function (device) {
            this.USB = device;
        },
 
        removeUSB: function () {
            var device = this.USB;
            this.USB = undefined;
            return device;
        }
    };
};
var retinaMacbook1 = new retinaMacbook();
retinaMacbook1.insertUSB("myUSB");
console.log(retinaMacbook1.USB); //logs out "myUSB"
console.log(retinaMacbook.RAM) //logs out undefinedd


// this will have to be moved to function file

function construct(){

    //this.person = person;

    return{
        name: "asim",
        last: "mahar",
        grade: 'last'
    }

}

var newName = new construct();
console.log(newName.name);

// is this considered a closure ? this should be, because var ret is private can't be accessed from outside
var test = function(){

var ret = "test this";

    return{
        best: function (){
           return ret;
        }
    };

}

var x = test();
console.log(x.best()); // test this
console.log(x.test); // undefined



/////////basic example of closures from javascriptissexy.com
function showName(firstName, lastName){
    var nameIntro = "my name is ";

    function makeFullName() {
        return nameIntro + firstName + ' ' + lastName;
    }

    return makeFullName(); 
}

console.log(showName('Michael', 'Jackson'));


//another example

function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter​
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.​
console.log(mjName ("Jackson")); // This celebrity is Michael Jackson 

function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    return theCelebrities;
}
var actionCelebs = [{name:"stallone", id:0},{name:"Cruise",id:0},{name:"willis",id:0}];
var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
var stalloneID = createIdForActionCelebs [0];  
console.log(stalloneID.id()); // 103


