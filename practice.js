
var str = "hello world";
function letter(str) {

	eachnumber = '';
	eachchar = '';

	for (i=0; i < str.length; i++) {

		eachnumber = (str.charCodeAt(i)+1);
		if(eachnumber == '123'){
			eachnumber = '97';
		}
		eachchar = eachchar + String.fromCharCode(eachnumber);
		// eachchar = eachchar.replace(/z/g,'a');

	
	}

	eachchar = eachchar.replace(/a/g,'A').replace(/e/g,'E')
				.replace(/i/g,'I').replace(/o/g,'O').replace(/u/g,'U')
				.replace(/!/g,' ');
				;
	// for (j=0; j < eachletter.length; j++) {

	// 		eachchar = eachchar + String.fromCharCode(eachletter);
	// }


	console.log(typeof(eachnumber));
	console.log(typeof(eachchar));
	return eachchar;
}

console.log(letter(str));



