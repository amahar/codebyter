 // all about arrays: Arrays are created to access multiple values 

//**************
//create an array using, array literal

function arrLit(){
var memory = ['stack', 'heap', 'virtual'];
var access = memory[0];
var accTest = memory["1"];		//we can also access properties surrounded in quotes, which is one of the
var length = memory["length"];  //two ways to access property, other one being the dot notation.  
console.log(memory.length);
console.log(memory.stack); //undefined	
console.log(memory)                               
console.log(access);                               
console.log(accTest);
console.log(length);
console.log(memory[0]);
console.log(memory[1]);

//console.log(memory.0);// error
return memory;
}
console.log(arrLit());


//****************
//create an array example 2

function arr() {
var controlFlow = [];
controlFlow[0] = 'instructions';
controlFlow[1] = 'registers';
controlFlow[2] = 'threads';
controlFlow['js'] = 'single';
controlFlow['createObj'] = {obj:'object created'}//object inside an array. 
console.log(controlFlow['createObj']);//calling of the object
console.log(controlFlow[0]);

console.log(typeof(controlFlow)); // returns object, since array is an object.
//controlFlow[php] = 'not sure'; // error - since php is not defined. 
return controlFlow;
// for(i=0; i < controlFlow.length; i++){
// 	console.log(controlFlow[i]);
// }
}
console.log(arr()); //need to find out how to access the 'js' property !

//***************
//assign new value to array index '0'

memory[0] = 'LIFO';
var assignNaccess = memory[0];
console.log(assignNaccess);

//**********
//you can loop over an array example 1
//var forLoop = '';

for (i=0;i < memory.length; i++){

	 console.log(memory[i]);
}

 //**********
 //another method to loop over

methodTwo = '';
memory.forEach(function (item, index, array){
	
	methodTwo += item;
});

console.log(methodTwo);




