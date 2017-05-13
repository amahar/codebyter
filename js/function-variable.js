var test = function (){

var ret = "test this";

    return{
        best: function (){
           return ret;
        }
    };

}

var x = test();

console.log(x); // why is this returning as an object ? // because this is actually calling test() function and returning the object
//console.log(x()); // error x is not a function
console.log(test()); // why is this returning as a object ? // because this is actually calling test() function
console.log(x.ret);//undefined
console.log(x.best()); // test this // am i able to do this because there is an object inside the function ? and returning the object
console.log(x.test); // undefined


