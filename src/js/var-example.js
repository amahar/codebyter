//Understanding scope of using 'var'

var a = "rock";
b = "band";

function vart() {
  var b = "monster";
  a = "scary";

  (function() {
    console.log(b);
    console.log(a);
  })();
}

vart();
console.log(a);
console.log(b);
