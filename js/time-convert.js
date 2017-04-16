
//this is a very long and stupid way !!
num = 140;

function TimeConvert(num) { 

	if(num%60 == 0) {

		var hour = num/60; 
		var mns = '0';

	} else {

	result = num/60; 
	rult = result.toString();
	sliceHere = rult.indexOf('.');
	addright = '';
	addleft = '';

	for (i = sliceHere; i<=rult.length-1; i++) {
		addright = addright + rult[i];
	}
	for (i = 0; i<sliceHere; i++) {
		addleft = addleft + rult[i];
	}
	var mns = Math.round(addright*60);
	var hour = addleft;
	
 }

  return hour+':'+mns;
         
}
   
// keep this function call here 
console.log(TimeConvert(num));  


//simpler way

function TimeConvert(num) { 
  var hours = Math.floor(num/60);
  var minutes = num % 60;
  var str = hours + ":" + minutes;
  return str;
  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(TimeConvert(num));     