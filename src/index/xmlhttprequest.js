"use strict";
//XHR example 1
var button = document.getElementById("button");
var ajaxResponse = document.getElementById("ajaxResponse");

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (request.readyState === 4) {
    button.style.border = "1px solid #e8e8e8";

    if (request.status === 200) {
      ajaxResponse.innerHTML = request.responseText;
    } else {
      ajaxResponse.innerHTML =
        "An error occurred during your request: " +
        request.status +
        " " +
        request.statusText;
    }
  }
};

request.open("Get", "../js/time-convert.js");

button.addEventListener("click", function() {
  this.style.display = "none";
  request.send();
});

//XHR example 2

//when user clicks button, the file uploads
function getRequest() {
  //get dom value
  var valueRec = document.getElementById("buttonTwo");

  //fire event listener
  valueRec.addEventListener("click", function() {
    //in this example we can also test the scope of functions
    //by seing if the 'xhttp' variable from above function conflicts
    var xhttp = new XMLHttpRequest();
    console.log(xhttp);
    xhttp.onreadystatechange = function() {
      //load dom value
      var response = document.getElementById("responseTwo");

      if (this.readyState == 4) {
        if (this.status == 200) {
          response.innerHTML = xhttp.responseText;
        } else {
          response.innerHTML = "fix your bugs man";
        }
      }
    };

    xhttp.open("GET", "../js/adding.js");
    xhttp.send();
  });
}
getRequest();

//XHR example 3
function loadDoc() {
  // code for modern browsers
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "../js/var-example.js", true);
  xhttp.send();
}

//xhr example 4

// steps: get input value -> set condition to see if we have the file -> call xhr
var el = document.getElementById("inputVal");
//var collectVal;

//get the input values
function getInput() {
  var url = el.value;
  inputRet(url);
}
//call event listenere
el.addEventListener("keyup", getInput);

//call xhr
function inputRet(url) {
  var xhttpInput = new XMLHttpRequest();

  xhttpInput.onreadystatechange = function() {
    if (xhttpInput.readyState == 4 && xhttpInput.status == 200) {
      document.getElementById("inputReturn").innerHTML =
        xhttpInput.responseText;
    } else {
      document.getElementById("inputReturn").innerHTML =
        "file not found" + " " + url;
    }
  };

  xhttpInput.open("GET", url);
  xhttpInput.send();
}
