//must read the events chapter in eloquent.js
//addEventListener is method from eventTarget


//event mousedown 
var objectRef = document.getElementById('event-input');

console.log('obj: ', objectRef);

objectRef.addEventListener('click', clickHandler);
//objectRef.addEventListener('mousedown', clickHandler);

function clickHandler(evt) {
	console.log(evt);
	 evt.preventDefault();
 //    console.log('mouse was clicked', arguments);
 //    console.log('agr 0 ', arguments[0]);
 //    console.log('agr 0 ', arguments[1]);
}


// function wtf(a, b) {
//     console.log('wtf', arguments);
//     console.log('a: ', arguments[0]);
// }

// wtf('hi', 'asim');
// wtf('hi', 'asim', 'todd');

//************************************

var mouseDown = document.getElementById('mouse-down');
document.addEventListener('mousedown', mousedDowned);
function mousedDowned (event) {

	if(event.which == 1) {
		console.log('left button');
	}

	else if ( event.which == 2 ) {
		console.log('middle button');
	}

	else if (event.which == 3){
		console.log('right button',event.which,event.type);
	}

}

//**********************************
window.addEventListener('load', loaded);
function loaded (event) {

	console.log(event);
	console.log(event.target);

}
//**********************************

//event stopPropagation example:
var header = document.querySelector('h2');
var but = document.querySelector('button');

header.addEventListener('click', head);
but.addEventListener('click', butt);

function head (event) {
	console.log('header is clicked');
	console.log(event);
	console.log(event.clientX);
	console.log(event.clientY);
	console.log(event.target);

}
function butt (event) {
	console.log('button is clicked');
	console.log(event);
	console.log(event.target);
	console.log(event.clientX);
	console.log(event.clientY);
	event.stopPropagation(); 
	//this is stopping propagation within that element,
	//how do we traverse further up ?
}


