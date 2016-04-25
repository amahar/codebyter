//Reverse string using JS methods

var str = 'I want to learn JavaScript';
function string(str){

	var revStr = str.split('').reverse().join('');
	return revStr;
}

console.log(string(str));

//Revers string using loop method

function strLoop(str){

	var revStr = '';
	for(var i = str.length-1;i>=0;i--){
		 revStr+= str.charAt(i);
	}
		return revStr;
}

console.log(strLoop(str));

//Reverse string using single array method, we can use str[i] because string can be treated like an array here. 

function strArr(str){

	var revStr = '';
	for(var i = str.length-1; i >= 0; i--) {
		var revStr = revStr + str[i];
	}
		return revStr;
}
console.log(strArr(str));

//Reverse string using double array method

function strDbArr(str){

	var revStr = [];
	for(var i = str.length-1, j = 0; i >= 0; i--, j++){

		revStr[j] = str[i];
	}
		return revStr.join('');
}
console.log(strDbArr(str));

