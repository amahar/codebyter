	
	//we are getting the values here from dom, remember `innerHTML is a property of
	//the element object 


	//we are GETTING the value now 
	var withInner= document.getElementById('exampleOne').innerHTML;

	//we are SETTING the value here
	var setvalue = document.getElementById('resultOne');
	setvalue.addEventListener('click', changeText);

	function changeText() {
		setvalue.innerHTML = 'we have changed the the original value here';
	}


	//this about it, this is not going to work because by using .innerHTML in first line of code
	//you have already set the value of 'testValue';
	
	var testValue = document.getElementById('resultTwo'); 
		console.log(testValue)//
		testValue.innerHTML = 'why is this not working?';	// because 'testValue' is an acutal value from DOM not a setter o
		console.log(testValue);


//see if this is true: - If .innerHTML is on left side of expression then it is setting a valude
//if it is on right side of expression, then it is a getter. 