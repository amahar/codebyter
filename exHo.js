var str = "oxoxoxoxo";
function ExOh(str) { 


   var axes = str.match(/x/gi);
   if(axes == null ) {
   		axes = 0;
   	} else {
   		axes = axes.length; 
   	}


   var zeroes = str.match(/o/gi);
   	if(zeroes == null ) {
   		zeroes = 0;
   	} else {
   		zeroes = zeroes.length; 
   	}
   
  return axes == zeroes; 
         
}
   
// keep this function call here 
console.log(ExOh(str));


var strr = "o";
function ExOhh(strr) { 

	var zeroes = strr.split(/x/i);
		console.log(zeroes);
	 console.log(zeroes.length); 
   // return strr.split(/x/i).length === strr.split(/o/i).length; 
   var axes = strr.split(/o/i);
   console.log(axes);
	console.log(axes.length); 
         
}
   
// keep this function call here 
console.log(ExOhh(strr));

