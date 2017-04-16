//few practices with Document object of Javascript, which is a property of global object window

//document.getElementsByClassName return collection of elements in a Nodelist object
function getClass(name){

	var local1 = 'output this name: ' + name;
	document.getElementsByClassName('input')[0].innerHTML = local1;

	return local1; 

}

console.log(getClass('asim'));//output this name: asim


//document.getElementById returns the specific id from dom
function getId(work){

	var local2 = 'output this work: ' + work;
	document.getElementById('input').innerHTML = local2;
	return local2; 
}

console.log(getId('Javascript'));