var x = function () {
	return 3;
}

console.log(x); // incorrect as it gives you the whole expression, without evaluating the function
console.log(x()); //3



// example showing nested function 
function foo (a, b) {

	function boo () {
		return a+b; 
	}

	return boo(); 
}
console.log(foo(6, 6)); // 12


///below is an example where the function is returning an object 
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