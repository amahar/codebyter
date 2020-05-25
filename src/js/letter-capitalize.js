var str = "aem is the content management system";
var strr = "aem is the content management system";
function letterCap(str) {
  newstr = str.split(" ");
  for (i = 0; i < newstr.length; i++) {
    newstr[i] = newstr[i][0].toUpperCase() + newstr[i].slice(1);
  }

  finalword = newstr.join(" ");
  return finalword;
}

console.log(letterCap(str));

//using if-else method:

function letterCap2(strr) {
  newstrr = str.split("");
  newWord = "";

  for (i = 0; i < newstrr.length; i++) {
    if (i == 0 || newstrr[i - 1] == " ") {
      newWord += newstrr[i].toUpperCase();
    } else {
      newWord += newstrr[i];
    }
  }

  return newWord;
}

console.log(letterCap2(strr));
