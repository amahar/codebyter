
// 
var name = 'Richard';

function showName(){
	var name = 'bob';
	console.log(name);
}

showName();// bob
/***********************************/

// 
name = 'Richard';// global - removed var

function showName(){
	var name = 'bob';
	console.log(name);
}

showName();// bob

/***********************************/
//
name = 'Richard';

function showName(){
	name = 'bob';// global - removed var

}

showName();// bob

/***********************************/

name = 'Richard';

function showName(){
	name = 'bob';// global - removed var

}

showName();// bob
//console.log(name);





