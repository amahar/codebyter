var whiteRabbit = { type: "white", speak: speak };
var fatRabbit = { type: "fat", speak: speak };

function speak(line) {
  console.log("The " + this.type + "rabbit says " + line + "'");
}

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");

// --------the above could be writted like this: but it is better refractored above as you can see:
// it is better because both objects are callling the same method, then why should we repeat ?

var whiteRabbit = {
  type: "white",
  speak: function(line) {
    console.log("The " + this.type + "rabbit says " + line + "'");
  }
};
whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");

var fatRabbit = {
  type: "fat",
  speak: function(line) {
    console.log("The " + this.type + "rabbit says " + line + "'");
  }
};
fatRabbit.speak("I could sure use a carrot right now.");

speak.apply(fatRabbit, ["Burp!"]);
// → The fat rabbit says 'Burp!'
speak.call({ type: "old" }, "Oh my.");
// → The old rabbit says 'Oh my.'
