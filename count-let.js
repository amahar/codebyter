var newstr = 'we are going to return this';
 function count(newstr) {

 	letcount = {};

 	for (i = 0; i < newstr.length; i++) {

 		letcount[newstr[i]] = letcount[newstr[i]] ? letcount[newstr[i]] + 1: 1;
 		
 	}

 	return letcount;

 }

 console.log(count(newstr));



// Object.size = function(obj) {
// 	var size = 0;
// 	for(key in obj) {
// 		if(obj.hasOwnProperty(key)) size++;
// 	}
// 	return size;
// }

//initial vars
// var str = 'hellodavidthisisatestofobjectusage';
// var letters = []; //also works with {};

// //loop, figure it out
// for(x = 0, length = str.length; x < length; x++) {
// 	var l = str.charAt(x)
// 	//letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
// 	if (isNaN(letters[l])) {
// 		letters[l] = 1;
// 	} else {
// 		letters[l] = letters[l] + 1;
// 	}
// }

// //output count!
// for(key in letters) {
// 	console.log(key + ' :: ' + letters[key]);
// }
//console.log(Object.size(letters));

// var str = 'hellodavidthisisatestofobjectusage';
// var letters = {};

// for (var x = 0, y = str.length; x < y; x++) {
// letters[str[x]] = letters[str[x]] + 1 || 1;
// }
// console.log(letters);


var str = 'hellodavidthisisatestofobjectusage';
var letters = {};

for (var x = 0, y = str.length; x < y; x++) {
letters[str[x]] = letters[str[x]] ? letters[str[x]] + 1 : 1;
}
console.log(letters);

var str = 'hellodavidthisisatestofobjectusage';
var letters = {};

for (var x = 0, y = str.length; x < y; x++) {
	if(letters[str[x]]){
		letters[str[x]] = letters[str[x]] + 1;
	} else {
		letters[str[x]] = 1
	}

}
console.log(letters);



// function letterCount(str) {
//     var ret = {},
//         len = str.length;
//     str = str.split('').reverse();
//     while (len--) ret[str[len]] = ret[str[len]] + 1 || 1;
//     return ret;
// }
// console.log(letterCount('hellodavidthisisatestofobjectusage'));





var str = 'coconut';
var strin = [];
	for(i=0; i < str.length; i++ ){

		var l = str.charAt(i);
// you are undefining 'string[l]' untill you assign a value '1' to it. 

 		console.log(strin[l]);
		 if(isNaN(strin[l])){ 
		 	strin[l] = 1;
		 } else {
		 	strin[l] = strin[l] + 1; 
		 }
	}


for(key in strin) {
	console.log(key + ' :: ' + strin[key]);
}
