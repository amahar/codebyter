
	
	var button = document.getElementById('button');
	var ajaxResponse = document.getElementById('ajaxResponse');
	
	var request = new XMLHttpRequest(); 

	request.onreadystatechange = function() {
	  	if(request.readyState === 4) {
	    button.style.border = '1px solid #e8e8e8';

		    if(request.status === 200) { 
		      ajaxResponse.innerHTML = request.responseText;
		    } else {
		      ajaxResponse.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
		    } 
	  }
	}
 
request.open('Get', 'time-convert.js');
 
button.addEventListener('click', function() {
  this.style.display = 'none';
  request.send();
});

function loadDoc() {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "var.js", true);
  xhttp.send();
}
