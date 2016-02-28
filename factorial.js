//Factorial with for loop

function firstFactorial(num){
	temp = 1;
	for (i=2;i<=num;i++){
		temp = temp*i;
	}
		return temp;
}
var x = firstFactorial(4);  
console.log(x);

//Factorial wih while loop

function secondFactorial(num){

    if (num < 0){
        return -1;
        
    } else if (num == 0) {
        return 1;

    }else {
        var temp = num;
        while (num > 2){
            num--;
            temp = temp * num;
        } 
        return temp;
    }
}

var result = secondFactorial(4);
console.log(result);

// factorial with recursive function, example 1

function r(num, tot) {
  if (num < 2) {
    return tot;
  } else {
      return r(num - 1, tot * num);
  }
}
function thirdFactorial(num) {
  return r(num, 1);          
}
var x = thirdFactorial(4);  
console.log(x);

// Factorial with recursive function, example 2

function fourthFactorial(num) {

	if (num < 0){
		return -1;
	} else if (num == 0) {
		return 1;
	} else {
		return (num * fourthFactorial(num-1));
	}


}
var x = fourthFactorial(4);  
console.log(x);