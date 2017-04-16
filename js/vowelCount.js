var str = "count number of vehicles";
function VowelCount(str) { 

	 var result = str.match(/[aeiou]/gi);
	 return result ? result.length:0;
         
}
   
// keep this function call here 
console.log(VowelCount(str));     