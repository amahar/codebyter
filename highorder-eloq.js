// function forEach(array, action) {

// 	for (i=0; i < array.length; i++)
// 		action(array[i]);
	
// }

// forEach(['asim','learning','high','order'],alert);

// high order 

function greaterThan(n) {
  return function(m) { 
  	return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true



//simple closure example, so whats the difference between closures and high order ? 

function adder(x) {
  return function(y) {
    return x + y;
  }
}

var add3 = adder(3);
var add5 = adder(5);

console.log(add3(5)); // 8
console.log(add5(5)); // 10

// high order 

function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false

//hig order 

function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even