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

// is this considered a closure ?
var test = function(){

var ret = "test this";

    return{
        best: function (){
            console.log(ret);
        }
    };

}

var x = test();
x.best();
