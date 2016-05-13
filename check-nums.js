num1 = 14;
num2 = 12; 
function CheckNums(num1,num2) { 

  if(num2 > num1){

  	return true; 

  } else if (num2 < num1) {

  	return false; 

  } else {

  	return -1;

  }
         
}
   
console.log(CheckNums(num1,num2));


//another much shorter and simpler solution
function CheckNums1(num1,num2) { 

  if (num1 == num2) {

    return "-1"; 

  } else {

    return (num2 > num1); 

  }   

}

console.log(CheckNums1(num1,num2)); 

//another even simpler solution
function CheckNums2(num1,num2) { 

	if(num1 == num2) return -1;

	else {

		return (num2 > num1);

	}    
}

console.log(CheckNums2(num1,num2)); 

//good example to remember ternary
function CheckNums3(num1,num2) { 

	return num1 === num2 ? -1 : num1 < num2 ? true: false;

}

console.log(CheckNums3(num1,num2)); 



