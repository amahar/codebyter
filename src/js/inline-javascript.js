(function() {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "http://yourdomain.com/script.js";
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
  console.log(x.parentNode.nodeName); //head
})();
