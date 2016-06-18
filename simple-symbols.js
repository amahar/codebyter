var str = 'cb+c+c=+++=vb+==+e+=';
function SimpleSymbols(str) { 

  	var result = '';

  		for(i=0;i<str.length;i++) {

  			if(str[i].match(/[a-z]/i)){
 
				if(!((str[i-1] && str[i+1]) === '+')) {

					return false;

				} else {

					result = true;

				}
  			}

  		}

	console.log(result);

}
   
// keep this function call here 
SimpleSymbols(str);

function ymbols(str) { 


  var val = ('='+str+'=').match(/([^\+][a-z])|([a-z][^\+])/gi); 
  console.log(val);
         
}
   
// keep this function call here 
ymbols(str);                              
