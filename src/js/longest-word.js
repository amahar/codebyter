var str = "I love javascript and all frontend tools";

function longWord(str) {
  var words = str.split(" ").sort(function(a, b) {
    return b.length - a.length;
  });
  return words.shift();
}

console.log(longWord(str));

//Using regular expression
function longWord1(str) {
  var regExp = /[a-z0-9]+/gi;
  var wordd = str.match(regExp);

  var longw = wordd.sort(function(a, b) {
    return b.length - a.length;
  });
  return longw[0];
}

console.log(longWord1(str));

//Using a loop
function test(str) {
  var string = str.split(" ");
  var longest = "";
  for (i = 0; i < string.length; i++) {
    if (string[i].length > longest.length) {
      longest = string[i];
    }
  }
  return longest;
}
console.log(test(str));
