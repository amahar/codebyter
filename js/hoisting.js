// Error, fn is called before the function is assigned!
fn();
var fn = function () { alert("test!"); } 

// Works as expected: the fn2 declaration is hoisted above the call
fn2();
function fn2() { alert("test!"); }











