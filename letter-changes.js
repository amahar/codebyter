var str = 'I love javascript and all frontend tools';

function letterChange(str){
  return str.replace(/[a-z]/ig,function(c){
    var next = String.fromCharCode(c.charCodeAt() + 1);
    if(/[aeiou]/g.test(next)){
      next = next.toUpperCase(); 
    }
    return c == 'z' ? 'A' : c == 'Z' ? 'A' : next;
  }); 
}
console.log(letterChange(str));

function letterChange1(Str){

	for(i=0; i<=str.length; i++){

	}
}

console.log(letterChange1(str));

var test = function(){

var ret = "test this";
	return{
		best: function (){
			console.log(ret);
		}
	};

}

var x = test();
x.best();

