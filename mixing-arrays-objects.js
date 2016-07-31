//an array inside an object

var obj = {
	name:['foo','boo','too'],
	ages:[40,30,20],
}

console.log(obj);//Object {name: Array[3], ages: Array[3]}
console.log(obj.name);// ["foo", "boo", "too"]
console.log(obj.ages[1]); // 30

//object inside an array
var arr  = ['elem0', 
			{house:'ranch',driveway:'gravel'},
			'elem2',obj
		];

console.log(arr);// ["elem0", Object, "elem2", Object]			
console.log(arr[0]);//elem0
console.log(arr[1].house);//ranch
console.log(arr[1]['house']);//ranch	

//accessing the obj inside the array
console.log(arr[3]); //Object {name: Array[3], ages: Array[3]}
console.log(arr[3].Obj);//undefined  - because notice 'arr[3]' already === 'obj' so we access the property below:
console.log(arr[3].name);// ["foo", "boo", "too"]
console.log(arr[3].ages[2]);// 20 


//objects inside object

//object inside an object example

var car = {
 doors:"four",
 color:"black",
 enginge:function(param){
 	return "four cylinder" == param?"honda":"bmw";
 },
type:{
	wolkswagon:"passat",
	chrysler:"300M"
}

};

console.log(car.enginge("six cylinder"));//bmw
console.log(car.type.wolkswagon)//passat

//the above example could also be structured like this:
var car = {};
//notice the 'type' object created inside the car object just like the above example
car.type = {
	wolkswagon:"passat",
	chrysler:"300M"
}
car.engine = function(param){
	return "four cylinder" == param?"honda":"bmw";
}
console.log(car.type.wolkswagon);//passat
console.log(car.engine("six cylinder"));//bmw 

var golf = {};
golf.ball = {

}