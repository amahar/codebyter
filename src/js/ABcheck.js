str = "afbatka it";
function ABCheck(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      if ((str[i + 4] || str[str - 4]) === "b") {
        return true;
      }
    }
  }

  return false;
}
console.log(ABCheck(str));

//example showing using regular expression, understand how powerful are they and
//understand which combinations are available for regular expression.
function ABCheck(str) {
  return /a...b/g.test(str);
}
console.log(ABCheck(str));

//another example, and notice how |(or) is used in the expression;
function ABCheck(str) {
  patt = /(a...b|b...a)/;
  console.log(patt);
  return patt.test(str);
}
console.log(ABCheck(str));
