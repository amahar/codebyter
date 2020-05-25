//to get body element
// var x = document.getElementsByTagName('BODY')[0];
// console.log(x);

// var a = document.getElementById('same');
// a.addEventListener('click', checkCor);

var b = document.getElementById("not-same");
b.addEventListener("click", checkCor);

var c = document.getElementById("different");
c.addEventListener("click", checkCor);

var d = document.getElementById("not-same-second");
d.addEventListener("click", checkCor);

var e = document.getElementById("different-second");
e.addEventListener("click", checkCor);

function checkCor(e) {
  var m = this.offsetHeight;
  var n = this.offsetWidth;
  var o = this.offsetLeft;
  var p = this.offsetTop;
  var q = e.pageX; //coordinates for complete rendered page
  var r = e.pageY;
  var u = e.clientX; //cordinates for only visible portion
  var x = e.clientY;
  var y = e.screenX; //coordinate for comple monitor screen - hardly needed
  var z = e.screenY;

  console.log(o, p);

  var outputOffsetWH =
    "Current value of offsetWidth: " +
    n +
    ", Current value of offsetHeight" +
    m;
  var outputOffsets =
    "Current value of offsetLeft: " + o + ", Current value of offsetTop:" + p;
  var outputPage =
    "Current value of pageX: " + q + ", Current value of pageY:" + r;
  var outputClient =
    "Current value of clientX: " + u + ", Current value of clientY:" + x;
  var outputScreen =
    "Current value of screenX: " + y + ", Current value of screenY:" + z;

  document.getElementById("show-cordinates").innerHTML =
    outputOffsetWH +
    "<br>" +
    outputOffsets +
    "<br>" +
    outputPage +
    "<br>" +
    outputClient +
    "<br>" +
    outputScreen;
}
