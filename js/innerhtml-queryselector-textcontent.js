//difference between textContent and innerHTML is that, innerHTML is able to parse html whereas textContent can only get text, and can't parse the html. But textContent is faster. 


	var withInner= document.getElementById('exampleOne');
		console.log('withInner value without innerHTML is:',withInner);

	//we are GETTING the value now 
	var withInner= document.getElementById('exampleOne').innerHTML;
		console.log('withInner value with innerHTML is:',withInner);
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
		testValue.innerHTML = '<h2>why is this not working?</h2>';	// because 'testValue' is an acutal value from DOM not a setter o
		console.log(testValue);


//see if this is true: - If .innerHTML is on left side of expression then it is setting a valude
//if it is on right side of expression, then it is a getter. 

//**********************************************************//
//Going to test textContent and querySelector
//querySelector selects the first element that matches. Use querySelectorAll for selecting all elements, and then apply an array to get a specific element. 

	var text = document.querySelector('#exampleOne');
	console.log('using querySelector to get exampleone without textContent:', text);

	var textCont = document.querySelector('#exampleOne').textContent;
	console.log('using querySelector to get exampleone with textContent:', textCont);


	text.textContent = 'we are changing text using textContent';


