	
	//we are getting the values here from dom, remember `innerHTML is a property of
	//the element object 
	var withOutInnner = document.getElementById('exampleOne');


	//we are GETTING the value now 
	var withInner= document.getElementById('exampleOne').innerHTML;
	console.log(withOutInnner);//<h1 id="exampleOne">Example 1</h1>
	console.log(withInner);// Example 1

	//we are SETTING the value here
	var setvalue = document.getElementById('resultOne');
		setvalue.innerHTML = 'we have changed the the original value here';


	//this about it, this is not going to work because by using .innerHTML in first line of code
	//you have already set the value of 'testValue';
	
	var testValue = document.getElementById('resultTwo').innerHTML; 
		console.log(testValue)//
		testValue = 'why is this not working?';	// because 'testValue' is an acutal value from DOM not a setter o