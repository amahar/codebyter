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


//upadate Feb 09, 2018
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


//Does return on work with function expression? let's find out (All 'return' values in the 'fourDesignPattern.js' at least are from all function expressions)
var funcExpr = function () {
	var local = 'local variable';

	return {

	}
}


//factory function, it returns an object
var factFun = (function() {
	return {
		learn:'factory function',
		language: 'javascript'
	}
})(); 
console.log(factFun);
console.log(factFun.learn);

//look at file, 'fourDesignPattern.js' to see more return examples



// Lecture: Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');
interviewQuestion('teacher')('Mark');