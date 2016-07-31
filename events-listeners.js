//addEventListener is method from eventTarget


//event mousedown 
var objectRef = document.getElementById('event-input');

console.log('obj: ', objectRef);

document.addEventListener('click', clickHandler);
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