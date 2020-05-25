console.log("js loads");

var c = document.getElementsByClassName("respondCanvas");

var ct = c.getContext("2d");
var container = c.parentNode;
var imge = new Image();
var newimage = new Image();

newimage.onload = function() {
  ct.drawImage(newimage, 0, 0);
  console.log("is this alerting");
};
newimage.src = "images/bruceLee.jpeg";
imge.onload = function() {
  ct.drawImage(imge, 0, 0);
  console.log("is this alerting");
};
imge.src = "images/a.png";
// window.addEventListener('resize', canvasResponsive);

// function canvasResponsive () {

// 	var x = c.setAttribute('width', container.offsetWidth);
// 	var y = c.setAttribute('height', container.offsetHeight);

// 	// var img=document.getElementById("scream");
//  //    ctx.drawImage(img,10,10);
// }
