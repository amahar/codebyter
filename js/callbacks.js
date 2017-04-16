
// example of setting setTimeout() as a callback with anonymus function
document.getElementById('output').innerHTML += ('starting ...');
var myTimer = window.setTimeout(function() {
	document.getElementById('output').innerHTML += ('ending!');
}, 500);
document.getElementById('output').innerHTML += ('continuing ...');


// same function as above but without anonymus function
document.getElementById('output').innerHTML += ('starting ...');

// Wait half a second before firing the writeEnding() function
var myTimer = window.setTimeout(writeEnding, 500);

document.getElementById('output').innerHTML += ('continuing ...');

// Define the Write Ending Function
function writeEnding() {
    // Write "ending!"
    document.getElementById('output').innerHTML += ('ending!');
}



// example of callback
function processArray(arr, callback) {
    var resultArr = new Array(); 
    for (var i = arr.length-1; i >= 0; i--)
        resultArr[i] = callback(arr[i]);
    return resultArr;
}

var arr = [1, 2, 3, 4];
var arrReturned = processArray(arr, function(arg) {
	return arg * -1;});
console.log(arrReturned);// arrReturned would be [-1, -2, -3, -4]

//practice of above example

function arrcall(arr, callback) {
	arret = [];
	for(i=arr.length-1;i>=0;i--){
		arret[i] = callback(arr[i]);
	}
	return arret;
}

var arr = [1,2,3,4];
var arcal = arrcall(arr, function(arg){
	return arg*-1;
});
console.log(arcal);


//removed the anonymous function with a named function, "myVersion" function. 
function arrcalli(arr, callback) {
	arret = [];
	for(i=arr.length-1;i>=0;i--){
		arret[i] = callback(arr[i]);
	}
	return arret;
}

function myVersion(val){
	return val * -1; 
}

var arr = [1,2,3,4];
var arcali = arrcalli(arr, myVersion);
console.log(arcali);


















