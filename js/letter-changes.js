var str = 'I love javascript and all frontend tools';

function letterChange(str){
  return str.replace(/[a-z]/ig,function(c){
    var next = String.fromCharCode(c.charCodeAt() + 1);
    if(/[aeiou]/g.test(next)){
      next = next.toUpperCase(); 
    }
    return c == 'z' ? 'A' : c == 'Z' ? 'A' : next;
  }); 
}
console.log(letterChange(str));


// website solution

function LetterChanges(str) { 

  // we will replace every letter in the string with the letter following it
  // by first getting the charCode number of the letter, adding 1 to it, then 
  // converting this new charCode number to a letter using the fromCharCode function
  // we also check to see if the character is z and if so we simply convert the z to an a
  var converted = str.replace(/[a-z]/gi, function(char) { 
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

  // we have now successfully converted each letter to the letter following it
  // in the alphabet, and all we need to do now is capitalize the vowels
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
    return vowel.toUpperCase();
  });

  // return the final string
  return capitalized;
         
}
   
console.log(LetterChanges("fun times!")); 


//partial solution

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

	return eachchar;
}

//



