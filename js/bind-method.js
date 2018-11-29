$(document).ready(function(){

		var user = {
			data:[
				{name:"T.Woods", age:37},
				{name:"P.Mickelson", age: 43}
			],
			clickHandler:function(event) {
				console.log(this);//<button></button>
				
				var randomNum = ((Math.random()*2|0) + 1) - 1;

				$("input").val(this.data[randomNum].name+" "+this.data[randomNum].age);
			}
		}

		$("button").click(user.clickHandler.bind(user));
});
var person = (function(el){
	console.log(el);
 return {
   set age(v){
    el.value = v;
   },
   get age(){
     return el.value;
   }
 };
})(document.getElementById("age"));
person.age=15;
//person.age=25;