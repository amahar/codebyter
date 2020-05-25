str = "require js jquery";
function AlphabetSoup(str) {
  split = str
    .split("")
    .sort()
    .join("");

  return split;
}

// keep this function call here
console.log(AlphabetSoup(str));
