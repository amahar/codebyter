//couple of examples for null values and see how they can be used:

var str = "somevaluetring";
function nulexamp (str) {

	var check = str.match(/[^a-z]/);
	console.log(check);

}

nulexamp(str);//outputs null;

//another example

function nulexampp (str) {

	var check2 = str.match(/''/);
	console.log(check2);

}

nulexampp(str);
